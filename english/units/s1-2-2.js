/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高一下學期 第二次段考
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S1_2_2_WORDS = [
/* ---- 字首 ex- / out- / over- / under- ---- */
["exceed","v.","超過",[
 ["The cost of the trip exceeded our budget.","這趟旅行的花費超出了我們的預算。","exceed 是及物動詞，後面直接接受詞，不用加 than。"],
 ["His score seems to have exceeded everyone's expectations.","他的分數似乎超出了所有人的預期。","seem to have p.p.：完成式不定詞表示「似乎已經……」，超出預期這件事比 seems 更早發生。"],
 ["Don't let your spending exceed your income.","別讓你的開銷超過收入。","let + 受詞 + 原形動詞；spending 在這裡是名詞「開銷」。"]],
 "ex-=向外|ceed=走","走到界線外面 → 超過","🚧|超過"],
["exclude","v.","排除；不包括",[
 ["Tom felt excluded when his classmates turned down his idea.","同學們拒絕他的點子時，湯姆覺得被排擠。","turn down 表示「拒絕」，是可分開的片語動詞；feel excluded 表示「覺得被排除在外」。"],
 ["The price excludes tax.","這個價格不含稅。","exclude 的反義詞是 include（包含）；兩個字都來自 clude（關閉）。"],
 ["Nobody likes being excluded from a group.","沒有人喜歡被團體排除在外。","like + V-ing；being excluded 是動名詞的被動式；exclude A from B 表示「把 A 排除在 B 之外」。"]],
 "ex-=向外|clude=關閉","關在門外 → 排除","🚷|排除"],
["expand","v.","擴大；擴展",[
 ["The company is said to be expanding into Japan.","據說這家公司正在拓展日本市場。","be said to V 表示「據說……」；to be V-ing 是進行式不定詞，表示「據說正在……」。"],
 ["Reading widely can expand your vocabulary.","廣泛閱讀可以擴充你的字彙量。","Reading widely 是動名詞片語當主詞。"],
 ["It is worth expanding your interests in high school.","在高中拓展自己的興趣是值得的。","It is worth + V-ing 表示「做……是值得的」，worth 後面接動名詞，不接 to V。"]],
 "ex-=向外|pand=展開","向外展開 → 擴大","🎈|擴大"],
["exchange","n./v.","交換",[
 ["I'd like to exchange this shirt for a bigger size.","我想把這件襯衫換成大一號的。","exchange A for B 表示「用 A 換 B」。"],
 ["We are looking forward to joining the exchange program.","我們很期待參加交換計畫。","look forward to 的 to 是介係詞，後面接 V-ing，不能接原形動詞。"],
 ["The two students exchanged phone numbers after the meeting.","兩個學生會後交換了電話號碼。","exchange + 複數名詞 表示「互相交換……」。"]],
 "ex-=向外|change=改變","拿出去、換回來 → 交換","🔄|交換"],
["outcome","n.","結果",[
 ["Nobody can predict the outcome of the election.","沒有人能預測選舉的結果。","the outcome of + 名詞 表示「……的結果」。"],
 ["The outcome seems to have surprised the coach.","這個結果似乎讓教練很驚訝。","seem to have p.p.：結果「已經」讓教練驚訝了，動作早於現在。"],
 ["It is no use worrying about the outcome now.","現在擔心結果也沒用了。","It is no use + V-ing 表示「做……是沒用的」。"]],
 "out-=出來|come=來","最後跑出來的東西 → 結果","🎯|結果"],
["outstanding","adj.","傑出的",[
 ["She is an outstanding student in our class.","她是我們班上一位傑出的學生。","outstanding 開頭是母音，前面用 an。"],
 ["The scientist is said to have done outstanding work in his twenties.","據說這位科學家二十多歲時就做出了傑出的研究。","be said to have p.p.：據說「以前已經」做過某事；in one's twenties 表示「在某人二十幾歲時」。"],
 ["It took the outstanding team only two hours to finish the project.","那個傑出的團隊只花了兩個小時就完成了專案。","It takes + 人 + 時間 + to V 表示「某人花多少時間做某事」；過去式用 took。"]],
 "out-=向外|stand=站|-ing=形容詞字尾","站出來、比別人突出 → 傑出的","🌟|傑出"],
["output","n.","產量；輸出",[
 ["The factory's output has doubled this year.","這間工廠今年的產量翻了一倍。","has doubled 是現在完成式；double 當動詞表示「變成兩倍」。"],
 ["The engineers came up with a way to increase output.","工程師們想出了提高產量的方法。","come up with 表示「想出」，是三個字的片語動詞，不能拆開。"],
 ["Output appears to have dropped since the typhoon.","颱風過後產量似乎下降了。","appear to have p.p. 和 seem to have p.p. 用法相同，表示「似乎已經……」。"]],
 "out-=出來|put=放","放出來的東西 → 產量","🏭|產量"],
["overlook","v.","忽略；俯瞰",[
 ["It is easy to overlook small mistakes.","小錯誤很容易被忽略。","虛主詞 It 代替 to overlook small mistakes。"],
 ["The teacher seems to have overlooked my question.","老師似乎漏看了我的問題。","seem to have p.p. 表示「似乎（之前）已經……」。"],
 ["Our hotel room overlooks the sea.","我們的飯店房間可以俯瞰大海。","overlook 也有「俯瞰」的意思：從上方越過去看。"]],
 "over-=越過|look=看","看過頭、越過去沒看到 → 忽略","🙈|忽略"],
["overspend","v.","超支；花太多錢",[
 ["I always overspend when I go shopping with friends.","我和朋友去逛街時總是花太多錢。","頻率副詞 always 放在一般動詞前面。"],
 ["I couldn't help overspending during the sale.","特賣期間我忍不住花超過預算。","can't help + V-ing 表示「忍不住……」；過去式用 couldn't help。"],
 ["It is no use complaining after you overspend.","花超過預算後才抱怨是沒用的。","It is no use + V-ing；overspend 三態：overspend、overspent、overspent。"]],
 "over-=超過|spend=花費","花得超過 → 超支","💳|花太多"],
["overall","adj./adv.","整體的；整體來說",[
 ["The overall cost of the trip was lower than we expected.","這趟旅行的整體花費比我們預期的低。","overall 當形容詞放在名詞 cost 前面。"],
 ["Overall, the event was a success.","整體來說，這次活動很成功。","Overall 當副詞放句首，表示「整體而言」，後面加逗號。"],
 ["Our overall plan seems to be working.","我們的整體計畫似乎奏效了。","seem to be V-ing 表示「似乎正在……」。"]],
 "over-=在上面、全部|all=全部","從上面把全部看一遍 → 整體的","🗺️|整體"],
["undergo","v.","經歷；接受（手術等）",[
 ["The city is undergoing big changes.","這座城市正在經歷巨大的改變。","undergo 三態：undergo、underwent、undergone。"],
 ["My grandfather underwent heart surgery last year.","我爺爺去年動了心臟手術。","undergo surgery 表示「接受手術」。"],
 ["The old building is said to have undergone several repairs.","據說那棟老建築經歷過好幾次整修。","be said to have p.p.：據說「以前已經」……。"]],
 "under-=在下面|go=走","從底下走過、承受下來 → 經歷","🏗️|經歷"],
["underestimate","v.","低估",[
 ["Never underestimate the power of kindness.","永遠不要低估善良的力量。","Never + 原形動詞 是否定祈使句，語氣比 Don't 更強。"],
 ["We seem to have underestimated the cost of the party.","我們似乎低估了派對的花費。","seem to have p.p.：低估這件事發生在「發現」之前。"],
 ["It is a mistake to underestimate your opponent.","低估對手是一種錯誤。","虛主詞 It 代替 to underestimate your opponent。"]],
 "under-=低於|estimate=估計","估計得太低 → 低估","📉|低估"],
["underpaid","adj.","薪水過低的",[
 ["Many workers feel that they are underpaid.","許多員工覺得自己薪水過低。","feel that + 子句 表示「覺得……」。"],
 ["The nurses appear to be underpaid and overworked.","護理師們似乎薪水過低又工作過量。","appear to V = seem to V；under- 和 over- 是一組反義字首。"],
 ["Tired of being underpaid, she decided to look for another job.","厭倦了薪水過低，她決定找另一份工作。","be tired of + V-ing 表示「厭倦……」；of 是介係詞，後面接動名詞。"]],
 "under-=低於|paid=付錢的","付得太少的 → 薪水過低的","💰|薪水太低"],
/* ---- 字根 ven / vent（來） ---- */
["venture","n./v.","冒險事業；創業；冒險",[
 ["My cousin started a business venture after graduating.","我表哥畢業後開始創業。","business venture 表示「商業冒險、創業」；after + V-ing。"],
 ["The new venture seems to have made a profit already.","這個新事業似乎已經開始獲利了。","seem to have p.p.：獲利比 seems 更早發生；make a profit 表示「獲利」。"],
 ["It is worth venturing outside your comfort zone.","踏出自己的舒適圈是值得的。","venture 當動詞表示「冒險前往」；It is worth + V-ing。"]],
 "vent=來|-ure=名詞字尾","朝著未知走來（adventure 的縮短）→ 冒險事業","🚀|創業"],
["revenue","n.","（公司、政府的）收入；營收",[
 ["The shop's revenue increased after it started selling online.","那間店開始網路銷售後，營收增加了。","revenue 指公司或政府的收入；個人收入通常用 income。"],
 ["The museum is said to earn most of its revenue from ticket sales.","據說這間博物館大部分的收入來自門票。","be said to V：據說……（現在的情況）。"],
 ["It is worth looking into new ways to increase revenue.","研究增加營收的新方法是值得的。","look into 表示「調查、研究」，是不可分開的片語動詞。"]],
 "re-=回來|ven=來|-ue=名詞字尾","回到口袋裡來的錢 → 收入","💹|營收"],
["convention","n.","大會；慣例",[
 ["Thousands of fans went to the comic convention.","數千名粉絲參加了漫畫大會。","convention 指大型的會議或展覽；thousands of 表示「好幾千」。"],
 ["The convention was put off because of the typhoon.","大會因為颱風而延期了。","put off 表示「延期」；被動語態是 be put off。"],
 ["It is a convention to shake hands when you meet someone.","見面時握手是一種慣例。","convention 也可以表示「習俗、慣例」；虛主詞 It 代替 to shake hands。"]],
 "con-=一起|vent=來|-ion=名詞字尾","大家一起來 → 大會","🎪|大會"],
["prevention","n.","預防",[
 ["Prevention is better than cure.","預防勝於治療。","這是常見諺語；prevention 是 prevent 的名詞。"],
 ["The school carried out a plan for fire prevention.","學校執行了一項防火計畫。","carry out 表示「執行」，是可分開的片語動詞：carry it out。"],
 ["It is worth spending money on disease prevention.","花錢在疾病預防上是值得的。","It is worth + V-ing；spend 錢 on + 名詞。"]],
 "pre-=事先|vent=來|-ion=名詞字尾","事先過來擋住 → 預防","🩹|預防"],
["adventurous","adj.","愛冒險的",[
 ["My adventurous sister is used to traveling alone.","我愛冒險的姊姊已經習慣獨自旅行了。","be used to + V-ing 表示「習慣於……」；這裡的 to 是介係詞。"],
 ["He seems to be more adventurous than his brother.","他似乎比他哥哥更愛冒險。","seem to be + 形容詞 = seem + 形容詞。"],
 ["Feeling adventurous, we tried the strange-looking fruit.","因為想冒險一下，我們嚐了那個長相奇怪的水果。","分詞構句：Feeling adventurous = Because we felt adventurous。"]],
 "ad-=朝向|vent=來|-ur=名詞字尾|-ous=充滿……的","朝著未知走來（adventure 冒險）→ 充滿冒險精神的","🧭|愛冒險"],
/* ---- 字根 cred（相信） ---- */
["credit","n.","信用；功勞；學分",[
 ["You can pay by credit card here.","這裡可以用信用卡付款。","pay by credit card / pay in cash 表示付款方式。"],
 ["The team leader took all the credit for our work.","組長把我們的功勞全攬在自己身上。","take credit for 表示「把……歸功於自己」。"],
 ["It takes three years to earn enough credits to graduate.","要花三年才能修到足夠的學分畢業。","It takes + 時間 + to V；credit 當「學分」時是可數名詞。"]],
 "cred=相信|-it=名詞字尾","讓人相信你會還錢 → 信用","💳|信用"],
["credible","adj.","可信的",[
 ["Is this news report credible?","這則新聞報導可信嗎？","credible 表示「可以相信的」。"],
 ["The witness seems to be credible.","那位證人似乎是可信的。","seem to be + 形容詞。"],
 ["It is no use quoting websites that aren't credible.","引用不可信的網站是沒用的。","It is no use + V-ing；that 引導關係子句修飾 websites。"]],
 "cred=相信|-ible=可……的","可以相信的","✔️|可信"],
["incredible","adj.","難以置信的；驚人的",[
 ["The view from the top of the mountain was incredible.","山頂的景色美得令人難以置信。","incredible 也常用來表示「好得驚人」。"],
 ["It is incredible that he finished the marathon at 80.","他八十歲還能跑完馬拉松，真是難以置信。","It is + 形容詞 + that 子句 是虛主詞句型。"],
 ["She is said to have saved an incredible amount of money.","據說她存了一筆驚人的錢。","be said to have p.p.；an amount of + 不可數名詞。"]],
 "in-=不|cred=相信|-ible=可……的","不能相信的 → 難以置信的","🤯|難以置信"],
/* ---- 字根 mov / mot（動） ---- */
["motion","n.","動作；移動",[
 ["The video shows the dancer's movements in slow motion.","這段影片用慢動作播放舞者的動作。","in slow motion 表示「以慢動作」。"],
 ["Don't get off while the train is in motion.","火車行駛中請勿下車。","in motion 表示「在移動中」。"],
 ["The teacher made a motion with her hand to ask us to sit down.","老師用手比了個動作，要我們坐下。","make a motion 表示「做手勢」；ask 人 to V 表示「要求某人做某事」。"]],
 "mot=動|-ion=名詞字尾","動的狀態 → 動作","🏃|動作"],
["emotion","n.","情緒；情感",[
 ["I couldn't help showing my emotions at the graduation.","畢業典禮上我忍不住流露情緒。","can't help + V-ing 表示「忍不住……」。"],
 ["It is natural to have strong emotions.","有強烈的情緒是很正常的。","虛主詞 It 代替 to have strong emotions。"],
 ["Music can express emotions that words cannot.","音樂能表達文字無法表達的情感。","that 引導關係子句修飾 emotions；cannot 後面省略了 express。"]],
 "e-=向外|mot=動|-ion=名詞字尾","心裡的東西往外動 → 情緒","😢|情緒"],
["emotional","adj.","情緒的；激動的",[
 ["My mom got emotional when she saw my letter.","我媽看到我的信時情緒很激動。","get + 形容詞 表示「變得……」。"],
 ["Teenagers are said to be more emotional than adults.","據說青少年比大人更容易情緒化。","be said to V 表示「據說……」。"],
 ["Volunteers give emotional support to lonely elderly people.","志工們給孤單的長者情感上的支持。","emotional support 表示「情感支持」；elderly people 指長者。"]],
 "e-=向外|mot=動|-ion=名詞字尾|-al=形容詞字尾","emotion（情緒）的形容詞","🥹|激動"],
["promotion","n.","升遷；促銷",[
 ["She got a promotion after five years at the company.","她在公司五年後獲得升遷。","get a promotion 表示「升職」。"],
 ["He is looking forward to getting a promotion.","他很期待獲得升遷。","look forward to + V-ing。"],
 ["The store is having a promotion this weekend.","這家店這個週末在做促銷。","promotion 也可以指「促銷活動」。"]],
 "pro-=向前|mot=動|-ion=名詞字尾","往前移動 → 升遷","🪜|升遷"],
["motive","n.","動機",[
 ["What was his motive for lying?","他說謊的動機是什麼？","motive for + 名詞或 V-ing 表示「做……的動機」。"],
 ["The police are looking into the motive for the crime.","警方正在調查這起犯罪的動機。","look into 表示「調查」，不可拆開：look into it。"],
 ["The man appears to have had no motive.","那名男子似乎沒有任何動機。","appear to have p.p.：表示「當時」似乎沒有。"]],
 "mot=動|-ive=名詞字尾","讓你動起來的原因 → 動機","🔑|動機"],
["motivation","n.","動力；動機",[
 ["Lack of motivation is a common problem among students.","缺乏動力是學生常見的問題。","lack of + 名詞 表示「缺乏……」；among 用在三者以上。"],
 ["Her motivation for studying hard is to become a doctor.","她用功讀書的動力是想當醫生。","主詞是 Her motivation（單數），用 is；to become 是不定詞當補語。"],
 ["It is no use forcing children to study without motivation.","在沒有動力的情況下強迫孩子讀書是沒用的。","It is no use + V-ing；force 人 to V 表示「強迫某人……」。"]],
 "motiv=使動起來|-ation=名詞字尾","使人動起來的力量 → 動力","🔥|動力"],
["remote","adj.","遙遠的；偏遠的",[
 ["Volunteers teach children in remote villages.","志工們在偏遠村莊教小孩。","remote 放在名詞 villages 前面修飾。"],
 ["It takes about five hours to get to the remote island.","到那座偏遠的小島大約要花五小時。","It takes + 時間 + to V。"],
 ["Where is the remote control? I can't find it anywhere.","遙控器在哪裡？我到處都找不到。","remote control 是「遙控器」：在遠處就能讓東西動起來。"]],
 "re-=往後、離開|mote=移動","移動到很遠的地方 → 遙遠的","🏝️|偏遠"],
/* ---- 職業與未來規劃 ---- */
["occupation","n.","職業",[
 ["Please write down your name and occupation.","請寫下你的姓名和職業。","occupation 是比較正式的「職業」，常出現在表格上。"],
 ["Teaching seems to be a stable occupation.","教書似乎是一份穩定的職業。","seem to be + 名詞；Teaching 是動名詞當主詞。"],
 ["It is worth thinking about what occupation suits you.","值得想想什麼職業適合你。","It is worth + V-ing；what occupation suits you 是名詞子句，當 about 的受詞。"]],
 "occup=佔據|-ation=名詞字尾","佔據你時間的事 → 職業","💼|職業"],
["employ","v.","雇用",[
 ["The company employs about 500 people.","這家公司雇用大約五百人。","employ + 人 表示「雇用某人」。"],
 ["The restaurant is said to employ many young people.","據說這家餐廳雇用了很多年輕人。","be said to V 表示「據說」。"],
 ["It is no use employing people who don't want to learn.","雇用不想學習的人是沒用的。","It is no use + V-ing；who 引導關係子句修飾 people。"]],
 "em-=在裡面|ploy=摺、包","把人包進公司裡 → 雇用","🤝|雇用"],
["employee","n.","員工",[
 ["Every employee has to wear a name card.","每位員工都必須戴名牌。","every + 單數名詞，動詞用單數 has。"],
 ["The new employees are used to working late.","新員工已經習慣工作到很晚。","be used to + V-ing 表示「習慣……」。"],
 ["The manager turned down the employee's request for a day off.","經理拒絕了那位員工請一天假的要求。","turn down 表示「拒絕」；受詞是名詞時可放中間或後面。"]],
 "employ=雇用|-ee=被……的人","被雇用的人 → 員工","🧑‍💼|員工"],
["employer","n.","雇主",[
 ["My employer gave me a raise.","我的老闆幫我加薪了。","give 人 a raise 表示「幫某人加薪」。"],
 ["A good employer cares about workers' health.","好的雇主會關心員工的健康。","care about 表示「關心」；workers' 是複數名詞的所有格。"],
 ["Employers seem to prefer people with work experience.","雇主們似乎比較喜歡有工作經驗的人。","seem to V；prefer 表示「比較喜歡」。"]],
 "employ=雇用|-er=做……的人","雇用別人的人 → 雇主","👔|雇主"],
["unemployment","n.","失業",[
 ["Unemployment is a serious problem for young people.","失業對年輕人來說是個嚴重的問題。","unemployment 是不可數名詞。"],
 ["The government came up with a plan to reduce unemployment.","政府想出了一個降低失業率的計畫。","come up with 表示「想出」；不定詞 to reduce 修飾 a plan。"],
 ["The unemployment rate appears to have fallen this year.","今年的失業率似乎下降了。","appear to have p.p.；fall 的過去分詞是 fallen。"]],
 "un-=不|employ=雇用|-ment=名詞字尾","沒有被雇用的狀態 → 失業","📋|失業"],
["salary","n.","薪水",[
 ["She spends half of her salary on rent.","她把一半的薪水花在房租上。","spend 錢 on + 名詞；spend 錢 + V-ing 也可以。"],
 ["The job is said to offer a high salary.","據說這份工作的薪水很高。","be said to V；salary 用 high / low 形容，不用 expensive / cheap。"],
 ["It took him ten years to double his salary.","他花了十年才讓薪水翻倍。","It takes + 人 + 時間 + to V。"]],
 "sal=鹽|-ary=名詞字尾","古羅馬士兵領「買鹽的錢」→ 薪水","🧂|薪水"],
["income","n.","收入",[
 ["Their family lives on a small income.","他們一家靠微薄的收入過活。","live on 表示「靠……過活」；income 用 small / large 形容。"],
 ["It is worth saving part of your income every month.","每個月存下一部分收入是值得的。","It is worth + V-ing。"],
 ["My parents have trouble paying the bills on one income.","我爸媽靠一份收入很難付清帳單。","have trouble + V-ing 表示「做……有困難」。"]],
 "in-=進來|come=來","進到口袋裡來的錢 → 收入","💵|收入"],
["applicant","n.","申請者；應徵者",[
 ["There were over 200 applicants for the job.","這份工作有超過兩百位應徵者。","applicant for + 職位 表示「……的應徵者」。"],
 ["Each applicant has to write a short essay.","每位申請者都要寫一篇短文。","each + 單數名詞，動詞用單數。"],
 ["The applicant seems to have prepared well for the interview.","那位應徵者似乎為面試做了充分準備。","seem to have p.p.：準備發生在面試之前。"]],
 "applic=申請|-ant=……的人","提出申請的人 → 申請者","📝|申請者"],
["qualified","adj.","合格的；有資格的",[
 ["She is qualified to teach English.","她有資格教英文。","be qualified to V 表示「有資格做某事」。"],
 ["It is no use applying for the job if you aren't qualified.","如果你不符合資格，應徵這份工作也沒用。","It is no use + V-ing；apply for 表示「應徵、申請」。"],
 ["We are looking for qualified nurses.","我們正在找合格的護理師。","qualified 放名詞前面修飾。"]],
 "qualifi=使有資格|-ed=形容詞字尾","qualify（使有資格）→ 有資格的","🏅|合格"],
["accountant","n.","會計師",[
 ["My aunt works as an accountant.","我阿姨是會計師。","work as + 職業 表示「擔任……」。"],
 ["An accountant is used to dealing with numbers.","會計師習慣處理數字。","be used to + V-ing；deal with 表示「處理」。"],
 ["The accountant looked into the company's spending.","會計師調查了公司的支出。","look into 表示「調查」。"]],
 "account=帳目|-ant=……的人","管帳目的人 → 會計師","🧮|會計師"],
["architect","n.","建築師",[
 ["The architect designed a green building.","這位建築師設計了一棟綠建築。","green building 指環保建築。"],
 ["The museum is said to have been designed by a famous architect.","據說這座博物館是一位知名建築師設計的。","be said to have been p.p.：完成式不定詞的被動式，表示「據說（以前）被……」。"],
 ["It takes years of study to become an architect.","要成為建築師需要多年的學習。","It takes + 時間 + to V。"]],
 "archi=主要的|tect=建造者","總建造者 → 建築師","@architect"],
["mechanic","n.","技工；修理工",[
 ["The mechanic fixed my scooter in an hour.","技工一小時內就修好了我的機車。","in an hour 表示「在一小時內」。"],
 ["My father had trouble finding a good mechanic.","我爸爸很難找到一位好技工。","have trouble + V-ing；過去式 had trouble。"],
 ["He seems to have learned a lot from the old mechanic.","他似乎從那位老技工身上學到很多。","seem to have p.p.。"]],
 "mechan=機械|-ic=……的人","修理機械的人 → 技工","🔧|技工"],
["programmer","n.","程式設計師",[
 ["Programmers spend hours writing code every day.","程式設計師每天花好幾個小時寫程式。","spend + 時間 + V-ing 表示「花時間做某事」。"],
 ["Kevin is said to be a talented programmer.","據說凱文是個有天分的程式設計師。","be said to be + 名詞。"],
 ["Becoming a programmer requires patience.","成為程式設計師需要耐心。","Becoming 是動名詞當主詞，視為單數；require 表示「需要」。"]],
 "program=程式|-mer=做……的人","寫程式的人 → 程式設計師","💻|程式設計師"],
["surgeon","n.","外科醫生",[
 ["The surgeon carried out the operation successfully.","外科醫生成功完成了手術。","carry out 表示「執行、完成」；operation 在這裡指「手術」。"],
 ["It took the surgeon six hours to finish the surgery.","外科醫生花了六個小時才完成手術。","It takes + 人 + 時間 + to V。"],
 ["Surgeons are used to working under pressure.","外科醫生習慣在壓力下工作。","be used to + V-ing。"]],
 "","","@surgeon"],
["professor","n.","教授",[
 ["Professor Lin teaches economics at the university.","林教授在大學教經濟學。","Professor 放在姓氏前面當頭銜時要大寫。"],
 ["The professor is said to have written ten books.","據說這位教授寫過十本書。","be said to have p.p.。"],
 ["I'm looking forward to meeting the professor.","我很期待見到那位教授。","look forward to + V-ing。"]],
 "pro-=在前面|fess=說|-or=……的人","站在前面說話（講課）的人 → 教授","👨‍🏫|教授"],
["major","n./v./adj.","主修；主要的",[
 ["She plans to major in computer science.","她打算主修資訊工程。","major in + 科目 表示「主修……」。"],
 ["What is your major?","你主修什麼？","major 當名詞表示「主修科目」。"],
 ["Money seems to be the major reason for their argument.","錢似乎是他們爭吵的主要原因。","major 當形容詞表示「主要的、重大的」。"]],
 "","","🎓|主修"],
["specialize","v.","專攻",[
 ["This doctor specializes in children's health.","這位醫生專攻兒童健康。","specialize in + 領域 表示「專攻……」。"],
 ["It is worth specializing in something you love.","專攻你熱愛的領域是值得的。","It is worth + V-ing；you love 是省略 that 的關係子句。"],
 ["The company is said to specialize in electric cars.","據說這家公司專門做電動車。","be said to V。"]],
 "special=特別的|-ize=使……化","讓自己在某方面特別 → 專攻","🔬|專攻"],
["retire","v.","退休",[
 ["My grandfather retired at 65.","我爺爺六十五歲退休。","at + 年齡 表示「在幾歲時」。"],
 ["After he retired, he spent his time volunteering at the library.","退休後，他把時間花在圖書館當志工。","spend + 時間 + V-ing。"],
 ["My father is looking forward to retiring next year.","我爸爸很期待明年退休。","look forward to + V-ing。"]],
 "re-=往後|tire=拉","從工作中往後退 → 退休","🏖️|退休"],
["potential","n./adj.","潛力；潛在的",[
 ["Every student has great potential.","每個學生都有很大的潛力。","potential 當名詞時通常不可數。"],
 ["The coach seems to see potential in her.","教練似乎看出她的潛力。","seem to V；see potential in 人 表示「看出某人的潛力」。"],
 ["It is worth developing your potential while you are young.","趁年輕開發自己的潛力是值得的。","It is worth + V-ing。"]],
 "potent=有力量的|-ial=形容詞字尾","藏著力量的 → 潛力","🌱|潛力"],
["pursue","v.","追求",[
 ["She decided to pursue her dream of becoming a chef.","她決定追求成為廚師的夢想。","dream of + V-ing；of 是介係詞。"],
 ["It is worth pursuing a career you love.","追求自己熱愛的職業是值得的。","It is worth + V-ing。"],
 ["It occurred to me that I could study art in college.","我突然想到我可以在大學讀藝術。","It occurs to 人 that... 表示「某人突然想到……」；過去式 occurred 要重複字尾 r。"]],
 "pur-=向前|sue=跟隨","向前跟著跑 → 追求","🏃‍♀️|追求"],
["overwork","v./n.","工作過度；過勞",[
 ["Many young workers overwork and don't get enough sleep.","許多年輕上班族工作過度又睡眠不足。","overwork 當動詞時是不及物動詞，後面不接受詞。"],
 ["He seems to have overworked himself before the deadline.","他在截止日前似乎把自己操過頭了。","seem to have p.p.；overwork oneself 表示「讓自己工作過度」。"],
 ["It is no use overworking if you get sick in the end.","如果最後把身體搞壞了，拚命工作也沒有用。","It is no use + V-ing；in the end 表示「最後」。"]],
 "over-=超過|work=工作","工作超過限度 → 工作過度","😵|過勞"],
["voluntary","adj.","自願的",[
 ["The after-school class is voluntary.","課後輔導是自由參加的。","voluntary 的反義詞是 compulsory（強制的）。"],
 ["He seems to have done the work on a voluntary basis.","他似乎是以自願的方式做這份工作的。","on a voluntary basis 表示「以自願的方式」；seem to have p.p.。"],
 ["Voluntary work helps you develop new skills.","志願服務幫助你培養新技能。","help + 人 + (to) V。"]],
 "volunt=意願|-ary=形容詞字尾","出於自己意願的 → 自願的","🙋|自願"],
/* ---- 金錢與消費觀念 ---- */
["consumer","n.","消費者",[
 ["Consumers have the right to ask for a refund.","消費者有權要求退款。","the right to V 表示「做……的權利」；ask for 表示「要求」。"],
 ["Young consumers seem to prefer shopping online.","年輕消費者似乎比較喜歡網購。","seem to V；prefer + V-ing。"],
 ["Smart consumers know that it is worth comparing prices.","聰明的消費者知道比價是值得的。","It is worth + V-ing 放在 that 子句裡，當 know 的受詞。"]],
 "con-=完全|sum=拿取|-er=……的人","把東西拿去用掉的人 → 消費者","🛒|消費者"],
["outlet","n.","暢貨中心；插座；發洩管道",[
 ["We bought cheap sneakers at an outlet mall.","我們在暢貨中心買了便宜的球鞋。","outlet mall 是「暢貨中心」，專賣過季或打折商品。"],
 ["Is there a power outlet near your seat?","你座位附近有插座嗎？","power outlet 是「電源插座」。"],
 ["Sports seem to be a good outlet for stress.","運動似乎是抒發壓力的好管道。","seem to be + 名詞；outlet for + 名詞 表示「……的發洩管道」。"]],
 "out-=出來|let=讓","讓東西出來的地方 → 插座、暢貨中心、發洩管道","🔌|暢貨中心"],
["purchase","v./n.","購買",[
 ["You can purchase tickets online.","你可以在網路上購票。","purchase 是比 buy 更正式的「購買」。"],
 ["It is no use regretting a purchase you can't return.","後悔買了無法退貨的東西是沒用的。","It is no use + V-ing；you can't return 是省略 that 的關係子句。"],
 ["Think twice before you make a big purchase.","買貴重物品前要三思。","make a purchase 表示「購物」；think twice 表示「三思」。"]],
 "pur-=為了|chase=追趕","為了得到而去追 → 購買","🛍️|購買"],
["debt","n.","債務",[
 ["He is in debt because he overspent on his credit card.","他因為刷卡刷過頭而負債。","be in debt 表示「負債」。"],
 ["It took her five years to pay off her debt.","她花了五年才還清債務。","pay off 表示「還清」，也是可分開的片語動詞：pay it off。"],
 ["There is no denying that debt can cause stress.","不可否認，債務會造成壓力。","There is no + V-ing 表示「不可能……」；There is no denying 表示「無法否認」。"]],
 "","","💸|欠債"],
["loan","n.","貸款；借款",[
 ["Many students take out loans to pay for college.","很多學生借貸來付大學學費。","take out a loan 表示「申辦貸款」。"],
 ["The bank turned down his request for a loan.","銀行拒絕了他的貸款申請。","turn down 表示「拒絕」。"],
 ["She is said to have paid back the loan in two years.","據說她兩年就還清了貸款。","be said to have p.p.；pay back 表示「償還」。"]],
 "","","🏦|貸款"],
["invest","v.","投資",[
 ["It is worth investing time in learning a new language.","花時間學習一門新語言是值得的。","invest 時間／錢 in + 名詞或 V-ing。"],
 ["My uncle seems to have invested in a coffee shop.","我叔叔似乎投資了一間咖啡店。","seem to have p.p.。"],
 ["Never invest money that you can't afford to lose.","絕對不要投資你輸不起的錢。","afford to V 表示「負擔得起」。"]],
 "in-=在裡面|vest=穿衣","把錢「穿」進事業裡 → 投資","📊|投資"],
["investment","n.","投資",[
 ["Education is the best investment.","教育是最好的投資。","investment 可數也可不可數。"],
 ["Buying a house is a big investment.","買房子是一筆很大的投資。","動名詞片語當主詞，視為單數。"],
 ["The investment appears to have paid off.","這筆投資似乎有了回報。","pay off 也可以表示「得到回報」；appear to have p.p.。"]],
 "in-=在裡面|vest=穿衣|-ment=名詞字尾","invest（投資）的名詞","🪙|投資"],
["savings","n.","存款",[
 ["I used all my savings to buy a new laptop.","我用了全部的存款買新筆電。","savings 表示「存款」時用複數形。"],
 ["It took me a year to build up my savings.","我花了一年才累積起我的存款。","build up 表示「累積」。"],
 ["Putting part of your allowance into savings is a good habit.","把部分零用錢存起來是好習慣。","動名詞片語當主詞，用單數 is。"]],
 "sav=存|-ing=名詞字尾|-s=複數","存下來的錢 → 存款","@savings"],
["wasteful","adj.","浪費的",[
 ["It is wasteful to throw away food.","把食物丟掉很浪費。","虛主詞 It 代替 to throw away food；throw away 是可分開的片語動詞：throw it away。"],
 ["Buying things you never use seems wasteful.","買從來不用的東西似乎很浪費。","Buying things ... 是動名詞片語當主詞，視為單數；seem + 形容詞。"],
 ["I couldn't help feeling that the party was wasteful.","我忍不住覺得那場派對太浪費了。","can't help + V-ing 表示「忍不住……」。"]],
 "waste=浪費|-ful=充滿……的","充滿浪費 → 浪費的","🗑️|浪費"],
["luxury","n.","奢侈品；奢華",[
 ["Some people think that a car is a luxury.","有些人認為汽車是奢侈品。","think that + 子句。"],
 ["They live in luxury.","他們過著奢華的生活。","live in luxury 表示「過奢侈的生活」。"],
 ["It is no use buying luxuries to impress others.","買奢侈品來讓別人印象深刻是沒用的。","It is no use + V-ing；luxury 當「奢侈品」可數，複數 luxuries。"]],
 "","","👜|奢侈品"],
["cash","n.","現金",[
 ["Do you want to pay in cash or by card?","你要付現金還是刷卡？","pay in cash 表示「付現金」，介係詞用 in。"],
 ["I have trouble keeping track of my cash.","我很難掌握自己的現金用到哪裡。","have trouble + V-ing；keep track of 表示「掌握、記錄」。"],
 ["It occurred to me that I had no cash with me.","我突然想到身上沒有帶現金。","It occurred to 人 that... 表示「某人突然想到」。"]],
 "","","💴|現金"],
["wealth","n.","財富",[
 ["Health is more important than wealth.","健康比財富更重要。","wealth 不可數。"],
 ["He is said to have made his wealth in technology.","據說他靠科技業致富。","be said to have p.p.：致富發生在「據說」之前。"],
 ["Wealth cannot buy happiness.","財富買不到快樂。","cannot 是 can not 的合寫。"]],
 "weal=富足|-th=名詞字尾","富足的狀態 → 財富","🏰|財富"],
["wealthy","adj.","富有的",[
 ["The wealthy businessman donated money to the hospital.","那位富有的商人捐錢給醫院。","donate 錢 to 對象。"],
 ["They seem to be wealthy, but they live simply.","他們似乎很富有，但過得很簡樸。","seem to be + 形容詞。"],
 ["Being wealthy doesn't mean being happy.","有錢不代表快樂。","Being wealthy 是動名詞當主詞；mean + V-ing。"]],
 "wealth=財富|-y=形容詞字尾","有財富的 → 富有的","🤑|富有"],
["financial","adj.","財務的；金融的",[
 ["Many families are facing financial problems.","許多家庭正面臨財務問題。","face 當動詞表示「面對」。"],
 ["He has trouble making financial decisions.","他做財務決定時很困難。","have trouble + V-ing。"],
 ["It is worth learning basic financial skills in high school.","在高中學習基本理財技能是值得的。","It is worth + V-ing。"]],
 "financ=資金|-ial=形容詞字尾","和資金有關的 → 財務的","📒|財務"],
["tax","n.","稅",[
 ["The price includes tax.","這個價格含稅。","include 的反義詞是 exclude。"],
 ["Everyone who earns money has to pay taxes.","每個賺錢的人都必須繳稅。","pay taxes 表示「繳稅」；everyone 視為單數。"],
 ["The government is said to be raising the tax on cigarettes.","據說政府正打算提高香菸稅。","be said to be V-ing 表示「據說正在……」。"]],
 "","","🧾|稅"],
["profit","n.","利潤",[
 ["The shop made a profit of 10,000 dollars last month.","那家店上個月獲利一萬元。","make a profit 表示「獲利」。"],
 ["The company appears to care only about profit.","這家公司似乎只在乎利潤。","appear to V = seem to V。"],
 ["The students sold cookies and gave the profits to charity.","學生們賣餅乾，把利潤捐給慈善機構。","give 物 to 對象。"]],
 "pro-=向前|fit=做","往前做出來的成果 → 利潤","📈|利潤"],
["wage","n.","工資",[
 ["The minimum wage in Taiwan has gone up.","台灣的基本工資調漲了。","minimum wage 表示「基本工資」；has gone up 是現在完成式。"],
 ["Workers earning low wages have trouble saving money.","領低工資的工人很難存錢。","earning low wages 是現在分詞片語修飾 Workers；have trouble + V-ing。"],
 ["It is no use complaining about wages without doing anything.","光抱怨工資卻什麼都不做是沒用的。","It is no use + V-ing；without + V-ing。"]],
 "","","🕒|工資"],
/* ---- 志願服務與社會議題 ---- */
["donation","n.","捐款；捐贈",[
 ["Thank you for your generous donation.","謝謝您慷慨的捐款。","generous 表示「慷慨的」。"],
 ["The shelter depends on donations from the public.","這間收容所仰賴大眾的捐款。","depend on 表示「依賴」。"],
 ["It occurred to us that we could collect donations online.","我們突然想到可以在網路上募款。","It occurs to 人 that...。"]],
 "donat=給予|-ion=名詞字尾","donate（捐贈）的名詞","🎁|捐款"],
["poverty","n.","貧窮",[
 ["Many children around the world live in poverty.","世界上許多孩子生活在貧窮中。","live in poverty 表示「生活貧困」。"],
 ["The organization is carrying out a plan to fight poverty.","這個組織正在執行一項對抗貧窮的計畫。","carry out 表示「執行」。"],
 ["It is no use talking about poverty without taking action.","只談貧窮而不採取行動是沒用的。","It is no use + V-ing；take action 表示「採取行動」。"]],
 "pover=貧窮的|-ty=名詞字尾","poor（貧窮的）的名詞","🥣|貧窮"],
["refugee","n.","難民",[
 ["Many refugees left their homes because of the war.","許多難民因為戰爭離開了家園。","because of + 名詞 表示「因為……」。"],
 ["The volunteers are used to working with refugee children.","志工們已經習慣和難民兒童相處。","be used to + V-ing；refugee 也可以放在名詞前面修飾。"],
 ["It took the refugees weeks to reach a safe country.","難民們花了好幾週才抵達安全的國家。","It takes + 人 + 時間 + to V。"]],
 "re-=往後|fug=逃|-ee=……的人","往後逃走的人 → 難民","🏕️|難民"],
["disabled","adj.","身心障礙的",[
 ["The building has a special entrance for disabled people.","這棟建築有身障者專用的入口。","disabled people 也可以說 people with disabilities。"],
 ["The volunteers are used to helping disabled children.","志工們已經習慣幫助身障兒童。","be used to + V-ing。"],
 ["It took the disabled athlete years to prepare for the race.","那位身障運動員花了好幾年準備這場比賽。","It takes + 人 + 時間 + to V。"]],
 "dis-=不|abl=能夠|-ed=……的","某些事不能做到的 → 身心障礙的","♿|身障"],
["equality","n.","平等",[
 ["Everyone should fight for equality.","每個人都應該為平等奮鬥。","fight for 表示「為……而戰」。"],
 ["It is no use talking about equality if we don't respect others.","如果我們不尊重別人，談平等就沒有用。","It is no use + V-ing。"],
 ["Gender equality seems to be improving in Taiwan.","台灣的性別平等似乎正在改善中。","seem to be V-ing 表示「似乎正在……」。"]],
 "equal=平等的|-ity=名詞字尾","equal（平等的）的名詞","⚖️|平等"],
["welfare","n.","福利",[
 ["The government cares about the welfare of the elderly.","政府關心老人的福利。","the elderly 表示「老人」（the + 形容詞 = 一群人）。"],
 ["Animal welfare groups look into cases of animal abuse.","動物福利團體會調查虐待動物的案件。","look into 表示「調查」。"],
 ["Social welfare is said to be better in Northern Europe.","據說北歐的社會福利比較好。","be said to V。"]],
 "wel=好|fare=過日子","日子過得好 → 福利","🤲|福利"],
["issue","n.","議題；問題",[
 ["Climate change is a global issue.","氣候變遷是全球性的議題。","global 表示「全球的」。"],
 ["It is worth discussing social issues in class.","在課堂上討論社會議題是值得的。","It is worth + V-ing；discuss 後面直接接受詞，不加 about。"],
 ["The students came up with ideas to deal with the issue.","學生們想出了處理這個議題的點子。","come up with + 名詞；deal with 表示「處理」。"]],
 "","","💭|議題"],
["awareness","n.","意識；認識",[
 ["The campaign aims to raise awareness of poverty.","這個活動目的是提高大眾對貧窮的認識。","raise awareness of 表示「提高對……的意識」。"],
 ["Public awareness of recycling seems to have grown.","大眾的回收意識似乎提高了。","seem to have p.p.；grow 的過去分詞是 grown。"],
 ["It took years to build awareness of the problem.","花了好幾年才建立起大家對這個問題的意識。","It takes + 時間 + to V。"]],
 "aware=察覺到的|-ness=名詞字尾","aware（察覺到的）的名詞","💡|意識"],
["crime","n.","犯罪；罪行",[
 ["Crime in this area has dropped.","這個地區的犯罪率下降了。","crime 當「犯罪行為」的總稱時不可數。"],
 ["Poverty is said to be one of the causes of crime.","據說貧窮是犯罪的原因之一。","be said to be；one of + 複數名詞。"],
 ["The police are looking into the crime.","警方正在調查這起犯罪。","police 是複數名詞，動詞用 are。"]],
 "","","🚨|犯罪"],
["hunger","n.","飢餓",[
 ["Millions of people suffer from hunger.","數百萬人受飢餓之苦。","suffer from 表示「受……之苦」。"],
 ["The charity is carrying out a project to end hunger.","這個慈善機構正在執行一項終結飢餓的計畫。","carry out 表示「執行」。"],
 ["I couldn't help thinking about the children suffering from hunger.","我忍不住想到那些受飢餓所苦的孩子。","can't help + V-ing；suffering from hunger 是分詞片語修飾 the children。"]],
 "hung=餓|-er=名詞字尾","hungry（餓的）的名詞","🍚|飢餓"],
["orphan","n.","孤兒",[
 ["The orphan was raised by his grandparents.","那個孤兒由祖父母扶養長大。","be raised by 表示「由……扶養長大」。"],
 ["We spent the afternoon playing games with the orphans.","我們花了一下午和孤兒們玩遊戲。","spend + 時間 + V-ing。"],
 ["The girl appears to have become an orphan after the war.","那個女孩似乎在戰後成了孤兒。","appear to have p.p.；become 的過去分詞還是 become。"]],
 "","","🧸|孤兒"],
["aid","n./v.","援助",[
 ["The country sent aid to the earthquake victims.","這個國家送援助物資給地震災民。","aid 當名詞時不可數。"],
 ["Everyone should learn first aid.","每個人都應該學急救。","first aid 表示「急救」。"],
 ["It took the aid workers two days to reach the village.","救援人員花了兩天才抵達村莊。","It takes + 人 + 時間 + to V；reach 後面直接接地點。"]],
 "","","🆘|援助"],
["involve","v.","使參與；牽涉",[
 ["The project involves working with elderly people.","這個計畫需要和長者一起合作。","involve + V-ing 表示「包含、需要做……」。"],
 ["More students should get involved in volunteer work.","應該有更多學生投入志工服務。","get involved in 表示「參與、投入」。"],
 ["The teacher is said to have been involved in the campaign for years.","據說那位老師參與這個活動好幾年了。","be said to have been p.p.：完成式不定詞的被動。"]],
 "in-=進入|volve=捲","捲進來 → 使參與","🙌|參與"],
["devote","v.","奉獻；投入",[
 ["She devoted her life to helping the poor.","她把一生奉獻給幫助窮人。","devote A to + V-ing：to 是介係詞，後面接 V-ing。"],
 ["He is said to have devoted ten years to the project.","據說他在這個計畫上投入了十年。","be said to have p.p.。"],
 ["Devoted to his job, the doctor rarely takes a day off.","那位醫生全心投入工作，很少休假。","分詞構句：Devoted to ... = Because he is devoted to ...。"]],
 "de-=完全|vote=發誓","發誓全心交出去 → 奉獻","💗|奉獻"],
["benefit","n./v.","好處；使受益",[
 ["Volunteering has many benefits.","當志工有很多好處。","Volunteering 是動名詞當主詞。"],
 ["Everyone can benefit from regular exercise.","每個人都能從規律運動中受益。","benefit from 表示「從……受益」。"],
 ["It occurred to me that volunteering would benefit my future career.","我突然想到當志工對我未來的職涯會有好處。","It occurs to 人 that...；benefit 當動詞直接接受詞。"]],
 "bene-=好|fit=做","做好事 → 好處","✨|好處"],
["organization","n.","組織；機構",[
 ["She works for a non-profit organization.","她在一個非營利組織工作。","non-profit 表示「非營利的」。"],
 ["The organization seems to have helped thousands of families.","這個組織似乎幫助過數千個家庭。","seem to have p.p.。"],
 ["It took the organization a year to come up with the plan.","這個組織花了一年才想出這個計畫。","It takes + 人／團體 + 時間 + to V；come up with 表示「想出」。"]],
 "organiz=組織|-ation=名詞字尾","organize（組織）的名詞","🏢|組織"],
["campaign","n.","活動；宣傳",[
 ["The school started a campaign against bullying.","學校發起了反霸凌活動。","campaign against + 名詞 表示「反對……的活動」。"],
 ["The campaign was put off until next month.","這個活動延到下個月了。","put off 的被動：be put off。"],
 ["It is worth joining the campaign to protect the ocean.","加入保護海洋的活動是值得的。","It is worth + V-ing。"]],
 "","","@campaign"]
];

/* 沒有字根可拆的字：記憶小撇步 */
Object.assign(MEMO, {
  surgeon: "surgeon 和 surgery（手術）是一家人：做 surgery 的人就是 surgeon。注意 geon 唸作 /dʒən/。",
  major: "major 是「大的、主要的」，和 minor（小的）相反。你大學最主要的科目就是 major。",
  debt: "debt 的 b 不發音，唸作 /dɛt/，和 doubt 一樣。欠了債的人不敢出聲，所以 b 也不出聲！",
  loan: "loan 和 lend（借出）意思相連：銀行把錢 lend 給你，那筆錢就是 loan；take out a loan 是申辦貸款。",
  luxury: "luxury 開頭的 lux 可以聯想 light（光）：閃閃發亮的名牌包就是奢侈品。形容詞是 luxurious。",
  cash: "cash 和 catch 長得很像：真的「抓」在手上的錢就是現金 cash。",
  tax: "tax 和 taxi 只差一個 i：坐 taxi 要付錢，tax 是要付給政府的錢。",
  wage: "wage 通常是按時或按日算的工資；salary 是按月領的固定薪水。minimum wage 是基本工資。",
  issue: "issue 唸作 /ˈɪʃu/；原本是「流出來」，大家討論時冒出來的問題就是議題。",
  crime: "crime 和 time 押韻：犯罪的人要坐牢很長的 time。罪犯是 criminal。",
  orphan: "orphan 的 ph 唸成 /f/，唸作 /ˈɔrfən/；孤兒院是 orphanage。",
  aid: "aid 和 help 意思相近：first aid 是「第一時間的幫助」，也就是急救。",
  campaign: "campaign 的 g 不發音，唸作 /kæmˈpen/；開頭是 camp（營地）：大家像紮營一樣一起行動，就是活動。"
});

const S1_2_2_GRAMMAR = [
{ id:"g1", title:"不定詞進階：seem to V／be said to V／to have p.p.",
  intro:"seem to V、appear to V 表示「似乎……」，be said to V 表示「據說……」；如果不定詞的動作比主要動詞更早發生，就改用完成式不定詞 to have p.p.。",
  table:[["句型","意思","時間關係"],["seem / appear to V","似乎……","和 seem 同時"],["seem / appear to have p.p.","似乎（已經）……","比 seem 更早"],["be said to V","據說……","和 is said 同時"],["be said to have p.p.","據說（以前）……","比 is said 更早"],["seem / be said to be V-ing","似乎／據說正在……","進行中"]],
  points:[
   "It seems that 子句 = 主詞 + seem to V：It seems that he is tired. = He seems to be tired.",
   "時間不同就用完成式不定詞：It seems that he was sick. = He seems to have been sick.",
   "be said to V 由 It is said that ... 改寫而來：It is said that she is rich. = She is said to be rich.",
   "It is said that he lived here. = He is said to have lived here.（lived 比 is said 早）",
   "學測陷阱：to 後面一律接原形，所以是 to have p.p.，不能寫成 to has / to had p.p.。",
   "appear to V 的 appear 是「似乎」，不是「出現」；完成式不定詞的被動是 to have been p.p.：The museum is said to have been designed by him."],
  ex:[
   ["His score seems to have exceeded everyone's expectations.","他的分數似乎超出了所有人的預期。","超出預期比 seems 更早，用 to have p.p.。"],
   ["The company is said to be expanding into Japan.","據說這家公司正在拓展日本市場。","據說「正在」，用進行式不定詞 to be V-ing。"],
   ["The professor is said to have written ten books.","據說這位教授寫過十本書。","= It is said that the professor wrote / has written ten books."],
   ["The nurses appear to be underpaid and overworked.","護理師們似乎薪水過低又工作過量。","appear to V = seem to V。"],
   ["The museum is said to have been designed by a famous architect.","據說這座博物館是一位知名建築師設計的。","完成式不定詞的被動：to have been p.p.。"]]},
{ id:"g2", title:"虛主詞 it 的慣用句型",
  intro:"英文不喜歡把很長的主詞放在句首，所以常用 It 當虛主詞。下面四個句型是段考和學測的常客，要整句背起來。",
  table:[["句型","意思","例句"],["It is no use + V-ing","做……是沒用的","It is no use crying."],["It is worth + V-ing","做……是值得的","It is worth visiting."],["It takes (人) + 時間 + to V","（某人）花多少時間做……","It took me an hour to finish it."],["It occurs to 人 + that 子句","某人突然想到……","It occurred to me that I had no cash."]],
  points:[
   "It is no use V-ing = There is no use (in) V-ing = It is useless to V。",
   "worth 後面接 V-ing 或名詞，不接 to V：It is worth visiting.（✗ It is worth to visit.）",
   "主詞就是動作的受詞時，V-ing 後面不再加 it：The book is worth reading.（✗ reading it）",
   "It takes 人 時間 to V 的主詞是 It；人 spend 時間 V-ing 的主詞是人：It took me an hour to clean. = I spent an hour cleaning.",
   "It occurs to 人 that ...：主詞是 It（那個想法），人放在 to 後面；不能說 I occurred that ...。",
   "occur 的過去式要重複 r：occurred；It occurred to me to call her. 也可以接 to V。"],
  ex:[
   ["It is no use worrying about the outcome now.","現在擔心結果也沒用了。","It is no use + V-ing。"],
   ["It is worth expanding your interests in high school.","在高中拓展自己的興趣是值得的。","worth 後面接 V-ing。"],
   ["It took the outstanding team only two hours to finish the project.","那個傑出的團隊只花了兩個小時就完成了專案。","It took + 人 + 時間 + to V。"],
   ["It occurred to me that I had no cash with me.","我突然想到身上沒有帶現金。","人放在 to 後面，想到的內容放在 that 子句。"],
   ["It is worth investing time in learning a new language.","花時間學習一門新語言是值得的。","worth 後面接 V-ing；invest 時間 in + V-ing。"]]},
{ id:"g3", title:"動名詞慣用語",
  intro:"有些片語後面固定接動名詞 V-ing。最容易錯的是 look forward to、be used to：這裡的 to 是介係詞，不是不定詞！",
  table:[["慣用語","意思"],["look forward to + V-ing","期待……"],["be used to + V-ing","習慣於……"],["can't help + V-ing","忍不住……"],["spend + 時間／錢 + V-ing","花時間／錢做……"],["have trouble / difficulty + V-ing","做……有困難"],["There is no + V-ing","不可能……"]],
  points:[
   "look forward to、be used to 的 to 是介係詞，後面接 V-ing：I look forward to seeing you.（✗ to see）",
   "三胞胎陷阱：used to V（過去常常）、be used to V-ing（習慣於）、be used to V（被用來）。",
   "can't help V-ing = can't help but V，表示「忍不住」：I couldn't help laughing. = I couldn't help but laugh.",
   "spend 時間 V-ing；spend 錢 on 名詞：She spent two hours doing homework. / He spent 500 dollars on shoes.",
   "There is no V-ing = It is impossible to V：There is no telling what will happen.（無法預料會發生什麼）",
   "其他後面接 V-ing 的介係詞 to：devote ... to、be devoted to、object to、when it comes to。"],
  ex:[
   ["We are looking forward to joining the exchange program.","我們很期待參加交換計畫。","look forward to + V-ing。"],
   ["My adventurous sister is used to traveling alone.","我愛冒險的姊姊已經習慣獨自旅行了。","be used to + V-ing：習慣於。"],
   ["I couldn't help overspending during the sale.","特賣期間我忍不住花超過預算。","can't help + V-ing：忍不住。"],
   ["My parents have trouble paying the bills on one income.","我爸媽靠一份收入很難付清帳單。","have trouble + V-ing：做……有困難。"],
   ["There is no denying that debt can cause stress.","不可否認，債務會造成壓力。","There is no + V-ing：不可能……。"]]},
{ id:"g4", title:"片語動詞：可分開與不可分開",
  intro:"片語動詞是「動詞＋副詞」或「動詞＋介係詞」組成的固定用法。動詞＋副詞的可以分開，受詞是代名詞時一定要夾在中間；動詞＋介係詞的不能分開。",
  table:[["片語動詞","意思","可分開？","受詞是代名詞"],["put off","延期","可分開","put it off"],["turn down","拒絕；調小聲","可分開","turn it down"],["carry out","執行","可分開","carry it out"],["look into","調查","不可分開","look into it"],["come up with","想出","不可分開","come up with it"]],
  points:[
   "可分開的片語動詞，受詞是名詞時放中間或後面都可以：put off the meeting = put the meeting off。",
   "受詞是代名詞（it、them、me……）時一定要放中間：put it off（✗ put off it）。",
   "不可分開的片語動詞，受詞一律放在後面：look into the problem / look into it（✗ look it into）。",
   "三個字的片語動詞 come up with 不能拆開：come up with an idea / come up with it。",
   "put off 後面接動名詞：Don't put off doing your homework.（✗ put off to do）",
   "片語動詞也能用被動，介係詞或副詞不能丟：The game was put off. / The plan was carried out."],
  ex:[
   ["The convention was put off because of the typhoon.","大會因為颱風而延期了。","put off 的被動：be put off。"],
   ["The bank turned down his request for a loan.","銀行拒絕了他的貸款申請。","turn down + 名詞，也可以說 turned his request down。"],
   ["The school carried out a plan for fire prevention.","學校執行了一項防火計畫。","carry out；代名詞要說 carried it out。"],
   ["The police are looking into the crime.","警方正在調查這起犯罪。","look into 不可分開：looking into it。"],
   ["The government came up with a plan to reduce unemployment.","政府想出了一個降低失業率的計畫。","come up with 三個字不拆開。"]]}
];

const S1_2_2_QUIZ = [
 ["He seems ___ sick yesterday, but he looks fine today.",["to be","to have been","being","have been"],1,"生病是昨天的事，比 seems（現在）更早，要用完成式不定詞 to have been。","g1"],
 ["It is said that the old man was a famous singer. = The old man is said ___ a famous singer.",["to be","being","to have been","to had been"],2,"was 比 is said 更早，用 to have been；to 後面要接原形 have，不能用 had。","g1"],
 ["It seems that she is very busy. = She seems ___ very busy.",["to be","to have been","being","be"],0,"is 和 seems 同時，用一般不定詞 to be。","g1"],
 ["The company ___ to be hiring new employees.",["says","is said","is saying","said"],1,"「據說」是 be said to V，公司是「被說」的，要用被動 is said。","g1"],
 ["Look! The baby appears ___. Don't wake her up.",["sleep","to sleep","to be sleeping","having slept"],2,"看起來「正在」睡覺，用進行式不定詞 to be sleeping。","g1"],
 ["It appears that they have lost the game. = They appear ___ the game.",["to lose","losing","to be lost","to have lost"],3,"have lost 比 appear 更早完成，用 to have lost。","g1"],
 ["Jason is said ___ in Japan for ten years when he was young.",["to live","to have lived","living","lived"],1,"when he was young 是過去，比 is said 早，用 to have lived。","g1"],
 ["It is said that Taiwan has many night markets. = Taiwan ___ many night markets.",["is said to have","is said having","says to have","is said to have had"],0,"has 和 is said 同時，用 is said to have（這裡的 have 是「有」）。","g1"],
 ["下列哪一句正確？",["He seems to has finished it.","He seem to have finished it.","He seems having finished it.","He seems to have finished it."],3,"主詞 He 用 seems；to 後面接原形 have + p.p.。","g1"],
 ["It is no use ___ over spilt milk.",["cry","to cry","crying","cried"],2,"It is no use + V-ing：覆水難收，哭也沒用。","g2"],
 ["This museum is worth ___.",["visiting","to visit","visit","visiting it"],0,"worth 後面接 V-ing；主詞 This museum 就是 visit 的受詞，後面不能再加 it。","g2"],
 ["It ___ me two hours to finish the report yesterday.",["spent","took","cost","paid"],1,"It takes + 人 + 時間 + to V；yesterday 用過去式 took。spend 的主詞要是人。","g2"],
 ["It suddenly ___ to me that I had left my wallet at home.",["happened","thought","occurred","reminded"],2,"It occurs to 人 that ... 表示「突然想到」。","g2"],
 ["___ is no use arguing with him; he never listens.",["This","That","There","It"],3,"固定句型 It is no use + V-ing。（There 要說 There is no use in V-ing）","g2"],
 ["I ___ an hour cleaning my room. = It ___ me an hour to clean my room.",["spent / took","took / spent","spent / spent","took / took"],0,"人當主詞用 spend + V-ing；It 當主詞用 take + to V。","g2"],
 ["The book is worth ___ again.",["reading it","to read","reading","to be read"],2,"worth + V-ing；主詞 The book 已經是 read 的受詞，不能再加 it。","g2"],
 ["It occurred to Amy ___ she could sell her old books online.",["that","what","which","if"],0,"It occurs to 人 that + 完整子句。","g2"],
 ["It is worth ___ money on a good dictionary.",["to spend","spend","spent","spending"],3,"worth 後面接 V-ing：worth spending。","g2"],
 ["I am looking forward to ___ you again.",["see","seeing","saw","have seen"],1,"look forward to 的 to 是介係詞，後面接 V-ing。","g3"],
 ["My dad is used to ___ up early.",["get","got","getting","be getting"],2,"be used to + V-ing 表示「習慣於」。","g3"],
 ["When I saw the funny video, I couldn't help ___.",["laughing","to laugh","laughed","laugh at"],0,"can't help + V-ing 表示「忍不住」。","g3"],
 ["She spent all her allowance ___ comic books.",["to buy","buying","bought","for buying"],1,"spend 錢 + V-ing（或 spend 錢 on + 名詞）。","g3"],
 ["Tom has trouble ___ English words.",["remember","to remember","remembered","remembering"],3,"have trouble + V-ing 表示「做……有困難」。","g3"],
 ["There is no ___ what will happen tomorrow.",["telling","tell","to tell","told"],0,"There is no + V-ing = It is impossible to V；There is no telling 表示「無法預料」。","g3"],
 ["He used to ___ in Tainan, but now he lives in Taipei.",["living","live","lived","be living"],1,"used to + 原形動詞 表示「過去常常／以前」，和 be used to V-ing 不同。","g3"],
 ["Knives are used to ___ food.",["cutting","cuts","cut","having cut"],2,"be used to + 原形動詞 表示「被用來……」（被動），這裡的 to 是不定詞。","g3"],
 ["下列哪一句正確？",["I look forward to hear from you.","She is used to work at night.","I couldn't help to cry.","He spends a lot of time playing games."],3,"spend 時間 + V-ing 正確；其他應改成 to hearing、to working、help crying。","g3"],
 ["We can't hold the meeting today. Let's ___.",["put off it","put it off","put it out","put out it"],1,"put off 是可分開的片語動詞，受詞是代名詞時要放中間：put it off。","g4"],
 ["I invited Mary to the dance, but she ___.",["turned me down","turned down me","looked into me","came up with me"],0,"turn down（拒絕）可分開，代名詞 me 要放中間。","g4"],
 ["The police are ___ the case to find out what happened.",["looking it into","looking into","putting off","turning down"],1,"look into（調查）不可分開，受詞放在後面。","g4"],
 ["We need a new idea. Who can ___ one?",["come up with","come with up","come up","come with"],0,"come up with（想出）三個字固定順序，不能拆開。","g4"],
 ["The plan sounds good, so the team decided to ___.",["carry out it","carry it out","look it into","put off it"],1,"carry out 可分開，代名詞 it 放中間：carry it out。","g4"],
 ["Don't put off ___ your homework.",["to do","do","doing","done"],2,"put off 後面接 V-ing。","g4"],
 ["The music is too loud. Please ___.",["turn down it","look into it","turn it into","turn it down"],3,"turn down 表示「調小聲」，代名詞 it 放中間。","g4"],
 ["There's something wrong with the computer. The engineer will ___ right away.",["look into it","look it into","put it off","turn it down"],0,"look into（調查）不可分開：look into it。put it off 是延期，和 right away 意思矛盾。","g4"],
 ["下列哪一個片語動詞「不能」把代名詞放在中間？",["put off","turn down","carry out","look into"],3,"look into 是動詞＋介係詞，不可分開，只能說 look into it。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S1_2_2_CLASS = {
g1:[
 {say:"高一同學好！今天學兩個讓你英文聽起來很成熟的句型：「似乎」和「據說」。先看黑板：{It seems that he is tired.} 可以改寫成 {He seems to be tired.}", board:[["It seems that he is tired.",["seems"]],["He seems to be tired.",["seems to be"]]]},
 {say:"改寫步驟：把 that 子句的主詞 he 拉到前面，動詞 is 改成 to be。appear 也是一樣的用法：{She appears to be happy.}", board:[["It appears that she is happy.",["appears"]],["She appears to be happy.",["appears to be"]]]},
 {say:"口訣先記！", chant:"似乎 seem、appear，後面接 to V！"},
 {say:"重點來了：如果「似乎」的那件事是以前發生的呢？{It seems that he was sick.} was 比 seems 早，就要用完成式不定詞：{He seems to have been sick.}", board:[["It seems that he was sick.",["was"]],["He seems to have been sick.",["to have been"]]]},
 {say:"時間口訣！", chant:"同時用 to V，更早用 to have p.p.！"},
 {ask:{say:"考考你！", q:"He seems ___ sick yesterday.", opts:["to be","to have been"], ans:1,
   ok:"厲害！yesterday 比現在更早，用 to have been。", bad:{0:"yesterday 是過去，比 seems 更早發生，要用 to have been。"},
   again:{q:"She seems ___ very busy now.", opts:["to be","to have been"], ans:0, exp:"now 和 seems 同時，用一般不定詞 to be。"}}},
 {say:"接著是「據說」。{It is said that she is rich.} 改寫成 {She is said to be rich.} 注意是 is said，因為她是「被人說」的。", board:[["It is said that she is rich.",["It is said"]],["She is said to be rich.",["is said to be"]]]},
 {say:"一樣看時間！{It is said that he lived here.} lived 比較早，改寫成 {He is said to have lived here.}", board:[["It is said that he lived here.",["lived"]],["He is said to have lived here.",["to have lived"]]]},
 {ask:{q:"The old man is said ___ a famous singer when he was young.", opts:["to be","to have been","to had been"], ans:1,
   ok:"讚！年輕時是過去，用 to have been。", bad:{0:"when he was young 是過去，要用完成式不定詞 to have been。",2:"陷阱！to 後面一定接原形，是 to have，不是 to had。"},
   again:{q:"The company ___ to be hiring new workers.", opts:["says","is said"], ans:1, exp:"「據說」要用被動 is said to V。"}}},
 {say:"加碼兩招：「似乎正在」用 to be V-ing：{The baby seems to be sleeping.}；被動的完成式用 to have been p.p.：{The museum is said to have been designed by him.}", board:[["The baby seems to be sleeping.",["to be sleeping"]],["The museum is said to have been designed by him.",["to have been designed"]]]},
 {ask:{say:"最後一題！", q:"Look! The baby appears ___. Be quiet.", opts:["to sleep","to be sleeping","to have slept"], ans:1,
   ok:"完美！「看起來正在睡」，用進行式不定詞 to be sleeping。", bad:{0:"現在正在睡，要用 to be sleeping 表示進行中。",2:"to have slept 是「似乎已經睡過了」，和「正在睡」不一樣。"},
   again:{q:"They appear ___ the game already.", opts:["to lose","to have lost"], ans:1, exp:"already 表示已經輸了，比 appear 更早，用 to have lost。"}}},
 {say:"不定詞進階過關！複習口訣：似乎 seem、appear，據說 be said，後面接 to V；同時用 to V，更早用 to have p.p.！", end:true}
],
g2:[
 {say:"今天的主角是一個不起眼的小字：It！英文很怕頭重腳輕，所以常常先放一個 It 當虛主詞。今天要背四個 It 慣用句型，第一個：{It is no use crying.} 哭也沒有用。", board:[["It is no use crying.",["no use","crying"]]]},
 {say:"It is no use 後面接 V-ing。它還有兩個雙胞胎：{There is no use (in) crying.} 和 {It is useless to cry.}", board:[["It is no use crying.",["crying"]],["There is no use crying.",["There"]],["It is useless to cry.",["useless","to cry"]]]},
 {say:"第二個：It is worth V-ing，「做……是值得的」：{It is worth visiting the museum.} 小心！worth 後面不能接 to V。", board:[["It is worth visiting the museum.",["worth visiting"]],["It is worth to visit the museum.",[],true]]},
 {say:"口訣！", chant:"no use、worth，後面都要 ing！"},
 {ask:{q:"This book is worth ___.", opts:["reading","to read","reading it"], ans:0,
   ok:"答對！worth 後面接 V-ing，而且主詞 This book 就是讀的東西，不能再加 it。", bad:{1:"worth 後面不接 to V，要接 V-ing。",2:"陷阱！主詞 This book 已經是 read 的受詞，後面不能再加 it。"},
   again:{q:"It is no use ___ about it.", opts:["to complain","complaining"], ans:1, exp:"It is no use + V-ing。"}}},
 {say:"第三個：It takes 人 時間 to V，「某人花多少時間做某事」：{It took me an hour to clean my room.} 換成人當主詞，就用 spend：{I spent an hour cleaning my room.}", board:[["It took me an hour to clean my room.",["took","to clean"]],["I spent an hour cleaning my room.",["spent","cleaning"]]]},
 {say:"這組超常考，口訣背起來！", chant:"It 當主詞用 take 加 to V，人當主詞用 spend 加 ing！"},
 {ask:{q:"It ___ me two hours to finish the report.", opts:["spent","took","cost"], ans:1,
   ok:"讚！It 當主詞、後面是 to V，用 took。", bad:{0:"spend 的主詞要是人：I spent two hours finishing it。",2:"cost 是花「錢」，花時間要用 take。"},
   again:{q:"I ___ two hours finishing the report.", opts:["spent","took"], ans:0, exp:"人當主詞＋V-ing，用 spent。"}}},
 {say:"第四個：It occurs to 人 that ...，「某人突然想到」：{It occurred to me that I had no cash.} 注意主詞是 It，「我」放在 to 後面，不能說 I occurred that。occur 的過去式要重複 r：occurred。", board:[["It occurred to me that I had no cash.",["occurred to me","that"]],["I occurred that I had no cash.",[],true]]},
 {ask:{say:"最後一題！", q:"It suddenly ___ to me that I had left my phone at home.", opts:["thought","occurred","remembered"], ans:1,
   ok:"太棒了！It occurred to me that ... 就是「我突然想到」。", bad:{0:"think 的主詞要是人，It 當主詞要用 occurred to me。",2:"remember 的主詞也要是人；這個句型固定用 occur。"},
   again:{q:"It occurred to Amy ___ she could sell her books online.", opts:["that","what"], ans:0, exp:"It occurs to 人 + that 子句。"}}},
 {say:"虛主詞 it 過關！口訣：no use、worth 後面都要 ing；It 當主詞用 take 加 to V，人當主詞用 spend 加 ing；突然想到用 It occurs to 人 that！", end:true}
],
g3:[
 {say:"今天要破解一個大魔王：介係詞的 to！先看這句：{I look forward to seeing you.} 咦？to 後面怎麼不是原形 see？", board:[["I look forward to seeing you.",["to seeing"]],["I look forward to see you.",[],true]]},
 {say:"因為 look forward to 的 to 是介係詞，介係詞後面要接名詞或動名詞。同樣的還有 be used to，「習慣於」：{She is used to getting up early.}", board:[["look forward to + V-ing",["to"]],["be used to + V-ing",["to"]]]},
 {say:"口訣！", chant:"期待、習慣的 to 是介係詞，後面要 ing！"},
 {ask:{q:"I am looking forward to ___ the exchange program.", opts:["join","joining"], ans:1,
   ok:"對！look forward to 的 to 是介係詞，接 joining。", bad:{0:"這個 to 是介係詞，後面要接 V-ing：joining。"},
   again:{q:"My sister is used to ___ alone.", opts:["traveling","travel"], ans:0, exp:"be used to + V-ing：習慣於。"}}},
 {say:"學測最愛的三胞胎陷阱！{He used to live here.} 以前住這裡；{He is used to living here.} 習慣住這裡；{Knives are used to cut food.} 刀子被用來切食物。", board:[["used to V：過去常常",["used to"]],["be used to V-ing：習慣於",["be used to"]],["be used to V：被用來",["be used to"]]]},
 {ask:{q:"Knives are used to ___ food.", opts:["cutting","cut","cuts"], ans:1,
   ok:"厲害！刀子是「被用來」切東西，這裡的 to 是不定詞，接原形 cut。", bad:{0:"刀子不會「習慣切東西」！這是被用來，要接原形 cut。",2:"to 後面要接原形動詞 cut，不加 s。"},
   again:{q:"He used to ___ in Tainan.", opts:["live","living"], ans:0, exp:"used to + 原形：以前常常、以前是。"}}},
 {say:"再來四個固定接 V-ing 的好朋友：{can't help laughing} 忍不住笑；{spend two hours studying} 花兩小時讀書；{have trouble sleeping} 睡不好；{There is no telling} 無法預料。", board:[["I couldn't help laughing.",["help laughing"]],["I spent two hours studying.",["spent","studying"]],["He has trouble sleeping.",["trouble sleeping"]],["There is no telling what will happen.",["no telling"]]]},
 {say:"這四個一起背！", chant:"忍不住、花時間、有困難、不可能，通通加 ing！"},
 {ask:{say:"最後一題！", q:"Tom has trouble ___ English words.", opts:["remember","to remember","remembering"], ans:2,
   ok:"完美！have trouble + V-ing。", bad:{0:"have trouble 後面不能接原形，要接 V-ing。",1:"have trouble 後面不接 to V，要接 remembering。"},
   again:{q:"When I saw the video, I couldn't help ___.", opts:["laughing","to laugh"], ans:0, exp:"can't help + V-ing：忍不住。"}}},
 {say:"動名詞慣用語過關！口訣：期待、習慣的 to 是介係詞，後面要 ing；忍不住、花時間、有困難、不可能，通通加 ing！", end:true}
],
g4:[
 {say:"今天學片語動詞！像 {put off} 延期、{turn down} 拒絕、{carry out} 執行、{look into} 調查、{come up with} 想出。這些字組合在一起，意思就變了。", board:[["put off = 延期",["put off"]],["turn down = 拒絕",["turn down"]],["carry out = 執行",["carry out"]],["look into = 調查",["look into"]],["come up with = 想出",["come up with"]]]},
 {say:"片語動詞分兩種。第一種是「動詞＋副詞」，可以分開：{put off the meeting} 和 {put the meeting off} 都對。", board:[["put off the meeting",["put off"]],["put the meeting off",["put","off"]]]},
 {say:"但是！受詞如果是代名詞 it、them、me，一定要夾在中間：{put it off}，不能說 put off it。", board:[["put it off",["it"]],["put off it",[],true]]},
 {say:"口訣！", chant:"代名詞，夾中間：put it off、turn it down、carry it out！"},
 {ask:{q:"We can't have the meeting today. Let's ___.", opts:["put off it","put it off"], ans:1,
   ok:"答對！代名詞 it 要夾在中間：put it off。", bad:{0:"put off 是可分開的，代名詞 it 一定要放中間。"},
   again:{q:"The music is too loud. Please ___.", opts:["turn it down","turn down it"], ans:0, exp:"turn down 可分開，代名詞 it 放中間。"}}},
 {say:"第二種是「動詞＋介係詞」，不能分開！{look into the problem}，受詞是代名詞也一樣放後面：{look into it}，不能說 look it into。", board:[["look into it",["into it"]],["look it into",[],true]]},
 {say:"三個字的 come up with 也不能拆：{come up with an idea}、{come up with it}。", board:[["come up with an idea",["come up with"]],["come up with it",["come up with"]]]},
 {say:"第二個口訣！", chant:"look into、come up with，黏在一起不分開！"},
 {ask:{q:"There's a problem with the computer. The engineer will ___.", opts:["look it into","look into it","look into"], ans:1,
   ok:"讚！look into 不可分開，受詞 it 放後面。", bad:{0:"look into 是動詞＋介係詞，不能把 it 夾在中間。",2:"look into 是及物的，後面要有受詞，「調查它」要說 look into it。"},
   again:{q:"We need a new idea. Who can ___ one?", opts:["come up with","come with up"], ans:0, exp:"come up with 三個字順序固定，不能拆開。"}}},
 {say:"最後兩個細節：put off 後面接動名詞：{Don't put off doing your homework.} 片語動詞也能用被動，副詞介係詞不能丟：{The game was put off.}", board:[["Don't put off doing your homework.",["put off doing"]],["The game was put off.",["was put off"]]]},
 {ask:{say:"最後一題！", q:"Don't put off ___ your homework.", opts:["to do","doing","do"], ans:1,
   ok:"完美！put off + V-ing：別拖延寫作業。", bad:{0:"put off 後面不接 to V，要接 V-ing。",2:"put off 的 off 後面要接 V-ing，不能接原形。"},
   again:{q:"The plan was good, so they decided to ___.", opts:["carry out it","carry it out"], ans:1, exp:"carry out 可分開，代名詞 it 放中間。"}}},
 {say:"片語動詞過關！口訣：代名詞夾中間，put it off、turn it down、carry it out；look into、come up with 黏在一起不分開。高一下第二次段考的文法全部上完了，加油！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S1_2_2_ROOTS = [
  {id:"r1", title:"字首 ex- / out- / over- / under-"},
  {id:"r2", title:"字根 ven / vent（來）"},
  {id:"r3", title:"字根 cred（相信）"},
  {id:"r4", title:"字根 mov / mot（動）"}
];
const S1_2_2_ROOT_CLASS = {
r1:[
 {say:"高一同學好！今天安安老師帶你認識四個表示「方向、程度」的字首：ex、out、over、under。先看最常見的 <<ex>>，意思是「向外」。", board:[["ex + port = export",["ex"],false,true],["ex + change = exchange",["ex"],false,true]]},
 {say:"{exceed} 走到界線外面，就是超過；{exclude} 關在門外，就是排除；{expand} 向外展開，就是擴大。", board:[["ex + ceed = exceed",["ex"],false,true],["ex + clude = exclude",["ex"],false,true],["ex + pand = expand",["ex"],false,true]]},
 {say:"口訣！", chant:"ex 往外走：超過、排除、擴大！"},
 {ask:{q:"ex（向外）＋ clude（關閉）＝ exclude，意思是？", opts:["包括","排除","結論"], ans:1,
   ok:"對！關在門外就是排除。", bad:{0:"「包括」是 include，in 是往裡面關進來。",2:"「結論」是 conclude，con 是一起。"},
   again:{q:"ex ＋ pand（展開）＝ expand，意思是？", opts:["擴大","縮小","付錢"], ans:0, exp:"向外展開，就是擴大。"}}},
 {say:"<<out>> 也是「出來、向外」：{outcome} 最後跑出來的東西，就是結果；{output} 放出來的東西，就是產量；{outstanding} 站出來、比別人突出，就是傑出的。", board:[["out + come = outcome",["out"],false,true],["out + put = output",["out"],false,true],["out + stand + ing = outstanding",["out"],false,true]]},
 {ask:{q:"out ＋ come ＝ outcome，意思是？", opts:["收入","結果","出口"], ans:1,
   ok:"讚！最後跑出來的東西就是結果。", bad:{0:"收入是 income，in 是進來喔。",2:"出口是 exit 或 export。"},
   again:{q:"out ＋ put ＝ output，意思是？", opts:["產量","放進去","輸入"], ans:0, exp:"放出來的東西，就是產量、輸出。輸入是 input。"}}},
 {say:"最後一組是反義字首：<<over>> 是「超過、太多」，<<under>> 是「低於、在下面、不足」。{overspend} 花太多；{underpaid} 薪水太少；{underestimate} 估計太低。", board:[["over + spend = overspend",["over"],false,true],["under + paid = underpaid",["under"],false,true],["under + estimate = underestimate",["under"],false,true]]},
 {say:"反義口訣！", chant:"over 太多，under 太少！"},
 {say:"小心，有些字的意思要轉個彎：{overlook} 是看過頭、沒看到，所以是「忽略」；{undergo} 是從底下走過、承受下來，所以是「經歷」。", board:[["over + look = overlook（忽略）",["over"],false,true],["under + go = undergo（經歷）",["under"],false,true]]},
 {ask:{say:"最後一題！", q:"Many nurses feel they are ＿＿.（薪水太低）", opts:["overpaid","underpaid","outpaid"], ans:1,
   ok:"完美！under 表示「低於、不足」，underpaid 就是薪水太低。", bad:{0:"over 是「太多」，overpaid 是薪水過高。",2:"英文沒有 outpaid 這個說法，薪水太低用 underpaid。"},
   again:{q:"I always ＿＿ when I go shopping.（花太多錢）", opts:["overspend","underspend"], ans:0, exp:"over 是「太多」：overspend 花太多。"}}},
 {say:"字首過關！口訣：ex 往外走、out 跑出來、over 太多、under 太少。", end:true}
],
r2:[
 {say:"今天學一個超好用的字根：<<ven>> 和 <<vent>>，意思都是「來」。學會它，好多單字都能猜出來！", board:[["ven / vent = 來",["ven","vent"],false,true]]},
 {say:"你在國中學過 {event}，事情「跑出來」就是事件；{prevent} 事先來擋住，就是預防。今天加上它的名詞 {prevention}。", board:[["e + vent = event",["vent"],false,true],["pre + vent + ion = prevention",["vent"],false,true]]},
 {say:"口訣！", chant:"ven、vent，來來來！"},
 {ask:{q:"pre（事先）＋ vent（來）＋ ion ＝ prevention，意思是？", opts:["預防","發明","事件"], ans:0,
   ok:"對！事先過來擋住，就是預防。Prevention is better than cure！", bad:{1:"發明是 invention，in 是想法跑進來。",2:"事件是 event，e 是向外跑出來。"},
   again:{q:"in（進入）＋ vent（來）＋ ion ＝ invention，意思是？", opts:["發明","預防"], ans:0, exp:"想法跑進腦子裡來，就是發明。"}}},
 {say:"{convention}：con 是「一起」，大家一起來，就是大會；大家都一起這樣做，就變成慣例。", board:[["con + vent + ion = convention",["vent"],false,true]]},
 {say:"{venture}：它是 adventure 的縮短版，朝著未知走來，就是冒險事業、創業。{revenue}：re 是「回來」，回到口袋裡來的錢，就是營收。", board:[["vent + ure = venture",["vent"],false,true],["re + ven + ue = revenue",["ven"],false,true]]},
 {ask:{q:"re（回來）＋ ven（來）＋ ue ＝ revenue，意思最可能是？", opts:["創業","營收","重新來過"], ans:1,
   ok:"讚！回到口袋裡來的錢，就是營收。", bad:{0:"創業是 venture，沒有 re 喔。",2:"revenue 不是重來，是「錢回來」：營收。"},
   again:{q:"con（一起）＋ vent ＋ ion ＝ convention，意思是？", opts:["大會","發明"], ans:0, exp:"大家一起來，就是大會。"}}},
 {say:"最後一個：{adventure} 朝著未知走來，就是冒險，加上 <<ous>>（充滿……的）就變成 {adventurous}，愛冒險的。", board:[["ad + vent + ur + ous = adventurous",["vent"],false,true]]},
 {say:"整理口訣！", chant:"e 跑出來是事件，pre 先來是預防，con 一起來是大會，re 回來是營收！"},
 {ask:{say:"最後一題！", q:"My ＿＿ sister loves trying new things.（愛冒險的）", opts:["adventure","adventurous","advent"], ans:1,
   ok:"完美！修飾名詞 sister 要用形容詞 adventurous。", bad:{0:"adventure 是名詞「冒險」，修飾 sister 要用形容詞。",2:"advent 不是「愛冒險的」，要用 adventurous。"},
   again:{q:"My cousin started a business ＿＿ after college.（創業）", opts:["venture","revenue"], ans:0, exp:"vent 來＋ure：朝未知走來的冒險事業，venture。"}}},
 {say:"字根 ven、vent 過關！口訣：ven、vent 來來來；事件、預防、發明、大會、營收、創業都是它的家人！", end:true}
],
r3:[
 {say:"今天的字根很短，但超實用：<<cred>>，意思是「相信」。", board:[["cred = 相信",["cred"],false,true]]},
 {say:"第一個字：{credit}。銀行「相信」你會還錢，所以給你信用，{credit card} 就是信用卡。", board:[["cred + it = credit",["cred"],false,true]]},
 {say:"credit 還有兩個意思：大家「相信」是你的功勞，就是 credit 功勞；學校「相信」你修完了課，給你 credit 學分。", board:[["take credit for = 把功勞攬在身上",["credit"]],["earn credits = 修學分",["credits"]]]},
 {say:"口訣！", chant:"cred 相信你：信用、功勞、修學分！"},
 {ask:{q:"You can pay by ＿＿ card.", opts:["credit","credible","incredible"], ans:0,
   ok:"對！credit card 是信用卡。", bad:{1:"credible 是形容詞「可信的」，信用卡是 credit card。",2:"incredible 是「難以置信的」，信用卡是 credit card。"},
   again:{q:"字根 cred 的意思是？", opts:["相信","來","動"], ans:0, exp:"cred 是「相信」，像 credit、credible。"}}},
 {say:"加上我們學過的字尾 <<ible>>（可……的），{credible} 就是「可以相信的、可信的」。", board:[["cred + ible = credible",["cred"],false,true]]},
 {say:"再加上否定字首 <<in>>，{incredible} 就是「不能相信的」，也就是難以置信、好得驚人！", board:[["in + cred + ible = incredible",["in","cred"],false,true]]},
 {ask:{q:"in（不）＋ cred（相信）＋ ible（可……的）＝ incredible，意思是？", opts:["可信的","難以置信的","信用"], ans:1,
   ok:"讚！不能相信的，就是難以置信的。", bad:{0:"in 是「不」，所以是「不可信」→ 難以置信。",2:"信用是 credit，incredible 是形容詞。"},
   again:{q:"Is this news report ＿＿?（可信的）", opts:["credible","incredible"], ans:0, exp:"可以相信的：credible。"}}},
 {say:"同一個字根可以這樣一層一層疊上去，這就是字根學習的威力！", board:[["cred → credit → credible → incredible",["cred"],false,true]]},
 {say:"疊疊樂口訣！", chant:"cred 相信，ible 可以，in 不行！"},
 {ask:{say:"最後一題！", q:"The view from the mountain was ＿＿! I couldn't believe my eyes.", opts:["credible","credit","incredible"], ans:2,
   ok:"完美！美到不敢相信，就是 incredible。", bad:{0:"credible 是「可信的」，這裡要表達美到不敢相信。",1:"credit 是名詞，這裡需要形容詞 incredible。"},
   again:{q:"The team leader took all the ＿＿ for our work.（功勞）", opts:["credit","credible"], ans:0, exp:"take credit for：把功勞攬在身上。"}}},
 {say:"字根 cred 過關！口訣：cred 相信你，信用、功勞、修學分；ible 可以，in 不行！", end:true}
],
r4:[
 {say:"最後一課，字根 <<mov>> 和 <<mot>>，意思都是「動」！你早就認識 {move} 了，它就是這個字根的代表。", board:[["mov / mot = 動",["mov","mot"],false,true],["move",["mov"],false,true]]},
 {say:"<<mov>> 家族：{move} 動、{movement} 動作、{remove} 移開。國中和高二都會遇到它們。", board:[["mov + ement = movement",["mov"],false,true],["re + move = remove",["mov"],false,true]]},
 {say:"<<mot>> 家族更大！{motion} 動的狀態，就是動作；{emotion}：e 是向外，心裡的東西往外動，就是情緒。", board:[["mot + ion = motion",["mot"],false,true],["e + mot + ion = emotion",["mot"],false,true]]},
 {say:"口訣！", chant:"mov、mot，動一動！"},
 {ask:{q:"e（向外）＋ mot（動）＋ ion ＝ emotion，意思是？", opts:["動作","情緒","馬達"], ans:1,
   ok:"對！心裡的感覺往外動出來，就是情緒。", bad:{0:"動作是 motion，沒有 e 喔。",2:"馬達是 motor。"},
   again:{q:"emotion 的形容詞是？", opts:["emotional","emotionful"], ans:0, exp:"加 -al 變形容詞：emotional。"}}},
 {say:"{promotion}：pro 是向前，往前移動，就是升遷；商品往前推，就是促銷。{motive}：讓你動起來的原因，就是動機；{motivation} 就是動力。", board:[["pro + mot + ion = promotion",["mot"],false,true],["mot + ive = motive",["mot"],false,true],["motiv + ation = motivation",["mot"],false,true]]},
 {ask:{q:"pro（向前）＋ mot（動）＋ ion ＝ promotion，意思是？", opts:["升遷","退休","動機"], ans:0,
   ok:"讚！在公司往前移動，就是升遷。", bad:{1:"退休是 retire。",2:"動機是 motive。"},
   again:{q:"讓人「動起來」的原因是？", opts:["motive","motion"], ans:0, exp:"motive 是動機；motion 是動作。"}}},
 {say:"最後一個：{remote}，re 是往後、離開，移動到很遠的地方，就是遙遠的、偏遠的。{remote control} 遙控器，在遠處就能讓電視動起來！", board:[["re + mote = remote",["mot"],false,true]]},
 {say:"總複習口訣！", chant:"e 往外動是情緒，pro 往前動是升遷，re 動到遠方是偏遠！"},
 {ask:{say:"最後一題！", q:"Volunteers teach children in ＿＿ villages.（偏遠的）", opts:["remote","promote","motive"], ans:0,
   ok:"完美！移動到很遠的地方，remote 偏遠的。", bad:{1:"promote 是動詞「升遷、推廣」，這裡要形容詞「偏遠的」。",2:"motive 是名詞「動機」，這裡要形容詞 remote。"},
   again:{q:"Lack of ＿＿ is a common problem among students.（動力）", opts:["motivation","motion"], ans:0, exp:"讓人動起來的力量：motivation。"}}},
 {say:"字根過關！口訣：mov、mot 動一動；e 往外是情緒，pro 往前是升遷，re 到遠方是偏遠。字根字首全部上完了，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創） ---------- */
Object.assign(ILLUS2, {
  architect: () => svgWrap("#eef6ff", `<rect x="10" y="18" width="88" height="68" rx="3" fill="#3b82f6"/><path d="M16 24 H92 M16 80 H92" stroke="#93c5fd" stroke-width="1" stroke-dasharray="3 3"/><path d="M24 74 V46 L54 28 L84 46 V74 Z" fill="none" stroke="#fff" stroke-width="2"/><rect x="46" y="54" width="16" height="20" fill="none" stroke="#fff" stroke-width="2"/><rect x="30" y="50" width="10" height="9" fill="none" stroke="#fff" stroke-width="1.5"/><rect x="68" y="50" width="10" height="9" fill="none" stroke="#fff" stroke-width="1.5"/>` + `<rect x="0" y="104" width="160" height="16" fill="#cbd5e1"/>` + P({x:126, y:108, s:.8, hair:"short", hc:"#2b2b2b", oc:"#f59e0b", pose:"point", acc:["glasses"], mood:"open"})),
  surgeon: () => svgWrap("#ecfeff", `<rect x="0" y="98" width="160" height="22" fill="#a5f3fc"/>` + P({x:62, y:106, s:.95, hair:"short", hc:"#2b2b2b", coat:true, acc:["steth"], pose:"thumb", mood:"smile"}) + `<rect x="104" y="34" width="44" height="30" rx="4" fill="#fff" stroke="#22d3ee" stroke-width="2"/><path d="M108 50 H118 L122 41 L128 58 L132 50 H144" stroke="#ef4444" stroke-width="2" fill="none"/>` + spark(24, 26, .8, "#22d3ee") + spark(146, 84, .6, "#22d3ee")),
  savings: () => svgWrap("#fdf2f8", `<ellipse cx="78" cy="72" rx="40" ry="28" fill="#f9a8d4"/><circle cx="114" cy="66" r="13" fill="#f9a8d4"/><ellipse cx="122" cy="69" rx="5.5" ry="4.5" fill="#f472b6"/><circle cx="120" cy="68" r="1" fill="#9d174d"/><circle cx="124" cy="68" r="1" fill="#9d174d"/><circle cx="108" cy="60" r="2.4" fill="${INK}"/><path d="M60 96 V106 M94 96 V106" stroke="#f472b6" stroke-width="7" stroke-linecap="round"/><path d="M98 46 L104 36 L108 48 Z" fill="#f472b6"/><path d="M38 70 Q28 64 32 56" stroke="#f472b6" stroke-width="3" fill="none"/><rect x="68" y="44" width="22" height="4" rx="2" fill="#9d174d"/>` + `<circle cx="79" cy="22" r="11" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>` + txt(79, 27, "$", 13, "#92400e") + O.arrow(79, 38, false, "#d97706") + spark(130, 26, .8) + spark(30, 30, .6)),
  campaign: () => svgWrap("#fef9c3", ground() + kid(50, {pose:"cheer", mood:"open"}) + girlP(110, {pose:"cheer", mood:"open"}) + `<path d="M73 54 L66 34 M87 54 L94 34" stroke="#a16207" stroke-width="2.5" stroke-linecap="round"/><rect x="34" y="8" width="92" height="28" rx="5" fill="#fff" stroke="#f59e0b" stroke-width="2"/>` + txt(80, 27, "SAVE THE OCEAN", 10, "#2563eb") + heart(20, 40, .6) + spark(142, 44, .7))
});

registerUnit("s1-2-2", {
  name:"高一 下學期 第二次段考",
  sub:"不定詞進階（seem／be said to V、to have p.p.）、虛主詞 it 慣用句型、動名詞慣用語、片語動詞",
  words:S1_2_2_WORDS, grammar:S1_2_2_GRAMMAR, quiz:S1_2_2_QUIZ,
  classes:Object.assign({}, S1_2_2_CLASS, S1_2_2_ROOT_CLASS), phonics:S1_2_2_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會字首、字根、字尾，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
