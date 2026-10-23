import { useSyncExternalStore } from "react";

/* 主辦人工具要不要展開：平常收起來，點標題列的「主辦人」才打開（標題列和活動頁共用這個開關） */
let open = false;
const subs = new Set<() => void>();
const set = (v: boolean) => { open = v; subs.forEach(f => f()); };

export const toggleHostTools = () => set(!open);
export const closeHostTools = () => set(false);
export function useHostToolsOpen() {
  return useSyncExternalStore(cb => { subs.add(cb); return () => { subs.delete(cb); }; }, () => open);
}
