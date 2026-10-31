/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   多益 單元 4：財務與採購（原創例句，仿多益情境與難度）
   格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], null, null, 概念卡, 多益重點]
   ========================================================= */
const T4_WORDS = [
/* ---- 預算與報表 ---- */
["fiscal","adj.","財政的；會計年度的",[
 ["Our fiscal year begins on April 1.","我們的會計年度從四月一日開始。","fiscal year 是「會計年度」，和 calendar year（日曆年）相對；日期前面用 on。"],
 ["The company reported strong results for the third fiscal quarter.","公司公布了第三財季的亮眼成績。","report results 表示「公布業績」；fiscal quarter 是「財季」。"],
 ["The board approved the fiscal plan for next year.","董事會核准了明年的財務計畫。","approve 是及物動詞，後面直接接受詞。"]],
 null,null,"📅|會計年度","常見搭配：fiscal year（會計年度）、fiscal quarter（財季）。fiscal 是形容詞，Part 5 常考「the ___ year」要選形容詞。"],
["profitable","adj.","有利潤的；賺錢的",[
 ["The new product line has proven highly profitable.","新產品線證明非常賺錢。","prove + 形容詞 表示「證明是……」；highly 是副詞，修飾形容詞 profitable。"],
 ["The branch became profitable in its second year.","這家分店在第二年開始獲利。","become + 形容詞；its 是所有格，指分店的。"],
 ["We are looking for more profitable ways to use our warehouse space.","我們在找更有效益的倉庫空間利用方式。","more profitable 是比較級；ways to V 表示「做……的方法」。"]],
 null,null,"💹|賺錢","詞性家族：profit（n./v. 利潤）→ profitable（adj.）→ profitably（adv.）→ profitability（n. 獲利能力）。highly profitable 是常見搭配。"],
["deficit","n.","赤字；虧損",[
 ["The department ran a deficit of $20,000 last year.","這個部門去年出現兩萬美元的赤字。","run a deficit 表示「出現赤字」，ran 是 run 的過去式。"],
 ["Cutting travel costs helped reduce the deficit.","刪減差旅費幫助減少了赤字。","動名詞 Cutting travel costs 當主詞；help + 原形動詞。"],
 ["The city is facing a budget deficit for the second year in a row.","市政府連續第二年面臨預算赤字。","in a row 表示「連續」。"]],
 null,null,"📉|赤字","反義字 surplus（盈餘）。常見搭配：budget deficit（預算赤字）、trade deficit（貿易逆差）、run a deficit。"],
["surplus","n.","盈餘；過剩",[
 ["The company ended the year with a surplus of $1.2 million.","公司年底有一百二十萬美元的盈餘。","end the year with ... 表示「以……結束這一年」。"],
 ["Surplus office furniture will be donated to local schools.","多餘的辦公家具會捐給當地學校。","surplus 也能當形容詞放在名詞前面；will be donated 是未來式被動。"],
 ["Thanks to strong sales, we have a budget surplus this quarter.","多虧銷售強勁，本季預算有盈餘。","thanks to + 名詞 表示「多虧」。"]],
 null,null,"💰|盈餘","surplus 可當名詞或形容詞（surplus stock 過剩庫存）。反義字 deficit；shortage 是「短缺」。"],
["audit","n./v.","稽核；查帳",[
 ["An external audit is conducted every December.","每年十二月都會進行外部稽核。","is conducted 是現在式被動，表示固定會發生的事。"],
 ["The tax office audited our records last spring.","稅務機關去年春天查了我們的帳。","audit 當動詞；last spring 用過去式。"],
 ["Please keep all receipts in case of an audit.","請保留所有收據以備查帳。","in case of + 名詞 表示「以防……」。"]],
 null,null,"🔍|稽核","常見搭配：conduct / carry out an audit（進行稽核）、internal / external audit（內部／外部稽核）。"],
["auditor","n.","稽核員；查帳員",[
 ["The auditors will arrive on Monday to review our accounts.","稽核員週一會來審查我們的帳目。","to review 是不定詞，表示目的。"],
 ["An independent auditor found no errors in the report.","一位獨立稽核員在報告中沒有發現錯誤。","find no errors 表示「沒找到錯誤」；independent 開頭是母音，冠詞用 an。"],
 ["Ms. Rao worked as an auditor before joining our finance team.","拉奧小姐加入財務團隊之前是稽核員。","before 當介係詞時後面接 V-ing：before joining。"]],
 null,null,"🕵️|稽核員","-or 字尾指人：audit（稽核）→ auditor（稽核員）。Part 5 常考人和事的區分：the auditor（人）vs. the audit（事）。"],
["accounting","n.","會計",[
 ["Please send all invoices to the accounting department.","請把所有發票送到會計部。","accounting department 是「會計部」，accounting 當形容詞用。"],
 ["She has ten years of experience in accounting.","她有十年的會計經驗。","experience in + 領域 表示「在……方面的經驗」。"],
 ["The company uses new accounting software to track expenses.","公司用新的會計軟體追蹤支出。","software 不可數，前面不加 a。"]],
 null,null,"🧮|會計","accounting（會計工作、會計部）vs. accountant（會計師，人）。常見：accounting department、accounting firm（會計事務所）。"],
["financial statement","n.","財務報表",[
 ["The financial statements must be submitted by the end of the month.","財務報表必須在月底前提交。","must be submitted 是助動詞加被動；by 表示期限。"],
 ["Investors carefully reviewed the company's financial statements.","投資人仔細檢視了公司的財務報表。","副詞 carefully 修飾動詞 reviewed。"],
 ["The annual financial statement shows a 12 percent rise in sales.","年度財務報表顯示銷售成長了 12%。","a 12 percent rise in + 項目 表示「某項目成長 12%」。"]],
 null,null,"📑|財報","財報三大表：balance sheet（資產負債表）、income statement（損益表）、cash flow statement（現金流量表）。"],
["balance sheet","n.","資產負債表",[
 ["The balance sheet lists the company's assets and liabilities.","資產負債表列出公司的資產和負債。","liabilities 是「負債」，和 assets（資產）相對。"],
 ["Our balance sheet is stronger than it was last year.","我們的資產負債表比去年更健全。","比較級 stronger than；it was 用過去式，因為比的是去年。"],
 ["Please attach the latest balance sheet to the loan application.","請在貸款申請書附上最新的資產負債表。","attach A to B 表示「把 A 附在 B 上」。"]],
 null,null,"⚖️|資產負債表","balance 有「餘額」的意思（account balance），balance sheet 是固定詞組，指資產負債表。"],
["projection","n.","預估；推算",[
 ["Sales projections for next year look promising.","明年的銷售預估看起來很樂觀。","look + 形容詞；promising 表示「有希望的」。"],
 ["Our projections are based on last year's figures.","我們的預估是根據去年的數字。","be based on 表示「根據」。"],
 ["Actual costs were 10 percent higher than the original projection.","實際成本比原先預估高了 10%。","10 percent higher than 表示「比……高 10%」。"]],
 null,null,"🔮|預估","project 當動詞是「預估」：Sales are projected to rise. 句型 be projected to V（預計……）是 Part 5 常考點。"],
["allocation","n.","分配；撥款",[
 ["The allocation of funds will be discussed at Friday's meeting.","資金分配會在週五的會議上討論。","the ___ of 中間要放名詞 allocation。"],
 ["Each department receives a budget allocation in January.","每個部門一月都會收到預算撥款。","Each + 單數名詞，動詞用單數 receives。"],
 ["The marketing team asked for a larger allocation for online ads.","行銷團隊要求增加網路廣告的撥款。","ask for 表示「要求」。"]],
 null,null,"🍰|分配","allocate（v. 分配）→ allocation（n.）。句型：allocate A to B / allocate A for B（把 A 分配給 B）。"],
["expenditure","n.","支出；經費",[
 ["Capital expenditure will increase by 15 percent next year.","資本支出明年將增加 15%。","increase by + 數字 表示「增加了多少」。"],
 ["The report shows all expenditures over $500.","報告列出所有超過 500 美元的支出。","over + 金額 表示「超過」。"],
 ["We need to reduce our expenditure on office supplies.","我們需要減少辦公用品的支出。","expenditure on + 事物 表示「花在……的支出」。"]],
 null,null,"💸|支出","expenditure on + 事物（花在……的支出）；比 expense 更正式。capital expenditure 是「資本支出」。"],
["spreadsheet","n.","試算表",[
 ["I entered all the figures into a spreadsheet.","我把所有數字輸入試算表。","enter A into B 表示「把 A 輸入 B」。"],
 ["Please update the spreadsheet before the meeting.","開會前請更新試算表。","祈使句以原形動詞 update 開頭。"],
 ["The spreadsheet automatically calculates the totals.","試算表會自動算出總額。","副詞 automatically 放在動詞前面修飾 calculates。"]],
 null,null,"📊|試算表","常見搭配：enter data into a spreadsheet、update a spreadsheet。Part 3、Part 4 的圖表題常出現試算表內容。"],
["earnings","n.","收益；盈餘",[
 ["The company's earnings rose sharply in the second quarter.","公司第二季的收益大幅上升。","rise sharply 表示「急遽上升」；rose 是 rise 的過去式。"],
 ["Earnings per share were higher than analysts had expected.","每股盈餘高於分析師的預期。","had expected 是過去完成式，表示比「高於」更早的預期。"],
 ["The CEO will discuss the quarterly earnings report on Thursday.","執行長週四會說明季度財報。","earnings report 是「財報」。"]],
 null,null,"🏦|收益","earnings 指公司收益時用複數，動詞也用複數。常見：earnings report（財報）、earnings per share（每股盈餘）。"],
["margin","n.","利潤率；差額",[
 ["Our profit margin improved after we changed suppliers.","換了供應商之後，我們的利潤率提高了。","after 引導時間子句，後面接完整句子。"],
 ["The proposal was approved by a narrow margin.","這個提案以些微差距通過。","by a narrow margin 表示「以些微差距」。"],
 ["Rising shipping costs have reduced our margins.","運費上漲壓縮了我們的利潤率。","Rising 是現在分詞當形容詞，表示「正在上漲的」。"]],
 null,null,"📏|利潤率","profit margin（利潤率）；by a wide / narrow margin（以大幅／些微差距）；margin 也指頁面的「邊界」。"],
["cost-effective","adj.","划算的；有成本效益的",[
 ["Buying paper in large amounts is more cost-effective for us.","大量購買紙張對我們比較划算。","動名詞片語當主詞，動詞用單數 is。"],
 ["Video conferencing is a cost-effective alternative to business trips.","視訊會議是出差的划算替代方案。","alternative to + 名詞 表示「……的替代方案」。"],
 ["We are looking for a cost-effective way to ship small orders.","我們在找寄送小訂單的划算方法。","a way to V 表示「做……的方法」。"]],
 null,null,"👍|划算","cost-effective 是形容詞，放 be 動詞後面或名詞前面。同義：economical、affordable；名詞 cost-effectiveness。"],
["overhead","n.","經常性開支（房租水電等）",[
 ["Moving to a smaller office will lower our overhead.","搬到小一點的辦公室會降低經常開支。","lower 在這裡是動詞「降低」。"],
 ["Overhead costs include rent, electricity, and insurance.","經常費用包括房租、電費和保險。","overhead 當形容詞修飾 costs。"],
 ["The company cut overhead by sharing space with a partner firm.","公司藉著和合作公司共用空間來減少經常開支。","by + V-ing 表示「藉由……」。"]],
 null,null,"🏢|經常開支","overhead 也可以當形容詞：overhead costs / expenses。另一個意思：overhead compartment（頭頂置物櫃）。"],
["asset","n.","資產；寶貴的人或物",[
 ["The company's total assets are worth $50 million.","公司的總資產價值五千萬美元。","be worth + 金額 表示「價值……」。"],
 ["Ms. Ortiz has been a great asset to our team.","歐提茲小姐一直是我們團隊的寶貴人才。","be an asset to + 團體 表示「對……很寶貴」。"],
 ["The firm sold some of its assets to pay off its debts.","那家公司賣掉部分資產來償還債務。","pay off 表示「還清」；to V 表示目的。"]],
 null,null,"💎|資產","asset 的反義字 liability（負債）。be an asset to + 團體 表示「對……是寶貴資產」，常用來稱讚員工。"],
["shareholder","n.","股東",[
 ["The annual shareholders' meeting will be held in May.","年度股東大會將在五月舉行。","shareholders' 是複數名詞的所有格。"],
 ["Shareholders will receive a dividend of $2 per share.","股東每股可領兩美元股利。","dividend 是「股利」；per share 表示「每股」。"],
 ["The CEO sent a letter to shareholders explaining the merger.","執行長寄信給股東說明合併案。","explaining 是現在分詞片語，修飾 a letter。"]],
 null,null,"🤝|股東","同義字 stockholder。shareholders' meeting（股東大會）；share 在這裡是「股份」。"],
["figure","n.","數字；數據",[
 ["Please double-check these sales figures before Friday.","請在週五前再確認一次這些銷售數字。","double-check 表示「再次確認」。"],
 ["The latest figures show a slight drop in demand.","最新數據顯示需求略微下降。","a drop in + 項目 表示「某項目下降」。"],
 ["Can you give me a rough figure for the cost?","可以給我成本的大概數字嗎？","rough figure 表示「大概的數字」。"]],
 null,null,"🔢|數字","figure 一字多義：數字（sales figures）、人物（public figure）、圖表（see Figure 2）；figure out 是「想出、弄懂」。"],
/* ---- 付款與帳單 ---- */
["payable","adj.","應付的；可支付的",[
 ["The invoice is payable within 30 days.","這張發票須在 30 天內付款。","within + 期間 表示「在……之內」。"],
 ["Please make the check payable to Green Office Supplies.","支票受款人請寫綠色辦公用品公司。","make A payable to B 表示「把 A 的受款人寫成 B」。"],
 ["Accounts payable are recorded at the end of each month.","應付帳款在每月底入帳。","are recorded 是現在式被動。"]],
 null,null,"🧾|應付","accounts payable（應付帳款）vs. accounts receivable（應收帳款）。make a check payable to + 受款人 是常考句型。"],
["receivable","adj./n.","應收的；應收帳款",[
 ["Accounts receivable increased because several clients paid late.","因為好幾個客戶晚付款，應收帳款增加了。","because 後面接完整子句。"],
 ["Mr. Huang manages receivables for the Asian region.","黃先生負責管理亞洲區的應收帳款。","receivables 當名詞，用複數。"],
 ["The total amount receivable is shown at the bottom of the page.","應收總額顯示在頁面最下方。","receivable 放在名詞後面修飾 amount。"]],
 null,null,"📥|應收","receive（收到）＋ -able。和 payable 是一組：公司要收的錢是 receivable，要付的錢是 payable。"],
["installment","n.","分期付款（的一期）",[
 ["You can pay for the printer in six monthly installments.","這台印表機可以分六個月分期付款。","pay in installments 表示「分期付款」。"],
 ["The first installment is due on March 1.","第一期款項三月一日到期。","be due on + 日期 表示「在某天到期」。"],
 ["We missed an installment because of a bank error.","因為銀行出錯，我們漏繳了一期。","because of + 名詞。"]],
 null,null,"🗓️|分期","pay in installments（分期付款）；monthly installments（按月分期）。英式拼法 instalment 也會看到。"],
["billing","n.","開立帳單；請款",[
 ["Please contact our billing department if you have any questions.","如有疑問請洽我們的帳務部。","if 引導條件子句。"],
 ["The billing address must match the one on your credit card.","帳單地址必須和信用卡上的一致。","the one 代替前面的 address，避免重複。"],
 ["Billing errors should be reported within 14 days.","帳單錯誤應在 14 天內通報。","should be reported 是助動詞加被動。"]],
 null,null,"📬|帳務","bill（v. 開帳單）→ billing（n.）。常見：billing address（帳單地址）、billing department、billing cycle（帳單週期）。"],
["charge","v./n.","收費；費用",[
 ["The hotel charged us $30 for late checkout.","飯店因為延遲退房向我們收了 30 美元。","charge 人 + 金額 + for 事 表示「為某事向某人收費」。"],
 ["Delivery is free of charge for orders over $100.","訂單超過 100 美元就免運費。","free of charge 表示「免費」。"],
 ["Mr. Park is in charge of the purchasing team.","朴先生負責採購團隊。","in charge of 表示「負責」。"]],
 null,null,"💳|收費","常考：charge A for B（為 B 向 A 收費）、free of charge（免費）、in charge of（負責）、extra charge（額外費用）。"],
["debit","n./v.","借記；扣款",[
 ["The monthly fee will be debited from your account automatically.","月費會自動從你的帳戶扣款。","be debited from + 帳戶 表示「從……扣款」。"],
 ["You can pay with a debit card or cash.","你可以用簽帳金融卡或現金付款。","pay with + 付款工具。"],
 ["The bank statement shows two debits for the same purchase.","銀行對帳單上同一筆消費出現兩次扣款。","debit 當可數名詞，指一筆扣款。"]],
 null,null,"➖|扣款","debit（扣款）vs. credit（入帳）。debit card 是直接扣存款的簽帳金融卡；credit card 是信用卡。"],
["remit","v.","匯款；付款",[
 ["Please remit payment within 15 days of receiving this invoice.","請在收到本發票後 15 天內付款。","within ... of + V-ing 表示「在……之後多久內」。"],
 ["The full amount was remitted to the supplier yesterday.","全額昨天已匯給供應商。","remit A to B 的被動：A was remitted to B。"],
 ["Customers can remit funds by bank transfer or check.","客戶可以用銀行轉帳或支票付款。","by + 方式，中間不加冠詞。"]],
 null,null,"📤|匯款","remit 是正式用語，常出現在帳單上：Please remit payment by ...。名詞 remittance（匯款）。"],
["wire transfer","n.","電匯",[
 ["We will send the deposit by wire transfer this afternoon.","我們今天下午會用電匯付訂金。","by wire transfer 表示「以電匯方式」。"],
 ["Wire transfers usually take one to three business days.","電匯通常需要一到三個工作天。","business day 是「工作天」。"],
 ["Please include the invoice number when making a wire transfer.","電匯時請附上發票號碼。","when + V-ing 是 when you make 的省略。"]],
 null,null,"🌐|電匯","by wire transfer / bank transfer（以電匯／銀行轉帳）；make a wire transfer（電匯）。business day 是工作天。"],
["bookkeeping","n.","記帳；簿記",[
 ["Ms. Ali handles the bookkeeping for several small shops.","阿里小姐幫好幾家小店記帳。","handle 表示「處理、負責」。"],
 ["Good bookkeeping makes tax season much easier.","帳記得好，報稅季就輕鬆多了。","make + 受詞 + 形容詞；much 修飾比較級 easier。"],
 ["The company switched to online bookkeeping software last year.","公司去年改用線上記帳軟體。","switch to 表示「改用」。"]],
 null,null,"📒|記帳","bookkeeper（記帳員）→ bookkeeping（記帳）。bookkeeping 是記錄日常帳目；accounting 範圍更大，還包括分析和報表。"],
["discrepancy","n.","不一致；差異",[
 ["There is a discrepancy between the invoice and the purchase order.","發票和訂購單之間有出入。","between A and B 表示「A 和 B 之間」。"],
 ["The auditor noticed a small discrepancy in the figures.","稽核員注意到數字有小差異。","discrepancy in + 事物。"],
 ["Please report any discrepancies to the accounting team immediately.","有任何不符之處請立即通報會計團隊。","any + 複數名詞 表示「任何」。"]],
 null,null,"❓|不一致","discrepancy between A and B / discrepancy in + 事物。同義字 inconsistency、difference。對帳情境的常見字。"],
["itemized","adj.","逐項列出的",[
 ["Please send us an itemized bill for the repairs.","請寄給我們修理費用的逐項帳單。","itemized 開頭是母音，冠詞用 an。"],
 ["The itemized receipt shows each meal separately.","明細收據分別列出每一餐。","separately 是副詞，表示「分別地」。"],
 ["Expense claims must include an itemized list of costs.","費用申請必須附上逐項費用清單。","must + 原形動詞 include。"]],
 null,null,"📝|明細","item（品項）→ itemize（v. 逐項列出）→ itemized（adj.）。itemized bill / receipt / list 是報帳常見搭配。"],
["due","adj.","到期的；預定的",[
 ["The rent is due on the first day of each month.","房租每月一日到期。","be due on + 日期 表示「在某天到期」。"],
 ["The quarterly report is due next Monday.","季度報告下週一要交。","next Monday 前面不加介係詞。"],
 ["The shipment is due to arrive on Thursday.","貨預定星期四抵達。","be due to V 表示「預定……」。"]],
 null,null,"⏰|到期","be due（到期）、be due to V（預定……）、due to + 名詞（由於）。past due 是「逾期」，due date 是「到期日」。"],
["unpaid","adj.","未付的；無薪的",[
 ["Unpaid invoices will be charged a late fee.","未付的發票會被收取滯納金。","late fee 是「滯納金」。"],
 ["The customer still has an unpaid balance of $350.","這位顧客還有 350 美元尚未付清。","balance 在這裡是「餘額」。"],
 ["Mr. Cruz took two weeks of unpaid leave.","克魯茲先生請了兩週無薪假。","take leave 表示「請假」。"]],
 null,null,"🚫|未付","同義字 outstanding、overdue（逾期）。unpaid leave（無薪假）vs. paid leave（有薪假）。"],
["prepaid","adj.","預付的",[
 ["The package was sent with a prepaid shipping label.","包裹是用預付運費的標籤寄出的。","shipping label 是「運送標籤」。"],
 ["All prepaid orders will be shipped within two days.","所有預付訂單兩天內出貨。","will be shipped 是未來式被動。"],
 ["The return envelope is prepaid, so you don't need a stamp.","回郵信封已付郵資，不用貼郵票。","so 連接結果。"]],
 null,null,"✅|預付","pre-（事先）+ paid。prepaid 也可以說 paid in advance。常見：prepaid card（儲值卡）、postage prepaid（郵資已付）。"],
["cash flow","n.","現金流",[
 ["Late payments from clients have hurt our cash flow.","客戶延遲付款傷害了我們的現金流。","have hurt 是現在完成式，表示影響延續到現在。"],
 ["Small businesses must manage their cash flow carefully.","小企業必須謹慎管理現金流。","副詞 carefully 修飾動詞 manage。"],
 ["Improving cash flow is our top priority this year.","改善現金流是我們今年的首要任務。","動名詞當主詞，動詞用單數 is。"]],
 null,null,"🌊|現金流","cash flow 不可數。positive / negative cash flow（正／負現金流）；cash flow problems 常出現在 Part 7 文章。"],
["overcharge","v.","多收費",[
 ["I think the restaurant overcharged us for the drinks.","我覺得餐廳的飲料多收了我們錢。","overcharge 人 for 物。"],
 ["Customers who were overcharged will receive a refund.","被多收費的顧客會獲得退款。","who were overcharged 是關係子句加被動。"],
 ["The supplier apologized for overcharging us last month.","供應商為上個月多收費道歉。","apologize for + V-ing。"]],
 null,null,"➕|多收費","over-（過度）+ charge。反義字 undercharge（少收）。overcharge A for B 是常見句型。"],
["waive","v.","免除；放棄（權利）",[
 ["The bank agreed to waive the annual fee.","銀行同意免收年費。","agree to + 原形動詞。"],
 ["The late fee will be waived if you pay by Friday.","如果週五前付款，滯納金就免收。","if 子句用現在式表示未來。"],
 ["The tenant waived the right to cancel the lease early.","承租人放棄了提前解約的權利。","waive the right to V 表示「放棄做……的權利」。"]],
 null,null,"🙅|免收","waive a fee（免收費用）；名詞 waiver（棄權書、免除）。waive 發音和 wave（揮手）相同，聽力要小心。"],
["partial","adj.","部分的",[
 ["The client made a partial payment of $500.","客戶付了 500 美元的部分款項。","make a payment 表示「付款」。"],
 ["We received only a partial shipment because some items were out of stock.","因為有些品項缺貨，我們只收到部分貨品。","out of stock 表示「缺貨」。"],
 ["Partial refunds are available for unused services.","未使用的服務可以部分退款。","available for 表示「可適用於」。"]],
 null,null,"🌓|部分","partial payment / refund / shipment（部分付款／退款／出貨）；副詞 partially（部分地）；反義 full。"],
["down payment","n.","頭期款；訂金",[
 ["We made a down payment of 20 percent on the new delivery van.","我們為新的送貨車付了兩成頭期款。","make a down payment on + 物品。"],
 ["A down payment is required to reserve the venue.","預訂場地需要先付訂金。","be required to V 表示「需要……」；這裡的 to V 表示目的。"],
 ["The remaining balance must be paid within 30 days of the down payment.","尾款必須在付頭期款後 30 天內付清。","remaining balance 是「剩下的餘額、尾款」。"]],
 null,null,"🏠|頭期款","make a down payment on + 物品（為……付頭期款）；付完頭期款剩下的錢叫 balance（尾款）。同義 deposit。"],
["subtotal","n.","小計",[
 ["The subtotal does not include tax or shipping.","小計不含稅和運費。","does not include 是現在式否定。"],
 ["Please check the subtotal before you place the order.","下單前請確認小計。","place an order 表示「下單」。"],
 ["A 10 percent discount is applied to the subtotal.","10% 的折扣是從小計計算。","apply A to B 的被動：A is applied to B。"]],
 null,null,"🧾|小計","帳單三層：subtotal（小計）→ tax / shipping（稅、運費）→ total（總計）。Part 7 圖表題常要你比對這些數字。"],
/* ---- 採購與供應商 ---- */
["purchase order","n.","訂購單（PO）",[
 ["Please write the purchase order number on every invoice.","請在每張發票上寫上訂購單號碼。","祈使句以原形動詞 write 開頭。"],
 ["The purchase order was approved by the finance manager.","訂購單已由財務經理核准。","was approved by 是過去式被動。"],
 ["We cannot ship the goods until we receive a signed purchase order.","收到簽好的訂購單之前，我們不能出貨。","not A until B 表示「直到 B 才 A」。"]],
 null,null,"📋|訂購單","常縮寫成 PO；issue a purchase order（開立訂購單）、PO number。not A until B 表示「直到 B 才 A」。"],
["procurement","n.","採購",[
 ["The procurement team compares at least three suppliers for each order.","採購團隊每筆訂單至少比較三家供應商。","at least 表示「至少」。"],
 ["Ms. Lin is responsible for the procurement of raw materials.","林小姐負責原料採購。","be responsible for 表示「負責」。"],
 ["The new procurement policy aims to reduce costs.","新的採購政策旨在降低成本。","aim to V 表示「目標是……」。"]],
 null,null,"🛒|採購","procure（v. 取得、採購）→ procurement（n.）。procurement department / process / policy 都是常見搭配；同義 purchasing。"],
["supplier","n.","供應商",[
 ["We have worked with this supplier for over ten years.","我們和這家供應商合作十多年了。","for + 期間，用現在完成式。"],
 ["The supplier promised to deliver the parts by Monday.","供應商答應週一前交貨。","promise to V；by 表示期限。"],
 ["We are looking for a new supplier of packaging materials.","我們在找新的包材供應商。","supplier of + 產品。"]],
 null,null,"🏭|供應商","supply（v./n. 供應）→ supplier（供應商）。supplier of + 產品；supply A with B / supply B to A。"],
["vendor","n.","廠商；小販",[
 ["All vendors must register on our online system.","所有廠商都必須在我們的線上系統註冊。","register on + 系統。"],
 ["Street vendors sell snacks near the station.","街頭小販在車站附近賣小吃。","street vendor 是「街頭小販」。"],
 ["We chose the vendor that offered the best price.","我們選了報價最好的廠商。","that 引導關係子句，修飾 the vendor。"]],
 null,null,"🏪|廠商","vendor 和 supplier 意思接近，vendor 較常指賣方、承包廠商。approved vendor list（合格廠商名單）是常見詞。"],
["quotation","n.","報價單；報價",[
 ["Could you send us a quotation for 500 chairs?","能寄給我們 500 張椅子的報價單嗎？","quotation for + 品項。"],
 ["The quotation is valid for 30 days.","這份報價有效期 30 天。","valid for + 期間 表示「有效期……」。"],
 ["We received three quotations and chose the lowest one.","我們收到三份報價，選了最低的那份。","the lowest one 的 one 代替 quotation。"]],
 null,null,"💬|報價","quote（v. 報價；n. 報價，口語）→ quotation（較正式）。request a quotation（索取報價）、price quotation。"],
["bulk","n.","大量",[
 ["Buying paper in bulk saves us about 20 percent.","大量購買紙張讓我們省下約 20%。","in bulk 表示「大量地」。"],
 ["Bulk orders are shipped directly from the warehouse.","大宗訂單直接從倉庫出貨。","bulk 當形容詞，修飾 orders。"],
 ["We offer special prices for bulk purchases.","大量採購我們提供特別價格。","special prices for + 名詞。"]],
 null,null,"📦|大量","buy in bulk（大量購買）；bulk order / purchase / discount。the bulk of 表示「大部分」：the bulk of the budget。"],
["inventory","n.","庫存；存貨清單",[
 ["We take inventory at the end of every month.","我們每月底盤點庫存。","take inventory 表示「盤點」。"],
 ["Our inventory of printer ink is running low.","印表機墨水的庫存快用完了。","run low 表示「快不夠了」。"],
 ["The new software helps us track inventory in real time.","新軟體幫我們即時追蹤庫存。","in real time 表示「即時」。"]],
 null,null,"🗃️|庫存","take / do inventory（盤點）；inventory control（庫存控管）。stock 意思相近；run low 表示「快不夠」。"],
["stock","n./v.","存貨；備貨",[
 ["The item you ordered is currently out of stock.","您訂的商品目前缺貨。","you ordered 是省略 that 的關係子句。"],
 ["We keep extra paper in stock for busy periods.","我們備有額外的紙張應付忙碌時期。","in stock 表示「有存貨」。"],
 ["The store stocks a wide range of office furniture.","這家店備有各式各樣的辦公家具。","stock 當動詞，表示「備貨」；a wide range of 表示「各式各樣的」。"]],
 null,null,"🏷️|存貨","in stock（有貨）vs. out of stock（缺貨）；stock 當動詞是「備貨」。另一義是「股票」（stock market）。"],
["shipment","n.","貨物；運送",[
 ["The shipment arrived two days later than expected.","這批貨比預期晚了兩天到。","than expected 是常見的比較用法。"],
 ["Each shipment is inspected before it leaves the factory.","每批貨在離廠前都會檢查。","before 引導時間子句。"],
 ["We will notify you as soon as your shipment is ready.","您的貨一準備好，我們就通知您。","as soon as 子句用現在式表示未來。"]],
 null,null,"🚚|貨物","ship（v. 運送）→ shipment（n. 一批貨）→ shipping（運送作業、運費）。易混：shipment 可數，shipping 不可數。"],
["backorder","n./v.","延期交貨（缺貨待補）",[
 ["Your order is on backorder and will ship next week.","您的訂單在等補貨，下週會出貨。","on backorder 表示「缺貨待補」。"],
 ["The blue chairs have been backordered until June.","藍色椅子延期交貨到六月。","have been backordered 是現在完成式被動。"],
 ["We will contact you if any items are backordered.","如有品項需延期交貨，我們會通知您。","if 子句用現在式。"]],
 null,null,"⏳|待補貨","on backorder（缺貨待補，之後會出貨）常和 out of stock（目前缺貨）一起出現。也可以寫成 back order。"],
["requisition","n.","請購單；申請",[
 ["Please fill out a requisition form for new equipment.","新設備請填寫請購單。","fill out 表示「填寫」。"],
 ["Your requisition must be approved by your manager.","你的請購單必須經主管核准。","must be approved 是助動詞加被動。"],
 ["The purchasing team received 40 requisitions this week.","採購團隊本週收到 40 份請購單。","requisition 是可數名詞。"]],
 null,null,"🙋|請購","流程：requisition（內部請購）→ purchase order（對外訂購）→ invoice（廠商請款）。purchase requisition 是正式名稱。"],
["specification","n.","規格；說明",[
 ["The parts must meet the specifications listed in the contract.","零件必須符合合約上列出的規格。","listed in the contract 是過去分詞片語，修飾 specifications。"],
 ["Please send us the technical specifications for this model.","請寄給我們這款機型的技術規格。","specifications for + 產品。"],
 ["The supplier changed the design without checking our specifications.","供應商沒確認我們的規格就改了設計。","without + V-ing。"]],
 null,null,"📐|規格","常用複數 specifications，口語縮寫 specs。meet the specifications（符合規格）；動詞 specify（明確指定）。"],
["warehouse","n.","倉庫",[
 ["All orders are packed and shipped from our warehouse in Taoyuan.","所有訂單都從我們的桃園倉庫包裝出貨。","are packed and shipped 是兩個被動動詞並列。"],
 ["The warehouse is running out of space.","倉庫的空間快不夠了。","run out of 表示「用完」。"],
 ["Mr. Diaz supervises 30 workers at the warehouse.","迪亞茲先生在倉庫管理 30 名員工。","supervise 表示「監督、管理」。"]],
 null,null,"🏬|倉庫","warehouse 是 Part 1 照片題的常見場景（forklift 堆高機、shelves 貨架、boxes stacked 堆疊的箱子）。"],
["logistics","n.","物流；後勤安排",[
 ["A logistics company handles all our deliveries in Europe.","一家物流公司處理我們在歐洲的所有配送。","logistics 當形容詞修飾 company。"],
 ["Ms. Yu is in charge of the logistics for the trade show.","余小姐負責商展的後勤安排。","in charge of 表示「負責」。"],
 ["Poor logistics caused several late deliveries.","物流不佳造成好幾次延遲交貨。","Poor 表示「差勁的」。"]],
 null,null,"🚛|物流","logistics 字尾有 s，常當不可數；形容詞 logistical。除了物流，也指活動的「後勤安排」。"],
["merchandise","n.","商品；貨物",[
 ["All merchandise can be returned within 30 days.","所有商品都可以在 30 天內退貨。","merchandise 不可數，前面用 All 不用 Every。"],
 ["The store displays new merchandise near the entrance.","店家在入口附近陳列新商品。","display 表示「陳列」。"],
 ["Damaged merchandise should be reported to the supplier immediately.","受損商品應立即通報供應商。","should be reported 是助動詞加被動。"]],
 null,null,"🛍️|商品","merchandise 是不可數名詞：不能說 a merchandise 或 merchandises；要說 a piece of merchandise 或 items。同義 goods（複數）。"],
["distributor","n.","經銷商；批發商",[
 ["We are the official distributor of this brand in Taiwan.","我們是這個品牌在台灣的官方經銷商。","distributor of + 品牌。"],
 ["The distributor delivers to more than 300 stores.","這家經銷商配送到三百多家店。","more than 表示「超過」。"],
 ["Our products are sold through a network of local distributors.","我們的產品透過當地經銷商網絡銷售。","through 表示「透過」。"]],
 null,null,"🔀|經銷商","distribute（v. 分發、經銷）→ distribution（n.）→ distributor（n. 經銷商）。Part 5 常考人 vs. 事的詞性區分。"],
["freight","n.","貨運；運費",[
 ["The goods will be sent by air freight.","貨物會用空運寄出。","by air freight 表示「以空運」。"],
 ["Freight charges are included in the price.","運費已含在價格裡。","be included in 表示「包含在……裡」。"],
 ["The freight train carries containers to the port.","貨運列車把貨櫃運到港口。","freight 當形容詞修飾 train。"]],
 null,null,"🚢|貨運","freight 不可數。air / sea / ocean freight（空運／海運）；freight charges / costs（運費）。"],
["defective","adj.","有瑕疵的",[
 ["Defective items can be exchanged free of charge.","瑕疵品可以免費更換。","free of charge 表示「免費」。"],
 ["About 2 percent of the parts were found to be defective.","約 2% 的零件被發現有瑕疵。","be found to be + 形容詞 表示「被發現是……」。"],
 ["Please return the defective monitor in its original box.","請把有瑕疵的螢幕用原包裝寄回。","its 是所有格。"]],
 null,null,"⚠️|瑕疵","defect（n. 瑕疵）→ defective（adj.）。同義 faulty；damaged 多指運送中損壞。"],
["warranty","n.","保固",[
 ["The printer comes with a two-year warranty.","這台印表機附兩年保固。","come with 表示「附有」；two-year 當形容詞時 year 不加 s。"],
 ["Repairs are free while the product is under warranty.","產品在保固期內維修免費。","under warranty 表示「在保固期內」。"],
 ["Opening the case will void the warranty.","打開外殼會使保固失效。","void 當動詞，表示「使無效」。"]],
 null,null,"🛡️|保固","under warranty（在保固期內）；extend the warranty（延長保固）；同義 guarantee。"],
["expedite","v.","加快；迅速處理",[
 ["Could you expedite the shipment? We need the parts by Friday.","能加快出貨嗎？我們週五前需要零件。","Could you ...? 是禮貌的請求。"],
 ["Paying an extra fee will expedite the delivery process.","多付一筆費用可以加快送貨流程。","動名詞片語當主詞。"],
 ["To expedite your refund, please include your order number.","為了加快退款，請附上訂單號碼。","To V 放句首表示目的。"]],
 null,null,"⚡|加快","expedite 是正式說法的 speed up；expedited shipping（快速運送）。To expedite ..., please ... 是商業書信常見句型。"],
/* ---- 合約與談判 ---- */
["terms","n.","條款；條件",[
 ["Please read the terms and conditions carefully before signing.","簽名前請仔細閱讀條款與條件。","before + V-ing。"],
 ["Both companies agreed on the terms of the deal.","兩家公司就交易條件達成一致。","agree on + 事 表示「對……達成共識」。"],
 ["Our payment terms are 30 days from the invoice date.","我們的付款條件是發票日起 30 天。","payment terms 是「付款條件」。"]],
 null,null,"📜|條款","terms 表示「條款」時用複數：terms and conditions、payment terms、under the terms of the contract（根據合約條款）。in terms of 則是「就……而言」。"],
["clause","n.","條款（單一條文）",[
 ["The contract includes a clause about late delivery.","合約中有一條關於延遲交貨的條款。","clause about + 事。"],
 ["According to Clause 7, either party may end the agreement.","根據第七條，任何一方都可以終止協議。","according to 表示「根據」；either party 表示「任何一方」。"],
 ["Our lawyer asked us to remove the cancellation clause.","律師要我們刪除取消條款。","ask 人 to V。"]],
 null,null,"§|條款","clause 是合約裡的一條條文；terms 指整體條件。常見：penalty clause（罰則條款）、confidentiality clause（保密條款）。文法上 clause 也指「子句」。"],
["renew","v.","續約；更新",[
 ["We decided to renew the lease for another two years.","我們決定再續租兩年。","renew the lease 表示「續租」。"],
 ["Please renew your membership before it expires.","請在到期前續會員。","before 子句用現在式。"],
 ["The contract will be renewed automatically unless either side objects.","除非任何一方反對，合約會自動續約。","unless 表示「除非」。"]],
 null,null,"🔄|續約","renew a contract / lease / subscription / membership（續約／續租／續訂）。易混：renovate 是「整修」。"],
["renewal","n.","續約；更新",[
 ["The contract is up for renewal in March.","這份合約三月要續約了。","be up for renewal 表示「即將續約」。"],
 ["Renewal fees must be paid by the end of the month.","續約費必須在月底前付清。","must be paid 是助動詞加被動。"],
 ["We sent the client a renewal notice two months in advance.","我們提前兩個月寄續約通知給客戶。","in advance 表示「提前」。"]],
 null,null,"♻️|續約","renew（v.）→ renewal（n.）。be up for renewal（即將續約）、renewal notice / fee / date。the ___ of 空格選 renewal。"],
["expiration","n.","到期；期滿",[
 ["Please check the expiration date on your credit card.","請確認你信用卡上的到期日。","expiration date 是「到期日」。"],
 ["The lease will be renegotiated before its expiration.","租約會在到期前重新協商。","its 指 the lease。"],
 ["Upon expiration, the contract cannot be extended.","合約一到期就不能再延長。","Upon + 名詞 表示「一……就」。"]],
 null,null,"⌛|到期","expire（v. 到期）→ expiration（n.）。expiration date 也叫 expiry date。upon expiration 是合約常見的正式說法。"],
["binding","adj.","有約束力的",[
 ["Once signed, this agreement is legally binding.","這份協議一旦簽署就具有法律約束力。","Once signed 是 Once it is signed 的省略。"],
 ["The offer is not binding until both parties sign.","雙方簽名前，這份報價不具約束力。","not ... until 表示「直到……才」。"],
 ["A verbal promise may not be binding in court.","口頭承諾在法庭上不一定有約束力。","may not 表示「可能不」。"]],
 null,null,"🔗|約束力","legally binding（具法律效力）；binding contract / agreement。動詞 bind（約束），be bound by（受……約束）。"],
["obligation","n.","義務；責任",[
 ["The supplier has an obligation to replace defective parts.","供應商有義務更換瑕疵零件。","obligation to V 表示「做……的義務」。"],
 ["There is no obligation to buy after the free trial.","免費試用後不需要購買。","no obligation 表示「沒有義務」。"],
 ["Both parties must meet their obligations under the contract.","雙方都必須履行合約上的義務。","meet obligations 表示「履行義務」。"]],
 null,null,"📌|義務","oblige（v.）→ obligation（n.）→ obligated（adj.）。be obligated to V；no obligation（無義務購買）是廣告常見字。"],
["provision","n.","規定；供應",[
 ["The contract contains a provision for early termination.","合約裡有提前終止的規定。","provision for + 事。"],
 ["Under the provisions of the agreement, prices are fixed for two years.","依照協議的規定，價格兩年不變。","under the provisions of 表示「依照……的規定」。"],
 ["The provision of meals is included in the conference fee.","研討會費用包含供餐。","the provision of 表示「……的提供」。"]],
 null,null,"📃|規定","provide（v.）→ provision（n.）。合約中指「條文規定」，也指「提供」。provided that 是「只要……」，見解題技巧 g2。"],
["amendment","n.","修正；修正案",[
 ["Both parties signed an amendment to the original contract.","雙方簽署了原合約的修正案。","amendment to + 文件。"],
 ["Any amendments must be made in writing.","任何修改都必須以書面進行。","in writing 表示「以書面」。"],
 ["The lawyer suggested a small amendment to Clause 4.","律師建議對第四條做小幅修正。","suggest + 名詞。"]],
 null,null,"✏️|修正","amend（v. 修訂）→ amendment（n.）。amendment to + 文件（介係詞用 to）；in writing（以書面）是合約常見片語。"],
["terminate","v.","終止",[
 ["Either party may terminate the agreement with 60 days' notice.","任何一方都可以提前 60 天通知終止協議。","60 days' notice 是複數名詞所有格。"],
 ["The contract was terminated because the supplier missed several deadlines.","因為供應商多次延誤期限，合約被終止了。","was terminated 是過去式被動。"],
 ["The company decided to terminate its partnership with the vendor.","公司決定終止和那家廠商的合作。","decide to V。"]],
 null,null,"🛑|終止","terminate → termination（n. 終止）。terminate a contract / agreement；with 30 days' notice（提前 30 天通知）的所有格寫法常考。"],
["breach","n./v.","違反；違約",[
 ["Late delivery is a breach of the contract.","延遲交貨構成違約。","breach of + 合約。"],
 ["The company was accused of breaching the agreement.","那家公司被指控違反協議。","be accused of + V-ing。"],
 ["A breach of confidentiality may result in termination.","違反保密規定可能導致合約終止。","result in 表示「導致」。"]],
 null,null,"💥|違約","breach of contract（違約）；in breach of（違反）。result in（導致）vs. result from（起因於）是常考易混片語。"],
["compliance","n.","遵守；合規",[
 ["All suppliers must be in full compliance with safety standards.","所有供應商都必須完全符合安全標準。","in compliance with 表示「遵守、符合」。"],
 ["The compliance team reviews every new contract.","合規團隊會審查每一份新合約。","every + 單數名詞。"],
 ["We hired a consultant to check our compliance with tax laws.","我們聘請顧問檢查是否遵守稅法。","compliance with + 規定。"]],
 null,null,"✔️|合規","comply with（v. 遵守）→ compliance（n.）→ compliant（adj.）。in full compliance with 和 in accordance with（依照）意思接近。"],
["counteroffer","n.","還價；反提案",[
 ["The buyer rejected our price and made a counteroffer.","買方拒絕了我們的價格，並提出還價。","make a counteroffer 表示「還價」。"],
 ["We are still waiting for their counteroffer.","我們還在等他們的還價。","wait for 表示「等待」。"],
 ["After two counteroffers, both sides finally reached a deal.","經過兩次還價，雙方終於成交。","reach a deal 表示「達成交易」。"]],
 null,null,"↩️|還價","counter-（相反、對應）+ offer。make / accept / reject a counteroffer。也可以寫成 counter-offer。"],
["concession","n.","讓步",[
 ["Both sides made concessions to reach an agreement.","雙方都做出讓步以達成協議。","make concessions 表示「讓步」。"],
 ["As a concession, the supplier offered free shipping.","作為讓步，供應商提供免運。","as a concession 表示「作為讓步」。"],
 ["The union refused to make any further concessions.","工會拒絕再做任何讓步。","refuse to V；further 表示「更進一步的」。"]],
 null,null,"🙇|讓步","concede（v. 讓步、承認）→ concession（n.）。make a concession（讓步）；concession stand 另一義是「小吃攤、販賣部」。"],
["bid","n./v.","投標；出價",[
 ["Five companies submitted bids for the construction project.","五家公司為這個工程案投標。","submit a bid for + 案子。"],
 ["Our bid was $10,000 lower than our competitor's.","我們的標價比競爭對手低一萬美元。","competitor's 後面省略了 bid。"],
 ["The firm plans to bid on the new airport contract.","那家公司打算投標新機場的合約。","bid on + 案子。"]],
 null,null,"🔨|投標","submit / win / lose a bid；bid for / on + 案子。動詞三態 bid–bid–bid。winning bid（得標價）。"],
["lease","n./v.","租約；租用",[
 ["We signed a five-year lease for the new office.","我們簽了新辦公室的五年租約。","five-year 當形容詞時 year 不加 s。"],
 ["The company leases its delivery trucks instead of buying them.","公司租用送貨卡車，而不是買下來。","lease 當動詞；instead of + V-ing。"],
 ["Our lease expires at the end of December.","我們的租約十二月底到期。","expire 表示「到期」，是不及物動詞。"]],
 null,null,"🔑|租約","sign / renew / break a lease（簽／續／提前解除租約）；lease 也能當動詞「租用」。landlord 是房東，tenant 是承租人。"],
["finalize","v.","敲定；定案",[
 ["We hope to finalize the contract by the end of the week.","我們希望在週末前敲定合約。","hope to V；by 表示期限。"],
 ["The details of the deal have not been finalized yet.","交易細節還沒定案。","have not been finalized 是現在完成式被動，常和 yet 搭配。"],
 ["Once the budget is finalized, we will place the order.","預算一確定，我們就下單。","Once 子句用現在式表示未來。"]],
 null,null,"🏁|定案","final（adj.）→ finalize（v.）。finalize a contract / deal / plan；常和 once、until 搭配考時態。"],
["liable","adj.","有（法律）責任的",[
 ["The seller is liable for any damage during shipping.","賣方要對運送期間的任何損壞負責。","be liable for + 事。"],
 ["The hotel is not liable for items left in the lobby.","飯店不對留在大廳的物品負責。","left in the lobby 是過去分詞片語，修飾 items。"],
 ["You may be held liable if the equipment is misused.","設備如果被不當使用，你可能要負責。","be held liable 表示「被認定要負責」。"]],
 null,null,"⚖️|負責","be liable for + 事（對……負責）；liability（n. 責任；負債）。和 responsible for 意思接近，但 liable 多指法律責任。"],
["stipulate","v.","規定；明訂",[
 ["The contract stipulates that payment must be made within 30 days.","合約明訂必須在 30 天內付款。","stipulate that + 子句。"],
 ["As stipulated in the agreement, the price includes installation.","依照協議規定，價格包含安裝。","As stipulated in 表示「如……所規定」。"],
 ["The lease stipulates a two-month deposit.","租約規定要付兩個月的押金。","two-month 當形容詞時 month 不加 s。"]],
 null,null,"📎|明訂","stipulate that + 子句；as stipulated in / by（如……所規定）。同義 specify、state，是合約題的正式動詞。"],
["signature","n.","簽名",[
 ["The contract requires the signatures of both directors.","這份合約需要兩位董事的簽名。","both + 複數名詞。"],
 ["Please add your signature at the bottom of page 3.","請在第三頁底部簽名。","at the bottom of 表示「在……的底部」。"],
 ["The documents were sent to the client for signature.","文件已送給客戶簽名。","for signature 表示「供簽署」。"]],
 null,null,"✍️|簽名","sign（v. 簽名）→ signature（n.）。sign 當名詞是「標誌」，不是「簽名」；要表示簽名用 signature，是常考的詞性陷阱。"]
];

const T4_GRAMMAR = [
{ id:"g1", title:"常考介係詞片語",
  intro:"多益很愛考「好幾個字組成的介係詞」，例如 due to、prior to、in accordance with。它們的用法和一般介係詞一樣：後面接名詞或 V-ing，不能接完整子句。先認得片語，再看語意選對的那個。",
  table:[["片語","意思","例子"],["due to / owing to","由於","due to a shortage of drivers"],["prior to","在……之前（= before）","prior to signing the contract"],["in accordance with","依照、符合","in accordance with the terms of the warranty"],["regarding / concerning","關於","questions regarding your invoice"],["as of","自……起（生效）","as of January 1"],["on behalf of","代表","sign on behalf of the company"],["in addition to","除了……還有","in addition to a discount"]],
  points:[
   "這些片語都是介係詞，後面接名詞或 V-ing：prior to signing、in addition to preparing。",
   "陷阱 1：prior to 和 in addition to 的 to 是介係詞，後面不能接原形動詞（✗ prior to sign）。",
   "陷阱 2：due to 後面接名詞；選項同時有 because 時，空格後面是名詞片語就選 due to 或 because of。",
   "as of + 日期 表示「從某天起」，常用在政策、價格生效：As of May 1, prices will increase.",
   "on behalf of + 人或公司（代表某人）；in accordance with + 規定、合約、政策（依照）。",
   "regarding 和 concerning、with regard to、in reference to 意思都是「關於」，常出現在 e-mail 開頭。",
   "in addition to（除了……還有，加法）和 instead of（而不是，替換）語意相反，要看前後文。"],
  ex:[
   ["The shipment was delayed due to a shortage of drivers.","因為司機短缺，出貨延誤了。","due to 後面接名詞片語。"],
   ["Please review the quotation prior to signing the purchase order.","簽訂購單之前請先看過報價。","prior to 後面接 V-ing。"],
   ["As of July 1, all invoices must include a PO number.","自七月一日起，所有發票都必須附上訂購單號碼。","as of + 日期 表示生效時間。"],
   ["Ms. Tan signed the contract on behalf of the company.","譚小姐代表公司簽署合約。","on behalf of + 公司。"],
   ["In addition to a bulk discount, the vendor offers free shipping.","除了大量折扣之外，廠商還提供免運。","In addition to 後面接名詞，主要子句是「還有」的內容。"]]},
{ id:"g2", title:"條件與讓步連接詞",
  intro:"合約和付款條件最常出現「只要……」「除非……」「雖然……」。這些連接詞後面都接完整子句；和它們意思接近的 despite、because of 是介係詞，後面只能接名詞。",
  table:[["連接詞（＋子句）","意思","相近的介係詞（＋名詞）"],["provided (that) / as long as","只要；前提是","—"],["unless","除非（= if ... not）","without"],["once","一旦","upon"],["even though / although","雖然、即使","despite / in spite of"],["because / since","因為","because of / due to"],["whereas","然而（對比兩件事）","unlike"]],
  points:[
   "先看空格後面：有主詞加動詞用連接詞，只有名詞片語用介係詞。",
   "條件和時間子句（if、unless、once、provided that、as long as）用現在式表示未來：Once the PO is approved, we will ship the goods.",
   "陷阱 1：unless 已經有「不」的意思，後面不再加 not（✗ unless the invoice is not paid）。",
   "陷阱 2：despite 後面不加 of（✗ despite of）；in spite of 才有 of。",
   "provided that 可以換成 providing that、as long as，都是「只要」；that 可以省略。",
   "whereas 用來對比兩件事（A 這樣，B 卻那樣），前面常有逗號。",
   "even though 是「雖然（事實）」，even if 是「即使（假設）」。"],
  ex:[
   ["We will offer a 10 percent discount provided that you order 500 units.","只要您訂 500 個，我們就提供九折。","provided that 後面接完整子句。"],
   ["Unless the invoice is paid by Friday, a late fee will be charged.","除非週五前付清發票，否則會收滯納金。","unless 後面不加 not，用現在式表示未來。"],
   ["Even though the price was high, we bought the machine.","雖然價格很高，我們還是買了這台機器。","even though + 子句。"],
   ["Despite the late delivery, the client renewed the contract.","儘管延遲交貨，客戶還是續約了。","Despite + 名詞片語。"],
   ["The Taipei office met its target, whereas the Tokyo office fell short.","台北辦公室達成目標，東京辦公室卻沒達到。","whereas 對比兩件事。"]]},
{ id:"g3", title:"數字與增減的表達",
  intro:"財務文章和圖表題到處是數字：增加多少、增加到多少、是幾倍、大約多少。介係詞一換，意思就不同，多益最愛在這裡設陷阱。",
  table:[["表達","意思","例子"],["increase / rise by + 數量","增加了（差額）","rose by 12 percent"],["increase / rise to + 數量","增加到（結果）","increased to $55,000"],["a rise / increase in + 項目","某項目的增加","a 20 percent rise in costs"],["a rise / increase of + 數量","增加的幅度","an increase of 5 percent"],["twice / three times as ... as","是……的兩倍／三倍","twice as large as"],["approximately / about / nearly","大約／將近","approximately three days"],["up to + 數量","最多可達","up to $500"]],
  points:[
   "by 表示差額（增加了多少），to 表示結果（變成多少）：from $40,000 to $55,000。",
   "名詞 rise / increase / drop 後面：in + 項目（a rise in sales）、of + 數量（a rise of 5 percent）。",
   "陷阱 1：rise 是不及物動詞（Prices rose.），raise 是及物動詞（raise prices）。",
   "陷阱 2：倍數句型是 twice as + 原級 + as，不用比較級；也可以說 three times more than。",
   "approximately、nearly、about 是副詞，修飾數字；approximate 是形容詞（an approximate cost）。",
   "up to 表示上限（最多），as of 表示日期起點，不要搞混。",
   "percent 前面接數字（20 percent），percentage 前面接形容詞（a large percentage）。"],
  ex:[
   ["Revenue rose by 12 percent last quarter.","上一季營收成長了 12%。","by 表示增加的幅度。"],
   ["Monthly sales increased from $40,000 to $55,000.","月銷售額從四萬美元增加到五萬五千美元。","from A to B 表示從多少變成多少。"],
   ["There has been a 15 percent increase in online orders.","網路訂單增加了 15%。","increase in + 項目。"],
   ["The new warehouse is twice as large as the old one.","新倉庫是舊倉庫的兩倍大。","twice as + 原級 + as。"],
   ["Employees can be reimbursed for up to $500 per month.","員工每月最多可報銷 500 美元。","up to 表示上限。"]]},
{ id:"g4", title:"Part 6 文意連貫與句子插入",
  intro:"Part 6 是短文填空，每篇 4 題，其中一題要選「放進空格最通順的句子」。這類題目光看空格那一句不夠，要看前後句：指代詞指誰、轉折詞的邏輯、時態是否一致。",
  table:[["線索","看什麼","例子"],["指代詞","this、these、such、they 前面要有對應的名詞","a payment of $450 → This amount ..."],["轉折詞","前後句是因果、對比、補充還是舉例","However（對比）、Therefore（因果）、In addition（補充）"],["時態","整段的時間背景：過去、現在或未來","Last week ... → we decided ..."],["定冠詞 the","the + 名詞 通常指前面提過的東西","an order → the order"],["語氣","客訴、道歉、通知各有固定句型","We apologize for ...、Please note that ..."]],
  points:[
   "先讀空格前一句和後一句，再看選項；不要只看空格那一句。",
   "句子插入題：選項裡的 this、these、it 一定要在前文找得到指的東西，找不到就刪掉。",
   "轉折詞四大類：因果（therefore、as a result）、對比（however、nevertheless）、補充（in addition、moreover）、舉例（for example）。",
   "陷阱 1：選項的句子本身文法沒問題，但和上下文無關，例如突然提到別的主題。",
   "陷阱 2：時態不一致。前文是上週的事，空格就用過去式；信末提到下個月的安排，就用未來式。",
   "however、therefore 是副詞，前面要用句號或分號，後面常加逗號。",
   "代名詞要單複數一致：兩個人（Ms. Kwan and Mr. Sato）後面要用 they。"],
  ex:[
   ["We have received your payment of $450. This amount has been applied to invoice #2291.","我們已收到您 450 美元的付款。這筆款項已沖銷 2291 號發票。","This amount 指前一句的 payment of $450。"],
   ["The supplier raised its prices last month. As a result, we are looking for other vendors.","供應商上個月漲價了，因此我們正在找其他廠商。","As a result 表示因果。"],
   ["The audit found several errors. However, most of them were minor.","稽核發現了幾個錯誤。不過大部分都是小錯。","However 表示對比，前面用句號。"],
   ["Last week, we reviewed three quotations. After careful consideration, we decided to work with Delta Supplies.","上週我們審查了三份報價，經過仔細考慮，決定和德爾塔公司合作。","整段是過去的事，用過去式 decided。"],
   ["Thank you for your order. Unfortunately, the item you requested is on backorder.","感謝您的訂購。很遺憾，您要的商品目前在等補貨。","Unfortunately 帶出壞消息，是商業書信常見寫法。"]]}
];

const T4_QUIZ = [
 ["The shipment was delayed ___ a shortage of truck drivers.",["because","due to","although","whereas"],1,"空格後面是名詞片語 a shortage of truck drivers，要用介係詞片語 due to。because、although、whereas 都是連接詞，後面要接子句。","g1"],
 ["All expense reports must be submitted ___ the end of the fiscal year.",["prior to","in addition to","as of","on behalf of"],0,"語意是「在會計年度結束之前」交，prior to = before。","g1"],
 ["___ January 1, all invoices must include a purchase order number.",["Regarding","Prior","As of","In addition"],2,"as of + 日期 表示「自……起」，用在新規定生效。Prior 和 In addition 少了 to，不完整。","g1"],
 ["Ms. Tan signed the agreement ___ the company because the CEO was abroad.",["in accordance with","on behalf of","due to","regarding"],1,"執行長不在，所以譚小姐「代表」公司簽約：on behalf of。","g1"],
 ["Refunds will be issued ___ the terms of the warranty.",["on behalf of","as of","instead of","in accordance with"],3,"退款「依照」保固條款辦理：in accordance with + 規定、條款。","g1"],
 ["Please contact Mr. Ruiz if you have any questions ___ your invoice.",["regarding","prior to","as of","owing to"],0,"「關於」您的發票的問題：regarding = about。","g1"],
 ["___ a discount on bulk orders, the vendor offers free shipping.",["Due to","In addition to","Prior to","On behalf of"],1,"折扣之外「還有」免運，是加法關係：In addition to。","g1"],
 ["Please review the quotation carefully prior to ___ the purchase order.",["sign","signing","signed","be signed"],1,"prior to 的 to 是介係詞，後面接 V-ing：signing。原形動詞 sign 是常見陷阱。","g1"],
 ["In addition to ___ the annual budget, Mr. Cho manages the payroll team.",["prepare","prepares","prepared","preparing"],3,"in addition to 的 to 是介係詞，後面接動名詞 preparing。","g1"],
 ["The figures in this report are accurate ___ March 31.",["as of","in addition to","on behalf of","owing to"],0,"報告數字「截至」三月三十一日為止是正確的：as of + 日期。","g1"],
 ["We will offer a 10 percent discount ___ you order at least 500 units.",["despite","provided that","because of","whereas"],1,"空格後面是完整子句，而且語意是「只要您訂 500 個」：provided that。despite、because of 是介係詞，不能接子句。","g2"],
 ["___ the price was high, we bought the machine because of its quality.",["Despite","Even though","Unless","Because of"],1,"後面是完整子句（the price was high），語意是讓步「雖然」：Even though。Despite 是介係詞，後面要接名詞。","g2"],
 ["The contract will renew automatically ___ either party gives written notice.",["unless","as long as","once","whereas"],0,"「除非」有一方書面通知，否則自動續約：unless。as long as（只要）語意相反。","g2"],
 ["___ the late delivery, the client agreed to renew the contract.",["Although","Even though","Despite","Whereas"],2,"空格後面是名詞片語 the late delivery，要用介係詞 Despite。其他三個都是連接詞。","g2"],
 ["___ the purchase order is approved, the supplier will ship the goods.",["Despite","Because of","Unless","Once"],3,"「一旦」訂購單核准，供應商就出貨：Once。後面是子句，Despite、Because of 不行；Unless 語意不通。","g2"],
 ["Our Taipei office met its sales target, ___ the Tokyo office fell short by 5 percent.",["whereas","despite","unless","provided that"],0,"前後對比兩個辦公室的表現：whereas（然而）。","g2"],
 ["You may pay in installments as long as the first payment ___ by May 1.",["will receive","is received","receives","was receiving"],1,"as long as 是條件子句，用現在式表示未來；付款是「被收到」，用被動 is received。","g2"],
 ["The shipment was held at customs ___ a problem with the paperwork.",["even though","because","because of","whereas"],2,"空格後面是名詞片語 a problem with the paperwork，要用介係詞 because of。","g2"],
 ["Mr. Ito accepted the job offer ___ the salary was lower than he had expected.",["despite","in spite of","due to","even though"],3,"後面是完整子句，而且是讓步語氣：even though。despite、in spite of 後面要接名詞。","g2"],
 ["Unless the invoice ___ by Friday, a late fee will be charged.",["is paid","is not paid","will be paid","pays"],0,"unless 已經有「不」的意思，不再加 not；條件子句用現在式被動 is paid。","g2"],
 ["Revenue rose ___ 12 percent last quarter, reaching $3.4 million.",["by","to","at","of"],0,"rise by + 數量 表示「增加了多少」；增加到的結果是後面的 $3.4 million。","g3"],
 ["Our monthly sales increased from $40,000 ___ $55,000.",["by","to","for","at"],1,"from A to B 表示從多少「增加到」多少。","g3"],
 ["Analysts expect a sharp ___ in shipping costs next year.",["raise","risen","rise","rose"],2,"冠詞 a 和形容詞 sharp 後面要名詞；表示「上升」用 rise。raise 當名詞是「加薪」。","g3"],
 ["The new warehouse is twice as ___ as the old one.",["larger","largely","largest","large"],3,"倍數句型 twice as + 原級 + as：twice as large as，不用比較級。","g3"],
 ["The repair will take ___ three business days.",["approximate","approximately","approximation","approximated"],1,"修飾數字 three 要用副詞 approximately。approximate 是形容詞。","g3"],
 ["Employees can be reimbursed for ___ $500 in travel expenses per month.",["up to","as of","prior to","more"],0,"表示上限「最多 500 美元」：up to。","g3"],
 ["The company plans to ___ its prices by 5 percent in July.",["rise","raise","arise","rising"],1,"空格後面有受詞 its prices，要用及物動詞 raise。rise 是不及物動詞。","g3"],
 ["This year we received three times as many orders ___ last year.",["than","that","as","so"],2,"倍數句型 three times as many ... as，後面用 as，不用 than。","g3"],
 ["There has been a 15 percent increase ___ the number of online orders.",["in","of","to","by"],0,"名詞 increase 後面接項目用 in；of 後面接的是數量（an increase of 15 percent）。","g3"],
 ["Production costs have ___ doubled since 2020.",["near","nearby","nearest","nearly"],3,"修飾動詞 doubled 要用副詞 nearly（幾乎）。near 和 nearby 表示距離近。","g3"],
 ["Thank you for your order. ___, the item you requested is currently on backorder. We expect it to ship next week.",["Therefore","Unfortunately","In addition","For example"],1,"後面是壞消息（缺貨待補），用 Unfortunately 帶出。前文和後文沒有因果、補充或舉例的關係。","g4"],
 ["Our office will move to a new building on May 1. ___, all invoices should be sent to the new address after that date.",["However","For example","Therefore","Otherwise"],2,"因為搬家，所以發票要寄新地址，是因果關係：Therefore。","g4"],
 ["We have received your payment of $450. ___ amount has been applied to invoice #2291.",["This","These","Those","They"],0,"指前一句的 payment of $450，單數名詞 amount 前面用 This。These、Those 要接複數。","g4"],
 ["The supplier raised its prices by 15 percent last month. ___ We are now looking for other vendors.",["The warehouse will open on Monday.","Thank you for attending the seminar.","Our new logo was designed by Ms. Ray.","This increase has hurt our profit margins."],3,"句子插入題：This increase 指前一句的漲價，又能帶出「找別的廠商」，前後都接得上。其他選項和上下文無關。","g4"],
 ["Last week, our team reviewed three quotations. After careful consideration, we ___ to work with Delta Supplies.",["decide","have been deciding","decided","will decide"],2,"整段描述上週的事，時態要一致，用過去式 decided。","g4"],
 ["Several customers have complained about late deliveries. ___, we have hired two more drivers.",["In contrast","As a result","Nevertheless","For instance"],1,"因為有客訴，所以多請了司機，是因果關係：As a result。","g4"],
 ["Ms. Kwan and Mr. Sato reviewed the contract yesterday. ___ found two errors in Clause 5.",["She","He","They","It"],2,"指前面兩個人 Ms. Kwan and Mr. Sato，要用複數 They。","g4"],
 ["Dear Mr. Patel, Thank you for your quotation for 300 office chairs. ___ Could you offer a lower price for an order of this size?",["Our chairs were delivered last Friday.","We would like to place the order, but the price is above our budget.","We are sorry for the delay in shipping your chairs.","The meeting room is on the third floor."],1,"後一句要求降價，空格要說明理由：想下單但超出預算。A、C 是賣方的口吻，和寫信者（買方）身分不符。","g4"],
 ["Next month, the company ___ a new procurement system. All staff will receive training before the launch.",["will introduce","introduced","has introduced","was introducing"],0,"Next month 和後一句的 will receive 都表示未來，用 will introduce。","g4"],
 ["The audit found several discrepancies in the expense reports. ___, most of them were minor errors that were quickly corrected.",["Therefore","As a result","For this reason","However"],3,"前面說發現錯誤，後面說大多是小錯，是對比：However。其他三個都表示因果。","g4"]
];

/* ---------- 4 堂解題技巧課（安安老師・教練語氣） ---------- */
const T4_CLASS = {
g1:[
 {say:"大家好，我是安安。財務和採購的 e-mail、公告裡，到處都是 due to、prior to 這種「好幾個字的介係詞」。Part 5 很愛考，今天一次整理給你。", board:[["The shipment was delayed ___ a shortage of drivers.",["___"]],["(A) because (B) due to (C) although (D) whereas",["due to"]]]},
 {say:"先記住一件事：這些片語不管多長，本質上都是介係詞。所以後面接名詞或 V-ing，不能接完整子句。像 {due to a shortage} 可以，due to 加上一整個句子就不行。", board:[["due to + 名詞",["due to"]],["because + 子句",["because"]]]},
 {say:"這是今天的口訣。", chant:"片語再長也是介係詞，後面接名詞或 V-ing。"},
 {ask:{q:"The shipment was delayed ___ a shortage of drivers.", opts:["because","due to","although"], ans:1,
   ok:"正確。a shortage of drivers 是名詞片語，用 due to。", bad:{0:"because 是連接詞，後面要接主詞加動詞的子句。",2:"although 是連接詞，而且語意是「雖然」，也不對。"},
   again:{q:"The flight was canceled ___ bad weather.", opts:["because","owing to","although"], ans:1, exp:"bad weather 是名詞片語，用 owing to（= due to）。"}}},
 {say:"第一個大陷阱：prior to 和 in addition to 結尾的 to 是介係詞，不是不定詞。所以後面要接 V-ing，例如 {prior to signing}、{in addition to preparing}。", board:[["prior to signing the contract",["signing"]],["in addition to preparing the budget",["preparing"]]]},
 {ask:{q:"Please review the quotation prior to ___ the order.", opts:["sign","signing","signed"], ans:1,
   ok:"沒錯，prior to 的 to 是介係詞，接 signing。", bad:{0:"這裡的 to 是介係詞，後面不能接原形動詞。",2:"signed 是過去式或過去分詞，介係詞後面要接動名詞。"},
   again:{q:"In addition to ___ the budget, Mr. Cho manages payroll.", opts:["prepare","preparing","prepares"], ans:1, exp:"in addition to + V-ing。"}}},
 {say:"接下來看語意。{as of} 加日期，表示「從某天起」，新規定、新價格最常用。{on behalf of} 加人或公司，表示「代表」。{in accordance with} 加規定或合約，表示「依照」。", board:[["As of July 1, prices will increase.",["As of"]],["sign on behalf of the company",["on behalf of"]],["in accordance with the contract",["in accordance with"]]]},
 {ask:{q:"___ January 1, all invoices must include a PO number.", opts:["As of","On behalf of","In addition to"], ans:0,
   ok:"對，as of 加日期表示從那天開始生效。", bad:{1:"on behalf of 是「代表」，後面要接人或公司。",2:"in addition to 是「除了……還有」，和日期搭不起來。"},
   again:{q:"Ms. Tan signed the contract ___ the company.", opts:["as of","on behalf of","prior to"], ans:1, exp:"代表公司簽約：on behalf of。"}}},
 {say:"還有一組「關於」：{regarding}、concerning、with regard to，常出現在 e-mail 的主旨或第一句，例如 {questions regarding your invoice}。", board:[["questions regarding your invoice",["regarding"]],["= concerning / with regard to",[]]]},
 {say:"最後提醒：in addition to 是加法，「除了 A 還有 B」；instead of 是替換，「不要 A 改成 B」。選項同時出現時，看前後是一起有，還是二選一。", board:[["In addition to a discount, we offer free shipping.",["In addition to"]],["Instead of a discount, we offer free shipping.",["Instead of"]]]},
 {ask:{say:"最後一題。", q:"___ a bulk discount, the vendor also offers free shipping.", opts:["Instead of","In addition to","Due to"], ans:1,
   ok:"很好。句子裡有 also，表示兩個都有，用 In addition to。", bad:{0:"instead of 是「而不是」，但句子有 also，表示兩個都提供。",2:"due to 是「由於」，折扣不是免運的原因。"},
   again:{q:"Refunds are issued ___ the terms of the warranty.", opts:["in accordance with","on behalf of","as of"], ans:0, exp:"依照保固條款：in accordance with。"}}},
 {say:"介係詞片語重點整理：再長的片語都是介係詞，後面接名詞或 V-ing；prior to、in addition to 的 to 後面接 V-ing；as of 加日期、on behalf of 加人、in accordance with 加規定；in addition to 是加法，instead of 是替換。", end:true}
],
g2:[
 {say:"談合約、談付款，一定會出現「只要……就」、「除非……」、「雖然……」。今天教你這些條件和讓步的連接詞，以及怎麼和長得像的介係詞分開。", board:[["provided that / as long as / unless / once",["provided that","unless"]],["even though / whereas ↔ despite / because of",["even though","despite"]]]},
 {say:"判斷方法和上一堂一樣，先看空格後面：有主詞加動詞，就選連接詞；只有名詞片語，就選介係詞。", board:[["Even though the price was high, ...",["Even though","the price was high"]],["Despite the high price, ...",["Despite","the high price"]]]},
 {say:"一起唸一次。", chant:"後面有主詞加動詞用連接詞，只有名詞用介係詞。"},
 {ask:{q:"___ the late delivery, the client renewed the contract.", opts:["Although","Despite","Even though"], ans:1,
   ok:"正確。the late delivery 是名詞片語，用介係詞 Despite。", bad:{0:"Although 是連接詞，後面要接子句。",2:"Even though 也是連接詞，後面要接子句。"},
   again:{q:"___ the price was high, we bought the machine.", opts:["Despite","Even though","Because of"], ans:1, exp:"後面是子句，用連接詞 Even though。"}}},
 {say:"再來是條件。{provided that} 和 {as long as} 都是「只要」，{unless} 是「除非」，等於 if ... not。once 是「一旦」。合約裡超常見，例如 {The contract renews automatically unless either party objects.}", board:[["We offer a discount provided that you order 500 units.",["provided that"]],["The contract renews unless either party objects.",["unless"]]]},
 {ask:{q:"The contract renews automatically ___ either party gives notice.", opts:["unless","as long as","provided that"], ans:0,
   ok:"對。「除非」有人通知，否則自動續約，用 unless。", bad:{1:"as long as 是「只要」，變成「只要有人通知就續約」，語意相反。",2:"provided that 也是「只要」，語意相反。"},
   again:{q:"We will ship today ___ you pay by noon.", opts:["unless","provided that","despite"], ans:1, exp:"只要中午前付款就出貨：provided that。"}}},
 {say:"兩個陷阱。第一，條件子句用現在式表示未來，例如 {Once the PO is approved, we will ship.}。第二，unless 已經有「不」的意思，後面不要再加 not。", board:[["Once the PO is approved, we will ship.",["is approved"]],["Unless the invoice is paid, ... ✓",["is paid"]],["Unless the invoice is not paid ✗",["not"]]]},
 {ask:{q:"Unless the invoice ___ by Friday, a late fee will be charged.", opts:["is paid","is not paid","will be paid"], ans:0,
   ok:"很好。unless 後面不加 not，而且用現在式。", bad:{1:"unless 已經是「如果不」，再加 not 就變成雙重否定，語意顛倒。",2:"條件子句用現在式表示未來，不用 will。"},
   again:{q:"Once the budget ___, we will place the order.", opts:["is finalized","will be finalized","finalizes"], ans:0, exp:"Once 子句用現在式；預算是被敲定的，用被動。"}}},
 {say:"最後一個：{whereas} 用來對比兩件事，「A 這樣，B 卻那樣」，例如 {Taipei met its target, whereas Tokyo fell short.}。它和 although 不一樣，although 是讓步，whereas 是兩邊並排比較。", board:[["Taipei met its target, whereas Tokyo fell short.",["whereas"]]]},
 {ask:{say:"最後一題。", q:"Sales rose in Asia, ___ they fell in Europe.", opts:["whereas","despite","provided that"], ans:0,
   ok:"正確。亞洲上升、歐洲下降，兩邊對比，用 whereas。", bad:{1:"despite 是介係詞，後面不能接子句。",2:"provided that 是「只要」，和對比的語意不合。"},
   again:{q:"The shipment was delayed ___ a problem at the port.", opts:["because","because of","even though"], ans:1, exp:"後面是名詞片語，用 because of。"}}},
 {say:"條件與讓步重點整理：子句用連接詞，名詞用介係詞；provided that、as long as 是只要，unless 是除非，後面不加 not；條件子句用現在式表示未來；despite 不加 of；whereas 用來對比兩件事。", end:true}
],
g3:[
 {say:"財報、營業額、成本，多益處處是數字。今天教你數字題的三個重點：by 和 to、in 和 of，還有倍數。", board:[["Revenue rose by 12 percent.",["by"]],["Sales increased to $55,000.",["to"]]]},
 {say:"by 表示差額，也就是「增加了多少」；to 表示結果，「增加到多少」。所以 {from $40,000 to $55,000} 是從四萬變成五萬五，也可以說 {increased by $15,000}。", board:[["from $40,000 to $55,000",["to"]],["increased by $15,000",["by"]]]},
 {say:"記一下。", chant:"by 是差多少，to 是變多少。"},
 {ask:{q:"Monthly sales increased from $40,000 ___ $55,000.", opts:["by","to","at"], ans:1,
   ok:"對，from A to B，結果是五萬五千元。", bad:{0:"by 表示增加了多少，五萬五千元是增加後的結果，要用 to。",2:"at 不能表示數字的變化。"},
   again:{q:"Revenue rose ___ 12 percent last quarter.", opts:["by","to","in"], ans:0, exp:"增加了 12%，表示差額，用 by。"}}},
 {say:"名詞的 rise、increase、drop 後面也要注意：接項目用 in，接數量用 of。{a rise in costs} 是成本上升，{a rise of 5 percent} 是上升 5%。", board:[["a 20 percent rise in costs",["in"]],["an increase of 5 percent",["of"]]]},
 {ask:{q:"There has been a 15 percent increase ___ online orders.", opts:["of","in","by"], ans:1,
   ok:"正確。increase 後面接項目 online orders，用 in。", bad:{0:"of 後面接數量，例如 an increase of 15 percent。",2:"by 搭配動詞 increase，不接在名詞後面表示項目。"},
   again:{q:"Analysts predict an increase ___ 8 percent.", opts:["in","of","to"], ans:1, exp:"後面接數量，用 of。"}}},
 {say:"另一個超常考的陷阱：{rise} 是不及物動詞，後面不接受詞；{raise} 是及物動詞，要有受詞，例如 {raise prices}。", board:[["Prices rose.",["rose"]],["The company raised its prices.",["raised"]]]},
 {ask:{q:"The company plans to ___ its prices in July.", opts:["rise","raise","rising"], ans:1,
   ok:"沒錯，後面有受詞 its prices，用及物的 raise。", bad:{0:"rise 是不及物，後面不能接受詞。",2:"plan to 後面要接原形動詞。"},
   again:{q:"Shipping costs ___ sharply last year.", opts:["raised","rose","raising"], ans:1, exp:"後面沒有受詞，用不及物的 rise，過去式 rose。"}}},
 {say:"倍數用 {twice as large as}、{three times as many as}，中間放原級，不放比較級。表示大約用副詞 approximately、nearly；表示上限用 {up to}，例如報銷最多 500 美元。", board:[["twice as large as",["twice as","as"]],["approximately three days",["approximately"]],["up to $500",["up to"]]]},
 {ask:{say:"最後一題。", q:"The new warehouse is twice as ___ as the old one.", opts:["larger","large","largest"], ans:1,
   ok:"很好。倍數句型中間用原級 large。", bad:{0:"twice as ... as 中間要用原級，不用比較級。",2:"最高級 largest 不能放在 as ... as 中間。"},
   again:{q:"The repair will take ___ three days.", opts:["approximate","approximately","approximation"], ans:1, exp:"修飾數字用副詞 approximately。"}}},
 {say:"數字題重點整理：by 是差多少，to 是變多少；rise in 接項目，rise of 接數量；rise 不及物，raise 及物；倍數用 as 原級 as；approximately 是副詞；up to 表示上限。", end:true}
],
g4:[
 {say:"這堂課換到 Part 6。Part 6 是短文填空，每篇四題，其中一題要你選一整個句子放進空格。很多人只看空格那一句，結果四個選項看起來都對。今天教你看「上下文」。", board:[["前一句 → ___ → 後一句",["___"]]]},
 {say:"今天的口訣。", chant:"看前看後，指代、轉折、時態三件事。"},
 {say:"第一個線索：指代詞。this、these、such、they 一定要在前面找得到它指的東西。例如前一句說 {your payment of $450}，下一句就可以說 {This amount has been applied.}", board:[["We received your payment of $450.",["payment of $450"]],["This amount has been applied to invoice #2291.",["This amount"]]]},
 {ask:{q:"We received your payment of $450. ___ amount has been applied to your account.", opts:["This","These","They"], ans:0,
   ok:"正確。指前一句那筆付款，單數名詞 amount 前面用 This。", bad:{1:"These 要接複數名詞，amount 是單數。",2:"They 是代名詞，後面不能再接名詞 amount。"},
   again:{q:"Ms. Kwan and Mr. Sato reviewed the contract. ___ found two errors.", opts:["She","They","It"], ans:1, exp:"兩個人，用 They。"}}},
 {say:"第二個線索：轉折詞。四大類：因果用 {Therefore}、As a result；對比用 {However}、Nevertheless；補充用 In addition；舉例用 For example。先判斷前後句是什麼關係，再選詞。", board:[["因果：Therefore / As a result",["Therefore"]],["對比：However / Nevertheless",["However"]],["補充：In addition / Moreover",["In addition"]],["舉例：For example",["For example"]]]},
 {ask:{q:"Our office will move on May 1. ___, invoices should be sent to the new address.", opts:["However","Therefore","For example"], ans:1,
   ok:"對。因為搬家，所以要寄新地址，是因果關係。", bad:{0:"However 表示對比，但前後句沒有相反的意思。",2:"後一句不是前一句的例子。"},
   again:{q:"The audit found several errors. ___, most of them were minor.", opts:["Therefore","However","In addition"], ans:1, exp:"發現錯誤，但大多是小錯，是對比。"}}},
 {say:"第三個線索：時態一致。前文說 last week，後面的動作也是過去；信件最後說 next month，就用未來式。選項只差時態時，回頭找整段的時間背景。", board:[["Last week, we reviewed three quotations. ... we decided ...",["Last week","decided"]],["Next month, the company will introduce ...",["Next month","will introduce"]]]},
 {ask:{q:"Last week, we reviewed three quotations. We finally ___ to work with Delta Supplies.", opts:["decide","decided","will decide"], ans:1,
   ok:"很好。整段是上週的事，用過去式 decided。", bad:{0:"現在式 decide 和上週的時間背景不一致。",2:"決定已經做了，不是未來的事。"},
   again:{q:"Next month, the company ___ a new system. Staff will be trained first.", opts:["introduced","will introduce","has introduced"], ans:1, exp:"Next month 表示未來，用 will introduce。"}}},
 {say:"句子插入題的解法：把每個選項放進空格，檢查它和前一句、後一句都接得上。常見的錯誤選項有兩種：文法正確但主題無關，或者說話者身分不對，例如買方的信裡出現賣方的道歉。", board:[["The supplier raised its prices. ___ We are looking for other vendors.",["___"]],["→ This increase has hurt our profit margins.",["This increase"]]]},
 {ask:{say:"最後一題。", q:"The supplier raised its prices last month. ___ We are now looking for other vendors.", opts:["Our new logo is blue.","This increase has hurt our profit margins.","Thank you for attending the seminar."], ans:1,
   ok:"正確。This increase 指漲價，又能帶出找新廠商，前後都接得上。", bad:{0:"新標誌和漲價、找廠商都沒有關係。",2:"感謝參加研討會和上下文無關。"},
   again:{q:"Thank you for your order. ___, the item is on backorder.", opts:["Unfortunately","Therefore","For example"], ans:0, exp:"後面是壞消息，用 Unfortunately 帶出。"}}},
 {say:"Part 6 重點整理：看前一句也看後一句；指代詞要找得到對象，單複數要一致；轉折詞先判斷因果、對比、補充、舉例；時態跟著整段的時間背景；句子插入題刪掉主題無關和身分不對的選項。單元 4 的解題技巧上完了，去 Part 5 練習和聽力試試看。", end:true}
]};

/* ---------- Part 2 聽力應答題庫（原創；第一個選項為正解，播放時會打亂順序） ---------- */
const T4_LISTEN = [
 ["When is the payment due?",["By the end of the month.","To the accounting department.","Yes, it's paid."],"When 問時間，要回答時間。B 回答對象；C 用 Yes 回答 Wh- 問句，是常見陷阱。"],
 ["Who approved this purchase order?",["Ms. Grant in finance.","About five hundred dollars.","An order of paper."],"Who 問人。C 重複 order，是重複字陷阱。"],
 ["Why is the shipment late?",["There was a problem at the port.","By air freight.","Yes, it shipped today."],"Why 問原因。B 回答運送方式，不是原因。"],
 ["How much did the new printers cost?",["About two thousand dollars in total.","Two printers.","Print it out, please."],"How much 問價錢。B 回答數量，C 的 print 和 printers 部分重複，都是陷阱。"],
 ["Have we received the quotation from the supplier?",["Not yet, they'll send it tomorrow.","I'll quote you later.","The supplies are in the cabinet."],"問有沒有收到，Not yet 是自然的回答。B 的 quote、C 的 supplies 都是發音相似陷阱。"],
 ["Should we pay the invoice now or wait until next week?",["Let's pay it now.","Yes, we should.","I invited him."],"選擇疑問句不能用 Yes 或 No 回答。C 的 invited 和 invoice 發音相近，是陷阱。"],
 ["Could you send me the latest sales figures?",["Sure, I'll e-mail them right away.","Yes, he figured it out.","The sales were last week."],"請求要回答同意或拒絕。B 的 figured 是一字多義加重複字陷阱。"],
 ["Isn't the contract up for renewal this month?",["No, it's next month.","The contract is very long.","Yes, it's new."],"否定疑問句照事實回答：不是這個月，就說 No。C 的 new 和 renewal 部分發音相同，是陷阱。"],
 ["Where should I send the signed contract?",["To the legal department.","I signed it yesterday.","At three o'clock."],"Where 問地點或對象。B 重複 signed，是陷阱。"],
 ["Why don't we order the paper in bulk?",["That's a good idea. It's cheaper.","Because it's out of stock.","It's on the top shelf."],"Why don't we ...? 是提議，不是問原因。B 用 Because 回答是陷阱。"],
 ["The bank charged us a late fee.",["I'll call them and ask them to waive it.","He's in charge of sales.","It's a free service."],"直述句說出問題，最自然的回應是提出解決方法。B 的 charge 是一字多義陷阱。"],
 ["Which vendor offered the lowest price?",["The one from Kaohsiung.","It's very expensive.","Yes, they offered."],"Which 問哪一個，回答 The one ... 很自然。"],
 ["How long will it take to process the refund?",["About five business days.","At the front desk.","It's a long process."],"How long 問時間長度。C 重複 process，是陷阱。"],
 ["Would you mind checking these numbers in the spreadsheet?",["Not at all. I'll do it now.","Yes, a check for you.","I don't mind the numbers."],"Would you mind ...? 回答 Not at all，表示「不介意、可以」。B 把 checking 換成名詞 check（支票），是一字多義陷阱。"],
 ["Did the auditors find any problems?",["Only a few minor errors.","They arrived on Monday.","I found my keys."],"問有沒有發現問題，A 直接回答內容。C 重複 find 的過去式 found，是陷阱。"]
];

/* 多益重點裡可以點開的片語：key 是重點文字裡出現的原文，值是 [片語, 中文, 例句, 例句中文] 的清單 */
Object.assign(PHRASES, {
"fiscal year": [["fiscal year","會計年度","The new pricing will start at the beginning of the fiscal year.","新的定價會在會計年度開始時實施。"]],
"highly profitable": [["highly profitable","非常賺錢","Online sales have become highly profitable for small shops.","網路銷售對小店家來說已經變得非常賺錢。"]],
"run a deficit": [["run a deficit","出現赤字","The museum ran a deficit after visitor numbers fell.","參觀人數下降後，博物館出現了赤字。"]],
"conduct / carry out an audit": [
  ["conduct an audit","進行稽核","An outside firm will conduct an audit of our accounts in June.","一家外部公司六月會稽核我們的帳目。"],
  ["carry out an audit","進行稽核","The safety team carried out an audit of the factory.","安全團隊對工廠進行了稽核。"]],
"accounting firm": [["accounting firm","會計事務所","We hired an accounting firm to prepare our tax returns.","我們請了一家會計事務所準備報稅資料。"]],
"income statement": [["income statement","損益表","The income statement shows that sales rose but profits fell.","損益表顯示銷售增加，但利潤下降。"]],
"be projected to V": [["be projected to do","預計……","Online orders are projected to double next year.","網路訂單預計明年會加倍。"]],
"allocate A to B": [["allocate A to B","把 A 分配給 B","The manager allocated two assistants to the project.","經理分配了兩名助理給這個專案。"]],
"expenditure on": [["expenditure on","花在……的支出","Our expenditure on advertising doubled this year.","我們今年的廣告支出加倍了。"]],
"earnings report": [["earnings report","財報","Investors are waiting for Friday's earnings report.","投資人在等週五的財報。"]],
"profit margin": [["profit margin","利潤率","The store increased its profit margin by selling its own brand.","那家店靠著賣自有品牌提高了利潤率。"]],
"be an asset to": [["be an asset to","對……是寶貴資產","Her language skills will be an asset to the sales team.","她的語言能力對業務團隊會是一大資產。"]],
"figure out": [["figure out","想出；弄懂","We need to figure out why the costs went up.","我們得弄清楚成本為什麼上升。"]],
"make a check payable to": [["make a check payable to","支票受款人寫成……","Please make all checks payable to City Arts Center.","所有支票的受款人請寫市立藝術中心。"]],
"accounts receivable": [["accounts receivable","應收帳款","Accounts receivable fell after we offered early-payment discounts.","我們提供提早付款折扣後，應收帳款減少了。"]],
"pay in installments": [["pay in installments","分期付款","Customers can pay in installments with no extra charge.","顧客可以分期付款，不需額外費用。"]],
"billing address": [["billing address","帳單地址","Please update your billing address before your next order.","下次訂購前請更新您的帳單地址。"]],
"free of charge": [["free of charge","免費","Gift wrapping is available free of charge.","提供免費禮品包裝。"]],
"in charge of": [["in charge of","負責","Who is in charge of ordering office furniture?","誰負責訂購辦公家具？"]],
"debit card": [["debit card","簽帳金融卡","You can withdraw cash with your debit card at any branch.","您可以在任何分行用簽帳金融卡提款。"]],
"by wire transfer / bank transfer": [
  ["by wire transfer","以電匯方式","The deposit must be paid by wire transfer.","訂金必須以電匯支付。"],
  ["by bank transfer","以銀行轉帳方式","Most of our clients pay by bank transfer.","我們大部分的客戶用銀行轉帳付款。"]],
"make a down payment on": [["make a down payment on","為……付頭期款","They made a down payment on a small apartment.","他們為一間小公寓付了頭期款。"]],
"discrepancy between A and B": [["discrepancy between A and B","A 和 B 之間的出入","We found a discrepancy between the order and the delivery note.","我們發現訂單和送貨單之間有出入。"]],
"be due to V": [["be due to do","預定……","The new branch is due to open in October.","新分行預定十月開幕。"]],
"unpaid leave": [["unpaid leave","無薪假","She took a month of unpaid leave to travel.","她請了一個月的無薪假去旅行。"]],
"cash flow problems": [["cash flow problems","現金流問題","Slow payments from clients caused cash flow problems.","客戶付款緩慢造成現金流問題。"]],
"waive a fee": [["waive a fee","免收費用","The gym will waive the sign-up fee this month.","健身房這個月免收入會費。"]],
"partial payment / refund / shipment": [
  ["partial payment","部分付款","We accepted a partial payment and set up a plan for the rest.","我們接受了部分付款，並為其餘款項訂了計畫。"],
  ["partial refund","部分退款","Guests who left early received a partial refund.","提早離開的房客拿到了部分退款。"]],
"sign / renew / break a lease": [
  ["sign a lease","簽租約","The bakery signed a lease for a shop near the station.","那家麵包店簽下了車站附近店面的租約。"],
  ["break a lease","提前解除租約","Tenants who break the lease must pay a penalty.","提前解約的承租人必須付違約金。"]],
"issue a purchase order": [["issue a purchase order","開立訂購單","We will issue a purchase order once the quotation is approved.","報價一核准，我們就會開立訂購單。"]],
"buy in bulk": [["buy in bulk","大量購買","Restaurants often buy rice in bulk to save money.","餐廳常常大量購買白米來省錢。"]],
"the bulk of": [["the bulk of","大部分的","The bulk of the budget goes to salaries.","大部分的預算都花在薪資上。"]],
"take / do inventory": [
  ["take inventory","盤點","The store closes early on Sunday to take inventory.","這家店週日提早關門盤點。"],
  ["do inventory","盤點","We do inventory twice a year.","我們一年盤點兩次。"]],
"in stock": [["in stock","有現貨","All sizes are currently in stock.","所有尺寸目前都有現貨。"]],
"out of stock": [["out of stock","缺貨","The blue model is out of stock until next week.","藍色款缺貨到下週。"]],
"on backorder": [["on backorder","缺貨待補","Two of the items you ordered are on backorder.","您訂購的品項中有兩項在等補貨。"]],
"meet the specifications": [["meet the specifications","符合規格","The new parts do not meet the specifications.","新零件不符合規格。"]],
"under warranty": [["under warranty","在保固期內","Your laptop is still under warranty, so the repair is free.","你的筆電還在保固期內，所以維修免費。"]],
"terms and conditions": [["terms and conditions","條款與條件","Please read the terms and conditions before you register.","註冊前請閱讀條款與條件。"]],
"under the terms of the contract": [["under the terms of the contract","根據合約條款","Under the terms of the contract, the vendor must deliver within ten days.","根據合約條款，廠商必須在十天內交貨。"]],
"be up for renewal": [["be up for renewal","即將續約","Our office lease is up for renewal next spring.","我們辦公室的租約明年春天要續約。"]],
"legally binding": [["legally binding","具法律約束力","An e-mail can be legally binding in some cases.","在某些情況下，電子郵件也可能具有法律約束力。"]],
"be bound by": [["be bound by","受……約束","All employees are bound by the confidentiality policy.","所有員工都受保密政策約束。"]],
"in writing": [["in writing","以書面","Please confirm the new price in writing.","請以書面確認新價格。"]],
"with 30 days' notice": [["with 30 days' notice","提前 30 天通知","Tenants may move out with 30 days' notice.","房客提前 30 天通知就可以搬走。"]],
"breach of contract": [["breach of contract","違約","The supplier was sued for breach of contract.","那家供應商因違約被告。"]],
"result in": [["result in","導致","The new system resulted in faster payments.","新系統讓付款變得更快。"]],
"make a concession": [["make a concession","讓步","The landlord made a concession and lowered the rent.","房東讓步並降低了租金。"]],
"submit / win / lose a bid": [
  ["submit a bid","投標","Three firms submitted a bid for the bridge project.","三家公司為這座橋的工程投標。"],
  ["win a bid","得標","Our company won the bid to build the new library.","我們公司得標興建新圖書館。"]],
"be liable for": [["be liable for","對……負（法律）責任","The tenant is liable for any damage to the apartment.","承租人要對公寓的任何損壞負責。"]],
"as stipulated in": [["as stipulated in","如……所規定","As stipulated in the lease, pets are not allowed.","依照租約的規定，不可以養寵物。"]]
});

registerUnit("toeic-fin", {
  name:"多益 單元 4：財務與採購",
  sub:"Part 5 解題技巧：介係詞片語、條件與讓步連接詞、數字與增減；Part 6 文意連貫；Part 2 聽力應答",
  words:T4_WORDS, grammar:T4_GRAMMAR, quiz:T4_QUIZ, classes:T4_CLASS, listen:T4_LISTEN,
  noSpell:true, quizName:"Part 5 練習", memoLabel:"🎯 多益重點", bossName:"多益魔王", grammarName:"解題技巧"
});
})();
