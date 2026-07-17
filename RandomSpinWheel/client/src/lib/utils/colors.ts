const WHEEL_COLORS = [
  "#FF6B6B", "#4ECDC4", "#FFD166", "#4F46E5", "#F97316", 
  "#10B981", "#8B5CF6", "#EC4899", "#06B6D4", "#F59E0B"
];

export function getColorForIndex(index: number): string {
  return WHEEL_COLORS[index % WHEEL_COLORS.length];
}

export function isLightColor(color: string): boolean {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return brightness > 155;
}
