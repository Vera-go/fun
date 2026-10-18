import { useRef } from "react";
import { Helmet } from "react-helmet";
import WheelSpinner from "@/components/WheelSpinner";
import WheelConfiguration from "@/components/WheelConfiguration";
import SpinResult from "@/components/SpinResult";
import HistoryList from "@/components/HistoryList";
import useWheel from "@/lib/hooks/useWheel";

export default function Home() {
  const {
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
    deleteWheel,
  } = useWheel();

  // 按旋轉時，自動把轉盤捲到畫面中間（手機上轉盤在設定的下面）
  const wheelBoxRef = useRef<HTMLDivElement>(null);
  const handleSpin = () => {
    if (isSpinning || activeOptions.length < 2) return;
    wheelBoxRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    spinWheel();
  };

  return (
    <>
      <Helmet>
        <title>隨機轉盤</title>
        <meta name="description" content="建立你的自訂轉盤，新增選項，按下旋轉就能得到隨機結果！" />
      </Helmet>
      <div className="bg-gray-50 min-h-screen font-sans">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">隨機轉盤</h1>
            <p className="text-gray-600">建立你的自訂轉盤，新增選項，按下旋轉就能得到隨機結果！</p>
          </header>

          <main className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3">
              <WheelConfiguration 
                wheelTitle={wheelTitle}
                setWheelTitle={setWheelTitle}
                options={options}
                activeCount={activeOptions.length}
                onAddOption={addOption}
                onUpdateOption={updateOption}
                onRemoveOption={removeOption}
                onClearOptions={clearOptions}
                onNewWheel={newWheel}
                onSpinWheel={handleSpin}
                isDirty={isDirty}
                isSpinning={isSpinning}
                savedWheels={savedWheels}
                currentId={currentId}
                notice={notice}
                onSaveWheel={saveWheel}
                onLoadWheel={loadWheel}
                onDeleteWheel={deleteWheel}
              />
            </div>

            <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-md p-3 sm:p-6 flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{wheelTitle}</h2>
              
              <div ref={wheelBoxRef} className="relative w-full max-w-md aspect-square my-6">
                <WheelSpinner 
                  options={activeOptions}
                  isSpinning={isSpinning}
                  spinAngle={result.angle}
                  onSpinWheel={handleSpin}
                />
              </div>
              
              <SpinResult result={result.text} />
              
              <div className="mt-6 w-full max-w-md">
                <h3 className="text-sm font-medium text-gray-700 mb-2">歷史紀錄</h3>
                <HistoryList history={spinHistory} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
