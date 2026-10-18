import { useState, useCallback, useEffect, useRef } from 'react';

interface SpinResult {
  text: string;
  angle: number;
}

export interface SavedWheel {
  id: string;
  title: string;
  options: string[];
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

  const updateOption = useCallback((index: number, value: string) => {
    setTouched(true);
    setOptions(prev => {
      const newOptions = [...prev];
      newOptions[index] = value;
      return newOptions;
    });
  }, []);

  const removeOption = useCallback((index: number) => {
    setTouched(true);
    setOptions(prev => prev.filter((_, i) => i !== index));
  }, []);

  // 清空：只清掉選項，標題和目前選的已存轉盤都留著
  const clearOptions = useCallback(() => {
    setOptions([]);
    setResult({ text: '', angle: 0 });
    setSpinHistory([]);
    setTouched(true);
  }, []);

  // 新增轉盤：一個全新的空白轉盤（不會動到已存的）
  const newWheel = useCallback(() => {
    setWheelTitleRaw('新轉盤');
    setOptions(['', '']);
    setCurrentId('');
    setResult({ text: '', angle: 0 });
    setSpinHistory([]);
    setTouched(false);
  }, []);

  // 空白的選項不會放進轉盤
  const activeOptions = options.map(o => o.trim()).filter(Boolean);

  // 有沒有還沒儲存的修改
  const saved = savedWheels.find(w => w.id === currentId);
  const isDirty = saved
    ? wheelTitle.trim() !== saved.title || JSON.stringify(activeOptions) !== JSON.stringify(saved.options)
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
      next = savedWheels.map(w => (w.id === id ? { id, title, options: activeOptions } : w));
    } else {
      if (savedWheels.length >= MAX_SAVED) {
        showNotice(`最多存 ${MAX_SAVED} 組，請先刪掉一組`);
        return;
      }
      id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      next = [...savedWheels, { id, title, options: activeOptions }];
    }
    if (!persistSaved(next)) {
      showNotice('這個瀏覽器不讓我們儲存，請檢查是不是無痕模式');
      return;
    }
    setSavedWheels(next);
    setCurrentId(id);
    setWheelTitleRaw(title);
    setOptions(activeOptions);
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
  }, [activeOptions, wheelTitle, savedWheels, currentId, showNotice]);

  const loadWheel = useCallback((id: string) => {
    const found = savedWheels.find(w => w.id === id);
    if (!found) {
      setCurrentId('');
      return;
    }
    setCurrentId(found.id);
    setWheelTitleRaw(found.title);
    setOptions([...found.options]);
    setResult({ text: '', angle: 0 });
    setTouched(false);
  }, [savedWheels]);

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
    if (isSpinning || activeOptions.length < 2) return;

    setIsSpinning(true);
    
    // Select a random winner
    const randomIndex = Math.floor(Math.random() * activeOptions.length);
    const selectedOption = activeOptions[randomIndex];
    
    // 全新的輪盤角度計算 - 完全不同的思路
    const sliceAngle = 360 / activeOptions.length;
    
    // 基礎旋轉角度（保證至少轉動5圈）
    const baseRotation = 360 * 5; 
    
    // 原始角度補償值
    // 我們需要旋轉(360 - 當前選項位置)度，使選項到頂部
    // 選項位置計算：randomIndex * sliceAngle
    const offset = 360 - (randomIndex * sliceAngle);
    
    // 再加上半個扇形角度，使指針指向選項中間
    const adjustment = sliceAngle / 2;
    
    // 最終旋轉角度
    const targetAngle = baseRotation + offset - adjustment;
    
    console.log(`扇形角度: ${sliceAngle}度`);
    console.log(`選中項: ${selectedOption} (索引 ${randomIndex})`);
    console.log(`選中項角度: ${randomIndex * sliceAngle}度`);
    console.log(`最終轉盤旋轉角度: ${targetAngle}度`);
    
    console.log(`隨機選中索引 ${randomIndex}: ${selectedOption}`);
    console.log(`每個選項的角度: ${sliceAngle}度`);
    console.log(`目標旋轉角度: ${targetAngle}度`);
    
    setResult({ text: '', angle: targetAngle });
    
    // Show result after animation
    setTimeout(() => {
      setResult({ text: selectedOption, angle: targetAngle });
      setSpinHistory(prev => [selectedOption, ...prev]);
      setIsSpinning(false);
    }, 9000); // 延長到9秒以匹配轉盤動畫時間
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSpinning, options]);

  return {
    wheelTitle,
    setWheelTitle,
    options,
    activeOptions,
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
