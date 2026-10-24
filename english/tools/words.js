/* 列出單元的單字（找重複用）：node english/tools/words.js j1-1-1 j1-1-2 ...（不帶參數＝全部單元） */
const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "..", "units");
const ids = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(dir).map(f => f.replace(/\.js$/, ""));
const all = {};
for(const id of ids){
  const reg = { PH: {}, EXC_NOTE: {}, VOWEL_AUDIO: {}, ILLUS: {}, ILLUS2: {}, MEMO: {}, PHRASES: {} };
  let def = null;
  try{ new Function("registerUnit", ...Object.keys(reg), fs.readFileSync(path.join(dir, id + ".js"), "utf8"))((r, d) => def = d, ...Object.values(reg)); }catch(e){ console.log(id, "讀不到：", e.message); continue; }
  def.words.forEach(w => (all[w[0].toLowerCase()] = all[w[0].toLowerCase()] || []).push(id));
  console.log(`${id}（${def.words.length}）：${def.words.map(w => w[0]).join(", ")}`);
}
const dup = Object.entries(all).filter(([, v]) => v.length > 1);
console.log(dup.length ? "\n重複：" + dup.map(([k, v]) => `${k}（${v.join("、")}）`).join("；") : "\n沒有重複的單字");
