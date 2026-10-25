/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高二上學期 期末考（通用範圍）
   主題：科學研究與醫學、社會與法律、全球化與國際關係
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   字根拆解："xx-=字首意思|root=字根意思|-yy=字尾意思"
   插圖："@名稱" 為手繪場景；"表情符號|標籤" 為概念卡
   ========================================================= */
const S2_1_3_WORDS = [
/* ---------- 字根 cide / cis（切、殺） ---------- */
["precise","adj.","精確的；準確的",[
 ["Scientists need precise data, as is known to every researcher.","科學家需要精確的資料，這是每個研究人員都知道的。","as is known to ... 的 as 是準關係代名詞，代替前面整個主要子句的內容，在 as 子句中當主詞，所以後面直接接 is。"],
 ["What the doctor needs is a precise description of your pain.","醫生需要的是你對疼痛的精確描述。","What the doctor needs 是名詞子句當主詞；what = the thing that，名詞子句當主詞時動詞用單數 is。"],
 ["To be precise, the meeting starts at 9:05, not 9:00.","精確地說，會議是九點零五分開始，不是九點。","To be precise 是獨立不定詞片語，意思是「精確地說」，放句首修飾整句。"]],
 "pre-=事先|cise=切","事先切得整整齊齊 → 精確的","🎯|精確"],
["precision","n.","精確；精準",[
 ["Surgery requires great precision.","手術需要極高的精準度。","precision 是不可數名詞，great precision 表示「高度精準」，前面不加 a。"],
 ["The fact that the machine works with such precision amazes everyone.","這台機器運作得這麼精準，讓大家都很驚訝。","The fact that ... 是同位語子句，說明 fact 的內容；that 後面是完整句子，that 不當任何成分。主詞中心是 fact，所以動詞用 amazes。"],
 ["The robot can place each part with precision wherever it is needed.","這台機器人能把每個零件精準地放在任何需要的地方。","wherever = to any place where，引導地點副詞子句；with + 抽象名詞可以當副詞用，with precision = precisely。"]],
 "pre-=事先|cis=切|-ion=名詞字尾","事先切得精準 → 精確","📐|精準度"],
["concise","adj.","簡潔的；簡明的",[
 ["Your answer should be clear and concise.","你的答案應該清楚而簡潔。","clear and concise 兩個形容詞用 and 連接，當 be 動詞後的補語。"],
 ["Write as concise a summary as you can.","盡可能把摘要寫得簡潔。","as + 形容詞 + a/an + 名詞 + as 的語序要注意：形容詞 concise 要放在 a 前面，不能寫成 as a concise summary as。"],
 ["What makes the report useful is that it is concise.","這份報告有用的地方在於它很簡潔。","What 引導名詞子句當主詞；that it is concise 是名詞子句當補語，放在 is 後面。"]],
 "con-=完全|cise=切","把多餘的全部切掉 → 簡潔的","✂️|簡潔"],
["decisive","adj.","果斷的；決定性的",[
 ["A good leader must be decisive in a crisis.","好的領導者在危機中必須果斷。","must + 原形動詞 表示「必須」；in a crisis 表示「在危機中」。"],
 ["The new evidence played a decisive role in the trial.","新證據在審判中扮演了決定性的角色。","play a ... role in 表示「在……中扮演……的角色」。"],
 ["However difficult the situation is, she remains calm and decisive.","不管情況多困難，她都保持冷靜果斷。","However + 形容詞 + 主詞 + 動詞 = No matter how difficult the situation is；however 後面要緊接形容詞。"]],
 "de-=離開|cis=切|-ive=形容詞字尾","一刀切斷猶豫 → 果斷的","⚡|果斷"],
["pesticide","n.","農藥；殺蟲劑",[
 ["Farmers are using fewer pesticides than they used to.","農夫使用的農藥比以前少了。","fewer 修飾可數複數名詞 pesticides；used to + 原形動詞 表示「過去常常」，句尾省略了 use them。"],
 ["There is growing concern that pesticides may harm bees.","人們越來越擔心農藥可能傷害蜜蜂。","concern that ... 是同位語子句，說明擔心的內容；that 後面是完整句子。"],
 ["Never use more pesticide than is needed.","使用的農藥絕對不要超過需要的量。","than 是準關係代名詞，在 than 子句中當主詞，所以後面直接接 is needed。"]],
 "pesti=害蟲|cide=殺","殺害蟲的東西 → 農藥","🧴|農藥"],
["insecticide","n.","殺蟲劑",[
 ["The insecticide that he sprayed killed the mosquitoes.","他噴的殺蟲劑殺死了蚊子。","that he sprayed 是形容詞子句，that 是關係代名詞，在子句中當 sprayed 的受詞。"],
 ["Whether this insecticide is safe for pets is still unclear.","這種殺蟲劑對寵物是否安全還不清楚。","Whether 子句當主詞時不能換成 if；名詞子句當主詞，動詞用單數 is。"],
 ["Keep the insecticide wherever children cannot reach it.","把殺蟲劑放在小孩拿不到的地方。","wherever = in any place where，引導地點副詞子句。"]],
 "insecti=昆蟲|cide=殺","殺昆蟲的藥 → 殺蟲劑","🦟|殺蟲劑"],
["homicide","n.","殺人；兇殺案",[
 ["The police are treating the death as a homicide.","警方把這起死亡案件當作兇殺案處理。","treat A as B 表示「把 A 當作 B 看待」；the police 是複數，搭配 are。"],
 ["The news that a homicide had happened nearby shocked the town.","附近發生兇殺案的消息震驚了全鎮。","The news that ... 是同位語子句，說明消息的內容；had happened 是過去完成式，比 shocked 更早發生。"],
 ["Homicide is a more serious crime than theft.","殺人是比竊盜更嚴重的罪行。","more + 形容詞 + 名詞 + than 是比較級句型。"]],
 "homi=人|cide=殺","殺人 → 兇殺","🔍|兇殺案"],
/* ---------- 字根 fin（結束、界限） ---------- */
["finite","adj.","有限的",[
 ["The earth's resources are finite.","地球的資源是有限的。","finite 當補語放在 be 動詞後面；resources 是複數，動詞用 are。"],
 ["The fact that oil is finite means we need new energy sources.","石油有限的這個事實，代表我們需要新的能源。","The fact that ... 是同位語子句；整個主詞的中心是 fact（單數），所以動詞用 means。"],
 ["We have only a finite amount of time, so use it wisely.","我們的時間有限，所以要好好運用。","a finite amount of + 不可數名詞 表示「有限量的……」。"]],
 "fin=界限|-ite=形容詞字尾","有界限的 → 有限的","⏳|有限"],
["infinite","adj.","無限的；無窮的",[
 ["The universe seems infinite.","宇宙似乎是無限的。","seem + 形容詞 表示「似乎……」。"],
 ["Children have an infinite ability to imagine.","小孩擁有無限的想像力。","ability to V 表示「做……的能力」；infinite 開頭是母音，所以用 an。"],
 ["Whenever I look at the stars, I feel that the universe is infinite.","每當我看著星星，就覺得宇宙無窮無盡。","Whenever = every time，表示「每當」，引導時間副詞子句。"]],
 "in-=不|fin=界限|-ite=形容詞字尾","沒有界限的 → 無限的","♾️|無限"],
["define","v.","下定義；界定",[
 ["How do you define success?","你如何定義成功？","define 後面接名詞當受詞。"],
 ["It is hard to define what happiness is.","很難定義什麼是幸福。","what happiness is 是名詞子句，當 define 的受詞；名詞子句用直述句語序，不能寫成 what is happiness。"],
 ["A dictionary defines words, as everybody knows.","字典是用來解釋字義的，這大家都知道。","as everybody knows 的 as 是準關係代名詞，代替前面整句，當 knows 的受詞。"]],
 "de-=完全|fine=界限","把界限畫清楚 → 下定義","📖|定義"],
["definition","n.","定義",[
 ["Look up the definition of the word in the dictionary.","在字典裡查這個字的定義。","look up + 字 + in the dictionary 表示「在字典裡查」。"],
 ["The definition that the teacher gave us was easy to understand.","老師給我們的定義很好懂。","that the teacher gave us 是形容詞子句，that 當 gave 的直接受詞；後面缺東西，所以不是同位語子句。"],
 ["The question is whether this definition is correct.","問題在於這個定義是否正確。","whether 子句放在 be 動詞後面當補語，表示「是否」。"]],
 "de-=完全|fin=界限|-ition=名詞字尾","把意思畫出界限 → 定義","📘|定義"],
["definite","adj.","明確的；確定的",[
 ["We need a definite answer by Friday.","我們需要在星期五前得到明確的答覆。","by + 時間 表示「在……之前」。"],
 ["There is no definite proof that the plan will work.","沒有明確的證據證明這個計畫可行。","proof that ... 是同位語子句，說明證據的內容；that 後面是完整句子。"],
 ["Nothing is definite yet, so we can't make any promises.","什麼都還沒確定，所以我們不能做任何承諾。","Nothing 當主詞視為單數；yet 用在否定意味的句子表示「尚未」。"]],
 "de-=完全|fin=界限|-ite=形容詞字尾","界限清清楚楚 → 明確的","✅|確定"],
["confine","v.","限制；侷限",[
 ["Please confine your speech to three minutes.","請把你的演講限制在三分鐘以內。","confine A to B 表示「把 A 限制在 B 的範圍內」，to 是介系詞。"],
 ["The disease was confined to one small village.","這種疾病只侷限在一個小村莊。","be confined to 是被動語態，表示「被侷限在……」。"],
 ["Don't confine yourself to such books as you already know.","別把自己侷限在你已經熟悉的那類書。","such + 名詞 + as 中的 as 是準關係代名詞，在子句中當 know 的受詞。"]],
 "con-=一起|fine=界限","圍在界限裡 → 限制","🔲|侷限"],
["refine","v.","精煉；改進",[
 ["Sugar is refined in factories.","糖是在工廠裡精煉的。","is refined 是現在式被動語態。"],
 ["The scientists refined the hypothesis that they had first proposed.","科學家修正了他們最初提出的假說。","that they had first proposed 是形容詞子句（缺 proposed 的受詞）；had proposed 是過去完成式，表示更早的動作。"],
 ["However good your essay is, you can always refine it.","不管你的文章寫得多好，總是還能再改進。","However + 形容詞 + 主詞 + 動詞 = No matter how good your essay is。"]],
 "re-=再|fine=精細","再弄得更精細 → 精煉；改進","💎|精煉"],
["finance","n./v.","財務；金融／資助",[
 ["She studied finance at university.","她在大學主修財務金融。","finance 當不可數名詞，表示「財務、金融學」。"],
 ["The government will finance the new research center.","政府將資助新的研究中心。","finance 也可以當動詞，表示「提供資金」。"],
 ["What worries the company is how it will finance the project.","讓公司擔心的是要如何為這個計畫籌措資金。","What 子句當主詞；how it will finance ... 是名詞子句當補語，用直述句語序。"]],
 "fin=結束|-ance=名詞字尾","把債務結清 → 財務；資金","💰|財務"],
/* ---------- 字根 gen（出生、產生） ---------- */
["gene","n.","基因",[
 ["Eye color is largely determined by our genes.","眼睛的顏色主要由基因決定。","is determined by 是被動語態；gene 是可數名詞，複數 genes。"],
 ["The idea that genes control everything is not true.","基因控制一切的想法並不正確。","The idea that ... 是同位語子句，說明 idea 的內容；that 後面是完整句子。"],
 ["Scientists have found the gene that causes the disease.","科學家找到了導致這種疾病的基因。","that causes the disease 是形容詞子句，that 當 causes 的主詞，不是同位語。"]],
 "gene=產生（gen）","產生生命特徵的單位 → 基因","🧬|基因"],
["genetic","adj.","基因的；遺傳的",[
 ["Some diseases are genetic.","有些疾病是遺傳性的。","genetic 當補語，表示「遺傳的」。"],
 ["Genetic research has made great progress, as is often the case with science.","基因研究有了很大的進步，科學一向如此。","as is often the case 是固定說法「這是常有的事」，as 代替前面整句，在子句中當主詞。"],
 ["Whether genetic testing should be required is a hot topic.","基因檢測是否應該強制實施是個熱門話題。","Whether 子句當主詞，不能用 if；名詞子句當主詞，動詞用單數 is。"]],
 "gene=基因|-tic=形容詞字尾","基因的 → 遺傳的","🧪|遺傳"],
["generation","n.","世代；一代人",[
 ["The younger generation is good at using technology.","年輕一代很擅長使用科技。","the younger generation 是集合名詞，常搭配單數動詞 is；be good at + V-ing。"],
 ["The belief that each generation should live better is common.","每一代都應該過得更好的信念很普遍。","The belief that ... 是同位語子句，說明 belief 的內容。"],
 ["The story has been passed down from generation to generation.","這個故事一代一代流傳下來。","from generation to generation 是固定用法，名詞前不加 a 或 the；has been passed 是現在完成式被動。"]],
 "gener=出生|-ation=名詞字尾","同一時期出生的一群人 → 世代","👨‍👩‍👧|世代"],
["gender","n.","性別",[
 ["Everyone should be treated equally regardless of gender.","不論性別，每個人都應該被平等對待。","regardless of + 名詞 表示「不管……」。"],
 ["The idea that some jobs are only for one gender is out of date.","某些工作只適合某一性別的想法已經過時了。","The idea that ... 是同位語子句；out of date 表示「過時的」。"],
 ["Whatever your gender is, you can choose any career.","無論你的性別是什麼，你都可以選擇任何職業。","Whatever = No matter what，是複合關係代名詞，引導讓步子句。"]],
 "gend=出生；種類|-er=名詞字尾","出生時的類別 → 性別","🚻|性別"],
["oxygen","n.","氧；氧氣",[
 ["Plants produce oxygen during the day.","植物在白天製造氧氣。","oxygen 是不可數名詞，前面不加 a，也沒有複數。"],
 ["We need oxygen to live, as everyone knows.","大家都知道，我們需要氧氣才能活。","as everyone knows 中的 as 是準關係代名詞，代替前面整句，當 knows 的受詞。"],
 ["There is less oxygen on high mountains than at sea level.","高山上的氧氣比海平面少。","less + 不可數名詞 + than 表示「比……少」。"]],
 "oxy=酸|gen=產生","產生酸的元素（古人的想法）→ 氧","🫁|氧氣"],
["hydrogen","n.","氫",[
 ["Water is made up of hydrogen and oxygen.","水是由氫和氧組成的。","be made up of 表示「由……組成」。"],
 ["Hydrogen cars, which produce only water, may become popular.","只排放水的氫能車可能會流行起來。","which 引導非限定關係子句，補充說明 Hydrogen cars。"],
 ["The fact that hydrogen burns cleanly makes it a good fuel.","氫燃燒時很乾淨，這使它成為好燃料。","The fact that ... 是同位語子句；make + 受詞 + 名詞 表示「使……成為……」。"]],
 "hydro=水|gen=產生","產生水的元素 → 氫","💧|氫"],
["ingenious","adj.","巧妙的；有創意的",[
 ["What an ingenious idea!","多麼巧妙的點子啊！","What + a/an + 形容詞 + 名詞 的感嘆句；ingenious 開頭是母音，用 an。"],
 ["The inventor came up with an ingenious way to save water.","發明家想出了一個省水的巧妙方法。","come up with 表示「想出」；way to V 表示「做……的方法」。"],
 ["This is an ingenious design that anyone can use easily.","這是一個任何人都能輕鬆使用的巧妙設計。","that anyone can use easily 是形容詞子句，that 當 use 的受詞。"]],
 "in-=在內|geni=天生的才能|-ous=形容詞字尾","天生腦袋裡就有才能 → 巧妙的","💡|巧妙"],
/* ---------- 字根 nat（出生） ---------- */
["native","adj./n.","本土的；母語的／本地人",[
 ["Chinese is my native language.","中文是我的母語。","native language 表示「母語」。"],
 ["He speaks English as if he were a native speaker.","他說英文好像母語人士一樣。","as if + 過去式（be 動詞用 were）表示與事實相反：他其實不是母語人士。"],
 ["The Formosan black bear is native to Taiwan.","台灣黑熊是台灣的原生物種。","be native to + 地方 表示「原產於……」。"]],
 "nat=出生|-ive=形容詞字尾","出生在這裡的 → 本土的","🏡|本地"],
["nation","n.","國家；民族",[
 ["The whole nation celebrated the victory.","全國上下都在慶祝勝利。","the whole nation 指「全國人民」。"],
 ["The news that the nation had won its first gold medal spread quickly.","國家贏得第一面金牌的消息很快傳開了。","The news that ... 是同位語子句；had won 是過去完成式，比 spread 更早發生。"],
 ["No nation can solve climate change alone.","沒有一個國家能獨自解決氣候變遷。","No + 單數名詞 表示「沒有任何……」。"]],
 "nat=出生|-ion=名詞字尾","出生在同一塊土地的人 → 國家；民族","🏳️|國家"],
["nationality","n.","國籍",[
 ["What is your nationality?","你的國籍是什麼？","詢問國籍的問法；也可以說 Where are you from?"],
 ["People of every nationality work in this company.","這家公司有各個國籍的人在工作。","of every nationality 是介系詞片語，修飾 People。"],
 ["The form asks whether you have dual nationality.","表格上問你是否有雙重國籍。","whether 子句當 asks 的受詞，表示「是否」。"]],
 "nation=國家|-al=形容詞字尾|-ity=名詞字尾","屬於某個國家的身分 → 國籍","🛂|國籍"],
["nationwide","adj./adv.","全國性的；在全國",[
 ["The election was broadcast nationwide.","這場選舉在全國轉播。","nationwide 當副詞修飾 was broadcast。"],
 ["A nationwide survey shows that teens sleep too little.","一項全國性調查顯示青少年睡得太少。","nationwide 當形容詞；that teens sleep too little 是名詞子句，當 shows 的受詞。"],
 ["The program, as is known nationwide, helps poor students.","這個計畫幫助貧困學生，這是全國皆知的。","as is known nationwide 是插入語，as 代替整個主要子句的內容。"]],
 "nation=國家|wide=遍及","遍及全國 → 全國性的","🗺️|全國"],
["innate","adj.","天生的；與生俱來的",[
 ["Some people believe that musical talent is innate.","有些人認為音樂天分是天生的。","that 子句當 believe 的受詞。"],
 ["Babies have an innate ability to learn languages.","嬰兒天生就有學習語言的能力。","an innate ability to V 表示「天生做……的能力」。"],
 ["The theory that intelligence is innate has been challenged.","智力是天生的這個理論受到了質疑。","The theory that ... 是同位語子句；has been challenged 是現在完成式被動。"]],
 "in-=在內|nate=出生","出生時就在體內 → 天生的","👶|天生"],
["prenatal","adj.","產前的",[
 ["Prenatal care is important for both mother and baby.","產前照護對母親和寶寶都很重要。","both A and B 表示「A 和 B 都」。"],
 ["The doctor suggested that she go for a prenatal check-up.","醫生建議她去做產前檢查。","suggest that + 主詞 + (should) + 原形動詞，所以用 go 而不是 goes。"],
 ["Whenever she has a prenatal visit, her husband goes with her.","每次她去做產前檢查，她先生都陪她去。","Whenever = every time，表示「每當」。"]],
 "pre-=之前|nat=出生|-al=形容詞字尾","出生之前的 → 產前的","🤰|產前"],
/* ---------- 科學研究與醫學 ---------- */
["research","n./v.","研究",[
 ["More research is needed than we expected.","需要的研究比我們預期的還多。","research 通常是不可數名詞，不加 s，也不說 a research；more ... than 是比較級。"],
 ["What the research shows is that sleep helps memory.","這項研究顯示的是睡眠有助於記憶。","What 子句當主詞；that sleep helps memory 是名詞子句當補語。"],
 ["She does research on how bees communicate.","她研究蜜蜂如何溝通。","do research on 表示「研究……」；how bees communicate 是名詞子句，當介系詞 on 的受詞。"]],
 "re-=再|search=搜尋","一再地搜尋 → 研究","🔬|研究"],
["hypothesis","n.","假說；假設",[
 ["The scientist tested her hypothesis with an experiment.","那位科學家用實驗檢驗她的假說。","hypothesis 的複數是 hypotheses。"],
 ["The hypothesis that the virus came from bats needs more evidence.","病毒來自蝙蝠的假說需要更多證據。","同位語子句說明 hypothesis 的內容；that 後面是完整句子。"],
 ["The hypothesis that he proposed was proven wrong.","他提出的假說被證明是錯的。","that he proposed 是形容詞子句，缺 proposed 的受詞；和上一句的同位語子句比較看看！"]],
 "hypo-=在下面|thesis=放置；論點","放在下面當基礎的論點 → 假說","🤔|假說"],
["theory","n.","理論；學說",[
 ["Darwin's theory of evolution changed science.","達爾文的演化論改變了科學。","theory of + 名詞 表示「……的理論」。"],
 ["In theory, the plan should work.","理論上，這個計畫應該可行。","in theory 表示「理論上」，常和 in practice（實際上）對比。"],
 ["The theory that the earth is flat was once widely believed.","地球是平的這個說法曾經廣為人信。","同位語子句說明 theory 的內容；was believed 是被動語態。"]],
 "","","📚|理論"],
["vaccine","n.","疫苗",[
 ["The vaccine protects children from measles.","這種疫苗保護兒童不得麻疹。","protect A from B 表示「保護 A 免於 B」。"],
 ["The news that a vaccine had been developed gave people hope.","疫苗已經研發出來的消息帶給人們希望。","同位語子句說明 news 的內容；had been developed 是過去完成式被動。"],
 ["Whether the vaccine is safe for babies is being studied.","這種疫苗對嬰兒是否安全正在研究中。","Whether 子句當主詞；is being studied 是現在進行式被動。"]],
 "vacc=牛|-ine=名詞字尾","最早的疫苗來自牛痘 → 疫苗","@vaccine"],
["virus","n.","病毒",[
 ["The virus spreads through the air.","這種病毒透過空氣傳播。","主詞是單數 The virus，所以動詞加 s：spreads。"],
 ["Wash your hands whenever you come home, or you may catch the virus.","每次回家都要洗手，不然可能會感染病毒。","whenever = every time；祈使句 + or 表示「否則」。"],
 ["The virus that infected my computer deleted my files.","感染我電腦的病毒刪除了我的檔案。","that infected my computer 是形容詞子句，that 當主詞；virus 也可以指電腦病毒。"]],
 "","","🦠|病毒"],
["bacteria","n.","細菌（複數）",[
 ["Bacteria can be found almost everywhere.","細菌幾乎到處都找得到。","bacteria 是複數形，單數是 bacterium；can be found 是助動詞加被動語態。"],
 ["Some bacteria are helpful, such as those in yogurt.","有些細菌是有益的，例如優格裡的細菌。","bacteria 是複數，所以用 are；such as 表示舉例，those 代替前面的 bacteria。"],
 ["It is surprising that bacteria can live in such hot water.","細菌能在這麼熱的水裡生存，真令人驚訝。","It 是虛主詞，真正的主詞是 that 子句。"]],
 "","","🧫|細菌"],
["infection","n.","感染",[
 ["Wash the wound to prevent infection.","清洗傷口以防感染。","to prevent 是不定詞，表示目的。"],
 ["The doctor said that the infection was not serious.","醫生說感染並不嚴重。","that 子句當 said 的受詞，時態配合主要子句用過去式。"],
 ["The risk that the infection will spread is low.","感染擴散的風險很低。","The risk that ... 是同位語子句，說明 risk 的內容。"]],
 "in-=進入|fect=做；放|-ion=名詞字尾","病菌放進身體裡 → 感染","🤒|感染"],
["symptom","n.","症狀",[
 ["A fever is a common symptom of the flu.","發燒是流感常見的症狀。","symptom of + 疾病 表示「……的症狀」。"],
 ["Call a doctor whenever the symptoms get worse.","只要症狀變得更嚴重，就打電話給醫生。","whenever 引導時間副詞子句，用現在式表示未來。"],
 ["What worries the nurse is that his symptoms have not improved.","讓護理師擔心的是他的症狀一直沒有改善。","What 子句當主詞；that 子句當補語。"]],
 "sym-=一起|ptom=落下","跟著疾病一起落下的跡象 → 症狀","🤧|症狀"],
["diagnose","v.","診斷",[
 ["The doctor diagnosed her illness as the flu.","醫生診斷她的病是流感。","diagnose A as B 表示「把 A 診斷為 B」。"],
 ["He was diagnosed with diabetes last year.","他去年被診斷出有糖尿病。","be diagnosed with + 疾病 表示「被診斷出患有……」。"],
 ["It is hard to tell whether the disease can be diagnosed early.","很難判斷這種疾病是否能及早診斷出來。","whether 子句當 tell 的受詞；tell 在這裡是「分辨、判斷」。"]],
 "dia-=穿透|gnose=知道","看穿而知道病因 → 診斷","🩺|診斷"],
["transplant","n./v.","移植",[
 ["He needs a heart transplant.","他需要做心臟移植。","transplant 當名詞，前面可以接器官名稱：heart transplant、kidney transplant。"],
 ["The kidney that was transplanted into her body works well.","移植到她體內的腎臟運作良好。","that was transplanted ... 是形容詞子句，that 當子句的主詞；was transplanted 是被動語態。"],
 ["Whether the transplant will succeed depends on many things.","移植是否會成功取決於許多因素。","Whether 子句當主詞，不能換成 if；動詞用單數 depends。"]],
 "trans-=轉移|plant=種植","移到別處重新種下 → 移植","🏥|移植"],
["surgery","n.","手術；外科",[
 ["My grandfather had heart surgery last month.","我爺爺上個月動了心臟手術。","have surgery 表示「動手術」，surgery 常當不可數名詞，不加 a。"],
 ["The surgery, which lasted six hours, was a success.","這場持續六小時的手術很成功。","which 引導非限定關係子句補充說明 The surgery。"],
 ["Whether he needs surgery depends on the test results.","他是否需要動手術取決於檢查結果。","Whether 子句當主詞，動詞用單數 depends；depend on 表示「取決於」。"]],
 "","","@surgery"],
["immune","adj.","免疫的",[
 ["Once you have had chickenpox, you are usually immune to it.","一旦得過水痘，通常就會對它免疫。","be immune to 表示「對……免疫」；Once 表示「一旦」。"],
 ["Our immune system fights viruses and bacteria.","我們的免疫系統對抗病毒和細菌。","immune system 表示「免疫系統」。"],
 ["No one is immune to criticism, however famous he or she is.","不管多有名，沒有人能免於批評。","however + 形容詞 = no matter how；immune to 也可以比喻「不受……影響」。"]],
 "im-=不|mune=義務；負擔","免除負擔 → 免疫的","🛡️|免疫"],
["epidemic","n.","流行病；傳染病",[
 ["The flu epidemic closed many schools.","流感疫情讓許多學校停課。","epidemic 前面可以接疾病名稱，表示「……的疫情」。"],
 ["The fear that the epidemic would spread caused panic.","疫情會擴散的恐懼引起了恐慌。","The fear that ... 是同位語子句；would 是 will 的過去式，配合主要子句的過去時態。"],
 ["Wherever the epidemic spread, hospitals were full.","疫情蔓延到哪裡，哪裡的醫院就爆滿。","Wherever = to every place where，引導地點副詞子句；spread 三態同形，這裡是過去式。"]],
 "epi-=在……之中|dem=人民|-ic=字尾","在人民之中流行 → 傳染病","😷|疫情"],
["microscope","n.","顯微鏡",[
 ["We looked at the cells under a microscope.","我們在顯微鏡下觀察細胞。","under a microscope 表示「在顯微鏡下」。"],
 ["Bacteria are so small that you can't see them without a microscope.","細菌小到沒有顯微鏡就看不到。","so + 形容詞 + that 表示「如此……以至於」；without 表示「沒有」。"],
 ["This is the microscope that the scientist used in 1900.","這是那位科學家在 1900 年用過的顯微鏡。","that the scientist used 是形容詞子句，缺 used 的受詞。"]],
 "micro-=微小|scope=看","看微小東西的工具 → 顯微鏡","@microscope"],
["organ","n.","器官；管風琴",[
 ["The heart is one of the most important organs.","心臟是最重要的器官之一。","one of the + 最高級 + 複數名詞。"],
 ["He decided to donate his organs after death.","他決定死後捐贈器官。","decide to V 表示「決定做某事」；donate 表示「捐贈」。"],
 ["The idea that organs can be printed sounds like science fiction.","器官可以用印的這個想法聽起來像科幻小說。","同位語子句說明 idea；sound like + 名詞 表示「聽起來像……」。"]],
 "","","🫀|器官"],
["chronic","adj.","慢性的；長期的",[
 ["He suffers from chronic back pain.","他飽受慢性背痛之苦。","suffer from 表示「受……之苦」。"],
 ["Chronic stress can harm your health more than you think.","長期壓力對健康的傷害比你想的還大。","more than you think 是比較級，表示「比你想的更……」。"],
 ["The fact that the disease is chronic means it lasts a long time.","這種病是慢性的，代表它會持續很久。","同位語子句說明 fact；means 後面省略了連接詞 that。"]],
 "chron=時間|-ic=形容詞字尾","拖了很長時間的 → 慢性的","🐢|慢性"],
["cell","n.","細胞；牢房",[
 ["All living things are made of cells.","所有生物都由細胞組成。","be made of 表示「由……組成」。"],
 ["Red blood cells carry oxygen through the body.","紅血球把氧氣運送到全身。","red blood cell 是「紅血球」；carry A through B 表示「把 A 運送到 B 各處」。"],
 ["The prisoner spent ten years in a small cell.","那名囚犯在一間小牢房裡待了十年。","cell 也可以指監獄的牢房；spend + 時間 + in 地點。"]],
 "","","🔵|細胞"],
["cure","n./v.","治療方法／治癒",[
 ["There is no cure for the common cold.","普通感冒沒有特效藥。","cure for + 疾病 表示「……的治療方法」，介系詞用 for。"],
 ["The new drug cured him of the disease.","新藥治好了他的病。","cure 人 of 疾病 表示「治好某人的病」，介系詞用 of。"],
 ["The belief that laughter is the best cure is quite popular.","笑是最好的良藥這個信念相當普遍。","The belief that ... 是同位語子句，說明 belief 的內容。"]],
 "","","💊|治癒"],
["quarantine","n./v.","隔離檢疫／隔離",[
 ["Travelers from the area must stay in quarantine for a week.","從該地區來的旅客必須隔離一週。","stay in quarantine 表示「隔離中」，quarantine 當不可數名詞。"],
 ["The sick dog was quarantined so that it wouldn't infect others.","那隻生病的狗被隔離，以免傳染給其他狗。","was quarantined 是被動語態；so that 引導目的副詞子句。"],
 ["The rule that every visitor must be quarantined was strictly followed.","每位訪客都必須隔離的規定被嚴格遵守。","The rule that ... 是同位語子句，說明規定的內容；that 後面是完整句子。"]],
 "","","🏠|隔離"],
["ethical","adj.","合乎道德的；倫理的",[
 ["Is it ethical to test products on animals?","用動物來測試產品合乎道德嗎？","it 是虛主詞，代替後面的 to test products on animals。"],
 ["Scientists must follow ethical rules in their research.","科學家做研究必須遵守倫理規範。","ethical rules 表示「倫理規範」。"],
 ["The question is whether cloning humans is ethical.","問題在於複製人類是否合乎倫理。","whether 子句放在 be 動詞後面當補語；cloning humans 是動名詞當子句的主詞。"]],
 "ethic=道德|-al=形容詞字尾","合乎道德的 → 倫理的","🧭|倫理"],
["clone","v./n.","複製／複製品",[
 ["Dolly the sheep was the first mammal cloned from an adult cell.","桃莉羊是第一隻用成體細胞複製出來的哺乳動物。","cloned from ... 是過去分詞片語，修飾 mammal，表示被動。"],
 ["Some people worry that scientists will clone humans someday.","有些人擔心科學家有一天會複製人類。","that 子句當 worry 的受詞。"],
 ["The idea that we could clone ourselves scares many people.","我們可以複製自己的想法讓許多人害怕。","同位語子句說明 idea；主詞中心是 idea，所以動詞用 scares。"]],
 "","","🐑|複製"],
/* ---------- 社會與法律 ---------- */
["justice","n.","正義；司法",[
 ["The victims' families want justice.","受害者家屬要求公道。","justice 是不可數名詞；victims' 是複數名詞的所有格。"],
 ["Justice, as is often said, must be seen to be done.","常言道，正義不但要實現，還要讓人看見。","as is often said 是插入語，as 代替整個主要子句的內容。"],
 ["Whether justice has been done is for the court to decide.","正義是否得到伸張，要由法院來決定。","Whether 子句當主詞；be for 人 to V 表示「由某人來……」。"]],
 "just=公正的|-ice=名詞字尾","公正 → 正義","⚖️|正義"],
["court","n.","法院；球場",[
 ["The case will go to court next month.","這個案子下個月要上法院。","go to court 表示「打官司」，court 前不加 the。"],
 ["The court ruled that the company had broken the law.","法院裁定該公司違法。","rule that ... 表示「裁定」；that 子句當受詞，had broken 是過去完成式。"],
 ["We play basketball on the court whenever it doesn't rain.","只要沒下雨，我們就在球場上打籃球。","court 也指「球場」；whenever = every time。"]],
 "","","@court"],
["judge","n./v.","法官／判斷",[
 ["The judge sentenced him to five years in prison.","法官判他五年徒刑。","sentence 人 to + 刑期 表示「判處某人……」。"],
 ["Don't judge a book by its cover.","不要以貌取人。","諺語；judge A by B 表示「根據 B 評斷 A」。"],
 ["It is hard to judge whether he is telling the truth.","很難判斷他是否在說實話。","whether 子句當 judge 的受詞。"]],
 "","","👨‍⚖️|法官"],
["jury","n.","陪審團",[
 ["The jury found him guilty.","陪審團判定他有罪。","find + 人 + guilty 表示「判定某人有罪」。"],
 ["The jury, which has twelve members, will decide tomorrow.","由十二人組成的陪審團明天將做出決定。","which 引導非限定關係子句，補充說明 The jury。"],
 ["What the jury must decide is whether she is innocent.","陪審團必須決定的是她是否無罪。","What 子句當主詞，whether 子句當補語。"]],
 "jur=法律；發誓|-y=名詞字尾","發誓依法判決的一群人 → 陪審團","👥|陪審團"],
["verdict","n.","判決；裁定",[
 ["The jury reached a verdict after three days.","陪審團三天後做出了判決。","reach a verdict 表示「做出判決」。"],
 ["The verdict that the judge announced surprised everyone.","法官宣布的判決讓大家都很驚訝。","that the judge announced 是形容詞子句，缺 announced 的受詞。"],
 ["The verdict that he was innocent made his family cry with joy.","他無罪的判決讓家人喜極而泣。","這個 that 是同位語子句，說明判決的內容；that 後面是完整句子。和上一句比一比！"]],
 "ver=真實|dict=說","說出真相 → 判決","🔨|判決"],
["criminal","n./adj.","罪犯／犯罪的",[
 ["The police finally caught the criminal.","警方終於抓到了罪犯。","finally 表示「終於」，放在一般動詞前面。"],
 ["Stealing is a criminal act.","偷竊是犯罪行為。","criminal 當形容詞修飾 act；Stealing 是動名詞當主詞。"],
 ["Wherever the criminal hid, the police found him.","不論罪犯躲到哪裡，警方都找到了他。","Wherever = No matter where，表示讓步。"]],
 "crimin=罪|-al=字尾","犯罪的人 → 罪犯","🦹|罪犯"],
["suspect","n./v.","嫌疑犯／懷疑",[
 ["The suspect was taken to the police station.","嫌疑犯被帶到警察局。","名詞 suspect 重音在前；was taken 是過去式被動。"],
 ["I suspect that he is lying.","我懷疑他在說謊。","動詞 suspect 重音在後；suspect that ... 表示「懷疑（認為）是……」，和 doubt（懷疑不是）意思相反。"],
 ["The police suspect him of stealing the car.","警方懷疑他偷了那輛車。","suspect 人 of + V-ing 表示「懷疑某人做了某事」。"]],
 "sus-=在下面|pect=看（spect）","從下面偷偷往上看 → 懷疑","🕵️|嫌疑犯"],
["victim","n.","受害者",[
 ["The victims of the earthquake need help.","地震的災民需要幫助。","victim of + 事件 表示「……的受害者」。"],
 ["She was the victim of a cruel joke.","她是一個殘忍玩笑的受害者。","cruel 表示「殘忍的」。"],
 ["Such victims as need medical care will be sent to the hospital.","需要醫療照顧的受害者將被送到醫院。","such + 名詞 + as 中的 as 是準關係代名詞，在子句中當主詞，所以 as 後面直接接動詞 need。"]],
 "","","😢|受害者"],
["arrest","v./n.","逮捕",[
 ["The police arrested two men last night.","警方昨晚逮捕了兩名男子。","arrest 的過去式直接加 -ed。"],
 ["He was arrested for drunk driving.","他因酒駕被捕。","be arrested for + 罪名 表示「因……被逮捕」。"],
 ["The news that the mayor had been arrested shocked the city.","市長被捕的消息震驚全市。","同位語子句說明 news；had been arrested 是過去完成式被動。"]],
 "ar-=朝向|rest=停住","讓人停住不能走 → 逮捕","🚔|逮捕"],
["prison","n.","監獄",[
 ["He was sent to prison for robbery.","他因搶劫入獄。","go to prison / be sent to prison 中的 prison 不加 the，指「坐牢」這件事。"],
 ["The prison where he stayed has become a museum.","他待過的那座監獄已經變成博物館。","where 是關係副詞，等於 in which。"],
 ["Life in prison is harder than most people imagine.","監獄生活比大多數人想像的艱苦。","比較級 harder than；Life in prison 是主詞，單數。"]],
 "","","🔒|監獄"],
["citizen","n.","公民；市民",[
 ["Every citizen has the right to vote.","每個公民都有投票權。","the right to V 表示「做……的權利」；Every + 單數名詞，動詞用單數。"],
 ["As is known to all, good citizens obey the law.","大家都知道，好公民要守法。","As is known to all 放句首，as 代替後面整個主要子句。"],
 ["She became a citizen of Canada, where she has lived for ten years.","她成為加拿大公民，她已經在那裡住了十年。","where 引導非限定關係子句，補充說明 Canada。"]],
 "citi=城市|-zen=人","住在城市的人 → 市民；公民","🧑‍🤝‍🧑|公民"],
["democracy","n.","民主；民主國家",[
 ["Taiwan is a democracy.","台灣是一個民主國家。","democracy 當可數名詞時指「民主國家」。"],
 ["The belief that people should choose their leaders is the basis of democracy.","人民應該選擇自己領導者的信念是民主的基礎。","同位語子句說明 belief；主詞中心是 belief，動詞用 is。"],
 ["There is no democracy but values free speech.","沒有一個民主國家不重視言論自由。","but 是準關係代名詞，等於 that ... not；There is no ... but ... 表示「沒有……不……」。"]],
 "demo=人民|-cracy=統治","人民統治 → 民主","🗽|民主"],
["election","n.","選舉",[
 ["The presidential election is held every four years.","總統大選每四年舉行一次。","every four years 表示「每四年」；is held 是被動語態。"],
 ["Whoever wins the election will face many challenges.","無論誰贏得選舉，都將面臨許多挑戰。","Whoever = anyone who，引導名詞子句當主詞。"],
 ["It is not certain whether he will run in the next election.","他是否會參加下次選舉還不確定。","It 是虛主詞，真正的主詞是 whether 子句；run in an election 表示「參選」。"]],
 "e-=向外|lect=選|-ion=名詞字尾","把人選出來 → 選舉","📊|選舉"],
["protest","n./v.","抗議",[
 ["Thousands of people joined the protest.","數千人參加了抗議活動。","thousands of 表示「數以千計的」。"],
 ["The students protested against the new rule.","學生們抗議新規定。","protest against 表示「抗議……」。"],
 ["Whenever prices rise, some people protest in the streets.","每當物價上漲，就有人上街抗議。","Whenever 引導時間副詞子句，表示「每當」。"]],
 "pro-=公開|test=作證","公開出來作證反對 → 抗議","📢|抗議"],
["constitution","n.","憲法；體質",[
 ["The constitution protects freedom of speech.","憲法保障言論自由。","freedom of speech 表示「言論自由」。"],
 ["The idea that all people are equal is written in the constitution.","人人平等的理念寫在憲法裡。","同位語子句說明 idea；is written 是被動語態。"],
 ["Changing the constitution is harder than passing a normal law.","修憲比通過一般法律還困難。","動名詞片語 Changing the constitution 當主詞，視為單數。"]],
 "con-=一起|stitut=建立|-ion=名詞字尾","大家一起建立的根本規定 → 憲法","📜|憲法"],
["convict","v./n.","定罪；判決有罪／囚犯",[
 ["He was convicted of robbery and sent to prison.","他被判搶劫罪成立，送進監獄。","be convicted of + 罪名 表示「被判犯了……罪」，介系詞用 of。"],
 ["Whether the court will convict him is still unknown.","法院是否會將他定罪還不知道。","Whether 子句當主詞，不能用 if。"],
 ["The convict, who had escaped from prison, was caught again.","那名曾經越獄的囚犯又被抓到了。","convict 當名詞時重音在前，指「囚犯」；who 引導非限定關係子句。"]],
 "con-=完全|vict=征服","完全制伏犯人 → 定罪","⛓️|定罪"],
["innocent","adj.","無罪的；天真的",[
 ["The man said he was innocent.","那名男子說他是無辜的。","said 後面省略了連接詞 that。"],
 ["Everyone is innocent until proven guilty.","在被證明有罪之前，每個人都是無罪的。","until proven guilty = until he or she is proven guilty，省略了主詞和 be 動詞。"],
 ["The fact that she was innocent was finally proved.","她清白的事實終於被證明了。","同位語子句說明 fact；was proved 是過去式被動。"]],
 "in-=不|noc=傷害|-ent=形容詞字尾","沒有傷害別人 → 無罪的；天真的","😇|無辜"],
["vote","v./n.","投票／選票",[
 ["In many countries, people can vote when they turn eighteen.","在許多國家，人民滿十八歲就可以投票。","turn + 年齡 表示「滿……歲」。"],
 ["The class voted on where to go for the trip.","全班投票決定校外教學要去哪裡。","vote on + 名詞 表示「針對……投票」；where to go 是「疑問詞 + to V」的名詞片語。"],
 ["Whoever gets the most votes will be the class leader.","誰得到最多票，誰就是班長。","Whoever = anyone who，引導名詞子句當主詞。"]],
 "","","@vote"],
["minority","n.","少數；少數族群",[
 ["Only a minority of students walk to school.","只有少數學生走路上學。","a minority of + 複數名詞，動詞通常跟著名詞用複數。"],
 ["The rights of minorities should be respected.","少數族群的權利應該被尊重。","should be respected 是助動詞加被動語態。"],
 ["The opinion that the minority holds is also worth hearing.","少數人的意見也值得聽。","that the minority holds 是形容詞子句（缺 holds 的受詞）；be worth + V-ing 表示「值得……」。"]],
 "minor=較小的|-ity=名詞字尾","人數較少的一方 → 少數","🤏|少數"],
/* ---------- 全球化與國際關係 ---------- */
["globalization","n.","全球化",[
 ["Globalization has changed the way we shop.","全球化改變了我們購物的方式。","the way we shop 中，the way 後面不加 how。"],
 ["There is no doubt that globalization brings both chances and problems.","毫無疑問，全球化帶來機會也帶來問題。","There is no doubt that ... 中的 that 子句是 doubt 的同位語。"],
 ["What globalization means for small farmers is still debated.","全球化對小農的意義仍有爭議。","What 子句當主詞，動詞用單數 is。"]],
 "global=全球的|-iz=使……化|-ation=名詞字尾","使變成全球的 → 全球化","🌐|全球化"],
["diplomat","n.","外交官",[
 ["The diplomat speaks five languages.","那位外交官會說五種語言。","主詞是第三人稱單數，動詞加 s。"],
 ["Diplomats work wherever their country sends them.","外交官被國家派到哪裡，就在哪裡工作。","wherever = in any place where，引導地點副詞子句。"],
 ["The diplomat, who had served in Japan, explained the issue clearly.","那位曾駐日本的外交官把問題解釋得很清楚。","非限定關係子句；had served 是過去完成式，表示更早之前的經歷。"]],
 "diplom=對折的公文|-at=人","帶著官方公文出使的人 → 外交官","🤵|外交官"],
["diplomacy","n.","外交；交際手腕",[
 ["The problem was solved through diplomacy, not war.","這個問題是透過外交而不是戰爭解決的。","through + 名詞 表示「透過……」；A, not B 表示「是 A 不是 B」。"],
 ["She handled the argument with great diplomacy.","她很有手腕地處理了那場爭執。","diplomacy 也可以指處理人際關係的「圓融手腕」。"],
 ["The belief that diplomacy can prevent war is widely shared.","外交能防止戰爭的信念被廣泛認同。","同位語子句說明 belief；is shared 是被動語態。"]],
 "diplom=對折的公文|-acy=名詞字尾","用公文往來處理國事 → 外交","🕊️|外交"],
["sanction","n./v.","制裁；批准",[
 ["The UN placed sanctions on the country.","聯合國對該國實施制裁。","place / impose sanctions on + 國家 表示「對……實施制裁」，制裁常用複數 sanctions。"],
 ["The news that sanctions would be lifted pleased the traders.","制裁將被解除的消息讓貿易商很高興。","The news that ... 是同位語子句；lift sanctions 表示「解除制裁」。"],
 ["Whether the sanctions really work is often debated.","制裁是否真的有效常常引起爭論。","Whether 子句當主詞；sanction 當動詞時也有「批准」的意思。"]],
 "","","🚫|制裁"],
["alliance","n.","同盟；聯盟",[
 ["The two companies formed an alliance.","兩家公司結成聯盟。","form an alliance 表示「結盟」。"],
 ["Such alliances as last for decades are rare.","能維持數十年的那種聯盟很少見。","such ... as 中的 as 是準關係代名詞，在子句裡當主詞，後面直接接動詞 last。"],
 ["The alliance, which includes ten countries, meets every year.","這個包含十個國家的聯盟每年開會。","which 引導非限定關係子句；主詞 The alliance 是單數，動詞用 meets。"]],
 "al-=朝向|li=綁|-ance=名詞字尾","綁在一起 → 同盟","🔗|聯盟"],
["ambassador","n.","大使",[
 ["The ambassador met the president yesterday.","大使昨天會見了總統。","met 是 meet 的過去式。"],
 ["She was named ambassador to France.","她被任命為駐法國大使。","ambassador to + 國家 表示「駐……大使」；name 人 + 職位 表示「任命」，獨一無二的職位前常不加冠詞。"],
 ["The singer serves as a goodwill ambassador, as is known to many fans.","這位歌手擔任親善大使，這是許多歌迷都知道的。","第二個 as 是準關係代名詞，代替前面整句；第一個 as 是介系詞「擔任」。"]],
 "","","🎖️|大使"],
["embassy","n.","大使館",[
 ["I applied for a visa at the embassy.","我在大使館申請簽證。","apply for 表示「申請」。"],
 ["The embassy is the place where the ambassador works.","大使館是大使工作的地方。","where 是關係副詞，修飾 the place。"],
 ["Contact the embassy whenever you lose your passport abroad.","在國外只要遺失護照，就聯絡大使館。","whenever 表示「每當、無論何時」，子句用現在式。"]],
 "","","🏛️|大使館"],
["immigrant","n.","（移入的）移民",[
 ["Many immigrants came to America in the 1900s.","1900 年代有很多移民來到美國。","the 1900s 表示「1900 年代」。"],
 ["The idea that immigrants take away jobs is often wrong.","移民搶走工作的想法常常是錯的。","同位語子句說明 idea 的內容。"],
 ["My grandmother, who was an immigrant, worked very hard.","我奶奶以前是移民，她非常努力工作。","非限定關係子句補充說明 My grandmother。"]],
 "im-=進入|migr=遷移|-ant=人","遷移進來的人 → 移民","🧳|移民"],
["immigration","n.","移入；入境審查",[
 ["Immigration has made the country more diverse.","移民讓這個國家更多元。","make + 受詞 + 形容詞 表示「使……變得……」。"],
 ["You must go through immigration at the airport.","在機場你必須通過入境審查。","immigration 也可指機場的「入境審查處」。"],
 ["What the government should do about immigration is a hot issue.","政府應該如何處理移民問題是熱門議題。","What 子句當主詞，動詞用單數 is。"]],
 "im-=進入|migr=遷移|-ation=名詞字尾","遷移進來 → 移入","🛬|入境"],
["tariff","n.","關稅",[
 ["The country raised tariffs on imported cars.","這個國家提高了進口汽車的關稅。","tariff on + 商品 表示「對……課的關稅」。"],
 ["Higher tariffs mean that people pay more than is fair.","更高的關稅意味著人們付出超過合理的價錢。","than is fair 中的 than 是準關係代名詞，在子句中當主詞。"],
 ["Whether the tariff will help local factories is uncertain.","關稅是否能幫助本地工廠還不確定。","Whether 子句當主詞，不能換成 if。"]],
 "","","🧾|關稅"],
["multinational","adj./n.","跨國的／跨國公司",[
 ["She works for a multinational company.","她在一家跨國公司工作。","multinational 當形容詞修飾 company。"],
 ["Multinationals open offices wherever they can make money.","跨國公司在任何能賺錢的地方設辦公室。","multinational 當名詞表示「跨國公司」；wherever 引導地點副詞子句。"],
 ["What makes the team special is that it is multinational.","這個團隊特別的地方在於它是跨國的。","What 子句當主詞，that 子句當補語。"]],
 "multi-=多|nation=國家|-al=形容詞字尾","跨越多個國家的 → 跨國的","🏢|跨國"],
["cooperation","n.","合作",[
 ["Thank you for your cooperation.","謝謝你的合作。","Thank you for + 名詞 表示「謝謝你的……」。"],
 ["International cooperation is needed to fight climate change.","對抗氣候變遷需要國際合作。","to fight 是不定詞，表示目的。"],
 ["No project succeeds without cooperation, as our teacher always says.","正如老師常說的，沒有合作，任何計畫都不會成功。","as our teacher always says 的 as 代替前面整句，當 says 的受詞。"]],
 "co-=一起|oper=工作|-ation=名詞字尾","一起工作 → 合作","🤝|合作"],
["territory","n.","領土；地盤",[
 ["The island is part of the country's territory.","這座島是該國領土的一部分。","part of 前面通常不加 a。"],
 ["Dogs mark their territory.","狗會標記自己的地盤。","territory 也可以指動物的「地盤」。"],
 ["The two nations argued over whose territory the island was.","兩國爭論那座島是誰的領土。","whose territory the island was 是名詞子句，當介系詞 over 的受詞，用直述句語序。"]],
 "terr=土地|-itory=地方","屬於某人的土地 → 領土","📍|領土"],
["border","n.","邊界；國界",[
 ["We crossed the border into Canada.","我們越過邊界進入加拿大。","cross the border 表示「越過國界」。"],
 ["Viruses don't stop at borders.","病毒不會在國界前停下來。","複數 borders 泛指所有國界。"],
 ["Doctors Without Borders sends doctors wherever they are needed.","無國界醫生組織把醫生派到任何需要的地方。","Doctors Without Borders 是組織名稱，視為單數，所以用 sends；wherever = to any place where。"]],
 "","","🛃|邊界"],
["economy","n.","經濟",[
 ["Tourism is important to the local economy.","觀光業對當地經濟很重要。","be important to 表示「對……重要」。"],
 ["The economy is growing faster than was expected.","經濟成長的速度比預期的快。","than was expected 中的 than 是準關係代名詞，當子句主詞，後面直接接 was expected。"],
 ["The fact that the economy is weak worries young people.","經濟疲弱的事實讓年輕人擔心。","同位語子句說明 fact；主詞中心是 fact，動詞用 worries。"]],
 "eco=家|-nomy=管理","管理家務 → 經濟","📈|經濟"],
["trade","n./v.","貿易；交易",[
 ["Trade between the two countries has increased.","兩國之間的貿易增加了。","trade between A and B 表示「A 和 B 之間的貿易」。"],
 ["Taiwan trades with many countries.","台灣和許多國家進行貿易。","trade with 表示「和……貿易」。"],
 ["Free trade, as is often argued, helps both sides.","常有人主張，自由貿易對雙方都有好處。","as is often argued 是插入語，as 代替整句。"]],
 "","","🚢|貿易"],
["summit","n.","高峰會；山頂",[
 ["World leaders met at the climate summit.","世界各國領袖在氣候高峰會上會面。","at the summit 表示「在高峰會上」。"],
 ["We reached the summit of the mountain at sunrise.","我們在日出時登上了山頂。","summit 也指「山頂」；reach 後面直接接地點，不加 to。"],
 ["The question is whether the summit will lead to real action.","問題在於這次高峰會是否會帶來真正的行動。","whether 子句當補語；lead to 表示「導致、帶來」。"]],
 "","","🏔️|高峰會"]
];

/* 沒有字根可拆的字：記憶小撇步 */
Object.assign(MEMO, {
  theory:"theory 和 theater（劇場）同源，原意都是「觀看」：理論就是看世界的一種方式。in theory（理論上）↔ in practice（實際上）。",
  virus:"virus 拉丁文原意是「毒液」，唸 /ˈvaɪrəs/，複數 viruses。電腦病毒也叫 virus。",
  bacteria:"bacteria 本身就是複數（單數 bacterium 很少用），所以要搭配複數動詞 are：Bacteria are everywhere.",
  quarantine:"quarantine 來自義大利文 quaranta（四十）：從前外國船隻要在港外等四十天才能上岸，以免帶來疾病 → 隔離檢疫。",
  sanction:"sanction 和 saint（聖人）同源，原意是「神聖的法令」：違反法令就要受到懲罰 → 制裁。常用複數 sanctions。",
  surgery:"surgery 原意是「用手工作」：外科醫生用雙手開刀。外科醫生 surgeon 高一學過，動手術就是 surgery。",
  organ:"organ 和 organize（組織）同源：身體是由一個個器官「組織」起來的。organ 也可以指教堂裡的管風琴。",
  cell:"cell 原意是「小房間」：細胞是生命的小房間，監獄的小房間也叫 cell。",
  cure:"cure 和 care（照顧）只差一個字母：好好 care，病就會 cure。名詞 a cure for 病，動詞 cure 人 of 病。",
  clone:"clone 原意是希臘文的「嫩枝」：剪下枝條插活，就長出一模一樣的植物 → 複製。和 close 只差一個字母，別搞混！",
  court:"court 原意是「圍起來的場地」：國王的宮廷、審判的法庭、打球的球場，都是圍起來的地方。",
  judge:"judge 和 justice（正義）同源，都和「法律」有關：說出法律判斷的人 → 法官。字尾 -dge 唸 /dʒ/。",
  victim:"victim 原意是「祭品」：被拿去犧牲的就是受害者。和 victory（勝利）長得像，但一個是贏家、一個是受害者。",
  prison:"prison 的 pris 是「抓住」：被抓起來關的地方 → 監獄。囚犯是 prisoner，兩個一起記。",
  vote:"vote 和 vow（發誓）同源，原意是「許願」：把你的心願投進票箱 → 投票。",
  ambassador:"ambassador 和 embassy（大使館）是一家人：大使在大使館工作。拆成 am-bas-sa-dor 四個音節來背，重音在 bas。",
  embassy:"embassy 和 ambassador 一起記：大使（ambassador）在大使館（embassy）工作。拼字注意中間是雙 s：em-ba-ssy。",
  tariff:"tariff 拼字注意：一個 r、兩個 f。原本是阿拉伯文「價目表」：進口貨物要照價目表繳的稅 → 關稅。",
  border:"border 是「邊緣」：國家的邊緣就是國界。記片語 cross the border（越過國界）、Doctors Without Borders（無國界醫生）。",
  trade:"trade 原意是「走過的路」：商人沿著路線來回做生意 → 貿易。trade A for B 是「用 A 交換 B」。",
  summit:"summit 和 sum（總和、頂點）同源：最高的點 → 山頂；各國最高領袖開的會 → 高峰會。"
});

const S2_1_3_GRAMMAR = [
{ id:"g1", title:"同位語子句與形容詞子句的 that",
  intro:"the fact、the news、the idea、the belief 後面接 that 子句，可能是「同位語子句」（說明名詞的內容），也可能是「形容詞子句」（修飾名詞）。關鍵在 that 後面的句子完不完整。",
  table:[["比較","同位語子句","形容詞子句"],["that 後面","完整的句子","缺主詞或受詞"],["that 的角色","連接詞，不當任何成分","關係代名詞，當主詞或受詞"],["能否換成 which","不能","指物時可以"],["能否省略 that","一般不省略","當受詞時可以"],["例句","The news that he won is true.","The news that he told me is true."]],
  points:[
   "判斷法：看 that 後面的句子，主詞、動詞、受詞都有（完整）→ 同位語子句；缺東西 → 形容詞子句。",
   "常接同位語子句的名詞：fact、news、idea、belief、hope、fear、theory、possibility、evidence、rumor、doubt。",
   "同位語子句說明名詞「的內容」：the idea that genes control everything，想法的內容就是「基因控制一切」。",
   "同位語子句的 that 不能換成 which：The fact which he lied ...（✗）。",
   "There is no doubt that ... 的 that 也是同位語子句，學測很常見。",
   "同位語子句可以和名詞分開，移到動詞後面：The news came that our team had won.（閱讀測驗常見）",
   "名詞的內容是「是否」時，同位語用 whether：The question whether we should go is still open."],
  ex:[
   ["The news that the nation had won its first gold medal spread quickly.","國家贏得第一面金牌的消息很快傳開了。","had won its first gold medal 是完整句子，說明 news 的內容，是同位語子句。"],
   ["The hypothesis that he proposed was proven wrong.","他提出的假說被證明是錯的。","proposed 缺受詞，是形容詞子句，that 可以換成 which。"],
   ["The verdict that he was innocent made his family cry with joy.","他無罪的判決讓家人喜極而泣。","he was innocent 完整，說明判決的內容，是同位語子句。"],
   ["There is no doubt that globalization brings both chances and problems.","毫無疑問，全球化帶來機會也帶來問題。","There is no doubt that ... 的 that 子句是 doubt 的同位語。"],
   ["The opinion that the minority holds is also worth hearing.","少數人的意見也值得聽。","holds 缺受詞，是形容詞子句。"]]},
{ id:"g2", title:"準關係代名詞 as / than / but",
  intro:"as、than、but 本來是連接詞，但在某些句型中能像關係代名詞一樣，在子句裡當主詞或受詞，所以叫「準關係代名詞」。",
  table:[["準關係代名詞","句型","例句"],["as","such / the same + 名詞 + as ...","Such books as you like are on the shelf."],["as","代替整句：as is known、as is often the case","As is known to all, the earth is round."],["than","比較級 + (名詞) + than + 動詞","Don't use more water than is needed."],["but","否定 + but ...（= that ... not）","There is no rule but has exceptions."]],
  points:[
   "such + 名詞 + as：as 在子句中當主詞或受詞。Such victims as need help ...（as 當主詞）／such books as you like（as 當受詞）。",
   "the same + 名詞 + as 表示「同一類的」：This is the same watch as I lost.（和我丟的同款）",
   "as 可以代替整個主要子句，位置很自由：放句首 As is known to all, ...，也可以放句中或句尾。",
   "which 也能代替前面整句，但 which 不能放句首：As is often the case, ...（✓）／Which is often the case, ...（✗）。",
   "than 後面直接接動詞時，than 就是準關係代名詞（當主詞）：more pesticide than is needed、faster than was expected。",
   "but = that ... not，用在否定句後面：There is no one but has faults.（沒有人沒有缺點）。這種用法較正式，學測閱讀要能看懂。"],
  ex:[
   ["As is known to all, good citizens obey the law.","大家都知道，好公民要守法。","As 放句首，代替後面整句，在子句中當主詞。"],
   ["Such victims as need medical care will be sent to the hospital.","需要醫療照顧的受害者將被送到醫院。","such ... as，as 當 need 的主詞。"],
   ["Never use more pesticide than is needed.","使用的農藥絕對不要超過需要的量。","than 當 is needed 的主詞。"],
   ["The economy is growing faster than was expected.","經濟成長的速度比預期的快。","than 當 was expected 的主詞。"],
   ["There is no democracy but values free speech.","沒有一個民主國家不重視言論自由。","but = that doesn't，There is no ... but ...：沒有……不……。"]]},
{ id:"g3", title:"複合關係副詞 wherever / whenever / however",
  intro:"wherever、whenever、however 是「關係副詞 + ever」，引導副詞子句，表示「無論何處／何時／多麼」或「任何……的地方／每當」。",
  table:[["複合關係副詞","意思","等於"],["wherever","無論哪裡；任何……的地方","no matter where／(to) any place where"],["whenever","無論何時；每當","no matter when／every time"],["however","無論多麼；無論如何","no matter how"]],
  points:[
   "wherever = no matter where：Wherever you go, I will follow you.",
   "whenever 有兩個意思：「每當」（every time）和「無論何時」（no matter when）。",
   "however 後面要緊接形容詞或副詞，再接主詞和動詞：However hard you try, ...（不能寫 However you try hard）。",
   "這些子句表示未來時用現在式：Call me whenever you need help.（不寫 will need）",
   "句首 However 加逗號是連接副詞「然而」，和「無論多麼」不一樣：However, the plan failed.",
   "類似的還有複合關係代名詞 whoever、whatever：Whoever wins = anyone who wins；Whatever happens = No matter what happens。"],
  ex:[
   ["Wherever the epidemic spread, hospitals were full.","疫情蔓延到哪裡，哪裡的醫院就爆滿。","Wherever = to every place where。"],
   ["Whenever prices rise, some people protest in the streets.","每當物價上漲，就有人上街抗議。","Whenever = every time。"],
   ["However difficult the situation is, she remains calm and decisive.","不管情況多困難，她都保持冷靜果斷。","However + 形容詞 + 主詞 + 動詞。"],
   ["Call a doctor whenever the symptoms get worse.","只要症狀變得更嚴重，就打電話給醫生。","講未來的事，子句用現在式 get。"],
   ["Whoever wins the election will face many challenges.","無論誰贏得選舉，都將面臨許多挑戰。","Whoever = anyone who，名詞子句當主詞。"]]},
{ id:"g4", title:"名詞子句綜合（that / whether / what）",
  intro:"名詞子句可以放在主詞、受詞、補語、同位語的位置。最常考 that、whether、what 三選一：看後面的句子完不完整，以及意思是不是「是否」。",
  table:[["連接詞","後面的句子","意思","例句"],["that","完整","沒有字面意思，只負責連接","That he lied is clear."],["whether","完整","是否","Whether he lied is unclear."],["what","缺主詞或受詞","……的事物（= the thing that）","What he said is true."]],
  points:[
   "that、whether 後面接完整句子；what 後面缺主詞或受詞，因為 what 自己要當子句的主詞或受詞。",
   "名詞子句當主詞，動詞用單數：What he said is true. 也常改成虛主詞：It is clear that he lied.",
   "放在主詞位置和介系詞後面只能用 whether，不能用 if：Whether he comes is uncertain.／It depends on whether ...",
   "名詞子句要用直述句語序：I don't know what he wants.（不是 what does he want）",
   "當補語：The problem is that we have no money.／The question is whether we can finish on time.",
   "學測綜合測驗技巧：空格後面缺主詞或受詞 → what；後面完整又有「是否」的意思 → whether；後面完整、只是陳述事實 → that。"],
  ex:[
   ["What the research shows is that sleep helps memory.","這項研究顯示的是睡眠有助於記憶。","What 子句當主詞（shows 缺受詞），that 子句當補語。"],
   ["Whether genetic testing should be required is a hot topic.","基因檢測是否應該強制實施是個熱門話題。","Whether 子句當主詞，不能用 if。"],
   ["It is hard to define what happiness is.","很難定義什麼是幸福。","what 子句當受詞，用直述句語序。"],
   ["The question is whether the summit will lead to real action.","問題在於這次高峰會是否會帶來真正的行動。","whether 子句當補語。"],
   ["The two nations argued over whose territory the island was.","兩國爭論那座島是誰的領土。","名詞子句當介系詞 over 的受詞。"]]}
];

const S2_1_3_QUIZ = [
 ["The news ___ our team had won made everyone happy.",["which","what","that","whether"],2,"our team had won 是完整句子，說明 news 的內容，是同位語子句，要用 that；同位語子句不能用 which。","g1"],
 ["The news ___ he told me was not true.",["that","what","whether","where"],0,"he told me 後面缺直接受詞（告訴我什麼？），是形容詞子句，that 是關係代名詞。","g1"],
 ["下列哪一句的 that 引導同位語子句？",["The idea that he gave us was great.","The fact that she won surprised us.","The book that I bought is new.","The man that called you is here."],1,"she won 是完整句子，說明 fact 的內容，是同位語子句；其他三句 that 後面都缺主詞或受詞，是形容詞子句。","g1"],
 ["There is no doubt ___ exercise is good for our health.",["what","which","that","if"],2,"There is no doubt that ... 的 that 子句是 doubt 的同位語，後面是完整句子。","g1"],
 ["The belief ___ hard work leads to success is common.",["which","that","what","as"],1,"hard work leads to success 是完整句子，同位語子句用 that，不能用 which。","g1"],
 ["The theory ___ the scientist proposed was proven wrong.",["what","whether","that","when"],2,"proposed 缺受詞，是形容詞子句，用關係代名詞 that（或 which）。","g1"],
 ["I heard the rumor ___ the store would close next month.",["that","which","what","how"],0,"the store would close 是完整句子，說明 rumor 的內容，是同位語子句。","g1"],
 ["The possibility ___ it will rain tomorrow is small.",["what","which","whether","that"],3,"it will rain tomorrow 完整，說明 possibility 的內容，用同位語的 that。","g1"],
 ["The question ___ we should cancel the trip was discussed.",["that","whether","what","which"],1,"question 的內容是「要不要取消」，表示「是否」的同位語用 whether。","g1"],
 ["As ___ known to all, the earth goes around the sun.",["is","are","were","has"],0,"As 代替後面整句，在子句中當主詞，視為單數：As is known to all。","g2"],
 ["Don't spend more money ___ is necessary.",["as","than","that","which"],1,"前面有比較級 more，than 在這裡當準關係代名詞，是 is necessary 的主詞。","g2"],
 ["Such students ___ work hard will pass the test.",["that","who","as","what"],2,"前面有 such，後面要配準關係代名詞 as，as 當 work 的主詞。","g2"],
 ["This is the same watch ___ I lost last week.",["what","as","than","but"],1,"the same + 名詞 + as 表示「同一類的」，as 當 lost 的受詞。","g2"],
 ["There is no rule ___ has exceptions.",["but","as","than","what"],0,"but = that ... not：沒有一條規則沒有例外（= 每條規則都有例外）。","g2"],
 ["___ is often the case, he was late again.",["Which","What","As","That"],2,"As is often the case 是固定說法；which 雖然能代替整句，但不能放句首。","g2"],
 ["He is a doctor, ___ is clear from his white coat.",["what","as","but","than"],1,"as 代替前面整句「他是醫生」，在子句中當主詞；what 不能接在逗號後面代替前句。","g2"],
 ["The scientist used more chemicals ___ were needed.",["as","than","which","that"],1,"比較級 more 後面配 than，than 當 were needed 的主詞。","g2"],
 ["Such people ___ you meet at the party are friendly.",["as","than","but","what"],0,"such + 名詞 + as，as 當 meet 的受詞。","g2"],
 ["___ you go, I will follow you.",["However","Whenever","Wherever","Whatever"],2,"講的是「去哪裡」，用 Wherever（= No matter where）。","g3"],
 ["___ hard he tried, he couldn't open the box.",["Whatever","However","Whenever","Wherever"],1,"後面緊接形容詞 hard，用 However（= No matter how）。","g3"],
 ["___ I see this photo, I think of my grandma.",["Whenever","However","Wherever","Whatever"],0,"每當看到這張照片，用 Whenever（= every time）。","g3"],
 ["However ___, she always finishes her homework.",["she is tired","tired she is","is she tired","tired is she"],1,"however 後面要緊接形容詞，再接主詞和動詞：However tired she is。","g3"],
 ["Call me whenever you ___ help.",["will need","needed","need","would need"],2,"whenever 引導的副詞子句用現在式表示未來，不用 will。","g3"],
 ["Wherever you go = ___ you go",["No matter what","No matter where","No matter how","No matter when"],1,"wherever = no matter where。","g3"],
 ["The plan seemed perfect. ___, it failed.",["However","Whenever","Wherever","However hard"],0,"句首 However 加逗號是連接副詞「然而」，表示前後語意相反。","g3"],
 ["You can sit ___ you like.",["however","whatever","whoever","wherever"],3,"「坐在哪裡都可以」講地點，用 wherever（= in any place where）。","g3"],
 ["___ wins the election will face many challenges.",["Whenever","Whoever","Wherever","However"],1,"子句缺主詞，又整個當主要子句的主詞，用 Whoever（= anyone who）。","g3"],
 ["___ he will come to the party is still unknown.",["That","What","Whether","If"],2,"有「是否」的意思，又放在主詞位置，只能用 Whether，不能用 If。","g4"],
 ["___ the doctor said made me feel better.",["That","What","Whether","Which"],1,"said 後面缺受詞，用 What（= The thing that）。","g4"],
 ["___ smoking is harmful is a well-known fact.",["What","Whether","That","If"],2,"smoking is harmful 是完整句子，又是陳述事實，用 That 引導名詞子句當主詞。","g4"],
 ["I don't know ___.",["what does he want","what he wants","what wants he","does he want what"],1,"名詞子句要用直述句語序：what he wants。","g4"],
 ["The problem is ___ we don't have enough time.",["what","that","which","whether"],1,"we don't have enough time 完整，是在陳述問題的內容，用 that 引導補語。","g4"],
 ["It depends on ___ the weather is good.",["if","that","whether","what"],2,"介系詞 on 後面表示「是否」，只能用 whether，不能用 if。","g4"],
 ["Scientists still don't know ___ causes the disease.",["that","whether","what","if"],2,"causes 前面缺主詞，用 what；that、whether、if 後面都要接完整句子。","g4"],
 ["He asked me ___ I had seen his keys.",["what","that","which","whether"],3,"I had seen his keys 完整，ask 的內容是「是否看到」，用 whether（也可以用 if）。","g4"],
 ["It is clear ___ he didn't do his homework.",["that","what","whether","which"],0,"It 是虛主詞，真正的主詞是 that 子句；he didn't do his homework 完整，陳述事實用 that。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S2_1_3_CLASS = {
g1:[
 {say:"高二同學好！期末考第一課：同位語子句。先看黑板這兩句，長得超像：{The news that he won is true.} 和 {The news that he told me is true.}", board:[["The news that he won is true.",["that"]],["The news that he told me is true.",["that"]]]},
 {say:"第一句：he won 是完整的句子，說明「消息的內容」就是他贏了，這叫同位語子句。第二句：he told me 少了東西，他告訴我「什麼」？缺受詞，這個 that 是關係代名詞，叫形容詞子句。", board:[["The news that he won ...（完整）",["he won"]],["The news that he told me ___ ...（缺受詞）",["told me"]]]},
 {say:"口訣記起來！", chant:"後面完整是同位，後面缺洞是形容！"},
 {ask:{say:"考考你！", q:"The news ___ our team had won made us happy.", opts:["that","which"], ans:0,
   ok:"對！our team had won 是完整句子，說明消息的內容，是同位語子句，只能用 that。", bad:{1:"同位語子句不能用 which！後面完整，要用 that。"},
   again:{q:"The book ___ I bought yesterday is great.", opts:["that","what"], ans:0, exp:"bought 缺受詞，是形容詞子句，that 是關係代名詞；what 前面不能有先行詞。"}}},
 {say:"哪些名詞常帶同位語子句？記這一串：fact、news、idea、belief、hope、fear、theory、possibility、evidence。它們都有「內容」可以說明。", board:[["the fact / news / idea / belief that ...",["fact","news","idea","belief"]],["the theory / hope / fear / possibility that ...",["theory","hope","fear","possibility"]]]},
 {say:"第二個重點：同位語的 that 不能換成 which，一般也不省略。形容詞子句的 that 指物時可以換成 which，當受詞時還可以省略。", board:[["The fact that he lied surprised us.",["that"]],["The fact which he lied surprised us.",[],true]]},
 {say:"同位語的 that 只負責連接，口訣！", chant:"同位 that 不換 which，只當膠水不當角色！"},
 {ask:{q:"哪一句的 that 是同位語子句？", opts:["The idea that she gave us was good.","The idea that we should recycle is good."], ans:1,
   ok:"讚！we should recycle 是完整句子，說明 idea 的內容。", bad:{0:"she gave us 少了東西（給我們什麼？），這是形容詞子句。"},
   again:{q:"There is no doubt ___ he is honest.", opts:["that","which","what"], ans:0, exp:"There is no doubt that ... 的 that 是同位語，後面完整。"}}},
 {say:"學測閱讀常出現「分開的同位語」：{The news came that our team had won.} 主詞太長頭重腳輕，同位語子句被移到動詞後面，但它說明的還是 news。", board:[["The news came that our team had won.",["The news","that"]]]},
 {say:"再加碼：如果名詞的內容是「是否」，同位語就要用 whether：{The question whether we should go is still open.}", board:[["The question whether we should go is still open.",["whether"]]]},
 {ask:{say:"最後一題！", q:"The question ___ we should cancel the trip was discussed.", opts:["that","whether","which"], ans:1,
   ok:"完美！question 的內容是「要不要取消」，用 whether。", bad:{0:"question 的內容是「要不要取消」，表示「是否」要用 whether。",2:"which 不能引導同位語子句喔。"},
   again:{q:"The theory ___ the scientist proposed was wrong.", opts:["that","whether"], ans:0, exp:"proposed 缺受詞，是形容詞子句，用 that。"}}},
 {say:"同位語子句過關！複習口訣：後面完整是同位，後面缺洞是形容；同位 that 不換 which；內容是「是否」就用 whether！", end:true}
],
g2:[
 {say:"今天認識三個「假扮成關係代名詞」的字：as、than、but，它們叫準關係代名詞，會在子句裡當主詞或受詞。先看：{As is known to all, the earth is round.}", board:[["As is known to all, the earth is round.",["As"]]]},
 {say:"這個 as 代替後面整句「地球是圓的」，在 as 子句中當主詞，所以後面直接接 is。常見的還有 as is often the case（這是常有的事）、as we all know（我們都知道）。", board:[["As is known to all, ...",["As","is"]],["..., as is often the case.",["as"]],["..., as we all know.",["as"]]]},
 {say:"口訣來囉！", chant:"as 代全句，前後都能站！"},
 {say:"注意！which 也能代替前面整句，但 which 只能放後面，不能放句首喔。", board:[["As is known to all, the earth is round.",["As"]],["Which is known to all, the earth is round.",[],true]]},
 {ask:{q:"___ is often the case, he was late again.", opts:["Which","As","What"], ans:1,
   ok:"對！As is often the case 是固定說法，可以放句首。", bad:{0:"which 不能放在句首代替後面的句子，要用 As。",2:"What 不能這樣用，固定說法是 As is often the case。"},
   again:{q:"___ is known to all, smoking is harmful.", opts:["As","That"], ans:0, exp:"As is known to all 是固定說法，as 代替後面整句。"}}},
 {say:"第二種 as：搭配 such 或 the same。{Such books as you like are on the shelf.} as 當 like 的受詞。{This is the same watch as I lost.} 這是和我丟的同款錶。", board:[["Such books as you like are on the shelf.",["Such","as"]],["This is the same watch as I lost.",["the same","as"]]]},
 {say:"配對口訣！", chant:"such 配 as，same 也配 as！"},
 {ask:{q:"Such students ___ work hard will succeed.", opts:["that","as","what"], ans:1,
   ok:"對！前面有 such，後面用 as，as 在子句中當主詞。", bad:{0:"前面有 such，要配 as 才對。",2:"what 前面不能有先行詞喔。"},
   again:{q:"This is the same bag ___ I lost.", opts:["as","than"], ans:0, exp:"the same ... as 表示「同一類的」。"}}},
 {say:"再來是 than：比較級後面，than 直接接動詞時，它就是準關係代名詞。{Don't use more water than is needed.} than 當主詞，後面接 is needed。", board:[["Don't use more water than is needed.",["more","than"]],["The economy grew faster than was expected.",["faster","than"]]]},
 {ask:{q:"Don't spend more money ___ is necessary.", opts:["as","than","which"], ans:1,
   ok:"讚！前面有比較級 more，用 than。", bad:{0:"前面有比較級 more，要用 than，不是 as。",2:"前面有比較級 more，要配 than。"},
   again:{q:"The scientist used more chemicals ___ were needed.", opts:["than","as"], ans:0, exp:"比較級 more 配 than，than 當 were needed 的主詞。"}}},
 {say:"最後一個 but，等於 that ... not，用在否定句後面：{There is no rule but has exceptions.} 沒有一條規則沒有例外，也就是每條規則都有例外。", board:[["There is no rule but has exceptions.",["no","but"]],["= There is no rule that doesn't have exceptions.",["that doesn't"]]]},
 {ask:{say:"最後一題！", q:"There is no one ___ has faults.", opts:["but","as","than"], ans:0,
   ok:"完美！but = who doesn't，沒有人沒有缺點。", bad:{1:"as 前面要有 such、the same，或用來代替整句；這裡要用 but 表示「沒有……不……」。",2:"前面沒有比較級，不能用 than。"},
   again:{q:"Never eat more food ___ is good for you.", opts:["than","but"], ans:0, exp:"比較級 more 配 than。"}}},
 {say:"準關係代名詞過關！口訣：as 代全句，前後都能站；such 配 as，same 也配 as；比較級配 than；but 等於 that ... not！", end:true}
],
g3:[
 {say:"今天學 wherever、whenever、however。它們是關係副詞加上 ever，意思是「無論」。先看：{Wherever you go, I will follow you.}", board:[["Wherever you go, I will follow you.",["Wherever"]]]},
 {say:"換句話說：wherever 等於 no matter where，whenever 等於 no matter when，however 等於 no matter how。", board:[["wherever = no matter where",["wherever"]],["whenever = no matter when",["whenever"]],["however = no matter how",["however"]]]},
 {say:"口訣！", chant:"ever 加上去，無論怎樣都可以！"},
 {ask:{q:"___ you go, I will follow you.", opts:["Whenever","Wherever"], ans:1,
   ok:"對！講的是「去哪裡」，地點用 Wherever。", bad:{0:"後面講的是「去哪裡」，地點要用 Wherever。"},
   again:{q:"___ I see this photo, I think of my grandma.", opts:["Whenever","Wherever"], ans:0, exp:"每當看到照片，講的是時間，用 Whenever。"}}},
 {say:"whenever 有兩個意思：「每當」和「無論何時」。{Whenever I feel sad, I listen to music.} 每當我難過……；{Come whenever you like.} 你想什麼時候來都行。", board:[["Whenever I feel sad, I listen to music.",["Whenever"]],["Come whenever you like.",["whenever"]]]},
 {say:"however 最容易錯！however 後面要緊緊黏著形容詞或副詞：{However hard you try, ...} 不能寫成 However you try hard。", board:[["However hard you try, ...",["However hard"]],["However you try hard, ...",[],true]]},
 {say:"however 的口訣！", chant:"however 黏形容，主詞動詞排後頭！"},
 {ask:{q:"However ___, she finishes her homework.", opts:["she is tired","tired she is"], ans:1,
   ok:"讚！However 後面先接形容詞 tired，再接 she is。", bad:{0:"however 後面要先接形容詞 tired，再接主詞和動詞。"},
   again:{q:"___ hard he tried, he failed.", opts:["However","Whatever"], ans:0, exp:"後面接形容詞 hard，用 However。"}}},
 {say:"兩個陷阱：第一，這些子句講未來時用現在式：{Call me whenever you need help.} 不寫 will need。第二，句首 However 加逗號，是「然而」，跟「無論」不一樣！", board:[["Call me whenever you need help.",["need"]],["However, the plan failed.（然而）",["However,"]]]},
 {ask:{q:"Call me whenever you ___ help.", opts:["will need","need","needed"], ans:1,
   ok:"對！時間副詞子句用現在式代替未來。", bad:{0:"時間副詞子句用現在式代替未來，不用 will。",2:"這是講未來的事，用現在式 need。"},
   again:{q:"The plan seemed perfect. ___, it failed.", opts:["However","Whenever"], ans:0, exp:"However 加逗號是「然而」。"}}},
 {say:"加碼：還有 whoever、whatever，它們是複合關係代名詞。{Whoever wins the election will face challenges.} whoever 等於 anyone who。", board:[["Whoever wins the election will face challenges.",["Whoever"]],["Whatever happens, stay calm.",["Whatever"]]]},
 {ask:{say:"最後一題！", q:"You can sit ___ you like.", opts:["however","wherever","whoever"], ans:1,
   ok:"完美！「想坐哪裡都可以」講地點，用 wherever。", bad:{0:"「坐哪裡」是地點，用 wherever。",2:"whoever 是「無論誰」，這裡講的是地點。"},
   again:{q:"___ wins the game will get a prize.", opts:["Whoever","Wherever"], ans:0, exp:"Whoever = anyone who，當主詞。"}}},
 {say:"複合關係副詞過關！口訣：ever 加上去，無論怎樣都可以；however 黏形容，主詞動詞排後頭；講未來用現在式！", end:true}
],
g4:[
 {say:"期末最後一堂文法課：名詞子句總整理！名詞子句可以站在四個位置：主詞、受詞、補語、同位語。", board:[["That he lied is clear.（主詞）",["That"]],["I know that he lied.（受詞）",["that"]],["The truth is that he lied.（補語）",["that"]],["The fact that he lied is clear.（同位語）",["that"]]]},
 {say:"學測綜合測驗最愛考 that、whether、what 三選一。看兩件事：後面的句子完不完整？意思有沒有「是否」？", board:[["that + 完整句",["that"]],["whether + 完整句（是否）",["whether"]],["what + 缺主詞或受詞",["what"]]]},
 {say:"三選一口訣！", chant:"缺洞選 what，完整選 that，是否就選 whether！"},
 {ask:{q:"___ the doctor said made me feel better.", opts:["That","What","Whether"], ans:1,
   ok:"對！said 缺受詞，What = The thing that。", bad:{0:"said 後面缺受詞，that 後面要接完整句子。",2:"said 缺受詞，而且意思不是「是否」。"},
   again:{q:"___ smoking is harmful is a fact.", opts:["What","That"], ans:1, exp:"smoking is harmful 完整，用 That。"}}},
 {say:"whether 和 if 都是「是否」，但放在主詞位置和介系詞後面，只能用 whether！{Whether he will come is unknown.} {It depends on whether the weather is good.}", board:[["Whether he will come is unknown.",["Whether"]],["If he will come is unknown.",[],true],["It depends on whether the weather is good.",["whether"]]]},
 {ask:{q:"___ he will come is still unknown.", opts:["If","Whether","What"], ans:1,
   ok:"讚！放在句首當主詞，只能用 Whether。", bad:{0:"放在句首當主詞時，不能用 if。",2:"he will come 已經完整，不能用 what。"},
   again:{q:"It depends on ___ it rains.", opts:["if","whether"], ans:1, exp:"介系詞後面用 whether，不用 if。"}}},
 {say:"名詞子句當主詞太長的時候，常用虛主詞 It 放前面：{That he lied is clear.} 等於 {It is clear that he lied.}", board:[["That he lied is clear.",["That"]],["= It is clear that he lied.",["It","that"]]]},
 {say:"還有，名詞子句一定要用直述句語序：{I don't know what he wants.} 不能寫成 what does he want。", board:[["I don't know what he wants.",["what he wants"]],["I don't know what does he want.",[],true]]},
 {say:"語序口訣！", chant:"疑問詞進子句，主詞動詞照順序！"},
 {ask:{q:"I don't know ___.", opts:["what does he want","what he wants"], ans:1,
   ok:"對！名詞子句用直述句語序。", bad:{0:"名詞子句要用直述句語序：what he wants。"},
   again:{q:"Can you tell me ___?", opts:["where the station is","where is the station"], ans:0, exp:"直述句語序：where the station is。"}}},
 {ask:{say:"學測題型，最後一題！", q:"Scientists still don't know ___ causes the disease.", opts:["that","what","whether"], ans:1,
   ok:"完美！causes 前面缺主詞，用 what。", bad:{0:"causes 缺主詞，that 後面要接完整句子。",2:"causes 缺主詞，whether 後面也要接完整句子。"},
   again:{q:"The question is ___ we can finish on time.", opts:["whether","what"], ans:0, exp:"we can finish on time 完整，又有「是否」的意思，用 whether。"}}},
 {say:"名詞子句過關！口訣：缺洞選 what，完整選 that，是否就選 whether；主詞和介系詞後面不用 if；疑問詞進子句，主詞動詞照順序。高二上學期期末考的文法全部上完，祝你考試順利！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S2_1_3_ROOTS = [
  {id:"r1", title:"字根 cide / cis：切、殺"},
  {id:"r2", title:"字根 fin：結束、界限"},
  {id:"r3", title:"字根 gen：出生、產生"},
  {id:"r4", title:"字根 nat：出生"}
];
const S2_1_3_ROOT_CLASS = {
r1:[
 {say:"高二同學好！今天學一個有點「兇」的字根：<<cide>> 和 <<cis>>，意思是「切」或「殺」。", board:[["cide / cis = 切、殺",["cide","cis"],false,true]]},
 {say:"先看「殺」：{pesticide} 殺害蟲的東西，就是農藥；{insecticide} 殺昆蟲的，就是殺蟲劑；{homicide} 殺人，就是兇殺案。", board:[["pesti + cide = pesticide",["cide"],false,true],["insecti + cide = insecticide",["cide"],false,true],["homi + cide = homicide",["cide"],false,true]]},
 {say:"口訣！", chant:"cide cide 殺殺殺，害蟲壞人都怕它！"},
 {ask:{q:"insecti（昆蟲）＋ cide ＝ insecticide，意思是？", opts:["昆蟲學家","殺蟲劑","昆蟲館"], ans:1,
   ok:"對！cide 是「殺」，殺昆蟲的東西就是殺蟲劑。", bad:{0:"cide 是「殺」，不是「人」喔。",2:"cide 是「殺」，殺昆蟲的東西是殺蟲劑。"},
   again:{q:"字根 cide 的意思是？", opts:["切；殺","看","說"], ans:0, exp:"cide 是「切、殺」，像 pesticide、homicide。"}}},
 {say:"再看「切」：{precise} 事先切得整整齊齊，就是精確的；名詞是 {precision} 精確。{concise} 把多餘的全部切掉，就是簡潔的。", board:[["pre + cise = precise",["cise"],false,true],["pre + cis + ion = precision",["cis"],false,true],["con + cise = concise",["cise"],false,true]]},
 {say:"你早就會的 {decide} 也是這一家！de 是「離開」，把其他選項切掉，就是決定。形容詞 {decisive} 一刀切斷猶豫，就是果斷的。", board:[["de + cide = decide",["cide"],false,true],["de + cis + ive = decisive",["cis"],false,true]]},
 {say:"第二個口訣！", chant:"cis 一刀切：精確、簡潔、又果斷！"},
 {ask:{q:"con（完全）＋ cise（切）＝ concise，意思是？", opts:["簡潔的","複雜的","精確的"], ans:0,
   ok:"讚！把多餘的全部切掉，就變得簡潔。", bad:{1:"把多餘的切掉，會變簡單，不是複雜喔。",2:"精確的是 precise；concise 是把多餘的切掉 → 簡潔的。"},
   again:{q:"pre（事先）＋ cise ＝ precise，意思是？", opts:["精確的","預測"], ans:0, exp:"事先切得剛剛好 → 精確的；預測是 predict。"}}},
 {say:"生活中還有一個 cis：{scissors} 剪刀！剪刀就是用來「切」的。", board:[["scissors（剪刀）",["sciss"],false,true]]},
 {ask:{say:"最後一題！", q:"A good leader must be ＿＿ in a crisis.（果斷的）", opts:["decide","decision","decisive"], ans:2,
   ok:"完美！be 動詞後面接形容詞 decisive。", bad:{0:"be 動詞後面要接形容詞，decide 是動詞。",1:"decision 是名詞，這裡要形容詞 decisive。"},
   again:{q:"Surgery requires great ＿＿.（精準）", opts:["precise","precision"], ans:1, exp:"great 後面要接名詞 precision。"}}},
 {say:"cide 和 cis 過關！口訣：cide cide 殺殺殺，cis 一刀切：精確、簡潔、又果斷！", end:true}
],
r2:[
 {say:"今天的字根是 <<fin>>，意思是「結束、界限」。你一定認識 {finish} 完成，還有 {final} 最後的，比賽最後一場叫 final！", board:[["fin = 結束、界限",["fin"],false,true],["finish   final",["fin"],false,true]]},
 {say:"{finite} 有界限的，就是有限的；前面加上 in（不），{infinite} 沒有界限，就是無限的。", board:[["fin + ite = finite",["fin"],false,true],["in + fin + ite = infinite",["in","fin"],false,true]]},
 {say:"口訣！", chant:"fin 是終點，in-fin 沒終點！"},
 {ask:{q:"The universe seems ＿＿.（無限的）", opts:["finite","infinite","final"], ans:1,
   ok:"對！in 是「不」，沒有界限就是無限的。", bad:{0:"finite 是「有限的」，加上 in 才是無限的。",2:"final 是「最後的」。"},
   again:{q:"字根 fin 的意思是？", opts:["結束；界限","出生"], ans:0, exp:"fin 是「結束、界限」，像 finish、finite。"}}},
 {say:"把界限畫清楚：{define} 下定義、{definition} 定義、{definite} 明確的。這裡的 de 是「完全」：把意思的界限完全畫出來。", board:[["de + fine = define",["fine"],false,true],["de + fin + ition = definition",["fin"],false,true],["de + fin + ite = definite",["fin"],false,true]]},
 {ask:{q:"de ＋ fin ＋ ition ＝ definition，意思是？", opts:["定義","確定的","罰款"], ans:0,
   ok:"讚！ition 是名詞字尾，把意思畫出界限，就是定義。", bad:{1:"「確定的」是 definite；ition 是名詞字尾，所以是「定義」。",2:"罰款的 fine 不是這裡的意思，definition 是定義。"},
   again:{q:"We need a ＿＿ answer.（明確的）", opts:["define","definite"], ans:1, exp:"a 和名詞中間放形容詞 definite；define 是動詞。"}}},
 {say:"{confine} con 是「一起」，圍在界限裡，就是限制、侷限。{refine} re 是「再」，再弄得更精細，就是精煉、改進。", board:[["con + fine = confine",["fine"],false,true],["re + fine = refine",["fine"],false,true]]},
 {say:"口訣！", chant:"con-fine 圍起來，re-fine 更精采！"},
 {say:"最後一個驚喜：{finance} 財務！古時候把債務「結束、結清」，就和錢有關了。", board:[["fin + ance = finance",["fin"],false,true]]},
 {ask:{say:"最後一題！", q:"Please ＿＿ your speech to three minutes.（限制）", opts:["confine","refine","define"], ans:0,
   ok:"完美！confine A to B，把演講限制在三分鐘內。", bad:{1:"refine 是精煉、改進。",2:"define 是下定義。"},
   again:{q:"finance 最可能和什麼有關？", opts:["錢","魚"], ans:0, exp:"把債務結清 → 財務、資金。"}}},
 {say:"fin 過關！口訣：fin 是終點，in-fin 沒終點；define 畫界限，con-fine 圍起來，re-fine 更精采！", end:true}
],
r3:[
 {say:"今天的字根是 <<gen>>：出生、產生。有了它，生物課和化學課的字都能串起來！", board:[["gen = 出生、產生",["gen"],false,true]]},
 {say:"{gene} 產生生命特徵的東西，就是基因；加上形容詞字尾，{genetic} 就是基因的、遺傳的。", board:[["gene = 基因",["gen"],false,true],["gene + tic = genetic",["gene"],false,true]]},
 {say:"口訣！", chant:"gen gen 生生生，基因遺傳一家親！"},
 {ask:{q:"gene ＋ tic ＝ genetic，意思是？", opts:["基因的；遺傳的","將軍","一般的"], ans:0,
   ok:"對！gene 是基因，tic 是形容詞字尾。", bad:{1:"將軍是 general，genetic 是「基因的」。",2:"「一般的」是 general，genetic 是「基因的」。"},
   again:{q:"字根 gen 的意思是？", opts:["切","出生；產生"], ans:1, exp:"gen 是「出生、產生」；「切」是 cide、cis。"}}},
 {say:"{generation} 同一時期出生的一群人，就是世代；{gender} 出生時的類別，就是性別。", board:[["gener + ation = generation",["gener"],false,true],["gend + er = gender",["gend"],false,true]]},
 {ask:{q:"The younger ＿＿ is good at technology.（年輕一代）", opts:["gender","generation","gene"], ans:1,
   ok:"讚！同一時期出生的一群人就是 generation。", bad:{0:"gender 是性別。",2:"gene 是基因。"},
   again:{q:"Everyone should be treated equally regardless of ＿＿.（性別）", opts:["gender","generation"], ans:0, exp:"性別是 gender。"}}},
 {say:"化學課也有 gen！{oxygen} oxy 是「酸」，古人以為它會產生酸，所以是氧；{hydrogen} hydro 是「水」，產生水的元素，就是氫。", board:[["oxy + gen = oxygen",["gen"],false,true],["hydro + gen = hydrogen",["gen"],false,true]]},
 {say:"化學口訣！", chant:"oxy 加 gen 是氧氣，hydro 加 gen 是氫氣！"},
 {ask:{q:"hydro（水）＋ gen ＝ hydrogen，意思是？", opts:["氧","氫","水壩"], ans:1,
   ok:"對！產生水的元素是氫。", bad:{0:"氧是 oxygen，hydro 是「水」。",2:"hydro 是水沒錯，但 gen 是「產生」，產生水的元素是氫。"},
   again:{q:"Water is made up of hydrogen and ＿＿.", opts:["oxygen","gender"], ans:0, exp:"水由氫和氧組成：hydrogen and oxygen。"}}},
 {say:"加碼：{ingenious} in 是「在裡面」，天生腦袋裡就有才能，就是巧妙的。高一學過的 {genuine} 真正的、國中的 {generous} 大方的，也都是 gen 家族喔！", board:[["in + geni + ous = ingenious",["geni"],false,true]]},
 {ask:{say:"最後一題！", q:"What an ＿＿ idea!（巧妙的）", opts:["ingenious","genetic","generation"], ans:0,
   ok:"完美！ingenious 是巧妙的、有創意的。", bad:{1:"genetic 是「遺傳的」。",2:"generation 是名詞「世代」，這裡需要形容詞。"},
   again:{q:"Eye color is determined by our ＿＿.（基因）", opts:["genes","genders"], ans:0, exp:"基因是 gene，複數 genes。"}}},
 {say:"gen 過關！口訣：gen gen 生生生，基因遺傳一家親；oxy 加 gen 是氧氣，hydro 加 gen 是氫氣！", end:true}
],
r4:[
 {say:"最後一堂字根課：<<nat>>，也是「出生」！你早就認識 {nature} 大自然：與生俱來的一切。", board:[["nat = 出生",["nat"],false,true],["nature",["nat"],false,true]]},
 {say:"{native} 出生在這裡的，就是本土的、母語的；{innate} in 是「在裡面」，出生時就在體內，就是天生的。", board:[["nat + ive = native",["nat"],false,true],["in + nate = innate",["nate"],false,true]]},
 {say:"口訣！", chant:"nat 出生地，native 是本地！"},
 {ask:{q:"Chinese is my ＿＿ language.（母語）", opts:["native","nation","innate"], ans:0,
   ok:"對！native language 就是母語。", bad:{1:"nation 是名詞「國家」，這裡要形容詞 native。",2:"innate 是「天生的」，母語要說 native language。"},
   again:{q:"字根 nat 的意思是？", opts:["出生","結束"], ans:0, exp:"nat 是「出生」；「結束」是 fin。"}}},
 {say:"{nation} 出生在同一塊土地的人，就是國家、民族。往後加字尾：{nationality} 國籍、{nationwide} 全國性的；往前加 multi，{multinational} 跨國的。", board:[["nat + ion = nation",["nat"],false,true],["nation + al + ity = nationality",["nation"],false,true],["nation + wide = nationwide",["nation"],false,true],["multi + nation + al = multinational",["nation"],false,true]]},
 {say:"口訣！", chant:"nation 是國家，ality 是國籍，wide 遍全國！"},
 {ask:{q:"What is your ＿＿?（國籍）", opts:["nation","nationality","nationwide"], ans:1,
   ok:"讚！國籍是 nationality。", bad:{0:"nation 是國家，國籍要加上 ality：nationality。",2:"nationwide 是「全國性的」。"},
   again:{q:"A ＿＿ survey shows that teens sleep too little.（全國性的）", opts:["nationwide","nationality"], ans:0, exp:"全國性的是 nationwide。"}}},
 {say:"{prenatal} pre 是「之前」，出生之前的，就是產前的。", board:[["pre + nat + al = prenatal",["nat"],false,true]]},
 {ask:{q:"pre（之前）＋ nat ＋ al ＝ prenatal，意思是？", opts:["產前的","天生的","全國的"], ans:0,
   ok:"對！出生之前的就是產前的。", bad:{1:"天生的是 innate，pre 是「之前」。",2:"全國的是 nationwide。"},
   again:{q:"Babies have an ＿＿ ability to learn languages.（天生的）", opts:["innate","national"], ans:0, exp:"出生時就在體內 → innate 天生的。"}}},
 {say:"比一比：gen 和 nat 都和「出生」有關！gen 偏向「產生」，像 gene、generation；nat 偏向「出生地、天生」，像 native、nation。", board:[["gen：gene、generation、oxygen",["gen"],false,true],["nat：native、nation、innate",["nat"],false,true]]},
 {ask:{say:"最後一題！", q:"The Formosan black bear is ＿＿ to Taiwan.（原生的）", opts:["native","genetic","national"], ans:0,
   ok:"完美！be native to 某地 表示「原產於某地」。", bad:{1:"genetic 是「遺傳的」。",2:"national 是「國家的」，原產於某地要用 be native to。"},
   again:{q:"The whole ＿＿ celebrated the victory.（全國人民）", opts:["nation","native"], ans:0, exp:"the whole nation 指全國人民。"}}},
 {say:"nat 過關！口訣：nat 出生地，native 是本地；nation 是國家，ality 是國籍，wide 遍全國。期末考的字根字首全部上完了，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創） ---------- */
Object.assign(ILLUS2, {
  vaccine: () => svgWrap("#eef6ff", ground("#dbeafe") + P({x:50, y:106, s:.85, hair:"short", hc:"#2b2b2b", coat:true, acc:["steth"], pose:"hold", mood:"smile"}) + P({x:118, y:106, s:.72, hair:"twin", hc:"#3b2a20", oc:"#f472b6", pose:"thumb", mood:"open"}) + grp(82, 40, 1, `<rect x="-18" y="-5" width="30" height="10" rx="2" fill="#fff" stroke="#60a5fa" stroke-width="2"/><rect x="-14" y="-3" width="16" height="6" fill="#93c5fd"/><path d="M12 0 H24" stroke="#9ca3af" stroke-width="1.6"/><path d="M-18 0 H-26 M-26 -6 V6" stroke="#60a5fa" stroke-width="2.5"/>`, -15) + heart(120, 28, .7) + spark(140, 46, .7)),
  surgery: () => svgWrap("#e6f7f3", `<ellipse cx="80" cy="18" rx="30" ry="9" fill="#e5e7eb"/><path d="M60 22 L40 70 H120 L100 22 Z" fill="#fef9c3" opacity=".55"/>` + `<rect x="30" y="80" width="100" height="10" rx="4" fill="#94a3b8"/><path d="M40 90 V108 M120 90 V108" stroke="#64748b" stroke-width="4"/><rect x="34" y="72" width="92" height="9" rx="4" fill="#bfdbfe"/><circle cx="44" cy="70" r="7" fill="#ffe0c8"/>` + P({x:62, y:106, s:.62, hair:"bun", hc:"#3b2a20", coat:true, pose:"hold", mood:"smile", acc:["glasses"]}) + P({x:104, y:106, s:.62, hair:"short", hc:"#2b2b2b", coat:true, pose:"hold", mood:"smile"}) + spark(138, 30, .7, "#34d399")),
  microscope: () => svgWrap("#f5f3ff", grp(56, 64, 1, `<rect x="-26" y="40" width="52" height="8" rx="3" fill="#475569"/><path d="M10 40 Q22 10 4 -14" stroke="#64748b" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="-18" y="14" width="30" height="5" rx="2" fill="#94a3b8"/><rect x="-14" y="-34" width="12" height="40" rx="3" fill="#334155" transform="rotate(-20)"/><rect x="-16" y="-42" width="14" height="8" rx="2" fill="#1e293b" transform="rotate(-20)"/>`) + `<circle cx="120" cy="50" r="30" fill="#fff" stroke="#a78bfa" stroke-width="3"/>` + `<ellipse cx="110" cy="44" rx="9" ry="6" fill="#86efac"/><circle cx="110" cy="44" r="2.5" fill="#15803d"/><ellipse cx="128" cy="60" rx="8" ry="5" fill="#fca5a5"/><circle cx="128" cy="60" r="2.2" fill="#b91c1c"/><path d="M118 36 q4 -4 8 0" stroke="#60a5fa" stroke-width="2" fill="none"/>` + `<path d="M84 46 L90 48" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3 3"/>` + spark(146, 96, .7, "#a78bfa")),
  court: () => svgWrap("#f8f4ec", `<path d="M20 44 L80 16 L140 44 Z" fill="#d6c7a1"/><rect x="24" y="44" width="112" height="6" fill="#c8b68a"/>` + [38, 62, 98, 122].map(x => `<rect x="${x - 5}" y="50" width="10" height="44" fill="#efe6d0" stroke="#c8b68a"/>`).join("") + `<rect x="18" y="94" width="124" height="8" fill="#c8b68a"/><rect x="12" y="102" width="136" height="6" fill="#b8a273"/>` + grp(80, 72, 1, `<path d="M0 -20 V14 M-14 14 H14" stroke="#a16207" stroke-width="2.5"/><path d="M-18 -14 H18" stroke="#a16207" stroke-width="2.5"/><path d="M-18 -14 L-24 0 H-12 Z M18 -14 L12 0 H24 Z" fill="#fbbf24" stroke="#a16207" stroke-width="1.2"/>`) + spark(140, 22, .7)),
  vote: () => svgWrap("#eef8ff", ground() + grp(96, 82, 1, `<rect x="-26" y="-18" width="52" height="40" rx="4" fill="#60a5fa"/><rect x="-14" y="-20" width="28" height="4" rx="2" fill="#1e3a8a"/><rect x="-10" y="-2" width="20" height="10" rx="2" fill="#fff" opacity=".9"/>`) + grp(96, 46, 1, `<rect x="-9" y="-12" width="18" height="22" rx="1.5" fill="#fff" stroke="#cbd5e1"/><path d="M-4 0 L-1 4 L5 -5" stroke="#16a34a" stroke-width="2.4" fill="none"/>`, 8) + P({x:44, y:106, s:.85, hair:"long", hc:"#3b2a20", oc:"#f59e0b", pose:"point", mood:"open"}) + star(140, 24, 7) + star(124, 16, 4))
});

registerUnit("s2-1-3", {
  name:"高二 上學期 期末考",
  sub:"同位語子句、準關係代名詞 as/than/but、複合關係副詞、名詞子句綜合",
  words:S2_1_3_WORDS, grammar:S2_1_3_GRAMMAR, quiz:S2_1_3_QUIZ,
  classes:Object.assign({}, S2_1_3_CLASS, S2_1_3_ROOT_CLASS), phonics:S2_1_3_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會字根 cide/cis、fin、gen、nat，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
