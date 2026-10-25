/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高三上學期 第二次段考（學測翻譯與作文句型）
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S3_1_2_WORDS = [
/* ---- 字根 grad / gress（步、走） ---- */
["gradual","adj.","逐漸的；漸進的",[
 ["There has been a gradual change in the way teenagers make friends.","青少年交朋友的方式已經逐漸改變。","There has been + 名詞 表示「（到目前為止）已經出現……」；a gradual change 是作文描寫趨勢的好用搭配。"],
 ["Thanks to gradual improvement, his English score rose from 50 to 80 in one year.","靠著一點一滴的進步，他的英文成績一年內從 50 分進步到 80 分。","thanks to + 名詞 表示「多虧、由於」，常用在正面的原因；rise 的過去式是 rose。"],
 ["Learning a language is a gradual process; it cannot be done overnight.","學語言是個漸進的過程，不可能一夜之間完成。","分號連接兩個意思緊密相關的獨立子句；overnight 當副詞表示「一夜之間」。"]],
 "grad=步|-ual=形容詞字尾","一步一步的 → 逐漸的","📶|一步步"],
["aggressive","adj.","有攻擊性的；積極進取的",[
 ["Some players become aggressive when they are losing a game.","有些玩家快輸的時候會變得很有攻擊性。","become + 形容詞 表示狀態改變；when 引導時間副詞子句。"],
 ["Due to aggressive comments online, she decided to close her account.","由於網路上充滿攻擊性的留言，她決定關掉帳號。","due to + 名詞 表示原因，後面不能直接接子句；decide to V 表示「決定做某事」。"],
 ["The company took an aggressive approach to expanding overseas.","那家公司採取積極的策略拓展海外市場。","approach to + N/V-ing：這個 to 是介係詞，所以後面接 expanding。aggressive 在商業上可以是正面的「積極」。"]],
 "ag-=朝向|gress=走|-ive=形容詞字尾","朝著別人走過去 → 有攻擊性的","🥊|攻擊性"],
["progressive","adj.","進步的；漸進的",[
 ["Taiwan is often seen as a progressive society in Asia.","台灣常被視為亞洲的一個進步社會。","be seen as 表示「被視為」，是 see A as B 的被動。"],
 ["The disease causes a progressive loss of memory.","這種疾病會造成記憶逐步喪失。","progressive 也可以表示「逐步加重的、漸進的」，常用來描述病情。"],
 ["Compared with the old rules, the new policy is far more progressive.","和舊規定相比，新政策進步得多。","Compared with ... 是分詞片語，省略的主詞要和主要子句的主詞 the new policy 一致；far 可以加強比較級。"]],
 "pro-=向前|gress=走|-ive=形容詞字尾","一直向前走的 → 進步的","🚀|進步"],
["congress","n.","代表大會；（美國）國會",[
 ["The bill was passed by Congress last year.","這項法案去年由國會通過。","指美國國會時用大寫 Congress，而且通常不加 the；was passed 是被動語態。"],
 ["Thousands of doctors attended the international medical congress.","數千名醫生參加了這場國際醫學大會。","congress 也可以指大型的專業會議；thousands of 表示「好幾千」。"],
 ["Members of Congress disagreed sharply on the issue.","國會議員在這個議題上意見嚴重分歧。","disagree on + 議題 表示「在某議題上意見不同」。"]],
 "con-=一起|gress=走","大家一起走來開會 → 代表大會","🏛️|國會"],
["degrade","v.","降低品質；貶低",[
 ["Plastic waste degrades the quality of the soil.","塑膠垃圾會使土壤品質下降。","degrade 是及物動詞，直接接受詞 the quality。"],
 ["Nobody should be degraded because of their appearance.","任何人都不應該因為外表而被貶低。","because of + 名詞；should be + p.p. 是助動詞加被動。"],
 ["Posting cruel jokes about others only degrades yourself.","張貼殘酷的玩笑嘲弄別人，只會貶低你自己。","動名詞片語 Posting cruel jokes about others 當主詞，視為單數，所以用 degrades。"]],
 "de-=向下|grade=步；等級","往下降一級 → 降低品質","📉|降級"],
/* ---- 字根 fid（信任） ---- */
["fidelity","n.","忠誠；（翻譯、聲音的）精確度",[
 ["Dogs are famous for their fidelity to their owners.","狗以對主人忠誠而聞名。","be famous for + 名詞 表示「以……聞名」；fidelity to 人 表示「對某人忠誠」。"],
 ["A good translation should keep fidelity to the original text.","好的翻譯應該忠實於原文。","學測翻譯題也一樣：先求忠於原意，再求通順。"],
 ["These headphones offer high-fidelity sound at a reasonable price.","這副耳機以合理的價格提供高傳真的音質。","high-fidelity 縮寫成 hi-fi，表示「高傳真」，當形容詞放在名詞前。"]],
 "fid=信任|-elity=名詞字尾","值得信任的狀態 → 忠誠","🐕|忠誠"],
["confidential","adj.","機密的",[
 ["Your personal information will be kept confidential.","你的個人資料會被保密。","keep + 受詞 + 形容詞 的被動：be kept confidential。"],
 ["Never share confidential documents on social media.","永遠不要在社群媒體上分享機密文件。","祈使句的否定可以用 Never 加強語氣。"],
 ["The results are confidential, so only the teacher can see them.","結果是保密的，所以只有老師看得到。","so 連接因果；only 放在主詞前面限定「只有」。"]],
 "con-=完全|fid=信任|-ent=形容詞字尾|-ial=……的","只能給完全信任的人看 → 機密的","🔐|機密"],
["defy","v.","違抗；藐視",[
 ["The students defied the rule and used their phones in class.","學生們違反規定在課堂上用手機。","defy 直接接受詞 the rule；過去式 defied（y 改 i 加 ed）。"],
 ["Her success defies the stereotype that girls are bad at science.","她的成功打破了「女生不擅長科學」的刻板印象。","that 引導同位語子句，說明 the stereotype 的內容。"],
 ["The beauty of the sunset defies description.","夕陽的美難以言喻。","defy description 是固定說法，表示「無法形容」，作文描寫景色可以用。"]],
 "de-=去除|fy=信任（fid 的變形）","收回信任、不再服從 → 違抗","🙅|不服從"],
["self-confidence","n.","自信",[
 ["Giving a speech in front of the class helped me build self-confidence.","在全班面前演講幫我建立了自信。","動名詞片語當主詞；help 人 + 原形動詞。"],
 ["Lack of self-confidence can prevent students from trying new things.","缺乏自信可能使學生不敢嘗試新事物。","prevent 人 from V-ing 表示「阻止某人做某事」。"],
 ["The more praise children receive, the more self-confidence they build.","孩子得到越多讚美，就建立越多自信。","The more + 名詞 + 主詞 + 動詞：名詞要跟著 the more 一起往前移。"]],
 "self-=自己|con-=完全|fid=信任|-ence=名詞字尾","完全信任自己 → 自信","💪|自信"],
/* ---- 字根 nov（新） ---- */
["novice","n.","新手；初學者",[
 ["As a novice, I made a lot of mistakes in my first week.","身為新手，我第一週犯了很多錯。","as 當介係詞表示「身為、作為」。"],
 ["This course is designed for novices who have never written code.","這門課是為從沒寫過程式的初學者設計的。","be designed for 表示「為……而設計」；who 引導限定關係子句修飾 novices。"],
 ["Even experts were once novices.","就連專家也曾經是新手。","once 放在 be 動詞後面表示「曾經」。"]],
 "nov=新|-ice=名詞字尾","新來的人 → 新手","🐣|新手"],
["innovate","v.","創新；革新",[
 ["Companies must keep innovating to survive.","企業必須不斷創新才能生存。","keep + V-ing 表示「持續做」；to survive 表示目的。"],
 ["It is undeniable that Taiwan's tech industry continues to innovate.","不可否認，台灣的科技業持續在創新。","It is undeniable that ... 是學測翻譯常考句型，等於 There is no denying that ...。"],
 ["Those who refuse to innovate will be left behind.","拒絕創新的人將會被淘汰。","Those who ... 表示「……的人」；be left behind 表示「被拋在後面、落後」。"]],
 "in-=進入|nov=新|-ate=動詞字尾","把新東西帶進來 → 創新","💡|創新"],
["renovate","v.","翻修；整修",[
 ["The old train station was renovated and turned into a museum.","那座老火車站經過整修，改建成博物館。","被動語態 was renovated；turn A into B 表示「把 A 變成 B」。"],
 ["Renovating the house took longer than we had expected.","整修房子花的時間比我們預期的久。","than we had expected：預期在整修之前，所以用過去完成式。"],
 ["Many old buildings in Tainan have been renovated into cafés.","台南許多老建築被改建成咖啡廳。","現在完成式被動 have been + p.p.。"]],
 "re-=再|nov=新|-ate=動詞字尾","使再變新 → 翻修","@renovate"],
["novelty","n.","新奇；新鮮感",[
 ["The novelty of the new phone wore off after a week.","新手機的新鮮感一週後就消失了。","wear off 表示「（感覺、效果）逐漸消失」，過去式 wore off。"],
 ["Children are easily attracted by novelty.","孩子很容易被新奇的事物吸引。","be attracted by/to 表示「被……吸引」。"],
 ["Once the novelty is gone, real interest is what keeps you learning.","一旦新鮮感消失，讓你持續學習的是真正的興趣。","Once 當連接詞表示「一旦」；what 引導名詞子句當主詞補語。"]],
 "novel=新的|-ty=名詞字尾","新的感覺 → 新鮮感","✨|新鮮感"],
/* ---- 字根 sci（知道） ---- */
["unconscious","adj.","失去知覺的；無意識的",[
 ["The driver was unconscious when the ambulance arrived.","救護車到的時候，駕駛已經失去意識。","when 引導時間副詞子句；was unconscious 描述當時的狀態。"],
 ["Many of our habits are formed at an unconscious level.","我們的許多習慣是在無意識的層次形成的。","are formed 是被動語態；at a ... level 表示「在……層次」。"],
 ["He fell down the stairs and was knocked unconscious.","他摔下樓梯，撞到昏了過去。","knock 人 unconscious 表示「把某人撞昏」，這裡用被動 was knocked unconscious。"]],
 "un-=不|con-=一起|sci=知道|-ous=形容詞字尾","不知道周遭發生什麼 → 失去知覺的","😵|昏迷"],
["consciousness","n.","意識；覺察",[
 ["She lost consciousness for a few minutes after the accident.","意外發生後，她失去意識了幾分鐘。","lose consciousness 表示「昏過去」，regain consciousness 表示「恢復意識」。"],
 ["Environmental consciousness has grown among young people.","年輕人的環保意識已經提高。","has grown 是現在完成式，表示到現在為止的變化；among 用於三者以上之間。"],
 ["Social media has raised public consciousness of mental health.","社群媒體提升了大眾對心理健康的意識。","raise consciousness of 表示「提高對……的意識」。"]],
 "con-=一起|sci=知道|-ous=形容詞字尾|-ness=名詞字尾","清楚知道的狀態 → 意識","🧠|意識"],
["conscientious","adj.","認真負責的；憑良心的",[
 ["She is a conscientious student who never misses a deadline.","她是個認真負責的學生，從不錯過截止期限。","who 引導限定關係子句修飾 student。"],
 ["Being conscientious, he checked his answers twice.","他做事一絲不苟，答案檢查了兩次。","分詞構句 Being conscientious = Because he was conscientious。"],
 ["Employers value conscientious workers more than talented but lazy ones.","雇主重視認真負責的員工，勝過有才華卻懶惰的人。","ones 代替前面的 workers，避免重複，這就是段落的「指代」技巧。"]],
 "con-=一起|sci=知道|-ent=形容詞字尾|-ious=……的","心裡清楚知道對錯 → 憑良心的、認真的","📏|一絲不苟"],
/* ---- 觀點、評論、論證 ---- */
["valid","adj.","有根據的；有效的",[
 ["You made a valid point, but I still disagree.","你說得有道理，但我還是不同意。","make a point 表示「提出論點」；valid point 是「有道理的論點」。"],
 ["This ticket is valid for three days.","這張票三天內有效。","valid for + 一段時間 表示「在……內有效」。"],
 ["Admittedly, his argument is valid, but it ignores the cost.","誠然，他的論點有根據，但忽略了成本。","Admittedly ..., but ... 是作文讓步句型：先承認對方有道理，再提出自己的看法。"]],
 "val=強壯；有價值|-id=形容詞字尾","有力量、站得住腳的 → 有根據的","✔️|站得住腳"],
["invalid","adj.","無效的；站不住腳的",[
 ["Your passport is invalid because it has expired.","你的護照已經過期，所以無效了。","because 引導子句；expire 表示「到期」。"],
 ["The conclusion is invalid due to a lack of evidence.","由於缺乏證據，這個結論站不住腳。","due to 後面接名詞片語 a lack of evidence，不能接子句。"],
 ["Any answer written in pencil will be considered invalid.","任何用鉛筆寫的答案都會被視為無效。","written in pencil 是過去分詞片語修飾 answer；be considered + 形容詞。"]],
 "in-=不|val=有力量|-id=形容詞字尾","沒有效力的 → 無效的","❌|無效"],
["assert","v.","斷言；堅稱",[
 ["The author asserts that reading on paper improves memory.","作者斷言在紙本上閱讀能增進記憶力。","assert that + 子句；學測閱讀題常問 What does the author assert?"],
 ["He asserted his innocence in front of the judge.","他在法官面前堅稱自己是無辜的。","assert 後面也可以接名詞 his innocence。"],
 ["It is one thing to assert an opinion; it is another to support it with facts.","提出看法是一回事，用事實支持它又是另一回事。","It is one thing to ...; it is another to ... 表示「……是一回事，……又是另一回事」。"]],
 "as-=朝向|sert=放；連接","把自己的主張放到別人面前 → 斷言","📣|斷言"],
["contend","v.","主張；競爭",[
 ["Some experts contend that homework does little to help young children.","有些專家主張作業對幼童幫助不大。","contend that ... 表示「主張……」，比 say 正式。"],
 ["Five teams are contending for the championship.","有五支隊伍在爭奪冠軍。","contend for + 名詞 表示「爭奪……」。"],
 ["She has had to contend with a lot of pressure this year.","她今年得應付很大的壓力。","contend with + 困難 表示「應付、對付」；has had to 是 have to 的現在完成式。"]],
 "con-=一起|tend=伸展","大家一起伸手爭取 → 競爭；把論點伸出去 → 主張","⚔️|主張"],
["persuasive","adj.","有說服力的",[
 ["A persuasive essay needs clear reasons and strong examples.","一篇有說服力的文章需要清楚的理由和有力的例子。","persuasive essay 就是「論說文」。"],
 ["Her speech was so persuasive that the whole class agreed with her.","她的演講太有說服力了，全班都同意她。","so + 形容詞 + that ... 表示「如此……以致於……」。"],
 ["The more specific your examples are, the more persuasive your writing will be.","例子越具體，文章就越有說服力。","The more ..., the more ...：兩邊都是形容詞，結構是 the more + 形容詞 + 主詞 + 動詞。"]],
 "per-=完全|suas=勸說|-ive=形容詞字尾","能把人完全勸服的 → 有說服力的","@persuasive"],
["controversy","n.","爭議",[
 ["The new school uniform rule has caused a lot of controversy.","新的制服規定引起很大的爭議。","cause controversy 表示「引起爭議」；controversy 常當不可數名詞。"],
 ["There is still controversy over whether AI should be used in exams.","對於考試中是否應該使用 AI，仍然有爭議。","controversy over + 議題；whether 引導名詞子句。"],
 ["The movie was at the center of controversy.","那部電影成了爭議焦點。","at the center of controversy 表示「處在爭議的中心」。"]],
 "contro-=相反|vers=轉|-y=名詞字尾","意見轉向相反的方向 → 爭議","🔥|爭議"],
["assess","v.","評估",[
 ["Teachers assess students in many ways, not just through exams.","老師用很多方式評量學生，不只是考試。","not just ... 表示「不只是……」；through 表示「透過」。"],
 ["It is hard to assess the long-term effects of social media.","很難評估社群媒體的長期影響。","虛主詞 It 代替 to assess ...；effects of A 表示「A 的影響」。"],
 ["Before making a decision, assess both the advantages and the disadvantages.","做決定之前，要評估優點和缺點。","before + V-ing；both A and B。"]],
 "as-=朝向|sess=坐","坐到旁邊仔細判斷 → 評估","📊|評估"],
["biased","adj.","有偏見的；偏頗的",[
 ["The report is biased because it only shows one side of the story.","這篇報導很偏頗，因為只呈現事情的一面。","only 放在一般動詞前；one side of the story 表示「事情的一面」。"],
 ["Many people are biased against those who look different.","許多人對外表不同的人存有偏見。","be biased against 表示「對……有偏見」；be biased toward/in favor of 表示「偏袒」。"],
 ["We should read news from different sources so as not to be biased.","我們應該讀不同來源的新聞，以免看法偏頗。","so as not to V 表示「以免……」，not 要放在 to 前面。"]],
 "","bias（偏見）＋ -ed → 有偏見的","⚖️|偏頗"],
["imply","v.","暗示；意味著",[
 ["Her silence implied that she was not happy with the result.","她的沉默暗示她對結果不滿意。","imply that ...：不明說，只是暗示。"],
 ["What does the author imply in the last paragraph?","作者在最後一段暗示了什麼？","學測閱讀推論題常見問法；imply 是「作者暗示」，infer 是「讀者推論」。"],
 ["Being quiet does not imply being shy.","安靜不代表害羞。","動名詞當主詞和受詞：Being quiet / being shy。"]],
 "im-=向內|ply=摺","把意思摺在話裡面 → 暗示","🤔|暗示"],
["infer","v.","推論；推斷",[
 ["What can we infer from the passage?","我們可以從文章中推論出什麼？","infer A from B 表示「從 B 推論出 A」，是閱讀測驗必考字。"],
 ["From his accent, I inferred that he was from the south.","從他的口音，我推斷他來自南部。","inferred：infer 的過去式要重複 r 再加 ed。"],
 ["It can be inferred that the writer disagrees with the policy.","可以推論作者不同意這項政策。","It can be inferred that ... 是被動的虛主詞句型，閱讀題選項常出現。"]],
 "in-=進入|fer=帶","把結論帶進腦中 → 推論","🔎|推論"],
["furthermore","adv.","此外；而且",[
 ["Exercise keeps you healthy. Furthermore, it reduces stress.","運動讓你保持健康。此外，它還能減輕壓力。","furthermore 用來「加碼」新的支持理由，放句首加逗號。"],
 ["The plan is too expensive; furthermore, it takes too much time.","這個計畫太貴了，而且太花時間。","furthermore = moreover = in addition，作文中輪流使用可以避免重複。"],
 ["Furthermore, online classes allow students to learn at their own pace.","此外，線上課程讓學生能依照自己的步調學習。","allow 人 to V；at one's own pace 表示「依照自己的步調」。"]],
 "further=更進一步|more=更多","更進一步還有更多 → 此外","➕|此外"],
["nevertheless","adv.","然而；儘管如此",[
 ["The test was very difficult. Nevertheless, she passed it.","考試很難。儘管如此，她還是通過了。","nevertheless = however，表示轉折，是副詞，前面不能只用逗號連接兩個句子。"],
 ["It was raining; nevertheless, the game continued.","當時在下雨，然而比賽仍繼續進行。","用分號連接兩個子句，nevertheless 後面加逗號。"],
 ["Social media has many problems. It is, nevertheless, a useful tool.","社群媒體有許多問題，然而它仍是好用的工具。","nevertheless 也可以插在句中，前後加逗號。"]],
 "never=決不|the=那個|less=較少","決不因此減少 → 儘管如此","↩️|儘管如此"],
["whereas","conj.","然而；反之",[
 ["Some students prefer printed books, whereas others prefer e-books.","有些學生喜歡紙本書，而有些則喜歡電子書。","whereas 是連接詞，連接兩個「對比」的子句，前面常加逗號。"],
 ["My brother is outgoing, whereas I am rather quiet.","我哥哥很外向，而我則相當安靜。","whereas 可以換成 while，表示兩者對比。"],
 ["Whereas city life is convenient, country life is peaceful.","城市生活方便，而鄉村生活寧靜。","whereas 也可以放句首，用來比較兩件事。"]],
 "","where（在那裡）＋ as（如同）→ 反之","🔄|對比"],
["admittedly","adv.","誠然；不可否認地",[
 ["Admittedly, smartphones are convenient, but they can be addictive.","誠然，智慧型手機很方便，但它們可能讓人上癮。","Admittedly ..., but ... 讓步句型：先承認，再轉折。和 Although 不同，這裡加 but 是正確的。"],
 ["The plan is, admittedly, not perfect.","不可否認，這個計畫並不完美。","admittedly 可以插在句中，前後加逗號。"],
 ["Admittedly, I made a mistake, but I have learned from it.","我承認我犯了錯，但我已經從中學到教訓。","learn from 表示「從……學習」。"]],
 "ad-=朝向|mit=送|-ted=過去分詞|-ly=副詞字尾","承認了的 → 誠然","🙋|誠然"],
["undeniable","adj.","不可否認的",[
 ["It is undeniable that the internet has changed our lives.","不可否認，網路改變了我們的生活。","It is undeniable that ... 是學測翻譯的經典開頭。"],
 ["There is undeniable evidence that the climate is changing.","有不可否認的證據顯示氣候正在變遷。","evidence that ...：that 引導同位語子句說明證據內容。"],
 ["His talent is undeniable, but he needs to work harder.","他的天分不可否認，但他需要更努力。","undeniable 放在 be 動詞後面當補語。"]],
 "un-=不|deni=否認|-able=可……的","不可以否認的","💯|無庸置疑"],
["significant","adj.","重大的；顯著的",[
 ["Reading has had a significant influence on my way of thinking.","閱讀對我的思考方式產生了重大的影響。","have a significant influence on 是作文常用搭配。"],
 ["There has been a significant increase in online shopping.","網購有顯著的增加。","an increase in + 名詞 表示「……的增加」，介係詞用 in。"],
 ["It is significant that most students chose the same answer.","值得注意的是，大部分的學生選了同一個答案。","It is significant that ... 表示「值得注意的是……」。"]],
 "sign=記號|-ific=使|-ant=形容詞字尾","值得做記號的 → 重要的","📌|重大"],
["crucial","adj.","關鍵的；極重要的",[
 ["Sleep is crucial to students' learning.","睡眠對學生的學習至關重要。","be crucial to/for + 名詞。"],
 ["It is crucial that we take action now.","我們現在採取行動是極重要的。","It is crucial that + 主詞 + (should) 原形動詞：take 前面省略了 should。"],
 ["The first sentence of a paragraph plays a crucial role.","段落的第一句扮演關鍵角色。","play a crucial role 表示「扮演關鍵角色」，主題句就是這個角色。"]],
 "cruc=十字|-ial=形容詞字尾","站在十字路口要做選擇 → 關鍵的","🗝️|關鍵"],
["drawback","n.","缺點；不利之處",[
 ["The main drawback of online classes is the lack of interaction.","線上課程的主要缺點是缺乏互動。","the drawback of + 名詞；主詞 The main drawback 是單數，用 is。"],
 ["Every choice has its benefits and drawbacks.","每個選擇都有它的好處和壞處。","benefits and drawbacks 是作文比較利弊的好搭配。"],
 ["One drawback is that the app uses a lot of battery.","缺點之一是這個 app 很耗電。","One drawback is that ... 由 that 引導主詞補語子句，作文列舉缺點時很好用。"]],
 "draw=拉|back=回","把你往回拉的東西 → 缺點","👎|缺點"],
["merit","n./v.","優點；值得",[
 ["Each plan has its own merits.","每個計畫都有它自己的優點。","merit 當「優點」時是可數名詞，常用複數 merits。"],
 ["We should judge people on their merits, not their background.","我們應該依照人的優點來評斷，而不是看背景。","judge 人 on one's merits 表示「就實力評價」。"],
 ["Her idea merits further discussion.","她的點子值得進一步討論。","merit 當動詞表示「值得」，後面直接接名詞。"]],
 "","merit 和 demerit（缺點、記過）是一對：拿到 merit 就是「嘉獎、優點」","🏅|優點"],
["aspect","n.","方面；層面",[
 ["Technology has changed every aspect of our lives.","科技改變了我們生活的每一個層面。","every + 單數名詞 aspect。"],
 ["Let's look at the problem from a different aspect.","讓我們從不同的角度看這個問題。","from a different aspect/perspective 表示「從另一個角度」。"],
 ["Money is only one aspect of a good job.","錢只是一份好工作的其中一個面向。","only one aspect of ... 是作文表達「不只如此」的好說法。"]],
 "a-=朝向|spect=看","朝某個方向看到的那一面 → 方面","🔷|面向"],
["phenomenon","n.","現象",[
 ["Online shopping has become a common phenomenon.","網路購物已經成為普遍的現象。","phenomenon 複數是 phenomena，這是學測常考的不規則複數。"],
 ["Scientists are trying to explain this strange phenomenon.","科學家正試著解釋這個奇怪的現象。","be trying to V 表示「正努力做」。"],
 ["Such social phenomena are worth studying.","這樣的社會現象值得研究。","phenomena 是複數，所以用 are；be worth + V-ing 表示「值得做」。"]],
 "","phenomenon（單數）→ phenomena（複數），和 criterion → criteria 一樣","🌈|現象"],
["prevalent","adj.","普遍的；盛行的",[
 ["Smartphone addiction is prevalent among teenagers.","智慧型手機成癮在青少年之間很普遍。","be prevalent among + 群體。"],
 ["This belief was prevalent in the past.","這種觀念在過去很盛行。","prevalent = widespread = common，作文可以替換使用。"],
 ["Due to the prevalent use of social media, news spreads quickly.","由於社群媒體的普遍使用，新聞傳播得很快。","Due to + 名詞片語 the prevalent use of ...。"]],
 "pre-=在前|val=強|-ent=形容詞字尾","力量強、走在前頭 → 盛行的","🌐|普遍"],
["outweigh","v.","比……重要；勝過",[
 ["In my opinion, the benefits outweigh the drawbacks.","在我看來，好處大於壞處。","A outweigh B 表示「A 比 B 更重要、更多」，是作文結論的必備字。"],
 ["The risks of the plan far outweigh its advantages.","這個計畫的風險遠大於它的好處。","far 修飾動詞 outweigh，表示「遠遠」。"],
 ["Does the convenience of online shopping outweigh its problems?","網購的便利性勝過它的問題嗎？","主詞是 the convenience（單數），所以用 Does。"]],
 "out-=超過|weigh=稱重","重量超過另一邊 → 勝過","⚖️|勝過"],
["viewpoint","n.","觀點",[
 ["From my viewpoint, students should have more free time.","從我的觀點來看，學生應該有更多自由時間。","from one's viewpoint 表示「從某人的觀點」。"],
 ["The article presents the issue from a teenager's viewpoint.","這篇文章從青少年的觀點呈現這個議題。","present 當動詞表示「呈現」。"],
 ["It is important to respect viewpoints that differ from your own.","尊重和自己不同的觀點是很重要的。","that 引導關係子句修飾 viewpoints；differ from 表示「與……不同」。"]],
 "view=看|point=點","看事情的那個點 → 觀點","👁️|觀點"],
["acknowledge","v.","承認；認可",[
 ["He acknowledged that he had made a mistake.","他承認自己犯了錯。","acknowledge that ...；had made 是過去完成式，犯錯比承認更早。"],
 ["We must acknowledge the efforts of the volunteers.","我們必須肯定志工們的努力。","acknowledge 也表示「肯定、感謝」。"],
 ["She is widely acknowledged as the best singer in the school.","她被公認為全校最會唱歌的人。","be acknowledged as 表示「被公認為」。"]],
 "ac-=朝向|know=知道|-ledge=名詞字尾","讓別人知道你知道 → 承認","🤝|承認"],
["concede","v.","（勉強）承認；讓步",[
 ["I concede that your plan is cheaper, but mine is safer.","我承認你的計畫比較便宜，但我的比較安全。","concede that ..., but ... 和 Admittedly ..., but ... 一樣是讓步句型。"],
 ["The team conceded two goals in the first half.","那支球隊上半場被進了兩球。","concede a goal 表示「（比賽中）失球」。"],
 ["Neither side was willing to concede.","雙方都不願意讓步。","Neither + 單數名詞 + 單數動詞 was。"]],
 "con-=完全|cede=走；退讓","完全退一步 → 讓步","🏳️|讓步"],
["evident","adj.","明顯的",[
 ["It is evident that he has been practicing a lot.","很明顯他一直都有在大量練習。","It is evident that ... = It is clear that ...；has been practicing 是現在完成進行式。"],
 ["Her love for music is evident in her songs.","她對音樂的熱愛在她的歌裡很明顯。","be evident in 表示「在……中顯而易見」。"],
 ["The effects of climate change are becoming more evident.","氣候變遷的影響越來越明顯。","become more + 形容詞 表示「變得越來越……」。"]],
 "e-=向外|vid=看|-ent=形容詞字尾","從外面就看得到 → 明顯的","👀|明顯"],
["insight","n.","洞察力；深刻見解",[
 ["The book gave me new insight into how teenagers think.","這本書讓我對青少年的思考方式有了新的見解。","insight into + 名詞 表示「對……的深刻了解」，介係詞用 into。"],
 ["A good essay offers insight, not just facts.","好文章提供的是見解，不只是事實。","not just 表示「不只是」。"],
 ["Her insights helped the team solve the problem.","她的深刻見解幫助團隊解決了問題。","help + 受詞 + 原形動詞 solve。"]],
 "in-=向內|sight=看見","看到事情的內部 → 洞察力","💡|洞察"],
["constructive","adj.","建設性的",[
 ["Thank you for your constructive comments.","謝謝你有建設性的意見。","constructive comments/feedback/criticism 是常見搭配。"],
 ["Instead of complaining, let's have a constructive discussion.","與其抱怨，不如讓我們進行有建設性的討論。","Instead of + V-ing 表示「不……而……」。"],
 ["Constructive criticism helps people grow, whereas personal attacks only hurt them.","建設性的批評幫助人成長，而人身攻擊只會傷害人。","whereas 連接兩個對比的子句。"]],
 "con-=一起|struct=建造|-ive=形容詞字尾","一起把事情建造起來的 → 建設性的","🧱|建設性"],
["refute","v.","駁斥；反駁",[
 ["The scientist refuted the claim with clear evidence.","那位科學家用明確的證據駁斥了這個說法。","refute 表示「證明……是錯的」，比 deny（否認）更強。"],
 ["In the last paragraph, the writer refutes the opposing view.","作者在最後一段反駁了對立的觀點。","opposing view 表示「反方觀點」；論說文常先讓步，再反駁。"],
 ["His argument is hard to refute.","他的論點很難反駁。","主詞 + be + 形容詞 + to V：主詞是 refute 的受詞，所以後面不再加 it。"]],
 "re-=回|fute=打","把對方的說法打回去 → 駁斥","🛡️|反駁"],
["elaborate","v./adj.","詳細說明；精心製作的",[
 ["Could you elaborate on your idea?","你能詳細說明你的想法嗎？","elaborate on + 名詞 表示「詳細說明」，動詞的 -ate 唸 /eɪt/。"],
 ["In the supporting sentences, elaborate on the topic sentence with examples.","在支持句中，要用例子把主題句說清楚。","段落寫作的核心：支持句的任務就是 elaborate 主題句。"],
 ["They prepared an elaborate plan for the school festival.","他們為校慶準備了一個精心規劃的計畫。","elaborate 當形容詞表示「精心的、複雜的」，-ate 唸 /ət/。"]],
 "e-=向外|labor=勞動|-ate=動詞或形容詞字尾","費很多工夫做出來 → 精心的；把細節說出來 → 詳細說明","📝|詳述"],
["relevant","adj.","相關的；切題的",[
 ["Make sure every example is relevant to your topic.","確定每個例子都和你的主題相關。","be relevant to 表示「和……有關」；作文離題的句子就是 irrelevant。"],
 ["Please include only relevant information.","請只寫相關的資訊。","information 是不可數名詞。"],
 ["Is this question relevant to what we are discussing?","這個問題和我們正在討論的事有關嗎？","what 引導名詞子句當介係詞 to 的受詞。"]],
 "re-=再|lev=舉起|-ant=形容詞字尾","值得舉起來談的 → 相關的","🎯|切題"],
["credibility","n.","可信度",[
 ["Spelling mistakes can damage a writer's credibility.","拼字錯誤會損害作者的可信度。","damage one's credibility 表示「損害某人的信譽」。"],
 ["Check the credibility of a website before you share its news.","分享新聞前，先查證網站的可信度。","before 引導時間副詞子句。"],
 ["The more evidence you give, the higher your credibility will be.","你提供的證據越多，你的可信度就越高。","The more + 名詞, the + 比較級 ...：第二部分用 the higher。"]],
 "cred=相信|-ible=可……的|-ity=名詞字尾","可以被相信的程度 → 可信度","🏷️|可信度"],
["distort","v.","扭曲；曲解",[
 ["Some news reports distort the facts to attract readers.","有些新聞報導扭曲事實來吸引讀者。","to attract 是表目的的不定詞。"],
 ["Filters can distort how we see ourselves.","濾鏡可能扭曲我們看待自己的方式。","how 引導名詞子句當 distort 的受詞。"],
 ["His words were distorted by the media.","他的話被媒體曲解了。","被動語態 were distorted by。"]],
 "dis-=分開|tort=扭","扭到變形 → 扭曲","🌀|扭曲"],
["perception","n.","感知；看法",[
 ["Social media can change our perception of beauty.","社群媒體可能改變我們對美的看法。","perception of + 名詞 表示「對……的感知、看法」。"],
 ["There is a common perception that boys are better at math.","普遍有一種看法認為男生比較擅長數學。","perception that ...：that 引導同位語子句。"],
 ["Her perception of the problem was different from mine.","她對這個問題的看法和我不同。","mine = my perception，避免重複。"]],
 "per-=完全|cept=拿|-ion=名詞字尾","完全拿進腦中 → 感知","👓|看法"],
["stance","n.","立場；態度",[
 ["What is your stance on school uniforms?","你對學校制服的立場是什麼？","stance on + 議題 表示「對……的立場」，介係詞用 on。"],
 ["In the first paragraph, state your stance clearly.","在第一段要清楚表明你的立場。","state 當動詞表示「陳述、表明」；作文第一段就要讓讀者知道你支持還是反對。"],
 ["The school took a firm stance against bullying.","學校對霸凌採取堅定的反對立場。","take a firm stance against 表示「堅決反對」。"]],
 "sta=站|-ance=名詞字尾","你站在哪一邊 → 立場","🧍|立場"],
["explicit","adj.","明確的；清楚表達的",[
 ["The teacher gave us explicit instructions for the essay.","老師給了我們明確的作文說明。","explicit instructions 表示「明確的指示」。"],
 ["The writer does not state her opinion explicitly.","作者沒有明確說出她的看法。","explicitly 是副詞；閱讀題若作者沒明說，就要靠推論找答案。"],
 ["Be explicit about your reasons, or readers will be confused.","要把理由說清楚，不然讀者會搞不懂。","祈使句 + or ... 表示「……，否則……」。"]],
 "ex-=向外|plic=摺|-it=形容詞字尾","把摺起來的意思攤開在外面 → 明確的","📢|說清楚"],
["implicit","adj.","含蓄的；暗示的",[
 ["There was an implicit message in his smile.","他的微笑中有一個含蓄的訊息。","implicit 是 explicit 的反義詞：沒有直接說出口。"],
 ["Many questions in the reading test ask about implicit meanings.","閱讀測驗中有許多題目問的是言外之意。","ask about 表示「詢問有關……」；implicit meaning 就是「言外之意」。"],
 ["Compared with explicit rules, implicit rules are harder for newcomers to learn.","和明文規定相比，不成文的規矩對新來的人更難學會。","Compared with + 名詞；be hard for 人 to V。"]],
 "im-=向內|plic=摺|-it=形容詞字尾","意思摺在裡面沒攤開 → 含蓄的","🤐|言外之意"],
/* ---- 教育與自我成長 ---- */
["persevere","v.","堅持不懈",[
 ["If you persevere, you will eventually succeed.","只要堅持下去，你終究會成功。","If 引導一般條件句，用現在式表示未來。"],
 ["She persevered with her studies despite many difficulties.","儘管有許多困難，她仍堅持學業。","persevere with/in + 名詞；despite + 名詞，不加 of。"],
 ["It is those who persevere that finally reach their goals.","最後達成目標的，是那些堅持不懈的人。","It is ... that 強調句強調 those who persevere（複數），所以 reach 不加 s。"]],
 "per-=始終|severe=嚴格的","始終嚴格要求自己 → 堅持不懈","🧗|堅持"],
["perseverance","n.","毅力；不屈不撓",[
 ["Perseverance is the key to learning English well.","毅力是學好英文的關鍵。","the key to + N/V-ing：to 是介係詞，所以接 learning。"],
 ["His success was due to perseverance rather than talent.","他的成功是由於毅力，而不是天分。","be due to 表示「由於、歸因於」；A rather than B 表示「是 A 而非 B」。"],
 ["It takes perseverance to finish a marathon.","跑完馬拉松需要毅力。","It takes + 名詞 + to V 表示「做某事需要……」。"]],
 "per-=始終|sever=嚴格|-ance=名詞字尾","始終嚴格不放鬆 → 毅力","🏃|毅力"],
["persistent","adj.","持續的；堅持的",[
 ["He was persistent in asking questions until he understood.","他一直追問，直到他弄懂為止。","be persistent in + V-ing 表示「堅持做……」。"],
 ["A persistent cough should be checked by a doctor.","持續的咳嗽應該給醫生檢查。","should be + p.p. 是助動詞加被動。"],
 ["Thanks to her persistent efforts, the club grew quickly.","多虧她持續不斷的努力，社團成長得很快。","thanks to + 名詞 表示「多虧、由於」，常用於正面的原因。"]],
 "per-=始終|sist=站|-ent=形容詞字尾","始終站著不倒 → 堅持的","🔁|持續"],
["resilient","adj.","有韌性的；能迅速恢復的",[
 ["Resilient students learn from failure instead of giving up.","有韌性的學生會從失敗中學習，而不是放棄。","instead of + V-ing 表示「而不是……」。"],
 ["Children are often more resilient than adults think.","孩子常常比大人想的更有韌性。","more + 形容詞 + than 的比較句型。"],
 ["The town proved resilient after the earthquake.","那個小鎮在地震後展現了復原力。","prove + 形容詞 表示「結果證明是……」。"]],
 "re-=回|sil=跳|-ient=形容詞字尾","被壓下去還能跳回來 → 有韌性的","🎾|韌性"],
["cultivate","v.","培養；耕種",[
 ["Reading every day helps cultivate good habits.","每天閱讀有助於培養好習慣。","help (to) + 原形動詞，to 可以省略。"],
 ["Schools should cultivate students' critical thinking.","學校應該培養學生的批判性思考。","critical thinking 是教育議題作文的關鍵詞。"],
 ["Farmers here cultivate rice and tea.","這裡的農夫種植稻米和茶。","cultivate 的本意是「耕種」。"]],
 "cultiv=耕種|-ate=動詞字尾","像耕田一樣慢慢養 → 培養","🌱|培養"],
["nurture","v./n.","培育；養育",[
 ["Parents should nurture their children's interests.","父母應該培育孩子的興趣。","nurture 比 raise 更強調「用心栽培」。"],
 ["A good teacher nurtures curiosity rather than kills it.","好老師會培育好奇心，而不是扼殺它。","A rather than B：前後要對稱，nurtures 和 kills 都是動詞。"],
 ["Is personality shaped more by nature or by nurture?","人格比較是由天性還是後天教養塑造的？","nature vs. nurture 是「先天與後天」的經典說法。"]],
 "","nurture 和 nurse（護理、照顧）同源：像護士一樣細心照顧 → 培育","🪴|培育"],
["competent","adj.","能勝任的；有能力的",[
 ["She is competent in both English and Japanese.","她的英文和日文都很好。","be competent in/at + 名詞 表示「勝任……、擅長……」。"],
 ["We need a competent leader to guide the team.","我們需要一位能幹的領導者帶領團隊。","to guide 是不定詞修飾 leader，表示用途。"],
 ["Not until he took over the job did people realize how competent he was.","直到他接手這份工作，大家才知道他有多能幹。","Not until 放句首，主要子句倒裝 did people realize；how competent he was 是間接問句，用直述句語序。"]],
 "com-=一起|pet=追求|-ent=形容詞字尾","能和別人一起競爭的 → 能勝任的","👍|能勝任"],
["maturity","n.","成熟",[
 ["She handled the problem with great maturity.","她非常成熟地處理了這個問題。","with + 抽象名詞 = 副詞：with maturity = maturely。"],
 ["Maturity is not about age but about how you treat others.","成熟和年齡無關，而在於你怎麼對待別人。","not A but B 表示「不是 A 而是 B」。"],
 ["These fruits are picked before they reach maturity.","這些水果在成熟之前就被摘下來了。","reach maturity 表示「達到成熟」。"]],
 "matur=成熟的|-ity=名詞字尾","mature（成熟的）變成名詞","🌾|成熟"],
["initiative","n.","主動性；倡議",[
 ["Take the initiative to ask questions in class.","上課要主動發問。","take the initiative to V/in V-ing 表示「主動做某事」。"],
 ["She showed great initiative by organizing the event herself.","她自己籌辦活動，表現出很強的主動性。","by + V-ing 表示「藉由……」。"],
 ["The city launched a new initiative to reduce plastic waste.","市政府推出一項減少塑膠垃圾的新倡議。","launch an initiative 表示「推出一項計畫、倡議」。"]],
 "init=開始|-ive=形容詞或名詞字尾","自己開始做的力量 → 主動性","🙌|主動"],
["autonomous","adj.","自主的；自治的",[
 ["The new curriculum encourages autonomous learning.","新課綱鼓勵自主學習。","autonomous learning 就是「自主學習」，是十二年國教的重要關鍵字。"],
 ["Autonomous learners set their own goals and check their progress.","自主學習者會設定自己的目標並檢查進度。","set 的三態都是 set；and 連接兩個動詞。"],
 ["Self-driving cars are also called autonomous vehicles.","自動駕駛車也被稱為自主車輛。","be called 表示「被稱為」。"]],
 "auto-=自己|nom=規則|-ous=形容詞字尾","自己訂規則的 → 自主的","🧭|自主"],
["procrastination","n.","拖延",[
 ["Procrastination is the enemy of good grades.","拖延是好成績的敵人。","procrastination 不可數；the enemy of 表示「……的敵人」。"],
 ["Owing to procrastination, he had to finish his report in one night.","由於拖延，他得在一個晚上寫完報告。","Owing to + 名詞 = Due to + 名詞，表示原因。"],
 ["Setting small goals can help you overcome procrastination.","設定小目標可以幫你克服拖延。","動名詞片語當主詞。"]],
 "pro-=向前|crastin=明天|-ation=名詞字尾","一直往明天推 → 拖延","🦥|拖延"],
["strive","v.","努力；奮鬥",[
 ["We should strive to improve ourselves every day.","我們應該每天努力提升自己。","strive to V 表示「努力去做」；三態 strive, strove, striven。"],
 ["The school strives for excellence in education.","這所學校在教育上追求卓越。","strive for + 名詞 表示「為……而努力」。"],
 ["The harder you strive, the closer you get to your dream.","你越努力，就離夢想越近。","The + 比較級 ..., the + 比較級 ...：harder 和 closer 都是比較級。"]],
 "","strive 和 strife（爭鬥）同源：和困難搏鬥 → 奮鬥","🏋️|奮鬥"],
["pursuit","n.","追求",[
 ["Everyone has the right to the pursuit of happiness.","每個人都有追求幸福的權利。","the pursuit of + 名詞 表示「對……的追求」；pursuit 是 pursue 的名詞。"],
 ["He moved to Taipei in pursuit of his dream.","他為了追求夢想搬到台北。","in pursuit of 表示「為了追求……」。"],
 ["Learning is a lifelong pursuit.","學習是一輩子的追求。","lifelong 表示「終身的」。"]],
 "","pursue（追求，動詞）→ pursuit（名詞）：去 e 加 it","🏃‍♀️|追求"],
["fulfillment","n.","實現；成就感",[
 ["Helping others gives me a sense of fulfillment.","幫助別人帶給我成就感。","a sense of fulfillment 表示「成就感、滿足感」。"],
 ["Winning the scholarship was the fulfillment of her dream.","拿到獎學金是她夢想的實現。","the fulfillment of + 名詞 表示「……的實現」。"],
 ["Money alone cannot bring fulfillment.","光是錢無法帶來滿足感。","名詞 + alone 表示「光是……、單單……」。"]],
 "ful=滿|fill=填|-ment=名詞字尾","填得滿滿的感覺 → 成就感","🌟|成就感"],
["curiosity","n.","好奇心",[
 ["Curiosity is the starting point of learning.","好奇心是學習的起點。","curiosity 是 curious 的名詞。"],
 ["Out of curiosity, I opened the box.","出於好奇，我打開了那個盒子。","out of curiosity 表示「出於好奇」。"],
 ["The more curiosity you have, the more questions you will ask.","你的好奇心越強，就會問越多問題。","The more + 名詞 + 主詞 + 動詞：curiosity 和 questions 都跟著 the more 移到前面。"]],
 "curi=關心|-osity=名詞字尾","對事情很關心想知道 → 好奇心","🧐|好奇心"],
["literacy","n.","讀寫能力；素養",[
 ["Media literacy helps us judge whether news is true.","媒體素養幫助我們判斷新聞是否真實。","media literacy 媒體素養、digital literacy 數位素養，是 108 課綱常見詞。"],
 ["The literacy rate in Taiwan is very high.","台灣的識字率非常高。","literacy rate 表示「識字率」。"],
 ["Financial literacy should be taught in high school.","理財素養應該在高中教授。","should be + p.p. 被動。"]],
 "liter=文字|-acy=名詞字尾","掌握文字的能力 → 讀寫能力","📚|素養"],
["mindset","n.","心態；思維模式",[
 ["A growth mindset helps students face challenges.","成長型心態幫助學生面對挑戰。","growth mindset（成長型心態）vs. fixed mindset（定型心態）。"],
 ["Changing your mindset can change your life.","改變心態就能改變人生。","動名詞片語當主詞，用單數動詞 can change。"],
 ["With a positive mindset, he saw every failure as a lesson.","抱持積極的心態，他把每次失敗都當成一堂課。","see A as B 表示「把 A 看作 B」。"]],
 "mind=心思|set=設定","心思的設定 → 心態","🧠|心態"],
["expertise","n.","專業知識；專長",[
 ["We need someone with expertise in computer science.","我們需要一位有電腦科學專長的人。","expertise in + 領域，介係詞用 in。"],
 ["Her expertise comes from years of practice.","她的專業來自多年的練習。","years of + 名詞 表示「多年的……」。"],
 ["Without his expertise, the project would have failed.","如果沒有他的專業，這個計畫早就失敗了。","Without ... 搭配 would have + p.p.，表示與過去事實相反的假設。"]],
 "expert=專家|-ise=名詞字尾","專家所擁有的 → 專業知識","🎓|專業"],
/* ---- 網路時代的人際 ---- */
["interaction","n.","互動",[
 ["Face-to-face interaction is important for children's development.","面對面的互動對孩子的發展很重要。","face-to-face 是複合形容詞，用連字號連接。"],
 ["Online games allow interaction with players around the world.","線上遊戲可以和世界各地的玩家互動。","interaction with + 人。"],
 ["Compared with texting, phone calls involve more interaction.","和傳訊息相比，打電話有更多互動。","Compared with + 名詞，用來比較兩件事。"]],
 "inter-=互相|act=行動|-ion=名詞字尾","彼此互相行動 → 互動","🔁|互動"],
["isolate","v.","使孤立；隔離",[
 ["Spending too much time online may isolate you from your family.","花太多時間上網可能讓你和家人疏離。","isolate A from B 表示「使 A 和 B 隔離」。"],
 ["The patient was isolated to prevent the disease from spreading.","病人被隔離以防疾病擴散。","prevent A from V-ing。"],
 ["Isolated from her classmates, she felt lonely.","她和同學疏遠了，覺得很孤單。","過去分詞開頭的分詞構句表示被動狀態：= Because she was isolated from ...。"]],
 "isol=島|-ate=動詞字尾","變成一座孤島 → 使孤立","🏝️|孤立"],
["alienate","v.","使疏遠",[
 ["His rude comments alienated many of his friends.","他無禮的言論讓許多朋友疏遠了他。","alienate 人 表示「使某人疏遠、使不友善」。"],
 ["Many elderly people feel alienated in the digital age.","許多老年人在數位時代覺得被疏離。","feel alienated 表示「感到疏離」。"],
 ["Being too competitive can alienate your teammates.","太好勝可能會讓隊友疏遠你。","動名詞 Being too competitive 當主詞。"]],
 "alien=陌生的|-ate=動詞字尾","使變得陌生 → 使疏遠","👽|疏遠"],
["superficial","adj.","膚淺的；表面的",[
 ["Many online friendships are superficial.","許多網路友誼都很膚淺。","superficial 的相反是 deep 或 profound。"],
 ["He only has a superficial understanding of the issue.","他對這個議題只有表面的了解。","a superficial understanding of 表示「對……一知半解」。"],
 ["Don't judge people by superficial things like their clothes.","不要用衣著這類表面的東西評斷人。","like 當介係詞表示「像是」，可以用來舉例，後面接名詞。"]],
 "super-=在上面|fic=表面；臉|-ial=形容詞字尾","只停在表面上的 → 膚淺的","🎭|膚淺"],
["intimate","adj.","親密的",[
 ["She only shares her secrets with a few intimate friends.","她只和幾個親密的朋友分享祕密。","a few + 可數複數 表示「一些」；intimate 的 -ate 唸 /ət/。"],
 ["An intimate relationship is built on trust.","親密的關係建立在信任之上。","be built on 表示「建立在……之上」。"],
 ["The café has an intimate atmosphere.","這家咖啡廳氣氛溫馨。","intimate 也可以形容地方「小而溫馨的」。"]],
 "","intimate 來自拉丁文 intimus「最裡面的」：走進心裡最深處的 → 親密的","💞|親密"],
["anonymous","adj.","匿名的",[
 ["Anonymous comments are often more aggressive.","匿名留言往往更有攻擊性。","often 放在 be 動詞後面。"],
 ["The book was written by an anonymous author.","這本書是由一位匿名作者寫的。","anonymous 開頭是母音，用 an。"],
 ["Being anonymous online does not mean you can say anything.","在網路上匿名並不代表你可以說任何話。","動名詞片語當主詞，用 does not。"]],
 "an-=沒有|onym=名字|-ous=形容詞字尾","沒有名字的 → 匿名的","🕶️|匿名"],
["distraction","n.","分心的事物；分心",[
 ["Phones are the biggest distraction in class.","手機是課堂上最大的干擾。","distraction 可數，表示「讓人分心的東西」。"],
 ["I need a quiet place without distractions to study.","我需要一個沒有干擾的安靜地方讀書。","to study 修飾 place，表示用途。"],
 ["Due to constant distraction, he could not finish his work.","由於不斷分心，他無法完成工作。","Due to + 名詞片語 constant distraction。"]],
 "dis-=分開|tract=拉|-ion=名詞字尾","把注意力拉開 → 分心","📱|分心"],
["authentic","adj.","真實的；道地的",[
 ["Is this photo authentic, or has it been edited?","這張照片是真的，還是被修過？","has it been edited 是現在完成式被動的疑問句。"],
 ["People prefer authentic stories to perfect images.","人們喜歡真實的故事，勝過完美的形象。","prefer A to B 表示「喜歡 A 勝過 B」，to 是介係詞。"],
 ["This restaurant serves authentic Thai food.","這家餐廳供應道地的泰國菜。","authentic 形容食物時表示「道地的」。"]],
 "","authentic 的 auth 和 author（作者）同源：真的出自作者本人 → 真實的","✅|真實"],
["misleading","adj.","誤導的",[
 ["The title of the article is misleading.","這篇文章的標題會誤導人。","misleading 是「令人誤解的」，主詞通常是事物。"],
 ["Misleading information spreads quickly on social media.","誤導人的資訊在社群媒體上散播得很快。","information 不可數，用單數動詞 spreads。"],
 ["It is undeniable that some ads are misleading.","不可否認，有些廣告具有誤導性。","It is undeniable that ... 翻譯句型。"]],
 "mis-=錯誤|lead=引導|-ing=形容詞字尾","引導到錯的方向 → 誤導的","🧭|誤導"],
["verify","v.","查證；證實",[
 ["Always verify the source before sharing news.","分享新聞前一定要查證來源。","before + V-ing；Always 放在祈使句句首表示「一定要」。"],
 ["The police verified that the photo was fake.","警方證實那張照片是假的。","verify that ... 表示「證實……」。"],
 ["Your account needs to be verified by email.","你的帳號需要透過電子郵件驗證。","need to be + p.p. 表示「需要被……」。"]],
 "ver=真實|-ify=使","使確定是真的 → 查證","🔍|查證"],
["solitude","n.","獨處；孤獨",[
 ["Some people enjoy solitude more than parties.","有些人喜歡獨處勝過派對。","solitude 是「享受的獨處」，loneliness 是「難受的寂寞」。"],
 ["In solitude, she found time to reflect on herself.","在獨處中，她找到了反省自己的時間。","reflect on 表示「反思」。"],
 ["A little solitude can be good for your mind.","一點獨處對心靈有益。","a little + 不可數名詞 表示「一些」。"]],
 "sol=單獨|-itude=名詞字尾","單獨一個人的狀態 → 獨處","@solitude"],
["reconcile","v.","使和好；調和",[
 ["After a long talk, the two friends were finally reconciled.","長談之後，兩個朋友終於和好了。","be reconciled (with 人) 表示「（與某人）和好」。"],
 ["It is hard to reconcile work with family life.","要兼顧工作和家庭生活很難。","reconcile A with B 表示「使 A 與 B 協調、兼顧」。"],
 ["She tried to reconcile with her sister but failed.","她試著和姊姊和好，但失敗了。","reconcile with 人 表示「和某人和好」。"]],
 "re-=再|concile=使聚在一起","再聚在一起 → 和好","🤝|和好"],
["sincere","adj.","真誠的",[
 ["Please accept my sincere apology.","請接受我真誠的道歉。","sincere apology/thanks 是常見搭配。"],
 ["A sincere friend tells you the truth even when it hurts.","真誠的朋友即使真話會傷人也會告訴你。","even when 表示「即使在……的時候」。"],
 ["It goes without saying that sincere words mean more than expensive gifts.","不用說，真誠的話語比昂貴的禮物更有意義。","It goes without saying that ... 翻譯句型；mean more than 表示「比……更有意義」。"]],
 "","sincere 來自拉丁文「純淨、沒有雜質的」→ 真誠的","💗|真誠"],
["betray","v.","背叛；洩露",[
 ["He betrayed my trust by sharing my secret.","他把我的祕密說出去，背叛了我的信任。","by + V-ing 表示方法。"],
 ["Never betray a friend who trusts you.","永遠不要背叛信任你的朋友。","who 引導限定關係子句。"],
 ["Her shaking hands betrayed her nervousness.","她發抖的雙手洩露了她的緊張。","betray 也有「不自覺地洩露」的意思。"]],
 "be-=加強|tray=交出","把人交給敵人 → 背叛","🔪|背叛"]
];

/* 沒有字根可拆的字：記憶小撇步（只登記本單元的字） */
Object.assign(MEMO, {
  biased:"bias 原本是保齡球「偏一邊的重心」：球一直往同一邊偏，看事情也一直偏向同一邊 → 有偏見的。",
  whereas:"whereas = while（對比用）：A 是這樣，whereas B 是那樣。前面常加逗號，連接兩個對比的子句。",
  merit:"merit 和 demerit（缺點、記過）是一對；judge on merit 就是「看實力評斷」。",
  phenomenon:"phenomenon 單數、phenomena 複數，跟 criterion → criteria 一樣，是希臘文來的字，學測愛考。",
  nurture:"nurture 和 nurse 同一家：護士細心照顧病人，父母細心照顧孩子 → 培育。nature（先天）vs. nurture（後天）只差一點點。",
  strive:"strive 和 strife（衝突）同源：和困難搏鬥 → 奮鬥。strive to V／strive for + 名詞。",
  pursuit:"pursue（動詞）去 e 加 it → pursuit（名詞）。in pursuit of + 夢想，就是「為了追求……」。",
  intimate:"in 是「裡面」，intimate 是「最裡面的」：能走進你心裡最深處的朋友，就是親密的朋友。",
  authentic:"auth 和 author（作者）同源：真的出自作者本人之手 → 真實的、道地的。",
  sincere:"sincere 來自拉丁文 sincerus「純淨的」：心意純淨、沒有摻假 → 真誠的。副詞 sincerely 常用在信尾。"
});

const S3_1_2_GRAMMAR = [
{ id:"g1", title:"翻譯常考句型",
  intro:"學測中翻英最愛考固定句型：只要認出中文背後的「骨架」，套進句型再填單字，就能穩穩拿分。",
  table:[["中文意思","英文句型","範例"],["不可否認……","It is undeniable that + S + V／There is no denying that + S + V","It is undeniable that the internet has changed our lives."],["不用說……","It goes without saying that + S + V","It goes without saying that health comes first."],["直到……才……","Not until + 時間／子句 + 助動詞 + S + 原形動詞","Not until he lost his best friend did he realize ..."],["越……就越……","The + 比較級 + S + V, the + 比較級 + S + V","The harder you strive, the closer you get to your dream."]],
  points:[
   "There is no denying that ...：deny 一定要用動名詞 denying（There is no + V-ing 表示「不可能……」），寫成 There is no deny 是學測常見錯誤。",
   "It goes without saying that ...：固定用 goes 和 saying，不能寫成 It is without saying 或 It goes without say。",
   "Not until 放句首，倒裝的是「主要子句」，until 後面的子句不倒裝：Not until I got home did I realize ...（不是 Not until did I get home ...）。",
   "Not until ... did ... 可以改寫成高二學過的強調句 It was not until ... that ...，強調句不倒裝：It was not until I got home that I realized ...。",
   "The + 比較級 句型中，跟著比較級的形容詞或名詞要一起往前移：The more careful you are（不是 The more you are careful）；The more books you read（books 跟著 the more）。",
   "可數名詞用 the more / the fewer，不可數名詞用 the more / the less：The more careful you are, the fewer mistakes you make."],
  ex:[
   ["It is undeniable that Taiwan's tech industry continues to innovate.","不可否認，台灣的科技業持續在創新。","It is undeniable that + 完整子句。"],
   ["There is no denying that misleading information spreads quickly online.","不可否認，誤導人的資訊在網路上散播得很快。","There is no denying that ...：denying 是動名詞。"],
   ["It goes without saying that sincere words mean more than expensive gifts.","不用說，真誠的話語比昂貴的禮物更有意義。","It goes without saying that ...：不用說……。"],
   ["Not until he took over the job did people realize how competent he was.","直到他接手這份工作，大家才知道他有多能幹。","Not until 放句首，主要子句倒裝 did people realize。"],
   ["The more curiosity you have, the more questions you will ask.","你的好奇心越強，就會問越多問題。","名詞 curiosity、questions 跟著 the more 一起前移。"]]},
{ id:"g2", title:"作文常用句型",
  intro:"學測英文作文要「有開頭、有例子、有讓步、有結論」。把這幾組句型練熟，文章的架構馬上就出來了。",
  table:[["功能","句型","範例"],["開頭","When it comes to + N／V-ing, ...／Nowadays, ...","When it comes to making friends, honesty matters most."],["表達看法","In my opinion, ...／As far as I am concerned, ...","As far as I am concerned, homework should be limited."],["舉例","Take ... for example. ...／such as + 名詞","Take my sister for example. She reads a novel every week."],["讓步","Admittedly, ..., but ...","Admittedly, smartphones are convenient, but they can be addictive."],["結論","In conclusion, ...／All in all, ...／To sum up, ...","All in all, the benefits outweigh the drawbacks."]],
  points:[
   "When it comes to 的 to 是介係詞，後面接名詞或 V-ing：When it comes to making friends（不是 make friends）。",
   "Take A for example 是祈使句，後面通常另起一句說明；for example 可以放句首或句中，後面接完整的句子。",
   "such as 只能接名詞或動名詞來列舉，不能接完整句子：sports such as basketball and tennis。",
   "Admittedly ..., but ... 是正確的讓步句型；但 Although ..., but ... 是錯的：although 和 but 不能同時出現在同一句。",
   "結論用 In conclusion、All in all、To sum up，後面加逗號；不要寫成 In the conclusion 或 All in the all。",
   "不要一直寫 I think：換成 In my opinion、As far as I am concerned、From my viewpoint，閱卷老師會覺得用字更成熟。"],
  ex:[
   ["When it comes to learning English, perseverance is the key.","說到學英文，毅力是關鍵。","When it comes to + V-ing。"],
   ["Take my cousin for example. He practiced every day and finally passed the test.","以我表哥為例，他每天練習，終於通過了考試。","Take ... for example 後面另起一句說明。"],
   ["Teenagers enjoy many online activities, such as playing games and watching videos.","青少年喜歡許多線上活動，像是玩遊戲和看影片。","such as 後面接動名詞列舉。"],
   ["Admittedly, online classes are convenient, but they lack face-to-face interaction.","誠然，線上課程很方便，但缺乏面對面的互動。","Admittedly ..., but ...：先讓步再轉折。"],
   ["In conclusion, a growth mindset helps us become more resilient.","總之，成長型心態幫助我們變得更有韌性。","In conclusion 放在結論段開頭，後面加逗號。"]]},
{ id:"g3", title:"因果與對比的表達",
  intro:"論說文最常做兩件事：說明「為什麼」和「比一比」。用對因果與對比的片語，文章的邏輯就會清楚又有說服力。",
  table:[["類型","用法","後面接什麼"],["原因","due to／owing to／as a result of／because of","名詞或 V-ing（不能接子句）"],["結果（A 造成 B）","A lead to／result in／contribute to B","名詞或 V-ing（to 是介係詞）"],["倒過來（B 來自 A）","B result from A","原因"],["對比兩件事","In contrast, ...／Compared with A, B ...","比較兩個不同的對象"],["否定前一句","On the contrary, ...","「不是那樣，正好相反」"]],
  points:[
   "due to、owing to、as a result of、because of 是介係詞片語，後面接名詞；because 是連接詞，後面接子句：due to the rain／because it rained。",
   "方向別搞反：A result in B（A 是原因），B result from A（A 仍是原因）。Smoking results in cancer. = Cancer results from smoking.",
   "lead to、contribute to 的 to 是介係詞，後面接名詞或 V-ing：lead to losing weight（不是 lead to lose）。",
   "contribute to 表示「是……的原因之一、促成」，可以用在好事也可以用在壞事：Stress contributes to illness.",
   "In contrast 用來比較兩件不同的事；On the contrary 用來否定前一句的說法：He is not lazy. On the contrary, he works very hard.",
   "Compared with + 名詞 是分詞片語，主要子句的主詞要和被比較的對象同類：Compared with last year, this year's sales are higher."],
  ex:[
   ["Due to aggressive comments online, she decided to close her account.","由於網路上充滿攻擊性的留言，她決定關掉帳號。","Due to + 名詞片語。"],
   ["Owing to procrastination, he had to finish his report in one night.","由於拖延，他得在一個晚上寫完報告。","Owing to = Due to。"],
   ["Spending too much time online may lead to isolation from your family.","花太多時間上網可能導致你和家人疏離。","lead to + 名詞。"],
   ["Compared with texting, phone calls involve more interaction.","和傳訊息相比，打電話有更多互動。","Compared with + 名詞。"],
   ["He is not shy. On the contrary, he loves speaking in public.","他不害羞，相反地，他很喜歡公開演講。","On the contrary 否定前一句的說法。"]]},
{ id:"g4", title:"段落寫作：主題句、支持句、結論句與連貫",
  intro:"一個好段落像一個漢堡：上面是主題句，中間是支持句，下面是結論句；轉折詞和代名詞就是把它們黏在一起的醬料（cohesion）。",
  table:[["部分","功能","範例"],["主題句 topic sentence","點出段落的中心思想，通常放第一句","Social media has changed the way teenagers make friends."],["支持句 supporting sentences","用理由、例子、細節說明主題句","For one thing, ... Furthermore, ... Take ... for example."],["結論句 concluding sentence","呼應主題句、總結或提出建議","All in all, we should use social media wisely."],["連貫 cohesion","用代名詞指代、轉折詞串連句子","it／they／this／such；however、therefore、moreover"]],
  points:[
   "主題句要有觀點、範圍剛好：太廣（Technology is important.）或太窄（I bought a phone yesterday.）都不適合。",
   "每個支持句都要和主題句相關（relevant）；學測「篇章結構」常考找出不屬於段落的離題句。",
   "指代：用 it、they、this、these、such 指前面提過的東西，避免一直重複名詞；代名詞的單複數要和指的對象一致。",
   "轉折詞要用對邏輯：加碼 furthermore／moreover；對比 however／nevertheless／whereas；因果 therefore／consequently；舉例 for example。",
   "however、therefore、consequently 是副詞，不能只用逗號連接兩個句子（逗號連接句）：要用句號或分號，He studied hard; however, he failed.",
   "結論句不要加入新的論點，而是換句話重述主旨，或提出建議與展望。"],
  ex:[
   ["Social media has changed the way teenagers make friends.","社群媒體改變了青少年交朋友的方式。","主題句：點出整段的中心思想。"],
   ["For one thing, it allows them to meet people with similar interests.","一方面，它讓他們能認識興趣相同的人。","支持句：it 指代前一句的 social media，them 指 teenagers。"],
   ["Furthermore, it helps shy students express themselves.","此外，它幫助害羞的學生表達自己。","Furthermore 加碼第二個理由。"],
   ["However, many of these friendships are superficial.","然而，這些友誼有很多是膚淺的。","However 轉折；these friendships 指前面提到的網路友誼。"],
   ["All in all, social media is a useful tool, but it cannot replace face-to-face interaction.","總之，社群媒體是好用的工具，但無法取代面對面的互動。","結論句：呼應主題句並提出看法。"]]}
];

const S3_1_2_QUIZ = [
 ["There is no ___ that the internet has changed our lives.",["deny","denying","denied","to deny"],1,"There is no denying that ... 固定用動名詞 denying。","g1"],
 ["It goes without ___ that health is more important than wealth.",["say","said","saying","to say"],2,"It goes without saying that ... 表示「不用說……」，without 是介係詞，接 V-ing。","g1"],
 ["Not until the teacher explained it again ___ the question.",["I understood","I did understand","understood I","did I understand"],3,"Not until 放句首，主要子句要倒裝：助動詞 did + 主詞 + 原形動詞。","g1"],
 ["___ you practice, the more fluent you will become.",["The more","More","The most","Most"],0,"The + 比較級 ..., the + 比較級 ...：越……就越……，兩個 the 都不能少。","g1"],
 ["The more careful you are, ___ mistakes you will make.",["the less","the few","the fewer","fewer"],2,"mistakes 是可數名詞，用 the fewer；不可數名詞才用 the less。","g1"],
 ["It was not until midnight ___ he finished the report.",["that","did","when","which"],0,"It was not until ... that ... 是強調句，用 that，主要部分不倒裝。","g1"],
 ["「不可否認，運動對健康有益。」最正確的翻譯是？",["It is undeniable exercise good for health.","There is no deny that exercise is good for health.","It undeniable that exercise is good for health.","It is undeniable that exercise is good for health."],3,"It is undeniable that + 完整子句；其他選項不是缺動詞就是 deny 用錯形式。","g1"],
 ["The ___ you read, the ___ you will know.",["much / more","more / more","more / most","most / more"],1,"兩邊都用 the + 比較級：The more ..., the more ...。","g1"],
 ["下列哪一句正確？",["The more you are careful, the better you do.","More careful you are, fewer mistakes you make.","The more careful you are, the fewer mistakes you make.","The more careful are you, the fewer mistakes you make."],2,"形容詞 careful 要跟著 the more 前移，後面接正常語序的主詞 + 動詞，不倒裝。","g1"],
 ["When it comes to ___ friends online, we should be careful.",["make","making","made","to make"],1,"When it comes to 的 to 是介係詞，後面接 V-ing。","g2"],
 ["___ my brother for example. He reads a novel every week.",["Take","Taking","Took","To take"],0,"Take ... for example 是祈使句，用原形動詞 Take 開頭。","g2"],
 ["Many sports, ___ basketball and tennis, are popular in Taiwan.",["take","for instance is","such as","as such"],2,"such as + 名詞 用來列舉例子。","g2"],
 ["下列哪一句正確？",["Although it is convenient, but it is expensive.","Admittedly, it is convenient, but it is expensive.","Admittedly it is convenient, it is expensive but.","Although it is convenient, however it is expensive."],1,"Admittedly ..., but ... 是正確的讓步句型；although 不能和 but 或 however 連用。","g2"],
 ["（最後一段開頭）___, the advantages of online learning outweigh its disadvantages.",["For example","On the contrary","Such as","In conclusion"],3,"結論段用 In conclusion 開頭，總結全文的看法。","g2"],
 ["___ I am concerned, homework should be limited.",["As far as","As long as","As soon as","As well as"],0,"As far as I am concerned 表示「就我而言」，是表達看法的句型。","g2"],
 ["Teenagers enjoy many online activities, such as ___.",["they play games and watch videos","playing games and watching videos","play games and watch videos","to play games and watch videos"],1,"such as 後面只能接名詞或動名詞，不能接完整句子或不定詞。","g2"],
 ["___, smartphones are useful, but students should not use them in class.",["Although","Despite","Admittedly","Because"],2,"後面有 but，所以前面不能用 Although；Admittedly ..., but ... 才是正確的讓步句型。","g2"],
 ["All in ___, reading is a habit worth developing.",["the all","sum","conclusion","all"],3,"All in all 表示「總之」，是固定說法。","g2"],
 ["The flight was delayed ___ the heavy fog.",["because","since","due to","so"],2,"the heavy fog 是名詞片語，要用介係詞片語 due to；because、since 是連接詞，要接子句。","g3"],
 ["The game was canceled because ___.",["the typhoon","of it rained","the typhoon was coming","due to the typhoon"],2,"because 是連接詞，後面要接完整子句。","g3"],
 ["Too much screen time may lead to ___ trouble sleeping.",["have","having","had","has"],1,"lead to 的 to 是介係詞，後面接 V-ing。","g3"],
 ["Lung cancer often results ___ smoking.",["from","in","to","of"],0,"B result from A：結果（lung cancer）來自原因（smoking）。","g3"],
 ["Smoking often results ___ lung cancer.",["from","to","in","with"],2,"A result in B：原因（smoking）造成結果（lung cancer）。","g3"],
 ["Regular exercise contributes ___ better health.",["for","in","with","to"],3,"contribute to + 名詞 表示「促成、有助於」。","g3"],
 ["He is not lazy. ___, he is the hardest-working student in class.",["In contrast","On the contrary","Compared with","As a result"],1,"前一句是否定，後一句說「正好相反」，用 On the contrary。","g3"],
 ["Tom loves sports. ___, his twin brother prefers reading.",["On the contrary","Due to","Owing to","In contrast"],3,"比較兩個不同的人，用 In contrast；On the contrary 是用來否定前一句。","g3"],
 ["___ with last year, the number of visitors has doubled.",["Compare","Comparing","Compared","To compare"],2,"Compared with ... 是固定的分詞片語，表示「和……相比」。","g3"],
 ["段落中點出中心思想、通常放在第一句的是？",["supporting sentence","concluding sentence","topic sentence","example"],2,"主題句（topic sentence）點出段落的中心思想。","g4"],
 ["下列哪一句最適合當段落的主題句？",["Smartphones have changed the way students learn.","I bought a new phone last Sunday.","Technology is a thing.","My phone is black."],0,"好的主題句要有觀點、範圍剛好；其他選項太窄或太空泛。","g4"],
 ["Reading has many benefits. ___, it widens our knowledge. Furthermore, it reduces stress.",["However","First","On the contrary","In conclusion"],1,"列舉第一個好處用 First，後面再用 Furthermore 加碼。","g4"],
 ["My sister loves dogs. ___ has three of them.",["It","They","She","He"],2,"代名詞要指得清楚：She 指前面的 My sister。","g4"],
 ["The test was hard. ___, most students passed it.",["Therefore","Furthermore","For example","However"],3,"前後語意相反（很難卻通過），用轉折詞 However。","g4"],
 ["下列哪一句的標點和連接正確？",["He studied hard, however, he failed.","He studied hard; however, he failed.","He studied hard however he failed.","He studied hard, therefore he passed."],1,"however、therefore 是副詞，不能只用逗號連接兩個句子，要用分號或句號。","g4"],
 ["段落主題是「運動有益健康」，哪一句是離題句？",["Running strengthens the heart.","Swimming helps people relax.","My cousin lives in Kaohsiung.","Exercise improves sleep quality."],2,"表哥住在高雄和運動的好處無關，是要刪掉的離題句。","g4"],
 ["Many teens spend hours online every night. ___ habit may harm their eyes.",["This","These","Those","They"],0,"habit 是單數，用 This 指代前一句提到的行為。","g4"],
 ["He missed the bus. ___, he was late for school.",["However","Whereas","For example","Consequently"],3,"前因後果，用 Consequently（因此）。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S3_1_2_CLASS = {
g1:[
 {say:"高三同學好！這次段考主攻學測的翻譯和作文。先講翻譯：中翻英最怕一個字一個字硬翻，其實很多題目背後都藏著固定句型。看到「不可否認」，你要馬上想到：{It is undeniable that}。", board:[["不可否認……",[]],["It is undeniable that + S + V",["It is undeniable that"]]]},
 {say:"同一個意思還有另一種寫法：{There is no denying that}。注意！deny 要變成 denying，因為 There is no 後面接動名詞，表示「不可能……」。", board:[["There is no denying that + S + V",["denying"]],["There is no deny that ...",[],true]]},
 {say:"口訣記起來！", chant:"不可否認兩招：It is undeniable，There is no denying！"},
 {ask:{say:"考考你！", q:"There is no ___ that the internet has changed our lives.", opts:["deny","denying","denied"], ans:1,
   ok:"正確！There is no 後面接動名詞 denying，這是閱卷老師最愛扣分的地方。", bad:{0:"There is no 後面不能接原形動詞，要用動名詞 denying。",2:"denied 是過去分詞，這個句型固定用 denying。"},
   again:{q:"It is ___ that the internet has changed our lives.", opts:["undeniable","undenying"], ans:0, exp:"It is undeniable that ...：undeniable 是形容詞。"}}},
 {say:"第二個：「不用說、不言而喻」，英文是 {It goes without saying that}。goes 和 saying 都固定不變，不能寫成 It is without saying。", board:[["It goes without saying that health comes first.",["goes","saying"]],["It is without saying that ...",[],true]]},
 {say:"第三個是倒裝大魔王：「直到……才……」。高二學過強調句 {It was not until ten that he came home.}，高三要學更帥的寫法：把 Not until 放句首，後面的主要子句要倒裝！{Not until ten did he come home.}", board:[["It was not until ten that he came home.",["It was not until","that"]],["Not until ten did he come home.",["Not until","did he come"]]]},
 {say:"倒裝口訣！", chant:"Not until 站前面，主要子句要倒裝，助動詞跑到主詞前！"},
 {ask:{q:"Not until the teacher explained it ___ the question.", opts:["I understood","did I understand","I did understand"], ans:1,
   ok:"太棒了！Not until 放句首，主要子句倒裝成 did I understand。", bad:{0:"Not until 放句首時，主要子句要倒裝，不能維持 I understood。",2:"倒裝是把助動詞 did 移到主詞 I 前面：did I understand。"},
   again:{q:"Not until I got home ___ that I had lost my key.", opts:["did I realize","I realized"], ans:0, exp:"倒裝的是主要子句 did I realize；until 後面的 I got home 不倒裝。"}}},
 {say:"小心陷阱：倒裝的是「主要子句」，until 後面那一句不動！{Not until I got home did I realize ...} 是對的，寫成 Not until did I get home 就錯了。", board:[["Not until I got home did I realize ...",["did I realize"]],["Not until did I get home ...",[],true]]},
 {say:"最後一個：「越……就越……」：{The more you read, the more you know.} 兩邊都是 the 加比較級。重點來了：跟著比較級的形容詞或名詞，要一起搬到前面！", board:[["The more careful you are, the fewer mistakes you make.",["The more careful","the fewer mistakes"]],["The more you are careful, ...",[],true]]},
 {say:"比較級口訣！", chant:"The 比較級，形容詞名詞一起搬，後面主詞動詞照順序！"},
 {ask:{say:"最後一題！", q:"The more careful you are, ___ mistakes you will make.", opts:["the less","the fewer","fewer"], ans:1,
   ok:"完美！mistakes 是可數名詞，用 the fewer，而且 the 不能少。", bad:{0:"mistakes 可數，要用 fewer；less 是給不可數名詞用的。",2:"這個句型兩邊都要有 the：the fewer。"},
   again:{q:"The harder you strive, the ___ you get to your dream.", opts:["closer","more close","close"], ans:0, exp:"close 的比較級是 closer：The harder ..., the closer ...。"}}},
 {say:"翻譯句型過關！複習：不可否認用 It is undeniable／There is no denying；不用說用 It goes without saying；Not until 放句首要倒裝；The 比較級要把形容詞名詞一起搬。考前把例句各寫三遍，翻譯分數穩穩的！", end:true}
],
g2:[
 {say:"今天來搞定學測作文！一篇論說文就像蓋房子：開頭、舉例、讓步、結論，每個位置都有好用的句型。先看開頭：{When it comes to} 加名詞，意思是「說到……」。", board:[["When it comes to learning English, practice is everything.",["When it comes to"]]]},
 {say:"注意！When it comes to 的 to 是介係詞，後面要接名詞或 V-ing。寫成 When it comes to learn 是最常見的錯誤。", board:[["When it comes to making friends, ...",["making"]],["When it comes to make friends, ...",[],true]]},
 {say:"口訣！", chant:"說到什麼 When it comes to，to 是介係詞，後面接 ing！"},
 {ask:{q:"When it comes to ___ friends online, we should be careful.", opts:["make","making","made"], ans:1,
   ok:"對！to 是介係詞，接 V-ing：making。", bad:{0:"這個 to 是介係詞，不是不定詞，不能接原形動詞。",2:"made 是過去式，介係詞後面要接動名詞 making。"},
   again:{q:"___ it comes to sports, my brother is an expert.", opts:["When","What"], ans:0, exp:"固定句型 When it comes to + N。"}}},
 {say:"第二步：舉例！論點要有例子才有說服力。{Take my sister for example. She reads a novel every week.} Take 開頭是祈使句，後面另起一句說明。列舉名詞時用 {such as}：{sports such as basketball and tennis}。", board:[["Take my sister for example. She ...",["Take","for example"]],["sports such as basketball and tennis",["such as"]]]},
 {say:"陷阱：such as 後面只能接名詞或動名詞，不能接完整的句子！", board:[["such as playing games and watching videos",["playing","watching"]],["such as they play games",[],true]]},
 {ask:{q:"Teenagers enjoy many activities, such as ___.", opts:["they play games","playing games","play games"], ans:1,
   ok:"讚！such as 後面接動名詞 playing games。", bad:{0:"such as 不能接完整的句子喔！",2:"such as 後面要接名詞或動名詞，不能接原形動詞。"},
   again:{q:"___ my cousin for example. He practices every day.", opts:["Take","Taking"], ans:0, exp:"Take ... for example 是祈使句，用原形 Take。"}}},
 {say:"第三步：讓步！高手的作文會先承認對方有道理，再提出自己的看法，這樣更有說服力。用 {Admittedly ..., but ...}：{Admittedly, smartphones are convenient, but they can be addictive.}", board:[["Admittedly, smartphones are convenient, but they can be addictive.",["Admittedly","but"]]]},
 {say:"超級陷阱：Admittedly 可以加 but，但 Although 不行！中文說「雖然……但是……」，英文卻只能選一個。", board:[["Although it is convenient, it is expensive.",["Although"]],["Although it is convenient, but it is expensive.",[],true]]},
 {say:"讓步口訣！", chant:"Admittedly 配 but，Although 不配 but！"},
 {ask:{q:"哪一句正確？", opts:["Although it is cheap, but it is slow.","Admittedly, it is cheap, but it is slow.","Although it is cheap, however it is slow."], ans:1,
   ok:"完全正確！Admittedly ..., but ... 是標準的讓步句型。", bad:{0:"although 和 but 不能同時出現！",2:"although 也不能和 however 連用喔。"},
   again:{q:"___, the plan is risky, but it is worth trying.", opts:["Admittedly","Although"], ans:0, exp:"後面有 but，前面用 Admittedly。"}}},
 {say:"最後一步：結論。最後一段開頭用 {In conclusion}、{All in all} 或 {To sum up}，再呼應你的主題、提出建議。另外，別一直寫 I think，換成 {As far as I am concerned} 會更成熟！", board:[["In conclusion, ...",["In conclusion"]],["All in all, ...",["All in all"]],["As far as I am concerned, ...",["As far as I am concerned"]]]},
 {ask:{say:"最後一題！", q:"（最後一段開頭）___, the benefits outweigh the drawbacks.", opts:["For example","In conclusion","Such as"], ans:1,
   ok:"太棒了！結論段用 In conclusion 開頭。", bad:{0:"For example 是舉例用的，不適合放在結論段開頭。",2:"such as 後面接名詞列舉，不能放在句首當結論。"},
   again:{q:"All in ___, reading is a habit worth developing.", opts:["all","the all"], ans:0, exp:"All in all 是固定說法，中間沒有 the。"}}},
 {say:"作文句型過關！口訣：When it comes to 接 ing；Take ... for example，such as 接名詞；Admittedly 配 but，Although 不配 but；最後 In conclusion 收尾。下次寫作文，把這些句型一個一個放進去吧！", end:true}
],
g3:[
 {say:"論說文最常做兩件事：說「為什麼」和「比一比」。今天先學說原因：{due to}、{owing to}、{as a result of}，意思都是「由於」。", board:[["due to the rain",["due to"]],["owing to the rain",["owing to"]],["as a result of the rain",["as a result of"]]]},
 {say:"重點：它們都是介係詞片語，後面只能接名詞！要接子句，就要用連接詞 because。", board:[["The game was canceled due to the rain.",["due to the rain"]],["The game was canceled because it rained.",["because it rained"]],["The game was canceled due to it rained.",[],true]]},
 {say:"口訣！", chant:"due to、owing to 接名詞，because 才接句子！"},
 {ask:{q:"The flight was delayed ___ the heavy fog.", opts:["because","due to","so"], ans:1,
   ok:"對！the heavy fog 是名詞片語，用 due to。", bad:{0:"because 是連接詞，後面要接子句；這裡是名詞，要用 due to。",2:"so 表示結果，而且不能直接接名詞。"},
   again:{q:"___ procrastination, he finished his report in one night.", opts:["Owing to","Because"], ans:0, exp:"procrastination 是名詞，用 Owing to。"}}},
 {say:"再來說結果：A {lead to} B、A {result in} B、A {contribute to} B，A 是原因，B 是結果。注意 lead to、contribute to 的 to 都是介係詞，要接名詞或 V-ing！", board:[["Smoking results in cancer.",["results in"]],["Exercise contributes to better health.",["contributes to"]],["Too much screen time may lead to having trouble sleeping.",["lead to having"]]]},
 {say:"學測最愛考的陷阱：result in 和 result from 方向相反！{Smoking results in cancer.} 抽菸導致癌症；{Cancer results from smoking.} 癌症來自抽菸。不管怎麼寫，抽菸都是原因。", board:[["原因 results in 結果",["results in"]],["結果 results from 原因",["results from"]]]},
 {say:"口訣！", chant:"result in 往後推出結果，result from 往回找原因！"},
 {ask:{q:"Lung cancer often results ___ smoking.", opts:["in","from","to"], ans:1,
   ok:"讚！結果（肺癌）來自原因（抽菸），用 result from。", bad:{0:"result in 後面接結果，這裡 smoking 是原因，要用 from。",2:"沒有 result to 這種說法喔。"},
   again:{q:"Regular exercise contributes ___ better health.", opts:["to","for"], ans:0, exp:"contribute to + 名詞：有助於……。"}}},
 {say:"最後是對比！比較兩件不同的事，用 {In contrast}：{Tom loves sports. In contrast, his brother prefers reading.} 要否定前一句，說「才不是，正好相反」，用 {On the contrary}：{He is not lazy. On the contrary, he works very hard.}", board:[["Tom loves sports. In contrast, his brother prefers reading.",["In contrast"]],["He is not lazy. On the contrary, he works very hard.",["On the contrary"]]]},
 {ask:{q:"He is not lazy. ___, he is the hardest-working student in class.", opts:["In contrast","On the contrary","Due to"], ans:1,
   ok:"完美！前一句是否定，後面說「正好相反」，用 On the contrary。", bad:{0:"In contrast 是比較兩個不同的對象，這裡是否定前一句的說法。",2:"due to 是表示原因，不是對比。"},
   again:{q:"Tom loves sports. ___, his twin brother prefers reading.", opts:["On the contrary","In contrast"], ans:1, exp:"比較兩個不同的人，用 In contrast。"}}},
 {say:"也可以用 {Compared with} 來比較：{Compared with texting, phone calls involve more interaction.} 和傳訊息相比，打電話有更多互動。", board:[["Compared with texting, phone calls involve more interaction.",["Compared with"]]]},
 {say:"因果與對比過關！口訣：due to、owing to 接名詞，because 才接句子；result in 推出結果，result from 找回原因；In contrast 比兩件事，On the contrary 否定前一句。", end:true}
],
g4:[
 {say:"最後一課：段落寫作！一個好段落就像漢堡：最上面的麵包是主題句，中間的肉和菜是支持句，最下面的麵包是結論句。", board:[["主題句 topic sentence",["topic sentence"]],["支持句 supporting sentences",["supporting sentences"]],["結論句 concluding sentence",["concluding sentence"]]]},
 {say:"主題句通常放第一句，點出整段的中心思想。好的主題句要有觀點、範圍剛好。{Social media has changed the way teenagers make friends.} 很好；Technology is important 太空泛，I bought a phone yesterday 太窄。", board:[["Social media has changed the way teenagers make friends.",["Social media","changed"]],["I bought a phone yesterday.",[],true]]},
 {say:"漢堡口訣！", chant:"主題句在上，支持句在中，結論句在下，一個段落就成形！"},
 {ask:{q:"下列哪一句最適合當主題句？", opts:["My phone is black.","Smartphones have changed the way students learn.","I bought a phone last Sunday."], ans:1,
   ok:"對！有觀點、範圍剛好，後面的支持句可以接著說明。", bad:{0:"手機是黑色的只是一個小細節，撐不起整段。",2:"這句只是個人經驗，範圍太窄，也沒有觀點。"},
   again:{q:"段落中點出中心思想的是？", opts:["topic sentence","concluding sentence"], ans:0, exp:"主題句 topic sentence 點出中心思想。"}}},
 {say:"支持句要用理由、例子、細節說明主題句，而且每一句都要和主題相關。學測的「篇章結構」最愛考：找出段落裡不屬於的那一句！", board:[["Running strengthens the heart.",["Running"]],["My cousin lives in Kaohsiung.",[],true]]},
 {ask:{q:"段落主題是「運動有益健康」，哪一句是離題句？", opts:["Swimming helps people relax.","My cousin lives in Kaohsiung.","Exercise improves sleep quality."], ans:1,
   ok:"抓到了！表哥住哪裡和運動的好處無關。", bad:{0:"游泳讓人放鬆，是在支持「運動有益健康」喔。",2:"運動改善睡眠，正是支持主題的好理由。"},
   again:{q:"Reading has many benefits. ___, it widens our knowledge.", opts:["First","However"], ans:0, exp:"列舉第一個好處用 First。"}}},
 {say:"接下來是連貫（cohesion），也就是讓句子黏在一起的醬料。第一種醬料是代名詞指代：用 it、they、this、these 指前面提過的東西，避免一直重複。", board:[["Social media is popular. It allows teens to meet new people.",["It"]],["Many teens stay up late. This habit may harm their health.",["This habit"]]]},
 {say:"第二種醬料是轉折詞：加碼用 furthermore、moreover；轉折用 however、nevertheless；因果用 therefore、consequently；舉例用 for example。", board:[["加碼：furthermore／moreover",["furthermore","moreover"]],["轉折：however／nevertheless",["however","nevertheless"]],["因果：therefore／consequently",["therefore","consequently"]]]},
 {say:"注意！however、therefore 是副詞，不是連接詞，不能只用逗號連接兩個句子。要用分號或句號！", board:[["He studied hard; however, he failed.",[";"]],["He studied hard, however, he failed.",[],true]]},
 {say:"醬料口訣！", chant:"however、therefore 是副詞，前面要用分號或句號！"},
 {ask:{say:"最後一題！", q:"哪一句的標點和連接正確？", opts:["He was tired, therefore he slept.","He was tired; therefore, he slept.","He was tired therefore he slept."], ans:1,
   ok:"完美！therefore 是副詞，前面用分號，後面加逗號。", bad:{0:"只用逗號連接兩個句子是逗號連接句，閱卷會扣分。",2:"兩個句子之間完全沒有標點，更不行喔。"},
   again:{q:"He missed the bus. ___, he was late for school.", opts:["However","Consequently"], ans:1, exp:"前因後果，用 Consequently。"}}},
 {say:"結論句：換句話呼應主題句，或提出建議，不要再丟新的論點。例如 {All in all, social media is useful, but it cannot replace face-to-face interaction.}", board:[["All in all, social media is useful, but it cannot replace face-to-face interaction.",["All in all"]]]},
 {say:"段落寫作過關！口訣：主題句在上、支持句在中、結論句在下；代名詞和轉折詞是黏句子的醬料；however、therefore 前面用分號或句號。高三第二次段考的文法全部上完，去挑戰作文吧！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S3_1_2_ROOTS = [
  {id:"r1", title:"字根 grad / gress：步、走"},
  {id:"r2", title:"字根 fid：信任"},
  {id:"r3", title:"字根 nov：新"},
  {id:"r4", title:"字根 sci：知道"}
];
const S3_1_2_ROOT_CLASS = {
r1:[
 {say:"高三同學好！今天的字根是 <<grad>> 和 <<gress>>，意思都是「步、走」。你一定認識 {graduate}：一步一步走完學業，就是畢業；{progress}：向前走，就是進步。", board:[["grad = 步",["grad"],false,true],["gress = 走",["gress"],false,true]]},
 {say:"先看 <<grad>>：{gradual} 一步一步的，就是逐漸的。{degrade}：de 是向下，往下降一級，就是降低品質、貶低。", board:[["grad + ual = gradual",["grad"],false,true],["de + grade = degrade",["grade"],false,true]]},
 {say:"口訣！", chant:"grad、gress 走走走，一步一步向前走！"},
 {ask:{q:"de（向下）＋ grade（等級）＝ degrade，意思最可能是？", opts:["升級","降低品質；貶低","畢業"], ans:1,
   ok:"對！往下降一級，就是降低品質、貶低。", bad:{0:"升級是 upgrade，de 是向下喔。",2:"畢業是 graduate，de 表示向下。"},
   again:{q:"gradual 的意思是？", opts:["逐漸的","突然的"], ans:0, exp:"一步一步的，就是逐漸的。"}}},
 {say:"再看 <<gress>>：{progressive} 一直向前走的，就是進步的；{aggressive}：ag 是朝向，朝著別人走過去，就是有攻擊性的；{congress}：con 是一起，大家一起走來開會，就是代表大會、國會。", board:[["pro + gress + ive = progressive",["gress"],false,true],["ag + gress + ive = aggressive",["gress"],false,true],["con + gress = congress",["gress"],false,true]]},
 {say:"字首搭配口訣！", chant:"pro 向前進步，ag 朝人攻擊，con 一起開會！"},
 {ask:{q:"ag（朝向）＋ gress（走）＋ ive ＝ aggressive，意思是？", opts:["進步的","有攻擊性的","逐漸的"], ans:1,
   ok:"讚！朝著別人走過去，就是有攻擊性的。", bad:{0:"進步的是 progressive，pro 是向前。",2:"逐漸的是 gradual。"},
   again:{q:"con（一起）＋ gress（走）＝ congress，意思是？", opts:["國會；代表大會","攻擊"], ans:0, exp:"大家一起走來開會，就是代表大會。"}}},
 {say:"小心長得像的陷阱：{progressive} 是進步的，{aggressive} 是有攻擊性的，只差一個字首，意思差很多！讀長句時先看字首，就不會誤判作者的態度。", board:[["pro + gress → 向前走 → 進步",["pro"],false,true],["ag + gress → 朝人走 → 攻擊",["ag"],false,true]]},
 {say:"學測閱讀常用 {aggressive} 描述網路留言，用 {gradual} 描述趨勢，用 {progressive} 形容社會。會拆字根，看到長字就不怕了！", board:[["aggressive comments",["aggressive"]],["a gradual change",["gradual"]]]},
 {ask:{say:"最後一題！", q:"Learning a language is a ___ process; it cannot be done overnight.", opts:["gradual","aggressive","congress"], ans:0,
   ok:"完美！不能一夜完成，要一步一步來：gradual。", bad:{1:"aggressive 是有攻擊性的，不符合語意。",2:"congress 是名詞「國會」，這裡需要形容詞。"},
   again:{q:"Taiwan is often seen as a ___ society in Asia.", opts:["progressive","aggressive"], ans:0, exp:"向前走的社會：progressive 進步的。"}}},
 {say:"grad／gress 過關！口訣：grad、gress 走走走；pro 向前進步、ag 朝人攻擊、con 一起開會、de 向下貶低、gradual 一步一步來。", end:true}
],
r2:[
 {say:"今天的字根是 <<fid>>，意思是「信任」。你早就認識 {confident}：con 是完全，完全信任自己，就是有自信的。", board:[["fid = 信任",["fid"],false,true],["con + fid + ent = confident",["fid"],false,true]]},
 {say:"從 confident 延伸：前面加 self（自己），字尾改成名詞的 ence，就是 {self-confidence}：完全信任自己，自信。", board:[["self + con + fid + ence = self-confidence",["fid"],false,true]]},
 {say:"口訣！", chant:"fid 是信任，con 加 fid，完全相信你！"},
 {ask:{q:"Giving a speech helped me build ___.", opts:["self-confidence","confident","defy"], ans:0,
   ok:"對！build 後面接名詞：build self-confidence 建立自信。", bad:{1:"confident 是形容詞，build 後面要接名詞。",2:"defy 是動詞「違抗」，意思也不對。"},
   again:{q:"fid 的意思是？", opts:["信任","新的"], ans:0, exp:"fid 是信任，像 confident、self-confidence。"}}},
 {say:"{confidential}：只能給完全信任的人看的，就是機密的。{fidelity}：值得信任的狀態，就是忠誠；用在翻譯或音響上，表示「忠於原本的樣子」，所以 high fidelity 是高傳真。", board:[["con + fid + ent + ial = confidential",["fid"],false,true],["fid + elity = fidelity",["fid"],false,true]]},
 {ask:{q:"Your personal information will be kept ___.", opts:["confidential","fidelity","confide"], ans:0,
   ok:"讚！個人資料要保密：kept confidential。", bad:{1:"fidelity 是名詞「忠誠」，keep + 受詞 + 形容詞，這裡要用形容詞。",2:"confide 是動詞，這裡需要形容詞。"},
   again:{q:"Dogs are famous for their ___ to their owners.", opts:["fidelity","confidential"], ans:0, exp:"their 後面接名詞：fidelity 忠誠。"}}},
 {say:"最後一個比較特別：{defy}。字尾 fy 其實就是 fid 的變形，de 是去除：把信任收回、不再服從，就是違抗。defy description 還可以表示「難以形容」！", board:[["de + fy = defy",["fy"],false,true],["The beauty of the sunset defies description.",["defies description"]]]},
 {say:"注意和 confident 長得像的 {confidential}：一個是「有自信的」，一個是「機密的」，學測選項常拿來混淆！", board:[["confident 有自信的",["confident"]],["confidential 機密的",["confidential"]]]},
 {say:"第二個口訣！", chant:"confident 有自信，confidential 要保密，defy 不信就違抗！"},
 {ask:{say:"最後一題！", q:"The students ___ the rule and used their phones in class.", opts:["confided","defied","fidelity"], ans:1,
   ok:"完美！違反規定：defied the rule。", bad:{0:"confide 是吐露心事（con 完全 + fide 信任），和違反規定無關。",2:"fidelity 是名詞，這裡需要動詞。"},
   again:{q:"Lack of ___ can prevent students from trying new things.", opts:["self-confidence","confidential"], ans:0, exp:"缺乏的是自信：self-confidence。"}}},
 {say:"fid 過關！口訣：fid 是信任；self-confidence 是自信、confidential 要保密、fidelity 是忠誠、defy 是違抗。", end:true}
],
r3:[
 {say:"今天的字根超簡單：<<nov>>，意思就是「新」！你一定認識 {novel}：小說，最早指「新鮮的故事」；當形容詞時也表示「新穎的」。", board:[["nov = 新",["nov"],false,true],["novel 新穎的；小說",["nov"],false,true]]},
 {say:"{novice}：新來的人，就是新手、初學者。{novelty}：新的感覺，就是新鮮感。The novelty wore off 表示「新鮮感消失了」。", board:[["nov + ice = novice",["nov"],false,true],["novel + ty = novelty",["nov"],false,true]]},
 {say:"口訣！", chant:"nov 新新新：novice 新手、novelty 新鮮感！"},
 {ask:{q:"Even experts were once ___.", opts:["novices","novelty","renovate"], ans:0,
   ok:"對！就連專家也曾經是新手：novices。", bad:{1:"novelty 是新鮮感，不是人。",2:"renovate 是動詞「翻修」，這裡要名詞。"},
   again:{q:"nov 的意思是？", opts:["新","知道"], ans:0, exp:"nov 就是「新」。"}}},
 {say:"再來兩個動詞：{innovate}：in 是進入，把新東西帶進來，就是創新。{renovate}：re 是再，使再變新，就是翻修、整修。", board:[["in + nov + ate = innovate",["nov"],false,true],["re + nov + ate = renovate",["nov"],false,true]]},
 {say:"分辨口訣！", chant:"in 帶進新點子是創新，re 讓舊房子變新是翻修！"},
 {ask:{q:"The old train station was ___ and turned into a museum.", opts:["innovated","renovated","novelty"], ans:1,
   ok:"讚！舊車站整修後變成博物館：renovated。", bad:{0:"innovate 是創造新點子、新技術，房子整修要用 renovate。",2:"novelty 是名詞，被動語態要用過去分詞。"},
   again:{q:"Companies must keep ___ to survive.", opts:["innovating","renovating"], ans:0, exp:"企業要不斷創新：innovating。"}}},
 {say:"學測作文說到科技、產業，就可以用 {innovate}：{It is undeniable that Taiwan's tech industry continues to innovate.} 一句話同時用到字根和翻譯句型！", board:[["It is undeniable that Taiwan's tech industry continues to innovate.",["undeniable","innovate"]]]},
 {say:"順便一提：nov 和拉丁文的「九」novem 長得很像，November 是十一月，但它跟「新」無關，別搞混囉。看到 nov 加上 ice、elty、ate 這些尾巴，才是「新」的家族。", board:[["novice／novelty／innovate／renovate",["nov"],false,true]]},
 {ask:{say:"最後一題！", q:"The ___ of the new phone wore off after a week.", opts:["novice","novelty","innovate"], ans:1,
   ok:"完美！新鮮感消失了：the novelty wore off。", bad:{0:"novice 是新手，是人，不會 wear off。",2:"innovate 是動詞，the 後面要接名詞。"},
   again:{q:"in（進入）＋ nov（新）＋ ate ＝ innovate，意思是？", opts:["創新","翻修"], ans:0, exp:"把新東西帶進來，就是創新。"}}},
 {say:"nov 過關！口訣：nov 新新新；novice 新手、novelty 新鮮感、innovate 創新、renovate 翻修。", end:true}
],
r4:[
 {say:"最後一個字根：<<sci>>，意思是「知道」。最有名的就是 {science}：知道的學問，就是科學。", board:[["sci = 知道",["sci"],false,true],["science 科學",["sci"],false,true]]},
 {say:"你學過 {conscious}：con 是一起，心裡清楚知道，就是有意識的。加上 un 變成 {unconscious}：不知道周遭發生什麼，就是失去知覺的、無意識的。", board:[["con + sci + ous = conscious",["sci"],false,true],["un + con + sci + ous = unconscious",["sci"],false,true]]},
 {say:"口訣！", chant:"sci 是知道，con 加 sci 心裡清楚，un 加上去昏過去！"},
 {ask:{q:"The driver was ___ when the ambulance arrived.", opts:["unconscious","conscientious","science"], ans:0,
   ok:"對！救護車來時駕駛已經昏迷：unconscious。", bad:{1:"conscientious 是認真負責的，和昏迷無關。",2:"science 是名詞「科學」，be 動詞後面這裡要形容詞。"},
   again:{q:"sci 的意思是？", opts:["知道","新的"], ans:0, exp:"sci 是知道，像 science、conscious。"}}},
 {say:"conscious 加上名詞字尾 ness，變成 {consciousness}：意識、覺察。lose consciousness 是昏過去；environmental consciousness 是環保意識。", board:[["conscious + ness = consciousness",["sci"],false,true],["lose consciousness",["consciousness"]]]},
 {ask:{q:"She lost ___ for a few minutes after the accident.", opts:["conscious","consciousness","unconscious"], ans:1,
   ok:"讚！lose 後面接名詞：lost consciousness。", bad:{0:"conscious 是形容詞，lose 後面要接名詞。",2:"unconscious 也是形容詞喔。"},
   again:{q:"Environmental ___ has grown among young people.", opts:["consciousness","conscious"], ans:0, exp:"形容詞 Environmental 後面接名詞 consciousness。"}}},
 {say:"你也學過 {conscience}：心裡知道對錯的那個聲音，就是良心。它的形容詞是 {conscientious}：憑良心做事的，就是認真負責、一絲不苟的。", board:[["con + sci + ence = conscience",["sci"],false,true],["conscience → conscientious",["sci"],false,true]]},
 {say:"這三個字長得超像，學測選項最愛放在一起！記清楚：conscious 有意識的，conscience 良心，conscientious 認真負責的。", board:[["conscious 有意識的",["conscious"]],["conscience 良心",["conscience"]],["conscientious 認真負責的",["conscientious"]]]},
 {say:"分辨口訣！", chant:"conscious 醒著、conscience 良心、conscientious 認真！"},
 {ask:{say:"最後一題！", q:"She is a ___ student who never misses a deadline.", opts:["conscious","conscience","conscientious"], ans:2,
   ok:"完美！從不錯過截止期限，認真負責：conscientious。", bad:{0:"conscious 是有意識的、察覺到的，不是認真負責。",1:"conscience 是名詞「良心」，a 和 student 中間要放形容詞。"},
   again:{q:"un ＋ conscious ＝ unconscious，意思是？", opts:["失去知覺的","認真的"], ans:0, exp:"un 是不，不知道周遭發生什麼，就是失去知覺。"}}},
 {say:"sci 過關！口訣：sci 是知道；unconscious 昏過去、consciousness 意識、conscientious 認真負責。四個字根全部上完了，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創，只用本單元的字當 key） ---------- */
Object.assign(ILLUS2, {
  renovate: () => svgWrap("#fff7e6", ground("#e5d3b3") + `<path d="M28 104 V58 L80 26 L132 58 V104 Z" fill="#d1d5db"/><path d="M80 26 L132 58 V104 H80 Z" fill="#fca5a5"/><path d="M22 60 L80 22 L138 60" stroke="#7c2d12" stroke-width="5" fill="none" stroke-linecap="round"/>` + `<path d="M40 70 L48 80 L44 88 M56 64 L60 74" stroke="#6b7280" stroke-width="1.5" fill="none"/><rect x="38" y="76" width="16" height="16" fill="#9ca3af"/><rect x="100" y="70" width="18" height="18" rx="2" fill="#bfe6ff" stroke="#fff" stroke-width="2"/><rect x="88" y="84" width="14" height="20" rx="2" fill="#7c2d12"/>` + grp(78, 50, 1, `<rect x="-3" y="0" width="6" height="30" rx="3" fill="#a16207"/><rect x="-12" y="-10" width="24" height="10" rx="4" fill="#f97316"/>`, -20) + spark(120, 40, .9) + spark(140, 82, .6)),
  persuasive: () => svgWrap("#eef2ff", ground() + P({x:50, y:106, s:.85, hair:"long", hc:"#3b2a20", oc:"#8b5cf6", pose:"wave", mood:"open"}) + P({x:114, y:106, s:.85, hair:"short", hc:"#2b2b2b", oc:"#22c55e", pose:"thumb", mood:"smile"}) + bubble(52, 18, "Because...", 70) + bubble(118, 34, "OK!", 40) + heart(84, 52, .6)),
  solitude: () => svgWrap("#1e2a4a", `<circle cx="126" cy="28" r="14" fill="#fef3c7"/><circle cx="132" cy="24" r="12" fill="#1e2a4a"/>` + star(30, 20, 3, "#fde68a") + star(60, 34, 2.5, "#fde68a") + star(96, 14, 2, "#fde68a") + `<path d="M0 104 Q80 94 160 104 V120 H0 Z" fill="#3f5a3a"/>` + O.tree(40, 82, .8) + P({x:96, y:106, s:.75, hair:"long", hc:"#4a3428", oc:"#60a5fa", pose:"hold", mood:"smile"}) + O.book(96, 80, .35, "#f59e0b"))
});
registerUnit("s3-1-2", {
  name:"高三 上學期 第二次段考",
  sub:"翻譯常考句型、作文常用句型、因果與對比的表達、段落寫作與連貫",
  words:S3_1_2_WORDS, grammar:S3_1_2_GRAMMAR, quiz:S3_1_2_QUIZ,
  classes:Object.assign({}, S3_1_2_CLASS, S3_1_2_ROOT_CLASS), phonics:S3_1_2_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會字根 grad／gress、fid、nov、sci，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
