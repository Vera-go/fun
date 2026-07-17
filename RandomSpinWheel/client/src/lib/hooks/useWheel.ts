import { useState, useCallback } from 'react';

interface SpinResult {
  text: string;
  angle: number;
}

export default function useWheel() {
  const [wheelTitle, setWheelTitle] = useState('午餐選擇');
  const [options, setOptions] = useState<string[]>([
    '披薩', '壽司', '沙拉', '漢堡', '義大利麵'
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<SpinResult>({ text: '', angle: 0 });
  const [spinHistory, setSpinHistory] = useState<string[]>([]);

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
    setResult({ text: '', angle: 0 });
    setSpinHistory([]);
  }, []);

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
    spinHistory
  };
}
