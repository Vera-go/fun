/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高二下學期 第一次段考（通用範圍）
   主題：心理學與人際溝通、哲學與思考、醫療與身心健康
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S2_2_1_WORDS = [
/* ---------- 字根 log / logue：說話、學問 ---------- */
["dialogue","n.","對話",[
 ["Having read the dialogue twice, I could finally act it out.","把對話讀了兩遍之後，我終於能把它演出來了。","完成式分詞構句：Having read 表示「讀兩遍」比「演出來」更早發生。"],
 ["The two leaders are said to have had a long dialogue.","據說兩位領袖進行了長時間的對話。","be said to have p.p.：完成式不定詞表示「對話」發生在「據說」之前。"],
 ["Open dialogue between parents and teenagers is important.","父母和青少年之間坦誠的對話很重要。","dialogue between A and B 表示「A 和 B 之間的對話」；主詞 Open dialogue 是單數，用 is。"]],
 "dia-=在……之間|logue=說話","在兩人之間來回說話 → 對話","@s221_dialogue"],
["monologue","n.","獨白",[
 ["Having forgotten the rest of his monologue, the actor stood on stage in silence.","忘了獨白剩下的部分，那位演員默默地站在台上。","Having forgotten 表示「忘詞」先發生，接著才「站著不動」。"],
 ["Hamlet's famous monologue begins with 'To be, or not to be.'","哈姆雷特著名的獨白以「生存還是毀滅」開頭。","begin with 表示「以……開始」；引號裡是莎士比亞的名句。"],
 ["I don't like being interrupted in the middle of my monologue.","我不喜歡在獨白講到一半時被打斷。","被動式動名詞 being p.p.：like 後面接動名詞，而「被打斷」是被動，所以用 being interrupted。"]],
 "mono-=單一|logue=說話","一個人自己說 → 獨白","🎭|獨白"],
["prologue","n.","序幕；開場白",[
 ["The prologue is said to have been written by the author's wife.","據說序幕是作者的太太寫的。","to have been p.p. 是完成被動不定詞：序幕「被寫」，而且發生在「據說」之前。"],
 ["Having been warned in the prologue, readers knew that the hero would die.","因為在序幕中就被預告了，讀者知道主角會死。","Having been p.p. 是完成被動分詞構句：讀者「被提醒」，而且發生在「知道」之前。"],
 ["What's past is prologue.","凡是過往，皆為序章。","莎士比亞的名句，意思是過去只是未來的開場；What's past 是名詞子句當主詞。"]],
 "pro-=在前面|logue=說話","正文前面先說的話 → 序幕","📖|序幕"],
["logic","n.","邏輯",[
 ["Judging from his logic, the plan should work.","從他的邏輯判斷，這個計畫應該行得通。","Judging from 是慣用分詞片語，表示「從……判斷」，不需要和主要子句的主詞一致。"],
 ["There is no logic in his being angry at you.","他對你生氣一點道理也沒有。","his being angry：his 是動名詞 being 的意義主詞，表示「他生氣」這件事。"],
 ["Math problems train our logic.","數學題訓練我們的邏輯。","train 當動詞表示「訓練」；主詞 Math problems 是複數，動詞不加 s。"]],
 "log=說話；道理|-ic=學問","講道理的學問 → 邏輯","🧠|邏輯"],
["logical","adj.","合乎邏輯的",[
 ["Generally speaking, a logical essay is easier to follow.","一般來說，有邏輯的文章比較容易理解。","Generally speaking 是慣用分詞片語，表示「一般來說」，不需要和主要子句主詞一致。"],
 ["It is logical for her to choose the cheaper plan.","她選比較便宜的方案是合理的。","虛主詞句型：It is + 形容詞 + for 人 + to V。"],
 ["Given more time, he could have given a more logical answer.","如果有更多時間，他本來可以給出更合邏輯的答案。","Given ... 表示條件「如果有……」；could have p.p. 表示過去本來可以做到卻沒做到。"]],
 "log=說話；道理|-ic=……的|-al=形容詞字尾","講得出道理的 → 合乎邏輯的","🧩|有邏輯"],
["apology","n.","道歉",[
 ["I'm still waiting for his apology.","我還在等他的道歉。","wait for + 名詞 表示「等待……」；動詞是 apologize。"],
 ["Having made a mistake, she offered a sincere apology.","犯了錯之後，她誠懇地道歉。","Having made 表示「犯錯」先發生；make / offer an apology 是常用搭配。"],
 ["Please accept my apology for being late.","請接受我遲到的歉意。","apology for + V-ing：for 是介系詞，後面接動名詞 being late。"]],
 "apo-=離開|log=說話|-y=名詞字尾","說話替自己辯解 → 道歉","🙇|道歉"],
["catalog","n.","目錄；型錄",[
 ["The library catalog can be searched online.","圖書館的目錄可以上網搜尋。","can be p.p. 是助動詞加被動語態。"],
 ["Having looked through the catalog, Mom ordered a new sofa.","把型錄瀏覽過一遍後，媽媽訂了一張新沙發。","look through 表示「瀏覽」；Having looked 表示瀏覽在先、訂購在後。"],
 ["This catalog is expected to be updated next month.","這份目錄預計下個月更新。","被動不定詞 to be p.p.：目錄是「被更新」的，所以用 to be updated。英式拼法是 catalogue。"]],
 "cata-=完全|log=說話","一項一項完整說出來 → 目錄","📚|目錄"],
["analogy","n.","類比",[
 ["The teacher used an analogy to explain the heart: it works like a pump.","老師用類比來解釋心臟：它就像一個幫浦。","use + 名詞 + to V 表示「用……來做某事」；冒號後面補充說明。"],
 ["Compared with a computer, the brain is far more complex, so the analogy has limits.","和電腦相比，大腦複雜得多，所以這個類比有它的限制。","Compared with 是慣用分詞片語，表示「和……相比」；far 用來加強比較級。"],
 ["Drawing an analogy between life and a marathon, the speaker encouraged us to keep going.","講者把人生和馬拉松相類比，鼓勵我們繼續前進。","draw an analogy between A and B 表示「把 A 和 B 做類比」；分詞構句的主詞是 the speaker。"]],
 "ana-=依照|log=道理|-y=名詞字尾","依照同樣的道理去比較 → 類比","🔁|類比"],
["mythology","n.","神話（總稱）",[
 ["Having been interested in Greek mythology since childhood, she became a writer.","她從小就對希臘神話很感興趣，後來成了作家。","Having been + 形容詞：完成式分詞構句，表示從小一直持續的狀態。"],
 ["Zeus is said to be the king of the gods in Greek mythology.","在希臘神話中，宙斯據說是眾神之王。","be said to V：簡單式不定詞表示和「據說」同時存在的情況。"],
 ["Many movies borrow stories from Norse mythology.","許多電影借用北歐神話的故事。","borrow A from B 表示「從 B 借用 A」。"]],
 "myth=神話|-o-=連接|log=學問|-y=名詞字尾","關於神話的學問 → 神話（總稱）","⚡|神話"],
["sociology","n.","社會學",[
 ["My cousin majors in sociology at college.","我表哥在大學主修社會學。","major in 表示「主修……」。"],
 ["Considering her interest in people, sociology is a good choice for her.","考慮到她對人的興趣，社會學對她來說是個好選擇。","Considering 是慣用分詞片語，表示「考慮到……」，不需要和主要子句主詞一致。"],
 ["I'm proud of having been accepted into the sociology department.","我以被社會學系錄取為榮。","having been p.p. 是完成被動動名詞：「被錄取」是被動，而且發生在「感到驕傲」之前。"]],
 "soci=社會；同伴|-o-=連接|log=學問|-y=名詞字尾","研究社會的學問","👥|社會學"],
/* ---------- 字根 path：感覺、疾病 ---------- */
["sympathy","n.","同情；慰問",[
 ["We expressed our sympathy to the family.","我們向那家人表達了慰問。","express sympathy to 人 表示「向某人表示同情、慰問」。"],
 ["Not wanting any sympathy, he kept his illness a secret.","因為不想要任何同情，他把病情當成祕密。","否定分詞構句：Not 放在分詞前面；keep + 受詞 + 補語。"],
 ["I have no sympathy for people who cheat.","我一點都不同情作弊的人。","have sympathy for 人 表示「同情某人」；who 引導限定關係子句。"]],
 "sym-=一起|path=感覺|-y=名詞字尾","和別人有一樣的感覺 → 同情","🤲|同情"],
["sympathetic","adj.","同情的；體諒的",[
 ["She was sympathetic when I told her about my problem.","我告訴她我的困擾時，她很能體諒。","sympathetic 表示「有同情心的、體諒的」，不是「感覺很好的」。"],
 ["Being treated in a sympathetic way, the patient felt calmer.","受到體貼的對待，病人覺得比較平靜。","Being treated 是被動分詞構句，強調當時「正被對待」。"],
 ["The teacher seemed sympathetic to his situation.","老師似乎很體諒他的處境。","be sympathetic to + 名詞 表示「對……表示同情或支持」。"]],
 "sym-=一起|path=感覺|-etic=形容詞字尾","和別人一起感覺的 → 同情的","🫂|體諒"],
["sympathize","v.","同情；體諒",[
 ["I sympathize with you, but rules are rules.","我能體諒你，但規定就是規定。","sympathize with 人 表示「同情、體諒某人」。"],
 ["Having lost a pet herself, she could sympathize with Tom.","她自己也失去過寵物，所以能體會湯姆的心情。","Having lost 表示較早的經驗，是她能體會的原因。"],
 ["It's hard to sympathize with someone who never says sorry.","很難去同情一個從不道歉的人。","虛主詞 It 代替後面的 to sympathize ...。"]],
 "sym-=一起|path=感覺|-ize=動詞字尾","使自己和別人一起感覺 → 同情","💞|體諒"],
["empathy","n.","同理心",[
 ["Empathy means putting yourself in someone else's shoes.","同理心就是設身處地為別人著想。","mean + V-ing 表示「意思是……」；put oneself in someone's shoes 是「站在別人的立場」。"],
 ["Strictly speaking, sympathy and empathy are not the same.","嚴格來說，同情和同理心並不相同。","Strictly speaking 是慣用分詞片語，表示「嚴格來說」。"],
 ["Her empathy made the new students feel welcome.","她的同理心讓新同學覺得受歡迎。","make + 受詞 + 原形動詞：made ... feel。"]],
 "em-=在……裡面|path=感覺|-y=名詞字尾","走進別人的感覺裡 → 同理心","🧡|同理心"],
["empathize","v.","感同身受；有同理心",[
 ["Good doctors empathize with their patients.","好醫生能對病人感同身受。","empathize with 人 表示「對某人感同身受」。"],
 ["Having been bullied before, he can easily empathize with the victims.","他以前被霸凌過，所以很容易對受害者感同身受。","Having been p.p. 完成被動分詞構句：「被霸凌」是被動，而且發生在過去。"],
 ["Try to empathize with others instead of judging them.","試著體會別人的感受，而不是批評他們。","instead of 是介系詞，後面接動名詞 judging。"]],
 "em-=在……裡面|path=感覺|-ize=動詞字尾","進入別人的感覺 → 感同身受","🤝|感同身受"],
["apathy","n.","冷漠；漠不關心",[
 ["Voter apathy is a problem in many countries.","選民冷漠是許多國家的問題。","voter apathy 是名詞修飾名詞，表示「選民的冷漠」。"],
 ["His apathy toward schoolwork worried his parents.","他對課業漠不關心，讓爸媽很擔心。","apathy toward + 名詞 表示「對……冷漠」。"],
 ["There being so much apathy, few people joined the cleanup.","因為大家都很冷漠，很少人參加清掃活動。","獨立分詞構句：There being ... = Because there was ...；there 要保留，不能省略。"]],
 "a-=沒有|path=感覺|-y=名詞字尾","沒有感覺 → 冷漠","😶|冷漠"],
["apathetic","adj.","冷漠的；漠不關心的",[
 ["Many young people are apathetic about politics.","許多年輕人對政治漠不關心。","be apathetic about + 名詞 表示「對……漠不關心」。"],
 ["Being apathetic, he didn't care who won.","因為漠不關心，他不在乎誰贏。","Being + 形容詞 的分詞構句 = Because he was apathetic。"],
 ["I can't understand him being so apathetic about his future.","我無法理解他對自己的未來那麼漠不關心。","him being：動名詞在受詞位置時，意義主詞可以用受格 him 或所有格 his。"]],
 "a-=沒有|path=感覺|-etic=形容詞字尾","沒有感覺的 → 漠不關心的","🥱|漠不關心"],
["pathetic","adj.","可悲的；可憐的",[
 ["What a pathetic excuse!","多麼可悲的藉口！","感嘆句：What + a + 形容詞 + 名詞！"],
 ["The lost puppy looked pathetic in the rain.","那隻走失的小狗在雨中看起來好可憐。","look + 形容詞 表示「看起來……」。"],
 ["The team was pathetic last season, having lost every game.","這支球隊上一季很慘，每場比賽都輸了。","分詞構句也可以放句尾補充原因：having lost = because it had lost。"]],
 "path=感覺|-etic=形容詞字尾","引起強烈感覺的 → 令人可憐的","😢|可悲"],
["telepathy","n.","心電感應",[
 ["The twins seem to have some kind of telepathy.","這對雙胞胎好像有某種心電感應。","seem to V 表示「似乎……」。"],
 ["It must be telepathy! We both said the same word at the same time.","一定是心電感應！我們同時說出了同一個字。","must be 表示對現在有把握的推測。"],
 ["Do you believe in telepathy?","你相信心電感應嗎？","believe in 表示「相信……的存在」，和 believe 某人說的話不同。"]],
 "tele-=遠|path=感覺|-y=名詞字尾","隔著遠距離感覺到 → 心電感應","📡|心電感應"],
/* ---------- 字根 phil：愛 ---------- */
["philosophy","n.","哲學；人生觀",[
 ["Philosophy is the love of wisdom.","哲學就是對智慧的愛。","philosophy 來自希臘文「愛智慧」。"],
 ["My philosophy of life is to enjoy every moment.","我的人生哲學是享受每一刻。","不定詞 to enjoy ... 當主詞補語。"],
 ["Having studied philosophy, she always asks 'why'.","讀過哲學的她，總是會問「為什麼」。","Having studied 表示先前的學習經歷。"]],
 "phil=愛|-o-=連接|soph=智慧|-y=名詞字尾","愛智慧 → 哲學","🦉|哲學"],
["philosopher","n.","哲學家",[
 ["The Greek philosopher Socrates is said to have asked his students endless questions.","據說希臘哲學家蘇格拉底不斷地問他的學生問題。","be said to have p.p.：「問問題」是很久以前的事，「據說」是現在，所以用完成式不定詞。"],
 ["Considering his age, the boy talks like a philosopher.","以他的年紀來說，這男孩講話像個哲學家。","Considering + 名詞 表示「就……而言、考慮到……」。"],
 ["Confucius was a great philosopher and teacher.","孔子是偉大的哲學家和老師。","a great philosopher and teacher 指同一個人，所以只有一個 a。"]],
 "phil=愛|soph=智慧|-er=人","愛智慧的人 → 哲學家","🧔|哲學家"],
["philosophical","adj.","哲學的；看得開的",[
 ["We had a philosophical discussion about happiness.","我們針對幸福進行了一場哲學討論。","have a discussion about + 主題 表示「討論某事」。"],
 ["He was philosophical about losing the game.","他對輸掉比賽看得很開。","philosophical 也可以表示「達觀、看得開的」；about 後面接動名詞。"],
 ["Asked a philosophical question, the student paused to think.","被問了一個哲學問題，那位學生停下來思考。","被動分詞構句 Asked ... = When he was asked ...；pause to V 表示「停下來去做某事」。"]],
 "phil=愛|soph=智慧|-ical=形容詞字尾","和愛智慧有關的 → 哲學的","🤔|哲學的"],
["philanthropist","n.","慈善家",[
 ["The philanthropist donated millions to build hospitals.","那位慈善家捐了數百萬元蓋醫院。","to build 是表示目的的不定詞。"],
 ["Having been helped by strangers as a child, she became a philanthropist.","她小時候受過陌生人幫助，後來成了慈善家。","Having been helped 是完成被動分詞構句：受助（被動）發生在成為慈善家之前。"],
 ["Not wanting to be famous, the philanthropist gave money secretly.","因為不想出名，那位慈善家悄悄地捐錢。","否定分詞構句：Not wanting ... = Because he didn't want ...。"]],
 "phil=愛|anthrop=人類|-ist=人","愛人類的人 → 慈善家","🎁|慈善家"],
["philanthropy","n.","慈善；博愛",[
 ["He is known for his philanthropy.","他以樂善好施聞名。","be known for + 名詞 表示「以……聞名」。"],
 ["Philanthropy is not just for the rich.","慈善不是有錢人的專利。","the + 形容詞 表示一群人：the rich = rich people。"],
 ["Her philanthropy is believed to have changed thousands of lives.","她的慈善事業據信改變了數千人的生命。","be believed to have p.p.：完成式不定詞表示「改變」已經發生。"]],
 "phil=愛|anthrop=人類|-y=名詞字尾","愛人類的行動 → 慈善","💝|慈善"],
["philharmonic","adj./n.","愛樂的；愛樂樂團",[
 ["The Taipei Philharmonic is giving a concert tonight.","台北愛樂今晚有一場音樂會。","現在進行式可以表示已經安排好的未來。"],
 ["Being invited to play with the philharmonic orchestra was a dream come true.","受邀和愛樂樂團一起演奏是夢想成真。","Being invited ... 是被動動名詞片語當主詞（不是分詞構句），後面直接接動詞 was。"],
 ["Weather permitting, the philharmonic will perform in the park.","天氣允許的話，愛樂樂團將在公園演出。","Weather permitting 是獨立分詞構句，= If the weather permits；weather 前面不加 the。"]],
 "phil=愛|harmon=和諧；音樂|-ic=……的","愛好和諧音樂的 → 愛樂","🎻|愛樂樂團"],
/* ---------- 字根 psych：心靈 ---------- */
["psychology","n.","心理學；心理",[
 ["She wants to study psychology in college.","她想在大學讀心理學。","psych 的 p 不發音，唸 /saɪ/。"],
 ["Judging from his questions, he must be interested in psychology.","從他問的問題判斷，他一定對心理學有興趣。","Judging from 慣用分詞片語；must be 表示有把握的推測。"],
 ["Understanding a little psychology helps us get along with others.","懂一點心理學有助於我們和別人相處。","動名詞片語當主詞，視為單數；help + 受詞 + 原形動詞。"]],
 "psych=心靈|-o-=連接|log=學問|-y=名詞字尾","研究心靈的學問 → 心理學","🧠|心理學"],
["psychologist","n.","心理學家；心理師",[
 ["The psychologist is said to have helped hundreds of teenagers.","據說這位心理師幫助過數百名青少年。","be said to have p.p.：「幫助過」比「據說」更早。"],
 ["Psychologists say that being praised can increase motivation.","心理學家說，被稱讚能提高動機。","being praised 是被動動名詞，當 that 子句的主詞。"],
 ["Having talked to a psychologist, I felt much better.","和心理師談過之後，我感覺好多了。","Having talked 表示「談話」先發生；much 加強比較級 better。"]],
 "psych=心靈|log=學問|-ist=人","研究心靈的人 → 心理學家","🧑‍🏫|心理學家"],
["psychological","adj.","心理的",[
 ["Stress can cause both physical and psychological problems.","壓力會造成生理和心理的問題。","both A and B 表示「A 和 B 兩者都」。"],
 ["The fear of failing is mostly psychological.","害怕失敗大多是心理作用。","fear of + V-ing 表示「害怕……」。"],
 ["Having been under psychological pressure for months, he finally took a break.","承受了好幾個月的心理壓力，他終於休息了一下。","Having been under ... 完成式分詞構句，表示持續到那時的狀態。"]],
 "psych=心靈|log=學問|-ical=形容詞字尾","和心靈有關的 → 心理的","💭|心理的"],
["psychiatrist","n.","精神科醫師",[
 ["A psychiatrist can prescribe medicine, but a psychologist usually can't.","精神科醫師可以開藥，但心理師通常不行。","比較 psychiatrist（醫師）和 psychologist（心理師）的差別。"],
 ["Having been diagnosed with depression, she sees a psychiatrist every month.","被診斷出憂鬱症後，她每個月都去看精神科醫師。","Having been diagnosed：「被診斷」是被動，而且發生在先。"],
 ["There is nothing wrong with seeing a psychiatrist.","看精神科醫師沒有什麼不對。","with 是介系詞，後面接動名詞 seeing。"]],
 "psych=心靈|iatr=治療|-ist=人","治療心靈的人 → 精神科醫師","🩺|精神科醫師"],
["psychic","adj./n.","通靈的；靈媒",[
 ["The psychic claimed to have seen my future.","那位靈媒聲稱看到了我的未來。","claim to have p.p.：完成式不定詞表示「看到」比「聲稱」更早。"],
 ["I'm not psychic, but I guess you're hungry.","我不會讀心術，但我猜你餓了。","psychic 當形容詞表示「有超能力的、會讀心的」。"],
 ["Frankly speaking, I don't believe in psychic powers.","坦白說，我不相信超能力。","Frankly speaking 是慣用分詞片語，表示「坦白說」。"]],
 "psych=心靈|-ic=……的","有心靈力量的 → 通靈的","🔮|通靈"],
/* ---------- 心理學與人際溝通 ---------- */
["resilience","n.","韌性；復原力",[
 ["Resilience is the ability to bounce back after failure.","韌性就是失敗後重新振作的能力。","the ability to V 表示「做某事的能力」；bounce back 表示「恢復、重新振作」。"],
 ["Having been rejected many times, the writer showed great resilience.","被拒絕了很多次，那位作家展現了驚人的韌性。","Having been rejected 是完成被動分詞構句：「被拒絕」是被動，而且發生在前。"],
 ["Sports can help teenagers build resilience.","運動能幫助青少年培養韌性。","help + 受詞 + 原形動詞；build resilience 是常用搭配。"]],
 "re-=往回|sili=跳|-ence=名詞字尾","被壓下去又跳回來 → 韌性","🌱|韌性"],
["introvert","n.","內向的人",[
 ["As an introvert, I need some quiet time after a party.","身為內向的人，我在派對之後需要一些安靜的時間。","as 在這裡是介系詞，表示「身為……」。"],
 ["Being an introvert, she prefers reading to chatting.","因為個性內向，她比較喜歡看書而不是聊天。","Being + 名詞 的分詞構句 = Because she is an introvert；prefer A to B 的 to 是介系詞，後面接 V-ing。"],
 ["Introverts are not necessarily shy.","內向的人不一定害羞。","not necessarily 是部分否定，表示「不一定」。"]],
 "intro-=向內|vert=轉","把注意力轉向自己內心 → 內向的人","🐢|內向"],
["depression","n.","憂鬱（症）；不景氣",[
 ["Depression is a common mental illness.","憂鬱症是常見的精神疾病。","depression 指疾病時通常不可數。"],
 ["He was proud of having overcome depression.","他以戰勝憂鬱症為榮。","having p.p. 完成式動名詞，表示「克服」發生在「感到驕傲」之前。"],
 ["The Great Depression began in 1929.","經濟大蕭條始於 1929 年。","depression 也可以指「經濟不景氣」。"]],
 "de-=向下|press=壓|-ion=名詞字尾","心情被往下壓 → 憂鬱","🌧️|憂鬱"],
["prejudice","n.","偏見",[
 ["We should judge people by their actions, not by prejudice.","我們應該根據行為來評斷人，而不是根據偏見。","judge 人 by + 名詞 表示「根據……評斷某人」。"],
 ["Having been treated with prejudice, he worked hard to prove himself.","因為曾受到偏見對待，他努力證明自己。","Having been treated 是完成被動分詞構句。"],
 ["There being so much prejudice against women, she had to fight for her rights.","因為對女性的偏見很多，她必須為自己的權利奮鬥。","There being 獨立分詞構句；prejudice against 表示「對……的偏見」。"]],
 "pre-=事先|jud=判斷|-ice=名詞字尾","還沒了解就事先判斷 → 偏見","🙈|偏見"],
["phobia","n.","恐懼症",[
 ["He has a phobia of spiders.","他有蜘蛛恐懼症。","a phobia of / about + 名詞 表示「對……的恐懼症」。"],
 ["Having been trapped in an elevator, she developed a phobia of small spaces.","被困在電梯裡之後，她得了幽閉恐懼症。","Having been trapped 是完成被動分詞構句：「被困住」發生在先。"],
 ["Many people with phobias can be helped by a therapist.","許多有恐懼症的人可以在治療師的協助下改善。","can be p.p. 是助動詞加被動。"]],
 "phob=害怕|-ia=病症","害怕到變成病 → 恐懼症","🕷️|恐懼症"],
["trauma","n.","創傷",[
 ["Some survivors suffered from trauma after the earthquake.","有些倖存者在地震後受創傷所苦。","suffer from 表示「受……之苦」。"],
 ["Having experienced trauma in childhood, he found it hard to trust people.","因為童年受過創傷，他發現很難相信別人。","find it + 形容詞 + to V：it 是虛受詞，代替後面的 to trust people。"],
 ["Talking about the trauma can be the first step toward healing.","談論這段創傷，可能是邁向痊癒的第一步。","動名詞片語當主詞；toward 是介系詞，後面接 healing。"]],
 "","","🩹|創傷"],
["self-esteem","n.","自尊心；自信",[
 ["Being praised can raise a child's self-esteem.","被稱讚能提高孩子的自尊心。","Being praised 是被動動名詞當主詞。"],
 ["People with low self-esteem often compare themselves with others.","自尊心低的人常常拿自己和別人比較。","compare A with B 表示「拿 A 和 B 比較」。"],
 ["Having been criticized all the time, she had low self-esteem.","因為一直被批評，她的自尊心很低。","Having been criticized 是完成被動分詞構句。"]],
 "self=自己|esteem=尊重","尊重自己 → 自尊心","🦁|自尊心"],
["insecure","adj.","沒有安全感的；不自信的",[
 ["She feels insecure about her appearance.","她對自己的外表沒有自信。","feel insecure about 表示「對……沒有安全感、不自信」。"],
 ["Being left alone, the child felt insecure.","被獨自留下，那孩子感到不安。","Being left 是被動分詞構句，強調當時「正被留下」。"],
 ["Many teenagers feel insecure about being judged by others.","許多青少年擔心被別人評斷。","about 後面接被動動名詞 being judged。"]],
 "in-=不|secure=安全的","不安全的 → 沒有安全感的","🥺|沒安全感"],
["interpersonal","adj.","人際的",[
 ["Interpersonal skills are as important as grades.","人際能力和成績一樣重要。","as + 形容詞 + as 表示「和……一樣」。"],
 ["Generally speaking, people with good interpersonal skills work well in teams.","一般來說，人際能力好的人在團隊中表現得好。","Generally speaking 是慣用分詞片語。"],
 ["She is good at dealing with interpersonal problems.","她很擅長處理人際問題。","be good at + V-ing。"]],
 "inter-=在……之間|person=人|-al=形容詞字尾","人與人之間的 → 人際的","🤝|人際"],
["perspective","n.","觀點；看法",[
 ["Try to see the problem from a different perspective.","試著從不同的觀點看這個問題。","from a ... perspective 表示「從……的角度」。"],
 ["Seen from her perspective, the decision makes sense.","從她的觀點來看，這個決定是合理的。","被動分詞構句：決定是「被看」的，用 Seen。"],
 ["Traveling abroad gave me a new perspective on life.","出國旅行給了我新的人生觀。","perspective on + 名詞 表示「對……的看法」。"]],
 "per-=穿過|spect=看|-ive=字尾","看穿事情的角度 → 觀點","🔭|觀點"],
["criticism","n.","批評",[
 ["He can't take criticism well.","他不太能接受批評。","take criticism 表示「接受批評」；criticism 通常不可數。"],
 ["Not used to receiving criticism, she cried after the meeting.","因為不習慣被批評，她在會後哭了。","Not used to ... = Because she was not used to ...；be used to 後面接 V-ing。"],
 ["Nobody enjoys being criticized in public, but useful criticism helps us grow.","沒人喜歡在公開場合被批評，但有用的批評能幫助我們成長。","enjoy 後面接動名詞；「被批評」是被動，用 being criticized。"]],
 "critic=評論者|-ism=名詞字尾","評論者說的話 → 批評","🗯️|批評"],
["compliment","n./v.","稱讚",[
 ["Thank you for the compliment.","謝謝你的稱讚。","pay 人 a compliment 表示「稱讚某人」。"],
 ["She is used to being complimented on her singing.","她已經習慣歌聲被稱讚了。","be used to + V-ing；being complimented 是被動動名詞；compliment 人 on 事。"],
 ["Having received a compliment from the coach, Tim played even harder.","得到教練的稱讚後，提姆打得更賣力了。","Having received 表示先受到稱讚；even 加強比較級。"]],
 "","","👏|稱讚"],
["tolerance","n.","包容；忍耐",[
 ["Tolerance is the key to living in a diverse society.","包容是在多元社會中生活的關鍵。","the key to 的 to 是介系詞，後面接動名詞 living。"],
 ["Considering the noise, his tolerance is amazing.","考慮到那麼吵，他的忍耐力真驚人。","Considering + 名詞 表示「考慮到……」。"],
 ["We should show tolerance toward people with different opinions.","我們應該包容意見不同的人。","show tolerance toward 人 表示「對某人展現包容」。"]],
 "toler=忍受|-ance=名詞字尾","能忍受不同的聲音 → 包容","🕊️|包容"],
["mutual","adj.","相互的；共同的",[
 ["Friendship is based on mutual trust.","友誼建立在互信之上。","be based on 表示「建立在……之上」。"],
 ["We met through a mutual friend.","我們是透過共同的朋友認識的。","mutual friend 表示「雙方都認識的朋友」。"],
 ["There being mutual respect, the two teams played a fair game.","因為彼此尊重，兩隊打了一場公平的比賽。","There being 獨立分詞構句 = Because there was ...。"]],
 "mut=交換|-ual=形容詞字尾","互相交換的 → 相互的","🔄|互相"],
["isolation","n.","孤立；隔離",[
 ["Living in isolation can be bad for mental health.","孤立地生活可能對心理健康不好。","動名詞片語當主詞；in isolation 表示「孤立地」。"],
 ["Having been kept in isolation for a week, the patient was finally allowed to go home.","被隔離一週後，病人終於獲准回家。","Having been kept 是完成被動分詞構句；be allowed to V 表示「被允許」。"],
 ["Social media can cause a feeling of isolation.","社群媒體可能造成孤立感。","a feeling of + 名詞 表示「……的感覺」。"]],
 "isol=島|-ation=名詞字尾","像住在孤島上 → 孤立","🏝️|孤立"],
["loneliness","n.","寂寞",[
 ["Loneliness is different from being alone.","寂寞和獨處是不一樣的。","be different from 的 from 是介系詞，後面接動名詞 being alone。"],
 ["Having moved to a new city, she felt deep loneliness.","搬到新城市之後，她感到很深的寂寞。","Having moved 表示「搬家」先發生。"],
 ["Pets can help old people fight loneliness.","寵物能幫助老人對抗寂寞。","help + 受詞 + 原形動詞。"]],
 "lone=單獨的|-ly=形容詞字尾|-ness=名詞字尾","單獨一人的狀態 → 寂寞","🧍|寂寞"],
["extrovert","n.","外向的人",[
 ["My sister is an extrovert who loves meeting new people.","我姊姊是很外向的人，喜歡認識新朋友。","who 引導限定關係子句；love + V-ing。"],
 ["Generally speaking, extroverts get energy from being with others.","一般來說，外向的人從和別人相處中獲得能量。","Generally speaking 是慣用分詞片語；from 是介系詞，後面接動名詞 being。"],
 ["I can't imagine him being an extrovert; he hardly talks in class.","我無法想像他是外向的人，他上課幾乎不說話。","him being：imagine 後面的動名詞，意義主詞用受格 him 或所有格 his。"]],
 "extro-=向外|vert=轉","把注意力轉向外面 → 外向的人","🎉|外向"],
["overwhelm","v.","使不知所措；壓倒",[
 ["Don't let stress overwhelm you.","別讓壓力壓垮你。","let + 受詞 + 原形動詞。"],
 ["Overwhelmed by homework, Amy didn't know where to start.","被作業壓得喘不過氣，艾美不知道從哪裡開始。","被動分詞構句：(Being) Overwhelmed = Because she was overwhelmed。"],
 ["I hate being overwhelmed by too many choices.","我討厭被太多選擇搞得不知所措。","hate + being p.p. 是被動動名詞。"]],
 "over-=在上面|whelm=淹沒","從上面整個淹沒 → 使不知所措","🌊|招架不住"],
["reassure","v.","使安心",[
 ["The doctor reassured me that it was nothing serious.","醫生安慰我說沒什麼大礙。","reassure 人 that 子句 表示「向某人保證……讓他安心」。"],
 ["Reassured by her smile, the boy stopped crying.","她的微笑讓男孩安心，他不哭了。","被動分詞構句：男孩是「被安撫」的，用 Reassured。"],
 ["Children need to be reassured that they are loved.","孩子需要被再三保證他們是被愛的。","need to be p.p. 是被動不定詞。"]],
 "re-=再|assure=保證","再保證一次 → 使安心","🤗|安心"],
["body language","n.","肢體語言",[
 ["Judging from his body language, he is nervous.","從他的肢體語言判斷，他很緊張。","Judging from 是慣用分詞片語。"],
 ["Body language can say more than words.","肢體語言能說得比言語更多。","more than 表示「比……更多」。"],
 ["Crossing your arms may be seen as unfriendly body language.","交叉雙臂可能被視為不友善的肢體語言。","may be seen as：助動詞加被動；be seen as 表示「被視為」。"]],
 "","","🙆|肢體語言"],
/* ---------- 哲學與思考 ---------- */
["rational","adj.","理性的",[
 ["Let's make a rational decision instead of an emotional one.","我們來做個理性的決定，而不是情緒化的決定。","one 代替前面的 decision。"],
 ["Humans are said to be rational animals.","人類據說是理性的動物。","be said to V：簡單式不定詞。"],
 ["Being calm and rational, she solved the conflict quickly.","她冷靜又理性，很快就解決了衝突。","Being + 形容詞 的分詞構句。"]],
 "ration=理性；計算|-al=形容詞字尾","會計算、講理的 → 理性的","⚖️|理性"],
["irrational","adj.","不理性的；沒來由的",[
 ["His fear of cats is irrational.","他怕貓是沒來由的。","irrational 表示「不合理的、無法解釋的」。"],
 ["Feeling angry, he made an irrational choice.","因為很生氣，他做了不理性的選擇。","分詞構句 Feeling angry = Because he felt angry。"],
 ["It is irrational to blame yourself for everything.","把每件事都怪在自己身上是不理性的。","blame A for B 表示「把 B 怪罪於 A」。"]],
 "ir-=不|ration=理性|-al=形容詞字尾","不理性的","🌀|不理性"],
["intuition","n.","直覺",[
 ["My intuition told me something was wrong.","我的直覺告訴我有些不對勁。","tell + 人 + 子句。"],
 ["Trusting her intuition, she turned down the offer.","她相信自己的直覺，拒絕了那個提議。","分詞構句 Trusting ... = Because she trusted ...；turn down 表示「拒絕」。"],
 ["Judging from experience, intuition is not always reliable.","從經驗判斷，直覺不一定可靠。","not always 是部分否定，表示「不一定」。"]],
 "in-=向內|tuit=看|-ion=名詞字尾","往心裡面看 → 直覺","✨|直覺"],
["pessimistic","adj.","悲觀的",[
 ["Don't be so pessimistic; things will get better.","別那麼悲觀，事情會好轉的。","pessimistic 的相反是 optimistic（樂觀的）。"],
 ["Having failed twice, he became pessimistic about his future.","失敗兩次之後，他對未來變得悲觀。","Having failed 表示失敗先發生；be pessimistic about 表示「對……悲觀」。"],
 ["Her being pessimistic all the time made her friends tired.","她總是那麼悲觀，讓朋友們很累。","動名詞片語放句首當主詞，意義主詞用所有格 Her。"]],
 "pessim=最壞的|-ist=……的人|-ic=形容詞字尾","總是往最壞的想 → 悲觀的","☁️|悲觀"],
["conscious","adj.","意識到的；有意識的",[
 ["She is conscious of being watched.","她意識到自己正被注視著。","be conscious of + being p.p.：被動動名詞。"],
 ["Being conscious of his weakness, he practiced every day.","他意識到自己的弱點，所以每天練習。","Being conscious ... = Because he was conscious ...。"],
 ["The patient is still conscious after the accident.","意外發生後，病人仍然有意識。","conscious 也可以表示「清醒、有知覺的」。"]],
 "con-=完全|sci=知道|-ous=形容詞字尾","完全知道的 → 意識到的","💡|意識到"],
["subconscious","adj./n.","潛意識（的）",[
 ["Dreams are said to come from the subconscious.","夢據說來自潛意識。","the subconscious 當名詞，表示「潛意識」。"],
 ["Our subconscious mind affects our choices.","我們的潛意識影響我們的選擇。","affect 是動詞「影響」，effect 是名詞「效果」。"],
 ["Not being aware of it, we often follow subconscious habits.","在沒有察覺的情況下，我們常常依循潛意識的習慣。","否定分詞構句 Not being aware = Because we are not aware。"]],
 "sub-=在下面|con-=完全|sci=知道|-ous=形容詞字尾","在意識底下的 → 潛意識的","🧊|潛意識"],
["ethics","n.","倫理學；道德規範",[
 ["Medical ethics require doctors to protect patients' privacy.","醫學倫理要求醫生保護病人的隱私。","ethics 指「道德規範」時用複數動詞。"],
 ["Ethics is a branch of philosophy.","倫理學是哲學的一個分支。","ethics 指「學科」時視為單數，用 is。"],
 ["There being no clear rules, the scientists followed their own ethics.","因為沒有明確規定，科學家們依循自己的道德標準。","There being 獨立分詞構句。"]],
 "eth=風俗；品格|-ics=學問","研究品格的學問 → 倫理學","📜|倫理"],
["moral","adj./n.","道德的；寓意",[
 ["The moral of the story is that honesty is the best policy.","這個故事的寓意是誠實為上策。","the moral of the story 表示「故事的寓意」；that 子句當主詞補語。"],
 ["We have a moral duty to help people in need.","我們有道德責任幫助有需要的人。","in need 表示「有需要的」。"],
 ["Having been taught moral values at home, he never cheats.","在家裡被教導過道德價值觀，他從不作弊。","Having been taught 是完成被動分詞構句。"]],
 "mor=風俗；習慣|-al=形容詞字尾","合乎風俗習慣的 → 道德的","🧭|道德"],
["virtue","n.","美德",[
 ["Patience is a virtue.","耐心是一種美德。","virtue 是可數名詞。"],
 ["Considered a virtue in many cultures, humility is highly valued.","謙虛在許多文化中被視為美德，受到高度重視。","被動分詞構句 Considered ... = Because it is considered ...。"],
 ["By virtue of hard work, he passed the exam.","憑藉努力，他通過了考試。","by virtue of 表示「憑藉、由於」。"]],
 "virt=力量|-ue=名詞字尾","內在的力量 → 美德","🌟|美德"],
["argument","n.","爭吵；論點",[
 ["I had an argument with my brother last night.","我昨晚和弟弟吵了一架。","have an argument with 人 表示「和某人爭吵」；注意 argue 去 e 再加 -ment。"],
 ["Your argument would be stronger with more evidence.","有更多證據，你的論點會更有力。","with + 名詞 也可以表示條件：= if you had more evidence。"],
 ["Having heard both arguments, the judge made a decision.","聽了雙方的論點之後，法官做出了判決。","Having heard 表示「聽完」先發生。"]],
 "argu=說清楚；證明|-ment=名詞字尾","把理由說清楚 → 論點","🗣️|論點"],
["assumption","n.","假設；認定",[
 ["Don't make assumptions about people based on their looks.","別根據外表對人妄下定論。","make an assumption 表示「做假設」；based on 表示「根據」。"],
 ["Judging from the data, our assumption was wrong.","從數據判斷，我們的假設是錯的。","Judging from 是慣用分詞片語。"],
 ["The plan is based on the assumption of there being enough money.","這個計畫建立在資金足夠的假設上。","介系詞 of 後面接 there being：there 是動名詞 being 的意義主詞。"]],
 "as-=朝向|sum=拿取|-ption=名詞字尾","先拿來當作真的 → 假設","❔|假設"],
["contagious","adj.","傳染性的；有感染力的",[
 ["The flu is highly contagious.","流感的傳染力很強。","highly 修飾形容詞，表示「非常」。"],
 ["Her laughter is contagious.","她的笑聲很有感染力。","contagious 也可以比喻情緒、笑聲「會傳染的」。"],
 ["Being contagious, the patient was kept away from other people.","因為具有傳染力，那位病人被和其他人隔開。","Being + 形容詞 的分詞構句 = Because the patient was contagious；was kept 是被動。"]],
 "con-=一起|tag=接觸|-ious=形容詞字尾","一接觸就會一起染上 → 傳染性的","🤧|會傳染"],
["reflection","n.","反省；倒影",[
 ["She saw her reflection in the lake.","她看見湖中自己的倒影。","reflection 表示「倒影」。"],
 ["After some reflection, he admitted having made a mistake.","經過一番反省，他承認自己犯了錯。","admit + having p.p.：完成式動名詞，表示「犯錯」比「承認」更早。"],
 ["Writing a diary is a good way of self-reflection.","寫日記是自我反省的好方法。","a way of + 名詞／V-ing 表示「……的方法」。"]],
 "re-=往回|flect=彎曲|-ion=名詞字尾","光線彎回來 → 倒影；思緒折回來 → 反省","🌅|反思"],
["ponder","v.","沉思；仔細考慮",[
 ["She pondered the question for a long time.","她把這個問題想了很久。","ponder 可以直接接受詞，也可以說 ponder over / on。"],
 ["Having pondered the meaning of life, the philosopher wrote a book.","沉思過人生的意義之後，那位哲學家寫了一本書。","Having pondered 表示「沉思」先發生，再寫書。"],
 ["Weather permitting, I like to sit by the lake and ponder.","天氣許可的話，我喜歡坐在湖邊沉思。","Weather permitting 是獨立分詞構句，= If the weather permits。"]],
 "pond=重量；秤|-er=動詞字尾","在心裡秤一秤輕重 → 仔細考慮","@s221_meditate"],
["skeptical","adj.","懷疑的",[
 ["Scientists are skeptical of the new claim.","科學家對這個新說法抱持懷疑。","be skeptical of / about 表示「對……懷疑」。"],
 ["Having been cheated before, he is skeptical about online ads.","以前被騙過，他對網路廣告很懷疑。","Having been cheated 是完成被動分詞構句。"],
 ["I'm skeptical about him being able to finish on time.","我懷疑他能否準時完成。","介系詞 about 後面的動名詞，意義主詞可以用 him 或 his。"]],
 "skept=仔細看|-ical=形容詞字尾","一直仔細看、不輕易相信 → 懷疑的","🤨|懷疑"],
["pharmacy","n.","藥局；藥學",[
 ["You can buy this medicine at any pharmacy.","你可以在任何一家藥局買到這種藥。","at + 地點 表示「在……」。"],
 ["Having picked up the medicine at the pharmacy, Dad drove home.","在藥局拿完藥之後，爸爸開車回家。","Having picked up 表示先拿藥、後回家。"],
 ["My cousin is studying pharmacy at university.","我表姊在大學讀藥學。","pharmacy 也可以表示「藥學」這門學科。"]],
 "pharmac=藥|-y=名詞字尾","賣藥、研究藥的地方 → 藥局；藥學","🏥|藥局"],
["paradox","n.","矛盾；悖論",[
 ["It is a paradox that the more choices we have, the less happy we feel.","我們擁有的選擇越多，反而越不快樂，這是個矛盾。","the + 比較級 ..., the + 比較級 ... 表示「越……就越……」。"],
 ["Strictly speaking, this is not a real paradox.","嚴格來說，這不是真正的悖論。","Strictly speaking 是慣用分詞片語。"],
 ["Philosophers enjoy discussing paradoxes.","哲學家喜歡討論悖論。","enjoy + V-ing；paradox 的複數加 es。"]],
 "para-=違反|dox=看法","違反一般看法 → 矛盾","♾️|矛盾"],
["principle","n.","原則；原理",[
 ["Honesty is one of my principles.","誠實是我的原則之一。","one of + 複數名詞。"],
 ["Never having broken his principles, he is respected by everyone.","因為從沒違背過自己的原則，他受到大家尊敬。","Never having p.p.：否定的完成式分詞構句，never / not 放在 having 前面。"],
 ["Don't confuse principle with principal.","別把 principle（原則）和 principal（校長）搞混。","confuse A with B 表示「把 A 和 B 搞混」。"]],
 "prin=第一|cip=拿取|-le=名詞字尾","最先要拿好的東西 → 原則","📏|原則"],
/* ---------- 醫療與身心健康 ---------- */
["ambulance","n.","救護車",[
 ["Call an ambulance!","快叫救護車！","ambulance 開頭是母音，前面用 an。"],
 ["Having been hit by a car, the man was taken to the hospital by ambulance.","被車撞了之後，那名男子被救護車送到醫院。","Having been hit 是完成被動分詞構句；by ambulance 不加冠詞。"],
 ["Drivers must give way to an ambulance.","駕駛必須讓路給救護車。","give way to 表示「讓路給……」。"]],
 "ambul=走動|-ance=名詞字尾","會到處跑的醫療車 → 救護車","🚑|救護車"],
["clinical","adj.","臨床的",[
 ["Clinical depression is more serious than just feeling sad.","臨床憂鬱症比單純的難過嚴重得多。","比較級 more serious than；than 後面接動名詞片語。"],
 ["The new drug is expected to be tested in clinical trials next year.","這種新藥預計明年進行臨床試驗。","被動不定詞 to be tested：藥是「被測試」的。"],
 ["Having worked in a hospital for years, she has a lot of clinical experience.","在醫院工作多年，她有豐富的臨床經驗。","Having worked 表示持續到現在之前的經歷。"]],
 "clin=床|-ical=形容詞字尾","在病床邊的 → 臨床的","🧑‍⚕️|臨床"],
["jealousy","n.","嫉妒",[
 ["Jealousy can destroy a friendship.","嫉妒會摧毀友誼。","jealousy 通常不可數。"],
 ["Not wanting to show her jealousy, she smiled and said congratulations.","不想表現出嫉妒，她微笑著說恭喜。","否定分詞構句 Not wanting ... = Because she didn't want ...。"],
 ["There is no need for jealousy; everyone has their own strengths.","沒有必要嫉妒，每個人都有自己的長處。","there is no need for + 名詞 表示「沒有必要……」。"]],
 "jeal=熱切|-ous=形容詞字尾|-y=名詞字尾","熱切地想要別人擁有的 → 嫉妒","💚|嫉妒"],
["disorder","n.","失調；疾病",[
 ["She has an eating disorder.","她有飲食失調的問題。","eating disorder 表示「飲食失調」。"],
 ["Sleep disorders can affect your mood.","睡眠障礙會影響你的心情。","disorder 指疾病時是可數名詞。"],
 ["Not having been treated in time, his disorder became worse.","因為沒有及時接受治療，他的病變嚴重了。","Not having been p.p. 是否定的完成被動分詞構句。"]],
 "dis-=不|order=秩序","失去秩序 → 失調","⚠️|失調"],
["insomnia","n.","失眠",[
 ["Drinking coffee at night may cause insomnia.","晚上喝咖啡可能導致失眠。","動名詞片語當主詞。"],
 ["Having suffered from insomnia for months, she finally saw a doctor.","失眠了好幾個月之後，她終於去看醫生。","Having suffered 表示持續到看醫生之前的狀態。"],
 ["Stress is one of the main causes of insomnia.","壓力是失眠的主要原因之一。","one of the + 複數名詞。"]],
 "in-=沒有|somn=睡眠|-ia=病症","沒有睡眠的病 → 失眠","🛌|失眠"],
["subjective","adj.","主觀的",[
 ["Beauty is subjective.","美是主觀的。","subjective 的相反是 objective（客觀的）。"],
 ["Strictly speaking, your opinion is too subjective.","嚴格來說，你的意見太主觀了。","Strictly speaking 是慣用分詞片語。"],
 ["Not wanting to be subjective, the judge listened to both sides.","因為不想太主觀，法官聽取了雙方的說法。","否定分詞構句 Not wanting ...；to be subjective 是不定詞當 want 的受詞。"]],
 "sub-=在下面|ject=丟|-ive=形容詞字尾","從自己（主體）出發看事情的 → 主觀的","👓|主觀"],
["therapist","n.","治療師",[
 ["The therapist listened patiently to the boy.","治療師耐心地聽那個男孩說話。","listen to 人 表示「聽某人說話」。"],
 ["Talking to a therapist helped her understand her feelings.","和治療師談話幫助她理解自己的感受。","動名詞片語當主詞；help + 受詞 + 原形動詞。"],
 ["Having been trained for years, the therapist knows how to calm people down.","受過多年訓練，這位治療師知道怎麼讓人平靜下來。","Having been trained 是完成被動分詞構句。"]],
 "therap=治療|-ist=人","做治療的人 → 治療師","@s221_therapy"],
["treatment","n.","治療；對待",[
 ["The new treatment is said to work well.","這種新療法據說效果很好。","work 在這裡表示「有效」。"],
 ["Having received treatment, the patient recovered quickly.","接受治療後，病人很快就康復了。","Having received 表示先接受治療。"],
 ["Everyone deserves equal treatment.","每個人都應該受到平等的對待。","treatment 也可以表示「對待」。"]],
 "treat=治療；對待|-ment=名詞字尾","對病的處理 → 治療","💊|治療"],
["cognitive","adj.","認知的",[
 ["Sleep is important for cognitive development.","睡眠對認知發展很重要。","cognitive development 表示「認知發展」。"],
 ["Playing chess is believed to improve cognitive skills.","下棋據信能提升認知能力。","be believed to V 表示「據信……」；動名詞片語當主詞。"],
 ["Generally speaking, cognitive abilities decline with age.","一般來說，認知能力會隨著年齡衰退。","Generally speaking 是慣用分詞片語。"]],
 "co-=完全|gnit=知道|-ive=形容詞字尾","和「知道」有關的 → 認知的","⚙️|認知"],
["fracture","n./v.","骨折；使斷裂",[
 ["The X-ray showed a fracture in his arm.","X 光顯示他的手臂骨折了。","a fracture in + 身體部位。"],
 ["Having fractured his leg, the player had to miss the whole season.","因為腿骨折，那位球員只好錯過整個球季。","Having fractured 表示「骨折」先發生。"],
 ["She was worried about her son being badly hurt, but it was only a small fracture.","她擔心兒子傷得很重，但只是輕微骨折。","about 後面的動名詞片語，意義主詞是 her son。"]],
 "fract=打破|-ure=名詞字尾","骨頭被打破 → 骨折","🦴|骨折"],
["dose","n.","劑量；一劑",[
 ["Take one dose of this medicine three times a day.","這種藥一天服用三次，每次一劑。","a dose of + 藥 表示「一劑……」。"],
 ["Having been given too large a dose, the patient felt dizzy.","被給了太大的劑量，病人感到頭暈。","Having been given 是完成被動分詞構句；注意 too + 形容詞 + a + 名詞 的語序。"],
 ["A small dose of humor can ease the tension.","一點點幽默就能緩和緊張的氣氛。","dose 也能比喻「一點、一份」；ease 表示「緩和」。"]],
 "","","💊|劑量"],
["physician","n.","內科醫師",[
 ["You should consult a physician before taking this medicine.","吃這種藥之前，你應該先諮詢醫師。","before 後面接動名詞 taking。"],
 ["The physician is said to have saved many lives during the war.","據說這位醫生在戰爭期間救了很多人。","be said to have p.p.。"],
 ["Physicians usually treat illnesses with medicine, while surgeons perform operations.","內科醫師通常用藥治病，而外科醫師則動手術。","while 表示對比；physicist 是「物理學家」，別搞混。"]],
 "physic=醫學|-ian=人","從事醫學的人 → 內科醫師","@s221_clinic"],
["fatigue","n.","疲勞",[
 ["Lack of sleep can cause fatigue.","缺乏睡眠會導致疲勞。","lack of + 名詞 表示「缺乏……」。"],
 ["Overcome by fatigue, he fell asleep at his desk.","被疲勞擊垮，他在書桌前睡著了。","被動分詞構句：Overcome 是過去分詞，= Because he was overcome by fatigue。"],
 ["There being no time to rest, the nurses kept working despite their fatigue.","因為沒有時間休息，護理師們不顧疲勞繼續工作。","There being 獨立分詞構句；despite 是介系詞，後面接名詞。"]],
 "","","😩|疲勞"],
["contemplate","v.","仔細考慮；沉思",[
 ["She is contemplating studying abroad.","她正在考慮出國讀書。","contemplate 後面接動名詞，不接不定詞。"],
 ["Having contemplated the problem all night, he finally found an answer.","把問題想了一整晚之後，他終於找到答案。","Having contemplated 表示「沉思」先發生，再找到答案。"],
 ["Considering the risks, you should contemplate the plan carefully.","考慮到風險，你應該仔細斟酌這個計畫。","Considering + 名詞 是慣用分詞片語，表示「考慮到……」。"]],
 "con-=完全|templ=神殿；觀察之處|-ate=動詞字尾","在神殿裡專心觀察 → 沉思","🕯️|沉思"],
["hostile","adj.","有敵意的；不友善的",[
 ["The new student felt that his classmates were hostile.","那位新同學覺得班上同學很有敵意。","feel that + 子句 表示「覺得……」。"],
 ["Being treated in a hostile way, he decided to leave the group.","受到不友善的對待，他決定離開那個團體。","Being treated 是被動分詞構句，強調當時正被對待。"],
 ["Judging from his hostile tone, he is still angry.","從他充滿敵意的語氣判斷，他還在生氣。","Judging from 是慣用分詞片語。"]],
 "host=敵人；陌生人|-ile=形容詞字尾","把人當敵人的 → 有敵意的","😠|敵意"],
["remedy","n.","療法；補救辦法",[
 ["Hot tea with honey is a popular remedy for a sore throat.","熱蜂蜜茶是緩解喉嚨痛的常見療法。","a remedy for + 病症。"],
 ["Having tried every home remedy, she finally went to the hospital.","試過所有偏方之後，她終於去了醫院。","home remedy 表示「家庭偏方」。"],
 ["Is there any remedy for this problem?","這個問題有任何補救辦法嗎？","remedy 也可以表示「補救辦法」。"]],
 "re-=再|med=治療|-y=名詞字尾","再次把病治好 → 療法","🍵|療法"],
["consult","v.","諮詢；請教",[
 ["You should consult your doctor if the pain continues.","如果持續疼痛，你應該請教醫生。","consult 人 表示「向某人請教」，後面直接接受詞。"],
 ["Having consulted several experts, the team changed its plan.","諮詢了幾位專家後，團隊改變了計畫。","Having consulted 表示先諮詢、後改變。"],
 ["I don't remember being consulted about this decision.","我不記得這個決定有人問過我的意見。","remember + being p.p.：記得（過去）曾經被……。"]],
 "con-=一起|sult=商量","一起商量 → 諮詢","📋|諮詢"],
["allergy","n.","過敏",[
 ["I have an allergy to peanuts.","我對花生過敏。","an allergy to + 名詞 表示「對……過敏」。"],
 ["Not knowing about her allergy, the waiter served her shrimp.","服務生不知道她會過敏，給她上了蝦子。","否定分詞構句 Not knowing = Because he didn't know。"],
 ["Spring is the season when allergies get worse.","春天是過敏會變嚴重的季節。","關係副詞 when 修飾 the season。"]],
 "all=其他的；不同|erg=作用|-y=名詞字尾","身體產生不一樣的反應 → 過敏","🤧|過敏"],
["well-being","n.","幸福；身心健康",[
 ["Exercise is good for both physical and mental well-being.","運動對身心健康都有益。","both A and B。"],
 ["Generally speaking, good sleep is the basis of well-being.","一般來說，良好的睡眠是身心健康的基礎。","Generally speaking 是慣用分詞片語。"],
 ["Parents care about their children's well-being.","父母關心孩子的幸福。","care about 表示「關心……」。"]],
 "well=好|being=存在；狀態","活得好的狀態 → 身心安適","🌈|身心安適"]
];

const S2_2_1_GRAMMAR = [
{ id:"g1", title:"分詞構句進階：Having p.p.、被動與否定",
  intro:"高二上學過基本的分詞構句（V-ing 主動、p.p. 被動）。這次升級三種進階型：Having p.p. 表示「比較早發生」，Being p.p. / Having been p.p. 表示被動，Not / Never 放在分詞前面表示否定。",
  table:[["形式","時間","主動／被動","例句"],["V-ing","和主要子句同時","主動","Feeling tired, I went to bed."],["Having p.p.","比主要子句更早","主動","Having finished my homework, I watched TV."],["(Being) p.p.","和主要子句同時","被動","(Being) Watched by everyone, he felt nervous."],["(Having been) p.p.","比主要子句更早","被動","(Having been) Warned twice, he stopped talking."],["Not / Never + 分詞","否定","主被動都可以","Not knowing what to do, she called her mom."]],
  points:[
   "Having p.p. 表示動作比主要動詞更早發生：Having lost his key, he couldn't get in. = Because he had lost his key, ...",
   "Being p.p. 是被動，強調「當時正在被……」：Being watched by so many people, he felt nervous. 不強調進行時，Being 常省略，只留 p.p.。",
   "Having been p.p. 是「完成＋被動」：Having been warned twice, he finally stopped talking. Having been 也常省略：Warned twice, he ...",
   "否定把 not / never 放在分詞的最前面：Not having slept well, I felt tired.／Never having seen snow, he was excited. 考試以 Not having p.p. 為標準答案。",
   "陷阱一：分詞構句的主詞必須和主要子句相同。Having been repaired, I can use my phone again. ✗（變成「我被修理」）→ Having been repaired, my phone works again. ✓",
   "陷阱二：Not knowing ... 放句首後面直接接動詞時，是動名詞當主詞，不是分詞構句：Not knowing the results made him nervous."],
  ex:[
   ["Having made a mistake, she offered a sincere apology.","犯了錯之後，她誠懇地道歉。","先犯錯、後道歉，用 Having + p.p.。"],
   ["Being treated in a sympathetic way, the patient felt calmer.","受到體貼的對待，病人覺得比較平靜。","病人「正被對待」，用 Being + p.p.。"],
   ["Having been bullied before, he can easily empathize with the victims.","他以前被霸凌過，所以很容易對受害者感同身受。","「被霸凌」是被動，而且更早發生：Having been + p.p.。"],
   ["Not having heard from his son for days, the father grew anxious.","好幾天沒有兒子的消息，父親越來越焦急。","否定的完成式分詞構句：Not 放在 having 前面。"],
   ["Never having broken his principles, he is respected by everyone.","因為從沒違背過自己的原則，他受到大家尊敬。","Never 也放在分詞的最前面。"]]},
{ id:"g2", title:"獨立分詞構句與慣用分詞片語",
  intro:"分詞構句的前後主詞不同時，分詞前面要留下自己的主詞，叫做獨立分詞構句。另外有一些慣用分詞片語（Generally speaking、Judging from、Considering…），說話者是一般人，不必和主要子句的主詞一致。",
  table:[["句型","意思","例句"],["名詞 + V-ing（主詞不同）","獨立分詞構句","The bus being late, we took a taxi."],["There being + 名詞","因為有／沒有……","There being no bus, we walked home."],["Weather permitting","天氣允許的話","Weather permitting, we'll go camping."],["Generally / Frankly / Strictly speaking","一般／坦白／嚴格來說","Generally speaking, practice makes perfect."],["Judging from / by","從……判斷","Judging from his face, he is upset."],["Considering / Given","考慮到；就……而言","Considering his age, he did well."],["Compared with / to","和……相比","Compared with last year, prices are higher."]],
  points:[
   "前後主詞不同時，分詞前面保留主詞：The bus being late, we took a taxi. 如果寫成 Being late, we took a taxi.，意思就變成「我們遲到」。",
   "There is / was 改成分詞構句時，there 一定要保留：There being no bus, we walked home.（不能只寫 Being no bus）。",
   "Weather permitting 是固定說法，weather 前面不加 the，= If the weather permits。也可以說 Time permitting（時間允許的話）。",
   "慣用分詞片語的主詞是「說話者或一般人」，不受主詞一致的限制：Judging from his accent, he is from Tainan.（判斷的是我，不是他）",
   "Considering 後面可以接名詞或 that 子句：Considering (that) he is only ten, he plays the piano very well.",
   "被動的獨立分詞構句也很常考：All things considered, it was a good trip.（全盤考慮之下）；陷阱：It being Sunday 的 It 不能省略，要寫成 It being Sunday, the shops were crowded."],
  ex:[
   ["There being so much apathy, few people joined the cleanup.","因為大家都很冷漠，很少人參加清掃活動。","There being = Because there was，there 要保留。"],
   ["Weather permitting, the philharmonic will perform in the park.","天氣允許的話，愛樂樂團將在公園演出。","Weather permitting = If the weather permits。"],
   ["Judging from his body language, he is nervous.","從他的肢體語言判斷，他很緊張。","判斷的人是說話者，不必和 he 一致。"],
   ["Strictly speaking, sympathy and empathy are not the same.","嚴格來說，同情和同理心並不相同。","Strictly speaking 是慣用分詞片語。"],
   ["Considering her interest in people, sociology is a good choice for her.","考慮到她對人的興趣，社會學對她來說是個好選擇。","Considering + 名詞：考慮到……。"]]},
{ id:"g3", title:"不定詞和動名詞的完成式與被動式",
  intro:"不定詞和動名詞也有「時間」和「主動被動」。完成式（to have p.p.／having p.p.）表示比主要動詞更早發生；被動式（to be p.p.／being p.p.）表示「被……」。",
  table:[["","主動","被動"],["不定詞（同時或之後）","to do","to be done"],["不定詞（更早發生）","to have done","to have been done"],["動名詞（同時）","doing","being done"],["動名詞（更早發生）","having done","having been done"]],
  points:[
   "to have p.p. 表示比主要動詞更早：He seems to have been ill. = It seems that he was / has been ill.（高一學過 seem to have p.p.，這次加上被動）",
   "to be p.p. 是被動不定詞：I hope to be chosen.／The work needs to be finished today.／She is expected to be elected.",
   "being p.p. 是被動動名詞，常接在 enjoy、avoid、mind、hate、remember、be used to 和介系詞後面：Nobody likes being laughed at.",
   "having p.p. 是完成動名詞，常接在 admit、deny、regret、be proud of 後面：He denied having taken the money.（拿錢在否認之前）",
   "陷阱一：need / want 後面接 V-ing 本身就有被動意思：My bike needs repairing. = My bike needs to be repaired.（不要寫成 needs being repaired）",
   "陷阱二：被動不要漏掉 be：The work is expected to finish by Friday. 指工作「自己結束」，要說「被完成」應寫 to be finished。"],
  ex:[
   ["The prologue is said to have been written by the author's wife.","據說序幕是作者的太太寫的。","to have been p.p.：完成＋被動。"],
   ["This catalog is expected to be updated next month.","這份目錄預計下個月更新。","to be p.p.：目錄是「被更新」的。"],
   ["I don't like being interrupted in the middle of my monologue.","我不喜歡在獨白講到一半時被打斷。","being p.p.：like 後接被動動名詞。"],
   ["After some reflection, he admitted having made a mistake.","經過一番反省，他承認自己犯了錯。","having p.p.：犯錯比承認更早。"],
   ["I'm proud of having been accepted into the sociology department.","我以被社會學系錄取為榮。","having been p.p.：完成＋被動的動名詞。"]]},
{ id:"g4", title:"動名詞的意義主詞：his / him + V-ing、there being",
  intro:"動名詞的動作如果不是句子的主詞做的，就要在動名詞前面放「意義主詞」，告訴讀者是誰在做這個動作。",
  table:[["位置","意義主詞用","例句"],["句首當主詞","所有格（his、my、Tom's）","His being late again made the teacher angry."],["動詞或介系詞後面","所有格或受格（his／him）","Do you mind my / me opening the window?"],["無生命或很長的名詞","名詞本身","I'm worried about the train being late."],["there 句型","there being","There is no chance of there being a test tomorrow."]],
  points:[
   "動名詞的動作者和句子主詞不同時，才需要意義主詞：I mind opening the window.（我開）／I mind your opening the window.（你開）",
   "動名詞放句首當主詞時，意義主詞用所有格：His being late again made the teacher angry.（考試以所有格為準）",
   "在動詞或介系詞後面時，所有格比較正式，受格比較口語，兩種都對：We appreciate your / you helping us.",
   "無生命名詞或很長的名詞通常直接放，不加 's：I'm worried about the bus being late.",
   "there is 句型改成動名詞時用 there being：I've never heard of there being a ghost in this school.",
   "陷阱：Would you mind opening the window? 是「請你開窗」；Would you mind my / me opening the window? 是「我開窗你介意嗎」。意義主詞不能用主格：Do you mind I opening ... ✗"],
  ex:[
   ["His being in a bad mood made everyone quiet.","他心情不好，讓大家都安靜下來。","句首當主詞，用所有格 His。"],
   ["I can't understand him being so apathetic about his future.","我無法理解他對自己的未來那麼漠不關心。","受詞位置，用受格 him（也可以用 his）。"],
   ["There is no logic in his being angry at you.","他對你生氣一點道理也沒有。","介系詞 in 後面，用所有格 his。"],
   ["She doesn't mind people knowing that she is in therapy.","她不介意別人知道她在接受心理治療。","意義主詞是一般名詞 people。"],
   ["The plan is based on the assumption of there being enough money.","這個計畫建立在資金足夠的假設上。","there 句型用 there being。"]]}
];

const S2_2_1_QUIZ = [
 ["___ the novel before, I already knew how it would end.",["Reading","Having read","Read","Being read"],1,"「讀過」比「知道結局」更早發生，用完成式分詞構句 Having + p.p.。","g1"],
 ["___ by the teacher twice, Ben finally stopped talking.",["Having warned","Warning","Being warning","Having been warned"],3,"Ben 是「被警告」，而且發生在停止講話之前，用完成被動 Having been + p.p.。","g1"],
 ["___ what to say, she just smiled.",["Not knowing","Knowing not","Not known","Don't know"],0,"否定的分詞構句把 not 放在分詞前面：Not knowing ...。","g1"],
 ["___ in a hurry, the report has many mistakes.",["Writing","Having written","Written","To write"],2,"報告是「被寫」的，被動用過去分詞 Written（= Having been written，Having been 省略）。","g1"],
 ["___ well last night, I felt sleepy in class.",["Not slept","Not having slept","Having slept not","Slept not"],1,"「沒睡好」比「上課想睡」更早，而且是否定：Not having + p.p.。","g1"],
 ["___ by so many people, the young singer felt nervous.",["Being watched","Watching","Having watched","Watch"],0,"歌手是「正被觀看」，用 Being + p.p. 強調當時正在被看。","g1"],
 ["___ his homework, Tom went out to play basketball.",["Finished","Having been finished","Being finished","Having finished"],3,"Tom 主動寫完作業，而且比出去玩更早，用 Having finished；Having been finished 是被動，主詞會變成「Tom 被完成」。","g1"],
 ["哪一句正確？",["Having been repaired, I can use my phone again.","Having been repaired, my phone works again.","Repairing, my phone works again.","Having repaired, my phone works again."],1,"被修理的是手機，所以主要子句的主詞要是 my phone，而且用被動 Having been repaired。","g1"],
 ["Because he had never seen snow before, he was very excited. → ___ snow before, he was very excited.",["Having seen never","Never seen","Seen never","Never having seen"],3,"否定的完成式分詞構句：never 放在 having 前面，Never having seen ...。","g1"],
 ["___, we will have the picnic tomorrow.",["Weather permits","Weather permitting","The weather permitted","Permitting weather"],1,"Weather permitting 是固定的獨立分詞構句，= If the weather permits。Weather permits 是完整子句，不能用逗號直接連接另一個句子。","g2"],
 ["___ no bus, we had to walk home.",["Being","It being","There being","There was"],2,"There was no bus 改成分詞構句時，there 要保留：There being no bus。","g2"],
 ["___ from her accent, she must be from the south.",["Judging","Judged","Judgment","Judges"],0,"Judging from 是慣用分詞片語，表示「從……判斷」，不需要和 she 一致。","g2"],
 ["The bus ___ late, we took a taxi.",["was","being","been","to be"],1,"前後主詞不同（the bus／we），用獨立分詞構句：The bus being late。寫成 was 會變成兩個句子用逗號連接，是錯的。","g2"],
 ["___ speaking, it's healthier to cook at home than to eat out.",["General","Generality","Generally","Generalize"],2,"Generally speaking 是慣用分詞片語，表示「一般來說」，speaking 前面用副詞。","g2"],
 ["___ his age, the boy plays the piano amazingly well.",["Considered","Considering","Consider","Considerate"],1,"Considering + 名詞 表示「考慮到、就……而言」。","g2"],
 ["___ with last year, the price of eggs is much higher.",["Comparing","Compare","To compare","Compared"],3,"Compared with 是慣用分詞片語，表示「和……相比」；蛋價是「被比較」的，用過去分詞。","g2"],
 ["All things ___, it was a successful trip.",["considered","considering","consider","to consider"],0,"All things considered 是被動的獨立分詞構句：所有事情「被考慮」過，表示「全盤考慮之下」。","g2"],
 ["哪一句正確？",["Being sunny, we went to the beach.","Sunny being, we went to the beach.","It being sunny, we went to the beach.","It sunny, we went to the beach."],2,"天氣的主詞 it 和 we 不同，要保留：It being sunny = Because it was sunny。","g2"],
 ["I hope ___ for the school basketball team.",["to choose","to be chosen","choosing","having chosen"],1,"我是「被選上」，用被動不定詞 to be chosen。","g3"],
 ["He seems ___ ill for a week; he looks very thin.",["to be","being","to have been","having been"],2,"「生病一週」是之前就發生的事，用完成式不定詞 to have been。","g3"],
 ["Nobody likes ___ at in public.",["laughing","to laugh","having laughed","being laughed"],3,"沒有人喜歡「被嘲笑」，用被動動名詞 being laughed at。","g3"],
 ["She denied ___ the money from the drawer.",["having taken","to have taken","to take","being taken"],0,"deny 後面接動名詞；「拿錢」比「否認」更早，用完成式動名詞 having taken。","g3"],
 ["The old bridge is said ___ more than 100 years ago.",["to build","to have been built","to be built","having built"],1,"橋是「被建造」的，而且是一百年前的事，用完成被動不定詞 to have been built。","g3"],
 ["My bike is broken. It needs ___.",["to repair","repaired","repairing","being repairing"],2,"need + V-ing 本身就有被動意思：needs repairing = needs to be repaired。","g3"],
 ["The famous singer is used to ___ by fans everywhere she goes.",["following","be followed","have followed","being followed"],3,"be used to 的 to 是介系詞，後面接動名詞；歌手是「被跟隨」的，用 being followed。","g3"],
 ["I still remember ___ to the zoo by my grandpa when I was five.",["being taken","taking","to take","to be taken"],0,"記得過去的事用 remember + V-ing；我是「被帶去」的，用被動 being taken。","g3"],
 ["The work is expected ___ by Friday.",["finishing","to finish","to be finished","having finished"],2,"工作是「被完成」的，用被動不定詞 to be finished。","g3"],
 ["It's hot in here. Do you mind ___ the window?（我來開窗）",["me open","my opening","I opening","mine opening"],1,"開窗的是「我」，動名詞的意義主詞用所有格 my 或受格 me，後面接 opening。","g4"],
 ["___ late again made the teacher angry.",["He being","Him be","His being","He was"],2,"動名詞片語放在句首當主詞，意義主詞用所有格：His being late。","g4"],
 ["I can't imagine ___ such a rude thing.",["him saying","he say","he saying","him say"],0,"imagine 後面接動名詞，意義主詞用受格 him 或所有格 his，不能用主格 he。","g4"],
 ["There is no chance of ___ a test tomorrow.",["it being","there being","there is","being"],1,"介系詞 of 後面接動名詞；there is 句型改成動名詞要用 there being。","g4"],
 ["Would you mind ___ the door for me?（請你幫我開門）",["my opening","me opening","to open","opening"],3,"請對方做事時，動作者就是對方，不需要意義主詞：Would you mind opening ...? mind 後面不接不定詞。","g4"],
 ["My parents are worried about ___ out so late.",["I stay","I staying","my staying","mine staying"],2,"介系詞 about 後面接動名詞，意義主詞用所有格 my（或受格 me），不能用主格 I。","g4"],
 ["We really appreciate ___ us with the project.",["you to help","your helping","you helped","yours helping"],1,"appreciate 後面接動名詞，意義主詞用所有格 your（或受格 you）。","g4"],
 ["哪一句的意思是「你介意我坐這裡嗎？」",["Would you mind sitting here?","Would you mind to sit here?","Would you mind sit here?","Would you mind my sitting here?"],3,"坐下的是「我」，所以要加意義主詞 my：Would you mind my sitting here? 第一句是「請你坐這裡好嗎」。","g4"],
 ["I'm worried about the train ___ late because of the storm.",["is","being","to be","been"],1,"介系詞 about 後面要接動名詞；無生命名詞 the train 直接當意義主詞：the train being late。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S2_2_1_CLASS = {
g1:[
 {say:"高二下的同學好！上學期我們學過分詞構句的基本款：{Feeling tired, I went to bed.} 主動用 ing，被動用 p.p.。今天要升級，學三種進階款！", board:[["Feeling tired, I went to bed.",["Feeling"]],["Written in English, the book is hard.",["Written"]]]},
 {say:"第一種：Having 加 p.p.，表示「比較早發生」。{Having finished my homework, I watched TV.} 先寫完作業，才看電視。兩個動作有先後，先發生的那個用 Having p.p.！", board:[["Having finished my homework, I watched TV.",["Having finished"]],["= After I had finished my homework, ...",["had finished"]]]},
 {say:"口訣記起來！", chant:"先發生的用 Having p.p.！"},
 {ask:{say:"考考你！", q:"___ the novel before, I already knew the ending.", opts:["Reading","Having read"], ans:1,
   ok:"對！「讀過」比「知道結局」更早，用 Having read。", bad:{0:"Reading 表示同時發生，可是「讀過」明明在前面，要用 Having read。"},
   again:{q:"___ a mistake, she said sorry.", opts:["Having made","Made"], ans:0, exp:"她主動犯錯，而且比道歉更早，用 Having made。"}}},
 {say:"第二種：被動。{Being watched by so many people, he felt nervous.} 他「正在被看」，用 Being 加 p.p.。如果被動又比較早發生，就用 Having been 加 p.p.：{Having been warned twice, he stopped talking.}", board:[["Being watched by so many people, he felt nervous.",["Being watched"]],["Having been warned twice, he stopped talking.",["Having been warned"]]]},
 {say:"小祕密：Being 和 Having been 常常可以省略，只留下 p.p.：{Warned twice, he stopped talking.} 意思一樣！", board:[["(Having been) Warned twice, he stopped talking.",["Warned"]]]},
 {say:"被動的口訣！", chant:"被動加 been，正在被看用 Being，早就被做用 Having been！"},
 {ask:{q:"___ by the teacher twice, Ben finally stopped talking.", opts:["Having warned","Having been warned","Warning"], ans:1,
   ok:"讚！Ben 是「被警告」的，而且在前面，用 Having been warned。", bad:{0:"Having warned 是主動，變成 Ben 去警告別人了！他是被警告的。",2:"Warning 是主動，Ben 是被警告的喔。"},
   again:{q:"___ in a hurry, the report has many mistakes.", opts:["Writing","Written"], ans:1, exp:"報告是被寫的，用過去分詞 Written。"}}},
 {say:"第三種：否定。把 not 或 never 放在分詞的最前面！{Not knowing what to do, she called her mom.} {Not having slept well, I felt tired.}", board:[["Not knowing what to do, she called her mom.",["Not knowing"]],["Not having slept well, I felt tired.",["Not having slept"]],["Knowing not what to do, ...",[],true]]},
 {say:"否定的口訣！", chant:"Not 和 never 站最前！"},
 {say:"最後一個陷阱：主詞一定要一致！{Having been repaired, I can use my phone.} 是錯的，因為變成「我被修好」了！要寫成 {Having been repaired, my phone works again.}", board:[["Having been repaired, I can use my phone.",[],true],["Having been repaired, my phone works again.",["my phone"]]]},
 {ask:{say:"最後一題！", q:"___ well last night, I felt sleepy in class.", opts:["Having not slept","Not having slept","Not slept"], ans:1,
   ok:"完美！否定放最前面，而且沒睡好在前，用 Not having slept。", bad:{0:"考試標準答案是把 not 放在最前面：Not having slept。",2:"少了 having，看不出「昨晚沒睡」比「上課想睡」更早。"},
   again:{q:"Having been fixed, ___.", opts:["I can use the computer","the computer works again"], ans:1, exp:"被修好的是電腦，主要子句的主詞要是 the computer。"}}},
 {say:"分詞構句進階過關！口訣：先發生的用 Having p.p.；被動加 been；Not 和 never 站最前；主詞一定要一致！", end:true}
],
g2:[
 {say:"今天學「主詞不一樣」的分詞構句！先看這句：{Because the bus was late, we took a taxi.} 前面的主詞是 the bus，後面是 we，不一樣耶，怎麼辦？", board:[["Because the bus was late, we took a taxi.",["the bus","we"]]]},
 {say:"很簡單：主詞不一樣，就把主詞留下來！{The bus being late, we took a taxi.} 這叫做「獨立分詞構句」。如果寫成 Being late, we took a taxi，就變成我們遲到了！", board:[["The bus being late, we took a taxi.",["The bus being"]],["Being late, we took a taxi.",[],true]]},
 {say:"口訣！", chant:"主詞不一樣，主詞留下來！"},
 {say:"同樣的道理，there is 也要留下 there：{There being no bus, we walked home.} 不能只寫 Being no bus。", board:[["There being no bus, we walked home.",["There being"]]]},
 {ask:{q:"___ no bus, we had to walk home.", opts:["Being","There being","There was"], ans:1,
   ok:"對！there 要留下來：There being no bus。", bad:{0:"少了 there，看不出是「沒有公車」喔。",2:"There was 是完整子句，用逗號接另一個句子是錯的。"},
   again:{q:"The weather ___ fine, we went hiking.", opts:["was","being"], ans:1, exp:"主詞不同，用獨立分詞構句 The weather being fine。"}}},
 {say:"接下來是超實用的固定說法：{Weather permitting}，天氣允許的話。注意 weather 前面不加 the！", board:[["Weather permitting, we'll go camping.",["Weather permitting"]],["= If the weather permits, ...",["If"]]]},
 {say:"還有一群「慣用分詞片語」，說話的是我們自己，所以不用管主詞一不一樣：{Generally speaking} 一般來說、{Frankly speaking} 坦白說、{Strictly speaking} 嚴格來說、{Judging from} 從……判斷、{Considering} 考慮到。", board:[["Generally / Frankly / Strictly speaking",["speaking"]],["Judging from his face, he is upset.",["Judging from"]],["Considering his age, he did well.",["Considering"]]]},
 {say:"慣用片語的口訣！", chant:"Generally、Frankly、Strictly speaking，Judging、Considering 不用管主詞！"},
 {ask:{q:"___ from her accent, she must be from the south.", opts:["Judging","Judged","Judge"], ans:0,
   ok:"讚！Judging from 是慣用片語：從……判斷。", bad:{1:"固定說法是 Judging from，用 ing。",2:"Judge 是原形動詞，放這裡會變成祈使句，不對喔。"},
   again:{q:"___ speaking, practice makes perfect.", opts:["General","Generally"], ans:1, exp:"speaking 前面要用副詞：Generally speaking。"}}},
 {say:"加碼兩個被動的：{Compared with last year, prices are higher.} 和 {All things considered, it was a good trip.} 東西是「被比較、被考慮」的，所以用 p.p.。", board:[["Compared with last year, prices are higher.",["Compared with"]],["All things considered, it was a good trip.",["All things considered"]]]},
 {ask:{say:"最後一題！", q:"哪一句正確？", opts:["Being sunny, we went to the beach.","It being sunny, we went to the beach.","Sunny being, we went to the beach."], ans:1,
   ok:"完美！天氣的 it 和 we 不同，it 要留下來：It being sunny。", bad:{0:"少了 it，變成「我們是晴天」了！",2:"順序錯了，要寫 It being sunny。"},
   again:{q:"___ his age, the boy did very well.", opts:["Considering","Considered"], ans:0, exp:"Considering + 名詞：考慮到……。"}}},
 {say:"獨立分詞構句過關！口訣：主詞不一樣，主詞留下來；there 和 it 不能丟；Weather permitting 不加 the；慣用片語不用管主詞！", end:true}
],
g3:[
 {say:"今天要幫不定詞和動名詞「升級」！它們也有時間和主被動喔。先看：{I want to choose.} 是我去選；{I want to be chosen.} 是我被選上。", board:[["I want to choose.",["to choose"]],["I want to be chosen.",["to be chosen"]]]},
 {say:"整理成一張表：不定詞的被動是 to be p.p.，完成是 to have p.p.；動名詞的被動是 being p.p.，完成是 having p.p.。", board:[["to do → to be done → to have done",["to be done","to have done"]],["doing → being done → having done",["being done","having done"]]]},
 {say:"口訣！", chant:"被動加 be，更早加 have！"},
 {say:"被動不定詞：{I hope to be chosen for the team.} 我希望「被選上」。{The work is expected to be finished by Friday.} 工作「被完成」。", board:[["I hope to be chosen for the team.",["to be chosen"]],["The work is expected to be finished by Friday.",["to be finished"]]]},
 {ask:{q:"I hope ___ for the school team.", opts:["to choose","to be chosen"], ans:1,
   ok:"對！我是被選的人，用 to be chosen。", bad:{0:"to choose 是我去選別人，我是被選的，要用 to be chosen。"},
   again:{q:"This catalog is expected ___ next month.", opts:["to update","to be updated"], ans:1, exp:"目錄是被更新的，用 to be updated。"}}},
 {say:"完成式不定詞，高一學過的 seem to have p.p. 還記得嗎？現在加上被動：{The bridge is said to have been built 100 years ago.} 橋是被蓋的，而且是很久以前。", board:[["He seems to have been ill.",["to have been"]],["The bridge is said to have been built 100 years ago.",["to have been built"]]]},
 {say:"換動名詞。被動用 being p.p.：{Nobody likes being laughed at.} 沒人喜歡被嘲笑。完成用 having p.p.：{She denied having taken the money.} 拿錢比否認更早。", board:[["Nobody likes being laughed at.",["being laughed"]],["She denied having taken the money.",["having taken"]]]},
 {ask:{q:"Nobody likes ___ at in public.", opts:["laughing","being laughed"], ans:1,
   ok:"讚！是「被嘲笑」，用 being laughed at。", bad:{0:"laughing at 變成你去笑別人了！被笑要用 being laughed at。"},
   again:{q:"He admitted ___ a mistake.", opts:["having made","to have made"], ans:0, exp:"admit 後面接動名詞，犯錯比承認更早：having made。"}}},
 {say:"最後一個大陷阱：need 後面接 V-ing，本身就有被動意思！{My bike needs repairing.} 等於 {My bike needs to be repaired.} 千萬別寫成 needs being repaired。", board:[["My bike needs repairing.",["repairing"]],["= My bike needs to be repaired.",["to be repaired"]],["My bike needs being repaired.",[],true]]},
 {say:"need 的口訣！", chant:"need 加 ing，自己就是被動！"},
 {ask:{say:"最後一題！", q:"The famous singer is used to ___ by fans.", opts:["following","being followed","be followed"], ans:1,
   ok:"完美！be used to 的 to 是介系詞，接動名詞，而且是被跟，用 being followed。", bad:{0:"following 是主動，變成歌手去跟蹤粉絲了！",2:"be used to 的 to 是介系詞，後面要接動名詞，不能接原形。"},
   again:{q:"My shoes are dirty. They need ___.", opts:["washing","to wash"], ans:0, exp:"need + V-ing 有被動意思：needs washing = needs to be washed。"}}},
 {say:"不定詞和動名詞升級完成！口訣：被動加 be，更早加 have；need 加 ing，自己就是被動！", end:true}
],
g4:[
 {say:"最後一課：動名詞的「意義主詞」。先比比看：{I mind opening the window.} 和 {I mind your opening the window.} 哪裡不一樣？", board:[["I mind opening the window.",["opening"]],["I mind your opening the window.",["your opening"]]]},
 {say:"第一句是「我介意我自己開窗」，第二句是「我介意你開窗」！動名詞的動作如果不是主詞做的，就要在前面放「意義主詞」，告訴大家是誰做的。", board:[["I mind opening ... → 我開",["opening"]],["I mind your opening ... → 你開",["your"]]]},
 {say:"口訣！", chant:"誰在做，就放誰；所有格、受格都可以！"},
 {say:"放在哪裡要用什麼？句首當主詞用所有格：{His being late again made the teacher angry.} 放在動詞或介系詞後面，所有格或受格都對：{Do you mind my opening the window?} {Do you mind me opening the window?}", board:[["His being late again made the teacher angry.",["His being"]],["Do you mind my / me opening the window?",["my","me"]]]},
 {ask:{q:"___ late again made the teacher angry.", opts:["He being","His being","Him be"], ans:1,
   ok:"對！放句首當主詞，用所有格 His。", bad:{0:"意義主詞不能用主格 he！句首要用所有格 His。",2:"動名詞要用 being，不能用原形 be。"},
   again:{q:"I can't imagine ___ such a thing.", opts:["he saying","him saying"], ans:1, exp:"imagine 後面的意義主詞用受格 him（或 his），不能用主格。"}}},
 {say:"小心這個超常考的比較！{Would you mind opening the door?} 是「請你開門好嗎」；{Would you mind my opening the door?} 是「你介意我開門嗎」。多一個 my，意思差很多！", board:[["Would you mind opening the door?（請你開）",["opening"]],["Would you mind my opening the door?（我來開）",["my opening"]]]},
 {ask:{q:"你想問「你介意我坐這裡嗎？」要說？", opts:["Would you mind sitting here?","Would you mind my sitting here?"], ans:1,
   ok:"讚！坐下的是我，要加 my。", bad:{0:"這句是「請你坐這裡好嗎」，坐的人變成對方了。"},
   again:{q:"Would you mind ___ the window for me?（請你開窗）", opts:["opening","my opening"], ans:0, exp:"請對方做事，不用加意義主詞：opening。"}}},
 {say:"無生命的東西直接放名詞就好：{I'm worried about the train being late.} 還有 there is 的句子，用 {there being}：{There is no chance of there being a test tomorrow.}", board:[["I'm worried about the train being late.",["the train being"]],["There is no chance of there being a test.",["there being"]]]},
 {say:"there 的口訣！", chant:"有 there 的句子，換成 there being！"},
 {ask:{say:"最後一題！", q:"There is no chance of ___ a test tomorrow.", opts:["there is","it being","there being"], ans:2,
   ok:"太強了！介系詞 of 後面接動名詞，there is 變成 there being。", bad:{0:"of 是介系詞，後面不能直接接子句 there is。",1:"「有考試」要用 there 句型，所以是 there being。"},
   again:{q:"My parents are worried about ___ out so late.", opts:["I staying","my staying"], ans:1, exp:"意義主詞不能用主格 I，用所有格 my（或受格 me）。"}}},
 {say:"意義主詞過關！口訣：誰在做就放誰；句首用所有格；有 there 的換成 there being。高二下第一次段考的文法全部上完了，去挑戰魔王吧！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S2_2_1_ROOTS = [
  {id:"r1", title:"字根 log / logue：說話、學問"},
  {id:"r2", title:"字根 path：感覺、疾病"},
  {id:"r3", title:"字根 phil：愛"},
  {id:"r4", title:"字根 psych：心靈"}
];
const S2_2_1_ROOT_CLASS = {
r1:[
 {say:"高二下的同學好！這次的四個字根都和「人的心和想法」有關。第一個：<<log>> 和 <<logue>>，意思是「說話」，後來也延伸成「道理、學問」。", board:[["log / logue = 說話；學問",["log","logue"],false,true]]},
 {say:"先看「說話」家族：{dialogue} 是兩人之間的說話，就是對話；{monologue} 的 mono 是「單一」，一個人說，就是獨白；{prologue} 的 pro 是「在前面」，正文前先說的話，就是序幕。", board:[["dia + logue = dialogue",["logue"],false,true],["mono + logue = monologue",["logue"],false,true],["pro + logue = prologue",["logue"],false,true]]},
 {say:"口訣！", chant:"logue 說說說：dia 對話、mono 獨白、pro 序幕！"},
 {ask:{q:"mono（單一）＋ logue（說話）＝ monologue，意思是？", opts:["對話","獨白","序幕"], ans:1,
   ok:"對！一個人自己說，就是獨白。", bad:{0:"對話是 dialogue，要兩個人才行喔。",2:"序幕是 prologue，pro 是「在前面」。"},
   again:{q:"dia（之間）＋ logue（說話）＝ dialogue，意思是？", opts:["對話","目錄","道歉"], ans:0, exp:"在兩人之間來回說話，就是對話。"}}},
 {say:"<<log>> 還有「道理」的意思：{logic} 是講道理的學問，邏輯；{logical} 合乎邏輯的；{apology} 原本是「說話為自己辯解」，後來變成道歉；{analogy} 依照同樣的道理去比較，就是類比。", board:[["log + ic = logic",["log"],false,true],["apo + log + y = apology",["log"],false,true],["ana + log + y = analogy",["log"],false,true]]},
 {ask:{q:"logic（邏輯）的形容詞是？", opts:["logicful","logical","logicous"], ans:1,
   ok:"讚！logic 加 al 變成 logical。", bad:{0:"英文沒有 logicful 這個字喔。",2:"英文沒有 logicous 這個字喔。"},
   again:{q:"apology 的動詞是？", opts:["apologize","apologist"], ans:0, exp:"apology 去 y 加 ize：apologize，道歉。"}}},
 {say:"最厲害的是字尾 <<logy>>，表示「學問、學科」：{mythology} 神話學、{sociology} 社會學，還有下下堂課要學的 psychology 心理學。高一學過的 biology、geology 也是同一家！", board:[["myth + o + logy = mythology",["logy"],false,true],["soci + o + logy = sociology",["logy"],false,true],["bio + logy = biology",["logy"],false,true]]},
 {say:"學問口訣！", chant:"看到 logy，就是一門學問！"},
 {say:"小提醒：logy 前面常常有一個 o 當連接，像 soci-o-logy、myth-o-logy，唸的時候重音通常落在 logy 前面的 o 這一拍：so-ci-OL-o-gy、my-THOL-o-gy。", board:[["sociology",["ol"],false,true],["mythology",["ol"],false,true]]},
 {ask:{say:"最後一題！", q:"soci（社會）＋ logy（學問）＝ sociology，意思是？", opts:["社會學","心理學","神話"], ans:0,
   ok:"完美！研究社會的學問，就是社會學。", bad:{1:"心理學是 psychology，psych 是心靈喔。",2:"神話是 mythology，myth 才是神話。"},
   again:{q:"catalog 裡的 log 是？", opts:["說話","木頭"], ans:0, exp:"cata（完全）＋ log（說）：一項一項完整說出來，就是目錄。"}}},
 {say:"log 過關！口訣：logue 說說說，dia 對話、mono 獨白、pro 序幕；看到 logy，就是一門學問！", end:true}
],
r2:[
 {say:"今天的字根是 <<path>>，意思是「感覺」，也延伸出「疾病、痛苦」的意思。它是一個超會變身的字根，會跟很多字首做朋友！", board:[["path = 感覺；疾病",["path"],false,true]]},
 {say:"第一組：<<sym>> 是「一起」。和別人一起感覺，就是 {sympathy} 同情；形容詞 {sympathetic} 有同情心的；動詞 {sympathize} 同情。", board:[["sym + path + y = sympathy",["sym","path"],false,true],["sym + path + etic = sympathetic",["path"],false,true],["sym + path + ize = sympathize",["path"],false,true]]},
 {say:"第二組：<<em>> 是「在裡面」。走進別人的感覺裡，就是 {empathy} 同理心；動詞是 {empathize}。", board:[["em + path + y = empathy",["em","path"],false,true],["em + path + ize = empathize",["path"],false,true]]},
 {say:"口訣！", chant:"sym 一起是同情，em 走進去是同理！"},
 {ask:{q:"empathy 和 sympathy 哪個是「站在對方立場、感同身受」？", opts:["sympathy","empathy"], ans:1,
   ok:"對！em 是「在裡面」，走進別人的感覺，就是同理心 empathy。", bad:{0:"sympathy 是同情，我在外面替你難過；empathy 才是走進你的感覺裡。"},
   again:{q:"sym（一起）＋ path（感覺）＋ ize ＝ sympathize，詞性是？", opts:["名詞","動詞","形容詞"], ans:1, exp:"ize 是動詞字尾，sympathize 是動詞「同情」。"}}},
 {say:"第三組：<<a>> 是「沒有」。沒有感覺，就是 {apathy} 冷漠；{apathetic} 冷漠的。單獨的 {pathetic} 是「引起強烈感覺的」，也就是可憐、可悲。", board:[["a + path + y = apathy",["a","path"],false,true],["a + path + etic = apathetic",["path"],false,true],["path + etic = pathetic",["path"],false,true]]},
 {ask:{q:"a（沒有）＋ path（感覺）＋ y ＝ apathy，意思是？", opts:["同情","冷漠","心電感應"], ans:1,
   ok:"讚！沒有感覺，就是冷漠。", bad:{0:"同情是 sympathy，sym 是一起。",2:"心電感應是 telepathy，tele 是遠。"},
   again:{q:"pathetic 的意思最可能是？", opts:["可憐的","有同理心的"], ans:0, exp:"pathetic 是「讓人產生強烈感覺的」，也就是可憐、可悲。"}}},
 {say:"第四個好玩的：<<tele>> 是「遠」，就是 telephone、television 的 tele。隔著遠距離也能感覺到，就是 {telepathy} 心電感應！", board:[["tele + path + y = telepathy",["tele","path"],false,true],["tele + phone = telephone",["tele"],false,true]]},
 {say:"變身口訣！", chant:"path 是感覺：sym 同情、em 同理、a 冷漠、tele 心電感應！"},
 {ask:{say:"最後一題！", q:"Good friends show ___: they feel your pain as if it were their own.", opts:["apathy","empathy","telepathy"], ans:1,
   ok:"完美！感受你的痛苦像自己的一樣，就是同理心 empathy。", bad:{0:"apathy 是冷漠，好朋友才不會這樣！",2:"telepathy 是心電感應，不是感受痛苦。"},
   again:{q:"Voters who don't care about politics show ___.", opts:["sympathy","apathy"], ans:1, exp:"不在乎就是沒有感覺：apathy 冷漠。"}}},
 {say:"path 過關！口訣：path 是感覺，sym 同情、em 同理、a 冷漠、tele 心電感應。etic 是形容詞，ize 是動詞，y 是名詞！", end:true}
],
r3:[
 {say:"今天的字根最浪漫：<<phil>>，意思是「愛」！看到 phil，就想到「愛好、喜歡」。", board:[["phil = 愛",["phil"],false,true]]},
 {say:"最有名的就是 {philosophy}：phil 愛，soph 是智慧，愛智慧就是哲學！做哲學的人是 {philosopher} 哲學家，形容詞是 {philosophical}。", board:[["phil + o + soph + y = philosophy",["phil","soph"],false,true],["phil + o + soph + er = philosopher",["phil"],false,true],["philosoph + ical = philosophical",["phil"],false,true]]},
 {say:"口訣！", chant:"phil 愛、soph 智慧，愛智慧就是哲學！"},
 {ask:{q:"philosopher 的意思是？", opts:["哲學","哲學家","哲學的"], ans:1,
   ok:"對！er 是「人」，愛智慧的人就是哲學家。", bad:{0:"哲學是 philosophy，字尾是 y。",2:"哲學的是 philosophical，字尾是 ical。"},
   again:{q:"philosophy 裡的 soph 是什麼意思？", opts:["智慧","聲音"], ans:0, exp:"soph 是智慧，phil + soph 就是愛智慧。"}}},
 {say:"第二組：<<anthrop>> 是「人類」。愛人類，就是 {philanthropy} 慈善；愛人類的人，就是 {philanthropist} 慈善家。", board:[["phil + anthrop + y = philanthropy",["phil","anthrop"],false,true],["phil + anthrop + ist = philanthropist",["phil","ist"],false,true]]},
 {ask:{q:"phil（愛）＋ anthrop（人類）＋ ist（人）＝ philanthropist，意思是？", opts:["慈善家","人類學","哲學家"], ans:0,
   ok:"讚！愛人類的人，就是慈善家。", bad:{1:"人類學是 anthropology，沒有 phil 喔。",2:"哲學家是 philosopher，裡面是 soph 智慧。"},
   again:{q:"ist 這個字尾表示？", opts:["人","學問"], ans:0, exp:"ist 表示「人」，像 scientist、artist、philanthropist。"}}},
 {say:"第三個：{philharmonic}，phil 愛，harmon 是和諧、音樂，愛好和諧音樂的，就是「愛樂」！很多交響樂團都叫 Philharmonic，像台北愛樂。", board:[["phil + harmon + ic = philharmonic",["phil","harmon"],false,true]]},
 {say:"冷知識：有些名字也有 phil 喔！Philip 的意思是「愛馬的人」，美國城市 Philadelphia 叫做「兄弟之愛的城市」。", board:[["Philip = 愛馬的人",["Phil"],false,true],["Philadelphia = 兄弟之愛的城市",["Phil"],false,true]]},
 {say:"愛的口訣！", chant:"看到 phil 就是愛：愛智慧、愛人類、愛音樂！"},
 {ask:{say:"最後一題！", q:"The ___ donated millions of dollars to build schools.", opts:["philosophy","philanthropist","philharmonic"], ans:1,
   ok:"完美！捐錢蓋學校的人是慈善家 philanthropist。", bad:{0:"philosophy 是哲學，不會捐錢喔。",2:"philharmonic 是愛樂樂團，這裡要的是捐錢的人。"},
   again:{q:"We had a ___ discussion about the meaning of life.", opts:["philosophical","philanthropy"], ans:0, exp:"名詞前面要用形容詞：philosophical 哲學的。"}}},
 {say:"phil 過關！口訣：看到 phil 就是愛，愛智慧是 philosophy，愛人類是 philanthropy，愛音樂是 philharmonic！", end:true}
],
r4:[
 {say:"最後一個字根：<<psych>>，意思是「心靈」。注意發音：開頭的 p 不發音，唸成 /saɪk/，聽起來像 sigh-k！", board:[["psych = 心靈（p 不發音）",["psych"],false,true]]},
 {say:"和上上堂課的 logy 結合：研究心靈的學問，就是 {psychology} 心理學！研究的人是 {psychologist} 心理學家，形容詞是 {psychological} 心理的。", board:[["psych + o + logy = psychology",["psych","logy"],false,true],["psych + o + log + ist = psychologist",["psych","ist"],false,true],["psych + o + log + ical = psychological",["psych"],false,true]]},
 {say:"口訣！", chant:"psych 是心靈，p 不唸；加上 logy，就是心理學！"},
 {ask:{q:"psych（心靈）＋ logy（學問）＝ psychology，意思是？", opts:["哲學","心理學","社會學"], ans:1,
   ok:"對！研究心靈的學問，就是心理學。", bad:{0:"哲學是 philosophy，phil 是愛。",2:"社會學是 sociology，soci 是社會。"},
   again:{q:"psychology 開頭的 p 要不要唸？", opts:["要唸","不唸"], ans:1, exp:"psych 的 p 不發音，psychology 唸成 sy-KOL-o-gy。"}}},
 {say:"再來一個常考的：<<iatr>> 是「治療」。治療心靈的人，就是 {psychiatrist} 精神科醫師。", board:[["psych + iatr + ist = psychiatrist",["psych","iatr"],false,true]]},
 {say:"psychologist 和 psychiatrist 很容易搞混！psychologist 是心理學家、心理師，主要用談話幫忙；psychiatrist 是精神科醫師，可以開藥。看到 iatr（治療）就是醫師！", board:[["psychologist：心理師（談話）",["log"],false,true],["psychiatrist：精神科醫師（可開藥）",["iatr"],false,true]]},
 {ask:{q:"哪一個可以開藥？", opts:["psychologist","psychiatrist"], ans:1,
   ok:"讚！psychiatrist 有 iatr（治療），是精神科醫師，可以開藥。", bad:{0:"psychologist 是心理師，通常用談話幫忙，不能開藥。"},
   again:{q:"psychiatrist 裡的 iatr 意思是？", opts:["治療","學問"], ans:0, exp:"iatr 是治療，psych + iatr + ist 是治療心靈的人。"}}},
 {say:"最後一個：{psychic}，psych 加上形容詞字尾 ic，「有心靈力量的」，就是通靈的、有超能力的；當名詞是「靈媒」。", board:[["psych + ic = psychic",["psych"],false,true]]},
 {say:"四個字根連起來的口訣！", chant:"log 說話、path 感覺、phil 愛、psych 心靈！"},
 {ask:{say:"最後一題！", q:"Stress can cause both physical and ___ problems.", opts:["psychology","psychological","psychologist"], ans:1,
   ok:"完美！名詞 problems 前面要用形容詞 psychological。", bad:{0:"psychology 是名詞「心理學」，這裡需要形容詞。",2:"psychologist 是人，這裡需要形容詞 psychological。"},
   again:{q:"The ___ claimed to know my future.", opts:["psychic","psychiatrist"], ans:0, exp:"聲稱知道未來的是靈媒 psychic。"}}},
 {say:"psych 過關！字根字首全部上完了：log 說話、path 感覺、phil 愛、psych 心靈。快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創）與概念卡 ---------- */
Object.assign(ILLUS2, {
  s221_dialogue: () => svgWrap("#eef6ff", ground() + P({x:46, y:104, s:.8, hair:"long", hc:"#3b2a20", oc:"#f472b6", pose:"shakeR", mood:"open"}) + P({x:114, y:104, s:.8, hair:"short", hc:"#2b2b2b", oc:"#60a5fa", pose:"shakeL", mood:"smile"}) + bubble(42, 20, "How are you?", 70) + bubble(120, 20, "Great!", 44)),
  s221_therapy: () => svgWrap("#fdf4ff", `<rect x="0" y="96" width="160" height="24" fill="#e9d5ff"/><rect x="16" y="68" width="48" height="32" rx="8" fill="#a78bfa"/><rect x="96" y="68" width="48" height="32" rx="8" fill="#f9a8d4"/>` + P({x:40, y:100, s:.75, hair:"bun", hc:"#4a3428", oc:"#7c3aed", pose:"hold", acc:["glasses"], mood:"smile"}) + P({x:120, y:100, s:.75, hair:"short", hc:"#2b2b2b", oc:"#38bdf8", pose:"down", eyes:"worry", mood:"wavy"}) + heart(80, 42, 1.1) + spark(66, 26, .7) + spark(96, 58, .6)),
  s221_meditate: () => svgWrap("#fff7ed", `<circle cx="80" cy="60" r="44" fill="#fde68a" opacity=".55"/><ellipse cx="80" cy="104" rx="46" ry="8" fill="#c4b5fd"/>` + P({x:80, y:104, s:.9, hair:"long", hc:"#3b2a20", oc:"#34d399", pose:"down", eyes:"closed", mood:"smile"}) + spark(34, 30, .8) + spark(128, 34, .7) + txt(30, 82, "~", 20, "#a16207") + txt(130, 82, "~", 20, "#a16207")),
  s221_clinic: () => svgWrap("#ecfeff", `<rect x="0" y="100" width="160" height="20" fill="#bae6fd"/><rect x="66" y="12" width="28" height="28" rx="6" fill="#fff" stroke="#e5e7eb"/><path d="M80 18 V34 M72 26 H88" stroke="#ef4444" stroke-width="5"/>` + P({x:48, y:104, s:.8, hair:"short", hc:"#2b2b2b", coat:true, oc:"#0ea5e9", pose:"thumb", acc:["steth", "glasses"], mood:"smile"}) + P({x:116, y:104, s:.8, hair:"twin", hc:"#7c4a2d", oc:"#fbbf24", pose:"down", eyes:"worry", mood:"o", acc:["sweat"]}))
});
/* ---------- 記憶小撇步（沒有字根可拆的字） ---------- */
Object.assign(MEMO, {
  "trauma": "trauma 源自希臘文「傷口」，現在多指心理創傷；形容詞 traumatic（造成創傷的）。",
  "compliment": "compliment（稱讚）和 complement（補充）只差一個字母：中間是 i，想成「I 喜歡被稱讚」！",
  "body language": "body（身體）＋ language（語言）＝用身體說話。點頭、交叉手臂、眼神接觸都是 body language。",
  "fatigue": "fatigue 唸作 fa-TEEG，結尾的 -gue 和 league 一樣只發 /g/ 音；意思是很累很累的「疲勞」。",
  "dose": "dose 來自希臘文「給予」：醫生每次給你的藥量就是一個 dose；overdose（over 超過）是「用藥過量」。"
});
registerUnit("s2-2-1", {
  name:"高二 下學期 第一次段考",
  sub:"分詞構句進階、獨立分詞構句與慣用分詞片語、不定詞與動名詞的完成式和被動式、動名詞的意義主詞",
  words:S2_2_1_WORDS, grammar:S2_2_1_GRAMMAR, quiz:S2_2_1_QUIZ,
  classes:Object.assign({}, S2_2_1_CLASS, S2_2_1_ROOT_CLASS), phonics:S2_2_1_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會字首、字根、字尾，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
