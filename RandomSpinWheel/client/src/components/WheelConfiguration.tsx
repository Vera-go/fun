import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trash, Plus, RotateCcw, Play, Save } from "lucide-react";
import { MAX_SAVED, type SavedWheel } from "@/lib/hooks/useWheel";

interface WheelConfigurationProps {
  wheelTitle: string;
  setWheelTitle: (title: string) => void;
  options: string[];
  onAddOption: () => void;
  onUpdateOption: (index: number, value: string) => void;
  onRemoveOption: (index: number) => void;
  onResetWheel: () => void;
  onSpinWheel: () => void;
  isSpinning: boolean;
  savedWheels: SavedWheel[];
  currentId: string;
  notice: string;
  onSaveWheel: () => void;
  onLoadWheel: (id: string) => void;
  onDeleteWheel: (id: string) => void;
}

export default function WheelConfiguration({
  wheelTitle,
  setWheelTitle,
  options,
  onAddOption,
  onUpdateOption,
  onRemoveOption,
  onResetWheel,
  onSpinWheel,
  isSpinning,
  savedWheels,
  currentId,
  notice,
  onSaveWheel,
  onLoadWheel,
  onDeleteWheel
}: WheelConfigurationProps) {
  const current = savedWheels.find(w => w.id === currentId);

  
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">轉盤設定</h2>
        
        {/* Saved wheels（存在這支手機的瀏覽器裡） */}
        <div className="mb-5 rounded-lg bg-gray-50 p-3">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="saved-wheels" className="block text-sm font-medium text-gray-700">我的轉盤</label>
            <span className="text-xs text-gray-500">{savedWheels.length} / {MAX_SAVED}</span>
          </div>
          <div className="flex items-center gap-2">
            <select
              id="saved-wheels"
              value={currentId}
              onChange={(e) => onLoadWheel(e.target.value)}
              disabled={savedWheels.length === 0}
              className="flex-grow min-w-0 px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white"
            >
              <option value="">{savedWheels.length === 0 ? '還沒有儲存的轉盤' : '選擇已儲存的轉盤…'}</option>
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
          <Button
            variant="outline"
            className="w-full mt-2 flex items-center justify-center px-4 py-2"
            onClick={onSaveWheel}
          >
            <Save className="h-5 w-5 mr-1" />
            {current ? '更新這個轉盤' : '儲存目前的轉盤'}
          </Button>
          <p className="mt-2 text-xs text-gray-500" role="status" aria-live="polite">
            {notice || '只存在這支手機的瀏覽器，不會上傳；換裝置或清除瀏覽資料就會不見。'}
          </p>
        </div>

        {/* Wheel Title Input */}
        <div className="mb-5">
          <label htmlFor="wheel-title" className="block text-sm font-medium text-gray-700 mb-1">
            轉盤標題
          </label>
          <Input
            id="wheel-title"
            type="text"
            value={wheelTitle}
            onChange={(e) => setWheelTitle(e.target.value)}
            placeholder="輸入轉盤標題..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
        
        {/* Options List */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">選項</label>
            <span className="text-xs text-gray-500">{options.length} 個選項</span>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3 mb-3 max-h-64 overflow-y-auto">
            {options.length === 0 ? (
              <div className="text-sm text-gray-400 text-center py-2">
                尚未添加選項
              </div>
            ) : (
              options.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                  <Input
                    type="text"
                    value={option}
                    onChange={(e) => onUpdateOption(index, e.target.value)}
                    placeholder="輸入選項..."
                    className="flex-grow px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRemoveOption(index)}
                    className="ml-2 p-1 text-gray-500 hover:text-red-500"
                  >
                    <Trash className="h-5 w-5" />
                  </Button>
                </div>
              ))
            )}
          </div>
          
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center px-4 py-2"
            onClick={onAddOption}
          >
            <Plus className="h-5 w-5 mr-1" />
            添加選項
          </Button>
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="flex items-center justify-center px-4 py-2"
            onClick={onResetWheel}
          >
            <RotateCcw className="h-5 w-5 mr-1" />
            重置
          </Button>
          <Button
            variant="default"
            className="flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary/90"
            onClick={onSpinWheel}
            disabled={isSpinning || options.length < 2}
          >
            <Play className="h-5 w-5 mr-1" />
            旋轉
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
