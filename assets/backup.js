/* =========================================================
   下載備份／匯入備份（各網站共用）
   資料只存在瀏覽器裡（localStorage），換裝置或清除瀏覽資料就會不見；
   這裡把資料存成一個檔案，換裝置時再匯入。不會上傳到任何地方。
   用法：頁面放 <button data-backup="save">、<button data-backup="load">，再呼叫
     SiteBackup({site:"dressup", name:"搭配小舞台", keys:["dressup.v1"]});
   ========================================================= */
(function(){
  function stamp(){ const d = new Date(), p = n => String(n).padStart(2, "0"); return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}`; }
  window.SiteBackup = function(opt){
    const keys = opt.keys || [];
    function save(){
      const data = {};
      keys.forEach(k => { try{ const v = localStorage.getItem(k); if(v !== null) data[k] = v; }catch(e){} });
      if(!Object.keys(data).length){ alert("這台裝置上還沒有可以備份的資料。"); return; }
      const blob = new Blob([JSON.stringify({site:opt.site, name:opt.name, savedAt:new Date().toISOString(), data})], {type:"application/json"});
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob); a.download = `${opt.name}-備份-${stamp()}.json`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 3000);
      try{ localStorage.setItem(opt.site + ".lastBackup", String(Date.now())); }catch(e){}
    }
    function load(){
      const inp = document.createElement("input");
      inp.type = "file"; inp.accept = ".json,application/json";
      inp.onchange = () => {
        const f = inp.files && inp.files[0]; if(!f) return;
        if(f.size > 5 * 1024 * 1024){ alert("這個檔案太大了，不像是這個網站的備份檔。"); return; }
        const r = new FileReader();
        r.onload = () => {
          let o; try{ o = JSON.parse(r.result); }catch(e){ alert("讀不懂這個檔案，請選擇從這個網站下載的備份檔。"); return; }
          if(!o || o.site !== opt.site || !o.data || typeof o.data !== "object"){ alert(`這不是「${opt.name}」的備份檔。`); return; }
          const when = o.savedAt ? new Date(o.savedAt).toLocaleString() : "不知道什麼時候";
          if(!confirm(`要匯入 ${when} 的備份嗎？\n這台裝置上現在的資料會被備份裡的資料取代。`)) return;
          try{ keys.forEach(k => { if(typeof o.data[k] === "string") localStorage.setItem(k, o.data[k]); }); }
          catch(e){ alert("匯入失敗：瀏覽器的空間可能不夠。"); return; }
          alert("匯入好了！"); location.reload();
        };
        r.readAsText(f);
      };
      inp.click();
    }
    document.addEventListener("click", e => {
      const b = e.target.closest("[data-backup]"); if(!b) return;
      e.preventDefault(); if(b.dataset.backup === "save") save(); else load();
    });
  };
})();
