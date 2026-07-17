import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trash, Plus, RotateCcw, Play } from "lucide-react";

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
  isSpinning
}: WheelConfigurationProps) {
  
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">轉盤設定</h2>
        
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
