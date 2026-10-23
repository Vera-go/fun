/* Lighthouse 新增的三個區塊：保護自己、陪朋友（聊天模擬）、心理迷宮。
   文案在 content-more.js；這裡只有畫面和互動。用到 index.html 裡的 app、$、esc。 */
(function () {
  const M = window.LH_MORE;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const ICON = {
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M10.5 18.5h3"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    note: '<path d="M6 3h9l3 3v15H6z"/><path d="M9 10h6M9 13.5h6M9 17h4"/>',
    shield: '<path d="M12 3l7 3v5.5c0 4.4-3 8-7 9.5-4-1.5-7-5.1-7-9.5V6z"/>',
    path: '<circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="6" r="2.2"/><path d="M8 17c6 0 2-8 8-9.5"/>',
    alert: '<path d="M12 3l9.5 17h-19z"/><path d="M12 10v4.5M12 17.6v.1"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>'
  };
  const icon = (n, s = 20) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n] || ""}</svg>`;

  // ---------- 保護自己 ----------
  window.renderProtect = function () {
    const P = M.protect;
    app.innerHTML = `<p class="muted small" style="margin-top:0">${esc(P.lead)}</p>
      ${P.sections.map((s, i) => `<details class="pg"${i === 0 ? " open" : ""}>
        <summary><span class="pgi">${icon(s.icon)}</span><span class="pgt">${esc(s.title)}</span><span class="pgtag">${esc(s.tag)}</span></summary>
        <ul>${s.items.map(t => `<li>${t}</li>`).join("")}</ul>
      </details>`).join("")}
      <div class="urgent">
        <div class="ut">${icon("alert", 20)} ${esc(P.urgent.title)}</div>
        <p class="small" style="margin:4px 0 10px">${esc(P.urgent.lead)}</p>
        ${P.urgent.items.map(u => `<div class="ur"><span>${esc(u.when)}</span><b>${esc(u.call)}</b></div>`).join("")}
      </div>`;
  };

  // ---------- 陪朋友：聊天模擬 ----------
  const F = M.friend;
  let fs = null;   // 遊戲狀態
  const maxScore = F.stories.reduce((n, s) => n + s.steps.length * 2, 0);
  window.renderFriend = function () {
    if (!fs) fs = { done: {}, score: 0 };
    const doneN = Object.keys(fs.done).length;
    app.innerHTML = `<p class="muted small" style="margin-top:0">${esc(F.lead)}</p>
      <div class="meter"><span>接住值</span><div class="bar"><i style="width:${Math.round(fs.score / maxScore * 100)}%"></i></div><b>${fs.score}</b></div>
      <div class="flist">${F.stories.map((s, i) => `<button class="fpick${s.red ? " red" : ""}${fs.done[i] !== undefined ? " done" : ""}" data-story="${i}">
          <span class="av">${esc(s.avatar)}</span><span class="ft"><b>${esc(s.name)}</b><span>${esc(s.title)}</span></span>
          ${fs.done[i] !== undefined ? `<span class="fsc">${fs.done[i]} / ${s.steps.length * 2}</span>` : s.red ? '<span class="fred">最重要的一關</span>' : '<span class="fgo">開始聊 →</span>'}
        </button>`).join("")}</div>
      ${doneN === F.stories.length ? friendSummary() : `<p class="small muted" style="text-align:center;margin:12px 0 0">已經陪了 ${doneN} / ${F.stories.length} 位朋友</p>`}`;
    app.querySelectorAll("[data-story]").forEach(b => b.onclick = () => playStory(+b.dataset.story));
    const again = $("#fAgain"); if (again) again.onclick = () => { fs = null; renderFriend(); };
  };
  function friendSummary() {
    const ratio = fs.score / maxScore;
    const rank = [...F.ranks].reverse().find(r => ratio >= r.min);
    return `<div class="rank"><div class="rk">${icon("heart", 22)} ${esc(rank.title)}</div><p>${esc(rank.text)}</p></div>
      <div class="urgent"><div class="ut">${icon("alert", 20)} ${esc(F.mustTell.title)}</div>
        <p class="small" style="margin:4px 0 8px">${esc(F.mustTell.lead)}</p>
        <ul class="small" style="margin:0;padding-left:20px">${F.mustTell.items.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>
      <p class="small muted">${esc(F.selfCare)}</p>
      <div style="text-align:center"><button class="btn ghost" id="fAgain">重新玩一次</button></div>`;
  }
  async function playStory(i) {
    const s = F.stories[i];
    let got = 0;
    app.innerHTML = `<div class="chat">
        <div class="chead"><button class="cback" id="cBack" aria-label="回到朋友列表">‹</button><span class="av">${esc(s.avatar)}</span><b>${esc(s.name)}</b></div>
        <div class="cbody" id="cBody"></div>
        <div class="cfoot" id="cFoot"></div>
      </div>`;
    $("#cBack").onclick = () => renderFriend();
    const body = $("#cBody"), foot = $("#cFoot");
    const add = (html, cls) => { const d = document.createElement("div"); d.className = "msg " + cls; d.innerHTML = html; body.appendChild(d); body.scrollTop = body.scrollHeight; return d; };
    const typing = async ms => { const t = add('<span class="dots"><i></i><i></i><i></i></span>', "them typing"); await sleep(ms); t.remove(); };
    for (const step of s.steps) {
      for (const m of step.msgs) { await typing(700 + m.length * 25); if (!document.body.contains(body)) return; add(esc(m), "them"); }
      const c = await new Promise(res => {
        foot.innerHTML = step.choices.map((c, j) => `<button class="copt" data-c="${j}">${esc(c.text)}</button>`).join("");
        foot.querySelectorAll("[data-c]").forEach(b => b.onclick = () => res(step.choices[+b.dataset.c]));
      });
      foot.innerHTML = "";
      add(esc(c.text), "me");
      got += c.score;
      await typing(900);
      if (!document.body.contains(body)) return;
      add(esc(c.reply), "them");
      add(`<span class="tipk ${c.score === 2 ? "good" : c.score === 1 ? "ok" : "hm"}">${c.score === 2 ? "接住了" : c.score === 1 ? "還可以" : "他可能更難受了"}</span>${c.tip}`, "tip");
      await new Promise(res => { foot.innerHTML = '<button class="btn acc" id="cNext">繼續</button>'; $("#cNext").onclick = res; });
      foot.innerHTML = "";
    }
    if (fs.done[i] === undefined) fs.score += got; else fs.score += got - fs.done[i];
    fs.done[i] = got;
    add(`這段對話，你的接住值 <b>+${got}</b>`, "tip end");
    foot.innerHTML = '<button class="btn acc" id="cDone">回到朋友列表</button>';
    $("#cDone").onclick = () => renderFriend();
  }

  // ---------- 心理迷宮 ----------
  const Z = M.maze;
  let ms = null;
  window.renderMaze = function () {
    if (!ms) ms = { at: Z.start, seen: new Set([Z.start]), path: [Z.start] };
    const room = Z.rooms[ms.at];
    const insights = ms.path.map(k => Z.rooms[k]).filter(r => r.insight && !r.end);
    const uniq = [...new Map(insights.map(r => [r.name, r])).values()];
    const total = Object.values(Z.rooms).filter(r => r.insight && !r.end).length;
    app.innerHTML = `<p class="muted small" style="margin-top:0">${esc(Z.lead)}</p>
      <div class="mzwrap">${mazeMap()}<div class="mzcount">看見的心理 ${uniq.length} / ${total}</div></div>
      <div class="room${room.end ? " end" : ""} rfade">
        <div class="rname">${esc(room.name)}</div>
        <p class="rscene">${esc(room.scene)}</p>
        ${room.insight ? `<div class="rins"><span>你看見的</span>${esc(room.insight)}</div>` : ""}
        ${room.end ? `${uniq.length ? `<div class="rlist"><b>這一路你看見了：</b><ul>${uniq.map(r => `<li><b>${esc(r.name)}</b>：${esc(r.insight)}</li>`).join("")}</ul></div>` : ""}
          <p class="small muted">${esc(Z.endNote)}</p>
          <div style="text-align:center"><button class="btn acc" id="mzAgain">再走一次，試試別的路</button></div>`
        : `<div class="rexits">${room.exits.map((e, j) => `<button class="rexit" data-to="${esc(e.to)}">${esc(e.text)}<span>→</span></button>`).join("")}</div>`}
      </div>`;
    app.querySelectorAll("[data-to]").forEach(b => b.onclick = () => {
      ms.at = b.dataset.to; ms.seen.add(ms.at); ms.path.push(ms.at);
      renderMaze();
      document.querySelector(".mzwrap").scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
    const again = $("#mzAgain"); if (again) again.onclick = () => { ms = null; renderMaze(); };
  };
  function mazeMap() {
    const W = 300, H = 252, px = x => 30 + x * 60, py = y => 25 + y * 45;
    const edges = [];
    for (const [k, r] of Object.entries(Z.rooms)) for (const e of r.exits || []) edges.push([k, e.to]);
    const walked = new Set(ms.path.slice(1).map((k, i) => ms.path[i] + ">" + k));
    const lines = edges.map(([a, b]) => {
      const A = Z.rooms[a], B = Z.rooms[b], on = walked.has(a + ">" + b);
      const known = ms.seen.has(a) && ms.seen.has(b);
      return `<line x1="${px(A.x)}" y1="${py(A.y)}" x2="${px(B.x)}" y2="${py(B.y)}" class="${on ? "e on" : known ? "e" : "e dim"}"/>`;
    }).join("");
    const nodes = Object.entries(Z.rooms).map(([k, r]) => {
      const cls = k === ms.at ? "n cur" : ms.seen.has(k) ? "n seen" : "n fog";
      return `<g class="${cls}"><circle cx="${px(r.x)}" cy="${py(r.y)}" r="${k === ms.at ? 11 : 8}"/>${ms.seen.has(k) ? `<text x="${px(r.x)}" y="${py(r.y) + 24}">${esc(r.name.replace("的房間", ""))}</text>` : ""}</g>`;
    }).join("");
    return `<svg class="mzmap" viewBox="0 0 ${W} ${H}" role="img" aria-label="迷宮地圖">${lines}${nodes}</svg>`;
  }
})();
