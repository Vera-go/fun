/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高三 7000 單字 Level 5–6：學術詞彙、名詞化、同義改寫與高階片語
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"（沒有字根可拆的字留空，記憶小撇步寫在 MEMO）
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S3_V5_WORDS = [
/* ---------- 學術動詞 ---------- */
["investigate","v.","調查；研究",[
 ["The police are investigating the cause of the fire.","警方正在調查火災的原因。","investigate + 名詞：調查某事；名詞 investigation。"],
 ["Researchers investigated how social media affects teenagers' sleep.","研究人員調查了社群媒體如何影響青少年的睡眠。","investigate + wh- 名詞子句：用直述句語序 how social media affects ...。"],
 ["The claim has yet to be investigated thoroughly.","這項說法還有待徹底調查。","have yet to V = 還沒；to be investigated 是不定詞被動。"]],
 "in-=進入|vestig=足跡|-ate=動詞字尾","循著足跡追進去 → 調查","🔍|調查"],
["examine","v.","檢查；審視；研究",[
 ["The doctor examined my eyes carefully.","醫生仔細檢查了我的眼睛。","examine + 名詞；名詞 examination（檢查；考試）。"],
 ["This article examines the effects of climate change on farming.","這篇文章探討氣候變遷對農業的影響。","學術文章常用 This article / study examines ... 介紹主題，= look at、explore。"],
 ["On closer examination, the painting turned out to be a copy.","經過更仔細的檢查，那幅畫原來是複製品。","on closer examination = when (it was) examined more closely；turn out to be 結果是。"]],
 "","","🩺|檢查"],
["exemplify","v.","舉例說明；是……的典型",[
 ["The author exemplifies his point with several true stories.","作者用幾個真實故事來舉例說明他的論點。","exemplify + 名詞 + with + 例子；= illustrate、give an example of。"],
 ["Her life exemplifies the value of hard work.","她的一生正是努力價值的最佳例證。","exemplify 也可以表示「是……的典型代表」，主詞是例子本身。"],
 ["Taipei 101 exemplifies modern Taiwanese architecture.","台北 101 是台灣現代建築的典範。","名詞 example（例子）→ 動詞 exemplify（-ify 使……）。"]],
 "exempl=例子|-ify=使……","使成為例子 → 舉例說明","📋|舉例"],
["presume","v.","假定；推測",[
 ["I presume that you have read the instructions.","我想你應該已經讀過說明了。","presume that + 子句：在沒有證據的情況下「先假定」。"],
 ["A person is presumed innocent until proven guilty.","一個人在被證明有罪之前被推定為無罪。","be presumed + 形容詞：被推定為……；until proven = until (he is) proven，省略主詞和 be 動詞。"],
 ["The missing hikers are presumed to have taken another path.","失蹤的登山客被推測走了另一條路。","be presumed to have p.p.：被推測已經……（不定詞完成式表示更早發生）。"]],
 "pre-=事先|sume=拿取","事先就拿來當真 → 假定","🤔|假定"],
["formulate","v.","制定；（有系統地）表達",[
 ["The government formulated a new energy policy.","政府制定了新的能源政策。","formulate a plan / policy / theory：制定計畫、政策、理論。"],
 ["It took him a while to formulate his answer.","他花了一段時間才組織好他的回答。","It takes 人 時間 to V；formulate 也可表示「把想法有條理地說出來」。"],
 ["The scientist formulated a theory that explained the results.","那位科學家提出了一個能解釋結果的理論。","that 引導形容詞子句修飾 theory；名詞 formula（公式）、formulation。"]],
 "formul=公式|-ate=動詞字尾","把想法變成公式 → 制定","📐|制定"],
["deduce","v.","演繹；推斷出",[
 ["From the footprints, the detective deduced that the thief was a tall man.","從腳印，偵探推斷出小偷是個高個子男人。","deduce that + 子句；deduce A from B，用法和 infer 相近，但更強調邏輯推理。"],
 ["Can you deduce the rule from these examples?","你能從這些例子推導出規則嗎？","deduce 的名詞是 deduction（推論；扣除），學術文章常見。"],
 ["Little information was given, so it was hard to deduce what had happened.","提供的資訊很少，所以很難推斷發生了什麼事。","what had happened 是名詞子句當受詞；had happened 比 deduce 更早發生，用過去完成式。"]],
 "de-=向下|duce=引導","從前提一路往下引導 → 推斷出","🕵️|推斷"],
["quantify","v.","量化；以數量表示",[
 ["It is difficult to quantify happiness.","幸福很難量化。","It is difficult to V：虛主詞 It，真主詞是 to quantify happiness。"],
 ["The study tries to quantify the economic cost of air pollution.","這項研究試著量化空氣汙染造成的經濟損失。","try to V：試圖做……；quantify the cost 用數字表示成本。"],
 ["Not everything that matters can be quantified.","並不是所有重要的東西都能被量化。","Not everything 是部分否定：並非全部；can be quantified 助動詞被動。"]],
 "quant=多少|-ify=使……","使它變成「多少」的數字 → 量化","🔢|量化"],
["clarify","v.","澄清；闡明",[
 ["Could you clarify what you meant by \"soon\"?","你可以說清楚「很快」是指什麼意思嗎？","clarify + wh- 子句：說明清楚……；what you meant 是名詞子句，用直述句語序。"],
 ["The minister held a press conference to clarify his position.","部長召開記者會澄清他的立場。","to clarify 是不定詞表目的；clarify one's position 澄清立場。"],
 ["Rewriting a sentence in your own words helps clarify its meaning.","用自己的話改寫句子有助於釐清它的意思。","help (to) + 原形動詞：help clarify；動名詞 Rewriting 當主詞用單數動詞 helps。"]],
 "clar=清楚的|-ify=使……","使它變清楚 → 澄清","💡|澄清"],
["generalize","v.","概括；歸納；一概而論",[
 ["It is unfair to generalize about people from one country.","對某個國家的人一概而論是不公平的。","generalize about + 名詞：對……一概而論。"],
 ["From these examples, we can generalize a simple rule.","從這些例子我們可以歸納出一個簡單的規則。","generalize 也可以是及物：歸納出（規則）。"],
 ["Don't generalize from just one or two experiences.","不要只憑一兩次經驗就下結論。","generalize from + 名詞：根據……而概括；名詞 generalization。"]],
 "general=一般的|-ize=動詞字尾","變成一般的說法 → 概括","🧾|概括"],
["attribute","v./n.","歸因於；特質",[
 ["Scientists attribute the rise in sea levels to global warming.","科學家把海平面上升歸因於全球暖化。","attribute A to B：把 A 歸因於 B；to 是介系詞，後接名詞。"],
 ["His success can be attributed to hard work rather than luck.","他的成功可以歸功於努力，而不是運氣。","被動：A be attributed to B；rather than 前後要平行：hard work / luck。"],
 ["Patience is an important attribute of a good teacher.","耐心是好老師的重要特質。","attribute 當名詞重音在第一音節，意思是「特質、屬性」= quality、characteristic。"]],
 "at-=朝向|tribute=給予","把功勞或原因給到某處 → 歸因於","🏷️|歸因"],
["constitute","v.","構成；組成",[
 ["Women constitute more than half of the workforce in this industry.","女性占這個產業勞動力的一半以上。","constitute = make up 構成；主詞是組成的部分，受詞是整體。"],
 ["Does posting someone's photo without permission constitute a crime?","沒經同意張貼別人的照片構成犯罪嗎？","動名詞片語 posting ... 當主詞；constitute a crime / threat 構成犯罪、威脅。"],
 ["Twelve players, two of whom are foreigners, constitute the team.","這支隊伍由十二名球員組成，其中兩名是外籍球員。","two of whom：數量詞 + of + whom，引導非限定關係子句。"]],
 "con-=一起|stit=站立|-ute=動詞字尾","一起站好成形 → 構成","🧩|構成"],
["undermine","v.","逐漸削弱；暗中破壞",[
 ["Lack of sleep can undermine your health.","睡眠不足會逐漸損害你的健康。","undermine 強調「慢慢地、從底下」破壞；lack of + 名詞 = 缺乏……。"],
 ["Constant criticism undermined her confidence.","不斷的批評削弱了她的信心。","undermine confidence / trust / authority 是常見搭配。"],
 ["Fake news, if left unchecked, may undermine public trust in the media.","假新聞若不加以查核，可能會破壞大眾對媒體的信任。","if left unchecked = if it is left unchecked，副詞子句省略主詞和 be 動詞。"]],
 "under=在下面|mine=挖","從下面挖地道 → 暗中破壞","⛏️|削弱"],
["facilitate","v.","促進；使便利",[
 ["The new MRT line will facilitate travel between the two cities.","新的捷運線將使兩座城市之間的交通更便利。","facilitate 的主詞通常是事物，受詞是「過程、活動」，不能說 facilitate 人 to V。"],
 ["Group discussions facilitate learning by encouraging students to share ideas.","小組討論藉由鼓勵學生分享想法來促進學習。","by + V-ing 表示方法；encourage 人 to V。"],
 ["Technology has greatly facilitated communication across borders.","科技大大促進了跨國溝通。","副詞 greatly 放在 has 和 p.p. 之間；名詞 facility（設施）。"]],
 "facil=容易的|-itate=動詞字尾","使事情變容易 → 促進","🛤️|促進"],
["enhance","v.","提高；增強（品質、價值）",[
 ["Reading widely can enhance your vocabulary and writing skills.","廣泛閱讀能增進你的字彙和寫作能力。","enhance 多用於「好的東西變得更好」：enhance quality / value / performance。"],
 ["The new lighting greatly enhanced the beauty of the old temple.","新的燈光大大提升了老廟宇的美感。","enhance 的受詞是品質、特質，不用來說數量增加（數量用 increase）。"],
 ["Only by practicing regularly can you enhance your performance.","唯有規律練習，你才能提升表現。","Only + 副詞片語放句首要倒裝：can you enhance。"]],
 "en-=使|hance=高","使變得更高 → 提高","📈|提升"],
["derive","v.","獲得；源自",[
 ["Many English words are derived from Latin.","許多英文字源自拉丁文。","be derived from = derive from = come from 源自。"],
 ["She derives great pleasure from helping others.","她從幫助別人中獲得很大的快樂。","derive A from B：從 B 得到 A；from 是介系詞，接 V-ing。"],
 ["The name of the festival derives from an ancient legend.","這個節日的名稱源自一個古老傳說。","主動 derive from 也可以表示「源自」，不需用被動。"]],
 "de-=從|rive=河流","從河流源頭流出 → 源自","🌊|源自"],
["comprise","v.","包含；由……組成",[
 ["The committee comprises ten members.","委員會由十名成員組成。","comprise 不加 of：The committee comprises ten members.（主動）"],
 ["The test is comprised of three sections.","這個測驗由三個部分組成。","be comprised of = consist of = be made up of，三者可互相改寫。"],
 ["Taiwan comprises the main island and many smaller islands.","台灣包含本島和許多較小的島嶼。","comprise 是狀態動詞，不用進行式。"]],
 "com-=一起|prise=拿","把各部分拿在一起 → 包含","📦|包含"],
["speculate","v.","推測；猜測",[
 ["Scientists speculate that there may be water beneath the surface of Mars.","科學家推測火星表面下可能有水。","speculate that + 子句；there may be 表示可能性。"],
 ["It is pointless to speculate about what might have happened.","去猜測可能發生了什麼事是沒有意義的。","speculate about / on + 名詞；might have p.p. 對過去的推測。"],
 ["The media speculated on the reasons for his sudden resignation.","媒體揣測他突然辭職的原因。","speculate on 推測……；名詞 speculation（推測、投機）。"]],
 "spec=看|-ulate=動詞字尾","從遠處觀看猜想 → 推測","🤔|推測"],
["distinguish","v.","區分；辨別",[
 ["Can you distinguish fact from opinion in this article?","你能區分這篇文章中的事實和意見嗎？","distinguish A from B = tell A from B：區分 A 和 B。"],
 ["Some people cannot distinguish between red and green.","有些人無法分辨紅色和綠色。","distinguish between A and B：辨別 A 與 B 的差別。"],
 ["Her strong sense of humor distinguishes her from other writers.","她強烈的幽默感使她有別於其他作家。","distinguish 人 from 人：使……有別於……；形容詞 distinguished 傑出的。"]],
 "","","🆚|區分"],
["deem","v.","認為；視為（正式）",[
 ["The plan was deemed too risky.","這項計畫被認為風險太高。","deem + 受詞 + 形容詞 / 名詞：被動 be deemed (to be) + 補語。"],
 ["Students may leave early if it is deemed necessary.","若認為有必要，學生可以提早離開。","deem it necessary to V / that ...；這裡用被動 it is deemed necessary。"],
 ["He deemed it an honor to represent his school.","他認為代表學校是一種榮譽。","deem it + 名詞 + to V：it 是虛受詞，真受詞是 to represent ...。"]],
 "","","⚖️|認為"],
["reinforce","v.","加強；強化",[
 ["Steel bars are used to reinforce the concrete.","鋼筋被用來強化混凝土。","be used to V：被用來做……；注意和 be used to + V-ing（習慣）不同。"],
 ["The teacher gave more examples to reinforce the main idea.","老師多舉了一些例子來強化主旨。","reinforce an idea / a belief / a habit：強化觀念、信念、習慣。"],
 ["His words only reinforced my belief that honesty matters.","他的話只是更加深了我「誠實很重要」的信念。","my belief that ...：that 引導同位語子句，說明 belief 的內容。"]],
 "re-=再|in-=使|force=力量","再加一次力量 → 加強","🧱|加強"],
/* ---------- 抽象名詞與名詞化 ---------- */
["reluctance","n.","不情願；勉強",[
 ["She agreed to the plan with obvious reluctance.","她明顯很不情願地同意了這個計畫。","with reluctance = reluctantly；with + 抽象名詞 = 副詞。"],
 ["His reluctance to admit his mistake made things worse.","他不願承認錯誤讓事情更糟。","名詞化：He was reluctant to admit ... → His reluctance to admit ...；reluctance to V。"],
 ["Despite her initial reluctance, she ended up enjoying the trip.","雖然她一開始不太情願，最後卻玩得很開心。","despite + 名詞；end up + V-ing：最後……。"]],
 "re-=反向|luct=掙扎|-ance=名詞字尾","掙扎著往反方向 → 不情願","😒|不情願"],
["hesitation","n.","猶豫；遲疑",[
 ["Without hesitation, he jumped into the river to save the child.","他毫不猶豫地跳進河裡救那個孩子。","without hesitation = without hesitating = 毫不猶豫地。"],
 ["Her hesitation in answering showed that she was unsure.","她回答時的遲疑顯示她不確定。","名詞化：She hesitated to answer → Her hesitation in answering。"],
 ["If you have any questions, please contact us without hesitation.","如有任何問題，請隨時與我們聯絡。","正式書信常見句：do not hesitate to contact us = contact us without hesitation。"]],
 "hesit=黏住|-ation=名詞字尾","腳被黏住走不動 → 猶豫","⏸️|猶豫"],
["reliance","n.","依賴；依靠",[
 ["Our heavy reliance on fossil fuels harms the environment.","我們對化石燃料的嚴重依賴危害環境。","reliance on + 名詞；名詞化：We rely heavily on ... → Our heavy reliance on ...（副詞變形容詞）。"],
 ["The country hopes to reduce its reliance on imported food.","這個國家希望減少對進口糧食的依賴。","reduce reliance on 減少對……的依賴，同義改寫 depend less on。"],
 ["Too much reliance on smartphones may weaken our memory.","過度依賴智慧型手機可能會削弱記憶力。","too much + 不可數名詞 reliance。"]],
 "reli=依靠（rely）|-ance=名詞字尾","rely 的名詞 → 依賴","🤝|依賴"],
["prevalence","n.","流行；盛行；普遍",[
 ["The prevalence of smartphones has changed how people communicate.","智慧型手機的普及改變了人們溝通的方式。","主詞是 The prevalence（單數），動詞用 has；how people communicate 是名詞子句。"],
 ["The prevalence of obesity among children is rising.","兒童肥胖的盛行率正在上升。","名詞化：Obesity is prevalent among children → the prevalence of obesity among children。"],
 ["Doctors are worried about the growing prevalence of eye problems.","醫生擔心眼睛問題越來越普遍。","the growing + 名詞：「越來越……的」，是寫作好用的名詞化寫法。"]],
 "pre-=在前|val=強|-ence=名詞字尾","強勢地站在前面 → 盛行","📱|普及"],
["scarcity","n.","缺乏；短缺",[
 ["The scarcity of water is a serious problem in many countries.","缺水是許多國家的嚴重問題。","名詞化：Water is scarce → the scarcity of water。"],
 ["Prices rose sharply because of the scarcity of eggs.","因為雞蛋短缺，價格大幅上漲。","because of + 名詞片語；because + 子句（because eggs were scarce）。"],
 ["Scarcity makes things more valuable.","稀少使東西更有價值。","make + 受詞 + 形容詞比較級；抽象名詞當主詞不加 the。"]],
 "scarc=稀少的（scarce）|-ity=名詞字尾","scarce 的名詞 → 短缺","🏜️|短缺"],
["accuracy","n.","準確性；精確度",[
 ["The accuracy of the weather forecast has improved greatly.","天氣預報的準確度大幅提升了。","the accuracy of + 名詞；名詞化：The forecast is more accurate → the accuracy of the forecast has improved。"],
 ["Speed matters, but accuracy matters more in this test.","速度很重要，但在這個測驗裡準確更重要。","matter 當動詞表示「重要」，不及物。"],
 ["He answered the questions with great accuracy.","他非常精確地回答了這些問題。","with great accuracy = very accurately；with + 抽象名詞 = 副詞。"]],
 "ac-=朝向|cur=關心|-acy=名詞字尾","用心照料、仔細 → 準確性","🎯|準確"],
["emergence","n.","出現；興起",[
 ["The emergence of AI has changed the job market.","人工智慧的興起改變了就業市場。","名詞化：AI emerged → the emergence of AI。"],
 ["Scientists are studying the emergence of new viruses.","科學家正在研究新病毒的出現。","注意不要和 emergency（緊急情況）混淆。"],
 ["With the emergence of online shopping, many small stores have closed.","隨著網購興起，許多小店都關門了。","With + 名詞片語 表示「隨著……」，常用來濃縮原因。"]],
 "e-=向外|merg=沉入|-ence=名詞字尾","從水裡浮出來 → 出現","🌱|興起"],
["diversity","n.","多樣性",[
 ["Taiwan is known for its cultural diversity.","台灣以文化多元性聞名。","be known for + 名詞：以……出名；cultural diversity 文化多元。"],
 ["The diversity of plant life in the rainforest is amazing.","熱帶雨林中植物的多樣性令人驚嘆。","主詞 The diversity 是單數，動詞用 is。"],
 ["We should respect diversity rather than fear it.","我們應該尊重多元，而不是害怕它。","rather than 前後平行：respect / fear 都是原形動詞。"]],
 "di-=分開|vers=轉|-ity=名詞字尾","轉往不同方向 → 多樣性","🌈|多元"],
["implication","n.","含意；影響；後果",[
 ["What are the implications of this new law for students?","這項新法對學生有什麼影響？","implications for + 人：對……的影響，常用複數。"],
 ["The implication of his words was that we had failed.","他話裡的含意是我們失敗了。","imply 的名詞；The implication ... was that + 子句（名詞子句當補語）。"],
 ["The discovery has important implications for medicine.","這個發現對醫學有重大的意義。","have implications for 對……有影響或意義。"]],
 "im-=在裡面|plic=折疊|-ation=名詞字尾","折在裡面的意思 → 含意","💭|含意"],
["significance","n.","重要性；意義",[
 ["Few people realized the significance of his discovery at that time.","當時很少人了解他的發現有多重要。","名詞化：how significant his discovery was → the significance of his discovery。"],
 ["The temple is of great historical significance.","這座廟具有重大的歷史意義。","of + 抽象名詞 = 形容詞：of great significance = very significant。"],
 ["Do you understand the significance of this festival?","你了解這個節日的意義嗎？","significance 和 importance 可以互相改寫，但 significance 還有「意義」的意思。"]],
 "sign=記號|-ific=做|-ance=名詞字尾","被做上記號的 → 重要性","⭐|重要性"],
["indifference","n.","漠不關心；冷淡",[
 ["Many young people show indifference to politics.","許多年輕人對政治漠不關心。","indifference to + 名詞；形容詞 be indifferent to。"],
 ["His indifference to her feelings hurt her deeply.","他對她感受的冷淡深深傷害了她。","名詞化：He was indifferent to her feelings → His indifference to her feelings。"],
 ["The opposite of love is not hate, but indifference.","愛的相反不是恨，而是冷漠。","not A but B：不是 A 而是 B。"]],
 "in-=不|differ=不同|-ence=名詞字尾","覺得沒有差別 → 漠不關心","😶|冷漠"],
["adversity","n.","逆境；困境",[
 ["She showed great courage in the face of adversity.","她在逆境中展現了極大的勇氣。","in the face of adversity 面對逆境，作文常用。"],
 ["Adversity often brings out the best in people.","逆境往往激發出人們最好的一面。","bring out the best in 人：激發某人最好的一面。"],
 ["Having overcome many adversities, he finally became a doctor.","克服了許多困境之後，他終於成為醫生。","Having p.p. 完成式分詞構句：表示比主要子句先發生。"]],
 "ad-=朝向|vers=轉|-ity=名詞字尾","命運轉過來對著你 → 逆境","⛈️|逆境"],
["scrutiny","n.","詳細審查；仔細檢查",[
 ["The proposal is under close scrutiny.","這份提案正在接受嚴密審查。","under scrutiny 受到審查；close scrutiny 嚴密的檢查。"],
 ["The politician's private life came under public scrutiny.","那位政治人物的私生活受到大眾的檢視。","come under scrutiny 開始受到檢視；動詞 scrutinize。"],
 ["On closer scrutiny, the photo turned out to be fake.","經過更仔細的檢查，那張照片原來是假的。","on closer scrutiny = when (it was) examined more closely；turn out to be 結果是。"]],
 "","","🔍|審查"],
["endurance","n.","耐力；忍耐",[
 ["Marathon runners need great endurance.","馬拉松跑者需要極大的耐力。","endurance 不可數；動詞 endure 忍受。"],
 ["Swimming is a good way to build endurance.","游泳是培養耐力的好方法。","a good way to V：做……的好方法；build endurance 培養耐力。"],
 ["The pain was beyond endurance.","那種痛超出了忍受的極限。","beyond + 抽象名詞 = 無法……：beyond endurance 無法忍受、beyond belief 難以置信。"]],
 "en-=使|dur=持久|-ance=名詞字尾","使自己持久 → 耐力","🏃|耐力"],
["abundance","n.","豐富；充裕",[
 ["The island has an abundance of fresh fruit.","這座島有豐富的新鮮水果。","an abundance of + 名詞 = plenty of = a lot of。"],
 ["Fish are found in abundance in these waters.","這片海域魚類豐富。","in abundance 大量地（放句尾）；形容詞 abundant。"],
 ["The abundance of natural resources helped the country grow rich.","豐富的天然資源幫助這個國家致富。","名詞化：The country had abundant resources → The abundance of natural resources helped ...。"]],
 "ab-=離開|und=波浪|-ance=名詞字尾","波浪多到溢出來 → 豐富","🍇|豐富"],
["complexity","n.","複雜性",[
 ["The complexity of the problem surprised everyone.","問題的複雜程度讓大家都很驚訝。","名詞化：The problem was so complex that ... → The complexity of the problem ...。"],
 ["Many students underestimate the complexity of long sentences.","許多學生低估了長句的複雜度。","underestimate 低估（under 在下 + estimate 估計）。"],
 ["As the complexity of the task increases, mistakes become more likely.","隨著任務的複雜度增加，出錯的可能性也變高。","as 表示「隨著」，前後兩個子句都表示變化。"]],
 "com-=一起|plex=編織|-ity=名詞字尾","很多東西編織在一起 → 複雜性","🕸️|複雜"],
/* ---------- 同義改寫字組 ---------- */
["pivotal","adj.","關鍵的；樞紐的",[
 ["She played a pivotal role in the team's success.","她在球隊的成功中扮演了關鍵角色。","play a pivotal role in = play a crucial / key role in，同義改寫常見。"],
 ["The election was a pivotal moment in the country's history.","那次選舉是這個國家歷史上的關鍵時刻。","a pivotal moment / point 轉折點、關鍵時刻。"],
 ["Teachers are pivotal to the success of any education reform.","老師是任何教育改革成功的關鍵。","be pivotal to / for + 名詞。"]],
 "pivot=樞軸|-al=形容詞字尾","像門的樞軸，全靠它轉動 → 關鍵的","🔑|關鍵"],
["eliminate","v.","消除；淘汰",[
 ["The new system will eliminate the need for paper tickets.","新系統將不再需要紙本票券。","eliminate the need for 使不再需要……；同義改寫 get rid of、remove。"],
 ["Our team was eliminated in the first round.","我們隊在第一輪就被淘汰了。","be eliminated 被淘汰；名詞 elimination。"],
 ["Exercise alone cannot eliminate stress, but it certainly helps.","光靠運動無法消除壓力，但的確有幫助。","名詞 + alone = only + 名詞：Exercise alone = Only exercise。"]],
 "e-=向外|limin=門檻|-ate=動詞字尾","趕出門檻外 → 消除、淘汰","🗑️|消除"],
["diminish","v.","減少；降低",[
 ["The pain gradually diminished after I took the medicine.","吃藥後疼痛逐漸減輕了。","diminish 可以是不及物（自己減少），同義改寫 decrease、lessen。"],
 ["Nothing can diminish our respect for him.","沒有什麼能減損我們對他的尊敬。","diminish 也可以是及物：減少、貶低某事物。"],
 ["The importance of English has not diminished in the age of AI.","在人工智慧時代，英文的重要性並沒有降低。","in the age of 在……的時代；現在完成式表示到現在為止的狀態。"]],
 "di-=分開|min=小|-ish=動詞字尾","分成更小塊 → 減少","📉|減少"],
["ambiguous","adj.","模稜兩可的；含糊的",[
 ["The question was so ambiguous that many students misunderstood it.","這個問題非常含糊，以致許多學生誤解了。","so + 形容詞 + that 子句：如此……以致於……。"],
 ["His answer was deliberately ambiguous.","他的回答是故意模稜兩可的。","反義字 clear、definite；名詞 ambiguity。"],
 ["Avoid ambiguous words when writing instructions.","寫說明時要避免含糊的字詞。","when writing = when you write：副詞子句主詞相同時可省略主詞，動詞改 V-ing。"]],
 "ambi-=兩邊|gu=駕駛、走|-ous=形容詞字尾","可以往兩邊走 → 模稜兩可的","❓|含糊"],
["coherent","adj.","連貫的；有條理的",[
 ["A good essay should be clear and coherent.","一篇好文章應該清楚又連貫。","作文評分重點：coherent 段落連貫、前後一致；名詞 coherence。"],
 ["He was too upset to give a coherent explanation.","他太難過了，無法給出有條理的解釋。","too ... to V：太……而不能。"],
 ["Transition words help make your paragraphs more coherent.","轉折詞有助於讓段落更連貫。","help (to) + 原形：help make；make + 受詞 + 形容詞比較級。"]],
 "co-=一起|her=黏著|-ent=形容詞字尾","句子彼此黏在一起 → 連貫的","🔗|連貫"],
["comprehensive","adj.","全面的；綜合的",[
 ["The report gives a comprehensive overview of the problem.","這份報告對問題做了全面的概述。","comprehensive = thorough、complete，可同義改寫。"],
 ["Students need a comprehensive understanding of grammar, not just rules.","學生需要全面理解文法，而不只是背規則。","名詞化：understand grammar comprehensively → a comprehensive understanding of grammar。"],
 ["The hospital offers comprehensive health checks.","這間醫院提供全面的健康檢查。","注意：comprehensive 全面的；comprehensible 可理解的。"]],
 "com-=完全|prehens=抓住|-ive=形容詞字尾","全部抓住 → 全面的","🗺️|全面"],
["indispensable","adj.","不可或缺的",[
 ["Smartphones have become indispensable to modern life.","智慧型手機已經成為現代生活不可或缺的東西。","be indispensable to / for；= essential、vital，可同義改寫。"],
 ["Water is indispensable for all living things.","水對所有生物都是不可或缺的。","all + 複數名詞 living things。"],
 ["He made himself indispensable by learning every job in the office.","他學會辦公室裡的每項工作，讓自己變得不可或缺。","make oneself + 形容詞；by + V-ing 表方法。"]],
 "in-=不|dispens=分發出去|-able=能……的","不能被分出去、少了不行 → 不可或缺的","🧩|不可或缺"],
["preliminary","adj.","初步的；預備的",[
 ["Preliminary results suggest that the drug is safe.","初步結果顯示這種藥物是安全的。","suggest 表示「顯示、暗示」時，that 子句用一般時態，不用 (should) + 原形。"],
 ["After some preliminary discussion, they began the real negotiation.","經過一些初步討論後，他們開始正式協商。","preliminary = initial、early，可同義改寫。"],
 ["Our team won the preliminary round.","我們隊贏了預賽。","preliminary round 預賽；preliminary 只放在名詞前面。"]],
 "pre-=在前|limin=門檻|-ary=形容詞字尾","在跨進門檻之前 → 初步的","🚩|初步"],
["notion","n.","概念；想法",[
 ["The notion that girls are bad at math is simply wrong.","「女生數學不好」這個觀念根本是錯的。","the notion that + 完整子句：同位語子句，說明 notion 的內容。"],
 ["I have no notion of what he is talking about.","我完全不知道他在說什麼。","have no notion of = have no idea of；what 引導名詞子句。"],
 ["The book challenges the traditional notion of success.","這本書挑戰了傳統的成功觀念。","notion = idea、concept，同義改寫常見。"]],
 "not=知道|-ion=名詞字尾","知道的東西 → 概念","💭|概念"],
["solely","adv.","唯一地；僅僅",[
 ["The decision was based solely on test scores.","這個決定完全只根據考試成績。","solely = only、entirely，閱讀題常同義改寫。"],
 ["You are not solely responsible for the failure.","失敗不是你一個人的責任。","not solely = not only 部分否定：不只是你。"],
 ["The scholarship is given solely to students from rural areas.","這筆獎學金只頒給來自鄉下地區的學生。","be given to 人；solely 放在要強調的部分前面。"]],
 "sole=唯一的|-ly=副詞字尾","唯一地 → 僅僅","☝️|僅僅"],
["conversely","adv.","相反地；反過來說",[
 ["Some students study best in the morning; conversely, others prefer late at night.","有些學生早上讀書最有效；相反地，也有人偏好深夜。","conversely 是轉折副詞，前面常用分號或句號，後面加逗號。"],
 ["Prices rise when demand increases; conversely, they fall when demand drops.","需求增加時價格上漲；反之，需求下降時價格就下跌。","conversely 引出「反過來的情況」，= on the other hand、in contrast。"],
 ["Exercise improves mood. Conversely, lack of exercise can lead to depression.","運動能改善心情；反過來說，缺乏運動可能導致憂鬱。","lead to + 名詞：導致；to 是介系詞。"]],
 "con-=完全|vers=轉|-ely=副詞字尾","完全轉過來 → 相反地","🔄|相反地"],
["predominantly","adv.","主要地；大多",[
 ["The city's population is predominantly young.","這座城市的人口以年輕人為主。","predominantly = mainly、mostly、largely，可同義改寫。"],
 ["The students in this school are predominantly from rural areas.","這所學校的學生大多來自鄉下地區。","predominantly 放在 be 動詞後、補語前。"],
 ["The festival is celebrated predominantly in southern Taiwan.","這個節慶主要在南台灣舉行。","被動 is celebrated + 副詞 + 地點。"]],
 "pre-=在前|domin=支配|-antly=副詞字尾","站在前面占支配地位 → 主要地","🥇|主要"],
["alleviate","v.","減輕；緩和（痛苦、問題）",[
 ["This medicine can alleviate the pain.","這種藥可以減輕疼痛。","alleviate = relieve、ease，受詞是 pain、stress、problem 等負面事物。"],
 ["The government built more MRT lines to alleviate traffic jams.","政府蓋了更多捷運線來緩解塞車。","to alleviate 不定詞表目的。"],
 ["Nothing seemed to alleviate her anxiety before the exam.","考前似乎沒有什麼能減輕她的焦慮。","seem to V：似乎……；Nothing 當主詞用單數動詞。"]],
 "al-=朝向|lev=輕|-iate=動詞字尾","讓它變輕 → 減輕","🩹|減輕"],
["deteriorate","v.","惡化；變壞",[
 ["His health deteriorated rapidly after the accident.","意外後他的健康迅速惡化。","deteriorate = get worse，不及物動詞，不用被動。"],
 ["Relations between the two countries have deteriorated.","兩國關係已經惡化了。","現在完成式表示到現在的結果；反義字 improve。"],
 ["If nothing is done, the situation will continue to deteriorate.","如果什麼都不做，情況會持續惡化。","條件句：if + 現在式，主要子句用 will。"]],
 "deterior=更壞的|-ate=動詞字尾","變得更壞 → 惡化","🥀|惡化"],
["compensate","v.","補償；彌補",[
 ["Nothing can compensate for the loss of a loved one.","沒有什麼能彌補失去所愛之人的痛。","compensate for = make up for，可同義改寫。"],
 ["The company compensated the workers for their extra hours.","公司補償了工人們的加班時數。","compensate 人 for 事：因某事補償某人。"],
 ["She works hard to compensate for her lack of experience.","她努力工作來彌補經驗的不足。","名詞 compensation 補償（金）。"]],
 "com-=一起|pens=秤重、付錢|-ate=動詞字尾","放在秤上一起秤平 → 補償","💰|補償"],
["feasible","adj.","可行的",[
 ["Is it feasible to finish the project in one week?","一週內完成這個專案可行嗎？","It is feasible to V；同義改寫 practical、possible、workable。"],
 ["The engineers are studying whether the plan is economically feasible.","工程師正在研究這個計畫在經濟上是否可行。","whether 引導名詞子句；副詞 economically 修飾形容詞 feasible。"],
 ["We need a more feasible solution.","我們需要一個更可行的解決方法。","名詞 feasibility 可行性：a feasibility study 可行性研究。"]],
 "feas=做|-ible=能……的","能被做到的 → 可行的","🛠️|可行"],
["plausible","adj.","似乎合理的；可信的",[
 ["His excuse sounded plausible, but I still didn't believe him.","他的藉口聽起來似乎合理，但我還是不相信他。","sound + 形容詞；plausible 強調「表面上」合理。"],
 ["Which of the following is the most plausible explanation?","下列哪一個是最合理的解釋？","學測選項常見；同義改寫 reasonable、believable。"],
 ["It is plausible that the ancient city was destroyed by an earthquake.","那座古城有可能是被地震摧毀的。","It is plausible that + 子句：……是說得通的、有可能的。"]],
 "plaus=鼓掌|-ible=能……的","值得鼓掌贊同的 → 似乎合理的","👏|合理"],
["hinder","v.","阻礙；妨礙",[
 ["Heavy rain hindered the rescue work.","大雨阻礙了救援工作。","hinder = obstruct、hamper、get in the way of。"],
 ["Fear of failure can hinder you from trying new things.","害怕失敗可能會讓你不敢嘗試新事物。","hinder 人 from + V-ing：阻礙某人做某事 = prevent / keep 人 from + V-ing。"],
 ["Poor eyesight hindered his progress in reading.","視力不好妨礙了他在閱讀上的進步。","名詞 hindrance 阻礙。"]],
 "hind=後面|-er=動詞字尾","把人拉在後面 → 阻礙","🚧|阻礙"],
/* ---------- 高階片語 ---------- */
["in light of","phr.","鑑於；考慮到",[
 ["In light of the typhoon, the concert has been canceled.","鑑於颱風來襲，音樂會已經取消了。","in light of + 名詞 = considering、because of。"],
 ["In light of new evidence, the police reopened the case.","鑑於新的證據，警方重啟調查。","the police 是集合名詞，永遠當複數用：The police are ...。"],
 ["The rule was changed in light of students' suggestions.","考慮到學生們的建議，規定改了。","in light of 也可以放句尾。"]],
 "","","🔦|鑑於"],
["be inclined to","phr.","傾向於；想要",[
 ["I'm inclined to agree with you.","我傾向同意你的看法。","be inclined to + 原形動詞：to 是不定詞。"],
 ["People are inclined to believe what they want to believe.","人們傾向相信他們想相信的事。","what 引導名詞子句當受詞。"],
 ["He is not inclined to change his mind.","他不打算改變心意。","名詞 inclination 傾向：have an inclination to V。"]],
 "","","↗️|傾向"],
["give rise to","phr.","引起；導致",[
 ["The new policy gave rise to many complaints.","新政策引起了許多抱怨。","give rise to + 名詞 = cause、lead to、result in；to 是介系詞。"],
 ["Poverty can give rise to crime.","貧窮可能導致犯罪。","主詞是原因，to 後面是結果。"],
 ["The invention of the Internet has given rise to new kinds of jobs.","網路的發明帶來新類型的工作。","主詞是 The invention（單數），所以用 has given。"]],
 "","","🔥|引起"],
["in the wake of","phr.","在……之後；因為……的結果",[
 ["In the wake of the earthquake, many people donated money.","地震過後，許多人捐了錢。","in the wake of + 名詞（多為不好的事件）= after / as a result of。"],
 ["Prices rose in the wake of the oil crisis.","石油危機之後物價上漲了。","rise 是不及物動詞，過去式 rose。"],
 ["In the wake of the scandal, the mayor resigned.","醜聞爆發後，市長辭職了。","resign 辭職；scandal 醜聞。"]],
 "","","🚤|之後"],
["on the verge of","phr.","瀕臨；即將",[
 ["Many species are on the verge of extinction.","許多物種瀕臨絕種。","on the verge of + 名詞 / V-ing = on the edge of、about to V。"],
 ["She was on the verge of tears when she heard the news.","她聽到消息時差點哭出來。","on the verge of tears 快要哭了。"],
 ["The company was on the verge of going bankrupt.","這家公司當時瀕臨破產。","of 是介系詞，後面接 V-ing：going。"]],
 "","","⚠️|瀕臨"],
["in accordance with","phr.","依照；根據",[
 ["The building was designed in accordance with safety rules.","這棟建築是依照安全規定設計的。","in accordance with + 規定、法律、願望 = according to（較正式）。"],
 ["In accordance with his wishes, his ashes were scattered at sea.","依照他的遺願，他的骨灰被撒入大海。","被動 were scattered；wishes 願望（複數）。"],
 ["All students must act in accordance with school rules.","所有學生都必須遵守校規。","act in accordance with = follow、obey。"]],
 "","","📜|依照"],
["with regard to","phr.","關於",[
 ["With regard to your question, I'll answer it tomorrow.","關於你的問題，我明天回答。","with regard to = regarding = concerning = as for，可同義改寫。"],
 ["The two candidates differ with regard to education policy.","兩位候選人在教育政策上看法不同。","differ with regard to 在……方面不同。"],
 ["I have nothing to say with regard to that matter.","關於那件事，我沒什麼好說的。","注意是 with regard to，不是 with regards to（regards 是問候）。"]],
 "","","📌|關於"],
["by virtue of","phr.","憑藉；由於",[
 ["She got the job by virtue of her excellent English.","她憑藉優秀的英文得到這份工作。","by virtue of + 名詞 = because of、by means of。"],
 ["By virtue of being the oldest, he was in charge of the family.","因為是年紀最大的，他負責管理這個家。","of 是介系詞，接 V-ing：being。"],
 ["The city is important by virtue of its location.","這座城市因為地理位置而顯得重要。","virtue 原本是「美德、優點」：憑著優點 → 憑藉。"]],
 "","","🏅|憑藉"],
["take into account","phr.","考慮到；把……列入考慮",[
 ["You should take your budget into account when choosing a phone.","選手機時你應該把預算考慮進去。","take + 受詞 + into account；受詞短時放中間。"],
 ["The judges took into account the difficulty of the performance.","評審把表演的難度也列入考量。","受詞很長時可移到 into account 後面：take into account + 長受詞。"],
 ["When the price is taken into account, this car is a good deal.","把價格考慮進去的話，這輛車很划算。","被動：受詞 + be taken into account；= take ... into consideration。"]],
 "","","🧮|考慮"],
["at stake","phr.","處於危險中；面臨得失",[
 ["Thousands of jobs are at stake if the factory closes.","如果工廠關閉，數千個工作會岌岌可危。","be at stake = be at risk。"],
 ["With the championship at stake, both teams played hard.","冠軍得失就看這一戰，兩隊都拚盡全力。","with + 受詞 + 補語（at stake）：附帶狀況。"],
 ["What is at stake here is the safety of our children.","這件事攸關的是我們孩子的安全。","What ... is ... 強調句型：What is at stake 當主詞。"]],
 "","","🎲|攸關"],
["be prone to","phr.","容易……的（多指不好的事）",[
 ["Taiwan is prone to earthquakes.","台灣容易發生地震。","be prone to + 名詞：to 是介系詞。"],
 ["Tired drivers are more prone to make mistakes.","疲累的駕駛人比較容易犯錯。","be prone to 也可以接原形動詞（這時 to 是不定詞）。"],
 ["People who stay up late may be more prone to illness.","熬夜的人可能比較容易生病。","同義改寫 be likely to、be liable to、be vulnerable to。"]],
 "","","🤧|容易"],
["account for","phr.","說明；占（比例）",[
 ["How do you account for the sudden drop in sales?","你怎麼解釋銷量突然下滑？","account for = explain 說明原因。"],
 ["Students account for 40% of the library's visitors.","學生占圖書館訪客的四成。","account for + 比例 = make up 占……。"],
 ["His illness accounts for his absence from school.","他生病是他缺課的原因。","主詞是原因，受詞是被解釋的現象。"]],
 "","","📝|說明"],
["as opposed to","phr.","而不是；與……相對",[
 ["I prefer working in the morning, as opposed to late at night.","我比較喜歡早上工作，而不是深夜。","as opposed to = rather than、instead of，前後要平行：in the morning / late at night。"],
 ["The book focuses on solutions as opposed to problems.","這本書著重在解決方法，而不是問題。","as opposed to 後面接名詞或 V-ing。"],
 ["Twenty students passed this year, as opposed to only five last year.","今年有二十位學生通過，相較之下去年只有五位。","as opposed to 也可以表示數字的對比，= compared with。"]],
 "","","↔️|相對"],
["on the grounds that","phr.","以……為理由；因為",[
 ["He refused to sign the contract on the grounds that it was unfair.","他以合約不公平為由拒絕簽字。","on the grounds that + 子句；on the grounds of + 名詞。"],
 ["The plan was rejected on the grounds that it would cost too much.","這個計畫因花費太高而被否決。","grounds 理由（複數）；= because。"],
 ["She was excused from PE class on the grounds of illness.","她因病獲准不上體育課。","be excused from 被准許免除。"]],
 "","","🧾|理由"],
/* ---------- 字根 equ：相等 ---------- */
["equation","n.","方程式；等式；同等看待",[
 ["Can you solve this equation for x?","你能解出這個方程式的 x 嗎？","solve an equation 解方程式；equation 是數學課本常見字。"],
 ["E = mc² is probably the most famous equation in the world.","E = mc² 可能是世界上最有名的方程式。","the most + 形容詞 + 名詞 + in the world：最高級。"],
 ["The equation of wealth with happiness is a common mistake.","把財富等同於快樂是常見的錯誤。","名詞化：equate wealth with happiness → the equation of wealth with happiness。"]],
 "equ=相等|-ation=名詞字尾","讓兩邊相等的式子 → 方程式","🧮|方程式"],
["equitable","adj.","公平的；公正的",[
 ["We need a more equitable distribution of resources.","我們需要更公平的資源分配。","equitable = fair，常用在資源、制度：an equitable system。"],
 ["The teacher tried to find an equitable solution for both sides.","老師試著為雙方找出公平的解決辦法。","for both sides 對雙方；try to V。"],
 ["Education should be equitable, regardless of family background.","不論家庭背景，教育都應該是公平的。","regardless of + 名詞：不論……（高二學過）。"]],
 "equ=相等|-itable=形容詞字尾","讓大家相等的 → 公平的","⚖️|公平"],
["equator","n.","赤道",[
 ["Singapore lies near the equator, so it is hot all year round.","新加坡靠近赤道，所以一整年都很熱。","the equator 前面要加 the；all year round 一整年。"],
 ["Countries on the equator have almost equal days and nights.","位於赤道上的國家晝夜長度幾乎相等。","equator 和 equal 同字根：把地球分成相等兩半的線。"],
 ["The closer you get to the equator, the warmer it becomes.","越靠近赤道就越溫暖。","the + 比較級 ..., the + 比較級 ...：越……就越……。"]],
 "equ=相等|-ator=名詞字尾（東西）","把地球分成相等兩半的線 → 赤道","@s3v5_equator"],
["equilibrium","n.","平衡；均衡",[
 ["Yoga helps me keep my mental equilibrium.","瑜伽幫助我保持心理上的平衡。","equilibrium = balance，比 balance 更正式、學術。"],
 ["The ecosystem will lose its equilibrium if one species disappears.","如果有一個物種消失，生態系就會失去平衡。","if + 現在式，主要子句用 will。"],
 ["Supply and demand eventually reach equilibrium.","供給和需求最終會達到平衡。","reach equilibrium 達到平衡；經濟學常用語。"]],
 "equi-=相等|libr=天秤|-ium=名詞字尾","天秤兩邊相等 → 平衡","☯️|平衡"],
["adequate","adj.","足夠的；適當的",[
 ["Make sure you get adequate sleep before the exam.","考試前要確定你有足夠的睡眠。","adequate = enough、sufficient，閱讀題常同義改寫。"],
 ["The salary is barely adequate to support a family.","這份薪水勉強夠養一個家。","barely 幾乎不、勉強；adequate to V / for + 名詞。"],
 ["Without adequate preparation, you can hardly expect good results.","沒有充分準備，就很難期待好結果。","hardly 是否定副詞：幾乎不；反義字 inadequate 不足的。"]],
 "ad-=朝向|equ=相等|-ate=形容詞字尾","達到和需求相等 → 足夠的","🆗|足夠"],
["equate","v.","把……等同起來",[
 ["Many people equate success with money.","許多人把成功和金錢畫上等號。","equate A with B：把 A 等同於 B。"],
 ["Being busy should not be equated with being productive.","忙碌不應該被等同於有效率。","被動：A be equated with B；with 是介系詞，接 V-ing（being）。"],
 ["Don't equate silence with agreement.","不要把沉默當成同意。","祈使句；名詞 equation 也有「等同看待」的意思。"]],
 "equ=相等|-ate=動詞字尾","使兩者相等 → 等同","🟰|等同"],
/* ---------- 字根 hydr：水 ---------- */
["hydrant","n.","消防栓",[
 ["Never park in front of a fire hydrant.","絕對不要把車停在消防栓前面。","fire hydrant 消防栓；祈使句 Never + 原形動詞。"],
 ["The firefighters connected their hose to the hydrant.","消防員把水管接到消防栓上。","connect A to B 把 A 接到 B。"],
 ["Children were playing in the water spraying from a broken hydrant.","孩子們在壞掉的消防栓噴出來的水裡玩耍。","spraying from ... 是現在分詞片語修飾 the water。"]],
 "hydr=水|-ant=名詞字尾（東西）","放出水的東西 → 消防栓","@s3v5_hydrant"],
["hydrate","v.","補充水分；使含水",[
 ["Remember to hydrate during long runs.","長跑時記得補充水分。","hydrate 不及物時表示「（自己）補水」。"],
 ["This cream hydrates dry skin.","這款乳霜能滋潤乾燥的肌膚。","hydrate 及物：使……保濕。"],
 ["Staying well hydrated helps you concentrate.","保持充足水分有助於專注。","stay + 形容詞（hydrated）；動名詞片語當主詞用單數動詞 helps。反義：dehydration 脫水。"]],
 "hydr=水|-ate=動詞字尾","給它水 → 補充水分","💧|補水"],
["hydroelectric","adj.","水力發電的",[
 ["The dam provides hydroelectric power to the whole region.","這座水壩為整個地區提供水力發電。","hydroelectric power 水力發電 = hydropower。"],
 ["Hydroelectric plants produce less pollution than coal plants.","水力發電廠比燃煤電廠產生的汙染少。","less + 不可數名詞 + than：比較級。"],
 ["Building a hydroelectric dam may harm the habitats of fish.","興建水力發電水壩可能危害魚類的棲息地。","動名詞 Building ... 當主詞，助動詞 may 後接原形。"]],
 "hydro-=水|electric=電的","用水來發電的 → 水力發電的","⚡|水力發電"],
["carbohydrate","n.","碳水化合物；醣類",[
 ["Rice and bread are rich in carbohydrates.","米飯和麵包富含碳水化合物。","be rich in 富含；營養相關的閱讀題常見。"],
 ["Athletes need carbohydrates for energy.","運動員需要碳水化合物來提供能量。","常用複數 carbohydrates，口語簡稱 carbs。"],
 ["Cutting down on carbohydrates is not always good for your health.","減少攝取碳水化合物並不總是對健康有益。","cut down on 減少；not always 部分否定。"]],
 "carbo-=碳|hydr=水|-ate=名詞字尾（化合物）","碳和水的化合物 → 碳水化合物","🍞|醣類"],
["hydraulic","adj.","液壓的；水力的",[
 ["The car was lifted by a hydraulic jack.","這輛車被液壓千斤頂頂了起來。","hydraulic jack 液壓千斤頂；被動 was lifted by。"],
 ["Hydraulic systems are used in many heavy machines.","液壓系統用在許多重型機械上。","be used in + 名詞：被用在……。"],
 ["The bridge has a hydraulic mechanism that raises it for ships.","這座橋有液壓裝置，可以升起讓船通過。","that 引導形容詞子句修飾 mechanism。"]],
 "hydr=水|aul=管子|-ic=形容詞字尾","水在管子裡推動 → 液壓的","🏗️|液壓"],
/* ---------- 字根 luc / lum：光 ---------- */
["lucid","adj.","清晰易懂的；神智清醒的",[
 ["Her explanation was so lucid that everyone understood it at once.","她的說明非常清楚，大家馬上就懂了。","lucid = clear；so ... that 如此……以致於。"],
 ["A good writer expresses complex ideas in lucid language.","好的作家用清晰的文字表達複雜的想法。","in + 語言 / 文字：用……表達。"],
 ["Despite his illness, he remained lucid until the end.","儘管生病，他直到最後都保持神智清醒。","remain + 形容詞；despite + 名詞。"]],
 "luc=光|-id=形容詞字尾","有光照亮、看得清楚 → 清晰的","🔆|清晰"],
["illuminate","v.","照亮；闡明",[
 ["The streets were illuminated by thousands of lanterns.","街道被成千上萬的燈籠照亮。","被動 were illuminated by；元宵節場景。"],
 ["This example illuminates the difference between the two words.","這個例子清楚說明了這兩個字的差別。","illuminate 也可以表示「闡明」= clarify。"],
 ["A single candle illuminated the dark room.","一根蠟燭照亮了漆黑的房間。","名詞 illumination 照明。"]],
 "il-=在上|lumin=光|-ate=動詞字尾","把光照在上面 → 照亮","@s3v5_illuminate"],
["luminous","adj.","發光的；明亮的",[
 ["The watch has luminous hands, so you can see the time in the dark.","這支錶的指針會發光，所以在黑暗中也看得到時間。","luminous 自己發光的；so 連接結果。"],
 ["Luminous jellyfish lit up the dark sea.","發光的水母點亮了漆黑的大海。","light up 的過去式 lit up。"],
 ["Her luminous smile made everyone feel welcome.","她燦爛的笑容讓每個人都覺得受到歡迎。","make + 受詞 + 原形動詞 feel：使役動詞。"]],
 "lumin=光|-ous=形容詞字尾","充滿光的 → 發光的","✨|發光"],
["translucent","adj.","半透明的",[
 ["The lamp is covered with translucent paper.","這盞燈覆蓋著半透明的紙。","be covered with 覆蓋著。"],
 ["Light passes through translucent glass, but you can't see clearly through it.","光能透過半透明玻璃，但你無法透過它看清楚。","對照：transparent 透明的；translucent 半透明的；opaque 不透明的。"],
 ["The jellyfish has a translucent body.","水母有半透明的身體。","translucent 放在名詞前修飾。"]],
 "trans-=穿過|luc=光|-ent=形容詞字尾","光能穿過的 → 半透明的","🏮|半透明"],
["elucidate","v.","闡明；解釋清楚（正式）",[
 ["The professor elucidated the theory with simple examples.","教授用簡單的例子闡明了這個理論。","elucidate = clarify、explain，用在正式或學術場合。"],
 ["Could you elucidate what you mean by that term?","你能說明那個術語是什麼意思嗎？","elucidate + wh- 名詞子句；Could you ... 禮貌請求。"],
 ["The report attempts to elucidate the causes of the accident.","這份報告試圖釐清事故的原因。","attempt to V 試圖做……。"]],
 "e-=向外|lucid=清楚的|-ate=動詞字尾","把清楚的光照出來 → 闡明","📖|闡明"],
/* ---------- 字根 loc：地方 ---------- */
["relocate","v.","搬遷；遷移",[
 ["The company relocated its headquarters to Taichung.","公司把總部遷到台中。","relocate A to B：把 A 遷到 B；也可以不及物：relocate to Taichung。"],
 ["Many residents were relocated after the flood.","水災後許多居民被安置到別處。","被動 be relocated 被遷移、被安置。"],
 ["If the factory relocates abroad, hundreds of workers will lose their jobs.","如果工廠遷到國外，數百名工人將失業。","abroad 是副詞，前面不加 to。"]],
 "re-=再|loc=地方|-ate=動詞字尾","再換一個地方 → 搬遷","📦|搬遷"],
["locomotive","n.","火車頭；機車頭",[
 ["The old steam locomotive is now displayed in the museum.","那輛老蒸汽火車頭現在陳列在博物館裡。","be displayed 被展示；steam locomotive 蒸汽火車頭。"],
 ["The locomotive pulled twenty carriages up the mountain.","火車頭拉著二十節車廂上山。","carriage 車廂。"],
 ["Exports have been the locomotive of the country's economy.","出口一直是這個國家經濟的火車頭。","比喻用法：the locomotive of ... 推動……的主力。"]],
 "loco=地方|mot=移動|-ive=名詞字尾","從一個地方移動到另一個地方 → 火車頭","@s3v5_locomotive"],
["dislocate","v.","使脫臼；使錯亂",[
 ["He dislocated his shoulder while playing basketball.","他打籃球時肩膀脫臼了。","while + V-ing：主詞相同時省略 he was。"],
 ["The war dislocated the lives of millions of people.","戰爭打亂了數百萬人的生活。","dislocate 引申為「打亂、使混亂」。"],
 ["A dislocated finger should be treated by a doctor.","脫臼的手指應該由醫生處理。","dislocated 過去分詞當形容詞；should be treated 被動。"]],
 "dis-=離開|loc=地方|-ate=動詞字尾","離開原來的地方 → 脫臼","🦴|脫臼"],
["locality","n.","地區；所在地",[
 ["Each locality has its own traditional food.","每個地區都有自己的傳統食物。","Each + 單數名詞 + 單數動詞 has。"],
 ["The festival brings visitors to the locality every summer.","這個節慶每年夏天都為當地帶來遊客。","the locality 當地 = the local area。"],
 ["Prices vary from locality to locality.","價格因地區而異。","vary from A to A：因……而不同。"]],
 "loc=地方|-al=形容詞字尾|-ity=名詞字尾","當地的狀態 → 地區","📍|地區"]
];

/* ---------- 記憶小撇步（沒有字根可拆的字、片語） ---------- */
Object.assign(MEMO, {
  "examine":"examine 檢查：和 exam（考試）同一個字，考試就是「檢查」你會不會！名詞 examination。",
  "distinguish":"distinguish 區分：dis 分開 + tinguish 刺、標記：在東西上做記號把它們分開。distinguish A from B。",
  "deem":"deem 認為：deem it + 形容詞 / 名詞（+ to V）。聯想 dream（夢想）少了 r：你「認為」它是夢想。",
  "scrutiny":"scrutiny 審查：scr 像 screen（篩選）。under scrutiny 受到審查；動詞 scrutinize。",
  "in light of":"在……的光之下看事情 → 有了這個資訊之後重新考慮 → 鑑於。後面接名詞。",
  "be inclined to":"in- 朝向 + clin 傾斜：身體往那邊傾斜 → 傾向於。to 後面接原形動詞。",
  "give rise to":"rise 是上升、出現：給某件事一個出現的機會 → 引起。to 是介系詞，接名詞。",
  "in the wake of":"wake 是船開過留下的水痕：跟在船尾的浪花裡 → 在（壞事）之後。",
  "on the verge of":"verge 是邊緣：站在邊緣上 → 就快要……了。of 後面接名詞或 V-ing。",
  "in accordance with":"accord 一致：和規定保持一致 → 依照。= according to，但更正式。",
  "with regard to":"regard 看待、注意：注意到這一點 → 關於。小心不是 regards（問候）。",
  "by virtue of":"virtue 美德、優點：憑著自己的優點 → 憑藉、由於。",
  "take into account":"account 帳目：把它算進帳裡 → 列入考慮。= take into consideration。",
  "at stake":"stake 是賭注：東西放在賭桌上 → 有輸掉的危險 → 攸關得失。",
  "be prone to":"prone 本意是「趴下、向前傾」：人往壞事那邊倒 → 容易……。多用在不好的事。",
  "account for":"account 說明、帳目：替結果交代帳目 → 說明原因；也可以表示占多少比例。",
  "as opposed to":"oppose 反對、相對：和……放在相對的位置 → 而不是。前後要平行。",
  "on the grounds that":"ground 地面、根據：站在這個根據上 → 以……為理由。grounds 要加 s。"
});

const S3_V5_GRAMMAR = [
{ id:"g1", title:"學術動詞：調查、推論、歸因、區分的用法與搭配",
  intro:"學測和分科測驗的閱讀文章多半來自科普、社會研究和評論，裡面最常出現的就是「學術動詞」：研究調查了什麼、推斷出什麼、把結果歸因於什麼、怎麼區分兩件事。高三上已經學過 analyze、assess、imply、infer、verify，這一課學另一批，重點放在它們的搭配句型：接 that 子句、接 A to B、A from B、能不能加 of。",
  table:[["動詞","常用句型","例句"],["investigate / examine","+ 名詞 / wh- 子句","investigate how social media affects sleep"],["deduce / speculate","deduce A from B（有根據）；speculate about / on / that（猜測）","deduce the answer from the clues；speculate about the cause"],["presume","presume that ...；be presumed + 形容詞 / to V","He is presumed innocent."],["attribute","attribute A to B；A be attributed to B","attribute success to hard work"],["distinguish","distinguish A from B；distinguish between A and B","distinguish fact from opinion"],["derive","derive A from B；be derived from","derive pleasure from reading"],["constitute / comprise","部分 constitute 整體；整體 comprise 部分 / be comprised of","Women constitute 60% of the staff. / The team comprises 12 players."],["facilitate / enhance","facilitate + 過程；enhance + 品質","facilitate learning；enhance quality"],["clarify / exemplify","clarify + wh- 子句；exemplify A with B","clarify what you mean；exemplify a point with stories"],["formulate / quantify / generalize","formulate a plan；quantify the cost；generalize about / from","Don't generalize from one experience."]],
  points:[
   "deduce 是根據證據、邏輯「推斷出」；speculate 是證據不足的「猜測」；presume 是「先假定為真」。閱讀題問作者態度時，這三個字的確定程度不同。",
   "comprise 主動時不加 of：The house comprises five rooms.；被動才是 be comprised of。consist of 則一定要有 of。",
   "A to B、A from B 這類句型的介系詞不能換：attribute A to B（歸因）、distinguish A from B（區分）、derive A from B（得到）、deduce A from B（推斷）。",
   "facilitate 的受詞是「事情、過程」，不能說 facilitate students to learn，要說 facilitate learning 或 help students (to) learn。",
   "enhance 指「品質、價值、能力」變得更好；數量增加要用 increase：enhance the quality（○）、enhance the number（×）。",
   "學測陷阱：attribute A to B 的 to 是介系詞，後面接名詞或 V-ing：His success is attributed to working hard.（不是 to work hard）"],
  ex:[
   ["Researchers investigated how much time teenagers spend online.","研究人員調查了青少年花多少時間上網。","investigate + how much 名詞子句，用直述句語序。"],
   ["From the evidence, the detective deduced that the thief knew the family.","偵探根據證據推斷出小偷認識這家人。","deduce that ...；有根據的推斷。"],
   ["Scientists attribute the decline in bee populations to pesticides.","科學家把蜜蜂數量下降歸因於殺蟲劑。","attribute A to B。"],
   ["The committee comprises teachers, parents, and students.","委員會由老師、家長和學生組成。","comprise 不加 of。"],
   ["A good reader can distinguish facts from opinions.","好的讀者能區分事實和意見。","distinguish A from B。"]]},
{ id:"g2", title:"抽象名詞與名詞化：把動詞、形容詞變成名詞，句子更精簡",
  intro:"高三寫作和閱讀的長句，常把「一整個子句」濃縮成一個名詞片語，這叫做名詞化（nominalization）。例如 He was reluctant to help 變成 his reluctance to help。看懂名詞化，長句就拆得開；會用名詞化，翻譯和作文就更像學術英文。",
  table:[["原本的寫法","名詞化","重點"],["He was reluctant to help.","his reluctance to help","形容詞 → 名詞；主詞變所有格；to V 保留"],["She hesitated to answer.","her hesitation in answering","動詞 → 名詞；後面改用介系詞 + V-ing"],["We rely heavily on oil.","our heavy reliance on oil","副詞 heavily → 形容詞 heavy；介系詞 on 保留"],["Obesity is prevalent among kids.","the prevalence of obesity among kids","主詞變成 of + 名詞"],["Water is scarce.","the scarcity of water","scarce → scarcity（-ity）"],["The forecast is accurate.","the accuracy of the forecast","accurate → accuracy（-acy）"],["AI emerged.","the emergence of AI","emerge → emergence（-ence）"],["He was indifferent to politics.","his indifference to politics","indifferent → indifference；介系詞 to 保留"],["The problem is complex.","the complexity of the problem","complex → complexity"],["with + 抽象名詞","with reluctance = reluctantly","= 副詞"],["of + 抽象名詞","of great significance = very significant","= 形容詞"]],
  points:[
   "名詞化三步驟：①動詞或形容詞改成名詞；②原本的主詞改成所有格（his）或 of + 名詞；③副詞改成形容詞（heavily → heavy）。",
   "原本搭配的介系詞或不定詞通常保留：rely on → reliance on；be reluctant to V → reluctance to V；但 hesitate to V 常改成 hesitation in + V-ing。",
   "名詞化的主詞看中心名詞決定單複數：The prevalence of smartphones has changed ...（看 prevalence，用 has）。",
   "with + 抽象名詞 = 副詞（with ease = easily、with great accuracy = very accurately）；of + 抽象名詞 = 形容詞（of importance = important）。",
   "容易拼錯或混淆：emergence（出現）≠ emergency（緊急情況）；endurance 是耐力（endure 忍受），indifference 是冷漠（indifferent 漠不關心的）；abundance 的形容詞是 abundant。",
   "學測閱讀長句：看到 the + 名詞 + of ...，試著把它還原成一個子句，例如 the rapid growth of cities = cities grow rapidly，就容易看懂了。"],
  ex:[
   ["His reluctance to apologize made the situation worse.","他不願道歉讓情況更糟。","= He was reluctant to apologize, which made the situation worse."],
   ["Our heavy reliance on smartphones has changed how we read.","我們對手機的嚴重依賴改變了我們閱讀的方式。","主詞中心是 reliance（單數），動詞用 has。"],
   ["The scarcity of rain led to a serious water shortage.","雨量稀少導致嚴重的缺水。","= Because rain was scarce, there was a serious water shortage."],
   ["The emergence of online learning has given students more choices.","線上學習的興起給了學生更多選擇。","= Online learning has emerged, so ..."],
   ["She solved the puzzle with surprising ease.","她出乎意料輕鬆地解開了謎題。","with ease = easily；形容詞 surprising 修飾名詞 ease。"]]},
{ id:"g3", title:"同義改寫（paraphrase）：換字、換句型，意思不變",
  intro:"學測閱讀題的正確選項，幾乎都不會照抄原文，而是「換個說法」：換同義字、主動改被動、子句改片語。相反地，照抄原文字詞的選項常常是陷阱。學會辨認同義改寫，閱讀答題又快又準；寫作也能避免一直重複同一個字。",
  table:[["改寫方法","原句","改寫後"],["換同義字","Sleep is indispensable.","Sleep is essential / vital / of great importance."],["換同義字","The pain diminished.","The pain decreased / lessened."],["換同義字","based solely on scores","based only / entirely on scores"],["換同義字","predominantly young","mainly / mostly young"],["換片語","hinder him from going","prevent / keep him from going"],["換片語","compensate for the loss","make up for the loss"],["子句 ↔ 片語","because it rained heavily","because of / due to the heavy rain"],["子句 ↔ 片語","Although he was ill, ...","Despite his illness, ..."],["句型轉換","so ambiguous that no one understood it","too ambiguous for anyone to understand"],["主動 ↔ 被動","Experts consider the plan feasible.","The plan is considered feasible."]],
  points:[
   "改寫的第一原則是「意思和程度都不變」：some 不能改成 all，often 不能改成always，may 不能改成 must。學測錯誤選項最常在程度上動手腳。",
   "部分否定要小心：not always（不總是）、not necessarily（不一定）、not all（並非全部），改寫時不能變成全部否定。",
   "because / although 後面接子句；because of / due to / despite / in spite of 後面接名詞。改寫時要把子句名詞化：Although it rained → Despite the rain。",
   "so ... that ... can't 可以改寫成 too ... to V；so ... that ... can 可以改寫成 ... enough to V。",
   "同義字不一定能直接替換：搭配詞不同就不行，例如 pivotal to、indispensable to、vital to 可以互換，但 make up for 的 for 不能丟。",
   "閱讀題策略：先找到原文對應句，再比對選項是否「同義改寫」；選項和原文字一樣、意思卻相反或程度改變的，是陷阱。"],
  ex:[
   ["Original: Teachers play a pivotal role in education. → Teachers play a key role in education.","老師在教育中扮演關鍵角色。","pivotal = key = crucial；其他字不動，意思就不變。"],
   ["Original: The new rule hindered students from using phones. → The new rule prevented students from using phones.","新規定阻止學生使用手機。","hinder ... from = prevent ... from。"],
   ["Original: Although the plan was feasible, it was rejected. → Despite its feasibility, the plan was rejected.","雖然計畫可行，還是被否決了。","although + 子句 → despite + 名詞（名詞化 feasibility）。"],
   ["Original: Nothing can compensate for lost time. → Nothing can make up for lost time.","沒有什麼能彌補失去的時間。","compensate for = make up for。"],
   ["Original: The instructions were so ambiguous that we couldn't follow them. → The instructions were too ambiguous for us to follow.","說明太含糊了，我們無法照著做。","so ... that ... can't → too ... for 人 to V；改寫後句尾不再加 them。"]]},
{ id:"g4", title:"高階片語與慣用語：in light of、give rise to、in the wake of……",
  intro:"Level 5～6 的閱讀文章常用正式的片語代替簡單的 because、after、about、cause。認得這些片語，長句就不會卡住；也要分清楚片語後面接名詞、V-ing、原形動詞，還是子句。",
  table:[["片語","意思","後面接 / 同義改寫"],["in light of","鑑於","名詞；= considering"],["be inclined to","傾向於","原形動詞（不定詞 to）"],["give rise to","引起","名詞（介系詞 to）；= cause、lead to"],["in the wake of","在（壞事）之後","名詞；= after、as a result of"],["on the verge of","瀕臨","名詞 / V-ing；= about to V"],["in accordance with","依照","名詞；= according to"],["with regard to","關於","名詞；= regarding、concerning"],["by virtue of","憑藉","名詞 / V-ing；= because of"],["take ... into account","考慮","受詞放中間，長受詞放後面"],["at stake","攸關得失","be at stake；= at risk"],["be prone to","容易（不好的事）","名詞 / 原形動詞"],["account for","說明；占","名詞；= explain、make up"],["as opposed to","而不是","名詞 / V-ing；= rather than"],["on the grounds that","以……為理由","子句；on the grounds of + 名詞"]],
  points:[
   "介系詞 to 後面接名詞或 V-ing：give rise to、as opposed to；不定詞 to 接原形：be inclined to agree。be prone to 兩種都可以。",
   "on the grounds that + 子句，on the grounds of + 名詞；就像 because + 子句、because of + 名詞。",
   "with regard to 的 regard 不加 s；with regards 是書信結尾的「問候」。",
   "take ... into account：受詞短放中間（take it into account），受詞長放後面（take into account the needs of all students）。",
   "account for 兩個意思要靠上下文：後面是原因或現象 → 說明；後面是百分比 → 占。",
   "高二學過的 at the expense of（以……為代價）、in terms of（就……而言）常和本課片語一起出現在選項，要看文意判斷。"],
  ex:[
   ["In light of the heavy rain, the game was put off.","鑑於大雨，比賽延期了。","in light of + 名詞 = because of。"],
   ["The new tax gave rise to widespread protests.","新稅引起了大規模的抗議。","give rise to + 名詞 = cause。"],
   ["In the wake of the typhoon, many farmers lost their crops.","颱風過後，許多農民失去了作物。","in the wake of + 壞事。"],
   ["Young people account for 30% of the city's population.","年輕人占這座城市人口的三成。","account for + 比例 = make up。"],
   ["He quit the team on the grounds that the training was too hard.","他以訓練太辛苦為由退出球隊。","on the grounds that + 子句。"]]}
];

const S3_V5_QUIZ = [
 ["Can you ___ the twins from each other?",["attribute","distinguish","derive","constitute"],1,"distinguish A from B：區分 A 和 B；from each other 彼此。","g1"],
 ["From the footprints, the detective ___ that the thief was a tall man.",["deduced","attributed","comprised","facilitated"],0,"根據證據推斷出結論：deduce that + 子句。","g1"],
 ["The United States ___ fifty states.",["comprises of","is comprising","comprises","is comprised"],2,"comprise 主動不加 of；它是狀態動詞，不用進行式。被動要說 is comprised of。","g1"],
 ["Many people attribute their good health ___ a balanced diet.",["for","with","from","to"],3,"attribute A to B：把 A 歸因於 B。","g1"],
 ["The police are ___ how the fire started.",["investigating","attributing","comprising","enhancing"],0,"調查火災怎麼發生：investigate + how 子句。","g1"],
 ["The new software is designed to ___ communication between teachers and parents.",["enhance to","facilitate","constitute","derive"],1,"facilitate + 過程（communication）：促進溝通。","g1"],
 ["It is unfair to ___ about people from one country based on one experience.",["generalize","quantify","formulate","derive"],0,"generalize about 一概而論；quantify 量化、formulate 制定，意思不通。","g1"],
 ["Many English words are ___ from Latin and Greek.",["deduced","presumed","derived","distinguished"],2,"be derived from 源自……。","g1"],
 ["Students ___ more than half of the museum's visitors.",["comprise of","constitute","attribute","facilitate"],1,"部分 constitute 整體：學生構成訪客的一半以上；comprise 不加 of。","g1"],
 ["His ___ to accept help made his recovery slower.",["reluctant","reluctantly","reluctance","reluct"],2,"所有格 His 後面要接名詞：reluctance to V（不情願做……）。","g2"],
 ["Our heavy ___ on fossil fuels must be reduced.",["relies","reliable","reliance","rely"],2,"heavy 是形容詞，修飾名詞 reliance；reliance on 對……的依賴。","g2"],
 ["The ___ of smartphones among teenagers ___ raised concerns.",["prevalent / have","prevalence / has","prevalence / have","prevalently / has"],1,"the 後面接名詞 prevalence；中心名詞是單數，所以用 has。","g2"],
 ["The ___ of AI has created many new jobs.",["emergency","emerging","emerge","emergence"],3,"AI 的「興起」是 emergence；emergency 是緊急情況。","g2"],
 ["She answered all the questions ___, so she got full marks.",["with great accuracy","in great accurate","of great accuracy","with great accurate"],0,"with + 抽象名詞 = 副詞：with great accuracy = very accurately。","g2"],
 ["The discovery is ___ great significance to modern medicine.",["with","of","in","for"],1,"of + 抽象名詞 = 形容詞：of great significance = very significant。","g2"],
 ["Because water was scarce, prices rose. → Because of the ___ of water, prices rose.",["scarce","scarcely","scarceness of","scarcity"],3,"because of + 名詞片語：scarce 名詞化為 scarcity。","g2"],
 ["His ___ to other people's feelings made him unpopular.",["indifferent","indifference","indifferently","differ"],1,"所有格 His 後面接名詞：indifference to（對……冷漠）；介系詞 to 保留。","g2"],
 ["Without ___, he jumped into the water to save the boy.",["hesitate","hesitated","hesitation","hesitant"],2,"without + 名詞 / V-ing：without hesitation 毅然地、毫不猶豫地。","g2"],
 ["Original: \"Sleep is indispensable for teenagers.\" Which is the best paraphrase?",["Sleep is harmful to teenagers.","Sleep is optional for teenagers.","Sleep is essential for teenagers.","Teenagers sleep too much."],2,"indispensable = essential、vital：同義改寫，意思和程度都不變；optional（可有可無）意思相反。","g3"],
 ["Original: \"The prize is given solely to first-year students.\" = The prize is given ___ to first-year students.",["mostly","only","also","often"],1,"solely = only；mostly、often 都改變了程度。","g3"],
 ["Original: \"The noise hindered me from sleeping.\" = The noise ___ me from sleeping.",["prevented","allowed","encouraged","helped"],0,"hinder ... from = prevent ... from。","g3"],
 ["Original: \"Although he was injured, he finished the race.\" = ___ his injury, he finished the race.",["Because of","Despite","Although","Thanks to"],1,"although + 子句 → despite + 名詞；Although 後面不能只接名詞。","g3"],
 ["Original: \"The town's population is predominantly elderly.\" = Most people in the town are ___.",["young","children","foreigners","old"],3,"predominantly = mainly、mostly；elderly = old。","g3"],
 ["Original: \"Not all students like the new rule.\" Which is correct?",["No students like the rule.","Some students do not like the rule.","All students dislike the rule.","Every student likes the rule."],1,"not all 是部分否定：並非全部 = 有些不喜歡。改寫不能變成全部否定。","g3"],
 ["Original: \"The text was so ambiguous that we couldn't understand it.\" = The text was ___ for us to understand.",["too ambiguous","so ambiguous","ambiguous enough","very ambiguous"],0,"so ... that ... couldn't → too ... to V。","g3"],
 ["The pain gradually ___ after she took the medicine. (= became less)",["deteriorated","eliminated","diminished","compensated"],2,"diminish = decrease、lessen；deteriorate 是惡化，意思相反。","g3"],
 ["Nothing can ___ for the time we lost. (= make up)",["alleviate","hinder","eliminate","compensate"],3,"compensate for = make up for 彌補。","g3"],
 ["___ the new evidence, the judge decided to reopen the case.",["In light of","On the verge of","As opposed to","At stake"],0,"in light of 鑑於：因為有新證據，所以重新審理。","g4"],
 ["Many animals are on the verge ___ extinction.",["to","of","for","at"],1,"on the verge of + 名詞：瀕臨……。","g4"],
 ["Pollution in the river has given rise ___ many health problems.",["for","with","of","to"],3,"give rise to + 名詞：引起；to 是介系詞。","g4"],
 ["After hearing both sides, I'm inclined ___ with Amy.",["agree","agreeing","to agree","to agreeing"],2,"be inclined to + 原形動詞：傾向於……。","g4"],
 ["Students ___ 40% of the library's users.",["account for","give rise to","take into account","are prone to"],0,"account for + 比例：占……。","g4"],
 ["He was fired ___ he had broken the company's rules.",["on the grounds of","on the grounds that","in light of","with regard to"],1,"後面是完整子句（he had broken ...），要用 on the grounds that；on the grounds of 後接名詞。","g4"],
 ["___ the earthquake, the government spent millions rebuilding schools.",["As opposed to","With regard to","In the wake of","By virtue of"],2,"in the wake of 在（災難）之後：地震過後重建學校。","g4"],
 ["When choosing a university, you should take your interests ___.",["into account","at stake","on the verge","in accordance"],0,"take ... into account 把……列入考慮。","g4"],
 ["Taiwan is prone ___ typhoons in summer.",["of","with","for","to"],3,"be prone to + 名詞：容易遭受……（不好的事）。","g4"],
 ["The game is important because the championship is ___.",["in light","at stake","on the grounds","by virtue"],1,"be at stake 攸關得失：冠軍就看這一場。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S3_V5_CLASS = {
g1:[
 {say:"高三同學好！最後一個單字單元，我們來練學測閱讀最常見的「學術動詞」。高三上學過 analyze、assess、imply、infer，今天學另一批。先看兩個「做研究」的動詞：{investigate} 調查、{examine} 檢查、探討。", board:[["Researchers investigated how social media affects sleep.",["investigated"]],["This article examines the effects of climate change.",["examines"]]]},
 {say:"investigate 後面可以接 how、why 這類名詞子句，記得用直述句語序：how social media affects sleep，不是 how does social media affect。", board:[["investigate how social media affects sleep",["how social media affects"]],["investigate how does social media affect sleep",[],true]]},
 {say:"再來是三個「推」的動詞，確定程度不一樣：{deduce} 是根據證據推斷，最有把握；{presume} 是先假定為真；{speculate} 是證據不夠時的猜測。", board:[["deduce 有根據的推斷",["deduce"]],["presume 先假定",["presume"]],["speculate 猜測",["speculate"]]]},
 {say:"口訣唸三遍！", chant:"deduce 有證據，presume 先假定，speculate 用猜的！"},
 {ask:{say:"考考你！", q:"From the footprints, the detective ___ that the thief was tall.", opts:["speculated","deduced"], ans:1,
   ok:"答對！根據腳印這個證據推斷出結論：deduce。", bad:{0:"speculate 是證據不足的猜測；這裡有腳印當證據，用 deduce。"},
   again:{q:"A person is ___ innocent until proven guilty.", opts:["presumed","deduced"], ans:0, exp:"在被證明有罪前「先假定」無罪：be presumed innocent。"}}},
 {say:"第二組看句型：{attribute} A to B，把 A 歸因於 B；{distinguish} A from B，區分 A 和 B；{derive} A from B，從 B 得到 A。介系詞是固定的，不能亂換！", board:[["attribute success to hard work",["attribute","to"]],["distinguish fact from opinion",["distinguish","from"]],["derive pleasure from reading",["derive","from"]]]},
 {say:"再來是「組成」：{constitute} 是「部分構成整體」，{comprise} 是「整體包含部分」。超級陷阱：comprise 主動不加 of！被動才是 be comprised of。", board:[["Women constitute 60% of the staff.",["constitute"]],["The team comprises 12 players.",["comprises"]],["The team comprises of 12 players.",[],true]]},
 {ask:{q:"The committee ___ ten members.", opts:["comprises of","comprises","is comprising"], ans:1,
   ok:"太棒了！comprise 主動不加 of，而且是狀態動詞，不用進行式。", bad:{0:"comprise 主動不加 of！要加 of 就要改成 is comprised of 或 consists of。",2:"comprise 是狀態動詞，不用進行式。"},
   again:{q:"Many people attribute their success ___ luck.", opts:["to","from"], ans:0, exp:"attribute A to B：把 A 歸因於 B。"}}},
 {say:"第三組：{facilitate} 促進，後面接「過程」，像 facilitate learning；不能說 facilitate students to learn。{enhance} 提升，後面接「品質、能力」；如果是數量變多，要用 increase。", board:[["facilitate learning / communication",["facilitate"]],["enhance the quality / performance",["enhance"]],["facilitate students to learn",[],true]]},
 {ask:{q:"Reading widely can ___ your writing skills.", opts:["enhance","facilitate to","comprise"], ans:0,
   ok:"讚！寫作能力是「能力、品質」，用 enhance 提升。", bad:{1:"facilitate 後面直接接受詞，不加 to；而且它的受詞是過程，不是能力。",2:"comprise 是「包含」，意思不通。"},
   again:{q:"Group work can ___ discussion in class.", opts:["facilitate","attribute"], ans:0, exp:"促進討論這個「過程」：facilitate discussion。"}}},
 {say:"最後幾個寫報告常用的：{formulate} 制定計畫、{quantify} 量化、{generalize} 概括、一概而論。generalize about 人，常帶負面意思：不要以偏概全！", board:[["formulate a policy",["formulate"]],["quantify the cost",["quantify"]],["Don't generalize from one experience.",["generalize"]]]},
 {ask:{say:"最後一題！", q:"Can you ___ fact from opinion in this article?", opts:["attribute","distinguish","quantify"], ans:1,
   ok:"完美！distinguish A from B：區分事實和意見。", bad:{0:"attribute 要搭配 A to B，意思是歸因，不通。",2:"quantify 是量化，意思不通。"},
   again:{q:"It's hard to ___ happiness with numbers.", opts:["quantify","formulate"], ans:0, exp:"用數字表示：quantify 量化。"}}},
 {say:"學術動詞過關！複習口訣：deduce 有證據，presume 先假定，speculate 用猜的；attribute A to B、distinguish A from B；comprise 不加 of；facilitate 接過程，enhance 接品質！", end:true}
],
g2:[
 {say:"今天學一個讓英文瞬間變高級的技巧：名詞化。先看兩個句子，意思一樣，可是第二句更像學術文章。", board:[["He was reluctant to help, which surprised us.",["was reluctant"]],["His reluctance to help surprised us.",["His reluctance"]]]},
 {say:"名詞化三步驟：第一，形容詞或動詞變名詞，reluctant 變 {reluctance}；第二，主詞 He 變所有格 His；第三，後面的 to help 照樣保留。整個子句就縮成一個名詞片語，可以直接當主詞！", board:[["reluctant → reluctance",["reluctance"]],["He → His",["His"]]]},
 {say:"口訣記起來！", chant:"動詞形容詞變名詞，主詞變成所有格，副詞變成形容詞！"},
 {say:"第三步「副詞變形容詞」看這個例子：We rely heavily on oil，名詞化變成 our heavy reliance on oil。heavily 變 heavy，因為名詞要用形容詞修飾；介系詞 on 保留。", board:[["We rely heavily on oil.",["rely heavily on"]],["our heavy reliance on oil",["heavy reliance on"]]]},
 {ask:{say:"考考你！", q:"Our ___ reliance on phones is a problem.", opts:["heavily","heavy"], ans:1,
   ok:"答對！reliance 是名詞，要用形容詞 heavy 修飾。", bad:{0:"heavily 是副詞，只能修飾動詞；名詞 reliance 要用形容詞 heavy。"},
   again:{q:"His ___ to apologize made things worse.", opts:["reluctant","reluctance"], ans:1, exp:"所有格 His 後面要接名詞 reluctance。"}}},
 {say:"主詞是人以外的事物時，用 the + 名詞 + of：Water is scarce 變成 the {scarcity} of water；AI emerged 變成 the {emergence} of AI。注意 emergence 是出現，emergency 是緊急情況，不要搞混！", board:[["Water is scarce. → the scarcity of water",["scarcity"]],["AI emerged. → the emergence of AI",["emergence"]],["the emergency of AI",[],true]]},
 {ask:{q:"The ___ of online shopping has changed our lives.", opts:["emergency","emergence","emerge"], ans:1,
   ok:"讚！網購的「興起」是 emergence。", bad:{0:"emergency 是緊急情況，這裡是「興起、出現」，要用 emergence。",2:"the 後面要接名詞，emerge 是動詞。"},
   again:{q:"The ___ of smartphones ___ changed how we talk.", opts:["prevalence / has","prevalence / have"], ans:0, exp:"中心名詞 prevalence 是單數，動詞用 has。"}}},
 {say:"名詞化當主詞時，動詞看「中心名詞」：The prevalence of smartphones has ...，看 prevalence，用單數 has，不是看 smartphones！", board:[["The prevalence of smartphones has changed ...",["prevalence","has"]]]},
 {say:"兩個超好用的抽象名詞句型：with + 抽象名詞 = 副詞，with ease 就是 easily；of + 抽象名詞 = 形容詞，of great {significance} 就是 very significant。", board:[["with great accuracy = very accurately",["with"]],["of great significance = very significant",["of"]]]},
 {say:"這兩個也唸一下！", chant:"with 加名詞當副詞，of 加名詞當形容詞！"},
 {ask:{say:"最後一題！", q:"This temple is ___ great historical significance.", opts:["with","of","in"], ans:1,
   ok:"完美！of + 抽象名詞 = 形容詞：of great significance = very significant。", bad:{0:"with + 抽象名詞是副詞用法；這裡在 is 後面當補語，要用 of。",2:"這裡要用 of + 抽象名詞表示「具有……的性質」。"},
   again:{q:"He jumped into the river without ___.", opts:["hesitate","hesitation"], ans:1, exp:"without + 名詞：without hesitation 毫不猶豫地。"}}},
 {say:"名詞化過關！口訣：動詞形容詞變名詞，主詞變成所有格，副詞變成形容詞；動詞一致看中心名詞；with 加名詞當副詞，of 加名詞當形容詞！", end:true}
],
g3:[
 {say:"今天練學測閱讀最關鍵的能力：同義改寫，英文叫 paraphrase。正確選項幾乎不會照抄原文，而是換個說法；照抄原文的選項，反而常是陷阱！", board:[["原文：Water is indispensable for life.",["indispensable"]],["選項：Water is essential for life.",["essential"]]]},
 {say:"第一招：換同義字。{pivotal} = crucial = key；{indispensable} = essential；{solely} = only；{predominantly} = mainly = mostly；{diminish} = decrease。", board:[["pivotal = crucial = key",["pivotal"]],["solely = only",["solely"]],["predominantly = mainly = mostly",["predominantly"]]]},
 {say:"同義字口訣！", chant:"pivotal 是 key，solely 是 only，predominantly 是 mainly！"},
 {ask:{say:"考考你！", q:"Original: The decision was based only on test scores. 哪個是正確改寫？", opts:["The decision was based mostly on test scores.","The decision was based solely on test scores."], ans:1,
   ok:"答對！only = solely，意思和程度都沒變。", bad:{0:"mostly 是「大部分」，原文是「只」，程度改變了，是陷阱！"},
   again:{q:"The pain ___ after I rested. (= decreased)", opts:["diminished","deteriorated"], ans:0, exp:"diminish = decrease；deteriorate 是惡化。"}}},
 {say:"第二招：換片語。{hinder} 人 from V-ing = prevent 人 from V-ing；{compensate} for = make up for。片語裡的介系詞不能丟喔！", board:[["hinder him from going = prevent him from going",["hinder","prevent"]],["compensate for = make up for",["compensate for","make up for"]]]},
 {say:"第三招：子句變片語。because 和 although 後面接子句；because of、due to、despite 後面接名詞。所以要把子句「名詞化」，上一課學的就用上了！", board:[["Although he was injured, ...",["Although"]],["Despite his injury, ...",["Despite"]],["Despite he was injured, ...",[],true]]},
 {ask:{q:"Original: Although the plan was feasible, it was rejected. → ___ its feasibility, the plan was rejected.", opts:["Although","Despite","Because of"], ans:1,
   ok:"讚！despite + 名詞 feasibility，意思還是「雖然」。", bad:{0:"Although 後面要接子句，不能只接名詞。",2:"because of 是「因為」，意思變了。"},
   again:{q:"Because it rained heavily, the game was canceled. → Because of the ___ rain, ...", opts:["heavily","heavy"], ans:1, exp:"名詞 rain 前面用形容詞 heavy。"}}},
 {say:"第四招：句型轉換。so ... that ... can't 可以改成 too ... to V；主動也可以改被動。不過改寫最重要的原則是：意思和程度都不能變！", board:[["so ambiguous that we couldn't understand it",["so","that"]],["too ambiguous for us to understand",["too","to"]]]},
 {say:"學測最愛在「程度」動手腳：some 變 all、often 變 always、may 變 must。還有部分否定：not all 是「不是全部」，不等於「全部都不」！", board:[["Not all students like it. = Some students don't like it.",["Not all","Some"]],["Not all students like it. = No students like it.",[],true]]},
 {say:"陷阱口訣！", chant:"程度不能變，not all 不是全部不！"},
 {ask:{say:"最後一題！", q:"Original: Not all teenagers use social media. 哪個是正確改寫？", opts:["No teenagers use social media.","Some teenagers don't use social media.","All teenagers use social media."], ans:1,
   ok:"完美！not all 是部分否定，等於「有些不」。", bad:{0:"這是全部否定，程度改變了。",2:"原文說「不是全部都用」，這個選項意思相反。"},
   again:{q:"Nothing can ___ for lost time. (= make up)", opts:["compensate","hinder"], ans:0, exp:"compensate for = make up for 彌補。"}}},
 {say:"同義改寫過關！口訣：換字、換片語、子句變片語、換句型，四招都要意思不變；程度不能變，not all 不是全部不！", end:true}
],
g4:[
 {say:"最後一堂文法課，學高階片語！學術文章不愛一直用 because、after、cause，而是用更正式的片語。第一組是「原因、根據」：{in light of} 鑑於、{by virtue of} 憑藉、{on the grounds that} 以……為理由。", board:[["In light of the typhoon, the concert was canceled.",["In light of"]],["She got the job by virtue of her English.",["by virtue of"]]]},
 {say:"注意：{on the grounds that} 後面接子句；on the grounds of 後面接名詞。就像 because 和 because of 的差別！", board:[["on the grounds that it was unfair",["on the grounds that"]],["on the grounds of illness",["on the grounds of"]]]},
 {ask:{say:"考考你！", q:"He refused ___ the price was too high.", opts:["on the grounds that","on the grounds of"], ans:0,
   ok:"答對！後面是完整子句，用 on the grounds that。", bad:{1:"on the grounds of 後面要接名詞，這裡是子句 the price was too high。"},
   again:{q:"___ the new evidence, the case was reopened.", opts:["In light of","On the grounds that"], ans:0, exp:"後面是名詞 the new evidence，用 in light of 鑑於。"}}},
 {say:"第二組是「因果、時間」：{give rise to} 引起 = cause；{in the wake of} 在壞事之後，wake 是船開過留下的浪痕；{on the verge of} 瀕臨、快要。", board:[["Poverty can give rise to crime.",["give rise to"]],["In the wake of the earthquake, ...",["In the wake of"]],["on the verge of extinction",["on the verge of"]]]},
 {say:"片語口訣！", chant:"give rise to 引起，wake 是船後浪，verge 站邊緣！"},
 {say:"重點來了：to 是介系詞還是不定詞？{give rise to} 的 to 是介系詞，接名詞；{be inclined to} 的 to 是不定詞，接原形動詞；{be prone to} 兩種都行。", board:[["give rise to + 名詞",["to"]],["be inclined to + 原形動詞",["to"]],["be prone to + 名詞 / 原形",["to"]]]},
 {ask:{q:"I'm inclined ___ with your opinion.", opts:["agreeing","to agree","to agreeing"], ans:1,
   ok:"讚！be inclined to + 原形動詞。", bad:{0:"inclined 後面要先有 to，再接原形動詞。",2:"這裡的 to 是不定詞，要接原形 agree。"},
   again:{q:"The new rule gave rise ___ many complaints.", opts:["of","to"], ans:1, exp:"give rise to + 名詞：引起。"}}},
 {say:"第三組：{account for} 有兩個意思，接原因是「說明」，接比例是「占」；{take into account} 把……列入考慮，短受詞放中間；{at stake} 攸關得失，stake 是賭注。", board:[["How do you account for the drop?",["account for"]],["Students account for 40% of the users.",["account for"]],["Take your budget into account.",["into account"]]]},
 {say:"最後兩個：{with regard to} 關於，regard 不加 s；{as opposed to} 而不是，前後要平行；還有 {in accordance with} 依照，比 according to 更正式。", board:[["with regard to your question",["with regard to"]],["with regards to your question",[],true],["in the morning, as opposed to at night",["as opposed to"]]]},
 {ask:{q:"Young people ___ half of the city's population.", opts:["account for","take into account","are at stake"], ans:0,
   ok:"太強了！account for + 比例 = 占。", bad:{1:"take into account 是「列入考慮」，意思不對。",2:"at stake 是「攸關得失」，不能表示比例。"},
   again:{q:"___ your question, I'll answer it later.", opts:["With regard to","With regards to"], ans:0, exp:"關於：with regard to，regard 不加 s。"}}},
 {ask:{say:"最後一題！", q:"Many species are ___ extinction.", opts:["in the wake of","on the verge of","by virtue of"], ans:1,
   ok:"完美！瀕臨絕種：on the verge of extinction。", bad:{0:"in the wake of 是「在……之後」，意思不通。",2:"by virtue of 是「憑藉」，意思不通。"},
   again:{q:"Taiwan is prone ___ earthquakes.", opts:["to","of"], ans:0, exp:"be prone to + 名詞：容易遭受。"}}},
 {say:"高階片語過關！口訣：in light of 鑑於，grounds that 接子句；give rise to 引起，wake 是船後浪，verge 站邊緣；inclined to 接原形，account for 說明又占比！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S3_V5_ROOTS = [
  {id:"r1", title:"字根 equ（相等）"},
  {id:"r2", title:"字根 hydr（水）"},
  {id:"r3", title:"字根 luc / lum（光）"},
  {id:"r4", title:"字根 loc（地方）"}
];
const S3_V5_ROOT_CLASS = {
r1:[
 {say:"高三同學好！今天的字根是 <<equ>>，意思是「相等」。你早就認識它了：equal 相等的，就是 equ 家族的老大！", board:[["equ + al = equal",["equ"],false,true]]},
 {say:"數學課的 {equation} 方程式，就是讓等號兩邊「相等」的式子；ation 是名詞字尾。", board:[["equ + ation = equation",["equ"],false,true]]},
 {say:"地球中間那條 {equator} 赤道，是把地球分成「相等」兩半的線！", board:[["equ + ator = equator",["equ"],false,true]]},
 {say:"口訣！", chant:"equ、equ，兩邊一樣，相等相等！"},
 {ask:{q:"equ（相等）＋ ator（東西）＝ equator，意思是？", opts:["方程式","赤道","平等"], ans:1,
   ok:"答對！把地球分成相等兩半的線，就是赤道。", bad:{0:"方程式是 equation；equator 是赤道。",2:"平等是 equality；equator 是赤道。"},
   again:{q:"Solve the ___ for x.", opts:["equation","equator"], ans:0, exp:"解方程式：solve the equation。"}}},
 {say:"<<equi>> 是 equ 的變形：{equilibrium} 是 equi + libr 天秤，天秤兩邊相等，就是平衡。另一個 {equitable} 是 equ 相等 + itable，讓大家相等，就是公平的。", board:[["equi + libr + ium = equilibrium",["equi"],false,true],["equ + itable = equitable",["equ"],false,true]]},
 {ask:{q:"We need a more ___ distribution of resources.（公平的）", opts:["equitable","equilibrium","equator"], ans:0,
   ok:"讚！公平的分配：an equitable distribution。", bad:{1:"equilibrium 是名詞「平衡」，這裡要形容詞。",2:"equator 是赤道，意思不通。"},
   again:{q:"equi ＋ libr（天秤）＋ ium ＝ equilibrium，意思是？", opts:["平衡","自由"], ans:0, exp:"天秤兩邊相等，就是平衡。"}}},
 {say:"再來兩個動詞和形容詞：{equate} 是使兩者相等，equate A with B 把 A 等同於 B；{adequate} 是 ad 朝向 + equ 相等，「達到和需求相等」，就是足夠的。", board:[["equ + ate = equate",["equ"],false,true],["ad + equ + ate = adequate",["equ"],false,true]]},
 {say:"小心陷阱：adequate 的 ad 不是「廣告」，而是「朝向」；它的反義字是 inadequate 不足的，in 是否定字首，高二學過喔！", board:[["inadequate = 不足的",["in"],false,true]]},
 {ask:{say:"最後一題！", q:"Don't ___ money with happiness.", opts:["equate","adequate","equator"], ans:0,
   ok:"完美！equate A with B：把 A 等同於 B。", bad:{1:"adequate 是形容詞「足夠的」，這裡需要動詞。",2:"equator 是赤道，是名詞。"},
   again:{q:"Make sure you get ___ sleep.", opts:["adequate","equate"], ans:0, exp:"足夠的睡眠：adequate sleep。"}}},
 {say:"equ 過關！口訣：equ 相等，equation 方程式，equator 赤道把地球切一半；equitable 公平，equilibrium 天秤平衡，adequate 足夠！", end:true}
],
r2:[
 {say:"今天的字根是 <<hydr>>，意思是「水」。高二學過 hydrogen 氫，hydr 水 + gen 產生，因為氫燃燒會「產生水」！", board:[["hydr + o + gen = hydrogen",["hydr"],false,true]]},
 {say:"路邊紅紅的 {hydrant} 消防栓，就是「放出水的東西」；ant 是表示東西的字尾。", board:[["hydr + ant = hydrant",["hydr"],false,true]]},
 {say:"運動時要 {hydrate}，補充水分；hydr 水 + ate 使……，「給它水」。相反地，de 是去除，去掉水就是 dehydration 脫水。", board:[["hydr + ate = hydrate",["hydr"],false,true],["de + hydr + ation = dehydration",["de","hydr"],false,true]]},
 {say:"口訣！", chant:"hydr、hydr，水水水！"},
 {ask:{q:"hydr（水）＋ ant（東西）＝ hydrant，意思是？", opts:["消防栓","水管","水壩"], ans:0,
   ok:"答對！放出水的東西：消防栓，fire hydrant。", bad:{1:"水管是 hose 或 pipe。",2:"水壩是 dam。"},
   again:{q:"Remember to ___ when you run in summer.", opts:["hydrate","hydrant"], ans:0, exp:"補充水分是動詞 hydrate；hydrant 是消防栓。"}}},
 {say:"<<hydro>> 是 hydr 加上連接母音 o：{hydroelectric} 是 hydro 水 + electric 電的，用水來發電，就是水力發電的。", board:[["hydro + electric = hydroelectric",["hydro"],false,true]]},
 {say:"營養課的 {carbohydrate} 碳水化合物：carbo 碳 + hydr 水 + ate 化合物。米飯和麵包都富含它！", board:[["carbo + hydr + ate = carbohydrate",["hydr"],false,true]]},
 {ask:{q:"Rice and bread are rich in ___.", opts:["hydrants","carbohydrates","hydrogen"], ans:1,
   ok:"讚！米飯和麵包富含碳水化合物。", bad:{0:"hydrant 是消防栓，不能吃喔！",2:"hydrogen 是氫，不是營養素。"},
   again:{q:"The dam produces ___ power.", opts:["hydroelectric","hydraulic"], ans:0, exp:"水壩發的電：hydroelectric power 水力發電。"}}},
 {say:"最後一個：{hydraulic} 液壓的，hydr 水 + aul 管子 + ic，液體在管子裡推動機器。修車廠的液壓千斤頂就是 hydraulic jack！", board:[["hydr + aul + ic = hydraulic",["hydr"],false,true]]},
 {say:"小心陷阱：hydr 開頭才是水；hyper（超過）、hybrid（混合的）長得像，但和水無關！", board:[["hyper / hybrid",["hy"],true,true]]},
 {ask:{say:"最後一題！", q:"The car was lifted by a ___ jack.", opts:["hydraulic","hydroelectric","hydrant"], ans:0,
   ok:"完美！液壓千斤頂：hydraulic jack。", bad:{1:"hydroelectric 是水力發電的，不是用來頂車子。",2:"hydrant 是消防栓，是名詞。"},
   again:{q:"hydr 的意思是？", opts:["水","火"], ans:0, exp:"hydr = 水：hydrant、hydrate、hydroelectric。"}}},
 {say:"hydr 過關！口訣：hydr 是水，hydrant 消防栓，hydrate 補水，hydroelectric 水力發電，carbohydrate 碳水化合物，hydraulic 液壓！", end:true}
],
r3:[
 {say:"今天的字根是 <<luc>> 和 <<lum>>，意思都是「光」。想想看，有光照著，東西就看得清楚，所以這個字根常常引申成「清楚」。", board:[["luc / lum = 光",["luc","lum"],false,true]]},
 {say:"{lucid} 是 luc 光 + id 形容詞字尾：有光照亮、看得清清楚楚，就是「清晰易懂的」。a lucid explanation 清楚的說明。", board:[["luc + id = lucid",["luc"],false,true]]},
 {say:"{translucent} 是 trans 穿過 + luc 光 + ent：光能穿過，但看不清楚，就是半透明的。trans 這個字首高一學過喔！", board:[["trans + luc + ent = translucent",["luc"],false,true]]},
 {say:"口訣！", chant:"luc、lum 是光，有光就清楚！"},
 {ask:{q:"trans（穿過）＋ luc（光）＋ ent ＝ translucent，意思是？", opts:["半透明的","翻譯的","幸運的"], ans:0,
   ok:"答對！光能穿過但看不清：半透明的。", bad:{1:"翻譯是 translate，和 luc 光無關。",2:"幸運的是 lucky，不是 luc 字根。"},
   again:{q:"His explanation was so ___ that we understood it at once.", opts:["lucid","lucky"], ans:0, exp:"清楚易懂：lucid。"}}},
 {say:"lum 這邊：{luminous} 是 lumin 光 + ous 充滿：充滿光的，發光的。{illuminate} 是 il 在上 + lumin 光 + ate：把光照在上面，照亮！", board:[["lumin + ous = luminous",["lumin"],false,true],["il + lumin + ate = illuminate",["lumin"],false,true]]},
 {ask:{q:"The streets were ___ by lanterns.", opts:["illuminated","luminous","translucent"], ans:0,
   ok:"讚！被燈籠照亮：be illuminated by。", bad:{1:"luminous 是形容詞，不能放在 were ___ by 的被動句型裡。",2:"translucent 是半透明的，意思不通。"},
   again:{q:"The watch has ___ hands, so you can see them in the dark.", opts:["luminous","lucid"], ans:0, exp:"會發光的指針：luminous。"}}},
 {say:"進階字：{elucidate} 是 e 向外 + lucid 清楚 + ate：把清楚的光照出來，就是「闡明」，比 clarify 更正式。", board:[["e + lucid + ate = elucidate",["luc"],false,true]]},
 {say:"複習一下：高一學過的 illustrate 舉例說明，裡面的 lus 其實也是「光」的意思，把事情照亮讓人看懂！不過 lucky 幸運的、luxury 奢華，和光無關，是陷阱。", board:[["illustrate（lus = 光）",["lus"],false,true],["lucky / luxury",["lu"],true,true]]},
 {ask:{say:"最後一題！", q:"The professor ___ the theory with simple examples.", opts:["elucidated","illuminated","lucid"], ans:0,
   ok:"完美！用例子把理論說清楚：elucidate 闡明。", bad:{1:"illuminate 也可以表示闡明，但最常用是「照亮」；這題最精準的是 elucidated。",2:"lucid 是形容詞，這裡需要動詞。"},
   again:{q:"luc / lum 的意思是？", opts:["光","地方"], ans:0, exp:"luc / lum = 光：lucid、luminous、illuminate。"}}},
 {say:"luc 和 lum 過關！口訣：有光就清楚，lucid 清晰，translucent 半透明，luminous 發光，illuminate 照亮，elucidate 闡明！", end:true}
],
r4:[
 {say:"最後一個字根是 <<loc>>，意思是「地方」。你一定認識：local 當地的、location 位置，都是 loc 家族！", board:[["loc + al = local",["loc"],false,true],["loc + ation = location",["loc"],false,true]]},
 {say:"{relocate} 是 re 再 + loc 地方 + ate：再換一個地方，就是搬遷。公司搬總部、居民被遷移都用它。", board:[["re + loc + ate = relocate",["loc"],false,true]]},
 {say:"{dislocate} 是 dis 離開 + loc 地方 + ate：骨頭離開原來的地方，就是脫臼！", board:[["dis + loc + ate = dislocate",["loc"],false,true]]},
 {say:"口訣！", chant:"loc、loc，什麼地方？換地方、離開地方！"},
 {ask:{q:"dis（離開）＋ loc（地方）＋ ate ＝ dislocate，意思是？", opts:["搬家","脫臼","找到"], ans:1,
   ok:"答對！骨頭離開原位：脫臼。", bad:{0:"搬家、搬遷是 relocate。",2:"找到位置是 locate。"},
   again:{q:"The company ___ its office to Kaohsiung.", opts:["relocated","dislocated"], ans:0, exp:"搬遷公司：relocate。"}}},
 {say:"高二學過的 allocate 分配，al 朝向 + loc 地方：把東西放到各自的地方，就是分配。今天再加一個名詞：{locality} 地區，loc + al + ity，「當地」的名詞。", board:[["al + loc + ate = allocate",["loc"],false,true],["loc + al + ity = locality",["loc"],false,true]]},
 {ask:{q:"Each ___ has its own traditional food.", opts:["locality","locomotive","dislocate"], ans:0,
   ok:"讚！每個地區：each locality。", bad:{1:"locomotive 是火車頭，意思不通。",2:"dislocate 是動詞，這裡要名詞。"},
   again:{q:"loc 的意思是？", opts:["地方","光"], ans:0, exp:"loc = 地方：local、location、relocate。"}}},
 {say:"最酷的一個：{locomotive} 火車頭！loco 地方 + mot 移動 + ive：從一個地方移動到另一個地方的機器。mot 是高一學過的字根「動」，像 motion、motor！", board:[["loco + mot + ive = locomotive",["loco","mot"],false,true]]},
 {say:"小心陷阱：lock 鎖、lot 很多，長得像 loc，但和「地方」無關喔！", board:[["lock / lot",["lo"],true,true]]},
 {ask:{say:"最後一題！", q:"Exports are the ___ of the country's economy.（推動經濟的火車頭）", opts:["locomotive","locality","location"], ans:0,
   ok:"完美！比喻成推動經濟的火車頭：locomotive。", bad:{1:"locality 是地區，意思不通。",2:"location 是位置，意思不通。"},
   again:{q:"He ___ his shoulder playing basketball.", opts:["dislocated","relocated"], ans:0, exp:"肩膀脫臼：dislocate。"}}},
 {say:"loc 過關！口訣：loc 是地方，relocate 搬遷，dislocate 脫臼，locality 地區，locomotive 火車頭！高三字根課全部上完了，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創）與概念卡 ---------- */
Object.assign(ILLUS2, {
  s3v5_equator: () => svgWrap("#e0f2fe", `<circle cx="80" cy="60" r="40" fill="#60a5fa"/><path d="M54 36 Q64 30 72 40 Q70 52 60 50 Q50 46 54 36 Z M88 30 Q102 28 106 40 Q100 46 92 42 Z M84 66 Q98 64 102 76 Q94 90 84 84 Q78 74 84 66 Z" fill="#86efac"/><path d="M40 60 Q80 72 120 60" stroke="#ef4444" stroke-width="3" fill="none" stroke-dasharray="5 3"/>` + O.sun(136, 20, .5) + txt(80, 112, "equ = 相等的兩半", 12, "#1e3a8a") + txt(26, 64, "N", 11, "#2563eb") + txt(26, 82, "S", 11, "#2563eb")),
  s3v5_hydrant: () => svgWrap("#fef3c7", ground("#d6d3d1") + `<rect x="66" y="52" width="28" height="52" rx="6" fill="#dc2626"/><path d="M62 52 Q80 30 98 52 Z" fill="#b91c1c"/><rect x="58" y="62" width="10" height="12" rx="3" fill="#b91c1c"/><rect x="92" y="62" width="10" height="12" rx="3" fill="#b91c1c"/><rect x="62" y="98" width="36" height="8" rx="3" fill="#991b1b"/>` + `<path d="M102 66 Q120 56 134 70 M102 68 Q124 66 138 84" stroke="#38bdf8" stroke-width="3" fill="none" stroke-linecap="round"/>` + O.splash(138, 92, .5, "#7dd3fc") + kid(30, {s:.75, pose:"cheer"}) + txt(80, 22, "hydr = 水", 13, "#0369a1")),
  s3v5_illuminate: () => svgWrap("#1e1b4b", `<path d="M80 26 L40 108 H120 Z" fill="#fde68a" opacity=".35"/>` + `<rect x="74" y="12" width="12" height="14" rx="3" fill="#facc15"/><circle cx="80" cy="30" r="8" fill="#fef08a"/>` + girlP(80, {s:.8, pose:"cheer"}) + spark(40, 40, .8, "#fde68a") + spark(124, 46, .7, "#fde68a") + star(30, 20, 5) + star(140, 24, 4) + txt(80, 116, "lumin = 光", 11, "#fde68a")),
  s3v5_locomotive: () => svgWrap("#ecfdf5", `<rect x="0" y="100" width="160" height="6" fill="#78716c"/><path d="M0 108 H160" stroke="#a8a29e" stroke-width="3" stroke-dasharray="6 6"/>` + `<rect x="30" y="58" width="70" height="34" rx="4" fill="#1f2937"/><rect x="96" y="44" width="34" height="48" rx="4" fill="#374151"/><rect x="104" y="52" width="18" height="14" rx="2" fill="#bae6fd"/><rect x="40" y="40" width="12" height="20" fill="#111827"/><path d="M22 92 L30 76 V92 Z" fill="#ef4444"/>` + O.wheel(48, 94, .6) + O.wheel(78, 94, .6) + O.wheel(112, 94, .6) + O.cloud(44, 24, .5, "#e5e7eb") + O.cloud(64, 14, .4, "#e5e7eb") + O.arrow(146, 70, false, "#10b981") + txt(110, 28, "loco = 地方", 12, "#065f46"))
});
registerUnit("s3-v5", {
  name:"7000 單字 Level 5–6",
  sub:"學術詞彙、名詞化、同義改寫與高階片語",
  words:S3_V5_WORDS, grammar:S3_V5_GRAMMAR, quiz:S3_V5_QUIZ,
  classes:Object.assign({}, S3_V5_CLASS, S3_V5_ROOT_CLASS), phonics:S3_V5_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會 equ（相等）、hydr（水）、luc / lum（光）、loc（地方）四個字根。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
