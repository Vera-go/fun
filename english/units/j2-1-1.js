/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   內容資料：國二上學期 第一次段考（通用範圍）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 文法說明] x3], null, null, 插圖]
   插圖："表情符號|標籤" 為概念卡（抽象的字用），其他的字畫在下面的 ILLUS
   ========================================================= */
const J2_1_1_WORDS = [
/* ---------- 突發事件與當時在做什麼 ---------- */
["earthquake","n.","地震",[
 ["We were having dinner when the earthquake happened.","地震發生的時候，我們正在吃晚餐。","were having 是過去進行式，表示當時正在做的事；when 後面接簡單過去式 happened，表示突然發生的事。"],
 ["The earthquake was strong, so we hid under the table.","地震很強烈，所以我們躲到桌子底下。","so 表示「所以」，前面是原因、後面是結果，前面加逗號。hide 的過去式是不規則的 hid。"],
 ["Were you sleeping during the earthquake last night?","昨晚地震的時候你在睡覺嗎？","過去進行式的疑問句把 Were 移到句首：Were + 主詞 + V-ing？during 是「在……期間」，後面接名詞。"]]],
["blackout","n.","停電",[
 ["There was a blackout while I was taking a shower.","我正在洗澡的時候停電了。","while 後面接過去進行式 was taking，表示持續中的動作；停電是突然發生的事，用 There was。"],
 ["During the blackout, we weren't watching TV. We were playing cards.","停電的時候，我們沒在看電視，我們在玩牌。","過去進行式的否定是 was / were + not + V-ing，were not 縮寫成 weren't。"],
 ["The blackout lasted two hours, but nobody was scared.","停電持續了兩小時，但沒有人害怕。","but 表示「但是」，連接意思相反的兩句。nobody 當主詞看成單數，所以用 was。"]]],
["accident","n.","意外；事故",[
 ["A car accident happened in front of the school yesterday.","昨天學校前面發生了一場車禍。","happen 不能用被動，不說 was happened。car accident 是「車禍」。"],
 ["What were you doing when the accident happened?","意外發生的時候你正在做什麼？","問「當時正在做什麼」用 What were you doing？這裡的 doing 是一般動詞 do 加 ing。"],
 ["I was waiting for the bus, and I saw the accident.","我在等公車，然後看到了那場意外。","and 連接兩個句子；前面是過去進行式（背景），後面是簡單過去式（發生的事）。"]],null,null,"🚑|意外"],
["noise","n.","噪音；聲響",[
 ["I heard a strange noise while I was doing my homework.","我在寫功課的時候聽到一個奇怪的聲音。","表示「一個聲響」時 noise 可數，所以說 a strange noise。heard 是 hear 的過去式。"],
 ["Don't make any noise. The baby is sleeping.","不要發出任何聲音，寶寶在睡覺。","make noise 是「發出聲音、吵鬧」。否定祈使句用 Don't + 原形動詞。"],
 ["The noise sounded terrible, so I closed the window.","那個噪音聽起來很可怕，所以我把窗戶關上。","sound 是連綴動詞，後面接形容詞 terrible，不接副詞 terribly。"]],null,null,"🔊|噪音"],
["fire","n.","火；火災",[
 ["The firefighters were putting out the fire when we got there.","我們到的時候，消防員正在滅火。","put out a fire 是「滅火」。put 是短母音加一個子音，加 ing 要雙寫 t：putting。"],
 ["Be careful! Don't play with fire.","小心！不要玩火。","fire 當「火」的時候不可數，前面不加 a。Be careful! 是祈使句，用原形 Be 開頭。"],
 ["Everyone ran out of the building when the fire started.","火災發生時，每個人都跑出大樓。","everyone 當主詞看成單數。run 的過去式是 ran；when 後面接簡單過去式 started。"]]],
["storm","n.","暴風雨",[
 ["It was raining hard when the storm came.","暴風雨來的時候，雨下得很大。","It was raining 是過去進行式，表示當時正在下雨。hard 在這裡是副詞「猛烈地」。"],
 ["The storm was terrible, but our house was safe.","暴風雨很可怕，但我們的房子很安全。","but 連接意思相反的兩句，前面加逗號。"],
 ["We stayed home during the storm and played board games.","暴風雨的時候我們待在家，玩桌遊。","and 連接兩個動作 stayed 和 played，時態要一致，都用過去式。"]]],
["thunder","n.","雷聲",[
 ["The dog was hiding under the bed because of the thunder.","因為打雷，狗狗正躲在床底下。","because of + 名詞；because + 句子。hide 去 e 加 ing：hiding。"],
 ["I heard thunder while I was walking home.","我走路回家的時候聽到打雷。","thunder 不可數，前面不加 a。while 後面接過去進行式 was walking。"],
 ["The thunder sounded very loud, so the baby cried.","雷聲聽起來很大聲，所以寶寶哭了。","sound 是連綴動詞，後面接形容詞 loud，不能用副詞 loudly。so 帶出結果。"]],null,null,"⛈️|雷聲"],
["lightning","n.","閃電",[
 ["Lightning lit up the sky while we were watching the rain.","我們在看雨的時候，閃電照亮了天空。","lightning 不可數。light up 是「照亮」，過去式是 lit up。"],
 ["Don't stand under a tree when there is lightning.","有閃電的時候不要站在樹下。","when 也可以用在現在式，表示「當……的時候」。"],
 ["First I saw the lightning, and then I heard the thunder.","我先看到閃電，然後才聽到雷聲。","and then 表示「然後」，照順序說兩件事。拼字注意：lightning 中間沒有 e。"]]],
["flashlight","n.","手電筒",[
 ["When the lights went out, Dad was looking for a flashlight.","燈熄掉的時候，爸爸正在找手電筒。","go out 用在燈或火，表示「熄滅」，過去式是 went out。look for 是「尋找」。"],
 ["I read a comic book with a flashlight under the blanket.","我在被子裡用手電筒看漫畫。","with 表示「用（某個工具）」。read 的過去式拼法不變，但要唸成 /rɛd/。"],
 ["Do you have a flashlight or a candle?","你有手電筒或蠟燭嗎？","or 表示「或」，在疑問句裡用來列出選擇。"]]],
["shake","v.","搖晃",[
 ["The windows were shaking during the earthquake.","地震的時候窗戶一直在搖晃。","shake 字尾是 e，去 e 加 ing：shaking。The windows 是複數，用 were。"],
 ["The house shook for ten seconds.","房子搖了十秒鐘。","shake 的過去式是不規則的 shook，不能寫 shaked。"],
 ["Shake the bottle before you drink the juice.","喝果汁之前先把瓶子搖一搖。","祈使句用原形動詞 Shake 開頭。shake hands 是「握手」。"]],null,null,"📳|搖晃"],
["happen","v.","發生",[
 ["What happened? Why was everyone shouting?","發生什麼事了？為什麼大家都在大叫？","What 當主詞，直接接過去式 happened，不用 did。everyone 看成單數，用 was shouting。"],
 ["The accident happened while they were crossing the street.","意外發生的時候，他們正在過馬路。","happen 不能用被動，不說 was happened。cross the street 是「過馬路」。"],
 ["What was happening at the park? There were so many people.","公園那裡當時在發生什麼事？好多人喔。","What was happening？是過去進行式，What 當主詞看成單數，用 was。"]],null,null,"❗|發生"],
["suddenly","adv.","突然地",[
 ["I was reading in bed. Suddenly, the lights went out.","我正在床上看書，突然燈熄了。","suddenly 常放在句首，後面加逗號，帶出突然發生的事，動詞用簡單過去式。"],
 ["While we were eating, the phone suddenly rang.","我們在吃飯的時候，電話突然響了。","suddenly 是副詞，可以放在一般動詞 rang 前面。ring 的過去式是 rang。"],
 ["The dog suddenly ran out of the house.","狗狗突然衝出房子。","副詞 suddenly 修飾動詞 ran。它的形容詞是 sudden（突然的）。"]],null,null,"⚡|突然"],
["ring","v.","（鈴、電話）響",[
 ["The phone rang when I was taking a bath.","我在泡澡的時候電話響了。","ring 的過去式是不規則的 rang，不能寫 ringed。"],
 ["Your phone is ringing. Answer it, please.","你的電話在響，請接一下。","is ringing 是現在進行式。answer the phone 是「接電話」。"],
 ["Was the doorbell ringing? I didn't hear it.","剛剛門鈴在響嗎？我沒聽到。","Was + 主詞 + V-ing？是過去進行式的疑問句。doorbell 是「門鈴」。"]],null,null,"🔔|響"],
["shout","v.","大叫；大喊",[
 ["Someone was shouting outside, so I looked out of the window.","外面有人在大叫，所以我往窗外看。","someone 看成單數，所以用 was shouting。so 帶出結果。"],
 ["Don't shout at your little sister.","不要對你的妹妹大吼。","shout at + 人 是「對某人大吼」，語氣很兇；shout to + 人 是「大聲叫某人，讓他聽到」。"],
 ["The kids shouted with joy when they saw the rainbow.","孩子們看到彩虹的時候開心地大叫。","with joy 是「高興地」。when 後面接簡單過去式 saw。"]]],
["hurry","v.","趕快；匆忙",[
 ["Hurry up, or you'll be late for school.","快一點，不然你上學會遲到。","祈使句 + , or …，表示「……，否則……」。"],
 ["I was hurrying to the station when I fell down.","我正趕去車站的時候跌倒了。","hurry 加 ing 直接加：hurrying，y 不用改。fall 的過去式是 fell。"],
 ["She hurried home because it was raining.","因為在下雨，她趕緊回家。","hurry 是子音 + y 結尾，過去式把 y 改成 i 再加 ed：hurried。"]],null,null,"🏃|趕快"],
["while","conj.","當……的時候（持續中）",[
 ["While I was sleeping, someone knocked on the door.","我在睡覺的時候，有人敲門。","while 後面通常接持續的動作（過去進行式）。while 子句放在前面，後面要加逗號。"],
 ["Mom was cooking while Dad was washing the car.","媽媽在煮飯，同時爸爸在洗車。","while 連接兩個同時進行的動作，兩邊都用過去進行式。"],
 ["Don't use your phone while you are walking.","走路的時候不要用手機。","while 也可以接現在進行式，表示「在……的同時」。"]],null,null,"⏳|當…的時候"],
["fall asleep","phr.","睡著",[
 ["I fell asleep while I was watching TV.","我看電視看到睡著了。","fall 的過去式是 fell。fall asleep 表示「睡著」的那一刻，是短暫的動作。"],
 ["The baby fell asleep at eight last night.","寶寶昨晚八點就睡著了。","asleep 是形容詞「睡著的」；fall asleep 是片語，不說 fall sleep。"],
 ["Don't fall asleep in class!","上課不要睡著！","否定祈使句：Don't + 原形 fall。"]]],
["turn off","phr.","關掉（電器、燈）",[
 ["Please turn off the lights when you leave the room.","離開房間時請關燈。","turn off 是「關掉」，相反是 turn on「打開」。"],
 ["Were you turning off the computer when the lights went out?","停電的時候你正在關電腦嗎？","過去進行式疑問句：Were you + V-ing？turn 直接加 ing。"],
 ["The TV is too loud. Turn it off, please.","電視太大聲了，請把它關掉。","代名詞 it 要放在 turn 和 off 中間：turn it off，不說 turn off it。"]],null,null,"🔌|關掉"],
["take a bath","phr.","泡澡；洗澡",[
 ["I was taking a bath when the earthquake happened.","地震發生的時候我正在泡澡。","take 去 e 加 ing：taking。when 後面接突然發生的事。"],
 ["My little brother doesn't like to take a bath.","我弟弟不喜歡洗澡。","doesn't + 原形 like。take a bath 是泡在浴缸裡洗；take a shower 是淋浴。"],
 ["Did you take a bath or a shower last night?","你昨晚是泡澡還是淋浴？","or 用在選擇疑問句，回答時不用 Yes / No，要說出選哪一個。"]]],
["nap","n.","小睡；午睡",[
 ["Grandpa was taking a nap when we got home.","我們回到家的時候，爺爺正在午睡。","take a nap 是「小睡一下」。get home 的 home 是副詞，前面不加 to：got home。"],
 ["I felt tired, so I took a short nap.","我覺得累，所以小睡了一下。","feel 是連綴動詞，後面接形容詞 tired。so 帶出結果。"],
 ["Do you take a nap after lunch?","你午餐後會午睡嗎？","nap 是可數名詞，所以說 a nap。"]]],
/* ---------- 感官動詞與感官形容詞 ---------- */
["smell","v./n.","聞起來；氣味",[
 ["The cookies smell good. Can I have one?","餅乾聞起來好香，我可以吃一塊嗎？","smell 是連綴動詞，後面接形容詞 good，不能說 smell well。"],
 ["Something smells strange. Is anything burning?","有東西聞起來怪怪的，有什麼在燒嗎？","Something 看成單數，動詞要加 s：smells。"],
 ["I like the smell of fresh bread.","我喜歡剛出爐麵包的味道。","smell 也可以當名詞「氣味」：the smell of + 名詞。"]]],
["taste","v./n.","嚐起來；味道",[
 ["This soup tastes a little salty.","這碗湯嚐起來有點鹹。","taste + 形容詞 salty。a little 放在形容詞前面，表示「有一點」。"],
 ["How does the cake taste? It tastes sweet.","蛋糕嚐起來怎麼樣？很甜。","問「嚐起來怎麼樣」用 How does ... taste？回答用 taste + 形容詞。"],
 ["Taste the sauce before you add salt.","加鹽之前先嚐嚐醬汁。","taste 也可以當一般動詞「品嚐」，後面直接接名詞 the sauce。"]],null,null,"👅|嚐起來"],
["sound","v./n.","聽起來；聲音",[
 ["Your idea sounds great!","你的主意聽起來很棒！","sound + 形容詞 great。主詞 Your idea 是單數，sound 要加 s。"],
 ["That sounds like a good plan.","那聽起來是個好計畫。","sound like + 名詞；sound + 形容詞。後面是名詞時要加 like。"],
 ["The music sounded too loud, so I turned it down.","音樂聽起來太大聲，所以我把音量轉小。","sound 接形容詞 loud，不接 loudly。turn down 是「把音量調小」。"]],null,null,"👂|聽起來"],
["feel","v.","覺得；摸起來",[
 ["I felt nervous before the test.","考試前我覺得很緊張。","feel 的過去式是 felt。feel + 形容詞 nervous。"],
 ["This blanket feels soft and warm.","這條毯子摸起來又軟又暖。","feel 也可以表示「摸起來」，後面接兩個形容詞，用 and 連接。"],
 ["How are you feeling today? I feel much better.","你今天覺得怎麼樣？我好多了。","How are you feeling? 用來關心對方；much 放在比較級 better 前面加強語氣。"]],null,null,"✋|覺得；摸起來"],
["delicious","adj.","美味的",[
 ["The beef noodles tasted delicious.","牛肉麵嚐起來很美味。","taste + 形容詞 delicious，不說 tasted deliciously。"],
 ["Mom was making something delicious when I came home.","我回家的時候，媽媽正在做好吃的東西。","something + 形容詞：形容詞要放在 something 後面。"],
 ["This cake is delicious, but it's too sweet for me.","這個蛋糕很好吃，但對我來說太甜了。","but 連接兩個相反的看法，前面加逗號。"]],null,null,"😋|美味的"],
["noisy","adj.","吵鬧的",[
 ["The classroom was very noisy when the teacher came in.","老師進來的時候，教室非常吵。","noisy 是形容詞，放在 be 動詞後面。"],
 ["The street sounds noisy at night.","這條街晚上聽起來很吵。","sound + 形容詞 noisy。名詞 noise 去 e 加 y，變成形容詞 noisy。"],
 ["My neighbors were noisy, so I couldn't sleep.","我的鄰居很吵，所以我睡不著。","so 前面是原因，後面是結果。couldn't 是 can't 的過去式。"]],null,null,"📢|吵鬧的"],
["soft","adj.","柔軟的；輕柔的",[
 ["The cat's fur feels soft.","貓咪的毛摸起來很軟。","feel + 形容詞 soft。主詞 The cat's fur 是單數，所以 feels 加 s。"],
 ["I was lying on the soft bed when you called.","你打電話來的時候，我正躺在軟軟的床上。","lie（躺）的 ing 形式是 lying，ie 要改成 y 再加 ing。"],
 ["Speak in a soft voice. Grandma is sleeping.","說話小聲一點，奶奶在睡覺。","soft 也可以形容聲音「輕柔的」。"]],null,null,"🧸|柔軟的"],
["hard","adj./adv.","硬的；努力地",[
 ["This bread is too hard. I can't eat it.","這個麵包太硬了，我吃不下。","hard 當形容詞是「硬的」，相反是 soft。"],
 ["The bed felt hard, so I couldn't sleep well.","床摸起來很硬，所以我睡不好。","feel + 形容詞 hard。well 是副詞，修飾一般動詞 sleep。"],
 ["Ken was studying hard when I called him.","我打電話給肯的時候，他正在用功讀書。","hard 也可以當副詞「努力地」，形容詞和副詞同形；不要寫成 hardly（幾乎不）。"]],null,null,"🪨|硬的"],
["sweet","adj.","甜的；貼心的",[
 ["This chocolate tastes too sweet.","這個巧克力嚐起來太甜了。","taste + 形容詞 sweet。too 表示「太……」，通常帶有不好的意思。"],
 ["Do you like sweet or sour candy?","你喜歡甜的還是酸的糖果？","or 用在選擇疑問句，連接兩個形容詞。"],
 ["My sister is sweet, and she always helps me.","我妹妹很貼心，而且她總是幫我。","sweet 也可以形容人「貼心的」。and 連接兩個句子。"]],null,null,"🍬|甜的"],
["sour","adj.","酸的",[
 ["The lemon juice tastes sour.","檸檬汁嚐起來很酸。","taste + 形容詞 sour。"],
 ["The milk smells sour. Don't drink it.","牛奶聞起來酸酸的，不要喝。","牛奶壞掉會變酸，smell + 形容詞 sour。"],
 ["I like sour food, but my sister doesn't.","我喜歡酸的食物，但我姊姊不喜歡。","but 後面省略了重複的部分：doesn't (like sour food)。"]],null,null,"🍋|酸的"],
["salty","adj.","鹹的",[
 ["The soup was too salty, so I drank a lot of water.","湯太鹹了，所以我喝了很多水。","salt（鹽）+ y = salty（鹹的）。drink 的過去式是 drank。"],
 ["Seawater tastes salty.","海水嚐起來是鹹的。","Seawater 不可數，看成單數，所以 tastes 加 s。"],
 ["Do you want sweet popcorn or salty popcorn?","你要甜的爆米花還是鹹的爆米花？","or 連接兩個選擇，回答時說出要哪一種。"]],null,null,"🧂|鹹的"],
["spicy","adj.","辣的",[
 ["Is the curry spicy? It smells spicy.","咖哩辣嗎？聞起來很辣。","smell + 形容詞 spicy。"],
 ["I can't eat spicy food, so I ordered noodles.","我不能吃辣，所以點了麵。","so 表示結果。can't 後面接原形 eat。"],
 ["Ben was eating spicy hot pot and sweating a lot.","班當時一邊吃麻辣鍋一邊狂流汗。","and 連接兩個 V-ing：was eating ... and (was) sweating。"]],null,null,"🌶️|辣的"],
["smooth","adj.","光滑的；滑順的",[
 ["The baby's skin feels smooth.","寶寶的皮膚摸起來很光滑。","feel + 形容詞 smooth。"],
 ["The road was smooth, so the bus ride was comfortable.","路很平，所以搭公車很舒服。","so 前後都是完整的句子。"],
 ["This ice cream tastes smooth and sweet.","這個冰淇淋吃起來又綿密又甜。","taste 後面可以接兩個形容詞，用 and 連接。"]],null,null,"🧈|光滑的"],
["terrible","adj.","可怕的；糟糕的",[
 ["The weather was terrible yesterday.","昨天天氣很糟。","terrible 和國一學過的 awful 意思很像。"],
 ["This medicine tastes terrible!","這個藥嚐起來好難吃！","taste + 形容詞 terrible，不說 tastes terribly。"],
 ["I felt terrible because I lost my wallet.","我覺得很難過，因為我掉了錢包。","feel terrible 是「覺得很糟」。because 帶出原因。"]],null,null,"😖|糟糕的"],
["strange","adj.","奇怪的",[
 ["That sounds strange. Are you sure?","那聽起來很奇怪，你確定嗎？","sound + 形容詞 strange。"],
 ["A strange man was standing outside the door.","有一個奇怪的男人當時站在門外。","用過去進行式描述當時的情景。"],
 ["The fish smelled strange, so we didn't eat it.","那條魚聞起來怪怪的，所以我們沒吃。","smell 的過去式是 smelled。so 表示結果。"]],null,null,"🤔|奇怪的"],
["loud","adj.","大聲的",[
 ["The music was very loud, but the baby was still sleeping.","音樂很大聲，但寶寶還在睡。","but 連接意思相反的兩句。"],
 ["Your voice sounds too loud.","你的聲音聽起來太大聲了。","sound + 形容詞 loud。副詞是 loudly：He spoke loudly.。"],
 ["Please don't talk loudly in the library.","在圖書館請不要大聲說話。","loudly 是副詞，修飾一般動詞 talk；連綴動詞後面才用形容詞 loud。"]],null,null,"📣|大聲的"],
["fresh","adj.","新鮮的",[
 ["These apples look fresh.","這些蘋果看起來很新鮮。","look + 形容詞 fresh。主詞是複數，look 不加 s。"],
 ["The fish smells fresh, and it tastes great.","這魚聞起來很新鮮，吃起來也很棒。","and 連接兩個句子，兩邊都是連綴動詞 + 形容詞。"],
 ["Let's open the window and get some fresh air.","我們打開窗戶，呼吸一些新鮮空氣吧。","fresh air 是「新鮮空氣」。Let's 後面接原形動詞。"]],null,null,"🥬|新鮮的"],
["chocolate","n.","巧克力",[
 ["This chocolate tastes sweet and a little bitter.","這個巧克力吃起來甜甜的，又有一點苦。","taste + 形容詞；用 and 連接兩個形容詞。"],
 ["My sister was eating chocolate when Mom came in.","媽媽進來的時候，我妹妹正在吃巧克力。","when 子句用簡單過去式 came，主要子句用過去進行式 was eating。"],
 ["Do you want chocolate or vanilla ice cream?","你要巧克力還是香草冰淇淋？","or 用在選擇疑問句。chocolate 的 ch 唸 /tʃ/。"]]],
["echo","n.","回音",[
 ["We heard an echo in the big empty room.","我們在空蕩蕩的大房間裡聽到回音。","echo 是母音開頭，所以用 an echo。ch 在這裡唸 /k/。"],
 ["I was shouting in the mountains, and the echo came back.","我在山上大叫，回音就傳回來了。","and 連接兩個句子：先是正在做的事，接著是發生的事。"],
 ["The echo sounded strange in the cave.","回音在山洞裡聽起來很奇怪。","sound + 形容詞 strange。echo 的複數要加 es：echoes。"]]],
["machine","n.","機器",[
 ["Mom was using the washing machine when the lights went out.","停電的時候，媽媽正在用洗衣機。","washing machine 是「洗衣機」。use 去 e 加 ing：using。"],
 ["This machine sounds noisy. Is it broken?","這台機器聽起來好吵，是壞了嗎？","sound + 形容詞 noisy。broken 是「壞掉的」。"],
 ["I bought a drink from the vending machine.","我在自動販賣機買了一瓶飲料。","vending machine 是「自動販賣機」。machine 的 ch 唸 /ʃ/。"]]],
/* ---------- 嗜好與休閒 ---------- */
["collect","v.","收集",[
 ["My brother collects stamps.","我哥哥收集郵票。","主詞 My brother 是第三人稱單數，現在式 collect 加 s。"],
 ["I was collecting shells on the beach when it started to rain.","開始下雨的時候我正在海灘撿貝殼。","when 後面是突然發生的事，用簡單過去式 started。"],
 ["Do you collect anything? Yes, I collect comic books.","你有收集什麼東西嗎？有，我收集漫畫書。","anything 用在疑問句。collector 是「收藏家」。"]],null,null,"🗂️|收集"],
["comic","n.","漫畫",[
 ["Tom was reading comics when his mom came into his room.","湯姆的媽媽進他房間時，他正在看漫畫。","comic 可數，複數加 s：comics。"],
 ["This comic book looks interesting.","這本漫畫書看起來很有趣。","look + 形容詞 interesting。"],
 ["I like comics, but my dad doesn't let me read them at night.","我喜歡漫畫，但我爸爸晚上不讓我看。","let + 人 + 原形動詞：let me read。"]]],
["stamp","n.","郵票",[
 ["Grandpa has many old stamps from different countries.","爺爺有很多來自不同國家的舊郵票。","stamp 可數，複數加 s。主詞 Grandpa 是單數，用 has。"],
 ["I put a stamp on the postcard and mailed it.","我在明信片上貼了郵票，然後寄出去。","put 的過去式還是 put。and 連接兩個過去式動詞 put 和 mailed。"],
 ["These stamps look old, but they're very beautiful.","這些郵票看起來很舊，但非常漂亮。","look + 形容詞 old；but 連接相反的意思。"]]],
["model","n.","模型",[
 ["My cousin was building a model plane when I visited him.","我去找表哥的時候，他正在做模型飛機。","build 直接加 ing：building。model plane 是「模型飛機」。"],
 ["This model car looks real!","這台模型車看起來像真的！","look + 形容詞 real。"],
 ["Is he making a model ship or a model train?","他在做模型船還是模型火車？","or 用在選擇疑問句。make 去 e 加 ing：making。"]],null,null,"✈️|模型"],
["cartoon","n.","卡通",[
 ["The kids were watching cartoons when the earthquake happened.","地震發生的時候，孩子們正在看卡通。","主詞 The kids 是複數，用 were watching。"],
 ["This cartoon sounds funny.","這部卡通聽起來很好笑。","sound + 形容詞 funny。"],
 ["I watched cartoons, and my sister read a book.","我看卡通，我妹妹看書。","and 連接兩個句子，各有自己的主詞和動詞。"]],null,null,"📺|卡通"],
["puzzle","n.","拼圖；謎題",[
 ["We were doing a puzzle during the blackout.","停電的時候，我們在拼拼圖。","do a puzzle 是「拼拼圖、解謎題」。"],
 ["This puzzle looks hard, but I want to try.","這個拼圖看起來很難，但我想試試看。","look + 形容詞 hard。but 連接相反的意思。"],
 ["It took me three days to finish the puzzle.","我花了三天才拼完這個拼圖。","It takes + 人 + 時間 + to V，表示「花某人多少時間做……」。"]]],
["magic","n.","魔術；魔法",[
 ["He was doing magic tricks at the party.","他當時在派對上表演魔術。","magic trick 是「魔術把戲」。"],
 ["Her magic show looked amazing.","她的魔術表演看起來好神奇。","look + 形容詞 amazing。"],
 ["I'm learning magic, and I can make a coin disappear.","我在學魔術，我能讓一枚硬幣消失。","make + 東西 + 原形動詞：make a coin disappear。"]],null,null,"🎩|魔術"],
["bake","v.","烘烤",[
 ["Mom was baking cookies when I came home.","我回家的時候，媽媽正在烤餅乾。","bake 字尾是 e，去 e 加 ing：baking。"],
 ["The bread smells great. Did you bake it?","麵包聞起來好香，是你烤的嗎？","Did + 主詞 + 原形 bake？"],
 ["We baked a cake, but it tasted terrible.","我們烤了一個蛋糕，但嚐起來好難吃。","bake 的過去式只加 d：baked。but 帶出相反的結果。"]]],
["cookie","n.","餅乾",[
 ["These cookies taste delicious!","這些餅乾吃起來好好吃！","主詞 These cookies 是複數，taste 不加 s。"],
 ["Who was eating my cookies?","剛剛是誰在吃我的餅乾？","Who 當主詞，後面直接接 was eating。"],
 ["Do you want a cookie or a piece of cake?","你要一塊餅乾還是一塊蛋糕？","cookie 可數，用 a cookie；蛋糕切片要說 a piece of cake。"]]],
["fishing","n.","釣魚",[
 ["Grandpa and I were fishing by the river when it started to rain.","開始下雨時，爺爺和我正在河邊釣魚。","Grandpa and I 是兩個人，用 were。go fishing 是「去釣魚」。"],
 ["Fishing sounds boring, but it's actually fun.","釣魚聽起來很無聊，但其實很好玩。","Fishing 是動名詞當主詞，看成單數，所以 sounds 加 s。"],
 ["We went fishing last weekend and caught three fish.","我們上週末去釣魚，釣到三條魚。","go fishing 的過去式是 went fishing。fish 單複數同形。"]]],
/* ---------- 心情 ---------- */
["nervous","adj.","緊張的",[
 ["I was very nervous when I gave a speech.","我上台演講的時候非常緊張。","give a speech 是「演講」；give 的過去式是 gave。"],
 ["You look nervous. Are you OK?","你看起來很緊張，你還好嗎？","look + 形容詞 nervous。"],
 ["Lisa felt nervous, so she took a deep breath.","麗莎覺得緊張，所以她深呼吸了一下。","feel + 形容詞 nervous；so 表示結果。"]]],
["calm","adj.","冷靜的；平靜的",[
 ["Stay calm during an earthquake.","地震時要保持冷靜。","stay 也可以當連綴動詞，後面接形容詞：stay calm。"],
 ["The sea looked calm this morning.","今天早上海面看起來很平靜。","look + 形容詞 calm。calm 的 l 不發音。"],
 ["Dad was calm, but Mom was worried.","爸爸很冷靜，但媽媽很擔心。","but 連接兩個相反的情緒。"]],null,null,"😌|冷靜的"],
["proud","adj.","驕傲的；自豪的",[
 ["My parents felt proud of me.","我爸媽為我感到驕傲。","be / feel proud of + 人：為……感到驕傲。"],
 ["He looked proud when he won the game.","他贏得比賽的時候看起來很得意。","look + 形容詞 proud。win 的過去式是 won。"],
 ["I'm proud of my team, and I love them.","我以我的隊伍為榮，我愛他們。","and 連接兩個句子。"]]],
["upset","adj.","難過的；不高興的",[
 ["Amy was upset because she lost her phone.","艾美很難過，因為她弄丟了手機。","because 後面接原因的句子。lose 的過去式是 lost。"],
 ["Don't be upset. It's not your fault.","別難過，這不是你的錯。","否定祈使句：Don't be + 形容詞。"],
 ["He looked upset, so I didn't talk to him.","他看起來心情不好，所以我沒跟他說話。","look + 形容詞 upset；so 表示結果。"]],null,null,"😞|難過的"],
["lonely","adj.","寂寞的",[
 ["The old man was sitting alone and felt lonely.","那位老先生獨自坐著，覺得很寂寞。","alone 是「獨自」，lonely 是「寂寞的」。sit 加 ing 要雙寫 t：sitting。"],
 ["I feel lonely when my friends are busy.","朋友們都在忙的時候，我覺得很寂寞。","feel + 形容詞 lonely。lonely 雖然是 ly 結尾，卻是形容詞！"],
 ["Our cat looks lonely. Let's play with her.","我們的貓看起來好寂寞，我們陪牠玩吧。","look + 形容詞 lonely。"]]],
["afraid","adj.","害怕的",[
 ["I'm afraid of thunder.","我怕打雷。","be afraid of + 名詞：害怕……。afraid 只能放在 be 動詞或連綴動詞後面，不放在名詞前面。"],
 ["The little girl was afraid, so she was holding her mom's hand.","小女孩很害怕，所以一直握著媽媽的手。","so 前後都是完整的句子。"],
 ["Don't be afraid. The dog is friendly.","別怕，那隻狗很友善。","否定祈使句：Don't be + 形容詞。friendly 也是 ly 結尾的形容詞。"]],null,null,"😨|害怕的"],
/* ---------- 字首 un- / re- / dis- ---------- */
["unhappy","adj.","不快樂的",[
 ["Ken looked unhappy after the test.","考試後肯看起來不太開心。","un-（不）+ happy = unhappy。look + 形容詞 unhappy。"],
 ["Why are you unhappy? Did something happen?","你為什麼不開心？發生什麼事了嗎？","Did something happen? 用 did + 原形 happen。"],
 ["She was unhappy, but she didn't cry.","她很不開心，但她沒有哭。","but 連接意思相反的兩句。"]],null,null,"☹️|不快樂的"],
["unlock","v.","打開（鎖）；解鎖",[
 ["Dad was unlocking the door when the phone rang.","電話響的時候爸爸正在開門鎖。","un-（相反的動作）+ lock（鎖上）= unlock（打開鎖）。"],
 ["I can't unlock my phone. I forgot the password.","我沒辦法解鎖手機，我忘了密碼。","forget 的過去式是 forgot。"],
 ["Unlock the box, and you'll find a surprise.","把盒子的鎖打開，你就會發現驚喜。","祈使句 + , and …，表示「……，就會……」。"]],null,null,"🔓|打開鎖"],
["rewrite","v.","重寫",[
 ["The teacher asked me to rewrite my essay.","老師要我重寫我的作文。","re-（再一次）+ write = rewrite。ask + 人 + to V。"],
 ["I was rewriting my homework when you called me.","你打電話來的時候，我正在重寫我的作業。","rewrite 去 e 加 ing：rewriting。"],
 ["Can you rewrite this sentence? It looks wrong.","你能重寫這個句子嗎？它看起來不對。","look + 形容詞 wrong。rewrite 的過去式是 rewrote。"]],null,null,"✍️|重寫"],
["replay","v.","重播；重玩",[
 ["Can you replay the song? It sounds great.","你可以重播那首歌嗎？它聽起來很棒。","re-（再一次）+ play = replay。"],
 ["We were replaying the video when Dad came in.","爸爸進來的時候，我們正在重播那段影片。","replay 直接加 ing：replaying。"],
 ["They replayed the game because it was raining.","因為在下雨，他們重賽了一場。","replay 是母音 a + y 結尾，過去式直接加 ed：replayed。"]],null,null,"🔁|重播"],
["dislike","v.","不喜歡",[
 ["I dislike spicy food.","我不喜歡辣的食物。","dis-（不）+ like = dislike。dislike 本身就是否定，不要再加 don't。"],
 ["My brother dislikes noisy places.","我哥哥不喜歡吵鬧的地方。","第三人稱單數，dislike 加 s。"],
 ["She likes cats, but she dislikes dogs.","她喜歡貓，但是不喜歡狗。","but 連接相反的兩句，like 和 dislike 剛好相反。"]],null,null,"👎|不喜歡"],
["disagree","v.","不同意",[
 ["I'm sorry, but I disagree with you.","抱歉，但我不同意你的看法。","disagree with + 人：不同意某人。"],
 ["Tom agreed, but Amy disagreed.","湯姆同意，但艾美不同意。","dis-（不）+ agree = disagree。過去式只加 d：disagreed。"],
 ["Do you agree or disagree?","你同意還是不同意？","or 用在選擇疑問句。"]],null,null,"🙅|不同意"],
["disappear","v.","消失",[
 ["The cat disappeared while we were eating.","我們在吃飯的時候，貓不見了。","dis-（相反）+ appear（出現）= disappear（消失）。拼字：一個 s、兩個 p。"],
 ["The sun disappeared behind the clouds.","太陽消失在雲後面。","disappear 後面不能直接接受詞。"],
 ["Where did my pen go? It just disappeared!","我的筆跑去哪了？它就這樣不見了！","Where did + 主詞 + 原形 go？"]],null,null,"💨|消失"],
/* ---------- 字尾 -ful / -less ---------- */
["careful","adj.","小心的",[
 ["Be careful! The floor is wet.","小心！地板是濕的。","care（小心）+ -ful = careful。字尾 -ful 只有一個 l。"],
 ["He was careful, so he didn't make any mistakes.","他很小心，所以沒有犯任何錯。","so 表示結果。make a mistake 是「犯錯」。"],
 ["Please be careful when you cross the street.","過馬路的時候請小心。","副詞是 carefully：Drive carefully.。"]],null,null,"⚠️|小心的"],
["careless","adj.","粗心的",[
 ["I was careless and made a lot of mistakes.","我很粗心，犯了很多錯。","care + -less（沒有）= careless，和 careful 意思相反。"],
 ["Don't be careless on the test.","考試不要粗心。","否定祈使句 Don't be + 形容詞。"],
 ["Ken is smart, but he is careless.","肯很聰明，但他很粗心。","but 連接相反的評價。"]],null,null,"🙈|粗心的"],
["helpful","adj.","有幫助的",[
 ["Thank you. You are very helpful.","謝謝你，你幫了很大的忙。","help + -ful = helpful（有幫助的）。"],
 ["This map was helpful, so we didn't get lost.","這張地圖很有用，所以我們沒迷路。","get lost 是「迷路」。so 帶出結果。"],
 ["The book looks helpful for the test.","這本書看起來對考試很有幫助。","look + 形容詞 helpful。"]],null,null,"🤝|有幫助的"],
["useful","adj.","有用的",[
 ["A flashlight is useful during a blackout.","停電的時候手電筒很有用。","use + -ful = useful。useful 開頭唸 /j/（子音），所以用 a：a useful book。"],
 ["This English app sounds useful.","這個英文 app 聽起來很實用。","sound + 形容詞 useful。"],
 ["Your advice was really useful, and I passed the test.","你的建議真的很有用，我考試及格了。","and 連接兩個句子。"]],null,null,"🔧|有用的"],
["useless","adj.","沒用的",[
 ["This old phone is useless now.","這支舊手機現在沒用了。","use + -less = useless，和 useful 相反。"],
 ["The umbrella was useless in the storm.","在暴風雨中，雨傘根本沒用。","in the storm 是「在暴風雨中」。"],
 ["It's useless to cry. Let's find a way.","哭也沒用，我們想個辦法吧。","It's useless to + 原形動詞：做……是沒用的。"]],null,null,"🗑️|沒用的"],
["colorful","adj.","色彩繽紛的",[
 ["The fireworks looked colorful.","煙火看起來五彩繽紛。","color + -ful = colorful。look + 形容詞 colorful。"],
 ["She was wearing a colorful dress at the party.","她在派對上穿著一件色彩鮮豔的洋裝。","wear 直接加 ing：wearing。"],
 ["My little sister likes colorful pens.","我妹妹喜歡彩色的筆。","colorful 放在名詞 pens 前面修飾它。"]],null,null,"🌈|色彩繽紛的"],
["hopeless","adj.","沒希望的；絕望的",[
 ["Don't give up. It's not hopeless.","別放棄，還有希望的。","hope + -less = hopeless（沒有希望的）。hope 的 e 要保留。"],
 ["I felt hopeless when I lost the game.","輸了比賽的時候，我覺得好絕望。","feel + 形容詞 hopeless。"],
 ["The situation looked hopeless, but we kept trying.","情況看起來沒希望了，但我們繼續努力。","keep + V-ing：持續做……。"]],null,null,"😩|沒希望的"],
["peaceful","adj.","平靜的；和平的",[
 ["The village looks peaceful.","這個村莊看起來很寧靜。","peace（和平）+ -ful = peaceful。look + 形容詞。"],
 ["It was a peaceful night, and everyone was sleeping.","那是個寧靜的夜晚，大家都在睡覺。","everyone 當主詞看成單數，用 was sleeping。"],
 ["I feel peaceful when I listen to music.","我聽音樂的時候覺得很平靜。","feel + 形容詞 peaceful。"]],null,null,"🕊️|平靜的"]
];

const J2_1_1_GRAMMAR = [
{ id:"g1", title:"過去進行式：was / were + V-ing",
  intro:"要說「過去某個時間點正在做什麼」，就用過去進行式：was / were + V-ing。它就像幫過去拍一張照片，照片裡的人正在做某件事，動作還沒結束。",
  table:[["句型","公式","例子"],["肯定句","主詞 + was / were + V-ing","I was sleeping at ten last night."],["否定句","主詞 + wasn't / weren't + V-ing","They weren't watching TV."],["疑問句","Was / Were + 主詞 + V-ing？","Were you sleeping at that time?"],["簡答","Yes, 主詞 + was / were. / No, 主詞 + wasn't / weren't.","Yes, I was. / No, I wasn't."],["疑問詞問句","疑問詞 + was / were + 主詞 + V-ing？","What were you doing at nine?"]],
  points:[
   "I、he、she、it 和單數名詞用 was；you、we、they 和複數名詞用 were。Ken and I 等於 we，也用 were。",
   "V-ing 的變化和現在進行式一樣：一般直接加 ing（read → reading）；字尾 e 去 e 加 ing（take → taking）；短母音加一個子音要雙寫（sit → sitting、put → putting）；ie 改成 y 再加 ing（lie → lying）。",
   "常搭配過去的時間點：at eight last night、at that time、at this time yesterday、then。",
   "過去進行式和簡單過去式不一樣：I was doing my homework at nine.（九點那時正在寫）；I did my homework last night.（昨晚寫了，整件事做完了）。",
   "問 What were you doing? 要用過去進行式回答：I was taking a bath.，不要只說 I took a bath.。",
   "常考陷阱：was / were 和 V-ing 缺一不可，不能說 I was sleep. 或 I sleeping.；過去進行式的疑問句不用 did，不說 Did you sleeping?。"],
  ex:[
   ["I was reading a comic book at nine last night.","昨晚九點我正在看漫畫。","主詞 I 用 was，read 直接加 ing。"],
   ["My parents were watching TV at that time.","那時候我爸媽正在看電視。","My parents 是複數，用 were。"],
   ["We weren't sleeping during the earthquake.","地震的時候我們沒在睡覺。","否定在 were 後面加 not，縮寫成 weren't。"],
   ["Was Amy taking a bath? No, she wasn't.","艾美那時在泡澡嗎？不，她沒有。","疑問句把 Was 移到句首，用 wasn't 簡答。"],
   ["What were you doing at eight? I was baking cookies.","你八點在做什麼？我在烤餅乾。","問句和回答都用過去進行式；bake 去 e 加 ing。"]]},
{ id:"g2", title:"過去進行式搭配 when / while",
  intro:"過去有兩件事同時發生時，常用 when 和 while 把它們接起來。最常見的情況是：一個「正在進行的長動作」（過去進行式），被一個「突然發生的短動作」（簡單過去式）打斷。",
  table:[["連接詞","後面接","例子"],["when","簡單過去式（短動作、突然發生）","When I came home, my mom was cooking."],["while","過去進行式（持續的長動作）","While I was reading, the phone rang."],["while（兩個長動作）","過去進行式 + 過去進行式","Dad was cooking while Mom was reading."],["子句位置","when / while 子句放前面要加逗號；放後面不加","My mom was cooking when I came home."]],
  points:[
   "when 後面常接突然發生的「短動作」，用簡單過去式：When the phone rang, I was taking a bath.",
   "while 後面常接持續的「長動作」，用過去進行式：While I was taking a bath, the phone rang.",
   "上面兩句意思一樣，只是 when 和 while 放的位置不同。解題時先看 when / while 後面那一句，再決定用哪種時態。",
   "兩個長動作同時進行，兩邊都用過去進行式，最常用 while：I was studying while my brother was playing games.",
   "逗號規則：when / while 子句放在句首，整個子句結束後加逗號；放在句子後半，前面不加逗號。",
   "常考陷阱：while 後面不接短暫的動作，不說 While the phone rang, ...；when / while 已經把兩句連起來了，不能再加 and、so 或 but。"],
  ex:[
   ["When I came home, my mom was cooking dinner.","我回到家的時候，媽媽正在煮晚餐。","when 接短動作 came，另一句用過去進行式。"],
   ["While I was taking a shower, the lights went out.","我在洗澡的時候燈熄了。","while 接長動作 was taking，突然發生的事用過去式。"],
   ["The phone rang while we were having dinner.","我們在吃晚餐的時候電話響了。","while 子句放在後面，前面不加逗號。"],
   ["Dad was washing the car while Mom was baking a cake.","爸爸在洗車，同時媽媽在烤蛋糕。","兩個同時進行的長動作，都用過去進行式。"],
   ["What were you doing when the earthquake happened?","地震發生的時候你在做什麼？","when 後面接短動作 happened，問句用過去進行式。"]]},
{ id:"g3", title:"連綴動詞 look / sound / smell / taste / feel + 形容詞",
  intro:"look、sound、smell、taste、feel 這五個感官動詞也可以當「連綴動詞」。它們的功能就像 be 動詞，後面接形容詞，描述主詞看起來、聽起來、聞起來、嚐起來、摸起來或感覺怎麼樣。",
  table:[["連綴動詞","意思","例子"],["look + 形容詞","看起來","You look tired."],["sound + 形容詞","聽起來","That sounds great."],["smell + 形容詞","聞起來","The bread smells good."],["taste + 形容詞","嚐起來","The soup tastes salty."],["feel + 形容詞","摸起來；感覺","The blanket feels soft. I feel nervous."]],
  points:[
   "連綴動詞後面接形容詞，不接副詞：The cake tastes good.（不說 tastes well）；Your idea sounds great.（不說 sounds greatly）。",
   "主詞是第三人稱單數，現在式要加 s：It smells strange. This song sounds nice.",
   "後面接名詞時要先加 like：look like、sound like、smell like、taste like、feel like。He looks like his father. That sounds like fun.",
   "問「……起來怎麼樣」用 How：How does the soup taste? How do you feel?",
   "一般動詞要用副詞形容動作：He sings loudly.（唱得大聲）；連綴動詞用形容詞：His voice sounds loud.（聽起來大聲）。",
   "常考陷阱：選項裡出現 ly 結尾的副詞（loudly、happily、nicely）要小心。另外 well 當形容詞表示「身體健康的」，所以 I don't feel well.（我身體不舒服）是正確的。"],
  ex:[
   ["You look nervous. Are you OK?","你看起來很緊張，還好嗎？","look + 形容詞 nervous。"],
   ["That sounds like a good idea.","那聽起來是個好主意。","後面是名詞 a good idea，要加 like。"],
   ["The cookies smell delicious.","餅乾聞起來很美味。","smell + 形容詞 delicious，不說 deliciously。"],
   ["How does the lemon juice taste? It tastes sour.","檸檬汁嚐起來怎麼樣？很酸。","問句用 How does ... taste？回答用 taste + 形容詞。"],
   ["The cat's fur feels soft and smooth.","貓咪的毛摸起來又軟又滑。","feel 後面接兩個形容詞，用 and 連接。"]]},
{ id:"g4", title:"對等連接詞 and / but / or / so",
  intro:"對等連接詞用來連接兩個地位一樣的單字、片語或句子。and 表示「和、而且」，but 表示「但是」，or 表示「或、還是」，so 表示「所以」。",
  table:[["連接詞","意思","例子"],["and","和；而且（順著說）","I was tired, and I went to bed early."],["but","但是（意思相反）","The cake looks good, but it tastes terrible."],["or","或；還是；否則（選擇）","Do you want tea or juice?"],["so","所以（前面原因，後面結果）","It was raining, so we stayed home."]],
  points:[
   "連接兩個完整的句子時，連接詞前面通常加逗號：It was late, so I went home.",
   "so 前面是原因，後面是結果；because 後面接原因。because 和 so 不能同時出現在同一句：不說 Because it rained, so we stayed home.。",
   "連接單字或片語時，前後的詞性和形式要一樣：I like singing and dancing.（不說 singing and dance）；He was eating and watching TV.",
   "否定句裡的「也不、或」要用 or：I don't like coffee or tea.",
   "祈使句 + and 表示「就會」，祈使句 + or 表示「否則」：Study hard, and you'll pass. / Hurry up, or you'll be late.",
   "選擇疑問句用 or，不能用 Yes / No 回答：Do you want tea or juice? — Juice, please.",
   "常考陷阱：but 用在意思轉折，so 用在結果。分不清時先問自己：後面這句是「結果」，還是「相反」？"],
  ex:[
   ["The soup smelled good, but it tasted terrible.","湯聞起來很香，但嚐起來很難吃。","前後意思相反，用 but。"],
   ["It was raining hard, so we stayed home.","雨下得很大，所以我們待在家。","前面是原因，後面是結果，用 so。"],
   ["Do you want chocolate or cookies?","你要巧克力還是餅乾？","or 用在選擇疑問句。"],
   ["Mom was cooking, and Dad was reading.","媽媽在煮飯，爸爸在看書。","and 連接兩個句子，前面加逗號。"],
   ["Hurry up, or you'll miss the bus.","快一點，否則你會錯過公車。","祈使句 + or 表示「否則」。"]]}
];

/* 文法測驗：[題目, [選項 x4], 正確答案索引, 解析, 文法編號] */
const J2_1_1_QUIZ = [
 ["I ___ my homework at nine last night.",["was doing","did doing","were doing","am doing"],0,"at nine last night 是過去的時間點，表示當時正在做，用過去進行式；主詞 I 配 was。","g1"],
 ["They ___ basketball at four yesterday afternoon.",["was playing","play","were playing","are playing"],2,"They 是複數，過去進行式用 were playing。yesterday 是過去，不能用 are。","g1"],
 ["What ___ you doing at eight this morning? — I was taking a shower.",["did","are","was","were"],3,"回答是過去進行式 I was taking，問句也要用過去進行式；you 配 were。","g1"],
 ["___ Amy sleeping at ten last night? — No, she wasn't.",["Did","Was","Were","Is"],1,"主詞 Amy 是單數，過去進行式疑問句用 Was 開頭。不能用 Did。","g1"],
 ["We ___ watching TV during the blackout. We were playing cards.",["didn't","wasn't","weren't","aren't"],2,"We 是複數，過去進行式的否定用 weren't + V-ing。","g1"],
 ["The kids were ___ in the river at that time.",["swimming","swiming","swim","swam"],0,"swim 是短母音加一個子音，加 ing 要雙寫 m：swimming。","g1"],
 ["哪一句正確？",["I was sleep at that time.","I sleeping at that time.","Did you sleeping at that time?","I was sleeping at that time."],3,"過去進行式要 was / were 加 V-ing，兩個零件缺一不可，疑問句也不用 did。","g1"],
 ["Was your father cooking at six? — Yes, ___.",["he did","he was","he were","he cooked"],1,"用 Was 問，就用 was 回答：Yes, he was.。","g1"],
 ["My dog was ___ on the sofa at noon.",["lieing","lie","lying","lay"],2,"lie（躺）要把 ie 改成 y 再加 ing：lying。","g1"],
 ["___ I was reading, the lights went out.",["While","So","But","And"],0,"空格後面是正在進行的長動作 was reading，用 while 表示「當……的時候」。","g2"],
 ["When I ___ home, my mom was cooking dinner.",["coming","come","came","comes"],2,"when 後面接突然發生的短動作，用簡單過去式 came。","g2"],
 ["While Dad ___ the car, it started to rain.",["wash","was washing","washes","is washing"],1,"while 後面接持續的長動作，用過去進行式 was washing。","g2"],
 ["The phone rang ___ I was taking a bath.",["so","or","but","while"],3,"後面是正在進行的長動作，電話在那時響了，用 while 連接。","g2"],
 ["My brother was playing games ___ I was studying.",["so","while","or","but"],1,"兩個同時進行的長動作，用 while 連接。","g2"],
 ["When the earthquake ___, we were having dinner.",["happened","happen","happens","was happened"],0,"when 後面接突然發生的短動作，用過去式 happened；happen 不能用被動。","g2"],
 ["哪一句的逗號用得正確？",["It was raining, when I got up.","When I got up, it was raining.","When, I got up it was raining.","It was, raining when I got up."],1,"when 子句放句首，子句結束後加逗號；放在後面就不加逗號。","g2"],
 ["What were you doing when the teacher ___ in?",["come","comes","is coming","came"],3,"when 後面接突然發生的短動作，用過去式 came。","g2"],
 ["While we ___ in the park, we saw a rainbow.",["walk","walks","are walking","were walking"],3,"while 後面接過去持續的長動作，用過去進行式 were walking。","g2"],
 ["The cookies smell ___.",["well","nicely","good","goodly"],2,"smell 是連綴動詞，後面接形容詞 good，不接副詞 well 或 nicely。","g3"],
 ["Your idea sounds ___!",["great","greatly","well","nicely"],0,"sound 是連綴動詞，後面接形容詞 great。","g3"],
 ["You look ___. Did you sleep well last night?",["tiredly","tired","tire","tiring"],1,"look + 形容詞 tired。tiring 是「令人疲累的」，形容事情，不形容人。","g3"],
 ["This soup ___ salty.",["is tasting","taste","tasting","tastes"],3,"主詞 This soup 是單數，現在式要加 s：tastes。表示「嚐起來」時不用進行式。","g3"],
 ["The blanket ___ soft and warm.",["feels","feel","is feel","feeling"],0,"主詞 The blanket 是單數，feel 要加 s；feel 本身是動詞，前面不加 is。","g3"],
 ["He looks ___ his father.",["as","like","to","for"],1,"後面接名詞 his father，要用 look like：看起來像……。","g3"],
 ["哪一句正確？",["The music sounds loudly.","The cake tastes deliciously.","The flowers smell sweet.","She looks happily."],2,"連綴動詞後面要接形容詞：smell sweet。其他句子都錯用了副詞。","g3"],
 ["___ does the cake taste? — It tastes sweet.",["What","How","Why","Who"],1,"問「嚐起來怎麼樣」用 How does ... taste？","g3"],
 ["The baby was sleeping, so Mom spoke ___.",["soft","quiet","loud","softly"],3,"speak 是一般動詞，要用副詞 softly 形容「怎麼說」。連綴動詞才接形容詞。","g3"],
 ["It was raining, ___ we stayed home.",["but","or","so","and"],2,"下雨是原因，待在家是結果，用 so。","g4"],
 ["The cake looks good, ___ it tastes terrible.",["but","so","or","because"],0,"看起來好吃，卻很難吃，意思相反，用 but。","g4"],
 ["Do you want tea ___ juice? — Juice, please.",["so","but","and","or"],3,"選擇疑問句用 or，回答時說出選哪一個。","g4"],
 ["Hurry up, ___ you'll miss the bus.",["and","or","so","but"],1,"祈使句 + or 表示「否則」。錯過公車是壞結果，所以用 or。","g4"],
 ["哪一句正確？",["Because I was sick, so I stayed home.","I was sick, so I stayed home.","Because I was sick, but I stayed home.","I was sick so, I stayed home."],1,"because 和 so 不能一起用；連接兩句時，逗號放在 so 前面。","g4"],
 ["I like singing and ___.",["dance","danced","dancing","to dancing"],2,"and 前後的形式要一樣：singing and dancing。","g4"],
 ["Ken was tired, ___ he kept studying.",["so","but","or","because"],1,"很累卻繼續讀書，意思相反，用 but。","g4"],
 ["I don't like coffee ___ tea.",["or","and","so","but"],0,"否定句裡表示「也不」的「和、或」要用 or。","g4"],
 ["I was hungry, ___ I ate two sandwiches.",["but","or","and","because"],2,"「很餓，所以（而且）吃了兩個三明治」，順著說用 and；這裡沒有相反，不用 but。","g4"]
];

/* =========================================================
   上課模式腳本（安安老師）
   say：老師講的話，{ } 裡面用英文語音唸
   board：黑板內容 [英文, [要標亮的字], 是否為錯誤示範]
   chant：口訣
   ask：隨堂提問，答錯會有針對性的回饋，再給一題 again 練習
   ========================================================= */
const J2_1_1_CLASS = {
g1:[
 {say:"哈囉同學，歡迎來到國二！安安老師今天要玩「定格拍照」：想像昨晚八點有人按下快門，喀擦！照片裡的你正在做什麼？英文要用 {was} 或 {were} 再加上動詞 ing，這就叫「過去進行式」。", board:[["I was watching TV at eight last night.",["was watching","at eight last night"]]]},
 {say:"公式很簡單：was / were 先上場，動詞後面再加 ing。主詞是 I、he、she、it 用 {was}；you、we、they 用 {were}，跟國一學的 be 動詞過去式一模一樣！", board:[["I was reading.",["was","reading"]],["She was sleeping.",["was","sleeping"]],["They were playing.",["were","playing"]]]},
 {say:"先把口訣唸三遍！", chant:"過去正在做什麼，was、were 加 ing，喀擦一聲拍下來！"},
 {ask:{say:"換你選選看！", q:"I ___ a comic book at nine last night.", opts:["was reading","were reading","am reading"], ans:0,
   ok:"答對了！I 配 was，再加上 reading，就是過去進行式。",
   bad:{1:"有想到用進行式，很棒！可是 I 要配 was，不是 were。",2:"at nine last night 是過去的時間，am 要換成 was。"},
   again:{q:"We ___ dinner at seven last night.", opts:["was having","were having","are having"], ans:1, exp:"We 是複數，要用 were having。"}}},
 {say:"動詞加 ing 的規則跟現在進行式一樣：一般直接加，{read} 變 {reading}；字尾是 e 的去 e 加 ing，{bake} 變 {baking}；短母音加一個子音要雙寫，{sit} 變 {sitting}；ie 結尾改成 y，{lie} 變 {lying}。", board:[["read → reading",["reading"]],["bake → baking",["baking"]],["sit → sitting",["sitting"]],["lie → lying",["lying"]]]},
 {ask:{q:"Mom was ___ cookies at four.", opts:["bakeing","baking","bakking"], ans:1,
   ok:"讚！bake 字尾是 e，去 e 再加 ing：baking。",
   bad:{0:"bake 字尾是 e，要先把 e 去掉再加 ing。",2:"bake 的 a 是長母音，不用雙寫 k，去 e 加 ing 就好。"},
   again:{q:"The baby was ___ on the bed.", opts:["lying","lieing","lyeing"], ans:0, exp:"lie 要把 ie 改成 y 再加 ing：lying。"}}},
 {say:"否定句：在 was / were 後面加 {not}，縮寫成 {wasn't}、{weren't}。疑問句：把 Was / Were 搬到句子最前面，回答也用 was / were。", board:[["We weren't watching TV.",["weren't"]],["Were you sleeping?",["Were"]],["Yes, I was. / No, I wasn't.",["I was","I wasn't"]]]},
 {say:"這個也編成口訣！", chant:"否定 not 跟在 was、were 後，問句 was、were 跳最前！"},
 {ask:{q:"___ you sleeping at eleven last night? — Yes, I was.", opts:["Did","Were","Was"], ans:1,
   ok:"正確！過去進行式的疑問句用 Were 開頭，you 配 were。",
   bad:{0:"過去進行式有 be 動詞，用 Were 來問就好，不用 did。",2:"主詞是 you，要配 were，不是 was。"},
   again:{q:"Was Ken playing games? — No, he ___.", opts:["didn't","wasn't","weren't"], ans:1, exp:"用 Was 問，就用 wasn't 回答。"}}},
 {say:"考試最愛的問句：{What were you doing?} 你那時候在做什麼？回答也要用過去進行式：{I was taking a bath.}", board:[["What were you doing at nine?",["were","doing"]],["I was taking a bath.",["was taking"]]]},
 {say:"比一比：{I did my homework last night.} 是「昨晚寫了功課」，整件事做完了；{I was doing my homework at nine.} 是「九點那時正在寫」，像照片定格在那一刻。", board:[["I did my homework last night.",["did"]],["I was doing my homework at nine.",["was doing","at nine"]]]},
 {ask:{say:"最後一題，是考試最愛的陷阱！", q:"哪一句是正確的？", opts:["I was sleep at ten.","I sleeping at ten.","I was sleeping at ten."], ans:2,
   ok:"太強了！was 和 sleeping 兩個零件都在，才是完整的過去進行式。",
   bad:{0:"少了 ing！was 後面要接 V-ing：was sleeping。",1:"少了 was！過去進行式 was / were 和 V-ing 缺一不可。"},
   again:{q:"哪一句是正確的？", opts:["Did you watching TV?","Were you watching TV?","Were you watch TV?"], ans:1, exp:"疑問句用 Were + 主詞 + V-ing，不用 did。"}}},
 {say:"過去進行式過關！複習口訣：過去正在做什麼，was、were 加 ing；兩個零件缺一不可，問句不用 did。下一課要學 when 和 while，讓兩件事情同時登場！", end:true}
],
g2:[
 {say:"同學好！今天來演「意外小劇場」：昨晚你正在洗澡，突然電話響了！一個是「正在進行」的長動作，一個是「突然發生」的短動作，英文要怎麼把它們接起來呢？", board:[["I was taking a bath.（長動作）",["was taking"]],["The phone rang.（短動作）",["rang"]]]},
 {say:"第一個方法用 {when}：{When the phone rang, I was taking a bath.} when 後面放「突然發生的短動作」，用簡單過去式。", board:[["When the phone rang, I was taking a bath.",["When","rang","was taking"]]]},
 {say:"第二個方法用 {while}：{While I was taking a bath, the phone rang.} while 後面放「正在進行的長動作」，用過去進行式。兩句的意思一樣喔！", board:[["While I was taking a bath, the phone rang.",["While","was taking","rang"]]]},
 {say:"口訣一定要記住！", chant:"when 接短動作，while 接長動作；長的用進行式，短的用過去式！"},
 {ask:{q:"While I ___, the lights went out.", opts:["was reading","read","am reading"], ans:0,
   ok:"答對！while 後面接正在進行的長動作，用過去進行式 was reading。",
   bad:{1:"while 後面要接持續的長動作，用過去進行式 was reading。",2:"燈熄掉是過去的事，要用過去進行式 was reading。"},
   again:{q:"When the phone ___, I was cooking.", opts:["ring","rang","rings"], ans:1, exp:"when 後面接突然發生的短動作，用簡單過去式 rang。"}}},
 {say:"句子前後可以對調，意思不變！但要注意逗號：when / while 那句放前面，子句結束要加逗號；放到後面，就不用逗號。", board:[["When I came home, Mom was cooking.",["When"]],["Mom was cooking when I came home.",["when"]]]},
 {ask:{q:"哪一句的標點是對的？", opts:["Mom was cooking, when I came home.","When I came home, Mom was cooking.","When I came home Mom, was cooking."], ans:1,
   ok:"讚！when 子句放句首，整個子句結束後加逗號。",
   bad:{0:"when 子句放在後面，前面不用加逗號。",2:"逗號要放在整個 when 子句結束的地方：When I came home, ..."},
   again:{q:"哪一句的標點是對的？", opts:["While I was sleeping, someone knocked.","While, I was sleeping someone knocked.","Someone knocked, while I was sleeping."], ans:0, exp:"while 子句放句首，結束後加逗號；放在後面就不加。"}}},
 {say:"如果兩件事都是「長動作」，同時在進行，兩邊都用過去進行式，最常用 {while}：{Dad was cooking while Mom was reading.}", board:[["Dad was cooking while Mom was reading.",["was cooking","while","was reading"]]]},
 {ask:{q:"My brother was playing games ___ I was studying.", opts:["while","so","but"], ans:0,
   ok:"正確！兩個長動作同時進行，用 while 連接。",
   bad:{1:"so 表示「所以」，這兩件事不是因果，而是同時進行，要用 while。",2:"but 表示「但是」，這兩件事不是相反的意思，要用 while。"},
   again:{q:"We were singing while Dad ___ the guitar.", opts:["was playing","plays","is playing"], ans:0, exp:"兩個長動作同時進行，while 後面用過去進行式 was playing。"}}},
 {say:"解題小技巧：先找出「突然冒出來」的那件事，像電話響、地震、停電、有人進門，它用簡單過去式；另一件被打斷的「背景」用過去進行式。", board:[["When the earthquake happened, we were having dinner.",["happened","were having"]],["While we were having dinner, the earthquake happened.",["were having","happened"]]]},
 {ask:{q:"When the earthquake ___, I was taking a bath.", opts:["happen","happened","was happened"], ans:1,
   ok:"太棒了！地震是突然發生的短動作，用簡單過去式 happened。",
   bad:{0:"地震發生在過去，要用過去式 happened。",2:"happen 不能用被動，不說 was happened。"},
   again:{q:"When Mom came in, we ___ cartoons.", opts:["were watching","are watching","watch"], ans:0, exp:"媽媽進來的那一刻，看卡通是正在進行的背景，用 were watching。"}}},
 {ask:{say:"最後一題，小心陷阱！", q:"哪一句是正確的？", opts:["When I came home, and Mom was cooking.","When I came home, Mom was cooking.","When I came home, so Mom was cooking."], ans:1,
   ok:"完美！when 已經把兩句連起來了，不需要其他連接詞。",
   bad:{0:"已經有 when 連接兩句，不能再加 and。",2:"已經有 when 連接兩句，不能再加 so。"},
   again:{q:"哪一句是正確的？", opts:["While I was sleeping, but the phone rang.","While I was sleeping, the phone rang.","While I was sleeping, so the phone rang."], ans:1, exp:"while 已經把兩句連起來了，不能再加 but 或 so。"}}},
 {say:"今天學會了：when 接短動作，用過去式；while 接長動作，用進行式；子句放前面要加逗號；一句話只要一個連接詞。下一課要用五官來形容東西！", end:true}
],
g3:[
 {say:"同學好！先用鼻子聞一聞，好香喔！英文說「聞起來很香」是 {It smells good.} 今天的主角是五個感官動詞：{look}、{sound}、{smell}、{taste}、{feel}。", board:[["look 看起來   sound 聽起來",["look","sound"]],["smell 聞起來   taste 嚐起來",["smell","taste"]],["feel 摸起來；覺得",["feel"]]]},
 {say:"它們有個特別的名字叫「連綴動詞」，功能就像 be 動詞，後面接形容詞來描述主詞。{You are tired.} 換成 {You look tired.}，就變成「你看起來很累」。", board:[["You are tired.",["are","tired"]],["You look tired.",["look","tired"]]]},
 {say:"口訣來囉！", chant:"看聽聞嚐摸，後面接形容詞！"},
 {ask:{q:"The cookies smell ___.", opts:["good","well","nicely"], ans:0,
   ok:"答對了！smell 是連綴動詞，後面接形容詞 good。",
   bad:{1:"well 在這裡是副詞，連綴動詞後面要接形容詞 good。",2:"nicely 是副詞，要用形容詞，像 good 或 nice。"},
   again:{q:"The soup tastes ___.", opts:["salty","saltily","salt"], ans:0, exp:"taste 後面接形容詞 salty；salt 是名詞「鹽」。"}}},
 {say:"最常考的陷阱：ly 結尾的副詞不能放在連綴動詞後面！{The music sounds loud.} 是對的，說成 sounds loudly 就錯了。", board:[["The music sounds loud.",["sounds","loud"]],["The music sounds loudly.",[],true],["The cake tastes delicious.",["tastes","delicious"]]]},
 {say:"可是要小心！一般動詞要用副詞喔：{He sings loudly.} 唱歌是動作，用副詞 loudly 說明「怎麼唱」；{His voice sounds loud.} 是說聲音聽起來怎麼樣，用形容詞 loud。", board:[["He sings loudly.",["sings","loudly"]],["His voice sounds loud.",["sounds","loud"]]]},
 {ask:{q:"Your idea sounds ___!", opts:["greatly","great","well"], ans:1,
   ok:"讚！sound 是連綴動詞，後面接形容詞 great。",
   bad:{0:"greatly 是副詞，sound 是連綴動詞，要接形容詞 great。",2:"well 在這裡是副詞，要用形容詞 great。"},
   again:{q:"You look ___ today.", opts:["happily","happy","happiness"], ans:1, exp:"look 接形容詞 happy。happily 是副詞，happiness 是名詞。"}}},
 {say:"主詞是第三人稱單數時，現在式要加 s：{It smells strange.}；問「……起來怎麼樣」用 {How}：{How does it taste?} 回答：{It tastes sweet.}", board:[["It smells strange.",["smells"]],["How does it taste?",["How","taste"]],["It tastes sweet.",["tastes","sweet"]]]},
 {ask:{q:"This blanket ___ soft.", opts:["feel","feels","is feel"], ans:1,
   ok:"正確！This blanket 是單數，feel 要加 s。",
   bad:{0:"主詞 This blanket 是單數，現在式要加 s：feels。",2:"feel 本身就是動詞，前面不用再加 is。"},
   again:{q:"These cookies ___ sweet.", opts:["tastes","taste","is taste"], ans:1, exp:"These cookies 是複數，taste 不加 s。"}}},
 {say:"如果後面接的是「名詞」，要先加 {like}：{He looks like his dad.}、{That sounds like a good idea.} 形容詞直接接，名詞要先加 like！", board:[["He looks like his dad.",["looks like"]],["That sounds like a good idea.",["sounds like"]],["He looks his dad.",[],true]]},
 {say:"把這個規則也唸一遍！", chant:"形容詞直接上，名詞先加 like！"},
 {ask:{q:"This cloud looks ___ a cat.", opts:["like","as","to"], ans:0,
   ok:"太棒了！後面是名詞 a cat，要用 look like。",
   bad:{1:"看起來「像」一個名詞，要用 look like，不用 as。",2:"look to 不是「像」的意思，要用 look like。"},
   again:{q:"That sounds ___.", opts:["a great idea","like a great idea","like great"], ans:1, exp:"後面是名詞 a great idea，要加 like；形容詞 great 前面不加 like。"}}},
 {say:"最後一個小例外：{I don't feel well.} 這裡的 well 是形容詞，意思是「身體健康的」，所以可以接在 feel 後面。想說「我身體不舒服」就用這句！", board:[["I don't feel well.",["feel well"]],["The cake tastes good.",["tastes good"]]]},
 {say:"連綴動詞過關！口訣：看聽聞嚐摸，後面接形容詞；名詞先加 like。考試看到 ly 結尾的選項，先想想是不是陷阱！下一課要學 and、but、or、so！", end:true}
],
g4:[
 {say:"同學好！今天要認識四個「連接詞小幫手」：{and}、{but}、{or}、{so}。它們能把兩個地位一樣的單字或句子接起來，所以叫做「對等連接詞」。", board:[["and 和；而且",["and"]],["but 但是",["but"]],["or 或；還是",["or"]],["so 所以",["so"]]]},
 {say:"{and} 順著說，表示「加上」：{I was tired, and I went to bed early.} {but} 轉個彎，表示「相反」：{The cake looks good, but it tastes terrible.}", board:[["I was tired, and I went to bed early.",["and"]],["The cake looks good, but it tastes terrible.",["but"]]]},
 {say:"{or} 表示「選擇」：{Do you want tea or juice?} {so} 表示「結果」：{It was raining, so we stayed home.}", board:[["Do you want tea or juice?",["or"]],["It was raining, so we stayed home.",["so"]]]},
 {say:"四個小幫手編成口訣！", chant:"and 加上去，but 轉個彎，or 選一個，so 是結果！"},
 {ask:{q:"It was raining, ___ we stayed home.", opts:["but","so","or"], ans:1,
   ok:"答對！下雨是原因，待在家是結果，用 so。",
   bad:{0:"下雨和待在家不是相反的事，下雨是原因、待在家是結果，要用 so。",2:"or 是「或」，這裡要表示結果，用 so。"},
   again:{q:"The soup smells good, ___ it tastes terrible.", opts:["so","and","but"], ans:2, exp:"聞起來很香，卻很難吃，意思相反，用 but。"}}},
 {say:"連接兩個完整的句子時，連接詞前面通常要加逗號：{It was late, so I went home.}", board:[["It was late, so I went home.",["so"]]]},
 {say:"超級陷阱來了！{because} 帶出原因，{so} 帶出結果，兩個不能同時出現在一句裡，只能選一個用。", board:[["Because it rained, so we stayed home.",[],true],["Because it rained, we stayed home.",["Because"]],["It rained, so we stayed home.",["so"]]]},
 {say:"這個陷阱一定要記住！", chant:"because 和 so，只能請一個！"},
 {ask:{q:"哪一句是正確的？", opts:["Because I was sick, so I stayed home.","I was sick, so I stayed home.","Because I was sick, but I stayed home."], ans:1,
   ok:"太棒了！只用 so 就好，不需要 because。",
   bad:{0:"because 和 so 不能一起用，要刪掉其中一個。",2:"because 和 but 也不能一起用，而且生病待在家不是相反的意思。"},
   again:{q:"哪一句是正確的？", opts:["Because he was hungry, he ate two sandwiches.","Because he was hungry, so he ate two sandwiches.","He was hungry, because so he ate two sandwiches."], ans:0, exp:"只用 because 就好，不用再加 so。"}}},
 {say:"and、or 連接單字或片語時，前後的形式要一樣：{I like singing and dancing.}、{He was eating and watching TV.}", board:[["I like singing and dancing.",["singing","dancing"]],["I like singing and dance.",[],true]]},
 {ask:{q:"I like reading and ___.", opts:["draw","drawing","drew"], ans:1,
   ok:"讚！and 前面是 reading，後面也用 V-ing：drawing。",
   bad:{0:"and 前面是 reading，後面也要用 V-ing：drawing。",2:"drew 是過去式，要和 reading 一樣用 drawing。"},
   again:{q:"Mom was cooking and ___ at the same time.", opts:["singing","sang","sings"], ans:0, exp:"was cooking and (was) singing，and 後面也用 V-ing。"}}},
 {say:"or 還有兩個常考用法：否定句裡的「或、也不」用 or：{I don't like coffee or tea.} 祈使句加 or 表示「否則」：{Hurry up, or you'll be late.}", board:[["I don't like coffee or tea.",["don't","or"]],["Hurry up, or you'll be late.",["or"]]]},
 {ask:{say:"最後一題！", q:"Hurry up, ___ you'll miss the bus.", opts:["and","so","or"], ans:2,
   ok:"完美！祈使句 + or 表示「否則」，不快一點就會錯過公車。",
   bad:{0:"祈使句 + and 表示「就會」，可是錯過公車是壞結果，要用 or（否則）。",1:"祈使句後面要表示「否則」，用 or，不用 so。"},
   again:{q:"Study hard, ___ you'll pass the test.", opts:["and","or","but"], ans:0, exp:"祈使句 + and 表示「這樣做，就會……」，後面是好結果。"}}},
 {say:"恭喜你！國二上學期第一次段考的文法全部上完了！總複習：過去進行式 was / were + V-ing；when 接短動作、while 接長動作；看聽聞嚐摸接形容詞；and、but、or、so 各有任務，because 和 so 不能一起用。去文法測驗大顯身手吧！", end:true}
]};

Object.assign(PH, {
  earthquake:"ear:exc th:th qu:qu a:a_e k:c e:silent_e", blackout:"bl:blend a:short_a ck:ck ou:ou t:c",
  accident:"a:short_a cc:exc i:short_i d:c e:schwa n:c t:c", noise:"n:c oi:oi s:s_z e:silent_e",
  fire:"f:c i:i_e r:c e:silent_e", storm:"st:blend or:or m:c", thunder:"th:th u:short_u n:c d:c er:er",
  lightning:"l:c igh:igh t:c n:c i:short_i ng:ng", flashlight:"fl:blend a:short_a sh:sh l:c igh:igh t:c",
  shake:"sh:sh a:a_e k:c e:silent_e", happen:"h:c a:short_a pp:double e:schwa n:c",
  suddenly:"s:c u:short_u dd:double e:schwa n:c l:c y:y_i", ring:"r:c i:short_i ng:ng", shout:"sh:sh ou:ou t:c",
  hurry:"h:c ur:ur r:silent y:y_i", while:"wh:wh i:i_e l:c e:silent_e",
  "fall asleep":"f:c all:all _:space a:schwa sl:blend ee:ee p:c", "turn off":"t:c ur:ur n:c _:space o:short_o ff:double",
  "take a bath":"t:c a:a_e k:c e:silent_e _:space a:schwa _:space b:c a:short_a th:th", nap:"n:c a:short_a p:c",
  smell:"sm:blend e:short_e ll:double", taste:"t:c a:a_e st:blend e:silent_e", sound:"s:c ou:ou n:c d:c", feel:"f:c ee:ee l:c",
  delicious:"d:c e:schwa l:c i:short_i ci:exc ou:schwa s:c", noisy:"n:c oi:oi s:s_z y:y_i", soft:"s:c o:short_o f:c t:c",
  hard:"h:c ar:ar d:c", sweet:"sw:blend ee:ee t:c", sour:"s:c ou:ou r:c", salty:"s:c al:exc t:c y:y_i",
  spicy:"sp:blend i:long_i c:soft_c y:y_i", smooth:"sm:blend oo:oo_l th:th_v", terrible:"t:c e:short_e rr:double i:schwa b:c le:le",
  strange:"str:blend a:long_a n:c g:soft_g e:silent_e", loud:"l:c ou:ou d:c", fresh:"fr:blend e:short_e sh:sh",
  chocolate:"ch:ch o:short_o c:c o:schwa l:c a:schwa t:c e:silent_e", echo:"e:short_e ch:ch_k o:long_o",
  machine:"m:c a:schwa ch:exc i:i_ee n:c e:silent_e",
  collect:"c:c o:schwa ll:double e:short_e c:c t:c", comic:"c:c o:short_o m:c i:short_i c:c", stamp:"st:blend a:short_a m:c p:c",
  model:"m:c o:short_o d:c e:schwa l:c", cartoon:"c:c ar:ar t:c oo:oo_l n:c", puzzle:"p:c u:short_u zz:double le:le",
  magic:"m:c a:short_a g:soft_g i:short_i c:c", bake:"b:c a:a_e k:c e:silent_e", cookie:"c:c oo:oo_s k:c ie:exc",
  fishing:"f:c i:short_i sh:sh i:short_i ng:ng",
  nervous:"n:c er:er v:c ou:schwa s:c", calm:"c:c a:a_ah l:silent m:c", proud:"pr:blend ou:ou d:c",
  upset:"u:short_u p:c s:c e:short_e t:c", lonely:"l:c o:o_e n:c e:silent_e l:c y:y_i", afraid:"a:schwa fr:blend ai:ai d:c",
  unhappy:"u:short_u n:c h:c a:short_a pp:double y:y_i", unlock:"u:short_u n:c l:c o:short_o ck:ck",
  rewrite:"r:c e:long_e wr:wr i:i_e t:c e:silent_e", replay:"r:c e:long_e pl:blend ay:ay",
  dislike:"d:c i:short_i s:c l:c i:i_e k:c e:silent_e", disagree:"d:c i:short_i s:c a:schwa gr:blend ee:ee",
  disappear:"d:c i:short_i s:c a:schwa pp:double ear:ear",
  careful:"c:c are:are ful:ful", careless:"c:c are:are l:c e:schwa ss:double", helpful:"h:c e:short_e l:c p:c ful:ful",
  useful:"u:u_e s:c e:silent_e ful:ful", useless:"u:u_e s:c e:silent_e l:c e:schwa ss:double",
  colorful:"c:c o:o_uh l:c or:schwa_r ful:ful", hopeless:"h:c o:o_e p:c e:silent_e l:c e:schwa ss:double",
  peaceful:"p:c ea:ea c:soft_c e:silent_e ful:ful"
});
Object.assign(EXC_NOTE, {
  earthquake:"ear 一般唸 /ɪr/（像 ear、hear），可是在 earth 裡唸捲舌的 /ɝ/，和 her、bird 的母音一樣，整個字唸 /ˈɝθkweɪk/。",
  accident:"cc 後面接 i 時，第一個 c 唸 /k/、第二個 c 唸 /s/，合起來唸 /ks/，像 accident、success。",
  delicious:"ci 後面接母音時常唸 /ʃ/（像「噓」），所以 delicious 唸 /dɪˈlɪʃəs/。",
  salty:"al 在 salt、salty 裡唸 /ɔl/，跟 all、tall 的 all 家族同一個音。",
  cookie:"字尾的 ie 一般唸 /aɪ/（像 pie），在 cookie 裡卻唸 /i/，跟 movie 一樣。",
  machine:"machine 的 ch 唸 /ʃ/（像「噓」），因為這個字來自法文；i 唸長長的 /iː/，重音在後面：/məˈʃin/。"
});
/* ---------- 4 堂自然發音課（安安老師） ---------- */
const J2_1_1_PHONICS = [
  {id:"p1", title:"ch 的三種唸法：/tʃ/、/k/、/ʃ/"},
  {id:"p2", title:"字首 un- / re- / dis-"},
  {id:"p3", title:"字尾 -ful / -less"},
  {id:"p4", title:"連音：子音結尾 + 母音開頭"}
];
const J2_1_1_PHONICS_CLASS = {
p1:[
 {say:"同學好！國一學過 <<ch>> 唸 /tʃ/，像 {chair}、{lunch}。其實 ch 是個變裝高手，總共有三種唸法！今天一次學會。", board:[["chair   lunch",["ch","ch"],false,true]]},
 {say:"第一種，也是最常見的 /tʃ/：嘴巴嘟起來，像說「去」，但不要出聲帶。聽聽看：{chocolate}、{chair}、{teacher}、{beach}。", board:[["chocolate",["ch"],false,true],["teacher   beach",["ch","ch"],false,true]]},
 {say:"第二種唸 /k/！這些字很多是從希臘文來的：{school}、{echo}、{Christmas}。", board:[["school   echo",["ch","ch"],false,true],["Christmas",["Ch"],false,true]]},
 {say:"第三種唸 /ʃ/，像要別人安靜時的「噓」，這些字大多來自法文：{machine}、{chef}（廚師）。", board:[["machine",["ch"],false,true],["chef",["ch"],false,true]]},
 {say:"三種唸法編成口訣！", chant:"ch 會變裝：常常唸「去」，有時唸「克」，法文唸「噓」！"},
 {ask:{q:"chocolate 的 ch 唸什麼？", opts:["/tʃ/","/k/","/ʃ/"], ans:0,
   ok:"答對了！chocolate 的 ch 是最常見的 /tʃ/。",
   bad:{1:"/k/ 是 school、echo 的唸法；chocolate 的 ch 唸最常見的 /tʃ/。",2:"/ʃ/ 是 machine 的唸法，chocolate 唸 /tʃ/。"},
   again:{q:"lunch 的 ch 唸什麼？", opts:["/k/","/tʃ/","/ʃ/"], ans:1, exp:"lunch 的 ch 是最常見的 /tʃ/。"}}},
 {ask:{q:"echo（回音）的 ch 唸什麼？", opts:["/tʃ/","/ʃ/","/k/"], ans:2,
   ok:"讚！echo 唸 /ˈɛkoʊ/，ch 唸 /k/，跟 school 一樣。",
   bad:{0:"echo 的 ch 不唸 /tʃ/，要唸 /k/，跟 school 一樣。",1:"/ʃ/ 是 machine 的唸法，echo 的 ch 唸 /k/。"},
   again:{q:"school 的 ch 唸什麼？", opts:["/k/","/tʃ/","/ʃ/"], ans:0, exp:"school 的 ch 唸 /k/。"}}},
 {say:"有沒有規則可以判斷？ch 後面接 <<r>> 的時候，像 {Christmas}，幾乎都唸 /k/。其他唸 /k/ 和 /ʃ/ 的字沒有固定規則，要一個一個記。好消息是：大部分的 ch 都唸 /tʃ/，遇到新字先猜 /tʃ/，猜對的機會最大！", board:[["Christmas",["Chr"],false,true],["chocolate   teacher",["ch","ch"],false,true]]},
 {ask:{q:"machine 的 ch 唸什麼？", opts:["/tʃ/","/ʃ/","/k/"], ans:1,
   ok:"正確！machine 是從法文來的字，ch 唸 /ʃ/，像「噓」。",
   bad:{0:"machine 是從法文來的字，ch 要唸 /ʃ/，像「噓」。",2:"machine 的 ch 不唸 /k/，要唸 /ʃ/。"},
   again:{q:"chef（廚師）的 ch 唸什麼？", opts:["/ʃ/","/k/","/tʃ/"], ans:0, exp:"chef 也是法文來的字，ch 唸 /ʃ/。"}}},
 {say:"再提醒一下：machine 的 <<i>> 唸長長的「一」/iː/，跟 police 一樣，而且重音在後面：{machine}。", board:[["machine",["ch","i"],false,true],["police",["i"],false,true]]},
 {ask:{say:"最後一題！", q:"哪一個字的 ch 和其他兩個唸法不一樣？", opts:["chair","school","teacher"], ans:1,
   ok:"完美！school 的 ch 唸 /k/，chair 和 teacher 都唸 /tʃ/。",
   bad:{0:"chair 的 ch 唸 /tʃ/，和 teacher 一樣；不一樣的是 school。",2:"teacher 的 ch 唸 /tʃ/，和 chair 一樣；不一樣的是 school。"},
   again:{q:"哪一個字的 ch 和其他兩個唸法不一樣？", opts:["echo","Christmas","chocolate"], ans:2, exp:"echo 和 Christmas 的 ch 唸 /k/，chocolate 唸 /tʃ/。"}}},
 {say:"ch 三種唸法過關！記住：大部分唸 /tʃ/（chocolate），有些唸 /k/（school、echo），法文來的唸 /ʃ/（machine）。下一課要認識三頂會改變意思的「帽子」！", end:true}
],
p2:[
 {say:"同學好！今天要學「字首」。字首就像一頂帽子，戴在單字前面，單字的意思就會改變。今天有三頂帽子：<<un>>、<<re>>、<<dis>>！", board:[["un + happy = unhappy",["un"],false,true],["re + write = rewrite",["re"],false,true],["dis + like = dislike",["dis"],false,true]]},
 {say:"第一頂 <<un>>，唸 /ʌn/，意思是「不」或「相反的動作」：{unhappy} 不快樂的，{unlock} 打開鎖。", board:[["unhappy",["un"],false,true],["unlock",["un"],false,true]]},
 {ask:{q:"un + happy 的意思是？", opts:["很快樂的","不快樂的","再快樂一次"], ans:1,
   ok:"答對！un- 是「不」，unhappy 就是不快樂的。",
   bad:{0:"un- 是「不」的意思，不是「很」。",2:"「再一次」是 re- 的意思，un- 是「不」。"},
   again:{q:"unlock 的意思是？", opts:["鎖上","打開鎖","再鎖一次"], ans:1, exp:"lock 是鎖上，un- 表示相反的動作：打開鎖。"}}},
 {say:"第二頂 <<re>>，唸 /ri/，像「瑞」，意思是「再一次」：{rewrite} 重寫，{replay} 重播。", board:[["rewrite",["re"],false,true],["replay",["re"],false,true]]},
 {say:"注意 rewrite 裡的 <<wr>>：w 不發音，只唸 /r/，所以 {rewrite} 唸起來像「瑞-ㄖㄞˋ特」。", board:[["rewrite",["wr"],false,true],["write",["wr"],false,true]]},
 {ask:{q:"replay 的意思是？", opts:["不玩","重播；再玩一次","玩得很好"], ans:1,
   ok:"讚！re- 是「再一次」，replay 就是重播。",
   bad:{0:"「不」是 un- 或 dis- 的意思，re- 是「再一次」。",2:"re- 不是「很好」，是「再一次」的意思。"},
   again:{q:"「重寫」的英文是？", opts:["unwrite","diswrite","rewrite"], ans:2, exp:"re- 表示再一次，rewrite 是重寫。"}}},
 {say:"第三頂 <<dis>>，唸 /dɪs/，意思是「不」或「相反」：{dislike} 不喜歡，{disagree} 不同意，{disappear} 消失。appear 是「出現」，戴上 dis 就變成相反的「消失」！", board:[["dislike   disagree",["dis","dis"],false,true],["disappear",["dis"],false,true]]},
 {say:"三頂帽子編成口訣！", chant:"un 是不、re 是再、dis 是相反，帽子一戴意思變！"},
 {ask:{q:"appear 是「出現」，disappear 是？", opts:["又出現","消失","常常出現"], ans:1,
   ok:"正確！dis- 表示相反，出現的相反就是消失。",
   bad:{0:"「又」是 re- 的意思，dis- 是相反。",2:"dis- 表示相反，不是「常常」；出現的相反是消失。"},
   again:{q:"agree 是「同意」，「不同意」是？", opts:["unagree","disagree","reagree"], ans:1, exp:"agree 的相反要戴 dis-：disagree。"}}},
 {say:"拼字要小心！字首直接加在單字前面，原本的字母一個都不能少：dis + appear = {disappear}，一個 s、兩個 p；un + happy = {unhappy}。", board:[["dis + appear = disappear",["s","pp"],false,true],["un + happy = unhappy",["nh"],false,true]]},
 {say:"陷阱來了！不是每個 re、dis 開頭的字都戴了帽子：{read} 不是「再 ad」，{dish} 也不是「不 h」。判斷方法：把字首拿掉，剩下的還是一個認識的字，才是真正的字首。", board:[["read   ready",["re","re"],false,true],["dish",["dis"],false,true]]},
 {ask:{say:"最後一題！", q:"哪一個字的開頭是表示「再一次」的字首 re-？", opts:["ready","replay","red"], ans:1,
   ok:"完美！replay 拿掉 re 剩下 play，所以 re 是真的字首。",
   bad:{0:"ready 拿掉 re 剩下 ady，不是一個字，所以不是字首。",2:"red 是「紅色」，拿掉 re 只剩 d，不是字首。"},
   again:{q:"哪一個字的開頭是字首 dis-？", opts:["dish","dislike","disco"], ans:1, exp:"dislike 拿掉 dis 剩下 like，所以 dis 是字首。"}}},
 {say:"字首過關！記住：un 是不、re 是再、dis 是相反；拿掉字首後剩下的要是一個字。下一課來看兩條意思相反的「尾巴」！", end:true}
],
p3:[
 {say:"同學好！上一課的帽子戴在前面，今天要學接在後面的「尾巴」：字尾 <<ful>> 和 <<less>>。它們一個表示「充滿」，一個表示「沒有」，意思剛好相反！", board:[["careful",["ful"],false,true],["careless",["less"],false,true]]},
 {say:"<<ful>> 唸 /fəl/，輕輕的「佛」，意思是「充滿……的」：{careful} 小心的、{helpful} 有幫助的、{useful} 有用的、{colorful} 色彩繽紛的、{peaceful} 平靜的。", board:[["careful   helpful",["ful","ful"],false,true],["useful   colorful",["ful","ful"],false,true],["peaceful",["ful"],false,true]]},
 {say:"注意拼字！字尾 -ful 只有一個 l，跟 full（滿的）不一樣。careful 是對的，carefull 就錯了！", board:[["careful",["ful"],false,true],["carefull",[],true]]},
 {say:"跟老師唸！", chant:"字尾 ful 只有一個 l，充滿的意思記心裡！"},
 {ask:{q:"help + ful 的意思是？", opts:["有幫助的","沒有幫助的","再幫一次"], ans:0,
   ok:"答對！-ful 表示「充滿」，helpful 是有幫助的。",
   bad:{1:"「沒有」是 -less 的意思，-ful 是「充滿」。",2:"「再一次」是字首 re- 的意思，-ful 是「充滿」。"},
   again:{q:"「小心的」怎麼拼？", opts:["carefull","careful","carful"], ans:1, exp:"care 的 e 保留，-ful 只有一個 l：careful。"}}},
 {say:"<<less>> 唸 /ləs/，輕輕的「勒斯」，意思是「沒有……的」：{careless} 粗心的、{useless} 沒用的、{hopeless} 沒希望的。", board:[["careless   useless",["less","less"],false,true],["hopeless",["less"],false,true]]},
 {say:"配對來記最有效：{careful} 和 {careless}、{useful} 和 {useless}。同一個字，換條尾巴，意思就相反！", board:[["careful ↔ careless",["ful","less"],false,true],["useful ↔ useless",["ful","less"],false,true]]},
 {ask:{q:"useful 的相反詞是？", opts:["unuseful","useless","disuseful"], ans:1,
   ok:"讚！把 -ful 換成 -less：useless。",
   bad:{0:"useful 的相反不是加 un-，而是把尾巴換成 -less：useless。",2:"沒有 disuseful 這個字，要換成 useless。"},
   again:{q:"careful 的相反詞是？", opts:["careless","uncareful","carefulless"], ans:0, exp:"把 -ful 換成 -less：careless。"}}},
 {say:"唸的時候，-ful 和 -less 都不是重音，要輕輕帶過；重音在前面的字上：{careful}、{useless}。", board:[["careful",["care"],false,true],["useless",["use"],false,true]]},
 {say:"加尾巴的時候，原本的字多半不用改：care → careful、hope → hopeless、peace → peaceful，字尾的 e 都要保留。只有子音 + y 要先把 y 改成 i：{beauty} → {beautiful}。", board:[["hope → hopeless",["e"],false,true],["beauty → beautiful",["i"],false,true]]},
 {ask:{q:"hope + less 怎麼拼？", opts:["hopless","hopeless","hopeles"], ans:1,
   ok:"正確！hope 的 e 保留，-less 有兩個 s：hopeless。",
   bad:{0:"hope 的 e 要保留：hopeless。",2:"-less 有兩個 s：hopeless。"},
   again:{q:"peace + ful 怎麼拼？", opts:["peaceful","peacefull","peacful"], ans:0, exp:"peace 的 e 保留，-ful 一個 l：peaceful。"}}},
 {ask:{say:"最後一題！", q:"「粗心的」英文是？", opts:["careful","careless","uncare"], ans:1,
   ok:"完美！沒有小心，就是粗心：careless。",
   bad:{0:"careful 是「小心的」，粗心的要用 -less：careless。",2:"沒有 uncare 這個字，要用 careless。"},
   again:{q:"「色彩繽紛的」英文是？", opts:["colorless","colorful","uncolor"], ans:1, exp:"充滿顏色的，用 -ful：colorful。"}}},
 {say:"字尾過關！記住：-ful 是充滿、只有一個 l；-less 是沒有、有兩個 s；換條尾巴意思就相反。最後一課要學讓英文說得更順的連音！", end:true}
],
p4:[
 {say:"同學好！你有沒有發現，外國人說話好像整串黏在一起？那就是「連音」！今天來學最常見的一種：前一個字「子音」結尾，下一個字「母音」開頭，兩個字就會黏起來。", board:[["look at",["k","a"],false,true]]},
 {say:"聽聽看：{look at} 不是 look、at 分開唸，而是 loo-kat；{get up} 唸成 ge-tup；{an apple} 唸成 a-napple。前一個字最後的子音，跑去當下一個字的開頭！", board:[["look at → loo-kat",["kat"],false,true],["get up → ge-tup",["tup"],false,true],["an apple → a-napple",["napple"],false,true]]},
 {say:"口訣唸起來！", chant:"子音後面接母音，兩個字手牽手黏一起！"},
 {ask:{q:"get up 連起來唸像？", opts:["ge-tup","get-tup","g-etup"], ans:0,
   ok:"答對！get 的 t 跑去跟 up 黏在一起：ge-tup。",
   bad:{1:"t 只唸一次，移到後面和 up 黏在一起：ge-tup。",2:"是 get 最後的 t 跑去跟 up 黏在一起，不是 g。"},
   again:{q:"an apple 連起來唸像？", opts:["an-napple","a-napple","a-apple"], ans:1, exp:"an 的 n 黏到 apple 前面：a-napple。"}}},
 {say:"重點是看「聲音」不是看「字母」！{take a bath} 的 take 字尾雖然是 e，但 e 不發音，最後的聲音是 /k/，所以還是會連：ta-ka bath。", board:[["take a bath → ta-ka bath",["ka"],false,true]]},
 {say:"本單元的片語也會連音：{turn off} 唸成 tur-noff；{fall asleep} 唸成 fa-lasleep。", board:[["turn off → tur-noff",["noff"],false,true],["fall asleep → fa-lasleep",["lasleep"],false,true]]},
 {ask:{q:"turn off 連起來唸像？", opts:["tur-noff","turn-noff","tu-rnoff"], ans:0,
   ok:"讚！turn 的 n 跑到後面黏 off：tur-noff。",
   bad:{1:"n 只唸一次，跑到後面黏 off：tur-noff。",2:"只有最後一個子音 n 會移過去，r 留在 tur 裡。"},
   again:{q:"fall asleep 連起來唸像？", opts:["fall-lasleep","fa-lasleep","f-allasleep"], ans:1, exp:"fall 的 l 黏到 asleep 前面：fa-lasleep。"}}},
 {say:"文法課的過去進行式也會連音！{was eating} 唸成 wa-zeating；{They were at home.} 裡的 were 和 at 也會黏成 we-rat。", board:[["was eating → wa-zeating",["zeating"],false,true],["were at → we-rat",["rat"],false,true]]},
 {ask:{q:"下面哪一組不會連音？", opts:["look at","pick it up","good night"], ans:2,
   ok:"正確！good 的 d 後面接 night 的子音 n，不是母音，所以不連音。",
   bad:{0:"look 最後是 /k/，at 是母音開頭，會連成 loo-kat。",1:"pick it up 都是子音接母音，會連成 pi-ki-tup。"},
   again:{q:"下面哪一組會連音？", opts:["hot dog","get up","big bag"], ans:1, exp:"get 的 /t/ 接 up 的母音，會連成 ge-tup。"}}},
 {say:"現在你知道為什麼 apple 前面要用 an 了吧！a apple 中間會卡住，換成 an，n 剛好可以黏到下一個母音，唸起來更順：{an apple}、{an echo}。", board:[["an apple → a-napple",["n"],false,true],["an echo → a-necho",["n"],false,true]]},
 {ask:{say:"最後一題！", q:"an echo 連起來唸像？", opts:["a-necho","an-necho","a-echo"], ans:0,
   ok:"完美！an 的 n 黏到 echo 前面：a-necho。",
   bad:{1:"n 只唸一次，黏到 echo 前面：a-necho。",2:"an 的 n 不能不見，要黏到 echo 前面。"},
   again:{q:"Look at me. 裡哪兩個字會連起來？", opts:["look at","at me","都不連"], ans:0, exp:"look 最後的 /k/ 接 at 的母音，連成 loo-kat；at 和 me 是子音接子音，不連。"}}},
 {say:"練習的時候先慢慢唸，把子音「搬家」到下一個字，再越唸越快：{look at}、{get up}、{an apple}、{turn off}、{take a bath}。", board:[["look at   get up",["k a","t u"],false,true],["turn off   an apple",["n o","n a"],false,true]]},
 {say:"自然發音全部上完了！總複習：ch 有 /tʃ/、/k/、/ʃ/ 三種唸法；un 是不、re 是再、dis 是相反；-ful 是充滿、-less 是沒有；子音接母音要連音。快去玩「拼字挑戰」試試身手吧！", end:true}
]};

/* ---------- 單字插圖（抽象的字用單字陣列第 7 欄的概念卡） ---------- */
const j211Bolt = (x, y, s, c = "#facc15") => grp(x, y, s, `<path d="M6 -24 L-10 3 L-1 3 L-7 24 L11 -5 L2 -5 L10 -24 Z" fill="${c}" stroke="#f59e0b" stroke-width="1"/>`);
const j211Flame = (x, y, s) => grp(x, y, s, `<path d="M0 -30 C10 -16 18 -10 16 4 C14 16 6 20 0 20 C-6 20 -14 16 -16 4 C-18 -8 -8 -12 -6 -22 C-2 -14 2 -12 0 -30 Z" fill="#f97316"/><path d="M0 -10 C6 -2 8 4 6 10 C4 16 -4 16 -6 10 C-8 4 -4 0 0 -10 Z" fill="#fde047"/>`);
const j211Flash = (x, y, s) => grp(x, y, s, `<rect x="-16" y="-5" width="24" height="10" rx="3" fill="#374151"/><path d="M8 -8 L16 -9 L16 9 L8 8 Z" fill="#6b7280"/><rect x="16" y="-9" width="3" height="18" rx="1" fill="#fde68a"/><rect x="-6" y="-7" width="5" height="3" rx="1" fill="#ef4444"/>`);
const j211Cookie = (x, y, s) => grp(x, y, s, `<circle r="14" fill="#d6a15c" stroke="#b7813f" stroke-width="1.5"/>` + [[-5, -5], [4, -7], [6, 3], [-3, 5], [-8, 2]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="2" fill="#5b3a1e"/>`).join(""));
const j211Zzz = (x, y) => txt(x, y, "Z", 16, "#8b5cf6") + txt(x + 14, y - 14, "z", 12, "#a78bfa") + txt(x + 24, y - 24, "z", 9, "#c4b5fd");
const j211Piece = c => `<path d="M-14 -14 H-4 A4 4 0 1 1 4 -14 H14 V-4 A4 4 0 1 1 14 4 V14 H-14 Z" fill="${c}" stroke="#fff" stroke-width="1.5"/>`;

Object.assign(ILLUS, {
  earthquake: () => svgWrap("#fff4e6", `<path d="M0 98 L60 98 L70 106 L78 96 L88 108 L96 98 L160 98 L160 120 L0 120 Z" fill="#d6b98c"/><path d="M70 106 L78 96 L88 108" stroke="#7c4a1e" stroke-width="2.5" fill="none"/>` + grp(80, 96, 1, `<rect x="-36" y="-50" width="72" height="50" fill="#fde68a" stroke="#d6a76a" stroke-width="2"/><path d="M-44 -50 L0 -80 L44 -50 Z" fill="#ef4444"/><rect x="-26" y="-38" width="16" height="14" rx="2" fill="#bfe6ff"/><rect x="10" y="-38" width="16" height="14" rx="2" fill="#bfe6ff"/><rect x="-8" y="-24" width="16" height="24" rx="2" fill="#a86d36"/>`, -6) + `<path d="M14 40 Q8 50 14 60 M24 34 Q16 50 24 66 M146 40 Q152 50 146 60 M136 34 Q144 50 136 66" stroke="#f59e0b" stroke-width="3" fill="none" stroke-linecap="round"/>`),
  blackout: () => svgWrap("#1e1b3a", `<rect x="96" y="14" width="46" height="40" rx="3" fill="#312e81" stroke="#4c4a8a" stroke-width="3"/><path d="M119 14 V54 M96 34 H142" stroke="#4c4a8a" stroke-width="3"/><path d="M128 22 A8 8 0 1 0 134 34 A6 6 0 1 1 128 22 Z" fill="#fde68a"/><rect x="0" y="104" width="160" height="16" fill="#2a2752"/><polygon points="71,79 160,62 160,112 71,93" fill="#fde68a" opacity=".35"/>` + kid(42, {eyes:"worry", mood:"o", pose:"hold", oc:"#475569"}) + j211Flash(58, 86, .7)),
  storm: () => svgWrap("#64748b", O.rain(18, 52) + O.rain(96, 60) + O.cloud(48, 28, 1.2, "#334155") + O.cloud(116, 32, 1.1, "#475569") + j211Bolt(84, 62, 1) + `<path d="M0 104 Q80 96 160 104 L160 120 L0 120 Z" fill="#475569"/>` + O.tree(140, 92, .5)),
  lightning: () => svgWrap("#312e81", O.cloud(80, 22, 1.4, "#475569") + j211Bolt(80, 66, 1.6) + spark(36, 70, .8, "#fde68a") + spark(126, 82, .7, "#fde68a") + `<path d="M0 108 Q80 100 160 108 L160 120 L0 120 Z" fill="#1e1b4b"/>`),
  fire: () => svgWrap("#fff1e6", ground("#e5e7eb") + `<rect x="50" y="90" width="60" height="8" rx="3" fill="#7c4a1e" transform="rotate(12 80 94)"/><rect x="50" y="90" width="60" height="8" rx="3" fill="#92400e" transform="rotate(-12 80 94)"/>` + j211Flame(80, 68, 1.4) + spark(40, 40, .7, "#fb923c") + spark(124, 34, .6, "#fb923c")),
  flashlight: () => svgWrap("#e0e7ff", `<polygon points="96,48 160,24 160,100 96,76" fill="#fde68a" opacity=".6"/>` + j211Flash(66, 62, 1.6) + star(134, 62, 5, "#fff")),
  "take a bath": () => svgWrap("#e0f2fe", `<rect x="0" y="0" width="160" height="74" fill="#dbeafe"/>` + kid(80, {y:122, eyes:"closed", mood:"smile"}) + `<rect x="22" y="74" width="116" height="30" rx="14" fill="#fff" stroke="#cbd5e1" stroke-width="2"/><rect x="34" y="102" width="8" height="10" fill="#cbd5e1"/><rect x="118" y="102" width="8" height="10" fill="#cbd5e1"/>` + [[40, 74, 7], [54, 70, 9], [70, 74, 6], [104, 72, 8], [120, 74, 6], [112, 62, 5]].map(([a, b, r]) => `<circle cx="${a}" cy="${b}" r="${r}" fill="#fff" stroke="#bae6fd" stroke-width="1.5"/>`).join("") + `<path d="M126 20 Q140 14 140 30" stroke="#94a3b8" stroke-width="4" fill="none" stroke-linecap="round"/>`),
  nap: () => svgWrap("#ede9fe", `<rect x="20" y="70" width="120" height="34" rx="10" fill="#a78bfa"/>` + kid(78, {y:104, s:.8, eyes:"closed", mood:"smile", tilt:-18}) + `<rect x="14" y="62" width="18" height="44" rx="8" fill="#8b5cf6"/><rect x="128" y="62" width="18" height="44" rx="8" fill="#8b5cf6"/><rect x="0" y="106" width="160" height="14" fill="#ddd6fe"/>` + j211Zzz(104, 40)),
  "fall asleep": () => svgWrap("#eef0ff", ground("#dcd8f5") + kid(62, {eyes:"closed", mood:"o", tilt:12, pose:"hold"}) + O.openBook(62, 88, .5) + j211Zzz(98, 46) + O.clock(134, 84, .6)),
  smell: () => svgWrap("#fff7ed", ground("#f3dfc3") + kid(46, {eyes:"closed", mood:"smile"}) + `<ellipse cx="114" cy="94" rx="28" ry="6" fill="#fff" stroke="#fed7aa" stroke-width="1.5"/>` + j211Cookie(104, 88, .6) + j211Cookie(124, 88, .6) + `<path d="M106 76 Q98 66 88 62 Q78 58 70 50 M122 74 Q114 60 100 56 Q88 52 72 44" stroke="#f59e0b" stroke-width="2" fill="none" stroke-dasharray="4 3"/>` + heart(86, 30, .6)),
  chocolate: () => svgWrap("#fdf2e9", grp(76, 62, 1, `<rect x="-44" y="-30" width="88" height="60" rx="5" fill="#6b3a1f"/>` + [0, 1, 2, 3].map(c => [0, 1, 2].map(r => `<rect x="${-40 + c * 21}" y="${-26 + r * 18}" width="18" height="15" rx="2" fill="#7c4423"/>`).join("")).join("") + `<path d="M14 -34 L50 -34 L50 34 L22 34 L30 20 L18 8 L28 -6 L16 -20 Z" fill="#ef4444"/><path d="M36 -34 V34" stroke="#fbbf24" stroke-width="3"/>`, -8) + heart(138, 24, .7)),
  echo: () => svgWrap("#e0f2fe", `<path d="M0 104 L40 40 L70 80 L104 26 L160 104 Z" fill="#94a3b8"/><path d="M104 26 L114 40 L94 40 Z" fill="#fff"/><path d="M40 40 L48 52 L32 52 Z" fill="#fff"/><rect x="0" y="104" width="160" height="16" fill="#a3d977"/>` + kid(26, {s:.6, mood:"open", pose:"cheer"}) + txt(62, 30, "HI!", 14, INK, 900) + txt(110, 60, "hi!", 11, "#475569") + txt(140, 82, "hi..", 9, "#64748b")),
  machine: () => svgWrap("#f1f5f9", ground("#e2e8f0") + `<rect x="44" y="20" width="72" height="84" rx="6" fill="#fff" stroke="#cbd5e1" stroke-width="2"/><rect x="44" y="20" width="72" height="16" rx="6" fill="#e2e8f0"/><circle cx="56" cy="28" r="3" fill="#22c55e"/><circle cx="66" cy="28" r="3" fill="#94a3b8"/><rect x="88" y="25" width="20" height="6" rx="2" fill="#94a3b8"/><circle cx="80" cy="68" r="24" fill="#cbd5e1"/><circle cx="80" cy="68" r="18" fill="#7dd3fc"/><path d="M64 70 Q72 62 80 70 T96 70" stroke="#fff" stroke-width="3" fill="none"/>` + spark(28, 40, .7, "#7dd3fc") + spark(134, 50, .6, "#7dd3fc")),
  stamp: () => svgWrap("#eef6ff", grp(80, 60, 1, `<rect x="-34" y="-40" width="68" height="80" fill="#fff"/>` + [-36, -27, -18, -9, 0, 9, 18, 27, 36].map(v => `<circle cx="-34" cy="${v}" r="3" fill="#eef6ff"/><circle cx="34" cy="${v}" r="3" fill="#eef6ff"/>`).join("") + [-28, -19, -10, -1, 8, 17, 26].map(v => `<circle cx="${v + 1}" cy="-40" r="3" fill="#eef6ff"/><circle cx="${v + 1}" cy="40" r="3" fill="#eef6ff"/>`).join("") + `<rect x="-26" y="-32" width="52" height="52" fill="#bfdbfe"/><circle cx="12" cy="-16" r="7" fill="#fbbf24"/><path d="M-26 20 L-8 -6 L4 8 L14 -2 L26 20 Z" fill="#22c55e"/>` + txt(0, 34, "$5", 10, "#ef4444"), 8)),
  comic: () => svgWrap("#fef9c3", `<rect x="22" y="14" width="116" height="92" rx="4" fill="#fff" stroke="#1f2937" stroke-width="2.5"/><path d="M80 14 V60 M22 60 H138 M100 60 V106" stroke="#1f2937" stroke-width="2.5"/>` + bubble(51, 36, "POW!", 44) + star(110, 38, 12, "#f59e0b") + txt(60, 90, "HA HA", 12, "#ef4444", 900) + heart(120, 86, .9)),
  puzzle: () => svgWrap("#f0fdf4", [[60, 48, "#60a5fa"], [90, 48, "#f87171"], [60, 78, "#fbbf24"], [114, 92, "#34d399"]].map(([a, b, c]) => grp(a, b, 1, j211Piece(c))).join("") + spark(124, 30, .8)),
  bake: () => svgWrap("#fff4e6", ground("#f3dfc3") + kid(54, {pose:"hold", mood:"open", acc:["chef", "apron"]}) + `<rect x="34" y="82" width="42" height="5" rx="2" fill="#9ca3af"/>` + j211Cookie(44, 78, .38) + j211Cookie(55, 78, .38) + j211Cookie(66, 78, .38) + `<rect x="100" y="44" width="50" height="58" rx="5" fill="#6b7280"/><rect x="106" y="58" width="38" height="30" rx="3" fill="#fb923c" opacity=".8"/><circle cx="112" cy="51" r="2.5" fill="#fde68a"/><circle cx="122" cy="51" r="2.5" fill="#fde68a"/><rect x="108" y="92" width="34" height="4" rx="2" fill="#9ca3af"/>`),
  cookie: () => svgWrap("#fff7ed", `<ellipse cx="80" cy="84" rx="60" ry="18" fill="#fff" stroke="#fed7aa" stroke-width="2"/>` + j211Cookie(56, 76, 1.1) + j211Cookie(88, 72, 1.2) + j211Cookie(114, 82, 1) + j211Cookie(76, 90, 1) + `<path d="M60 44 Q56 36 62 28 M80 40 Q76 32 82 24 M100 44 Q96 36 102 28" stroke="#d6a76a" stroke-width="2" fill="none" stroke-linecap="round"/>`),
  fishing: () => svgWrap("#e0f2fe", `<rect x="0" y="78" width="160" height="42" fill="#38bdf8"/><path d="M58 82 Q78 78 98 82 T138 82 T160 82" stroke="#fff" stroke-width="2" fill="none"/><path d="M0 72 L58 72 L58 120 L0 120 Z" fill="#a3d977"/>` + kid(32, {y:74, pose:"hold"}) + `<path d="M38 52 L112 24" stroke="#7c4a1e" stroke-width="3" stroke-linecap="round"/><path d="M112 24 L112 92" stroke="#94a3b8" stroke-width="1"/><path d="M104 98 Q112 90 122 98 Q112 106 104 98 Z M122 98 L128 93 L128 103 Z" fill="#f97316"/>` + O.sun(140, 20, .5)),
  nervous: () => svgWrap("#f1f5f9", ground("#e2e8f0") + kid(66, {eyes:"worry", mood:"wavy", acc:["sweat"], pose:"hold"}) + `<rect x="100" y="48" width="40" height="50" rx="3" fill="#fff" stroke="#cbd5e1" stroke-width="1.5"/>` + txt(120, 64, "TEST", 9, "#ef4444") + `<path d="M108 74 H132 M108 82 H132 M108 90 H124" stroke="#cbd5e1" stroke-width="2"/><path d="M14 40 h8 l4 -8 l5 16 l4 -8 h8" stroke="#ef4444" stroke-width="2.5" fill="none" stroke-linejoin="round"/>`),
  proud: () => svgWrap("#fff7e0", ground() + kid(70, {pose:"thumb", mood:"open", oc:"#f59e0b"}) + `<path d="M64 69 L70 82 L76 69" stroke="#ef4444" stroke-width="3" fill="none"/><circle cx="70" cy="86" r="6" fill="#fbbf24" stroke="#f59e0b" stroke-width="1.5"/>` + star(118, 40, 9) + spark(32, 34, .9) + spark(130, 76, .7)),
  lonely: () => svgWrap("#e2e8f0", ground("#cbd5e1") + `<rect x="46" y="84" width="68" height="5" rx="2" fill="#94a3b8"/><rect x="50" y="89" width="4" height="15" fill="#64748b"/><rect x="106" y="89" width="4" height="15" fill="#64748b"/>` + kid(80, {s:.8, eyes:"worry", mood:"wavy", oc:"#64748b"}) + O.cloud(36, 28, .6, "#94a3b8") + O.cloud(128, 22, .5, "#94a3b8")),
  shout: () => svgWrap("#fff1f2", ground() + kid(52, {mood:"open", eyes:"worry", pose:"cheer"}) + `<path d="M80 52 Q88 58 80 64 M88 46 Q100 58 88 70 M96 40 Q112 58 96 76" stroke="#ef4444" stroke-width="3" fill="none" stroke-linecap="round"/>` + txt(132, 62, "HEY!", 14, "#ef4444", 900))
});
/* ---------- 記憶小提示 ---------- */
Object.assign(MEMO, {
  earthquake:"earth（地球）+ quake（搖晃）＝地球在搖晃，就是地震！",
  blackout:"black（黑）+ out（熄滅）＝燈全熄了一片黑，就是停電。",
  accident:"accident 唸起來像「愛可惜等」：發生意外真可惜，只好在原地等救護車。",
  noise:"noise 和 nose（鼻子）只差一個 i：鼻子打噴嚏，發出好大的噪音！",
  fire:"fire 唸起來像「發矮」：火燒過的地方都變矮了。firefighter 就是消防員。",
  storm:"storm 唸起來像「斯通」：暴風雨來時，石頭（stone）都被吹得滾來滾去。",
  thunder:"thunder 唸起來像「桑德」：雷聲響起，桑樹都嚇得抖了一下。",
  lightning:"light（光）+ ning：天空突然一道光，就是閃電。注意中間沒有 e！",
  flashlight:"flash（閃一下）+ light（燈）＝一按就亮的燈，就是手電筒。",
  shake:"shake 唸起來像「謝課」：老師說謝謝下課，大家開心到搖來搖去。過去式是 shook。",
  happen:"happen 開頭是 hap，跟 happy 一樣：好事發生了，大家都很 happy！",
  suddenly:"sudden（突然的）+ ly＝突然地。唸起來像「傻等哩」：傻傻地等，突然就來了！",
  ring:"ring 也是「戒指」：電話響了（ring），原來是要通知你拿戒指（ring）。過去式是 rang。",
  shout:"shout 裡有 out（出去）：把聲音大聲送出去，就是大叫。",
  hurry:"hurry 唸起來像「喝瑞」：喝完趕快走！Hurry up! 就是「快一點！」",
  while:"while 唸起來像「歪喔」：一邊歪著頭一邊做事，表示「在……的同時」。",
  "fall asleep":"fall（掉下去）+ asleep（睡著的）＝掉進夢鄉，就是睡著了。",
  "turn off":"turn（轉）+ off（關）＝把開關轉到關，就是關掉；相反是 turn on。",
  "take a bath":"bath（浴缸裡的澡）和 bathroom（浴室）同一家：在浴室的浴缸泡澡。",
  nap:"nap 倒過來拼是 pan（平底鍋）：吃完一鍋飯，飽到小睡一下。",
  smell:"smell 裡有 s 和 m，像鼻子在 s～m～地用力聞。",
  taste:"taste 唸起來像「鐵斯特」：嚐一嚐，有沒有鐵的味道？",
  sound:"sound 唸起來像「上的」：樓上的聲音聽起來好吵！",
  feel:"feel 唸起來像「飛哦」：心情好到覺得要飛起來了！",
  delicious:"delicious 唸起來像「低力穴死」：太好吃了，吃到低頭猛吃！",
  noisy:"noise（噪音）去 e 加 y＝noisy（吵鬧的）：充滿噪音的地方就是吵鬧的。",
  soft:"soft 唸起來像「搜夫特」：搜一搜軟軟的沙發（sofa），s-o 開頭一起記。",
  hard:"hard 唸起來像「哈的」：石頭太硬，咬下去只能哈哈苦笑。",
  sweet:"sweet 有兩個 e，像兩顆糖果並排：甜甜的！",
  sour:"sour 唸起來像「燒餓」：吃到酸的，酸到眼睛都瞇起來了。",
  salty:"salt（鹽）+ y＝salty（鹹的）：加了太多鹽，就變鹹了。",
  spicy:"spice（香料）去 e 加 y＝spicy（辣的）：香料加太多，辣到噴火！",
  smooth:"smooth 唸起來像「司木z」：木頭磨得很光滑，摸起來滑溜溜。",
  terrible:"terrible 和 terror（恐怖）同一家：恐怖的、糟糕的。",
  strange:"strange 唸起來像「斯戳應這」：那個陌生人（stranger）怪怪的。",
  loud:"loud 唸起來像「勞的」：工人勞動的聲音好大聲！副詞是 loudly。",
  fresh:"fresh 唸起來像「付雷許」：剛從田裡拔出來，新鮮得像在打雷一樣有活力！",
  chocolate:"chocolate 唸起來像「巧克力」：中文的巧克力就是從它來的！ch 唸 /tʃ/。",
  echo:"echo 唸起來像「愛口」：對著山谷喊，山谷也愛跟著開口，就是回音。ch 唸 /k/。",
  machine:"machine 唸起來像「麼勳」：法文來的字，ch 唸「噓」，機器運轉「噓～」地響。",
  collect:"col（一起）+ lect（挑選）：把東西挑出來放在一起，就是收集。",
  comic:"comic 和 comedy（喜劇）同一家：讓人哈哈笑的漫畫。",
  stamp:"stamp 也有「跺腳」的意思：郵票蓋郵戳時「碰」一聲，像在跺腳。",
  model:"model 唸起來像「媽豆」：媽媽用豆子做了一個小模型。",
  cartoon:"car（車）+ toon：卡通裡的車子會說話！唸起來就像中文「卡通」。",
  puzzle:"puzzle 中間有兩個 z，像兩片拼圖卡在一起：zz！",
  magic:"magic 唸起來像「媽擊」：魔術師一擊掌，東西就消失了！",
  bake:"bake 唸起來像「貝克」：貝克師傅在烤麵包。bakery 是麵包店。",
  cookie:"cook（煮、做菜）+ ie：做出來的小點心，就是餅乾！",
  fishing:"fish（魚）+ ing＝在抓魚，就是釣魚。go fishing 是去釣魚。",
  nervous:"nerve（神經）+ ous：神經繃得緊緊的，就是緊張的。",
  calm:"calm 唸起來像「卡姆」，l 不發音：冷靜到連 l 都安靜不出聲。",
  proud:"proud 裡有 ou，像驕傲地抬頭說「喔～」：我好棒！",
  upset:"up（上）+ set（放）：心情被翻得亂七八糟，就是難過、不高興。",
  lonely:"lone（單獨）+ ly：一個人單獨在家，好寂寞。小心！lonely 是形容詞。",
  afraid:"afraid 唸起來像「餓富瑞的」：害怕到肚子都餓了。be afraid of＝害怕……。",
  unhappy:"un（不）+ happy（快樂的）＝不快樂的。",
  unlock:"un（相反動作）+ lock（鎖上）＝打開鎖。",
  rewrite:"re（再一次）+ write（寫）＝重寫。w 不發音喔！",
  replay:"re（再一次）+ play（播放）＝重播。",
  dislike:"dis（不）+ like（喜歡）＝不喜歡。",
  disagree:"dis（不）+ agree（同意）＝不同意。",
  disappear:"dis（相反）+ appear（出現）＝消失。一個 s、兩個 p 要記好。",
  careful:"care（小心）+ ful（充滿）＝充滿小心，就是小心的。ful 只有一個 l！",
  careless:"care（小心）+ less（沒有）＝沒有小心，就是粗心的。",
  helpful:"help（幫助）+ ful（充滿）＝充滿幫助，就是有幫助的。",
  useful:"use（用處）+ ful（充滿）＝充滿用處，就是有用的。",
  useless:"use（用處）+ less（沒有）＝沒有用處，就是沒用的。",
  colorful:"color（顏色）+ ful（充滿）＝充滿顏色，就是色彩繽紛的。",
  hopeless:"hope（希望）+ less（沒有）＝沒有希望的。",
  peaceful:"peace（和平）+ ful（充滿）＝充滿和平，就是平靜的。"
});
registerUnit("j2-1-1", {name:"國二 上學期 第一次段考", sub:"過去進行式 was / were + V-ing、when / while、連綴動詞 + 形容詞、對等連接詞 and / but / or / so", words:J2_1_1_WORDS, grammar:J2_1_1_GRAMMAR, quiz:J2_1_1_QUIZ, classes:Object.assign({}, J2_1_1_CLASS, J2_1_1_PHONICS_CLASS), phonics:J2_1_1_PHONICS});
})();
