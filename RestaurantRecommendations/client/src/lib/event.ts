import { useSyncExternalStore } from "react";
import { supabase } from "./supabase";

/* 目前正在看的活動（多檔活動同時進行，每個活動用邀請連結裡的代碼區分） */
export interface EventInfo {
  id: number;
  code: string;
  title: string;
  description: string;
  recommendDeadline: string;   // YYYY-MM-DD（台灣時間這天結束前）
  voteDeadline: string;
  votesPerPerson: number;
  today: string;               // 資料庫的台灣今天日期，用來判斷是否截止
  isAdmin: boolean;            // 目前的人是不是這個活動的主辦人
}
interface State { code: string | null; event: EventInfo | null; loading: boolean; notFound: boolean }

let state: State = { code: null, event: null, loading: false, notFound: false };
const subs = new Set<() => void>();
const set = (patch: Partial<State>) => { state = { ...state, ...patch }; subs.forEach(f => f()); };

export const getEvent = () => state.event;
export function useEvent() {
  return useSyncExternalStore(cb => { subs.add(cb); return () => { subs.delete(cb); }; }, () => state);
}

export async function loadEvent(code: string) {
  const same = state.code === code;
  set({ code, loading: true, notFound: false, event: same ? state.event : null });
  const { data, error } = await supabase.rpc("get_event", { p_code: code });
  if (state.code !== code) return null;               // 已經切到別的活動
  if (error || !data || !data.length) { set({ loading: false, notFound: true, event: null }); return null; }
  const e = data[0];
  const ev: EventInfo = {
    id: Number(e.id), code: e.code, title: e.title, description: e.description,
    recommendDeadline: e.recommend_deadline, voteDeadline: e.vote_deadline,
    votesPerPerson: e.votes_per_person, today: e.today, isAdmin: !!e.is_admin,
  };
  set({ event: ev, loading: false });
  rememberEvent(ev);
  return ev;
}
export const reloadEvent = () => (state.code ? loadEvent(state.code) : Promise.resolve(null));
export const leaveEvent = () => set({ code: null, event: null, loading: false, notFound: false });

// 截止判斷：日期字串 YYYY-MM-DD 可以直接比大小
export const isOpen = (deadline: string, today: string) => today <= deadline;
export const daysLeft = (deadline: string, today: string) =>
  Math.round((Date.parse(deadline) - Date.parse(today)) / 864e5);
export const shortDate = (d: string) => `${Number(d.slice(5, 7))}/${Number(d.slice(8, 10))}`;

// 連結
const base = () => location.origin + location.pathname;
export const inviteUrl = (code: string) => `${base()}#/e/${code}`;
export const adminUrl = (code: string, token: string) => `${base()}#/e/${code}/admin/${token}`;

// 這台裝置參加過的活動（只存在自己的瀏覽器）
const MY = "myEvents";
export interface MyEvent { code: string; title: string; admin?: boolean; at: number }
export function myEvents(): MyEvent[] {
  try { return JSON.parse(localStorage.getItem(MY) || "[]"); } catch { return []; }
}
export function rememberEvent(ev: EventInfo) {
  const list = myEvents().filter(x => x.code !== ev.code);
  list.unshift({ code: ev.code, title: ev.title, admin: ev.isAdmin, at: Date.now() });
  try { localStorage.setItem(MY, JSON.stringify(list.slice(0, 30))); } catch {}
}
export function forgetEvent(code: string) {
  try { localStorage.setItem(MY, JSON.stringify(myEvents().filter(x => x.code !== code))); } catch {}
}

// 確認目前的身分還有效（向伺服器確認，不只看瀏覽器記的）；沒有或失效就給一個新的匿名身分
export async function ensureSession(opts: { anonymousOnly?: boolean } = {}) {
  const { data } = await supabase.auth.getSession();
  if (data.session) {
    const { data: u, error } = await supabase.auth.getUser();
    const ok = !error && u.user && (!opts.anonymousOnly || u.user.is_anonymous);
    if (ok) return u.user!.id;
    await supabase.auth.signOut({ scope: "local" });     // 身分已被刪除或過期：清掉重來
  }
  const { data: d, error } = await supabase.auth.signInAnonymously();
  if (error || !d.user) throw new Error("無法建立連線，請稍後再試");
  return d.user.id;
}
