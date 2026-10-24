/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高一 7000 單字 Level 1–2：易混淆字、詞性變化、常考搭配與片語
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"（沒有字根可拆的字留空，記憶小撇步寫在 MEMO）
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S1_V1_WORDS = [
/* ---------- 詞性家族 ---------- */
["succeed","v.","成功",[
 ["If you keep trying, you will succeed one day.","只要你持續努力，總有一天會成功。","succeed 是不及物動詞，後面不直接接受詞；If 子句用現在式代替未來。"],
 ["She succeeded in passing the driving test.","她順利通過了駕照考試。","「在某事上成功」用 succeed in + N / V-ing，in 是介系詞，後面的動詞要加 -ing。"],
 ["Hard work helped him succeed, and his success made his parents proud.","努力讓他成功，而他的成功讓父母很驕傲。","詞性家族：succeed（v.）、success（n.）、successful（adj.）、successfully（adv.）；help + 受詞 + 原形動詞。"]],
 "suc-=接著、在下面|ceed=走","一步接一步走下去 → 成功","🏆|成功"],
["successful","adj.","成功的",[
 ["The school festival was very successful.","校慶辦得非常成功。","be 動詞後面接形容詞 successful，不能用名詞 success 或動詞 succeed。"],
 ["She became a successful writer after years of hard work.","經過多年努力，她成了一位成功的作家。","形容詞 successful 放在名詞 writer 前面修飾它。"],
 ["They successfully finished the project on time.","他們成功地準時完成了計畫。","修飾動詞 finished 要用副詞 successfully；形容詞 + ly 變副詞。"]],
 "success=成功|-ful=充滿……的","充滿成功 → 成功的","🥇|成功的"],
["difference","n.","差異；差別",[
 ["What is the difference between lie and lay?","lie 和 lay 有什麼差別？","the difference between A and B：A 和 B 之間的差別。"],
 ["Your help made a big difference to our team.","你的幫忙對我們團隊影響很大。","make a difference（to）是常考搭配詞：「有影響、帶來改變」。"],
 ["The twins look alike, but their personalities are very different.","這對雙胞胎長得很像，但個性很不一樣。","詞性家族：differ（v.）、difference（n.）、different（adj.）、differently（adv.）；be different from 和……不同。"]],
 "differ=不同|-ence=名詞字尾","不同的地方 → 差異","⚖️|差別"],
["beauty","n.","美；美麗",[
 ["We were amazed by the beauty of Sun Moon Lake.","我們被日月潭的美景驚豔了。","the beauty of + 地點：……的美；amazed 是「人感到驚訝」，用過去分詞。"],
 ["Inner beauty is more important than good looks.","內在美比好看的外表更重要。","beauty 是名詞，前面可以用形容詞 inner 修飾；比較級 more important than。"],
 ["She sang beautifully, and everyone praised the beauty of her voice.","她唱得很美，大家都稱讚她歌聲的美。","詞性家族：beauty（n.）、beautiful（adj.）、beautifully（adv.）；修飾動詞 sang 要用副詞。"]],
 "","","🌸|美"],
["dead","adj.","死的；沒電的",[
 ["Many fish in the river are dead because of pollution.","因為污染，河裡很多魚都死了。","dead 是形容詞，放在 be 動詞後面表示「死的狀態」。"],
 ["My grandfather has been dead for ten years.","我爺爺已經過世十年了。","學測常考：表示「死了多久」要用 be dead + for 一段時間，不能說 has died for ten years（die 是瞬間動作）。"],
 ["My phone is dead. Can I use yours?","我的手機沒電了，可以借用你的嗎？","dead 也可以形容電池、手機「沒電的」；yours = your phone。"]],
 "","","🪦|死的"],
["death","n.","死亡",[
 ["The death of his dog made him very sad.","他的狗死了，讓他非常難過。","the death of + 名詞：……的死亡；make + 受詞 + 形容詞。"],
 ["Car accidents cause many deaths every year.","車禍每年造成許多人死亡。","death 指「死亡事件」時可數，可以加 s。"],
 ["Her pet died last year, and its death was a great shock to her.","她的寵物去年死了，牠的死對她是很大的打擊。","詞性家族：die（v.）死、dead（adj.）死的、death（n.）死亡、dying（adj.）垂死的。"]],
 "","","🥀|死亡"],
["alive","adj.","活著的",[
 ["The fish is still alive. Put it back into the water!","這條魚還活著，把牠放回水裡！","alive 是敘述用法的形容詞，放在 be 動詞後面。"],
 ["Luckily, all the passengers were found alive.","幸運的是，所有乘客被發現時都還活著。","alive 可以放在 find 的受詞後面當補語：be found alive 被發現時還活著。"],
 ["There are many living things in the ocean, and we must keep them alive.","海洋裡有很多生物，我們必須讓牠們活下去。","alive 不能放在名詞前面，名詞前面要用 living：a living thing；keep + 受詞 + alive。"]],
 "a-=處於……狀態|live=活","處於活的狀態 → 活著的","💓|活著"],
["belief","n.","信念；相信",[
 ["It is a common belief that breakfast is the most important meal.","一般人普遍相信早餐是最重要的一餐。","It 是虛主詞，代替後面的 that 子句；a common belief 普遍的看法。"],
 ["Her strong belief in herself helped her succeed.","她對自己堅定的信心幫助她成功。","belief in + 人／事：對……的信任。"],
 ["I believe you can do it, so never lose belief in yourself.","我相信你做得到，所以永遠不要失去對自己的信心。","詞性家族：believe（v.）、belief（n.，複數 beliefs）。"]],
 "","","🙏|信念"],
["lose","v.","失去；輸掉",[
 ["I lost my wallet on the MRT yesterday.","我昨天在捷運上弄丟了錢包。","lose 的三態是 lose-lost-lost。"],
 ["Our team lost the game by two points.","我們隊以兩分之差輸了比賽。","lose 也可以表示「輸掉」，反義字是 win；by 表示差距。"],
 ["He lost weight by exercising every day.","他靠每天運動減輕了體重。","lose weight 減重；by + V-ing 表示「藉由……」。"]],
 "","","😢|失去"],
["loss","n.","損失；喪失",[
 ["The loss of the game made the players very upset.","輸掉比賽讓球員們非常沮喪。","loss 是 lose 的名詞，the loss of + 名詞。"],
 ["The farmers suffered a heavy loss after the typhoon.","颱風過後，農民蒙受了嚴重的損失。","suffer a loss 遭受損失；heavy 在這裡是「嚴重的」。"],
 ["When the teacher asked her a question, she was at a loss for words.","老師問她問題時，她不知道該說什麼。","at a loss 不知所措；at a loss for words 說不出話來。"]],
 "","","📉|損失"],
["loose","adj.","鬆的；寬鬆的",[
 ["These pants are too loose for me.","這條褲子對我來說太鬆了。","too + 形容詞 + for 人：對某人來說太……。"],
 ["One of my teeth is loose.","我有一顆牙齒鬆了。","one of + 複數名詞，主詞是 one，所以動詞用單數 is。"],
 ["Your shoelace is loose. Tie it, or you might fall.","你的鞋帶鬆了，綁好，不然你可能會跌倒。","祈使句 + or 表示「……，否則……」；不要把 loose（鬆的）和 lose（失去）搞混。"]],
 "","","👖|鬆的"],
["breath","n.","呼吸；一口氣",[
 ["Take a deep breath before you give your speech.","演講前先深呼吸。","take a deep breath 深呼吸，breath 是名詞。"],
 ["I was out of breath after running up the stairs.","跑上樓梯之後我上氣不接下氣。","out of breath 喘不過氣；after + V-ing。"],
 ["He held his breath and jumped into the cold water.","他屏住呼吸，跳進冷水裡。","hold one's breath 屏住呼吸。"]],
 "","","😮‍💨|呼吸"],
["prove","v.","證明",[
 ["Can you prove that you were at home last night?","你能證明你昨晚在家嗎？","prove + that 子句：證明……。"],
 ["The test results proved him right.","測驗結果證明他是對的。","prove + 受詞 + 形容詞：證明某人／某事是……。"],
 ["His story turned out to be true; he had proof.","他的說法結果是真的，他有證據。","詞性家族：prove（v.）證明、proof（n.）證據；ve 換成 f 就變名詞。"]],
 "","","✅|證明"],
["safe","adj.","安全的",[
 ["It is not safe to swim in this river.","在這條河游泳不安全。","It is + 形容詞 + to V 虛主詞句型。"],
 ["Keep your passport in a safe place.","把你的護照放在安全的地方。","形容詞 safe 放在名詞 place 前面修飾。"],
 ["Drive safely! Your safety is the most important thing.","開車小心！你的安全最重要。","詞性家族：safe（adj.）、safely（adv.）、safety（n.）；修飾動詞 drive 要用副詞 safely。"]],
 "","","🛡️|安全"],
["height","n.","高度；身高",[
 ["What is your height?","你的身高是多少？","height 是 high 的名詞，問身高也可以說 How tall are you?"],
 ["The tower has a height of 300 meters.","這座塔高三百公尺。","have a height of + 數字：高度是……。"],
 ["My little sister is afraid of heights.","我妹妹有懼高症。","be afraid of heights 怕高，heights 用複數表示「高處」。"]],
 "heigh=高（high）|-t=名詞字尾","high 的名詞 → 高度","📏|高度"],
["weigh","v.","重……；秤重",[
 ["How much do you weigh?","你體重多少？","weigh 是動詞，後面直接接重量；問句用 How much。"],
 ["The baby weighs about four kilograms.","這個嬰兒大約四公斤重。","主詞 the baby 是第三人稱單數，weigh 要加 s。"],
 ["Could you weigh these apples for me?","可以幫我秤一下這些蘋果嗎？","weigh 也可以當及物動詞「秤……的重量」。"]],
 "","","⚖️|秤重"],
["length","n.","長度",[
 ["What is the length of this river?","這條河有多長？","length 是 long 的名詞；the length of + 名詞：……的長度。"],
 ["The bridge is 500 meters in length.","這座橋長五百公尺。","數字 + in length：長度為……；也可以說 500 meters long。"],
 ["She spoke at length about her trip.","她詳細地講了她的旅行。","at length 詳細地、長時間地。"]],
 "leng=長（long）|-th=名詞字尾","long 的名詞 → 長度","📐|長度"],
["pride","n.","驕傲；自豪",[
 ["She looked at her gold medal with pride.","她驕傲地看著自己的金牌。","with pride = proudly，with + 抽象名詞可以當副詞用。"],
 ["He takes pride in his work.","他對自己的工作感到自豪。","take pride in = be proud of，學測常考的同義換句。"],
 ["Taipei 101 is the pride of Taiwan.","台北101是台灣的驕傲。","the pride of + 地方：……的驕傲。"]],
 "","","🦚|驕傲"],
["silence","n.","安靜；沉默",[
 ["There was a long silence after the bad news.","壞消息傳來後，是一段長長的沉默。","There was + 名詞：有……；silence 前面可以加 a 表示「一段沉默」。"],
 ["The students read in silence.","學生們靜靜地讀書。","in silence = silently，靜靜地。"],
 ["Please keep silent in the library; silence is important here.","在圖書館請保持安靜，這裡安靜很重要。","詞性家族：silence（n.）、silent（adj.）、silently（adv.）；keep + 形容詞：保持……。"]],
 "sil=安靜|-ence=名詞字尾","安靜的狀態 → 沉默","🤫|安靜"],
["effect","n.","影響；效果",[
 ["The medicine had no effect on me.","這個藥對我沒有效果。","have an effect on + 名詞：對……有影響；effect 是名詞。"],
 ["Smartphones have a great effect on teenagers' lives.","智慧型手機對青少年的生活影響很大。","形容詞 great 修飾名詞 effect。"],
 ["The new school rule will take effect next month.","新的校規下個月生效。","take effect 生效，是常考搭配。"]],
 "ef-=向外|fect=做","做出來的結果 → 效果、影響","💥|效果"],
["affect","v.","影響",[
 ["Lack of sleep can affect your grades.","睡眠不足會影響你的成績。","affect 是動詞，後面直接接受詞 your grades。"],
 ["The typhoon affected thousands of farmers.","颱風影響了數千名農民。","affect 是規則動詞，過去式 affected。"],
 ["The news affected me a lot; it had a big effect on me.","這個消息對我影響很大。","affect（v.）= have an effect on（n.）：動詞用 a 開頭，名詞用 e 開頭。"]],
 "af-=朝向|fect=做","對著某人做了事 → 影響","🌊|影響"],
["economic","adj.","經濟上的",[
 ["Taiwan has enjoyed fast economic growth.","台灣享有快速的經濟成長。","economic 是「和經濟有關的」，放在名詞 growth 前面。"],
 ["Many families are facing economic problems.","許多家庭正面臨經濟問題。","are facing 是現在進行式。"],
 ["The economy is getting better, so economic news is good this year.","景氣正在變好，所以今年的經濟新聞都是好消息。","詞性家族：economy（n.）經濟、economic（adj.）經濟上的、economical（adj.）節省的。"]],
 "econom=經濟|-ic=形容詞字尾","和經濟有關的 → 經濟上的","📊|經濟的"],
["economical","adj.","節省的；划算的",[
 ["Taking the MRT is more economical than taking a taxi.","搭捷運比搭計程車省錢。","動名詞當主詞；more economical than 比……划算。"],
 ["This small car is very economical.","這台小車很省油。","economical 形容東西「省錢、省油」。"],
 ["She is economical with her money, but she isn't stingy.","她用錢很節省，但並不小氣。","be economical with + 東西：節省使用……；economic（經濟上的）和 economical（節省的）意思不同。"]],
 "econom=經濟|-ical=形容詞字尾","懂得經濟 → 節省的","🪙|節省"],
/* ---------- 易混淆字 ---------- */
["rise","v.","上升；升起",[
 ["The sun rises in the east.","太陽從東方升起。","rise 是不及物動詞，後面沒有受詞；不變的事實用現在式。"],
 ["Prices have risen a lot this year.","今年物價漲了很多。","三態 rise-rose-risen；have risen 是現在完成式。"],
 ["The river rose quickly after the heavy rain.","大雨過後河水很快就上漲了。","自己上升用 rise；把東西舉起來要用及物動詞 raise（raise your hand）。"]],
 "","","📈|上升"],
["lay","v.","放置；下（蛋）",[
 ["Please lay the book on the table.","請把書放在桌上。","lay 是及物動詞，後面要接受詞 the book。"],
 ["Hens lay eggs almost every day.","母雞幾乎每天都會下蛋。","lay eggs 下蛋；主詞 hens 是複數，動詞用原形。"],
 ["She laid her baby on the bed gently.","她輕輕地把寶寶放在床上。","三態 lay-laid-laid；注意 lay 也是 lie（躺）的過去式。"]],
 "","","🥚|放置"],
["tell","v.","告訴；分辨",[
 ["Please tell me the truth.","請告訴我實話。","tell + 人 + 事：告訴某人某事；tell 後面通常要先接「人」。"],
 ["Can you tell the difference between the twins?","你分得出這對雙胞胎的差別嗎？","tell the difference 分辨差別；tell A from B 分辨 A 和 B。"],
 ["My mom told me to bring an umbrella.","我媽媽叫我帶雨傘。","tell + 人 + to V：叫某人做某事；三態 tell-told-told。"]],
 "","","🗣️|告訴"],
["talk","v.","談話；聊天",[
 ["We talked about our summer plans.","我們聊了暑假計畫。","talk about + 話題：談論……。"],
 ["Can I talk to you for a minute?","我可以跟你談一下嗎？","talk to / with + 人：和某人說話；talk 後面不直接接人。"],
 ["Stop talking! The movie is starting.","別說話了！電影要開始了。","stop + V-ing 停止做某事；is starting 用進行式表示即將發生。"]],
 "","","💬|聊天"],
["bring","v.","帶來",[
 ["Don't forget to bring your textbook tomorrow.","明天別忘了帶課本。","forget to V：忘記去做（還沒做）。"],
 ["Could you bring me a glass of water?","可以幫我拿一杯水過來嗎？","bring 是帶「來」說話者這邊；帶「去」別的地方用 take。"],
 ["Hard work will bring you success.","努力會為你帶來成功。","bring + 人 + 物：為某人帶來某物；三態 bring-brought-brought。"]],
 "","","🎁|帶來"],
["cost","v./n.","花費；成本",[
 ["The concert ticket cost me 2,000 dollars.","演唱會門票花了我兩千元。","事物 + cost + 人 + 錢；cost 三態同形：cost-cost-cost。"],
 ["How much does this jacket cost?","這件夾克多少錢？","問價錢：How much does it cost? 主詞是物品。"],
 ["The cost of living in Taipei is very high.","在台北的生活費很高。","cost 當名詞「成本、費用」；the cost of living 生活費。"]],
 "","","💰|花費"],
["wear","v.","穿著；戴著",[
 ["She is wearing a red dress today.","她今天穿著一件紅色洋裝。","wear 表示「穿著」的狀態；三態 wear-wore-worn。"],
 ["Students have to wear uniforms at school.","學生在學校必須穿制服。","have to + 原形動詞：必須。"],
 ["Put on your coat. You can't wear just a T-shirt in this cold weather.","穿上外套，這麼冷的天氣你不能只穿一件T恤。","put on 是「穿上」的動作，wear 是「穿著」的狀態。"]],
 "","","👕|穿著"],
["beside","prep.","在……旁邊",[
 ["Come and sit beside me.","過來坐我旁邊。","beside = next to，在……旁邊。"],
 ["There is a convenience store beside our school.","我們學校旁邊有一家便利商店。","There is + 單數名詞 + 地點。"],
 ["Who is the girl standing beside Amy?","站在艾美旁邊的女生是誰？","standing beside Amy 是分詞片語修飾 the girl；別和 besides（除了……之外還有）搞混。"]],
 "be-=在|side=旁邊","在旁邊 → 在……旁邊","🪑|旁邊"],
["quite","adv.","相當；十分",[
 ["The test was quite easy.","這次考試相當簡單。","quite 修飾形容詞 easy，意思是「相當」。"],
 ["It's quite a long way to the station.","到車站還有相當長的一段路。","注意語序：quite + a + 形容詞 + 名詞。"],
 ["Please be quiet. I'm not quite sure what he said.","請安靜，我不太確定他說了什麼。","not quite 不完全；quite [kwaɪt] 相當，quiet [ˈkwaɪət] 安靜，拼字和發音都不同。"]],
 "","","👌|相當"],
["alone","adj./adv.","獨自；單獨",[
 ["My grandpa lives alone in the mountains.","我爺爺獨自住在山上。","alone 當副詞修飾 lives，表示「獨自」。"],
 ["Leave me alone, please.","請讓我一個人靜一靜。","leave + 人 + alone：別打擾某人。"],
 ["She lives alone, but she never feels lonely.","她一個人住，但她從不覺得寂寞。","alone 是客觀的「單獨一個人」，lonely 是主觀的「感到寂寞」。"]],
 "al-=完全（all）|one=一個","完全只有一個 → 獨自","🧍|獨自"],
["through","prep.","穿過；透過",[
 ["The train went through a long tunnel.","火車穿過一條長長的隧道。","through 表示「從一頭穿到另一頭」。"],
 ["I found the job through a friend.","我透過朋友找到這份工作。","through 也可以表示「透過、經由」。"],
 ["Though it was raining, we walked through the park.","雖然在下雨，我們還是走過公園。","though（雖然）是連接詞，through（穿過）是介系詞，拼字只差一個 r；thought 則是 think 的過去式。"]],
 "","","🚇|穿過"],
["hardly","adv.","幾乎不",[
 ["I can hardly believe it!","我簡直不敢相信！","hardly 本身就有否定意味，不要再加 not。"],
 ["He hardly ever eats breakfast.","他幾乎從不吃早餐。","hardly ever 幾乎從不，和 seldom 意思接近。"],
 ["She works hard, but she hardly has time to rest.","她工作很努力，卻幾乎沒時間休息。","hard 是「努力地」，hardly 是「幾乎不」，加了 ly 意思完全不同。"]],
 "hard=困難的|-ly=副詞字尾","難到幾乎做不到 → 幾乎不","🙅|幾乎不"],
["lately","adv.","最近",[
 ["Have you seen Tom lately?","你最近有看到湯姆嗎？","lately 常和現在完成式一起用。"],
 ["I have been very busy lately.","我最近非常忙。","lately = recently，放在句尾。"],
 ["He has been late for school a lot lately.","他最近常常上學遲到。","late 是「晚的、遲到的」，lately 是「最近」，意思不一樣。"]],
 "late=最近的|-ly=副詞字尾","最近的 → 最近","🗓️|最近"],
["nearly","adv.","幾乎；差一點",[
 ["It's nearly ten o'clock.","快要十點了。","nearly = almost，幾乎。"],
 ["I nearly missed the bus this morning.","我今天早上差點錯過公車。","nearly + 動詞過去式：差一點就……（但沒有發生）。"],
 ["Nearly all the students live near the school.","幾乎所有學生都住在學校附近。","near 是「靠近」，nearly 是「幾乎」，同一句話裡意思不同。"]],
 "near=接近|-ly=副詞字尾","接近（全部）→ 幾乎","⏳|幾乎"],
["advise","v.","建議；勸告",[
 ["The doctor advised me to get more sleep.","醫生建議我多睡一點。","advise + 人 + to V：建議某人做某事。"],
 ["I advise you to take an umbrella with you.","我建議你帶把傘。","advise 是動詞，結尾發 [z] 的音。"],
 ["He gave me some good advice, and I'm glad he advised me.","他給了我一些好建議，我很高興他勸了我。","advice 是不可數名詞（some advice、a piece of advice），advise 是動詞。"]],
 "ad-=朝向|vise=看","幫人看清方向 → 勸告","🧭|建議"],
/* ---------- 常考搭配詞 ---------- */
["harm","n./v.","傷害；損害",[
 ["Staying up late does harm to your health.","熬夜對健康有害。","do harm to = harm，有害；動名詞 Staying up late 當主詞，動詞用單數。"],
 ["There's no harm in trying.","試試看也無妨。","There's no harm in + V-ing：做……也沒什麼壞處。"],
 ["Too much sugar can harm your teeth.","吃太多糖會傷害牙齒。","harm 也可以當動詞，後面直接接受詞。"]],
 "","","⚠️|傷害"],
["favor","n.","幫忙；恩惠",[
 ["Could you do me a favor?","可以幫我一個忙嗎？","do + 人 + a favor：幫某人一個忙。"],
 ["Can I ask you a favor?","我可以請你幫個忙嗎？","ask + 人 + a favor：請某人幫忙。"],
 ["Most students are in favor of the new plan.","大部分學生贊成這個新計畫。","in favor of 贊成、支持；of 是介系詞，後面接名詞。"]],
 "","","🤝|幫忙"],
["trouble","n.","麻煩；困難",[
 ["I have trouble remembering new words.","我很難記住新單字。","have trouble (in) + V-ing：做……有困難；不能接 to V。"],
 ["He got into trouble for cheating on the test.","他因為考試作弊惹上麻煩。","get into trouble 惹上麻煩；for + V-ing 表示原因。"],
 ["Sorry to trouble you, but could you help me with this box?","抱歉麻煩你，可以幫我搬這個箱子嗎？","trouble 也可以當動詞「麻煩、打擾」。"]],
 "","","😣|麻煩"],
["take part in","phr.","參加",[
 ["Over 500 runners took part in the race.","超過五百名跑者參加了這場賽跑。","take part in = join = participate in；三態 take-took-taken。"],
 ["Our class will take part in the singing contest.","我們班會參加歌唱比賽。","take part in 後面接活動、比賽，in 不能省略。"],
 ["Taking part in club activities helps students make friends.","參加社團活動能幫助學生交朋友。","動名詞片語 Taking part in ... 當主詞，動詞用單數 helps。"]],
 "","","🙋|參加"],
["take place","phr.","發生；舉行",[
 ["The school sports day will take place next Friday.","學校運動會下週五舉行。","take place 表示「（事先安排的活動）舉行」。"],
 ["The accident took place at midnight.","這起意外發生在半夜。","take place 也可以表示「發生」，= happen。"],
 ["When did the story take place?","這個故事發生在什麼時候？","take place 是不及物的，沒有被動語態：不能說 was taken place。"]],
 "","","📅|舉行"],
["take care of","phr.","照顧",[
 ["Please take care of my dog while I'm away.","我不在的時候請幫我照顧我的狗。","take care of = look after，照顧。"],
 ["She has to take care of her little brother after school.","她放學後必須照顧弟弟。","has to + 原形動詞：必須。"],
 ["Take good care of yourself.","好好照顧自己。","形容詞 good 可以放在 care 前面加強語氣。"]],
 "","","🍼|照顧"],
["make sense","phr.","有道理；講得通",[
 ["Your idea makes sense to me.","我覺得你的想法有道理。","make sense 有道理；主詞是第三人稱單數，make 加 s。"],
 ["This sentence doesn't make sense.","這個句子講不通。","否定句用 doesn't make sense。"],
 ["Can you make sense of this map?","你看得懂這張地圖嗎？","make sense of + 名詞：理解、弄懂……。"]],
 "","","🧩|有道理"],
["make fun of","phr.","取笑",[
 ["It is not nice to make fun of others.","取笑別人是不好的。","It is + 形容詞 + to V 虛主詞句型。"],
 ["They made fun of his new haircut.","他們取笑他的新髮型。","make fun of + 人／事：取笑……。"],
 ["He was made fun of by his classmates.","他被同學取笑。","被動語態：be made fun of by，片語裡的 of 不能省略。"]],
 "","","😜|取笑"],
["take notes","phr.","做筆記",[
 ["Please take notes during class.","上課時請做筆記。","take notes 做筆記，notes 用複數。"],
 ["She took notes carefully in the meeting.","她在會議中仔細地做筆記。","副詞 carefully 修飾動詞 took。"],
 ["Taking notes helps me remember what I have learned.","做筆記幫助我記住學過的東西。","what I have learned 是名詞子句，當 remember 的受詞。"]],
 "","","📝|做筆記"],
/* ---------- 常考片語動詞 ---------- */
["get over","phr.","克服；從……中恢復",[
 ["It took him a month to get over the flu.","他花了一個月才從流感中康復。","It takes + 人 + 時間 + to V：某人花多少時間做某事。"],
 ["She finally got over her fear of water.","她終於克服了對水的恐懼。","get over + 困難、恐懼：克服。"],
 ["Don't worry. You'll get over it soon.","別擔心，你很快就會走出來的。","get over 是不可分的片語，代名詞 it 要放在 over 後面。"]],
 "","","💪|克服"],
["get rid of","phr.","擺脫；丟掉",[
 ["I want to get rid of my bad habits.","我想改掉我的壞習慣。","get rid of + 名詞：擺脫、去除。"],
 ["We got rid of the old sofa last week.","我們上週把舊沙發丟了。","got 是 get 的過去式。"],
 ["How can I get rid of this smell?","我要怎麼去除這個味道？","How can I + 原形動詞？詢問方法。"]],
 "","","🗑️|擺脫"],
["look up to","phr.","尊敬；仰慕",[
 ["Many young players look up to their coach.","許多年輕球員都很尊敬他們的教練。","look up to = respect = admire，抬頭往上看 → 尊敬。"],
 ["I have always looked up to my older sister.","我一直都很仰慕我姊姊。","have always + p.p.：一直以來都……。"],
 ["He is looked up to by everyone in the village.","他受到村裡每個人的敬重。","被動語態 be looked up to by，三個字都要保留。"]],
 "","","@look up to"],
["look down on","phr.","看不起",[
 ["Don't look down on people who are poor.","不要看不起貧窮的人。","look down on 是 look up to 的反義詞。who are poor 修飾 people。"],
 ["She never looks down on anyone.","她從不看不起任何人。","never 本身是否定，後面用 anyone。"],
 ["Never look down on yourself; you are better than you think.","永遠別看輕自己，你比你想的更好。","祈使句的否定可以用 Never + 原形動詞。"]],
 "","","👇|看不起"],
["look after","phr.","照顧",[
 ["Who looks after your grandma during the day?","白天誰照顧你奶奶？","look after = take care of。"],
 ["My aunt will look after the kids this weekend.","我阿姨這個週末會照顧孩子們。","will + 原形動詞表示未來。"],
 ["Look after yourself while you're abroad.","你在國外時要照顧好自己。","while 引導時間子句：在……的期間。"]],
 "","","👵|照顧"],
["look up","phr.","查閱（字典等）",[
 ["Look up the word in the dictionary.","在字典裡查這個字。","look up + 字 + in the dictionary：在字典裡查。"],
 ["If you don't know a word, look it up.","如果不懂某個字，就查一下。","look up 是可分片語：受詞是代名詞時一定要放中間，說 look it up，不能說 look up it。"],
 ["I looked up the train times online.","我上網查了火車時刻。","online 當副詞，表示「在網路上」。"]],
 "","","🔍|查閱"],
["take after","phr.","（長相、個性）像（父母長輩）",[
 ["She really takes after her mother.","她真的很像她媽媽。","take after + 長輩：長得像、個性像；只用在有血緣的長輩。"],
 ["Which of your parents do you take after?","你比較像爸爸還是媽媽？","Which of + 複數名詞：……之中的哪一個。"],
 ["He takes after his father in personality.","他的個性像他爸爸。","take after 表示狀態，通常不用進行式；in + 方面。"]],
 "","","@take after"],
["take off","phr.","脫下；起飛",[
 ["Please take off your shoes before you come in.","進來之前請脫鞋。","take off 脫下，反義是 put on 穿上。"],
 ["It's hot in here. Take your coat off.","這裡很熱，把外套脫掉吧。","take off 是可分片語，受詞可以放中間：take your coat off。"],
 ["The plane took off on time.","飛機準時起飛。","take off 也可以表示飛機「起飛」，這時是不及物，沒有受詞。"]],
 "","","🛫|起飛"],
["turn out","phr.","結果是；原來是",[
 ["The test turned out to be easier than I expected.","考試結果比我預期的簡單。","turn out to be + 形容詞／名詞：結果是……。"],
 ["It turned out that he was right.","結果證明他是對的。","It turns out that + 子句：結果是……，It 是虛主詞。"],
 ["Things didn't turn out the way we planned.","事情沒有照我們計畫的那樣發展。","the way + 子句：照……的方式。"]],
 "","","🎲|結果是"],
["turn down","phr.","拒絕；調低",[
 ["She turned down the job offer.","她拒絕了那份工作邀約。","turn down = refuse = reject，拒絕。"],
 ["Could you turn down the music? I'm studying.","可以把音樂關小聲一點嗎？我在讀書。","turn down 也可以表示把音量「調低」，反義 turn up。"],
 ["He invited her to the party, but she turned him down.","他邀她去派對，但她拒絕了他。","受詞是代名詞 him，要放在 turn 和 down 中間。"]],
 "","","🙅‍♀️|拒絕"],
["give in","phr.","屈服；讓步",[
 ["Don't give in to peer pressure.","不要屈服於同儕壓力。","give in to + 名詞：向……屈服。"],
 ["After hours of crying, the boy's parents finally gave in.","孩子哭了好幾個小時之後，父母終於讓步了。","give in 是不及物的，後面不直接接受詞。"],
 ["He never gives up, and he never gives in.","他從不放棄，也從不屈服。","give up 是「放棄」，give in 是「屈服、讓步」，意思不同。"]],
 "","","🏳️|屈服"],
["put up with","phr.","忍受",[
 ["I can't put up with the noise anymore.","我再也受不了這個噪音了。","put up with = stand = bear，忍受。"],
 ["How do you put up with his bad temper?","你怎麼受得了他的壞脾氣？","put up with + 名詞，三個字缺一不可。"],
 ["She has put up with the pain for weeks.","她已經忍受這個疼痛好幾週了。","現在完成式 has put up with + for 一段時間。"]],
 "","","😤|忍受"],
["put off","phr.","延期；拖延",[
 ["The baseball game was put off because of the rain.","棒球比賽因為下雨延期了。","put off = postpone，延期；was put off 是被動語態。"],
 ["Don't put off doing your homework.","不要拖延寫作業。","put off + V-ing：延後做某事，後面不能接 to V。"],
 ["Never put off till tomorrow what you can do today.","今日事，今日畢。","what you can do today 是名詞子句，當 put off 的受詞。"]],
 "","","⏰|延期"],
["put out","phr.","熄滅（火）",[
 ["The firefighters put out the fire quickly.","消防員很快就把火撲滅了。","put out 熄滅；put 三態同形，這裡是過去式。"],
 ["Put out the candles before you go to bed.","睡覺前把蠟燭熄掉。","祈使句，用原形動詞開頭。"],
 ["The fire was put out in ten minutes.","火在十分鐘內被撲滅了。","被動語態 was put out；in + 時間 表示「在……之內」。"]],
 "","","🧯|熄滅"],
["run out of","phr.","用完",[
 ["We have run out of milk. Can you buy some?","我們的牛奶喝完了，你可以買一些嗎？","人 + run out of + 東西：某人用完了某物；三態 run-ran-run。"],
 ["My phone is running out of battery.","我的手機快沒電了。","進行式 is running out of 表示「快用完了」。"],
 ["Hurry up! Time is running out.","快點！時間快不夠了。","東西當主詞時用 run out，不加 of。"]],
 "","","🪫|用完"],
["find out","phr.","查明；發現",[
 ["I need to find out what happened.","我需要查明發生了什麼事。","find out + 名詞子句：查出……。"],
 ["Did you find out who broke the window?","你查到是誰打破窗戶了嗎？","who broke the window 是名詞子句，當 find out 的受詞。"],
 ["She found out that her friend had lied to her.","她發現朋友對她說了謊。","說謊在發現之前，用過去完成式 had lied。"]],
 "","","🕵️|查明"],
["show up","phr.","出現；露面",[
 ["He didn't show up for the meeting.","他沒有出席會議。","show up = appear = turn up，出現。"],
 ["Only ten people showed up at the party.","只有十個人來參加派對。","show up 是不及物的，後面接地點要加介系詞 at。"],
 ["She showed up late again this morning.","她今天早上又遲到了。","late 在這裡是副詞，表示「晚」。"]],
 "","","🚪|出現"],
["carry out","phr.","執行；進行",[
 ["The scientists carried out an experiment.","科學家們進行了一項實驗。","carry out an experiment / a survey：進行實驗、調查。"],
 ["We must carry out the plan carefully.","我們必須仔細地執行這個計畫。","must + 原形動詞。"],
 ["The plan was carried out successfully.","這個計畫成功地被執行了。","被動語態 was carried out；副詞 successfully 修飾動詞。"]],
 "","","📋|執行"],
["catch up with","phr.","趕上；跟上",[
 ["Walk slower so that I can catch up with you.","走慢一點，好讓我能趕上你。","so that + 子句：為了、好讓。"],
 ["I missed a week of school, so I need to catch up with my classmates.","我缺課一週，所以需要趕上同學的進度。","catch up with + 人：趕上某人。"],
 ["Go ahead. I'll catch up with you later.","你先走吧，我等一下會趕上你。","go ahead 先走、請便。"]],
 "","","🏃|趕上"],
/* ---------- 字根字首：uni- / bi- / tri- / multi- ---------- */
["unite","v.","聯合；團結",[
 ["The two countries united to fight the disease.","兩國聯手對抗這種疾病。","to fight 是不定詞，表示目的。"],
 ["We should unite to protect our environment.","我們應該團結起來保護環境。","should + 原形動詞：應該。"],
 ["The United States has fifty states.","美國有五十個州。","the United States 就是「聯合起來的各州」，當國名時視為單數。"]],
 "uni=一|-te=動詞字尾","合成一個 → 聯合","🤜🤛|團結"],
["unit","n.","單元；單位",[
 ["We are going to have a test on Unit 3 tomorrow.","我們明天要考第三單元。","be going to + 原形動詞表示預定的未來；Unit 3 當專有名詞，U 大寫。"],
 ["The meter is a unit of length.","公尺是長度的單位。","a unit of + 名詞：……的單位。"],
 ["Our family is a small unit, but we are very close.","我們家是個小家庭，但我們感情很好。","unit 也可以指「一個整體、一組」。"]],
 "uni=一|-t=名詞字尾","一個一個的整體 → 單元、單位","1️⃣|單元"],
["bicycle","n.","腳踏車",[
 ["I ride my bicycle to school every day.","我每天騎腳踏車上學。","ride + 交通工具；bicycle 口語常說 bike。"],
 ["Taiwan is famous for making good bicycles.","台灣以製造好的腳踏車聞名。","be famous for + V-ing：因……而有名。"],
 ["A bicycle has two wheels, but a tricycle has three.","腳踏車有兩個輪子，三輪車則有三個。","bi- 是二、tri- 是三，看字首就知道有幾個輪子。"]],
 "bi-=二|cycle=輪子、圓","兩個輪子 → 腳踏車","@bicycle"],
["triangle","n.","三角形",[
 ["A triangle has three sides.","三角形有三個邊。","tri- 是「三」，angle 是「角」。"],
 ["Please draw a triangle on the board.","請在黑板上畫一個三角形。","祈使句加上 please 比較禮貌。"],
 ["The pizza was cut into eight triangles.","披薩被切成八個三角形。","cut 三態同形，was cut 是被動語態；cut into + 形狀。"]],
 "tri-=三|angle=角","三個角 → 三角形","@triangle"],
["multiply","v.","乘；大量增加",[
 ["If you multiply 3 by 4, you get 12.","3 乘以 4 等於 12。","multiply A by B：A 乘以 B。"],
 ["Three multiplied by four is twelve.","三乘以四等於十二。","multiplied by 是過去分詞片語，修飾 three。"],
 ["The number of bike riders has multiplied in recent years.","騎腳踏車的人數近年大幅增加。","the number of + 複數名詞，主詞是 the number，動詞用單數 has。"]],
 "multi=多|-ply=層、倍","變成很多倍 → 乘、增加","✖️|乘"],
/* ---------- 字根字首：de- / dis- / mis- ---------- */
["depend","v.","依靠；取決於",[
 ["Whether we go or not depends on the weather.","我們去不去要看天氣。","Whether 引導的名詞子句當主詞，視為單數，所以用 depends。"],
 ["Young children depend on their parents.","年幼的孩子依賴父母。","depend on + 人：依靠某人。"],
 ["You can always depend on me.","你永遠可以依靠我。","depend 加 in- 和 -ent 就變成 independent（獨立的）。"]],
 "de-=向下|pend=懸掛","掛在別人下面 → 依靠","🧗|依靠"],
["depart","v.","出發；離開",[
 ["The train departs at 9:30.","火車九點半出發。","時刻表上的固定時間可以用現在式表示未來。"],
 ["We departed from Taipei early in the morning.","我們一大早從台北出發。","depart from + 地點：從……出發；= leave。"],
 ["Please arrive at the gate 30 minutes before the plane departs.","請在飛機起飛前三十分鐘到登機門。","depart 的反義字是 arrive；名詞是 departure。"]],
 "de-=離開|part=分開","分開離去 → 出發、離開","🚉|出發"],
["disease","n.","疾病",[
 ["Heart disease is common among old people.","心臟病在老年人中很常見。","among + 群體：在……之中。"],
 ["Washing your hands can prevent many diseases.","洗手可以預防很多疾病。","動名詞 Washing your hands 當主詞。"],
 ["Mosquitoes can spread diseases.","蚊子會傳播疾病。","spread 三態同形；disease 可數，可以加 s。"]],
 "dis-=不|ease=舒適","身體不舒適 → 疾病","🦠|疾病"],
["discourage","v.","使洩氣；勸阻",[
 ["Don't let one failure discourage you.","別讓一次失敗打擊你。","let + 受詞 + 原形動詞。"],
 ["Her parents discouraged her from going out late at night.","她爸媽勸她不要深夜出門。","discourage + 人 + from + V-ing：勸某人不要做某事。"],
 ["I felt discouraged after the exam.","考完試我覺得很洩氣。","人「感到洩氣」用過去分詞 discouraged；反義字是 encourage。"]],
 "dis-=去除|courage=勇氣","把勇氣拿走 → 使洩氣","😞|洩氣"],
["mistaken","adj.","錯誤的；弄錯的",[
 ["I was mistaken about the time of the meeting.","我把開會時間弄錯了。","be mistaken about + 名詞：對……弄錯了。"],
 ["If I'm not mistaken, the store opens at ten.","如果我沒記錯的話，那家店十點開門。","If I'm not mistaken 是常用的客氣說法：如果我沒弄錯。"],
 ["He had the mistaken idea that English is too hard to learn.","他有個錯誤的想法，認為英文太難學。","the idea that ... 同位語子句，說明 idea 的內容；too ... to V 太……而不能。"]],
 "mis-=錯誤|taken=拿（take 的過去分詞）","拿錯了 → 弄錯的","❌|弄錯"],
["misfortune","n.","不幸；厄運",[
 ["He had the misfortune to lose his job.","他不幸丟了工作。","have the misfortune to V：不幸地……。"],
 ["She never complained about her misfortune.","她從不抱怨自己的不幸。","complain about + 名詞：抱怨……。"],
 ["Misfortunes never come singly.","禍不單行。","英文諺語；misfortune 指「不幸的事」時可數。"]],
 "mis-=不好的|fortune=運氣","不好的運氣 → 不幸","🌧️|不幸"],
/* ---------- 字根：man / manu（手）、ped（腳） ---------- */
["manual","adj./n.","手工的；說明書",[
 ["Read the manual before you use the machine.","使用機器前先讀說明書。","manual 當名詞是「手冊、說明書」，拿在手上看的書。"],
 ["Manual work can be very tiring.","勞力工作可能很累人。","manual 當形容詞「用手的、體力的」；tiring 是「令人疲累的」。"],
 ["This camera has both automatic and manual modes.","這台相機有自動和手動兩種模式。","both A and B：A 和 B 兩者都。"]],
 "manu=手|-al=形容詞字尾","用手的 → 手工的、手冊","📖|說明書"],
["manufacture","v./n.","製造；製造業",[
 ["This factory manufactures bicycles.","這間工廠製造腳踏車。","主詞 This factory 是單數，動詞加 s。"],
 ["Taiwan manufactures many computer chips.","台灣製造許多電腦晶片。","manufacture 指工廠大量製造。"],
 ["Long ago, most things were manufactured by hand.","很久以前，大部分東西都是手工製造的。","被動語態 were manufactured；by hand 用手。"]],
 "manu=手|fact=做|-ure=名詞字尾","用手做出來 → 製造","🏭|製造"],
["manner","n.","方式；（manners）禮貌",[
 ["It's bad manners to talk with your mouth full.","嘴巴塞滿食物時說話很沒禮貌。","manners 表示「禮貌」時用複數；with + 名詞 + 形容詞 表示附帶狀況。"],
 ["She spoke in a gentle manner.","她說話的方式很溫柔。","in a ... manner：以……的方式。"],
 ["Good table manners are important in every culture.","在每個文化中，良好的餐桌禮儀都很重要。","table manners 餐桌禮儀，主詞是複數，用 are。"]],
 "mann=手|-er=名詞字尾","用手處理事情的樣子 → 方式、舉止","🍽️|禮貌"],
["manage","v.","管理；設法做到",[
 ["She managed to finish the report on time.","她設法準時完成了報告。","manage to V：設法做到（而且成功了）。"],
 ["His uncle manages a small restaurant.","他叔叔經營一家小餐廳。","manage 也有「管理、經營」的意思；manager 是經理。"],
 ["How do you manage your time?","你怎麼管理時間？","How do you + 原形動詞？詢問方法。"]],
 "man=手|-age=動作","用手掌控 → 管理","🗂️|管理"],
["pedal","n./v.","踏板；踩踏板",[
 ["Push the pedals with your feet.","用腳踩踏板。","pedal 是用腳踩的板子；複數 pedals。"],
 ["He pedaled hard up the hill.","他用力踩著腳踏車騎上山坡。","pedal 也可以當動詞，過去式 pedaled。"],
 ["A bicycle has two pedals.","腳踏車有兩個踏板。","bi- 是二，ped 是腳，兩隻腳各踩一個踏板。"]],
 "ped=腳|-al=名詞字尾","用腳踩的東西 → 踏板","🦶|踏板"],
["centipede","n.","蜈蚣",[
 ["A centipede has many legs.","蜈蚣有很多隻腳。","centi 是「百」，ped 是「腳」：「百足蟲」。"],
 ["I screamed when I saw a centipede in the bathroom.","我在浴室看到一隻蜈蚣時尖叫了。","when 引導時間子句，前後都用過去式。"],
 ["Don't touch the centipede; it may bite you.","別碰那隻蜈蚣，牠可能會咬你。","may 表示可能；分號連接兩個相關的句子。"]],
 "centi=百|pede=腳","一百隻腳 → 蜈蚣","🐛|蜈蚣"],
/* ---------- 字根：aud（聽）、voc / voice（聲音） ---------- */
["voice","n.","聲音；嗓音",[
 ["She has a beautiful voice.","她有一副好嗓子。","voice 指「人的聲音」。"],
 ["Please lower your voice in the library.","在圖書館請降低音量。","lower 在這裡是動詞「降低」。"],
 ["He spoke in a loud voice so everyone could hear him.","他大聲說話，讓大家都聽得到。","in a loud voice 大聲地；so 在這裡表示「好讓」。"]],
 "","","🎤|嗓音"],
["audible","adj.","聽得見的",[
 ["His voice was barely audible.","他的聲音小到幾乎聽不見。","barely audible 勉強聽得到。"],
 ["Please speak up so that your answer is audible to everyone.","請大聲一點，讓大家都聽得到你的答案。","so that + 子句 表示目的；audible to + 人。"],
 ["The music was audible from the street.","在街上就聽得到那個音樂。","audible 的反義字是 inaudible（聽不見的）。"]],
 "aud=聽|-ible=能……的","能被聽到的 → 聽得見的","👂|聽得見"],
["audio","adj./n.","聲音的；音訊",[
 ["Listen to the audio and answer the questions.","聽音檔並回答問題。","audio 當名詞：聲音、音訊。"],
 ["The museum offers free audio guides.","博物館提供免費的語音導覽。","audio 放在名詞 guides 前面當形容詞用。"],
 ["The video plays, but there is no audio.","影片有在播，但是沒有聲音。","There is no + 名詞：沒有……。"]],
 "aud=聽|-io=名詞字尾","聽的東西 → 聲音、音訊","🎧|音訊"],
["auditorium","n.","禮堂",[
 ["The graduation ceremony will be held in the auditorium.","畢業典禮將在禮堂舉行。","will be held 是未來式的被動語態，= will take place。"],
 ["Our school auditorium can seat 800 people.","我們學校禮堂可以容納八百人。","seat 在這裡是動詞「容納……人入座」。"],
 ["All the students gathered in the auditorium for the speech.","全體學生聚集在禮堂聽演講。","gather 聚集；for + 名詞 表示目的。"]],
 "audit=聽|-orium=場所","大家來聽的地方 → 禮堂","🏛️|禮堂"]
];

/* ---------- 記憶小撇步（沒有字根可拆的字） ---------- */
Object.assign(MEMO, {
  "beauty":"beauty（n.）→ beautiful（adj.）→ beautifully（adv.）：y 變 i 再加 ful，最後加 ly。",
  "dead":"die（v.）死 → dead（adj.）死的 → death（n.）死亡。「死了多久」用 be dead for，不用 die for。",
  "death":"把 dead 的 d 換成 th 就是名詞 death，就像 true → truth、grow → growth。",
  "belief":"believe（v.）把 ve 換成 f 就是名詞 belief，跟 relieve → relief 一樣。",
  "lose":"lose 只有一個 o：東西弄丟了，所以少一個 o；三態 lose-lost-lost。",
  "loss":"lose（v.）→ loss（n.）：動詞結尾 se 換成 ss 就變名詞。",
  "loose":"loose 有兩個 o：褲子鬆鬆的，多出一個 o 的空間；唸 [lus]，尾音是 s。",
  "breath":"breath 名詞沒有 e，唸短音 [brɛθ]；動詞 breathe 多一個 e，唸長音 [brið]。",
  "prove":"prove（v.）證明 → proof（n.）證據：ve 換成 f 就是名詞，跟 believe → belief 一樣。",
  "safe":"safe（adj.）→ safely（adv.）→ safety（n.）；save（v.）是「救、存」，別搞混。",
  "weigh":"weigh 的 gh 不發音，唸 [we]；名詞是 weight（重量）；lose weight 減重、gain weight 增重。",
  "pride":"proud（adj.）→ pride（n.）：take pride in = be proud of。",
  "rise":"rise 自己升起，不接受詞（rise-rose-risen）；raise 有 a，要舉起 a thing（raise-raised-raised）。",
  "lay":"lay 放（lay-laid-laid）；lie 躺（lie-lay-lain）；lie 說謊（lie-lied-lied）。lay 是及物，後面一定有東西。",
  "tell":"say 說內容、tell 告訴人、speak 說語言、talk 聊天：tell 後面先接「人」。",
  "talk":"talk 是「聊」，後面接 to / with 人、about 事：talk to you、talk about it。",
  "bring":"bring 帶「來」（往我這邊），take 帶「去」（從我這邊離開）。三態 bring-brought-brought。",
  "cost":"四個「花」：事物 cost 人錢；人 spend 錢 on 物；It takes 人 時間 to V；人 pay 錢 for 物。",
  "wear":"wear 是「穿著」的狀態，put on 是「穿上」的動作，dress 後面接人（dress the baby）。",
  "quite":"quite 相當（一個音節 [kwaɪt]，e 不發音）；quiet 安靜（兩個音節 [ˈkwaɪət]）。",
  "through":"through 穿過（有 r，穿過 road）；though 雖然；thought 想法（think 的過去式）；thorough 徹底的。",
  "harm":"harm（n./v.）→ harmful 有害的 → harmless 無害的；do harm to 有害 ↔ do good to 有益。",
  "favor":"favor 恩惠 → favorite 最喜歡的。Do me a favor = 幫我一個忙；in favor of = 贊成。",
  "trouble":"have trouble / difficulty / a hard time + V-ing：做……有困難，三個都接 V-ing。",
  "take part in":"take part in = participate in = join：「拿一部分（part）在裡面（in）」→ 參加。",
  "take place":"take place 舉行、發生，沒有被動，不說 was taken place。",
  "take care of":"take care of = look after：「拿出關心（care）給……」→ 照顧。",
  "make sense":"make sense 是「做出意義」→ 有道理；make sense of 是「理解」。",
  "make fun of":"make fun of：拿別人「做出樂趣」→ 取笑；被動 be made fun of，of 別漏掉。",
  "take notes":"take notes 做筆記，notes 用複數；take a note of 也可以表示「記下」。",
  "get over":"get over：「越過（over）」困難 → 克服；代名詞放後面：get over it。",
  "get rid of":"get rid of：「讓自己擺脫（rid）……」→ 去除、丟掉。",
  "look up to":"look up to：抬頭「往上看」某人 → 尊敬；反義 look down on。",
  "look down on":"look down on：從上往下「看低」某人 → 看不起；反義 look up to。",
  "look after":"look after：一直跟在「後面（after）看著」→ 照顧 = take care of。",
  "look up":"look up：往上翻找 → 查閱；代名詞放中間：look it up。",
  "take after":"take after：「跟在（after）長輩後面拿（take）到」遺傳 → 像父母。",
  "take off":"take off：把衣服拿「離開（off）」身體 → 脫下；飛機離開地面 → 起飛。",
  "turn out":"turn out：最後「轉（turn）出來（out）」的樣子 → 結果是。",
  "turn down":"turn down：把音量「轉低」；把邀請「往下轉」→ 拒絕。",
  "give in":"give in：把自己「交（give）進去（in）」→ 屈服；give up 是放棄，不一樣。",
  "put up with":"put up with = stand = bear = tolerate：三個字一起才是「忍受」。",
  "put off":"put off = postpone：把事情「放（put）到一邊（off）」→ 延期，後面接 V-ing。",
  "put out":"put out：把火「放出去（out）」→ 熄滅；put out a fire 滅火。",
  "run out of":"人 run out of 物（用完某物）；物 run out（某物用完了），沒有 of。",
  "find out":"find out：把真相「找出來（out）」→ 查明、發現。",
  "show up":"show up = turn up = appear：「出現（show）在上面（up）」→ 露面。",
  "carry out":"carry out：把計畫「搬出來（out）」做 → 執行、進行。",
  "catch up with":"catch up with：從後面「抓（catch）上來（up）」→ 趕上某人。",
  "voice":"voice 是人的嗓音；sound 是一般聲音；noise 是噪音。字根 voc / voice 都是「聲音」。"
});

/* ---------- 用法專題（文法） ---------- */
const S1_V1_GRAMMAR = [
{ id:"g1", title:"詞性家族：名詞、動詞、形容詞、副詞",
  intro:"同一個字常有名詞、動詞、形容詞、副詞四種樣子。學測的詞性題，就是看空格的位置決定要用哪一種。",
  table:[["名詞","動詞","形容詞","副詞"],["success","succeed","successful","successfully"],["difference","differ","different","differently"],["beauty","beautify","beautiful","beautifully"],["death","die","dead","—"],["safety","save（救）","safe","safely"],["effect","affect","effective","effectively"]],
  points:[
   "看位置：冠詞（a、the）、所有格（my、his）、形容詞後面要用名詞：the success、his success。",
   "看位置：助動詞、to 後面要用原形動詞：will succeed、want to succeed。",
   "看位置：be 動詞、連綴動詞（look、feel、become）後面，和名詞前面要用形容詞：She looks successful.",
   "看位置：修飾一般動詞、形容詞或整句話要用副詞：They finished it successfully.",
   "學測陷阱：die、dead、death 不能混用。He has been dead for two years. 不能寫成 has died for two years。",
   "學測陷阱：affect 是動詞、effect 是名詞：affect = have an effect on。alive 不能放在名詞前面，要說 a living thing。"],
  ex:[
   ["Her hard work led to her success.","她的努力帶來了成功。","所有格 her 後面要接名詞 success。"],
   ["If you practice every day, you will succeed.","如果你每天練習，你就會成功。","助動詞 will 後面接原形動詞 succeed。"],
   ["The fish is still alive.","這條魚還活著。","be 動詞後面接形容詞 alive。"],
   ["She solved the problem successfully.","她成功地解決了這個問題。","修飾動詞 solved 用副詞 successfully。"],
   ["The new rule will affect every student; it will have a big effect on us.","新規定會影響每位學生，對我們影響很大。","affect（v.）= have an effect on（n.）。"]]},
{ id:"g2", title:"易混淆字：長得像、意思不一樣",
  intro:"很多 Level 1～2 的字長得很像，或是中文意思差不多，用法卻完全不同。只要記住「及物不及物」、「拼字差一點」和「意思差一點」三種陷阱就好。",
  table:[["易混淆字","差別","例句"],["rise / raise","rise 自己升起（不及物）；raise 舉起東西（及物）","The sun rises. / Raise your hand."],["lie / lay","lie 躺（lie-lay-lain）；lay 放（lay-laid-laid）","He lay on the bed. / She laid the book down."],["say / tell / speak / talk","say 說內容、tell 告訴人、speak 說語言、talk 聊天","Tell me the truth."],["spend / cost / take / pay","人 spend；事物 cost；It takes；人 pay ... for","The bag cost me $500."],["affect / effect","affect 動詞；effect 名詞","It affects me. / It has an effect on me."],["historic / historical","historic 有歷史意義的；historical 和歷史有關的","a historic day / a historical novel"],["economic / economical","economic 經濟上的；economical 節省的","economic growth / an economical car"]],
  points:[
   "不及物動詞後面不能接受詞：rise、lie（躺）；及物動詞後面一定有受詞：raise、lay（放）。",
   "花費四兄弟：人 spend 錢 on 物；事物 cost 人 錢；It takes 人 時間 to V；人 pay 錢 for 物。",
   "加了 -ly 意思會變：hard 努力 → hardly 幾乎不；late 晚 → lately 最近；near 靠近 → nearly 幾乎。",
   "拼字差一個字母：quite 相當 / quiet 安靜；loose 鬆的 / lose 失去；through 穿過 / though 雖然；beside 在旁邊 / besides 除了……還有。",
   "名詞動詞成對：advice（n.，不可數）/ advise（v.）；breath（n.）/ breathe（v.）。",
   "意思差一點：alone 單獨一人（客觀）/ lonely 寂寞（主觀）；wear 穿著（狀態）/ put on 穿上（動作）；bring 帶來 / take 帶走。"],
  ex:[
   ["Prices have risen, so the shop raised the price of coffee.","物價上漲了，所以這家店調漲了咖啡的價格。","rise 不接受詞；raise 接受詞 the price。"],
   ["She laid the baby on the bed, and the baby lay there quietly.","她把寶寶放在床上，寶寶安靜地躺在那裡。","laid 是 lay（放）的過去式；lay 是 lie（躺）的過去式。"],
   ["I spent two hours on the project, and it cost me 300 dollars.","我花了兩小時做這個專題，還花了三百元。","人 spend 時間 on；事物 cost 人 錢。"],
   ["I can hardly hear you. Could you speak louder?","我幾乎聽不到你說話，可以大聲一點嗎？","hardly 是「幾乎不」，不是「努力地」。"],
   ["The doctor advised me to rest, and I took his advice.","醫生建議我休息，我聽從了他的建議。","advise 是動詞，advice 是不可數名詞。"]]},
{ id:"g3", title:"常考搭配詞：make / do / take / have / pay / catch",
  intro:"英文有很多「固定搭配」，動詞和名詞要配對才對，不能從中文直翻。像「做決定」是 make a decision，不是 do a decision。",
  table:[["動詞","常見搭配"],["make","make a decision、make a mistake、make friends、make money、make noise、make sense、make fun of、make a difference"],["do","do homework、do the dishes、do one's best、do harm to、do sb a favor、do exercise"],["take","take part in、take place、take care of、take notes、take a break、take a walk"],["have","have fun、have a good time、have trouble (in) V-ing、have an effect on"],["pay","pay attention to、pay a visit to、pay for"],["catch","catch a cold、catch the bus、catch one's breath、catch fire"]],
  points:[
   "make 通常是「製造、產生出來」：make a mistake、make noise、make a decision。",
   "do 通常是「做工作、做事」：do homework、do the dishes、do one's best。",
   "have trouble / difficulty + V-ing：做……有困難，不能接 to V。",
   "take place（舉行、發生）沒有被動語態：不能說 The meeting was taken place.",
   "片語裡的介系詞不能漏：take part in、take care of、make fun of、pay attention to；被動時也要保留：He was made fun of.",
   "pay attention to 的 to 是介系詞，後面接名詞或 V-ing：Pay attention to listening."],
  ex:[
   ["Eating too much junk food does harm to your health.","吃太多垃圾食物對健康有害。","do harm to：有害；動名詞主詞用單數動詞 does。"],
   ["Could you do me a favor and take care of my cat?","你可以幫我個忙，照顧一下我的貓嗎？","do sb a favor 和 take care of 都是固定搭配。"],
   ["The festival takes place every October, and many students take part in it.","這個節慶每年十月舉行，很多學生都會參加。","take place 舉行；take part in 參加。"],
   ["I have trouble understanding his English because he speaks so fast.","我很難聽懂他的英文，因為他講得太快了。","have trouble + V-ing。"],
   ["Your explanation makes sense; thank you for making a difference.","你的解釋很有道理，謝謝你帶來改變。","make sense 有道理；make a difference 帶來影響。"]]},
{ id:"g4", title:"常考片語動詞：get / look / take / turn / give / put",
  intro:"片語動詞是「動詞 + 介副詞」組成的新意思，像 look up to 不是「往上看向」，而是「尊敬」。學測克漏字、文意選填很愛考。",
  table:[["動詞","片語","意思"],["get","get over / get rid of","克服 / 擺脫"],["look","look up to / look down on / look after / look up","尊敬 / 看不起 / 照顧 / 查閱"],["take","take after / take off","像（長輩）/ 脫下、起飛"],["turn","turn out / turn down","結果是 / 拒絕、調低"],["give","give in / give up","屈服 / 放棄"],["put","put up with / put off / put out","忍受 / 延期 / 熄滅"]],
  points:[
   "可分片語（look up、turn down、take off、put off）：受詞是代名詞時一定放中間：look it up，不能說 look up it。",
   "不可分片語（get over、look after、take after）：受詞一律放後面：get over it、look after her。",
   "三個字的片語（look up to、put up with、run out of、catch up with）不可拆開，被動時也要全部保留：He is looked up to.",
   "put off 後面接 V-ing：put off doing homework；turn out to be + 名詞／形容詞。",
   "人 run out of 物；物 run out：We ran out of time. / Time ran out.",
   "同義換句常考：put off = postpone、put up with = stand、turn down = refuse、look after = take care of、look up to = respect、take after = resemble。"],
  ex:[
   ["It took me weeks to get over the loss of my dog.","我花了好幾週才走出失去狗狗的傷痛。","get over 克服、走出。"],
   ["She takes after her father, and everyone looks up to him.","她很像她爸爸，而大家都很尊敬她爸爸。","take after 像長輩；look up to 尊敬。"],
   ["The game was put off, but it turned out to be a good thing.","比賽延期了，但結果是件好事。","put off 延期；turn out to be 結果是。"],
   ["I can't put up with the noise, so I turned the music down.","我受不了噪音，所以把音樂關小聲了。","put up with 忍受；turn down 可分，受詞可放中間。"],
   ["If you don't know the word, look it up instead of giving in.","如果不懂那個字，就去查，不要輕易投降。","代名詞 it 放在 look 和 up 中間；instead of + V-ing。"]]}
];

/* ---------- 測驗 ---------- */
const S1_V1_QUIZ = [
 ["She is a very ___ writer.",["success","succeed","successful","successfully"],2,"名詞 writer 前面要用形容詞 successful。","g1"],
 ["He ___ in passing the exam last year.",["succeeded","success","successful","successfully"],0,"主詞 He 後面缺動詞，last year 是過去，用 succeeded；succeed in + V-ing。","g1"],
 ["My grandfather has been ___ for five years.",["died","dead","death","die"],1,"表示「死了多久」用 be dead + for 一段時間；die 是瞬間動作，不能搭配 for five years。","g1"],
 ["The ___ of her pet made her cry.",["die","dead","death","dying"],2,"the ... of 中間要放名詞：death。","g1"],
 ["Luckily, all the passengers were found ___.",["live","alive","life","lively"],1,"be found 後面接形容詞當補語，「活著的」是 alive；lively 是「活潑的」。","g1"],
 ["Lack of sleep can ___ your health.",["effect","effective","affection","affect"],3,"助動詞 can 後面要接原形動詞 affect；effect 是名詞。","g1"],
 ["She sang ___ at the concert last night.",["beauty","beautiful","beautifully","beautify"],2,"修飾動詞 sang 要用副詞 beautifully。","g1"],
 ["What is the ___ of this river?",["long","longer","lengthen","length"],3,"the ... of 中間要放名詞：length（長度）。","g1"],
 ["He takes great ___ in his work.",["pride","proud","proudly","prouder"],0,"take pride in = be proud of，形容詞 great 後面接名詞 pride。","g1"],
 ["The sun ___ in the east.",["raises","rises","lays","lies"],1,"太陽「自己升起」，用不及物動詞 rise；raise 後面要有受詞。","g2"],
 ["Please ___ the book on the desk.",["lay","lie","rise","lying"],0,"後面有受詞 the book，要用及物動詞 lay（放）；lie（躺）不接受詞。","g2"],
 ["The new phone ___ me 20,000 dollars.",["spent","took","cost","paid"],2,"事物當主詞：事物 + cost + 人 + 錢。spend 和 pay 的主詞要是人。","g2"],
 ["She lives ___, but she never feels lonely.",["lonely","along","lone","alone"],3,"修飾動詞 lives 表示「獨自」用 alone；lonely 是「寂寞的」。","g2"],
 ["I was so tired that I could ___ keep my eyes open.",["hard","hardly","harder","hardness"],1,"hardly 是「幾乎不」，本身就有否定意思。","g2"],
 ["Have you talked to Amy ___? I haven't seen her for weeks.",["lately","late","later","latest"],0,"lately = recently，最近，常和現在完成式一起用。","g2"],
 ["The doctor ___ me to drink more water.",["advice","advised","suggested","said"],1,"advise + 人 + to V；advice 是名詞；suggest 和 say 不能接「人 + to V」。","g2"],
 ["Can you ___ the difference between the twins?",["say","speak","talk","tell"],3,"tell the difference 分辨差別，是固定說法。","g2"],
 ["The train went ___ a long tunnel.",["though","thought","through","thorough"],2,"「穿過」是介系詞 through；though 是「雖然」，thought 是 think 的過去式。","g2"],
 ["Could you do me a ___?",["help","favor","hand","service"],1,"do + 人 + a favor：幫某人一個忙。help 和 hand 不和 do 搭配（要說 give me a hand）。","g3"],
 ["Smoking does ___ to your health.",["harm","harmful","harmless","hurt"],0,"do harm to：對……有害，harm 在這裡是名詞。","g3"],
 ["I have trouble ___ new English words.",["remember","to remember","remembering","remembered"],2,"have trouble (in) + V-ing：做……有困難。","g3"],
 ["The concert will ___ next Saturday in the park.",["take part","take care","take notes","take place"],3,"take place 舉行、發生。","g3"],
 ["Over 300 students ___ the speech contest.",["took part in","took place","took care of","made fun of"],0,"take part in 參加，後面接比賽、活動。","g3"],
 ["Your story doesn't ___. Can you tell it again?",["do sense","take sense","have sense","make sense"],3,"make sense 有道理、講得通，固定搭配 make。","g3"],
 ["It's rude to ___ people who look different.",["do fun of","make fun of","make fun","take fun of"],1,"make fun of 取笑，of 不能少。","g3"],
 ["Please ___ attention to the teacher.",["make","take","pay","do"],2,"pay attention to 注意，固定搭配 pay。","g3"],
 ["Don't worry about the result. Just ___ your best.",["make","do","take","have"],1,"do one's best 盡力，固定搭配 do。","g3"],
 ["She ___ her mother; they both have curly hair and love music.",["takes after","takes off","looks after","looks up"],0,"take after 像（父母長輩）。","g4"],
 ["The plane will ___ in ten minutes.",["take after","take off","turn out","put off"],1,"take off 起飛。","g4"],
 ["I can't ___ the noise anymore. It's driving me crazy.",["put off","put out","put up with","give in"],2,"put up with 忍受 = stand。","g4"],
 ["The baseball game was ___ because of the heavy rain.",["put out","put off","put up with","turned out"],1,"put off 延期 = postpone。put out 是熄滅。","g4"],
 ["If you don't know this word, you can ___.",["look up it","look after it","look it after","look it up"],3,"look up 是可分片語，受詞是代名詞時要放中間：look it up。","g4"],
 ["We were worried, but the test ___ to be quite easy.",["turned down","gave in","showed up","turned out"],3,"turn out to be 結果是。","g4"],
 ["We have ___ sugar. Can you buy some?",["run out","run out of","ran out","run off"],1,"人 + run out of + 東西；have 後面用 p.p.，run 的 p.p. 是 run。","g4"],
 ["The firefighters ___ the fire in an hour.",["put out","put off","took off","carried out"],0,"put out 熄滅（火）。","g4"],
 ["Many young players ___ Wang Chien-ming because of his hard work.",["look down on","look up to","look after","take after"],1,"look up to 尊敬、仰慕。","g4"]
];

/* ---------- 4 堂用法專題課（安安老師） ---------- */
const S1_V1_CLASS = {
g1:[
 {say:"高一同學好！今天來認識「詞性家族」。同一個字常常有四兄弟：名詞、動詞、形容詞、副詞。看黑板上的成功家族！", board:[["success（n.）",["success"]],["succeed（v.）",["succeed"]],["successful（adj.）",["successful"]],["successfully（adv.）",["successfully"]]]},
 {say:"學測的詞性題不考你中文，而是考你「看位置」。冠詞、所有格、形容詞後面放名詞：{his success}。助動詞和 to 後面放原形動詞：{will succeed}。", board:[["his success",["success"]],["You will succeed.",["succeed"]]]},
 {say:"be 動詞和名詞前面放形容詞：{a successful writer}。修飾動詞就用副詞：{finished it successfully}。", board:[["a successful writer",["successful"]],["They finished it successfully.",["successfully"]]]},
 {say:"口訣記起來！", chant:"冠詞後面放名詞，助動詞後放動詞，名詞前面形容詞，修飾動詞用副詞！"},
 {ask:{say:"考考你！", q:"She is a very ___ writer.", opts:["success","successful","successfully"], ans:1,
   ok:"答對！名詞 writer 前面要用形容詞 successful。", bad:{0:"success 是名詞，不能直接修飾 writer，要用形容詞。",2:"successfully 是副詞，用來修飾動詞，不能修飾名詞 writer。"},
   again:{q:"He finished the race ___.", opts:["successful","successfully"], ans:1, exp:"修飾動詞 finished 要用副詞 successfully。"}}},
 {say:"接下來是最常考的死亡三兄弟：{die} 是動詞，{dead} 是形容詞，{death} 是名詞。重點來了：死了多久，要說 {He has been dead for ten years.}，因為 die 是一瞬間的動作，不能接 for ten years。", board:[["He has been dead for ten years.",["dead"]],["He has died for ten years.",[],true]]},
 {ask:{q:"My grandfather has been ___ for five years.", opts:["died","dead","death"], ans:1,
   ok:"厲害！be dead for + 一段時間，表示死亡的狀態持續多久。", bad:{0:"die 是瞬間動作，不能和 for five years 一起用，要用 be dead。",2:"death 是名詞，has been 後面這裡要用形容詞 dead。"},
   again:{q:"The ___ of his dog made him sad.", opts:["dead","death"], ans:1, exp:"the ... of 中間放名詞 death。"}}},
 {say:"還有一個陷阱字：{alive} 活著的。它只能放在 be 動詞後面，不能放在名詞前面！名詞前面要用 {living}：{a living thing}。", board:[["The fish is still alive.",["alive"]],["a living thing",["living"]],["an alive thing",[],true]]},
 {say:"最後一組：{affect} 和 {effect}。affect 是動詞，effect 是名詞。", board:[["Sleep affects your grades.",["affects"]],["Sleep has an effect on your grades.",["effect"]]]},
 {say:"口訣！", chant:"a 開頭是動作，e 開頭是結果：affect 動詞、effect 名詞！"},
 {ask:{say:"最後一題！", q:"Lack of sleep can ___ your health.", opts:["effect","affect","effective"], ans:1,
   ok:"完美！can 後面接原形動詞 affect。", bad:{0:"effect 是名詞，can 後面要接動詞 affect。",2:"effective 是形容詞「有效的」，can 後面要接動詞。"},
   again:{q:"Music has a great ___ on my mood.", opts:["affect","effect"], ans:1, exp:"a great 後面要接名詞 effect；have an effect on。"}}},
 {say:"詞性家族過關！口訣：冠詞後面放名詞、助動詞後放動詞、名詞前面形容詞、修飾動詞用副詞；死了多久用 be dead for；affect 動詞、effect 名詞！", end:true}
],
g2:[
 {say:"今天來破解「易混淆字」！第一組是「自己動」和「動別人」。{rise} 是自己升起，後面沒有受詞；{raise} 是把東西舉起來，後面一定要有受詞。", board:[["The sun rises in the east.",["rises"]],["Raise your hand.",["Raise"]]]},
 {say:"另一組超難的：{lie} 躺，三態是 lie、lay、lain；{lay} 放，三態是 lay、laid、laid。注意 lay 同時是「躺」的過去式！", board:[["lie - lay - lain（躺）",["lie","lay","lain"]],["lay - laid - laid（放）",["lay","laid"]]]},
 {say:"口訣！", chant:"自己動不加受詞，動別人要加受詞！"},
 {ask:{q:"Please ___ the book on the desk.", opts:["lie","lay"], ans:1,
   ok:"對！後面有受詞 the book，要用 lay（放）。", bad:{0:"lie 是「躺」，後面不能接受詞；把書「放」下要用 lay。"},
   again:{q:"Prices ___ every year.", opts:["rise","raise"], ans:0, exp:"物價自己上升，沒有受詞，用 rise。"}}},
 {say:"第二種陷阱：「花費四兄弟」。人 {spend} 錢 on 東西；事物 {cost} 人 錢；{It takes} 人 時間 to V；人 {pay} 錢 for 東西。看主詞是人還是東西！", board:[["I spent $500 on the bag.",["spent"]],["The bag cost me $500.",["cost"]],["It took me an hour to finish it.",["took"]],["I paid $500 for the bag.",["paid"]]]},
 {ask:{q:"The new phone ___ me 20,000 dollars.", opts:["spent","cost","paid"], ans:1,
   ok:"讚！主詞是東西（phone），用 cost。", bad:{0:"spend 的主詞要是人，phone 不會自己花錢。",2:"pay 的主詞也要是人，而且要說 pay ... for。"},
   again:{q:"I ___ two hours on my homework.", opts:["spent","cost","took"], ans:0, exp:"主詞是人，花時間在某事上：spend 時間 on。"}}},
 {say:"第三種陷阱：加了 <<ly>> 意思完全變了！{hard} 努力，{hardly} 幾乎不；{late} 晚，{lately} 最近；{near} 靠近，{nearly} 幾乎。", board:[["hard → hardly（幾乎不）",["hardly"]],["late → lately（最近）",["lately"]],["near → nearly（幾乎）",["nearly"]]]},
 {say:"口訣！", chant:"hard 努力 hardly 不，late 晚了 lately 最近！"},
 {ask:{q:"I was so tired that I could ___ keep my eyes open.", opts:["hard","hardly"], ans:1,
   ok:"對！hardly 是「幾乎不」，累到眼睛幾乎張不開。", bad:{0:"hard 是「努力地」，這裡要表達「幾乎不能」，用 hardly。"},
   again:{q:"Have you seen Tom ___?", opts:["late","lately"], ans:1, exp:"lately 是「最近」，常和現在完成式一起用。"}}},
 {say:"最後一種：拼字只差一點點！{quite} 相當、{quiet} 安靜；{lose} 失去、{loose} 鬆的；{through} 穿過、{though} 雖然。還有 {advise} 是動詞、{advice} 是名詞。", board:[["quite / quiet",["quite","quiet"]],["lose / loose",["lose","loose"]],["through / though",["through","though"]],["advise（v.）/ advice（n.）",["advise","advice"]]]},
 {ask:{say:"最後一題！", q:"The train went ___ a long tunnel.", opts:["though","through","thought"], ans:1,
   ok:"太棒了！穿過隧道是 through，有 r 的那個。", bad:{0:"though 是連接詞「雖然」，不能表示穿過。",2:"thought 是 think 的過去式或名詞「想法」，不是穿過。"},
   again:{q:"Please be ___. The baby is sleeping.", opts:["quite","quiet"], ans:1, exp:"quiet 是「安靜的」；quite 是「相當」。"}}},
 {say:"易混淆字過關！複習：自己動不加受詞、動別人要加受詞；花費看主詞是人還是東西；加了 ly 意思會變；拼字差一點要小心！經濟這組也順便記：economic 經濟上的、economical 節省的。", end:true}
],
g3:[
 {say:"今天學「搭配詞」！中文都說「做」，英文卻有 make、do、take 好幾種。像「做決定」是 {make a decision}，「做作業」是 {do homework}，「做筆記」是 {take notes}。", board:[["make a decision",["make"]],["do homework",["do"]],["take notes",["take"]]]},
 {say:"大方向：{make} 是「製造、產生出新的東西」：make a mistake、make noise、make friends。{do} 是「做工作、做事」：do the dishes、do one's best。", board:[["make a mistake / make noise",["make"]],["do the dishes / do one's best",["do"]]]},
 {say:"口訣！", chant:"make 是做出來，do 是去做事！"},
 {ask:{q:"Don't worry about the result. Just ___ your best.", opts:["make","do"], ans:1,
   ok:"答對！do one's best 盡力，是固定搭配。", bad:{0:"盡力是 do one's best，不是 make。"},
   again:{q:"Please don't ___ so much noise.", opts:["do","make"], ans:1, exp:"make noise 製造噪音。"}}},
 {say:"還有幾個 make 和 do 的常考片語：{make sense} 有道理、{make fun of} 取笑、{do harm to} 有害、{do me a favor} 幫我個忙。", board:[["make sense / make fun of",["make"]],["do harm to / do me a favor",["do"]]]},
 {say:"再來是 take 家族：{take part in} 參加、{take place} 舉行、{take care of} 照顧。特別注意：take place 沒有被動！不能說 was taken place。", board:[["take part in the contest",["take part in"]],["The concert will take place on Friday.",["take place"]],["The concert was taken place.",[],true]]},
 {ask:{q:"Over 300 students ___ the speech contest.", opts:["took part in","took place","took care of"], ans:0,
   ok:"讚！參加比賽是 take part in。", bad:{1:"take place 是「舉行」，主詞要是活動，不是學生。",2:"take care of 是「照顧」，不是參加。"},
   again:{q:"The festival will ___ next week.", opts:["take place","take part"], ans:0, exp:"活動「舉行」用 take place。"}}},
 {say:"have 和 pay 也有固定搭配。{have trouble} 後面接 V-ing：{I have trouble remembering words.}。{pay attention to} 注意：to 是介系詞喔！", board:[["I have trouble remembering words.",["have trouble","remembering"]],["Pay attention to the teacher.",["Pay attention to"]]]},
 {say:"口訣！", chant:"have trouble 加 ing，pay attention 加 to！"},
 {ask:{q:"I have trouble ___ new English words.", opts:["remember","to remember","remembering"], ans:2,
   ok:"完美！have trouble + V-ing。", bad:{0:"trouble 後面不能直接接原形動詞，要用 V-ing。",1:"have trouble 不接 to V，要接 V-ing。"},
   again:{q:"Please ___ attention to the road.", opts:["make","pay","take"], ans:1, exp:"pay attention to 注意。"}}},
 {say:"最後是 catch：{catch a cold} 感冒、{catch the bus} 趕上公車、{catch up with} 趕上某人。片語裡的介系詞一個都不能少，被動也要保留：{He was made fun of.}", board:[["catch a cold / catch the bus",["catch"]],["He was made fun of by others.",["made fun of"]]]},
 {ask:{say:"最後一題！", q:"It's rude to ___ people who look different.", opts:["make fun","make fun of","do fun of"], ans:1,
   ok:"太強了！make fun of，of 一定要有。", bad:{0:"少了 of！取笑某人是 make fun of + 人。",2:"取笑是 make fun of，不用 do。"},
   again:{q:"Could you do me a ___?", opts:["favor","help"], ans:0, exp:"do + 人 + a favor 幫某人一個忙。"}}},
 {say:"搭配詞過關！口訣：make 是做出來、do 是去做事；take place 沒有被動；have trouble 加 ing、pay attention 加 to！", end:true}
],
g4:[
 {say:"最後一課：片語動詞！動詞加上 up、out、off、over 這些小字，就會變出全新的意思。像 {look up to}，不是往上看，而是「尊敬」。", board:[["look up to = respect",["look up to"]],["look down on = 看不起",["look down on"]]]},
 {say:"先學 look 家族：{look up to} 尊敬、{look down on} 看不起、{look after} 照顧、{look up} 查字典。", board:[["look up to / look down on",["up to","down on"]],["look after = take care of",["after"]],["look up the word",["up"]]]},
 {say:"口訣！", chant:"往上看是尊敬，往下看是看不起，跟在後面看是照顧！"},
 {ask:{q:"Many young players ___ Wang Chien-ming.", opts:["look down on","look up to","look after"], ans:1,
   ok:"答對！look up to 尊敬、仰慕。", bad:{0:"look down on 是「看不起」，意思相反喔。",2:"look after 是「照顧」，不是尊敬。"},
   again:{q:"Who will ___ your dog when you travel?", opts:["look after","look up"], ans:0, exp:"look after 照顧 = take care of。"}}},
 {say:"重要觀念：有些片語可以「拆開」。受詞是代名詞時，一定要放中間！說 {look it up}，不能說 look up it。{turn it down}、{take it off} 也一樣。", board:[["look it up",["it"]],["look up it",[],true],["turn the music down",["the music"]]]},
 {say:"口訣！", chant:"代名詞，夾中間！"},
 {ask:{q:"If you don't know this word, you can ___.", opts:["look up it","look it up"], ans:1,
   ok:"讚！代名詞 it 要夾在 look 和 up 中間。", bad:{0:"代名詞不能放在 up 後面，要夾中間：look it up。"},
   again:{q:"The music is too loud. Please ___.", opts:["turn it down","turn down it"], ans:0, exp:"代名詞夾中間：turn it down。"}}},
 {say:"再來 take、turn、give：{take after} 像父母、{take off} 脫下或起飛、{turn out} 結果是、{turn down} 拒絕、{give in} 屈服。注意 give in 和 give up 不一樣，give up 是放棄。", board:[["She takes after her mom.",["takes after"]],["It turned out to be easy.",["turned out"]],["He never gives in.",["gives in"]]]},
 {say:"最後是 put 家族：{put up with} 忍受、{put off} 延期、{put out} 熄滅。put off 後面接 V-ing：{Don't put off doing your homework.}", board:[["put up with the noise",["put up with"]],["Don't put off doing your homework.",["put off","doing"]],["put out the fire",["put out"]]]},
 {ask:{q:"The baseball game was ___ because of the rain.", opts:["put out","put off","put up with"], ans:1,
   ok:"太棒了！put off 延期 = postpone。", bad:{0:"put out 是熄滅火，比賽不會被熄滅喔。",2:"put up with 是忍受，比賽不能被忍受。"},
   again:{q:"I can't ___ his bad temper anymore.", opts:["put up with","put off"], ans:0, exp:"put up with 忍受 = stand。"}}},
 {say:"學測愛考同義換句，記起來：put off = postpone、put up with = stand、turn down = refuse、look after = take care of、take after = resemble。", board:[["put off = postpone",["postpone"]],["turn down = refuse",["refuse"]],["take after = resemble",["resemble"]]]},
 {ask:{say:"最後一題！", q:"We were worried, but the test ___ to be quite easy.", opts:["turned down","turned out","gave in"], ans:1,
   ok:"完美！turn out to be 結果是。", bad:{0:"turn down 是拒絕或調低，不能接 to be。",2:"give in 是屈服，意思不對。"},
   again:{q:"She ___ her father; they both love music.", opts:["takes after","takes off"], ans:0, exp:"take after 像（父母長輩）。"}}},
 {say:"片語動詞過關！口訣：往上看尊敬、往下看看不起；代名詞夾中間；put off 加 ing。今天的用法專題全部上完，去挑戰測驗吧！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S1_V1_ROOTS = [
  {id:"r1", title:"數字字首：uni- / bi- / tri- / multi-"},
  {id:"r2", title:"字首：de- / dis- / mis-（向下、相反、錯誤）"},
  {id:"r3", title:"字根：man / manu（手）、ped（腳）"},
  {id:"r4", title:"字根：aud（聽）、voc / voice（聲音）"}
];
const S1_V1_ROOT_CLASS = {
r1:[
 {say:"高一同學好！今天學會「數字字首」，看到字首就知道有幾個！第一個：<<uni>>，意思是「一」。", board:[["uni = 一",["uni"],false,true]]},
 {say:"{unite} 合成一個，就是聯合、團結；{unit} 一個整體，就是單元、單位。還有你天天穿的 {uniform}，大家都一個樣子，就是制服！", board:[["uni + te = unite",["uni"],false,true],["uni + t = unit",["uni"],false,true],["uni + form = uniform",["uni"],false,true]]},
 {say:"口訣！", chant:"uni 是一，大家合一起！"},
 {ask:{q:"uni（一）＋ te ＝ unite，意思是？", opts:["分開","團結","單元"], ans:1,
   ok:"對！合成一個，就是團結、聯合。", bad:{0:"uni 是「一」，合成一個是團結，不是分開喔。",2:"「單元」是 unit，unite 是動詞「團結」。"},
   again:{q:"We are going to have a test on ___ 3.", opts:["Unit","Unite"], ans:0, exp:"單元是 unit；unite 是動詞「團結」。"}}},
 {say:"第二個：<<bi>> 是「二」。{bicycle} 兩個輪子，就是腳踏車！cycle 是「圈、輪子」。", board:[["bi + cycle = bicycle",["bi"],false,true]]},
 {say:"第三個：<<tri>> 是「三」。{triangle} 三個角，就是三角形；三個輪子的車是 tricycle。", board:[["tri + angle = triangle",["tri"],false,true],["tri + cycle = tricycle",["tri"],false,true]]},
 {ask:{q:"tri ＋ angle（角）＝ triangle，意思是？", opts:["四邊形","三角形","圓形"], ans:1,
   ok:"讚！三個角就是三角形。", bad:{0:"tri 是「三」，四邊形有四個角喔。",2:"圓形沒有角，tri 是「三」。"},
   again:{q:"bicycle 有幾個輪子？", opts:["一個","兩個","三個"], ans:1, exp:"bi 是「二」，腳踏車有兩個輪子。"}}},
 {say:"第四個：<<multi>> 是「多」。{multiply} 變成很多倍，就是「乘」，也可以表示「大量增加」。", board:[["multi + ply = multiply",["multi"],false,true]]},
 {say:"數字字首口訣！", chant:"uni 一、bi 二、tri 三，multi 多到數不完！"},
 {ask:{say:"最後一題！", q:"If you ___ 3 by 4, you get 12.", opts:["unite","multiply","divide"], ans:1,
   ok:"完美！multiply A by B 是 A 乘以 B，multi 就是「多」。", bad:{0:"unite 是團結，不是數學運算。",2:"divide 是「除」，3 除以 4 不會是 12。"},
   again:{q:"字首 multi 的意思是？", opts:["一","三","多"], ans:2, exp:"multi 是「多」，像 multiply。"}}},
 {say:"數字字首過關！口訣：uni 一、bi 二、tri 三，multi 多到數不完！", end:true}
],
r2:[
 {say:"今天學三個常見字首：<<de>>、<<dis>>、<<mis>>。先來 de，它常表示「向下、離開」。", board:[["de = 向下、離開",["de"],false,true]]},
 {say:"{depend}：pend 是「懸掛」，掛在別人下面，就是依靠。{depart}：part 是「分開」，分開離去，就是出發、離開。", board:[["de + pend = depend",["de"],false,true],["de + part = depart",["de"],false,true]]},
 {ask:{q:"de（離開）＋ part（分開）＝ depart，意思是？", opts:["出發","部分","抵達"], ans:0,
   ok:"對！分開離去，就是出發、離開。", bad:{1:"「部分」是 part，加了 de 就是離開。",2:"抵達是 arrive，depart 剛好相反。"},
   again:{q:"depend on 的意思是？", opts:["依靠","離開","描述"], ans:0, exp:"掛在別人下面 → 依靠。"}}},
 {say:"第二個：<<dis>> 是「不、相反、去除」。國中學過 dislike、disagree，今天再加兩個：{disease} 不舒服，就是疾病；{discourage} 把勇氣拿走，就是讓人洩氣。", board:[["dis + ease = disease",["dis"],false,true],["dis + courage = discourage",["dis"],false,true]]},
 {say:"口訣！", chant:"dis 一出現，意思就翻面！"},
 {ask:{q:"encourage 是鼓勵，那 discourage 是？", opts:["更鼓勵","使洩氣","有勇氣的"], ans:1,
   ok:"讚！dis 把勇氣拿走，就是使人洩氣。", bad:{0:"dis 表示相反，不是加強喔。",2:"discourage 是動詞「使洩氣」，不是形容詞。"},
   again:{q:"dis ＋ ease（舒適）＝ disease，意思是？", opts:["疾病","輕鬆","容易"], ans:0, exp:"身體不舒適，就是生病、疾病。"}}},
 {say:"第三個：<<mis>> 是「錯誤、不好」。{mistake} 錯誤，你一定學過！{mistaken} 拿錯了，就是弄錯的；{misfortune} 不好的運氣，就是不幸。", board:[["mis + take = mistake",["mis"],false,true],["mis + taken = mistaken",["mis"],false,true],["mis + fortune = misfortune",["mis"],false,true]]},
 {say:"口訣！", chant:"mis 錯錯錯，拿錯了、運氣錯！"},
 {ask:{q:"mis（錯誤）＋ taken（拿）＝ mistaken，意思是？", opts:["拿走的","弄錯的","想念的"], ans:1,
   ok:"對！拿錯了，就是弄錯的。If I'm not mistaken 就是「如果我沒記錯」。", bad:{0:"taken 是拿，但加了 mis 就是拿錯了。",2:"想念是 miss，跟字首 mis 不一樣喔。"},
   again:{q:"misfortune 的意思是？", opts:["好運","不幸","財富"], ans:1, exp:"mis 是「不好的」，不好的運氣就是不幸。"}}},
 {say:"小提醒：國中學過的 {misunderstand} 誤會，也是 mis 開頭喔，誤解別人的意思。", board:[["mis + understand = misunderstand",["mis"],false,true]]},
 {say:"字首過關！口訣：de 向下、dis 翻面、mis 錯錯錯！", end:true}
],
r3:[
 {say:"今天學身體的字根！第一個：<<manu>> 或 <<man>>，意思是「手」。", board:[["manu / man = 手",["manu"],false,true]]},
 {say:"{manual} 用手的：可以是「手動的」，也可以是拿在手上看的「說明書」。{manufacture} 用手做出來，就是製造。", board:[["manu + al = manual",["manu"],false,true],["manu + fact + ure = manufacture",["manu"],false,true]]},
 {say:"口訣！", chant:"manu 是手，手做手拿手動！"},
 {ask:{q:"manu（手）＋ fact（做）＋ ure ＝ manufacture，意思是？", opts:["製造","工廠","事實"], ans:0,
   ok:"對！用手做出來，就是製造。", bad:{1:"工廠是 factory，manufacture 是「製造」。",2:"事實是 fact，加了 manu 就變成用手做，也就是製造。"},
   again:{q:"Read the ___ before you use the machine.", opts:["manual","manner"], ans:0, exp:"拿在手上看的說明書是 manual。"}}},
 {say:"man 也是手：{manage} 用手掌控，就是管理、設法做到；{manner} 用手處理事情的樣子，就是方式，加 s 變成 manners 是「禮貌」。", board:[["man + age = manage",["man"],false,true],["mann + er = manner",["mann"],false,true]]},
 {ask:{q:"It's bad ___ to talk with your mouth full.", opts:["manners","managers","manuals"], ans:0,
   ok:"讚！manners 加 s 是禮貌，bad manners 就是沒禮貌。", bad:{1:"managers 是經理，不是禮貌喔。",2:"manuals 是說明書，跟禮貌無關。"},
   again:{q:"She ___ to finish the report on time.", opts:["managed","manufactured"], ans:0, exp:"manage to V：設法做到。"}}},
 {say:"第二個身體字根：<<ped>>，意思是「腳」。{pedal} 用腳踩的東西，就是腳踏車的踏板；{centipede} centi 是「百」，一百隻腳，就是蜈蚣！", board:[["ped + al = pedal",["ped"],false,true],["centi + pede = centipede",["pede"],false,true]]},
 {say:"口訣！", chant:"manu 是手，ped 是腳，手腳並用記單字！"},
 {ask:{q:"centi（百）＋ pede（腳）＝ centipede，是哪種動物？", opts:["蜈蚣","蜘蛛","蝴蝶"], ans:0,
   ok:"太棒了！一百隻腳的蟲，就是蜈蚣。", bad:{1:"蜘蛛只有八隻腳，不是一百隻喔。",2:"蝴蝶只有六隻腳，而且會飛。"},
   again:{q:"字根 ped 的意思是？", opts:["手","腳","頭"], ans:1, exp:"ped 是「腳」，像 pedal、centipede。"}}},
 {say:"組合題：{bicycle} 有兩個 {pedal}，bi 是二、ped 是腳，兩隻腳各踩一個！今天學的字根加上字首，就能拆開好多字。", board:[["bi + cycle：兩個輪子",["bi"],false,true],["ped + al：腳踩的板子",["ped"],false,true]]},
 {say:"身體字根過關！口訣：manu、man 是手，ped 是腳，手腳並用記單字！", end:true}
],
r4:[
 {say:"最後一課：耳朵和嘴巴的字根！第一個：<<aud>>，意思是「聽」。國中學過 audience，就是一群「聽」的人：觀眾、聽眾。", board:[["aud = 聽",["aud"],false,true],["aud + ience = audience",["aud"],false,true]]},
 {say:"{audio} 聽的東西，就是聲音、音訊，像 audio guide 語音導覽。{auditorium} 大家來聽的場所，就是禮堂！<<orium>> 表示「場所」。", board:[["aud + io = audio",["aud"],false,true],["audit + orium = auditorium",["audit","orium"],false,true]]},
 {say:"口訣！", chant:"aud 用耳朵，聽聽聽！"},
 {ask:{q:"The graduation ceremony will be held in the ___.", opts:["audience","auditorium","audio"], ans:1,
   ok:"對！典禮在禮堂 auditorium 舉行，orium 是場所。", bad:{0:"audience 是觀眾，典禮不會「在觀眾裡」舉行喔。",2:"audio 是聲音、音訊，不是一個地方。"},
   again:{q:"字根 aud 的意思是？", opts:["看","聽","說"], ans:1, exp:"aud 是「聽」，像 audience、audio。"}}},
 {say:"第二個：<<voc>> 和 <<voice>>，意思是「聲音、叫喊」。{voice} 本身就是人的聲音。國中學過的 {vocational} 職業的，原本是「被呼喚去做的工作」。", board:[["voice = 聲音",["voice"],false,true],["voc + ation + al = vocational",["voc"],false,true]]},
 {say:"小心分辨：{voice} 是人的嗓音，{sound} 是一般的聲音，{noise} 是噪音。", board:[["She has a beautiful voice.",["voice"]],["I heard a strange sound.",["sound"]],["Stop making noise!",["noise"]]]},
 {ask:{q:"She has a beautiful ___. She sings like an angel.", opts:["noise","voice","sound"], ans:1,
   ok:"讚！人的嗓音用 voice。", bad:{0:"noise 是噪音，不會是 beautiful 的歌聲。",2:"sound 是一般的聲音，形容人的歌喉要用 voice。"},
   again:{q:"His voice was so soft that it was hardly ___.", opts:["audible","audience"], ans:0, exp:"聽得見的是 audible；audience 是觀眾。"}}},
 {say:"口訣！", chant:"voc、voice 開口說，aud 豎起耳朵聽！"},
 {say:"加碼回到 aud：{audible} 能被聽到的，就是聽得見的！<<ible>> 是「能……的」，前面加 in 變成 inaudible，就是聽不見的。", board:[["aud + ible = audible",["aud"],false,true]]},
 {ask:{say:"最後一題！", q:"字根 voc 的意思是？", opts:["聲音、叫喊","手","腳"], ans:0,
   ok:"完美！voc 是聲音、叫喊，像 voice、vocational。", bad:{1:"「手」是 manu 喔。",2:"「腳」是 ped 喔。"},
   again:{q:"aud ＋ io ＝ audio，意思是？", opts:["音訊","影片","觀眾"], ans:0, exp:"聽的東西，就是聲音、音訊。"}}},
 {say:"字根過關！口訣：aud 豎起耳朵聽，voc、voice 開口說。字根字首全部上完了，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創） ---------- */
Object.assign(ILLUS2, {
  "bicycle": () => svgWrap("#e8f4ff", ground() + O.wheel(48, 88, 1.1) + O.wheel(114, 88, 1.1) + `<path d="M48 88 L72 60 L104 60 L114 88 M72 60 L82 88 L104 60 M82 88 L48 88" stroke="#ef4444" stroke-width="4" fill="none" stroke-linejoin="round"/><path d="M68 54 H80" stroke="#374151" stroke-width="5" stroke-linecap="round"/><path d="M104 60 L100 46 H110" stroke="#374151" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="82" cy="88" r="4" fill="#374151"/>` + txt(80, 28, "bi = 2", 18, "#2563eb") + O.cloud(30, 22, .5) + O.cloud(136, 26, .45)),
  "triangle": () => svgWrap("#fff7e6", `<polygon points="80,18 26,100 134,100" fill="#fde68a" stroke="#f59e0b" stroke-width="4" stroke-linejoin="round"/>` + `<circle cx="80" cy="18" r="9" fill="#ef4444"/><circle cx="26" cy="100" r="9" fill="#ef4444"/><circle cx="134" cy="100" r="9" fill="#ef4444"/>` + txt(80, 22, "1", 11, "#fff") + txt(26, 104, "2", 11, "#fff") + txt(134, 104, "3", 11, "#fff") + txt(80, 78, "tri = 3", 16, "#b45309")),
  "take after": () => svgWrap("#fef3f2", ground() + P({x:56, y:106, s:1, hair:"spiky", hc:"#4a3428", oc:"#4f7cf0", acc:["glasses"], mood:"smile"}) + P({x:112, y:106, s:.7, hair:"spiky", hc:"#4a3428", oc:"#4f7cf0", acc:["glasses"], mood:"smile"}) + heart(84, 26, .9) + bubble(118, 22, "Like Dad!", 62)),
  "look up to": () => svgWrap("#f5f3ff", ground() + P({x:104, y:106, s:1.2, hair:"short", hc:"#2b2b2b", oc:"#16a34a", pose:"thumb", acc:["cap"], mood:"smile"}) + kid(46, {mood:"open", oc:"#ffb347", pose:"cheer"}) + star(104, 14, 9) + spark(70, 30, .8) + spark(134, 34, .7))
});

registerUnit("s1-v1", {
  name:"7000 單字 Level 1–2",
  sub:"易混淆字、詞性變化、常考搭配與片語",
  words:S1_V1_WORDS, grammar:S1_V1_GRAMMAR, quiz:S1_V1_QUIZ,
  classes:Object.assign({}, S1_V1_CLASS, S1_V1_ROOT_CLASS), phonics:S1_V1_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會數字字首、de- / dis- / mis-，還有手、腳、聽、聲音的字根。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
