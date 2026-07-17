import { Card, CardContent } from "@/components/ui/card";

interface SpinResultProps {
  result: string;
}

export default function SpinResult({ result }: SpinResultProps) {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="px-6 py-4 bg-gray-50 rounded-lg">
        <div className="text-sm text-gray-500 mb-1">結果：</div>
        <div className="text-2xl font-bold text-primary">
          {result || "旋轉轉盤！"}
        </div>
      </CardContent>
    </Card>
  );
}
