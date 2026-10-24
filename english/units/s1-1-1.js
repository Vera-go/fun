/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高一上學期 第一次段考（通用範圍）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S1_1_1_WORDS = [
/* ---------- 高中新生活與自我介紹 ---------- */
["introduction","n.","介紹；自我介紹",[
 ["Each new student gave a short introduction on the first day of school.","開學第一天，每位新生都做了簡短的自我介紹。","give an introduction 表示「做介紹」；each 後面接單數名詞 student。"],
 ["I remember giving my introduction in front of the whole class.","我記得在全班面前做過自我介紹。","remember + V-ing 表示「記得做過某事」，自我介紹已經做完了。"],
 ["Our teacher made us write an introduction in English.","老師要我們用英文寫一篇自我介紹。","使役動詞 make + 受詞 + 原形動詞：made us write，不能寫成 to write。"]],
 "intro-=向內|duc=引導|-tion=名詞字尾","把人引導進來大家認識 → 介紹","👋|自我介紹"],
["background","n.","背景",[
 ["Students in our class come from different backgrounds.","我們班上的同學來自不同的背景。","background 表示人的「出身、經歷」時是可數名詞，常用複數。"],
 ["She has been learning about her family background for a school project.","為了學校的專題，她一直在了解自己的家庭背景。","has been learning 是現在完成進行式，表示從之前一直持續到現在的動作。"],
 ["I heard music playing in the background during the phone call.","講電話時，我聽到背景有音樂在播放。","感官動詞 hear + 受詞 + V-ing，表示聽到「正在進行」的動作。"]],
 "back=後面|ground=地面","在後面的那片地面 → 背景","🖼️|背景"],
["identity","n.","身分；認同",[
 ["Please bring your student identity card tomorrow.","明天請帶你的學生證。","identity card 是「身分證件」，常簡稱 ID card。"],
 ["Language is an important part of our identity.","語言是我們身分認同中很重要的一部分。","a part of + 名詞 表示「……的一部分」。"],
 ["The police officer had the man show his identity card.","警察要求那名男子出示身分證件。","使役動詞 have + 人 + 原形動詞：had the man show，表示「叫某人做某事」。"]],
 "ident=相同|-ity=名詞字尾","和自己相同、認得出是誰 → 身分","🪪|身分"],
["strength","n.","力量；優點",[
 ["Being patient is one of my strengths.","有耐心是我的優點之一。","one of + 複數名詞；動名詞片語 Being patient 當主詞，視為單數，所以用 is。"],
 ["After a good night's sleep, I felt my strength coming back.","好好睡了一晚之後，我覺得體力慢慢回來了。","感官動詞 feel + 受詞 + V-ing，表示感覺到「正在進行」的變化。"],
 ["I have been exercising every morning to build up my strength.","我每天早上一直在運動，增強體力。","have been exercising 是現在完成進行式；to build up 表示目的。"]],
 "streng=強壯（strong）|-th=名詞字尾","strong 的名詞 → 力量；強項 → 優點","💪|優點與力量"],
["orientation","n.","新生訓練；方向",[
 ["All freshmen must attend orientation before school starts.","所有新生在開學前都必須參加新生訓練。","must + 原形動詞；attend 後面直接接受詞，不加 to。"],
 ["At orientation, the seniors had us play some ice-breaking games.","新生訓練時，學長姐讓我們玩了一些破冰遊戲。","使役動詞 have + 人 + 原形動詞：had us play。"],
 ["I still remember feeling lost during orientation.","我還記得新生訓練時覺得很茫然。","remember + V-ing 表示「記得（過去）有過這種感覺」。"]],
 "orient=東方；方向|-ation=名詞字尾","幫新生找到方向 → 新生訓練","🧭|新生訓練"],
["mature","adj.","成熟的",[
 ["He has become more mature since he started high school.","從上高中以後，他變得更成熟了。","has become 是現在完成式，搭配 since + 過去的時間點。"],
 ["Living away from home made her more mature.","離家生活讓她變得更成熟。","make + 受詞 + 形容詞 表示「使……變得……」；動名詞片語 Living away from home 當主詞。"],
 ["A mature person can control his or her feelings.","一個成熟的人能控制自己的情緒。","mature 放在名詞 person 前面修飾它。"]],
 "","","🌳|成熟"],
["characteristic","n./adj.","特色；特有的",[
 ["Honesty is one of his best characteristics.","誠實是他最好的特質之一。","characteristic 當名詞「特色、特質」時是可數名詞。"],
 ["Spicy food is characteristic of this area.","辣的食物是這個地區的特色。","be characteristic of + 名詞 表示「是……的特色」，這裡 characteristic 當形容詞。"],
 ["I have been trying to find the characteristics of a good learner.","我一直在試著找出好學習者有哪些特質。","have been trying 是現在完成進行式；try to V 表示「努力、設法去做」。"]],
 "character=特徵|-istic=形容詞字尾","有特徵的 → 特有的；特色","🔖|特色"],
["cafeteria","n.","自助餐廳；學生餐廳",[
 ["We usually have lunch in the school cafeteria.","我們通常在學生餐廳吃午餐。","usually 放在一般動詞 have 前面；have lunch 表示「吃午餐」，lunch 前面不加 a。"],
 ["I saw my classmates waiting in line at the cafeteria.","我看到同學們在餐廳排隊。","see + 受詞 + V-ing：看到「正在」排隊的畫面。"],
 ["The principal had the cafeteria serve more vegetables.","校長要求學生餐廳供應更多蔬菜。","使役動詞 have + 受詞 + 原形動詞：had the cafeteria serve。"]],
 "","","@s111_cafeteria"],
["expectation","n.","期望；預期",[
 ["My parents have high expectations of me.","我爸媽對我有很高的期望。","have high expectations of 人 表示「對某人期望很高」，expectation 常用複數。"],
 ["The result was beyond my expectations.","結果超出我的預期。","beyond one's expectations 表示「超出某人的預期」。"],
 ["Don't let other people's expectations decide your future.","別讓別人的期望決定你的未來。","使役動詞 let + 受詞 + 原形動詞：let ... decide，不能寫成 to decide。"]],
 "ex-=向外|spect=看|-ation=名詞字尾","向外看、盼望著 → 期望","🌟|期望"],
["impression","n.","印象",[
 ["You only have one chance to make a good first impression.","你只有一次機會留下好的第一印象。","make a good impression 表示「給人好印象」；chance to V 表示「做某事的機會」。"],
 ["What was your first impression of our school?","你對我們學校的第一印象是什麼？","impression of + 名詞 表示「對……的印象」。"],
 ["I remember having a bad impression of him at first, but now we are best friends.","我記得一開始對他印象不好，但現在我們是最好的朋友。","remember + V-ing 表示「記得過去發生過的事」。"]],
 "im-=進入|press=壓|-ion=名詞字尾","壓進心裡的痕跡 → 印象","✨|印象"],
["humorous","adj.","幽默的",[
 ["Our homeroom teacher is humorous and kind.","我們的導師既幽默又親切。","homeroom teacher 是「導師」；兩個形容詞用 and 連接。"],
 ["We heard him tell a humorous story at the club meeting.","我們在社團聚會上聽他講了一個幽默的故事。","hear + 受詞 + 原形動詞，表示從頭到尾聽完整件事。"],
 ["His humorous self-introduction made everyone laugh.","他幽默的自我介紹讓大家都笑了。","使役動詞 make + 受詞 + 原形動詞：made everyone laugh。"]],
 "humor=幽默|-ous=充滿……的","充滿幽默的","😂|幽默"],
/* ---------- 社團與人際 ---------- */
["debate","n./v.","辯論",[
 ["Our school's debate team has been practicing every day this week.","我們學校的辯論隊這星期每天都在練習。","has been practicing 是現在完成進行式；主詞 debate team 是單數，所以用 has。"],
 ["The teacher had us debate whether students should wear uniforms.","老師要我們辯論學生是否應該穿制服。","have + 人 + 原形動詞；whether 引導名詞子句，表示「是否」。"],
 ["We watched the seniors debate on stage.","我們看學長姐在台上辯論。","感官動詞 watch + 受詞 + 原形動詞，表示看完整個過程。"]],
 "de-=向下|bate=打","用言語把對方打下去 → 辯論","@s111_debate"],
["rehearsal","n.","排練；預演",[
 ["The drama club has been having rehearsals every afternoon.","戲劇社每天下午都在排練。","have a rehearsal 表示「排練」；這裡的 have 是「進行」的意思，可以用進行式。"],
 ["The director made us do the rehearsal again.","導演要我們再排練一次。","使役動詞 make + 人 + 原形動詞：made us do。"],
 ["Don't forget to come to the rehearsal at seven.","別忘了七點要來排練。","forget + to V 表示「忘了要去做（還沒做）」。"]],
 "","","🎭|排練"],
["leadership","n.","領導能力",[
 ["Leading a club helps students develop leadership skills.","帶領社團能幫助學生培養領導能力。","help + 受詞 + 原形動詞（或 to V）；動名詞片語 Leading a club 當主詞。"],
 ["She showed great leadership during the school festival.","她在校慶期間展現了很強的領導能力。","leadership 是不可數名詞，不加 a，也不加 s。"],
 ["The coach had me lead the warm-up to build my leadership.","教練讓我帶暖身操來培養我的領導能力。","have + 人 + 原形動詞：had me lead。"]],
 "lead=帶領|-er=人|-ship=身分、能力","帶領者具備的能力 → 領導能力","🚩|領導力"],
["cooperate","v.","合作",[
 ["Group members should cooperate with each other.","小組成員應該互相合作。","cooperate with 人 表示「和某人合作」。"],
 ["The teacher made the two groups cooperate on one project.","老師要兩組合作完成一個專題。","make + 受詞 + 原形動詞；cooperate on 事 表示「在某事上合作」。"],
 ["We have been cooperating with the art club on the posters.","我們一直在和美術社合作製作海報。","have been cooperating 是現在完成進行式，表示合作從之前持續到現在。"]],
 "co-=一起|oper=工作|-ate=動詞字尾","一起工作 → 合作","🤝|合作"],
["teamwork","n.","團隊合作",[
 ["Teamwork is the key to winning the relay race.","團隊合作是贏得大隊接力的關鍵。","the key to 的 to 是介係詞，後面接名詞或 V-ing。"],
 ["We won the game because of good teamwork.","因為團隊合作良好，我們贏了比賽。","because of + 名詞；because 後面才接子句。"],
 ["Our coach often lets us practice teamwork through games.","教練常讓我們透過遊戲練習團隊合作。","使役動詞 let + 受詞 + 原形動詞：lets us practice。"]],
 "team=團隊|work=工作","團隊一起工作 → 團隊合作","👥|團隊合作"],
["recruit","v./n.","招募；新成員",[
 ["The basketball club is recruiting new members this week.","籃球社這星期正在招募新社員。","現在進行式也可以表示「這段期間正在進行」的事。"],
 ["We got the seniors to help us recruit freshmen.","我們請學長姐幫忙招募新生。","get + 人 + to V：got the seniors to help，get 後面一定要加 to。"],
 ["The new recruits have been practicing hard since September.","新社員從九月起就一直在努力練習。","have been practicing 搭配 since + 過去時間點；recruit 也可以當名詞「新成員」。"]],
 "","","🪧|招募"],
["peer","n.","同儕；同齡的人",[
 ["Teenagers often care about what their peers think.","青少年常在意同儕的想法。","what their peers think 是名詞子句，當 care about 的受詞。"],
 ["Peer pressure can make students do things they don't want to do.","同儕壓力會讓學生做自己不想做的事。","make + 受詞 + 原形動詞：make students do。"],
 ["I have been studying with my peers in the library after school.","我放學後一直和同學在圖書館讀書。","現在完成進行式表示最近一直持續的習慣。"]],
 "","","🧑‍🤝‍🧑|同儕"],
["companion","n.","同伴",[
 ["My dog has been my best companion since I was little.","從我小時候起，我的狗就是我最好的同伴。","has been 後面接名詞，是 be 動詞的現在完成式，不是完成進行式（後面沒有 V-ing）。"],
 ["Books are good companions on a long trip.","書是長途旅行的好伴侶。","companion 是可數名詞，複數加 s。"],
 ["I saw my companion fall asleep on the bus.","我看到同伴在公車上睡著了。","see + 受詞 + 原形動詞：看到整個睡著的過程。"]],
 "com-=一起|pan=麵包|-ion=人","一起吃麵包的人 → 同伴","🐕|同伴"],
["conflict","n.","衝突",[
 ["Talking openly can help solve conflicts between friends.","坦白溝通可以幫忙化解朋友間的衝突。","help + 原形動詞 也可以；between 用在兩者之間。"],
 ["I heard two classmates arguing, so I tried to stop the conflict.","我聽到兩個同學在吵架，所以試著阻止這場衝突。","hear + 受詞 + V-ing 表示聽到正在吵；try to V 表示「努力設法去做」。"],
 ["If you have a conflict with someone, try to see things from his or her side.","如果和別人起衝突，試著站在對方的角度看事情。","have a conflict with 人 表示「和某人起衝突」。"]],
 "con-=一起|flict=打擊","互相打在一起 → 衝突","💥|衝突"],
["compromise","n./v.","妥協；折衷",[
 ["After a long talk, the two clubs reached a compromise.","談了很久之後，兩個社團達成了折衷方案。","reach a compromise 表示「達成妥協」。"],
 ["Friends sometimes have to compromise to stay close.","朋友有時候必須互相讓步，才能維持好感情。","have to + 原形動詞 表示「必須」；to stay 表示目的。"],
 ["Our class leader got everyone to compromise on the plan.","班長讓大家在這個計畫上各退一步。","get + 人 + to V：got everyone to compromise。"]],
 "com-=一起|promise=承諾","雙方一起做出承諾 → 妥協","🤲|各退一步"],
["communicate","v.","溝通",[
 ["It is important to communicate with your teachers.","和老師溝通是很重要的。","虛主詞 It 代替後面的 to communicate ...。"],
 ["I have been trying to communicate better with my parents.","我一直努力想和爸媽有更好的溝通。","have been trying 是現在完成進行式；communicate with 人。"],
 ["Texting lets us communicate quickly.","傳訊息讓我們能快速溝通。","let + 受詞 + 原形動詞；動名詞 Texting 當主詞，視為單數，所以用 lets。"]],
 "commun=共同|-ic=……的|-ate=動詞字尾","使想法變成大家共同的 → 溝通","📡|溝通"],
["gossip","n./v.","八卦；說閒話",[
 ["I don't like people who gossip about others.","我不喜歡在背後說別人閒話的人。","gossip about 人 表示「說某人的閒話」；who 引導關係子句修飾 people。"],
 ["I overheard some students gossiping about the new teacher.","我無意中聽到幾個學生在聊新老師的八卦。","感官動詞 overhear + 受詞 + V-ing，表示聽到正在進行的談話。"],
 ["Stop gossiping and start studying!","別再聊八卦了，開始讀書吧！","stop + V-ing 表示「停止正在做的事」。"]],
 "","","🤫|八卦"],
["rumor","n.","謠言",[
 ["There is a rumor that our school will build a new gym.","有謠言說我們學校要蓋新體育館。","a rumor that + 子句，that 子句說明謠言的內容。"],
 ["Don't believe a rumor until you check the facts.","在查證事實之前，別相信謠言。","not ... until 表示「直到……才……」。"],
 ["I regret spreading that rumor last year.","我很後悔去年散播了那個謠言。","regret + V-ing 表示「後悔做過某事」，散播謠言已經發生了。"]],
 "","","🗯️|謠言"],
["loyal","adj.","忠誠的",[
 ["A loyal friend will stand by you when you are in trouble.","忠實的朋友會在你有麻煩時支持你。","stand by 人 表示「支持某人」。"],
 ["Dogs are known for being loyal to their owners.","狗以對主人忠心而聞名。","be loyal to 人 表示「對某人忠誠」；介係詞 for 後面接動名詞 being。"],
 ["She has stayed loyal to the volleyball team for three years.","三年來她一直對排球隊很忠誠。","stay + 形容詞 表示「保持……」；has stayed 是現在完成式。"]],
 "","","🐶|忠誠"],
["considerate","adj.","體貼的",[
 ["It is considerate of you to keep your voice down in the library.","你在圖書館把音量放低，真是體貼。","It is + 形容詞 + of 人 + to V：形容「人的個性」時用 of，不用 for。"],
 ["My considerate deskmate let me borrow her notes.","我體貼的同桌借我看她的筆記。","let + 受詞 + 原形動詞：let me borrow。"],
 ["Being considerate makes people want to be your friend.","體貼別人會讓大家想和你做朋友。","make + 受詞 + 原形動詞：makes people want。"]],
 "consider=考慮|-ate=形容詞字尾","會替別人考慮的 → 體貼的","💞|體貼"],
["membership","n.","會員資格；會籍",[
 ["The club membership costs 300 dollars a year.","社團的會費一年三百元。","cost + 金額 表示「花費……錢」，主詞是物品或服務。"],
 ["Remember to renew your membership before it ends.","記得在會員到期前續約。","remember + to V 表示「記得要去做（還沒做）」。"],
 ["Membership in the club has been growing since the new teacher came.","從新老師來了以後，社團的人數一直在增加。","has been growing 是現在完成進行式，表示持續到現在的變化。"]],
 "member=成員|-ship=身分","成員的身分 → 會員資格","🎫|會員"],
["invitation","n.","邀請；邀請函",[
 ["Thank you for your invitation to the party.","謝謝你邀請我參加派對。","invitation to + 活動 表示「……的邀請」。"],
 ["Oh no, I forgot to reply to her invitation!","糟了，我忘了回覆她的邀請！","forget + to V 表示「忘了要去做」，所以根本還沒回覆。"],
 ["The club sent invitations to all the freshmen.","社團發了邀請函給所有新生。","send 物 to 人 表示「把某物寄給某人」。"]],
 "invit=邀請|-ation=名詞字尾","invite（邀請）的名詞","💌|邀請"],
/* ---------- 學習方法與習慣 ---------- */
["concentrate","v.","專心；集中",[
 ["I can't concentrate when my phone keeps buzzing.","手機一直震動的時候，我沒辦法專心。","keep + V-ing 表示「一直、持續做某事」。"],
 ["Turn off the TV so that you can concentrate on your homework.","把電視關掉，你才能專心寫作業。","concentrate on + 名詞 表示「專心於……」；so that 表示目的。"],
 ["I have been trying to concentrate for an hour, but I'm too sleepy.","我已經努力想專心一個小時了，但我太睏了。","have been trying 搭配 for + 一段時間，強調一直持續到現在。"]],
 "con-=一起|centr=中心|-ate=使","使集中到中心 → 專心","🎯|專心"],
["focus","v./n.","專注；焦點",[
 ["Focus on one task at a time.","一次專心做一件事。","focus on + 名詞 表示「專注在……」；at a time 表示「一次」。"],
 ["Stop checking your phone and focus on your studies.","別再看手機了，專心讀書。","stop + V-ing 表示「停止正在做的事」。"],
 ["The focus of today's lesson is the present perfect continuous.","今天這堂課的重點是現在完成進行式。","focus 當名詞表示「焦點、重點」。"]],
 "","","🔦|專注"],
["method","n.","方法",[
 ["What is the best method for learning new words?","學新單字最好的方法是什麼？","method for + V-ing 表示「做某事的方法」。"],
 ["Mr. Lin had us try different learning methods.","林老師讓我們嘗試不同的學習方法。","have + 人 + 原形動詞：had us try。"],
 ["I have been using this method for a month, and it really works!","我用這個方法一個月了，真的有效！","have been using 搭配 for a month，表示持續到現在。"]],
 "","","🛠️|方法"],
["strategy","n.","策略",[
 ["Making a study plan is a good strategy.","擬定讀書計畫是個好策略。","動名詞片語 Making a study plan 當主詞，視為單數。"],
 ["If one strategy doesn't work, try using another one.","如果一個策略沒效，試試看用別的。","try + V-ing 表示「試試看某個方法」。"],
 ["Our coach made us change our strategy in the second half.","教練要我們在下半場改變策略。","make + 人 + 原形動詞：made us change。"]],
 "","","♟️|策略"],
["memorize","v.","背；記住",[
 ["I memorize ten new words every day.","我每天背十個新單字。","現在簡單式表示習慣；every day 是「每天」，兩個字分開寫。"],
 ["Instead of just memorizing, try to understand the meaning.","與其死背，不如試著理解意思。","instead of 的 of 是介係詞，後面接 V-ing；try to V 表示努力去做。"],
 ["The teacher had us memorize the poem by Friday.","老師要我們在星期五前背好這首詩。","have + 人 + 原形動詞；by + 時間 表示「在……之前」。"]],
 "memor=記憶|-ize=使……","使進入記憶 → 背下來","🧠|背誦"],
["highlight","v./n.","用螢光筆標出；最精彩的部分",[
 ["Highlight the key words in each paragraph.","把每一段的關鍵字用螢光筆畫起來。","祈使句用原形動詞開頭。"],
 ["The highlight of the school trip was the night market.","校外教學最精彩的部分是夜市。","highlight 當名詞表示「最精彩的部分」。"],
 ["Stop highlighting every sentence—only mark the important ones.","別每一句都畫重點，只標重要的就好。","stop + V-ing 表示「停止正在做的事」；ones 代替前面的 sentences。"]],
 "high=高|light=光","打上亮光，讓它突出 → 標出重點","🖍️|畫重點"],
["outline","n./v.","大綱；概述",[
 ["Write an outline before you start your essay.","開始寫作文之前先寫大綱。","outline 開頭是母音，所以用 an。"],
 ["The teacher had us outline the chapter in five sentences.","老師要我們用五句話寫出這一章的大綱。","have + 人 + 原形動詞；outline 也可以當動詞。"],
 ["I remember making an outline, but I can't find it now.","我記得我寫過大綱，但現在找不到了。","remember + V-ing 表示「記得做過」，大綱已經寫好了。"]],
 "out=外面|line=線","外圍的線條 → 輪廓、大綱","🗒️|大綱"],
["effective","adj.","有效的",[
 ["Reviewing right after class is an effective way to remember things.","下課後馬上複習是記住東西的有效方法。","動名詞片語當主詞；a way to V 表示「做某事的方法」。"],
 ["Getting enough sleep makes studying more effective.","睡眠充足會讓讀書更有效率。","make + 受詞 + 形容詞；studying 是動名詞當受詞。"],
 ["I have tried many methods, but this one is the most effective.","我試過很多方法，但這個最有效。","have tried 是現在完成式表示經驗；多音節形容詞的最高級用 the most。"]],
 "effect=效果|-ive=形容詞字尾","有效果的","👍|有效"],
["distract","v.","使分心",[
 ["Loud music distracts me when I study.","讀書時大聲的音樂會讓我分心。","主詞 Loud music 是不可數名詞，視為單數，所以用 distracts。"],
 ["Don't let your phone distract you from your work.","別讓手機害你無法專心工作。","let + 受詞 + 原形動詞；distract 人 from 事 表示「使某人從某事分心」。"],
 ["I felt someone tapping my shoulder, and it distracted me.","我感覺到有人在拍我的肩膀，害我分心了。","feel + 受詞 + V-ing：感覺到正在進行的動作。"]],
 "dis-=分開|tract=拉","把注意力拉開 → 使分心","📱|分心"],
["discipline","n.","紀律；自律",[
 ["Learning a language takes discipline.","學一種語言需要自律。","take 在這裡表示「需要」；動名詞片語當主詞，用單數動詞 takes。"],
 ["Self-discipline helps you keep studying even when you're tired.","自律能幫助你即使累了也繼續讀書。","help + 受詞 + 原形動詞；keep + V-ing 表示「持續做」。"],
 ["The coach makes the team follow strict discipline.","教練要求球隊遵守嚴格的紀律。","make + 受詞 + 原形動詞：makes the team follow。"]],
 "","","📏|紀律"],
["consistent","adj.","一致的；持續穩定的",[
 ["Being consistent is more important than studying for many hours at once.","持之以恆比一次讀很多個小時更重要。","動名詞 Being consistent 當主詞；more important than 是比較級。"],
 ["She has been making consistent progress in English.","她的英文一直穩定進步。","has been making 是現在完成進行式；make progress 表示「進步」。"],
 ["Your answer is not consistent with the facts.","你的答案和事實不一致。","be consistent with + 名詞 表示「和……一致」。"]],
 "con-=一起|sist=站|-ent=形容詞字尾","一直站在一起、不改變 → 一致的","📆|持之以恆"],
["vocabulary","n.","字彙",[
 ["Reading English novels can enlarge your vocabulary.","讀英文小說可以擴充你的字彙量。","vocabulary 指一個人會的「所有字彙」，通常不可數，不說 vocabularies。"],
 ["I have been building my vocabulary with flash cards.","我一直用單字卡累積字彙。","have been building 是現在完成進行式；with 表示「用……（工具）」。"],
 ["Our teacher makes us review the vocabulary every morning.","老師每天早上都要我們複習單字。","make + 人 + 原形動詞：makes us review。"]],
 "vocabul=字詞（voc=聲音）|-ary=集合","一堆說出來的字 → 字彙","🔤|字彙"],
["grammar","n.","文法",[
 ["Grammar is not as hard as it looks.","文法沒有看起來那麼難。","not as + 形容詞 + as 表示「沒有……那麼……」。"],
 ["I noticed my grammar improving after I started keeping a diary.","開始寫日記後，我發現自己的文法在進步。","notice 也是感官動詞：notice + 受詞 + V-ing；keep a diary 表示「寫日記」。"],
 ["The grammar of this sentence is correct.","這個句子的文法是正確的。","主詞是 The grammar（單數），所以用 is。"]],
 "","","📐|文法"],
["dictionary","n.","字典",[
 ["Look up the word in the dictionary.","在字典裡查這個字。","look up 表示「查（字典）」，受詞是名詞時可以放在 up 後面。"],
 ["I forgot to bring my dictionary today.","我今天忘了帶字典。","forget + to V 表示「忘了要做」，所以字典沒帶來。"],
 ["Online dictionaries let you hear how a word is pronounced.","線上字典讓你可以聽到一個字怎麼唸。","let + 受詞 + 原形動詞；how a word is pronounced 是被動語態的名詞子句。"]],
 "dict=說|-ion=名詞字尾|-ary=集合","收集說出來的字 → 字典","📕|字典"],
["academic","adj.","學業的；學術的",[
 ["Her academic performance has improved a lot.","她的學業表現進步很多。","has improved 是現在完成式，強調改善的結果。"],
 ["Balancing academic work and club activities is not easy.","兼顧課業和社團活動並不容易。","動名詞片語 Balancing ... 當主詞，視為單數。"],
 ["The school had a professor give an academic talk.","學校請了一位教授來做學術演講。","have + 人 + 原形動詞：had a professor give。"]],
 "academ=學院|-ic=……的","學院的 → 學術的；學業的","📚|學業"],
["physics","n.","物理",[
 ["Physics is my favorite subject.","物理是我最喜歡的科目。","physics 字尾有 s，但它是學科名稱，視為單數，動詞用 is。"],
 ["I have been studying physics for two hours.","我已經讀物理讀了兩個小時。","have been studying 搭配 for two hours，強調一直讀到現在。"],
 ["Our physics teacher let us watch a ball roll down a slope.","物理老師讓我們看一顆球從斜坡上滾下來。","let + 受詞 + 原形動詞；watch + 受詞 + 原形動詞（看完整個過程）。"]],
 "physic=自然|-s=學科","研究自然現象的學科 → 物理","⚛️|物理"],
["chemistry","n.","化學；（人與人的）默契",[
 ["We did an experiment in chemistry class today.","我們今天在化學課做了實驗。","do an experiment 表示「做實驗」。"],
 ["I watched the liquid change color during the chemistry experiment.","化學實驗時，我看著液體變了顏色。","watch + 受詞 + 原形動詞：看到變色的整個過程。"],
 ["There is great chemistry between the two singers.","那兩位歌手之間很有默契。","chemistry 也可以指人與人之間的「火花、默契」。"]],
 "chem=煉金|-istry=學科","研究物質變化的學科 → 化學","🧪|化學"],
["biology","n.","生物學",[
 ["In biology class, we learned how plants grow.","生物課上，我們學了植物怎麼生長。","how plants grow 是名詞子句，當 learned 的受詞，語序是「主詞 + 動詞」。"],
 ["The biology teacher had us observe plant cells under a microscope.","生物老師要我們用顯微鏡觀察植物細胞。","have + 人 + 原形動詞：had us observe。"],
 ["Biology is the study of living things.","生物學是研究生物的學問。","the study of + 名詞 表示「研究……的學問」。"]],
 "bio=生命|-logy=學問","研究生命的學問 → 生物學","🧬|生物"],
["literature","n.","文學",[
 ["I enjoy reading English literature.","我喜歡讀英文文學作品。","enjoy 後面接 V-ing，不接 to V。"],
 ["Literature helps us understand people from different times.","文學幫助我們了解不同時代的人。","help + 受詞 + 原形動詞：helps us understand。"],
 ["She has been reading a lot of Japanese literature recently.","她最近一直在讀很多日本文學。","has been reading 搭配 recently，表示最近一直在做。"]],
 "liter=文字|-ature=名詞字尾","用文字寫成的作品 → 文學","📖|文學"],
["lecture","n./v.","講課；演講；訓話",[
 ["The professor gave a lecture on climate change.","教授做了一場關於氣候變遷的演講。","give a lecture on + 主題 表示「做關於……的演講」。"],
 ["My mom lectured me for staying up late.","我媽因為我熬夜而唸了我一頓。","lecture 人 for V-ing 表示「因為某事訓某人」。"],
 ["I fell asleep during the lecture, and now I regret not taking notes.","我上課時睡著了，現在很後悔沒有做筆記。","regret not + V-ing 表示「後悔沒做某事」，not 放在 V-ing 前面。"]],
 "lect=讀|-ure=名詞字尾","唸給大家聽 → 講課","👩‍🏫|講課"],
["quiz","n.","小考；測驗",[
 ["We have a vocabulary quiz every Monday.","我們每週一都有單字小考。","every Monday 表示「每週一」，前面不加 on。"],
 ["I stopped playing games to study for the quiz.","我停止打電動，去準備小考。","stop + V-ing 是「停止正在做的事」；後面的 to study 表示目的。"],
 ["The teacher made us take the quiz again.","老師要我們重考一次小考。","make + 人 + 原形動詞；take a quiz 表示「參加小考」。"]],
 "","","✏️|小考"],
["tutor","n./v.","家教；個別指導",[
 ["My tutor has been helping me with math since last year.","我的家教從去年開始一直在教我數學。","help 人 with 事 表示「幫某人做某事」；has been helping 是完成進行式。"],
 ["My parents got a college student to tutor me in English.","我爸媽請了一位大學生當我的英文家教。","get + 人 + to V：got a college student to tutor。"],
 ["Having a tutor helps, but you still need to study on your own.","有家教有幫助，但你還是要自己讀書。","動名詞片語 Having a tutor 當主詞；on your own 表示「靠自己」。"]],
 "","","🧑‍🏫|家教"],
["laboratory","n.","實驗室",[
 ["Students are not allowed to eat in the laboratory.","學生不准在實驗室裡吃東西。","be allowed to V 表示「被允許做某事」；let 沒有被動，要用這個句型。"],
 ["We watched the teacher mix the chemicals in the laboratory.","我們在實驗室看老師混合化學藥品。","watch + 受詞 + 原形動詞：watched the teacher mix。"],
 ["Lab is short for laboratory.","lab 是 laboratory 的簡稱。","be short for 表示「是……的簡稱」。"]],
 "labor=工作|-atory=場所","做實驗工作的場所 → 實驗室","@s111_lab"],
["knowledge","n.","知識",[
 ["Reading is a great way to gain knowledge.","閱讀是獲得知識的好方法。","knowledge 是不可數名詞，不加 s；gain knowledge 表示「獲得知識」。"],
 ["Knowledge is power.","知識就是力量。","這是一句有名的格言，knowledge 不可數，動詞用 is。"],
 ["She has a good knowledge of Taiwanese history.","她對台灣歷史很了解。","have a good knowledge of 表示「對……很了解」，這是 knowledge 少數加 a 的用法。"]],
 "know=知道|-ledge=名詞字尾","知道的東西 → 知識","💡|知識"],
["essay","n.","短文；作文",[
 ["We have to write a 300-word essay about our summer vacation.","我們要寫一篇三百字、關於暑假的作文。","300-word 用連字號當形容詞時，word 不加 s。"],
 ["The teacher had me rewrite my essay.","老師要我重寫作文。","have + 人 + 原形動詞：had me rewrite。"],
 ["I remember writing an essay about my grandma in junior high.","我記得國中時寫過一篇關於奶奶的作文。","remember + V-ing 表示「記得過去做過的事」。"]],
 "","","✍️|作文"],
/* ---------- 感官動詞、使役動詞常搭配的字 ---------- */
["overhear","v.","無意中聽到",[
 ["I overheard my parents talking about my birthday gift.","我無意中聽到爸媽在討論我的生日禮物。","overhear + 受詞 + V-ing：聽到正在進行的談話。"],
 ["She overheard the teacher say that we would have a test.","她無意中聽到老師說我們要考試。","overhear + 受詞 + 原形動詞：聽到完整的一句話。"],
 ["Be careful—someone might overhear us.","小心，可能有人會聽到我們說話。","might + 原形動詞 表示「可能」。overhear 的過去式是 overheard。"]],
 "over-=越過|hear=聽","聲音越過牆被聽到 → 無意中聽到","@s111_overhear"],
["witness","n./v.","目擊者；目擊",[
 ["Did anyone witness the accident?","有人目擊這場意外嗎？","witness 當動詞，後面直接接受詞。"],
 ["The police asked the witness what she had seen.","警察問那位目擊者她看到了什麼。","what she had seen 是名詞子句；had seen 是過去完成式，比 asked 更早發生。"],
 ["Many people witnessed the sunrise from the top of the mountain.","許多人在山頂上見證了日出。","witness 也可以用在「親眼看見」重要的時刻。"]],
 "wit=知道|-ness=名詞字尾","知道事情經過的人 → 目擊者","👀|目擊"],
["observe","v.","觀察；遵守",[
 ["Scientists observe animals in the wild.","科學家在野外觀察動物。","in the wild 表示「在野外」。"],
 ["We observed the moon rise over the mountain.","我們觀察月亮從山後升起。","observe 也能當感官動詞：observe + 受詞 + 原形動詞（看完整個過程）。"],
 ["Everyone must observe the school rules.","每個人都必須遵守校規。","observe 也有「遵守」的意思，等於 follow。"]],
 "ob-=朝向|serve=看守","朝著目標一直看守 → 觀察","🔭|觀察"],
["glance","v./n.","瞥一眼",[
 ["She glanced at the clock and ran to class.","她瞄了一眼時鐘就跑去上課。","glance at + 名詞 表示「瞥一眼……」。"],
 ["At a glance, I knew the answer was wrong.","我一眼就看出答案是錯的。","at a glance 表示「一眼就……」。"],
 ["I glanced up and saw a bird flying past the window.","我抬頭一看，看到一隻鳥正從窗外飛過。","see + 受詞 + V-ing：看到「正在」飛過的畫面。"]],
 "","","👁️|瞥一眼"],
["persuade","v.","說服",[
 ["I persuaded my mom to let me join the band.","我說服媽媽讓我參加樂團。","persuade + 人 + to V；let + 人 + 原形動詞。注意兩個動詞後面的形式不同。"],
 ["Nobody could persuade him to change his mind.","沒有人能說服他改變心意。","change one's mind 表示「改變心意」。"],
 ["She was persuaded to run for class leader.","她被說服去競選班長。","被動語態 be persuaded to V；run for 表示「競選」。"]],
 "per-=徹底|suade=勸","徹底地勸 → 說服","🗣️|說服"],
/* ---------- 字首 re- / pre- / pro- ---------- */
["repeat","v.","重複；重說",[
 ["Could you repeat the question, please?","可以請你再說一次問題嗎？","Could you ...? 是客氣的請求。"],
 ["The teacher made us repeat the sentence three times.","老師要我們把這個句子唸三遍。","make + 人 + 原形動詞：made us repeat。"],
 ["Stop repeating the same mistakes!","別再犯同樣的錯了！","stop + V-ing 表示「停止正在做的事」。"]],
 "re-=再|peat=追求","再去做一次 → 重複","🔁|重複"],
["reply","v./n.","回覆",[
 ["Please reply to my message as soon as possible.","請盡快回覆我的訊息。","reply 是不及物動詞，後面要加 to 再接受詞。"],
 ["I remember replying to his email, but he says he didn't get it.","我記得我回了他的信，但他說沒收到。","remember + V-ing 表示「記得做過」。"],
 ["I have been waiting for her reply all day.","我整天都在等她的回覆。","have been waiting 搭配 all day，強調一直等到現在。"]],
 "re-=回|ply=折","把話折回去 → 回覆","↩️|回覆"],
["refresh","v.","使恢復精神；重新整理",[
 ["A short walk can refresh your mind.","散步一下可以讓頭腦恢復清醒。","can + 原形動詞。"],
 ["Taking a cold shower made me feel refreshed.","沖個冷水澡讓我覺得神清氣爽。","make + 人 + 原形動詞 feel；refreshed 是「感到清爽的」。"],
 ["Refresh the page if it doesn't load.","如果網頁沒有載入，就重新整理。","refresh 也可以指電腦上的「重新整理」。"]],
 "re-=再|fresh=新鮮的","再次變得新鮮 → 恢復精神；重新整理","🔄|重新整理"],
["recover","v.","恢復；康復",[
 ["It took him two weeks to recover from the flu.","他花了兩個星期才從流感中康復。","It takes 人 + 時間 + to V 表示「某人花多少時間做某事」；recover from 表示「從……中恢復」。"],
 ["She has been recovering well since the operation.","手術後她一直恢復得很好。","has been recovering 搭配 since，表示持續到現在。"],
 ["I finally recovered my lost files.","我終於救回了遺失的檔案。","recover 也可以表示「找回、取回」。"]],
 "re-=回|cover=拿取","拿回來 → 恢復","🩹|康復"],
["prefer","v.","比較喜歡",[
 ["I prefer studying in the library to studying at home.","比起在家讀書，我比較喜歡在圖書館讀書。","prefer A to B：A 和 B 要用相同形式，這裡都是 V-ing；to 是介係詞。"],
 ["Do you prefer tea or coffee?","你比較喜歡茶還是咖啡？","prefer A or B 用來問選擇。prefer 的過去式是 preferred，r 要重複。"],
 ["My parents prefer me to stay home on school nights.","爸媽比較希望我在上學日的晚上待在家。","prefer + 人 + to V 表示「比較希望某人做某事」。"]],
 "pre-=在前|fer=搬","把喜歡的搬到前面 → 比較喜歡","❤️|比較喜歡"],
["previous","adj.","先前的",[
 ["My previous school was in Kaohsiung.","我以前的學校在高雄。","previous 放在名詞前面，表示「之前的」。"],
 ["Do you have any previous experience in a band?","你之前有樂團的經驗嗎？","any 用在疑問句；experience 表示「經驗」時不可數。"],
 ["I had met him the previous day, so he was not a stranger to me.","我前一天就見過他了，所以他對我來說不是陌生人。","the previous day 表示「（過去某天的）前一天」；had met 是過去完成式，比 was 更早發生。"]],
 "pre-=在前|vi=路|-ous=形容詞字尾","走在前面路上的 → 先前的","⏪|先前的"],
["preserve","v.","保存；保護",[
 ["Salt is used to preserve food.","鹽被用來保存食物。","be used to V 表示「被用來做某事」，和 be used to V-ing（習慣於）不同。"],
 ["We should preserve old buildings for future generations.","我們應該為後代保存老建築。","should + 原形動詞；for future generations 表示「為了後代」。"],
 ["The town has been working hard to preserve its traditions.","這個小鎮一直很努力保存自己的傳統。","has been working 是現在完成進行式；to preserve 表示目的。"]],
 "pre-=事先|serve=保存","事先保存起來 → 保存","🫙|保存"],
["pronounce","v.","發音",[
 ["How do you pronounce this word?","這個字怎麼唸？","How do you + 原形動詞 用來問方法。"],
 ["I heard the teacher pronounce my name incorrectly.","我聽到老師把我的名字唸錯了。","hear + 受詞 + 原形動詞：聽到整個唸的過程。"],
 ["The \"k\" in \"knee\" is not pronounced.","knee 裡的 k 不發音。","被動語態 is not pronounced；名詞是 pronunciation，注意拼法少了 o。"]],
 "pro-=向前|nounce=宣告","向前大聲說出 → 發音","👄|發音"],
["process","n./v.","過程；處理",[
 ["Learning a language is a long process.","學一種語言是很長的過程。","動名詞片語 Learning a language 當主詞，視為單數。"],
 ["The computer has been processing the data for an hour.","電腦處理資料已經處理一個小時了。","has been processing 搭配 for an hour，強調一直進行到現在。"],
 ["In the process of making friends, you learn more about yourself.","在交朋友的過程中，你會更了解自己。","in the process of + V-ing 表示「在……的過程中」。"]],
 "pro-=向前|cess=走","一步步向前走 → 過程","⚙️|過程"],
["profile","n.","簡介；個人檔案",[
 ["Update your profile picture to make a good first impression.","更新你的大頭照，留下好的第一印象。","profile picture 是社群網站的「大頭照」。"],
 ["The school newspaper wrote a profile of our new principal.","校刊寫了一篇新校長的人物簡介。","a profile of 人 表示「某人的簡介」。"],
 ["I had my friend take a new photo for my profile.","我請朋友幫我拍一張新照片放在個人檔案上。","have + 人 + 原形動詞：had my friend take。"]],
 "pro-=向前|file=線條","向前描出的線條 → 側面輪廓 → 簡介","👤|個人簡介"],
/* ---------- 字首 en- / em- ---------- */
["enrich","v.","使豐富",[
 ["Joining clubs can enrich your high school life.","參加社團可以讓你的高中生活更豐富。","動名詞片語 Joining clubs 當主詞。"],
 ["Traveling enriches our knowledge of the world.","旅行增廣我們對世界的見聞。","動名詞 Traveling 當主詞，視為單數，所以用 enriches。"],
 ["Our teacher had us read short novels to enrich our vocabulary.","老師要我們讀短篇小說來增加字彙量。","have + 人 + 原形動詞；to enrich 表示目的。"]],
 "en-=使|rich=豐富的","使變豐富","🌈|豐富"],
["enlarge","v.","放大；擴大",[
 ["Can you enlarge this photo for me?","你可以幫我把這張照片放大嗎？","enlarge 後面直接接受詞。"],
 ["I had the photo enlarged for the club poster.","我把這張照片拿去放大，做社團海報。","have + 物 + p.p.：照片是「被放大」的，表示請別人處理。"],
 ["The school plans to enlarge the library next year.","學校計畫明年擴建圖書館。","plan to V 表示「計畫做某事」。"]],
 "en-=使|large=大的","使變大 → 放大","🔎|放大"],
["ensure","v.","確保",[
 ["Please ensure that all the windows are closed before you leave.","離開前請確定所有窗戶都關好了。","ensure + that 子句 表示「確保……」。"],
 ["Getting enough sleep ensures that you can focus in class.","睡眠充足能確保你上課時專心。","動名詞片語當主詞，用單數動詞 ensures。"],
 ["Remember to check your answers to ensure you don't make careless mistakes.","記得檢查答案，確保自己沒有粗心的錯誤。","remember + to V（要記得去做）；ensure 後面的 that 可以省略。"]],
 "en-=使|sure=確定的","使變確定 → 確保","✔️|確保"],
["endanger","v.","危害；使陷入危險",[
 ["Using your phone while riding a bike can endanger your life.","騎腳踏車時用手機會危及你的生命。","while + V-ing 表示「在……的時候」。"],
 ["Pollution has endangered many sea animals.","污染已經危害到許多海洋動物。","has endangered 是現在完成式，強調造成的結果。"],
 ["Many endangered animals live in this forest.","許多瀕臨絕種的動物住在這片森林裡。","endangered 是過去分詞當形容詞，表示「瀕臨絕種的」。"]],
 "en-=使陷入|danger=危險","使陷入危險 → 危害","⚠️|危害"],
["empower","v.","使有能力；授權",[
 ["Education empowers people to change their lives.","教育讓人們有能力改變自己的人生。","empower + 人 + to V 表示「使某人有能力做某事」。"],
 ["The teacher empowered the students to plan the class trip themselves.","老師授權學生自己規劃班級旅行。","themselves 是反身代名詞，強調「他們自己」。"],
 ["I felt empowered after giving my first speech.","第一次演講完後，我覺得自己更有力量了。","feel + 形容詞；after + V-ing 表示「在……之後」。"]],
 "em-=使|power=力量","使有力量 → 使有能力","⚡|賦予力量"],
["enroll","v.","註冊；登記入學",[
 ["She enrolled in an English speaking class.","她報名了一堂英文口說課。","enroll in + 課程 表示「報名參加……」。"],
 ["More than 400 freshmen have enrolled at our school this year.","今年有四百多名新生進入我們學校就讀。","enroll at + 學校；have enrolled 是現在完成式。"],
 ["My parents got me to enroll in a summer camp.","爸媽說服我報名了夏令營。","get + 人 + to V：got me to enroll。"]],
 "en-=放入|roll=名冊","把名字放進名冊 → 註冊","🖊️|註冊"],
["embrace","v.","擁抱；欣然接受",[
 ["The two friends embraced after being apart for a long time.","兩個好朋友分開很久之後擁抱在一起。","after + V-ing；be apart 表示「分開」。"],
 ["Embrace new challenges in high school!","在高中勇敢接受新挑戰吧！","embrace 也可以表示「欣然接受」想法或機會。"],
 ["I saw my mom embrace my sister at the airport.","我看到媽媽在機場擁抱姊姊。","see + 受詞 + 原形動詞：看到擁抱的整個動作。"]],
 "em-=放進|brace=手臂","放進手臂裡 → 擁抱","@s111_embrace"],
/* ---------- 字根 act / ag ---------- */
["action","n.","行動；動作",[
 ["Actions speak louder than words.","行動勝於空談。","這是常見的諺語；louder than 是比較級。"],
 ["It's time to take action and start studying.","該採取行動開始讀書了。","It's time to V 表示「該做某事了」；take action 表示「採取行動」。"],
 ["The dance teacher made us practice each action slowly.","舞蹈老師要我們把每個動作慢慢練。","make + 人 + 原形動詞：made us practice。"]],
 "act=做|-ion=名詞字尾","做出來的事 → 行動","🏃|行動"],
["actual","adj.","實際的；真正的",[
 ["The actual test was easier than the practice test.","正式考試比模擬考簡單。","actual 放在名詞前面，表示「實際的、真正的」。"],
 ["Actually, I have been learning Japanese for two years.","其實我已經學日文兩年了。","actually 是副詞「其實」；have been learning 搭配 for two years。"],
 ["What was the actual reason you were late?","你遲到的真正原因是什麼？","the reason 後面省略了 why。"]],
 "act=做|-ual=形容詞字尾","真正做出來的 → 實際的","📌|實際"],
["react","v.","反應",[
 ["How did your parents react to your test results?","你爸媽對你的考試成績有什麼反應？","react to + 名詞 表示「對……做出反應」。"],
 ["I watched him react calmly to the bad news.","我看著他冷靜地面對這個壞消息。","watch + 受詞 + 原形動詞；calmly 是副詞，修飾 react。"],
 ["Stop reacting so quickly—think first.","別那麼快就有反應，先想一想。","stop + V-ing 表示「停止正在做的事」。名詞是 reaction。"]],
 "re-=回|act=做","回過頭來做出動作 → 反應","😲|反應"],
["exact","adj.","精確的",[
 ["What's the exact time now?","現在的確切時間是幾點？","exact 放在名詞 time 前面修飾它。"],
 ["To be exact, we have been waiting for 45 minutes.","精確地說，我們已經等了四十五分鐘。","to be exact 表示「精確地說」；have been waiting 是現在完成進行式。"],
 ["I can't remember the exact words she said.","我記不得她說的確切字句。","the exact words 後面省略了關係代名詞 that。"]],
 "ex-=向外|act=做（完成）","完完整整做出來 → 精確的","⏱️|精確"],
["agent","n.","代理人；經紀人",[
 ["The actor's agent arranged the interview.","那位演員的經紀人安排了這次訪問。","actor's 是所有格，表示「演員的」。"],
 ["A travel agent helped us plan our trip.","一位旅行社的專員幫我們規劃旅行。","help + 人 + 原形動詞：helped us plan。"],
 ["The agent had the model take photos all day.","經紀人讓模特兒拍了一整天的照片。","have + 人 + 原形動詞：had the model take。"]],
 "ag=做|-ent=人","替別人做事的人 → 代理人","🕴️|代理人"],
["agency","n.","代辦處；機構",[
 ["My cousin works at an advertising agency.","我表哥在一家廣告公司上班。","agency 前面加上性質，表示某種代辦公司或機構。"],
 ["We booked the trip through an agency.","我們透過一家旅行社訂了這趟旅行。","through 表示「透過」。"],
 ["The agency got a famous singer to visit our school.","那家經紀公司請到一位知名歌手來我們學校。","get + 人 + to V：got a famous singer to visit。"]],
 "ag=做|-ency=名詞字尾","替人做事的機構 → 代辦處","🏢|機構"],
/* ---------- 字根 form ---------- */
["formal","adj.","正式的",[
 ["You need to wear formal clothes to the ceremony.","你需要穿正式的服裝參加典禮。","need to V 表示「需要做某事」。"],
 ["Formal English is used in essays and speeches.","作文和演講用的是正式英文。","is used 是被動語態。"],
 ["Don't forget to use formal language in your email to the principal.","寫信給校長時別忘了用正式的語言。","forget + to V 表示「忘了要去做」。"]],
 "form=形式|-al=形容詞字尾","合乎形式的 → 正式的","👔|正式"],
["format","n.","格式",[
 ["Please follow the format when you write your report.","寫報告時請照這個格式。","follow 表示「遵照」。"],
 ["I had my report printed in the right format.","我請人用正確的格式把報告印出來。","have + 物 + p.p.：報告是「被印」的。"],
 ["The file is in the wrong format, so I can't open it.","這個檔案格式錯了，所以我打不開。","in the wrong format 表示「格式錯誤」。"]],
 "form=形狀|-at=名詞字尾","固定的形狀 → 格式","📄|格式"],
["reform","n./v.","改革",[
 ["The education reform changed the way students take exams.","教育改革改變了學生考試的方式。","the way 後面直接接子句，不加 how。"],
 ["The school has been working to reform its dress code.","學校一直在努力改革服裝規定。","has been working 是現在完成進行式。"],
 ["The new principal wants to reform the school's old rules.","新校長想要改革學校的舊規定。","want to V 表示「想要做某事」。"]],
 "re-=重新|form=形狀","重新塑造形狀 → 改革","🔧|改革"],
["formula","n.","公式；配方",[
 ["Memorize this math formula before the test.","考試前把這個數學公式背起來。","祈使句用原形動詞開頭。"],
 ["There is no magic formula for success.","成功沒有神奇的公式。","formula for + 名詞 表示「……的祕訣、公式」。"],
 ["I tried using the new formula, and it worked.","我試著用新公式，結果真的可行。","try + V-ing 表示「試試看」某個方法。"]],
 "form=形狀|-ula=小","小小的固定形式 → 公式","➗|公式"]
];

/* 沒有字根可拆的字：記憶小撇步 */
Object.assign(MEMO, {
  mature:"mature 和 nature（自然）只差一個字母：順著自然慢慢長大，就會變得成熟。",
  cafeteria:"cafe（咖啡館）+ teria（場所）：自己拿餐點的餐廳就是 cafeteria，學校的學生餐廳也這樣叫。",
  rehearsal:"rehearsal 裡藏著 hear（聽）：re（再）+ hear：一遍又一遍再聽、再練，就是排練。動詞是 rehearse。",
  recruit:"recruit 唸起來像「瑞酷」：社團攤位大喊「我們社團超酷！」就是在招募新人。",
  peer:"peer 和 pair（一對）長得很像：和你同一國、地位差不多的人，就是同儕。peer pressure 是同儕壓力。",
  gossip:"gossip 拆成 go + sip（小口喝）：一邊喝飲料一邊走來走去聊別人的事，就是八卦。",
  rumor:"rumor 唸起來像「如磨」：消息被大家磨來磨去、越傳越走樣，就成了謠言。英式拼法是 rumour。",
  loyal:"loyal 和 royal（皇家的）只差一個字母：對皇室（royal）忠心耿耿，就是忠誠的（loyal）。",
  focus:"focus 原本是拉丁文的「火爐」：一家人都圍著火爐，它就是焦點；把注意力集中在一點，就是專注。",
  method:"method 的 meth 原本是「跟隨」，hod 是「道路」：跟著一條路走，就是方法。比 way 正式。",
  strategy:"strategy 原本是「將軍」的意思：將軍打仗前想好的計畫，就是策略。形容詞是 strategic。",
  discipline:"discipline 和 disciple（門徒）是一家人：門徒跟著老師嚴格學習，要守紀律。中間的 sc 只唸 s 的音。",
  grammar:"grammar 結尾是 -ar，不是 -er！記法：grammar 裡有兩個 a、兩個 m，像兩對好朋友。",
  quiz:"quiz 很短：小考就是短短的考試。複數是 quizzes，z 要多寫一個！",
  tutor:"tutor 和 tuition（學費）是一家人，都有「照顧、保護」的意思：一對一照顧你功課的人，就是家教。",
  essay:"essay 原本是「嘗試」的意思：把自己的想法試著寫下來，就是一篇短文。",
  glance:"glance 開頭是 gl，和 glass、glow 一樣跟「光」有關：眼光一閃，就是瞥一眼。"
});

const S1_1_1_GRAMMAR = [
{ id:"g1", title:"現在完成進行式",
  intro:"從過去某個時間開始、一直持續到現在（而且可能還會繼續）的動作，用現在完成進行式 have/has been + V-ing，強調「一直在做」的過程。",
  table:[["時態","句型","重點"],["現在完成式","have/has + p.p.","強調結果、經驗、次數"],["現在完成進行式","have/has been + V-ing","強調動作從過去一直持續到現在"],["否定句","have/has not been + V-ing","I haven't been sleeping well."],["疑問句","Have/Has + 主詞 + been + V-ing?","How long have you been waiting?"]],
  points:[
   "常和 for + 一段時間、since + 過去時間點、How long 一起用：I have been studying for two hours.",
   "現在完成式強調「結果、完成」，完成進行式強調「過程、持續」：I have written the essay.（寫完了）／I have been writing the essay.（一直在寫，可能還沒寫完）",
   "有次數或數量時用現在完成式，不用完成進行式：I have read this book three times.（✗ have been reading three times）",
   "狀態動詞（know、like、love、own、believe、have 表示擁有）不用進行式：I have known him for years.（✗ have been knowing）",
   "剛剛停止、但留下痕跡的動作也可以用：Your eyes are red. Have you been crying?",
   "has been 後面接 V-ing 才是完成進行式；後面接名詞或形容詞（My dog has been my best companion.）只是 be 動詞的現在完成式。"],
  ex:[
   ["I have been exercising every morning to build up my strength.","我每天早上一直在運動，增強體力。","從之前開始、持續到現在的習慣。"],
   ["Our school's debate team has been practicing every day this week.","我們學校的辯論隊這星期每天都在練習。","主詞是單數，用 has been practicing。"],
   ["The new recruits have been practicing hard since September.","新社員從九月起就一直在努力練習。","since + 過去時間點，表示從那時一直到現在。"],
   ["To be exact, we have been waiting for 45 minutes.","精確地說，我們已經等了四十五分鐘。","for + 一段時間，強調等待的過程還在持續。"],
   ["I have tried many methods, but this one is the most effective.","我試過很多方法，但這個最有效。","說的是「經驗」，用現在完成式，不用完成進行式。"]]},
{ id:"g2", title:"感官動詞 + 受詞 + V / V-ing / p.p.",
  intro:"see、hear、watch、feel 這些感官動詞後面接受詞，再接原形動詞、V-ing 或過去分詞，分別表示「看到全部過程」、「看到正在進行」、「受詞被……」。",
  table:[["句型","意思","例句"],["感官動詞 + O + V","看到／聽到動作的全部過程","I saw him cross the street."],["感官動詞 + O + V-ing","看到／聽到動作正在進行","I saw him crossing the street."],["感官動詞 + O + p.p.","受詞和動作是被動關係","I heard my name called."],["被動：be seen / heard + to V","原形動詞要變回 to V","He was seen to enter the room."]],
  points:[
   "常見的感官動詞：see、watch、look at、hear、listen to、feel、notice、observe、overhear。",
   "原形動詞強調「全部過程」，V-ing 強調「當下正在進行」：We watched the sun set.（看完日落）／I saw the sun setting.（看到太陽正在下山）",
   "感官動詞後面不能接 to V：✗ I saw him to cross the street.",
   "受詞和動作是被動關係時用 p.p.：I heard my name called.（名字是被叫的）",
   "學測陷阱：改成被動時，原形動詞要加 to：We saw him leave. → He was seen to leave.；V-ing 則保留：He was seen leaving.",
   "look at、listen to 的介係詞不能漏：Listen to the birds sing."],
  ex:[
   ["I overheard my parents talking about my birthday gift.","我無意中聽到爸媽在討論我的生日禮物。","overhear + O + V-ing：聽到正在進行的談話。"],
   ["We observed the moon rise over the mountain.","我們觀察月亮從山後升起。","observe + O + V：看完整個升起的過程。"],
   ["I felt someone tapping my shoulder, and it distracted me.","我感覺到有人在拍我的肩膀，害我分心了。","feel + O + V-ing：感覺到正在進行的動作。"],
   ["I heard the teacher pronounce my name incorrectly.","我聽到老師把我的名字唸錯了。","hear + O + V：聽到整個唸的過程。"],
   ["I noticed my grammar improving after I started keeping a diary.","開始寫日記後，我發現自己的文法在進步。","notice + O + V-ing：注意到正在進行的變化。"]]},
{ id:"g3", title:"使役動詞 make / let / have / get",
  intro:"使役動詞表示「叫、讓、使某人做某事」。make、let、have 後面接「人 + 原形動詞」，get 後面要接「人 + to V」；如果受詞是「物」而且是被處理的，就用「物 + p.p.」。",
  table:[["使役動詞","人 + 動詞","物 + p.p."],["make（強迫、使）","make + 人 + V","—"],["let（允許、讓）","let + 人 + V","—"],["have（叫、請）","have + 人 + V","have + 物 + p.p."],["get（說服、請）","get + 人 + to V","get + 物 + p.p."]],
  points:[
   "make 帶有「強迫」的語氣：Mom made me clean my room.",
   "let 表示「允許、讓」；let 沒有被動，要改用 be allowed to V：I was allowed to go out.",
   "get 最容易錯：get + 人 + to V：I got my brother to help me.（✗ got my brother help me）",
   "have/get + 物 + p.p. 表示「請別人把某物處理好」：I had my hair cut.（去剪頭髮，不是自己剪）",
   "學測陷阱：make 改成被動時，原形動詞要加 to：The students were made to clean the room.",
   "help + 人 + V 或 to V 都可以：She helped me (to) carry the box."],
  ex:[
   ["Our teacher made us write an introduction in English.","老師要我們用英文寫一篇自我介紹。","make + 人 + V：made us write。"],
   ["Don't let other people's expectations decide your future.","別讓別人的期望決定你的未來。","let + 受詞 + V：let ... decide。"],
   ["The teacher had me rewrite my essay.","老師要我重寫作文。","have + 人 + V：had me rewrite。"],
   ["My parents got a college student to tutor me in English.","我爸媽請了一位大學生當我的英文家教。","get + 人 + to V：got ... to tutor。"],
   ["I had the photo enlarged for the club poster.","我把這張照片拿去放大，做社團海報。","have + 物 + p.p.：照片是被放大的。"]]},
{ id:"g4", title:"remember / forget / stop / try / regret + to V 或 V-ing",
  intro:"有些動詞後面接 to V 或 V-ing 都可以，但意思完全不同。祕訣：to V 通常指「還沒做、接下來要去做」，V-ing 指「已經做過、正在做」。",
  table:[["動詞","+ to V","+ V-ing"],["remember","記得要去做（還沒做）","記得做過（已經做了）"],["forget","忘了要去做（沒做）","忘了做過（已經做了）"],["stop","停下來，去做另一件事","停止正在做的事"],["try","努力、設法去做","試試看做某事"],["regret","遺憾要（告知壞消息）","後悔做過某事"]],
  points:[
   "Remember to lock the door.（要記得去鎖）／I remember locking the door.（記得鎖過了）",
   "forget + V-ing 常和 never 連用：I'll never forget meeting you.（永遠忘不了和你相遇）",
   "stop to V 的 to V 表示「目的」：He stopped to rest.（停下來去休息）；He stopped talking.（不再說話）",
   "try to V 強調努力（不一定成功）；try V-ing 是「試試看這個方法」：Try drinking warm milk if you can't sleep.",
   "regret to V 常接 tell、inform、say，用在正式通知壞消息：We regret to inform you that the trip has been canceled.",
   "否定的 not 放在 to V 或 V-ing 前面：I regret not studying harder.（後悔沒有更用功）"],
  ex:[
   ["I remember giving my introduction in front of the whole class.","我記得在全班面前做過自我介紹。","remember + V-ing：記得已經做過。"],
   ["Remember to renew your membership before it ends.","記得在會員到期前續約。","remember + to V：要記得去做。"],
   ["Oh no, I forgot to reply to her invitation!","糟了，我忘了回覆她的邀請！","forget + to V：忘了去做，所以沒回。"],
   ["Stop gossiping and start studying!","別再聊八卦了，開始讀書吧！","stop + V-ing：停止正在做的事。"],
   ["I fell asleep during the lecture, and now I regret not taking notes.","我上課時睡著了，現在很後悔沒有做筆記。","regret not + V-ing：後悔沒做某事。"]]}
];

const S1_1_1_QUIZ = [
 ["I ___ for the bus for 30 minutes, and it still hasn't come.",["wait","am waiting","have been waiting","waited"],2,"for 30 minutes 加上「到現在還沒來」，表示從過去一直等到現在，用現在完成進行式。","g1"],
 ["How long ___ English?",["have you been learning","are you learning","do you learn","did you learn"],0,"How long 問「從以前到現在多久了」，用現在完成進行式 have you been learning。","g1"],
 ["I ___ this novel three times.",["have been reading","have read","am reading","had been reading"],1,"有次數（three times）時用現在完成式，不用完成進行式。","g1"],
 ["She ___ her cat since she was ten.",["has been having","has had","is having","have had"],1,"have 表示「擁有」是狀態動詞，不用進行式；主詞 She 是單數，用 has had。","g1"],
 ["Your eyes are red. ___?",["Have you cried","Did you cry","Have you been crying","Are you cry"],2,"剛剛停止、但留下痕跡（眼睛紅）的動作，用現在完成進行式 Have you been crying。","g1"],
 ["We ___ for the debate contest since last month.",["practice","are practicing","had practiced","have been practicing"],3,"since last month 表示從上個月一直到現在，用現在完成進行式。","g1"],
 ["I ___ my homework, so now I can go out and play.",["have been finishing","have finished","am finishing","finish"],1,"強調「已經寫完」的結果，所以現在可以出去玩，用現在完成式。","g1"],
 ["It ___ all morning, so the playground is wet.",["has been raining","is raining","rains","was rained"],0,"雨從早上一直下到現在，操場濕了，用現在完成進行式；rain 是不及物動詞，沒有被動。","g1"],
 ["I ___ Amy for five years. We met in junior high.",["have been knowing","am knowing","have known","know"],2,"know 是狀態動詞，不用進行式；for five years 表示持續到現在，用現在完成式 have known。","g1"],
 ["I saw a boy ___ the street just now.",["crossed","to cross","cross","crosses"],2,"感官動詞 see + 受詞 + 原形動詞（或 V-ing），不能接 to V 或過去式。","g2"],
 ["When I walked into the room, I heard someone ___ my name.",["calling","to call","called","calls"],0,"「有人正在叫」是主動、正在進行，用 V-ing。","g2"],
 ["Did you hear your name ___ at the meeting?",["call","calling","called","to call"],2,"名字是「被叫」的，受詞和動作是被動關係，用過去分詞 called。","g2"],
 ["The boy was seen ___ into the classroom through the window.",["climb","to climb","climbed","climbs"],1,"學測陷阱：感官動詞改成被動時，原形動詞要加 to：was seen to climb。","g2"],
 ["I felt the ground ___ during the earthquake.",["shake","to shake","shaken","shook"],0,"feel + 受詞 + 原形動詞，地面是主動搖晃，用原形 shake。","g2"],
 ["We sat on the beach and watched the sun ___.",["to set","set","sets","was set"],1,"watch + 受詞 + 原形動詞，表示看完日落的整個過程。","g2"],
 ["I noticed a stranger ___ outside our classroom.",["stood","to stand","standing","stands"],2,"notice + 受詞 + V-ing，表示注意到他「正站在」那裡。","g2"],
 ["Have you ever heard this song ___ in Japanese?",["sing","sang","to sing","sung"],3,"歌是「被唱」的，受詞和動作是被動關係，用過去分詞 sung。","g2"],
 ["Listen to the birds ___ in the trees!",["sing","to sing","sang","sung"],0,"listen to + 受詞 + 原形動詞（或 V-ing）；鳥是主動唱歌，不能用 to V 或 p.p.。","g2"],
 ["My mom made me ___ my room before dinner.",["clean","to clean","cleaning","cleaned"],0,"make + 人 + 原形動詞：made me clean。","g3"],
 ["The teacher let us ___ ten minutes early today.",["to leave","leaving","left","leave"],3,"let + 人 + 原形動詞：let us leave。","g3"],
 ["I got my brother ___ me with my science project.",["help","to help","helped","helps"],1,"get + 人 + to V，這是使役動詞裡最常考的陷阱。","g3"],
 ["I had my hair ___ yesterday.",["cut","to cut","cutting","cuts"],0,"have + 物 + p.p.：頭髮是「被剪」的，cut 的過去分詞還是 cut。","g3"],
 ["My bike is broken. I need to get it ___.",["fix","to fix","fixed","fixing"],2,"get + 物 + p.p.：腳踏車是「被修」的，用 fixed。","g3"],
 ["We were made ___ the classroom after school.",["clean","to clean","cleaning","cleaned"],1,"學測陷阱：make 改成被動時，原形動詞要加 to：were made to clean。","g3"],
 ["Mr. Chen had the students ___ an outline first.",["to write","writing","write","written"],2,"have + 人 + 原形動詞：學生自己寫，用 write。","g3"],
 ["My parents won't ___ me stay up late on school nights.",["allow","get","let","want"],2,"後面是 me + 原形動詞 stay，只有 let 可以；allow、get、want 後面都要接 to V。","g3"],
 ["His funny self-introduction ___ everyone laugh.",["made","asked","got","wanted"],0,"受詞後面是原形動詞 laugh，要用使役動詞 made；ask、get、want 後面要接 to V。","g3"],
 ["Remember ___ the lights when you leave the classroom.",["turning off","to turn off","turned off","turn off"],1,"燈還沒關，是「要記得去做」，用 remember + to V。","g4"],
 ["I remember ___ him at orientation, but I forgot his name.",["meeting","to meet","met","meet"],0,"已經見過面了，是「記得做過」，用 remember + V-ing。","g4"],
 ["Don't forget ___ your dictionary to class tomorrow.",["bring","bringing","brought","to bring"],3,"明天才要帶，是「別忘了要去做」，用 forget + to V。","g4"],
 ["I'll never forget ___ on the stage for the first time.",["to stand","stand","standing","stood"],2,"已經發生過的難忘經驗，用 forget + V-ing，常和 never 連用。","g4"],
 ["The students stopped ___ when the teacher walked in.",["talking","to talk","talk","talked"],0,"老師進來，學生「停止正在做的事」（講話），用 stop + V-ing。","g4"],
 ["On my way to school, I stopped ___ some breakfast.",["buying","bought","buy","to buy"],3,"停下腳步「去買」早餐，to V 表示目的，用 stop + to V。","g4"],
 ["I tried my best ___ the box, but it was too heavy.",["to lift","lifting","lifted","lift"],0,"努力想搬但沒成功，表示「設法去做」，用 try to V。","g4"],
 ["If the computer doesn't work, try ___ it.",["restart","restarting","restarted","restarts"],1,"建議「試試看」某個方法，用 try + V-ing。","g4"],
 ["We regret ___ you that the school trip has been canceled.",["telling","told","to tell","tell"],2,"正式通知壞消息，用 regret + to V：「很遺憾要告訴你」。","g4"],
 ["I regret ___ so much time on my phone last year.",["to spend","spend","spent","spending"],3,"後悔「去年已經做過」的事，用 regret + V-ing。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S1_1_1_CLASS = {
g1:[
 {say:"高一新鮮人好！歡迎來到高中！第一堂課學現在完成進行式。先看黑板上這兩句：{I have written my essay.} 和 {I have been writing my essay.}，差在哪裡呢？", board:[["I have written my essay.",["have written"]],["I have been writing my essay.",["have been writing"]]]},
 {say:"第一句是現在完成式，重點是「寫完了」；第二句是現在完成進行式，重點是「從之前一直寫到現在」，可能還沒寫完喔！句型是 have 或 has，加上 been，再加 V-ing。", board:[["have / has + been + V-ing",["been","V-ing"]]]},
 {say:"口訣來囉！", chant:"have been 加 ing，一直做到現在不停！"},
 {say:"它最常和三個好朋友一起出現：for 加一段時間、since 加過去的時間點，還有問「多久了」的 How long。{I have been studying for two hours.} {How long have you been waiting?}", board:[["I have been studying for two hours.",["for"]],["She has been learning English since 2020.",["since"]],["How long have you been waiting?",["How long"]]]},
 {ask:{say:"考考你！", q:"I ___ for the bus for 30 minutes, and it still hasn't come.", opts:["have been waiting","waited"], ans:0,
   ok:"答對了！從 30 分鐘前一直等到現在，車還沒來，用 have been waiting。", bad:{1:"過去式只說「過去等過」，但這裡是一直等到現在都還在等，要用 have been waiting。"},
   again:{q:"She ___ English since she was six.", opts:["has been learning","learns"], ans:0, exp:"since + 過去時間點，從六歲一直學到現在，用 has been learning。"}}},
 {say:"那什麼時候不能用完成進行式？第一種：有「次數」或「數量」的時候！讀了三遍，重點是次數這個結果，要用現在完成式。", board:[["I have read this book three times.",["have read"]],["I have been reading this book three times.",[],true]]},
 {say:"分辨口訣！", chant:"有次數、有結果，完成式；強調過程，完成進行式！"},
 {ask:{q:"I ___ this novel three times.", opts:["have been reading","have read","am reading"], ans:1,
   ok:"很棒！three times 是次數，用現在完成式 have read。", bad:{0:"有次數的時候不用完成進行式喔，要用 have read。",2:"現在進行式只說「現在正在讀」，沒辦法搭配「讀過三次」。"},
   again:{q:"I ___ two essays this week.", opts:["have written","have been writing"], ans:0, exp:"two essays 是數量，強調寫完的結果，用 have written。"}}},
 {say:"第二種：狀態動詞！know、like、love、own、believe，還有表示「擁有」的 have，本來就不能用進行式，當然也不能用完成進行式。", board:[["I have known him for years.",["have known"]],["I have been knowing him for years.",[],true]]},
 {ask:{q:"I ___ Amy since junior high.", opts:["have been knowing","have known","am knowing"], ans:1,
   ok:"答對！know 是狀態動詞，用現在完成式 have known。", bad:{0:"know 是狀態動詞，不能加 ing，要用 have known。",2:"know 不能用進行式，而且 since 要搭配完成式。"},
   again:{q:"She ___ that phone for three years.", opts:["has had","has been having"], ans:0, exp:"have 表示「擁有」是狀態動詞，用 has had。"}}},
 {say:"加碼一個用法：動作剛停，但留下痕跡，也用完成進行式。你全身是汗？{Have you been running?} 眼睛紅紅的？{Have you been crying?} 另外小心：{My dog has been my best friend.} 後面沒有 V-ing，只是 be 動詞的現在完成式喔！", board:[["You're sweating. Have you been running?",["been running"]],["My dog has been my best friend.",["has been"]]]},
 {ask:{say:"最後一題！", q:"You look tired. ___ well lately?", opts:["Do you sleep","Have you been sleeping","Are you sleep"], ans:1,
   ok:"完美！lately 表示最近一直到現在，用 Have you been sleeping。", bad:{0:"lately 要搭配完成式，說的是「最近一直以來」。",2:"are 後面不能直接接原形動詞，而且 lately 要用完成式。"},
   again:{q:"It ___ all morning, so the ground is wet.", opts:["has been raining","rains"], ans:0, exp:"雨從早上一直下到現在，留下濕濕的地面，用 has been raining。"}}},
 {say:"現在完成進行式過關！複習口訣：have been 加 ing，一直做到現在不停；有次數、有結果用完成式；狀態動詞不加 ing！", end:true}
],
g2:[
 {say:"今天學感官動詞！就是 see、hear、watch、feel 這些用眼睛、耳朵、身體去感覺的動詞。先看這句：{I saw him cross the street.}", board:[["I saw him cross the street.",["saw","cross"]]]},
 {say:"感官動詞的句型是：感官動詞，加受詞，再加動詞。後面那個動詞有三種樣子：原形、V-ing、過去分詞，意思都不一樣！", board:[["see + O + V",["V"]],["see + O + V-ing",["V-ing"]],["see + O + p.p.",["p.p."]]]},
 {say:"第一種，原形動詞：看到「整個過程」。{I saw him cross the street.} 從他走這頭一直看到他走到對面。第二種，V-ing：看到「正在進行」的片段。{I saw him crossing the street.} 我看到時，他正走在馬路中間。", board:[["I saw him cross the street.",["cross"]],["I saw him crossing the street.",["crossing"]]]},
 {say:"口訣記起來！", chant:"原形看全部，ing 看一半！"},
 {ask:{say:"考考你！", q:"We sat on the beach and watched the sun ___.", opts:["set","to set"], ans:0,
   ok:"對！watch + 受詞 + 原形動詞，看完整個日落。", bad:{1:"感官動詞後面不能接 to V 喔！要用原形 set。"},
   again:{q:"I felt the ground ___ during the earthquake.", opts:["shake","to shake"], ans:0, exp:"feel + 受詞 + 原形動詞：shake。"}}},
 {say:"第三種，過去分詞：受詞是「被」怎麼樣的時候。{I heard my name called.} 名字不會自己叫自己，是被叫的，所以用 called。", board:[["I heard my name called.",["called"]],["I saw the window broken.",["broken"]]]},
 {say:"主動被動的口訣！", chant:"受詞自己做用原形或 ing，受詞被做用 p.p.！"},
 {ask:{q:"Did you hear your name ___ at the meeting?", opts:["call","called","calling"], ans:1,
   ok:"讚！名字是被叫的，用過去分詞 called。", bad:{0:"名字不會自己叫喔！是被叫的，要用 called。",2:"calling 表示名字主動在叫人，不合理，要用被動的 called。"},
   again:{q:"Have you ever heard this song ___ in Japanese?", opts:["sung","sing"], ans:0, exp:"歌是被唱的，用過去分詞 sung。"}}},
 {say:"接下來是學測最愛考的陷阱！感官動詞改成被動句時，原本的原形動詞要「變回」to V！{We saw him leave.} 變成 {He was seen to leave.}", board:[["We saw him leave.",["leave"]],["He was seen to leave.",["to leave"]]]},
 {say:"陷阱口訣！", chant:"主動省掉 to，被動 to 回來！"},
 {ask:{q:"The boy was seen ___ into the classroom through the window.", opts:["climb","to climb","climbed"], ans:1,
   ok:"太強了！被動句 was seen 後面要加 to：to climb。", bad:{0:"這是被動句，原形動詞要變回 to V 喔！",2:"男孩是自己爬的，不是被爬，而且被動句要用 to climb。"},
   again:{q:"He was heard ___ a song in the bathroom.", opts:["to sing","sing"], ans:0, exp:"被動句 was heard 後面要用 to V：to sing。"}}},
 {say:"最後提醒：look 和 listen 要帶介係詞！{Look at the kids play.} {Listen to the birds sing.} at 和 to 不能漏掉。還有 notice、observe、overhear 也是感官動詞，用法一樣。", board:[["Listen to the birds sing.",["Listen to"]],["I overheard them talking about me.",["overheard","talking"]]]},
 {ask:{say:"最後一題！", q:"I noticed a stranger ___ outside our classroom.", opts:["to stand","standing","stood"], ans:1,
   ok:"完美！notice 也是感官動詞，注意到他正站在那裡，用 standing。", bad:{0:"感官動詞主動句後面不能接 to V。",2:"感官動詞後面不能接過去式，要用原形或 V-ing。"},
   again:{q:"I heard someone ___ my name.", opts:["calling","to call"], ans:0, exp:"聽到有人正在叫，用 V-ing：calling。"}}},
 {say:"感官動詞過關！口訣：原形看全部，ing 看一半；受詞被做用 p.p.；主動省掉 to，被動 to 回來！", end:true}
],
g3:[
 {say:"今天學使役動詞，就是「叫別人做事」的動詞！四大天王：make、let、have、get。先看：{Mom made me clean my room.}", board:[["Mom made me clean my room.",["made","clean"]]]},
 {say:"make、let、have 三個的句型一樣：使役動詞，加人，加原形動詞。make 是強迫，let 是允許，have 是叫、請。", board:[["make + 人 + V（強迫）",["make"]],["let + 人 + V（允許）",["let"]],["have + 人 + V（叫、請）",["have"]]]},
 {say:"口訣！", chant:"make、let、have，後面直接接原形！"},
 {ask:{say:"考考你！", q:"The teacher let us ___ ten minutes early.", opts:["leave","to leave","leaving"], ans:0,
   ok:"答對！let + 人 + 原形動詞：let us leave。", bad:{1:"let 後面不加 to，直接接原形動詞。",2:"let 後面要接原形動詞，不是 V-ing。"},
   again:{q:"Mr. Chen had the students ___ an outline.", opts:["write","to write"], ans:0, exp:"have + 人 + 原形動詞：write。"}}},
 {say:"重點來了！get 是唯一的叛逆分子：get 加人，後面要加 to V！{I got my brother to help me.}", board:[["I got my brother to help me.",["to help"]],["I got my brother help me.",[],true]]},
 {say:"get 的口訣！", chant:"get 最叛逆，人後面要加 to！"},
 {ask:{q:"I got my brother ___ me with my project.", opts:["help","to help","helped"], ans:1,
   ok:"讚！get + 人 + to V：to help。", bad:{0:"get 是叛逆分子，人後面要加 to 喔！",2:"弟弟是主動幫忙的，而且 get + 人要接 to V。"},
   again:{q:"My parents got a tutor ___ me in math.", opts:["to teach","teach"], ans:0, exp:"get + 人 + to V：to teach。"}}},
 {say:"如果受詞是「物」，而且是被處理的，就用 have 或 get，加物，加 p.p.。{I had my hair cut.} 不是自己剪，是請理髮師剪的！", board:[["I had my hair cut.",["cut"]],["I need to get my bike fixed.",["fixed"]]]},
 {ask:{q:"My bike is broken. I need to get it ___.", opts:["fix","to fix","fixed"], ans:2,
   ok:"太棒了！腳踏車是被修的，用 fixed。", bad:{0:"受詞是物，而且是被修的，要用 p.p.。",1:"受詞是物而且被處理，要用 p.p. fixed，不用 to fix。"},
   again:{q:"I had the photo ___ for the poster.", opts:["enlarged","enlarge"], ans:0, exp:"照片是被放大的，用 p.p.：enlarged。"}}},
 {say:"最後兩個陷阱！第一，make 改被動要把 to 加回來：{We were made to clean the room.} 第二，let 沒有被動，要改用 be allowed to：{I was allowed to go out.}", board:[["We were made to clean the room.",["to clean"]],["I was allowed to go out.",["allowed to"]]]},
 {ask:{say:"最後一題！", q:"We were made ___ the classroom after school.", opts:["clean","to clean","cleaning"], ans:1,
   ok:"完美！make 的被動要加 to：were made to clean。", bad:{0:"被動句要把 to 加回來喔！",2:"被動句 were made 後面要接 to V。"},
   again:{q:"Students are not ___ to eat in the lab.", opts:["allowed","let"], ans:0, exp:"let 沒有被動，要用 be allowed to V。"}}},
 {say:"使役動詞過關！口訣：make、let、have 直接接原形；get 最叛逆，人後面要加 to；物被處理用 p.p.；被動 make 要加 to，let 換成 allowed to！", end:true}
],
g4:[
 {say:"最後一課！有些動詞後面接 to V 或 V-ing 都可以，但意思差很多。先看：{Remember to lock the door.} 和 {I remember locking the door.}", board:[["Remember to lock the door.",["to lock"]],["I remember locking the door.",["locking"]]]},
 {say:"第一句是「記得要去鎖門」，門還沒鎖；第二句是「記得鎖過門」，已經鎖好了。to V 看未來，V-ing 看過去！", board:[["to V → 還沒做，要去做",["to V"]],["V-ing → 已經做過",["V-ing"]]]},
 {say:"超級口訣！", chant:"to V 向前看，V-ing 回頭看！"},
 {ask:{say:"考考你！", q:"Don't forget ___ your dictionary tomorrow.", opts:["to bring","bringing"], ans:0,
   ok:"答對！明天才要帶，還沒做，用 to bring。", bad:{1:"明天才要帶，是「別忘了要去做」，用 to V 喔。"},
   again:{q:"I remember ___ him at orientation.", opts:["meeting","to meet"], ans:0, exp:"已經見過了，是回頭看，用 V-ing。"}}},
 {say:"接著是 stop！{He stopped talking.} 他不講話了，停止正在做的事。{He stopped to talk.} 他停下腳步，「為了要」講話。stop 後面的 to V 是目的！", board:[["He stopped talking.",["talking"]],["He stopped to talk.",["to talk"]]]},
 {ask:{q:"On my way to school, I stopped ___ some breakfast.", opts:["buying","to buy"], ans:1,
   ok:"讚！停下腳步去買早餐，to V 表示目的。", bad:{0:"stop buying 是「不再買」，這裡是停下來去買，用 to buy。"},
   again:{q:"The students stopped ___ when the teacher came in.", opts:["talking","to talk"], ans:0, exp:"老師進來，學生不再講話，用 stop + V-ing。"}}},
 {say:"再來是 try：{try to V} 是努力想做到，不一定成功；{try V-ing} 是試試看這個方法。睡不著嗎？{Try drinking warm milk.}", board:[["I tried to lift the box, but it was too heavy.",["tried to lift"]],["Try drinking warm milk.",["Try drinking"]]]},
 {say:"try 的口訣！", chant:"try to 很努力，try ing 試試看！"},
 {ask:{q:"If the computer doesn't work, try ___ it.", opts:["restarting","restart","restarted"], ans:0,
   ok:"太棒了！建議試試看這個方法，用 try + V-ing。", bad:{1:"try 後面不能直接接原形動詞喔。",2:"try 後面不能接過去式，試試看要用 V-ing。"},
   again:{q:"I tried my best ___ the test, but I failed.", opts:["to pass","passing"], ans:0, exp:"很努力想通過，用 try to V。"}}},
 {say:"最後是 regret：{regret V-ing} 是後悔做過某事；{regret to V} 是很遺憾要告訴你壞消息，常接 tell、inform。否定就把 not 放前面：{I regret not studying harder.}", board:[["I regret spreading that rumor.",["spreading"]],["We regret to inform you ...",["to inform"]],["I regret not studying harder.",["not studying"]]]},
 {ask:{say:"最後一題！", q:"We regret ___ you that the trip has been canceled.", opts:["telling","to tell","told"], ans:1,
   ok:"完美！正式通知壞消息，用 regret to tell。", bad:{0:"regret telling 是後悔說過，這裡是遺憾要告知，用 to tell。",2:"regret 後面不能接過去式。"},
   again:{q:"I regret ___ so much time on my phone last year.", opts:["spending","to spend"], ans:0, exp:"後悔去年已經做過的事，用 V-ing。"}}},
 {say:"全部過關！口訣：to V 向前看，V-ing 回頭看；stop to 是去做別的事；try to 很努力，try ing 試試看。高一第一次段考的文法上完了，去挑戰魔王吧！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S1_1_1_ROOTS = [
  {id:"r1", title:"字首 re- / pre- / pro-：再、事先、向前"},
  {id:"r2", title:"字首 en- / em-：使……"},
  {id:"r3", title:"字根 act / ag：做、行動"},
  {id:"r4", title:"字根 form：形狀"}
];
const S1_1_1_ROOT_CLASS = {
r1:[
 {say:"高一同學好！上高中以後單字變長了，別怕！長單字很多是像積木一樣拼起來的。今天先學三個超常見的字首：re、pre、pro。", board:[["re + peat = repeat",["re"],false,true],["pre + fer = prefer",["pre"],false,true],["pro + cess = process",["pro"],false,true]]},
 {say:"<<re>> 表示「再一次」或「回來」：{repeat} 再做一次，就是重複；{refresh} 再變新鮮，就是恢復精神；{reply} 把話折回去，就是回覆；{recover} 拿回來，就是恢復。", board:[["re + fresh = refresh",["re"],false,true],["re + ply = reply",["re"],false,true],["re + cover = recover",["re"],false,true]]},
 {say:"口訣！", chant:"re 再一次，re 回頭來！"},
 {ask:{q:"re ＋ fresh（新鮮的）＝ refresh，意思是？", opts:["新鮮人","使恢復精神","冷凍"], ans:1,
   ok:"對！再次變新鮮，就是恢復精神，電腦上的重新整理也是 refresh。", bad:{0:"新鮮人是 freshman 喔，re 是「再一次」。",2:"re 是「再一次」，再變新鮮，跟冷凍沒關係。"},
   again:{q:"re ＋ ply（折）＝ reply，意思是？", opts:["回覆","複印","應用"], ans:0, exp:"把話折回去給對方，就是回覆。"}}},
 {say:"<<pre>> 表示「事先、在前面」：{prefer} 把喜歡的搬到前面，就是比較喜歡；{previous} 走在前面路上的，就是先前的；{preserve} 事先保存，就是保存。", board:[["pre + fer = prefer",["pre"],false,true],["pre + vi + ous = previous",["pre"],false,true],["pre + serve = preserve",["pre"],false,true]]},
 {say:"<<pro>> 表示「向前」：{process} 一步步向前走，就是過程；{pronounce} 向前大聲說出來，就是發音；{profile} 向前描出的線條，就是側面輪廓，後來變成個人簡介。", board:[["pro + cess = process",["pro"],false,true],["pro + nounce = pronounce",["pro"],false,true],["pro + file = profile",["pro"],false,true]]},
 {say:"口訣！", chant:"pre 在前面先準備，pro 向前衝第一！"},
 {ask:{q:"pro（向前）＋ cess（走）＝ process，意思是？", opts:["過程","成功","退步"], ans:0,
   ok:"讚！一步一步向前走，就是過程。", bad:{1:"成功是 success 喔！process 是一步步向前的「過程」。",2:"pro 是「向前」，不是退步。"},
   again:{q:"pre（在前）＋ vi（路）＋ ous ＝ previous，意思是？", opts:["先前的","以後的","危險的"], ans:0, exp:"走在前面路上的，就是先前的。"}}},
 {say:"小心！pre 和 pro 很像。pre 是「時間上」比較早，pro 是「方向上」往前。{preview} 是事先看，就是預習；{progress} 是向前走，就是進步。", board:[["pre + view = preview（預習）",["pre"],false,true],["pro + gress = progress（進步）",["pro"],false,true]]},
 {ask:{q:"＿＿nounce（大聲說出）→ 發音，字首要填？", opts:["pre","pro","re"], ans:1,
   ok:"太棒了！向前大聲說出來，pronounce 就是發音。", bad:{0:"prenounce 不是英文字喔，發音是 pronounce。",2:"renounce 是「放棄」的意思，發音是 pronounce。"},
   again:{q:"＿＿peat → 重複，字首要填？", opts:["re","pro"], ans:0, exp:"再做一次，就是 repeat。"}}},
 {ask:{say:"最後一題！", q:"I ___ studying in the library to studying at home.（比較喜歡）", opts:["prefer","preserve","process"], ans:0,
   ok:"完美！prefer A to B：比起 B 比較喜歡 A。", bad:{1:"preserve 是保存，這裡要說「比較喜歡」。",2:"process 是過程，這裡要說「比較喜歡」：prefer。"},
   again:{q:"Salt is used to ___ food.（保存）", opts:["preserve","prefer"], ans:0, exp:"事先保存起來，就是 preserve。"}}},
 {say:"字首過關！口訣：re 再一次、re 回頭來；pre 在前面先準備，pro 向前衝第一！", end:true}
],
r2:[
 {say:"今天學一個超好用的字首：en，它的意思是「使……」，可以把形容詞或名詞變成動詞！看：{rich} 是豐富的，{enrich} 就是使豐富。", board:[["en + rich = enrich",["en"],false,true]]},
 {say:"更多例子：{large} 大的，{enlarge} 使變大，就是放大；{sure} 確定的，{ensure} 使確定，就是確保；{danger} 危險，{endanger} 使陷入危險，就是危害。", board:[["en + large = enlarge",["en"],false,true],["en + sure = ensure",["en"],false,true],["en + danger = endanger",["en"],false,true]]},
 {say:"口訣！", chant:"en 一加，使它變化！"},
 {ask:{q:"en ＋ large（大的）＝ enlarge，意思是？", opts:["放大","大型的","縮小"], ans:0,
   ok:"對！使變大，就是放大。", bad:{1:"en 會把形容詞變成動詞喔！enlarge 是「使變大」。",2:"en 是「使……」，使變大是放大，不是縮小。"},
   again:{q:"en ＋ sure（確定的）＝ ensure，意思是？", opts:["確保","保險","當然"], ans:0, exp:"使確定，就是確保。"}}},
 {say:"en 會變身！後面接 b、p、m 開頭的字時，變成 <<em>>：{power} 力量，{empower} 使有力量；{brace} 是手臂，{embrace} 放進手臂裡，就是擁抱。", board:[["em + power = empower",["em"],false,true],["em + brace = embrace",["em"],false,true]]},
 {say:"變身口訣！", chant:"b、p、m 前面，en 變 em！"},
 {ask:{q:"＿＿power（使有力量）字首要填？", opts:["en","em","in"], ans:1,
   ok:"讚！power 開頭是 p，en 要變成 em。", bad:{0:"power 開頭是 p，en 要變身成 em 喔。",2:"in 通常是「不」或「進入」，使有力量要用 em。"},
   again:{q:"＿＿brace（擁抱）字首要填？", opts:["em","en"], ans:0, exp:"brace 開頭是 b，所以用 em：embrace。"}}},
 {say:"en 還有一個意思是「放進去」：{enroll} 把名字放進名冊，就是註冊、入學。你們剛 enroll 進高中喔！上一冊學過的 {encourage} 使有勇氣、{enable} 使能夠，也是同一家人。", board:[["en + roll = enroll",["en"],false,true],["en + courage = encourage",["en"],false,true]]},
 {say:"小提醒：endanger 加上 ed 變成 {endangered}，意思是「瀕臨絕種的」，像 {endangered animals}，學測常出現！", board:[["endanger → endangered animals",["en"],false,true]]},
 {ask:{q:"Pollution can ＿＿ sea animals.（危害）", opts:["danger","dangerous","endanger"], ans:2,
   ok:"太棒了！can 後面要接動詞，en + danger 變成動詞 endanger。", bad:{0:"danger 是名詞，can 後面要接動詞 endanger。",1:"dangerous 是形容詞，can 後面要接動詞。"},
   again:{q:"Joining clubs can ＿＿ your high school life.（使豐富）", opts:["enrich","rich"], ans:0, exp:"can 後面要接動詞：enrich。"}}},
 {ask:{say:"最後一題！", q:"看到 enroll，最可能的意思是？", opts:["滾動","註冊入學","角色"], ans:1,
   ok:"完美！把名字放進名冊，就是註冊。", bad:{0:"roll 雖然有滾動的意思，但這裡是「名冊」，enroll 是註冊。",2:"角色是 role 喔，enroll 是註冊。"},
   again:{q:"Education ＿＿ people to change their lives.（使有能力）", opts:["empowers","powers"], ans:0, exp:"em + power 是「使有能力」：empowers。"}}},
 {say:"en 和 em 過關！口訣：en 一加，使它變化；b、p、m 前面，en 變 em！", end:true}
],
r3:[
 {say:"今天學字根！字根是單字的核心。第一個：<<act>>，意思是「做、行動」。你一定認識 {act}，演戲也是一種「做」！", board:[["act = 做",["act"],false,true]]},
 {say:"加上字尾：{action} 做出來的事，就是行動；{actual} 真正做出來的，就是實際的；{actually} 其實。", board:[["act + ion = action",["act"],false,true],["act + ual = actual",["act"],false,true],["act + ually = actually",["act"],false,true]]},
 {say:"口訣！", chant:"act 動起來，做做做！"},
 {ask:{q:"act（做）＋ ion ＝ action，意思是？", opts:["行動","演員","活動的"], ans:0,
   ok:"對！做出來的事，就是行動。take action 是採取行動。", bad:{1:"演員是 actor，-or 是「人」；action 的 -ion 是名詞字尾。",2:"活動的是 active，-ive 是形容詞字尾。"},
   again:{q:"act ＋ ual ＝ actual，意思是？", opts:["實際的","表演的"], ans:0, exp:"真正做出來的，就是實際的。"}}},
 {say:"再加上字首：{react} re 是回來，回頭做出動作，就是反應；{exact} ex 是向外、徹底，完完整整做出來，就是精確的。", board:[["re + act = react",["act"],false,true],["ex + act = exact",["act"],false,true]]},
 {ask:{q:"re（回）＋ act（做）＝ react，意思是？", opts:["重演","反應","實際"], ans:1,
   ok:"讚！回過頭來做出動作，就是反應。", bad:{0:"雖然 re 有「再」的意思，但 react 是「反應」，名詞是 reaction。",2:"實際是 actual 喔。"},
   again:{q:"To be ＿＿, we've waited for 45 minutes.（精確地說）", opts:["exact","react"], ans:0, exp:"to be exact 是「精確地說」。"}}},
 {say:"act 有個雙胞胎兄弟：<<ag>>，也是「做」的意思。{agent} 替別人做事的人，就是代理人、經紀人；{agency} 替人做事的機構，就是代辦處，像 travel agency 旅行社。", board:[["ag + ent = agent",["ag"],false,true],["ag + ency = agency",["ag"],false,true]]},
 {say:"口訣！", chant:"act 和 ag 是兄弟，都在努力做事情！"},
 {ask:{q:"字根 ag 的意思是？", opts:["年紀","做","同意"], ans:1,
   ok:"太棒了！ag 和 act 一樣是「做」，agent 就是替人做事的人。", bad:{0:"年紀是 age，字根 ag 是「做」。",2:"同意是 agree，但字根 ag 是「做」。"},
   again:{q:"ag（做）＋ ent（人）＝ agent，意思是？", opts:["代理人","同意者"], ans:0, exp:"替別人做事的人，就是代理人。"}}},
 {ask:{say:"最後一題！", q:"How did your parents ＿＿ to your test results?（反應）", opts:["act","react","exact"], ans:1,
   ok:"完美！react to 表示對……做出反應。", bad:{0:"act 是做、表演，對某事有反應要用 react to。",2:"exact 是形容詞「精確的」，這裡要動詞 react。"},
   again:{q:"Actions speak louder than words. 的 action 意思是？", opts:["行動","演員"], ans:0, exp:"act + ion：行動勝於空談。"}}},
 {say:"字根 act 和 ag 過關！口訣：act 動起來做做做；act 和 ag 是兄弟，都在努力做事情！", end:true}
],
r4:[
 {say:"最後一課，字根 <<form>>，意思是「形狀、形式」。表格也叫 {form}，因為它有固定的形狀！", board:[["form = 形狀、形式",["form"],false,true]]},
 {say:"加上字尾：{formal} 合乎形式的，就是正式的；{format} 固定的形狀，就是格式；{formula} 小小的固定形式，就是公式。", board:[["form + al = formal",["form"],false,true],["form + at = format",["form"],false,true],["form + ula = formula",["form"],false,true]]},
 {say:"口訣！", chant:"form 是形狀，形狀定了很正式！"},
 {ask:{q:"form（形式）＋ al ＝ formal，意思是？", opts:["正式的","表格","前任的"], ans:0,
   ok:"對！合乎形式的，就是正式的。相反詞是 informal。", bad:{1:"表格是 form，加上 al 變成形容詞「正式的」。",2:"前任的是 former，formal 是正式的。"},
   again:{q:"form ＋ ula（小）＝ formula，意思是？", opts:["公式","形成"], ans:0, exp:"小小的固定形式，就是公式。"}}},
 {say:"加上字首：{reform} re 是重新，重新塑造形狀，就是改革；以前學過的 {transform} 是徹底改變形狀，{uniform} 是同一個形狀，就是制服！", board:[["re + form = reform",["form"],false,true],["trans + form = transform",["form"],false,true],["uni + form = uniform",["form"],false,true]]},
 {ask:{q:"re（重新）＋ form（形狀）＝ reform，意思是？", opts:["表格","改革","表演"], ans:1,
   ok:"讚！重新塑造形狀，就是改革。", bad:{0:"表格是 form，加上 re 是重新塑形：改革。",2:"表演是 perform，reform 是改革。"},
   again:{q:"uni（一）＋ form ＝ uniform，意思是？", opts:["制服","宇宙"], ans:0, exp:"大家同一個形狀，就是制服。"}}},
 {say:"form 家族還有：{inform} 在腦中形成想法，就是通知；{perform} 完整地呈現出來，就是表演。看到 form，先想「形狀」！", board:[["in + form = inform",["form"],false,true],["per + form = perform",["form"],false,true]]},
 {say:"字根口訣！", chant:"看到 form 想形狀，re 改革、uni 制服、per 表演！"},
 {ask:{q:"Please follow the ＿＿ when you write your report.（格式）", opts:["format","formula","formal"], ans:0,
   ok:"太棒了！the 後面要接名詞「格式」：format。", bad:{1:"formula 是公式，報告要照的是格式 format。",2:"formal 是形容詞「正式的」，這裡要名詞 format。"},
   again:{q:"You need to wear ＿＿ clothes to the ceremony.（正式的）", opts:["formal","format"], ans:0, exp:"修飾 clothes 要用形容詞：formal。"}}},
 {ask:{say:"最後一題！", q:"There is no magic ＿＿ for success.（祕訣、公式）", opts:["reform","formula","inform"], ans:1,
   ok:"完美！no magic formula：沒有神奇的公式。", bad:{0:"reform 是改革，這裡是成功的「公式」formula。",2:"inform 是動詞「通知」，這裡要名詞 formula。"},
   again:{q:"The new principal wants to ＿＿ the old rules.（改革）", opts:["reform","inform"], ans:0, exp:"重新塑形就是改革：reform。"}}},
 {say:"字根 form 過關！口訣：form 是形狀；re 改革、uni 制服、per 表演。字根字首全部上完了，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創）與概念卡 ---------- */
Object.assign(ILLUS2, {
  s111_cafeteria: () => svgWrap("#fff7ed", `<rect x="0" y="0" width="160" height="22" fill="#fdba74"/>` + txt(80, 16, "CAFETERIA", 11, "#7c2d12", 800) + ground("#fde68a") + kid(46, {mood:"open", pose:"hold"}) + girlP(114, {mood:"open", pose:"hold"}) + `<rect x="18" y="78" width="124" height="8" rx="3" fill="#a16207"/><rect x="28" y="86" width="6" height="20" fill="#854d0e"/><rect x="126" y="86" width="6" height="20" fill="#854d0e"/>` + `<rect x="32" y="70" width="28" height="8" rx="2" fill="#93c5fd"/><circle cx="40" cy="70" r="4" fill="#fbbf24"/><circle cx="51" cy="70" r="4" fill="#4ade80"/>` + `<rect x="100" y="70" width="28" height="8" rx="2" fill="#f9a8d4"/><circle cx="108" cy="70" r="4" fill="#f87171"/><circle cx="119" cy="70" r="4" fill="#fde68a"/>` + heart(80, 50, .7)),
  s111_debate: () => svgWrap("#eef2ff", `<rect x="0" y="98" width="160" height="22" fill="#c7d2fe"/>` + P({x:38, y:100, s:.72, hair:"short", hc:"#2b2b2b", oc:"#4f7cf0", pose:"point", mood:"open"}) + P({x:122, y:100, s:.72, hair:"long", hc:"#3b2a20", oc:"#ef4444", pose:"wave", mood:"open"}) + `<rect x="22" y="74" width="32" height="28" rx="3" fill="#a16207"/><rect x="106" y="74" width="32" height="28" rx="3" fill="#a16207"/>` + txt(38, 92, "A", 12, "#fff") + txt(122, 92, "B", 12, "#fff") + txt(80, 66, "VS", 16, "#6366f1") + bubble(44, 18, "I agree!", 56) + bubble(118, 18, "But...", 46)),
  s111_lab: () => svgWrap("#ecfeff", `<rect x="0" y="88" width="160" height="32" fill="#94a3b8"/><rect x="0" y="86" width="160" height="5" fill="#64748b"/>` + P({x:48, y:92, s:.78, hair:"twin", hc:"#3b2a20", coat:true, pose:"hold", acc:["glasses"], mood:"open"}) + grp(112, 72, 1, `<path d="M-6 -20 V-6 L-16 12 H16 L6 -6 V-20 Z" fill="#cffafe" stroke="#0891b2" stroke-width="2"/><path d="M-12 4 H12 L16 12 H-16 Z" fill="#22d3ee"/>`) + grp(138, 70, 1, `<rect x="-4" y="-18" width="8" height="30" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><rect x="-3" y="0" width="6" height="11" rx="3" fill="#f97316"/>`) + `<circle cx="108" cy="44" r="3" fill="#a5f3fc"/><circle cx="116" cy="36" r="4" fill="#a5f3fc"/><circle cx="110" cy="26" r="2.5" fill="#a5f3fc"/>` + spark(130, 30, .8)),
  s111_embrace: () => svgWrap("#fff1f2", ground() + kid(68, {pose:"hold", mood:"open", oc:"#60a5fa"}) + girlP(92, {pose:"hold", mood:"open"}) + heart(80, 26, 1.1) + spark(44, 30, .9) + spark(118, 24, .8) + star(132, 50, 4)),
  s111_overhear: () => svgWrap("#f5f5f4", `<rect x="0" y="100" width="160" height="20" fill="#d6d3d1"/><rect x="72" y="14" width="12" height="90" fill="#a8a29e"/><rect x="72" y="14" width="12" height="4" fill="#78716c"/>` + kid(44, {mood:"open", oc:"#34d399"}) + P({x:106, y:106, s:.7, hair:"short", hc:"#2b2b2b", oc:"#4f7cf0", pose:"wave", mood:"open"}) + P({x:140, y:106, s:.7, hair:"bun", hc:"#6b3f2a", oc:"#f472b6", pose:"down", mood:"smile"}) + bubble(122, 22, "Secret!", 52) + txt(30, 30, "?", 20, "#f59e0b") + `<path d="M58 46 Q64 50 58 54 M62 42 Q70 50 62 58" stroke="#f59e0b" stroke-width="2" fill="none"/>`)
});
registerUnit("s1-1-1", {
  name:"高一 上學期 第一次段考",
  sub:"現在完成進行式、感官動詞、使役動詞、remember / stop / try 接 to V 或 V-ing",
  words:S1_1_1_WORDS, grammar:S1_1_1_GRAMMAR, quiz:S1_1_1_QUIZ,
  classes:Object.assign({}, S1_1_1_CLASS, S1_1_1_ROOT_CLASS), phonics:S1_1_1_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會字首、字根，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
