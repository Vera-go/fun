/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   多益 單元 3：人事招募（原創例句，仿多益情境與難度）
   格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], null, null, 概念卡, 多益重點]
   ========================================================= */
const T3_WORDS = [
/* ---------- 徵才與應徵 ---------- */
["job opening","n.","職缺",[
 ["We have a job opening for a sales assistant.","我們有一個業務助理的職缺。","job opening for + 職位 表示「某職位的職缺」。"],
 ["All job openings are posted on our website.","所有職缺都公布在我們的網站上。","are posted 是現在式被動；post 在這裡是動詞「公告」。"],
 ["The job opening was filled within two weeks.","這個職缺兩週內就補上人了。","fill a job opening 表示「補上職缺」；within + 期間 表示「在……之內」。"]],
 null,null,"📢|職缺","同義字：vacancy、open position。常見搭配：fill a job opening（補職缺）、announce a job opening（公布職缺）。"],
["recruitment","n.","招募",[
 ["The recruitment process usually takes about a month.","招募流程通常大約要一個月。","recruitment process 是「招募流程」；名詞修飾名詞。"],
 ["Ms. Tsai is in charge of recruitment for the Taichung branch.","蔡小姐負責台中分公司的招募。","in charge of + 名詞 表示「負責」。"],
 ["Online recruitment has become more common in recent years.","近年來線上招募越來越普遍。","in recent years 常搭配現在完成式 has become。"]],
 null,null,"🧲|招募","詞性家族：recruit（v. 招募；n. 新進人員）→ recruitment（n. 招募）→ recruiter（n. 招募人員）。"],
["recruiter","n.","招募人員；獵才專員",[
 ["A recruiter from the company contacted me last week.","那家公司的招募人員上週和我聯絡。","contact 是及物動詞，直接接受詞，不說 contact with me。"],
 ["Recruiters often check applicants' online profiles.","招募人員常會查看應徵者的網路個人檔案。","applicants' 是複數名詞的所有格，撇號放在 s 後面。"],
 ["The recruiter asked whether I could start in May.","招募人員問我是否能在五月到職。","whether 引導名詞子句，表示「是否」。"]],
 null,null,"🕵️|招募人員","Part 5 考點：recruiter 是人（可數），recruitment 是事（不可數），看語意選人或事。"],
["resume","n.","履歷",[
 ["Please send your resume and two references.","請寄上你的履歷和兩位推薦人資料。","your 是所有格，後面接名詞 resume。"],
 ["Your resume should be no longer than two pages.","你的履歷不應超過兩頁。","no longer than 表示「不超過」。"],
 ["We received over 200 resumes for the position.","這個職位我們收到超過 200 份履歷。","resume 是可數名詞，複數 resumes。"]],
 null,null,"📄|履歷","也寫作 résumé；英式常用 CV。注意：動詞 resume 是「恢復、繼續」，發音不同。常見搭配：submit a resume。"],
["cover letter","n.","求職信",[
 ["Applicants must include a cover letter with their resume.","應徵者必須在履歷之外附上求職信。","include A with B 表示「把 A 和 B 一起附上」。"],
 ["Her cover letter explained why she wanted to change careers.","她的求職信說明了她為何想轉換跑道。","why 引導名詞子句，當 explained 的受詞。"],
 ["A well-written cover letter can make a strong impression.","一封寫得好的求職信能留下深刻印象。","well-written 是複合形容詞；make an impression 是「留下印象」。"]],
 null,null,"✉️|求職信","cover letter 附在履歷前面，說明應徵動機。搭配：attach a cover letter、address the cover letter to 人。"],
["qualification","n.","資格；條件",[
 ["What qualifications are required for this position?","這個職位需要哪些資格？","are required 是被動；qualifications 常用複數。"],
 ["Mr. Ho has excellent qualifications for the job.","何先生非常符合這份工作的條件。","qualifications for + 職位 表示「擔任某職位的條件」。"],
 ["A teaching qualification is preferred but not required.","有教學資格者優先，但非必要。","preferred but not required 是徵才廣告的常見句型。"]],
 null,null,"🎓|資格","詞性家族：qualify（v.）→ qualified（adj. 合格的）→ qualification（n.）。Part 5 常考：be qualified for + 職位。"],
["candidate","n.","候選人；應徵者",[
 ["We interviewed five candidates for the manager position.","我們為經理職位面試了五位應徵者。","candidates for + 職位。"],
 ["The ideal candidate will have strong communication skills.","理想的人選需具備良好的溝通能力。","徵才廣告常用 will have 描述條件。"],
 ["Ms. Lu is considered the strongest candidate.","呂小姐被認為是最有力的人選。","be considered + 名詞 表示「被認為是……」。"]],
 null,null,"🧑‍💼|應徵者","applicant 是「提出申請的人」，candidate 常指「被考慮的人選」。常見搭配：the ideal candidate、a suitable candidate。"],
["job description","n.","職務說明",[
 ["Please read the job description carefully before applying.","應徵前請仔細閱讀職務說明。","before + V-ing：before applying。"],
 ["The job description lists the main duties of the role.","職務說明列出了這個職位的主要工作內容。","主詞 The job description 是單數，動詞用 lists。"],
 ["Travel is not mentioned in the job description.","職務說明中沒有提到需要出差。","is not mentioned 是被動。"]],
 null,null,"📋|職務說明","縮寫 JD。內容通常包含 duties（職責）、requirements（條件）、benefits（福利）。"],
["requirement","n.","要求；必要條件",[
 ["A driver's license is a requirement for this job.","駕照是這份工作的必要條件。","a requirement for + 事 表示「某事的必要條件」。"],
 ["Do you meet all of the requirements listed below?","您符合下列所有條件嗎？","meet the requirements 表示「符合條件」；listed below 是過去分詞修飾 requirements。"],
 ["The company has strict requirements for new staff.","公司對新進員工有嚴格的要求。","strict 表示「嚴格的」。"]],
 null,null,"✅|必要條件","常見搭配：meet the requirements（符合條件）。動詞 require 加 that 子句時用原形動詞：require that he be ...。"],
["eligible","adj.","有資格的",[
 ["Full-time staff are eligible for the annual bonus.","全職員工有資格領年終獎金。","be eligible for + 名詞。"],
 ["Employees become eligible to apply after six months.","員工滿六個月後才有資格申請。","be eligible to + 原形動詞。"],
 ["Only eligible candidates will be contacted.","只有符合資格的應徵者會被通知。","eligible 放在名詞前當形容詞。"]],
 null,null,"🎟️|有資格","Part 5 考點：be eligible for + 名詞／be eligible to + V。名詞 eligibility（資格）。"],
["credentials","n.","資歷證明；資格證書",[
 ["The recruiter checked the candidate's credentials.","招募人員查核了應徵者的資歷證明。","credentials 通常用複數。"],
 ["Dr. Kao has impressive academic credentials.","高博士有亮眼的學歷。","academic credentials 指學位、學歷等。"],
 ["Please bring copies of your credentials to the interview.","面試時請帶你的資格證明影本。","copies of 表示「……的影本」。"]],
 null,null,"🪪|資歷證明","credentials 常用複數；搭配 check / verify credentials（查核資歷）。"],
["certification","n.","證照；認證",[
 ["This position requires a project management certification.","這個職位需要專案管理證照。","require 後面直接接名詞受詞。"],
 ["She is studying for her accounting certification.","她正在準備會計證照考試。","study for + 考試 表示「準備某考試」。"],
 ["Certification must be renewed every three years.","證照每三年必須更新一次。","must be renewed 是助動詞加被動。"]],
 null,null,"📜|證照","詞性家族：certify（v. 證明）→ certified（adj. 有證照的）→ certificate（n. 證書）→ certification（n. 認證）。"],
["prior","adj.","先前的",[
 ["Prior experience in sales is an advantage.","有業務經驗者佳。","prior experience 是徵才廣告的常見說法。"],
 ["No prior knowledge of the software is needed.","不需要事先懂這套軟體。","No + 名詞 is needed 表示「不需要」。"],
 ["Please arrive 15 minutes prior to your interview.","請在面試前 15 分鐘抵達。","prior to + 名詞 = before，to 是介係詞。"]],
 null,null,"⏮️|先前的","Part 5 考點：prior to + 名詞／V-ing（= before）。prior to 的 to 是介係詞，後面不接原形動詞。"],
["experienced","adj.","有經驗的",[
 ["We are looking for an experienced web designer.","我們在找一位有經驗的網頁設計師。","experienced 修飾名詞 designer。"],
 ["Ms. Pan is highly experienced in customer service.","潘小姐在客服方面非常有經驗。","highly 修飾形容詞；be experienced in + 領域。"],
 ["Even experienced staff need regular training.","即使是資深員工也需要定期訓練。","Even 修飾後面的名詞片語。"]],
 null,null,"🏅|有經驗的","易混淆：experienced（有經驗的，修飾人）／experimental（實驗性的）。搭配 be experienced in + 領域。"],
["entry-level","adj.","入門的；基層的",[
 ["This is an entry-level position for recent graduates.","這是給應屆畢業生的基層職位。","recent graduates 是「應屆畢業生」。"],
 ["Entry-level salaries have risen this year.","今年基層職位的薪水提高了。","have risen 是現在完成式；rise 是不及物動詞。"],
 ["No experience is required for entry-level jobs.","入門職位不需要經驗。","is required 是被動。"]],
 null,null,"🌱|入門職位","entry-level 是複合形容詞，放名詞前，中間要有連字號。相對的是 senior-level（資深的）。"],
["full-time","adj.","全職的",[
 ["She works full-time at a law firm.","她在一家律師事務所全職工作。","full-time 也可以當副詞，放在動詞後面。"],
 ["We are hiring two full-time accountants.","我們要招募兩位全職會計。","full-time 放名詞前當形容詞。"],
 ["The internship may lead to a full-time position.","這份實習可能轉為全職職位。","lead to + 名詞 表示「導致；通往」。"]],
 null,null,"🕘|全職","相對字：part-time（兼職的）。full-time 可當形容詞也可當副詞：work full-time。"],
["shortlist","v.","列入候選名單",[
 ["Only six applicants were shortlisted for an interview.","只有六位應徵者被列入面試名單。","be shortlisted for + 名詞 表示「被列入……的候選名單」。"],
 ["The panel will shortlist three designs by Friday.","評審小組會在週五前選出三件入圍設計。","by + 時間 表示期限。"],
 ["Shortlisted candidates will be notified by e-mail.","入圍的應徵者會以電子郵件通知。","Shortlisted 是過去分詞當形容詞，表示「被列入名單的」。"]],
 null,null,"📝|候選名單","shortlist 也可當名詞：be on the shortlist（在候選名單上）。"],
["job fair","n.","就業博覽會",[
 ["Our company will have a booth at the job fair.","我們公司會在就業博覽會設攤位。","have a booth 表示「設攤位」。"],
 ["Many students attended the job fair on campus.","許多學生參加了校園徵才博覽會。","attend 直接接活動，不加 to。"],
 ["I met my current manager at a job fair.","我是在一場就業博覽會認識現在的主管的。","current 表示「目前的」。"]],
 null,null,"🎪|徵才博覽會","同義：career fair。常見搭配：attend a job fair、hold a job fair。"],
["headhunter","n.","獵人頭；獵才顧問",[
 ["A headhunter offered him a position at a bank.","一位獵才顧問提供他一個銀行的職位。","offer + 人 + 物：offer him a position。"],
 ["Some companies use headhunters to find senior managers.","有些公司透過獵人頭找高階主管。","use A to V 表示「用 A 來做……」。"],
 ["She was approached by a headhunter last month.","她上個月被獵人頭接觸。","be approached by 表示「被……接洽」。"]],
 null,null,"🎯|獵人頭","headhunter 是專門替企業找人的顧問；動詞 headhunt（挖角）。"],
["preferred","adj.","優先的；較受青睞的",[
 ["Fluency in Japanese is preferred.","會說流利日語者優先。","徵才廣告用 preferred 表示「加分條件」。"],
 ["What is your preferred start date?","你希望哪一天到職？","preferred 修飾名詞，表示「偏好的」。"],
 ["A master's degree is preferred but not essential.","有碩士學位者優先，但非必要。","preferred but not essential 是常見對照說法。"]],
 null,null,"⭐|優先","徵才廣告常見：required（必要）vs. preferred（優先）。動詞 prefer A to B（喜歡 A 勝過 B）。"],
/* ---------- 面試與錄取 ---------- */
["interviewer","n.","面試官",[
 ["The interviewer asked about my previous job.","面試官問了我前一份工作的事。","ask about + 事 表示「詢問某事」。"],
 ["There will be three interviewers on the panel.","面試小組會有三位面試官。","There will be + 複數名詞。"],
 ["Try to make eye contact with the interviewer.","試著和面試官保持眼神接觸。","make eye contact with 表示「和……眼神接觸」。"]],
 null,null,"👂|面試官","字尾 -er 是主動方（面試官），-ee 是被動方：interviewee（受面試者）。"],
["panel","n.","小組；評審團",[
 ["A panel of three managers will interview you.","將由三位經理組成的小組面試你。","a panel of + 人 表示「由……組成的小組」。"],
 ["The panel has not yet reached a decision.","小組還沒有做出決定。","panel 是集合名詞，指一個小組時用單數動詞 has。"],
 ["She took part in a panel interview yesterday.","她昨天參加了一場小組面試。","take part in = participate in。"]],
 null,null,"👥|面試小組","常見搭配：panel interview（小組面試）、panel discussion（座談會）。"],
["finalist","n.","決選者；入圍者",[
 ["Each finalist will meet with the CEO.","每位決選者都會和執行長會面。","Each + 單數名詞 + 單數動詞。"],
 ["Mr. Sung was one of the three finalists for the job.","宋先生是這份工作的三位決選者之一。","one of the + 複數名詞。"],
 ["The finalists will be announced on Monday.","決選名單會在週一公布。","will be announced 是未來式被動。"]],
 null,null,"🏁|決選者","final（最後的）+ -ist（人）。搭配：be named a finalist（被選為入圍者）。"],
["attire","n.","服裝",[
 ["Business attire is expected at the interview.","面試時應穿著商務服裝。","attire 是不可數名詞。"],
 ["The company allows casual attire on Fridays.","公司允許週五穿便服。","casual attire 是「便服」。"],
 ["Please check the event invitation for appropriate attire.","請查看活動邀請函上建議的服裝。","appropriate attire 是「合適的服裝」。"]],
 null,null,"👔|服裝","attire 不可數，不加 s。常見搭配：business attire（商務服裝）、formal attire（正式服裝）。"],
["portfolio","n.","作品集",[
 ["Design applicants should submit a portfolio of their work.","設計職缺的應徵者應提交作品集。","a portfolio of + 作品。"],
 ["She showed her online portfolio during the interview.","她在面試時展示了她的線上作品集。","during + 名詞。"],
 ["His portfolio includes several award-winning projects.","他的作品集包含好幾個得獎專案。","award-winning 是複合形容詞，表示「得獎的」。"]],
 null,null,"🗂️|作品集","portfolio 在金融領域也指「投資組合」，多益兩種意思都會出現。"],
["recommendation","n.","推薦；建議",[
 ["She got the job on her professor's recommendation.","她靠教授的推薦得到這份工作。","on one's recommendation 表示「依某人的推薦」。"],
 ["Please attach two letters of recommendation.","請附上兩封推薦信。","letter of recommendation 複數是 letters of recommendation。"],
 ["The consultant's main recommendation was to hire more engineers.","顧問最主要的建議是多聘工程師。","主詞是 recommendation（單數），動詞用 was。"]],
 null,null,"👍|推薦","搭配：letter of recommendation（推薦信）。動詞 recommend that + 主詞 + 原形動詞。"],
["background check","n.","背景調查",[
 ["All new hires must pass a background check.","所有新進人員都必須通過背景調查。","new hire 是「新進人員」，hire 當名詞。"],
 ["The background check usually takes three to five days.","背景調查通常要三到五天。","主詞是單數，動詞用 takes。"],
 ["We will run a background check before making an offer.","我們會在提出聘用前做背景調查。","run a check 表示「進行查核」；before + V-ing。"]],
 null,null,"🔍|背景調查","常見搭配：run / conduct / pass a background check。"],
["proficient","adj.","精通的；熟練的",[
 ["Applicants must be proficient in Excel.","應徵者必須熟悉 Excel。","be proficient in + 領域。"],
 ["He is proficient at negotiating with suppliers.","他很擅長和供應商談判。","be proficient at + V-ing 也可以。"],
 ["Proficient Korean speakers are encouraged to apply.","精通韓語者歡迎應徵。","are encouraged to apply 是徵才廣告常用語。"]],
 null,null,"💯|精通","Part 5 考點：be proficient in / at。名詞 proficiency（精通程度）：English proficiency test。"],
["bilingual","adj.","雙語的",[
 ["We need a bilingual receptionist.","我們需要一位會說雙語的接待員。","bilingual 修飾人。"],
 ["The manual is bilingual, in English and Chinese.","手冊是中英雙語的。","bilingual 也可以修飾物。"],
 ["Being bilingual is a big advantage in this industry.","會雙語在這個產業是很大的優勢。","動名詞 Being 當主詞，動詞用單數 is。"]],
 null,null,"🗣️|雙語","bi-（二）+ lingual（語言的）。相關字：multilingual（多語的）。"],
["aptitude","n.","天賦；才能",[
 ["She shows a strong aptitude for numbers.","她對數字很有天分。","aptitude for + 名詞。"],
 ["All applicants take a short aptitude test.","所有應徵者都要做一個簡短的性向測驗。","aptitude test 是「性向測驗」。"],
 ["The program is designed for students with an aptitude for design.","這個課程是為有設計天分的學生而設計的。","be designed for 表示「為……設計」。"]],
 null,null,"🧠|天賦","易混淆：aptitude（天賦）／attitude（態度）／altitude（高度）。搭配 aptitude for + 名詞。"],
["enthusiastic","adj.","熱情的；熱衷的",[
 ["We want someone who is enthusiastic about technology.","我們要找對科技充滿熱情的人。","be enthusiastic about + 名詞。"],
 ["The new interns are very enthusiastic.","新來的實習生都很有熱忱。","be 動詞後面接形容詞。"],
 ["The proposal received an enthusiastic response.","這個提案得到熱烈的回應。","enthusiastic 修飾名詞 response。"]],
 null,null,"🔥|熱情","詞性家族：enthusiasm（n.）→ enthusiastic（adj.）→ enthusiastically（adv.）。Part 5 常考詞性。"],
["motivated","adj.","有幹勁的；積極的",[
 ["We are seeking highly motivated individuals.","我們正在尋找非常積極的人才。","highly motivated 是徵才廣告的固定說法。"],
 ["Good managers keep their teams motivated.","好主管能讓團隊保持幹勁。","keep + 受詞 + 形容詞。"],
 ["She is motivated by new challenges.","新的挑戰能激勵她。","be motivated by 表示「被……激勵」。"]],
 null,null,"🚀|有幹勁","人自己有幹勁用 motivated；讓人有動力的事用 motivating。名詞 motivation（動機）。"],
["offer letter","n.","錄取通知書",[
 ["I received an offer letter from the company yesterday.","我昨天收到那家公司的錄取通知書。","receive A from B。"],
 ["The offer letter states your salary and start date.","錄取通知書上寫明了你的薪水和到職日。","state 在這裡是動詞「載明」。"],
 ["Please sign and return the offer letter by June 5.","請在 6 月 5 日前簽名並寄回錄取通知書。","sign and return 兩個原形動詞並列。"]],
 null,null,"📨|錄取通知","相關說法：job offer（工作邀約）、accept / decline an offer（接受／婉拒聘用）。"],
["acceptance","n.","接受；錄取",[
 ["Please confirm your acceptance of the offer in writing.","請以書面確認您接受此聘用。","acceptance of + 名詞；in writing 是「以書面」。"],
 ["We are pleased to receive your acceptance.","我們很高興收到您接受聘用的回覆。","be pleased to V 表示「很高興……」。"],
 ["The new policy has gained wide acceptance among staff.","新政策廣受員工認同。","gain acceptance 表示「獲得認同」。"]],
 null,null,"🤝|接受","詞性家族：accept（v.）→ acceptable（adj. 可接受的）→ acceptance（n.）。所有格後面接名詞 acceptance。"],
["starting salary","n.","起薪",[
 ["The starting salary for this position is negotiable.","這個職位的起薪可議。","starting salary for + 職位。"],
 ["Engineers usually have a higher starting salary.","工程師的起薪通常比較高。","higher 修飾 starting salary。"],
 ["What starting salary are you expecting?","您期望的起薪是多少？","面試常見問題。"]],
 null,null,"💵|起薪","salary 是月薪或年薪（固定薪），wage 多指時薪或日薪。常見搭配：a competitive salary（具競爭力的薪資）。"],
["negotiable","adj.","可協商的",[
 ["Salary is negotiable depending on experience.","薪資依經驗可議。","depending on 表示「視……而定」。"],
 ["The start date is negotiable.","到職日可以商量。","be 動詞後面接形容詞。"],
 ["The price is not negotiable.","價格不能再議。","not negotiable 是「不二價」。"]],
 null,null,"🔄|可議","negotiate（v. 協商）→ negotiation（n.）→ negotiable（adj.）。字尾 -able 表示「可以被……的」。"],
["commensurate","adj.","相稱的；相當的",[
 ["Salary will be commensurate with experience.","薪資將依經驗而定。","be commensurate with 表示「和……相稱」。"],
 ["She wants a position commensurate with her skills.","她想要一個和她能力相稱的職位。","commensurate with ... 放在名詞後面修飾。"],
 ["The bonus is commensurate with each person's results.","獎金和每個人的成果相稱。","each person's 是單數所有格。"]],
 null,null,"⚖️|相稱","徵才廣告固定句：salary commensurate with experience（薪資依經驗而定）。介係詞一定是 with。"],
["probation","n.","試用期",[
 ["New employees are on probation for three months.","新進員工有三個月的試用期。","be on probation 表示「在試用期中」。"],
 ["She passed her probation and became a regular employee.","她通過了試用期，成為正式員工。","regular employee 是「正式員工」。"],
 ["During the probation period, staff cannot take paid leave.","試用期間員工不能請特休。","During + 名詞。"]],
 null,null,"⏱️|試用期","常見搭配：be on probation（試用中）、probation period / probationary period（試用期）、pass probation（通過試用）。"],
["onboarding","n.","新人到職流程",[
 ["Our onboarding program lasts two weeks.","我們的新人到職計畫為期兩週。","last 是動詞「持續」。"],
 ["Good onboarding helps new hires settle in quickly.","好的到職流程能幫新人快速適應。","help + 受詞 + 原形動詞；settle in 是「安頓下來」。"],
 ["The HR team is improving the onboarding process.","人資團隊正在改善到職流程。","現在進行式表示正在進行的改善。"]],
 null,null,"🧳|到職流程","onboarding 包含報到、文件手續、新人訓練等。相關字：orientation（新人說明會）。"],
["permanent","adj.","正式的；永久的",[
 ["After the trial period, she was offered a permanent position.","試用期後，她獲得正式職位。","be offered + 名詞 是 offer 的被動。"],
 ["We are looking for permanent staff, not temporary workers.","我們要找正職員工，不是臨時工。","permanent 和 temporary 是相對字。"],
 ["The change to the schedule is permanent.","這次的班表變更是永久的。","be 動詞後面接形容詞。"]],
 null,null,"🔒|正職","相對字：temporary（臨時的）。副詞 permanently（永久地）。permanent position = 正職。"],
/* ---------- 員工福利與人資制度 ---------- */
["benefits package","n.","福利方案",[
 ["The company offers a generous benefits package.","公司提供優渥的福利方案。","generous 表示「慷慨的、優渥的」。"],
 ["Our benefits package includes dental insurance.","我們的福利方案包含牙齒保險。","主詞是 package（單數），動詞用 includes。"],
 ["Details of the benefits package are in the handbook.","福利方案的細節在員工手冊裡。","主詞是 Details（複數），動詞用 are。"]],
 null,null,"🎁|福利方案","benefits 指員工福利時常用複數。常見搭配：a competitive / generous benefits package。"],
["payroll","n.","薪資名冊；薪資發放",[
 ["Please contact payroll if your paycheck is incorrect.","如果薪資有誤請聯絡薪資部門。","payroll 也可以指負責發薪的部門。"],
 ["The company has 300 people on its payroll.","公司有 300 名在職員工。","on the payroll 表示「在職、領薪的」。"],
 ["Payroll is processed on the 25th of each month.","薪資在每月 25 日處理。","is processed 是被動。"]],
 null,null,"🧾|薪資名冊","常見搭配：on the payroll（在職中）、payroll department（薪資部門）。"],
["paid leave","n.","有薪假",[
 ["Employees receive 14 days of paid leave per year.","員工每年有 14 天有薪假。","per year 表示「每年」。"],
 ["He is on paid leave until the end of the month.","他請有薪假到月底。","be on leave 表示「休假中」。"],
 ["Unused paid leave can be carried over to next year.","沒用完的有薪假可以遞延到明年。","carry over 是「延到下一期」。"]],
 null,null,"🏖️|有薪假","leave 當名詞是「休假」，不可數。相對：unpaid leave（無薪假）。搭配 take leave、be on leave。"],
["sick leave","n.","病假",[
 ["Mr. Shih is on sick leave today.","施先生今天請病假。","be on sick leave 表示「在請病假」。"],
 ["A doctor's note is required for more than two days of sick leave.","病假超過兩天需要醫生證明。","more than + 數字。"],
 ["Staff are entitled to ten days of sick leave per year.","員工每年享有十天病假。","be entitled to + 名詞 表示「有權享有」。"]],
 null,null,"🤒|病假","常見搭配：take sick leave、call in sick（打電話請病假）。be entitled to + 名詞，也可接原形動詞（be entitled to take ...）。"],
["leave of absence","n.","留職停薪；長假",[
 ["She took a leave of absence to care for her father.","她請了長假照顧父親。","take a leave of absence 是固定搭配。"],
 ["Requests for a leave of absence must be approved by a director.","長假申請必須經過處長核准。","Requests（複數）是主詞，動詞用 must be approved。"],
 ["He returned to work after a one-year leave of absence.","他在一年的留職停薪後回到工作崗位。","one-year 是複合形容詞，year 不加 s。"]],
 null,null,"🛫|留職停薪","比一般休假更長，常因進修、育兒、照護。相關：maternity leave（產假）、parental leave（育嬰假）。"],
["health insurance","n.","健康保險",[
 ["All full-time employees are covered by health insurance.","所有全職員工都有健康保險。","be covered by 表示「受……保障」。"],
 ["The company pays half of the health insurance premium.","公司負擔一半的健保保費。","premium 是「保費」。"],
 ["Does the job come with health insurance?","這份工作有附健康保險嗎？","come with 表示「附帶」。"]],
 null,null,"🏥|健康保險","搭配：be covered by insurance（有保險保障）、insurance premium（保費）、insurance claim（理賠申請）。"],
["compensation","n.","薪酬；補償",[
 ["The total compensation includes salary and stock options.","總薪酬包含薪水和認股權。","total compensation 是「總薪酬」。"],
 ["Workers received compensation for the overtime hours.","員工因加班時數而得到補償。","compensation for + 事 表示「對……的補償」。"],
 ["Compensation is reviewed once a year.","薪酬每年檢討一次。","is reviewed 是被動。"]],
 null,null,"💰|薪酬","compensate（v. 補償）→ compensation（n.）。搭配：compensate A for B（因 B 補償 A）。"],
["incentive","n.","激勵；獎勵",[
 ["The bonus is an incentive for staff to work harder.","獎金是激勵員工更努力工作的誘因。","an incentive for + 人 + to V。"],
 ["Sales staff receive cash incentives for meeting targets.","業務人員達成目標會得到現金獎勵。","meet targets 是「達成目標」。"],
 ["The company introduced new incentives to reduce turnover.","公司推出新的獎勵措施來降低離職率。","to reduce 是不定詞表目的。"]],
 null,null,"🥕|激勵","常見搭配：incentive program（獎勵計畫）、tax incentive（租稅優惠）、an incentive to V。"],
["bonus","n.","獎金；紅利",[
 ["All employees will receive a year-end bonus.","所有員工都會領到年終獎金。","year-end 是複合形容詞。"],
 ["The bonus is based on team performance.","獎金依團隊績效而定。","be based on 表示「以……為依據」。"],
 ["As a bonus, the hotel offers free parking.","飯店還另外提供免費停車，算是額外好處。","as a bonus 表示「額外的好處」。"]],
 null,null,"🧧|獎金","常見搭配：year-end bonus（年終獎金）、performance bonus（績效獎金）、signing bonus（簽約獎金）。"],
["perk","n.","額外福利",[
 ["Free lunch is one of the perks of working here.","免費午餐是在這裡工作的福利之一。","one of the + 複數名詞。"],
 ["The job has many perks, including a company car.","這份工作有很多福利，包括公司配車。","including + 名詞 表示「包含」。"],
 ["Flexible hours are a popular perk among young workers.","彈性工時是很受年輕員工歡迎的福利。","among + 群體。"]],
 null,null,"☕|額外福利","perk 是 perquisite 的口語說法，多指薪水以外的小福利。相近：fringe benefits。"],
["deduction","n.","扣除；扣除額",[
 ["Your pay slip shows all tax deductions.","你的薪資單會顯示所有扣稅項目。","tax deduction 是「扣稅；稅額扣除」。"],
 ["Insurance payments are taken as a monthly deduction.","保險費每月從薪水扣除。","be taken as 表示「以……方式扣除」。"],
 ["After deductions, his take-home pay is about 40,000 dollars.","扣除之後，他的實領薪水約四萬元。","take-home pay 是「實領薪資」。"]],
 null,null,"➖|扣除","動詞 deduct A from B（從 B 扣除 A）。相關：take-home pay（實領薪資）、gross pay（稅前薪資）。"],
["paycheck","n.","薪水；薪資支票",[
 ["I get my paycheck every two weeks.","我每兩週領一次薪水。","every two weeks 表示「每兩週」。"],
 ["My first paycheck was smaller than I expected.","我的第一份薪水比我預期的少。","than I expected 是比較子句。"],
 ["Overtime pay will appear on your next paycheck.","加班費會出現在你下一次的薪水裡。","appear on 表示「出現在……上」。"]],
 null,null,"💳|薪水","美式拼法 paycheck；英式 pay cheque。相關：pay slip（薪資單）、direct deposit（薪資轉帳）。"],
["seniority","n.","年資；資歷",[
 ["Promotions are not based on seniority alone.","升遷不只看年資。","alone 放在名詞後面表示「僅僅」。"],
 ["Staff with more seniority get more vacation days.","年資越深的員工休假天數越多。","with + 名詞 修飾 Staff。"],
 ["She has ten years of seniority at the bank.","她在這家銀行有十年的年資。","ten years of seniority 是「十年年資」。"]],
 null,null,"📈|年資","senior（adj. 資深的）→ seniority（n. 年資）。相對：junior。搭配 based on seniority（依年資）。"],
["headcount","n.","員工人數；人力編制",[
 ["The company plans to increase its headcount by 10 percent.","公司計畫增加百分之十的人力。","by + 數量 表示差距。"],
 ["Our department's headcount has stayed the same.","我們部門的人數維持不變。","stay the same 表示「維持不變」。"],
 ["We need approval for any increase in headcount.","任何人力增加都需要核准。","an increase in + 名詞。"]],
 null,null,"🔢|員工人數","headcount 指編制人數。搭配：headcount freeze（人力凍結）、reduce headcount（縮編）。"],
["turnover","n.","人員流動；離職率；營業額",[
 ["The restaurant has a high staff turnover.","這家餐廳的人員流動率很高。","high / low turnover 表示流動率高低。"],
 ["Better pay helped reduce turnover.","較好的薪資有助於降低離職率。","help + 原形動詞。"],
 ["The firm's annual turnover exceeded ten million dollars.","這家公司年營業額超過一千萬美元。","turnover 在英式用法也指「營業額」。"]],
 null,null,"🔁|人員流動","一字多義：人資情境是「流動率」，財務情境是「營業額」。搭配：high / low turnover、employee turnover。"],
["retention","n.","留任；保留",[
 ["Employee retention is a top priority this year.","留住員工是今年的首要任務。","top priority 是「首要任務」。"],
 ["Training programs can improve staff retention.","訓練計畫能提高員工留任率。","improve retention 是常見搭配。"],
 ["The retention rate for new hires is about 85 percent.","新進人員的留任率約為百分之八十五。","主詞是 rate（單數），動詞用 is。"]],
 null,null,"🧲|留任","retain（v. 留住）→ retention（n.）。搭配：retention rate（留任率）、customer retention（顧客留存）。"],
["handbook","n.","手冊",[
 ["Every new employee receives a copy of the handbook.","每位新進員工都會拿到一本手冊。","Every + 單數名詞 + 單數動詞。"],
 ["The vacation policy is explained in the employee handbook.","休假規定在員工手冊中有說明。","employee handbook 是「員工手冊」。"],
 ["Please refer to the handbook for details.","詳情請參閱手冊。","refer to 表示「參考、參閱」。"]],
 null,null,"📘|手冊","常見搭配：employee handbook（員工手冊）、refer to the handbook（參閱手冊）。"],
["dress code","n.","服裝規定",[
 ["The office has a business casual dress code.","辦公室的服裝規定是商務便服。","business casual 是「商務便服」。"],
 ["Staff must follow the dress code when meeting clients.","和客戶見面時員工必須遵守服裝規定。","when + V-ing 是分詞構句的省略。"],
 ["The dress code was relaxed during the summer.","夏天時服裝規定放寬了。","relax 在這裡是「放寬（規定）」。"]],
 null,null,"👗|服裝規定","搭配：follow / observe the dress code（遵守服裝規定）、relax the dress code（放寬服裝規定）。"],
["resignation","n.","辭職；辭呈",[
 ["Mr. Fang handed in his resignation this morning.","方先生今天早上遞了辭呈。","hand in 表示「繳交」。"],
 ["The manager accepted her resignation with regret.","經理遺憾地接受了她的辭呈。","with regret 表示「遺憾地」。"],
 ["His resignation takes effect at the end of May.","他的辭職在五月底生效。","take effect 表示「生效」。"]],
 null,null,"🚪|辭呈","resign（v.）→ resignation（n.）。搭配：hand in / submit one's resignation、letter of resignation（辭職信）。"],
["successor","n.","繼任者",[
 ["The board has chosen a successor to the retiring CEO.","董事會已經選出即將退休的執行長的繼任者。","successor to + 人／職位，介係詞用 to。"],
 ["She will train her successor before she leaves.","她離職前會訓練接班人。","before + 子句。"],
 ["No successor has been named yet.","目前還沒有公布繼任人選。","has been named 是現在完成式被動。"]],
 null,null,"🔜|繼任者","相對字：predecessor（前任）。注意介係詞：successor to + 人；succeed + 人（接替）。"],
["relocation","n.","調職；搬遷",[
 ["The company will pay for your relocation to Singapore.","公司會負擔你調到新加坡的搬遷費用。","pay for 表示「支付……的費用」。"],
 ["The relocation of our office is planned for July.","我們辦公室的搬遷預定在七月。","the relocation of + 地點。"],
 ["A relocation allowance is included in the offer.","聘用條件包含搬遷補助。","relocation allowance 是「搬遷補助」。"]],
 null,null,"📦|搬遷","relocate（v. 搬遷；調派）→ relocation（n.）。搭配：relocation package / allowance（搬遷補助）。"],
/* ---------- 訓練與績效 ---------- */
["performance review","n.","績效考核",[
 ["Performance reviews are held twice a year.","績效考核一年舉行兩次。","twice a year 表示「一年兩次」。"],
 ["She received excellent comments in her performance review.","她在績效考核中得到很好的評語。","comments 是「評語」。"],
 ["Please prepare for your performance review next week.","請準備下週的績效考核。","prepare for + 名詞。"]],
 null,null,"📊|績效考核","同義：performance evaluation、performance appraisal。搭配：conduct a performance review。"],
["appraisal","n.","評估；考核",[
 ["Your annual appraisal is scheduled for March 3.","你的年度考核排在 3 月 3 日。","be scheduled for + 時間。"],
 ["The appraisal focuses on goals and teamwork.","這次考核著重在目標和團隊合作。","focus on 表示「著重在」。"],
 ["An independent expert did the appraisal of the property.","一位獨立專家做了房產的鑑價。","appraisal 也可以指「估價、鑑價」。"]],
 null,null,"📝|考核","appraise（v. 評估；估價）。易混淆：appraise（評估）／apprise（通知）／praise（稱讚）。"],
["trainee","n.","受訓者；實習生",[
 ["Each trainee is assigned to an experienced mentor.","每位受訓者都分配給一位有經驗的導師。","be assigned to 表示「被分配給」。"],
 ["The trainees will spend a week in each department.","受訓者會在每個部門待一週。","spend + 時間 + in 地點。"],
 ["Mr. Ong started as a management trainee in 2015.","翁先生在 2015 年以儲備幹部的身分起步。","management trainee 是「儲備幹部」。"]],
 null,null,"🐣|受訓者","字尾 -ee 是被動方（被訓練的人），trainer 是訓練者。易混淆：employer（雇主）／employee（員工）。"],
["internship","n.","實習",[
 ["She did a summer internship at a design firm.","她在一家設計公司做暑期實習。","do an internship 表示「實習」。"],
 ["The internship is unpaid but offers great experience.","這份實習沒有薪水，但能累積很棒的經驗。","unpaid 表示「無薪的」。"],
 ["Many interns are hired after their internship ends.","許多實習生在實習結束後被錄用。","after + 子句。"]],
 null,null,"🎒|實習","intern（n. 實習生）→ internship（n. 實習）。搭配：apply for an internship、paid / unpaid internship。"],
["workshop","n.","工作坊；研習會",[
 ["The workshop on time management starts at nine.","時間管理工作坊九點開始。","workshop on + 主題。"],
 ["All supervisors must attend the leadership workshop.","所有主管都必須參加領導力工作坊。","attend 直接接活動。"],
 ["The workshop was so popular that we added a second session.","工作坊太受歡迎，所以我們加開了一場。","so ... that 表示「如此……以致於」。"]],
 null,null,"🛠️|工作坊","workshop 比 seminar 更重實作。搭配：hold / run a workshop、workshop on + 主題。"],
["seminar","n.","研討會；講座",[
 ["The seminar will cover recent changes to labor law.","這場講座會談到勞動法的最新修訂。","cover 在這裡是「涵蓋、談到」。"],
 ["Registration for the seminar is free for members.","會員報名研討會免費。","主詞 Registration 是單數。"],
 ["More than 100 people signed up for the online seminar.","超過一百人報名線上講座。","sign up for 表示「報名」。"]],
 null,null,"🎙️|講座","線上講座又叫 webinar（web + seminar）。搭配：sign up for a seminar、give a seminar。"],
["instructor","n.","講師；教練",[
 ["The instructor explained the new software step by step.","講師一步一步解說新軟體。","step by step 表示「一步一步地」。"],
 ["Our instructor has 20 years of experience in sales.","我們的講師有 20 年的業務經驗。","years of experience in + 領域。"],
 ["Please direct any questions to the instructor.","有任何問題請洽講師。","direct A to B 表示「把 A 轉給 B」。"]],
 null,null,"👩‍🏫|講師","instruct（v. 指導）→ instruction（n. 指示）→ instructor（n. 講師）。字尾 -or 指人。"],
["familiarize","v.","使熟悉",[
 ["Please familiarize yourself with the safety rules.","請熟悉安全規定。","familiarize oneself with 是固定搭配。"],
 ["The tour will familiarize new staff with the building.","這趟導覽會讓新員工熟悉大樓環境。","familiarize A with B 表示「讓 A 熟悉 B」。"],
 ["Once you are familiarized with the system, the work is easy.","一旦熟悉系統，工作就很簡單。","Once 子句用現在式表示未來。"]],
 null,null,"🧭|使熟悉","Part 5 考點：familiarize oneself with（熟悉）＝ become familiar with。介係詞用 with。"],
["advancement","n.","晉升；進步",[
 ["This job offers good opportunities for advancement.","這份工作有很好的升遷機會。","opportunities for advancement 是「升遷機會」。"],
 ["Training is important for career advancement.","訓練對職涯發展很重要。","career advancement 是「職涯晉升」。"],
 ["Recent advancements in AI have changed the way we work.","人工智慧的最新進展改變了我們的工作方式。","advancement 也可以指技術上的「進展」。"]],
 null,null,"🪜|晉升","advance（v. 前進；晉升）→ advancement（n.）。搭配：room for advancement（升遷空間）。"],
["career path","n.","職涯路徑",[
 ["Talk to your manager about your career path.","和你的主管談談你的職涯規劃。","talk to + 人 + about + 事。"],
 ["The company offers clear career paths for engineers.","公司為工程師提供清楚的職涯路徑。","career paths 是複數。"],
 ["He chose a different career path after college.","他大學畢業後選了不同的職涯方向。","after + 名詞。"]],
 null,null,"🛤️|職涯路徑","career 是「職業生涯」，不是單一工作（job）。搭配：career development（職涯發展）。"],
["accomplishment","n.","成就",[
 ["Winning the award was a great accomplishment for the team.","得獎對團隊來說是很大的成就。","動名詞片語 Winning the award 當主詞，動詞用單數 was。"],
 ["List your major accomplishments on your resume.","在履歷上列出你的主要成就。","list 在這裡是動詞「列出」。"],
 ["Finishing the project early was no small accomplishment.","提早完成專案可不是小成就。","no small 表示「不小的」。"]],
 null,null,"🏆|成就","accomplish（v. 完成）→ accomplishment（n.）。同義：achievement。"],
["contribution","n.","貢獻；捐款",[
 ["We thank Ms. Yen for her contribution to the project.","我們感謝顏小姐對這個專案的貢獻。","contribution to + 名詞，介係詞用 to。"],
 ["Every team member made a valuable contribution.","每位成員都做出了寶貴的貢獻。","make a contribution 是固定搭配。"],
 ["The company matches employee contributions to the pension fund.","公司會依員工提撥退休金的金額做相對提撥。","contribution 也可以指「提撥、捐款」。"]],
 null,null,"🧩|貢獻","contribute（v.）→ contribution（n.）。搭配：make a contribution to、contribute to + 名詞／V-ing。"],
["recognition","n.","表彰；認可",[
 ["She received recognition for her customer service.","她的客戶服務獲得表揚。","receive recognition for 表示「因……受到表揚」。"],
 ["In recognition of his hard work, he was given a bonus.","為表揚他的努力，公司發給他獎金。","in recognition of 是固定片語。"],
 ["The brand has gained international recognition.","這個品牌已經獲得國際認可。","gain recognition 表示「獲得認可」。"]],
 null,null,"🎖️|表彰","recognize（v. 認出；表揚）→ recognition（n.）。搭配：in recognition of（為了表揚）、employee recognition program。"],
["commend","v.","稱讚；表揚",[
 ["The director commended the team for its quick response.","處長稱讚團隊反應迅速。","commend A for B 表示「因 B 稱讚 A」。"],
 ["Mr. Lam was commended for his excellent safety record.","林先生因優異的安全紀錄受到表揚。","be commended for 是被動。"],
 ["The report was highly commended by the judges.","這份報告獲得評審高度讚賞。","highly 修飾動詞 commended，表示「高度地」。"]],
 null,null,"👏|稱讚","Part 5 考點：commend A for B。形容詞 commendable（值得稱讚的）。易混淆：command（命令）／comment（評論）。"],
["diligent","adj.","勤奮的",[
 ["She is a diligent worker who rarely makes mistakes.","她是很勤奮的員工，很少犯錯。","rarely 是頻率副詞，表示「很少」。"],
 ["Diligent preparation helped him pass the exam.","認真的準備幫他通過了考試。","diligent 修飾名詞 preparation。"],
 ["The team worked diligently to finish on time.","團隊勤奮工作，準時完成。","副詞 diligently 修飾動詞 worked。"]],
 null,null,"🐝|勤奮","詞性家族：diligent（adj.）→ diligently（adv.）→ diligence（n.）。修飾動詞要用副詞 diligently。"],
["dedicated","adj.","盡心盡力的；專用的",[
 ["Ms. Chiu is a dedicated and reliable employee.","邱小姐是一位盡責又可靠的員工。","dedicated 修飾人。"],
 ["The company is dedicated to protecting the environment.","公司致力於保護環境。","be dedicated to + V-ing，to 是介係詞。"],
 ["There is a dedicated room for job interviews.","有一間面試專用的房間。","dedicated 修飾物時表示「專用的」。"]],
 null,null,"💪|盡心盡力","Part 5 考點：be dedicated / committed / devoted to + V-ing（不接原形動詞）。名詞 dedication（奉獻）。"],
["adaptable","adj.","適應力強的",[
 ["We need adaptable people who can handle change.","我們需要能應對變化、適應力強的人。","who 引導關係子句修飾 people。"],
 ["The software is adaptable to different industries.","這套軟體可以應用在不同產業。","be adaptable to + 名詞。"],
 ["Being adaptable is important in a startup.","在新創公司，適應力很重要。","動名詞當主詞，動詞用單數。"]],
 null,null,"🦎|適應力強","adapt（v. 適應）→ adaptable（adj.）→ adaptation（n.）。易混淆：adapt（適應）／adopt（採用）。"],
["nominate","v.","提名",[
 ["Employees can nominate a coworker for the monthly award.","員工可以提名同事角逐每月獎項。","nominate A for B 表示「提名 A 角逐 B」。"],
 ["Ms. Ma was nominated as team leader.","馬小姐被提名為組長。","be nominated as 表示「被提名為……」。"],
 ["Three people have been nominated so far.","到目前為止有三個人被提名。","so far 常搭配現在完成式。"]],
 null,null,"🗳️|提名","nominate（v.）→ nomination（n. 提名）→ nominee（n. 被提名人）。搭配：nominate A for an award。"],
["versatile","adj.","多才多藝的；用途廣的",[
 ["He is a versatile employee who can work in any department.","他是多才多藝的員工，能在任何部門工作。","versatile 修飾人。"],
 ["This versatile tool can be used indoors or outdoors.","這個多用途工具室內室外都能用。","versatile 修飾物，表示「用途廣的」。"],
 ["We value versatile workers with a range of skills.","我們重視具備多種技能的全能型員工。","a range of 表示「各種的」。"]],
 null,null,"🎛️|多才多藝","versatile 可修飾人（多才多藝）或物（多用途）。名詞 versatility。"]
];

/* ---------- 4 個解題技巧 ---------- */
const T3_GRAMMAR = [
{ id:"g1", title:"主詞與動詞一致",
  intro:"Part 5 常把主詞和動詞拉得很遠，中間塞介係詞片語或關係子句。解題時先把「真正的主詞」找出來，再決定動詞用單數還是複數。",
  table:[["主詞的樣子","動詞","例子"],["Each / Every + 單數名詞","單數","Each applicant has ..."],["The number of + 複數名詞","單數","The number of applicants is ..."],["A number of + 複數名詞","複數","A number of applicants are ..."],["名詞子句、動名詞、不定詞當主詞","單數","What we need is ...、Hiring staff takes ..."],["A along with / as well as / together with B","跟著 A","The manager, along with her assistants, is ..."]],
  points:[
   "先刪掉主詞後面的介係詞片語：The list (of candidates) is ...，真正主詞是 list。",
   "Each、Every、Either、Neither 當主詞或修飾名詞時，動詞都用單數。",
   "the number of（……的數量）是單數；a number of（許多）是複數，這是多益最愛考的對照組。",
   "名詞子句（What / Whether / That ...）、動名詞、不定詞當主詞一律用單數。",
   "多益陷阱：along with、as well as、together with、in addition to 後面的名詞不算主詞，動詞跟著前面的 A。",
   "多益陷阱：關係子句的動詞跟著先行詞：an applicant who has ...、applicants who have ...。"],
  ex:[
   ["Each applicant is required to submit two references.","每位應徵者都必須提供兩位推薦人。","Each + 單數名詞，動詞用單數 is。"],
   ["The number of applicants has doubled this year.","今年應徵人數增加了一倍。","the number of 是單數，用 has。"],
   ["A number of interns have joined the marketing team.","許多實習生加入了行銷團隊。","a number of 表示「許多」，用複數 have。"],
   ["What the company needs is more experienced engineers.","公司需要的是更多有經驗的工程師。","名詞子句當主詞，動詞用單數 is。"],
   ["The director, along with two managers, is interviewing candidates.","處長和兩位經理正在面試應徵者。","along with 不影響主詞，動詞跟著 The director 用 is。"]]},
{ id:"g2", title:"要求建議動詞＋原形動詞",
  intro:"表示要求、建議、命令的動詞後面接 that 子句時，子句的動詞用原形，不管主詞是第幾人稱、不管時態。這是因為英文省略了 should。",
  table:[["類型","常見的字","句型"],["要求","require、request、ask、demand、insist","request that she send ..."],["建議","recommend、suggest、advise、propose","recommend that he be ..."],["命令","order、command、urge","urge that the plan be ..."],["It is + 形容詞 + that","essential、necessary、important、imperative、vital","It is essential that every employee attend ..."]],
  points:[
   "句型：主詞 + recommend / suggest / require + that + 主詞 + 原形動詞（省略 should）。",
   "主詞是第三人稱單數也不加 s：We suggest that he submit（不是 submits）his resume.",
   "被動要用 be + p.p.：The manager requested that the report be sent today.",
   "否定直接在原形前面加 not：They recommended that she not accept the offer.",
   "It is essential / necessary / important / imperative that + 主詞 + 原形動詞。",
   "多益陷阱：主要動詞本身的時態照常變化（recommended、has requested），只有 that 子句裡用原形。"],
  ex:[
   ["The HR manager recommended that Ms. Lin be promoted.","人資經理建議讓林小姐升職。","that 子句被動用 be + p.p.。"],
   ["We require that every new hire complete the online training.","我們要求每位新進人員完成線上訓練。","主詞 every new hire 是單數，仍用原形 complete。"],
   ["The applicant requested that the interview be moved to Friday.","應徵者要求把面試改到週五。","主要動詞 requested 用過去式，子句仍用原形 be。"],
   ["It is essential that all staff attend the safety briefing.","全體員工務必出席安全簡報。","It is essential that + 原形動詞。"],
   ["Her mentor suggested that she not sign the contract yet.","她的導師建議她先不要簽約。","否定是 not + 原形動詞。"]]},
{ id:"g3", title:"數量詞與限定詞",
  intro:"這類題目看空格後面的名詞：可數還是不可數、單數還是複數，再看語意是肯定還是否定。選錯常常是因為沒看名詞的單複數。",
  table:[["數量詞","後面接","意思"],["each / every / another","單數可數名詞","每一個／另一個"],["all / most / other / a few / few / many","複數可數名詞","全部／大部分／其他的／一些／幾乎沒有／許多"],["a little / little / much","不可數名詞","一些／幾乎沒有／許多"],["the other","單數或複數","（兩者中的）另一個／其餘全部"],["most of the / all of the","特定的複數或不可數名詞","……之中的大部分／全部"]],
  points:[
   "every 一定接單數名詞：every employee，不說 every employees；each 可單獨當代名詞：each of the candidates。",
   "another + 單數名詞（再一個）；other + 複數名詞（其他的）；the other 指剩下的全部或兩者中的另一個。",
   "a few / few 接可數複數，a little / little 接不可數；有 a 是「一些」（肯定），沒有 a 是「幾乎沒有」（否定）。",
   "most + 名詞（大部分的）；most of the + 名詞（特定範圍中的大部分）。",
   "多益陷阱：almost 是副詞，不能直接修飾名詞：almost all employees（正確），almost employees（錯誤）。",
   "多益陷阱：each of / one of 後面接複數名詞，但動詞用單數：Each of the trainees has a mentor."],
  ex:[
   ["Every employee is entitled to paid leave.","每位員工都享有有薪假。","every + 單數名詞 + 單數動詞。"],
   ["Most applicants had prior experience in sales.","大部分的應徵者都有業務經驗。","most + 複數名詞。"],
   ["Almost all of the trainees passed the test.","幾乎所有的受訓者都通過了測驗。","almost 修飾 all，不能直接修飾名詞。"],
   ["We have interviewed two candidates and will meet another one tomorrow.","我們已面試了兩位，明天會再見一位。","another + 單數名詞。"],
   ["Few candidates had the required certification, so we extended the deadline.","幾乎沒有應徵者具備規定的證照，所以我們延後截止日。","few 是否定意思，後面接複數名詞。"]]},
{ id:"g4", title:"副詞的位置與易混副詞",
  intro:"副詞題考兩件事：一是放的位置（助動詞和過去分詞中間、be 動詞後面），二是長得很像但意思不同的副詞，例如 high 和 highly、hard 和 hardly。",
  table:[["形容詞／副詞","另一個副詞","意思差別"],["high（高地）","highly（非常、高度地）","highly qualified、highly recommended"],["hard（努力地）","hardly（幾乎不）","work hard ↔ hardly work"],["late（晚地）","lately（最近）","arrive late ↔ has lately improved"],["near（附近）","nearly（幾乎）","live near ↔ nearly finished"],["recent（adj.）","recently（最近）","has recently been promoted"]],
  points:[
   "副詞常放在助動詞（have / has / will）和動詞之間：has recently been promoted、will soon be announced。",
   "被動語態的副詞放在 be 和過去分詞中間：was carefully reviewed、is highly recommended。",
   "highly 修飾形容詞或過去分詞，表示「非常」：highly qualified、highly motivated；high 是實際的高度或數值：aim high。",
   "hardly 是否定意思「幾乎不」，不再加 not；lately 和 recently 常搭配現在完成式。",
   "nearly / almost 表示「幾乎、將近」，常修飾數字和 all、every：nearly 200 applicants。",
   "多益陷阱：選項同時有 hard 和 hardly 時，看句意是肯定（努力）還是否定（幾乎不）。"],
  ex:[
   ["Mr. Hsu has recently been promoted to sales manager.","許先生最近升為業務經理。","副詞 recently 放在 has 和 been 之間。"],
   ["We are looking for a highly qualified accountant.","我們在找一位非常符合資格的會計。","highly 修飾形容詞 qualified。"],
   ["The trainees worked hard to pass the certification exam.","受訓者努力準備，通過了證照考試。","hard 表示「努力地」。"],
   ["She has hardly had time to prepare for the interview.","她幾乎沒有時間準備面試。","hardly 表示「幾乎不」，本身已是否定。"],
   ["Nearly 300 people applied for the two positions.","將近三百人應徵這兩個職位。","nearly 修飾數字，表示「將近」。"]]}
];

/* ---------- Part 5 練習（每題四個選項；[題目, 選項, 答案編號, 解析, 對應技巧]） ---------- */
const T3_QUIZ = [
 ["Each applicant ___ required to bring a photo ID to the interview.",["are","is","were","have been"],1,"Each + 單數名詞，動詞用單數 is。","g1"],
 ["The number of job openings in the tech industry ___ risen sharply.",["have","having","has","to have"],2,"the number of 是單數，用 has。","g1"],
 ["A number of employees ___ signed up for the leadership workshop.",["has","was","is","have"],3,"a number of 表示「許多」，後面的動詞用複數 have。","g1"],
 ["What the hiring committee is looking for ___ strong communication skills.",["is","are","were","have"],0,"名詞子句當主詞，動詞用單數 is。","g1"],
 ["The director, along with her two assistants, ___ the candidates every Monday.",["meet","are meeting","have met","meets"],3,"along with 後面不算主詞，動詞跟著 The director 用單數 meets。","g1"],
 ["The list of shortlisted candidates ___ been sent to the department heads.",["have","has","are","were"],1,"真正的主詞是 list（單數），of shortlisted candidates 是修飾語。","g1"],
 ["Every new hire ___ a copy of the employee handbook on the first day.",["receive","receiving","receives","have received"],2,"Every + 單數名詞，動詞用單數 receives。","g1"],
 ["Hiring experienced engineers ___ more time than we expected.",["take","have taken","are taking","has taken"],3,"動名詞片語當主詞，動詞用單數 has taken。","g1"],
 ["Applicants who ___ a valid certification will be given priority.",["holds","hold","holding","has held"],1,"關係子句的動詞跟著先行詞 Applicants（複數），用 hold。","g1"],
 ["Neither the salary nor the benefits ___ been finalized yet.",["have","has","is","was"],0,"neither A nor B 動詞跟著 B（the benefits，複數），用 have。","g1"],

 ["The HR manager recommended that Mr. Chen ___ the leadership program.",["join","joins","joined","joining"],0,"recommend that + 主詞 + 原形動詞：join。","g2"],
 ["It is essential that every applicant ___ the form by Friday.",["submits","submitted","submit","will submit"],2,"It is essential that 子句用原形動詞 submit。","g2"],
 ["The company requires that all new staff ___ a background check.",["passed","pass","passes","passing"],1,"require that 子句用原形動詞 pass，不加 s。","g2"],
 ["The committee requested that the final decision ___ until next week.",["postpones","postponed","is postponing","be postponed"],3,"決定是被延期的，用被動原形 be postponed。","g2"],
 ["Ms. Wu suggested that the interview ___ in a quieter room.",["held","is held","was held","be held"],3,"suggest that 子句的被動：be + p.p.，be held。","g2"],
 ["Our consultant advised that we ___ the salary range in the job ad.",["include","includes","included","to include"],0,"advise that + 主詞 + 原形動詞 include。","g2"],
 ["It is necessary that the trainee ___ a mentor before starting work.",["has","have","had","has had"],1,"It is necessary that 子句用原形 have，主詞是單數也不用 has。","g2"],
 ["The manager insisted that each employee ___ the dress code.",["follows","followed","follow","following"],2,"insist that 子句用原形動詞 follow。","g2"],
 ["The doctor recommended that Mr. Lo ___ return to work until next month.",["not","does not","did not","no"],0,"that 子句的否定是 not + 原形動詞：not return。","g2"],
 ["The applicant ___ that his start date be moved to August.",["requesting","has been requested","requested","requests to"],2,"主要子句需要一個有時態的動詞，選 requested；that 子句裡的 be 才是原形。","g2"],

 ["___ employee must complete the safety training by the end of the month.",["All","Every","Most","Other"],1,"空格後面是單數名詞 employee，只能用 Every。","g3"],
 ["___ of the candidates had worked overseas before.",["Most","Almost","Every","Much"],0,"most of the + 複數名詞；almost 是副詞，every 不能接 of。","g3"],
 ["We received ___ applications, so we had to extend the deadline.",["few","little","a little","much"],0,"applications 是可數複數，意思是「很少、幾乎沒有」所以要延期，選 few。","g3"],
 ["Ms. Huang has interviewed three candidates and will see ___ one this afternoon.",["other","others","another","the others"],2,"another + 單數名詞，表示「再一位」。","g3"],
 ["One of the trainees is from Tainan, and ___ two are from Taichung.",["another","other","the others","the other"],3,"總共三位，一位以外剩下的兩位是特定的，用 the other + 複數名詞。","g3"],
 ["___ all of the interns were offered full-time positions.",["Most","Almost","Each","Much"],1,"almost 是副詞，可以修飾 all：almost all。","g3"],
 ["There is ___ time left before the job fair, so we should hurry.",["few","a few","little","many"],2,"time 是不可數名詞，「所剩無幾」用 little。","g3"],
 ["___ of the finalists will meet with the CEO next week.",["Every","Almost","Much","Each"],3,"Each of the + 複數名詞 可以；Every 不能接 of，Almost 是副詞不能直接接 of，Much 只能接不可數名詞。","g3"],
 ["Could you give me ___ minutes to review your resume?",["a few","a little","much","little"],0,"minutes 是可數複數，表示「幾分鐘」用 a few。","g3"],
 ["Staff in ___ departments may also apply for the position.",["another","other","the other one","each"],1,"departments 是複數，用 other + 複數名詞。","g3"],

 ["Ms. Cheng has ___ been promoted to regional manager.",["recent","recently","more recent","recentness"],1,"助動詞 has 和 been 之間放副詞 recently。","g4"],
 ["We are looking for a ___ motivated person to lead the sales team.",["high","higher","highly","height"],2,"修飾形容詞 motivated 用 highly，表示「非常」。","g4"],
 ["The new intern works very ___ and is always the first to arrive.",["hardly","hardness","harder than","hard"],3,"句意是正面的「工作很努力」，用 hard；hardly 是「幾乎不」。","g4"],
 ["We have ___ received any applications for the night shift.",["hard","hardly","harder","hardest"],1,"「幾乎沒有收到」，用否定意思的 hardly。","g4"],
 ["___ 500 people attended the job fair last Saturday.",["Nearby","Near","Nearly","Nearest"],2,"修飾數字表示「將近」用 Nearly。","g4"],
 ["Employee turnover has decreased significantly ___.",["late","latest","later","lately"],3,"lately 表示「最近」，常搭配現在完成式。","g4"],
 ["The candidate's references were ___ checked by the HR team.",["careful","care","carefully","more careful"],2,"被動語態 were 和 checked 之間放副詞 carefully。","g4"],
 ["The online seminar started 20 minutes ___ because of a technical problem.",["late","lately","lateness","latest"],0,"表示「晚了二十分鐘」用 late；lately 是「最近」。","g4"],
 ["Ms. Tang's performance review was ___ positive.",["extreme","extremes","extremity","extremely"],3,"修飾形容詞 positive 用副詞 extremely。","g4"],
 ["The final candidate list will ___ be announced on the company website.",["soon","soonest","sooner than","soonly"],0,"will 和 be 之間放副詞 soon；soonly 不是英文字。","g4"]
];

/* ---------- 4 堂解題技巧課（安安老師・教練語氣） ---------- */
const T3_CLASS = {
g1:[
 {say:"大家好，我是安安。這個單元的主題是人事招募，第一堂課練「主詞和動詞一致」。多益很愛把主詞和動詞拉得很遠，讓你一時看不出來真正的主詞是誰。", board:[["The list of candidates ___ been sent.",["___"]],["(A) have (B) has",[]]]},
 {say:"解法第一步：把主詞後面的介係詞片語先遮起來。{The list of candidates} 真正的主詞是 list，單數，所以用 has。", board:[["The list (of candidates) has been sent.",["list","has"]]]},
 {say:"先記這句口訣。", chant:"先遮介係詞，再找真主詞。"},
 {ask:{q:"The list of shortlisted candidates ___ been sent to HR.", opts:["have","has","are"], ans:1,
   ok:"正確。真正的主詞是 list，單數用 has。", bad:{0:"candidates 是介係詞 of 的受詞，不是主詞；真正的主詞 list 是單數。",2:"are been 不是正確的文法，而且主詞 list 是單數。"},
   again:{q:"The cost of the training programs ___ increased.", opts:["have","has"], ans:1, exp:"主詞是 cost（單數），用 has。"}}},
 {say:"第二組必考：{each} 和 {every} 後面接單數名詞，動詞也用單數。例如 {Each applicant is required to ...}、{Every new hire receives ...}", board:[["Each applicant is ...",["Each","is"]],["Every new hire receives ...",["Every","receives"]]]},
 {say:"再來是多益最愛的對照組：{the number of} 是「……的數量」，數量只有一個，用單數；{a number of} 是「許多」，用複數。", board:[["The number of applicants is ...",["The number of","is"]],["A number of applicants are ...",["A number of","are"]]]},
 {say:"對照組口訣。", chant:"The number 單數，a number 複數。"},
 {ask:{q:"A number of interns ___ joined the sales team.", opts:["has","have","is"], ans:1,
   ok:"沒錯。a number of 表示「許多」，動詞用複數 have。", bad:{0:"a number of 是「許多」，不是「數量」，動詞要用複數。",2:"is joined 不合文法，而且 a number of 後面要用複數動詞。"},
   again:{q:"The number of job openings ___ grown.", opts:["has","have"], ans:0, exp:"the number of 是「數量」，單數用 has。"}}},
 {say:"第三種：名詞子句、動名詞、不定詞當主詞，一律當單數。例如 {What we need is more staff.}、{Hiring engineers takes time.}", board:[["What we need is more staff.",["What we need","is"]],["Hiring engineers takes time.",["Hiring engineers","takes"]]]},
 {say:"最後是陷阱：{along with}、{as well as}、{together with} 後面的人不算主詞。{The director, along with two managers, is ...}，動詞跟著 The director。", board:[["The director, along with two managers, is ...",["The director","is"]]]},
 {ask:{say:"最後一題。", q:"The director, along with her assistants, ___ the candidates every Monday.", opts:["meet","meets","are meeting"], ans:1,
   ok:"很好。along with 後面不算主詞，真正的主詞 The director 是單數，用 meets。", bad:{0:"meet 是複數動詞；along with her assistants 不算主詞，主詞是 The director。",2:"are 是複數；along with 後面的 assistants 不算主詞。"},
   again:{q:"What the company needs ___ more engineers.", opts:["is","are"], ans:0, exp:"名詞子句當主詞，用單數 is。"}}},
 {say:"主詞動詞一致重點整理：先遮掉介係詞片語找真主詞；each、every 用單數；the number of 單數、a number of 複數；名詞子句和動名詞當主詞用單數；along with、as well as 後面不算主詞。", end:true}
],
g2:[
 {say:"這一課教一個很多人在多益失分的句型：要求、建議的動詞後面接 that 子句，子句裡的動詞用原形。", board:[["The manager recommended that Ms. Lin ___ promoted.",["___"]],["(A) is (B) be (C) was",[]]]},
 {say:"常見的字有三類：要求類 {require}、{request}、{insist}；建議類 {recommend}、{suggest}、{advise}；還有 It is {essential}、{necessary}、{important} that。", board:[["require / request / insist",["require","request","insist"]],["recommend / suggest / advise",["recommend","suggest","advise"]],["It is essential / necessary that",["essential","necessary"]]]},
 {say:"為什麼用原形？因為中間省略了 should。{recommend that he should submit}，把 should 拿掉，就剩下原形 submit。", board:[["recommend that he (should) submit",["submit"]]]},
 {say:"記住這句口訣。", chant:"要求建議加 that，後面動詞用原形。"},
 {ask:{q:"We recommend that he ___ his resume today.", opts:["submits","submit","submitted"], ans:1,
   ok:"正確。recommend that 子句用原形 submit，就算主詞是 he 也不加 s。", bad:{0:"雖然主詞是 he，但 recommend that 子句要用原形，不加 s。",2:"that 子句要用原形，不用過去式。"},
   again:{q:"The company requires that all staff ___ the training.", opts:["complete","completes"], ans:0, exp:"require that 子句用原形 complete。"}}},
 {say:"如果子句是被動，就用 {be} 加過去分詞。例如 {requested that the interview be moved}，面試是被改時間的。", board:[["requested that the interview be moved",["be moved"]]]},
 {ask:{q:"Ms. Wu suggested that the meeting ___ in Room B.", opts:["held","be held","is held"], ans:1,
   ok:"沒錯。會議是被舉行的，被動原形是 be held。", bad:{0:"held 少了 be，句子沒有完整的動詞。",2:"suggest that 子句不用 is，要用原形 be。"},
   again:{q:"The manager asked that the report ___ sent today.", opts:["be","was"], ans:0, exp:"ask that 子句被動用 be + p.p.。"}}},
 {say:"否定的寫法：直接在原形前面加 {not}，不要加 does 或 did。例如 {advised that she not accept the offer}。", board:[["advised that she not accept the offer",["not accept"]]]},
 {say:"It is 加形容詞也一樣：{It is essential that every employee attend the briefing.} attend 是原形。", board:[["It is essential that every employee attend ...",["essential","attend"]]]},
 {ask:{q:"It is essential that every applicant ___ the form by Friday.", opts:["submit","submits","will submit"], ans:0,
   ok:"很好。It is essential that 子句用原形 submit。", bad:{1:"主詞 every applicant 是單數，但這個句型一律用原形，不加 s。",2:"這個句型不用 will，要用原形。"},
   again:{q:"Her mentor advised that she ___ sign the contract yet.", opts:["not","doesn't"], ans:0, exp:"否定用 not + 原形動詞。"}}},
 {say:"最後提醒一個陷阱：只有 that 子句裡用原形，前面的主要動詞時態照常。{The applicant requested that ...}，requested 是過去式。", board:[["The applicant requested that his start date be moved.",["requested","be moved"]]]},
 {ask:{say:"最後一題。", q:"The applicant ___ that the interview be moved to Friday.", opts:["request","requested","requesting"], ans:1,
   ok:"正確。主要動詞要有時態，選 requested；that 子句裡的 be 才是原形。", bad:{0:"主詞 The applicant 是單數，主要動詞不能用原形 request；原形只用在 that 子句裡。",2:"requesting 不是完整的動詞，句子會沒有主要動詞。"},
   again:{q:"The manager insisted that each employee ___ the dress code.", opts:["follow","follows"], ans:0, exp:"insist that 子句用原形 follow。"}}},
 {say:"要求建議動詞重點整理：recommend、suggest、require、request、insist 加 that，子句用原形；被動用 be 加過去分詞；否定用 not 加原形；It is essential、necessary 也一樣；主要動詞的時態照常變化。", end:true}
],
g3:[
 {say:"這一課練數量詞和限定詞。這類題目的關鍵是空格後面的名詞：可數還是不可數、單數還是複數。", board:[["___ employee must attend.",["___"]],["(A) All (B) Every (C) Most",[]]]},
 {say:"第一組：{each}、{every}、{another} 後面接單數名詞；{all}、{most}、{other}、{many} 後面接複數名詞。", board:[["every employee / another candidate",["employee","candidate"]],["all employees / other departments",["employees","departments"]]]},
 {say:"先記口訣。", chant:"every、another 接單數，all、other 接複數。"},
 {ask:{q:"___ employee must complete the safety training.", opts:["All","Every","Most"], ans:1,
   ok:"正確。employee 是單數，只能接 Every。", bad:{0:"All 後面要接複數名詞 employees。",2:"Most 後面要接複數名詞 employees。"},
   again:{q:"Staff in ___ departments may also apply.", opts:["another","other"], ans:1, exp:"departments 是複數，用 other。"}}},
 {say:"第二組：{another} 是「再一個」，後面接單數；{the other} 是「剩下的那一個或全部」。三個人裡面一個從台南來，剩下的兩個就是 {the other two}。", board:[["will see another candidate",["another"]],["One is from Tainan, and the other two are from Taichung.",["the other"]]]},
 {ask:{q:"We interviewed three candidates and will see ___ one tomorrow.", opts:["other","another","the others"], ans:1,
   ok:"沒錯。another + 單數名詞，表示「再一位」。", bad:{0:"other 後面要接複數名詞，這裡是單數 one。",2:"the others 是代名詞，後面不能再接 one。"},
   again:{q:"One trainee is from Tainan, and ___ two are from Taichung.", opts:["another","the other"], ans:1, exp:"剩下特定的兩位，用 the other。"}}},
 {say:"第三組：{few}、{a few} 接可數複數；{little}、{a little} 接不可數。有 a 是「有一些」，沒有 a 是「幾乎沒有」，帶否定的語氣。", board:[["a few minutes / few applications",["a few","few"]],["a little time / little time",["a little","little"]]]},
 {say:"這組的口訣。", chant:"有 a 是有一些，沒 a 是幾乎沒有。"},
 {ask:{q:"We received ___ applications, so we extended the deadline.", opts:["few","little","a little"], ans:0,
   ok:"很好。applications 是可數複數，收到的很少所以要延期，選 few。", bad:{1:"little 接不可數名詞，applications 是可數複數。",2:"a little 接不可數名詞，而且是「有一些」的意思。"},
   again:{q:"There is ___ time left, so we should hurry.", opts:["few","little"], ans:1, exp:"time 不可數，「所剩無幾」用 little。"}}},
 {say:"最後是 {most} 和 {almost}。most 是「大部分的」，可以直接接名詞；almost 是副詞「幾乎」，不能直接接名詞，要說 {almost all employees}。", board:[["most employees / most of the employees",["most"]],["almost all employees",["almost all"]],["almost employees",[],true]]},
 {ask:{say:"最後一題。", q:"___ all of the interns were offered full-time positions.", opts:["Most","Almost","Each"], ans:1,
   ok:"正確。almost 是副詞，可以修飾 all：almost all。", bad:{0:"Most 後面不能再接 all。",2:"Each 不能和 all 連用，而且動詞 were 是複數。"},
   again:{q:"___ of the candidates had worked overseas.", opts:["Most","Almost"], ans:0, exp:"most of the + 名詞；almost 不能直接接 of。"}}},
 {say:"數量詞重點整理：every、each、another 接單數；all、most、other 接複數；the other 指剩下特定的；few、a few 接可數，little、a little 接不可數，沒有 a 是否定；almost 是副詞，要說 almost all。", end:true}
],
g4:[
 {say:"這一課練副詞。多益副詞題考兩件事：放在哪裡，以及長得很像的副詞要怎麼分。", board:[["Ms. Cheng has ___ been promoted.",["___"]],["(A) recent (B) recently",[]]]},
 {say:"位置規則：副詞常放在助動詞和動詞中間，例如 {has recently been promoted}；被動句放在 be 和過去分詞中間，例如 {was carefully reviewed}。", board:[["has recently been promoted",["recently"]],["was carefully reviewed",["carefully"]]]},
 {say:"記住這句。", chant:"助動詞和動詞中間，留一格給副詞。"},
 {ask:{q:"Ms. Cheng has ___ been promoted to manager.", opts:["recent","recently","recentness"], ans:1,
   ok:"正確。has 和 been 之間放副詞 recently。", bad:{0:"recent 是形容詞，修飾動詞要用副詞。",2:"recentness 是名詞，這裡需要副詞。"},
   again:{q:"The references were ___ checked by HR.", opts:["careful","carefully"], ans:1, exp:"were 和 checked 之間放副詞 carefully。"}}},
 {say:"接著是易混副詞。第一組：{high} 是實際的高，{highly} 是「非常、高度地」，徵才廣告常見 {highly qualified}、{highly motivated}。", board:[["highly qualified / highly motivated",["highly"]],["aim high",["high"]]]},
 {ask:{q:"We are looking for a ___ motivated person.", opts:["high","highly","height"], ans:1,
   ok:"沒錯，修飾 motivated 要用 highly，表示「非常」。", bad:{0:"high 是實際的高度，不能表示「非常」。",2:"height 是名詞「高度」。"},
   again:{q:"The training course is ___ recommended.", opts:["highly","high"], ans:0, exp:"highly recommended 表示「強力推薦」。"}}},
 {say:"第二組：{hard} 是「努力地」，{hardly} 是「幾乎不」。{work hard} 是很努力，{hardly work} 是幾乎不工作，意思剛好相反。hardly 本身就是否定，不要再加 not。", board:[["work hard → 努力工作",["hard"]],["hardly work → 幾乎不工作",["hardly"]]]},
 {say:"這組的口訣。", chant:"hard 是努力，hardly 幾乎不。"},
 {ask:{q:"We have ___ received any applications for the night shift.", opts:["hard","hardly","harder"], ans:1,
   ok:"很好。「幾乎沒有收到」，用 hardly。", bad:{0:"hard 是「努力地」，放在這裡意思不通。",2:"harder 是比較級，句子裡沒有比較的對象。"},
   again:{q:"The intern works very ___.", opts:["hard","hardly"], ans:0, exp:"「工作很努力」用 hard。"}}},
 {say:"第三組：{late} 是「晚」，{lately} 是「最近」，常搭配現在完成式。第四組：{nearly} 是「將近、幾乎」，常修飾數字，例如 {nearly 500 people}。", board:[["started 20 minutes late",["late"]],["has improved lately",["lately"]],["nearly 500 people",["nearly"]]]},
 {ask:{say:"最後一題。", q:"___ 500 people attended the job fair.", opts:["Near","Nearly","Nearby"], ans:1,
   ok:"正確。修飾數字表示「將近」，用 Nearly。", bad:{0:"near 是「在附近」，不能修飾數字。",2:"nearby 是「附近的」，不能修飾數字。"},
   again:{q:"Turnover has decreased ___.", opts:["late","lately"], ans:1, exp:"lately 表示「最近」，搭配現在完成式。"}}},
 {say:"副詞重點整理：副詞放在助動詞和動詞中間、be 和過去分詞中間；highly 是非常，hard 是努力、hardly 是幾乎不，late 是晚、lately 是最近，nearly 是將近。單元 3 的解題技巧上完了，去 Part 5 練習和聽力試試看。", end:true}
]};

/* ---------- Part 2 聽力應答題庫（原創；第一個選項為正解，播放時會打亂順序） ---------- */
const T3_LISTEN = [
 ["When is the deadline for the job application?",["This Friday at five.","I applied for a loan.","At the HR office."],"When 問時間，要回答時間。B 的 applied 和 application 是重複字陷阱；C 回答地點。"],
 ["Who will be interviewing the candidates?",["Ms. Kuo and two managers.","Next Tuesday morning.","Yes, they're good candidates."],"Who 問人。C 用 Yes 回答 Wh- 問句，又重複 candidates，是雙重陷阱。"],
 ["Why did Kevin hand in his resignation?",["He's moving to another city.","By e-mail, I think.","It's on your desk."],"Why 問原因。B 回答方式，是常見陷阱。"],
 ["How many people applied for the position?",["About forty so far.","It's a sales position.","Yes, I put it there."],"How many 問數量。C 的 put it there 和 position（位置）意思聯想，是陷阱。"],
 ["Have you finished reviewing the resumes?",["I still have a few left.","She'll resume work tomorrow.","Yes, a review."],"問是否完成，回答「還剩幾份」是間接回答。B 的 resume 是「恢復」，一字多義陷阱。"],
 ["Where is the new employee orientation being held?",["In the training room on the third floor.","At nine tomorrow.","He's a new employee."],"Where 問地點。C 重複 new employee 是陷阱。"],
 ["Did you get the offer letter from the bank?",["Yes, it came yesterday.","I'd like a letter opener.","The bank is closed."],"Did you ...? 問有沒有收到，回答 Yes 加補充。B、C 重複 letter、bank，是重複字陷阱。"],
 ["Isn't the probation period three months?",["No, it was changed to six.","He's very probable.","For three hours."],"否定疑問句照事實回答：不是三個月就說 No。B 的 probable 和 probation 發音相近。"],
 ["Would you like me to set up the interview room?",["That would be great, thanks.","She was interviewed on TV.","It's a large room."],"對方主動提供協助，回答接受或婉拒。B、C 重複 interview、room。"],
 ["Should we hire one full-time person or two part-timers?",["One full-time person would be easier.","Yes, we should.","It's time to go."],"選擇疑問句不能用 Yes / No 回答，要選其中一個。C 的 time 是發音陷阱。"],
 ["How long is the training program for new hires?",["It lasts two weeks.","It's very high.","About forty trainees."],"How long 問期間。B 的 high 和 hire 發音相近；C 回答人數。"],
 ["Why don't you nominate Ms. Fu for the award?",["That's a good idea.","Because she won.","It was a nice ceremony."],"Why don't you ...? 是建議，不是問原因。B 用 Because 回答是陷阱。"],
 ["The payroll system will be down this afternoon.",["Then I'll check my pay slip tomorrow.","He paid for lunch.","It's down the hall."],"直述句告知狀況，自然的回應是調整做法。C 的 down 是一字多義陷阱。"],
 ["Who should I contact about my health insurance?",["Ben in human resources.","Yes, I have insurance.","It's healthy food."],"Who 問人或單位。C 的 healthy 和 health 是部分重複陷阱。"],
 ["When will we know if Mr. Su passed his probation?",["His manager will decide by Friday.","He passed the salt.","At the station."],"When 問時間，A 間接回答「週五前會決定」。B 的 passed 是一字多義陷阱。"]
];

/* 多益重點裡可以點開的片語：key 是重點文字裡出現的原文，值是 [片語, 中文, 例句, 例句中文] 的清單 */
Object.assign(PHRASES, {
"fill a job opening": [["fill a job opening","補上職缺","We hope to fill the job opening before the busy season.","我們希望在旺季前補上這個職缺。"]],
"be qualified for": [["be qualified for","有資格擔任","Mr. Yu is well qualified for the role of team leader.","余先生非常有資格擔任組長。"]],
"meet the requirements": [["meet the requirements","符合條件","Unfortunately, the applicant did not meet the requirements.","很遺憾，那位應徵者不符合條件。"]],
"be eligible for": [["be eligible for","有資格獲得","Part-time staff are not eligible for the travel allowance.","兼職員工沒有資格領差旅津貼。"]],
"prior to": [["prior to + 名詞／V-ing","在……之前","Please read the contract carefully prior to signing it.","簽約前請仔細閱讀合約。"]],
"be experienced in": [["be experienced in","在……方面有經驗","We need someone who is experienced in event planning.","我們需要一位有活動企劃經驗的人。"]],
"panel interview": [["panel interview","小組面試","The second round is a panel interview with four managers.","第二輪是由四位經理進行的小組面試。"]],
"business attire": [["business attire","商務服裝","Business attire is required for the client dinner.","客戶晚宴需穿著商務服裝。"]],
"letter of recommendation": [["letter of recommendation","推薦信","Her former manager wrote her a strong letter of recommendation.","她的前主管幫她寫了一封很有力的推薦信。"]],
"be proficient in": [["be proficient in","精通","All drivers must be proficient in basic English.","所有司機都必須具備基本英語能力。"]],
"accept / decline an offer": [
  ["accept an offer","接受聘用","After thinking it over, Ms. Lo decided to accept the offer.","考慮過後，羅小姐決定接受聘用。"],
  ["decline an offer","婉拒聘用","He declined the offer because the commute was too long.","他因為通勤太遠而婉拒了這份工作。"]],
"salary commensurate with experience": [["salary commensurate with experience","薪資依經驗而定","The ad says salary commensurate with experience.","廣告上寫著薪資依經驗而定。"]],
"be on probation": [["be on probation","在試用期中","New staff are on probation for the first ninety days.","新進員工前九十天在試用期中。"]],
"on the payroll": [["on the payroll","在職中；領薪名單上","The factory has nearly 800 workers on the payroll.","這家工廠有將近 800 名在職員工。"]],
"be entitled to": [["be entitled to + 名詞","有權享有","Employees are entitled to a free health check every year.","員工每年享有一次免費健康檢查。"]],
"compensate A for B": [["compensate A for B","因 B 補償 A","The airline compensated passengers for the long delay.","航空公司因長時間延誤補償了乘客。"]],
"year-end bonus": [["year-end bonus","年終獎金","Most staff received a two-month year-end bonus.","大部分員工領到兩個月的年終獎金。"]],
"deduct A from B": [["deduct A from B","從 B 扣除 A","The cost of the uniform will be deducted from your first paycheck.","制服費用會從你的第一份薪水扣除。"]],
"employee handbook": [["employee handbook","員工手冊","Please sign the form on the last page of the employee handbook.","請在員工手冊最後一頁的表格簽名。"]],
"follow / observe the dress code": [
  ["follow the dress code","遵守服裝規定","Visitors to the factory must follow the dress code.","工廠訪客必須遵守服裝規定。"],
  ["observe the dress code","遵守服裝規定","Please observe the dress code at the awards dinner.","頒獎晚宴請遵守服裝規定。"]],
"hand in / submit one's resignation": [
  ["hand in one's resignation","遞辭呈","She handed in her resignation after ten years at the firm.","她在公司待了十年後遞出辭呈。"],
  ["submit one's resignation","提出辭呈","The vice president submitted his resignation on Monday.","副總裁在週一提出辭呈。"]],
"successor to": [["successor to","……的繼任者","Ms. Ko was named as the successor to the retiring director.","柯小姐被指定為即將退休處長的繼任者。"]],
"familiarize oneself with": [["familiarize oneself with","熟悉……","Take some time to familiarize yourself with the new software.","花點時間熟悉一下新軟體。"]],
"room for advancement": [["room for advancement","升遷空間","There is plenty of room for advancement in this company.","這家公司有很大的升遷空間。"]],
"make a contribution to": [["make a contribution to","對……做出貢獻","Each volunteer made a contribution to the event's success.","每位志工都對活動的成功有所貢獻。"]],
"in recognition of": [["in recognition of","為了表揚……","The team received a bonus in recognition of its hard work.","團隊因努力工作而獲頒獎金以示表揚。"]],
"commend A for B": [["commend A for B","因 B 稱讚 A","The mayor commended the volunteers for their help.","市長稱讚志工們的協助。"]],
"be dedicated / committed / devoted to": [
  ["be dedicated to + V-ing","致力於","We are dedicated to providing excellent service.","我們致力於提供優質服務。"],
  ["be committed to + V-ing","承諾；致力於","The firm is committed to reducing waste.","公司承諾減少浪費。"],
  ["be devoted to + V-ing","全心投入","She is devoted to helping new employees.","她全心投入協助新進員工。"]],
"nominate A for": [["nominate A for","提名 A 角逐……","The staff nominated Mr. Kao for Employee of the Year.","員工們提名高先生角逐年度最佳員工。"]]
});

registerUnit("toeic-hr", {
  name:"多益 單元 3：人事招募",
  sub:"Part 5 解題技巧：主詞與動詞一致、要求建議動詞＋原形、數量詞與限定詞、副詞的位置與易混副詞；Part 2 聽力應答",
  words:T3_WORDS, grammar:T3_GRAMMAR, quiz:T3_QUIZ, classes:T3_CLASS, listen:T3_LISTEN,
  noSpell:true, quizName:"Part 5 練習", memoLabel:"🎯 多益重點", bossName:"多益魔王", grammarName:"解題技巧"
});
})();
