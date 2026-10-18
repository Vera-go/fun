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
  const [wheelTitle, setWheelTitle] = useState('午餐選擇');
  const [options, setOptions] = useState<string[]>([
    '披薩', '壽司', '沙拉', '漢堡', '義大利麵'
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<SpinResult>({ text: '', angle: 0 });
  const [spinHistory, setSpinHistory] = useState<string[]>([]);
  const [savedWheels, setSavedWheels] = useState<SavedWheel[]>(loadSaved);
  const [currentId, setCurrentId] = useState<string>('');
  const [notice, setNotice] = useState<string>('');
  const noticeTimer = useRef<ReturnType<typeof setTimeout>>();

  const showNotice = useCallback((text: string, ms = 3000) => {
    setNotice(text);
    clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(''), ms);
  }, []);
  useEffect(() => () => clearTimeout(noticeTimer.current), []);

  const addOption = useCallback(() => {
    setOptions(prev => [...prev, '']);
  }, []);

  const updateOption = useCallback((index: number, value: string) => {
    setOptions(prev => {
      const newOptions = [...prev];
      newOptions[index] = value;
      return newOptions;
    });
  }, []);

  const removeOption = useCallback((index: number) => {
    setOptions(prev => prev.filter((_, i) => i !== index));
  }, []);

  const resetWheel = useCallback(() => {
    setWheelTitle('新轉盤');
    setOptions([]);
    setCurrentId('');
    setResult({ text: '', angle: 0 });
    setSpinHistory([]);
  }, []);

  // 儲存目前的轉盤：標題當名字；同一組（或同名）會直接更新，不會重複
  const saveWheel = useCallback(() => {
    const cleaned = options.map(o => o.trim()).filter(Boolean);
    if (cleaned.length < 2) {
      showNotice('至少要有 2 個選項才能儲存');
      return;
    }
    const title = wheelTitle.trim() || '未命名轉盤';
    const existing = savedWheels.find(w => w.id === currentId) || savedWheels.find(w => w.title === title);
    let next: SavedWheel[];
    let id: string;
    if (existing) {
      id = existing.id;
      next = savedWheels.map(w => (w.id === id ? { id, title, options: cleaned } : w));
    } else {
      if (savedWheels.length >= MAX_SAVED) {
        showNotice(`最多存 ${MAX_SAVED} 組，請先刪掉一組`);
        return;
      }
      id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      next = [...savedWheels, { id, title, options: cleaned }];
    }
    if (!persistSaved(next)) {
      showNotice('這個瀏覽器不讓我們儲存，請檢查是不是無痕模式');
      return;
    }
    setSavedWheels(next);
    setCurrentId(id);
    setWheelTitle(title);
    setOptions(cleaned);
    // 第一次儲存時，提醒資料只存在這個瀏覽器（停留久一點，只出現一次）
    let firstTime = false;
    try {
      firstTime = !localStorage.getItem(FIRST_SAVE_KEY);
      if (firstTime) localStorage.setItem(FIRST_SAVE_KEY, '1');
    } catch { /* 讀不到就當作不是第一次 */ }
    if (firstTime) {
      showNotice('已儲存「' + title + '」。提醒：資料只存在這個瀏覽器，換手機、用無痕模式，或用別的瀏覽器開，都會看不到。', 8000);
    } else {
      showNotice(existing ? '已更新「' + title + '」' : '已儲存「' + title + '」');
    }
  }, [options, wheelTitle, savedWheels, currentId, showNotice]);

  const loadWheel = useCallback((id: string) => {
    const found = savedWheels.find(w => w.id === id);
    if (!found) {
      setCurrentId('');
      return;
    }
    setCurrentId(found.id);
    setWheelTitle(found.title);
    setOptions([...found.options]);
    setResult({ text: '', angle: 0 });
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
    if (isSpinning || options.length < 2) return;

    setIsSpinning(true);
    
    // Select a random winner
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex];
    
    // 全新的輪盤角度計算 - 完全不同的思路
    const sliceAngle = 360 / options.length;
    
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
  }, [isSpinning, options]);

  return {
    wheelTitle,
    setWheelTitle,
    options,
    addOption,
    updateOption,
    removeOption,
    resetWheel,
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
