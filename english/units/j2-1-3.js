/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   內容資料：國二上學期 期末考（通用範圍）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 文法說明] x3], 字根(不用), 說明(不用), 概念卡 "emoji|標籤"]
   主題：人生經驗與旅遊、國家與國籍、職業、過去分詞、現在完成式的時間詞
   ========================================================= */
const J2_1_3_WORDS = [
/* ---------- 人生經驗與旅遊 ---------- */
["experience","n.","經驗；經歷",[
 ["Traveling abroad is a great experience.","出國旅行是很棒的經驗。","Traveling abroad 是動名詞當主詞，看成一件事，所以用單數 is。experience 當「一次經歷」時可以數，前面用 a。"],
 ["Have you ever had an interesting experience on a trip?","你曾經在旅行中有過有趣的經歷嗎？","Have you ever + 過去分詞？問「曾經……嗎」。have 的過去分詞是 had。interesting 是母音開頭，前面用 an。"],
 ["She has a lot of experience with kids.","她很有和小孩相處的經驗。","experience 當「累積的經驗」時不可數，用 a lot of，不加 s。這裡的 has 是「有」，是一般動詞。"]],null,null,"🌟|經驗"],
["abroad","adv.","在國外；到國外",[
 ["My uncle has lived abroad for ten years.","我叔叔已經住在國外十年了。","has lived 是現在完成式；for + 一段時間（ten years），表示從以前一直持續到現在。"],
 ["Have you ever been abroad?","你曾經出過國嗎？","been abroad 是「去過國外」。abroad 是副詞，前面不加 to，不能說 been to abroad。"],
 ["Many students want to study abroad.","很多學生想出國念書。","want to + 原形 study。study abroad 是「出國留學」，abroad 前面不用介系詞。"]],null,null,"🧳|出國"],
["airport","n.","機場",[
 ["We have just arrived at the airport.","我們剛剛到機場。","have just + 過去分詞，表示「剛剛做完」。just 放在 have 和過去分詞中間。arrive at + 小地點。"],
 ["The airport is very crowded during Chinese New Year.","農曆新年期間機場非常擁擠。","during 是「在……期間」。crowded 是形容詞「擁擠的」，前面要有 be 動詞 is。"],
 ["Dad has gone to the airport to pick up Grandma.","爸爸去機場接奶奶了。","has gone to 表示「已經去了某地，人現在不在這裡」。pick up 是「接（人）」。"]]],
["plane","n.","飛機",[
 ["I have never taken a plane before.","我以前從來沒搭過飛機。","have never + 過去分詞，表示「從來沒有……過」。take 的過去分詞是 taken；before 放句尾表示「以前」。"],
 ["The plane has already taken off.","飛機已經起飛了。","has already + 過去分詞，表示「已經……了」。take off 是「起飛」。主詞 The plane 是單數，用 has。"],
 ["We went to Japan by plane last summer.","我們去年夏天搭飛機去日本。","by + 交通工具（中間不加 a），表示搭乘方式。last summer 是明確的過去時間，用過去式 went。"]]],
["flight","n.","班機；航班",[
 ["Our flight leaves at nine thirty.","我們的班機九點半起飛。","時刻表上排定的事可以用現在簡單式。主詞 Our flight 是第三人稱單數，leave 加 s。"],
 ["Have you checked the flight time yet?","你查過班機時間了沒？","yet 放在疑問句句尾，意思是「已經……了嗎」。check 的過去分詞是 checked。"],
 ["It was a long flight. I'm so tired.","那是一趟很長的飛行，我好累。","已經結束的那趟飛行用過去式 was；現在的感覺用現在式 am。"]]],
["foreign","adj.","外國的",[
 ["Have you ever made any foreign friends?","你曾經交過外國朋友嗎？","Have you ever + 過去分詞？make 的過去分詞是 made。疑問句裡常用 any。"],
 ["English is a foreign language for us.","英文對我們來說是外語。","foreign 是形容詞，放在名詞 language 前面。foreign 是子音開頭，用 a。"],
 ["Many foreign tourists have visited Taipei 101.","很多外國觀光客參觀過台北 101。","主詞 tourists 是複數，用 have + 過去分詞 visited，說到現在為止的經驗。"]],null,null,"🌐|外國的"],
["culture","n.","文化",[
 ["I'm interested in Japanese culture.","我對日本文化有興趣。","be interested in + 名詞，表示「對……有興趣」。culture 在這裡是不可數名詞，不加 a。"],
 ["She has learned a lot about Korean culture since she moved to Seoul.","自從她搬到首爾，她學到很多韓國文化。","since 後面可以接一個過去式的句子（she moved to Seoul），主要的句子用現在完成式 has learned。"],
 ["Food is an important part of a culture.","食物是一個文化很重要的一部分。","important 是母音開頭，前面用 an。說「一種文化」時，culture 前面可以用 a。"]],null,null,"🏮|文化"],
["country","n.","國家",[
 ["How many countries have you been to?","你去過幾個國家？","How many + 複數名詞，country 字尾 y 改 i 加 es。have been to 表示「去過（已經回來）」。"],
 ["Japan is a beautiful country.","日本是一個美麗的國家。","country 是可數名詞，單數前面要有 a。"],
 ["He has lived in three countries since 2015.","從 2015 年到現在，他住過三個國家。","since + 時間點 2015，用現在完成式 has lived。"]],null,null,"🗺️|國家"],
["guide","n.","導遊；嚮導",[
 ["Our guide has worked in Kyoto for ten years.","我們的導遊在京都工作十年了。","for ten years 是一段時間，搭配現在完成式 has worked，表示一直做到現在。"],
 ["The guide showed us around the old town yesterday.","導遊昨天帶我們參觀老街區。","show + 人 + around 是「帶某人參觀」。yesterday 是明確的過去時間，用過去式 showed。"],
 ["Has the guide told you the plan yet?","導遊告訴你行程了嗎？","tell 的三態是 tell - told - told。yet 放在疑問句句尾，問「已經……了嗎」。"]],null,null,"🚩|導遊"],
["language","n.","語言",[
 ["How many languages can you speak?","你會說幾種語言？","How many + 複數名詞 languages。can 後面接原形 speak。"],
 ["He has studied Japanese for three years. It's his second language.","他學日文三年了，那是他的第二語言。","has studied + for three years，表示從三年前學到現在，而且還在學。"],
 ["Chinese is not an easy language.","中文不是一種簡單的語言。","easy 是母音開頭，前面用 an。語言名稱第一個字母要大寫。"]],null,null,"🗣️|語言"],
["tourist","n.","觀光客",[
 ["Many tourists come to Jiufen every weekend.","每個週末都有很多觀光客來九份。","every weekend 表示習慣，用現在簡單式。tourists 是複數，come 不加 s。"],
 ["The tourist has lost his passport.","那位觀光客把護照弄丟了。","lose 的過去分詞是 lost。用現在完成式表示「弄丟了，結果現在還找不到」。"],
 ["Are you a tourist here? — Yes, I'm from Korea.","你是來這裡觀光的嗎？——是的，我來自韓國。","be from + 國家，表示「來自……」。"]]],
["hotel","n.","飯店；旅館",[
 ["We have stayed at this hotel twice.","我們住過這家飯店兩次。","have stayed 說經驗；twice 是「兩次」，常和現在完成式一起用。stay at + 飯店。"],
 ["Our hotel is near the beach.","我們的飯店在海灘附近。","near 是「在……附近」。主詞 Our hotel 是單數，用 is。"],
 ["They checked into the hotel two hours ago.","他們兩個小時前辦好入住。","ago 是明確的過去時間，要用過去式 checked，不能用現在完成式。check into 是「辦理入住」。"]]],
["souvenir","n.","紀念品",[
 ["I bought some souvenirs for my classmates.","我買了一些紀念品給同學。","bought 是 buy 的過去式。some 後面接複數 souvenirs。buy + 東西 + for + 人。"],
 ["Have you bought any souvenirs yet?","你買紀念品了沒？","yet 放在疑問句句尾，問「已經……了嗎」。buy 的過去分詞也是 bought。"],
 ["This key chain is a souvenir from Japan.","這個鑰匙圈是從日本帶回來的紀念品。","a souvenir from + 地方，表示「從某地帶回來的紀念品」。key chain 是「鑰匙圈」。"]],null,null,"🎁|紀念品"],
["famous","adj.","有名的",[
 ["Tainan is famous for its food.","台南以美食出名。","be famous for + 名詞，表示「因為……而有名」。its 是「它的」，不要寫成 it's。"],
 ["Have you ever met a famous person?","你曾經遇過名人嗎？","meet 的過去分詞是 met。Have you ever...? 問經驗。"],
 ["Kyoto has many famous temples.","京都有很多有名的寺廟。","Kyoto 是單數地名，用 has。形容詞 famous 放在名詞 temples 前面。"]],null,null,"⭐|有名的"],
["island","n.","島",[
 ["Taiwan is an island.","台灣是一個島。","island 開頭的 i 唸 /aɪ/，是母音，前面用 an。"],
 ["Have you been to Penghu? It's a beautiful island.","你去過澎湖嗎？那是一座美麗的島。","have been to + 地方，問「去過……嗎」。"],
 ["They have lived on the island since 2010.","他們從 2010 年起就住在那座島上。","在島上用 on the island。since + 時間點 2010，搭配現在完成式。"]]],
["visitor","n.","訪客；遊客",[
 ["Many visitors have come to see the lanterns.","很多遊客來看花燈。","主詞 visitors 是複數，用 have + 過去分詞。come 的三態是 come - came - come，過去分詞和原形一樣。"],
 ["We had some visitors from Japan last week.","上週我們有幾位從日本來的訪客。","last week 是明確的過去時間，用過去式 had。"],
 ["Are you a visitor here? — Yes, I've just arrived.","你是來這裡參觀的嗎？——是的，我剛到。","I've just arrived 是現在完成式，I've = I have，just 表示「剛剛」。"]],null,null,"🙋|訪客"],
/* ---------- 國家與國籍 ---------- */
["Japan","n.","日本",[
 ["Have you ever been to Japan?","你去過日本嗎？","Have you ever been to + 地方？問「曾經去過……嗎」。國家名第一個字母大寫。"],
 ["Tokyo is the capital of Japan.","東京是日本的首都。","capital 是「首都」。of 表示「……的」。"],
 ["My cousin has lived in Japan since last year.","我表哥從去年起就住在日本。","since + last year（時間點），用現在完成式 has lived。注意 since last year 不是過去式的時間詞。"]]],
["Japanese","adj./n.","日本的；日本人；日語",[
 ["Ken is Japanese. He comes from Osaka.","Ken 是日本人，他來自大阪。","Japanese 當形容詞，表示國籍：He is Japanese.。come from = be from，主詞 He 用 comes。"],
 ["I have studied Japanese for two years.","我學日文兩年了。","Japanese 也可以指「日語」。語言名稱前面不加 the。for + 一段時間。"],
 ["Have you ever eaten Japanese food?","你吃過日本料理嗎？","eat 的過去分詞是 eaten。Japanese 放在名詞 food 前面當形容詞。"]]],
["Korea","n.","韓國",[
 ["Seoul is the capital of Korea.","首爾是韓國的首都。","國家名第一個字母大寫。the capital of + 國家，表示「某國的首都」。"],
 ["She has gone to Korea. She isn't here now.","她去韓國了，她現在不在這裡。","has gone to 表示「人已經去了，現在不在這裡」。"],
 ["We visited Korea three years ago.","我們三年前去過韓國。","three years ago 是明確的過去時間，所以用過去式 visited，不用現在完成式。"]]],
["Korean","adj./n.","韓國的；韓國人；韓語",[
 ["My favorite singer is Korean.","我最喜歡的歌手是韓國人。","Korean 當形容詞表示國籍，放在 be 動詞後面。"],
 ["Have you ever watched a Korean drama?","你看過韓劇嗎？","Korean drama 是「韓劇」。watch 是規則動詞，過去分詞是 watched。"],
 ["He can speak a little Korean.","他會說一點韓語。","a little + 不可數名詞。語言名稱前面不加 the。"]]],
["America","n.","美國；美洲",[
 ["My aunt has lived in America for twenty years.","我阿姨住在美國二十年了。","for + 一段時間（twenty years），用 has lived 表示一直住到現在。"],
 ["Have you been to America before?","你以前去過美國嗎？","before 放句尾，表示「以前」，常和現在完成式一起用。"],
 ["America is a big country.","美國是一個很大的國家。","形容詞 big 放在名詞 country 前面；a 放在最前面：a big country。"]]],
["American","adj./n.","美國的；美國人",[
 ["Tom is American. He's from New York.","湯姆是美國人，他來自紐約。","American 當形容詞表示國籍。He's = He is，後面接 from，是「來自」。"],
 ["Have you ever tried American pancakes?","你吃過美式鬆餅嗎？","try 的過去分詞是 tried：子音 + y 結尾，y 改 i 加 ed。"],
 ["My English teacher is an American.","我的英文老師是美國人。","American 當名詞「一個美國人」時，是母音開頭，要用 an。"]]],
["France","n.","法國",[
 ["Paris is in France.","巴黎在法國。","在某個國家裡面，用 in + 國家。"],
 ["Have you ever been to France? — No, I haven't.","你去過法國嗎？——沒有。","Have 開頭的問句用 have 回答：No, I haven't.，不能用 No, I don't.。"],
 ["They went to France last summer.","他們去年夏天去了法國。","last summer 是過去時間，用過去式 went。"]]],
["French","adj./n.","法國的；法國人；法語",[
 ["French bread is long and hard.","法國麵包又長又硬。","French 當形容詞放在名詞 bread 前面。bread 是不可數名詞，用 is。"],
 ["She has learned French since she was ten.","她從十歲起就在學法文。","since 後面的句子用過去式 she was ten，主要句子用現在完成式 has learned。"],
 ["Is your new classmate French?","你的新同學是法國人嗎？","be 動詞的疑問句把 Is 移到句首。French 當形容詞表示國籍。"]]],
["Germany","n.","德國",[
 ["Germany is in Europe.","德國在歐洲。","Europe 是「歐洲」。在某洲用 in。"],
 ["My dad has been to Germany three times.","我爸爸去過德國三次。","three times 是「三次」，說經驗的次數，常和現在完成式一起用。"],
 ["My brother is going to study in Germany next year.","我哥哥明年要去德國念書。","next year 是未來時間，用 be going to + 原形 study。"]]],
["German","adj./n.","德國的；德國人；德語",[
 ["He speaks German and English.","他會說德語和英語。","主詞 He 是第三人稱單數，speak 加 s。語言名稱第一個字母大寫。"],
 ["Have you ever had German sausages?","你吃過德國香腸嗎？","have 也可以表示「吃」，它的過去分詞是 had，所以是 have had。"],
 ["Our new teacher is German.","我們的新老師是德國人。","German 當形容詞表示國籍。注意 German 是「德國的」，Germany 才是「德國」。"]]],
["Canada","n.","加拿大",[
 ["Canada is very cold in winter.","加拿大冬天非常冷。","季節前面用 in：in winter。cold 是形容詞，前面要有 be 動詞。"],
 ["My cousin has studied in Canada since 2023.","我表姊從 2023 年起就在加拿大念書。","since + 時間點 2023，搭配現在完成式 has studied。"],
 ["We flew to Canada last July.","我們去年七月飛去加拿大。","flew 是 fly 的過去式（fly - flew - flown）。last July 是過去時間，用過去式。"]]],
["Canadian","adj./n.","加拿大的；加拿大人",[
 ["Emma is Canadian. She lives in Toronto.","艾瑪是加拿大人，她住在多倫多。","Canadian 當形容詞表示國籍。主詞 She 用 lives。"],
 ["I have never met a Canadian before.","我以前從來沒遇過加拿大人。","Canadian 當名詞「一個加拿大人」，是子音開頭，用 a。have never met 表示「從來沒遇過」。"],
 ["Canadian maple syrup is very sweet.","加拿大楓糖漿很甜。","maple syrup 是「楓糖漿」，不可數，用 is。"]]],
["Taiwan","n.","台灣",[
 ["Taiwan is famous for its night markets.","台灣以夜市聞名。","be famous for + 名詞。its 是「它的」。"],
 ["Lisa has lived in Taiwan for five years.","Lisa 住在台灣五年了。","for + 一段時間，用現在完成式 has lived，表示到現在還住在台灣。"],
 ["Welcome to Taiwan!","歡迎來到台灣！","Welcome to + 地方，表示「歡迎來到……」。"]]],
["Taiwanese","adj./n.","台灣的；台灣人；台語",[
 ["I am Taiwanese.","我是台灣人。","Taiwanese 當形容詞表示國籍，放在 be 動詞後面。"],
 ["Have you ever tried Taiwanese beef noodles?","你吃過台灣的牛肉麵嗎？","try 的過去分詞是 tried。beef noodles 是「牛肉麵」。"],
 ["My grandma speaks Taiwanese at home.","我奶奶在家說台語。","Taiwanese 也可以指「台語」。主詞 My grandma 是第三人稱單數，speak 加 s。"]]],
/* ---------- 職業 ---------- */
["engineer","n.","工程師",[
 ["My father is an engineer.","我爸爸是工程師。","engineer 是母音開頭，前面用 an。說職業時，前面要有 a 或 an。"],
 ["She has worked as an engineer for ten years.","她當工程師已經十年了。","work as + 職業，表示「擔任……」。for ten years 搭配現在完成式。"],
 ["Do you want to be an engineer?","你想當工程師嗎？","want to be + 職業，表示「想成為……」。"]],null,null,"👷|工程師"],
["pilot","n.","機師；飛行員",[
 ["The pilot has flown to many countries.","這位機師飛過很多國家。","fly 的過去分詞是 flown（fly - flew - flown）。"],
 ["I want to be a pilot in the future.","我將來想當機師。","in the future 是「將來」。want to + 原形 be。"],
 ["Has the pilot arrived yet?","機師到了嗎？","Has + 主詞 + 過去分詞 ... yet? 問「已經……了嗎」。主詞 the pilot 是單數，用 Has。"]]],
["reporter","n.","記者",[
 ["The reporter has talked to many famous people.","這位記者採訪過很多名人。","has talked 是現在完成式，說到現在為止的經驗。talk to 是「和……說話」。"],
 ["A reporter is asking the singer some questions now.","一位記者現在正在問那位歌手一些問題。","now 表示此刻正在發生，用現在進行式 is asking。"],
 ["My sister became a reporter two years ago.","我姊姊兩年前成為記者。","become 的過去式是 became。two years ago 是明確的過去時間，用過去式。"]]],
["writer","n.","作家",[
 ["J. K. Rowling is a famous writer.","J. K. 羅琳是一位有名的作家。","writer 是 write + r，「寫東西的人」。famous 放在名詞前面。"],
 ["The writer has written ten books.","這位作家已經寫了十本書。","write 的過去分詞是 written，t 要重複兩個。"],
 ["I want to be a writer when I grow up.","我長大想當作家。","when I grow up 是「當我長大的時候」。"]]],
["singer","n.","歌手",[
 ["She is my favorite singer.","她是我最喜歡的歌手。","favorite 是「最喜歡的」，放在名詞前面。"],
 ["The singer has sung this song many times.","這位歌手唱過這首歌很多次。","sing 的過去分詞是 sung（sing - sang - sung）。many times 是「很多次」。"],
 ["The singer sang three songs last night.","那位歌手昨晚唱了三首歌。","last night 是過去時間，用過去式 sang。"]]],
["artist","n.","藝術家；畫家",[
 ["The artist has painted many pictures of Taiwan.","這位畫家畫過很多台灣的風景。","paint 是規則動詞，過去分詞是 painted。"],
 ["My uncle is an artist.","我叔叔是藝術家。","artist 是母音開頭，用 an。"],
 ["Is she an artist or a writer?","她是藝術家還是作家？","A or B 的選擇疑問句，不能用 Yes 或 No 回答。"]]],
["scientist","n.","科學家",[
 ["Scientists have learned a lot about the moon.","科學家已經對月球了解很多了。","主詞 Scientists 是複數，用 have + 過去分詞 learned。"],
 ["I want to be a scientist.","我想當科學家。","science（科學）+ ist（……的人）＝ scientist。"],
 ["The scientist works in a lab every day.","這位科學家每天都在實驗室工作。","every day 表示習慣，用現在簡單式。主詞是單數，work 加 s。lab 是「實驗室」。"]]],
["dentist","n.","牙醫",[
 ["I have just been to the dentist.","我剛去看過牙醫。","have been to the dentist 是「去看過牙醫（已經回來）」。just 是「剛剛」。"],
 ["My mom is a dentist. She checks people's teeth.","我媽媽是牙醫，她幫人檢查牙齒。","teeth 是 tooth 的複數。主詞 She 用 checks。"],
 ["I went to the dentist last Friday.","我上週五去看牙醫。","last Friday 是明確的過去時間，用過去式 went。"]]],
["firefighter","n.","消防員",[
 ["Firefighters are very brave.","消防員都很勇敢。","主詞 Firefighters 是複數，用 are。brave 是「勇敢的」。"],
 ["The firefighters have already put out the fire.","消防員已經把火撲滅了。","put 三態同形，過去分詞也是 put。put out 是「撲滅」。already 放在 have 和過去分詞中間。"],
 ["He has been a firefighter since 2018.","他從 2018 年起就當消防員。","has been + 職業 + since，表示從那時候到現在一直是。"]]],
["lawyer","n.","律師",[
 ["My aunt is a lawyer.","我阿姨是律師。","說職業時前面要加 a 或 an。lawyer 是子音開頭，用 a。"],
 ["He has been a lawyer for twenty years.","他當律師二十年了。","been 是 be 的過去分詞。has been + 職業 + for + 一段時間。"],
 ["Do you want to be a lawyer like your father?","你想像你爸爸一樣當律師嗎？","like 在這裡是介系詞「像……一樣」。"]],null,null,"⚖️|律師"],
["actor","n.","演員",[
 ["He is a famous actor and singer.","他是一位有名的演員兼歌手。","a famous actor and singer 指同一個人，所以只用一個 a。"],
 ["I have seen that actor in a movie before.","我以前在一部電影裡看過那個演員。","have seen + before，說以前的經驗。"],
 ["The actor came to Taipei last week.","那位演員上週來台北。","last week 是過去時間，用過去式 came。"]],null,null,"🎭|演員"],
["job","n.","工作",[
 ["What does your mother do? — She's a nurse. She loves her job.","你媽媽做什麼工作？——她是護理師，她很愛她的工作。","問職業可以用 What does + 主詞 + do?。She's = She is。"],
 ["He has had this job for three years.","這份工作他做三年了。","have 的過去分詞是 had。has had 表示「已經擁有（一段時間）」。"],
 ["Good job!","做得好！","Good job! 是稱讚別人的常用語。"]],null,null,"💼|工作"],
/* ---------- 常用動詞的過去分詞 ---------- */
["been","p.p.","（be 的過去分詞）是；去過",[
 ["I have been to Hong Kong twice.","我去過香港兩次。","have been to + 地方：去過，而且已經回來了。"],
 ["It has been cold since Monday.","從星期一起天氣就一直很冷。","been 是 be 的過去分詞；has been + 形容詞，表示從過去持續到現在的狀態。"],
 ["Where have you been? I've waited for you for an hour!","你跑去哪了？我等你一個小時了！","Where have you been? 是「你剛剛去哪裡了」。I've = I have。"]],null,null,"✅|去過"],
["gone","p.p.","（go 的過去分詞）去了",[
 ["Mom has gone to the market. She'll be back soon.","媽媽去市場了，她很快就回來。","has gone to：人已經去了，現在不在這裡。She'll = She will。"],
 ["Where is Ben? — He has gone home.","阿班呢？——他回家了。","home 是副詞，前面不加 to：gone home。"],
 ["The summer vacation has gone so fast!","暑假過得好快！","gone 也有「過去了、不見了」的意思。"]],null,null,"🏃|去了"],
["done","p.p.","（do 的過去分詞）做完",[
 ["Have you done your homework yet?","你寫完功課了沒？","do 的三態是 do - did - done。yet 放在疑問句句尾。"],
 ["I have already done the dishes.","我已經洗好碗了。","do the dishes 是「洗碗」。already 放在 have 和過去分詞中間。"],
 ["Well done!","做得好！","Well done! 是稱讚別人的固定說法。"]],null,null,"✔️|做完"],
["seen","p.p.","（see 的過去分詞）看見",[
 ["Have you seen my phone?","你有看到我的手機嗎？","see 的三態是 see - saw - seen。問「有沒有看到」常用現在完成式。"],
 ["I have never seen snow.","我從來沒看過雪。","have never + 過去分詞，表示「從來沒……過」。"],
 ["We have seen this movie three times.","這部電影我們看過三次。","three times 說次數，搭配現在完成式。"]],null,null,"👀|看過"],
["eaten","p.p.","（eat 的過去分詞）吃",[
 ["Have you ever eaten stinky tofu?","你吃過臭豆腐嗎？","eat 的三態是 eat - ate - eaten。Have you ever...? 問經驗。"],
 ["I'm not hungry. I have just eaten lunch.","我不餓，我剛吃過午餐。","have just eaten 表示剛吃完，所以現在不餓，和現在有關係。"],
 ["The cat hasn't eaten its food yet.","貓還沒吃牠的食物。","hasn't + 過去分詞 + yet 表示「還沒」。its 是「牠的」，不要寫成 it's。"]],null,null,"🍽️|吃過了"],
["taken","p.p.","（take 的過去分詞）拿；搭乘",[
 ["Have you ever taken the MRT in Taipei?","你在台北搭過捷運嗎？","take 的三態是 take - took - taken。take 也可以表示「搭乘」。"],
 ["Someone has taken my umbrella!","有人拿走了我的雨傘！","has taken 表示「拿走了」，結果是雨傘現在不見了。"],
 ["She has taken a lot of pictures in Japan.","她在日本拍了很多照片。","take pictures 是「拍照」。"]],null,null,"📸|拿走；搭過"],
["written","p.p.","（write 的過去分詞）寫",[
 ["I have written a letter to my pen pal in Canada.","我寫了一封信給加拿大的筆友。","write 的三態是 write - wrote - written。pen pal 是「筆友」。"],
 ["Have you written your name on the paper?","你在紙上寫名字了嗎？","Have + 主詞 + 過去分詞？回答 Yes, I have. / No, I haven't.。"],
 ["She has written three stories this month.","她這個月寫了三篇故事。","this month 還沒結束，可以用現在完成式。"]]],
["spoken","p.p.","（speak 的過去分詞）說",[
 ["Have you ever spoken to a foreigner?","你曾經和外國人說過話嗎？","speak 的三態是 speak - spoke - spoken。foreigner 是「外國人」。"],
 ["I have spoken English with tourists many times.","我和觀光客說過很多次英文。","many times 說次數，搭配現在完成式。"],
 ["He hasn't spoken to me since last week.","從上週起他就沒和我說過話。","hasn't + 過去分詞 + since + 時間點，表示從那時候到現在都沒有。"]],null,null,"💬|說過"],
["known","p.p.","（know 的過去分詞）認識；知道",[
 ["I have known Amy for six years.","我認識艾美六年了。","know 的三態是 know - knew - known。「認識多久」要用現在完成式 + for。"],
 ["We have known each other since first grade.","我們從一年級就認識了。","each other 是「彼此」。since + 時間點 first grade。"],
 ["How long have you known your best friend?","你認識你最好的朋友多久了？","How long + have + 主詞 + 過去分詞？問「多久了」。"]],null,null,"🤝|認識"],
["given","p.p.","（give 的過去分詞）給",[
 ["Grandma has given me a red envelope.","奶奶給了我一個紅包。","give 的三態是 give - gave - given。give + 人 + 東西。"],
 ["The teacher hasn't given us any homework today.","老師今天還沒給我們任何功課。","today 還沒結束，可以用現在完成式。否定句用 any。"],
 ["Have you given the book back to Tom?","你把書還給湯姆了嗎？","give back 是「歸還」。give + 東西 + back + to + 人。"]],null,null,"🤲|給了"],
["flown","p.p.","（fly 的過去分詞）飛",[
 ["Have you ever flown a kite?","你放過風箏嗎？","fly 的三態是 fly - flew - flown。fly a kite 是「放風箏」。"],
 ["The birds have flown away.","鳥兒都飛走了。","主詞 The birds 是複數，用 have。fly away 是「飛走」。"],
 ["She has flown to Tokyo many times.","她搭飛機去過東京很多次。","fly to + 地方，是「搭飛機去……」。"]]],
["sung","p.p.","（sing 的過去分詞）唱",[
 ["We have sung this song before.","我們以前唱過這首歌。","sing 的三態是 sing - sang - sung。before 放句尾表示「以前」。"],
 ["Have you ever sung on a stage?","你曾經在舞台上唱過歌嗎？","on a stage 是「在舞台上」。"],
 ["She sang a Korean song yesterday. She has sung it many times.","她昨天唱了一首韓文歌，那首歌她唱過很多次了。","yesterday 用過去式 sang；many times 說經驗，用現在完成式 has sung。"]]],
/* ---------- 現在完成式的時間詞 ---------- */
["already","adv.","已經",[
 ["I have already finished my homework.","我已經寫完功課了。","already 用在肯定句，放在 have 和過去分詞中間。"],
 ["The bus has already left.","公車已經開走了。","leave 的過去分詞是 left。"],
 ["Have you eaten already? It's only ten o'clock!","你已經吃過了？才十點耶！","already 用在疑問句時，表示驚訝「這麼快就……」。"]],null,null,"⏰|已經"],
["yet","adv.","（否定）還沒；（疑問）已經……了嗎",[
 ["I haven't finished my report yet.","我還沒寫完報告。","yet 用在否定句的句尾，表示「還沒」。"],
 ["Has the movie started yet?","電影開始了沒？","yet 用在疑問句的句尾，問「已經……了嗎」。"],
 ["Is Dad home yet? — Not yet.","爸爸到家了沒？——還沒。","Not yet. 是「還沒」的簡答。"]],null,null,"⏳|還沒"],
["just","adv.","剛剛；只是",[
 ["The train has just left.","火車剛開走。","just 表示「剛剛」，放在 has 和過去分詞中間。"],
 ["I've just heard the news.","我剛聽到這個消息。","I've = I have。hear 的過去分詞是 heard。"],
 ["Just a minute, please.","請稍等一下。","just 也有「只是、僅僅」的意思。Just a minute. 是「等一下」。"]],null,null,"⚡|剛剛"],
["ever","adv.","曾經",[
 ["Have you ever been to Kenting?","你去過墾丁嗎？","ever 用在疑問句，放在主詞和過去分詞中間，問「曾經……嗎」。"],
 ["Has your brother ever ridden a horse?","你哥哥騎過馬嗎？","ride 的三態是 ride - rode - ridden。"],
 ["Have you ever seen a rainbow? — Yes, I have.","你看過彩虹嗎？——看過。","回答 Have you ever...? 用 Yes, I have. 或 No, I haven't.。"]],null,null,"❓|曾經"],
["since","prep./conj.","自從",[
 ["I have lived here since 2020.","我從 2020 年起就住在這裡。","since + 時間點，主要句子用現在完成式。"],
 ["We have been friends since we were seven.","我們從七歲起就是朋友。","since 後面接句子時，那個句子用過去式 we were seven。"],
 ["She hasn't eaten anything since breakfast.","從早餐之後她就什麼都沒吃。","since breakfast 表示從早餐到現在。否定句用 anything。"]],null,null,"📅|自從"],
["before","adv./prep.","以前；在……之前",[
 ["I have seen this movie before.","這部電影我以前看過。","before 單獨放在句尾，表示「以前」，常搭配現在完成式。"],
 ["Have you been here before?","你以前來過這裡嗎？","here 是副詞，前面不加 to：been here。"],
 ["Wash your hands before dinner.","晚餐前要洗手。","before 也可以當介系詞，表示「在……之前」。"]],null,null,"⏪|以前"],
["once","adv.","一次；曾經",[
 ["I have been to Japan once.","我去過日本一次。","once 是「一次」，放在句尾。"],
 ["We go swimming once a week.","我們一星期游泳一次。","once a week 是頻率「一週一次」，用現在簡單式。"],
 ["Once upon a time, there was a little cat.","從前從前，有一隻小貓。","Once upon a time 是童話故事的開頭「從前從前」。"]],null,null,"1️⃣|一次"],
["twice","adv.","兩次",[
 ["I have read this book twice.","這本書我讀過兩次。","twice 是「兩次」，三次以上就說 three times、four times。"],
 ["I brush my teeth twice a day.","我一天刷兩次牙。","twice a day 是頻率「一天兩次」，用現在簡單式。"],
 ["Have you been there twice? — No, only once.","你去過那裡兩次嗎？——沒有，只有一次。","there 是副詞，前面不加 to。"]],null,null,"2️⃣|兩次"],
/* ---------- gh 的唸法 ---------- */
["laugh","v.","笑",[
 ["The joke made everyone laugh.","那個笑話讓大家都笑了。","make + 人 + 原形動詞，表示「讓某人做……」。"],
 ["We have laughed a lot today.","我們今天笑了好多。","today 還沒結束，可以用現在完成式。laugh 是規則動詞，加 ed。"],
 ["Don't laugh at him.","不要嘲笑他。","laugh at 是「嘲笑」。Don't + 原形動詞，是否定的祈使句。"]]],
["enough","adj./adv.","足夠的；足夠地",[
 ["I have had enough. I'm full.","我吃夠了，我飽了。","have had enough 是「已經吃夠了」。"],
 ["Do we have enough time?","我們時間夠嗎？","enough 修飾名詞時，放在名詞前面：enough time。"],
 ["Is the water warm enough?","水夠溫嗎？","enough 修飾形容詞時，放在形容詞後面：warm enough。"]],null,null,"👌|足夠"],
["daughter","n.","女兒",[
 ["Mr. Lee has two daughters.","李先生有兩個女兒。","這裡的 has 是「有」。two 後面接複數 daughters。"],
 ["Their daughter has just become a doctor.","他們的女兒剛成為醫生。","become 的三態是 become - became - become，過去分詞和原形一樣。"],
 ["Is she your daughter? — Yes, she is.","她是你女兒嗎？——是的。","be 動詞的問句用 be 動詞回答。"]]]
];

const J2_1_3_GRAMMAR = [
{ id:"g1", title:"現在完成式 have / has + 過去分詞",
  intro:"現在完成式用來說「過去發生、但是和現在有關係的事」：到現在為止的經驗、剛剛完成而影響到現在的事、從過去一直持續到現在的狀態。結構是 have / has + 過去分詞。",
  table:[["句型","結構","例句"],["肯定句","主詞 + have / has + 過去分詞","I have seen this movie."],["否定句","主詞 + have / has + not（haven't / hasn't）+ 過去分詞","She hasn't eaten lunch."],["疑問句","Have / Has + 主詞 + 過去分詞？","Have you done your homework?"],["簡答","Yes, 主詞 + have / has. / No, 主詞 + haven't / hasn't.","Yes, I have. / No, she hasn't."],["縮寫","I have = I've，she has = she's，have not = haven't，has not = hasn't","I've been to Japan."]],
  points:[
   "主詞是第三人稱單數（he、she、it、一個人或一件事）用 has，其他（I、you、we、they、複數）用 have。",
   "have / has 後面一定接過去分詞，不能接原形或過去式：She has eaten.，不能說 She has eat. 或 She has ate.。",
   "規則動詞的過去分詞和過去式一樣，加 -ed（visited、played）；不規則動詞要背三態：go - went - gone、see - saw - seen、eat - ate - eaten、do - did - done、write - wrote - written。",
   "否定句在 have / has 後面加 not；疑問句把 Have / Has 移到句首，回答也用 have / has，不能用 do / does。",
   "常考陷阱：she's 可能是 she is，也可能是 she has。後面接過去分詞（She's gone.）是 has；接形容詞或 V-ing（She's happy. / She's eating.）是 is。",
   "這裡的 have 是助動詞，本身沒有「有」的意思。想說「已經擁有一段時間」要用 have had：I have had this bike for two years.。"],
  ex:[
   ["I have visited Tainan.","我去過台南。","規則動詞 visit 的過去分詞是 visited，說到現在為止的經驗。"],
   ["My brother has eaten all the cookies.","我弟弟把餅乾全吃光了。","主詞 My brother 用 has；eat 的過去分詞是 eaten。結果是現在沒有餅乾了。"],
   ["We haven't seen Amy today.","我們今天還沒看到艾美。","否定句：haven't + 過去分詞 seen。"],
   ["Has Tom done his homework? — No, he hasn't.","湯姆寫完功課了嗎？——還沒。","疑問句把 Has 移到句首，用 hasn't 回答。"],
   ["She's gone to the library.","她去圖書館了。","She's 後面接過去分詞 gone，所以 She's = She has。"]]},
{ id:"g2", title:"現在完成式的時間詞：already / yet / just / ever / never / before",
  intro:"現在完成式常和幾個時間詞一起出現。它們的意思不難，考試最愛考的是「放在哪裡」和「用在肯定句、否定句，還是疑問句」。",
  table:[["時間詞","意思","位置","例句"],["already","已經","have 和過去分詞中間（多用在肯定句）","I have already eaten."],["yet","（否定）還沒；（疑問）已經……了嗎","句尾","I haven't eaten yet. / Have you eaten yet?"],["just","剛剛","have 和過去分詞中間","He has just left."],["ever","曾經","疑問句的主詞和過去分詞中間","Have you ever been to Korea?"],["never","從來沒有","have 和過去分詞中間","I have never seen snow."],["before","以前","句尾","I have met him before."]],
  points:[
   "already 用在肯定句，放在 have 和過去分詞中間；yet 用在否定句和疑問句，放在句尾。",
   "never 本身就是否定，不能再加 not：I have never been there.，不能說 I haven't never been there.。",
   "Have you ever + 過去分詞？問經驗；回答 Yes, I have. / No, I haven't. 或 No, never.。肯定句說經驗時不用 ever：I have been to Korea.，不能說 I have ever been to Korea.。",
   "just 是「剛剛」，放在 have 和過去分詞中間：I have just finished.；但 just now（剛才）是過去時間，要用過去式：I finished it just now.。",
   "次數也常和現在完成式一起用：once（一次）、twice（兩次）、three times（三次），放在句尾。",
   "Not yet. 可以單獨當簡答：Have you finished? — Not yet.（還沒。）"],
  ex:[
   ["I have already cleaned my room.","我已經打掃好房間了。","already 放在 have 和過去分詞中間。"],
   ["The movie hasn't started yet.","電影還沒開始。","否定句，yet 放句尾，表示「還沒」。"],
   ["Mom has just come home.","媽媽剛回到家。","come 的過去分詞還是 come；just 放在 has 和過去分詞中間。"],
   ["Have you ever eaten durian? — No, never.","你吃過榴槤嗎？——從來沒有。","ever 問經驗；No, never. 是「從來沒有」。"],
   ["I have met your cousin twice before.","我以前見過你表哥兩次。","twice 說次數，before 表示以前。"]]},
{ id:"g3", title:"for + 一段時間、since + 時間點、How long have you …?",
  intro:"現在完成式也可以表示「從過去某個時候開始，一直持續到現在」的狀態。要說持續多久，用 for + 一段時間；要說從什麼時候開始，用 since + 時間點。問「多久了」就用 How long have / has ...?",
  table:[["用法","後面接","例句"],["for + 一段時間","two hours、three days、ten years、a long time","I have lived here for ten years."],["since + 時間點","2020、last week、Monday、yesterday、this morning","I have lived here since 2020."],["since + 過去式的句子","I was six、she moved here","We have been friends since we were six."],["How long 問句","How long + have / has + 主詞 + 過去分詞？","How long have you known Amy?"]],
  points:[
   "for 後面是「多長的時間」（a week、two years）；since 後面是「起點」（2019、last Monday、eight o'clock）。",
   "since 後面接句子時，那個句子用過去式：since I was ten；主要句子用現在完成式。",
   "表示持續狀態的動詞最常用：live、know、be、have、work、study、teach。",
   "中文「我認識她三年了」英文要用現在完成式：I have known her for three years.，不能說 I know her for three years.。",
   "buy、come、die 這種一下子就做完的動作，不能和 for 一起表示持續：不能說 I have bought this bike for two years.，要改成 I have had this bike for two years.。",
   "How long have you...? 可以回答 For two years. 或 Since 2022.；不要和問次數的 How many times 或問頻率的 How often 搞混。"],
  ex:[
   ["My family has lived in Hualien for twelve years.","我們家住在花蓮十二年了。","for + 一段時間 twelve years。"],
   ["Mr. Wang has taught English since 2015.","王老師從 2015 年起就教英文。","since + 時間點 2015；teach 的過去分詞是 taught。"],
   ["We have been friends since we were in first grade.","我們從一年級就是朋友了。","since 後面的句子用過去式 we were。"],
   ["How long have you had your dog? — For three years.","你養你的狗多久了？——三年了。","How long 問多久；用 For + 一段時間回答。"],
   ["It has been rainy since last Sunday.","從上星期天起就一直下雨。","been 是 be 的過去分詞；since + 時間點 last Sunday。"]]},
{ id:"g4", title:"現在完成式 vs 過去簡單式；have been to vs have gone to",
  intro:"現在完成式和過去簡單式都在說「以前的事」，差別在於：現在完成式強調和現在的關係（經驗、結果、持續），過去式只說過去那一次。句子裡只要有明確的過去時間，就一定用過去式。",
  table:[["比較","現在完成式","過去簡單式"],["重點","和現在有關係（經驗、結果、持續）","只說過去那一次，和現在無關"],["常見時間詞","already、yet、just、ever、never、before、for、since","yesterday、last week、two days ago、in 2020、when I was young"],["例句","I have been to Japan.","I went to Japan last year."],["have been to","去過某地（已經回來）","I have been to Korea twice."],["have gone to","去了某地（還沒回來，人不在這裡）","She has gone to Korea."]],
  points:[
   "句子裡有明確的過去時間（yesterday、ago、last...、in 2020）就用過去式：I saw him yesterday.，不能說 I have seen him yesterday.。",
   "問「什麼時候」的 When 問句要用過去式：When did you go to Japan?，不能說 When have you gone to Japan?。",
   "先用現在完成式說有沒有經驗，再用過去式說細節：I have been to Japan. I went there last summer.。",
   "have been to 是「去過、已經回來」，可以搭配次數、ever、never；have gone to 是「去了還沒回來」，所以說話的人自己不能說 I have gone to...。",
   "問經驗「你去過美國嗎？」要說 Have you ever been to America?，用 been to，不用 gone to。",
   "here、there、home、abroad 是副詞，前面不加 to：I have been there. / He has gone home. / She has been abroad.。"],
  ex:[
   ["I have been to Korea, but my sister hasn't.","我去過韓國，但我妹妹沒去過。","說經驗，用 have been to。"],
   ["I went to Korea in 2023.","我在 2023 年去了韓國。","in 2023 是明確的過去時間，用過去式 went。"],
   ["Where's Dad? — He has gone to the airport.","爸爸呢？——他去機場了。","人不在這裡，用 has gone to。"],
   ["When did you visit France?","你什麼時候去法國的？","When 問句用過去式 did + 原形 visit。"],
   ["She has been abroad three times.","她出過國三次。","abroad 是副詞，前面不加 to。"]]}
];

/* 文法測驗：[題目, [選項 x4], 正確答案索引, 解析, 文法編號] */
const J2_1_3_QUIZ = [
 ["She has ___ her homework.",["finish","finishes","finished","finishing"],2,"have / has 後面接過去分詞。finish 是規則動詞，過去分詞是 finished。","g1"],
 ["They ___ seen the movie.",["have","has","is","are"],0,"主詞 They 是複數，用 have + 過去分詞 seen。","g1"],
 ["Tom ___ been to Korea.",["have","has","is","does"],1,"主詞 Tom 是第三人稱單數，用 has。","g1"],
 ["I have ___ this book.",["readed","reading","reads","read"],3,"read 三態同形 read - read - read，過去分詞唸 /rɛd/。沒有 readed 這個字。","g1"],
 ["We haven't ___ lunch.",["ate","eat","eating","eaten"],3,"haven't 後面接過去分詞 eaten。ate 是過去式，不能放在 have 後面。","g1"],
 ["___ you done your homework? — Yes, I have.",["Do","Did","Have","Are"],2,"回答是 I have，而且 done 是過去分詞，所以用 Have 開頭。","g1"],
 ["Has he written the letter? — No, he ___",["didn't.","hasn't.","doesn't.","isn't."],1,"用 Has 問，就用 has 回答：No, he hasn't.。","g1"],
 ["哪一句正確？",["She has went home.","She have gone home.","She has gone home.","She has go home."],2,"主詞 She 用 has；go 的過去分詞是 gone。went 是過去式。","g1"],
 ["She's eaten lunch. 句子裡的 She's 是什麼的縮寫？",["She is","She has","She was","She does"],1,"She's 後面接過去分詞 eaten，所以是 She has。","g1"],
 ["I have ___ finished my report. I can go out now.",["yet","ever","before","already"],3,"肯定句裡「已經」用 already，放在 have 和過去分詞中間。","g2"],
 ["I haven't finished my report ___.",["yet","already","just","ever"],0,"否定句的「還沒」用 yet，放在句尾。","g2"],
 ["Have you ___ been to Hualien?",["yet","ever","for","since"],1,"Have you ever + 過去分詞？問「曾經……嗎」。","g2"],
 ["The train has ___ left. You missed it by one minute.",["yet","ever","for","just"],3,"火車「剛剛」開走，用 just，放在 has 和過去分詞中間。","g2"],
 ["I have ___ seen snow. I really want to see it.",["ever","yet","never","already"],2,"後面說很想看，表示「從來沒看過」，用 never。","g2"],
 ["哪一句正確？",["I haven't never been there.","I have never been there.","I have never be there.","I have been never there."],1,"never 本身就是否定，不能再加 not；never 放在 have 和過去分詞中間；be 的過去分詞是 been。","g2"],
 ["Have you eaten yet? — No, ___",["not yet.","already.","just.","ever."],0,"Not yet. 是「還沒」的簡答。","g2"],
 ["I have met him ___. He's Amy's cousin.",["yet","ever","before","since"],2,"before 單獨放句尾，表示「以前」。","g2"],
 ["I have been to Japan ___. I went there in 2022 and 2024.",["once","never","yet","twice"],3,"去了 2022 和 2024 兩次，所以是 twice。","g2"],
 ["I have lived in Taichung ___ ten years.",["since","for","ago","in"],1,"ten years 是一段時間，用 for。","g3"],
 ["He has studied English ___ 2021.",["for","ago","since","before"],2,"2021 是時間點，用 since。","g3"],
 ["We have known each other ___ we were in first grade.",["for","since","ago","when"],1,"後面接「從什麼時候開始」的句子，用 since。","g3"],
 ["___ have you lived here? — For five years.",["How many","How much","How often","How long"],3,"回答 For five years. 是「多久」，所以用 How long。","g3"],
 ["She has been in Japan ___ last Friday.",["since","for","ago","yet"],0,"last Friday 是時間點，用 since。","g3"],
 ["哪一個可以填入 for ___？",["2019","last week","Monday","three days"],3,"for 後面接一段時間 three days；其他都是時間點，要用 since。","g3"],
 ["「我認識他兩年了。」英文要怎麼說？",["I know him for two years.","I have known him for two years.","I knew him since two years.","I have known him since two years."],1,"從過去持續到現在，要用現在完成式 have known；two years 是一段時間，用 for。","g3"],
 ["My parents have been married ___ twenty years.",["since","ago","in","for"],3,"twenty years 是一段時間，用 for。","g3"],
 ["Ben has played the piano since he ___ six.",["is","was","has been","will be"],1,"since 後面的句子用過去式：since he was six。","g3"],
 ["I ___ to Tainan last summer.",["have gone","have been","go","went"],3,"last summer 是明確的過去時間，用過去式 went。","g4"],
 ["She ___ Japanese food three days ago.",["has eaten","ate","eats","has eat"],1,"three days ago 是明確的過去時間，用過去式 ate。","g4"],
 ["Where is Mom? — She ___ to the supermarket.",["has been","has gone","goes","have gone"],1,"媽媽現在不在這裡，用 has gone to（去了還沒回來）。","g4"],
 ["Have you ever ___ to Korea? — Yes, twice.",["gone","went","been","go"],2,"問經驗「去過……嗎」用 have been to。","g4"],
 ["When ___ you visit Canada?",["have","did","has","are"],1,"When 問「什麼時候」，是過去某個時間點，要用過去式 did + 原形 visit。","g4"],
 ["哪一句錯誤？",["I have seen him yesterday.","I saw him yesterday.","I have seen him before.","I have never seen him."],0,"yesterday 是明確的過去時間，要用過去式：I saw him yesterday.。","g4"],
 ["We ___ in Taipei since 2018.",["lived","have lived","live","are living"],1,"since 2018 表示從過去持續到現在，用現在完成式 have lived。","g4"],
 ["A: Have you ever been to Japan?　B: Yes, I have. I ___ there last year.",["have gone","have been","go","went"],3,"先用現在完成式說經驗，再用過去式說細節；last year 用過去式 went。","g4"],
 ["Tom isn't here. He ___ home.",["has gone","has been","have gone","goes"],0,"人不在這裡，用 has gone；home 是副詞，前面不加 to。","g4"]
];

/* =========================================================
   上課模式腳本（安安老師）
   say：老師講的話，{ } 裡面用英文語音唸
   board：黑板內容 [英文, [要標亮的字], 是否為錯誤示範]
   chant：口訣
   ask：隨堂提問，答錯會有針對性的回饋，再給一題 again 練習
   ========================================================= */
const J2_1_3_CLASS = {
g1:[
 {say:"同學好！我是安安老師。國二上學期最重要的新時態來了，叫做「現在完成式」。先聽一句：{I have been to Japan.} 意思是「我去過日本」。", board:[["I have been to Japan.",["have been"]]]},
 {say:"現在完成式的結構只有兩個零件：{have} 或 {has}，加上「過去分詞」。主詞是 he、she、it 或一個人，用 has；其他都用 have。", board:[["I have eaten lunch.",["have eaten"]],["She has eaten lunch.",["has eaten"]],["They have eaten lunch.",["have eaten"]]]},
 {say:"跟老師一起唸口訣！", chant:"have、has 打頭陣，後面跟著過去分詞！"},
 {say:"什麼時候用現在完成式？記三種：第一，到現在為止的經驗；第二，剛做完、結果影響到現在；第三，從過去一直持續到現在。", board:[["I have seen snow.（經驗）",["have seen"]],["I have lost my key.（結果：現在找不到）",["have lost"]],["I have lived here for ten years.（持續）",["have lived"]]]},
 {ask:{q:"My sister ___ been to Korea.", opts:["have","has","is"], ans:1,
   ok:"答對！My sister 是一個人，用 has。",
   bad:{0:"My sister 是第三人稱單數，要用 has 喔！",2:"is been 不是英文，現在完成式要用 has + 過去分詞。"},
   again:{q:"My parents ___ visited Japan.", opts:["have","has","is"], ans:0, exp:"My parents 是複數，用 have。"}}},
 {say:"那過去分詞長什麼樣子？規則動詞很簡單，和過去式一樣加 <<ed>>。不規則動詞就要背三態：原形、過去式、過去分詞。", board:[["visit → visited → visited",["visited"]],["go → went → gone",["gone"]],["see → saw → seen",["seen"]],["eat → ate → eaten",["eaten"]]]},
 {ask:{q:"We have ___ this movie.", opts:["saw","seen","see"], ans:1,
   ok:"很好！have 後面接過去分詞 seen。",
   bad:{0:"saw 是過去式，have 後面要接過去分詞 seen。",2:"see 是原形，have 後面要接過去分詞喔。"},
   again:{q:"He has ___ a letter.", opts:["wrote","write","written"], ans:2, exp:"write 的三態是 write - wrote - written。"}}},
 {say:"否定句：在 have、has 後面加 {not}。have not 縮寫成 {haven't}，has not 縮寫成 {hasn't}。", board:[["I haven't done my homework.",["haven't done"]],["She hasn't eaten lunch.",["hasn't eaten"]]]},
 {say:"疑問句：把 Have 或 Has 跳到句首！回答也用 have、has，不能用 do 或 does 喔。", chant:"疑問句，Have、Has 跳到最前面！", board:[["Have you done your homework?",["Have"]],["Yes, I have. / No, I haven't.",["have","haven't"]],["Yes, I do.",[],true]]},
 {ask:{q:"Has Amy done her homework? — Yes, she ___", opts:["does.","has.","is."], ans:1,
   ok:"對！用 Has 問，就用 has 回答。",
   bad:{0:"問句是 Has 開頭，不是 Does，所以要用 has 回答。",2:"問句是 Has 開頭，不是 Is，所以要用 has 回答。"},
   again:{q:"Have they seen the rainbow? — No, they ___", opts:["haven't.","don't.","aren't."], ans:0, exp:"用 Have 問，用 haven't 回答。"}}},
 {say:"最後來看縮寫：{I've} 是 I have，{she's} 是 she has。可是 she's 也可能是 she is！怎麼分？看後面：接過去分詞就是 has，接形容詞或 V-ing 就是 is。", board:[["She's gone. = She has gone.",["She's","gone"]],["She's happy. = She is happy.",["She's","happy"]]]},
 {ask:{say:"最後一題！", q:"She's gone to school. 裡的 She's 是什麼？", opts:["She is","She has","She was"], ans:1,
   ok:"太棒了！後面是過去分詞 gone，所以是 She has。",
   bad:{0:"She is gone 不是現在完成式。後面接過去分詞 gone，要還原成 She has。",2:"縮寫 's 只會是 is 或 has，不會是 was。"},
   again:{q:"He's tired. 裡的 He's 是什麼？", opts:["He has","He is","He was"], ans:1, exp:"後面接形容詞 tired，所以是 He is。"}}},
 {say:"現在完成式第一課完成！複習：have、has 打頭陣，後面跟著過去分詞；疑問句 Have、Has 跳到最前面；she's 後面接過去分詞就是 has。下一課學它的好朋友時間詞！", end:true}
],
g2:[
 {say:"同學好！今天要認識現在完成式的六個好朋友：{already}、{yet}、{just}、{ever}、{never}、{before}。重點是它們要站在哪裡！", board:[["I have already eaten.",["already"]],["I haven't eaten yet.",["yet"]]]},
 {say:"{already} 是「已經」，用在肯定句，站在 have 和過去分詞中間。{yet} 用在否定句是「還沒」，用在疑問句是「已經……了嗎」，而且一定跑到句尾。", board:[["I have already finished.",["already"]],["I haven't finished yet.",["yet"]],["Have you finished yet?",["yet"]]]},
 {say:"唸口訣把位置記起來！", chant:"already 站中間，yet 跑到最後面！"},
 {ask:{q:"I haven't cleaned my room ___.", opts:["already","yet","ever"], ans:1,
   ok:"答對！否定句的「還沒」用 yet，放在句尾。",
   bad:{0:"already 是「已經」，用在肯定句，而且不放句尾。",2:"ever 是「曾經」，用在疑問句問經驗。"},
   again:{q:"I have ___ eaten dinner. I'm full.", opts:["yet","already","ever"], ans:1, exp:"肯定句的「已經」用 already，放在 have 和過去分詞中間。"}}},
 {say:"{just} 是「剛剛」，也是站在 have 和過去分詞中間：{The bus has just left.} 公車剛開走。小心！{just now} 是「剛才」，是過去時間，要用過去式。", board:[["The bus has just left.",["has just left"]],["I finished it just now.",["finished","just now"]]]},
 {ask:{q:"Dad has ___ come home. He's taking off his shoes.", opts:["yet","ever","just"], ans:2,
   ok:"對！爸爸剛剛到家，用 just。",
   bad:{0:"yet 要放句尾，而且用在否定句或疑問句。",1:"ever 是「曾經」，用在疑問句問經驗。"},
   again:{q:"The movie has ___ started. Let's go in quickly!", opts:["just","yet","ever"], ans:0, exp:"電影剛剛開始，用 just。"}}},
 {say:"{ever} 是「曾經」，用在疑問句問經驗：{Have you ever been to Korea?} 回答 {Yes, I have.} 或 {No, I haven't.}。{never} 是「從來沒有」，它本身就是否定，不能再加 not！", board:[["Have you ever been to Korea?",["ever"]],["I have never been to Korea.",["never"]],["I haven't never been to Korea.",[],true]]},
 {say:"這個也有口訣！", chant:"ever 問經驗，never 從來沒，never 不跟 not 做朋友！"},
 {ask:{q:"哪一句正確？", opts:["I haven't never seen a koala.","I have never seen a koala.","I have ever seen a koala."], ans:1,
   ok:"很好！never 本身就是否定，不用再加 not。",
   bad:{0:"haven't 和 never 都是否定，放在一起就重複了。",2:"ever 用在疑問句，肯定句說經驗不用 ever。"},
   again:{q:"___ you ever eaten stinky tofu?", opts:["Have","Do","Are"], ans:0, exp:"Have you ever + 過去分詞？問經驗。"}}},
 {say:"最後是 {before}，放句尾表示「以前」。說經驗的時候，也常加上次數：{once} 一次、{twice} 兩次、{three times} 三次。", board:[["I have met him before.",["before"]],["I have been to Japan once.",["once"]],["She has seen the movie twice.",["twice"]],["We have visited Tainan three times.",["three times"]]]},
 {ask:{q:"Have you ever eaten stinky tofu? — Yes, I've eaten it ___.", opts:["twice","yet","ever"], ans:0,
   ok:"答對！twice 是「兩次」，說經驗的次數。",
   bad:{1:"yet 用在否定句和疑問句，這裡是肯定句。",2:"ever 用在疑問句，回答時不用。"},
   again:{q:"Have you finished? — No, not ___.", opts:["already","yet","just"], ans:1, exp:"Not yet. 是「還沒」。"}}},
 {ask:{say:"最後一題！", q:"Has the bus come ___?", opts:["yet","already","just"], ans:0,
   ok:"完美！疑問句放在句尾的是 yet。",
   bad:{1:"already 不會單獨放在一般疑問句的句尾來問「了沒」，要用 yet。",2:"just 要放在 has 和過去分詞中間，不放句尾。"},
   again:{q:"I have ___ been to Kenting. I want to go someday.", opts:["never","ever","yet"], ans:0, exp:"想去但還沒去過，表示「從來沒有」，用 never。"}}},
 {say:"時間詞完成！複習：already 站中間，yet 跑到最後面；just 是剛剛；ever 問經驗，never 不跟 not 做朋友；before 和次數放句尾。下一課學 for 和 since！", end:true}
],
g3:[
 {say:"同學好！如果你從十年前就住在台中，現在還住在那裡，英文要怎麼說？就用現在完成式：{I have lived in Taichung for ten years.}", board:[["I have lived in Taichung for ten years.",["have lived","for ten years"]]]},
 {say:"要說「多久」有兩種方法：{for} 加一段時間，像 for ten years；{since} 加開始的時間點，像 since 2015。意思一樣，看你給的是長度還是起點。", board:[["for + 一段時間：for two hours / for three years",["for"]],["since + 時間點：since 2015 / since Monday",["since"]]]},
 {say:"口訣唸三遍！", chant:"for 接多久，since 接起點！"},
 {ask:{q:"I have lived here ___ 2015.", opts:["for","since","ago"], ans:1,
   ok:"答對！2015 是一個時間點，用 since。",
   bad:{0:"for 後面要接一段時間，像 for ten years。2015 是起點，要用 since。",2:"ago 是過去式的時間詞，而且要放在時間後面，像 two years ago。"},
   again:{q:"She has been here ___ Monday.", opts:["since","for","in"], ans:0, exp:"Monday 是起點，用 since。"}}},
 {ask:{q:"We have studied English ___ three years.", opts:["since","for","in"], ans:1,
   ok:"很好！three years 是一段時間，用 for。",
   bad:{0:"since 後面要接起點。three years 是長度，要用 for。",2:"in three years 是「三年後」，不是「持續三年」。"},
   again:{q:"They have known each other ___ a long time.", opts:["for","since","ago"], ans:0, exp:"a long time 是一段時間，用 for。"}}},
 {say:"since 後面也可以接一個句子，但是那個句子要用過去式！因為它說的是「開始的那一刻」，那一刻已經過去了。", board:[["I have known Amy since I was six.",["since","was"]],["I have known Amy since I am six.",[],true]]},
 {ask:{q:"I have known Kevin since I ___ eight.", opts:["am","was","have been"], ans:1,
   ok:"對！since 後面的句子用過去式 was。",
   bad:{0:"八歲是過去的事，since 後面的句子要用過去式。",2:"since 後面的句子說的是起點，用過去式就好。"},
   again:{q:"They have lived here since they ___ married.", opts:["got","get","have got"], ans:0, exp:"since 後面的句子用過去式 got。"}}},
 {say:"想問別人「多久了」，就用 {How long have you...?}。回答可以用 for，也可以用 since。", board:[["How long have you lived here?",["How long"]],["For five years.",["For"]],["Since 2020.",["Since"]]]},
 {say:"這句口訣送給你！", chant:"How long 問多久，for、since 來回答！"},
 {say:"兩個常考陷阱！第一，中文「我認識她三年了」，英文不能用現在式，要用現在完成式。第二，buy 這種一下子就做完的動作，不能和 for 一起說持續，要改成 have had。", board:[["I know her for three years.",[],true],["I have known her for three years.",["have known"]],["I have bought this bike for two years.",[],true],["I have had this bike for two years.",["have had"]]]},
 {ask:{say:"最後一題！", q:"「我有這台腳踏車兩年了。」英文要怎麼說？", opts:["I have bought this bike for two years.","I have had this bike for two years.","I have this bike since two years."], ans:1,
   ok:"完美！「擁有」可以持續，用 have had；two years 用 for。",
   bad:{0:"buy 是一下子就完成的動作，不能持續兩年，要說 have had。",2:"要用現在完成式 have had，而且 two years 是一段時間，要用 for。"},
   again:{q:"How long ___ you known your best friend?", opts:["have","do","are"], ans:0, exp:"How long + have + 主詞 + 過去分詞？"}}},
 {say:"for 和 since 過關！複習口訣：for 接多久，since 接起點；since 後面的句子用過去式；How long 問多久，for、since 來回答。最後一課，我們來比較現在完成式和過去式！", end:true}
],
g4:[
 {say:"同學好！期末考最愛考：什麼時候用現在完成式，什麼時候用過去式？先看兩句：{I have been to Japan.} 說經驗；{I went to Japan last year.} 說去年那一次。", board:[["I have been to Japan.",["have been"]],["I went to Japan last year.",["went","last year"]]]},
 {say:"判斷的秘訣：只要句子裡有明確的過去時間，像 {yesterday}、{last week}、{two days ago}、{in 2020}，就一定用過去式，不能用現在完成式！", board:[["I have seen him yesterday.",[],true],["I saw him yesterday.",["saw","yesterday"]],["She has gone to Korea last year.",[],true],["She went to Korea last year.",["went","last year"]]]},
 {say:"跟著老師唸！", chant:"看到 yesterday、ago、last，乖乖用過去式！"},
 {ask:{q:"I ___ my homework last night.", opts:["have done","did","have did"], ans:1,
   ok:"答對！last night 是明確的過去時間，用過去式 did。",
   bad:{0:"有 last night 就不能用現在完成式喔！",2:"have 後面要接過去分詞 done，而且這題有 last night，要用過去式。"},
   again:{q:"We ___ Tainan in 2022.", opts:["have visited","visited","visit"], ans:1, exp:"in 2022 是明確的過去時間，用過去式 visited。"}}},
 {say:"問「什麼時候」的 {When} 問句，問的是過去的某個時間點，所以也要用過去式：{When did you go to Japan?}", board:[["When did you go to Japan?",["When did"]],["When have you gone to Japan?",[],true]]},
 {ask:{q:"When ___ you go to Korea?", opts:["have","did","has"], ans:1,
   ok:"對！When 問句用過去式 did。",
   bad:{0:"When 問過去的時間點，要用過去式 did，不用 have。",2:"When 問句要用 did，而且主詞 you 也不能配 has。"},
   again:{q:"When ___ she come back?", opts:["did","has","have"], ans:0, exp:"When 問句用過去式 did + 原形 come。"}}},
 {say:"聊天的時候常常這樣接：先用現在完成式問經驗，再用過去式說細節。{Have you ever been to Japan?} {Yes, I have. I went there last summer.}", board:[["Have you ever been to Japan?",["Have","been"]],["Yes, I have. I went there last summer.",["have","went"]]]},
 {say:"再來是超級常考的 {have been to} 和 {have gone to}！been to 是「去過，已經回來了」；gone to 是「去了，還沒回來」，人現在不在這裡。", board:[["I have been to Korea.（去過，回來了）",["been to"]],["Mom has gone to Korea.（去了，人不在這裡）",["gone to"]]]},
 {say:"口訣記起來！", chant:"been to 去過回來了，gone to 去了還沒回來！"},
 {ask:{q:"Where's Ken? — He ___ to the library.", opts:["has been","has gone","have gone"], ans:1,
   ok:"答對！Ken 現在不在這裡，用 has gone to。",
   bad:{0:"has been to 是「去過、已經回來」，可是 Ken 現在不在這裡。",2:"主詞 He 要用 has，不是 have。"},
   again:{q:"Lisa isn't home. She ___ to the park.", opts:["has gone","has been","have been"], ans:0, exp:"人不在，用 has gone to。"}}},
 {ask:{q:"I ___ to Kenting three times.", opts:["have gone","have been","has been"], ans:1,
   ok:"很好！說去過幾次，是經驗，用 have been to。",
   bad:{0:"have gone to 是「去了還沒回來」，你在這裡說話，表示已經回來了，要用 have been to。",2:"主詞 I 要用 have，不是 has。"},
   again:{q:"Have you ever ___ to Taitung?", opts:["been","gone","went"], ans:0, exp:"問經驗用 have been to。"}}},
 {say:"最後一個小陷阱：{here}、{there}、{home}、{abroad} 是副詞，前面不加 to！是 {I have been there.}、{He has gone home.}、{She has been abroad.}", board:[["He has gone home.",["home"]],["He has gone to home.",[],true],["She has been abroad.",["abroad"]],["She has been to abroad.",[],true]]},
 {ask:{say:"最後一題！", q:"哪一句正確？", opts:["I have been to abroad.","She has gone home.","He has gone to home."], ans:1,
   ok:"完美！home 是副詞，前面不加 to。",
   bad:{0:"abroad 是副詞，前面不加 to：I have been abroad.。",2:"home 是副詞，前面不加 to：He has gone home.。"},
   again:{q:"Have you been ___ before?", opts:["there","to there","at there"], ans:0, exp:"there 是副詞，前面不加 to。"}}},
 {say:"國二上學期的文法全部上完了！記住：看到 yesterday、ago、last，乖乖用過去式；When 問句用過去式；been to 去過回來了，gone to 去了還沒回來；home、there、abroad 前面不加 to。期末考加油！", end:true}
]};

Object.assign(PH, {
  experience:"e:short_i x:x_ks p:c er:ere i:long_e e:schwa n:c c:soft_c e:silent_e",
  abroad:"a:schwa br:blend oa:exc d:c", airport:"air:air p:c or:or t:c", plane:"pl:blend a:a_e n:c e:silent_e",
  flight:"fl:blend igh:igh t:c", foreign:"f:c or:or ei:schwa g:silent n:c", culture:"c:c u:short_u l:c ture:exc",
  country:"c:c ou:exc n:c tr:blend y:y_i", guide:"g:c u:silent i:i_e d:c e:silent_e",
  language:"l:c a:short_a n:c g:c u:exc a:schwa g:soft_g e:silent_e",
  tourist:"t:c our:exc i:short_i s:c t:c", hotel:"h:c o:long_o t:c e:short_e l:c",
  souvenir:"s:c ou:exc v:c e:schwa n:c ir:ere", famous:"f:c a:long_a m:c ou:schwa s:c",
  island:"i:long_i s:silent l:c a:schwa n:c d:c", visitor:"v:c i:short_i s:s_z i:schwa t:c or:schwa_r",
  Japan:"J:c a:schwa p:c a:short_a n:c", Japanese:"J:c a:short_a p:c a:schwa n:c e:long_e s:s_z e:silent_e",
  Korea:"K:c o:schwa r:c e:long_e a:schwa", Korean:"K:c o:schwa r:c e:long_e a:schwa n:c",
  America:"A:schwa m:c e:short_e r:c i:short_i c:c a:schwa", American:"A:schwa m:c e:short_e r:c i:short_i c:c a:schwa n:c",
  France:"Fr:blend a:short_a n:c c:soft_c e:silent_e", French:"Fr:blend e:short_e n:c ch:ch",
  Germany:"G:soft_g er:er m:c a:schwa n:c y:y_i", German:"G:soft_g er:er m:c a:schwa n:c",
  Canada:"C:c a:short_a n:c a:schwa d:c a:schwa", Canadian:"C:c a:schwa n:c a:long_a d:c i:long_e a:schwa n:c",
  Taiwan:"T:c ai:exc w:c a:a_ah n:c", Taiwanese:"T:c ai:exc w:c a:schwa n:c e:long_e s:s_z e:silent_e",
  engineer:"e:short_e n:c g:soft_g i:schwa n:c eer:ere", pilot:"p:c i:long_i l:c o:schwa t:c",
  reporter:"r:c e:schwa p:c or:or t:c er:er", writer:"wr:wr i:long_i t:c er:er", singer:"s:c i:short_i ng:ng er:er",
  artist:"ar:ar t:c i:short_i s:c t:c", scientist:"s:c c:silent i:long_i e:schwa n:c t:c i:short_i s:c t:c",
  dentist:"d:c e:short_e n:c t:c i:short_i s:c t:c", firefighter:"f:c i:i_e r:c e:silent_e f:c igh:igh t:c er:er",
  lawyer:"l:c aw:aw y:c er:er", actor:"a:short_a c:c t:c or:schwa_r", job:"j:c o:short_o b:c",
  been:"b:c ee:exc n:c", gone:"g:c o:short_o n:c e:silent", done:"d:c o:o_uh n:c e:silent", seen:"s:c ee:ee n:c",
  eaten:"ea:ea t:c e:schwa n:c", taken:"t:c a:long_a k:c e:schwa n:c", written:"wr:wr i:short_i tt:double e:schwa n:c",
  spoken:"sp:blend o:long_o k:c e:schwa n:c", known:"kn:kn ow:ow_o n:c", given:"g:c i:short_i v:c e:schwa n:c",
  flown:"fl:blend ow:ow_o n:c", sung:"s:c u:short_u ng:ng",
  already:"a:aw l:c r:c ea:exc d:c y:y_i", yet:"y:c e:short_e t:c", just:"j:c u:short_u s:c t:c", ever:"e:short_e v:c er:er",
  since:"s:c i:short_i n:c c:soft_c e:silent_e", before:"b:c e:schwa f:c ore:ore", once:"o:exc n:c c:soft_c e:silent_e",
  twice:"tw:blend i:i_e c:soft_c e:silent_e",
  laugh:"l:c au:exc gh:exc", enough:"e:schwa n:c ou:exc gh:exc", daughter:"d:c au:aw gh:silent t:c er:er"
});
Object.assign(EXC_NOTE, {
  abroad:"abroad 的 oa 唸 /ɔ/（像「歐」嘴巴張圓），不唸 boat 那種長 o。和 broad（寬的）唸法一樣。",
  culture:"culture 的 ture 唸 /tʃɚ/，像「去兒」，不是一個字母一個字母唸。picture、future 的 ture 也是這樣唸。",
  country:"country 的 ou 唸短 u /ʌ/（像「阿」輕輕的），不唸 house 的 /aʊ/。cousin、touch 的 ou 也這樣唸。",
  language:"language 的 u 唸 /w/，所以 gu 合起來像 /gw/：lan‧gwage。penguin 的 gu 也這樣唸。",
  tourist:"tourist 的 our 唸 /ʊr/，像「烏兒」，不唸 hour 的 /aʊr/，也不唸 four 的 /ɔr/。",
  souvenir:"souvenir 來自法文，ou 唸長長的「嗚」/u/，和 soup（湯）的 ou 一樣。",
  Taiwan:"Taiwan 的 ai 唸 /aɪ/（像「愛」），不照英文 ai 唸「A」的規則，因為它是從中文「台」音譯來的。",
  Taiwanese:"Taiwanese 的 ai 唸 /aɪ/（像「愛」），照中文「台」的音；字尾 nese 唸 /niz/，和 Japanese 一樣。",
  been:"been 的 ee 在美式英文常唸短 i /ɪ/，像 bin，不唸 bean 的長 e。",
  once:"once 開頭的 o 唸 /wʌ/，好像前面多了一個 w：唸起來像「萬斯」。one 也是這樣唸。",
  already:"already 開頭的 al 唸 /ɔl/（像 all）；ready 的 ea 唸短 e /ɛ/，不唸長長的「一」。all + ready 少一個 l。",
  laugh:"laugh 的 au 唸短 a /æ/，gh 唸 /f/，整個字唸 /læf/。gh 唸 /f/ 是要特別記的例外。",
  enough:"enough 的 ou 唸短 u /ʌ/，gh 唸 /f/，整個字唸 /ɪˈnʌf/。tough、rough 也是 ough 唸 /ʌf/。"
});
/* ---------- 4 堂自然發音課（安安老師） ---------- */
const J2_1_3_PHONICS = [
  {id:"p1", title:"過去分詞的字尾 -en / -n"},
  {id:"p2", title:"不規則動詞的母音變化 i → a → u"},
  {id:"p3", title:"gh 的兩種情況：唸 /f/ 或不發音"},
  {id:"p4", title:"縮寫的唸法：I've、she's、haven't、hasn't"}
];
const J2_1_3_PHONICS_CLASS = {
p1:[
 {say:"同學好！學了現在完成式，你會發現很多過去分詞的尾巴長得很像：{taken}、{eaten}、{given}、{spoken}，都是 <<en>> 結尾！今天就來學這條尾巴怎麼唸。", board:[["take → taken",["en"],false,true],["eat → eaten",["en"],false,true]]},
 {say:"<<en>> 在字尾不重讀，要唸得又輕又短，像輕輕的「ㄣ」/ən/，不要唸成大聲的「欸恩」。重音都在前面那一塊：{taken}、{eaten}、{given}。", board:[["TAK‧en",["en"],false,true],["EAT‧en",["en"],false,true],["GIV‧en",["en"],false,true]]},
 {say:"唸口訣！", chant:"字尾 en 輕輕唸，ㄣ 一聲就過關！"},
 {ask:{q:"eaten 的字尾 en 唸起來像什麼？", opts:["輕輕的 /ən/","清楚的「欸恩」/ɛn/","長 e /in/"], ans:0,
   ok:"答對！字尾 en 不重讀，唸成輕輕的 /ən/。",
   bad:{1:"en 在字尾不重讀，要唸得又輕又短，不是清楚的「欸恩」。",2:"en 不會唸長 e，唸輕輕的 /ən/ 就好。"},
   again:{q:"given 的重音在哪一塊？", opts:["GIV-en","giv-EN"], ans:0, exp:"重音在前面 GIV，字尾 en 輕輕唸。"}}},
 {say:"原形有魔法 e 的字，去掉 e 加 en 之後，前面的母音還是唸長音：{take} → {taken}，a 還是唸「A」；{speak} → {spoken}，o 唸「O」。", board:[["take → taken",["a"],false,true],["speak → spoken",["o"],false,true]]},
 {say:"可是 {write} 不一樣！它的過去分詞 {written}，i 變成短 i，所以 t 要重複兩個，保護前面的短母音。", board:[["write → written",["tt"],false,true],["writen",[],true]]},
 {ask:{q:"write 的過去分詞怎麼拼？", opts:["writen","written","wrote"], ans:1,
   ok:"很好！i 唸短音，t 要重複：written。",
   bad:{0:"只有一個 t 的話，i 會唸長音。written 的 i 是短音，t 要重複。",2:"wrote 是過去式，過去分詞是 written。"},
   again:{q:"hide（躲藏）的過去分詞 hidden，d 為什麼有兩個？", opts:["保護前面的短母音 i","因為字很長","沒有原因"], ans:0, exp:"和 written 一樣，子音重複，讓前面的 i 唸短音。"}}},
 {say:"還有一群過去分詞只加一個 <<n>>：{seen}、{known}、{flown}、{gone}、{done}、{been}。", board:[["see → seen",["n"],false,true],["know → known",["n"],false,true],["fly → flown",["n"],false,true]]},
 {say:"{known} 的 <<kn>> 開頭，k 不發音，只唸 /n/；<<ow>> 唸長 o，所以 known 唸起來跟 {no} 加上 n 一樣。{flown} 的 ow 也唸長 o。", board:[["known",["kn","ow"],false,true],["flown",["ow"],false,true]]},
 {ask:{q:"known 的 k 要不要發音？", opts:["要","不要"], ans:1,
   ok:"對！kn 開頭的 k 不發音，known 唸 /noʊn/。",
   bad:{0:"kn 開頭的 k 是安靜的，像 know、knife、knock 一樣不發音喔。"},
   again:{q:"flown 的 ow 唸什麼？", opts:["長 o /oʊ/","/aʊ/ 像 cow"], ans:0, exp:"flown 的 ow 唸長 o，和 grown、shown 一樣。"}}},
 {say:"最後三個特別的：{done} 唸 /dʌn/，像 sun；{gone} 唸 /gɔn/；{been} 美式常唸 /bɪn/，像 bin。字尾的 e 都不發音，也沒有魔法！", board:[["done → 和 sun 押韻",["o"],false,true],["gone",["o"],false,true],["been → 像 bin",["ee"],false,true]]},
 {ask:{say:"最後一題！", q:"done 唸起來和哪個字押韻？", opts:["sun","bone","moon"], ans:0,
   ok:"太棒了！done 的 o 唸短 u /ʌ/，和 sun 押韻。",
   bad:{1:"bone 是魔法 e 的長 o。done 的 o 唸短 u，和 sun 押韻。",2:"moon 是長長的「嗚」，done 唸 /dʌn/。"},
   again:{q:"seen 唸起來和哪個字一樣？", opts:["scene","sun","son"], ans:0, exp:"seen 和 scene（場景）唸法一樣，都是 /sin/。"}}},
 {say:"過去分詞字尾課完成！記住：字尾 en 輕輕唸 ㄣ；write 變 written 要重複 t；known 的 k 不發音；done、gone、been 要特別記。下一課來唱 i、a、u 的母音歌！", end:true}
],
p2:[
 {say:"同學好！今天要學一組很有規律的不規則動詞：{sing}、{sang}、{sung}。你看，只有中間的母音在換：i、a、u！", board:[["sing → sang → sung",["i","a","u"],false,true]]},
 {say:"規律是：原形用 <<i>>，過去式用 <<a>>，過去分詞用 <<u>>。三個都是短母音：短 i、短 a、短 u。", board:[["drink → drank → drunk",["i","a","u"],false,true],["swim → swam → swum",["i","a","u"],false,true]]},
 {say:"唸口訣，順著母音往下溜！", chant:"i、a、u，原形、過去、過去分詞，一路往下溜！"},
 {ask:{q:"drink 的過去分詞是？", opts:["drank","drunk","drinked"], ans:1,
   ok:"答對！i、a、u，第三個是 drunk。",
   bad:{0:"drank 是過去式，排在第二個。過去分詞是 u：drunk。",2:"drink 是不規則動詞，不能加 ed。"},
   again:{q:"sing 的過去分詞是？", opts:["sung","sang","singed"], ans:0, exp:"sing - sang - sung，過去分詞是 sung。"}}},
 {say:"三個母音要唸清楚：短 i /ɪ/ 輕輕的「一」，短 a /æ/ 嘴巴張大，短 u /ʌ/ 輕輕的「阿」。聽：{swim}、{swam}、{swum}。", board:[["swim /ɪ/",["i"],false,true],["swam /æ/",["a"],false,true],["swum /ʌ/",["u"],false,true]]},
 {ask:{q:"swim 的過去式是？", opts:["swum","swam","swimmed"], ans:1,
   ok:"很好！過去式是第二個 a：swam。",
   bad:{0:"swum 是過去分詞，要放在 have 後面。過去式是 swam。",2:"swim 是不規則動詞，不能加 ed。"},
   again:{q:"drink 的過去式是？", opts:["drunk","drank","drinked"], ans:1, exp:"drink - drank - drunk，過去式是 drank。"}}},
 {say:"同一家族的還有：{begin}、{began}、{begun} 開始；{ring}、{rang}、{rung} 鈴響。", board:[["begin → began → begun",["i","a","u"],false,true],["ring → rang → rung",["i","a","u"],false,true]]},
 {ask:{q:"Have you ever ___ in the sea?", opts:["swam","swum","swim"], ans:1,
   ok:"對！have 後面接過去分詞 swum。",
   bad:{0:"swam 是過去式，have 後面要接過去分詞 swum。",2:"swim 是原形，have 後面要接過去分詞。"},
   again:{q:"The class has already ___.", opts:["began","begun","begin"], ans:1, exp:"has 後面接過去分詞 begun。"}}},
 {say:"注意它們的尾巴：sing、ring 是 <<ng>> 鼻音；drink 是 <<nk>>，鼻音後面再加 /k/。母音變了，尾巴不變！", board:[["sing   sang   sung",["ng"],false,true],["drink   drank   drunk",["nk"],false,true]]},
 {say:"小心陷阱！不是每個 i 的字都會這樣變。{bring} 是 bring、brought、brought；{think} 是 think、thought、thought。沒有 brang、brung 這種字！", chant:"bring、think 不跟 i、a、u 走！", board:[["bring → brought → brought",["brought"]],["bring → brang → brung",[],true],["think → thought → thought",["thought"]]]},
 {ask:{say:"最後一題！", q:"bring 的過去分詞是？", opts:["brung","brought","brang"], ans:1,
   ok:"完美！bring 不走 i、a、u，過去分詞是 brought。",
   bad:{0:"bring 不跟 i、a、u 的規律走，沒有 brung 這個字。",2:"bring 不跟 i、a、u 的規律走，沒有 brang 這個字。"},
   again:{q:"ring 的過去分詞是？", opts:["rung","rang","ringed"], ans:0, exp:"ring - rang - rung，跟 i、a、u 的規律走。"}}},
 {say:"母音變化課完成！sing - sang - sung、drink - drank - drunk、swim - swam - swum、begin - began - begun，i、a、u 一路往下溜；可是 bring 和 think 不跟著走。下一課來看調皮的 gh！", end:true}
],
p3:[
 {say:"同學好！今天的主角是很調皮的 <<gh>>。它有時候唸 /f/，有時候完全不出聲。國一學過的 {night}，gh 就不發音。今天再看兩個字：{laugh} 和 {eight}。", board:[["laugh",["gh"],false,true],["eight",["gh"],false,true]]},
 {say:"第一種：gh 唸 /f/，要吹氣！{laugh} 笑、{enough} 足夠、{cough} 咳嗽、{tough} 困難的。gh 都在字尾，跟在 au 或 ou 後面。", board:[["laugh",["gh"],false,true],["enough",["gh"],false,true],["cough",["gh"],false,true],["tough",["gh"],false,true]]},
 {say:"唸口訣！", chant:"laugh、enough、cough，gh 吹氣唸 f！"},
 {ask:{q:"enough 的 gh 唸什麼？", opts:["/f/","不發音","/g/"], ans:0,
   ok:"答對！enough 唸 /ɪˈnʌf/，gh 唸 /f/。",
   bad:{1:"enough 的尾巴要吹氣唸 /f/，不是安靜的。",2:"gh 在字尾不會唸 /g/。"},
   again:{q:"laugh 的 gh 唸什麼？", opts:["不發音","/f/","/h/"], ans:1, exp:"laugh 唸 /læf/，gh 唸 /f/。"}}},
 {say:"第二種：gh 不發音，安安靜靜的！{eight} 八、{daughter} 女兒、{though} 雖然，還有過去式 {taught}、{caught}、{bought}、{thought}。", board:[["eight",["gh"],false,true],["daughter",["gh"],false,true],["though",["gh"],false,true],["bought",["gh"],false,true]]},
 {say:"這組也有口訣！", chant:"eight、daughter、though，gh 安靜不出聲！"},
 {ask:{q:"daughter 的 gh 唸什麼？", opts:["/f/","/g/","不發音"], ans:2,
   ok:"對！daughter 唸 /ˈdɔtɚ/，gh 不發音。",
   bad:{0:"daughter 的 gh 後面接 t，是安靜的，不唸 /f/。",1:"gh 在字中間不唸 /g/，daughter 的 gh 不發音。"},
   again:{q:"eight 的 gh 唸什麼？", opts:["不發音","/f/","/g/"], ans:0, exp:"eight 唸 /et/，gh 不發音，和 ate 唸法一樣。"}}},
 {say:"有沒有小撇步？gh 後面緊接著 <<t>> 的時候，幾乎都不發音：taught、bought、daughter、night。gh 在字尾的時候就要小心，laugh、enough 唸 /f/，可是 though、high 不發音，只能一個一個記。", board:[["taught   bought   daughter",["ght"],false,true],["laugh   enough",["gh"],false,true],["though   high",["gh"],false,true]]},
 {ask:{q:"哪一個字的 gh 唸 /f/？", opts:["night","cough","eight"], ans:1,
   ok:"很好！cough 唸 /kɔf/，gh 唸 /f/。",
   bad:{0:"night 的 igh 唸 /aɪ/，gh 不發音。",2:"eight 的 gh 不發音，唸 /et/。"},
   again:{q:"哪一個字的 gh 不發音？", opts:["tough","bought","laugh"], ans:1, exp:"bought 的 gh 後面接 t，不發音。"}}},
 {say:"加碼一個：gh 在字的開頭時，唸 /g/，h 不發音，像 {ghost} 鬼。萬聖節的時候會遇到它！", board:[["ghost",["gh"],false,true]]},
 {ask:{say:"最後一題！", q:"哪一個字的 gh 不發音？", opts:["laugh","tough","daughter"], ans:2,
   ok:"完美！daughter 的 gh 後面接 t，安靜不出聲。",
   bad:{0:"laugh 的 gh 要吹氣唸 /f/。",1:"tough 的 gh 要吹氣唸 /f/。"},
   again:{q:"ghost 的 gh 唸什麼？", opts:["/g/","/f/","不發音"], ans:0, exp:"gh 在字首唸 /g/：ghost。"}}},
 {say:"gh 課完成！laugh、enough、cough，gh 吹氣唸 f；eight、daughter、though，gh 安靜不出聲；gh 後面接 t 幾乎都不發音；字首的 gh 唸 /g/。最後一課來學縮寫怎麼唸！", end:true}
],
p4:[
 {say:"同學好！現在完成式的句子裡，外國人很少把 I have 一個字一個字唸，常常縮成 {I've}。今天來學縮寫怎麼唸，聽力考試才聽得懂！", board:[["I have → I've",["'ve"],false,true],["you have → you've",["'ve"],false,true]]},
 {say:"<<'ve>> 只剩下一個 /v/ 的聲音，黏在前面的字後面，不多一拍。{I've} 像「愛夫」連在一起；{you've}、{we've}、{they've} 也一樣。", board:[["I've   you've",["'ve"],false,true],["we've   they've",["'ve"],false,true]]},
 {say:"唸口訣，上牙咬下唇！", chant:"have 縮成 've，嘴唇咬一下 v！"},
 {ask:{q:"I've 怎麼唸？", opts:["/aɪv/，一拍唸完","/aɪ hæv/，分成兩個字","/aɪ vi/，最後唸 E"], ans:0,
   ok:"答對！I've 只有一拍，最後輕輕咬一下 /v/。",
   bad:{1:"那是沒有縮寫的 I have。縮寫之後只剩一拍。",2:"'ve 的 e 不發音，只唸 /v/。"},
   again:{q:"we've 有幾拍？", opts:["1 拍","2 拍"], ans:0, exp:"we've 唸 /wiv/，只有一拍。"}}},
 {say:"<<'s>> 的唸法跟著前面的音走：{she's}、{he's} 唸 /z/；{it's} 前面是無聲的 t，所以唸 /s/，合起來像「疵」/ts/。", board:[["she's   he's → /z/",["'s"],false,true],["it's → /ts/",["'s"],false,true]]},
 {ask:{q:"He's tired. 裡的 He's 是什麼？", opts:["He has","He is","He was"], ans:1,
   ok:"對！後面接形容詞 tired，所以是 He is。",
   bad:{0:"He has 後面要接過去分詞。tired 在這裡是形容詞，所以是 He is。",2:"縮寫 's 只會是 is 或 has，不會是 was。"},
   again:{q:"He's eaten lunch. 裡的 He's 是什麼？", opts:["He is","He has","He was"], ans:1, exp:"後面接過去分詞 eaten，所以是 He has。"}}},
 {say:"否定的縮寫有兩拍：{haven't} 唸 HAV‧ent，{hasn't} 唸 HAS‧ent。中間的 o 不見了，變成輕輕的 /ə/，最後的 t 輕輕收尾。注意 hasn't 的 s 唸 /z/！", board:[["HAV‧en't",["HAV"],false,true],["HAS‧n't（s 唸 /z/）",["s"],false,true]]},
 {say:"這也有口訣！", chant:"haven't、hasn't 兩拍唸，t 輕輕收尾！"},
 {ask:{q:"hasn't 的 s 唸起來像？", opts:["/s/","/z/","不發音"], ans:1,
   ok:"很好！hasn't 的 s 唸 /z/，和 has 一樣。",
   bad:{0:"has 的 s 本來就唸 /z/，縮寫之後也一樣。",2:"s 要唸出來，而且唸 /z/。"},
   again:{q:"haven't 有幾拍？", opts:["1 拍","2 拍","3 拍"], ans:1, exp:"haven't 唸 HAV‧ent，兩拍。"}}},
 {say:"最後提醒：肯定的簡答句尾不能縮寫！要說 {Yes, I have.}，不能說 Yes, I've.。可是否定的簡答可以縮寫：{No, I haven't.}", board:[["Yes, I have.",["have"]],["Yes, I've.",[],true],["No, I haven't.",["haven't"]]]},
 {ask:{say:"最後一題！", q:"Have you seen it? — Yes, ___", opts:["I've.","I have.","I has."], ans:1,
   ok:"完美！肯定簡答的句尾要說完整的 I have。",
   bad:{0:"肯定簡答的句尾不能縮寫，要說 Yes, I have.。",2:"主詞 I 要配 have，不是 has。"},
   again:{q:"Has she left? — No, ___", opts:["she hasn't.","she's not.","she isn't."], ans:0, exp:"用 Has 問，否定簡答用 hasn't。"}}},
 {say:"發音課全部完成！今天學到：'ve 咬一下 v；'s 跟著前面唸 /z/ 或 /s/；haven't、hasn't 兩拍唸；肯定簡答不能縮寫。加上 en 字尾、i a u 母音歌、調皮的 gh，期末考聽力一定沒問題！", end:true}
]};

/* ---------- 插圖用的小物件（只在這個單元使用） ---------- */
const J213 = {
  flag: (x, y, s, k) => {
    const body = {
      jp: `<rect x="-18" y="-14" width="36" height="24" fill="#fff"/><circle cx="0" cy="-2" r="7" fill="#dc2626"/>`,
      kr: `<rect x="-18" y="-14" width="36" height="24" fill="#fff"/><path d="M-7 -2 A7 7 0 0 1 7 -2 Z" fill="#dc2626"/><path d="M-7 -2 A7 7 0 0 0 7 -2 Z" fill="#2563eb"/><path d="M-15 -11 l4 3 M-15 7 l4 -3 M15 -11 l-4 3 M15 7 l-4 -3" stroke="#111" stroke-width="2"/>`,
      us: Array.from({length:7}, (_, i) => `<rect x="-18" y="${(-14 + i * 24 / 7).toFixed(2)}" width="36" height="${(24 / 7).toFixed(2)}" fill="${i % 2 ? "#fff" : "#dc2626"}"/>`).join("") + `<rect x="-18" y="-14" width="16" height="13" fill="#1e3a8a"/>` + [[-15,-11],[-10,-11],[-5,-11],[-13,-7],[-8,-7],[-15,-3],[-10,-3],[-5,-3]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r=".9" fill="#fff"/>`).join(""),
      fr: `<rect x="-18" y="-14" width="12" height="24" fill="#1d4ed8"/><rect x="-6" y="-14" width="12" height="24" fill="#fff"/><rect x="6" y="-14" width="12" height="24" fill="#dc2626"/>`,
      de: `<rect x="-18" y="-14" width="36" height="8" fill="#111"/><rect x="-18" y="-6" width="36" height="8" fill="#dc2626"/><rect x="-18" y="2" width="36" height="8" fill="#facc15"/>`,
      ca: `<rect x="-18" y="-14" width="9" height="24" fill="#dc2626"/><rect x="-9" y="-14" width="18" height="24" fill="#fff"/><rect x="9" y="-14" width="9" height="24" fill="#dc2626"/>` + star(0, -2, 6, "#dc2626"),
      tw: `<rect x="-18" y="-14" width="36" height="24" fill="#dc2626"/><rect x="-18" y="-14" width="18" height="12" fill="#1e40af"/>` + star(-9, -8, 4.6, "#fff") + `<circle cx="-9" cy="-8" r="2.7" fill="#1e40af"/><circle cx="-9" cy="-8" r="2.1" fill="#fff"/>`
    }[k] || "";
    return grp(x, y, s, `<rect x="-21" y="-16" width="2.6" height="48" rx="1.2" fill="#8b5a2b"/>` + body + `<rect x="-18" y="-14" width="36" height="24" fill="none" stroke="#d1d5db" stroke-width=".8"/>`);
  },
  plane: (x, y, s, c = "#fff") => grp(x, y, s, `<path d="M-6 -2 L-14 -16 H-8 L6 -2 Z" fill="#93c5fd"/><path d="M-34 0 Q-34 -7 -24 -7 H24 Q36 -6 38 0 Q36 6 24 7 H-24 Q-34 7 -34 0 Z" fill="${c}" stroke="#94a3b8" stroke-width="1.5"/><path d="M28 -4 Q34 -3 35 0 H28 Z" fill="#1e3a8a"/>` + [-12, -5, 2, 9, 16].map(xx => `<circle cx="${xx}" cy="-2" r="1.8" fill="#93c5fd"/>`).join("") + `<path d="M-6 2 L-18 22 H-9 L10 2 Z" fill="#60a5fa"/><path d="M-26 -6 L-32 -20 H-25 L-16 -6 Z" fill="#60a5fa"/>`),
  building: (x, y, s, c, label) => grp(x, y, s, `<rect x="-26" y="-50" width="52" height="50" rx="2" fill="${c}"/>` + [-40, -28, -16].map(yy => [-18, -4, 10].map(xx => `<rect x="${xx}" y="${yy}" width="8" height="8" rx="1" fill="#bfe6ff"/>`).join("")).join("") + `<rect x="-6" y="-12" width="12" height="12" rx="1" fill="#a86d36"/><rect x="-22" y="-62" width="44" height="11" rx="2" fill="#ef4444"/>` + txt(0, -53.5, label, 8, "#fff")),
  tower: (x, y, s) => grp(x, y, s, `<rect x="-4" y="-50" width="8" height="50" fill="#cbd5e1"/><path d="M-12 -62 H12 L9 -50 H-9 Z" fill="#60a5fa"/><rect x="-13" y="-66" width="26" height="4" rx="2" fill="#475569"/><rect x="-1" y="-74" width="2" height="8" fill="#475569"/><circle cx="0" cy="-75" r="2" fill="#ef4444"/>`),
  palm: (x, y, s) => grp(x, y, s, `<path d="M0 0 Q4 -20 -2 -40" stroke="#a16207" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M-2 -40 Q-18 -46 -26 -34 Q-14 -40 -2 -40 Z M-2 -40 Q14 -50 24 -38 Q12 -42 -2 -40 Z M-2 -40 Q-8 -54 -20 -54 Q-10 -48 -2 -40 Z M-2 -40 Q6 -56 18 -54 Q8 -48 -2 -40 Z" fill="#22c55e"/><circle cx="-4" cy="-38" r="2.5" fill="#92400e"/><circle cx="1" cy="-37" r="2.5" fill="#92400e"/>`),
  mic: (x, y, s) => grp(x, y, s, `<rect x="-2" y="0" width="4" height="20" rx="2" fill="#374151"/><rect x="-6" y="-14" width="12" height="16" rx="6" fill="#9ca3af"/><path d="M-6 -8 H6 M-6 -4 H6" stroke="#6b7280" stroke-width="1"/>`),
  note: (x, y, s, c = "#8b5cf6") => grp(x, y, s, `<path d="M4 -16 V6" stroke="${c}" stroke-width="2.5"/><ellipse cx="0" cy="6" rx="5" ry="3.8" fill="${c}" transform="rotate(-20 0 6)"/><path d="M4 -16 Q12 -12 10 -4" stroke="${c}" stroke-width="2.5" fill="none"/>`),
  tooth: (x, y, s) => grp(x, y, s, `<path d="M-14 -14 Q-14 -22 -6 -20 Q0 -17 6 -20 Q14 -22 14 -14 Q14 -2 10 8 Q8 16 5 16 Q2 16 1 6 Q0 2 -1 6 Q-2 16 -5 16 Q-8 16 -10 8 Q-14 -2 -14 -14 Z" fill="#fff" stroke="#cbd5e1" stroke-width="1.5"/><circle cx="-5" cy="-8" r="1.5" fill="${INK}"/><circle cx="5" cy="-8" r="1.5" fill="${INK}"/><path d="M-3 -3 Q0 0 3 -3" stroke="${INK}" stroke-width="1.2" fill="none" stroke-linecap="round"/>`),
  flask: (x, y, s) => grp(x, y, s, `<path d="M-5 -22 H5 V-8 L16 14 Q18 20 12 20 H-12 Q-18 20 -16 14 L-5 -8 Z" fill="#e0f2fe" stroke="#94a3b8" stroke-width="1.5"/><path d="M-11 8 H11 L15 15 Q16 18 12 18 H-12 Q-16 18 -15 15 Z" fill="#a78bfa"/><circle cx="-3" cy="2" r="2" fill="#a78bfa"/><circle cx="4" cy="-4" r="1.5" fill="#a78bfa"/>`),
  palette: (x, y, s) => grp(x, y, s, `<path d="M0 -20 C18 -20 26 -8 22 4 C19 12 10 8 6 14 C2 22 -14 20 -20 8 C-26 -6 -14 -20 0 -20 Z" fill="#fcd9a8" stroke="#d6a76a" stroke-width="1.5"/><circle cx="-10" cy="-8" r="4" fill="#ef4444"/><circle cx="2" cy="-12" r="4" fill="#fbbf24"/><circle cx="13" cy="-6" r="4" fill="#3b82f6"/><circle cx="-12" cy="6" r="4" fill="#22c55e"/><circle cx="6" cy="6" r="3" fill="#fff7ed"/>`),
  fire: (x, y, s) => grp(x, y, s, `<path d="M0 -26 Q14 -10 10 4 Q8 14 0 14 Q-8 14 -10 4 Q-12 -8 -4 -14 Q-4 -6 0 -4 Q4 -12 0 -26 Z" fill="#f97316"/><path d="M0 -8 Q6 0 4 8 Q2 12 0 12 Q-4 12 -5 6 Q-4 0 0 -8 Z" fill="#fde047"/>`),
  helmet: (x, y, s) => grp(x, y, s, `<path d="M-19 -66 Q-18 -86 0 -86 Q18 -86 19 -66 Z" fill="#facc15"/><rect x="-23" y="-68" width="46" height="5" rx="2.5" fill="#eab308"/><rect x="-3" y="-84" width="6" height="16" rx="2" fill="#eab308"/>`),
  sky: () => O.cloud(30, 30, .8) + O.cloud(128, 92, .7)
};
const J = J213;
/* 國家：大國旗；國籍：小朋友拿著國旗 */
const countryPic = (k, bg) => svgWrap(bg, ground() + J.flag(70, 58, 1.7, k) + spark(132, 30, 1) + spark(26, 26, .7));
const nationPic = (k, bg, girl) => svgWrap(bg, ground() + (girl ? girlP(56, {pose:"wave", mood:"open"}) : kid(56, {pose:"wave", mood:"open"})) + J.flag(118, 62, 1.1, k));

/* ---------- 單字插圖（其他抽象的字用單字陣列第 7 欄的概念卡） ---------- */
Object.assign(ILLUS, {
  airport: () => svgWrap("#e0f2fe", ground("#cbd5e1") + J.tower(40, 104, 1) + J.plane(106, 40, .9) + O.cloud(130, 80, .6)),
  plane: () => svgWrap("#dbeafe", J.sky() + J.plane(80, 58, 1.4)),
  flight: () => svgWrap("#e0f2fe", `<path d="M14 100 Q60 90 90 60" stroke="#93c5fd" stroke-width="2.5" stroke-dasharray="5 5" fill="none"/>` + J.plane(112, 44, .9) + O.cloud(40, 30, .7)),
  tourist: () => svgWrap("#fef9c3", ground() + J.building(118, 102, .8, "#fcd34d", "MUSEUM") + kid(56, {pose:"point", mood:"open", acc:["straw"], oc:"#f97316"}) + bubble(40, 24, "Wow!", 46)),
  hotel: () => svgWrap("#ecfeff", ground() + J.building(80, 102, 1.3, "#93c5fd", "HOTEL") + O.tree(26, 92, .6) + O.tree(136, 92, .6)),
  island: () => svgWrap("#e0f7ff", `<path d="M0 84 Q40 78 80 84 T160 84 V120 H0 Z" fill="#60a5fa"/><ellipse cx="80" cy="88" rx="44" ry="10" fill="#fde68a"/>` + J.palm(84, 88, 1) + O.sun(130, 28, .7)),
  Japan: () => countryPic("jp", "#fff1f2"),
  Japanese: () => nationPic("jp", "#fff1f2", true),
  Korea: () => countryPic("kr", "#f1f5f9"),
  Korean: () => nationPic("kr", "#f1f5f9", false),
  America: () => countryPic("us", "#eff6ff"),
  American: () => nationPic("us", "#eff6ff", false),
  France: () => countryPic("fr", "#eef2ff"),
  French: () => nationPic("fr", "#eef2ff", true),
  Germany: () => countryPic("de", "#fefce8"),
  German: () => nationPic("de", "#fefce8", false),
  Canada: () => countryPic("ca", "#fef2f2"),
  Canadian: () => nationPic("ca", "#fef2f2", true),
  Taiwan: () => countryPic("tw", "#fff7ed"),
  Taiwanese: () => nationPic("tw", "#fff7ed", false),
  pilot: () => svgWrap("#e0f2fe", ground("#cbd5e1") + kid(54, {pose:"thumb", mood:"open", acc:["cap","tie"], oc:"#1e3a8a"}) + J.plane(118, 36, .6) + O.cloud(118, 80, .6)),
  reporter: () => svgWrap("#f5f3ff", ground() + girlP(64, {pose:"hold", mood:"open", oc:"#8b5cf6"}) + J.mic(72, 80, .8) + bubble(118, 30, "News!", 50)),
  writer: () => svgWrap("#fffbeb", ground("#f3dfc3") + kid(42, {eyes:"happy", acc:["glasses"], oc:"#14b8a6"}) + O.openBook(112, 70, 1.1) + O.pen(136, 46, .8)),
  singer: () => svgWrap("#fdf2f8", ground("#f6d9e6") + girlP(70, {pose:"cheer", mood:"open"}) + J.mic(98, 70, .8) + J.note(26, 40, 1) + J.note(128, 30, .9, "#ec4899") + spark(130, 70, .8)),
  sung: () => svgWrap("#f5f3ff", ground() + kid(58, {mood:"o", eyes:"closed", oc:"#8b5cf6"}) + J.note(104, 36, 1.1) + J.note(128, 56, .8, "#ec4899") + J.note(112, 80, .7)),
  artist: () => svgWrap("#fff7ed", ground() + kid(54, {pose:"hold", mood:"open", oc:"#f97316"}) + J.palette(116, 66, 1.1) + O.brush(130, 34, .8, "#3b82f6")),
  scientist: () => svgWrap("#ecfdf5", ground("#d1fae5") + kid(56, {coat:true, acc:["glasses"], mood:"open", oc:"#10b981"}) + J.flask(116, 74, 1.1) + spark(132, 30, .8) + spark(104, 40, .5)),
  dentist: () => svgWrap("#f0f9ff", ground("#e0f2fe") + girlP(52, {coat:true, mood:"smile", oc:"#38bdf8"}) + J.tooth(116, 56, 1.5) + spark(140, 30, .8)),
  firefighter: () => svgWrap("#fff1e6", ground("#f3dfc3") + kid(56, {pose:"point", oc:"#dc2626"}) + J.helmet(56, 108, 1) + J.fire(120, 82, 1.2) + J.fire(140, 92, .7)),
  written: () => svgWrap("#fefce8", O.openBook(70, 66, 1.6, "ABC") + O.pen(130, 56, 1)),
  flown: () => svgWrap("#dbeafe", J.sky() + `<path d="M10 104 Q50 96 70 70" stroke="#93c5fd" stroke-width="2.5" stroke-dasharray="5 5" fill="none"/>` + J.plane(96, 48, 1)),
  laugh: () => svgWrap("#fef3c7", ground() + kid(60, {mood:"open", eyes:"happy", pose:"cheer", oc:"#f59e0b"}) + bubble(118, 30, "Ha ha!", 54) + spark(130, 70, .8)),
  daughter: () => svgWrap("#fdf2f8", ground("#f6d9e6") + P({x:56, y:108, hair:"bun", hc:"#4a3428", oc:"#a78bfa", dress:true}) + girlP(106, {s:.72, mood:"open"}) + heart(82, 30, 1))
});

/* ---------- 記憶小撇步 ---------- */
Object.assign(MEMO, {
  experience:"experience 唸起來像「一次必瑞恩斯」：一次必定會有收穫的，就是經驗！",
  abroad:"a（到）+ broad（寬廣的）：到寬廣的外面世界，就是出國。abroad 是副詞，前面不加 to。",
  airport:"air（空中）+ port（港口）＝空中的港口，就是機場。",
  plane:"plane 和 plan（計畫）只差一個 e：計畫好了（plan），加個 e 就搭飛機（plane）出發！",
  flight:"fly（飛）的名詞就是 flight：一趟飛行、一個航班。igh 唸 /aɪ/，和 night 押韻。",
  foreign:"foreign 唸起來像「佛潤」：佛祖從遙遠的外國來。g 不發音，拼字別漏掉 ei 和 g！",
  culture:"culture 唸起來像「卡球」：每個國家都有自己的文化，像在看不同的世界之球。",
  country:"count（數）+ ry：數一數世界上有幾個國家？ou 唸短 u，和 cousin 一樣。",
  guide:"guide 的 u 不發音，唸起來像「蓋的」：導遊幫你把行程蓋（規劃）得好好的！",
  language:"language 唸起來像「藍鬼記」：藍色的鬼會說很多種語言！",
  tourist:"tour（旅遊）+ ist（……的人）＝旅遊的人，就是觀光客。",
  hotel:"hotel 唸起來像「厚頭」：飯店的枕頭又厚又軟。重音在後面：ho-TEL。",
  souvenir:"souvenir 來自法文「記得」：把旅行記在心裡的東西，就是紀念品。唸起來像「蘇維尼兒」。",
  famous:"fame（名聲）去 e + ous（……的）＝有名聲的，就是有名的。",
  island:"is + land（陸地）：一塊被海包圍的陸地，就是島。s 不發音，唸 /ˈaɪlənd/。",
  visitor:"visit（拜訪）+ or（……的人）＝來拜訪的人，就是訪客、遊客。",
  Japan:"Japan 唸起來像「賈潘」：重音在後面 ja-PAN。日本人是 Japanese。",
  Japanese:"Japan + ese ＝日本的、日本人、日語。ese 結尾的國籍還有 Chinese、Taiwanese。",
  Korea:"Korea 唸起來像「可瑞亞」：重音在中間 ko-RE-a。韓國人是 Korean。",
  Korean:"Korea + n ＝韓國的、韓國人、韓語。很多國籍是國名加 n：America → American。",
  America:"America 的名字來自探險家 Amerigo（亞美利哥）。開頭 A 輕輕唸，重音在 ME。",
  American:"America + n ＝美國的、美國人。當名詞「一個美國人」要用 an American。",
  France:"France 唸起來像「福蘭斯」：法國有很多芬芳的花。法國人、法語是 French。",
  French:"French 和 France 長得像：France 是國家，French 是法國的、法國人、法語。French fries 就是薯條！",
  Germany:"Germany 唸起來像「卷麼尼」：德國人把麵包捲起來。G 唸 /dʒ/。",
  German:"Germany 去掉 y 就是 German（德國的、德國人、德語）。",
  Canada:"Canada 唸起來像「看拿大」：看看地圖，加拿大好大！",
  Canadian:"Canada + ian ＝加拿大的、加拿大人。注意重音跑到第二塊：ca-NA-di-an。",
  Taiwan:"Taiwan 就是「台灣」的音譯，ai 唸「愛」：我愛台灣！",
  Taiwanese:"Taiwan + ese ＝台灣的、台灣人、台語。和 Japanese、Chinese 一樣是 ese 結尾。",
  engineer:"engine（引擎）+ er ＝搞引擎的人，就是工程師。重音在最後：en-gi-NEER。",
  pilot:"pilot 唸起來像「派樂特」：開飛機派對最快樂，就是機師！",
  reporter:"report（報導）+ er ＝做報導的人，就是記者。",
  writer:"write（寫）+ r ＝寫東西的人，就是作家。w 不發音。",
  singer:"sing（唱歌）+ er ＝唱歌的人，就是歌手。",
  artist:"art（藝術）+ ist（……的人）＝藝術家。ist 結尾的職業還有 scientist、dentist。",
  scientist:"science（科學）+ ist ＝做科學的人，就是科學家。",
  dentist:"dent 是「牙齒」的字根（dental 牙齒的）+ ist ＝牙齒的專家，就是牙醫。",
  firefighter:"fire（火）+ fighter（戰士）＝和火戰鬥的人，就是消防員。",
  lawyer:"law（法律）+ yer ＝懂法律的人，就是律師。",
  actor:"act（演戲）+ or ＝演戲的人，就是演員。",
  job:"job 唸起來像「家寶」：有份好工作，就是家裡的寶。",
  been:"be 的三態：be - was / were - been。have been to 是「去過」。",
  gone:"go 的三態：go - went - gone。gone 唸起來像「剛」：剛走掉了，人不在！",
  done:"do 的三態：do - did - done。done 和 sun 押韻：太陽下山，功課也做完了！",
  seen:"see 的三態：see - saw - seen。seen 就是 see 加一個 n。",
  eaten:"eat 的三態：eat - ate - eaten。eat 加 en 就是過去分詞。",
  taken:"take 的三態：take - took - taken。去掉 e 再加 en，a 還是唸長音。",
  written:"write 的三態：write - wrote - written。i 變短音，t 要重複兩個。",
  spoken:"speak 的三態：speak - spoke - spoken。ea 變成 o，再加 en。",
  known:"know 的三態：know - knew - known。know 加 n，k 不發音。",
  given:"give 的三態：give - gave - given。give 加 n 就好。",
  flown:"fly 的三態：fly - flew - flown。flown 和 known、grown 押韻。",
  sung:"sing 的三態：sing - sang - sung。母音 i、a、u 一路往下溜。",
  already:"all（全部）+ ready（準備好）＝全部都準備好了，就是已經。拼字只有一個 l！",
  yet:"yet 唸起來像「耶特」：耶，我還沒做完！yet 永遠站在句尾。",
  just:"just 唸起來像「賈斯特」：剛剛才發生的事，用 just。",
  ever:"ever 唸起來像「A 粉」：你曾經（ever）當過 A 咖的粉絲嗎？",
  since:"since 唸起來像「心思」：從那時候起，心思就一直放在那裡。since 後面接起點。",
  before:"be + fore（前面）＝在前面，就是以前。",
  once:"one（一）的副詞就是 once（一次）。once 和 one 一樣，開頭唸 /w/。",
  twice:"two（二）的副詞就是 twice（兩次）。三次以上就說 three times。",
  laugh:"laugh 唸起來像「辣服」：吃到辣的，笑著說服了！gh 唸 /f/。",
  enough:"enough 唸起來像「一那夫」：一碗就夠了，ough 唸 /ʌf/。",
  daughter:"daughter 裡面藏著 aught，gh 不發音，唸起來像「豆特」：女兒愛吃豆子。"
});

registerUnit("j2-1-3", {name:"國二 上學期 期末考", sub:"現在完成式、already／yet／ever／never、for／since、現在完成式 vs 過去式", words:J2_1_3_WORDS, grammar:J2_1_3_GRAMMAR, quiz:J2_1_3_QUIZ, classes:Object.assign({}, J2_1_3_CLASS, J2_1_3_PHONICS_CLASS), phonics:J2_1_3_PHONICS});
})();
