import { useState } from "react";
import { Link } from "wouter";
import { PlusCircle, Link2, ShieldAlert, CalendarDays, X } from "lucide-react";
import { BowlIcon, SuitcaseIcon, CreatedSeal, KindIcon } from "@/components/BrandIcons";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { ensureSession, inviteUrl, adminUrl, myEvents, forgetEvent } from "@/lib/event";
import { EventFields, copyText } from "./EventPage";
import { type EventKind } from "@/lib/terms";

const KINDS: { kind: EventKind; label: string; hint: string; Icon: typeof BowlIcon }[] = [
  { kind: "restaurant", label: "聚餐餐廳", hint: "決定去哪吃", Icon: BowlIcon },
  { kind: "trip", label: "旅遊地點", hint: "畢業旅行、員工旅遊…", Icon: SuitcaseIcon },
];

// 台灣今天 + n 天（建立活動時的預設日期）
const dayPlus = (n: number) => { const d = new Date(Date.now() + 8 * 3600e3 + n * 864e5); return d.toISOString().slice(0, 10); };

export default function Landing() {
  const { toast } = useToast();
  const [f, setF] = useState({ title: "", description: "", rd: dayPlus(7), vd: dayPlus(14), votes: 2 });
  const [busy, setBusy] = useState(false);
  const [created, setCreated] = useState<{ code: string; token: string; title: string } | null>(null);
  const [list, setList] = useState(myEvents());
  const [kind, setKind] = useState<EventKind>("restaurant");

  const create = async () => {
    setBusy(true);
    try {
      await ensureSession();
      const { data, error } = await supabase.rpc("create_event", {
        p_title: f.title, p_description: f.description, p_recommend: f.rd, p_vote: f.vd, p_votes: f.votes, p_kind: kind,
      });
      if (error) throw error;
      setCreated({ code: data[0].code, token: data[0].token, title: f.title });
    } catch (e: any) {
      toast({ title: "建立失敗", description: e?.message || "請稍後再試", variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-primary mb-3 font-serif tracking-wide">{kind === "trip" ? "揪大家一起決定去哪玩" : "揪大家一起決定去哪吃"}</h2>
          <div className="h-[2px] w-24 bg-primary/30 mx-auto mb-4"></div>
          <p className="text-muted-foreground">{kind === "trip"
            ? "建立一個旅遊活動（例如畢業旅行），把邀請連結傳給大家，一起推薦地點、投票選出最想去的地方。不用註冊。"
            : "建立一個聚餐活動，把邀請連結傳給大家，一起推薦餐廳、投票選出最想去的那一家。不用註冊。"}</p>
        </div>

        {created ? (
          <div className="border border-primary/40 bg-card rounded-sm p-6 shadow-sm">
            <h3 className="text-xl font-serif text-primary mb-1 flex items-center gap-2"><CreatedSeal className="h-9 w-9 flex-shrink-0" /><span>活動建立好了：{created.title}</span></h3>
            <p className="text-sm text-muted-foreground mb-5">下面兩個連結請分開用：</p>

            <div className="mb-5">
              <div className="font-medium mb-1 flex items-center"><Link2 className="h-4 w-4 mr-1.5 text-primary" />邀請連結：傳給大家</div>
              <div className="flex gap-2"><input readOnly value={inviteUrl(created.code)} className="flex-1 min-w-0 border rounded-sm px-2 py-1.5 text-sm bg-muted/40" onFocus={e => e.target.select()} />
                <Button size="sm" onClick={() => copyText(inviteUrl(created.code), toast, "邀請連結")}>複製</Button></div>
            </div>

            <div className="mb-6 p-3 bg-amber-50 border border-amber-300 rounded-sm">
              <div className="font-medium mb-1 flex items-center text-amber-900"><ShieldAlert className="h-4 w-4 mr-1.5" />管理連結：只有你自己留著</div>
              <p className="text-xs text-amber-800 mb-2">用這個連結打開活動，就能修改活動、看誰投了哪一個。換手機或電腦時也用它。<b>請存在安全的地方，不要傳給別人</b>，弄丟了就無法再管理這個活動。</p>
              <div className="flex gap-2"><input readOnly value={adminUrl(created.code, created.token)} className="flex-1 min-w-0 border rounded-sm px-2 py-1.5 text-sm bg-white" onFocus={e => e.target.select()} />
                <Button size="sm" variant="outline" onClick={() => copyText(adminUrl(created.code, created.token), toast, "管理連結")}>複製</Button></div>
            </div>

            <Link href={`/e/${created.code}`}><Button className="w-full">前往活動頁面</Button></Link>
          </div>
        ) : (
          <div className="border border-border/60 bg-card rounded-sm p-6 shadow-sm">
            <h3 className="text-lg font-serif text-primary mb-2 flex items-center"><PlusCircle className="h-5 w-5 mr-2" />建立新活動</h3>
            <div className="grid grid-cols-2 gap-3 mb-2" role="radiogroup" aria-label="要投票決定什麼">
              {KINDS.map(k => (
                <button key={k.kind} type="button" role="radio" aria-checked={kind === k.kind} aria-label={k.label} onClick={() => setKind(k.kind)}
                  className={`flex flex-col items-center gap-1 rounded-sm border-2 px-3 py-3 transition-colors ${kind === k.kind ? "border-primary bg-primary/10 text-primary" : "border-border/60 hover:border-primary/40 text-muted-foreground"}`}>
                  <k.Icon className="h-6 w-6" />
                  <span className="font-medium">{k.label}</span>
                  <span className="text-xs opacity-80">{k.hint}</span>
                </button>
              ))}
            </div>
            <EventFields f={f} setF={setF} kind={kind} />
            <Button className="w-full mt-2" onClick={create} disabled={busy || !f.title.trim() || !f.rd || !f.vd || f.vd < f.rd}>
              {busy ? "建立中..." : "建立活動"}
            </Button>
          </div>
        )}

        {list.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-serif text-primary mb-3 flex items-center"><CalendarDays className="h-5 w-5 mr-2" />我參加過的活動</h3>
            <ul className="divide-y border rounded-sm bg-card">
              {list.map(e => (
                <li key={e.code} className="flex items-center justify-between px-4 py-3">
                  <Link href={`/e/${e.code}`} className="hover:text-primary">
                    <KindIcon kind={e.kind} className="h-4 w-4 inline-block mr-1.5 -mt-0.5 text-amber-700" />{e.title}{e.admin && <span className="ml-2 text-xs text-amber-700 border border-amber-300 rounded-full px-2 py-0.5">主辦人</span>}
                  </Link>
                  <button title="從清單移除" className="text-muted-foreground hover:text-destructive" onClick={() => { forgetEvent(e.code); setList(myEvents()); }}>
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-2">這份清單只存在這台裝置的瀏覽器裡。</p>
          </div>
        )}
      </main>
    </div>
  );
}
