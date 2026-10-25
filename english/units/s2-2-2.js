/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高二下學期 第二次段考
   文法：倒裝句進階、強調語氣、省略句、平行結構
   字根：rupt（破）、tend / tens（伸展）、pel / puls（推）、vol / volv（捲、轉）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   ========================================================= */
const S2_2_2_WORDS = [
/* ---------- 字根 rupt：破 ---------- */
["bankrupt","adj.","破產的",[
 ["The company went bankrupt during the recession.","這家公司在經濟衰退期間破產了。","go bankrupt 表示「破產」，這裡的 go 是連綴動詞，後面接形容詞。"],
 ["So heavy were its debts that the factory went bankrupt.","它的債務沉重到讓工廠破產了。","So + 形容詞 + be 動詞 + 主詞 + that 的倒裝：原句是 Its debts were so heavy that ...，把 so heavy 移到句首，be 動詞要搬到主詞前面。"],
 ["Little did the owner know that his shop would go bankrupt.","老闆完全沒料到他的店會破產。","Little did + 主詞 + 原形動詞 表示「完全沒想到」；倒裝後 knew 要還原成 did ... know。"]],
 "bank=錢莊的長凳|rupt=破","放錢的長凳被打破 → 破產的","💸|破產"],
["erupt","v.","（火山）爆發；（情緒、聲音）突然爆發",[
 ["When the volcano erupted, the villagers ran, screamed, and called for help.","火山爆發時，村民們奔跑、尖叫、呼救。","平行結構：ran、screamed、called 三個過去式動詞並列，形式要一致。"],
 ["Suddenly the crowd erupted into cheers.","群眾突然爆出歡呼聲。","erupt into + 名詞 表示「突然爆發成……」，常用來形容情緒或聲音。"],
 ["From the top of the mountain erupted a huge cloud of smoke.","山頂噴出一大團煙。","地方副詞倒裝：From the top of the mountain 放句首，不及物動詞 erupted 移到主詞 a huge cloud of smoke 前面。"]],
 "e-=向外|rupt=破","破開往外衝 → 爆發","@s222_erupt"],
["eruption","n.","爆發",[
 ["The eruption of the volcano destroyed the whole village.","火山爆發摧毀了整個村莊。","主詞是 The eruption（單數），of the volcano 只是修飾語。"],
 ["What surprised the scientists was the size of the eruption.","讓科學家驚訝的是這次爆發的規模。","What ... was ... 強調句型：What surprised the scientists 當主詞，強調後面的 the size of the eruption。"],
 ["Scientists can predict an eruption, but not its exact time.","科學家能預測火山爆發，但無法預測確切的時間。","省略句：but not its exact time = but they cannot predict its exact time，和前面重複的部分省略。"]],
 "e-=向外|rupt=破|-ion=名詞字尾","erupt 的名詞 → 爆發","🌋|爆發"],
["disrupt","v.","擾亂；使中斷",[
 ["The typhoon disrupted train service across the island.","颱風使全島的火車服務中斷。","disrupt 是及物動詞，後面直接接受詞 train service。"],
 ["Don't use your phone in class unless necessary; it can disrupt learning.","除非必要，上課別用手機，它會干擾學習。","unless necessary = unless it is necessary，副詞子句省略了 it is。"],
 ["The strike disrupted not only flights but also train services.","罷工不只讓航班中斷，也讓火車停駛。","not only A but also B：A 和 B 都是名詞（flights／train services），符合平行結構。"]],
 "dis-=分開|rupt=破","打破、拆散原本的秩序 → 擾亂","🚧|中斷"],
["corrupt","adj./v.","腐敗的；使腐化",[
 ["The corrupt official was finally arrested.","那名貪腐的官員終於被逮捕了。","corrupt 當形容詞放在名詞前面；was arrested 是被動語態。"],
 ["Power can corrupt people, and absolute power corrupts absolutely.","權力會使人腐化，而絕對的權力使人絕對地腐化。","第一個 corrupt 接在助動詞 can 後面用原形；第二個主詞 absolute power 是單數，動詞加 s。"],
 ["Neither the mayor nor his assistant was corrupt.","市長和他的助理都沒有貪污。","neither A nor B 當主詞時，動詞配合靠近的 B（his assistant，單數），所以用 was。"]],
 "cor-=完全|rupt=破","完全破壞掉 → 腐敗的","💰|貪腐"],
["abrupt","adj.","突然的；唐突的",[
 ["The bus came to an abrupt stop.","公車突然停了下來。","come to a stop 表示「停下來」；abrupt 開頭是母音，所以用 an。"],
 ["His answer was so abrupt that everyone was surprised.","他的回答很唐突，大家都嚇了一跳。","so + 形容詞 + that 子句 表示「如此……以致於……」。"],
 ["So abrupt was the change that nobody was ready for it.","改變來得太突然，沒有人準備好。","So + 形容詞 + be + 主詞 + that 的倒裝：= The change was so abrupt that ...。"]],
 "ab-=離開|rupt=破","突然斷開 → 突然的","⚡|突然"],
/* ---------- 字根 tend / tens：伸展 ---------- */
["extend","v.","延長；延伸",[
 ["The library has extended its opening hours during exam weeks.","圖書館在考試週延長了開放時間。","has extended 是現在完成式，表示到現在的結果。"],
 ["Our teacher agreed to extend the deadline if necessary.","老師同意在必要時延後截止日。","if necessary = if it is necessary，it 和 be 動詞一起省略。"],
 ["Beyond the village extends a wide green field.","村子的另一頭延伸著一片廣闊的綠色田野。","地方副詞倒裝：Beyond the village 放句首，不及物動詞 extends 移到主詞 a wide green field 前面。"]],
 "ex-=向外|tend=伸展","往外伸展 → 延長","↔️|延長"],
["intend","v.","打算；意圖",[
 ["I intend to study abroad after graduation.","我打算畢業後出國留學。","intend to V 表示「打算做某事」。"],
 ["I did intend to call you, but I forgot.","我真的有打算打給你，只是忘了。","did + 原形動詞 intend 用來加強語氣，表示「真的有」。"],
 ["The ad is intended for teenagers, not for adults.","這則廣告是針對青少年，而不是成人。","be intended for 表示「為……而設計」；for teenagers 和 for adults 結構相同，平行。"]],
 "in-=朝向|tend=伸展","把心思伸向某個目標 → 打算","🧭|打算"],
["intention","n.","意圖；打算",[
 ["I have no intention of quitting the team.","我完全沒有退出球隊的意思。","have no intention of + V-ing 表示「無意做某事」。"],
 ["What matters is not your intention but your action.","重要的不是你的意圖，而是你的行動。","What matters is ... 是強調句型；not A but B 的 A、B 都是名詞，平行。"],
 ["Little did she know my true intention.","她完全不知道我真正的意圖。","Little did + 主詞 + 原形動詞 表示「一點也不……」，助動詞 did 搬到主詞前面。"]],
 "in-=朝向|tent=伸展|-ion=名詞字尾","intend 的名詞 → 意圖","💭|意圖"],
["intense","adj.","強烈的；激烈的",[
 ["The competition for the job was intense.","這份工作的競爭非常激烈。","intense 常形容競爭、壓力、熱度等「強烈的」。"],
 ["So intense was the heat that the game was stopped.","高溫太強烈，比賽因此暫停。","So + 形容詞 + be + 主詞 + that 的倒裝：= The heat was so intense that ...。"],
 ["The training was intense but rewarding.","訓練很嚴酷，但很有收穫。","but 連接兩個形容詞 intense 和 rewarding，平行結構。"]],
 "in-=朝向|tense=拉緊的","拉得緊緊的 → 強烈的","🔥|強烈"],
["tension","n.","緊張；張力",[
 ["There was a lot of tension before the final match.","決賽前氣氛非常緊張。","tension 表示氣氛或關係的「緊張」時常當不可數名詞。"],
 ["When under tension, some players make careless mistakes.","在緊張狀態下，有些選手會犯粗心的錯。","When under tension = When they are under tension，省略了主詞和 be 動詞。"],
 ["Music can reduce tension, and so can deep breathing.","音樂能減輕緊張，深呼吸也可以。","肯定句的「也」：so + 助動詞 + 主詞；前一句用 can，所以用 so can。"]],
 "tens=伸展、拉緊|-ion=名詞字尾","拉緊的狀態 → 緊張","😬|緊繃"],
["tendency","n.","傾向；趨勢",[
 ["Teenagers have a tendency to stay up late.","青少年有晚睡的傾向。","have a tendency to V 表示「有……的傾向」。"],
 ["My brother has a tendency to exaggerate, and so does my uncle.","我哥哥有誇大的傾向，我叔叔也是。","前一句用一般動詞現在式 has，「也是」要用 so does + 主詞。"],
 ["There is a growing tendency for people to shop online.","人們上網購物的趨勢越來越明顯。","a tendency for 人 to V 表示「某人做某事的趨勢」。"]],
 "tend=伸展、傾向|-ency=名詞字尾","往某個方向伸展過去 → 傾向","📈|趨勢"],
["extensive","adj.","廣泛的；大量的",[
 ["The typhoon caused extensive damage to the farms.","颱風對農田造成大範圍的損害。","cause damage to 表示「對……造成損害」。"],
 ["She has extensive knowledge of history and art.","她對歷史和藝術有廣博的知識。","knowledge of 後面的 history 和 art 都是名詞，平行。"],
 ["The news received extensive coverage both on TV and on the Internet.","這則新聞在電視和網路上都獲得大量報導。","both A and B 連接 on TV 和 on the Internet 兩個介係詞片語，平行。"]],
 "ex-=向外|tens=伸展|-ive=形容詞字尾","向外伸展得很遠 → 廣泛的","🗺️|廣泛"],
["tense","adj.","緊張的；緊繃的",[
 ["The atmosphere in the classroom was tense before the exam.","考前教室裡的氣氛很緊繃。","tense 可以形容氣氛、情況，也可以形容人。"],
 ["I always feel tense when speaking in public.","我在公開場合說話時總是很緊張。","when speaking = when I am speaking，副詞子句省略主詞和 be 動詞，保留 V-ing。"],
 ["The game was tense, and so was the crowd.","比賽很緊張，觀眾也一樣。","前一句是 be 動詞 was，「也是」要用 so was + 主詞。"]],
 "tense=拉緊的","像拉緊的橡皮筋 → 緊繃的","😖|緊張"],
/* ---------- 字根 pel / puls：推、驅動 ---------- */
["compel","v.","強迫；迫使",[
 ["The heavy rain compelled us to cancel the game.","大雨迫使我們取消比賽。","compel 人 to V 表示「迫使某人做某事」；compel 加 ed 要重複 l。"],
 ["No one compelled him to resign; he left on his own.","沒有人逼他辭職，是他自己離開的。","on one's own 表示「自己、獨立地」。"],
 ["Never have I felt so compelled to speak up.","我從來沒有這麼強烈地覺得非說出來不可。","高一學過：Never 放句首要倒裝，現在完成式的 have 搬到主詞前面；feel compelled to V 表示「覺得不得不……」。"]],
 "com-=完全|pel=推","用力把人推過去 → 強迫","👉|強迫"],
["expel","v.","開除；驅逐；排出",[
 ["The student was expelled from school for cheating.","那名學生因作弊被學校開除。","be expelled from 表示「被……開除」；for 表示原因。"],
 ["The player was not only fined but also expelled from the league.","那名球員不只被罰款，還被逐出聯盟。","not only ... but also 連接兩個過去分詞 fined 和 expelled，平行。"],
 ["When we breathe out, we expel air from our lungs.","我們吐氣時，把空氣從肺部排出。","expel 也可以表示「排出」。"]],
 "ex-=向外|pel=推","推出去 → 驅逐","🚪|趕出去"],
["dispel","v.","驅散；消除（疑慮、謠言）",[
 ["The coach's speech dispelled our fears before the final.","教練的一番話驅散了我們決賽前的恐懼。","dispel 常接 fears、doubts、rumors 等受詞；過去式要重複 l：dispelled。"],
 ["What dispelled the rumor was a short video from the company.","讓謠言消失的是公司發出的一段短片。","What ... was ... 強調句：What dispelled the rumor 當主詞，was 後面放重點。"],
 ["The sun came out and dispelled the morning fog.","太陽出來了，驅散了早晨的霧。","came out 和 dispelled 兩個過去式動詞用 and 連接，平行。"]],
 "dis-=分散|pel=推","往四面八方推開 → 驅散","🌫️|驅散"],
["propel","v.","推動；推進",[
 ["Wind propels the boat forward.","風推動船前進。","propel 常和 forward 搭配。"],
 ["Hard work, not luck, propelled her to the top.","讓她登上巔峰的是努力，而不是運氣。","主詞是 Hard work，not luck 是插入的補充；hard work 和 luck 都是名詞，平行。"],
 ["What propels the rocket is the force of burning fuel.","推動火箭的是燃料燃燒的力量。","What ... is ... 強調句型。"]],
 "pro-=向前|pel=推","向前推 → 推進","🚀|推進"],
["repel","v.","驅除；擊退",[
 ["This spray repels mosquitoes.","這種噴霧可以驅蚊。","repel 表示「驅趕」；主詞 This spray 是單數，動詞加 s。"],
 ["Our team repelled every attack and kept the lead.","我們隊擋下每一次進攻，保住了領先。","repelled 和 kept 兩個過去式動詞用 and 連接，平行。"],
 ["Oil repels water, and so does wax.","油會排斥水，蠟也是。","肯定句的「也」：so + does + 主詞。"]],
 "re-=向後|pel=推","推回去 → 擊退","🛡️|擊退"],
["compulsory","adj.","義務的；強制的；必修的",[
 ["English is a compulsory subject in high school.","英文是高中的必修科目。","compulsory subject 表示「必修科目」，相反是 elective（選修）。"],
 ["Wearing a helmet is compulsory when riding a scooter.","騎機車時強制要戴安全帽。","when riding = when you are riding，省略主詞和 be 動詞。"],
 ["—Is P.E. compulsory for seniors? —Yes, it is, and so is art.","「高三體育是必修嗎？」「是的，美術也是。」","so + is + 主詞：配合前面的 be 動詞 is。"]],
 "com-=完全|puls=推|-ory=形容詞字尾","一定要推你去做 → 強制的","📌|必修"],
["impulsive","adj.","衝動的",[
 ["Don't be so impulsive when shopping online.","網購時別那麼衝動。","when shopping = when you are shopping，省略句。"],
 ["He is impulsive, and so is his younger brother.","他很衝動，他弟弟也是。","前一句是 be 動詞 is，所以用 so is + 主詞。"],
 ["Impulsive buyers are exactly what advertisers love.","衝動型的買家正是廣告商最愛的。","exactly 加強語氣「正是」；what advertisers love 是名詞子句當補語。"]],
 "im-=向內|puls=推|-ive=形容詞字尾","被內心的衝動推著走 → 衝動的","🛒|衝動購物"],
["pulse","n.","脈搏",[
 ["The nurse checked my pulse.","護士幫我量了脈搏。","check one's pulse 表示「量脈搏」。"],
 ["After running, my pulse was much faster than before.","跑步後，我的脈搏比之前快很多。","than before 是比較句的省略：= than it was before。"],
 ["So fast was his pulse that the doctor told him to rest.","他的脈搏快到醫生要他休息。","So + 形容詞 + be + 主詞 + that 的倒裝。"]],
 "pulse=推動、跳動","血液一下一下地推動 → 脈搏","💓|脈搏"],
/* ---------- 字根 vol / volv：捲、轉 ---------- */
["revolve","v.","旋轉；繞轉",[
 ["The Earth revolves around the sun.","地球繞著太陽轉。","表示不變的真理用現在簡單式。"],
 ["Her whole life revolves around her children.","她的生活完全以孩子為中心。","revolve around 也可以比喻「以……為中心」。"],
 ["Around the sun revolve eight planets.","繞著太陽運轉的有八大行星。","地方副詞倒裝：Around the sun 放句首，動詞 revolve 移到主詞 eight planets 前面；主詞是複數，所以 revolve 不加 s。"]],
 "re-=反覆|volve=轉","一圈又一圈地轉 → 旋轉","🪐|繞轉"],
["revolt","v./n.","反抗；叛亂",[
 ["The farmers revolted against the heavy taxes.","農民起來反抗沉重的稅賦。","revolt against 表示「反抗……」。"],
 ["The people did revolt, but the king refused to listen.","人民確實起來反抗了，但國王拒絕傾聽。","did + 原形 revolt 加強語氣，表示「確實」。"],
 ["Little did the king know that a revolt was coming.","國王完全不知道一場叛亂即將到來。","Little did + 主詞 + 原形 know 的倒裝。"]],
 "re-=反過來|volt=轉","反過來轉向對抗 → 反抗","✊|反抗"],
["evolve","v.","演化；逐步發展",[
 ["Birds may have evolved from dinosaurs.","鳥類可能是從恐龍演化而來的。","may have + p.p. 表示對過去的推測。"],
 ["The small shop evolved into a large company.","這家小店逐漸發展成一家大公司。","evolve into 表示「逐漸發展成……」。"],
 ["Languages evolve, and so do the ways we communicate.","語言會演變，我們溝通的方式也是。","前一句是一般動詞 evolve（複數主詞），「也是」用 so do + 主詞。"]],
 "e-=向外|volve=捲、展開","把捲著的東西慢慢展開 → 演化","🐒|演化"],
["evolution","n.","演化；演進",[
 ["Darwin is famous for his theory of evolution.","達爾文以他的演化論聞名。","be famous for 表示「以……聞名」。"],
 ["The evolution of the phone has been faster than that of the camera.","手機的演進比相機的演進更快。","比較的對象要平行：that 代替 the evolution，拿「手機的演進」和「相機的演進」比。"],
 ["Evolution takes millions of years, not days or months.","演化需要數百萬年，而不是幾天或幾個月。","not days or months 是省略句，= it does not take days or months。"]],
 "e-=向外|volu=捲、展開|-tion=名詞字尾","evolve 的名詞 → 演化","🧬|演化"],
["volume","n.","音量；量；（書的）一冊",[
 ["Could you turn down the volume?","你可以把音量調小嗎？","turn down 表示「調低」；turn up 表示「調高」。"],
 ["The volume of online sales doubled last year.","網路銷售量去年翻倍。","the volume of 表示「……的量」。"],
 ["On the top shelf stand all ten volumes of the series.","最上層的架子上擺著這套書全部十冊。","地方副詞倒裝：On the top shelf 放句首，動詞 stand 放在主詞前面；主詞 volumes 是複數，所以用 stand。"]],
 "vol=捲|-ume=名詞字尾","古代的書是一卷一卷的 → 一冊；引申為「量」","🔊|音量"],
/* ---------- 媒體與廣告說服術 ---------- */
["commercial","n./adj.","（電視、網路）廣告；商業的",[
 ["This commercial is so funny that everyone remembers it.","這支廣告很好笑，大家都記得。","so + 形容詞 + that 句型。"],
 ["So catchy was the song in the commercial that kids sang it everywhere.","廣告裡的歌超洗腦，小孩到處都在唱。","So + 形容詞 + be + 主詞 + that 的倒裝：= The song in the commercial was so catchy that ...。"],
 ["What the commercial sells is not a product but a lifestyle.","這支廣告賣的不是產品，而是一種生活方式。","What ... is ... 強調句；not A but B 的 A、B 都是名詞片語，平行。"]],
 "com-=一起|merc=交易、商品|-ial=形容詞字尾","和交易有關的 → 商業的；商業廣告","📺|廣告"],
["slogan","n.","標語；口號",[
 ["A good slogan should be short and easy to remember.","好的標語應該簡短又好記。","short 和 easy to remember 都是形容詞性的補語，平行。"],
 ["'Just do it' may be the most famous slogan in the world.","「Just do it」可能是全世界最有名的標語。","may be 表示推測；最高級前面加 the。"],
 ["What made the brand popular was its simple slogan.","讓這個品牌受歡迎的是它簡單的標語。","What ... was ... 強調句型。"]],
 "","","📣|標語"],
["brand","n.","品牌",[
 ["Which brand of running shoes do you prefer?","你比較喜歡哪個牌子的跑鞋？","a brand of + 名詞 表示「……的品牌」。"],
 ["Many teenagers choose a brand for its image, not its quality.","很多青少年選品牌是看形象，不是看品質。","省略句：not its quality = not for its quality；its image 和 its quality 都是名詞片語，平行。"],
 ["This is the very brand my grandfather used to wear.","這正是我爺爺以前穿的那個牌子。","the very + 名詞 表示「正是那個……」，加強語氣。"]],
 "","","🏷️|品牌"],
["appeal","n./v.","吸引力；呼籲；吸引",[
 ["The ad appeals to young people's love of adventure.","這則廣告訴諸年輕人對冒險的熱愛。","appeal to 表示「吸引、訴諸」。"],
 ["The new phone does appeal to me, but it's too expensive.","這支新手機確實吸引我，但太貴了。","does + 原形 appeal 加強語氣「確實」。"],
 ["The police appealed to drivers to slow down.","警方呼籲駕駛人減速。","appeal to 人 to V 表示「呼籲某人做某事」。"]],
 "","","🧲|吸引"],
["exaggerate","v.","誇大",[
 ["Some ads exaggerate the benefits of their products.","有些廣告誇大產品的好處。","exaggerate 拼字注意有兩個 g。"],
 ["Don't exaggerate; the fish wasn't that big.","別誇張了，那條魚沒那麼大。","that + 形容詞 表示「那麼……」。"],
 ["She didn't exaggerate the problem, nor did she ignore it.","她沒有誇大這個問題，也沒有忽視它。","否定句後面接 nor + 助動詞 + 主詞，表示「也不」；nor 後面要倒裝。"]],
 "ex-=超過|agger=堆積|-ate=動詞字尾","堆得超過實際 → 誇大","🐘|誇大"],
["celebrity","n.","名人",[
 ["Many companies pay celebrities to appear in their ads.","許多公司付錢請名人拍廣告。","pay 人 to V 表示「付錢請某人做某事」；celebrity 的複數是 celebrities。"],
 ["Here comes the celebrity everyone has been waiting for!","大家一直在等的名人來了！","Here comes + 名詞 是地方副詞倒裝；主詞是名詞時才倒裝。"],
 ["Fans often buy what celebrities use without thinking.","粉絲常常不加思索就買名人用的東西。","what celebrities use 是名詞子句當受詞；without + V-ing。"]],
 "celebr=有名的、受讚揚的|-ity=名詞字尾","受大家讚揚的人 → 名人","🌟|名人"],
["sponsor","n./v.","贊助者；贊助",[
 ["The tournament is sponsored by a sports company.","這場錦標賽由一家運動用品公司贊助。","被動語態 is sponsored by。"],
 ["Our team needs a sponsor, if possible, before the season starts.","可以的話，我們隊需要在球季開始前找到贊助商。","if possible = if it is possible。"],
 ["The sponsor paid not only for the uniforms but also for the trip.","贊助商不只出了制服的錢，還出了旅費。","not only for ... but also for ...：兩邊都是介係詞片語，平行。"]],
 "spons=承諾|-or=人","承諾出錢的人 → 贊助者","💵|贊助"],
["logo","n.","標誌；商標",[
 ["Our class designed a logo for the sports day.","我們班為運動會設計了一個標誌。","design A for B 表示「為 B 設計 A」。"],
 ["A simple logo is easier to remember than a complicated one.","簡單的標誌比複雜的標誌好記。","比較句中用 one 代替 logo，避免重複。"],
 ["On every shirt was printed the team logo.","每件上衣上都印著隊徽。","地方副詞倒裝：On every shirt 放句首，was printed 移到主詞 the team logo 前面。"]],
 "","","🔰|標誌"],
["publicity","n.","宣傳；（媒體的）關注",[
 ["The movie got a lot of publicity before it came out.","這部電影上映前獲得很多宣傳。","come out 表示「推出、上映」。"],
 ["What the singer wanted was publicity, not privacy.","那位歌手想要的是曝光，而不是隱私。","What ... was ... 強調句；publicity 和 privacy 都是名詞，平行。"],
 ["Bad publicity can hurt a brand as much as a bad product can.","負面報導對品牌的傷害可能和爛產品一樣大。","as much as a bad product can = as much as a bad product can hurt a brand，比較句省略重複的部分。"]],
 "public=公眾的|-ity=名詞字尾","讓公眾都知道 → 宣傳","📰|宣傳"],
["manipulate","v.","操縱；擺布",[
 ["Some ads try to manipulate our feelings.","有些廣告企圖操縱我們的情緒。","try to V 表示「試圖」。"],
 ["Little did we realize that the photo had been manipulated.","我們完全沒發現照片被動過手腳。","Little did we realize 是倒裝；had been manipulated 是過去完成式的被動。"],
 ["Learn to think for yourself rather than be manipulated by the media.","要學會獨立思考，而不是被媒體操縱。","rather than 前後要平行：think 和 be manipulated 都是原形動詞。"]],
 "mani=手|pul=滿、一把|-ate=動詞字尾","用手抓一把來擺弄 → 操縱","🎭|操縱"],
["claim","v./n.","聲稱；主張；說法",[
 ["The ad claims that the drink can make you smarter.","這則廣告聲稱這種飲料能讓你變聰明。","claim + that 子句。"],
 ["He claims to have seen the singer at the airport.","他聲稱在機場看過那位歌手。","claim to have + p.p. 表示「聲稱之前做過某事」。"],
 ["The company never proved its claim, nor did it apologize.","那家公司從沒證明它的說法，也沒有道歉。","nor + 助動詞 + 主詞 倒裝，表示「也沒有」。"]],
 "","","📢|聲稱"],
["target","n./v.","目標；以……為目標",[
 ["Teenagers are the main target of this commercial.","青少年是這支廣告的主要目標。","主詞 Teenagers 是複數，補語 the main target 是一個整體的「目標」，仍用單數。"],
 ["The ad targets young people who love sports.","這則廣告鎖定熱愛運動的年輕人。","target 當動詞；who 引導關係子句修飾 young people。"],
 ["Our target is to win, not just to take part.","我們的目標是贏，而不只是參加。","to win 和 to take part 都是不定詞，平行。"]],
 "","","🎯|目標"],
["reputation","n.","名聲；聲譽",[
 ["The restaurant has a good reputation.","這家餐廳名聲很好。","have a good reputation 表示「名聲好」。"],
 ["So good is its reputation that people wait in line for hours.","它的名聲好到大家排隊排好幾個小時。","So + 形容詞 + be + 主詞 + that 的倒裝。"],
 ["It takes years to build a reputation but only seconds to lose it.","建立名聲要好幾年，毀掉只要幾秒鐘。","to build ... 和 to lose ... 平行；but only seconds 前面省略了 it takes。"]],
 "re-=反覆|put=想、估算|-ation=名詞字尾","大家反覆評估的結果 → 名聲","⭐|名聲"],
["viewer","n.","（電視、網路的）觀眾",[
 ["The show attracted millions of viewers.","這個節目吸引了數百萬名觀眾。","millions of 表示「數百萬」。"],
 ["Viewers are often told what to buy, when to buy, and how much to pay.","觀眾常被告知要買什麼、何時買、付多少錢。","what to buy、when to buy、how much to pay 三個「疑問詞 + to V」平行。"],
 ["The more viewers a channel has, the more money it makes.","頻道的觀眾越多，賺的錢就越多。","the 比較級 ..., the 比較級 ... 表示「越……就越……」。"]],
 "view=看|-er=人","看的人 → 觀眾","🍿|觀眾"],
/* ---------- 運動精神與比賽 ---------- */
["sportsmanship","n.","運動家精神",[
 ["Shaking hands after the game shows good sportsmanship.","賽後握手展現了良好的運動家精神。","動名詞片語 Shaking hands 當主詞，視為單數。"],
 ["What I admire most about him is his sportsmanship.","我最欣賞他的是他的運動家精神。","What ... is ... 強調句型。"],
 ["Win or lose, we should show sportsmanship.","不論輸贏，我們都應該展現運動家精神。","Win or lose 是 Whether we win or lose 的省略說法。"]],
 "sports=運動|man=人|-ship=精神、狀態","運動員該有的精神 → 運動家精神","🤝|運動家精神"],
["referee","n.","裁判",[
 ["The referee blew the whistle, and the game began.","裁判吹哨，比賽開始。","blow 的過去式是 blew。"],
 ["Here comes the referee, and the players are lining up.","裁判來了，球員們正在排隊。","Here comes + 名詞主詞 的倒裝。"],
 ["The referee did make a mistake, but the result stood.","裁判確實判錯了，但比賽結果維持不變。","did + 原形 make 加強語氣；stand 在這裡表示「維持有效」。"]],
 "refer=交給、提交|-ee=接受……的人","爭議都交給他處理的人 → 裁判","@s222_referee"],
["tournament","n.","錦標賽",[
 ["Our school will host a basketball tournament next month.","我們學校下個月將主辦一場籃球錦標賽。","host 當動詞表示「主辦」。"],
 ["The tournament was exciting, and so was the closing ceremony.","錦標賽很精彩，閉幕式也是。","so + was + 主詞，配合前面的 be 動詞 was。"],
 ["We lost in the first round of the tournament but learned a lot.","我們在錦標賽第一輪就輸了，但學到很多。","lost 和 learned 共用主詞 We，用 but 連接，平行。"]],
 "tourn=轉|-ament=名詞字尾","騎士輪流轉著上場比武 → 錦標賽","🏆|錦標賽"],
["championship","n.","冠軍賽；冠軍頭銜",[
 ["Our team won the championship for the third year in a row.","我們隊連續第三年拿下冠軍。","in a row 表示「連續」。"],
 ["So hard did they train that they won the championship.","他們練得非常刻苦，所以拿下了冠軍。","So + 副詞放句首要倒裝；一般動詞要借助動詞 did，train 還原成原形。"],
 ["Winning the championship was the very moment I had dreamed of.","贏得冠軍正是我夢寐以求的那一刻。","the very + 名詞 表示「正是那個……」。"]],
 "champion=冠軍|-ship=身分、地位","冠軍的身分 → 冠軍頭銜","🥇|冠軍"],
["champion","n.","冠軍；捍衛者",[
 ["She became the national swimming champion at sixteen.","她十六歲就成為全國游泳冠軍。","at + 年齡 表示「在幾歲時」。"],
 ["A true champion is not only skilled but also humble.","真正的冠軍不只技術好，還很謙虛。","not only ... but also 連接兩個形容詞 skilled 和 humble，平行。"],
 ["What makes a champion is hard work, not talent.","造就冠軍的是努力，不是天分。","What ... is ... 強調句型。"]],
 "","","👑|冠軍"],
["rival","n.","對手；競爭者",[
 ["The two schools have been rivals for years.","這兩所學校多年來一直是對手。","have been 現在完成式，表示持續到現在。"],
 ["Our rival played well, and so did we.","對手打得很好，我們也是。","so + did + 主詞，配合前面的過去式 played。"],
 ["Respect your rival, and you will earn respect.","尊重你的對手，你也會贏得尊重。","祈使句 + and + 子句 表示「……，就會……」。"]],
 "riv=河|-al=人","共用一條河、搶水的人 → 對手","⚔️|對手"],
["contestant","n.","參賽者",[
 ["Each contestant has three minutes to speak.","每位參賽者有三分鐘可以發言。","each + 單數名詞，動詞用單數 has。"],
 ["Though nervous, the youngest contestant sang beautifully.","雖然很緊張，年紀最小的參賽者仍唱得很好聽。","Though nervous = Though she was nervous，省略主詞和 be 動詞。"],
 ["Contestants are judged on their skill, creativity, and teamwork.","參賽者依技巧、創意和團隊合作來評分。","skill、creativity、teamwork 三個名詞並列，平行。"]],
 "con-=一起|test=考驗|-ant=人","一起接受考驗的人 → 參賽者","🎤|參賽者"],
["glory","n.","榮耀；光榮",[
 ["The team fought for the glory of their school.","球隊為了學校的榮耀而戰。","fight for 表示「為……而戰」；fight 的過去式是 fought。"],
 ["So great was the glory that the players never forgot that day.","那份榮耀太偉大，球員們永遠忘不了那一天。","So + 形容詞 + be + 主詞 + that 的倒裝。"],
 ["What matters is not personal glory but team success.","重要的不是個人的榮耀，而是團隊的成功。","What ... is ... 強調句；not A but B 的 A、B 都是「形容詞 + 名詞」，平行。"]],
 "","","✨|榮耀"],
["compete","v.","競爭；參加比賽",[
 ["Over 200 runners will compete in the race.","超過兩百名跑者將參加這場賽跑。","compete in + 比賽 表示「參加比賽」。"],
 ["Stores compete with each other for customers.","商店之間互相爭奪顧客。","compete with 人 for 東西 表示「和某人爭奪某物」。"],
 ["I compete not to beat others but to improve myself.","我比賽不是為了打敗別人，而是為了提升自己。","not to V but to V，兩邊都是不定詞，平行。"]],
 "com-=一起|pete=追求","大家一起追求同一個目標 → 競爭","🏃|競爭"],
["competitive","adj.","競爭激烈的；好勝的；有競爭力的",[
 ["The job market is very competitive.","就業市場競爭非常激烈。","competitive 形容事情時表示「競爭激烈的」。"],
 ["He is competitive, but he never cheats.","他好勝心強，但從不作弊。","competitive 形容人時表示「好勝的」。"],
 ["Prices here are more competitive than those in other stores.","這裡的價格比其他店更有競爭力。","比較的對象要一致：prices 和 those（= the prices）比，不能直接和 other stores 比。"]],
 "com-=一起|pet=追求|-itive=形容詞字尾","大家搶著追求 → 競爭激烈的","📊|競爭激烈"],
["medal","n.","獎牌",[
 ["Taiwan won two gold medals at the Olympics.","台灣在奧運拿下兩面金牌。","gold medal 表示「金牌」。"],
 ["Around her neck hung a shiny gold medal.","她的脖子上掛著一面閃亮的金牌。","地方副詞倒裝：Around her neck 放句首，動詞 hung 移到主詞前面；hang（懸掛）的過去式是 hung。"],
 ["What I care about is not the medal but the experience.","我在乎的不是獎牌，而是這段經歷。","What ... is ... 強調句；not A but B 平行。"]],
 "","","🏅|獎牌"],
["trophy","n.","獎盃",[
 ["The captain lifted the trophy above his head.","隊長把獎盃高舉過頭。","lift 表示「舉起」。"],
 ["In the glass case stands the trophy we won last year.","玻璃櫃裡擺著我們去年贏得的獎盃。","地方副詞倒裝：In the glass case 放句首，動詞 stands 放在主詞 the trophy 前面。"],
 ["This is the very trophy my father won thirty years ago.","這正是我爸爸三十年前贏得的那座獎盃。","the very + 名詞 加強語氣「正是」。"]],
 "","","@s222_trophy"],
["penalty","n.","處罰；罰球",[
 ["There is a heavy penalty for drunk driving.","酒駕會受到重罰。","penalty for + 名詞 表示「對……的處罰」。"],
 ["He missed the penalty, and so did his teammate.","他罰球沒進，他的隊友也是。","so + did + 主詞，配合前面的過去式 missed。"],
 ["If caught cheating, players will get a penalty.","如果被抓到作弊，選手會受罰。","If caught = If they are caught，省略主詞和 be 動詞。"]],
 "pen=懲罰|-alty=名詞字尾","懲罰 → 處罰；罰球","🟨|罰則"],
["spectator","n.","（比賽的）觀眾",[
 ["Thousands of spectators filled the stadium.","數千名觀眾擠滿了體育場。","thousands of 表示「好幾千」。"],
 ["The spectators cheered, clapped, and waved flags.","觀眾們歡呼、鼓掌、揮舞旗子。","cheered、clapped、waved 三個過去式動詞平行。"],
 ["Spectators must stay in their seats unless told otherwise.","除非另有指示，觀眾須留在座位上。","unless told otherwise = unless they are told otherwise，省略主詞和 be 動詞。"]],
 "spect=看|-ator=人","來看比賽的人 → 觀眾","🙌|觀眾"],
["fairness","n.","公平",[
 ["Fairness is the most important rule in sports.","公平是運動中最重要的原則。","fairness 是不可數名詞。"],
 ["What the players want is fairness, not special treatment.","選手們要的是公平，不是特殊待遇。","What ... is ... 強調句型。"],
 ["The coach treated us with fairness and patience.","教練以公平和耐心對待我們。","fairness 和 patience 都是名詞，平行。"]],
 "fair=公平的|-ness=名詞字尾","公平的 → 公平","⚖️|公平"],
["stadium","n.","體育場",[
 ["The new stadium can hold 40,000 people.","新體育場可容納四萬人。","hold 表示「容納」。"],
 ["In the middle of the city stands a huge stadium.","城市中央矗立著一座巨大的體育場。","地方副詞倒裝：In the middle of the city 放句首，stands 放在主詞前面。"],
 ["The stadium was so crowded that we could hardly move.","體育場擠到我們幾乎動不了。","so + 形容詞 + that 句型；hardly 表示「幾乎不」。"]],
 "","","@s222_stadium"],
["amateur","adj./n.","業餘的；業餘愛好者",[
 ["He is an amateur photographer.","他是業餘攝影師。","amateur 開頭是母音，前面用 an。"],
 ["Though only an amateur, she plays like a professional.","雖然只是業餘選手，她打得像職業選手。","Though only an amateur = Though she is only an amateur，省略主詞和 be 動詞。"],
 ["Amateur players play for fun, and professional players for money.","業餘選手為樂趣而打，職業選手為錢而打。","對等句的省略：後半句重複的動詞 play 省略。"]],
 "amat=愛|-eur=人","因為熱愛而做的人 → 業餘愛好者","🎸|業餘"],
["professional","adj./n.","職業的；專業的；專業人士",[
 ["She wants to become a professional basketball player.","她想成為職業籃球員。","professional 放在名詞前面當形容詞。"],
 ["A professional athlete must train hard, eat well, and sleep enough.","職業運動員必須努力訓練、好好吃飯、睡飽。","must 後面三個原形動詞片語平行。"],
 ["Ask a professional for help when necessary.","必要時請向專業人士求助。","when necessary = when it is necessary。"]],
 "pro-=在前面、公開|fess=宣稱|-ion=名詞字尾|-al=形容詞字尾","公開宣稱自己有專長 → 專業的","💼|專業"],
["fierce","adj.","激烈的；兇猛的",[
 ["The competition between the two brands is fierce.","兩個品牌之間的競爭很激烈。","fierce 常和 competition、battle 搭配。"],
 ["So fierce was the game that both teams were exhausted.","比賽激烈到兩隊都筋疲力盡。","So + 形容詞 + be + 主詞 + that 的倒裝。"],
 ["It was a fierce but fair match.","那是一場激烈但公平的比賽。","fierce 和 fair 兩個形容詞用 but 連接，平行。"]],
 "","","🦁|激烈"],
["triumph","n.","勝利；成功",[
 ["The team returned home in triumph.","球隊凱旋歸來。","in triumph 表示「勝利地、得意地」。"],
 ["Her recovery was a triumph of hope over fear.","她的康復是希望戰勝恐懼的勝利。","a triumph of A over B 表示「A 戰勝 B」。"],
 ["What we celebrated was not just a triumph but years of hard work.","我們慶祝的不只是一場勝利，還有多年的努力。","What ... was ... 強調句；not just A but B 的 A、B 都是名詞片語。"]],
 "","","🎉|凱旋"],
/* ---------- 經濟與職場 ---------- */
["merchant","n.","商人",[
 ["Merchants from many countries came to trade at the port.","來自許多國家的商人到這個港口做買賣。","to trade 是不定詞，表示目的。"],
 ["In the old street stand many shops run by local merchants.","老街上林立著許多當地商人經營的店。","地方副詞倒裝：In the old street 放句首，stand 放在複數主詞 many shops 前面。"],
 ["A good merchant is honest with customers, and so is a good brand.","好商人對顧客誠實，好品牌也是。","so + is + 主詞，配合前面的 be 動詞 is。"]],
 "merch=交易、商品|-ant=人","做交易的人 → 商人","🧳|商人"],
["inflation","n.","通貨膨脹",[
 ["Inflation makes everything more expensive.","通膨讓所有東西都變貴。","make + 受詞 + 形容詞 表示「使……變得……」。"],
 ["Because of inflation, a bowl of noodles now costs twice as much as before.","因為通膨，一碗麵現在的價錢是以前的兩倍。","as much as before = as much as it cost before，比較句的省略。"],
 ["During inflation, prices rise, but salaries often do not.","通膨期間物價上漲，薪水卻常常沒漲。","省略句：salaries often do not = salaries often do not rise，用助動詞代替重複的動詞。"]],
 "in-=向內|flat=吹氣|-ion=名詞字尾","像吹氣球一樣把物價吹大 → 通貨膨脹","🎈|通膨"],
["recession","n.","經濟衰退",[
 ["Many people lost their jobs during the recession.","經濟衰退期間很多人失業。","during + 名詞 表示「在……期間」。"],
 ["Little did we expect that a recession would come so soon.","我們完全沒料到經濟衰退會來得這麼快。","Little did we expect 是倒裝，did 搬到主詞 we 前面。"],
 ["In a recession, people spend less and save more.","經濟衰退時，人們花得更少、存得更多。","spend less 和 save more 平行。"]],
 "re-=向後|cess=走|-ion=名詞字尾","經濟往後退 → 衰退","📉|衰退"],
["industry","n.","工業；產業；行業",[
 ["The tourism industry was hit hard by the typhoon.","觀光業受到颱風的重創。","be hit hard by 表示「受到……重創」。"],
 ["Taiwan is famous for its chip industry, and so is South Korea.","台灣以晶片產業聞名，南韓也是。","so + is + 主詞，配合前面的 be 動詞 is。"],
 ["The film industry does need new talent.","電影產業確實需要新人才。","does + 原形 need 加強語氣。"]],
 "","","🏭|產業"],
["demand","n./v.","需求；要求",[
 ["There is a growing demand for electric scooters.","電動機車的需求越來越大。","demand for + 名詞 表示「對……的需求」。"],
 ["When demand is high, prices go up.","需求高時，價格就上漲。","when 引導時間副詞子句。"],
 ["The workers demanded higher pay and shorter hours.","工人要求更高的薪資和更短的工時。","higher pay 和 shorter hours 都是「比較級 + 名詞」，平行。"]],
 "de-=完全|mand=命令","強烈地命令 → 要求","🙋|需求"],
["supply","n./v.","供應；供給",[
 ["The supply of water was cut off for a day.","停水一天。","cut off 表示「切斷」；was cut off 是被動語態。"],
 ["When supply is greater than demand, prices fall.","供給大於需求時，價格就會下跌。","supply 和 demand 是一組經濟學的相對概念。"],
 ["The company supplies not only schools but also hospitals.","這家公司不只供貨給學校，也供貨給醫院。","not only A but also B 都是名詞，平行。"]],
 "sup-=在下面|ply=填滿","從下面不斷補滿 → 供應","📦|供應"],
["wholesale","n./adj.","批發；批發的",[
 ["The store buys its goods at wholesale prices.","這家店以批發價進貨。","at ... prices 表示「以……的價格」。"],
 ["Wholesale prices are lower than retail prices.","批發價比零售價低。","比較的對象都是 prices，平行。"],
 ["My uncle sells fruit not only at wholesale but also at retail.","我叔叔的水果不只批發，也零售。","not only at A but also at B，兩邊都是「at + 名詞」，平行。"]],
 "whole=整批的|sale=賣","整批整批地賣 → 批發","🚚|批發"],
["commerce","n.","商業",[
 ["E-commerce has changed the way we shop.","電子商務改變了我們購物的方式。","e-commerce 的 e 是 electronic（電子的）。"],
 ["The city is a center of commerce and culture.","這座城市是商業和文化的中心。","commerce 和 culture 都是不可數名詞，平行。"],
 ["What drives commerce is trust between buyers and sellers.","推動商業的是買賣雙方的信任。","What ... is ... 強調句型。"]],
 "com-=一起|merce=交易","大家一起做交易 → 商業","🛍️|商業"],
["labor","n.","勞動；勞工；勞力",[
 ["Robots can reduce the need for human labor.","機器人可以減少對人力的需求。","the need for + 名詞 表示「對……的需求」。"],
 ["The factory is short of labor, and so is the farm.","工廠缺人手，農場也是。","be short of 表示「缺少」；so + is + 主詞。"],
 ["Labor Day is a holiday for workers.","勞動節是勞工的假日。","Labor Day 是專有名詞，第一個字母大寫。"]],
 "","","👷|勞工"],
["hire","v.","僱用",[
 ["The store plans to hire more part-time workers.","這家店計畫僱用更多兼職員工。","plan to V 表示「計畫做某事」。"],
 ["We will hire someone who is honest, hardworking, and friendly.","我們會僱用誠實、勤奮、友善的人。","三個形容詞並列，平行。"],
 ["The company hired five new workers, and so did its rival.","公司僱了五個新員工，它的對手也是。","so + did + 主詞，配合前面的過去式 hired。"]],
 "","","🧑‍💼|僱用"],
["resign","v.","辭職",[
 ["The manager resigned last week.","經理上週辭職了。","resign 是不及物動詞，也可以說 resign from + 職位。"],
 ["She resigned not because of the salary but because of the long hours.","她辭職不是因為薪水，而是因為工時太長。","not because of A but because of B，兩邊結構相同，平行。"],
 ["If asked to work overtime every day, I would resign.","如果每天都被要求加班，我會辭職。","If asked = If I were asked，省略主詞和 be 動詞。"]],
 "re-=相反|sign=簽名","把簽下的名字收回 → 辭職","✉️|辭職"],
["staff","n.","全體員工",[
 ["The hotel staff were very friendly.","飯店員工都很友善。","staff 是集合名詞，指全體成員時可以接複數動詞。"],
 ["The staff work hard, and so does the manager.","員工們很努力，經理也是。","so + does + 主詞：主詞 the manager 是第三人稱單數。"],
 ["Only staff are allowed to enter this room.","只有員工可以進入這個房間。","Only 修飾主詞時不倒裝；Only + 副詞（片語、子句）放句首時才倒裝。"]],
 "","","👥|員工"],
["workplace","n.","工作場所；職場",[
 ["A safe workplace is important for every worker.","安全的工作場所對每個勞工都很重要。","workplace 是可數名詞。"],
 ["In my workplace, people are friendly and helpful.","在我的職場，大家都友善又樂於助人。","friendly 和 helpful 兩個形容詞平行。"],
 ["Smoking is not allowed in the workplace, nor is drinking.","職場不准抽菸，也不准喝酒。","nor + is + 主詞 倒裝，表示「也不」。"]],
 "work=工作|place=地方","工作的地方 → 職場","🏢|職場"],
["boost","v./n.","提升；促進",[
 ["The holiday boosted sales at the night market.","假期提升了夜市的銷售額。","boost sales 表示「提升銷售」。"],
 ["A few kind words can boost your confidence.","幾句好話可以提升你的自信。","can + 原形動詞 boost。"],
 ["What boosted our team spirit was the coach's speech.","提振我們團隊士氣的是教練的演講。","What ... was ... 強調句型。"]],
 "","","⬆️|提升"],
["shrink","v.","縮小；減少",[
 ["My sweater shrank after I washed it in hot water.","我的毛衣用熱水洗過之後縮水了。","shrink 三態：shrink、shrank、shrunk。"],
 ["The number of births is shrinking, and so is the number of schools.","出生人數在減少，學校數量也是。","the number of + 複數名詞 當主詞視為單數，所以用 is；後面接 so is + 主詞。"],
 ["During a recession, companies shrink, and so do their budgets.","經濟衰退時，公司規模縮小，預算也是。","前一句是一般動詞 shrink（複數主詞），用 so do + 主詞。"]],
 "","","⬇️|縮小"],
["enterprise","n.","企業；事業",[
 ["Small and medium enterprises are important to Taiwan's economy.","中小企業對台灣經濟很重要。","enterprise 的複數是 enterprises。"],
 ["Starting a new enterprise takes courage, money, and time.","創業需要勇氣、金錢和時間。","courage、money、time 三個名詞平行。"],
 ["This is the very enterprise that grew from a small garage.","這正是從一間小車庫發展起來的那家企業。","the very + 名詞 表示「正是那個……」。"]],
 "enter=在……之間|prise=拿取","伸手去拿、去嘗試 → 事業；企業","🏗️|企業"],
["retail","n./adj.","零售；零售的",[
 ["She works in retail.","她在零售業工作。","work in + 行業 表示「在……業工作」。"],
 ["Retail prices are higher than wholesale prices.","零售價比批發價高。","比較的對象都是 prices，平行。"],
 ["Online retail has grown fast, and so has delivery service.","網路零售成長快速，外送服務也是。","前一句是現在完成式 has grown，後面用 so has + 主詞。"]],
 "re-=再|tail=切","把大批貨物再切成小份賣 → 零售","🏪|零售"],
["corporation","n.","大公司；企業",[
 ["He works for a large corporation.","他在一家大企業上班。","work for + 公司 表示「在……工作」。"],
 ["The corporation hires not only engineers but also designers.","這家公司不只僱用工程師，也僱用設計師。","not only A but also B 都是名詞，平行。"],
 ["Big corporations should protect the environment, and small ones should, too.","大公司應該保護環境，小公司也應該。","省略句：small ones should, too = small ones should protect the environment, too。"]],
 "corpor=身體|-ation=名詞字尾","很多人組成一個「身體」→ 企業","🏙️|大企業"],
/* ---------- 加強語氣與否定副詞 ---------- */
["indeed","adv.","確實；的確",[
 ["It was indeed a difficult decision.","那的確是一個困難的決定。","indeed 放在 be 動詞後面加強語氣。"],
 ["A friend in need is a friend indeed.","患難見真情。","英文諺語：indeed 在句尾表示「真正的」。"],
 ["Thank you very much indeed.","真的非常謝謝你。","very much indeed 是更強烈的道謝說法。"]],
 "in=在|deed=行為、事實","在事實上 → 確實","✔️|確實"],
["absolutely","adv.","完全地；絕對；（回答）當然",[
 ["You are absolutely right.","你完全正確。","absolutely 加強形容詞 right。"],
 ["—Can I borrow your notes? —Absolutely!","「可以借我你的筆記嗎？」「當然可以！」","Absolutely 單獨回答，表示強烈同意。"],
 ["What she said was absolutely true.","她說的話完全是真的。","What she said 是名詞子句當主詞，視為單數。"]],
 "absolute=完全的|-ly=副詞字尾","完全的 → 完全地","💯|絕對"],
["definitely","adv.","一定；肯定",[
 ["I will definitely come to your game.","我一定會去看你的比賽。","definitely 放在助動詞 will 後面。"],
 ["This is definitely the best pizza in town.","這絕對是鎮上最好吃的披薩。","definitely 修飾整個最高級 the best pizza。"],
 ["He definitely did his best, and so did we.","他絕對盡力了，我們也是。","so + did + 主詞，配合前面的過去式 did。"]],
 "definite=明確的|-ly=副詞字尾","明確地 → 一定","👍|肯定"],
["rarely","adv.","很少；難得",[
 ["I rarely watch TV these days.","我最近很少看電視。","rarely 是帶否定意味的頻率副詞，放在一般動詞前面。"],
 ["Rarely have I seen such great sportsmanship.","我很少見到這麼好的運動家精神。","rarely 和高一學過的 never 一樣是否定副詞，放句首時要倒裝：have 搬到主詞 I 前面。"],
 ["Celebrities rarely use the products they advertise.","名人很少使用他們代言的產品。","they advertise 是省略關係代名詞 that 的關係子句，修飾 the products。"]],
 "rare=稀少的|-ly=副詞字尾","稀少地 → 很少","🕰️|很少"],
["barely","adv.","幾乎沒有；勉強",[
 ["I barely slept last night.","我昨晚幾乎沒睡。","barely 帶否定意味，表示「幾乎沒有」。"],
 ["We barely caught the last train.","我們勉強趕上了末班車。","barely 也表示「勉強做到」。"],
 ["So tired was I that I could barely walk.","我累到幾乎走不動。","So + 形容詞 + be + 主詞 + that 的倒裝：= I was so tired that ...。"]],
 "bare=僅有的、光禿的|-ly=副詞字尾","只有一點點 → 勉強","😮‍💨|勉強"]
];

/* 沒有字根可拆的字：記憶小撇步 */
Object.assign(MEMO, {
  slogan:"slogan 來自蘇格蘭的「戰場吶喊」：以前軍隊衝鋒時大喊的口號，現在變成商人喊給顧客聽的廣告標語。",
  brand:"brand 原本是「烙印」：牧場會在牛身上烙上記號表示是誰的，商品上的記號就變成了品牌。",
  appeal:"appeal 和 apple 長得很像：一顆紅通通的蘋果擺在眼前，就是很有「吸引力」。appeal to 人 也可以表示「呼籲某人」。",
  logo:"logo 是 logotype 的簡稱，log 和 dialogue 的 logue 一樣有「文字」的意思：一眼就認得出的文字圖案 → 標誌。",
  claim:"claim 和 exclaim（大叫）是同一家人，都有「喊」的意思：大聲喊出「這是我的、這是真的」→ 聲稱、主張。",
  target:"target 原本是「小圓盾」，射箭時瞄準的圓形靶就叫 target，所以有「目標」的意思。",
  champion:"champion 和 camp（營地、戰場）有關：在戰場上代表大家出戰、打贏的勇士，就是冠軍。",
  medal:"medal 和 metal（金屬）只差一個字母：用金屬做的獎牌。",
  trophy:"trophy 原本是古希臘人打勝仗後，把敵人的盔甲掛在樹上當作勝利紀念，後來變成獎盃。",
  stadium:"stadium 原本是古希臘的長度單位（約 180 公尺），也是賽跑跑道的長度，後來指整座體育場。",
  fierce:"fierce 和 fear（害怕）開頭一樣：兇猛、激烈的東西會讓人害怕。注意拼字是 ie。",
  triumph:"triumph 原本是古羅馬將軍打勝仗回城的盛大遊行，所以有「凱旋、大勝利」的意思。",
  industry:"industry 原本的意思是「勤勞」（形容詞 industrious 仍是勤勉的）：大家勤勞地生產，就形成了產業。",
  glory:"glory 的形容詞是 glorious（光榮的）；想像頒獎台上閃閃發亮的光芒，就是 glory。",
  shrink:"shrink 三態 shrink、shrank、shrunk，和 drink、drank、drunk 的變化一模一樣，一起記最快。",
  labor:"labor 和 laboratory（實驗室）同家族：實驗室就是做苦工、勞動的地方。英式拼法是 labour。",
  hire:"hire 和 fire（開除）只差一個字母，正好是一對相反詞：hire 僱用、fire 開除。",
  staff:"staff 原本是「棍子、權杖」：拿著權杖幫主人做事的一群人，後來指整個工作團隊。",
  boost:"boost 想像成從後面「推一把」：推火箭一把讓它衝上天 → 提升、促進。"
});

const S2_2_2_GRAMMAR = [
{ id:"g1", title:"倒裝句進階：地方副詞、So / Neither / Nor、So + adj. + that、Little did I know",
  intro:"高一學過否定副詞（Never、Only、Not until）放句首要倒裝；這次再加四種常考的倒裝：地方副詞倒裝、So / Neither / Nor 表示「也」、So + 形容詞放句首、Little did I know。",
  table:[["句型","例句","說明"],["地方副詞 + V + S","On the hill stands a temple.","不及物動詞直接搬到主詞前面"],["Here / There + V + S","Here comes the bus.","主詞是代名詞不倒裝：Here it comes."],["So + 助動詞 + S","He likes jazz, and so do I.","肯定句的「也」"],["Neither / Nor + 助動詞 + S","She can't swim, and neither can I.","否定句的「也不」"],["So + adj. + be + S + that","So intense was the heat that ...","= The heat was so intense that ..."],["Little did + S + 原形","Little did I know the truth.","完全沒想到"]],
  points:[
   "地方副詞倒裝多用在 stand、lie、sit、hang、come、go 等不及物動詞，直接把動詞搬到主詞前面，不加 do / does / did：In the box lay a letter.",
   "主詞是代名詞時不倒裝：Here comes the bus. 但要說 Here it comes.（不能說 Here comes it.）",
   "So / Neither / Nor 後面的助動詞要配合前一句：be 動詞用 be、一般動詞用 do / does / did、完成式用 have / has、情態動詞照用 can / will。",
   "So + 助動詞 + 主詞 表示「……也是」；So + 主詞 + 助動詞 表示「的確如此」：—Tom is tall. —So he is.（他的確很高）",
   "Neither / Nor 本身已經是否定，後面不能再加 not：Neither can I.（不能說 Neither can't I.）",
   "So + 形容詞 / 副詞放句首要倒裝，一般動詞要借 did：So hard did they train that they won. Little 當否定副詞也一樣：Little did I know ...（不是 Little I knew）。"],
  ex:[
   ["Around the sun revolve eight planets.","繞著太陽運轉的有八大行星。","地方副詞倒裝，主詞 eight planets 是複數，動詞用 revolve。"],
   ["Here comes the referee, and the players are lining up.","裁判來了，球員們正在排隊。","Here comes + 名詞主詞。"],
   ["Music can reduce tension, and so can deep breathing.","音樂能減輕緊張，深呼吸也可以。","前面是 can，所以用 so can。"],
   ["So intense was the heat that the game was stopped.","高溫太強烈，比賽因此暫停。","So + 形容詞 + be + 主詞 + that。"],
   ["Little did the owner know that his shop would go bankrupt.","老闆完全沒料到他的店會破產。","Little did + 主詞 + 原形動詞 know。"]]},
{ id:"g2", title:"強調語氣：do / does / did、the very、What ... is、加強副詞",
  intro:"想讓語氣更強烈，可以在動詞前加 do / does / did、用 the very 指「正是那個」、用 What 開頭的句子把重點放在最後，或加上 indeed、absolutely、definitely 這類加強副詞。",
  table:[["方法","例句","意思"],["do / does / did + 原形","I did finish my homework.","我真的寫完了"],["the very + 名詞","This is the very book I need.","這正是我需要的書"],["What ... is / was ...","What I need is rest.","我需要的是休息"],["加強副詞","It was indeed a fierce game.","那的確是一場激烈的比賽"]],
  points:[
   "do / does / did 後面一定接原形動詞：She does like you.（不是 does likes）；He did call me.（不是 did called）",
   "強調用的 do 要重讀，常用來反駁或澄清：—You didn't study. —I did study!",
   "the very 放在 the 和名詞之間，表示「正是、恰好是」：This is the very place where we met.",
   "What 開頭的強調句：What 子句當主詞，動詞通常用單數 is / was：What we need is more players.",
   "What 子句裡要「缺東西」，what 本身就是那個東西：What I want is a new phone.（不能寫 What I want it is ...）",
   "加強語氣的副詞：indeed、absolutely、definitely、really。indeed 可放在 be 動詞後或句尾（very much indeed）；absolutely 常修飾 right、true、perfect 等。"],
  ex:[
   ["I did intend to call you, but I forgot.","我真的有打算打給你，只是忘了。","did + 原形 intend。"],
   ["The new phone does appeal to me, but it's too expensive.","這支新手機確實吸引我，但太貴了。","does + 原形 appeal。"],
   ["This is the very trophy my father won thirty years ago.","這正是我爸爸三十年前贏得的那座獎盃。","the very + 名詞。"],
   ["What the commercial sells is not a product but a lifestyle.","這支廣告賣的不是產品，而是一種生活方式。","What 子句當主詞，is 後面放重點。"],
   ["It was indeed a difficult decision.","那的確是一個困難的決定。","indeed 加強語氣。"]]},
{ id:"g3", title:"省略句：副詞子句的省略、比較句與對等句的省略",
  intro:"英文很怕重複！只要意思清楚，重複的部分就可以省略。最常考的是副詞子句省略「主詞 + be 動詞」，以及比較句、對等句省略重複的動詞。",
  table:[["類型","完整句","省略後"],["副詞子句（主詞 + be）","When you are in Japan, ...","When in Japan, ..."],["固定說法","if it is possible","if possible"],["比較句","He runs faster than I run.","He runs faster than I (do)."],["對等句","Tom likes math, and Amy likes English.","Tom likes math, and Amy, English."],["助動詞代替","I can't go, but my sister can go.","..., but my sister can."]],
  points:[
   "副詞子句（when、while、if、unless、though、once）的主詞和主要子句相同，而且有 be 動詞時，可以把「主詞 + be」一起省略：While in Japan, I visited Kyoto.",
   "省略後剩下的可以是介係詞片語、形容詞、名詞、V-ing 或 p.p.：Though tired, ...／When asked, ...／While walking, ...",
   "固定的省略說法：if possible、if necessary、when necessary、if so、if not、unless told otherwise。",
   "主詞不同就不能省略：When I was ten, my family moved.（不能寫 When ten, my family moved.）",
   "比較句後面重複的動詞可以省略，或用助動詞代替：She sings better than I (do).；than before = than it was before。",
   "不定詞省略時要保留 to：You can leave if you want to.（不能只說 if you want.）"],
  ex:[
   ["When under tension, some players make careless mistakes.","在緊張狀態下，有些選手會犯粗心的錯。","= When they are under tension。"],
   ["Though defeated, the players held their heads high.","雖然輸了，球員們仍抬頭挺胸。","= Though they were defeated。"],
   ["Ask a professional for help when necessary.","必要時請向專業人士求助。","when necessary = when it is necessary。"],
   ["Amateur players play for fun, and professional players for money.","業餘選手為樂趣而打，職業選手為錢而打。","後半句省略重複的 play。"],
   ["Big corporations should protect the environment, and small ones should, too.","大公司應該保護環境，小公司也應該。","should 後面省略 protect the environment。"]]},
{ id:"g4", title:"平行結構：and / or / but / not only…but also 前後一致",
  intro:"用 and、or、but、not only…but also 等連接的東西，詞性和形式要一致，就像排隊要排整齊。這是學測綜合測驗和文意選填最愛考的觀念！",
  table:[["連接方式","正確","錯誤"],["and","reading, swimming, and dancing","reading, swimming, and to dance"],["or","by bus or by train","by bus or taking a train"],["but","fierce but fair","fierce but fairly"],["not only…but also","not only smart but also kind","not only smart but also kindness"],["比較","My score is higher than his.","My score is higher than him."]],
  points:[
   "名詞配名詞、動詞配動詞、形容詞配形容詞、V-ing 配 V-ing、不定詞配不定詞。",
   "三個以上並列時寫成 A, B, and C，三個的形式都要一樣：She cheered, clapped, and waved.",
   "not only A but also B、both A and B、either A or B、neither A nor B、not A but B：A 和 B 的形式要一樣。",
   "比較的對象要一致：The weather in Taipei is hotter than that in Taichung.（that = the weather）；複數用 those。不能直接寫 than Taichung。",
   "rather than、as well as 前後也要平行：Think for yourself rather than be manipulated.",
   "Not only 放句首連接兩個子句時，前半要倒裝：Not only did he win, but he also broke the record."],
  ex:[
   ["When the volcano erupted, the villagers ran, screamed, and called for help.","火山爆發時，村民們奔跑、尖叫、呼救。","三個過去式動詞平行。"],
   ["A true champion is not only skilled but also humble.","真正的冠軍不只技術好，還很謙虛。","兩個形容詞平行。"],
   ["I compete not to beat others but to improve myself.","我比賽不是為了打敗別人，而是為了提升自己。","兩個不定詞平行。"],
   ["Prices here are more competitive than those in other stores.","這裡的價格比其他店更有競爭力。","those = the prices，比較對象一致。"],
   ["She resigned not because of the salary but because of the long hours.","她辭職不是因為薪水，而是因為工時太長。","not because of A but because of B。"]]}
];

const S2_2_2_QUIZ = [
 ["On top of the hill ___ an old temple.",["stand","is standing it","stands","standing"],2,"地方副詞倒裝：On top of the hill 放句首，動詞搬到主詞前；主詞 an old temple 是單數，用 stands。","g1"],
 ["Look! Here ___.",["comes the bus","the bus come","does the bus come","coming the bus"],0,"Here + 動詞 + 名詞主詞：Here comes the bus. 地方副詞倒裝不需要加 do / does。","g1"],
 ["The bus is coming. Here ___!",["comes it","does it come","it coming","it comes"],3,"主詞是代名詞時不倒裝：Here it comes. 這是超常考的陷阱！","g1"],
 ["Amy loves K-pop, and so ___ her brother.",["is","does","has","do"],1,"前一句 loves 是一般動詞現在式，主詞 her brother 是第三人稱單數，用 so does。","g1"],
 ["—I haven't finished the report yet. —___",["So have I.","Neither do I.","Neither have I.","So I have."],2,"否定句的「也不」用 Neither；前一句是現在完成式 haven't finished，助動詞用 have。","g1"],
 ["He can't swim, ___ can his sister.",["nor","so","either","and so"],0,"否定句後面接 nor + 助動詞 + 主詞 表示「也不」；either 要放句尾（his sister can't, either）。","g1"],
 ["___ was the game that nobody left early.",["Such exciting","Very exciting","So excited","So exciting"],3,"So + 形容詞 + be + 主詞 + that 的倒裝；比賽是「令人興奮的」，用 exciting。","g1"],
 ["___ did I know that the ad was fake.",["Few","Little","Less","Much"],1,"Little did I know ... 是固定的倒裝句型，表示「我完全沒想到」。","g1"],
 ["—Tom is really tall. —___ He's almost two meters!",["So is he.","So does he.","So he is.","Neither is he."],2,"表示同意「的確如此」用 So + 主詞 + 助動詞（不倒裝）；So is he 是「他也是」，主詞不能是同一個人。","g1"],
 ["I ___ finish my homework, but I left it at home.",["do","did","does","done"],1,"強調過去的動作用 did + 原形動詞：I did finish ...（我真的寫完了）。","g2"],
 ["She does ___ you. She just doesn't show it.",["likes","liked","liking","like"],3,"does 後面一定接原形動詞 like。","g2"],
 ["This is ___ book I've been looking for!",["the very","very the","a very","the much"],0,"the very + 名詞 表示「正是那個……」，very 放在 the 和名詞中間。","g2"],
 ["___ I need now is a good night's sleep.",["That","Which","What","It"],2,"What 子句當主詞（= The thing that I need），is 後面放強調的重點。","g2"],
 ["What the team needs ___ more practice.",["are","were","have","is"],3,"What 子句當主詞視為單數；句子是現在式，用 is。","g2"],
 ["—Are you sure? —___ I saw it with my own eyes.",["Barely.","Absolutely!","Rarely.","Hardly."],1,"Absolutely 單獨回答表示「絕對是、當然」；barely、rarely、hardly 都帶否定意味。","g2"],
 ["He ___ call you yesterday; you just didn't answer.",["does","has","did","do"],2,"yesterday 是過去，加強語氣用 did + 原形 call。","g2"],
 ["It was ___ a fierce game. Both teams played their best.",["indeed","barely","rarely","hardly"],0,"indeed 放在 be 動詞後加強語氣「的確」；其他三個都有「幾乎不」的否定意思，和句意不合。","g2"],
 ["What surprised me most ___ the price of the tickets.",["were","being","are","was"],3,"What 子句當主詞視為單數；surprised 是過去式，用 was。","g2"],
 ["___ in Japan, I visited many old temples.",["During","While","Because","For"],1,"While in Japan = While I was in Japan，副詞子句省略主詞和 be 動詞；During 後面要接名詞，不能接 in Japan。","g3"],
 ["Please call me ___.",["if it necessary","necessary if","if necessary","if necessarily"],2,"if necessary = if it is necessary，it 和 is 要一起省略。","g3"],
 ["Though ___, he kept running to the finish line.",["tired","tire","tiring","to tire"],0,"Though tired = Though he was tired；人覺得累用 tired。","g3"],
 ["When ___ about the accident, the driver said nothing.",["asking","ask","to ask","asked"],3,"司機是「被問」：When asked = When he was asked。","g3"],
 ["哪一句的省略是錯的？",["While in Japan, I learned to cook ramen.","When ten years old, my family moved to Tainan.","If possible, please reply today.","Though tired, she finished the race."],1,"前後主詞不同（I 和 my family）不能省略，要寫成 When I was ten years old, my family moved to Tainan.","g3"],
 ["She sings better than I ___.",["am","does","do","did"],2,"比較句用助動詞代替重複的動詞：than I do = than I sing。","g3"],
 ["You can join us if you want ___.",["to","it","so","that"],0,"不定詞省略時要保留 to：if you want to (join us)。","g3"],
 ["Tom likes basketball, and Amy, ___.",["likes volleyball","liking volleyball","to volleyball","volleyball"],3,"對等句的省略：逗號代替重複的 likes，= and Amy likes volleyball。","g3"],
 ["I can't speak French, but my sister ___.",["does","is","can","has"],2,"用助動詞 can 代替 can speak French；前面是 can't，後面就用 can。","g3"],
 ["My hobbies are reading, swimming, and ___.",["to dance","dance","dancing","danced"],2,"平行結構：reading、swimming、dancing 都是 V-ing。","g4"],
 ["She is not only smart but also ___.",["kind","kindness","kindly","be kind"],0,"not only A but also B：smart 是形容詞，B 也要是形容詞 kind。","g4"],
 ["The weather in Taipei is hotter than ___ in Taichung.",["it","this","those","that"],3,"比較的對象要一致：that 代替 the weather（單數）。","g4"],
 ["The coach asked us to warm up, stretch, and ___.",["running","run","ran","to running"],1,"to 後面的 warm up、stretch、run 都是原形動詞，平行。","g4"],
 ["The prices here are lower than ___ at the supermarket.",["that","them","those","it"],2,"prices 是複數，用 those 代替 the prices。","g4"],
 ["He would rather walk to school than ___ the bus.",["take","taking","took","to taking"],0,"would rather A than B：A、B 都是原形動詞（walk／take）。","g4"],
 ["The ad was funny, creative, and ___.",["it touched people","touch","touches","touching"],3,"funny、creative、touching 三個都是形容詞，平行。","g4"],
 ["___ the game, but he also broke the record.",["Not only he won","Not only did he win","Not only won he","He not only did win"],1,"Not only 放句首連接兩個子句時要倒裝：Not only did he win, but he also ...。","g4"],
 ["You can get there by bus or ___.",["taking a train","to train","by train","trained"],2,"or 前後平行：by bus 和 by train 都是「by + 交通工具」。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S2_2_2_CLASS = {
g1:[
 {say:"高二下第二次段考，安安老師帶你挑戰倒裝句進階！高一學過 {Never have I seen ...} 這種否定副詞放句首的倒裝，今天再加四招。第一招：地方副詞倒裝。", board:[["A temple stands on the hill.",[]],["On the hill stands a temple.",["On the hill","stands"]]]},
 {say:"把地點放到句首，動詞直接跳到主詞前面，不用加 do、does、did。常見的是 stand、lie、sit、hang、come、go 這些不及物動詞。Here 和 There 開頭也一樣：{Here comes the bus.}", board:[["Here comes the bus.",["Here","comes"]],["In the box lay a letter.",["In the box","lay"]]]},
 {say:"口訣記起來！", chant:"地點放前面，動詞跳到主詞前！"},
 {say:"陷阱來了！主詞是代名詞的時候不倒裝。{Here comes the bus.} 可以，但「它來了」要說 {Here it comes.}，不能說 Here comes it。", board:[["Here it comes.",["it"]],["Here comes it.",[],true]]},
 {ask:{say:"考考你！", q:"The bus is coming. Here ___!", opts:["comes it","it comes"], ans:1,
   ok:"厲害！主詞 it 是代名詞，不倒裝：Here it comes.", bad:{0:"小心陷阱！主詞是代名詞 it 時不倒裝，要說 Here it comes。"},
   again:{q:"On the wall ___ a big map.", opts:["hangs","hang"], ans:0, exp:"地方副詞倒裝，主詞 a big map 是單數，動詞用 hangs。"}}},
 {say:"第二招：「我也是」。肯定句用 {So + 助動詞 + 主詞}，否定句用 {Neither / Nor + 助動詞 + 主詞}。助動詞要跟著前一句：be 動詞就用 be，一般動詞就用 do、does、did，完成式就用 have、has。", board:[["Amy likes sports, and so do I.",["so do I"]],["Tom isn't tired, and neither am I.",["neither am I"]],["He can't swim, nor can his sister.",["nor can"]]]},
 {say:"第二個口訣！", chant:"肯定用 so，否定用 neither，助動詞跟著前面走！"},
 {ask:{q:"Amy loves K-pop, and so ___ her brother.", opts:["is","does","has"], ans:1,
   ok:"對！loves 是一般動詞現在式，her brother 是第三人稱單數，用 does。", bad:{0:"前一句的 loves 是一般動詞，不是 be 動詞，要用 does。",2:"前一句不是完成式，不能用 has；loves 是一般動詞，用 does。"},
   again:{q:"—I haven't seen the movie. —___", opts:["Neither have I.","So have I.","Neither do I."], ans:0, exp:"否定的現在完成式，用 Neither have I。"}}},
 {say:"再一個陷阱！{So is Amy.} 是「Amy 也是」；但如果主詞放在前面，{So he is.} 意思是「他的確是」，用來同意對方說的話。", board:[["—Tom is tall. —So is Amy.",["So is Amy"]],["—Tom is tall. —So he is.",["So he is"]]]},
 {say:"第三招：So + 形容詞放句首。{The heat was so intense that the game stopped.} 把 so intense 搬到前面，後面就要倒裝：{So intense was the heat that the game stopped.} 一般動詞要借 did：{So hard did they train that they won.}", board:[["So intense was the heat that ...",["So intense","was"]],["So hard did they train that they won.",["So hard","did"]]]},
 {say:"第四招：{Little did I know ...}，意思是「我完全沒想到」。這裡的 little 是否定的意思，所以和 never 一樣要倒裝，knew 要拆成 did ... know。", board:[["Little did I know the truth.",["Little did I know"]],["Little I knew the truth.",[],true]]},
 {ask:{say:"最後一題！", q:"___ did I know that the ad was fake.", opts:["Little","Few","Small"], ans:0,
   ok:"完美！Little did I know 是固定的倒裝句型。", bad:{1:"few 修飾可數名詞，這裡的固定說法是 Little did I know。",2:"small 是「小的」，沒有否定的意思，要用 Little。"},
   again:{q:"___ was the game that nobody left early.", opts:["So exciting","Such exciting","Very exciting"], ans:0, exp:"So + 形容詞 + be + 主詞 + that 的倒裝。"}}},
 {say:"倒裝句進階過關！複習口訣：地點放前面，動詞跳到主詞前，但代名詞不倒裝；肯定用 so，否定用 neither，助動詞跟著前面走；So + 形容詞、Little did 放句首都要倒裝！", end:true}
],
g2:[
 {say:"今天學「加強語氣」！當別人不相信你時，要怎麼用英文說「我真的有！」？看這兩句：{I finished my homework.} 和 {I did finish my homework.}", board:[["I finished my homework.",[]],["I did finish my homework.",["did finish"]]]},
 {say:"在動詞前面加 do、does、did，後面接原形動詞，語氣就變成「真的、確實」。說的時候 do 要重讀喔！", board:[["She does like you.",["does like"]],["We do need help.",["do need"]],["He did call me.",["did call"]]]},
 {say:"口訣！", chant:"do、does、did 加原形，真的真的沒騙你！"},
 {ask:{q:"She does ___ you. She just doesn't show it.", opts:["likes","like"], ans:1,
   ok:"對！does 後面接原形 like。", bad:{0:"does 已經負責第三人稱單數了，後面要用原形 like。"},
   again:{q:"I ___ call you yesterday, but you didn't answer.", opts:["did","do","does"], ans:0, exp:"yesterday 是過去，用 did + 原形。"}}},
 {say:"第二招：the very 加名詞，意思是「正是那個」。{This is the very book I need.} 這正是我需要的那本書！very 要放在 the 和名詞中間。", board:[["This is the very book I need.",["the very"]],["This is the very place where we met.",["the very"]]]},
 {say:"第三招：What 開頭的強調句。{I need rest.} 想強調 rest，就說 {What I need is rest.} 我需要的，就是休息！重點放在 is 後面。", board:[["I need rest.",[]],["What I need is rest.",["What","is"]]]},
 {say:"口訣！", chant:"What 開頭當主詞，is 後面放重點！"},
 {ask:{q:"___ I need now is a good night's sleep.", opts:["That","What","Which"], ans:1,
   ok:"讚！What 等於 the thing that，What I need 當主詞。", bad:{0:"That 不能表示「……的東西」，要用 What。",2:"Which 前面要有先行詞，這裡沒有，要用 What。"},
   again:{q:"What the team needs ___ more practice.", opts:["is","are"], ans:0, exp:"What 子句當主詞，視為單數，用 is。"}}},
 {say:"小心！What 子句裡要「缺東西」，因為 what 本身就是那個東西。{What I want is a new phone.} want 後面缺受詞，what 補上了。不能寫成 What I want it is。", board:[["What I want is a new phone.",["What"]],["What I want it is a new phone.",[],true]]},
 {say:"第四招：加強語氣的副詞！{indeed} 確實、{absolutely} 完全、{definitely} 一定。{You are absolutely right.} {It was indeed a fierce game.} 還有超有禮貌的 {Thank you very much indeed.}", board:[["You are absolutely right.",["absolutely"]],["It was indeed a fierce game.",["indeed"]],["I will definitely come.",["definitely"]]]},
 {ask:{say:"最後一題！", q:"—Can I borrow your notes? —___! Here you are.", opts:["Barely","Absolutely","Rarely"], ans:1,
   ok:"完美！Absolutely 單獨回答，表示「當然可以」。", bad:{0:"barely 是「幾乎沒有」，不能用來答應別人。",2:"rarely 是「很少」，不能用來答應別人。"},
   again:{q:"This is ___ restaurant I told you about!", opts:["the very","very the","a very"], ans:0, exp:"the very + 名詞：正是那家。"}}},
 {say:"強調語氣過關！口訣：do、does、did 加原形；the very 是「正是」；What 開頭當主詞，is 後面放重點；再加上 indeed、absolutely、definitely，語氣就更強了！", end:true}
],
g3:[
 {say:"英文最討厭囉嗦！今天學省略句。先看：{When you are in Japan, you should try ramen.} 前後主詞都是 you，又有 be 動詞，就能把 you are 一起拿掉：{When in Japan, you should try ramen.}", board:[["When you are in Japan, ...",["you are"]],["When in Japan, you should try ramen.",["When in Japan"]]]},
 {say:"可以這樣省略的連接詞有 when、while、if、unless、though、once。省略後剩下的可以是介係詞片語、形容詞、V-ing 或 p.p.。", board:[["While in Japan, ...",["While"]],["Though tired, ...",["Though"]],["When asked, ...",["When"]]]},
 {say:"口訣！", chant:"主詞一樣又有 be，主詞 be 一起丟！"},
 {ask:{q:"Though ___, he kept running.", opts:["tired","tiring"], ans:0,
   ok:"對！Though tired = Though he was tired，人覺得累用 tired。", bad:{1:"tiring 是「令人疲累的」；這裡是他覺得累，用 tired。"},
   again:{q:"When ___ about the accident, the driver said nothing.", opts:["asked","asking"], ans:0, exp:"司機是「被問」，When asked = When he was asked。"}}},
 {say:"有些省略說法超常見，直接背起來：{if possible} 可以的話、{if necessary} 必要的話、{when necessary} 必要時、{if so} 如果是這樣。", board:[["Reply today, if possible.",["if possible"]],["Call me when necessary.",["when necessary"]]]},
 {say:"陷阱！主詞不一樣就不能省略。{When I was ten, my family moved.} 如果寫成 When ten, my family moved，就變成「全家人十歲的時候」搬家了！", board:[["When I was ten, my family moved.",["I was"]],["When ten, my family moved.",[],true]]},
 {ask:{q:"哪一句的省略是正確的？", opts:["When ten, my family moved to Tainan.","While in Japan, I learned to cook ramen."], ans:1,
   ok:"正確！While in Japan = While I was in Japan，前後主詞都是 I。", bad:{0:"主詞不同（I 和 my family），不能省略！"},
   again:{q:"Please call me ___.", opts:["if necessary","if it necessary"], ans:0, exp:"if necessary = if it is necessary，it is 要一起省略。"}}},
 {say:"比較句和對等句也很愛省略。比較句：{She sings better than I do.} 用 do 代替 sing。對等句：{Tom likes math, and Amy, English.} 逗號代替重複的 likes。助動詞也能代替整串動詞：{I can't go, but my sister can.}", board:[["She sings better than I (do).",["do"]],["Tom likes math, and Amy, English.",["Amy, English"]],["I can't go, but my sister can.",["can"]]]},
 {say:"口訣！", chant:"重複的就省掉，助動詞來代替！"},
 {say:"最後一個細節：不定詞省略時要留下 to。{You can join us if you want to.} 不能只說 if you want。", board:[["You can join us if you want to.",["to"]],["You can join us if you want.",[],true]]},
 {ask:{say:"最後一題！", q:"You can come with us if you want ___.", opts:["to","it","so"], ans:0,
   ok:"太棒了！want to (come with us)，to 要保留。", bad:{1:"want 後面省略的是 to come with us，要保留 to，不是 it。",2:"這裡要保留不定詞的 to，不能用 so。"},
   again:{q:"I can't speak French, but my sister ___.", opts:["can","does","is"], ans:0, exp:"前面是 can't speak，後面用 can 代替 can speak French。"}}},
 {say:"省略句過關！口訣：主詞一樣又有 be，主詞 be 一起丟；主詞不同不能省；重複的就省掉，助動詞來代替；不定詞要留 to！", end:true}
],
g4:[
 {say:"學測超愛考的平行結構來了！原則只有一個：用 and、or、but 連接的東西，長相要一樣，就像排隊要排整齊。{I like reading, swimming, and dancing.}", board:[["I like reading, swimming, and dancing.",["reading","swimming","dancing"]],["I like reading, swimming, and to dance.",[],true]]},
 {say:"名詞配名詞、動詞配動詞、形容詞配形容詞、V-ing 配 V-ing、不定詞配不定詞。", board:[["fierce but fair",["fierce","fair"]],["by bus or by train",["by bus","by train"]],["to win, not to take part",["to win","to take part"]]]},
 {say:"口訣！", chant:"and、or、but 排排站，前後長得要一樣！"},
 {ask:{q:"My hobbies are reading, swimming, and ___.", opts:["to dance","dancing"], ans:1,
   ok:"對！三個都是 V-ing，排得整整齊齊。", bad:{0:"前面是 reading、swimming，第三個也要用 V-ing。"},
   again:{q:"The coach asked us to warm up, stretch, and ___.", opts:["run","running"], ans:0, exp:"to 後面的 warm up、stretch、run 都是原形動詞。"}}},
 {say:"相關連接詞也一樣：not only A but also B、both A and B、either A or B、not A but B，A 和 B 的形式要一樣。{She is not only smart but also kind.}", board:[["She is not only smart but also kind.",["smart","kind"]],["She is not only smart but also kindness.",[],true]]},
 {ask:{q:"She is not only smart but also ___.", opts:["kindness","kind","kindly"], ans:1,
   ok:"讚！smart 和 kind 都是形容詞。", bad:{0:"smart 是形容詞，後面也要用形容詞 kind，不是名詞。",2:"kindly 是副詞；要和形容詞 smart 對齊，用 kind。"},
   again:{q:"I compete not to beat others but ___ myself.", opts:["to improve","improving"], ans:0, exp:"not to V but to V，兩邊都是不定詞。"}}},
 {say:"比較句也要平行！{The weather in Taipei is hotter than that in Taichung.} 天氣要和天氣比，所以用 that 代替 the weather；寫成 than Taichung 就變成拿天氣和城市比了。複數就用 those。", board:[["... hotter than that in Taichung.",["that"]],["... hotter than Taichung.",[],true],["Prices here are lower than those at the mall.",["those"]]]},
 {say:"口訣！", chant:"比較要公平，單數 that、複數 those！"},
 {ask:{q:"The prices here are lower than ___ at the supermarket.", opts:["that","those","them"], ans:1,
   ok:"太好了！prices 是複數，用 those。", bad:{0:"prices 是複數，要用 those，不是 that。",2:"them 後面不能接修飾語 at the supermarket，要用 those。"},
   again:{q:"The population of Tokyo is larger than ___ of Taipei.", opts:["that","those"], ans:0, exp:"population 是單數，用 that。"}}},
 {say:"加碼：Not only 放句首、連接兩個子句時，前半要倒裝喔！{Not only did he win, but he also broke the record.}", board:[["Not only did he win, but he also broke the record.",["did he win"]],["Not only he won, but ...",[],true]]},
 {ask:{say:"最後一題！", q:"___ the game, but he also broke the record.", opts:["Not only he won","Not only did he win","Not only won he"], ans:1,
   ok:"完美！Not only 放句首要倒裝，借助動詞 did。", bad:{0:"Not only 放句首要倒裝：Not only did he win。",2:"一般動詞倒裝要借 did，不能直接把 won 搬到主詞前面。"},
   again:{q:"The ad was funny, creative, and ___.", opts:["touching","it touched people"], ans:0, exp:"funny、creative、touching 都是形容詞，平行。"}}},
 {say:"平行結構過關！口訣：and、or、but 排排站，前後長得要一樣；比較要公平，單數 that、複數 those；Not only 放句首要倒裝。這次段考的文法全部上完，去挑戰魔王吧！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S2_2_2_ROOTS = [
  {id:"r1", title:"字根 rupt：破"},
  {id:"r2", title:"字根 tend / tens：伸展"},
  {id:"r3", title:"字根 pel / puls：推、驅動"},
  {id:"r4", title:"字根 vol / volv：捲、轉"}
];
const S2_2_2_ROOT_CLASS = {
r1:[
 {say:"高二同學好！今天的字根是 <<rupt>>，意思是「破、斷裂」。看到 rupt，腦中就想到「啪！斷掉了」。", board:[["rupt = 破",["rupt"],false,true]]},
 {say:"{erupt}：e 是向外，破開往外衝，就是火山「爆發」；加上 ion 變成名詞 {eruption}。", board:[["e + rupt = erupt",["rupt"],false,true],["erupt + ion = eruption",["rupt"],false,true]]},
 {say:"{bankrupt}：bank 原本是錢莊的長凳，以前錢莊老闆周轉不靈，長凳就會被人打破，所以是「破產的」。{The company went bankrupt.}", board:[["bank + rupt = bankrupt",["rupt"],false,true]]},
 {say:"口訣！", chant:"rupt 啪一聲，破破破！"},
 {ask:{q:"e（向外）＋ rupt（破）＝ erupt，意思是？", opts:["爆發","中斷","腐敗"], ans:0,
   ok:"對！破開往外衝，就是爆發。", bad:{1:"中斷是 disrupt（dis 分開），e 是向外。",2:"腐敗是 corrupt；e 向外破開是爆發。"},
   again:{q:"go bankrupt 的意思是？", opts:["去銀行","破產","存錢"], ans:1, exp:"bank + rupt：錢莊的長凳破了 → 破產。"}}},
 {say:"{disrupt}：dis 是分開，把原本的秩序打破、拆開，就是「擾亂、使中斷」。{The typhoon disrupted train service.}", board:[["dis + rupt = disrupt",["rupt"],false,true]]},
 {say:"{corrupt}：cor 是完全，完全破壞掉，就是「腐敗的」。{abrupt}：ab 是離開，突然斷開，就是「突然的」。順便複習國三學過的 {interrupt}：inter 是在中間，從中間打斷。", board:[["cor + rupt = corrupt",["rupt"],false,true],["ab + rupt = abrupt",["rupt"],false,true],["inter + rupt = interrupt",["rupt"],false,true]]},
 {ask:{q:"The bus came to an ___ stop.（公車突然停下）", opts:["abrupt","corrupt","erupt"], ans:0,
   ok:"讚！ab 離開 + rupt 斷開：突然的。", bad:{1:"corrupt 是「腐敗的」，不是突然。",2:"erupt 是動詞「爆發」，an 後面要接形容詞。"},
   again:{q:"The noise ___ the class.（干擾了上課）", opts:["disrupted","bankrupt"], ans:0, exp:"dis 分開 + rupt 破：擾亂。"}}},
 {say:"整串一起記！", chant:"e 爆發、dis 擾亂、cor 腐敗、ab 突然！"},
 {ask:{say:"最後一題！", q:"字根 rupt 的意思是？", opts:["伸展","推","破"], ans:2,
   ok:"完美！rupt 就是「破」。", bad:{0:"伸展是 tend / tens。",1:"推是 pel / puls。"},
   again:{q:"「貪腐的官員」英文是？", opts:["a corrupt official","an abrupt official"], ans:0, exp:"cor 完全 + rupt 破 → 腐敗的。"}}},
 {say:"rupt 過關！口訣：rupt 啪一聲，破破破；e 爆發、dis 擾亂、cor 腐敗、ab 突然、bank 破產！", end:true}
],
r2:[
 {say:"今天的字根是 <<tend>> 和 <<tens>>，意思是「伸展、拉長」。想像手上有一條橡皮筋，被你拉長、拉緊。", board:[["tend / tens = 伸展",["tend","tens"],false,true]]},
 {say:"{extend}：ex 向外伸展，就是「延長、延伸」。{intend}：in 朝向，把心思伸向一個目標，就是「打算」；名詞是 {intention}。", board:[["ex + tend = extend",["tend"],false,true],["in + tend = intend",["tend"],false,true],["in + tent + ion = intention",["tent"],false,true]]},
 {say:"口訣！", chant:"tend、tens 拉拉拉，向外延長、向內打算！"},
 {ask:{q:"ex（向外）＋ tend（伸展）＝ extend，意思是？", opts:["打算","延長","緊張"], ans:1,
   ok:"對！往外伸展，就是延長。", bad:{0:"打算是 intend（in 朝向）。",2:"緊張是 tense / tension。"},
   again:{q:"I ___ to study abroad.（打算）", opts:["intend","extend"], ans:0, exp:"in 朝向 + tend：把心思伸向目標 → 打算。"}}},
 {say:"橡皮筋拉得緊緊的會怎樣？很「緊繃」！{tense} 緊張的、{tension} 緊張、{intense} 強烈的。", board:[["tense",["tens"],false,true],["tens + ion = tension",["tens"],false,true],["in + tense = intense",["tense"],false,true]]},
 {say:"{extensive}：ex 向外 + tens + ive，伸得又遠又廣，就是「廣泛的」。{tendency}：一直往某個方向伸過去，就是「傾向」。", board:[["ex + tens + ive = extensive",["tens"],false,true],["tend + ency = tendency",["tend"],false,true]]},
 {ask:{q:"考前教室的氣氛很緊繃：The atmosphere was ___.", opts:["tense","extend","intend"], ans:0,
   ok:"讚！拉緊的橡皮筋 → tense 緊繃的。", bad:{1:"extend 是動詞「延長」，was 後面要形容詞。",2:"intend 是動詞「打算」，was 後面要形容詞。"},
   again:{q:"There was a lot of ___ before the final.（緊張氣氛）", opts:["tension","tendency"], ans:0, exp:"tens 拉緊 + ion：緊張。"}}},
 {say:"國中學過的 {attend} 和 {attention} 也是同一家人！at 是朝向，把注意力伸向某處 → 出席、注意。", board:[["at + tend = attend",["tend"],false,true],["at + tent + ion = attention",["tent"],false,true]]},
 {say:"口訣！", chant:"拉緊了就 tense，伸遠了就 extensive！"},
 {ask:{say:"最後一題！", q:"Teenagers have a ___ to stay up late.（傾向）", opts:["tension","tendency","intention"], ans:1,
   ok:"完美！tendency 是傾向。", bad:{0:"tension 是「緊張」。",2:"intention 是「意圖」，have a tendency to V 才是「有……的傾向」。"},
   again:{q:"The typhoon caused ___ damage.（大範圍的）", opts:["extensive","intense"], ans:0, exp:"ex 向外 + tens：伸得很廣 → 廣泛的。"}}},
 {say:"tend / tens 過關！口訣：tend、tens 拉拉拉；向外延長 extend、向內打算 intend；拉緊了是 tense、tension、intense；伸遠了是 extensive！", end:true}
],
r3:[
 {say:"今天的字根是 <<pel>> 和 <<puls>>，都是「推、驅動」。想像用力推一把！", board:[["pel / puls = 推",["pel","puls"],false,true]]},
 {say:"{expel}：ex 向外推 → 驅逐、開除。{repel}：re 向後推 → 擊退、驅除。{propel}：pro 向前推 → 推進。{compel}：com 完全，用力推著你 → 強迫。", board:[["ex + pel = expel",["pel"],false,true],["re + pel = repel",["pel"],false,true],["pro + pel = propel",["pel"],false,true],["com + pel = compel",["pel"],false,true]]},
 {say:"口訣！", chant:"pel 推推推：ex 推出去、re 推回去、pro 推向前、com 逼你去！"},
 {ask:{q:"pro（向前）＋ pel（推）＝ propel，意思是？", opts:["推進","驅逐","強迫"], ans:0,
   ok:"對！向前推，就是推進。", bad:{1:"驅逐是 expel（ex 向外推）。",2:"強迫是 compel（com 完全）。"},
   again:{q:"The student was ___ from school.（被開除）", opts:["expelled","propelled"], ans:0, exp:"ex 向外推：開除。"}}},
 {say:"{dispel}：dis 分散，往四面八方推開 → 驅散恐懼、謠言。再來是 puls 版本：上學期學過的 {impulse} 是從心裡往外推的力量 → 衝動；形容詞 {impulsive} 衝動的。{pulse} 血液一下一下推 → 脈搏。{compulsory} 完全推著你一定要做 → 強制的、必修的。", board:[["dis + pel = dispel",["pel"],false,true],["im + puls + ive = impulsive",["puls"],false,true],["com + puls + ory = compulsory",["puls"],false,true]]},
 {ask:{q:"Don't be so ___ when shopping online.（衝動的）", opts:["impulsive","pulse","repel"], ans:0,
   ok:"讚！im 向內 + puls 推 + ive：被衝動推著走 → impulsive。", bad:{1:"pulse 是名詞「脈搏」，be 後面要形容詞。",2:"repel 是動詞「擊退」，be 後面要形容詞。"},
   again:{q:"English is a ___ subject.（必修的）", opts:["compulsory","impulsive"], ans:0, exp:"com 完全 + puls 推：一定要做 → 必修的。"}}},
 {say:"口訣！", chant:"pel、puls 一家人，推推推！"},
 {say:"拼字注意：compel、expel、repel、propel 加 ed 或 ing 時要重複 l：{compelled}、{expelled}、{repelling}。", board:[["compel → compelled",["pel"],false,true],["expel → expelled",["pel"],false,true]]},
 {ask:{say:"最後一題！", q:"This spray ___ mosquitoes.（驅蚊）", opts:["compels","repels","propels"], ans:1,
   ok:"完美！re 向後推，把蚊子推回去。", bad:{0:"compel 是「強迫」，不是驅趕。",2:"propel 是「推進」，把東西往前推。"},
   again:{q:"The nurse checked my ___.（脈搏）", opts:["pulse","impulse"], ans:0, exp:"pulse 是血液一下一下的推動。"}}},
 {say:"pel / puls 過關！口訣：ex 推出去、re 推回去、pro 推向前、com 逼你去、dis 推散開；im 是衝動，com puls 是必修！", end:true}
],
r4:[
 {say:"最後一課，字根 <<vol>> / <<volv>>，意思是「捲、轉」。想像捲起來的卷軸，或一直轉的陀螺。", board:[["vol / volv = 捲、轉",["vol","volv"],false,true]]},
 {say:"{revolve}：re 反覆 + volve 轉 → 一圈又一圈地轉，就是旋轉、繞轉。{The Earth revolves around the sun.} 上學期學過的 {revolution}：整個翻轉過來 → 革命。{revolt}：re 反過來轉，轉身對抗 → 反抗、叛亂。", board:[["re + volve = revolve",["volve"],false,true],["re + volu + tion = revolution",["volu"],false,true],["re + volt = revolt",["volt"],false,true]]},
 {say:"口訣！", chant:"volv 轉轉轉，re 一圈又一圈！"},
 {ask:{q:"re（反覆）＋ volve（轉）＝ revolve，意思是？", opts:["演化","繞轉","捲入"], ans:1,
   ok:"對！一圈又一圈地轉，就是繞轉。", bad:{0:"演化是 evolve（e 向外展開）。",2:"捲入是 involve（in 向內捲）。"},
   again:{q:"The farmers ___ against the heavy taxes.（起來反抗）", opts:["revolted","evolved"], ans:0, exp:"re 反過來 + volt 轉：轉身對抗 → 反抗。"}}},
 {say:"{evolve}：e 向外 + volve 展開 → 把捲著的東西慢慢展開，就是演化、逐步發展；名詞 {evolution}。高一學過的 {involve}：in 向內捲 → 牽涉、捲入。", board:[["e + volve = evolve",["volve"],false,true],["e + volu + tion = evolution",["volu"],false,true],["in + volve = involve",["volve"],false,true]]},
 {ask:{q:"Darwin's theory of ___（演化論）", opts:["revolution","evolution","volume"], ans:1,
   ok:"讚！evolution 是演化。", bad:{0:"revolution 是「革命」。",2:"volume 是「音量、一冊」。"},
   again:{q:"The small shop ___ into a big company.（逐漸發展成）", opts:["evolved","revolved"], ans:0, exp:"evolve into：逐漸發展成。"}}},
 {say:"{volume}：古代的書是一卷一卷的卷軸，所以 volume 是「一冊」；捲起來的分量就是「量」，聲音的量就是「音量」！", board:[["vol + ume = volume",["vol"],false,true]]},
 {say:"口訣！", chant:"古書一卷 volume，聲音大小也 volume！"},
 {ask:{say:"最後一題！", q:"Could you turn down the ___?（音量）", opts:["volume","revolution","evolution"], ans:0,
   ok:"完美！turn down the volume 就是把音量調小。", bad:{1:"revolution 是「革命」。",2:"evolution 是「演化」。"},
   again:{q:"字根 volv 的意思是？", opts:["捲、轉","破","推"], ans:0, exp:"volv 是捲、轉，像 revolve、evolve、involve、revolt。"}}},
 {say:"vol / volv 過關！這次的四個字根全部複習：rupt 破、tend / tens 伸展、pel / puls 推、vol / volv 捲轉。快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創） ---------- */
Object.assign(ILLUS2, {
  s222_erupt: () => svgWrap("#fff1e6", O.cloud(38, 26, .55, "#9ca3af") + O.cloud(126, 22, .6, "#a3a3a3") + `<path d="M70 42 Q64 24 52 14 M80 42 Q80 20 82 8 M90 42 Q98 26 110 16" stroke="#f97316" stroke-width="5" fill="none" stroke-linecap="round"/>` + `<path d="M12 106 L62 42 H98 L148 106 Z" fill="#8b5a3c"/><path d="M62 42 Q80 50 98 42 L92 56 Q86 50 80 60 Q74 50 68 56 Z" fill="#ef4444"/>` + spark(52, 12, .8, "#fbbf24") + spark(112, 12, .7, "#fbbf24") + ground("#d6c3a5")),
  s222_trophy: () => svgWrap("#fff8e1", `<rect x="56" y="92" width="48" height="12" rx="2" fill="#7c4a1e"/><rect x="72" y="74" width="16" height="20" fill="#f59e0b"/><path d="M52 34 Q34 34 38 50 Q42 62 56 62" stroke="#fbbf24" stroke-width="5" fill="none"/><path d="M108 34 Q126 34 122 50 Q118 62 104 62" stroke="#fbbf24" stroke-width="5" fill="none"/><path d="M52 26 H108 V44 Q108 74 80 76 Q52 74 52 44 Z" fill="#fbbf24"/>` + star(80, 48, 10, "#fff7cc") + spark(30, 24, .9) + spark(134, 84, .8) + spark(130, 20, .6)),
  s222_referee: () => svgWrap("#e9f7ef", ground() + `<path d="M0 108 H160" stroke="#fff" stroke-width="2"/>` + P({x:80, y:106, s:.95, hair:"short", hc:"#2b2b2b", oc:"#111827", pose:"wave", mood:"o", acc:["cap"]}) + `<rect x="96" y="34" width="11" height="15" rx="1.5" fill="#facc15" stroke="#ca8a04"/>` + txt(130, 44, "!", 22, "#ef4444")),
  s222_stadium: () => svgWrap("#dbeafe", `<path d="M0 30 H160 V70 H0 Z" fill="#94a3b8"/>` + Array.from({length:14}, (_, i) => `<circle cx="${8 + i * 11}" cy="44" r="4.5" fill="${["#fbbf24","#f472b6","#60a5fa","#34d399"][i % 4]}"/>`).join("") + Array.from({length:14}, (_, i) => `<circle cx="${13 + i * 11}" cy="58" r="4.5" fill="${["#a78bfa","#f87171","#fde68a","#38bdf8"][i % 4]}"/>`).join("") + `<rect x="0" y="70" width="160" height="50" fill="#4ade80"/><ellipse cx="80" cy="96" rx="58" ry="16" fill="none" stroke="#fff" stroke-width="2"/><path d="M80 70 V120" stroke="#fff" stroke-width="2"/><path d="M14 30 V8 M146 30 V8" stroke="#6b7280" stroke-width="3"/><rect x="6" y="4" width="16" height="7" rx="2" fill="#fef9c3"/><rect x="138" y="4" width="16" height="7" rx="2" fill="#fef9c3"/>`)
});

registerUnit("s2-2-2", {
  name:"高二 下學期 第二次段考",
  sub:"倒裝句進階、強調語氣、省略句、平行結構",
  words:S2_2_2_WORDS, grammar:S2_2_2_GRAMMAR, quiz:S2_2_2_QUIZ,
  classes:Object.assign({}, S2_2_2_CLASS, S2_2_2_ROOT_CLASS), phonics:S2_2_2_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會 rupt、tend、pel、volv 四個字根，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
