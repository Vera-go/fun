import { useState, useCallback, useEffect, useRef } from 'react';

interface SpinResult {
  text: string;
  angle: number;
}

export interface SavedWheel {
  id: string;
  title: string;
  options: string[];
  noRepeat?: boolean;   // 抽過的就不再抽
  pickCount?: number;   // 要抽幾個（只有「不再抽」開著時才有意義）
}

// 存在這支手機的瀏覽器裡（不登入、不上傳）；換裝置或清除瀏覽資料就會不見
const STORAGE_KEY = 'wheel_saved_sets_v1';
export const MAX_SAVED = 10;
const FIRST_SAVE_KEY = 'wheel_saved_notice_seen_v1';

function loadSaved(): SavedWheel[] {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (!Array.isArray(raw)) return [];
    return raw
      .filter(w => w && typeof w.id === 'string' && typeof w.title === 'string' && Array.isArray(w.options))
      .slice(0, MAX_SAVED);
  } catch {
    return [];
  }
}

function persistSaved(list: SavedWheel[]): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
}

export default function useWheel() {
  const [wheelTitle, setWheelTitleRaw] = useState('午餐選擇');
  const [options, setOptions] = useState<string[]>([
    '披薩', '壽司', '沙拉', '漢堡', '義大利麵'
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<SpinResult>({ text: '', angle: 0 });
  const [spinHistory, setSpinHistory] = useState<string[]>([]);
  const [savedWheels, setSavedWheels] = useState<SavedWheel[]>(loadSaved);
  const [currentId, setCurrentId] = useState<string>('');
  const [notice, setNotice] = useState<string>('');
  const [touched, setTouched] = useState(false);   // 使用者有動過標題或選項（用來判斷「未儲存」）
  // 抽過不放回：drawn 是已抽出的選項（依 options 的位置，照抽出的順序）；
  // lastPick 是剛抽到的那個，在下一次旋轉開始前還會留在轉盤上，這樣停下來時指針指的格子才對得上
  const [noRepeat, setNoRepeatRaw] = useState(false);
  const [pickCount, setPickCountRaw] = useState(1);
  const [drawn, setDrawn] = useState<number[]>([]);
  const [lastPick, setLastPick] = useState<number | null>(null);
  const noticeTimer = useRef<ReturnType<typeof setTimeout>>();

  const showNotice = useCallback((text: string, ms = 3000) => {
    setNotice(text);
    clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(''), ms);
  }, []);
  useEffect(() => () => clearTimeout(noticeTimer.current), []);

  const setWheelTitle = useCallback((title: string) => {
    setWheelTitleRaw(title);
    setTouched(true);
  }, []);

  const addOption = useCallback(() => {
    setOptions(prev => [...prev, '']);
    setTouched(true);
  }, []);

  // 已經抽出的選項不能改、不能刪（畫面上也會停用），免得名單對不上
  const updateOption = useCallback((index: number, value: string) => {
    if (drawn.includes(index)) return;
    setTouched(true);
    setOptions(prev => {
      const newOptions = [...prev];
      newOptions[index] = value;
      return newOptions;
    });
  }, [drawn]);

  const removeOption = useCallback((index: number) => {
    if (drawn.includes(index)) return;
    setTouched(true);
    setOptions(prev => prev.filter((_, i) => i !== index));
    const shift = (i: number) => (i > index ? i - 1 : i);
    setDrawn(prev => prev.map(shift));
    setLastPick(prev => (prev === null ? null : shift(prev)));
  }, [drawn]);

  // 重新來過：已抽出的全部放回轉盤
  const resetRound = useCallback(() => {
    setDrawn([]);
    setLastPick(null);
    setResult({ text: '', angle: 0 });
    setSpinHistory([]);
  }, []);

  // 清空：只清掉選項，標題和目前選的已存轉盤都留著
  const clearOptions = useCallback(() => {
    setOptions([]);
    resetRound();
    setTouched(true);
  }, [resetRound]);

  const setNoRepeat = useCallback((on: boolean) => {
    setNoRepeatRaw(on);
    resetRound();
    setTouched(true);
  }, [resetRound]);

  const setPickCount = useCallback((n: number) => {
    setPickCountRaw(Math.max(1, Math.min(99, Math.floor(n) || 1)));
    setTouched(true);
  }, []);

  // 新增轉盤：一個全新的空白轉盤（不會動到已存的）
  const newWheel = useCallback(() => {
    setWheelTitleRaw('新轉盤');
    setOptions(['', '']);
    setCurrentId('');
    setNoRepeatRaw(false);
    setPickCountRaw(1);
    resetRound();
    setTouched(false);
  }, [resetRound]);

  // 空白的選項不會放進轉盤
  const activeOptions = options.map(o => o.trim()).filter(Boolean);
  const nonBlank = options.map((o, i) => (o.trim() ? i : -1)).filter(i => i >= 0);
  // 還沒被抽走的選項（沒開「不再抽」時就是全部）
  const remaining = noRepeat ? nonBlank.filter(i => !drawn.includes(i)) : nonBlank;
  // 轉盤上畫的格子：剛抽到的那一格在下一次旋轉前先留著
  const wheelIdx = noRepeat ? nonBlank.filter(i => !drawn.includes(i) || i === lastPick) : nonBlank;
  const wheelOptions = wheelIdx.map(i => options[i].trim());
  const targetCount = Math.max(1, Math.min(pickCount, nonBlank.length));
  const finished = noRepeat && drawn.length >= targetCount;
  const canSpin = !isSpinning && !finished && remaining.length >= 2;
  const drawnTexts = drawn.map(i => (options[i] ?? '').trim());

  // 有沒有還沒儲存的修改
  const saved = savedWheels.find(w => w.id === currentId);
  const isDirty = saved
    ? wheelTitle.trim() !== saved.title
      || JSON.stringify(activeOptions) !== JSON.stringify(saved.options)
      || noRepeat !== !!saved.noRepeat
      || (noRepeat && pickCount !== (saved.pickCount ?? 1))
    : touched && activeOptions.length > 0;

  // 名字重複時自動加（2）、（3）…，不會悄悄蓋掉別組
  const uniqueTitle = (title: string, list: SavedWheel[], excludeId = '') => {
    const taken = new Set(list.filter(w => w.id !== excludeId).map(w => w.title));
    if (!taken.has(title)) return title;
    let n = 2;
    while (taken.has(title + '（' + n + '）')) n++;
    return title + '（' + n + '）';
  };

  // asNew=true：另存成新的一組；否則有選中的就更新它，沒有就新增
  const saveWheel = useCallback((asNew = false) => {
    if (activeOptions.length < 2) {
      showNotice('至少要有 2 個選項才能儲存');
      return;
    }
    const baseTitle = wheelTitle.trim() || '未命名轉盤';
    const target = asNew ? undefined : savedWheels.find(w => w.id === currentId);
    const title = uniqueTitle(baseTitle, savedWheels, target?.id);
    let next: SavedWheel[];
    let id: string;
    if (target) {
      id = target.id;
      next = savedWheels.map(w => (w.id === id ? { id, title, options: activeOptions, noRepeat, pickCount } : w));
    } else {
      if (savedWheels.length >= MAX_SAVED) {
        showNotice(`最多存 ${MAX_SAVED} 組，請先刪掉一組`);
        return;
      }
      id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      next = [...savedWheels, { id, title, options: activeOptions, noRepeat, pickCount }];
    }
    if (!persistSaved(next)) {
      showNotice('這個瀏覽器不讓我們儲存，請檢查是不是無痕模式');
      return;
    }
    setSavedWheels(next);
    setCurrentId(id);
    setWheelTitleRaw(title);
    setOptions(activeOptions);
    // 空白格被拿掉後位置會變，已抽出的位置也要跟著換算
    const remap = (i: number) => nonBlank.indexOf(i);
    setDrawn(prev => prev.map(remap).filter(i => i >= 0));
    setLastPick(prev => (prev === null || remap(prev) < 0 ? null : remap(prev)));
    setTouched(false);
    // 第一次儲存時，提醒資料只存在這個瀏覽器（停留久一點，只出現一次）
    let firstTime = false;
    try {
      firstTime = !localStorage.getItem(FIRST_SAVE_KEY);
      if (firstTime) localStorage.setItem(FIRST_SAVE_KEY, '1');
    } catch { /* 讀不到就當作不是第一次 */ }
    const renamed = title !== baseTitle ? '（名字重複，已改成「' + title + '」）' : '';
    if (firstTime) {
      showNotice('已儲存「' + title + '」。提醒：這份資料只存在這個瀏覽器裡，不是雲端，換個地方就看不到了。', 8000);
    } else {
      showNotice((target ? '已更新「' : '已儲存「') + title + '」' + renamed);
    }
  }, [activeOptions, nonBlank, noRepeat, pickCount, wheelTitle, savedWheels, currentId, showNotice]);

  const loadWheel = useCallback((id: string) => {
    const found = savedWheels.find(w => w.id === id);
    if (!found) {
      setCurrentId('');
      return;
    }
    setCurrentId(found.id);
    setWheelTitleRaw(found.title);
    setOptions([...found.options]);
    setNoRepeatRaw(!!found.noRepeat);
    setPickCountRaw(found.pickCount ?? 1);
    resetRound();
    setTouched(false);
  }, [savedWheels, resetRound]);

  const deleteWheel = useCallback((id: string) => {
    const found = savedWheels.find(w => w.id === id);
    if (!found) return;
    const next = savedWheels.filter(w => w.id !== id);
    persistSaved(next);
    setSavedWheels(next);
    if (currentId === id) setCurrentId('');
    showNotice('已刪除「' + found.title + '」');
  }, [savedWheels, currentId, showNotice]);

  const spinWheel = useCallback(() => {
    if (!canSpin) return;

    // 這次要在哪些選項裡抽（位置都是 options 的位置）
    const cand = remaining;
    setLastPick(null);
    setIsSpinning(true);

    const randomIndex = Math.floor(Math.random() * cand.length);
    const pickedIdx = cand[randomIndex];
    const selectedOption = options[pickedIdx].trim();

    // 轉盤角度：至少轉 5 圈，停在選中那一格的正中間（那一格轉到最上面、指針下方）
    const sliceAngle = 360 / cand.length;
    const baseRotation = 360 * 5;
    const offset = 360 - (randomIndex * sliceAngle);
    const adjustment = sliceAngle / 2;
    const targetAngle = baseRotation + offset - adjustment;

    setResult({ text: '', angle: targetAngle });

    // 轉完後顯示結果（動畫 9 秒）
    setTimeout(() => {
      setResult({ text: selectedOption, angle: targetAngle });
      setSpinHistory(prev => [selectedOption, ...prev]);
      if (noRepeat) {
        const left = cand.filter(i => i !== pickedIdx);
        const after = [pickedIdx];
        // 還要再抽、但只剩 1 個，就是它了：自動列入
        if (left.length === 1 && drawn.length + 1 < targetCount) {
          after.push(left[0]);
          showNotice('只剩 1 個，就是「' + options[left[0]].trim() + '」了');
        }
        setDrawn(prev => [...prev, ...after]);
        setLastPick(pickedIdx);
      }
      setIsSpinning(false);
    }, 9000);
  }, [canSpin, remaining, options, noRepeat, drawn, targetCount, showNotice]);

  return {
    wheelTitle,
    setWheelTitle,
    options,
    activeOptions,
    wheelOptions,
    canSpin,
    noRepeat,
    setNoRepeat,
    pickCount: targetCount,
    setPickCount,
    drawn,
    drawnTexts,
    finished,
    remainingCount: remaining.length,
    resetRound,
    addOption,
    updateOption,
    removeOption,
    clearOptions,
    newWheel,
    isDirty,
    spinWheel,
    isSpinning,
    result,
    spinHistory,
    savedWheels,
    currentId,
    notice,
    saveWheel,
    loadWheel,
    deleteWheel
  };
}
