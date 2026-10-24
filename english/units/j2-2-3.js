/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   內容資料：國二下學期 期末考（通用範圍）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 文法說明] x3], 字根(不用), 說明(不用), 概念卡 "emoji|標籤"]
   主題：環保與資源回收、志工與社區服務、自己動手做、興趣與專長、反身代名詞、不定代名詞、in- / im- 字首、-ly 副詞
   ========================================================= */
const J2_2_3_WORDS = [
/* ---------- 環保與資源回收 ---------- */
["recycle","v.","回收；資源回收",[
 ["We recycle paper, bottles, and cans at school.","我們在學校回收紙、瓶子和罐子。","主詞 We 是複數，現在簡單式的 recycle 不加 s。三樣東西並列時用逗號隔開，最後一個前面加 and。"],
 ["Recycling is good for the earth.","資源回收對地球有好處。","Recycling 是動名詞，當主詞時當作單數，所以 be 動詞用 is。be good for 是「對……有好處」。"],
 ["Don't forget to recycle the empty bottles.","別忘了把空瓶子拿去回收。","forget to + 原形動詞，表示「忘記去做（還沒做的事）」。Don't 開頭是否定祈使句。"]]],
["plastic","adj./n.","塑膠的；塑膠",[
 ["Try not to use plastic bags.","盡量不要用塑膠袋。","try to + 原形是「努力去做」；不定詞的否定是把 not 放在 to 前面：try not to use。plastic 在這裡當形容詞，修飾 bags。"],
 ["Plastic takes hundreds of years to break down.","塑膠要好幾百年才會分解。","plastic 在這裡當名詞，是不可數名詞，所以動詞用 takes。break down 是「分解」。"],
 ["I stopped using plastic straws last year.","我去年就不再用塑膠吸管了。","stop + V-ing 是「停止做某事」，以後不做了。stop 變過去式要重複 p 再加 ed：stopped。"]]],
["bottle","n.","瓶子",[
 ["Please put the plastic bottles in this bin.","請把塑膠瓶放進這個回收桶。","祈使句用原形 put 開頭；put A in B 是「把 A 放進 B」。bin 是「桶子、箱子」。"],
 ["I always bring my own water bottle to school.","我總是帶自己的水壺去學校。","water bottle 是「水壺」。my own 是「我自己的」。always 放在一般動詞前面。"],
 ["This bottle is empty. Could you get me another one?","這瓶空了，你可以再幫我拿一瓶嗎？","another one 是「再一個、另一個（同類的東西）」，one 代替前面說過的 bottle。"]]],
["environment","n.","環境",[
 ["We should protect the environment.","我們應該保護環境。","should + 原形 protect，表示「應該」。說「自然環境」時常說 the environment。"],
 ["Saving water is one way to help the environment.","省水是幫助環境的一種方法。","Saving water 是動名詞片語當主詞，當作單數，所以用 is。one way to + 原形，是「做某事的一個方法」。"],
 ["Riding a bike is better for the environment than driving.","騎腳踏車比開車對環境更好。","兩個動名詞 Riding 和 driving 互相比較。better 是 good 的比較級。"]],null,null,"🌏|環境"],
["bin","n.","（回收、垃圾）桶",[
 ["Put the cans in the blue bin.","把罐子放進藍色的回收桶。","祈使句用原形 Put 開頭。bin 是「桶子、箱子」，recycling bin 是「回收桶」。"],
 ["We have three bins: one for paper, another for plastic, and the other for cans.","我們有三個回收桶：一個放紙類，另一個放塑膠，最後一個放鐵鋁罐。","三個之中：one ... another ... the other ...。"],
 ["Which bin should this bottle go in?","這個瓶子應該丟進哪一個桶子？","Which + 名詞，問「哪一個」。should + 原形 go。"]]],
["pollution","n.","污染",[
 ["Air pollution is a big problem in many cities.","空氣污染是很多城市的大問題。","air pollution 是「空氣污染」，water pollution 是「水污染」。pollution 是不可數名詞，用 is。"],
 ["We can reduce pollution by taking the MRT.","我們可以藉由搭捷運來減少污染。","by + V-ing 表示「藉由……的方法」，介系詞 by 後面要接動名詞 taking。"],
 ["Plastic pollution is hurting sea animals.","塑膠污染正在傷害海洋動物。","is hurting 是現在進行式，表示這件事正在發生。"]],null,null,"🏭|污染"],
["garbage","n.","垃圾",[
 ["Please take out the garbage after dinner.","晚餐後請把垃圾拿出去倒。","take out the garbage 是「倒垃圾」。garbage 是不可數名詞，不能說 a garbage 或 garbages。"],
 ["People throw away too much garbage every day.","人們每天丟掉太多垃圾。","garbage 不可數，所以用 too much，不用 too many。throw away 是「丟掉」。"],
 ["The garbage truck comes at eight. Don't miss it.","垃圾車八點來，不要錯過了。","garbage truck 是「垃圾車」。the garbage truck 是單數，comes 要加 s。"]]],
["reuse","v.","重複使用；再利用",[
 ["You can reuse this box for your things.","你可以重複使用這個盒子來裝你的東西。","can + 原形 reuse。字首 re- 有「再一次」的意思：re + use = 再用一次。"],
 ["My mom enjoys reusing old jars.","我媽媽喜歡把舊罐子再拿來用。","enjoy 後面要接 V-ing：enjoys reusing，不能說 enjoys to reuse。"],
 ["Reusing shopping bags is easy.","重複使用購物袋很容易。","Reusing shopping bags 是動名詞片語當主詞，當作單數，所以用 is。"]],null,null,"🔁|重複使用"],
["reduce","v.","減少",[
 ["We need to reduce our garbage.","我們需要減少我們的垃圾量。","need to + 原形 reduce。reduce 後面直接接名詞。"],
 ["Reduce, reuse, and recycle!","減量、重複使用、資源回收！","這是環保的 3R 口號。三個原形動詞開頭，是祈使句。"],
 ["He decided to reduce his time on games.","他決定減少玩遊戲的時間。","decide 後面接 to + 原形：decided to reduce，不能說 decided reducing。"]],null,null,"📉|減少"],
["throw away","v. phr.","丟掉",[
 ["Don't throw away these boxes. We can reuse them.","不要把這些箱子丟掉，我們可以重複使用。","throw away 是「丟掉」。受詞是代名詞時要放中間：throw them away。"],
 ["He threw his old shoes away.","他把舊鞋子丟掉了。","throw 的過去式是不規則的 threw。名詞當受詞時，可以放在 away 前面或後面。"],
 ["Stop throwing away food!","不要再丟掉食物了！","stop + V-ing 是「停止做某事」。"]],null,null,"🗑️|丟掉"],
["earth","n.","地球",[
 ["The earth is our home.","地球是我們的家。","說到我們住的地球，前面常加 the，也可以寫成大寫的 the Earth。"],
 ["We only have one earth.","我們只有一個地球。","only 放在一般動詞 have 前面，表示「只有」。"],
 ["What can we do to save the earth?","我們能做什麼來拯救地球？","to + 原形 save，表示目的「為了……」。can 的疑問句：What can we do?"]]],
["nature","n.","大自然",[
 ["I love being close to nature.","我喜歡親近大自然。","love 後面接 V-ing 或 to V 都可以：love being = love to be。nature 前面不加 the。"],
 ["Hiking is a great way to enjoy nature.","健行是享受大自然的好方法。","Hiking 是動名詞當主詞。a great way to + 原形，是「做某事的好方法」。"],
 ["We should learn to live with nature.","我們應該學習和大自然共存。","learn to + 原形，表示「學習去做某事」。live with 是「和……一起生活」。"]],null,null,"🌳|大自然"],
["protect","v.","保護",[
 ["We must protect the oceans and the forests.","我們必須保護海洋和森林。","must + 原形 protect，表示「必須」。"],
 ["Protecting animals is everyone's job.","保護動物是每個人的責任。","Protecting animals 是動名詞片語當主詞，當作單數，用 is。everyone's 是「每個人的」。"],
 ["Wear a hat to protect yourself from the sun.","戴帽子來保護自己不被曬到。","protect A from B 是「保護 A 不受 B 傷害」。祈使句的主詞是 you，所以受詞用反身代名詞 yourself。"]],null,null,"🛡️|保護"],
["straw","n.","吸管",[
 ["I don't need a straw, thanks.","我不需要吸管，謝謝。","need + 名詞，表示「需要某物」。straw 可數，所以用 a straw。"],
 ["She keeps using paper straws.","她一直使用紙吸管。","keep + V-ing 表示「持續做某事」：keeps using，不能說 keeps to use。"],
 ["Plastic straws are bad for sea turtles.","塑膠吸管對海龜有害。","be bad for 是「對……有害」，和 be good for 相反。sea turtle 是「海龜」。"]]],
["unplug","v.","拔掉插頭",[
 ["Unplug the TV before you go on vacation.","去度假之前，把電視的插頭拔掉。","祈使句用原形 Unplug 開頭。字首 un- 有「相反」的意思：plug（插上）→ unplug（拔掉）。"],
 ["Would you mind unplugging the fan?","你介意把電扇的插頭拔掉嗎？","mind 後面要接 V-ing。unplug 是「短母音 + 一個子音 g」結尾，要重複 g 再加 ing：unplugging。"],
 ["Unplugging your phone charger can save electricity.","把手機充電器拔掉可以省電。","Unplugging your phone charger 是動名詞片語當主詞；can 後面接原形 save。"]],null,null,"🔌|拔插頭"],
["electricity","n.","電；電力",[
 ["We can save electricity by using fans.","我們可以靠使用電扇來省電。","介系詞 by 後面接 V-ing：by using。electricity 是不可數名詞。"],
 ["This machine doesn't need electricity.","這台機器不需要用電。","主詞 This machine 是第三人稱單數，否定句用 doesn't + 原形 need。"],
 ["The electricity went out during the typhoon.","颱風期間停電了。","go out 在這裡是「（電、燈）熄滅」。went 是 go 的過去式。during 是「在……期間」。"]]],
["litter","v./n.","亂丟垃圾；（地上的）垃圾",[
 ["Please don't litter in the park.","請不要在公園亂丟垃圾。","litter 當動詞是「亂丟垃圾」。Please 可以和否定祈使句 don't 一起用。"],
 ["Littering is bad for the environment.","亂丟垃圾對環境不好。","Littering 是動名詞當主詞，當作單數，所以用 is。"],
 ["We picked up the litter on the beach.","我們撿起了海灘上的垃圾。","litter 當名詞，指丟在地上的垃圾，是不可數名詞。pick up 是「撿起來」。"]]],
["ocean","n.","海洋",[
 ["The Pacific Ocean is the biggest ocean in the world.","太平洋是世界上最大的海洋。","biggest 是 big 的最高級，前面加 the。海洋的名字前面要加 the。"],
 ["A lot of plastic ends up in the ocean.","很多塑膠最後都流進了海洋。","end up in 是「最後到了……」。plastic 是不可數名詞，所以動詞加 s：ends。"],
 ["Swimming in the ocean is fun, but be careful.","在海裡游泳很好玩，但是要小心。","Swimming in the ocean 是動名詞片語當主詞，用 is。be careful 是祈使句。"]]],
/* ---------- 志工與社區服務 ---------- */
["volunteer","n./v.","志工；自願（做）",[
 ["My sister is a volunteer at the library.","我姊姊是圖書館的志工。","volunteer 當名詞，是「志工」，前面用 a。"],
 ["We volunteered to clean the beach last Sunday.","上個星期天我們自願去淨灘。","volunteer to + 原形，表示「自願去做某事」。last Sunday 是過去，加 ed。"],
 ["Volunteering makes me happy.","當志工讓我很快樂。","Volunteering 是動名詞當主詞，當作單數，所以 make 加 s。make + 人 + 形容詞，是「讓某人……」。"]]],
["community","n.","社區；社群",[
 ["There is a small park in our community.","我們的社區裡有一座小公園。","There is + 單數名詞。in our community 是「在我們的社區裡」。"],
 ["Everyone in the community helped after the typhoon.","颱風過後，社區裡的每個人都來幫忙。","Everyone 當主詞時當作單數；這句是過去式，所以用 helped。"],
 ["She enjoys helping people in her community.","她喜歡幫助社區裡的人。","enjoy 後面接 V-ing：enjoys helping。"]],null,null,"🏘️|社區"],
["donate","v.","捐贈",[
 ["I donated my old books to the school library.","我把我的舊書捐給學校圖書館。","donate A to B 是「把 A 捐給 B」。donate 字尾是 e，過去式只加 d。"],
 ["They plan to donate money to the children's hospital.","他們計畫捐錢給兒童醫院。","plan 後面接 to + 原形：plan to donate。"],
 ["Thank you for donating your clothes.","謝謝你捐出你的衣服。","thank you for 的 for 是介系詞，後面要接 V-ing：for donating。"]]],
["elderly","adj.","年長的",[
 ["We visit the elderly people in the nursing home every month.","我們每個月去探望養老院的長輩。","elderly 是比 old 更有禮貌的說法。nursing home 是「養老院」。"],
 ["He helped an elderly woman carry her bags.","他幫一位老太太提她的袋子。","help + 人 + 原形動詞，表示「幫某人做某事」。elderly 是母音開頭，所以用 an。"],
 ["The elderly need our care and love.","長者需要我們的照顧和愛。","the + 形容詞可以表示「一群人」：the elderly = elderly people，當作複數，所以 need 不加 s。"]]],
["neighbor","n.","鄰居",[
 ["Our neighbor has a cute dog.","我們的鄰居有一隻可愛的狗。","Our neighbor 是單數，所以用 has。"],
 ["I often help my neighbor water her plants.","我常常幫鄰居澆花。","help + 人 + 原形動詞：help my neighbor water。water 在這裡是動詞「澆水」。"],
 ["Mr. Lin is one of my neighbors.","林先生是我的鄰居之一。","one of + 複數名詞，表示「……之中的一個」，所以要用 neighbors。"]],null,null,"🏠|鄰居"],
["charity","n.","慈善團體；慈善",[
 ["She gives money to charity every year.","她每年都捐錢給慈善團體。","give money to charity 是「捐錢做慈善」。every year 表示習慣，用現在簡單式。"],
 ["Our class is going to have a charity sale on Friday.","我們班星期五要舉辦義賣。","charity sale 是「義賣」。be going to + 原形，表示已經計畫好的事。"],
 ["This charity helps kids learn to read.","這個慈善團體幫助孩子學習閱讀。","help + 人 + 原形動詞：helps kids learn。learn to + 原形 read。"]],null,null,"💝|慈善"],
["raise","v.","募集（款項）；舉起",[
 ["We raised money for poor families.","我們為貧困家庭募款。","raise money 是「募款」。raise 字尾是 e，過去式加 d。"],
 ["Raise your hand if you have a question.","有問題的話請舉手。","raise 也有「舉起」的意思。祈使句用原形 Raise 開頭。"],
 ["They plan to raise money by selling cookies.","他們打算靠賣餅乾來募款。","plan to + 原形 raise。by + V-ing 表示「藉由……方法」：by selling。"]],null,null,"🙌|募款"],
["homeless","adj.","無家可歸的",[
 ["We cooked dinner for homeless people.","我們為街友煮了晚餐。","homeless people 是「無家可歸的人、街友」。cook 加 ed 變過去式。"],
 ["The charity helps homeless animals find new homes.","這個慈善團體幫無家可歸的動物找新家。","help + 受詞 + 原形動詞：helps homeless animals find。"],
 ["Thank you for giving the homeless dog some food.","謝謝你給那隻流浪狗一些食物。","thank you for + V-ing：for giving。home（家）+ less（沒有）＝沒有家的。"]],null,null,"🏚️|無家可歸"],
["support","v./n.","支持；支援",[
 ["My parents always support me.","我爸媽總是支持我。","always 放在一般動詞前面。support + 人，是「支持某人」。"],
 ["Thank you for your support.","謝謝你的支持。","support 在這裡當名詞。thank you for + 名詞。"],
 ["We should support local farmers.","我們應該支持在地的農夫。","should + 原形 support。local 是「當地的、在地的」。"]],null,null,"🤝|支持"],
["local","adj.","當地的；在地的",[
 ["I volunteer at a local hospital.","我在當地的一家醫院當志工。","local 是子音開頭，前面用 a。local 放在名詞前面修飾它。"],
 ["Buying local food is good for the environment.","買在地食物對環境好。","Buying local food 是動名詞片語當主詞，用 is。"],
 ["What's the local time in London now?","倫敦現在當地時間是幾點？","local time 是「當地時間」。What's 是 What is 的縮寫。"]],null,null,"📍|在地的"],
/* ---------- 自己動手做 ---------- */
["repair","v.","修理",[
 ["My dad can repair almost anything.","我爸爸幾乎什麼都會修。","can + 原形 repair。almost anything 是「幾乎任何東西」。"],
 ["He finished repairing the bike in an hour.","他一個小時就修好了腳踏車。","finish 後面要接 V-ing：finished repairing，不能說 finished to repair。"],
 ["Repairing old things saves money.","修理舊東西可以省錢。","Repairing old things 是動名詞片語當主詞，當作單數，所以 save 加 s。"]]],
["fix","v.","修理；修好",[
 ["Can you fix my computer?","你可以修我的電腦嗎？","fix 和 repair 意思差不多，fix 比較口語。"],
 ["I fixed the chair by myself.","我自己把椅子修好了。","by myself 是「自己一個人、靠自己」。fix 的過去式直接加 ed。"],
 ["She is good at fixing things.","她很會修理東西。","be good at 的 at 是介系詞，後面要接 V-ing：good at fixing。"]],null,null,"🔧|修好"],
["build","v.","建造；搭建",[
 ["Let's build a birdhouse together.","我們一起來做一個鳥屋吧。","Let's + 原形 build。birdhouse 是 bird + house，「鳥屋」。"],
 ["They built a small bridge over the river.","他們在河上蓋了一座小橋。","build 的過去式是不規則的 built。over the river 是「在河的上方」。"],
 ["Building model ships is his hobby.","做模型船是他的嗜好。","Building model ships 是動名詞片語當主詞，用 is。"]]],
["tool","n.","工具",[
 ["Put the tools back in the box.","把工具放回箱子裡。","put ... back 是「放回去」。祈使句用原形 Put 開頭。"],
 ["A hammer is a useful tool.","鐵鎚是很有用的工具。","useful 雖然是母音字母 u 開頭，但唸 /j/ 的子音，所以用 a。"],
 ["You need the right tools to fix it.","你需要對的工具才能修好它。","to + 原形 fix，表示目的「為了……」。"]]],
["hammer","n.","鐵鎚",[
 ["Can I borrow your hammer?","我可以借你的鐵鎚嗎？","borrow 是「借入」。Can I...? 用來請求許可。"],
 ["Be careful when you use a hammer.","用鐵鎚的時候要小心。","Be careful 是祈使句。when 後面接一個完整的句子。"],
 ["He hit the nail with a hammer.","他用鐵鎚敲釘子。","with + 工具，表示「用……」。hit 的過去式還是 hit。"]]],
["glue","n./v.","膠水；黏",[
 ["I need some glue for my art project.","我的美勞作業需要一些膠水。","glue 當名詞是不可數名詞，用 some glue。"],
 ["Glue the two pieces together.","把這兩片黏在一起。","glue 當動詞是「黏」。祈使句用原形 Glue 開頭。"],
 ["She fixed the cup with glue herself.","她自己用膠水把杯子黏好了。","herself 放在句尾，強調「她自己（親手）」做的。"]]],
["scissors","n.","剪刀",[
 ["These scissors are very sharp.","這把剪刀很利。","scissors 一定用複數，搭配 these 和 are。"],
 ["Can I use your scissors?","我可以用你的剪刀嗎？","Can I...? 用來請求許可。"],
 ["I need a pair of scissors to cut the paper.","我需要一把剪刀來剪紙。","一把剪刀要說 a pair of scissors（兩片刀刃成一對）。to + 原形 cut 表示目的。"]]],
["sew","v.","縫；縫紉",[
 ["My grandma taught me to sew.","我奶奶教我縫東西。","teach + 人 + to + 原形：taught me to sew。taught 是 teach 的過去式。"],
 ["I sewed the button back on my shirt myself.","我自己把襯衫的釦子縫回去了。","myself 放在句尾，強調「我自己」做的。sew 的過去式是 sewed。"],
 ["She is good at sewing. She made this bag herself.","她很會縫紉，這個包包是她自己做的。","be good at + V-ing：good at sewing。herself 強調是她自己做的。"]],null,null,"🧵|縫紉"],
["design","v./n.","設計",[
 ["She designed her own T-shirt.","她設計了自己的 T 恤。","design 的 g 不發音。her own 是「她自己的」。"],
 ["I'm interested in designing games.","我對設計遊戲有興趣。","be interested in 的 in 是介系詞，後面接 V-ing：in designing。"],
 ["I like the design of this chair.","我喜歡這張椅子的設計。","design 在這裡是名詞「設計」。the design of + 東西。"]],null,null,"✏️|設計"],
/* ---------- 興趣與專長 ---------- */
["skill","n.","技能；技巧",[
 ["Cooking is a useful skill.","做菜是一項有用的技能。","Cooking 是動名詞當主詞，用 is。useful 唸 /j/ 開頭，所以用 a。"],
 ["You can improve your skills by practicing every day.","你可以藉由每天練習來增進你的技巧。","介系詞 by 後面接 V-ing：by practicing。"],
 ["What skills do you want to learn?","你想學什麼技能？","want to + 原形 learn。What skills 問「什麼技能」。"]],null,null,"🛠️|技能"],
["talent","n.","天分；才能",[
 ["He has a talent for music.","他很有音樂天分。","have a talent for + 名詞 / V-ing，是「在……方面有天分」。"],
 ["Everyone has his or her own talents.","每個人都有自己的才能。","Everyone 當主詞是單數，所以用 has。"],
 ["Our school has a talent show every June.","我們學校每年六月都有才藝表演。","talent show 是「才藝表演」。"]],null,null,"🌟|天分"],
["interested","adj.","感興趣的",[
 ["I'm interested in learning Japanese.","我對學日文有興趣。","be interested in + 名詞 / V-ing。in 是介系詞，所以接 learning。"],
 ["Are you interested in volunteering with us?","你有興趣和我們一起當志工嗎？","be 動詞的疑問句：Are you interested in...?"],
 ["He isn't interested in sports.","他對運動沒興趣。","interested 用來形容「人覺得有興趣」；interesting 用來形容「事情很有趣」。"]],null,null,"🤩|感興趣"],
["be good at","v. phr.","擅長；很會",[
 ["I'm good at drawing.","我很會畫畫。","at 是介系詞，後面要接名詞或 V-ing：good at drawing。"],
 ["I want to be good at math, so I keep practicing.","我想要擅長數學，所以我持續練習。","want to 後面接原形，所以 be 動詞用原形 be：want to be good at。keep + V-ing 是「持續做」。"],
 ["What are you good at?","你擅長什麼？","問句把 be 動詞 are 移到 you 前面；What 是 at 的受詞，所以 at 留在句尾。"]],null,null,"💪|擅長"],
["craft","n.","手工藝；工藝",[
 ["Making crafts is my favorite hobby.","做手工藝是我最喜歡的嗜好。","Making crafts 是動名詞片語當主詞，當作單數，用 is。"],
 ["We sold our crafts at the charity sale.","我們在義賣會上賣自己做的手工藝品。","sold 是 sell 的過去式。charity sale 是「義賣」。"],
 ["I'm interested in learning paper crafts.","我對學紙藝有興趣。","be interested in + V-ing：in learning。paper craft 是「紙藝」。"]],null,null,"✂️|手工藝"],
["contest","n.","比賽；競賽",[
 ["She won first place in the singing contest.","她在歌唱比賽中得到第一名。","won 是 win 的過去式。first place 是「第一名」。singing contest 是「歌唱比賽」。"],
 ["Are you going to join the speech contest?","你要參加演講比賽嗎？","speech contest 是「演講比賽」。join 是「參加」。"],
 ["Thank you for joining our contest.","謝謝你參加我們的比賽。","thank you for + V-ing：for joining。"]],null,null,"🏁|比賽"],
["prize","n.","獎；獎品",[
 ["He got first prize in the art contest.","他在美術比賽得到首獎。","first prize 是「首獎、第一名」。"],
 ["The prize is a new bike.","獎品是一台新腳踏車。","The prize 是單數，用 is。"],
 ["I didn't win a prize, but I enjoyed myself.","我沒有得獎，但是我玩得很開心。","enjoy oneself 是「玩得很開心」，主詞是 I，所以用 myself。"]]],
["improve","v.","改善；進步",[
 ["Reading every day can improve your English.","每天閱讀可以提升你的英文。","Reading every day 是動名詞片語當主詞；can 後面接原形 improve。"],
 ["His drawing skills improved a lot this year.","他的繪畫技巧今年進步很多。","improve 也可以不接受詞，表示「進步」。"],
 ["What can we do to improve our community?","我們能做什麼來改善我們的社區？","to + 原形 improve，表示目的。"]],null,null,"📈|進步"],
["finish","v.","完成；做完",[
 ["Did you finish your homework?","你功課做完了嗎？","Did 開頭的疑問句，後面接原形 finish。"],
 ["I finished reading the book last night.","我昨晚把那本書讀完了。","finish 後面要接 V-ing：finished reading，不能說 finished to read。"],
 ["Let's go out after we finish cleaning.","我們打掃完再出去吧。","finish + V-ing：finish cleaning。after 後面接完整的句子。"]],null,null,"🏆|做完"],
["keep","v.","持續；保持",[
 ["Keep trying. Don't give up!","繼續努力，不要放棄！","keep + V-ing 表示「持續做某事」：keep trying。give up 是「放棄」。"],
 ["He kept talking during the movie.","他看電影的時候一直講話。","keep 的過去式是不規則的 kept。kept talking 是「一直講話」。"],
 ["Please keep the classroom clean.","請保持教室乾淨。","keep + 受詞 + 形容詞，表示「讓……保持某種狀態」。"]],null,null,"🔄|持續"],
["mind","v.","介意",[
 ["Do you mind opening the window?","你介意打開窗戶嗎？","mind 後面接 V-ing：mind opening。"],
 ["Would you mind waiting a minute? — Not at all.","你介意等一下嗎？——一點也不介意。","回答 Not at all. 或 No, I don't mind. 表示「不介意（可以）」。"],
 ["I don't mind helping you.","我不介意幫你。","否定句：don't + 原形 mind，後面還是接 V-ing：helping。"]],null,null,"🤔|介意"],
["quit","v.","放棄；戒掉；停止",[
 ["My uncle quit smoking last year.","我叔叔去年戒菸了。","quit 後面接 V-ing：quit smoking。quit 的過去式還是 quit。"],
 ["Don't quit! You can do it.","不要放棄！你做得到的。","Don't + 原形，是否定祈使句。"],
 ["She quit playing the piano because she was too busy.","她因為太忙，就不再彈鋼琴了。","quit + V-ing 表示「不再做某事」，和 stop + V-ing 意思接近。"]],null,null,"🛑|放棄"],
/* ---------- 反身代名詞 ---------- */
["myself","pron.","我自己",[
 ["I made this bookshelf myself.","這個書架是我自己做的。","myself 放在句尾，強調是「我自己」做的，不是別人幫忙。"],
 ["I hurt myself when I fell off the bike.","我從腳踏車上摔下來時弄傷了自己。","主詞 I 和受詞是同一個人，受詞要用反身代名詞 myself。"],
 ["I went to the night market by myself.","我自己一個人去逛夜市。","by myself = alone，「獨自一個人」。"]],null,null,"🙋|我自己"],
["yourself","pron.","你自己",[
 ["Help yourself to some cake.","蛋糕請自己來，別客氣。","Help yourself (to + 食物) 是招待客人時說的「請自己拿、別客氣」。"],
 ["Take care of yourself.","好好照顧你自己。","take care of 是「照顧」。對一個人說，用單數的 yourself。"],
 ["Did you make the poster yourself?","這張海報是你自己做的嗎？","yourself 放在句尾，強調「你自己」做的。"]],null,null,"🫵|你自己"],
["himself","pron.","他自己",[
 ["Tom taught himself to play the guitar.","湯姆自學吉他。","teach oneself 是「自學」。taught 是 teach 的過去式；主詞 Tom 是男生，用 himself。"],
 ["He looked at himself in the mirror.","他看著鏡子裡的自己。","主詞 He 和受詞是同一個人，用 himself。不能說 hisself。"],
 ["The little boy can dress himself now.","那個小男孩現在會自己穿衣服了。","dress oneself 是「自己穿衣服」。"]],null,null,"👦|他自己"],
["herself","pron.","她自己",[
 ["She fixed the bike herself.","她自己修好了腳踏車。","herself 放在句尾，強調「她自己」做的。"],
 ["Amy cut herself with the scissors.","艾美被剪刀割傷了。","主詞 Amy 和受詞是同一個人，用 herself。cut 的過去式還是 cut。"],
 ["My grandma lives by herself.","我奶奶一個人住。","by herself = alone，「獨自」。"]],null,null,"👧|她自己"],
["itself","pron.","它自己；牠自己",[
 ["The cat is cleaning itself.","那隻貓正在把自己舔乾淨。","動物或東西用 itself。主詞和受詞是同一隻貓。"],
 ["The door closed by itself.","門自己關上了。","by itself 是「自己（沒有人去動）」。"],
 ["The machine turns itself off at night.","這台機器晚上會自動關機。","turn ... off 中間放受詞 itself。主詞 The machine 是單數，turn 加 s。"]],null,null,"🐱|它自己"],
["ourselves","pron.","我們自己",[
 ["We built the tree house ourselves.","我們自己蓋了樹屋。","ourselves 放在句尾，強調「我們自己」做的。"],
 ["We enjoyed ourselves at the party.","我們在派對上玩得很開心。","enjoy oneself 是「玩得很開心」。enjoy 後面一定要有受詞，不能只說 We enjoyed.。"],
 ["Let's introduce ourselves.","我們來自我介紹吧。","Let's 包含 we，所以用 ourselves。introduce oneself 是「自我介紹」。"]],null,null,"👫|我們自己"],
["yourselves","pron.","你們自己",[
 ["Children, please help yourselves to the cookies.","孩子們，餅乾請自己拿喔。","對很多人說話，要用複數的 yourselves。"],
 ["Did you enjoy yourselves on the trip?","你們旅行玩得開心嗎？","問很多人「你們」，用 yourselves。"],
 ["You can do it yourselves. You don't need my help.","你們可以自己做，你們不需要我幫忙。","yourselves 字尾是 selves：self 的 f 變 v，再加 es。"]],null,null,"👥|你們自己"],
["themselves","pron.","他們自己",[
 ["The kids made the cards themselves.","孩子們自己做了這些卡片。","主詞 The kids 是複數，用 themselves。不能說 theirselves。"],
 ["They taught themselves to cook.","他們自學煮菜。","teach oneself to + 原形，是「自學做某事」。"],
 ["The students cleaned the classroom by themselves.","學生們自己把教室打掃乾淨了。","by themselves = 沒有人幫忙，靠他們自己。"]],null,null,"🧑‍🤝‍🧑|他們自己"],
/* ---------- 不定代名詞 ---------- */
["another","pron./adj.","另一個；再一個",[
 ["This cookie is delicious. Can I have another?","這片餅乾好好吃，我可以再吃一片嗎？","another 是「（三個以上之中的）另一個、再一個」，可以單獨當代名詞用。"],
 ["I don't like this shirt. Show me another one.","我不喜歡這件襯衫，拿另一件給我看。","another 後面可以接 one 或單數名詞。"],
 ["Let's try another way.","我們試試另一個方法吧。","another + 單數名詞：another way。another 就是 an + other，所以後面不能接複數。"]],null,null,"➕|另一個"],
["other","adj./pron.","其他的；另一個",[
 ["I have two brothers. One is a doctor, and the other is a cook.","我有兩個哥哥，一個是醫生，另一個是廚師。","兩個之中，一個用 one，另一個用 the other。"],
 ["Some students like reading; others like playing sports.","有些學生喜歡閱讀，其他一些則喜歡運動。","some ... others ... 是「有些……，有些……」，others = other students，不特定的其他一些人。"],
 ["Where are the other kids?","其他的孩子在哪裡？","the other + 複數名詞，是「剩下的、其他全部的……」。"]],null,null,"🔀|其他的"],
/* ---------- in- / im- 字首 ---------- */
["impossible","adj.","不可能的",[
 ["Nothing is impossible.","沒有不可能的事。","im- 是「不」：im + possible（可能的）= impossible（不可能的）。"],
 ["It's impossible to finish this in one day.","要在一天內做完這個是不可能的。","It is + 形容詞 + to + 原形，It 代替後面的 to finish...。"],
 ["Learning English is not impossible. Just keep practicing.","學英文不是不可能，只要持續練習。","Learning English 是動名詞片語當主詞；keep + V-ing：keep practicing。"]],null,null,"🚫|不可能"],
["incorrect","adj.","不正確的",[
 ["Your answer is incorrect. Try again.","你的答案不正確，再試一次。","in + correct（正確的）= incorrect（不正確的）。"],
 ["Two of the answers are incorrect.","其中兩個答案是錯的。","Two of the answers 是複數，用 are。"],
 ["Check your spelling. This word is incorrect.","檢查一下你的拼字，這個字拼錯了。","祈使句用原形 Check 開頭。"]],null,null,"❌|不正確"],
["independent","adj.","獨立的；自主的",[
 ["She is very independent. She can do everything by herself.","她很獨立，什麼事都可以自己做。","in + dependent（依賴的）= independent（不依賴別人的、獨立的）。by herself 是「靠她自己」。"],
 ["I want to be more independent.","我想要更獨立一點。","want to + 原形 be。more independent 是比較級。"],
 ["Living alone helps you become independent.","一個人住會幫助你變得獨立。","Living alone 是動名詞片語當主詞，所以 help 加 s。help + 人 + 原形 become。"]],null,null,"🧍|獨立"],
["impolite","adj.","不禮貌的",[
 ["It's impolite to talk with your mouth full.","嘴巴裡塞滿東西還講話是不禮貌的。","im + polite（有禮貌的）= impolite。It is + 形容詞 + to + 原形。"],
 ["Don't be impolite to the elderly.","不要對長輩不禮貌。","Don't be + 形容詞，是否定祈使句。the elderly 是「長者」。"],
 ["Pointing at people is impolite.","用手指著別人是不禮貌的。","Pointing at people 是動名詞片語當主詞，用 is。"]],null,null,"🙅|不禮貌"],
["impatient","adj.","不耐煩的；沒耐心的",[
 ["Don't be impatient. The bus is coming.","別不耐煩，公車快來了。","im + patient（有耐心的）= impatient。is coming 可以表示「即將到來」。"],
 ["He gets impatient when he waits in line.","他排隊的時候就會變得不耐煩。","get + 形容詞，表示「變得……」。wait in line 是「排隊」。"],
 ["She stopped being impatient with her little brother.","她不再對弟弟沒耐心了。","stop + V-ing 是「停止做某事」：stopped being。"]],null,null,"😤|不耐煩"],
/* ---------- -ly 副詞 ---------- */
["quickly","adv.","快速地",[
 ["He finished his lunch quickly.","他很快就吃完了午餐。","quick（快的）+ ly = quickly（快速地），副詞修飾動作 finished。"],
 ["Come here quickly!","快點過來！","副詞放在動詞後面或句尾。"],
 ["She quickly turned off the lights.","她很快地關掉燈。","副詞也可以放在一般動詞前面。"]],null,null,"💨|快速地"],
["carefully","adv.","小心地；仔細地",[
 ["Please read the questions carefully.","請仔細閱讀題目。","careful（小心的）+ ly = carefully，要寫兩個 l。"],
 ["He used the hammer carefully.","他小心地使用鐵鎚。","副詞 carefully 修飾動作 used。"],
 ["Listen carefully and repeat after me.","仔細聽，然後跟著我唸。","祈使句用原形 Listen 開頭，carefully 放在動詞後面。"]],null,null,"🔍|小心地"],
["easily","adv.","容易地；輕易地",[
 ["She solved the problem easily.","她輕鬆地解決了那個問題。","easy 字尾是子音 + y，要把 y 改成 i 再加 ly：easily。"],
 ["You can easily find the recycling bins on this street.","在這條街上你可以很容易找到回收桶。","副詞 easily 放在一般動詞 find 前面。"],
 ["He gets angry easily.","他很容易生氣。","get + 形容詞是「變得……」；easily 修飾整個動作。"]],null,null,"👌|容易地"],
["happily","adv.","快樂地",[
 ["The kids are playing happily in the park.","孩子們在公園裡快樂地玩耍。","happy 字尾是子音 + y，y 改成 i 再加 ly：happily。"],
 ["They lived happily ever after.","從此以後他們過著幸福快樂的日子。","這是童話故事常見的結尾。live 的過去式加 d。"],
 ["Grandpa smiled happily at us.","爺爺開心地對我們微笑。","副詞 happily 修飾動作 smiled。"]],null,null,"😄|快樂地"]
];

const J2_2_3_GRAMMAR = [
{ id:"g1", title:"動名詞 V-ing：當主詞、放在介系詞後面",
  intro:"動詞加上 -ing，除了用在進行式，還可以把「一個動作」變成「一件事」，當名詞用，這叫做動名詞。動名詞可以當句子的主詞（Reading is fun.），也可以放在介系詞後面（I'm good at drawing.）。",
  table:[["用法","結構","例句"],["當主詞","V-ing (+ 受詞) + 單數動詞","Reading is fun.／Collecting stamps is my hobby."],["be good at","擅長……","She is good at fixing things."],["be interested in","對……有興趣","I'm interested in designing games."],["thank you for","謝謝你……","Thank you for helping me."],["其他介系詞","How about、by、after、before、be afraid of + V-ing","We can save energy by turning off the lights."]],
  points:[
   "動名詞當主詞時，不管後面有幾個字，都當作「一件事」，所以是單數：Collecting stamps is fun.，不能用 are。",
   "原形動詞不能直接當主詞：Swim is fun. 是錯的，要說 Swimming is fun.（也可以說 To swim is fun.，但動名詞比較常用）。",
   "介系詞（at、in、for、of、about、by、after、before）後面接動詞時，一定要用 V-ing：be good at singing、thank you for coming。",
   "常見陷阱：be good at 後面不能接原形或 to V。She is good at draw. 和 She is good at to draw. 都是錯的。",
   "How about + V-ing? 用來提議：How about going hiking?；by + V-ing 表示「藉由……方法」：by taking the MRT。",
   "V-ing 的拼法和進行式一樣：字尾不發音的 e 去掉再加 ing（bake → baking），短母音 + 一個子音要重複字尾（swim → swimming）。"],
  ex:[
   ["Recycling is easy.","資源回收很簡單。","Recycling 是動名詞當主詞，用單數 is。"],
   ["Collecting old clothes for charity is meaningful.","為慈善團體收集舊衣很有意義。","主詞是一整串動名詞片語，還是當作單數，用 is。"],
   ["My dad is good at repairing bikes.","我爸爸很會修腳踏車。","be good at + V-ing。"],
   ["Thank you for donating these books.","謝謝你捐這些書。","thank you for + V-ing。"],
   ["We can reduce garbage by using our own bottles.","我們可以藉由使用自己的瓶子來減少垃圾。","介系詞 by 後面接 V-ing：by using。"]]},
{ id:"g2", title:"動詞後面接 V-ing 還是 to V？",
  intro:"兩個動詞連在一起時，第二個動詞要用 V-ing 還是 to + 原形，是由「前面那個動詞」決定的。有的動詞只接 V-ing，有的只接 to V，有的兩種都可以，還有像 stop 這種接法不同、意思也不同的動詞。",
  table:[["類型","常見動詞","例句"],["只接 V-ing","enjoy、finish、keep、mind、practice、quit","I enjoy baking.／Keep trying!"],["只接 to V","want、decide、hope、plan、need、would like","We decided to recycle more."],["兩種都可以（意思差不多）","like、love、start、begin、hate","I like reading. = I like to read."],["stop + V-ing","停止做（原本在做的事）","He stopped talking.（不講話了）"],["stop + to V","停下來，去做另一件事","He stopped to talk to me.（停下來跟我說話）"]],
  points:[
   "enjoy、finish、keep、mind、practice 後面只能接 V-ing：I enjoy reading.，不能說 enjoy to read。",
   "want、decide、hope、plan、need 後面只能接 to + 原形：She decided to join the club.，不能說 decided joining。",
   "like、love、start、begin 後面接 V-ing 或 to V 都可以，意思幾乎一樣：It started raining. = It started to rain.。",
   "stop 是常考陷阱！stop + V-ing＝停止做某事（不做了）；stop + to V＝停下手邊的事，去做另一件事。",
   "Would you mind + V-ing? 是禮貌的請求，意思是「你介意……嗎？」。願意幫忙時要回答 Not at all. 或 No, I don't mind.，不是 Yes。",
   "to V 的否定是 not to V：I decided not to go.；enjoy 的意思是「享受、喜歡做」，後面不能直接接原形動詞。"],
  ex:[
   ["My grandma enjoys knitting.","我奶奶很喜歡打毛線。","enjoy + V-ing。"],
   ["Did you finish fixing the chair?","你把椅子修好了嗎？","finish + V-ing；Did 後面用原形 finish。"],
   ["We plan to volunteer at the library.","我們計畫去圖書館當志工。","plan + to V。"],
   ["It began to rain. / It began raining.","開始下雨了。","begin 後面接 to V 或 V-ing 都可以。"],
   ["He stopped playing games and started studying.","他停止打電動，開始讀書。","stop + V-ing 是不再做；start 後面接 V-ing 或 to V 都可以。"]]},
{ id:"g3", title:"反身代名詞 myself、yourself……",
  intro:"當「做動作的人」和「被動作影響的人」是同一個人時，受詞要用反身代名詞，也就是「……自己」。反身代名詞也可以放在句尾，強調「是我自己做的，沒有別人幫忙」。",
  table:[["主詞","反身代名詞","例句"],["I","myself","I made it myself."],["you（一個人）／you（很多人）","yourself／yourselves","Help yourself.／Help yourselves."],["he／she／it","himself／herself／itself","He hurt himself."],["we","ourselves","We enjoyed ourselves."],["they","themselves","They did it by themselves."],["常用片語","by oneself（獨自、靠自己）、enjoy oneself（玩得開心）、help oneself（自己拿）、teach oneself（自學）","She lives by herself."]],
  points:[
   "主詞和受詞是同一個人時，一定要用反身代名詞：I hurt myself.（我弄傷自己），I hurt me. 是錯的。",
   "單數用 -self，複數用 -selves：ourselves、yourselves、themselves。you 可以是一個人（yourself）或很多人（yourselves），要看情境。",
   "拼字陷阱：他自己是 himself，不是 hisself；他們自己是 themselves，不是 theirselves。",
   "by oneself = alone，「獨自；靠自己」：My grandma lives by herself.",
   "enjoy oneself = have a good time，「玩得很開心」。enjoy 後面一定要有受詞，所以不能只說 We enjoyed.，要說 We enjoyed ourselves.。",
   "Help yourself (to + 食物). 是招待客人時說的「請自己拿，別客氣」；放在句尾的反身代名詞是強調用法，拿掉句子還是完整的：I made it (myself)."],
  ex:[
   ["I fixed my bike myself.","我自己修好了我的腳踏車。","myself 放在句尾，強調是我自己做的。"],
   ["Be careful! Don't cut yourself.","小心！別割傷自己。","祈使句的主詞是 you，所以用 yourself。"],
   ["She taught herself to play the piano.","她自學鋼琴。","teach oneself 是「自學」。"],
   ["We enjoyed ourselves at the charity sale.","我們在義賣會上玩得很開心。","enjoy oneself = have a good time。"],
   ["The children built the snowman by themselves.","孩子們自己堆了雪人。","by themselves 是「靠他們自己」。"]]},
{ id:"g4", title:"不定代名詞 one、another、the other、others",
  intro:"one、another、the other、others、the others 都可以用來說「一個、另一個、其他的」，差別在於「總共有幾個」和「是不是剩下的全部」。先數數看一共有幾個，再決定要用哪一個。",
  table:[["說法","意思","例句"],["one","同一類中不特定的一個","I lost my pen. I need to buy one."],["one ... the other ...","兩個之中，一個……另一個……","I have two cats. One is black, and the other is white."],["one ... another ... the other ...","三個之中，一個……另一個……最後一個……","One is red, another is blue, and the other is green."],["one ... the others ...","一個……其餘的全部……","One is red, and the others are blue."],["some ... others ...","有些……，有些……（不是全部）","Some people like tea; others like coffee."]],
  points:[
   "one 代替前面說過的「同類但不特定」的東西；it 代替「同一個」東西：I lost my umbrella. I need to buy one.（買一把新的）／I found it.（找到原來那一把）。",
   "兩個之中：一個是 one，另一個是 the other。the other 是「剩下的那一個」，所以一定要有 the。",
   "三個以上：「再一個、另一個（還有剩）」用 another；another = an + other，後面只能接單數名詞：another cookie，不能說 another cookies。",
   "the others = 剩下的「全部」，是複數；others = 其他「一些」（不是全部）。看到 some ... 就常用 others 接後面。",
   "other 是形容詞，後面要接名詞：other people、the other kids；others 本身就是代名詞，後面不能再接名詞，不能說 others people。",
   "解題技巧：先數一共有幾個 → 再看是不是剩下的全部 → 有 the 表示「特定、剩下的」，沒有 the 表示「不特定」。"],
  ex:[
   ["This bottle is empty. Can I have another one?","這瓶空了，可以再給我一瓶嗎？","再一個同類的東西，用 another。"],
   ["I have two hobbies. One is baking, and the other is singing.","我有兩個嗜好，一個是烘焙，另一個是唱歌。","兩個之中：one ... the other ...。"],
   ["There are five tools. One is a hammer, and the others are new.","這裡有五個工具，一個是鐵鎚，其他的都是新的。","剩下的全部用 the others（複數）。"],
   ["Some volunteers are cleaning; others are cooking.","有些志工在打掃，有些在煮飯。","some ... others ...，others = other volunteers。"],
   ["I don't like this color. Do you have other colors?","我不喜歡這個顏色，你們有其他顏色嗎？","other + 複數名詞，表示「其他的……」。"]]}
];

/* 文法測驗：[題目, [選項 x4], 正確答案索引, 解析, 文法編號] */
const J2_2_3_QUIZ = [
 ["___ is my favorite hobby.",["Swim","Swimming","Swims","Swam"],1,"主詞要用動名詞 Swimming，原形或加 s 的動詞都不能當主詞。","g1"],
 ["Reading comic books ___ fun.",["are","be","were","is"],3,"動名詞片語 Reading comic books 當主詞，當作「一件事」，用單數 is。不要被 books 騙了。","g1"],
 ["She is good at ___ pictures.",["drawing","draw","draws","to draw"],0,"be good at 的 at 是介系詞，後面要接 V-ing：good at drawing。","g1"],
 ["Thank you for ___ me with my homework.",["help","to help","helping","helps"],2,"thank you for 的 for 是介系詞，後面接 V-ing：for helping。","g1"],
 ["Are you interested in ___ a volunteer?",["be","being","to be","been"],1,"be interested in 的 in 是介系詞，後面接 V-ing；be 的 V-ing 是 being。","g1"],
 ["哪一句正確？",["Collect stamps is fun.","Collecting stamps are fun.","Collects stamps is fun.","Collecting stamps is fun."],3,"主詞要用動名詞 Collecting，而且動名詞片語當主詞是單數，用 is。","g1"],
 ["How about ___ to the beach this weekend?",["going","go","to go","goes"],0,"How about 的 about 是介系詞，後面接 V-ing：How about going...?","g1"],
 ["We can save energy by ___ the lights.",["turn off","to turn off","turning off","turned off"],2,"介系詞 by 後面接 V-ing：by turning off，表示「藉由關燈」。","g1"],
 ["My little brother is afraid of ___ alone at night.",["stay","staying","to stay","stays"],1,"be afraid of 的 of 是介系詞，後面接 V-ing：of staying。","g1"],
 ["I enjoy ___ cookies with my mom.",["bake","to bake","baking","baked"],2,"enjoy 後面只能接 V-ing：enjoy baking。","g2"],
 ["We decided ___ the beach this Saturday.",["to clean","cleaning","clean","cleaned"],0,"decide 後面只能接 to + 原形：decided to clean。","g2"],
 ["Did you finish ___ the bike?",["to fix","fix","fixed","fixing"],3,"finish 後面只能接 V-ing：finish fixing。","g2"],
 ["Would you mind ___ the window? It's hot in here.",["to open","opening","open","opened"],1,"mind 後面只能接 V-ing：mind opening。","g2"],
 ["She hopes ___ a prize in the contest.",["winning","win","to win","won"],2,"hope 後面接 to + 原形：hopes to win。","g2"],
 ["下面哪一個動詞，後面只能接 V-ing？",["enjoy","want","decide","hope"],0,"enjoy 只接 V-ing；want、decide、hope 都只接 to V。","g2"],
 ["Tom was tired, so he stopped ___ a rest.",["taking","take","takes","to take"],3,"他累了，所以「停下來去休息」，用 stop + to V。stopped taking a rest 是「不再休息」，意思相反。","g2"],
 ["It started ___, so we went inside.",["rain","raining","rained","rains"],1,"start 後面接 V-ing 或 to V 都可以，選項裡只有 raining 正確（也可以說 started to rain）。","g2"],
 ["I stopped ___ plastic bags. Now I bring my own bag.",["using","to use","use","used"],0,"現在自己帶袋子，表示「不再用」塑膠袋，用 stop + V-ing。","g2"],
 ["I made this cake ___.",["me","my","mine","myself"],3,"放在句尾強調「我自己」做的，用反身代名詞 myself。","g3"],
 ["Tom hurt ___ when he was playing basketball.",["him","himself","hisself","he"],1,"主詞 Tom 和受詞是同一個人，用 himself；英文沒有 hisself 這個字。","g3"],
 ["We enjoyed ___ at the party last night.",["ourselves","us","ourself","our"],0,"enjoy oneself 是「玩得很開心」，主詞 We 配 ourselves。","g3"],
 ["Help ___ to some fruit, Amy.",["yourselves","you","yourself","your"],2,"只對 Amy 一個人說，用單數 yourself。Help yourself. 是「請自己拿，別客氣」。","g3"],
 ["The kids cleaned the room by ___.",["theirselves","them","themself","themselves"],3,"by oneself 是「靠自己」，主詞 The kids 是複數，用 themselves；沒有 theirselves。","g3"],
 ["My grandma lives by herself. 這句話的意思是？",["她和家人一起住","她一個人住","她住在自己的房子","她喜歡住在鄉下"],1,"by herself = alone，「獨自一個人」。","g3"],
 ["Look at the cat. It's cleaning ___.",["it","its","itself","it's"],2,"主詞 It（貓）和受詞是同一隻貓，用 itself。","g3"],
 ["哪一句正確？",["She taught herself to swim.","She taught sheself to swim.","She taught herselves to swim.","She taught hers to swim."],0,"she 的反身代名詞是 herself；teach oneself 是「自學」。","g3"],
 ["Children, did you enjoy ___ at the zoo?",["yourself","you","your","yourselves"],3,"對很多小朋友說「你們」，要用複數 yourselves。","g3"],
 ["I lost my umbrella, so I need to buy ___.",["one","it","them","other"],0,"買一把「新的、不特定的」傘，用 one；用 it 會變成買「丟掉的那一把」。","g4"],
 ["I have two cats. One is black, and ___ is white.",["another","other","the other","others"],2,"兩個之中，一個用 one，另一個用 the other。","g4"],
 ["This shirt is too small. Can I try ___ one?",["other","another","the others","others"],1,"再試「另一件（還有很多件）」，用 another one。","g4"],
 ["There are five pens. One is red, and ___ are blue.",["another","others","other","the others"],3,"五枝筆扣掉一枝，剩下的四枝「全部」都是藍色，用 the others（複數，配 are）。","g4"],
 ["___ people like summer; others like winter.",["Some","One","Another","The other"],0,"some ... others ... 是「有些……，有些……」。","g4"],
 ["I have three hobbies. One is reading, ___ is cooking, and the other is singing.",["other","the others","another","others"],2,"三個之中：one ... another ... the other ...。中間那個還不是最後一個，用 another。","g4"],
 ["There are many students in the park. Some are running, and ___ are playing ball.",["other","others","another","the other"],1,"some ... others ...；others 是「其他一些人」，後面不接名詞，配 are。","g4"],
 ["I don't like this cup. Please show me ___.",["other","others","the others","another"],3,"再看「另一個」杯子，用 another，可以單獨當代名詞用。","g4"],
 ["哪一句正確？",["Can I have another cookies?","Can I have other cookie?","Can I have another cookie?","Can I have the others cookie?"],2,"another 後面接單數名詞：another cookie。other cookie 前面少了 the，要說 the other cookie（兩片中的另一片）；the others 後面不能再接名詞。","g4"]
];

/* =========================================================
   上課模式腳本（安安老師）
   say：老師講的話，{ } 裡面用英文語音唸
   board：黑板內容 [英文, [要標亮的字], 是否為錯誤示範]
   chant：口訣
   ask：隨堂提問，答錯會有針對性的回饋，再給一題 again 練習
   ========================================================= */
const J2_2_3_CLASS = {
g1:[
 {say:"哈囉同學！我是安安老師。國二最後一次期末考，我們從「動名詞」開始！你有什麼興趣？游泳？看書？英文要把「游泳」這個動作變成「一件事」，就在動詞後面加 <<ing>>：{swimming}、{reading}。", board:[["swim → swimming",["swimming"]],["read → reading",["reading"]]]},
 {say:"動詞加了 ing 變成名詞，就叫做動名詞。它可以站在句子最前面當主詞：{Reading is fun.} 閱讀很有趣。{Recycling is easy.} 資源回收很簡單。", board:[["Reading is fun.",["Reading"]],["Recycling is easy.",["Recycling"]]]},
 {say:"注意喔！原形動詞不能直接當主詞。{Swim is fun.} 是錯的，要說 {Swimming is fun.}", board:[["Swim is fun.",[],true],["Swimming is fun.",["Swimming"]]]},
 {say:"跟著老師唸口訣！", chant:"動作要當主詞，記得加 ing！"},
 {ask:{q:"___ is my favorite sport.", opts:["Swim","Swimming","Swims"], ans:1,
   ok:"答對！主詞要用動名詞 Swimming。",
   bad:{0:"Swim 是原形動詞，不能直接當主詞，要加 ing 喔！",2:"Swims 是動詞加 s，還是動詞，不能當主詞。"},
   again:{q:"___ the earth is everyone's job.", opts:["Protecting","Protect","Protects"], ans:0, exp:"主詞要用動名詞 Protecting。"}}},
 {say:"第二個重點：動名詞當主詞，不管後面多長，都當作「一件事」，所以是單數！{Collecting stamps is fun.} 雖然 stamps 是複數，但主詞是「集郵這件事」，所以用 is。", board:[["Collecting stamps is fun.",["Collecting","is"]],["Collecting stamps are fun.",[],true]]},
 {say:"這個陷阱考試超愛考，口訣記起來！", chant:"V-ing 當主詞，一件事情用單數！"},
 {ask:{q:"Picking up litter on the beach ___ a lot of work.", opts:["are","is","be"], ans:1,
   ok:"太棒了！主詞是「撿垃圾這件事」，一件事用單數 is。",
   bad:{0:"被 litter 或 beach 騙了嗎？主詞是 Picking up...，一件事情用單數。",2:"句子裡的動詞要跟主詞配合，be 要變成 is。"},
   again:{q:"Making cards for the elderly ___ fun.", opts:["is","are","be"], ans:0, exp:"主詞 Making cards... 是一件事，用單數 is。"}}},
 {say:"第三個重點：介系詞後面如果要接動作，一定要用 V-ing！最常考的三個：{be good at}、{be interested in}、{thank you for}。", board:[["She is good at fixing things.",["at","fixing"]],["I'm interested in designing games.",["in","designing"]],["Thank you for helping me.",["for","helping"]]]},
 {say:"at、in、for 都是介系詞。介系詞就像一扇門，動詞要穿上 ing 的衣服才能走進去！所以 {She is good at draw.} 和 {She is good at to draw.} 都不行。", board:[["She is good at draw.",[],true],["She is good at to draw.",[],true],["She is good at drawing.",["drawing"]]]},
 {say:"口訣唸三遍！", chant:"介系詞後面接動作，V-ing 不會錯！"},
 {ask:{q:"Thank you for ___ your old books.", opts:["donate","to donate","donating"], ans:2,
   ok:"答對！for 是介系詞，後面接 donating。",
   bad:{0:"for 是介系詞，後面的動作要加 ing，不能用原形。",1:"for 後面不能接 to V，要用 V-ing。"},
   again:{q:"Are you interested in ___ stamps?", opts:["collecting","collect","to collect"], ans:0, exp:"in 是介系詞，後面接 V-ing：collecting。"}}},
 {say:"還有幾個常見的介系詞用法也一起記：{How about going hiking?} 提議「去健行怎麼樣？」；{by taking the MRT}「藉由搭捷運」；{after eating}「吃完飯後」。", board:[["How about going hiking?",["about","going"]],["We can save energy by turning off the lights.",["by","turning"]]]},
 {ask:{say:"最後一題，挑戰看看！", q:"哪一句正確？", opts:["He is good at repair bikes.","He is good at repairing bikes.","He good at repairing bikes."], ans:1,
   ok:"完美！be 動詞 is 有了，at 後面也接了 V-ing。",
   bad:{0:"at 是介系詞，後面要接 repairing。",2:"少了 be 動詞 is 喔！be good at 三個零件都要有。"},
   again:{q:"How about ___ cookies for the charity sale?", opts:["bake","baking","to bake"], ans:1, exp:"about 是介系詞，後面接 V-ing：baking。"}}},
 {say:"恭喜你學會動名詞！複習一下：動作要當主詞，記得加 ing；V-ing 當主詞，一件事情用單數；介系詞後面接動作，V-ing 不會錯。下一課，我們來比較 V-ing 和 to V！", end:true}
],
g2:[
 {say:"同學好！今天要解決一個大問題：兩個動詞連在一起的時候，第二個動詞要用 V-ing 還是 to V？答案是：看前面那個動詞！", board:[["I enjoy baking.",["enjoy","baking"]],["I want to bake.",["want","to bake"]]]},
 {say:"第一組，只接 V-ing 的動詞：{enjoy} 喜歡、{finish} 完成、{keep} 持續、{mind} 介意、{practice} 練習。這些動詞都表示「已經在做、正在做」的事。", board:[["enjoy / finish / keep / mind / practice + V-ing",["enjoy","finish","keep","mind","practice"]],["Keep trying!",["Keep","trying"]]]},
 {say:"老師幫你編了一句口訣，把它們串起來！", chant:"享受完成不停練，介意後面 ing！"},
 {ask:{q:"My mom enjoys ___ old jars.", opts:["reusing","to reuse","reuse"], ans:0,
   ok:"答對！enjoy 後面只能接 V-ing。",
   bad:{1:"enjoy 後面不能接 to V，要接 reusing。",2:"enjoys 後面不能直接接原形動詞喔。"},
   again:{q:"Did you finish ___ the bike?", opts:["to fix","fixing","fix"], ans:1, exp:"finish 後面接 V-ing：finish fixing。"}}},
 {say:"第二組，只接 to V 的動詞：{want} 想要、{decide} 決定、{hope} 希望、{plan} 計畫、{need} 需要。這些動詞都在說「還沒做、打算要做」的事，to 就像一個箭頭，指向未來！", board:[["want / decide / hope / plan / need + to V",["want","decide","hope","plan","need"]],["We decided to recycle more.",["decided","to recycle"]]]},
 {say:"口訣來囉！", chant:"想要決定希望計畫，to 後面接原形！"},
 {ask:{q:"We plan ___ at the nursing home.", opts:["volunteering","volunteer","to volunteer"], ans:2,
   ok:"太好了！plan 後面接 to V：plan to volunteer。",
   bad:{0:"plan 是「計畫」，還沒做的事，要接 to V，不是 V-ing。",1:"plan 後面要先有 to，才能接原形 volunteer。"},
   again:{q:"She hopes ___ first prize.", opts:["to win","winning","win"], ans:0, exp:"hope 後面接 to + 原形：hopes to win。"}}},
 {say:"第三組最輕鬆：{like}、{love}、{start}、{begin} 兩種都可以，意思幾乎一樣。{It started raining.} 和 {It started to rain.} 都對！", board:[["It started raining.",["started","raining"]],["It started to rain.",["started","to rain"]],["I like reading. = I like to read.",["reading","to read"]]]},
 {say:"最後是考試最愛的 stop！{stop + V-ing} 是「停止做某事」，不做了。{stop + to V} 是「停下手邊的事，去做另一件事」。", board:[["He stopped talking.（不說話了）",["stopped talking"]],["He stopped to talk to me.（停下來跟我說話）",["stopped to talk"]]]},
 {say:"stop 的口訣！", chant:"stop 加 ing 不做了，stop 加 to 去做它！"},
 {ask:{q:"Ben was walking. He saw his teacher, so he stopped ___ hello.", opts:["saying","to say","say"], ans:1,
   ok:"答對！他停下腳步，「去」打招呼，用 stop to V。",
   bad:{0:"stopped saying hello 是「不再打招呼」，意思不對喔！",2:"stopped 後面不能直接接原形 say。"},
   again:{q:"I stopped ___ plastic straws. Now I use paper ones.", opts:["to use","using","use"], ans:1, exp:"現在改用紙吸管，表示「不再用」塑膠吸管：stopped using。"}}},
 {say:"補充一個禮貌用法：{Would you mind opening the window?} 你介意開窗嗎？mind 後面接 V-ing。如果你願意幫忙，要回答 {Not at all.}（一點也不介意），千萬不要回答 Yes，Yes 是「我很介意」喔！", board:[["Would you mind opening the window?",["mind","opening"]],["Not at all. / No, I don't mind.",["Not at all"]]]},
 {ask:{say:"最後一題！", q:"哪一句正確？", opts:["I decided joining the club.","I enjoy to play chess.","I finished cleaning my room."], ans:2,
   ok:"完美！finish 後面接 V-ing。",
   bad:{0:"decide 要接 to V：decided to join。",1:"enjoy 要接 V-ing：enjoy playing。"},
   again:{q:"哪一句正確？", opts:["Would you mind turning off the TV?","Would you mind to turn off the TV?","Would you mind turn off the TV?"], ans:0, exp:"mind 後面接 V-ing：mind turning off。"}}},
 {say:"V-ing 和 to V 搞定了！複習口訣：享受完成不停練，介意後面 ing；想要決定希望計畫，to 後面接原形；stop 加 ing 不做了，stop 加 to 去做它！", end:true}
],
g3:[
 {say:"同學好！今天來學「自己」。你有沒有自己做過一個東西？英文要說「我自己做的」，就說 {I made it myself.} myself 就是「我自己」。", board:[["I made it myself.",["myself"]]]},
 {say:"這種「……自己」的字，叫做反身代名詞。來看全家福：單數加 <<self>>，複數加 <<selves>>。", board:[["I → myself　you → yourself",["myself","yourself"]],["he → himself　she → herself　it → itself",["himself","herself","itself"]],["we → ourselves　you → yourselves　they → themselves",["ourselves","yourselves","themselves"]]]},
 {say:"跟老師唸口訣！", chant:"一個人用 self，很多人用 selves！"},
 {say:"什麼時候要用反身代名詞？當「做動作的人」和「被影響的人」是同一個人。{I hurt myself.} 我弄傷的是我自己。如果說 {I hurt me.} 就錯了。", board:[["I hurt myself.",["I","myself"]],["I hurt me.",[],true]]},
 {ask:{q:"Tom fell and hurt ___.", opts:["him","himself","hisself"], ans:1,
   ok:"答對！Tom 弄傷的是他自己，用 himself。",
   bad:{0:"him 會變成弄傷「別的男生」。主詞和受詞是同一個人，要用 himself。",2:"英文沒有 hisself 這個字喔！他自己是 himself。"},
   again:{q:"The kids made the cards ___.", opts:["themselves","theirselves","them"], ans:0, exp:"they 的反身代名詞是 themselves，沒有 theirselves。"}}},
 {say:"小心兩個拼字陷阱！他自己是 {himself}，不是 hisself；他們自己是 {themselves}，不是 theirselves。", board:[["hisself",[],true],["himself",["himself"]],["theirselves",[],true],["themselves",["themselves"]]]},
 {say:"還有 you！對一個人說是 {yourself}，對很多人說是 {yourselves}。老師對全班說：{Children, help yourselves.}", board:[["Amy, help yourself.",["yourself"]],["Children, help yourselves.",["yourselves"]]]},
 {ask:{q:"媽媽對來家裡玩的三個同學說：「Please help ___ to the cake.」", opts:["yourself","yourselves","you"], ans:1,
   ok:"太棒了！三個同學是很多人，用 yourselves。",
   bad:{0:"yourself 是對一個人說的，這裡有三個同學喔！",2:"招待客人「自己拿」的固定說法是 help yourself / yourselves。"},
   again:{q:"Be careful, Ben! Don't cut ___.", opts:["yourself","yourselves","you"], ans:0, exp:"只對 Ben 一個人說，用 yourself。"}}},
 {say:"最後是四個超常考的片語：{by oneself} 獨自、靠自己；{enjoy oneself} 玩得很開心；{help oneself} 自己拿；{teach oneself} 自學。oneself 要跟著主詞換。", board:[["My grandma lives by herself.",["by herself"]],["We enjoyed ourselves.",["enjoyed ourselves"]],["Tom taught himself to cook.",["taught himself"]]]},
 {say:"enjoy 要特別注意！enjoy 後面一定要有東西，所以「我們玩得很開心」不能只說 We enjoyed.，要說 {We enjoyed ourselves.}", chant:"玩得開心 enjoy 自己，by 自己就是一個人！", board:[["We enjoyed.",[],true],["We enjoyed ourselves.",["ourselves"]]]},
 {ask:{q:"I went to the movies by myself. 意思是？", opts:["我和我自己的家人去看電影","我一個人去看電影","我自己買了電影票"], ans:1,
   ok:"答對！by myself = alone，獨自一個人。",
   bad:{0:"by myself 是「獨自、沒有別人陪」，不是和家人去。",2:"by myself 說的是「一個人去」，跟誰買票沒有關係。"},
   again:{q:"Did you enjoy ___ at the party, Amy?", opts:["yourself","you","your"], ans:0, exp:"enjoy oneself 是玩得開心，對 Amy 一個人說，用 yourself。"}}},
 {ask:{say:"最後一題！", q:"哪一句正確？", opts:["She taught herself to swim.","She taught sheself to swim.","She taught herselves to swim."], ans:0,
   ok:"完美！she 的反身代名詞是 herself。",
   bad:{1:"沒有 sheself 這個字，她自己是 herself。",2:"she 是一個人，用 -self，不是 -selves。"},
   again:{q:"The door closed by ___.", opts:["it","itself","its"], ans:1, exp:"門自己關上了，東西用 itself。"}}},
 {say:"反身代名詞學會了！口訣：一個人用 self，很多人用 selves；玩得開心 enjoy 自己，by 自己就是一個人。記得 himself、themselves 不要拼錯喔！", end:true}
],
g4:[
 {say:"同學好！今天的主角是「另一個」。英文的「另一個」有好幾種說法：{another}、{the other}、{others}、{the others}。到底要用哪一個？秘訣是：先數數看一共有幾個！", board:[["one / another / the other / others / the others",["another","the other","others","the others"]]]},
 {say:"先學 {one}。one 用來代替「同一類、但不特定」的東西。我的傘丟了，要買一把新的：{I lost my umbrella. I need to buy one.} 如果是找到原來那一把，才用 it：{I found it.}", board:[["I need to buy one.（一把新的）",["one"]],["I found it.（原來那一把）",["it"]]]},
 {ask:{q:"I don't have a pen. Can you lend me ___?", opts:["it","one","other"], ans:1,
   ok:"答對！借「一枝筆」，不特定哪一枝，用 one。",
   bad:{0:"it 是指「特定的那一枝」，可是前面沒有說過是哪一枝筆喔。",2:"other 是形容詞，後面要接名詞，不能單獨用。"},
   again:{q:"This is my new bike. I love ___.", opts:["it","one","another"], ans:0, exp:"指的是「這一台」特定的腳踏車，用 it。"}}},
 {say:"只有兩個的時候：一個用 {one}，另一個用 {the other}。因為只剩一個了，是特定的，所以要加 the！", board:[["I have two cats.",["two"]],["One is black, and the other is white.",["One","the other"]]]},
 {say:"口訣唸一次！", chant:"兩個之中，one 和 the other！"},
 {say:"三個以上：「另一個、再一個（還有剩）」用 {another}。another 就是 an + other，所以後面只能接單數。三個的時候可以說：{One is red, another is blue, and the other is green.}", board:[["One is red, another is blue, and the other is green.",["One","another","the other"]],["another cookies",[],true],["another cookie",["another"]]]},
 {ask:{q:"This cookie is so good! Can I have ___ one?", opts:["other","the other","another"], ans:2,
   ok:"太棒了！餅乾還有很多，「再一片」用 another。",
   bad:{0:"other 前面要有 the 或其他限定詞才能接 one，這裡用 another 最自然。",1:"the other 是「兩個之中剩下的那一個」，可是盤子裡還有很多餅乾喔。"},
   again:{q:"I have three hobbies. One is reading, ___ is cooking, and the other is singing.", opts:["another","the other","others"], ans:0, exp:"三個之中，中間那個還不是最後一個，用 another。"}}},
 {say:"剩下的「全部」，用 {the others}，是複數。五枝筆，一枝紅的，其他四枝全部藍的：{One is red, and the others are blue.}", board:[["There are five pens.",["five"]],["One is red, and the others are blue.",["One","the others","are"]]]},
 {say:"如果不是全部，只是「其他一些」，就用沒有 the 的 {others}。最常見的是 {some ... others ...}：{Some people like summer; others like winter.} 有些人喜歡夏天，有些人喜歡冬天，還有人可能都不喜歡。", board:[["Some people like summer; others like winter.",["Some","others"]]]},
 {say:"整理成口訣！", chant:"有 the 是剩下的，沒 the 是不一定的！"},
 {ask:{q:"There are ten students. Two are singing, and ___ are dancing.（其他八個全部在跳舞）", opts:["others","the others","another"], ans:1,
   ok:"答對！剩下的八個「全部」，用 the others。",
   bad:{0:"others 是「其他一些」，不是全部。題目說其他八個全部在跳舞，要用 the others。",2:"another 是「另一個」，只能接單數，這裡是八個人。"},
   again:{q:"Some kids like cats; ___ like dogs.", opts:["others","the other","another"], ans:0, exp:"some ... others ...，有些……，有些……。"}}},
 {say:"最後提醒一個陷阱：{other} 是形容詞，後面要接名詞，例如 {other people}；{others} 本身就是代名詞，後面不能再接名詞，不能說 others people。", board:[["other people",["other"]],["others",["others"]],["others people",[],true]]},
 {ask:{say:"最後一題！", q:"I have two brothers. One lives in Taipei, and ___ lives in Kaohsiung.", opts:["another","the other","others"], ans:1,
   ok:"完美！兩個之中的另一個，用 the other。",
   bad:{0:"another 用在三個以上，這裡只有兩個哥哥喔。",2:"others 是複數的「其他一些」，這裡只剩一個人。"},
   again:{q:"There are three apples. One is red, ___ is green, and the other is yellow.", opts:["another","the others","others"], ans:0, exp:"三個之中：one ... another ... the other ...。"}}},
 {say:"不定代名詞完成！記住：先數有幾個；兩個之中，one 和 the other；三個以上再一個用 another；有 the 是剩下的，沒 the 是不一定的。期末考加油！", end:true}
]};

Object.assign(PH, {
  recycle:"r:c e:long_e c:soft_c y:y_ai c:c le:le", plastic:"pl:blend a:short_a s:c t:c i:short_i c:c", bottle:"b:c o:short_o tt:double le:le",
  environment:"e:schwa n:c v:c i:long_i r:c o:schwa n:c m:c e:schwa n:c t:c", bin:"b:c i:short_i n:c",
  pollution:"p:c o:schwa ll:double u:long_u tion:tion", garbage:"g:c ar:ar b:c a:schwa g:soft_g e:silent",
  reuse:"r:c e:long_e u:u_e s:s_z e:silent_e", reduce:"r:c e:schwa d:c u:u_e c:soft_c e:silent_e", "throw away":"th:th r:c ow:ow_o _:space a:schwa w:c ay:ay",
  earth:"ear:exc th:th", nature:"n:c a:long_a ture:exc", protect:"pr:blend o:schwa t:c e:short_e c:c t:c", straw:"str:blend aw:aw",
  unplug:"u:short_u n:c pl:blend u:short_u g:c", electricity:"e:schwa l:c e:short_e c:c tr:blend i:short_i c:soft_c i:schwa t:c y:y_i",
  litter:"l:c i:short_i tt:double er:er", ocean:"o:long_o cea:exc n:c",
  volunteer:"v:c o:short_o l:c u:schwa n:c t:c ee:ee r:c", community:"c:c o:schwa mm:double u:long_u n:c i:schwa t:c y:y_i",
  donate:"d:c o:long_o n:c a:a_e t:c e:silent_e", elderly:"e:short_e l:c d:c er:er l:c y:y_i", neighbor:"n:c eigh:exc b:c or:schwa_r",
  charity:"ch:ch a:short_a r:c i:schwa t:c y:y_i", raise:"r:c ai:ai s:s_z e:silent", homeless:"h:c o:long_o m:c e:silent l:c e:schwa ss:double",
  support:"s:c u:schwa pp:double or:or t:c", local:"l:c o:long_o c:c a:schwa l:c",
  repair:"r:c e:schwa p:c air:air", fix:"f:c i:short_i x:x_ks", build:"b:c u:silent i:short_i l:c d:c", tool:"t:c oo:oo_l l:c",
  hammer:"h:c a:short_a mm:double er:er", glue:"gl:blend ue:ue", scissors:"s:c c:silent i:short_i ss:exc or:schwa_r s:s_z",
  sew:"s:c ew:exc", design:"d:c e:schwa s:s_z i:long_i g:silent n:c",
  skill:"sk:blend i:short_i ll:double", talent:"t:c a:short_a l:c e:schwa n:c t:c", interested:"i:short_i n:c t:c er:er e:schwa s:c t:c ed:ed_id",
  "be good at":"b:c e:long_e _:space g:c oo:oo_s d:c _:space a:short_a t:c", craft:"cr:blend a:short_a f:c t:c",
  contest:"c:c o:short_o n:c t:c e:short_e s:c t:c", prize:"pr:blend i:i_e z:c e:silent_e", improve:"i:short_i m:c pr:blend o:exc v:c e:silent",
  finish:"f:c i:short_i n:c i:short_i sh:sh", keep:"k:c ee:ee p:c", mind:"m:c i:long_i n:c d:c", quit:"qu:qu i:short_i t:c",
  myself:"m:c y:y_ai s:c e:short_e l:c f:c", yourself:"y:c our:exc s:c e:short_e l:c f:c", himself:"h:c i:short_i m:c s:c e:short_e l:c f:c",
  herself:"h:c er:er s:c e:short_e l:c f:c", itself:"i:short_i t:c s:c e:short_e l:c f:c",
  ourselves:"ou:ou r:c s:c e:short_e l:c v:c e:silent s:s_z", yourselves:"y:c our:exc s:c e:short_e l:c v:c e:silent s:s_z",
  themselves:"th:th_v e:schwa m:c s:c e:short_e l:c v:c e:silent s:s_z",
  another:"a:schwa n:c o:o_uh th:th_v er:er", other:"o:o_uh th:th_v er:er",
  impossible:"i:short_i m:c p:c o:short_o ss:double i:schwa b:c le:le", incorrect:"i:short_i n:c c:c o:schwa rr:double e:short_e c:c t:c",
  independent:"i:short_i n:c d:c e:schwa p:c e:short_e n:c d:c e:schwa n:c t:c", impolite:"i:short_i m:c p:c o:schwa l:c i:i_e t:c e:silent_e",
  impatient:"i:short_i m:c p:c a:long_a ti:exc e:schwa n:c t:c",
  quickly:"qu:qu i:short_i ck:ck l:c y:y_i", carefully:"c:c are:are ful:ful l:c y:y_i", easily:"ea:ea s:s_z i:schwa l:c y:y_i",
  happily:"h:c a:short_a pp:double i:schwa l:c y:y_i"
});
Object.assign(EXC_NOTE, {
  sew:"sew 的 ew 不唸「嗚」，要唸長 o /oʊ/，和 so 唸法一樣，是例外。",
  earth:"ear 一般唸 /ɪr/（像 ear 耳朵），但在 earth、learn、early 裡唸捲舌的 /ɝ/，和 bird 的 ir 一樣，要特別記。",
  nature:"字尾的 ture 唸 /tʃɚ/，像「去兒」，不是一個字母一個字母唸。picture、future 的 ture 也是這樣唸。",
  ocean:"ocean 的 c 在這裡唸 /ʃ/（像「噓」），cea 合起來唸 /ʃən/，不唸 /s/，是例外。",
  neighbor:"eigh 唸字母名 A /eɪ/，gh 不發音。eight、weigh 也是這樣唸。",
  scissors:"開頭的 sc 只唸 /s/，c 不發音；中間的 ss 卻唸 /z/，不唸 /s/，是例外，要特別記。",
  improve:"improve 的 o 唸長長的「嗚」/uː/，跟 move、prove 一樣，不唸「歐」。",
  yourself:"your 在這裡常唸 /jɚ/（像「爺兒」，輕輕帶過），重音在後面的 self。",
  yourselves:"your 在這裡常唸 /jɚ/，輕輕帶過；重音在 selves。selves 的 f 變成 v，字尾 es 唸 /z/。",
  impatient:"tient 裡的 ti 唸 /ʃ/（像「噓」），patient 唸 /ˈpeɪʃənt/。和 -tion 的 ti 唸法很像。"
});

/* ---------- 4 堂自然發音課（安安老師） ---------- */
const J2_2_3_PHONICS = [
  {id:"p1", title:"字首 in- / im-：變成相反的意思"},
  {id:"p2", title:"副詞字尾 -ly：quickly、carefully、easily"},
  {id:"p3", title:"-self 和 -selves：f 變 v 的唸法"},
  {id:"p4", title:"句子重音：內容字重讀、功能字輕讀"}
];
const J2_2_3_PHONICS_CLASS = {
p1:[
 {say:"同學好！今天教你一個「變身魔法」：在形容詞前面加上 <<in>> 或 <<im>>，意思就會變成相反！{correct} 是正確的，加上 in 變成 {incorrect}，不正確的。", board:[["correct → incorrect",["in"],false,true],["possible → impossible",["im"],false,true]]},
 {say:"這個字首的意思就是「不」。來看更多例子：{independent} 不依賴別人的，就是獨立的；{impolite} 不禮貌的；{impatient} 沒耐心的。", board:[["in + dependent = independent",["in"],false,true],["im + polite = impolite",["im"],false,true],["im + patient = impatient",["im"],false,true]]},
 {say:"跟著老師唸口訣！", chant:"in 和 im 放前面，意思馬上翻個面！"},
 {ask:{q:"possible 是「可能的」，那「不可能的」是？", opts:["unpossible","impossible","inpossible"], ans:1,
   ok:"答對！impossible，不可能的。",
   bad:{0:"un 也是「不」的字首，但 possible 要搭配 im 喔。",2:"p 開頭的字要用 im，不是 in。下一步老師會教你為什麼！"},
   again:{q:"correct 是「正確的」，那「不正確的」是？", opts:["incorrect","imcorrect","uncorrect"], ans:0, exp:"c 開頭的字用 in：incorrect。"}}},
 {say:"什麼時候用 im，什麼時候用 in？秘密在嘴巴！ <<p>>、<<b>>、<<m>> 這三個音都要先把嘴唇閉起來。im 的 m 也是閉嘴唇的音，所以 p、b、m 開頭的字前面用 im，唸起來最順。", board:[["im + p：impossible　impolite　impatient",["imp","imp","imp"],false,true],["其他字母：incorrect　independent",["in","in"],false,true]]},
 {say:"這個規則也有口訣！", chant:"p、b、m 嘴巴閉，前面就用 im！"},
 {ask:{q:"patient（有耐心的）的相反詞是？", opts:["inpatient","unpatient","impatient"], ans:2,
   ok:"太棒了！p 開頭，用 im：impatient。",
   bad:{0:"p 是閉嘴唇的音，要配 im，不是 in。",1:"patient 的相反詞要用 im，不是 un。"},
   again:{q:"dependent（依賴的）的相反詞是？", opts:["imdependent","independent","undependent"], ans:1, exp:"d 不是 p、b、m，所以用 in：independent。"}}},
 {say:"怎麼唸？字首 in 和 im 都唸短 i <<i>>，輕輕的。重音通常不在字首，而是在原來那個字的重音上：{im-POS-si-ble}、{in-cor-RECT}、{im-pa-tient}。", board:[["im‧POS‧si‧ble",["POS"],false,true],["in‧cor‧RECT",["RECT"],false,true],["im‧PA‧tient",["PA"],false,true]]},
 {say:"注意！不是每個 in 開頭的字都是「不」的意思喔。{inside} 是裡面，{interested} 是感興趣的，{important} 是重要的，這些字的 in、im 不是「不」。", board:[["inside　interested　important",["in","in","im"],false,true],["→ 這些不是「不」的意思！",[],false,true]]},
 {ask:{q:"下面哪一個字的 in / im 表示「不」？", opts:["inside","important","incorrect"], ans:2,
   ok:"答對！incorrect = in + correct，不正確的。",
   bad:{0:"inside 是「裡面」，in 不是「不」的意思。",1:"important 是「重要的」，不是「不 portant」喔！"},
   again:{q:"下面哪一個字的 im 表示「不」？", opts:["impolite","important","improve"], ans:0, exp:"impolite = im + polite，不禮貌的。"}}},
 {say:"考試也常考：拿掉字首，就能猜出意思。看到 {impossible}，先遮住 im，看到 possible，可能的，再翻成相反，就是不可能的！", chant:"遮住字首猜意思，再把意思翻過來！"},
 {ask:{say:"最後一題！", q:"「這個答案不正確。」英文要怎麼說？", opts:["This answer is incorrect.","This answer is imcorrect.","This answer is uncorrect."], ans:0,
   ok:"完美！correct 的相反是 incorrect。",
   bad:{1:"c 不是 p、b、m，所以用 in，不是 im。",2:"correct 的相反詞要用 in，不是 un。"},
   again:{q:"「別沒有耐心。」英文要怎麼說？", opts:["Don't be inpatient.","Don't be impatient.","Don't be unpatient."], ans:1, exp:"patient 是 p 開頭，用 im：impatient。"}}},
 {say:"字首課完成！記住：in 和 im 放前面，意思馬上翻個面；p、b、m 嘴巴閉，前面就用 im；遮住字首猜意思。下一課學副詞字尾 -ly！", end:true}
],
p2:[
 {say:"同學好！上一課在字的「前面」加東西，這一課在字的「後面」加東西：<<ly>>！形容詞加上 ly，就變成副詞，用來說動作「怎麼做」。", board:[["quick → quickly",["ly"],false,true],["slow → slowly",["ly"],false,true]]},
 {say:"{quick} 是快的，形容東西；{quickly} 是快快地，形容動作。{He is a quick runner.} 他是跑很快的人。{He runs quickly.} 他跑得很快。", board:[["He is a quick runner.",["quick"]],["He runs quickly.",["quickly"]]]},
 {say:"ly 怎麼唸？l 加上字尾的 y，唸 /li/，像「力」，輕輕的。重音不會跑到 ly 上面：{QUICK-ly}、{SLOW-ly}。", board:[["QUICK‧ly",["ly"],false,true],["SLOW‧ly",["ly"],false,true]]},
 {say:"跟著老師唸口訣！", chant:"形容詞加 ly，動作怎麼做就知道！"},
 {ask:{q:"Please read the questions ___.", opts:["careful","carefully","care"], ans:1,
   ok:"答對！形容「讀」這個動作，用副詞 carefully。",
   bad:{0:"careful 是形容詞，形容動作要用副詞 carefully。",2:"care 是名詞或動詞「關心、照顧」，不能形容動作。"},
   again:{q:"He finished his homework ___.", opts:["quickly","quick","quicks"], ans:0, exp:"形容動作 finished，要用副詞 quickly。"}}},
 {say:"第一個拼字規則：字尾是 <<ful>> 的字，加 ly 之後會有兩個 l！{careful} 變成 {carefully}，{beautiful} 變成 {beautifully}。", board:[["careful + ly = carefully",["ll"],false,true],["beautiful + ly = beautifully",["ll"],false,true]]},
 {say:"第二個拼字規則：字尾是「子音 + y」，要先把 y 改成 i，再加 ly！{easy} 變成 {easily}，{happy} 變成 {happily}。", board:[["easy → easily",["il"],false,true],["happy → happily",["il"],false,true]]},
 {say:"這個規則超常考，口訣記好！", chant:"子音加 y 結尾，y 變 i 再加 ly！"},
 {ask:{q:"easy（容易的）變成副詞是？", opts:["easyly","easly","easily"], ans:2,
   ok:"太棒了！y 改成 i，再加 ly：easily。",
   bad:{0:"子音 + y 結尾要把 y 改成 i，不能直接加 ly。",1:"y 不能直接拿掉，要改成 i 喔：easily。"},
   again:{q:"happy（快樂的）變成副詞是？", opts:["happily","happyly","happly"], ans:0, exp:"y 改成 i，再加 ly：happily。"}}},
 {say:"唸 easily 的時候，中間的 i 輕輕帶過，唸 {EAS-i-ly}；happily 唸 {HAP-pi-ly}，重音都在第一個音節。", board:[["EAS‧i‧ly",["EAS"],false,true],["HAP‧pi‧ly",["HAP"],false,true]]},
 {say:"兩個陷阱要小心！第一，{good} 的副詞不是 goodly，而是 {well}：{She sings well.} 第二，{friendly} 友善的、{lovely} 可愛的，雖然有 ly，卻是形容詞！", board:[["She sings goodly.",[],true],["She sings well.",["well"]],["She is friendly.（形容詞）",["friendly"]]]},
 {ask:{q:"哪一句正確？", opts:["He plays the piano good.","He plays the piano well.","He plays the piano goodly."], ans:1,
   ok:"答對！good 的副詞是 well。",
   bad:{0:"good 是形容詞，形容動作 plays 要用副詞 well。",2:"沒有 goodly 這個字，good 的副詞是 well。"},
   again:{q:"下面哪一個字是「形容詞」？", opts:["quickly","friendly","easily"], ans:1, exp:"friendly 雖然有 ly，但它是形容詞「友善的」。"}}},
 {ask:{say:"最後一題！", q:"The kids are playing ___ in the park.", opts:["happy","happyly","happily"], ans:2,
   ok:"完美！形容動作用副詞，y 改 i 加 ly：happily。",
   bad:{0:"happy 是形容詞，形容動作 playing 要用副詞。",1:"y 要先改成 i 再加 ly 喔。"},
   again:{q:"Use the scissors ___.", opts:["carefully","carefuly","careful"], ans:0, exp:"careful + ly，要有兩個 l：carefully。"}}},
 {say:"-ly 課完成！複習：形容詞加 ly，動作怎麼做就知道；ful 加 ly 有兩個 l；子音加 y 結尾，y 變 i 再加 ly；good 的副詞是 well！", end:true}
],
p3:[
 {say:"同學好！文法課學了 myself、ourselves，今天來把它們唸得又準又好聽！先看 <<self>>：s、短 e、l、f，唸 {self}。", board:[["s‧e‧l‧f → self",["e"],false,true],["myself　himself　herself　itself",["self","self","self","self"],false,true]]},
 {say:"self 的 e 是短 e，嘴巴扁扁的「欸」。l 在字尾要把舌尖頂到上排牙齒後面，最後的 f 是上排牙齒輕碰下嘴唇，送氣不出聲。", board:[["self",["e","f"],false,true]]},
 {say:"重音在哪裡？反身代名詞的重音都在 self 上：{my-SELF}、{him-SELF}、{your-SELF}。前面的 my、him、your 輕輕帶過。", board:[["my‧SELF",["SELF"],false,true],["your‧SELF",["SELF"],false,true],["them‧SELVES",["SELVES"],false,true]]},
 {say:"跟著老師唸口訣！", chant:"前面輕輕帶，重音在 self！"},
 {ask:{q:"himself 的重音在哪裡？", opts:["HIM-self","him-SELF"], ans:1,
   ok:"答對！重音在 self：him-SELF。",
   bad:{0:"反身代名詞的重音在 self，前面的 him 要輕輕唸。"},
   again:{q:"ourselves 的重音在哪裡？", opts:["our-SELVES","OUR-selves"], ans:0, exp:"重音在 selves：our-SELVES。"}}},
 {say:"變成複數的時候，神奇的事發生了：self 的 <<f>> 變成 <<v>>，再加上 <<es>>，變成 {selves}！", board:[["self → selves",["lves"],false,true],["ourselves　yourselves　themselves",["selves","selves","selves"],false,true]]},
 {say:"f 和 v 嘴型一樣，都是上排牙齒碰下嘴唇。差別是：f 不出聲，v 喉嚨要震動！摸著喉嚨唸唸看：{self}，{selves}。", board:[["f：不出聲　v：喉嚨震動",["f","v"],false,true]]},
 {say:"selves 最後的 es，e 不發音，s 唸 /z/，也要震動喉嚨。所以 selves 的尾巴是 v 加 z，一路震到底！", chant:"f 變 v 再加 es，喉嚨一路震到底！", board:[["selves → /sɛlvz/",["v","s"],false,true]]},
 {ask:{q:"yourself 的複數「你們自己」怎麼拼？", opts:["yourselfs","yourselves","yourselfes"], ans:1,
   ok:"太棒了！f 變 v，再加 es：yourselves。",
   bad:{0:"self 變複數不是直接加 s，要 f 變 v 再加 es。",2:"f 要先變成 v，才能加 es 喔。"},
   again:{q:"「他們自己」怎麼拼？", opts:["themselves","themselfs","theirselves"], ans:0, exp:"them + selves = themselves。"}}},
 {say:"這個「f 變 v」的規則不只用在 self，很多 f 結尾的名詞都一樣：{leaf} 變 {leaves}，{knife} 變 {knives}，{half} 變 {halves}，{wife} 變 {wives}。", board:[["leaf → leaves",["ves"],false,true],["knife → knives",["ves"],false,true],["half → halves",["ves"],false,true]]},
 {ask:{q:"leaf（葉子）的複數是？", opts:["leafs","leafes","leaves"], ans:2,
   ok:"答對！f 變 v 再加 es：leaves。",
   bad:{0:"leaf 和 self 一樣，要 f 變 v 再加 es。",1:"f 要先變成 v，才能加 es。"},
   again:{q:"knife（刀子）的複數是？", opts:["knives","knifes","knifs"], ans:0, exp:"fe 結尾，f 變 v 再加 s：knives。"}}},
 {say:"最後練習一下前半部的唸法：{our} 唸 /aʊr/ 像「啊烏兒」；{them} 的 th 是有聲的，舌頭輕輕咬住、喉嚨震動；{your} 常常輕輕唸成 /jɚ/。", board:[["ourselves",["ou"],false,true],["themselves",["th"],false,true],["yourselves",["your"],false,true]]},
 {ask:{say:"最後一題！", q:"selves 字尾的 s 唸什麼音？", opts:["/s/，不出聲","/z/，喉嚨震動"], ans:1,
   ok:"完美！跟在有聲的 v 後面，s 唸 /z/，喉嚨一路震到底。",
   bad:{0:"前面的 v 是有聲的，所以後面的 s 也跟著唸有聲的 /z/。"},
   again:{q:"self 最後的 f 要不要震動喉嚨？", opts:["不用，f 不出聲","要，喉嚨要震動"], ans:0, exp:"f 是無聲的，只送氣；有震動的是 v。"}}},
 {say:"-self 和 -selves 唸法完成！記住：前面輕輕帶，重音在 self；f 變 v 再加 es，喉嚨一路震到底。下一課學整個句子的重音！", end:true}
],
p4:[
 {say:"同學好！最後一堂發音課，我們從「單字」升級到「句子」。英文句子唸起來有輕有重，像打鼓一樣：咚、噠、咚、噠。重的字唸得大聲、清楚、比較長；輕的字唸得又快又小聲。", board:[["I WANT to RECYCLE the BOTTLES.",["WANT","RECYCLE","BOTTLES"],false,true]]},
 {say:"哪些字要重讀？就是帶著「意思」的字，叫做內容字：名詞、動詞、形容詞、副詞，還有 what、where 這些疑問詞，和 not、can't 這種否定字。", board:[["名詞 bottles　動詞 recycle",["bottles","recycle"],false,true],["形容詞 old　副詞 carefully",["old","carefully"],false,true],["疑問詞 what　否定 can't",["what","can't"],false,true]]},
 {say:"哪些字要輕讀？就是幫忙把句子接起來的字，叫做功能字：{a}、{the}、{to}、{of}、{and}、{at}，還有 be 動詞、助動詞和代名詞。", board:[["a　the　to　of　and　at",["a","the","to","of","and","at"],false,true],["is　are　can　I　you　it",["is","are","can"],false,true]]},
 {say:"跟著老師唸口訣！", chant:"有意思的字唸大聲，接起來的字輕輕過！"},
 {ask:{q:"「I'm good at fixing bikes.」哪一組是要重讀的字？", opts:["I'm、at","good、fixing、bikes","at、bikes"], ans:1,
   ok:"答對！good 是形容詞、fixing 是動詞、bikes 是名詞，都是內容字。",
   bad:{0:"I'm 和 at 都是功能字，要輕輕唸。",2:"at 是介系詞，是功能字，要輕讀。"},
   again:{q:"「We decided to clean the beach.」哪一個字要輕讀？", opts:["decided","the","beach"], ans:1, exp:"the 是功能字，輕輕唸 /ðə/。"}}},
 {say:"功能字輕讀的時候，母音常常變成弱音 /ə/。{to} 唸成 /tə/，{a} 唸成 /ə/，{and} 唸成 /ən/，{of} 唸成 /əv/。聽聽看：{a cup of tea}。", board:[["to → /tə/　a → /ə/",["to","a"],false,true],["and → /ən/　of → /əv/",["and","of"],false,true],["a CUP of TEA",["CUP","TEA"],false,true]]},
 {say:"所以 want to 唸快的時候，to 幾乎只剩一點點聲音：{I want to go.} 不要把每個字都唸得一樣大聲喔！", board:[["I WANT to GO.",["WANT","GO"],false,true]]},
 {ask:{q:"「Thank you for helping me.」裡的 for，平常要怎麼唸？", opts:["大聲、拉長","輕輕的，唸成 /fɚ/"], ans:1,
   ok:"對！for 是介系詞，是功能字，輕輕帶過。",
   bad:{0:"for 是功能字，平常要輕讀。重讀的是 Thank 和 helping。"},
   again:{q:"「I want a cup of tea.」哪一個字要輕讀？", opts:["of","cup","tea"], ans:0, exp:"of 是介系詞，是功能字，輕輕唸成 /əv/；cup 和 tea 是名詞，要重讀。"}}},
 {say:"否定字一定要重讀！因為它會改變整句的意思。{I CAN go.} 我能去，can 輕輕唸；{I CAN'T go.} 我不能去，can't 要唸得清楚又大聲。", board:[["I can GO.（can 輕讀）",["GO"],false,true],["I CAN'T GO.（can't 重讀）",["CAN'T","GO"],false,true]]},
 {say:"這個也有口訣！", chant:"肯定 can 輕輕唸，否定 can't 要大聲！"},
 {ask:{q:"聽到「I ___ swim.」，can 的位置唸得又大聲又清楚，最可能是哪一個字？", opts:["can","can't"], ans:1,
   ok:"太棒了！否定字 can't 會重讀，肯定的 can 通常輕讀。",
   bad:{0:"肯定的 can 是助動詞，通常輕讀成 /kən/。唸得很大聲的是否定的 can't。"},
   again:{q:"「She doesn't like plastic straws.」哪一個字一定要重讀？", opts:["doesn't","She"], ans:0, exp:"否定字 doesn't 會改變句意，要重讀。"}}},
 {say:"最後，用這個單元的句子練習打鼓！大寫的字要重讀：{RECYCLING is GOOD for the EARTH.}、{We ENJOYED ourSELVES at the PARTY.}", board:[["RECYCLING is GOOD for the EARTH.",["RECYCLING","GOOD","EARTH"],false,true],["We ENJOYED ourSELVES at the PARTY.",["ENJOYED","SELVES","PARTY"],false,true]]},
 {ask:{say:"最後一題！", q:"「Would you mind opening the window?」下面哪一組都是功能字，要輕讀？", opts:["mind、opening、window","Would、you、the","opening、the、window"], ans:1,
   ok:"完美！Would 是助動詞、you 是代名詞、the 是冠詞，都是功能字。",
   bad:{0:"mind 是動詞、opening 是動名詞、window 是名詞，都是內容字，要重讀。",2:"opening 和 window 都是內容字，要重讀。"},
   again:{q:"「Collecting stamps is my hobby.」哪一組要重讀？", opts:["Collecting、stamps、hobby","is、my"], ans:0, exp:"Collecting、stamps、hobby 都帶著意思，是內容字。"}}},
 {say:"國二的發音課全部上完了！記住：有意思的字唸大聲，接起來的字輕輕過；肯定 can 輕輕唸，否定 can't 要大聲。唸英文像打鼓，咚噠咚噠就會很自然。期末考加油！", end:true}
]};

/* ---------- 插圖用的小物件（只在這個單元使用） ---------- */
const J2_2_3_ART = {
  bin: (x, y, s, c = "#22c55e", d = "#15803d") => grp(x, y, s, `<rect x="-22" y="-20" width="44" height="46" rx="4" fill="${c}"/><rect x="-25" y="-28" width="50" height="9" rx="3" fill="${d}"/><path d="M0 -10 L11 8 L-11 8 Z" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M8 -2 L13 -1 L11 4 Z M-9 4 L-13 -1 L-7 -1 Z M2 8 L-3 12 L-3 4 Z" fill="#fff"/>`),
  pbottle: (x, y, s, c = "#bfdbfe", rot = 0) => grp(x, y, s, `<rect x="-5" y="-34" width="10" height="6" rx="1.5" fill="#2563eb"/><path d="M-4 -28 L-4 -22 Q-12 -18 -12 -8 L-12 26 Q-12 30 -8 30 L8 30 Q12 30 12 26 L12 -8 Q12 -18 4 -22 L4 -28 Z" fill="${c}" stroke="#60a5fa" stroke-width="1.2"/><rect x="-12" y="0" width="24" height="10" fill="#fff" opacity=".7"/><path d="M-12 18 H12 M-12 22 H12" stroke="#60a5fa" stroke-width="1"/><rect x="-8" y="-12" width="3" height="10" rx="1.5" fill="#fff" opacity=".7"/>`, rot),
  can: (x, y, s, c = "#ef4444", rot = 0) => grp(x, y, s, `<rect x="-9" y="-14" width="18" height="28" rx="3" fill="${c}"/><ellipse cx="0" cy="-14" rx="9" ry="2.5" fill="#d1d5db"/><rect x="-9" y="-4" width="18" height="7" fill="#fff" opacity=".6"/>`, rot),
  globe: (x, y, s) => grp(x, y, s, `<circle r="24" fill="#3b82f6"/><path d="M-14 -14 Q-6 -20 2 -14 Q6 -8 0 -4 Q-8 0 -10 8 Q-18 4 -20 -4 Q-20 -10 -14 -14 Z" fill="#22c55e"/><path d="M8 4 Q16 0 20 6 Q18 16 8 18 Q4 12 8 4 Z" fill="#22c55e"/><path d="M6 -20 Q12 -20 14 -14 Q10 -12 6 -16 Z" fill="#22c55e"/><ellipse cx="-9" cy="-12" rx="5" ry="3" fill="#fff" opacity=".3"/>`),
  cup: (x, y, s) => grp(x, y, s, `<path d="M4 -22 L10 -40 L20 -40" stroke="#ef4444" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M-14 -18 L14 -18 L10 22 L-10 22 Z" fill="#fde68a" stroke="#f59e0b" stroke-width="1.5"/><rect x="-16" y="-22" width="32" height="5" rx="2" fill="#f59e0b"/><path d="M-11 -4 H11" stroke="#fff" stroke-width="2" opacity=".7"/>`),
  bulb: (x, y, s, on = true) => grp(x, y, s, `${on ? `<circle cy="-6" r="22" fill="#fde68a" opacity=".5"/>` : ""}<circle cy="-6" r="13" fill="${on ? "#ffd23f" : "#e5e7eb"}" stroke="${on ? "#f59e0b" : "#9ca3af"}" stroke-width="1.5"/><rect x="-6" y="6" width="12" height="9" rx="2" fill="#9ca3af"/><path d="M-6 9 H6 M-6 12 H6" stroke="#6b7280" stroke-width="1"/><path d="M-3 -4 Q0 -10 3 -4" stroke="${on ? "#f59e0b" : "#9ca3af"}" stroke-width="1.5" fill="none"/>`),
  bolt: (x, y, s) => grp(x, y, s, `<path d="M4 -20 L-8 2 L0 2 L-4 20 L10 -4 L2 -4 Z" fill="#facc15" stroke="#eab308" stroke-width="1.2"/>`),
  waves: () => `<path d="M0 70 Q20 62 40 70 T80 70 T120 70 T160 70 V120 H0 Z" fill="#60a5fa"/><path d="M0 88 Q20 80 40 88 T80 88 T120 88 T160 88 V120 H0 Z" fill="#3b82f6"/>`,
  fish: (x, y, s, c = "#fb923c") => grp(x, y, s, `<ellipse rx="12" ry="7" fill="${c}"/><path d="M10 0 L20 -7 L20 7 Z" fill="${c}"/><circle cx="-6" cy="-2" r="1.6" fill="${INK}"/>`),
  hammer: (x, y, s, rot = 0) => grp(x, y, s, `<rect x="-3" y="-6" width="6" height="40" rx="2.5" fill="#b45309"/><rect x="-16" y="-16" width="32" height="12" rx="3" fill="#6b7280"/><rect x="-16" y="-16" width="8" height="12" rx="2" fill="#4b5563"/>`, rot),
  wrench: (x, y, s, rot = 0, bg = "#fff") => grp(x, y, s, `<rect x="-3.5" y="-14" width="7" height="34" rx="3" fill="#9ca3af"/><circle cy="-20" r="10" fill="#9ca3af"/><rect x="-4" y="-32" width="8" height="12" fill="${bg}"/>`, rot),
  glue: (x, y, s) => grp(x, y, s, `<path d="M0 -30 Q2 -36 0 -40" stroke="#fde68a" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M-5 -20 L-3 -30 L3 -30 L5 -20 Z" fill="#f97316"/><rect x="-10" y="-20" width="20" height="36" rx="4" fill="#fff" stroke="#cbd5e1" stroke-width="1.5"/><rect x="-10" y="-6" width="20" height="12" fill="#60a5fa"/>` + txt(0, 3, "GLUE", 6, "#fff")),
  scissors: (x, y, s, rot = 0) => grp(x, y, s, `<path d="M-6 6 L18 -28" stroke="#9ca3af" stroke-width="4" stroke-linecap="round"/><path d="M6 6 L-18 -28" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/><circle cx="-10" cy="13" r="8" fill="none" stroke="#ef4444" stroke-width="4"/><circle cx="10" cy="13" r="8" fill="none" stroke="#ef4444" stroke-width="4"/><circle cy="-2" r="2" fill="#374151"/>`, rot),
  box: (x, y, s, c = "#e9b872") => grp(x, y, s, `<path d="M-26 -18 L-34 -28 L-6 -28 L0 -18 Z M26 -18 L34 -28 L6 -28 L0 -18 Z" fill="#d4a373"/><rect x="-26" y="-18" width="52" height="38" rx="3" fill="${c}"/>` + heart(0, 4, 1.1, "#ef4444")),
  medal: (x, y, s) => grp(x, y, s, `<path d="M-12 -40 L-4 -12 L4 -12 L12 -40 L4 -40 L0 -26 L-4 -40 Z" fill="#3b82f6"/><circle r="16" fill="#fbbf24" stroke="#f59e0b" stroke-width="3"/>` + star(0, 0, 8, "#fff7cc")),
  birdhouse: (x, y, s) => grp(x, y, s, `<rect x="-3" y="10" width="6" height="34" fill="#8b5a2b"/><rect x="-18" y="-14" width="36" height="28" fill="#f4a261"/><path d="M-24 -12 L0 -32 L24 -12 Z" fill="#e76f51"/><circle cy="-2" r="6" fill="#5a3a2a"/><rect x="-8" y="8" width="16" height="3" fill="#8b5a2b"/>`),
  toolbox: (x, y, s) => grp(x, y, s, `<path d="M-12 -12 V-20 H12 V-12" stroke="#374151" stroke-width="3.5" fill="none"/><rect x="-30" y="-12" width="60" height="30" rx="4" fill="#ef4444"/><rect x="-30" y="-2" width="60" height="4" fill="#b91c1c"/><rect x="-5" y="-4" width="10" height="8" rx="1.5" fill="#fbbf24"/>`),
  gbag: (x, y, s, c = "#374151") => grp(x, y, s, `<path d="M-4 -18 Q-24 -10 -22 10 Q-20 24 0 24 Q20 24 22 10 Q24 -10 4 -18 Z" fill="${c}"/><path d="M-6 -24 L0 -18 L6 -24" stroke="${c}" stroke-width="3" fill="none"/><path d="M-10 -4 Q-12 6 -8 14" stroke="#fff" stroke-width="2" opacity=".25" fill="none"/>`),
  paper: (x, y, s) => grp(x, y, s, `<path d="M-8 -6 L-2 -9 L6 -7 L9 0 L6 7 L-3 8 L-9 3 Z" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/><path d="M-4 -3 L3 2 M2 -5 L-2 4" stroke="#cbd5e1" stroke-width="1"/>`)
};
const A = J2_2_3_ART;

/* ---------- 單字插圖（其他抽象的字用單字陣列第 7 欄的概念卡） ---------- */
Object.assign(ILLUS, {
  recycle: () => svgWrap("#ecfdf5", ground() + A.bin(52, 78, 1) + kid(118, {pose:"hold", mood:"open", oc:"#14b8a6"}) + A.pbottle(84, 52, .55, "#bfdbfe", -40) + spark(36, 26, .8) + spark(140, 22, .7)),
  bin: () => svgWrap("#f0fdf4", ground() + A.bin(40, 80, .85) + A.bin(80, 80, .85, "#3b82f6", "#1d4ed8") + A.bin(120, 80, .85, "#f59e0b", "#b45309") + spark(80, 26, .8)),
  plastic: () => svgWrap("#eff6ff", A.pbottle(50, 64, 1.3) + A.pbottle(96, 72, 1, "#a7f3d0") + A.cup(132, 80, .7) + spark(132, 24, .8)),
  bottle: () => svgWrap("#e0f2fe", A.pbottle(80, 62, 1.6) + spark(34, 30, 1) + spark(126, 36, .8)),
  garbage: () => svgWrap("#f1f5f9", ground("#d1d5db") + A.gbag(52, 82, 1.1) + A.gbag(98, 86, .9, "#4b5563") + A.can(136, 98, .8, "#ef4444", 80) + A.paper(26, 100, .9)),
  earth: () => svgWrap("#0f1f4d", A.globe(80, 60, 1.7) + star(24, 22, 3, "#fde68a") + star(136, 28, 2.5, "#fde68a") + star(30, 96, 2, "#fde68a") + star(132, 98, 3, "#fde68a")),
  straw: () => svgWrap("#fff7ed", A.cup(80, 70, 1.5) + spark(30, 32, .8) + spark(130, 40, .7)),
  electricity: () => svgWrap("#fefce8", A.bulb(60, 60, 1.6, true) + A.bolt(118, 56, 1.5) + spark(124, 22, .8) + spark(24, 30, .7)),
  litter: () => svgWrap("#ecfccb", ground() + kid(110, {eyes:"worry", mood:"wavy", oc:"#f97316"}) + A.paper(30, 98, 1) + A.paper(66, 104, .8) + A.can(48, 100, .7, "#3b82f6", 90) + A.pbottle(80, 98, .45, "#bfdbfe", 80)),
  ocean: () => svgWrap("#e0f2fe", O.sun(130, 28, .8) + O.cloud(40, 30, .8) + A.waves() + A.fish(50, 100, 1) + A.fish(112, 106, .8, "#facc15")),
  volunteer: () => svgWrap("#fef3c7", ground() + girlP(50, {pose:"hold", mood:"open", oc:"#22c55e"}) + A.box(50, 80, .6) + kid(118, {pose:"wave", mood:"open", oc:"#22c55e"}) + heart(86, 30, .9)),
  donate: () => svgWrap("#fdf2f8", A.box(80, 78, 1.4) + O.book(66, 44, .6, "#60a5fa") + O.book(96, 46, .6, "#f472b6") + spark(28, 30, .8) + spark(134, 34, .8)),
  elderly: () => svgWrap("#fff7ed", ground() + P({x:62, y:108, hair:"bald", hc:"#d1d5db", oc:"#a16207", acc:["cane", "glasses", "stache"]}) + girlP(118, {s:.8, pose:"hold", mood:"open"}) + heart(92, 34, .8)),
  repair: () => svgWrap("#eef2ff", ground() + kid(54, {pose:"hold", mood:"open", oc:"#6366f1"}) + A.wrench(60, 82, .7, 30, "#eef2ff") + O.wheel(118, 84, 1.2) + spark(132, 46, .7)),
  build: () => svgWrap("#ecfdf5", ground() + A.birdhouse(64, 58, 1.3) + A.hammer(126, 84, .8, -30) + spark(110, 30, .8)),
  tool: () => svgWrap("#fef2f2", A.wrench(56, 46, 1, -20, "#fef2f2") + A.hammer(102, 42, .9, 25) + A.toolbox(80, 90, 1.2)),
  hammer: () => svgWrap("#f5f5f4", A.hammer(70, 56, 1.6, -30) + `<rect x="118" y="80" width="4" height="22" fill="#6b7280"/><rect x="113" y="78" width="14" height="4" rx="1" fill="#6b7280"/><rect x="96" y="102" width="50" height="8" fill="#c98b4f"/>` + spark(120, 64, .8)),
  glue: () => svgWrap("#eff6ff", A.glue(62, 66, 1.6) + O.papers(118, 92, 1) + spark(120, 34, .8)),
  scissors: () => svgWrap("#fef2f2", A.scissors(70, 64, 1.5, 20) + `<rect x="108" y="52" width="34" height="44" fill="#fde68a"/><path d="M108 74 H128" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 2"/>`),
  prize: () => svgWrap("#fffbeb", A.medal(80, 70, 1.5) + spark(30, 32, 1) + spark(132, 30, .9) + spark(126, 96, .7))
});

/* ---------- 記憶小撇步 ---------- */
Object.assign(MEMO, {
  recycle:"re（再一次）+ cycle（循環）＝讓東西再循環一次，就是資源回收。腳踏車 bicycle 裡也有 cycle（輪子轉圈圈）。",
  plastic:"plastic 唸起來像「破辣斯踢克」：塑膠一摔就破，丟到海裡還很辣手！",
  bottle:"bottle 中間有兩個 t，就像瓶子的兩邊瓶身；字尾 le 唸 /əl/。",
  environment:"environ 是「圍繞」，ment 是名詞字尾：圍繞在我們四周的一切，就是環境。",
  bin:"bin 很短，b‧i‧n 三個字母就像一個小桶子。和 pin（大頭針）只差一個字母：把 pin 丟進 bin！",
  pollution:"pollu 像「破了」：環境被破壞了，就是污染。字尾 tion 唸「遜」。",
  garbage:"garbage 唸起來像「尬了比雞」：垃圾臭到讓人好尷尬。美式英文常說 garbage，英式英文說 rubbish。",
  reuse:"re（再一次）+ use（使用）＝再用一次。3R 口號：Reduce、Reuse、Recycle。",
  reduce:"re（往回）+ duce（帶）＝往回帶、變少。3R 的第一個 R 就是 reduce。",
  "throw away":"throw（丟）+ away（遠離）＝丟得遠遠的，就是丟掉。throw 的過去式是 threw。",
  earth:"earth 是 ear（耳朵）+ th：把耳朵貼在地上，聽聽地球的聲音。",
  nature:"nature 唸起來像「捏去兒」：捏一把泥土，感受大自然。natural 是「自然的」。",
  protect:"pro（在前面）+ tect（遮蓋）＝擋在前面幫你遮住，就是保護。",
  straw:"straw 的 aw 唸 /ɔ/，和 draw、saw 一樣。用吸管喝飲料：straw、straw，吸！",
  unplug:"un（相反）+ plug（插頭、插上）＝把插頭拔掉。不用的電器拔插頭，就能省電！",
  electricity:"electric（電的）+ ity（名詞字尾）＝電。重音在 tri：e-lec-TRI-ci-ty。",
  litter:"litter 和 little（小的）只差一個字母：一點點小垃圾（litter）也不要亂丟！",
  ocean:"ocean 唸起來像「歐遜」：歐，海那麼大，人類好遜！",
  volunteer:"volunteer 唸起來像「哇冷踢兒」：天氣再冷，志工還是自願出門幫忙！字尾 eer 唸「易兒」，重音在最後。",
  community:"com（一起）+ muni（分擔）+ ty：大家一起分擔、一起生活的地方，就是社區。communicate（溝通）也是同一家人。",
  donate:"don 在拉丁文裡就是「給」：把東西給出去幫助別人，就是捐贈。名詞是 donation。",
  elderly:"elder（年紀較大的）+ ly ＝年長的。elderly 雖然是 ly 結尾，但它是形容詞。",
  neighbor:"neigh 是馬叫聲「嘶～」：隔壁鄰居養了一匹馬，每天 neigh、neigh 叫！gh 不發音。",
  charity:"charity 來自拉丁文的「愛」：把愛分給需要幫助的人，就是慈善。字尾 ity 是名詞字尾。",
  raise:"raise 和 rain（雨）長得很像：雨天大家舉起（raise）雨傘。raise money 是「募款」。",
  homeless:"h:c o:long_o m:c e:silent l:c e:schwa ss:double",
  support:"sup（在下面）+ port（搬運）＝在下面幫你撐著，就是支持。",
  local:"local 和 location（地點）是一家人：跟「這個地點」有關的，就是當地的。",
  repair:"re（再一次）+ pair（一對、配好）＝讓壞掉的東西再配好，就是修理。",
  fix:"fix 唸起來像「費克斯」：東西壞了，花點費用把它修好。",
  build:"build 的 u 不發音，唸起來和 billed 一樣。build 的過去式是 built。",
  tool:"tool 和 cool 押韻：有好工具（tool）做東西，超酷（cool）！",
  hammer:"hammer 唸起來像「黑馬」：黑馬拿著鐵鎚，咚咚咚敲釘子。",
  glue:"glue 唸起來像「葛路」：一路黏到底。ue 唸長長的「嗚」，和 blue 押韻。",
  scissors:"scissors 有兩片刀刃，所以一定是複數：these scissors、a pair of scissors。開頭 sc 的 c 不發音。",
  sew:"s:c ew:exc",
  design:"de（向下）+ sign（記號）＝把想法畫成記號寫下來，就是設計。g 不發音。",
  skill:"skill 和 kill 長得像：練好技能（skill），就能打敗（kill）大魔王！",
  talent:"talent 唸起來像「太輪」：太有天分了，輪到他上台就贏！",
  interested:"interest（興趣）+ ed ＝感到有興趣的（形容人）；interesting 是「有趣的」（形容事情）。",
  "be good at":"good（好）+ at（在某一點上）：在某件事上表現很好，就是擅長。at 後面接名詞或 V-ing。",
  craft:"craft 唸起來像「快副特」：手很巧，很快就做出一件手工藝品。handcraft 是「手工藝品」。",
  contest:"contest 裡藏著 test（考試）：大家一起來考一考、比一比，就是比賽。",
  prize:"prize 和 price（價錢）只差一個字母：得到獎品（prize），不用付錢（price）！",
  improve:"improve 裡藏著 prove（證明）：用行動證明自己變好了，就是進步。這裡的 im 不是「不」喔！",
  finish:"fin 是法文的「結束」，電影最後常出現 FIN：finish 就是完成。後面接 V-ing。",
  keep:"keep 兩個 e 手牽手，一直牽著不放手：keep + V-ing 就是一直持續做。",
  mind:"mind 是「心思」：放在心上，就是介意。Never mind. 是「沒關係」。",
  quit:"quit 和 quiet（安靜的）長得很像：放棄（quit）之後，一切就安靜（quiet）了。後面接 V-ing。",
  myself:"my（我的）+ self（自己）＝我自己。",
  yourself:"your（你的）+ self（自己）＝你自己。Help yourself! 是「請自己拿，別客氣」。",
  himself:"him（他，受格）+ self ＝他自己。注意不是 his + self！",
  herself:"her（她）+ self ＝她自己。",
  itself:"it（它）+ self ＝它自己。by itself 是「自己（沒有人去動）」。",
  ourselves:"our（我們的）+ selves ＝我們自己。很多人，self 要變成 selves。",
  yourselves:"your + selves ＝你們自己。對很多人說話，self 的 f 變 v 再加 es。",
  themselves:"them（他們，受格）+ selves ＝他們自己。注意不是 their + selves！",
  another:"another = an + other：「一個」其他的，所以後面只能接單數名詞。",
  other:"other 前面加 an 變 another（另一個），加 the 變 the other（剩下那一個）。",
  impossible:"im（不）+ possible（可能的）＝不可能的。Nothing is impossible!",
  incorrect:"in（不）+ correct（正確的）＝不正確的。",
  independent:"in（不）+ dependent（依賴的）＝不依賴別人的，就是獨立的。",
  impolite:"im（不）+ polite（有禮貌的）＝不禮貌的。p 開頭用 im。",
  impatient:"im（不）+ patient（有耐心的）＝沒耐心的。patient 也有「病人」的意思：病人等看醫生，要有耐心！",
  quickly:"quick（快的）+ ly ＝快速地。ly 就像副詞的尾巴，形容動作「怎麼做」。",
  carefully:"careful（小心的）+ ly ＝小心地。ful 再加 ly，記得有兩個 l！",
  easily:"easy（容易的）的 y 變 i，再加 ly ＝ easily（容易地）。",
  happily:"happy（快樂的）的 y 變 i，再加 ly ＝ happily（快樂地）。"
});

registerUnit("j2-2-3", {name:"國二 下學期 期末考", sub:"動名詞、V-ing 和 to V、反身代名詞、不定代名詞", words:J2_2_3_WORDS, grammar:J2_2_3_GRAMMAR, quiz:J2_2_3_QUIZ, classes:Object.assign({}, J2_2_3_CLASS, J2_2_3_PHONICS_CLASS), phonics:J2_2_3_PHONICS});
})();
