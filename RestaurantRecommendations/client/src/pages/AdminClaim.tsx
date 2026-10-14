import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { ensureSession } from "@/lib/event";

// 打開管理連結：確認密碼後，把這台裝置設為這個活動的主辦人，再進入活動頁
export default function AdminClaim({ code, token }: { code: string; token: string }) {
  const [, setLocation] = useLocation();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await ensureSession();
        const { data, error } = await supabase.rpc("claim_event_admin", { p_code: code, p_token: token });
        if (error || !data) throw new Error("bad");
        setLocation(`/e/${code}`, { replace: true });   // 網址裡不留管理密碼
      } catch {
        setFailed(true);
      }
    })();
  }, [code, token]);

  return (
    <div className="min-h-screen"><Header />
      <main className="container mx-auto px-6 py-20 text-center">
        {failed ? (<>
          <h2 className="text-2xl font-serif text-primary mb-3">管理連結無效</h2>
          <p className="text-muted-foreground mb-8">連結可能不完整，或活動已經被刪除。</p>
          <Link href="/"><Button>回首頁</Button></Link>
        </>) : <p className="text-muted-foreground">確認主辦人身分中...</p>}
      </main>
    </div>
  );
}
