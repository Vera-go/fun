/* 全網最聽勸：入口頁和許願池共用的資料存取（需要先載入 supabase-js） */
(function () {
  const SUPABASE_URL = "https://bbydhrcyxxwxtbtemszb.supabase.co";
  const SUPABASE_KEY = "sb_publishable_hlbBn6LWqC5oLdCS32lchw_xzZeIph7";   // 公開金鑰，保護靠資料庫權限規則
  // 和餐廳推薦用同一個登入儲存位置：同一台裝置在兩個網站是同一個身分
  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, storageKey: "restaurant-auth" },
  });

  const SITES = {
    restaurant: { name: "餐廳推薦投票", icon: "🍽️" },
    wheel: { name: "隨機大轉盤", icon: "🎡" },
    english: { name: "安安英文教室", icon: "📘" },
    nostrings: { name: "NOSTRINGS 反骨人格", icon: "🧵" },
    portal: { name: "這個入口／許願池", icon: "🙋" },
    new: { name: "全新網站點子", icon: "✨" },
  };
  // 需要額外付費才做得出來的功能不收：送出前偵測這些字眼提醒
  const PAID_HINTS = ["付費", "收費", "訂閱", "金流", "刷卡", "信用卡", "簡訊", "發票", "會員費", "廣告費", "買斷", "主機費", "app store", "google play"];
  const paidHint = text => PAID_HINTS.find(w => text.toLowerCase().includes(w));

  async function ensureSession() {
    const { data } = await sb.auth.getSession();
    if (data.session) {
      const { data: u, error } = await sb.auth.getUser();
      if (!error && u.user) return u.user.id;
      await sb.auth.signOut({ scope: "local" });   // 身分已失效：換新的
    }
    const { data: d, error } = await sb.auth.signInAnonymously();
    if (error) throw new Error("無法連線，請稍後再試");
    return d.user.id;
  }

  async function listWishes() {
    const { data, error } = await sb.rpc("list_wishes");
    if (error) throw new Error("讀取願望失敗");
    const all = data.map(w => ({ ...w, votes: Number(w.votes) }));
    // 待處理：製作中的放最上面，其餘依 +1 數（同票先許的在前）；已完成：最近完成的在前
    const pending = all.filter(w => w.status === "open" || w.status === "doing")
      .sort((a, b) => (b.status === "doing") - (a.status === "doing") || b.votes - a.votes || a.created_at.localeCompare(b.created_at));
    const done = all.filter(w => w.status === "done").sort((a, b) => (b.done_at || "").localeCompare(a.done_at || ""));
    const rejected = all.filter(w => w.status === "rejected");
    return { pending, done, rejected };
  }

  function friendly(error) {
    if (!error) return "發生錯誤，請稍後再試";
    if (error.code === "P0001") return error.message;
    if (error.code === "23505") return "你已經 +1 過了";
    if (error.code === "23514") return "內容長度不符合：標題 4～60 字、說明 500 字以內、暱稱 1～20 字";
    if (error.code === "42501") return "沒有權限做這件事";
    return error.message || "發生錯誤，請稍後再試";
  }

  async function addWish({ site, title, detail, name }) {
    await ensureSession();
    const { error } = await sb.from("wishes").insert({ site, title: title.trim(), detail: detail.trim(), author_name: name.trim() });
    if (error) throw new Error(friendly(error));
  }
  async function toggleVote(wish) {
    const uid = await ensureSession();
    const q = wish.mine
      ? sb.from("wish_votes").delete().eq("wish_id", wish.id).eq("user_id", uid)
      : sb.from("wish_votes").insert({ wish_id: wish.id });
    const { error } = await q;
    if (error) throw new Error(friendly(error));
  }
  async function deleteWish(id) {
    const { data, error } = await sb.from("wishes").delete().eq("id", id).select("id");
    if (error || !data.length) throw new Error(error ? friendly(error) : "只能刪除自己還沒處理的願望");
  }

  // 管理（只有你：用 email 登入，資料庫確認在 admins 名單裡）
  async function adminLogin(email, password) {
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw new Error("email 或密碼不正確");
    const { data } = await sb.rpc("is_admin");
    if (!data) { await sb.auth.signOut(); throw new Error("這個帳號不是管理員"); }
  }
  async function isAdmin() {
    const { data: s } = await sb.auth.getSession();
    if (!s.session || s.session.user.is_anonymous) return false;
    const { data } = await sb.rpc("is_admin");
    return !!data;
  }
  async function adminLogout() { await sb.auth.signOut(); }
  async function updateWish(id, patch) {
    const { data, error } = await sb.from("wishes").update(patch).eq("id", id).select("id");
    if (error || !data.length) throw new Error(error ? friendly(error) : "沒有權限");
  }

  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const day = iso => { const d = new Date(iso); return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`; };

  window.Wish = { sb, SITES, paidHint, ensureSession, listWishes, addWish, toggleVote, deleteWish, adminLogin, adminLogout, isAdmin, updateWish, esc, day };
})();
