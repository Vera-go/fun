import Header from "@/components/Header";
import { ChevronLeft, BookOpen, Info, Users, ShieldCheck, Plus, Vote, Edit, RefreshCw, HelpCircle, CalendarClock } from "lucide-react";
import { Link } from "wouter";
import { BowlIcon, SuitcaseIcon } from "@/components/BrandIcons";

/* 使用手冊：餐廳活動和旅遊地點活動共用。內容改了記得更新最下面的日期。 */
export default function UserManual() {
  const H2 = ({ icon, children }: { icon: JSX.Element; children: React.ReactNode }) => (
    <h2 className="flex items-center text-2xl font-bold text-primary/90 mb-4">{icon}{children}</h2>
  );
  const H3 = ({ children }: { children: React.ReactNode }) => <h3 className="text-xl font-bold mt-6 mb-2 flex items-center">{children}</h3>;
  const QA = ({ q, children }: { q: string; children: React.ReactNode }) => (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h3 className="font-bold text-gray-900">Q：{q}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Header />

      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center mb-8">
          <Link href="/">
            <div className="flex items-center text-primary hover:text-primary/80 transition-colors cursor-pointer">
              <ChevronLeft className="h-4 w-4 mr-1" />
              <span>返回首頁</span>
            </div>
          </Link>
        </div>

        <div className="prose prose-lg mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <BookOpen className="h-10 w-10 mx-auto text-primary mb-4" />
            <h1 className="text-3xl font-bold text-primary mb-2">推薦及投票 使用手冊</h1>
            <div className="h-1 w-20 bg-primary/30 mx-auto mt-4"></div>
          </div>

          {/* 系統概述 */}
          <section className="mb-12">
            <H2 icon={<Info className="h-6 w-6 mr-2 text-primary/70" />}>這是什麼</H2>
            <p>揪大家一起決定的投票工具：主辦人建立活動、把邀請連結傳給大家，參加的人推薦選項、投票，票數最高的就是大家最想去的。不用註冊，點連結、輸入名字就能用。可以同時有很多檔活動，彼此互不影響。</p>
            <p>建立活動時可以選兩種：</p>
            <ul className="list-none pl-0 space-y-2">
              <li className="flex items-center gap-2"><BowlIcon className="h-5 w-5 text-amber-700 flex-shrink-0" /><strong>聚餐餐廳</strong>：尾牙、春酒、部門聚餐，推薦餐廳、投票決定去哪吃</li>
              <li className="flex items-center gap-2"><SuitcaseIcon className="h-5 w-5 text-amber-700 flex-shrink-0" /><strong>旅遊地點</strong>：畢業旅行、員工旅遊，推薦地點、投票決定去哪玩</li>
            </ul>
          </section>

          {/* 主辦人 */}
          <section className="mb-12">
            <H2 icon={<ShieldCheck className="h-6 w-6 mr-2 text-primary/70" />}>主辦人：建立和管理活動</H2>
            <H3>建立活動</H3>
            <ol className="list-decimal pl-6">
              <li>在首頁選「聚餐餐廳」或「旅遊地點」</li>
              <li>填活動名稱、說明（例如預算、人數）、推薦截止日期、最後投票日期、每人幾票</li>
              <li>按「建立活動」，會拿到兩個連結：
                <ul className="list-disc pl-6 mt-2">
                  <li><strong>邀請連結</strong>：傳給大家，例如貼到 LINE 群組</li>
                  <li><strong>管理連結</strong>：只有你自己留著。換手機或電腦時用它打開，就是主辦人。請存在安全的地方，不要傳給別人</li>
                </ul>
              </li>
            </ol>

            <H3>主辦人工具</H3>
            <ol className="list-decimal pl-6">
              <li>打開活動後，點右上角的「<strong>主辦人</strong>」按鈕，就會展開主辦人工具</li>
              <li>可以修改活動（名稱、說明、日期、每人幾票）、刪除整個活動</li>
              <li>每張卡片上的 ⓘ 可以看這個選項是誰投的；也可以編輯、刪除任何推薦</li>
              <li>建立活動的那台手機或電腦本來就是主辦人，不用另外打開管理連結</li>
            </ol>

            <H3>兩個人一起主辦</H3>
            <p>把管理連結傳給另一位主辦人，他用連結打開後就有一樣的權限。收到連結的人如果再轉傳，拿到的人也會變成主辦人，所以只給信任的人。</p>

            <div className="bg-amber-50 p-4 border border-amber-200 rounded-md my-6">
              <h3 className="font-bold text-amber-800 flex items-center"><CalendarClock className="h-5 w-5 mr-2" />日期規則</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>推薦截止日期當天結束前（台灣時間）可以推薦，之後只有主辦人能新增</li>
                <li>最後投票日期當天結束前可以投票和取消投票，之後就是最後結果</li>
              </ul>
            </div>
          </section>

          {/* 參加的人 */}
          <section className="mb-12">
            <H2 icon={<Users className="h-6 w-6 mr-2 text-primary/70" />}>參加的人：推薦和投票</H2>

            <H3>登入</H3>
            <ol className="list-decimal pl-6">
              <li>點右上角「登入」，輸入名字就好，不用 email 或密碼</li>
              <li>請用<strong>主辦人認得出來的名字</strong>（例如本名或大家都知道的綽號），主辦人才知道是誰推薦、誰投票</li>
              <li>每次都用<strong>同一個名字</strong>：換了瀏覽器或手機，用同樣的名字登入就會認得你，投過的票、推薦的項目都在（英文名字不分大小寫）</li>
            </ol>

            <H3><Plus className="h-5 w-5 mr-2 text-green-600" />推薦餐廳或地點</H3>
            <ol className="list-decimal pl-6">
              <li>點「投票排名」下面的「推薦餐廳」（旅遊活動是「推薦地點」）</li>
              <li>填名稱、類型、價格或預算、地址或地點、距離或天數；網址、推薦程度、備註可以不填</li>
              <li>類型和天數下面有快捷按鈕，點一下就填好（例如吃到飽、火鍋、熱炒、夜市、兩天一夜）</li>
              <li>小技巧：在電腦上，空白欄位按 <kbd className="px-1 border rounded bg-white text-base">Tab</kbd> 會帶入灰色的範例文字，再自己修改</li>
            </ol>

            <H3><Vote className="h-5 w-5 mr-2 text-primary" />投票</H3>
            <ol className="list-decimal pl-6">
              <li>點卡片下方的「投票」；再點一次「已投票」就是取消</li>
              <li>每人幾票由主辦人設定，同一個選項只能投一票</li>
              <li>票數越多排名越前，同票數的並列同一名；上方的日期列會顯示目前有幾人投票</li>
              <li><strong>同一個活動裡，同一個名字就是同一個人</strong>：換了瀏覽器或手機，用同樣的名字登入，就能看到自己投過哪些、取消或繼續投；票數上限合併計算（英文名字不分大小寫）。如果真的是同名的不同人，請換一個能區分的名字（例如加上座號）</li>
            </ol>

            <H3><Edit className="h-5 w-5 mr-2 text-blue-600" />編輯、刪除自己的推薦</H3>
            <p>卡片右下角的鉛筆和垃圾桶，推薦的人本人和主辦人看得到。換了瀏覽器或手機也沒關係，<strong>用同樣的名字登入</strong>就能繼續編輯、刪除自己推薦的項目（英文名字不分大小寫）。</p>

            <H3><RefreshCw className="h-5 w-5 mr-2 text-amber-600" />照片</H3>
            <ul className="list-disc pl-6">
              <li>照片會依類型自動配：餐廳是美食照，旅遊地點是風景照（每種類型 10 張，同一個活動裡不會重複）</li>
              <li>不喜歡的話，點照片右上角的「換一張」（推薦的人和主辦人可以用）</li>
              <li>照片是依類型挑的示意圖，不是那家店或那個地方的實際照片</li>
            </ul>
          </section>

          {/* 常見問題 */}
          <section className="mb-12">
            <H2 icon={<HelpCircle className="h-6 w-6 mr-2 text-primary/70" />}>常見問題</H2>
            <div className="space-y-6">
              <QA q="為什麼我看不到編輯、刪除按鈕？">
                <p>推薦的人本人和主辦人可以編輯、刪除。如果你換了手機或瀏覽器，請用<strong>推薦時的同一個名字</strong>登入，就能看到按鈕（英文名字不分大小寫，前後空白也不影響）。</p>
              </QA>
              <QA q="投票後可以改嗎？">
                <p>投票截止前可以：點「已投票」取消，再投別的。</p>
              </QA>
              <QA q="主辦人忘記管理連結怎麼辦？">
                <p>建立活動的那台手機或電腦本來就是主辦人，用邀請連結打開就有主辦人工具。如果那台也不能用了，請到工具箱的許願池找網站管理員，可以幫你重新產生一組管理連結（舊的會失效）。</p>
              </QA>
              <QA q="換了一支手機，之前投的票還在嗎？">
                <p>在新手機用<strong>同樣的名字</strong>登入就好：投過的票、推薦的項目都會認得，可以繼續投票、取消、編輯。</p>
              </QA>
              <QA q="照片可以換成實際的照片嗎？">
                <p>目前不行，照片是依類型挑的示意圖。不喜歡可以按「換一張」。</p>
              </QA>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
            <p>想要新功能或遇到問題？到工具箱的 <a href="../wish/#new" className="text-primary underline">許願池</a> 告訴我們。</p>
            <p className="mt-2">最後更新：2026 年 10 月 23 日</p>
          </div>
        </div>
      </div>
    </div>
  );
}
