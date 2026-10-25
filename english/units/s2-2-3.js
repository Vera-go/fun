/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高二下學期 期末考（通用範圍）
   主題：時間管理與效率、健康長壽與生活型態、科技倫理與未來
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"（沒有字根可拆的字留空字串，改用 MEMO）
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S2_2_3_WORDS = [
/* ---------- 時間管理與效率 ---------- */
["punctual","adj.","準時的",[
 ["You had better be punctual for the interview.","面試你最好準時到。","had better + 原形動詞 表示「最好……」，語氣比 should 強，常帶有「不然會有麻煩」的意味。"],
 ["By the time the manager arrived, every punctual worker had already started.","經理到的時候，每位準時的員工都已經開工了。","by the time + 過去式，主要子句用過去完成式 had + p.p.，表示在那之前就已經完成。"],
 ["Each of the students is expected to be punctual.","每位學生都應該準時。","Each of + 複數名詞 當主詞時，真正的主詞是 Each，動詞用單數 is。"]],
 "punct=點|-ual=形容詞字尾","剛好落在約定的時間點上 → 準時的","@punctual"],
["procrastinate","v.","拖延",[
 ["Students who procrastinate may well regret it before the exam.","愛拖延的學生考前很可能會後悔。","may well + 原形動詞 表示「很可能……」；who 引導關係子句修飾 Students。"],
 ["I would rather finish my homework now than procrastinate until midnight.","我寧願現在寫完作業，也不要拖到半夜。","would rather A than B：A 和 B 都用原形動詞（finish、procrastinate）。"],
 ["No sooner had he sat down to study than he started to procrastinate by checking his phone.","他一坐下來要讀書，就開始滑手機拖延。","No sooner had + 主詞 + p.p. + than + 過去式：「一……就……」；否定副詞放句首要倒裝。"]],
 "pro-=往前|crastin=明天|-ate=動詞字尾","把事情往前推到明天 → 拖延","🐌|拖延"],
["prioritize","v.","排優先順序；優先處理",[
 ["You had better prioritize your tasks before the exam week.","段考週前你最好先排好事情的優先順序。","had better + 原形動詞；prioritize 是 priority（優先）的動詞。"],
 ["A number of students prioritize sleep over games.","許多學生把睡眠排在遊戲之前。","a number of + 複數名詞 表示「許多」，動詞用複數；prioritize A over B 表示「把 A 排在 B 前面」。"],
 ["The moment she prioritized her health, she felt much better.","她一把健康放在第一位，就覺得好多了。","the moment + 子句 = as soon as，表示「一……就……」，後面接一般語序，不用倒裝。"]],
 "priorit=優先（priority）|-ize=使……","使成為優先 → 排優先順序","🥇|優先"],
["multitask","v.","一心多用；同時做多件事",[
 ["You may well make more mistakes if you multitask.","一心多用的話，你很可能會犯更多錯。","may well + 原形動詞 表示「很可能」。"],
 ["The number of teenagers who multitask while studying is rising.","讀書時一心多用的青少年人數正在增加。","the number of + 複數名詞 表示「……的數量」，主詞是 the number（單數），動詞用 is。"],
 ["I would rather focus on one thing than multitask.","我寧願專心做一件事，也不要一心多用。","would rather + 原形 + than + 原形。"]],
 "multi-=多|task=任務","同時做很多任務 → 一心多用","🤹|一心多用"],
["efficiency","n.","效率",[
 ["Working in short sessions can improve efficiency.","分段短時間工作可以提升效率。","動名詞片語 Working in short sessions 當主詞，視為單數。"],
 ["Efficiency, as well as accuracy, is important in this job.","這份工作中，效率和準確度都很重要。","A as well as B 當主詞，動詞看 A：Efficiency 是單數，所以用 is。"],
 ["You cannot pay too much attention to efficiency during exams.","考試時再怎麼注意效率也不為過。","cannot ... too ... 表示「再……也不為過」，不是「不能太……」。"]],
 "ef-=向外|fic=做|-iency=名詞字尾","把事情做出來的程度 → 效率","⚡|效率"],
["allocate","v.","分配；撥出",[
 ["Every student needs to allocate time for review.","每個學生都需要分配時間複習。","every + 單數名詞 當主詞，動詞用單數 needs。"],
 ["The school allocated more money to the library.","學校撥了更多經費給圖書館。","allocate A to B 表示「把 A 分配給 B」。"],
 ["By the time the money was allocated, the project had been delayed.","等到經費撥下來時，計畫已經延誤了。","by the time + 過去式，主要子句用過去完成式；這裡是被動 had been + p.p.。"]],
 "al-=朝向|loc=地方|-ate=動詞字尾","把東西放到各自的地方 → 分配","📊|分配"],
["interval","n.","間隔；中場休息",[
 ["The buses come at ten-minute intervals.","公車每十分鐘來一班。","at ... intervals 表示「每隔……」；ten-minute 當形容詞時 minute 不加 s。"],
 ["You had better take a break at regular intervals.","你最好每隔一段時間就休息一下。","had better + 原形動詞；at regular intervals 表示「定時地」。"],
 ["Hardly had the interval begun when the audience rushed out for snacks.","中場休息一開始，觀眾就衝出去買點心。","Hardly had + 主詞 + p.p. + when + 過去式：「一……就……」；hardly 放句首要倒裝。"]],
 "inter-=在……之間|val=牆","兩道牆之間的空隙 → 間隔","⏱️|間隔"],
["duration","n.","持續時間；期間",[
 ["Please stay in your seat for the duration of the flight.","飛行全程請待在座位上。","for the duration of + 名詞 表示「在……的整段期間」。"],
 ["The duration of the classes is fifty minutes.","每節課的時間是五十分鐘。","主詞是 The duration（單數），動詞用 is，不受 of 後面的 the classes 影響。"],
 ["The duration of sleep, along with its quality, affects our health.","睡眠的長短和品質都會影響健康。","A along with B 當主詞，動詞看 A（The duration，單數），所以用 affects。"]],
 "dur=持續|-ation=名詞字尾","持續的長度 → 持續時間","⏳|持續時間"],
["frequent","adj.","頻繁的；經常的",[
 ["Frequent breaks may well help you study longer.","經常休息很可能讓你讀得更久。","may well + 原形動詞 表示「很可能」；help + 人 + 原形動詞。"],
 ["Neither the teacher nor the students were happy about the frequent changes.","老師和學生都不滿意這些頻繁的變動。","neither A nor B 當主詞，動詞看靠近的 B（the students，複數），用 were。"],
 ["He is a frequent visitor to the library.","他是圖書館的常客。","a frequent visitor 表示「常客」；名詞 frequency 是「頻率」。"]],
 "","","🔁|頻繁"],
["occasional","adj.","偶爾的",[
 ["Occasional exercise is better than none, but you had better do it regularly.","偶爾運動總比不運動好，但你最好規律地運動。","had better + 原形動詞；none 在這裡指 no exercise。"],
 ["Except for an occasional cough, he feels fine.","除了偶爾咳嗽之外，他感覺很好。","except for + 名詞 表示「除了……之外」。"],
 ["We might as well take an occasional walk instead of sitting all day.","我們不妨偶爾散散步，而不是整天坐著。","might as well + 原形動詞 表示「不妨……、倒不如……」；instead of + V-ing。"]],
 "occasion=場合|-al=形容詞字尾","只在某些場合才發生 → 偶爾的","🌤️|偶爾"],
["accomplish","v.","完成；達成",[
 ["You cannot accomplish much if you keep checking your phone.","如果你一直看手機，就做不了多少事。","一般條件句；keep + V-ing 表示「一直……」。"],
 ["Hardly had she accomplished one goal when she set another.","她一達成一個目標，就馬上設定下一個。","Hardly had + 主詞 + p.p. + when + 過去式；先發生的用過去完成式。"],
 ["By the time he turns thirty, he will have accomplished his dream.","等到他三十歲時，他將已經完成夢想。","by the time + 現在式（代替未來），主要子句用未來完成式 will have + p.p.。"]],
 "ac-=加強|com-=完全|pl=填滿|-ish=動詞字尾","把事情完全填滿做好 → 完成","✅|達成"],
["tackle","v.","處理；著手解決",[
 ["Let's tackle the hardest problem first.","我們先處理最難的問題吧。","Let's + 原形動詞 表示提議；tackle a problem 是常見搭配。"],
 ["The moment the problem appeared, the team tackled it.","問題一出現，團隊就著手處理。","the moment + 子句 表示「一……就……」。"],
 ["Neither the students nor the teacher knows how to tackle this question.","學生和老師都不知道怎麼解這題。","neither A nor B 的動詞看靠近的 B（the teacher，單數），用 knows。"]],
 "","","🛠️|處理"],
["hasty","adj.","倉促的；草率的",[
 ["Don't make a hasty decision; you had better think it over.","別倉促做決定，你最好仔細考慮。","had better + 原形動詞；think it over 表示「仔細考慮」，代名詞 it 要放中間。"],
 ["I would rather take my time than make a hasty choice.","我寧願慢慢來，也不要倉促做選擇。","would rather A than B；take one's time 表示「慢慢來」。"],
 ["Had he not been so hasty, he wouldn't have made the mistake.","要不是他那麼匆忙，他就不會犯錯了。","與過去事實相反的假設可以省略 if 並倒裝：Had he not been = If he had not been。"]],
 "hast=匆忙（haste）|-y=形容詞字尾","匆匆忙忙的 → 倉促的","🏃|匆忙"],
["leisure","n.","閒暇；空閒",[
 ["What do you do in your leisure time?","你閒暇時間都做什麼？","leisure time 表示「空閒時間」；leisure 不可數。"],
 ["A number of leisure activities are offered at the community center.","社區中心提供許多休閒活動。","a number of + 複數名詞，動詞用複數 are；are offered 是被動語態。"],
 ["We might as well enjoy our leisure since the exam is over.","既然考完了，我們不妨好好享受閒暇。","might as well = 不妨；since 在這裡表示「既然」。"]],
 "","","🏖️|休閒"],
["spare","adj./v.","空閒的；撥出（時間）",[
 ["Could you spare me a few minutes?","你能撥幾分鐘給我嗎？","spare + 人 + 時間 表示「撥出時間給某人」。"],
 ["Every spare moment he has is spent on reading.","他每一刻空閒都花在閱讀上。","every + 單數名詞 當主詞，動詞用單數 is spent。"],
 ["You might as well use your spare time to learn a new skill.","你不妨利用空閒時間學新技能。","might as well + 原形動詞；spare time = free time。"]],
 "","","🕰️|空閒"],
["idle","adj.","閒置的；無所事事的",[
 ["Don't let your brain stay idle during the summer vacation.","暑假時別讓腦袋閒著。","let + 受詞 + 原形動詞。"],
 ["The machines, along with the workers, were idle during the strike.","罷工期間，機器和工人都閒置了。","A along with B 動詞看 A（The machines，複數），用 were。"],
 ["You had better not sit idle all weekend.","你最好別整個週末都無所事事。","had better 的否定是 had better not + 原形動詞，not 放在 better 後面。"]],
 "","","💤|閒著"],
["prompt","adj./v.","迅速的；促使",[
 ["Thank you for your prompt reply.","謝謝你的即時回覆。","prompt 當形容詞表示「迅速的、及時的」。"],
 ["The moment the alarm rang, the students made a prompt exit.","警報一響，學生就迅速離開了。","the moment + 子句 表示「一……就……」。"],
 ["His poor grades prompted him to change his study habits.","成績不好促使他改變讀書習慣。","prompt + 人 + to V 表示「促使某人做某事」。"]],
 "","","📨|迅速"],
["overdue","adj.","過期的；遲來的",[
 ["This library book is two weeks overdue.","這本圖書館的書過期兩週了。","時間 + overdue 表示「逾期多久」。"],
 ["You had better return the overdue books today.","你最好今天就把過期的書還掉。","had better + 原形動詞。"],
 ["The number of overdue assignments was surprising.","遲交的作業數量令人驚訝。","the number of + 複數名詞，主詞是 number，動詞用單數 was。"]],
 "over-=超過|due=到期的","超過到期日 → 過期的","📕|逾期"],
["meanwhile","adv.","同時；在此期間",[
 ["Dad was cooking dinner; meanwhile, I was setting the table.","爸爸在煮晚餐，同時我在擺餐具。","meanwhile 是副詞，不是連接詞，連接兩個句子時前面要用分號或句號。"],
 ["The water will take ten minutes to boil. Meanwhile, you might as well chop the vegetables.","水要十分鐘才會滾，這段時間你不妨切切菜。","might as well = 不妨。"],
 ["Meanwhile, each of the team members was working on a different task.","同時，每位組員都在做不同的工作。","each of + 複數名詞，動詞用單數 was。"]],
 "mean=中間|while=一段時間","中間這段時間 → 同時","🔀|同時"],
["simultaneous","adj.","同時的",[
 ["The two events were simultaneous.","這兩件事是同時發生的。","simultaneous 放在 be 動詞後面當補語。"],
 ["Simultaneous interpretation requires great concentration.","同步口譯需要高度專注。","simultaneous interpretation 是「同步口譯」。"],
 ["The moment the whistle blew, there was a simultaneous cheer from both sides.","哨聲一響，雙方同時歡呼。","the moment = as soon as；blow 的過去式是 blew。"]],
 "simul=同時|-taneous=形容詞字尾","同一時間發生的 → 同時的","👯|同時"],
["productive","adj.","有生產力的；有效率的",[
 ["I feel more productive in the morning.","我早上覺得比較有效率。","feel + 形容詞；多音節形容詞比較級用 more。"],
 ["Neither my brother nor I am productive after lunch.","我哥哥和我午餐後都沒什麼效率。","neither A nor B 的動詞看靠近的 B（I），所以用 am。"],
 ["A short nap may well make you more productive.","小睡一下很可能讓你更有效率。","may well + 原形動詞；make + 受詞 + 形容詞。"]],
 "pro-=向前|duct=引導|-ive=形容詞字尾","能引導出成果的 → 有生產力的","📈|有效率"],
/* ---------- 健康長壽與生活型態 ---------- */
["longevity","n.","長壽",[
 ["Scientists study the secrets of longevity.","科學家研究長壽的祕訣。","the secret(s) of + 名詞 表示「……的祕訣」。"],
 ["A healthy diet, together with regular exercise, contributes to longevity.","健康飲食加上規律運動有助於長壽。","A together with B 動詞看 A（A healthy diet，單數），用 contributes；contribute to 表示「有助於」。"],
 ["Okinawa is famous for the longevity of its people.","沖繩以居民長壽聞名。","be famous for + 名詞 表示「以……聞名」。"]],
 "long=長的|ev=年歲|-ity=名詞字尾","年歲很長 → 長壽","🐢|長壽"],
["aging","n./adj.","老化；變老的",[
 ["Aging is a natural process.","老化是自然的過程。","動名詞 Aging 當主詞，動詞用單數 is。"],
 ["The aging population, as well as low birth rates, is a challenge for Taiwan.","高齡化人口和低出生率都是台灣的挑戰。","A as well as B 動詞看 A（The aging population，單數），用 is。"],
 ["You cannot start protecting your skin from aging too early.","防止皮膚老化，再早開始都不嫌早。","cannot ... too ... 表示「再……也不為過」：越早開始越好。"]],
 "ag=年齡（age）|-ing=名詞字尾","年齡增長 → 老化","👵|老化"],
["moderate","adj.","適度的；中等的",[
 ["Moderate exercise is good for people of all ages.","適度運動對各年齡層的人都好。","moderate 表示「不多也不少、適度的」。"],
 ["You had better drink coffee in moderate amounts.","你最好適量喝咖啡。","had better + 原形動詞；in moderate amounts 表示「適量」。"],
 ["I would rather do moderate exercise every day than train hard once a week.","我寧願每天適度運動，也不要一週只拚命練一次。","would rather A than B，A、B 都是原形動詞片語。"]],
 "moder=適度|-ate=形容詞字尾","有節制、適度的","⚖️|適度"],
["nutritious","adj.","營養的",[
 ["Each of these meals is nutritious and cheap.","這些餐點每一份都又營養又便宜。","each of + 複數名詞，動詞用單數 is。"],
 ["You had better eat a nutritious breakfast before the exam.","考試前你最好吃一頓營養的早餐。","had better + 原形動詞。"],
 ["Nutritious food may well cost a little more, but it is worth it.","營養的食物可能貴一點，但很值得。","may well 表示「很可能、確實可能」，常和 but 搭配表示讓步。"]],
 "nutri=滋養|-tious=形容詞字尾","能滋養身體的 → 營養的","🥗|營養"],
["obesity","n.","肥胖",[
 ["Obesity among children is becoming more common.","兒童肥胖越來越常見。","obesity 不可數；among + 群體 表示「在……之中」。"],
 ["The number of people with obesity has doubled.","肥胖人口的數量已經增加了一倍。","the number of + 複數名詞，動詞用單數 has doubled。"],
 ["Too much sugar, along with a lack of exercise, leads to obesity.","吃太多糖加上缺乏運動，會導致肥胖。","A along with B 動詞看 A（Too much sugar，不可數視為單數），用 leads。"]],
 "obes=肥胖的|-ity=名詞字尾","肥胖的狀態 → 肥胖","🍔|肥胖"],
["hygiene","n.","衛生",[
 ["Good hygiene can prevent many diseases.","良好的衛生習慣能預防許多疾病。","hygiene 不可數。"],
 ["You cannot be too careful about hygiene when you cook.","煮飯時，再怎麼注意衛生都不為過。","cannot be too careful 是最常考的 cannot ... too ... 句型。"],
 ["Personal hygiene, as well as clean water, is important in preventing disease.","個人衛生和乾淨的水對預防疾病都很重要。","A as well as B 動詞看 A（Personal hygiene），用 is；in + V-ing 表示「在……方面」。"]],
 "","","🧼|衛生"],
["lifespan","n.","壽命",[
 ["The average lifespan of people in Taiwan is about 80 years.","台灣人的平均壽命大約八十歲。","主詞是 The average lifespan（單數），用 is。"],
 ["Smoking may well shorten your lifespan.","抽菸很可能縮短你的壽命。","may well + 原形動詞。"],
 ["Each of these turtles has a lifespan of over 100 years.","這些烏龜每一隻都能活一百年以上。","each of + 複數名詞，動詞用單數 has。"]],
 "life=生命|span=跨度","生命的跨度 → 壽命","⌛|壽命"],
["retirement","n.","退休",[
 ["My grandfather enjoys gardening in his retirement.","我爺爺退休後喜歡園藝。","in one's retirement 表示「退休期間」；enjoy + V-ing。"],
 ["By the time he reaches retirement, he will have worked for forty years.","等到他退休時，他將已經工作四十年了。","by the time + 現在式，主要子句用未來完成式 will have + p.p.。"],
 ["Many people would rather enjoy an early retirement than work until seventy.","很多人寧願早點退休享受生活，也不要工作到七十歲。","would rather A than B，A、B 都是原形動詞。"]],
 "retire=退休|-ment=名詞字尾","retire（退休）的名詞","🎣|退休"],
["indulge","v.","沉迷；放縱；縱容",[
 ["It's OK to indulge in dessert once in a while.","偶爾放縱一下吃甜點沒關係。","indulge in + 名詞 表示「盡情享受、沉迷於」。"],
 ["You had better not indulge in video games before the exam.","考前你最好不要沉迷電玩。","had better not + 原形動詞。"],
 ["I would rather you didn't indulge your little brother so much.","我寧願你別那麼寵你弟弟。","would rather + 子句時，子句用過去式表示對現在或未來的希望；indulge + 人 表示「縱容某人」。"]],
 "","","🍰|放縱"],
["addiction","n.","上癮；成癮",[
 ["Phone addiction may well hurt your grades.","手機成癮很可能會拖累你的成績。","may well = 很可能。"],
 ["A number of apps are designed to cause addiction.","許多應用程式是被設計來讓人上癮的。","a number of + 複數名詞，動詞用複數 are；be designed to V 表示「被設計來……」。"],
 ["He overcame his addiction to sugar with his family's help.","他在家人的幫助下戒掉了糖癮。","addiction to + 名詞 表示「對……上癮」，這裡的 to 是介系詞。"]],
 "addict=上癮|-ion=名詞字尾","addict（使上癮）的名詞","📱|上癮"],
["sedentary","adj.","久坐不動的",[
 ["A sedentary lifestyle may well lead to health problems.","久坐不動的生活型態很可能導致健康問題。","may well + 原形動詞 表示「很可能」。"],
 ["Office workers, along with students, often live sedentary lives.","上班族和學生常常過著久坐的生活。","A along with B 動詞看 A（Office workers，複數），用 live。"],
 ["You had better stand up and stretch if your job is sedentary.","如果你的工作需要久坐，最好站起來伸展一下。","had better + 原形動詞；stand up 和 stretch 都是原形，用 and 連接。"]],
 "sed=坐|-entary=形容詞字尾","一直坐著的 → 久坐不動的","🛋️|久坐"],
["stamina","n.","耐力；體力",[
 ["Swimming builds stamina.","游泳能培養耐力。","build stamina 是常見搭配；stamina 不可數。"],
 ["Neither the players nor the coach has the stamina to play another game.","球員和教練都沒有體力再打一場比賽了。","neither A nor B 動詞看 B（the coach，單數），用 has。"],
 ["You cannot start building up your stamina too early before a marathon.","準備馬拉松，再早開始培養耐力都不嫌早。","cannot ... too ... 表示「再……也不為過」。"]],
 "","","🏃|耐力"],
["metabolism","n.","新陳代謝",[
 ["Exercise can speed up your metabolism.","運動可以加快新陳代謝。","speed up 表示「加速」。"],
 ["Metabolism slows down as people grow older.","人年紀越大，新陳代謝越慢。","as 在這裡表示「隨著」。"],
 ["Each person's metabolism is different.","每個人的新陳代謝都不同。","Each person's 是所有格，真正的主詞是 metabolism（單數），用 is。"]],
 "meta-=改變|bol=丟|-ism=名詞字尾","身體把吃進來的東西丟進去改變它 → 新陳代謝","🔥|代謝"],
["nutrient","n.","營養素",[
 ["Vegetables are rich in nutrients.","蔬菜富含營養素。","be rich in 表示「富含……」。"],
 ["A number of nutrients are lost when vegetables are overcooked.","蔬菜煮過頭時會流失許多營養素。","a number of + 複數名詞，動詞用複數 are。"],
 ["Protein, as well as other nutrients, is needed for growth.","蛋白質和其他營養素都是成長所需的。","A as well as B 動詞看 A（Protein，不可數），用 is。"]],
 "nutri=滋養|-ent=名詞字尾","滋養身體的東西 → 營養素","🥕|營養素"],
["dehydrated","adj.","脫水的",[
 ["Drink more water, or you may well get dehydrated.","多喝水，不然你很可能會脫水。","祈使句 + or 表示「不然就……」；may well = 很可能。"],
 ["By the time the hikers reached the top, they had become dehydrated.","登山客到達山頂時，已經脫水了。","by the time + 過去式，主要子句用 had + p.p.。"],
 ["Feeling dehydrated, the runner stopped to drink some water.","那位跑者覺得脫水，停下來喝水。","分詞構句：Feeling dehydrated = Because he felt dehydrated；stop to V 表示「停下來去做」。"]],
 "de-=去除|hydr=水|-ated=形容詞字尾","水分被去掉的 → 脫水的","🥵|脫水"],
["drowsy","adj.","昏昏欲睡的",[
 ["This medicine may make you drowsy.","這個藥可能讓你想睡。","make + 受詞 + 形容詞。"],
 ["Feeling drowsy, I might as well take a short nap.","既然昏昏欲睡，我不如小睡一下。","分詞構句 Feeling drowsy；might as well = 不妨、倒不如。"],
 ["You had better not drive when you feel drowsy.","覺得想睡時，你最好不要開車。","had better not + 原形動詞。"]],
 "","","😪|想睡"],
["workaholic","n.","工作狂",[
 ["My father is a workaholic who rarely takes a day off.","我爸爸是個很少休假的工作狂。","who 引導關係子句；take a day off 表示「休假一天」。"],
 ["I would rather have a balanced life than become a workaholic.","我寧願生活平衡，也不要變成工作狂。","would rather A than B，A、B 都用原形。"],
 ["Hardly had the workaholic come home when he opened his laptop again.","那個工作狂一回到家，就又打開筆電了。","Hardly had ... when ...；come 的過去分詞還是 come。"]],
 "work=工作|-aholic=對……成癮的人","對工作上癮的人 → 工作狂","💼|工作狂"],
["burnout","n.","過勞；倦怠",[
 ["Working without breaks can lead to burnout.","不休息地工作會導致過勞。","lead to + 名詞 表示「導致」。"],
 ["The number of nurses suffering from burnout has increased.","受過勞所苦的護理師人數增加了。","the number of + 複數名詞，動詞用單數 has increased。"],
 ["You had better rest before burnout ruins your health.","你最好在過勞毀掉健康之前好好休息。","had better + 原形動詞；before 子句用現在式。"]],
 "burn=燃燒|out=完全","把力氣完全燒光 → 過勞","🕯️|燃燒殆盡"],
["balance","n./v.","平衡；使平衡",[
 ["It is hard to find a balance between schoolwork and sleep.","要在課業和睡眠之間找到平衡很難。","a balance between A and B 表示「A 和 B 之間的平衡」。"],
 ["Work-life balance, as well as good pay, attracts young workers.","工作與生活的平衡和好的薪水都吸引年輕員工。","A as well as B 動詞看 A（Work-life balance），用 attracts。"],
 ["You might as well learn to balance your time now.","你不妨現在就學著分配好時間。","might as well = 不妨；balance 也可以當動詞。"]],
 "","","@balance"],
["sufficient","adj.","足夠的",[
 ["Seven hours of sleep is sufficient for most adults.","七小時的睡眠對大部分成人來說是足夠的。","表示一段時間的主詞視為整體，用單數 is。"],
 ["Neither the time nor the money was sufficient for the trip.","時間和金錢都不夠去這趟旅行。","neither A nor B 動詞看 B（the money，不可數），用 was。"],
 ["Without sufficient water, plants cannot grow.","沒有足夠的水，植物就不能生長。","without + 名詞 表示「沒有……」；反義詞是 insufficient。"]],
 "suf-=在下面|fic=做|-ient=形容詞字尾","在底下做足準備 → 足夠的","👌|足夠"],
/* ---------- 科技倫理與未來 ---------- */
["misinformation","n.","錯誤資訊",[
 ["Misinformation spreads quickly on social media.","錯誤資訊在社群媒體上散播得很快。","misinformation 不可數，動詞用單數 spreads。"],
 ["The moment the misinformation appeared, the reporters checked the facts.","錯誤資訊一出現，記者們就查證事實。","the moment + 子句 表示「一……就……」。"],
 ["You cannot be too careful about misinformation online.","面對網路上的錯誤資訊，再小心也不為過。","cannot be too careful 表示「再小心也不為過」。"]],
 "mis-=錯誤|inform=通知|-ation=名詞字尾","錯誤的通知 → 錯誤資訊","📰|錯誤資訊"],
["surveillance","n.","監視；監控",[
 ["The city uses cameras for surveillance.","這座城市用攝影機做監控。","for + 名詞 表示目的。"],
 ["Surveillance, along with data collection, raises privacy concerns.","監控和資料蒐集都引發隱私疑慮。","A along with B 動詞看 A（Surveillance，單數），用 raises。"],
 ["The suspect was under surveillance for months.","嫌犯被監視了好幾個月。","be under surveillance 表示「受到監視」。"]],
 "sur-=在上面|veill=看守|-ance=名詞字尾","從上面看守 → 監視","📹|監視"],
["exploit","v.","剝削；利用",[
 ["Some companies exploit workers by paying them very little.","有些公司用很低的薪水剝削工人。","by + V-ing 表示方法。"],
 ["Hackers may well exploit weaknesses in the system.","駭客很可能會利用系統的弱點。","may well = 很可能。"],
 ["We had better exploit solar energy more.","我們最好多利用太陽能。","had better + 原形動詞；exploit 也有中性的「開發利用」。"]],
 "ex-=向外|ploit=摺","把摺起來的東西攤開拿去用 → 利用；剝削","⛏️|剝削"],
["encrypt","v.","加密",[
 ["The app encrypts your messages to protect your privacy.","這個應用程式會把訊息加密來保護你的隱私。","to V 表示目的；encrypt 的名詞是 encryption。"],
 ["You had better encrypt important files before sending them.","傳送重要檔案前，你最好先加密。","had better + 原形動詞；before + V-ing。"],
 ["Encrypted by the system, the data cannot be read by hackers.","資料經過系統加密，駭客就讀不到。","過去分詞構句表示被動：資料是「被加密」的，用 Encrypted。"]],
 "en-=使|crypt=隱藏","使藏起來 → 加密","🔐|加密"],
["innovative","adj.","創新的",[
 ["The company is famous for its innovative products.","這家公司以創新的產品聞名。","be famous for + 名詞。"],
 ["Each of the teams came up with an innovative idea.","每一組都想出了一個創新的點子。","each of + 複數名詞，動詞用單數；come up with 表示「想出」。"],
 ["Innovative as the design is, it may well be too expensive.","這個設計雖然很創新，但很可能太貴了。","形容詞 + as + 主詞 + be 是讓步倒裝，等於 Although the design is innovative。"]],
 "in-=進入|nov=新的|-ative=形容詞字尾","帶進新東西的 → 創新的","💡|創新"],
["simulate","v.","模擬",[
 ["Pilots use computers to simulate flights.","飛行員用電腦模擬飛行。","use + 物 + to V 表示「用……來做……」。"],
 ["The game simulates real city life.","這款遊戲模擬真實的城市生活。","主詞 The game 單數，動詞加 s。"],
 ["Hardly had the scientists simulated the earthquake when they found a problem.","科學家一模擬那場地震，就發現了問題。","Hardly had ... when ...。"]],
 "simul=相像|-ate=動詞字尾","做得很像真的 → 模擬","🎮|模擬"],
["misuse","v./n.","濫用；誤用",[
 ["Some people misuse AI to make fake videos.","有些人濫用 AI 製作假影片。","mis- 表示「錯誤地」。"],
 ["The misuse of personal data, as well as fake news, is a serious problem.","個資濫用和假新聞都是嚴重的問題。","A as well as B 動詞看 A（The misuse，單數），用 is。"],
 ["You had better not misuse the medicine.","你最好不要誤用藥物。","had better not + 原形動詞；misuse 當動詞時 use 唸 /z/，當名詞時唸 /s/，和 use 一樣。"]],
 "mis-=錯誤|use=使用","錯誤地使用 → 濫用","🚫|濫用"],
["algorithm","n.","演算法",[
 ["The app uses an algorithm to recommend videos.","這個應用程式用演算法推薦影片。","to V 表示目的。"],
 ["Algorithms may well decide what news you see.","演算法很可能決定了你看到什麼新聞。","may well = 很可能；what news you see 是名詞子句當受詞。"],
 ["The number of algorithms in our daily life keeps growing.","日常生活中演算法的數量持續增加。","the number of + 複數名詞，動詞用單數 keeps。"]],
 "","","🧮|演算法"],
["automation","n.","自動化",[
 ["Automation has replaced many factory jobs.","自動化取代了許多工廠的工作。","has replaced 是現在完成式，表示到現在的結果。"],
 ["A number of jobs may well disappear because of automation.","許多工作很可能因為自動化而消失。","a number of + 複數名詞 + may well + 原形動詞。"],
 ["Workers would rather learn new skills than lose their jobs to automation.","工人寧願學新技能，也不要被自動化搶走工作。","would rather A than B；lose ... to ... 表示「把……輸給、被……奪走」。"]],
 "auto-=自己|mat=動|-ion=名詞字尾","自己會動 → 自動化","🤖|自動化"],
["regulate","v.","管制；調節",[
 ["The government should regulate the use of personal data.","政府應該管制個人資料的使用。","should + 原形動詞；名詞是 regulation。"],
 ["Our body regulates its temperature automatically.","我們的身體會自動調節體溫。","regulate 也表示「調節」；Our body 單數，動詞加 s。"],
 ["Hardly had the new technology appeared when lawmakers tried to regulate it.","新科技一出現，立法者就試著管制它。","Hardly had ... when ...。"]],
 "regul=規則|-ate=動詞字尾","用規則來管 → 管制","🚦|管制"],
["hacker","n.","駭客",[
 ["A hacker stole thousands of passwords.","一名駭客偷了數千組密碼。","thousands of 表示「數以千計」。"],
 ["The moment the hackers broke in, the system shut down.","駭客一入侵，系統就關機了。","the moment + 子句；break in 表示「闖入」。"],
 ["Neither the bank nor its customers were aware of the hacker's attack.","銀行和客戶都沒察覺駭客的攻擊。","neither A nor B 動詞看 B（its customers，複數），用 were。"]],
 "hack=亂砍|-er=人","在系統裡亂砍亂闖的人 → 駭客","👾|駭客"],
["controversial","adj.","有爭議的",[
 ["Gene editing is a controversial topic.","基因編輯是一個有爭議的話題。","controversial 放在名詞前修飾。"],
 ["The new rule, together with the higher fees, was controversial.","新規定和更高的費用都引起爭議。","A together with B 動詞看 A（The new rule，單數），用 was。"],
 ["If the plan were less controversial, more people would support it.","如果這個計畫沒那麼有爭議，會有更多人支持。","與現在事實相反的假設：be 動詞用 were，主要子句用 would + 原形動詞。"]],
 "contro-=相反|vers=轉|-ial=形容詞字尾","意見轉向相反兩邊 → 有爭議的","🔥|爭議"],
["accountable","adj.","應負責的",[
 ["Companies should be held accountable for their products.","公司應該為自己的產品負責。","be held accountable for 表示「被要求負責」。"],
 ["Who is accountable if a robot makes a mistake?","如果機器人犯錯，誰該負責？","be accountable for + 事、be accountable to + 人。"],
 ["Each of the leaders is accountable to the public.","每位領導者都要對大眾負責。","each of + 複數名詞，動詞用單數 is。"]],
 "account=說明|-able=可……的","能交代說明的 → 應負責的","📝|負責"],
["transparency","n.","透明；透明度",[
 ["People want more transparency from the government.","人們希望政府更透明。","transparency 不可數。"],
 ["Transparency, as well as honesty, builds trust.","透明和誠實都能建立信任。","A as well as B 動詞看 A（Transparency，單數），用 builds。"],
 ["You cannot value transparency too much in a company.","在一家公司裡，再怎麼重視透明度都不為過。","cannot ... too much 表示「再……也不為過」。"]],
 "trans-=穿過|par=出現|-ency=名詞字尾","光能穿過、裡面看得見 → 透明度","🔍|透明"],
["drone","n.","無人機",[
 ["Drones are used to deliver packages.","無人機被用來運送包裹。","be used to V（被用來做）和 be used to V-ing（習慣於）要分清楚。"],
 ["The moment the drone took off, the kids cheered.","無人機一起飛，孩子們就歡呼。","the moment + 子句；take off 表示「起飛」。"],
 ["You had better check the rules before flying a drone.","飛無人機之前，你最好先查清楚規定。","had better + 原形動詞；before + V-ing。"]],
 "","","@drone"],
["obsolete","adj.","過時的；淘汰的",[
 ["Fax machines are almost obsolete.","傳真機幾乎已經被淘汰了。","obsolete 表示「已經不再使用的」。"],
 ["No sooner had I bought the phone than it became obsolete.","我才剛買這支手機，它就過時了。","No sooner had ... than ...。"],
 ["Many skills may well become obsolete in the future.","許多技能將來很可能會被淘汰。","may well = 很可能。"]],
 "","","📼|過時"],
["breakthrough","n.","突破",[
 ["The new vaccine was a medical breakthrough.","這種新疫苗是醫學上的突破。","make a breakthrough 也是常見搭配。"],
 ["Scarcely had the scientists announced the breakthrough when reporters called.","科學家一宣布這項突破，記者就打電話來了。","Scarcely had ... when ...，和 hardly 用法一樣。"],
 ["By the time I graduate, there may well be a breakthrough in AI.","等到我畢業時，AI 很可能會有突破。","by the time + 現在式代替未來；there may well be 表示「很可能有」。"]],
 "break=打破|through=穿過","打破障礙穿過去 → 突破","🚀|突破"],
["inevitable","adj.","不可避免的",[
 ["Change is inevitable.","改變是不可避免的。","inevitable 放在 be 動詞後面。"],
 ["It is inevitable that robots will do more jobs.","機器人做更多工作是不可避免的。","虛主詞 It 代替後面的 that 子句。"],
 ["Since the delay is inevitable, we might as well have some coffee.","既然延誤不可避免，我們不妨喝杯咖啡。","might as well = 不妨；since 表示「既然」。"]],
 "in-=不|evit=避免|-able=可……的","不可避免的","⛈️|躲不掉"],
["prospect","n.","前景；可能性",[
 ["The prospects for AI engineers are bright.","AI 工程師的前景一片光明。","prospects（常用複數）for 表示「……的前景」。"],
 ["The prospect of moving abroad excites her.","出國生活的可能性讓她很興奮。","the prospect of + V-ing；主詞是 The prospect（單數），用 excites。"],
 ["Neither the students nor their teacher was sure about the job prospects.","學生和老師都不確定工作前景。","neither A nor B 動詞看 B（their teacher，單數），用 was。"]],
 "pro-=向前|spect=看","往前看到的景象 → 前景","🔭|前景"],
["humanity","n.","人類；人性",[
 ["Climate change is a threat to humanity.","氣候變遷是對人類的威脅。","humanity 不可數，指「全人類」。"],
 ["The doctor treated every patient with humanity.","那位醫生以仁慈對待每一位病人。","humanity 也表示「人性、仁慈」。"],
 ["AI may well be the most important invention in the history of humanity.","AI 很可能是人類史上最重要的發明。","may well；最高級 the most important。"]],
 "human=人類|-ity=名詞字尾","全人類；人性","🌍|人類"],
["dependence","n.","依賴",[
 ["Our dependence on smartphones keeps growing.","我們對智慧型手機的依賴持續增加。","dependence on + 名詞 表示「對……的依賴」。"],
 ["The country wants to reduce its dependence on oil.","這個國家想減少對石油的依賴。","want to V；its 指 The country。"],
 ["Too much dependence on AI may well make us lazy.","過度依賴 AI 很可能讓我們變懶。","may well；make + 受詞 + 形容詞。"]],
 "de-=向下|pend=懸掛|-ence=名詞字尾","吊掛在別人身上 → 依賴","🪝|依賴"],
["threat","n.","威脅",[
 ["Fake news is a threat to democracy.","假新聞是對民主的威脅。","a threat to + 名詞。"],
 ["The threat of hackers, along with other online risks, worries parents.","駭客的威脅和其他網路風險讓家長很擔心。","A along with B 動詞看 A（The threat，單數），用 worries。"],
 ["Every threat must be taken seriously.","每個威脅都必須認真看待。","every + 單數名詞，動詞用單數；must be taken 是助動詞被動。"]],
 "","","⚠️|威脅"],
/* ---------- 字根 ann / enn（年） ---------- */
["annual","adj.","每年的；一年一度的",[
 ["The school holds an annual sports day.","學校每年舉辦運動會。","annual 放在名詞前面；開頭是母音，所以用 an。"],
 ["The annual report, as well as the photos, was posted online.","年度報告和照片都放上網了。","A as well as B 動詞看 A（The annual report，單數），用 was。"],
 ["Hardly had the annual festival started when it began to rain.","一年一度的節慶一開始就下雨了。","Hardly had ... when ...。"]],
 "ann=年|-ual=形容詞字尾","每一年的","📅|每年"],
["biennial","adj.","兩年一次的",[
 ["The art show is a biennial event.","這個藝術展兩年舉辦一次。","bi- 表示「二」。"],
 ["The Taipei Biennial attracts a number of international artists.","台北雙年展吸引了許多國際藝術家。","a number of + 複數名詞 表示「許多」。"],
 ["Since the event is biennial, we might as well go this year.","既然這個活動兩年才辦一次，我們今年不妨去看看。","might as well = 不妨。"]],
 "bi-=二|enn=年|-ial=形容詞字尾","每兩年一次的","🗓️|兩年一次"],
["perennial","adj.","長年的；多年生的",[
 ["Traffic is a perennial problem in big cities.","交通是大城市長年存在的問題。","perennial 表示「長期存在、一直都有的」。"],
 ["Perennial plants grow back every spring.","多年生植物每年春天都會再長出來。","perennial plant 是多年生植物。"],
 ["Each of these perennial flowers lives for many years.","這些多年生花卉每一株都能活很多年。","each of + 複數名詞，動詞用單數 lives。"]],
 "per-=穿過|enn=年|-ial=形容詞字尾","穿過一年又一年 → 長年的","🌷|年年都在"],
["centennial","n./adj.","百年紀念；一百年的",[
 ["Our school will celebrate its centennial next year.","我們學校明年要慶祝百年校慶。","centennial 當名詞表示「一百週年」。"],
 ["By the time the centennial comes, the new library will have been built.","等到百年校慶時，新圖書館將已經蓋好了。","by the time + 現在式，主要子句用未來完成式被動 will have been + p.p.。"],
 ["The number of guests at the centennial was larger than expected.","百年慶典的來賓人數比預期的多。","the number of + 複數名詞，動詞用單數 was；數量用 large / small 形容。"]],
 "cent=百|enn=年|-ial=形容詞字尾","一百年的 → 百年紀念","💯|百年"],
["millennium","n.","一千年；千禧年",[
 ["People celebrated the new millennium in 2000.","人們在 2000 年慶祝新千禧年。","millennium 的複數是 millennia。"],
 ["This temple has stood for almost a millennium.","這座廟已經屹立將近一千年了。","has stood 是現在完成式，表示持續到現在。"],
 ["The moment the new millennium began, fireworks lit up the sky.","新千禧年一到，煙火就照亮了天空。","the moment + 子句；light up 的過去式是 lit up。"]],
 "mill=千|enn=年|-ium=名詞字尾","一千年","🎆|千年"],
/* ---------- 字根 chron / temp（時間） ---------- */
["centenarian","n.","百歲人瑞",[
 ["My great-grandmother is a centenarian.","我的曾祖母是百歲人瑞。","centenarian 指一百歲以上的人。"],
 ["The number of centenarians in Japan is growing fast.","日本百歲人瑞的人數成長得很快。","the number of + 複數名詞，動詞用單數 is。"],
 ["Each of the centenarians says that the secret is staying active.","每一位人瑞都說祕訣是保持活躍。","each of + 複數名詞，動詞用單數 says。"]],
 "cent=百|en=年|-arian=人","活到一百年的人 → 百歲人瑞","👴|百歲人瑞"],
["chronology","n.","年表；時間順序",[
 ["The book begins with a chronology of the artist's life.","這本書一開頭是這位藝術家的生平年表。","a chronology of + 名詞。"],
 ["Neither the dates nor the chronology was correct.","日期和時間順序都不正確。","neither A nor B 動詞看 B（the chronology，單數），用 was。"],
 ["You had better check the chronology before you write the report.","寫報告之前，你最好先確認事件的時間順序。","had better + 原形動詞。"]],
 "chrono=時間|log=說、學問|-y=名詞字尾","按時間來敘述 → 年表","📆|年表"],
["chronicle","n./v.","編年史；按時間記錄",[
 ["The book is a chronicle of the war.","這本書是那場戰爭的編年史。","a chronicle of + 事件。"],
 ["Her diary chronicles her high school life.","她的日記記錄了她的高中生活。","chronicle 當動詞表示「按時間順序記錄」。"],
 ["Each chapter chronicles one year of the family's history.","每一章記載這個家族一年的歷史。","each + 單數名詞，動詞用單數 chronicles。"]],
 "chron=時間|-icle=名詞字尾","按時間記下的事 → 編年史","📜|編年史"],
["chronological","adj.","按時間順序的",[
 ["Please list the events in chronological order.","請依時間順序列出這些事件。","in chronological order 表示「按時間順序」，學測閱讀題常出現。"],
 ["The photos, along with the letters, are arranged in chronological order.","照片和信件都按照時間順序排列。","A along with B 動詞看 A（The photos，複數），用 are。"],
 ["You had better put your notes in chronological order before the history exam.","歷史考試前，你最好把筆記照時間順序整理好。","had better + 原形動詞。"]],
 "chrono=時間|log=說、學問|-ical=形容詞字尾","依照時間來敘述的 → 按時間順序的","🔢|時間順序"],
["synchronize","v.","同步；使時間一致",[
 ["Let's synchronize our watches.","我們來對一下錶吧。","synchronize 表示「使時間一致」。"],
 ["The moment I logged in, my phone synchronized with my laptop.","我一登入，手機就和筆電同步了。","the moment + 子句；synchronize with 表示「與……同步」。"],
 ["The dancers' movements, as well as the music, were perfectly synchronized.","舞者的動作和音樂完美同步。","A as well as B 動詞看 A（movements，複數），用 were；were synchronized 是被動。"]],
 "syn-=相同|chron=時間|-ize=使……","使時間相同 → 同步","🔄|同步"],
["temporary","adj.","暫時的；臨時的",[
 ["This is only a temporary solution.","這只是暫時的解決辦法。","temporary 的反義詞是 permanent（永久的）。"],
 ["She found a temporary job during the summer.","她暑假找了一份臨時工作。","temporary job 是「臨時工作」。"],
 ["The pain may well be temporary, but you had better see a doctor.","疼痛很可能只是暫時的，但你最好還是去看醫生。","may well 搭配 had better：前面讓步，後面給建議。"]],
 "tempor=時間|-ary=形容詞字尾","只維持一段時間的 → 暫時的","⏸️|暫時"],
["contemporary","adj./n.","當代的；同時代的人",[
 ["I like contemporary art more than classical art.","比起古典藝術，我更喜歡當代藝術。","contemporary 表示「當代的、現代的」。"],
 ["The museum, along with its gardens, shows contemporary designs.","這座博物館和它的庭園都展現當代設計。","A along with B 動詞看 A（The museum，單數），用 shows。"],
 ["Shakespeare was a contemporary of Queen Elizabeth I.","莎士比亞和伊莉莎白一世是同時代的人。","contemporary 當名詞表示「同時代的人」。"]],
 "con-=一起|tempor=時間|-ary=形容詞字尾","在同一個時間的 → 當代的；同時代的","🖼️|當代"],
["tempo","n.","節奏；步調",[
 ["The song has a fast tempo.","這首歌的節奏很快。","tempo 是音樂的「速度、拍子」。"],
 ["The tempo of city life is faster than that of country life.","城市生活的步調比鄉村生活快。","that of 代替 the tempo of，避免重複；比較的對象要對等。"],
 ["You might as well slow down the tempo if the dancers can't keep up.","如果舞者跟不上，你不妨把節奏放慢。","might as well = 不妨；keep up 表示「跟上」。"]],
 "temp=時間|-o=名詞字尾","時間的快慢 → 節奏","🎵|節奏"],
/* ---------- 字根 vit / viv（生命） ---------- */
["vital","adj.","極重要的；生命的",[
 ["Water is vital to life.","水對生命極為重要。","be vital to / for 表示「對……極重要」。"],
 ["It is vital that every student understand the rules.","每個學生都了解規則是非常重要的。","It is vital that + 主詞 + (should) + 原形動詞，所以用 understand，不加 s。"],
 ["Doctors check your vital signs first.","醫生會先檢查你的生命徵象。","vital signs 指心跳、呼吸、體溫等生命徵象。"]],
 "vit=生命|-al=形容詞字尾","和生命有關的 → 極重要的","❤️|極重要"],
["vitality","n.","活力；生命力",[
 ["My grandmother is full of vitality.","我奶奶充滿活力。","be full of + 名詞。"],
 ["Young people bring vitality to the old town.","年輕人為老城鎮帶來活力。","bring A to B 表示「把 A 帶給 B」。"],
 ["Hardly had the music started when the room was filled with vitality.","音樂一響起，整個房間就充滿活力。","Hardly had ... when ...；be filled with 表示「充滿」。"]],
 "vit=生命|-al=形容詞字尾|-ity=名詞字尾","生命力 → 活力","🔋|活力"],
["vivid","adj.","生動的；鮮明的",[
 ["I still have a vivid memory of my first day at school.","我對上學第一天的記憶仍然很鮮明。","a vivid memory 表示「鮮明的回憶」。"],
 ["The writer gives a vivid description of the market.","作者把市場描寫得很生動。","give a description of 表示「描述……」。"],
 ["The colors in the painting are so vivid that the flowers look real.","這幅畫的顏色鮮明得讓花看起來像真的一樣。","so + 形容詞 + that ... 表示「如此……以致於」。"]],
 "viv=生命|-id=形容詞字尾","像活的一樣 → 生動的","@vivid"],
["revive","v.","使復甦；使恢復精神",[
 ["A cup of tea revived me after the long exam.","漫長的考試後，一杯茶讓我恢復精神。","revive + 人 表示「使恢復精神」。"],
 ["The town hopes to revive its old traditions.","這個小鎮希望復興舊傳統。","hope to V；名詞是 revival（復興）。"],
 ["No sooner had the doctors revived the man than he asked for his family.","醫生一把那名男子救醒，他就要找家人。","No sooner had ... than ...。"]],
 "re-=再|vive=活","再活過來 → 使復甦","🌱|復甦"],
["survival","n.","生存；存活",[
 ["Water is necessary for survival.","水是生存所必需的。","be necessary for 表示「對……是必要的」。"],
 ["The survival of many species depends on us.","許多物種的存亡取決於我們。","主詞是 The survival（單數），動詞用 depends。"],
 ["Learning survival skills may well save your life someday.","學習求生技能很可能有一天會救你一命。","may well = 很可能；動名詞片語當主詞。"]],
 "sur-=超越|viv=生命|-al=名詞字尾","越過危險活下來 → 生存","🏕️|生存"],
/* ---------- 字根 mort（死） ---------- */
["mortal","adj./n.","終究會死的；凡人",[
 ["All humans are mortal.","所有人終究都會死。","mortal 表示「難逃一死的」。"],
 ["In the story, a god falls in love with a mortal.","故事裡，一位神愛上了一個凡人。","mortal 當名詞表示「凡人」；fall in love with 表示「愛上」。"],
 ["Since we are mortal, we might as well make every day count.","既然人終有一死，我們不妨讓每一天都有意義。","might as well = 不妨；make every day count 表示「讓每一天都有價值」。"]],
 "mort=死|-al=形容詞字尾","會死的 → 凡人的","🧍|凡人"],
["immortal","adj.","不朽的；長生不死的",[
 ["No one is immortal.","沒有人是長生不死的。","immortal 的 im- 表示「不」。"],
 ["Shakespeare's plays are immortal.","莎士比亞的劇作是不朽的。","immortal 也表示「不朽的、永垂不朽的」。"],
 ["If humans were immortal, the earth would be very crowded.","如果人類長生不死，地球會非常擁擠。","與現在事實相反的假設：If + were，主要子句用 would + 原形動詞。"]],
 "im-=不|mort=死|-al=形容詞字尾","不會死的 → 不朽的","♾️|不朽"],
["mortality","n.","死亡率；必死性",[
 ["Better hygiene lowered infant mortality.","更好的衛生條件降低了嬰兒死亡率。","infant mortality 表示「嬰兒死亡率」。"],
 ["The mortality rate, together with the birth rate, is falling.","死亡率和出生率都在下降。","A together with B 動詞看 A（The mortality rate，單數），用 is。"],
 ["Thanks to vaccines, the mortality rate of the disease has dropped.","多虧疫苗，這種病的死亡率下降了。","thanks to 表示「多虧、由於」。"]],
 "mort=死|-al=形容詞字尾|-ity=名詞字尾","死亡的比率 → 死亡率","📉|死亡率"]
];

/* ---------- 記憶小撇步：沒有字根可拆的字 ---------- */
Object.assign(MEMO, {
  frequent: "frequent 的名詞是 frequency（頻率），副詞是 frequently（經常）。可以聯想 free（有空）：一有空就跑來，來得很頻繁。當動詞「常去」時重音在後：fre-QUENT。",
  tackle: "tackle 原本是橄欖球的「擒抱」：衝上去抱住球員不放。遇到難題也要衝上去抱住它，就是「處理、著手解決」。常見搭配 tackle a problem。",
  leisure: "leisure 唸作 /ˈliʒɚ/，和 pleasure（樂趣）長得很像：有閒暇才有樂趣。at your leisure 表示「在你方便的時候」。",
  spare: "spare 和 space 只差一個字母：多出來的空間就是「空閒的、備用的」。spare tire 是備胎，spare time 是空閒時間。",
  idle: "idle 和 idol（偶像）同音 /ˈaɪdl/：整天盯著偶像看、什麼事都不做，就是 idle 無所事事。",
  prompt: "prompt 可以聯想 pro-（向前）：事情一來就往前衝，所以是「迅速的」；推著人往前，就是「促使」。電腦的「提示字元」也叫 prompt。",
  stamina: "stamina 唸作 /ˈstæmənə/，可以聯想 stand（站）：能一直站著撐住不倒，靠的就是耐力。build up stamina 是「培養耐力」。",
  hygiene: "hygiene 唸作 /ˈhaɪdʒin/。希臘神話的健康女神叫 Hygieia，講衛生就是健康的開始。形容詞是 hygienic。",
  drowsy: "drowsy 可以聯想 drown（淹沒）：被睡意淹沒，就是昏昏欲睡。唸作 /ˈdraʊzi/，ow 唸 /aʊ/，和 cloudy 的 ou 一樣。",
  balance: "balance 唸作 /ˈbæləns/，開頭的 bal 可以聯想 ball：雙手各捧一顆球，兩邊一樣重才不會倒，就是平衡。形容詞是 balanced，work-life balance 是「工作與生活的平衡」。",
  indulge: "indulge 可以聯想 in + dull：生活太無聊（dull），就一頭栽進（in）喜歡的東西裡盡情放縱。常用 indulge in + 名詞。",
  algorithm: "algorithm 來自一位波斯數學家的名字 al-Khwarizmi；後半可以聯想 rhythm（節奏）：電腦照著固定節奏一步步算，就是演算法。",
  drone: "drone 原本是「雄蜂」，也指嗡嗡聲；無人機飛起來嗡嗡響，就像一隻大蜜蜂。",
  obsolete: "obsolete 唸作 /ˌɑbsəˈlit/，可以聯想「old + 被 delete 掉」：太舊了被刪掉，就是過時、淘汰的。意思和 out of date 相近。",
  threat: "threat 唸作 /θrɛt/，ea 唸短音 /ɛ/，和 bread、head 一樣。動詞是 threaten（威脅），形容詞 threatening。"
});

const S2_2_3_GRAMMAR = [
{ id:"g1", title:"助動詞進階：need / dare、would rather、had better、may well / might as well、cannot…too…",
  intro:"這些「準助動詞」和慣用句型後面幾乎都接原形動詞。學測愛考的是：否定的 not 放哪裡、後面接原形還是 to V、意思會不會被誤解。",
  table:[["句型","意思","例句"],["need not / Need ...? + 原形","不必；需要……嗎（助動詞）","You need not worry."],["need to V／物 + need + V-ing","需要（一般動詞）；需要被……","The car needs washing."],["dare not + 原形","不敢（助動詞）","I dare not ask him."],["would rather A than B","寧願 A 也不要 B（A、B 用原形）","I would rather walk than wait."],["would rather + 主詞 + 過去式","寧願某人（現在／未來）……","I'd rather you stayed home."],["had better (not) + 原形","最好（不要）……","You had better not be late."],["may well + 原形","很可能；有充分理由","He may well be right."],["might as well + 原形","不妨；倒不如","We might as well walk home."],["cannot ... too ...","再……也不為過","You cannot be too careful."]],
  points:[
   "need 當助動詞只用在否定句和疑問句，後面接原形，第三人稱也不加 s：He need not come.／Need he come?；肯定句要用一般動詞：He needs to come.",
   "need 當一般動詞時，「物 + need + V-ing」表示被動：The shoes need washing. = The shoes need to be washed.",
   "dare 也有兩種身分：助動詞 dare not + 原形（He dare not tell.）；一般動詞 doesn't dare (to) + V（He doesn't dare to tell.）。陷阱：✗ He dares not tell.",
   "would rather A than B，A 和 B 都用原形；否定是 would rather not + 原形。would rather 後面接另一個人的子句時，用過去式表示現在或未來：I'd rather you didn't go.",
   "had better 雖然有 had，卻是給現在或未來的建議；否定是 had better not + 原形，常考陷阱：✗ had not better、✗ had better not to。",
   "may well = 很可能；might as well = 不妨、倒不如（沒有更好的選擇時）。cannot ... too ... 是「再……也不為過」，不是「不能太……」：You cannot be too careful when driving."],
  ex:[
   ["You had better not indulge in video games before the exam.","考前你最好不要沉迷電玩。","had better not + 原形動詞，not 放在 better 後面。"],
   ["I would rather finish my homework now than procrastinate until midnight.","我寧願現在寫完作業，也不要拖到半夜。","would rather A than B：兩邊都是原形動詞。"],
   ["I would rather you didn't indulge your little brother so much.","我寧願你別那麼寵你弟弟。","would rather + 子句，子句用過去式（didn't）表示對現在的希望。"],
   ["Since the delay is inevitable, we might as well have some coffee.","既然延誤不可避免，我們不妨喝杯咖啡。","might as well = 不妨、倒不如。"],
   ["You cannot be too careful about hygiene when you cook.","煮飯時，再怎麼注意衛生都不為過。","cannot ... too ...：再……也不為過。"]]},
{ id:"g2", title:"主詞動詞一致進階：each / every、the number of、就近原則、as well as、集合名詞",
  intro:"動詞的單複數要跟著「真正的主詞」走。高二的句子很長，中間會插入 of 片語、as well as 片語當障眼法，要練習一眼找出真正的主詞。",
  table:[["主詞","動詞","例句"],["each / every + 單數名詞；each of + 複數名詞","單數","Each of the students has a laptop."],["the number of + 複數名詞","單數（主詞是 number）","The number of cars is growing."],["a number of + 複數名詞","複數（= many）","A number of cars are parked here."],["either A or B／neither A nor B／not only A but also B","看靠近的 B（就近原則）","Neither you nor he is wrong."],["A as well as / along with / together with B","看 A","The teacher, as well as the students, is here."],["集合名詞 family / class / team","整體→單數；成員→複數","My family is large."],["police / people / cattle","一律複數","The police are coming."]],
  points:[
   "each、every 永遠是單數；every 連接兩個名詞也一樣：Every boy and girl has a seat.",
   "the number of（……的數量）用單數；a number of（許多）用複數。口訣：the 是「數量」，a 是「很多」。",
   "就近原則：either A or B、neither A nor B、not only A but also B，動詞看最靠近動詞的 B：Not only you but also I am invited.",
   "A as well as B、A along with B、A together with B、A with B，後面的 B 只是附加，動詞看 A；但 A and B 用複數。",
   "集合名詞 family、class、team、audience：當成一個整體用單數，強調每個成員用複數（My family are all early risers.）；police、people、cattle 一律用複數。",
   "學測陷阱：of 後面的名詞通常不是主詞（The quality of the products is good.）；一段時間、一筆錢、一段距離當整體用單數（Ten years is a long time.）。"],
  ex:[
   ["Each of the students is expected to be punctual.","每位學生都應該準時。","Each of + 複數名詞，主詞是 Each，用 is。"],
   ["The number of teens suffering from anxiety is increasing.","受焦慮所苦的青少年人數正在增加。","the number of 用單數 is。"],
   ["A number of apps are designed to cause addiction.","許多應用程式是被設計來讓人上癮的。","a number of = many，用複數 are。"],
   ["Neither my brother nor I am productive after lunch.","我哥哥和我午餐後都沒什麼效率。","就近原則：靠近動詞的是 I，用 am。"],
   ["Efficiency, as well as accuracy, is important in this job.","這份工作中，效率和準確度都很重要。","A as well as B 看 A（Efficiency），用 is。"]]},
{ id:"g3", title:"時間句型：no sooner…than、hardly / scarcely…when、the moment / as soon as、by the time",
  intro:"「一……就……」和「到……的時候已經……」是學測翻譯和綜合測驗的常客。重點有三個：搭配的字（than 還是 when）、時態（had p.p. 和過去式）、要不要倒裝。",
  table:[["句型","結構","例句"],["no sooner ... than","主詞 + had no sooner + p.p. + than + 過去式","He had no sooner arrived than it rained."],["No sooner 放句首","No sooner had + 主詞 + p.p. + than + 過去式","No sooner had he arrived than it rained."],["hardly / scarcely ... when","Hardly had + 主詞 + p.p. + when / before + 過去式","Hardly had he arrived when it rained."],["the moment / the minute / as soon as","+ 主詞 + 動詞（不倒裝）","The moment he arrived, it rained."],["by the time + 過去式","主要子句用 had + p.p.","By the time I got there, he had left."],["by the time + 現在式","主要子句用 will have + p.p.","By the time you come, I will have finished."]],
  points:[
   "no sooner 搭配 than（因為 sooner 是比較級）；hardly、scarcely 搭配 when 或 before。陷阱：✗ No sooner ... when、✗ Hardly ... than。",
   "先發生的動作用過去完成式 had + p.p.，後發生的用過去式：No sooner had I sat down than the phone rang.",
   "No sooner、Hardly、Scarcely 有否定意味，放句首要倒裝成 had + 主詞 + p.p.，和高一學過的否定副詞倒裝一樣。",
   "the moment、the minute、the instant、immediately、as soon as 後面接一般子句，不倒裝；講未來時用現在式代替未來式：I'll call you as soon as I arrive.",
   "by the time + 過去式 → 主要子句 had + p.p.；by the time + 現在式 → 主要子句 will have + p.p.；by the time 子句裡不能用 will。",
   "改寫題常考：On + V-ing = as soon as：On hearing the news, she cried. = As soon as she heard the news, she cried."],
  ex:[
   ["No sooner had the new vaccine arrived than people lined up for it.","新疫苗一到，大家就排隊去打。","No sooner had + 主詞 + p.p. + than + 過去式。"],
   ["Hardly had she accomplished one goal when she set another.","她一達成一個目標，就馬上設定下一個。","Hardly 搭配 when，句首要倒裝。"],
   ["The moment the drone took off, the kids cheered.","無人機一起飛，孩子們就歡呼。","the moment + 一般子句，不倒裝。"],
   ["By the time the manager arrived, every punctual worker had already started.","經理到的時候，每位準時的員工都已經開工了。","by the time + 過去式，主要子句用 had + p.p.。"],
   ["By the time he turns thirty, he will have accomplished his dream.","等到他三十歲時，他將已經完成夢想。","by the time + 現在式，主要子句用 will have + p.p.。"]]},
{ id:"g4", title:"高二文法總複習：假設、倒裝、分詞、子句綜合判斷",
  intro:"學測綜合測驗和文意選填不會告訴你考哪一課，要自己當偵探：先看空格前後的線索，判斷這格需要什麼詞性、什麼結構，再選答案。",
  table:[["看到的線索","想到的文法","例句"],["Had / Were / Should 放句首，沒有 if","假設語氣省略 if 的倒裝","Had I known, I would have told you."],["But for / Without + 名詞","若不是……（假設）","But for your help, I would have failed."],["Only / Never / Not until 放句首","倒裝：助動詞移到主詞前","Only then did I understand."],["句子已有動詞、沒有連接詞","分詞構句：主動 V-ing／被動 p.p.","Seen from space, the earth looks blue."],["空格後缺主詞或受詞","關係代名詞 who / which / what","What he said is true."],["空格後句子完整","that 名詞子句或關係副詞 where / when","This is the place where we met."]],
  points:[
   "假設語氣倒裝：If I had known → Had I known；If I were → Were I；If you should need → Should you need。主要子句的時態不變。",
   "It is (high) time + 主詞 + 過去式：It's time we went home.；I wish / as if + 過去式（與現在相反）或 had + p.p.（與過去相反）。",
   "否定或限定副詞放句首要倒裝：Never have I seen ...；Only by working hard can you succeed.；Not until ten did he come home.",
   "分詞判斷：主動用 V-ing、被動用 p.p.、比主要子句更早發生用 Having + p.p.；句中已有動詞又沒有連接詞時，另一個動詞要改成分詞。",
   "子句判斷：what = the thing(s) that，前面沒有先行詞、後面缺東西；that 引導的名詞子句後面是完整句子；whether 表示「是否」。",
   "文意選填先判斷詞性：冠詞後面要名詞、be 動詞後面常是形容詞或 p.p.、to 後面接原形動詞（但 look forward to、be used to、be addicted to 的 to 是介系詞，要接 V-ing 或名詞）。"],
  ex:[
   ["Had he not been so hasty, he wouldn't have made the mistake.","要不是他那麼匆忙，他就不會犯錯了。","Had he not been = If he had not been，與過去事實相反。"],
   ["Not until he suffered from burnout did he learn to balance work and rest.","直到過勞了，他才學會平衡工作和休息。","Not until 放句首，主要子句倒裝（did he learn）。"],
   ["Diagnosed early, the disease can be cured.","如果及早診斷，這種病是可以治好的。","疾病是「被診斷」的，用過去分詞。"],
   ["If humans were immortal, the earth would be very crowded.","如果人類長生不死，地球會非常擁擠。","與現在事實相反，be 動詞用 were。"],
   ["It is vital that every student understand the rules.","每個學生都了解規則是非常重要的。","It is vital that + 主詞 + (should) + 原形動詞。"]]}
];

const S2_2_3_QUIZ = [
 ["You had better ___ late again, or the teacher will be angry.",["not to be","not be","don't be","be not"],1,"had better 的否定是 had better not + 原形動詞，not 放在 better 後面，不加 to。","g1"],
 ["He ___ not tell his parents about the broken vase.",["to dare","daring","dares","dare"],3,"dare 當助動詞用在否定句時，後面接原形，第三人稱也不加 s：He dare not tell ...。","g1"],
 ["I would rather stay home ___ go to the crowded night market.",["than","to","then","rather"],0,"would rather A than B：寧願 A 也不要 B，A、B 都用原形動詞。","g1"],
 ["I'd rather you ___ my phone without asking.",["don't use","didn't use","not use","won't use"],1,"would rather + 另一個人的子句時，子句用過去式表示對現在或未來的希望：I'd rather you didn't use ...。","g1"],
 ["When you drive in heavy rain, you cannot be ___ careful.",["very","so","too","enough"],2,"cannot be too careful 表示「再小心也不為過」。","g1"],
 ["The last bus has left. We ___ walk home.",["dare not","need not","might as well","would rather not"],2,"公車已經沒了，沒有更好的選擇，「不如走路回家吧」用 might as well + 原形動詞。","g1"],
 ["She has studied hard all year, so she ___ pass the exam easily.",["need","dare not","might as well","may well"],3,"may well + 原形動詞 表示「很可能」：她整年都很用功，很可能輕鬆通過。","g1"],
 ["\"___ I finish the report today?\" \"No, you needn't.\"",["Do","Have","Need","Dare"],2,"回答用 needn't，問句也要用助動詞 need：Need I ...?","g1"],
 ["Your shoes are dirty. They need ___.",["wash","washing","to wash","washed"],1,"物 + need + V-ing 表示被動：They need washing. = They need to be washed.","g1"],
 ["Each of the students ___ a tablet in class.",["has","have","having","are having"],0,"Each of + 複數名詞，真正的主詞是 Each（單數），動詞用 has。","g2"],
 ["The number of people who exercise every day ___ increasing.",["are","were","have","is"],3,"the number of + 複數名詞 表示「……的數量」，主詞是 number，用單數 is。","g2"],
 ["A number of students ___ joined the coding club.",["has","is","have","was"],2,"a number of = many，後面接複數名詞，動詞用複數 have。","g2"],
 ["Neither the students nor the teacher ___ the answer.",["know","knows","are knowing","have known"],1,"neither A nor B 用就近原則：靠近動詞的 the teacher 是單數，用 knows。","g2"],
 ["Either you or your brother ___ to clean the room today.",["have","are","were","has"],3,"either A or B 用就近原則：靠近的 your brother 是單數，用 has。","g2"],
 ["The teacher, as well as her students, ___ excited about the trip.",["is","are","were","have been"],0,"A as well as B 動詞看 A（The teacher，單數），用 is。","g2"],
 ["My father, along with my uncles, ___ fishing every Sunday.",["go","are going","goes","have gone"],2,"A along with B 動詞看 A（My father，單數）；every Sunday 是習慣，用現在簡單式 goes。","g2"],
 ["The police ___ looking for the missing boy.",["are","is","was","has been"],0,"police 一律當複數，動詞用 are。","g2"],
 ["Every boy and girl ___ a chance to speak.",["get","are getting","have","gets"],3,"every 連接兩個名詞時仍然當單數，用 gets。","g2"],
 ["No sooner had I got home ___ it started to rain.",["when","before","then","than"],3,"no sooner 是比較級的感覺，要搭配 than。","g3"],
 ["Hardly ___ the bell rung when the students ran out.",["did","was","had","has"],2,"Hardly 放句首要倒裝，先發生的動作用過去完成式：Hardly had the bell rung when ...。","g3"],
 ["I had scarcely fallen asleep ___ the phone rang.",["than","when","then","until"],1,"scarcely 和 hardly 一樣，搭配 when（或 before），不搭配 than。","g3"],
 ["By the time we got to the theater, the movie ___.",["already started","has already started","had already started","will already start"],2,"by the time + 過去式，主要子句用過去完成式 had + p.p.。","g3"],
 ["By the time you come back, I ___ my homework.",["will have finished","had finished","finished","have finished"],0,"by the time + 現在式（代替未來），主要子句用未來完成式 will have + p.p.。","g3"],
 ["The moment she ___ the news, she burst into tears.",["hears","has heard","had been hearing","heard"],3,"the moment + 一般子句，過去發生的事用過去式 heard，不用倒裝。","g3"],
 ["No sooner ___ than the lights went out.",["he had sat down","had he sat down","did he sit down","he sat down"],1,"No sooner 放句首要倒裝成 had + 主詞 + p.p.。","g3"],
 ["___ hearing the news, he called his mother.",["On","In","At","By"],0,"On + V-ing 表示「一……就……」，等於 As soon as he heard the news。","g3"],
 ["I will call you as soon as I ___ at the airport.",["will arrive","arrived","arrive","had arrived"],2,"as soon as 引導時間副詞子句，用現在式代替未來式。","g3"],
 ["___ I known about the party, I would have gone.",["If","Had","Were","Should"],1,"與過去事實相反的假設省略 if 要倒裝：Had I known = If I had known。","g4"],
 ["___ your help, I would have failed the test.",["But for","Because of","Thanks to","With"],0,"But for + 名詞 = If it had not been for，表示「要不是……」，搭配 would have p.p.。","g4"],
 ["Only by working hard ___ succeed.",["can you","you can","you could","did you"],0,"Only + 副詞片語放句首要倒裝，助動詞 can 移到主詞前面。","g4"],
 ["___ from space, the earth looks like a blue ball.",["Seeing","Seen","To see","Having seen"],1,"地球是「被看」的，被動用過去分詞 Seen。","g4"],
 ["___ he said at the meeting surprised everyone.",["That","Which","What","Whether"],2,"said 後面缺受詞，前面又沒有先行詞，用 what（= the thing that）。","g4"],
 ["It's high time we ___ for the final exam.",["prepare","prepared","will prepare","had prepared"],1,"It is (high) time + 主詞 + 過去式，表示「早該……了」。","g4"],
 ["Never ___ such a vivid dream before.",["I have had","had","I had","have I had"],3,"否定副詞 Never 放句首要倒裝：Never have I had ...。","g4"],
 ["Sleep is ___ to your health; without it, you cannot focus.",["vital","vitality","vitally","revive"],0,"be 動詞後面、to 前面要形容詞：be vital to 表示「對……極重要」。文意選填先判斷詞性！","g4"],
 ["___ you need any help, please let me know.",["Should","Had","Were","Did"],0,"If you should need 省略 if 倒裝成 Should you need，表示「萬一需要」。","g4"],
 ["The man ___ by the doctor last week has recovered.",["examining","examined","was examined","examines"],1,"句子已經有主要動詞 has recovered，空格要用分詞修飾 The man；他是「被檢查」的，用過去分詞 examined。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S2_2_3_CLASS = {
g1:[
 {say:"高二最後一次段考，衝啊！今天先搞定一群「很像助動詞」的小傢伙：need、dare、would rather、had better、may well、might as well。它們有一個共同點：後面都接原形動詞！", board:[["You had better go.",["had better","go"]],["I would rather stay.",["would rather","stay"]]]},
 {say:"先看 need，它有兩種身分。當一般動詞：{He needs to study.} 要加 s、加 to。當助動詞：只出現在否定和疑問，{He need not study.} 第三人稱不加 s，後面直接接原形！", board:[["He needs to study.",["needs to"]],["He need not study.",["need not"]],["He needs not study.",[],true]]},
 {say:"dare（敢）也一樣：{He dare not tell.} 是助動詞，不加 s；{He doesn't dare to tell.} 是一般動詞。兩種都對，但不能寫成 He dares not tell。", board:[["He dare not tell.",["dare not"]],["He doesn't dare to tell.",["doesn't dare to"]],["He dares not tell.",[],true]]},
 {say:"口訣記起來！", chant:"need、dare 當助動詞：否定疑問才出現，後面原形不加 s！"},
 {ask:{say:"考考你！", q:"He ___ not tell his parents the truth.", opts:["dare","dares"], ans:0,
   ok:"厲害！dare 當助動詞時，第三人稱也不加 s。", bad:{1:"dare not 是助動詞用法，助動詞不加 s 喔：He dare not tell。"},
   again:{q:"___ I finish it today? — No, you needn't.", opts:["Need","Do"], ans:0, exp:"回答用 needn't，問句也要用助動詞 Need 開頭。"}}},
 {say:"再來是 had better「最好……」。它長得像過去式，其實在給現在或未來的建議。否定要特別小心：not 放在 better 後面，而且不加 to！", board:[["You had better not be late.",["had better not"]],["You had not better be late.",[],true],["You had better not to be late.",[],true]]},
 {say:"{I would rather walk than wait.} 寧願走路也不要等，A 和 B 都用原形。如果後面接「另一個人」的子句，要用過去式：{I'd rather you stayed home tonight.} 雖然講的是今晚，還是用 stayed，這是假設的語感。", board:[["I would rather walk than wait.",["would rather","than"]],["I'd rather you stayed home tonight.",["stayed"]]]},
 {say:"第二個口訣！", chant:"had better not 加原形；would rather A than B，接人用過去式！"},
 {ask:{q:"I'd rather you ___ my phone without asking.", opts:["don't use","didn't use","not use"], ans:1,
   ok:"答對！would rather 後面接另一個人的子句，用過去式 didn't use。", bad:{0:"would rather + 子句要用過去式，表示「希望你不要」，所以是 didn't use。",2:"子句裡要有完整的主詞和動詞，而且用過去式：you didn't use。"},
   again:{q:"You had better ___ late again.", opts:["not to be","not be"], ans:1, exp:"had better not + 原形動詞，不加 to。"}}},
 {say:"接著分清楚兩個長得很像的：{He may well be right.} 他很可能是對的，may well = 很可能。{We might as well walk home.} 公車沒了，我們不如走路回家，might as well = 不妨、倒不如。", board:[["He may well be right.",["may well"]],["We might as well walk home.",["might as well"]]]},
 {say:"最後一個大陷阱：{You cannot be too careful.} 不是「你不能太小心」，而是「再小心也不為過」！cannot ... too ... 意思是越……越好。", board:[["You cannot be too careful.",["cannot","too"]],["= 再小心也不為過",[]]]},
 {say:"這個一定要背！", chant:"cannot 加 too，越多越好不嫌多！"},
 {ask:{say:"最後一題！", q:"The last bus has left. We ___ walk home.", opts:["may well","might as well","dare not"], ans:1,
   ok:"完美！沒有別的選擇了，「不如走路回家」用 might as well。", bad:{0:"may well 是「很可能」，這裡要表達「不如、不妨」，用 might as well。",2:"dare not 是「不敢」，和語意不合喔。"},
   again:{q:"When you cross the street, you cannot be ___ careful.", opts:["too","very"], ans:0, exp:"cannot be too careful：再小心也不為過。"}}},
 {say:"助動詞進階過關！複習口訣：need、dare 當助動詞，否定疑問才出現；had better not 加原形；would rather 接人用過去式；may well 很可能，might as well 不妨；cannot 加 too，越多越好！", end:true}
],
g2:[
 {say:"今天的主題是「主詞動詞一致」。國中就學過主詞單數、動詞加 s，但高二的句子會放很多障眼法，讓你找不到真正的主詞！先看這句：", board:[["Each of the students has a laptop.",["Each","has"]]]},
 {say:"each 和 every 永遠是單數。{Each of the students has a laptop.} of 後面雖然是複數 students，但真正的主詞是 Each，所以用 has。{Every boy and girl has a seat.} every 連接兩個名詞，也還是單數！", board:[["Each of the students has a laptop.",["Each","has"]],["Every boy and girl has a seat.",["Every","has"]]]},
 {say:"口訣！", chant:"each、every，永遠單數！"},
 {say:"再來是一對雙胞胎：{The number of students is 30.} the number 是「數量」，數量只有一個，用單數。{A number of students are absent.} a number of 等於 many，表示「許多」，用複數。", board:[["The number of students is 30.",["The number","is"]],["A number of students are absent.",["A number of","are"]]]},
 {ask:{say:"考考你！", q:"The number of cars in Taipei ___ growing.", opts:["are","is"], ans:1,
   ok:"對！the number of 的主詞是 number（數量），用單數 is。", bad:{0:"小心！主詞是 The number（數量），不是 cars，所以用 is。"},
   again:{q:"A number of students ___ joined the club.", opts:["have","has"], ans:0, exp:"a number of = many，用複數 have。"}}},
 {say:"接下來是「就近原則」：either A or B、neither A nor B、not only A but also B，動詞看誰比較靠近，就跟誰！{Neither you nor he is wrong.} 靠近動詞的是 he，所以用 is。", board:[["Neither you nor he is wrong.",["he","is"]],["Either my parents or my sister has the key.",["my sister","has"]]]},
 {say:"口訣！", chant:"either、neither、not only，動詞跟著近的走！"},
 {say:"相反地，A as well as B、A along with B、A together with B，後面的 B 只是附加的「跟班」，動詞要看前面的 A：{The teacher, as well as the students, is here.}", board:[["The teacher, as well as the students, is here.",["The teacher","is"]],["My father, along with my uncles, goes fishing.",["My father","goes"]]]},
 {ask:{q:"The teacher, as well as her students, ___ excited.", opts:["are","is"], ans:1,
   ok:"讚！as well as 的跟班不算，看前面的 The teacher，用 is。", bad:{0:"as well as 後面的 students 只是附加，動詞看前面的 The teacher：is。"},
   again:{q:"Neither the students nor the teacher ___ the answer.", opts:["knows","know"], ans:0, exp:"就近原則：靠近的是 the teacher（單數），用 knows。"}}},
 {say:"最後是集合名詞：family、class、team 當成一個整體用單數 {My family is big.}；強調裡面每個成員用複數 {My family are all early risers.} 另外，police 一律用複數：{The police are coming.}", board:[["My family is big.",["is"]],["My family are all early risers.",["are"]],["The police are coming.",["police","are"]]]},
 {ask:{say:"最後一題！", q:"The police ___ looking for the missing boy.", opts:["is","are","has"], ans:1,
   ok:"完美！police 一律當複數，用 are。", bad:{0:"police 一律當複數喔，要用 are。",2:"looking 前面要 be 動詞，而且 police 是複數：are。"},
   again:{q:"Either you or your brother ___ to clean the room.", opts:["has","have"], ans:0, exp:"就近原則：靠近的是 your brother（單數），用 has。"}}},
 {say:"主詞動詞一致過關！口訣：each、every 永遠單數；the number 單數，a number 複數；either、neither 跟著近的走；as well as 的跟班不算數；police 一律複數！", end:true}
],
g3:[
 {say:"今天學「一……就……」的高級說法！國中你會說 {As soon as he got home, it rained.} 高二要升級成 No sooner、Hardly，學測翻譯超愛考。", board:[["As soon as he got home, it rained.",["As soon as"]]]},
 {say:"先看 no sooner：{He had no sooner got home than it rained.} 先發生的「到家」用過去完成式 had + p.p.，後發生的「下雨」用過去式。sooner 是比較級，所以搭配 than！", board:[["He had no sooner got home than it rained.",["had no sooner got","than","rained"]]]},
 {say:"把 No sooner 搬到句首，它帶有否定意味，所以要倒裝：{No sooner had he got home than it rained.} 這和高一學過的「否定副詞放句首要倒裝」一模一樣。", board:[["No sooner had he got home than it rained.",["No sooner had he","than"]]]},
 {say:"hardly 和 scarcely 也是一……就……，但它們搭配 when 或 before：{Hardly had he got home when it rained.}", board:[["Hardly had he got home when it rained.",["Hardly had he","when"]],["Scarcely had he got home when it rained.",["Scarcely had he","when"]]]},
 {say:"口訣來囉！", chant:"No sooner 配 than，Hardly、Scarcely 配 when！"},
 {ask:{say:"考考你！", q:"No sooner had I sat down ___ the phone rang.", opts:["when","than"], ans:1,
   ok:"對！no sooner 配 than。", bad:{0:"when 是給 hardly、scarcely 用的，no sooner 要配 than。"},
   again:{q:"Hardly had the bell rung ___ the students ran out.", opts:["when","than"], ans:0, exp:"Hardly 配 when。"}}},
 {ask:{q:"No sooner ___ than the lights went out.", opts:["he had arrived","had he arrived","did he arrive"], ans:1,
   ok:"讚！No sooner 放句首要倒裝，而且先發生的用 had + p.p.。", bad:{0:"No sooner 在句首要倒裝：had he arrived。",2:"先發生的動作要用過去完成式，倒裝成 had he arrived，不是 did he arrive。"},
   again:{q:"___ had she left when it started to snow.", opts:["Hardly","No sooner"], ans:0, exp:"後面是 when，所以用 Hardly。"}}},
 {say:"覺得倒裝太難？口說可以用 the moment、the minute、as soon as，後面接一般句子就好，不用倒裝：{The moment he saw me, he smiled.} 還有 {On hearing the news, she cried.} On + V-ing 也是一……就……。", board:[["The moment he saw me, he smiled.",["The moment"]],["On hearing the news, she cried.",["On hearing"]]]},
 {say:"最後是 by the time「到了……的時候，已經……」。{By the time I got there, he had left.} 我到的時候他早走了：by the time 用過去式，主要子句用 had + p.p.。講未來的話：{By the time you come back, I will have finished.} by the time 用現在式，主要子句用 will have + p.p.。", board:[["By the time I got there, he had left.",["got","had left"]],["By the time you come back, I will have finished.",["come","will have finished"]]]},
 {say:"by the time 的口訣！", chant:"By the time 過去配 had p.p.，現在配 will have p.p.！"},
 {ask:{say:"最後一題！", q:"By the time we got to the theater, the movie ___.", opts:["has started","had started","will have started"], ans:1,
   ok:"太強了！got 是過去式，電影更早開始，用 had started。", bad:{0:"by the time 後面是過去式 got，主要子句要用過去完成式 had started。",2:"這是過去的事，不能用 will have started。"},
   again:{q:"By the time you come back, I ___ dinner.", opts:["will have cooked","had cooked"], ans:0, exp:"by the time + 現在式（未來），主要子句用 will have + p.p.。"}}},
 {say:"時間句型過關！口訣：No sooner 配 than，Hardly、Scarcely 配 when，放句首要倒裝；the moment、as soon as 不倒裝；By the time 過去配 had p.p.，現在配 will have p.p.！", end:true}
],
g4:[
 {say:"高二最後一堂文法課：總複習！學測的綜合測驗和文意選填不會告訴你考哪一課，你要自己當偵探，看空格前後的線索。安安老師給你四條線索！", board:[["看線索 → 判斷文法 → 選答案",[]]]},
 {say:"線索一：句首是 Had、Were、Should，後面卻沒有 if，就是假設語氣的倒裝！{Had I known, I would have told you.} = If I had known。{Were I you, I would go.} = If I were you。", board:[["Had I known, I would have told you.",["Had I known"]],["Were I you, I would go.",["Were I"]],["Should you need help, call me.",["Should you"]]]},
 {say:"口訣！", chant:"Had、Were、Should 開頭，其實是 if 躲起來！"},
 {ask:{say:"考考你！", q:"___ I known the truth, I would have told you.", opts:["If","Had","Were"], ans:1,
   ok:"對！Had I known = If I had known，與過去事實相反。", bad:{0:"If 後面要接 I had known，這裡只有 I known，所以要用 Had 倒裝。",2:"Were 是給 be 動詞用的，known 是過去分詞，要搭配 Had。"},
   again:{q:"___ you need help, please call me.", opts:["Should","Had"], ans:0, exp:"Should you need = If you should need，表示「萬一需要」。"}}},
 {say:"線索二：Only、Never、Not until、Hardly 放句首，後面要倒裝，助動詞跑到主詞前面：{Only then did I understand.} {Never have I seen such a vivid dream.}", board:[["Only then did I understand.",["Only then","did I"]],["Never have I seen such a vivid dream.",["Never","have I"]]]},
 {ask:{q:"Only by working hard ___ succeed.", opts:["you can","can you"], ans:1,
   ok:"讚！Only 放句首要倒裝：can you succeed。", bad:{0:"Only 放句首要倒裝，助動詞 can 要移到主詞 you 前面。"},
   again:{q:"Not until midnight ___ home.", opts:["did he come","he came"], ans:0, exp:"Not until 放句首，主要子句倒裝：did he come。"}}},
 {say:"線索三：一個句子已經有動詞了，又沒有連接詞，另一個動詞就要變分詞。主動用 V-ing，被動用 p.p.：{Seen from space, the earth looks blue.} 地球是「被看」的，所以用 Seen。", board:[["Seen from space, the earth looks blue.",["Seen"]],["Facing the dilemma, she asked her parents.",["Facing"]]]},
 {say:"線索四：看空格後面缺不缺東西。缺主詞或受詞，用 what、which、who；後面完整，用 that、where、when。{What he said is true.} said 缺受詞，前面又沒有先行詞，所以用 what。", board:[["What he said is true.",["What"]],["I know that he is honest.",["that"]]]},
 {say:"子句的口訣！", chant:"缺東西用代名詞，完整用 that，沒有先行詞就用 what！"},
 {ask:{q:"___ he said at the meeting surprised everyone.", opts:["That","What","Which"], ans:1,
   ok:"完全正確！said 缺受詞，前面沒有先行詞，用 what。", bad:{0:"that 引導的子句後面要完整，但 said 後面缺受詞。",2:"which 前面要有先行詞，這裡沒有，所以用 what。"},
   again:{q:"___ from the mountain, the city looks beautiful.", opts:["Seeing","Seen"], ans:1, exp:"城市是「被看」的，用過去分詞 Seen。"}}},
 {say:"最後是文意選填的祕訣：先看詞性！冠詞後面要名詞，be 動詞後面常常是形容詞，to 後面接原形動詞。{Water is vital to life.} is 後面放形容詞 vital；{She is full of vitality.} of 後面放名詞 vitality。", board:[["Water is vital to life.",["vital"]],["She is full of vitality.",["vitality"]]]},
 {ask:{say:"最後一題！", q:"Young people bring ___ to the old town.", opts:["vital","vitality","vividly"], ans:1,
   ok:"太棒了！bring 後面要接名詞當受詞：vitality。", bad:{0:"vital 是形容詞，bring 後面需要名詞當受詞。",2:"vividly 是副詞，不能當受詞，要用名詞 vitality。"},
   again:{q:"Sleep is ___ to your health.", opts:["vital","vitality"], ans:0, exp:"be 動詞後面放形容詞：be vital to。"}}},
 {say:"高二文法總複習過關！四條線索：Had、Were、Should 開頭是 if 躲起來；Only、Never 放句首要倒裝；沒有連接詞就用分詞；缺東西用代名詞，沒先行詞用 what。高二的文法全部上完了，去挑戰魔王吧！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S2_2_3_ROOTS = [
  {id:"r1", title:"字根 ann / enn：年"},
  {id:"r2", title:"字根 chron / temp：時間"},
  {id:"r3", title:"字根 vit / viv：生命"},
  {id:"r4", title:"字根 mort：死"}
];
const S2_2_3_ROOT_CLASS = {
r1:[
 {say:"高二最後一次字根課！這次的字根都和「時間、生命」有關。第一個：<<ann>>，意思是「年」，放在字中間常常變成 <<enn>>。", board:[["ann / enn = 年",["ann","enn"],false,true]]},
 {say:"{annual} 每年的：ann 年加上形容詞字尾 ual。學校的 annual sports day 就是一年一度的運動會。你高一學過的 {anniversary} 週年紀念，也有 ann！", board:[["ann + ual = annual",["ann"],false,true],["ann + i + vers + ary = anniversary",["ann"],false,true]]},
 {say:"口訣！", chant:"ann、enn，一年又一年！"},
 {say:"看到 enn，前面再加上數字字首：bi 是二，cent 是百，mill 是千。{biennial} 兩年一次的、{centennial} 百年紀念、{millennium} 一千年。活到一百年的人，就是 {centenarian} 百歲人瑞，這裡的 enn 少了一個 n，變成 en。", board:[["bi + enn + ial = biennial",["enn"],false,true],["cent + enn + ial = centennial",["enn"],false,true],["mill + enn + ium = millennium",["enn"],false,true],["cent + en + arian = centenarian",["en"],false,true]]},
 {ask:{say:"考考你！", q:"bi（二）＋ enn（年）＋ ial ＝ biennial，意思是？", opts:["一年兩次的","兩年一次的","兩百年的"], ans:1,
   ok:"對！bi 是二、enn 是年，每兩年一次。", bad:{0:"enn 是「年」，bi 是「二」，所以是「兩年」一次，不是一年兩次。",2:"兩百年要有 cent（百），這裡只有 bi（二）。"},
   again:{q:"cent（百）＋ enn（年）＝ centennial，意思是？", opts:["百年紀念","一百分","世紀"], ans:0, exp:"cent 百 + enn 年 = 一百年，就是百年紀念。"}}},
 {say:"per 是「穿過」：{perennial} 穿過一年又一年，就是「長年的、多年生的」。{Traffic is a perennial problem.} 交通是長年存在的問題。", board:[["per + enn + ial = perennial",["enn"],false,true]]},
 {ask:{q:"Traffic jams are a ＿＿ problem in this city.（長年的）", opts:["annual","perennial","millennium"], ans:1,
   ok:"讚！perennial 是穿過一年又一年，長年存在的。", bad:{0:"annual 是「每年一次的」，不是一直存在。",2:"millennium 是名詞「千年」，不能放在 problem 前面修飾它。"},
   again:{q:"The school holds an ＿＿ sports day.（每年的）", opts:["annual","biennial"], ans:0, exp:"每年一次是 annual。"}}},
 {say:"小提醒：不是每個 ann 都和年有關！{announce} 宣布、{annoy} 惹惱，就和「年」沒有關係。字根是幫助記憶的工具，還是要看整個字的意思喔。", board:[["announce 宣布",["ann"],false,true],["annoy 惹惱",["ann"],false,true]]},
 {ask:{say:"最後一題！", q:"哪一個字和「年」沒有關係？", opts:["annual","announce","biennial"], ans:1,
   ok:"完美！announce 是「宣布」，ann 在這裡不是「年」。", bad:{0:"annual 是「每年的」，和年有關喔。",2:"biennial 是「兩年一次的」，有 enn（年）。"},
   again:{q:"millennium 的意思是？", opts:["一百萬","一千年","每年的"], ans:1, exp:"mill 千 + enn 年 = 一千年。"}}},
 {say:"ann、enn 過關！口訣：ann、enn，一年又一年；bi 兩年、cent 百年、mill 千年，per 穿過一年又一年；活過一百年是 centenarian！", end:true}
],
r2:[
 {say:"今天兩個字根都表示「時間」：<<chron>> 來自希臘文，<<temp>> 來自拉丁文。學會它們，一口氣串起一整串單字！", board:[["chron = 時間",["chron"],false,true],["temp / tempor = 時間",["temp"],false,true]]},
 {say:"先看 chron。你上次學過的 {chronic} 持續很長時間的，就是「慢性的」：chronic disease 慢性病。今天的新字 {chronicle}，照時間一年一年記下來的，就是「編年史」。", board:[["chron + ic = chronic",["chron"],false,true],["chron + icle = chronicle",["chron"],false,true]]},
 {say:"log 是「說、學問」：照時間來說的就是 {chronology} 年表；它的形容詞 {chronological} 是「依照時間順序的」，學測閱讀最愛問：Which is the correct chronological order? 意思就是請你依時間先後排出來。", board:[["chrono + log + y = chronology",["chrono"],false,true],["chrono + log + ical = chronological",["chrono"],false,true]]},
 {say:"口訣！", chant:"chron、temp，時間滴答滴！"},
 {ask:{say:"考考你！", q:"chronic pain 最可能是？", opts:["突然的疼痛","長期的疼痛","輕微的疼痛"], ans:1,
   ok:"對！chron 是時間，持續很久的疼痛就是慢性疼痛。", bad:{0:"chron 是「時間」，chronic 表示持續很久，不是突然。",2:"chronic 和程度無關，是指持續很久。"},
   again:{q:"in chronological order 的意思是？", opts:["按時間順序","按字母順序"], ans:0, exp:"chron 是時間，chronological order 就是時間順序。"}}},
 {say:"syn 是「相同」：{synchronize} 讓時間相同，就是「同步」。手機和電腦 synchronize 之後，裡面的資料就一樣了。", board:[["syn + chron + ize = synchronize",["chron"],false,true]]},
 {say:"再來看 temp。{temporary} 只維持一段時間的，就是「暫時的」；{contemporary} con 是「一起」，和我們在同一個時間的，就是「當代的」；{tempo} 時間的快慢，就是「節奏」。", board:[["tempor + ary = temporary",["tempor"],false,true],["con + tempor + ary = contemporary",["tempor"],false,true],["temp + o = tempo",["temp"],false,true]]},
 {ask:{q:"This is only a ＿＿ job; I'll leave in August.", opts:["temporary","contemporary","chronic"], ans:0,
   ok:"讚！只做到八月，是暫時的工作：temporary。", bad:{1:"contemporary 是「當代的」，和「暫時」不一樣喔。",2:"chronic 是「慢性的」，用來形容疾病或問題。"},
   again:{q:"con（一起）＋ tempor（時間）＋ ary ＝ contemporary，意思是？", opts:["當代的","暫時的"], ans:0, exp:"和我們在同一個時間的，就是當代的。"}}},
 {say:"小心長得像的字：{temple} 是寺廟、{temperature} 是溫度，它們的 temp 不是「時間」，別被騙了！", board:[["temple 寺廟",["temp"],false,true],["temperature 溫度",["temp"],false,true]]},
 {ask:{say:"最後一題！", q:"synchronize 的意思是？", opts:["同步","慢性","編年史"], ans:0,
   ok:"完美！syn 相同 + chron 時間 + ize 使……，使時間相同就是同步。", bad:{1:"慢性的是 chronic。",2:"編年史是 chronicle。"},
   again:{q:"tempo 的意思是？", opts:["寺廟","節奏","溫度"], ans:1, exp:"tempo 是時間的快慢，也就是節奏；寺廟是 temple，溫度是 temperature。"}}},
 {say:"時間字根過關！口訣：chron、temp 都是時間；chronic 慢性、chronicle 編年史、chronology 年表、chronological 照時間順序、synchronize 同步；temporary 暫時、contemporary 當代、tempo 節奏！", end:true}
],
r3:[
 {say:"今天的字根很有活力：<<vit>> 和 <<viv>>，都是「生命、活」。你天天吃的維他命 vitamin 就有 vit，是維持生命的營養素！", board:[["vit / viv = 生命、活",["vit","viv"],false,true],["vitamin 維他命",["vit"],false,true]]},
 {say:"{vital} 和生命有關的，引申成「極重要的」：Water is vital to life. 再加上名詞字尾 ity，{vitality} 就是「活力」。", board:[["vit + al = vital",["vit"],false,true],["vit + al + ity = vitality",["vit"],false,true]]},
 {say:"口訣！", chant:"vit、viv，活跳跳！"},
 {ask:{say:"考考你！", q:"vital 最常見的意思是？", opts:["極重要的","維他命","視覺的"], ans:0,
   ok:"對！和生命有關的，就是極重要的。", bad:{1:"維他命是 vitamin，vital 是形容詞「極重要的」。",2:"視覺的是 visual，字根是 vis（看），不是 vit。"},
   again:{q:"My grandma is full of ＿＿.（活力）", opts:["vital","vitality"], ans:1, exp:"full of 後面要接名詞：vitality。"}}},
 {say:"再看 viv。{vivid} 像活的一樣，就是「生動的、鮮明的」：a vivid memory 鮮明的回憶。{revive} re 是「再」，再活過來，就是「使復甦、使恢復精神」。", board:[["viv + id = vivid",["viv"],false,true],["re + vive = revive",["viv"],false,true]]},
 {say:"你國中學過 {survive} 存活下來：sur 是「超越」，越過危險活下來。它的名詞是 {survival} 生存；活下來的人是 survivor。", board:[["sur + viv + e = survive",["viv"],false,true],["sur + viv + al = survival",["viv"],false,true]]},
 {ask:{q:"re（再）＋ vive（活）＝ revive，意思是？", opts:["回顧","使復甦","拒絕"], ans:1,
   ok:"讚！再活過來，就是使復甦。", bad:{0:"回顧是 review，字根是 view（看）。",2:"拒絕是 refuse 或 reject，和「活」無關。"},
   again:{q:"survive 的名詞「生存」是？", opts:["survival","surviveness"], ans:0, exp:"survive 去 e 加 al：survival。"}}},
 {say:"小心 vis 和 vit 長得很像！vis 是「看」（visible、vision），vit 是「生命」（vital、vitality）。一個用眼睛，一個靠心跳！", board:[["vis = 看：visible, vision",["vis"],false,true],["vit = 生命：vital, vitality",["vit"],false,true]]},
 {ask:{say:"最後一題！", q:"The colors are so ＿＿ that the flowers look real.", opts:["visible","vivid","vital"], ans:1,
   ok:"完美！顏色像活的一樣，就是 vivid 鮮明的。", bad:{0:"visible 是「看得見的」，這裡要說顏色「鮮明生動」。",2:"vital 是「極重要的」，不是形容顏色。"},
   again:{q:"Water is ＿＿ to all living things.", opts:["vital","vivid"], ans:0, exp:"be vital to：對……極重要。"}}},
 {say:"生命字根過關！口訣：vit、viv 活跳跳；vital 極重要、vitality 活力、vivid 生動、revive 復甦、survival 生存！", end:true}
],
r4:[
 {say:"最後一堂字根課：<<mort>>，意思是「死」。聽起來有點嚴肅，但它能幫你一次記住好幾個學測單字。", board:[["mort = 死",["mort"],false,true]]},
 {say:"{mortal} 會死的：All humans are mortal. 當名詞是「凡人」，神話故事裡神和凡人的故事就常出現。加上否定字首 im：{immortal} 不會死的、不朽的。", board:[["mort + al = mortal",["mort"],false,true],["im + mort + al = immortal",["mort"],false,true]]},
 {say:"口訣！", chant:"mort 是死，加上 im 永遠不死！"},
 {ask:{say:"考考你！", q:"im（不）＋ mort（死）＋ al ＝ immortal，意思是？", opts:["不道德的","不朽的","重要的"], ans:1,
   ok:"對！不會死的，就是不朽的。", bad:{0:"不道德的是 immoral，少了一個 t，字根是 mor（風俗），別看錯！",2:"重要的是 important，和 mort 無關。"},
   again:{q:"mortal 當名詞時是？", opts:["凡人","神仙"], ans:0, exp:"會死的人，就是凡人。"}}},
 {say:"{mortality} 再加上 ity，是「死亡率」：infant mortality 嬰兒死亡率。衛生條件和疫苗讓 mortality 大大下降。", board:[["mort + al + ity = mortality",["mort"],false,true]]},
 {say:"小心這兩個字只差一個 t：{immortal} 不朽的，{immoral} 不道德的。看到 mort 才是「死」！", board:[["immortal 不朽的",["mort"],false,true],["immoral 不道德的",["mor"],false,true]]},
 {ask:{q:"Better hygiene has lowered infant ＿＿.", opts:["mortal","mortality","immortal"], ans:1,
   ok:"讚！lowered 後面要名詞：mortality 死亡率。", bad:{0:"mortal 是形容詞或「凡人」，這裡要的是「死亡率」：mortality。",2:"immortal 是「不朽的」，意思相反了。"},
   again:{q:"No one is ＿＿; everyone will die someday.", opts:["immortal","mortal"], ans:0, exp:"沒有人是不會死的：No one is immortal。"}}},
 {say:"加碼小知識：法文的 mort 也是「死」。英文的 mortgage（房屋貸款）原本的意思是「死的抵押」：貸款還清，抵押就「死掉」失效了。", board:[["mort + gage = mortgage",["mort"],false,true]]},
 {say:"最後把四堂字根串起來：ann 年、chron 和 temp 時間、vit 和 viv 生命、mort 死。人生從 vital 到 mortal，中間的每一刻都是 temp 和 chron！", board:[["ann / enn = 年",["ann"],false,true],["chron / temp = 時間",["chron","temp"],false,true],["vit / viv = 生命",["vit","viv"],false,true],["mort = 死",["mort"],false,true]]},
 {ask:{say:"最後一題！", q:"哪一個字根和「時間」無關？", opts:["chron","temp","mort"], ans:2,
   ok:"完美！mort 是「死」，不是時間。", bad:{0:"chron 是「時間」喔，像 chronic、chronicle。",1:"temp 也是「時間」，像 temporary、tempo。"},
   again:{q:"哪個字根表示「生命」？", opts:["viv","enn"], ans:0, exp:"viv 是生命，像 vivid、revive；enn 是年。"}}},
 {say:"字根全部過關！口訣：mort 是死，im mortal 永遠不死；ann 年、chron/temp 時間、vit/viv 生命。高二的字根字首全部上完了，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創，key 只用本單元的單字） ---------- */
Object.assign(ILLUS2, {
  punctual: () => svgWrap("#fff7e6", ground() + O.clock(116, 46, 1.5) + P({x:52, y:106, s:.9, hair:"spiky", hc:"#4a3428", oc:"#f97316", pose:"thumb", mood:"open"}) + txt(116, 90, "8:00", 13, "#b45309", 800) + spark(140, 18, .8) + spark(92, 22, .6, "#f97316")),
  balance: () => svgWrap("#ecfdf5", ground("#bbf7d0") + `<path d="M80 30 V96" stroke="#6b7280" stroke-width="3"/><path d="M80 100 L68 106 H92 Z" fill="#6b7280"/><path d="M36 34 H124" stroke="#374151" stroke-width="3" stroke-linecap="round"/><path d="M44 34 L34 56 H58 Z M116 34 L106 56 H130 Z" fill="none" stroke="#9ca3af" stroke-width="1.5"/><rect x="32" y="56" width="28" height="5" rx="2" fill="#60a5fa"/><rect x="104" y="56" width="28" height="5" rx="2" fill="#f472b6"/>` + O.book(46, 46, .35, "#2563eb") + heart(118, 50, .8) + txt(46, 76, "work", 11, "#2563eb", 800) + txt(118, 76, "life", 11, "#db2777", 800) + spark(80, 18, .8)),
  drone: () => svgWrap("#e0f2fe", ground() + O.cloud(32, 24, .6) + O.cloud(132, 18, .5) + grp(96, 42, 1, `<rect x="-14" y="-6" width="28" height="12" rx="4" fill="#374151"/><path d="M-14 -2 H-30 M14 -2 H30" stroke="#374151" stroke-width="3"/><ellipse cx="-30" cy="-6" rx="12" ry="2.5" fill="#9ca3af"/><ellipse cx="30" cy="-6" rx="12" ry="2.5" fill="#9ca3af"/><circle cx="0" cy="8" r="3" fill="#60a5fa"/><path d="M0 11 V18" stroke="#374151" stroke-width="1.5"/><rect x="-8" y="18" width="16" height="12" rx="2" fill="#f59e0b"/>`) + P({x:40, y:106, s:.85, hair:"twin", hc:"#3b2a20", oc:"#ec4899", pose:"cheer", mood:"open"})),
  vivid: () => svgWrap("#fdf4ff", `<rect x="26" y="14" width="108" height="84" rx="4" fill="#a16207"/><rect x="34" y="22" width="92" height="68" fill="#e0f2fe"/><path d="M34 74 Q80 64 126 74 V90 H34 Z" fill="#4ade80"/>` + O.sun(108, 40, .55) + O.flower(52, 70, .9) + O.flower(70, 74, .8) + O.flower(92, 72, .9) + spark(140, 106, .8, "#f472b6") + spark(18, 20, .7, "#facc15"))
});

registerUnit("s2-2-3", {
  name:"高二 下學期 期末考",
  sub:"助動詞進階、主詞動詞一致、No sooner / Hardly / By the time、高二文法總複習",
  words:S2_2_3_WORDS, grammar:S2_2_3_GRAMMAR, quiz:S2_2_3_QUIZ,
  classes:Object.assign({}, S2_2_3_CLASS, S2_2_3_ROOT_CLASS), phonics:S2_2_3_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會字首、字根、字尾，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
