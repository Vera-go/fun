/* 檢查單元檔格式：node english/tools/check-unit.js j1-1-2 [j1-1-3 ...]
   檢查項目：單字格式與數量、例句、文法、測驗、安安老師課程、發音拆解（PH）、記憶小撇步（MEMO）、例外說明（EXC_NOTE） */
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const i = html.indexOf("const RULES = {"), j = html.indexOf("\n};", i);
const RULES = eval("(" + html.slice(i + 14, j) + "\n})");

function check(id) {
  const errs = [], warn = [];
  const reg = { PH: {}, EXC_NOTE: {}, VOWEL_AUDIO: {}, ILLUS: {}, ILLUS2: {}, MEMO: {}, PHRASES: {} };
  let def = null, regId = null;
  const src = fs.readFileSync(path.join(root, "units", id + ".js"), "utf8");
  try {
    new Function("registerUnit", ...Object.keys(reg), src)((rid, d) => { regId = rid; def = d; }, ...Object.values(reg));
  } catch (e) { return [`語法錯誤：${e.message}`]; }
  if (!def) return ["沒有呼叫 registerUnit"];
  if (regId !== id) errs.push(`registerUnit 的 id 是 ${regId}，應該是 ${id}`);
  // 單字
  const W = def.words || [];
  if (W.length < 60 || W.length > 90) errs.push(`單字數 ${W.length}（應該 60～90）`);
  const seen = new Set();
  W.forEach((w, k) => {
    const tag = `單字#${k + 1} ${w && w[0]}`;
    if (!Array.isArray(w) || typeof w[0] !== "string" || typeof w[1] !== "string" || typeof w[2] !== "string") return errs.push(`${tag} 格式錯誤`);
    if (seen.has(w[0])) errs.push(`${tag} 重複`); seen.add(w[0]);
    if (!Array.isArray(w[3]) || w[3].length !== 3) errs.push(`${tag} 例句不是 3 句`);
    else w[3].forEach((e, n) => { if (!Array.isArray(e) || e.length !== 3 || e.some(x => typeof x !== "string" || !x.trim())) errs.push(`${tag} 例句${n + 1} 格式錯誤`); });
    const ex = (w[3] || []).map(e => e[0].toLowerCase()).join(" ");
    const stem = w[0].toLowerCase().split(" ")[0].slice(0, Math.max(3, w[0].length - 2));
    if (!ex.includes(stem)) warn.push(`${tag} 例句裡好像沒有出現這個字`);
    if (!w[4] && !reg.MEMO[w[0]] && !w[7]) errs.push(`${tag} 沒有記憶小撇步（MEMO）`);
    if (!w[6] && !reg.ILLUS[w[0]]) warn.push(`${tag} 沒有插圖（ILLUS 或 art）`);
  });
  // 發音拆解
  if (!def.morph && !def.noSpell) W.forEach(w => {
    const spec = reg.PH[w[0]];
    if (!spec) return errs.push(`PH 缺 ${w[0]}`);
    const toks = spec.split(" ").map(t => { const p = t.lastIndexOf(":"); return [t.slice(0, p), t.slice(p + 1)]; });
    toks.forEach(([t, r]) => { if (!RULES[r]) errs.push(`PH ${w[0]}：規則 ${r} 不存在`); if (r === "exc" && !reg.EXC_NOTE[w[0]]) warn.push(`PH ${w[0]} 用了 exc，但沒有 EXC_NOTE 說明`); });
    const joined = toks.map(([t, r]) => r === "space" ? " " : t).join("");
    if (joined.toLowerCase() !== w[0].toLowerCase()) errs.push(`PH ${w[0]} 拼回去是「${joined}」，和單字不一樣`);
  });
  // 文法
  const G = def.grammar || [];
  if (G.length !== 4) errs.push(`文法單元 ${G.length} 個（應該 4 個）`);
  G.forEach((g, k) => {
    if (g.id !== "g" + (k + 1)) errs.push(`文法#${k + 1} id 應該是 g${k + 1}`);
    if (!g.title || !g.intro || !Array.isArray(g.table) || !Array.isArray(g.points) || !Array.isArray(g.ex)) errs.push(`文法 ${g.id} 缺欄位`);
    if ((g.ex || []).length < 4) errs.push(`文法 ${g.id} 例句少於 4 句`);
  });
  const gids = new Set(G.map(g => g.id));
  // 測驗
  const Q = def.quiz || [];
  if (Q.length < 30) errs.push(`測驗題 ${Q.length} 題（至少 30 題）`);
  Q.forEach((q, k) => {
    if (!Array.isArray(q) || q.length < 5 || !Array.isArray(q[1])) return errs.push(`測驗#${k + 1} 格式錯誤`);
    if (!(q[2] >= 0 && q[2] < q[1].length)) errs.push(`測驗#${k + 1} 答案編號超出選項`);
    if (!gids.has(q[4])) errs.push(`測驗#${k + 1} 對應的文法 ${q[4]} 不存在`);
    if (new Set(q[1]).size !== q[1].length) errs.push(`測驗#${k + 1} 選項重複`);
  });
  // 課程（文法 g1～g4、發音 p1～p4）
  const P = def.phonics || [];
  if (!def.morph && !def.noSpell && P.length !== 4) errs.push(`發音課 ${P.length} 堂（應該 4 堂）`);
  const C = def.classes || {};
  [...G.map(g => g.id), ...P.map(p => p.id)].forEach(cid => {
    const steps = C[cid];
    if (!Array.isArray(steps) || steps.length < 8) return errs.push(`課程 ${cid} 少於 8 步`);
    if (!steps[steps.length - 1].end) errs.push(`課程 ${cid} 最後一步沒有 end:true`);
    let asks = 0;
    steps.forEach((st, n) => {
      if (st.ask) {
        asks++;
        const a = st.ask, bad = a.bad || {};
        if (!Array.isArray(a.opts) || !(a.ans >= 0 && a.ans < a.opts.length)) errs.push(`課程 ${cid} 第 ${n + 1} 步：答案編號錯誤`);
        if (!a.ok) errs.push(`課程 ${cid} 第 ${n + 1} 步：缺 ok`);
        Object.keys(bad).forEach(b => { if (+b === a.ans || !(+b < a.opts.length)) errs.push(`課程 ${cid} 第 ${n + 1} 步：bad 的編號 ${b} 不對`); });
        a.opts.forEach((o, oi) => { if (oi !== a.ans && !bad[oi]) warn.push(`課程 ${cid} 第 ${n + 1} 步：選項 ${oi} 沒有錯誤說明`); });
        const g = a.again;
        if (!g || !Array.isArray(g.opts) || !(g.ans >= 0 && g.ans < g.opts.length) || !g.exp) errs.push(`課程 ${cid} 第 ${n + 1} 步：again 格式錯誤`);
      } else if (!st.say && !st.chant) errs.push(`課程 ${cid} 第 ${n + 1} 步：沒有內容`);
      (st.board || []).forEach(b => { if (!Array.isArray(b) || typeof b[0] !== "string" || !Array.isArray(b[1])) errs.push(`課程 ${cid} 第 ${n + 1} 步：board 格式錯誤`); });
    });
    if (asks < 3) errs.push(`課程 ${cid} 互動題只有 ${asks} 題（至少 3 題）`);
  });
  return [errs, warn, { words: W.length, quiz: Q.length, grammar: G.map(g => g.title), phonics: P.map(p => p.title) }];
}

for (const id of process.argv.slice(2)) {
  const [errs, warn, info] = check(id);
  console.log(`\n== ${id}`);
  if (info) console.log(`單字 ${info.words}・測驗 ${info.quiz}・文法：${info.grammar.join("／")}・發音：${info.phonics.join("／")}`);
  console.log(errs && errs.length ? `❌ ${errs.length} 個錯誤：\n  ` + errs.slice(0, 40).join("\n  ") : "✅ 沒有錯誤");
  if (warn && warn.length) console.log(`⚠️ ${warn.length} 個提醒：\n  ` + warn.slice(0, 15).join("\n  "));
}
