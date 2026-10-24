/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高一上學期 第二次段考（通用範圍）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"（沒有字根可拆的字留空字串，改用 MEMO）
   插圖："@名稱" 為手繪場景（名稱一律加 s112 前綴，避免和其他單元衝突）；"表情符號|標籤" 為概念卡
   ========================================================= */
const S1_1_2_WORDS = [
/* ---------- 字根 dict（說） ---------- */
["dictation","n.","聽寫",[
 ["We have an English dictation test every Monday.","我們每週一有英文聽寫測驗。","dictation 是 dictate（口述）的名詞；every Monday 表示「每週一」，前面不加介系詞。"],
 ["The dictation, in which the teacher read twenty words, was not easy.","那次聽寫老師唸了二十個字，並不簡單。","in which 表示「在那次聽寫中」，引導非限定關係子句；主要動詞是 was。"],
 ["The more dictation you practice, the better your listening becomes.","聽寫練得越多，聽力就越好。","the + 比較級 + 名詞 + 主詞 + 動詞；dictation 當「練習」時不可數。"]],
 "dict=說|-ation=名詞字尾","老師說、學生寫 → 聽寫","🎧|聽寫"],
["dictate","v.","口述；支配",[
 ["The teacher dictated ten sentences, and we wrote them down.","老師唸了十個句子，我們把它們寫下來。","dictate 表示「口述讓人寫下」；write them down：代名詞要放在 write 和 down 中間。"],
 ["Don't let your phone dictate how you spend your time.","別讓手機支配你怎麼運用時間。","let + 受詞 + 原形動詞；how you spend your time 是名詞子句，當 dictate 的受詞。"],
 ["Whoever dictates the rules should also follow them.","制定規則的人自己也應該遵守。","Whoever = Anyone who；whoever 子句當主詞，子句裡的動詞用單數 dictates。"]],
 "dict=說|-ate=動詞字尾","說出來讓人寫下或照做 → 口述；支配","🗣️|口述"],
["contradict","v.","反駁；與……矛盾",[
 ["The two reports contradict each other.","這兩份報導互相矛盾。","contradict 是及物動詞，後面直接接受詞；each other 表示「彼此」。"],
 ["He never contradicts his grandfather, whom he respects deeply.","他從不反駁他非常敬重的爺爺。","whom 引導非限定關係子句，在子句中當 respects 的受詞。"],
 ["What she says often contradicts what she does.","她說的話常常和她做的事互相矛盾。","what 引導的名詞子句當主詞，視為單數，所以動詞用 contradicts。"]],
 "contra-=相反|dict=說","說相反的話 → 反駁；矛盾","⚔️|唱反調"],
["indicate","v.","指出；顯示",[
 ["The study indicates that teenagers need about nine hours of sleep.","研究指出青少年大約需要九小時的睡眠。","indicate + that 子句 表示「指出、顯示……」，常用在研究報告。"],
 ["The red light on the screen indicates that the battery is low.","螢幕上的紅燈表示電池快沒電了。","主詞是 The red light（單數），動詞用 indicates；on the screen 只是修飾語。"],
 ["Research indicates that the more sugar people eat, the hungrier they feel.","研究顯示，人吃越多糖，就覺得越餓。","that 子句裡用了 the + 比較級, the + 比較級；hungry 的比較級是 hungrier。"]],
 "in-=向內|dic=說、指出|-ate=動詞字尾","指給人看、說出來 → 指出；顯示","👉|指出"],
["addicted","adj.","上癮的；沉迷的",[
 ["Many teenagers are addicted to their phones.","許多青少年對手機上癮。","be addicted to + 名詞或 V-ing：這裡的 to 是介系詞，後面不能接原形動詞。"],
 ["He was so addicted to online games that he stayed up every night.","他沉迷網路遊戲到每晚熬夜。","so + 形容詞 + that 表示「如此……以致於……」。"],
 ["The longer you play, the more addicted you may become.","你玩得越久，可能就越容易上癮。","the + 比較級, the + 比較級；addicted 是多音節形容詞，比較級用 more addicted。"]],
 "ad-=朝向|dict=說|-ed=形容詞字尾","被「說定」交給某樣東西，離不開它 → 上癮的","📱|上癮"],
/* ---------- 字根 scrib / script（寫） ---------- */
["describe","v.","描述；形容",[
 ["Can you describe the man you saw?","你可以描述一下你看到的那個男人嗎？","the man (whom) you saw：關係代名詞當受詞時可以省略。"],
 ["Words cannot describe how happy I was.","言語無法形容我有多快樂。","how happy I was 是名詞子句（間接問句），要用直述句語序。"],
 ["Describe the picture in which a boy is taking a selfie.","描述男孩正在自拍的那張照片。","in which = 在那張照片裡；in the picture 的介系詞 in 移到 which 前面。"]],
 "de-=向下|scribe=寫","寫下來 → 描述","✍️|描述"],
["description","n.","描述；說明",[
 ["The police asked for a description of the thief.","警方要求描述小偷的樣子。","a description of + 名詞 表示「對……的描述」；ask for 表示「要求」。"],
 ["Her description of the night market made me hungry.","她對夜市的描述讓我肚子餓了。","make + 受詞 + 形容詞 表示「使……變得……」。"],
 ["Read the description carefully before you buy anything online.","網購之前要仔細閱讀商品說明。","before 引導時間副詞子句；online 在這裡當副詞「在網路上」。"]],
 "de-=向下|script=寫|-ion=名詞字尾","describe（描述）的名詞：scribe 變成 script 再加 -ion","📝|描述"],
["prescription","n.","處方；處方箋",[
 ["You can't buy this medicine without a prescription.","沒有處方箋你不能買這種藥。","without + 名詞 表示「沒有……」。"],
 ["The doctor wrote a prescription, which I took to the pharmacy.","醫生開了處方箋，我把它拿到藥局。","非限定的 which 補充說明 a prescription，在子句中當 took 的受詞。"],
 ["As long as you follow the prescription, you will get better soon.","只要你照處方用藥，很快就會好起來。","as long as 表示「只要」；條件子句用現在式代替未來式。"]],
 "pre-=事先|script=寫|-ion=名詞字尾","醫生事先寫好的用藥說明 → 處方","💊|處方"],
["subscribe","v.","訂閱",[
 ["Please subscribe to our channel for more videos.","請訂閱我們的頻道看更多影片。","subscribe to + 名詞 表示「訂閱……」。"],
 ["Whoever subscribes to the channel will get a free e-book.","訂閱這個頻道的人都可以獲得一本免費電子書。","Whoever = Anyone who；whoever 子句當主詞，動詞用單數 subscribes。"],
 ["The channel to which I subscribe posts a new video every Friday.","我訂閱的那個頻道每週五都會發新影片。","to which：subscribe to 的 to 移到 which 前面；整句的主要動詞是 posts。"]],
 "sub-=在下面|scribe=寫","在文件下面寫上名字表示同意 → 訂閱","📺|訂閱"],
["script","n.","劇本；腳本；講稿",[
 ["The actors practiced the script for hours.","演員們練習劇本練了好幾個小時。","for hours 表示「好幾個小時」。"],
 ["Many YouTubers write a script before they film a video.","許多 YouTuber 在拍片前會先寫腳本。","before 引導時間副詞子句；film 在這裡當動詞「拍攝」。"],
 ["Whatever is in the script, the actors have to say it exactly.","不管劇本裡寫什麼，演員都得一字不差地說出來。","Whatever 放句首引導讓步子句，等於 No matter what。"]],
 "","","🎬|劇本"],
/* ---------- 字根 mit / miss（送） ---------- */
["commit","v.","犯（罪、錯）；投入、致力於",[
 ["The man who committed the crime was caught.","犯下這起罪行的男子被抓到了。","commit a crime 表示「犯罪」；who 引導關係子句修飾 The man；commit 的過去式要重複 t：committed。"],
 ["She is committed to helping homeless animals.","她致力於幫助流浪動物。","be committed to + V-ing：這裡的 to 是介系詞，後面接動名詞。"],
 ["Once you commit to a plan, stick to it.","一旦決定投入一個計畫，就要堅持下去。","once 表示「一旦」；stick to 表示「堅持」。"]],
 "com-=完全|mit=送","把自己完全送出去 → 投入；把壞事交付出去做 → 犯下","🤝|投入"],
["admit","v.","承認；准許進入",[
 ["He finally admitted that he had broken the window.","他終於承認是他打破窗戶的。","admit + that 子句；had broken 是過去完成式，表示比 admitted 更早發生。"],
 ["She admitted spending too much time on social media.","她承認花太多時間在社群媒體上。","admit + V-ing 表示「承認做了某事」，不接 to V。"],
 ["Children under six are admitted free.","六歲以下兒童免費入場。","be admitted 是被動語態，表示「被准許進入」。"]],
 "ad-=朝向|mit=送","把人送進去 → 准許進入；把真相送出來 → 承認","🙋|承認"],
["permit","v.","允許",[
 ["Smoking is not permitted in the building.","建築物內禁止吸菸。","be permitted 是被動語態；permit 比 allow 更正式，常用在告示上。"],
 ["My parents permit me to use my phone for one hour a day.","我爸媽准許我每天用一小時手機。","permit + 人 + to V 表示「允許某人做某事」。"],
 ["Unless the weather permits, the game will be canceled.","除非天氣允許，否則比賽會取消。","unless = if ... not；unless 子句用現在式代替未來式。"]],
 "per-=通過|mit=送","讓人通過、送過去 → 允許","✅|允許"],
["permission","n.","許可；同意",[
 ["You need your parents' permission to join the trip.","你需要家長的同意才能參加這趟旅行。","parents' 是字尾有 s 的複數名詞所有格，直接加 '。"],
 ["Don't post photos of others without their permission.","沒有經過別人同意，不要貼他們的照片。","post 在這裡是動詞「（在網路上）張貼」；without + 名詞。"],
 ["As long as you ask for permission first, you can borrow my laptop.","只要你先問過我，就可以借我的筆電。","as long as 表示「只要」；ask for permission 表示「請求許可」。"]],
 "per-=通過|miss=送|-ion=名詞字尾","permit（允許）的名詞：mit 變成 miss 再加 -ion","🔑|許可"],
["mission","n.","任務；使命",[
 ["The astronauts completed their mission successfully.","太空人順利完成了任務。","complete a mission 表示「完成任務」。"],
 ["Our mission is to help every student enjoy reading.","我們的使命是幫助每個學生享受閱讀。","be + to V 當補語，說明 mission 的內容；help + 人 + 原形動詞。"],
 ["The team, all of whom were volunteers, finished the mission in a week.","這支隊伍的成員全都是志工，他們一週內就完成了任務。","all of whom：數量詞 + of whom 表示「其中全部」，whom 指人。"]],
 "miss=送|-ion=名詞字尾","被派送出去要完成的事 → 任務","🚀|任務"],
["dismiss","v.","解散；讓……離開；不予理會",[
 ["The teacher dismissed the class early.","老師提早下課了。","dismiss the class 表示「讓學生下課離開」。"],
 ["Don't dismiss his idea just because he is young.","別只因為他年紀輕就否定他的想法。","just because 表示「只因為」。"],
 ["Once the bell rings, you will be dismissed.","鐘聲一響，你們就可以離開了。","once 表示「一旦」；will be dismissed 是未來式被動語態。"]],
 "dis-=分開|miss=送","把人送開 → 解散；把想法送走 → 不予理會","👋|解散"],
["transmit","v.","傳送；傳染",[
 ["Mosquitoes can transmit diseases.","蚊子會傳播疾病。","transmit diseases 表示「傳播疾病」。"],
 ["The game was transmitted live to millions of viewers.","這場比賽現場直播給數百萬觀眾。","was transmitted 是被動語態；live 在這裡是副詞「現場地」，唸 /laɪv/。"],
 ["Messages are transmitted much faster today than they were fifty years ago.","現在訊息傳送的速度比五十年前快得多。","much 可以加強比較級：much faster than。"]],
 "trans-=穿越|mit=送","送過去 → 傳送；傳染","📡|傳送"],
/* ---------- 字根 ject（丟） ---------- */
["reject","v.","拒絕；否決",[
 ["The company rejected my application.","公司拒絕了我的申請。","reject 語氣比 refuse 強烈，常用在拒絕提議或申請。"],
 ["Whatever plan you suggest, he will probably reject it.","不管你提出什麼計畫，他大概都會拒絕。","Whatever plan 引導讓步子句 = No matter what plan；whatever 可以直接修飾名詞。"],
 ["The idea, which was rejected at first, became a big success.","這個點子一開始被否決，後來卻大獲成功。","which 引導非限定關係子句補充說明 The idea；was rejected 是被動語態。"]],
 "re-=往回|ject=丟","丟回去 → 拒絕","🙅|拒絕"],
["inject","v.","注射；注入",[
 ["The nurse injected the medicine into my arm.","護理師把藥注射到我的手臂裡。","inject A into B 表示「把 A 注射到 B」。"],
 ["Some farmers inject chemicals into fruit, which is harmful to our health.","有些農夫在水果裡注射化學物質，這對我們的健康有害。","非限定的 which 可以指前面整件事（注射化學物質這件事）。"],
 ["The new coach injected energy into the team.","新教練為球隊注入了活力。","inject 也能比喻「注入（活力、資金等）」。"]],
 "in-=向內|ject=丟","丟進去 → 注射","💉|注射"],
["injection","n.","注射；打針",[
 ["The doctor gave me an injection.","醫生幫我打了一針。","give + 人 + an injection 表示「幫某人打針」。"],
 ["Little kids are often afraid of injections.","小孩子常常害怕打針。","be afraid of + 名詞或 V-ing。"],
 ["An injection works faster than pills, whereas pills are easier to take.","打針比吃藥見效快，而藥丸則比較容易服用。","whereas 表示前後兩件事的對比，意思是「然而」。"]],
 "in-=向內|ject=丟|-ion=名詞字尾","inject（注射）的名詞 → 打針","🏥|打針"],
["object","v./n.","反對；物體",[
 ["Many parents object to the new rule.","很多家長反對這項新規定。","object to + 名詞或 V-ing，這裡的 to 是介系詞。"],
 ["I object to staying up late before an exam.","我反對考前熬夜。","object to 後面接動名詞 staying，不接原形動詞。"],
 ["The telescope helps us see objects that are far away.","望遠鏡幫助我們看見遠方的物體。","object 當名詞「物體」時重音在第一音節 OB-ject；當動詞「反對」時重音在第二音節 ob-JECT。"]],
 "ob-=對著|ject=丟","朝著對方丟東西擋住 → 反對；丟在眼前的東西 → 物體","✋|反對"],
["adjective","n.","形容詞",[
 ["An adjective describes a noun.","形容詞用來描述名詞。","主詞 An adjective 是單數，所以動詞 describes 加 s。"],
 ["The word 'beautiful' is an adjective.","beautiful 這個字是形容詞。","adjective 開頭是母音，冠詞用 an。"],
 ["The more adjectives you know, the better you can describe things.","你懂的形容詞越多，就越能描述事物。","the + 比較級 + 名詞 + 主詞 + 動詞；well 的比較級是 better。"]],
 "ad-=朝向|ject=丟|-ive=字尾","丟到名詞旁邊、修飾它的字 → 形容詞","🏷️|形容詞"],
/* ---------- 飲食文化與健康飲食 ---------- */
["nutrition","n.","營養",[
 ["Good nutrition is important for growing teenagers.","良好的營養對成長中的青少年很重要。","nutrition 是不可數名詞，不加 a，也不加 s。"],
 ["Fresh fruit is full of nutrition, whereas fruit juice often contains a lot of sugar.","新鮮水果充滿營養，然而果汁常常含有大量的糖。","whereas 用來對比兩件事。"],
 ["The nutrition label tells you how much fat is in the food.","營養標示告訴你食物中有多少脂肪。","how much fat is in the food 是間接問句，用直述句語序。"]],
 "nutri=滋養|-tion=名詞字尾","滋養身體的東西 → 營養","🥗|營養"],
["protein","n.","蛋白質",[
 ["Eggs, milk, and beans are rich in protein.","蛋、牛奶和豆類富含蛋白質。","be rich in 表示「富含……」。"],
 ["Athletes need more protein than people who seldom exercise.","運動員比很少運動的人需要更多蛋白質。","who 引導關係子句修飾 people；more + 不可數名詞 + than。"],
 ["Tofu, which is made from soybeans, is a good source of protein.","豆腐是用黃豆做的，是很好的蛋白質來源。","非限定的 which 補充說明 Tofu；be made from 表示「由……製成（看不出原料）」。"]],
 "","","🥚|蛋白質"],
["calorie","n.","卡路里；大卡",[
 ["A can of soda has about 140 calories.","一罐汽水大約有 140 大卡。","a can of 表示「一罐……」；calorie 是可數名詞，複數加 s。"],
 ["The more calories you eat, the more exercise you need to burn them.","你吃進越多熱量，就需要越多運動來消耗。","the + 比較級 + 名詞 + 主詞 + 動詞；burn calories 表示「燃燒熱量」。"],
 ["Fried chicken has about three times as many calories as grilled chicken.","炸雞的熱量大約是烤雞的三倍。","倍數 + as many + 可數名詞 + as：倍數要放在第一個 as 前面。"]],
 "","","🔥|熱量"],
["balanced","adj.","均衡的",[
 ["Eating a balanced diet keeps you healthy.","飲食均衡讓你保持健康。","動名詞片語當主詞，視為單數，所以用 keeps。"],
 ["A balanced meal includes grains, vegetables, and protein.","均衡的一餐包含穀類、蔬菜和蛋白質。","列舉三項以上時，最後一項前面加 and。"],
 ["As long as your diet is balanced, you can enjoy dessert once in a while.","只要飲食均衡，偶爾吃個甜點也無妨。","as long as 表示「只要」；once in a while 表示「偶爾」。"]],
 "balanc=平衡|-ed=形容詞字尾","保持平衡的 → 均衡的","☯️|均衡"],
["ingredient","n.","材料；成分",[
 ["The main ingredients of this soup are tomatoes and eggs.","這道湯的主要材料是番茄和蛋。","主詞是 The main ingredients（複數），所以用 are。"],
 ["Check the ingredients, some of which may cause allergies.","檢查一下成分，其中有些可能會引起過敏。","some of which：數量詞 + of which 表示「其中一些」，which 指 the ingredients。"],
 ["Fresh ingredients make the dish taste much better.","新鮮的食材讓這道菜美味許多。","make + 受詞 + 原形動詞；much 修飾比較級 better。"]],
 "in-=進入|gredi=走|-ent=名詞字尾","走進料理裡的東西 → 材料","🧂|材料"],
["recipe","n.","食譜；做法",[
 ["This is my grandmother's recipe for beef noodles.","這是我奶奶的牛肉麵食譜。","a recipe for + 食物 表示「……的做法」。"],
 ["Follow the recipe, in which every step is clearly explained.","照著食譜做，裡面每個步驟都解釋得很清楚。","in which：在那份食譜裡；介系詞 in 移到 which 前面。"],
 ["Whoever tries this recipe will love it.","不管是誰試做這份食譜都會愛上它。","Whoever = Anyone who；whoever 子句當主詞，動詞用單數 tries。"]],
 "","","@s112recipe"],
["flavor","n.","口味；風味",[
 ["Which ice cream flavor do you like best?","你最喜歡哪一種口味的冰淇淋？","Which + 名詞 引導疑問句；like ... best 表示「最喜歡」。"],
 ["You can choose whichever flavor you like.","你可以選你喜歡的任何一種口味。","whichever 表示「（在範圍內的）任何一個」，這裡直接修飾 flavor。"],
 ["This sauce adds a sweet flavor to the dish.","這個醬汁為這道菜增添了甜味。","add A to B 表示「把 A 加到 B」。"]],
 "","","🍦|口味"],
["cuisine","n.","料理；菜餚",[
 ["Taiwanese cuisine is famous for its night market snacks.","台灣料理以夜市小吃聞名。","be famous for 表示「因……而出名」。"],
 ["Japanese cuisine, which uses lots of fresh fish, is popular around the world.","日本料理使用大量新鮮魚類，在全世界都很受歡迎。","非限定的 which 補充說明 Japanese cuisine；主要動詞是 is。"],
 ["Italian cuisine uses a lot of cheese, whereas Japanese cuisine hardly uses any.","義大利料理用很多起司，而日本料理幾乎不用。","whereas 表示前後對比；hardly 表示「幾乎不」。"]],
 "","","🍜|料理"],
["vegetarian","n./adj.","素食者；素食的",[
 ["My aunt has been a vegetarian for ten years.","我阿姨吃素已經十年了。","現在完成式 has been + for + 一段時間，表示持續到現在。"],
 ["This restaurant offers vegetarian dishes, many of which are made with tofu.","這家餐廳提供素食料理，其中很多是用豆腐做的。","many of which 表示「其中很多」；這裡不能用 many of them，因為需要關係詞連接兩個子句。"],
 ["A vegetarian diet can be healthy as long as it includes enough protein.","只要攝取足夠的蛋白質，素食飲食也能很健康。","as long as 表示「只要」。"]],
 "vegetar=蔬菜|-ian=……的人","以蔬菜為主食的人 → 素食者","🥦|素食"],
["organic","adj.","有機的",[
 ["Organic vegetables are grown without chemicals.","有機蔬菜的種植不使用化學物質。","are grown 是被動語態。"],
 ["Organic food usually costs twice as much as regular food.","有機食品的價格通常是一般食品的兩倍。","twice as much as：「兩倍」用 twice，搭配 as ... as。"],
 ["The farm from which we buy our vegetables is completely organic.","我們買菜的那座農場是完全有機的。","from which：buy ... from the farm 的 from 移到 which 前面；主要動詞是 is。"]],
 "organ=生物體|-ic=形容詞字尾","和生物體、自然有關的 → 有機的","🌱|有機"],
["appetite","n.","食慾；胃口",[
 ["Exercise gives me a big appetite.","運動讓我胃口大開。","a big / good appetite 表示「胃口很好」。"],
 ["When I'm sick, I lose my appetite.","生病時我會沒有食慾。","lose one's appetite 表示「失去食慾」。"],
 ["Don't eat snacks before dinner unless you want to lose your appetite.","除非你想吃不下晚餐，否則飯前別吃零食。","unless = if ... not：如果你不想沒胃口，就別吃零食。"]],
 "ap-=朝向|pet=追求|-ite=名詞字尾","一心追求食物的慾望 → 食慾","😋|食慾"],
["portion","n.","一份；部分",[
 ["The portions at this restaurant are huge.","這家餐廳的份量很大。","portion 指食物的「一份、份量」。"],
 ["A large portion of my allowance goes to bubble tea.","我零用錢的一大部分都花在珍珠奶茶上。","a large portion of + 名詞 表示「……的一大部分」。"],
 ["Eat smaller portions, and you will feel less tired after meals.","吃少一點，飯後就比較不會累。","祈使句 + and 表示「做了……就會……」。"]],
 "","","🍱|份量"],
["consume","v.","消耗；吃喝",[
 ["Americans consume a lot of sugar every year.","美國人每年吃掉大量的糖。","consume 是比較正式的「吃、喝、消耗」。"],
 ["This old fridge consumes twice as much electricity as the new one.","這台舊冰箱的耗電量是新冰箱的兩倍。","倍數 + as much + 不可數名詞 + as。"],
 ["The more fast food people consume, the higher their risk of heart disease becomes.","人吃越多速食，罹患心臟病的風險就越高。","the + 比較級 + 名詞 + 主詞 + 動詞：the more fast food people consume。"]],
 "con-=完全|sume=拿取","全部拿走 → 消耗；吃喝","🍔|消耗"],
["digest","v.","消化",[
 ["Some people can't digest milk well.","有些人沒辦法好好消化牛奶。","can't + 原形動詞。"],
 ["Rice is easier to digest than meat.","米飯比肉容易消化。","主詞 + be + 形容詞 + to V；easier than 是比較級。"],
 ["Give yourself time to digest the new information.","給自己一點時間消化新資訊。","digest 也可以比喻「理解、吸收」知識。"]],
 "di-=分開|gest=搬運","把食物分開、搬運到全身 → 消化","🍚|消化"],
["beverage","n.","飲料",[
 ["Sugary beverages are not good for your teeth.","含糖飲料對牙齒不好。","be good for 表示「對……有益」。"],
 ["Food and beverages are not allowed in the library.","圖書館內禁止飲食。","are not allowed 是被動語態；beverage 是 drink 比較正式的說法。"],
 ["Hand-shaken tea is a beverage of which Taiwanese people are very proud.","手搖飲是台灣人非常引以為傲的飲料。","of which：be proud of 的介系詞 of 移到 which 前面。"]],
 "","","🧋|飲料"],
["dessert","n.","甜點",[
 ["What would you like for dessert?","你甜點想吃什麼？","for dessert 表示「當作甜點」。"],
 ["Whoever visits Taiwan in summer should try mango shaved ice for dessert.","夏天來台灣的人都該嚐嚐芒果冰當甜點。","Whoever = Anyone who，子句當主詞。"],
 ["Don't confuse dessert with desert.","別把甜點和沙漠搞混了。","confuse A with B 表示「把 A 和 B 搞混」；desert（沙漠）只有一個 s。"]],
 "","","🍰|甜點"],
["raw","adj.","生的；未加工的",[
 ["Many people in Japan eat raw fish.","日本很多人吃生魚。","raw 指「生的、沒煮過的」。"],
 ["Don't drink raw milk unless you know it is safe.","除非確定安全，否則別喝生乳。","unless = if ... not；unless 後面不再加 not。"],
 ["Vegetables lose some nutrition when cooked, whereas raw vegetables keep most of it.","蔬菜煮過會流失一些營養，而生菜則保留了大部分。","when cooked = when they are cooked；whereas 表示對比。"]],
 "","","🍣|生的"],
["starve","v.","挨餓；餓死",[
 ["Thousands of people starved during the war.","戰爭期間有成千上萬的人餓死。","starve 當不及物動詞表示「餓死、挨餓」；during 是介系詞，後面接名詞。"],
 ["I'm starving! Let's eat now.","我快餓死了！我們現在就吃吧。","I'm starving 是口語，表示「非常餓」。"],
 ["Starving yourself is not a healthy way to lose weight.","餓肚子不是健康的減重方式。","動名詞片語當主詞；lose weight 表示「減重」。"]],
 "","","😵|好餓"],
["grain","n.","穀物；顆粒",[
 ["Rice and wheat are grains.","米和小麥都是穀物。","grain 當「穀類」時是可數名詞。"],
 ["Whole grains contain more fiber than white bread.","全穀類比白麵包含有更多纖維。","contain more + 名詞 + than 表示「比……含有更多……」。"],
 ["There isn't a grain of truth in that rumor.","那個謠言沒有一點真實性。","a grain of 表示「一點點」，常用在否定句。"]],
 "","","🌾|穀物"],
["seafood","n.","海鮮",[
 ["Keelung is famous for fresh seafood.","基隆以新鮮海鮮聞名。","seafood 是不可數名詞，不加 s。"],
 ["Whoever is allergic to seafood should not try this soup.","對海鮮過敏的人都不應該嚐這道湯。","Whoever = Anyone who；be allergic to 表示「對……過敏」。"],
 ["The restaurant in which we had seafood last night is near the harbor.","我們昨晚吃海鮮的那家餐廳在港口附近。","in which = where；整句的主要動詞是 is。"]],
 "sea=海|food=食物","海裡的食物 → 海鮮","🦐|海鮮"],
["meal","n.","一餐；餐點",[
 ["Breakfast is the most important meal of the day.","早餐是一天中最重要的一餐。","the most + 形容詞 表示最高級。"],
 ["Try not to skip meals, or you will feel tired.","盡量不要不吃正餐，否則你會覺得累。","try not to V 表示「盡量不要……」；祈使句 + or 表示「否則」。"],
 ["Once you finish your meal, please put the tray back.","用完餐後，請把餐盤放回去。","once 表示「一旦……；……之後就」。"]],
 "","","🍽️|一餐"],
/* ---------- 運動與身體 ---------- */
["muscle","n.","肌肉",[
 ["Swimming uses almost every muscle in your body.","游泳幾乎會用到你全身的肌肉。","every + 單數名詞。"],
 ["The more you exercise, the stronger your muscles become.","你越運動，肌肉就越強壯。","the + 比較級, the + 比較級：形容詞 stronger 要跟著 the 移到前面。"],
 ["Stretch your muscles before you run, or you might get hurt.","跑步前要拉筋，不然可能會受傷。","祈使句 + or 表示「否則」。"]],
 "","","💪|肌肉"],
["stretch","v./n.","伸展；拉筋；延伸",[
 ["Stretch your arms above your head.","把手臂伸到頭頂上方。","祈使句用原形動詞開頭。"],
 ["Stretching for ten minutes a day makes your body more flexible.","每天伸展十分鐘讓身體更柔軟。","動名詞片語當主詞，動詞用單數 makes。"],
 ["The beach stretches for three kilometers along the coast.","沙灘沿著海岸綿延三公里。","stretch 也能表示「延伸、綿延」。"]],
 "","","@s112stretch"],
["breathe","v.","呼吸",[
 ["Breathe in through your nose.","用鼻子吸氣。","breathe in 吸氣、breathe out 吐氣。"],
 ["Once you feel nervous, breathe slowly and count to ten.","一旦覺得緊張，就慢慢呼吸、數到十。","once 表示「一旦」。"],
 ["Whales come up to the surface to breathe.","鯨魚浮上水面呼吸。","to V 表示目的；breathe 是動詞，名詞是 breath。"]],
 "","","🌬️|呼吸"],
["fitness","n.","健康；體能",[
 ["She goes to a fitness class twice a week.","她一週上兩次健身課。","twice a week 表示「一週兩次」。"],
 ["Physical fitness is no less important than good grades.","體能的重要性不亞於好成績。","no less + 形容詞 + than 表示「和……一樣（並不比……差）」。"],
 ["Whatever your age is, it's never too late to improve your fitness.","不管你幾歲，改善體能永遠不嫌晚。","Whatever 引導讓步子句 = No matter what；it's never too late to V 表示「做……永不嫌晚」。"]],
 "fit=健康的|-ness=名詞字尾","身體健康、狀態好 → 體能","🏃|體能"],
["workout","n.","健身運動",[
 ["I do a 30-minute workout every morning.","我每天早上做三十分鐘的運動。","a 30-minute workout：數字 + 單數名詞當形容詞，minute 不加 s。"],
 ["After a hard workout, you need to drink plenty of water.","激烈運動後，你需要喝大量的水。","plenty of 表示「大量的」，可接可數或不可數名詞。"],
 ["The longer the workout is, the more calories you burn.","運動時間越長，燃燒的熱量越多。","the + 比較級, the + 比較級。"]],
 "work=運作|out=出來","把力氣全部使出來 → 健身運動（動詞片語是 work out）","🏋️|健身"],
["athlete","n.","運動員",[
 ["Professional athletes train for hours every day.","職業運動員每天訓練好幾個小時。","train 當動詞表示「訓練」。"],
 ["The athlete with whom I took a photo won a gold medal.","和我合照的那位運動員贏得了一面金牌。","with whom：take a photo with 人，介系詞 with 移到 whom 前面，不能寫成 with who。"],
 ["Athletes eat twice as much protein as most people do.","運動員吃的蛋白質是大部分人的兩倍。","twice as much + 不可數名詞 + as；as most people do 的 do 代替 eat。"]],
 "","","🏅|運動員"],
["marathon","n.","馬拉松",[
 ["My dad ran his first marathon at the age of forty.","我爸四十歲時跑了他的第一場馬拉松。","at the age of + 數字 表示「在……歲時」。"],
 ["A marathon is about 42 kilometers long.","馬拉松大約四十二公里長。","數字 + 單位 + long 表示長度。"],
 ["Whoever finishes the marathon will get a medal.","任何跑完馬拉松的人都會得到一面獎牌。","Whoever = Anyone who，子句當主詞，動詞用單數 finishes。"]],
 "","","@s112marathon"],
["coach","n./v.","教練；指導",[
 ["Our basketball coach is very strict.","我們的籃球教練非常嚴格。","coach 也可以當動詞「指導、訓練」。"],
 ["The coach with whom I trained for three years moved to Japan.","和我一起訓練了三年的教練搬去日本了。","with whom：train with 人；整句的主要動詞是 moved。"],
 ["The coach told us that the harder we practiced, the luckier we would be.","教練告訴我們，越努力練習就會越幸運。","the + 比較級, the + 比較級 放在 that 子句裡，時態配合 told 變成過去。"]],
 "","","📋|教練"],
["gym","n.","健身房；體育館",[
 ["I go to the gym three times a week.","我一週去健身房三次。","the gym 是 gymnasium 的簡稱。"],
 ["The school gym, in which we have PE class, is being repaired.","我們上體育課的學校體育館正在維修。","in which 引導非限定關係子句；is being repaired 是現在進行式被動。"],
 ["Unless you warm up first, don't use the machines in the gym.","除非先暖身，否則別使用健身房的器材。","unless = if ... not。"]],
 "","","@s112gym"],
["injury","n.","傷害；受傷",[
 ["He couldn't play in the final because of a knee injury.","他因為膝蓋受傷而無法參加決賽。","because of + 名詞；because + 子句。"],
 ["Warming up can prevent many sports injuries.","暖身可以預防許多運動傷害。","動名詞片語當主詞；injury 的複數是去 y 加 ies。"],
 ["She recovered from the injury much faster than we expected.","她從傷勢中恢復得比我們預期快得多。","much 修飾比較級 faster。"]],
 "in-=不|jur=正當|-y=名詞字尾","不正當的對待 → 傷害","🩹|受傷"],
["heal","v.","癒合；治癒",[
 ["The cut on my finger healed in a week.","我手指上的傷口一週就癒合了。","heal 可以當不及物動詞，表示「（傷口）癒合」。"],
 ["As long as you keep the wound clean, it will heal quickly.","只要保持傷口清潔，它很快就會癒合。","as long as 表示「只要」，條件子句用現在式代替未來式。"],
 ["Time heals all wounds.","時間能治癒一切傷痛。","常見的諺語；主詞 Time 是單數，所以動詞 heals 加 s。"]],
 "","","🌤️|癒合"],
["physical","adj.","身體的；實體的",[
 ["Physical activity is good for both your body and mind.","身體活動對身心都有益。","both A and B 表示「A 和 B 都」。"],
 ["Every student has a physical exam at the beginning of the school year.","每個學生在學年開始時都要做健康檢查。","physical exam 表示「健康檢查」。"],
 ["Some students are strong in physical education, whereas others are good at music.","有些學生體育很強，而另一些學生則擅長音樂。","whereas 對比兩群人；some ..., others ... 表示「有些……，另一些……」。"]],
 "physic=身體|-al=形容詞字尾","和身體有關的 → 身體的","🤸|身體"],
["mental","adj.","心理的；精神的",[
 ["Too much stress is bad for your mental health.","太多壓力對心理健康不好。","be bad for 表示「對……有害」。"],
 ["Mental health is no less important than physical health.","心理健康和身體健康一樣重要。","no less important than = as important as，強調「並不比……不重要」。"],
 ["Whoever feels sad for a long time should talk to a counselor.","長期感到難過的人都應該找輔導老師談談。","Whoever = Anyone who；whoever 子句當主詞。"]],
 "ment=心智|-al=形容詞字尾","和心智有關的 → 心理的","🧠|心理"],
["posture","n.","姿勢",[
 ["Bad posture can cause back pain.","不良姿勢會造成背痛。","can 表示可能性。"],
 ["Sit up straight! Your posture is terrible.","坐直！你的姿勢很糟糕。","sit up straight 表示「坐直」。"],
 ["The longer you look down at your phone, the worse your posture becomes.","你低頭看手機越久，姿勢就變得越差。","the + 比較級, the + 比較級；bad 的比較級是 worse。"]],
 "post=放置|-ure=名詞字尾","身體擺放的樣子 → 姿勢","🧍|姿勢"],
["flexible","adj.","柔軟的；有彈性的",[
 ["Dancers have very flexible bodies.","舞者的身體非常柔軟。","flexible 修飾名詞 bodies。"],
 ["My work hours are flexible, so I can pick up my kids.","我的工作時間很彈性，所以能去接小孩。","flexible 也可以形容時間、計畫「有彈性的」。"],
 ["Yoga makes your body more flexible, whereas weight training makes it stronger.","瑜伽讓身體更柔軟，而重訓讓身體更強壯。","whereas 表示對比；make + 受詞 + 形容詞。"]],
 "flex=彎曲|-ible=可……的","可以彎曲的 → 柔軟的；有彈性的","🧘|柔軟"],
["lung","n.","肺",[
 ["Smoking is harmful to your lungs.","抽菸對肺有害。","be harmful to 表示「對……有害」；人有兩個肺，所以用複數 lungs。"],
 ["Swimmers usually have strong lungs.","游泳選手的肺通常很強。","strong lungs 表示「肺活量好」。"],
 ["Air pollution damages the lungs, which are important for breathing.","空氣污染會傷害肺部，而肺對呼吸非常重要。","非限定的 which 補充說明 the lungs，關係子句動詞配合複數用 are。"]],
 "","","🫁|肺"],
["weight","n.","體重；重量",[
 ["I want to lose weight before summer.","我想在夏天前減重。","lose weight 減重；gain / put on weight 增重。"],
 ["Your weight depends on what you eat and how much you exercise.","你的體重取決於你吃什麼和運動多少。","depend on + 名詞子句。"],
 ["This bag is twice the weight of that one.","這個袋子的重量是那個的兩倍。","倍數 + the + 名詞 + of 也是倍數句型：twice the weight of = twice as heavy as。"]],
 "","","⚖️|體重"],
["stress","n./v.","壓力；強調",[
 ["Many students feel a lot of stress before exams.","許多學生考前感到很大的壓力。","stress 當「壓力」時是不可數名詞。"],
 ["Exercise is a good way to reduce stress.","運動是減壓的好方法。","a good way to V 表示「做……的好方法」。"],
 ["The more you worry, the more stress you will feel.","你越擔心，就會感到越多壓力。","the + 比較級, the + 比較級；more + 不可數名詞。"]],
 "","","😫|壓力"],
["energetic","adj.","精力充沛的",[
 ["Kids are always so energetic.","小孩子總是精力充沛。","always 放在 be 動詞後面。"],
 ["I have felt much more energetic since I started jogging.","自從開始慢跑後，我覺得精神好多了。","since 子句用過去式，主要子句用現在完成式；much 加強比較級。"],
 ["Once you get enough sleep, you will feel more energetic.","一旦睡飽了，你就會覺得更有活力。","once 表示「一旦」，子句用現在式代替未來式。"]],
 "energ=能量|-etic=形容詞字尾","energy（能量）的形容詞 → 精力充沛的","⚡|活力"],
["heartbeat","n.","心跳",[
 ["Your heartbeat speeds up when you run.","跑步時心跳會加快。","speed up 表示「加速」。"],
 ["The doctor listened to the baby's heartbeat.","醫生聽了寶寶的心跳。","listen to + 受詞。"],
 ["An athlete's heartbeat is usually slower than an average person's.","運動員的心跳通常比一般人慢。","比較的對象要一致：an athlete's heartbeat 對 an average person's (heartbeat)。"]],
 "heart=心|beat=跳動","心臟的跳動 → 心跳","💓|心跳"],
/* ---------- 社群媒體與溝通 ---------- */
["comment","n./v.","評論；留言",[
 ["Thanks for your comment on my post!","謝謝你在我貼文下的留言！","a comment on + 名詞 表示「對……的評論」。"],
 ["Whoever leaves a comment will have a chance to win a prize.","任何留言的人都有機會得獎。","Whoever = Anyone who；子句當主詞，動詞用單數 leaves。"],
 ["He refused to comment on the rumor.","他拒絕對那個謠言發表評論。","refuse to V；comment on 表示「評論……」。"]],
 "com-=完全|ment=心智","把心裡的想法完整說出 → 評論","💬|留言"],
["follower","n.","追蹤者；追隨者",[
 ["The singer has over two million followers on Instagram.","這位歌手在 Instagram 上有超過兩百萬名追蹤者。","over 表示「超過」；million 前面有數字時不加 s。"],
 ["She has three times as many followers as I do.","她的追蹤人數是我的三倍。","倍數 + as many + 複數名詞 + as；as I do 的 do 代替 have。"],
 ["The influencer has many followers, most of whom are teenagers.","這位網紅有很多追蹤者，其中大部分是青少年。","most of whom：數量詞 + of whom 表示「其中大部分」；whom 指人，不能換成 who 或 them。"]],
 "follow=跟隨|-er=……的人","跟隨別人的人 → 追蹤者","👥|追蹤者"],
["hashtag","n.","主題標籤",[
 ["Add a hashtag so that more people can find your post.","加上主題標籤，讓更多人能找到你的貼文。","so that + 子句 表示目的「以便……」。"],
 ["The hashtag, which was created by a student, went viral.","這個主題標籤是一名學生發起的，結果爆紅了。","非限定的 which 補充說明 The hashtag；go viral 表示「爆紅」。"],
 ["Whatever hashtag you use, keep it short and clear.","不管你用什麼主題標籤，都要簡短清楚。","whatever 直接修飾名詞 hashtag，引導讓步子句 = No matter what hashtag。"]],
 "hash=井字號|tag=標籤","前面加上 # 的標籤 → 主題標籤","#️⃣|主題標籤"],
["privacy","n.","隱私",[
 ["Everyone has a right to privacy.","每個人都有隱私權。","a right to + 名詞 表示「……的權利」。"],
 ["Check your privacy settings before you post photos.","貼照片前先檢查你的隱私設定。","privacy settings 表示「隱私設定」。"],
 ["Teenagers want more privacy, whereas parents want to know everything.","青少年想要更多隱私，而父母卻想知道一切。","whereas 表示對比。"]],
 "priv=個人的|-acy=名詞字尾","屬於個人的事 → 隱私","🔐|隱私"],
["post","n./v.","貼文；張貼",[
 ["Her post got over a thousand likes.","她的貼文得到超過一千個讚。","post 當名詞是「貼文」；like 在這裡是名詞「讚」，可以加 s。"],
 ["Think twice before you post anything online.","在網路上張貼任何東西前都要三思。","think twice 表示「三思」；before 引導時間副詞子句。"],
 ["Whoever posts mean comments will be blocked.","任何留下惡意留言的人都會被封鎖。","Whoever = Anyone who；will be blocked 是未來式被動語態。"]],
 "","","📲|貼文"],
["chat","v./n.","聊天",[
 ["We chatted online until midnight.","我們在網路上聊到半夜。","chat 的過去式要重複字尾 t：chatted。"],
 ["I had a nice chat with my old classmate.","我和老同學好好聊了一下。","have a chat with 人 表示「和某人聊天」。"],
 ["While I like chatting online, I prefer talking face to face.","雖然我喜歡線上聊天，但我比較喜歡面對面說話。","while 放句首可以表示「雖然」；like / prefer + V-ing。"]],
 "","","@s112chat"],
["network","n.","網路；人脈",[
 ["The school has a wireless network.","學校有無線網路。","wireless 表示「無線的」。"],
 ["Social networks help us keep in touch with old friends.","社群網站幫助我們和老朋友保持聯絡。","keep in touch with 表示「和……保持聯絡」。"],
 ["Taipei's MRT network is much bigger than it was twenty years ago.","台北的捷運路網比二十年前大得多。","much 加強比較級：much bigger than。"]],
 "net=網|work=結構","像網子一樣的結構 → 網路","🕸️|網路"],
["selfie","n.","自拍照",[
 ["Let's take a selfie together!","我們一起自拍吧！","take a selfie 表示「自拍」。"],
 ["She posts a selfie whenever she eats something new.","她每次吃到新東西就會貼自拍照。","whenever 表示「每當」。"],
 ["Taking selfies near the cliff is dangerous.","在懸崖邊自拍很危險。","動名詞片語當主詞，用單數動詞 is。"]],
 "self=自己|-ie=名詞字尾","自己拍自己 → 自拍照","@s112selfie"],
["upload","v.","上傳",[
 ["I uploaded the video to YouTube last night.","我昨晚把影片上傳到 YouTube。","upload A to B 表示「把 A 上傳到 B」；相反詞是 download。"],
 ["Once a photo is uploaded, it's hard to delete it completely.","照片一旦上傳，就很難完全刪除。","once 表示「一旦」；is uploaded 是被動語態。"],
 ["Uploading a large file takes much longer than sending a message.","上傳大檔案比傳訊息花的時間長得多。","動名詞片語當主詞；much 加強比較級。"]],
 "up=往上|load=裝載","把資料往上裝到網路上 → 上傳","⬆️|上傳"],
["influencer","n.","網紅；有影響力的人",[
 ["The influencer has millions of followers.","這位網紅有好幾百萬名追蹤者。","millions of 表示「數百萬」。"],
 ["Many teenagers dream of becoming influencers.","很多青少年夢想成為網紅。","dream of + V-ing。"],
 ["Don't believe whatever influencers say about health products.","網紅說的健康產品資訊，不要什麼都相信。","whatever = anything that，引導名詞子句當 believe 的受詞。"]],
 "influenc=影響|-er=……的人","能影響別人的人 → 網紅","🤳|網紅"],
["viral","adj.","病毒的；（網路上）爆紅的",[
 ["The video went viral overnight.","這支影片一夜爆紅。","go viral 表示「在網路上迅速傳開、爆紅」。"],
 ["The flu is a viral disease, so it spreads easily.","流感是病毒性疾病，所以很容易傳播。","viral 原本的意思是「病毒的」。"],
 ["Whatever goes viral online can be forgotten just as quickly.","網路上爆紅的東西，也可能同樣快速被遺忘。","Whatever = Anything that，子句當主詞，視為單數。"]],
 "vir=病毒|-al=形容詞字尾","像病毒一樣快速擴散的 → 爆紅的","🦠|爆紅"],
["connection","n.","連結；關聯；連線",[
 ["The Wi-Fi connection here is very slow.","這裡的 Wi-Fi 連線很慢。","connection 也指網路「連線」。"],
 ["Is there any connection between social media and sleep problems?","社群媒體和睡眠問題之間有任何關聯嗎？","a connection between A and B 表示「A 和 B 之間的關聯」。"],
 ["Real connections with people are more valuable than online likes.","和人真正的連結比網路上的按讚更珍貴。","more + 多音節形容詞 + than。"]],
 "con-=一起|nect=連結|-ion=名詞字尾","連在一起 → 連結","🔗|連結"],
["response","n.","回應；反應",[
 ["I sent him three messages but got no response.","我傳了三則訊息給他，卻沒有得到回應。","get no response 表示「沒得到回應」。"],
 ["In response to the fake news, the singer posted a video.","為了回應那則假新聞，這位歌手貼了一支影片。","in response to + 名詞 表示「回應……」。"],
 ["The faster the response is, the happier the customers are.","回應越快，顧客就越開心。","the + 比較級, the + 比較級；happy 的比較級是 happier。"]],
 "re-=往回|sponse=答應、回答","把回答送回去 → 回應","↩️|回應"],
["spread","v./n.","散播；擴散",[
 ["Don't spread rumors about others.","不要散播關於別人的謠言。","spread rumors 表示「散播謠言」；spread 三態同形：spread、spread、spread。"],
 ["Fake news spreads online much faster than the truth.","假新聞在網路上傳播得比真相快得多。","主詞 Fake news 不可數，動詞用 spreads；much 加強比較級。"],
 ["Whoever spread the rumor should apologize.","散播那個謠言的人應該道歉。","Whoever = Anyone who，whoever 子句當主詞；這裡的 spread 是過去式。"]],
 "","","📢|散播"],
["fake","adj./v.","假的；假裝",[
 ["Be careful of fake news on social media.","小心社群媒體上的假新聞。","be careful of 表示「小心……」。"],
 ["The bag looks real, but it's actually fake.","這包包看起來是真的，但其實是假貨。","look + 形容詞 表示「看起來……」。"],
 ["Unless you check the source, you can't tell whether the news is fake.","除非查證來源，否則你無法判斷新聞是不是假的。","unless = if ... not；whether 表示「是否」。"]],
 "","","🎭|假的"],
["trend","n.","趨勢；潮流",[
 ["Short videos are a big trend among teenagers.","短影音是青少年間的一大潮流。","among 用在三者以上，表示「在……之間」。"],
 ["Whatever the latest trend is, she always follows it.","不管最新的潮流是什麼，她總是跟著走。","Whatever 引導讓步子句 = No matter what。"],
 ["The trend shows that fewer people watch TV, whereas more people watch online videos.","這個趨勢顯示看電視的人變少了，而看網路影片的人變多了。","whereas 表示對比；fewer 和 more 形成對照。"]],
 "","","📈|趨勢"],
["browse","v.","瀏覽；隨便看看",[
 ["I browsed the internet for cheap tickets.","我上網瀏覽，找便宜的票。","browse + 地方 表示「瀏覽……」；for 表示目的。"],
 ["Are you looking for anything special, or just browsing?","你在找什麼特別的東西，還是只是隨便看看？","just browsing 常用在店裡，表示「只是隨便看看」。"],
 ["While I was browsing my phone, I missed my bus stop.","我滑手機的時候坐過站了。","while 表示「在……的時候」，常搭配進行式。"]],
 "","","🧭|瀏覽"],
["scroll","v.","捲動；滑（螢幕）",[
 ["She scrolled through her phone during dinner.","她吃晚餐時一直在滑手機。","scroll through 表示「一路往下滑著瀏覽」；during + 名詞。"],
 ["The more you scroll, the more time you waste.","你滑得越多，浪費的時間就越多。","the + 比較級, the + 比較級。"],
 ["Scroll down, and you will see the comments.","往下滑，你就會看到留言。","祈使句 + and 表示「做……就會……」。"]],
 "","","📜|滑動"],
["notification","n.","通知",[
 ["I turned off all my app notifications.","我把所有 App 的通知都關掉了。","turn off 表示「關掉」。"],
 ["Every time I get a notification, I check my phone.","每次收到通知，我都會看手機。","every time 可以當連接詞，表示「每次……」。"],
 ["Once you turn off notifications, you will focus much better.","一旦關掉通知，你會專心許多。","once 表示「一旦」；much better 加強比較級。"]],
 "noti=知道|-fic=使|-ation=名詞字尾","讓人知道 → 通知","🔔|通知"],
["account","n.","帳號；帳戶",[
 ["I created a new account on the app.","我在這個 App 上建立了新帳號。","create an account 表示「建立帳號」。"],
 ["Whoever uses this computer should log out of their account.","使用這台電腦的人都應該登出自己的帳號。","log out of 表示「登出」；whoever 後面常用 their 代替 his or her。"],
 ["My bank account has no more than 500 dollars in it.","我的銀行帳戶裡只有五百元。","no more than = only，表示「只有」（嫌少）。"]],
 "ac-=朝向|count=計算","拿來計算的紀錄 → 帳戶；帳號","👤|帳號"],
["digital","adj.","數位的",[
 ["We live in a digital age.","我們活在數位時代。","digital age 表示「數位時代」。"],
 ["Digital cameras are much lighter than old film cameras.","數位相機比舊式底片相機輕得多。","much 加強比較級。"],
 ["Young people learn digital skills faster, whereas older people may need more time.","年輕人學數位技能比較快，而年長的人可能需要更多時間。","whereas 表示對比。"]],
 "digit=數字|-al=形容詞字尾","用數字（0 和 1）表示的 → 數位的","💻|數位"],
["content","n.","內容",[
 ["The content of this website is for adults only.","這個網站的內容僅限成人。","主詞 The content 是單數。"],
 ["She creates content about healthy cooking.","她製作有關健康料理的內容。","create content 表示「創作內容」，content 在這裡不可數。"],
 ["Whatever content you post online may stay there forever.","你貼到網路上的任何內容都可能永遠留在那裡。","whatever 直接修飾名詞：whatever content = any content that。"]],
 "con-=一起|tent=握住","被裝在一起、握在裡面的東西 → 內容","📄|內容"]
];

/* ---------- 記憶小撇步（沒有字根可拆的字） ---------- */
Object.assign(MEMO, {
  script:"script 本身就是字根「寫」：寫下來給演員唸的東西，就是劇本。describe、prescription 裡都藏著它的兄弟 scrib / script。",
  protein:"protein 唸起來像「波廳」：pro 有「第一、最重要」的感覺，蛋白質是長肌肉最重要的營養，健身的人都愛喝 protein shake（蛋白飲）。",
  calorie:"calor 是拉丁文的「熱」：卡路里就是食物在身體裡燃燒產生的熱量，中文「卡路里」就是直接音譯。",
  recipe:"recipe 最後的 e 要發音，唸成「瑞色批」：照著瑞色批做菜，一定很好吃！",
  flavor:"flavor 唸起來像「飛佛」：香得讓人想飛起來的味道，就是風味。英式拼法是 flavour。",
  cuisine:"cuisine 是法文來的字，唸成「葵-ZEEN」：和 kitchen（廚房）、cook（煮）同源，一個地方的特色煮法就是料理。",
  portion:"portion 和 part（部分）是同一家人，都有「分」的意思：把食物分成一份一份，就是 portion。",
  beverage:"beverage 開頭像 beer（啤酒），都和「喝」有關：所有能喝的東西都叫 beverage，比 drink 正式，常出現在菜單和告示上。",
  dessert:"dessert 有兩個 s：甜點想吃兩份（double s）！只有一個 s 的 desert 是沙漠。dessert 重音在後面：de-SSERT。",
  raw:"raw 唸起來像「肉」：生肉（raw meat）千萬別直接吃！",
  starve:"starve 開頭是 star（星星）：餓到眼冒金星，就是 starve。",
  grain:"grain 和 rain（雨）只差一個 g：雨水灌溉田地，稻米、小麥這些穀物就長出來了。",
  meal:"meal 和 meat（肉）只差最後一個字母：一頓飯（meal）裡常常有肉（meat）。",
  muscle:"muscle 的 c 不發音，唸起來像「馬叟」。古羅馬人覺得肌肉在皮膚下動來動去，像一隻小老鼠，所以 muscle 原本就是「小老鼠」的意思。",
  stretch:"stretch 七個字母只有一個母音，拼字被拉得長長的，就像在拉筋；結尾 tch 和 catch、watch 一樣。",
  breathe:"breathe 是動詞（尾巴多一個 e，ea 唸長音），breath 是名詞：先 take a deep breath（深呼吸），再慢慢 breathe out（吐氣）。",
  athlete:"athlete 只有兩個音節，唸成「AA-sleet」，中間沒有 e 的音！很多人會錯唸成 ath-e-lete。",
  marathon:"Marathon 是希臘的地名：傳說一名士兵從馬拉松一路跑到雅典報捷，後來就有了長跑比賽 marathon。",
  coach:"coach 原本是「大馬車」：把人載到目的地的車子，後來比喻帶領選手前進的人，就是教練。",
  gym:"gym 是 gymnasium 的簡稱，y 唸短音，唸起來像「急姆」：急著去健身房運動！",
  lung:"lung 唸起來像「浪」：深呼吸時，空氣像海浪一樣湧進肺裡。人有兩個肺，常用複數 lungs。",
  weight:"weight 的 gh 不發音，唸起來和 wait（等待）一樣：站上體重計，等一下（wait）看看體重（weight）。",
  stress:"stress 和 press（壓）長得很像：被壓得喘不過氣，就是壓力。stressed 是「感到有壓力的」。",
  chat:"chat 短短一個音節，就像輕鬆隨意的閒聊；聊天室叫 chat room，過去式要重複 t：chatted。",
  spread:"spread 的 ea 唸短音，和 bread（麵包）押韻：把奶油在麵包上抹開（spread butter on bread），就是「展開、散播」。",
  post:"post 原本是「柱子」：古時候把公告貼在柱子上給大家看，現在把文章貼到網路上，就是 post（貼文）。",
  heal:"heal 和 health（健康）是一家人：讓身體回到健康的狀態，就是治癒。唸起來和 heel（腳跟）一樣。",
  fake:"fake 和 make 只差一個字母：make 是「做」，fake 就是「做假」。fake news 就是假新聞。",
  trend:"trend 原本有「轉向」的意思：大家一起轉向同一個方向，就形成了趨勢。trendy 是「時髦的」。",
  browse:"browse 唸起來像「布勞茲」：在網路上慢慢逛、隨便看看，就是瀏覽；瀏覽器就叫 browser。",
  scroll:"scroll 原本是「卷軸」：古人把字寫在長長的卷軸上，一邊捲一邊看，就像現在用手指滑螢幕。"
});

const S1_1_2_GRAMMAR = [
{ id:"g1", title:"介系詞 + 關係代名詞",
  intro:"關係子句裡的介系詞可以搬到關係代名詞前面，變成 in which、with whom、of which 這種寫法；指物用 which，指人用 whom。",
  table:[["句型","例句","說明"],["介系詞 + which（物）","the box in which I keep photos","= the box which I keep photos in"],["介系詞 + whom（人）","the girl with whom I chatted","不能寫成 with who 或 with that"],["數量詞 + of which","ten books, most of which are new","表示「其中（大部分）……」"],["數量詞 + of whom","three cousins, two of whom are doctors","指人用 whom"],["in / at which ＝ where","the city in which I live","for which ＝ why；on which ＝ when"]],
  points:[
   "介系詞可以留在句尾，也可以搬到關係代名詞前面：the man whom I talked with = the man with whom I talked。",
   "介系詞後面只能用 which（物）或 whom（人），不能用 that 或 who：with that ✕、with who ✕（學測、段考最愛考）。",
   "介系詞怎麼選，要回去看原本的動詞片語：depend on → on which；be interested in → in which；be proud of → of which；talk with → with whom。",
   "數量詞 + of which / of whom 表示「其中……」：I have three cousins, two of whom are vegetarians. 不能寫成 two of them（them 沒辦法連接兩個子句）。",
   "in which / at which 可以換成 where；on which 可以換成 when；for which 可以換成 why。",
   "片語動詞（look after、take care of、look forward to）的介系詞黏在動詞上，不能搬到前面：the baby whom she looks after ✔／the baby after whom she looks ✕。"],
  ex:[
   ["This is the dictionary with which I learned most of my English words.","這就是我學會大部分英文單字的那本字典。","learn with the dictionary，with 移到 which 前面。"],
   ["The athlete with whom I took a photo won a gold medal.","和我合照的那位運動員贏得了一面金牌。","指人用 whom，不能用 with who。"],
   ["The channel to which I subscribe posts a new video every Friday.","我訂閱的那個頻道每週五都會發新影片。","subscribe to，所以用 to which。"],
   ["Check the ingredients, some of which may cause allergies.","檢查一下成分，其中有些可能會引起過敏。","some of which 表示「其中一些」，指物。"],
   ["The influencer has many followers, most of whom are teenagers.","這位網紅有很多追蹤者，其中大部分是青少年。","most of whom 表示「其中大部分」，指人。"]]},
{ id:"g2", title:"複合關係代名詞 whoever / whatever / whichever",
  intro:"whoever、whatever、whichever 一個字就包含「先行詞 + 關係代名詞」，可以引導名詞子句，也可以放句首表示「不管……」。",
  table:[["複合關係代名詞","等於","放句首表讓步"],["whoever","anyone who（任何……的人）","no matter who（不管是誰）"],["whatever","anything that（任何……的事物）","no matter what（不管什麼）"],["whichever","any one that（範圍內任何一個）","no matter which（不管哪一個）"]],
  points:[
   "whoever 子句當主詞時視為單數：Whoever comes first will get a gift. = Anyone who comes first will get a gift.",
   "whoever 自己就包含先行詞，前面不能再放名詞：anyone whoever ✕；whatever 後面也不能再加 that。",
   "大陷阱：Give the tickets to whoever needs them. 雖然前面有介系詞 to，但子句裡 needs 缺主詞，所以用主格 whoever，不用 whomever。",
   "whichever 用在「有限的選項」裡：There are three flavors. Choose whichever you like.",
   "放句首表示讓步：Whatever happens, I will support you. = No matter what happens, I will support you.",
   "no matter what 只能引導讓步的副詞子句，不能當主詞或受詞：He believes whatever he reads. ✔／He believes no matter what he reads. ✕"],
  ex:[
   ["Whoever subscribes to the channel will get a free e-book.","訂閱這個頻道的人都可以獲得一本免費電子書。","Whoever = Anyone who，子句當主詞。"],
   ["You can choose whichever flavor you like.","你可以選你喜歡的任何一種口味。","whichever 在有限的口味中任選一個。"],
   ["Don't believe whatever influencers say about health products.","網紅說的健康產品資訊，不要什麼都相信。","whatever = anything that，子句當 believe 的受詞。"],
   ["Whatever your age is, it's never too late to improve your fitness.","不管你幾歲，改善體能永遠不嫌晚。","放句首表示讓步 = No matter what your age is。"],
   ["Whoever leaves a comment will have a chance to win a prize.","任何留言的人都有機會得獎。","whoever 子句當主詞，子句動詞 leaves 用單數。"]]},
{ id:"g3", title:"比較句型進階：the 比較級、倍數、no more / no less than",
  intro:"三個高中必考的比較句型：「越……就越……」、「是……的幾倍」，以及帶有說話者語氣的 no more than / no less than。",
  table:[["句型","例句","意思"],["the + 比較級, the + 比較級","The more you practice, the better you get.","越……就越……"],["倍數 + as + 原級 + as","three times as big as","是……的三倍大"],["倍數 + 比較級 + than","three times bigger than","比……大三倍（意思同上）"],["倍數 + the + 名詞 + of","twice the size of","是……的兩倍大"],["no more than","no more than 100 dollars","只有（= only，嫌少）"],["no less than","no less than 3,000 fans","多達（= as many as，嫌多）"]],
  points:[
   "the + 比較級 後面接「主詞 + 動詞」，形容詞或副詞要跟著 the 一起移到前面：The harder you study, the better grades you get.（✕ The more you study hard）",
   "句子很短時可以省略主詞和動詞：The sooner, the better.（越快越好）",
   "倍數一定放在第一個 as 前面：three times as many books as（✕ as three times many）。「兩倍」用 twice，「一半」用 half：half as big as。",
   "as ... as 中間放原級，than 前面才放比較級：twice as heavy as ✔／twice heavier as ✕。可數名詞用 as many，不可數名詞用 as much。",
   "no more than = only（嫌少）；no less than = as many / as much as（嫌多）。",
   "not more than = at most（最多）；not less than = at least（至少），只是客觀說數字，沒有語氣。",
   "time、money、sugar 是不可數名詞，比較時用 less，不用 fewer：the less time you have。"],
  ex:[
   ["The more you exercise, the stronger your muscles become.","你越運動，肌肉就越強壯。","the + 比較級, the + 比較級。"],
   ["She has three times as many followers as I do.","她的追蹤人數是我的三倍。","倍數 + as many + 複數名詞 + as。"],
   ["Organic food usually costs twice as much as regular food.","有機食品的價格通常是一般食品的兩倍。","兩倍用 twice；cost 用 as much as。"],
   ["The essay that I submitted was no more than 200 words.","我交出去的作文只有兩百字。","no more than = only，嫌少。"],
   ["Mental health is no less important than physical health.","心理健康和身體健康一樣重要。","no less important than = as important as。"]]},
{ id:"g4", title:"連接詞 while / whereas / once / unless / as long as",
  intro:"while 和 whereas 用來表示「對比」；once、unless、as long as 用來表示「條件」，條件子句說未來時要用現在式。",
  table:[["連接詞","意思","例句"],["while","當……時；然而；雖然","While I was browsing my phone, I missed my stop."],["whereas","然而（對比）","Yoga makes you flexible, whereas weight training makes you strong."],["once","一旦","Once you submit the form, you can't change it."],["unless","除非（= if ... not）","Unless you warm up, you may get hurt."],["as long as","只要","As long as you rest, you will recover."]],
  points:[
   "while 有三種意思：「當……時」（常接進行式）、「然而」（對比），放句首時也可以表示「雖然」：While I like chatting online, I prefer talking face to face.",
   "whereas 只表示對比，通常放在兩個子句中間，前面常加逗號。",
   "once、unless、as long as 都是條件子句，說未來的事要用現在式代替未來式：Once you get there, call me.（✕ will get）",
   "unless = if ... not，後面不能再加 not：Unless you hurry, you'll be late.（✕ Unless you don't hurry）",
   "as long as 強調「只要條件成立就……」；once 強調「一旦發生就……」。I'll go with you as long as it doesn't rain. = I'll go with you unless it rains.",
   "while 是連接詞，後面接子句；during 是介系詞，後面接名詞：while I was sleeping ／ during the night。"],
  ex:[
   ["Italian cuisine uses a lot of cheese, whereas Japanese cuisine hardly uses any.","義大利料理用很多起司，而日本料理幾乎不用。","whereas 對比兩種料理。"],
   ["While I like chatting online, I prefer talking face to face.","雖然我喜歡線上聊天，但我比較喜歡面對面說話。","while 放句首表示「雖然」。"],
   ["Once you submit the form, you cannot change it.","一旦你送出表單，就不能再修改了。","once 表示「一旦」，子句用現在式。"],
   ["Unless you check the source, you can't tell whether the news is fake.","除非查證來源，否則你無法判斷新聞是不是假的。","unless = if you don't check the source。"],
   ["As long as you get enough rest, you will recover soon.","只要充分休息，你很快就會康復。","as long as 表示「只要」，子句用現在式代替未來式。"]]}
];

const S1_1_2_QUIZ = [
 ["This is the house ___ my grandparents lived for forty years.",["which","in which","in that","whom"],1,"live 是不及物動詞，原句是 lived in the house；介系詞 in 移到前面要用 in which（= where），不能用 in that。","g1"],
 ["The girl ___ I went to the concert is my cousin.",["with whom","with who","with that","whom with"],0,"go to the concert with 人，介系詞 with 移到前面，指人用 whom；介系詞後面不能接 who 或 that。","g1"],
 ["I have three cousins, two of ___ are vegetarians.",["them","who","whom","which"],2,"逗號後面要用關係詞連接兩個子句，指人用 of whom；them 是代名詞，沒辦法連接子句。","g1"],
 ["The app ___ I depend most is my dictionary app.",["in which","which on","on that","on which"],3,"depend on 的介系詞是 on，移到前面變成 on which；介系詞後面不能用 that。","g1"],
 ["The reason ___ he quit the team is still unknown.",["for which","in which","of which","on which"],0,"for which = why，修飾 the reason。","g1"],
 ["He bought ten books, most of ___ are about cooking.",["them","that","which","whom"],2,"指物用 most of which 表示「其中大部分」；them 不能連接子句，that 不能放在介系詞後面。","g1"],
 ["The topic ___ we are most interested is social media.",["which","on which","in that","in which"],3,"be interested in，所以用 in which；介系詞後面不能接 that。","g1"],
 ["The baby ___ Amy looks after is only six months old.",["after whom","whom","after that","with whom"],1,"look after 是片語動詞，介系詞 after 不能和動詞分開搬到前面，所以直接用 whom（也可以用 that 或省略）。","g1"],
 ["This is the pen with ___ I signed my name.",["that","whom","it","which"],3,"sign with the pen，介系詞 with 後面指物用 which。","g1"],
 ["___ wins the game will get a prize.",["Whoever","Anyone","Who","Whatever"],0,"Whoever = Anyone who，子句當主詞；Anyone 後面要再加 who，Whatever 指事物。","g2"],
 ["You can order ___ you like from the menu.",["whoever","whatever","which","what that"],1,"whatever = anything that，指事物；what that 是錯誤的寫法。","g2"],
 ["Give the tickets to ___ needs them.",["whomever","whoever","who","anyone"],1,"雖然前面有介系詞 to，但子句裡 needs 缺主詞，要用主格 whoever。這是大陷阱！","g2"],
 ["There are three seats left. You can take ___ you want.",["who","whatever that","whoever","whichever"],3,"在有限的選項（三個座位）裡任選一個，用 whichever。","g2"],
 ["___ happens, I will always support you.",["Whatever","No matter","However","Whoever"],0,"Whatever happens = No matter what happens；No matter 後面要加 what 才完整。","g2"],
 ["Whoever ___ the rules will be punished.",["breaking","to break","breaks","break"],2,"whoever 子句裡的動詞配合單數主詞，用 breaks。","g2"],
 ["Whatever you do, don't give up. 句中的 Whatever 可以換成？",["Anything that","No matter what","Whoever","Which"],1,"放句首表示讓步的 Whatever = No matter what。","g2"],
 ["Anyone who finishes first can leave early. = ___ finishes first can leave early.",["Whatever","Whichever","Whoever","Anyone"],2,"Anyone who = Whoever。","g2"],
 ["He believes ___ he reads online, which is dangerous.",["whoever","no matter what","what that","whatever"],3,"believes 後面需要名詞子句當受詞：whatever = anything that。no matter what 只能引導讓步子句。","g2"],
 ["The ___ you practice, the better you will become.",["much","more","most","many"],1,"the + 比較級, the + 比較級：the more ..., the better ...。","g3"],
 ["The harder you work, ___.",["the more you will succeed","you will succeed more","the most successful","more successful"],0,"後半句也要用 the + 比較級 開頭，再接主詞和動詞。","g3"],
 ["My bag is ___ yours.",["as twice heavy as","twice heavier as","twice as heavy as","heavy twice as"],2,"倍數放在第一個 as 前面，as ... as 中間用原級：twice as heavy as。","g3"],
 ["This phone costs three times ___ that one.",["more as","as many as","so much","as much as"],3,"cost 的價錢用 as much as；倍數放在 as 前面。","g3"],
 ["She has five times ___ followers as I do.",["more","as much","as many","many"],2,"followers 是可數名詞，用 as many ... as。","g3"],
 ["I have no more than 100 dollars. 意思是？",["我至少有一百元","我只有一百元","我有超過一百元","我欠別人一百元"],1,"no more than = only，表示「只有」，有嫌少的語氣。","g3"],
 ["He has no less than 3,000 followers. 意思是？",["他只有三千名追蹤者","他的追蹤者不到三千","他的追蹤者多達三千名","他的追蹤者最多三千名"],2,"no less than = as many as，表示「多達」，有嫌多的語氣。","g3"],
 ["The sooner, ___.",["the good","better","the best","the better"],3,"The sooner, the better.（越快越好）是 the + 比較級 句型的省略版。","g3"],
 ["The more you scroll, ___ time you have for sleep.",["the less","less","the fewer","the least"],0,"後半句要用 the + 比較級；time 不可數，用 less，不用 fewer。","g3"],
 ["___ you warm up first, you might get hurt.",["Once","As long as","Unless","While"],2,"Unless = If ... not：如果不先暖身，就可能受傷。","g4"],
 ["You can use my laptop ___ you take good care of it.",["unless","as long as","whereas","while"],1,"as long as 表示「只要」：只要你好好愛惜，就可以用。","g4"],
 ["___ you submit the form, you can't change it.",["Once","Unless","Whereas","During"],0,"once 表示「一旦」；During 是介系詞，後面不能接子句。","g4"],
 ["Unless you ___, you will miss the bus.",["will hurry","don't hurry","hurried","hurry"],3,"unless 本身就有 not 的意思，後面不能再加 not；條件子句用現在式代替未來式。","g4"],
 ["My sister loves sweets, ___ I prefer salty snacks.",["once","unless","whereas","as long as"],2,"前後兩件事是對比，用 whereas。","g4"],
 ["___ I was scrolling through my phone, my mom called me.",["While","During","Unless","Whereas"],0,"while 表示「當……時」，常搭配進行式；during 是介系詞，後面要接名詞。","g4"],
 ["Once you ___ there, call me.",["will get","get","got","getting"],1,"once 引導條件子句，說未來的事用現在式代替未來式。","g4"],
 ["___ he is rich, he lives a simple life.",["Unless","Once","As long as","While"],3,"while 放句首可以表示「雖然」：雖然他很有錢，卻過著簡單的生活。","g4"],
 ["I'll go hiking with you ___ it doesn't rain.",["as long as","unless","whereas","during"],0,"as long as it doesn't rain = unless it rains；unless 後面不能再接 doesn't。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S1_1_2_CLASS = {
g1:[
 {say:"高一同學好！今天的文法是「介系詞加關係代名詞」。先看黑板上這兩句：{This is the house which I live in.} 和 {This is the house in which I live.}，意思一樣嗎？", board:[["This is the house which I live in.",["which","in"]],["This is the house in which I live.",["in which"]]]},
 {say:"答案是：一模一樣！原本是 I live in the house，介系詞 in 可以留在句尾，也可以搬到 which 前面。搬到前面的寫法比較正式，寫作文用起來很加分喔。", board:[["I live in the house.",["in"]],["the house in which I live",["in which"]]]},
 {say:"可是搬家有規矩！介系詞後面只能接受格：指物用 {which}，指人用 {whom}。{with that}、{with who} 通通錯！", board:[["the girl with whom I chatted",["with whom"]],["the girl with who I chatted",[],true],["the box in that I keep photos",[],true]]},
 {say:"口訣記起來！", chant:"介系詞往前搬，後面只能接 which 和 whom！"},
 {ask:{say:"考考你！", q:"The athlete ___ I took a photo won a gold medal.", opts:["with whom","with who","with that"], ans:0,
   ok:"厲害！take a photo with 人，with 搬到前面，指人用 whom。", bad:{1:"介系詞後面要接受格，who 是主格，要用 whom。",2:"介系詞後面不能接 that，這是段考最愛的陷阱！"},
   again:{q:"This is the dictionary ___ I learned many words.", opts:["with that","with which"], ans:1, exp:"指物用 which，介系詞後面不能接 that。"}}},
 {say:"那介系詞要選哪一個？回去看原本的動詞片語！{depend on} 就用 on which，{be interested in} 就用 in which，{talk with} 就用 with whom。", board:[["depend on → on which",["on which"]],["be interested in → in which",["in which"]],["talk with → with whom",["with whom"]]]},
 {say:"第二個口訣！", chant:"介系詞選哪個，回去看片語！"},
 {ask:{q:"The app ___ I depend most is my dictionary app.", opts:["in which","on which","at which"], ans:1,
   ok:"對！depend on，所以是 on which。", bad:{0:"「依賴」是 depend on，不是 depend in 喔。",2:"「依賴」是 depend on，介系詞要用 on。"},
   again:{q:"The topic ___ we are interested is social media.", opts:["in which","on which"], ans:0, exp:"be interested in，所以用 in which。"}}},
 {say:"進階版：數量詞加 of which、of whom，表示「其中……」。{I have three cousins, two of whom are vegetarians.} 三個表哥裡有兩個吃素。注意逗號後面要用 whom，不能用 them，因為 them 沒辦法把兩個句子連起來。", board:[["three cousins, two of whom are vegetarians",["two of whom"]],["ten books, most of which are new",["most of which"]],["three cousins, two of them are vegetarians",[],true]]},
 {ask:{q:"He bought ten books, most of ___ are about cooking.", opts:["them","which","whom"], ans:1,
   ok:"讚！書是物，用 most of which。", bad:{0:"them 不能連接兩個子句，要用關係代名詞 which。",2:"whom 是指人，書要用 which。"},
   again:{q:"I have many friends, some of ___ are athletes.", opts:["whom","which"], ans:0, exp:"朋友是人，用 some of whom。"}}},
 {say:"最後兩個小提醒。第一，{look after}、{take care of} 這種片語動詞，介系詞黏在動詞上，不能搬走：the baby whom she looks after 才對。第二，in which 常常可以換成 where：the city in which I live = the city where I live。", board:[["the baby whom she looks after",["whom","looks after"]],["the baby after whom she looks",[],true],["the city in which I live = the city where I live",["in which","where"]]]},
 {ask:{say:"最後一題！", q:"The baby ___ Amy looks after is only six months old.", opts:["after whom","with whom","whom"], ans:2,
   ok:"完美！look after 是片語動詞，after 不能搬走，直接用 whom。", bad:{0:"look after 的 after 要黏在動詞上，不能搬到 whom 前面喔。",1:"原本是 look after 人，沒有 with。"},
   again:{q:"The reason ___ he quit the team is unknown.", opts:["for which","in which"], ans:0, exp:"for which = why，修飾 the reason。"}}},
 {say:"介系詞加關係代名詞過關！複習口訣：介系詞往前搬，後面只能接 which 和 whom；介系詞選哪個，回去看片語；數量詞加 of which、of whom 表示「其中」。", end:true}
],
g2:[
 {say:"今天學三個超好用的字：{whoever}、{whatever}、{whichever}。它們叫複合關係代名詞，一個字就包含「先行詞加關係代名詞」，超省力！", board:[["whoever = anyone who",["whoever"]],["whatever = anything that",["whatever"]],["whichever = any one that",["whichever"]]]},
 {say:"看例句：{Whoever comes first will get a gift.} 等於 {Anyone who comes first will get a gift.} 整個 whoever 子句當主詞，視為單數，子句裡的 comes 也要加 s。", board:[["Whoever comes first will get a gift.",["Whoever","comes"]],["Anyone who comes first will get a gift.",["Anyone who"]]]},
 {say:"口訣來囉！", chant:"whoever 任何人，whatever 任何事，whichever 任選一！"},
 {ask:{q:"___ wins the game will get a prize.", opts:["Who","Whoever","Anyone"], ans:1,
   ok:"對！Whoever = Anyone who，整個子句當主詞。", bad:{0:"who 需要前面有先行詞，不能單獨表示「任何人」，要用 Whoever。",2:"Anyone 後面要再加 who：Anyone who wins ...。"},
   again:{q:"You can order ___ you like.", opts:["whatever","whoever"], ans:0, exp:"點的是東西，用 whatever = anything that。"}}},
 {say:"whichever 用在「有範圍」的選擇裡：{There are three flavors. Choose whichever you like.} 從這三種口味裡任選一個。", board:[["Choose whichever you like.",["whichever"]]]},
 {say:"第二種用法是「讓步」：放在句首表示「不管……」，等於 no matter 加疑問詞。{Whatever happens, I will support you.} 就是 {No matter what happens, I will support you.}", board:[["Whatever happens, I will support you.",["Whatever"]],["No matter what happens, I will support you.",["No matter what"]]]},
 {say:"讓步口訣！", chant:"不管是什麼，whatever 等於 no matter what！"},
 {say:"注意大陷阱！{Give the tickets to whoever needs them.} 前面有 to，很多同學以為要用 whomever。但是看子句裡面：needs 前面缺主詞，所以要用主格 whoever！", board:[["Give the tickets to whoever needs them.",["whoever","needs"]],["Give the tickets to whomever needs them.",[],true]]},
 {ask:{q:"Give the tickets to ___ needs them.", opts:["whomever","whoever","who"], ans:1,
   ok:"太強了！子句裡 needs 缺主詞，用主格 whoever。", bad:{0:"別被前面的 to 騙了！子句裡缺的是主詞，要用 whoever。",2:"who 前面需要先行詞；這裡沒有先行詞，要用 whoever。"},
   again:{q:"___ happens, don't give up.", opts:["Whatever","No matter"], ans:0, exp:"No matter 後面要加 what；Whatever 一個字就搞定。"}}},
 {say:"最後一個重點：no matter what 只能用在讓步，不能當主詞或受詞。{He believes whatever he reads.} 對；寫成 He believes no matter what he reads 就錯了。", board:[["He believes whatever he reads.",["whatever"]],["He believes no matter what he reads.",[],true]]},
 {ask:{say:"最後一題！", q:"He believes ___ he reads online.", opts:["no matter what","what that","whatever"], ans:2,
   ok:"完美！believes 後面要一個名詞子句當受詞，用 whatever。", bad:{0:"no matter what 只能放在讓步子句，不能當 believes 的受詞。",1:"what 後面不能再加 that，直接用 whatever。"},
   again:{q:"Whoever ___ the rules will be punished.", opts:["break","breaks"], ans:1, exp:"whoever 視為單數，動詞用 breaks。"}}},
 {say:"複合關係代名詞過關！複習口訣：whoever 任何人，whatever 任何事，whichever 任選一；放句首等於 no matter；子句缺主詞就用 whoever！", end:true}
],
g3:[
 {say:"今天學比較句型的進階版！第一個：{the + 比較級, the + 比較級}，意思是「越……就越……」。{The more you practice, the better you get.} 你越練習，就變得越好。", board:[["The more you practice, the better you get.",["The more","the better"]]]},
 {say:"重點：形容詞或副詞要跟著 the 一起搬到前面，後面才接主詞和動詞。{The harder you study, the better grades you get.} 不能寫成 The more you study hard。很短的時候還可以省略：{The sooner, the better.}", board:[["The harder you study, the better grades you get.",["The harder","the better grades"]],["The more you study hard, ...",[],true],["The sooner, the better.",["The sooner","the better"]]]},
 {say:"口訣！", chant:"越怎樣越怎樣，the 比較級、the 比較級！"},
 {ask:{q:"The ___ you exercise, the stronger your muscles become.", opts:["much","more","most"], ans:1,
   ok:"對！the more ..., the stronger ...。", bad:{0:"這個句型要用比較級，much 的比較級是 more。",2:"這裡是「越……越……」，用比較級 more，不是最高級。"},
   again:{q:"The sooner, ___.", opts:["the better","better"], ans:0, exp:"兩邊都要有 the：The sooner, the better."}}},
 {say:"第二個：倍數。公式是「倍數 + as + 原級 + as」：{three times as big as}。兩倍用 {twice}，一半用 {half}。也可以說 {three times bigger than}，意思一樣。", board:[["three times as big as",["three times","as","as"]],["twice as many followers as",["twice"]],["three times bigger than",["three times","bigger than"]]]},
 {say:"倍數口訣！", chant:"倍數擺前面，as 原級 as！"},
 {ask:{q:"This bag is ___ that one.", opts:["as twice heavy as","twice as heavy as","twice heavier as"], ans:1,
   ok:"讚！倍數放在第一個 as 前面，中間用原級。", bad:{0:"倍數要放在第一個 as 的前面喔！",2:"as ... as 中間要用原級 heavy，比較級才搭配 than。"},
   again:{q:"She has five times ___ followers as I do.", opts:["as many","as much"], ans:0, exp:"followers 是可數名詞，用 as many。"}}},
 {say:"第三個：{no more than} 和 {no less than}，帶有說話的人的語氣。no more than 等於 only，嫌少：{I have no more than 100 dollars.} 我只有一百元。no less than 等於 as many as，嫌多：{He has no less than 3,000 followers.} 他的追蹤者多達三千人！", board:[["no more than 100 dollars = only 100 dollars",["no more than","only"]],["no less than 3,000 followers = as many as 3,000",["no less than","as many as"]]]},
 {say:"口訣！", chant:"no more 只有，no less 多達！"},
 {ask:{q:"I have no more than 100 dollars. 意思是？", opts:["我只有一百元","我至少有一百元","我有超過一百元"], ans:0,
   ok:"對！no more than = only，嫌錢少。", bad:{1:"「至少」是 not less than 或 at least 喔。",2:"no more than 是「只有」，沒有超過。"},
   again:{q:"He has no less than ten pairs of shoes. 意思是？", opts:["他只有十雙鞋","他的鞋多達十雙"], ans:1, exp:"no less than = as many as，嫌多。"}}},
 {say:"補充一下：拿掉語氣的版本是 {not more than}，等於「最多」at most；{not less than}，等於「至少」at least。只是客觀說數字。", board:[["not more than = at most",["not more than"]],["not less than = at least",["not less than"]]]},
 {ask:{say:"最後一題，小心陷阱！", q:"The more you scroll, ___ time you have for sleep.", opts:["the fewer","less","the less"], ans:2,
   ok:"完美！後半句也要有 the，而且 time 不可數，用 less。", bad:{0:"time 是不可數名詞，要用 less，不用 fewer。",1:"後半句也要用 the 開頭：the less。"},
   again:{q:"Organic food costs twice ___ regular food.", opts:["as much as","as many as"], ans:0, exp:"價錢用 as much as。"}}},
 {say:"比較句型過關！複習口訣：越怎樣越怎樣，the 比較級、the 比較級；倍數擺前面，as 原級 as；no more 只有，no less 多達！", end:true}
],
g4:[
 {say:"今天學五個連接詞：{while}、{whereas}、{once}、{unless}、{as long as}。先從 while 開始，它有三種意思！", board:[["while / whereas：對比",["while","whereas"]],["once / unless / as long as：條件",["once","unless","as long as"]]]},
 {say:"while 第一個意思是「當……時」，常和進行式一起用：{While I was browsing my phone, I missed my stop.} 第二個是「然而」，對比兩件事：{I like tea, while my brother likes coffee.} 第三個，放句首可以表示「雖然」：{While I like chatting online, I prefer talking face to face.}", board:[["While I was browsing my phone, ...",["While","was browsing"]],["I like tea, while my brother likes coffee.",["while"]],["While I like chatting online, I prefer ...",["While"]]]},
 {say:"whereas 比較單純，只有「然而」的意思，專門用來對比：{Yoga makes you flexible, whereas weight training makes you strong.}", board:[["Yoga makes you flexible, whereas weight training makes you strong.",["whereas"]]]},
 {say:"口訣！", chant:"while 有三招，whereas 只對比！"},
 {ask:{q:"My sister loves sweets, ___ I prefer salty snacks.", opts:["once","whereas","unless"], ans:1,
   ok:"對！姊姊愛甜、我愛鹹，是對比，用 whereas。", bad:{0:"once 是「一旦」，這裡是前後對比喔。",2:"unless 是「除非」，這裡是前後對比喔。"},
   again:{q:"___ I was sleeping, someone called me.", opts:["During","While"], ans:1, exp:"後面是子句，要用連接詞 while；during 是介系詞，只能接名詞。"}}},
 {say:"接下來是條件。{once} 是「一旦」：{Once you submit the form, you can't change it.} {as long as} 是「只要」：{As long as you rest, you will recover.}", board:[["Once you submit the form, you can't change it.",["Once"]],["As long as you rest, you will recover.",["As long as"]]]},
 {say:"條件連接詞有一個共同規則：說未來的事，子句裡用現在式代替未來式！{Once you get there, call me.} 不能說 will get。", board:[["Once you get there, call me.",["get"]],["Once you will get there, call me.",[],true]]},
 {say:"口訣！", chant:"條件子句不用 will，現在式代替未來！"},
 {ask:{q:"Once you ___ there, call me.", opts:["will get","get","got"], ans:1,
   ok:"讚！條件子句用現在式代替未來式。", bad:{0:"條件子句不用 will，要用現在式 get。",2:"這是還沒發生的未來，不用過去式。"},
   again:{q:"As long as you ___ hard, you will pass.", opts:["study","will study"], ans:0, exp:"as long as 的子句用現在式代替未來式。"}}},
 {say:"最後是 {unless}，等於 if ... not，「除非」。超級陷阱：unless 自己就有 not，後面不能再加 not！{Unless you hurry, you'll be late.} = {If you don't hurry, you'll be late.}", board:[["Unless you hurry, you'll be late.",["Unless"]],["If you don't hurry, you'll be late.",["If","don't"]],["Unless you don't hurry, ...",[],true]]},
 {say:"unless 口訣！", chant:"unless 自帶 not，不要再加 not！"},
 {ask:{say:"最後一題！", q:"Unless you ___, you will miss the bus.", opts:["don't hurry","will hurry","hurry"], ans:2,
   ok:"完美！unless 後面不加 not，也不用 will。", bad:{0:"unless 已經有 not 的意思了，不能再加 don't。",1:"條件子句不用 will，用現在式 hurry。"},
   again:{q:"I'll go hiking with you ___ it rains.", opts:["unless","as long as"], ans:0, exp:"「除非下雨（下雨就不去）」用 unless。"}}},
 {say:"連接詞過關！複習口訣：while 有三招，whereas 只對比；條件子句不用 will；unless 自帶 not！高一第二次段考的文法全部上完了，去挑戰魔王吧！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S1_1_2_ROOTS = [
  {id:"r1", title:"字根 dict：說"},
  {id:"r2", title:"字根 scrib / script：寫"},
  {id:"r3", title:"字根 mit / miss：送"},
  {id:"r4", title:"字根 ject：丟"}
];
const S1_1_2_ROOT_CLASS = {
r1:[
 {say:"高一同學好！今天開始學字根。字根是單字的核心意思，學會一個，就能一口氣記住一整串單字！第一個字根是 <<dict>>，意思是「說」。", board:[["dict = 說",["dict"],false,true]]},
 {say:"你一定看過 {dictionary}：dict 說，加上 ion 和 ary，收集各種「說法」的書，就是字典。{dictate}：說出來讓別人寫下或照做，就是口述、支配。老師口述、你寫下來的考試，就是 {dictation} 聽寫！", board:[["dict + ion + ary = dictionary",["dict"],false,true],["dict + ate = dictate",["dict"],false,true],["dict + ation = dictation",["dict"],false,true]]},
 {say:"口訣！", chant:"dict、dict，開口說說說！"},
 {ask:{q:"字根 dict 的意思是？", opts:["寫","說","丟"], ans:1,
   ok:"對！dict 就是「說」，dictionary 收集各種說法。", bad:{0:"「寫」是 scrib / script 喔。",2:"「丟」是 ject 喔。"},
   again:{q:"dictionary 的意思是？", opts:["字典","口述"], ans:0, exp:"收集各種說法的書，就是字典。"}}},
 {say:"加上字首，意思就跑出來了！<<contra>> 是「相反」：{contradict} 說相反的話，就是反駁、互相矛盾。<<pre>> 是「事先」：{predict} 事先說出來，就是預測。", board:[["contra + dict = contradict",["contra","dict"],false,true],["pre + dict = predict",["pre","dict"],false,true]]},
 {ask:{q:"contra（相反）＋ dict（說）＝ contradict，意思是？", opts:["預測","字典","反駁；矛盾"], ans:2,
   ok:"讚！說相反的話，就是反駁。", bad:{0:"預測是 predict，pre 是「事先」喔。",1:"字典是 dictionary，contra 是「相反」喔。"},
   again:{q:"pre（事先）＋ dict（說）＝？", opts:["contradict","predict"], ans:1, exp:"事先說出來，就是預測 predict。"}}},
 {say:"dict 有時候會少一個 t，變成 <<dic>>：{indicate} 指給人看、說出來，就是指出、顯示。研究報告最愛用：{The study indicates that ...}", board:[["in + dic + ate = indicate",["dic"],false,true]]},
 {say:"還有一個和社群媒體很有關的字：{addicted}。ad 是「朝向」，古時候被「說定」交給某個主人，離不開他，就是上癮的。注意 {be addicted to}，to 是介系詞，後面接名詞或 V-ing！", board:[["ad + dict + ed = addicted",["ad","dict"],false,true],["be addicted to + 名詞 / V-ing",["to"]]]},
 {say:"口訣！", chant:"上癮要記 to，addicted to 手機！"},
 {ask:{say:"最後一題！", q:"Many teenagers are addicted ___ their phones.", opts:["to","with","on"], ans:0,
   ok:"完美！be addicted to，to 是介系詞。", bad:{1:"上癮的介系詞是 to，不是 with。",2:"上癮的介系詞是 to，不是 on。"},
   again:{q:"addicted 的意思是？", opts:["被說服的","上癮的"], ans:1, exp:"被說定交給某樣東西，離不開它，就是上癮的。"}}},
 {say:"字根 dict 過關！口訣：dict 開口說說說；dictionary 字典、dictate 口述、dictation 聽寫、contradict 反駁、predict 預測、indicate 指出、addicted 上癮的。", end:true}
],
r2:[
 {say:"今天的字根是 <<scrib>> 和 <<script>>，意思都是「寫」。動詞常寫成 scribe，變成名詞時 b 會變成 p，寫成 script。", board:[["scrib / script = 寫",["scrib","script"],false,true]]},
 {say:"<<de>> 是「向下」：{describe} 寫下來，就是描述。名詞是 {description}：scribe 變成 script，再加 ion。", board:[["de + scribe = describe",["de","scribe"],false,true],["de + script + ion = description",["de","script"],false,true]]},
 {say:"口訣！", chant:"動詞 scribe、名詞 script，寫寫寫！"},
 {ask:{q:"describe 的名詞是？", opts:["describtion","description","describement"], ans:1,
   ok:"對！scribe 變成 script，再加 ion：description。", bad:{0:"b 要變成 p：scribe → script，所以是 description。",2:"英文沒有這個字喔，要變成 script 加 ion。"},
   again:{q:"字根 scrib / script 的意思是？", opts:["寫","看"], ans:0, exp:"scrib / script 是「寫」，像 describe 寫下來就是描述。"}}},
 {say:"<<pre>> 是「事先」：{prescription} 醫生事先寫好的用藥說明，就是處方箋。<<sub>> 是「在下面」：{subscribe} 在文件下方寫上名字表示同意，就變成訂閱！", board:[["pre + script + ion = prescription",["pre","script"],false,true],["sub + scribe = subscribe",["sub","scribe"],false,true]]},
 {ask:{q:"sub（在下面）＋ scribe（寫）＝ subscribe，意思是？", opts:["描述","處方","訂閱"], ans:2,
   ok:"讚！在下面寫上名字表示同意，就是訂閱。", bad:{0:"描述是 describe，de 是「向下」喔。",1:"處方是 prescription，pre 是「事先」喔。"},
   again:{q:"Please subscribe ___ our channel.", opts:["to","on"], ans:0, exp:"subscribe to 表示「訂閱……」。"}}},
 {say:"{script} 本身就是字根：寫下來給演員唸的東西，就是劇本；YouTuber 拍片前寫的稿子也叫 script。", board:[["script = 寫下來的東西 → 劇本",["script"],false,true]]},
 {say:"整理成一句口訣！", chant:"描述 describe、處方 prescription、訂閱 subscribe、劇本 script！"},
 {ask:{say:"最後一題！", q:"You can't buy this medicine without a ___.", opts:["prescription","description","script"], ans:0,
   ok:"完美！買藥需要醫生事先寫好的處方箋。", bad:{1:"description 是「描述」，買藥要的是處方箋 prescription。",2:"script 是「劇本」，買藥要的是處方箋 prescription。"},
   again:{q:"Can you ___ the man you saw?", opts:["subscribe","describe"], ans:1, exp:"描述一個人用 describe。"}}},
 {say:"字根 scrib / script 過關！口訣：動詞 scribe、名詞 script；de 往下寫是描述，pre 事先寫是處方，sub 在下面寫是訂閱。", end:true}
],
r3:[
 {say:"今天的字根是 <<mit>> 和 <<miss>>，意思是「送」。動詞常用 mit，變成名詞時常寫成 miss 再加 ion。", board:[["mit / miss = 送",["mit","miss"],false,true]]},
 {say:"{submit}：sub 是「在下面」，把作業送到老師手下，就是提交。{admit}：ad 是「朝向」，把人送進去，就是准許進入；把真相送出來，就是承認。{commit}：com 是「完全」，把自己完全送出去，就是投入；也可以表示犯下錯誤或罪行。", board:[["sub + mit = submit",["sub","mit"],false,true],["ad + mit = admit",["ad","mit"],false,true],["com + mit = commit",["com","mit"],false,true]]},
 {say:"口訣！", chant:"mit、miss，送出去！"},
 {ask:{q:"sub（在下面）＋ mit（送）＝ submit，意思是？", opts:["承認","提交","允許"], ans:1,
   ok:"對！把東西送到上面的人手下，就是提交。", bad:{0:"承認是 admit 喔，ad 是「朝向」。",2:"允許是 permit 喔，per 是「通過」。"},
   again:{q:"He admitted ___ the window.", opts:["breaking","to break"], ans:0, exp:"admit 後面接 V-ing，表示承認做了某事。"}}},
 {say:"{permit}：per 是「通過」，讓你送過去，就是允許。它的名詞是 {permission}：mit 變成 miss，再加 ion。", board:[["per + mit = permit",["per","mit"],false,true],["per + miss + ion = permission",["per","miss"],false,true]]},
 {say:"變身口訣！", chant:"動詞 mit，名詞 miss 加 ion！"},
 {ask:{q:"permit 的名詞是？", opts:["permition","permission","permitment"], ans:1,
   ok:"讚！mit 變成 miss，再加 ion：permission。", bad:{0:"mit 要變成 miss，所以是 permission。",2:"英文沒有這個字，要變成 miss 加 ion。"},
   again:{q:"transmit 的意思是？", opts:["傳送","解散"], ans:0, exp:"trans 穿越 + mit 送：送過去，就是傳送。"}}},
 {say:"再三個：{mission} 被派送出去要完成的事，就是任務。{dismiss}：dis 是「分開」，把人送開，就是解散、下課。{transmit}：trans 是「穿越」，送過去，就是傳送、傳染。", board:[["miss + ion = mission",["miss"],false,true],["dis + miss = dismiss",["dis","miss"],false,true],["trans + mit = transmit",["trans","mit"],false,true]]},
 {ask:{say:"最後一題！", q:"The teacher ___ the class early.", opts:["admitted","submitted","dismissed"], ans:2,
   ok:"完美！把學生送開，就是讓大家下課。", bad:{0:"admit 是承認、准許進入，老師是讓學生離開喔。",1:"submit 是提交，老師是讓學生離開喔。"},
   again:{q:"Please ___ your report by Friday.", opts:["dismiss","submit"], ans:1, exp:"交報告用 submit。"}}},
 {say:"字根 mit / miss 過關！口訣：mit、miss 送出去；submit 提交、admit 承認、commit 投入、permit 允許、mission 任務、dismiss 解散、transmit 傳送。", end:true}
],
r4:[
 {say:"最後一課，字根 <<ject>>，意思是「丟」。高二會學到的 {project}，往前丟出一個想法，就是計畫。", board:[["ject = 丟",["ject"],false,true],["pro + ject = project",["pro","ject"],false,true]]},
 {say:"{reject}：re 是「往回」，丟回去，就是拒絕。{inject}：in 是「向內」，丟進去，就是注射；名詞是 {injection}，打針。", board:[["re + ject = reject",["re","ject"],false,true],["in + ject = inject",["in","ject"],false,true],["in + ject + ion = injection",["ject"],false,true]]},
 {say:"口訣！", chant:"ject、ject，丟丟丟！"},
 {ask:{q:"re（往回）＋ ject（丟）＝ reject，意思是？", opts:["注射","反對","拒絕"], ans:2,
   ok:"對！丟回去，就是拒絕。", bad:{0:"注射是 inject，in 是「向內」喔。",1:"反對是 object，ob 是「對著」喔。"},
   again:{q:"The nurse gave me an ___.", opts:["injection","inject"], ans:0, exp:"an 後面要接名詞：injection。"}}},
 {say:"{object}：ob 是「對著」，朝對方丟東西擋住，就是反對；丟在你眼前的東西，就是物體。當動詞時要說 {object to}，to 是介系詞，後面接名詞或 V-ing！", board:[["ob + ject = object",["ob","ject"],false,true],["object to + 名詞 / V-ing",["to"]]]},
 {say:"口訣！", chant:"反對 object to，後面接 V-ing！"},
 {ask:{q:"I object ___ late before an exam.", opts:["to stay up","to staying up","staying up"], ans:1,
   ok:"讚！object to 的 to 是介系詞，後面接 V-ing。", bad:{0:"這個 to 是介系詞，不是不定詞，後面要接 V-ing。",2:"object 後面要先接介系詞 to。"},
   again:{q:"object 當「物體」時，重音在哪裡？", opts:["第一音節 OB-ject","第二音節 ob-JECT"], ans:0, exp:"名詞重音在前，動詞重音在後。"}}},
 {say:"再送你一個文法課必用的字：{adjective}。ad 是「朝向」，加 ject 丟，再加 ive：丟到名詞旁邊、修飾名詞的字，就是形容詞！", board:[["ad + ject + ive = adjective",["ad","ject","ive"],false,true]]},
 {ask:{q:"ad（朝向）＋ ject（丟）＋ ive ＝ adjective，意思是？", opts:["副詞","形容詞","名詞"], ans:1,
   ok:"對！丟在名詞旁邊修飾它的字，就是形容詞。", bad:{0:"副詞是 adverb 喔。",2:"名詞是 noun；adjective 是用來修飾名詞的字。"},
   again:{q:"字根 ject 的意思是？", opts:["送","丟"], ans:1, exp:"ject 是「丟」；「送」是 mit / miss。"}}},
 {say:"總複習四個字根：<<dict>> 說、<<scrib>> 和 <<script>> 寫、<<mit>> 和 <<miss>> 送、<<ject>> 丟。看到長單字，先找字根，再看字首，意思就猜得出來！", board:[["dict 說｜scrib / script 寫",["dict","scrib","script"],false,true],["mit / miss 送｜ject 丟",["mit","miss","ject"],false,true]]},
 {say:"字根 ject 過關！口訣：ject 丟丟丟；reject 拒絕、inject 注射、object 反對、adjective 形容詞。四堂字根課全部上完了，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創，key 加 s112 前綴） ---------- */
Object.assign(ILLUS2, {
  s112recipe: () => svgWrap("#fff7ed", `<rect x="16" y="14" width="74" height="92" rx="6" fill="#fff" stroke="#fdba74" stroke-width="2.5"/>` + txt(53, 32, "RECIPE", 11, "#c2410c") + `<path d="M26 44 H80 M26 56 H74 M26 68 H80 M26 80 H66 M26 92 H72" stroke="#fed7aa" stroke-width="3" stroke-linecap="round"/>` + `<circle cx="28" cy="44" r="2.5" fill="#f97316"/><circle cx="28" cy="56" r="2.5" fill="#f97316"/><circle cx="28" cy="68" r="2.5" fill="#f97316"/>` + O.pan(116, 86, 1.1) + O.egg(120, 42, .7) + O.carrot(142, 58, .6) + spark(140, 20, .7)),
  s112stretch: () => svgWrap("#ecfdf5", ground() + P({x:80, y:106, s:1, hair:"long", hc:"#3b2a20", oc:"#22c55e", pose:"cheer", mood:"open"}) + `<path d="M50 30 Q56 20 62 28 M98 28 Q104 20 110 30" stroke="#16a34a" stroke-width="2" fill="none" stroke-linecap="round"/>` + spark(30, 40, .8) + spark(132, 44, .7) + O.sun(140, 18, .4)),
  s112marathon: () => svgWrap("#e0f2fe", `<rect x="0" y="92" width="160" height="28" fill="#9ca3af"/><path d="M0 106 H160" stroke="#fff" stroke-width="2" stroke-dasharray="8 6"/>` + `<path d="M118 92 V26 M152 92 V26" stroke="#475569" stroke-width="3"/><rect x="114" y="22" width="42" height="14" rx="3" fill="#ef4444"/>` + txt(135, 33, "FINISH", 8, "#fff") + kid(46, {s:.75, y:100, pose:"cheer", mood:"open", acc:["sweat"], oc:"#f97316"}) + girlP(88, {s:.7, y:100, pose:"wave", mood:"open", oc:"#3b82f6"}) + O.sun(22, 20, .45)),
  s112gym: () => svgWrap("#f1f5f9", `<rect x="0" y="104" width="160" height="16" fill="#cbd5e1"/>` + kid(80, {pose:"cheer", mood:"open", acc:["sweat"], oc:"#ef4444"}) + `<rect x="38" y="50" width="84" height="4" rx="2" fill="#475569"/><rect x="34" y="40" width="8" height="24" rx="2" fill="#1f2937"/><rect x="118" y="40" width="8" height="24" rx="2" fill="#1f2937"/><rect x="26" y="44" width="8" height="16" rx="2" fill="#374151"/><rect x="126" y="44" width="8" height="16" rx="2" fill="#374151"/>` + txt(140, 96, "GYM", 10, "#64748b")),
  s112chat: () => svgWrap("#f5f3ff", ground("#ddd6fe") + girlP(40, {s:.75, y:108, mood:"open", pose:"hold"}) + kid(120, {s:.75, y:108, mood:"open", pose:"hold", hair:"short", oc:"#10b981"}) + `<rect x="34" y="72" width="12" height="18" rx="2" fill="#1f2937"/><rect x="114" y="72" width="12" height="18" rx="2" fill="#1f2937"/>` + bubble(46, 24, "Hi!", 40) + bubble(116, 40, "LOL", 44) + `<path d="M62 60 Q80 50 98 60" stroke="#a78bfa" stroke-width="2" fill="none" stroke-dasharray="3 3"/>`),
  s112selfie: () => svgWrap("#fdf2f8", ground("#fbcfe8") + girlP(72, {mood:"open", pose:"wave", oc:"#ec4899"}) + kid(40, {s:.8, y:108, mood:"open", pose:"thumb", hair:"short", oc:"#60a5fa"}) + `<rect x="88" y="30" width="14" height="24" rx="3" fill="#1f2937"/><rect x="90" y="33" width="10" height="17" rx="1" fill="#93c5fd"/>` + spark(116, 26, .9) + heart(128, 46, .6) + star(18, 22, 4))
});

registerUnit("s1-1-2", {
  name:"高一 上學期 第二次段考",
  sub:"介系詞 + 關係代名詞、whoever / whatever / whichever、比較句型進階、連接詞 while / whereas / once / unless / as long as",
  words:S1_1_2_WORDS, grammar:S1_1_2_GRAMMAR, quiz:S1_1_2_QUIZ,
  classes:Object.assign({}, S1_1_2_CLASS, S1_1_2_ROOT_CLASS), phonics:S1_1_2_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會字根 dict、scrib、mit、ject，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
