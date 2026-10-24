/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   內容資料：國三下學期 第二次段考／畢業考（通用範圍）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 文法說明] x3], null, null, 插圖]
   插圖："表情符號|標籤" 為概念卡（抽象的字用），其他的字畫在下面的 ILLUS
   ========================================================= */
const J3_2_2_WORDS = [
/* ---- 升學與高中生活 ---- */
["senior high school","n.","高中",[
 ["The senior high school where my brother studies is near the sea.","我哥哥讀的那所高中在海邊附近。","關係副詞 where 修飾地點 school，後面 my brother studies 是完整的句子。"],
 ["What I want most is to get into a good senior high school.","我最想要的是進一所好高中。","What = the thing that，What I want most 整個當主詞，動詞用單數 is。"],
 ["If I had studied harder, I could have gone to that senior high school.","如果我當初更用功，我就能讀那所高中了。","與過去事實相反：If + had + p.p., 主詞 + could have + p.p.。事實是：我沒有很用功，所以沒讀到。"]]],
["vocational","adj.","職業的；技職的",[
 ["My cousin goes to a vocational high school and learns to cook.","我表哥讀高職，在學做菜。","vocational high school 就是「高職」。主詞是第三人稱單數，goes 和 learns 都要加 s。"],
 ["What I like about vocational schools is the hands-on classes.","我喜歡技職學校的地方是動手做的課程。","What I like about... 是 what 子句當主詞，動詞用單數 is。hands-on 是「實際動手做的」。"],
 ["Choosing a vocational school, she followed her dream of becoming a chef.","她選擇了技職學校，追隨成為廚師的夢想。","分詞構句：主詞都是 she，主動的「選擇」改成 V-ing 開頭 Choosing。dream of + V-ing。"]],null,null,"🔧|技職的"],
["admission","n.","入學許可；入場",[
 ["Admission to the museum is free on Sundays.","星期天博物館免費入場。","admission 是不可數名詞，Admission to + 地方 是「進入……（的許可）」。主詞單數，用 is。"],
 ["Getting the admission letter, he jumped with joy.","收到錄取通知書，他高興得跳了起來。","分詞構句：= When he got the admission letter, ...。主詞相同，主動用 V-ing。"],
 ["I still remember the day when I got my admission letter.","我還記得我收到錄取通知書的那一天。","關係副詞 when 修飾時間 the day，後面 I got my admission letter 是完整的句子。"]],null,null,"📩|入學許可"],
["register","v.","註冊；報名；登記",[
 ["New students must register before August 10.","新生必須在八月十日前註冊。","must 後面接原形動詞 register。"],
 ["The office where you register is on the first floor.","註冊的辦公室在一樓。","where = at which，修飾 office；you register 是完整的句子（register 在這裡不需要受詞）。"],
 ["If I had registered earlier, I wouldn't have missed the class.","如果我早點報名，就不會錯過那堂課了。","與過去事實相反：If + had + p.p., 主詞 + wouldn't have + p.p.。事實：我太晚報名，所以錯過了。"]],null,null,"📝|註冊"],
["campus","n.","校園",[
 ["The campus is so big that I got lost on my first day.","校園大到我第一天就迷路了。","so + 形容詞 + that + 子句：「太……以致於……」。"],
 ["This is the campus where my parents first met.","這是我爸媽第一次見面的校園。","where 修飾地點 campus；my parents first met 是完整的句子。"],
 ["Walking around the campus, we saw many clubs giving out flyers.","我們在校園裡逛的時候，看到很多社團在發傳單。","分詞構句：= When we walked around the campus, ...。主詞都是 we，主動用 Walking。"]]],
["dormitory","n.","宿舍",[
 ["Students who live far away can stay in the dormitory.","住得很遠的學生可以住宿舍。","關係代名詞 who 修飾 Students。dormitory 也常簡稱 dorm。"],
 ["The dormitory where I lived for three years is now a library.","我住了三年的宿舍現在變成圖書館了。","where 修飾 dormitory；整個主詞是 The dormitory where I lived for three years，動詞是 is。"],
 ["Living in the dormitory, I learned to take care of myself.","住在宿舍讓我學會照顧自己。","分詞構句：= Because I lived in the dormitory, ...。主詞相同，主動用 Living。"]]],
["semester","n.","學期",[
 ["The new semester starts in September.","新學期九月開始。","主詞 The new semester 是單數，用 starts。"],
 ["I'll never forget the semester when we won the singing contest.","我永遠不會忘記我們贏得歌唱比賽的那個學期。","when 修飾時間 semester；we won the singing contest 是完整的句子。"],
 ["What I learned this semester will help me in senior high.","我這學期學到的東西會在高中幫助我。","What I learned = The things that I learned，what 子句當主詞。"]],null,null,"🗓️|學期"],
["tuition","n.","學費",[
 ["My parents pay my brother's tuition every semester.","我爸媽每學期付我哥哥的學費。","tuition 是不可數名詞，前面不加 a。"],
 ["Low tuition is the reason why many students choose this school.","學費低是很多學生選擇這所學校的原因。","the reason why + 完整的句子：many students choose this school。"],
 ["What worries my parents is the high tuition.","讓我爸媽擔心的是高昂的學費。","what 在子句裡當主詞，後面直接接動詞 worries；整個 what 子句當句子的主詞，用 is。"]],null,null,"💵|學費"],
["scholarship","n.","獎學金",[
 ["She won a scholarship because of her excellent grades.","她因為成績優異而得到獎學金。","win a scholarship 是「獲得獎學金」。because of + 名詞。"],
 ["If he hadn't won the scholarship, he couldn't have studied abroad.","如果他當初沒拿到獎學金，就不能出國讀書了。","與過去事實相反的否定：If + hadn't + p.p., 主詞 + couldn't have + p.p.。事實：他拿到了，所以出國了。"],
 ["Given a scholarship, Amy didn't have to worry about money.","拿到了獎學金，艾美就不用擔心錢了。","被動的分詞構句：= Because Amy was given a scholarship, ...。Amy 是「被給」，用 p.p. Given。"]]],
["course","n.","課程",[
 ["The school offers a cooking course after class.","學校放學後開設烹飪課程。","offer 是「提供、開設」。"],
 ["What I want to take next year is the drama course.","我明年想上的是戲劇課。","what 子句當主詞：What I want to take next year，動詞用 is。"],
 ["Taking this course, I learned how to make videos.","上了這門課，我學會了怎麼做影片。","分詞構句：= After I took this course, ...。主詞都是 I，主動用 Taking。how to + 原形動詞。"]],null,null,"📚|課程"],
["freshman","n.","新生（高一、大一）",[
 ["My brother is a freshman at Taipei High School.","我哥哥是台北高中的高一新生。","freshman 指高中或大學的一年級新生，複數是 freshmen。"],
 ["The freshmen who came to the welcome party got a free T-shirt.","來參加迎新會的新生都拿到一件免費 T 恤。","who 修飾 freshmen；複數 freshmen 和 man → men 一樣變化。"],
 ["Feeling nervous, the freshman stood at the school gate.","那位新生緊張地站在校門口。","分詞構句：= Because the freshman felt nervous, ...。主詞相同，用 Feeling 開頭。"]]],
["adjust","v.","調整；適應",[
 ["It took me a month to adjust to my new school.","我花了一個月才適應新學校。","adjust to + 名詞 是「適應……」。It takes + 人 + 時間 + to V。"],
 ["What you need to do is adjust your study plan.","你需要做的是調整讀書計畫。","What you need to do is + (to) 原形動詞，to 常常省略。"],
 ["If I had adjusted my sleep schedule earlier, I wouldn't have felt so tired.","如果我早點調整作息，就不會那麼累了。","與過去事實相反：If + had adjusted, 主詞 + wouldn't have felt。feel - felt - felt。"]],null,null,"🎚️|調整"],
["challenge","n./v.","挑戰",[
 ["Senior high life will be a new challenge for me.","高中生活對我來說會是一個新挑戰。","challenge 當名詞，a new challenge 是「一個新的挑戰」。"],
 ["Facing a challenge, she never gives up.","面對挑戰時，她從不放棄。","分詞構句：= When she faces a challenge, ...。主詞都是 she，用 Facing。"],
 ["That was the moment when I decided to accept the challenge.","就是在那一刻，我決定接受挑戰。","when 修飾時間 the moment；decide to + 原形動詞。"]],null,null,"🧗|挑戰"],
["grade","n.","成績；年級",[
 ["My grades got better this semester.","我這學期成績變好了。","grade 當「成績」常用複數 grades；get better 是「變好」。"],
 ["What matters most is not your grades but your attitude.","最重要的不是你的成績，而是你的態度。","What matters most 是 what 子句當主詞，用單數 is。not A but B：不是 A 而是 B。"],
 ["If she had studied more, she would have gotten better grades.","如果她當時多讀一點書，就會拿到更好的成績了。","與過去事實相反：would have + p.p.。get - got - gotten（美式）。"]],null,null,"💯|成績"],
/* ---- 畢業典禮與感謝 ---- */
["appreciate","v.","感激；欣賞",[
 ["I really appreciate your help.","我真的很感激你的幫忙。","appreciate 後面通常接「事情」，例如 your help、your kindness；感謝「人」常用 thank + 人。"],
 ["I appreciate what you have done for me.","我很感謝你為我做的一切。","what you have done = the things that you have done，what 子句當 appreciate 的受詞。"],
 ["Looking back, I appreciate every lesson my teachers gave me.","回頭看，我很感謝老師們給我的每一堂課。","Looking back 是常用的分詞構句（= When I look back）；lesson 後面省略了關係代名詞 that。"]],null,null,"🙏|感激"],
["gratitude","n.","感激之情",[
 ["I want to show my gratitude to my teachers.","我想向老師們表達我的感激。","show gratitude to + 人。gratitude 是不可數名詞。"],
 ["With deep gratitude, we said goodbye to our principal.","我們懷著深深的感激，向校長道別。","with + 名詞 表示「帶著……」。"],
 ["What I feel now is gratitude, not sadness.","我現在感受到的是感激，不是難過。","What I feel now 是 what 子句當主詞，用單數 is。"]],null,null,"💐|感激"],
["thankful","adj.","感謝的",[
 ["I'm thankful for my parents' support.","我很感謝爸媽的支持。","be thankful for + 事情。parents' 是複數名詞的所有格，撇號放在 s 後面。"],
 ["I'm thankful to the friends who helped me through hard times.","我很感謝在困難時陪我度過的朋友們。","be thankful to + 人；who 修飾 friends。"],
 ["Feeling thankful, she wrote a card to each teacher.","心懷感謝，她給每位老師寫了一張卡片。","分詞構句：= Because she felt thankful, ...。主詞相同，用 Feeling。"]],null,null,"🥰|感謝的"],
["honor","n./v.","榮譽；表揚",[
 ["It is a great honor to speak at the graduation ceremony.","能在畢業典禮上致詞是莫大的榮幸。","It is an honor to V，It 是虛主詞。這裡因為前面有 great，所以用 a。"],
 ["It was an honor to work with you.","能和你一起工作是我的榮幸。","honor 的 h 不發音，開頭是母音，所以用 an honor。"],
 ["Our school honors students who often help others.","我們學校會表揚常常幫助別人的學生。","honor 也可以當動詞「表揚」；who 修飾 students。"]],null,null,"🏅|榮譽"],
["award","n./v.","獎；頒獎",[
 ["Tom won an award for his science project.","湯姆的科展作品得了獎。","win an award 是「得獎」；award 是母音開頭，用 an。"],
 ["The award given to our class made everyone proud.","頒給我們班的獎讓大家都很驕傲。","過去分詞片語 given to our class 修飾 award（獎是「被頒的」）；make + 人 + 形容詞。"],
 ["Receiving the award, she thanked her coach first.","領獎時，她第一個感謝的是教練。","分詞構句：= When she received the award, ...。主詞都是 she，用 Receiving。"]]],
["bouquet","n.","花束",[
 ["My parents gave me a bouquet at graduation.","我爸媽在畢業典禮上送我一束花。","give + 人 + 東西。"],
 ["What I got from my classmates was a bouquet of sunflowers.","我從同學那裡收到的是一束向日葵。","What I got 是 what 子句當主詞；a bouquet of + 花。"],
 ["Holding a bouquet, my sister walked onto the stage.","我姊姊拿著一束花走上舞台。","分詞構句：= While my sister was holding a bouquet, ...。主詞相同，主動用 Holding。"]]],
["congratulate","v.","恭喜；祝賀",[
 ["We congratulated Amy on winning first prize.","我們恭喜艾美得到第一名。","congratulate + 人 + on + V-ing／名詞。on 是介系詞，後面接 winning。"],
 ["The principal congratulated every student who graduated.","校長恭喜每一位畢業的學生。","who 修飾 student。"],
 ["Hearing the good news, everyone came to congratulate him.","一聽到好消息，大家都來恭喜他。","分詞構句：= When everyone heard the good news, ...。主詞都是 everyone。"]]],
["guidance","n.","指導；輔導",[
 ["Thank you for your guidance over the past three years.","謝謝您這三年來的指導。","Thank you for + 名詞。guidance 是不可數名詞。"],
 ["Without your guidance, I couldn't have passed the exam.","沒有您的指導，我不可能通過考試。","Without... 也可以表示和過去事實相反的假設，主要子句用 couldn't have + p.p.。"],
 ["The guidance office is the place where you can talk about your future.","輔導室是可以談論你的未來的地方。","where 修飾地點 place；you can talk about your future 是完整的句子。"]],null,null,"🧭|指導"],
["patience","n.","耐心",[
 ["Thank you for your patience with us.","謝謝您對我們的耐心。","patience 是不可數名詞。patience with + 人：對某人有耐心。"],
 ["What a teacher needs most is patience.","老師最需要的是耐心。","What a teacher needs most 是 what 子句當主詞，用單數 is。"],
 ["If I had had more patience, I wouldn't have lost the game.","如果我當時更有耐心，就不會輸掉比賽了。","had had：第一個 had 是助動詞，第二個 had 是 have 的過去分詞。"]],null,null,"⌛|耐心"],
["deserve","v.","應得；值得",[
 ["You worked so hard. You deserve a good rest.","你這麼努力，值得好好休息一下。","deserve + 名詞：應該得到……。"],
 ["She finally got what she deserved.","她終於得到了她應得的。","what she deserved = the thing that she deserved，what 子句當 got 的受詞。"],
 ["Our teachers deserve a big thank-you.","我們的老師值得一聲大大的謝謝。","thank-you 加了連字號，當名詞用：a big thank-you。"]],null,null,"🏆|應得"],
["effort","n.","努力",[
 ["All your effort will pay off someday.","你所有的努力總有一天會有回報。","pay off 是「有回報、值得」。"],
 ["If he had made more effort, he could have won.","如果他當時更努力一點，他可能就贏了。","make an effort／make effort 是「努力」；與過去事實相反：could have + p.p.。"],
 ["Making a great effort, she finally passed the test.","經過一番努力，她終於通過了考試。","分詞構句：主詞都是 she，主動用 Making。"]],null,null,"💪|努力"],
["sincerely","adv.","真誠地；衷心地",[
 ["I sincerely thank you for everything.","我衷心感謝您為我做的一切。","副詞 sincerely 放在一般動詞 thank 前面。"],
 ["We sincerely wish you the best in the future.","我們衷心祝福你未來一切順利。","wish + 人 + the best：祝某人一切順利。"],
 ["Smiling sincerely, the principal shook hands with each student.","校長真誠地微笑，和每位學生握手。","分詞構句：Smiling 和 shook 的主詞都是 the principal。shake - shook - shaken。"]],null,null,"💌|真誠地"],
["cherish","v.","珍惜",[
 ["Cherish the time you spend with your friends.","珍惜你和朋友相處的時光。","祈使句用原形動詞開頭；the time 後面省略了關係代名詞 that。"],
 ["I will always cherish the moments when we laughed together.","我會永遠珍惜我們一起歡笑的時光。","when 修飾 the moments；we laughed together 是完整的句子。"],
 ["I wish I had cherished my junior high days more.","真希望我當時更珍惜國中的日子。","I wish + had + p.p.：對過去的遺憾。事實：我當時沒有好好珍惜。"]],null,null,"💖|珍惜"],
/* ---- 未來規劃與目標 ---- */
["ambition","n.","抱負；雄心",[
 ["My ambition is to become a doctor.","我的抱負是成為醫生。","主詞 + is + to V，to V 當補語。"],
 ["Ambition is the reason why he studies so hard.","抱負就是他這麼用功的原因。","the reason why + 完整的句子：he studies so hard。"],
 ["Full of ambition, she started her own company at twenty.","充滿雄心的她，二十歲就開了自己的公司。","分詞構句省略了 Being：(Being) full of ambition = Because she was full of ambition。"]],null,null,"🚀|抱負"],
["ambitious","adj.","有抱負的",[
 ["Ken is an ambitious student who wants to study abroad.","肯是個想出國讀書、有抱負的學生。","ambitious 是母音開頭，用 an；who 修飾 student。"],
 ["Being ambitious, he set high goals for himself.","他很有抱負，替自己訂了很高的目標。","分詞構句：= Because he was ambitious, ...。be 動詞變成 Being。set 三態同形。"],
 ["It's good to be ambitious, but don't forget to rest.","有抱負是好事，但別忘了休息。","It is + 形容詞 + to V。forget to V：忘記去做。"]],null,null,"🎯|有抱負的"],
["determined","adj.","下定決心的；堅決的",[
 ["She is determined to get into a good senior high school.","她下定決心要進一所好高中。","be determined to + 原形動詞。"],
 ["Determined to win, the team practiced every day.","下定決心要贏，球隊每天都練習。","分詞構句：= Because the team was determined to win, ...。省略 Being，用 p.p. 開頭。"],
 ["What made him determined was his father's words.","讓他下定決心的是他爸爸的話。","What made him determined 是 what 子句當主詞，用單數 was；make + 人 + 形容詞。"]],null,null,"✊|堅決的"],
["aim","n./v.","目標；以……為目標",[
 ["My aim is to read twenty books this year.","我的目標是今年讀二十本書。","aim 當名詞「目標」。"],
 ["We aim to finish the project by Friday.","我們的目標是星期五前完成這個專題。","aim to + 原形動詞：「打算、力求」。by + 時間：在……之前。"],
 ["Aiming at a gold medal, he trained harder than ever.","以金牌為目標，他比以往更努力訓練。","aim at + 名詞；分詞構句：主詞都是 he，用 Aiming。"]],null,null,"🎯|目標"],
["passion","n.","熱情；熱愛",[
 ["She has a passion for music.","她熱愛音樂。","have a passion for + 名詞。"],
 ["What keeps him going is his passion for art.","讓他堅持下去的是他對藝術的熱愛。","what 子句當主詞；keep + 人 + V-ing：讓某人一直……。"],
 ["Follow your passion, and you will find your way.","追隨你的熱情，你就會找到自己的路。","祈使句 + and + 主詞 + will：「做……，就會……」。"]],null,null,"🔥|熱情"],
["profession","n.","職業；專業",[
 ["Teaching is a meaningful profession.","教書是很有意義的職業。","動名詞 Teaching 當主詞，用單數 is。"],
 ["Nursing is the profession that she has chosen.","護理是她選擇的職業。","前面有先行詞 profession，用 that；比較：Nursing is what she has chosen.（沒有先行詞就用 what）。"],
 ["If he had chosen a different profession, he wouldn't have met his wife.","如果他當初選了別的職業，就不會遇到他太太了。","與過去事實相反：If + had chosen, 主詞 + wouldn't have met。choose - chose - chosen。"]],null,null,"👩‍⚕️|職業"],
["ideal","adj./n.","理想的；理想",[
 ["This is an ideal place to study.","這是讀書的理想地方。","ideal 是母音開頭，用 an；to study 修飾 place。"],
 ["The ideal school is a place where students love to learn.","理想的學校是學生熱愛學習的地方。","where 修飾地點 place；students love to learn 是完整的句子。"],
 ["What is your ideal job?","你理想的工作是什麼？","這裡的 What 是疑問詞「什麼」，句尾有問號；和關係代名詞 what（= the thing that）不一樣。"]],null,null,"🌈|理想的"],
["motivate","v.","激勵；給……動力",[
 ["My teacher motivated me to study harder.","老師激勵我更用功。","motivate + 人 + to V。"],
 ["What motivates me is my dream of becoming a pilot.","給我動力的是成為飛行員的夢想。","what 在子句裡當主詞，後面直接接動詞 motivates。dream of + V-ing。"],
 ["Motivated by her words, I decided to try again.","受到她的話激勵，我決定再試一次。","被動的分詞構句：= Because I was motivated by her words, ...，用 p.p. Motivated。"]],null,null,"⚡|激勵"],
["hesitate","v.","猶豫",[
 ["Don't hesitate to ask me for help.","有需要儘管找我幫忙，不要猶豫。","Don't hesitate to + 原形動詞。ask + 人 + for help。"],
 ["If I hadn't hesitated, I would have caught the bus.","如果我剛才沒有猶豫，就趕上公車了。","與過去事實相反的否定：If + hadn't + p.p.。catch - caught - caught。"],
 ["Hesitating for a moment, she raised her hand.","猶豫了一下，她舉起了手。","分詞構句：主詞都是 she，用 Hesitating。"]],null,null,"🤔|猶豫"],
["eventually","adv.","最後；終於",[
 ["He failed many times, but eventually he succeeded.","他失敗了很多次，但最後成功了。","eventually 強調「經過一段時間或很多努力之後，最後……」。"],
 ["Eventually, we found the restaurant where my parents had their first date.","最後，我們找到了我爸媽第一次約會的那家餐廳。","where 修飾地點 restaurant；my parents had their first date 是完整的句子。"],
 ["Practicing every day, she eventually became a great pianist.","每天練習，她最後成了很棒的鋼琴家。","分詞構句：主詞都是 she，主動用 Practicing。"]],null,null,"🏁|最後"],
["path","n.","小路；道路；人生方向",[
 ["We walked along the path by the river.","我們沿著河邊的小路走。","along 是「沿著」。"],
 ["This is the path where I used to walk my dog.","這是我以前常遛狗的小路。","where 修飾 path；used to + 原形動詞（以前常常）。walk the dog 是「遛狗」。"],
 ["Everyone has to choose his or her own path in life.","每個人都要選擇自己的人生道路。","Everyone 當單數，用 has；path 也可以比喻「人生方向」。"]]],
["contribute","v.","貢獻；捐助",[
 ["Everyone contributed to the class party.","每個人都為班級派對出了一份力。","contribute to + 名詞：對……有貢獻。"],
 ["What you contribute is more important than what you get.","你付出的比你得到的更重要。","兩個 what 子句：What you contribute 當主詞，what you get 放在 than 後面比較。"],
 ["Wanting to contribute to society, she became a volunteer nurse.","她想對社會有所貢獻，於是成了志工護理師。","分詞構句：= Because she wanted to contribute to society, ...。"]],null,null,"🤝|貢獻"],
["give up","phr.","放棄",[
 ["Never give up on your dreams.","永遠不要放棄你的夢想。","give up on + 名詞：對……放棄。"],
 ["If I had given up, I wouldn't have finished the marathon.","如果我當時放棄了，就不會跑完馬拉松了。","與過去事實相反：had given up，give - gave - given。事實：我沒有放棄，所以跑完了。"],
 ["Don't give up what you love.","不要放棄你所熱愛的事。","what you love = the thing that you love，當 give up 的受詞。"]],null,null,"🏳️|放棄"],
["look forward to","phr.","期待",[
 ["I'm looking forward to senior high life.","我很期待高中生活。","look forward to 的 to 是介系詞，後面接名詞或 V-ing。"],
 ["I look forward to seeing you again.","我期待再見到你。","to + V-ing：seeing，不能說 to see。"],
 ["Summer vacation is what I'm looking forward to.","暑假是我正在期待的事。","what I'm looking forward to 當補語；介系詞 to 留在句尾。"]],null,null,"🤩|期待"],
/* ---- 遺憾與回顧 ---- */
["look back","phr.","回顧；回頭看",[
 ["Looking back, I realize how lucky I was.","回頭看，我才發現自己有多幸運。","Looking back 是常用的分詞構句（= When I look back）；how lucky I was 是間接問句。"],
 ["When I look back on my junior high days, I always smile.","當我回顧國中的日子，總是會微笑。","look back on + 時光：回顧……。"],
 ["Don't look back. Look forward.","不要回頭看，要往前看。","祈使句用原形動詞開頭，否定加 Don't。"]],null,null,"🔙|回顧"],
["reflect","v.","反省；反映；反射",[
 ["Take some time to reflect on what you have done.","花點時間反省你做過的事。","reflect on + 名詞：仔細思考、反省；what you have done 當 on 的受詞。"],
 ["Her smile reflects how happy she is.","她的笑容反映出她有多快樂。","how happy she is 是間接問句，用直述句的語序。"],
 ["Reflecting on the past year, I found many things to improve.","回顧過去這一年，我發現很多需要改進的地方。","分詞構句：主詞都是 I，用 Reflecting。"]],null,null,"🪞|反省"],
["forgive","v.","原諒",[
 ["Please forgive me for being late.","請原諒我遲到。","forgive + 人 + for + V-ing／名詞。"],
 ["She forgave her friend, and they became close again.","她原諒了朋友，兩人又變得很要好。","forgive - forgave - forgiven。"],
 ["I wish I had forgiven him earlier.","真希望我早一點原諒他。","I wish + had + p.p.：對過去的遺憾。事實：我很晚才原諒他。"]],null,null,"🕊️|原諒"],
["fault","n.","過錯；責任",[
 ["Don't cry. It's not your fault.","別哭，這不是你的錯。","It's not your fault. 是安慰人時很常用的一句話。"],
 ["It was my fault that we missed the train.","我們錯過火車是我的錯。","It was my fault that + 子句，It 是虛主詞。"],
 ["Admitting his fault, Tom said sorry to his friend.","湯姆承認了自己的錯，向朋友道歉。","分詞構句：= Tom admitted his fault, and he said sorry...。主詞相同，用 Admitting。"]],null,null,"🙇|過錯"],
["silly","adj.","傻的；愚蠢的",[
 ["Don't ask such a silly question.","別問這麼傻的問題。","such a + 形容詞 + 單數名詞。"],
 ["I made a silly mistake on the test.","我在考試時犯了一個很傻的錯。","make a mistake 是「犯錯」。"],
 ["What I said yesterday was silly. I'm sorry.","我昨天說的話很傻，對不起。","What I said yesterday 是 what 子句當主詞，用單數 was。"]],null,null,"🤪|傻的"],
["ashamed","adj.","羞愧的；感到丟臉的",[
 ["I'm ashamed of my behavior.","我對自己的行為感到羞愧。","be ashamed of + 名詞／V-ing。"],
 ["Feeling ashamed, he couldn't look at his mom.","他覺得很羞愧，不敢看媽媽。","分詞構句：= Because he felt ashamed, ...。主詞相同，用 Feeling。"],
 ["You shouldn't be ashamed of making mistakes.","你不應該因為犯錯而感到丟臉。","be ashamed of + V-ing：making。"]],null,null,"😳|羞愧的"],
["waste","v./n.","浪費",[
 ["Don't waste your time on video games.","不要把時間浪費在電動上。","waste + 時間／錢 + on + 名詞。"],
 ["I wish I hadn't wasted so much time last summer.","真希望我去年暑假沒有浪費那麼多時間。","I wish + hadn't + p.p.：對過去的遺憾。事實：我浪費了很多時間。"],
 ["It's a waste of money to buy things you don't need.","買你不需要的東西是浪費錢。","a waste of + 名詞；things 後面省略了關係代名詞 that。"]],null,null,"🗑️|浪費"],
["lesson","n.","教訓；一堂課",[
 ["I learned a lesson from my mistake.","我從錯誤中學到了教訓。","learn a lesson 是「學到教訓」。"],
 ["What I learned from the failure was a valuable lesson.","我從失敗中學到的是寶貴的一課。","What I learned from the failure 是 what 子句當主詞，用單數 was。"],
 ["That was the day when I learned an important lesson.","那就是我學到重要一課的那一天。","when 修飾時間 the day；I learned an important lesson 是完整的句子。"]],null,null,"📖|教訓"],
["differently","adv.","不同地",[
 ["If I had known the truth, I would have acted differently.","如果我當時知道真相，我就會用不同的方式做了。","與過去事實相反：If + had known, 主詞 + would have acted。differently 修飾動詞 acted。"],
 ["Everyone sees the world differently.","每個人看世界的方式都不同。","differently = different + ly，副詞修飾動詞 sees。"],
 ["Thinking differently, she found a new way to solve the problem.","她換個角度思考，找到了解決問題的新方法。","分詞構句：主詞都是 she，用 Thinking。"]],null,null,"🔀|不同地"],
["sigh","v./n.","嘆氣",[
 ["He sighed and said, \"I should have studied harder.\"","他嘆了口氣說：「我應該更用功的。」","should have + p.p.：當初應該……（但沒有做），表示後悔。"],
 ["Sighing deeply, she closed her math book.","她深深地嘆了一口氣，闔上數學課本。","分詞構句：主詞都是 she，用 Sighing。"],
 ["With a sigh, Grandpa told us what had happened.","爺爺嘆了口氣，告訴我們發生了什麼事。","with a sigh：嘆著氣；what had happened 裡 what 當主詞，had happened 比 told 更早發生。"]]],
/* ---- 字首 pre- / re- / inter- ---- */
["preview","v./n.","預習；預告片",[
 ["Preview the lesson before class, and you'll understand it better.","上課前先預習，你會懂得更多。","pre-（之前）+ view（看）＝事先看。祈使句 + and + will。"],
 ["What I usually do at night is preview the next day's lessons.","我晚上通常做的事是預習隔天的課。","What I usually do... is + (to) 原形動詞，to 常常省略。"],
 ["The movie preview made me want to see the whole film.","電影預告片讓我想看整部片。","preview 也可以當名詞「預告片」；make + 人 + 原形動詞。"]],null,null,"👀|預習"],
["preschool","n.","幼兒園；學前班",[
 ["My little brother goes to preschool.","我弟弟讀幼兒園。","pre-（之前）+ school：上小學「之前」的學校。go to preschool 不加 the。"],
 ["This is the preschool where I learned my ABCs.","這是我學會 ABC 的幼兒園。","where 修飾地點 preschool；I learned my ABCs 是完整的句子。"],
 ["Before going to elementary school, many children go to preschool.","上小學之前，很多孩子會先讀幼兒園。","Before 當介系詞，後面接 V-ing：going。"]]],
["prefix","n.","字首",[
 ["The prefix pre- means before, as in preview.","字首 pre- 的意思是「之前」，例如 preview。","as in + 例子：「就像在……裡的那樣」。"],
 ["If you know what a prefix means, you can guess many new words.","如果你知道字首的意思，就能猜出很多新單字。","這裡的 what 是疑問詞「什麼」，引導間接問句 what a prefix means；真實條件句用現在式 + can。"],
 ["Words starting with the prefix inter- often have the meaning of between.","以字首 inter- 開頭的字常有「在……之間」的意思。","現在分詞片語 starting with... 修飾 Words，真正的動詞是 have。"]],null,null,"🔠|字首"],
["review","v./n.","複習；評論",[
 ["Let's review the grammar we learned today.","我們來複習今天學的文法。","re-（再）+ view（看）＝再看一次。the grammar 後面省略了 that。"],
 ["Reviewing my notes, I found what I had forgotten.","複習筆記時，我發現了我忘記的東西。","分詞構句 Reviewing（主詞都是 I）；what I had forgotten 當 found 的受詞，had forgotten 比 found 更早。"],
 ["If I had reviewed my notes, I would have done better on the test.","如果我當時有複習筆記，考試就會考得更好。","與過去事實相反：would have done。do - did - done。"]],null,null,"🔁|複習"],
["restart","v.","重新開始；重新啟動",[
 ["Try to restart your computer.","試著重新啟動你的電腦。","re-（再）+ start（開始）。try to + 原形動詞。"],
 ["Restarting the game, I finally beat the last level.","重新開始遊戲後，我終於打敗了最後一關。","分詞構句：主詞都是 I，用 Restarting。beat 三態：beat - beat - beaten。"],
 ["The day when I restarted my piano lessons was a happy one.","我重新開始上鋼琴課的那天是快樂的一天。","when 修飾 The day；整個主詞是 The day when I restarted my piano lessons，動詞是 was。"]],null,null,"🔄|重新開始"],
["interact","v.","互動",[
 ["Students interact with teachers in class.","學生在課堂上和老師互動。","inter-（之間）+ act（行動）＝彼此之間有來有往。interact with + 人。"],
 ["Interacting with people from other countries, I learned a lot about their cultures.","和其他國家的人互動，讓我學到很多他們的文化。","分詞構句：= When I interacted with people..., ...。主詞相同，用 Interacting。"],
 ["The science museum is a place where kids can interact with robots.","科學博物館是孩子們可以和機器人互動的地方。","where 修飾地點 place；kids can interact with robots 是完整的句子。"]],null,null,"💬|互動"],
["interrupt","v.","打斷；打擾",[
 ["Please don't interrupt me when I'm talking.","我說話的時候請不要打斷我。","inter-（之間）+ rupt（打破）＝從中間打斷。"],
 ["Interrupted by the phone, I forgot what I was going to say.","被電話打斷，我忘了我本來要說什麼。","被動的分詞構句：= Because I was interrupted by the phone, ...，用 p.p.。"],
 ["I wish I hadn't interrupted the teacher.","真希望我當時沒有打斷老師說話。","I wish + hadn't + p.p.：對過去的遺憾。interrupt 的 rr 要記好。"]]],
["intersection","n.","十字路口；交叉口",[
 ["Turn left at the next intersection.","在下一個十字路口左轉。","at the intersection：在路口。"],
 ["This is the intersection where the accident happened.","這就是發生車禍的那個路口。","where 修飾地點 intersection；the accident happened 是完整的句子（happen 不接受詞）。"],
 ["Waiting at the intersection, we saw a fire truck pass by.","在路口等紅燈時，我們看到一輛消防車經過。","分詞構句：主詞都是 we，用 Waiting。see + 受詞 + 原形動詞 pass by。"]]],
/* ---- 補充：成長與畢業 ---- */
["progress","n.","進步；進展",[
 ["You've made great progress in English.","你的英文進步很多。","make progress 是「進步」；progress 是不可數名詞，不加 a、不加 s。"],
 ["What I care about is your progress, not your score.","我在乎的是你的進步，不是你的分數。","What I care about 是 what 子句當主詞；介系詞 about 留在後面。"],
 ["Seeing her progress, the teacher smiled.","看到她的進步，老師笑了。","分詞構句：= When the teacher saw her progress, ...。主詞都是 the teacher。"]],null,null,"📈|進步"],
["confidence","n.","信心；自信",[
 ["Speaking in public gives me confidence.","在公開場合說話讓我有自信。","動名詞片語 Speaking in public 當主詞，用單數 gives。"],
 ["What you need is more confidence.","你需要的是多一點自信。","What you need 是 what 子句當主詞，用單數 is。"],
 ["Full of confidence, she gave the graduation speech.","她充滿自信地發表了畢業致詞。","分詞構句省略 Being：(Being) full of confidence, ...。"]],null,null,"😎|自信"],
["applause","n.","掌聲；鼓掌",[
 ["The audience gave her a big round of applause.","觀眾給了她熱烈的掌聲。","applause 是不可數名詞；a round of applause 是「一陣掌聲」。"],
 ["Hearing the applause, the shy boy smiled.","聽到掌聲，那個害羞的男孩笑了。","分詞構句：= When the shy boy heard the applause, ...。"],
 ["That was the moment when the hall was filled with applause.","那就是禮堂充滿掌聲的時刻。","when 修飾時間 the moment；be filled with：充滿……。"]]],
["mentor","n.","導師；良師益友",[
 ["Ms. Lin is not only my teacher but also my mentor.","林老師不只是我的老師，也是我的良師益友。","not only A but also B：不只 A，還有 B。"],
 ["A mentor is someone who guides you and believes in you.","良師益友是會引導你、相信你的人。","who 修飾 someone；guides 和 believes 都是第三人稱單數。"],
 ["If I hadn't met my mentor, I wouldn't have found my passion.","如果我沒有遇到我的導師，就不會找到我的熱情所在。","與過去事實相反：If + hadn't met, 主詞 + wouldn't have found。meet - met - met。"]]],
["locker","n.","置物櫃",[
 ["I keep my books in my locker.","我把書放在置物櫃裡。","keep + 東西 + in + 地方：把……放在……。"],
 ["The locker where I kept my things is empty now.","我以前放東西的置物櫃現在空了。","where 修飾 locker；I kept my things 是完整的句子。"],
 ["Opening my locker, I found a thank-you card.","打開置物櫃，我發現了一張感謝卡。","分詞構句：= When I opened my locker, ...。主詞都是 I，用 Opening。"]]],
["textbook","n.","課本；教科書",[
 ["Don't forget to bring your English textbook.","別忘了帶英文課本。","text（文字）+ book（書）。forget to V：忘記去做。"],
 ["What I will miss least is carrying heavy textbooks!","我最不會懷念的就是背重重的課本！","What I will miss least 是 what 子句當主詞；least 是「最不」。"],
 ["Written in simple English, this textbook is easy to read.","這本課本用簡單的英文寫成，很好讀。","被動的分詞構句：= Because this textbook is written in simple English, ...，用 p.p. Written。"]]],
["former","adj.","以前的；前任的",[
 ["My former classmates and I still keep in touch.","我和以前的同學還保持聯絡。","former 只放在名詞前面：former classmates、former principal。"],
 ["I visited the school where my former teacher works.","我去了我以前的老師現在任教的學校。","where 修飾地點 school；my former teacher works 是完整的句子。"],
 ["Our former principal came to our graduation.","我們的前任校長來參加我們的畢業典禮。","former principal：前任校長。"]],null,null,"⏮️|以前的"]
];

const J3_2_2_GRAMMAR = [
{ id:"g1", title:"關係代名詞 what：= the thing(s) that",
  intro:"what 當關係代名詞時，意思是「……的東西、……的事」，它自己就等於 the thing(s) that，所以前面不能再有名詞（先行詞）。What I need is time.（我需要的是時間）= The thing that I need is time.。如果前面已經有名詞，就用 that／which：This is the book that I need.；沒有名詞，就用 what：This is what I need.。",
  table:[["句型","說明","例子"],["what + 主詞 + 動詞","what 在子句裡當受詞","What I need is time."],["what + 動詞","what 在子句裡當主詞","What happened surprised everyone."],["名詞 + that／which + …","前面有先行詞，用 that／which","This is the book that I need."],["what + …（前面沒有名詞）","what = the thing(s) that","This is what I need."]],
  points:[
   "what = the thing(s) that／which，what 本身已經包含了先行詞，所以前面不能再放名詞：This is what I want.（不說 This is the thing what I want.）。",
   "what 子句在句子裡可以當主詞、受詞或補語：What he said is true.（主詞）／I can't believe what I saw.（受詞）／That's what I mean.（補語）。",
   "what 子句當主詞時，動詞通常用單數：What I need is more practice.（不說 What I need are...）。",
   "常考陷阱：all、everything、anything、the only 後面要用 that，不用 what：Thank you for everything that you have done.（不說 everything what）。",
   "怎麼選？看空格前面有沒有名詞：有名詞 → that／which；沒有名詞 → what。另外，空格後面的子句要「少一個主詞或受詞」才能用 what。",
   "別和疑問詞 what 搞混：What is your dream?（疑問句，問「什麼」）；I don't know what he wants.（間接問句，國三上學過）。關係代名詞 what 的意思一定可以換成 the thing that。"],
  ex:[
   ["What I need now is a good night's sleep.","我現在需要的是好好睡一覺。","What I need now = The thing that I need now，當主詞，用單數 is。"],
   ["I can't believe what I saw last night.","我不敢相信我昨晚看到的事。","what I saw last night 當 believe 的受詞。"],
   ["This is not what I ordered.","這不是我點的東西。","what I ordered 當補語，= the thing that I ordered。"],
   ["Thank you for everything that you have done for us.","謝謝您為我們做的一切。","everything 後面用 that，不能用 what。"],
   ["What he said at graduation made everyone cry.","他在畢業典禮上說的話讓大家都哭了。","What he said at graduation 當主詞；make + 人 + 原形動詞 cry。"]]},
{ id:"g2", title:"與過去事實相反的假設：If + had p.p., … would have p.p.／I wish + had p.p.",
  intro:"上一個單元學過「與現在事實相反」：If I were rich, I would buy a house.。如果要說的是「過去」沒發生的事，就要再往過去退一步：if 子句用 had + p.p.，主要子句用 would／could／should + have + p.p.。If I had studied harder, I would have passed the exam.（如果我當初更用功，就會考過了 → 事實：我沒用功，沒考過）。對過去的遺憾也一樣：I wish I had listened to you.（真希望我當時有聽你的話）。",
  table:[["種類","if 子句／wish 子句","主要子句","例子"],["與現在事實相反（上一課）","If + 過去式／were","would／could + 原形","If I were rich, I would buy a house."],["與過去事實相反","If + had + p.p.","would／could + have + p.p.","If I had studied, I would have passed."],["I wish（現在）","I wish + 過去式／were","—","I wish I were taller.（現在不高）"],["I wish（過去）","I wish + had + p.p.","—","I wish I had listened to you.（當時沒聽）"]],
  points:[
   "看時間決定時態：說的是「現在」→ if 用過去式、主句 would + 原形；說的是「過去」→ if 用 had + p.p.、主句 would have + p.p.。句子裡有 yesterday、last year、when I was young 等過去時間，就要用 had + p.p.。",
   "改寫成事實：肯定、否定相反，had + p.p. 改回過去式。If I had known, I would have told you. = I didn't know, so I didn't tell you.",
   "常考陷阱：主要子句是 would + have + p.p.，不能寫成 would + p.p.（would told ✗）或 would had + p.p.（✗）。have 一律用原形。",
   "常考陷阱：if 子句裡不能用 would：If I would have known... ✗ → If I had known... ✓。",
   "I wish + had + p.p. 表示對過去的遺憾，= I'm sorry that I didn't...：I wish I had studied harder. = I'm sorry that I didn't study harder.",
   "主要子句除了 would，也可以用 could have p.p.（當時就能……）、might have p.p.（當時可能會……）；should have p.p. 則是「當初應該……（但沒做）」：I should have listened to you."],
  ex:[
   ["If I had studied harder, I would have passed the exam.","如果我當初更用功，就會通過考試了。","事實：I didn't study hard, so I didn't pass the exam."],
   ["If you had told me earlier, I could have helped you.","如果你早點告訴我，我就能幫你了。","主要子句也可以用 could have + p.p.。"],
   ["If it hadn't rained yesterday, we would have gone to the beach.","如果昨天沒下雨，我們就去海邊了。","yesterday 是過去，用 hadn't rained 和 would have gone。"],
   ["I wish I had listened to my teacher.","真希望我當時有聽老師的話。","I wish + had + p.p.，對過去的遺憾。"],
   ["If I were you, I would apologize. If I had been you, I would have apologized right away.","如果我是你，我會道歉。如果當時我是你，我就會馬上道歉了。","前一句和現在事實相反，後一句和過去事實相反，比較看看兩種時態。"]]},
{ id:"g3", title:"關係副詞 where／when／why",
  intro:"關係副詞用來修飾表示地點、時間、原因的名詞：the place where…（……的地方）、the day when…（……的那一天）、the reason why…（……的原因）。它們等於「介系詞 + which」：where = in／at which，when = on／in which，why = for which。最重要的是：關係副詞後面接的是「完整的句子」。",
  table:[["關係副詞","前面的名詞（先行詞）","= 介系詞 + which","例子"],["where","地點：place、house、city、school","in／at which","This is the school where I studied."],["when","時間：day、year、time、moment","on／in which","I remember the day when we met."],["why","原因：the reason","for which","That's the reason why I was late."]],
  points:[
   "關係副詞後面要接「完整的句子」（主詞、動詞、受詞都不缺）；關係代名詞 which／that 後面的句子會少一個主詞或受詞。",
   "常考比較：This is the park where we played.（play 不需要受詞，句子完整 → where）／This is the park which we visited.（visit 少了受詞 → which／that）。",
   "常考陷阱：the place where I visited ✗。visit 是及物動詞，後面少了受詞，要用 which／that：the place which I visited ✓。",
   "where = 介系詞 + which：the house where I live = the house in which I live = the house which I live in。",
   "why 只用在 the reason 後面，而且 the reason 和 why 常常只留一個：That's the reason why I came. = That's why I came. = That's the reason I came.",
   "when 可以用 that 代替或省略：I still remember the day (when) we first met."],
  ex:[
   ["This is the house where I was born.","這是我出生的房子。","where = in which；I was born 是完整的句子。"],
   ["I'll never forget the day when we graduated.","我永遠不會忘記我們畢業的那一天。","when 修飾時間 the day。"],
   ["That's the reason why she was late.","那就是她遲到的原因。","why 只接在 the reason 後面。"],
   ["Hualien is the city which I visited last summer.","花蓮是我去年夏天去過的城市。","visit 後面少了受詞，用關係代名詞 which，不用 where。"],
   ["Do you remember the time when we got lost in Taipei?","你記得我們在台北迷路的那次嗎？","when 修飾 the time；we got lost in Taipei 是完整的句子。"]]},
{ id:"g4", title:"分詞構句入門：把 When／Because 子句改成 V-ing 或 p.p. 開頭",
  intro:"兩個子句的主詞一樣時，可以把副詞子句（When、Because、After、While…）變短，變成「分詞構句」。三個步驟：① 去掉連接詞；② 去掉相同的主詞；③ 動詞改成分詞：主動用 V-ing，被動用 p.p.，be 動詞變成 Being（常省略）。When I walked home, I saw a rainbow. → Walking home, I saw a rainbow.",
  table:[["原來的句子","分詞構句","說明"],["When I walked home, I saw a rainbow.","Walking home, I saw a rainbow.","主動 → V-ing"],["Because she was tired, she went to bed early.","(Being) tired, she went to bed early.","be 動詞 → Being，常省略"],["Because the book is written in English, it is hard to read.","Written in English, the book is hard to read.","被動 → p.p."],["Because I didn't know what to say, I kept quiet.","Not knowing what to say, I kept quiet.","否定 → Not + V-ing"]],
  points:[
   "最重要的規則：兩個子句的主詞一定要相同，才能省略主詞。主詞不同就不能改成分詞構句。",
   "常考陷阱：Walking to school, the rain started. ✗（雨不會走路去上學！）→ Walking to school, I got caught in the rain. ✓ 分詞的動作一定是後面主詞做的。",
   "主動還是被動？看主要子句的主詞：自己做的用 V-ing（Hearing the news, he cried.）；被做的用 p.p.（Seen from the sky, the island looks like a heart. 島是「被看」）。",
   "be 動詞變成 Being，而且常常省略：(Being) full of confidence, she gave the speech.／(Being) tired, I went to bed.",
   "否定把 not 放在分詞前面：Not knowing the answer, he kept quiet.",
   "分詞本身沒有時態，時間看主要子句。如果想讓意思更清楚，也可以保留連接詞：While walking home, I saw a rainbow.／After finishing my homework, I went out."],
  ex:[
   ["Hearing the news, he started to cry.","聽到這個消息，他哭了起來。","= When he heard the news, ...。主詞都是 he，主動用 Hearing。"],
   ["Seen from the mountain, the city looks beautiful.","從山上看，這座城市很美。","城市是「被看」，用 p.p. Seen。"],
   ["Feeling tired, I went to bed early.","覺得累，我就早早上床了。","= Because I felt tired, ...。"],
   ["Not knowing what to say, I just smiled.","不知道該說什麼，我只好微笑。","否定的分詞構句：Not + V-ing。"],
   ["Written in simple English, the story is easy to understand.","這個故事是用簡單英文寫的，很容易懂。","故事是「被寫」，用 p.p. Written。"]]}
];

/* 文法測驗：[題目, [選項 x4], 正確答案索引, 解析, 文法編號] */
const J3_2_2_QUIZ = [
 ["___ I need now is a good night's sleep.",["That","What","Which","Who"],1,"空格前面沒有名詞，要用 what（= The thing that）。What I need now 當主詞。","g1"],
 ["This is the book ___ I told you about.",["what","who","that","where"],2,"前面有先行詞 the book，用 that／which；about 後面少了受詞，所以不能用 where。","g1"],
 ["I can't believe ___ I saw last night.",["what","which","that","where"],0,"believe 後面沒有名詞，用 what = the thing that，what I saw 當受詞。","g1"],
 ["Thank you for everything ___ you have done for me.",["that","what","where","who"],0,"everything 後面要用 that，不能用 what。","g1"],
 ["___ he said made everyone laugh.",["Which","That","When","What"],3,"沒有先行詞，「他說的話」用 What he said，當句子的主詞。","g1"],
 ["Is this ___ you are looking for?",["which","where","what","that"],2,"this 後面沒有名詞，「你在找的東西」用 what you are looking for。","g1"],
 ["The thing that I want most is a new bike. = ___ I want most is a new bike.",["That","What","Which","The thing what"],1,"The thing that = What。The thing what 是錯的，what 前面不能再放名詞。","g1"],
 ["Tell me ___ you want, and I'll buy it for you.",["that","which","the thing what","what"],3,"「你想要的東西」= what you want。","g1"],
 ["哪一句正確？",["This is the thing what I want.","What she told me were true.","What I need is your help.","I like that you bought."],2,"what 子句當主詞用單數 is。第一句 what 前面不能有 the thing；第二句要用 was；第四句要改成 what you bought。","g1"],
 ["If I ___ harder last year, I would have passed the exam.",["study","studied","had studied","have studied"],2,"last year 是過去，與過去事實相反，if 子句用 had + p.p.：had studied。","g2"],
 ["If you had told me earlier, I ___ you.",["would have helped","would help","will help","had helped"],0,"if 子句是 had told（與過去事實相反），主要子句用 would have + p.p.。","g2"],
 ["I didn't know you were sick. If I ___, I would have visited you.",["had known","knew","know","would know"],0,"當時不知道，是與過去事實相反，if 子句用 had known。if 子句不能用 would。","g2"],
 ["I wish I ___ to my mom's advice. Now I'm in trouble.",["listen","listened","will listen","had listened"],3,"後悔「當時」沒聽媽媽的話，I wish + had + p.p.：had listened。","g2"],
 ["If it hadn't rained yesterday, we ___ to the beach.",["would go","could have gone","can go","went"],1,"if 子句是 hadn't rained（過去），主要子句用 could／would have + p.p.：could have gone。","g2"],
 ["If I had had more time, I would have finished it. = I ___ more time, so I didn't finish it.",["didn't have","don't have","hadn't","have had"],0,"改寫成事實：肯定、否定相反，had had 改回過去式否定 didn't have。","g2"],
 ["I'm only 150 cm. I wish I ___ taller now.",["had been","am","were","will be"],2,"說的是「現在」不高，I wish + were（與現在事實相反）。","g2"],
 ["He failed the test because he didn't study. → If he ___, he wouldn't have failed the test.",["studied","had studied","would study","has studied"],1,"事實是過去沒讀書，假設要用 had + p.p.：had studied。","g2"],
 ["哪一句正確？",["If I would have known, I would have come.","I wish I have gone to the party.","If we had won, we would celebrated.","If she had left earlier, she would have caught the bus."],3,"If + had left, would have caught 正確。第一句 if 子句不能用 would；第二句要用 had gone；第三句要用 would have celebrated。","g2"],
 ["This is the house ___ I was born.",["which","where","when","why"],1,"house 是地點，I was born 是完整的句子，用 where（= in which）。","g3"],
 ["I'll never forget the day ___ I first met you.",["when","where","which","why"],0,"day 是時間，I first met you 是完整的句子，用 when。","g3"],
 ["That's the reason ___ she was late.",["where","when","which","why"],3,"the reason 後面接 why。","g3"],
 ["This is the park ___ we visited last Sunday.",["where","when","which","why"],2,"visit 後面少了受詞，要用關係代名詞 which，不能用 where。","g3"],
 ["Taipei is the city ___ my grandparents live.",["which","that","when","where"],3,"live 後面不需要受詞，句子完整，用 where（= in which）。","g3"],
 ["This is the school in ___ my father studied.",["which","where","that","when"],0,"介系詞 in 後面要接 which：in which = where。介系詞後面不能接 that。","g3"],
 ["Summer is the season ___ many people go swimming.",["where","which","when","why"],2,"season 是時間，後面是完整的句子，用 when。","g3"],
 ["Do you know the reason ___ he quit the team?",["why","where","which","when"],0,"the reason 後面接 why；he quit the team 是完整的句子。","g3"],
 ["哪一句正確？",["This is the place where I visited last year.","I remember the time when we lived in Tainan.","That's the reason which I came.","This is the park when we played."],1,"the time when + 完整的句子。第一句 visited 少受詞要用 which；第三句要用 why；第四句地點要用 where。","g3"],
 ["When I walked home, I saw a rainbow. = ___ home, I saw a rainbow.",["Walk","Walked","Walking","To walk"],2,"主詞都是 I，主動的「走」改成 V-ing：Walking。","g4"],
 ["___ from the mountain, the city looks beautiful.",["Seeing","Seen","See","Saw"],1,"城市是「被看」的，用 p.p. Seen。","g4"],
 ["Because she was tired, she went to bed early. = ___ tired, she went to bed early.",["Be","Been","Was","Being"],3,"be 動詞改成分詞構句變成 Being（也可以省略）。","g4"],
 ["___ the news, he started to cry.",["Hearing","Heard","Hear","Hears"],0,"他自己聽到消息，是主動，用 V-ing：Hearing。","g4"],
 ["___ in simple English, the book is easy to read.",["Writing","Wrote","Written","Write"],2,"書是「被寫」的，用 p.p. Written。","g4"],
 ["Not ___ what to say, I just smiled.",["know","knowing","known","knew"],1,"否定的分詞構句：Not + V-ing：Not knowing。","g4"],
 ["___ the door, she found a gift on the floor.",["Opened","Open","Opens","Opening"],3,"她自己開門，是主動，用 V-ing：Opening。","g4"],
 ["After he finished his homework, he went out to play. = ___ his homework, he went out to play.",["Finished","Finishing","Finish","To finish"],1,"主詞都是 he，主動用 V-ing：Finishing。","g4"],
 ["哪一句正確？",["Walking to school, the rain started.","Feel nervous, I couldn't speak.","Hearing the bell, the class are over.","Seen from the sky, the island looks like a heart."],3,"島是被看的，用 Seen。第一句雨不會走路，主詞不一致；第二句要用 Feeling；第三句主詞也不一致（班級沒有聽到鈴聲）。","g4"]
];

/* =========================================================
   上課模式腳本（安安老師）
   say：老師講的話，{ } 裡面用英文語音唸
   board：黑板內容 [英文, [要標亮的字], 是否為錯誤示範]
   chant：口訣
   ask：隨堂提問，答錯會有針對性的回饋，再給一題 again 練習
   ========================================================= */
const J3_2_2_CLASS = {
g1:[
 {say:"哈囉同學！快畢業了，安安老師問你：「你現在最需要的是什麼？」英文可以說 {What I need now is a long vacation!} 這個 {What} 不是問句喔，它的意思是「……的東西」！", board:[["What I need now is a long vacation!",["What"]]]},
 {say:"這個 what 叫做關係代名詞 what，它等於 {the thing that}。所以 {What I need} 就是 {The thing that I need}。", board:[["What I need = The thing that I need",["What","The thing that"]]]},
 {say:"口訣先記起來！", chant:"what 等於 the thing that，前面沒名詞才用它！"},
 {say:"重點來了：what 自己就包含了「東西」這個名詞，所以前面不能再放名詞。{This is what I want.} 對；{This is the thing what I want.} 就錯了！", board:[["This is what I want.",["what"]],["This is the thing that I want.",["the thing that"]],["This is the thing what I want.",[],true]]},
 {ask:{say:"換你試試！", q:"___ I want for my birthday is a new phone.", opts:["What","That","Which"], ans:0,
   ok:"答對了！空格前面沒有名詞，「我想要的東西」用 What。",
   bad:{1:"that 前面要有名詞（先行詞），這裡沒有，要用 What。",2:"which 前面也要有名詞，這裡要用 What = The thing that。"},
   again:{q:"I can't believe ___ he said.", opts:["what","that","which"], ans:0, exp:"believe 後面沒有名詞，用 what = the thing that。"}}},
 {say:"what 子句可以放在句子的不同位置：當主詞 {What he said is true.}、當受詞 {I believe what he said.}、當補語 {That's what I mean.}", board:[["What he said is true.",["What he said"]],["I believe what he said.",["what he said"]],["That's what I mean.",["what I mean"]]]},
 {say:"what 子句當主詞的時候，動詞通常用單數：{What I need is more practice.} 不要被後面的名詞騙了！", board:[["What I need is more practice.",["What I need","is"]]]},
 {ask:{q:"What he told us ___ really interesting.", opts:["were","was","are"], ans:1,
   ok:"讚！What he told us 當主詞，用單數 was。",
   bad:{0:"what 子句當主詞要用單數動詞，were 是複數。",2:"are 是複數，而且 told 是過去式，要用 was。"},
   again:{q:"What I need ___ more time.", opts:["is","are","be"], ans:0, exp:"What I need 當主詞，用單數 is。"}}},
 {say:"那 what 和 that 怎麼選？看空格前面有沒有名詞！有名詞用 {that}：{This is the book that I need.}；沒有名詞用 {what}：{This is what I need.}", board:[["This is the book that I need.",["book","that"]],["This is what I need.",["what"]]]},
 {ask:{q:"This is the bag ___ I bought yesterday.", opts:["what","that","where"], ans:1,
   ok:"太棒了！前面有名詞 the bag，用 that。",
   bad:{0:"前面已經有名詞 the bag 了，不能再用 what。",2:"bought 後面少了受詞，要用關係代名詞 that，不用 where。"},
   again:{q:"This is ___ I bought yesterday.", opts:["that","what","the thing what"], ans:1, exp:"前面沒有名詞，用 what。"}}},
 {say:"考試最愛的陷阱：{everything}、{all}、{anything} 後面要用 that，不能用 what！{Thank you for everything that you have done.}", board:[["Thank you for everything that you have done.",["everything","that"]],["Thank you for everything what you have done.",[],true]]},
 {ask:{say:"最後挑戰！", q:"哪一句是正確的？", opts:["This is the thing what I need.","What she said was true.","I like the gift what you gave me."], ans:1,
   ok:"完美！沒有先行詞，What she said 當主詞，用單數 was。",
   bad:{0:"what 前面不能有名詞 the thing，要改成 the thing that 或 what。",2:"前面有名詞 the gift，要用 that 或 which。"},
   again:{q:"哪一句是正確的？", opts:["Tell me what you want.","Tell me the thing what you want.","Tell me which you want it."], ans:0, exp:"what you want = the thing that you want。"}}},
 {say:"關係代名詞 what 過關！複習口訣：what 等於 the thing that，前面沒名詞才用它；what 子句當主詞用單數；everything、all 後面要用 that。", end:true}
],
g2:[
 {say:"同學好！上一個單元學過「與現在事實相反」：{If I were rich, I would buy a house.} 今天要再往回退一步，說「過去」沒發生的事，也就是「早知道……」！", board:[["If I were rich, I would buy a house.（現在）",["were","would buy"]]]},
 {say:"比如：我上次考試沒讀書，結果沒考好。想說「如果我當時有讀書，我就會考好了」，英文是：{If I had studied, I would have passed the test.}", board:[["If I had studied, I would have passed the test.",["had studied","would have passed"]]]},
 {say:"公式：if 子句用 {had} + p.p.，主要子句用 {would have} + p.p.。兩邊都有 p.p. 喔！", board:[["If + 主詞 + had + p.p., 主詞 + would have + p.p.",["had","would have"]]]},
 {say:"口訣大聲唸！", chant:"過去沒發生，if 用 had p.p.，主句 would have p.p.！"},
 {ask:{say:"換你試試！", q:"If I ___ earlier yesterday, I would have caught the bus.", opts:["got up","had gotten up","have gotten up"], ans:1,
   ok:"答對了！yesterday 是過去，與過去事實相反，if 子句用 had + p.p.：had gotten up。",
   bad:{0:"got up 是過去式，那是「與現在事實相反」用的。說昨天的事要用 had gotten up。",2:"have gotten up 是現在完成式，不能用在這種假設句裡。"},
   again:{q:"If she ___ the bus, she wouldn't have been late.", opts:["had caught","caught","catches"], ans:0, exp:"與過去事實相反，if 子句用 had + p.p.：had caught。"}}},
 {say:"現在、過去兩種假設放在一起比一比：說現在的事，往過去退一步；說過去的事，再退一步變過去完成式！", board:[["現在：If I had time, I would help you.",["had","would help"]],["過去：If I had had time, I would have helped you.",["had had","would have helped"]]]},
 {ask:{q:"If you had asked me, I ___ you.", opts:["would tell","would have told","will tell"], ans:1,
   ok:"讚！if 子句是 had asked，主要子句用 would have + p.p.。",
   bad:{0:"would tell 是「與現在事實相反」的主句，這裡 if 子句是 had asked，要用 would have told。",2:"假設句的主要子句不能用 will。"},
   again:{q:"If it hadn't rained, we ___ a picnic.", opts:["would have had","would had","will have"], ans:0, exp:"would have + p.p.，have 一律用原形：would have had。"}}},
 {say:"小心兩個陷阱！第一，主要子句的 have 一律用原形，後面接 p.p.；第二，if 子句裡不能放 would。", board:[["If I had known, I would have told you.",["had known","would have told"]],["If I would have known, ...",[],true],["..., I would told you.",[],true]]},
 {say:"考試很愛考「改寫成事實」：肯定、否定相反，had + p.p. 改回過去式。{If I had known, I would have told you.} 等於 {I didn't know, so I didn't tell you.}", board:[["If I had known, I would have told you.",["had known","would have told"]],["= I didn't know, so I didn't tell you.",["didn't know","didn't tell"]]]},
 {ask:{q:"If he had practiced more, he would have won. = He ___ more, so he didn't win.", opts:["practiced","didn't practice","doesn't practice"], ans:1,
   ok:"太棒了！改回事實：had practiced → didn't practice。",
   bad:{0:"改回事實要肯定、否定相反：didn't practice。",2:"事情發生在過去，要用 didn't，不用 doesn't。"},
   again:{q:"If I hadn't been sick, I would have gone. = I ___ sick, so I didn't go.", opts:["was","wasn't","am"], ans:0, exp:"hadn't been 改回事實是 was（肯定、否定相反）。"}}},
 {say:"最後說「遺憾」：{I wish} + had + p.p.，表示「真希望我當時有……」。{I wish I had listened to you.} 比較一下：{I wish I were taller.} 是說現在。", board:[["I wish I had listened to you.（過去）",["had listened"]],["I wish I were taller.（現在）",["were"]]]},
 {ask:{say:"最後挑戰！", q:"I didn't go to the party. Now I'm sad. I wish I ___ to the party.", opts:["went","had gone","have gone"], ans:1,
   ok:"完美！後悔「過去」沒去，I wish + had + p.p.：had gone。",
   bad:{0:"went 是 I wish 說「現在」的事用的；這是過去的遺憾，要用 had gone。",2:"I wish 後面不接現在完成式，要用 had gone。"},
   again:{q:"I wish I ___ so much time on games last summer.", opts:["hadn't wasted","didn't waste","don't waste"], ans:0, exp:"last summer 是過去，對過去的遺憾用 I wish + hadn't + p.p.。"}}},
 {say:"與過去事實相反過關！複習：過去沒發生，if 用 had p.p.，主句 would have p.p.；改成事實時肯定、否定相反；對過去的遺憾用 I wish + had p.p.。", end:true}
],
g3:[
 {say:"同學好！畢業前，安安老師帶你回到國小：{This is the school where I learned to read.} 這是我學會讀書的學校。{where} 在這裡不是問「哪裡」，而是連接兩個句子的關係副詞！", board:[["This is the school where I learned to read.",["where"]]]},
 {say:"關係副詞有三個：地點用 {where}、時間用 {when}、原因用 {why}。", board:[["the place where …",["where"]],["the day when …",["when"]],["the reason why …",["why"]]]},
 {say:"口訣先記！", chant:"地點 where，時間 when，原因 why，後面接完整的句子！"},
 {ask:{say:"換你試試！", q:"I remember the day ___ we first met.", opts:["where","when","why"], ans:1,
   ok:"答對了！the day 是時間，用 when。",
   bad:{0:"where 用在地點，the day 是時間，要用 when。",2:"why 只用在 the reason 後面。"},
   again:{q:"This is the park ___ we often play.", opts:["when","where","why"], ans:1, exp:"park 是地點，用 where。"}}},
 {say:"關係副詞其實就是「介系詞 + which」：{where} = in／at which，{when} = on／in which，{why} = for which。", board:[["the house where I live = the house in which I live",["where","in which"]],["the day when we met = the day on which we met",["when","on which"]]]},
 {say:"最最重要的規則：where、when、why 後面要接「完整的句子」，主詞、動詞、受詞都不缺。{the park where we played} 裡，{we played} 是完整的。", board:[["the park where we played",["where","we played"]]]},
 {say:"那如果後面的句子少了受詞呢？就要用關係代名詞 which 或 that！{visit} 後面一定要有受詞，所以是 {the park which we visited}。", board:[["the park which we visited",["which","visited"]],["the park where we visited",[],true]]},
 {ask:{q:"This is the museum ___ we visited last week.", opts:["where","which","when"], ans:1,
   ok:"讚！visited 後面少了受詞，要用 which。",
   bad:{0:"visit 後面要有受詞，句子不完整，不能用 where，要用 which。",2:"museum 是地點不是時間，而且這裡要用 which。"},
   again:{q:"This is the museum ___ I saw the dinosaur.", opts:["where","which","when"], ans:0, exp:"I saw the dinosaur 是完整的句子（saw 有受詞），用 where。"}}},
 {ask:{q:"Tainan is the city ___ my grandma lives.", opts:["which","where","why"], ans:1,
   ok:"太棒了！live 後面不需要受詞，句子完整，用 where。",
   bad:{0:"my grandma lives 是完整的句子，不缺受詞，要用 where。如果要用 which，得寫成 in which。",2:"why 只用在 the reason 後面。"},
   again:{q:"Tainan is the city in ___ my grandma lives.", opts:["which","where","that"], ans:0, exp:"介系詞 in 後面接 which：in which = where。"}}},
 {say:"why 比較特別，只接在 {the reason} 後面，而且常常只留一個：{That's the reason why I came.} = {That's why I came.}", board:[["That's the reason why I came.",["the reason why"]],["= That's why I came.",["why"]]]},
 {ask:{say:"最後挑戰！", q:"哪一句是正確的？", opts:["This is the place where I visited.","That's the reason why she cried.","I remember the day where we met."], ans:1,
   ok:"完美！the reason why + 完整的句子。",
   bad:{0:"visited 後面少了受詞，要用 which 或 that。",2:"the day 是時間，要用 when。"},
   again:{q:"哪一句是正確的？", opts:["Summer is the season when we swim.","Summer is the season where we swim.","Summer is the season why we swim."], ans:0, exp:"season 是時間，用 when。"}}},
 {say:"關係副詞過關！複習：地點 where、時間 when、原因 why，後面接完整的句子；句子少了受詞，就改用 which 或 that。", end:true}
],
g4:[
 {say:"同學好！英文也喜歡「省字」。{When I walked home, I saw a rainbow.} 前後兩個主詞都是 I，可以縮短成 {Walking home, I saw a rainbow.} 這就是分詞構句！", board:[["When I walked home, I saw a rainbow.",["When I walked"]],["Walking home, I saw a rainbow.",["Walking"]]]},
 {say:"三個步驟：第一，去掉連接詞 when、because、after；第二，去掉相同的主詞；第三，動詞改成分詞。", board:[["① 去掉連接詞 When",["When"]],["② 去掉相同的主詞 I",["I"]],["③ walked → Walking",["Walking"]]]},
 {say:"口訣先記！", chant:"刪連接、刪主詞，主動 V-ing、被動 p.p.！"},
 {ask:{say:"換你試試！", q:"When he heard the news, he cried. = ___ the news, he cried.", opts:["Heard","Hearing","Hear"], ans:1,
   ok:"答對了！他自己聽到，是主動，用 V-ing：Hearing。",
   bad:{0:"Heard 是被動的 p.p.，可是他是自己聽，要用 Hearing。",2:"分詞構句不能用原形動詞，要用 Hearing。"},
   again:{q:"Because I felt sick, I stayed home. = ___ sick, I stayed home.", opts:["Feeling","Felt","Feel"], ans:0, exp:"主詞都是 I，主動用 Feeling。"}}},
 {say:"如果主詞是「被」做的，就用 p.p.。{Seen from the sky, the island looks like a heart.} 島是被看的，所以用 {Seen}。", board:[["Seen from the sky, the island looks like a heart.",["Seen","the island"]]]},
 {ask:{q:"___ in English, the letter was hard to read.", opts:["Writing","Written","Wrote"], ans:1,
   ok:"讚！信是「被寫」的，用 p.p. Written。",
   bad:{0:"信不會自己寫字，是被寫的，要用 Written。",2:"wrote 是過去式，不是分詞。"},
   again:{q:"___ by her words, I decided to try again.", opts:["Moving","Moved","Move"], ans:1, exp:"我是「被」她的話感動，用 p.p. Moved。"}}},
 {say:"be 動詞改成分詞會變成 {Being}，而且常常省略：{Because she was tired, ...} → {(Being) tired, she went to bed early.}", board:[["Because she was tired, she went to bed early.",["was tired"]],["(Being) tired, she went to bed early.",["Being","tired"]]]},
 {say:"否定的話，把 {not} 放在分詞前面：{Not knowing what to say, I just smiled.}", board:[["Not knowing what to say, I just smiled.",["Not knowing"]]]},
 {ask:{q:"Because I didn't have money, I couldn't buy it. = ___ money, I couldn't buy it.", opts:["Not having","Having not","Didn't have"], ans:0,
   ok:"太棒了！否定的分詞構句：Not + V-ing。",
   bad:{1:"not 要放在分詞前面：Not having。",2:"分詞構句不能保留 didn't，要改成 Not having。"},
   again:{q:"Because he didn't know the way, he got lost. = ___ the way, he got lost.", opts:["Not knowing","Not known","Knowing not"], ans:0, exp:"否定放前面：Not knowing。"}}},
 {say:"超級重要的陷阱：主詞一定要一樣！{Walking to school, the rain started.} 是錯的，因為雨不會走路去上學！要說 {Walking to school, I got caught in the rain.}", board:[["Walking to school, I got caught in the rain.",["Walking","I"]],["Walking to school, the rain started.",[],true]]},
 {ask:{say:"最後挑戰！", q:"哪一句是正確的？", opts:["Opening the box, a cat jumped out.","Opening the box, I found a cat inside.","Opened the box, I found a cat inside."], ans:1,
   ok:"完美！打開箱子的是 I，主詞一致，主動用 Opening。",
   bad:{0:"打開箱子的是人，不是貓，主詞不一致。",2:"我是自己打開，是主動，要用 Opening。"},
   again:{q:"哪一句是正確的？", opts:["Seen from here, the tower looks small.","Seeing from here, the tower looks small.","Saw from here, the tower looks small."], ans:0, exp:"塔是被看的，用 p.p. Seen。"}}},
 {say:"恭喜你！國三下學期第二次段考的文法全部上完了，也等於把國中文法都走過一遍了！最後複習：刪連接、刪主詞，主動 V-ing、被動 p.p.；兩個主詞一定要一樣。去文法測驗大顯身手吧！", end:true}
]};

Object.assign(PH, {
  "senior high school":"s:c e:long_e n:c i:exc or:schwa_r _:space h:c igh:igh _:space s:c ch:ch_k oo:oo_l l:c",
  vocational:"v:c o:long_o c:c a:long_a tion:tion a:schwa l:c", admission:"a:schwa d:c m:c i:short_i ssion:exc",
  register:"r:c e:short_e g:soft_g i:short_i st:blend er:er", campus:"c:c a:short_a m:c p:c u:schwa s:c",
  dormitory:"d:c or:or m:c i:schwa t:c or:or y:y_i", semester:"s:c e:schwa m:c e:short_e st:blend er:er",
  tuition:"t:c u:long_u i:short_i tion:tion", scholarship:"s:c ch:ch_k o:short_o l:c ar:schwa_r sh:sh i:short_i p:c",
  course:"c:c our:exc s:c e:silent", freshman:"fr:blend e:short_e sh:sh m:c a:schwa n:c",
  adjust:"a:schwa d:c j:c u:short_u st:blend", challenge:"ch:ch a:short_a ll:double e:schwa n:c g:soft_g e:silent",
  grade:"gr:blend a:a_e d:c e:silent_e",
  appreciate:"a:schwa pp:double r:c e:long_e ci:exc a:a_e t:c e:silent_e", gratitude:"gr:blend a:short_a t:c i:schwa t:c u:long_u d:c e:silent_e",
  thankful:"th:th a:short_a nk:nk ful:ful", honor:"h:silent o:short_o n:c or:schwa_r", award:"a:schwa w:c ar:exc d:c",
  bouquet:"b:c ou:exc qu:exc e:long_a t:silent", congratulate:"c:c o:schwa n:c gr:blend a:short_a t:exc u:schwa l:c a:a_e t:c e:silent_e",
  guidance:"g:c ui:exc d:c a:schwa n:c c:soft_c e:silent", patience:"p:c a:long_a ti:exc e:schwa n:c c:soft_c e:silent",
  deserve:"d:c e:schwa s:s_z er:er v:c e:silent", effort:"e:short_e ff:double or:schwa_r t:c",
  sincerely:"s:c i:short_i n:c c:soft_c ere:ere l:c y:y_i", cherish:"ch:ch e:short_e r:c i:short_i sh:sh",
  ambition:"a:short_a m:c b:c i:short_i tion:tion", ambitious:"a:short_a m:c b:c i:short_i ti:exc ou:schwa s:c",
  determined:"d:c e:schwa t:c er:er m:c i:short_i n:c ed:ed_d", aim:"ai:ai m:c",
  passion:"p:c a:short_a ssion:exc", profession:"pr:blend o:schwa f:c e:short_e ssion:exc",
  ideal:"i:long_i d:c e:long_e a:schwa l:c", motivate:"m:c o:long_o t:c i:schwa v:c a:a_e t:c e:silent_e",
  hesitate:"h:c e:short_e s:s_z i:schwa t:c a:a_e t:c e:silent_e", eventually:"e:schwa v:c e:short_e n:c t:exc u:long_u a:schwa ll:double y:y_i",
  path:"p:c a:short_a th:th", contribute:"c:c o:schwa n:c tr:blend i:short_i b:c u:long_u t:c e:silent_e",
  "give up":"g:c i:short_i v:c e:silent _:space u:short_u p:c",
  "look forward to":"l:c oo:oo_s k:c _:space f:c or:or w:c ar:schwa_r d:c _:space t:c o:exc",
  "look back":"l:c oo:oo_s k:c _:space b:c a:short_a ck:ck", reflect:"r:c e:schwa fl:blend e:short_e c:c t:c",
  forgive:"f:c or:schwa_r g:c i:short_i v:c e:silent", fault:"f:c au:aw l:c t:c", silly:"s:c i:short_i ll:double y:y_i",
  ashamed:"a:schwa sh:sh a:long_a m:c ed:ed_d", waste:"w:c a:a_e st:blend e:silent_e", lesson:"l:c e:short_e ss:double o:schwa n:c",
  differently:"d:c i:short_i ff:double er:er e:schwa n:c t:c l:c y:y_i", sigh:"s:c igh:igh",
  preview:"pr:blend e:long_e v:c iew:exc", preschool:"pr:blend e:long_e s:c ch:ch_k oo:oo_l l:c", prefix:"pr:blend e:long_e f:c i:short_i x:x_ks",
  review:"r:c e:schwa v:c iew:exc", restart:"r:c e:long_e st:blend ar:ar t:c",
  interact:"i:short_i n:c t:c er:er a:short_a c:c t:c", interrupt:"i:short_i n:c t:c e:schwa rr:double u:short_u p:c t:c",
  intersection:"i:short_i n:c t:c er:er s:c e:short_e c:c tion:tion",
  progress:"pr:blend o:short_o gr:blend e:short_e ss:double", confidence:"c:c o:short_o n:c f:c i:schwa d:c e:schwa n:c c:soft_c e:silent",
  applause:"a:schwa pp:double l:c au:aw s:s_z e:silent", mentor:"m:c e:short_e n:c t:c or:or",
  locker:"l:c o:short_o ck:ck er:er", textbook:"t:c e:short_e x:x_ks t:c b:c oo:oo_s k:c", former:"f:c or:or m:c er:er"
});
Object.assign(EXC_NOTE, {
  "senior high school":"senior 的 i 唸 /j/，和後面的 or 連成 /jɚ/：SEN-ior /ˈsinjɚ/，像 junior 的尾巴。",
  admission:"字尾 ssion 唸 /ʃən/，和 tion 一樣像「遜」：ad-MIS-sion /ədˈmɪʃən/。",
  course:"our 在 course 裡唸 /ɔr/，和 or 一樣，course 和 coarse（粗糙的）同音。",
  appreciate:"ci 在 appreciate 裡唸 /ʃi/：ap-PRE-ci-ate /əˈpriʃiˌeɪt/，重音在 pre。",
  award:"w 後面的 ar 常唸 /ɔr/（像 warm、war）：a-WARD /əˈwɔrd/。",
  bouquet:"bouquet 是從法文來的字：ou 唸 /u/（也有人唸 /oʊ/），qu 唸 /k/，字尾 t 不發音：bou-QUET /buˈkeɪ/。",
  congratulate:"t 後面接 u 時常唸 /tʃ/：con-GRAT-u-late /kənˈɡrætʃəˌleɪt/。",
  guidance:"ui 在 guide、guidance 裡唸字母名 I /aɪ/，u 不發音：GUID-ance /ˈɡaɪdəns/。",
  patience:"ti 在 patience 裡唸 /ʃ/：PA-tience /ˈpeɪʃəns/。",
  ambitious:"ti 在 ambitious 裡唸 /ʃ/，字尾 ous 輕輕唸 /əs/：am-BI-tious /æmˈbɪʃəs/。",
  passion:"字尾 ssion 唸 /ʃən/，像「遜」：PAS-sion /ˈpæʃən/。",
  profession:"字尾 ssion 唸 /ʃən/：pro-FES-sion /prəˈfɛʃən/，重音在 fes。",
  eventually:"t 後面接 u 時常唸 /tʃ/：e-VEN-tu-al-ly /ɪˈvɛntʃuəli/。",
  "look forward to":"to 在句子裡常弱讀成 /tə/；forward 的 ar 不重讀，唸 /ɚ/：look FOR-ward to。",
  preview:"iew 唸 /ju/，跟 view 一樣：PRE-view /ˈpriˌvju/，重音在 pre。",
  review:"iew 唸 /ju/，跟 view 一樣；re 輕輕唸：re-VIEW /rɪˈvju/，重音在 view。"
});
/* ---------- 4 堂自然發音課（安安老師） ---------- */
const J3_2_2_PHONICS = [
  {id:"p1", title:"would have／could have／should have 的弱讀：would've"},
  {id:"p2", title:"子音連音進階：相同或相近的子音只唸一次"},
  {id:"p3", title:"字首 pre-、re-、inter- 的唸法和意思"},
  {id:"p4", title:"畢業致詞朗讀：停頓、重音和感情"}
];
const J3_2_2_PHONICS_CLASS = {
p1:[
 {say:"同學好！這個單元一直出現 {would have}、{could have}、{should have}。可是外國人說話時，你幾乎聽不到 have 的 h！", board:[["would have   could have   should have",["have","have","have"]]]},
 {say:"在句子裡，have 弱讀成 /əv/，h 消失了。所以 {would have} 唸成 /ˈwʊdəv/，聽起來像一個字，縮寫寫成 <<would've>>。", board:[["would have → would've /ˈwʊdəv/",["would've"]],["could have → could've /ˈkʊdəv/",["could've"]],["should have → should've /ˈʃʊdəv/",["should've"]]]},
 {say:"口訣先記！", chant:"have 變輕變 /əv/，would've、could've、should've 一口氣！"},
 {ask:{say:"考考你！", q:"I would have come. 說快的時候，would have 聽起來像？", opts:["/wʊd hæv/，每個音都很清楚","/ˈwʊdəv/","/waʊld hæf/"], ans:1,
   ok:"答對！have 弱讀成 /əv/，would have 唸成 /ˈwʊdəv/。",
   bad:{0:"慢慢唸可以這樣，但說快的時候 h 會消失，變成 /ˈwʊdəv/。",2:"would 的 l 不發音，ou 也不唸 /aʊ/。"},
   again:{q:"should have 說快時聽起來像？", opts:["/ˈʃʊdəv/","/ʃoʊld hæv/","/ʃʊd hæf/"], ans:0, exp:"have 弱讀成 /əv/：should've /ˈʃʊdəv/。"}}},
 {say:"注意！/əv/ 聽起來和 {of} 一模一樣，所以有人會寫成 would of。這是錯的！寫作和考試一定要寫 {would have} 或 {would've}。", board:[["I would have helped you.",["would have"]],["I would of helped you.",[],true]]},
 {ask:{q:"聽到 /aɪ ˈkʊdəv ˈwʌn/，要怎麼寫？", opts:["I could of won.","I could have won.","I could won."], ans:1,
   ok:"讚！/ˈkʊdəv/ 是 could have，後面接 p.p. won。",
   bad:{0:"聽起來像 of，但其實是 have。could of 是常見的錯字。",2:"could 後面少了 have，would／could have + p.p. 才對。"},
   again:{q:"聽到 /ju ˈʃʊdəv ˈtoʊld mi/，要怎麼寫？", opts:["You should of told me.","You should have told me.","You should told me."], ans:1, exp:"/ˈʃʊdəv/ 是 should have。"}}},
 {say:"否定的唸法：{wouldn't have} 唸成 /ˈwʊdntəv/，{couldn't have} 唸成 /ˈkʊdntəv/。t 很輕，後面直接接 /əv/。", board:[["wouldn't have → /ˈwʊdntəv/",["wouldn't have"]],["couldn't have → /ˈkʊdntəv/",["couldn't have"]]]},
 {say:"還有一個小陷阱：{I'd have} 也很常見，'d 在這裡是 would。{If I had known, I'd have told you.} 聽起來是 /aɪdəv/。", board:[["If I had known, I'd have told you.",["I'd have"]]]},
 {ask:{q:"If I'd known, I'd have called you. 裡面的兩個 'd 分別是？", opts:["had／would","would／would","had／had"], ans:0,
   ok:"太棒了！第一個 'd 後面接 p.p. known，是 had；第二個後面接 have，是 would。",
   bad:{1:"if 子句不能用 would，第一個 'd 後面接 p.p. known，是 had。",2:"第二個 'd 後面接原形 have，是 would。"},
   again:{q:"I'd have gone 的 'd 是？", opts:["would","had","did"], ans:0, exp:"'d 後面接原形 have，是 would。"}}},
 {say:"唸唸看這句後悔的話，注意重音：{I should have listened to my teacher.} 重音放在 {should} 和 {listened}，have 輕輕帶過。", board:[["I SHOULD've LISTENED to my TEACHER.",["SHOULD've","LISTENED","TEACHER"]]]},
 {ask:{say:"最後一題！", q:"寫英文作文時，哪一個寫法最好？", opts:["I should of studied harder.","I should have studied harder.","I shoulda studied harder."], ans:1,
   ok:"完美！寫作要寫完整的 should have。",
   bad:{0:"should of 是把聲音聽錯的錯字。",2:"shoulda 是很口語的寫法，只在聊天或歌詞裡看到，考試不能用。"},
   again:{q:"聽力裡 /ˈwʊdəv/ 其實是？", opts:["would of","would have","wood of"], ans:1, exp:"/ˈwʊdəv/ = would have（would've）。"}}},
 {say:"would've 過關！記住：have 弱讀成 /əv/，would've、could've、should've 一口氣唸；聽起來像 of，但寫作一定要寫 have。下一課來學子音連音進階！", end:true}
],
p2:[
 {say:"同學好！英文說得快的時候，前一個字的尾巴和下一個字的開頭會黏在一起。今天學進階版：兩個「一樣的子音」碰在一起，只唸一次！", board:[["bad dog",["d d"],false,true],["this song",["s s"],false,true]]},
 {say:"像 {bad dog}：bad 的 d 和 dog 的 d 碰在一起，不會唸兩次「d、d」，而是把 d 稍微停久一點，唸成 /bæˈdɔɡ/。", board:[["bad dog → /bæˈdɔɡ/",["d d"],false,true]]},
 {say:"口訣先記！", chant:"一樣的子音碰一起，只唸一次停一下！"},
 {ask:{say:"考考你！", q:"black cat 自然的唸法是？", opts:["/blæk kæt/，k 唸兩次","/blæˈkæt/，k 只唸一次","/blæ æt/，k 都不唸"], ans:1,
   ok:"答對！兩個 /k/ 碰在一起，只唸一次。",
   bad:{0:"兩個一樣的子音碰在一起，只要唸一次，停一下就好。",2:"k 還是要唸出來，只是兩個合成一個。"},
   again:{q:"this song 自然的唸法是？", opts:["/ðɪˈsɔŋ/","/ðɪs sɔŋ/","/ðɪ ɔŋ/"], ans:0, exp:"兩個 /s/ 合成一個：/ðɪˈsɔŋ/。"}}},
 {say:"next time 更厲害：{next} 的尾巴是 t，{time} 開頭也是 t，所以 t 只唸一次：/nɛks taɪm/。同樣的還有 {last time}、{hot tea}、{big game}。", board:[["next time",["t t"],false,true],["hot tea",["t t"],false,true],["big game",["g g"],false,true]]},
 {say:"「相近」的子音也會合在一起！t 和 d 是一對，p 和 b 是一對，k 和 g 是一對，嘴巴的位置一樣，只差有沒有震動喉嚨。{good time}、{red tie}、{stop by}、{big cake}。", board:[["good time",["d t"],false,true],["stop by",["p b"],false,true],["big cake",["g c"],false,true]]},
 {ask:{q:"good time 自然的唸法比較接近？", opts:["/ɡʊd taɪm/，d 和 t 都清楚唸","/ɡʊˈtaɪm/，d 和 t 合成一個","/ɡʊ aɪm/"], ans:1,
   ok:"讚！d 和 t 是相近的子音，合成一個，只唸後面的 t。",
   bad:{0:"慢慢唸可以，但說快時 d 和 t 會合在一起。",2:"t 還是要唸，不能兩個都吞掉。"},
   again:{q:"stop by 自然的唸法比較接近？", opts:["/stɑˈbaɪ/","/stɑp baɪ/，p 很用力","/stɑ aɪ/"], ans:0, exp:"p 和 b 相近，合成一個：/stɑˈbaɪ/。"}}},
 {say:"最常聽到的是 {want to}：t 碰 t 合在一起，口語常常變成 {wanna}；{going to} 也常唸成 {gonna}。但要記得：寫作和考試要寫完整的 want to、going to！", board:[["want to → wanna（口語）",["want to"]],["going to → gonna（口語）",["going to"]]]},
 {ask:{q:"聽到 /aɪ ˈwɑnə ɡoʊ/，寫成英文是？", opts:["I wanna go.","I want to go.","I want go."], ans:1,
   ok:"太好了！wanna 是口語的唸法，寫的時候要寫 want to。",
   bad:{0:"wanna 是口語，聊天可以，寫作和考試要寫 want to。",2:"want 後面要加 to 才能接動詞。"},
   again:{q:"聽到 /aɪm ˈɡʌnə ˈstʌdi/，寫成英文是？", opts:["I'm going to study.","I'm gonna study.","I going study."], ans:0, exp:"gonna 寫的時候要寫 going to。"}}},
 {say:"畢業致詞裡也有很多：{the last day}、{best teacher}、{our graduation}。唸唸看：{This is the last day of junior high.} 注意 last 的 t 和 day 的 d 合在一起。", board:[["the last day",["t d"],false,true],["best teacher",["t t"],false,true]]},
 {ask:{say:"最後一題！", q:"下面哪一組會發生「相同子音只唸一次」？", opts:["with this","big apple","red car"], ans:0,
   ok:"眼睛真利！with 的 th 和 this 的 th 合在一起。",
   bad:{1:"big 的 g 後面接母音 a，會「連音」成 /bɪɡæpəl/，但不是兩個子音合成一個。",2:"d 和 c(/k/) 不是一對相近的子音，兩個都要唸。"},
   again:{q:"哪一組會合成一個子音？", opts:["hot tea","hot milk","hot soup"], ans:0, exp:"hot 的 t 和 tea 的 t 一樣，合成一個。"}}},
 {say:"子音連音進階過關！記住：一樣的子音碰一起，只唸一次停一下；相近的 t／d、p／b、k／g 也會合在一起；wanna、gonna 是口語，寫作要寫完整。", end:true}
],
p3:[
 {say:"同學好！認識字首，就能猜出好多新單字的意思。今天學三個超常見的字首：<<pre>>、<<re>>、<<inter>>！", board:[["preview   review   interact",["pre","re","inter"],false,true]]},
 {say:"第一個 <<pre>>：意思是「之前、預先」。當字首重讀時唸 /pri/，像字母 E 的長音：{preview}（預先看 → 預習）、{preschool}（上小學之前 → 幼兒園）、{prefix}（放在前面的 → 字首）。", board:[["PREview /ˈpriˌvju/",["PRE"],false,true],["PREschool /ˈpriˌskul/",["PRE"],false,true],["PREfix /ˈpriˌfɪks/",["PRE"],false,true]]},
 {say:"口訣先記！", chant:"pre 之前、re 再一次、inter 在中間，認得字首猜字義！"},
 {ask:{say:"考考你！", q:"preview 是什麼意思？", opts:["再看一次","預先看、預習","在中間看"], ans:1,
   ok:"答對！pre（之前）+ view（看）＝預先看。",
   bad:{0:"「再看一次」是 review，字首 re 才是「再」。",2:"inter 才是「在中間」。"},
   again:{q:"preschool 是什麼？", opts:["上小學之前的學校","重新上學","學校之間"], ans:0, exp:"pre（之前）+ school：上小學之前的學校，就是幼兒園。"}}},
 {say:"小心！pre 不重讀的時候會變輕，唸 /prɪ/：{prepare}、{prevent}，重音在後面。還有一些字只是剛好有 pre 開頭，不是字首，像 {pretty}、{present}。", board:[["prePARE /prɪˈpɛr/",["PARE"],false,true],["pretty（不是字首）",["pre"],false,true]]},
 {say:"第二個 <<re>>：意思是「再一次」或「回來」。{review}（再看一次 → 複習）、{restart}（再開始）、{rewrite}（重寫）、{return}（回來）。", board:[["review   restart   rewrite   return",["re","re","re","re"],false,true]]},
 {say:"re 的唸法有兩種：輕輕帶過唸 /rɪ/，像 {review} /rɪˈvju/、{return}；強調「再一次」時常唸 /ri/，像 {restart} /riˈstɑrt/、{rewrite}。不管哪一種，重音通常在後面的字根上。", board:[["reVIEW /rɪˈvju/",["VIEW"],false,true],["reSTART /riˈstɑrt/",["START"],false,true]]},
 {ask:{q:"review 的重音在哪裡？", opts:["RE","VIEW","兩個一樣重"], ans:1,
   ok:"讚！re-VIEW，重音在後面，re 輕輕唸 /rɪ/。",
   bad:{0:"re 在 review 裡輕輕唸，重音在 VIEW。",2:"英文單字通常只有一個主要重音，review 的重音在 VIEW。"},
   again:{q:"restart 的意思是？", opts:["之前開始","重新開始","在中間開始"], ans:1, exp:"re（再）+ start（開始）＝重新開始。"}}},
 {say:"第三個 <<inter>>：意思是「在……之間、互相」。唸 /ˈɪntɚ/，「影特兒」。{interact}（互相行動 → 互動）、{interrupt}（從中間打斷）、{intersection}（路交叉的地方 → 十字路口）。", board:[["interact /ˌɪntɚˈækt/",["inter"],false,true],["interrupt /ˌɪntəˈrʌpt/",["inter"],false,true],["intersection /ˈɪntɚˌsɛkʃən/",["inter"],false,true]]},
 {say:"最有名的 inter 字就是 {international}（國際的）：inter（之間）+ national（國家的）＝國家和國家之間。重音在 na：in-ter-NA-tion-al。{internet} 也是：網路和網路之間連起來！", board:[["interNAtional /ˌɪntɚˈnæʃənəl/",["NA"],false,true],["INternet /ˈɪntɚˌnɛt/",["IN"],false,true]]},
 {ask:{q:"international 的重音在哪裡？", opts:["IN","NA","AL"], ans:1,
   ok:"太棒了！in-ter-NA-tion-al，重音在 na，唸短 a /æ/。",
   bad:{0:"inter 在這裡是次重音，主要重音在 NA。",2:"字尾 al 從來不重讀。"},
   again:{q:"interact 的意思是？", opts:["互動","預先行動","再行動一次"], ans:0, exp:"inter（互相、之間）+ act（行動）＝互動。"}}},
 {ask:{say:"最後挑戰！", q:"「重新寫」「之前看」「互相連結」，依序是？", opts:["rewrite／preview／interconnect","prewrite／review／interconnect","rewrite／review／preconnect"], ans:0,
   ok:"完美！re 再一次、pre 之前、inter 互相。",
   bad:{1:"「重新寫」用 re，「之前看」用 pre，你把兩個顛倒了。",2:"「之前看」是 preview；「互相連結」要用 inter。"},
   again:{q:"哪一個字的 pre 不是字首？", opts:["preview","pretty","preschool"], ans:1, exp:"pretty 只是剛好以 pre 開頭，不是「之前」的意思。"}}},
 {say:"字首過關！記住：pre 之前、re 再一次、inter 在中間；字首通常不是主要重音，重音多半落在後面的字根上，但 preview、preschool、intersection 的重音在前面，要特別記。下一課來練習畢業致詞！", end:true}
],
p4:[
 {say:"同學好！畢業典禮上，常常會有同學上台致詞。今天安安老師教你怎麼把致詞唸得自然又感人！第一句常常是：{I would like to thank our teachers.}", board:[["I would like to thank our teachers.",["thank","teachers"]]]},
 {say:"技巧一：重音放在「有意思的字」上。名詞、動詞、形容詞、副詞要唸重一點；I、would、to、our 這些小字唸輕。{I'd like to THANK our TEACHERS.}", board:[["I'd like to THANK our TEACHERS.",["THANK","TEACHERS"]]]},
 {say:"口訣先記！", chant:"重要的字唸重，小字輕輕帶過，逗號停一停，感情放進去！"},
 {ask:{say:"考考你！", q:"Thank you for your patience. 哪兩個字要唸最重？", opts:["you、your","THANK、PATIENCE","for、your"], ans:1,
   ok:"答對！thank 和 patience 是有意思的實詞，要唸重。",
   bad:{0:"you、your 是代名詞，通常唸輕。",2:"for、your 是功能字，唸輕輕的。"},
   again:{q:"We will never forget you. 哪個字最適合加強語氣？", opts:["will","NEVER","you"], ans:1, exp:"never 表示強烈的情感，唸重一點更感人。"}}},
 {say:"技巧二：在意群之間停頓。看到逗號停，長長的主詞唸完也停。{First of all, / I would like to thank our teachers / for their patience and guidance.}", board:[["First of all, / I would like to thank our teachers / for their patience and guidance.",["/"]]]},
 {ask:{q:"Without your help, we couldn't have come this far. 在哪裡停最自然？", opts:["Without your help, / we couldn't have come this far.","Without / your help, we couldn't have / come this far.","Without your help, we couldn't / have come this far."], ans:0,
   ok:"讚！在逗號停，couldn't have come 要連在一起唸。",
   bad:{1:"Without your help 是一組意思，不要切開；couldn't have come 也要連在一起。",2:"couldn't have come 是一組，中間不能停。"},
   again:{q:"When I look back, I feel thankful. 在哪裡停最自然？", opts:["When I look back, / I feel thankful.","When I / look back, I feel thankful.","When I look back, I feel / thankful."], ans:0, exp:"時間子句唸完，在逗號停一下。"}}},
 {say:"技巧三：列舉的時候，前面每一項聲音微微往上，最後一項往下，表示說完了。{our teachers ↗, our parents ↗, and our friends ↘.}", board:[["Thank you to our teachers ↗, our parents ↗, and our friends ↘.",["↗","↘"]]]},
 {ask:{q:"列舉三樣東西時，最後一項的語調是？", opts:["往上 ↗","往下 ↘","完全平平的"], ans:1,
   ok:"太好了！最後一項往下，表示列舉結束。",
   bad:{0:"前面幾項往上，最後一項要往下，表示說完了。",2:"完全平平的聽起來像機器人，最後一項要往下。"},
   again:{q:"our teachers, our parents, and our friends 中，哪一項語調往下？", opts:["our teachers","our parents","our friends"], ans:2, exp:"最後一項 our friends 往下。"}}},
 {say:"技巧四：放慢速度、加入感情。說到最感人的地方，速度慢一點、停久一點：{What we learned here / will stay with us / forever.} 注意 {forever} 前面停一下，效果更好！", board:[["What we learned here / will stay with us / forever.",["What we learned here","forever"]]]},
 {say:"致詞裡常用的句子：{I would like to thank…}、{I will always remember the days when…}、{Looking back, …}、{If it hadn't been for you, …}。你看，都是這單元學過的文法！", board:[["I will always remember the days when we laughed together.",["when"]],["Looking back, I feel grateful.",["Looking back"]],["If it hadn't been for you, we couldn't have made it.",["hadn't been","couldn't have"]]]},
 {ask:{say:"最後挑戰！", q:"哪一種唸法最適合畢業致詞？", opts:["每個字一樣重、一樣快","重要的字唸重，意群間停頓，感人處放慢","越快越好，趕快唸完"], ans:1,
   ok:"完美！重音、停頓、速度變化，加上真心的感情，就是最好的致詞。",
   bad:{0:"每個字一樣重聽起來像念課文，聽眾抓不到重點。",2:"太快會讓聽眾聽不清楚，也感受不到你的心意。"},
   again:{q:"致詞說到最感人的地方，應該？", opts:["放慢、停一下","加快速度","聲音越來越小聽不見"], ans:0, exp:"放慢速度、適當停頓，讓聽眾感受到你的感情。"}}},
 {say:"自然發音全部上完了，也恭喜你國中英文畢業了！總複習：would've 唸 /ˈwʊdəv/、寫作要寫 have；一樣的子音只唸一次；pre 之前、re 再一次、inter 在中間；致詞時重要的字唸重、意群停頓、放進感情。祝你前程似錦，快去玩「拼字挑戰」吧！", end:true}
]};

/* ---------- 單字插圖（抽象的字用單字陣列第 7 欄的概念卡） ---------- */
const j322Cap = (x, y, s) => grp(x, y, s, `<path d="M-22 0 L0 -9 L22 0 L0 9 Z" fill="#1f2937"/><path d="M-12 4 L-12 12 Q0 17 12 12 L12 4 Z" fill="#111827"/><path d="M0 0 L16 4 L17 16" stroke="#facc15" stroke-width="1.8" fill="none"/><circle cx="17" cy="17" r="2.2" fill="#facc15"/>`);
const j322Trophy = (x, y, s) => grp(x, y, s, `<path d="M-14 -24 H14 V-10 Q14 4 0 6 Q-14 4 -14 -10 Z" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/><path d="M-14 -20 Q-26 -20 -22 -8 Q-19 -2 -12 -4 M14 -20 Q26 -20 22 -8 Q19 -2 12 -4" stroke="#ca8a04" stroke-width="2.5" fill="none"/><rect x="-3" y="6" width="6" height="8" fill="#ca8a04"/><rect x="-12" y="14" width="24" height="7" rx="2" fill="#92400e"/>` + star(0, -12, 6, "#fff7cc"));
const j322Locker = (x, y, c, open = false) => `<rect x="${x}" y="${y}" width="28" height="70" rx="2" fill="${c}" stroke="#475569" stroke-width="1.5"/>` + (open ? `<rect x="${x + 3}" y="${y + 3}" width="22" height="64" fill="#1e293b"/><rect x="${x + 3}" y="${y + 30}" width="22" height="3" fill="#64748b"/>` : `${[0, 1, 2].map(i => `<rect x="${x + 8}" y="${y + 8 + i * 5}" width="12" height="2" rx="1" fill="#475569"/>`).join("")}<rect x="${x + 21}" y="${y + 32}" width="3" height="9" rx="1.5" fill="#cbd5e1"/>`);
const j322Flower = (x, y, c) => `<circle cx="${x}" cy="${y}" r="6" fill="${c}"/><circle cx="${x}" cy="${y}" r="2.4" fill="#facc15"/>`;
const j322Dorm = () => `<rect x="34" y="22" width="92" height="82" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/><path d="M30 24 H130 L120 12 H40 Z" fill="#6366f1"/>` + [0, 1, 2].map(r => [0, 1, 2, 3].map(c => `<rect x="${42 + c * 21}" y="${30 + r * 20}" width="13" height="12" rx="2" fill="${(r + c) % 3 ? "#fde68a" : "#c7d2fe"}"/>`).join("")).join("") + `<rect x="72" y="88" width="16" height="16" rx="2" fill="#4338ca"/>`;

Object.assign(ILLUS, {
  "senior high school": () => svgWrap("#ede9fe", ground("#c7d2fe") + O.school(76, 82, .95) + txt(76, 16, "SENIOR HIGH", 9, "#4c1d95") + girlP(140, {s:.55, y:112, oc:"#1e3a8a", mood:"open"}) + kid(18, {s:.5, y:112, oc:"#1e3a8a", pose:"wave"})),
  campus: () => svgWrap("#e0f2fe", ground() + O.school(80, 66, .8) + O.tree(22, 84, .7) + O.tree(138, 84, .7) + `<path d="M72 120 L76 84 H84 L88 120 Z" fill="#e7d3a8"/>` + kid(50, {s:.42, y:112, pose:"wave"}) + girlP(112, {s:.42, y:112}) + O.sun(140, 18, .4)),
  dormitory: () => svgWrap("#1e1b4b", ground("#312e81") + j322Dorm() + `<circle cx="140" cy="20" r="9" fill="#fef3c7"/><circle cx="144" cy="17" r="8" fill="#1e1b4b"/>` + star(18, 18, 3, "#fef3c7") + star(150, 46, 2.5, "#fef3c7")),
  freshman: () => svgWrap("#ecfdf5", ground() + `<path d="M100 104 V30 M150 104 V30" stroke="#64748b" stroke-width="5"/><rect x="96" y="24" width="58" height="12" rx="3" fill="#0f766e"/>` + txt(125, 33, "WELCOME", 8, "#fff") + kid(60, {acc:["sweat"], eyes:"worry", mood:"wavy", oc:"#1e3a8a"}) + O.nametag(126, 68, .5, "NEW")),
  locker: () => svgWrap("#f1f5f9", `<rect x="0" y="104" width="160" height="16" fill="#cbd5e1"/>` + j322Locker(18, 34, "#60a5fa") + j322Locker(48, 34, "#60a5fa", true) + O.book(62, 52, .35, "#ef4444") + j322Locker(78, 34, "#60a5fa") + j322Locker(108, 34, "#60a5fa") + `<rect x="0" y="104" width="160" height="3" fill="#94a3b8"/>`),
  textbook: () => svgWrap("#f0fdf4", O.book(60, 60, 1.7, "#16a34a") + txt(64, 52, "ENGLISH", 7, "#fff") + O.book(114, 70, 1.2, "#f97316", 12) + O.pencil(132, 34, .8) + spark(22, 24, .7)),
  award: () => svgWrap("#fffbeb", ground("#fde68a") + j322Trophy(80, 66, 1.8) + spark(30, 30, .9) + spark(130, 30, .9) + star(132, 84, 6) + star(28, 84, 5)),
  bouquet: () => svgWrap("#fdf2f8", `<path d="M80 108 L56 56 H104 Z" fill="#f9a8d4" stroke="#db2777" stroke-width="1.5"/><path d="M70 82 L80 92 L90 82" stroke="#db2777" stroke-width="3" fill="none"/>` + `<path d="M66 56 L62 40 M80 56 V34 M94 56 L98 40 M72 56 L70 30 M88 56 L90 30" stroke="#16a34a" stroke-width="2"/>` + j322Flower(62, 40, "#f43f5e") + j322Flower(80, 32, "#fb923c") + j322Flower(98, 40, "#a855f7") + j322Flower(70, 28, "#facc15") + j322Flower(90, 28, "#f472b6") + j322Flower(80, 48, "#ef4444") + spark(30, 30, .7) + spark(132, 76, .7)),
  applause: () => svgWrap("#fef3c7", `<rect x="0" y="0" width="160" height="16" fill="#b91c1c"/>` + kid(32, {s:.7, pose:"cheer", mood:"open", eyes:"happy"}) + girlP(80, {s:.7, pose:"cheer", mood:"open", eyes:"happy", oc:"#a855f7"}) + kid(128, {s:.7, pose:"cheer", mood:"open", hair:"short", oc:"#22c55e"}) + txt(56, 36, "clap!", 10, "#b45309") + txt(108, 30, "clap!", 10, "#b45309") + spark(20, 30, .6) + spark(146, 40, .6)),
  intersection: () => svgWrap("#bbf7d0", `<rect x="0" y="46" width="160" height="30" fill="#64748b"/><rect x="66" y="0" width="30" height="120" fill="#64748b"/>` + [0, 1, 2, 3].map(i => `<rect x="${68 + i * 7}" y="80" width="4" height="12" fill="#fff"/>`).join("") + [0, 1, 2, 3].map(i => `<rect x="54" y="${48 + i * 7}" width="10" height="4" fill="#fff"/>`).join("") + `<rect x="112" y="16" width="12" height="28" rx="3" fill="#1f2937"/><circle cx="118" cy="22" r="3" fill="#ef4444"/><circle cx="118" cy="30" r="3" fill="#475569"/><circle cx="118" cy="38" r="3" fill="#475569"/><rect x="116" y="44" width="4" height="4" fill="#1f2937"/>` + O.bus(32, 60, .45)),
  path: () => svgWrap("#dcfce7", `<path d="M60 120 Q90 96 70 80 Q50 64 84 50 Q110 40 96 26" stroke="#e7d3a8" stroke-width="16" fill="none" stroke-linecap="round"/>` + O.tree(26, 70, .8) + O.tree(134, 82, .9) + O.tree(130, 30, .5) + O.flower(30, 100, .9) + O.flower(122, 104, .8) + O.sun(24, 20, .4)),
  sigh: () => svgWrap("#e2e8f0", ground("#cbd5e1") + kid(66, {eyes:"closed", mood:"o", oc:"#64748b"}) + `<path d="M86 58 Q96 54 104 58" stroke="#94a3b8" stroke-width="2" fill="none" stroke-linecap="round"/>` + O.cloud(122, 54, .7, "#f8fafc") + txt(122, 58, "haa...", 9, "#475569") + O.book(28, 96, .5, "#64748b")),
  preschool: () => svgWrap("#fef9c3", ground("#bbf7d0") + O.school(80, 70, .65) + kid(36, {s:.4, y:112, pose:"cheer", mood:"open"}) + girlP(124, {s:.4, y:112, pose:"wave", mood:"open"}) + `<rect x="62" y="94" width="12" height="12" rx="2" fill="#ef4444"/><rect x="74" y="94" width="12" height="12" rx="2" fill="#3b82f6"/><rect x="68" y="82" width="12" height="12" rx="2" fill="#22c55e"/>` + txt(68, 104, "A", 8, "#fff") + txt(80, 104, "B", 8, "#fff") + txt(74, 92, "C", 8, "#fff")),
  mentor: () => svgWrap("#f0f9ff", ground("#bae6fd") + O.blackboard(108, 40, .9, "GOAL!") + P({x:62, y:108, s:.9, hair:"bun", hc:"#374151", oc:"#0f766e", acc:["glasses"], pose:"point"}) + kid(26, {s:.6, y:108, mood:"open", eyes:"happy"})),
  interrupt: () => svgWrap("#fff7ed", ground("#fed7aa") + girlP(44, {mood:"open"}) + kid(116, {pose:"wave", mood:"open", acc:["sweat"]}) + bubble(44, 20, "So, I...", 56) + bubble(118, 20, "Wait!", 46)),
  congratulate: () => svgWrap("#f0fdf4", ground() + kid(54, {pose:"thumb", mood:"open", eyes:"happy"}) + girlP(112, {pose:"cheer", mood:"open", eyes:"happy"}) + j322Cap(112, 30, .8) + bubble(56, 20, "Congrats!", 64) + spark(140, 70, .8) + spark(22, 60, .6)),
  scholarship: () => svgWrap("#fffbeb", `<rect x="26" y="20" width="108" height="76" rx="4" fill="#fff" stroke="#d97706" stroke-width="3"/>` + txt(80, 40, "SCHOLARSHIP", 10, "#92400e") + `<path d="M44 52 H116 M44 62 H104" stroke="#e5e7eb" stroke-width="3" stroke-linecap="round"/>` + `<circle cx="112" cy="80" r="11" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>` + txt(112, 85, "$", 13, "#92400e") + star(46, 80, 6, "#f59e0b"))
});
/* ---------- 記憶小提示 ---------- */
Object.assign(MEMO, {
  "senior high school":"senior（年紀較大的、高年級的）+ high school：比國中更高一級的學校，就是高中。junior high 是國中。",
  vocational:"vocation（職業）+ al（……的）：和職業有關的，vocational school 就是學一技之長的技職學校。",
  admission:"admit（准許進入）的名詞：學校准許你進去，就是入學許可。",
  register:"register 唸起來像「瑞吉斯特」：開學第一天，瑞吉要先去註冊。",
  campus:"campus 開頭像 camp（營地）：學校就像大大的營地，就是校園。",
  dormitory:"dorm 常被當成簡稱；dormi 有「睡覺」的意思：學生睡覺的地方，就是宿舍。",
  semester:"se（六）+ mester（月）：大約半年、六個月的時間，就是一個學期。",
  tuition:"tuition 和 tutor（家教老師）是一家人：付給學校老師的錢，就是學費。",
  scholarship:"scholar（學者）+ ship（身分、狀態）：學問好的人得到的支持，就是獎學金。",
  course:"course 和 coarse 同音：上一門課程就像跑一條跑道（course 也有「路線」的意思）。",
  freshman:"fresh（新鮮的）+ man（人）＝新鮮人，就是剛入學的新生。",
  adjust:"ad（朝向）+ just（剛好）：一直調到剛剛好，就是調整。",
  challenge:"challenge 唸起來像「腔冷之」：站在高山上，腔調冷靜地接受挑戰。",
  grade:"grade 和 grow（成長）開頭一樣：一年一年長大，年級往上升；成績也一級一級往上爬。",
  appreciate:"ap + preci（價值，像 price）+ ate：看出一件事的價值，就會欣賞、感激它。",
  gratitude:"grati 和 grateful（感激的）是一家人：grateful 是形容詞，gratitude 是名詞「感激之情」。",
  thankful:"thank（感謝）+ ful（充滿）＝心裡充滿感謝。",
  honor:"honor 的 h 不發音，唸起來像「阿呢」：得到榮譽時，大家都說「啊～呢！」好厲害。",
  award:"a + ward 唸起來像「a 沃德」：頒獎台上，主持人唸出「A 組冠軍是沃德」！",
  bouquet:"bouquet 唸起來像「布凱」：布包著一大把花，就是花束。字尾 t 不發音！",
  congratulate:"con（一起）+ grat（高興，像 grateful）+ ulate：大家一起為你高興，就是恭喜。常說 Congratulations!",
  guidance:"guide（引導、導遊）+ ance（名詞字尾）＝指導。",
  patience:"patience 和 patient（病人；有耐心的）是一家人：照顧病人要很有耐心。",
  deserve:"de（完全）+ serve（服務）：你完全付出、好好服務，就值得得到回報。",
  effort:"ef（向外）+ fort（力量，像 force）：把力量往外用出來，就是努力。",
  sincerely:"sincere（真誠的）+ ly（副詞）＝真誠地。英文信件結尾常寫 Sincerely。",
  cherish:"cherish 唸起來像「切你需」：把你需要的東西好好收著，就是珍惜。",
  ambition:"ambition 唸起來像「俺必勝」：俺一定要成功，這就是雄心壯志。",
  ambitious:"ambition（抱負）把 tion 換成 tious，變成形容詞「有抱負的」。",
  determined:"de + term（期限、界線）+ ined：把界線畫好、不再改變，就是下定決心。",
  aim:"aim 唸起來像「愛恩」：愛射箭的恩恩，眼睛只瞄準目標。",
  passion:"passion 唸起來像「趴勳」：熱愛到可以趴在地上做一整天，那就是熱情。",
  profession:"profess（公開宣稱）+ ion：公開說「我是做這一行的」，就是職業。professional 是「專業的」。",
  ideal:"idea（想法）+ l：心中最好的想法，就是理想。",
  motivate:"motive（動機）去掉 e + ate：給你一個動機，讓你動起來（move）。",
  hesitate:"hesitate 唸起來像「黑西貼」：黑色西裝要不要貼標籤？猶豫了好久。",
  eventually:"event（事件）+ ually：事情一件一件發生，最後終於有了結果。",
  path:"path 和 pass（通過）很像：讓人通過的小路，就是 path。",
  contribute:"con（一起）+ tribute（給予）：大家一起把東西給出來，就是貢獻。",
  "give up":"give（給出去）+ up：把手上的東西整個交出去、舉白旗，就是放棄。",
  "look forward to":"look（看）+ forward（向前）：一直往前看，盼著那一天到來，就是期待。to 後面接 V-ing！",
  "look back":"look（看）+ back（向後）：回頭看，就是回顧。",
  reflect:"re（回來）+ flect（彎曲）：光彎回來就是「反射」，想法彎回自己身上就是「反省」。",
  forgive:"for + give（給）：給對方一次機會，就是原諒。forgive - forgave - forgiven。",
  fault:"fault 和 false（錯的）開頭一樣：做錯了，就是你的過錯。",
  silly:"silly 唸起來像「戲裡」：戲裡的小丑傻傻的。",
  ashamed:"a + shame（羞恥）+ d：覺得很丟臉，就是羞愧的。",
  waste:"waste 和 waist（腰）同音：吃太多浪費食物，最後都長到腰上了！",
  lesson:"lesson 裡有 less（更少）：每學到一個教訓，就會少犯一個錯。",
  differently:"different（不同的）+ ly（副詞）＝不同地。",
  sigh:"sigh 唸起來像「賽」：比賽輸了，忍不住嘆一口氣。gh 不發音。",
  preview:"pre（之前）+ view（看）＝事先看，就是預習、預告片。",
  preschool:"pre（之前）+ school（學校）＝上小學之前讀的學校，就是幼兒園。",
  prefix:"pre（之前）+ fix（固定）＝固定在單字前面的部分，就是字首。",
  review:"re（再）+ view（看）＝再看一次，就是複習。",
  restart:"re（再）+ start（開始）＝重新開始。",
  interact:"inter（互相）+ act（行動）＝你來我往的互動。",
  interrupt:"inter（中間）+ rupt（打破）＝從中間打斷別人。",
  intersection:"inter（之間）+ section（區塊）＝兩條路交叉的區塊，就是十字路口。",
  progress:"pro（向前）+ gress（走）＝一直往前走，就是進步。",
  confidence:"con（完全）+ fid（相信）+ ence：完全相信自己，就是自信。",
  applause:"applause 和 apple 開頭一樣：表演太精彩，觀眾一邊吃蘋果一邊鼓掌。",
  mentor:"mentor 唸起來像「門特兒」：在門口特別等你、陪你長大的人，就是良師益友。",
  locker:"lock（鎖）+ er（東西）＝可以上鎖的櫃子，就是置物櫃。",
  textbook:"text（文字、課文）+ book（書）＝課本。",
  former:"form 有「前面」的感覺，former 就是「以前的、前任的」。",
});
registerUnit("j3-2-2", {name:"國三 下學期 第二次段考（畢業考）", sub:"關係代名詞 what、與過去事實相反的假設、關係副詞 where／when／why、分詞構句", words:J3_2_2_WORDS, grammar:J3_2_2_GRAMMAR, quiz:J3_2_2_QUIZ, classes:Object.assign({}, J3_2_2_CLASS, J3_2_2_PHONICS_CLASS), phonics:J3_2_2_PHONICS});
})();
