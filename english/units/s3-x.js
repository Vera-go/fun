/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高三 學測總複習（學測英文題型解題策略，橫跨高一到高三）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S3_X_WORDS = [
/* ---------- 學術研究與數據 ---------- */
["statistics","n.","統計數字；統計學",[
 ["According to official statistics, the birth rate in Taiwan has dropped sharply.","根據官方統計數字，台灣的出生率大幅下降。","According to + 資料來源 是閱讀測驗說明文最常見的開頭；statistics 指「統計數字」時為複數。"],
 ["Statistics is a required course for many college students.","統計學是許多大學生的必修課。","statistics 指「統計學」這門學科時，視為單數，動詞用 is，和 mathematics、economics 一樣。"],
 ["It is the statistics, not personal opinions, that convince the readers.","說服讀者的是統計數字，而不是個人意見。","It is ... that 強調句；被強調的是 the statistics, not personal opinions。"]],
 "stat=站立、狀態|-ist=人|-ics=學科","把國家「狀態」記錄下來的學問 → 統計學","@s3x_chart"],
["proportion","n.","比例；部分",[
 ["A large proportion of teenagers spend over three hours online every day.","很大比例的青少年每天上網超過三小時。","a large proportion of + 複數名詞，動詞看 of 後面的名詞：teenagers 是複數，所以用 spend。"],
 ["The proportion of elderly people in the population is rising.","人口中老年人的比例正在上升。","the proportion of ... 的主詞是 the proportion（單數），所以用 is rising。這是綜合測驗的主詞動詞一致陷阱。"],
 ["Your punishment should be in proportion to your mistake.","懲罰應該和你犯的錯成比例。","in proportion to 表示「和……成比例」，是學測常考搭配。"]],
 "pro-=為了|port=部分|-ion=名詞字尾","各自分到的那一部分 → 比例","🥧|比例"],
["prominent","adj.","突出的；重要的；著名的",[
 ["Social media plays a prominent role in young people's lives.","社群媒體在年輕人的生活中扮演重要的角色。","play a ... role in 表示「在……中扮演……角色」。"],
 ["Taipei 101 is the most prominent building in the city.","台北 101 是這座城市最顯眼的建築。","the most + 形容詞 是多音節形容詞的最高級。"],
 ["A prominent scientist, who won the Nobel Prize, gave a speech at our school.","一位得過諾貝爾獎的知名科學家在我們學校演講。","who 引導非限定關係子句補充說明。"]],
 "pro-=向前|min=突出|-ent=形容詞字尾","向前突出來的 → 顯眼的；重要的","🗼|突出"],
["analyze","v.","分析",[
 ["Scientists analyzed the data collected from 2,000 students.","科學家分析了從兩千名學生收集來的資料。","collected from ... 是過去分詞片語修飾 the data，等於 which was collected from ...。"],
 ["Having analyzed the results, the team published a report.","分析結果之後，團隊發表了一份報告。","Having + p.p. 表示先分析、後發表的先後順序。"],
 ["The article was analyzed sentence by sentence in class.","這篇文章在課堂上被逐句分析。","被動語態 was analyzed；sentence by sentence 表示「一句一句地」。"]],
 "ana-=完全地|ly=鬆開|-ze=動詞字尾","把東西完全拆開來看 → 分析","🔬|分析"],
["percentage","n.","百分比",[
 ["What percentage of the students passed the test?","有多少百分比的學生通過考試？","問百分比用 What percentage of ...，不用 How many percentage。"],
 ["A high percentage of the waste can be recycled.","很高比例的垃圾可以被回收。","a high / low percentage 表示比例高低；percentage 本身前面不加數字。"],
 ["The percentage of people who read newspapers has fallen to 20 percent.","看報紙的人的比例已經降到百分之二十。","主詞是 The percentage（單數），用 has fallen；有數字時用 percent。"]],
 "per=每|cent=一百|-age=名詞字尾","每一百個裡占多少 → 百分比","💯|百分比"],
["majority","n.","大多數",[
 ["The majority of the respondents support the new policy.","大多數受訪者支持這項新政策。","the majority of + 複數名詞，動詞用複數 support。"],
 ["The bill was passed by a majority of 30 votes.","這項法案以多出三十票的差距通過。","by a majority of + 數字 表示「以多出……票」。"],
 ["In the vast majority of cases, the disease can be cured.","在絕大多數的情況下，這種病可以治癒。","the vast majority 表示「絕大多數」，是閱讀測驗常見的強調語。"]],
 "major=較大的|-ity=名詞字尾","比較大的那一群 → 大多數","🙋‍♀️|多數"],
["estimate","v./n.","估計",[
 ["It is estimated that one million tourists visit the island every year.","據估計，每年有一百萬名觀光客造訪這座島。","It is estimated that ... 是虛主詞加被動的句型，和 It is said that 一樣。"],
 ["Experts estimate the cost of the project at NT$2 billion.","專家估計這項工程的成本為二十億台幣。","estimate A at + 數字 表示「估計 A 為……」。"],
 ["According to a rough estimate, the repair will take two weeks.","根據粗略的估計，修理要花兩週。","當名詞時唸 ES-ti-mit，動詞唸 ES-ti-mate；a rough estimate 表示「粗估」。"]],
 "estim=評價|-ate=動詞字尾","評估價值 → 估計","🧮|估計"],
["correlation","n.","相關性",[
 ["There is a strong correlation between sleep and memory.","睡眠和記憶之間有很強的相關性。","a correlation between A and B 表示「A 和 B 之間的關聯」。"],
 ["Correlation does not necessarily mean cause and effect.","相關不一定代表因果關係。","not necessarily 表示「不一定」，是部分否定；推論題常考這個觀念。"],
 ["The study, which involved 500 children, found no correlation between screen time and grades.","這項有五百名孩童參與的研究，發現螢幕時間和成績之間沒有相關性。","which 引導非限定關係子句補充說明 The study；主要動詞是 found。"]],
 "cor-=一起|re-=回|lat=帶|-ion=名詞字尾","兩件事被一起帶回來比較 → 相關性","🔗|相關"],
["approximately","adv.","大約",[
 ["The trip takes approximately three hours.","這趟行程大約要三小時。","approximately 放在數字前面，等於 about，但更正式，說明文很常見。"],
 ["Approximately 70 percent of the Earth's surface is covered by water.","地球表面大約百分之七十被水覆蓋。","主詞的核心是 70 percent of the Earth's surface（不可數），所以用 is。"],
 ["The number of visitors has approximately doubled since 2020.","自 2020 年以來，參觀人數大約增加了一倍。","has doubled 是現在完成式搭配 since；approximately 修飾動詞 doubled。"]],
 "ap-=朝向|proxim=最近的|-ate=形容詞字尾|-ly=副詞字尾","朝著很接近的方向 → 大約","≈|大約"],
["variable","n./adj.","變數；多變的",[
 ["The weather in spring is highly variable.","春天的天氣非常多變。","highly 修飾形容詞，表示「非常」；variable 當形容詞放在 be 動詞後面。"],
 ["In this experiment, temperature is the only variable.","在這個實驗中，溫度是唯一的變數。","variable 當名詞指實驗中會改變的因素。"],
 ["Many variables, such as diet and stress, affect our health.","許多變數，例如飲食和壓力，會影響我們的健康。","such as 用來舉例；插入語前後加逗號，主詞 Many variables 是複數，動詞用 affect。"]],
 "vari=變化|-able=可……的","可以變化的 → 多變的；變數","🎚️|變數"],
["probe","v./n.","探查；調查",[
 ["Scientists sent a robot to probe the ocean floor.","科學家派機器人去探查海底。","to V 表示目的。"],
 ["The police are probing the cause of the fire.","警方正在調查火災的原因。","probe 在新聞裡常表示「調查」；are probing 是現在進行式。"],
 ["A space probe was launched to study Mars.","一架太空探測器被發射去研究火星。","probe 當名詞可指「探測器」；was launched 是被動。"]],
 "prob=測試、證明","去測試、查證 → 探查","🛰️|探查"],
["ratio","n.","比率",[
 ["The ratio of boys to girls in our class is 3 to 2.","我們班男生和女生的比例是三比二。","the ratio of A to B 表示「A 和 B 的比率」，主詞是 The ratio（單數），用 is。"],
 ["The school has a low student-teacher ratio.","這所學校的師生比很低。","student-teacher ratio 是複合名詞，表示「學生對老師的比率」。"],
 ["Mix the flour and water in a ratio of two to one.","把麵粉和水以二比一的比例混合。","in a ratio of A to B 表示「以 A 比 B 的比例」。"]],
 "","","➗|比率"],
["typical","adj.","典型的；一向如此的",[
 ["A typical day for a senior high student starts at six.","高中生典型的一天從六點開始。","a typical day 表示「平常的一天」；typical 放在名詞前面修飾。"],
 ["It is typical of him to arrive late.","遲到正是他的作風。","It is typical of 人 to V 表示「做某事是某人一貫的作風」，介系詞用 of，不用 for。"],
 ["Typically, a reading passage begins with its main idea.","一般來說，閱讀文章會以主旨開頭。","副詞 Typically 放句首修飾整句；主旨題常在第一段找答案。"]],
 "typ=類型|-ical=形容詞字尾","符合某種類型的 → 典型的","📌|典型"],
["notable","adj.","值得注意的；著名的",[
 ["The town is notable for its old temples.","這個小鎮以古老的廟宇聞名。","be notable for 表示「以……著稱」，和 be famous for 同義。"],
 ["One notable change is the use of mobile payment.","一個值得注意的改變是行動支付的使用。","主詞 One notable change 是單數，用 is。"],
 ["Notably, the price of eggs rose by 20 percent.","值得注意的是，蛋價上漲了百分之二十。","rise by + 數字 表示「上漲了多少」；rise to + 數字 表示「漲到多少」。"]],
 "not=知道、記號|-able=可……的","值得記下來的 → 值得注意的","📝|值得注意"],
["equivalent","adj./n.","相等的；相等物",[
 ["One US dollar is roughly equivalent to 30 NT dollars.","一美元大約相當於三十元新台幣。","be equivalent to + 名詞 表示「相當於……」，to 是介系詞。"],
 ["There is no English equivalent for the Chinese word \"xiao.\"","中文的「孝」在英文裡沒有對等的字。","the equivalent for / of + 名詞 表示「……的對等物」；翻譯題常見。"],
 ["Walking 10,000 steps is equivalent to burning about 400 calories.","走一萬步大約等於燃燒四百大卡。","動名詞片語當主詞，視為單數；to 是介系詞，後面接 V-ing。"]],
 "equi-=相等|val=價值|-ent=形容詞字尾","價值相等的 → 相等的","🟰|相等"],
["numerical","adj.","數字的",[
 ["The data are shown in numerical order.","資料依數字順序排列。","in numerical order 表示「按數字順序」；data 在正式文章中可視為複數。"],
 ["Mixed questions often ask you to give a numerical answer.","混合題常要你寫出數字答案。","ask 人 to V 表示「要求某人做某事」。"],
 ["She has strong numerical skills, so she wants to study statistics.","她數理能力很強，所以想讀統計。","numerical skills 表示「數字運算能力」。"]],
 "numer=數|-ical=形容詞字尾","和數字有關的","🔢|數字"],
["empirical","adj.","實證的；以經驗為根據的",[
 ["The theory is not supported by empirical evidence.","這個理論沒有實證證據支持。","empirical evidence 是學術文章常見搭配；is supported by 是被動。"],
 ["Scientists rely on empirical data rather than personal opinions.","科學家依靠實證資料，而不是個人意見。","rely on 表示「依靠」；A rather than B 前後要平行。"],
 ["It is empirical research that changed doctors' minds.","改變醫生想法的是實證研究。","It is ... that 強調句，強調主詞 empirical research。"]],
 "em-=在……裡面|pir=嘗試|-ical=形容詞字尾","親自下去嘗試得到的 → 實證的","🧫|實證"],
["fraction","n.","一小部分；分數",[
 ["Only a fraction of the students passed the test.","只有一小部分學生通過考試。","a fraction of + 名詞 表示「一小部分」；動詞看 of 後面的名詞。"],
 ["The used phone costs a fraction of the price of a new one.","這支二手手機的價格只有新機的零頭。","a fraction of the price 表示「價格便宜很多」；one 代替 phone。"],
 ["One half and one third are fractions.","二分之一和三分之一都是分數。","分數的寫法：分子用基數、分母用序數，如 one third。"]],
 "fract=破|-ion=名詞字尾","打破後的一小塊 → 一小部分","🍰|一小部分"],
["demonstrate","v.","證明；示範",[
 ["The study demonstrates that exercise improves memory.","這項研究證明運動能改善記憶。","demonstrate + that 子句 表示「證明……」，研究報告常用。"],
 ["The teacher demonstrated how to use the machine.","老師示範如何使用這台機器。","demonstrate + how to V 表示「示範如何做」。"],
 ["Thousands of people demonstrated against the new law.","數千人示威抗議新法律。","demonstrate against 表示「示威反對」；名詞 demonstration 也有「示威」的意思。"]],
 "de-=完全|monstr=展示|-ate=動詞字尾","完整地展示出來 → 證明","👩‍🏫|示範"],
["reveal","v.","揭露；顯示",[
 ["The survey reveals that most students feel stressed before exams.","調查顯示大部分學生考前感到壓力。","reveal + that 子句；閱讀測驗常用 The study reveals / shows / suggests that ...。"],
 ["It was not until the end of the story that the truth was revealed.","直到故事的最後，真相才被揭曉。","It was not until ... that ... 表示「直到……才……」；was revealed 是被動。"],
 ["She refused to reveal the name of her source.","她拒絕透露消息來源的名字。","refuse to V 表示「拒絕做某事」。"]],
 "re-=相反|veal=面紗","把面紗拿掉 → 揭露","🎭|揭露"],
["replicate","v.","複製；重做（實驗）",[
 ["Other scientists failed to replicate the results of the experiment.","其他科學家無法重現這項實驗的結果。","fail to V 表示「沒能做到」；研究要能被重現才可信。"],
 ["The success of the program has been replicated in other cities.","這個計畫的成功已在其他城市被複製。","現在完成式被動 has been replicated。"],
 ["Viruses replicate quickly inside the body.","病毒在體內快速複製。","replicate 當不及物動詞表示「自我複製」。"]],
 "re-=再|plic=摺|-ate=動詞字尾","再摺出一份一模一樣的 → 複製","📑|複製"],
["quantity","n.","數量；量",[
 ["The factory produces large quantities of plastic bags.","這家工廠生產大量塑膠袋。","large quantities of + 名詞 表示「大量的」，可數、不可數名詞都可以接。"],
 ["Quality is more important than quantity.","質比量更重要。","quality（品質）和 quantity（數量）常被拿來對比，拼字很像，要小心。"],
 ["A small quantity of salt is added to bring out the flavor.","加入少量的鹽來提味。","主詞 A small quantity 是單數，用 is added；to V 表示目的。"]],
 "quant=多少|-ity=名詞字尾","有多少 → 數量","🧺|數量"],
["context","n.","上下文；背景",[
 ["Try to guess the meaning of new words from the context.","試著從上下文猜生字的意思。","from the context 表示「從上下文」，是猜字最重要的策略。"],
 ["The sentence makes no sense out of context.","這句話脫離上下文就說不通。","out of context 表示「斷章取義、脫離上下文」；make sense 表示「有道理」。"],
 ["In this context, \"cool\" means \"calm,\" not \"cold.\"","在這個上下文裡，cool 的意思是「冷靜的」，不是「冷的」。","in this context 表示「在這個情境下」。"]],
 "con-=一起|text=編織","把字編織在一起的整體 → 上下文","🧵|上下文"],
["dimension","n.","面向；尺寸",[
 ["The problem has a social dimension as well as an economic one.","這個問題除了經濟面，也有社會面。","as well as 連接兩個對等的部分；one 代替前面提過的 dimension，避免重複。"],
 ["Please measure the dimensions of the room before buying furniture.","買家具前請先量房間的尺寸。","dimensions 用複數表示長、寬、高的「尺寸」；before + V-ing。"],
 ["Travel adds a new dimension to our understanding of the world.","旅行為我們對世界的理解增添了新的面向。","add A to B 表示「把 A 加到 B 上」。"]],
 "di-=分開|mens=測量|-ion=名詞字尾","分開來一一測量 → 尺寸；看事情的面向","📐|面向"],
["category","n.","類別",[
 ["The books are divided into five categories.","這些書被分成五個類別。","be divided into + 數字 + 複數名詞 表示「被分成……」；category 複數去 y 加 ies。"],
 ["Which category does this question belong to?","這一題屬於哪一個類別？","belong to 表示「屬於」，不用進行式；介系詞 to 留在句尾。"],
 ["Tomatoes fall into the category of fruit.","番茄屬於水果類。","fall into the category of 表示「屬於……類」。"]],
 "cate-=向下|gory=說","往下一一說明分類 → 類別","🗂️|類別"],
["criterion","n.","標準（複數 criteria）",[
 ["Creativity is one criterion for judging the essays.","創意是評分作文的一項標準。","criterion 是單數，複數是 criteria，和 phenomenon / phenomena 一樣。"],
 ["The criteria for the scholarship are grades and service hours.","獎學金的標準是成績和服務時數。","criteria 是複數，動詞用 are。這是單複數陷阱題的常客。"],
 ["What criteria do you use when choosing a university?","你選大學時用什麼標準？","when choosing = when you choose，省略主詞並把動詞改成 V-ing。"]],
 "crit=判斷|-erion=名詞字尾","用來判斷的依據 → 標準","📏|標準"],
["magnitude","n.","規模；嚴重程度",[
 ["The earthquake had a magnitude of 7.2.","這場地震規模七點二。","have a magnitude of + 數字 表示「規模是……」，地震新聞常用。"],
 ["Few people understood the magnitude of the problem.","很少人了解這個問題的嚴重程度。","few 表示「很少、幾乎沒有」，後面接可數複數名詞。"],
 ["Changes of this magnitude take years to complete.","這種規模的改變要花好幾年才能完成。","of this magnitude 表示「這種規模的」，修飾 Changes。"]],
 "magn=大|-itude=名詞字尾","有多大 → 規模","🌋|規模"],
["distinct","adj.","明顯的；截然不同的",[
 ["There is a distinct difference between the two writing styles.","這兩種寫作風格有明顯的差異。","a distinct difference 表示「明顯的差異」。"],
 ["Taiwanese is distinct from Mandarin in many ways.","台語在很多方面和華語截然不同。","be distinct from 表示「和……不同」，等於 be different from。"],
 ["Each region has its own distinct culture.","每個地區都有獨特的文化。","each 後面接單數名詞，用 has 和 its。"]],
 "dis-=分開|tinct=刺、標記","刺上記號分開來 → 明顯不同的","🔀|截然不同"],
["factor","n.","因素",[
 ["Price is an important factor when people buy a phone.","價格是人們買手機時的一項重要因素。","when 引導時間子句；factor 前面常加 important、key、major。"],
 ["Several factors contributed to the success of the event.","有好幾個因素促成了活動的成功。","contribute to 表示「促成、導致」，to 是介系詞。"],
 ["Stress is one of the main factors that cause poor sleep.","壓力是造成睡眠品質差的主要因素之一。","one of the + 複數名詞；that 修飾 factors（複數），所以用 cause。"]],
 "fact=做|-or=名詞字尾","造成結果的東西 → 因素","🧩|因素"],
["respondent","n.","受訪者；作答者",[
 ["Over half of the respondents said they exercise less than once a week.","超過一半的受訪者說他們一週運動不到一次。","half of the + 複數名詞，動詞用複數；圖表混合題常出現 respondents。"],
 ["Each respondent was asked to fill out a form.","每位受訪者都被要求填寫一份表格。","each + 單數名詞 + 單數動詞 was；be asked to V 是被動。"],
 ["Respondents who live in cities are more likely to own a car.","住在城市的受訪者更可能擁有汽車。","be likely to V 表示「可能會……」；who 引導限定關係子句。"]],
 "re-=回|spond=應答|-ent=人","回答問題的人 → 受訪者","🗳️|受訪者"],
["questionnaire","n.","問卷",[
 ["Please complete the questionnaire and hand it in by Friday.","請填完問卷並在星期五前交回。","complete / fill out a questionnaire 表示「填問卷」；hand in 是可分開的片語動詞，受詞是代名詞時放中間。"],
 ["The questionnaire was sent to 1,000 high school students.","問卷被寄給一千名高中生。","was sent 是被動。"],
 ["The results of the questionnaire show that most students prefer group work.","問卷結果顯示大部分學生偏好分組作業。","主詞是 The results（複數），所以用 show。"]],
 "question=問題|-naire=名詞字尾","一整份問題 → 問卷","📄|問卷"],
/* ---------- 環境與能源 ---------- */
["pollutant","n.","污染物",[
 ["Factories release pollutants into rivers.","工廠將污染物排入河川。","release A into B 表示「把 A 排放到 B」。"],
 ["Plastic is one of the most common pollutants in the ocean.","塑膠是海洋中最常見的污染物之一。","one of the + 最高級 + 複數名詞。"],
 ["The air is full of pollutants, which are harmful to our lungs.","空氣中充滿污染物，對我們的肺有害。","which 引導非限定關係子句，指 pollutants。"]],
 "pollut=污染|-ant=物、人","造成污染的東西 → 污染物","🏭|污染物"],
["contaminate","v.","污染（使不乾淨）",[
 ["The water was contaminated with chemicals.","這些水被化學物質污染了。","be contaminated with / by 表示「被……污染」。"],
 ["Contaminated food can make people seriously ill.","被污染的食物會讓人病得很重。","過去分詞 Contaminated 當形容詞，表示「被污染的」。"],
 ["If the soil had not been contaminated, the farmers could have grown rice.","如果土壤當時沒有被污染，農夫本來可以種稻米。","與過去事實相反的假設，搭配被動：had not been contaminated。"]],
 "con-=一起|tamin=接觸|-ate=動詞字尾","和髒東西接觸在一起 → 污染","🧪|污染"],
["erosion","n.","侵蝕",[
 ["Trees help prevent soil erosion.","樹木有助於防止土壤侵蝕。","help + 原形動詞 表示「幫忙做」；soil erosion 是常見搭配。"],
 ["Coastal erosion has been getting worse because of rising sea levels.","因為海平面上升，海岸侵蝕越來越嚴重。","現在完成進行式 has been getting，表示持續中的變化；because of + 名詞。"],
 ["The rocks were shaped by wind and water erosion over millions of years.","這些岩石經過數百萬年的風和水侵蝕而成形。","被動語態 were shaped by。"]],
 "e-=向外|ros=咬|-ion=名詞字尾","一口一口把土咬掉 → 侵蝕","🏜️|侵蝕"],
["disposable","adj.","拋棄式的；用完即丟的",[
 ["Many restaurants no longer offer disposable chopsticks.","許多餐廳不再提供免洗筷。","no longer 表示「不再」，放在一般動詞前面。"],
 ["Disposable cups, which are used only once, create a lot of waste.","只用一次的拋棄式杯子製造大量垃圾。","which 引導非限定關係子句；主要動詞是 create。"],
 ["It is time we stopped using disposable products.","我們該停止使用拋棄式產品了。","It is time + 主詞 + 過去式 表示「早該……了」。"]],
 "dis-=分開|pos=放|-able=可……的","可以丟到一邊的 → 拋棄式的","🥤|用完就丟"],
["landfill","n.","垃圾掩埋場",[
 ["Most of the city's trash ends up in landfills.","這座城市大部分的垃圾最後都進了掩埋場。","end up in 表示「最後落得在……」。"],
 ["The landfill is almost full, so the city has to find another site.","掩埋場快滿了，所以市政府必須找另一個場址。","so 表示結果，前面用逗號。"],
 ["Food waste sent to landfills produces harmful gases.","送進掩埋場的廚餘會產生有害氣體。","sent to landfills 是過去分詞片語修飾 Food waste；主詞不可數，用 produces。"]],
 "land=土地|fill=填滿","把垃圾填進土地裡 → 掩埋場","🗑️|掩埋場"],
["sewage","n.","污水",[
 ["Untreated sewage was flowing into the river.","未經處理的污水流進河裡。","Untreated 是過去分詞當形容詞；sewage 不可數。"],
 ["The city built a new sewage treatment plant.","市政府蓋了一座新的污水處理廠。","sewage treatment plant 是複合名詞，plant 在這裡是「工廠」。"],
 ["It was the sewage from the factory that killed the fish.","害死魚的是工廠排出的污水。","It was ... that 強調句強調主詞。"]],
 "","","🚰|污水"],
["toxic","adj.","有毒的",[
 ["Some cleaning products contain toxic chemicals.","有些清潔用品含有有毒的化學物質。","contain 表示「含有」，不用進行式。"],
 ["The smoke from the fire was highly toxic.","火災產生的煙毒性很強。","highly toxic 表示「劇毒的」。"],
 ["Toxic relationships can harm your mental health.","有毒的人際關係會傷害你的心理健康。","toxic 也可以比喻「有害的、讓人身心俱疲的」。"]],
 "tox=毒|-ic=形容詞字尾","有毒的","☠️|有毒"],
["emit","v.","排放；發出",[
 ["Cars emit large amounts of carbon dioxide.","汽車排放大量二氧化碳。","a large amount of + 不可數名詞；emit 的過去式要重複 t：emitted。"],
 ["The gases emitted by factories are a major cause of acid rain.","工廠排放的氣體是酸雨的主要原因。","emitted by factories 是過去分詞片語修飾 The gases。"],
 ["The device emits a beep when the battery is low.","電池電量低時，這個裝置會發出嗶聲。","when 引導時間子句；emit 也可以指發出聲音、光、熱。"]],
 "e-=向外|mit=送","往外送出去 → 排放","💨|排放"],
["abundant","adj.","豐富的；大量的",[
 ["Taiwan has abundant rainfall in summer.","台灣夏天雨量豐沛。","abundant 常修飾 rainfall、resources、food。"],
 ["Fish were once abundant in this river.","這條河曾經有很多魚。","once 放在 be 動詞後面表示「曾經」。"],
 ["The island is abundant in natural resources.","這座島擁有豐富的天然資源。","be abundant in 表示「富含……」，和 be rich in 同義。"]],
 "ab-=離開|und=波浪|-ant=形容詞字尾","多到像波浪一樣溢出來 → 豐富的","🌾|豐富"],
["reservoir","n.","水庫",[
 ["The reservoir supplies water to the whole city.","這座水庫供應全市的用水。","supply A to B 表示「把 A 供應給 B」；supply B with A 也可以。"],
 ["Because of the drought, the water level in the reservoir is very low.","因為乾旱，水庫的水位很低。","because of + 名詞片語。"],
 ["Shihmen Reservoir, which was completed in 1964, is in Taoyuan.","石門水庫在 1964 年完工，位於桃園。","專有名詞後面用非限定用法。"]],
 "re-=回|serv=保存|-oir=地方","把水保存起來的地方 → 水庫","@s3x_reservoir"],
["biodegradable","adj.","可生物分解的",[
 ["These bags are made of biodegradable materials.","這些袋子是用可生物分解的材料做的。","be made of 表示「由……製成（看得出原料）」。"],
 ["Unlike plastic, paper is biodegradable.","和塑膠不同，紙可以被生物分解。","Unlike 是介系詞，表示「不像、和……不同」，閱讀測驗的對比訊號。"],
 ["Biodegradable as it is, the cup still takes months to break down.","雖然這杯子是可分解的，但仍要好幾個月才能分解。","形容詞 + as + 主詞 + 動詞 表示讓步「雖然」，是寫作加分句型。"]],
 "bio=生命|de-=向下|grad=階段|-able=可……的","能被生物一步步分解的 → 可生物分解的","🍂|可分解"],
["hazardous","adj.","危險的；有害的",[
 ["Hazardous waste must be handled with care.","有害廢棄物必須小心處理。","must be + p.p. 是助動詞被動；with care = carefully。"],
 ["Smoking is hazardous to your health.","抽菸有害健康。","be hazardous to 表示「對……有害」。"],
 ["Workers who handle hazardous materials must wear protective suits.","處理危險物質的工人必須穿防護衣。","who 引導限定關係子句修飾 Workers。"]],
 "hazard=危險|-ous=充滿……的","充滿危險的 → 有害的","⚠️|危險"],
["deplete","v.","耗盡",[
 ["Overfishing has depleted fish stocks around the world.","過度捕撈已經耗盡全世界的魚群數量。","現在完成式 has depleted 表示到現在為止的結果。"],
 ["If we continue to deplete natural resources, future generations will suffer.","如果我們繼續耗盡天然資源，後代子孫將會受害。","一般條件句：If 子句用現在式，主要子句用 will。"],
 ["The ozone layer was seriously depleted in the 1980s.","臭氧層在 1980 年代被嚴重破壞。","was depleted 是被動語態。"]],
 "de-=去除|plet=填滿","把裝滿的東西拿光 → 耗盡","🪫|耗盡"],
["radiation","n.","輻射",[
 ["Too much exposure to radiation can cause cancer.","過度暴露在輻射下可能致癌。","exposure to + 名詞 表示「暴露在……之下」。"],
 ["The radiation from the sun can damage your skin.","太陽的輻射會傷害你的皮膚。","can 表示可能性。"],
 ["Mobile phones give off a small amount of radiation.","手機會發出少量的輻射。","give off 表示「發出（氣味、光、熱）」，和 emit 同義。"]],
 "radi=光線|-ation=名詞字尾","像光線一樣向外放射 → 輻射","☢️|輻射"],
["vegetation","n.","植被；植物",[
 ["The mountain is covered with thick vegetation.","這座山覆蓋著茂密的植被。","be covered with 表示「被……覆蓋」；vegetation 不可數。"],
 ["Without vegetation, the soil would be washed away.","如果沒有植被，土壤就會被沖走。","Without + 名詞 表示假設；wash away 是片語動詞。"],
 ["The fire destroyed most of the vegetation in the area.","大火摧毀了這個地區大部分的植物。","most of the + 名詞。"]],
 "veget=生長|-ation=名詞字尾","生長在地上的一切 → 植被","🌳|植被"],
/* ---------- 科技與社會 ---------- */
["interface","n.","介面",[
 ["The app has a simple and user-friendly interface.","這個應用程式有簡單又好用的介面。","user-friendly 是複合形容詞，表示「對使用者友善的」。"],
 ["The new interface makes it easier for elderly people to shop online.","新介面讓老年人更容易上網購物。","make it + 形容詞 + for 人 + to V：it 是虛受詞，代替後面的 to shop online。"],
 ["It was the confusing interface that made users give up the app.","讓使用者放棄這個應用程式的是混亂的介面。","強調句；make + 受詞 + 原形動詞。"]],
 "inter-=在……之間|face=面","兩者之間接觸的那一面 → 介面","🖥️|介面"],
["accessible","adj.","可到達的；容易取得的",[
 ["The museum is accessible by MRT.","這座博物館可以搭捷運到達。","by + 交通工具（不加冠詞）表示交通方式。"],
 ["Online courses make education accessible to everyone.","線上課程讓每個人都能接受教育。","make + 受詞 + 形容詞；be accessible to 人 表示「某人可取得」。"],
 ["Public buildings should be made accessible to wheelchair users.","公共建築應該讓輪椅使用者能夠進出。","make A accessible 改成被動：A should be made accessible。"]],
 "ac-=朝向|cess=走|-ible=可……的","可以走過去的 → 可到達的","♿|無障礙"],
["compatible","adj.","相容的；合得來的",[
 ["This charger is not compatible with my phone.","這個充電器和我的手機不相容。","be compatible with 表示「和……相容」。"],
 ["The couple broke up because they were not compatible.","這對情侶因為合不來而分手了。","break up 表示「分手」，過去式 broke up。"],
 ["Is the software compatible with older computers?","這個軟體跟舊電腦相容嗎？","Is + 主詞 + 形容詞 的問句。"]],
 "com-=一起|pat=感受|-ible=可……的","可以一起感受、共處的 → 相容的","🔌|相容"],
["mechanism","n.","機制；機械裝置",[
 ["Sweating is the body's natural cooling mechanism.","流汗是身體天然的降溫機制。","the body's 是所有格；cooling mechanism 表示「降溫機制」。"],
 ["The scientists explained the mechanism by which the virus spreads.","科學家解釋了病毒傳播的機制。","介系詞 + 關係代名詞：by which = 透過這個機制。"],
 ["The clock stopped because its mechanism was broken.","時鐘停了，因為它的機械裝置壞了。","its 是 it 的所有格，不是 it's。"]],
 "mechan=機械|-ism=名詞字尾","機械運作的方式 → 機制","⚙️|機制"],
["pseudonym","n.","假名；筆名",[
 ["Many users post comments under pseudonyms.","許多使用者用假名發表留言。","under a pseudonym 表示「用假名」，介系詞用 under。"],
 ["The writer published her first novel under a pseudonym.","這位作家用筆名出版了她的第一本小說。","pseudonym 的 p 不發音，唸 SOO-duh-nim。"],
 ["Hiding behind pseudonyms, some people post cruel comments online.","躲在假名背後，有些人在網路上發表殘酷的留言。","分詞構句 Hiding ... = Because they hide ...。"]],
 "pseudo-=假的|nym=名字","假的名字 → 假名","🥷|假名"],
["censor","v./n.","審查；審查員",[
 ["Some governments censor news on the internet.","有些政府會審查網路上的新聞。","censor 是及物動詞，直接接受詞。"],
 ["The violent scenes were censored before the film was shown on TV.","暴力畫面在電影上電視播出前被刪剪了。","were censored 和 was shown 都是被動；before 引導時間子句。"],
 ["Censorship of the press, which limits free speech, is a hot topic.","限制言論自由的新聞審查是熱門話題。","名詞是 censorship；which 引導非限定關係子句；主詞 Censorship 是單數，用 is。"]],
 "cens=評估、判斷|-or=人","評估內容能不能公開的人 → 審查員；審查","🚫|審查"],
["transaction","n.","交易",[
 ["All transactions on this website are safe and secure.","這個網站上所有交易都安全可靠。","All + 複數名詞，用 are。"],
 ["Mobile payment has made small transactions much faster.","行動支付讓小額交易變得快很多。","much 修飾比較級 faster。"],
 ["The bank charges a fee for each international transaction.","銀行對每一筆國際交易收取手續費。","charge a fee for 表示「針對……收費」；each 接單數名詞。"]],
 "trans-=越過|act=做|-ion=名詞字尾","把事情跨越雙方做完 → 交易","💳|交易"],
/* ---------- 文化與藝術 ---------- */
["classical","adj.","古典的",[
 ["I listen to classical music when I study.","我讀書時會聽古典音樂。","classical music 是固定搭配；不要和 classic（經典的）搞混。"],
 ["Classical Chinese is difficult for many students.","文言文對許多學生來說很難。","Classical Chinese 表示「文言文」。"],
 ["The building, designed in a classical style, attracts many photographers.","這棟以古典風格設計的建築吸引許多攝影師。","designed in ... 是插入的過去分詞片語，等於 which was designed in ...。"]],
 "class=等級|-ical=形容詞字尾","最高等級、可以當典範的 → 古典的","🎻|古典"],
["abstract","adj./n.","抽象的；摘要",[
 ["Love is an abstract idea that is hard to define.","愛是一個難以定義的抽象概念。","that 引導限定關係子句；hard to define 的受詞就是主詞 idea，所以 define 後面不加 it。"],
 ["Abstract paintings often have no clear subject.","抽象畫通常沒有明確的主題。","Abstract 修飾 paintings。"],
 ["Read the abstract first to get the main idea of the research paper.","先讀摘要來掌握研究論文的主旨。","abstract 當名詞是「摘要」；to V 表示目的。"]],
 "abs-=離開|tract=拉","從具體事物中拉出來的 → 抽象的","🌀|抽象"],
["folk","adj./n.","民間的；人們",[
 ["The museum displays many Taiwanese folk arts.","這座博物館展示許多台灣民俗藝術。","folk 當形容詞修飾 arts。"],
 ["Folk songs are passed down from generation to generation.","民謠一代一代地流傳下來。","pass down 的被動 are passed down；from generation to generation 表示「代代相傳」。"],
 ["Hi, folks! Welcome to the show.","嗨，各位！歡迎來到節目。","folks 是口語中「大家、各位」。"]],
 "","","🪕|民俗"],
["inherit","v.","繼承；遺傳",[
 ["She inherited a house from her grandmother.","她從祖母那裡繼承了一棟房子。","inherit A from B 表示「從 B 繼承 A」。"],
 ["He inherited his father's sense of humor.","他遺傳了他爸爸的幽默感。","inherit 也可以表示遺傳個性或外表。"],
 ["Traditions that are not inherited by young people will soon disappear.","不被年輕人傳承的傳統很快就會消失。","that 引導限定關係子句，子句裡用被動 are not inherited。"]],
 "in-=進入|herit=繼承人","進入繼承人手中 → 繼承","👑|繼承"],
["legacy","n.","遺產；留給後世的東西",[
 ["The great scientist left a lasting legacy.","那位偉大的科學家留下了長遠的影響。","leave a legacy 表示「留下遺產、留下影響」。"],
 ["The temple is part of our cultural legacy.","這座廟宇是我們文化遺產的一部分。","part of 前面通常不加 a。"],
 ["Pollution should not be the legacy that we leave to our children.","污染不應該是我們留給下一代的東西。","that 引導關係子句，修飾 the legacy，子句缺受詞。"]],
 "leg=派遣、託付|-acy=名詞字尾","託付給後人的東西 → 遺產","📜|遺產"],
["aesthetic","adj.","美學的；審美的",[
 ["The design has great aesthetic value.","這個設計有很高的美學價值。","aesthetic value 表示「美學價值」；ae 唸 e。"],
 ["People's aesthetic tastes change over time.","人們的審美品味會隨著時間改變。","over time 表示「隨著時間」。"],
 ["The building is not only practical but also aesthetic.","這棟建築不但實用，而且美觀。","not only ... but also ... 前後要平行：兩個形容詞。"]],
 "aesthet=感覺、知覺|-ic=形容詞字尾","讓感官覺得美的 → 美學的","🖼️|美感"],
["genre","n.","（藝術、文學的）類型",[
 ["Science fiction is my favorite genre of novel.","科幻是我最喜歡的小說類型。","genre 唸 ZHAHN-ruh，來自法文。"],
 ["The singer is famous for mixing different music genres.","這位歌手以混合不同的音樂類型聞名。","be famous for + V-ing；for 是介系詞。"],
 ["Which genre of movies do you prefer, horror or comedy?","你比較喜歡哪一類的電影，恐怖片還是喜劇？","選擇疑問句，用逗號列出選項。"]],
 "gen=種類、出生|-re=名詞字尾","作品的種類 → 類型","🎬|類型"],
["medieval","adj.","中世紀的",[
 ["The town is famous for its medieval castle.","這個小鎮以中世紀城堡聞名。","be famous for + 名詞。"],
 ["Medieval paintings often show religious stories.","中世紀的畫作常常描繪宗教故事。","Medieval 修飾 paintings。"],
 ["Life in medieval Europe, when few people could read, was very hard.","在很少人識字的中世紀歐洲，生活非常辛苦。","when 引導非限定的關係副詞子句，補充說明時間。"]],
 "medi=中間|ev=時代|-al=形容詞字尾","古代和近代中間的時代 → 中世紀的","🏰|中世紀"],
["ritual","n.","儀式；例行公事",[
 ["Burning incense is a common ritual in Taiwanese temples.","燒香是台灣廟宇常見的儀式。","動名詞片語當主詞。"],
 ["Drinking coffee every morning has become my daily ritual.","每天早上喝咖啡已經成為我的日常儀式。","has become 是現在完成式。"],
 ["The ritual, which dates back to the Qing Dynasty, is still practiced today.","這項可追溯到清朝的儀式至今仍在舉行。","date back to 表示「追溯到」；is practiced 是被動。"]],
 "","","🕯️|儀式"],
["symphony","n.","交響樂",[
 ["The orchestra performed Beethoven's Ninth Symphony.","管弦樂團演奏了貝多芬第九號交響曲。","作品名稱首字母大寫。"],
 ["A symphony usually has four movements.","一首交響曲通常有四個樂章。","movement 在音樂中指「樂章」，閱讀時要靠上下文判斷字義。"],
 ["The city is a symphony of colors and sounds.","這座城市是色彩與聲音的交響曲。","a symphony of 是比喻用法，表示「豐富和諧的組合」。"]],
 "sym-=一起|phon=聲音|-y=名詞字尾","許多聲音一起響 → 交響樂","🎼|交響樂"],
["artisan","n.","工匠；手藝人",[
 ["The bowls were handmade by local artisans.","這些碗是當地工匠手工做的。","were handmade by 是被動語態。"],
 ["Artisans who make traditional lanterns are getting fewer and fewer.","製作傳統燈籠的工匠越來越少。","比較級 and 比較級 表示「越來越……」。"],
 ["The market sells artisan bread and cheese.","這個市集賣手工麵包和起司。","artisan 也能當形容詞，表示「手工製作的」。"]],
 "art=技藝|-isan=人","有技藝的人 → 工匠","🏺|工匠"],
["ancestor","n.","祖先",[
 ["Many Taiwanese families worship their ancestors during festivals.","許多台灣家庭在節慶時祭拜祖先。","worship 表示「祭拜」；ancestor 是可數名詞，常用複數。"],
 ["Our ancestors, who crossed the sea to Taiwan, worked very hard.","我們那些渡海來台的祖先非常努力。","who 引導非限定關係子句，補充說明 Our ancestors。"],
 ["Scientists believe that birds share a common ancestor with dinosaurs.","科學家相信鳥類和恐龍有共同的祖先。","share A with B 表示「和 B 共有 A」。"]],
 "an-=之前|cest=走|-or=人","走在我們前面的人 → 祖先","🏮|祖先"],
["narrative","n./adj.","敘事；敘述的",[
 ["The novel has a powerful narrative.","這本小說有很有力量的敘事。","narrative 當名詞指故事的敘述方式。"],
 ["A narrative essay tells a story in time order.","記敘文按照時間順序講一個故事。","narrative essay 表示「記敘文」，學測作文常考。"],
 ["The narrative is told from a child's point of view.","這段敘述是從一個孩子的觀點講述的。","from ... point of view 表示「從……觀點」。"]],
 "narr=敘述|-ative=形容詞或名詞字尾","敘述出來的東西 → 敘事","📖|敘事"],
["metaphor","n.","隱喻",[
 ["\"Life is a journey\" is a common metaphor.","「人生是一趟旅程」是常見的隱喻。","引號裡的句子當主詞，視為單數。"],
 ["The poet uses the moon as a metaphor for loneliness.","詩人用月亮來隱喻孤獨。","use A as a metaphor for B 表示「用 A 隱喻 B」。"],
 ["Unlike a simile, a metaphor does not use \"like\" or \"as.\"","和明喻不同，隱喻不用 like 或 as。","Unlike 表示對比；否定句中的「或」用 or。"]],
 "meta-=轉換|phor=帶","把意思帶到另一個東西上 → 隱喻","🌙|隱喻"],
/* ---------- 篇章轉折詞 ---------- */
["additionally","adv.","此外；另外",[
 ["The hotel is cheap. Additionally, it is close to the station.","這家飯店很便宜。此外，它離車站很近。","Additionally 表示補充同方向的論點，放句首後面加逗號，和 in addition 同義。"],
 ["Exercise keeps you fit; additionally, it reduces stress.","運動讓你保持健康；另外，它還能減輕壓力。","additionally 是副詞，連接兩個完整句子時前面用分號、後面用逗號。"],
 ["Additionally, the survey showed that boys and girls reacted differently.","此外，調查顯示男孩和女孩的反應不同。","閱讀時看到 Additionally，就知道後面還是支持同一個主題。"]],
 "ad-=朝向|dit=給|-ion=名詞字尾|-al=形容詞字尾|-ly=副詞字尾","再給上去一些 → 此外","➕|此外"],
["nonetheless","adv.","儘管如此；然而",[
 ["The test was difficult. Nonetheless, most students passed.","考試很難。儘管如此，大部分學生都通過了。","Nonetheless 表示轉折，和 nevertheless 同義，後面的句子才是重點。"],
 ["It was raining; nonetheless, the game continued.","當時正在下雨；然而比賽繼續進行。","nonetheless 是副詞，不能直接連接兩個句子，要用分號或句號。"],
 ["The plan has some problems. It is, nonetheless, worth trying.","這個計畫有些問題，儘管如此，還是值得一試。","nonetheless 也可以插在句中，前後加逗號。"]],
 "none=一點也不|the=那|less=較少","一點也沒有因此變少 → 儘管如此","↩️|然而"],
["namely","adv.","也就是；即",[
 ["Two students were absent, namely Amy and Tom.","有兩個學生缺席，也就是艾美和湯姆。","namely 用來具體說明前面提到的東西，前面通常加逗號。"],
 ["The study focused on one factor, namely sleep.","這項研究聚焦在一個因素上，也就是睡眠。","namely 後面的內容和 one factor 是同位關係；篇章結構題看到 namely，就知道後面在解釋前面。"],
 ["Only one thing matters to him, namely winning the game.","對他來說只有一件事重要，就是贏得比賽。","namely 後面可以接動名詞片語。"]],
 "name=名字|-ly=副詞字尾","把名字一一說出來 → 也就是","👉|也就是"],
["likewise","adv.","同樣地",[
 ["Mary saved half her salary, and her sister did likewise.","瑪莉存下一半的薪水，她妹妹也一樣這麼做。","do likewise 表示「照著做、也一樣」。"],
 ["Smoking harms your lungs. Likewise, air pollution damages your health.","抽菸傷害你的肺。同樣地，空氣污染也會傷害你的健康。","Likewise 表示「類比、同方向」，不是轉折。"],
 ["Teachers should respect students; likewise, students should respect teachers.","老師應該尊重學生；同樣地，學生也應該尊重老師。","分號連接兩個完整句子。"]],
 "like=像|wise=方式","以一樣的方式 → 同樣地","👯|同樣地"],
["thereby","adv.","因此；藉此",[
 ["He exercised every day, thereby losing ten kilos.","他每天運動，因此瘦了十公斤。","thereby + V-ing 表示「藉此而……」，後面接分詞片語。"],
 ["The city planted more trees, thereby reducing air pollution.","市政府種了更多樹，藉此減少空氣污染。","thereby reducing = and by doing so it reduced。"],
 ["Cars were banned from the area, thereby making the streets safer.","該區禁止汽車通行，因此讓街道更安全。","were banned from 是被動；thereby 引導結果。"]],
 "there=那|by=藉由","藉由那樣 → 藉此","➡️|藉此"],
["hence","adv.","因此",[
 ["The road was closed; hence, we had to take another route.","道路封閉了；因此我們必須走別條路。","hence 表示因果，等於 therefore，比較正式。"],
 ["The material is light and strong, hence its popularity.","這種材料又輕又堅固，因此很受歡迎。","hence + 名詞片語 表示「因此有……」，可以省略動詞。"],
 ["The village is far from the city; hence, few young people live there.","這個村莊離城市很遠；因此很少年輕人住在那裡。","few 表示「很少、幾乎沒有」。"]],
 "","","⏩|因此"],
/* ---------- 方向字首代表字 ---------- */
["abnormal","adj.","不正常的；反常的",[
 ["The weather this winter has been abnormal.","今年冬天的天氣很反常。","現在完成式 has been 表示一直到現在的狀態。"],
 ["The doctor found something abnormal in the X-ray.","醫生在 X 光片中發現了異常。","something + 形容詞：形容詞放在 something 後面。"],
 ["It is abnormal for a child to sleep so much.","一個孩子睡這麼多是不正常的。","It is + 形容詞 + for 人 + to V。"]],
 "ab-=離開|norm=規範|-al=形容詞字尾","離開正常規範的 → 不正常的","🌡️|異常"],
["absorb","v.","吸收；使專注",[
 ["Plants absorb carbon dioxide from the air.","植物從空氣中吸收二氧化碳。","absorb A from B 表示「從 B 吸收 A」。"],
 ["Children absorb new languages quickly.","孩子很快就能吸收新的語言。","副詞 quickly 放句尾修飾 absorb。"],
 ["Absorbed in the novel, she didn't hear the doorbell.","她沉浸在小說裡，沒聽到門鈴聲。","be absorbed in 表示「專注於」；分詞構句 Absorbed in ... = Because she was absorbed in ...。"]],
 "ab-=離開|sorb=吸","從外面吸走 → 吸收","🧽|吸收"],
["adhere","v.","遵守；黏附",[
 ["All players must adhere to the rules of the game.","所有球員都必須遵守比賽規則。","adhere to 表示「遵守、堅持」，to 是介系詞。"],
 ["The sticker won't adhere to a wet surface.","貼紙黏不上潮濕的表面。","adhere to 也可以表示「黏在……上」。"],
 ["Adhering to a healthy diet, she lost five kilos in three months.","堅持健康飲食，她三個月瘦了五公斤。","分詞構句：Adhering ... = Because she adhered ...，to 後面接名詞。"]],
 "ad-=朝向|her=黏","朝著某物黏上去 → 黏附；緊緊守住規則 → 遵守","📎|遵守"],
["accumulate","v.","累積",[
 ["Dust accumulates quickly in an empty room.","空房間裡灰塵累積得很快。","Dust 不可數，動詞加 s。"],
 ["He has accumulated a lot of experience over the years.","這些年來他累積了很多經驗。","over the years 常搭配現在完成式。"],
 ["Fat accumulated around the waist is bad for your heart.","累積在腰部的脂肪對心臟不好。","accumulated around the waist 是過去分詞片語修飾 Fat。"]],
 "ac-=朝向|cumul=堆|-ate=動詞字尾","一直往上堆 → 累積","🪙|累積"],
["descend","v.","下降；遺傳下來",[
 ["The plane began to descend toward the airport.","飛機開始朝機場下降。","begin to V；相反詞是 ascend（上升）。"],
 ["As we descended the mountain, it began to rain.","我們下山時開始下雨了。","descend 可以直接接受詞：descend the mountain。"],
 ["The family is descended from a famous general.","這個家族是一位名將的後代。","be descended from 表示「是……的後代」。"]],
 "de-=向下|scend=爬","向下爬 → 下降","🛬|下降"],
["detach","v.","分開；拆下",[
 ["Detach the form and send it back to us.","撕下這張表格寄回給我們。","祈使句；send it back 的 it 放在 send 和 back 中間。"],
 ["The handle can be detached for easy cleaning.","把手可以拆下來，方便清洗。","can be + p.p. 是助動詞被動。"],
 ["He felt detached from his classmates after moving to a new school.","轉學之後，他覺得和同學有距離感。","detached 當形容詞表示「疏離的」；after + V-ing。"]],
 "de-=分開|tach=釘、黏","把黏住的東西分開 → 拆下","✂️|拆下"],
["emerge","v.","出現；浮現",[
 ["The sun emerged from behind the clouds.","太陽從雲後面出現了。","from behind 是雙重介系詞。"],
 ["New problems emerged as the city grew.","隨著城市擴張，新的問題浮現了。","as 表示「隨著」。"],
 ["It soon emerged that the report was false.","很快就發現那份報告是假的。","It emerged that ... 表示「事實浮現、真相大白」，It 是虛主詞。"]],
 "e-=向外|merg=沉、浸","從水裡往外冒出來 → 出現","🐋|浮現"],
["evaporate","v.","蒸發；消失",[
 ["Water evaporates when it is heated.","水加熱時會蒸發。","when it is heated 是被動；當作科學事實，用現在簡單式。"],
 ["The puddles evaporated quickly in the hot sun.","水坑在大太陽下很快就蒸發了。","evaporate 是不及物動詞，沒有被動。"],
 ["His hope of winning evaporated after the first round.","第一輪之後，他贏的希望就破滅了。","evaporate 比喻「（希望、信心）消失」。"]],
 "e-=向外|vapor=蒸氣|-ate=動詞字尾","變成蒸氣跑出去 → 蒸發","♨️|蒸發"],
["extract","v./n.","提取；摘錄",[
 ["Oil is extracted from olives.","油是從橄欖中提煉出來的。","be extracted from 表示「從……提取」。"],
 ["The dentist extracted two of my teeth.","牙醫拔了我兩顆牙。","extract 也可以表示拔牙。"],
 ["Read the following extract from the novel.","閱讀以下這段小說節錄。","extract 當名詞唸 EX-tract，表示「摘錄、節錄」。"]],
 "ex-=向外|tract=拉","往外拉出來 → 提取","🫒|提取"],
["prolong","v.","延長",[
 ["Regular exercise can prolong your life.","規律運動可以延長你的壽命。","can 表示能力或可能性。"],
 ["The meeting was prolonged by a heated discussion.","會議因為激烈的討論而延長了。","was prolonged 是被動。"],
 ["Prolonged use of phones can hurt your eyes.","長時間使用手機會傷害眼睛。","過去分詞 Prolonged 當形容詞，表示「長時間的」。"]],
 "pro-=向前|long=長的","往前拉長 → 延長","⏳|延長"],
["submerge","v.","淹沒；潛入水中",[
 ["The whole village was submerged after the heavy rain.","大雨過後整個村莊都被淹沒了。","was submerged 是被動。"],
 ["The submarine submerged and disappeared from view.","潛水艇潛入水中，從視線中消失了。","submarine 和 submerge 都有 sub-（在下面）。"],
 ["Submerged under the sea for centuries, the ship was finally found.","沉在海底好幾百年後，這艘船終於被找到了。","過去分詞開頭的分詞構句，表示被動。"]],
 "sub-=在下面|merg=沉、浸","沉到下面 → 淹沒","🌊|淹沒"],
["substitute","v./n.","代替；代替品",[
 ["You can substitute honey for sugar in this recipe.","這道食譜可以用蜂蜜代替糖。","substitute A for B 表示「用 A 代替 B」：A 是新放進去的，B 是原本的，順序是學測常考陷阱。"],
 ["Mr. Lin is our substitute teacher this week.","林老師是我們這週的代課老師。","substitute teacher 表示「代課老師」，substitute 當形容詞用。"],
 ["There is no substitute for hard work.","努力是無可取代的。","There is no substitute for + 名詞 表示「……無可取代」，是作文好用句。"]],
 "sub-=在下面|stitut=放置、站立","放到下面去頂替 → 代替","🔄|代替"],
["restore","v.","恢復；修復",[
 ["The old temple has been restored to its original look.","這座老廟已被修復成原本的樣貌。","現在完成式被動 has been restored；restore A to B 表示「把 A 恢復成 B」。"],
 ["It took hours to restore power after the typhoon.","颱風過後花了好幾個小時才恢復供電。","It takes + 時間 + to V 表示「花多少時間做某事」。"],
 ["A good night's sleep can restore your energy.","一夜好眠可以讓你恢復精力。","a good night's sleep 是固定說法。"]],
 "re-=回|store=儲存","把東西放回原來的樣子 → 恢復","🛠️|修復"]
];

/* 沒有字根可拆的字：記憶小撇步 */
Object.assign(MEMO, {
  ratio:"ratio 和 rate（比率）、rational（理性的）是同一家人，都來自拉丁文「計算」。記法：rate 是「速率」，ratio 是兩個數字「比一比」。",
  folk:"folk 跟德文的 Volk（人民）同源，所以 folk 就是「一般老百姓的」：folk song 民謠、folk art 民俗藝術、folk tale 民間故事。",
  sewage:"sewage 來自 sewer（下水道）：sewer 裡流的東西就是 sewage。別和 sew（縫紉）搞混，sewer 唸 SOO-er。",
  ritual:"ritual 和 rite（典禮）是一家人：rite 是一次的典禮，ritual 是一再重複、固定程序的「儀式」，每天早上的咖啡也能是你的 ritual。",
  hence:"hence 原本是「從這裡（離開）」：從這一點出發，推出結果 → 因此。記法：hen（母雞）+ ce，母雞下了蛋，因此有小雞。"
});

const S3_X_GRAMMAR = [
{ id:"g1", title:"詞彙題與綜合測驗：看詞性、看搭配、看時態語態、看連接詞邏輯",
  intro:"學測詞彙題和綜合測驗不是單純背單字，而是用四個步驟一層一層刪去選項：先看空格需要什麼詞性，再看前後的固定搭配，接著檢查時態和主被動，最後用連接詞判斷前後句的邏輯關係。",
  table:[["步驟","要看什麼","例子"],["1. 看詞性","空格前後的位置：冠詞後接名詞、be 後接形容詞、副詞修飾動詞","a prominent ___ → 名詞 role"],["2. 看搭配","介系詞、動詞和名詞的固定組合","be relevant to、in proportion to、contribute to"],["3. 看時態與語態","時間副詞、主詞是不是「被」做","since 2020 → 現在完成式；The data ___ analyzed → was"],["4. 看連接詞邏輯","前後句是順接、轉折、因果還是對比","However 後面接相反的意思"]],
  points:[
   "詞彙題先刪掉詞性不對的選項，四選一常常立刻變成二選一。",
   "搭配題要看「空格後面的介系詞」：be abundant in、adhere to、be compatible with，介系詞常常就是答案的提示。",
   "主詞動詞一致陷阱：The proportion of students is…（看 proportion）；A large proportion of students are…（看 students）。",
   "語態陷阱：主詞是事物時多半是被動，It is estimated that…、The data were collected…。",
   "連接詞陷阱：although 和 but 不能同時出現；because of 後面接名詞，because 後面接子句。",
   "綜合測驗要看整段：空格的答案常常要往前一兩句或往後一兩句找線索，不能只看那一句。"],
  ex:[
   ["Social media plays a prominent role in young people's lives.","社群媒體在年輕人的生活中扮演重要的角色。","a prominent ___ 中間要名詞 role；play a role in 是固定搭配。"],
   ["The proportion of elderly people in the population is rising.","人口中老年人的比例正在上升。","主詞是 The proportion（單數），動詞用 is。"],
   ["It is estimated that one million tourists visit the island every year.","據估計，每年有一百萬名觀光客造訪這座島。","主詞 It 是虛主詞，估計的動作是「被做」的，用被動 is estimated。"],
   ["The island is abundant in natural resources.","這座島擁有豐富的天然資源。","be abundant in 是固定搭配，in 是提示。"],
   ["The test was difficult. Nonetheless, most students passed.","考試很難。儘管如此，大部分學生都通過了。","前面說難、後面說通過：轉折關係，用 Nonetheless。"]]},
{ id:"g2", title:"文意選填：先分詞性，再看語意和上下文線索",
  intro:"文意選填是十個選項填十個空格。最有效的方法是先把選項依詞性分組，再判斷每個空格需要的詞性，最後用語意和上下文線索決定答案。",
  table:[["步驟","做法","提示"],["1. 選項分組","把 10 個選項分成名詞、動詞、形容詞、副詞","動詞再分原形、過去式、V-ing、p.p."],["2. 判斷空格詞性","看空格前後的字","the ___ of → 名詞；is very ___ → 形容詞"],["3. 對照數量","名詞看單複數，動詞看主詞和時態","a ___ → 單數可數名詞；they ___ed → 過去式"],["4. 看語意線索","同義詞、反義詞、舉例、因果","not A but B、such as、because"],["5. 先易後難","有把握的先填，剩下的再用刪去法","每個選項只能用一次"]],
  points:[
   "第一步一定先分詞性，不要一題一題從頭猜；分組後每一格只剩兩三個選項。",
   "看單複數：a / an / one / each 後面接單數名詞，many / several / these 後面接複數名詞。",
   "動詞看形式：have / has 後面接 p.p.，to 後面接原形，be 後面接 V-ing 或 p.p.。",
   "語意線索：and 前後意思相近，but / while / whereas 前後意思相反，such as 後面是前面的例子。",
   "同一段文章的用字會重複出現：前面講 pollution，空格可能要 pollutant 或 contaminate。",
   "陷阱：選項裡常有兩個同詞性又意思相近的字（例如 absorb 和 extract），要看方向和受詞精準判斷。"],
  ex:[
   ["A large proportion of teenagers spend over three hours online every day.","很大比例的青少年每天上網超過三小時。","a large ___ of 中間要單數名詞：proportion。"],
   ["The survey reveals that most students feel stressed before exams.","調查顯示大部分學生考前感到壓力。","The survey ___ that：主詞單數、後接 that 子句，需要現在式加 s 的動詞。"],
   ["Some people love cities, whereas others prefer the countryside.","有些人喜歡城市，然而另一些人偏好鄉村。","whereas 前後對比：love 和 prefer 的對象相反。"],
   ["Many variables, such as diet and stress, affect our health.","許多變數，例如飲食和壓力，會影響我們的健康。","such as 後面是例子：diet and stress 是 variables 的例子。"],
   ["Unlike plastic, paper is biodegradable.","和塑膠不同，紙可以被生物分解。","Unlike 表示對比：塑膠不能分解，紙可以，所以填 biodegradable。"]]},
{ id:"g3", title:"篇章結構與閱讀測驗：轉折詞、指代、主旨題與推論題",
  intro:"篇章結構要把抽出的句子放回文章，閱讀測驗要找主旨、細節和推論。兩種題型都靠同一套功夫：看轉折詞判斷方向，看指代詞找前後連結，再分清楚「文中寫的」和「可以推出來的」。",
  table:[["線索","代表字","怎麼用"],["補充","additionally、in addition、likewise","後面接同方向的論點"],["說明","namely、that is、in other words","後面解釋前面提到的東西"],["轉折","however、nonetheless、yet、whereas","後面的意思和前面相反，常是重點"],["因果","therefore、hence、thereby、as a result","後面是結果"],["順序","first、then、subsequently、finally","排出時間或步驟的順序"],["指代","this / such / these + N、it、they","前一句一定有對應的內容"]],
  points:[
   "篇章結構：抽出的句子如果以 This / Such / These + 名詞開頭，前一句一定提到了這個名詞的內容。",
   "轉折詞後面才是作者真正想說的：However、Nonetheless 後面的句子常常是主旨。",
   "主旨題（main idea / best title）看第一段和最後一段，答案要「全面」，不能只是某一段的細節。",
   "推論題（imply / infer / suggest）的答案不會原句出現在文中，但一定能從文中找到根據；太絕對的選項（always、never、all）通常是錯的。",
   "指代題（What does \"it\" refer to?）往前找最近、而且單複數相符的名詞。",
   "生字題看上下文：同位語、舉例、對比、定義句都能幫你猜出字義。"],
  ex:[
   ["Plastic takes centuries to break down, whereas paper takes only months.","塑膠要幾百年才能分解，而紙只要幾個月。","whereas 表示對比，前後內容一定相反。"],
   ["The city planted more trees, thereby reducing air pollution.","市政府種了更多樹，藉此減少空氣污染。","thereby 後面接結果。"],
   ["The study focused on one factor, namely sleep.","這項研究聚焦在一個因素上，也就是睡眠。","namely 後面是在解釋前面的 one factor，篇章結構題的重要線索。"],
   ["What can be inferred from the passage?","從這篇文章可以推論出什麼？","推論題的固定問法，答案要能從文中找到根據。"],
   ["Correlation does not necessarily mean cause and effect.","相關不一定代表因果關係。","推論陷阱：兩件事一起出現，不代表一件事造成另一件事。"]]},
{ id:"g4", title:"混合題、翻譯和作文的得分重點：關鍵句型總整理",
  intro:"混合題要看懂圖表、照題目要求寫出單字或句子；翻譯和作文則要把高中三年學過的句型用出來。重點是：拼字正確、時態一致、句型有變化。",
  table:[["題型","得分重點","常用句型"],["混合題","照題目規定作答（填一個字、寫完整句），拼字和詞性要對","According to the chart, ... ；The percentage of ... rose to ..."],["翻譯","先找主詞和動詞，再補時態和修飾語","It is estimated that ...；Not until ... did ..."],["作文：說明數據","描述趨勢和比較","A large proportion of ...；..., whereas ..."],["作文：加分句型","高一到高三的進階句型","It is ... that 強調句、分詞構句、假設語氣、倒裝句"]],
  points:[
   "混合題常要求「從文中找一個字」：要照原文抄，詞性和單複數要符合空格，拼錯一個字母就沒分。",
   "翻譯題先抓主要子句的主詞和動詞，中文的「被」「有」「是」不一定要翻出來，例如「據估計」翻 It is estimated that。",
   "描述圖表：rise / increase to + 數字（漲到）、by + 數字（漲了）；the number of + 複數名詞，動詞用單數。",
   "作文段落要有連接詞：先 First / To begin with，補充 Additionally，轉折 Nonetheless，結論 Hence / In conclusion。",
   "加分句型（複習高一到高三）：It is ... that 強調句、Not until ... did ...、Having + p.p. 分詞構句、If ... had p.p., ... would have p.p.、not only ... but also ...。",
   "常見扣分：主詞動詞不一致、時態前後亂跳、一個句子有兩個動詞卻沒有連接詞（run-on sentence）。"],
  ex:[
   ["According to official statistics, the birth rate in Taiwan has dropped sharply.","根據官方統計數字，台灣的出生率大幅下降。","說明數據的標準開頭：According to + 來源。"],
   ["It is the statistics, not personal opinions, that convince the readers.","說服讀者的是統計數字，而不是個人意見。","It is ... that 強調句，作文加分句型。"],
   ["It was not until the end of the story that the truth was revealed.","直到故事的最後，真相才被揭曉。","It was not until ... that ... 是翻譯題常考句型。"],
   ["Biodegradable as it is, the cup still takes months to break down.","雖然這杯子是可分解的，但仍要好幾個月才能分解。","形容詞 + as + 主詞 + 動詞 表示讓步，比 Although 更有變化。"],
   ["The building is not only practical but also aesthetic.","這棟建築不但實用，而且美觀。","not only ... but also ... 前後要平行。"]]}
];

const S3_X_QUIZ = [
 /* g1 詞彙題與綜合測驗 */
 ["Social media plays a ___ role in young people's lives.",["prominent","prominence","prominently","promote"],0,"空格在冠詞 a 和名詞 role 之間，要形容詞 prominent。先看詞性就能刪去另外三個。","g1"],
 ["This charger is not ___ with my laptop, so I can't use it.",["accessible","compatible","abundant","hazardous"],1,"be compatible with 表示「和……相容」；accessible 搭配 to，abundant 搭配 in，hazardous 搭配 to。看介系詞 with 就能選。","g1"],
 ["A large proportion of the students ___ part-time jobs.",["has","is having","have","having"],2,"a proportion of + 複數名詞，動詞看 of 後面的 the students（複數），用 have。","g1"],
 ["The data ___ from 3,000 high school students last year.",["collected","were collecting","have collected","were collected"],3,"資料是「被收集」的，last year 用過去式：were collected。主詞是事物時先想被動。","g1"],
 ["The road was blocked by fallen trees; ___, we had to turn back.",["hence","whereas","likewise","nonetheless"],0,"路被擋住，所以只好回頭：因果關係，用 hence。","g1"],
 ["You can ___ honey for sugar in this recipe.",["absorb","extract","substitute","restore"],2,"看到後面的 for 就想到 substitute A for B（用 A 代替 B）：用蜂蜜代替糖。","g1"],
 ["The punishment should be in ___ to the seriousness of the crime.",["proportion","percentage","category","dimension"],0,"in proportion to 是固定搭配，表示「與……成比例」。","g1"],
 ["___ the heavy rain, the outdoor concert went on as planned.",["Because","Although","Despite","Whereas"],2,"空格後面是名詞片語 the heavy rain，不是子句，要用介系詞 Despite；Although 和 Because 後面要接子句。","g1"],
 ["Water ___ quickly in hot weather, so remember to water the plants.",["emerges","descends","detaches","evaporates"],3,"天氣熱時水很快「蒸發」，所以記得澆花：evaporate。","g1"],
 /* g2 文意選填 */
 ["Scientists sent a robot to ___ the ocean floor.",["quantity","magnitude","probe","fraction"],2,"to 後面要動詞原形，四個選項只有 probe（探查）是動詞，其他三個都是名詞。先分詞性就能直接選出來。","g2"],
 ["The ___ of the survey showed that most people support the plan.",["respond","respondent","responded","results"],3,"The ___ of the survey showed：需要名詞，而且動詞 showed 前面的主詞意思是「調查的結果」：results。respondent 是名詞但語意不對（受訪者不能 of the survey 顯示）。","g2"],
 ["Many ___, such as age and income, affect how people vote.",["variables","variable","vary","variably"],0,"Many 後面接複數名詞：variables；such as 後面是例子。","g2"],
 ["Unlike glass, which takes thousands of years to break down, this new material is ___.",["toxic","biodegradable","hazardous","abstract"],1,"Unlike 表示對比：玻璃要幾千年才分解，新材料正好相反，是可分解的 biodegradable。","g2"],
 ["The village has an ___ supply of fresh water, so it never suffers from drought.",["abundant","abstract","abnormal","aesthetic"],0,"後面說「從不缺水」，所以水源是「豐富的」abundant；an 後面接母音開頭的形容詞。","g2"],
 ["The team ___ the results carefully before publishing the report.",["analysis","analyzed","analyze","analytical"],1,"主詞 The team 後面需要動詞，句子是過去發生的事（before publishing the report），用過去式 analyzed。","g2"],
 ["Chemicals and other ___ from the factory have turned the river black.",["radiation","vegetation","legacy","pollutants"],3,"and other ___ 前面是 Chemicals，要填同一類、而且是複數的名詞；讓河水變黑的是「污染物」pollutants。and 前後意思相近是文意選填的重要線索。","g2"],
 ["Some students prefer working alone, ___ others enjoy group work.",["thereby","additionally","whereas","hence"],2,"前後是對比（喜歡獨自 vs. 喜歡團體），而且空格連接兩個子句，要用連接詞 whereas；additionally、hence、thereby 是副詞，不能連接兩個子句。","g2"],
 ["On Tomb Sweeping Day, families clean the graves of their ___ to show respect.",["ancestors","pollutants","artisans","respondents"],0,"of their ___ 要複數名詞；清明節掃墓、表示尊敬的對象是祖先 ancestors。","g2"],
 /* g3 篇章結構與閱讀測驗 */
 ["Many teenagers stay up late playing games. ___ This habit can harm both their health and their grades.",["Additionally, adults enjoy sports.","However, games are fun.","It was invented in 1990.","Such behavior often leads to a lack of sleep."],3,"後一句的 This habit 和前面的「熬夜玩遊戲」要連起來；Such behavior 承接前一句，並帶出 lack of sleep，最符合邏輯。","g3"],
 ["Exercise strengthens your heart. ___, it improves your mood.",["Nonetheless","Whereas","Additionally","Instead"],2,"前後都在說運動的好處，是同方向的補充：Additionally。","g3"],
 ["The scientist worked on the project for ten years. ___, she won a major prize for her discovery.",["Subsequently","Likewise","Whereas","Otherwise"],0,"先研究十年，後來得獎：時間順序，用 Subsequently（隨後）。","g3"],
 ["\"Ice cream sales and drowning accidents both rise in summer.\" Which of the following can be inferred?",["Eating ice cream causes drowning.","People should not eat ice cream.","Two things can be related without one causing the other.","Drowning never happens in winter."],2,"推論題陷阱：相關不等於因果，兩者都因為「夏天」增加。太絕對的選項（never）和不合理的因果都不能選。","g3"],
 ["Which question is asking about the MAIN IDEA of a passage?",["What does \"it\" in line 5 refer to?","What does the word \"abundant\" mean?","When did the event happen?","Which is the best title for the passage?"],3,"主旨題最常問 best title 或 main idea，要看全文，尤其是第一段和最後一段。","g3"],
 ["The town banned cars from the old street, ___ making it safer for tourists.",["whereas","thereby","although","because"],1,"thereby + V-ing 表示「藉此而……」，後面接結果。","g3"],
 ["\"Bees are disappearing. ___ problem could threaten the world's food supply.\" 空格最適合填？",["This","These","Those","It's"],0,"指代：前一句說的是一件事（蜜蜂消失），problem 是單數名詞，用 This + N 承接。","g3"],
 ["In a reading passage, the sentence after \"However\" is usually ___.",["an example that supports the previous sentence","an idea opposite to the previous sentence","the title of the passage","a list of numbers"],1,"However 是轉折詞，後面接和前面相反的意思，常常是作者真正的重點。","g3"],
 ["\"The mayor said little about the plan, and he avoided answering reporters' questions.\" What does this imply?",["The mayor may have doubts about the plan.","The mayor fully supported the plan.","The mayor answered every question.","The reporters supported the mayor."],0,"推論：說得少、避開問題，暗示他可能有疑慮；選項 A、C 和文意矛盾。","g3"],
 /* g4 混合題、翻譯和作文 */
 ["據估計，每年有一百萬人造訪這個城市。→ ___ that one million people visit the city every year.",["It estimates","It is estimated","They are estimated","It was estimating"],1,"「據估計」翻成 It is estimated that ...，虛主詞加被動。","g4"],
 ["直到讀完整篇文章，我才了解作者的意思。→ ___ I finished the whole article that I understood the author's meaning.",["It was until","Not until","It was not until","Until it was"],2,"It was not until ... that ... 是「直到……才……」的強調句型。","g4"],
 ["According to the chart, the number of smartphone users ___ to 20 million in 2023.",["rose","raised","were rising","have risen"],0,"rise 是不及物動詞，表示「上升到」，in 2023 用過去式 rose；raise 是及物動詞，後面要接受詞。the number of ... 視為單數，不能用 were 或 have。","g4"],
 ["雖然這個計畫很昂貴，但它很值得。→ ___, the plan is worth it.",["As expensive it is","It is expensive as","Expensive as it is","Expensive it is as"],2,"形容詞 + as + 主詞 + 動詞 表示讓步：Expensive as it is = Although it is expensive。","g4"],
 ["Which sentence is CORRECT?",["The results was surprising.","The number of tourists have increased.","A number of students has joined the club.","The percentage of smokers has decreased."],3,"The percentage of ... 主詞是 percentage（單數），用 has；results 是複數要用 were；the number of 用單數；a number of 用複數。","g4"],
 ["The new park is not only beautiful ___ useful for the community.",["and also","but also","as well","or"],1,"not only ... but also ... 是固定搭配，前後要平行（兩個形容詞）。","g4"],
 ["___ the report, she found three serious mistakes.",["Read","Having been read","To have read","Having read"],3,"先讀報告、才發現錯誤，主詞她是主動讀：Having read（完成式分詞構句）。","g4"],
 ["混合題：「Find ONE word in the passage that means 'a person who answers a survey.'」最適合的答案是？",["questionnaire","respondent","response","respond"],1,"題目要「人」：respondent（受訪者）；questionnaire 是問卷，response 是回應，respond 是動詞。","g4"],
 ["If the factory ___ its waste properly, the river would not have been polluted.",["treats","had treated","would treat","treated"],1,"主要子句是 would not have been（與過去事實相反），If 子句用 had + p.p.。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S3_X_CLASS = {
g1:[
 {say:"高三同學好！學測倒數中，安安老師今天先帶你破解詞彙題和綜合測驗。很多人以為詞彙題只能靠背單字，其實有四個步驟可以幫你刪選項：看詞性、看搭配、看時態語態、看連接詞邏輯。", board:[["1. 看詞性 → 2. 看搭配",["詞性","搭配"]],["3. 看時態語態 → 4. 看連接詞",["時態語態","連接詞"]]]},
 {say:"四步驟口訣先背起來！", chant:"詞性、搭配、時態、邏輯，四步刪刪刪！"},
 {say:"第一步看詞性。看這題：{Social media plays a ___ role.} 空格在 a 和名詞 role 中間，一定是形容詞！選項裡 prominence 是名詞、promote 是動詞、prominently 是副詞，一秒刪光，只剩 prominent。", board:[["a ___ role → 形容詞",["形容詞"]],["prominent ✔　prominence ✘　prominently ✘",["prominent"]]]},
 {ask:{say:"換你試試！", q:"The scientists made an important ___ about the virus.", opts:["discover","discovery","discovered"], ans:1,
   ok:"對！an important 後面要名詞：discovery。", bad:{0:"discover 是動詞，冠詞 an 和形容詞 important 後面要接名詞喔。",2:"discovered 是過去式或過去分詞，這裡需要名詞 discovery。"},
   again:{q:"She answered the question ___.", opts:["confident","confidently","confidence"], ans:1, exp:"修飾動詞 answered 要用副詞 confidently。"}}},
 {say:"第二步看搭配。空格後面的介系詞就是最大的提示！{be abundant in}、{adhere to}、{be compatible with}、{in proportion to}。四個字意思不同，但介系詞一看就知道答案。", board:[["be abundant in",["in"]],["adhere to",["to"]],["be compatible with",["with"]],["in proportion to",["to"]]]},
 {ask:{q:"This charger is not ___ with my laptop.", opts:["accessible","compatible","abundant"], ans:1,
   ok:"讚！看到 with 就想到 be compatible with。", bad:{0:"accessible 搭配 to：be accessible to。這裡是 with。",2:"abundant 搭配 in：be abundant in。這裡是 with。"},
   again:{q:"All players must ___ to the rules.", opts:["adhere","compatible","abundant"], ans:0, exp:"adhere to 表示「遵守」；compatible 搭配 with，abundant 搭配 in。"}}},
 {say:"第三步看時態和語態。主詞是事物時，先想想它是不是「被」做的。{The data were collected last year.} 資料不會自己收集，所以用被動。還有主詞動詞一致的大陷阱：{The proportion of students is rising.} 主詞是 proportion，用 is；但是 {A large proportion of students are…} 要看 students，用 are。", board:[["The data were collected last year.",["were collected"]],["The proportion of students is rising.",["proportion","is"]],["A large proportion of students are ...",["students","are"]]]},
 {say:"主詞動詞一致的口訣！", chant:"the 比例看比例，a 比例 of 看後面！"},
 {ask:{q:"The percentage of smokers ___ dropped in recent years.", opts:["have","has","are"], ans:1,
   ok:"正確！The percentage of ... 主詞是 percentage，單數用 has。", bad:{0:"小心陷阱！主詞是 The percentage（單數），不是 smokers。",2:"dropped 前面要用完成式助動詞 has，而且主詞是單數。"},
   again:{q:"A large proportion of the students ___ part-time jobs.", opts:["has","have"], ans:1, exp:"a proportion of + 複數名詞，動詞看 the students，用 have。"}}},
 {say:"第四步看連接詞邏輯。前後是順接、轉折、因果還是對比？前面說難、後面說通過，就是轉折：{The test was difficult. Nonetheless, most students passed.}", board:[["The test was difficult. Nonetheless, most students passed.",["Nonetheless"]]]},
 {say:"還有一個超常考的陷阱：Despite 和 Although 意思一樣，但 Despite 後面接名詞，Although 後面接子句！{Despite the rain} 對，{Although it rained} 也對。", board:[["Despite the heavy rain, ...",["Despite"]],["Although it rained heavily, ...",["Although"]]]},
 {ask:{say:"最後一題！", q:"___ the heavy rain, the concert went on as planned.", opts:["Although","Despite","Because"], ans:1,
   ok:"太強了！the heavy rain 是名詞片語，要用介系詞 Despite。", bad:{0:"Although 後面要接子句（主詞＋動詞），the heavy rain 只是名詞喔。",2:"Because 意思不對（下雨所以照常舉行？），而且後面要接子句。"},
   again:{q:"The road was blocked; ___, we had to turn back.", opts:["hence","whereas"], ans:0, exp:"路被擋住，所以回頭：因果關係用 hence。"}}},
 {say:"詞彙題和綜合測驗過關！口訣複習：詞性、搭配、時態、邏輯，四步刪刪刪；the 比例看比例，a 比例 of 看後面；Despite 接名詞，Although 接子句！", end:true}
],
g2:[
 {say:"今天要攻略文意選填！十個選項、十個空格，看起來很嚇人，但只要照步驟來，其實是最好拿分的題型。第一步：先把十個選項按詞性分組！", board:[["名詞：proportion、variables、results",["名詞"]],["動詞：probe、analyzed、reveals",["動詞"]],["形容詞：abundant、biodegradable",["形容詞"]]]},
 {say:"分組口訣！", chant:"先分詞性再看空，一格只剩兩三個！"},
 {say:"第二步判斷空格的詞性。看前後的字：{the ___ of} 中間是名詞；{is very ___} 後面是形容詞；{They ___ the data} 中間是動詞。", board:[["the ___ of → 名詞",["名詞"]],["is very ___ → 形容詞",["形容詞"]],["They ___ the data → 動詞",["動詞"]]]},
 {ask:{q:"The ___ of the survey showed that most people agree.", opts:["results","analyze","abundant"], ans:0,
   ok:"對！the 和 of 中間要名詞，而且 showed 的主詞是「結果」：results。", bad:{1:"analyze 是動詞，the 和 of 中間要名詞喔。",2:"abundant 是形容詞，這裡需要名詞。"},
   again:{q:"The village has an ___ supply of water.", opts:["abundant","abundance"], ans:0, exp:"an 和名詞 supply 中間要形容詞 abundant。"}}},
 {say:"第三步看單複數和動詞形式。a / each 後面接單數名詞，many / several 後面接複數名詞；have 後面接 p.p.，to 後面接原形。", board:[["Many ___ → 複數名詞 variables",["Many","variables"]],["has ___ → p.p. accumulated",["has","accumulated"]],["to ___ → 原形 replicate",["to","replicate"]]]},
 {ask:{q:"Many ___, such as age and income, affect how people vote.", opts:["variable","variables","vary"], ans:1,
   ok:"讚！Many 後面接複數名詞：variables。", bad:{0:"Many 後面要接複數名詞，variable 少了 s。",2:"vary 是動詞，Many 後面要接名詞。"},
   again:{q:"He has ___ a lot of experience.", opts:["accumulate","accumulated"], ans:1, exp:"has 後面接過去分詞 accumulated。"}}},
 {say:"第四步看語意線索！and 前後意思相近；but、while、whereas 前後相反；such as 後面是例子；Unlike 表示對比。{Unlike plastic, paper is biodegradable.} 塑膠不能分解，紙相反，所以是可分解的。", board:[["Unlike plastic, paper is biodegradable.",["Unlike","biodegradable"]],["Some love cities, whereas others prefer the countryside.",["whereas"]]]},
 {say:"語意線索口訣！", chant:"and 同方向，whereas 唱反調，such as 舉例子！"},
 {ask:{q:"Unlike glass, which takes thousands of years to break down, this material is ___.", opts:["toxic","biodegradable","hazardous"], ans:1,
   ok:"太好了！Unlike 表示對比：玻璃很難分解，這種材料可以分解。", bad:{0:"toxic 是有毒的，和「玻璃難分解」不是對比關係。",2:"hazardous 是危險的，和前面的「難分解」沒有對比。"},
   again:{q:"Families clean the graves of their ___ on Tomb Sweeping Day.", opts:["ancestors","artisans"], ans:0, exp:"掃墓的對象是祖先 ancestors。"}}},
 {say:"最後一個大陷阱：選項裡常有兩個同詞性、意思又很像的字，例如 absorb 和 extract。absorb 是「吸進來」，extract 是「拉出去、提取」，方向剛好相反。看句子的方向來判斷！", board:[["Plants absorb water from the soil.（吸進來）",["absorb"]],["Oil is extracted from olives.（拉出去）",["extracted"]]]},
 {ask:{say:"最後一題！", q:"A sponge can ___ a lot of water.", opts:["extract","absorb","emit"], ans:1,
   ok:"完美！海綿把水吸進來：absorb。", bad:{0:"extract 是把東西拉出來、提取，方向相反喔。",2:"emit 是往外排放，海綿是把水吸進來。"},
   again:{q:"Oil is ___ from olives.", opts:["extracted","absorbed"], ans:0, exp:"從橄欖裡把油「拉出來」：extracted。"}}},
 {say:"文意選填過關！口訣：先分詞性再看空，一格只剩兩三個；and 同方向，whereas 唱反調，such as 舉例子。記得有把握的先填，剩下的用刪去法！", end:true}
],
g3:[
 {say:"今天練篇章結構和閱讀測驗！這兩種題型都靠「線索」。第一種線索是轉折詞，它就像路標，告訴你文章接下來要往哪裡走。", board:[["補充：additionally、likewise",["additionally","likewise"]],["轉折：however、nonetheless",["however","nonetheless"]],["因果：hence、thereby",["hence","thereby"]],["順序：subsequently、finally",["subsequently"]]]},
 {say:"轉折詞口訣！", chant:"補充往前走，轉折要回頭，因果看結果！"},
 {ask:{q:"Exercise strengthens your heart. ___, it improves your mood.", opts:["Nonetheless","Additionally","Whereas"], ans:1,
   ok:"對！前後都在說運動的好處，是補充：Additionally。", bad:{0:"Nonetheless 是轉折，但前後都是好處，沒有相反喔。",2:"Whereas 是連接詞，後面要接子句來對比，不能單獨放句首加逗號；而且這裡沒有對比。"},
   again:{q:"The test was hard. ___, most students passed.", opts:["Nonetheless","Likewise"], ans:0, exp:"難卻通過：轉折，用 Nonetheless。"}}},
 {say:"第二種線索是指代。篇章結構的選項如果用 {This}、{Such}、{These} 加名詞開頭，前一句一定有對應的內容！例如：Many teens stay up late playing games. {Such behavior} often leads to a lack of sleep.", board:[["Many teens stay up late playing games.",["stay up late"]],["Such behavior often leads to a lack of sleep.",["Such behavior"]]]},
 {say:"指代口訣！", chant:"看到 this、such、these，往前找它指誰！"},
 {ask:{q:"Bees are disappearing. ___ problem could threaten our food supply.", opts:["This","These","Those"], ans:0,
   ok:"讚！前面是一件事，problem 是單數，用 This。", bad:{1:"These 後面要接複數名詞，problem 是單數喔。",2:"Those 是複數而且指比較遠的東西，這裡用 This 承接前一句。"},
   again:{q:"What does \"it\" usually refer to?", opts:["前面最近、單複數相符的名詞","文章的標題"], ans:0, exp:"代名詞往前找最近、單複數相符的名詞。"}}},
 {say:"第三種是主旨題。問 main idea 或 best title 時，看第一段和最後一段，答案要能涵蓋全文，不能只是某一段的小細節。", board:[["main idea / best title → 看首段和末段",["main idea","best title"]]]},
 {say:"第四種是推論題，問法是 {imply}、{infer}、{suggest}。答案不會原句出現，但一定能在文中找到根據。太絕對的選項，像 always、never、all，通常是錯的！", board:[["What can be inferred from the passage?",["inferred"]],["always / never / all → 小心！",["always","never","all"]]]},
 {say:"推論題口訣！", chant:"推論有根據，絕對字要小心！"},
 {ask:{q:"「冰淇淋銷量和溺水事故都在夏天增加。」可以推論出什麼？", opts:["吃冰淇淋會造成溺水","兩件事可能相關，但不一定互為因果","夏天以外不會有人溺水"], ans:1,
   ok:"完全正確！相關不等於因果，兩者都是因為夏天天氣熱。", bad:{0:"這是學測最愛的陷阱：相關不代表因果喔！",2:"太絕對了！文中沒有根據說其他季節不會溺水。"},
   again:{q:"The mayor avoided answering questions about the plan. This implies he ___.", opts:["may have doubts about the plan","loves the plan"], ans:0, exp:"避開問題暗示他可能有疑慮。"}}},
 {say:"最後提醒：However、Nonetheless 後面的句子常常是作者真正的重點，讀文章時看到轉折詞，要特別放慢速度。", board:[["..., However, + 作者的重點",["However"]]]},
 {ask:{say:"最後一題！", q:"The scientist studied for ten years. ___, she won a major prize.", opts:["Subsequently","Likewise","Whereas"], ans:0,
   ok:"完美！先研究、後得獎，時間順序用 Subsequently。", bad:{1:"Likewise 是「同樣地」，前後不是類比關係。",2:"whereas 是對比用的連接詞，這裡是時間順序。"},
   again:{q:"The city planted trees, ___ reducing air pollution.", opts:["thereby","whereas"], ans:0, exp:"thereby + V-ing 表示「藉此而……」。"}}},
 {say:"篇章結構和閱讀測驗過關！口訣：補充往前走，轉折要回頭，因果看結果；看到 this、such、these 往前找；推論有根據，絕對字要小心！", end:true}
],
g4:[
 {say:"最後一堂文法課：混合題、翻譯和作文！這三種是非選題，拼錯字、時態錯都會扣分。安安老師教你把高中三年的句型一次用上。先看混合題。", board:[["Find ONE word in the passage ...",["ONE word"]],["照規定作答：字數、詞性、單複數",["字數","詞性","單複數"]]]},
 {say:"混合題常要你從文章裡找一個字。記得：照原文抄，詞性和單複數要符合題目，拼錯一個字母就沒分！", chant:"照題目、抄原文、詞性單複數都要對！"},
 {ask:{q:"Find ONE word in the passage that means \"a person who answers a survey.\"", opts:["questionnaire","respondent","respond"], ans:1,
   ok:"對！題目要的是「人」：respondent。", bad:{0:"questionnaire 是「問卷」，不是人喔。",2:"respond 是動詞，題目要的是名詞「人」。"},
   again:{q:"描述圖表：「人數上升到兩千萬」用哪一個？", opts:["rose to 20 million","raised to 20 million"], ans:0, exp:"rise 不及物，表示「上升」；raise 要接受詞。"}}},
 {say:"描述圖表的句型：{The number of users rose to 20 million.} 漲到用 to，漲了多少用 by。the number of 是單數，a number of 是複數，別搞混！", board:[["The number of users rose to 20 million.",["The number of","rose to"]],["Prices rose by 10 percent.",["rose by"]]]},
 {say:"再來是翻譯。祕訣是先找主詞和動詞，中文的「據……」常常要用虛主詞句型。「據估計」就是 {It is estimated that}。", board:[["據估計，每年有一百萬人造訪……",[]],["It is estimated that one million people visit ...",["It is estimated that"]]]},
 {ask:{q:"直到讀完文章，我才了解作者的意思。→ ___ I finished the article that I understood.", opts:["It was until","It was not until","Not until"], ans:1,
   ok:"讚！「直到……才……」用 It was not until ... that ...。", bad:{0:"少了 not！句型是 It was not until ... that ...。",2:"Not until 放句首要倒裝（Not until ... did I understand），而且後面不接 that。"},
   again:{q:"「據說」翻成？", opts:["It is said that","It says that"], ans:0, exp:"「據說」用被動：It is said that ...。"}}},
 {say:"最後是作文。安安老師幫你整理加分句型，這些都是高一到高三學過的：It is ... that 強調句、Not until 倒裝、Having p.p. 分詞構句、與過去相反的假設語氣、not only ... but also。", board:[["It is the statistics that convince readers.",["It is","that"]],["Having read the report, she found mistakes.",["Having read"]],["If he had studied, he would have passed.",["had studied","would have passed"]]]},
 {say:"再送你一個高級的讓步句型：形容詞 + as + 主詞 + 動詞。{Expensive as it is, the plan is worth it.} 等於 Although it is expensive，但更有變化！", board:[["Expensive as it is, the plan is worth it.",["Expensive as it is"]]]},
 {say:"作文口訣！", chant:"句型有變化，時態要一致，連接詞串起來！"},
 {ask:{q:"雖然這個計畫很昂貴，但它很值得。→ ___, the plan is worth it.", opts:["Expensive as it is","As expensive it is","It is expensive as"], ans:0,
   ok:"太棒了！形容詞放最前面：Expensive as it is。", bad:{1:"順序錯了，形容詞要放在 as 前面：Expensive as it is。",2:"順序錯了，句型是「形容詞 + as + 主詞 + 動詞」。"},
   again:{q:"The park is not only beautiful ___ useful.", opts:["but also","and also"], ans:0, exp:"not only ... but also ... 是固定搭配。"}}},
 {say:"最常見的扣分原因：主詞動詞不一致、時態亂跳、兩個句子直接用逗號連在一起沒有連接詞。寫完一定要檢查！", board:[["✘ I like reading, it is fun.",[],true],["✔ I like reading because it is fun.",["because"]]]},
 {ask:{say:"最後一題！", q:"Which sentence is CORRECT?", opts:["The results was surprising.","The number of tourists have increased.","The percentage of smokers has decreased."], ans:2,
   ok:"完美！The percentage of ... 主詞是單數，用 has。", bad:{0:"results 是複數，要用 were。",1:"the number of 是單數主詞，要用 has。"},
   again:{q:"I like reading, ___ it is fun.", opts:["because","it"], ans:0, exp:"兩個子句要用連接詞連起來：because。"}}},
 {say:"非選題過關！口訣：照題目、抄原文；句型有變化，時態要一致，連接詞串起來。學測加油，安安老師相信你！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S3_X_ROOTS = [
  {id:"r1", title:"方向字首總整理：ab- / ad- / de- / e(x)- / pro- / re- / sub- / trans-"},
  {id:"r2", title:"學測常考字根總整理（18 個字根＋代表字）"},
  {id:"r3", title:"字尾判斷詞性總複習：-tion / -ity / -ment / -ive / -ous / -al / -ize / -ify / -ly"},
  {id:"r4", title:"用字根推測生字的策略：拆、猜、看上下文驗證"}
];
const S3_X_ROOT_CLASS = {
r1:[
 {say:"高三同學好！學測閱讀一定會遇到生字，這時候字首就是你的指南針。今天把高中三年學過的「方向字首」一次整理：ab-、ad-、de-、ex-、pro-、re-、sub-、trans-。", board:[["ab- 離開　ad- 朝向",["ab","ad"],false,true],["de- 向下　ex- 向外",["de","ex"],false,true],["pro- 向前　re- 回、再",["pro","re"],false,true],["sub- 在下面　trans- 越過",["sub","trans"],false,true]]},
 {say:"先看一對相反的：<<ab>> 是「離開」，<<ad>> 是「朝向」。{abnormal} 離開正常規範，就是不正常的；{absorb} 從外面吸走，就是吸收。{adhere} 朝著某物黏上去，就是黏附、遵守。", board:[["ab + normal = abnormal",["ab"],false,true],["ab + sorb = absorb",["ab"],false,true],["ad + here = adhere",["ad"],false,true]]},
 {say:"注意！ad- 很會變身，會配合後面的字母變成 ac-、as-、at-：{accumulate}、{assist}、{accessible}，其實都是 ad-。", board:[["ad → ac：accumulate、accessible",["ac"],false,true],["ad → as：assist",["as"],false,true],["ad → at：attract",["at"],false,true]]},
 {say:"口訣！", chant:"ab 離開、ad 靠近，ad 會變身 ac、as、at！"},
 {ask:{q:"ab（離開）＋ normal（正常的）＝ abnormal，意思是？", opts:["很正常的","不正常的","正常化"], ans:1,
   ok:"對！離開正常的範圍，就是不正常、反常的。", bad:{0:"ab 是「離開」喔，離開正常就不正常了。",2:"abnormal 是形容詞，正常化是 normalize。"},
   again:{q:"accumulate 的字首 ac- 原本是哪一個字首？", opts:["ad-","ab-"], ans:0, exp:"ad- 遇到 c 開頭的字根會變成 ac-。"}}},
 {say:"再來一對上下：<<de>> 是「向下、去除」，<<sub>> 是「在下面」。{descend} 向下爬就是下降；{deplete} 把滿的去掉就是耗盡；{submerge} 沉到下面就是淹沒；{substitute} 放到下面去頂替，就是代替。", board:[["de + scend = descend",["de"],false,true],["de + plete = deplete",["de"],false,true],["sub + merge = submerge",["sub"],false,true],["sub + stitute = substitute",["sub"],false,true]]},
 {say:"<<ex>> 是「向外」，在某些子音前面會縮成 <<e>>：{extract} 往外拉，就是提取；{emit} 往外送，就是排放；{emerge} 從水裡往外冒，就是出現；{evaporate} 變成蒸氣跑出去，就是蒸發。", board:[["ex + tract = extract",["ex"],false,true],["e + mit = emit",["e"],false,true],["e + merge = emerge",["e"],false,true]]},
 {ask:{q:"emerge 和 submerge 的字根都是 merg（沉、浸），哪一個是「浮出來」？", opts:["emerge","submerge"], ans:0,
   ok:"讚！e 是向外，從水裡往外冒，就是浮現、出現。", bad:{1:"sub 是「在下面」，submerge 是沉下去、淹沒喔。"},
   again:{q:"de（向下）＋ scend（爬）＝ descend，意思是？", opts:["上升","下降"], ans:1, exp:"向下爬就是下降。"}}},
 {say:"最後三個：<<pro>> 是「向前」：{prolong} 往前拉長，就是延長。<<re>> 是「回、再」：{restore} 放回原樣，就是恢復；{reveal} 把面紗拿回來，就是揭露。<<trans>> 是「越過」：{transaction} 跨越雙方完成的事，就是交易。", board:[["pro + long = prolong",["pro"],false,true],["re + store = restore",["re"],false,true],["trans + action = transaction",["trans"],false,true]]},
 {say:"第二個口訣！", chant:"de 往下、sub 在底、ex 往外、pro 往前、re 回來、trans 跨過去！"},
 {ask:{say:"最後一題！", q:"看到生字 subterranean（terra = 土地），最可能的意思是？", opts:["地底下的","天空中的","越過土地的"], ans:0,
   ok:"完美！sub 是在下面，在土地下面就是地底下的。", bad:{1:"sub 是「在下面」，不是在上面喔。",2:"「越過」是 trans-，sub 是「在下面」。"},
   again:{q:"pro（向前）＋ long ＝ prolong，意思是？", opts:["縮短","延長"], ans:1, exp:"往前拉長，就是延長。"}}},
 {say:"方向字首過關！複習口訣：ab 離開、ad 靠近；de 往下、sub 在底、ex 往外、pro 往前、re 回來、trans 跨過去。看到生字先拆字首，方向就出來了！", end:true}
],
r2:[
 {say:"今天是字根總整理！安安老師挑了學測最常考的 18 個字根，每個配一個代表字，學一個字根就能推一整串單字。先來「聲音、名字、黏著」家族：<<her>> 是黏，代表字 {adhere}；<<phon>> 是聲音，代表字 {symphony}；<<nym>> 是名字，代表字 {pseudonym}。", board:[["her 黏：adhere",["her"],false,true],["phon 聲音：symphony",["phon"],false,true],["nym 名字：pseudonym",["nym"],false,true]]},
 {say:"接著是「判斷、大小」家族：<<crit>> 是判斷，代表字 {criterion} 標準；<<fract>> 是破，代表字 {fraction} 一小部分；<<min>> 是突出，代表字 {prominent} 突出的。", board:[["crit 判斷：criterion",["crit"],false,true],["fract 破：fraction",["fract"],false,true],["min 突出：prominent",["min"],false,true]]},
 {say:"口訣！", chant:"phon 聲音、nym 名字、her 黏住，crit 判斷、fract 打破！"},
 {ask:{q:"字根 fract 的意思是「破」，下面哪個字和它有關？", opts:["fraction（一小部分）","fiction（小說）","factor（因素）"], ans:0,
   ok:"對！fraction 是把整體打破後的一小塊，所以是「一小部分、分數」。", bad:{1:"fiction 的字根是 fict（塑造），不是 fract。",2:"factor 的字根是 fact（做），不是 fract。"},
   again:{q:"pseudonym 的字根 nym 是什麼意思？", opts:["名字","數字"], ans:0, exp:"pseudo（假的）+ nym（名字）= 假名、筆名。"}}},
 {say:"再來「動作」家族：<<quant>> 是多少，代表字 {quantity} 數量；<<mit>> 是送，代表字 {emit} 排放；<<mens>> 是測量，代表字 {dimension} 尺寸、面向；<<cess>> 是走，代表字 {accessible} 可到達的；<<merg>> 是沉、浸，代表字 {emerge} 浮現。", board:[["quant 多少：quantity",["quant"],false,true],["mit 送：emit",["mit"],false,true],["mens 測量：dimension",["mens"],false,true],["cess 走：accessible",["cess"],false,true],["merg 沉：emerge",["merg"],false,true]]},
 {ask:{q:"字根 mens 是「測量」，dimension 最可能的意思是？", opts:["尺寸、面向","記憶","男人"], ans:0,
   ok:"讚！di（分開）＋ mens（測量），分開來一一測量，就是尺寸；引申成看事情的面向。", bad:{1:"記憶是 memory，mens 是「測量」喔。",2:"這裡的 mens 不是 men（男人），是「測量」。"},
   again:{q:"字根 mit 是「送」，emit 最可能的意思是？", opts:["排放、發出","接收"], ans:0, exp:"e（向外）+ mit（送）= 往外送出，排放。"}}},
 {say:"接下來「呈現、結構」家族：<<monstr>> 是展示，代表字 {demonstrate}；<<plic>> 是摺，代表字 {replicate} 複製；<<text>> 是編織，代表字 {context} 上下文；<<stat>> 是站立、狀態，代表字 {statistics}。", board:[["monstr 展示：demonstrate",["monstr"],false,true],["plic 摺：replicate",["plic"],false,true],["text 編織：context",["text"],false,true],["stat 站立：statistics",["stat"],false,true]]},
 {say:"最後是「感受、生命」家族：<<pat>> 是感受，代表字 {compatible}；<<gen>> 是出生、種類，代表字 {genre} 類型；<<ple>> 是填滿，代表字 {deplete}。", board:[["pat 感受：compatible",["pat"],false,true],["gen 種類：genre",["gen"],false,true],["ple 填滿：deplete",["ple"],false,true]]},
 {say:"第二個口訣！", chant:"quant 多少、mit 送、mens 量一量，cess 走路、merg 往水裡游！"},
 {ask:{q:"字根 text 是「編織」，context 為什麼是「上下文」？", opts:["把字編織在一起的整體","課本裡的文字","傳簡訊"], ans:0,
   ok:"完全正確！con（一起）＋ text（編織），把字句編在一起，就是上下文。", bad:{1:"textbook 才是課本，context 是字句「編織在一起」的整體。",2:"text 當動詞是傳簡訊，但字根 text 是「編織」喔。"},
   again:{q:"deplete 的字根 ple 是什麼意思？", opts:["填滿","摺"], ans:0, exp:"de（去除）+ ple（填滿）= 把滿的東西拿光，耗盡。"}}},
 {ask:{say:"最後一題！", q:"看到生字 sympathy（sym 一起＋path 感受），最可能的意思是？", opts:["同情","交響樂","匿名"], ans:0,
   ok:"太棒了！一起感受別人的感受，就是同情。", bad:{1:"交響樂是 symphony（phon 聲音），sympathy 是感受。",2:"匿名的字根是 nym（名字），和感受無關。"},
   again:{q:"字根 crit 是「判斷」，critic 最可能是？", opts:["評論家","罪犯"], ans:0, exp:"做判斷的人，就是評論家。"}}},
 {say:"字根總整理過關！18 個字根：her、phon、nym、crit、fract、min、quant、mit、mens、cess、merg、monstr、plic、text、stat、pat、gen、ple。每個配一個代表字，考前再看一次！", end:true}
],
r3:[
 {say:"今天複習用字尾判斷詞性！學測詞彙題和文意選填，很多時候光看字尾就能刪選項。先看名詞字尾：<<tion>>、<<ity>>、<<ment>>。", board:[["radiation、vegetation",["tion"],false,true],["majority、diversity",["ity"],false,true],["measurement、government",["ment"],false,true]]},
 {say:"名詞口訣！", chant:"tion、ity、ment，看到就是名詞！"},
 {ask:{q:"下列哪一個是名詞？", opts:["measure","measurement","measured"], ans:1,
   ok:"對！ment 是名詞字尾：measurement 測量。", bad:{0:"measure 在這裡是動詞，名詞要加 ment。",2:"measured 是過去式或過去分詞。"},
   again:{q:"The ___ of the students support the plan.", opts:["major","majority"], ans:1, exp:"the 和 of 中間要名詞：majority。"}}},
 {say:"再來是形容詞字尾：<<ive>>、<<ous>>、<<al>>。{creative}、{numerous}、{hazardous}、{classical}、{abnormal}。", board:[["creative",["ive"],false,true],["numerous、hazardous",["ous"],false,true],["classical、abnormal",["al"],false,true]]},
 {say:"形容詞口訣！", chant:"ive、ous、al，形容詞來報到！"},
 {ask:{q:"Hazard（危險）的形容詞是？", opts:["hazardous","hazardive","hazardment"], ans:0,
   ok:"讚！hazard 加 ous：hazardous。", bad:{1:"英文沒有 hazardive，要加 ous。",2:"ment 是名詞字尾，形容詞要加 ous。"},
   again:{q:"下列哪一個是形容詞？", opts:["classical","classify"], ans:0, exp:"al 是形容詞字尾；ify 是動詞字尾。"}}},
 {say:"動詞字尾：<<ize>> 和 <<ify>> 都是「使……」。{analyze}、{realize}、{simplify}、{classify}。", board:[["analyze、realize",["ize"],false,true],["simplify、classify",["ify"],false,true]]},
 {say:"最後是副詞字尾 <<ly>>：形容詞加 ly 變副詞。{approximate} 變 {approximately}、{prominent} 變 {prominently}。小心：friendly、lovely 雖然有 ly，卻是形容詞！", board:[["approximate → approximately",["ly"],false,true],["prominent → prominently",["ly"],false,true],["friendly、lovely 是形容詞！",["ly"]]]},
 {say:"動詞和副詞口訣！", chant:"ize、ify 變動詞，ly 多半是副詞！"},
 {ask:{q:"The teacher tried to ___ the difficult rule.（簡化）", opts:["simplify","simplification","simple"], ans:0,
   ok:"太好了！to 後面要動詞原形：simplify。", bad:{1:"simplification 是名詞，to 後面要接動詞。",2:"simple 是形容詞，要加 ify 變成動詞 simplify。"},
   again:{q:"The trip takes ___ three hours.", opts:["approximate","approximately"], ans:1, exp:"修飾數字和動詞要用副詞 approximately。"}}},
 {ask:{say:"最後一題！", q:"She smiled in a ___ way.（友善的）", opts:["friend","friendly","friendship"], ans:1,
   ok:"完美！a ___ way 中間要形容詞，friendly 雖然有 ly 卻是形容詞。", bad:{0:"friend 是名詞，a 和 way 中間要形容詞。",2:"friendship 是名詞（ship 字尾）。"},
   again:{q:"The ___ of trees prevents erosion.", opts:["vegetate","vegetation"], ans:1, exp:"The 和 of 中間要名詞：vegetation。"}}},
 {say:"字尾過關！口訣：tion、ity、ment 是名詞；ive、ous、al 是形容詞；ize、ify 是動詞；ly 多半是副詞，但 friendly、lovely 是形容詞。", end:true}
],
r4:[
 {say:"最後一堂字根課：學測閱讀遇到完全沒看過的字怎麼辦？安安老師教你三步驟：拆、猜、驗證！", board:[["1. 拆：字首＋字根＋字尾",["拆"]],["2. 猜：拼出大概的意思",["猜"]],["3. 驗證：用上下文確認",["驗證"]]]},
 {say:"三步驟口訣！", chant:"拆一拆、猜一猜、上下文來驗一驗！"},
 {say:"第一步「拆」。看到 {unpredictable}，拆成 un（不）＋ pre（事先）＋ dict（說）＋ able（可……的）。", board:[["un + pre + dict + able",["un","pre","dict","able"],false,true]]},
 {say:"第二步「猜」。不＋事先＋說＋可以的 → 不能事先說出來的 → 無法預測的。字尾 able 也告訴你它是形容詞。", board:[["不 + 事先 + 說 + 可以的 → 無法預測的",["無法預測的"]]]},
 {say:"第三步「驗證」。放回句子裡：{The weather in the mountains is unpredictable, so always bring a raincoat.} 山上天氣無法預測，所以要帶雨衣，說得通！", board:[["The weather is unpredictable, so always bring a raincoat.",["unpredictable"]]]},
 {ask:{q:"拆一拆：irreversible ＝ ir（不）＋ re（回）＋ vers（轉）＋ ible（可……的），意思是？", opts:["不可逆轉的","可以回收的","重新開始的"], ans:0,
   ok:"對！不能轉回去的，就是不可逆的。", bad:{1:"vers 是「轉」，不是回收；ir 是「不」。",2:"ir 表示「不」，這個字是「不能轉回去」。"},
   again:{q:"biodegradable 的 bio 是什麼意思？", opts:["生命","書"], ans:0, exp:"bio 是生命，biodegradable 是可被生物分解的。"}}},
 {say:"但要小心！字根只能幫你猜大概，一定要用上下文驗證。例如 {ancestor} 拆成 an（之前）＋ cest（走）＋ or（人），「走在前面的人」，是領隊嗎？上下文說 {We visit the graves of our ancestors every spring.}，去掃的是墓，就知道是「祖先」。", board:[["an + cest + or → 走在前面的人",["an","cest","or"],false,true],["We visit the graves of our ancestors.",["ancestors"]]]},
 {say:"上下文線索有四種：同位語（逗號後面解釋）、舉例（such as）、對比（unlike、whereas）、定義句（is / means / refers to）。", board:[["同位語：a ritual, a fixed ceremony,",["ritual"]],["舉例：such as ...",["such as"]],["對比：unlike / whereas",["unlike","whereas"]],["定義：... refers to ...",["refers to"]]]},
 {ask:{q:"\"Unlike his outgoing sister, Tom is quite introverted.\" introverted 最可能的意思是？", opts:["外向的","內向的","生氣的"], ans:1,
   ok:"讚！Unlike 表示對比，姊姊外向，Tom 就是內向的；intro 也是「向內」。", bad:{0:"Unlike 表示對比喔，和外向的姊姊相反。",2:"上下文沒有提到生氣，Unlike 告訴你是外向的相反。"},
   again:{q:"「拆、猜、驗證」中，最後一步要做什麼？", opts:["用上下文確認意思","查字典"], ans:0, exp:"考試不能查字典，要用上下文驗證。"}}},
 {say:"還有一個重要提醒：有些字看起來能拆，其實是陷阱！例如 {legacy} 和 legal（合法的）看起來很像，但 legacy 是「遺產」。所以第三步驗證絕對不能省。", board:[["legacy ≠ legal",["legacy","legal"]]]},
 {ask:{say:"最後一題！", q:"\"Many marsupials, such as kangaroos and koalas, live in Australia.\" 哪一個線索最能幫你猜出 marsupials？", opts:["such as kangaroos and koalas","live in","Many"], ans:0,
   ok:"完美！such as 後面舉的例子袋鼠和無尾熊，告訴你 marsupials 是這一類動物（有袋動物）。", bad:{1:"live in 太普通了，沒辦法幫你猜字義。",2:"Many 只是數量，最好的線索是 such as 後面的例子。"},
   again:{q:"\"A metaphor, a way of describing something by comparing it to another thing, ...\" 用了哪種線索？", opts:["同位語解釋","對比"], ans:0, exp:"逗號中間的同位語直接解釋了 metaphor 的意思。"}}},
 {say:"字根推測策略過關！口訣：拆一拆、猜一猜、上下文來驗一驗。高中三年的字根字首都上完了，帶著這套武器上考場，學測一定沒問題！", end:true}
]};

/* ---------- 插圖（本單元原創場景，名稱加 s3x_ 前綴避免和其他單元撞名） ---------- */
Object.assign(ILLUS2, {
  s3x_chart: () => svgWrap("#eef4ff", `<rect x="18" y="14" width="124" height="88" rx="6" fill="#fff" stroke="#c7d2fe" stroke-width="2"/><path d="M32 92 H132 M32 92 V24" stroke="#6b7280" stroke-width="2"/>` + [[40,62,"#93c5fd"],[60,48,"#60a5fa"],[80,56,"#3b82f6"],[100,38,"#2563eb"],[120,28,"#1d4ed8"]].map(([x, y, c]) => `<rect x="${x - 6}" y="${y}" width="12" height="${92 - y}" rx="2" fill="${c}"/>`).join("") + `<path d="M40 58 L60 44 L80 52 L100 34 L120 24" stroke="#f97316" stroke-width="2.5" fill="none"/>` + txt(132, 22, "%", 14, "#f97316") + spark(140, 108, .7)),
  s3x_reservoir: () => svgWrap("#e0f2fe", O.sun(132, 22, .6) + `<path d="M0 54 L36 30 L64 50 L96 26 L130 50 L160 40 V120 H0 Z" fill="#86efac"/><path d="M14 70 Q80 58 146 70 Q146 96 80 98 Q14 96 14 70 Z" fill="#3b82f6"/><path d="M30 76 Q46 72 60 76 M88 82 Q104 78 120 82" stroke="#bfdbfe" stroke-width="2" fill="none"/><rect x="62" y="94" width="36" height="14" rx="2" fill="#9ca3af"/><path d="M68 108 V114 M80 108 V116 M92 108 V114" stroke="#60a5fa" stroke-width="3" stroke-linecap="round"/>` + O.tree(22, 48, .45) + O.tree(144, 56, .4))
});

registerUnit("s3-x", {
  name:"學測總複習",
  sub:"詞彙題與綜合測驗、文意選填、篇章結構與閱讀測驗、混合題翻譯作文",
  words:S3_X_WORDS, grammar:S3_X_GRAMMAR, quiz:S3_X_QUIZ,
  classes:Object.assign({}, S3_X_CLASS, S3_X_ROOT_CLASS), phonics:S3_X_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"方向字首、18 個常考字根、字尾判斷詞性，再學會用字根推測生字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
