/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高一下學期 期末考（通用範圍）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S1_2_3_WORDS = [
/* ---- r1 動詞字尾 -ify / -ate / -ize ---- */
["simplify","v.","簡化",[
 ["No matter how difficult the poem is, our teacher can simplify it for us.","不論這首詩多難，老師都能幫我們把它講得簡單易懂。","no matter how + 形容詞 + 主詞 + 動詞：how 後面要緊接形容詞 difficult，不能寫成 no matter how the poem is difficult。"],
 ["The story was simplified so that young children could understand it.","這個故事被改寫得比較簡單，讓年幼的孩子也看得懂。","was simplified 是過去式被動；so that + 子句 表示目的「以便……」。"],
 ["This is a book whose ideas have been simplified for beginners.","這是一本把觀念簡化給初學者看的書。","whose + 名詞 ideas 表示「這本書的觀念」；have been simplified 是現在完成式被動。"]],
 "simpl=簡單的|-ify=使","使變簡單 → 簡化","✂️|簡化"],
["classify","v.","分類",[
 ["Libraries classify books by subject.","圖書館依照主題把書分類。","by + 名詞 表示「依照……」；現在簡單式表示一般的事實。"],
 ["Whatever kind of music it is, this app can classify it in seconds.","不管是哪一種音樂，這個 app 都能在幾秒內分類。","whatever 可以直接接名詞：Whatever kind of music = No matter what kind of music。"],
 ["Not until we classified the poems did we notice how many were about love.","直到我們把詩分類，才發現有好多首都在寫愛情。","Not until 放句首，主要子句要倒裝：did we notice，不是 we noticed。"]],
 "class=類別|-ify=使","使歸入類別 → 分類","🗂️|分類"],
["identify","v.","辨認；確認",[
 ["The police identified the man whose bag had been stolen.","警方確認了那位包包被偷的男子的身分。","whose bag 表示「那個男子的包包」；had been stolen 是過去完成式被動，表示比 identified 更早發生。"],
 ["Despite the darkness, she identified her friend by his voice.","儘管四周很暗，她還是從聲音認出了朋友。","despite + 名詞，despite 後面不能加 of。"],
 ["It is important for teenagers to identify their own strengths.","青少年找出自己的長處是很重要的。","It is + 形容詞 + for 人 + to V：It 是虛主詞，真正的主詞是 to identify ...。"]],
 "ident=相同|-ify=使","確認「就是同一個」→ 辨認","🔍|辨認"],
["satisfy","v.","使滿意；滿足",[
 ["No matter what I cook, my little brother is never satisfied.","不管我煮什麼，我弟弟永遠都不滿意。","no matter what = whatever，what 是 cook 的受詞；人「感到」滿意用過去分詞 satisfied。"],
 ["The ending of the novel didn't satisfy many readers.","這本小說的結局沒有讓許多讀者滿意。","satisfy 是及物動詞，主詞是「讓人滿意的東西」，受詞是人。"],
 ["Even though the result was satisfying, the team kept practicing.","雖然結果令人滿意，隊伍還是繼續練習。","even though 引導讓步子句，後面不能再加 but；satisfying 形容「令人滿意的」事物；keep + V-ing。"]],
 "satis=足夠|-fy=使","使感到足夠 → 使滿意","😌|滿意"],
["justify","v.","證明……有理；為……辯護",[
 ["Nothing can justify cheating on an exam.","沒有任何理由能為考試作弊辯護。","cheating 是動名詞，當 justify 的受詞；cheat on an exam 是「考試作弊」。"],
 ["However hard he tried, he couldn't justify his decision to his parents.","不論他多努力，還是無法向父母證明他的決定是對的。","However hard = No matter how hard，however 後面要緊接形容詞或副詞。"],
 ["You need facts to justify your opinion in an essay.","寫論說文時，你需要用事實來支持自己的意見。","to justify 是不定詞，表示目的「為了……」。"]],
 "just=公正的|-ify=使","使顯得公正合理 → 證明有理","⚖️|有道理"],
["activate","v.","啟動；使活躍",[
 ["Press this button to activate the alarm.","按這個按鈕來啟動警報器。","祈使句 Press ...；to activate 表示目的。"],
 ["Reading aloud can activate different parts of your brain.","大聲朗讀可以活化大腦的不同部位。","動名詞片語 Reading aloud 當主詞；can 後面接原形動詞。"],
 ["The card won't work until it is activated.","這張卡要等啟用之後才能使用。","not ... until 表示「直到……才……」；until 子句表示未來時用現在式 is activated，不用 will be。"]],
 "activ=活動的|-ate=使","使活動起來 → 啟動","🔛|啟動"],
["illustrate","v.","畫插圖；舉例說明",[
 ["The book was written by my aunt and illustrated by her son.","這本書由我阿姨撰寫，她兒子畫插圖。","was written ... and (was) illustrated：兩個被動動詞共用 was。"],
 ["The teacher used a funny story to illustrate the meaning of the word.","老師用一個好笑的故事來說明這個字的意思。","use A to V 表示「用 A 來做……」。"],
 ["This is the artist whose drawings illustrate the famous fairy tale.","這就是為那則知名童話畫插畫的藝術家。","whose 後面一定緊接名詞：whose drawings = the artist's drawings。"]],
 "il-=在上面|lustr=照亮|-ate=使","把光照在上面讓人看清楚 → 圖解說明","🖍️|插圖"],
["intensify","v.","加強；使更強烈",[
 ["The music intensified as the hero walked onto the stage.","主角走上舞台時，音樂變得更強烈。","as 表示「當……的時候」；intensify 也可以當不及物動詞「變強烈」。"],
 ["No matter how hard they tried, the argument only intensified.","不管他們多努力，爭執只是越來越激烈。","no matter how + 副詞 hard + 主詞 + 動詞；only 強調「反而只是」。"],
 ["The heat wave was intensified by the lack of rain.","熱浪因為沒有下雨而更加嚴重。","was intensified by 是被動；the lack of + 名詞 表示「缺少……」。"]],
 "intens=強烈的|-ify=使","使變得更強烈 → 加強","🔊|加強"],
["fascinate","v.","使著迷",[
 ["Stars have fascinated people for thousands of years.","數千年來，星星一直讓人們著迷。","現在完成式 + for + 一段時間，表示從過去持續到現在。"],
 ["I was fascinated by the dancer whose movements were as light as a feather.","我被那位動作輕盈如羽毛的舞者迷住了。","人「感到」著迷用 fascinated；whose movements = the dancer's movements。"],
 ["Whatever the topic is, the speaker makes it fascinating.","不管主題是什麼，這位講者都能講得引人入勝。","Whatever the topic is = No matter what the topic is；make + 受詞 + 形容詞，fascinating 形容「令人著迷的」事物。"]],
 "fascin=施咒迷住|-ate=使","像被施了咒 → 使著迷","🤩|著迷"],
["magnify","v.","放大；誇大",[
 ["A microscope can magnify things hundreds of times.","顯微鏡可以把東西放大好幾百倍。","hundreds of times 表示「好幾百倍」。"],
 ["Even though the problem was small, the news magnified it.","雖然問題不大，新聞卻把它誇大了。","even though 引導事實的讓步子句，後面不加 but。"],
 ["Not until I magnified the photo did I see the tiny cat.","直到我把照片放大，才看到那隻小貓。","Not until 句首倒裝：did I see。"]],
 "magn=大|-ify=使","使變大 → 放大","🔎|放大"],
["criticize","v.","批評",[
 ["Even if others criticize you, don't give up your dream.","即使別人批評你，也不要放棄夢想。","even if 表示「即使（假設的情況）」，和表示事實的 even though 不同。"],
 ["The movie was criticized for its weak plot.","這部電影因情節薄弱而受到批評。","be criticized for + 名詞 表示「因為……被批評」。"],
 ["It is easy to criticize, but it is hard to create.","批評很容易，創作很難。","兩個虛主詞句型用 but 連接，表示對比。"]],
 "critic=評論家|-ize=做","像評論家一樣挑毛病 → 批評","👎|批評"],
["symbolize","v.","象徵",[
 ["In this poem, the moon symbolizes home.","在這首詩裡，月亮象徵家鄉。","主詞 the moon 是單數，現在式動詞加 s。"],
 ["A dove is a bird which symbolizes peace.","鴿子是象徵和平的鳥。","which 引導限定關係子句修飾 a bird，也可以換成 that；動詞配合先行詞 a bird 用 symbolizes。"],
 ["Red is often used to symbolize good luck in Taiwan.","在台灣，紅色常被用來象徵好運。","be used to V 表示「被用來做……」，不要和 be used to V-ing（習慣於）搞混。"]],
 "symbol=象徵|-ize=使","使成為象徵","🕊️|象徵"],
["emphasize","v.","強調",[
 ["The coach emphasized the importance of teamwork.","教練強調團隊合作的重要性。","the importance of + 名詞 表示「……的重要性」。"],
 ["No matter what subject he teaches, Mr. Lin always emphasizes thinking.","不管教什麼科目，林老師總是強調思考。","no matter what + 名詞 + 主詞 + 動詞；emphasize 後面可以接動名詞 thinking。"],
 ["The report emphasizes that reading habits are formed early.","報告強調閱讀習慣是在早期養成的。","emphasize + that 子句；are formed 是被動語態。"]],
 "emphas=強調|-ize=使","emphasis（強調）的動詞","❗|強調"],
["visualize","v.","想像（畫面）；使具體化",[
 ["Close your eyes and visualize the scene the writer describes.","閉上眼睛，想像作者描寫的場景。","the scene (that) the writer describes：關係代名詞當受詞時可以省略。"],
 ["Charts help us visualize numbers.","圖表幫助我們把數字具體化。","help + 受詞 + 原形動詞（或 to V）。"],
 ["Many athletes visualize winning before a race.","許多運動員在比賽前會想像自己獲勝。","visualize 後面接動名詞 winning。"]],
 "visual=視覺的|-ize=使","使在眼前看得見 → 想像畫面","💭|想像畫面"],
["modernize","v.","使現代化",[
 ["The old theater was modernized last year.","那間老戲院去年翻新現代化了。","was modernized 是過去式被動：戲院是「被」翻新的。"],
 ["Although the city has been modernized, it has kept many old temples.","雖然這座城市已經現代化，仍保留了許多老廟。","although 和 but 不能同時使用；has been modernized 是現在完成式被動。"],
 ["The museum plans to modernize its exhibitions by using VR.","博物館計畫運用 VR 讓展覽現代化。","plan to V 表示「計畫做……」；by + V-ing 表示方法。"]],
 "modern=現代的|-ize=使","使變得現代","🏙️|現代化"],
/* ---- r2 字首 co- / con- / com- ---- */
["coexist","v.","共存",[
 ["Humans and wild animals must learn to coexist.","人類和野生動物必須學會共存。","learn to V 表示「學會做……」。"],
 ["In this city, old temples coexist with modern buildings.","在這座城市裡，老廟和現代建築並存。","coexist with + 名詞 表示「和……共存」。"],
 ["Although they have different beliefs, the two groups coexist peacefully.","雖然信仰不同，兩個團體仍和平共處。","although 不和 but 連用；peacefully 是副詞，修飾 coexist。"]],
 "co-=一起|exist=存在","一起存在 → 共存","🐼|共存"],
["collaborate","v.","協力合作",[
 ["The singer collaborated with a famous painter on the album cover.","這位歌手和一位知名畫家合作設計專輯封面。","collaborate with 人 on 事 表示「和某人合作做某事」。"],
 ["Students who collaborate on projects often learn more.","一起合作做專題的學生常常學到更多。","who 引導限定關係子句修飾 Students；整句的主要動詞是 learn。"],
 ["Despite living in different countries, the two writers collaborated on a novel.","儘管住在不同國家，這兩位作家還是合寫了一本小說。","despite 後面可以接 V-ing：despite living = although they lived。"]],
 "col-=一起|labor=工作|-ate=使","一起工作 → 協力合作","👥|協力合作"],
["coworker","n.","同事",[
 ["My mother's coworkers threw her a birthday party.","媽媽的同事為她辦了一場生日派對。","throw 人 a party 表示「為某人舉辦派對」；throw 的過去式是 threw。"],
 ["A coworker whose desk is next to mine plays the violin.","一位座位在我隔壁的同事會拉小提琴。","whose desk = the coworker's desk；整句的主要動詞是 plays，主詞是 A coworker。"],
 ["Even though they are coworkers, they rarely talk to each other.","雖然他們是同事，卻很少交談。","even though 後面接事實；rarely 是頻率副詞，本身就有否定意思。"]],
 "co-=一起|worker=工作者","一起工作的人 → 同事","🧑‍💼|同事"],
["combine","v.","結合",[
 ["The show combines music, dance, and drama.","這場表演結合了音樂、舞蹈和戲劇。","列舉三項以上時，最後一項前面加 and。"],
 ["Her paintings combine traditional and modern styles.","她的畫結合了傳統與現代風格。","combine A and B 表示「結合 A 和 B」；也可以說 combine A with B。"],
 ["Hard work combined with good luck led to his success.","努力加上好運，帶來了他的成功。","combined with ... 是過去分詞片語，修飾 Hard work；整句只有一個主要動詞 led。"]],
 "com-=一起|bine=兩個","把兩個放在一起 → 結合","🧩|結合"],
["compassion","n.","同情；憐憫",[
 ["The nurse treated every patient with compassion.","那位護理師以同理心對待每一位病人。","with compassion 表示「帶著同情心地」。"],
 ["A writer whose works are full of compassion can touch many hearts.","作品充滿關懷的作家能打動許多人的心。","whose works = the writer's works；主要動詞是 can touch。"],
 ["Despite his own troubles, he showed compassion for others.","儘管自己也有困難，他仍對別人展現同情。","despite + 名詞；compassion for + 人 表示「對某人的同情」。"]],
 "com-=一起|pass=感受|-ion=名詞字尾","和別人一起感受痛苦 → 同情","💗|同理心"],
["compose","v.","作曲；組成",[
 ["Mozart began to compose music when he was five.","莫札特五歲就開始作曲。","begin to V 和 begin V-ing 都可以。"],
 ["The team is composed of ten actors and three writers.","這個團隊由十位演員和三位編劇組成。","be composed of = consist of，意思都是「由……組成」；但 consist of 本身不能用被動。"],
 ["This is the song which he composed for his mother.","這是他為母親寫的歌。","which 是 composed 的受詞，可以省略：the song he composed。"]],
 "com-=一起|pose=放","把音符放在一起 → 作曲；放在一起 → 組成","🎼|作曲"],
["confront","v.","面對；正視",[
 ["Sooner or later, you have to confront your fears.","你遲早都得面對自己的恐懼。","sooner or later 表示「遲早」。"],
 ["However difficult the truth is, we should confront it.","不論真相多難接受，我們都應該正視它。","However difficult = No matter how difficult。"],
 ["Not until she confronted the problem did she find a solution.","直到她正視問題，才找到解決的方法。","Not until 句首倒裝：did she find。"]],
 "con-=面對面|front=前面","站到面前面對面 → 正視","🥊|面對"],
["connect","v.","連接",[
 ["Music connects people who speak different languages.","音樂把說不同語言的人連結在一起。","who 引導限定關係子句，修飾 people。"],
 ["This bridge connects the island with the mainland.","這座橋連接了小島和本島。","connect A with/to B 表示「把 A 和 B 連接起來」。"],
 ["Not until the Wi-Fi was connected could we start the online class.","直到網路連上，我們才能開始上線上課程。","Not until 放句首，主要子句倒裝：助動詞 could 移到主詞 we 前面。"]],
 "con-=一起|nect=綁","綁在一起 → 連接","🔗|連接"],
["conclude","v.","結束；做出結論",[
 ["The concert concluded with a beautiful song.","音樂會以一首優美的歌曲作結。","conclude with + 名詞 表示「以……結束」。"],
 ["From the evidence, the scientists concluded that the theory was wrong.","根據證據，科學家們得出結論：這個理論是錯的。","conclude + that 子句 表示「推斷出……」。"],
 ["In spite of the rain, the festival concluded successfully.","儘管下雨，節慶還是圓滿落幕。","in spite of + 名詞，of 不能省略；successfully 是副詞，修飾動詞 concluded。"]],
 "con-=完全|clude=關閉","完全關起來 → 結束、下結論","🏁|結論"],
["consist","v.","由……組成（consist of）",[
 ["The play consists of three acts.","這齣戲由三幕組成。","consist of 沒有被動語態，也不用進行式：不能說 is consisted of。"],
 ["A haiku is a short poem which consists of three lines.","俳句是由三行組成的短詩。","which 引導限定關係子句；子句的動詞配合先行詞 a short poem（單數），所以用 consists。"],
 ["Happiness doesn't consist in having a lot of money.","幸福不在於擁有很多錢。","consist in + 名詞或 V-ing 表示「在於……」，和 consist of 意思不同。"]],
 "con-=一起|sist=站","一起站在裡面 → 由……組成","🧱|組成"],
["convince","v.","說服；使相信",[
 ["She convinced her parents to let her join the drama club.","她說服爸媽讓她參加戲劇社。","convince 人 to V 表示「說服某人做……」；let + 受詞 + 原形動詞。"],
 ["I am convinced that hard work pays off.","我深信努力會有回報。","be convinced that ... 表示「確信……」。"],
 ["No matter what I said, I couldn't convince him.","不管我說什麼，都無法說服他。","no matter what = whatever，what 是 said 的受詞。"]],
 "con-=完全|vince=征服","完全征服對方的想法 → 說服","🗣️|說服"],
["consensus","n.","共識",[
 ["After a long discussion, the class reached a consensus.","經過長時間的討論，全班達成了共識。","reach a consensus 表示「達成共識」。"],
 ["There is a consensus that reading is good for children.","大家都同意閱讀對孩子有益。","a consensus that + 子句，that 子句說明共識的內容。"],
 ["We didn't start the project until we had reached a consensus.","我們直到達成共識，才開始進行專題。","not ... until；had reached 是過去完成式，表示比 start 更早完成。"]],
 "con-=一起|sens=感覺|-us=名詞字尾","大家一起有同樣的感覺 → 共識","🙌|共識"],
["conform","v.","遵守；順從",[
 ["All students must conform to the school rules.","所有學生都必須遵守校規。","conform to + 名詞 表示「遵守、符合……」。"],
 ["Some teenagers feel pressure to conform to their friends.","有些青少年覺得有壓力要跟朋友一樣。","pressure to V 表示「要去做……的壓力」。"],
 ["Artists who refuse to conform often create new styles.","拒絕從眾的藝術家常常創造出新風格。","who 引導限定關係子句；refuse to V。"]],
 "con-=一起|form=形狀","和大家變成一樣的形狀 → 順從","📏|遵守"],
/* ---- r3 字根 cur / curs / cour（跑） ---- */
["current","adj./n.","目前的；水流",[
 ["The current exhibition shows works by young artists.","目前的展覽展出年輕藝術家的作品。","works 當名詞是「作品」，要加 s；by + 人 表示作者。"],
 ["Despite the strong current, the swimmer reached the shore.","儘管水流很強，那名泳者還是游到了岸邊。","despite + 名詞；current 當名詞是「水流、氣流」。"],
 ["Current events are discussed in our English class every Friday.","我們的英文課每週五會討論時事。","are discussed 是現在式被動；current events 是「時事」。"]],
 "curr=跑|-ent=形容詞字尾","正在跑的 → 目前的；會跑的水 → 水流","🌊|水流"],
["occur","v.","發生；（想法）出現",[
 ["The accident occurred at midnight.","意外發生在午夜。","occur 是不及物動詞，沒有被動：不能說 was occurred。過去式要雙寫 r：occurred。"],
 ["It never occurred to me that the quiet girl could sing so well.","我從沒想到那個安靜的女孩這麼會唱歌。","It occurs to 人 + that 子句 表示「某人想到……」，It 是虛主詞。"],
 ["Not until the play was over did it occur to him that he had forgotten a line.","直到戲演完，他才想起自己忘了一句台詞。","Not until 句首倒裝：did it occur；had forgotten 是過去完成式，表示比想起來更早發生。"]],
 "oc-=朝向|cur=跑","朝你跑過來 → 發生；跑進腦中 → 想到","💥|發生"],
["occurrence","n.","發生的事；事件",[
 ["Earthquakes are a common occurrence in Taiwan.","地震在台灣是常有的事。","a common occurrence 表示「常發生的事」。"],
 ["Power outages have become a rare occurrence in this city.","停電在這座城市已經很少發生了。","have become 是現在完成式，表示到現在為止的變化。"],
 ["The writer recorded every strange occurrence in her diary.","作家把每一件怪事都記在日記裡。","every + 單數名詞 occurrence。"]],
 "oc-=朝向|curr=跑|-ence=名詞字尾","occur 的名詞（r 要雙寫）","📅|發生的事"],
["excursion","n.","短途旅行；遠足",[
 ["Our class went on an excursion to the art museum.","我們班去美術館校外參觀。","go on an excursion to + 地點 表示「去……短程旅行」。"],
 ["The excursion was canceled because of the typhoon.","校外旅行因為颱風取消了。","because of + 名詞；because + 子句。was canceled 是被動。"],
 ["Even if it rains, the excursion will go ahead.","即使下雨，校外旅行仍會照常舉行。","even if 表示「即使」，子句用現在式 rains 表示未來；go ahead 表示「照常進行」。"]],
 "ex-=向外|curs=跑|-ion=名詞字尾","往外跑一趟 → 短途旅行","@excursion"],
["recur","v.","一再發生；復發",[
 ["The same dream recurs whenever I feel stressed.","每當我壓力大，同樣的夢就會一再出現。","whenever 表示「每當」；recur 的主詞是 The same dream，單數加 s。"],
 ["If the pain recurs, you should see a doctor.","如果疼痛再發作，你應該去看醫生。","一般條件句：If 子句用現在式，主要子句用 should + 原形動詞。"],
 ["Love is a theme that recurs in many of her novels.","愛是她許多小說中反覆出現的主題。","that 引導限定關係子句，動詞配合先行詞 a theme 用 recurs。"]],
 "re-=再|cur=跑","再跑回來 → 一再發生","🔁|一再發生"],
["curriculum","n.","課程；課綱",[
 ["Art and music are part of the school curriculum.","藝術和音樂是學校課程的一部分。","part of 前面通常不加 a。"],
 ["The new curriculum encourages students to think for themselves.","新課綱鼓勵學生獨立思考。","encourage 人 to V；think for oneself 表示「自己思考」。"],
 ["Although the curriculum is heavy, the students still have time for clubs.","雖然課程很重，學生們還是有時間參加社團。","although 引導讓步子句，主要子句不再加 but；still 表示「仍然」。"]],
 "curr=跑|-iculum=小東西","學生要跑完的一段跑道 → 課程","📚|課程"],
/* ---- r4 字根 sens / sent（感覺） ---- */
["sense","n./v.","感覺；道理；察覺",[
 ["She has a good sense of humor.","她很有幽默感。","a sense of + 名詞 表示「……感」：a sense of humor、a sense of direction。"],
 ["It makes sense to read the instructions first.","先讀說明書是有道理的。","make sense 表示「合理、說得通」；It 是虛主詞，代替 to read ...。"],
 ["Even though he said nothing, I could sense that he was upset.","雖然他什麼都沒說，我還是察覺到他不高興。","sense 當動詞是「察覺」，後面接 that 子句。"]],
 "","","👃|感覺"],
["sensitive","adj.","敏感的；體貼的",[
 ["My skin is very sensitive to the sun.","我的皮膚對陽光很敏感。","be sensitive to + 名詞 表示「對……敏感」。"],
 ["A good writer has to be sensitive to the feelings of others.","好的作家必須能體察別人的感受。","have to + 原形動詞；the feelings of others 是「別人的感受」。"],
 ["Teenagers whose parents are sensitive to their needs often feel more secure.","父母能察覺他們需求的青少年，通常比較有安全感。","whose parents = the teenagers' parents；整句的主要動詞是 feel。"]],
 "sens=感覺|-itive=……的","很容易感覺到的 → 敏感的","🌡️|敏感"],
["sensible","adj.","明智的；合理的",[
 ["It was sensible of you to bring an umbrella.","你帶了傘，真是明智。","It is + 形容詞 + of 人 + to V：形容詞是在評價「人」時用 of，不用 for。"],
 ["A sensible person saves some money for a rainy day.","明智的人會存點錢以備不時之需。","for a rainy day 表示「以備不時之需」。"],
 ["Whatever you decide, make a sensible choice.","不管你決定什麼，都要做出明智的選擇。","Whatever you decide = No matter what you decide，whatever 是 decide 的受詞。"]],
 "sens=感覺|-ible=可……的","有感覺、懂得判斷的 → 明智的","💡|明智"],
["sensation","n.","感覺；轟動",[
 ["I had a strange sensation that someone was watching me.","我有一種奇怪的感覺，好像有人在看我。","a sensation that + 子句，that 子句說明是什麼感覺；was watching 是過去進行式。"],
 ["The young pianist became an overnight sensation.","那位年輕鋼琴家一夕之間爆紅。","overnight 當形容詞是「一夕之間的」。"],
 ["The movie caused a sensation when it was first shown.","這部電影首映時引起了轟動。","cause a sensation 表示「引起轟動」；was shown 是被動。"]],
 "sens=感覺|-ation=名詞字尾","讓大家都有感覺 → 感覺；轟動","🔥|轟動"],
["nonsense","n.","胡說；廢話",[
 ["Stop talking nonsense!","別再胡說八道了！","stop + V-ing 表示「停止做……」。"],
 ["It is nonsense to say that girls can't be good at math.","說女生數學不會好，根本是胡說。","It 是虛主詞，代替 to say ...；be good at + 名詞。"],
 ["Not until I read the whole poem did I realize it wasn't nonsense.","直到讀完整首詩，我才明白它不是胡言亂語。","Not until 句首倒裝：did I realize；nonsense 是不可數名詞，不加 a。"]],
 "non-=沒有|sense=意義","沒有意義的話 → 胡說","🙄|胡說"],
["consent","n./v.","同意；准許",[
 ["You need your parents' consent to join the trip.","參加旅行需要家長同意。","parents' 是複數名詞的所有格，撇號放在 s 後面。"],
 ["The author consented to an interview after many requests.","經過多次邀請，作者終於同意接受訪問。","consent to + 名詞 表示「同意……」。"],
 ["No one may use these photos without the artist's consent.","未經藝術家同意，任何人都不得使用這些照片。","without + 名詞；may 在這裡表示「可以、准許」。"]],
 "con-=一起|sent=感覺","和你有一樣的感覺 → 同意","✍️|同意"],
["resent","v.","憎恨；對……不滿",[
 ["He resented being treated like a child.","他很討厭被當成小孩看待。","resent + V-ing；being treated 是動名詞的被動形式。"],
 ["Although she resented the decision, she accepted it.","雖然她對這個決定不滿，還是接受了。","although 和 but 不能同時出現。"],
 ["Don't resent people who criticize you; learn from them instead.","不要怨恨批評你的人，反而要向他們學習。","who 引導限定關係子句；instead 表示「反而」。"]],
 "re-=反、回|sent=感覺","心裡反覆湧上不好的感覺 → 不滿","😤|不滿"],
["sentiment","n.","情感；看法",[
 ["The song expresses the sentiment of missing home.","這首歌表達了思鄉的情感。","of + V-ing 說明是什麼情感。"],
 ["Public sentiment is strongly against the new rule.","民意強烈反對這項新規定。","public sentiment 是「民意、輿論」；against 表示「反對」。"],
 ["I share your sentiments about the ending of the novel.","我對這本小說結局的看法和你一樣。","share 人's sentiments 表示「和某人有同感」。"]],
 "senti=感覺|-ment=名詞字尾","心中的感覺 → 情感","💞|情感"],
/* ---- 藝術與表演 ---- */
["orchestra","n.","管弦樂團",[
 ["My sister plays the violin in the school orchestra.","我姊姊在學校管弦樂團拉小提琴。","play + the + 樂器。"],
 ["This is the orchestra whose concert we saw last month.","這就是我們上個月看過它音樂會的樂團。","whose concert = the orchestra's concert；concert 同時是 saw 的受詞。"],
 ["Not until the conductor raised his hands did the orchestra start to play.","直到指揮舉起雙手，樂團才開始演奏。","Not until 句首倒裝：did the orchestra start。"]],
 "","","@orchestra"],
["audition","n./v.","試鏡；甄選",[
 ["She is nervous about her audition for the school musical.","她對學校音樂劇的試鏡很緊張。","be nervous about + 名詞；audition for + 角色或表演。"],
 ["Even if you fail the audition, you can try again next year.","即使試鏡沒過，明年還可以再試。","even if 表示「即使」；fail 當及物動詞是「沒通過」。"],
 ["Not until the audition was over did he relax.","直到試鏡結束，他才放鬆下來。","Not until 句首倒裝：did he relax。"]],
 "audit=聽|-ion=名詞字尾","讓評審聽聽看 → 試鏡","🎤|試鏡"],
["sculpture","n.","雕塑；雕刻品",[
 ["The sculpture in the park was made by a local artist.","公園裡的雕塑是一位在地藝術家做的。","主詞是 The sculpture（單數），所以用 was made。"],
 ["This is a sculpture whose shape changes as you walk around it.","這是一座繞著它走時形狀會跟著改變的雕塑。","whose shape = the sculpture's shape；as 表示「隨著」。"],
 ["Despite its small size, the sculpture took two years to finish.","儘管尺寸不大，這座雕塑還是花了兩年才完成。","despite + 名詞；物 + take + 時間 + to V 表示「花……時間完成」。"]],
 "sculpt=雕刻|-ure=名詞字尾","雕刻出來的作品","🗿|雕塑"],
["exhibition","n.","展覽",[
 ["The museum is holding an exhibition of Van Gogh's paintings.","美術館正在舉辦梵谷畫作的展覽。","hold an exhibition 表示「舉辦展覽」；is holding 是現在進行式。"],
 ["Not until I saw the exhibition did I understand his art.","直到看了那場展覽，我才懂他的藝術。","Not until 句首倒裝：did I understand。"],
 ["Visitors who buy tickets online don't have to wait in line at the exhibition.","在網路上買票的參觀者，在展場不必排隊。","who 引導限定關係子句；主要動詞是 don't have to wait。"]],
 "ex-=向外|hibit=拿著|-ion=名詞字尾","拿出來給大家看 → 展覽","🖼️|展覽"],
["gallery","n.","美術館；畫廊",[
 ["We spent the whole afternoon in the art gallery.","我們在美術館待了一整個下午。","spend + 時間 + in + 地點 / spend + 時間 + V-ing。"],
 ["A gallery whose walls are all white makes the paintings stand out.","牆壁全白的畫廊會讓畫作更醒目。","whose walls；主詞是 A gallery，動詞用 makes；make + 受詞 + 原形動詞。"],
 ["The gallery is free to enter, although donations are welcome.","這間美術館免費入場，不過歡迎捐款。","although 在句尾時常翻成「不過」；free to V 表示「可以免費……」。"]],
 "","","@gallery"],
["masterpiece","n.","傑作",[
 ["The Mona Lisa is considered a masterpiece.","《蒙娜麗莎》被視為一幅傑作。","be considered (to be) + 名詞 表示「被認為是……」。"],
 ["It took the writer ten years to complete his masterpiece.","那位作家花了十年才完成他的傑作。","It takes 人 + 時間 + to V 表示「某人花多少時間做……」。"],
 ["However long it takes, I want to create a masterpiece of my own.","不論要花多久，我都想創作出屬於自己的傑作。","However long = No matter how long；of my own 表示「屬於自己的」。"]],
 "master=大師|piece=作品","大師級的作品 → 傑作","👑|傑作"],
["rhythm","n.","節奏",[
 ["The dancers moved to the rhythm of the drums.","舞者隨著鼓聲的節奏舞動。","move to the rhythm 表示「隨著節奏舞動」。"],
 ["A poem whose rhythm is strong is easy to remember.","節奏感強的詩很容易記住。","whose rhythm = the poem's rhythm；be easy to V。"],
 ["However fast the music is, try to keep the rhythm.","不論音樂多快，都要盡量跟上節奏。","However fast = No matter how fast。"]],
 "","","🥁|節奏"],
["costume","n.","戲服；服裝",[
 ["The actors wore beautiful costumes in the play.","演員們在劇中穿著漂亮的戲服。","wear 的過去式是 wore。"],
 ["Whatever costume you choose, you'll look great at the party.","不管你選哪一套服裝，在派對上都會很好看。","whatever + 名詞 = no matter what + 名詞；Whatever costume 是 choose 的受詞。"],
 ["These costumes were designed by students who study fashion.","這些戲服是由學服裝設計的學生設計的。","were designed 是被動；who 引導限定關係子句修飾 students。"]],
 "","","👗|戲服"],
["portrait","n.","肖像（畫）",[
 ["The artist painted a portrait of the queen.","畫家為女王畫了一幅肖像。","a portrait of + 人 表示「某人的肖像」。"],
 ["The woman whose portrait hangs in the hall was our school's first principal.","肖像掛在大廳的那位女士，是我們學校的第一任校長。","whose portrait = the woman's portrait；整句的主要動詞是 was。"],
 ["Not until he looked at the portrait closely did he notice the tiny cat in the corner.","直到他仔細看那幅肖像，才注意到角落裡的小貓。","Not until 句首倒裝：did he notice。"]],
 "por-=向前|trait=畫出","把人的樣子畫出來 → 肖像","👩‍🎨|肖像畫"],
["imagination","n.","想像力",[
 ["Reading fiction helps develop your imagination.","讀小說有助於培養想像力。","help 後面可以直接接原形動詞：help develop = help to develop。"],
 ["Children usually have a rich imagination.","孩子們通常有豐富的想像力。","rich imagination 表示「豐富的想像力」；usually 放在一般動詞前面。"],
 ["No matter how old you are, never lose your imagination.","不論幾歲，都不要失去想像力。","no matter how + 形容詞 old + 主詞 + 動詞；never + 原形動詞 是否定祈使句。"]],
 "imagin=想像|-ation=名詞字尾","imagine（想像）的名詞","🌈|想像力"],
["inspire","v.","啟發；激勵",[
 ["Her story inspired me to become a writer.","她的故事激勵我成為作家。","inspire 人 to V 表示「激勵某人去做……」。"],
 ["The painting was inspired by a dream the artist had.","這幅畫的靈感來自畫家做過的一個夢。","was inspired by 是被動；a dream (that) the artist had 省略了當受詞的關係代名詞。"],
 ["Even a small act of kindness can inspire others.","即使是小小的善行也能激勵別人。","這裡的 even 是副詞，修飾名詞片語「甚至……」，不是連接詞；even 不能單獨引導子句。"]],
 "in-=向內|spire=呼吸","把一口氣吹進心裡 → 啟發","✨|啟發"],
["artistic","adj.","藝術的；有藝術天分的",[
 ["My cousin is very artistic; she can draw almost anything.","我表妹很有藝術天分，幾乎什麼都能畫。","分號連接兩個意思相關的句子。"],
 ["Whatever she wears looks artistic.","她不管穿什麼都很有藝術感。","這裡的 Whatever she wears 是名詞子句當主詞（= Anything that she wears），所以後面接單數動詞 looks。"],
 ["Tainan is famous for its artistic atmosphere.","台南以藝文氣息聞名。","be famous for + 名詞 表示「以……聞名」。"]],
 "art=藝術|-ist=人|-ic=……的","藝術家的 → 有藝術感的","🎨|藝術感"],
["drama","n.","戲劇；連續劇",[
 ["She joined the drama club in her first year of senior high.","她高一時加入了戲劇社。","in one's first year of senior high 表示「高一的時候」。"],
 ["This is the Korean drama whose ending made everyone cry.","這就是那部結局讓大家都哭了的韓劇。","whose ending = the drama's ending；make 人 + 原形動詞。"],
 ["Although it was only a school drama, the actors took it seriously.","雖然只是校內話劇，演員們都很認真看待。","take ... seriously 表示「認真看待……」。"]],
 "","","🎭|戲劇"],
["comedy","n.","喜劇",[
 ["I prefer comedy to tragedy.","比起悲劇，我比較喜歡喜劇。","prefer A to B 表示「喜歡 A 勝過 B」，這裡的 to 是介係詞。"],
 ["No matter how bad my day is, a good comedy always cheers me up.","不管我今天多倒楣，一部好喜劇總能讓我開心起來。","cheer 人 up 表示「使某人振作」；受詞是代名詞時要放在中間。"],
 ["The comedy we watched last night was very funny.","我們昨晚看的喜劇非常好笑。","The comedy (which/that) we watched：關係代名詞當受詞可以省略；主要動詞是 was。"]],
 "","","😂|喜劇"],
["tragedy","n.","悲劇",[
 ["Romeo and Juliet is a famous tragedy by Shakespeare.","《羅密歐與茱麗葉》是莎士比亞的著名悲劇。","作品名稱當主詞時視為單數，所以用 is。"],
 ["Not until the tragedy happened did people realize the bridge was unsafe.","直到悲劇發生，人們才發現那座橋不安全。","Not until 句首倒裝：did people realize；happen 是不及物動詞，沒有被動。"],
 ["In spite of the tragedy, the family stayed strong.","儘管遭逢悲劇，這家人仍然很堅強。","in spite of + 名詞；stay + 形容詞 表示「保持……」。"]],
 "","","😢|悲劇"],
/* ---- 閱讀與文學 ---- */
["poetry","n.","詩（總稱）",[
 ["Poetry is often hard to translate.","詩常常很難翻譯。","poetry 是不可數的總稱；一首詩要說 a poem。be hard to V 表示「很難被……」。"],
 ["She has been writing poetry since she was ten.","她從十歲起就一直在寫詩。","現在完成進行式 has been writing + since，強調動作一直持續到現在。"],
 ["Even if you don't usually like poetry, you will enjoy this book.","即使你平常不喜歡詩，也會喜歡這本書。","even if 表示「即使」；If 類子句用現在式，主要子句用 will。"]],
 "poet=詩人|-ry=名詞字尾","詩人寫的東西 → 詩（總稱）","📜|詩"],
["fiction","n.","小說；虛構的事",[
 ["Science fiction is my favorite kind of book.","科幻小說是我最喜歡的書類。","science fiction 是「科幻小說」，不可數。"],
 ["Is the story fact or fiction?","這個故事是真的還是虛構的？","fact or fiction 是常見的對比：「事實還是虛構」。"],
 ["Whatever kind of fiction you read, it can improve your English.","不管你讀哪一類小說，都能提升你的英文。","Whatever kind of fiction = No matter what kind of fiction。"]],
 "fict=塑造|-ion=名詞字尾","捏造出來的東西 → 虛構、小說","🐉|小說"],
["legend","n.","傳說；傳奇人物",[
 ["According to legend, a dragon once lived in this lake.","根據傳說，從前有一條龍住在這座湖裡。","according to legend 是固定說法，legend 前面不加 the。"],
 ["The singer whose songs everyone knows has become a legend.","那位大家都會唱他歌的歌手已經成了傳奇。","whose songs 是 knows 的受詞；has become 是現在完成式。"],
 ["Although it is only a legend, many people believe it.","雖然那只是個傳說，很多人都相信。","although 不和 but 連用。"]],
 "leg=讀|-end=應該被……的","應該被讀的故事 → 傳說","🐲|傳說"],
["myth","n.","神話；迷思",[
 ["Greek myths are full of gods and heroes.","希臘神話充滿了眾神和英雄。","be full of + 名詞 表示「充滿……」。"],
 ["It is a myth that reading in dim light ruins your eyes.","在昏暗光線下看書會毀了眼睛，這是個迷思。","It 是虛主詞，代替 that 子句；myth 也可以表示「錯誤的說法、迷思」。"],
 ["Not until I studied science did I realize that it was just a myth.","直到學了科學，我才明白那只是迷思。","Not until 句首倒裝：did I realize。"]],
 "","","⚡|神話"],
["fable","n.","寓言",[
 ["The Tortoise and the Hare is a famous fable.","《龜兔賽跑》是一則有名的寓言。","作品名稱當主詞視為單數，用 is。"],
 ["Every fable that Aesop wrote teaches a lesson.","伊索寫的每一則寓言都在教一個道理。","that 是 wrote 的受詞，可以省略；every + 單數名詞，用 teaches。"],
 ["Even though fables are short, they are often very wise.","雖然寓言很短，卻常常很有智慧。","even though 引導事實的讓步子句。"]],
 "","","🐇|寓言"],
["edition","n.","（書的）版本",[
 ["This is the first edition of the book.","這是這本書的第一版。","the first edition 表示「初版」。"],
 ["A new edition with more pictures will come out next year.","明年會出一個有更多圖片的新版本。","come out 表示「出版、問世」。"],
 ["I bought an old edition the cover of which was torn.","我買了一本封面破掉的舊版書。","the cover of which = whose cover，是比較正式的寫法；torn 是 tear 的過去分詞。"]],
 "edit=編輯|-ion=名詞字尾","編輯出來的一版","📕|版本"],
["quote","v./n.","引用；引言",[
 ["The speaker quoted a line from a famous poem.","講者引用了一首名詩中的一句。","quote A from B 表示「從 B 引用 A」。"],
 ["Students who quote others in their essays must give the source.","在作文中引用別人說法的學生，必須註明出處。","who 引導限定關係子句；主要動詞是 must give。"],
 ["My favorite quote is 'Where there is a will, there is a way.'","我最喜歡的名言是「有志者事竟成」。","quote 當名詞是「引言、名言」，也可以說 quotation。"]],
 "","","🗨️|引言"],
["theme","n.","主題",[
 ["The theme of the novel is friendship.","這本小說的主題是友情。","主詞是 The theme（單數），所以用 is。"],
 ["Whatever the theme is, each class must perform a short play.","不管主題是什麼，每班都必須演一齣短劇。","Whatever the theme is = No matter what the theme is。"],
 ["The party had a theme, so everyone dressed as movie characters.","派對有主題，所以大家都打扮成電影角色。","dress as + 角色 表示「打扮成……」。"]],
 "","","🎡|主題"],
["tale","n.","故事；傳說",[
 ["Grandma told us a tale about a brave girl.","奶奶跟我們講了一個勇敢女孩的故事。","tell 人 a tale 表示「講故事給某人聽」。"],
 ["Cinderella is a fairy tale whose message is still popular today.","《灰姑娘》是一個到今天訊息仍受歡迎的童話。","whose message = the fairy tale's message。"],
 ["Although the tale is very old, it still teaches us something.","雖然這個故事很古老，仍能給我們一些啟示。","although 不和 but 連用。"]],
 "","","🧚|童話"],
["narrator","n.","敘述者；旁白",[
 ["In this novel, the narrator is a twelve-year-old boy.","在這本小說裡，敘述者是一個十二歲的男孩。","a twelve-year-old boy：數字加連字號當形容詞時，year 不加 s。"],
 ["The story is told by a narrator who doesn't always tell the truth.","這個故事是由一個不一定說實話的敘述者講述的。","is told 是被動；who 引導限定關係子句修飾 a narrator。"],
 ["The narrator whose voice we hear is actually the main character's dog.","我們聽到聲音的那位敘述者，其實是主角養的狗。","whose voice = the narrator's voice；主要動詞是 is。"]],
 "narrat=敘述|-or=人","敘述故事的人","🎙️|敘述者"],
["critic","n.","評論家",[
 ["The critics praised the movie for its music.","評論家們稱讚這部電影的配樂。","praise A for B 表示「因為 B 稱讚 A」。"],
 ["Even the toughest critics loved her performance.","連最嚴格的評論家都愛她的演出。","even 修飾名詞片語，表示「甚至、連」。"],
 ["A critic whose reviews are always fair is hard to find.","評論總是很公正的評論家很難找。","whose reviews；主詞是 A critic，動詞用 is。"]],
 "crit=判斷|-ic=人","會判斷好壞的人 → 評論家","🧐|評論家"],
/* ---- 人生價值與挑戰 ---- */
["courage","n.","勇氣",[
 ["It takes courage to say no to your friends.","對朋友說不需要勇氣。","It takes + 名詞 + to V 表示「做……需要……」。"],
 ["No matter how afraid she was, she found the courage to speak.","不論多害怕，她還是鼓起勇氣開口了。","no matter how + 形容詞 afraid + 主詞 + 動詞。"],
 ["Despite his fear, he showed great courage.","儘管害怕，他還是展現了極大的勇氣。","despite + 名詞；courage 不可數。"]],
 "cour=心|-age=名詞字尾","發自內心的力量 → 勇氣（這裡的 cour 是「心」，不是「跑」）","🦁|勇氣"],
["determination","n.","決心",[
 ["With great determination, she finished the marathon.","憑著極大的決心，她跑完了馬拉松。","with + 名詞 表示「帶著……」。"],
 ["Not until I saw his determination did I believe he would succeed.","直到看見他的決心，我才相信他會成功。","Not until 句首倒裝：did I believe；would 是 will 的過去式。"],
 ["Determination is what turns dreams into reality.","決心是把夢想化為現實的力量。","what 引導名詞子句（= the thing that）；turn A into B。"]],
 "determin=決定|-ation=名詞字尾","determine（下定決心）的名詞","💪|決心"],
["persistence","n.","堅持；毅力",[
 ["Learning a language requires persistence.","學一種語言需要毅力。","動名詞片語當主詞，視為單數，動詞用 requires。"],
 ["Her persistence finally paid off.","她的堅持終於有了回報。","pay off 表示「（努力）有回報」；pay 的過去式是 paid。"],
 ["In spite of many failures, his persistence never weakened.","儘管失敗了很多次，他的毅力從沒減弱。","in spite of + 名詞，of 不能省略。"]],
 "per-=徹底|sist=站|-ence=名詞字尾","一直站著不倒 → 堅持","🐢|毅力"],
["failure","n.","失敗",[
 ["Failure is the mother of success.","失敗為成功之母。","抽象名詞 failure 當總稱時不加 a。"],
 ["Although the experiment was a failure, the team learned a lot.","雖然實驗失敗了，團隊卻學到很多。","a failure 可以指「一次失敗的事」；有 although 就不加 but。"],
 ["Don't be afraid of failure.","不要害怕失敗。","be afraid of + 名詞或 V-ing。"]],
 "fail=失敗|-ure=名詞字尾","fail（失敗）的名詞","📉|失敗"],
["obstacle","n.","障礙",[
 ["Fear is the biggest obstacle to success.","恐懼是成功最大的障礙。","an obstacle to + 名詞，這裡的 to 是介係詞。"],
 ["No matter what obstacles you face, keep moving forward.","不論面對什麼障礙，都要繼續前進。","no matter what + 名詞 + 主詞 + 動詞；keep + V-ing。"],
 ["She overcame many obstacles before she became a famous dancer.","她克服了許多障礙，才成為知名舞者。","overcome 的過去式是 overcame。"]],
 "ob-=對著|sta=站|-cle=名詞字尾","站在你面前擋路的東西 → 障礙","🚧|障礙"],
["value","n./v.","價值；重視",[
 ["I value my friends more than anything.","我重視朋友勝過一切。","value 當動詞是「重視」；more than anything 表示「勝過一切」。"],
 ["The value of a book doesn't depend on its price.","一本書的價值不取決於它的價格。","depend on 表示「取決於」；主詞 The value 是單數，用 doesn't。"],
 ["Although the old painting has little value in money, it means a lot to me.","雖然那幅舊畫值不了多少錢，對我卻意義重大。","little + 不可數名詞 表示「幾乎沒有」；mean a lot to 人 表示「對某人意義重大」。"]],
 "","","💰|價值"],
["sacrifice","n./v.","犧牲",[
 ["My parents made many sacrifices for my education.","我爸媽為了我的教育做了很多犧牲。","make sacrifices for + 名詞 表示「為……做出犧牲」。"],
 ["He sacrificed his free time to help others.","他犧牲自己的空閒時間去幫助別人。","to help 是不定詞，表示目的。"],
 ["Whatever you sacrifice, make sure it is worth it.","不管你犧牲什麼，都要確定是值得的。","Whatever you sacrifice = No matter what you sacrifice；be worth it 表示「值得」。"]],
 "sacri=神聖的|fice=做","做神聖的事、把東西獻出去 → 犧牲","🕯️|犧牲"],
["setback","n.","挫折",[
 ["Losing the first game was a setback, but the team didn't give up.","輸掉第一場比賽是個挫折，但球隊沒有放棄。","動名詞片語 Losing the first game 當主詞，用單數 was。"],
 ["Every successful person has faced setbacks.","每個成功的人都曾面對挫折。","every + 單數名詞，所以用 has faced。"],
 ["Despite the setback, she kept practicing every day.","儘管遭遇挫折，她還是每天練習。","despite + 名詞；keep + V-ing。"]],
 "set=放|back=向後","把人往後放 → 挫折","↩️|挫折"],
["struggle","v./n.","掙扎；奮鬥",[
 ["Many students struggle with math.","很多學生在數學上很吃力。","struggle with + 名詞 表示「和……搏鬥、在……上吃力」。"],
 ["She struggled to finish the race even though she was hurt.","即使受了傷，她還是努力撐完比賽。","struggle to V 表示「努力想做……」；even though 後面接事實。"],
 ["The writer struggled for years before his first book was published.","那位作家奮鬥了好幾年，第一本書才出版。","was published 是被動；before 引導時間副詞子句。"]],
 "","","🏊|奮鬥"],
["dignity","n.","尊嚴",[
 ["Everyone deserves to be treated with dignity.","每個人都應該被有尊嚴地對待。","deserve to be + p.p. 表示「應該被……」，是不定詞的被動。"],
 ["Even though he was poor, he lived with dignity.","雖然他很窮，卻活得有尊嚴。","even though 引導事實的讓步子句；with dignity 表示「有尊嚴地」。"],
 ["She lost the game but kept her dignity.","她輸了比賽，卻保住了尊嚴。","兩個過去式動詞 lost 和 kept 用 but 連接。"]],
 "dign=有價值的|-ity=名詞字尾","值得被尊重 → 尊嚴","🎩|尊嚴"],
["integrity","n.","正直；誠信",[
 ["A good leader must have integrity.","好的領導者必須正直。","must + 原形動詞。"],
 ["People whose integrity is strong don't cheat, even if no one is watching.","真正正直的人，即使沒人在看也不會作弊。","whose integrity = the people's integrity；even if 表示「即使」。"],
 ["The judge is known for her integrity.","那位法官以正直聞名。","be known for + 名詞 表示「以……聞名」。"]],
 "integr=完整的|-ity=名詞字尾","內外完整一致 → 正直","🧭|正直"],
["endure","v.","忍受；持久",[
 ["She endured years of pain without complaining.","她忍受了多年的病痛，從不抱怨。","without + V-ing 表示「沒有……」。"],
 ["However hard the training is, I will endure it.","不論訓練多辛苦，我都會撐下去。","However hard = No matter how hard；讓步子句表示未來時用現在式 is。"],
 ["Great art can endure for centuries.","偉大的藝術可以流傳好幾個世紀。","endure 當不及物動詞是「持久、流傳」。"]],
 "en-=使|dure=持久","使撐得長長久久 → 忍受","🪨|忍受"],
["optimistic","adj.","樂觀的",[
 ["No matter what happens, try to stay optimistic.","不論發生什麼事，都試著保持樂觀。","No matter what happens：what 在子句中當主詞；stay + 形容詞。"],
 ["She is optimistic about her future.","她對自己的未來很樂觀。","be optimistic about + 名詞 表示「對……樂觀」。"],
 ["Although the doctor was optimistic, the family was still worried.","雖然醫生很樂觀，家人還是很擔心。","although 引導讓步子句；still 表示「仍然」。"]],
 "optim=最好的|-ist=人|-ic=……的","總往最好的方面想 → 樂觀的","🌞|樂觀"],
["wisdom","n.","智慧",[
 ["Grandparents often share their wisdom with us.","祖父母常常和我們分享他們的智慧。","share A with B 表示「和 B 分享 A」。"],
 ["Not until I grew older did I understand the wisdom of my mother's words.","直到長大一些，我才明白媽媽那些話裡的智慧。","Not until 句首倒裝：did I understand。"],
 ["Knowledge and wisdom are not the same thing.","知識和智慧不是同一回事。","兩個名詞用 and 連接當主詞，動詞用複數 are。"]],
 "wis=有智慧的|-dom=狀態","wise（有智慧的）的名詞","🦉|智慧"],
["loyalty","n.","忠誠",[
 ["Dogs are famous for their loyalty.","狗以忠誠聞名。","be famous for + 名詞。"],
 ["No matter what happens, his loyalty to his friends never changes.","不論發生什麼事，他對朋友的忠誠都不會改變。","loyalty to + 人 表示「對某人的忠誠」。"],
 ["The team's loyalty was tested when they lost five games in a row.","當他們連輸五場時，球隊的忠誠受到了考驗。","was tested 是被動；in a row 表示「連續」。"]],
 "loyal=忠誠的|-ty=名詞字尾","loyal（忠誠的）的名詞","🐶|忠誠"]
];

const S1_2_3_GRAMMAR = [
{ id:"g1", title:"關係代名詞 whose、of which 與限定子句綜合",
  intro:"關係代名詞用一個子句來修飾前面的名詞（先行詞）。高一要能分辨 who、whom、which、that、whose，並會用 whose 的正式說法「the + 名詞 + of which」。這裡練的都是不加逗號的限定用法；前後加逗號的非限定用法，高二會再學。",
  table:[["關係代名詞","先行詞","在子句中的角色"],["who / that","人","主詞"],["whom / who / that","人","受詞（可省略）"],["which / that","物","主詞或受詞（受詞可省略）"],["whose + 名詞","人或物","所有格「……的」"],["the + 名詞 + of which","物","= whose + 名詞（較正式）"]],
  points:[
   "whose 後面一定緊接名詞，表示「先行詞的……」：I have a friend whose mother is a novelist.（= her mother）",
   "whose 人和物都能用；先行詞是物時，也可以寫成 the + 名詞 + of which：a book whose cover is torn = a book the cover of which is torn。",
   "陷阱：whose 和 who's 發音一樣，但 who's = who is / who has，後面不能接名詞：The boy whose bike was stolen ...（不是 who's）。",
   "關係代名詞當子句的受詞可以省略，當主詞不能省略：The book (that) I bought is great. / The girl who sings is my cousin.",
   "介係詞放在關係代名詞前面時，只能用 whom 或 which，不能用 that 或 who：the companion with whom I traveled。",
   "子句動詞的單複數看先行詞：students who want ...；a poem which consists of ...。先行詞有 the only、最高級、all 時常用 that。"],
  ex:[
   ["The police identified the man whose bag had been stolen.","警方確認了那位包包被偷的男子的身分。","whose bag = the man's bag，whose 後面緊接名詞。"],
   ["This is a sculpture whose shape changes as you walk around it.","這是一座繞著它走時形狀會跟著改變的雕塑。","先行詞是物，也可以用 whose。"],
   ["I bought an old edition the cover of which was torn.","我買了一本封面破掉的舊版書。","the cover of which = whose cover。"],
   ["Ben is the companion with whom I traveled around Taiwan.","班就是和我一起環島的旅伴。","介係詞 with 後面只能用 whom，不能用 that。"],
   ["A haiku is a short poem which consists of three lines.","俳句是由三行組成的短詩。","which 當子句主詞，動詞配合先行詞 a short poem 用 consists。"]]},
{ id:"g2", title:"讓步子句：no matter + wh-、although / even though / even if、despite / in spite of",
  intro:"讓步就是「雖然……／即使……／不管……，還是……」。解題關鍵：先看空格後面接的是「子句」（有主詞和動詞）還是「名詞、V-ing」。",
  table:[["用法","後面接","例句"],["no matter what / who / how = whatever / whoever / however","子句","No matter what happens, stay calm."],["although / though / even though","子句（事實）","Although it rained, we went out."],["even if","子句（假設、不確定）","Even if it rains, we will go."],["despite / in spite of","名詞或 V-ing","Despite the rain, we went out."]],
  points:[
   "no matter how / however 後面要緊接形容詞或副詞：No matter how hard the work is ...（不能寫成 No matter how the work is hard）。",
   "although / though / even though 不能和 but 一起用：Although he was tired, he kept working.（不能再加 but）",
   "even though 是「雖然（事實）」，even if 是「即使（假設）」；even 本身是副詞，不能單獨引導子句。",
   "despite = in spite of，後面接名詞或 V-ing，不能直接接子句；也不能說 despite of。要接子句時改用 although，或說 despite the fact that ...。",
   "讓步子句表示未來時用現在式：No matter what happens tomorrow, I will be there.",
   "陷阱：whatever / whoever 也能引導名詞子句當主詞或受詞（= anything that / anyone who）：Whoever constructed this bridge did a great job. 這時不能換成 no matter who。"],
  ex:[
   ["No matter how difficult the poem is, our teacher can simplify it for us.","不論這首詩多難，老師都能幫我們把它講得簡單易懂。","no matter how + 形容詞 + 主詞 + 動詞。"],
   ["However long it takes, I want to create a masterpiece of my own.","不論要花多久，我都想創作出屬於自己的傑作。","However long = No matter how long。"],
   ["Even though they are coworkers, they rarely talk to each other.","雖然他們是同事，卻很少交談。","even though 後面接事實。"],
   ["Even if it rains, the excursion will go ahead.","即使下雨，校外旅行仍會照常舉行。","even if 後面接假設的情況，用現在式表示未來。"],
   ["Despite the strong current, the swimmer reached the shore.","儘管水流很強，那名泳者還是游到了岸邊。","despite 後面接名詞 the strong current。"]]},
{ id:"g3", title:"Not until 句型：直到……才……",
  intro:"中文的「直到……才……」，英文用 not ... until 表示：主要子句先否定，until 後面接時間或子句。想加強語氣時，可以把 Not until ... 整段搬到句首，這時主要子句要倒裝。",
  table:[["句型","例句"],["主要子句否定 + until ...","He didn't go to bed until midnight."],["Not until ... + 倒裝（助動詞 + 主詞 + 動詞）","Not until midnight did he go to bed."],["Not until + 子句 + 倒裝","Not until I lost it did I realize its value."]],
  points:[
   "not ... until 的主要子句用否定，意思是「直到……才……」：I didn't know the truth until today.",
   "Not until 放句首時，倒裝的是「主要子句」，until 後面的子句不倒裝：Not until I lost it did I realize ...（不是 Not until did I lose it）。",
   "倒裝方式和疑問句一樣：一般動詞借 do / does / did，再把動詞改回原形；有助動詞或 be 動詞就直接移到主詞前面：Not until the Wi-Fi was connected could we start.",
   "倒裝後主要子句不再有 not：Not until ten did he come home.（不能寫 didn't he come）",
   "until 子句表示未來時用現在式：I won't leave until you come back.（不是 will come）",
   "預告：It was not until ... that ... 也表示「直到……才……」，是高二會學的強調句，that 後面不倒裝。"],
  ex:[
   ["He didn't concentrate on his studies until he failed the test.","直到考試不及格，他才開始專心讀書。","主要子句否定 + until 子句。"],
   ["Not until we classified the poems did we notice how many were about love.","直到我們把詩分類，才發現有好多首都在寫愛情。","一般動詞借 did 倒裝，notice 用原形。"],
   ["Not until the Wi-Fi was connected could we start the online class.","直到網路連上，我們才能開始上線上課程。","有助動詞 could，直接移到主詞前面。"],
   ["Not until the war ended did the conflict between the two families stop.","直到戰爭結束，兩家之間的衝突才停止。","倒裝的是主要子句，the war ended 不倒裝。"],
   ["The card won't work until it is activated.","這張卡要等啟用之後才能使用。","until 子句表示未來，用現在式。"]]},
{ id:"g4", title:"高一文法總複習：時態、被動、子句、不定詞與動名詞",
  intro:"學測的綜合測驗常把好幾種文法放在同一題。解題三步驟：一、找出句子的主詞和主要動詞；二、看時間線索決定時態；三、判斷主詞是主動做還是「被」做。",
  table:[["考點","判斷線索","例句"],["時態","since / for → 完成式；by the time + 過去式 → 過去完成式","She has been writing poetry since she was ten."],["被動","主詞是被做的 → be + p.p.","Her first novel was published in 2015."],["一句一動詞","其他動詞改成 to V、V-ing、p.p. 或放進子句","The book written by a student became a bestseller."],["不定詞與動名詞","enjoy / finish / avoid + V-ing；want / decide / refuse + to V","She refused to compromise."],["主詞動詞一致","動名詞、不定詞片語當主詞 → 單數","Learning a language requires persistence."]],
  points:[
   "一個句子只能有一個主要動詞（除非用連接詞連接），其他動詞要改成 to V、V-ing、p.p.，或放進關係子句。",
   "since + 過去時間點、for + 一段時間，主要子句多用現在完成式；by the time + 過去式，主要子句用過去完成式。",
   "不及物動詞沒有被動：occur、happen、disappear、consist of 都不能寫成 be + p.p.。",
   "介係詞後面接 V-ing：be afraid of failing、by using VR、without complaining；look forward to、be used to 的 to 是介係詞，後面也接 V-ing。",
   "stop / remember / forget 接 to V 和 V-ing 意思不同：stop to rest（停下來去休息）／stop talking（停止說話）。",
   "動名詞或不定詞片語當主詞時視為單數：Memorizing new words is easier if you learn their roots."],
  ex:[
   ["She has been writing poetry since she was ten.","她從十歲起就一直在寫詩。","since 是完成式的線索。"],
   ["Her first novel was published when she was only nineteen.","她的第一本小說在她十九歲時出版。","書是被出版的，用 be + p.p.。"],
   ["The accident occurred at midnight.","意外發生在午夜。","occur 不及物，沒有被動。"],
   ["He resented being treated like a child.","他很討厭被當成小孩看待。","resent 後面接動名詞，被動形式是 being + p.p.。"],
   ["Learning a language requires persistence.","學一種語言需要毅力。","動名詞片語當主詞，動詞用單數 requires。"]]}
];

const S1_2_3_QUIZ = [
 ["I have a friend ___ mother is a famous novelist.",["who","which","whose","whom"],2,"空格後面緊接名詞 mother，表示「朋友的媽媽」，用所有格 whose。","g1"],
 ["This is the museum ___ we visited last summer.",["which","where","whose","what"],0,"visited 後面缺受詞，要用關係代名詞 which（或 that），不能用 where。","g1"],
 ["The boy ___ bike was stolen called the police.",["who's","whom","which","whose"],3,"後面緊接名詞 bike，用 whose；who's = who is，後面不能接名詞。","g1"],
 ["I bought a house the roof ___ needs repairing.",["of which","of whom","whose","which"],0,"the roof of which = whose roof，先行詞是物，用 of which。","g1"],
 ["Ben is the companion with ___ I traveled around Taiwan.",["who","that","whom","whose"],2,"介係詞後面指人只能用 whom，不能用 who 或 that。","g1"],
 ["The girl ___ is singing on the stage is my cousin.",["whom","who","whose","which"],1,"空格在子句中當主詞，先行詞是人，用 who。","g1"],
 ["Students ___ to join the drama club should sign up today.",["who wants","whom want","who want","which want"],2,"先行詞 Students 是複數的人，關係代名詞用 who，動詞用複數 want。","g1"],
 ["He is the only person ___ understands me.",["that","whom","which","whose"],0,"先行詞有 the only，常用 that；空格當主詞，不能用 whom。","g1"],
 ["選出正確的句子：",["This is a book who's cover is blue.","This is a book which cover is blue.","This is a book whose the cover is blue.","This is a book whose cover is blue."],3,"whose 後面直接接名詞，不加 the；which 不能當所有格；who's 是 who is。","g1"],
 ["___ hard the work is, she never complains.",["No matter what","However","Whatever","Although"],1,"空格後面緊接形容詞 hard，用 However（= No matter how）。","g2"],
 ["___ it was raining, the concert went on.",["Despite","In spite of","Although","Because of"],2,"後面是子句 it was raining，要用連接詞 Although；despite / in spite of 後面接名詞。","g2"],
 ["___ the rain, the concert went on.",["Although","Even though","Even if","Despite"],3,"後面是名詞 the rain，要用介係詞 Despite。","g2"],
 ["Although he was tired, ___ kept practicing.",["but he","he","so he","and he"],1,"although 不能再和 but、so、and 一起連接兩個子句，直接寫 he kept practicing。","g2"],
 ["___ you say, I won't change my mind.",["Whatever","However","Whoever","Although"],0,"say 後面缺受詞「說什麼」，用 Whatever（= No matter what）。","g2"],
 ["___ it rains tomorrow, the excursion will go ahead.",["Despite","No matter","Even if","In spite of"],2,"明天下不下雨還不確定，用 even if「即使」；No matter 後面要接 what / how 等疑問詞。","g2"],
 ["She went to school in spite of ___.",["she was sick","being sick","she sick","sick she was"],1,"in spite of 後面接名詞或 V-ing，不能接子句。","g2"],
 ["___ calls, tell them I'm busy.",["Whatever","However","Whoever","Wherever"],2,"打電話來的是「人」，用 Whoever（= No matter who）。","g2"],
 ["No matter ___ difficult the test is, don't give up.",["what","how","who","which"],1,"後面緊接形容詞 difficult，用 no matter how。","g2"],
 ["He ___ to bed until midnight last night.",["went","didn't go","doesn't go","hasn't gone"],1,"not ... until「直到……才……」，主要子句要否定；last night 是過去，用 didn't go。","g3"],
 ["Not until I lost my phone ___ how important it was.",["I realized","I did realize","did I realize","realized I"],2,"Not until 放句首，主要子句倒裝：did I realize。","g3"],
 ["Not until the play was over ___ home.",["did we go","we went","went we","we did go"],0,"一般動詞倒裝要借 did：did we go。","g3"],
 ["Not until ten o'clock ___ the meeting.",["they finished","didn't they finish","they didn't finish","did they finish"],3,"倒裝後不再加 not：did they finish。","g3"],
 ["I won't leave until you ___ back.",["will come","come","came","would come"],1,"until 子句表示未來時用現在式。","g3"],
 ["Not until the Wi-Fi was connected ___ start the online class.",["we could","could we","we can","can we"],1,"有助動詞 could，直接移到主詞前面；時態配合過去的 was connected。","g3"],
 ["Not until she read the letter ___ that her friend had moved.",["she knew","knew she","she did know","did she know"],3,"一般動詞過去式倒裝：did she know。","g3"],
 ["哪一句是正確的？",["Not until did I come home I felt safe.","Not until I came home did I feel safe.","Not until I came home I felt safe.","Not until I came home didn't I feel safe."],1,"倒裝的是主要子句，until 子句不倒裝；倒裝後不加 not。","g3"],
 ["直到媽媽回來，寶寶才停止哭泣。The baby didn't stop crying ___ his mother came back.",["since","unless","until","because"],2,"「直到……才……」用 not ... until。","g3"],
 ["She ___ poetry since she was ten.",["writes","wrote","has written","is writing"],2,"since + 過去時間點，主要子句用現在完成式。","g4"],
 ["Her first novel ___ in 2015.",["published","was published","has published","publishes"],1,"小說是「被」出版的，2015 是過去，用過去式被動。","g4"],
 ["The accident ___ at midnight.",["occurred","was occurred","has been occurred","is occurring"],0,"occur 是不及物動詞，沒有被動。","g4"],
 ["He finally finished ___ the portrait.",["paint","to paint","painted","painting"],3,"finish 後面接動名詞 V-ing。","g4"],
 ["Learning a new language ___ a lot of persistence.",["require","requires","requiring","are required"],1,"動名詞片語當主詞視為單數，動詞用 requires。","g4"],
 ["The critic refused ___ the movie.",["to review","reviewing","review","reviewed"],0,"refuse 後面接不定詞 to V。","g4"],
 ["By the time we arrived, the show ___.",["already started","has already started","had already started","already starts"],2,"by the time + 過去式，主要子句用過去完成式 had + p.p.。","g4"],
 ["The orchestra is looking forward to ___ in Tainan next month.",["perform","be performed","performed","performing"],3,"look forward to 的 to 是介係詞，後面接 V-ing。","g4"],
 ["The book ___ by a young student became a bestseller.",["wrote","writing","written","was written"],2,"句子的主要動詞是 became，空格要用過去分詞 written 修飾 The book（書是被寫的）。","g4"],
 ["Please stop ___. The baby is sleeping.",["to talk","talking","talk","talked"],1,"stop + V-ing 是「停止做……」；stop to talk 是「停下來去說話」。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S1_2_3_CLASS = {
g1:[
 {say:"高一同學好！期末考第一課：關係代名詞的最終整理。先複習老朋友：{The girl who sings well is my cousin.} who 指人當主詞；{This is the book which I bought.} which 指物。", board:[["The girl who sings well is my cousin.",["who"]],["This is the book which I bought.",["which"]]]},
 {say:"今天的主角是 {whose}，意思是「……的」。看這兩句：{I have a friend. His mother is a novelist.} 把 His 換成 whose，就變成 {I have a friend whose mother is a novelist.}", board:[["I have a friend. His mother is a novelist.",["His"]],["I have a friend whose mother is a novelist.",["whose"]]]},
 {say:"記住！whose 後面一定緊接名詞，而且人和物都能用。", chant:"whose 是「誰的」，後面緊接名詞！"},
 {ask:{say:"試試看！", q:"The boy ___ bike was stolen called the police.", opts:["who","whose","which"], ans:1,
   ok:"答對！後面緊接名詞 bike，表示「男孩的腳踏車」，用 whose。", bad:{0:"who 後面不能直接接名詞 bike，「男孩的」要用 whose。",2:"which 不能表示「……的」，而且先行詞是人，要用 whose。"},
   again:{q:"I know a singer ___ songs are all about love.", opts:["whose","who","whom"], ans:0, exp:"songs 是名詞，「歌手的歌」用 whose。"}}},
 {say:"先行詞是物的時候，whose 還有一個正式的說法：the 加名詞加 of which。{a book whose cover is torn} 等於 {a book the cover of which is torn}。", board:[["a book whose cover is torn",["whose cover"]],["a book the cover of which is torn",["the cover of which"]]]},
 {ask:{q:"I bought a house the roof ___ needs repairing.", opts:["of which","whose","which"], ans:0,
   ok:"讚！the roof of which = whose roof。", bad:{1:"前面已經有 the roof 了，要接 of which；用 whose 的話要寫成 whose roof。",2:"which 前面少了 of，the roof of which 才等於 whose roof。"},
   again:{q:"I want a car ___ color is red.", opts:["whose","who's"], ans:0, exp:"「車子的顏色」用 whose；who's 是 who is。"}}},
 {say:"超級陷阱來了！{whose} 和 {who's} 唸起來一模一樣，但 who's 是 who is 的縮寫，後面不能接名詞喔！", board:[["The boy whose bike was stolen ...",["whose"]],["The boy who's bike was stolen ...",[],true]]},
 {say:"再來看「省略」。關係代名詞當受詞可以省略：{The book I bought is great.} 但當主詞就不能省：{The girl who sings is my cousin.} who 不能拿掉。", board:[["The book (that) I bought is great.",["(that)"]],["The girl who sings is my cousin.",["who"]]]},
 {say:"介係詞放在前面時，只能用 whom 或 which：{the companion with whom I traveled}，不能說 with that，也不能說 with who。", board:[["the companion with whom I traveled",["with whom"]],["the companion with that I traveled",[],true]]},
 {say:"介係詞的口訣！", chant:"介係詞後面，人用 whom、物用 which，that 不能來！"},
 {ask:{q:"Ben is the companion with ___ I traveled around Taiwan.", opts:["that","who","whom"], ans:2,
   ok:"完美！介係詞 with 後面指人用 whom。", bad:{0:"介係詞後面不能用 that！",1:"介係詞後面要用受格 whom，不用 who。"},
   again:{q:"This is the pen with ___ I wrote the poem.", opts:["which","that"], ans:0, exp:"介係詞後面指物用 which。"}}},
 {ask:{say:"最後一題！", q:"Students who ___ to join the drama club should sign up today.", opts:["want","wants"], ans:0,
   ok:"太棒了！子句動詞看先行詞 Students，是複數，所以用 want。", bad:{1:"who 指的是 Students（複數），子句動詞要用 want。"},
   again:{q:"He is the only person ___ understands me.", opts:["that","whom"], ans:0, exp:"有 the only 常用 that；空格當主詞，不能用 whom。"}}},
 {say:"關係代名詞過關！口訣：whose 是「誰的」，後面緊接名詞；介係詞後面只能 whom 和 which。偷偷預告：前後加逗號的非限定用法，高二會再學！", end:true}
],
g2:[
 {say:"第二課，讓步子句！讓步就是「雖然、即使、不管……，還是……」。先看最常考的：{No matter what happens, stay calm.} 不管發生什麼事，都要冷靜。", board:[["No matter what happens, stay calm.",["No matter what"]]]},
 {say:"No matter 加疑問詞，都可以換成「疑問詞加 ever」：no matter what 等於 whatever，no matter who 等於 whoever，no matter how 等於 however。", board:[["no matter what = whatever",["whatever"]],["no matter who = whoever",["whoever"]],["no matter how = however",["however"]]]},
 {say:"口訣！", chant:"No matter 加疑問詞，換成 ever 也可以！"},
 {say:"注意 how 的語序：how 後面要緊接形容詞或副詞。{No matter how hard the work is} 正確；把 hard 放到後面就錯了。", board:[["No matter how hard the work is ...",["how hard"]],["No matter how the work is hard ...",[],true]]},
 {ask:{q:"___ hard the work is, she never complains.", opts:["Whatever","However"], ans:1,
   ok:"答對！後面緊接形容詞 hard，用 However。", bad:{0:"whatever 後面不能接形容詞 hard；「不管多……」要用 however。"},
   again:{q:"___ you say, I won't change my mind.", opts:["Whatever","However"], ans:0, exp:"say 缺受詞「說什麼」，用 Whatever。"}}},
 {say:"再來是「雖然」：{although}、{though}、{even though}。中文說「雖然……但是……」，英文可不行！有 although 就不能再加 but。", board:[["Although he was tired, he kept working.",["Although"]],["Although he was tired, but he kept working.",[],true]]},
 {say:"這個陷阱一定要背！", chant:"有了 although，就別再 but！"},
 {ask:{q:"Although it was late, ___ kept reading.", opts:["but she","she"], ans:1,
   ok:"讚！有 although 就不能再加 but。", bad:{0:"中文說「雖然……但是」，英文 although 和 but 只能二選一！"},
   again:{q:"___ he was sick, he went to school.", opts:["Although","Despite"], ans:0, exp:"後面是子句，用 Although。"}}},
 {say:"even though 和 even if 怎麼分？even though 是「雖然」，說的是事實；even if 是「即使」，說的是假設。{Even if it rains tomorrow, we will go.} 明天會不會下雨還不知道。", board:[["Even though it rained, we went.（真的下了）",["Even though"]],["Even if it rains, we will go.（還不確定）",["Even if"]]]},
 {say:"最後是 {despite} 和 {in spite of}，它們是介係詞，後面接名詞或 V-ing，不能接子句。還有，despite 後面絕對不加 of！", board:[["Despite the rain, we went out.",["Despite"]],["In spite of the rain, we went out.",["In spite of"]],["Despite of the rain ...",[],true]]},
 {say:"口訣！", chant:"despite 不加 of，in spite of 要有 of，後面都接名詞！"},
 {ask:{say:"最後一題！", q:"___ the strong current, the swimmer reached the shore.", opts:["Although","Despite","Even if"], ans:1,
   ok:"太強了！後面是名詞 the strong current，用介係詞 Despite。", bad:{0:"although 是連接詞，後面要接子句，這裡只有名詞。",2:"even if 是連接詞，後面要接子句，這裡只有名詞。"},
   again:{q:"She went to school in spite of ___.", opts:["being sick","she was sick"], ans:0, exp:"in spite of 後面接 V-ing 或名詞。"}}},
 {say:"讓步子句過關！口訣：No matter 加疑問詞換成 ever；有了 although 別再 but；despite 不加 of，後面接名詞！", end:true}
],
g3:[
 {say:"第三課，學一個很有氣勢的句型：Not until！先想中文「直到午夜他才去睡」。英文會說：{He didn't go to bed until midnight.}", board:[["He didn't go to bed until midnight.",["didn't","until"]]]},
 {say:"發現了嗎？英文的想法是「他沒有去睡，一直到午夜」，所以主要子句要用否定。中文的「才」，在英文裡變成了 not。", board:[["直到午夜，他才去睡",[]],["He didn't go to bed until midnight.",["didn't"]]]},
 {say:"口訣！", chant:"直到……才……，前面先否定！"},
 {ask:{q:"直到她回來，我才吃晚餐。I ___ dinner until she came back.", opts:["ate","didn't eat"], ans:1,
   ok:"答對！「直到……才……」主要子句要否定。", bad:{0:"ate until she came back 是「一直吃到她回來」，意思不一樣！要用 didn't eat。"},
   again:{q:"I won't leave until you ___ back.", opts:["come","will come"], ans:0, exp:"until 子句表示未來用現在式。"}}},
 {say:"想加強語氣，就把 Not until 整段搬到句首，這時主要子句要倒裝，就像疑問句一樣：{Not until midnight did he go to bed.}", board:[["He didn't go to bed until midnight.",["didn't"]],["Not until midnight did he go to bed.",["Not until","did he go"]]]},
 {say:"倒裝怎麼做？一般動詞借 do、does、did，動詞變回原形；有助動詞或 be 動詞，就直接搬到主詞前面：{Not until the Wi-Fi was connected could we start.}", board:[["... did he go（一般動詞借 did）",["did"]],["... could we start（助動詞直接搬）",["could"]]]},
 {say:"倒裝口訣！", chant:"Not until 搬到前面，後面主句要倒裝！"},
 {ask:{q:"Not until I lost my phone ___ how important it was.", opts:["I realized","did I realize"], ans:1,
   ok:"讚！Not until 在句首，主要子句倒裝成 did I realize。", bad:{0:"Not until 放句首，主要子句一定要倒裝：did I realize。"},
   again:{q:"Not until the play was over ___ home.", opts:["we went","did we go"], ans:1, exp:"一般動詞借 did 倒裝：did we go。"}}},
 {say:"兩個超常考的陷阱！第一，倒裝的是「主要子句」，until 後面那個子句不倒裝。第二，倒裝以後 not 就消失了，不要再寫 didn't。", board:[["Not until I came home did I feel safe.",["did I feel"]],["Not until did I come home I felt safe.",[],true],["Not until I came home didn't I feel safe.",[],true]]},
 {ask:{q:"哪一句是正確的？", opts:["Not until ten didn't he come home.","Not until ten did he come home.","Not until ten he came home."], ans:1,
   ok:"完美！倒裝用 did he come，而且不再加 not。", bad:{0:"倒裝以後 not 已經被「吃掉」了，不能再寫 didn't。",2:"Not until 在句首，主要子句一定要倒裝。"},
   again:{q:"Not until the Wi-Fi was connected ___ start the class.", opts:["we could","could we"], ans:1, exp:"助動詞 could 直接搬到主詞前面。"}}},
 {say:"偷偷預告：高二會學到強調句 {It was not until midnight that he went to bed.} 意思一樣，但 that 後面不倒裝喔！", board:[["It was not until midnight that he went to bed.",["It was not until","that"]]]},
 {say:"Not until 過關！口訣：直到……才……，前面先否定；Not until 搬到前面，後面主句要倒裝，而且不再加 not！", end:true}
],
g4:[
 {say:"最後一課，高一文法大總複習！學測的綜合測驗常把好幾個文法塞在同一題，別怕，安安老師教你三步驟。", board:[["1. 找主詞和主要動詞",[]],["2. 看時間線索決定時態",[]],["3. 判斷主動還是被動",[]]]},
 {say:"三步驟口訣！", chant:"找動詞、看時間、判主被！"},
 {say:"先看時間線索：看到 since 或 for 加一段時間，就想到完成式：{She has been writing poetry since she was ten.} 看到 by the time 加過去式，就用過去完成式。", board:[["... since she was ten → has + p.p.",["since"]],["By the time we arrived, the show had started.",["By the time","had started"]]]},
 {ask:{q:"She ___ poetry since she was ten.", opts:["wrote","has written","writes"], ans:1,
   ok:"答對！since 加過去時間點，用現在完成式。", bad:{0:"有 since，表示從過去持續到現在，要用完成式。",2:"有 since，要用現在完成式 has written。"},
   again:{q:"By the time we arrived, the show ___.", opts:["had started","has started"], ans:0, exp:"by the time + 過去式，用過去完成式。"}}},
 {say:"再來判斷主動被動：主詞是「被」做的，就用 be 加 p.p.：{Her first novel was published in 2015.} 但小心，不及物動詞沒有被動，像 occur、happen、disappear。", board:[["Her first novel was published in 2015.",["was published"]],["The accident was occurred at midnight.",[],true]]},
 {ask:{q:"The accident ___ at midnight.", opts:["was occurred","occurred"], ans:1,
   ok:"讚！occur 是不及物動詞，沒有被動。", bad:{0:"occur 沒有被動！直接用 occurred。"},
   again:{q:"Her first novel ___ in 2015.", opts:["published","was published"], ans:1, exp:"小說是被出版的，用 was published。"}}},
 {say:"重要觀念：一個句子只能有一個主要動詞！{The book written by a student became a bestseller.} 主要動詞是 became，所以 write 要改成過去分詞 written 來修飾 the book。", board:[["The book written by a student became a bestseller.",["written","became"]],["The book wrote by a student became ...",[],true]]},
 {ask:{q:"The book ___ by a young student became a bestseller.", opts:["was written","written","wrote"], ans:1,
   ok:"完美！主要動詞是 became，written 只是修飾 the book。", bad:{0:"句子已經有主要動詞 became 了，不能再放 was written。",2:"書是被寫的，而且主要動詞已經是 became，要用 written。"},
   again:{q:"Learning a language ___ persistence.", opts:["requires","require"], ans:0, exp:"動名詞片語當主詞視為單數。"}}},
 {say:"最後是不定詞和動名詞：enjoy、finish、avoid 和介係詞後面接 V-ing；want、hope、decide、refuse 後面接 to V。look forward to 的 to 是介係詞，所以接 V-ing！", board:[["finish painting / be afraid of failing",["painting","failing"]],["refuse to review / decide to go",["to review","to go"]],["look forward to performing",["performing"]]]},
 {say:"口訣！", chant:"enjoy、finish、avoid 接 ing；want、hope、decide 接 to！"},
 {ask:{say:"最後一題！", q:"The orchestra is looking forward to ___ in Tainan.", opts:["perform","performing","performed"], ans:1,
   ok:"太棒了！look forward to 的 to 是介係詞，後面接 V-ing。", bad:{0:"這個 to 是介係詞，不是不定詞，後面要接 V-ing。",2:"介係詞後面要接動名詞 performing。"},
   again:{q:"The critic refused ___ the movie.", opts:["to review","reviewing"], ans:0, exp:"refuse 後面接 to V。"}}},
 {say:"總複習完成！口訣：找動詞、看時間、判主被；一句只能一個主要動詞。高一的文法全部上完了，去挑戰期末魔王吧！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S1_2_3_ROOTS = [
  {id:"r1", title:"動詞字尾：-ify / -ate / -ize（使……）"},
  {id:"r2", title:"字首：co- / con- / com-（一起）"},
  {id:"r3", title:"字根：cur / curr / curs（跑）"},
  {id:"r4", title:"字根：sens / sent（感覺）"}
];
const S1_2_3_ROOT_CLASS = {
r1:[
 {say:"高一同學好！今天教你一招把形容詞、名詞變成動詞的魔法：動詞字尾 <<ify>>、<<ate>>、<<ize>>，意思都是「使……」。", board:[["simple → simplify",["ify"],false,true],["active → activate",["ate"],false,true],["modern → modernize",["ize"],false,true]]},
 {say:"先看 <<ify>>：{simplify} 使簡單、{classify} 使歸類、{justify} 使合理、{identify} 認出。拼字注意：simple 去掉 e 再加 ify。", board:[["simpl + ify = simplify",["ify"],false,true],["class + ify = classify",["ify"],false,true],["just + ify = justify",["ify"],false,true]]},
 {say:"口訣！", chant:"ify、ate、ize，通通是「使……」！"},
 {ask:{q:"simpl（簡單的）＋ ify（使）＝ simplify，意思是？", opts:["簡單的","簡化","簡單地"], ans:1,
   ok:"對！使變簡單，就是簡化，而且是動詞。", bad:{0:"「簡單的」是 simple；加了 ify 就變成動詞「使……」。",2:"「簡單地」是副詞 simply；ify 讓它變成動詞。"},
   again:{q:"class ＋ ify ＝ classify，意思是？", opts:["分類","教室","班級的"], ans:0, exp:"使歸入類別，就是分類。"}}},
 {say:"再來是 <<ate>>：{activate} 使活動 → 啟動、{fascinate} 使著迷、{illustrate} 圖解說明。至於 <<ify>> 家族還有 {intensify} 使更強烈、{magnify} 使變大。", board:[["activ + ate = activate",["ate"],false,true],["magn + ify = magnify",["ify"],false,true],["fascin + ate = fascinate",["ate"],false,true]]},
 {ask:{q:"Press the button to ＿＿ the alarm.（啟動）", opts:["active","activity","activate"], ans:2,
   ok:"讚！to 後面要接動詞「使活動起來」：activate。", bad:{0:"active 是形容詞，這裡要動詞。",1:"activity 是名詞「活動」，這裡要動詞。"},
   again:{q:"Stars ＿＿ people.（使著迷）", opts:["fascinate","fascination"], ans:0, exp:"主詞後面要接動詞 fascinate。"}}},
 {say:"第三個 <<ize>> 最常見：{symbolize} 象徵、{modernize} 使現代化、{visualize} 想像畫面、{criticize} 批評、{emphasize} 強調。", board:[["modern + ize = modernize",["ize"],false,true],["symbol + ize = symbolize",["ize"],false,true],["visual + ize = visualize",["ize"],false,true]]},
 {ask:{q:"「使現代化」怎麼拼？", opts:["modernify","modernize","modernate"], ans:1,
   ok:"完美！modern 加 ize：modernize。", bad:{0:"英文沒有 modernify 這個字，要用 modernize。",2:"英文沒有 modernate 這個字，要用 modernize。"},
   again:{q:"symbol ＋ ize ＝ symbolize，意思是？", opts:["象徵","符號"], ans:0, exp:"使成為象徵 → 象徵（動詞）；符號是 symbol。"}}},
 {say:"這招在詞性題超好用！看到 ify、ate、ize 結尾，八成是動詞。{The teacher tried to simplify the story.} to 後面要接原形動詞，就選 simplify。", board:[["tried to + 動詞：simplify",["simplify"]],["The teacher tried to simple the story.",[],true]]},
 {ask:{say:"最後一題！", q:"Our teacher tried to ＿＿ the poem for us.", opts:["simple","simplify","simply"], ans:1,
   ok:"太棒了！tried to 後面要接動詞：simplify。", bad:{0:"simple 是形容詞，to 後面要接動詞。",2:"simply 是副詞，to 後面要接動詞。"},
   again:{q:"Close your eyes and ＿＿ the scene.（想像畫面）", opts:["visual","visualize"], ans:1, exp:"祈使句要用動詞 visualize。"}}},
 {say:"動詞字尾過關！口訣：ify、ate、ize，通通是「使……」，看到就知道是動詞！", end:true}
],
r2:[
 {say:"今天學一個超好用的字首：<<co>>、<<con>>、<<com>>，意思都是「一起」！", board:[["co + exist = coexist",["co"],false,true],["con + nect = connect",["con"],false,true],["com + bine = combine",["com"],false,true]]},
 {say:"<<co>> 最好懂：{coexist} 一起存在 → 共存；{coworker} 一起工作的人 → 同事。", board:[["co + exist = coexist",["co"],false,true],["co + worker = coworker",["co"],false,true]]},
 {say:"<<com>> 和 <<col>> 會變身：後面接 b、p、m 時用 com：{combine}、{compose}、{compassion}；後面接 l 時變成 col：{collaborate}。", board:[["com + bine = combine",["com"],false,true],["com + pose = compose",["com"],false,true],["col + labor + ate = collaborate",["col"],false,true]]},
 {say:"變身口訣！", chant:"b、p、m 前用 com，l 前變 col，其他多半用 con！"},
 {ask:{q:"＿＿bine（結合）字首要填？", opts:["con","com","co"], ans:1,
   ok:"對！bine 開頭是 b，用 com：combine。", bad:{0:"bine 開頭是 b，b 前面要用 com。",2:"bine 開頭是 b，要用 com 才對。"},
   again:{q:"＿＿laborate（協力合作）字首要填？", opts:["col","con"], ans:0, exp:"labor 開頭是 l，要用 col：collaborate。"}}},
 {say:"<<con>> 最多：{connect} 綁在一起 → 連接、{confront} 面對面 → 正視、{convince} 完全征服 → 說服、{conform} 變成一樣的形狀 → 遵守、{conclude} 完全關起來 → 下結論。", board:[["con + nect = connect",["con"],false,true],["con + front = confront",["con"],false,true],["con + form = conform",["con"],false,true]]},
 {ask:{q:"con（面對面）＋ front（前面）＝ confront，意思是？", opts:["面對","合作","結論"], ans:0,
   ok:"讚！站到前面面對面，就是面對、正視。", bad:{1:"合作是 collaborate，front 是「前面」喔。",2:"結論是 conclude，front 是「前面」喔。"},
   again:{q:"con（一起）＋ nect（綁）＝ connect，意思是？", opts:["連接","收集"], ans:0, exp:"綁在一起就是連接。"}}},
 {say:"再看兩個跟「感覺」有關的：{compassion} 是 com 一起，加 pass 感受，和別人一起感受痛苦 → 同情。{consensus} 是 con 一起，加 sens 感覺，大家有一樣的感覺 → 共識。", board:[["com + pass + ion = compassion",["com","pass"],false,true],["con + sens + us = consensus",["con","sens"],false,true]]},
 {ask:{q:"con（一起）＋ sens（感覺）＋ us ＝ consensus，意思是？", opts:["共識","同情","說服"], ans:0,
   ok:"完全正確！大家一起有同樣的感覺，就是共識。", bad:{1:"同情是 compassion 喔。",2:"說服是 convince 喔。"},
   again:{q:"coworker 是？", opts:["同事","同學"], ans:0, exp:"co 一起 + worker 工作者 = 同事。"}}},
 {say:"文法加碼：{consist of} 和 {be composed of} 都是「由……組成」，但 consist of 沒有被動，不能說 is consisted of！", board:[["The play consists of three acts.",["consists of"]],["The play is composed of three acts.",["is composed of"]],["The play is consisted of three acts.",[],true]]},
 {ask:{say:"最後一題！", q:"The team ＿＿ of five people.", opts:["is consisted","consists","is consisting"], ans:1,
   ok:"太棒了！consist of 不用被動也不用進行式。", bad:{0:"consist 沒有被動！要說 consists of。",2:"consist 表示狀態，不用進行式。"},
   again:{q:"The team is ＿＿ of five people.", opts:["composed","consisted"], ans:0, exp:"be composed of 才能用被動。"}}},
 {say:"字首過關！口訣：co、con、com 都是「一起」；b、p、m 前用 com，l 前變 col！", end:true}
],
r3:[
 {say:"今天學一個會「跑」的字根：<<cur>>，也會寫成 <<curr>>、<<curs>>，意思都是「跑」！", board:[["cur / curr / curs = 跑",["cur"],false,true]]},
 {say:"{current}：curr 跑加 ent，「正在跑的」→ 目前的；水在跑 → 水流。{currency} 貨幣也是同一家人：在大家手上流通、跑來跑去的錢。", board:[["curr + ent = current",["curr"],false,true],["curr + ency = currency",["curr"],false,true]]},
 {say:"口訣！", chant:"cur、curr、curs，通通在跑步！"},
 {ask:{q:"the current exhibition 的 current 意思是？", opts:["目前的","過去的","電流"], ans:0,
   ok:"對！正在跑的 → 目前的，the current exhibition 是目前的展覽。", bad:{1:"current 是「正在跑的」，是現在，不是過去喔。",2:"current 當名詞可以是電流，但這裡放在名詞 exhibition 前面，是形容詞「目前的」。"},
   again:{q:"Despite the strong current, ... 這裡的 current 是？", opts:["水流","目前的"], ans:0, exp:"strong 修飾名詞 current，是「水流」。"}}},
 {say:"{occur}：oc 朝向加 cur 跑，事情朝你跑過來 → 發生。名詞是 {occurrence}，r 要雙寫。{recur}：re 再加 cur 跑，又跑回來 → 一再發生。", board:[["oc + cur = occur",["cur"],false,true],["oc + curr + ence = occurrence",["curr"],false,true],["re + cur = recur",["cur"],false,true]]},
 {ask:{q:"The accident ＿＿ last night.", opts:["occurred","was occurred"], ans:0,
   ok:"讚！occur 是不及物動詞，沒有被動，而且過去式要雙寫 r。", bad:{1:"occur 沒有被動！直接用 occurred。"},
   again:{q:"re（再）＋ cur（跑）＝ recur，意思是？", opts:["一再發生","恢復"], ans:0, exp:"再跑回來，就是一再發生。"}}},
 {say:"再來兩個：{excursion}，ex 向外加 curs 跑，往外跑一趟 → 短途旅行。{curriculum}，學生要跑完的跑道 → 課程。", board:[["ex + curs + ion = excursion",["curs"],false,true],["curr + iculum = curriculum",["curr"],false,true]]},
 {ask:{q:"ex（向外）＋ curs（跑）＋ ion ＝ excursion，意思是？", opts:["短途旅行","課程","發生的事"], ans:0,
   ok:"完美！往外跑一趟，就是短途旅行。", bad:{1:"課程是 curriculum 喔。",2:"發生的事是 occurrence 喔。"},
   again:{q:"curriculum 是？", opts:["課程","好奇心"], ans:0, exp:"學生要跑完的跑道 → 課程；好奇心是 curiosity。"}}},
 {say:"小心陷阱！{courage} 勇氣的 cour 長得很像，但它來自「心」，不是「跑」！發自內心的力量才叫勇氣。字根要看意思，不能只看長相。", board:[["oc + cur = occur（跑）",["cur"],false,true],["cour + age = courage（心）",["cour"],false,true]]},
 {ask:{say:"最後一題！", q:"下面哪一個字的 cur / cour 不是「跑」？", opts:["occur","courage","excursion"], ans:1,
   ok:"太厲害了！courage 的 cour 是「心」，不是跑。", bad:{0:"occur 是朝你跑過來 → 發生，是「跑」喔。",2:"excursion 是往外跑一趟，是「跑」喔。"},
   again:{q:"occurrence 中間要寫幾個 r？", opts:["兩個","一個"], ans:0, exp:"occur 加 ence 時 r 要雙寫：occurrence。"}}},
 {say:"字根過關！口訣：cur、curr、curs 通通在跑步；courage 的 cour 是心，別搞混！", end:true}
],
r4:[
 {say:"最後一課，學「感覺」的字根：<<sens>> 和 <<sent>>！你最熟的 {sense} 就是它本人。", board:[["sens / sent = 感覺",["sens","sent"],false,true]]},
 {say:"<<sens>> 家族：{sensitive} 很容易感覺到 → 敏感的；{sensible} 有感覺、會判斷 → 明智的；{sensation} 感覺、轟動；{nonsense} 沒有意義 → 胡說。", board:[["sens + itive = sensitive",["sens"],false,true],["sens + ible = sensible",["sens"],false,true],["sens + ation = sensation",["sens"],false,true],["non + sense = nonsense",["sense"],false,true]]},
 {say:"口訣！", chant:"sens、sent，用心去感覺！"},
 {ask:{q:"My skin is very ＿＿ to the sun.（敏感的）", opts:["sensitive","sensible"], ans:0,
   ok:"對！容易感覺到、敏感的，是 sensitive。", bad:{1:"sensible 是「明智的」，敏感要用 sensitive。"},
   again:{q:"sens ＋ ation ＝ sensation，可以表示？", opts:["轟動","感性的"], ans:0, exp:"ation 是名詞字尾，sensation 是感覺、轟動。"}}},
 {say:"sensitive 和 sensible 是段考最愛的一對：sensitive 敏感的，sensible 明智的。稱讚人做事明智要說 {It was sensible of you to bring an umbrella.}", board:[["sensitive 敏感的",["sensitive"]],["sensible 明智的",["sensible"]],["It was sensible of you to bring an umbrella.",["sensible of you"]]]},
 {ask:{q:"It was ＿＿ of you to bring an umbrella.", opts:["sensitive","sensible","sensation"], ans:1,
   ok:"讚！帶傘很明智，用 sensible。", bad:{0:"sensitive 是敏感的，帶傘是明智，要用 sensible。",2:"sensation 是名詞，這裡要形容詞 sensible。"},
   again:{q:"Stop talking ＿＿!（胡說）", opts:["nonsense","sense"], ans:0, exp:"non 沒有 + sense 意義 = 胡說。"}}},
 {say:"<<sent>> 家族：{consent} con 一起加 sent 感覺，跟你感覺一致 → 同意；{resent} 心裡反覆湧上不好的感覺 → 不滿；{sentiment} 情感、看法。", board:[["con + sent = consent",["sent"],false,true],["re + sent = resent",["sent"],false,true],["senti + ment = sentiment",["senti"],false,true]]},
 {ask:{q:"con（一起）＋ sent（感覺）＝ consent，意思是？", opts:["同意","不滿","情感"], ans:0,
   ok:"完美！感覺一致，就是同意。", bad:{1:"不滿是 resent 喔。",2:"情感是 sentiment 喔。"},
   again:{q:"He resented ＿＿ like a child.", opts:["being treated","to be treated"], ans:0, exp:"resent 後面接動名詞，被動是 being + p.p.。"}}},
 {ask:{say:"最後一題！", q:"You need your parents' ＿＿ to join the trip.（同意）", opts:["consent","resent","sentiment"], ans:0,
   ok:"太棒了！家長同意是 consent。", bad:{1:"resent 是動詞「不滿」，意思也相反。",2:"sentiment 是情感，不是同意。"},
   again:{q:"The song expresses the ＿＿ of missing home.", opts:["sentiment","sense"], ans:0, exp:"思鄉之「情」用 sentiment。"}}},
 {say:"字根過關！口訣：sens、sent，用心去感覺；sensitive 敏感、sensible 明智別搞混！字根字首全部上完了，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 記憶小撇步（沒有字根拆解的字） ---------- */
Object.assign(MEMO, {
  sense: "字根 sens（感覺）本身就是一個字：sense。常用搭配：a sense of humor（幽默感）、make sense（合理、說得通）。",
  orchestra: "orchestra 的 ch 唸 /k/，和 chorus（合唱團）一樣；重音在第一音節：OR-ches-tra。",
  rhythm: "rhythm 節奏，拼字沒有母音字母 a、e、i、o、u，y 當母音用：r-h-y-t-h-m。形容詞 rhythmic（有節奏的）。",
  myth: "myth 神話，y 唸短音 /ɪ/；也指「迷思、錯誤的說法」。mythology 是神話（總稱）。",
  fable: "fable 寓言：用動物故事講道理，最有名的是《伊索寓言》Aesop's Fables。結尾 -ble 和 table、able 一樣。",
  gallery: "gallery 原本是「長廊」：畫作掛在長長的走廊上 → 畫廊、美術館。拼字有兩個 l：gal-ler-y。",
  costume: "costume 和 custom（習俗）同源：依照習俗穿的衣服 → 服裝、戲服。重音在第一音節：COS-tume。",
  drama: "drama 原意是「行動」：把故事用動作演出來 → 戲劇。形容詞是 dramatic（戲劇性的）。",
  comedy: "comedy 喜劇、tragedy 悲劇都以 -edy 結尾，一喜一悲一起記；comedian 是喜劇演員。",
  tragedy: "tragedy 悲劇，形容詞是 tragic（悲慘的）；和 comedy（喜劇）都以 -edy 結尾，一起記。",
  quote: "quote 引用；名詞也可以說 quotation。q 後面一定跟著 u：qu-ote。常見搭配：quote A from B。",
  theme: "theme 的 th 唸 /θ/，字尾 e 不發音；theme park 是主題樂園。",
  tale: "tale（故事）和 tail（尾巴）同音：故事講到最後就是「尾巴」。fairy tale 是童話故事。",
  value: "value 價值；當動詞是「重視」。形容詞 valuable（珍貴的）要去 e 再加 able。",
  struggle: "struggle with + 困難（和……搏鬥）；struggle to V（努力想做……）。拼字記得 gg 雙寫。"
});

/* ---------- 插圖：手繪場景（原創） ---------- */
Object.assign(ILLUS2, {
  excursion: () => svgWrap("#e0f2fe", `<path d="M0 90 Q80 80 160 90 V120 H0 Z" fill="#86efac"/><path d="M0 106 H160" stroke="#9ca3af" stroke-width="10"/>` + O.tree(18, 82, .55) + O.tree(146, 84, .5) + O.bus(72, 88, .8) + O.sun(132, 22, .7) + O.cloud(40, 24, .6) + `<path d="M104 64 Q118 50 126 58" stroke="#f97316" stroke-width="2.5" fill="none" stroke-dasharray="4 3"/>` + O.pin(134, 48, .6)),
  orchestra: () => svgWrap("#2b2140", `<rect x="0" y="96" width="160" height="24" fill="#7c2d12"/><path d="M50 0 L28 100 H132 L110 0 Z" fill="#fef3c7" opacity=".14"/>` + P({x:80, y:96, s:.8, hair:"short", hc:"#2b2b2b", oc:"#111827", pose:"cheer", acc:["tie"], mood:"open"}) + grp(34, 96, .55, `<path d="M-10 -40 Q-20 -20 -10 0 Q0 10 10 0 Q20 -20 10 -40 Q0 -48 -10 -40 Z" fill="#b45309"/><path d="M0 -40 V-70" stroke="#78350f" stroke-width="3"/>`) + grp(126, 96, .55, `<path d="M-10 -40 Q-20 -20 -10 0 Q0 10 10 0 Q20 -20 10 -40 Q0 -48 -10 -40 Z" fill="#b45309"/><path d="M0 -40 V-70" stroke="#78350f" stroke-width="3"/>`) + txt(30, 30, "♪", 18, "#fde68a") + txt(130, 34, "♫", 18, "#fde68a") + spark(80, 12, .8, "#fde68a")),
  gallery: () => svgWrap("#f5f0e8", `<rect x="0" y="96" width="160" height="24" fill="#d6c3a5"/>` + `<rect x="12" y="20" width="40" height="32" fill="#fff" stroke="#a16207" stroke-width="4"/><path d="M16 46 L28 32 L38 42 L44 36 L48 46 Z" fill="#60a5fa"/><circle cx="42" cy="28" r="4" fill="#fbbf24"/>` + `<rect x="108" y="16" width="38" height="44" fill="#fff" stroke="#a16207" stroke-width="4"/><circle cx="127" cy="34" r="8" fill="#ffe0c8"/><path d="M115 56 Q127 42 139 56 Z" fill="#8b5cf6"/>` + kid(80, {mood:"open", oc:"#ffb347"}) + spark(64, 18, .7) + spark(98, 72, .5))
});

registerUnit("s1-2-3", {
  name:"高一 下學期 期末考",
  sub:"關係代名詞 whose／of which、讓步子句、Not until 句型、高一文法總複習",
  words:S1_2_3_WORDS, grammar:S1_2_3_GRAMMAR, quiz:S1_2_3_QUIZ,
  classes:Object.assign({}, S1_2_3_CLASS, S1_2_3_ROOT_CLASS), phonics:S1_2_3_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會字首、字根、字尾，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();

