/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高二 7000 單字 Level 3–4：同義字辨析、易混淆字、進階搭配詞與片語
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"（沒有字根可拆的字留空，記憶小撇步寫在 MEMO）
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S2_V3_WORDS = [
/* ---------- 同義字辨析 ---------- */
["complain","v.","抱怨；投訴",[
 ["My neighbors often complain about the noise from the night market.","我的鄰居常抱怨夜市傳來的噪音。","complain about / of + 名詞：抱怨某事；complain 是不及物動詞，不能直接接受詞。"],
 ["She complained to the manager that her soup was cold.","她向經理投訴她的湯是冷的。","complain to 人 + that 子句：向某人抱怨（說）……；名詞是 complaint。"],
 ["Instead of complaining, why not try to solve the problem?","與其抱怨，何不試著解決問題？","instead of 的 of 是介系詞，後面接 V-ing；why not + 原形動詞 表示建議。"]],
 "com-=加強|plain=哀嘆（捶胸）","一直哀嘆 → 抱怨","😤|抱怨"],
["insist","v.","堅持；堅決要求",[
 ["He insisted on paying for dinner.","他堅持要付晚餐的錢。","insist on + 名詞 / V-ing：堅持做……；on 是介系詞。"],
 ["The doctor insisted that my father (should) stop smoking.","醫生堅決要求我爸爸戒菸。","insist that + 主詞 + (should) + 原形動詞：表示「堅決要求」，所以用 stop。"],
 ["She insisted that she had never seen the man before.","她堅稱以前從沒見過那名男子。","insist 表示「堅稱（事實）」時，that 子句照一般時態，不用 (should) + 原形，這是學測陷阱。"]],
 "in-=在上面|sist=站立","站在立場上不動 → 堅持","🧱|堅持"],
["rob","v.","搶劫",[
 ["Two men robbed the bank and ran away with the money.","兩名男子搶了銀行，帶著錢逃跑了。","rob 的受詞是「被搶的人或地方」：rob the bank；rob 的過去式要重複 b：robbed。"],
 ["The old man was robbed of his wallet on his way home.","那位老先生在回家路上被搶走了錢包。","rob 人 of 物 → 被動：人 be robbed of 物。不能說 His wallet was robbed。"],
 ["Someone stole my bike, but nobody has ever robbed me.","有人偷了我的腳踏車，但從來沒人搶過我。","辨析：steal 物 from 人（偷東西）；rob 人 of 物（搶人）。steal 的受詞是東西，rob 的受詞是人或地方。"]],
 "","","@rob"],
["deny","v.","否認；拒絕給予",[
 ["He denied breaking the window.","他否認打破窗戶。","deny + V-ing：否認做過某事；不能接 to V。"],
 ["She denied that she had taken the money.","她否認拿了那筆錢。","deny + that 子句；had taken 表示比 denied 更早發生的事。"],
 ["No one should be denied the right to education.","任何人都不該被剝奪受教育的權利。","deny 人 物：不給某人某物；被動是 人 be denied 物。"]],
 "","","🙅|否認"],
["urge","v./n.","力勸；呼籲；衝動",[
 ["My teacher urged me to apply for the scholarship.","老師力勸我申請獎學金。","urge 人 to V：力勸某人做某事，語氣比 advise 強。"],
 ["Experts urge that people (should) get enough sleep.","專家呼籲大家要有充足的睡眠。","urge that + 主詞 + (should) + 原形動詞；get 不加 s。"],
 ["I had a sudden urge to eat ice cream.","我突然很想吃冰淇淋。","urge 當名詞是「強烈的慾望、衝動」：an urge to V。"]],
 "","","📣|力勸"],
["require","v.","需要；規定",[
 ["This job requires good communication skills.","這份工作需要良好的溝通能力。","require 比 need 正式，常用於規定、條件；主詞常是事物。"],
 ["All students are required to wear uniforms.","所有學生都被規定要穿制服。","be required to V：被要求、規定要做某事。"],
 ["The rule requires that every driver (should) wear a seat belt.","規定要求每位駕駛都要繫安全帶。","require that + 主詞 + (should) + 原形動詞：所以是 wear，不是 wears。"]],
 "re-=再；加強|quire=尋求","一再尋求 → 需要","📋|規定需要"],
["request","v./n.","請求；要求",[
 ["Passengers are requested to fasten their seat belts.","乘客被要求繫好安全帶。","request 是正式、有禮貌的請求，常出現在公告；be requested to V。"],
 ["The hotel staff answered my request quickly.","飯店人員很快就回應了我的請求。","request 當名詞，前面用所有格 my；at sb's request 表示「應某人的要求」。"],
 ["He requested that the meeting be put off until Friday.","他要求會議延到星期五。","request that + 主詞 + (should) + 原形動詞：be put off 是被動原形。"]],
 "re-=再；加強|quest=尋求","一再尋求 → 請求","🙏|請求"],
["acquire","v.","習得；獲得",[
 ["Children can acquire a second language easily.","孩子能輕鬆習得第二語言。","acquire 指透過長時間學習、累積而「習得」知識、技能、語言。"],
 ["She acquired many useful skills during her internship.","她在實習期間學到了許多實用的技能。","acquire skills / knowledge 是常考搭配；during + 名詞。"],
 ["The museum recently acquired a famous painting.","博物館最近購得一幅名畫。","acquire 也可以表示「（正式地）取得、購得」；名詞是 acquisition。"]],
 "ac-=朝向|quire=尋求","朝目標一直尋求 → 獲得","🎓|習得"],
["attain","v.","達到；獲得（目標）",[
 ["She worked hard and finally attained her goal.","她努力不懈，終於達成了目標。","attain a goal / success：經過努力達到目標，比 reach 正式。"],
 ["Few people attain such fame at so young an age.","很少人在這麼年輕時就獲得如此名聲。","so + 形容詞 + a + 名詞：so young an age，注意語順。"],
 ["The team attained first place in the competition.","這支隊伍在比賽中拿下第一名。","辨析：acquire 學到技能，obtain 經程序取得，attain 努力達到目標，gain 慢慢增加。"]],
 "at-=朝向|tain=握住","朝目標伸手握住 → 達到","🏔️|達成目標"],
["gain","v./n.","獲得；增加",[
 ["She gained a lot of experience from working abroad.","她從海外工作中獲得了許多經驗。","gain experience 是常考搭配；from 是介系詞，後面接 V-ing。"],
 ["I have gained three kilograms since summer vacation.","從暑假到現在我胖了三公斤。","gain weight 增加體重（相反是 lose weight）；since + 過去時間點，搭配現在完成式。"],
 ["The singer gained popularity after the TV show.","那位歌手在電視節目後人氣上升。","gain popularity 是常見搭配；辨析：acquire 偏「學到」，obtain 偏「經程序取得」，gain 偏「慢慢增加、得到好處」。"]],
 "","","📈|獲得增加"],
["confess","v.","坦承；招認",[
 ["The boy confessed that he had broken the vase.","那男孩坦承是他打破了花瓶。","confess + that 子句；辨析：admit 是一般的「承認」，confess 是坦白說出不好或丟臉的事。"],
 ["He finally confessed to stealing the money.","他終於招認偷了那筆錢。","confess to + 名詞 / V-ing：這裡的 to 是介系詞，所以接 stealing。"],
 ["I must confess that I'm not good at math.","我必須坦白說，我不擅長數學。","I must confess (that)... 是口語常用的開頭，表示「老實說」。"]],
 "con-=完全|fess=說","全部說出來 → 坦承","🤫|坦白"],
["accuse","v.","指控；控告",[
 ["The police accused him of stealing the car.","警方指控他偷了那輛車。","accuse 人 of + 名詞 / V-ing：指控某人做了某事；介系詞是 of，不是 for。"],
 ["She was accused of lying to her classmates.","她被指控對同學說謊。","被動：人 be accused of + V-ing。"],
 ["It is unfair to accuse someone without any evidence.","沒有任何證據就指控別人是不公平的。","It is + 形容詞 + to V 虛主詞句型；without + 名詞。"]],
 "ac-=朝向|cuse=原因；控告","把罪的原因指向某人 → 指控","👉|指控"],
["blame","v./n.","責怪；歸咎",[
 ["Don't blame others for your own mistakes.","別把自己的錯怪到別人身上。","blame 人 for 事：因某事責怪某人；介系詞用 for。"],
 ["The driver blamed the accident on the bad weather.","司機把車禍歸咎於惡劣的天氣。","blame 事 on 人 / 物：把某事歸咎於……，兩種句型都要會。"],
 ["Who is to blame for the delay?","誰該為延誤負責？","be to blame (for)：該負責、該受責備；習慣用主動的 to blame，不說 to be blamed。"]],
 "","","😠|責怪"],
["fame","n.","名聲；聲望",[
 ["The singer rose to fame after winning a TV contest.","那位歌手在贏得電視比賽後一舉成名。","rise to fame 成名；after + V-ing。"],
 ["Fame and money don't always bring happiness.","名氣和金錢不一定會帶來快樂。","not always 是部分否定：不一定、不總是。"],
 ["The town gained fame for its pineapple cakes.","這個小鎮因鳳梨酥而出名。","辨析：fame 是「出名」（很多人知道）；reputation 是「別人對你的評價」，可好可壞。形容詞是 famous。"]],
 "","","🌟|名聲"],
["scarce","adj.","缺乏的；稀少的",[
 ["Fresh water is becoming scarce in some areas.","在某些地區，淡水正變得稀少。","scarce 指「供應不足、不夠用」，通常放在 be 動詞或 become 後面。"],
 ["Food was scarce during the war.","戰爭期間食物短缺。","辨析：scarce 是「暫時不夠用」；rare 是「本來就很少見」。"],
 ["As jobs became scarce, many young people moved to the cities.","由於工作機會變少，許多年輕人搬到了城市。","As 在這裡表示原因「因為、由於」；副詞 scarcely 是「幾乎不」。"]],
 "","","🏜️|短缺"],
["rare","adj.","稀有的；罕見的",[
 ["The black-faced spoonbill is a rare bird.","黑面琵鷺是一種稀有的鳥。","rare 指「本來數量就少、不常見」，可以放在名詞前面。"],
 ["It is rare for it to snow in Taipei.","台北下雪是很罕見的。","It is rare for ... to V：……是很少見的；辨析：rare 本來就少，scarce 是不夠用。"],
 ["I like my steak rare.","我喜歡吃三分熟的牛排。","rare 還有「（肉）半熟的」意思；like + 受詞 + 形容詞。"]],
 "","","💎|稀有"],
["wound","n./v.","傷口；（使）受傷",[
 ["The soldier was badly wounded in the battle.","那名士兵在戰鬥中身受重傷。","辨析：wound 多指被刀、槍等武器所傷；injure 多指意外事故受傷；hurt 最口語，也能指心裡受傷。"],
 ["The nurse cleaned the wound carefully.","護理師小心地清理傷口。","wound 當名詞是「傷口」，唸 [wund]；wind（纏繞）的過去式 wound 唸 [waʊnd]，別搞混。"],
 ["His cruel words wounded her feelings.","他殘忍的話傷了她的心。","wound 也可以指在感情上傷害人，比 hurt 更正式。"]],
 "","","🩹|傷口"],
["alter","v.","（稍微）修改；改變",[
 ["The tailor altered my dress so that it would fit me.","裁縫師修改了我的洋裝，好讓它合身。","alter 指「局部修改」，不是整個換掉；so that + 子句 表示目的。"],
 ["We had to alter our plans because of the typhoon.","因為颱風，我們不得不改變計畫。","because of + 名詞；had to 是 have to 的過去式。"],
 ["Nothing can alter the fact that he lied.","什麼都改變不了他說謊的事實。","the fact that + 子句：同位語子句，說明 fact 的內容。"]],
 "","","✂️|修改"],
["modify","v.","修改；調整",[
 ["The engineers modified the design to make it safer.","工程師修改了設計，讓它更安全。","modify 常用於修改設計、計畫、機器，使它更適合；to make 表示目的。"],
 ["Adjectives modify nouns.","形容詞修飾名詞。","modify 在文法上是「修飾」；名詞是 modification。"],
 ["The plan was modified after the students gave their opinions.","學生提出意見後，計畫就被修改了。","被動語態 was modified；辨析：change 最廣，alter 和 modify 都是「部分修改」。"]],
 "mod=模式|-ify=使……","使符合模式 → 修改","🔧|調整"],
/* ---------- 易混淆字 ---------- */
["adopt","v.","採用；收養",[
 ["The school adopted a new rule about using phones in class.","學校採用了一項上課使用手機的新規定。","adopt 採用（想法、方法、規定）；別和 adapt（適應、改編）搞混：adapt to + 名詞 / V-ing。"],
 ["The couple adopted a baby girl last year.","那對夫妻去年收養了一個女嬰。","adopt 也有「收養」的意思；名詞是 adoption。"],
 ["It took her a month to adapt to the new school after her family adopted a new lifestyle.","家人採取新的生活方式後，她花了一個月才適應新學校。","同一句比較：adapt to（適應）、adopt（採用）。It takes 人 時間 to V。"]],
 "ad-=朝向|opt=選擇","選中拿過來 → 採用、收養","🤝|採用"],
["conscience","n.","良心",[
 ["He couldn't sleep because his conscience was troubling him.","他良心不安，睡不著覺。","過去進行式 was troubling 表示當時持續的狀態。"],
 ["She had a guilty conscience after lying to her mom.","她對媽媽說謊後感到良心不安。","have a guilty / clear conscience 良心不安／問心無愧；after + V-ing。"],
 ["Follow your conscience and do what is right.","跟隨你的良心，做對的事。","what is right：what 引導名詞子句，等於 the thing that is right；辨析：conscious（adj.）有意識的。"]],
 "con-=完全|sci=知道|-ence=名詞字尾","心裡完全知道對錯 → 良心","😇|良心"],
["precede","v.","在……之前；先於",[
 ["A short speech preceded the concert.","音樂會之前先有一段簡短的致詞。","precede 是及物動詞，直接接受詞，不加 before。"],
 ["In the week preceding the exam, the library was full.","考試前一週，圖書館擠滿了人。","preceding 是現在分詞當形容詞，修飾 the week。"],
 ["The storm was preceded by strong winds.","暴風雨來臨前先刮起了強風。","被動：A be preceded by B ＝ B 先於 A 發生；名詞 precedent 是「先例」。"]],
 "pre-=事先|cede=走","走在前面 → 在……之前","⏮️|在前"],
["proceed","v.","繼續進行；前往",[
 ["After a short break, the meeting proceeded.","短暫休息後，會議繼續進行。","proceed 是不及物動詞：繼續進行。"],
 ["Passengers for Flight 101, please proceed to Gate 5.","搭乘 101 班機的旅客，請前往五號登機門。","proceed to + 地點：前往……，常用在廣播。"],
 ["He proceeded to explain the rules of the game.","他接著說明遊戲規則。","proceed to V：接著做……；辨析：precede（在……之前）vs. proceed（向前繼續）。"]],
 "pro-=向前|ceed=走","向前走 → 繼續進行","➡️|繼續進行"],
["complement","n./v.","補充；互補的東西",[
 ["This sauce is a perfect complement to the fried chicken.","這個醬料和炸雞是完美的搭配。","complement to + 名詞：……的補充、互補品。"],
 ["The two players complement each other well.","這兩位球員彼此互補得很好。","complement 當動詞：互補、使完整；each other 彼此。"],
 ["The colors of the curtains complement the walls.","窗簾的顏色和牆壁很相襯。","記法：complement 中間是 e，聯想 complete（完整）：補足使它完整。"]],
 "com-=完全|ple=填滿|-ment=名詞字尾","完全填滿 → 補足、互補","🧩|互補"],
["continual","adj.","斷斷續續的；一再發生的",[
 ["I'm tired of your continual complaints.","我受夠了你三不五時的抱怨。","continual 指「一再重複、中間有停頓」的事，常帶有令人厭煩的語氣；be tired of 厭倦。"],
 ["The continual ringing of the phone kept me from sleeping.","電話一直響個不停，讓我無法睡覺。","keep 人 from V-ing：使某人無法……。"],
 ["Learning a language requires continual practice.","學語言需要持續不斷的練習。","動名詞 Learning a language 當主詞，用單數動詞 requires。"]],
 "con-=一起|tinu=握住|-al=形容詞字尾","一次次接著做 → 斷斷續續的","🔁|一再發生"],
["latter","adj./n.","（兩者中的）後者；後半的",[
 ["Of the two choices, I prefer the latter.","兩個選擇中，我比較喜歡後者。","the former 前者 / the latter 後者，用在「兩者」之間。"],
 ["Tom and Jerry are both smart, but the latter is funnier.","湯姆和傑利都很聰明，但後者比較有趣。","the latter 指 Jerry；比較級 funnier：y 改 i 加 er。"],
 ["The latter half of the movie was exciting.","電影的後半段很精彩。","辨析：later（之後，時間）vs. latter（後者，順序）；latter 有兩個 t。"]],
 "","","2️⃣|後者"],
["morale","n.","士氣",[
 ["The coach's speech boosted the team's morale.","教練的話提振了球隊的士氣。","boost / raise morale 提振士氣；morale 重音在第二音節 [məˋræl]。"],
 ["Morale was low after we lost three games in a row.","連輸三場比賽後，士氣很低落。","in a row 連續；morale 是不可數名詞。"],
 ["Good leaders know how to keep morale high.","好的領導者知道如何保持高昂的士氣。","keep + 受詞 + 形容詞：使……保持……；辨析：moral 道德、morale 士氣，多一個 e。"]],
 "","","💪|士氣"],
["stationary","adj.","靜止的；不動的",[
 ["The car crashed into a stationary truck.","那輛車撞上一輛靜止不動的卡車。","stationary 是形容詞，放在名詞前面修飾它。"],
 ["Please remain stationary until the train stops.","火車停下來之前，請保持不動。","remain + 形容詞：保持……的狀態。"],
 ["Prices have remained stationary for months.","價格已經好幾個月沒有變動了。","記法：stationary 有 a，像 stand 站著不動。"]],
 "sta=站立|-tion=名詞字尾|-ary=形容詞字尾","站著不動的 → 靜止的","🛑|靜止"],
["stationery","n.","文具",[
 ["I bought some stationery for the new semester.","我為新學期買了一些文具。","stationery 是不可數名詞，不加 s；要說 some stationery。"],
 ["The stationery store sells pens, notebooks, and erasers.","文具店賣筆、筆記本和橡皮擦。","stationery 也可以放在名詞前面當形容詞用：a stationery store。"],
 ["She keeps all her stationery in a pencil case.","她把所有的文具放在鉛筆盒裡。","記法：stationery 有 e，聯想 envelope（信封）、eraser（橡皮擦），都是文具。"]],
 "station=攤位、店|-ery=物品總稱","攤位上賣的東西 → 文具","@stationery"],
["considerable","adj.","相當大的；可觀的",[
 ["He spent a considerable amount of money on the trip.","他在這趟旅行花了相當多的錢。","considerable 修飾數量、程度：a considerable amount of + 不可數名詞。"],
 ["The typhoon caused considerable damage to the crops.","颱風對農作物造成相當大的損害。","cause damage to + 名詞：對……造成損害。"],
 ["The project took a considerable time to finish.","這個計畫花了相當長的時間才完成。","辨析：considerable（數量）相當大的；considerate（人）體貼的。"]],
 "consider=考慮|-able=值得……的","值得考慮的（大量）→ 相當大的","📦|相當大量"],
["respectful","adj.","恭敬的；尊重人的",[
 ["Students should be respectful to their teachers.","學生應該尊敬老師。","respectful 指「主詞對別人表現尊重」：be respectful to / of + 人。"],
 ["He stood in respectful silence at the memorial.","他在紀念碑前恭敬地靜默站著。","in respectful silence：恭敬地沉默。"],
 ["Being respectful of other cultures is important when you travel.","旅行時尊重其他文化很重要。","動名詞 Being respectful 當主詞，用單數 is。"]],
 "re-=再|spect=看|-ful=充滿……的","充滿重視的眼光 → 尊重人的","🙇|恭敬"],
["respectable","adj.","可敬的；體面的",[
 ["He is a respectable member of our community.","他是我們社區裡受人敬重的一員。","respectable 指「主詞值得被別人尊重」；辨析：respectful 是你尊重別人，respectable 是別人尊重你。"],
 ["You should wear something respectable to the interview.","你面試時應該穿得體面一點。","something + 形容詞：形容詞放在 something 後面。"],
 ["She earns a respectable salary as an engineer.","她當工程師的收入還不錯。","respectable 也可以表示「（數量、程度）還不錯的」。"]],
 "re-=再|spect=看|-able=值得……的","值得被重視的 → 可敬的","🎩|可敬"],
["imaginary","adj.","想像的；虛構的",[
 ["Dragons are imaginary animals.","龍是想像出來的動物。","imaginary 指「不真實存在的」。"],
 ["When I was little, I had an imaginary friend.","我小時候有一個想像中的朋友。","imaginary 開頭是母音，所以用 an。"],
 ["The story takes place in an imaginary country.","這個故事發生在一個虛構的國家。","take place 發生、舉行，沒有被動語態。"]],
 "imagin=想像|-ary=……的","只存在於想像的 → 虛構的","🐉|虛構"],
["imaginative","adj.","富有想像力的",[
 ["She is an imaginative writer.","她是一位很有想像力的作家。","imaginative 形容「人或作品很有創意」；辨析：imaginary（不存在的）vs. imaginative（有想像力的）。"],
 ["The children came up with an imaginative solution.","孩子們想出了一個很有創意的解決辦法。","come up with 想出（點子、辦法）。"],
 ["His imaginative drawings won first prize.","他富有想像力的畫作得了第一名。","win first prize 得第一名；first prize 前面通常不加 the。"]],
 "imagin=想像|-ative=有……傾向的","很會想像的 → 有想像力的","🎨|有想像力"],
["industrial","adj.","工業的",[
 ["Kaohsiung is an important industrial city.","高雄是重要的工業城市。","industrial 和 industry（工業）有關：industrial city、industrial waste。"],
 ["Industrial waste has polluted the river.","工業廢料已經污染了這條河。","現在完成式 has polluted 表示造成的結果到現在。"],
 ["The Industrial Revolution changed the way people lived.","工業革命改變了人們的生活方式。","the way + 子句；the way 和 how 不能同時用。"]],
 "industri=工業|-al=形容詞字尾","和工業有關的 → 工業的","🏭|工業"],
["industrious","adj.","勤勞的",[
 ["My grandparents were industrious farmers.","我的祖父母是勤勞的農夫。","industrious = hard-working，用來形容人。"],
 ["Industrious students usually do well in school.","勤奮的學生通常在學校表現好。","do well in 在……表現好。"],
 ["Ants are often seen as industrious insects.","螞蟻常被視為勤勞的昆蟲。","be seen as 被視為；辨析：industrial（工業的）vs. industrious（勤勞的）。"]],
 "industri=勤奮|-ous=充滿……的","充滿勤奮 → 勤勞的","🐜|勤勞"],
["emigrate","v.","移居（他國）；移出",[
 ["His family emigrated from Taiwan to Canada.","他一家人從台灣移民到加拿大。","emigrate from 本國 (to 他國)：從自己的國家移出去。"],
 ["Many people emigrated to look for better jobs.","許多人移居國外尋找更好的工作。","to look for 表示目的。"],
 ["She decided to emigrate after she graduated.","她畢業後決定移居國外。","decide to V；名詞是 emigration，移出的人是 emigrant。"]],
 "e-=向外|migr=遷移|-ate=動詞字尾","往外遷移 → 移出","✈️|移出"],
["immigrate","v.","移入；（從外國）移居",[
 ["They immigrated to the United States in 1990.","他們在 1990 年移民到美國。","immigrate to 他國：從外國移進來；辨析：emigrate 是「移出」，immigrate 是「移入」。"],
 ["Many workers immigrate to Taiwan from Southeast Asia.","許多工人從東南亞移居到台灣。","站在台灣的角度是 immigrate（移入），站在他們母國的角度是 emigrate（移出）。"],
 ["People who immigrate to a new country often face language problems.","移居到新國家的人常面臨語言問題。","who 引導關係子句修飾 People；名詞 immigration，移入者 immigrant。"]],
 "im-=向內|migr=遷移|-ate=動詞字尾","往內遷移 → 移入","🛬|移入"],
["childish","adj.","幼稚的",[
 ["Stop being so childish!","別這麼幼稚了！","childish 是負面意思：大人的行為像小孩一樣不成熟。"],
 ["It was childish of him to get angry over such a small thing.","他為了這麼小的事生氣，真是幼稚。","It is + 形容詞 + of 人 + to V：形容「人」的個性時用 of，不用 for。"],
 ["Her childish behavior annoyed everyone.","她幼稚的行為惹惱了大家。","-ish 常帶有「像……一樣（不好）」的意味。"]],
 "child=小孩|-ish=像……的","像小孩一樣（不成熟）→ 幼稚的","🍼|幼稚"],
["childlike","adj.","天真的；孩子般純真的",[
 ["My grandmother has a childlike curiosity about the world.","我奶奶對世界有著孩子般的好奇心。","childlike 是正面意思：像孩子一樣單純、有好奇心。"],
 ["The artist's paintings are full of childlike joy.","這位畫家的畫作充滿了童真的喜悅。","be full of 充滿……。"],
 ["He looked at the stars with childlike wonder.","他帶著孩子般的驚奇看著星星。","辨析：childish（幼稚，負面）vs. childlike（天真，正面）。"]],
 "child=小孩|-like=像……的","像孩子般單純的 → 天真的","🌈|天真"],
["historic","adj.","有歷史意義的；歷史性的",[
 ["Tainan has many historic buildings.","台南有許多具有歷史意義的建築。","historic 指「在歷史上重要、值得紀念的」。"],
 ["It was a historic moment when man first landed on the moon.","人類首次登陸月球是歷史性的一刻。","historic 唸 [hɪsˋtɔrɪk]，開頭的 h 要發音，所以用 a historic。"],
 ["The two leaders signed a historic agreement.","兩位領袖簽署了一份歷史性的協議。","historic event / moment / agreement 是常見搭配。"]],
 "histor=歷史|-ic=形容詞字尾","在歷史上留名的 → 有歷史意義的","🏯|歷史性"],
["historical","adj.","歷史的；與歷史有關的",[
 ["I enjoy reading historical novels.","我喜歡讀歷史小說。","historical 指「和歷史有關的、以歷史為題材的」。"],
 ["The museum has many historical documents.","博物館裡有許多歷史文件。","辨析：historic（有重大歷史意義的）vs. historical（歷史上的、和歷史有關的）。"],
 ["This movie is based on historical events.","這部電影是根據歷史事件改編的。","be based on 以……為根據；based 是過去分詞。"]],
 "histor=歷史|-ic=形容詞字尾|-al=形容詞字尾","和歷史有關的 → 歷史的","📜|歷史的"],
["personnel","n.","（全體）人員；人事部門",[
 ["All personnel must wear ID cards in the building.","所有人員在大樓內都必須配戴識別證。","personnel 是集合名詞，指全體員工，通常當複數。"],
 ["Medical personnel worked day and night during the pandemic.","疫情期間醫護人員日夜工作。","medical personnel 醫護人員；day and night 日以繼夜。"],
 ["Please send your application to the personnel department.","請把你的申請書寄到人事部。","辨析：personal（個人的，重音在前）vs. personnel（人員，重音在最後 [ˌpɝsnˋɛl]）。"]],
 "","","👥|人員"],
/* ---------- 進階搭配詞 ---------- */
["commitment","n.","承諾；投入",[
 ["Volunteers made a commitment to help the elderly every weekend.","志工們承諾每個週末都會幫助長者。","make a commitment（做出承諾）是動詞＋名詞的固定搭配，後面可接 to V 說明承諾的內容。"],
 ["Her commitment to protecting the environment is impressive.","她對保護環境的投入令人佩服。","commitment to + V-ing：這裡的 to 是介系詞，所以接 protecting。"],
 ["Learning an instrument requires time and commitment.","學一種樂器需要時間和投入。","動名詞當主詞，用單數動詞 requires；動詞是 commit（承諾、犯罪）。"]],
 "com-=一起|mit=送|-ment=名詞字尾","把自己送進去 → 投入、承諾","🤞|承諾"],
["substantial","adj.","大量的；可觀的",[
 ["There has been a substantial increase in the number of tourists.","觀光客的人數大幅增加。","a substantial increase in + 名詞：……大幅增加，是常見搭配。"],
 ["He received a substantial amount of money from his uncle.","他從叔叔那裡得到一大筆錢。","a substantial amount of + 不可數名詞；和 considerable 意思相近。"],
 ["We need a substantial meal before the long hike.","長途健行前我們需要好好吃一頓。","substantial meal 豐盛的一餐。"]],
 "sub-=在下面|stant=站立|-ial=形容詞字尾","撐在底下、很有分量 → 大量的","💰|大量"],
["severe","adj.","嚴重的；嚴厲的",[
 ["The typhoon brought severe weather to eastern Taiwan.","颱風為東台灣帶來惡劣的天氣。","severe weather 惡劣天氣，是形容詞＋名詞搭配。"],
 ["He suffered from a severe headache.","他頭痛得很厲害。","severe headache / pain 劇烈的疼痛；suffer from 受……所苦。"],
 ["Cheating on exams will lead to severe punishment.","考試作弊會受到嚴厲的處罰。","severe punishment 嚴厲的處罰；lead to + 名詞。"]],
 "","","🌪️|嚴重"],
["conduct","v./n.","進行；實施；行為",[
 ["The students conducted a survey on how much time teens spend online.","學生們針對青少年上網時間做了一項調查。","conduct a survey / an experiment / research 進行調查、實驗、研究，是學測常見搭配。"],
 ["The experiment was conducted by a team of scientists.","這項實驗是由一組科學家進行的。","被動語態 was conducted by。"],
 ["The school has strict rules about student conduct.","學校對學生的行為有嚴格的規定。","conduct 當名詞是「行為」，重音在前 [ˋkɑndʌkt]；當動詞重音在後。"]],
 "con-=一起|duct=引導","帶領大家一起做 → 進行、實施","🔬|進行"],
["precaution","n.","預防措施",[
 ["We should take precautions against fire.","我們應該採取防火措施。","take precautions against + 名詞：採取預防……的措施；常用複數。"],
 ["As a precaution, please wear a helmet when riding a scooter.","為了安全起見，騎機車時請戴安全帽。","as a precaution 為了預防起見；when riding = when you are riding。"],
 ["Wearing a mask is a simple precaution during flu season.","流感季節戴口罩是一個簡單的預防措施。","動名詞 Wearing a mask 當主詞。"]],
 "pre-=事先|caution=小心","事先小心 → 預防措施","🦺|預防"],
["strike a balance","phr.","取得平衡",[
 ["It's important to strike a balance between study and rest.","在讀書和休息之間取得平衡很重要。","strike a balance between A and B：在 A 和 B 之間取得平衡；strike 在這裡不是「打」。"],
 ["Parents try to strike a balance between work and family.","父母努力在工作和家庭之間取得平衡。","try to V 努力去做。"],
 ["The government must strike the right balance between growth and the environment.","政府必須在經濟成長和環境之間取得適當的平衡。","strike the right balance 取得適當的平衡；三態 strike-struck-struck。"]],
 "","","⚖️|取得平衡"],
["profound","adj.","深遠的；深刻的",[
 ["Her grandmother had a profound influence on her life.","她的祖母對她的人生有深遠的影響。","have a profound influence / effect / impact on 對……有深遠影響。"],
 ["The book made a profound impression on me.","這本書給我留下了深刻的印象。","make an impression on 給……留下印象。"],
 ["There have been profound changes in the way we communicate.","我們溝通的方式有了深刻的改變。","There have been + 複數名詞：現在完成式。"]],
 "pro-=向前|found=底部","往前深入到底 → 深遠的","🌊|深遠"],
["keen","adj.","熱衷的；強烈的；敏銳的",[
 ["My brother is keen on playing basketball.","我哥哥熱衷打籃球。","be keen on + 名詞 / V-ing：熱衷於……；on 是介系詞。"],
 ["She has a keen interest in astronomy.","她對天文學有濃厚的興趣。","keen interest 濃厚的興趣，是常見搭配。"],
 ["Dogs have a keen sense of smell.","狗有敏銳的嗅覺。","a keen sense of smell 敏銳的嗅覺。"]],
 "","","🔍|熱衷敏銳"],
["contrast","n./v.","對比；對照",[
 ["There is a sharp contrast between the rich and the poor in the city.","這座城市裡貧富差距非常明顯。","a sharp / striking contrast between A and B：A 和 B 之間的強烈對比。"],
 ["In contrast to her sister, Amy is very quiet.","和她姊姊相比，艾咪很安靜。","in contrast to / with + 名詞：和……相比；by contrast 放句首表示「相較之下」。"],
 ["The writer contrasts city life with country life.","作者把城市生活和鄉村生活做對比。","contrast A with B 把 A 和 B 做對比；當動詞時重音在後。"]],
 "contra-=相反|st=站立","站在相反面 → 對比","☯️|對比"],
["attempt","n./v.","嘗試；企圖",[
 ["He passed the driving test on his first attempt.","他第一次嘗試就通過了駕照考試。","on one's first attempt 第一次嘗試就……。"],
 ["They made an attempt to climb Jade Mountain in one day.","他們嘗試一天之內攻頂玉山。","make an attempt to V 嘗試做……；attempt 比 try 正式。"],
 ["The prisoner attempted to escape but failed.","那名囚犯企圖逃跑，但失敗了。","attempt to V：企圖、試圖做……（常暗示沒有成功）。"]],
 "at-=朝向|tempt=嘗試","朝目標試試看 → 嘗試","🎯|嘗試"],
["tremendous","adj.","巨大的；極大的",[
 ["The team made a tremendous effort to win the game.","球隊付出極大的努力贏得比賽。","make a tremendous effort to V 付出極大努力；比 big 更有力。"],
 ["The Internet has had a tremendous impact on our lives.","網路對我們的生活產生了巨大的影響。","have an impact on 對……有影響；現在完成式表示影響延續到現在。"],
 ["She felt a tremendous sense of relief after the exam.","考試後她感到如釋重負。","a sense of relief 鬆一口氣的感覺。"]],
 "tremend=使人顫抖|-ous=形容詞字尾","大到讓人發抖 → 巨大的","🐘|巨大"],
["raise awareness","phr.","提高意識；喚起關注",[
 ["The campaign aims to raise awareness of ocean pollution.","這項活動的目的是喚起大眾對海洋污染的關注。","raise awareness of / about + 名詞；aim to V 目的在於……。"],
 ["Students made posters to raise public awareness about recycling.","學生們製作海報，提高大眾的回收意識。","raise public awareness 提高大眾意識；to raise 表示目的。"],
 ["The video has raised awareness among teenagers.","這部影片提高了青少年的意識。","raise（及物，舉起、提高）vs. rise（不及物，上升）：awareness 是受詞，所以用 raise。"]],
 "","","📣|喚起關注"],
["meet the needs","phr.","滿足需求",[
 ["The new library was designed to meet the needs of students.","新圖書館是為了滿足學生的需求而設計的。","meet the needs / demand / requirements of 滿足……的需求；也可以說 satisfy the needs，但 meet 最常用。"],
 ["This bus route doesn't meet the needs of people in the mountains.","這條公車路線無法滿足山區居民的需求。","meet 在這裡不是「遇見」，而是「滿足、符合」。"],
 ["Teachers try to meet the needs of every student in class.","老師試著滿足班上每位學生的需求。","every + 單數名詞：every student。"]],
 "","","✅|滿足需求"],
["bear in mind","phr.","記住；牢記",[
 ["Bear in mind that the library closes at nine.","記住，圖書館九點關門。","bear in mind that + 子句；bear 在這裡是「懷有、承受」，不是「熊」。"],
 ["Please bear these safety rules in mind.","請牢記這些安全規則。","受詞是名詞時常放中間：bear 名詞 in mind；三態 bear-bore-borne。"],
 ["You should bear in mind how much your parents have done for you.","你應該記住你父母為你付出了多少。","受詞是長的名詞子句時，放在 in mind 後面：bear in mind + how 子句。"]],
 "","","🧠|牢記"],
/* ---------- 進階片語 ---------- */
["be subject to","phr.","易受……影響；須服從……",[
 ["The schedule is subject to change.","時間表可能會有變動。","be subject to + 名詞：容易受到……；這裡的 to 是介系詞，後面接名詞 change。"],
 ["Flights are subject to delays during typhoon season.","颱風季節班機容易延誤。","subject 在片語裡是形容詞「受支配的」，不是「科目」。"],
 ["All visitors will be subject to security checks.","所有訪客都必須接受安全檢查。","be subject to 也可表示「須服從、須接受（規定、檢查）」；will be 是未來式。"]],
 "","","📌|易受影響"],
["be entitled to","phr.","有權……；有資格……",[
 ["Every citizen is entitled to vote at the age of 18.","每位公民在十八歲時都有投票權。","be entitled to + 原形動詞（這裡 to 是不定詞）。"],
 ["Students are entitled to a discount at the museum.","學生在博物館享有折扣。","be entitled to + 名詞（這裡 to 是介系詞）：有權得到……。"],
 ["All workers should be entitled to paid leave.","所有勞工都應該享有帶薪假。","entitle 是「給予權利」，be entitled to 是被動形式，表示「被賦予權利」；should be + p.p.。"]],
 "","","🎫|有權利"],
["in terms of","phr.","就……而言；從……方面來說",[
 ["In terms of price, this phone is the best choice.","就價格而言，這支手機是最好的選擇。","in terms of + 名詞；放句首後面加逗號。"],
 ["The two cities are very different in terms of culture.","這兩座城市在文化方面差異很大。","in terms of 也可以放在句尾。"],
 ["In terms of saving time, taking the MRT is better than driving.","就節省時間來說，搭捷運比開車好。","of 是介系詞，後面接 V-ing：saving time。"]],
 "","","🔎|就……而言"],
["on behalf of","phr.","代表……",[
 ["On behalf of the class, I'd like to thank our teacher.","我謹代表全班感謝我們的老師。","on behalf of + 人 / 團體：代表……；常用在正式致詞。"],
 ["The coach accepted the award on behalf of the team.","教練代表球隊領獎。","on behalf of 也可以放在句尾。"],
 ["She spoke on my behalf at the meeting.","她在會議上代表我發言。","on behalf of 人 = on 人's behalf：on my behalf。"]],
 "","","🎤|代表"],
["take for granted","phr.","把……視為理所當然",[
 ["We often take our parents' love for granted.","我們常把父母的愛視為理所當然。","take + 受詞 + for granted：受詞放在 take 和 for 中間。"],
 ["Don't take clean water for granted.","別把乾淨的水視為理所當然。","granted 是 grant（給予、承認）的過去分詞。"],
 ["Many people take it for granted that the Internet is always available.","很多人認為網路隨時可用是理所當然的。","受詞是 that 子句時，用虛受詞 it：take it for granted that + 子句。"]],
 "","","🙄|理所當然"],
["make up for","phr.","彌補",[
 ["I studied all weekend to make up for lost time.","我整個週末都在讀書，好彌補失去的時間。","make up for + 名詞 / V-ing：彌補……；= compensate for。"],
 ["Nothing can make up for the loss of a friend.","沒有什麼能彌補失去朋友的遺憾。","Nothing 當主詞，表示「沒有任何事物」。"],
 ["He bought her flowers to make up for forgetting her birthday.","他買花送她，彌補忘了她生日的過錯。","for 是介系詞，後面接 V-ing：forgetting。"]],
 "","","🎁|彌補"],
["regardless of","phr.","不管；不論",[
 ["Everyone can join the club regardless of age.","不論年齡，每個人都可以加入社團。","regardless of + 名詞：不管……；of 不能漏掉。"],
 ["He went jogging regardless of the rain.","他不管下雨還是去慢跑。","go + V-ing 去做某活動：go jogging。"],
 ["Regardless of what others say, follow your dream.","不管別人怎麼說，追隨你的夢想。","regardless of + wh- 名詞子句；= no matter what others say。"]],
 "","","🤷|不管"],
["be accustomed to","phr.","習慣於……",[
 ["I'm not accustomed to getting up so early.","我不習慣這麼早起床。","be accustomed to + V-ing：to 是介系詞，後面接 V-ing；= be used to + V-ing。"],
 ["She soon became accustomed to the cold weather in Canada.","她很快就習慣了加拿大的寒冷天氣。","become / get accustomed to 表示「變得習慣」的過程。"],
 ["Farmers are accustomed to working in the sun.","農夫習慣在太陽底下工作。","別和 used to + 原形動詞（過去常常）搞混。"]],
 "","","☕|習慣"],
["in favor of","phr.","贊成；支持",[
 ["Most students are in favor of the new dress code.","大部分學生贊成新的服裝規定。","be in favor of + 名詞 / V-ing：贊成……；反義是 be against。"],
 ["Are you in favor of banning plastic straws?","你贊成禁用塑膠吸管嗎？","of 是介系詞，後面接 V-ing：banning。"],
 ["The vote was 20 to 5 in favor of the plan.","投票結果是二十比五，支持這項計畫。","in favor of 也可以放在名詞後面，表示「有利於……、支持……」。"]],
 "","","👍|贊成"],
["at the expense of","phr.","以……為代價；犧牲……",[
 ["He became rich at the expense of his health.","他犧牲健康換來了財富。","at the expense of + 名詞：以……為代價。"],
 ["Don't study late at night at the expense of sleep.","別犧牲睡眠熬夜讀書。","expense 是「花費、代價」；at the expense of 強調付出的代價。"],
 ["The city grew quickly at the expense of the environment.","這座城市以環境為代價快速發展。","at the expense of + the environment：犧牲環境。"]],
 "","","⚖️|代價"],
["be bound to","phr.","必定會……；一定會……",[
 ["If you keep practicing, you are bound to improve.","如果你持續練習，一定會進步。","be bound to + 原形動詞：必定……；這裡的 to 是不定詞，接原形動詞。"],
 ["It's bound to rain this afternoon. Look at those dark clouds!","今天下午一定會下雨，看看那些烏雲！","It's bound to rain：天氣的 it 當主詞。"],
 ["When you learn something new, there are bound to be some mistakes.","學新東西時，難免會犯一些錯。","there are bound to be + 名詞：一定會有……；辨析：be bound to + V（必定）vs. be accustomed to + V-ing（習慣）。"]],
 "","","🔒|必定"],
/* ---------- 字根字首 ---------- */
["antibiotic","n.","抗生素",[
 ["The doctor gave me some antibiotics for my infection.","醫生開了一些抗生素給我治療感染。","antibiotic 是可數名詞，常用複數 antibiotics。"],
 ["You should take antibiotics only when a doctor tells you to.","只有在醫生指示時，你才應該服用抗生素。","tells you to 後面省略了 take antibiotics，避免重複。"],
 ["Antibiotics don't work against viruses like the flu.","抗生素對流感之類的病毒無效。","work against 對……有效；like 在這裡是介系詞「像是」。"]],
 "anti-=對抗|bio=生命|-tic=形容詞／名詞字尾","對抗（細菌）生命的藥 → 抗生素","💊|抗生素"],
["antisocial","adj.","不愛社交的；反社會的",[
 ["He's not antisocial; he's just shy.","他不是不愛交際，只是害羞。","分號 ; 連接兩個意思相關的句子。"],
 ["Spending too much time online may make teens antisocial.","花太多時間上網可能會讓青少年變得不愛社交。","make + 受詞 + 形容詞：使……變得……。"],
 ["Vandalism is a kind of antisocial behavior.","故意破壞公物是一種反社會行為。","antisocial behavior 指傷害他人或社會的行為。"]],
 "anti-=反對|soci=社會；同伴|-al=形容詞字尾","和社會、人群唱反調 → 不愛社交的","🙈|不愛社交"],
["counterpart","n.","對應的人或物；對手",[
 ["The Minister of Education met his Japanese counterpart.","教育部長和日本教育部長會面。","counterpart 指「在另一方擔任相同職位或功能的人／物」。"],
 ["Taiwanese students study longer hours than their American counterparts.","台灣學生讀書時數比美國學生還長。","their American counterparts = American students，避免重複 students。"],
 ["The new model is much lighter than its counterpart from last year.","新機型比去年的同類機型輕得多。","much 修飾比較級 lighter。"]],
 "counter-=相對|part=部分","相對的另一部分 → 對應的人或物","🪞|對應"],
["counterattack","n./v.","反擊",[
 ["The team launched a quick counterattack and scored a goal.","球隊發動快速反擊並踢進一球。","launch a counterattack 發動反擊。"],
 ["The army counterattacked at dawn.","軍隊在黎明時反擊。","counterattack 當動詞；at dawn 在黎明。"],
 ["After losing the first set, she counterattacked strongly.","輸掉第一局後，她強力反擊。","After + V-ing：在……之後。"]],
 "counter-=反、對抗|attack=攻擊","反過來攻擊 → 反擊","⚔️|反擊"],
["automobile","n.","汽車",[
 ["The automobile changed the way people traveled.","汽車改變了人們旅行的方式。","automobile 是 car 的正式說法。"],
 ["Germany is famous for its automobile industry.","德國以汽車工業聞名。","be famous for 以……出名；automobile 可以放在名詞前當形容詞用。"],
 ["Before automobiles were invented, people traveled by horse.","在汽車發明之前，人們騎馬旅行。","by + 交通工具，不加冠詞：by horse、by bus。"]],
 "auto-=自己|mobile=能移動的","自己會動的 → 汽車","@automobile"],
["autonomy","n.","自主權；自治",[
 ["Teenagers want more autonomy in making decisions.","青少年想在做決定時有更多自主權。","autonomy in + V-ing：在……方面的自主權。"],
 ["The university has autonomy over its own courses.","這所大學可以自主決定自己的課程。","have autonomy over + 名詞：對……有自主權。"],
 ["Giving students some autonomy can help them grow.","給學生一些自主權能幫助他們成長。","help + 受詞 + 原形動詞。"]],
 "auto-=自己|nomy=法則","自己訂法則 → 自主、自治","🧭|自主"],
["self-discipline","n.","自律；自制力",[
 ["Studying at home requires a lot of self-discipline.","在家讀書需要很強的自律。","主詞是動名詞 Studying at home，用單數動詞 requires。"],
 ["Athletes need self-discipline to train every day.","運動員需要自律才能每天訓練。","to train 表示目的。"],
 ["Good habits come from self-discipline.","好習慣來自自律。","self- 開頭的複合字中間有連字號。"]],
 "self-=自己|discipline=紀律","自己管自己的紀律 → 自律","🧘|自律"],
["beneficial","adj.","有益的",[
 ["Regular exercise is beneficial to your health.","規律運動對健康有益。","be beneficial to + 名詞：對……有益；名詞 benefit。"],
 ["Reading is beneficial for children's language development.","閱讀對孩子的語言發展有益。","be beneficial for 也可以。"],
 ["The new policy will be beneficial to both workers and companies.","新政策對勞工和公司雙方都有益。","both A and B 兩者都。"]],
 "bene-=好|fic=做|-ial=形容詞字尾","做好事的 → 有益的","🥦|有益"],
["benefactor","n.","捐助者；恩人",[
 ["A kind benefactor paid for the new library.","一位善心的捐助者出錢蓋了新圖書館。","pay for 為……付錢。"],
 ["The orphans wrote letters to thank their benefactor.","孤兒們寫信感謝他們的恩人。","to thank 表示目的。"],
 ["The school named the hall after its benefactor.","學校以捐助者的名字為禮堂命名。","name A after B：以 B 的名字為 A 命名。"]],
 "bene-=好|fact=做|-or=人","做好事的人 → 捐助者","🎗️|捐助者"],
["malnutrition","n.","營養不良",[
 ["Many children in poor areas suffer from malnutrition.","貧窮地區的許多孩子營養不良。","suffer from + 疾病 / 問題：受……所苦。"],
 ["Malnutrition can lead to serious health problems.","營養不良會導致嚴重的健康問題。","lead to + 名詞：導致……；to 是介系詞。"],
 ["Skipping meals for a long time may cause malnutrition.","長期不吃正餐可能造成營養不良。","skip meals 不吃正餐；動名詞當主詞。"]],
 "mal-=壞、不良|nutrition=營養","不良的營養 → 營養不良","🍚|營養不良"],
["malicious","adj.","惡意的",[
 ["Someone spread malicious rumors about her online.","有人在網路上散播關於她的惡意謠言。","malicious rumors 惡意謠言；spread 三態同形。"],
 ["The program contains malicious software.","這個程式含有惡意軟體。","malicious software 惡意軟體（malware 就是 mal + software）。"],
 ["His comments were not malicious; he was just joking.","他的評論並不帶惡意，他只是在開玩笑。","過去進行式 was joking 表示當時正在做的事。"]],
 "mal-=壞|-icious=形容詞字尾","懷著壞心的 → 惡意的","😈|惡意"],
["pandemic","n.","（全球性）大流行病",[
 ["The pandemic changed the way we work and study.","疫情改變了我們工作和學習的方式。","the way + 子句：……的方式。"],
 ["During the pandemic, many classes were held online.","疫情期間，許多課程改在線上進行。","during + 名詞；were held 是被動語態。"],
 ["Scientists are trying to prevent the next pandemic.","科學家正努力預防下一次全球大流行。","pandemic（全球）比 epidemic（地區性流行）範圍更大。"]],
 "pan-=全部|dem=人民|-ic=名詞字尾","影響全部人民的病 → 大流行病","🌐|大流行"],
["panorama","n.","全景",[
 ["From the top of Taipei 101, you can enjoy a panorama of the city.","從台北 101 頂樓可以欣賞城市全景。","a panorama of + 地點：……的全景。"],
 ["The photo shows a panorama of the mountains.","這張照片呈現了群山的全景。","形容詞是 panoramic：a panoramic view 全景。"],
 ["The book gives a panorama of Taiwanese history.","這本書全面概述了台灣歷史。","panorama 也可以比喻「全面的概述」。"]],
 "pan-=全部|orama=景色","全部的景色 → 全景","@panorama"],
["omnivore","n.","雜食動物",[
 ["Bears are omnivores; they eat both plants and meat.","熊是雜食動物，牠們吃植物也吃肉。","both A and B；分號連接兩個相關的句子。"],
 ["Humans are omnivores, too.","人類也是雜食動物。","肯定句的「也」放句尾用 too。"],
 ["Unlike lions, omnivores can live on plants when meat is scarce.","和獅子不同，雜食動物在肉類缺乏時可以靠植物生存。","live on 以……為生；scarce 缺乏的。形容詞 omnivorous。"]],
 "omni-=全部|vore=吃","什麼都吃 → 雜食動物","🐻|雜食動物"]
];

/* ---------- 記憶小撇步（沒有字根可拆的字） ---------- */
Object.assign(MEMO, {
  "rob":"rob 搶「人或地方」：rob 人 of 物；steal 偷「東西」：steal 物 from 人。robber 是強盜，robbery 是搶案。",
  "deny":"deny 後面接 V-ing 或 that 子句：deny doing（否認做過）；名詞 denial。和 refuse to V（拒絕去做）分清楚。",
  "gain":"gain 獲得、增加：gain weight / experience / popularity；反義 lose。No pain, no gain：不勞則無獲。",
  "blame":"兩個句型：blame 人 for 事、blame 事 on 人。be to blame：該負責（主動形式表被動意思）。",
  "scarce":"scarce 是「不夠分」：scare（嚇）多一個 c，東西不夠，大家都嚇到了！副詞 scarcely = hardly 幾乎不。",
  "rare":"rare 本來就少見；rarely 很少（頻率副詞，= seldom）。牛排三分熟也是 rare。",
  "wound":"wound [wund] 被武器所傷；injure 意外受傷；hurt 最口語。wind（纏繞）的過去式也是 wound，但唸 [waʊnd]。",
  "alter":"alter 改變 / altar 祭壇，發音一樣。改衣服用 alter：衣服 alter 一下就合身。",
  "morale":"moral 道德 / morale 士氣：morale 多一個 e，像 energy（精力）多一點，士氣就高！重音在後 [məˋræl]。",
  "personnel":"personal 個人的（重音在前）/ personnel 人員（重音在後，-nnel 兩個 n）。全體人員人很多，所以 n 也多一個。",
  "urge":"urge 力勸：urge 人 to V；也可當名詞「衝動」。和 urgent（緊急的）同一家，催得很急！",
  "fame":"fame（n.）名聲 → famous（adj.）有名的：去掉 e 加 ous。rise to fame 成名。",
  "latter":"later 一個 t 是「之後」；latter 兩個 t 是「後者」：兩者裡排第二（two）的那個，所以有兩個 t！",
  "severe":"severe 嚴重的、嚴厲的：severe weather / pain / punishment。se-ve-re 三個 e，嚴重到三倍！",
  "strike a balance":"strike 敲、達成：像敲定一筆交易（strike a deal），strike a balance 就是敲定平衡點。",
  "keen":"keen 熱衷的：be keen on + V-ing；也可以是敏銳的：a keen sense of smell。和 key 一樣是 k 開頭，熱衷的事就是你的關鍵！",
  "raise awareness":"raise（及物）舉起、提高 + 受詞 awareness；aware（adj.）知道的 + -ness（名詞字尾）= awareness 意識。",
  "meet the needs":"meet 除了「遇見」，還有「滿足、符合」：meet the needs / demand / deadline（趕上期限）。",
  "bear in mind":"bear 承受、懷有：把東西放在心裡帶著走 → 記住。= keep in mind。",
  "be subject to":"subject 科目 → 受支配的：be subject to change 可能變動。to 是介系詞，後面接名詞。",
  "be entitled to":"title 是頭銜、名義，en-title 給你名義 → 有權利。be entitled to + 名詞 / 原形動詞。",
  "in terms of":"term 是「用語、條件」：in terms of 用……的條件來看 → 就……而言。",
  "on behalf of":"half 是一半：站在某人那一半 → 代表某人。on behalf of 人 = on 人's behalf。",
  "take for granted":"grant 是給予：以為是別人「本來就該給的」→ 視為理所當然。take it for granted that + 子句。",
  "make up for":"make up 補上 + for 為了：為了……而補上 → 彌補。for 後面接名詞或 V-ing。",
  "regardless of":"regard 看待 + -less 不 → 不看、不在乎 → 不管。後面記得加 of。",
  "be accustomed to":"custom 習俗 → accustomed 習慣的。to 是介系詞：be accustomed to + V-ing，跟 be used to + V-ing 一樣。",
  "in favor of":"favor 偏愛、支持：in favor of 站在支持的那一邊 → 贊成。反義 be against。",
  "at the expense of":"expense 花費：用……當花費去換 → 以……為代價。",
  "be bound to":"bound 被綁住的：被命運綁住，一定會發生 → 必定會。to 是不定詞，接原形動詞。"
});

const S2_V3_GRAMMAR = [
{ id:"g1", title:"同義字辨析：語氣和搭配的差別",
  intro:"中文意思一樣的字，英文常常語氣強弱不同、搭配的介系詞和句型也不同。學測的字彙題和綜合測驗，就是考你分不分得出這些細微差別。",
  table:[["同義字組","差別","搭配與例句"],["complain / protest / object","complain 日常抱怨；protest 公開抗議；object 表示反對","complain about、protest against、object to + V-ing"],["steal / rob","steal 偷「東西」；rob 搶「人或地方」","steal 物 from 人；rob 人 of 物"],["refuse / decline / deny","refuse 拒絕去做；decline 委婉拒絕；deny 否認","refuse to V；decline the offer；deny + V-ing"],["request / require / insist / urge","request 禮貌請求；require 規定需要；insist 堅決要求；urge 力勸、呼籲","+ that + 主詞 + (should) + 原形動詞"],["acquire / attain / gain","acquire 學習習得；attain 努力達到目標；gain 逐漸增加或得到好處","acquire skills、attain a goal、gain weight"],["fame / reputation","fame 出名（很多人知道）；reputation 別人對你的評價（可好可壞）","rise to fame；a good reputation"],["accuse / blame","accuse 指控罪行；blame 責怪過錯","accuse 人 of；blame 人 for / blame 事 on 人"],["rare / scarce","rare 本來就罕見；scarce 暫時不夠用","a rare bird；Water is scarce."],["hurt / injure / wound","hurt 最口語；injure 意外受傷；wound 被武器所傷","be injured in an accident；be wounded in a battle"]],
  points:[
   "steal 和 rob 的受詞不同：He stole my wallet. / He robbed me of my wallet. 不能說 He robbed my wallet.",
   "accuse 用 of，blame 用 for：accuse him of cheating；blame him for the mistake。介系詞是學測愛考的陷阱。",
   "deny + V-ing（否認做過），refuse + to V（拒絕去做）：He denied taking the money. / He refused to take the money.",
   "insist、urge、request、require、suggest 表示「要求、建議」時，後面的 that 子句動詞用 (should) + 原形：The doctor insisted that he stop smoking.（不是 stops）",
   "insist 表示「堅稱（某事是事實）」時，that 子句照一般時態：She insisted that she was innocent. 這是學測最愛考的陷阱。",
   "rare 和 scarce 都是「少」，但 scarce 強調「需要卻不夠」：Water is scarce in the desert. / Pandas are rare animals."],
  ex:[
   ["The thief robbed the old lady of her bag.","小偷搶走了老太太的包包。","rob 人 of 物：受詞是被搶的人。"],
   ["She was accused of cheating, but she denied doing it.","她被指控作弊，但她否認有這麼做。","accuse 人 of；deny + V-ing。"],
   ["The coach insisted that every player arrive on time.","教練堅決要求每位球員準時到。","insist that + 主詞 + (should) + 原形動詞：arrive 不加 s。"],
   ["He acquired a lot of knowledge and gained confidence at the same time.","他學到了很多知識，同時也增加了自信。","acquire knowledge；gain confidence。"],
   ["Pandas are rare animals, and their food can become scarce in winter.","貓熊是稀有動物，而牠們的食物在冬天可能變得短缺。","rare（本來就罕見）放名詞前；scarce（不夠用）放 become 後面。"]]},
{ id:"g2", title:"易混淆字：長得像，意思大不同",
  intro:"Level 3～4 有很多「只差一兩個字母」或「同一個字根不同字尾」的字。只要抓住拼字差在哪裡、字尾代表什麼，就不會被選項騙。",
  table:[["易混淆字","意思","記憶法"],["adapt / adopt","adapt 適應、改編；adopt 採用、收養","adapt to（適應）有 a；adopt 有 o，像抱著一個寶寶（收養）"],["precede / proceed","precede 在……之前；proceed 繼續進行、前往","pre 事先：走在前面；pro 向前：繼續往前走"],["later / latter","later 之後（時間）；latter 後者（兩者中）","latter 兩個 t：the former / the latter"],["conscious / conscience","conscious 有意識的、察覺的（adj.）；conscience 良心（n.）","conscience 結尾 -ence 是名詞字尾"],["complement / compliment","complement 補足、互補；compliment 讚美","e = complete 補完整；i = I like it 讚美"],["continual / continuous","continual 一再發生（有停頓）；continuous 連續不斷","continuous 的 ous 像一條沒斷開的尾巴"],["moral / morale","moral 道德的、寓意；morale 士氣","morale 多一個 e：energy 多，士氣高"],["stationary / stationery","stationary 靜止的；stationery 文具","a = stand 站著不動；e = eraser、envelope 文具"],["considerable / considerate","considerable 相當大的；considerate 體貼的","-able 數量可觀；-ate 為人著想"],["respectful / respectable","respectful 尊重別人的；respectable 值得尊敬的","-ful 充滿敬意（主動）；-able 能被尊敬（被動）"],["imaginary / imaginative","imaginary 虛構的；imaginative 有想像力的","-ary 存在於想像中；-ative 有想像的能力"],["industrial / industrious","industrial 工業的；industrious 勤勞的","-al 和工業有關；-ous 充滿勤奮"],["emigrate / immigrate","emigrate 移出；immigrate 移入","e = exit 出去；im = in 進來"],["childish / childlike","childish 幼稚的（負面）；childlike 天真的（正面）","-ish 像小孩（不好）；-like 像小孩（純真）"],["historic / historical","historic 有歷史意義的；historical 和歷史有關的","historic moment；historical novel"]],
  points:[
   "看字尾判斷：-able / -ible 常是「可以被……的」（被動），-ful 常是「充滿……的」（主動）：respectable 值得尊敬的，respectful 尊重人的。",
   "adapt to + 名詞 / V-ing（適應）的 to 是介系詞；adapt 也可以是「改編」：The novel was adapted into a movie.",
   "stationery 是不可數名詞，不加 s；precede 是及物動詞，直接接受詞；proceed 是不及物動詞，要說 proceed to + 地點。",
   "considerable 修飾數量、程度（a considerable amount）；considerate 修飾人（It's considerate of you.）。",
   "emigrate from 本國，immigrate to 新國家；名詞 emigrant（移出者）、immigrant（移入者）。",
   "學測陷阱：選項常把這些字一起放進來，先判斷空格需要的「意思」，再看拼字。"],
  ex:[
   ["It took me a while to adapt to the new school, which adopted a new grading system.","我花了一段時間才適應新學校，那所學校採用了新的評分制度。","adapt to 適應；adopt 採用。"],
   ["A short speech preceded the ceremony, and then the students proceeded to their classrooms.","典禮前先有簡短致詞，接著學生們前往教室。","precede 在……之前；proceed to 前往。"],
   ["She paid me a compliment on how well my scarf complemented my coat.","她稱讚我的圍巾和外套很搭。","pay 人 a compliment 讚美；complement 互補、相襯。"],
   ["The car was stationary, so I went into the store to buy some stationery.","車子停著不動，所以我進店裡買了一些文具。","stationary 靜止的；stationery 文具。"],
   ["His grandparents emigrated from Japan and immigrated to Brazil.","他的祖父母從日本移出，移民到巴西。","emigrate from 移出；immigrate to 移入。"]]},
{ id:"g3", title:"進階搭配詞：形容詞＋名詞、動詞＋名詞",
  intro:"英文的搭配詞（collocation）是「習慣上一起用」的組合，不能從中文直翻。中文說「濃咖啡」，英文是 strong coffee，不是 thick coffee；「大雨」是 heavy rain，不是 big rain。",
  table:[["類型","常考搭配","意思"],["形容詞＋名詞","strong coffee、heavy rain、heavy traffic","濃咖啡、大雨、交通繁忙"],["形容詞＋名詞","fierce competition、keen interest、vivid memory","激烈競爭、濃厚興趣、鮮明的記憶"],["形容詞＋名詞","tremendous effort、substantial increase、severe weather、profound influence","極大的努力、大幅增加、惡劣天氣、深遠的影響"],["動詞＋名詞","raise awareness、meet the needs / a deadline","提高意識、滿足需求／趕上期限"],["動詞＋名詞","make a commitment、make an attempt、make an effort","做出承諾、嘗試、努力"],["動詞＋名詞","reach / draw a conclusion、conduct a survey","得出結論、進行調查"],["動詞＋名詞","take precautions、face the consequences","採取預防措施、承擔後果"],["動詞＋名詞","strike a balance、pose a threat","取得平衡、構成威脅"],["其他固定用法","bear in mind、in sharp contrast to","記住、和……形成強烈對比"]],
  points:[
   "不能中文直翻：「濃茶」是 strong tea，「抽菸抽很凶的人」是 heavy smoker，「大錯」是 a big / serious mistake。",
   "draw / reach / come to a conclusion 都可以，但不說 make a conclusion；conduct 常搭配 survey、experiment、research。",
   "meet 有「滿足、符合」的意思：meet the needs、meet the demand、meet the deadline（趕上期限）。",
   "raise 是及物動詞（要接受詞）：raise awareness / money / a question；rise 是不及物：Prices rose.",
   "commitment to、contrast to、be keen on 的 to / on 是介系詞，後面接名詞或 V-ing：a commitment to helping others。",
   "take precautions against 預防……；face / suffer the consequences 承擔後果：這些名詞常用複數。"],
  ex:[
   ["The campaign raised awareness of animal rights.","這項活動喚起了大眾對動物權的關注。","raise awareness of 提高對……的意識。"],
   ["We conducted a survey and reached a surprising conclusion.","我們做了一項調查，得出一個令人驚訝的結論。","conduct a survey；reach a conclusion。"],
   ["Social media has had a profound influence on teenagers.","社群媒體對青少年產生了深遠的影響。","have a profound influence on 對……有深遠影響。"],
   ["Please bear in mind that we must meet the deadline.","請記住我們必須趕上截止期限。","bear in mind that 子句；meet the deadline。"],
   ["He made a tremendous effort and finally won the race.","他付出極大的努力，終於贏得了比賽。","make a tremendous effort。"]]},
{ id:"g4", title:"進階片語：介系詞 to 和不定詞 to 要分清",
  intro:"Level 3～4 的片語很多都藏著 to、of、for，學測最愛考：後面到底接原形動詞、V-ing，還是名詞？",
  table:[["片語","意思","後面接"],["be subject to","易受……影響；須服從","名詞（to 是介系詞）"],["be entitled to","有權……","名詞 或 原形動詞"],["be accustomed to","習慣於","名詞 / V-ing（to 是介系詞）"],["be bound to","必定會","原形動詞（to 是不定詞）"],["in terms of","就……而言","名詞 / V-ing"],["on behalf of","代表……","人 / 團體"],["take ... for granted","視為理所當然","受詞放中間；that 子句用 take it for granted that"],["make up for","彌補","名詞 / V-ing"],["regardless of","不管","名詞 / wh- 子句"],["in favor of","贊成","名詞 / V-ing"],["at the expense of","以……為代價","名詞"]],
  points:[
   "介系詞 to 接名詞或 V-ing：be accustomed to、be used to、look forward to、object to、be committed to。",
   "不定詞 to 接原形動詞：be bound to、be likely to、be supposed to。分辨法：在 to 後面放名詞試試，能放就是介系詞。",
   "take ... for granted：受詞是 that 子句時要用虛受詞 it：We take it for granted that water is clean.",
   "on behalf of 人 = on 人's behalf：on behalf of the class / on my behalf。",
   "regardless of 後面接名詞或 wh- 子句，不能直接接句子：regardless of what he says（○）、regardless he says（×）。",
   "be accustomed to + V-ing（習慣）≠ used to + 原形（過去常常）：I'm accustomed to getting up early. / I used to get up early."],
  ex:[
   ["The price is subject to change without notice.","價格可能隨時變動，恕不另行通知。","be subject to + 名詞 change。"],
   ["I'm not accustomed to speaking in public, but I'm bound to get better.","我不習慣在公開場合說話，但我一定會進步。","accustomed to + V-ing；bound to + 原形。"],
   ["On behalf of our team, I thank everyone who helped us.","我代表我們的團隊感謝每一位幫助過我們的人。","on behalf of + 團體。"],
   ["We should never take it for granted that our parents will always be there.","我們永遠不該理所當然地認為父母會一直都在。","take it for granted that + 子句。"],
   ["He worked overtime to make up for the lost time, regardless of how tired he was.","不管有多累，他都加班來彌補失去的時間。","make up for + 名詞；regardless of + how 子句。"]]}
];

const S2_V3_QUIZ = [
 ["Someone ___ my wallet on the bus yesterday.",["robbed","robbed me","stole","rob"],2,"偷的是「東西」（my wallet），用 steal 物；rob 的受詞是人或地方，要說 robbed me of my wallet。","g1"],
 ["The man was accused ___ stealing a car.",["of","for","with","on"],0,"accuse 人 of + V-ing：指控某人做了某事；blame 才用 for。","g1"],
 ["Don't blame the accident ___ the weather. You were driving too fast.",["for","of","with","on"],3,"blame 事 on 人 / 物：把某事歸咎於……；blame 人 for 事 的介系詞才是 for。","g1"],
 ["The suspect denied ___ the store.",["to rob","robbing","rob","robbed"],1,"deny + V-ing：否認做過某事；不能接 to V。","g1"],
 ["The teacher insisted that every student ___ the essay by Friday.",["hands in","hand in","handed in","handing in"],1,"insist 表示「堅決要求」：that + 主詞 + (should) + 原形動詞，所以是 hand in，不加 s。","g1"],
 ["He insisted ___ paying for the meal, so I let him.",["in","to","at","on"],3,"insist on + V-ing：堅持做某事；on 是介系詞，所以後面是 paying。","g1"],
 ["During the drought, water became so ___ that people had to save every drop.",["scarce","rare","rich","valuable"],0,"「需要卻不夠用」是 scarce；rare 指本來就罕見，例如稀有動物。","g1"],
 ["She ___ a lot of experience from working as a volunteer at the hospital.",["obtained","required","gained","demanded"],2,"gain experience 是固定搭配：獲得經驗；obtain 多用在取得許可、文件。","g1"],
 ["Three people were badly ___ in the car accident last night.",["wounded","altered","blamed","injured"],3,"意外事故受傷用 injure；wound 多指被刀槍等武器所傷。","g1"],
 ["It took Tom a few months to ___ to life in Japan.",["adapt","adopt","adept","adjust with"],0,"adapt to 適應；adopt 是採用、收養；adjust 要用 adjust to。","g2"],
 ["Passengers for Flight 202, please ___ to Gate 8 for boarding.",["precede","process","proceed","produce"],2,"proceed to + 地點：前往……；precede 是「在……之前」，不合文意。","g2"],
 ["Thank you for the nice ___. I'm glad you like my drawing.",["complement","compliment","complain","comment on"],1,"讚美是 compliment（i = I like it）；complement 是互補、補足。","g2"],
 ["The heart beats in a ___ rhythm; it never stops.",["continual","constant of","contrary","continuous"],3,"完全沒有停頓、連續不斷用 continuous；continual 是一再發生、中間有停頓。","g2"],
 ["After losing five games in a row, the team's ___ was very low.",["moral","mortal","morale","model"],2,"士氣是 morale（多一個 e）；moral 是道德、寓意。","g2"],
 ["I need to buy some ___ like pens and notebooks before school starts.",["stationery","stationary","station","stations"],0,"文具是 stationery（e = eraser、envelope）；stationary 是靜止的。","g2"],
 ["It was very ___ of you to save me a seat.",["considerable","considerate","considering","considered"],1,"形容人「體貼的」用 considerate；considerable 是數量「相當大的」。It is + 形容詞 + of 人 + to V。","g2"],
 ["Unicorns are ___ animals; they don't exist in the real world.",["imaginative","imagining","imaginable","imaginary"],3,"不存在、虛構的是 imaginary；imaginative 是有想像力的。","g2"],
 ["My grandmother is a(n) ___ woman who works from morning till night.",["industrious","industrial","industry","industrialized"],0,"形容人勤勞用 industrious；industrial 是工業的。","g2"],
 ["The typhoon caused ___ damage, and it will take months to repair the roads.",["considerate","considerable","considering","considered"],1,"「相當大的」損害：considerable damage；considerate 是體貼的，用來形容人。","g3"],
 ["The government launched a campaign to ___ awareness of the dangers of drunk driving.",["rise","grow up","arise","raise"],3,"raise awareness 提高意識；raise 是及物動詞，後面要接受詞，rise 不接受詞。","g3"],
 ["After a long discussion, the committee finally ___ a conclusion.",["made","did","reached","took"],2,"reach / draw / come to a conclusion 得出結論，不說 make a conclusion。","g3"],
 ["Researchers ___ an experiment to test the new medicine.",["conducted","made up","held up","took on"],0,"conduct an experiment / a survey / research：進行實驗、調查、研究。","g3"],
 ["I like my coffee ___, without milk or sugar.",["thick","heavy","deep","strong"],3,"「濃咖啡」是 strong coffee，不能從中文直翻成 thick coffee。","g3"],
 ["The typhoon brought ___ weather to the east coast, so all schools were closed.",["rare","severe","tall","deep"],1,"severe weather 惡劣的天氣，是固定搭配。","g3"],
 ["The new hospital was built to ___ the needs of the local people.",["take","see","meet","make"],2,"meet the needs 滿足需求；meet 在這裡是「滿足、符合」。","g3"],
 ["You should ___ precautions against food poisoning in summer.",["take","make","do","have"],0,"take precautions against 採取預防……的措施。","g3"],
 ["Her ___ to helping homeless people has inspired many volunteers.",["attempt","commitment","conclusion","consequence"],1,"commitment to + V-ing：對……的投入；文意是「她幫助遊民的投入」激勵了很多志工。","g3"],
 ["Having lived in Canada for years, she is accustomed ___ cold winters.",["for","with","to","of"],2,"be accustomed to + 名詞 / V-ing：習慣於……。","g4"],
 ["If you keep working this hard, you are bound ___ succeed.",["for","to","of","on"],1,"be bound to + 原形動詞：必定會……；to 是不定詞。","g4"],
 ["I'm not used to ___ up so early on weekends.",["getting","get","got","be getting"],0,"be used to 的 to 是介系詞，後面接 V-ing；和 be accustomed to + V-ing 一樣。","g4"],
 ["We often take it ___ granted that we have clean water.",["as","to","with","for"],3,"take it for granted that + 子句：把……視為理所當然；it 是虛受詞。","g4"],
 ["___ behalf of all the students, Amy thanked the teachers.",["On","In","At","For"],0,"on behalf of 代表……，介系詞固定用 on。","g4"],
 ["He bought her a gift to make up ___ missing her birthday party.",["with","to","for","of"],2,"make up for + 名詞 / V-ing：彌補……。","g4"],
 ["Anyone can join the contest ___ age or gender.",["on behalf of","in terms of","in favor of","regardless of"],3,"regardless of 不論、不管；文意是「不論年齡或性別都能參加」。","g4"],
 ["___ cost, the second plan is much cheaper than the first one.",["At the expense of","In terms of","On behalf of","In favor of"],1,"in terms of 就……而言；文意是「就成本來說，第二個方案便宜多了」。","g4"],
 ["Most of the students voted ___ the new school uniform, so it was adopted.",["in terms of","at the expense of","regardless of","in favor of"],3,"in favor of 贊成；大家投票贊成，所以新制服被採用了。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S2_V3_CLASS = {
g1:[
 {say:"高二同學好！今天要練一個學測超愛考的能力：同義字辨析。中文都翻成「偷、搶」，可是英文的 {steal} 和 {rob} 用法完全不一樣喔！先看黑板。", board:[["He stole my wallet.",["stole"]],["He robbed me of my wallet.",["robbed","of"]]]},
 {say:"重點在受詞！{steal} 的受詞是「東西」：偷錢包。{rob} 的受詞是「人或地方」：搶人、搶銀行，東西用 of 帶出來。所以 He robbed my wallet 是錯的！", board:[["steal 物 from 人",["steal","from"]],["rob 人 of 物",["rob","of"]],["He robbed my wallet.",[],true]]},
 {say:"口訣記起來！", chant:"steal 偷東西，rob 搶人家，東西用 of 帶出來！"},
 {ask:{say:"考考你！", q:"The man ___ the bank and ran away.", opts:["stole","robbed"], ans:1,
   ok:"答對！銀行是「地方」，搶劫地方用 rob。", bad:{0:"steal 的受詞要是「東西」，銀行是地方，要用 rob。"},
   again:{q:"Someone ___ my bike last night.", opts:["stole","robbed"], ans:0, exp:"腳踏車是東西，偷東西用 steal。"}}},
 {say:"第二組：{accuse} 和 {blame}，都有「怪罪」的意思，但介系詞不同。accuse 是指控犯罪，用 of；blame 是責怪過錯，用 for。blame 還可以倒過來：blame 事 on 人。", board:[["accuse him of cheating",["accuse","of"]],["blame him for the mistake",["blame","for"]],["blame the mistake on him",["blame","on"]]]},
 {say:"介系詞口訣！", chant:"accuse 配 of，blame 配 for，倒過來就用 on！"},
 {ask:{q:"She was accused ___ lying.", opts:["for","of","on"], ans:1,
   ok:"讚！accuse 人 of + V-ing。", bad:{0:"for 是 blame 的搭配喔！accuse 要用 of。",2:"on 是 blame 事 on 人 的句型，accuse 要用 of。"},
   again:{q:"Don't blame me ___ your mistake.", opts:["of","for","on"], ans:1, exp:"blame 人 for 事。"}}},
 {say:"第三組看語氣：{request} 是有禮貌地請求，{require} 是規定需要，{insist} 是堅決要求，{urge} 是力勸呼籲。最厲害的是：它們後面的 that 子句，動詞要用 should 加原形，should 還可以省略！", board:[["request / require / insist / urge",["request","require","insist","urge"],false,true],["The doctor insisted that he (should) stop smoking.",["stop"]]]},
 {ask:{q:"The teacher insisted that he ___ quiet.", opts:["is","be","was"], ans:1,
   ok:"太強了！insist 表示堅決要求時，後面用 (should) + 原形，be 動詞就是 be。", bad:{0:"insist that（要求）子句要用 (should) + 原形動詞，is 不是原形喔。",2:"這裡不看時態，要用 (should) + 原形：be。"},
   again:{q:"The rule requires that every driver ___ a seat belt.", opts:["wears","wear","wore"], ans:1, exp:"require that + 主詞 + (should) + 原形：wear。"}}},
 {say:"最後一組：{rare} 和 {scarce} 都是「少」。rare 是本來就少見，像稀有動物；scarce 是「需要卻不夠用」，像乾旱時的水。還有 {deny} 否認要接 V-ing，{refuse} 拒絕要接 to V！", board:[["Pandas are rare animals.",["rare"]],["Water is scarce in the desert.",["scarce"]],["He denied taking the money.",["denied","taking"]]]},
 {ask:{say:"最後一題！", q:"During the war, food was ___.", opts:["rare","scarce","valuable"], ans:1,
   ok:"完美！戰爭時大家都需要食物卻不夠，用 scarce。", bad:{0:"rare 是本來就少見，食物是「不夠吃」，用 scarce。",2:"valuable 是有價值的，這裡要說「短缺」，用 scarce。"},
   again:{q:"He denied ___ the window.", opts:["to break","breaking","break"], ans:1, exp:"deny + V-ing：否認做過某事。"}}},
 {say:"同義字辨析過關！複習口訣：steal 偷東西，rob 搶人家；accuse 配 of，blame 配 for；insist、urge 的 that 後面用原形；rare 本來就少，scarce 是不夠用！", end:true}
],
g2:[
 {say:"今天來對付「長得像」的字！學測選項最愛放這種雙胞胎，只要記住一個小差別，就不會被騙。第一對：{adapt} 和 {adopt}。", board:[["adapt = 適應",["adapt"]],["adopt = 採用、收養",["adopt"]]]},
 {say:"adapt 中間是 a，聯想 adjust（調整），調整自己去適應：adapt to 新環境。adopt 中間是 o，想像抱著一個圓圓的寶寶，就是收養；也可以是採用一個新方法。", board:[["She adapted to the new school.",["adapted to"]],["They adopted a baby.",["adopted"]]]},
 {ask:{say:"考考你！", q:"It took me a month to ___ to the new job.", opts:["adopt","adapt"], ans:1,
   ok:"答對！適應新工作，用 adapt to。", bad:{0:"adopt 是採用、收養，「適應」要用 adapt to。"},
   again:{q:"The school ___ a new rule last week.", opts:["adapted","adopted"], ans:1, exp:"採用新規定用 adopt。"}}},
 {say:"第二對：{precede} 和 {proceed}，只差字首！pre 是事先，走在前面，就是「在……之前」；pro 是向前，往前繼續走，就是「繼續進行、前往」。", board:[["precede = 在……之前（pre 事先）",["pre"],false,true],["proceed = 繼續進行（pro 向前）",["pro"],false,true]]},
 {say:"第三對：{complement} 和 {compliment}。e 那個是 complete，補足、互補；i 那個是 I like it，讚美！", board:[["complement = 互補（e = complete）",["e"],false,true],["compliment = 讚美（i = I like it）",["i"],false,true]]},
 {say:"把三對的記憶法一起唸！", chant:"a 是適應 o 收養，pre 在前 pro 繼續，i 是讚美 I like it！"},
 {ask:{q:"She paid me a ___ on my new haircut.", opts:["complement","compliment","principle"], ans:1,
   ok:"讚！稱讚別人用 compliment，i = I like it。", bad:{0:"complement 是互補，這裡是讚美，要用 compliment。",2:"principle 是原則，跟讚美無關喔。"},
   again:{q:"Passengers, please ___ to Gate 5.", opts:["precede","proceed"], ans:1, exp:"前往登機門：proceed to + 地點。"}}},
 {say:"還有一招：看字尾！{respectful} 的 ful 是「充滿」，你充滿敬意，是你尊重別人；{respectable} 的 able 是「可以被」，你值得被尊敬。同樣的道理：{considerate} 是體貼的人，{considerable} 是可觀的數量。", board:[["respectful：我尊重別人",["ful"],false,true],["respectable：值得被尊敬",["able"],false,true],["considerable amount / considerate person",["considerable","considerate"]]]},
 {say:"字尾口訣！", chant:"ful 是我充滿，able 是可以被！"},
 {ask:{q:"It's very ___ of you to help me carry the boxes.", opts:["considerable","considerate","respectable"], ans:1,
   ok:"太棒了！形容人很體貼，用 considerate。", bad:{0:"considerable 是數量相當大，不能形容人體貼。",2:"respectable 是值得尊敬的，這裡要說「體貼」，用 considerate。"},
   again:{q:"Dragons are ___ animals.", opts:["imaginative","imaginary"], ans:1, exp:"不存在的、虛構的用 imaginary；imaginative 是有想像力的。"}}},
 {say:"最後兩對：{stationary} 靜止的，a 像 stand 站著不動；{stationery} 文具，e 像 eraser 橡皮擦。{emigrate} 的 e 是 exit 移出去，{immigrate} 的 im 是 in 移進來。", board:[["stationary（a = stand）",["a"],false,true],["stationery（e = eraser）",["e"],false,true],["emigrate from / immigrate to",["emigrate","immigrate"]]]},
 {ask:{say:"最後一題！", q:"I bought some ___ at the bookstore: pens, rulers, and erasers.", opts:["stationary","stationery","station"], ans:1,
   ok:"完美！文具是 stationery，e = eraser。", bad:{0:"stationary 是靜止的，文具要用 e 結尾的 stationery。",2:"station 是車站，文具是 stationery。"},
   again:{q:"After losing many games, the team's ___ was low.", opts:["moral","morale"], ans:1, exp:"士氣是 morale，多一個 e。"}}},
 {say:"易混淆字過關！口訣：a 是適應 o 收養，pre 在前 pro 繼續，i 是讚美；ful 是我充滿，able 是可以被；stationary 站著，stationery 有橡皮擦！", end:true}
],
g3:[
 {say:"今天學搭配詞，英文叫 collocation。安安老師問你：「濃咖啡」英文怎麼說？很多人會說 thick coffee，但英文是 {strong coffee}！", board:[["strong coffee",["strong"]],["thick coffee",[],true]]},
 {say:"搭配詞就是英文人習慣放在一起的字，不能從中文直翻。像「大雨」是 {heavy rain}，「交通繁忙」是 {heavy traffic}，「激烈競爭」是 {fierce competition}。", board:[["heavy rain / heavy traffic",["heavy"]],["fierce competition",["fierce"]],["vivid memory / keen interest",["vivid","keen"]]]},
 {say:"第一個口訣！", chant:"搭配詞不直翻，濃咖啡是 strong，大雨是 heavy！"},
 {ask:{q:"There was ___ rain all night, so the roads were flooded.", opts:["big","heavy","strong"], ans:1,
   ok:"答對！大雨是 heavy rain。", bad:{0:"英文不說 big rain，「大雨」是 heavy rain。",2:"strong 搭配 wind 或 coffee，「大雨」要用 heavy。"},
   again:{q:"The typhoon brought ___ weather.", opts:["severe","thick"], ans:0, exp:"惡劣的天氣：severe weather。"}}},
 {say:"接著是動詞＋名詞。「得出結論」英文是 {reach a conclusion} 或 {draw a conclusion}，不說 make a conclusion。「進行調查」是 {conduct a survey}。", board:[["reach / draw a conclusion",["reach","draw"]],["make a conclusion",[],true],["conduct a survey / an experiment",["conduct"]]]},
 {ask:{q:"The scientists ___ an experiment on the new medicine.", opts:["conducted","made","did"], ans:0,
   ok:"讚！進行實驗用 conduct an experiment。", bad:{1:"make 不搭配 experiment 喔，要用 conduct。",2:"學測最常見的寫法是 conduct an experiment。"},
   again:{q:"After the meeting, we ___ a conclusion.", opts:["made","reached"], ans:1, exp:"得出結論：reach a conclusion。"}}},
 {say:"還有一個常考的 {meet}！它不只是「遇見」，還有「滿足、符合」的意思：{meet the needs} 滿足需求、{meet the deadline} 趕上期限。另外 {raise awareness} 是提高意識，raise 後面一定要接受詞。", board:[["meet the needs / meet the deadline",["meet"]],["raise awareness of pollution",["raise"]]]},
 {say:"第二個口訣！", chant:"meet 需求、meet 期限，raise 意識要接受詞！"},
 {ask:{q:"The school tries hard to ___ the needs of every student.", opts:["meet","see","make"], ans:0,
   ok:"太棒了！meet the needs 滿足需求。", bad:{1:"see 是看見，滿足需求要用 meet。",2:"make 不能搭配 needs，要用 meet。"},
   again:{q:"The campaign aims to ___ awareness of ocean pollution.", opts:["rise","raise"], ans:1, exp:"raise 是及物動詞，後面接受詞 awareness。"}}},
 {say:"最後補充兩個：{take precautions} 採取預防措施，{face the consequences} 承擔後果，這兩個名詞常用複數。還有 {strike a balance} 取得平衡，和 {bear in mind} 記住：Bear in mind that the test is on Friday.", board:[["take precautions against fire",["take precautions"]],["strike a balance between study and rest",["strike a balance"]],["Bear in mind that ...",["Bear in mind"]]]},
 {ask:{say:"最後一題！", q:"We should ___ precautions against typhoons.", opts:["make","take","do"], ans:1,
   ok:"完美！採取預防措施是 take precautions。", bad:{0:"make 不搭配 precautions，要用 take。",2:"do 不搭配 precautions，要用 take。"},
   again:{q:"Please ___ in mind that the library closes at nine.", opts:["bear","keep up","hold"], ans:0, exp:"bear in mind 記住（也可以說 keep in mind）。"}}},
 {say:"搭配詞過關！口訣：搭配詞不直翻；conclusion 用 reach 或 draw；meet 需求、meet 期限；raise 意識要接受詞；預防措施用 take！", end:true}
],
g4:[
 {say:"最後一堂文法課，我們來抓片語裡的 to！你看這兩句，to 後面一個接 V-ing，一個接原形動詞，為什麼？", board:[["I'm accustomed to getting up early.",["to getting"]],["You are bound to succeed.",["to succeed"]]]},
 {say:"因為 to 有兩種身分！一種是介系詞，後面接名詞或 V-ing：{be accustomed to}、{be used to}、{look forward to}、{object to}。另一種是不定詞，後面接原形動詞：{be bound to}、{be likely to}。", board:[["介系詞 to + N / V-ing：be accustomed to、be used to",["to"]],["不定詞 to + 原形：be bound to、be likely to",["to"]]]},
 {say:"分辨的祕訣：在 to 後面放一個名詞試試看，能放就是介系詞！{I'm accustomed to the cold weather.} 可以，所以 accustomed to 的 to 是介系詞。", board:[["I'm accustomed to the cold weather.",["to","the cold weather"]]]},
 {say:"口訣記起來！", chant:"to 後面能放名詞，它就是介系詞，動詞要加 ing！"},
 {ask:{say:"考考你！", q:"She is accustomed to ___ in a big city.", opts:["live","living"], ans:1,
   ok:"答對！accustomed to 的 to 是介系詞，後面接 V-ing。", bad:{0:"to 後面能放名詞（the noise），所以是介系詞，要接 living。"},
   again:{q:"If you keep trying, you are bound ___ better.", opts:["to get","to getting"], ans:0, exp:"be bound to + 原形動詞：必定會……。"}}},
 {say:"再來是幾個正式又常考的片語：{be subject to} 容易受……影響，像 The schedule is subject to change；{be entitled to} 有權……，像 Students are entitled to a discount。", board:[["The schedule is subject to change.",["subject to"]],["Students are entitled to a discount.",["entitled to"]]]},
 {say:"接著：{in terms of} 就……而言、{on behalf of} 代表……、{regardless of} 不管、{in favor of} 贊成、{at the expense of} 以……為代價。這五個結尾都是 of，後面接名詞。", board:[["in terms of price",["in terms of"]],["on behalf of the class",["on behalf of"]],["regardless of age",["regardless of"]],["in favor of the plan",["in favor of"]]]},
 {say:"of 片語的口訣！", chant:"terms 就而言、behalf 代表、regardless 不管、favor 贊成！"},
 {ask:{q:"___ the class, I want to thank our teacher.", opts:["On behalf of","Regardless of","In terms of"], ans:0,
   ok:"讚！代表全班說話，用 on behalf of。", bad:{1:"regardless of 是「不管」，這裡是「代表」全班，要用 on behalf of。",2:"in terms of 是「就……而言」，這裡要用 on behalf of。"},
   again:{q:"Anyone can join ___ age.", opts:["regardless of","in favor of"], ans:0, exp:"不論年齡：regardless of age。"}}},
 {say:"最後兩個：{take ... for granted} 視為理所當然，受詞放中間；如果受詞是 that 子句，就要放虛受詞 it：{take it for granted that}。還有 {make up for} 彌補：make up for lost time。", board:[["Don't take your parents for granted.",["take","for granted"]],["We take it for granted that ...",["it"]],["make up for lost time",["make up for"]]]},
 {ask:{q:"We often take ___ for granted that the Internet works.", opts:["this","it","that"], ans:1,
   ok:"太強了！受詞是 that 子句時，用虛受詞 it。", bad:{0:"這裡要用虛受詞 it，不用 this。",2:"後面已經有 that 子句，前面要用虛受詞 it。"},
   again:{q:"I studied hard to make up ___ lost time.", opts:["with","for"], ans:1, exp:"make up for：彌補。"}}},
 {ask:{say:"最後一題！", q:"Most students are ___ the new rule, so it passed.", opts:["in favor of","at the expense of","subject to"], ans:0,
   ok:"完美！大家贊成，規定才會通過：in favor of。", bad:{1:"at the expense of 是「以……為代價」，文意不通。",2:"subject to 是「易受……影響」，這裡要表示「贊成」。"},
   again:{q:"He became rich ___ his health.", opts:["at the expense of","in terms of"], ans:0, exp:"犧牲健康換來財富：at the expense of。"}}},
 {say:"進階片語過關！口訣：to 後面能放名詞，就是介系詞，動詞加 ing；terms 就而言、behalf 代表、regardless 不管、favor 贊成；that 子句當受詞，記得放 it！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S2_V3_ROOTS = [
  {id:"r1", title:"字首 anti- / counter-（反對、相對）"},
  {id:"r2", title:"字首 auto- / self-（自己）"},
  {id:"r3", title:"字首 bene- / mal-（好、壞）"},
  {id:"r4", title:"字首 omni- / pan-（全部）"}
];
const S2_V3_ROOT_CLASS = {
r1:[
 {say:"高二同學好！今天學兩個表示「反對、對抗」的字首：<<anti>> 和 <<counter>>。先看一個你在藥袋上看過的字：{antibiotic} 抗生素。", board:[["anti + bio + tic = antibiotic",["anti"],false,true]]},
 {say:"拆開來：anti 是對抗，bio 是生命，合起來就是「對抗（細菌）生命的東西」，也就是抗生素。bio 這個字根高一學過喔，biology 生物學！", board:[["anti = 對抗",["anti"],false,true],["bio = 生命",["bio"],false,true]]},
 {say:"anti 的其他例子：{antisocial} 不愛社交的、{antiwar} 反戰的、{antivirus} 防毒的。", board:[["anti + social = antisocial",["anti"],false,true],["anti + virus = antivirus",["anti"],false,true]]},
 {say:"口訣！", chant:"anti、anti，對抗反對！"},
 {ask:{q:"anti ＋ social（社交的）＝ antisocial，意思是？", opts:["很會社交的","不愛社交的","社會的"], ans:1,
   ok:"答對！anti 是反對，和社交唱反調，就是不愛社交的。", bad:{0:"anti 是反對的意思喔，所以是「不愛」社交。",2:"social 才是社會的，加了 anti 意思相反。"},
   again:{q:"anti ＋ virus（病毒）＝ antivirus，意思是？", opts:["防毒的","病毒的","感冒"], ans:0, exp:"對抗病毒，就是防毒的，像 antivirus software 防毒軟體。"}}},
 {say:"小心陷阱！不是所有 anti 開頭的字都是「反對」。{antique} 是古董，{anticipate} 是預期，這兩個的 anti 其實是「之前」的意思，和反對無關。", board:[["antique 古董",["anti"],true,true],["anticipate 預期",["anti"],true,true]]},
 {say:"第二個字首 <<counter>>，意思是「相反、相對」：{counterattack} 反過來攻擊，就是反擊；{counterclockwise} 和時鐘相反，就是逆時針。", board:[["counter + attack = counterattack",["counter"],false,true],["counter + clockwise = counterclockwise",["counter"],false,true]]},
 {ask:{q:"counter ＋ attack ＝ counterattack，意思是？", opts:["攻擊","反擊","防守"], ans:1,
   ok:"讚！counter 是反過來，反過來攻擊就是反擊。", bad:{0:"attack 才是攻擊，加了 counter 是「反過來」攻擊。",2:"防守是 defend，counterattack 是反擊。"},
   again:{q:"Turn the key counterclockwise. 鑰匙要怎麼轉？", opts:["順時針","逆時針"], ans:1, exp:"counter 是相反，和時鐘相反就是逆時針。"}}},
 {say:"counter 還有「相對、對應」的意思：{counterpart} 就是「相對的另一部分」，指在另一邊擔任相同角色的人或物。例如台灣的教育部長和日本的教育部長，就是彼此的 counterpart。", board:[["counter + part = counterpart",["counter"],false,true]]},
 {say:"口訣！", chant:"counter 反過來，counterpart 是對面的那一位！"},
 {ask:{say:"最後一題！", q:"The President met his Japanese ___.（日本首相，地位相當的人）", opts:["counterattack","counterpart","antibiotic"], ans:1,
   ok:"完美！地位相當、對應的人是 counterpart。", bad:{0:"counterattack 是反擊，不是指人。",2:"antibiotic 是抗生素，跟人無關喔。"},
   again:{q:"The doctor gave me some ___ for my infection.", opts:["antibiotics","antiques"], ans:0, exp:"治療感染的是抗生素 antibiotics；antique 是古董。"}}},
 {say:"anti 和 counter 過關！口訣：anti 對抗反對；counter 反過來，counterpart 是對面的那一位；antique 古董是陷阱！", end:true}
],
r2:[
 {say:"今天學表示「自己」的字首：<<auto>> 和 <<self>>。先猜猜看：{automobile} 是什麼？auto 是自己，mobile 是能移動的，自己會動的東西……就是汽車！", board:[["auto + mobile = automobile",["auto"],false,true]]},
 {say:"auto 的家族很大：{automatic} 自動的、{autograph} 簽名（自己寫）、{autobiography} 自傳（自己寫自己的人生）。", board:[["auto + matic = automatic",["auto"],false,true],["auto + graph = autograph",["auto"],false,true],["auto + bio + graphy = autobiography",["auto"],false,true]]},
 {say:"口訣！", chant:"auto 自己來，自己動、自己寫！"},
 {ask:{q:"auto ＋ graph（寫）＝ autograph，意思是？", opts:["照片","親筆簽名","圖表"], ans:1,
   ok:"答對！自己親手寫的名字，就是親筆簽名。", bad:{0:"照片是 photograph，auto 是「自己」，自己寫的是簽名。",2:"圖表是 graph 或 chart，auto + graph 是親筆簽名。"},
   again:{q:"auto ＋ bio（生命）＋ graphy（寫）＝ autobiography，意思是？", opts:["傳記","自傳","生物學"], ans:1, exp:"自己寫自己的生命故事，就是自傳；別人寫的是 biography 傳記。"}}},
 {say:"再來一個比較進階的：{autonomy} 自主權。auto 是自己，nomy 是法則，「自己訂法則」，就是自主、自治。", board:[["auto + nomy = autonomy",["auto"],false,true]]},
 {ask:{q:"Teenagers want more ___ in making decisions.（自主權）", opts:["autonomy","autograph","automobile"], ans:0,
   ok:"讚！自己訂規則、自己做主，就是 autonomy。", bad:{1:"autograph 是簽名，這裡要的是「自主權」。",2:"automobile 是汽車，這裡要的是「自主權」。"},
   again:{q:"The door opens ___ when you walk near it.", opts:["automatically","autographically"], ans:0, exp:"自動地：automatically。"}}},
 {say:"另一個表示自己的是 <<self>>，它很直接，常用連字號連起來：{self-discipline} 自律、{self-confidence} 自信、{self-control} 自制力。", board:[["self + discipline = self-discipline",["self"],false,true],["self + confidence = self-confidence",["self"],false,true],["self + control = self-control",["self"],false,true]]},
 {say:"self 也可以接字尾：{selfish} 自私的，ish 是「有……傾向的」，只想到自己，就是自私。", board:[["self + ish = selfish",["self"],false,true]]},
 {say:"口訣！", chant:"self 自己，自律自信自制力，只想自己是 selfish！"},
 {ask:{q:"Studying at home requires a lot of ___.（自律）", opts:["selfish","self-discipline","self-service"], ans:1,
   ok:"太棒了！自律是 self-discipline。", bad:{0:"selfish 是自私的，是形容詞，a lot of 後面要接名詞 self-discipline。",2:"self-service 是自助式服務，這裡要的是自律。"},
   again:{q:"He only thinks about himself. He is very ___.", opts:["selfish","self-discipline"], ans:0, exp:"只想到自己：selfish 自私的。"}}},
 {ask:{say:"最後一題！", q:"auto 和 self 的意思是？", opts:["自己","全部","反對"], ans:0,
   ok:"完美！auto 和 self 都是「自己」。", bad:{1:"「全部」是下下堂課的 omni 和 pan 喔。",2:"「反對」是 anti 和 counter。"},
   again:{q:"automobile 為什麼是汽車？", opts:["自己會動的","很多人坐的"], ans:0, exp:"auto 自己 + mobile 能移動的：自己會動的東西。"}}},
 {say:"auto 和 self 過關！口訣：auto 自己來，自己動、自己寫；self 自律自信自制力，只想自己是 selfish！", end:true}
],
r3:[
 {say:"今天學一組好壞相反的字首：<<bene>> 是好，<<mal>> 是壞。先看一個你一定認識的字：{benefit} 好處、利益。bene 是好，fit 是做，做出好的結果，就是好處。", board:[["bene + fit = benefit",["bene"],false,true]]},
 {say:"bene 的家族：{beneficial} 有益的，{benefactor} 捐助者，fact 是做，or 是人，做好事的人，就是捐助者、恩人。", board:[["bene + fic + ial = beneficial",["bene"],false,true],["bene + fact + or = benefactor",["bene"],false,true]]},
 {say:"口訣！", chant:"bene 是好，做好事、有好處！"},
 {ask:{q:"Exercise is ___ to your health.（有益的）", opts:["benefit","beneficial","benefactor"], ans:1,
   ok:"答對！be 動詞後面要接形容詞：beneficial。", bad:{0:"benefit 是名詞或動詞，be 動詞後面要用形容詞 beneficial。",2:"benefactor 是捐助者（人），這裡要的是形容詞「有益的」。"},
   again:{q:"bene ＋ fact（做）＋ or（人）＝ benefactor，意思是？", opts:["捐助者","工廠","好處"], ans:0, exp:"做好事的人，就是捐助者、恩人。"}}},
 {say:"相反的是 <<mal>>，意思是「壞、不良」。{malfunction} 是機器運作不良，就是故障；{malnutrition} 是不良的營養，就是營養不良。", board:[["mal + function = malfunction",["mal"],false,true],["mal + nutrition = malnutrition",["mal"],false,true]]},
 {say:"{malicious} 是懷著壞心眼的，惡意的。你知道電腦病毒叫 malware 嗎？就是 mal 加 software，壞的軟體！", board:[["mal + icious = malicious",["mal"],false,true],["mal + (soft)ware = malware",["mal"],false,true]]},
 {say:"好壞口訣！", chant:"bene 是好、mal 是壞，好處 benefit、故障 malfunction！"},
 {ask:{q:"mal ＋ nutrition（營養）＝ malnutrition，意思是？", opts:["營養豐富","營養不良","營養師"], ans:1,
   ok:"讚！mal 是不良，不良的營養就是營養不良。", bad:{0:"mal 是「壞、不良」，不是豐富喔。",2:"營養師是 nutritionist，mal 是不良。"},
   again:{q:"The machine stopped because of a ___.", opts:["malfunction","benefit"], ans:0, exp:"機器停了是因為故障：malfunction。"}}},
 {say:"小心！不是所有 mal 開頭的字都是壞。{mall} 購物中心就和 mal 字首無關，要看整個字的意思判斷喔。", board:[["mall 購物中心",["mal"],true,true]]},
 {ask:{say:"最後一題！", q:"Someone spread ___ rumors about her online.（惡意的）", opts:["beneficial","malicious","benefactor"], ans:1,
   ok:"完美！惡意的謠言是 malicious rumors。", bad:{0:"beneficial 是有益的，謠言不會有益喔！",2:"benefactor 是捐助者，是名詞，這裡要形容詞「惡意的」。"},
   again:{q:"bene 和 mal 的意思是？", opts:["好、壞","大、小","前、後"], ans:0, exp:"bene 是好，mal 是壞。"}}},
 {say:"bene 和 mal 過關！口訣：bene 是好、mal 是壞；benefit 好處、beneficial 有益的、benefactor 捐助者；malfunction 故障、malnutrition 營養不良、malicious 惡意的！", end:true}
],
r4:[
 {say:"最後一堂字根課，學兩個表示「全部」的字首：<<omni>> 和 <<pan>>。先看 {omnivore}：omni 是全部，vore 是吃，什麼都吃的動物，就是雜食動物！", board:[["omni + vore = omnivore",["omni"],false,true]]},
 {say:"vore 家族順便學：{herbivore} 吃草的，就是草食動物；{carnivore} 吃肉的，就是肉食動物。熊和人類是 omnivore，牛是 herbivore，獅子是 carnivore。", board:[["herbi + vore = herbivore 草食動物",["vore"],false,true],["carni + vore = carnivore 肉食動物",["vore"],false,true]]},
 {say:"口訣！", chant:"omni 全部，什麼都吃 omnivore！"},
 {ask:{q:"Bears eat both plants and meat. They are ___.", opts:["herbivores","omnivores","carnivores"], ans:1,
   ok:"答對！植物和肉都吃，是雜食動物 omnivores。", bad:{0:"herbivore 只吃植物，熊兩種都吃。",2:"carnivore 只吃肉，熊植物和肉都吃。"},
   again:{q:"omni 的意思是？", opts:["一半","全部","沒有"], ans:1, exp:"omni 是全部：omnivore 什麼都吃。"}}},
 {say:"omni 還有 {omnipresent} 無所不在的（present 是存在），像「手機在現代生活中無所不在」。", board:[["omni + present = omnipresent",["omni"],false,true]]},
 {say:"第二個字首 <<pan>>，也是全部。{pandemic}：pan 全部，dem 人民，影響全部人民的疾病，就是全球大流行病。", board:[["pan + dem + ic = pandemic",["pan"],false,true]]},
 {ask:{q:"pan ＋ dem（人民）＋ ic ＝ pandemic，意思是？", opts:["地方小病","全球大流行病","民主"], ans:1,
   ok:"讚！影響全部的人，就是全球大流行病。", bad:{0:"pan 是全部，不是地方性的喔。",2:"民主是 democracy，pandemic 是全球大流行病。"},
   again:{q:"During the ___, many classes were held online.", opts:["pandemic","panorama"], ans:0, exp:"疫情期間：during the pandemic。"}}},
 {say:"{panorama}：pan 全部，orama 景色，看到全部的景色，就是全景！手機拍照的「全景模式」就叫 panorama。", board:[["pan + orama = panorama",["pan"],false,true]]},
 {say:"口訣！", chant:"pan 全部，全球大流行 pandemic，全景模式 panorama！"},
 {ask:{q:"From the mountain top, we enjoyed a ___ of the whole city.", opts:["pandemic","panorama","omnivore"], ans:1,
   ok:"太棒了！從山頂看到全部的景色，就是全景 panorama。", bad:{0:"pandemic 是大流行病，不是風景喔。",2:"omnivore 是雜食動物，這裡要的是全景。"},
   again:{q:"pan 和 omni 的意思是？", opts:["全部","自己"], ans:0, exp:"pan 和 omni 都是「全部」；auto 和 self 才是自己。"}}},
 {say:"小提醒：{pan} 自己也是一個單字「平底鍋」，{pants} 是褲子，這些和字首 pan 無關喔！看到 pan 開頭，要確認後面還有字根，才是「全部」的意思。", board:[["pan 平底鍋 / pants 褲子",["pan"],true,true]]},
 {ask:{say:"最後一題！", q:"Smartphones are ___ in modern life.（無所不在的）", opts:["omnipresent","omnivore","panorama"], ans:0,
   ok:"完美！omni 全部 + present 存在：無所不在的。", bad:{1:"omnivore 是雜食動物，是名詞。",2:"panorama 是全景，這裡要形容詞「無所不在的」。"},
   again:{q:"Lions only eat meat. They are ___.", opts:["omnivores","carnivores"], ans:1, exp:"只吃肉的是肉食動物 carnivores。"}}},
 {say:"omni 和 pan 過關！口訣：omni 全部，什麼都吃 omnivore；pan 全部，pandemic 全球大流行、panorama 全景。字根字首全部上完了，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創）與概念卡 ---------- */
Object.assign(ILLUS2, {
  rob: () => svgWrap("#eef0f6", ground("#d1d5db") + P({x:52, y:106, s:.9, hair:"bald", hc:"#9ca3af", oc:"#a78bfa", pose:"cheer", eyes:"worry", mood:"o", acc:["cane", "stache"]}) + P({x:116, y:106, s:.9, hair:"short", hc:"#1f2937", oc:"#1f2937", lc:"#111827", pose:"hold", mood:"wavy", acc:["cap"]}) + O.bag(124, 72, .55, "#f472b6") + `<path d="M84 34 L92 30 M84 44 L94 44 M84 54 L92 58" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>` + bubble(46, 16, "Help!", 46)),
  stationery: () => svgWrap("#fff7e6", O.desk(80, 100, 1.2) + O.notebook(46, 72, .9) + O.pencil(80, 70, .8, -20) + O.pen(104, 70, .8) + O.eraser(128, 80, .6) + O.ruler(84, 92, .7) + spark(30, 28, .8) + spark(132, 30, .7)),
  automobile: () => svgWrap("#e8f4ff", `<rect x="0" y="92" width="160" height="28" fill="#6b7280"/><path d="M8 106 H40 M60 106 H92 M112 106 H144" stroke="#fff" stroke-width="3"/>` + `<path d="M28 84 V70 Q30 62 40 62 L54 48 Q58 44 66 44 H98 Q106 44 110 50 L120 62 H128 Q136 62 136 72 V84 Z" fill="#ef4444"/><path d="M58 50 H78 V62 H48 Z M84 50 H102 L110 62 H84 Z" fill="#bfe6ff"/><rect x="128" y="68" width="8" height="5" rx="2" fill="#fde68a"/>` + O.wheel(52, 86, .75) + O.wheel(112, 86, .75) + O.cloud(36, 24, .6) + O.sun(130, 24, .6) + txt(80, 36, "auto = 自己", 12, "#2563eb")),
  panorama: () => svgWrap("#dbeafe", `<path d="M0 84 L24 50 L44 70 L70 30 L96 66 L116 44 L140 72 L160 56 V120 H0 Z" fill="#60a5fa"/><path d="M62 42 L70 30 L78 42 Z M110 52 L116 44 L122 52 Z" fill="#fff"/><path d="M0 96 Q80 84 160 96 V120 H0 Z" fill="#86efac"/>` + O.tree(20, 98, .4) + O.tree(142, 100, .4) + O.sun(132, 20, .55) + `<path d="M12 112 Q80 100 148 112" stroke="#2563eb" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M144 108 L149 112 L143 115" stroke="#2563eb" stroke-width="2" fill="none"/><path d="M16 108 L11 112 L17 115" stroke="#2563eb" stroke-width="2" fill="none"/>` + txt(80, 18, "360°", 13, "#1e3a8a"))
});
registerUnit("s2-v3", {
  name:"7000 單字 Level 3–4",
  sub:"同義字辨析、易混淆字、進階搭配詞與片語",
  words:S2_V3_WORDS, grammar:S2_V3_GRAMMAR, quiz:S2_V3_QUIZ,
  classes:Object.assign({}, S2_V3_CLASS, S2_V3_ROOT_CLASS), phonics:S2_V3_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會 anti- / counter-、auto- / self-、bene- / mal-、omni- / pan- 四組字首。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
