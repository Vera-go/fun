import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { CalendarClock, Clock, AlertTriangle, BookOpen, Link2, Pencil, Trash2, Copy } from "lucide-react";
import Header from "@/components/Header";
import RestaurantList from "@/components/RestaurantList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/lib/queryClient";
import { supabase } from "@/lib/supabase";
import { useEvent, loadEvent, reloadEvent, leaveEvent, forgetEvent, isOpen, daysLeft, shortDate, inviteUrl, EventInfo } from "@/lib/event";
import { termsFor } from "@/lib/terms";

export async function copyText(text: string, toast: ReturnType<typeof useToast>["toast"], what = "連結") {
  try { await navigator.clipboard.writeText(text); toast({ title: `已複製${what}` }); }
  catch { window.prompt(`請複製這個${what}：`, text); }
}

function DateBadge({ label, deadline, today, icon }: { label: string; deadline: string; today: string; icon: JSX.Element }) {
  const d = daysLeft(deadline, today);
  return (
    <div className="flex items-center">
      {icon}
      <span className="text-sm">
        <span className="font-medium">{label}:</span> {shortDate(deadline)}
        <span className="ml-1.5 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
          {d > 0 ? `剩餘 ${d} 天` : d === 0 ? "今天截止" : "已截止"}
        </span>
      </span>
    </div>
  );
}

// 主辦人修改活動
function EditEventDialog({ ev, open, onClose }: { ev: EventInfo; open: boolean; onClose: () => void }) {
  const { toast } = useToast();
  const [f, setF] = useState({ title: ev.title, description: ev.description, rd: ev.recommendDeadline, vd: ev.voteDeadline, votes: ev.votesPerPerson });
  const [busy, setBusy] = useState(false);
  useEffect(() => { if (open) setF({ title: ev.title, description: ev.description, rd: ev.recommendDeadline, vd: ev.voteDeadline, votes: ev.votesPerPerson }); }, [open]);
  const save = async () => {
    setBusy(true);
    const { error } = await supabase.rpc("update_event", { p_code: ev.code, p_title: f.title, p_description: f.description, p_recommend: f.rd, p_vote: f.vd, p_votes: f.votes });
    setBusy(false);
    if (error) return toast({ title: "修改失敗", description: error.message, variant: "destructive" });
    await reloadEvent(); queryClient.invalidateQueries();
    toast({ title: "活動已更新" }); onClose();
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader><DialogTitle>修改活動</DialogTitle><DialogDescription>只有主辦人看得到這個視窗</DialogDescription></DialogHeader>
        <EventFields f={f} setF={setF} kind={ev.kind} />
        <div className="flex justify-end"><Button onClick={save} disabled={busy || !f.title.trim() || !f.rd || !f.vd}>{busy ? "儲存中..." : "儲存"}</Button></div>
      </DialogContent>
    </Dialog>
  );
}

// 建立和修改活動共用的欄位
export function EventFields({ f, setF, kind }: { f: { title: string; description: string; rd: string; vd: string; votes: number }; setF: (v: any) => void; kind?: string }) {
  const T = termsFor(kind);
  const up = (k: string) => (e: any) => setF({ ...f, [k]: k === "votes" ? Number(e.target.value) : e.target.value });
  return (
    <div className="grid gap-4 py-2">
      <div className="grid gap-1.5"><Label htmlFor="ev-title">活動名稱</Label>
        <Input id="ev-title" maxLength={60} placeholder={T.eventTitlePh} value={f.title} onChange={up("title")} /></div>
      <div className="grid gap-1.5"><Label htmlFor="ev-desc">活動說明（選填）</Label>
        <Textarea id="ev-desc" maxLength={500} rows={3} placeholder={T.eventDescPh} value={f.description} onChange={up("description")} /></div>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5"><Label htmlFor="ev-rd">推薦截止日期</Label><Input id="ev-rd" type="date" value={f.rd} onChange={up("rd")} /></div>
        <div className="grid gap-1.5"><Label htmlFor="ev-vd">最後投票日期</Label><Input id="ev-vd" type="date" value={f.vd} min={f.rd} onChange={up("vd")} /></div>
      </div>
      <div className="grid gap-1.5"><Label htmlFor="ev-votes">每人幾票</Label>
        <select id="ev-votes" className="h-10 rounded-md border border-input bg-background px-3 text-sm" value={f.votes} onChange={up("votes")}>
          {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} 票</option>)}
        </select>
        <span className="text-xs text-muted-foreground">同一{T.unit}{T.item}每人只能投一票</span></div>
      {f.rd && f.vd && f.vd < f.rd && <p className="text-sm text-destructive">最後投票日期不能早於推薦截止日期</p>}
    </div>
  );
}

export default function EventPage({ code }: { code: string }) {
  const { event, loading, notFound } = useEvent();
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [editing, setEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const T = termsFor(event?.kind);

  // 換活動時清掉上一個活動的資料
  useEffect(() => {
    queryClient.clear();
    loadEvent(code);
    return () => { leaveEvent(); queryClient.clear(); };
  }, [code]);

  if (notFound) return (
    <div className="min-h-screen"><Header />
      <main className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-serif text-primary mb-3">找不到這個活動</h2>
        <p className="text-muted-foreground mb-8">連結可能打錯了，或活動已經被主辦人刪除。</p>
        <Link href="/"><Button>回首頁</Button></Link>
      </main>
    </div>
  );
  if (!event || loading && !event) return (
    <div className="min-h-screen"><Header /><main className="container mx-auto px-6 py-20 text-center text-muted-foreground">載入中...</main></div>
  );

  const del = async () => {
    const { error } = await supabase.rpc("delete_event", { p_code: event.code });
    if (error) return toast({ title: "刪除失敗", description: error.message, variant: "destructive" });
    forgetEvent(event.code); toast({ title: "活動已刪除" }); setLocation("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Header />

      {/* 重要日期提醒橫幅 */}
      <div className="relative bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 border-y border-amber-200 py-4 mb-8 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 text-amber-800">
            <div className="flex items-center"><AlertTriangle className="h-4 w-4 mr-2 text-amber-500" /><span className="text-sm font-medium">重要日期提醒</span></div>
            <DateBadge label="推薦截止日期" deadline={event.recommendDeadline} today={event.today} icon={<CalendarClock className="h-4 w-4 mr-2 text-amber-500" />} />
            <DateBadge label="最後投票日期" deadline={event.voteDeadline} today={event.today} icon={<Clock className="h-4 w-4 mr-2 text-amber-500" />} />
            <Link href="/manual">
              <Button variant="ghost" size="sm" className="flex items-center text-amber-900 bg-amber-100/50 hover:bg-amber-100 border border-amber-200">
                <BookOpen className="h-4 w-4 mr-2 text-amber-600" /><span className="text-sm font-medium">使用手冊</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-primary mb-3 font-serif tracking-wide">{event.title}</h2>
          <div className="h-[2px] w-24 bg-primary/30 mx-auto"></div>
          {event.description && (
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6 font-serif text-sm md:text-base tracking-wide whitespace-pre-line">{event.description}</p>
          )}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Button variant="outline" size="sm" onClick={() => copyText(inviteUrl(event.code), toast, "邀請連結")}>
              <Link2 className="h-4 w-4 mr-1.5" />複製邀請連結
            </Button>
          </div>
        </div>

        {/* 主辦人工具：只有主辦人看得到 */}
        {event.isAdmin && (
          <div className="max-w-2xl mx-auto mb-12 border border-amber-300 bg-amber-50/60 rounded-sm p-4 text-sm">
            <div className="font-medium text-amber-900 mb-2">主辦人工具</div>
            <p className="text-amber-800 mb-3">把邀請連結傳給大家，例如貼到 LINE 群組。你可以看到每{T.unit}{T.item}是誰投的（點{T.item}卡片上的 ⓘ），也可以刪除不適合的{T.item}。</p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="outline" onClick={() => copyText(inviteUrl(event.code), toast, "邀請連結")}><Copy className="h-4 w-4 mr-1.5" />複製邀請連結</Button>
              <Button size="sm" variant="outline" onClick={() => setEditing(true)}><Pencil className="h-4 w-4 mr-1.5" />修改活動</Button>
              <Button size="sm" variant="outline" className="text-destructive" onClick={() => setConfirmDelete(true)}><Trash2 className="h-4 w-4 mr-1.5" />刪除活動</Button>
            </div>
            {confirmDelete && (
              <div className="mt-3 p-3 border border-destructive/40 bg-white rounded-sm">
                <p className="mb-2">確定要刪除「{event.title}」嗎？所有{T.item}和投票都會一起刪除，不能復原。</p>
                <div className="flex gap-2"><Button size="sm" variant="destructive" onClick={del}>確定刪除</Button><Button size="sm" variant="outline" onClick={() => setConfirmDelete(false)}>取消</Button></div>
              </div>
            )}
          </div>
        )}

        {!isOpen(event.voteDeadline, event.today) && (
          <p className="text-center text-amber-700 mb-8">投票已經在 {shortDate(event.voteDeadline)} 截止，以下是最後結果。</p>
        )}

        <div className="japanese-divider mb-12"></div>
        <RestaurantList />
      </main>
      {event.isAdmin && <EditEventDialog ev={event} open={editing} onClose={() => setEditing(false)} />}
    </div>
  );
}
