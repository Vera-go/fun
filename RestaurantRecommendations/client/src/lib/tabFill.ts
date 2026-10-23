import type { KeyboardEvent } from "react";

/* 空白欄位按 Tab：把灰色的「例如：…」範例填進去，游標停在最後面方便直接改。
   欄位有內容、或沒有範例時，Tab 照常跳到下一格。
   範例取「例如：」後面的文字；有用「、」列好幾個的，只取第一個（例如「海鮮、火鍋、燒肉...」→「海鮮」）。 */
export function exampleOf(placeholder?: string | null): string {
  if (!placeholder || !placeholder.startsWith("例如：")) return "";
  return placeholder.slice(3).split("、")[0].replace(/(\.\.\.|…)$/, "").trim();
}

/** 掛在表單（或欄位外層）的 onKeyDown：fill(欄位 id, 範例) 由表單決定怎麼寫回自己的狀態 */
export function tabFillHandler(fill: (id: string, value: string) => boolean | void) {
  return (e: KeyboardEvent<HTMLElement>) => {
    const el = e.target as HTMLInputElement | HTMLTextAreaElement;
    if (e.key !== "Tab" || e.shiftKey || e.nativeEvent.isComposing) return;
    if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) || el.value) return;
    const v = exampleOf(el.placeholder);
    if (!v || fill(el.id, v) === false) return;
    e.preventDefault();
    requestAnimationFrame(() => { el.focus(); el.setSelectionRange(v.length, v.length); });
  };
}
