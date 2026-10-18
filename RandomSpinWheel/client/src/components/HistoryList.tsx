interface HistoryListProps {
  history: string[];
  emptyText?: string;
}

export default function HistoryList({ history, emptyText = "尚未旋轉" }: HistoryListProps) {
  return (
    <div className="text-sm text-gray-600 space-y-1 max-h-24 overflow-y-auto">
      {history.length === 0 ? (
        <div className="px-3 py-1 bg-gray-50 rounded">{emptyText}</div>
      ) : (
        history.map((item, index) => (
          <div key={index} className="px-3 py-1 bg-gray-50 rounded">
            {index + 1}. {item}
          </div>
        ))
      )}
    </div>
  );
}
