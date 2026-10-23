import Header from "@/components/Header";
import { ChevronLeft, BookOpen, Info, User, Users, ShieldCheck, Plus, Vote, Edit, Trash2, HelpCircle } from "lucide-react";
import { Link } from "wouter";

export default function UserManual() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
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
            <h1 className="text-3xl font-bold text-primary mb-2">餐廳推薦投票 操作手冊</h1>
            <div className="h-1 w-20 bg-primary/30 mx-auto mt-4"></div>
          </div>
          
          {/* 系統概述 */}
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold text-primary/90 mb-4">
              <Info className="h-6 w-6 mr-2 text-primary/70" />
              系統概述
            </h2>
            <p>「餐廳推薦投票」讓大家一起決定聚餐要去哪裡：主辦人建立活動、傳出邀請連結，參加的人推薦餐廳、投票，票數最高的就是大家最想去的餐廳。可以同時有很多檔活動，彼此的餐廳和票數互不影響。不需要註冊帳號。</p>

            <h3 className="text-xl font-bold mt-6 mb-2">建立活動（主辦人）</h3>
            <ol className="list-decimal pl-6">
              <li>在首頁填寫活動名稱、說明（例如預算、人數）、推薦截止日期、最後投票日期、每人幾票</li>
              <li>按「建立活動」後會拿到兩個連結：
                <ul className="list-disc pl-6 mt-2">
                  <li><strong>邀請連結</strong>：傳給大家，例如貼到 LINE 群組</li>
                  <li><strong>管理連結</strong>：只有你自己留著，換手機或電腦時用它打開，就能繼續管理活動</li>
                </ul>
              </li>
              <li>主辦人可以修改活動、刪除不適合的餐廳、查看每家餐廳是誰投的，也可以刪除整個活動</li>
            </ol>

            <div className="bg-amber-50 p-4 border border-amber-200 rounded-md my-6">
              <h3 className="font-bold text-amber-800">日期規則：</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>推薦截止日期當天結束前（台灣時間）可以推薦餐廳，之後只有主辦人能新增</li>
                <li>最後投票日期當天結束前可以投票和取消投票，之後就是最後結果</li>
              </ul>
            </div>
          </section>
          
          {/* 操作指南 */}
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold text-primary/90 mb-4">
              <BookOpen className="h-6 w-6 mr-2 text-primary/70" />
              操作指南
            </h2>
            
            <h3 className="text-xl font-bold mt-6 mb-2">登入系統</h3>
            <ol className="list-decimal pl-6">
              <li>點擊頁面右上角的「登入」按鈕</li>
              <li>在彈出的登入視窗中輸入用戶名</li>
              <li>網站管理員才需要打開「管理者模式」輸入 email 和密碼；主辦人用管理連結就好，不用打開</li>
              <li>點擊「登入」按鈕完成登入</li>
            </ol>
            
            <h3 className="text-xl font-bold mt-6 mb-2">瀏覽餐廳</h3>
            <ol className="list-decimal pl-6">
              <li>打開邀請連結，就能看到這個活動所有已推薦的餐廳</li>
              <li>餐廳按照投票數排名，票數最高的餐廳會顯示金色「冠軍」標識</li>
              <li>每家餐廳卡片顯示名稱、類型、價格、地址、距離等信息</li>
              <li>點擊餐廳地址可跳轉到 Google 地圖查看位置</li>
              <li>點擊餐廳網站連結可訪問餐廳官網</li>
            </ol>
            
            <h3 className="text-xl font-bold mt-6 mb-2 flex items-center">
              <Plus className="h-5 w-5 mr-2 text-green-600" />
              添加新餐廳
            </h3>
            <ol className="list-decimal pl-6">
              <li>點擊頁面上方的「推薦餐廳」按鈕</li>
              <li>在彈出的表單中填寫餐廳信息：
                <ul className="list-disc pl-6 mt-2">
                  <li>餐廳名稱（必填）</li>
                  <li>餐廳類型（必填）- 可從推薦類型中選擇或自行輸入</li>
                  <li>價格範圍（必填）</li>
                  <li>餐廳地址（必填）</li>
                  <li>距離資訊（必填）</li>
                  <li>推薦人（自動填入您的用戶名）</li>
                  <li>餐廳網址（選填）</li>
                  <li>評分（1-5分，可滑動選擇）</li>
                  <li>備註（選填）</li>
                </ul>
              </li>
              <li>填寫完成後點擊「儲存餐廳資訊」按鈕提交</li>
            </ol>
            
            <h3 className="text-xl font-bold mt-6 mb-2 flex items-center">
              <Vote className="h-5 w-5 mr-2 text-primary" />
              餐廳投票
            </h3>
            <ol className="list-decimal pl-6">
              <li>在每個餐廳卡片底部有投票按鈕</li>
              <li>點擊「投票」按鈕為該餐廳投票</li>
              <li>已投票的餐廳按鈕會變為「已投票」</li>
              <li>點擊「已投票」按鈕可取消投票</li>
              <li>每人可投的票數由主辦人設定（不可重複投給同一餐廳）</li>
            </ol>
            
            <h3 className="text-xl font-bold mt-6 mb-2 flex items-center">
              <Edit className="h-5 w-5 mr-2 text-blue-600" />
              編輯餐廳資訊
            </h3>
            <ol className="list-decimal pl-6">
              <li>在餐廳卡片的右下角找到「編輯」按鈕（只有推薦這家餐廳的人和主辦人看得到）</li>
              <li>點擊「編輯」按鈕打開編輯表單</li>
              <li>修改所需內容</li>
              <li>完成修改後點擊「儲存並更新餐廳」按鈕</li>
            </ol>
            
            <h3 className="text-xl font-bold mt-6 mb-2 flex items-center">
              <Trash2 className="h-5 w-5 mr-2 text-red-600" />
              刪除餐廳
            </h3>
            <ol className="list-decimal pl-6">
              <li>在餐廳卡片的右下角找到「刪除」按鈕（只有推薦這家餐廳的人和主辦人看得到）</li>
              <li>點擊「刪除」按鈕</li>
              <li>在確認對話框中點擊「確認」完成刪除</li>
            </ol>
            
            <h3 className="text-xl font-bold mt-6 mb-2">查看投票詳情 (主辦人功能)</h3>
            <ol className="list-decimal pl-6">
              <li>主辦人可在餐廳卡片右下角看到「查看投票詳情」按鈕（ⓘ）</li>
              <li>點擊後可查看該餐廳的投票者名單和投票總數</li>
            </ol>

          </section>
          
          {/* 注意事項 */}
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold text-primary/90 mb-4">
              <Info className="h-6 w-6 mr-2 text-primary/70" />
              注意事項
            </h2>
            <ol className="list-decimal pl-6">
              <li><strong>推薦權限</strong>：添加餐廳後，您將成為該餐廳的推薦人，之後只有您本人和主辦人可以編輯/刪除此餐廳</li>
              <li><strong>投票限制</strong>：每人可投的票數由主辦人設定，且不能重複投給同一餐廳</li>
              <li><strong>餐廳圖片</strong>：系統會根據餐廳類型自動選擇適合的圖片</li>
              <li><strong>響應式設計</strong>：網站適配各種設備，可在手機、平板和電腦上使用</li>
              <li><strong>餐廳排名</strong>：系統會自動計算每家餐廳的票數並進行排名，得票相同的餐廳顯示相同排名</li>
            </ol>
          </section>
          
          {/* 常見問題 */}
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold text-primary/90 mb-4">
              <HelpCircle className="h-6 w-6 mr-2 text-primary/70" />
              常見問題
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900">Q: 為什麼我看不到編輯/刪除按鈕？</h3>
                <p className="mt-2">A: 只有推薦這家餐廳的人和活動主辦人可以編輯/刪除餐廳。另外，同一個人換了手機或清除瀏覽器資料後，會被當成新的使用者。</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900">Q: 投票後可以更改嗎？</h3>
                <p className="mt-2">A: 投票截止前可以。點擊已投票餐廳下方的「已投票」按鈕可取消您的投票。</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900">Q: 可以搜索或過濾餐廳嗎？</h3>
                <p className="mt-2">A: 目前系統以投票數量為主要排序方式，未來版本可能添加搜索和過濾功能。</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900">Q: 餐廳圖片是如何選擇的？</h3>
                <p className="mt-2">A: 系統根據餐廳類型自動選擇相應的圖片。</p>
              </div>
            </div>
          </section>
          
          <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
            <p>如有任何使用問題或建議，請聯繫團隊負責人。</p>
            <p className="mt-2">最後更新時間：2026年10月15日</p>
          </div>
        </div>
      </div>
    </div>
  );
}