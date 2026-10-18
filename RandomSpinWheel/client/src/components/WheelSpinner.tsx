import { useEffect, useRef, useState } from "react";
import { getColorForIndex, isLightColor } from "@/lib/utils/colors";

interface WheelSpinnerProps {
  options: string[];
  isSpinning: boolean;
  spinAngle: number;
  onSpinWheel?: () => void;
}

export default function WheelSpinner({ options, isSpinning, spinAngle, onSpinWheel }: WheelSpinnerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // 紀錄選項在轉盤上的位置，供調試使用
  const debugPositions = () => {
    if (!options.length) return;
    
    const sliceAngle = 360 / options.length;
    console.log("選項位置與角度：");
    options.forEach((option, index) => {
      const startAngle = index * sliceAngle;
      const midAngle = startAngle + sliceAngle/2;
      console.log(`${index}: ${option} - 位於 ${startAngle}° 到 ${startAngle + sliceAngle}° (中心: ${midAngle}°)`);
    });
  };
  
  // 繪製轉盤
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const center = width / 2;
    const radius = width / 2 - 20; // 縮小一點以便添加外部裝飾
    
    // 清除畫布
    ctx.clearRect(0, 0, width, height);
    
    // 繪製外圈裝飾
    const decorRadius = radius + 10;
    for (let i = 0; i < 36; i++) {
      const angle = (i * 10) * Math.PI / 180;
      const x1 = center + decorRadius * Math.cos(angle);
      const y1 = center + decorRadius * Math.sin(angle);
      const x2 = center + (decorRadius + 10) * Math.cos(angle);
      const y2 = center + (decorRadius + 10) * Math.sin(angle);
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = i % 2 === 0 ? '#FF9999' : '#FFDD99';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
    
    if (options.length === 0) {
      // 如果沒有選項，繪製空轉盤
      ctx.beginPath();
      ctx.arc(center, center, radius, 0, 2 * Math.PI);
      ctx.fillStyle = "#FFF5F5"; // 淡粉色背景
      ctx.fill();
      
      // 繪製粉色條紋
      for (let i = 0; i < 12; i++) {
        const startAngle = i * Math.PI / 6;
        const endAngle = startAngle + Math.PI / 12;
        
        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = i % 2 === 0 ? '#FFDBDB' : '#FFF5F5';
        ctx.fill();
      }
      
      ctx.strokeStyle = "#FFC0CB"; // 粉色邊框
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // 繪製提示文字
      ctx.font = "bold 18px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#FF6B6B";
      ctx.fillText("新增選項來建立轉盤", center, center);
      
    } else {
      // 繪製每個扇形 - 注意：我們反向繪製，這樣索引0的選項會在頂部
      const sliceAngle = (2 * Math.PI) / options.length;
      
      // 打印調試信息
      debugPositions();
      
      // 重要: 12點鐘方向為起始位置(0度)，順時針繪製
      options.forEach((option, i) => {
        // 每個扇形的角度範圍
        // -Math.PI/2 是12點鐘方向(-90度)
        const startAngle = -Math.PI/2 + i * sliceAngle;
        const endAngle = -Math.PI/2 + (i + 1) * sliceAngle;
        
        // 扇形
        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, radius, startAngle, endAngle);
        ctx.closePath();
        
        // 填充顏色 - 使用更可愛的卡哇伊色彩
        const cuteColors = [
          '#FF9FF3', '#A5F1E9', '#FFCEFE', '#FFF89A', 
          '#FFAAC9', '#B5F0F0', '#FFC0D9', '#C1FFD7',
          '#CAB8FF', '#FFE5A7', '#F3C5FF', '#B5EAD7'
        ];
        ctx.fillStyle = cuteColors[i % cuteColors.length];
        ctx.fill();
        
        // 可愛邊框
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 4;
        ctx.stroke();
        
        // 添加邊框裝飾
        ctx.beginPath();
        ctx.setLineDash([3, 5]);
        ctx.arc(center, center, radius - 6, startAngle, endAngle);
        ctx.strokeStyle = "#FFFFFF90";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.setLineDash([]);
        
        // 為每個扇形增加小圖案
        const iconRadius = radius * 0.40;
        const iconAngle = startAngle + sliceAngle / 2;
        const iconX = center + iconRadius * Math.cos(iconAngle);
        const iconY = center + iconRadius * Math.sin(iconAngle);
        
        // 繪製小圖案
        ctx.save();
        ctx.translate(iconX, iconY);
        
        // 繪製卡哇伊風格小圖案
        if (i % 6 === 0) {
          // 繪製星星
          const starSize = 16;
          ctx.beginPath();
          for (let j = 0; j < 5; j++) {
            const starAngle = (j * 2 * Math.PI / 5) - Math.PI / 2;
            const x = Math.cos(starAngle) * starSize;
            const y = Math.sin(starAngle) * starSize;
            ctx.lineTo(x, y);
            
            const innerAngle = starAngle + Math.PI / 5;
            const innerX = Math.cos(innerAngle) * (starSize/2);
            const innerY = Math.sin(innerAngle) * (starSize/2);
            ctx.lineTo(innerX, innerY);
          }
          ctx.closePath();
          // 漸變填充
          const starGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, starSize);
          starGradient.addColorStop(0, "#FFFD8C");
          starGradient.addColorStop(1, "#FFF700");
          ctx.fillStyle = starGradient;
          ctx.fill();
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 1.5;
          ctx.stroke();
          
        } else if (i % 6 === 1) {
          // 繪製愛心
          const heartSize = 14;
          ctx.beginPath();
          ctx.moveTo(0, heartSize*0.8);
          ctx.bezierCurveTo(heartSize, -heartSize*0.5, heartSize*2, heartSize*0.8, 0, heartSize*2);
          ctx.bezierCurveTo(-heartSize*2, heartSize*0.8, -heartSize, -heartSize*0.5, 0, heartSize*0.8);
          // 漸變填充
          const heartGradient = ctx.createRadialGradient(0, heartSize*0.8, 0, 0, heartSize*0.8, heartSize*2);
          heartGradient.addColorStop(0, "#FF9EB5");
          heartGradient.addColorStop(1, "#FF5252");
          ctx.fillStyle = heartGradient;
          ctx.fill();
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 1;
          ctx.stroke();
          
        } else if (i % 6 === 2) {
          // 繪製花朵
          const flowerSize = 14;
          const petalColors = ["#FFC0CB", "#FFAAD6", "#FF85C8", "#FFA6DB", "#FF94BB"];
          
          for (let j = 0; j < 5; j++) {
            ctx.beginPath();
            const petalAngle = j * (2 * Math.PI / 5);
            const petalX = Math.cos(petalAngle) * flowerSize;
            const petalY = Math.sin(petalAngle) * flowerSize;
            ctx.arc(petalX, petalY, flowerSize, 0, 2 * Math.PI);
            ctx.fillStyle = petalColors[j];
            ctx.fill();
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
          ctx.beginPath();
          ctx.arc(0, 0, flowerSize/2, 0, 2 * Math.PI);
          ctx.fillStyle = "#FFFFA0";
          ctx.fill();
          
        } else if (i % 6 === 3) {
          // 繪製蝴蝶結
          const bowSize = 15;
          
          // 左側
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.quadraticCurveTo(-bowSize/2, -bowSize/2, -bowSize, -bowSize/4);
          ctx.quadraticCurveTo(-bowSize*1.2, -bowSize*0.8, -bowSize, -bowSize);
          ctx.quadraticCurveTo(-bowSize/2, -bowSize/2, 0, 0);
          ctx.fillStyle = "#FF96E3";
          ctx.fill();
          
          // 右側
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.quadraticCurveTo(bowSize/2, -bowSize/2, bowSize, -bowSize/4);
          ctx.quadraticCurveTo(bowSize*1.2, -bowSize*0.8, bowSize, -bowSize);
          ctx.quadraticCurveTo(bowSize/2, -bowSize/2, 0, 0);
          ctx.fillStyle = "#FF96E3";
          ctx.fill();
          
          // 中間結
          ctx.beginPath();
          ctx.arc(0, 0, bowSize/4, 0, 2 * Math.PI);
          ctx.fillStyle = "#FFCFF8";
          ctx.fill();
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 1;
          ctx.stroke();
          
        } else if (i % 6 === 4) {
          // 繪製雲朵
          const cloudSize = 14;
          
          ctx.beginPath();
          ctx.arc(-cloudSize/2, 0, cloudSize/2, 0, 2 * Math.PI);
          ctx.arc(0, -cloudSize/3, cloudSize/2, 0, 2 * Math.PI);
          ctx.arc(cloudSize/2, 0, cloudSize/2, 0, 2 * Math.PI);
          ctx.fillStyle = "#F0F8FF";
          ctx.fill();
          ctx.strokeStyle = "#D6EAF8";
          ctx.lineWidth = 1;
          ctx.stroke();
          
        } else {
          // 繪製貓咪臉
          ctx.beginPath();
          ctx.arc(0, 0, 14, 0, 2 * Math.PI);
          ctx.fillStyle = "#FFEFD5";
          ctx.fill();
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // 眼睛
          ctx.beginPath();
          ctx.arc(-5, -2, 2.5, 0, 2 * Math.PI);
          ctx.arc(5, -2, 2.5, 0, 2 * Math.PI);
          ctx.fillStyle = "#333";
          ctx.fill();
          
          // 小亮點
          ctx.beginPath();
          ctx.arc(-4, -3, 1, 0, 2 * Math.PI);
          ctx.arc(6, -3, 1, 0, 2 * Math.PI);
          ctx.fillStyle = "#FFF";
          ctx.fill();
          
          // 鼻子
          ctx.beginPath();
          ctx.arc(0, 2, 1.5, 0, 2 * Math.PI);
          ctx.fillStyle = "#FF9494";
          ctx.fill();
          
          // 嘴巴
          ctx.beginPath();
          ctx.moveTo(0, 3);
          ctx.lineTo(-4, 6);
          ctx.moveTo(0, 3);
          ctx.lineTo(4, 6);
          ctx.strokeStyle = "#FF9494";
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // 貓耳
          ctx.beginPath();
          ctx.moveTo(-8, -8);
          ctx.lineTo(-5, -14);
          ctx.lineTo(-1, -9);
          ctx.closePath();
          ctx.moveTo(8, -8);
          ctx.lineTo(5, -14);
          ctx.lineTo(1, -9);
          ctx.closePath();
          ctx.fillStyle = "#FFEFD5";
          ctx.fill();
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        
        ctx.restore();
        
        // 繪製選項文字：選項少時沿著弧線橫排，選項多時改成朝圓心方向直排
        // 字太長就先拆成兩行（字才不會縮到看不清楚），還是放不下才縮小
        const n = options.length;
        const radial = n >= 7;
        const textRadius = radial ? radius * 0.62 : radius * 0.75;
        const textAngle = startAngle + sliceAngle / 2;
        const textX = center + textRadius * Math.cos(textAngle);
        const textY = center + textRadius * Math.sin(textAngle);

        ctx.save();
        ctx.translate(textX, textY);
        if (radial) {
          // 朝外的字，在左半邊翻過來才不會倒著讀
          ctx.rotate(textAngle + (Math.cos(textAngle) < 0 ? Math.PI : 0));
        } else {
          ctx.rotate(textAngle + Math.PI / 2);
        }
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const maxLength = 12;
        const full = option.length > maxLength ? option.slice(0, maxLength) + "…" : option;
        // 文字方向上可用的長度、垂直方向上可用的高度
        const along = radial ? radius * 0.68 : 2 * textRadius * Math.sin(sliceAngle / 2) * 0.9;
        const across = radial ? 2 * textRadius * Math.sin(sliceAngle / 2) * 0.9 : radius * 0.4;
        const baseSize = n <= 6 ? 24 : n <= 9 ? 22 : 20;
        const minSize = 13;

        const measure = (t: string) => { ctx.font = `bold ${baseSize}px Arial, sans-serif`; return ctx.measureText(t).width; };
        const fitSize = (lines: string[]) => {
          const widest = Math.max(...lines.map(measure));
          const byWidth = baseSize * Math.min(1, along / widest);
          const byHeight = across / (lines.length === 1 ? 1.4 : 2.5);
          return Math.floor(Math.min(byWidth, byHeight));
        };

        let lines = [full];
        let fontSize = fitSize(lines);
        if (fontSize < 17 && full.length > 3) {
          const cut = Math.ceil(full.length / 2);
          const two = [full.slice(0, cut), full.slice(cut)];
          const twoSize = fitSize(two);
          if (twoSize > fontSize) { lines = two; fontSize = twoSize; }
        }
        fontSize = Math.max(minSize, fontSize);
        ctx.font = `bold ${fontSize}px Arial, sans-serif`;
        const lineGap = fontSize * 1.15;

        // 白色描邊讓字在淡色扇形上也清楚；字用深紫（和每個淡色扇形的對比都在 7.6 倍以上）
        ctx.strokeStyle = 'rgba(255,255,255,0.9)';
        ctx.lineWidth = 4;
        ctx.lineJoin = 'round';
        ctx.fillStyle = '#4A1942';
        lines.forEach((line, li) => {
          const y = (li - (lines.length - 1) / 2) * lineGap;
          ctx.strokeText(line, 0, y);
          ctx.fillText(line, 0, y);
        });

        ctx.restore();
      });
      
      // 繪製邊緣裝飾 - 小圓點
      for (let i = 0; i < 36; i++) {
        const dotAngle = (i * 10) * Math.PI / 180;
        const dotX = center + radius * Math.cos(dotAngle);
        const dotY = center + radius * Math.sin(dotAngle);
        
        ctx.beginPath();
        ctx.arc(dotX, dotY, 3, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
      }
    }
    
    setIsInitialized(true);
    
  }, [options, isSpinning]);
  
  // 控制旋轉
  useEffect(() => {
    if (!isInitialized) return;
    
    const wheel = wheelRef.current;
    if (!wheel) return;
    
    if (isSpinning) {
      // 確保轉盤開始旋轉前處於初始狀態
      wheel.style.transition = 'none';
      wheel.style.transform = 'rotate(0deg)';
      
      // 強制重新繪製以應用上一行樣式
      wheel.offsetHeight;
      
      // 設置旋轉動畫 - 使用更加緩慢平滑的曲線
      wheel.style.transition = `transform ${9}s cubic-bezier(0.34, 0.95, 0.34, 0.95)`;
      wheel.style.transform = `rotate(${spinAngle}deg)`;
    } else if (spinAngle > 0) {
      // 旋轉結束後保持在結果位置
      wheel.style.transition = 'none';
      wheel.style.transform = `rotate(${spinAngle % 360}deg)`;
    } else if (spinAngle > 0) {
      // 旋轉結束後保持在結果位置
      wheel.style.transition = 'none';
      wheel.style.transform = `rotate(${spinAngle % 360}deg)`;
    } else {
      // 換了一個轉盤（結果被清掉）就轉回原位，不要停在上一個轉盤的角度
      wheel.style.transition = 'none';
      wheel.style.transform = 'rotate(0deg)';
    }
  }, [isSpinning, spinAngle, isInitialized]);
  
  const handleWheelClick = () => {
    if (!isSpinning && onSpinWheel) {
      // 點擊轉盤時觸發旋轉
      onSpinWheel();
    }
  };
  
  return (
    <div className="relative w-full h-full">
      {/* 閃亮背景效果 */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 animate-pulse-slow"></div>
      
      {/* 轉盤主體 */}
      <div 
        ref={wheelRef}
        onClick={handleWheelClick}
        className="absolute w-full h-full rounded-full overflow-hidden border-4 border-pink-200 shadow-xl cursor-pointer" 
        style={{ transform: 'rotate(0deg)' }}
      >
        <canvas 
          ref={canvasRef} 
          width={500} 
          height={500} 
          className="w-full h-full"
        />
      </div>
      
      {/* 頂端的指針：愛心撲克牌的尖角朝下，指著抽中的那一格（紅心皇后） */}
      <div className={`absolute left-1/2 -translate-x-1/2 -top-3 z-30 pointer-events-none ${!isSpinning && spinAngle > 0 ? "animate-bounce-slow" : ""}`}>
        <svg width="40" height="44" viewBox="0 0 40 44" aria-hidden="true">
          <path
            d="M20 41 C6 29 2 22 2 14 C2 7 7 3 12 3 C16 3 19 5 20 8 C21 5 24 3 28 3 C33 3 38 7 38 14 C38 22 34 29 20 41 Z"
            fill="#E6325F" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round"
          />
          <ellipse cx="12" cy="12" rx="4" ry="2.6" fill="#FFFFFF" opacity="0.55" transform="rotate(-30 12 12)" />
        </svg>
      </div>

      {/* 中央固定的角色：戴著瘋帽匠高帽的小豬（愛麗絲夢遊仙境）。轉盤轉的時候，牠會暈到眼睛打轉 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[56%] z-20 pointer-events-none w-[27%]">
        <svg viewBox="0 0 120 130" className="w-full h-auto" aria-hidden="true">
          <defs>
            <radialGradient id="pig-skin" cx="40%" cy="35%" r="75%">
              <stop offset="0%" stopColor="#FFD6E8" />
              <stop offset="100%" stopColor="#FF9CC6" />
            </radialGradient>
          </defs>

          {/* 耳朵 */}
          <path d="M30 60 C18 48 20 30 28 24 C38 30 46 42 46 56 Z" fill="#FF8DBD" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round" />
          <path d="M90 60 C102 48 100 30 92 24 C82 30 74 42 74 56 Z" fill="#FF8DBD" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round" />

          {/* 頭 */}
          <circle cx="60" cy="78" r="38" fill="url(#pig-skin)" stroke="#FFFFFF" strokeWidth="4" />

          {/* 眼睛：平常是有神的大眼，旋轉時變成打轉的漩渦 */}
          {isSpinning ? (
            <g fill="none" stroke="#4A1942" strokeWidth="2.4" strokeLinecap="round">
              <path d="M42 72 m0 0 a2 2 0 1 1 4 0 a5 5 0 1 1 -8 0 a8 8 0 1 1 13 0" />
              <path d="M78 72 m0 0 a2 2 0 1 0 -4 0 a5 5 0 1 0 8 0 a8 8 0 1 0 -13 0" />
            </g>
          ) : (
            <g>
              <circle cx="44" cy="72" r="6.5" fill="#FFFFFF" />
              <circle cx="76" cy="72" r="6.5" fill="#FFFFFF" />
              <circle cx="45.5" cy="73" r="3.4" fill="#4A1942" />
              <circle cx="74.5" cy="73" r="3.4" fill="#4A1942" />
              <circle cx="46.6" cy="71.6" r="1.1" fill="#FFFFFF" />
              <circle cx="75.6" cy="71.6" r="1.1" fill="#FFFFFF" />
            </g>
          )}

          {/* 腮紅 */}
          <ellipse cx="34" cy="88" rx="7" ry="4.5" fill="#FF7FB0" opacity="0.55" />
          <ellipse cx="86" cy="88" rx="7" ry="4.5" fill="#FF7FB0" opacity="0.55" />

          {/* 豬鼻 */}
          <ellipse cx="60" cy="90" rx="16" ry="11.5" fill="#FF86B8" stroke="#FFFFFF" strokeWidth="2.5" />
          <ellipse cx="54" cy="90" rx="2.6" ry="4" fill="#4A1942" />
          <ellipse cx="66" cy="90" rx="2.6" ry="4" fill="#4A1942" />

          {/* 柴郡貓式的大笑：旋轉時張開 */}
          {isSpinning ? (
            <path d="M44 104 Q60 124 76 104 Z" fill="#4A1942" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
          ) : (
            <path d="M42 103 Q60 118 78 103" fill="none" stroke="#4A1942" strokeWidth="3" strokeLinecap="round" />
          )}

          {/* 瘋帽匠的高帽（微微歪一邊） */}
          <g transform="rotate(-9 60 46)">
            <path d="M38 48 L42 8 Q60 2 78 8 L82 48 Z" fill="#4A1942" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round" />
            <path d="M39.6 38 L80.4 38 L81.4 48 L38.6 48 Z" fill="#FF6FB5" />
            <ellipse cx="60" cy="49" rx="30" ry="7" fill="#4A1942" stroke="#FFFFFF" strokeWidth="3" />
            {/* 帽子上插的紙牌：10/6 */}
            <g transform="rotate(8 69 36)">
              <rect x="62" y="22" width="16" height="22" rx="2.5" fill="#FFFDF5" stroke="#4A1942" strokeWidth="1.4" />
              <text x="70" y="36" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#E6325F" fontFamily="Georgia, serif">10/6</text>
            </g>
          </g>
        </svg>
      </div>

      {/* 轉盤邊框裝飾 */}
      {!isSpinning && (
        <div className="absolute inset-0 rounded-full border-8 border-pink-200 pointer-events-none z-10 animate-spin-slow opacity-50"></div>
      )}
      
      {/* 結果慶祝效果 */}
      {!isSpinning && spinAngle > 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
          {/* 彩色紙屑和閃光效果 */}
          <div className="absolute w-full h-full">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="absolute top-0 left-1/2 h-1/2 origin-bottom" 
                style={{ 
                  transform: `rotate(${i * 30}deg)`,
                  animation: `confetti-fall 3s ease-out ${i * 0.1}s infinite`
                }}
              >
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-pink-400 opacity-70"></div>
              </div>
            ))}
          </div>
          
          {/* 全新的選中項目特效 - 更加明顯，獨立於轉盤 */}
          <div className="absolute inset-0 z-50 pointer-events-none">
            {/* 特效扇形光芒 - 固定在12點方向 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
              {/* 多層光芒 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32">
                <div className="relative w-full h-full rotate-45">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full bg-gradient-to-b from-yellow-300 to-transparent opacity-70 animate-pulse-fast"></div>
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-4 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-70 animate-pulse-fast" style={{animationDelay: "0.2s"}}></div>
                </div>
              </div>
              
              {/* 超級顯眼的星星特效 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
                {/* 輔助星星 */}
                <div className="absolute top-10 -left-6">
                  <svg width="30" height="30" viewBox="0 0 20 20" className="animate-sparkle" style={{animationDelay: "0.2s"}}>
                    <path 
                      d="M10 0 L12 7 L20 7 L14 12 L16 20 L10 15 L4 20 L6 12 L0 7 L8 7 Z" 
                      fill="#FF69B4" 
                      stroke="#FFF" 
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <div className="absolute top-12 -right-4">
                  <svg width="25" height="25" viewBox="0 0 20 20" className="animate-sparkle" style={{animationDelay: "0.5s"}}>
                    <path 
                      d="M10 0 L12 7 L20 7 L14 12 L16 20 L10 15 L4 20 L6 12 L0 7 L8 7 Z" 
                      fill="#FFD700" 
                      stroke="#FFF" 
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
              
              {/* 發光粒子效果 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute rounded-full bg-white animate-pulse-fast"
                    style={{ 
                      width: `${Math.random() * 8 + 4}px`,
                      height: `${Math.random() * 8 + 4}px`,
                      top: `${Math.random() * 100}%`, 
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`,
                      opacity: Math.random() * 0.7 + 0.3
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
