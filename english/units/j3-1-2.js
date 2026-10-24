/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   內容資料：國三上學期 第二次段考（通用範圍）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 文法說明] x3], null, null, 插圖]
   插圖："表情符號|標籤" 為概念卡（抽象的字用），其他的字畫在下面的 ILLUS
   主題：人物個性、朋友與人際關係、校園社團與活動、書籍電影與喜好、-er / -or / -ist 表示「人」的字
   ========================================================= */
const J3_1_2_WORDS = [
/* ---------- 人物與個性 ---------- */
["personality","n.","個性；性格",[
 ["My sister has a cheerful personality.","我妹妹的個性很開朗。","has a + 形容詞 + personality，表示「個性……」。主詞 My sister 是第三人稱單數，用 has。"],
 ["I like people who have a good personality.","我喜歡個性好的人。","who 是主格關係代名詞，修飾 people。people 是複數，所以 who 後面用 have。"],
 ["It is important to have a good personality.","有好的個性很重要。","It is + 形容詞 + to V。It 是虛主詞，真正的主詞是 to have a good personality。"]],null,null,"🌈|個性"],
["outgoing","adj.","外向的",[
 ["Amy is an outgoing girl who makes friends easily.","艾美是個很容易交到朋友的外向女孩。","who 修飾單數的 girl，所以 make 加 s。outgoing 是母音開頭，前面用 an。"],
 ["Outgoing people usually enjoy parties.","外向的人通常喜歡派對。","outgoing 放在名詞 people 前面當形容詞。頻率副詞 usually 放在一般動詞前面。"],
 ["He is shy at school but outgoing at home.","他在學校很害羞，在家卻很外向。","but 連接兩個意思相反的形容詞 shy 和 outgoing。"]],null,null,"🙌|外向的"],
["cheerful","adj.","開朗的；令人愉快的",[
 ["The girl who sits next to me is always cheerful.","坐我旁邊的女孩總是很開朗。","who sits next to me 修飾 The girl，整句的主要動詞是 is。always 放在 be 動詞後面。"],
 ["Her cheerful smile makes everyone happy.","她開朗的笑容讓每個人都很開心。","make + 人 + 形容詞。主詞 smile 是單數，makes 加 s；everyone 也看成單數。"],
 ["Let's sing a cheerful song together.","我們一起唱首輕快的歌吧。","Let's + 原形動詞，表示「我們一起……吧」。cheer + ful = cheerful。"]],null,null,"😄|開朗的"],
["humble","adj.","謙虛的",[
 ["The singer who won the prize is still very humble.","那位得獎的歌手還是很謙虛。","who won the prize 修飾 The singer，主要動詞是 is。won 是 win 的過去式。"],
 ["It's good to be humble.","謙虛是好事。","It is + 形容詞 + to V，to 後面接原形 be。"],
 ["Be humble and keep learning.","要謙虛，並持續學習。","祈使句用原形動詞 Be 開頭；keep + V-ing 表示「持續做……」。"]],null,null,"🙇|謙虛的"],
["selfish","adj.","自私的",[
 ["It was selfish of him to eat all the cookies.","他把餅乾全吃光，真是自私。","selfish 是在說「人」的個性，所以用 It is + 形容詞 + of + 人 + to V。"],
 ["Nobody likes people who are selfish.","沒有人喜歡自私的人。","who 修飾複數的 people，用 are。Nobody 是單數，likes 加 s。"],
 ["Don't be so selfish. Share your toys with your brother.","別那麼自私，把玩具分給弟弟玩。","Don't be + 形容詞，是否定的祈使句。share A with B 是「和 B 分享 A」。"]],null,null,"🙅|自私的"],
["rude","adj.","無禮的；粗魯的",[
 ["It's rude of you to talk with your mouth full.","你嘴巴塞滿食物還說話，很沒禮貌。","rude 是在說人，用 of you，不用 for you。"],
 ["The man who shouted at the clerk was very rude.","對店員大吼的那個男人很無禮。","who shouted at the clerk 修飾 The man，主要動詞是 was。"],
 ["Don't be rude to your teachers.","不要對老師沒禮貌。","be rude to + 人：對某人無禮。"]],null,null,"😤|無禮的"],
["brave","adj.","勇敢的",[
 ["It was brave of the boy to save the cat.","那個男孩救了那隻貓，真勇敢。","brave 是在稱讚人的個性，用 It is + 形容詞 + of + 人 + to V。"],
 ["A firefighter is a person who is brave and strong.","消防員是勇敢又強壯的人。","who 修飾 a person，who 後面的動詞跟著 a person 用單數 is。"],
 ["Be brave and try again.","勇敢一點，再試一次。","祈使句 Be + 形容詞，and 後面接另一個原形動詞 try。"]]],
["gentle","adj.","溫柔的；溫和的",[
 ["My grandma is a gentle woman who never gets angry.","我奶奶是個從來不生氣的溫柔女人。","who 修飾 a gentle woman，所以 gets 加 s。never 放在一般動詞前面。"],
 ["Please be gentle with the baby.","對寶寶請溫柔一點。","be gentle with + 人或動物：對……溫柔。"],
 ["He spoke in a gentle voice.","他用溫和的聲音說話。","in a + 形容詞 + voice，表示「用……的聲音」。speak 的過去式是 spoke。"]],null,null,"🕊️|溫柔的"],
["lazy","adj.","懶惰的",[
 ["The cat which is sleeping on the sofa is very lazy.","在沙發上睡覺的那隻貓很懶。","which 修飾動物 The cat，也可以換成 that。which 是主格，不能省略。"],
 ["Don't be lazy. Finish your homework first.","別偷懶，先把功課寫完。","Don't be + 形容詞 是否定祈使句。"],
 ["He was too lazy to clean his room.","他懶得打掃自己的房間。","too + 形容詞 + to V，表示「太……而不……」。"]]],
["hardworking","adj.","努力的；勤奮的",[
 ["Ken is a hardworking student who studies every night.","肯是個每天晚上都讀書的用功學生。","who 修飾單數的 student，study 要改成 studies。"],
 ["My parents are both hardworking.","我爸媽都很勤奮。","both 放在 be 動詞後面，表示「兩個都」。"],
 ["It's important for students to be hardworking.","對學生來說，勤奮很重要。","important 是在說「這件事」重要，用 for + 人。"]],null,null,"💪|努力的"],
["thoughtful","adj.","體貼的；考慮周到的",[
 ["It's thoughtful of you to bring me an umbrella.","你幫我帶傘來，真體貼。","thoughtful 是在稱讚人，用 of you。"],
 ["She is a thoughtful friend who always remembers my birthday.","她是個總是記得我生日的體貼朋友。","who 修飾 a thoughtful friend，remember 加 s。"],
 ["Thank you for the thoughtful card.","謝謝你這張貼心的卡片。","Thank you for + 名詞。thought（想法）+ ful = thoughtful。"]],null,null,"💝|體貼的"],
["responsible","adj.","負責任的；負責的",[
 ["Tom is responsible for feeding the dog.","湯姆負責餵狗。","be responsible for + 名詞或 V-ing，表示「負責……」。for 是介系詞，後面用 feeding。"],
 ["We need a leader who is responsible.","我們需要一位負責任的領導者。","who is responsible 修飾 a leader。"],
 ["It's important to be responsible for your own mistakes.","為自己的錯誤負責很重要。","It is + 形容詞 + to V。"]],null,null,"✅|負責任的"],
["confident","adj.","有自信的",[
 ["Practice makes you more confident.","練習讓你更有自信。","make + 人 + 形容詞；confident 是多音節形容詞，比較級用 more confident。"],
 ["The girl whose speech won first prize looked very confident.","演講得到第一名的那個女孩看起來很有自信。","whose + 名詞 speech，表示「她的演講」。look + 形容詞，表示「看起來……」。"],
 ["I'm confident that our team will win.","我有信心我們隊會贏。","be confident that + 子句，表示「有信心……」。"]],null,null,"😎|有自信的"],
["stubborn","adj.","固執的",[
 ["My little brother is as stubborn as a mule.","我弟弟像騾子一樣固執。","as + 形容詞原級 + as，表示「和……一樣」。"],
 ["It's hard to change the mind of a stubborn person.","要改變固執的人的想法很難。","It is + 形容詞 + to V。change one's mind 是「改變心意」。"],
 ["Don't be stubborn. Listen to others.","別固執了，聽聽別人的意見。","listen to + 人：聽某人說。others 是「別人」。"]],null,null,"🐂|固執的"],
/* ---------- 朋友與人際關係 ---------- */
["friendship","n.","友誼",[
 ["Our friendship began in elementary school.","我們的友誼從小學就開始了。","begin 的過去式是 began。friend + ship = friendship。"],
 ["This is a story about a friendship which lasted fifty years.","這是一個關於維持了五十年的友誼的故事。","which 修飾事物 a friendship，是主格，不能省略。last 在這裡是動詞「持續」。"],
 ["Nothing is more important than friendship.","沒有什麼比友誼更重要。","Nothing is + 比較級 + than……，意思等於「……最重要」。"]],null,null,"🤝|友誼"],
["trust","v./n.","信任",[
 ["Trust is something that you can't buy.","信任是你買不到的東西。","that 是受格關係代名詞，修飾 something，可以省略：something you can't buy。"],
 ["I trust my best friend.","我信任我最好的朋友。","trust 當動詞，後面直接接人，不加介系詞。"],
 ["Don't trust people who tell lies.","不要相信說謊的人。","who 修飾複數的 people，所以用 tell。tell lies 是「說謊」。"]],null,null,"💞|信任"],
["relationship","n.","關係",[
 ["I have a good relationship with my parents.","我和爸媽的關係很好。","have a good relationship with + 人：和某人關係很好。"],
 ["Trust is important in every relationship.","信任在每一段關係中都很重要。","every + 單數名詞 relationship。"],
 ["It takes time to build a good relationship.","建立好的關係需要時間。","It takes + 時間 + to V，表示「做某事要花時間」。"]],null,null,"🔗|關係"],
["partner","n.","夥伴；搭檔",[
 ["My partner for the science project is Lisa.","我科學專題的搭檔是麗莎。","partner for + 活動：某個活動的搭檔。"],
 ["I need a partner who can speak English well.","我需要一個英文說得好的搭檔。","who 修飾 a partner；can 後面接原形動詞 speak。"],
 ["Find a partner and practice the dialogue.","找一個搭檔，練習這段對話。","祈使句用原形動詞 Find 開頭，and 後面也用原形 practice。"]],null,null,"👫|搭檔"],
["stranger","n.","陌生人",[
 ["Don't talk to strangers.","不要和陌生人說話。","talk to + 人。stranger 是可數名詞，這裡用複數 strangers。"],
 ["A stranger is someone that you don't know.","陌生人就是你不認識的人。","that 在這裡是受格關係代名詞（你不認識「他」），可以省略：someone you don't know。"],
 ["A stranger helped me find my way.","一個陌生人幫我找到了路。","help + 人 + 原形動詞 find。"]],null,null,"👤|陌生人"],
["get along","v.","相處",[
 ["I get along well with my classmates.","我和同學相處得很好。","get along (well) with + 人：和某人相處（得好）。"],
 ["It's not easy for my cat and dog to get along.","要我的貓和狗和平相處可不容易。","easy 在說這件事，用 It is + 形容詞 + for + 人或動物 + to V。"],
 ["People who get along with others are usually happy.","能和別人相處融洽的人通常很快樂。","who 修飾複數的 People，主要動詞是 are。"]],null,null,"😊|相處融洽"],
["argue","v.","爭吵；爭論",[
 ["My brother and I often argue about the TV.","我哥哥和我常常為了電視吵架。","argue about + 事情：為了某事吵架。"],
 ["They argued with each other yesterday.","他們昨天互相吵架了。","argue with + 人：和某人吵架。argue 字尾是 e，過去式直接加 d：argued。"],
 ["It's silly to argue about small things.","為了小事吵架很傻。","It is + 形容詞 + to V。"]]],
["apologize","v.","道歉",[
 ["You should apologize to her.","你應該向她道歉。","apologize to + 人：向某人道歉。should 後面接原形。"],
 ["He apologized for being late.","他為遲到道歉。","apologize for + 名詞或 V-ing：為某事道歉。"],
 ["It was nice of you to apologize first.","你先道歉，人真好。","nice 是在稱讚人，用 of you。"]]],
["secret","n.","秘密；祕訣",[
 ["Can you keep a secret?","你能保守秘密嗎？","keep a secret 是「保守秘密」。"],
 ["This is the secret which I have never told anyone.","這是我從來沒告訴過任何人的秘密。","which 是受格關係代名詞，可以省略：the secret I have never told anyone。"],
 ["The secret of her success is hard work.","她成功的祕訣就是努力。","the secret of + 名詞：……的祕訣。"]]],
["encourage","v.","鼓勵",[
 ["My teacher encouraged me to join the contest.","老師鼓勵我參加比賽。","encourage + 人 + to V：鼓勵某人去做。"],
 ["Parents should encourage their children to read.","父母應該鼓勵孩子閱讀。","should + 原形 encourage；encourage + 人 + to V。"],
 ["Thank you for encouraging me.","謝謝你鼓勵我。","Thank you for + V-ing。encourage 去 e 加 ing。"]],null,null,"📣|鼓勵"],
["respect","v./n.","尊重；尊敬",[
 ["We should respect people who are different from us.","我們應該尊重和我們不一樣的人。","who 修飾 people；be different from 是「和……不同」。"],
 ["Students respect Mr. Lin because he is fair.","學生尊敬林老師，因為他很公平。","because 後面接原因。"],
 ["Show respect to the elderly.","要尊敬長輩。","show respect to + 人：對某人表示尊敬。respect 在這裡是名詞。"]],null,null,"🙏|尊重"],
["promise","v./n.","答應；承諾",[
 ["I promise to be on time.","我答應會準時。","promise + to V：答應要做某事。"],
 ["Never break a promise that you made.","永遠不要違背你許下的承諾。","that 是受格關係代名詞，修飾 a promise，可以省略。"],
 ["He kept his promise.","他遵守了承諾。","keep a promise 是守信，break a promise 是失信。keep 的過去式是 kept。"]],null,null,"🤙|承諾"],
["admire","v.","欽佩；欣賞",[
 ["I admire people who are honest.","我欣賞誠實的人。","who 修飾 people，用 are。"],
 ["Everyone admires her because she is brave.","每個人都欽佩她，因為她很勇敢。","Everyone 是單數，admire 加 s。"],
 ["We stopped to admire the view.","我們停下來欣賞風景。","stop + to V 是「停下來去做某事」。"]],null,null,"🤩|欽佩"],
/* ---------- 校園社團與活動 ---------- */
["club","n.","社團",[
 ["I joined the English club this year.","我今年參加了英文社。","參加社團用 join。"],
 ["The club which I like best is the dance club.","我最喜歡的社團是熱舞社。","which 是受格關係代名詞，可以省略：The club I like best is...。主要動詞是 is。"],
 ["Our club meets every Friday afternoon.","我們社團每個星期五下午聚會。","主詞 Our club 是單數，meet 加 s。"]]],
["member","n.","成員；社員",[
 ["Lily is a member of the school band.","莉莉是學校樂隊的團員。","a member of + 團體：……的一員。"],
 ["Members who are late must clean the room.","遲到的社員必須打掃教室。","who 修飾複數的 Members，用 are；must 後面接原形。"],
 ["Our club has thirty members.","我們社團有三十個社員。","主詞 Our club 是單數，用 has。"]],null,null,"🪪|成員"],
["leader","n.","領導者；隊長",[
 ["A good leader listens to everyone.","好的領導者會聽每個人的意見。","主詞 A good leader 是單數，listen 加 s。"],
 ["The boy who is talking to the teacher is our class leader.","正在跟老師說話的那個男孩是我們班長。","who is talking 修飾 The boy，主要動詞是第二個 is。"],
 ["It's not easy to be a leader.","當領導者不容易。","It is + 形容詞 + to V。lead（帶領）+ er = leader。"]]],
["captain","n.","隊長；船長",[
 ["Ben is the captain of our basketball team.","班是我們籃球隊的隊長。","the captain of + 隊伍。"],
 ["The captain whose team won the game was very happy.","那位球隊贏球的隊長非常開心。","whose team = 他的球隊。whose 後面一定要接名詞。"],
 ["The captain told everyone to stay calm.","船長叫大家保持冷靜。","tell + 人 + to V。stay + 形容詞，表示「保持……」。"]]],
["teammate","n.","隊友",[
 ["My teammates cheered for me.","我的隊友們為我加油。","cheer for + 人：為某人加油。"],
 ["I have a teammate whose dad is a famous player.","我有一個隊友，他的爸爸是有名的球員。","whose dad = 那個隊友的爸爸。"],
 ["Help your teammates when they need you.","隊友需要你的時候要幫助他們。","when 引導時間副詞子句。team + mate（夥伴）= teammate。"]]],
["activity","n.","活動",[
 ["Swimming is an activity that I enjoy in summer.","游泳是我夏天很喜歡的活動。","that 是受格關係代名詞，修飾 an activity，可以省略。"],
 ["Our school has many after-school activities.","我們學校有很多課後活動。","activity 的複數：y 改成 i 再加 es，變 activities。"],
 ["It's fun for kids to do outdoor activities.","對小孩來說，做戶外活動很好玩。","It is + 形容詞 + for + 人 + to V。"]],null,null,"🎯|活動"],
["concert","n.","音樂會；演唱會",[
 ["We went to a concert last Saturday.","我們上星期六去聽了一場音樂會。","go to a concert 是「去聽音樂會」，go 的過去式是 went。"],
 ["The concert which we went to was wonderful.","我們去聽的那場演唱會很精彩。","which 是 go to 的受詞，是受格，可以省略；介系詞 to 留在子句最後。"],
 ["It's exciting for fans to see their favorite singer at a concert.","對粉絲來說，在演唱會上看到最喜歡的歌手很興奮。","exciting 是在說這件事，用 It is + 形容詞 + for + 人 + to V。"]],null,null,"🎤|音樂會"],
["choir","n.","合唱團",[
 ["Mia sings in the school choir.","米亞在學校合唱團唱歌。","sing in the choir：在合唱團唱歌。"],
 ["The choir that won the contest will sing at the party.","贏得比賽的合唱團會在派對上演唱。","that 是主格關係代名詞，修飾 The choir，不能省略。"],
 ["Our choir practices twice a week.","我們合唱團一週練習兩次。","twice a week：一週兩次。主詞單數，practice 加 s。"]]],
["band","n.","樂團；樂隊",[
 ["My brother plays the drums in a band.","我哥哥在一個樂團裡打鼓。","play the + 樂器。"],
 ["This is the band whose songs I love.","這就是那個樂團，他們的歌我超愛。","whose songs = 這個樂團的歌。whose 也可以修飾團體或事物。"],
 ["The band is going to perform at the festival.","樂團將會在音樂節表演。","be going to + 原形動詞，表示「將要」。"]]],
["perform","v.","表演；演出",[
 ["We will perform a play on Teachers' Day.","我們會在教師節演一齣戲。","will + 原形動詞。play 在這裡是名詞「戲劇」。"],
 ["The students who performed on stage were nervous.","在台上表演的學生都很緊張。","who 修飾 The students，主要動詞是 were。"],
 ["It's exciting to perform in front of many people.","在很多人面前表演很刺激。","It is + 形容詞 + to V。in front of 是「在……前面」。"]],null,null,"🎭|表演"],
["audience","n.","觀眾；聽眾",[
 ["The audience clapped loudly after the show.","表演結束後，觀眾大聲鼓掌。","clap 的過去式要重複 p：clapped。"],
 ["There was a large audience at the concert.","音樂會上有很多觀眾。","audience 是一群人，說「很多觀眾」用 a large audience。"],
 ["The audience that watched the play loved it.","看了那齣戲的觀眾都很喜歡。","that 是主格關係代名詞，修飾 The audience，不能省略。"]]],
["organize","v.","籌辦；組織",[
 ["Our class organized a party for Mr. Wang.","我們班為王老師辦了一場派對。","organize 字尾是 e，過去式加 d：organized。"],
 ["The student who organized the event is Jenny.","籌辦這個活動的學生是珍妮。","who organized the event 修飾 The student，主要動詞是 is。"],
 ["It's hard to organize a big event.","籌辦大型活動很難。","It is + 形容詞 + to V。"]],null,null,"📋|籌辦"],
["sign up","v.","報名",[
 ["I signed up for the art club.","我報名了美術社。","sign up for + 活動：報名參加……。"],
 ["Students who want to join should sign up today.","想參加的學生今天就要報名。","who 修飾 Students；should 後面接原形 sign up。"],
 ["Did you sign up for the trip?","你報名那趟旅行了嗎？","Did + 主詞 + 原形動詞？"]],null,null,"✍️|報名"],
/* ---------- 書籍、電影與喜好 ---------- */
["novel","n.","小說",[
 ["This is the novel that I told you about.","這就是我跟你說過的那本小說。","that 是受格關係代名詞，可以省略；about 要留在句尾。"],
 ["She has read all the novels by this writer.","她讀過這位作家所有的小說。","has read 是現在完成式；by + 作者，表示「……寫的」。"],
 ["It took me a week to finish the novel.","我花了一個星期讀完這本小說。","It takes + 人 + 時間 + to V，過去式用 took。"]]],
["character","n.","角色；個性；（中文）字",[
 ["Who is your favorite character in the movie?","電影裡你最喜歡哪個角色？","favorite character：最喜歡的角色。"],
 ["The character who saves the city is a little girl.","拯救這座城市的角色是一個小女孩。","故事裡的角色是人，關係代名詞用 who。"],
 ["Chinese has thousands of characters.","中文有好幾千個字。","character 也可以指「中文字」。thousands of 是「好幾千的」。"]],null,null,"🦸|角色"],
["author","n.","作者",[
 ["Who is the author of this book?","這本書的作者是誰？","the author of + 書。"],
 ["The author whose books sell well lives in Tainan.","那位書很暢銷的作者住在台南。","whose books = 那位作者的書；sell well 是「賣得好」。主詞 The author 是單數，用 lives。"],
 ["I want to be an author someday.","我希望有一天能當作者。","author 是母音開頭，前面用 an。"]]],
["plot","n.","情節；劇情",[
 ["The plot of the movie is very exciting.","這部電影的情節非常刺激。","the plot of + 作品。"],
 ["I like stories which have surprising plots.","我喜歡情節出人意料的故事。","which 修飾複數的 stories，所以用 have。"],
 ["Don't tell me the plot! I haven't seen it yet.","別告訴我劇情！我還沒看。","haven't + 過去分詞 + yet：還沒……。"]],null,null,"🧵|情節"],
["chapter","n.","章；章節",[
 ["I read one chapter every night.","我每天晚上讀一章。","every night：每天晚上。"],
 ["The chapter which I read last night was sad.","我昨晚讀的那一章很悲傷。","which 是受格關係代名詞，可以省略。read 的過去式還是 read，但唸 /rɛd/。"],
 ["Please turn to Chapter 3.","請翻到第三章。","Chapter + 數字時，Chapter 要大寫。"]]],
["poem","n.","詩",[
 ["She wrote a poem for her mother.","她為媽媽寫了一首詩。","write 的過去式是 wrote。"],
 ["This is a poem that every student knows.","這是每個學生都知道的一首詩。","that 是受格關係代名詞，可以省略。every student 是單數，用 knows。"],
 ["It's not easy to write a good poem.","寫一首好詩不容易。","It is + 形容詞 + to V。"]]],
["poet","n.","詩人",[
 ["Li Bai is a famous Chinese poet.","李白是有名的中國詩人。","famous 和 Chinese 兩個形容詞都放在名詞 poet 前面。"],
 ["A poet is a person who writes poems.","詩人就是寫詩的人。","who writes poems 修飾 a person。"],
 ["The poet whose poems we read today lived long ago.","我們今天讀的那些詩，作者是很久以前的人。","whose poems = 那位詩人的詩。whose 後面一定接名詞。"]],null,null,"🪶|詩人"],
["mystery","n.","謎；推理小說",[
 ["I love reading mystery novels.","我很愛看推理小說。","love + V-ing；mystery 放在 novels 前面，說明是哪一種小說。"],
 ["The mystery which the detective solved was very hard.","那個偵探解開的謎題非常難。","which 是受格關係代名詞（偵探解開「它」），可以省略。"],
 ["Why he left is still a mystery.","他為什麼離開，到現在還是個謎。","Why he left 是名詞子句當主詞，看成單數，用 is。"]]],
["hero","n.","英雄；（故事的）男主角",[
 ["My dad is my hero.","我爸爸是我的英雄。","hero 也可以指心中最崇拜的人。"],
 ["The hero of the story is a brave boy who saves his town.","故事的主角是一個拯救了家鄉的勇敢男孩。","who saves his town 修飾 a brave boy。"],
 ["Firefighters are real heroes.","消防員是真正的英雄。","hero 的複數要加 es：heroes。"]]],
["ending","n.","結局",[
 ["The movie has a happy ending.","這部電影有快樂的結局。","a happy ending：快樂結局。end + ing = ending。"],
 ["I didn't like the ending of the novel.","我不喜歡那本小說的結局。","the ending of + 作品。"],
 ["Stories that have sad endings make me cry.","結局悲傷的故事會讓我哭。","that 是主格關係代名詞，修飾 Stories；make + 人 + 原形 cry。"]],null,null,"🏁|結局"],
["scene","n.","（電影的）一幕；場景",[
 ["This is my favorite scene in the movie.","這是電影裡我最喜歡的一幕。","favorite 放在名詞 scene 前面。"],
 ["The scene that made me cry was at the end.","讓我哭的那一幕在最後面。","that 是主格關係代名詞，修飾 The scene，不能省略。"],
 ["They are shooting a scene in the park.","他們正在公園拍一場戲。","be + V-ing 是現在進行式。shoot a scene 是「拍一場戲」。"]]],
["fan","n.","粉絲；迷",[
 ["I'm a big fan of that singer.","我是那個歌手的超級粉絲。","a big fan of + 人或事物。"],
 ["Fans who waited for hours finally saw the band.","等了好幾個小時的粉絲終於看到樂團了。","who waited for hours 修飾 Fans，主要動詞是 saw。"],
 ["My dad is a baseball fan.","我爸爸是棒球迷。","a + 名詞 + fan：……迷。"]]],
["recommend","v.","推薦",[
 ["Can you recommend a good novel?","你可以推薦一本好看的小說嗎？","Can you + 原形動詞？是請求別人幫忙。"],
 ["The book which you recommended was great.","你推薦的那本書很棒。","which 是受格關係代名詞，可以省略：The book you recommended...。"],
 ["I recommend this movie to everyone.","我把這部電影推薦給每個人。","recommend + 東西 + to + 人。"]],null,null,"👍|推薦"],
["favorite","adj./n.","最喜愛的（人事物）",[
 ["What's your favorite movie?","你最喜歡什麼電影？","favorite 當形容詞，放在名詞前面。"],
 ["My favorite author is a woman who writes about animals.","我最喜歡的作者是一位寫動物故事的女性。","who writes about animals 修飾 a woman。"],
 ["This song is my favorite.","這首歌是我的最愛。","favorite 也可以當名詞「最喜愛的東西」。favorite 本身就是「最」，不要再加 most。"]],null,null,"❤️|最喜愛的"],
/* ---------- -er / -or / -ist 表示「人」 ---------- */
["pianist","n.","鋼琴家",[
 ["A pianist is someone who plays the piano.","鋼琴家就是彈鋼琴的人。","who 修飾 someone；play the + 樂器。piano + ist = pianist，字尾的 o 去掉。"],
 ["The young pianist gave a wonderful concert.","那位年輕的鋼琴家開了一場很棒的音樂會。","give a concert 是「開音樂會」，give 的過去式是 gave。"],
 ["It's my dream to become a pianist.","成為鋼琴家是我的夢想。","It is + 名詞 + to V，It 代替 to become a pianist。"]]],
["guitarist","n.","吉他手",[
 ["The guitarist in the band is my cousin.","樂團裡的吉他手是我表哥。","主詞是 The guitarist，in the band 只是修飾它的介系詞片語。"],
 ["We need a guitarist who can sing too.","我們需要一個也會唱歌的吉他手。","who 修飾 a guitarist；can + 原形 sing。"],
 ["The guitarist played a song that I love.","吉他手彈了一首我很喜歡的歌。","that 是受格關係代名詞，修飾 a song，可以省略。"]]],
["novelist","n.","小說家",[
 ["J. K. Rowling is a famous novelist.","J. K. 羅琳是有名的小說家。","novel（小說）+ ist = novelist。"],
 ["A novelist is a writer who writes novels.","小說家是寫小說的作家。","who 修飾 a writer，write 加 s。"],
 ["The novelist whose book became a movie is very popular now.","那位作品被拍成電影的小說家現在很紅。","whose book = 那位小說家的書。"]],null,null,"📚|小說家"],
["journalist","n.","記者",[
 ["My aunt is a journalist who writes for a newspaper.","我阿姨是為報社寫稿的記者。","who 修飾 a journalist，write 加 s。"],
 ["Journalists must report the truth.","記者必須報導真相。","must + 原形動詞 report。"],
 ["The journalist asked the mayor many questions.","那位記者問了市長很多問題。","ask + 人 + 問題。journal（日誌、期刊）+ ist = journalist。"]],null,null,"📰|記者"],
["violinist","n.","小提琴家",[
 ["A violinist is a musician who plays the violin.","小提琴家是拉小提琴的音樂家。","who 修飾 a musician；play the + 樂器。violin + ist = violinist。"],
 ["The violinist whose music I love is from Japan.","我很喜歡她的音樂的那位小提琴家來自日本。","whose music = 那位小提琴家的音樂；主要動詞是 is。"],
 ["It takes years of practice to become a violinist.","要成為小提琴家需要好幾年的練習。","It takes + 時間 + to V，表示「做某事要花多少時間」。"]]],
["director","n.","導演；主任",[
 ["The director told the actors to start.","導演叫演員們開始。","tell + 人 + to V。direct（指導）+ or = director。"],
 ["Ang Lee is a director who has won many awards.","李安是得過很多獎的導演。","who has won 是現在完成式，has 配合單數的 a director。"],
 ["Who is the director of this movie?","這部電影的導演是誰？","the director of + 電影。"]]],
["editor","n.","編輯",[
 ["She is the editor of the school newspaper.","她是校刊的編輯。","the editor of + 刊物。edit（編輯）+ or = editor。"],
 ["An editor is a person who checks and improves writing.","編輯是檢查並修改文章的人。","who 後面的兩個動詞 checks、improves 都要配合 a person 加 s。"],
 ["The editor found three mistakes in my story.","編輯在我的故事裡找到三個錯誤。","find 的過去式是 found。"]],null,null,"✏️|編輯"],
["translator","n.","翻譯者；譯者",[
 ["A translator is someone who changes one language into another.","翻譯者就是把一種語言轉成另一種語言的人。","change A into B：把 A 變成 B。"],
 ["The translator helped us talk with the Japanese students.","翻譯人員幫我們和日本學生交談。","help + 人 + 原形動詞 talk。"],
 ["It's hard to be a good translator.","要當一個好的翻譯者很難。","It is + 形容詞 + to V。translate（翻譯）去 e + or = translator。"]],null,null,"🗣️|翻譯者"],
["designer","n.","設計師",[
 ["My sister wants to be a fashion designer.","我姐姐想當服裝設計師。","want to be + 職業。design + er = designer。"],
 ["The designer whose clothes are popular is from Taiwan.","那位衣服很受歡迎的設計師來自台灣。","whose clothes = 那位設計師的衣服。clothes 是複數，用 are。"],
 ["The designer who made this poster is my friend.","設計這張海報的設計師是我朋友。","who made this poster 修飾 The designer，主要動詞是 is。"]]],
["photographer","n.","攝影師",[
 ["The photographer took a picture of our class.","攝影師幫我們班拍了照。","take a picture of + 人或物。"],
 ["A photographer is a person who takes photos.","攝影師就是拍照的人。","who 修飾 a person，take 加 s。"],
 ["I want to be a photographer who travels around the world.","我想當一個環遊世界的攝影師。","who travels around the world 修飾 a photographer。"]]],
["owner","n.","主人；擁有者",[
 ["Who is the owner of this bike?","這輛腳踏車的主人是誰？","the owner of + 東西。own（擁有）+ er = owner。"],
 ["The dog ran to its owner.","那隻狗跑向牠的主人。","its 是 it 的所有格，不能寫成 it's（it is）。"],
 ["The owner whose shop is next to my school is very nice.","那位店就開在我學校隔壁的老闆人很好。","whose shop = 那位老闆的店。"]]],
["manager","n.","經理",[
 ["The manager of the store is very busy.","那家店的經理很忙。","the manager of + 店或公司。manage（管理）去 e + er = manager。"],
 ["My dad is a manager who works in a bank.","我爸爸是在銀行工作的經理。","who 修飾 a manager，work 加 s。"],
 ["It was kind of the manager to give us a discount.","經理給我們打折，人真好。","kind 是在稱讚人，用 of + 人。"]],null,null,"💼|經理"],
["speaker","n.","演講者；說某種語言的人",[
 ["The speaker at the meeting was a famous writer.","那場會議的講者是一位有名的作家。","speak（說）+ er = speaker。"],
 ["The speaker who gave the talk was very funny.","那位演講的講者很風趣。","who gave the talk 修飾 The speaker。give a talk 是「演講」。"],
 ["She is a good speaker of English.","她英文說得很好。","a good speaker of + 語言：……說得很好的人。"]]]
];

const J3_1_2_GRAMMAR = [
{ id:"g1", title:"關係代名詞 who / that：修飾「人」（主格）",
  intro:"想說「會彈鋼琴的那個女孩」、「住在隔壁的那個男人」，英文要用關係代名詞把一句話接在名詞後面。被修飾的名詞叫「先行詞」。先行詞是「人」，而且關係代名詞在子句裡當主詞時，用 who 或 that。",
  table:[["步驟","例子"],["兩句話","I know the girl. + She plays the piano."],["找出同一個人","the girl = She"],["把 She 換成 who，接在 the girl 後面","I know the girl who plays the piano."],["句型","先行詞（人）+ who / that + 動詞……"],["關係子句在主詞後面","The man who lives next door is a doctor."]],
  points:[
   "先行詞是「人」用 who 或 that；先行詞是事物或動物不能用 who：the boy who…、the cat which / that…。",
   "who 後面的動詞要跟著先行詞變：the girl who plays（單數加 s）、the girls who play（複數不加 s）。",
   "主格 who 已經取代了主詞，後面不能再放 he、she、they：The girl who she sings… 是錯的。",
   "主格 who / that 不能省略：The boy who won the game… 不能說 The boy won the game is…。",
   "關係子句放在主詞後面時，別忘了整句真正的動詞：The man who lives next door is a doctor.（主要動詞是 is）。",
   "常考合併題：兩句話裡找出同一個人，把第二句的 he / she / they 換成 who，再把整個子句緊接在那個人的後面。"],
  ex:[
   ["The girl who sits next to me is outgoing.","坐我旁邊的女孩很外向。","who sits next to me 修飾 The girl，主要動詞是 is。"],
   ["I have a friend who speaks three languages.","我有一個會說三種語言的朋友。","先行詞 a friend 是單數，who 後面用 speaks。"],
   ["People who are kind to others have many friends.","對別人好的人有很多朋友。","先行詞 People 是複數，who 後面用 are，主要動詞是 have。"],
   ["He is the boy that won the speech contest.","他就是贏了演講比賽的那個男孩。","修飾人也可以用 that。"],
   ["A pianist is a person who plays the piano.","鋼琴家就是彈鋼琴的人。","用 who 子句來替職業下定義，考試很常見。"]]},
{ id:"g2", title:"關係代名詞 which / that：修飾「事物」，主格與受格",
  intro:"先行詞是事物或動物時，關係代名詞用 which 或 that。關係代名詞在子句裡當主詞，叫主格；當受詞（動詞或介系詞的對象），叫受格。受格的關係代名詞可以省略，主格不行！",
  table:[["種類","句型","例子","能不能省略"],["主格","事物 + which / that + 動詞","The cat which is sleeping on the sofa is lazy.","不能省略"],["受格","事物 + which / that + 主詞 + 動詞","This is the book which I bought yesterday.","可以省略"],["受格省略後","事物 + 主詞 + 動詞","This is the book I bought yesterday.","—"],["人 + 動物","先行詞同時有人和動物，只能用 that","The boy and the dog that are running are mine.","—"]],
  points:[
   "先行詞是事物或動物用 which 或 that，不能用 who；也不能用 what：the book what I bought 是錯的。",
   "判斷主格或受格：關係代名詞後面直接接動詞 → 主格（不能省略）；後面先接主詞再接動詞 → 受格（可以省略）。",
   "受格的關係代名詞已經是受詞了，句尾不能再放 it 或 them：This is the novel which I read it. 是錯的。",
   "主格 which / that 後面的動詞跟著先行詞變：the club which meets on Fridays、the clubs which meet on Fridays。",
   "介系詞留在句尾：This is the novel (that) I told you about.",
   "常考陷阱：先行詞同時有人和動物（the boy and his dog）時只能用 that。"],
  ex:[
   ["This is the novel which I read last week.","這是我上星期讀的小說。","which 是受格（I read 它），可以省略。"],
   ["The club that meets on Fridays is popular.","星期五聚會的那個社團很受歡迎。","that 後面直接接動詞 meets，是主格，不能省略。"],
   ["The movie we saw last night was boring.","我們昨晚看的電影很無聊。","受格 which / that 已經省略：The movie (which) we saw…。"],
   ["I like stories which have happy endings.","我喜歡有快樂結局的故事。","先行詞 stories 是複數，which 後面用 have。"],
   ["Is this the pen that you were looking for?","這是你在找的那支筆嗎？","that 是 look for 的受詞，for 留在句尾。"]]},
{ id:"g3", title:"關係代名詞 whose：「……的」（所有格）",
  intro:"whose 是所有格的關係代名詞，用來取代 his、her、its、their 這些所有格，意思是「那個人的、那個東西的」。whose 後面一定要緊接著一個名詞，先行詞是人或事物都可以用。",
  table:[["步驟","例子"],["兩句話","I have a friend. + His father is a pilot."],["找出所有格","His father → whose father"],["合併","I have a friend whose father is a pilot."],["先行詞是事物也可以","The house whose roof is red is mine."],["句型","先行詞 + whose + 名詞 + 動詞……"]],
  points:[
   "合併句子時，把第二句的 his、her、its、their 換成 whose：a boy + His dog is lost. → a boy whose dog is lost。",
   "whose 後面一定接名詞，而且名詞前面不能再加 the、a、his：whose the bike、whose his bike 都是錯的。",
   "whose 先行詞是人或事物都可以：a girl whose hair is long、a house whose roof is red。",
   "whose 和 who's 發音一樣，意思不同！who's = who is / who has。所有格一定拼 whose。",
   "whose 後面那個名詞決定動詞的單複數：a boy whose parents are doctors（parents 複數用 are）。",
   "分辨 who 和 whose：空格後面直接接動詞用 who；空格後面先接一個名詞，而且是「誰的」那個名詞，用 whose。"],
  ex:[
   ["I have a friend whose father is a pilot.","我有一個朋友，他的爸爸是機師。","whose father = 那個朋友的爸爸。"],
   ["The boy whose bike was stolen is very sad.","腳踏車被偷的那個男孩很難過。","whose 後面直接接名詞 bike，不加 the。"],
   ["We visited a town whose streets are very narrow.","我們去了一個街道很窄的小鎮。","先行詞是事物 a town 也可以用 whose；streets 複數用 are。"],
   ["The author whose books I love is coming to our school.","我很愛他的書的那位作者要來我們學校。","whose books 是 love 的受詞，主要動詞是 is coming。"],
   ["Do you know the singer whose songs are popular in Japan?","你知道那個歌在日本很紅的歌手嗎？","whose songs = 那位歌手的歌。"]]},
{ id:"g4", title:"It is + 形容詞 + for / of + 人 + to V",
  intro:"To learn English well is not easy. 這種主詞太長的句子，英文喜歡用虛主詞 It 放在前面，把 to V 搬到後面：It is not easy to learn English well. 想說「對某人來說」，就在中間加 for + 人；如果形容詞是在稱讚或批評「人」的個性，就要用 of + 人。",
  table:[["句型","形容詞（在說什麼）","例子"],["It is + 形容詞 + to V","—","It is important to get enough sleep."],["It is + 形容詞 + for + 人 + to V","easy、hard、difficult、important、dangerous、fun、necessary（說「這件事」）","It's hard for me to get up early."],["It is + 形容詞 + of + 人 + to V","kind、nice、brave、rude、selfish、careless、thoughtful、smart（說「這個人」）","It's kind of you to help me."],["判斷法","把句子改成「人 + be + 形容詞」，說得通用 of","You are kind. ✓ → of you；I am easy. ✗ → for me"]],
  points:[
   "It 是虛主詞，沒有「它」的意思，真正的主詞是後面的 to V。不能把 It 換成 This、That 或 There。",
   "to 後面一定接原形動詞：It's fun to play, 不能說 It's fun to playing 或 It's fun play。",
   "形容詞在說「這件事」（容易、困難、重要、危險）用 for + 人；在說「這個人」的個性（好心、勇敢、無禮、粗心）用 of + 人。",
   "判斷 for / of 的小撇步：改成「人 + be + 形容詞」，說得通就用 of（You are kind. → It's kind of you）；說不通就用 for（I am easy? ✗ → It's easy for me）。",
   "for / of 後面的人用受格：for me、of him、for them，不能說 for I、of he。",
   "時態變在 be 動詞上：It was brave of him to save the cat.；否定的 to V 是 not to V：It's important not to be late."],
  ex:[
   ["It is important to get enough sleep.","睡眠充足很重要。","= To get enough sleep is important. It 是虛主詞。"],
   ["It's hard for me to get up early.","早起對我來說很難。","hard 在說「早起這件事」，用 for me。"],
   ["It's kind of you to help me.","你人真好，幫了我。","kind 在稱讚「你這個人」，用 of you。"],
   ["It was rude of him to laugh at others.","他嘲笑別人，真沒禮貌。","rude 在說他這個人；過去發生的事用 was。"],
   ["It's dangerous for children to swim in the river.","小孩在河裡游泳很危險。","dangerous 在說「這件事」危險，用 for children。"]]}
];

/* 文法測驗：[題目, [選項 x4], 正確答案索引, 解析, 文法編號] */
const J3_1_2_QUIZ = [
 ["The girl ___ is singing on the stage is my sister.",["which","whose","who","what"],2,"先行詞 The girl 是人，後面直接接動詞 is singing，用主格 who。","g1"],
 ["I have a friend who ___ three languages.",["speak","speaks","speaking","to speak"],1,"who 後面的動詞跟著先行詞 a friend（單數），所以用 speaks。","g1"],
 ["The students ___ are playing basketball are in Class 3.",["who","which","whose","they"],0,"先行詞 The students 是人，後面直接接動詞，用 who。不能用 they，因為兩個動詞之間需要關係代名詞連接。","g1"],
 ["He is the boy ___ won the speech contest.",["whose","that","which","he"],1,"修飾人的主格關係代名詞可以用 who 或 that。which 只修飾事物；whose 後面要接名詞。","g1"],
 ["哪一句正確？",["The man who he lives next door is a doctor.","The man lives next door is a doctor.","The man who live next door is a doctor.","The man who lives next door is a doctor."],3,"who 已經是主詞，不能再加 he；主格 who 不能省略；先行詞 The man 是單數，用 lives。","g1"],
 ["I know the boy. He plays the piano well. → I know the boy ___ the piano well.",["who play","he plays","who plays","which plays"],2,"把 He 換成 who，動詞還是跟著 the boy 用 plays。先行詞是人，不能用 which。","g1"],
 ["People who ___ kind to others have many friends.",["is","are","be","being"],1,"先行詞 People 是複數，who 後面用 are。","g1"],
 ["The woman who ___ to me yesterday was a journalist.",["talk","talks","talked","talking"],2,"yesterday 是過去，who 後面也要用過去式 talked。","g1"],
 ["A pianist is a person ___ plays the piano.",["where","which","whose","who"],3,"先行詞 a person 是人，後面直接接動詞 plays，用 who。","g1"],
 ["This is the book ___ I bought yesterday.",["who","whose","what","which"],3,"先行詞 the book 是事物，用 which 或 that。what 不能當關係代名詞放在名詞後面。","g2"],
 ["The cat ___ is sleeping on the sofa is lazy.",["that","who","whose","it"],0,"先行詞 The cat 是動物，用 that 或 which，不用 who。","g2"],
 ["The movie which we saw last night was boring. 這句裡的哪一個字可以省略？",["The","which","we","last"],1,"which 後面先接主詞 we 再接動詞 saw，是受格，可以省略。","g2"],
 ["哪一句正確？",["This is the novel which I read it last week.","This is the novel I read last week.","This is the novel who I read last week.","This is the novel what I read last week."],1,"受格關係代名詞可以省略；which 已經是 read 的受詞，句尾不能再加 it；事物不能用 who 或 what。","g2"],
 ["I like stories ___ have happy endings.",["what","who","whose","which"],3,"先行詞 stories 是事物，後面直接接動詞 have，用主格 which。","g2"],
 ["哪一句的關係代名詞可以省略？",["The bus that goes to the zoo is late.","The dog which bit me is big.","The song that she sang was beautiful.","The boy who helped me is kind."],2,"that 後面先接主詞 she 才接動詞 sang，是受格，可以省略。其他三句的關係代名詞後面直接接動詞，是主格，不能省略。","g2"],
 ["The club which ___ every Friday is popular.",["meet","meets","meeting","to meet"],1,"which 後面的動詞跟著先行詞 The club（單數），用 meets。","g2"],
 ["Is this the pen ___ you were looking for?",["where","that","who","what"],1,"先行詞 the pen 是事物，是 look for 的受詞，用 that 或 which（也可以省略）。","g2"],
 ["The boy and his dog ___ are running in the park look happy.",["who","which","that","whose"],2,"先行詞同時有人（The boy）和動物（his dog），只能用 that。","g2"],
 ["This is the smartphone ___ my dad gave me.",["who","whose","it","that"],3,"先行詞是事物，用 that 或 which；這裡是受格，也可以省略。","g2"],
 ["I have a friend ___ father is a pilot.",["who","whose","which","that"],1,"空格後面接名詞 father，意思是「朋友的爸爸」，用所有格 whose。","g3"],
 ["The house ___ roof is red is mine.",["which","who","whose","that"],2,"「房子的屋頂」，空格後面接名詞 roof，用 whose。先行詞是事物也可以用 whose。","g3"],
 ["I know a girl. Her mother is a designer. → I know a girl ___ mother is a designer.",["her","who","whose","who's"],2,"把所有格 Her 換成 whose。who's 是 who is 的縮寫。","g3"],
 ["哪一句正確？",["The boy whose the bike was stolen is sad.","The boy whose bike was stolen is sad.","The boy who bike was stolen is sad.","The boy who's bike was stolen is sad."],1,"whose 後面直接接名詞，不加 the；who 和 who's 不是所有格。","g3"],
 ["The author ___ books I love is coming to our school.",["whose","who","which","that"],0,"「作者的書」，空格後面接名詞 books，用 whose。","g3"],
 ["We visited a town ___ streets are very narrow.",["who","that","which","whose"],3,"「小鎮的街道」，後面接名詞 streets，用 whose。","g3"],
 ["A student ___ name is Ken is waiting for you.",["whose","who","which","who's"],0,"「學生的名字」，後面接名詞 name，用 whose。","g3"],
 ["Do you know the singer ___ songs are popular in Japan?",["who","which","whose","that"],2,"「歌手的歌」，後面接名詞 songs，用 whose。","g3"],
 ["I have a dog ___ tail is very long.",["who","which","that","whose"],3,"「狗的尾巴」，後面接名詞 tail，用 whose。","g3"],
 ["It's kind ___ you to help me.",["for","of","to","with"],1,"kind 是在稱讚「你這個人」，用 of you。","g4"],
 ["It's hard ___ me to get up early.",["of","to","for","with"],2,"hard 是在說「早起這件事」很難，用 for me。","g4"],
 ["It is important ___ enough sleep.",["get","getting","to get","gets"],2,"It is + 形容詞 + to + 原形動詞。","g4"],
 ["It was rude ___ him to laugh at others.",["of","for","to","at"],0,"rude 是在批評「他這個人」，用 of him。","g4"],
 ["It's dangerous ___ children to swim in the river.",["of","with","to","for"],3,"dangerous 是在說「這件事」危險，用 for children。","g4"],
 ["哪一句正確？",["It's nice for you to say that.","It's easy of me to do it.","It's nice of you to say that.","It's easy for me doing it."],2,"nice 稱讚人用 of you；easy 說事情用 for me，而且後面要接 to V。","g4"],
 ["It's thoughtful of you ___ me a card.",["send","sending","sent","to send"],3,"of + 人 後面接 to + 原形動詞：to send。","g4"],
 ["To learn English well is not easy. = ___ is not easy to learn English well.",["This","That","It","There"],2,"to V 當主詞太長時，用虛主詞 It 放在句首。","g4"],
 ["It's careless ___ you to forget your homework again.",["of","for","to","by"],0,"careless 是在說「你這個人」粗心，用 of you。","g4"],
 ["It's ___ of you to share your snacks with us.",["easy","important","generous","difficult"],2,"後面是 of you，形容詞要能描述人的個性：generous（大方的）。easy、important、difficult 是在說事情，要用 for。","g4"]
];

/* =========================================================
   上課模式腳本（安安老師）
   say：老師講的話，{ } 裡面用英文語音唸
   board：黑板內容 [英文, [要標亮的字], 是否為錯誤示範]
   chant：口訣
   ask：隨堂提問，答錯會有針對性的回饋，再給一題 again 練習
   ========================================================= */
const J3_1_2_CLASS = {
g1:[
 {say:"哈囉同學！國三的第一個大魔王來了：關係代名詞！先想一想，「會彈鋼琴的那個女孩」英文怎麼說？中文把「會彈鋼琴的」放在女孩前面，英文卻要把它放在後面：{the girl who plays the piano}。", board:[["the girl who plays the piano",["the girl","who"]]]},
 {say:"被修飾的名詞叫做「先行詞」，因為它走在前面。後面那一段 {who plays the piano} 叫做「關係子句」，用來說明是哪一個人。", board:[["the girl ← who plays the piano",["the girl","who plays the piano"]],["先行詞    關係子句",[]]]},
 {say:"今天的規則很簡單：先行詞是「人」，而且關係代名詞後面直接接動詞，就用 {who}，也可以用 {that}。", board:[["人 + who / that + 動詞",["who","that"]],["the boy who won the game",["who"]],["the boy that won the game",["that"]]]},
 {say:"口訣唸起來！", chant:"先行詞是人，who 來幫忙；後面接動詞，who、that 都行！"},
 {ask:{say:"換你選！", q:"I know a girl ___ can speak Japanese.", opts:["which","who","what"], ans:1,
   ok:"答對了！a girl 是人，後面接動詞 can speak，用 who。",
   bad:{0:"which 是修飾事物或動物的，a girl 是人，要用 who。",2:"what 不能當關係代名詞接在名詞後面，修飾人要用 who。"},
   again:{q:"The man ___ lives next door is a doctor.", opts:["who","which","whose"], ans:0, exp:"先行詞 The man 是人，後面直接接動詞，用 who。"}}},
 {say:"考試最愛考「合併句子」。步驟是：第一，找出兩句裡的同一個人；第二，把第二句的 he、she、they 換成 {who}；第三，把整段緊緊接在那個人後面。", board:[["I know the girl. She plays the piano.",["the girl","She"]],["I know the girl who plays the piano.",["the girl","who"]]]},
 {say:"注意！who 已經代替了 she，所以後面不能再放 she。{The girl who she sings} 是錯的！", board:[["The girl who sings is my sister.",["who sings"]],["The girl who she sings is my sister.",[],true]]},
 {ask:{q:"I have a friend. He is a pilot. → I have a friend ___ a pilot.", opts:["who he is","who is","he is"], ans:1,
   ok:"太棒了！把 He 換成 who：a friend who is a pilot。",
   bad:{0:"who 已經代替 He 了，後面不能再放 he。",2:"兩個句子要用 who 連起來，不能直接接 he is。"},
   again:{q:"Do you know the boys? They are playing soccer. → Do you know the boys ___ soccer?", opts:["who are playing","they are playing","which are playing"], ans:0, exp:"把 They 換成 who；the boys 是人，不用 which。"}}},
 {say:"第二個重點：who 後面的動詞，要看先行詞是單數還是複數！{the girl who plays}，女孩是單數，plays 加 s；{the girls who play}，女孩們是複數，play 不加 s。", board:[["the girl who plays",["girl","plays"]],["the girls who play",["girls","play"]]]},
 {ask:{q:"Students who ___ hard usually get good grades.", opts:["study","studies","studying"], ans:0,
   ok:"讚！先行詞 Students 是複數，用原形 study。",
   bad:{1:"先行詞 Students 是複數，動詞不加 es。",2:"who 後面要接一個真正的動詞，不能只有 V-ing。"},
   again:{q:"A teacher who ___ English is coming.", opts:["teach","teaches","teaching"], ans:1, exp:"先行詞 A teacher 是單數，用 teaches。"}}},
 {say:"最後一個陷阱：關係子句放在主詞後面時，整句會有兩個動詞，千萬別漏掉主要動詞！{The man who lives next door is a doctor.} lives 是子句的動詞，is 才是整句的主要動詞。", board:[["The man who lives next door is a doctor.",["who lives next door","is"]],["The man who lives next door a doctor.",[],true]]},
 {say:"一起唸第二句口訣！", chant:"子句夾中間，主要動詞別忘記！"},
 {ask:{say:"最後挑戰，會考常見！", q:"哪一句是正確的？", opts:["The boy who wins the race my brother.","The boy wins the race is my brother.","The boy who won the race is my brother."], ans:2,
   ok:"完美！who won the race 修飾 The boy，主要動詞是 is。",
   bad:{0:"少了主要動詞！要加 is：The boy who won the race is my brother.",1:"主格 who 不能省略，要說 The boy who won the race。"},
   again:{q:"哪一句是正確的？", opts:["People who are honest is nice.","People who are honest are nice.","People who honest are nice."], ans:1, exp:"先行詞 People 是複數：who are honest、主要動詞也用 are。"}}},
 {say:"關係代名詞 who 過關！複習：先行詞是人，用 who 或 that；who 後面的動詞跟著先行詞變；who 已經是主詞，不能再加 he、she；子句夾中間，主要動詞別忘記！下一課看事物要用什麼。", end:true}
],
g2:[
 {say:"同學好！上一課學了修飾「人」用 who。那修飾東西或動物呢？像「我昨天買的那本書」、「在沙發上睡覺的那隻貓」，要用 {which} 或 {that}！", board:[["the book which I bought yesterday",["which"]],["the cat that is sleeping on the sofa",["that"]]]},
 {say:"先記住分工：人用 who，事物和動物用 which；that 最萬用，人、事、物都可以。", board:[["人 → who / that",["who","that"]],["事物、動物 → which / that",["which","that"]]]},
 {say:"口訣先唸！", chant:"人用 who，物用 which，that 萬用都可以！"},
 {ask:{say:"換你選！", q:"I like the song ___ is playing on the radio.", opts:["who","which","whose"], ans:1,
   ok:"答對！the song 是事物，用 which。",
   bad:{0:"who 只能修飾人，the song 是事物，要用 which 或 that。",2:"whose 後面要接名詞，這裡後面直接接動詞 is，要用 which。"},
   again:{q:"The dog ___ bit me is very big.", opts:["who","that","what"], ans:1, exp:"狗是動物，用 that 或 which。"}}},
 {say:"今天的重頭戲是「主格」和「受格」。看關係代名詞後面接什麼：後面直接接動詞，它就是主詞，叫主格；後面先接一個主詞再接動詞，它就是受詞，叫受格。", board:[["The cat which is sleeping … （which + 動詞 → 主格）",["which is"]],["The book which I bought … （which + 主詞 + 動詞 → 受格）",["which I bought"]]]},
 {say:"為什麼叫受格？因為兩句合併時，它代替的是受詞：{This is the book.} {I bought it yesterday.} it 是受詞，換成 which，搬到前面：{This is the book which I bought yesterday.}", board:[["This is the book. I bought it yesterday.",["the book","it"]],["This is the book which I bought yesterday.",["which"]]]},
 {say:"受格有一個超能力：可以省略！{This is the book I bought yesterday.} 主格就不行，省略了句子會壞掉。", board:[["This is the book (which) I bought yesterday.",["(which)"]],["The cat is sleeping on the sofa is lazy.",[],true]]},
 {say:"把這條規則編成口訣！", chant:"後面接動詞是主格，不能省；後面接主詞是受格，可以省！"},
 {ask:{q:"哪一句的關係代名詞可以省略？", opts:["The bus that goes to school is late.","The cake that Mom made is yummy.","The dog that barks a lot is mine."], ans:1,
   ok:"太棒了！that 後面先接主詞 Mom 再接 made，是受格，可以省略。",
   bad:{0:"that 後面直接接動詞 goes，是主格，不能省略。",2:"that 後面直接接動詞 barks，是主格，不能省略。"},
   again:{q:"哪一句的關係代名詞可以省略？", opts:["The movie which we saw was fun.","The movie which won the prize was fun.","The movie which is on TV is fun."], ans:0, exp:"which 後面接主詞 we，是受格，可以省略。"}}},
 {say:"受格的陷阱來了！which 已經代替了 it，所以句尾不能再出現 it！", board:[["This is the novel which I read last week.",["which"]],["This is the novel which I read it last week.",[],true]]},
 {ask:{q:"This is the bike ___ my dad bought for me.", opts:["which","which it","who"], ans:0,
   ok:"讚！受格 which，後面不能再加 it。也可以省略 which。",
   bad:{1:"which 已經是受詞了，不能再加 it。",2:"the bike 是事物，不能用 who。"},
   again:{q:"哪一句是正確的？", opts:["The game I played it was fun.","The game I played was fun.","The game who I played was fun."], ans:1, exp:"受格省略後是 The game I played，played 後面不能再加 it。"}}},
 {say:"最後一個常考陷阱：先行詞同時有「人」和「動物」，像 {the boy and his dog}，who 和 which 都不對，只能用 {that}！", board:[["The boy and his dog that are running look happy.",["The boy and his dog","that"]]]},
 {ask:{say:"最後挑戰！", q:"The girl and her cat ___ are sitting there are cute.", opts:["who","which","that"], ans:2,
   ok:"完美！人加動物，只能用 that。",
   bad:{0:"who 只能修飾人，可是先行詞還有一隻貓，要用 that。",1:"which 只能修飾事物或動物，可是先行詞還有女孩，要用 that。"},
   again:{q:"I saw a man and his horse ___ were walking on the beach.", opts:["that","who","which"], ans:0, exp:"人和動物一起當先行詞，用 that。"}}},
 {say:"which 和 that 過關！複習：人用 who，物用 which，that 萬用；後面接動詞是主格不能省，後面接主詞是受格可以省；受格後面不能再加 it；人加動物只能用 that。", end:true}
],
g3:[
 {say:"同學好！如果安安老師想說「我有一個朋友，他的爸爸是機師」，要怎麼把「他的爸爸」接在朋友後面？答案是所有格關係代名詞：{whose}！", board:[["I have a friend whose father is a pilot.",["whose father"]]]},
 {say:"合併的方法：找出第二句的所有格 his、her、its、their，把它換成 {whose}，連同後面的名詞一起接在先行詞後面。", board:[["I have a friend. His father is a pilot.",["a friend","His father"]],["I have a friend whose father is a pilot.",["whose father"]]]},
 {say:"所以 whose 的意思就是「……的」，後面一定緊接著一個名詞！", chant:"whose 就是「……的」，後面一定接名詞！"},
 {ask:{say:"換你選！", q:"I know a boy ___ dog can sing.", opts:["who","whose","which"], ans:1,
   ok:"答對！「男孩的狗」，後面接名詞 dog，用 whose。",
   bad:{0:"who 後面要直接接動詞，這裡後面是名詞 dog，要用 whose。",2:"which 修飾事物，而且這裡要表示「男孩的」，用 whose。"},
   again:{q:"She is the girl. Her hair is very long. → She is the girl ___ hair is very long.", opts:["whose","who","her"], ans:0, exp:"把 Her 換成 whose。"}}},
 {say:"whose 很大方，先行詞是人可以用，是事物也可以用！{The house whose roof is red is mine.} 「屋頂是紅色的那棟房子」。", board:[["a girl whose hair is long",["whose hair"]],["a house whose roof is red",["whose roof"]]]},
 {say:"小心！whose 後面的名詞前面，不能再加 the、a、his！因為 whose 已經是「……的」了。", board:[["The boy whose bike was stolen is sad.",["whose bike"]],["The boy whose the bike was stolen is sad.",[],true]]},
 {ask:{q:"哪一個是正確的？", opts:["a town whose the streets are narrow","a town whose streets are narrow","a town who streets are narrow"], ans:1,
   ok:"讚！whose 後面直接接名詞 streets，事物也可以用 whose。",
   bad:{0:"whose 後面不能再加 the。",2:"表示「小鎮的街道」要用所有格 whose。"},
   again:{q:"哪一個是正確的？", opts:["a singer whose songs are popular","a singer whose her songs are popular","a singer who's songs are popular"], ans:0, exp:"whose 後面直接接名詞 songs。"}}},
 {say:"分辨 who 和 whose 的絕招：看空格後面！直接接動詞，用 {who}；先接一個名詞，而且是「誰的」那個東西，用 {whose}。", board:[["the girl who sings",["who sings"]],["the girl whose voice is sweet",["whose voice"]]]},
 {ask:{q:"The man ___ car is red is my uncle.", opts:["who","whose","which"], ans:1,
   ok:"正確！空格後面接名詞 car，是「那個男人的車」，用 whose。",
   bad:{0:"空格後面是名詞 car，不是動詞，要用 whose。",2:"先行詞是人，而且要表示「他的車」，用 whose。"},
   again:{q:"The man ___ drives a red car is my uncle.", opts:["whose","who","what"], ans:1, exp:"空格後面直接接動詞 drives，用 who。"}}},
 {say:"最後一個大陷阱：{whose} 和 {who's} 唸起來一模一樣！可是 who's 是 who is 或 who has 的縮寫，不是所有格。", board:[["whose = ……的",["whose"]],["who's = who is / who has",["who's"]],["The boy who's bike was stolen…",[],true]]},
 {say:"還有，whose 後面那個名詞決定動詞的單複數：{a boy whose parents are doctors}，parents 是複數，所以用 are。", board:[["a boy whose parents are doctors",["parents","are"]],["a boy whose sister is a nurse",["sister","is"]]]},
 {ask:{say:"最後挑戰！", q:"I have a classmate ___ brothers ___ both tall.", opts:["who's / is","whose / are","whose / is"], ans:1,
   ok:"完美！whose brothers，brothers 是複數，用 are。",
   bad:{0:"who's 是 who is，不是所有格；要用 whose brothers are。",2:"whose 對了，可是 brothers 是複數，要用 are。"},
   again:{q:"I know a woman ___ son is a famous actor.", opts:["who's","whose","who"], ans:1, exp:"「她的兒子」用所有格 whose。"}}},
 {say:"whose 過關！複習：whose 就是「……的」，後面一定接名詞，名詞前面不加 the；人和事物都能用；後面接動詞用 who，接名詞用 whose；whose 不是 who's！", end:true}
],
g4:[
 {say:"同學好！先看這句：{To learn English well is not easy.} 主詞好長，頭重腳輕。英文喜歡用一個小小的 {It} 放在前面，把長長的 to V 搬到後面：{It is not easy to learn English well.}", board:[["To learn English well is not easy.",["To learn English well"]],["It is not easy to learn English well.",["It","to learn"]]]},
 {say:"這個 It 叫「虛主詞」，它沒有「它」的意思，只是先佔位子，真正的主詞是後面的 to V。公式：{It is} + 形容詞 + {to V}。", board:[["It is + 形容詞 + to V",["It is","to V"]],["It is important to get enough sleep.",["It","to get"]]]},
 {ask:{say:"換你選！", q:"It is fun ___ in the river.", opts:["swim","to swim","swimming"], ans:1,
   ok:"答對！It is + 形容詞 + to + 原形動詞。",
   bad:{0:"這個句型 to 不能少：It is fun to swim。",2:"It is + 形容詞 後面要接 to V，不是 V-ing。"},
   again:{q:"___ is hard to learn math well.", opts:["This","It","There"], ans:1, exp:"虛主詞只能用 It。"}}},
 {say:"想說「對某人來說」，就在中間加 {for} + 人：{It's hard for me to get up early.} 早起這件事，對我來說很難。", board:[["It's hard for me to get up early.",["for me"]]]},
 {say:"可是有些形容詞要用 {of}！像 {It's kind of you to help me.} 你幫我，你人真好。為什麼？因為 kind 是在稱讚「你這個人」，不是在說事情。", board:[["It's kind of you to help me.",["kind","of you"]],["It's kind for you to help me.",[],true]]},
 {say:"整理一下：說「這件事」的，像 easy、hard、important、dangerous、fun，用 for；說「這個人」的個性，像 kind、nice、brave、rude、selfish、careless、thoughtful，用 of。", board:[["事情：easy、hard、important、dangerous → for",["for"]],["人的個性：kind、nice、brave、rude、careless → of",["of"]]]},
 {say:"口訣唸起來！", chant:"說事情用 for，說人品用 of！"},
 {ask:{q:"It's very nice ___ you to share your lunch.", opts:["for","of","to"], ans:1,
   ok:"太棒了！nice 是在稱讚你這個人，用 of you。",
   bad:{0:"nice 是在說人的個性，要用 of。",2:"這個句型要用 for 或 of，nice 說人，用 of。"},
   again:{q:"It's dangerous ___ kids to play with fire.", opts:["of","for","with"], ans:1, exp:"dangerous 是在說玩火這件事，用 for。"}}},
 {say:"還分不出來？教你一招必殺技：把句子改成「人 + be + 形容詞」，說得通就用 of！{You are kind.} 通，所以用 of you；{I am easy.}「我很容易」？不通！所以用 for me。", board:[["You are kind. ✓ → It's kind of you…",["of you"]],["I am easy. ✗ → It's easy for me…",["for me"]]]},
 {ask:{q:"It was brave ___ him to save the cat.", opts:["for","to","of"], ans:2,
   ok:"正確！He was brave. 說得通，用 of him。",
   bad:{0:"He was brave. 說得通，brave 是在說人，要用 of。",1:"這裡要用 for 或 of 引出人，brave 說人，用 of。"},
   again:{q:"It's important ___ students to read every day.", opts:["of","for","by"], ans:1, exp:"Students are important? 意思不對，important 在說事情，用 for。"}}},
 {say:"兩個小細節：for、of 後面的人要用受格，{for me}、{of him}；過去的事情改 be 動詞：{It was rude of him to laugh at others.}", board:[["It was rude of him to laugh at others.",["was","of him"]],["It was rude of he to laugh at others.",[],true]]},
 {ask:{say:"最後挑戰！", q:"哪一句是正確的？", opts:["It's careless of you to lose your key again.","It's careless for you to lose your key again.","It's careless of you losing your key again."], ans:0,
   ok:"完美！careless 說人用 of you，後面接 to lose。",
   bad:{1:"careless 是在說你這個人粗心，要用 of you。",2:"of you 後面要接 to + 原形動詞：to lose。"},
   again:{q:"哪一句是正確的？", opts:["It's easy of me to cook noodles.","It's easy for me to cook noodles.","It's easy for I to cook noodles."], ans:1, exp:"easy 說事情用 for，後面接受格 me。"}}},
 {say:"恭喜你！國三上學期第二次段考的文法全部上完了！最後複習：It 是虛主詞，真正的主詞是 to V；說事情用 for，說人品用 of；改成「人 + be + 形容詞」說得通就用 of。去文法測驗大顯身手吧！", end:true}
]};

Object.assign(PH, {
  personality:"p:c er:er s:c o:schwa n:c a:short_a l:c i:schwa t:c y:y_i", outgoing:"ou:ou t:c g:c o:long_o i:short_i ng:ng",
  cheerful:"ch:ch eer:ere ful:ful", humble:"h:c u:short_u m:c b:c le:le", selfish:"s:c e:short_e l:c f:c i:short_i sh:sh",
  rude:"r:c u:u_e d:c e:silent_e", brave:"br:blend a:a_e v:c e:silent_e", gentle:"g:soft_g e:short_e n:c t:c le:le",
  lazy:"l:c a:long_a z:c y:y_i", hardworking:"h:c ar:ar d:c w:c or:exc k:c i:short_i ng:ng",
  thoughtful:"th:th ough:exc t:c ful:ful", responsible:"r:c e:schwa s:c p:c o:short_o n:c s:c i:schwa b:c le:le",
  confident:"c:c o:short_o n:c f:c i:schwa d:c e:schwa n:c t:c", stubborn:"st:blend u:short_u bb:double or:schwa_r n:c",
  friendship:"fr:blend ie:exc n:c d:c sh:sh i:short_i p:c", trust:"tr:blend u:short_u st:blend",
  relationship:"r:c e:schwa l:c a:long_a tion:tion sh:sh i:short_i p:c", partner:"p:c ar:ar t:c n:c er:er",
  stranger:"str:blend a:long_a n:c g:soft_g er:er", "get along":"g:c e:short_e t:c _:space a:schwa l:c o:short_o ng:ng",
  argue:"ar:ar g:c ue:ue", apologize:"a:schwa p:c o:short_o l:c o:schwa g:soft_g i:i_e z:c e:silent_e",
  secret:"s:c e:long_e cr:blend e:schwa t:c", encourage:"e:schwa n:c c:c ou:exc r:c a:schwa g:soft_g e:silent_e",
  respect:"r:c e:schwa sp:blend e:short_e c:c t:c", promise:"pr:blend o:short_o m:c i:short_i s:c e:silent",
  admire:"a:schwa d:c m:c i:i_e r:c e:silent_e",
  club:"cl:blend u:short_u b:c", member:"m:c e:short_e m:c b:c er:er", leader:"l:c ea:ea d:c er:er",
  captain:"c:c a:short_a p:c t:c ai:exc n:c", teammate:"t:c ea:ea m:c m:c a:a_e t:c e:silent_e",
  activity:"a:short_a c:c t:c i:short_i v:c i:schwa t:c y:y_i", concert:"c:c o:short_o n:c c:soft_c er:er t:c",
  choir:"ch:ch_k oi:exc r:c", band:"b:c a:short_a n:c d:c", perform:"p:c er:er f:c or:or m:c",
  audience:"au:aw d:c i:long_e e:schwa n:c c:soft_c e:silent", organize:"or:or g:c a:schwa n:c i:i_e z:c e:silent_e",
  "sign up":"s:c i:long_i g:silent n:c _:space u:short_u p:c",
  novel:"n:c o:short_o v:c e:schwa l:c", character:"ch:ch_k a:short_a r:c a:schwa c:c t:c er:er",
  author:"au:aw th:th or:schwa_r", plot:"pl:blend o:short_o t:c", chapter:"ch:ch a:short_a p:c t:c er:er",
  poem:"p:c o:long_o e:schwa m:c", poet:"p:c o:long_o e:schwa t:c",
  mystery:"m:c y:exc st:blend er:er y:y_i", hero:"h:c er:ere o:long_o",
  ending:"e:short_e n:c d:c i:short_i ng:ng", scene:"s:c c:silent e:long_e n:c e:silent_e", fan:"f:c a:short_a n:c",
  recommend:"r:c e:short_e c:c o:schwa mm:double e:short_e n:c d:c", favorite:"f:c a:long_a v:c o:schwa r:c i:short_i t:c e:silent",
  pianist:"p:c i:long_e a:schwa n:c i:short_i st:blend", guitarist:"g:c u:silent i:short_i t:c ar:ar i:short_i st:blend",
  novelist:"n:c o:short_o v:c e:schwa l:c i:short_i st:blend", journalist:"j:c our:exc n:c a:schwa l:c i:short_i st:blend",
  violinist:"v:c i:long_i o:schwa l:c i:short_i n:c i:short_i st:blend", director:"d:c i:long_i r:c e:short_e c:c t:c or:schwa_r",
  editor:"e:short_e d:c i:short_i t:c or:schwa_r", translator:"tr:blend a:short_a n:c s:s_z l:c a:long_a t:c or:schwa_r",
  designer:"d:c e:schwa s:s_z i:long_i g:silent n:c er:er", photographer:"ph:ph o:schwa t:c o:short_o gr:blend a:schwa ph:ph er:er",
  owner:"ow:ow_o n:c er:er", manager:"m:c a:short_a n:c a:schwa g:soft_g er:er", speaker:"sp:blend ea:ea k:c er:er"
});
Object.assign(EXC_NOTE, {
  hardworking:"w 後面的 or 常唸捲舌的 /ɝ/，像 work、word、world，所以 working 的 or 不唸「歐兒」。",
  thoughtful:"ough 在 thought、bought、brought 裡唸 /ɔ/，gh 不發音，所以 thoughtful 唸 /ˈθɔtfəl/。",
  friendship:"friend 的 ie 是例外，唸短 e /ɛ/，不唸「一」，所以 friend 唸 /frɛnd/。",
  encourage:"courage 的 ou 唸捲舌的 /ɝ/（美式），像 her 的母音：en-COUR-age /ɪnˈkɝɪdʒ/。",
  captain:"ai 在 captain、mountain 這種不重讀的字尾，唸輕輕的 /ə/ 或 /ɪ/，不唸 A。",
  choir:"choir 是特別的字：ch 唸 /k/，oi 唸 /waɪ/，整個字唸 /kwaɪr/，和 quiet 的開頭很像。",
  mystery:"y 夾在兩個子音中間時，常唸短 i /ɪ/，像 gym、mystery，所以 mystery 唸 /ˈmɪstəri/。",
  journalist:"our 在 journal、journey 裡唸捲舌的 /ɝ/，像 her 的母音，不唸「歐兒」。"
});
/* ---------- 4 堂自然發音課（安安老師） ---------- */
const J3_1_2_PHONICS = [
  {id:"p1", title:"wh 的兩種唸法：who /h/、which /w/"},
  {id:"p2", title:"th 有聲 /ð/ 和無聲 /θ/"},
  {id:"p3", title:"表示「人」的字尾 -er / -or / -ist"},
  {id:"p4", title:"關係子句的停頓與意群"}
];
const J3_1_2_PHONICS_CLASS = {
p1:[
 {say:"同學好！這個單元的關係代名詞 {who}、{which}、{whose}，還有疑問詞 {what}，全都是 <<wh>> 開頭。可是它們的 wh 唸法不一樣喔！", board:[["who   whose   which   what",["wh","wh","wh","wh"],false,true]]},
 {say:"先說最常見的：大部分的 <<wh>> 唸 /w/，h 偷偷不出聲，像國一學過的 {white}。{which}、{what}、{where}、{when}、{why} 都是這樣。", board:[["which   what   where",["wh","wh","wh"],false,true],["when   why   white",["wh","wh","wh"],false,true]]},
 {say:"口訣先記！", chant:"wh 大多唸 /w/，h 偷偷不出聲！"},
 {ask:{say:"聽聽看！", q:"which 的 wh 唸什麼？", opts:["/w/","/h/","/k/"], ans:0,
   ok:"答對！which 的 wh 唸 /w/，嘴巴先嘟起來。",
   bad:{1:"/h/ 是 who 的唸法，which 的 wh 唸 /w/。",2:"wh 不會唸 /k/，which 的 wh 唸 /w/。"},
   again:{q:"where 的 wh 唸什麼？", opts:["/h/","/w/","/f/"], ans:1, exp:"where 的 wh 唸 /w/。"}}},
 {say:"例外來了！wh 後面接 <<o>> 的時候，常常變成 w 不出聲，只唸 /h/：{who}、{whose}、{whom}、{whole}。", board:[["who   whose   whom",["wh","wh","wh"],false,true],["whole",["wh"],false,true]]},
 {say:"把例外也編成口訣！", chant:"wh 碰到 o，w 躲起來唸 /h/！"},
 {ask:{q:"who 的開頭唸什麼？", opts:["/w/","/h/","/hw/ 兩個都要唸"], ans:1,
   ok:"讚！who 的 w 不發音，唸 /hu/。",
   bad:{0:"who 是例外，w 不發音，開頭唸 /h/。",2:"who 的 w 完全不唸，只唸 /h/。"},
   again:{q:"whose 的開頭唸什麼？", opts:["/h/","/w/","/k/"], ans:0, exp:"whose = who + se，開頭唸 /h/。"}}},
 {say:"小心 who 的 o，它唸長長的 /u/，像 {two}、{do}。所以 who 唸 /hu/，whose 唸 /huz/，字尾的 s 唸 /z/。", board:[["who /hu/",["o"],false,true],["whose /huz/",["se"],false,true]]},
 {ask:{q:"哪一個字的 wh 唸 /h/？", opts:["what","whose","which"], ans:1,
   ok:"太好了！whose 的 wh 後面是 o，唸 /h/。",
   bad:{0:"what 的 wh 唸 /w/。",2:"which 的 wh 唸 /w/。"},
   again:{q:"哪一個字的 wh 唸 /w/？", opts:["who","whole","why"], ans:2, exp:"why 的 wh 唸 /w/；who、whole 唸 /h/。"}}},
 {say:"同音字陷阱！{whose}（……的）和 {who's}（who is）唸起來一模一樣 /huz/；{whole}（整個）和 {hole}（洞）也一樣。聽到的時候要看句子判斷，寫的時候要拼對！", board:[["whose = who's /huz/",["wh","wh"],false,true],["whole = hole /hol/",["wh","h"],false,true]]},
 {ask:{say:"最後一題！", q:"聽到「I know a boy /huz/ dad is a pilot.」，/huz/ 要拼成？", opts:["who's","whose","hose"], ans:1,
   ok:"完美！後面接名詞 dad，是所有格，拼 whose。",
   bad:{0:"who's 是 who is，後面接 dad is 就變成 who is dad is，不通。",2:"hose 是水管，這裡要拼所有格 whose。"},
   again:{q:"聽到「I ate the /hol/ cake.」，/hol/ 要拼成？", opts:["hole","whole","hold"], ans:1, exp:"「整個」蛋糕是 whole；hole 是洞。"}}},
 {say:"wh 過關！記住：wh 大多唸 /w/；wh 碰到 o，w 躲起來唸 /h/：who、whose、whole；whose 和 who's 同音，拼字要小心。下一課練 th！", end:true}
],
p2:[
 {say:"同學好！關係代名詞 {that} 的 <<th>> 和 {think} 的 <<th>> 唸法一樣嗎？不一樣！th 有兩種聲音：有聲的 /ð/ 和無聲的 /θ/。", board:[["that   think",["th","th"],false,true]]},
 {say:"兩種嘴型都一樣：舌頭輕輕放在上下牙齒中間，像要咬住舌尖。差別只在喉嚨：摸著喉嚨唸，會震動的是有聲 /ð/，不震動、只有送氣的是無聲 /θ/。", board:[["/ð/ 喉嚨震動：that",["th"],false,true],["/θ/ 只有送氣：think",["th"],false,true]]},
 {say:"先練有聲的 /ð/：{that}、{this}、{the}、{they}、{them}、{there}、{mother}。這些常常是很短的「小字」：代名詞、冠詞、指示詞。", board:[["that   this   the",["th","th","th"],false,true],["they   them   mother",["th","th","th"],false,true]]},
 {say:"口訣唸起來！", chant:"this、that、the、they，小小的字喉嚨震！"},
 {ask:{q:"that 的 th 是哪一種？", opts:["有聲 /ð/","無聲 /θ/","唸 /s/"], ans:0,
   ok:"答對！that 的 th 喉嚨要震動，是有聲的 /ð/。",
   bad:{1:"that 是很常用的小字，th 要唸有聲的 /ð/。",2:"th 不能唸成 /s/，舌頭要放在牙齒中間。"},
   again:{q:"the 的 th 是哪一種？", opts:["無聲 /θ/","有聲 /ð/","唸 /d/"], ans:1, exp:"the 是冠詞小字，唸有聲的 /ð/。"}}},
 {say:"再練無聲的 /θ/：{think}、{thank}、{three}、{thin}、{author}、{thoughtful}。很多是有實際意思的「內容字」。", board:[["think   thank   three",["th","th","th"],false,true],["author   thoughtful",["th","th"],false,true]]},
 {say:"無聲 th 也有口訣！", chant:"think、thank、three，只有送氣不出聲！"},
 {ask:{q:"thank 的 th 是哪一種？", opts:["有聲 /ð/","無聲 /θ/","唸 /t/"], ans:1,
   ok:"讚！thank 的 th 只送氣，是無聲的 /θ/。",
   bad:{0:"thank 的 th 喉嚨不震動，是無聲的 /θ/。",2:"th 不是 /t/，舌頭要放在牙齒中間送氣。"},
   again:{q:"author 的 th 是哪一種？", opts:["無聲 /θ/","有聲 /ð/","唸 /s/"], ans:0, exp:"author 的 th 唸無聲的 /θ/。"}}},
 {say:"台灣同學最常犯的錯：把 th 唸成 /s/ 或 /z/。{think} 唸成 sink（水槽），{thank} 唸成 sank（沉沒），意思就跑掉了！一定要把舌頭伸出來一點點。", board:[["think ≠ sink",["th","s"],false,true],["thank ≠ sank",["th","s"],false,true]]},
 {ask:{q:"哪一個字的 th 唸有聲 /ð/？", opts:["think","three","this"], ans:2,
   ok:"太好了！this 是指示詞小字，唸有聲的 /ð/。",
   bad:{0:"think 的 th 是無聲 /θ/。",1:"three 的 th 是無聲 /θ/。"},
   again:{q:"哪一個字的 th 唸無聲 /θ/？", opts:["they","thin","there"], ans:1, exp:"thin 唸無聲 /θ/；they、there 是有聲 /ð/。"}}},
 {say:"最後一個小規則：th 在字尾加 e 時，常變成有聲的 /ð/。{breath}（呼吸，名詞）唸 /θ/，{breathe}（呼吸，動詞）唸 /ð/。", board:[["breath /θ/",["th"],false,true],["breathe /ð/",["the"],false,true]]},
 {ask:{say:"最後一題！", q:"「The girl that I thank」裡，哪一個 th 是無聲 /θ/？", opts:["The","that","thank"], ans:2,
   ok:"完美！thank 唸無聲 /θ/，The 和 that 都是有聲 /ð/。",
   bad:{0:"The 是冠詞小字，唸有聲 /ð/。",1:"that 是關係代名詞小字，唸有聲 /ð/。"},
   again:{q:"「I think this is the one.」裡，哪一個 th 是無聲 /θ/？", opts:["think","this","the"], ans:0, exp:"think 唸無聲 /θ/。"}}},
 {say:"th 過關！記住：舌頭放在牙齒中間；this、that、the、they，小小的字喉嚨震；think、thank、three，只有送氣不出聲；千萬別唸成 /s/！下一課學表示「人」的字尾。", end:true}
],
p3:[
 {say:"同學好！這個單元有好多「人」：{leader}、{director}、{pianist}。英文常在動詞或名詞後面加上 <<er>>、<<or>>、<<ist>>，就變成「做這件事的人」！", board:[["lead → leader",["er"],false,true],["direct → director",["or"],false,true],["piano → pianist",["ist"],false,true]]},
 {say:"先看 <<er>>，最常見！{speak} → {speaker}、{own} → {owner}、{design} → {designer}。er 在字尾不重讀，唸捲舌的 /ɚ/。", board:[["speaker   owner",["er","er"],false,true],["designer   manager",["er","er"],false,true]]},
 {say:"再來是 <<or>>：{invent} → {inventor}、{edit} → {editor}、{translate} → {translator}。好消息是，字尾的 or 不重讀，唸法和 er 一樣，都是 /ɚ/！", board:[["inventor   editor",["or","or"],false,true],["director   translator",["or","or"],false,true]]},
 {say:"口訣唸起來！", chant:"字尾 er、or 都唸 /ɚ/，聽起來一樣拼法不一樣！"},
 {ask:{q:"editor 的字尾 or 唸什麼？", opts:["/ɔr/ 像「歐兒」","/ɚ/ 捲舌","/or/ 每個字母分開唸"], ans:1,
   ok:"答對！字尾的 or 不重讀，唸 /ɚ/，和 er 一樣。",
   bad:{0:"重讀的 or（像 short）才唸「歐兒」，字尾不重讀的 or 唸 /ɚ/。",2:"or 要一起唸，字尾不重讀唸 /ɚ/。"},
   again:{q:"inventor 和 owner 的字尾聽起來？", opts:["一樣，都唸 /ɚ/","不一樣","or 不發音"], ans:0, exp:"字尾 er、or 都唸 /ɚ/。"}}},
 {say:"聽起來一樣，拼字怎麼辦？小撇步：動詞是 <<ct>>、<<it>>、<<ate>> 結尾的，常常加 <<or>>：direct → director、edit → editor、translate → translator（去 e 加 or）。其他大多加 er。", board:[["direct → director",["or"],false,true],["edit → editor",["or"],false,true],["translate → translator",["or"],false,true]]},
 {ask:{q:"invent（發明）變成「發明家」怎麼拼？", opts:["inventer","inventor","inventist"], ans:1,
   ok:"讚！invent 是 t 結尾，加 or：inventor。",
   bad:{0:"聲音對了，可是發明家要拼 inventor。",2:"ist 常用在樂器和學科，發明家是 inventor。"},
   again:{q:"lead（帶領）變成「領導者」怎麼拼？", opts:["leador","leader","leadist"], ans:1, exp:"lead + er = leader。"}}},
 {say:"接下來是 <<ist>>，唸 /ɪst/，常加在「樂器」或「專門的東西」後面：{pianist}、{guitarist}、{novelist}、{journalist}。國二學過的 {artist}、{scientist} 也是。", board:[["pianist   guitarist",["ist","ist"],false,true],["novelist   journalist",["ist","ist"],false,true]]},
 {say:"加 ist 的小秘密：重音通常留在原本那個字的重音上。{GUI-tar} 的重音在 TAR，{gui-TAR-ist} 也在 TAR；{NOV-el} 重音在 NOV，{NOV-el-ist} 也是。", board:[["guiTAR → guiTARist",["TAR","TAR"],false,true],["NOVel → NOVelist",["NOV","NOV"],false,true]]},
 {ask:{q:"guitarist 的重音在哪裡？", opts:["GUI","TAR","IST"], ans:1,
   ok:"太好了！guitar 的重音在 TAR，加了 ist 還是在 TAR。",
   bad:{0:"gui 要輕輕唸，重音在 TAR。",2:"字尾 ist 不重讀，重音在 TAR。"},
   again:{q:"journalist 的重音在哪裡？", opts:["JOUR","NAL","IST"], ans:0, exp:"JOUR-nal 的重音在 JOUR，journalist 也一樣。"}}},
 {say:"但是 <<grapher>> 會讓重音搬家喔！{PHO-to} → {pho-TOG-ra-pher}。這是國二學過的「重音搬家」，這裡再複習一次。", board:[["PHOto → phoTOGrapher",["PHO","TOG"],false,true]]},
 {ask:{say:"最後一題！", q:"哪一組全部都是表示「人」的字？", opts:["leader、editor、pianist","leader、water、pianist","sister、color、list"], ans:0,
   ok:"完美！leader、editor、pianist 都是「做某件事的人」。",
   bad:{1:"water 是水，er 不是表示人的字尾。",2:"color、list 不是人；er、or、ist 結尾的字不一定都是人，要看意思。"},
   again:{q:"哪一個字的 ist 表示「人」？", opts:["list","novelist","mist"], ans:1, exp:"novel + ist = 小說家；list、mist 的 ist 不是字尾。"}}},
 {say:"字尾過關！記住：er、or 字尾都唸 /ɚ/，ct、it、ate 結尾的動詞常加 or；ist 唸 /ɪst/，常接在樂器和專門的事物後面，重音留在原字；grapher 會讓重音搬家。最後一課練關係子句怎麼停頓！", end:true}
],
p4:[
 {say:"同學好！關係子句的句子很長，唸的時候要在哪裡換氣？今天教你「意群」：把意思連在一起的字，當成一組一口氣唸完！", board:[["The girl who sings / is my sister.",["/"]]]},
 {say:"規則一：先行詞和它的關係子句是一家人，中間不能停！{The girl who sings} 要一口氣唸完，停頓放在整個主詞結束、主要動詞之前。", board:[["The girl who sings / is my sister.",["The girl who sings","/"]],["The girl / who sings is my sister.",[],true]]},
 {say:"口訣唸起來！", chant:"先行詞帶子句，一口氣唸完；遇到主要動詞，再停一下！"},
 {ask:{q:"哪一種停頓比較自然？", opts:["The man who lives next door / is a doctor.","The man / who lives next door is a doctor.","The man who lives / next door is a doctor."], ans:0,
   ok:"答對！The man who lives next door 是整個主詞，唸完再停。",
   bad:{1:"The man 和 who lives next door 是一家人，中間不要停。",2:"next door 屬於子句，不能把它切開。"},
   again:{q:"哪一種停頓比較自然？", opts:["The book / I bought is fun.","The book I bought / is fun.","The book I / bought is fun."], ans:1, exp:"The book I bought 是整個主詞，唸完再停。"}}},
 {say:"規則二：關係代名詞要輕輕唸，不要用力！{who}、{which}、{that} 在句子裡是小字，輕輕滑過去，重音放在名詞和動詞上：{the GIRL who SINGS}。", board:[["the GIRL who SINGS",["GIRL","SINGS"]],["the BOOK that I BOUGHT",["BOOK","BOUGHT"]]]},
 {ask:{q:"「The boy who won the race」哪個字要輕輕唸？", opts:["boy","who","race"], ans:1,
   ok:"讚！關係代名詞 who 是小字，要輕輕唸。",
   bad:{0:"boy 是重要的名詞，要唸清楚。",2:"race 是重要的名詞，要唸清楚。"},
   again:{q:"「the movie that we saw」哪個字要輕輕唸？", opts:["movie","that","saw"], ans:1, exp:"關係代名詞 that 唸弱音 /ðət/，輕輕帶過。"}}},
 {say:"小秘密：當關係代名詞的 {that} 要弱讀成 /ðət/，聽起來很短，和「那個」的 that /ðæt/ 不一樣。", board:[["That is my book. → /ðæt/",["That"]],["the book that I read → /ðət/",["that"]]]},
 {say:"規則三：whose 的句子也一樣，{whose} 和後面的名詞是一組：{The boy whose dog is lost / is crying.}", board:[["The boy whose dog is lost / is crying.",["whose dog","/"]]]},
 {say:"規則四：It is 的句子在 for / of + 人後面可以小停一下：{It's kind of you / to help me.} {It's hard for me / to get up early.}", board:[["It's kind of you / to help me.",["of you","/"]],["It's hard for me / to get up early.",["for me","/"]]]},
 {ask:{q:"哪一種停頓比較自然？", opts:["It's kind / of you to help me.","It's kind of you / to help me.","It's / kind of you to help me."], ans:1,
   ok:"太好了！kind of you 是一組，停在 to help 前面。",
   bad:{0:"kind of you 是一組，不要在 of 前面切開。",2:"It's kind of you 要連著唸，不要在 It's 後面停。"},
   again:{q:"哪一種停頓比較自然？", opts:["It's important / to sleep early.","It's / important to sleep early.","It's important to / sleep early."], ans:0, exp:"在 to V 前面停一下最自然。"}}},
 {ask:{say:"最後挑戰！", q:"哪一句的停頓最自然？", opts:["The singer whose songs / I love is coming.","The singer / whose songs I love is coming.","The singer whose songs I love / is coming."], ans:2,
   ok:"完美！The singer whose songs I love 是整個主詞，唸完才停。",
   bad:{0:"whose songs I love 是同一個子句，不能切開。",1:"先行詞 The singer 和子句是一家人，中間不要停。"},
   again:{q:"哪一句的停頓最自然？", opts:["People who exercise / are healthy.","People / who exercise are healthy.","People who / exercise are healthy."], ans:0, exp:"People who exercise 一口氣唸完，再停。"}}},
 {say:"自然發音全部上完了！總複習：wh 大多唸 /w/，碰到 o 唸 /h/；th 小字有聲 /ð/，think、thank 無聲 /θ/；er、or 都唸 /ɚ/，ist 唸 /ɪst/；先行詞帶子句一口氣唸完，關係代名詞輕輕唸。快去玩「拼字挑戰」試試身手吧！", end:true}
]};

/* ---------- 單字插圖（抽象的字用單字陣列第 7 欄的概念卡） ---------- */
const j312Note = (x, y, s = 1, c = "#8b5cf6") => grp(x, y, s, `<ellipse cx="0" cy="0" rx="5" ry="3.8" fill="${c}" transform="rotate(-20)"/><path d="M4.5 -1 V-18 Q10 -14 12 -8" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/>`);
const j312Piano = (x, y, s) => grp(x, y, s, `<rect x="-34" y="-46" width="68" height="30" rx="4" fill="#1f2937"/><rect x="-34" y="-16" width="68" height="9" fill="#fff" stroke="#9ca3af"/>` + [-26, -18, -6, 2, 10, 22].map(xx => `<rect x="${xx}" y="-16" width="4" height="5" fill="#1f2937"/>`).join("") + `<rect x="-32" y="-7" width="5" height="7" fill="#1f2937"/><rect x="27" y="-7" width="5" height="7" fill="#1f2937"/>`);
const j312Guitar = (x, y, s, r = -30) => grp(x, y, s, `<rect x="-2.5" y="-40" width="5" height="30" fill="#78350f"/><rect x="-4" y="-47" width="8" height="8" rx="2" fill="#451a03"/><circle cx="0" cy="-6" r="10" fill="#f59e0b"/><circle cx="0" cy="7" r="13" fill="#f59e0b"/><circle cx="0" cy="0" r="3.5" fill="#78350f"/><rect x="-5" y="9" width="10" height="2.5" fill="#78350f"/>`, r);
const j312Mic = (x, y, s) => grp(x, y, s, `<rect x="-1.5" y="-34" width="3" height="34" fill="#6b7280"/><ellipse cx="0" cy="0" rx="10" ry="3" fill="#4b5563"/><rect x="-4.5" y="-46" width="9" height="14" rx="4.5" fill="#374151"/>`);
const j312Camera = (x, y, s) => grp(x, y, s, `<rect x="-14" y="-9" width="28" height="18" rx="3" fill="#374151"/><rect x="-8" y="-13" width="10" height="5" rx="1" fill="#374151"/><circle r="6.5" fill="#9ca3af"/><circle r="4" fill="#1f2937"/><circle cx="9" cy="-5" r="1.6" fill="#facc15"/>`);
const j312Curtain = () => `<rect x="0" y="0" width="160" height="10" fill="#991b1b"/><path d="M0 0 H34 Q24 50 32 104 H0 Z" fill="#dc2626"/><path d="M160 0 H126 Q136 50 128 104 H160 Z" fill="#dc2626"/>`;
const j312Floor = (c = "#a16207") => `<rect x="0" y="100" width="160" height="20" fill="${c}"/>`;
const j312Drum = (x, y, s) => grp(x, y, s, `<rect x="-16" y="-16" width="32" height="18" fill="#ef4444"/><ellipse cx="0" cy="2" rx="16" ry="5" fill="#b91c1c"/><ellipse cx="0" cy="-16" rx="16" ry="5" fill="#f3f4f6" stroke="#9ca3af"/><path d="M-16 -14 L16 0 M16 -14 L-16 0" stroke="#fde68a" stroke-width="1.5"/>`);

Object.assign(ILLUS, {
  pianist: () => svgWrap("#f5f3ff", ground("#ddd6fe") + girlP(56, {pose:"hold", eyes:"closed"}) + j312Piano(104, 104, 1.1) + j312Note(28, 34, 1) + j312Note(132, 22, .8, "#ec4899")),
  guitarist: () => svgWrap("#fff7ed", ground() + kid(70, {pose:"hold", mood:"open"}) + j312Guitar(70, 88, .9) + j312Note(118, 40, 1, "#f97316") + j312Note(134, 64, .8) + spark(30, 30, .8)),
  photographer: () => svgWrap("#ecfeff", ground() + kid(58, {pose:"hold", acc:["cap"]}) + j312Camera(58, 82, 1.1) + spark(82, 70, 1.1, "#fde047") + girlP(126, {s:.7, pose:"wave", mood:"open"})),
  choir: () => svgWrap("#fdf4ff", ground("#f5d0fe") + girlP(32, {s:.75, mood:"open", eyes:"closed", oc:"#7c3aed"}) + kid(80, {s:.75, mood:"open", eyes:"closed", oc:"#7c3aed"}) + girlP(128, {s:.75, mood:"open", eyes:"closed", oc:"#7c3aed", hair:"twin", acc:[]}) + j312Note(56, 30, .9) + j312Note(104, 24, .9, "#ec4899")),
  band: () => svgWrap("#1e1b4b", j312Floor("#4c1d95") + girlP(46, {y:104, s:.8, pose:"hold", mood:"open"}) + j312Guitar(46, 86, .75) + kid(112, {y:104, s:.8, pose:"hold", mood:"open"}) + j312Drum(112, 102, .9) + star(80, 22, 7) + j312Note(80, 54, .8, "#fde047")),
  audience: () => svgWrap("#fef3c7", j312Curtain() + `<rect x="30" y="62" width="100" height="8" fill="#a16207"/>` + girlP(80, {y:62, s:.42, pose:"wave", mood:"open"}) + kid(30, {y:124, s:.62, pose:"cheer", mood:"open"}) + girlP(80, {y:124, s:.62, pose:"cheer", mood:"open"}) + kid(130, {y:124, s:.62, pose:"cheer", mood:"open", oc:"#22c55e", hair:"short"})),
  captain: () => svgWrap("#ecfdf5", ground() + kid(70, {pose:"thumb", mood:"open", acc:["cap", "badge"], oc:"#16a34a"}) + O.ball(116, 98, 1.3) + star(128, 30, 8) + spark(30, 34, .8)),
  leader: () => svgWrap("#eff6ff", ground() + kid(46, {pose:"point", mood:"open", acc:["badge"]}) + girlP(104, {s:.7}) + kid(136, {s:.7, oc:"#f59e0b", hair:"short"})),
  speaker: () => svgWrap("#fefce8", ground("#fde68a") + kid(76, {pose:"wave", mood:"open", acc:["tie"]}) + j312Mic(60, 104, 1) + bubble(124, 26, "Hello!", 54)),
  director: () => svgWrap("#f1f5f9", ground("#cbd5e1") + kid(50, {pose:"point", acc:["cap"], mood:"open"}) + grp(116, 64, 1.3, `<rect x="-18" y="-6" width="36" height="24" rx="2" fill="#1f2937"/><path d="M-18 -8 L18 -16 L19 -10 L-17 -2 Z" fill="#1f2937"/><path d="M-12 -9.3 L-8 -4 M-4 -11 L0 -6 M4 -12.8 L8 -7.5 M12 -14.6 L15 -9.5" stroke="#fff" stroke-width="2.4"/>` + txt(0, 10, "ACTION", 7, "#fff"))),
  fan: () => svgWrap("#fff1f2", ground("#fecdd3") + girlP(64, {pose:"cheer", mood:"open", eyes:"heart"}) + heart(112, 40, 1.3) + heart(132, 72, .8) + star(26, 30, 7) + spark(120, 96, .7)),
  novel: () => svgWrap("#fefce8", O.book(44, 72, 1.1, "#ef4444", -8) + O.openBook(108, 70, 1.2) + spark(132, 26, .8) + spark(24, 26, .6)),
  mystery: () => svgWrap("#1e293b", O.book(56, 66, 1.5, "#475569", -6) + txt(58, 74, "?", 26, "#fde047", 900) + grp(112, 58, 1.2, `<circle r="16" fill="#bfe6ff" opacity=".5" stroke="#cbd5e1" stroke-width="4"/><path d="M11 11 L26 26" stroke="#a16207" stroke-width="6" stroke-linecap="round"/>`) + txt(130, 100, "?", 18, "#fde047") + spark(28, 24, .7, "#fde047")),
  poem: () => svgWrap("#f0f9ff", O.openBook(80, 62, 1.7) + O.pen(134, 92, .8) + heart(126, 22, .8) + spark(30, 24, .7)),
  chapter: () => svgWrap("#fffbeb", O.openBook(80, 58, 1.7, "Ch.3") + txt(80, 106, "Chapter 3", 13, "#b45309")),
  author: () => svgWrap("#f5f3ff", ground("#ddd6fe") + kid(48, {pose:"hold", acc:["glasses"]}) + O.pen(52, 84, .6) + O.book(112, 66, 1.3, "#8b5cf6") + txt(112, 104, "by Ken", 10, "#6d28d9")),
  hero: () => svgWrap("#fef9c3", ground() + grp(80, 108, 1, `<path d="M-12 -38 L-26 -2 L26 -2 L12 -38 Z" fill="#ef4444"/>`) + kid(80, {pose:"cheer", mood:"open", acc:["badge"], oc:"#2563eb"}) + star(28, 30, 9) + star(134, 40, 6) + spark(126, 82, .8)),
  secret: () => svgWrap("#f5f3ff", ground("#ddd6fe") + girlP(62, {pose:"hold", mood:"o"}) + kid(104, {eyes:"happy", mood:"open"}) + bubble(84, 20, "Shh...", 52)),
  argue: () => svgWrap("#fef2f2", ground("#fecaca") + kid(44, {eyes:"worry", mood:"open"}) + girlP(116, {eyes:"worry", mood:"open"}) + bubble(40, 20, "No!", 40) + bubble(118, 20, "Yes!", 44) + `<path d="M70 52 L80 44 L76 58 L88 50" stroke="#ef4444" stroke-width="3" fill="none" stroke-linejoin="round"/>`),
  apologize: () => svgWrap("#f0fdf4", ground() + kid(52, {mood:"wavy", acc:["sweat"], tilt:-8}) + girlP(114) + bubble(52, 20, "Sorry!", 56)),
  violinist: () => svgWrap("#fdf2f8", ground("#fbcfe8") + girlP(70, {pose:"hold", eyes:"closed", oc:"#7c3aed"}) + grp(82, 74, .9, `<path d="M0 -14 C-9 -14 -9 -6 -5 -3 C-10 0 -10 12 0 12 C10 12 10 0 5 -3 C9 -6 9 -14 0 -14 Z" fill="#b45309"/><rect x="-1.5" y="-32" width="3" height="20" fill="#451a03"/><path d="M-3 0 H3" stroke="#451a03" stroke-width="2"/>`, -40) + `<line x1="52" y1="70" x2="104" y2="96" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>` + j312Note(120, 36, 1, "#ec4899") + j312Note(34, 30, .8)),
  lazy: () => svgWrap("#fef3c7", `<rect x="16" y="70" width="128" height="30" rx="8" fill="#60a5fa"/><rect x="16" y="56" width="16" height="44" rx="6" fill="#3b82f6"/><rect x="128" y="56" width="16" height="44" rx="6" fill="#3b82f6"/><rect x="24" y="100" width="6" height="8" fill="#1e3a8a"/><rect x="130" y="100" width="6" height="8" fill="#1e3a8a"/>` + kid(124, {y:66, s:.8, tilt:-90, eyes:"closed"}) + txt(46, 36, "Z", 16, "#6b7280") + txt(60, 24, "z", 12, "#9ca3af")),
  brave: () => svgWrap("#e0f2fe", ground() + O.tree(116, 82, 1.5) + O.cat(124, 46, .5) + kid(52, {pose:"cheer", mood:"open", acc:["badge"]}) + bubble(52, 18, "Go!", 40)),
  club: () => svgWrap("#ecfeff", ground() + `<rect x="36" y="8" width="88" height="26" rx="6" fill="#0891b2"/>` + txt(80, 26, "ART CLUB", 12, "#fff", 900) + kid(40, {s:.75, pose:"wave"}) + girlP(80, {s:.75, mood:"open"}) + kid(120, {s:.75, oc:"#f59e0b", hair:"short"}) + O.brush(140, 70, .6, "#ef4444")),
  teammate: () => svgWrap("#f0fdf4", ground() + kid(56, {pose:"shakeR", oc:"#ef4444", mood:"open"}) + kid(104, {pose:"shakeL", oc:"#ef4444", hair:"short", hc:"#1f2937", mood:"open"}) + txt(56, 90, "7", 10, "#fff") + txt(104, 90, "9", 10, "#fff") + star(80, 26, 8)),
  owner: () => svgWrap("#fef9c3", ground() + girlP(54, {pose:"hold"}) + O.dog(114, 92, .8) + `<path d="M61 86 Q88 98 104 80" stroke="#ef4444" stroke-width="2" fill="none"/>` + heart(86, 40, .9)),
  designer: () => svgWrap("#fdf4ff", ground("#f5d0fe") + girlP(46, {pose:"hold", acc:["glasses"]}) + `<rect x="84" y="14" width="60" height="72" rx="3" fill="#fff" stroke="#d8b4fe" stroke-width="2"/><path d="M106 30 L122 30 L126 46 L134 76 L94 76 L102 46 Z" fill="#f9a8d4" stroke="#ec4899" stroke-width="1.5"/><path d="M98 86 L92 104 M130 86 L136 104" stroke="#a16207" stroke-width="3"/>` + O.pencil(66, 82, .55)),
  scene: () => svgWrap("#1f2937", j312Curtain() + j312Floor() + `<path d="M80 0 L46 100 L114 100 Z" fill="#fde68a" opacity=".35"/>` + girlP(80, {y:102, s:.8, pose:"wave", mood:"open"}) + star(80, 20, 5, "#fde68a"))
});
/* ---------- 記憶小提示 ---------- */
Object.assign(MEMO, {
  personality:"person（人）+ ality：一個人與眾不同的樣子，就是個性。",
  outgoing:"out（向外）+ going（走）：喜歡往外跑、找人聊天，就是外向的。",
  cheerful:"cheer（歡呼、加油）+ ful（充滿）：充滿歡呼聲的人，最開朗了！",
  humble:"humble 唸起來像「漢寶」：漢堡再好吃也不驕傲，很謙虛。",
  selfish:"self（自己）+ ish：心裡只有自己，就是自私的。",
  rude:"rude 唸起來像「路的」：在路上亂大吼，很沒禮貌。",
  brave:"brave 唸起來像「不累夫」：勇敢的人遇到困難也不喊累。",
  gentle:"gentle 開頭和 gentleman（紳士）一樣：紳士說話都很溫柔。",
  lazy:"lazy 唸起來像「累極」：還沒做事就喊累極了，真懶惰！",
  hardworking:"hard（努力地）+ working（工作）：很努力工作的，就是勤奮的。",
  thoughtful:"thought（想法）+ ful（充滿）：心裡充滿替別人著想的想法，就是體貼。",
  responsible:"response（回應）+ ible：有事一定會回應、負責到底，就是負責任的。",
  confident:"con（完全）+ fide（相信）+ ent：完全相信自己，就是有自信。",
  stubborn:"stub（樹樁）+ born：像天生的樹樁一樣推不動，真固執！",
  friendship:"friend（朋友）+ ship（關係、狀態）：朋友之間的關係，就是友誼。",
  trust:"trust 和 true（真的）開頭一樣：相信你說的是真的，就是信任。",
  relationship:"relation（關聯）+ ship（關係）：人和人之間連起來的線，就是關係。",
  partner:"part（一部分）+ ner：兩個人各做一部分，一起完成，就是搭檔。",
  stranger:"strange（奇怪的、陌生的）+ er（人）：不認識的人，就是陌生人。",
  "get along":"get（變得）+ along（一起往前）：大家能一起往前走，就是相處得好。",
  argue:"argue 唸起來像「啊格悠」：吵架吵到「啊」一聲大叫。",
  apologize:"apology（道歉）把 y 改成 ize 就變成動詞：apologize 道歉。",
  secret:"secret 裡有 see（看）的音：不能讓別人看到的事，就是秘密。",
  encourage:"en（使）+ courage（勇氣）：使別人有勇氣，就是鼓勵！",
  respect:"re（再）+ spect（看）：值得一看再看的人，就是讓人尊敬的人。",
  promise:"pro（向前）+ mise（送出）：先把話送出去，以後一定做到，就是承諾。",
  admire:"ad（向）+ mire（驚奇地看）：驚奇地看著某人，就是欽佩。",
  club:"club 唸起來像「克拉不」：興趣一樣的人聚在一起，社團怎麼拉都不散。",
  member:"member 和 remember 只差 re：社團的成員要記得（remember）每個成員的名字。",
  leader:"lead（帶領）+ er（人）：帶領大家的人，就是領導者。",
  captain:"cap（頭，像 cap 帽子）+ tain：戴隊長帽、站在最前面的頭頭，就是隊長。",
  teammate:"team（隊伍）+ mate（夥伴）：同一隊的夥伴，就是隊友。",
  activity:"active（活躍的）去 e + ity：讓人活躍起來的事情，就是活動。",
  concert:"con（一起）+ cert：大家聚在一起聽音樂，就是音樂會、演唱會。",
  choir:"choir 唸起來像「快兒」：合唱團唱歌，快快樂樂。ch 唸 /k/。",
  band:"band 也有「帶子」的意思：樂團就是用音樂把大家綁在一起。",
  perform:"per（完全）+ form（形式、樣子）：完全把樣子做出來給大家看，就是表演。",
  audience:"audi（聽）+ ence：坐在台下聽的人，就是聽眾、觀眾。audio（音訊）也有 audi。",
  organize:"organ（器官）+ ize：像身體的器官一樣分工合作，就是組織、籌辦。",
  "sign up":"sign（簽名）+ up：把名字簽上去，就是報名。",
  novel:"novel 也有「新奇的」意思：小說裡都是新奇的故事。",
  character:"character 唸起來像「卡瑞克特」：故事裡每個角色都有自己的個性。",
  author:"author 和 authority（權威）同源：寫出書的人，就是這本書的權威──作者。",
  plot:"plot 唸起來像「破拉」：劇情一下破、一下拉，高潮迭起！",
  chapter:"chapter 唸起來像「蹺不得」：一章一章讀下去，一章都蹺不得。",
  poem:"poem 唸起來像「破音」：唸詩唸到太激動，聲音都破音了。",
  poet:"poet 和 poem 只差最後一個字母：寫 poem 的人就是 poet。",
  mystery:"my（我的）+ stery：「我的」故事還沒揭曉答案，就是一個謎。偵探小說也叫 mystery。",
  hero:"hero 唸起來像「黑肉」：曬得黑黑的英雄，最勇敢！",
  ending:"end（結束）+ ing：故事結束的地方，就是結局。",
  scene:"scene 和 see（看）唸起來很像：電影裡你看到的一幕，就是場景。c 不發音。",
  fan:"fan 也是「扇子」：粉絲在台下拚命搧著加油扇。",
  recommend:"re（再）+ commend（稱讚）：一再稱讚，就是推薦。",
  favorite:"favor（喜愛、偏愛）+ ite：最偏愛的那一個，就是最喜歡的。",
  pianist:"piano（鋼琴）去 o + ist（專家）：彈鋼琴的專家，就是鋼琴家。",
  guitarist:"guitar（吉他）+ ist（專家）：彈吉他的人，就是吉他手。",
  novelist:"novel（小說）+ ist（專家）：寫小說的專家，就是小說家。",
  journalist:"journal（日誌、報刊）+ ist（專家）：天天為報刊寫報導的人，就是記者。",
  violinist:"violin（小提琴）+ ist（專家）：拉小提琴的專家，就是小提琴家。",
  director:"direct（指揮、指導）+ or（人）：指揮演員怎麼演的人，就是導演。",
  editor:"edit（編輯）+ or（人）：負責修改文章的人，就是編輯。",
  translator:"translate（翻譯）去 e + or（人）：做翻譯的人，就是翻譯者。",
  designer:"design（設計）+ er（人）：做設計的人，就是設計師。g 不發音。",
  photographer:"photograph（照片）+ er（人）：拍照片的人，就是攝影師。重音搬到 TOG。",
  owner:"own（擁有）+ er（人）：擁有東西的人，就是主人。",
  manager:"manage（管理）去 e + er（人）：負責管理的人，就是經理。",
  speaker:"speak（說話）+ er（人）：在台上說話的人，就是演講者；喇叭也叫 speaker。"
});
registerUnit("j3-1-2", {name:"國三 上學期 第二次段考", sub:"關係代名詞 who / which / that / whose、It is + 形容詞 + for / of + 人 + to V", words:J3_1_2_WORDS, grammar:J3_1_2_GRAMMAR, quiz:J3_1_2_QUIZ, classes:Object.assign({}, J3_1_2_CLASS, J3_1_2_PHONICS_CLASS), phonics:J3_1_2_PHONICS});
})();
