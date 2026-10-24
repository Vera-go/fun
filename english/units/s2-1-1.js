/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高二上學期 第一次段考（通用範圍）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S2_WORDS = [
["unusual","adj.","不尋常的",[
 ["It is unusual for him to be late.","他遲到是很少見的事。","It is + 形容詞 + for 人 + to V 是虛主詞句型：It 代替後面的不定詞，真正的主詞是 to be late。"],
 ["It was an unusual sound that woke me up last night.","昨晚吵醒我的是一個奇怪的聲音。","It was ... that 強調句：把要強調的主詞 an unusual sound 放在 It was 和 that 中間。拿掉 It was 和 that，句子仍然完整。"],
 ["If it snowed in Taipei, it would be very unusual.","如果台北下雪，那會非常罕見。","假設語氣：If + 過去式，主要子句用 would + 原形動詞，表示和現在事實相反或不太可能的情況。"]],
 "un-=不|usual=平常的","不平常 → 不尋常的","🦄|不尋常"],
["unknown","adj.","未知的；不為人知的",[
 ["The cause of the fire is still unknown.","火災的原因仍然不明。","unknown 當形容詞放在 be 動詞後面；still 放在 be 動詞後面，表示「仍然」。"],
 ["This is the village where an unknown artist once lived.","這是一位無名藝術家曾經住過的村莊。","where 是關係副詞，等於 in which，修飾前面表示地點的 the village。"],
 ["For unknown reasons, the meeting was canceled.","因為不明原因，會議被取消了。","for ... reasons 表示「因為……原因」；was canceled 是被動語態。"]],
 "un-=不|know=知道|-n=過去分詞字尾","不被知道的 → 未知的","❓|未知"],
["unfortunate","adj.","不幸的",[
 ["It was unfortunate that it rained on our school trip.","我們校外教學那天下雨，真是不幸。","這是虛主詞句型，不是強調句：拿掉 It was 和 that 後，句子不成立。"],
 ["Missing the last bus, the unfortunate students had to walk home.","錯過了末班公車，那些倒楣的學生只好走路回家。","分詞構句：Missing the last bus 由 Because they missed the last bus 省略連接詞和主詞、動詞改成 V-ing 而來。"],
 ["Unfortunately, the museum is closed on Mondays.","不巧的是，博物館星期一休館。","副詞 unfortunately 放句首修飾整句，表示「可惜的是」，後面加逗號。"]],
 "un-=不|fortun=運氣|-ate=形容詞字尾","沒有好運 → 不幸的","🌧️|不幸"],
["independent","adj.","獨立的",[
 ["My sister has become more independent since she went to college.","我姊姊上大學後變得更獨立了。","has become 是現在完成式，搭配 since + 過去時間點，表示從那時到現在的變化。"],
 ["If I were more independent, my parents wouldn't worry about me so much.","如果我更獨立一點，我爸媽就不會這麼擔心我了。","與現在事實相反的假設：If 子句的 be 動詞不論主詞都用 were，主要子句用 would/wouldn't + 原形動詞。"],
 ["Students are encouraged to be independent learners.","學生被鼓勵成為獨立的學習者。","be encouraged to V 是被動語態，表示「被鼓勵去做某事」。"]],
 "in-=不|depend=依靠|-ent=形容詞字尾","不依靠別人 → 獨立的","🦅|獨立"],
["informal","adj.","非正式的",[
 ["You can wear informal clothes to the party.","你可以穿便服參加派對。","informal 放在名詞 clothes 前面修飾它。"],
 ["It is in informal writing that people often use short forms.","人們常常是在非正式的書寫中使用縮寫。","It is ... that 強調句也可以強調地點片語：這裡強調 in informal writing。"],
 ["Our teacher had an informal talk with us after class.","老師下課後和我們輕鬆地聊了一下。","have a talk with 人 表示「和某人談話」；informal 開頭是母音，所以用 an。"]],
 "in-=不|form=形式|-al=形容詞字尾","不拘形式 → 非正式的","👕|輕鬆隨意"],
["impossible","adj.","不可能的",[
 ["It is impossible to finish all the work in one day.","一天內完成所有工作是不可能的。","It is + 形容詞 + to V 的虛主詞句型；to finish ... 才是真正的主詞。"],
 ["If I had studied harder, the test would not have seemed impossible.","如果我當時更努力讀書，這場考試就不會看起來這麼難了。","與過去事實相反的假設：If + had + p.p.，主要子句用 would have + p.p.。"],
 ["Nothing is impossible if you never give up.","只要永不放棄，沒有什麼是不可能的。","nothing 當主詞視為單數，所以用 is。"]],
 "im-=不|poss=能夠|-ible=可以……的","不能夠做到的 → 不可能的","🚫|做不到"],
["impatient","adj.","不耐煩的",[
 ["The passengers became impatient after waiting for an hour.","乘客等了一個小時後變得不耐煩。","after + V-ing 表示「在……之後」。"],
 ["Waiting in the long line, Tom grew impatient.","在長長的隊伍中等待，湯姆變得不耐煩。","分詞構句：Waiting in the long line = While Tom was waiting in the long line，主詞相同時省略連接詞和主詞，動詞改成 V-ing。"],
 ["Don't be impatient with your little brother.","別對你弟弟沒耐心。","be impatient with 人 表示「對某人不耐煩」。"]],
 "im-=不|pati=忍受|-ent=形容詞字尾","不能忍受等待 → 不耐煩的","⏰|等不及"],
["impolite","adj.","不禮貌的",[
 ["It is impolite to talk with your mouth full.","嘴裡塞滿食物說話是不禮貌的。","虛主詞 It 代替 to talk ...；with your mouth full 是「with + 受詞 + 補語」，表示附帶狀態。"],
 ["If I were you, I wouldn't say such an impolite thing.","如果我是你，我不會說那麼沒禮貌的話。","If I were you 是最常見的假設語氣，用來給建議；注意 such + a/an + 形容詞 + 名詞 的語序。"],
 ["It was his impolite attitude that made the teacher angry.","讓老師生氣的是他沒禮貌的態度。","It was ... that 強調句，強調主詞 his impolite attitude。"]],
 "im-=不|polite=禮貌的","不禮貌的","🙅|沒禮貌"],
["dishonest","adj.","不誠實的",[
 ["It is dishonest to copy other people's homework.","抄別人的作業是不誠實的。","虛主詞句型。honest 的 h 不發音，所以說 an honest boy；但 dishonest 的 d 有發音，要說 a dishonest boy。"],
 ["The man, who had been dishonest with the police, was finally caught.","那名男子曾對警方說謊，最後還是被抓到了。","who 引導非限定的關係子句，前後有逗號，用來補充說明 The man；非限定用法不能用 that。"],
 ["Being dishonest, he soon lost all his friends.","因為不誠實，他很快就失去了所有朋友。","分詞構句：Being dishonest = Because he was dishonest，be 動詞改成 Being。"]],
 "dis-=不|honest=誠實的","不誠實的","🤥|說謊"],
["disagree","v.","不同意",[
 ["I disagree with you about this plan.","關於這個計畫，我不同意你的看法。","disagree with 人 + about 事 表示「在某事上不同意某人」。"],
 ["It was my father who disagreed with the idea first.","最先反對這個想法的是我爸爸。","強調句強調「人」時，that 可以換成 who。"],
 ["Disagreeing with the rule, the students wrote a letter to the principal.","因為不同意這項規定，學生們寫了一封信給校長。","分詞構句：Disagreeing ... = Because the students disagreed ...。"]],
 "dis-=不|agree=同意","不同意","🙅‍♂️|不同意"],
["disappear","v.","消失",[
 ["The sun disappeared behind the clouds.","太陽消失在雲層後面。","disappear 是不及物動詞，後面不能直接接受詞，也沒有被動語態。"],
 ["Many animals will disappear if we don't protect their homes.","如果我們不保護牠們的家園，許多動物將會消失。","這是一般的條件句（可能發生）：If 子句用現在式表示未來，主要子句用 will，和假設語氣不同。"],
 ["Many old shops have disappeared, which makes the street look different.","許多老店消失了，這讓這條街看起來不一樣了。","非限定用法的 which 可以指前面整句話的內容（老店消失這件事）。"]],
 "dis-=相反|appear=出現","出現的相反 → 消失","💨|不見了"],
["illegal","adj.","違法的",[
 ["It is illegal to ride a scooter without a license.","沒有駕照騎機車是違法的。","虛主詞句型；without + 名詞 表示「沒有……」。"],
 ["The driver, who was parking illegally, got a ticket.","那位違規停車的司機收到了罰單。","who 引導非限定關係子句補充說明 The driver；illegally 是 illegal 的副詞。"],
 ["If smoking were illegal everywhere, people would be healthier.","如果抽菸在任何地方都違法，人們會更健康。","與現在事實相反的假設，be 動詞一律用 were。"]],
 "il-=不|leg=法律|-al=形容詞字尾","不合法律 → 違法的","🚓|違法"],
["irregular","adj.","不規則的",[
 ["Go is an irregular verb: go, went, gone.","go 是不規則動詞：go、went、gone。","irregular verb 指過去式、過去分詞不是加 -ed 的動詞，背的時候三態要一起記。"],
 ["Eating at irregular times, he often had stomachaches.","因為不定時吃飯，他常常胃痛。","分詞構句：Eating at irregular times = Because he ate at irregular times。"],
 ["His heartbeat was irregular, so the doctor asked him to rest.","他的心跳不規律，所以醫生要他休息。","ask 人 to V 表示「要求某人做某事」。"]],
 "ir-=不|regul=規則|-ar=形容詞字尾","不規則的","🔀|不規則"],
["recycle","v.","回收",[
 ["We should recycle paper, plastic, and glass.","我們應該回收紙類、塑膠和玻璃。","should + 原形動詞 表示「應該」；列舉三項以上時，最後一項前加 and。"],
 ["This is the place where we recycle old batteries.","這是我們回收舊電池的地方。","關係副詞 where = in which / at which，修飾地點 the place。"],
 ["It is by recycling that we can reduce waste.","正是透過回收，我們才能減少垃圾。","It is ... that 強調句強調方法片語 by recycling。"]],
 "re-=再|cycle=循環","再循環一次 → 回收","@recycle"],
["rebuild","v.","重建",[
 ["The town rebuilt the bridge after the typhoon.","颱風過後，鎮上重建了那座橋。","rebuild 的過去式是 rebuilt，是不規則變化。"],
 ["Rebuilt in 2010, the temple looks brand new.","這座廟在 2010 年重建，看起來煥然一新。","分詞構句也可以用過去分詞表示被動：Rebuilt in 2010 = Because it was rebuilt in 2010。"],
 ["If the old house were rebuilt, it would become a museum.","如果那棟老房子被重建，它會變成一座博物館。","與現在事實相反的假設也可以搭配被動：were rebuilt。"]],
 "re-=再|build=建造","再建造一次 → 重建","🔨|重建"],
["remove","v.","移除；脫掉",[
 ["Please remove your shoes before entering the room.","進房間前請脫鞋。","before + V-ing 表示「在……之前」；remove 也可以表示「脫掉」衣物。"],
 ["Removed from the shelf, the old books were sent to the library.","舊書從書架上被移走後，被送到圖書館。","過去分詞開頭的分詞構句表示被動：Removed ... = After they were removed ...。"],
 ["It was the cleaner who removed the posters from the wall.","把牆上海報撕掉的是清潔人員。","強調句強調人時可以用 who。"]],
 "re-=離開|move=移動","移開 → 移除","🧹|拿走"],
["predict","v.","預測",[
 ["Scientists predict that it will rain tomorrow.","科學家預測明天會下雨。","predict + that 子句，that 子句當受詞，說明預測的內容。"],
 ["If I could predict the future, I would know the test answers.","如果我能預測未來，我就會知道考試答案了。","與現在事實相反的假設：If + 過去式（could），主要子句用 would + 原形動詞。"],
 ["The weather is hard to predict in spring.","春天的天氣很難預測。","主詞 + be + 形容詞 + to V：主詞同時是 predict 的受詞，所以 predict 後面不再加 it。"]],
 "pre-=事先|dict=說","事先說出來 → 預測","🔮|預測"],
["prevent","v.","預防；阻止",[
 ["Washing your hands can prevent colds.","洗手可以預防感冒。","動名詞片語 Washing your hands 當主詞，視為單數。"],
 ["The heavy rain prevented us from going out.","大雨讓我們無法出門。","prevent 人 from V-ing 表示「阻止某人做某事」，from 後面接動名詞。"],
 ["It is exercise that prevents many health problems.","能預防許多健康問題的是運動。","強調句強調主詞 exercise；that 後面的動詞要配合被強調的主詞，exercise 是單數，所以用 prevents。"]],
 "pre-=事先|vent=來","事先來擋住 → 預防","🚧|預防"],
["international","adj.","國際的",[
 ["English is an international language.","英文是國際語言。","international 開頭是母音，所以用 an。"],
 ["Taipei, where many international events are held, is a busy city.","台北舉辦許多國際活動，是座繁忙的城市。","where 引導非限定關係子句補充說明 Taipei；專有名詞後面的關係子句用非限定用法（加逗號）。"],
 ["She hopes to work for an international company.","她希望在國際公司工作。","hope to V 表示「希望做某事」。"]],
 "inter-=在……之間|nation=國家|-al=形容詞字尾","國家之間的 → 國際的","🌏|國際"],
["interview","n./v.","面試；訪問",[
 ["I have a job interview tomorrow morning.","我明天早上有一場工作面試。","現在式 have 也可以表示已經安排好的未來行程。"],
 ["The reporter interviewed the singer, who had just won an award.","記者訪問了那位剛得獎的歌手。","who 引導非限定關係子句；had just won 是過去完成式，表示在訪問之前就已經得獎。"],
 ["That was the day when I had my first interview.","那是我第一次面試的日子。","關係副詞 when = on which，修飾時間名詞 the day。"]],
 "inter-=互相|view=看","互相看看 → 面談","@interview"],
["transport","n./v.","運輸；運送",[
 ["Public transport in Taipei is very convenient.","台北的大眾運輸非常方便。","public transport 是不可數名詞，搭配單數動詞 is。"],
 ["Trains transport thousands of people every day.","火車每天運送成千上萬的人。","thousands of 表示「好幾千」，thousand 加 s 時後面要接 of。"],
 ["Transported by ship, the fruit stayed fresh.","這些水果用船運送，保持了新鮮。","過去分詞開頭的分詞構句表示被動：Transported by ship = Because it was transported by ship。"]],
 "trans-=穿越|port=搬運","搬運過去 → 運輸","@transport"],
["transform","v.","使徹底改變",[
 ["The caterpillar transformed into a butterfly.","毛毛蟲蛻變成一隻蝴蝶。","transform into 表示「變成……」。"],
 ["Technology has transformed the way we learn.","科技徹底改變了我們學習的方式。","the way we learn 不能寫成 the way how we learn；the way 和 how 不能同時出現。"],
 ["If I could transform my room, I would paint it blue.","如果我能改造我的房間，我會把它漆成藍色。","與現在事實相反的假設，主要子句用 would + 原形動詞。"]],
 "trans-=轉變|form=形狀","改變形狀 → 徹底改變","🦋|大變身"],
["translate","v.","翻譯",[
 ["Can you translate this sentence into Chinese?","你能把這個句子翻譯成中文嗎？","translate A into B 表示「把 A 翻譯成 B」。"],
 ["Translated into thirty languages, the book became famous worldwide.","這本書被翻譯成三十種語言，在全世界出名。","過去分詞開頭的分詞構句表示被動：Translated ... = After it was translated ...。"],
 ["This is the reason why I want to learn to translate.","這就是我想學翻譯的原因。","關係副詞 why = for which，修飾 the reason。"]],
 "trans-=轉換|late=搬運","把意思搬到另一種語言 → 翻譯","@translate"],
["overcome","v.","克服",[
 ["She overcame her fear of speaking in public.","她克服了在公開場合說話的恐懼。","overcome 三態：overcome、overcame、overcome；fear of + V-ing 表示「對……的恐懼」。"],
 ["It was her family's support that helped her overcome the difficulty.","幫她克服困難的是家人的支持。","強調句強調主詞；help 人 + 原形動詞 表示「幫某人做某事」。"],
 ["If he hadn't overcome his illness, he couldn't have run the marathon.","如果他當時沒有戰勝疾病，就不可能跑完馬拉松。","與過去事實相反的假設：If + had + p.p.，主要子句用 could have + p.p.。"]],
 "over-=越過|come=來","越過障礙走過來 → 克服","🧗|克服"],
["misunderstand","v.","誤會",[
 ["Please don't misunderstand me.","請別誤會我。","祈使句的否定：Don't + 原形動詞；please 讓語氣更客氣。"],
 ["Misunderstanding the question, I gave the wrong answer.","因為誤解了題目，我答錯了。","分詞構句：Misunderstanding ... = Because I misunderstood ...。"],
 ["If you had read the note, you wouldn't have misunderstood her.","如果你當時看了那張紙條，就不會誤會她了。","與過去事實相反的假設，主要子句用 wouldn't have + p.p.；misunderstand 的過去分詞是 misunderstood。"]],
 "mis-=錯誤|under=在……下|stand=站","understand（理解）加上 mis-（錯誤地）→ 誤會","😕|誤會"],
["encourage","v.","鼓勵",[
 ["My parents encourage me to try new things.","我爸媽鼓勵我嘗試新事物。","encourage 人 to V 表示「鼓勵某人做某事」。"],
 ["Encouraged by her teacher, Amy joined the speech contest.","受到老師的鼓勵，艾美參加了演講比賽。","過去分詞開頭的分詞構句表示被動：Encouraged by ... = Because she was encouraged by ...。"],
 ["It was my coach who encouraged me not to give up.","鼓勵我不要放棄的是我的教練。","強調句強調人用 who；不定詞的否定是 not to V。"]],
 "en-=使|courage=勇氣","使有勇氣 → 鼓勵","📣|加油"],
["enable","v.","使能夠",[
 ["The internet enables us to learn anywhere.","網路讓我們能在任何地方學習。","enable 人 to V 表示「使某人能夠做某事」。"],
 ["This app, which enables users to translate photos, is very popular.","這個可以讓使用者翻譯照片的應用程式非常受歡迎。","which 引導非限定關係子句補充說明 This app；整句的主要動詞是 is。"],
 ["If I had a car, it would enable me to travel more.","如果我有車，我就能更常旅行。","與現在事實相反的假設（現在其實沒有車）。"]],
 "en-=使|able=能夠的","使能夠","🔓|做得到"],
["prepare","v.","準備",[
 ["I need to prepare for the exam.","我需要為考試做準備。","prepare for + 名詞 表示「為……做準備」。"],
 ["Having prepared well, she felt confident before the speech.","因為準備充分，她在演講前很有信心。","完成式分詞構句：Having + p.p. 表示這個動作比主要子句更早發生（先準備，後有信心）。"],
 ["If I had prepared more, I would have done better.","如果我當時準備得更多，就會表現得更好。","與過去事實相反的假設。"]],
 "pre-=事先|pare=安排","事先安排 → 準備","📝|準備"],
["pollution","n.","污染",[
 ["Air pollution is a serious problem in many cities.","空氣污染是許多城市的嚴重問題。","pollution 是不可數名詞，不加 s，也不加 a。"],
 ["It is the cars and factories that cause most of the pollution.","造成大部分污染的是汽車和工廠。","強調句強調複數主詞 the cars and factories，所以 that 後面用複數動詞 cause；It is 維持單數不變。"],
 ["If there were less pollution, we could see more stars at night.","如果污染少一點，我們晚上就能看到更多星星。","與現在事實相反的假設：there were + 名詞；pollution 不可數，所以用 less。"]],
 "pollut=污染|-ion=名詞字尾","pollute（污染）的名詞","@pollution"],
["protection","n.","保護",[
 ["Wear sunglasses for protection from the sun.","戴太陽眼鏡來防曬。","protection from + 名詞 表示「防護……」；for + 名詞 表示目的。"],
 ["This is the area where animals are under protection.","這是動物受到保護的地區。","關係副詞 where 修飾地點 the area；be under protection 表示「受保護」。"],
 ["Environmental protection is everyone's responsibility.","環境保護是每個人的責任。","everyone's 是所有格；everyone 視為單數。"]],
 "protect=保護|-ion=名詞字尾","protect（保護）的名詞","🛡️|保護"],
["education","n.","教育",[
 ["Education is the key to a better future.","教育是通往更美好未來的關鍵。","the key to + 名詞 表示「……的關鍵」，這裡的 to 是介係詞。"],
 ["It was education that changed her life.","改變她一生的是教育。","強調句強調主詞 education。"],
 ["In the past, girls who wanted an education faced many difficulties.","過去想接受教育的女孩面對許多困難。","who 引導限定用法的關係子句，限定是「哪些」女孩，所以不加逗號。"]],
 "educat=教育|-ion=名詞字尾","educate（教育）的名詞","🎓|教育"],
["decision","n.","決定",[
 ["Choosing a school is an important decision.","選學校是一個重要的決定。","動名詞片語 Choosing a school 當主詞；make a decision 是「做決定」的常用搭配。"],
 ["Having made the decision, he never looked back.","做了決定之後，他就再也沒有回頭。","完成式分詞構句 Having + p.p.：先做決定，後來不回頭。"],
 ["If I had made a different decision, my life would be different now.","如果我當時做了不同的決定，我現在的人生就會不一樣。","混合假設：If 子句與過去事實相反（had made），主要子句與現在事實相反（would be ... now）。"]],
 "decis=決定|-ion=名詞字尾","decide（決定）去 de 改 s，加 -ion","✅|做決定"],
["discussion","n.","討論",[
 ["We had a long discussion about the school trip.","我們針對校外教學討論了很久。","have a discussion about + 主題 表示「討論某事」；但動詞 discuss 後面直接接受詞，不加 about。"],
 ["The class, which was divided into four groups, began the discussion.","全班分成四組，開始討論。","which 引導非限定關係子句補充說明 The class。"],
 ["After a long discussion, we finally agreed on a plan.","經過長時間的討論，我們終於對一個計畫達成共識。","agree on + 事 表示「對某事達成一致」。"]],
 "discuss=討論|-ion=名詞字尾","discuss（討論）的名詞","💬|討論"],
["invention","n.","發明",[
 ["The telephone was an important invention.","電話是一項重要的發明。","invention 是可數名詞，前面加 an。"],
 ["It was the invention of the printing press that made books cheaper.","讓書變便宜的是印刷機的發明。","強調句強調主詞 the invention of the printing press；the invention of + 名詞 表示「……的發明」。"],
 ["If I could make one invention, it would be a time machine.","如果我能做出一項發明，那會是時光機。","與現在事實相反的假設；it would be 表示假設的結果。"]],
 "in-=進入|vent=來|-ion=名詞字尾","想法跑進腦中 → 發明","💡|發明"],
["environment","n.","環境",[
 ["We must protect the environment.","我們必須保護環境。","表示自然環境時，前面通常加 the：the environment。"],
 ["Children who grow up in a safe environment are often more confident.","在安全環境中長大的孩子通常比較有自信。","who 引導限定關係子句修飾 Children；整句的主要動詞是 are。"],
 ["It is our environment that shapes our habits.","塑造我們習慣的是我們的環境。","強調句強調主詞 our environment。"]],
 "environ=圍繞|-ment=名詞字尾","圍繞在我們周圍的東西 → 環境","@environment"],
["government","n.","政府",[
 ["The government plans to build a new library.","政府計畫蓋一座新圖書館。","plan to V 表示「計畫做某事」；government 中間的 n 不太發音，但拼字別漏掉。"],
 ["The government, which wants to reduce plastic waste, has banned plastic straws.","為了減少塑膠垃圾，政府已經禁用塑膠吸管。","which 引導非限定關係子句補充說明 The government；主要動詞是 has banned。"],
 ["If the government gave students free bus passes, more people would take the bus.","如果政府提供學生免費公車卡，會有更多人搭公車。","與現在事實相反的假設。"]],
 "govern=治理|-ment=名詞字尾","治理國家的機構 → 政府","🏛️|政府"],
["development","n.","發展",[
 ["Reading is important for a child's development.","閱讀對孩子的發展很重要。","動名詞 Reading 當主詞；a child's 是所有格。"],
 ["This is the period when the city saw rapid development.","這是這座城市快速發展的時期。","關係副詞 when 修飾時間名詞 the period。"],
 ["The development of technology has changed our lives.","科技的發展改變了我們的生活。","主詞是 The development（單數），所以用 has changed。"]],
 "develop=發展|-ment=名詞字尾","develop（發展）的名詞","📈|發展"],
["achievement","n.","成就",[
 ["Winning the contest was a great achievement for our class.","贏得比賽對我們班來說是很大的成就。","動名詞片語 Winning the contest 當主詞，用單數動詞 was。"],
 ["Proud of her achievement, Lisa smiled at her parents.","莉莎對自己的成就感到驕傲，對爸媽笑了。","分詞構句：Proud of ... = Being proud of ...，Being 可以省略，只留形容詞。"],
 ["It is hard work, not luck, that leads to real achievement.","帶來真正成就的是努力，而不是運氣。","強調句：被強調的 hard work, not luck 放在 It is 和 that 之間；lead to 表示「導致」。"]],
 "achieve=達成|-ment=名詞字尾","achieve（達成）的名詞","🏆|成就"],
["entertainment","n.","娛樂",[
 ["Movies are a popular form of entertainment.","電影是一種很受歡迎的娛樂。","entertainment 通常不可數；a form of + 名詞 表示「一種……」。"],
 ["Living in the countryside, we had little entertainment.","住在鄉下時，我們沒什麼娛樂。","分詞構句 Living ... = When we lived ...；little + 不可數名詞 表示「幾乎沒有」。"],
 ["If there were no entertainment, life would be boring.","如果沒有娛樂，生活會很無聊。","與現在事實相反的假設：If there were no ...。"]],
 "enter=在……之間|tain=握住|-ment=名詞字尾","讓人沉浸其中、保持開心 → 娛樂","🎮|娛樂"],
["kindness","n.","仁慈；好意",[
 ["Thank you for your kindness.","謝謝你的好意。","thank you for + 名詞或 V-ing 表示「謝謝你的……」。"],
 ["It was the kindness of strangers that helped us after the earthquake.","地震後幫助我們的是陌生人的善意。","強調句強調主詞 the kindness of strangers。"],
 ["Small acts of kindness can make a big difference.","小小的善行可以帶來很大的改變。","make a difference 表示「產生影響、帶來改變」。"]],
 "kind=親切的|-ness=名詞字尾","親切 → 好意","💗|善意"],
["weakness","n.","弱點",[
 ["Everyone has strengths and weaknesses.","每個人都有優點和缺點。","strength 和 weakness 當「優點、缺點」時是可數名詞，可以加 s。"],
 ["Knowing his weakness, he practiced harder.","知道自己的弱點後，他練習得更努力了。","分詞構句 Knowing ... = Because he knew ...。"],
 ["Math is my weakness, but I am working on it.","數學是我的弱項，但我正在努力加強。","work on + 事 表示「努力改進某事」。"]],
 "weak=弱的|-ness=名詞字尾","弱 → 弱點","🪫|弱點"],
["ability","n.","能力",[
 ["She has the ability to speak three languages.","她有說三種語言的能力。","the ability to V 表示「做某事的能力」。"],
 ["It is your ability, not your grades, that matters most.","最重要的是你的能力，而不是成績。","強調句；matter 當動詞表示「重要」。"],
 ["If I had the ability to fly, I would visit every country.","如果我有飛行的能力，我會去拜訪每個國家。","與現在事實相反的假設。"]],
 "abil=能夠|-ity=名詞字尾","able（能夠的）變成名詞 → 能力","💪|能力"],
["activity","n.","活動",[
 ["Our school offers many after-school activities.","我們學校提供很多課後活動。","activity 的複數：去 y 加 ies，變成 activities。"],
 ["Swimming is an activity that is good for your whole body.","游泳是對全身都有益的活動。","that 引導限定關係子句修飾 an activity。"],
 ["This is the park where outdoor activities are held every weekend.","這是每個週末舉辦戶外活動的公園。","關係副詞 where 修飾地點 the park。"]],
 "activ=活動的|-ity=名詞字尾","active（活動的）變成名詞 → 活動","⚽|活動"],
["security","n.","安全；保全",[
 ["For security reasons, please do not leave your bag here.","基於安全理由，請勿把包包放在這裡。","for ... reasons 表示「基於……理由」。"],
 ["The airport, where security is very strict, checks every bag.","這座機場安檢非常嚴格，每個包包都要檢查。","where 引導非限定關係子句，補充說明 The airport。"],
 ["Checked by security, the passengers boarded the plane.","乘客通過安檢後登上飛機。","分詞構句用過去分詞表示被動：Checked by security = After they were checked by security。"]],
 "secur=安全的|-ity=名詞字尾","secure（安全的）變成名詞 → 安全","🔒|安全"],
["freedom","n.","自由",[
 ["Teenagers want more freedom.","青少年想要更多自由。","freedom 不可數，用 more 修飾。"],
 ["It was freedom that the people fought for.","人民奮鬥爭取的是自由。","強調句也能強調受詞：fight for freedom 的 freedom 被移到 It was 和 that 中間。"],
 ["If I had more freedom, I would travel alone.","如果我有更多自由，我會獨自旅行。","與現在事實相反的假設。"]],
 "free=自由的|-dom=狀態","自由的狀態 → 自由","@freedom"],
["friendship","n.","友誼",[
 ["Our friendship began in junior high school.","我們的友誼從國中開始。","begin 的過去式是 began。"],
 ["Having known each other for ten years, they have a strong friendship.","認識彼此十年了，他們有很深厚的友誼。","完成式分詞構句 Having known ... 表示「已經認識十年」這個先發生的狀態。"],
 ["Nothing is more valuable than friendship.","沒有什麼比友誼更珍貴。","Nothing is + 比較級 + than ... 表示最高級的意思：友誼最珍貴。"]],
 "friend=朋友|-ship=關係","朋友之間的關係 → 友誼","@friendship"],
["relationship","n.","關係",[
 ["I have a good relationship with my parents.","我和爸媽的關係很好。","have a ... relationship with 人 表示「和某人有……的關係」。"],
 ["Trust is the reason why their relationship is so strong.","信任就是他們關係這麼穩固的原因。","關係副詞 why 修飾 the reason。"],
 ["It is communication that keeps a relationship healthy.","讓一段關係保持健康的是溝通。","強調句；keep + 受詞 + 形容詞 表示「使……保持某種狀態」。"]],
 "relat=關聯|-ion=名詞字尾|-ship=關係","彼此有關聯 → 關係","🔗|關係"],
["population","n.","人口",[
 ["Taiwan has a population of about 23 million.","台灣的人口約兩千三百萬。","have a population of + 數字 表示「人口有……」；million 前面有數字時不加 s。"],
 ["Tokyo, which has a huge population, is very crowded.","東京人口眾多，非常擁擠。","which 引導非限定關係子句補充說明專有名詞 Tokyo。"],
 ["The population of the town is getting smaller.","這個鎮的人口越來越少。","人口多寡用 large/small 形容，不用 many/few。"]],
 "popul=人民|-ation=名詞字尾","人民的數量 → 人口","👨‍👩‍👧‍👦|人口"],
["reasonable","adj.","合理的",[
 ["The price of this hotel is reasonable.","這家飯店的價格很合理。","價格「合理、不貴」可以用 reasonable。"],
 ["If your request were reasonable, I would agree.","如果你的要求合理，我就會同意。","與現在事實相反的假設，暗示「你的要求其實不合理」。"],
 ["It is reasonable to ask for help when you need it.","需要時尋求幫助是合理的。","虛主詞 It 代替 to ask for help ...。"]],
 "reason=道理|-able=可……的","可以講道理的 → 合理的","⚖️|合理"],
["comfortable","adj.","舒適的",[
 ["This sofa is really comfortable.","這張沙發真的很舒服。","comfortable 常唸成 COMF-ta-ble，中間的 or 很輕。"],
 ["Sitting in a comfortable chair, Grandpa fell asleep.","爺爺坐在舒服的椅子上睡著了。","分詞構句 Sitting ... = While he was sitting ...。"],
 ["I don't feel comfortable speaking in front of many people.","在很多人面前說話讓我不自在。","feel comfortable + V-ing 表示「做某事感到自在」。"]],
 "comfort=舒適|-able=可……的","可以讓人舒適的","🛋️|舒服"],
["valuable","adj.","珍貴的",[
 ["Time is more valuable than money.","時間比金錢更珍貴。","多音節形容詞的比較級用 more + 形容詞。"],
 ["The ring, which was my grandmother's, is very valuable to me.","那枚戒指是我奶奶的，對我來說非常珍貴。","which 引導非限定關係子句補充說明 The ring。"],
 ["This trip taught me a valuable lesson.","這趟旅行給了我寶貴的一課。","teach 人 a lesson 表示「給某人一個教訓」。"]],
 "valu=價值|-able=可……的","有價值的 → 珍貴的","💎|珍貴"],
["responsible","adj.","負責任的",[
 ["Who is responsible for cleaning the classroom today?","今天誰負責打掃教室？","be responsible for + 名詞或 V-ing 表示「負責……」。"],
 ["It was Kevin who was responsible for the mistake.","該為這個錯誤負責的是凱文。","強調句強調人用 who。"],
 ["Being responsible, she always finishes her work on time.","她很負責，總是準時完成工作。","分詞構句 Being responsible = Because she is responsible。"]],
 "respons=回應|-ible=可……的","能夠回應、負起責任的","📋|負責"],
["visible","adj.","看得見的",[
 ["The stars are visible tonight.","今晚看得見星星。","visible 表示「可以被看見的」，相反詞是 invisible。"],
 ["Seen from the mountain, the city lights are clearly visible.","從山上看，城市的燈光清楚可見。","分詞構句用 Seen 表示被動：城市的燈光是「被看見」的。"],
 ["This is the place where the mountain is most visible.","這裡是那座山看得最清楚的地方。","關係副詞 where 修飾地點 the place。"]],
 "vis=看|-ible=可……的","可以被看見的","👀|看得見"],
["careful","adj.","小心的",[
 ["Be careful when you cross the street.","過馬路時要小心。","Be careful 是祈使句；when 引導時間副詞子句。"],
 ["If I had been more careful, I wouldn't have broken the glass.","如果我當時更小心，就不會打破杯子了。","與過去事實相反的假設。"],
 ["Careful readers will notice the mistake.","細心的讀者會注意到這個錯誤。","careful 放在名詞前面修飾；-ful 字尾只有一個 l。"]],
 "care=小心|-ful=充滿……的","充滿小心 → 小心的","🧐|小心"],
["peaceful","adj.","和平的；寧靜的",[
 ["The village is quiet and peaceful.","這個村莊安靜又祥和。","兩個形容詞用 and 連接。"],
 ["It was in this peaceful garden that I wrote my first poem.","我是在這座寧靜的花園裡寫下第一首詩的。","強調句強調地點片語 in this peaceful garden。"],
 ["We hope to solve the problem in a peaceful way.","我們希望用和平的方式解決問題。","in a ... way 表示「用……的方式」。"]],
 "peace=和平|-ful=充滿……的","充滿和平 → 寧靜的","🌅|寧靜"],
["harmful","adj.","有害的",[
 ["Smoking is harmful to your health.","抽菸對健康有害。","be harmful to + 名詞 表示「對……有害」。"],
 ["Plastic, which takes hundreds of years to break down, is harmful to the ocean.","塑膠要好幾百年才能分解，對海洋有害。","which 引導非限定關係子句補充說明 Plastic；break down 表示「分解」。"],
 ["Exposed to harmful light, the plants stopped growing.","暴露在有害的光線下，植物停止生長。","過去分詞分詞構句：Exposed to ... = Because they were exposed to ...。"]],
 "harm=傷害|-ful=充滿……的","充滿傷害 → 有害的","☠️|有害"],
["careless","adj.","粗心的",[
 ["I made a careless mistake on the test.","我在考試中犯了粗心的錯誤。","make a mistake 表示「犯錯」；-less 和 -ful 常常是一對反義詞：careless 和 careful。"],
 ["Being careless, he lost his phone again.","他太粗心，又把手機弄丟了。","分詞構句 Being careless = Because he was careless。"],
 ["If you weren't so careless, you would get a higher score.","如果你沒那麼粗心，你會考得更高分。","與現在事實相反的假設，暗示「你其實很粗心」。"]],
 "care=小心|-less=沒有……的","沒有小心 → 粗心的","🤦|粗心"],
["homeless","adj.","無家可歸的",[
 ["The group gives food to homeless people.","這個團體提供食物給無家可歸的人。","give 物 to 人 表示「把某物給某人」。"],
 ["Left homeless after the flood, many families stayed at the school.","洪水過後無家可歸，許多家庭住在學校裡。","分詞構句 Left homeless = Because they were left homeless；be left + 形容詞 表示「被留在某種狀態」。"],
 ["It is the volunteers who help the homeless every winter.","每年冬天幫助遊民的是志工們。","the + 形容詞 可以表示一群人：the homeless = homeless people。"]],
 "home=家|-less=沒有……的","沒有家的 → 無家可歸的","🏚️|無家可歸"],
["useless","adj.","無用的",[
 ["This old phone is useless now.","這支舊手機現在沒有用了。","useless 的相反詞是 useful。"],
 ["It is useless to complain about the weather.","抱怨天氣是沒用的。","虛主詞 It 代替 to complain ...。"],
 ["Without electricity, many machines would be useless.","沒有電的話，許多機器都會變得沒用。","Without ... 也可以表示假設，等於 If there were no electricity。"]],
 "use=用處|-less=沒有……的","沒有用處 → 無用的","🗑️|沒用"],
["dangerous","adj.","危險的",[
 ["It is dangerous to swim in this river.","在這條河游泳很危險。","虛主詞句型。"],
 ["Driving fast on a rainy day is dangerous.","雨天開快車很危險。","動名詞片語當主詞，用單數動詞 is。"],
 ["This is the corner where many dangerous accidents have happened.","這就是發生過許多危險意外的轉角。","關係副詞 where 修飾 the corner；happen 是不及物動詞，沒有被動。"]],
 "danger=危險|-ous=充滿……的","充滿危險 → 危險的","🔥|危險"],
["nervous","adj.","緊張的",[
 ["I always feel nervous before exams.","我考試前總是很緊張。","feel + 形容詞 表示「感覺……」；always 放在一般動詞前面。"],
 ["Feeling nervous, Amy took a deep breath.","艾美覺得緊張，深吸了一口氣。","分詞構句 Feeling nervous = Because she felt nervous。"],
 ["If I weren't so nervous, I could speak more clearly.","如果我沒那麼緊張，我就能說得更清楚。","與現在事實相反的假設，主要子句也可以用 could + 原形動詞。"]],
 "nerv=神經|-ous=充滿……的","神經緊繃 → 緊張的","😰|緊張"],
["traditional","adj.","傳統的",[
 ["Dumplings are a traditional food for Chinese New Year.","水餃是農曆新年的傳統食物。","traditional 修飾名詞 food。"],
 ["Lukang, where many traditional buildings remain, attracts lots of tourists.","鹿港保留了許多傳統建築，吸引大量遊客。","where 引導非限定關係子句補充說明地名 Lukang。"],
 ["Wearing traditional clothes, the dancers looked beautiful.","穿著傳統服裝，舞者們看起來很美。","分詞構句 Wearing ... = Because they wore ...。"]],
 "tradition=傳統|-al=形容詞字尾","tradition（傳統）的形容詞","🏮|傳統"],
["natural","adj.","自然的；天然的",[
 ["Taiwan has many natural wonders.","台灣有許多自然奇景。","natural 修飾名詞 wonders。"],
 ["It is natural to feel nervous on the first day of school.","開學第一天感到緊張是很自然的。","虛主詞句型：It is natural to V 表示「做某事很正常」。"],
 ["This juice, which is made from natural fruit, has no added sugar.","這款果汁用天然水果製成，沒有添加糖。","which 引導非限定關係子句；be made from 表示「由……製成（看不出原料）」。"]],
 "natur=自然|-al=形容詞字尾","nature（自然）的形容詞","🌿|自然"],
["creative","adj.","有創意的",[
 ["Our art teacher is very creative.","我們的美術老師很有創意。","creative 放在 be 動詞後面描述主詞。"],
 ["It was a creative idea that won us first prize.","讓我們贏得第一名的是一個有創意的點子。","強調句強調主詞 a creative idea；win 人 + 物 表示「為某人贏得某物」。"],
 ["Given more time, the students could be even more creative.","如果有更多時間，學生們可以更有創意。","Given 開頭的分詞構句常表示條件：= If they were given more time。"]],
 "creat=創造|-ive=形容詞字尾","create（創造）的形容詞","🎨|創意"],
["attractive","adj.","有吸引力的",[
 ["The beach is attractive to tourists.","這片海灘很吸引遊客。","be attractive to 人 表示「對某人有吸引力」。"],
 ["The city, which has many attractive night markets, is popular with foreigners.","這座城市有很多吸引人的夜市，很受外國人歡迎。","which 引導非限定關係子句；be popular with 人 表示「受某人歡迎」。"],
 ["If the price were lower, the offer would be more attractive.","如果價格再低一點，這個優惠會更吸引人。","與現在事實相反的假設。"]],
 "at-=朝向|tract=拉|-ive=形容詞字尾","把人拉過來的 → 有吸引力的","😍|吸引人"],
["expensive","adj.","昂貴的",[
 ["This bag is too expensive for me.","這個包包對我來說太貴了。","too + 形容詞 + for 人 表示「對某人來說太……」。"],
 ["If the tickets weren't so expensive, we would go to the concert.","如果票沒那麼貴，我們就會去聽演唱會。","與現在事實相反的假設，暗示「票其實很貴」。"],
 ["Living in a big city is expensive.","住在大城市很花錢。","動名詞片語當主詞，用單數動詞 is。"]],
 "ex-=向外|pens=付錢|-ive=形容詞字尾","要往外付很多錢的 → 昂貴的","💸|很貴"],
["realize","v.","了解；實現",[
 ["I suddenly realized that I had left my keys at home.","我突然發現我把鑰匙留在家裡了。","realize + that 子句；had left 是過去完成式，表示比 realized 更早發生。"],
 ["It was not until the bell rang that I realized I was late.","直到鐘聲響了，我才發現自己遲到了。","It was not until ... that ... 是強調句的重要句型：「直到……才……」。"],
 ["She worked hard to realize her dream.","她努力工作以實現夢想。","realize 也可以表示「實現」；to V 表示目的。"]],
 "real=真實的|-ize=使……化","使變成真的 → 實現；在心裡變清楚 → 了解","😮|恍然大悟"],
["organize","v.","組織；籌辦",[
 ["Our class organized a party for the teacher.","我們班為老師籌辦了一場派對。","organize 的英式拼法是 organise。"],
 ["Organized by students, the fair was a big success.","這場園遊會由學生籌辦，非常成功。","過去分詞分詞構句表示被動：Organized by students = Because it was organized by students。"],
 ["This is the reason why we need to organize our notes.","這就是我們需要整理筆記的原因。","關係副詞 why 修飾 the reason。"]],
 "organ=組織|-ize=使……化","使成為有組織的 → 籌辦","🗂️|籌辦"],
["strengthen","v.","加強",[
 ["Exercise can strengthen your muscles.","運動可以強化你的肌肉。","-en 加在名詞或形容詞後面，變成動詞「使……」：strength 變成 strengthen。"],
 ["Having strengthened the team, the coach felt more confident.","強化了隊伍後，教練更有信心了。","完成式分詞構句 Having + p.p.，表示先加強隊伍，後來才有信心。"],
 ["It is reading that strengthens your vocabulary.","能加強字彙的是閱讀。","強調句；that 後面的動詞配合被強調的主詞 reading（單數），用 strengthens。"]],
 "strength=力量|-en=使……","使有力量 → 加強","🏋️|加強"],
["widen","v.","加寬",[
 ["The city plans to widen the road.","市政府計畫拓寬這條路。","wide 去 e 再加 en：widen。"],
 ["Reading widens our view of the world.","閱讀拓展我們的世界觀。","動名詞 Reading 當主詞，視為單數，所以用 widens。"],
 ["If the river were widened, the town would not flood.","如果河道被拓寬，這個鎮就不會淹水了。","與現在事實相反的假設搭配被動：were widened。"]],
 "wid=寬的|-en=使……","使變寬 → 加寬","↔️|變寬"],
["import","v./n.","進口",[
 ["Taiwan imports a lot of oil.","台灣進口大量石油。","import 當動詞時重音在第二音節（im-PORT），當名詞時重音在第一音節（IM-port）。"],
 ["Imported from Japan, these apples are expensive.","這些蘋果從日本進口，價格很貴。","過去分詞分詞構句表示被動。"],
 ["The country, which imports most of its food, is worried about prices.","這個國家大部分的食物靠進口，很擔心物價。","which 引導非限定關係子句補充說明 The country。"]],
 "im-=進入|port=搬運","搬進來 → 進口","🚢|進口"],
["export","v./n.","出口",[
 ["Taiwan exports computer chips to many countries.","台灣出口電腦晶片到許多國家。","export A to B 表示「把 A 出口到 B」。"],
 ["It is computer chips that Taiwan exports the most.","台灣出口最多的是電腦晶片。","強調句也能強調受詞 computer chips。"],
 ["Exports rose sharply last year.","去年出口大幅增加。","exports 當名詞「出口量」時常用複數；rise 的過去式是 rose。"]],
 "ex-=向外|port=搬運","搬出去 → 出口","📦|出口"],
["portable","adj.","可攜帶的",[
 ["I bought a portable speaker for the trip.","我為了這趟旅行買了一台攜帶式喇叭。","portable 放在名詞前面修飾。"],
 ["If my computer were portable, I could work on the train.","如果我的電腦可以攜帶，我就能在火車上工作了。","與現在事實相反的假設。"],
 ["Light and portable, this chair is perfect for camping.","這張椅子又輕又方便攜帶，非常適合露營。","形容詞也能放句首當分詞構句：= Because it is light and portable ...。"]],
 "port=搬運|-able=可……的","可以搬著走的 → 可攜帶的","🎒|可攜帶"],
["inspect","v.","檢查",[
 ["The teacher inspected our homework carefully.","老師仔細地檢查了我們的作業。","副詞 carefully 修飾動詞 inspected。"],
 ["Inspected every year, the elevator is safe to use.","這部電梯每年都接受檢查，可以安全使用。","過去分詞分詞構句表示被動。"],
 ["It was the police who inspected the car.","檢查那輛車的是警察。","強調句強調人用 who。"]],
 "in-=向內|spect=看","往裡面看 → 檢查","🔍|檢查"],
["respect","v./n.","尊重",[
 ["We should respect people from different cultures.","我們應該尊重來自不同文化的人。","respect 當動詞直接接受詞。"],
 ["Respected by everyone, the old doctor retired last year.","那位老醫生受到大家尊敬，去年退休了。","過去分詞分詞構句表示被動。"],
 ["It is respect that makes a team work well together.","讓團隊合作順利的是尊重。","強調句；make + 受詞 + 原形動詞 表示「使……做」。"]],
 "re-=再|spect=看","再看一眼、重視 → 尊重","🙇|尊重"],
["vision","n.","視力；願景",[
 ["Reading in the dark is bad for your vision.","在暗處閱讀對視力不好。","動名詞片語當主詞；be bad for 表示「對……有害」。"],
 ["The leader shared his vision of the future.","領導者分享了他對未來的願景。","vision 也可以表示「願景、遠見」。"],
 ["If my vision were better, I wouldn't need glasses.","如果我的視力好一點，我就不需要戴眼鏡了。","與現在事實相反的假設。"]],
 "vis=看|-ion=名詞字尾","看的能力 → 視力","@vision"],
["attract","v.","吸引",[
 ["Flowers attract bees.","花朵吸引蜜蜂。","主詞 Flowers 是複數，動詞不加 s。"],
 ["Attracted by the smell, the children ran into the bakery.","被香味吸引，孩子們跑進麵包店。","過去分詞分詞構句表示被動。"],
 ["It is the night market that attracts the most visitors.","吸引最多遊客的是夜市。","強調句；that 後的動詞配合單數主詞 the night market，用 attracts。"]],
 "at-=朝向|tract=拉","拉向自己 → 吸引","🧲|吸引"],
["produce","v.","生產",[
 ["This factory produces bicycles.","這間工廠生產腳踏車。","produce 當名詞時（PRO-duce）指「農產品」。"],
 ["Produced in Taiwan, these bikes are sold all over the world.","這些腳踏車在台灣生產，銷往全世界。","過去分詞分詞構句表示被動；all over the world 表示「全世界」。"],
 ["Cows produce milk, which is made into cheese.","牛產出牛奶，而牛奶被製成起司。","which 引導非限定關係子句補充說明 milk；be made into 表示「被做成……」。"]],
 "pro-=向前|duce=引導","向前引導出來 → 生產","🏭|生產"],
["introduce","v.","介紹",[
 ["Let me introduce myself.","讓我自我介紹一下。","Let me + 原形動詞；introduce oneself 表示「自我介紹」。"],
 ["Introduced by a friend, I joined the basketball team.","經由朋友介紹，我加入了籃球隊。","過去分詞分詞構句表示被動：= Because I was introduced by a friend ...。"],
 ["It was my aunt who introduced me to classical music.","帶我認識古典音樂的是我阿姨。","introduce 人 to 事物 表示「帶某人認識某事物」；強調句強調人用 who。"]],
 "intro-=向內|duce=引導","引導進來 → 介紹","🙋|介紹"],
["construction","n.","建造；工程",[
 ["The new MRT line is still under construction.","新的捷運線仍在施工中。","be under construction 表示「施工中」。"],
 ["This is the year when the construction of the bridge began.","這是那座橋開始建造的年份。","關係副詞 when 修飾時間 the year。"],
 ["The construction workers, who work under the hot sun, deserve our respect.","在烈日下工作的建築工人值得我們尊敬。","who 引導非限定關係子句補充說明；deserve 表示「值得」。"]],
 "con-=一起|struct=建造|-ion=名詞字尾","把材料堆在一起建造 → 建造","@construction"],
["express","v.","表達",[
 ["It is hard for me to express my feelings in English.","用英文表達我的感受對我來說很難。","It is + 形容詞 + for 人 + to V 的虛主詞句型。"],
 ["Unable to express himself, the boy started to cry.","那個男孩無法表達自己，開始哭了起來。","形容詞開頭的分詞構句：Unable ... = Because he was unable ...。"],
 ["Music is a way to express emotions.","音樂是表達情緒的一種方式。","a way to V 表示「做某事的方式」。"]],
 "ex-=向外|press=壓","把想法壓出去 → 表達","🗣️|表達"],
["impress","v.","使印象深刻",[
 ["Her speech impressed everyone.","她的演講讓大家印象深刻。","impress 的主詞是讓人印象深刻的事物，受詞是人。"],
 ["Impressed by the view, we took many photos.","被景色打動，我們拍了很多照片。","過去分詞分詞構句表示被動：人是「被打動」的，用 impressed。"],
 ["It was his honesty that impressed me most.","最讓我印象深刻的是他的誠實。","強調句強調主詞 his honesty。"]],
 "im-=進入|press=壓","壓進心裡 → 使印象深刻","🤩|印象深刻"],
["project","n.","計畫；專題",[
 ["We are working on a science project.","我們正在做一個科學專題。","work on 表示「致力於、正在做」。"],
 ["Having finished the project, we celebrated with pizza.","完成專題後，我們吃披薩慶祝。","完成式分詞構句 Having finished 表示先完成專題，再慶祝。"],
 ["This is the room where we did our group project.","這是我們做小組專題的房間。","關係副詞 where 修飾 the room。"]],
 "pro-=向前|ject=丟","往前丟出的想法 → 計畫","📊|專題"],
["inform","v.","通知",[
 ["Please inform me if anything changes.","如果有任何變動請通知我。","inform 人 表示「通知某人」；if 引導條件子句。"],
 ["Informed of the typhoon, the school canceled classes.","得知颱風消息後，學校停課了。","過去分詞分詞構句：be informed of 表示「被告知……」。"],
 ["It was the teacher who informed us of the change.","通知我們這項變更的是老師。","inform 人 of 事 表示「通知某人某事」。"]],
 "in-=進入|form=形成","在腦中形成想法 → 告知","📢|通知"],
["perform","v.","表演；執行",[
 ["The band will perform at the school festival.","樂團將在校慶上表演。","perform 表示「表演」時常當不及物動詞。"],
 ["Performing on stage, she forgot all her nervousness.","在台上表演時，她忘掉了所有緊張。","分詞構句 Performing ... = While she was performing ...。"],
 ["If I could perform with my favorite singer, I would be so happy.","如果我能和我最愛的歌手一起表演，我會非常開心。","與現在事實相反的假設。"]],
 "per-=完全|form=形式","完整地呈現出來 → 表演","@perform"],
["audience","n.","觀眾",[
 ["The audience clapped loudly after the show.","表演結束後觀眾熱烈鼓掌。","audience 是集合名詞，指一整群觀眾。"],
 ["The singer, who loves her audience, sang one more song.","那位歌手很愛她的觀眾，又多唱了一首歌。","who 引導非限定關係子句補充說明 The singer。"],
 ["It was the audience that made the night special.","讓這個夜晚特別的是觀眾。","強調句強調主詞 the audience。"]],
 "audi=聽|-ence=名詞字尾","來聽的人 → 觀眾","@audience"],
["outdoor","adj.","戶外的",[
 ["Hiking is my favorite outdoor activity.","健行是我最喜歡的戶外活動。","outdoor 是形容詞，放在名詞前面；副詞是 outdoors（在戶外）。"],
 ["If the weather were nice, we would have an outdoor lunch.","如果天氣好，我們就會在戶外吃午餐。","與現在事實相反的假設，暗示「天氣其實不好」。"],
 ["This is the season when outdoor concerts are popular.","這是戶外演唱會受歡迎的季節。","關係副詞 when 修飾 the season。"]],
 "out=外面|door=門","門外的 → 戶外的","@outdoor"],
["overweight","adj.","過重的",[
 ["My suitcase is overweight, so I have to pay extra.","我的行李超重了，所以得多付錢。","overweight 可以形容人或行李「過重」。"],
 ["Being overweight, the dog needs more exercise.","這隻狗過重，需要多運動。","分詞構句 Being overweight = Because it is overweight。"],
 ["Doctors say that eating too much sugar can make people overweight.","醫生說吃太多糖會讓人過重。","make + 受詞 + 形容詞 表示「使……變得……」。"]],
 "over-=超過|weight=重量","超過標準重量 → 過重的","🧳|超重"],
["worldwide","adj./adv.","全世界的；在全世界",[
 ["The movie became a worldwide hit.","這部電影成了全球熱門作品。","worldwide 當形容詞放在名詞 hit 前面。"],
 ["The singer, whose songs are popular worldwide, is from Korea.","那位歌手的歌在全世界都很受歡迎，他來自韓國。","whose 是所有格關係代名詞，引導非限定關係子句；worldwide 在這裡當副詞。"],
 ["It is English that connects people worldwide.","連結全世界人們的是英文。","強調句強調主詞 English。"]],
 "world=世界|wide=廣泛的","遍及世界 → 全世界的","🌍|全世界"],
["disadvantage","n.","缺點；不利條件",[
 ["One disadvantage of living in the city is the noise.","住在城市的一個缺點是噪音。","主詞是 One disadvantage（單數），所以用 is；of 後面接 V-ing。"],
 ["Being short is not a disadvantage in this sport.","在這項運動中，個子矮不是劣勢。","這裡的 Being short 是動名詞當主詞，後面直接接動詞 is，不是分詞構句。"],
 ["If there were no disadvantages, everyone would choose this plan.","如果沒有任何缺點，大家都會選這個方案。","與現在事實相反的假設：If there were no + 複數名詞。"]],
 "dis-=相反|advantage=優點","優點的相反 → 缺點","👎|缺點"]
];

const S2_GRAMMAR = [
{ id:"g1", title:"關係副詞與非限定用法",
  intro:"關係副詞 where、when、why 用來修飾表示地點、時間、原因的名詞；前後加逗號的關係子句是非限定用法，用來補充說明。",
  table:[["關係副詞","修飾的先行詞","等於"],["where","地點：the place、the city","in / at / on which"],["when","時間：the day、the year","in / on / at which"],["why","原因：the reason","for which"],["how","方法（不和 the way 同時使用）","in which"]],
  points:[
   "關係副詞等於介係詞加 which：This is the house where I live. = This is the house in which I live.",
   "判斷方法：後面的子句如果已經完整，用關係副詞；如果缺主詞或受詞，用關係代名詞。This is the house which my grandfather built.（built 缺受詞）",
   "the way 和 how 不能同時出現：說 the way I study 或 how I study。",
   "限定用法沒有逗號，用來限定是「哪一個」：The students who passed the test were happy.",
   "非限定用法前後有逗號，只是補充說明：My brother, who lives in Tainan, is a doctor.（我只有一個哥哥）",
   "非限定用法不能用 that；專有名詞後面的關係子句用非限定用法。",
   "非限定的 which 可以指前面整句話：He passed the test, which made his mom happy."],
  ex:[
   ["This is the place where we recycle old batteries.","這是我們回收舊電池的地方。","where 修飾地點 the place，we recycle old batteries 是完整的句子。"],
   ["That was the day when I had my first interview.","那是我第一次面試的日子。","when 修飾時間 the day，等於 on which。"],
   ["Trust is the reason why their relationship is so strong.","信任就是他們關係這麼穩固的原因。","why 修飾 the reason，等於 for which。"],
   ["Taipei, where many international events are held, is a busy city.","台北舉辦許多國際活動，是座繁忙的城市。","專有名詞 Taipei 後面用非限定用法，前後加逗號。"],
   ["Many old shops have disappeared, which makes the street look different.","許多老店消失了，這讓這條街看起來不一樣了。","非限定的 which 指前面整句話（老店消失這件事）。"]]},
{ id:"g2", title:"分詞構句",
  intro:"分詞構句是把副詞子句縮短的寫法：去掉連接詞和相同的主詞，動詞改成分詞。",
  table:[["步驟","範例"],["原句","Because I felt tired, I went to bed early."],["1. 去掉連接詞","I felt tired, I went to bed early."],["2. 去掉相同的主詞","felt tired, I went to bed early."],["3. 動詞改成分詞","Feeling tired, I went to bed early."]],
  points:[
   "主動用 V-ing：Feeling tired, I went to bed early.",
   "被動用過去分詞：Written in English, the book is hard for me.（書是被寫的）",
   "be 動詞改成 Being，常常可以省略：(Being) Tired, I went to bed early.",
   "動作比主要子句更早發生，用 Having + p.p.：Having finished my homework, I watched TV.",
   "前後主詞必須相同，不然會變成錯誤的句子：Walking along the beach, a turtle appeared.（變成烏龜在散步）",
   "否定是在分詞前面加 not：Not knowing what to do, she called her mom."],
  ex:[
   ["Waiting in the long line, Tom grew impatient.","在長長的隊伍中等待，湯姆變得不耐煩。","主動，用 V-ing：= While Tom was waiting ...。"],
   ["Translated into thirty languages, the book became famous worldwide.","這本書被翻譯成三十種語言，在全世界出名。","書是被翻譯的，用過去分詞。"],
   ["Having prepared well, she felt confident before the speech.","因為準備充分，她在演講前很有信心。","先準備、後有信心，用 Having + p.p.。"],
   ["Being dishonest, he soon lost all his friends.","因為不誠實，他很快就失去了所有朋友。","be 動詞改成 Being。"],
   ["Proud of her achievement, Lisa smiled at her parents.","莉莎對自己的成就感到驕傲，對爸媽笑了。","Being 省略，只留下形容詞 Proud。"]]},
{ id:"g3", title:"假設語氣",
  intro:"假設語氣用來說「和事實相反」或「不太可能」的情況，祕訣是動詞往過去退一格。",
  table:[["類型","If 子句","主要子句"],["與現在事實相反","If + 過去式（be 動詞用 were）","would / could / might + 原形動詞"],["與過去事實相反","If + had + p.p.","would / could / might + have + p.p."],["混合（過去影響現在）","If + had + p.p.","would + 原形動詞（常加 now）"]],
  points:[
   "與現在事實相反：If I were you, I would study harder.（但我不是你）",
   "be 動詞不管主詞是誰，一律用 were：If he were here, he would help us.",
   "與過去事實相反：If I had studied, I would have passed.（但我當時沒讀）",
   "一般條件句（可能發生）不是假設語氣：If it rains tomorrow, we will stay home.",
   "Without + 名詞 也能表示假設：Without water, we couldn't live.",
   "I wish + 過去式 表示對現在的願望：I wish I could fly."],
  ex:[
   ["If I were more independent, my parents wouldn't worry about me so much.","如果我更獨立一點，我爸媽就不會這麼擔心我了。","與現在事實相反，be 動詞用 were。"],
   ["If I had prepared more, I would have done better.","如果我當時準備得更多，就會表現得更好。","與過去事實相反：had + p.p. 搭配 would have + p.p.。"],
   ["If I had made a different decision, my life would be different now.","如果我當時做了不同的決定，我現在的人生就會不一樣。","混合假設：過去的決定影響現在。"],
   ["Without electricity, many machines would be useless.","沒有電的話，許多機器都會變得沒用。","Without + 名詞 = If there were no ...。"],
   ["Many animals will disappear if we don't protect their homes.","如果我們不保護牠們的家園，許多動物將會消失。","這是可能發生的一般條件句，用現在式加 will，不是假設語氣。"]]},
{ id:"g4", title:"It is ... that 強調句",
  intro:"想強調句子中的某個部分，就把它放進 It is / It was 和 that 中間。",
  table:[["要強調的部分","強調句"],["原句","Tom broke the window yesterday."],["主詞 Tom","It was Tom that (who) broke the window yesterday."],["受詞 the window","It was the window that Tom broke yesterday."],["時間 yesterday","It was yesterday that Tom broke the window."]],
  points:[
   "時態：原句是過去式用 It was，現在式用 It is。",
   "強調人時，that 可以換成 who；強調時間或地點時，仍然用 that，不用 when 或 where。",
   "檢查法：把 It is/was 和 that 拿掉，剩下的部分能組回完整句子，才是強調句。",
   "和虛主詞句型區分：It is important that we study. 拿掉後不成句，所以不是強調句。",
   "that 後面的動詞要配合被強調的主詞：It is the students who are responsible.",
   "It was not until ... that ... 表示「直到……才……」：It was not until ten that he came home."],
  ex:[
   ["It was his impolite attitude that made the teacher angry.","讓老師生氣的是他沒禮貌的態度。","強調主詞 his impolite attitude。"],
   ["It was freedom that the people fought for.","人民奮鬥爭取的是自由。","強調受詞 freedom。"],
   ["It was in this peaceful garden that I wrote my first poem.","我是在這座寧靜的花園裡寫下第一首詩的。","強調地點，仍然用 that，不用 where。"],
   ["It was my coach who encouraged me not to give up.","鼓勵我不要放棄的是我的教練。","強調人，可以用 who。"],
   ["It was not until the bell rang that I realized I was late.","直到鐘聲響了，我才發現自己遲到了。","It was not until ... that ...：直到……才……。"]]}
];

const S2_QUIZ = [
 ["This is the town ___ I was born.",["where","which","when","why"],0,"the town 是地點，後面的 I was born 已經完整，用關係副詞 where（= in which）。","g1"],
 ["I still remember the day ___ we first met.",["where","when","which","why"],1,"the day 是時間，用 when（= on which）。","g1"],
 ["That is the reason ___ he was late.",["why","where","when","how"],0,"the reason 後面用 why（= for which）。","g1"],
 ["This is the house ___ my grandfather built.",["where","which","when","why"],1,"built 後面缺受詞，要用關係代名詞 which（或 that），不能用 where。這是常考陷阱！","g1"],
 ["Taipei 101, ___ is very tall, attracts many tourists.",["that","which","where","who"],1,"非限定用法（有逗號）不能用 that；指物用 which。","g1"],
 ["My mother, ___ is a nurse, works at night.",["that","which","who","whom"],2,"非限定用法指人用 who，不能用 that；這裡缺主詞，不能用 whom。","g1"],
 ["He passed the exam, ___ made his parents happy.",["that","which","what","it"],1,"非限定的 which 可以指前面整句話（他通過考試這件事）。","g1"],
 ["This is ___ I solved the problem.",["the way how","how","which","where"],1,"the way 和 how 不能同時用，用其中一個就好。","g1"],
 ["___ tired, I went to bed early.",["Feel","Feeling","Felt","To feel"],1,"主動「我覺得累」用 V-ing：Feeling tired = Because I felt tired。","g2"],
 ["___ in simple English, the book is easy to read.",["Writing","Written","Write","To write"],1,"書是「被寫」的，被動用過去分詞 Written。","g2"],
 ["___ my homework, I went out to play.",["Finishing","Having finished","Finished","To finish"],1,"先寫完作業、後出去玩，較早發生的動作用 Having + p.p.。","g2"],
 ["___ what to do, she asked her teacher.",["Not knowing","Knowing not","Don't know","Not known"],0,"分詞構句的否定把 not 放在分詞前面：Not knowing ...。","g2"],
 ["Walking along the beach, ___.",["the sun was shining","we saw a turtle","a turtle appeared","it was windy"],1,"分詞構句的主詞要和主要子句相同：是「我們」在沿著海邊走，所以主要子句的主詞要是 we。","g2"],
 ["___ by the news, everyone cheered.",["Exciting","Excited","Excite","Having excited"],1,"大家是「被新聞激起興奮」，人感到興奮用過去分詞 Excited。","g2"],
 ["Because she was nervous, she couldn't speak. → ___ nervous, she couldn't speak.",["Being","Been","Be","Having"],0,"be 動詞改成 Being（也可以省略，只留 Nervous）。","g2"],
 ["___ from the mountain, the city looks beautiful.",["Seeing","Seen","See","Having seen"],1,"城市是「被看」的，用過去分詞 Seen。","g2"],
 ["If I ___ you, I would study harder.",["am","was","were","be"],2,"與現在事實相反，be 動詞一律用 were。","g3"],
 ["If I had more money, I ___ a new bike.",["will buy","would buy","bought","would have bought"],1,"與現在事實相反：主要子句用 would + 原形動詞。","g3"],
 ["If he had studied, he ___ the test.",["would pass","will pass","would have passed","passed"],2,"與過去事實相反：主要子句用 would have + p.p.。","g3"],
 ["If it ___ tomorrow, we will stay home.",["rains","rained","would rain","had rained"],0,"這是可能發生的一般條件句，If 子句用現在式代替未來，不是假設語氣。","g3"],
 ["If I ___ up earlier, I wouldn't have missed the bus.",["get","got","had gotten","would get"],2,"主要子句是 wouldn't have missed（過去），If 子句用 had + p.p.。","g3"],
 ["I wish I ___ fly like a bird.",["can","could","will","am"],1,"I wish + 過去式，表示不可能實現的願望：can 改成 could。","g3"],
 ["___ water, nothing could live on Earth.",["With","Without","If","Because"],1,"Without + 名詞 = If there were no ...，可以表示假設。","g3"],
 ["If I had eaten breakfast, I ___ hungry now.",["wouldn't be","won't be","wouldn't have been","am not"],0,"混合假設：過去沒吃（had eaten），影響現在（now），主要子句用 would + 原形動詞。","g3"],
 ["It was Tom ___ broke the window.",["which","who","where","what"],1,"強調句強調人，可以用 who 或 that。","g4"],
 ["It was in 2010 ___ we moved to Taichung.",["when","that","which","where"],1,"強調句一律用 that（強調人時才可改用 who），就算強調的是時間也不用 when。","g4"],
 ["It is the students who ___ responsible for the event.",["is","are","was","be"],1,"who 後面的動詞配合被強調的主詞 the students（複數）：are。","g4"],
 ["哪一句是強調句？",["It is important that we exercise.","It is exercise that keeps us healthy.","It is hot today.","It is time to go."],1,"拿掉 It is 和 that 後，Exercise keeps us healthy 能成句，所以是強調句；第一句拿掉後不成句，是虛主詞句型。","g4"],
 ["It was not until midnight ___ he came home.",["when","that","which","so"],1,"It was not until ... that ... 表示「直到……才……」。","g4"],
 ["It ___ my sister who made this cake yesterday.",["is","was","were","has"],1,"原句是過去式（made ... yesterday），強調句用 It was。","g4"],
 ["___ is in the library that I usually study.",["This","It","That","There"],1,"強調句固定用 It is/was ... that。","g4"],
 ["It was the night market ___ attracted the most visitors.",["where","that","when","what"],1,"被強調的是主詞 the night market，後面缺主詞，要用 that，不能用 where。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S2_CLASS = {
g1:[
 {say:"高二同學好！今天要搞定關係副詞。先看黑板上這兩句：{This is the house where I live.} 和 {This is the house which I live in.}，哪裡不一樣？", board:[["This is the house where I live.",["where"]],["This is the house which I live in.",["which","in"]]]},
 {say:"答案是：意思完全一樣！關係副詞其實就是「介係詞加 which」。where 等於 in which，when 等於 on which，why 等於 for which。", board:[["where = in / at / on which",["where"]],["when = in / on / at which",["when"]],["why = for which",["why"]]]},
 {say:"口訣記起來！", chant:"地點 where、時間 when、原因 why，等於介係詞加 which！"},
 {say:"那要怎麼判斷用關係副詞還是關係代名詞？看後面的子句缺不缺東西！{This is the town where I was born.} I was born 已經完整，所以用 where。{This is the house which my grandfather built.} built 後面少了受詞，所以用 which。", board:[["This is the town where I was born.",["where"]],["This is the house which my grandfather built.",["which","built"]]]},
 {say:"這是段考最愛的陷阱，第二個口訣！", chant:"後面完整用副詞，後面缺東西用代名詞！"},
 {ask:{say:"考考你！", q:"This is the house ___ my grandfather built.", opts:["where","which"], ans:1,
   ok:"厲害！built 後面缺受詞（蓋了什麼？），要用 which，這是超常考的陷阱。", bad:{0:"小心陷阱！built 後面少了受詞，要用關係代名詞 which。"},
   again:{q:"This is the park ___ we often play.", opts:["where","which"], ans:0, exp:"we often play 已經完整，地點用 where。"}}},
 {say:"再來是 how。重點：the way 和 how 不能一起出現！可以說 {the way I study}，也可以說 {how I study}，就是不能說 the way how。", board:[["the way I study",["the way"]],["how I study",["how"]],["the way how I study",[],true]]},
 {say:"接下來看逗號！沒有逗號是「限定用法」，告訴你是哪一個；有逗號是「非限定用法」，只是補充說明。{My brother, who lives in Tainan, is a doctor.} 有逗號，表示我只有一個哥哥，順便補充他住台南。", board:[["My brother, who lives in Tainan, is a doctor.",["who"]]]},
 {say:"非限定用法有一個鐵則！", chant:"有逗號，不能用 that！"},
 {ask:{q:"Taipei 101, ___ is very tall, attracts many tourists.", opts:["that","which","who"], ans:1,
   ok:"答對！有逗號不能用 that，指物用 which。", bad:{0:"有逗號的非限定用法不能用 that！",2:"Taipei 101 是建築物，指物要用 which。"},
   again:{q:"My mother, ___ is a nurse, works at night.", opts:["that","who","which"], ans:1, exp:"非限定用法指人用 who，不能用 that。"}}},
 {say:"最後加碼：非限定的 which 可以指前面「整句話」！{He passed the exam, which made his parents happy.} which 指的是「他通過考試」這整件事。", board:[["He passed the exam, which made his parents happy.",["which"]]]},
 {ask:{say:"最後一題！", q:"He was late again, ___ made the teacher angry.", opts:["that","which","what"], ans:1,
   ok:"完美！which 指前面整件事：他又遲到了。", bad:{0:"有逗號不能用 that 喔！",2:"what 不能接在逗號後面指前面的句子，要用 which。"},
   again:{q:"This is the reason ___ I love English.", opts:["why","which","where"], ans:0, exp:"the reason 後面接完整子句，用 why。"}}},
 {say:"關係副詞過關！複習口訣：地點 where、時間 when、原因 why，等於介係詞加 which；後面完整用副詞，缺東西用代名詞；有逗號不能用 that！", end:true}
],
g2:[
 {say:"今天學一個讓句子變帥的技巧：分詞構句！看這句：{Because I felt tired, I went to bed early.} 有點長對吧？我們來把它變短。", board:[["Because I felt tired, I went to bed early.",["Because"]]]},
 {say:"三個步驟：第一，去掉連接詞 because。第二，前後主詞都是 I，去掉前面的 I。第三，動詞 felt 改成 feeling。就變成：{Feeling tired, I went to bed early.}", board:[["Because I felt tired, ...",["Because","I","felt"]],["Feeling tired, I went to bed early.",["Feeling"]]]},
 {say:"三步驟口訣！", chant:"去連接詞、去主詞、動詞改分詞！"},
 {say:"那要用 V-ing 還是過去分詞？看主詞是主動還是被動！{Written in simple English, the book is easy to read.} 書是「被寫」的，所以用過去分詞 written。", board:[["Feeling tired, I ...（我主動覺得累）",["Feeling"]],["Written in English, the book ...（書被寫）",["Written"]]]},
 {say:"主動被動的口訣！", chant:"主動用 ing，被動用 p.p.！"},
 {ask:{q:"___ in simple English, the book is easy to read.", opts:["Writing","Written"], ans:1,
   ok:"對！書不會自己寫字，是被寫的，用 Written。", bad:{0:"書不會自己寫字喔！書是被寫的，要用 Written。"},
   again:{q:"___ the news, she started to cry.", opts:["Hearing","Heard"], ans:0, exp:"她主動聽到消息，用 Hearing。"}}},
 {say:"如果前面的動作比較早發生，就用 having 加過去分詞：{Having finished my homework, I watched TV.} 先寫完作業，才看電視。", board:[["Having finished my homework, I watched TV.",["Having finished"]]]},
 {ask:{q:"___ my homework, I went out to play.", opts:["Finishing","Having finished"], ans:1,
   ok:"讚！先寫完作業才出去玩，用 Having finished。", bad:{0:"兩個動作有先後，先發生的用 Having + p.p.。"},
   again:{q:"___ the movie before, I knew the ending.", opts:["Having seen","Seeing"], ans:0, exp:"之前就看過（較早發生），用 Having seen。"}}},
 {say:"最重要的陷阱：前後主詞一定要一樣！{Walking along the beach, we saw a turtle.} 是我們在走路，正確。如果寫成 Walking along the beach, a turtle appeared，就變成烏龜在海邊散步了！", board:[["Walking along the beach, we saw a turtle.",["we"]],["Walking along the beach, a turtle appeared.",[],true]]},
 {ask:{say:"最後一題！", q:"Walking along the beach, ___.", opts:["a turtle appeared","we saw a turtle","it was windy"], ans:1,
   ok:"完美！是「我們」在散步，主要子句的主詞要是 we。", bad:{0:"烏龜不會在海灘上散步啦！主詞要一樣，是我們在走。",2:"it 不會散步喔！主詞要和散步的人一樣：we。"},
   again:{q:"Not ___ what to do, she called her mom.", opts:["knowing","known","know"], ans:0, exp:"否定的分詞構句：Not + V-ing。"}}},
 {say:"分詞構句過關！口訣：去連接詞、去主詞、動詞改分詞；主動用 ing，被動用 p.p.；先發生用 having 加 p.p.；前後主詞要一樣！", end:true}
],
g3:[
 {say:"今天學假設語氣，也就是「如果……就好了」的白日夢句型！先比比看：{If it rains tomorrow, we will stay home.} 明天真的可能下雨，這是一般條件句。{If I were a bird, I would fly to you.} 我不可能是鳥，這才是假設語氣。", board:[["If it rains tomorrow, we will stay home.",["rains","will"]],["If I were a bird, I would fly to you.",["were","would"]]]},
 {say:"假設語氣的祕訣：動詞往過去退一格！說現在的白日夢，If 子句用過去式，主要子句用 would 加原形動詞。", board:[["If I had money, I would buy it.",["had","would buy"]]]},
 {say:"口訣來囉！", chant:"現在的夢用過去式，would 後面接原形！"},
 {say:"be 動詞特別注意：不管主詞是誰，一律用 were。{If I were you, I would study harder.}", board:[["If I were you, I would study harder.",["were"]],["If he were here, he would help us.",["were"]]]},
 {ask:{q:"If I ___ you, I would study harder.", opts:["was","were","am"], ans:1,
   ok:"對！假設語氣的 be 動詞一律用 were。", bad:{0:"假設語氣裡的 be 動詞，不管主詞是誰都用 were。",2:"這是和現在事實相反（我不是你），要往過去退一格：were。"},
   again:{q:"If he ___ here, he would help us.", opts:["is","were","be"], ans:1, exp:"be 動詞一律用 were。"}}},
 {say:"如果是對過去的後悔，就再往前退一格！If 子句用 had 加過去分詞，主要子句用 would have 加過去分詞：{If I had studied, I would have passed.} 但我當時沒讀，所以沒過。", board:[["If I had studied, I would have passed.",["had studied","would have passed"]]]},
 {say:"後悔的口訣！", chant:"過去的後悔用 had p.p.，would have 再加 p.p.！"},
 {ask:{q:"If he had studied, he ___ the test.", opts:["would pass","would have passed","will pass"], ans:1,
   ok:"讚！和過去相反，用 would have passed。", bad:{0:"If 子句是 had studied（過去），主要子句要用 would have + p.p.。",2:"這是假設語氣，不能用 will。"},
   again:{q:"If I ___ up earlier, I wouldn't have missed the bus.", opts:["got","had gotten","get"], ans:1, exp:"主要子句是 wouldn't have missed，If 子句用 had + p.p.。"}}},
 {say:"高手加碼：混合假設！過去的事影響到現在：{If I had eaten breakfast, I wouldn't be hungry now.} 早上沒吃是過去，現在很餓是現在。另外，{Without water} 也可以表示「如果沒有水」。", board:[["If I had eaten breakfast, I wouldn't be hungry now.",["had eaten","wouldn't be","now"]],["Without water, we couldn't live.",["Without"]]]},
 {ask:{say:"最後一題，小心陷阱！", q:"If it ___ tomorrow, we will stay home.", opts:["rains","rained","had rained"], ans:0,
   ok:"太強了！這是真的可能發生的事，用一般條件句：If 子句用現在式。", bad:{1:"這是可能發生的事，不是白日夢！用一般條件句，If 子句用現在式。",2:"這是可能發生的事，用一般條件句：If it rains。"},
   again:{q:"I wish I ___ fly.", opts:["can","could","will"], ans:1, exp:"I wish + 過去式，can 改成 could。"}}},
 {say:"假設語氣過關！口訣：現在的夢用過去式，would 接原形；過去的後悔用 had p.p.，would have p.p.；be 動詞一律用 were！", end:true}
],
g4:[
 {say:"最後一課：It is that 強調句！當你想特別強調句子裡的某個部分，就把它放進 It is 跟 that 中間，就像打上一盞聚光燈！先看原句：{Tom broke the window yesterday.}", board:[["Tom broke the window yesterday.",[]]]},
 {say:"強調「誰」打破：{It was Tom that broke the window yesterday.} 強調「打破什麼」：{It was the window that Tom broke yesterday.} 強調「什麼時候」：{It was yesterday that Tom broke the window.}", board:[["It was Tom that broke the window.",["Tom"]],["It was the window that Tom broke.",["the window"]],["It was yesterday that Tom broke the window.",["yesterday"]]]},
 {say:"口訣記起來！", chant:"要強調誰，就放 It is 和 that 中間！"},
 {say:"三個細節：第一，原句是過去式就用 It was。第二，強調人可以用 who 代替 that。第三，強調時間或地點，還是用 that，不用 when 或 where！", board:[["It was Tom who broke the window.",["who"]],["It was in 2010 that we moved.",["that"]]]},
 {ask:{q:"It was in 2010 ___ we moved to Taichung.", opts:["when","that"], ans:1,
   ok:"對！強調句一律用 that，就算強調的是時間也一樣。", bad:{0:"陷阱！強調句不用 when，固定用 that。"},
   again:{q:"It was Tom ___ broke the window.", opts:["which","who"], ans:1, exp:"強調人可以用 who（或 that）。"}}},
 {say:"怎麼分辨強調句和虛主詞？檢查法：把 It is 和 that 拿掉，剩下的能組回完整句子，就是強調句。{It is exercise that keeps us healthy.} 拿掉後是 Exercise keeps us healthy，成立！但 {It is important that we exercise.} 拿掉後不成句，所以是虛主詞句型。", board:[["It is exercise that keeps us healthy.",["exercise"]],["It is important that we exercise.",["important"]]]},
 {say:"檢查法的口訣！", chant:"拿掉 It is 和 that，句子還完整，就是強調句！"},
 {ask:{q:"哪一句是強調句？", opts:["It is hot today.","It is the cat that broke the vase.","It is important to sleep."], ans:1,
   ok:"完全正確！拿掉後 The cat broke the vase 能成句。", bad:{0:"It is hot today 的 It 是指天氣，不是強調句。",2:"這是虛主詞句型，It 代替 to sleep。"},
   again:{q:"It is the students who ___ responsible.", opts:["is","are"], ans:1, exp:"動詞配合被強調的 the students（複數）：are。"}}},
 {say:"最後一個必考句型：{It was not until} 加時間，再加 that，意思是「直到……才……」。{It was not until ten that he came home.} 他直到十點才回家。", board:[["It was not until ten that he came home.",["not until","that"]]]},
 {ask:{say:"最後一題！", q:"It was not until midnight ___ he finished his report.", opts:["when","that","so"], ans:1,
   ok:"太棒了！It was not until ... that ... 是固定句型。", bad:{0:"這是強調句型，要用 that，不用 when。",2:"so 不能用在這個句型，要用 that。"},
   again:{q:"It ___ my sister who made this cake yesterday.", opts:["is","was"], ans:1, exp:"yesterday 是過去，用 It was。"}}},
 {say:"強調句過關！口訣：要強調誰就放 It is 和 that 中間；拿掉後句子完整才是強調句；It was not until ... that 是「直到……才」。高二第一次段考的文法全部上完了，去挑戰魔王吧！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S2_ROOTS = [
  {id:"r1", title:"否定字首：un- / in- / im- / il- / ir- / dis-"},
  {id:"r2", title:"名詞字尾：-tion / -ment / -ness / -ity / -ship / -dom"},
  {id:"r3", title:"形容詞字尾：-able / -ful / -less / -ous / -ive，動詞字尾：-ize / -en"},
  {id:"r4", title:"常見字根：port / spect / vis / tract / duce / press"}
];
const S2_ROOT_CLASS = {
r1:[
 {say:"高二同學好！今天安安老師教你背單字的超級武器：字根字首！英文長單字很多都是像積木一樣拼起來的。先看最常見的一種：表示「不」的否定字首。", board:[["un + usual = unusual",["un"],false,true],["dis + honest = dishonest",["dis"],false,true]]},
 {say:"<<un>> 和 <<dis>> 最常見：{unusual} 不尋常的、{unknown} 未知的、{dishonest} 不誠實的、{disagree} 不同意。把字首拿掉，剩下的就是你早就認識的字！", board:[["unusual   unknown",["un"],false,true],["dishonest   disagree",["dis"],false,true]]},
 {say:"口訣！", chant:"看到 un、dis、in，先想到「不」！"},
 {ask:{q:"un ＋ known（知道的）＝ unknown，意思是？", opts:["已知的","未知的","知識"], ans:1,
   ok:"對！un 是「不」，不被知道的，就是未知的。", bad:{0:"un 是「不」的意思喔，所以是「不知道的」。",2:"unknown 是形容詞，不是名詞「知識」。"},
   again:{q:"dis ＋ agree ＝ disagree，意思是？", opts:["同意","不同意","協議"], ans:1, exp:"dis 表示「不、相反」，disagree 就是不同意。"}}},
 {say:"<<in>> 也是「不」，但它會變身！後面接 p、b、m 時變成 <<im>>：{impossible}、{impatient}、{impolite}。後面接 l 變成 <<il>>：{illegal}。後面接 r 變成 <<ir>>：{irregular}。", board:[["in + dependent → independent",["in"],false,true],["im + possible → impossible",["im"],false,true],["il + legal → illegal",["il"],false,true],["ir + regular → irregular",["ir"],false,true]]},
 {say:"變身口訣！", chant:"p、b、m 前變 im，l 前變 il，r 前變 ir！"},
 {ask:{q:"＿＿polite（不禮貌的）字首要填？", opts:["in","im","il"], ans:1,
   ok:"讚！polite 開頭是 p，in 要變成 im。", bad:{0:"polite 開頭是 p，in 要變身成 im 喔。",2:"il 只用在 l 開頭的字前面。"},
   again:{q:"＿＿regular（不規則的）字首要填？", opts:["ir","in","un"], ans:0, exp:"regular 開頭是 r，所以用 ir：irregular。"}}},
 {say:"<<dis>> 除了「不」，還有「相反」的意思：{appear} 是出現，{disappear} 就是消失。{advantage} 是優點，{disadvantage} 就是缺點。", board:[["appear → disappear",["dis"],false,true],["advantage → disadvantage",["dis"],false,true]]},
 {ask:{say:"最後一題！", q:"看到 disadvantage，最可能的意思是？", opts:["優點","缺點","好處"], ans:1,
   ok:"完美！dis 是「相反」，優點的相反就是缺點。", bad:{0:"dis 表示相反，所以是優點的相反喔。",2:"dis 表示相反，所以是好處的相反：缺點。"},
   again:{q:"illegal 的意思最可能是？", opts:["合法的","違法的","法律"], ans:1, exp:"il 表示「不」，legal 是合法的，illegal 就是違法的。"}}},
 {say:"否定字首過關！口訣：看到 un、dis、in，先想到「不」；p、b、m 前變 im，l 前變 il，r 前變 ir。", end:true}
],
r2:[
 {say:"今天學「名詞字尾」！只要看到這些尾巴，就知道這個字是名詞，做詞性題超好用。", board:[["pollute → pollution",["ion"],false,true],["develop → development",["ment"],false,true]]},
 {say:"動詞加上 <<tion>> 或 <<sion>>，就變名詞：{protect} 變 {protection}、{decide} 變 {decision}、{discuss} 變 {discussion}、{invent} 變 {invention}。", board:[["protect → protection",["ion"],false,true],["decide → decision",["sion"],false,true],["discuss → discussion",["ion"],false,true]]},
 {say:"動詞加上 <<ment>> 也變名詞：{develop} 變 {development}、{achieve} 變 {achievement}、{govern} 變 {government}。", board:[["develop → development",["ment"],false,true],["achieve → achievement",["ment"],false,true],["govern → government",["ment"],false,true]]},
 {say:"口訣！", chant:"tion、sion、ment，動詞變名詞！"},
 {ask:{q:"achieve（達成）的名詞是？", opts:["achievement","achieveness","achievity"], ans:0,
   ok:"對！achieve 加 ment 變成 achievement。", bad:{1:"ness 接在形容詞後面，achieve 是動詞，要加 ment。",2:"英文沒有 achievity 這個字喔，要加 ment。"},
   again:{q:"discuss（討論）的名詞是？", opts:["discussment","discussion","discussness"], ans:1, exp:"discuss 加 ion 變成 discussion。"}}},
 {say:"形容詞加上 <<ness>> 或 <<ity>> 也變名詞：{kind} 變 {kindness}、{weak} 變 {weakness}、{able} 變 {ability}、{active} 變 {activity}。", board:[["kind → kindness",["ness"],false,true],["weak → weakness",["ness"],false,true],["able → ability",["ity"],false,true]]},
 {say:"還有表示「關係、狀態」的 <<ship>> 和 <<dom>>：{friend} 變 {friendship} 友誼，{free} 變 {freedom} 自由。", board:[["friend → friendship",["ship"],false,true],["free → freedom",["dom"],false,true]]},
 {say:"第二個口訣！", chant:"ness、ity 形容詞變名詞；ship 是關係，dom 是狀態！"},
 {ask:{q:"free（自由的）加上哪個字尾，變成「自由」這個名詞？", opts:["freeness","freedom","freement"], ans:1,
   ok:"對！free 加 dom 變成 freedom，dom 表示一種狀態。", bad:{0:"英文不說 freeness，「自由」是 freedom。",2:"ment 通常接在動詞後面，free 是形容詞，要用 dom。"},
   again:{q:"friend（朋友）的「友誼」是？", opts:["friendship","friendity","friendment"], ans:0, exp:"ship 表示關係，friend 加 ship 就是 friendship 友誼。"}}},
 {ask:{say:"最後一題！", q:"The ＿＿ of the city is fast.（這座城市的發展很快）", opts:["develop","development","developing"], ans:1,
   ok:"太棒了！the 和 of 中間要放名詞：development。", bad:{0:"the 和 of 中間要放名詞喔，develop 是動詞。",2:"這裡需要名詞，用 development 最正確。"},
   again:{q:"Thank you for your ＿＿.（謝謝你的好意）", opts:["kind","kindly","kindness"], ans:2, exp:"your 後面要接名詞：kindness。"}}},
 {say:"名詞字尾過關！口訣：tion、sion、ment 動詞變名詞；ness、ity 形容詞變名詞；ship 是關係，dom 是狀態。", end:true}
],
r3:[
 {say:"今天學「形容詞字尾」，看到這些尾巴，就知道是形容詞！第一組：<<able>> 和 <<ible>>，表示「可以……的」：{reasonable}、{comfortable}、{visible}、{responsible}。", board:[["reason + able = reasonable",["able"],false,true],["vis + ible = visible",["ible"],false,true]]},
 {say:"口訣！", chant:"able、ible，可以怎麼樣！"},
 {say:"第二組是一對反義詞：<<ful>> 表示「充滿」，<<less>> 表示「沒有」。{careful} 小心的，{careless} 粗心的；{harmful} 有害的，{useless} 沒用的。", board:[["careful ↔ careless",["ful","less"],false,true],["useful ↔ useless",["ful","less"],false,true]]},
 {say:"反義詞口訣！", chant:"ful 是滿滿，less 是空空！"},
 {ask:{q:"home ＋ less ＝ homeless，意思是？", opts:["有家的","無家可歸的","在家的"], ans:1,
   ok:"對！less 是「沒有」，沒有家的，就是無家可歸的。", bad:{0:"less 是「沒有」的意思喔！",2:"less 是「沒有」，不是「在」。"},
   again:{q:"peace ＋ ful ＝ peaceful，意思是？", opts:["寧靜的","沒有和平的","和平"], ans:0, exp:"ful 表示「充滿」，充滿和平就是寧靜的。"}}},
 {say:"第三組：<<ous>> 也是「充滿」：{dangerous}、{nervous}。<<al>> 和 <<ive>> 也很常見：{natural}、{traditional}、{creative}、{attractive}。", board:[["danger + ous = dangerous",["ous"],false,true],["nature → natural",["al"],false,true],["create → creative",["ive"],false,true]]},
 {ask:{q:"danger（危險）的形容詞是？", opts:["dangerful","dangerous","dangerive"], ans:1,
   ok:"讚！danger 加 ous：dangerous。", bad:{0:"英文沒有 dangerful 這個字，要用 dangerous。",2:"英文沒有 dangerive 這個字，要用 dangerous。"},
   again:{q:"create（創造）的形容詞是？", opts:["creative","createful","createous"], ans:0, exp:"create 去 e 加 ive：creative。"}}},
 {say:"最後加碼：動詞字尾！<<ize>> 和 <<en>> 表示「使……」：{real} 變 {realize}、{strength} 變 {strengthen}、{wide} 變 {widen}。", board:[["real → realize",["ize"],false,true],["strength → strengthen",["en"],false,true],["wide → widen",["en"],false,true]]},
 {ask:{say:"最後一題！", q:"My English is weak. I want to ＿＿ it.（加強）", opts:["strong","strength","strengthen"], ans:2,
   ok:"完美！want to 後面要接動詞：strengthen。", bad:{0:"strong 是形容詞，want to 後面要接動詞。",1:"strength 是名詞，want to 後面要接動詞 strengthen。"},
   again:{q:"The road is too narrow. They plan to ＿＿ it.（拓寬）", opts:["wide","widen","width"], ans:1, exp:"plan to 後面要接動詞：widen。"}}},
 {say:"字尾過關！口訣：able、ible 可以怎麼樣；ful 是滿滿，less 是空空；ize、en 是使怎麼樣。", end:true}
],
r4:[
 {say:"最後一課，學「字根」！字根是單字的核心意思，學會一個字根，就能一次記住一整串單字！第一個：<<port>>，意思是「搬運」。", board:[["port = 搬運",["port"],false,true]]},
 {say:"{import} 往裡面搬，就是進口；{export} 往外面搬，就是出口；{transport} 搬過去，就是運輸；{portable} 可以搬的，就是可攜帶的。", board:[["im + port = import",["port"],false,true],["ex + port = export",["port"],false,true],["trans + port = transport",["port"],false,true],["port + able = portable",["port"],false,true]]},
 {say:"口訣！", chant:"port 搬搬搬：im 進口、ex 出口、trans 運輸！"},
 {ask:{q:"ex（向外）＋ port（搬運）＝ export，意思是？", opts:["進口","出口","運輸"], ans:1,
   ok:"對！往外搬就是出口。", bad:{0:"進口是 import（往裡面搬），ex 是向外喔。",2:"運輸是 transport，ex 是向外。"},
   again:{q:"port ＋ able ＝ portable，意思是？", opts:["可攜帶的","港口","搬運工"], ans:0, exp:"port 搬運加上 able 可以……的，就是可以搬著走的。"}}},
 {say:"表示「看」的字根有兩個：<<spect>> 和 <<vis>>。{inspect} 往裡面看，就是檢查；{respect} 再看一眼，表示重視、尊重；{visible} 看得見的；{vision} 視力。", board:[["in + spect = inspect",["spect"],false,true],["re + spect = respect",["spect"],false,true],["vis + ible = visible",["vis"],false,true],["vis + ion = vision",["vis"],false,true]]},
 {say:"口訣！", chant:"spect、vis，眼睛看看看！"},
 {say:"再來三個：<<tract>> 是「拉」：{attract} 把人拉過來，就是吸引。<<duce>> 是「引導」：{produce} 往前引導出來，就是生產；{introduce} 引導進來，就是介紹。<<press>> 是「壓」：{express} 把想法壓出去，就是表達；{impress} 壓進心裡，就是讓人印象深刻。", board:[["at + tract = attract",["tract"],false,true],["pro + duce = produce",["duce"],false,true],["ex + press = express",["press"],false,true]]},
 {ask:{q:"字根 tract 的意思是？", opts:["看","拉","搬"], ans:1,
   ok:"讚！tract 是「拉」，attract 把人拉過來。", bad:{0:"「看」是 spect 和 vis 喔。",2:"「搬」是 port 喔。"},
   again:{q:"字根 spect 的意思是？", opts:["看","說","壓"], ans:0, exp:"spect 是「看」，像 inspect、respect。"}}},
 {ask:{say:"最後一題！", q:"pre（事先）＋ dict（說）＝ predict，意思是？", opts:["預測","字典","說話"], ans:0,
   ok:"完美！事先說出來，就是預測。", bad:{1:"字典是 dictionary，pre 是「事先」喔。",2:"pre 是「事先」，事先說出來是預測。"},
   again:{q:"in（向內）＋ spect（看）＝ inspect，意思是？", opts:["尊重","檢查","期待"], ans:1, exp:"往裡面看，就是檢查。"}}},
 {say:"字根過關！口訣：port 搬運、spect 和 vis 看、tract 拉、duce 引導、press 壓。字根字首全部上完了，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創）與概念卡 ---------- */
Object.assign(ILLUS2, {
  recycle: () => svgWrap("#eaf7ef", ground() + grp(80, 80, 1, `<rect x="-24" y="-28" width="48" height="52" rx="6" fill="#22c55e"/><rect x="-28" y="-34" width="56" height="9" rx="4" fill="#16a34a"/>`) + txt(80, 84, "♻", 30, "#ffffff", 700) + grp(32, 46, .9, `<rect x="-6" y="-14" width="12" height="26" rx="4" fill="#60a5fa"/><rect x="-3.5" y="-20" width="7" height="7" rx="2" fill="#2563eb"/>`, -20) + grp(128, 42, .9, `<rect x="-12" y="-14" width="24" height="28" rx="2" fill="#fff" stroke="#d1d5db"/><path d="M-8 -7 H8 M-8 -1 H8 M-8 5 H4" stroke="#9ca3af" stroke-width="2"/>`, 15) + `<path d="M44 58 Q56 66 60 72" stroke="#16a34a" stroke-width="2.5" fill="none" stroke-dasharray="4 3"/><path d="M116 58 Q104 66 100 72" stroke="#16a34a" stroke-width="2.5" fill="none" stroke-dasharray="4 3"/>`),
  pollution: () => svgWrap("#eef0f3", `<rect x="0" y="100" width="160" height="20" fill="#9ca3af"/>` + `<path d="M24 100 V64 L48 76 V64 L72 76 V64 L96 76 V100 Z" fill="#6b7280"/><rect x="100" y="40" width="12" height="60" fill="#4b5563"/><rect x="120" y="52" width="10" height="48" fill="#4b5563"/>` + O.cloud(108, 28, .7, "#9ca3af") + O.cloud(130, 14, .55, "#a3a3a3") + O.cloud(136, 38, .5, "#9ca3af") + grp(30, 28, .7, `<circle r="13" fill="#fde68a"/><circle cx="-4" cy="-2" r="1.6" fill="${INK}"/><circle cx="4" cy="-2" r="1.6" fill="${INK}"/><path d="M-4 5 Q0 2 4 5" stroke="${INK}" stroke-width="1.4" fill="none"/>`) + `<rect x="36" y="82" width="8" height="8" fill="#fde68a"/><rect x="60" y="82" width="8" height="8" fill="#fde68a"/><rect x="84" y="82" width="8" height="8" fill="#fde68a"/>`),
  transport: () => svgWrap("#e8f4ff", `<rect x="0" y="92" width="160" height="28" fill="#6b7280"/><path d="M8 106 H40 M60 106 H92 M112 106 H144" stroke="#fff" stroke-width="3"/>` + O.bus(48, 74, .7) + grp(120, 76, .7, `<rect x="-30" y="-26" width="40" height="34" rx="3" fill="#60a5fa"/><path d="M10 -14 H24 L32 -2 V8 H10 Z" fill="#ef4444"/><rect x="14" y="-10" width="9" height="7" fill="#bfe6ff"/><circle cx="-16" cy="10" r="6" fill="#374151"/><circle cx="20" cy="10" r="6" fill="#374151"/>`) + O.cloud(40, 24, .6) + O.cloud(122, 30, .5)),
  interview: () => svgWrap("#f3f0ff", O.desk(80, 98, .9) + P({x:42, y:96, s:.85, hair:"long", hc:"#3b2a20", oc:"#8b5cf6", pose:"shakeR", acc:["glasses"], mood:"open"}) + P({x:118, y:96, s:.85, hair:"short", hc:"#2b2b2b", oc:"#4f7cf0", pose:"shakeL", acc:["tie"], mood:"smile"}) + `<rect x="76" y="70" width="8" height="14" rx="4" fill="#374151"/><path d="M80 84 V88" stroke="#374151" stroke-width="2"/>` + bubble(46, 14, "Why?", 42) + bubble(124, 14, "Because...", 66)),
  translate: () => svgWrap("#eef8f2", `<rect x="10" y="26" width="58" height="40" rx="12" fill="#fff" stroke="#93c5fd" stroke-width="2"/><path d="M26 66 L20 78 L36 66 Z" fill="#fff" stroke="#93c5fd" stroke-width="2"/>` + txt(39, 52, "Hello", 15, "#2563eb") + `<rect x="92" y="54" width="58" height="40" rx="12" fill="#fff" stroke="#fca5a5" stroke-width="2"/><path d="M134 94 L140 106 L124 94 Z" fill="#fff" stroke="#fca5a5" stroke-width="2"/>` + `<text x="121" y="80" text-anchor="middle" font-size="16" font-weight="800" fill="#dc2626" font-family="Microsoft JhengHei, sans-serif">你好</text>` + `<path d="M70 50 Q80 44 90 52" stroke="#16a34a" stroke-width="3" fill="none"/><path d="M86 46 L91 53 L83 55 Z" fill="#16a34a"/><path d="M90 70 Q80 76 70 68" stroke="#16a34a" stroke-width="3" fill="none"/><path d="M74 74 L69 67 L77 65 Z" fill="#16a34a"/>`),
  environment: () => svgWrap("#e6f6ff", `<circle cx="80" cy="66" r="38" fill="#60a5fa"/><path d="M52 50 Q62 42 70 52 Q66 62 56 60 Z M84 74 Q98 66 108 76 Q100 92 86 88 Z M86 38 Q96 34 100 44 Q92 48 86 38 Z" fill="#4ade80"/>` + O.tree(80, 20, .45) + heart(124, 30, .9) + heart(34, 98, .6, "#34d399") + spark(130, 96, .8)),
  freedom: () => svgWrap("#eef6ff", grp(48, 76, 1, `<path d="M-20 22 V-14 Q-20 -30 0 -30 Q20 -30 20 -14 V22 Z" fill="none" stroke="#9ca3af" stroke-width="2.5"/><path d="M-10 22 V-24 M0 22 V-30 M10 22 V-24" stroke="#9ca3af" stroke-width="2"/><rect x="-24" y="20" width="48" height="5" rx="2" fill="#6b7280"/><path d="M20 -6 L34 -18" stroke="#9ca3af" stroke-width="2.5"/>`) + grp(116, 40, 1, `<path d="M-14 0 Q-4 -16 4 -2 Q12 -18 22 -4" stroke="#fff" stroke-width="0" fill="none"/><ellipse cx="0" cy="0" rx="12" ry="8" fill="#fbbf24"/><circle cx="10" cy="-4" r="6" fill="#fbbf24"/><circle cx="12" cy="-5" r="1.4" fill="${INK}"/><path d="M15 -4 L20 -3 L15 -1 Z" fill="#f97316"/><path d="M-4 -4 Q-14 -22 -24 -12 Q-14 -8 -4 -2 Z" fill="#fcd34d"/>`) + `<path d="M70 60 Q88 52 100 46" stroke="#93c5fd" stroke-width="2" fill="none" stroke-dasharray="3 4"/>` + O.cloud(130, 90, .6) + spark(96, 24, .8)),
  friendship: () => svgWrap("#fff0f5", ground() + kid(62, {mood:"open", oc:"#ffb347"}) + kid(98, {hair:"short", hc:"#2b2b2b", mood:"open", oc:"#6cc5b0"}) + heart(80, 30, 1) + heart(64, 18, .5) + heart(98, 16, .55)),
  construction: () => svgWrap("#fff7e6", ground("#e5d3b3") + `<rect x="60" y="56" width="50" height="48" fill="none" stroke="#a16207" stroke-width="2.5"/><path d="M60 72 H110 M60 88 H110 M76 56 V104 M93 56 V104" stroke="#a16207" stroke-width="2"/>` + `<path d="M28 104 V24 M28 24 H132 M28 34 L46 24" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/><path d="M118 24 V44" stroke="#374151" stroke-width="1.5"/><rect x="110" y="44" width="16" height="10" fill="#9ca3af"/>` + P({x:136, y:106, s:.6, hair:"short", hc:"#2b2b2b", oc:"#f97316", pose:"wave", acc:["cap"], mood:"open"})),
  audience: () => svgWrap("#2b2140", `<path d="M0 0 H160 V20 Q120 30 80 22 Q40 30 0 20 Z" fill="#b91c1c"/><rect x="40" y="30" width="80" height="34" rx="4" fill="#4c1d95"/>` + P({x:80, y:64, s:.42, hair:"twin", hc:"#ff8cc6", oc:"#8b5cf6", pose:"wave", mood:"open"}) + [[22,96],[50,92],[80,96],[110,92],[138,96],[36,112],[66,110],[96,112],[126,110]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="9" fill="${["#fbbf24","#60a5fa","#f472b6","#34d399","#a78bfa"][i % 5]}"/><circle cx="${x}" cy="${y - 13}" r="7" fill="#ffe0c8"/>`).join("") + `<path d="M30 30 L56 64 M130 30 L104 64" stroke="#fef3c7" stroke-width="2" opacity=".5"/>`),
  perform: () => svgWrap("#1f2937", `<path d="M40 0 L20 104 H140 L120 0 Z" fill="#fef3c7" opacity=".18"/><rect x="0" y="100" width="160" height="20" fill="#7c2d12"/>` + P({x:80, y:102, s:1, hair:"spiky", hc:"#4a3428", oc:"#ef4444", pose:"cheer", mood:"open"}) + `<rect x="98" y="30" width="5" height="16" rx="2.5" fill="#374151" transform="rotate(20 100 38)"/><circle cx="104" cy="28" r="5" fill="#6b7280"/>` + txt(30, 40, "♪", 20, "#fde68a") + txt(134, 60, "♫", 20, "#fde68a") + spark(130, 24, .8, "#fde68a")),
  outdoor: () => svgWrap("#e0f2fe", `<path d="M0 92 Q80 82 160 92 V120 H0 Z" fill="#86efac"/>` + `<path d="M48 96 L80 50 L112 96 Z" fill="#f97316"/><path d="M80 50 L80 96 L92 96 Z" fill="#ea580c"/><path d="M72 96 L80 74 L88 96 Z" fill="#7c2d12"/>` + O.tree(26, 74, .7) + O.tree(140, 78, .55) + O.sun(130, 24, .7)),
  vision: () => svgWrap("#f5f3ff", grp(56, 60, 1.25, `<path d="M-30 0 Q0 -24 30 0 Q0 24 -30 0 Z" fill="#fff" stroke="#6b7280" stroke-width="2"/><circle r="11" fill="#2563eb"/><circle r="5" fill="#111827"/><circle cx="-3" cy="-3" r="2.5" fill="#fff"/>`) + `<rect x="104" y="16" width="44" height="88" rx="4" fill="#fff" stroke="#d1d5db"/>` + txt(126, 40, "E", 22, INK, 800) + txt(126, 62, "F P", 14, INK, 700) + txt(126, 78, "T O Z", 10, INK, 700) + txt(126, 92, "L P E D", 7, INK, 700))
});
registerUnit("s2-1-1", {
  name:"高二 上學期 第一次段考",
  sub:"關係副詞與非限定用法、分詞構句、假設語氣、It is ... that 強調句",
  words:S2_WORDS, grammar:S2_GRAMMAR, quiz:S2_QUIZ,
  classes:Object.assign({}, S2_CLASS, S2_ROOT_CLASS), phonics:S2_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會字首、字根、字尾，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
