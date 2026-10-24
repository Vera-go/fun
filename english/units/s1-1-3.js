/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高一上學期 期末考（通用範圍）
   主題：科技與發明、新聞與媒體識讀、交通與城市
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S1_1_3_WORDS = [
/* ---------- 字首 trans- / inter- / sub- / super- ---------- */
["transition","n.","轉變；過渡",[
 ["The transition from paper to online news has been made quickly.","從紙本新聞到網路新聞的轉變發生得很快。","make a transition 的被動：the transition has been made（完成式被動）。"],
 ["How the transition from junior high to senior high affects students is often discussed.","從國中到高中的轉變如何影響學生，常常被討論。","How 名詞子句當主詞，用單數動詞；後面接被動 is discussed。"],
 ["Never has the transition to electric cars been so fast.","轉換到電動車的速度從來沒有這麼快過。","Never 放句首倒裝：has the transition been。"]],
 "trans-=穿越|it=走|-ion=名詞字尾","從一邊走到另一邊 → 轉變；過渡","🔀|轉變"],
["transparent","adj.","透明的",[
 ["The new library has been built with transparent glass walls.","新圖書館用透明的玻璃牆建成。","完成式被動 has been built；with 表示用了什麼材料。"],
 ["Whether the government is transparent about its spending matters to every citizen.","政府的花費是否公開透明，對每個公民都很重要。","Whether 子句當主詞，視為單數，所以動詞用 matters；放在句首當主詞時不能用 if。"],
 ["Not only is the phone case transparent, but it is also very strong.","這個手機殼不但是透明的，而且非常堅固。","Not only 放句首要倒裝，be 動詞 is 直接移到主詞前面；but also 後半句維持正常語序。"]],
 "trans-=穿越|par=出現|-ent=形容詞字尾","光線穿得過去，後面的東西都看得見 → 透明的","🪟|透明"],
["transportation","n.","交通運輸",[
 ["Public transportation in this city is being improved.","這座城市的大眾運輸正在改善中。","進行式被動 is being improved；transportation 不可數，用單數動詞。"],
 ["Whether we take the train or the bus depends on the cost of transportation.","我們搭火車還是公車，取決於交通費用。","Whether ... or ... 子句當主詞，動詞用單數 depends。"],
 ["Never has transportation been so fast and cheap.","交通從來沒有這麼快速又便宜過。","Never 放句首要倒裝：助動詞 has 移到主詞 transportation 前面。"]],
 "trans-=穿越|port=搬運|-ation=名詞字尾","把人和貨物搬過去 → 運輸","🚆|交通運輸"],
["interpret","v.","解釋；解讀；口譯",[
 ["The same data can be interpreted in different ways.","同樣的數據可以有不同的解讀方式。","助動詞被動：can be + p.p.。"],
 ["How you interpret the news depends on your background.","你怎麼解讀新聞取決於你的背景。","How 引導的名詞子句當主詞，用單數動詞 depends；名詞子句用直述句語序 you interpret，不是 do you interpret。"],
 ["She was made to interpret for the visitors at the last minute.","她在最後一刻被叫去替訪客口譯。","主動 make 人 V，改成被動要變成 be made to V，to 不能省略。"]],
 "inter-=在……之間|pret=交易；傳達","在兩方之間傳達意思 → 解釋；口譯","🗣️|解讀"],
["interfere","v.","干擾；干涉",[
 ["Mobile phones are said to interfere with some medical machines.","據說手機會干擾某些醫療儀器。","物 + be said to V = It is said that 物 + V；interfere with 表示「干擾」。"],
 ["Don't let your phone interfere with your sleep.","別讓手機干擾你的睡眠。","let + 受詞 + 原形動詞；let 沒有被動語態。"],
 ["Whether parents should interfere in their children's choices is often discussed.","父母是否該干涉孩子的選擇，常常被拿出來討論。","Whether 子句當主詞，加上被動 is discussed；interfere in 表示「干涉某事」。"]],
 "inter-=在……之間|fere=打","插進中間打一下 → 干擾","📵|干擾"],
["subway","n.","地下鐵",[
 ["A new subway line is being built under the river.","一條新的地鐵線正在河底下興建。","進行式被動 is being built：地鐵線是「正在被蓋」。"],
 ["Every morning, crowds of students can be seen rushing into the subway.","每天早上都可以看到成群的學生衝進地鐵站。","see 人 V-ing 的被動是 be seen + V-ing，強調動作正在進行。"],
 ["Only after midnight does the subway stop running.","地鐵要到午夜過後才停駛。","Only + 時間片語 放句首，後面要倒裝：does the subway stop。"]],
 "sub-=在下面|way=路","地面下的路 → 地下鐵","@s113_subway"],
["submarine","n.","潛水艇",[
 ["The submarine was seen to rise slowly out of the water.","有人看見潛水艇慢慢浮出水面。","see 物 V 改成被動要加 to：be seen to V。"],
 ["Seldom have I seen a real submarine up close.","我很少近距離看到真正的潛水艇。","Seldom 放句首要倒裝，助動詞 have 提到主詞 I 前面。"],
 ["It is said that the first submarine was made of wood.","據說第一艘潛水艇是木頭做的。","It is said that + 子句 表示「據說」；be made of 表示看得出原料。"]],
 "sub-=在下面|marine=海的","在海面下航行的船 → 潛水艇","@s113_submarine"],
["subtitle","n.","字幕",[
 ["The movie has been translated, and Chinese subtitles have been added.","這部電影已經翻譯好，也加上了中文字幕。","兩個完成式被動：has been translated、have been added；subtitles 是複數，所以用 have。"],
 ["Whether you watch it with subtitles or not, you can still enjoy the story.","不管你看的時候有沒有字幕，都還是能享受這個故事。","whether ... or not 也可以引導副詞子句，表示「不論是否」。"],
 ["Not only did the subtitles help me understand, but they also taught me new words.","字幕不但幫助我理解，還教了我新單字。","Not only 放句首，過去式要加 did，動詞改回原形 help。"]],
 "sub-=在下面|title=標題","在畫面下方的文字 → 字幕","💬|字幕"],
["suburb","n.","郊區",[
 ["Many families have moved to the suburbs because houses there are cheaper.","許多家庭搬到郊區，因為那裡的房子比較便宜。","the suburbs 常用複數，泛指「郊區」。"],
 ["The suburb is being connected to downtown by a new railway.","這個郊區正透過一條新鐵路和市中心連接起來。","進行式被動 is being connected；be connected to 表示「與……相連」。"],
 ["It is said that life in the suburbs is quieter but less convenient.","據說住在郊區比較安靜，但比較不方便。","It is said that + 子句；less + 形容詞 表示「比較不……」。"]],
 "sub-=在下方；附近|urb=城市","城市旁邊、城市邊緣 → 郊區","🏡|郊區"],
["subtract","v.","減去；扣除",[
 ["When 5 is subtracted from 12, 7 is left.","12 減去 5，剩下 7。","subtract A from B 的被動：A is subtracted from B。"],
 ["Whether the tax has been subtracted is shown on the receipt.","稅金是否已經扣除，收據上有顯示。","Whether 子句當主詞，子句內是完成式被動 has been subtracted。"],
 ["Seldom do young children subtract big numbers in their heads.","小孩子很少用心算來減大數字。","Seldom 放句首倒裝，加 do，動詞維持原形 subtract。"]],
 "sub-=在下面|tract=拉","把數字往下拉掉 → 減去","➖|減去"],
["substance","n.","物質",[
 ["Harmful substances have been found in the river.","河裡被發現有有害物質。","完成式被動 have been found。"],
 ["What this substance is made of is still unknown.","這種物質是由什麼組成的，目前仍然不明。","What 引導的名詞子句當主詞，用單數動詞 is；子句內用直述句語序 this substance is made of。"],
 ["Never should dangerous substances be thrown into the trash.","危險物質絕對不該丟進垃圾桶。","Never 放句首，助動詞 should 提到主詞前；後面是被動 be thrown。"]],
 "sub-=在下面|stance=站","站在底下撐起一切的東西 → 物質","🧪|物質"],
["superior","adj./n.","較優秀的；上司",[
 ["This new phone is said to be superior to all the others.","據說這支新手機比其他所有手機都好。","superior to 表示「比……好」，要用 to，不能用 than；be said to V 表示「據說」。"],
 ["Whether one method is superior to another depends on the situation.","某種方法是否比另一種好，要看情況而定。","Whether 子句當主詞，用單數動詞 depends。"],
 ["He was made to apologize to his superior.","他被迫向上司道歉。","be made to V：make 的被動要加 to；superior 當名詞表示「上司」。"]],
 "super-=在上面|-ior=比較級字尾","位置比較上面的 → 較優秀的","🥇|更勝一籌"],
["supervise","v.","監督；管理",[
 ["The students are being supervised by two teachers during the exam.","考試期間，學生由兩位老師監考。","進行式被動 are being supervised。"],
 ["Young children should be supervised when they swim.","幼兒游泳時應該有人在旁邊看著。","助動詞被動：should be + p.p.。"],
 ["Not until the manager arrived was the work properly supervised.","直到經理來了，工作才被好好監督。","Not until + 子句 放句首，主要子句要倒裝：was the work supervised。"]],
 "super-=在上面|vise=看","從上面看著 → 監督","🧐|監督"],
/* ---------- 字根 fer（帶、搬） ---------- */
["fertile","adj.","肥沃的；能生育的",[
 ["The land near the river has been made fertile by years of floods.","河邊的土地經過多年洪水沖積，變得很肥沃。","make + 受詞 + 形容詞 的被動：be made fertile；這裡是完成式被動 has been made。"],
 ["It is said that the soil in this valley is the most fertile in Taiwan.","據說這個山谷的土壤是全台灣最肥沃的。","It is said that + 子句。"],
 ["Not only is the soil fertile, but the weather is also mild.","這裡不但土壤肥沃，氣候也很溫和。","Not only 放句首，be 動詞 is 提前。"]],
 "fert=承載；生出（fer 家族）|-ile=形容詞字尾","能承載、生出很多作物 → 肥沃的","🌾|肥沃"],
["preference","n.","偏好",[
 ["Your preferences are being recorded by the app.","你的偏好正在被這個應用程式記錄下來。","進行式被動 are being recorded。"],
 ["That shoppers' preferences can be predicted is no longer surprising.","消費者的偏好能被預測，已經不令人意外了。","That 子句當主詞，that 不能省略；子句內是助動詞被動 can be predicted。"],
 ["It depends on whether you have a preference for sweet or salty food.","這要看你偏好甜食還是鹹食。","介係詞 on 後面只能接 whether，不能接 if；have a preference for 表示「偏好……」。"]],
 "pre-=在前|fer=帶|-ence=名詞字尾","prefer 的名詞 → 偏好","❤️|偏好"],
["refer","v.","提到；參考；指的是",[
 ["Taipei 101 was once referred to as the tallest building in the world.","台北 101 曾經被稱為世界最高的建築。","refer to A as B 表示「把 A 稱為 B」，被動是 A be referred to as B；refer 的過去分詞要重複 r。"],
 ["You may refer to your notes during the test.","考試時你可以參考筆記。","refer to 也可以表示「參考、查閱」。"],
 ["Who the reporter was referring to is still a mystery.","記者當時指的是誰仍然是個謎。","Who 引導名詞子句當主詞，用單數動詞 is；子句內用直述句語序 the reporter was referring to。"]],
 "re-=回|fer=帶","把話題帶回某個東西上 → 提到；指的是","👉|提到"],
["reference","n.","參考資料；參考",[
 ["This dictionary has been used as a reference for years.","這本字典多年來一直被當作參考書。","完成式被動 has been used；as 表示「當作」。"],
 ["Not only should you list your references, but you should also check them.","你不但應該列出參考資料，也應該查證它們。","Not only 放句首，助動詞 should 提到主詞前。"],
 ["Whether this website can be used as a reference is questionable.","這個網站能不能當作參考資料，是有疑問的。","Whether 子句當主詞，這個位置不能用 if。"]],
 "re-=回|fer=帶|-ence=名詞字尾","refer 的名詞 → 參考資料","📚|參考資料"],
["differ","v.","不同",[
 ["Opinions on the new rule differ from person to person.","對新規定的看法因人而異。","differ from 表示「和……不同」；from person to person 表示「因人而異」。"],
 ["How the two reports differ has been explained by the editor.","兩份報導的不同之處已經由編輯說明了。","How 名詞子句當主詞，加上完成式被動 has been explained。"],
 ["Rarely do two news stories differ so much about the same event.","兩則新聞對同一件事的說法很少差這麼多。","Rarely 放句首要倒裝：現在式一般動詞加 do，動詞維持原形 differ。"]],
 "dif-=分開|fer=帶","往不同方向帶開 → 不同","↔️|不一樣"],
["suffer","v.","受苦；遭受",[
 ["Many cities suffer from heavy traffic during rush hour.","許多城市在尖峰時段飽受交通壅塞之苦。","suffer from 表示「受……之苦」，常接疾病或問題。"],
 ["The town has suffered serious damage from the typhoon.","這個鎮因颱風遭受了嚴重損害。","suffer 也可以直接接受詞：suffer damage、suffer a loss；has suffered 是現在完成式。"],
 ["Never had the village suffered such a terrible flood.","這個村莊從來沒遭受過這麼可怕的水災。","Never 放句首倒裝，過去完成式的 had 提到主詞前。"]],
 "suf-=在下面|fer=承受","在下面扛著重擔 → 受苦","😣|受苦"],
/* ---------- 字根 pos / pon（放） ---------- */
["position","n.","位置；職位；立場",[
 ["The position of the satellite is being checked every second.","衛星的位置每一秒都在被檢查。","進行式被動 is being checked。"],
 ["What position the newspaper takes on this issue is clear.","這家報社在這個議題上的立場很明確。","What 引導名詞子句當主詞，用單數動詞 is。"],
 ["Only in this position can you see the whole screen.","只有在這個位置，你才能看到整個螢幕。","Only + 地點片語 放句首，後面倒裝：can you see。"]],
 "pos=放|-ition=名詞字尾","被放置的地方 → 位置","📍|位置"],
["opponent","n.","對手",[
 ["Our team was made to play against a much stronger opponent.","我們隊被迫和一個強很多的對手比賽。","be made to V，to 不能省略。"],
 ["It is said that his opponent has never lost a game.","據說他的對手從來沒輸過。","It is said that + 子句。"],
 ["Not only did she beat her opponent, but she also broke the record.","她不但打敗了對手，還破了紀錄。","Not only 放句首，加 did，動詞用原形 beat。"]],
 "op-=相對|pon=放|-ent=人","放在你對面的人 → 對手","🥊|對手"],
["component","n.","零件；成分",[
 ["The components of this computer are being produced in Taiwan.","這台電腦的零件正在台灣生產。","進行式被動 are being produced；主詞 components 是複數，用 are。"],
 ["Every component has been tested, so the robot is ready to use.","每個零件都已經測試過了，所以這台機器人可以使用了。","完成式被動 has been tested；every + 單數名詞，用 has。"],
 ["Trust is said to be the most important component of friendship.","據說信任是友誼中最重要的成分。","be said to be 表示「據說是」。"]],
 "com-=一起|pon=放|-ent=名詞字尾","放在一起組成整體的東西 → 零件；成分","⚙️|零件"],
["expose","v.","暴露；使接觸；揭露",[
 ["Children are exposed to fake news online every day.","孩子們每天在網路上接觸到假新聞。","be exposed to 表示「暴露在……之下、接觸到……」，to 是介係詞。"],
 ["The truth was finally exposed by a young journalist.","真相最後被一位年輕記者揭露了。","被動 was exposed by；expose 也有「揭露」的意思。"],
 ["Never should a baby be exposed to strong sunlight.","嬰兒絕對不應該曝曬在強烈陽光下。","Never 放句首，should 提到主詞前，後面接被動 be exposed。"]],
 "ex-=向外|pose=放","放到外面給人看 → 暴露；揭露","☀️|暴露"],
["propose","v.","提議",[
 ["A new plan has been proposed to reduce traffic downtown.","一項減少市中心交通量的新計畫已經被提出。","完成式被動 has been proposed。"],
 ["What the mayor proposed was a car-free day.","市長提議的是一個無車日。","What 名詞子句當主詞；子句內 the mayor proposed 是直述句語序。"],
 ["Whether the plan he proposed will work is still uncertain.","他提議的計畫是否行得通，還不確定。","Whether 子句當主詞；the plan (that) he proposed 省略了關係代名詞。"]],
 "pro-=向前|pose=放","把想法放到大家面前 → 提議","🙋|提議"],
["oppose","v.","反對",[
 ["The new highway was strongly opposed by local residents.","新的高速公路遭到當地居民強烈反對。","被動 was opposed by。"],
 ["It is said that most students oppose the new rule.","據說大部分學生反對這項新規定。","oppose 直接接受詞，不加 to；也可以說 be opposed to + 名詞或 V-ing。"],
 ["Whether you support or oppose the plan, please give your reasons.","不論你支持還是反對這個計畫，都請說明理由。","whether A or B 引導副詞子句，表示「不論 A 或 B」。"]],
 "op-=相對|pose=放","放在對立的那一面 → 反對","🙅|反對"],
["deposit","n./v.","存款；訂金；存放",[
 ["The money will be deposited into your account tomorrow.","這筆錢明天會存入你的帳戶。","未來式被動：will be + p.p.。"],
 ["Not until I paid the deposit was the room kept for me.","直到我付了訂金，房間才為我保留。","Not until 子句放句首，主要子句倒裝：was the room kept。"],
 ["Whether the deposit will be returned depends on the condition of the bike.","押金是否會退還，要看腳踏車的狀況。","Whether 子句當主詞，用單數 depends；子句內是未來被動。"]],
 "de-=向下|posit=放","把東西放下來寄放 → 存放；存款","🏦|存款"],
["composition","n.","作文；作品；組成",[
 ["Your compositions are being read by the teacher now.","老師現在正在讀你們的作文。","進行式被動 are being read。"],
 ["That he wrote such a good composition in an hour surprised everyone.","他一小時內寫出這麼好的作文，讓大家都很驚訝。","That 子句當主詞，that 不能省略；動詞用單數 surprised。"],
 ["Rarely have I read a composition so full of creative ideas.","我很少讀到這麼有創意的作文。","Rarely 放句首倒裝：have I read。"]],
 "com-=一起|pos=放|-ition=名詞字尾","把字句放在一起組合起來 → 作文；組成","📝|作文"],
/* ---------- 字根 struct（建造） ---------- */
["structure","n.","結構",[
 ["The structure of the old bridge is being checked by engineers.","工程師正在檢查舊橋的結構。","進行式被動 is being checked。"],
 ["How a news story is structured affects how readers understand it.","一則新聞報導的架構方式，會影響讀者怎麼理解它。","How 名詞子句當主詞，動詞用單數 affects；structure 也可以當動詞「安排架構」。"],
 ["Not only is the building beautiful, but its structure is also very strong.","這棟建築不但漂亮，結構也非常堅固。","Not only 放句首，be 動詞 is 直接提前。"]],
 "struct=建造|-ure=名詞字尾","建造出來的樣子 → 結構","🏗️|結構"],
["construct","v.","建造",[
 ["The tunnel was constructed in less than three years.","這條隧道不到三年就建造完成。","被動 was constructed。"],
 ["A new subway station has been constructed near our school.","學校附近已經蓋好一座新的地鐵站。","完成式被動 has been constructed。"],
 ["Only after the station was constructed did the area become popular.","車站蓋好之後，這一帶才熱門起來。","Only after + 子句 放句首，主要子句要倒裝：did the area become；Only after 後面的子句本身不倒裝。"]],
 "con-=一起|struct=建造","把材料放在一起蓋起來 → 建造","🧱|建造"],
["instruct","v.","指示；教導",[
 ["The passengers were instructed to stay in their seats.","乘客被指示待在座位上。","instruct 人 to V 的被動：be instructed to V。"],
 ["The workers are being instructed on how to use the new machine.","工人們正在接受新機器的操作指導。","進行式被動 are being instructed；how to V 表示「如何做」。"],
 ["It is said that the pilot was instructed to land at another airport.","據說機長被指示降落在另一座機場。","It is said that + 被動子句。"]],
 "in-=在裡面|struct=建造","在腦袋裡建造知識 → 教導；指示","👩‍🏫|指示"],
["instruction","n.","說明；指示",[
 ["Instructions are given in both Chinese and English.","說明以中英文兩種語言提供。","被動 are given；instructions 表示「使用說明」時常用複數。"],
 ["Whether you have read the instructions makes a big difference.","你有沒有讀過說明書，結果差很多。","Whether 子句當主詞，動詞用單數 makes。"],
 ["Only by following the instructions can you set up the device correctly.","只有照著說明做，你才能正確設定這個裝置。","Only + by V-ing（方法）放句首，後面倒裝 can you set up。"]],
 "in-=在裡面|struct=建造|-ion=名詞字尾","instruct 的名詞 → 說明；指示","📄|使用說明"],
["destruction","n.","破壞",[
 ["The destruction of the rainforest has been reported around the world.","雨林遭破壞的消息已在全世界被報導。","完成式被動 has been reported。"],
 ["It is believed that the destruction was caused by the earthquake.","一般認為這場破壞是地震造成的。","It is believed that 和 It is said that 是同一類句型。"],
 ["Seldom has a storm caused so much destruction.","很少有暴風雨造成這麼大的破壞。","Seldom 放句首倒裝：has a storm caused。"]],
 "de-=相反|struct=建造|-ion=名詞字尾","建造的相反 → 破壞","💥|破壞"],
["instrument","n.","樂器；儀器",[
 ["Someone was heard playing an instrument late at night.","有人被聽到深夜在演奏樂器。","hear 人 V-ing 的被動：be heard + V-ing，表示動作正在進行。"],
 ["Can you play any musical instruments?","你會演奏任何樂器嗎？","play + 樂器；musical instrument 表示「樂器」。"],
 ["These scientific instruments have been sent to the laboratory.","這些科學儀器已經送到實驗室了。","完成式被動 have been sent。"]],
 "in-=在裡面|stru=建造|-ment=名詞字尾","建造出來使用的工具 → 儀器；樂器","🎻|樂器"],
/* ---------- 科技與發明 ---------- */
["device","n.","裝置",[
 ["Smart devices are being used in more and more homes.","越來越多家庭在使用智慧型裝置。","進行式被動 are being used。"],
 ["Whether this device is safe for children has not been proved.","這個裝置對孩子是否安全，還沒有被證實。","Whether 子句當主詞，加上完成式被動 has not been proved。"],
 ["Not only can this device play music, but it can also control the lights.","這個裝置不但能播放音樂，還能控制燈光。","Not only 放句首，助動詞 can 提到主詞前。"]],
 "","","📱|裝置"],
["gadget","n.","小器具；小玩意兒",[
 ["My dad is crazy about new gadgets.","我爸超迷新奇的小玩意兒。","be crazy about 表示「熱衷於……」。"],
 ["This kitchen gadget is said to save a lot of time.","據說這個廚房小工具可以省很多時間。","物 + be said to V 表示「據說……」。"],
 ["Which gadget is the most useful is hard to say.","哪個小工具最好用很難說。","Which 名詞子句當主詞，用單數動詞 is。"]],
 "","","🔧|小器具"],
["electrical","adj.","電的；電氣的",[
 ["All the electrical wires in the building are being checked.","大樓裡所有的電線正在接受檢查。","進行式被動 are being checked。"],
 ["The fire is believed to have been caused by an electrical problem.","一般認為這場火災是電路問題引起的。","be believed to have been p.p.：起火比「認為」更早發生，而且火是「被引起」的。"],
 ["Never should electrical devices be used in the bathtub.","絕對不應該在浴缸裡使用電器。","Never 放句首，should 提前，後面接被動 be used。"]],
 "electr=電|-ical=形容詞字尾","跟電有關的 → 電的","🔋|電氣"],
["electronic","adj.","電子的",[
 ["Electronic books can be read on many devices.","電子書可以在許多裝置上閱讀。","助動詞被動 can be read。"],
 ["Old electronic products should be recycled properly.","舊的電子產品應該妥善回收。","助動詞被動 should be + p.p.。"],
 ["Whether electronic dictionaries are better than paper ones is often discussed.","電子辭典是否比紙本辭典好，常常被討論。","Whether 子句當主詞；ones 代替前面的 dictionaries。"]],
 "electron=電子|-ic=形容詞字尾","跟電子有關的 → 電子的","🔌|電子"],
["robot","n.","機器人",[
 ["The robot was seen to pick up the box by itself.","有人看見機器人自己把箱子撿起來。","be seen to V：see 物 V 改成被動要加 to。"],
 ["Robots are being used to clean floors in some hospitals.","有些醫院正在使用機器人清潔地板。","進行式被動，加上 be used to V（被用來做……）。"],
 ["It is said that robots will take over many jobs.","據說機器人將會接手許多工作。","It is said that + 子句；take over 表示「接管、接手」。"]],
 "","","🤖|機器人"],
["artificial","adj.","人工的",[
 ["Artificial intelligence is being used to write news reports.","人工智慧正被用來撰寫新聞報導。","進行式被動 is being used to V。"],
 ["Whether artificial intelligence can think like humans is still a question.","人工智慧能否像人類一樣思考，仍是個問題。","Whether 子句當主詞，用單數 is。"],
 ["This juice is said to contain no artificial colors.","據說這款果汁不含人工色素。","be said to V；contain no + 名詞 表示「不含……」。"]],
 "arti=技藝|fic=做|-ial=形容詞字尾","用人的技術做出來的 → 人工的","🧠|人工"],
["wireless","adj.","無線的",[
 ["Wireless internet is provided in every MRT station.","每個捷運站都有提供無線網路。","被動 is provided。"],
 ["Not only is the speaker wireless, but it is also waterproof.","這個喇叭不但是無線的，還防水。","Not only 放句首，be 動詞 is 提前。"],
 ["The question is whether the wireless signal is strong enough.","問題在於無線訊號夠不夠強。","whether 子句放在 be 動詞後面當補語，要用 whether，不用 if。"]],
 "wire=電線|-less=沒有……的","沒有電線的 → 無線的","📶|無線"],
["innovation","n.","創新",[
 ["Many innovations have been introduced in the past ten years.","過去十年引進了許多創新。","完成式被動 have been introduced。"],
 ["What makes a company successful is innovation.","讓公司成功的是創新。","What 名詞子句當主詞，用單數 is。"],
 ["Only through innovation can a company stay ahead.","公司只有透過創新才能保持領先。","Only + through 片語放句首，倒裝 can a company stay。"]],
 "in-=進入|nov=新的|-ation=名詞字尾","帶進新的東西 → 創新","💡|創新"],
["automatic","adj.","自動的",[
 ["The doors are controlled by an automatic system.","這些門是由自動系統控制的。","被動 are controlled by。"],
 ["The lights are set to turn off automatically at midnight.","燈被設定在午夜自動關閉。","be set to V 表示「被設定成……」；automatically 是 automatic 的副詞。"],
 ["Whether automatic driving systems are safe enough has been widely discussed.","自動駕駛系統是否夠安全，已經被廣泛討論。","Whether 子句當主詞，加上完成式被動 has been discussed。"]],
 "auto-=自己|mat=動|-ic=形容詞字尾","自己會動的 → 自動的","🔄|自動"],
["experiment","n./v.","實驗",[
 ["The experiment is being repeated to check the results.","這個實驗正在重做，以確認結果。","進行式被動 is being repeated；to V 表示目的。"],
 ["Students are not allowed to do experiments without a teacher.","沒有老師在場，學生不准做實驗。","let 沒有被動，要用 be allowed to V；do an experiment 表示「做實驗」。"],
 ["Never had I done such an exciting experiment.","我從來沒做過這麼刺激的實驗。","Never 放句首倒裝：had I done。"]],
 "ex-=向外|peri=嘗試|-ment=名詞字尾","向外嘗試看看 → 實驗","🔬|實驗"],
["signal","n.","訊號",[
 ["No signal can be received in the tunnel.","隧道裡收不到任何訊號。","助動詞被動 can be received。"],
 ["The driver was seen to give a signal before turning left.","有人看到駕駛在左轉前打了方向燈。","be seen to V；before + V-ing 表示「在……之前」。"],
 ["Whether the signal is strong enough affects the video quality.","訊號夠不夠強會影響影片品質。","Whether 子句當主詞，動詞用單數 affects。"]],
 "sign=記號|-al=名詞字尾","傳遞記號的東西 → 訊號","🚦|訊號"],
["data","n.","資料；數據",[
 ["Your data is being collected by the app.","你的資料正在被這個應用程式收集。","進行式被動 is being collected；data 現在常當不可數名詞，用單數動詞。"],
 ["What the data shows surprised the scientists.","數據顯示的結果讓科學家很驚訝。","What 名詞子句當主詞，用單數動詞 surprised。"],
 ["Seldom is personal data completely safe online.","個人資料在網路上很少是完全安全的。","Seldom 放句首倒裝，be 動詞 is 提前。"]],
 "","","📊|數據"],
["satellite","n.","衛星",[
 ["The satellite was launched into space last year.","這顆衛星去年被發射到太空。","被動 was launched。"],
 ["Weather information is being sent by satellites every minute.","氣象資訊每分鐘都由衛星傳送回來。","進行式被動 is being sent。"],
 ["How satellites help us find our way is explained in this video.","衛星如何幫助我們找路，在這部影片中有說明。","How 名詞子句當主詞，加上被動 is explained。"]],
 "","","@s113_satellite"],
["virtual","adj.","虛擬的",[
 ["Virtual classes have been held since the school was closed.","學校停課以來，一直都是線上上課。","完成式被動 have been held，常搭配 since + 過去時間點。"],
 ["Whether virtual friends are real friends is an interesting question.","網路上的朋友算不算真正的朋友，是個有趣的問題。","Whether 子句當主詞。"],
 ["Little did I know that the virtual tour would feel so real.","我完全沒想到虛擬導覽會感覺這麼真實。","Little 放句首表示「一點也不」，要倒裝：did I know。"]],
 "","","🥽|虛擬"],
["operate","v.","操作；運作；動手術",[
 ["This machine is operated by a computer.","這台機器是由電腦操作的。","被動 is operated by。"],
 ["The patient is being operated on right now.","病人現在正在動手術。","operate on 人 表示「替某人動手術」；改成被動時 on 不能省略：be operated on。"],
 ["Whether the subway will operate during the typhoon has not been decided.","颱風期間地鐵是否營運，還沒決定。","Whether 子句當主詞，加上完成式被動 has not been decided。"]],
 "oper=工作|-ate=動詞字尾","讓東西工作 → 操作；運作","🕹️|操作"],
["generate","v.","產生",[
 ["Electricity is being generated by the wind farm.","風力發電場正在發電。","進行式被動 is being generated。"],
 ["A lot of heat is generated when a computer runs for hours.","電腦連續運轉好幾個小時，會產生大量的熱。","被動 is generated；when 引導時間副詞子句。"],
 ["Not only does the app generate pictures, but it also writes stories.","這個應用程式不但能產生圖片，還能寫故事。","Not only 放句首，加 does，動詞用原形 generate。"]],
 "gener=產生|-ate=動詞字尾","讓東西產生出來","⚡|產生"],
["rely","v.","依賴；信賴",[
 ["Too many people rely on their phones for directions.","太多人依賴手機導航。","rely on 人／物 for 事 表示「依賴……得到……」。"],
 ["Whether we can rely on this news source is the key question.","我們能否信賴這個新聞來源，是關鍵問題。","Whether 子句當主詞。"],
 ["Seldom do I rely on just one website for information.","我很少只依賴一個網站取得資訊。","Seldom 放句首倒裝，加 do，動詞維持原形 rely。"]],
 "","","🫱|依賴"],
["convenience","n.","方便",[
 ["For your convenience, free shuttle buses are provided.","為了您的方便，本處提供免費接駁車。","for your convenience 是公告常用語；被動 are provided。"],
 ["What people want most is convenience.","人們最想要的是方便。","What 名詞子句當主詞，用單數 is。"],
 ["Not only do convenience stores sell food, but they also help people pay bills.","便利商店不但賣食物，還幫人繳帳單。","Not only 放句首倒裝，加 do，動詞用原形 sell。"]],
 "con-=一起|ven=來|-ience=名詞字尾","需要的東西都一起來到身邊 → 方便","🏪|方便"],
/* ---------- 新聞與媒體識讀 ---------- */
["broadcast","v./n.","廣播；播送",[
 ["The news is being broadcast live.","新聞正在現場直播。","進行式被動 is being broadcast；broadcast 三態同形。"],
 ["The game has been broadcast on three channels.","這場比賽已經在三個頻道播出。","完成式被動 has been broadcast。"],
 ["It is said that the first TV broadcast in Taiwan was in 1962.","據說台灣第一次電視播出是在 1962 年。","It is said that + 子句；broadcast 也可以當名詞「播出的節目」。"]],
 "broad=廣的|cast=撒出去","往四面八方撒出去 → 廣播","@s113_broadcast"],
["media","n.","媒體",[
 ["Social media is said to have a strong influence on teenagers.","據說社群媒體對青少年有很大的影響。","be said to V；social media 通常當單數用。"],
 ["How the media report a story can change public opinion.","媒體如何報導一則新聞，可以改變大眾輿論。","How 名詞子句當主詞，後面接 can change。"],
 ["Not only do we read the news on social media, but we also share it.","我們不但在社群媒體上看新聞，還會分享它。","Not only 放句首倒裝，加 do，動詞用原形 read。"]],
 "medi=中間|-a=複數字尾","在中間傳遞訊息的管道 → 媒體","📰|媒體"],
["source","n.","來源",[
 ["Whether the source is reliable must be checked first.","消息來源是否可靠，必須先查證。","Whether 子句當主詞，加上助動詞被動 must be checked。"],
 ["The source of the rumor has been found.","謠言的來源已經被找到了。","完成式被動 has been found。"],
 ["Only by checking the source can we know if a story is true.","只有查證來源，我們才能知道一則報導是否屬實。","Only + by V-ing 放句首要倒裝；know if ... 的 if 子句當受詞，可以換成 whether。"]],
 "","","🔎|來源"],
["journalism","n.","新聞業；新聞報導",[
 ["Good journalism is said to be the watchdog of society.","據說好的新聞報導是社會的看門狗。","be said to be 表示「據說是」。"],
 ["Whether journalism can stay independent is an important question.","新聞業能否保持獨立，是一個重要的問題。","Whether 子句當主詞，不能用 if。"],
 ["Not only does journalism inform people, but it also shapes public opinion.","新聞業不但讓大眾知道消息，也塑造輿論。","Not only 放句首，加 does，動詞用原形 inform。"]],
 "journal=日報|-ism=名詞字尾","每天報導消息的工作 → 新聞業","🗞️|新聞業"],
["accurate","adj.","準確的",[
 ["Whether the report is accurate has not been checked yet.","這篇報導是否正確，還沒有被查證。","Whether 子句當主詞，加上完成式被動 has not been checked。"],
 ["News should be checked carefully so that it is accurate.","新聞應該被仔細查證，以確保它是準確的。","助動詞被動 should be checked；so that 表示目的。"],
 ["Rarely is a weather report one hundred percent accurate.","天氣預報很少百分之百準確。","Rarely 放句首倒裝，be 動詞 is 提前。"]],
 "ac-=朝向|cur=照顧；用心|-ate=形容詞字尾","用心照顧到每個細節 → 準確的","🎯|準確"],
["reliable","adj.","可靠的",[
 ["Whether this website is reliable is hard to tell.","這個網站可不可靠很難判斷。","Whether 子句當主詞，不能用 if。"],
 ["The new trains are said to be more reliable than the old ones.","據說新火車比舊火車可靠。","be said to V；ones 代替 trains。"],
 ["Not only is she reliable, but she is also kind.","她不但可靠，而且很善良。","Not only 放句首倒裝：is she。"]],
 "reli=依靠|-able=可……的","可以依靠的 → 可靠的","🤝|可靠"],
["genuine","adj.","真正的；真誠的",[
 ["Whether this painting is genuine is being examined by experts.","這幅畫是不是真跡，正由專家鑑定中。","Whether 子句當主詞，加上進行式被動 is being examined。"],
 ["The bag is said to be made of genuine leather.","據說這個包包是真皮做的。","be said to V；be made of 表示看得出原料。"],
 ["Rarely is such a genuine smile seen on TV.","電視上很少看到這麼真誠的笑容。","Rarely 放句首倒裝，加上被動 is ... seen。"]],
 "","","✔️|真貨"],
["false","adj.","錯誤的；不實的",[
 ["The rumor has been proved false.","這則謠言已經被證實是假的。","prove + 受詞 + 形容詞 的被動：be proved false。"],
 ["Never should false information be shared online.","絕不應該在網路上分享不實資訊。","Never 放句首倒裝，should 提前，後面接被動 be shared。"],
 ["Whether the statement is true or false will be decided by the court.","這個說法是真是假，將由法院判定。","Whether A or B 子句當主詞，加上未來被動 will be decided。"]],
 "","","❌|不實"],
["evidence","n.","證據",[
 ["No evidence has been found to support the rumor.","沒有找到任何支持這則謠言的證據。","完成式被動 has been found；evidence 不可數，不加 s。"],
 ["What the evidence shows is quite clear.","證據顯示的東西相當清楚。","What 名詞子句當主詞，用單數 is。"],
 ["Only with strong evidence can a reporter publish such a story.","只有掌握有力證據，記者才能發表這樣的報導。","Only + with 片語放句首，倒裝 can a reporter publish。"]],
 "e-=向外|vid=看|-ence=名詞字尾","露在外面、大家看得見的東西 → 證據","🔍|證據"],
["bias","n.","偏見；偏頗",[
 ["Every news report is said to have some bias.","據說每一則新聞報導都帶有一些偏見。","be said to V；every 後面接單數名詞。"],
 ["Whether a report shows bias is something we should always ask.","報導是否偏頗，是我們應該常常問的問題。","Whether 子句當主詞。"],
 ["Seldom are readers aware of their own bias.","讀者很少意識到自己的偏見。","Seldom 放句首倒裝，be 動詞 are 提前；be aware of 表示「意識到」。"]],
 "","","⚖️|偏頗"],
["influence","n./v.","影響",[
 ["Young people are easily influenced by what they see online.","年輕人很容易被網路上看到的東西影響。","被動 are influenced by；what they see online 是名詞子句，當介係詞 by 的受詞。"],
 ["That social media influences how we think cannot be denied.","社群媒體影響我們的思考方式，這一點無法否認。","That 子句當主詞，加上助動詞被動 cannot be denied。"],
 ["Not only did the movie influence young people, but it also changed the fashion of the time.","這部電影不但影響了年輕人，還改變了當時的流行。","Not only 放句首，加 did，動詞用原形 influence。"]],
 "in-=進入|flu=流|-ence=名詞字尾","流進人的心裡 → 影響","🌊|影響"],
["publish","v.","出版；發表",[
 ["Her first novel was published when she was only sixteen.","她的第一本小說在她只有十六歲時出版。","被動 was published。"],
 ["The article has been published online.","這篇文章已經在網路上發表了。","完成式被動 has been published。"],
 ["Whether the story should be published was discussed for hours.","這篇報導是否應該刊登，被討論了好幾個小時。","Whether 子句當主詞，加上被動 was discussed。"]],
 "publ=大眾|-ish=動詞字尾","讓大眾都看得到 → 出版；發表","📖|出版"],
["channel","n.","頻道",[
 ["The concert is being shown on Channel 5.","演唱會正在第五台播出。","進行式被動 is being shown。"],
 ["Which channel you watch can affect how you see the world.","你看哪個頻道，可能影響你怎麼看世界。","Which 名詞子句當主詞。"],
 ["It is said that this YouTube channel has over two million subscribers.","據說這個 YouTube 頻道有超過兩百萬名訂閱者。","It is said that + 子句；subscriber 是 subscribe 加上 -r，表示「訂閱者」。"]],
 "","","📺|頻道"],
["scientific","adj.","科學的",[
 ["Scientific research on artificial intelligence is being done around the world.","世界各地正在進行人工智慧的科學研究。","進行式被動 is being done；主詞是 research（不可數），用 is。"],
 ["That the idea has no scientific evidence is a big problem.","這個說法沒有科學證據，是一個大問題。","That 子句當主詞，that 不能省略。"],
 ["Only through scientific methods can we test an idea.","只有透過科學方法，我們才能檢驗一個想法。","Only + through 片語放句首，倒裝 can we test。"]],
 "scien=知識|-tific=形容詞字尾","跟有系統的知識有關的 → 科學的","🧬|科學"],
["critical","adj.","批判的；關鍵的；危急的",[
 ["Students should be taught to think critically about the news.","學生應該被教導用批判的角度看新聞。","助動詞被動 should be taught；critically 是 critical 的副詞。"],
 ["What matters most in media literacy is critical thinking.","媒體識讀最重要的是批判性思考。","What 名詞子句當主詞，用單數 is。"],
 ["Whether the patient is in critical condition has not been reported.","病人是否病危，還沒有被報導。","Whether 子句當主詞，加上完成式被動；in critical condition 表示「病危」。"]],
 "critic=評論者|-al=形容詞字尾","像評論者一樣仔細判斷 → 批判的","🤔|批判思考"],
["circulate","v.","流通；傳播",[
 ["The fake photo was circulated widely online.","那張假照片在網路上被廣泛流傳。","被動 was circulated。"],
 ["It is said that the story has been circulating for years.","據說這個故事已經流傳好幾年了。","It is said that + 子句；has been circulating 是現在完成進行式（主動）。"],
 ["Not only did the video circulate quickly, but it also misled many people.","這段影片不但傳得很快，還誤導了許多人。","Not only 放句首，加 did，動詞用原形 circulate。"]],
 "circul=圓圈|-ate=動詞字尾","繞著圓圈轉來轉去 → 流通；傳播","🔁|流傳"],
["mislead","v.","誤導",[
 ["Readers were misled by the headline.","讀者被標題誤導了。","mislead 三態：mislead、misled、misled；被動 were misled。"],
 ["Whether the ad was meant to mislead people is being investigated.","這則廣告是否有意誤導民眾，正在調查中。","Whether 子句當主詞，加上進行式被動 is being investigated。"],
 ["Rarely do numbers lie, but they can mislead.","數字很少說謊，但它們可能誤導人。","Rarely 放句首倒裝：do numbers lie。"]],
 "mis-=錯誤|lead=引導","引導到錯的方向 → 誤導","🧭|誤導"],
["truth","n.","真相；事實",[
 ["The truth has finally been revealed.","真相終於被揭露了。","完成式被動 has been revealed。"],
 ["Whether he is telling the truth is still unknown.","他是否說了實話，仍然不得而知。","Whether 子句當主詞；tell the truth 表示「說實話」。"],
 ["Only then did I learn the truth.","直到那時我才得知真相。","Only then 放句首，倒裝 did I learn。"]],
 "tru=真的|-th=名詞字尾","true（真的）的名詞 → 真相","💯|真相"],
/* ---------- 交通與城市 ---------- */
["vehicle","n.","車輛",[
 ["No vehicles are allowed on this street on Sundays.","星期天這條街禁止車輛通行。","let 沒有被動，「被允許」要用 be allowed。"],
 ["More and more electric vehicles are being sold in Taiwan.","台灣賣出的電動車越來越多。","進行式被動 are being sold。"],
 ["Whether old vehicles should be banned downtown is being discussed.","老舊車輛是否該禁止進入市中心，正在討論中。","Whether 子句當主詞，加上進行式被動 is being discussed。"]],
 "","","🚗|車輛"],
["pedestrian","n.","行人",[
 ["A pedestrian was seen to cross the road against the red light.","有人看到一名行人闖紅燈過馬路。","be seen to V：see 人 V 的被動要加 to。"],
 ["This street has been turned into a pedestrian zone.","這條街已經改成行人徒步區。","完成式被動 has been turned into；pedestrian 也可以當形容詞「行人的」。"],
 ["Only when the light turns green should pedestrians cross the street.","只有綠燈亮起時，行人才應該過馬路。","Only when 子句放句首，主要子句倒裝：should pedestrians cross。"]],
 "pedestr=徒步|-ian=人","用腳走路的人 → 行人","@s113_pedestrian"],
["commuter","n.","通勤族",[
 ["Commuters are being asked to use the other exit.","通勤族正被要求改走另一個出口。","進行式被動 are being asked to V。"],
 ["It is said that more than two million commuters take the MRT every day.","據說每天有超過兩百萬名通勤族搭捷運。","It is said that + 子句。"],
 ["Seldom do commuters get a seat during rush hour.","尖峰時段通勤族很少有位子坐。","Seldom 放句首倒裝，加 do，動詞用原形 get。"]],
 "commut=通勤|-er=人","commute（通勤）加上 -er → 通勤的人","🚇|通勤族"],
["downtown","adv./adj./n.","在市中心；市中心",[
 ["A new shopping mall is being built downtown.","市中心正在興建一座新的購物中心。","downtown 當副詞時，前面不加 to 或 in。"],
 ["Whether we drive or take the MRT downtown depends on the time.","我們開車還是搭捷運去市中心，要看時間。","Whether A or B 子句當主詞，動詞用單數 depends。"],
 ["Never has downtown been so crowded.","市中心從來沒有這麼擁擠過。","Never 放句首倒裝：has downtown been。"]],
 "down=往下|town=城鎮","往下走到城鎮的熱鬧區 → 市中心","🏙️|市中心"],
["urban","adj.","都市的",[
 ["Urban areas are being expanded quickly.","都市地區正在快速擴張。","進行式被動 are being expanded。"],
 ["That urban life is stressful is widely believed.","都市生活壓力大，這是普遍的看法。","That 子句當主詞，加上被動 is believed；也可以說 It is widely believed that urban life is stressful.。"],
 ["Not only is urban housing expensive, but it is also small.","都市的住房不但貴，而且小。","Not only 放句首，be 動詞 is 提前。"]],
 "urb=城市|-an=形容詞字尾","城市的","🏢|都市"],
["rural","adj.","鄉村的",[
 ["Many rural schools have been closed because there are fewer children.","因為孩子變少，許多鄉村學校已經關閉。","完成式被動 have been closed。"],
 ["Whether rural areas can attract young people is a big challenge.","鄉村地區能否吸引年輕人，是一大挑戰。","Whether 子句當主詞。"],
 ["Seldom is the air in rural areas as polluted as the air in cities.","鄉村的空氣很少像城市的空氣那麼髒。","Seldom 放句首倒裝，be 動詞 is 提前；as ... as 比較的是「空氣」和「空氣」。"]],
 "rur=鄉村|-al=形容詞字尾","鄉村的","@s113_rural"],
["district","n.","地區；行政區",[
 ["This district is being turned into a cultural center.","這一區正被改造成文化中心。","進行式被動 is being turned into。"],
 ["It is said that this district has the highest house prices in the city.","據說這一區是全市房價最高的地方。","It is said that + 子句。"],
 ["Which district you live in affects which school you can go to.","你住在哪一區，會影響你能讀哪一所學校。","Which 名詞子句當主詞，動詞 affects 的受詞也是 Which 名詞子句。"]],
 "","","🗺️|行政區"],
["avenue","n.","大道",[
 ["The avenue is lined with trees.","這條大道兩旁種滿了樹。","be lined with 表示「沿線排列著……」。"],
 ["The avenue is being widened to reduce traffic jams.","這條大道正在拓寬，以減少塞車。","進行式被動 is being widened；to V 表示目的。"],
 ["Only on weekends is the avenue closed to cars.","只有週末這條大道才禁止汽車通行。","Only + 時間片語放句首，be 動詞 is 提前。"]],
 "a-=朝向|venue=來","朝著目的地走來的寬路 → 大道","🛣️|大道"],
["tunnel","n.","隧道",[
 ["The Hsuehshan Tunnel was opened in 2006.","雪山隧道在 2006 年通車。","被動 was opened。"],
 ["A tunnel is being dug under the mountain.","山底下正在挖一條隧道。","進行式被動 is being dug；dig 三態：dig、dug、dug。"],
 ["Never had I driven through such a long tunnel.","我從來沒開過這麼長的隧道。","Never 放句首倒裝：had I driven。"]],
 "","","@s113_tunnel"],
["sidewalk","n.","人行道",[
 ["Scooters are often seen parked on the sidewalks.","常常看到機車停在人行道上。","see 物 p.p. 的被動：be seen + p.p.。"],
 ["The sidewalks are being repaired this week.","人行道這週正在整修。","進行式被動 are being repaired。"],
 ["Not only should the sidewalks be wider, but they should also be flatter.","人行道不但應該更寬，還應該更平坦。","Not only 放句首，助動詞 should 提前。"]],
 "side=旁邊|walk=走","馬路旁邊走路的地方 → 人行道","🚶|人行道"],
["helmet","n.","安全帽",[
 ["Riders are required to wear helmets.","騎士依規定必須戴安全帽。","be required to V 表示「被規定要……」。"],
 ["Seldom is a rider seen without a helmet these days.","現在很少看到騎士沒戴安全帽。","Seldom 放句首倒裝，加上被動 is a rider seen。"],
 ["That a helmet can save your life is a fact.","安全帽能救你一命是事實。","That 子句當主詞，that 不能省略。"]],
 "","","⛑️|安全帽"],
["resident","n.","居民",[
 ["Residents were made to leave their homes before the typhoon came.","颱風來之前，居民被迫離開家園。","be made to V：make 的被動要加 to。"],
 ["The residents are being asked whether they want a new park.","居民正被詢問是否想要一座新公園。","進行式被動 are being asked；whether 子句當受詞。"],
 ["It is said that most residents here have lived in the town for over 30 years.","據說這裡大部分居民在鎮上住了三十多年。","It is said that + 子句；have lived ... for 表示持續到現在。"]],
 "re-=回；留下|sid=坐|-ent=人","留下來坐著、定居的人 → 居民","🏘️|居民"],
["lane","n.","車道；巷",[
 ["This lane is being closed for repairs.","這條車道正因維修而封閉。","進行式被動 is being closed。"],
 ["Scooters are not allowed in the fast lane.","機車不能騎在快車道上。","be allowed 的否定：be not allowed。"],
 ["Only in the bus lane can buses move quickly during rush hour.","尖峰時段只有在公車專用道上，公車才能快速行駛。","Only + 地點片語 放句首，倒裝 can buses move。"]],
 "","","🛤️|車道"],
["crowd","n./v.","人群；擠滿",[
 ["The crowd was seen to move slowly toward the exit.","可以看到人群慢慢地往出口移動。","be seen to V。"],
 ["Never have I seen such a large crowd at the station.","我從來沒在車站看過這麼多人。","Never 放句首倒裝：have I seen。"],
 ["Whether the crowd can leave safely is what worries the police.","人群能否安全離開，是警方擔心的事。","Whether 子句當主詞；what worries the police 是名詞子句當補語。"]],
 "","","👥|人群"],
["railway","n.","鐵路",[
 ["A new railway is being built along the coast.","一條新鐵路正沿著海岸興建。","進行式被動 is being built。"],
 ["It is said that the old railway was built over a hundred years ago.","據說這條老鐵路是一百多年前建造的。","It is said that + 子句；也可以改寫成 The old railway is said to have been built ...。"],
 ["Not until the railway was built did the town become rich.","直到鐵路蓋好，這個鎮才富裕起來。","Not until 子句放句首，主要子句倒裝：did the town become。"]],
 "rail=鐵軌|way=路","鋪著鐵軌的路 → 鐵路","🚂|鐵路"],
["access","n./v.","使用權；接近；進入",[
 ["Free internet access is provided in the library.","圖書館提供免費上網。","被動 is provided。"],
 ["Whether everyone has access to clean water is a global problem.","每個人能否取得乾淨的水，是全球性的問題。","have access to 表示「可以使用、取得」，to 是介係詞。"],
 ["Only with a student card can you access the building.","只有持學生證才能進入這棟建築。","Only + with 片語放句首，倒裝 can you access；access 當動詞直接接受詞。"]],
 "ac-=朝向|cess=走","朝著目標走過去 → 接近；使用權","🔑|使用權"]
];

/* ---------- 沒有字根可拆的字：記憶小撇步 ---------- */
Object.assign(MEMO, {
  data:"data 原本是 datum 的複數，現在常當不可數名詞：The data is ...；唸 DAY-ta 或 DA-ta 都可以。",
  genuine:"genuine 唸 JEN-yu-in，結尾的 -ine 唸短短的 in。相反詞是 fake（假的）：genuine leather 真皮。",
  device:"device（名詞：裝置）和 devise（動詞：設計）只差一個字母：c 是名詞、s 是動詞，跟 advice／advise 一樣。",
  gadget:"gadget 唸 GAD-jit，指好玩又實用的小器具：kitchen gadgets 廚房小工具、tech gadgets 科技小物。",
  robot:"robot 來自捷克語 robota（勞動）：替人做苦工的機器。重音在前面：RO-bot。",
  satellite:"satellite 唸 SAT-uh-lite，兩個 l。記法：衛星「sat（坐）」在軌道上，繞著地球一直轉。",
  virtual:"virtual 和 virtue（效力）有關：有那個效果，但不是真的 → 虛擬的。virtual reality（VR）＝虛擬實境。",
  rely:"rely on ＝ depend on（依賴）。形容詞 reliable（可靠的）：y 改成 i 再加 able。",
  source:"source（來源）和 sauce（醬汁）很像：source 中間有 r，想成消息的 root（根源）。",
  false:"false 和 true 是一對，True or False 就是是非題。false 是「不正確的」，fake 是「假造的」：a false answer 錯誤答案、a fake bag 仿冒包。",
  bias:"bias 唸 BYE-us。形容詞是 biased（有偏見的）：a biased report 偏頗的報導；have a bias against 對……有偏見。",
  channel:"channel 頻道，兩個 n：CHAN-nel。也可以指「海峽」：the English Channel 英吉利海峽。",
  vehicle:"vehicle 唸 VEE-ih-kul，h 不發音。來自拉丁文「載運」：用來載人載貨的 → 車輛。",
  district:"district 行政區，例如 Da'an District 大安區。字裡藏著 strict（嚴格的）：一區一區劃得清清楚楚。",
  tunnel:"tunnel 隧道，兩個 n：TUN-nel。記法：隧道讓山兩邊「通」了。",
  helmet:"helmet 唸 HEL-mit。wear a helmet 戴安全帽；騎機車、騎腳踏車都要戴。",
  lane:"lane 車道、巷：Lane 5 是「五巷」。和 line（線）只差一個字母：車道就是用線畫出來的。",
  crowd:"crowd 人群（名詞）；形容詞是 crowded（擁擠的）。ow 唸 /aʊ/，跟 cow、now 一樣。"
});

const S1_1_3_GRAMMAR = [
{ id:"g1", title:"被動語態進階：進行式、完成式、感官與使役動詞",
  intro:"被動語態的核心是 be + p.p.。只要把 be 動詞換成不同時態，就能說「正在被……」「已經被……」；感官動詞和使役動詞改成被動時，原形動詞前面要補上 to。",
  table:[["類型","主動","被動"],["進行式","They are fixing the road.","The road is being fixed."],["完成式","They have built the station.","The station has been built."],["助動詞／未來","We can recycle it. / They will open it.","It can be recycled. / It will be opened."],["感官動詞","We saw him enter the room.","He was seen to enter the room."],["使役動詞 make","The teacher made us rewrite it.","We were made to rewrite it."]],
  points:[
   "進行式被動：be + being + p.p.：The bridge is being repaired.（橋正在被修理）",
   "完成式被動：have / has / had + been + p.p.：Over 100 comments have been posted.",
   "see、hear、watch 等感官動詞的主動是「人 + 原形動詞」，改成被動時要加 to：He was seen to leave. 如果主動用 V-ing，被動就保留 V-ing：He was seen leaving.",
   "make 人 V 改成被動要變成 be made to V：We were made to wait. 學測常考「to 不能省」。",
   "let 沒有被動形式，要改用 be allowed to V：Students are not allowed to eat here.",
   "不及物動詞（happen、occur、disappear、appear）沒有被動：The accident happened last night.（不能說 was happened）",
   "動詞片語改被動時，介係詞要跟著留下來：The patient is being operated on. / He was laughed at."],
  ex:[
   ["A new subway line is being built under the river.","一條新的地鐵線正在河底下興建。","進行式被動：is being built。"],
   ["Harmful substances have been found in the river.","河裡被發現有有害物質。","完成式被動：have been found。"],
   ["The submarine was seen to rise slowly out of the water.","有人看見潛水艇慢慢浮出水面。","感官動詞被動：be seen to V。"],
   ["Residents were made to leave their homes before the typhoon came.","颱風來之前，居民被迫離開家園。","使役動詞被動：be made to V。"],
   ["The patient is being operated on right now.","病人現在正在動手術。","動詞片語 operate on 改被動時，on 要保留。"]]},
{ id:"g2", title:"名詞子句當主詞與 It is said that ...",
  intro:"一整個子句可以當主詞，就像一個大名詞。常見的開頭有 That、What、Whether、How、Who、Which。另外，「據說」有兩種說法：It is said that ... 和 人／物 + is said to V。",
  table:[["開頭","例句","意思"],["That","That he lied is clear.","他說謊這件事很清楚"],["What","What he said is true.","他說的話是真的"],["Whether","Whether he will come is unknown.","他會不會來還不知道"],["How / Who / Which","How you study matters.","你怎麼讀書很重要"],["It is said that","It is said that she is rich. = She is said to be rich.","據說她很有錢"]],
  points:[
   "名詞子句當主詞，整個子句視為單數，動詞用單數：What he said is true. / How you study matters.",
   "名詞子句用直述句語序，不要倒裝成問句：What he said（不能寫 What did he say）is true.",
   "That 開頭的主詞子句，that 不能省略；主詞太長時常用虛主詞 It 移到後面：It is clear that he lied.",
   "That 和 What 的差別：That 後面是完整的句子；What 本身在子句裡當主詞或受詞，後面的句子缺一塊。",
   "It is said that + S + V = S + is said + to V（同時發生）；如果子句比 is said 更早發生，用 to have + p.p.：He is said to have been a singer.",
   "同類的動詞還有 believe、report、think、know：It is believed that ... = 人 is believed to V。"],
  ex:[
   ["What the mayor proposed was a car-free day.","市長提議的是一個無車日。","What 名詞子句當主詞，子句內是直述句語序。"],
   ["That the rumor spread so fast shocked everyone.","謠言傳得這麼快，讓大家很震驚。","That 子句當主詞，that 不能省略。"],
   ["How you interpret the news depends on your background.","你怎麼解讀新聞取決於你的背景。","How 子句當主詞，動詞用單數 depends。"],
   ["It is said that the first submarine was made of wood.","據說第一艘潛水艇是木頭做的。","It is said that + 子句。"],
   ["Social media is said to have a strong influence on teenagers.","據說社群媒體對青少年有很大的影響。","主詞 + is said to V，和 It is said that 意思相同。"]]},
{ id:"g3", title:"whether 和 if：都是「是否」，但用法不同",
  intro:"whether 和 if 都可以表示「是否」，當動詞的受詞時兩個都能用；但在主詞、介係詞後面、緊接 or not、接 to V、當補語這些位置，只能用 whether。",
  table:[["位置","whether","if"],["動詞的受詞：I don't know ___ he will come.","✔","✔"],["主詞：___ he will come is unknown.","✔","✘"],["介係詞後：It depends on ___ it rains.","✔","✘"],["緊接 or not：___ or not he comes","✔","✘"],["接 to V：I can't decide ___ to go.","✔","✘"],["be 動詞後的補語：The question is ___ ...","✔","✘（通常不用）"]],
  points:[
   "當動詞的受詞時，whether 和 if 都可以：Ask her whether / if she is free.",
   "放在句首當主詞，只能用 whether：Whether he will come is not certain.",
   "介係詞（on、about、of）後面只能用 whether：It depends on whether we have time.",
   "whether or not 可以緊接在一起，if or not 是錯的；whether to V 也不能換成 if to V。",
   "if 也可能是「如果」：條件句的 if 子句用現在式代替未來（If it rains tomorrow, we will stay home.）；但「是否」的子句要用未來式（I don't know if it will rain tomorrow.）。學測愛考這個陷阱！",
   "whether A or B 也能引導副詞子句，表示「不論 A 或 B」：Whether you like it or not, you have to go."],
  ex:[
   ["Whether this website is reliable is hard to tell.","這個網站可不可靠很難判斷。","當主詞只能用 whether。"],
   ["It depends on whether you have a preference for sweet or salty food.","這要看你偏好甜食還是鹹食。","介係詞 on 後面只能用 whether。"],
   ["Whether to subscribe or not is up to you.","要不要訂閱由你決定。","whether to V 不能換成 if。"],
   ["The question is whether the wireless signal is strong enough.","問題在於無線訊號夠不夠強。","be 動詞後面當補語，用 whether。"],
   ["The residents are being asked whether they want a new park.","居民正被詢問是否想要一座新公園。","當受詞時，whether 也可以換成 if。"]]},
{ id:"g4", title:"倒裝句入門：否定副詞放句首",
  intro:"把 Never、Seldom、Rarely、Little、Not only、Not until、Only + 時間／方法 放到句首來加強語氣時，後面要「倒裝」：把助動詞或 be 動詞移到主詞前面，就像問句的語序。",
  table:[["原句","倒裝句"],["I have never seen such a big crowd.","Never have I seen such a big crowd."],["He seldom goes to school by bus.","Seldom does he go to school by bus."],["She is not only smart but also kind.","Not only is she smart, but she is also kind."],["I realized the truth only then.","Only then did I realize the truth."],["We didn't go out until the typhoon left.","Not until the typhoon left did we go out."]],
  points:[
   "有助動詞（have、can、should、will）：直接把助動詞移到主詞前：Never have I seen ...",
   "be 動詞：直接把 be 動詞移到主詞前：Rarely is she late.",
   "一般動詞：加 do / does / did 放到主詞前，原本的動詞改回原形：Seldom does he go（不能寫 does he goes）。",
   "Not only 放句首時，只有前半句倒裝，but (also) 後面的句子維持正常語序。",
   "Only + 時間／地點／方法片語或子句放句首時，倒裝的是「主要子句」：Only after the bell rang did the students leave.（the bell rang 不倒裝）",
   "Only 修飾主詞時不倒裝：Only Tom knows the answer.（不能寫 Only Tom does know）",
   "Little did I know ... 表示「我完全不知道……」，是作文常用的加分句型。"],
  ex:[
   ["Never had the village suffered such a terrible flood.","這個村莊從來沒遭受過這麼可怕的水災。","過去完成式的 had 提到主詞前。"],
   ["Seldom do commuters get a seat during rush hour.","尖峰時段通勤族很少有位子坐。","一般動詞要加 do，get 用原形。"],
   ["Not only is the building beautiful, but its structure is also very strong.","這棟建築不但漂亮，結構也非常堅固。","Not only 只有前半句倒裝。"],
   ["Only after the station was constructed did the area become popular.","車站蓋好之後，這一帶才熱門起來。","Only after 子句不倒裝，主要子句倒裝。"],
   ["Little did I know that the virtual tour would feel so real.","我完全沒想到虛擬導覽會感覺這麼真實。","Little 放句首，加 did，know 用原形。"]]}
];

const S1_1_3_QUIZ = [
 ["The new MRT line ___ now, so the road is closed.",["is building","is being built","has built","builds"],1,"路線是「正在被蓋」：進行式被動 is being built。主詞是物，不能用主動 is building。","g1"],
 ["Over 200 comments ___ under her post since this morning.",["have posted","were posting","have been posted","are posted"],2,"since this morning 用完成式；留言是「被貼出來」的，用完成式被動 have been posted。","g1"],
 ["The boy was seen ___ into the subway station.",["to run","run","ran","runs"],0,"see 人 V 改成被動要加 to：be seen to V。","g1"],
 ["We were made ___ the safety rules before the experiment.",["read","reading","reads","to read"],3,"make 人 V 改成被動要變 be made to V，to 不能省略。","g1"],
 ["The accident ___ at the crossroads last night.",["happened","was happened","was happening by","has been happened"],0,"happen 是不及物動詞，沒有被動語態。","g1"],
 ["Students ___ to use their phones in the laboratory.",["are not let","are not allowed","do not allow","are not letting"],1,"let 沒有被動，要用 be allowed to V。","g1"],
 ["The patient is being operated ___ right now.",["by","to","on","with"],2,"operate on 人 表示「替某人動手術」，改成被動時 on 要保留。","g1"],
 ["A girl was heard ___ in the next room when I walked by.",["sing","to singing","sang","singing"],3,"hear 人 V-ing 的被動是 be heard + V-ing，表示當時正在唱。","g1"],
 ["The old bridge ___ next year.",["will be replaced","will replace","is replacing","has replaced"],0,"橋是「被取代」的，next year 用未來式被動 will be replaced。","g1"],
 ["___ he said at the meeting surprised everyone.",["That","What","Which","It"],1,"he said 後面缺受詞（說了什麼），要用 What；That 後面要接完整的句子。","g2"],
 ["___ the earth is round is a fact.",["What","It","That","Whether"],2,"the earth is round 是完整的句子，當主詞用 That，而且 that 不能省略。","g2"],
 ["It ___ that the singer will hold a concert in Taipei.",["is said","says","said","is saying"],0,"「據說」是 It is said that ...，要用被動。","g2"],
 ["The bridge is said ___ over 100 years ago.",["to have been built","to be built","to build","having built"],0,"建橋比「據說」早發生，而且橋是被蓋的：to have been built。","g2"],
 ["He is said ___ a very kind person.",["being","be","that he is","to be"],3,"人 + is said to V：He is said to be ...。","g2"],
 ["How the rumor started ___ still unknown.",["are","were","is","be"],2,"名詞子句當主詞視為單數，用 is。","g2"],
 ["___ we need now is more time.",["That","Which","How","What"],3,"we need 後面缺受詞，用 What（= the thing that）。","g2"],
 ["People say that she speaks five languages. = She ___ five languages.",["says to speak","is said to speak","is said speaking","said to speak"],1,"People say that ... = 人 is said to V。","g2"],
 ["What ___ was not true.",["did the news report","does the news report","the news reported","reported the news"],2,"名詞子句要用直述句語序：What the news reported。","g2"],
 ["___ he will come or not doesn't matter.",["If","Whether","That","What"],1,"放在句首當主詞，而且有 or not，只能用 Whether。","g3"],
 ["It depends on ___ the weather is good.",["if","that","whether","what"],2,"介係詞 on 後面只能接 whether，不能接 if。","g3"],
 ["I can't decide ___ to take the bus or the MRT.",["whether","if","that","what"],0,"whether + to V，不能用 if。","g3"],
 ["下列哪一個空格「不能」填 if？",["I don't know ___ he likes it.","Ask her ___ she is free.","___ she likes it is not important.","I wonder ___ it will rain."],2,"名詞子句放句首當主詞只能用 whether；其他三句都是動詞的受詞，whether 和 if 都可以。","g3"],
 ["I'm not sure ___ or not the news is true.",["that","what","if","whether"],3,"緊接 or not 只能用 whether，if or not 是錯的。","g3"],
 ["The question is ___ we can finish on time.",["what","whether","which","if or not"],1,"be 動詞後面當補語用 whether；we can finish on time 是完整的句子，不能用 what。","g3"],
 ["If it ___ tomorrow, the game will be canceled.",["will rain","would rain","rains","rained"],2,"這裡的 if 是「如果」，條件句用現在式代替未來。","g3"],
 ["I don't know if it ___ tomorrow.",["rains","rained","has rained","will rain"],3,"這裡的 if 是「是否」（名詞子句當受詞），講未來就要用 will。","g3"],
 ["We are worried about ___ the bridge is safe.",["whether","if","that","what"],0,"介係詞 about 後面只能接 whether。","g3"],
 ["Never ___ such a beautiful sunset.",["I have seen","have I seen","I saw","did I saw"],1,"Never 放句首要倒裝，助動詞 have 提到主詞前。","g4"],
 ["Seldom ___ to school by bus.",["does he go","he goes","does he goes","goes he"],0,"一般動詞倒裝要加 does，動詞改回原形 go。","g4"],
 ["Not only ___ fast, but it is also cheap.",["the MRT is","does the MRT","is the MRT","the MRT does"],2,"Not only 放句首，be 動詞直接提到主詞前。","g4"],
 ["Only after the bell rang ___ the classroom.",["the students left","did the students leave","did the students left","the students did leave"],1,"Only after 子句放句首，主要子句倒裝：did + 主詞 + 原形動詞。","g4"],
 ["Only Tom ___ the answer.",["does know","know","did know","knows"],3,"Only 修飾主詞 Tom 時不倒裝，照一般句子寫：Only Tom knows。","g4"],
 ["Little ___ that the news was fake.",["I knew","I did know","did I know","knew I"],2,"Little 放句首倒裝：did I know。","g4"],
 ["Not until the typhoon left ___ out.",["did we go","we went","went we","we did go"],0,"Not until 子句放句首，主要子句倒裝：did we go。","g4"],
 ["Rarely ___ late for class.",["she is","is she","does she","she does"],1,"be 動詞直接提到主詞前：is she。","g4"],
 ["I have never been to Japan. = Never ___ to Japan.",["I have been","had been I","I had been","have I been"],3,"原句是現在完成式，倒裝時把 have 提到主詞前：have I been。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S1_1_3_CLASS = {
g1:[
 {say:"高一同學好！期末考第一課：被動語態升級版！國中學過被動是 be 加 p.p.，像 {The road is repaired.} 今天要讓它變身：{The road is being repaired.} 多了一個 being，意思就變成「正在被修」。", board:[["The road is repaired.",["is repaired"]],["The road is being repaired.",["is being repaired"]]]},
 {say:"公式很簡單：進行式是 be 加 V-ing，被動是 be 加 p.p.，兩個疊在一起，就是 be being p.p.。{A new subway line is being built.} 地鐵線正在被蓋。", board:[["進行式：be + V-ing",["V-ing"]],["被動：be + p.p.",["p.p."]],["進行式被動：be + being + p.p.",["being"]]]},
 {say:"口訣記起來！", chant:"正在被做，be being p.p.！"},
 {ask:{say:"考考你！", q:"Look! The classroom ___ now.", opts:["is cleaning","is being cleaned","has cleaned"], ans:1,
   ok:"答對了！教室不會自己打掃，是「正在被打掃」：is being cleaned。", bad:{0:"教室不會自己打掃喔！主詞是物，要用被動 is being cleaned。",2:"has cleaned 是主動的完成式，教室不會自己打掃。"},
   again:{q:"The news ___ live right now.", opts:["is broadcasting","is being broadcast"], ans:1, exp:"新聞是「正在被播出」，用 is being broadcast。"}}},
 {say:"第二種：完成式被動。完成式是 have 加 p.p.，再加上被動，就變成 have been p.p.。{Over 100 comments have been posted.} 已經有一百多則留言被貼出來了。", board:[["Over 100 comments have been posted.",["have been posted"]],["The station has been built.",["has been built"]]]},
 {say:"口訣！", chant:"已經被做，have been p.p.！"},
 {ask:{q:"Harmful substances ___ in the river.", opts:["have been found","have found","are finding"], ans:0,
   ok:"讚！物質是「被發現」的，用完成式被動 have been found。", bad:{1:"have found 是主動，物質不會自己去找東西喔。",2:"are finding 是主動進行式，物質是被找到的。"},
   again:{q:"The bridge ___ since 2020.", opts:["has been closed","has closed"], ans:0, exp:"橋是「被關閉」的，用 has been closed。"}}},
 {say:"再來是重點中的重點：感官動詞和使役動詞。主動句 {We saw him enter the room.} see 後面接原形動詞 enter。改成被動，原形動詞前面一定要補上 to：{He was seen to enter the room.}", board:[["We saw him enter the room.",["enter"]],["He was seen to enter the room.",["to enter"]]]},
 {say:"make 也一樣：{The teacher made us rewrite it.} 改成被動是 {We were made to rewrite it.} 但是 let 沒有被動，要改成 be allowed to。", board:[["We were made to rewrite it.",["to rewrite"]],["We were let to go.",[],true],["We were allowed to go.",["allowed to"]]]},
 {say:"超級口訣！", chant:"see、hear、make 變被動，原形前面補個 to！"},
 {ask:{q:"We were made ___ the composition again.", opts:["write","to write","writing"], ans:1,
   ok:"完美！make 的被動要接 to V：be made to write。", bad:{0:"主動才是 make us write；改成被動，write 前面要補 to。",2:"be made 後面要接 to V，不能接 V-ing。"},
   again:{q:"The submarine was seen ___ out of the water.", opts:["rise","to rise"], ans:1, exp:"see 的被動要補 to：be seen to rise。"}}},
 {say:"最後一個陷阱：不及物動詞沒有被動！happen、occur、disappear 這些字後面不能接受詞，所以也不能變被動。{The accident happened last night.} 不能寫成 was happened。", board:[["The accident happened last night.",["happened"]],["The accident was happened last night.",[],true]]},
 {ask:{say:"最後一題！", q:"The accident ___ at the crossroads last night.", opts:["was happened","happened","has been happened"], ans:1,
   ok:"太強了！happen 是不及物動詞，沒有被動。", bad:{0:"小心陷阱！happen 不能變被動。",2:"happen 沒有被動，也就沒有 has been happened。"},
   again:{q:"Students ___ to eat in the laboratory.", opts:["are not let","are not allowed"], ans:1, exp:"let 沒有被動，要用 be allowed to V。"}}},
 {say:"被動進階過關！複習口訣：正在被做 be being p.p.；已經被做 have been p.p.；see、hear、make 變被動，原形前面補個 to；happen 這類不及物動詞沒有被動！", end:true}
],
g2:[
 {say:"今天的主角是「名詞子句」：一整個句子可以當成一個大名詞，放在主詞的位置！看黑板：{What he said is true.} {That the earth is round is a fact.} {Whether he will come is unknown.}", board:[["What he said is true.",["What he said"]],["That the earth is round is a fact.",["That the earth is round"]],["Whether he will come is unknown.",["Whether he will come"]]]},
 {say:"兩個規則：第一，整個子句當主詞時視為單數，動詞用單數。第二，子句裡面用直述句語序，不要倒裝成問句。{What he said} 是對的，What did he say 放在主詞位置就錯了。", board:[["What he said is true.",["he said","is"]],["What did he say is true.",[],true]]},
 {say:"口訣！", chant:"子句當主詞，動詞用單數；直述語序不倒裝！"},
 {ask:{q:"What ___ was not true.", opts:["did the news report","the news reported","reported the news"], ans:1,
   ok:"對了！名詞子句用直述句語序：What the news reported。", bad:{0:"這是問句語序，名詞子句不能倒裝喔！",2:"reported the news 意思變成「報導新聞的東西」，而且主詞跑掉了，要寫 the news reported。"},
   again:{q:"How the rumor started ___ still unknown.", opts:["are","is"], ans:1, exp:"名詞子句當主詞視為單數，用 is。"}}},
 {say:"That 和 What 怎麼選？看後面的句子缺不缺東西！{That the earth is round} 後面是完整句子，用 That；{What he said} 的 said 少了受詞，用 What。還有，That 開頭當主詞時，that 不能省略。", board:[["That the earth is round is a fact.",["That"]],["What he said is true.",["What"]]]},
 {say:"如果主詞太長，可以用虛主詞 It 把子句搬到後面：{That he lied is clear.} 等於 {It is clear that he lied.}", board:[["That he lied is clear.",["That he lied"]],["It is clear that he lied.",["It","that he lied"]]]},
 {ask:{q:"___ smartphones have changed our lives is a fact.", opts:["That","What","It"], ans:0,
   ok:"讚！後面是完整的句子，用 That，而且不能省略。", bad:{1:"What 後面的句子要缺東西，這句 smartphones have changed our lives 是完整的。",2:"用 It 的話，子句要搬到後面：It is a fact that ...。"},
   again:{q:"___ we need now is more time.", opts:["That","What"], ans:1, exp:"we need 後面缺受詞，用 What。"}}},
 {say:"接下來是新聞最愛用的「據說」！{It is said that the singer is coming.} 也可以把人放到前面：{The singer is said to be coming.} 兩句意思一樣。", board:[["It is said that the singer is coming.",["It is said that"]],["The singer is said to be coming.",["is said to"]]]},
 {say:"口訣！", chant:"It is said that 接句子；人 is said to 接動詞！"},
 {say:"進階：如果事情比「據說」更早發生，就用 to have p.p.：{It is said that he was rich.} 等於 {He is said to have been rich.} 同類的句型還有 It is believed that、It is reported that。", board:[["It is said that he was rich.",["was"]],["He is said to have been rich.",["to have been"]]]},
 {ask:{q:"It is said that the bridge was built 100 years ago. = The bridge is said ___ 100 years ago.", opts:["to build","to be built","to have been built"], ans:2,
   ok:"太強了！比較早發生，而且橋是被蓋的：to have been built。", bad:{0:"橋不會自己蓋東西，要用被動。",1:"建橋是一百年前的事，比「據說」早，要用 to have been built。"},
   again:{q:"People say that Amy is a great singer. = Amy ___ a great singer.", opts:["is said to be","says to be"], ans:0, exp:"人 + is said to V：Amy is said to be ...。"}}},
 {ask:{say:"最後一題！", q:"He is said ___ a very kind person.", opts:["being","to be","that he is"], ans:1,
   ok:"完美！人 + is said to V。", bad:{0:"is said 後面要接 to V，不是 V-ing。",2:"He is said 後面不能再接 that 子句，要接 to be。"},
   again:{q:"___ that robots will take over many jobs.", opts:["It is said","It says"], ans:0, exp:"「據說」用被動：It is said that ...。"}}},
 {say:"名詞子句過關！口訣：子句當主詞，動詞用單數、直述語序不倒裝；後面完整用 That，缺東西用 What；It is said that 接句子，人 is said to 接動詞！", end:true}
],
g3:[
 {say:"今天來比一比兩個長得不像、意思卻一樣的字：whether 和 if，都可以表示「是否」。當動詞的受詞時，兩個都能用：{I don't know whether he will come.} {I don't know if he will come.}", board:[["I don't know whether he will come.",["whether"]],["I don't know if he will come.",["if"]]]},
 {say:"可是有四個地方，if 不能進場，只能用 whether！第一，句首當主詞；第二，介係詞後面；第三，緊接 or not；第四，後面接 to V。", board:[["Whether he will come is unknown.",["Whether"]],["It depends on whether it rains.",["on whether"]],["whether or not",["whether or not"]],["I can't decide whether to go.",["whether to"]]]},
 {say:"口訣念三遍！", chant:"句首、介後、or not、to V，通通只能用 whether！"},
 {ask:{q:"___ he will come is not certain.", opts:["If","Whether"], ans:1,
   ok:"答對！放在句首當主詞只能用 Whether。", bad:{0:"句首當主詞時 if 不能用，要用 Whether！"},
   again:{q:"___ this website is reliable is hard to tell.", opts:["Whether","If"], ans:0, exp:"名詞子句當主詞，只能用 Whether。"}}},
 {say:"介係詞後面也只能用 whether：{It depends on whether we have time.} {I'm worried about whether the bridge is safe.} on、about 後面都不能接 if。", board:[["It depends on whether we have time.",["on whether"]],["I'm worried about whether the bridge is safe.",["about whether"]]]},
 {ask:{q:"It depends on ___ we have enough time.", opts:["if","whether","that"], ans:1,
   ok:"讚！介係詞 on 後面只能接 whether。", bad:{0:"介係詞後面不能接 if 喔！",2:"這裡的意思是「是否」，而且介係詞後面不接 that 子句。"},
   again:{q:"The singer refused to comment on ___ the rumor was true.", opts:["whether","if"], ans:0, exp:"comment on 的 on 是介係詞，後面用 whether。"}}},
 {say:"or not 和 to V 也只認 whether：{whether or not he comes} 可以，if or not 不行；{whether to subscribe} 可以，if to subscribe 不行。", board:[["Whether to subscribe or not is up to you.",["Whether to"]],["if or not",[],true]]},
 {ask:{q:"I can't decide ___ to take the bus or the MRT.", opts:["whether","if","that"], ans:0,
   ok:"對！後面接 to V，只能用 whether。", bad:{1:"if 後面不能直接接 to V！",2:"that 不能表示「是否」，也不能接 to V。"},
   again:{q:"I'm not sure ___ or not the news is true.", opts:["if","whether"], ans:1, exp:"緊接 or not 只能用 whether。"}}},
 {say:"學測超愛的陷阱來了！if 也可能是「如果」。「如果」的 if 子句，用現在式代替未來；但「是否」的 if 子句，講未來就要用 will！比比看：{If it rains tomorrow, we will stay home.} {I don't know if it will rain tomorrow.}", board:[["If it rains tomorrow, we will stay home.",["rains"]],["I don't know if it will rain tomorrow.",["will rain"]]]},
 {say:"分辨口訣！", chant:"「如果」不用 will，「是否」要用 will！"},
 {ask:{say:"最後一題！", q:"I don't know if it ___ tomorrow.", opts:["rains","will rain","rained"], ans:1,
   ok:"太厲害了！這裡的 if 是「是否」，講明天的事要用 will rain。", bad:{0:"這個 if 是「是否」（當 know 的受詞），不是「如果」，所以未來要用 will。",2:"tomorrow 是未來，不能用過去式。"},
   again:{q:"If it ___ tomorrow, the game will be canceled.", opts:["rains","will rain"], ans:0, exp:"這裡的 if 是「如果」，用現在式代替未來。"}}},
 {say:"whether 和 if 過關！口訣：句首、介後、or not、to V，通通只能用 whether；「如果」不用 will，「是否」要用 will！", end:true}
],
g4:[
 {say:"最後一堂文法課，教你一個讓作文瞬間變高級的句型：倒裝句！把否定的副詞 Never、Seldom、Rarely、Little 放到句首，後面就要變成問句的語序。{I have never seen such a big crowd.} 變成 {Never have I seen such a big crowd.}", board:[["I have never seen such a big crowd.",["never"]],["Never have I seen such a big crowd.",["Never","have I"]]]},
 {say:"三種狀況：有助動詞或完成式，直接把助動詞搬到主詞前；有 be 動詞，直接把 be 動詞搬到前面；只有一般動詞，就請 do、does、did 出來幫忙，原本的動詞改回原形。", board:[["Never have I seen ...",["have I"]],["Rarely is she late.",["is she"]],["Seldom does he go to school by bus.",["does he go"]]]},
 {say:"口訣！", chant:"否定放句首，後面像問句！"},
 {ask:{q:"Seldom ___ to school by bus.", opts:["he goes","does he go","does he goes"], ans:1,
   ok:"答對！一般動詞要加 does，go 改回原形。", bad:{0:"Seldom 放句首要倒裝，不能維持 he goes。",2:"有了 does，動詞要改回原形 go，不能再加 es。"},
   again:{q:"Never ___ such a beautiful sunset.", opts:["I have seen","have I seen"], ans:1, exp:"Never 放句首，have 提到主詞前。"}}},
 {say:"Not only 放句首也要倒裝，但只倒裝前半句！{Not only is the MRT fast, but it is also cheap.} but also 後面的句子照正常語序寫。", board:[["Not only is the MRT fast, but it is also cheap.",["is the MRT","it is"]]]},
 {ask:{q:"Not only ___ fast, but it is also cheap.", opts:["the MRT is","is the MRT","does the MRT"], ans:1,
   ok:"讚！be 動詞直接提到主詞前：is the MRT。", bad:{0:"Not only 放句首要倒裝喔！",2:"句子裡有 be 動詞，直接把 is 提前，不用 does。"},
   again:{q:"Not only ___ the movie influence young people, but it also changed fashion.", opts:["did","was"], ans:0, exp:"一般動詞過去式倒裝要用 did，influence 用原形。"}}},
 {say:"再來是 Only 加時間、地點或方法放句首。注意：倒裝的是後面的「主要子句」！{Only after the bell rang did the students leave.} the bell rang 是 Only after 的子句，不倒裝。", board:[["Only after the bell rang did the students leave.",["did the students leave"]],["Only then did I learn the truth.",["did I learn"]]]},
 {say:"口訣！", chant:"Only 帶時間，倒裝在後面！"},
 {ask:{q:"Only after the bell rang ___ the classroom.", opts:["did the students leave","the students left","did the students left"], ans:0,
   ok:"完美！主要子句倒裝：did the students leave。", bad:{1:"Only after 放句首，主要子句要倒裝。",2:"有了 did，動詞要改回原形 leave。"},
   again:{q:"Only by checking the source ___ if a story is true.", opts:["we can know","can we know"], ans:1, exp:"Only + by V-ing 放句首，主要子句倒裝：can we know。"}}},
 {say:"小心陷阱：Only 如果修飾的是主詞，就不用倒裝！{Only Tom knows the answer.} 這裡 Only 是在說「只有 Tom」，照一般句子寫就好。", board:[["Only Tom knows the answer.",["Only Tom knows"]],["Only Tom does know the answer.",[],true]]},
 {ask:{q:"Only Tom ___ the answer.", opts:["knows","does know","know"], ans:0,
   ok:"太棒了！Only 修飾主詞時不倒裝，Tom 是第三人稱單數，用 knows。", bad:{1:"Only 修飾主詞時不倒裝，也不用加 does。",2:"Tom 是第三人稱單數，動詞要加 s：knows。"},
   again:{q:"Little ___ that the news was fake.", opts:["I knew","did I know"], ans:1, exp:"Little 放句首要倒裝：did I know。"}}},
 {say:"最後補一個：{Not until} 加時間放句首，後面也要倒裝。{Not until the typhoon left did we go out.} 意思是「直到颱風走了，我們才出門」。期末考的文法全部上完了，去挑戰魔王吧！", board:[["Not until the typhoon left did we go out.",["Not until","did we go"]]], end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S1_1_3_ROOTS = [
  {id:"r1", title:"位置字首：trans- / inter- / sub- / super-"},
  {id:"r2", title:"字根 fer：帶、搬"},
  {id:"r3", title:"字根 pos / pon：放"},
  {id:"r4", title:"字根 struct：建造"}
];
const S1_1_3_ROOT_CLASS = {
r1:[
 {say:"高一同學好！今天認識四個表示「位置」的字首，像地圖一樣把單字定位。第一個：<<trans>>，意思是「穿越、到另一邊」。", board:[["trans = 穿越",["trans"],false,true]]},
 {say:"{transition} 從一邊走到另一邊，就是轉變、過渡；{transparent} 光線穿得過去，就是透明的；{transportation} 把人和貨物搬過去，就是交通運輸。", board:[["trans + it + ion = transition",["trans"],false,true],["trans + par + ent = transparent",["trans"],false,true],["trans + port + ation = transportation",["trans"],false,true]]},
 {say:"四個字首一次記！", chant:"trans 穿過去，inter 在中間，sub 在下面，super 在上面！"},
 {ask:{q:"trans（穿越）＋ par（出現）＋ ent ＝ transparent，意思是？", opts:["透明的","父母的","交通的"], ans:0,
   ok:"對！光線穿得過去，後面的東西都看得見，就是透明的。", bad:{1:"不要被 parent 騙了！這裡的 par 是「出現」。",2:"交通運輸是 transportation，transparent 是透明的。"},
   again:{q:"trans（穿越）＋ it（走）＋ ion ＝ transition，意思是？", opts:["轉變；過渡","翻譯","交通"], ans:0, exp:"從一邊走到另一邊，就是轉變、過渡。"}}},
 {say:"第二個：<<inter>>，意思是「在……之間」。{interpret} 在兩個人之間傳達意思，就是口譯、解釋；{interfere} 插到中間來，就是干擾。你早就認識的 {international} 國家之間，也是同一家人！", board:[["inter + pret = interpret",["inter"],false,true],["inter + fere = interfere",["inter"],false,true]]},
 {ask:{q:"字首 inter 的意思是？", opts:["在下面","在……之間","超過"], ans:1,
   ok:"讚！inter 是「在……之間」。", bad:{0:"「在下面」是 sub 喔。",2:"「超過、在上面」是 super 喔。"},
   again:{q:"在兩種語言「之間」幫人傳話 → 哪個字？", opts:["interpret","subtract"], ans:0, exp:"inter 在中間，interpret 是口譯、解釋。"}}},
 {say:"第三個：<<sub>>，意思是「在下面」。{subway} 地面下的路，就是地鐵；{submarine} 在海面下，就是潛水艇；{subtitle} 在畫面下面的字，就是字幕；{subtract} 把數字往下拉掉，就是減去。", board:[["sub + way = subway",["sub"],false,true],["sub + marine = submarine",["sub"],false,true],["sub + title = subtitle",["sub"],false,true],["sub + tract = subtract",["sub"],false,true]]},
 {say:"{suburb} 也是 sub 家族：<<urb>> 是城市，在城市旁邊、下方的地方，就是郊區。順便記住 {urban}，城市的。", board:[["sub + urb = suburb",["sub"],false,true],["urb + an = urban",["urb"],false,true]]},
 {ask:{q:"sub ＋ marine（海的）＝ submarine，意思是？", opts:["海鮮","海軍","潛水艇"], ans:2,
   ok:"完美！在海面下航行的船，就是潛水艇。", bad:{0:"海鮮是 seafood 喔，sub 是「在下面」。",1:"海軍是 navy，sub 是「在下面」。"},
   again:{q:"在畫面下面的文字 → ？", opts:["subtitle","supervise"], ans:0, exp:"sub 在下面 + title 標題 = subtitle 字幕。"}}},
 {say:"第四個：<<super>>，意思是「在上面、超越」。{superior} 位置比較上面，就是較優秀的；{supervise} 從上面看著，就是監督。裡面的 <<vise>> 就是「看」，和 vision 的 vis 是親戚！", board:[["super + ior = superior",["super"],false,true],["super + vise = supervise",["super"],false,true]]},
 {ask:{say:"最後一題！", q:"從上面看著別人工作 → 哪個字？", opts:["subtract","supervise","interpret"], ans:1,
   ok:"太棒了！super 在上面 + vise 看 = supervise 監督。", bad:{0:"subtract 是往下拉掉，就是減去。",2:"interpret 是在中間傳話，就是口譯。"},
   again:{q:"This phone is ___ to that one.（比較好）", opts:["superior","subway"], ans:0, exp:"superior to 表示「比……好」，記得用 to 不用 than。"}}},
 {say:"位置字首過關！口訣：trans 穿過去，inter 在中間，sub 在下面，super 在上面。看到長單字，先找字首定位置！", end:true}
],
r2:[
 {say:"今天學一個超好用的字根：<<fer>>，意思是「帶、搬」。只要加上不同的字首，就能把東西帶到不同的地方！", board:[["fer = 帶、搬",["fer"],false,true]]},
 {say:"{prefer}：pre 是「在前面」，把喜歡的東西帶到前面，就是比較喜歡。它的名詞是 {preference}，偏好。還有 {fertile}：fert 也是 fer 家族，能承載、生出很多作物的土地，就是肥沃的。", board:[["pre + fer = prefer",["fer"],false,true],["fert + ile = fertile",["fert"],false,true],["pre + fer + ence = preference",["fer"],false,true]]},
 {say:"口訣！", chant:"fer、fer、fer，帶著走！"},
 {ask:{q:"re（回）＋ fer（帶）＝ refer，意思是？", opts:["拒絕","喜歡","提到；參考"], ans:2,
   ok:"對！把話題帶回某個東西上，就是提到、指的是。", bad:{0:"拒絕是 refuse 喔，不是 refer。",1:"「比較喜歡」是 prefer，pre 才是「在前面」。"},
   again:{q:"refer 的名詞（參考資料）是？", opts:["referment","reference"], ans:1, exp:"refer 加上 ence，變成 reference。"}}},
 {say:"更多 fer 家族：{transfer} 帶到另一邊，就是轉乘、轉學；{offer} 帶到對方面前，就是提供。{differ} 的 dif 是「分開」，往不同方向帶開，就是不同，所以 different、difference 也是 fer 家族！", board:[["trans + fer = transfer",["fer"],false,true],["dif + fer = differ",["fer"],false,true]]},
 {say:"{suffer} 的 <<suf>> 其實是 sub 變身！在下面扛著重擔，就是受苦。sub 遇到 f 開頭，b 就變成 f，念起來比較順。", board:[["sub → suf",["suf"],false,true],["suf + fer = suffer",["fer"],false,true]]},
 {ask:{q:"suffer 的 suf 其實是哪個字首變身？", opts:["super","sub","sun"], ans:1,
   ok:"讚！sub（在下面）遇到 f 變成 suf：在下面扛著，就是受苦。", bad:{0:"super 是「在上面」，受苦是在下面扛著喔。",2:"sun 是太陽，不是字首喔。"},
   again:{q:"dif（分開）＋ fer（帶）＝ differ，意思是？", opts:["不同","困難"], ans:0, exp:"往不同方向帶開，就是不同。困難是 difficult。"}}},
 {say:"拼字陷阱：prefer、refer、transfer 的重音在 fer，加 ed 或 ing 要多寫一個 r：preferred、referring。differ、suffer 重音在前面，就不用：differed、suffered。", board:[["prefer → preferred",["rr"]],["refer → referring",["rr"]],["suffer → suffered",["r"]]]},
 {say:"拼字口訣！", chant:"重音在 fer，r 要寫兩次！"},
 {ask:{q:"prefer 的過去式是？", opts:["preferred","prefered","preferd"], ans:0,
   ok:"完美！重音在 fer，r 要寫兩次：preferred。", bad:{1:"prefer 的重音在後面，要多寫一個 r。",2:"過去式要加 ed，而且 r 要寫兩次。"},
   again:{q:"suffer 的過去式是？", opts:["suffered","sufferred"], ans:0, exp:"suffer 的重音在前面，直接加 ed：suffered。"}}},
 {say:"最後提醒一個長得很像的冒牌貨：{interfere} 的 <<fere>> 是「打」，不是「帶」喔！插到中間打一下，就是干擾。", board:[["inter + fere = interfere",["fere"],false,true]]},
 {ask:{say:"最後一題！", q:"I ___ tea to coffee.（我比較喜歡茶）", opts:["prefer","differ","suffer"], ans:0,
   ok:"太棒了！prefer A to B，比較喜歡 A。", bad:{1:"differ 是「不同」，意思不對。",2:"suffer 是「受苦」，意思不對。"},
   again:{q:"Many cities ___ from heavy traffic.（飽受塞車之苦）", opts:["suffer","prefer"], ans:0, exp:"suffer from 表示「受……之苦」。"}}},
 {say:"fer 過關！口訣：fer 帶著走；pre 帶到前面是比較喜歡，re 帶回來是提到，dif 帶開是不同，suf 在下面扛是受苦；重音在 fer，r 要寫兩次！", end:true}
],
r3:[
 {say:"今天的字根是一組三胞胎：<<pos>>、<<pon>>、<<pose>>，意思都是「放」。{position} 被放置的地方，就是位置。", board:[["pos = pon = pose = 放",["pos","pon","pose"],false,true],["pos + ition = position",["pos"],false,true]]},
 {say:"{deposit}：de 是「向下」，把錢放下來寄放，就是存款；租腳踏車先放下的押金，也叫 deposit。", board:[["de + posit = deposit",["posit"],false,true]]},
 {say:"口訣！", chant:"pos、pon、pose，通通都是放！"},
 {ask:{q:"de（向下）＋ posit（放）＝ deposit，意思是？", opts:["存款；存放","刪除","位置"], ans:0,
   ok:"對！把錢放下來寄放，就是存款。", bad:{1:"刪除是 delete 喔。",2:"位置是 position，deposit 是放下來存著。"},
   again:{q:"pos（放）＋ ition ＝ position，意思是？", opts:["位置","可能的"], ans:0, exp:"被放置的地方，就是位置。"}}},
 {say:"字首換一換，放的地方就不一樣：{expose} ex 向外，放到外面，就是暴露、揭露；{propose} pro 向前，把想法放到大家面前，就是提議；{oppose} op 相對，放在對立面，就是反對。", board:[["ex + pose = expose",["pose"],false,true],["pro + pose = propose",["pose"],false,true],["op + pose = oppose",["pose"],false,true]]},
 {say:"四個方向的口訣！", chant:"ex 放外面，pro 放前面，op 放對面，com 放一起！"},
 {ask:{q:"pro（向前）＋ pose（放）＝？", opts:["反對","提議","暴露"], ans:1,
   ok:"讚！把想法放到大家面前，就是提議。", bad:{0:"反對是 oppose，op 才是「相對」。",2:"暴露是 expose，ex 才是「向外」。"},
   again:{q:"op（相對）＋ pose（放）＝？", opts:["反對","提議"], ans:0, exp:"放在對立面，就是反對。"}}},
 {say:"<<pon>> 也是放：{opponent} 放在你對面的人，就是對手；{component} com 是「一起」，放在一起組成整體的東西，就是零件、成分。{composition} 把字句放在一起，就是作文。你學過的 postpone 延後，也是 pone！", board:[["op + pon + ent = opponent",["pon"],false,true],["com + pon + ent = component",["pon"],false,true],["com + pos + ition = composition",["pos"],false,true]]},
 {ask:{q:"放在你對面、跟你比賽的人 → ？", opts:["component","composition","opponent"], ans:2,
   ok:"完美！op 相對 + pon 放 + ent 人 = opponent 對手。", bad:{0:"component 是放在一起的零件喔。",1:"composition 是作文、組成。"},
   again:{q:"電腦裡放在一起組成整台機器的「零件」是？", opts:["component","opponent"], ans:0, exp:"com 一起 + pon 放，就是零件。"}}},
 {say:"詞性變化也要會：propose 的名詞是 proposal；oppose 的形容詞是 opposite（相反的）；expose 的名詞是 exposure；compose 的名詞是 composition。", board:[["propose → proposal",["al"]],["oppose → opposite",["ite"]],["compose → composition",["ition"]]]},
 {ask:{say:"最後一題！", q:"Many residents ___ the new highway, so it was never built.", opts:["opposed","exposed","deposited"], ans:0,
   ok:"太棒了！居民反對，所以高速公路沒蓋成：opposed。", bad:{1:"exposed 是暴露、揭露，意思不通。",2:"deposited 是存放，意思不通。"},
   again:{q:"Children are ___ to fake news online every day.", opts:["exposed","proposed"], ans:0, exp:"be exposed to 表示「接觸到、暴露在……之下」。"}}},
 {say:"pos、pon 過關！口訣：pos、pon、pose 都是放；ex 放外面，pro 放前面，op 放對面，com 放一起！", end:true}
],
r4:[
 {say:"最後一堂字根課！字根 <<struct>>，意思是「建造」。{structure}：建造出來的樣子，就是結構。", board:[["struct = 建造",["struct"],false,true],["struct + ure = structure",["struct"],false,true]]},
 {say:"{construct}：con 是「一起」，把材料放在一起蓋起來，就是建造。高二會學到的 construction，就是它的名詞：建造、工程。", board:[["con + struct = construct",["struct"],false,true]]},
 {say:"口訣！", chant:"struct 蓋蓋蓋：con 蓋起來，de 拆下去，in 蓋進腦袋！"},
 {ask:{q:"con（一起）＋ struct（建造）＝ construct，意思是？", opts:["建造","破壞","指導"], ans:0,
   ok:"對！把材料放在一起蓋起來，就是建造。", bad:{1:"破壞是 de 加 struct，de 是「相反」。",2:"指導是 instruct，in 是「在裡面」。"},
   again:{q:"struct（建造）＋ ure ＝ structure，意思是？", opts:["結構","學生"], ans:0, exp:"建造出來的樣子，就是結構。"}}},
 {say:"{instruct}：in 是「在裡面」，在你的腦袋裡建造知識，就是教導、指示。名詞 {instruction} 是說明，加上 or 變成 instructor，就是教練、講師。", board:[["in + struct = instruct",["struct"],false,true],["in + struct + ion = instruction",["struct"],false,true]]},
 {say:"{destruction}：de 是「相反」，建造的相反，就是破壞。它的動詞 destroy 長得不太一樣，字根變身成 stroy，但意思還是同一家。", board:[["de + struct + ion = destruction",["struct"],false,true],["destroy → destruction",["stroy","struct"]]]},
 {ask:{q:"de ＋ struct ＋ ion 的意思是？", opts:["建造","結構","破壞"], ans:2,
   ok:"讚！de 是相反，建造的相反就是破壞。", bad:{0:"建造是 construct，de 是「相反」喔。",1:"結構是 structure，前面沒有 de。"},
   again:{q:"in（在裡面）＋ struct ＝ instruct，意思是？", opts:["指示；教導","樂器"], ans:0, exp:"在腦袋裡建造知識，就是教導。"}}},
 {say:"{instrument} 也是 struct 家族，只是縮短成 <<stru>>：建造出來拿來用的工具，就是儀器、樂器。", board:[["in + stru + ment = instrument",["stru"],false,true]]},
 {say:"詞性變化一次看：construct 是動詞，construction 是名詞，constructive 是形容詞「有建設性的」；instruct、instruction、instructor；destroy、destruction、destructive。", board:[["construct → construction → constructive",["ion","ive"]],["instruct → instruction → instructor",["ion","or"]]]},
 {say:"詞性口訣！", chant:"加 ion 變名詞，加 ive 變形容詞，加 or 變成人！"},
 {ask:{q:"Please read the ___ before you use the machine.", opts:["instruct","instructions","instructive"], ans:1,
   ok:"太棒了！the 後面要接名詞：instructions 使用說明。", bad:{0:"instruct 是動詞，the 後面要接名詞。",2:"instructive 是形容詞「有教育意義的」，這裡要名詞。"},
   again:{q:"The bridge was ___ in 2010.（建造）", opts:["constructed","destroyed"], ans:0, exp:"建造用 construct，被動 was constructed。"}}},
 {ask:{say:"總複習！", q:"下面哪一個字根的意思是「放」？", opts:["fer","pos","struct"], ans:1,
   ok:"完美！pos 是放，fer 是帶，struct 是建造。", bad:{0:"fer 是「帶、搬」喔。",2:"struct 是「建造」喔。"},
   again:{q:"哪一個字首的意思是「在下面」？", opts:["super","sub"], ans:1, exp:"sub 在下面，super 在上面。"}}},
 {say:"struct 過關！四堂字根字首課全部上完了：trans、inter、sub、super 定位置；fer 帶、pos 放、struct 建造。快去玩「字根拼圖」，把積木拼成單字吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創） ---------- */
Object.assign(ILLUS2, {
  s113_subway: () => svgWrap("#e0e7ff", `<rect x="0" y="0" width="160" height="40" fill="#bae6fd"/><rect x="0" y="36" width="160" height="6" fill="#86efac"/><rect x="0" y="42" width="160" height="78" fill="#a8a29e"/><path d="M8 116 V80 Q80 52 152 80 V116 Z" fill="#44403c"/><rect x="8" y="112" width="144" height="4" fill="#78716c"/>` + O.tree(26, 20, .4) + O.tree(134, 22, .35) + O.cloud(80, 16, .5) + `<rect x="22" y="80" width="116" height="30" rx="10" fill="#e5e7eb"/><rect x="22" y="98" width="116" height="4" fill="#ef4444"/>` + [32, 56, 80, 104].map(x => `<rect x="${x}" y="85" width="16" height="9" rx="2" fill="#93c5fd"/>`).join("") + `<circle cx="134" cy="92" r="2.5" fill="#fde68a"/>` + txt(80, 66, "SUB · WAY", 10, "#f5f5f4", 800)),
  s113_submarine: () => svgWrap("#bfdbfe", `<path d="M0 26 Q20 20 40 26 T80 26 T120 26 T160 26 V120 H0 Z" fill="#3b82f6"/><path d="M0 110 Q40 100 80 110 T160 108 V120 H0 Z" fill="#fcd34d"/>` + grp(80, 70, 1, `<ellipse cx="0" cy="0" rx="44" ry="17" fill="#fbbf24"/><rect x="-10" y="-30" width="22" height="16" rx="5" fill="#f59e0b"/><path d="M4 -30 V-44 H12" stroke="#78716c" stroke-width="3" fill="none"/><circle cx="-22" cy="0" r="5" fill="#bae6fd" stroke="#b45309" stroke-width="2"/><circle cx="-4" cy="0" r="5" fill="#bae6fd" stroke="#b45309" stroke-width="2"/><circle cx="14" cy="0" r="5" fill="#bae6fd" stroke="#b45309" stroke-width="2"/><path d="M42 -2 L54 -10 L54 8 Z" fill="#f59e0b"/>`) + `<circle cx="30" cy="50" r="3" fill="#dbeafe"/><circle cx="24" cy="40" r="2" fill="#dbeafe"/><circle cx="32" cy="34" r="1.5" fill="#dbeafe"/>` + grp(130, 100, .6, `<ellipse rx="10" ry="6" fill="#f472b6"/><path d="M8 0 L16 -6 L16 6 Z" fill="#f472b6"/><circle cx="-5" cy="-1" r="1.4" fill="${INK}"/>`)),
  s113_satellite: () => svgWrap("#0f172a", `<circle cx="28" cy="104" r="44" fill="#3b82f6"/><path d="M4 92 Q16 80 30 90 Q26 104 12 102 Z M36 72 Q50 66 56 78 Q46 86 36 72 Z" fill="#4ade80"/>` + star(30, 20, 3, "#fde68a") + star(140, 100, 2.5, "#fde68a") + star(70, 16, 2, "#fff") + star(150, 24, 2, "#fff") + grp(104, 48, 1, `<rect x="-10" y="-10" width="20" height="20" rx="3" fill="#e5e7eb" stroke="#9ca3af"/><rect x="-46" y="-7" width="30" height="14" fill="#2563eb" stroke="#93c5fd"/><rect x="16" y="-7" width="30" height="14" fill="#2563eb" stroke="#93c5fd"/><path d="M-36 -7 V7 M-26 -7 V7 M26 -7 V7 M36 -7 V7" stroke="#93c5fd" stroke-width="1"/><path d="M-16 0 H-10 M10 0 H16" stroke="#9ca3af" stroke-width="2"/><path d="M0 10 V18" stroke="#9ca3af" stroke-width="2"/><circle cx="0" cy="20" r="3" fill="#f87171"/>`, -15) + `<path d="M92 72 Q76 82 62 86 M98 76 Q84 88 70 94" stroke="#fde68a" stroke-width="2" fill="none" stroke-dasharray="3 3"/>`),
  s113_broadcast: () => svgWrap("#fef3c7", ground("#fde68a") + `<path d="M40 104 L56 30 L72 104 M46 76 H66 M50 56 H62" stroke="#b91c1c" stroke-width="3.5" fill="none" stroke-linejoin="round"/><circle cx="56" cy="28" r="5" fill="#ef4444"/><path d="M68 18 Q78 28 68 38 M76 12 Q90 28 76 44 M44 18 Q34 28 44 38 M36 12 Q22 28 36 44" stroke="#f97316" stroke-width="2.5" fill="none" stroke-linecap="round"/>` + grp(122, 76, 1, `<rect x="-26" y="-20" width="52" height="36" rx="5" fill="#374151"/><rect x="-21" y="-15" width="42" height="26" rx="2" fill="#93c5fd"/><path d="M-8 16 L-12 26 M8 16 L12 26" stroke="#374151" stroke-width="3"/>`) + P({x:122, y:86, s:.32, hair:"long", hc:"#3b2a20", oc:"#ef4444", mood:"open"}) + spark(140, 40, .7, "#f97316")),
  s113_pedestrian: () => svgWrap("#e0f2fe", `<rect x="0" y="70" width="160" height="50" fill="#6b7280"/>` + [8, 30, 52, 74, 96, 118, 140].map(x => `<rect x="${x}" y="78" width="14" height="36" fill="#f9fafb"/>`).join("") + `<rect x="0" y="60" width="160" height="10" fill="#d6d3d1"/>` + grp(140, 36, 1, `<rect x="-2" y="0" width="4" height="26" fill="#374151"/><rect x="-9" y="-26" width="18" height="28" rx="4" fill="#1f2937"/><circle cx="0" cy="-18" r="5" fill="#4b5563"/><circle cx="0" cy="-6" r="5" fill="#22c55e"/>`) + P({x:72, y:108, s:.6, hair:"short", hc:"#2b2b2b", oc:"#f97316", pose:"wave", mood:"open"}) + P({x:98, y:108, s:.55, hair:"twin", hc:"#6b3f2a", oc:"#8b5cf6", mood:"smile"}) + O.cloud(40, 24, .6)),
  s113_rural: () => svgWrap("#e0f2fe", `<path d="M0 70 Q60 56 160 68 V120 H0 Z" fill="#86efac"/><path d="M0 92 Q80 80 160 92 V120 H0 Z" fill="#4ade80"/>` + [0, 1, 2, 3, 4].map(i => `<path d="M${10 + i * 14} 100 l4 -8 l4 8" stroke="#16a34a" stroke-width="2" fill="none"/>`).join("") + `<rect x="96" y="58" width="36" height="26" fill="#fde68a"/><path d="M92 60 L114 42 L136 60 Z" fill="#dc2626"/><rect x="109" y="68" width="10" height="16" fill="#92400e"/><rect x="100" y="64" width="7" height="7" fill="#93c5fd"/>` + O.tree(40, 64, .55) + O.tree(148, 74, .4) + O.sun(30, 24, .6) + O.cloud(100, 22, .55)),
  s113_tunnel: () => svgWrap("#dbeafe", `<path d="M0 104 L30 40 Q50 18 80 22 Q114 16 132 44 L160 96 V104 Z" fill="#65a30d"/><path d="M20 82 L44 50 Q60 40 70 54 M100 38 Q120 34 134 52" stroke="#4d7c0f" stroke-width="3" fill="none"/><path d="M56 104 V82 Q80 56 104 82 V104 Z" fill="#1f2937"/><path d="M56 82 Q80 56 104 82" stroke="#d6d3d1" stroke-width="5" fill="none"/><rect x="0" y="104" width="160" height="16" fill="#6b7280"/><path d="M8 112 H28 M44 112 H64 M96 112 H116 M132 112 H152" stroke="#fde047" stroke-width="2.5"/>` + O.bus(124, 102, .4) + O.cloud(30, 18, .5) + `<circle cx="72" cy="94" r="2.5" fill="#fde68a"/><circle cx="88" cy="94" r="2.5" fill="#fde68a"/>`)
});

registerUnit("s1-1-3", {
  name:"高一 上學期 期末考",
  sub:"被動語態進階、名詞子句當主詞與 It is said that、whether 和 if、否定副詞倒裝句",
  words:S1_1_3_WORDS, grammar:S1_1_3_GRAMMAR, quiz:S1_1_3_QUIZ,
  classes:Object.assign({}, S1_1_3_CLASS, S1_1_3_ROOT_CLASS), phonics:S1_1_3_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會 trans-、inter-、sub-、super- 和 fer、pos、struct，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
