import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trash, Plus, Eraser, Play, Save, FilePlus, Check, Minus, RotateCcw } from "lucide-react";
import { MAX_SAVED, type SavedWheel } from "@/lib/hooks/useWheel";

export const MAX_OPTION_LENGTH = 12;

interface WheelConfigurationProps {
  wheelTitle: string;
  setWheelTitle: (title: string) => void;
  options: string[];
  activeCount: number;
  onAddOption: () => void;
  onUpdateOption: (index: number, value: string) => void;
  onRemoveOption: (index: number) => void;
  onClearOptions: () => void;
  onNewWheel: () => void;
  onSpinWheel: () => void;
  isSpinning: boolean;
  canSpin: boolean;
  isDirty: boolean;
  noRepeat: boolean;
  onSetNoRepeat: (on: boolean) => void;
  pickCount: number;
  onSetPickCount: (n: number) => void;
  drawn: number[];
  finished: boolean;
  onResetRound: () => void;
  savedWheels: SavedWheel[];
  currentId: string;
  notice: string;
  onSaveWheel: (asNew?: boolean) => void;
  onLoadWheel: (id: string) => void;
  onDeleteWheel: (id: string) => void;
}

const LEAVE_MSG = "目前的修改還沒儲存，確定要離開嗎？";

export default function WheelConfiguration({
  wheelTitle,
  setWheelTitle,
  options,
  activeCount,
  onAddOption,
  onUpdateOption,
  onRemoveOption,
  onClearOptions,
  onNewWheel,
  onSpinWheel,
  isSpinning,
  canSpin,
  isDirty,
  noRepeat,
  onSetNoRepeat,
  pickCount,
  onSetPickCount,
  drawn,
  finished,
  onResetRound,
  savedWheels,
  currentId,
  notice,
  onSaveWheel,
  onLoadWheel,
  onDeleteWheel
}: WheelConfigurationProps) {
  const current = savedWheels.find(w => w.id === currentId);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const focusLast = useRef(false);
  const blankCount = options.length - activeCount;

  // 按「新增選項」之後，游標自動跳到新的那一格
  useEffect(() => {
    if (focusLast.current) {
      focusLast.current = false;
      inputsRef.current[options.length - 1]?.focus();
    }
  }, [options.length]);

  const addOption = () => {
    focusLast.current = true;
    onAddOption();
  };

  // 在輸入框按 Enter：還有下一格就跳過去，最後一格就新增一格（輸入中文選字時不算）
  const onOptionKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key !== "Enter" || e.nativeEvent.isComposing) return;
    e.preventDefault();
    if (index < options.length - 1) inputsRef.current[index + 1]?.focus();
    else if (options.length < 30) addOption();
  };

  const confirmLeave = () => !isDirty || window.confirm(LEAVE_MSG);

  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">轉盤設定</h2>

        {/* 我的轉盤（存在這個瀏覽器裡） */}
        <div className="mb-5 rounded-lg bg-gray-50 p-3">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="saved-wheels" className="block text-sm font-medium text-gray-700">我的轉盤</label>
            {savedWheels.length > 0 && (
              <span className="text-xs text-gray-500">{savedWheels.length} / {MAX_SAVED}</span>
            )}
          </div>

          {savedWheels.length > 0 && (
            <div className="flex items-center gap-2 mb-2">
              <select
                id="saved-wheels"
                value={currentId}
                onChange={(e) => {
                  if (!confirmLeave()) return;
                  onLoadWheel(e.target.value);
                }}
                className="flex-grow min-w-0 px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white"
              >
                <option value="">選擇已儲存的轉盤…</option>
                {savedWheels.map(w => (
                  <option key={w.id} value={w.id}>{w.title}（{w.options.length}）</option>
                ))}
              </select>
              <Button
                variant="ghost"
                size="icon"
                disabled={!current}
                aria-label="刪除這個已儲存的轉盤"
                onClick={() => {
                  if (current && window.confirm('要刪掉「' + current.title + '」嗎？')) onDeleteWheel(current.id);
                }}
                className="shrink-0 text-gray-500 hover:text-red-500"
              >
                <Trash className="h-5 w-5" />
              </Button>
            </div>
          )}

          <div className={current ? "grid grid-cols-2 gap-2" : ""}>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center px-3 py-2"
              onClick={() => onSaveWheel(false)}
            >
              <Save className="h-5 w-5 mr-1 shrink-0" />
              {current ? '更新這個轉盤' : '儲存目前的轉盤'}
            </Button>
            {current && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-center px-3 py-2"
                onClick={() => onSaveWheel(true)}
              >
                <FilePlus className="h-5 w-5 mr-1 shrink-0" />
                另存新轉盤
              </Button>
            )}
          </div>

          <Button
            variant="ghost"
            className="w-full mt-2 flex items-center justify-center px-3 py-2 text-gray-700"
            onClick={() => { if (confirmLeave()) onNewWheel(); }}
          >
            <Plus className="h-5 w-5 mr-1" />
            新增轉盤
          </Button>

          {notice && (
            <p className="mt-2 rounded-md bg-amber-50 px-3 py-2 text-sm text-gray-800" role="status" aria-live="polite">
              {notice}
            </p>
          )}
          <p className="mt-2 text-[13px] leading-snug text-gray-600">
            只存在這個瀏覽器，不會上傳。換手機、用無痕模式，或用別的瀏覽器（例如 LINE 內建瀏覽器）開，都會看不到。
          </p>
        </div>

        {/* 轉盤標題 */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="wheel-title" className="block text-sm font-medium text-gray-700">
              轉盤標題
            </label>
            {isDirty && (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-800">未儲存</span>
            )}
          </div>
          <Input
            id="wheel-title"
            type="text"
            value={wheelTitle}
            onChange={(e) => setWheelTitle(e.target.value)}
            placeholder="輸入轉盤標題..."
            maxLength={20}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        {/* 選項 */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">選項（每個最多 {MAX_OPTION_LENGTH} 字）</label>
            <span className="text-xs text-gray-500">{activeCount} 個選項</span>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 mb-3 max-h-64 overflow-y-auto">
            {options.length === 0 ? (
              <div className="text-sm text-gray-400 text-center py-2">
                還沒有選項
              </div>
            ) : (
              options.map((option, index) => {
                const isDrawn = drawn.includes(index);
                return (
                <div key={index} className="flex items-center mb-2">
                  {isDrawn && (
                    <span className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white" title={`第 ${drawn.indexOf(index) + 1} 個抽出`}>
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  )}
                  <Input
                    ref={el => { inputsRef.current[index] = el; }}
                    type="text"
                    value={option}
                    disabled={isDrawn}
                    maxLength={MAX_OPTION_LENGTH}
                    enterKeyHint={index === options.length - 1 ? "next" : "next"}
                    onChange={(e) => onUpdateOption(index, e.target.value)}
                    onKeyDown={(e) => onOptionKeyDown(e, index)}
                    placeholder="輸入選項..."
                    className={`flex-grow px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${isDrawn ? "bg-gray-100 text-gray-400 line-through" : ""}`}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={isDrawn}
                    aria-label="刪除這個選項"
                    onClick={() => onRemoveOption(index)}
                    className="ml-2 p-1 text-gray-500 hover:text-red-500"
                  >
                    <Trash className="h-5 w-5" />
                  </Button>
                </div>
                );
              })
            )}
          </div>

          {blankCount > 0 && options.length > 0 && (
            <p className="mb-2 text-xs text-amber-700">有 {blankCount} 格是空白的，不會放進轉盤。</p>
          )}

          <Button
            variant="outline"
            className="w-full flex items-center justify-center px-4 py-2"
            onClick={addOption}
          >
            <Plus className="h-5 w-5 mr-1" />
            新增選項
          </Button>
        </div>

        {/* 抽選方式：抽過的就不再抽（例如 10 個選項抽 3 個） */}
        <div className="mb-5 rounded-lg bg-gray-50 p-3">
          <label className="flex items-center justify-between gap-3 cursor-pointer">
            <span className="text-sm font-medium text-gray-700">抽過的就不再抽</span>
            <input
              type="checkbox"
              role="switch"
              checked={noRepeat}
              onChange={(e) => onSetNoRepeat(e.target.checked)}
              disabled={isSpinning}
              className="h-5 w-5 accent-pink-500"
            />
          </label>
          {noRepeat && (
            <div className="mt-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-gray-700">要抽幾個</span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8" aria-label="少抽一個"
                    disabled={isSpinning || pickCount <= 1} onClick={() => onSetPickCount(pickCount - 1)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-semibold" aria-live="polite">{pickCount}</span>
                  <Button variant="outline" size="icon" className="h-8 w-8" aria-label="多抽一個"
                    disabled={isSpinning || pickCount >= activeCount} onClick={() => onSetPickCount(pickCount + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between gap-3 text-xs text-gray-600">
                <span>
                  {finished ? "抽完了！" : `已抽 ${drawn.length} / ${pickCount}`}
                </span>
                {drawn.length > 0 && (
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" disabled={isSpinning} onClick={onResetRound}>
                    <RotateCcw className="h-3.5 w-3.5 mr-1" />
                    重新來過
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 動作按鈕 */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="flex items-center justify-center px-4 py-2"
            disabled={options.length === 0}
            onClick={() => {
              if (activeCount === 0 || window.confirm("要清空所有選項嗎？")) onClearOptions();
            }}
          >
            <Eraser className="h-5 w-5 mr-1" />
            清空選項
          </Button>
          <Button
            variant="default"
            className="flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary/90"
            onClick={onSpinWheel}
            disabled={!canSpin}
          >
            <Play className="h-5 w-5 mr-1" />
            {finished ? "抽完了" : "旋轉"}
          </Button>
        </div>
        {!finished && activeCount < 2 && (
          <p className="mt-2 text-xs text-gray-500 text-center">至少要有 2 個選項才能旋轉</p>
        )}
      </CardContent>
    </Card>
  );
}
