/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   內容資料：國三上學期 第一次段考（通用範圍）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 文法說明] x3], null, null, 插圖]
   插圖："表情符號|標籤" 為概念卡（抽象的字用），其他的字畫在下面的 ILLUS
   ========================================================= */
const J3_1_1_WORDS = [
/* ---------- 產品與製造 ---------- */
["produce","v.","生產；製造",[
 ["Many bikes are produced in Taichung.","很多腳踏車是在台中生產的。","被動語態現在式：are + p.p.。主詞 bikes 是複數，用 are。"],
 ["This factory produces 500 cars a day.","這間工廠一天生產五百輛車。","主動語態：主詞 This factory 是第三人稱單數，produce 要加 s。"],
 ["The rice was produced by local farmers.","這些米是當地農夫種出來的。","被動語態過去式：was + p.p. + by + 做動作的人。"]],null,null,"🏭|生產"],
["product","n.","產品",[
 ["These products are made in Taiwan.","這些產品是台灣製造的。","be made in + 地點，表示「在某地製造」。products 是複數，用 are。"],
 ["Do you know where this product was made?","你知道這個產品是在哪裡製造的嗎？","間接問句：where + 主詞 + 動詞，不能寫成 where was this product made。"],
 ["The new product will be sold next month.","這個新產品下個月會開賣。","被動語態未來式：will be + p.p.。sell 的 p.p. 是 sold。"]],null,null,"📦|產品"],
["factory","n.","工廠",[
 ["The toys are made in a factory in Vietnam.","這些玩具是在越南的一間工廠做的。","被動語態：are made，主詞 The toys 是被做出來的東西。"],
 ["A new factory was built near my town last year.","去年我們鎮附近蓋了一間新工廠。","last year 是過去，用 was + p.p.。build 的 p.p. 是 built。"],
 ["My uncle works in a shoe factory.","我叔叔在一間鞋子工廠工作。","work in a factory 是「在工廠工作」。複數是 factories。"]]],
["material","n.","材料；原料",[
 ["What material is this bag made of?","這個包包是什麼材料做的？","be made of + 材料：看得出原本的材料時用 of。"],
 ["Old bottles can be used as building materials.","舊瓶子可以拿來當建築材料。","助動詞的被動：can be + p.p.，be 一定用原形。"],
 ["The material feels soft and smooth.","這個材料摸起來又軟又滑。","feel 是感官動詞，後面接形容詞 soft、smooth。"]],null,null,"🧵|材料"],
["company","n.","公司",[
 ["The company was started by two students.","這家公司是兩個學生創立的。","被動語態過去式：was started by + 人。"],
 ["Do you know which company makes this phone?","你知道哪一家公司做這支手機嗎？","間接問句：which company 本身就是主詞，後面直接接動詞 makes。"],
 ["My mom works for a computer company.","我媽媽在一家電腦公司上班。","work for + 公司，表示「替某公司工作」。"]],null,null,"🏢|公司"],
["metal","n.","金屬",[
 ["This spoon is made of metal.","這支湯匙是金屬做的。","be made of + 材料，看得出原料用 of。"],
 ["Metal cans should be recycled.","金屬罐應該要回收。","should be + p.p.，表示「應該被……」。"],
 ["The metal box is too heavy to carry.","這個金屬盒子太重了，搬不動。","metal 可以放在名詞前面當形容詞用：metal box。"]],null,null,"🔩|金屬"],
["wood","n.","木頭；木材",[
 ["The table is made of wood.","這張桌子是木頭做的。","be made of wood，看得出木頭原料，用 of。wood 是不可數名詞。"],
 ["This old temple was built with wood.","這座老廟是用木頭蓋的。","was built with + 材料，表示「用……蓋成」。"],
 ["The wood chair was made by my grandpa.","這張木頭椅子是爺爺做的。","by 後面接做動作的人 my grandpa。wood 放在名詞前面表示「木製的」。"]]],
["glass","n.","玻璃；玻璃杯",[
 ["The glass was broken by the cat.","玻璃杯被貓打破了。","被動語態過去式：was broken。break 的 p.p. 是 broken。"],
 ["This bottle is made of glass, so be careful.","這個瓶子是玻璃做的，所以要小心。","glass 當「玻璃」是不可數名詞，made of glass。"],
 ["Can I have a glass of water?","可以給我一杯水嗎？","glass 當「玻璃杯」是可數名詞：a glass of water。"]]],
["paper","n.","紙",[
 ["Paper was invented in China about 2,000 years ago.","紙大約兩千年前在中國被發明出來。","被動語態過去式：was invented。ago 表示過去。"],
 ["Paper is made from trees.","紙是用樹做的。","be made from：看不出原本的材料（樹變成紙）用 from。"],
 ["Please write your name on a piece of paper.","請把你的名字寫在一張紙上。","paper 是不可數名詞，一張紙是 a piece of paper。"]]],
["cotton","n.","棉花；棉",[
 ["This T-shirt is made of cotton.","這件 T 恤是棉做的。","be made of cotton，用 of 接材料。"],
 ["Cotton is grown in hot places.","棉花長在炎熱的地方。","被動語態現在式：is grown。grow 的 p.p. 是 grown。"],
 ["Cotton clothes are comfortable in summer.","夏天穿棉質衣服很舒服。","cotton 放在名詞前面當形容詞：cotton clothes。"]]],
["deliver","v.","遞送；運送",[
 ["The package was delivered this morning.","包裹今天早上送到了。","被動語態過去式：was delivered。deliver 的 -ed 唸 /d/。"],
 ["Pizza will be delivered to your home in 30 minutes.","披薩會在三十分鐘內送到你家。","未來式被動：will be + p.p.。"],
 ["The mail carrier delivers letters every day.","郵差每天送信。","主動語態：delivers 要加 s，主詞是第三人稱單數。"]],null,null,"🚚|遞送"],
["package","n.","包裹",[
 ["This package was sent from Japan.","這個包裹是從日本寄來的。","被動語態過去式：was sent。send 的 p.p. 是 sent。"],
 ["Has the package been delivered yet?","包裹已經送到了嗎？","現在完成式被動：has been + p.p.。問句把 Has 放到最前面。"],
 ["Do you know who sent this package?","你知道這個包裹是誰寄的嗎？","間接問句：who 本身是主詞，後面直接接 sent，語順不變。"]]],
["create","v.","創造；建立",[
 ["This game was created by a high school student.","這個遊戲是一個高中生做出來的。","被動語態：was created by + 人。"],
 ["Mickey Mouse was created in 1928.","米老鼠是在 1928 年被創造出來的。","年份是過去，用 was + p.p.。"],
 ["She likes to create songs on her guitar.","她喜歡用吉他創作歌曲。","like to + 原形動詞。"]],null,null,"✨|創造"],
/* ---------- 發明與歷史 ---------- */
["invent","v.","發明",[
 ["The telephone was invented by Bell in 1876.","電話是貝爾在 1876 年發明的。","被動語態過去式：was invented by + 人。"],
 ["Who invented the light bulb?","誰發明了電燈泡？","問「誰」做了動作，Who 是主詞，用主動語態 invented。"],
 ["Do you know when paper was invented?","你知道紙是什麼時候被發明的嗎？","間接問句：when + 主詞 paper + was invented，be 動詞放在主詞後面。"]],null,null,"💡|發明"],
["inventor","n.","發明家",[
 ["Edison was a great inventor.","愛迪生是一位偉大的發明家。","invent + or，表示「做這件事的人」。"],
 ["The inventor was given a prize.","那位發明家得到了一個獎。","被動語態：was given。give 的 p.p. 是 given。"],
 ["I want to know who the inventor of the game is.","我想知道這個遊戲的發明者是誰。","間接問句：who + 主詞 the inventor of the game + is，is 放到最後。"]],null,null,"👨‍🔬|發明家"],
["invention","n.","發明；發明物",[
 ["The wheel is one of the greatest inventions.","輪子是最偉大的發明之一。","one of the + 最高級 + 複數名詞。"],
 ["This invention is used all over the world.","這項發明全世界都在用。","被動語態現在式：is used。"],
 ["His invention was shown on TV.","他的發明在電視上被介紹了。","被動語態過去式：was shown。show 的 p.p. 是 shown。"]],null,null,"⚙️|發明"],
["discover","v.","發現",[
 ["The old ship was discovered under the sea.","那艘古老的船在海底被發現了。","被動語態過去式：was discovered。"],
 ["Scientists have discovered a new kind of frog.","科學家發現了一種新的青蛙。","現在完成式主動：have + p.p.。"],
 ["A new star will be discovered someday.","總有一天會發現一顆新的星星。","未來式被動：will be + p.p.。"]],null,null,"🔍|發現"],
["century","n.","世紀；一百年",[
 ["This temple was built in the 18th century.","這座廟是在十八世紀蓋的。","in the + 序數 + century。build 的 p.p. 是 built。"],
 ["The light bulb was invented in the 19th century.","電燈泡是在十九世紀被發明的。","被動語態過去式：was invented。"],
 ["A century is one hundred years.","一個世紀是一百年。","複數是 centuries，y 改成 i 加 es。"]],null,null,"💯|世紀"],
["ancient","adj.","古代的；古老的",[
 ["This ancient city was found 100 years ago.","這座古城是一百年前被發現的。","被動語態過去式：was found。find 的 p.p. 是 found。"],
 ["The ancient Chinese made paper by hand.","古代中國人用手工做紙。","ancient 放在名詞前面，表示「古代的」。"],
 ["These ancient coins are kept in a museum.","這些古錢幣被保存在博物館裡。","被動語態：are kept。keep 的 p.p. 是 kept。"]],null,null,"🏛️|古代的"],
["wheel","n.","輪子",[
 ["The wheel was invented over 5,000 years ago.","輪子是五千多年前被發明的。","被動語態過去式：was invented。"],
 ["My bike has a flat wheel.","我的腳踏車有一個輪子沒氣了。","a flat wheel 是「洩了氣的輪子」。"],
 ["Cars can't be moved without wheels.","沒有輪子，車子就不能移動。","can't be + p.p.，助動詞後面的 be 用原形。"]]],
["print","v.","印刷；列印",[
 ["This book was printed in 1950.","這本書是在 1950 年印刷的。","被動語態過去式：was printed。print 的 -ed 唸 /ɪd/。"],
 ["Your tickets will be printed at the counter.","你的票會在櫃台印出來。","未來式被動：will be + p.p.。"],
 ["Can you print this page for me?","你可以幫我印這一頁嗎？","主動語態：Can you + 原形動詞？"]],null,null,"🖨️|印刷"],
["light bulb","n.","電燈泡",[
 ["The light bulb was invented by Edison.","電燈泡是愛迪生發明的。","被動語態：was invented by + 人。"],
 ["The light bulb in my room should be changed.","我房間的燈泡該換了。","should be + p.p.，表示「應該被……」。"],
 ["Do you know how a light bulb works?","你知道電燈泡是怎麼運作的嗎？","間接問句：how + 主詞 a light bulb + works，不能寫 how does a light bulb work。"]]],
["war","n.","戰爭",[
 ["Many old buildings were destroyed in the war.","很多老建築在戰爭中被摧毀了。","被動語態過去式：were destroyed，主詞是複數用 were。"],
 ["The war ended in 1945.","那場戰爭在 1945 年結束了。","這裡的 end 當不及物動詞「結束」，後面沒有受詞，直接用主動 ended。"],
 ["Nobody wants war.","沒有人想要戰爭。","Nobody 當主詞看成單數，want 要加 s。"]],null,null,"⚔️|戰爭"],
/* ---------- 新聞與事件 ---------- */
["report","n./v.","報導；報告",[
 ["The accident was reported on TV.","那場意外在電視上被報導了。","被動語態過去式：was reported。report 的 -ed 唸 /ɪd/。"],
 ["I read a report about the earthquake.","我讀了一篇關於地震的報導。","report 當名詞，a report about + 事情。"],
 ["Do you know who wrote this report?","你知道這篇報告是誰寫的嗎？","間接問句：who 是主詞，後面直接接 wrote。"]],null,null,"📰|報導"],
["event","n.","事件；活動",[
 ["The event will be held in the park.","這個活動將在公園舉行。","be held 是「被舉辦」。hold 的 p.p. 是 held。"],
 ["It was the most exciting event of the year.","那是今年最令人興奮的活動。","exciting 形容「事情」令人興奮，用 -ing。"],
 ["Do you know when the event starts?","你知道活動什麼時候開始嗎？","間接問句：when + 主詞 the event + starts，does 要拿掉，start 加 s。"]],null,null,"🎪|活動"],
["newspaper","n.","報紙",[
 ["The story was printed in the newspaper.","這個故事被登在報紙上。","被動語態過去式：was printed。"],
 ["My grandpa reads the newspaper every morning.","我爺爺每天早上看報紙。","主動語態現在式：reads 要加 s。"],
 ["Old newspapers can be recycled.","舊報紙可以回收。","can be + p.p.。"]]],
["magazine","n.","雜誌",[
 ["This magazine is read by many teenagers.","很多青少年看這本雜誌。","被動語態現在式：is read。read 的 p.p. 還是 read，但唸 /rɛd/。"],
 ["I found an interesting story in the magazine.","我在雜誌裡看到一個有趣的故事。","interesting 形容「故事」很有趣，用 -ing。"],
 ["The magazine comes out every Friday.","這本雜誌每個星期五出刊。","come out 是「出版、出刊」。"]]],
["article","n.","文章",[
 ["The article was written by a famous reporter.","這篇文章是一位有名的記者寫的。","被動語態：was written by。write 的 p.p. 是 written。"],
 ["I was surprised by the article.","我被這篇文章嚇了一跳。","-ed 形容詞形容「人」的感受：I was surprised。"],
 ["Do you know what the article is about?","你知道這篇文章在講什麼嗎？","間接問句：what + 主詞 the article + is about。"]],null,null,"📄|文章"],
["headline","n.","新聞標題；頭條",[
 ["The fire made headlines in every newspaper.","那場火災登上了每一家報紙的頭條。","make headlines 是「上頭條新聞」。"],
 ["The headline was shocking.","那則標題很令人震驚。","shocking 形容「事情」令人震驚，用 -ing。"],
 ["I only read the headlines this morning.","我今天早上只看了標題。","read 的過去式還是 read，唸 /rɛd/。"]]],
["announce","v.","宣布",[
 ["The winner will be announced tomorrow.","得獎者明天會宣布。","未來式被動：will be + p.p.。"],
 ["The test results were announced yesterday.","考試結果昨天公布了。","主詞 results 是複數，用 were + p.p.。announce 的 -ed 唸 /t/。"],
 ["The principal announced the good news.","校長宣布了這個好消息。","主動語態：announced，principal 是做動作的人。"]],null,null,"📢|宣布"],
["record","n.","紀錄",[
 ["A new world record was set yesterday.","昨天創下了一項新的世界紀錄。","set a record 是「創紀錄」。set 的 p.p. 還是 set。"],
 ["The record has been broken again.","這項紀錄又被打破了。","現在完成式被動：has been + p.p.。break 的 p.p. 是 broken。"],
 ["She holds the school record for the 100-meter race.","她保持學校一百公尺賽跑的紀錄。","hold the record 是「保持紀錄」。"]],null,null,"🏆|紀錄"],
["rescue","v.","救援；營救",[
 ["The boy was rescued by a firefighter.","那個男孩被一位消防員救了。","被動語態：was rescued by + 人。"],
 ["The dog must be rescued right away.","那隻狗必須馬上被救出來。","must be + p.p.，表示「必須被……」。"],
 ["Ten people have been rescued so far.","到目前為止已經救出十個人了。","現在完成式被動：have been + p.p.。主詞 people 是複數，用 have。"]],null,null,"🚁|救援"],
["injure","v.","使受傷",[
 ["Two people were injured in the accident.","兩個人在這場意外中受傷了。","「受傷」英文常用被動：be injured。"],
 ["He injured his leg while playing soccer.","他踢足球的時候弄傷了腳。","主動語態：injure + 身體部位。"],
 ["Nobody was injured in the fire.","沒有人在火災中受傷。","Nobody 當主詞看成單數，用 was。"]],null,null,"🩹|受傷"],
["damage","v./n.","損壞；損害",[
 ["Many houses were damaged by the typhoon.","很多房子被颱風損壞了。","被動語態過去式：were damaged by + 原因。"],
 ["The flood did a lot of damage to the town.","那場水災對這個小鎮造成很大的損害。","damage 當名詞是不可數名詞，do damage to 是「對……造成損害」。"],
 ["Don't damage the books in the library.","不要弄壞圖書館的書。","否定祈使句：Don't + 原形動詞。"]],null,null,"💥|損壞"],
["destroy","v.","摧毀；毀壞",[
 ["The old bridge was destroyed by the earthquake.","那座舊橋被地震摧毀了。","被動語態：was destroyed by + 原因。"],
 ["The forest will be destroyed if we don't protect it.","如果我們不保護森林，它就會被毀掉。","未來式被動：will be + p.p.。if 子句用現在式。"],
 ["Plastic can destroy the ocean.","塑膠會毀掉海洋。","can + 原形動詞 destroy，主動語態。"]],null,null,"🌋|摧毀"],
["steal","v.","偷",[
 ["My bike was stolen last night.","我的腳踏車昨晚被偷了。","steal 的三態：steal - stole - stolen。被偷用被動：was stolen。"],
 ["It's wrong to steal other people's things.","偷別人的東西是不對的。","It is + 形容詞 + to + 原形動詞 steal。"],
 ["Do you know who stole the money?","你知道是誰偷了錢嗎？","間接問句：who 是主詞，後面接 stole，語順不變。"]],null,null,"🦹|偷"],
["thief","n.","小偷",[
 ["The thief was caught by the police.","小偷被警察抓到了。","被動語態：was caught。catch 的 p.p. 是 caught。"],
 ["The thieves ran away.","那些小偷逃跑了。","thief 的複數是 thieves，f 改成 v 加 es。"],
 ["Nobody knows where the thief is now.","沒有人知道小偷現在在哪裡。","間接問句：where + 主詞 the thief + is。"]]],
/* ---------- 情緒與感受（-ing／-ed） ---------- */
["amazing","adj.","令人驚奇的；很棒的",[
 ["The magic show was amazing.","那場魔術表演太神奇了。","-ing 形容「事情」帶給人的感覺：表演令人驚奇。"],
 ["It's amazing that he can speak five languages.","他會說五種語言，真是令人驚奇。","It is + 形容詞 + that 子句。"],
 ["We had an amazing time at the beach.","我們在海邊玩得超開心。","have an amazing time 是「玩得很愉快」。"]],null,null,"🤩|令人驚奇的"],
["amazed","adj.","感到驚奇的",[
 ["I was amazed at the magic show.","我對那場魔術表演感到很驚奇。","-ed 形容「人」的感受。be amazed at / by + 事情。"],
 ["The kids were amazed by the huge whale.","孩子們被那隻巨大的鯨魚嚇呆了。","主詞 kids 是人，用 amazed。"],
 ["She looked amazed when she saw the gift.","她看到禮物的時候一臉驚奇。","look + 形容詞，形容她的感受用 amazed。"]],null,null,"😲|感到驚奇的"],
["surprising","adj.","令人驚訝的",[
 ["The test result was surprising.","考試結果很令人驚訝。","-ing 形容「事情」：結果令人驚訝。"],
 ["It's surprising that he lost the game.","他輸了比賽，真令人驚訝。","It is + 形容詞 + that 子句。"],
 ["We heard some surprising news.","我們聽到了一些令人驚訝的消息。","news 是不可數名詞，前面用 some，不用 a。"]],null,null,"😮|令人驚訝的"],
["interesting","adj.","有趣的",[
 ["The science class is very interesting.","自然課非常有趣。","-ing 形容「事情」：課程讓人覺得有趣。"],
 ["I'm interested in this interesting book.","我對這本有趣的書很感興趣。","比一比：人 + be interested in；東西 + is interesting。"],
 ["Do you know what interesting places we can visit?","你知道我們可以參觀哪些有趣的地方嗎？","間接問句：what interesting places + 主詞 we + can visit。"]],null,null,"🤓|有趣的"],
["confusing","adj.","令人困惑的",[
 ["The question was too confusing.","這個問題太讓人困惑了。","-ing 形容「事情」：問題讓人搞不懂。"],
 ["English grammar can be confusing.","英文文法有時會讓人搞混。","can be + 形容詞，表示「有時會……」。"],
 ["The map is so confusing that we got lost.","地圖太讓人搞不懂，我們迷路了。","so + 形容詞 + that 子句，表示「太……所以……」。"]],null,null,"🌀|令人困惑的"],
["confused","adj.","感到困惑的",[
 ["I'm confused. Can you explain it again?","我搞不懂，你可以再解釋一次嗎？","-ed 形容「人」的感受：I'm confused。"],
 ["The students looked confused about the rule.","學生們對這條規定看起來很困惑。","be / look confused about + 事情。"],
 ["I'm confused about where we should meet.","我搞不清楚我們應該在哪裡碰面。","間接問句 where + 主詞 we + should meet，放在介系詞 about 後面。"]],null,null,"😕|感到困惑的"],
["disappointing","adj.","令人失望的",[
 ["The movie was disappointing.","那部電影令人失望。","-ing 形容「事情」：電影讓人失望。"],
 ["Losing the game was disappointing.","輸掉比賽真令人失望。","動名詞 Losing the game 當主詞，看成單數，用 was。"],
 ["The disappointing news made her cry.","那個令人失望的消息讓她哭了。","make + 人 + 原形動詞 cry。"]],null,null,"👎|令人失望的"],
["disappointed","adj.","感到失望的",[
 ["I was disappointed with my test score.","我對我的考試分數很失望。","-ed 形容「人」。be disappointed with / in + 事情。"],
 ["Dad was disappointed that I lied to him.","爸爸對我騙他感到失望。","be disappointed that + 子句。"],
 ["Don't be disappointed. You can try again.","別失望，你可以再試一次。","否定祈使句：Don't be + 形容詞。"]],null,null,"😞|感到失望的"],
["embarrassing","adj.","令人尷尬的",[
 ["Falling down on the stage was so embarrassing.","在台上跌倒真是太丟臉了。","動名詞當主詞，看成單數。-ing 形容「事情」令人尷尬。"],
 ["That was the most embarrassing day of my life.","那是我這輩子最尷尬的一天。","最高級：the most + 長的形容詞。"],
 ["He asked me an embarrassing question.","他問了我一個令人尷尬的問題。","embarrassing 是母音開頭，前面用 an。"]],null,null,"🙈|令人尷尬的"],
["embarrassed","adj.","感到尷尬的",[
 ["I felt embarrassed when I called her by the wrong name.","我叫錯她名字的時候覺得好尷尬。","feel + 形容詞。-ed 形容「人」的感受。"],
 ["She was embarrassed about her singing.","她對自己的歌聲感到難為情。","be embarrassed about + 事情。"],
 ["Don't feel embarrassed. Everyone makes mistakes.","不要覺得不好意思，每個人都會犯錯。","Everyone 看成單數，make 要加 s。"]],null,null,"😳|感到尷尬的"],
["shocking","adj.","令人震驚的",[
 ["The news about the fire was shocking.","那則火災的消息令人震驚。","-ing 形容「事情」：消息令人震驚。"],
 ["It's shocking that so many trees were cut down.","那麼多樹被砍掉，真令人震驚。","that 子句裡用被動：were cut down。"],
 ["We saw a shocking video online.","我們在網路上看到一段令人震驚的影片。","shocking 放在名詞 video 前面。"]],null,null,"⚡|令人震驚的"],
["shocked","adj.","感到震驚的",[
 ["Everyone was shocked by the news.","每個人都被這個消息嚇到了。","Everyone 看成單數，用 was。-ed 形容「人」。"],
 ["I was shocked to see the price.","我看到價錢嚇了一大跳。","be shocked to + 原形動詞，表示「看到／聽到……而震驚」。"],
 ["She looked shocked when she heard the story.","她聽到這個故事時一臉震驚。","look + 形容詞 shocked。"]],null,null,"😱|感到震驚的"],
["touching","adj.","感人的",[
 ["The movie was so touching that I cried.","這部電影太感人了，我都哭了。","so + 形容詞 + that 子句。-ing 形容「事情」。"],
 ["He told us a touching story about his dog.","他跟我們說了一個關於他的狗的感人故事。","touching 放在名詞 story 前面。"],
 ["The song was written for his mother. It's very touching.","這首歌是寫給他媽媽的，非常感人。","被動語態：was written for + 人。"]],null,null,"🥹|感人的"],
["annoying","adj.","惱人的；煩人的",[
 ["The noise from the street is annoying.","街上的噪音很吵人。","-ing 形容「事情」：噪音讓人心煩。"],
 ["My little brother can be really annoying.","我弟弟有時候真的很煩人。","人也可以用 -ing：表示「他讓別人覺得煩」。"],
 ["It's annoying to wait for the bus in the rain.","在雨中等公車很煩。","It is + 形容詞 + to V。"]],null,null,"😤|惱人的"],
["annoyed","adj.","感到惱怒的；不耐煩的",[
 ["I was annoyed because he was late again.","他又遲到了，我很不高興。","-ed 形容「人」的感受。"],
 ["Mom gets annoyed when I don't clean my room.","我不整理房間的時候，媽媽會很不高興。","get + 形容詞，表示「變得……」。"],
 ["Are you annoyed with me?","你在生我的氣嗎？","be annoyed with + 人，表示「對某人不高興」。"]],null,null,"😒|感到惱怒的"],
["frightening","adj.","令人害怕的",[
 ["The ghost story was frightening.","那個鬼故事很可怕。","-ing 形容「事情」：故事令人害怕。"],
 ["The earthquake last night was really frightening.","昨晚的地震真的很嚇人。","主詞是事情 The earthquake，用 -ing。"],
 ["It was frightening to walk alone in the dark.","一個人在黑暗中走路很可怕。","It was + 形容詞 + to V。"]],null,null,"👻|令人害怕的"],
["frightened","adj.","感到害怕的",[
 ["The little girl was frightened of the big dog.","那個小女孩很怕那隻大狗。","be frightened of + 東西，表示「害怕……」。"],
 ["I was frightened by the loud thunder.","我被很大的雷聲嚇到了。","-ed 形容「人」，by 接讓人害怕的原因。"],
 ["Don't be frightened. It's only a cat.","別怕，那只是一隻貓。","Don't be + 形容詞。"]],null,null,"😨|感到害怕的"],
["satisfied","adj.","感到滿意的",[
 ["Are you satisfied with your new phone?","你對你的新手機滿意嗎？","be satisfied with + 東西，表示「對……滿意」。"],
 ["The customers were satisfied with the service.","顧客們對服務很滿意。","主詞是人 customers，用 -ed。"],
 ["The teacher looked satisfied with our work.","老師看起來對我們的作品很滿意。","look + 形容詞 satisfied。"]],null,null,"😌|感到滿意的"],
["exhausted","adj.","精疲力盡的",[
 ["I was exhausted after the long race.","跑完長距離賽跑後，我累壞了。","exhausted 比 tired 更累，表示「累到不行」。"],
 ["The workers looked exhausted.","工人們看起來精疲力盡。","look + 形容詞 exhausted。"],
 ["After the trip, everyone was exhausted but happy.","旅行結束後，大家都累壞了，但很開心。","everyone 看成單數，用 was。"]],null,null,"🥵|精疲力盡的"],
["relaxing","adj.","令人放鬆的",[
 ["Listening to music is relaxing.","聽音樂讓人很放鬆。","動名詞 Listening to music 當主詞，看成單數。-ing 形容「事情」。"],
 ["We had a relaxing weekend at the beach.","我們在海邊度過了一個輕鬆的週末。","relaxing 放在名詞 weekend 前面。"],
 ["The bath was relaxing, and I felt relaxed.","泡澡很放鬆，我覺得很舒服。","比一比：事情用 relaxing，人的感受用 relaxed。"]],null,null,"🛀|令人放鬆的"],
/* ---------- 字尾 -ment ／ -ness ---------- */
["movement","n.","動作；（社會）運動",[
 ["Every movement of the dancer was beautiful.","那位舞者的每一個動作都很美。","move + ment，變成名詞「動作」。Every + 單數名詞，用 was。"],
 ["The movement was started by a group of students.","這個運動是由一群學生發起的。","被動語態：was started by。"],
 ["Slow movements can help you relax.","緩慢的動作可以幫助你放鬆。","help + 人 + 原形動詞 relax。"]],null,null,"🤸|動作"],
["payment","n.","付款；支付",[
 ["Payment must be made before Friday.","款項必須在星期五前付清。","must be + p.p.。make a payment 是「付款」，被動是 payment is made。"],
 ["Do you know how the payment can be made?","你知道要怎麼付款嗎？","間接問句：how + 主詞 the payment + can be made。"],
 ["We only accept cash payments.","我們只收現金付款。","pay + ment，變成名詞「付款」。"]],null,null,"💳|付款"],
["agreement","n.","協議；同意",[
 ["An agreement was signed by the two companies.","兩家公司簽了一份協議。","被動語態：was signed by。"],
 ["We finally came to an agreement.","我們終於達成了共識。","come to an agreement 是「達成協議」。"],
 ["The agreement will be signed next week.","協議下星期會簽訂。","未來式被動：will be + p.p.。agree + ment，e 要保留。"]],null,null,"🤝|協議"],
["excitement","n.","興奮；刺激",[
 ["The kids shouted with excitement.","孩子們興奮地大叫。","with excitement 是「興奮地」。excite + ment，e 保留。"],
 ["I couldn't sleep because of the excitement.","因為太興奮，我睡不著。","because of + 名詞 the excitement。"],
 ["The excitement of the game made everyone excited.","比賽的刺激讓每個人都很興奮。","比一比：名詞 excitement、形容人的 excited。"]],null,null,"🎉|興奮"],
["achievement","n.","成就；成績",[
 ["Winning the prize was a great achievement.","得獎是很了不起的成就。","動名詞 Winning the prize 當主詞。achieve + ment。"],
 ["His achievements were reported in the newspaper.","他的成就被登在報紙上。","被動語態：were reported。主詞是複數，用 were。"],
 ["We should be proud of our achievements.","我們應該為自己的成就感到驕傲。","be proud of + 名詞。"]],null,null,"🏅|成就"],
["equipment","n.","設備；器材",[
 ["The new equipment was bought last month.","新設備是上個月買的。","equipment 是不可數名詞，用 was，不能加 s。"],
 ["All the sports equipment must be put away after class.","下課後所有運動器材都必須收好。","must be + p.p.。put 的 p.p. 還是 put。"],
 ["This equipment should be checked every year.","這個設備應該每年檢查。","should be + p.p.。"]]],
["government","n.","政府",[
 ["The new park was built by the government.","新公園是政府蓋的。","被動語態：was built by + 做事的單位。"],
 ["The government has decided to build a new MRT line.","政府已經決定要蓋一條新的捷運線。","現在完成式：has + p.p.。decide to + 原形動詞。"],
 ["Do you know when the new law will be passed?","你知道新法律什麼時候會通過嗎？","間接問句裡用未來式被動：when + 主詞 + will be + p.p.。"]],null,null,"🏛️|政府"],
["happiness","n.","幸福；快樂",[
 ["Money can't buy happiness.","錢買不到快樂。","happy 把 y 改成 i，再加 ness。"],
 ["Happiness can be found in small things.","幸福可以在小事情裡找到。","can be + p.p.。find 的 p.p. 是 found。"],
 ["Her face was full of happiness.","她臉上充滿了幸福。","be full of + 名詞，表示「充滿……」。"]],null,null,"😊|幸福"],
["kindness","n.","仁慈；好心",[
 ["Thank you for your kindness.","謝謝你的好意。","Thank you for + 名詞。kind + ness。"],
 ["Her kindness was remembered by everyone.","大家都記得她的好心。","被動語態：was remembered by。"],
 ["A little kindness can make a big difference.","一點點善意就能帶來很大的改變。","can + 原形動詞 make。"]],null,null,"💗|仁慈"],
["sadness","n.","悲傷",[
 ["He couldn't hide his sadness.","他藏不住他的悲傷。","couldn't + 原形動詞 hide。sad + ness。"],
 ["The sadness in the song made me cry.","這首歌裡的悲傷讓我哭了。","make + 人 + 原形動詞 cry。"],
 ["Her sadness was caused by the bad news.","她的悲傷是那個壞消息造成的。","被動語態：was caused by + 原因。"]],null,null,"😢|悲傷"],
["illness","n.","疾病",[
 ["His illness was caused by bad food.","他的病是壞掉的食物造成的。","被動語態：was caused by。ill + ness。"],
 ["She missed school because of a serious illness.","她因為生了重病沒去上學。","because of + 名詞 a serious illness。"],
 ["This illness can be cured.","這種病是可以治好的。","can be + p.p.。cure 的 p.p. 是 cured。"]],null,null,"🤒|疾病"],
["darkness","n.","黑暗",[
 ["The town was in darkness after the typhoon.","颱風過後，整個鎮一片漆黑。","in darkness 是「在黑暗中」。dark + ness。"],
 ["Many kids are frightened of darkness.","很多小孩怕黑。","be frightened of + 名詞。"],
 ["Nothing could be seen in the darkness.","黑暗中什麼都看不見。","could be + p.p.。see 的 p.p. 是 seen。"]]]
];

const J3_1_1_GRAMMAR = [
{ id:"g1", title:"被動語態（一）：現在式和過去式 be + p.p.",
  intro:"當我們想強調「東西被怎麼了」，而不是「誰做了這件事」，就用被動語態。公式是 be 動詞 + 過去分詞（p.p.）。現在式用 am / is / are + p.p.，過去式用 was / were + p.p.。做動作的人要說出來時，放在 by 後面。",
  table:[["時態","公式","例子"],["主動（過去式）","主詞 + 動詞過去式 + 受詞","Edison invented the light bulb."],["被動（過去式）","主詞 + was / were + p.p. (+ by + 人)","The light bulb was invented by Edison."],["被動（現在式）","主詞 + am / is / are + p.p.","These bikes are made in Taiwan."],["否定句","be 動詞 + not + p.p.","The window wasn't broken by Tom."],["疑問句","Be 動詞 + 主詞 + p.p.?","Was the bridge built in 1990?"],["wh 疑問句","疑問詞 + be 動詞 + 主詞 + p.p.?","When was paper invented?"]],
  points:[
   "主動改被動三步驟：受詞搬到前面當主詞 → 動詞改成 be + p.p.（時態跟原句一樣）→ 原來的主詞放到 by 後面。Tom broke the window. → The window was broken by Tom.",
   "be 動詞要跟「新的主詞」一致：The cake was made… / The cakes were made…。主詞是 news、equipment、money 這種不可數名詞，用 is / was。",
   "by + 人要用受格：by him、by them，不能說 by he、by they。",
   "by 什麼時候省略？做動作的人不知道（someone）、不重要，或大家都知道（people、they 泛指一般人）時，by 片語可以省略：My bike was stolen.（不知道誰偷的）／English is spoken in many countries.（by people 不用說）。",
   "不規則動詞的 p.p. 一定要背熟：make - made、build - built、write - written、steal - stolen、hold - held、speak - spoken、break - broken。常考陷阱：was wrote ✗ → was written ✓。",
   "常考陷阱：happen、die、arrive、appear 這種「不及物動詞」後面沒有受詞，不能變被動！The accident happened yesterday. ✓／The accident was happened. ✗"],
  ex:[
   ["The bridge was built in 1990.","這座橋是在 1990 年蓋的。","過去式被動：was + built。不知道是誰蓋的，所以省略 by。"],
   ["English is spoken in many countries.","很多國家都說英語。","現在式被動：is + spoken。by people 大家都知道，省略。"],
   ["The window was broken by Tom and his friends.","窗戶是湯姆和他朋友打破的。","主詞 The window 是單數，用 was。by 後面接做動作的人。"],
   ["These shoes weren't made in Taiwan.","這些鞋子不是台灣製造的。","否定句：were + not + p.p.。主詞 shoes 是複數，用 were。"],
   ["When was the telephone invented?","電話是什麼時候發明的？","wh 疑問句：When + was + 主詞 + p.p.?"]]},
{ id:"g2", title:"被動語態（二）：未來式、助動詞、現在完成式",
  intro:"被動語態的核心永遠是 be + p.p.，換時態時只要把 be 換成適當的樣子就好：未來式用 will be + p.p.，助動詞 can / must / should 用「助動詞 + be + p.p.」，現在完成式用 has / have been + p.p.。",
  table:[["時態","被動公式","例子"],["未來式","will be + p.p.","The winner will be announced tomorrow."],["未來式","am / is / are going to be + p.p.","A new library is going to be built."],["助動詞","can / must / should + be + p.p.","Old bottles can be recycled."],["現在完成式","has / have + been + p.p.","The package has been delivered."],["否定","won't be / can't be / hasn't been + p.p.","The problem can't be solved."],["疑問","Will / Can / Has + 主詞 + (be / been) + p.p.?","Has the work been finished?"]],
  points:[
   "助動詞後面一定接原形 be：will be、can be、must be、should be。常考陷阱：will is ✗、must are ✗、can been ✗。",
   "be 後面要接 p.p.，不能接原形：will be build ✗ → will be built ✓；should be clean ✗ → should be cleaned ✓。",
   "現在完成式被動是 have / has + been + p.p.，been 不能漏，也不能寫成 being：The work has finished ✗（意思變成工作自己完成）→ The work has been finished ✓。",
   "has 和 have 看新的主詞：The record has been broken.／Ten people have been rescued.",
   "否定句把 not 放在第一個助動詞後面：won't be、can't be、shouldn't be、hasn't been。疑問句把第一個助動詞搬到最前面：Will it be…? Can it be…? Has it been…?",
   "主動改被動時，時態要保持不變：They will build a park. → A park will be built.；We must finish it. → It must be finished."],
  ex:[
   ["The test results will be announced next Monday.","考試結果下星期一會公布。","未來式被動：will be + announced。"],
   ["Plastic bottles can be recycled.","塑膠瓶可以被回收。","助動詞被動：can be + p.p.。"],
   ["Your homework must be handed in before Friday.","你的作業必須在星期五以前交。","must be + p.p.。hand in 是「繳交」。"],
   ["The light bulb in the hallway has been changed.","走廊的燈泡已經換好了。","現在完成式被動：has been + p.p.。"],
   ["The park won't be opened until next year.","這座公園要到明年才會開放。","否定：won't be + p.p.。not…until 是「直到……才」。"]]},
{ id:"g3", title:"分詞形容詞：-ing 和 -ed（exciting／excited）",
  intro:"很多表達情緒的形容詞都有兩個樣子：-ing 和 -ed。簡單記：-ing 是「令人……的」，形容帶來這種感覺的人事物；-ed 是「感到……的」，形容心裡有這種感覺的人。The movie is boring. 電影很無聊（讓人覺得無聊）；I am bored. 我覺得很無聊。",
  table:[["-ing（令人……的）","-ed（感到……的）","例子"],["exciting","excited","The game was exciting. We were excited."],["boring","bored","The class is boring, so I'm bored."],["interesting","interested","The book is interesting. I'm interested in it."],["surprising","surprised","The news was surprising. I was surprised."],["amazing","amazed","The show was amazing. We were amazed."],["disappointing","disappointed","The result was disappointing. He was disappointed."],["confusing","confused","The rule is confusing. I'm confused."]],
  points:[
   "東西、事情當主詞，幾乎都用 -ing：The movie is exciting.，不能說 The movie is excited（電影不會興奮）。",
   "人當主詞要看意思：感到……用 -ed（I'm bored. 我覺得無聊）；讓別人覺得……用 -ing（He is boring. 他是個無聊的人）。常考陷阱：I'm boring. 是「我很無趣」，不是「我覺得無聊」！",
   "-ed 形容詞常搭配固定介系詞：interested in、excited about、surprised at / by、amazed at / by、disappointed with / in、satisfied with、frightened of、tired of、confused about。",
   "-ing 形容詞可以放在名詞前面：an exciting game、a touching story、a confusing question。",
   "make + 人 + -ed：The news made me surprised.（人的感覺用 -ed）；find + 事情 + -ing：I found the book interesting.",
   "-ed 形容詞長得和被動語態很像：I was surprised by the news. 可以看成「我被消息嚇到」，主詞是被影響的人，所以用 -ed。"],
  ex:[
   ["The soccer game was exciting, and all the fans were excited.","足球賽很刺激，所有球迷都很興奮。","比賽（事情）用 exciting；球迷（人）用 excited。"],
   ["I'm interested in science because it's interesting.","我對科學有興趣，因為它很有趣。","人 + be interested in；事情 + is interesting。"],
   ["We were disappointed with the ending of the movie.","我們對電影的結局很失望。","人 + be disappointed with + 事情。"],
   ["The math question was confusing, so many students were confused.","這題數學很難懂，所以很多學生搞不清楚。","問題（事情）用 -ing；學生（人）用 -ed。"],
   ["He told us a touching story, and we were all moved.","他跟我們說了一個感人的故事，我們都很感動。","touching 形容故事；moved 形容人被感動。"]]},
{ id:"g4", title:"間接問句：Do you know where he lives?",
  intro:"把一個 wh 問句放進另一個句子裡，就變成「間接問句」，常放在 Do you know…?、Can you tell me…?、I don't know…、I wonder… 後面。最重要的規則：間接問句要用「疑問詞 + 主詞 + 動詞」的直述句語順，不能再用問句的語順！",
  table:[["直接問句","間接問句","規則"],["Where does he live?","Do you know where he lives?","拿掉 does，動詞還原成 lives"],["When did the movie start?","I don't know when the movie started.","拿掉 did，動詞改過去式 started"],["Where is the station?","Can you tell me where the station is?","be 動詞搬到主詞後面"],["What can I do?","I don't know what I can do.","助動詞搬到主詞後面"],["When was paper invented?","Do you know when paper was invented?","被動也一樣：主詞 + was + p.p."],["Who broke the window?","Do you know who broke the window?","疑問詞是主詞，語順不變"]],
  points:[
   "語順口訣：疑問詞 + 主詞 + 動詞。Do you know where is he? ✗ → Do you know where he is? ✓",
   "原句有 do / does / did 時，要把它拿掉，並把時態放回動詞上：does → 動詞加 s；did → 動詞改過去式。I don't know where does she live. ✗ → I don't know where she lives. ✓",
   "原句有 be 動詞、can、will、should 時，把它們搬到主詞後面：What time is it? → Do you know what time it is?",
   "疑問詞本身就是主詞（Who / What + 動詞）時，語順不用變：Who took my pen? → I want to know who took my pen.",
   "句尾標點看「大句子」：Do you know…? / Can you tell me…? 用問號；I don't know… / I wonder… 用句點。",
   "常考陷阱：問句開頭的 Do you know 不影響後面的時態，間接問句的時態要看事情本身：Do you know when he came? (did he come → he came)。"],
  ex:[
   ["Do you know where Amy lives?","你知道艾美住在哪裡嗎？","Where does Amy live? → where Amy lives，does 拿掉，live 加 s。"],
   ["Can you tell me how much this bag is?","你可以告訴我這個包包多少錢嗎？","How much is this bag? → how much this bag is，is 搬到最後。"],
   ["I don't know when the light bulb was invented.","我不知道電燈泡是什麼時候發明的。","被動問句也一樣：when + 主詞 + was invented。大句子是直述句，用句點。"],
   ["Do you know what he bought yesterday?","你知道他昨天買了什麼嗎？","What did he buy? → what he bought，did 拿掉，buy 改過去式 bought。"],
   ["I wonder who wrote this touching song.","我很好奇這首感人的歌是誰寫的。","who 是主詞，語順不變：who wrote。"]]}
];

/* 文法測驗：[題目, [選項 x4], 正確答案索引, 解析, 文法編號] */
const J3_1_1_QUIZ = [
 ["This T-shirt ___ in Vietnam.",["makes","is made","is making","made"],1,"T 恤是「被製造」的，用被動語態 is + p.p.：is made。","g1"],
 ["The light bulb ___ by Edison.",["was invented","invented","is inventing","were invented"],0,"燈泡是被發明的，而且是過去的事，用 was + p.p.。主詞是單數，不用 were。","g1"],
 ["These books ___ by a famous writer last year.",["was written","wrote","were written","were wrote"],2,"主詞 These books 是複數，過去式被動用 were + p.p.。write 的 p.p. 是 written。","g1"],
 ["My bike was stolen last night. 為什麼這句沒有 by 片語？",["因為偷車的人不知道是誰","因為 steal 不能用被動","因為主詞是複數","因為句子是現在式"],0,"不知道是誰偷的，by someone 沒有意義，所以省略。","g1"],
 ["Chinese ___ in Taiwan, Singapore, and China.",["speaks","spoke","is speaking","is spoken"],3,"語言是「被說」的，用 is + p.p.：is spoken。by people 是泛指，省略。","g1"],
 ["The accident ___ near my school yesterday.",["was happened","happened","is happened","were happened"],1,"happen 是不及物動詞，不能用被動，直接用過去式 happened。","g1"],
 ["Tom broke the window. = The window ___ by Tom.",["was broken","broke","is broken","was broke"],0,"主動改被動：時態保持過去式，用 was + p.p.。break 的 p.p. 是 broken，不是 broke。","g1"],
 ["___ the bridge built in 1990?",["Did","Is","Was","Does"],2,"過去式被動的疑問句：Was + 主詞 + p.p.?","g1"],
 ["The cake was made by ___.",["she","her","hers","herself"],1,"by 後面要用受格：by her。","g1"],
 ["The winner ___ tomorrow.",["will announce","announced","will be announced","is announced"],2,"tomorrow 是未來，得獎者是「被宣布」的，用 will be + p.p.。","g2"],
 ["Old newspapers can ___.",["be recycled","recycled","recycle","been recycled"],0,"助動詞 can 後面接原形 be，再接 p.p.：can be recycled。","g2"],
 ["The package ___ already ___. You can open it now.",["has / delivered","was / deliver","is / delivering","has / been delivered"],3,"already 搭配現在完成式，包裹是被送的，用 has been + p.p.。","g2"],
 ["Your homework must ___ before Friday.",["is finished","be finished","finish","be finish"],1,"must + be + p.p.。助動詞後面用原形 be，be 後面用 p.p.。","g2"],
 ["A new library ___ next year.",["will build","is built","will be built","has built"],2,"next year 是未來，圖書館是被蓋的，用 will be + p.p.。build 的 p.p. 是 built。","g2"],
 ["Ten people ___ by the firefighters so far.",["have been rescued","has been rescued","have rescued","were rescue"],0,"so far 搭配現在完成式。主詞 people 是複數，用 have been + p.p.。","g2"],
 ["The rules should ___ by everyone.",["follow","be followed","are followed","be follow"],1,"should + be + p.p.：規則應該被大家遵守。","g2"],
 ["They will hold the party in the park. = The party ___ in the park.",["will held","is held","will be holding","will be held"],3,"主動改被動，時態仍是未來式：will be + p.p.。hold 的 p.p. 是 held。","g2"],
 ["哪一句是正確的？",["The record has broken.","The record has been broken.","The record has be broken.","The record have been broken."],1,"紀錄是被打破的，現在完成式被動是 has been + p.p.。主詞是單數用 has。","g2"],
 ["The movie was so ___ that I fell asleep.",["bored","boring","interested","excited"],1,"電影是「事情」，令人覺得無聊用 -ing：boring。","g3"],
 ["We were ___ when we heard the good news.",["exciting","excite","excited","excitement"],2,"主詞 We 是人，感到興奮用 -ed：excited。","g3"],
 ["Are you ___ in Taiwanese history?",["interesting","interest","interests","interested"],3,"人 + be interested in，表示「對……有興趣」。","g3"],
 ["The test was very ___. Many students didn't understand the questions.",["confusing","confused","confuse","confusion"],0,"考試是事情，令人困惑用 -ing：confusing。","g3"],
 ["I was ___ with my test score. I only got 50.",["disappointing","disappointed","disappoint","disappoints"],1,"人感到失望用 -ed，搭配 with：disappointed with。","g3"],
 ["The little boy was ___ of the dark.",["frightening","frightened","fright","frightens"],1,"人感到害怕用 -ed，搭配 of：frightened of。","g3"],
 ["Lisa: I have nothing to do. I'm so ___. Ben: Let's play a game!",["boring","bores","bore","bored"],3,"Lisa 沒事做「覺得無聊」，用 bored。說 I'm boring 意思會變成「我是個無趣的人」。","g3"],
 ["The magic show was ___. Everyone was ___.",["amazing / amazed","amazed / amazing","amazing / amazing","amazed / amazed"],0,"表演（事情）用 amazing；大家（人）用 amazed。","g3"],
 ["哪一句是正確的？",["The trip was tired.","I was interesting in the story.","The news made me surprised.","The game was excited."],2,"make + 人 + -ed：made me surprised。旅行應該是 tiring，人應該是 interested，比賽應該是 exciting。","g3"],
 ["Do you know where ___?",["does he live","he lives","he live","lives he"],1,"間接問句用直述句語順：where + 主詞 + 動詞。does 拿掉，live 加 s。","g4"],
 ["Can you tell me where ___?",["the station is","is the station","the station","does the station"],0,"間接問句：where + 主詞 the station + is，be 動詞放在主詞後面。","g4"],
 ["I don't know when ___.",["did the movie start","does the movie start","the movie started","the movie start"],2,"When did the movie start? 變成間接問句要拿掉 did，start 改成過去式 started。","g4"],
 ["Do you know ___ the light bulb?",["who invents","who did invent","who invented","who was invented"],2,"Who 是做發明的人（主詞），語順不變，過去的事用 invented。用 was invented 會變成「誰被發明」，意思不對。","g4"],
 ["I wonder what ___ for dinner tonight.",["will we eat","we will eat","do we eat","we eats"],1,"助動詞 will 要放在主詞後面：what we will eat。","g4"],
 ["Do you know when paper ___?",["was invented","invented","did invent","was it invented"],0,"間接問句裡的被動：when + 主詞 paper + was invented。","g4"],
 ["How old is your sister? → Can you tell me ___?",["how old is your sister","how your sister is old","how old your sister","how old your sister is"],3,"how old 要放在一起，再接主詞 your sister + is。","g4"],
 ["哪一句是正確的？",["I don't know where does Amy live.","I don't know where Amy lives?","I don't know where Amy lives.","I don't know where lives Amy."],2,"語順要用 where + Amy + lives；大句子 I don't know 是直述句，句尾用句點。","g4"],
 ["What did he buy? → Do you know ___?",["what did he buy","what he bought","what he buys","what bought he"],1,"拿掉 did，buy 改成過去式 bought：what he bought。","g4"]
];

/* =========================================================
   上課模式腳本（安安老師）
   say：老師講的話，{ } 裡面用英文語音唸
   board：黑板內容 [英文, [要標亮的字], 是否為錯誤示範]
   chant：口訣
   ask：隨堂提問，答錯會有針對性的回饋，再給一題 again 練習
   ========================================================= */
const J3_1_1_CLASS = {
g1:[
 {say:"國三的同學好！安安老師先考你：你身上的衣服是誰做的？你可能不知道，可是你一定知道它是在哪裡做的。英文會說 {This shirt was made in Taiwan.} 這就是今天的主角：被動語態！", board:[["This shirt was made in Taiwan.",["was made"]]]},
 {say:"先比一比主動和被動。主動：{Edison invented the light bulb.} 愛迪生發明了燈泡，重點是愛迪生。被動：{The light bulb was invented by Edison.} 燈泡被愛迪生發明，重點變成燈泡。", board:[["Edison invented the light bulb.",["invented"]],["The light bulb was invented by Edison.",["was invented","by"]]]},
 {say:"被動語態的公式只有一個：be 動詞 + 過去分詞，也就是 {p.p.}。現在式用 am、is、are；過去式用 was、were。", board:[["現在式：am / is / are + p.p.",["am","is","are"]],["過去式：was / were + p.p.",["was","were"]]]},
 {say:"口訣唸起來！", chant:"被動語態 be 加 p.p.，東西被做，主角換人當！"},
 {ask:{say:"換你試試！", q:"These shoes ___ in Taiwan.", opts:["make","are made","is made"], ans:1,
   ok:"答對了！鞋子是被製造的，主詞 shoes 是複數，用 are made。",
   bad:{0:"鞋子不會自己做東西，要用被動 be + p.p.：are made。",2:"主詞 These shoes 是複數，be 動詞要用 are。"},
   again:{q:"This cake ___ by my mom yesterday.", opts:["was made","made","were made"], ans:0, exp:"yesterday 是過去，主詞是單數，用 was + p.p.。"}}},
 {say:"主動改被動有三個步驟：第一，受詞搬到前面當主詞；第二，動詞改成 be + p.p.，時態不能變；第三，原來的主詞放到 by 後面，而且要用受格。", board:[["Tom broke the window.",["Tom","broke","the window"]],["The window was broken by Tom.",["The window","was broken","by Tom"]]]},
 {say:"注意 by 後面要用受格！{He wrote the song.} 變成 {The song was written by him.}，不能說 by he。", board:[["The song was written by him.",["by him"]],["The song was written by he.",[],true]]},
 {ask:{q:"They built the temple in 1800. = The temple ___ in 1800.", opts:["is built","was built","was build"], ans:1,
   ok:"很棒！原句是過去式，被動也要用過去式 was + p.p.，build 的 p.p. 是 built。",
   bad:{0:"原句 built 是過去式，被動也要用過去式 was。",2:"be 後面要接 p.p.，build 的 p.p. 是 built。"},
   again:{q:"She wrote the letter. = The letter ___ by her.", opts:["was wrote","was written","written"], ans:1, exp:"write 的 p.p. 是 written，前面要有 was。"}}},
 {say:"什麼時候可以不寫 by？三種情況：不知道是誰做的、不重要、或大家都知道。{My bike was stolen.} 不知道小偷是誰；{English is spoken in many countries.} by people 不用說。", board:[["My bike was stolen.",["was stolen"]],["English is spoken in many countries.",["is spoken"]]]},
 {say:"否定句和疑問句也很簡單，就像一般的 be 動詞句：not 放在 be 後面；問句把 be 搬到最前面。{The bridge wasn't built in 1990.} {When was the telephone invented?}", board:[["The bridge wasn't built in 1990.",["wasn't built"]],["Was the bridge built in 1990?",["Was","built"]],["When was the telephone invented?",["was","invented"]]]},
 {ask:{q:"___ the telephone invented by Bell?", opts:["Did","Was","Is"], ans:1,
   ok:"正確！過去式被動的問句：Was + 主詞 + p.p.?",
   bad:{0:"被動語態用 be 動詞，不用 Did。",2:"電話是過去發明的，要用過去式 Was。"},
   again:{q:"When ___ this temple built?", opts:["did","was","is"], ans:1, exp:"When + was + 主詞 + p.p.?"}}},
 {say:"最後一個大陷阱！happen、die、arrive 這種動詞後面不能接受詞，叫做「不及物動詞」，它們不能變被動！{The accident happened last night.} 對；was happened 錯！", board:[["The accident happened last night.",["happened"]],["The accident was happened last night.",[],true]]},
 {ask:{say:"最後一題！", q:"哪一句是正確的？", opts:["The accident was happened yesterday.","The story was wrote by Ken.","Paper was invented in China."], ans:2,
   ok:"完美！紙是被發明的，was + invented。",
   bad:{0:"happen 是不及物動詞，不能用被動，要說 The accident happened yesterday.",1:"write 的 p.p. 是 written：was written by Ken。"},
   again:{q:"哪一句是正確的？", opts:["My wallet was stolen.","My wallet was stole.","My wallet stolen."], ans:0, exp:"steal - stole - stolen，被動是 was stolen。"}}},
 {say:"被動語態第一課過關！複習：be + p.p.，現在式 am / is / are，過去式 was / were；by 後面用受格，不知道或不重要就省略；happen 不能變被動。下一課要把被動語態變成未來式和完成式！", end:true}
],
g2:[
 {say:"同學好！上一課學了被動語態的現在式和過去式。今天要變魔術：不管什麼時態，被動語態的核心都是 {be + p.p.}，只要把 be 換成適當的樣子就好！", board:[["be + p.p.",["be","p.p."]]]},
 {say:"第一個：未來式。will 後面接原形動詞，所以 be 保持原形：{will be + p.p.} {The winner will be announced tomorrow.}", board:[["will be + p.p.",["will be"]],["The winner will be announced tomorrow.",["will be announced"]]]},
 {say:"也可以用 be going to：{A new library is going to be built.} 一樣是 be + p.p.，只是前面多了 is going to。", board:[["A new library is going to be built.",["is going to be built"]]]},
 {ask:{say:"換你試試！", q:"The party ___ next Friday.", opts:["will hold","will be held","will be hold"], ans:1,
   ok:"答對了！派對是被舉辦的，未來式被動 will be + p.p.，hold 的 p.p. 是 held。",
   bad:{0:"派對不會自己舉辦東西，要用被動 will be held。",2:"be 後面要接 p.p.，hold 的 p.p. 是 held。"},
   again:{q:"The new bridge ___ next year.", opts:["will be built","will built","will is built"], ans:0, exp:"will + be + p.p.，be 用原形。"}}},
 {say:"第二個：助動詞 can、must、should。它們和 will 一樣，後面一定接原形 be，再接 p.p.。{Old bottles can be recycled.} {The rules must be followed.}", board:[["can / must / should + be + p.p.",["be"]],["Old bottles can be recycled.",["can be recycled"]],["The rules must be followed.",["must be followed"]]]},
 {say:"口訣唸起來！", chant:"助動詞後 be 原形，be 的後面接 p.p.！"},
 {say:"常見的錯誤有兩種：忘了 be 用原形，寫成 must is；或是忘了 p.p.，寫成 should be clean。", board:[["The room must is cleaned.",[],true],["The room should be clean.（要說「被打掃」時）",[],true],["The room should be cleaned.",["should be cleaned"]]]},
 {ask:{q:"Your homework must ___ before Friday.", opts:["is finished","be finished","be finish"], ans:1,
   ok:"很棒！must + be + p.p.。",
   bad:{0:"助動詞 must 後面要接原形 be，不能用 is。",2:"be 後面要接 p.p.：finished。"},
   again:{q:"This illness can ___.", opts:["be cured","cured","is cured"], ans:0, exp:"can + be + p.p.。"}}},
 {say:"第三個：現在完成式。主動是 have / has + p.p.，被動就在中間加一個 {been}：{has / have been + p.p.} {The package has been delivered.}", board:[["has / have + been + p.p.",["been"]],["The package has been delivered.",["has been delivered"]]]},
 {say:"been 千萬不能漏掉！{The record has broken.} 意思變成紀錄自己打破東西了。要說 {The record has been broken.} 紀錄被打破了。has 和 have 看主詞：一個人用 has，很多人用 have。", board:[["The record has broken.",[],true],["The record has been broken.",["has been broken"]],["Ten people have been rescued.",["have been rescued"]]]},
 {ask:{q:"Ten people ___ by the firefighters so far.", opts:["has been rescued","have rescued","have been rescued"], ans:2,
   ok:"太好了！people 是複數用 have，被動要加 been：have been rescued。",
   bad:{0:"主詞 people 是複數，要用 have。",1:"人是被救的，要加 been：have been rescued。"},
   again:{q:"The light bulb ___ already.", opts:["has been changed","has changed","have been changed"], ans:0, exp:"燈泡是被換的，主詞單數：has been changed。"}}},
 {say:"否定句和疑問句的秘訣：看「第一個」助動詞。否定把 not 放在它後面；疑問把它搬到最前面。", board:[["won't be / can't be / hasn't been + p.p.",["won't","can't","hasn't"]],["Will it be finished? Has it been sent?",["Will","Has"]]]},
 {ask:{say:"最後一題！", q:"哪一句是正確的？", opts:["The work will be finish soon.","Has the package been delivered?","The problem can't solved."], ans:1,
   ok:"完美！疑問句把 Has 搬到最前面：Has + 主詞 + been + p.p.?",
   bad:{0:"be 後面要接 p.p.：will be finished。",2:"can't 後面要加 be：can't be solved。"},
   again:{q:"哪一句是正確的？", opts:["The park won't be opened until May.","The park won't opened until May.","The park won't is opened until May."], ans:0, exp:"won't + be + p.p.。"}}},
 {say:"被動語態全部過關！總複習：未來式 will be + p.p.；助動詞 + be + p.p.；現在完成式 has / have been + p.p.。記住核心：不管怎麼變，都要有 be 和 p.p.！", end:true}
],
g3:[
 {say:"同學好！安安老師問你：「這部電影很無聊」和「我覺得很無聊」，英文都用 bore 這個字，可是一個是 {boring}，一個是 {bored}。你分得出來嗎？", board:[["The movie is boring.",["boring"]],["I am bored.",["bored"]]]},
 {say:"記住這個關鍵：{-ing} 是「令人……的」，形容「帶來這種感覺」的東西或人；{-ed} 是「感到……的」，形容「心裡有這種感覺」的人。", board:[["-ing：令人……的（給別人感覺）",["-ing"]],["-ed：感到……的（自己有感覺）",["-ed"]]]},
 {say:"口訣唸起來！", chant:"ing 給別人感覺，ed 是自己感覺！"},
 {say:"看一組：{The game was exciting.} 比賽很刺激，比賽讓人興奮；{We were excited.} 我們感到興奮。事情當主詞，幾乎都用 -ing！", board:[["The game was exciting.",["exciting"]],["We were excited.",["excited"]],["The game was excited.",[],true]]},
 {ask:{say:"換你選！", q:"The magic show was ___.", opts:["amazed","amazing","amaze"], ans:1,
   ok:"答對了！表演是事情，令人驚奇用 amazing。",
   bad:{0:"amazed 是人「感到驚奇」，表演不會自己感到驚奇。",2:"was 後面要接形容詞，amaze 是動詞。"},
   again:{q:"The movie was ___. I fell asleep.", opts:["boring","bored","bore"], ans:0, exp:"電影是事情，令人無聊用 boring。"}}},
 {say:"人當主詞的時候要小心！{I'm bored.} 是「我覺得無聊」；{I'm boring.} 卻是「我是一個無趣的人」！考試超愛考這個陷阱。", board:[["I'm bored. 我覺得無聊",["bored"]],["I'm boring. 我是個無趣的人",["boring"]]]},
 {ask:{q:"Ann has nothing to do. She says, I'm so ___.", opts:["boring","bored","bores"], ans:1,
   ok:"很棒！Ann 自己「覺得」無聊，用 bored。",
   bad:{0:"I'm boring 是說自己很無趣，不是覺得無聊。",2:"be 動詞後面要接形容詞 bored。"},
   again:{q:"Ken always talks about the same thing. He is ___.", opts:["bored","boring","bore"], ans:1, exp:"Ken 讓別人覺得無聊，用 boring。"}}},
 {say:"-ed 形容詞常常搭配固定的介系詞，一起背最划算！{interested in}、{excited about}、{surprised at}、{disappointed with}、{satisfied with}、{frightened of}。", board:[["interested in   excited about",["in","about"]],["surprised at   disappointed with",["at","with"]],["satisfied with   frightened of",["with","of"]]]},
 {ask:{q:"Are you interested ___ history?", opts:["in","of","with"], ans:0,
   ok:"正確！be interested in。",
   bad:{1:"interested 要搭配 in，frightened 才搭配 of。",2:"interested 要搭配 in，satisfied 才搭配 with。"},
   again:{q:"The girl is frightened ___ the big dog.", opts:["of","in","at"], ans:0, exp:"be frightened of，表示「害怕……」。"}}},
 {say:"你有沒有發現？-ed 形容詞長得很像被動語態！{I was surprised by the news.} 就是「我被消息嚇到」。人是被影響的那一個，所以用 -ed。", board:[["I was surprised by the news.",["was surprised","by"]]]},
 {say:"還有兩個常考句型：make + 人 + -ed，{The news made me surprised.}；find + 事情 + -ing，{I found the book interesting.}", board:[["The news made me surprised.",["surprised"]],["I found the book interesting.",["interesting"]]]},
 {ask:{say:"最後一題！", q:"哪一句是正確的？", opts:["The trip was tired.","I was disappointed with the result.","The question was confused."], ans:1,
   ok:"完美！人感到失望用 disappointed with。",
   bad:{0:"旅行是事情，要用 tiring：The trip was tiring.",2:"問題是事情，要用 confusing：The question was confusing."},
   again:{q:"哪一句是正確的？", opts:["The story was touching.","The story was touched.","I was touching by the story."], ans:0, exp:"故事是事情，感人用 touching。"}}},
 {say:"分詞形容詞過關！記住：ing 給別人感覺，ed 是自己感覺；事情幾乎都用 -ing；I'm bored 和 I'm boring 意思差很多；-ed 記得搭配對的介系詞。", end:true}
],
g4:[
 {say:"同學好！在路上問路，你可以直接問 {Where is the station?} 但是更有禮貌的說法是 {Can you tell me where the station is?} 你發現哪裡不一樣了嗎？", board:[["Where is the station?",["is the station"]],["Can you tell me where the station is?",["the station is"]]]},
 {say:"把問句放進另一個句子裡，就叫做「間接問句」。它常放在 {Do you know}、{Can you tell me}、{I don't know}、{I wonder} 後面。", board:[["Do you know …?   Can you tell me …?",["Do you know","Can you tell me"]],["I don't know …   I wonder …",["I don't know","I wonder"]]]},
 {say:"最重要的規則：間接問句要用直述句的語順，也就是「疑問詞 + 主詞 + 動詞」！", board:[["疑問詞 + 主詞 + 動詞",["主詞","動詞"]]]},
 {say:"口訣唸起來！", chant:"間接問句不用問，疑問詞後接主詞！"},
 {say:"第一種：原句有 be 動詞或 can、will，把它們搬到主詞後面。{What time is it?} 變成 {Do you know what time it is?}", board:[["What time is it?",["is it"]],["Do you know what time it is?",["it is"]],["Do you know what time is it?",[],true]]},
 {ask:{say:"換你試試！", q:"Can you tell me where ___?", opts:["is the bank","the bank is","does the bank"], ans:1,
   ok:"答對了！where + 主詞 the bank + is。",
   bad:{0:"這是問句的語順，間接問句要把 is 搬到主詞後面。",2:"原句沒有 does，而且要用直述句語順。"},
   again:{q:"I don't know what I ___ do.", opts:["can","can I","do I"], ans:0, exp:"What can I do? → what I can do，can 放在主詞後面。"}}},
 {say:"第二種：原句有 do、does、did，要把它們拿掉，時態放回動詞上。{Where does he live?} 變成 {where he lives}；{What did she buy?} 變成 {what she bought}。", board:[["Where does he live? → where he lives",["he lives"]],["What did she buy? → what she bought",["she bought"]]]},
 {ask:{q:"Do you know where Amy ___?", opts:["does live","live","lives"], ans:2,
   ok:"很棒！拿掉 does，主詞 Amy 是第三人稱單數，live 要加 s。",
   bad:{0:"does 要拿掉，時態放到動詞上：lives。",1:"拿掉 does 以後，第三人稱單數的動詞要加 s：lives。"},
   again:{q:"I don't know when the movie ___.", opts:["did start","started","start"], ans:1, exp:"When did the movie start? → when the movie started。"}}},
 {say:"第三種：疑問詞本身就是主詞，像 {Who broke the window?}，後面本來就是直述句語順，所以直接接上去就好：{Do you know who broke the window?}", board:[["Who broke the window?",["Who broke"]],["Do you know who broke the window?",["who broke"]]]},
 {say:"把今天的被動語態也放進來！{When was paper invented?} 變成 {Do you know when paper was invented?} 主詞 paper 先出現，再接 was invented。", board:[["When was paper invented?",["was paper"]],["Do you know when paper was invented?",["paper was invented"]]]},
 {ask:{q:"Do you know when the light bulb ___?", opts:["was invented","invented","did invent"], ans:0,
   ok:"正確！when + 主詞 the light bulb + was invented。",
   bad:{1:"燈泡是被發明的，要用被動 was invented。",2:"間接問句不用 did，而且燈泡是被發明的。"},
   again:{q:"I want to know who ___ this song.", opts:["did write","wrote","was written"], ans:1, exp:"Who 是主詞，語順不變：who wrote。"}}},
 {say:"最後是標點：句尾要用問號還是句點，看「大句子」。Do you know、Can you tell me 是問句，用問號；I don't know、I wonder 是直述句，用句點。", board:[["Do you know where he lives?",["?"]],["I don't know where he lives.",["."]]]},
 {ask:{say:"最後一題！", q:"哪一句是正確的？", opts:["Do you know where is the post office?","I wonder what he bought.","Can you tell me what time does it start?"], ans:1,
   ok:"完美！what + 主詞 he + bought，大句子是 I wonder，用句點。",
   bad:{0:"is 要搬到主詞後面：where the post office is。",2:"does 要拿掉：what time it starts。"},
   again:{q:"哪一句是正確的？", opts:["I don't know how old is he.","I don't know how old he is.","I don't know how he is old."], ans:1, exp:"how old 要放在一起，再接主詞 he + is。"}}},
 {say:"恭喜你！國三上學期第一次段考的文法全部上完了！最後複習：間接問句不用問，疑問詞後接主詞；do、does、did 拿掉，be 和助動詞搬到主詞後面。去文法測驗大顯身手吧！", end:true}
]};

Object.assign(PH, {
  produce:"pr:blend o:schwa d:c u:u_e c:soft_c e:silent_e", product:"pr:blend o:short_o d:c u:short_u c:c t:c",
  factory:"f:c a:short_a c:c t:c o:schwa r:c y:y_i", material:"m:c a:schwa t:c er:ere i:long_e a:schwa l:c",
  company:"c:c o:o_uh m:c p:c a:schwa n:c y:y_i", metal:"m:c e:short_e t:c a:schwa l:c",
  wood:"w:c oo:oo_s d:c", glass:"gl:blend a:short_a ss:double", paper:"p:c a:long_a p:c er:er",
  cotton:"c:c o:short_o tt:double o:schwa n:c", deliver:"d:c e:schwa l:c i:short_i v:c er:er",
  package:"p:c a:short_a ck:ck a:schwa g:soft_g e:silent_e", create:"cr:blend e:long_e a:a_e t:c e:silent_e",
  invent:"i:short_i n:c v:c e:short_e n:c t:c", inventor:"i:short_i n:c v:c e:short_e n:c t:c or:schwa_r",
  invention:"i:short_i n:c v:c e:short_e n:c tion:tion", discover:"d:c i:short_i s:c c:c o:o_uh v:c er:er",
  century:"c:soft_c e:short_e n:c t:exc u:schwa r:c y:y_i", ancient:"a:long_a n:c ci:exc e:schwa n:c t:c",
  wheel:"wh:wh ee:ee l:c", print:"pr:blend i:short_i n:c t:c",
  "light bulb":"l:c igh:igh t:c _:space b:c u:short_u l:c b:c", war:"w:c ar:exc",
  report:"r:c e:schwa p:c or:or t:c", event:"e:schwa v:c e:short_e n:c t:c",
  newspaper:"n:c ew:ew s:s_z p:c a:long_a p:c er:er", magazine:"m:c a:short_a g:c a:schwa z:c i:i_ee n:c e:silent",
  article:"ar:ar t:c i:short_i c:c le:le", headline:"h:c ea:exc d:c l:c i:i_e n:c e:silent_e",
  announce:"a:schwa nn:double ou:ou n:c c:soft_c e:silent", record:"r:c e:short_e c:c or:schwa_r d:c",
  rescue:"r:c e:short_e s:c c:c ue:ue", injure:"i:short_i n:c j:c ure:exc",
  damage:"d:c a:short_a m:c a:schwa g:soft_g e:silent_e", destroy:"d:c e:schwa str:blend oy:oy",
  steal:"st:blend ea:ea l:c", thief:"th:th ie:exc f:c",
  amazing:"a:schwa m:c a:long_a z:c i:short_i ng:ng", amazed:"a:schwa m:c a:long_a z:c ed:ed_d",
  surprising:"s:c ur:schwa_r pr:blend i:long_i s:s_z i:short_i ng:ng",
  interesting:"i:short_i n:c t:c er:er e:schwa s:c t:c i:short_i ng:ng",
  confusing:"c:c o:schwa n:c f:c u:long_u s:s_z i:short_i ng:ng", confused:"c:c o:schwa n:c f:c u:long_u s:s_z ed:ed_d",
  disappointing:"d:c i:short_i s:c a:schwa pp:double oi:oi n:c t:c i:short_i ng:ng",
  disappointed:"d:c i:short_i s:c a:schwa pp:double oi:oi n:c t:c ed:ed_id",
  embarrassing:"e:schwa m:c b:c a:short_a rr:double a:schwa ss:double i:short_i ng:ng",
  embarrassed:"e:schwa m:c b:c a:short_a rr:double a:schwa ss:double ed:ed_t",
  shocking:"sh:sh o:short_o ck:ck i:short_i ng:ng", shocked:"sh:sh o:short_o ck:ck ed:ed_t",
  touching:"t:c ou:exc ch:ch i:short_i ng:ng", annoying:"a:schwa nn:double oy:oy i:short_i ng:ng",
  annoyed:"a:schwa nn:double oy:oy ed:ed_d", frightening:"fr:blend igh:igh t:c e:schwa n:c i:short_i ng:ng",
  frightened:"fr:blend igh:igh t:c e:schwa n:c ed:ed_d", satisfied:"s:c a:short_a t:c i:short_i s:c f:c ie:ie d:ed_d",
  exhausted:"e:schwa x:exc h:silent au:aw s:c t:c ed:ed_id", relaxing:"r:c e:schwa l:c a:short_a x:x_ks i:short_i ng:ng",
  movement:"m:c o:exc v:c e:silent m:c e:schwa n:c t:c", payment:"p:c ay:ay m:c e:schwa n:c t:c",
  agreement:"a:schwa gr:blend ee:ee m:c e:schwa n:c t:c",
  excitement:"e:schwa x:x_ks c:silent i:i_e t:c e:silent_e m:c e:schwa n:c t:c",
  achievement:"a:schwa ch:ch ie:exc v:c e:silent m:c e:schwa n:c t:c",
  equipment:"e:schwa qu:qu i:short_i p:c m:c e:schwa n:c t:c",
  government:"g:c o:o_uh v:c er:er n:c m:c e:schwa n:c t:c",
  happiness:"h:c a:short_a pp:double i:short_i n:c e:schwa ss:double", kindness:"k:c i:long_i n:c d:c n:c e:schwa ss:double",
  sadness:"s:c a:short_a d:c n:c e:schwa ss:double", illness:"i:short_i ll:double n:c e:schwa ss:double",
  darkness:"d:c ar:ar k:c n:c e:schwa ss:double"
});
Object.assign(EXC_NOTE, {
  century:"t 後面接 u 時常唸 /tʃ/，像 picture、nature，所以 century 唸 /ˈsɛntʃəri/。",
  ancient:"ci 後面接母音時唸 /ʃ/（像 special），a 唸長音 A，所以 ancient 唸 /ˈeɪnʃənt/。",
  war:"w 後面的 ar 不唸 /ɑr/，而是唸 /ɔr/，像 warm、warn，所以 war 唸 /wɔr/。",
  headline:"ea 在 head、bread、ready 裡唸短 e /ɛ/，不唸長 e。",
  injure:"字尾 ure 在 injure 裡輕輕唸 /ɚ/，j 唸 /dʒ/，所以 injure 唸 /ˈɪndʒɚ/。",
  thief:"ie 在 thief、piece、field 裡唸長 e /iː/，不唸 pie 的 /aɪ/。",
  touching:"ou 在 touch、young、country 裡唸短 u /ʌ/，不唸 /aʊ/。",
  exhausted:"x 在 ex + 母音（或不發音的 h）前面常唸有聲的 /ɡz/，像 exam；h 不發音，所以唸 /ɪɡˈzɔstɪd/。",
  movement:"o 在 move、movie、do 裡唸長長的「嗚」/uː/；e 不發音，ment 輕輕唸 /mənt/。",
  achievement:"ie 在 achieve 裡唸長 e /iː/，和 thief、piece 一樣；ment 輕輕唸 /mənt/。"
});
/* ---------- 4 堂自然發音課（安安老師） ---------- */
const J3_1_1_PHONICS = [
  {id:"p1", title:"過去分詞 -ed 的三種唸法：/t/、/d/、/ɪd/"},
  {id:"p2", title:"-ing／-ed 形容詞的重音：INteresting、exCITed"},
  {id:"p3", title:"名詞字尾 -ment /mənt/ 和 -ness /nəs/"},
  {id:"p4", title:"句子裡的弱讀：was、were、be 動詞輕輕帶過"}
];
const J3_1_1_PHONICS_CLASS = {
p1:[
 {say:"同學好！被動語態到處都是過去分詞，像 {invented}、{delivered}、{produced}。這三個字結尾都是 <<ed>>，可是唸起來不一樣喔！仔細聽。", board:[["invented   delivered   produced",["ed","ed","ed"],false,true]]},
 {say:"規則看 ed 前面那個「聲音」。第一種：前面是 /t/ 或 /d/，ed 唸 /ɪd/，多出一個音節。{invented}、{printed}、{reported}、{created}。", board:[["invented   printed",["ed","ed"],false,true],["reported   created",["ed","ed"],false,true]]},
 {say:"第二種：前面是無聲的音，像 /p/、/k/、/s/、/ʃ/、/tʃ/、/f/，ed 唸無聲的 /t/。{shocked}、{produced}、{announced}、{embarrassed}。", board:[["shocked   produced",["ed","ed"],false,true],["announced   embarrassed",["ed","ed"],false,true]]},
 {say:"第三種：前面是有聲的音，包括所有母音和 /b/、/g/、/v/、/z/、/n/、/l/、/r/，ed 唸有聲的 /d/。{delivered}、{destroyed}、{amazed}、{damaged}。", board:[["delivered   destroyed",["ed","ed"],false,true],["amazed   damaged",["ed","ed"],false,true]]},
 {say:"口訣先記起來！", chant:"t、d 後面加 /ɪd/，無聲唸 /t/，有聲唸 /d/！"},
 {ask:{say:"聽聽看！", q:"invented 的 ed 唸什麼？", opts:["/t/","/d/","/ɪd/"], ans:2,
   ok:"答對了！ed 前面是 /t/，要唸 /ɪd/：in-VEN-ted。",
   bad:{0:"ed 前面是 /t/，兩個 t 黏不起來，要多唸一個音節 /ɪd/。",1:"ed 前面是 /t/ 的時候，要唸 /ɪd/。"},
   again:{q:"reported 的 ed 唸什麼？", opts:["/ɪd/","/t/","/d/"], ans:0, exp:"ed 前面是 /t/，唸 /ɪd/。"}}},
 {say:"小心拼字騙人！{produced} 的字母是 c-e，可是聲音是 /s/，無聲，所以 ed 唸 /t/。{damaged} 的 g 唸 /dʒ/，有聲，所以 ed 唸 /d/。要聽聲音，不是看字母！", board:[["produced → /s/ + /t/",["ced"],false,true],["damaged → /dʒ/ + /d/",["ged"],false,true]]},
 {ask:{q:"announced 的 ed 唸什麼？", opts:["/d/","/t/","/ɪd/"], ans:1,
   ok:"很棒！ce 唸 /s/，是無聲的音，ed 唸 /t/。",
   bad:{0:"ce 唸 /s/，是無聲的，ed 要唸無聲的 /t/。",2:"/ɪd/ 只用在 t、d 後面，announce 結尾是 /s/。"},
   again:{q:"shocked 的 ed 唸什麼？", opts:["/t/","/d/","/ɪd/"], ans:0, exp:"ck 唸 /k/，無聲，ed 唸 /t/。"}}},
 {say:"摸摸喉嚨試試看！唸 /v/ 喉嚨會震動，所以 {delivered} 的 ed 唸 /d/；唸 /s/ 喉嚨不震動，所以 {produced} 的 ed 唸 /t/。", board:[["delivered → 喉嚨震動 /d/",["ed"],false,true],["produced → 不震動 /t/",["ed"],false,true]]},
 {ask:{q:"destroyed 的 ed 唸什麼？", opts:["/t/","/ɪd/","/d/"], ans:2,
   ok:"太好了！oy 是母音，有聲，ed 唸 /d/。",
   bad:{0:"oy 是母音，母音都是有聲的，ed 要唸 /d/。",1:"/ɪd/ 只用在 t、d 後面。"},
   again:{q:"discovered 的 ed 唸什麼？", opts:["/d/","/t/","/ɪd/"], ans:0, exp:"er 是有聲的音，ed 唸 /d/。"}}},
 {say:"最後來分組！考試常考「哪一個 ed 的唸法和其他不同」。", board:[["/ɪd/：invented, printed, created",["ed","ed","ed"],false,true],["/t/：shocked, produced, announced",["ed","ed","ed"],false,true],["/d/：delivered, destroyed, amazed",["ed","ed","ed"],false,true]]},
 {ask:{say:"最後一題！", q:"哪一個字的 ed 唸法和其他不同？", opts:["printed","shocked","created"], ans:1,
   ok:"眼睛真利！shocked 唸 /t/，printed 和 created 唸 /ɪd/。",
   bad:{0:"printed 的 ed 前面是 t，唸 /ɪd/，和 created 一樣。",2:"created 的 ed 前面是 t，唸 /ɪd/，和 printed 一樣。"},
   again:{q:"哪一個字的 ed 唸法和其他不同？", opts:["amazed","delivered","reported"], ans:2, exp:"reported 唸 /ɪd/，另外兩個唸 /d/。"}}},
 {say:"-ed 的三種唸法過關！記住：t、d 後面加 /ɪd/，無聲唸 /t/，有聲唸 /d/；要聽聲音，不是看字母。下一課來看 -ing 和 -ed 形容詞的重音！", end:true}
],
p2:[
 {say:"同學好！這個單元有好多 -ing 和 -ed 形容詞。好消息是：加上 <<ing>> 或 <<ed>>，重音不會搬家！原本的動詞重音在哪裡，形容詞的重音就在哪裡。", board:[["aMAZE → aMAZing → aMAZED",["MAZ","MAZ","MAZ"],false,true]]},
 {say:"先聽 {amazing}：a-MAZ-ing。第一個 a 輕輕唸 /ə/，重音在 MAZ。{amazed} 也一樣：a-MAZED。", board:[["aMAZing",["MAZ"],false,true],["aMAZED",["MAZED"],false,true]]},
 {say:"口訣唸起來！", chant:"ing、ed 不搶重音，動詞重音原地站！"},
 {say:"再來一組很多人唸錯的：{interesting}。重音在第一個音節 IN：IN-ter-est-ing。中間的 ter 常常幾乎被吃掉，聽起來像 IN-tres-ting。", board:[["INteresting",["IN"],false,true],["INterested",["IN"],false,true]]},
 {ask:{say:"聽聽看！", q:"interesting 的重音在哪裡？", opts:["IN","TER","EST"], ans:0,
   ok:"答對了！IN-ter-est-ing，重音在第一個音節。",
   bad:{1:"ter 要輕輕帶過，重音在 IN。",2:"重音在第一個音節 IN，不在 est。"},
   again:{q:"interested 的重音在哪裡？", opts:["TER","IN","ED"], ans:1, exp:"IN-ter-est-ed，重音一樣在 IN。"}}},
 {say:"很多字的重音在第二個音節：{exCITed}、{surPRISing}、{conFUSing}、{emBARrassed}。前面的 ex、sur、con、em 都要輕輕唸。", board:[["exCITed   surPRISing",["CIT","PRIS"],false,true],["conFUSing   emBARrassed",["FUS","BAR"],false,true]]},
 {ask:{q:"confusing 的重音在哪裡？", opts:["CON","FUS","ING"], ans:1,
   ok:"很棒！con-FUS-ing，con 輕輕唸。",
   bad:{0:"con 是輕輕的 /kən/，重音在 FUS。",2:"ing 字尾從來不搶重音。"},
   again:{q:"surprising 的重音在哪裡？", opts:["SUR","ING","PRIS"], ans:2, exp:"sur-PRIS-ing，重音在 PRIS。"}}},
 {say:"長一點的字也一樣：{disapPOINTed}、{disapPOINTing}，重音在第三個音節 POINT；{SATisfied} 和 {FRIGHTened} 的重音在第一個音節。", board:[["disapPOINTed",["POINT"],false,true],["SATisfied   FRIGHTened",["SAT","FRIGHT"],false,true]]},
 {ask:{q:"disappointed 的重音在哪裡？", opts:["DIS","AP","POINT"], ans:2,
   ok:"太好了！dis-ap-POINT-ed。",
   bad:{0:"dis 是字首，要輕輕唸，重音在 POINT。",1:"ap 要唸成弱音 /ə/，重音在 POINT。"},
   again:{q:"embarrassed 的重音在哪裡？", opts:["EM","BAR","RASSED"], ans:1, exp:"em-BAR-rassed，重音在 BAR。"}}},
 {say:"小提醒：重音後面加 ing 的時候，ing 的 i 永遠是短短的 /ɪ/，唸 /ɪŋ/。不要唸成「因」，鼻音要從鼻子出來：{shocking}、{touching}、{annoying}。", board:[["shocking   touching   annoying",["ing","ing","ing"],false,true]]},
 {ask:{say:"最後一題！", q:"哪一個字的重音唸錯了？", opts:["a-MAZ-ing","IN-ter-est-ing","SUR-pris-ing"], ans:2,
   ok:"眼睛真利！surprising 要唸 sur-PRIS-ing。",
   bad:{0:"amazing 的重音在 MAZ，是對的。",1:"interesting 的重音在 IN，是對的。"},
   again:{q:"哪一個字的重音唸錯了？", opts:["ex-CIT-ed","DIS-ap-point-ed","con-FUSED"], ans:1, exp:"disappointed 要唸 dis-ap-POINT-ed。"}}},
 {say:"形容詞重音過關！記住：ing、ed 不搶重音，動詞重音原地站。interesting 重音在 IN；excited、surprising、confusing、embarrassed 重音在第二個音節。下一課要認識名詞字尾 -ment 和 -ness！", end:true}
],
p3:[
 {say:"同學好！今天要認識兩個「名詞製造機」：<<ment>> 和 <<ness>>。動詞加 ment、形容詞加 ness，就會變成名詞！", board:[["move → movement",["ment"],false,true],["happy → happiness",["ness"],false,true]]},
 {say:"先看 <<ment>>：它通常加在動詞後面。{move} → {movement}、{pay} → {payment}、{agree} → {agreement}、{achieve} → {achievement}。", board:[["pay → payment",["ment"],false,true],["agree → agreement",["ment"],false,true],["achieve → achievement",["ment"],false,true]]},
 {say:"ment 不重讀，e 要輕輕唸成 /ə/，整組唸 /mənt/，像很快的「門特」。不要唸成「面特」！", board:[["payment /ˈpeɪmənt/",["ment"],false,true],["equipment /ɪˈkwɪpmənt/",["ment"],false,true]]},
 {say:"口訣唸起來！", chant:"動詞加 ment 變名詞，ment 輕輕唸 /mənt/！"},
 {ask:{say:"聽聽看！", q:"agreement 的 ment 唸什麼？", opts:["/mɛnt/","/mənt/","/meɪnt/"], ans:1,
   ok:"答對了！ment 不重讀，唸輕輕的 /mənt/。",
   bad:{0:"ment 不是重音，e 不能唸成短 e，要唸弱音 /ə/。",2:"ment 裡沒有長 a 的音，要輕輕唸 /mənt/。"},
   again:{q:"payment 的重音在哪裡？", opts:["PAY","MENT","兩個一樣重"], ans:0, exp:"PAY-ment，ment 不重讀。"}}},
 {say:"拼字小心！動詞結尾的 e 要保留：{excite} → {excitement}、{achieve} → {achievement}、{move} → {movement}，不能把 e 拿掉。", board:[["excite → excitement",["tement"],false,true],["excitment",[],true]]},
 {ask:{q:"achieve 的名詞怎麼拼？", opts:["achievment","achievement","achievemant"], ans:1,
   ok:"很棒！e 要保留：achieve + ment。",
   bad:{0:"achieve 結尾的 e 要保留，再加 ment。",2:"字尾是 ment，不是 mant。"},
   again:{q:"move 的名詞怎麼拼？", opts:["movment","movement","moveness"], ans:1, exp:"move + ment = movement，e 保留。"}}},
 {say:"再來是 <<ness>>：它加在形容詞後面，表示「……的狀態」。{kind} → {kindness}、{sad} → {sadness}、{ill} → {illness}、{dark} → {darkness}。", board:[["kind → kindness",["ness"],false,true],["sad → sadness",["ness"],false,true],["dark → darkness",["ness"],false,true]]},
 {say:"ness 也不重讀，唸輕輕的 /nəs/。重音留在原本的形容詞上：{KINDness}、{SADness}、{DARKness}。", board:[["KINDness   SADness",["KIND","SAD"],false,true],["ILLness   DARKness",["ILL","DARK"],false,true]]},
 {say:"拼字陷阱：子音 + y 結尾的形容詞，要把 y 改成 i 再加 ness：{happy} → {happiness}，不是 happyness。", board:[["happy → happiness",["iness"],false,true],["happyness",[],true]]},
 {ask:{q:"happy 的名詞怎麼拼？", opts:["happyness","happiness","happness"], ans:1,
   ok:"太好了！y 改成 i，再加 ness：happiness。",
   bad:{0:"子音 + y 結尾要把 y 改成 i：happiness。",2:"y 不能拿掉，要改成 i：happiness。"},
   again:{q:"ill 加 ness 怎麼拼？", opts:["ilness","illness","illnes"], ans:1, exp:"ill + ness = illness，兩個 l、兩個 s 都要保留。"}}},
 {ask:{say:"最後一題！", q:"哪一組配對是對的？", opts:["kind + ment","pay + ness","dark + ness"], ans:2,
   ok:"完美！形容詞 dark 加 ness 變名詞 darkness。",
   bad:{0:"kind 是形容詞，要加 ness：kindness。",1:"pay 是動詞，要加 ment：payment。"},
   again:{q:"哪一組配對是對的？", opts:["agree + ment","sad + ment","equip + ness"], ans:0, exp:"動詞 agree 加 ment：agreement。"}}},
 {say:"字尾過關！記住：動詞加 ment，形容詞加 ness，都變成名詞；ment 唸 /mənt/、ness 唸 /nəs/，都不重讀；e 保留，y 改 i。最後一課要學句子裡的弱讀！", end:true}
],
p4:[
 {say:"同學好！先聽安安老師唸一句：{It was made in Taiwan.} 你有沒有發現，was 聽起來不是清楚的「襪子」，而是很短的 /wəz/？這就是「弱讀」！", board:[["It was made in Taiwan.",["was"]]]},
 {say:"英文句子有輕有重。名詞、動詞、形容詞這些「有內容」的字唸得重；be 動詞、介系詞、冠詞這些「功能字」唸得輕。", board:[["It was MADE in TAIwan.",["MADE","TAI"]]]},
 {say:"口訣唸起來！", chant:"內容字唸得重，功能字輕輕過！"},
 {say:"was 單獨唸是 /wɑz/，在句子裡弱讀成 /wəz/；were 單獨唸是 /wɝ/，弱讀成 /wɚ/，輕輕的。{The bridge was built in 1990.} {The cars were made in Japan.}", board:[["was /wɑz/ → /wəz/",["was"]],["were /wɝ/ → /wɚ/",["were"]],["The cars were made in Japan.",["were"]]]},
 {ask:{say:"聽聽看！", q:"The book was written by her. 哪一個字唸得最輕？", opts:["book","was","written"], ans:1,
   ok:"答對了！was 是 be 動詞，是功能字，弱讀成 /wəz/。",
   bad:{0:"book 是名詞，是內容字，要唸重。",2:"written 是主要動詞，要唸重。"},
   again:{q:"The cars were made in Japan. 哪一個字要弱讀？", opts:["cars","were","Japan"], ans:1, exp:"were 是 be 動詞，弱讀成 /wɚ/。"}}},
 {say:"is 和 are 也常常弱讀，甚至縮寫：{It is made of wood.} 聽起來像 {It's made of wood.}；are 弱讀成 /ɚ/：{They are made in Taiwan.} 聽起來像 {They're made in Taiwan.}", board:[["It is → It's",["It's"]],["They are → They're",["They're"]]]},
 {say:"弱讀的時候還會「連音」：子音結尾的字遇到母音開頭的字，會黏在一起。{made in} 聽起來像 {ma-din}；{made of} 像 {ma-dof}。", board:[["made in → ma-din",["ma-din"]],["made of → ma-dof",["ma-dof"]]]},
 {ask:{q:"It was made in Taiwan. 哪兩個字會連在一起唸？", opts:["It was","made in","in Taiwan"], ans:1,
   ok:"很棒！made 的 d 碰到 in 的 i，連成 ma-din。",
   bad:{0:"was 是子音 w 開頭，不會和 It 黏成一個音節。",2:"Taiwan 是子音 T 開頭，不會和 in 連音。"},
   again:{q:"The table is made of wood. 哪兩個字會連在一起唸？", opts:["made of","The table","of wood"], ans:0, exp:"made 的 d 碰到 of 的 o，連成 ma-dof。"}}},
 {say:"可是有兩個時候 was、were 不能弱讀，要唸重！第一：否定 {wasn't}、{weren't}。第二：在句子最後面，像簡答 {Yes, it was.}", board:[["It wasn't made in Taiwan.",["wasn't"]],["Was it made in Taiwan? Yes, it WAS.",["WAS"]]]},
 {ask:{q:"哪一句的 was 要唸得清楚又重？", opts:["It was made in Japan.","Yes, it was.","The window was broken."], ans:1,
   ok:"正確！was 在句子最後面，要唸完整的 /wɑz/。",
   bad:{0:"was 後面還有 made，是在句子中間，要弱讀。",2:"was 後面還有 broken，在句子中間，要弱讀。"},
   again:{q:"哪一句的 were 要唸重？", opts:["They were made in Taiwan.","No, they weren't.","The cars were stolen."], ans:1, exp:"否定 weren't 要唸清楚，不能弱讀。"}}},
 {say:"被動語態的完成式也會弱讀：{has been} 的 been 弱讀成 /bɪn/，{has} 也會變輕：{The package has been delivered.} 重音放在 PACKage 和 deLIVered。", board:[["The PACKage has been deLIVered.",["PACK","LIV"]]]},
 {ask:{say:"最後一題！", q:"The light bulb was invented by Edison. 哪一組字要唸重？", opts:["was、by","The、was","light bulb、invented、Edison"], ans:2,
   ok:"完美！名詞和主要動詞是內容字，要唸重；was、by 輕輕帶過。",
   bad:{0:"was、by 是功能字，要弱讀。",1:"The 和 was 都是功能字，要輕輕唸。"},
   again:{q:"Paper is made from trees. 哪一個字要弱讀？", opts:["Paper","is","trees"], ans:1, exp:"is 是 be 動詞，是功能字，要弱讀。"}}},
 {say:"自然發音全部上完了！總複習：-ed 三種唸法 /ɪd/、/t/、/d/；ing、ed 不搶重音；ment 唸 /mənt/、ness 唸 /nəs/；內容字唸得重，功能字輕輕過。快去玩「拼字挑戰」試試身手吧！", end:true}
]};

/* ---------- 單字插圖（抽象的字用單字陣列第 7 欄的概念卡） ---------- */
const j311Box = (x, y, s, c = "#d6a76b") => grp(x, y, s, `<path d="M-22 -10 L0 -20 L22 -10 L0 0 Z" fill="#e9c08a"/><path d="M-22 -10 L0 0 L0 24 L-22 14 Z" fill="${c}"/><path d="M22 -10 L0 0 L0 24 L22 14 Z" fill="#c08b4f"/><path d="M-11 -15 L11 -5 L11 2 L-11 -8 Z" fill="#f4dfb8" opacity=".8"/>`);
const j311Bulb = (x, y, s, on = true) => grp(x, y, s, (on ? `<circle cx="0" cy="-8" r="26" fill="#fde68a" opacity=".55"/>` : "") + `<path d="M0 -26 C-14 -26 -20 -14 -16 -4 C-13 3 -8 6 -8 12 L8 12 C8 6 13 3 16 -4 C20 -14 14 -26 0 -26 Z" fill="${on ? "#facc15" : "#e5e7eb"}" stroke="#ca8a04" stroke-width="1.5"/><path d="M-4 10 L-4 0 L0 -6 L4 0 L4 10" stroke="#b45309" stroke-width="1.4" fill="none"/><rect x="-8" y="12" width="16" height="10" rx="2" fill="#9ca3af"/><path d="M-8 15 H8 M-8 19 H8" stroke="#6b7280" stroke-width="1.2"/><path d="M-4 22 L4 22 L2 26 L-2 26 Z" fill="#4b5563"/>`);
const j311Paper = (x, y, s, rot = 0) => grp(x, y, s, `<rect x="-18" y="-24" width="36" height="48" rx="2" fill="#fff" stroke="#d1d5db" stroke-width="1.2"/><path d="M-12 -14 H12 M-12 -6 H12 M-12 2 H12 M-12 10 H6" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>`, rot);
const j311News = (x, y, s, title = "NEWS") => grp(x, y, s, `<rect x="-34" y="-26" width="68" height="52" rx="2" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><rect x="-30" y="-22" width="60" height="11" fill="#1f2937"/>` + txt(0, -13.5, title, 8.5, "#fff", 900) + `<rect x="-30" y="-6" width="26" height="20" fill="#93c5fd"/><path d="M0 -4 H30 M0 2 H30 M0 8 H30 M0 14 H22 M-30 20 H30" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>`);

Object.assign(ILLUS, {
  factory: () => svgWrap("#e0f2fe", O.cloud(46, 18, .7, "#e5e7eb") + O.cloud(64, 10, .5, "#e5e7eb") + ground("#d1d5db") + `<rect x="34" y="22" width="12" height="40" fill="#9ca3af"/><rect x="34" y="22" width="12" height="5" fill="#ef4444"/><path d="M24 104 L24 58 L52 44 L52 58 L80 44 L80 58 L108 44 L108 58 L136 44 L136 104 Z" fill="#64748b"/>` + [36, 64, 92, 120].map(xx => `<rect x="${xx}" y="70" width="12" height="10" rx="1" fill="#fde68a"/>`).join("") + `<rect x="70" y="86" width="20" height="18" fill="#334155"/>` + j311Box(146, 94, .4)),
  wood: () => svgWrap("#fef3c7", ground("#d9f99d") + O.tree(126, 84, .7) + [0, 1, 2].map(i => `<rect x="${20 + i * 8}" y="${70 - i * 14}" width="70" height="16" rx="8" fill="#a16207"/><ellipse cx="${90 + i * 8}" cy="${78 - i * 14}" rx="8" ry="8" fill="#fcd34d" stroke="#a16207" stroke-width="2"/><circle cx="${90 + i * 8}" cy="${78 - i * 14}" r="3.5" fill="none" stroke="#d97706" stroke-width="1.2"/>`).join("") + `<rect x="20" y="86" width="78" height="16" rx="8" fill="#92400e"/><ellipse cx="98" cy="94" rx="8" ry="8" fill="#fcd34d" stroke="#92400e" stroke-width="2"/>`),
  glass: () => svgWrap("#ecfeff", `<path d="M54 24 L106 24 L98 100 L62 100 Z" fill="#cffafe" stroke="#67e8f9" stroke-width="3" stroke-linejoin="round"/><path d="M58 52 L102 52 L98 100 L62 100 Z" fill="#7dd3fc" opacity=".75"/><path d="M64 32 L60 70" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".9"/>` + spark(122, 34, .8, "#67e8f9") + spark(38, 80, .6, "#67e8f9")),
  paper: () => svgWrap("#f5f5f4", j311Paper(64, 62, 1.2, -8) + j311Paper(92, 58, 1.2, 6) + O.pencil(130, 84, .6)),
  cotton: () => svgWrap("#dbeafe", O.sun(132, 22, .45) + ground("#86efac") + `<path d="M80 104 V64 M80 80 L58 62 M80 74 L104 56" stroke="#78350f" stroke-width="3.5" stroke-linecap="round" fill="none"/>` + [[80, 52], [56, 52], [106, 46]].map(([cx, cy]) => `<circle cx="${cx - 7}" cy="${cy}" r="9" fill="#fff" stroke="#cbd5e1"/><circle cx="${cx + 7}" cy="${cy}" r="9" fill="#fff" stroke="#cbd5e1"/><circle cx="${cx}" cy="${cy - 8}" r="9" fill="#fff" stroke="#cbd5e1"/><circle cx="${cx}" cy="${cy + 2}" r="8" fill="#f8fafc"/><path d="M${cx - 10} ${cy + 8} L${cx} ${cy + 13} L${cx + 10} ${cy + 8}" stroke="#a16207" stroke-width="2.5" fill="none"/>`).join("")),
  package: () => svgWrap("#fff7ed", ground("#fed7aa") + j311Box(80, 70, 1.8) + `<path d="M40 52 L80 70 L120 52" stroke="#b45309" stroke-width="2" fill="none" opacity=".6"/><rect x="60" y="80" width="18" height="12" rx="1" fill="#fff" transform="skewY(25)"/>` + spark(128, 26, .8)),
  wheel: () => svgWrap("#eef2ff", ground("#c7d2fe") + O.wheel(80, 66, 2.2) + `<circle cx="80" cy="66" r="44" fill="none" stroke="#1f2937" stroke-width="6"/>` + spark(134, 26, .7)),
  "light bulb": () => svgWrap("#1e293b", j311Bulb(80, 62, 1.6) + spark(32, 28, .8, "#fde68a") + spark(130, 30, .7, "#fde68a") + star(128, 96, 5, "#fde68a")),
  newspaper: () => svgWrap("#f1f5f9", j311News(80, 58, 1.5) + spark(140, 22, .6)),
  magazine: () => svgWrap("#fdf2f8", `<rect x="46" y="16" width="64" height="88" rx="3" fill="#ec4899"/><rect x="50" y="20" width="56" height="16" fill="#fff"/>` + txt(78, 32, "TEEN", 12, "#ec4899", 900) + girlP(78, {y:98, s:.62, pose:"wave", mood:"open"}) + `<rect x="54" y="88" width="24" height="5" rx="2" fill="#fde047"/>` + O.book(130, 80, .5, "#38bdf8")),
  headline: () => svgWrap("#fefce8", j311News(80, 64, 1.5, "BIG NEWS!") + `<path d="M20 22 L140 22" stroke="#ef4444" stroke-width="3" stroke-dasharray="6 4"/>` + O.arrow(80, 14, false, "#ef4444")),
  thief: () => svgWrap("#1e1b4b", O.cloud(30, 22, .6, "#334155") + `<circle cx="130" cy="22" r="10" fill="#fef9c3"/>` + kid(70, {s:.85, y:110, hc:"#111827", oc:"#374151", lc:"#111827", mood:"o", eyes:"worry", pose:"hold"}) + grp(70, 110, .85, `<rect x="-19" y="-62" width="38" height="9" rx="4" fill="#111827"/><circle cx="-6" cy="-57.5" r="2.6" fill="#fff"/><circle cx="6" cy="-57.5" r="2.6" fill="#fff"/><circle cx="-6" cy="-57.5" r="1.2" fill="#111827"/><circle cx="6" cy="-57.5" r="1.2" fill="#111827"/>`) + `<path d="M98 70 Q118 60 112 90 Q100 100 92 88 Z" fill="#a16207"/>` + txt(106, 86, "$", 14, "#fde047", 900)),
  equipment: () => svgWrap("#ecfccb", ground("#bef264") + O.ball(40, 94, 1.3) + `<rect x="70" y="40" width="6" height="56" rx="3" fill="#a16207" transform="rotate(-20 73 68)"/>` + `<rect x="100" y="74" width="40" height="8" rx="4" fill="#6b7280"/><rect x="96" y="64" width="8" height="28" rx="3" fill="#374151"/><rect x="136" y="64" width="8" height="28" rx="3" fill="#374151"/>` + O.bag(60, 84, .45, "#3b82f6")),
  darkness: () => svgWrap("#0f172a", `<circle cx="120" cy="28" r="12" fill="#f8fafc"/><circle cx="126" cy="24" r="11" fill="#0f172a"/>` + star(30, 24, 3, "#e2e8f0") + star(60, 40, 2.5, "#e2e8f0") + star(96, 18, 2, "#e2e8f0") + `<path d="M0 104 Q80 96 160 104 L160 120 L0 120 Z" fill="#1e293b"/><circle cx="66" cy="78" r="3" fill="#fef08a"/><circle cx="80" cy="78" r="3" fill="#fef08a"/>`)
});
/* ---------- 記憶小提示 ---------- */
Object.assign(MEMO, {
  produce:"pro（向前）+ duce（帶領）＝把東西帶出來，就是生產。名詞是 product。",
  product:"produce（生產）出來的東西，就是 product（產品）。",
  factory:"fact + ory（……的地方）：-ory 常表示地點，factory 就是做東西的地方。",
  material:"mate + rial：材料是做東西的好夥伴（mate）。",
  company:"com（一起）+ pany（像 pan 麵包）：一起吃麵包的夥伴，後來變成一起工作的公司。",
  metal:"metal 唸起來像「沒頭」：金屬做的機器人沒有頭也不怕。",
  wood:"wood 加 s 變 woods 是「樹林」：很多木頭就是一片樹林。",
  glass:"glass 加 es 變 glasses 是「眼鏡」：兩片玻璃戴在眼睛上。",
  paper:"paper 唸起來像「胚波」：紙一揉就皺成一顆小球波。newspaper 就是 news + paper。",
  cotton:"cotton 唸起來像「卡疼」：棉花軟軟的，卡在身上也不會疼。",
  deliver:"de + liver（像 live 住）：把東西送到你住的地方，就是遞送。",
  package:"pack（打包）+ age：打包好的東西，就是包裹。",
  create:"create 的名詞是 creation，形容詞是 creative（國二學過）。",
  invent:"in（進入）+ vent（來）：想法跑進腦袋裡來，就發明出新東西！",
  inventor:"invent（發明）+ or（人）＝發明的人。actor、visitor 也是這樣。",
  invention:"invent（發明）+ ion（名詞字尾）＝發明出來的東西。tion 唸「遜」。",
  discover:"dis（拿掉）+ cover（蓋子）：把蓋子拿掉，就發現下面的東西了！",
  century:"cent 是「一百」：一美元有一百 cents，一個 century 有一百年。",
  ancient:"ancient 唸起來像「安息恩特」：古代的人早已安息了。",
  wheel:"wheel 唸起來像「回唷」：輪子一直轉一直轉，轉回原點唷。",
  print:"print 裡藏著 pin（大頭針）：先用針把紙固定好，再印刷。",
  "light bulb":"light（光）+ bulb（球根）：會發光、長得像球根的東西，就是電燈泡。",
  war:"war 倒過來是 raw（生的、野蠻的）：戰爭讓人變得野蠻。",
  report:"re（回來）+ port（搬運）：把消息搬回來告訴大家，就是報導。reporter 是記者。",
  event:"e（出來）+ vent（來）：跑出來的事情，就是事件、活動。",
  newspaper:"news（新聞）+ paper（紙）＝印著新聞的紙，就是報紙。",
  magazine:"magazine 唸起來像「每個月新」：雜誌每個月都有新的一期。",
  article:"art（藝術）+ icle：寫文章也是一種藝術。",
  headline:"head（頭）+ line（行）＝最上面那一行，就是新聞標題、頭條。",
  announce:"an + nounce（像 noun 名詞）：大聲說出名字，就是宣布得獎者。",
  record:"re（再）+ cord（心）：用心再記一次，就是紀錄。",
  rescue:"res + cue（提示、信號）：一收到求救信號，馬上出發去救援！",
  injure:"in + jure：受傷要找醫生，名詞是 injury（傷）。",
  damage:"dam（水壩）+ age：水壩破了，造成很大的損害。",
  destroy:"de（往下）+ stroy（和 structure 建造同源）：把蓋好的東西往下拆光，就是摧毀。",
  steal:"steal 和 steel（鋼鐵）同音：小偷想偷鋼鐵做的保險箱。三態 steal - stole - stolen。",
  thief:"thief 唸起來像「戲夫」：小偷演戲裝路人，偷了東西就跑。複數 thieves 的 f 要變 v。",
  amazing:"amaze 裡有 maze（迷宮）：走出迷宮的感覺真神奇！ing 是令人驚奇的。",
  amazed:"amaze + d：自己「感到」驚奇。ing 給別人感覺，ed 是自己感覺。",
  surprising:"surprise（驚喜）+ ing：讓人驚訝的事情，用 surprising。",
  interesting:"inter（在中間）+ est：讓人想鑽進去看的東西，就是有趣的。人感興趣用 interested。",
  confusing:"con（一起）+ fuse（熔化）：腦袋裡的東西全熔在一起，搞不清楚了！",
  confused:"confuse + d：自己「感到」困惑，I'm confused。",
  disappointing:"dis（不）+ appoint（約定）：說好的事沒做到，令人失望。",
  disappointed:"disappoint + ed：自己「感到」失望，搭配 with。",
  embarrassing:"embarrass 有兩個 r、兩個 s：太尷尬了，臉紅（r）又流汗（s）兩次！",
  embarrassed:"embarrass + ed：自己「感到」尷尬，臉都紅了。拼字是 rr 和 ss。",
  shocking:"shock 唸起來像「嚇客」：嚇到客人的新聞，就是令人震驚的。",
  shocked:"shock + ed：自己「被嚇到」，感到震驚。",
  touching:"touch（觸摸）+ ing：摸到你內心的東西，就是感人的。",
  annoying:"annoy 裡有 no：一直跟你說 no 的人，很煩人！",
  annoyed:"annoy + ed：自己「感到」不耐煩。",
  frightening:"fright（驚嚇）+ en + ing：讓人嚇一跳的，令人害怕。",
  frightened:"frighten + ed：自己「感到」害怕，搭配 of。",
  satisfied:"satis（足夠）+ fied：足夠了，就感到滿意。satisfy 把 y 改成 i 再加 ed。",
  exhausted:"ex（出去）+ haust（抽）：力氣全被抽出去，精疲力盡！",
  relaxing:"relax（放鬆）+ ing：讓人放鬆的事情；人感到放鬆用 relaxed。",
  movement:"move（移動）+ ment（名詞）＝移動的樣子，就是動作。",
  payment:"pay（付錢）+ ment（名詞）＝付出去的錢，就是付款。",
  agreement:"agree（同意）+ ment（名詞）＝大家都同意的事，就是協議。",
  excitement:"excite（使興奮）+ ment：興奮的感覺。excite 的 e 要保留。",
  achievement:"achieve（達成）+ ment：達成的事，就是成就。achieve 的 e 要保留。",
  equipment:"equip（裝備）+ ment：裝備好的東西，就是設備。不可數，不加 s。",
  government:"govern（治理）+ ment：治理國家的單位，就是政府。n 不要漏掉！",
  happiness:"happy 的 y 改成 i，再加 ness：快樂的狀態，就是幸福。",
  kindness:"kind（仁慈的）+ ness：仁慈的心，就是好心。",
  sadness:"sad（難過的）+ ness：難過的狀態，就是悲傷。",
  illness:"ill（生病的）+ ness：生病的狀態，就是疾病。",
  darkness:"dark（黑暗的）+ ness：黑黑的狀態，就是黑暗。"
});
registerUnit("j3-1-1", {name:"國三 上學期 第一次段考", sub:"被動語態（現在式、過去式、未來式、助動詞、完成式）、分詞形容詞 -ing／-ed、間接問句", words:J3_1_1_WORDS, grammar:J3_1_1_GRAMMAR, quiz:J3_1_1_QUIZ, classes:Object.assign({}, J3_1_1_CLASS, J3_1_1_PHONICS_CLASS), phonics:J3_1_1_PHONICS});
})();
