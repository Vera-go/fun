/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   內容資料：國一上學期 第二次段考（通用範圍）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 文法說明] x3], 字根拆解, 拆解邏輯, 概念卡]
   ========================================================= */
const J1_1_2_WORDS = [
/* ---------- 身體部位 ---------- */
["head","n.","頭",[
 ["Touch your head.","摸摸你的頭。","祈使句用原形動詞 Touch 開頭，省略主詞 you。your 是所有格「你的」，後面一定要接名詞 head。"],
 ["There is a hat on his head.","他的頭上有一頂帽子。","There is + a + 單數名詞，表示「某處有一個……」。his 是「他的」，on his head 是「在他的頭上」。"],
 ["Don't shake your head.","不要搖頭。","否定祈使句：Don't + 原形動詞 shake。Don't 就是 Do not 的縮寫。"]]],
["face","n.","臉",[
 ["Wash your face, please.","請洗臉。","祈使句用原形動詞 Wash 開頭。please 放在句尾時，前面要加逗號。"],
 ["Her face is red.","她的臉紅紅的。","Her 是「她的」，後面接名詞 face。Her face 是單數，be 動詞用 is。"],
 ["Look at the baby's face. It's so cute!","看看寶寶的臉，好可愛！","the baby's 是名詞所有格「寶寶的」，在名詞後面加 's。It's 是 It is 的縮寫。"]]],
["eye","n.","眼睛",[
 ["Close your eyes.","閉上你的眼睛。","祈使句用原形動詞 Close 開頭。人有兩隻眼睛，所以用複數 eyes。"],
 ["My cat's eyes are green.","我的貓的眼睛是綠色的。","my cat's 是「我的貓的」，名詞後面加 's 表示所有格。主詞 eyes 是複數，搭配 are。"],
 ["Open your eyes and look at me.","睜開眼睛看著我。","兩個祈使句用 and 連接，Open 和 look 都用原形動詞。look at 後面接 me，不能說 look at I。"]]],
["ear","n.","耳朵",[
 ["Rabbits have long ears.","兔子有長長的耳朵。","說「一整類動物」時常用複數名詞 Rabbits。主詞是複數，動詞用 have。"],
 ["Touch your left ear.","摸摸你的左耳。","祈使句用原形動詞 Touch 開頭。left ear 只有一隻，所以 ear 不加 s。"],
 ["Whose ears are these? They're the dog's.","這是誰的耳朵？是那隻狗的。","Whose + 名詞 問「誰的……」。these 搭配 are 和複數 ears，回答用 They're。the dog's 是「那隻狗的」。"]]],
["nose","n.","鼻子",[
 ["Point to your nose.","指著你的鼻子。","祈使句用原形動詞 Point 開頭。point to + 東西，表示「指向……」。"],
 ["The clown's nose is red.","小丑的鼻子是紅色的。","The clown's 是「小丑的」，名詞加 's 變成所有格。主詞 nose 是單數，用 is。"],
 ["Elephants have long noses.","大象有長長的鼻子。","nose 的複數直接加 s 變成 noses，但字尾是 /z/ 的嘶嘶聲，所以 -s 唸 /ɪz/。"]]],
["mouth","n.","嘴巴",[
 ["Open your mouth, please.","請張開你的嘴巴。","祈使句用原形動詞 Open 開頭。看牙醫的時候常聽到這句。"],
 ["Cover your mouth.","遮住你的嘴巴。","打噴嚏或咳嗽時常說這句。祈使句用原形動詞 Cover 開頭。"],
 ["The fish's mouth is big.","那條魚的嘴巴很大。","the fish's 是「那條魚的」，所有格在名詞後面加 's。mouth 是單數，用 is。"]]],
["hair","n.","頭髮",[
 ["Her hair is long.","她的頭髮很長。","hair 指「整頭頭髮」時是不可數名詞，不加 s，be 動詞用 is。"],
 ["My brother's hair is short and black.","我弟弟的頭髮又短又黑。","My brother's 是「我弟弟的」，名詞加 's。hair 不可數，所以用 is，不用 are。"],
 ["Don't touch my hair!","不要摸我的頭髮！","否定祈使句：Don't + 原形動詞 touch。my 是「我的」。"]]],
["hand","n.","手",[
 ["Raise your hand, please.","請舉手。","祈使句用原形動詞 Raise 開頭。上課想發言時，老師常說這句。"],
 ["Put your hands on the desk.","把你的手放在桌上。","祈使句用原形動詞 Put 開頭。兩隻手用複數 hands。on the desk 是「在桌子上」。"],
 ["There is a pen in his hand.","他的手裡有一枝筆。","There is + a + 單數名詞。in his hand 是「在他的手裡」，his 是「他的」。"]]],
["arm","n.","手臂",[
 ["Raise your arms.","舉起你的雙臂。","祈使句用原形動詞 Raise 開頭。兩隻手臂用複數 arms。"],
 ["The baby is in her mother's arms.","寶寶在她媽媽的懷裡。","her mother's 是「她媽媽的」，名詞加 's 表示所有格。in + 某人's arms 是「在某人的懷裡」。"],
 ["My arm is long, but my sister's arm is short.","我的手臂很長，但我妹妹的手臂很短。","my sister's arm 是「我妹妹的手臂」。arm 是單數，搭配 is。"]]],
["leg","n.","腿",[
 ["Dogs have four legs.","狗有四條腿。","Dogs 是複數主詞，動詞用 have。four 後面接複數 legs。"],
 ["Stand on one leg.","單腳站立。","祈使句用原形動詞 Stand 開頭。one 後面接單數 leg。"],
 ["Your legs are long!","你的腿好長！","Your legs 是複數，be 動詞用 are。Your 是所有格「你的」。"]]],
["foot","n.","腳",[
 ["Stand on your right foot.","用你的右腳站著。","祈使句用原形動詞 Stand 開頭。right foot 只有一隻腳，所以用單數 foot。"],
 ["I have two feet.","我有兩隻腳。","foot 的複數是不規則的 feet，不能寫成 foots。two 後面要接複數名詞。"],
 ["Don't put your feet on the table.","不要把腳放在桌上。","否定祈使句：Don't + 原形動詞 put。feet 是 foot 的複數。"]]],
["tooth","n.","牙齒",[
 ["Look! This is my new tooth.","你看！這是我新長的牙齒。","Look! 是祈使句。this 搭配 is，後面接單數 tooth。"],
 ["Open your mouth and show me your teeth.","張開嘴巴，讓我看看你的牙齒。","兩個祈使句用 and 連起來。tooth 的複數是不規則的 teeth，不是 tooths。"],
 ["How many teeth are there in your mouth?","你的嘴巴裡有幾顆牙齒？","How many + 複數名詞 + are there...? 問「有幾個」。tooth 的複數 teeth 要特別背。"]]],
/* ---------- 衣服 ---------- */
["hat","n.","（有邊的）帽子",[
 ["Put on your hat.","戴上你的帽子。","祈使句用原形動詞 Put 開頭。put on 是「穿上、戴上」。"],
 ["Whose hat is this? It's Tom's.","這是誰的帽子？是湯姆的。","Whose + 名詞 問「誰的……」。Tom's 後面省略了 hat，意思是「湯姆的（帽子）」。"],
 ["There are two hats on the bed.","床上有兩頂帽子。","There are + 複數名詞 hats。hat 字尾是 /t/，加 s 唸 /s/。"]]],
["coat","n.","外套；大衣",[
 ["Take off your coat, please.","請把外套脫下。","祈使句用原形動詞 Take 開頭。take off 是「脫下」，和 put on 相反。"],
 ["My father's coat is black.","我爸爸的大衣是黑色的。","My father's 是「我爸爸的」，名詞加 's 表示所有格。"],
 ["Where is my coat? It's behind the door.","我的外套在哪裡？在門後面。","Where is + 單數名詞？問位置。回答用 It's + 介系詞片語，behind the door 是「在門後面」。"]]],
["jacket","n.","夾克",[
 ["This is my new jacket.","這是我的新夾克。","this 搭配 is。形容詞 new 放在名詞 jacket 前面；前面有 my，就不再加 a。"],
 ["Your jacket is on the chair.","你的夾克在椅子上。","be 動詞 + 介系詞片語表示「在哪裡」。on the chair 是「在椅子上」。"],
 ["Don't forget your jacket.","別忘了你的夾克。","否定祈使句：Don't + 原形動詞 forget。"]]],
["shirt","n.","襯衫",[
 ["His shirt is white.","他的襯衫是白色的。","His 是「他的」。His shirt 是單數，搭配 is。"],
 ["Whose shirts are these? They're my brother's.","這些是誰的襯衫？是我哥哥的。","these 搭配 are 和複數 shirts。回答用 They're，my brother's 是「我哥哥的」。"],
 ["Put your shirts on the bed.","把你的襯衫放在床上。","祈使句用原形動詞 Put 開頭。shirts 字尾是 /ts/，-s 唸 /s/。"]]],
["skirt","n.","裙子",[
 ["Her skirt is pink.","她的裙子是粉紅色的。","Her 是「她的」，後面接名詞 skirt。單數用 is。"],
 ["Is this your skirt? No, it's my sister's.","這是你的裙子嗎？不，是我姊姊的。","this 的問句用 it 回答。my sister's 後面省略了 skirt。"],
 ["There are three skirts in the box.","箱子裡有三件裙子。","There are + 複數名詞 skirts。in the box 是「在箱子裡」。"]]],
["dress","n.","洋裝",[
 ["This is Amy's dress.","這是艾美的洋裝。","Amy's 是「艾美的」，人名加 's 表示所有格。"],
 ["There are two dresses on the sofa.","沙發上有兩件洋裝。","dress 字尾是 ss，複數要加 es：dresses，-es 唸 /ɪz/。"],
 ["Let's buy a dress for Mom.","我們幫媽媽買一件洋裝吧。","Let's + 原形動詞 buy，表示「我們一起……吧」。"]]],
["pants","n.","褲子",[
 ["My pants are long.","我的褲子很長。","褲子有兩條褲管，pants 永遠用複數，be 動詞用 are。"],
 ["Whose pants are these?","這是誰的褲子？","pants 是複數，所以用 these 和 are，不能說 Whose pants is this?。"],
 ["Put on your pants, Tim.","提姆，把你的褲子穿上。","祈使句用原形動詞 Put 開頭。叫人名可以放在句尾，前面加逗號。"]]],
["shoe","n.","鞋子",[
 ["Where are my shoes? They're under the bed.","我的鞋子在哪裡？在床底下。","Where are + 複數名詞？問位置，回答用 They're。under the bed 是「在床底下」。"],
 ["Take off your shoes, please.","請脫鞋。","祈使句用原形動詞 Take 開頭。鞋子是一雙，用複數 shoes。"],
 ["There is a shoe next to the door.","門旁邊有一隻鞋子。","There is + a + 單數 shoe（只有一隻）。next to 是「在……旁邊」。"]]],
["sock","n.","襪子",[
 ["My socks are white.","我的襪子是白色的。","socks 是複數，用 are。sock 字尾是 /k/，加 s 唸 /s/。"],
 ["There is a sock under the sofa.","沙發底下有一隻襪子。","There is + a + 單數名詞。under 是「在……下面」。"],
 ["Don't put your socks on the table!","不要把你的襪子放在桌上！","否定祈使句：Don't + 原形動詞 put。"]]],
/* ---------- 房子與房間 ---------- */
["house","n.","房子；家",[
 ["This is my house.","這是我家。","this 搭配 is。前面有 my，就不加 a。"],
 ["There are five rooms in our house.","我們家有五個房間。","There are + 複數名詞 rooms。our 是「我們的」。"],
 ["Let's go to Grandma's house.","我們去奶奶家吧。","Let's + 原形動詞 go。Grandma's house 是「奶奶的房子」，名詞加 's 表示所有格。"]]],
["bedroom","n.","臥室",[
 ["My bedroom is small.","我的臥室很小。","My bedroom 是單數，用 is。"],
 ["There is a big bed in my bedroom.","我的臥室裡有一張大床。","There is + a + 單數名詞。形容詞 big 放在 bed 前面，a 放在最前面。"],
 ["Where is Dad? He's in his bedroom.","爸爸在哪裡？他在他的臥室裡。","Where is + 人？問人在哪裡。回答用 He's，in his bedroom 是「在他的臥室裡」。"]]],
["kitchen","n.","廚房",[
 ["Mom is in the kitchen.","媽媽在廚房裡。","be 動詞 + in + 地方，表示「在某處」。Mom 是單數，用 is。"],
 ["Is there a table in the kitchen? Yes, there is.","廚房裡有桌子嗎？有。","There is 的疑問句：把 is 移到 there 前面，變成 Is there...?。回答 Yes, there is. 或 No, there isn't.。"],
 ["Let's cook in the kitchen.","我們在廚房煮飯吧。","Let's + 原形動詞 cook，表示「我們一起……吧」。"]]],
["bathroom","n.","浴室；廁所",[
 ["Where is the bathroom?","浴室（廁所）在哪裡？","Where is + 單數名詞？問位置。在別人家想借廁所時常用這句。"],
 ["There are two bathrooms in my house.","我家有兩間浴室。","There are + 複數名詞 bathrooms。"],
 ["Don't run in the bathroom.","不要在浴室裡跑。","否定祈使句：Don't + 原形動詞 run。"]]],
["living room","n.","客廳",[
 ["We are in the living room.","我們在客廳裡。","We 搭配 are。in the living room 是「在客廳裡」。"],
 ["There is a big sofa in the living room.","客廳裡有一張大沙發。","There is + a + 單數名詞。形容詞 big 放在 sofa 前面。"],
 ["Let's watch TV in the living room.","我們在客廳看電視吧。","Let's + 原形動詞 watch。watch TV 是「看電視」，TV 前面不加 the。"]]],
["door","n.","門",[
 ["Open the door, please.","請開門。","祈使句用原形動詞 Open 開頭，please 放句尾前面加逗號。"],
 ["Don't close the door.","不要關門。","否定祈使句：Don't + 原形動詞 close。"],
 ["There is a cat in front of the door.","門前面有一隻貓。","There is + a + 單數名詞。in front of 是「在……前面」，三個字要一起記。"]]],
["window","n.","窗戶",[
 ["Close the window, please.","請關窗。","祈使句用原形動詞 Close 開頭。"],
 ["There are four windows in the classroom.","教室裡有四扇窗戶。","There are + 複數名詞。windows 的 -s 前面是母音 /oʊ/，所以唸 /z/。"],
 ["The lamp is next to the window.","檯燈在窗戶旁邊。","be 動詞 + 介系詞片語表示位置。next to 是「在……旁邊」。"]]],
["floor","n.","地板",[
 ["Sit on the floor.","坐在地板上。","祈使句用原形動詞 Sit 開頭。on the floor 是「在地板上」。"],
 ["There are many books on the floor.","地板上有很多書。","many 後面接複數名詞 books，所以用 There are。"],
 ["Whose bag is on the floor?","地上是誰的書包？","Whose bag 是「誰的書包」，當主詞用，單數搭配 is。"]]],
/* ---------- 家具與家裡的東西 ---------- */
["table","n.","桌子；餐桌",[
 ["There is a cake on the table.","桌上有一個蛋糕。","There is + a + 單數名詞。on the table 是「在桌子上」。"],
 ["Don't sit on the table.","不要坐在桌子上。","否定祈使句：Don't + 原形動詞 sit。"],
 ["The cat is under the table.","貓在桌子底下。","be 動詞 + 介系詞片語表示位置。under 是「在……下面」。"]]],
["bed","n.","床",[
 ["There is a teddy bear on my bed.","我的床上有一隻泰迪熊。","There is + a + 單數名詞。on my bed 是「在我的床上」。"],
 ["Go to bed now, Ken.","肯，現在去睡覺。","go to bed 是「上床睡覺」，bed 前面不加 the。祈使句用原形動詞 Go 開頭。"],
 ["Is the cat under the bed? Yes, it is.","貓在床底下嗎？是的。","the cat 用 it 回答。under the bed 是「在床底下」。"]]],
["sofa","n.","沙發",[
 ["Sit on the sofa, please.","請坐在沙發上。","祈使句用原形動詞 Sit 開頭，加 please 比較有禮貌。"],
 ["There are two cats on the sofa.","沙發上有兩隻貓。","There are + 複數名詞 cats。"],
 ["Whose jacket is on the sofa?","沙發上是誰的夾克？","Whose jacket 是「誰的夾克」，當主詞，單數搭配 is。"]]],
["lamp","n.","燈；檯燈",[
 ["There is a lamp on my desk.","我的書桌上有一盞檯燈。","There is + a + 單數名詞。"],
 ["Don't touch the lamp. It's hot.","別碰那盞燈，它很燙。","否定祈使句：Don't + 原形動詞 touch。第二句用 It 代替 the lamp。"],
 ["The lamps are new.","這些燈是新的。","lamps 是複數，用 are。lamp 字尾是 /p/，加 s 唸 /s/。"]]],
["box","n.","箱子；盒子",[
 ["What is in the box?","箱子裡有什麼？","What is in + 地方？問「裡面有什麼」。"],
 ["There are three boxes under the table.","桌子下面有三個箱子。","box 字尾是 x，複數要加 es 變成 boxes，-es 唸 /ɪz/。"],
 ["Open the box, please.","請打開箱子。","祈使句用原形動詞 Open 開頭。"]]],
["picture","n.","圖畫；照片",[
 ["Look at this picture.","看看這張照片。","Look at + 東西，表示「看……」。this 放在名詞 picture 前面。"],
 ["There is a picture on the wall.","牆上有一幅畫。","There is + a + 單數名詞。掛在牆上也用 on the wall。"],
 ["Whose picture is this? It's Lisa's.","這是誰的畫？是麗莎的。","Whose + 名詞 問「誰的……」。Lisa's 是「麗莎的」。"]]],
["shelf","n.","架子；層架",[
 ["Your books are on the shelf.","你的書在架子上。","Your books 是複數，用 are。on the shelf 是「在架子上」。"],
 ["There are three shelves in my bedroom.","我的臥室裡有三個架子。","shelf 字尾是 f，複數要把 f 改成 v 再加 es，變成 shelves。"],
 ["Put the box on the top shelf.","把箱子放在最上層的架子上。","祈使句用原形動詞 Put 開頭。top shelf 是「最上層的架子」。"]]],
["pillow","n.","枕頭",[
 ["My pillow is soft.","我的枕頭很軟。","My pillow 是單數，用 is。soft 是「軟的」。"],
 ["There are two pillows on the bed.","床上有兩個枕頭。","There are + 複數名詞。pillows 的 -s 唸 /z/。"],
 ["Don't throw the pillows!","不要丟枕頭！","否定祈使句：Don't + 原形動詞 throw。"]]],
["soap","n.","肥皂",[
 ["Wash your hands with soap.","用肥皂洗手。","祈使句用原形動詞 Wash 開頭。with + 東西，表示「用……」。"],
 ["Where is the soap? It's in the bathroom.","肥皂在哪裡？在浴室裡。","soap 是不可數名詞，用 is 問，用 It's 回答。"],
 ["There is no soap in the bathroom.","浴室裡沒有肥皂。","There is no + 名詞，表示「沒有……」。soap 不可數，不加 s，搭配 is。"]]],
/* ---------- 位置介系詞 ---------- */
["in","prep.","在……裡面",[
 ["The cat is in the box.","貓在箱子裡。","be 動詞 + in + 地方，表示「在……裡面」。"],
 ["There are three students in the classroom.","教室裡有三位學生。","There are + 複數名詞 students。in the classroom 是「在教室裡」。"],
 ["What's in your bag?","你的書包裡有什麼？","What's 是 What is 的縮寫。in your bag 是「在你的書包裡」。"]]],
["on","prep.","在……上面",[
 ["Your pen is on the desk.","你的筆在書桌上。","on 表示「在……上面」，而且有碰到表面。"],
 ["There is a clock on the wall.","牆上有一個時鐘。","There is + a + 單數名詞。貼在牆上、掛在牆上都用 on the wall。"],
 ["Put your hands on your head.","把你的手放在頭上。","祈使句用原形動詞 Put 開頭。on your head 是「在你的頭上」。"]]],
["under","prep.","在……下面",[
 ["The dog is under the table.","狗在桌子底下。","be 動詞 + under + 地方，表示「在……下面」。"],
 ["Are your shoes under the bed? Yes, they are.","你的鞋子在床底下嗎？是的。","your shoes 是複數，用 Are 問，用 they 回答。"],
 ["There is a ball under the chair.","椅子下面有一顆球。","There is + a + 單數名詞。under the chair 是「在椅子下面」。"]]],
["next to","prep.","在……旁邊",[
 ["Sit next to me, Amy.","艾美，坐在我旁邊。","祈使句用原形動詞 Sit 開頭。next to 後面接 me，不能說 next to I。"],
 ["The bathroom is next to my bedroom.","浴室在我的臥室旁邊。","be 動詞 + next to + 地方，表示「在……旁邊」。"],
 ["Who is the boy next to Ken?","肯旁邊的那個男孩是誰？","Who 問人是誰。next to Ken 放在 the boy 後面，說明是哪一個男孩。"]]],
["behind","prep.","在……後面",[
 ["The ball is behind the sofa.","球在沙發後面。","be 動詞 + behind + 地方，表示「在……後面」。"],
 ["Who is behind the door?","誰在門後面？","Who 問人是誰，Who 當主詞時，be 動詞用 is。"],
 ["There is a tree behind our house.","我們家後面有一棵樹。","There is + a + 單數名詞。our 是「我們的」。"]]],
["in front of","prep.","在……前面",[
 ["There is a dog in front of my house.","我家前面有一隻狗。","There is + a + 單數名詞。in front of 三個字要一起用，意思是「在……前面」。"],
 ["Don't stand in front of the TV!","不要站在電視前面！","否定祈使句：Don't + 原形動詞 stand。"],
 ["The teacher is in front of the blackboard.","老師在黑板前面。","be 動詞 + in front of + 地方。in front of 的相反是 behind。"]]],
/* ---------- 數字 ---------- */
["eleven","num.","十一",[
 ["I am eleven years old.","我十一歲。","說年齡用 be 動詞 + 數字 + years old。eleven 大於一，所以 years 用複數。"],
 ["There are eleven boys in our class.","我們班有十一個男生。","There are + 數字 + 複數名詞。"],
 ["How many eggs are there? There are eleven.","有幾顆蛋？有十一顆。","How many + 複數名詞 + are there? 問數量。回答時可以省略名詞：There are eleven.。"]]],
["twelve","num.","十二",[
 ["My brother is twelve.","我哥哥十二歲。","年齡可以只說數字：He is twelve.，也可以說 twelve years old。"],
 ["There are twelve eggs in the box.","盒子裡有十二顆蛋。","twelve 後面接複數名詞 eggs，所以用 There are。"],
 ["Count to twelve.","數到十二。","祈使句用原形動詞 Count 開頭。count to + 數字，表示「數到……」。"]]],
["thirteen","num.","十三",[
 ["I am thirteen years old.","我十三歲。","I 搭配 am。years 是複數，因為 thirteen 大於一。"],
 ["There are thirteen girls in my class.","我們班有十三個女生。","There are + 數字 + 複數名詞 girls。"],
 ["How many pencils are there in your pencil case? Thirteen.","你的鉛筆盒裡有幾枝鉛筆？十三枝。","How many 後面接複數名詞 pencils。簡答可以只說數字。"]]],
["fourteen","num.","十四",[
 ["My sister is fourteen.","我姊姊十四歲。","My sister 是單數，用 is。"],
 ["There are fourteen chairs in the room.","房間裡有十四張椅子。","There are + 數字 + 複數名詞 chairs。"],
 ["Turn to page fourteen.","翻到第十四頁。","祈使句用原形動詞 Turn 開頭。page + 數字 表示「第幾頁」，前面不加 the。"]]],
["fifteen","num.","十五",[
 ["Fifteen plus five is twenty.","十五加五等於二十。","算數時，plus 是「加」，等號用 is。"],
 ["There are fifteen books on the shelf.","架子上有十五本書。","There are + 數字 + 複數名詞 books。"],
 ["Wait for fifteen minutes, please.","請等十五分鐘。","祈使句用原形動詞 Wait 開頭。wait for 是「等待」。minutes 是複數。"]]],
["sixteen","num.","十六",[
 ["Kevin is sixteen years old.","凱文十六歲。","Kevin 是單數，用 is。"],
 ["There are sixteen windows in our school.","我們學校有十六扇窗戶。","There are + 數字 + 複數名詞 windows。"],
 ["Ten plus six is sixteen.","十加六等於十六。","six（六）+ teen 就是 sixteen（十六）。"]]],
["seventeen","num.","十七",[
 ["There are seventeen students in the classroom.","教室裡有十七位學生。","There are + 數字 + 複數名詞 students。"],
 ["Look at page seventeen.","看第十七頁。","祈使句用原形動詞 Look 開頭。page seventeen 是「第十七頁」。"],
 ["Is your cousin seventeen? Yes, she is.","你的表姊十七歲嗎？是的。","your cousin 是女生，回答用 she。"]]],
["eighteen","num.","十八",[
 ["My brother is eighteen.","我哥哥十八歲。","My brother 是單數，用 is。"],
 ["There are eighteen apples in the box.","箱子裡有十八顆蘋果。","There are + 數字 + 複數名詞 apples。"],
 ["Nine plus nine is eighteen.","九加九等於十八。","eight（八）+ teen 就是 eighteen，注意只有一個 t。"]]],
["nineteen","num.","十九",[
 ["There are nineteen boys in our class.","我們班有十九個男生。","There are + 數字 + 複數名詞 boys。"],
 ["Nineteen plus one is twenty.","十九加一等於二十。","nine（九）+ teen 就是 nineteen，nine 的 e 要保留。"],
 ["My sister is nineteen years old.","我姊姊十九歲。","說年齡：be 動詞 + 數字 + years old。"]]],
["twenty","num.","二十",[
 ["There are twenty desks in the classroom.","教室裡有二十張書桌。","There are + 數字 + 複數名詞 desks。"],
 ["Count from one to twenty.","從一數到二十。","祈使句用原形動詞 Count 開頭。from... to... 是「從……到……」。"],
 ["There are twenty pictures on the wall.","牆上有二十張照片。","twenty 後面接複數名詞 pictures。"]]],
["thirty","num.","三十",[
 ["There are thirty students in my class.","我們班有三十位學生。","There are + 數字 + 複數名詞 students。"],
 ["My aunt is thirty years old.","我阿姨三十歲。","My aunt 是單數，用 is。"],
 ["Thirty minus ten is twenty.","三十減十等於二十。","minus 是「減」。注意 thirty（三十）和 thirteen（十三）不一樣。"]]],
["forty","num.","四十",[
 ["My father is forty.","我爸爸四十歲。","My father 是單數，用 is。"],
 ["There are forty books in the box.","箱子裡有四十本書。","There are + 數字 + 複數名詞 books。"],
 ["Turn to page forty.","翻到第四十頁。","祈使句用原形動詞 Turn 開頭。注意 forty 沒有 u，four 才有。"]]],
["fifty","num.","五十",[
 ["There are fifty chairs in the room.","房間裡有五十張椅子。","There are + 數字 + 複數名詞 chairs。"],
 ["My uncle is fifty.","我叔叔五十歲。","My uncle 是單數，用 is。"],
 ["Fifty plus fifty is one hundred.","五十加五十等於一百。","plus 是「加」。one hundred 是「一百」。"]]],
["hundred","num.","百",[
 ["There are two hundred students in our school.","我們學校有兩百位學生。","hundred 前面有數字時不加 s：two hundred，不說 two hundreds。"],
 ["One hundred minus one is ninety-nine.","一百減一等於九十九。","「一百」可以說 one hundred 或 a hundred。"],
 ["Count from one to one hundred.","從一數到一百。","祈使句用原形動詞 Count 開頭。"]]],
/* ---------- 祈使句常用動詞 ---------- */
["open","v.","打開",[
 ["Open your books to page ten.","把書翻到第十頁。","祈使句用原形動詞 Open 開頭。open... to page + 數字，是「翻到第幾頁」。"],
 ["Don't open the window.","不要開窗戶。","否定祈使句：Don't + 原形動詞 open。"],
 ["Let's open the box.","我們來打開箱子吧。","Let's + 原形動詞 open，表示「我們一起……吧」。"]]],
["close","v.","關上；閉上",[
 ["Close the door, please.","請關門。","祈使句用原形動詞 Close 開頭。"],
 ["Don't close your eyes.","不要閉上眼睛。","否定祈使句：Don't + 原形動詞 close。"],
 ["Let's close the windows.","我們把窗戶關起來吧。","Let's + 原形動詞 close。windows 是複數。"]]],
["sit","v.","坐",[
 ["Sit down, please.","請坐下。","祈使句用原形動詞 Sit 開頭。sit down 是「坐下」。"],
 ["Don't sit on the desk.","不要坐在書桌上。","否定祈使句：Don't + 原形動詞 sit。"],
 ["Let's sit on the floor.","我們坐在地板上吧。","Let's + 原形動詞 sit。"]],null,null,"🪑|坐下"],
["stand","v.","站立",[
 ["Stand up, please.","請起立。","祈使句用原形動詞 Stand 開頭。stand up 是「站起來」，和 sit down 相反。"],
 ["Don't stand on the chair.","不要站在椅子上。","否定祈使句：Don't + 原形動詞 stand。"],
 ["Stand behind Amy.","站在艾美後面。","祈使句用原形動詞 Stand 開頭。behind 是「在……後面」。"]]],
["look","v.","看",[
 ["Look at the blackboard.","看黑板。","祈使句用原形動詞 Look 開頭。look at + 東西，表示「看……」。"],
 ["Look! There is a mouse under the bed!","你看！床底下有一隻老鼠！","Look! 單獨使用時，是要別人注意看。There is + a + 單數名詞。"],
 ["Don't look at my notebook.","不要看我的筆記本。","否定祈使句：Don't + 原形動詞 look。"]],null,null,"👀|看"],
["listen","v.","聽",[
 ["Listen to me, class.","同學們，聽我說。","listen to + 人或東西，表示「聽……」。to 後面接 me，不能說 to I。"],
 ["Listen! Who is at the door?","聽！是誰在門口？","Listen! 單獨使用時，是要別人注意聽。at the door 是「在門口」。"],
 ["Let's listen to some music.","我們來聽一點音樂吧。","Let's + 原形動詞 listen。"]],null,null,"👂|聽"],
["come","v.","來",[
 ["Come in, please.","請進。","祈使句用原形動詞 Come 開頭。come in 是「進來」。"],
 ["Come and sit next to me.","過來坐我旁邊。","兩個原形動詞用 and 連接：Come and sit。"],
 ["Don't come into my room!","不要進來我的房間！","否定祈使句：Don't + 原形動詞 come。into 表示「進入……裡面」。"]]],
["wait","v.","等待",[
 ["Wait for me!","等等我！","祈使句用原形動詞 Wait 開頭。wait for + 人，表示「等某人」。"],
 ["Please wait here.","請在這裡等。","please 放在句首，後面直接接原形動詞 wait。"],
 ["Let's wait for Dad in the living room.","我們在客廳等爸爸吧。","Let's + 原形動詞 wait。in the living room 是「在客廳裡」。"]]],
["say","v.","說",[
 ["Say it again, please.","請再說一次。","祈使句用原形動詞 Say 開頭。again 是「再一次」。"],
 ["Don't say that!","不要說那種話！","否定祈使句：Don't + 原形動詞 say。"],
 ["Let's say thank you to Miss Lin.","我們向林老師說謝謝吧。","Let's + 原形動詞 say。say... to + 人，表示「對某人說……」。"]],null,null,"💬|說"],
["show","v.","給……看；出示",[
 ["Show me your hands.","把你的手給我看。","祈使句用原形動詞 Show 開頭。show + 人 + 東西，表示「給某人看某物」。"],
 ["Please show me your new shoes.","請給我看看你的新鞋子。","please 放在句首。shoes 是複數。"],
 ["Let's show Mom our pictures.","我們把畫拿給媽媽看吧。","Let's + 原形動詞 show。our 是「我們的」，後面接名詞 pictures。"]],null,null,"🙌|給……看"],
/* ---------- 不規則複數名詞與 Whose ---------- */
["man","n.","男人",[
 ["That man is my uncle.","那個男人是我的叔叔。","that 放在名詞 man 前面，指較遠的一個人，搭配 is。"],
 ["There are three men in the room.","房間裡有三個男人。","man 的複數不規則，變成 men，不是 mans。"],
 ["Who is the man next to your father?","你爸爸旁邊的那個男人是誰？","Who 問人是誰。next to your father 說明是哪一個男人。"]]],
["woman","n.","女人",[
 ["The woman in the kitchen is my aunt.","在廚房裡的那位女士是我的阿姨。","in the kitchen 放在 The woman 後面，說明是哪一位。主詞 The woman 是單數，用 is。"],
 ["There are two women at the door.","門口有兩位女士。","woman 的複數是 women，-man 變 -men。注意 women 的 o 唸短 i /ɪ/。"],
 ["Is that woman your teacher? Yes, she is.","那位女士是你的老師嗎？是的。","that woman 是女生，回答用 she。"]]],
["child","n.","小孩",[
 ["She is a happy child.","她是個快樂的孩子。","a 放在形容詞 happy 前面：a happy child。"],
 ["There are five children in the living room.","客廳裡有五個小孩。","child 的複數不規則，變成 children，不能寫 childs 或 childrens。"],
 ["How many children are there in your family? Three.","你家有幾個小孩？三個。","How many + 複數名詞 children + are there...? 問數量。"]]],
["mouse","n.","老鼠",[
 ["There is a mouse in the kitchen!","廚房裡有一隻老鼠！","There is + a + 單數名詞 mouse。"],
 ["There are two mice under the table.","桌子下面有兩隻老鼠。","mouse 的複數不規則，變成 mice，不是 mouses。"],
 ["The mouse's tail is long.","那隻老鼠的尾巴很長。","the mouse's 是「那隻老鼠的」，名詞加 's 表示所有格。"]]],
["tail","n.","尾巴",[
 ["The dog's tail is short.","那隻狗的尾巴很短。","The dog's 是「那隻狗的」。tail 是單數，用 is。"],
 ["Don't pull the cat's tail.","不要拉貓的尾巴。","否定祈使句：Don't + 原形動詞 pull。the cat's 是「那隻貓的」。"],
 ["Monkeys have long tails.","猴子有長長的尾巴。","Monkeys 是複數主詞，動詞用 have。monkey 是母音 + y 結尾，直接加 s。"]]],
["whose","pron.","誰的",[
 ["Whose book is this? It's Ben's.","這是誰的書？是班的。","Whose + 名詞 問「誰的……」。this 的問句用 It 回答，Ben's 是「班的（書）」。"],
 ["Whose shoes are these? They're my sister's.","這些是誰的鞋子？是我妹妹的。","these 搭配 are 和複數 shoes，回答用 They're。"],
 ["Whose cat is under the table?","桌子下面是誰的貓？","Whose cat 是「誰的貓」，當主詞，單數搭配 is。不要和 Who's（Who is）搞混。"]],null,null,"❓|誰的"]
];

const J1_1_2_GRAMMAR = [
{ id:"g1", title:"祈使句與 Let's",
  intro:"祈使句用來命令、請求或提醒別人做（或不要做）某件事。句子用原形動詞開頭，省略主詞 you。想邀請大家「一起做」，就用 Let's。",
  table:[["用法","句型","例子"],["肯定祈使句","原形動詞 + ……","Open the door."],["否定祈使句","Don't + 原形動詞 + ……","Don't run."],["形容詞的祈使句","Be + 形容詞 / Don't be + 形容詞","Be quiet. Don't be late."],["禮貌的說法","Please + 祈使句 / 祈使句, please.","Please sit down. Sit down, please."],["邀請一起做","Let's + 原形動詞 / Let's not + 原形動詞","Let's go. Let's not wait."]],
  points:[
   "祈使句省略主詞 you，動詞一律用原形：Sit down.，不說 Sits down. 或 Sitting down.。",
   "否定祈使句是在原形動詞前面加 Don't：Don't touch it.，不說 No touch it. 或 Not touch it.。",
   "後面是形容詞（quiet、late、careful）時，要用 be 動詞的原形 Be：Be careful.；否定是 Don't be late.，不說 Don't late.。",
   "please 可以放句首或句尾，放句尾時前面要加逗號：Please open the window. = Open the window, please.。",
   "Let's 是 Let us 的縮寫，後面接原形動詞：Let's go.，不說 Let's to go. 或 Let's going.。否定是 Let's not + 原形動詞：Let's not wait here.。",
   "回應 Let's...：同意可以說 OK.、Good idea.、Sure.；不同意可以說 Sorry, I'm busy.。不能用 Yes, I am. 這類 be 動詞簡答。"],
  ex:[
   ["Open your books, please.","請打開你們的書。","祈使句用原形動詞 Open 開頭，please 放句尾前面加逗號。"],
   ["Don't sit on the table.","不要坐在桌子上。","否定祈使句：Don't + 原形動詞 sit。"],
   ["Be quiet, class.","同學們，安靜。","quiet 是形容詞，前面要加 Be。"],
   ["Don't be late.","不要遲到。","late 是形容詞，否定祈使句要說 Don't be late.。"],
   ["Let's go to the living room. — OK.","我們去客廳吧。——好啊。","Let's + 原形動詞 go。回答可以說 OK. 或 Good idea.。"]]},
{ id:"g2", title:"所有格：my / your / his / her… 和 Whose",
  intro:"所有格表示「誰的」。代名詞有自己的所有格（my、your、his……），名詞則在後面加上 's。想問「誰的」，就用 Whose。",
  table:[["主格","所有格","例子"],["I","my 我的","my bag"],["you","your 你的；你們的","your shoes"],["he","his 他的","his hat"],["she","her 她的","her dress"],["it","its 它的；牠的","its tail"],["we","our 我們的","our house"],["they","their 他們的","their bedroom"],["名詞","名詞 + 's","Tom's coat, the dog's tail"]],
  points:[
   "所有格後面一定要接名詞：This is my bag.，不能只說 This is my.。",
   "所有格前面不能再加 a、an、the、this：my bag，不說 a my bag 或 the my bag。",
   "名詞所有格：單數名詞加 's（Tom's、the dog's）；s 結尾的複數名詞只加 '（my parents' bedroom）；不是 s 結尾的複數名詞加 's（the children's room、men's shoes）。",
   "its（它的、牠的）沒有一撇；it's 是 it is 的縮寫。Its tail is long. / It's a cat. 是常考陷阱。",
   "Whose + 名詞 問「誰的……」：Whose hat is this? It's Tom's.。回答時，名詞所有格後面的名詞可以省略。",
   "Whose 和 Who's 唸起來一樣，但 Who's 是 Who is 的縮寫，問「是誰」：Who's that boy? He's my brother.。"],
  ex:[
   ["This is Ken. His bedroom is big.","這是肯，他的臥室很大。","Ken 是男生，所有格用 His。"],
   ["Look at the cat. Its eyes are green.","看那隻貓，牠的眼睛是綠色的。","動物的所有格用 Its，沒有一撇。"],
   ["Amy's dress is pink.","艾美的洋裝是粉紅色的。","人名加 's 表示「某人的」。"],
   ["Whose socks are these? They're my brother's.","這些是誰的襪子？是我弟弟的。","Whose + 複數名詞 socks，搭配 are，回答用 They're。"],
   ["We are in our classroom.","我們在我們的教室裡。","we 的所有格是 our。"]]},
{ id:"g3", title:"名詞複數和 How many",
  intro:"一個東西用單數，兩個以上用複數。大部分名詞加 s 就變複數，但有些要加 es、改 ies，還有一些長得完全不一樣，要特別背。",
  table:[["規則","變化","例子"],["一般名詞","加 s","hat → hats, leg → legs, window → windows"],["字尾 s、x、ch、sh","加 es","box → boxes, dress → dresses, watch → watches"],["子音 + y","去 y 加 ies","baby → babies, family → families"],["母音 + y","直接加 s","boy → boys, day → days"],["字尾 f","改 v 加 es","shelf → shelves, leaf → leaves"],["不規則變化","整個字要背","man → men, woman → women, child → children, foot → feet, tooth → teeth, mouse → mice"]],
  points:[
   "a、an、one 後面接單數名詞；two、three、many 這些表示兩個以上的字，後面接複數名詞。",
   "子音 + y 要去 y 加 ies（baby → babies），但母音 + y 直接加 s（boy → boys、monkey → monkeys）。",
   "不規則複數已經是複數，不能再加 s：children，不說 childrens；feet，不說 feets。",
   "pants（褲子）、glasses（眼鏡）永遠用複數，搭配 are：My pants are new.。",
   "hair、soap、water 是不可數名詞，沒有複數，不加 s，be 動詞用 is：Her hair is long.。",
   "How many + 複數名詞 問「有幾個」：How many boxes are there?，不說 How many box。"],
  ex:[
   ["There are three boxes on the floor.","地板上有三個箱子。","box 字尾是 x，複數加 es。"],
   ["The babies are cute.","這些寶寶很可愛。","baby 是子音 + y，去 y 加 ies。"],
   ["I have two feet and ten toes.","我有兩隻腳和十根腳趾。","foot 的複數是不規則的 feet。"],
   ["The children are in the living room.","孩子們在客廳裡。","child 的複數是 children，搭配 are。"],
   ["How many mice are there? There are two.","有幾隻老鼠？有兩隻。","How many 後面接複數 mice。"]]},
{ id:"g4", title:"There is / There are 和 Where",
  intro:"想說「某個地方有某樣東西」，用 There is 或 There are。想問東西或人「在哪裡」，用 Where，回答時用位置介系詞。",
  table:[["句型","用法","例子"],["There is + a/an + 單數名詞","某處有一個……","There is a cat on the bed."],["There are + 複數名詞","某處有幾個……","There are two lamps in the room."],["Is there...? / Are there...?","問「有沒有……」","Is there a sofa? Yes, there is. / No, there isn't."],["How many + 複數 + are there...?","問「有幾個……」","How many boxes are there? There are three."],["Where is / Where are...?","問「在哪裡」","Where is my hat? It's under the bed."],["位置介系詞","in 裡面、on 上面、under 下面、next to 旁邊、behind 後面、in front of 前面","The ball is behind the sofa."]],
  points:[
   "There is 接單數名詞或不可數名詞（There is a book. There is soap.），There are 接複數名詞（There are two books.）。",
   "「某處有……」不能用 have：There is a pen on the desk.，不說 There has a pen... 或 There have a pen...。have 是「某人擁有」：I have a pen.。",
   "疑問句把 is / are 移到 there 前面：Is there...? / Are there...?。回答 Yes, there is. / No, there aren't.。",
   "Where is + 單數？回答用 It's / He's / She's + 位置；Where are + 複數？回答用 They're + 位置。",
   "in front of 是三個字一起用，相反是 behind；next to 是兩個字一起用，不能只說 next。",
   "說「我的書在桌上」要用 My book is on the desk.，There is 後面通常不接 my、the 這類特定的東西。"],
  ex:[
   ["There is a lamp next to the bed.","床旁邊有一盞檯燈。","There is + a + 單數名詞 lamp。"],
   ["There are two pillows on the sofa.","沙發上有兩個枕頭。","There are + 複數名詞 pillows。"],
   ["Is there a TV in your bedroom? No, there isn't.","你的臥室裡有電視嗎？沒有。","疑問句把 Is 放在 there 前面。"],
   ["Where are my shoes? They're under the bed.","我的鞋子在哪裡？在床底下。","Where are + 複數，回答用 They're。"],
   ["The dog is in front of the door.","狗在門前面。","in front of 是「在……前面」。"]]}
];

/* 文法測驗：[題目, [選項 x4], 正確答案索引, 解析, 文法編號] */
const J1_1_2_QUIZ = [
 ["___ the door, please.",["Opens","Open","Opening","To open"],1,"祈使句用原形動詞開頭，所以是 Open。","g1"],
 ["___ talk in class.",["Don't","Doesn't","Not","No"],0,"否定祈使句：Don't + 原形動詞。不能用 Not 或 No 開頭。","g1"],
 ["___ quiet, please.",["Do","Are","Is","Be"],3,"quiet 是形容詞，祈使句要用 be 動詞的原形 Be。","g1"],
 ["Don't ___ late for school.",["are","is","be","being"],2,"late 是形容詞，否定祈使句是 Don't be late.。","g1"],
 ["Let's ___ to the kitchen.",["going","goes","to go","go"],3,"Let's 後面接原形動詞 go，不加 to，也不加 ing。","g1"],
 ["Let's sit on the sofa. — ___",["Yes, I am.","OK. Good idea.","No, it isn't.","Yes, let's not."],1,"回應 Let's... 的提議，可以說 OK. 或 Good idea.。","g1"],
 ["哪一句正確？",["Please sits down.","Don't touches the lamp.","Stand up, please.","Let's to open the box."],2,"祈使句用原形動詞：Stand up, please.。其他三句的動詞形式都錯了。","g1"],
 ["「我們不要在這裡等吧。」正確的英文是？",["Let's not waiting here.","Let's not wait here.","Let's don't wait here.","Not let's wait here."],1,"Let's 的否定是 Let's not + 原形動詞。","g1"],
 ["Tom, ___ your hands. They're dirty.",["wash","washes","washing","to wash"],0,"這是對 Tom 說的祈使句，叫人名時動詞仍用原形 wash。","g1"],
 ["This is Amy. ___ dress is pink.",["She","Her","Hers","She's"],1,"後面有名詞 dress，要用所有格 Her（她的）。","g2"],
 ["Ben and Tim are brothers. ___ bedroom is big.",["They","Their","There","Them"],1,"Ben and Tim 是「他們」，所有格是 Their。There 是「那裡」，唸法很像要小心。","g2"],
 ["Look at the dog. ___ tail is long.",["It's","It","Its'","Its"],3,"「牠的」是 Its，沒有一撇。It's 是 It is 的縮寫。","g2"],
 ["___ shoes are these? — They're my brother's.",["Who","Who's","Whose","What"],2,"回答是「我弟弟的」，問「誰的」要用 Whose + 名詞。","g2"],
 ["This is ___ hat.",["Tom","Toms","Tom is","Tom's"],3,"名詞所有格是在名詞後面加 's：Tom's hat（湯姆的帽子）。","g2"],
 ["Whose jacket is this? — It's ___.",["my sister","my sisters","my sister's","my sister is"],2,"回答「誰的」要用所有格 my sister's，後面省略了 jacket。","g2"],
 ["We are in ___ classroom.",["our","we","us","ours"],0,"後面有名詞 classroom，要用所有格 our（我們的）。","g2"],
 ["These are the ___ shoes. （孩子們的）",["childs'","children's","childrens'","childrens"],1,"children 不是 s 結尾的複數，所有格要加 's：children's。","g2"],
 ["哪一句正確？",["This is a my bag.","That is Ken's pen.","It's tail is short.","Who's book is this?"],1,"Ken's pen 是「肯的筆」。所有格前面不加 a；「牠的」是 Its；問「誰的」要用 Whose。","g2"],
 ["I have two ___.",["foot","foots","feet","feets"],2,"foot 的複數是不規則的 feet，不能再加 s。","g3"],
 ["There are three ___ on the table.",["box","boxs","boxies","boxes"],3,"box 字尾是 x，複數要加 es：boxes。","g3"],
 ["How many ___ are there in your family?",["baby","babys","babies","babyes"],2,"baby 是子音 + y 結尾，去 y 加 ies：babies。","g3"],
 ["Look! There are five ___ in the kitchen.",["mouse","mouses","mices","mice"],3,"mouse 的複數是不規則的 mice。","g3"],
 ["The ___ are in the living room.",["children","child","childs","childrens"],0,"be 動詞是 are，要用複數。child 的複數是 children。","g3"],
 ["How many ___ are there on the shelf?",["book","books","a book","bookes"],1,"How many 後面接複數名詞：books。","g3"],
 ["Those ___ are my uncles.",["man","mans","men","mens"],2,"those 後面接複數名詞，man 的複數是 men。","g3"],
 ["My ___ are new.",["pant","pants","pantses","a pants"],1,"褲子 pants 永遠用複數，搭配 are。","g3"],
 ["哪一個複數是錯的？",["boy → boys","shelf → shelves","tooth → tooths","dress → dresses"],2,"tooth 的複數是不規則的 teeth，不是 tooths。","g3"],
 ["There ___ a lamp on the desk.",["is","are","am","have"],0,"a lamp 是單數，用 There is。","g4"],
 ["There ___ two pillows on the bed.",["is","are","has","be"],1,"two pillows 是複數，用 There are。","g4"],
 ["___ there a TV in your bedroom? — No, there isn't.",["Are","Do","Is","Has"],2,"a TV 是單數，疑問句用 Is there...?。","g4"],
 ["How many windows ___ in the classroom?",["is there","are there","there are","there is"],1,"How many + 複數名詞 + are there...? 疑問句要把 are 放在 there 前面。","g4"],
 ["Where ___ my shoes? — They're under the bed.",["is","am","be","are"],3,"shoes 是複數，用 Where are。","g4"],
 ["Where is the cat? — ___",["It's behind the sofa.","There is a cat.","Yes, it is.","They're on the bed."],0,"Where 問位置，要回答地方。the cat 是單數，用 It's。","g4"],
 ["「球在箱子裡面。」The ball is ___ the box.",["on","in","under","behind"],1,"「在……裡面」是 in。","g4"],
 ["「貓在門的前面。」The cat is ___ the door.",["in front of","behind","next","front of"],0,"「在……前面」是 in front of，三個字缺一不可。behind 是「在……後面」。","g4"],
 ["哪一句正確？",["There have a dog in my house.","There are a dog in my house.","There is a dog in my house.","There is dogs in my house."],2,"「某處有一個……」用 There is + a + 單數名詞，不能用 have。","g4"]
];

/* =========================================================
   上課模式腳本（安安老師）
   say：老師講的話，{ } 裡面用英文語音唸
   board：黑板內容 [英文, [要標亮的字], 是否為錯誤示範]
   chant：口訣
   ask：隨堂提問，答錯會有針對性的回饋，再給一題 again 練習
   ========================================================= */
const J1_1_2_CLASS = {
g1:[
 {say:"哈囉同學！我是安安老師。上課的時候，老師常說：{Stand up.}、{Sit down.}、{Open your books.} 你有沒有發現，這些句子都沒有主詞？它們叫做「祈使句」！", board:[["Stand up.",["Stand"]],["Sit down.",["Sit"]],["Open your books.",["Open"]]]},
 {say:"祈使句就是在叫「你」做事，所以主詞 you 直接省略，用「原形動詞」開頭。原形動詞就是動詞最原本的樣子，不加 s、也不加 ing。", board:[["(You) Open the door.",["Open"]],["Opens the door.",[],true],["Opening the door.",[],true]]},
 {say:"口訣唸三遍，馬上記住！", chant:"祈使句，叫你做，原形動詞站第一個！"},
 {ask:{say:"換你試試看！", q:"___ the window, please.", opts:["Close","Closes","Closing"], ans:0,
   ok:"答對了！祈使句用原形動詞 Close 開頭。",
   bad:{1:"Closes 加了 s，不是原形喔！祈使句一定用原形動詞。",2:"Closing 加了 ing，不是原形喔！祈使句一定用原形動詞。"},
   again:{q:"___ your hand, please.", opts:["Raises","Raise","Raising"], ans:1, exp:"祈使句用原形動詞 Raise 開頭。"}}},
 {say:"那想叫別人「不要」做某件事呢？很簡單，在原形動詞前面加上 {Don't} 就好！{Don't run.}、{Don't touch the lamp.}", board:[["Don't run.",["Don't"]],["Don't touch the lamp.",["Don't","touch"]],["No touch the lamp.",[],true]]},
 {ask:{q:"___ sit on the table.", opts:["No","Not","Don't"], ans:2,
   ok:"沒錯！否定祈使句用 Don't + 原形動詞。",
   bad:{0:"No sit 是中文式英文喔！英文要說 Don't sit。",1:"Not 不能放在句首當否定祈使句，要用 Don't。"},
   again:{q:"___ open the box.", opts:["Don't","Doesn't","Not"], ans:0, exp:"否定祈使句一律用 Don't + 原形動詞。"}}},
 {say:"陷阱來了！如果後面是形容詞，像 {quiet}、{late}、{careful}，前面要請 be 動詞的原形 {Be} 來幫忙：{Be quiet.}、{Be careful.} 否定的時候就說 {Don't be late.}", board:[["Be quiet.",["Be"]],["Don't be late.",["Don't be"]],["Don't late.",[],true]]},
 {say:"這個陷阱很常考，口訣記起來！", chant:"形容詞前面加個 Be，不要遲到 Don't be late！"},
 {ask:{q:"___ careful! The floor is wet.", opts:["Is","Be","Are"], ans:1,
   ok:"太棒了！careful 是形容詞，祈使句要用原形 Be。",
   bad:{0:"is 不是原形喔！be 動詞的原形是 be，所以要用 Be careful。",2:"are 不是原形喔！be 動詞的原形是 be，所以要用 Be careful。"},
   again:{q:"Don't ___ late.", opts:["be","is","are"], ans:0, exp:"late 是形容詞，所以是 Don't be late.。"}}},
 {say:"想要說得客氣一點？加上 {please} 就好！放在句首：{Please sit down.} 放在句尾要記得加逗號：{Sit down, please.} 兩句意思一樣喔。", board:[["Please sit down.",["Please"]],["Sit down, please.",["please"]]]},
 {say:"最後介紹一個好朋友 {Let's}，它是 Let us 的縮寫，意思是「我們一起……吧」。後面一樣接原形動詞：{Let's go.}、{Let's sit on the sofa.}", chant:"Let's 後面接原形，大家一起來行動！", board:[["Let's go.",["Let's","go"]],["Let's sit on the sofa.",["Let's","sit"]],["Let's to go.",[],true]]},
 {ask:{q:"Let's ___ in the living room.", opts:["sits","to sit","sit"], ans:2,
   ok:"正確！Let's 後面直接接原形動詞 sit。",
   bad:{0:"Let's 後面要接原形，不能加 s 喔。",1:"Let's 後面不用加 to，直接接原形動詞。"},
   again:{q:"Let's ___ the box.", opts:["opening","open","opens"], ans:1, exp:"Let's + 原形動詞 open。"}}},
 {say:"別人對你說 Let's... 你可以回答 {OK.}、{Good idea.} 或 {Sure.} 不想做的話，可以說 {Sorry, I'm busy.} 想說「我們不要……吧」，就用 {Let's not}：{Let's not wait here.}", board:[["Let's play. — Good idea!",["Good idea"]],["Let's not wait here.",["Let's not"]]]},
 {ask:{say:"最後一題挑戰！", q:"哪一句是正確的？", opts:["Don't be noisy.","Let's to go home.","Please sits down."], ans:0,
   ok:"完美！noisy 是形容詞，否定祈使句用 Don't be + 形容詞。",
   bad:{1:"Let's 後面不能加 to，要說 Let's go home.。",2:"祈使句用原形動詞，要說 Please sit down.。"},
   again:{q:"哪一句是正確的？", opts:["Be quiet, please.","Don't late.","Let's going."], ans:0, exp:"quiet 是形容詞，要說 Be quiet.。Don't late. 少了 be，Let's 後面要接原形 go。"}}},
 {say:"祈使句全部過關！複習口訣：祈使句，叫你做，原形動詞站第一個；形容詞前面加個 Be；Let's 後面接原形。下課去文法測驗挑戰看看吧！", end:true}
],
g2:[
 {say:"同學好！今天要學怎麼說「誰的東西」，也就是所有格！看黑板：{This is my bag.} 這裡的 {my} 就是「我的」。", board:[["This is my bag.",["my"]]]},
 {say:"每個代名詞都有自己的所有格：I 變 {my}，you 變 {your}，he 變 {his}，she 變 {her}，it 變 {its}，we 變 {our}，they 變 {their}。", board:[["I → my　you → your",["my","your"]],["he → his　she → her　it → its",["his","her","its"]],["we → our　they → their",["our","their"]]]},
 {say:"跟著老師唸，節奏要出來喔！", chant:"我的 my，你的 your，他的 his，她的 her，牠的 its，我們 our，他們 their！"},
 {ask:{q:"This is Amy. ___ dress is red.", opts:["She","Her","He"], ans:1,
   ok:"答對！後面有名詞 dress，要用所有格 Her（她的）。",
   bad:{0:"She 是「她」，當主詞用。後面有名詞 dress，要用「她的」Her。",2:"Amy 是女生，而且這裡要用所有格「她的」Her。"},
   again:{q:"This is Ken. ___ hat is blue.", opts:["His","He","Her"], ans:0, exp:"Ken 是男生，「他的」是 His。"}}},
 {say:"所有格有兩個規矩。第一，後面一定要接名詞：{my bag}。第二，前面不能再加 a 或 the：不能說 a my bag！", board:[["This is my bag.",["my bag"]],["This is a my bag.",[],true],["This is my.",[],true]]},
 {ask:{q:"That is ___ house.", opts:["a our","our","we"], ans:1,
   ok:"讚！our house 是「我們的房子」，前面不加 a。",
   bad:{0:"所有格前面不能再加 a 喔！",2:"we 是主詞「我們」，「我們的」要用 our。"},
   again:{q:"This is ___ bedroom.", opts:["the my","my","I"], ans:1, exp:"所有格 my 前面不加 the。"}}},
 {say:"大陷阱來了！{its} 沒有一撇，是「它的、牠的」；{it's} 有一撇，是 it is 的縮寫。{Look at the dog. Its tail is long. It's cute.}", chant:"沒有一撇 its 是「牠的」，有一撇 it's 是「牠是」！", board:[["Its tail is long.",["Its"]],["It's cute.",["It's"]]]},
 {ask:{q:"Look at the cat. ___ eyes are green.", opts:["It's","Its","It"], ans:1,
   ok:"太厲害了！「牠的眼睛」用 Its，沒有一撇。",
   bad:{0:"It's 是 It is，放進去變成「牠是眼睛」，不對喔！要用 Its。",2:"It 是「牠」，後面接名詞要用所有格 Its。"},
   again:{q:"___ my new jacket.", opts:["Its","It's","It"], ans:1, exp:"這裡是「它是」，It is 縮寫成 It's。"}}},
 {say:"名詞也有所有格，在名詞後面加 {'s} 就好：{Tom's hat}、{my mother's coat}、{the dog's tail}。如果是 s 結尾的複數，只加一撇：{my parents' bedroom}。不是 s 結尾的複數，一樣加 's：{the children's room}。", board:[["Tom's hat",["Tom's"]],["my parents' bedroom",["parents'"]],["the children's room",["children's"]]]},
 {ask:{q:"This is ___ coat.", opts:["Dad","Dad's","Dads"], ans:1,
   ok:"正確！Dad's coat 是「爸爸的外套」。",
   bad:{0:"Dad coat 少了所有格的 's 喔！",2:"Dads 是複數「很多個爸爸」，所有格要加 's。"},
   again:{q:"These are the ___ shoes.（孩子們的）", opts:["children's","childrens'","childs'"], ans:0, exp:"children 不是 s 結尾，所有格加 's：children's。"}}},
 {say:"想問「這是誰的」，就用 {Whose}，後面緊跟著名詞：{Whose hat is this? It's Tom's.} {Whose shoes are these? They're my sister's.} 回答的時候，後面的名詞可以省略。", chant:"問誰的東西用 Whose，Whose 後面緊跟著名詞！", board:[["Whose hat is this? It's Tom's.",["Whose hat","Tom's"]],["Whose shoes are these? They're my sister's.",["Whose shoes","sister's"]]]},
 {say:"小心！{Whose} 和 {Who's} 唸起來一模一樣，可是 Who's 是 Who is 的縮寫，問的是「是誰」：{Who's that boy? He's my brother.}", board:[["Whose bag is this?",["Whose"]],["Who's that boy?",["Who's"]]]},
 {ask:{q:"___ socks are these? — They're Ben's.", opts:["Who's","Whose","Who"], ans:1,
   ok:"答對！回答是「班的」，問「誰的」用 Whose。",
   bad:{0:"Who's 是 Who is，問「是誰」。這裡要問「誰的襪子」，用 Whose。",2:"Who 問「誰」，這裡要問「誰的襪子」，要用 Whose。"},
   again:{q:"___ that girl? — She's my sister.", opts:["Whose","Who's","Who are"], ans:1, exp:"問「那女孩是誰」，Who is 縮寫成 Who's。"}}},
 {ask:{say:"最後一題！", q:"Whose pen is this? — ___", opts:["It's Amy's.","It's Amy.","Its Amy's."], ans:0,
   ok:"完美！It's Amy's. 是「是艾美的」。",
   bad:{1:"It's Amy. 是「這是艾美」，筆不是艾美喔！要用所有格 Amy's。",2:"這裡是「它是」，要用 It's，有一撇。"},
   again:{q:"Whose bag is this? — ___", opts:["It's my.","It's my brother's.","It's brother."], ans:1, exp:"回答用名詞所有格：It's my brother's.。"}}},
 {say:"所有格過關！複習：我的 my，你的 your，他的 his，她的 her，牠的 its，我們 our，他們 their；名詞加 's；沒有一撇 its 是「牠的」；問誰的東西用 Whose。我們下一課見！", end:true}
],
g3:[
 {say:"同學好！一頂帽子是 {a hat}，兩頂帽子呢？是 {two hats}！兩個以上就要用「複數」。今天來學名詞怎麼變複數。", board:[["a hat → two hats",["hats"]]]},
 {say:"大部分的名詞，直接加 {s} 就好：{hat} 變 {hats}，{leg} 變 {legs}，{window} 變 {windows}。", board:[["hat → hats",["hats"]],["leg → legs",["legs"]],["window → windows",["windows"]]]},
 {say:"可是有些字尾已經有嘶嘶聲，像 s、x、ch、sh，再加 s 會唸不出來，所以要加 {es}：{box} 變 {boxes}，{dress} 變 {dresses}，{watch} 變 {watches}。", chant:"s、x、ch、sh，加上 es 才好唸！", board:[["box → boxes",["boxes"]],["dress → dresses",["dresses"]],["watch → watches",["watches"]]]},
 {ask:{q:"one box, two ___", opts:["boxs","boxes","boxies"], ans:1,
   ok:"答對！box 字尾是 x，加 es。",
   bad:{0:"boxs 唸不出來喔！x 結尾要加 es。",2:"box 字尾不是 y，不用改 ies，加 es 就好。"},
   again:{q:"one dress, three ___", opts:["dresss","dresses","dressies"], ans:1, exp:"dress 字尾是 ss，加 es 變成 dresses。"}}},
 {say:"字尾是 y 的要看前面：「子音 + y」要去 y 加 {ies}，像 {baby} 變 {babies}；「母音 + y」直接加 s，像 {boy} 變 {boys}。", board:[["baby → babies",["babies"]],["family → families",["families"]],["boy → boys",["boys"]]]},
 {ask:{q:"one family, two ___", opts:["familys","families","familyes"], ans:1,
   ok:"讚！l 是子音，子音 + y 要去 y 加 ies。",
   bad:{0:"y 前面的 l 是子音，要去 y 加 ies 喔。",2:"不是直接加 es，是去掉 y 再加 ies。"},
   again:{q:"one boy, two ___", opts:["boies","boys","boyes"], ans:1, exp:"o 是母音，母音 + y 直接加 s：boys。"}}},
 {say:"還有 f 結尾的字，要把 f 改成 v 再加 es：{shelf} 變 {shelves}，{leaf} 變 {leaves}。", board:[["shelf → shelves",["shelves"]],["leaf → leaves",["leaves"]]]},
 {say:"最後是不規則的複數，長相完全變了，一定要背！{man} 變 {men}，{woman} 變 {women}，{child} 變 {children}，{foot} 變 {feet}，{tooth} 變 {teeth}，{mouse} 變 {mice}。", chant:"man 變 men，child 變 children；foot 變 feet，tooth 變 teeth；mouse 變 mice 要背熟！", board:[["man → men　woman → women",["men","women"]],["child → children",["children"]],["foot → feet　tooth → teeth",["feet","teeth"]],["mouse → mice",["mice"]]]},
 {ask:{q:"I have two ___.", opts:["foots","feet","feets"], ans:1,
   ok:"太棒了！foot 的複數是 feet。",
   bad:{0:"foot 是不規則變化，不加 s，要變成 feet。",2:"feet 已經是複數了，不能再加 s！"},
   again:{q:"There are three ___ in the kitchen.", opts:["mouses","mice","mices"], ans:1, exp:"mouse 的複數是 mice。"}}},
 {ask:{q:"The ___ are in the living room.", opts:["childrens","children","childs"], ans:1,
   ok:"答對！children 已經是複數，不用再加 s。",
   bad:{0:"children 已經是複數，再加 s 就錯了！",2:"child 是不規則變化，複數是 children。"},
   again:{q:"Those ___ are my teachers.", opts:["womans","women","womens"], ans:1, exp:"woman 的複數是 women。"}}},
 {say:"兩個特別提醒！{pants} 褲子有兩條褲管，永遠用複數，配 are。{hair} 頭髮、{soap} 肥皂是不可數名詞，不加 s，配 is。", board:[["My pants are new.",["pants are"]],["Her hair is long.",["hair is"]],["Her hairs are long.",[],true]]},
 {say:"想問「有幾個」，用 {How many}，後面一定接複數名詞：{How many boxes are there?} 回答：{There are three.}", chant:"How many 問幾個，後面記得接複數！", board:[["How many boxes are there?",["How many","boxes"]],["How many box are there?",[],true]]},
 {ask:{q:"How many ___ are there on the bed?", opts:["pillow","pillows","a pillow"], ans:1,
   ok:"正確！How many 後面接複數 pillows。",
   bad:{0:"How many 後面要接複數名詞喔！",2:"How many 是問很多個，後面不能接 a + 單數。"},
   again:{q:"How many ___ are there in your mouth?", opts:["tooth","teeth","tooths"], ans:1, exp:"How many 接複數，tooth 的複數是 teeth。"}}},
 {say:"複數過關！複習：一般加 s；s、x、ch、sh 加 es；子音 + y 改 ies；f 改 v 加 es；不規則的 men、children、feet、teeth、mice 要背熟；How many 後面接複數。下課！", end:true}
],
g4:[
 {say:"同學好！想說「某個地方有某樣東西」，英文用 {There is} 或 {There are}。看黑板：{There is a cat on the bed.} 床上有一隻貓。", board:[["There is a cat on the bed.",["There is"]]]},
 {say:"要用 is 還是 are，看後面的名詞！一個用 {There is}，兩個以上用 {There are}：{There is a lamp.} {There are two lamps.}", board:[["There is a lamp.",["is","lamp"]],["There are two lamps.",["are","lamps"]]]},
 {say:"口訣來囉！", chant:"一個用 is，很多用 are，There 後面看名詞！"},
 {ask:{q:"There ___ two pillows on my bed.", opts:["is","are","have"], ans:1,
   ok:"答對！two pillows 是複數，用 There are。",
   bad:{0:"two pillows 是兩個，要用 are。",2:"「某處有」不能用 have 喔，要用 There are。"},
   again:{q:"There ___ a sofa in the living room.", opts:["are","is","has"], ans:1, exp:"a sofa 是單數，用 There is。"}}},
 {say:"注意！中文說「有」，很多人會寫成 have，可是「某個地方有」一定用 There is / There are。{have} 是「某人擁有」：{I have a dog.}", board:[["There is a pen on the desk.",["There is"]],["There has a pen on the desk.",[],true],["I have a pen.",["I have"]]]},
 {say:"疑問句一樣是 be 動詞跳到前面：{Is there a TV?} 回答 {Yes, there is.} 或 {No, there isn't.} 複數就用 {Are there...?}", board:[["Is there a TV in your room?",["Is there"]],["Yes, there is. / No, there isn't.",["there is","there isn't"]],["Are there two beds? Yes, there are.",["Are there"]]]},
 {ask:{q:"___ there a TV in the kitchen? — No, there isn't.", opts:["Are","Is","Do"], ans:1,
   ok:"讚！a TV 是單數，用 Is there。",
   bad:{0:"a TV 是單數，要用 Is。",2:"There is 的疑問句不用 Do，要把 Is 移到前面。"},
   again:{q:"___ there two bathrooms in your house? — Yes, there are.", opts:["Is","Are","Have"], ans:1, exp:"two bathrooms 是複數，用 Are there。"}}},
 {say:"接下來學說位置！{in} 在裡面，{on} 在上面，{under} 在下面，{next to} 在旁邊，{behind} 在後面，{in front of} 在前面。", board:[["in　on　under",["in","on","under"]],["next to　behind　in front of",["next to","behind","in front of"]]]},
 {say:"一邊唸一邊用手比，效果最好！", chant:"in 在裡面，on 在上面，under 在下面；next to 在旁邊，behind 在後面，in front of 在前面！"},
 {ask:{q:"「球在沙發後面。」The ball is ___ the sofa.", opts:["in front of","behind","under"], ans:1,
   ok:"正確！「在……後面」是 behind。",
   bad:{0:"in front of 是「在前面」，剛好相反喔！",2:"under 是「在下面」，這裡是「在後面」behind。"},
   again:{q:"「貓在桌子底下。」The cat is ___ the table.", opts:["on","under","in"], ans:1, exp:"「在……下面」是 under。"}}},
 {say:"想問「在哪裡」用 {Where}。單數用 {Where is}，回答 {It's}；複數用 {Where are}，回答 {They're}：{Where is my hat? It's on the bed.} {Where are my shoes? They're under the bed.}", board:[["Where is my hat? It's on the bed.",["Where is","It's"]],["Where are my shoes? They're under the bed.",["Where are","They're"]]]},
 {ask:{q:"Where ___ my socks? — They're under the bed.", opts:["is","are","am"], ans:1,
   ok:"太好了！socks 是複數，用 Where are。",
   bad:{0:"socks 是複數，要用 are。",2:"am 只配 I 喔！"},
   again:{q:"Where is Dad? — ___ in the kitchen.", opts:["He's","They're","It's"], ans:0, exp:"Dad 是男生，回答用 He's。"}}},
 {ask:{say:"最後一題，挑戰看看！", q:"哪一句是正確的？", opts:["There has a box on the floor.","There is three boxes on the floor.","There are three boxes on the floor."], ans:2,
   ok:"完全正確！three boxes 是複數，用 There are。",
   bad:{0:"「某處有」不能用 has，要用 There is / There are。",1:"three boxes 是複數，要用 are。"},
   again:{q:"哪一句是正確的？", opts:["There is a pillow on the bed.","There are a pillow on the bed.","There have a pillow on the bed."], ans:0, exp:"a pillow 是單數，用 There is。"}}},
 {say:"恭喜你！第二次段考的文法全部上完了！複習：一個用 is，很多用 are，There 後面看名詞；問有沒有就把 is、are 移到前面；Where is 回答 It's，Where are 回答 They're。去文法測驗試試身手吧！", end:true}
]};

Object.assign(PH, {
  head:"h:c ea:exc d:c", face:"f:c a:a_e c:soft_c e:silent_e", eye:"eye:exc", ear:"ear:ear",
  nose:"n:c o:o_e s:s_z e:silent_e", mouth:"m:c ou:ou th:th", hair:"h:c air:air", hand:"h:c a:short_a n:c d:c",
  arm:"ar:ar m:c", leg:"l:c e:short_e g:c", foot:"f:c oo:oo_s t:c", tooth:"t:c oo:oo_l th:th",
  hat:"h:c a:short_a t:c", coat:"c:c oa:oa t:c", jacket:"j:c a:short_a ck:ck e:schwa t:c", shirt:"sh:sh ir:ir t:c",
  skirt:"sk:blend ir:ir t:c", dress:"dr:blend e:short_e ss:double", pants:"p:c a:short_a n:c t:c s:c",
  shoe:"sh:sh oe:exc", sock:"s:c o:short_o ck:ck",
  house:"h:c ou:ou s:c e:silent", bedroom:"b:c e:short_e d:c r:c oo:oo_l m:c", kitchen:"k:c i:short_i tch:tch e:schwa n:c",
  bathroom:"b:c a:short_a th:th r:c oo:oo_l m:c", "living room":"l:c i:short_i v:c i:short_i ng:ng _:space r:c oo:oo_l m:c",
  door:"d:c oor:exc", window:"w:c i:short_i n:c d:c ow:ow_o", floor:"fl:blend oor:exc",
  table:"t:c a:long_a b:c le:le", bed:"b:c e:short_e d:c", sofa:"s:c o:long_o f:c a:schwa", lamp:"l:c a:short_a m:c p:c",
  box:"b:c o:short_o x:x_ks", picture:"p:c i:short_i c:c ture:exc", shelf:"sh:sh e:short_e l:c f:c",
  pillow:"p:c i:short_i ll:double ow:ow_o", soap:"s:c oa:oa p:c",
  in:"i:short_i n:c", on:"o:short_o n:c", under:"u:short_u n:c d:c er:er",
  "next to":"n:c e:short_e x:x_ks t:c _:space t:c o:exc", behind:"b:c e:long_e h:c i:long_i n:c d:c",
  "in front of":"i:short_i n:c _:space fr:blend o:o_uh n:c t:c _:space o:schwa f:exc",
  eleven:"e:schwa l:c e:short_e v:c e:schwa n:c", twelve:"tw:blend e:short_e l:c v:c e:silent",
  thirteen:"th:th ir:ir t:c ee:ee n:c", fourteen:"f:c ou:exc r:c t:c ee:ee n:c", fifteen:"f:c i:short_i f:c t:c ee:ee n:c",
  sixteen:"s:c i:short_i x:x_ks t:c ee:ee n:c", seventeen:"s:c e:short_e v:c e:schwa n:c t:c ee:ee n:c",
  eighteen:"eigh:exc t:c ee:ee n:c", nineteen:"n:c i:i_e n:c e:silent_e t:c ee:ee n:c",
  twenty:"tw:blend e:short_e n:c t:c y:y_i", thirty:"th:th ir:ir t:c y:y_i", forty:"f:c or:or t:c y:y_i",
  fifty:"f:c i:short_i f:c t:c y:y_i", hundred:"h:c u:short_u n:c dr:blend e:schwa d:c",
  open:"o:long_o p:c e:schwa n:c", close:"cl:blend o:o_e s:s_z e:silent_e", sit:"s:c i:short_i t:c",
  stand:"st:blend a:short_a n:c d:c", look:"l:c oo:oo_s k:c", listen:"l:c i:short_i s:c t:silent e:schwa n:c",
  come:"c:c o:o_uh m:c e:silent", wait:"w:c ai:ai t:c", say:"s:c ay:ay", show:"sh:sh ow:ow_o",
  man:"m:c a:short_a n:c", woman:"w:c o:exc m:c a:schwa n:c", child:"ch:ch i:long_i l:c d:c",
  mouse:"m:c ou:ou s:c e:silent", tail:"t:c ai:ai l:c", whose:"wh:exc o:exc s:s_z e:silent"
});
Object.assign(EXC_NOTE, {
  head:"ea 在 head 裡唸短 e /ɛ/，不是長長的「一」。bread 也一樣。",
  eye:"eye 唸 /aɪ/，和字母 I 的名字一樣，拼法完全不照規則，整個字背起來。",
  shoe:"oe 在 shoe 裡唸長長的「嗚」/uː/，和 toe（腳趾）的 oe 唸法不同。",
  door:"oor 在 door 裡唸 /ɔr/，跟 or 一樣，不唸「嗚」。",
  floor:"oor 在 floor 裡唸 /ɔr/，跟 door 一樣。",
  picture:"字尾 ture 唸 /tʃɚ/，像「球兒」。",
  "next to":"to 的 o 唸長長的「嗚」/uː/，不唸 o 的名字。",
  "in front of":"of 的 f 唸 /v/，整個字唸 /əv/，是常見的例外。",
  fourteen:"four 的 our 唸 /ɔr/，跟 or 一樣。注意 forty 沒有 u。",
  eighteen:"eigh 唸字母 A 的名字 /eɪ/，gh 不發音，和 eight 一樣。",
  woman:"woman 的 o 唸 /ʊ/（短 oo）；複數 women 的 o 卻唸短 i /ɪ/，要特別記。",
  whose:"whose 的 wh 唸 /h/，o 唸長長的「嗚」/uː/，跟 who 一樣。"
});
/* ---------- 4 堂自然發音課（安安老師） ---------- */
const J1_1_2_PHONICS = [
  {id:"p1", title:"子音連音：bl / cl / fl / gr / br / tr / st / sp / sn / sl"},
  {id:"p2", title:"母音好朋友 ai / ay：唸字母 A"},
  {id:"p3", title:"母音好朋友 oa / ow：唸字母 O"},
  {id:"p4", title:"複數 -s / -es 的三種唸法"}
];
const J1_1_2_PHONICS_CLASS = {
p1:[
 {say:"同學好！上一次我們學過 ch、sh，兩個字母只唸一個音。今天要學的不一樣：兩個子音手牽手，可是兩個音都要唸出來，我們叫它「子音連音」！像 {black}，就是 b 加上 l。", board:[["black",["bl"],false,true]]},
 {say:"第一組是 l 家族：<<bl>> 像 {blue}、{black}；<<cl>> 像 {close}、{classroom}；<<fl>> 像 {floor}；<<sl>> 像 {sleep}。", board:[["blue   black",["bl","bl"],false,true],["close   classroom",["cl","cl"],false,true],["floor",["fl"],false,true],["sleep",["sl"],false,true]]},
 {say:"l 家族的口訣！", chant:"bl、cl、fl、sl，舌頭最後點一下 l！"},
 {ask:{say:"聽聽看！", q:"＿＿oor（地板）開頭要填？", opts:["fl","bl","cl"], ans:0,
   ok:"答對！floor 開頭是 fl。", bad:{1:"bl 的開頭是 b，嘴唇要閉起來。地板是 floor，開頭是 fl。",2:"cl 的開頭是 /k/。地板是 floor，開頭是 fl。"},
   again:{q:"＿＿ose（關上）開頭要填？", opts:["sl","cl","fl"], ans:1, exp:"close 開頭是 cl，/k/ 加 /l/。"}}},
 {say:"第二組是 r 家族：<<gr>> 像 {green}、{grandfather}；<<br>> 像 {brother}、{bread}；<<tr>> 像 {tree}。tr 連起來唸，聽起來有點像「ㄔㄨ」。還有 dress 的 <<dr>> 也是喔！", board:[["green   grandfather",["gr","gr"],false,true],["brother   bread",["br","br"],false,true],["tree",["tr"],false,true],["dress",["dr"],false,true]]},
 {ask:{q:"＿＿other（兄弟）開頭要填？", opts:["gr","br","tr"], ans:1,
   ok:"讚！brother 開頭是 br。", bad:{0:"gr 是 green 的開頭，兄弟是 brother，用 br。",2:"tr 是 tree 的開頭，兄弟是 brother，用 br。"},
   again:{q:"＿＿een（綠色）開頭要填？", opts:["gr","br","tr"], ans:0, exp:"green 開頭是 gr。"}}},
 {say:"第三組是 s 家族：<<st>> 像 {stand}、{student}；<<sp>> 像 {spoon}；<<sn>> 像 {snake}、{snow}。小心！中文習慣會把 s 唸成「斯」，多出一個「ㄜ」，要輕輕嘶一聲，馬上接下一個音。", board:[["stand   student",["st","st"],false,true],["spoon",["sp"],false,true],["snake   snow",["sn","sn"],false,true]]},
 {say:"s 家族的口訣！", chant:"s 輕輕嘶，不要多加ㄜ：st、sp、sn、sl！"},
 {ask:{q:"＿＿and（站立）開頭要填？", opts:["st","sp","sn"], ans:0,
   ok:"答對！stand 開頭是 st。", bad:{1:"sp 是 spoon 的開頭，站立是 stand，用 st。",2:"sn 是 snake 的開頭，站立是 stand，用 st。"},
   again:{q:"＿＿ake（蛇）開頭要填？", opts:["sl","sn","sp"], ans:1, exp:"snake 開頭是 sn。"}}},
 {say:"子音連音不只在開頭，也會出現在字尾喔：{desk} 的 sk、{hand} 的 nd、{lamp} 的 mp。{skirt} 的開頭也是 sk！", board:[["desk",["sk"],false,true],["hand   stand",["nd","nd"],false,true],["lamp",["mp"],false,true],["skirt",["sk"],false,true]]},
 {ask:{q:"＿＿eep（睡覺）開頭要填？", opts:["sl","sn","cl"], ans:0,
   ok:"太好了！sleep 開頭是 sl。", bad:{1:"sn 是 snake 的開頭，睡覺是 sleep，用 sl。",2:"cl 是 close 的開頭，睡覺是 sleep，用 sl。"},
   again:{q:"＿＿ee（樹）開頭要填？", opts:["tr","br","gr"], ans:0, exp:"tree 開頭是 tr。"}}},
 {ask:{say:"最後一題！", q:"哪個字的開頭「不是」子音連音？", opts:["stand","chair","floor"], ans:1,
   ok:"厲害！chair 的 ch 兩個字母只唸一個音，是字母好朋友，不是連音。", bad:{0:"stand 的 st 兩個音都有唸出來，是子音連音喔。",2:"floor 的 fl 兩個音都有唸出來，是子音連音喔。"},
   again:{q:"哪個字的開頭是子音連音？", opts:["shoe","black","thank"], ans:1, exp:"black 的 bl 兩個音都唸出來；sh、th 是兩個字母唸一個音。"}}},
 {say:"子音連音過關！記住：兩個子音手牽手，兩個音都要唸；l 家族 bl、cl、fl、sl，r 家族 gr、br、tr，s 家族 st、sp、sn。下一課要認識唸 A 的母音好朋友！", end:true}
],
p2:[
 {say:"今天介紹母音好朋友！兩個母音走在一起的時候，常常是第一個母音唸自己的名字，第二個母音不出聲。像 <<ai>>，a 唸「A」，i 不出聲：{wait}、{tail}、{rain}。", board:[["wait",["ai"],false,true],["tail",["ai"],false,true],["rain",["ai"],false,true]]},
 {say:"這個規則有一句很有名的口訣！", chant:"兩個母音去散步，第一個說話，第二個不出聲！"},
 {say:"ai 通常出現在字的中間，後面還有子音：{rain}、{train}、{paint}、{tail}、{wait}。", board:[["rain   train",["ai","ai"],false,true],["paint   tail   wait",["ai","ai","ai"],false,true]]},
 {ask:{say:"換你試試！", q:"w ＿＿ t（等待）中間要填？", opts:["ai","ay","ee"], ans:0,
   ok:"答對！wait 的 ai 唸「A」。", bad:{1:"ay 通常在字尾，wait 的「A」在中間，用 ai。",2:"ee 唸長長的「一」，這裡唸「A」，要用 ai。"},
   again:{q:"t ＿＿ l（尾巴）中間要填？", opts:["ay","ai","oa"], ans:1, exp:"tail 的「A」在字中間，用 ai。"}}},
 {say:"<<ay>> 也唸「A」，可是它最喜歡站在字的最後面：{say}、{day}、{play}、{gray}。", board:[["say   day",["ay","ay"],false,true],["play   gray",["ay","ay"],false,true]]},
 {say:"分辨 ai 和 ay 的口訣！", chant:"ai 在中間，ay 在最後，兩個都唸 A！"},
 {ask:{q:"s ＿＿（說）最後要填？", opts:["ai","ay","a"], ans:1,
   ok:"讚！「A」在字尾，用 ay：say。", bad:{0:"ai 不會放在字尾喔！字尾的「A」用 ay。",2:"只寫 a 會變成 sa，不是英文字。字尾的「A」用 ay。"},
   again:{q:"pl ＿＿（玩）最後要填？", opts:["ay","ai","ey"], ans:0, exp:"play 的「A」在字尾，用 ay。"}}},
 {say:"比比看短 a 和 ai：{man} 是男人，a 唸短 a；{main} 的 ai 就唸「A」。{pan} 是平底鍋，{pain} 是疼痛。只差一個 i，聲音就不一樣！", board:[["man → main",["a","ai"],false,true],["pan → pain",["a","ai"],false,true]]},
 {ask:{q:"哪個字的 a 唸字母名「A」？", opts:["hand","wait","hat"], ans:1,
   ok:"正確！wait 的 ai 唸「A」。", bad:{0:"hand 的 a 被子音夾住，唸短 a。",2:"hat 的 a 被子音夾住，唸短 a。"},
   again:{q:"哪個字的 a 唸字母名「A」？", opts:["bag","lamp","say"], ans:2, exp:"say 的 ay 唸「A」；bag、lamp 是短 a。"}}},
 {say:"還記得魔法 e 嗎？{face}、{table} 的 a 也唸「A」。所以唸「A」的拼法有三種：a_e、ai、ay。小心兩個陷阱：{hair} 的 air 被霸道的 r 拉走，唸「欸兒」；{said} 是例外，唸 /sɛd/。", board:[["face   table",["a","a"],false,true],["hair",["air"],false,true],["said",["ai"],false,true]]},
 {ask:{say:"最後一題！", q:"tr ＿＿ n（火車）中間要填？", opts:["ay","ai","ae"], ans:1,
   ok:"完美！「A」在字中間，用 ai：train。", bad:{0:"ay 放在字尾，train 的「A」在中間，用 ai。",2:"ae 不是唸「A」的常見拼法喔，要用 ai。"},
   again:{q:"d ＿＿（天）最後要填？", opts:["ai","ay","ey"], ans:1, exp:"day 的「A」在字尾，用 ay。"}}},
 {say:"ai、ay 過關！口訣：兩個母音去散步，第一個說話；ai 在中間，ay 在最後，兩個都唸 A。下一課換唸 O 的好朋友！", end:true}
],
p3:[
 {say:"今天的主角是唸「O」的好朋友！第一位是 <<oa>>，跟 ai 一樣，第一個母音 o 說話，a 不出聲：{coat}、{soap}、{boat}、{road}。", board:[["coat   soap",["oa","oa"],false,true],["boat   road",["oa","oa"],false,true]]},
 {say:"口訣來囉！", chant:"oa 唸 O，穿上 coat 坐上 boat！"},
 {ask:{say:"換你試試！", q:"c ＿＿ t（外套）中間要填？", opts:["oa","ow","ou"], ans:0,
   ok:"答對！coat 中間是 oa。", bad:{1:"ow 唸 O 的時候通常在字尾，coat 的 O 在中間，用 oa。",2:"ou 常唸「啊嗚」，像 house。coat 用 oa。"},
   again:{q:"s ＿＿ p（肥皂）中間要填？", opts:["ow","oa","oo"], ans:1, exp:"soap 中間是 oa，唸 O。"}}},
 {say:"第二位是 <<ow>>，它在字尾的時候常唸「O」：{window}、{pillow}、{yellow}、{show}、{snow}。", board:[["window   pillow",["ow","ow"],false,true],["yellow   show   snow",["ow","ow","ow"],false,true]]},
 {say:"跟上一課 ai、ay 一模一樣的規律！", chant:"oa 在中間，ow 在最後，兩個都唸 O！"},
 {ask:{q:"wind ＿＿（窗戶）最後要填？", opts:["oa","ow","o"], ans:1,
   ok:"讚！字尾的 O 常寫成 ow：window。", bad:{0:"oa 通常在字中間，window 的 O 在字尾，用 ow。",2:"只寫 o 會變成 windo，少了 w 喔！"},
   again:{q:"sh ＿＿（給……看）最後要填？", opts:["ow","oa","ou"], ans:0, exp:"show 的 O 在字尾，用 ow。"}}},
 {say:"陷阱來了！ow 還有另一種唸法，像被嚇到的「啊嗚」/aʊ/：{cow}、{down}、{brown}、{how}。", board:[["cow   down",["ow","ow"],false,true],["brown   how",["ow","ow"],false,true]]},
 {say:"所以看到 ow，兩種唸法都要想一想：{snow} 唸 O，{now} 卻唸「啊嗚」。背單字時一定要多聽發音！", board:[["snow → O",["ow"],false,true],["now → 啊嗚",["ow"],false,true]]},
 {ask:{q:"哪個字的 ow 唸「O」？", opts:["cow","window","how"], ans:1,
   ok:"正確！window 的 ow 唸 O。", bad:{0:"cow 的 ow 唸「啊嗚」喔。",2:"how 的 ow 唸「啊嗚」喔。"},
   again:{q:"哪個字的 ow 唸「啊嗚」？", opts:["yellow","pillow","down"], ans:2, exp:"down 的 ow 唸「啊嗚」；yellow、pillow 唸 O。"}}},
 {say:"整理一下，唸「O」的拼法有好幾種：魔法 e 的 {nose}、{close}；oa 的 {coat}；ow 的 {pillow}；還有 o 在音節最後面的 {open}、{sofa}。", board:[["nose   close",["o","o"],false,true],["coat",["oa"],false,true],["pillow",["ow"],false,true],["open   sofa",["o","o"],false,true]]},
 {ask:{say:"最後一題！", q:"pill ＿＿（枕頭）最後要填？", opts:["oa","ow","oe"], ans:1,
   ok:"完美！pillow 字尾是 ow。", bad:{0:"oa 通常在字中間，字尾的 O 用 ow。",2:"oe 不是 pillow 的拼法，字尾的 O 用 ow。"},
   again:{q:"b ＿＿ t（船）中間要填？", opts:["oa","ow","ou"], ans:0, exp:"boat 的 O 在字中間，用 oa。"}}},
 {say:"oa、ow 過關！口訣：oa 在中間，ow 在最後，兩個都唸 O；可是 ow 有時唸「啊嗚」，要多聽多記。最後一課要學複數的唸法！", end:true}
],
p4:[
 {say:"這次段考學了名詞複數，加 s 或 es。可是你知道嗎？字尾的 s 有三種唸法：/s/、/z/、/ɪz/！今天一次搞懂。", board:[["hats   legs   boxes",["ts","gs","xes"],false,true]]},
 {say:"把手放在喉嚨上，唸 p、t、k、f，喉嚨不會震動，這些叫「無聲」的音。它們後面的 s 也不震動，唸 /s/：{hats}、{socks}、{lamps}、{books}。", board:[["hats   socks",["ts","ks"],false,true],["lamps   books",["ps","ks"],false,true]]},
 {say:"再唸 b、d、g、l、m、n、r 和母音，喉嚨會震動，這些叫「有聲」的音。它們後面的 s 也跟著震動，唸 /z/：{legs}、{beds}、{eyes}、{pillows}、{windows}、{doors}。", board:[["legs   beds   eyes",["gs","ds","es"],false,true],["pillows   windows   doors",["ws","ws","rs"],false,true]]},
 {say:"記住這個口訣！", chant:"喉嚨不震唸 s，喉嚨震動唸 z！"},
 {ask:{say:"摸著喉嚨想一想！", q:"hats 的字尾唸？", opts:["/s/","/z/","/ɪz/"], ans:0,
   ok:"答對！t 是無聲的音，後面的 s 唸 /s/。", bad:{1:"t 唸的時候喉嚨不震動，所以 s 也不震動，唸 /s/。",2:"/ɪz/ 是給 s、x、ch、sh 這種嘶嘶聲結尾的字，hats 唸 /s/。"},
   again:{q:"legs 的字尾唸？", opts:["/s/","/z/","/ɪz/"], ans:1, exp:"g 是有聲的音，後面的 s 唸 /z/。"}}},
 {say:"第三種！字尾本來就是嘶嘶聲，像 s、z、x、ch、sh，還有 nose、face 這種字尾唸 /s/、/z/ 的字，要多加一個音節，唸 /ɪz/：{boxes}、{dresses}、{noses}、{faces}、{houses}。", board:[["boxes   dresses",["xes","sses"],false,true],["noses   faces   houses",["ses","ces","ses"],false,true]]},
 {say:"這種要多唸一拍喔！", chant:"嘶嘶聲結尾多一拍，es 唸成 /ɪz/！"},
 {ask:{q:"boxes 的字尾唸？", opts:["/s/","/z/","/ɪz/"], ans:2,
   ok:"讚！x 是嘶嘶聲結尾，es 要唸 /ɪz/，box-es 變成兩個音節。", bad:{0:"x 結尾的字要多一拍，唸 /ɪz/。",1:"x 結尾的字要多一拍，唸 /ɪz/。"},
   again:{q:"noses 的字尾唸？", opts:["/ɪz/","/s/","/z/"], ans:0, exp:"nose 字尾是 /z/ 的嘶嘶聲，加 s 後唸 /ɪz/。"}}},
 {say:"陷阱！{noses}、{faces} 只加了 s，沒有加 es，可是一樣唸 /ɪz/。因為唸法是看「聲音」，不是看拼字！", board:[["nose → noses",["ses"],false,true],["face → faces",["ces"],false,true]]},
 {ask:{q:"哪一個字的字尾唸 /z/？", opts:["socks","beds","dresses"], ans:1,
   ok:"正確！d 是有聲的音，beds 的 s 唸 /z/。", bad:{0:"k 是無聲的音，socks 的 s 唸 /s/。",2:"dresses 是 ss 結尾，es 唸 /ɪz/。"},
   again:{q:"哪一個字的字尾唸 /s/？", opts:["lamps","eyes","faces"], ans:0, exp:"p 是無聲的音，lamps 的 s 唸 /s/。"}}},
 {say:"好消息：不規則複數像 {feet}、{teeth}、{mice}、{men}、{children}，沒有加 s，就不用煩惱這三種唸法了。以後學到動詞加 s，也是用一樣的規則喔！", board:[["feet   teeth   mice",[]],["men   children",[]]]},
 {ask:{say:"最後一題！", q:"哪一組的字尾唸法一樣？", opts:["hats / legs","boxes / faces","socks / doors"], ans:1,
   ok:"完美！boxes 和 faces 的字尾都唸 /ɪz/。", bad:{0:"hats 唸 /s/，legs 唸 /z/，不一樣喔。",2:"socks 唸 /s/，doors 唸 /z/，不一樣喔。"},
   again:{q:"哪一組的字尾都唸 /s/？", opts:["books / lamps","beds / books","eyes / hats"], ans:0, exp:"k 和 p 都是無聲的音，books、lamps 都唸 /s/。"}}},
 {say:"自然發音全部上完了！複習：喉嚨不震唸 s，喉嚨震動唸 z，嘶嘶聲結尾多一拍唸 /ɪz/。快去玩「拼字挑戰」試試身手吧！", end:true}
]};

/* ---------- 插圖用的小工具（只在這個單元檔裡用） ---------- */
const SKN = "#ffe0c8";
const hl = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#ff4f8b" stroke-width="3" stroke-dasharray="5 4"/>`;
const bigFace = mark => `<circle cx="45" cy="64" r="9" fill="${SKN}"/><circle cx="115" cy="64" r="9" fill="${SKN}"/><circle cx="80" cy="62" r="35" fill="${SKN}"/>`
  + `<path d="M45 56 C44 24 116 24 115 56 C108 42 92 38 80 40 C66 38 52 44 45 56 Z" fill="#4a3428"/>`
  + `<circle cx="67" cy="60" r="4" fill="#2d2323"/><circle cx="93" cy="60" r="4" fill="#2d2323"/><circle cx="68.4" cy="58.6" r="1.3" fill="#fff"/><circle cx="94.4" cy="58.6" r="1.3" fill="#fff"/>`
  + `<path d="M80 63 Q76 71 81 72" stroke="#d9a07a" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M70 80 Q80 90 90 80 Z" fill="#c0485f"/>`
  + `<ellipse cx="59" cy="73" rx="5" ry="3" fill="#ff9fb5" opacity=".6"/><ellipse cx="101" cy="73" rx="5" ry="3" fill="#ff9fb5" opacity=".6"/>` + mark;
const boxF = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-22" y="-16" width="44" height="32" fill="#d9a066" stroke="#b07b45" stroke-width="1.5"/><path d="M-22 -16 L-30 -26 L14 -26 L22 -16 Z" fill="#e8b97f" stroke="#b07b45" stroke-width="1.5"/><path d="M-8 -16 V-4" stroke="#b07b45" stroke-width="2"/></g>`;
const tableF = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-40" y="-10" width="80" height="8" rx="3" fill="#c98b4f"/><rect x="-34" y="-2" width="6" height="30" fill="#a86d36"/><rect x="28" y="-2" width="6" height="30" fill="#a86d36"/></g>`;
const bedF = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-46" y="-34" width="8" height="44" rx="3" fill="#a86d36"/><rect x="-40" y="-8" width="86" height="14" rx="4" fill="#fff" stroke="#e5e7eb"/><rect x="-10" y="-12" width="56" height="16" rx="5" fill="#60a5fa"/><rect x="-38" y="-18" width="22" height="11" rx="5" fill="#fff" stroke="#d1d5db"/><rect x="-40" y="6" width="5" height="10" fill="#a86d36"/><rect x="40" y="6" width="5" height="10" fill="#a86d36"/></g>`;
const sofaF = (x, y, s, c = "#f97316") => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-36" y="-30" width="72" height="24" rx="8" fill="${c}"/><rect x="-44" y="-16" width="14" height="28" rx="6" fill="${c}"/><rect x="30" y="-16" width="14" height="28" rx="6" fill="${c}"/><rect x="-32" y="-8" width="64" height="16" rx="5" fill="#fdba74"/><rect x="-40" y="12" width="5" height="6" fill="#7c4a1e"/><rect x="35" y="12" width="5" height="6" fill="#7c4a1e"/></g>`;
const lampF = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-8 -26 L-2 -16" stroke="#fde68a" stroke-width="0"/><ellipse cx="0" cy="-8" rx="20" ry="10" fill="#fff3b0" opacity=".7"/><path d="M-12 -30 L12 -30 L18 -12 L-18 -12 Z" fill="#fbbf24"/><rect x="-1.5" y="-12" width="3" height="26" fill="#6b7280"/><ellipse cx="0" cy="15" rx="12" ry="4" fill="#6b7280"/></g>`;
const pictureF = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-24" y="-18" width="48" height="36" rx="2" fill="#a86d36"/><rect x="-19" y="-13" width="38" height="26" fill="#bfe6ff"/><path d="M-19 13 L-6 -2 L4 8 L10 2 L19 13 Z" fill="#52b043"/><circle cx="10" cy="-6" r="4" fill="#ffd23f"/></g>`;
const shelfF = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-40" y="-2" width="80" height="6" rx="2" fill="#a86d36"/><rect x="-40" y="30" width="80" height="6" rx="2" fill="#a86d36"/><rect x="-34" y="-24" width="8" height="22" fill="#ef4444"/><rect x="-25" y="-20" width="8" height="18" fill="#3b82f6"/><rect x="-16" y="-26" width="9" height="24" fill="#22c55e"/><rect x="10" y="8" width="8" height="22" fill="#a855f7"/><rect x="19" y="12" width="8" height="18" fill="#f59e0b"/></g>`;
const pillowF = (x, y, s, c = "#c7d2fe") => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-30 -14 Q0 -20 30 -14 Q36 0 30 14 Q0 20 -30 14 Q-36 0 -30 -14 Z" fill="${c}" stroke="#a5b4fc" stroke-width="1.5"/><path d="M-20 -6 Q0 -2 20 -6" stroke="#a5b4fc" stroke-width="1.2" fill="none"/></g>`;
const doorF = (x, y, s, open = false) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-22" y="-44" width="44" height="88" rx="2" fill="${open ? "#3b2a20" : "#8b5a2b"}"/>` + (open ? `<path d="M-22 -44 L-2 -38 L-2 50 L-22 44 Z" fill="#c98b4f"/><circle cx="-7" cy="4" r="2.5" fill="#ffd23f"/>` : `<rect x="-16" y="-36" width="32" height="30" rx="2" fill="#a86d36"/><rect x="-16" y="2" width="32" height="34" rx="2" fill="#a86d36"/><circle cx="14" cy="0" r="3" fill="#ffd23f"/>`) + `</g>`;
const windowF = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-26" y="-22" width="52" height="44" rx="3" fill="#bfe6ff" stroke="#fff" stroke-width="4"/><path d="M0 -22 V22 M-26 0 H26" stroke="#fff" stroke-width="4"/><path d="M-32 -26 Q-22 0 -32 26 L-38 26 L-38 -26 Z" fill="#fca5a5"/><path d="M32 -26 Q22 0 32 26 L38 26 L38 -26 Z" fill="#fca5a5"/></g>`;
const soapF = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-20" y="-10" width="40" height="20" rx="8" fill="#f9a8d4"/><rect x="-14" y="-6" width="28" height="6" rx="3" fill="#fbcfe8"/><circle cx="18" cy="-18" r="6" fill="#e0f2fe" stroke="#93c5fd"/><circle cx="-12" cy="-22" r="4" fill="#e0f2fe" stroke="#93c5fd"/><circle cx="4" cy="-28" r="5" fill="#e0f2fe" stroke="#93c5fd"/></g>`;
const mouseF = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M18 6 Q34 10 36 -4 Q37 -12 30 -12" stroke="#f9a8d4" stroke-width="2.5" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="2" rx="20" ry="13" fill="#9ca3af"/><circle cx="-14" cy="-12" r="7" fill="#9ca3af"/><circle cx="-14" cy="-12" r="4" fill="#f9a8d4"/><circle cx="-4" cy="-14" r="7" fill="#9ca3af"/><circle cx="-4" cy="-14" r="4" fill="#f9a8d4"/><circle cx="-12" cy="-1" r="2" fill="#2d2323"/><circle cx="-21" cy="4" r="2.5" fill="#f472b6"/><path d="M-22 6 L-30 4 M-22 7 L-30 9" stroke="#6b7280" stroke-width="1"/></g>`;
const dots = (n, c) => Array.from({length:n}, (_, i) => `<circle cx="${98 + (i % 5) * 12}" cy="${30 + Math.floor(i / 5) * 16}" r="5" fill="${c}"/>`).join("");
const num = (n, c, bg) => svgWrap(bg, txt(50, 80, String(n), 50, c, 900) + dots(n, c));
const tens = (n, c, bg) => svgWrap(bg, txt(52, 80, String(n), 50, c, 900) + Array.from({length:n / 10}, (_, i) => `<rect x="${98 + (i % 3) * 18}" y="${18 + Math.floor(i / 3) * 46}" width="12" height="40" rx="3" fill="${c}" opacity=".85"/>` + Array.from({length:9}, (_, k) => `<line x1="${98 + (i % 3) * 18}" y1="${22 + Math.floor(i / 3) * 46 + k * 4}" x2="${110 + (i % 3) * 18}" y2="${22 + Math.floor(i / 3) * 46 + k * 4}" stroke="#fff" stroke-width=".8"/>`).join("")).join(""));

/* ---------- 單字插圖 ---------- */
Object.assign(ILLUS, {
  head: () => svgWrap("#eef3ff", ground() + kid(80, {s:1.1, mood:"open"}) + hl(80, 44, 27)),
  face: () => svgWrap("#fff0e6", bigFace(hl(80, 62, 41))),
  eye: () => svgWrap("#eef8f2", bigFace(hl(67, 60, 9) + hl(93, 60, 9))),
  ear: () => svgWrap("#f3f0ff", bigFace(hl(45, 64, 13) + hl(115, 64, 13))),
  nose: () => svgWrap("#fff7e0", bigFace(hl(80, 67, 10))),
  mouth: () => svgWrap("#fdeef6", bigFace(hl(80, 84, 13))),
  hair: () => svgWrap("#fdeef6", ground("#f3d4e6") + girlP(80, {s:1.1, mood:"open"}) + hl(80, 36, 30)),
  hand: () => svgWrap("#e8f4ff", ground() + kid(70, {pose:"wave", mood:"open"}) + hl(93, 52, 11)),
  arm: () => svgWrap("#fff4e6", ground() + kid(80, {pose:"cheer", mood:"open"}) + hl(61, 64, 13) + hl(99, 64, 13)),
  leg: () => svgWrap("#eaf7ef", ground() + kid(80, {s:1.1, mood:"open"}) + hl(80, 99, 15)),
  foot: () => svgWrap("#fff8e1", [[56, 74, -12], [104, 52, 10]].map(([x, y, r]) => `<g transform="translate(${x} ${y}) rotate(${r})"><ellipse cx="0" cy="8" rx="13" ry="20" fill="#f4c7a1"/>${[[-9, -15, 4.5], [-2, -18, 4], [5, -17, 3.6], [10, -13, 3.2], [13, -8, 2.8]].map(([a, b, rr]) => `<circle cx="${a}" cy="${b}" r="${rr}" fill="#f4c7a1"/>`).join("")}</g>`).join("") + spark(132, 98, .8)),
  tooth: () => svgWrap("#e8f6ff", `<path d="M58 40 C58 28 70 26 80 32 C90 26 102 28 102 40 C102 56 98 62 96 80 C95 90 88 90 87 80 L84 66 Q80 62 76 66 L73 80 C72 90 65 90 64 80 C62 62 58 56 58 40 Z" fill="#fff" stroke="#cbd5e1" stroke-width="2"/><circle cx="72" cy="46" r="2.5" fill="#2d2323"/><circle cx="88" cy="46" r="2.5" fill="#2d2323"/><path d="M75 53 Q80 57 85 53" stroke="#c0485f" stroke-width="1.8" fill="none" stroke-linecap="round"/>` + spark(120, 30, 1) + spark(38, 34, .7)),
  hat: () => svgWrap("#fff6ea", `<ellipse cx="80" cy="76" rx="46" ry="11" fill="#c98b4f"/><path d="M56 76 Q56 36 80 36 Q104 36 104 76 Z" fill="#e0a65f"/><rect x="56" y="62" width="48" height="9" fill="#ef4444"/>` + O.flower(108, 64, .7)),
  coat: () => svgWrap("#f4efe6", `<path d="M58 22 L46 28 L34 70 L46 74 L52 54 L52 104 L108 104 L108 54 L114 74 L126 70 L114 28 L102 22 L80 36 Z" fill="#8b5a2b"/><path d="M80 36 V104" stroke="#6b4226" stroke-width="2"/><path d="M58 22 L80 36 L70 50 Z M102 22 L80 36 L90 50 Z" fill="#a86d36"/>` + [52, 68, 84].map(y => `<circle cx="88" cy="${y}" r="3" fill="#ffd23f"/>`).join("")),
  jacket: () => svgWrap("#e8f4ff", `<path d="M60 26 L46 32 L36 68 L48 72 L54 54 L54 90 L106 90 L106 54 L112 72 L124 68 L114 32 L100 26 Q80 34 60 26 Z" fill="#3b82f6"/><path d="M80 32 V90" stroke="#d1d5db" stroke-width="3"/><rect x="54" y="84" width="52" height="8" rx="2" fill="#1d4ed8"/><path d="M60 26 Q80 40 100 26" stroke="#1d4ed8" stroke-width="4" fill="none"/>`),
  shirt: () => svgWrap("#eef3ff", `<path d="M60 26 L42 36 L48 54 L58 50 L58 100 L102 100 L102 50 L112 54 L118 36 L100 26 Q80 34 60 26 Z" fill="#fff" stroke="#cbd5e1" stroke-width="2"/><path d="M68 26 L80 40 L74 44 Z M92 26 L80 40 L86 44 Z" fill="#e5e7eb" stroke="#cbd5e1"/>` + [52, 66, 80].map(y => `<circle cx="80" cy="${y}" r="2.2" fill="#94a3b8"/>`).join("")),
  skirt: () => svgWrap("#fdeef6", `<rect x="58" y="32" width="44" height="10" rx="3" fill="#db2777"/><path d="M58 42 L102 42 L122 94 L38 94 Z" fill="#ff8cc6"/><path d="M70 42 L62 94 M80 42 V94 M90 42 L98 94" stroke="#f472b6" stroke-width="2"/>`),
  dress: () => svgWrap("#f3f0ff", `<path d="M68 22 L72 22 L74 30 L86 30 L88 22 L92 22 L96 50 L122 102 L38 102 L64 50 Z" fill="#a78bfa"/><rect x="62" y="48" width="36" height="6" fill="#7c3aed"/>` + spark(128, 30, .8) + spark(32, 40, .6)),
  pants: () => svgWrap("#eef3ff", `<path d="M56 24 L104 24 L110 104 L86 104 L80 50 L74 104 L50 104 Z" fill="#3b82f6"/><rect x="56" y="24" width="48" height="8" fill="#1d4ed8"/><path d="M62 36 Q66 42 72 38" stroke="#93c5fd" stroke-width="1.5" fill="none"/>`),
  shoe: () => svgWrap("#fff5f5", `<path d="M34 82 L36 58 Q48 54 60 62 L92 74 Q124 76 126 88 L126 92 L34 92 Z" fill="#ef4444"/><rect x="32" y="88" width="96" height="9" rx="4" fill="#fff" stroke="#e5e7eb"/><path d="M58 64 L66 60 M64 68 L72 64 M70 72 L78 68" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`),
  sock: () => svgWrap("#eaf7ef", `<path d="M66 22 L94 22 L94 74 Q94 98 74 98 L52 98 Q40 98 40 88 Q40 78 52 76 L66 74 Z" fill="#fff" stroke="#cbd5e1" stroke-width="2"/><rect x="66" y="22" width="28" height="7" fill="#22c55e"/><rect x="66" y="33" width="28" height="5" fill="#22c55e"/>`),
  house: () => svgWrap("#e8f4ff", ground() + `<rect x="40" y="56" width="80" height="48" fill="#f6d6a8"/><path d="M30 60 L80 22 L130 60 Z" fill="#e76f51"/><rect x="72" y="76" width="16" height="28" rx="2" fill="#a86d36"/><rect x="48" y="66" width="16" height="14" fill="#bfe6ff" stroke="#fff" stroke-width="2"/><rect x="96" y="66" width="16" height="14" fill="#bfe6ff" stroke="#fff" stroke-width="2"/>` + O.tree(144, 88, .45) + O.cloud(28, 22, .6)),
  bedroom: () => svgWrap("#f3f0ff", windowF(50, 36, .7) + bedF(78, 92, .9) + lampF(140, 82, .8)),
  kitchen: () => svgWrap("#fff6ea", `<rect x="20" y="70" width="120" height="40" rx="3" fill="#e5e7eb"/><rect x="20" y="64" width="120" height="8" rx="2" fill="#9ca3af"/><rect x="32" y="80" width="40" height="22" rx="2" fill="#d1d5db"/><rect x="88" y="80" width="40" height="22" rx="2" fill="#d1d5db"/>` + O.pan(64, 58, .9) + O.apple(116, 52, .6) + `<path d="M58 40 Q54 32 60 26 M68 40 Q64 32 70 26" stroke="#cbd5e1" stroke-width="2" fill="none"/>`),
  bathroom: () => svgWrap("#e0f2fe", `<path d="M22 70 L138 70 L132 98 Q130 104 120 104 L40 104 Q30 104 28 98 Z" fill="#fff" stroke="#bae6fd" stroke-width="2"/><path d="M128 70 V36 Q128 28 120 28 L112 28" stroke="#94a3b8" stroke-width="4" fill="none"/>` + [40, 56, 72, 88].map((x, i) => `<circle cx="${x}" cy="${66 - (i % 2) * 6}" r="${7 + (i % 2) * 2}" fill="#f0f9ff" stroke="#bae6fd"/>`).join("") + soapF(100, 58, .6)),
  "living room": () => svgWrap("#fff6ea", pictureF(80, 30, .7) + sofaF(72, 92, 1) + lampF(138, 84, .8)),
  door: () => svgWrap("#fdf5ea", `<rect x="0" y="100" width="160" height="20" fill="#e5d3b3"/>` + doorF(80, 58, .95) + O.flower(130, 92, .8)),
  window: () => svgWrap("#fff7e0", windowF(80, 58, 1.4) + O.sun(92, 50, .45) + O.cloud(68, 64, .4)),
  floor: () => svgWrap("#fdf5ea", `<path d="M0 70 L160 70 L160 120 L0 120 Z" fill="#d9a066"/>` + [0, 1, 2, 3, 4].map(i => `<path d="M${i * 40 - 10} 120 L${30 + i * 25} 70" stroke="#b07b45" stroke-width="1.5"/>`).join("") + `<path d="M0 90 H160 M0 106 H160" stroke="#b07b45" stroke-width="1"/>` + O.ball(100, 88, 1.2) + O.arrow(60, 56, false, "#ef4444")),
  table: () => svgWrap("#fff4e6", tableF(80, 76, 1.3) + `<ellipse cx="80" cy="60" rx="16" ry="5" fill="#fff" stroke="#e5e7eb"/><rect x="68" y="44" width="24" height="16" rx="3" fill="#fbcfe8"/><rect x="68" y="44" width="24" height="5" rx="2" fill="#f472b6"/>`),
  bed: () => svgWrap("#e8f4ff", bedF(80, 82, 1.3) + txt(128, 34, "Zzz", 14, "#6366f1")),
  sofa: () => svgWrap("#fff6ea", sofaF(80, 82, 1.4, "#22c55e") + pillowF(60, 70, .35, "#fde68a")),
  lamp: () => svgWrap("#fefce8", lampF(80, 70, 2) + spark(124, 30, .9) + spark(36, 34, .7)),
  box: () => svgWrap("#fff4e6", boxF(80, 72, 1.6)),
  picture: () => svgWrap("#f4f4f5", `<rect x="0" y="0" width="160" height="120" rx="14" fill="#fef3c7"/>` + pictureF(80, 58, 1.7)),
  shelf: () => svgWrap("#fdf5ea", shelfF(80, 52, 1.3)),
  pillow: () => svgWrap("#eef2ff", pillowF(80, 62, 1.6) + txt(128, 30, "Zzz", 13, "#6366f1")),
  soap: () => svgWrap("#e0f2fe", soapF(80, 72, 1.7)),
  in: () => svgWrap("#eef8f2", O.ball(80, 66, 1.6) + `<rect x="50" y="68" width="60" height="38" fill="#d9a066" stroke="#b07b45" stroke-width="1.5"/>` + O.arrow(80, 30, false, "#ef4444")),
  on: () => svgWrap("#eef8f2", boxF(80, 84, 1.3) + O.ball(80, 34, 1.6) + O.arrow(124, 40, false, "#ef4444")),
  under: () => svgWrap("#eef8f2", tableF(80, 64, 1.3) + O.ball(80, 88, 1.6) + O.arrow(130, 76, true, "#ef4444")),
  "next to": () => svgWrap("#eef8f2", boxF(60, 80, 1.3) + O.ball(118, 86, 1.6) + O.arrow(118, 58, false, "#ef4444")),
  behind: () => svgWrap("#eef8f2", O.ball(96, 58, 1.6) + boxF(76, 82, 1.4) + O.arrow(126, 40, false, "#ef4444")),
  "in front of": () => svgWrap("#eef8f2", boxF(80, 62, 1.3) + O.ball(80, 96, 1.8) + O.arrow(126, 96, false, "#ef4444")),
  eleven: () => num(11, "#ef4444", "#fdeceb"),
  twelve: () => num(12, "#f97316", "#fff2e0"),
  thirteen: () => num(13, "#eab308", "#fffbea"),
  fourteen: () => num(14, "#22c55e", "#f3fbf2"),
  fifteen: () => num(15, "#14b8a6", "#e9f8f4"),
  sixteen: () => num(16, "#3b82f6", "#f3f8ff"),
  seventeen: () => num(17, "#6366f1", "#eef2ff"),
  eighteen: () => num(18, "#a855f7", "#f3f0ff"),
  nineteen: () => num(19, "#ec4899", "#fdeef6"),
  twenty: () => num(20, "#ef4444", "#fff5f5"),
  thirty: () => tens(30, "#f97316", "#fff2e0"),
  forty: () => tens(40, "#22c55e", "#f3fbf2"),
  fifty: () => tens(50, "#3b82f6", "#f3f8ff"),
  hundred: () => svgWrap("#f3f0ff", txt(48, 80, "100", 40, "#a855f7", 900) + `<rect x="94" y="26" width="52" height="52" fill="#e9d5ff" stroke="#a855f7" stroke-width="1.5"/>` + Array.from({length:9}, (_, i) => `<path d="M${99.2 + i * 5.2} 26 V78 M94 ${31.2 + i * 5.2} H146" stroke="#a855f7" stroke-width=".7"/>`).join("") + spark(140, 96, .8)),
  open: () => svgWrap("#eef3ff", doorF(58, 60, .9, true) + O.openBook(118, 70, .7, "ABC") + spark(130, 34, .8)),
  close: () => svgWrap("#eef3ff", doorF(58, 60, .9) + O.book(118, 70, .9, "#4f7cf0") + O.arrow(142, 40, false, "#ef4444")),
  stand: () => svgWrap("#e8f4ff", ground() + O.chair(46, 96, .7) + kid(90, {pose:"cheer", mood:"open"}) + O.arrow(132, 54, true)),
  come: () => svgWrap("#fff4e6", ground() + kid(60, {pose:"wave", mood:"open"}) + bubble(114, 32, "Come in!", 64)),
  wait: () => svgWrap("#fff3e6", ground("#f3dfc3") + kid(62, {pose:"hold", mood:"smile"}) + O.clock(120, 52, .9) + bubble(112, 22, "Wait!", 46)),
  man: () => svgWrap("#eef3ff", ground() + P({x:80, y:108, s:1.1, hair:"short", hc:"#2b2b2b", oc:"#4f7cf0", acc:["tie"], mood:"open"})),
  woman: () => svgWrap("#fdeef6", ground("#f3d4e6") + P({x:80, y:108, s:1.1, hair:"long", hc:"#6b3f2a", oc:"#ff8cc6", dress:true, mood:"open"}) + O.flower(124, 92, .8)),
  child: () => svgWrap("#fff7e0", ground() + kid(60, {s:.8, mood:"open", oc:"#ffb347"}) + girlP(100, {s:.75, mood:"open"}) + O.ball(132, 100, .9) + star(80, 30, 6)),
  mouse: () => svgWrap("#f4f4f5", ground("#e5e7eb") + mouseF(76, 80, 1.6) + `<path d="M120 96 L140 96 L130 80 Z" fill="#fcd34d"/><circle cx="130" cy="91" r="2" fill="#f59e0b"/>`),
  tail: () => svgWrap("#fff0e6", ground("#f3dfc3") + O.cat(70, 80, 1.25) + hl(98, 68, 16))
});
/* ---------- 記憶小提示 ---------- */
Object.assign(MEMO, {
  head:"head 唸起來像「黑的」：頭上長著黑黑的頭髮。",
  face:"face 唸起來像「飛死」：臉被風吹得快飛走了！",
  eye:"eye 長得像一張臉：兩個 e 是眼睛，中間的 y 是鼻子。",
  ear:"ear 藏在 hear（聽）裡面：用耳朵（ear）來聽（hear）。",
  nose:"nose 和 know（知道）開頭的音很像：鼻子一聞就知道是什麼味道。",
  mouth:"mouth 唸起來像「冒失」：嘴巴亂講話，好冒失！",
  hair:"hair 唸起來像「黑兒」：一頭黑兒黑兒的頭髮。",
  hand:"hand 唸起來像「憨的」：憨憨地揮揮手打招呼。",
  arm:"arm 唸起來像「阿姆」：阿姆張開手臂抱抱你。",
  leg:"leg 唸起來像「累個」：腿走路走到好累。",
  foot:"foot 中間的兩個 o 像兩隻腳印；變成 feet，兩個 e 也是兩隻腳。",
  tooth:"tooth 中間的 oo 像兩顆牙齒；複數 teeth 把 oo 換成 ee，跟 foot 變 feet 一樣。",
  hat:"hat 唸起來像「黑特」：戴著一頂黑色的帽子。",
  coat:"coat 和 boat（船）押韻：坐船要穿外套，海風很冷！",
  jacket:"jacket 唸起來像「戒克特」：酷酷的夾克。",
  shirt:"shirt 唸起來像「捨特」：捨不得穿新襯衫。",
  skirt:"skirt 比 shirt 只差一個字母：襯衫 sh、裙子 sk，一上一下。",
  dress:"dress 唸起來像「抓絲」：洋裝上抓著絲帶。",
  pants:"pants 一定有 s：兩條褲管，所以永遠是複數。",
  shoe:"shoe 唸起來像「咻」：穿上鞋子咻一下跑走了！",
  sock:"sock 唸起來像「沙客」：沙灘上的客人只穿襪子。",
  house:"house 中間的 ou 像在喊「啊嗚」：回到家（house）大叫一聲好舒服！",
  bedroom:"bed（床）+ room（房間）＝有床的房間，就是臥室。",
  kitchen:"kitchen 唸起來像「七層」：廚房裡疊著七層的碗盤。",
  bathroom:"bath（洗澡）+ room（房間）＝洗澡的房間，就是浴室。",
  "living room":"living（生活）+ room（房間）＝一家人生活在一起的房間，就是客廳。",
  door:"door 中間的 oo 像門上的兩個門把。",
  window:"wind（風）+ ow：風從窗戶吹進來，冷得大叫「ow」！",
  floor:"floor 唸起來像「福樓」：福氣從樓上掉到地板上。",
  table:"table 的 t 像一張桌子的樣子：上面平平的，下面有腳。",
  bed:"bed 這個字長得就像一張床：b 和 d 是床頭和床尾。",
  sofa:"sofa 唸起來像「收發」：坐在沙發上收發訊息。",
  lamp:"lamp 唸起來像「藍普」：一盞藍色的檯燈。",
  box:"box 唸起來像「把可死」：箱子裡把東西塞得滿滿的。",
  picture:"picture 開頭的 pic 像「拍」：拍下來的就是照片。",
  shelf:"shelf 開頭是 she（她）：她把書放在架子上。複數 shelves 要把 f 改成 v。",
  pillow:"pillow 唸起來像「批樓」：枕頭打仗，枕頭批哩啪啦飛上樓。",
  soap:"soap 和 soup（湯）很像：肥皂不是湯，不能喝！",
  in:"in 唸起來像「印」：印在裡面。",
  on:"on 唸起來像「安」：東西安安穩穩地放在上面。",
  under:"under 唸起來像「安得」：躲在桌子下面最安全，安得了心。",
  "next to":"next 是「下一個」：下一個位置就在旁邊（next to）。",
  behind:"be + hind：hind 唸起來像「害的」：躲在後面害你找不到。",
  "in front of":"front 唸起來像「放的」：放在前面的東西最好拿。",
  eleven:"eleven 唸起來像「依類文」：十一個人依類寫作文。",
  twelve:"twelve 和 two（二）都是 tw 開頭：十二個就是一打，也就是兩個六。",
  thirteen:"thir + teen：teen 結尾的 13～19 重音在後面，唸「瑟 ˋ 聽」。",
  fourteen:"four（四）+ teen ＝ 十四，four 的 u 要留著。",
  fifteen:"five 變成 fif + teen ＝ 十五，跟 fifty 一樣用 fif。",
  sixteen:"six（六）+ teen ＝ 十六，直接加就好。",
  seventeen:"seven（七）+ teen ＝ 十七，直接加就好。",
  eighteen:"eight（八）+ teen，兩個 t 合成一個：eighteen。",
  nineteen:"nine（九）+ teen ＝ 十九，nine 的 e 要留著。",
  twenty:"twenty 和 two、twelve 一樣是 tw 開頭，都跟「二」有關。",
  thirty:"thirteen 是十三、thirty 是三十：teen 是「十幾」，ty 是「幾十」。",
  forty:"forty 沒有 u！口訣：四十歲的人跑步，把 u 跑丟了。",
  fifty:"fif + ty ＝ 五十，跟 fifteen 一樣用 fif，不是 fivety。",
  hundred:"hundred 開頭的 hun 唸起來像「憨」：考了一百分，開心到憨憨地笑。",
  open:"open 唸起來像「歐噴」：一打開汽水，歐！噴出來了！",
  close:"close 唸起來像「克漏死」：門沒關好會漏風，快關上！",
  sit:"sit 唸起來像「習」：坐下來學習。",
  stand:"stand 唸起來像「斯當」：站起來（stand up）當班長喊口令！",
  look:"look 中間的 oo 像兩隻眼睛在看。",
  listen:"listen 的 t 不發音：仔細聽（listen），t 安靜不出聲。",
  come:"come 唸起來像「抗」：快過來（come）抗議！",
  wait:"wait 唸起來像「委特」：委屈地特地等你。",
  say:"say 唸起來像「誰」：誰在說話？",
  show:"show 就是中文的「秀」：秀給大家看！",
  man:"man 唸起來像「面」：男人愛吃麵。複數 men 把 a 換成 e。",
  woman:"wo（我）+ man：woman 複數是 women，和 man 變 men 一樣。",
  child:"child 唸起來像「柴兒德」：小孩子；複數 children 加 ren。",
  mouse:"mouse 唸起來像「冒失」：冒冒失失的老鼠；複數 mice 唸起來像「賣絲」。",
  tail:"tail 和 tell（告訴）很像：狗搖尾巴，就是在告訴你牠很開心。",
  whose:"whose 是 who（誰）的所有格：who + se ＝ 誰的。"
});
registerUnit("j1-1-2", {name:"國一 上學期 第二次段考", sub:"祈使句、Let's、所有格、Whose、名詞複數、How many、There is / are、Where 與位置介系詞", words:J1_1_2_WORDS, grammar:J1_1_2_GRAMMAR, quiz:J1_1_2_QUIZ, classes:Object.assign({}, J1_1_2_CLASS, J1_1_2_PHONICS_CLASS), phonics:J1_1_2_PHONICS});
})();
