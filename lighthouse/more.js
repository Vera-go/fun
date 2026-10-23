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

  // ---------- 保護自己：指南、情境判斷、紀錄小幫手 ----------
  let ptab = "guide", quiz = null;
  window.renderProtect = function () {
    const P = M.protect;
    const tabs = [["guide", "保護指南"], ["quiz", "情境判斷"], ["record", "紀錄小幫手"]];
    app.innerHTML = `<div class="seg" role="tablist">${tabs.map(([k, n]) => `<button role="tab" aria-selected="${ptab === k}" class="${ptab === k ? "on" : ""}" data-ptab="${k}">${n}</button>`).join("")}</div>
      <div id="pBody"></div>`;
    app.querySelectorAll("[data-ptab]").forEach(b => b.onclick = () => { ptab = b.dataset.ptab; renderProtect(); });
    ({ guide: protectGuide, quiz: protectQuiz, record: protectRecord })[ptab]($("#pBody"), P);
  };
  function protectGuide(el, P) {
    el.innerHTML = `<p class="muted small" style="margin-top:0">${esc(P.lead)}</p>
      ${P.sections.map((s, i) => `<details class="pg"${i === 0 ? " open" : ""}>
        <summary><span class="pgi">${icon(s.icon)}</span><span class="pgt">${esc(s.title)}</span><span class="pgtag">${esc(s.tag)}</span></summary>
        <ul>${s.items.map(t => `<li>${t}</li>`).join("")}</ul>
      </details>`).join("")}
      ${urgentBox(P)}`;
  }
  const urgentBox = P => `<div class="urgent">
      <div class="ut">${icon("alert", 20)} ${esc(P.urgent.title)}</div>
      <p class="small" style="margin:4px 0 10px">${esc(P.urgent.lead)}</p>
      ${P.urgent.items.map(u => `<div class="ur"><span>${esc(u.when)}</span><b>${esc(u.call)}</b></div>`).join("")}
    </div>`;

  // 情境判斷：一題一題，選完看解釋
  function protectQuiz(el, P) {
    if (!quiz) quiz = { i: 0, picked: null, right: 0 };
    const Q = P.quiz;
    if (quiz.i >= Q.length) {
      el.innerHTML = `<div class="qend"><div class="qscore">${quiz.right} / ${Q.length}</div><p>${esc(P.quizEnd)}</p>
        <button class="btn ghost" id="qAgain">再練習一次</button></div>${urgentBox(P)}`;
      $("#qAgain").onclick = () => { quiz = null; renderProtect(); };
      return;
    }
    const q = Q[quiz.i], picked = quiz.picked;
    el.innerHTML = `<p class="muted small" style="margin-top:0">${esc(P.quizLead)}</p>
      <div class="qprog"><span>第 ${quiz.i + 1} 題 / ${Q.length}</span><div class="bar"><i style="width:${quiz.i / Q.length * 100}%"></i></div></div>
      <div class="qcard rfade"><div class="qq">${esc(q.q)}</div>
        <div class="qopts">${q.options.map((o, j) => `<button class="qopt${picked === null ? "" : j === q.best ? " best" : j === picked ? " wrong" : " dim"}" data-q="${j}" ${picked !== null ? "disabled" : ""}>${esc(o)}</button>`).join("")}</div>
        ${picked !== null ? `<div class="qwhy ${picked === q.best ? "ok" : ""}"><b>${picked === q.best ? "這樣做比較安全" : "比較好的做法是上面標綠色的那個"}</b>${esc(q.why)}</div>
          <div style="text-align:right;margin-top:12px"><button class="btn acc" id="qNext">${quiz.i + 1 >= Q.length ? "看結果" : "下一題"}</button></div>` : ""}
      </div>`;
    el.querySelectorAll("[data-q]").forEach(b => b.onclick = () => { quiz.picked = +b.dataset.q; if (quiz.picked === q.best) quiz.right++; renderProtect(); });
    const n = $("#qNext"); if (n) n.onclick = () => { quiz.i++; quiz.picked = null; renderProtect(); };
  }

  // 紀錄小幫手：填完整理成一段文字，可以複製；也可以存在這台裝置（只存在瀏覽器）
  const RKEY = "lh_records";
  const loadRecords = () => { try { return JSON.parse(localStorage.getItem(RKEY)) || []; } catch (e) { return []; } };
  const saveRecords = l => { try { localStorage.setItem(RKEY, JSON.stringify(l)); return true; } catch (e) { return false; } };
  const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
  function recordText(r) {
    return [`【事件紀錄】${r.date}${r.time ? " " + r.time : ""}`,
      `地點：${r.place || "（沒填）"}`,
      `發生什麼事：${r.what || "（沒填）"}`,
      `對方：${r.who || "（沒填）"}`,
      `在場看到的人：${r.saw || "（沒填）"}`,
      `證據：${r.ev.length ? r.ev.join("、") : "（沒有）"}`,
      r.feel ? `我的感受：${r.feel}` : "",
      `（紀錄時間：${r.at}）`].filter(Boolean).join("\n");
  }
  function protectRecord(el, P) {
    const R = P.record, list = loadRecords();
    el.innerHTML = `<p class="muted small" style="margin-top:0">${esc(R.lead)}</p>
      <div class="rec">
        <div class="r2"><label>日期<input type="date" id="rDate" value="${today()}"></label><label>大約幾點<input type="time" id="rTime"></label></div>
        <label>在哪裡<input id="rPlace" maxlength="60" placeholder="例如：教室後排、廁所、班級群組"></label>
        <label>發生什麼事<textarea id="rWhat" rows="3" maxlength="600" placeholder="例如：他把我的書包丟到垃圾桶，說「你這種人不配」"></textarea></label>
        <label>對方是誰<input id="rWho" maxlength="60" placeholder="名字或帳號，不知道也可以寫「不知道」"></label>
        <label>誰在旁邊看到<input id="rSaw" maxlength="80" placeholder="例如：同學小美、阿明"></label>
        <div class="rlab">有哪些證據</div>
        <div class="rev">${R.evidence.map(e => `<label class="rchk"><input type="checkbox" value="${esc(e)}"> ${esc(e)}</label>`).join("")}</div>
        <label>我的感受（可以不填）<input id="rFeel" maxlength="120" placeholder="例如：很害怕、不想去學校"></label>
        <div class="rbtns"><button class="btn acc" id="rMake">整理成紀錄</button></div>
        <div id="rOut"></div>
      </div>
      <p class="small muted">${esc(R.privacy)}</p>
      ${list.length ? `<div class="rsaved"><b>存在這台裝置的紀錄（${list.length}）</b>${list.map((r, i) => `<details><summary>${esc(r.date)} ${esc(r.place || "")}</summary><pre>${esc(recordText(r))}</pre>
          <div class="rbtns"><button class="btn ghost small" data-rcopy="${i}">複製</button><button class="btn ghost small" data-rdel="${i}">刪除</button></div></details>`).join("")}</div>` : ""}`;
    const copy = async (t, btn) => { try { await navigator.clipboard.writeText(t); btn.textContent = "已複製"; } catch (e) { prompt("請複製這段紀錄：", t); } };
    $("#rMake").onclick = () => {
      const r = { date: $("#rDate").value, time: $("#rTime").value, place: $("#rPlace").value.trim(), what: $("#rWhat").value.trim(),
        who: $("#rWho").value.trim(), saw: $("#rSaw").value.trim(), ev: [...el.querySelectorAll(".rev input:checked")].map(i => i.value),
        feel: $("#rFeel").value.trim(), at: new Date().toLocaleString("zh-TW") };
      if (!r.what) { $("#rWhat").focus(); $("#rWhat").classList.add("shake"); setTimeout(() => $("#rWhat").classList.remove("shake"), 420); return; }
      $("#rOut").innerHTML = `<pre class="rpre">${esc(recordText(r))}</pre>
        <div class="rbtns"><button class="btn acc" id="rCopy">複製</button><button class="btn ghost" id="rSave">存在這台裝置</button></div>`;
      $("#rCopy").onclick = e => copy(recordText(r), e.target);
      $("#rSave").onclick = () => { const l = loadRecords(); l.unshift(r); if (saveRecords(l)) renderProtect(); else alert("這個瀏覽器不能存，請先按「複製」貼到別的地方。"); };
    };
    el.querySelectorAll("[data-rcopy]").forEach(b => b.onclick = () => copy(recordText(list[+b.dataset.rcopy]), b));
    el.querySelectorAll("[data-rdel]").forEach(b => b.onclick = () => {
      if (b.dataset.confirm !== "1") { b.dataset.confirm = "1"; b.textContent = "確定刪除？"; return; }
      list.splice(+b.dataset.rdel, 1); saveRecords(list); renderProtect();
    });
  }

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
          ${fs.done[i] !== undefined ? `<span class="fsc">${endLabel(fs.done[i], s)}</span>` : s.red ? '<span class="fred">要找大人的情況</span>' : '<span class="fgo">開始聊 →</span>'}
        </button>`).join("")}</div>
      ${doneN === F.stories.length ? friendSummary() : `<p class="small muted" style="text-align:center;margin:12px 0 0">已經陪了 ${doneN} / ${F.stories.length} 位朋友</p>`}`;
    app.querySelectorAll("[data-story]").forEach(b => b.onclick = () => playStory(+b.dataset.story));
    const again = $("#fAgain"); if (again) again.onclick = () => { fs = null; renderFriend(); };
  };
  // 結局：得分比例 ≥75% good、≥40% mid、其他 bad
  const endingOf = (got, s) => { const r = got / (s.steps.length * 2); return r >= 0.75 ? "good" : r >= 0.4 ? "mid" : "bad"; };
  const endLabel = (got, s) => ({ good: "接住了", mid: "還在努力", bad: "沒接住" })[endingOf(got, s)];
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
        <div class="chead"><button class="cback" id="cBack" aria-label="回到朋友列表">‹</button><span class="av">${esc(s.avatar)}</span><b>${esc(s.name)}</b>
          <span class="mood" title="他現在的心情"><span>心情</span><span class="mbar"><i id="cMood" style="width:40%"></i></span></span></div>
        <div class="cbody" id="cBody"></div>
        <div class="cfoot" id="cFoot"></div>
      </div>`;
    $("#cBack").onclick = () => renderFriend();
    const body = $("#cBody"), foot = $("#cFoot");
    const add = (html, cls) => { const d = document.createElement("div"); d.className = "msg " + cls; d.innerHTML = html; body.appendChild(d); body.scrollTop = body.scrollHeight; return d; };
    const typing = async ms => { const t = add('<span class="dots"><i></i><i></i><i></i></span>', "them typing"); await sleep(ms); t.remove(); };
    // 朋友的訊息：開頭 # 是旁白；第二輪起依你上一個回覆（2/1/0 分）換不同的話
    const say = async m => {
      if (m.startsWith("#")) { add(esc(m.slice(1)), "sys"); await sleep(500); return; }
      await typing(700 + m.length * 25); if (document.body.contains(body)) add(esc(m), "them");
    };
    let mood = 40, last = null;
    const setMood = d => { mood = Math.max(5, Math.min(100, mood + d)); const el = $("#cMood"); if (el) { el.style.width = mood + "%"; el.className = mood >= 60 ? "up" : mood <= 25 ? "down" : ""; } };
    if (s.setup) add(esc(s.setup), "sys");
    for (const step of s.steps) {
      const msgs = Array.isArray(step.msgs) ? step.msgs : (step.msgs[last === 2 ? "good" : last === 1 ? "ok" : last === 0 ? "bad" : "good"] || step.msgs.good);
      for (const m of msgs) { await say(m); if (!document.body.contains(body)) return; }
      const c = await new Promise(res => {
        foot.innerHTML = step.choices.map((c, j) => `<button class="copt" data-c="${j}">${esc(c.text)}</button>`).join("");
        foot.querySelectorAll("[data-c]").forEach(b => b.onclick = () => res(step.choices[+b.dataset.c]));
      });
      foot.innerHTML = "";
      add(esc(c.text), "me");
      got += c.score; last = c.score;
      await say(c.reply);
      if (!document.body.contains(body)) return;
      setMood(c.score === 2 ? 20 : c.score === 1 ? 2 : -18);
      add(`<span class="tipk ${c.score === 2 ? "good" : c.score === 1 ? "ok" : "hm"}">${c.score === 2 ? "接住了" : c.score === 1 ? "還可以" : "他可能更難受了"}</span>${c.tip}`, "tip");
      await new Promise(res => { foot.innerHTML = '<button class="btn acc" id="cNext">繼續</button>'; $("#cNext").onclick = res; });
      foot.innerHTML = "";
    }
    if (fs.done[i] === undefined) fs.score += got; else fs.score += got - fs.done[i];
    fs.done[i] = got;
    const e = endingOf(got, s);
    add(`<div class="ep-k">後來</div><div class="ep-t">${esc(s.endings[e])}</div><div class="ep-s">這段對話，你的接住值 <b>+${got}</b>・${endLabel(got, s)}</div>`, "epi " + e);
    foot.innerHTML = '<button class="btn acc" id="cDone">回到朋友列表</button>';
    $("#cDone").onclick = () => renderFriend();
  }

  // ---------- 心理迷宮：同一天，四個人（文案在 content-maze.js） ----------
  const Z = M.maze;
  const mz = { chapter: null, at: null, seen: null, path: null, done: new Set(), finale: false };
  window.renderMaze = function () {
    if (mz.finale) return renderFinale();
    if (!mz.chapter) return renderChapters();
    const ch = mz.chapter, room = ch.rooms[mz.at];
    const insights = [...new Map(mz.path.map(k => ch.rooms[k]).filter(r => r.insight && !r.end).map(r => [r.name, r])).values()];
    app.innerHTML = `<div class="mzhead"><button class="cback dark" id="mzBack" aria-label="回到四個人">‹</button>
        <span><b>${esc(ch.who)}</b>・${esc(ch.role)}</span></div>
      <div class="mzwrap">${mazeMap(ch)}</div>
      <div class="room${room.end ? " end" : ""} rfade">
        <div class="rname">${esc(room.name)}</div>
        <p class="rscene">${esc(room.scene)}</p>
        ${room.insight ? `<div class="rins"><span>${room.end ? "這一章" : "你看見的"}</span>${esc(room.insight)}</div>` : ""}
        ${room.end ? `${insights.length ? `<div class="rlist"><b>這一路看見的：</b><ul>${insights.map(r => `<li><b>${esc(r.name)}</b>：${esc(r.insight)}</li>`).join("")}</ul></div>` : ""}
          <div class="rexits"><button class="btn acc" id="mzNext">${mz.done.size + (mz.done.has(ch.id) ? 0 : 1) >= Z.chapters.length ? "看看同一天的四個人 →" : "換另一個人的角度 →"}</button></div>`
        : `<div class="rexits">${room.exits.map(e => `<button class="rexit" data-to="${esc(e.to)}">${esc(e.text)}<span>→</span></button>`).join("")}</div>`}
      </div>`;
    $("#mzBack").onclick = () => { mz.chapter = null; renderMaze(); };
    app.querySelectorAll("[data-to]").forEach(b => b.onclick = () => {
      mz.at = b.dataset.to; mz.seen.add(mz.at); mz.path.push(mz.at);
      renderMaze();
      document.querySelector(".mzhead").scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
    const next = $("#mzNext");
    if (next) next.onclick = () => {
      mz.done.add(ch.id); mz.chapter = null;
      if (mz.done.size >= Z.chapters.length) mz.finale = true;
      renderMaze();
      document.querySelector(".nav").scrollIntoView({ block: "start", behavior: "smooth" });
    };
  };
  function renderChapters() {
    const all = mz.done.size >= Z.chapters.length;
    app.innerHTML = `<p class="muted small" style="margin-top:0">${esc(Z.lead)}</p>
      <div class="chlist">${Z.chapters.map((c, i) => `<button class="chpick${mz.done.has(c.id) ? " done" : ""}" data-ch="${i}">
          <span class="chn">${i + 1}</span><span class="ft"><b>${esc(c.role)}：${esc(c.who)}</b><span>${esc(c.hint)}</span></span>
          <span class="${mz.done.has(c.id) ? "fsc" : "fgo"}">${mz.done.has(c.id) ? "走過了" : "走進去 →"}</span></button>`).join("")}</div>
      <p class="small muted" style="text-align:center;margin:12px 0 0">${all
        ? `<button class="btn acc" id="mzFinale">看看同一天的四個人 →</button>`
        : `走完四個人的角度，會看到同一天的全貌（${mz.done.size} / ${Z.chapters.length}）`}</p>`;
    app.querySelectorAll("[data-ch]").forEach(b => b.onclick = () => {
      const ch = Z.chapters[+b.dataset.ch];
      Object.assign(mz, { chapter: ch, at: ch.start, seen: new Set([ch.start]), path: [ch.start] });
      renderMaze();
    });
    const f = $("#mzFinale"); if (f) f.onclick = () => { mz.finale = true; renderMaze(); };
  }
  function renderFinale() {
    const F = Z.finale;
    app.innerHTML = `<div class="finale">
        <div class="fnt">${esc(F.title)}</div>
        ${F.rows.map((r, i) => `<div class="frow seq" style="animation-delay:${0.4 + i * 1.1}s"><div class="ftime">${esc(r.time)}</div>
          <div class="fitems">${r.items.map(([who, what]) => `<div class="fit"><b>${esc(who)}</b>${esc(what)}</div>`).join("")}</div></div>`).join("")}
        <p class="fpunch seq" style="animation-delay:${0.6 + F.rows.length * 1.1}s">${esc(F.punch)}</p>
        <p class="fafter seq" style="animation-delay:${1.8 + F.rows.length * 1.1}s">${esc(F.after)}</p>
      </div>
      <div style="text-align:center;margin-top:14px"><button class="btn ghost" id="mzReset">從頭再走一次</button></div>`;
    $("#mzReset").onclick = () => { Object.assign(mz, { chapter: null, done: new Set(), finale: false }); renderMaze(); };
  }
  function mazeMap(ch) {
    const W = 300, H = 252, px = x => 30 + x * 60, py = y => 25 + y * 45;
    const R = ch.rooms;
    const edges = [];
    for (const [k, r] of Object.entries(R)) for (const e of r.exits || []) if (!edges.some(([a, b]) => a === k && b === e.to)) edges.push([k, e.to]);
    const walked = new Set(mz.path.slice(1).map((k, i) => mz.path[i] + ">" + k));
    const lines = edges.map(([a, b]) => {
      const A = R[a], B = R[b], on = walked.has(a + ">" + b);
      const known = mz.seen.has(a) && mz.seen.has(b);
      return `<line x1="${px(A.x)}" y1="${py(A.y)}" x2="${px(B.x)}" y2="${py(B.y)}" class="${on ? "e on" : known ? "e" : "e dim"}"/>`;
    }).join("");
    const nodes = Object.entries(R).map(([k, r]) => {
      const cls = k === mz.at ? "n cur" : mz.seen.has(k) ? "n seen" : "n fog";
      return `<g class="${cls}"><circle cx="${px(r.x)}" cy="${py(r.y)}" r="${k === mz.at ? 11 : 8}"/>${mz.seen.has(k) ? `<text x="${px(r.x)}" y="${py(r.y) + 24}">${esc(r.name)}</text>` : ""}</g>`;
    }).join("");
    return `<svg class="mzmap" viewBox="0 0 ${W} ${H}" role="img" aria-label="迷宮地圖">${lines}${nodes}</svg>`;
  }
})();
