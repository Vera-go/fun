/* 中國象棋規則引擎（純邏輯，沒有畫面）。
   棋盤 10 列 × 9 行，第 0 列在上面（黑方），第 9 列在下面（紅方）。
   棋子代號：大寫是紅方，小寫是黑方：K 帥將、A 仕士、E 相象、H 馬、R 車、C 炮、P 兵卒。 */
(function(root){
"use strict";
const R_ = 10, C_ = 9;
const START = [
  "rheakaehr",
  ".........",
  ".c.....c.",
  "p.p.p.p.p",
  ".........",
  ".........",
  "P.P.P.P.P",
  ".C.....C.",
  ".........",
  "RHEAKAEHR"
];
const VAL = {K:10000, A:20, E:20, H:45, R:90, C:48, P:10};
const newBoard = () => START.map(r => r.split(""));
const isRed = ch => ch !== "." && ch === ch.toUpperCase();
const sideOf = ch => ch === "." ? 0 : isRed(ch) ? 1 : -1;   // 紅 1、黑 -1
const inPalace = (r, c, side) => c >= 3 && c <= 5 && (side === 1 ? r >= 7 : r <= 2);
const ownHalf = (r, side) => side === 1 ? r >= 5 : r <= 4;

/* 產生「偽合法」走法（不檢查自己會不會被將軍）。回傳 [fr, fc, tr, tc] 陣列 */
function pseudoMoves(b, side){
  const out = [];
  const push = (r, c, tr, tc) => { if(tr < 0 || tr >= R_ || tc < 0 || tc >= C_) return; const t = b[tr][tc]; if(t !== "." && sideOf(t) === side) return; out.push([r, c, tr, tc]); };
  for(let r = 0; r < R_; r++) for(let c = 0; c < C_; c++){
    const ch = b[r][c]; if(ch === "." || sideOf(ch) !== side) continue; const k = ch.toUpperCase();
    if(k === "K"){ for(const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]){ const tr = r + dr, tc = c + dc; if(inPalace(tr, tc, side)) push(r, c, tr, tc); } }
    else if(k === "A"){ for(const [dr, dc] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]){ const tr = r + dr, tc = c + dc; if(inPalace(tr, tc, side)) push(r, c, tr, tc); } }
    else if(k === "E"){ for(const [dr, dc] of [[2, 2], [2, -2], [-2, 2], [-2, -2]]){ const tr = r + dr, tc = c + dc; if(tr < 0 || tr >= R_ || tc < 0 || tc >= C_) continue; if(!ownHalf(tr, side)) continue; if(b[r + dr / 2][c + dc / 2] !== ".") continue; push(r, c, tr, tc); } }
    else if(k === "H"){
      for(const [dr, dc, lr, lc] of [[-2, -1, -1, 0], [-2, 1, -1, 0], [2, -1, 1, 0], [2, 1, 1, 0], [-1, -2, 0, -1], [1, -2, 0, -1], [-1, 2, 0, 1], [1, 2, 0, 1]]){
        const tr = r + dr, tc = c + dc; if(tr < 0 || tr >= R_ || tc < 0 || tc >= C_) continue; if(b[r + lr][c + lc] !== ".") continue; push(r, c, tr, tc);
      }
    }
    else if(k === "R"){
      for(const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]){ let tr = r + dr, tc = c + dc; while(tr >= 0 && tr < R_ && tc >= 0 && tc < C_){ const t = b[tr][tc]; if(t === "."){ out.push([r, c, tr, tc]); } else { if(sideOf(t) !== side) out.push([r, c, tr, tc]); break; } tr += dr; tc += dc; } }
    }
    else if(k === "C"){
      for(const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]){
        let tr = r + dr, tc = c + dc, jumped = false;
        while(tr >= 0 && tr < R_ && tc >= 0 && tc < C_){
          const t = b[tr][tc];
          if(!jumped){ if(t === ".") out.push([r, c, tr, tc]); else jumped = true; }
          else if(t !== "."){ if(sideOf(t) !== side) out.push([r, c, tr, tc]); break; }
          tr += dr; tc += dc;
        }
      }
    }
    else if(k === "P"){
      const fwd = side === 1 ? -1 : 1; push(r, c, r + fwd, c);
      if(!ownHalf(r, side)){ push(r, c, r, c - 1); push(r, c, r, c + 1); }
    }
  }
  return out;
}
function findKing(b, side){ for(let r = 0; r < R_; r++) for(let c = 0; c < C_; c++) if(b[r][c] === (side === 1 ? "K" : "k")) return [r, c]; return null; }
/* 兩個將帥在同一行，中間沒有棋子（王見王） */
function facing(b){
  const rk = findKing(b, 1), bk = findKing(b, -1); if(!rk || !bk || rk[1] !== bk[1]) return false;
  for(let r = bk[0] + 1; r < rk[0]; r++) if(b[r][rk[1]] !== ".") return false; return true;
}
function inCheck(b, side){
  const k = findKing(b, side); if(!k) return true; if(facing(b)) return true;
  for(const m of pseudoMoves(b, -side)) if(m[2] === k[0] && m[3] === k[1]) return true; return false;
}
function apply(b, m){ const cap = b[m[2]][m[3]]; b[m[2]][m[3]] = b[m[0]][m[1]]; b[m[0]][m[1]] = "."; return cap; }
function undo(b, m, cap){ b[m[0]][m[1]] = b[m[2]][m[3]]; b[m[2]][m[3]] = cap; }
/* 合法走法：走完不能讓自己被將軍，也不能王見王 */
function legalMoves(b, side){
  const out = [];
  for(const m of pseudoMoves(b, side)){ const cap = apply(b, m); const bad = inCheck(b, side); undo(b, m, cap); if(!bad) out.push(m); }
  return out;
}
function legalFrom(b, side, r, c){ return legalMoves(b, side).filter(m => m[0] === r && m[1] === c); }

/* 評分（紅方好為正）：子力 + 兵過河加分 + 靠近中線的小加分 */
function evaluate(b){
  let s = 0;
  for(let r = 0; r < R_; r++) for(let c = 0; c < C_; c++){
    const ch = b[r][c]; if(ch === ".") continue; const k = ch.toUpperCase(), sd = sideOf(ch); let v = VAL[k];
    if(k === "P" && !ownHalf(r, sd)) v += 10; if(k === "H" || k === "C" || k === "R") v += 2 - Math.abs(c - 4) * .4;
    s += sd * v;
  }
  return s;
}
/* 偽合法搜尋（吃到將帥就是決定性的）。side：輪到誰；回傳以「這一方」角度的分數 */
function negamax(b, depth, alpha, beta, side){
  if(depth === 0) return side * evaluate(b);
  const ms = pseudoMoves(b, side); if(!ms.length) return -9999;
  ms.sort((p, q) => (b[q[2]][q[3]] === "." ? 0 : VAL[b[q[2]][q[3]].toUpperCase()]) - (b[p[2]][p[3]] === "." ? 0 : VAL[b[p[2]][p[3]].toUpperCase()]));
  let best = -Infinity;
  for(const m of ms){
    const t = b[m[2]][m[3]]; if(t !== "." && t.toUpperCase() === "K") return 9000 + depth;
    const cap = apply(b, m); const v = -negamax(b, depth - 1, -beta, -alpha, -side); undo(b, m, cap);
    if(v > best) best = v; if(best > alpha) alpha = best; if(alpha >= beta) break;
  }
  return best;
}
function bestMove(b, side, depth, blunder){
  const ms = legalMoves(b, side); if(!ms.length) return null;
  if(Math.random() < blunder) return ms[Math.floor(Math.random() * ms.length)];
  let best = -Infinity, pool = [];
  for(const m of ms){
    const cap = apply(b, m); const v = -negamax(b, depth - 1, -Infinity, Infinity, -side) + Math.random() * .6; undo(b, m, cap);
    if(v > best + 1e-9){ best = v; pool = [m]; } else if(Math.abs(v - best) < 1e-9) pool.push(m);
  }
  return pool[Math.floor(Math.random() * pool.length)];
}
function perft(b, side, depth){ if(depth === 0) return 1; let n = 0; for(const m of legalMoves(b, side)){ const cap = apply(b, m); n += perft(b, -side, depth - 1); undo(b, m, cap); } return n; }

root.Xiangqi = {R:R_, C:C_, newBoard, sideOf, isRed, legalMoves, legalFrom, inCheck, apply, undo, bestMove, perft, evaluate, findKing, facing};
})(typeof window !== "undefined" ? window : globalThis);
