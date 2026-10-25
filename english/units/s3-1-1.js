/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高三上學期 第一次段考
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S3_1_1_WORDS = [
/* ---- 字根 cord / cor：心 ---- */
["accord","n./v.","一致；符合",[
 ["The two countries reached an accord on climate policy.","兩國在氣候政策上達成協議。","S+V+O：主詞 The two countries、動詞 reached、受詞 an accord；reach an accord 是「達成協議」的固定搭配。"],
 ["His words did not accord with his actions.","他的言行不一致。","accord with 表示「與……一致」，是 S+V 句型後面加介系詞片語；常用在否定句。"],
 ["Of their own accord, the volunteers stayed after midnight.","志工們自動自發地留到半夜之後。","of one's own accord 是「自願地、主動地」，放句首當副詞片語，主要句子是 the volunteers stayed（S+V）。"]],
 "ac-=朝向|cord=心","心朝向同一邊 → 一致；符合","🤝|一致"],
["accordance","n.","一致；依照",[
 ["The building was designed in accordance with safety regulations.","這棟建築依照安全法規設計。","in accordance with 是正式的「依照」，比 according to 更常出現在法律和公文。"],
 ["In accordance with the law, the company must protect user data.","依照法律，公司必須保護使用者資料。","介系詞片語放句首，主要句子是 the company must protect user data（S+V+O）。"],
 ["The decision was made in accordance with the students' wishes; therefore, few people complained.","這個決定是依照學生的意願做出的；因此，很少人抱怨。","分號＋連接副詞 therefore＋逗號，連接兩個完整的句子。"]],
 "ac-=朝向|cord=心|-ance=名詞字尾","心朝同一方向的狀態 → 一致；依照","📋|依照規定"],
["accordingly","adv.","因此；相應地",[
 ["The rules have changed; accordingly, we must adjust our plans.","規則改了；因此，我們必須調整計畫。","accordingly 是連接副詞，和 therefore 一樣，前面用分號或句號，後面加逗號。"],
 ["You are an adult now, so you should act accordingly.","你現在是大人了，所以應該有相稱的行為。","放在句尾的 accordingly 是「相應地、照著情況」，修飾動詞 act。"],
 ["The weather changed suddenly. Accordingly, the outdoor ceremony was moved indoors.","天氣突然變了。因此，戶外典禮移到室內舉行。","連接副詞不能像連接詞一樣直接連接兩個句子，所以前一句用句號結束。"]],
 "ac-=朝向|cord=心|-ing=形容詞字尾|-ly=副詞字尾","照著心意的方向 → 相應地；因此","➡️|因此"],
["cordial","adj.","熱誠的；友好的",[
 ["The host gave us a cordial welcome.","主人熱情地歡迎我們。","S+V+O+O：gave 後面接間接受詞 us 和直接受詞 a cordial welcome。"],
 ["Relations between the two neighbors remain cordial.","這兩位鄰居的關係仍然友好。","remain 是連綴動詞，後面接形容詞當主詞補語：S+V+C。"],
 ["Despite their political differences, the two leaders had a cordial conversation.","儘管政治立場不同，兩位領袖進行了一場友好的談話。","despite 是介系詞，後面接名詞片語，不能接子句。"]],
 "cord=心|-ial=形容詞字尾","發自內心的 → 熱誠的","😊|熱誠"],
["discord","n.","不和；爭吵",[
 ["Money problems caused discord in the family.","金錢問題造成家庭不和。","S+V+O：主要動詞是 caused，受詞是 discord。"],
 ["The discord between the two parties delayed the new law.","兩黨之間的不和延誤了新法律。","主詞是很長的名詞片語 The discord between the two parties，主要動詞是 delayed。"],
 ["The team was full of discord; nevertheless, it won the championship.","這支隊伍內部紛爭不斷；然而，還是贏得了冠軍。","nevertheless 表示「儘管如此」，語氣比 however 更強調「出乎意料」。"]],
 "dis-=分開|cord=心","心分開了 → 不和","💢|不和"],
["core","n./adj.","核心；核心的",[
 ["Trust is at the core of any healthy relationship.","信任是任何健康關係的核心。","at the core of 表示「在……的核心」；句型是 S+V+C，be 動詞後面接地方副詞片語。"],
 ["Equality is one of the core values of a democratic society.","平等是民主社會的核心價值之一。","one of the + 複數名詞，主詞 Equality 是單數，所以動詞用 is。"],
 ["The core problem is not the lack of money but the lack of planning.","核心問題不是缺錢，而是缺乏規劃。","not A but B 前後要平行：the lack of money 對 the lack of planning，都是名詞化的寫法。"]],
 "cor=心|-e=字尾","東西的心 → 核心","🍎|核心"],
["courageous","adj.","勇敢的",[
 ["It was courageous of her to speak out against injustice.","她挺身反對不公義，真是勇敢。","It is + 形容詞 + of 人 + to V：形容人的特質（brave、kind、courageous）用 of，不用 for。"],
 ["The courageous journalist, who exposed the scandal, received many threats.","那位揭發醜聞的勇敢記者收到許多威脅。","長句分析：主要句子是 The journalist received many threats，逗號中間是非限定關係子句。"],
 ["Her courageous decision made her a role model for young women.","她勇敢的決定使她成為年輕女性的榜樣。","S+V+O+C：made 的受詞是 her，受詞補語是 a role model。"]],
 "cour=心（cor 變形）|-age=名詞字尾|-ous=充滿……的","充滿勇氣（心）的 → 勇敢的","🦁|勇敢"],
/* ---- 字根 jur / jus：法律、正確 ---- */
["injustice","n.","不公平；不公義",[
 ["Many people protested against the injustice of the system.","許多人抗議這個制度的不公。","protest against 表示「抗議……」；the injustice of the system 是名詞化的寫法。"],
 ["To fight injustice, she decided to become a lawyer.","為了對抗不公義，她決定成為律師。","To V 放句首表示目的，主要句子是 she decided to become a lawyer。"],
 ["The court's refusal to hear the case was seen as a great injustice.","法院拒絕審理這個案子，被視為極大的不公。","名詞化：The court refused to hear the case → The court's refusal to hear the case。"]],
 "in-=不|just=公正的|-ice=名詞字尾","不公正的狀態 → 不公平","⚖️|不公"],
["unjust","adj.","不公正的",[
 ["Many citizens considered the new tax unjust.","許多公民認為新稅制不公平。","S+V+O+C：considered 的受詞是 the new tax，受詞補語是形容詞 unjust。"],
 ["It is unjust to punish the whole class for one student's mistake.","因為一個學生的錯處罰全班是不公平的。","虛主詞 It 代替後面的 to punish ...。"],
 ["The law was unjust; however, few people dared to challenge it.","那條法律不公平；然而，很少人敢挑戰它。","however 是連接副詞：分號＋however＋逗號。"]],
 "un-=不|just=公正的","不公正的","🙅|不公正"],
["justification","n.","正當理由；辯護",[
 ["There is no justification for violence.","暴力沒有任何正當理由。","There is no justification for + 名詞，表示「……沒有正當理由」。"],
 ["What is the justification for raising tuition again?","再次調漲學費的理由是什麼？","for 後面接動名詞 raising，是名詞化的一種。"],
 ["The government's justification of the policy did not convince the public.","政府為這項政策的辯護沒有說服大眾。","主詞是很長的名詞片語，主要動詞是 did not convince。"]],
 "just=正確|-ific=使……（-ify 變形）|-ation=名詞字尾","讓事情變得正確的說法 → 正當理由","📝|理由"],
["justifiable","adj.","有正當理由的；情有可原的",[
 ["His anger was justifiable after being treated so unfairly.","被如此不公平地對待之後，他生氣是情有可原的。","after 是介系詞，後面接動名詞的被動 being treated。"],
 ["Is it ever justifiable to break the law?","違法有可能是正當的嗎？","虛主詞 It 代替 to break the law；ever 用在疑問句表示「曾經、在任何情況下」。"],
 ["The doctor made a justifiable decision, which saved the patient's life.","醫生做了合理的決定，這救了病人一命。","非限定的 which 指前面整件事。"]],
 "just=正確|-ifi=使……（-ify 變形）|-able=可以……的","可以被證明是正確的 → 有正當理由的","👍|合理"],
["juror","n.","陪審員",[
 ["Each juror must listen carefully to the evidence.","每位陪審員都必須仔細聆聽證據。","Each + 單數名詞，動詞也用單數。"],
 ["The jurors, who came from different backgrounds, took three days to reach a verdict.","這些來自不同背景的陪審員花了三天才做出裁決。","長句分析：主要句子是 The jurors took three days，who 子句補充說明。"],
 ["A juror who knows the defendant personally cannot serve on the case.","私下認識被告的陪審員不能參與這個案件。","限定關係子句 who knows the defendant personally 修飾 A juror，主要動詞是 cannot serve。"]],
 "jur=法律；發誓|-or=人","依法宣誓的人 → 陪審員","🧑‍⚖️|陪審員"],
["judicial","adj.","司法的",[
 ["The judicial system should be independent of politics.","司法制度應該獨立於政治之外。","be independent of 表示「不受……影響、獨立於……」。"],
 ["Judicial reform has been a hot topic for years.","司法改革多年來一直是熱門話題。","現在完成式 has been 表示從過去持續到現在。"],
 ["Citizens expect judicial decisions to be fair; otherwise, they lose trust in the courts.","人民期待司法判決公平；否則，他們會對法院失去信任。","otherwise 表示「否則」，也是連接副詞；expect + 受詞 + to V 是 S+V+O+C。"]],
 "jud=判決（jus 法律＋dic 說）|-icial=形容詞字尾","依法說出判決的 → 司法的","🏛️|司法"],
/* ---- 字根 liber：自由 ---- */
["liberal","adj.","開明的；自由主義的",[
 ["My parents have liberal views on dating.","我爸媽對談戀愛的看法很開明。","S+V+O：have liberal views on ...，views on 表示「對……的看法」。"],
 ["Liberal arts education focuses on critical thinking.","博雅教育著重批判性思考。","liberal arts 是「人文學科、博雅教育」，這裡 liberal 不是政治意思。"],
 ["Some parents are strict, whereas others are quite liberal.","有些父母很嚴格，而有些則相當開明。","whereas 是連接詞，可以直接連接兩個子句，表示對比；前面通常加逗號。"]],
 "liber=自由|-al=形容詞字尾","給人自由的 → 開明的","🕊️|開明"],
["liberty","n.","自由",[
 ["Freedom of speech is a basic liberty in a democracy.","言論自由是民主社會的基本自由。","S+V+C：is 後面的 a basic liberty 是主詞補語。"],
 ["The prisoner was finally set at liberty after twenty years.","那名囚犯二十年後終於獲釋。","set at liberty 是「釋放」，用被動語態 was set。"],
 ["People should enjoy liberty; meanwhile, they must respect the rights of others.","人們應該享有自由；同時，他們也必須尊重他人的權利。","meanwhile 表示「同時」，是連接副詞。"]],
 "liber=自由|-ty=名詞字尾","自由的狀態 → 自由","🗽|自由"],
["liberate","v.","解放；使自由",[
 ["The soldiers liberated the city from the enemy.","士兵們把城市從敵人手中解放出來。","liberate A from B 表示「把 A 從 B 解放出來」。"],
 ["Technology has liberated many people from boring tasks.","科技讓許多人擺脫了無聊的工作。","現在完成式表示到現在為止的影響。"],
 ["Reading can liberate the mind, which is why she reads every night.","閱讀能解放心靈，這就是她每晚閱讀的原因。","which is why ... 是「這就是為什麼……」，which 指前面整句。"]],
 "liber=自由|-ate=使……","使自由 → 解放","@s311_liberate"],
["liberation","n.","解放；解放運動",[
 ["The liberation of slaves changed American history.","奴隸的解放改變了美國歷史。","名詞化：slaves were liberated → the liberation of slaves。"],
 ["Women's liberation movements fought for equal pay.","婦女解放運動爭取同工同酬。","fight for 表示「為……而奮鬥」。"],
 ["For many students, graduation feels like a liberation.","對許多學生來說，畢業就像是一種解放。","feel like + 名詞，表示「感覺像是……」。"]],
 "liber=自由|-ation=名詞字尾","變自由的過程 → 解放","⛓️|解放"],
["liberalize","v.","使自由化；放寬限制",[
 ["The government plans to liberalize trade with its neighbors.","政府計畫放寬與鄰國的貿易限制。","plan to V，to 後面接原形動詞。"],
 ["After the rules were liberalized, more foreign students came to study here.","規定放寬後，更多外國學生來這裡讀書。","被動 were liberalized，因為規定是「被放寬」的。"],
 ["The rapid liberalization of the market brought both opportunities and risks.","市場的快速自由化帶來了機會，也帶來了風險。","名詞化：the market was liberalized rapidly → the rapid liberalization of the market。"]],
 "liber=自由|-al=……的|-ize=使……","使變得自由 → 自由化","🔓|自由化"],
/* ---- 字根 sequ / secut：跟隨 ---- */
["sequence","n.","順序；一連串",[
 ["Put the pictures in the correct sequence.","把這些圖片按照正確順序排好。","in sequence / in the correct sequence 表示「按照順序」。"],
 ["A sequence of mistakes led to the accident.","一連串的錯誤導致了這起意外。","a sequence of + 複數名詞，主詞的中心是 sequence（單數），動詞用 led。"],
 ["The DNA sequence of each person is unique.","每個人的 DNA 序列都是獨一無二的。","主詞 The DNA sequence 是單數，動詞用 is。"]],
 "sequ=跟隨|-ence=名詞字尾","一個跟著一個 → 順序","@s311_sequence"],
["sequel","n.","續集；後續",[
 ["The sequel was even more popular than the original movie.","續集比原本的電影更受歡迎。","even 可以修飾比較級，表示「更加」。"],
 ["Fans have been waiting for the sequel for three years.","粉絲已經等這部續集等了三年。","現在完成進行式 have been waiting 表示持續到現在的動作。"],
 ["The author is writing a sequel; meanwhile, the first book is being made into a film.","作者正在寫續集；同時，第一本書正被拍成電影。","meanwhile 表示同時發生的事；is being made 是進行式被動。"]],
 "sequ=跟隨|-el=小東西（名詞字尾）","跟在後面的作品 → 續集","🎬|續集"],
["consequent","adj.","隨之發生的；因而產生的",[
 ["The storm and the consequent flooding forced many people to leave.","暴風雨和隨之而來的水災迫使許多人離開。","S+V+O+C：forced 的受詞 many people，受詞補語 to leave。"],
 ["Rising prices and consequent anger led to protests.","物價上漲以及由此引發的憤怒導致了抗議。","主詞是兩個名詞片語用 and 連接，動詞 led。"],
 ["The factory closed, and the consequent job losses hurt the whole town.","工廠倒閉了，隨之而來的失業衝擊了整個城鎮。","and 是對等連接詞，前面加逗號，可以直接連接兩個完整的句子。"]],
 "con-=一起|sequ=跟隨|-ent=形容詞字尾","一起跟著來的 → 隨之發生的","🔗|隨之而來"],
["consequently","adv.","因此；結果",[
 ["He did not study; consequently, he failed the test.","他沒唸書；因此，他考試不及格。","consequently 是連接副詞：分號＋consequently＋逗號。"],
 ["The population is aging. Consequently, the demand for caregivers is growing.","人口正在老化。因此，照顧者的需求正在增加。","連接副詞放在新句子的句首，後面加逗號。"],
 ["Prices rose sharply and, consequently, many families cut their spending.","物價急遽上漲，因此許多家庭縮減開支。","真正連接兩個子句的是連接詞 and，consequently 只是插入的副詞。"]],
 "con-=一起|sequ=跟隨|-ent=……的|-ly=副詞字尾","跟著前面的原因而來 → 因此","➡️|結果"],
["subsequent","adj.","隨後的；後來的",[
 ["Subsequent studies confirmed the first result.","後來的研究證實了第一個結果。","S+V+O：主要動詞是 confirmed。"],
 ["The scandal and its subsequent investigation shocked the nation.","這起醜聞以及隨後的調查震驚全國。","its 指 the scandal；subsequent 放在名詞前面修飾。"],
 ["Subsequent to the meeting, the manager sent everyone an email.","會議之後，經理寄給每個人一封電子郵件。","subsequent to = after（正式）；sent everyone an email 是 S+V+O+O。"]],
 "sub-=在下、之後|sequ=跟隨|-ent=形容詞字尾","在後面跟著的 → 隨後的","⏭️|隨後"],
["consecutive","adj.","連續的",[
 ["It rained for five consecutive days.","連續下了五天雨。","five consecutive days = five days in a row。"],
 ["The team has won three consecutive championships.","這支隊伍已經連續贏得三次冠軍。","現在完成式表示到目前為止的成就。"],
 ["She was absent for three consecutive weeks; therefore, the teacher called her parents.","她連續缺席三週；因此，老師打電話給她爸媽。","分號＋therefore＋逗號。"]],
 "con-=一起|secut=跟隨|-ive=形容詞字尾","一個緊跟著一個 → 連續的","📆|連續"],
["execute","v.","執行；處決",[
 ["The plan was well designed but poorly executed.","這個計畫設計得很好，但執行得很差。","被動語態 was designed / executed，用 but 連接，形成平行結構。"],
 ["The program executes the command automatically.","這個程式會自動執行指令。","S+V+O：主詞 The program，動詞 executes，受詞 the command。"],
 ["In the past, people who stole horses could be executed.","在過去，偷馬的人可能會被處死。","主要句子是 people could be executed，who stole horses 修飾 people。"]],
 "ex-=到底|ecut=跟隨（secut 去掉 s）|-e=字尾","一路跟到底 → 執行","⚙️|執行"],
["executive","n./adj.","主管；行政的",[
 ["She is a senior executive at a tech company.","她是一家科技公司的高階主管。","S+V+C：is 後面的名詞片語是主詞補語。"],
 ["The executive branch of government carries out the laws.","政府的行政部門負責執行法律。","carry out = execute，表示「執行」。"],
 ["The company's executives, whose salaries are huge, refused to cut their own pay.","那間公司的高層主管薪水很高，卻拒絕減自己的薪。","whose 引導非限定關係子句；主要句子是 The executives refused to cut their own pay。"]],
 "ex-=到底|ecut=跟隨（secut 去掉 s）|-ive=……的；人","負責把事情執行到底的人 → 主管","👔|主管"],
["persecute","v.","迫害",[
 ["The group was persecuted for its religious beliefs.","這個團體因為宗教信仰而受到迫害。","be persecuted for + 原因，表示「因為……受迫害」。"],
 ["No one should be persecuted because of their race.","沒有人應該因為種族而受到迫害。","because of 是介系詞片語，後面接名詞。"],
 ["The persecution of journalists threatens press freedom.","對記者的迫害威脅到新聞自由。","名詞化：journalists are persecuted → the persecution of journalists。"]],
 "per-=一直、徹底|secut=跟隨|-e=字尾","一直緊跟著不放 → 迫害","🚫|迫害"],
["prosecute","v.","起訴",[
 ["Trespassers will be prosecuted.","擅自闖入者將被起訴。","常見的告示用語，被動語態 will be prosecuted。"],
 ["The company was prosecuted for polluting the river.","那家公司因為污染河川而被起訴。","be prosecuted for + V-ing，表示被起訴的原因。"],
 ["The police lacked evidence; therefore, they could not prosecute the man.","警方缺乏證據；因此，他們無法起訴那名男子。","分號＋therefore＋逗號。"]],
 "pro-=向前|secut=跟隨|-e=字尾","向前追著不放 → 起訴","📂|起訴"],
["prosecutor","n.","檢察官",[
 ["The prosecutor asked the judge for a heavy sentence.","檢察官要求法官重判。","ask 人 for 物：向某人要求某物。"],
 ["The prosecutor argued that the defendant had lied.","檢察官主張被告說了謊。","argue that + 子句；had lied 是過去完成式，表示更早發生。"],
 ["The prosecutor's careful examination of the evidence won the case.","檢察官對證據的仔細檢視贏得了這場官司。","名詞化：The prosecutor carefully examined the evidence → The prosecutor's careful examination of the evidence。"]],
 "pro-=向前|secut=跟隨|-or=人","向前追查的人 → 檢察官","🕵️|檢察官"],
/* ---- 社會議題 ---- */
["inequality","n.","不平等",[
 ["Income inequality is growing in many countries.","許多國家的所得不平等正在擴大。","income inequality 是「所得不均」，學測閱讀常見。"],
 ["Education can help reduce inequality.","教育有助於減少不平等。","help 後面可以直接接原形動詞：help (to) reduce。"],
 ["The growing inequality between rich and poor has caused social unrest.","貧富之間日漸擴大的不平等已引發社會動盪。","名詞化：Inequality grows → the growing inequality。"]],
 "in-=不|equal=平等的|-ity=名詞字尾","不平等的狀態","⚖️|不平等"],
["discrimination","n.","歧視",[
 ["Racial discrimination is still a serious problem.","種族歧視仍然是嚴重的問題。","S+V+C：is 後面的 a serious problem 是主詞補語。"],
 ["The law bans discrimination against people with disabilities.","法律禁止歧視身心障礙者。","discrimination against + 人，表示「對……的歧視」。"],
 ["Discrimination in hiring, which is often hidden, is difficult to prove.","求職時的歧視常常是隱藏的，很難證明。","長句分析：主要句子是 Discrimination in hiring is difficult to prove。"]],
 "discrimin=區分|-ation=名詞字尾","把人區分對待 → 歧視","🚷|歧視"],
["discriminate","v.","歧視；區別",[
 ["Employers must not discriminate against women.","雇主不得歧視女性。","discriminate against + 人 表示「歧視」；discriminate between A and B 表示「區分」。"],
 ["Young children cannot always discriminate between right and wrong.","年幼的孩子不一定能分辨是非。","not always 是部分否定，表示「不一定」。"],
 ["Being discriminated against, he felt angry and helpless.","因為受到歧視，他感到憤怒又無助。","分詞構句的被動：Being discriminated against，介系詞 against 不能省略。"]],
 "discrimin=區分|-ate=動詞字尾","把人區分開來對待 → 歧視","🙅|區別對待"],
["racism","n.","種族主義；種族歧視",[
 ["Racism has no place in our school.","我們學校容不下種族歧視。","have no place in ... 表示「在……沒有容身之地」。"],
 ["Many athletes have spoken out against racism.","許多運動員公開發聲反對種族歧視。","speak out against 表示「公開反對」。"],
 ["Racism, which is based on ignorance, can be reduced through education.","種族歧視源自無知，可以透過教育減少。","長句分析：主要句子是 Racism can be reduced through education。"]],
 "rac=種族（race）|-ism=主義","以種族區分人的主義 → 種族歧視","✊|反歧視"],
["privilege","n.","特權；榮幸",[
 ["It is a privilege to meet you.","能見到您是我的榮幸。","It is a privilege to V 是禮貌用語，It 是虛主詞。"],
 ["Education should be a right, not a privilege.","教育應該是權利，而不是特權。","A, not B 表示「是 A 而不是 B」，前後要平行（都是名詞）。"],
 ["Some people are unaware of their privilege, whereas others work hard to share it.","有些人沒察覺自己的特權，而另一些人則努力與人分享。","whereas 是連接詞，表示對比。"]],
 "privi=個人的、私人（private）|lege=法律","只給私人的法律 → 特權","👑|特權"],
["vulnerable","adj.","脆弱的；易受傷害的",[
 ["The elderly are especially vulnerable to the flu.","老年人特別容易感染流感。","be vulnerable to + 名詞，表示「容易受……傷害」。"],
 ["Social workers try to protect vulnerable children.","社工努力保護弱勢兒童。","vulnerable groups / children 表示「弱勢族群／兒童」。"],
 ["Feeling vulnerable, she found it hard to trust others.","因為感到脆弱，她覺得很難信任別人。","S+V+O+C：found it hard to trust others，it 是虛受詞，代替 to trust others。"]],
 "vulner=傷口|-able=可以……的","可以被弄傷的 → 脆弱的","🥚|脆弱"],
["marginalize","v.","使邊緣化",[
 ["Poor communities are often marginalized in society.","貧窮社區常常被社會邊緣化。","被動語態 are marginalized。"],
 ["The policy marginalized older workers.","這項政策使年長勞工被邊緣化。","S+V+O：主要動詞 marginalized。"],
 ["The marginalization of minority languages is a global concern.","少數語言的邊緣化是全球關注的問題。","名詞化：minority languages are marginalized → the marginalization of minority languages。"]],
 "margin=邊緣|-al=……的|-ize=使……","使人被推到邊緣 → 邊緣化","↘️|邊緣化"],
["harassment","n.","騷擾",[
 ["Sexual harassment in the workplace must be reported.","職場性騷擾必須通報。","被動語態搭配助動詞 must be reported。"],
 ["She left the company because of constant harassment from her boss.","她因為上司不斷的騷擾而離開公司。","because of 後面接名詞片語，不接子句。"],
 ["Online harassment can cause long-term emotional damage.","網路騷擾可能造成長期的情緒傷害。","S+V+O：主要動詞 can cause。"]],
 "harass=騷擾|-ment=名詞字尾","騷擾的行為","🚨|騷擾"],
["violence","n.","暴力",[
 ["Violence is never the answer.","暴力永遠不是解決之道。","S+V+C：the answer 是主詞補語。"],
 ["Domestic violence often goes unreported.","家暴常常沒有被通報。","go + 形容詞（unreported）表示「變成……狀態」，是 S+V+C。"],
 ["Children who witness violence at home are more likely to become violent themselves.","在家目睹暴力的孩子，自己更可能變得暴力。","長句分析：主詞 Children 被 who witness violence at home 修飾，主要動詞是 are。"]],
 "viol=暴力、力量|-ence=名詞字尾","使用暴力的行為","👊|暴力"],
["violate","v.","違反；侵犯",[
 ["The company violated the labor law.","那家公司違反了勞動法。","S+V+O：violate 是及物動詞，後面直接接受詞。"],
 ["Reading someone's diary violates their privacy.","看別人的日記侵犯了他們的隱私。","動名詞片語 Reading someone's diary 當主詞，視為單數。"],
 ["Anyone who violates the rules will be punished; otherwise, the rules would mean nothing.","違反規定的人會受罰；否則，規定就毫無意義。","otherwise 表示「否則」，後面常接 would。"]],
 "viol=暴力|-ate=動詞字尾","用力量破壞 → 違反；侵犯","⛔|違反"],
["abuse","n./v.","濫用；虐待",[
 ["Drug abuse destroys families.","藥物濫用會摧毀家庭。","名詞 abuse 唸 [əˈbjus]，動詞唸 [əˈbjuz]。"],
 ["Officials who abuse their power should be punished.","濫用權力的官員應該受罰。","abuse one's power 是「濫用職權」。"],
 ["Child abuse, which often happens at home, is hard to detect.","虐童常常發生在家中，很難察覺。","主要句子是 Child abuse is hard to detect，which 子句是補充說明。"]],
 "ab-=偏離|use=使用","偏離正常的使用 → 濫用","⚠️|濫用"],
["neglect","v./n.","忽視；疏忽",[
 ["Don't neglect your health because of work.","別因為工作而忽略健康。","neglect 是及物動詞，後面直接接受詞。"],
 ["The old house had been neglected for years.","那棟老房子多年來一直沒人照顧。","過去完成式被動 had been neglected。"],
 ["Parents' neglect of their children can lead to serious problems.","父母對孩子的忽視可能導致嚴重問題。","名詞化：Parents neglect their children → Parents' neglect of their children。"]],
 "neg=不|lect=選、注意","不去注意 → 忽視","🙈|忽視"],
["humanitarian","adj./n.","人道主義的；人道主義者",[
 ["The UN sent humanitarian aid to the war zone.","聯合國把人道援助送到戰區。","humanitarian aid 是「人道援助」，新聞常見。"],
 ["Doctors Without Borders is a humanitarian organization.","無國界醫生是人道組織。","S+V+C：組織名稱當主詞，視為單數。"],
 ["The war has created a humanitarian crisis; meanwhile, millions of people have fled.","戰爭造成了人道危機；同時，數百萬人已經逃離。","meanwhile 連接同時發生的事。"]],
 "human=人|-itarian=……主義的；……主義者","關心人類的 → 人道主義的","🩺|人道"],
["advocate","v./n.","提倡；倡導者",[
 ["The group advocates equal pay for women.","這個團體提倡女性同工同酬。","advocate 是及物動詞，後面直接接受詞，不加 for。"],
 ["She is a strong advocate of animal rights.","她是動物權的有力倡導者。","名詞 advocate of / for + 名詞，表示「……的倡導者」。"],
 ["Many experts advocate teaching financial skills in high school.","許多專家主張在高中教理財技能。","advocate + V-ing，不接 to V。"]],
 "ad-=朝向|voc=聲音|-ate=動詞字尾","對著大家發出聲音 → 提倡","📣|倡導"],
["activist","n.","社運人士；行動主義者",[
 ["The young activist gave a powerful speech at the UN.","這位年輕的社運人士在聯合國發表了一場有力的演說。","S+V+O：gave a powerful speech。"],
 ["Environmental activists blocked the road to protest the new factory.","環保人士封鎖道路，抗議新工廠。","to protest 是不定詞，表示目的。"],
 ["Activists, many of whom are students, gathered in front of the city hall.","社運人士聚集在市政府前，其中許多是學生。","many of whom 是「其中許多人」，介系詞後面用 whom。"]],
 "act=行動|-iv=形容詞字尾（-ive）|-ist=人","積極行動的人 → 社運人士","✊|社運人士"],
["petition","n./v.","請願；連署",[
 ["Over ten thousand people signed the petition.","超過一萬人簽署了這份請願書。","sign a petition 是「連署」。"],
 ["Students petitioned the school to change the dress code.","學生請願要求學校修改服裝規定。","S+V+O+C：petition 人 to V。"],
 ["The online petition, which started as a small idea, soon attracted national attention.","這份線上連署起初只是小小的想法，很快就引起全國關注。","長句分析：主要句子是 The online petition soon attracted national attention。"]],
 "pet=尋求|-ition=名詞字尾","向上尋求幫助 → 請願","✍️|連署"],
["demographic","adj./n.","人口統計的；人口結構",[
 ["Taiwan is facing serious demographic changes.","台灣正面臨嚴重的人口結構變化。","現在進行式 is facing 表示正在發生的情況。"],
 ["Young people are an important demographic for online shops.","年輕人是網路商店重要的客群。","名詞 demographic 也可指「某個特定人口群」。"],
 ["Demographic data show that the population is shrinking.","人口統計資料顯示人口正在減少。","data 是複數，動詞用 show。"]],
 "demo=人民|graph=寫、畫|-ic=……的","把人民的資料寫下來 → 人口統計的","📊|人口統計"],
["birth rate","n.","出生率",[
 ["Taiwan's birth rate is one of the lowest in the world.","台灣的出生率是全世界最低之一。","one of the + 最高級 + 複數名詞。"],
 ["The falling birth rate has forced many schools to close.","下滑的出生率迫使許多學校關閉。","S+V+O+C：forced many schools to close。"],
 ["The birth rate keeps falling; therefore, the government offers parents more support.","出生率持續下降；因此，政府提供父母更多補助。","keep + V-ing 表示「持續」。"]],
 "","","👶|出生率"],
["pension","n.","退休金；年金",[
 ["My grandfather lives on a small pension.","我爺爺靠微薄的退休金過活。","live on + 名詞 表示「靠……維生」。"],
 ["Pension reform was hotly debated last year.","年金改革去年引起激烈辯論。","被動語態 was debated。"],
 ["As people live longer, pension systems are under great pressure.","隨著人們活得更久，退休金制度承受很大的壓力。","As 表示「隨著」，引導副詞子句。"]],
 "pens=付錢、秤重|-ion=名詞字尾","定期付給的錢 → 退休金","💰|退休金"],
["caregiver","n.","照顧者",[
 ["Many caregivers are family members of the patients.","許多照顧者是病人的家屬。","S+V+C。"],
 ["Being a full-time caregiver can be exhausting.","當全職照顧者可能讓人筋疲力盡。","動名詞片語 Being a full-time caregiver 當主詞。"],
 ["The government provides training for caregivers, who often work without rest.","政府為照顧者提供訓練，他們常常沒有休息地工作。","provide something for someone；who 子句補充說明 caregivers。"]],
 "care=照顧|giv=給|-er=人","給予照顧的人","🧓|照顧者"],
["workforce","n.","勞動力；全體員工",[
 ["Women make up nearly half of the workforce.","女性占勞動力將近一半。","make up 表示「組成、占」。"],
 ["An aging workforce is a challenge for many companies.","勞動力老化是許多公司的挑戰。","An aging workforce 用名詞片語表達「勞動力正在老化」。"],
 ["The company plans to cut its workforce by ten percent.","公司計畫裁員百分之十。","by + 數字 表示「差距、幅度」。"]],
 "work=工作|force=力量","工作的力量 → 勞動力","👷|勞動力"],
["urbanization","n.","都市化",[
 ["Rapid urbanization has caused housing shortages.","快速的都市化造成了住房短缺。","名詞化：Cities have grown rapidly → Rapid urbanization。"],
 ["Urbanization brings jobs; however, it also brings pollution.","都市化帶來工作；然而，也帶來污染。","however 連接兩個對比的句子，前面用分號。"],
 ["As a result of urbanization, many villages have become empty.","由於都市化，許多村莊變得空蕩蕩。","as a result of + 名詞 表示「由於」。"]],
 "urban=城市的|-iz=使……（-ize）|-ation=名詞字尾","變成城市的過程 → 都市化","🏙️|都市化"],
["affordable","adj.","負擔得起的",[
 ["Young people need affordable housing.","年輕人需要負擔得起的住宅。","affordable housing 是「平價住宅、社會住宅」。"],
 ["The government promised to make health care more affordable.","政府承諾讓醫療照護更便宜。","S+V+O+C：make health care more affordable。"],
 ["Rents in Taipei are high, whereas rents in small towns are more affordable.","台北的租金很高，而小鎮的租金比較負擔得起。","whereas 是連接詞，連接兩個對比的子句。"]],
 "afford=負擔得起|-able=可以……的","可以負擔的","🏷️|負擔得起"],
["housing","n.","住房；住宅",[
 ["The rising cost of housing worries young couples.","上漲的房價讓年輕夫妻很擔心。","主詞中心是 cost，動詞用單數 worries。"],
 ["Social housing provides homes for low-income families.","社會住宅為低收入家庭提供住所。","provide A for B。"],
 ["The lack of affordable housing is a key reason for the low birth rate.","缺乏平價住宅是出生率低的主要原因之一。","名詞化：There is not enough affordable housing → The lack of affordable housing。"]],
 "hous=房子（house）|-ing=名詞字尾","房子的總稱 → 住房","🏠|住房"],
["ethnic","adj.","種族的；民族的",[
 ["Taiwan is home to many ethnic groups.","台灣是許多族群的家。","be home to 表示「是……的所在地」。"],
 ["The festival celebrates ethnic diversity.","這個節慶頌揚族群的多元。","S+V+O。"],
 ["Ethnic restaurants, which serve food from around the world, are popular in big cities.","供應世界各地料理的異國餐廳在大城市很受歡迎。","主要句子是 Ethnic restaurants are popular in big cities。"]],
 "ethn=民族|-ic=……的","民族的","🌏|族群"],
["indigenous","adj.","原住民的；本土的",[
 ["Taiwan has sixteen officially recognized indigenous peoples.","台灣有十六個官方認定的原住民族。","peoples 在這裡是「民族」，可以加 s。"],
 ["Indigenous languages are disappearing quickly.","原住民語言正在快速消失。","現在進行式表示正在發生的趨勢。"],
 ["The museum displays indigenous art, much of which was created by hand.","博物館展示原住民藝術，其中許多是手工製作的。","much of which 是「其中大部分」，which 指 indigenous art。"]],
 "indi-=在內（in-）|gen=出生|-ous=……的","在當地出生的 → 本土的","🪶|原住民"],
["slavery","n.","奴隸制度",[
 ["Slavery was abolished in the United States in 1865.","美國在 1865 年廢除奴隸制度。","被動語態 was abolished。"],
 ["Millions of people still live in modern slavery.","數百萬人仍然生活在現代奴役之中。","modern slavery 指強迫勞動、人口販運等。"],
 ["The end of slavery did not mean the end of racism.","奴隸制度的結束並不代表種族歧視的結束。","名詞化：the end of slavery 對 the end of racism，平行結構。"]],
 "slave=奴隸|-ry=名詞字尾","奴隸的制度","⛓️|奴隸制"],
["oppression","n.","壓迫",[
 ["The people rose up against oppression.","人民起身反抗壓迫。","rise up against 表示「起來反抗」。"],
 ["Many writers fled their countries to escape political oppression.","許多作家逃離祖國，以躲避政治壓迫。","to escape 表示目的。"],
 ["Years of oppression made the people determined to fight for freedom.","多年的壓迫使人民下定決心爭取自由。","S+V+O+C：made the people determined。"]],
 "op-=對著（ob- 變形）|press=壓|-ion=名詞字尾","對著人往下壓 → 壓迫","🫸|壓迫"],
["human rights","n.","人權",[
 ["Everyone is born with human rights.","每個人生來就享有人權。","be born with 表示「生來就有」。"],
 ["The report criticized the country's human rights record.","報告批評了該國的人權紀錄。","human rights 當形容詞用時不加 s 的變化，直接放名詞前。"],
 ["Human rights are universal; therefore, no government may take them away.","人權是普世的；因此，沒有政府可以剝奪它們。","human rights 是複數，動詞用 are。"]],
 "","","🌐|人權"],
["nursing home","n.","養老院；安養中心",[
 ["My great-grandmother lives in a nursing home.","我的曾祖母住在安養中心。","nursing 是「照護」，home 是「家」。"],
 ["The number of nursing homes is increasing as society ages.","隨著社會老化，安養中心的數量正在增加。","The number of + 複數名詞，動詞用單數 is。"],
 ["Visiting a nursing home made me realize how lonely some old people are.","去安養中心探訪讓我體會到有些老人有多孤單。","S+V+O+C：made me realize，使役動詞 make 後面接原形動詞。"]],
 "","","🏥|安養中心"],
/* ---- 法律與正義 ---- */
["legislation","n.","法律；立法",[
 ["New legislation protects workers' rights.","新法律保障勞工權益。","legislation 是不可數名詞，不加 s。"],
 ["The government introduced legislation to ban plastic bags.","政府提出了禁用塑膠袋的法案。","introduce legislation 是「提出法案」。"],
 ["The passage of the legislation took two years.","這項法律的通過花了兩年。","名詞化：The legislation was passed → the passage of the legislation。"]],
 "legis=法律|lat=帶來、提出|-ion=名詞字尾","提出法律 → 立法","@s311_trial"],
["lawsuit","n.","訴訟",[
 ["The singer filed a lawsuit against the magazine.","那位歌手對雜誌社提起訴訟。","file a lawsuit against 表示「對……提告」。"],
 ["The company lost the lawsuit and had to pay a fine.","公司輸了官司，必須付罰款。","lost 和 had to pay 共用主詞，形成平行結構。"],
 ["The lawsuit dragged on for years; meanwhile, the victims received nothing.","訴訟拖了好幾年；同時，受害者什麼也沒拿到。","meanwhile 表示同一段時間內發生的另一件事。"]],
 "law=法律|suit=訴訟（跟隨）","依法律追討 → 訴訟","📜|訴訟"],
["sue","v.","控告；提告",[
 ["She sued the hospital for damages.","她向醫院求償。","sue 人 for 物：為了……控告某人。"],
 ["If you break the contract, they may sue you.","如果你違約，他們可能會告你。","一般條件句：If + 現在式，主要子句用 may。"],
 ["The workers sued the factory; consequently, it had to improve working conditions.","工人們控告工廠；因此，工廠必須改善工作環境。","分號＋consequently＋逗號。"]],
 "","","🧾|提告"],
["attorney","n.","律師",[
 ["You have the right to an attorney.","你有權請律師。","right to + 名詞，表示「……的權利」；to 是介系詞。"],
 ["The attorney advised her client to remain silent.","律師建議她的當事人保持沉默。","S+V+O+C：advise 人 to V。"],
 ["An attorney who specializes in human rights took the case for free.","一位專門處理人權案件的律師免費接下了這個案子。","主要句子是 An attorney took the case，who 子句修飾 attorney。"]],
 "at-=朝向|torney=轉向（委託）","把事情轉交給他的人 → 律師","💼|律師"],
["testify","v.","作證",[
 ["Two witnesses testified against him.","兩名證人作出對他不利的證詞。","testify against / for 某人：作對某人不利／有利的證詞。"],
 ["She was asked to testify in court.","她被要求出庭作證。","be asked to V 是被動語態。"],
 ["The results testify to the success of the program.","這些結果證明了這個計畫的成功。","testify to + 名詞 表示「證明、顯示」，常見於正式文章。"]],
 "test=證人|-ify=做、使","當證人 → 作證","🗣️|作證"],
["trial","n.","審判；試驗",[
 ["The trial lasted for three weeks.","審判持續了三週。","last 是不及物動詞，S+V 句型，for three weeks 是修飾語。"],
 ["He is on trial for murder.","他因謀殺罪受審。","be on trial for + 罪名，表示「因……受審」。"],
 ["The vaccine is still in clinical trials.","這種疫苗仍在臨床試驗階段。","trial 也有「試驗」的意思，clinical trial 是臨床試驗。"]],
 "tri=試（try）|-al=名詞字尾","試著找出真相 → 審判","@s311_trial"],
["defendant","n.","被告",[
 ["The defendant denied all the charges.","被告否認所有罪名。","deny 是及物動詞，後面接受詞 all the charges。"],
 ["The judge found the defendant guilty.","法官判定被告有罪。","S+V+O+C：found the defendant guilty，guilty 是受詞補語。"],
 ["The defendant, whose lawyer was absent, asked for more time.","被告的律師缺席，所以他要求更多時間。","長句分析：主要句子是 The defendant asked for more time。"]],
 "defend=辯護|-ant=人","需要替自己辯護的人 → 被告","🙍|被告"],
["offense","n.","罪行；冒犯",[
 ["Drunk driving is a serious offense.","酒駕是嚴重的罪行。","S+V+C。"],
 ["It was his first offense, so the judge was lenient.","這是他初犯，所以法官從輕發落。","so 是連接詞，前面加逗號就能連接兩個句子。"],
 ["No offense, but I disagree with you.","無意冒犯，但我不同意你。","No offense 是口語，表示「無意冒犯」。"]],
 "of-=對著（ob- 變形）|fense=打擊","對著別人打 → 冒犯；罪行","🚓|罪行"],
["enforce","v.","執行；強制實施",[
 ["The police are responsible for enforcing the law.","警察負責執法。","be responsible for + V-ing。"],
 ["The new rule will be strictly enforced.","新規定將會嚴格執行。","被動語態 will be enforced；副詞 strictly 放在 be 和 p.p. 中間。"],
 ["Laws mean nothing unless they are enforced.","法律如果沒被執行就毫無意義。","unless = if ... not，表示「除非」。"]],
 "en-=使|force=力量","使有力量 → 強制執行","👮|執法"],
["legitimate","adj.","合法的；正當的",[
 ["Is this a legitimate business?","這是合法的生意嗎？","legitimate business 是「合法生意」。"],
 ["She had a legitimate reason for being absent.","她缺席有正當理由。","reason for + V-ing。"],
 ["The elected government is legitimate, whereas the military government is not.","民選政府是合法的，而軍政府則不是。","whereas 連接兩個對比的子句，後句省略重複的 legitimate。"]],
 "legitim=合法的|-ate=形容詞字尾","合乎法律的","✅|合法"],
["fraud","n.","詐騙；詐欺",[
 ["Phone fraud is common in Taiwan.","電話詐騙在台灣很常見。","S+V+C。"],
 ["He was arrested for tax fraud.","他因逃漏稅詐欺被捕。","be arrested for + 罪名。"],
 ["The bank's failure to detect the fraud cost its customers millions.","銀行沒能發現這起詐騙，讓客戶損失數百萬。","名詞化：The bank failed to detect → The bank's failure to detect；cost 人 錢 是 S+V+O+O。"]],
 "","","🎣|詐騙"],
["bribe","n./v.","賄賂",[
 ["The official was caught taking a bribe.","那名官員收賄被抓。","be caught + V-ing 表示「被抓到正在做……」。"],
 ["He tried to bribe the police officer.","他試圖賄賂警察。","bribe 當動詞，後面直接接受詞。"],
 ["Anyone who offers a bribe is also breaking the law.","行賄的人也是在違法。","主要句子是 Anyone is breaking the law，who 子句修飾 Anyone。"]],
 "","","💸|賄賂"],
/* ---- 心理健康與壓力 ---- */
["stigma","n.","汙名；恥辱",[
 ["There is still a stigma attached to mental illness.","精神疾病至今仍帶有汙名。","attached to 是過去分詞片語，修飾 a stigma。"],
 ["We must break the stigma around asking for help.","我們必須打破求助的汙名。","around 在這裡是「關於」；asking 是動名詞。"],
 ["Because of the stigma, many students hide their problems; therefore, they suffer alone.","因為汙名，許多學生隱藏問題；因此，他們獨自受苦。","分號＋therefore＋逗號。"]],
 "","","🏷️|汙名"],
["distress","n.","痛苦；苦惱",[
 ["The news caused her great distress.","這個消息讓她非常痛苦。","S+V+O+O：caused 後面接 her 和 great distress。"],
 ["Students in distress can talk to the school counselor.","陷入困擾的學生可以找學校輔導老師談。","in distress 表示「處於困境、痛苦中」。"],
 ["The ship sent out a distress signal.","那艘船發出求救信號。","distress signal 是「求救信號」。"]],
 "dis-=分開|tress=拉緊","被拉扯分開 → 痛苦","😣|苦惱"],
["strain","n./v.","壓力；拉傷",[
 ["Caring for a sick parent puts a strain on the whole family.","照顧生病的父母會給整個家庭帶來壓力。","put a strain on 表示「給……壓力」。"],
 ["I strained my back while moving the sofa.","搬沙發的時候我拉傷了背。","while + V-ing 是省略主詞和 be 動詞的副詞子句。"],
 ["Long hours at the screen strain your eyes.","長時間盯著螢幕會讓眼睛疲勞。","主詞中心是 hours，動詞用複數 strain。"]],
 "","","🏋️|壓力"],
["irritable","adj.","易怒的；暴躁的",[
 ["Lack of sleep makes me irritable.","睡眠不足讓我很容易煩躁。","S+V+O+C：makes me irritable。"],
 ["She has been irritable since the exam started.","從考試開始，她就一直很暴躁。","since 引導時間子句，主要子句用現在完成式。"],
 ["Feeling hungry and irritable, he snapped at his little brother.","又餓又煩躁，他對弟弟大吼。","分詞構句：Feeling hungry and irritable = Because he felt hungry and irritable。"]],
 "irrit=刺激|-able=容易……的","容易被刺激的 → 易怒的","😤|易怒"],
["restless","adj.","焦躁不安的；靜不下來的",[
 ["The children grew restless during the long speech.","在冗長的演講中，孩子們變得坐立難安。","grow 是連綴動詞，接形容詞：S+V+C。"],
 ["I spent a restless night before the exam.","考試前一晚我輾轉難眠。","a restless night 表示「睡不好的一夜」。"],
 ["He felt restless; however, he could not explain why.","他感到焦躁不安；然而，他說不出原因。","however 連接兩個句子，前面用分號。"]],
 "rest=休息|-less=沒有","沒有休息的 → 靜不下來的","🌀|焦躁"],
["deprive","v.","剝奪",[
 ["Stress can deprive you of sleep.","壓力可能讓你睡不著。","deprive 人 of 物：剝奪某人的某物。"],
 ["Many children are deprived of education.","許多孩子被剝奪了受教育的權利。","被動語態：be deprived of。"],
 ["Sleep deprivation affects memory; consequently, tired students often perform poorly on tests.","睡眠不足影響記憶；因此，疲倦的學生考試常常表現不好。","sleep deprivation 是名詞化的寫法，表示「睡眠被剝奪」。"]],
 "de-=去掉|priv=個人擁有（private）|-e=字尾","去掉個人擁有的東西 → 剝奪","😴|剝奪"],
["confide","v.","吐露（祕密）；信任",[
 ["She confided in her best friend.","她向最好的朋友吐露心事。","confide in 人：信任某人並向他吐露心事。"],
 ["He confided to me that he was worried about his parents.","他私下告訴我，他很擔心他的父母。","confide to 人 that + 子句。"],
 ["Having someone to confide in can reduce stress.","有可以傾訴的對象能減輕壓力。","動名詞片語當主詞；someone to confide in 的 in 不能省略。"]],
 "con-=完全|fid=相信|-e=字尾","完全相信對方 → 吐露心事","🤫|傾訴"],
["unwind","v.","放鬆",[
 ["I like to unwind with music after school.","放學後我喜歡聽音樂放鬆。","unwind 是不及物動詞：S+V。"],
 ["Taking a walk helps me unwind.","散步幫助我放鬆。","help + 受詞 + 原形動詞：S+V+O+C。"],
 ["Take time to unwind every day; otherwise, you may burn out before the exam.","每天都要花點時間放鬆；否則，你可能在考試前就身心俱疲。","otherwise 表示「否則」：分號＋otherwise＋逗號，前面常是祈使句或 must / should。"]],
 "un-=反向|wind=捲緊","把捲緊的東西鬆開 → 放鬆","@s311_unwind"],
["withdraw","v.","退出；退縮；提款",[
 ["After the accident, he withdrew from his friends.","意外之後，他開始疏遠朋友。","withdraw 三態：withdraw、withdrew、withdrawn。"],
 ["She withdrew from the competition because of an injury.","她因受傷退出比賽。","withdraw from + 名詞：從……退出。"],
 ["I need to withdraw some money from the ATM.","我需要從提款機提一些錢。","withdraw money 是「提款」。"]],
 "with=向後、離開|draw=拉","往後拉 → 退出；退縮","🚪|退縮"],
["despair","n./v.","絕望",[
 ["He was in despair after losing his job.","失業後他陷入絕望。","be in despair 表示「處於絕望」。"],
 ["Don't despair; there is always hope.","別絕望，總是有希望的。","despair 當動詞，不及物：S+V。"],
 ["To our despair, the rescue team found nothing.","令我們絕望的是，搜救隊什麼也沒找到。","To one's + 情緒名詞，表示「令某人……的是」。"]],
 "de-=失去|spair=希望","失去希望 → 絕望","😞|絕望"],
["breakdown","n.","崩潰；故障；細目",[
 ["He suffered a nervous breakdown after years of overwork.","多年過勞後，他精神崩潰了。","nervous breakdown 是「精神崩潰」。"],
 ["The breakdown of the bus made us late.","公車故障害我們遲到。","S+V+O+C：made us late。"],
 ["Here is a breakdown of the costs.","這是費用的明細。","breakdown 也可以指「細目、分析」。"]],
 "break=破裂|down=倒下","破裂倒下 → 崩潰","💔|崩潰"],
["mindfulness","n.","正念",[
 ["Mindfulness can help students manage stress.","正念能幫助學生管理壓力。","help + 受詞 + 原形動詞。"],
 ["The school offers a mindfulness course.","學校開設正念課程。","S+V+O。"],
 ["Practicing mindfulness, which means focusing on the present moment, takes time.","練習正念——也就是專注於當下——需要時間。","長句分析：主要句子是 Practicing mindfulness takes time，which 子句插入說明。"]],
 "mind=心思|-ful=充滿|-ness=名詞字尾","心思充滿在當下 → 正念","🧘|正念"],
["hotline","n.","專線；熱線",[
 ["If you need help, call the 1925 hotline.","如果需要幫助，請撥打 1925 安心專線。","1925 是台灣的安心專線（依舊愛我）。"],
 ["The hotline is open twenty-four hours a day.","這支專線二十四小時開放。","S+V+C。"],
 ["A teacher gave me the number of a hotline that offers free counseling.","一位老師給了我一支提供免費諮詢的專線號碼。","S+V+O+O：gave me the number；that 子句修飾 a hotline。"]],
 "hot=熱的、緊急|line=線","緊急的電話線 → 專線","☎️|專線"],
["vent","v./n.","發洩（情緒）；通風口",[
 ["It is healthy to vent your feelings sometimes.","偶爾發洩情緒是健康的。","虛主詞 It 代替 to vent your feelings。"],
 ["He vented his anger on his little brother.","他把怒氣發洩在弟弟身上。","vent 情緒 on 人：把情緒發洩在某人身上。"],
 ["Writing in a diary gives me a way to vent; meanwhile, it helps me understand myself.","寫日記讓我有發洩的管道；同時，也幫助我了解自己。","gives me a way 是 S+V+O+O。"]],
 "","","💨|發洩"]
];

/* 沒有字根可拆的字：記憶小撇步 */
Object.assign(MEMO, {
  "birth rate":"birth（出生）＋ rate（比率）＝出生率；相反詞是 death rate（死亡率）。說「出生率低」用 low，不用 few 或 little。",
  "human rights":"human（人類的）＋ rights（權利）＝人權。一定要用複數 rights；right 單數是「權利」，也可以是「右邊、正確」。",
  "nursing home":"nursing 是 nurse（照護）的動名詞，nursing home 就是「提供照護的家」→ 安養中心。",
  sue:"sue 和 suit（訴訟）、pursue（追求）是同一家人，都來自「跟隨」sequ：追著對方不放 → 控告。",
  fraud:"fraud 唸起來像「福牢」：想要騙到福氣，最後卻坐牢。形容詞 fraudulent 是「詐欺的」。",
  bribe:"bribe 原本的意思是「施捨給乞丐的一塊麵包」，後來變成偷偷塞給別人的好處 → 賄賂。",
  stigma:"stigma 原本是古希臘烙在奴隸或罪犯身上的「印記」，引申為社會給人貼上的負面標籤 → 汙名。",
  strain:"strain 和 stress 都是 str 開頭，都有「拉緊」的感覺：把繩子拉太緊就會受傷 → 壓力、拉傷。",
  vent:"vent 原本是「通風口」：讓悶住的空氣出去；把悶在心裡的情緒放出去，就是 vent your feelings（發洩情緒）。"
});

const S3_1_1_GRAMMAR = [
{ id:"g1", title:"句子結構與五大句型",
  intro:"英文句子不管多長，主幹都逃不出五種句型。動詞決定句型：看動詞後面需要「什麼都不用」、「補語」、「受詞」、「兩個受詞」還是「受詞＋補語」。",
  table:[["句型","動詞種類","例句"],["S＋V","不及物動詞","The trial lasted (for three weeks)."],["S＋V＋C","連綴動詞（be、become、seem、remain、grow、go、prove）","Relations between them remain cordial."],["S＋V＋O","及物動詞","The company violated the law."],["S＋V＋O＋O","授與動詞（give、send、offer、show、cost）","The host gave us a cordial welcome."],["S＋V＋O＋C","不完全及物動詞（make、find、consider、keep、elect、let）","The judge found the defendant guilty."]],
  points:[
   "介系詞片語、副詞、關係子句、分詞片語都是「修飾語」，不算在五大要素裡。找句型時先把修飾語括起來：The jurors (from different backgrounds) reached a verdict.",
   "補語 vs. 受詞：補語和主詞（或受詞）是同一個人或事物。He became a lawyer.（he = a lawyer，補語）；He met a lawyer.（he ≠ a lawyer，受詞）。",
   "連綴動詞後面接形容詞，不接副詞：She remained calm.（× calmly）。學測常考 remain、stay、go、grow、prove、seem 加形容詞。",
   "S＋V＋O＋O 可以改寫：give / send / offer / show / teach 用 to；buy / make / cook / find 用 for；ask 用 of。但 cost、take、save 不能改寫：× It cost 500 dollars to me.",
   "S＋V＋O＋C 的補語可以是名詞、形容詞、to V、原形動詞或分詞：elect him president、make me nervous、want you to go、let me go、found the door locked。",
   "陷阱：find / make / think / consider + it + 形容詞 + to V，it 是虛受詞：I found it hard to concentrate.（不能省略 it）"],
  ex:[
   ["The jury, after three days of discussion, finally reached a verdict.","陪審團在三天的討論後，終於做出裁決。","括掉插入的介系詞片語，主幹是 The jury reached a verdict（S＋V＋O）。"],
   ["The rise in housing prices has made young people anxious about the future.","房價上漲讓年輕人對未來感到焦慮。","S＋V＋O＋C：made 的受詞是 young people，補語是形容詞 anxious。"],
   ["Many citizens consider the new law unjust.","許多公民認為這條新法律不公平。","S＋V＋O＋C：consider + 受詞 + 形容詞。"],
   ["The volunteers offered the elderly residents free meals.","志工提供年長住戶免費餐點。","S＋V＋O＋O，也可以寫成 offered free meals to the elderly residents。"],
   ["After the scandal, public trust in the judicial system remained low.","醜聞之後，大眾對司法制度的信任仍然很低。","S＋V＋C：remained 是連綴動詞，後面接形容詞 low。"]]},
{ id:"g2", title:"轉折與連接副詞：however、therefore、thus、meanwhile、otherwise",
  intro:"however、nevertheless、therefore、thus、meanwhile、otherwise 是「連接副詞」：意思像連接詞，但文法上是副詞，不能直接把兩個句子接起來。標點是學測和寫作的必考重點。",
  table:[["意思","連接副詞（要用分號或句號）","連接詞（可以直接連接兩句）"],["轉折、然而","however、nevertheless","but、although、though"],["對比","on the other hand、in contrast","whereas、while"],["結果、因此","therefore、thus、consequently、accordingly","so"],["同時、在此期間","meanwhile","while"],["否則","otherwise","or"]],
  points:[
   "正確標點：S + V; however, S + V. 或 S + V. However, S + V. 錯誤：It rained, however, we went out.（只用逗號接兩個句子，是 comma splice）",
   "連接副詞可以移到句中或句尾，用逗號隔開：The plan, however, failed. / The plan failed, however.",
   "whereas 是連接詞（高一學過，可複習），直接連接兩個子句：Tom is outgoing, whereas his brother is shy.（不能寫成 ; whereas,）",
   "nevertheless 和 however 都是「然而」，但 nevertheless 更強調「儘管如此，仍然……」；thus 比 therefore 更正式，還可以接 V-ing 表示結果：Prices rose, thus causing anger.",
   "otherwise 是「否則」，前面常是祈使句或 must / should：Hurry up; otherwise, you'll be late. meanwhile 是「同時；在這段期間」。",
   "陷阱：but 和 however 不能一起用（× but however）；although 和 but 也不能同時出現在同一個句子裡。"],
  ex:[
   ["Urbanization creates jobs; however, it also widens the gap between rich and poor.","都市化創造工作機會；然而，也拉大了貧富差距。","分號＋however＋逗號，連接兩個完整的句子。"],
   ["The evidence was weak; therefore, the prosecutor dropped the case.","證據薄弱；因此，檢察官撤銷了這個案子。","therefore 表示結果，前面用分號。"],
   ["The task seemed impossible. Nevertheless, the volunteers kept trying.","這項任務看似不可能。儘管如此，志工們仍然繼續嘗試。","用句號斷開，Nevertheless 放在新句子句首，後面加逗號。"],
   ["The birth rate keeps falling. Meanwhile, the number of elderly people is rising.","出生率持續下降。同時，老年人口正在增加。","meanwhile 表示兩件同時進行的事。"],
   ["You should talk to someone you trust; otherwise, the stress may become overwhelming.","你應該和信任的人聊聊；否則，壓力可能變得難以承受。","otherwise 表示「否則」，前面常是 should / must 的句子。"]]},
{ id:"g3", title:"名詞化：把子句變成名詞片語",
  intro:"學術文章和學測閱讀很愛「名詞化」：把「誰做了什麼」的子句，改成一個名詞片語，讓句子更精簡、更正式。例如 The city grew rapidly. → the rapid growth of the city。",
  table:[["子句寫法","名詞化寫法"],["The city grew rapidly.","the rapid growth of the city / the city's rapid growth"],["The forest was destroyed.","the destruction of the forest"],["He refused to help.","his refusal to help"],["They failed to act.","their failure to act"],["The government decided to raise taxes.","the government's decision to raise taxes"]],
  points:[
   "動詞變名詞：grow → growth、destroy → destruction、refuse → refusal、fail → failure、decide → decision、arrive → arrival、discover → discovery、liberate → liberation。",
   "副詞變形容詞：grew rapidly → rapid growth；carefully examined → careful examination。",
   "原本的主詞變成所有格或 of：the city's growth = the growth of the city；如果 of 已經用來接受詞，動作者用 by：the destruction of the forest by humans。",
   "原本的受詞變成 of + 受詞：They destroyed the forest. → the destruction of the forest。",
   "動詞後面接 to V 的，名詞化後保留 to V：refusal to、decision to、failure to、attempt to、ability to；但 insist on → insistence on。",
   "閱讀技巧：看到名詞化，在腦中還原成「誰做了什麼」；翻譯和作文也可以用名詞化讓句子更精簡：Because it rained heavily → Due to the heavy rain。"],
  ex:[
   ["The rapid growth of the city has caused serious traffic problems.","城市的快速成長造成了嚴重的交通問題。","= The city grew rapidly, which has caused ...。"],
   ["The destruction of the rainforest threatens many species.","雨林的破壞威脅許多物種。","= The rainforest is being destroyed, and this threatens ...。"],
   ["His refusal to apologize made the situation worse.","他拒絕道歉，讓情況更糟。","He refused to apologize → His refusal to apologize，保留 to V。"],
   ["The government's failure to act quickly cost many lives.","政府沒能迅速行動，讓許多人喪命。","The government failed to act quickly → the government's failure to act quickly。"],
   ["The liberation of the city by the army was celebrated across the country.","軍隊解放了這座城市，全國都在慶祝。","of 接原本的受詞 the city，by 接動作者 the army。"]]},
{ id:"g4", title:"長句分析：主要子句、分詞片語、同位語",
  intro:"學測閱讀的長句，其實是「一個主幹＋一堆修飾語」。祕訣：先找連接詞切句子，再把修飾語括起來，最後找出主要的主詞和動詞。",
  table:[["修飾語","樣子","例子"],["介系詞片語","介系詞＋名詞","in many countries、after the war"],["關係子句","who / which / that / whose ...","the activist who gave the speech"],["分詞片語","V-ing（主動）／p.p.（被動）","students living alone、money raised by volunteers"],["同位語","名詞, 名詞（補充說明）","Dr. Lin, a psychologist, ..."],["不定詞片語","to V","To fight injustice, she ..."]],
  points:[
   "步驟：① 找連接詞切成幾個子句 ② 括掉修飾語 ③ 找主要主詞和動詞 ④ 用五大句型找受詞或補語 ⑤ 把修飾語放回去理解。",
   "一個子句只有一個主要動詞。看到兩個動詞卻沒有連接詞或關係詞，其中一個一定是 V-ing、p.p. 或 to V（非限定動詞）。",
   "分詞片語修飾名詞：主動用 V-ing（students living in rural areas），被動用 p.p.（the money raised by the volunteers）。",
   "同位語用逗號夾住，補充說明前面的名詞：Mr. Wu, the prosecutor in charge of the case, ...；同位語子句：the fact that ...、the idea that ...。",
   "主詞很長時，動詞要配合「中心名詞」：One of the reasons ... is ...；The number of people ... is ...；A number of people ... are ...。",
   "句首的分詞構句、To V、介系詞片語都是修飾語，主要主詞在逗號之後：Having failed twice, she ..."],
  ex:[
   ["The students living in remote villages, many of whom walk an hour to school, often lack basic resources.","住在偏遠村莊的學生，其中許多人要走一個小時去上學，常常缺乏基本資源。","主幹：The students often lack basic resources。living 是分詞片語，many of whom 是關係子句。"],
   ["Dr. Lin, a psychologist who studies teenage stress, argues that sleep is the key to mental health.","林博士是研究青少年壓力的心理學家，她主張睡眠是心理健康的關鍵。","a psychologist ... 是同位語；主要動詞是 argues，that 子句是受詞。"],
   ["The law, passed in 2019 to protect workers, has greatly reduced overtime.","這條 2019 年通過、用來保護勞工的法律，已大幅減少加班。","passed in 2019 是被動分詞片語，主要動詞是 has reduced。"],
   ["The fact that the birth rate keeps falling worries the government.","出生率持續下降這件事讓政府很擔心。","that 子句是 The fact 的同位語子句，主要動詞是 worries（配合單數 fact）。"],
   ["Having failed to find a job in the city, he returned to his hometown and opened a café.","在城市找不到工作後，他回到家鄉開了一間咖啡廳。","句首是分詞構句，主幹 he returned ... and opened ...，兩個動詞用 and 連接。"]]}
];

const S3_1_1_QUIZ = [
 ["The news that the trial had ended made everyone ___.",["happily","happy","happiness","to be happily"],1,"S＋V＋O＋C：make + 受詞 + 形容詞，受詞補語用形容詞 happy。","g1"],
 ["Although the meeting lasted for hours, the atmosphere remained ___.",["cordial","cordially","cordiality","to cordial"],0,"remain 是連綴動詞（S＋V＋C），後面接形容詞，不接副詞。","g1"],
 ["下列哪一句是 S＋V＋O＋O 句型？",["The judge found him guilty.","She gave the volunteers some advice.","The trial lasted three weeks.","He became a lawyer."],1,"gave 後面有兩個受詞：the volunteers（間接受詞）和 some advice（直接受詞）。A 是 S＋V＋O＋C，C 是 S＋V，D 是 S＋V＋C。","g1"],
 ["After hearing all the evidence, the jury found the defendant ___.",["guiltily","guilt","to guilt","guilty"],3,"S＋V＋O＋C：find + 受詞 + 形容詞（判定某人有罪），補語用形容詞 guilty。","g1"],
 ["In the sentence \"The students living near the school often arrive late,\" the main verb is ___.",["living","often","arrive","near"],2,"living near the school 是分詞片語，修飾 The students；真正的主要動詞是 arrive。","g1"],
 ["My grandfather bought a new laptop ___ me when I entered senior high.",["to","of","with","for"],3,"buy / make / cook 改寫時用 for：buy something for someone。give / send 才用 to。","g1"],
 ["The jurors considered the witness's testimony ___.",["convince","convincingly","convincing","to convincing"],2,"consider + 受詞 + 形容詞（S＋V＋O＋C）；證詞「令人信服」用 convincing。","g1"],
 ["下列哪一句文法錯誤？",["The trip cost me 5,000 dollars.","The trip cost 5,000 dollars to me.","She offered me a seat.","She offered a seat to me."],1,"cost 只能用 cost + 人 + 錢，不能改寫成 to + 人。offer 則兩種都可以。","g1"],
 ["After the accident, he found ___ difficult to trust other drivers.",["it","that","this","what"],0,"find + it + 形容詞 + to V：it 是虛受詞，代替後面的 to trust other drivers，不能省略。","g1"],
 ["The plan sounded perfect; ___, it failed completely.",["however","but","although","whereas"],0,"分號後面要用連接副詞 however，再加逗號。but、although、whereas 是連接詞，不能放在「分號＋逗號」中間。","g2"],
 ["The evidence was strong; ___, the defendant was found guilty.",["otherwise","therefore","nevertheless","meanwhile"],1,"前因後果用 therefore（因此）。nevertheless 是「儘管如此」，意思相反。","g2"],
 ["You must report the fraud to the police; ___, more people will be cheated.",["meanwhile","however","thus","otherwise"],3,"otherwise 是「否則」：如果不報警，會有更多人受騙。","g2"],
 ["Tom is outgoing and talkative, ___ his twin brother is quiet and shy.",["however","therefore","whereas","nevertheless"],2,"逗號後面要直接連接另一個子句，只能用連接詞 whereas（而）。其他三個是連接副詞，不能只用逗號連接。","g2"],
 ["下列哪一句的標點正確？",["It rained heavily, however, we still went hiking.","It rained heavily; however, we still went hiking.","It rained heavily however we still went hiking.","It rained heavily, however we still went hiking."],1,"連接副詞連接兩個句子：S + V; however, S + V。只用逗號接兩個句子是 comma splice 錯誤。","g2"],
 ["The mother was cooking dinner. ___, the father was helping the kids with their homework.",["Otherwise","Therefore","Whereas","Meanwhile"],3,"兩件事同時進行，用 Meanwhile（同時）。Whereas 是連接詞，不能放在新句子開頭加逗號這樣用。","g2"],
 ["Housing prices rose sharply, ___ making it hard for young people to buy homes.",["thus","however","otherwise","whereas"],0,"thus + V-ing 表示「因而造成……」，是結果。","g2"],
 ["The task was extremely difficult. ___, she refused to give up.",["Therefore","Otherwise","Nevertheless","Thus"],2,"任務很難，「儘管如此」她還是不放棄，用 Nevertheless。Therefore / Thus 表示結果，意思不通。","g2"],
 ["Although he was exhausted, ___.",["but he kept working","he kept working","however he kept working","so he kept working"],1,"although 已經是連接詞，後面不能再加 but、so 或 however；直接接主要子句。","g2"],
 ["The city grew rapidly. → The ___ growth of the city surprised everyone.",["rapid","rapidly","rapidity","rapids"],0,"名詞化時，修飾動詞的副詞 rapidly 要改成修飾名詞的形容詞 rapid。","g3"],
 ["The forest was destroyed by fire. → The ___ of the forest by fire shocked the villagers.",["destroy","destroyed","destruction","destroying"],2,"destroy 的名詞是 destruction；the ___ of 中間要放名詞。","g3"],
 ["He refused to apologize. → His ___ to apologize made his friends angry.",["refuse","refusal","refusing","refused"],1,"refuse 的名詞是 refusal，名詞化後保留 to V：refusal to apologize。","g3"],
 ["The government failed to act quickly. → The government's ___ to act quickly cost many lives.",["failing","fail","failed","failure"],3,"fail 的名詞是 failure：failure to V。","g3"],
 ["Because it rained heavily, the game was canceled. → Due to ___, the game was canceled.",["it rained heavily","the heavy rain","heavily rain","the rain heavy"],1,"due to 是介系詞，後面接名詞片語，不接子句：the heavy rain。","g3"],
 ["the destruction of the city ___ the enemy army",["of","by","to","with"],1,"of 已經接了原本的受詞 the city，動作者 the enemy army 要用 by。","g3"],
 ["The government decided to raise taxes. → The government's ___ to raise taxes was unpopular.",["decisive","deciding","decision","decide"],2,"decide 的名詞是 decision，保留 to V：decision to raise taxes。decisive 是形容詞。","g3"],
 ["She insisted on paying the bill. → Her ___ on paying the bill embarrassed us.",["insistence","insist","insistent","insisted"],0,"insist on 名詞化成 insistence on，介系詞 on 保留。","g3"],
 ["下列哪一個是 \"The population is aging quickly.\" 的名詞化寫法？",["the quickly aging of the population","the population quick ages","the aging quickly population","the rapid aging of the population"],3,"名詞化：動詞 aging 當名詞，副詞 quickly 改成形容詞（rapid / quick），主詞變成 of the population。","g3"],
 ["The students ___ in rural areas often have fewer learning resources.",["live","living","lived","lives"],1,"主要動詞是 have，所以這裡要用分詞片語修飾 The students；學生「住在」是主動，用 living。","g4"],
 ["The money ___ by the volunteers was donated to a local orphanage.",["raising","rose","raise","raised"],3,"錢是「被募集」的，用過去分詞 raised；主要動詞是 was donated。","g4"],
 ["Dr. Chen, ___, will give a talk on teenage stress.",["is a famous psychologist","a famous psychologist","he is a psychologist","who famous"],1,"兩個逗號中間放同位語（名詞片語），補充說明 Dr. Chen；主要動詞是 will give。","g4"],
 ["One of the reasons why young people move to big cities ___ the lack of jobs in rural areas.",["is","are","be","being"],0,"主詞的中心是 One（單數），why 子句只是修飾 reasons，所以動詞用 is。","g4"],
 ["In the sentence \"The law, passed in 2019 to protect workers, has improved working conditions,\" the main verb is ___.",["passed","to protect","has improved","working"],2,"passed in 2019 to protect workers 是夾在逗號中的分詞片語，主要動詞是 has improved。","g4"],
 ["Many families, ___ by rising housing prices, have moved to the suburbs.",["forced","forcing","force","to force"],0,"家庭是「被迫」的，用過去分詞 forced；主要動詞是 have moved。","g4"],
 ["The fact ___ the birth rate keeps falling worries the government.",["what","which","that","it"],2,"the fact that + 完整子句 是同位語子句，說明 fact 的內容；that 子句完整不缺東西，所以不能用 which。","g4"],
 ["The number of elderly people living alone ___ increasing every year.",["have","are","be","is"],3,"The number of + 複數名詞，中心名詞是 number（單數），動詞用 is。","g4"],
 ["___ to find a job in the city, he moved back to his hometown and opened a café.",["Fail","Having failed","Failed","He failed"],1,"先找不到工作，後搬回家鄉：分詞構句用 Having + p.p.；He failed 會讓兩個句子沒有連接詞。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S3_1_1_CLASS = {
g1:[
 {say:"高三同學好！最後一年，我們不再學零碎的新文法，而是練「看穿長句」的功夫。第一課回到最根本的：五大句型。不管句子多長，主幹一定是這五種之一！", board:[["S＋V",["S","V"]],["S＋V＋C",["C"]],["S＋V＋O",["O"]],["S＋V＋O＋O",["O"]],["S＋V＋O＋C",["O","C"]]]},
 {say:"決定句型的是「動詞」。{The trial lasted for three weeks.} lasted 後面什麼都不用接，句子就完整了，for three weeks 只是修飾語。這是 S＋V。", board:[["The trial lasted (for three weeks).",["lasted"]]]},
 {say:"口訣先記起來！", chant:"動詞是老大，看它後面要接啥！"},
 {say:"連綴動詞像等號：{He became a lawyer.} he 就是 a lawyer，所以 a lawyer 是補語，句型 S＋V＋C。換成 {He met a lawyer.} he 不等於 lawyer，這時 a lawyer 是受詞，S＋V＋O。", board:[["He became a lawyer.（he = lawyer）",["became","a lawyer"]],["He met a lawyer.（he ≠ lawyer）",["met","a lawyer"]]]},
 {ask:{say:"考考你！", q:"After the scandal, public trust remained ___.", opts:["low","lowly"], ans:0,
   ok:"對！remain 是連綴動詞，後面接形容詞當補語。", bad:{1:"remain 是連綴動詞，像等號一樣，後面要接形容詞 low，不接副詞。"},
   again:{q:"The room went ___ when the judge walked in.", opts:["silent","silently"], ans:0, exp:"go 在這裡是「變得」，是連綴動詞，接形容詞 silent。"}}},
 {say:"S＋V＋O＋O 是「給」的句型：{The host gave us a cordial welcome.} 先給人、再給東西。改寫時 give、send、offer 用 to，buy、make、cook 用 for。", board:[["The host gave us a cordial welcome.",["us","a cordial welcome"]],["= gave a cordial welcome to us",["to"]],["bought a laptop for me",["for"]]]},
 {say:"注意！cost 只能用兩個受詞，不能改寫：{The trip cost me 5,000 dollars.} 不能說 cost 5,000 dollars to me。", board:[["The trip cost me 5,000 dollars.",["cost"]],["The trip cost 5,000 dollars to me.",[],true]]},
 {ask:{q:"My grandfather bought a laptop ___ me.", opts:["to","for","of"], ans:1,
   ok:"讚！buy 改寫用 for。", bad:{0:"to 是給 give、send、offer 用的，buy 要用 for。",2:"of 只和 ask 搭配，buy 要用 for。"},
   again:{q:"She sent a postcard ___ her teacher.", opts:["to","for"], ans:0, exp:"send 改寫用 to。"}}},
 {say:"最後一種最常考：S＋V＋O＋C，受詞後面還要補語說明受詞的狀態：{The judge found the defendant guilty.} 被告＝有罪。make、find、consider、keep 都是這一型。", board:[["The judge found the defendant guilty.",["the defendant","guilty"]],["Lack of sleep makes me irritable.",["me","irritable"]]]},
 {say:"這一型的口訣！", chant:"受詞後面補一補，補語說明受詞的狀況！"},
 {ask:{q:"Many citizens consider the new law ___.", opts:["unjust","unjustly","injustice"], ans:0,
   ok:"完全正確！consider + 受詞 + 形容詞，the law = unjust。", bad:{1:"這裡要說明法律「是不公平的」，補語要用形容詞，不用副詞。",2:"injustice 是名詞「不公」，法律不等於「不公」這件事，要用形容詞 unjust。"},
   again:{q:"I found ___ hard to concentrate.", opts:["it","that"], ans:0, exp:"find + it + 形容詞 + to V，it 是虛受詞。"}}},
 {say:"高三最重要的技巧：長句找主要動詞！{The students living near the school often arrive late.} living 是分詞，只是修飾 students，真正的主要動詞是 arrive。", board:[["The students (living near the school) often arrive late.",["arrive"]]]},
 {ask:{say:"最後一題！", q:"The jurors from different backgrounds reached a verdict. 主要動詞是？", opts:["from","reached","backgrounds"], ans:1,
   ok:"太強了！括掉 from different backgrounds，主幹是 The jurors reached a verdict。", bad:{0:"from 是介系詞，from different backgrounds 只是修飾語。",2:"backgrounds 是名詞，不是動詞喔。"},
   again:{q:"Relations between the two countries remain cordial. 句型是？", opts:["S＋V＋C","S＋V＋O"], ans:0, exp:"remain 是連綴動詞，cordial 是主詞補語。"}}},
 {say:"五大句型複習完畢！口訣：動詞是老大，看它後面要接啥；受詞後面補一補，補語說明受詞的狀況。長句先括掉修飾語，再找主要動詞！", end:true}
],
g2:[
 {say:"今天要解決一個寫作超常見的錯誤！先看這句：{It rained, however, we went out.} 看起來很正常吧？其實是錯的！", board:[["It rained, however, we went out.",[],true]]},
 {say:"因為 however 是「副詞」，不是連接詞！副詞沒有能力把兩個句子接起來。正確寫法是：分號＋however＋逗號，或是用句號斷開。", board:[["It rained; however, we went out.",[";","however"]],["It rained. However, we went out.",["However"]]]},
 {say:"口訣！", chant:"分號 however 逗號，連接副詞不能只靠逗號！"},
 {say:"同一家的連接副詞還有：nevertheless（儘管如此）、therefore 和 thus（因此）、consequently（結果）、meanwhile（同時）、otherwise（否則）。標點用法全部一樣！", board:[["; nevertheless,  ; therefore,  ; thus,",["nevertheless","therefore","thus"]],["; meanwhile,  ; otherwise,",["meanwhile","otherwise"]]]},
 {ask:{say:"考考你！", q:"The evidence was weak; ___, the prosecutor dropped the case.", opts:["therefore","nevertheless","otherwise"], ans:0,
   ok:"對！證據薄弱，「因此」撤銷案子。", bad:{1:"nevertheless 是「儘管如此」，前後要相反；這裡是因果關係。",2:"otherwise 是「否則」，意思不通。"},
   again:{q:"Hurry up; ___, you'll miss the bus.", opts:["otherwise","meanwhile"], ans:0, exp:"前面是祈使句，「否則」會錯過公車，用 otherwise。"}}},
 {say:"那 whereas 呢？它是連接詞！高一學過喔，複習一下：{Tom is outgoing, whereas his brother is shy.} 連接詞只要逗號就能接兩個句子。", board:[["Tom is outgoing, whereas his brother is shy.",["whereas"]],["Tom is outgoing; however, his brother is shy.",["however"]]]},
 {say:"區分口訣！", chant:"but、so、whereas 是連接詞，逗號就能接；however、therefore 是副詞，要靠分號幫！"},
 {ask:{q:"Rents in Taipei are high, ___ rents in small towns are low.", opts:["however","whereas","therefore"], ans:1,
   ok:"讚！只有逗號連接兩個句子，必須用連接詞 whereas。", bad:{0:"however 是副詞，只用逗號連接兩個句子是錯的。",2:"therefore 是副詞，意思也不是對比。"},
   again:{q:"She was tired; ___, she kept studying.", opts:["nevertheless","whereas"], ans:0, exp:"分號後面接連接副詞 nevertheless：儘管如此。"}}},
 {say:"兩個加碼用法：第一，thus 後面可以直接接 V-ing 表示結果：{Prices rose, thus causing anger.} 第二，連接副詞可以插在句子中間：{The plan, however, failed.}", board:[["Prices rose, thus causing anger.",["thus causing"]],["The plan, however, failed.",["however"]]]},
 {say:"meanwhile 是「同時」：{The birth rate keeps falling. Meanwhile, the elderly population is rising.} 兩件事在同一段時間發生。", board:[["... falling. Meanwhile, ... rising.",["Meanwhile"]]]},
 {ask:{q:"下列哪一句是錯的？", opts:["It rained; however, we went out.","It rained, but however we went out.","It rained, but we went out."], ans:1,
   ok:"完全正確！but 和 however 意思重複，不能一起用。", bad:{0:"這句標點完全正確：分號＋however＋逗號。",2:"這句正確，but 是連接詞，逗號就能連接兩個句子。"},
   again:{q:"Although he was tired, ___ he finished the work.", opts:["but","（不用填）"], ans:1, exp:"although 和 but 不能同時用，直接接主要子句就好。"}}},
 {ask:{say:"最後一題！", q:"The mother was cooking. ___, the father was washing the dishes.", opts:["Meanwhile","Otherwise","Therefore"], ans:0,
   ok:"太棒了！兩件事同時發生，用 Meanwhile。", bad:{1:"Otherwise 是「否則」，這裡沒有條件關係。",2:"Therefore 是「因此」，媽媽煮飯不是爸爸洗碗的原因。"},
   again:{q:"Housing prices rose, ___ making life harder for young people.", opts:["thus","however"], ans:0, exp:"thus + V-ing 表示結果。"}}},
 {say:"連接副詞過關！口訣：分號 however 逗號；but、so、whereas 是連接詞，逗號就能接；however、therefore 是副詞，要靠分號幫。寫作文時多檢查一次標點，就能少扣很多分！", end:true}
],
g3:[
 {say:"今天學學術閱讀的祕密武器：名詞化！先比較兩句：{The city grew rapidly.} 和 {the rapid growth of the city}。意思一樣，但第二種是名詞片語，可以塞進更大的句子裡當主詞或受詞。", board:[["The city grew rapidly.",["grew","rapidly"]],["the rapid growth of the city",["rapid","growth"]]]},
 {say:"名詞化有三個變身：第一，動詞變名詞，grew 變 growth。第二，副詞變形容詞，rapidly 變 rapid。第三，主詞變成 of 或所有格：of the city 或 the city's。", board:[["grew → growth",["growth"]],["rapidly → rapid",["rapid"]],["the city → of the city / the city's",["of the city","the city's"]]]},
 {say:"口訣！", chant:"動詞變名詞，副詞變形容詞，主詞跑去 of 後面！"},
 {ask:{q:"The forest was destroyed. → the ___ of the forest", opts:["destroy","destruction","destroyed"], ans:1,
   ok:"對！destroy 的名詞是 destruction。", bad:{0:"destroy 是動詞，名詞化要用名詞 destruction。",2:"destroyed 是過去分詞，不是名詞。"},
   again:{q:"The city grew rapidly. → the ___ growth of the city", opts:["rapidly","rapid"], ans:1, exp:"修飾名詞要用形容詞 rapid。"}}},
 {say:"有些動詞後面本來接 to V，名詞化之後 to V 保留下來：{He refused to help.} 變成 {his refusal to help}；{They failed to act.} 變成 {their failure to act}。", board:[["He refused to help. → his refusal to help",["refusal to"]],["They failed to act. → their failure to act",["failure to"]],["decide to → decision to",["decision to"]]]},
 {say:"記住這組常考名詞！", chant:"refusal、failure、decision，後面都接 to V！"},
 {ask:{q:"He refused to apologize. → His ___ to apologize upset everyone.", opts:["refuse","refusing","refusal"], ans:2,
   ok:"讚！refuse 的名詞是 refusal。", bad:{0:"refuse 是動詞，His 後面要接名詞 refusal。",1:"名詞化要把動詞換成真正的名詞：refuse 的名詞是 refusal，不是動名詞 refusing。"},
   again:{q:"The government failed to act. → The government's ___ to act", opts:["failure","fail"], ans:0, exp:"fail 的名詞是 failure。"}}},
 {say:"如果 of 已經用來接受詞，動作者就要用 by：{The army liberated the city.} 變成 {the liberation of the city by the army}。", board:[["the liberation of the city by the army",["of the city","by the army"]]]},
 {ask:{q:"the destruction of the city ___ the enemy", opts:["of","by","for"], ans:1,
   ok:"完美！of 已經接了 the city，動作者 the enemy 用 by。", bad:{0:"of 已經用過了，動作者要用 by。",2:"for 不能表示動作者，要用 by。"},
   again:{q:"She insisted on paying. → her ___ on paying", opts:["insistence","insist"], ans:0, exp:"insist on 變成 insistence on。"}}},
 {say:"名詞化在寫作也超好用！{Because it rained heavily, the game was canceled.} 可以改成 {Due to the heavy rain, the game was canceled.} due to 是介系詞，後面一定接名詞片語。", board:[["Because it rained heavily, ...",["Because"]],["Due to the heavy rain, ...",["Due to","the heavy rain"]]]},
 {ask:{say:"最後一題！", q:"Due to ___, the flight was delayed.", opts:["the storm was strong","the strong storm","strongly storm"], ans:1,
   ok:"太棒了！due to 後面接名詞片語 the strong storm。", bad:{0:"due to 是介系詞，不能接完整的子句。",2:"strongly 是副詞，不能修飾名詞 storm。"},
   again:{q:"Their ___ of the evidence was careful.", opts:["examination","examine"], ans:0, exp:"Their 後面接名詞 examination。"}}},
 {say:"名詞化過關！口訣：動詞變名詞，副詞變形容詞，主詞跑去 of 後面；refusal、failure、decision 後面接 to V。下次在閱讀測驗看到名詞化，記得在腦中還原成「誰做了什麼」！", end:true}
],
g4:[
 {say:"今天是高三的大魔王：長句分析！學測閱讀常出現三四行的句子，別怕，它其實是「一個主幹＋一堆裝飾」。看這句：{The students living in remote villages often lack basic resources.}", board:[["The students living in remote villages often lack basic resources.",[]]]},
 {say:"第一步：括號括掉修飾語。living in remote villages 是分詞片語，括起來。剩下 {The students often lack basic resources.} 主要動詞是 lack！", board:[["The students (living in remote villages) often lack basic resources.",["lack"]]]},
 {say:"長句口訣！", chant:"先切連接詞，再括修飾語，最後抓主詞和動詞！"},
 {say:"分詞片語怎麼判斷主動被動？{students living alone}：學生自己住，主動用 V-ing。{the money raised by volunteers}：錢被募集，被動用 p.p.。", board:[["students living alone（主動）",["living"]],["the money raised by volunteers（被動）",["raised"]]]},
 {ask:{q:"The money ___ by the volunteers was donated.", opts:["raising","raised","raise"], ans:1,
   ok:"對！錢是被募集的，用 raised；主要動詞是 was donated。", bad:{0:"錢不會自己募款，要用被動的 raised。",2:"句子已經有主要動詞 was donated，這裡不能再放原形動詞。"},
   again:{q:"The students ___ in rural areas need more support.", opts:["living","lived"], ans:0, exp:"學生主動住在鄉下，用 living。"}}},
 {say:"第二種常見裝飾：同位語。兩個逗號中間放一個名詞片語，補充說明前面的名詞：{Dr. Lin, a famous psychologist, will give a talk.} 括掉同位語，主幹是 Dr. Lin will give a talk。", board:[["Dr. Lin, (a famous psychologist), will give a talk.",["will give"]]]},
 {say:"還有同位語子句：{The fact that the birth rate keeps falling worries the government.} that 子句說明 fact 的內容，主要動詞是 worries。", board:[["The fact (that the birth rate keeps falling) worries the government.",["worries"]]]},
 {ask:{q:"Dr. Chen, ___, will speak on stress.", opts:["is a psychologist","a psychologist","he is a psychologist"], ans:1,
   ok:"讚！逗號中間放名詞片語當同位語。", bad:{0:"句子已經有主要動詞 will speak，逗號中間不能再放 is。",2:"he is a psychologist 是完整的句子，沒有連接詞不能插進來。"},
   again:{q:"The idea ___ we should work less is popular.", opts:["that","which"], ans:0, exp:"同位語子句用 that，後面是完整句子。"}}},
 {say:"長主詞要小心主詞動詞一致！{One of the reasons why young people leave ___ the lack of jobs.} 中心名詞是 One，所以用 is。", board:[["One of the reasons (why young people leave) is the lack of jobs.",["One","is"]]]},
 {say:"抓中心名詞的口訣！", chant:"主詞再長也不怕，找到中心名詞再對動詞！"},
 {ask:{q:"The number of elderly people living alone ___ rising.", opts:["is","are"], ans:0,
   ok:"太好了！The number of 的中心是 number，單數用 is。", bad:{1:"people 只是修飾語的一部分，中心名詞是 number，要用 is。"},
   again:{q:"A number of students ___ absent today.", opts:["is","are"], ans:1, exp:"A number of = many，後面接複數動詞 are。"}}},
 {ask:{say:"最後一題！", q:"The law, passed in 2019 to protect workers, has reduced overtime. 主要動詞是？", opts:["passed","to protect","has reduced"], ans:2,
   ok:"完美！逗號中間的 passed in 2019 to protect workers 是修飾語，主要動詞是 has reduced。", bad:{0:"passed 在這裡是過去分詞，表示「被通過的」，是修飾語。",1:"to protect 是不定詞，表示目的，不是主要動詞。"},
   again:{q:"Having failed twice, she ___ again.", opts:["tried","trying"], ans:0, exp:"Having failed twice 是分詞構句，主要子句需要真正的動詞 tried。"}}},
 {say:"長句分析過關！口訣：先切連接詞，再括修飾語，最後抓主詞和動詞；主詞再長也不怕，找到中心名詞再對動詞。閱讀測驗遇到長句，拿出鉛筆括一括，馬上清楚！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S3_1_1_ROOTS = [
  {id:"r1", title:"字根 cord / cor：心"},
  {id:"r2", title:"字根 jur / jus：法律、正確"},
  {id:"r3", title:"字根 liber：自由"},
  {id:"r4", title:"字根 sequ / secut：跟隨"}
];
const S3_1_1_ROOT_CLASS = {
r1:[
 {say:"高三同學好！今天的字根和「心」有關：<<cord>> 和 <<cor>>。它來自拉丁文的 cor，就是心臟。你早就學過的 {courage} 勇氣，就是「有心」！", board:[["cord / cor = 心",["cord","cor"],false,true]]},
 {say:"<<ac>> 是「朝向」，{accord} 就是兩顆心朝向同一邊，所以是「一致、符合」。片語 {in accordance with} 是「依照」，公文和法律最愛用。", board:[["ac + cord = accord",["cord"],false,true],["ac + cord + ance = accordance",["cord"],false,true]]},
 {say:"口訣！", chant:"cord、cor 是心，心朝同一邊叫 accord！"},
 {ask:{q:"ac（朝向）＋ cord（心）＝ accord，意思是？", opts:["不和","一致","核心"], ans:1,
   ok:"對！兩顆心朝同一個方向，就是一致。", bad:{0:"不和是 discord，dis 是分開；ac 是朝向喔。",2:"核心是 core，accord 是一致。"},
   again:{q:"in accordance with the law 的意思是？", opts:["依照法律","違反法律"], ans:0, exp:"accordance 是一致、依照，in accordance with = 依照。"}}},
 {say:"{accordingly} 是副詞，意思是「因此、相應地」，和 therefore 一樣是連接副詞！{The rules changed; accordingly, we adjusted our plans.} 文法課的分號規則這裡也適用喔。", board:[["; accordingly,",["accordingly"]],["ac + cord + ing + ly = accordingly",["cord"],false,true]]},
 {say:"<<dis>> 是「分開」，心分開了，就是 {discord} 不和、爭吵。", board:[["dis + cord = discord",["dis","cord"],false,true]]},
 {ask:{q:"Money problems caused ___ in the family.（家庭不和）", opts:["accord","discord","cordial"], ans:1,
   ok:"讚！心分開了，就是不和：discord。", bad:{0:"accord 是一致，意思剛好相反。",2:"cordial 是形容詞「熱誠的」，caused 後面要接名詞。"},
   again:{q:"dis 在 discord 裡的意思是？", opts:["分開","一起"], ans:0, exp:"dis 表示分開、相反。"}}},
 {say:"加上形容詞字尾 <<ial>>，{cordial} 就是「發自內心的」，熱誠的、友好的。{a cordial welcome} 熱情的歡迎。", board:[["cord + ial = cordial",["cord"],false,true]]},
 {say:"還有兩個：{core} 是東西的「心」，所以是核心；<<cour>> 是 cor 的變形，{courageous} 是充滿勇氣的。", board:[["cor + e = core",["cor"],false,true],["cour + age + ous = courageous",["cour"],false,true]]},
 {say:"第二個口訣！", chant:"dis 分心 discord，ial 熱心 cordial，cor 是核心 core！"},
 {ask:{say:"最後一題！", q:"Trust is at the ___ of every relationship.（核心）", opts:["core","cord","courage"], ans:0,
   ok:"完美！core 是核心。", bad:{1:"cord 單獨使用是「繩子、電線」，核心是 core。",2:"courage 是勇氣，不是核心。"},
   again:{q:"It was ___ of her to speak out.（勇敢的）", opts:["courageous","cordial"], ans:0, exp:"courageous 是勇敢的；cordial 是熱誠的。"}}},
 {say:"cord 字根過關！口訣：cord、cor 是心；心朝同一邊叫 accord，心分開叫 discord，熱心是 cordial，核心是 core。", end:true}
],
r2:[
 {say:"今天的字根和法律有關：<<jur>> 和 <<jus>>，意思是「法律、正確」。你在高一學過 {justify}、高二學過 {justice} 和 {jury}，它們全都是這一家人！", board:[["jur / jus = 法律、正確",["jur","jus"],false,true],["justice  justify  jury",["jus","jur"],false,true]]},
 {say:"<<just>> 本身就是「公正的」。前面加上否定字首，就變成不公正：{unjust} 不公正的，{injustice} 不公義。", board:[["un + just = unjust",["un","just"],false,true],["in + just + ice = injustice",["in","just"],false,true]]},
 {say:"口訣！", chant:"jus、jur 是法律，just 公正，un、in 變不公！"},
 {ask:{q:"in（不）＋ just（公正）＋ ice（名詞字尾）＝ injustice，意思是？", opts:["正義","不公義","受傷"], ans:1,
   ok:"對！不公正的狀態，就是不公義。", bad:{0:"正義是 justice，in 是「不」喔。",2:"受傷是 injury，長得像但意思不同。"},
   again:{q:"unjust 的詞性是？", opts:["形容詞","名詞"], ans:0, exp:"just 是形容詞，加上 un 仍然是形容詞：不公正的。"}}},
 {say:"<<ify>> 是「使」，{justify} 是使它變正確，就是「證明……是正當的」。再變名詞是 {justification} 正當理由，變形容詞是 {justifiable} 情有可原的。注意 y 會變成 i！", board:[["just + ific + ation = justification",["just"],false,true],["just + ifi + able = justifiable",["just"],false,true]]},
 {ask:{q:"There is no ___ for violence.（正當理由）", opts:["justify","justification","justifiable"], ans:1,
   ok:"讚！no 後面要接名詞 justification。", bad:{0:"justify 是動詞，no 後面要接名詞。",2:"justifiable 是形容詞，這裡要名詞。"},
   again:{q:"His anger was ___.（情有可原的）", opts:["justifiable","justification"], ans:0, exp:"be 動詞後面接形容詞 justifiable。"}}},
 {say:"<<jur>> 是「發誓、法律」。{jury} 是一群依法宣誓的人，陪審團；其中每一個人叫 {juror}，<<or>> 是「人」。", board:[["jur + y = jury（陪審團）",["jur"],false,true],["jur + or = juror（陪審員）",["jur","or"],false,true]]},
 {say:"<<jud>> 是 jus 加上 dic（說）縮起來的，依法說出判決：{judge} 法官、{judicial} 司法的。", board:[["jud + icial = judicial",["jud"],false,true]]},
 {say:"第二個口訣！", chant:"jury 是團，juror 是人，judicial 是司法！"},
 {ask:{say:"最後一題！", q:"Each ___ must listen to the evidence.（陪審員，單數一個人）", opts:["jury","juror","judicial"], ans:1,
   ok:"完美！Each 後面接單數的人：juror。", bad:{0:"jury 是整個陪審團，Each 後面要接一個人：juror。",2:"judicial 是形容詞「司法的」。"},
   again:{q:"The ___ system should be fair.（司法的）", opts:["judicial","juror"], ans:0, exp:"名詞 system 前面放形容詞 judicial。"}}},
 {say:"jur、jus 字根過關！口訣：jus、jur 是法律，just 公正，un、in 變不公；jury 是團，juror 是人，judicial 是司法。", end:true}
],
r3:[
 {say:"今天的字根很短，但意義很大：<<liber>>，意思是「自由」。美國的自由女神像英文叫 the Statue of Liberty！", board:[["liber = 自由",["liber"],false,true]]},
 {say:"加上名詞字尾 <<ty>>：{liberty} 自由；加上形容詞字尾 <<al>>：{liberal} 開明的、自由主義的。", board:[["liber + ty = liberty",["liber","ty"],false,true],["liber + al = liberal",["liber","al"],false,true]]},
 {say:"口訣！", chant:"liber 自由，ty 是名詞，al 是形容詞！"},
 {ask:{q:"liber（自由）＋ ty（名詞字尾）＝ liberty，意思是？", opts:["圖書館","自由","開明的"], ans:1,
   ok:"對！liberty 是自由。", bad:{0:"圖書館是 library，字根 libr 是「書」，和 liber 不一樣喔。",2:"開明的是形容詞 liberal，ty 是名詞字尾。"},
   again:{q:"My parents have ___ views.（開明的）", opts:["liberal","liberty"], ans:0, exp:"名詞 views 前面要放形容詞 liberal。"}}},
 {say:"小心陷阱！library 圖書館的 libr 是「書」，不是自由。長得像，但是不同家。", board:[["libr = 書 → library",["libr"],false,true],["liber = 自由 → liberty",["liber"],false,true]]},
 {say:"動詞字尾 <<ate>> 是「使」：{liberate} 使自由，就是解放；再變名詞 {liberation} 解放。", board:[["liber + ate = liberate",["liber","ate"],false,true],["liber + ation = liberation",["liber","ation"],false,true]]},
 {ask:{q:"The soldiers ___ the city from the enemy.（解放）", opts:["liberated","liberty","liberal"], ans:0,
   ok:"讚！主詞後面要接動詞：liberated。", bad:{1:"liberty 是名詞，這裡需要動詞。",2:"liberal 是形容詞，這裡需要動詞。"},
   again:{q:"Women's ___ movements fought for equal pay.（解放）", opts:["liberation","liberate"], ans:0, exp:"名詞 movements 前面用名詞 liberation 修飾。"}}},
 {say:"最後一個：<<ize>> 也是「使」，{liberalize} 使變得自由，常用在「放寬限制」，像是 liberalize trade 貿易自由化。", board:[["liber + al + ize = liberalize",["liber","ize"],false,true]]},
 {say:"變身口訣！", chant:"ate 使自由 liberate，ize 放寬 liberalize，ation 是解放！"},
 {ask:{say:"最後一題！", q:"The government plans to ___ trade.（放寬限制、自由化）", opts:["liberalize","liberation","library"], ans:0,
   ok:"完美！plan to 後面接動詞 liberalize。", bad:{1:"liberation 是名詞，to 後面要接原形動詞。",2:"library 是圖書館，和自由無關喔！"},
   again:{q:"liber 的意思是？", opts:["書","自由"], ans:1, exp:"liber 是自由；libr 才是書。"}}},
 {say:"liber 字根過關！口訣：liber 自由，ty 名詞 liberty，al 形容詞 liberal，ate 動詞 liberate，ize 放寬 liberalize。別和 library 搞混喔！", end:true}
],
r4:[
 {say:"最後一課，字根 <<sequ>> 和 <<secut>>，意思是「跟隨」。高二學過的 {consequence} 後果，就是跟著事情一起來的結果！", board:[["sequ / secut = 跟隨",["sequ","secut"],false,true]]},
 {say:"{sequence} 一個跟著一個，就是順序；{sequel} 跟在後面的作品，就是續集。", board:[["sequ + ence = sequence",["sequ"],false,true],["sequ + el = sequel",["sequ"],false,true]]},
 {say:"口訣！", chant:"sequ 跟隨，順序 sequence，續集 sequel！"},
 {ask:{q:"sequ（跟隨）＋ el ＝ sequel，意思是？", opts:["順序","續集","結果"], ans:1,
   ok:"對！跟在原作後面的作品，就是續集。", bad:{0:"順序是 sequence。",2:"結果是 consequence。"},
   again:{q:"Put the pictures in the correct ___.（順序）", opts:["sequence","sequel"], ans:0, exp:"順序是 sequence。"}}},
 {say:"加上字首：<<con>> 一起，{consequent} 隨之發生的，{consequently} 因此。<<sub>> 在後面，{subsequent} 隨後的。consequently 也是連接副詞喔！", board:[["con + sequ + ent = consequent",["sequ"],false,true],["sub + sequ + ent = subsequent",["sub","sequ"],false,true],["; consequently,",["consequently"]]]},
 {ask:{q:"He didn't study; ___, he failed.", opts:["consequently","subsequent","sequel"], ans:0,
   ok:"讚！分號後面接連接副詞 consequently：因此。", bad:{1:"subsequent 是形容詞「隨後的」，不能當連接副詞。",2:"sequel 是名詞「續集」，意思不通。"},
   again:{q:"___ studies confirmed the result.（後來的）", opts:["Subsequent","Consequently"], ans:0, exp:"名詞 studies 前面放形容詞 Subsequent。"}}},
 {say:"另一個樣子 <<secut>>：{consecutive} 一個緊跟一個，連續的。{execute} 的 ex 是「到底」，secut 的 s 被吃掉了：一路跟到底，就是執行；{executive} 負責執行的人，就是主管。", board:[["con + secut + ive = consecutive",["secut"],false,true],["ex + (s)ecut + e = execute",["ecut"],false,true],["executive = 主管",["executive"]]]},
 {say:"法律相關的兩個：<<per>> 一直，{persecute} 一直追著不放，是迫害；<<pro>> 向前，{prosecute} 向前追查，是起訴；起訴的人 {prosecutor} 就是檢察官。", board:[["per + secut + e = persecute",["per","secut"],false,true],["pro + secut + e = prosecute",["pro","secut"],false,true],["pro + secut + or = prosecutor",["or"],false,true]]},
 {say:"第二個口訣！", chant:"per 一直追是迫害，pro 向前追是起訴！"},
 {ask:{q:"Trespassers will be ___.（起訴）", opts:["persecuted","prosecuted","executed"], ans:1,
   ok:"完全正確！pro 向前追查：prosecute 起訴。", bad:{0:"persecute 是迫害，per 是一直，意思很不一樣！",2:"execute 是執行或處決，擅自闖入不會被處決啦。"},
   again:{q:"It rained for five ___ days.（連續的）", opts:["consecutive","consequent"], ans:0, exp:"連續的是 consecutive。"}}},
 {ask:{say:"最後一題！", q:"She is a senior ___ at a tech company.（主管）", opts:["executive","execute","prosecutor"], ans:0,
   ok:"太棒了！executive 是主管。", bad:{1:"execute 是動詞「執行」，a senior 後面要接名詞。",2:"prosecutor 是檢察官，不在科技公司上班喔。"},
   again:{q:"secut 的意思是？", opts:["跟隨","切割"], ans:0, exp:"sequ / secut 都是跟隨。"}}},
 {say:"sequ 字根過關！口訣：sequ 跟隨，順序 sequence、續集 sequel；con 一起 consequently，sub 在後 subsequent；per 一直追是迫害，pro 向前追是起訴。高三上第一次段考的字根全部上完，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創） ---------- */
Object.assign(ILLUS2, {
  s311_liberate: () => svgWrap("#eef6ff", grp(52, 72, 1, `<path d="M-22 26 V-12 Q-22 -32 0 -32 Q22 -32 22 -12 V26 Z" fill="none" stroke="#9ca3af" stroke-width="2.5"/><path d="M-11 26 V-28 M0 26 V-32 M11 26 V-28" stroke="#9ca3af" stroke-width="2"/><rect x="-26" y="24" width="52" height="6" rx="2" fill="#6b7280"/><path d="M22 -2 L38 -16" stroke="#9ca3af" stroke-width="2.5"/>`) + grp(120, 36, 1, `<ellipse cx="0" cy="0" rx="12" ry="8" fill="#fde68a"/><circle cx="10" cy="-4" r="6" fill="#fde68a"/><circle cx="12" cy="-5" r="1.4" fill="${INK}"/><path d="M15 -4 L20 -3 L15 -1 Z" fill="#f97316"/><path d="M-4 -4 Q-14 -24 -24 -12 Q-14 -8 -4 -2 Z" fill="#fcd34d"/>`) + `<path d="M74 66 Q92 54 106 44" stroke="#60a5fa" stroke-width="2" fill="none" stroke-dasharray="3 4"/>` + O.sun(140, 96, .5) + spark(100, 18, .8) + spark(146, 50, .6)),
  s311_sequence: () => svgWrap("#fdf4ff", ground("#e9d5ff") + [0, 1, 2, 3, 4].map(i => grp(24 + i * 28, 82, 1, `<rect x="-8" y="-24" width="16" height="44" rx="3" fill="${["#f472b6","#a78bfa","#60a5fa","#34d399","#fbbf24"][i]}" transform="rotate(${i < 2 ? -40 + i * 18 : 0} 0 20)"/>`)).join("") + txt(24, 30, "1", 14, "#be185d") + txt(52, 30, "2", 14, "#6d28d9") + txt(80, 30, "3", 14, "#1d4ed8") + txt(108, 30, "4", 14, "#047857") + txt(136, 30, "5", 14, "#b45309") + `<path d="M24 40 H136" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="4 4"/><path d="M132 36 L138 40 L132 44" stroke="#c4b5fd" stroke-width="2" fill="none"/>`),
  s311_trial: () => svgWrap("#fef7ed", `<rect x="20" y="58" width="120" height="46" rx="4" fill="#92400e"/><rect x="20" y="58" width="120" height="8" fill="#78350f"/>` + P({x:80, y:62, s:.55, hair:"short", hc:"#e5e7eb", oc:"#111827", pose:"hold", mood:"smile", acc:["glasses"]}) + grp(118, 50, 1, `<rect x="-14" y="-5" width="20" height="10" rx="2" fill="#a16207"/><rect x="-5" y="4" width="3" height="12" fill="#713f12"/>`, -25) + `<rect x="104" y="58" width="20" height="4" rx="1" fill="#713f12"/>` + grp(40, 30, .9, `<path d="M0 -14 V12 M-16 -8 H16" stroke="#b45309" stroke-width="2.5"/><path d="M-16 -8 L-22 4 H-10 Z M16 -8 L10 4 H22 Z" fill="#fbbf24" stroke="#b45309" stroke-width="1.5"/><rect x="-7" y="11" width="14" height="4" rx="1" fill="#b45309"/>`)),
  s311_unwind: () => svgWrap("#ecfdf5", ground("#bbf7d0") + O.tree(132, 68, .7) + grp(66, 92, 1, `<rect x="-34" y="-4" width="68" height="10" rx="5" fill="#fb923c"/><path d="M-30 6 L-34 16 M30 6 L34 16" stroke="#9a3412" stroke-width="3"/>`) + P({x:66, y:92, s:.75, hair:"long", hc:"#3b2a20", oc:"#22c55e", pose:"cheer", mood:"smile"}) + txt(26, 34, "♪", 18, "#10b981") + txt(108, 26, "♫", 16, "#10b981") + O.cloud(40, 18, .5) + spark(110, 50, .7, "#a7f3d0"))
});
registerUnit("s3-1-1", {
  name:"高三 上學期 第一次段考",
  sub:"五大句型與句子結構、連接副詞 however / therefore / meanwhile / otherwise、名詞化、長句分析",
  words:S3_1_1_WORDS, grammar:S3_1_1_GRAMMAR, quiz:S3_1_1_QUIZ,
  classes:Object.assign({}, S3_1_1_CLASS, S3_1_1_ROOT_CLASS), phonics:S3_1_1_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會 cord、jur / jus、liber、sequ 四個字根，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
