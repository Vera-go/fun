/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高二上學期 第二次段考（通用範圍）
   主題：人生選擇與後悔、歷史事件的轉折、心理與情緒調適
   文法：混合假設語氣、省略 if 的倒裝假設、wish / as if / if only、It's time + 過去式 與 but for / without
   字根：tain / ten、spir、clud / clus、flu / flux
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖]
   ========================================================= */
const S2_1_2_WORDS = [
/* ---------- 人生選擇與後悔 ---------- */
["dilemma","n.","兩難；困境",[
 ["I'm in a dilemma: should I study abroad or stay with my family?","我陷入兩難：該出國念書，還是留在家人身邊？","be in a dilemma 表示「陷入兩難」；冒號後面接說明兩難的內容。"],
 ["Had I known about the dilemma earlier, I would have asked my teacher for advice.","要是我早點知道這個兩難的處境，我就會去請教老師了。","省略 if 的倒裝：Had I known = If I had known，與過去事實相反，主要子句用 would have + p.p.。"],
 ["I wish I didn't have to face such a dilemma.","我真希望自己不必面對這樣的兩難。","I wish + 過去式（didn't have to）表示與現在事實相反的願望；such a + 名詞。"]],
 "di-=兩個|lemma=前提","兩個前提都讓人為難 → 兩難","@dilemma"],
["alternative","n./adj.","替代方案；可替代的",[
 ["We have no alternative but to cancel the trip.","我們別無選擇，只能取消旅行。","have no alternative but to V 表示「除了……之外別無選擇」。"],
 ["If I had chosen the alternative plan, I would be in Tainan now.","如果我當初選了另一個方案，現在就會在台南了。","混合假設：If 子句與過去相反（had chosen），主要子句與現在相反（would be ... now）。"],
 ["Without alternative energy, the city would have had a blackout last summer.","要是沒有替代能源，這座城市去年夏天就會停電了。","Without + 名詞 = If it had not been for ...；主要子句是 would have p.p.，所以是和過去相反。"]],
 "altern=輪流、另一個|-ative=形容詞字尾","可以輪替上場的另一個 → 替代的","🛤️|另一條路"],
["option","n.","選擇；選項",[
 ["There are several options for students after high school.","高中畢業後，學生有好幾種選擇。","There are + 複數名詞；option 是可數名詞。"],
 ["Should you need more options, our counselor will help you.","萬一你需要更多選擇，我們的輔導老師會幫你。","Should you need = If you should need，表示「萬一」；主要子句可以用 will。"],
 ["If I had kept my options open, I wouldn't feel so stuck now.","如果我當初保留其他選擇，現在就不會覺得這麼卡了。","keep one's options open 表示「保留選擇的餘地」；混合假設：過去影響現在。"]],
 "opt=選擇|-ion=名詞字尾","選擇的動作 → 選項","☑️|選項"],
["consequence","n.","後果；結果",[
 ["You must accept the consequences of your choices.","你必須承擔自己選擇的後果。","accept / face the consequences 表示「承擔後果」，consequences 常用複數。"],
 ["Had he thought about the consequences, he wouldn't have quit school.","要是他當時想過後果，就不會休學了。","倒裝假設 Had he thought = If he had thought；quit 三態同形。"],
 ["As a consequence of the war, many people lost their homes.","由於戰爭的結果，許多人失去了家園。","as a consequence of + 名詞 表示「由於……的結果」。"]],
 "con-=一起|sequ=跟隨|-ence=名詞字尾","跟在行動後面一起來的 → 後果","⛓️|後果"],
["reckless","adj.","魯莽的",[
 ["It was reckless of him to drive in the storm.","他在暴風雨中開車真是魯莽。","It is + 形容詞 + of 人 + to V：形容「人」的個性或行為時用 of，不用 for。"],
 ["If he weren't so reckless, he wouldn't have broken his leg last week.","如果他沒那麼魯莽，上週就不會摔斷腿了。","混合假設：If 子句是一直存在的個性（與現在相反），主要子句是過去的結果（would have p.p.）。"],
 ["He acts as if he were afraid of nothing, and his reckless choices worry his parents.","他表現得好像什麼都不怕，而他魯莽的選擇讓爸媽很擔心。","as if + 過去式（were）表示與現在事實相反：他其實會怕。"]],
 "reck=在意|-less=沒有……的","什麼都不在意 → 魯莽的","🏍️|魯莽"],
["impulse","n.","衝動",[
 ["I bought the shoes on impulse and regretted it later.","我一時衝動買了那雙鞋，後來就後悔了。","on impulse 表示「一時衝動」。"],
 ["If only I had controlled my impulse to shout at her!","要是我當時控制住對她大吼的衝動就好了！","If only + had p.p. 表示對過去強烈的遺憾；an impulse to V 表示「做某事的衝動」。"],
 ["Feeling an impulse to quit, she took a deep breath and kept going.","她感到想放棄的衝動，於是深吸一口氣繼續下去。","Feeling ... 是分詞構句，= Because she felt ...；keep + V-ing 表示「持續做」。"]],
 "im-=向內|pulse=推","從內心推著你去做 → 衝動","⚡|衝動"],
["abandon","v.","放棄；拋棄",[
 ["Never abandon your dream just because it is difficult.","不要只因為困難就放棄你的夢想。","Never + 原形動詞 是否定祈使句，語氣比 Don't 更強。"],
 ["If the sailors hadn't abandoned the ship, they would have died.","要是那些水手當時沒有棄船，他們就會喪命了。","與過去事實相反的假設：If + had (not) p.p.，主要子句用 would have p.p.。"],
 ["It's high time the city abandoned its old plan.","這座城市早該放棄舊計畫了。","It's high time + 主詞 + 過去式（abandoned），表示「早就該做卻還沒做」。"]],
 "","","🎈|放手"],
["settle","v.","定居；解決；安定下來",[
 ["After years of travel, my uncle finally settled in Hualien.","旅行多年後，我舅舅終於在花蓮定居。","settle in + 地點 表示「在某地定居」。"],
 ["Had they settled the problem earlier, the two countries wouldn't have gone to war.","要是兩國早點解決問題，就不會開戰了。","倒裝假設 Had they settled = If they had settled；settle 也表示「解決（爭端）」。"],
 ["It's time you settled down and focused on your studies.","你該靜下心來專心讀書了。","It's time + 主詞 + 過去式；兩個動詞 settled 和 focused 都要用過去式。"]],
 "","","🏡|定居"],
["destiny","n.","命運",[
 ["She believes it is her destiny to become a doctor.","她相信成為醫生是她的命運。","it 是虛主詞，代替後面的 to become a doctor。"],
 ["Without that teacher, my destiny would have been completely different.","要是沒有那位老師，我的命運會完全不同。","Without + 名詞 = If it had not been for ...；主要子句 would have p.p. 表示和過去相反。"],
 ["We are not slaves to destiny; our choices matter.","我們不是命運的奴隸；我們的選擇很重要。","matter 當動詞表示「重要」；分號連接兩個意思緊密相關的句子。"]],
 "","","🌠|命運"],
["fate","n.","命運；宿命",[
 ["No one knows what fate has in store for us.","沒有人知道命運為我們安排了什麼。","have ... in store for 人 表示「為某人準備好……」；what 引導名詞子句當 knows 的受詞。"],
 ["He talks as if fate had decided everything for him.","他說得好像命運早就替他決定好一切似的。","as if + had p.p. 表示「好像先前已經……」，但事實並非如此。"],
 ["The fate of the empire was decided in a single battle.","這個帝國的命運在一場戰役中就被決定了。","was decided 是過去式被動語態。"]],
 "","","🎲|宿命"],
["instinct","n.","本能；直覺",[
 ["Birds fly south in winter by instinct.","鳥類冬天憑本能往南飛。","by instinct 表示「憑本能」。"],
 ["Had I followed my instinct, I wouldn't have trusted that stranger.","要是我當時聽從直覺，就不會相信那個陌生人了。","Had I followed = If I had followed，與過去事實相反。"],
 ["Trust your instinct, but check the facts as well.","相信你的直覺，但也要查證事實。","as well 放句尾表示「也」。"]],
 "in-=在裡面|stinct=刺激","從身體裡面刺激你行動 → 本能","🐾|本能"],
["ignore","v.","忽視；不理會",[
 ["Don't ignore your feelings when you are under stress.","有壓力的時候不要忽視自己的感受。","under stress 表示「在壓力之下」。"],
 ["If I hadn't ignored the warning, I wouldn't be in trouble now.","要是我當時沒有忽視那個警告，現在就不會有麻煩了。","混合假設：過去的 hadn't ignored，影響現在的 wouldn't be ... now。"],
 ["She ignored me as though I were invisible.","她無視我，好像我是透明人一樣。","as though = as if；與事實相反，be 動詞用 were。"]],
 "ig-=不|nore=知道","故意不去知道 → 忽視","🙉|忽視"],
["risk","n./v.","風險；冒險",[
 ["Don't take the risk of riding a scooter without a helmet.","不要冒著不戴安全帽騎機車的風險。","take the risk of + V-ing 表示「冒……的風險」。"],
 ["Were I in your position, I wouldn't risk losing everything.","如果我站在你的立場，我不會冒險失去一切。","Were I = If I were；risk + V-ing 表示「冒險做某事」。"],
 ["Without taking risks, the explorers would never have found the new land.","不冒險的話，探險家們永遠不會發現那片新土地。","Without + V-ing 也能表示假設；主要子句 would have p.p. 表示與過去相反。"]],
 "","","⚠️|風險"],
["bold","adj.","大膽的",[
 ["It was a bold decision to leave his job and start a business.","辭掉工作去創業是個大膽的決定。","to leave ... and start ... 是不定詞片語，修飾 decision。"],
 ["I wish I were as bold as my sister.","我真希望我和姊姊一樣大膽。","I wish + were 表示與現在事實相反；as + 原級 + as 表示「和……一樣」。"],
 ["If the general hadn't made such a bold move, the army would have lost the war.","要是那位將軍當時沒有採取如此大膽的行動，軍隊就會輸掉戰爭了。","such + a + 形容詞 + 名詞；與過去事實相反的假設。"]],
 "","","🦁|大膽"],
["cautious","adj.","謹慎的",[
 ["Be cautious when you sign a contract.","簽約時要謹慎。","Be cautious 是祈使句。"],
 ["If I were more cautious, I wouldn't have lost my wallet yesterday.","如果我更謹慎一點，昨天就不會弄丟錢包了。","混合假設：個性（現在一直如此）影響過去的結果 → If + 過去式，主要子句 would have p.p.。"],
 ["Should you feel unsure, it is better to be cautious.","萬一你不確定，還是謹慎一點比較好。","Should you feel = If you should feel，表示可能性較低的「萬一」。"]],
 "caut=小心|-ious=形容詞字尾","caution（小心）的形容詞 → 謹慎的","🐢|謹慎"],
["guilt","n.","罪惡感；內疚",[
 ["He felt a strong sense of guilt after lying to his mother.","對媽媽說謊後，他有強烈的罪惡感。","a sense of guilt 表示「罪惡感」；after + V-ing。"],
 ["If only I could get rid of this guilt!","要是我能擺脫這種罪惡感就好了！","If only + 過去式（could）表示對現在強烈的願望。"],
 ["But for his guilt, he would sleep well at night.","要不是有罪惡感，他晚上就能睡得好。","But for + 名詞 = If it were not for ...；主要子句 would + 原形動詞，表示和現在相反。"]],
 "","","😔|內疚"],
["guilty","adj.","內疚的；有罪的",[
 ["I feel guilty about not visiting my grandma more often.","沒有更常去看奶奶，我覺得很內疚。","feel guilty about + V-ing；not 放在動名詞前面表示否定。"],
 ["The man was found guilty of stealing.","那名男子被判竊盜罪。","be found guilty of + 名詞或 V-ing 表示「被判……罪」。"],
 ["She looked as if she were guilty, but she was innocent.","她看起來好像有罪，但她其實是無辜的。","as if + were 表示與事實相反（她其實無罪）。"]],
 "guilt=罪惡感|-y=形容詞字尾","有罪惡感的 → 內疚的","⚖️|有罪"],
["outbreak","n.","爆發",[
 ["The outbreak of the war shocked the world.","戰爭的爆發震驚了全世界。","the outbreak of + 名詞 表示「……的爆發」。"],
 ["Had the government acted faster, the outbreak could have been controlled.","要是政府行動更快，疫情爆發本來可以控制住。","could have been p.p. 表示「本來可以被……」（但沒有）。"],
 ["Should there be another outbreak, schools may close again.","萬一再次爆發疫情，學校可能會再度停課。","Should there be = If there should be，表示「萬一有……」。"]],
 "out=向外|break=爆破","向外爆開 → 爆發","💥|爆發"],
/* ---------- 心理與情緒調適 ---------- */
["anxiety","n.","焦慮",[
 ["Many students suffer from anxiety before exams.","許多學生在考試前飽受焦慮之苦。","suffer from + 名詞 表示「受……所苦」。"],
 ["Were it not for my friends, my anxiety would be much worse.","要不是有朋友們，我的焦慮會嚴重得多。","Were it not for = If it were not for，表示「要不是有……」（現在）。"],
 ["Talking to someone you trust can reduce anxiety.","和你信任的人聊聊可以減輕焦慮。","動名詞片語當主詞；someone (that) you trust 省略了關係代名詞。"]],
 "anxi=不安|-ety=名詞字尾","不安的狀態 → 焦慮","😟|焦慮"],
["anxious","adj.","焦慮的；渴望的",[
 ["My mom gets anxious when I come home late.","我晚回家時媽媽會很焦慮。","get + 形容詞 表示「變得……」。"],
 ["He was anxious about the result, as if his whole future depended on it.","他對結果很焦慮，好像他的整個未來都取決於此。","be anxious about 表示「為……焦慮」；as if + 過去式 depended，表示與事實不符。"],
 ["She is anxious to make friends at her new school.","她渴望在新學校交到朋友。","be anxious to V 表示「渴望做某事」，和 be anxious about 意思不同。"]],
 "anxi=不安|-ous=充滿……的","充滿不安 → 焦慮的","😧|焦慮的"],
["frustration","n.","挫折感；沮喪",[
 ["She cried in frustration after failing the test again.","再次考試失敗後，她沮喪地哭了。","in frustration 表示「沮喪地」。"],
 ["Had she talked about her frustration, she wouldn't have felt so alone.","要是她當時說出自己的挫折感，就不會那麼孤單了。","倒裝假設 Had she talked = If she had talked。"],
 ["Learning to deal with frustration is part of growing up.","學會面對挫折是成長的一部分。","deal with 表示「處理、應付」；動名詞片語當主詞，用單數動詞 is。"]],
 "frustr=落空|-ation=名詞字尾","希望落空的感覺 → 挫折感","😤|挫折"],
["frustrated","adj.","感到挫折的",[
 ["I felt frustrated because no one understood me.","因為沒人懂我，我覺得很挫折。","feel + 形容詞；frustrated 形容「人感到」挫折。"],
 ["If I weren't so easily frustrated, I would have finished the puzzle yesterday.","如果我沒那麼容易受挫，昨天就把拼圖完成了。","混合假設：個性（現在）影響過去的結果。"],
 ["Frustrated by the delay, the passengers began to complain.","因為延誤而感到沮喪，乘客們開始抱怨。","過去分詞開頭的分詞構句：= Because they were frustrated by the delay。"]],
 "frustrat=使落空|-ed=感到……的","被弄得希望落空的 → 感到挫折的","😣|挫折感"],
["cope","v.","應付；處理",[
 ["How do you cope with stress?","你都怎麼應付壓力？","cope with + 名詞 表示「應付、處理」。"],
 ["Without her family's support, she couldn't have coped with the loss.","要是沒有家人的支持，她當時無法承受那份失去。","Without + 名詞 搭配 couldn't have p.p.，表示與過去事實相反。"],
 ["It's time we learned better ways to cope with anger.","我們該學習更好的方式來處理怒氣了。","It's time + 主詞 + 過去式（learned）。"]],
 "","","🛟|撐過去"],
["depressed","adj.","沮喪的；憂鬱的",[
 ["He has been depressed since his dog died.","他的狗死後，他一直很憂鬱。","has been + 形容詞 + since 過去時間，表示「從那時起一直……」。"],
 ["If only I had noticed that she was depressed!","要是我當時有注意到她很憂鬱就好了！","If only + had p.p. 表示對過去的遺憾。"],
 ["Don't act as though you were fine when you feel depressed.","你感到憂鬱的時候，不要裝作沒事。","as though + were 表示與事實相反（其實不好）。"]],
 "de-=向下|press=壓|-ed=形容詞字尾","心情被往下壓 → 沮喪的","😞|沮喪"],
["relieve","v.","減輕；緩和",[
 ["This medicine will relieve your pain.","這種藥會減輕你的疼痛。","relieve + 疼痛／壓力 表示「減輕」。"],
 ["I was relieved to hear that everyone was safe.","聽到大家都平安，我鬆了一口氣。","be relieved to V 表示「因為……而放心」。"],
 ["Had I known how to relieve stress, I wouldn't have gotten sick before the exam.","要是我當時懂得紓解壓力，就不會在考前生病了。","Had I known how to V = If I had known how to V。"]],
 "re-=再|lieve=舉起","把重擔再舉起來移開 → 減輕","😌|紓解"],
["relief","n.","放心；緩解；救濟",[
 ["What a relief! The typhoon didn't hit Taiwan.","真是鬆了一口氣！颱風沒有侵襲台灣。","What a relief! 是常用的感嘆句。"],
 ["To our relief, the lost child was found.","令我們放心的是，走失的孩子找到了。","to one's relief 表示「令某人放心的是」。"],
 ["Without the relief workers, many more people would have died in the earthquake.","要是沒有救援人員，地震中會有更多人喪命。","relief 也可以表示「救濟、救援」；Without + 名詞 表示與過去相反。"]],
 "re-=再|lief=舉起","relieve（減輕）的名詞 → 放心、緩解","😮‍💨|鬆一口氣"],
["soothe","v.","安撫；舒緩",[
 ["Soft music can soothe a crying baby.","輕柔的音樂可以安撫哭鬧的嬰兒。","crying 是現在分詞當形容詞，修飾 baby。"],
 ["If only someone could soothe my nerves before the interview!","要是面試前有人能安撫我緊張的情緒就好了！","If only + could V 表示對現在強烈的願望；nerves 在這裡指「緊張的情緒」。"],
 ["Her calm voice soothed the frightened children.","她平靜的聲音安撫了受驚的孩子們。","frightened 是過去分詞當形容詞，表示「感到害怕的」。"]],
 "","","🍵|舒緩"],
["therapy","n.","治療；療法",[
 ["Music therapy helps patients relax.","音樂治療幫助病人放鬆。","help + 人 + 原形動詞 表示「幫助某人做某事」。"],
 ["Had he received therapy earlier, he would be healthier now.","要是他早點接受治療，現在會更健康。","倒裝的混合假設：Had he received（過去）→ would be ... now（現在）。"],
 ["It's high time people stopped seeing therapy as something to be ashamed of.","大家早該停止把接受治療看成丟臉的事了。","It's high time + 過去式（stopped）；see A as B 表示「把 A 看作 B」。"]],
 "","","🩺|治療"],
["counselor","n.","輔導老師；顧問",[
 ["You can talk to the school counselor if you feel stressed.","如果你覺得有壓力，可以找學校的輔導老師聊聊。","if 引導一般條件句（可能發生），不是假設語氣。"],
 ["Were I a counselor, I would listen more than I talk.","如果我是輔導老師，我會多聽少說。","Were I = If I were；listen more than I talk 是比較句。"],
 ["The counselor spoke to me as if she had known me for years.","輔導老師跟我說話的樣子，好像她認識我好多年了。","as if + had p.p. 表示與事實相反（其實才剛認識）。"]],
 "counsel=建議|-or=人","給人建議的人 → 輔導老師","🧑‍🏫|輔導老師"],
["meditate","v.","冥想；沉思",[
 ["My aunt meditates for ten minutes every morning.","我阿姨每天早上冥想十分鐘。","主詞 My aunt 是第三人稱單數，動詞加 s。"],
 ["If I meditated regularly, I wouldn't get angry so easily.","如果我規律冥想，就不會那麼容易生氣了。","與現在事實相反的假設：If + 過去式，主要子句 would + 原形動詞。"],
 ["It's time you took a break and meditated for a while.","你該休息一下，冥想一會兒了。","It's time + 主詞 + 過去式；took 和 meditated 都用過去式。"]],
 "","","🧘|冥想"],
["temper","n.","脾氣",[
 ["My brother has a bad temper.","我哥哥脾氣不好。","have a bad / quick temper 表示「脾氣不好／暴躁」。"],
 ["If I hadn't lost my temper, we would still be friends now.","如果我當時沒發脾氣，我們現在還會是朋友。","lose one's temper 表示「發脾氣」；混合假設：過去影響現在。"],
 ["I wish he would control his temper.","我真希望他能控制自己的脾氣。","I wish + 人 + would V 表示希望別人改變行為，常帶有抱怨的語氣。"]],
 "","","🌋|脾氣"],
["mood","n.","心情",[
 ["I'm in a good mood today.","我今天心情很好。","in a good / bad mood 表示「心情好／壞」。"],
 ["I'm not in the mood for jokes, so stop acting as if nothing had happened.","我現在沒心情開玩笑，所以別再表現得好像什麼都沒發生。","be in the mood for 表示「有心情做……」；as if + had p.p. 表示與過去事實相反（明明發生了）。"],
 ["If the weather were sunnier, my mood would be better.","如果天氣晴朗一點，我的心情會好一點。","與現在事實相反的假設，be 動詞用 were。"]],
 "","","🎭|心情"],
["panic","n./v.","恐慌；驚慌",[
 ["Don't panic! Just follow the teacher's instructions.","別慌！照老師的指示做就好。","panic 當動詞；祈使句 Don't + 原形動詞。"],
 ["Should a fire break out, don't panic and use the stairs.","萬一發生火災，別驚慌，走樓梯。","Should a fire break out = If a fire should break out；主要子句可以是祈使句。"],
 ["People panicked as if the end of the world had come.","人們驚慌失措，好像世界末日到了一樣。","panic 的過去式要加 k：panicked；as if + had p.p.。"]],
 "","","😱|恐慌"],
["envy","n./v.","羨慕；嫉妒",[
 ["I envy people who can sing well.","我羨慕歌唱得好的人。","envy + 人 表示「羨慕某人」；who 引導關係子句修飾 people。"],
 ["Her new phone is the envy of the whole class.","她的新手機讓全班都羨慕。","the envy of + 人 表示「令……羨慕的對象」。"],
 ["I wish I didn't envy others so much.","我真希望自己不要那麼羨慕別人。","I wish + 過去式的否定（didn't），表示與現在事實相反。"]],
 "","","💚|羨慕"],
["grief","n.","悲痛；悲傷",[
 ["She was filled with grief after her grandfather died.","爺爺過世後，她滿心悲痛。","be filled with + 名詞 表示「充滿……」。"],
 ["Time can ease grief, but it cannot erase memories.","時間能減輕悲傷，卻無法抹去回憶。","can 和 cannot 對比；but 連接兩個對等子句。"],
 ["Without friends to share our grief, life would be much harder.","要是沒有朋友分擔悲傷，人生會艱難得多。","Without + 名詞 = If there were no ...；to share our grief 是不定詞修飾 friends。"]],
 "","","🥀|悲痛"],
/* ---------- 歷史事件的轉折 ---------- */
["revolution","n.","革命；重大變革",[
 ["The Industrial Revolution began in Britain.","工業革命始於英國。","專有名詞 the Industrial Revolution 每個字首要大寫。"],
 ["Had it not been for the revolution, the king would have stayed in power.","要不是那場革命，國王就會繼續掌權了。","Had it not been for = If it had not been for，與過去事實相反。"],
 ["The smartphone started a revolution in the way we communicate.","智慧型手機引發了我們溝通方式的革命。","a revolution in + 名詞 表示「在……方面的革命」。"]],
 "re-=回|volu=轉|-tion=名詞字尾","把整個局勢翻轉回來 → 革命","✊|革命"],
["empire","n.","帝國",[
 ["The Roman Empire lasted for hundreds of years.","羅馬帝國延續了好幾百年。","hundreds of 表示「好幾百」，hundred 加 s 時後面要接 of。"],
 ["If the empire hadn't fallen, Europe would look very different today.","如果那個帝國沒有滅亡，歐洲今天看起來會很不一樣。","混合假設：過去（hadn't fallen）影響現在（would look ... today）。"],
 ["The emperor ruled the empire as if he were a god.","皇帝統治帝國時，好像自己是神一樣。","as if + were 表示與事實相反。"]],
 "","","👑|帝國"],
["dynasty","n.","朝代；王朝",[
 ["The Tang Dynasty is famous for its poetry.","唐朝以詩聞名。","be famous for 表示「以……聞名」。"],
 ["If the dynasty had fought corruption, it might not have collapsed.","如果這個朝代當時對抗貪腐，或許就不會崩潰了。","might not have p.p. 表示「或許就不會……」，語氣比 would 保留。"],
 ["Many dynasties rose and fell in Chinese history.","中國歷史上有許多朝代興起又衰亡。","rise and fall 表示「興衰」；rise 的過去式是 rose，fall 的過去式是 fell。"]],
 "","","🏯|朝代"],
["colony","n.","殖民地；（生物）群落",[
 ["Hong Kong was once a British colony.","香港曾經是英國的殖民地。","once 放在 be 動詞後面，表示「曾經」。"],
 ["If the colony hadn't fought for independence, it would still be ruled by others today.","如果這個殖民地當年沒有爭取獨立，今天仍會受他人統治。","混合假設搭配被動：would still be ruled（現在）。"],
 ["A colony of ants lives under the tree.","樹下住著一群螞蟻。","主詞是 A colony（單數），所以動詞用 lives。"]],
 "","","🚩|殖民地"],
["invade","v.","入侵",[
 ["Germany invaded Poland in 1939, which started World War II.","德國在 1939 年入侵波蘭，引發了第二次世界大戰。","非限定用法的 which 指前面整件事（入侵波蘭）。"],
 ["Were another country to invade, the people would fight back.","萬一有別的國家入侵，人民會奮起反擊。","Were + 主詞 + to V = If ... were to V，表示未來不太可能發生的假設。"],
 ["Tourists invade the small town every summer.","每年夏天遊客都湧入這個小鎮。","invade 也可以比喻「大量湧入」。"]],
 "in-=進入|vade=走","走進別人的領土 → 入侵","⚔️|入侵"],
["conquer","v.","征服；克服",[
 ["The Mongols conquered a large part of Asia.","蒙古人征服了亞洲大部分地區。","a large part of 表示「大部分的」。"],
 ["If she hadn't conquered her fear of heights, she couldn't have climbed Jade Mountain.","如果她沒有克服懼高症，就不可能爬上玉山了。","conquer one's fear 表示「克服恐懼」；與過去事實相反用 couldn't have p.p.。"],
 ["It's time we conquered our laziness!","我們該戰勝懶惰了！","It's time + 主詞 + 過去式（conquered）。"]],
 "con-=完全|quer=尋求、取得","完全取得 → 征服","🏔️|征服"],
["defeat","v./n.","打敗；失敗",[
 ["Our team defeated the champion 3 to 1.","我們隊以 3 比 1 打敗了冠軍。","defeat 後面直接接被打敗的對象。"],
 ["But for the heavy rain, the army would not have been defeated.","要不是那場大雨，軍隊就不會被打敗了。","But for + 名詞 = If it had not been for ...；would not have been p.p. 是被動。"],
 ["He accepted defeat as though it meant nothing to him.","他接受失敗，好像這對他毫無意義似的。","as though + 過去式（meant）表示與事實相反。"]],
 "de-=去除|feat=做成","把做成的事毀掉 → 打敗","🏳️|戰敗"],
["victory","n.","勝利",[
 ["The team celebrated their victory over their rivals.","球隊慶祝戰勝對手。","victory over + 對手 表示「戰勝……」。"],
 ["Without teamwork, we could not have won such a great victory.","沒有團隊合作，我們不可能贏得如此重大的勝利。","Without + 名詞 搭配 could not have p.p.，表示與過去相反。"],
 ["The general spoke as if victory were certain.","將軍說得好像勝利是確定的。","as if + were 表示與事實相反（勝利其實還不確定）。"]],
 "vict=征服|-ory=名詞字尾","征服對手的結果 → 勝利","✌️|勝利"],
["surrender","v./n.","投降；屈服",[
 ["Japan surrendered in 1945.","日本在 1945 年投降。","surrender 當不及物動詞。"],
 ["Had the soldiers not surrendered, many more lives would have been lost.","要是士兵們當時沒有投降，會有更多人喪命。","倒裝的否定：Had + 主詞 + not + p.p.，不能寫成 Hadn't the soldiers surrendered。"],
 ["Never surrender to fear.","永遠不要向恐懼屈服。","surrender to + 名詞 表示「向……屈服」。"]],
 "sur-=在上面|render=交出","把武器交上去 → 投降","🙌|投降"],
["treaty","n.","條約",[
 ["The two countries signed a peace treaty.","兩國簽訂了和平條約。","sign a treaty 表示「簽訂條約」。"],
 ["If the treaty had been fair, there might not have been another war.","如果那份條約當時是公平的，也許就不會有另一場戰爭。","there might not have been 表示「或許就不會有」。"],
 ["Should either side break the treaty, the other would take action.","萬一任何一方違反條約，另一方就會採取行動。","Should + 主詞 + 原形動詞，主要子句也可以用 would。"]],
 "treat=協商|-y=名詞字尾","雙方協商後的結果 → 條約","📜|條約"],
["era","n.","時代；年代",[
 ["We live in the era of smartphones.","我們活在智慧型手機的時代。","the era of + 名詞 表示「……的時代」。"],
 ["If I had been born in a different era, I would have different dreams now.","如果我出生在不同的時代，現在就會有不同的夢想。","小心：這裡的 would have 是 would + 原形動詞 have（擁有），搭配 now，是混合假設，不是 would have p.p.。"],
 ["The end of the war marked the beginning of a new era.","戰爭的結束標誌著新時代的開始。","mark 表示「標誌著」。"]],
 "","","⏳|時代"],
["civilization","n.","文明",[
 ["Ancient Egypt was one of the earliest civilizations.","古埃及是最早的文明之一。","one of the + 最高級 + 複數名詞。"],
 ["Without writing, human civilization could not have developed so fast.","要是沒有文字，人類文明不可能發展得這麼快。","Without + 名詞 搭配 could not have p.p.，表示與過去相反。"],
 ["Were it not for water, no civilization could exist.","要不是有水，任何文明都不可能存在。","Were it not for = If it were not for，表示與現在事實相反。"]],
 "civil=市民|-iz=使……化|-ation=名詞字尾","使人們成為有規矩的市民 → 文明","🏺|文明"],
["historian","n.","歷史學家",[
 ["Historians still argue about the cause of the war.","歷史學家仍在爭論那場戰爭的起因。","argue about + 事 表示「爭論某事」。"],
 ["Had the letters not been found, historians would never have known the truth.","要是那些信件沒被找到，歷史學家永遠不會知道真相。","倒裝的否定搭配被動：Had the letters not been found = If the letters had not been found。"],
 ["A good historian studies the past as if he were a detective.","好的歷史學家研究過去，就像偵探一樣。","as if + were 表示與事實相反（他其實不是偵探）。"]],
 "histor=歷史|-ian=人","研究歷史的人 → 歷史學家","📚|歷史學家"],
["battle","n.","戰役；奮鬥",[
 ["The battle lasted for three days.","這場戰役持續了三天。","last 當動詞表示「持續」。"],
 ["If the general had waited for help, they might have won the battle.","如果將軍當時等待援軍，他們也許能打贏那場戰役。","might have p.p. 表示「也許會……」。"],
 ["Her battle against cancer inspired many people.","她和癌症搏鬥的經歷激勵了許多人。","battle against + 名詞 表示「與……對抗」。"]],
 "","","🪖|戰役"],
["rebel","n./v.","叛亂者；反抗",[
 ["The rebels attacked the capital.","叛軍攻擊了首都。","rebel 當名詞重音在前（REB-el），當動詞重音在後（re-BEL）。"],
 ["Teenagers sometimes rebel against their parents.","青少年有時會反抗父母。","rebel against + 人或事 表示「反抗……」。"],
 ["If the king had listened to the people, they wouldn't have rebelled.","如果國王當時傾聽人民的聲音，他們就不會造反了。","rebel 的過去式要重複 l：rebelled。"]],
 "re-=反|bel=戰爭","反過來起身作戰 → 反叛","🔥|反抗"],
["emperor","n.","皇帝",[
 ["The emperor lived in a huge palace.","皇帝住在巨大的宮殿裡。","emperor 是可數名詞。"],
 ["If I were an emperor, I would make every Friday a holiday.","如果我是皇帝，我會讓每個星期五都放假。","make + 受詞 + 名詞 表示「使……成為……」。"],
 ["The emperor acted as though he had never made a mistake.","皇帝表現得好像自己從沒犯過錯。","as though + had p.p. 表示與過去事實相反。"]],
 "","","🤴|皇帝"],
["decline","v./n.","衰退；婉拒",[
 ["The empire began to decline after the war.","戰爭後帝國開始衰退。","begin to V 表示「開始……」。"],
 ["I wish I hadn't declined the invitation.","我真希望當時沒有婉拒那個邀請。","I wish + had p.p. 表示對過去的遺憾。"],
 ["Without new ideas, the company's sales would decline.","要是沒有新點子，公司的銷售額會下滑。","Without + 名詞 表示與現在事實相反的假設。"]],
 "de-=向下|cline=傾斜","往下傾斜 → 衰退","📉|衰退"],
["collapse","v./n.","倒塌；崩潰；瓦解",[
 ["The old bridge collapsed during the earthquake.","那座舊橋在地震時倒塌了。","collapse 是不及物動詞，沒有被動。"],
 ["Had the building been stronger, it wouldn't have collapsed.","要是那棟建築更堅固，就不會倒塌了。","Had the building been = If the building had been。"],
 ["The collapse of the Soviet Union changed the world.","蘇聯的解體改變了世界。","the collapse of + 名詞 表示「……的崩潰、瓦解」。"]],
 "col-=一起|lapse=滑落","整個一起滑落下來 → 倒塌","🧱|倒塌"],
/* ---------- 字根 tain / ten（握、保持） ---------- */
["contain","v.","包含；容納；抑制",[
 ["This drink contains a lot of sugar.","這杯飲料含有大量的糖。","contain 表示狀態，不用進行式。"],
 ["Had I known that the box contained glass, I would have been more careful.","要是我早知道箱子裡有玻璃，我就會更小心。","Had I known = If I had known。"],
 ["She could hardly contain her excitement.","她幾乎掩飾不住興奮。","contain 也可以表示「抑制（情緒）」；hardly 表示「幾乎不」。"]],
 "con-=一起|tain=握住","把東西握在一起 → 包含","📦|包含"],
["container","n.","容器；貨櫃",[
 ["Put the leftovers in a plastic container.","把剩菜放進塑膠容器裡。","leftovers 表示「剩菜」，常用複數。"],
 ["If we used glass containers, we would produce less waste.","如果我們使用玻璃容器，就會製造更少垃圾。","與現在事實相反的假設；waste 不可數，用 less。"],
 ["Huge containers are loaded onto ships at Kaohsiung Port.","巨大的貨櫃在高雄港被裝上船。","are loaded 是現在式被動語態。"]],
 "con-=一起|tain=握住|-er=物品","把東西握在一起的物品 → 容器","@container"],
["obtain","v.","獲得；取得",[
 ["You need to obtain permission before using the photos.","使用這些照片前，你需要取得許可。","obtain 比 get 正式，常用在書面語。"],
 ["Had he obtained a visa, he could have traveled to the U.S.","要是他當時拿到簽證，就能去美國旅行了。","Had he obtained = If he had obtained；could have p.p. 表示「本來可以」。"],
 ["Without the data obtained from the survey, we couldn't finish the report.","要是沒有從調查中取得的資料，我們無法完成報告。","obtained from ... 是過去分詞片語修飾 the data；Without + 名詞 表示與現在相反。"]],
 "ob-=朝向|tain=握住","朝著目標伸手握住 → 獲得","🤲|獲得"],
["retain","v.","保留；保持；記住",[
 ["Our school still retains many old traditions.","我們學校仍保留許多老傳統。","retain 比 keep 正式。"],
 ["If the town had retained its old buildings, it would attract more tourists now.","如果這個鎮當初保留了老建築，現在就會吸引更多遊客。","混合假設：過去的決定（had retained）影響現在（would attract ... now）。"],
 ["Reviewing notes helps students retain what they learn.","複習筆記幫助學生記住所學。","retain 也可以表示「記住」；what they learn 是名詞子句當受詞。"]],
 "re-=往回|tain=握住","往回握住不放 → 保留","🔐|保留"],
["maintain","v.","維持；保養",[
 ["It is important to maintain a balance between study and rest.","在讀書和休息之間保持平衡很重要。","虛主詞 It 代替 to maintain ...；a balance between A and B。"],
 ["If the bridge had been maintained properly, it would still be standing today.","如果那座橋有被好好保養，今天應該還屹立著。","混合假設搭配被動：had been maintained（過去）→ would still be standing today（現在）。"],
 ["It's high time you maintained your scooter; it's making strange noises.","你早該保養你的機車了，它一直發出奇怪的聲音。","It's high time + 主詞 + 過去式（maintained）。"]],
 "main=手|tain=握住","用手緊緊握住 → 維持","🔧|保養"],
["sustain","v.","維持；支撐；遭受",[
 ["Water and food are needed to sustain life.","維持生命需要水和食物。","are needed 是被動；to sustain life 表示目的。"],
 ["Without the support of his fans, the singer couldn't have sustained his career.","要是沒有歌迷的支持，那位歌手不可能維持他的事業。","Without + 名詞 搭配 couldn't have p.p.，表示與過去相反。"],
 ["The team sustained a heavy loss in the final game.","球隊在最後一場比賽中遭受重大損失。","sustain 也表示「遭受（損失、傷害）」。"]],
 "sus-=在下面|tain=握住","從下面撐住 → 支撐、維持","🌱|維持"],
["tenant","n.","房客；承租人",[
 ["The tenant pays the rent on the first day of each month.","房客每月第一天付房租。","on + 特定日期；rent 是「房租」。"],
 ["If I were the tenant, I would ask the landlord to fix the window.","如果我是房客，我會要求房東修窗戶。","landlord（房東）和 tenant（房客）是一對；ask 人 to V。"],
 ["The tenants complained as if the noise were the landlord's fault.","房客們抱怨得好像噪音是房東的錯。","as if + were 表示與事實相反。"]],
 "ten=握住、持有|-ant=人","持有（租下）房子的人 → 房客","🏠|房客"],
["continent","n.","大陸；洲",[
 ["Asia is the largest continent in the world.","亞洲是世界上最大的洲。","the + 最高級 + in + 範圍。"],
 ["If the continents hadn't drifted apart, we could walk to every country now.","如果各大洲當初沒有分開，我們現在就能走路到每個國家了。","混合假設：過去（hadn't drifted）影響現在（could walk ... now）。"],
 ["Australia is both a country and a continent.","澳洲既是一個國家，也是一個洲。","both A and B 表示「A 和 B 兩者都」。"]],
 "con-=一起|tin=握住|-ent=名詞字尾","緊緊連在一起的陸地 → 大陸","@continent"],
["continuous","adj.","連續不斷的",[
 ["We had three days of continuous rain.","我們連續下了三天雨。","continuous 修飾名詞 rain。"],
 ["If there weren't continuous noise from the construction site, I could focus better.","如果工地沒有不斷傳來噪音，我就能更專心。","與現在事實相反：If there weren't ...，主要子句 could + 原形動詞。"],
 ["Learning is a continuous process.","學習是一個持續的過程。","動名詞 Learning 當主詞。"]],
 "con-=一起|tinu=握住|-ous=形容詞字尾","一直握在一起不中斷 → 連續的","🔁|連續"],
/* ---------- 字根 spir（呼吸） ---------- */
["spirit","n.","精神；心情；靈魂",[
 ["Team spirit helped us win the game.","團隊精神幫助我們贏得比賽。","help + 人 + 原形動詞。"],
 ["If it weren't for her positive spirit, we would have given up last month.","要不是她積極的精神，我們上個月就放棄了。","If it were not for（一直存在的狀況）搭配 would have p.p.（過去的結果），是混合用法。"],
 ["The children were in high spirits on the first day of vacation.","放假第一天孩子們興高采烈。","in high spirits 表示「興高采烈」，spirits 用複數。"]],
 "spir=呼吸|-it=名詞字尾","生命的氣息 → 精神","✨|精神"],
["spiritual","adj.","心靈的；精神上的",[
 ["Reading gives me spiritual comfort.","閱讀帶給我心靈上的安慰。","give + 人 + 物。"],
 ["Without spiritual support, the soldiers would have lost hope.","要是沒有精神上的支持，士兵們早就失去希望了。","Without + 名詞 搭配 would have p.p.，表示與過去相反。"],
 ["After the trip, she felt as if she had gone through a spiritual journey.","旅行結束後，她覺得自己好像經歷了一場心靈之旅。","as if + had p.p.：經歷發生在 felt 之前。"]],
 "spirit=精神|-ual=形容詞字尾","精神上的 → 心靈的","🕊️|心靈"],
["inspiration","n.","靈感；啟發",[
 ["Nature is a great source of inspiration for artists.","大自然是藝術家很棒的靈感來源。","a source of + 名詞 表示「……的來源」。"],
 ["Had it not been for her teacher's inspiration, she would never have become a writer.","要不是老師的啟發，她永遠不會成為作家。","Had it not been for = If it had not been for。"],
 ["I wish I had more inspiration for my essay.","我真希望寫作文時有更多靈感。","I wish + 過去式（had）表示與現在事實相反。"]],
 "in-=進入|spir=呼吸|-ation=名詞字尾","把新的氣息吸進心裡 → 靈感","🌟|靈感"],
["aspire","v.","渴望；立志",[
 ["Many young people aspire to become engineers.","許多年輕人立志成為工程師。","aspire to V 表示「渴望、立志做……」。"],
 ["If I hadn't met that doctor, I wouldn't aspire to study medicine now.","要不是遇到那位醫生，我現在不會立志學醫。","混合假設：過去（hadn't met）影響現在（wouldn't aspire ... now）。"],
 ["Those who aspire to greatness must work hard.","渴望偉大成就的人必須努力。","aspire to + 名詞 也可以；Those who 表示「……的人」。"]],
 "a-=朝向|spire=呼吸","朝著目標喘著氣追求 → 渴望","🚀|立志"],
["aspiration","n.","志向；抱負",[
 ["Her aspiration is to work for the United Nations.","她的志向是到聯合國工作。","to work ... 是不定詞當主詞補語。"],
 ["If only I had clear aspirations like my brother!","要是我像哥哥一樣有明確的志向就好了！","If only + 過去式（had）表示對現在的強烈願望。"],
 ["Parents should respect their children's aspirations.","父母應該尊重孩子的志向。","children's 是複數名詞的所有格。"]],
 "a-=朝向|spir=呼吸|-ation=名詞字尾","aspire（渴望）的名詞 → 志向","🎯|志向"],
["expire","v.","到期；過期",[
 ["My passport expires next month.","我的護照下個月到期。","expire 是不及物動詞。"],
 ["Had I checked the date, I wouldn't have drunk the expired milk.","要是我當時有看日期，就不會喝到過期的牛奶了。","expired 當形容詞表示「過期的」；drink 的過去分詞是 drunk。"],
 ["It's time you renewed your student ID card; it has expired.","你該更新學生證了，它已經過期了。","It's time + 主詞 + 過去式（renewed）。"]],
 "ex-=向外|pire=呼吸","吐出最後一口氣 → 到期（spir 的 s 併進 ex 裡）","⌛|到期"],
["perspire","v.","流汗",[
 ["I always perspire a lot when I'm nervous.","我緊張時總是流很多汗。","perspire 比 sweat 正式。"],
 ["If it weren't so humid, I wouldn't perspire so much.","如果沒那麼潮濕，我就不會流那麼多汗。","與現在事實相反的假設。"],
 ["Perspiring heavily, the runner crossed the finish line.","跑者滿身大汗地衝過終點線。","分詞構句：Perspiring heavily = While he was perspiring heavily。"]],
 "per-=穿過|spire=呼吸","透過皮膚呼吸 → 流汗","@perspire"],
["conspire","v.","密謀；（事情）湊在一起",[
 ["The two men conspired to rob the bank.","那兩個男人密謀搶銀行。","conspire to V 表示「密謀做……」。"],
 ["If they hadn't conspired against the king, they wouldn't have been put in prison.","要是他們沒有密謀反抗國王，就不會被關進監獄了。","conspire against + 人；wouldn't have been p.p. 是被動。"],
 ["It felt as if everything had conspired to make me late.","感覺好像所有事情都串通好要讓我遲到。","as if + had p.p.；conspire 也可以形容事情「湊巧一起」造成某結果。"]],
 "con-=一起|spire=呼吸","一起呼吸、湊在一起說悄悄話 → 密謀","🤫|密謀"],
/* ---------- 字根 clud / clus（關閉） ---------- */
["conclusion","n.","結論；結尾",[
 ["What conclusion did you reach after the experiment?","實驗後你得出什麼結論？","reach / come to a conclusion 表示「得出結論」。"],
 ["Don't jump to conclusions as if you knew everything.","別一副什麼都懂的樣子就妄下結論。","jump to conclusions 表示「妄下結論」；as if + 過去式（knew）。"],
 ["Had we collected more data, we could have reached a different conclusion.","要是我們收集了更多資料，可能會得到不同的結論。","Had we collected = If we had collected。"]],
 "con-=完全|clus=關閉|-ion=名詞字尾","把討論完全關上 → 結論","🏁|結論"],
["exclusive","adj.","獨家的；專屬的；排外的",[
 ["This hotel offers exclusive services to its members.","這家飯店提供會員專屬服務。","offer A to B 表示「提供 A 給 B」。"],
 ["The magazine got an exclusive interview with the singer.","那本雜誌取得了那位歌手的獨家專訪。","exclusive 開頭是母音，所以用 an。"],
 ["If the club weren't so exclusive, more students would join it.","如果那個社團沒那麼排外，會有更多學生加入。","exclusive 也可以表示「排外的、只限少數人的」；與現在事實相反的假設。"]],
 "ex-=向外|clus=關閉|-ive=形容詞字尾","把別人關在外面 → 專屬的","🎟️|專屬"],
["inclusive","adj.","包容的；包含在內的",[
 ["Our school wants to create an inclusive environment for all students.","我們學校希望為所有學生營造包容的環境。","inclusive 開頭是母音，所以用 an。"],
 ["The price is NT$3,000, inclusive of tax.","價格是新台幣三千元，含稅。","inclusive of 表示「包含……在內」。"],
 ["If our society were more inclusive, people with disabilities would feel more welcome.","如果我們的社會更包容，身心障礙者會覺得更受歡迎。","與現在事實相反的假設。"]],
 "in-=在裡面|clus=關閉|-ive=形容詞字尾","把大家都關在圈內 → 包容的","🤝|包容"],
["secluded","adj.","僻靜的；隱蔽的",[
 ["We found a secluded beach far from the crowds.","我們找到一處遠離人潮的僻靜海灘。","far from 表示「遠離」。"],
 ["If I lived in a secluded village, I would read all day.","如果我住在偏僻的村子裡，我會整天看書。","與現在事實相反的假設。"],
 ["Secluded in the mountains, the temple is hard to find.","這座寺廟隱身山中，很難找到。","過去分詞開頭的分詞構句：= Because it is secluded in the mountains。"]],
 "se-=分開|clud=關閉|-ed=形容詞字尾","被分開關起來的 → 僻靜的","🏝️|僻靜"],
["enclose","v.","圍住；（隨信）附上",[
 ["The garden is enclosed by a high wall.","花園被高牆圍住。","is enclosed by 是被動語態。"],
 ["I have enclosed a photo with this letter.","我在這封信裡附上了一張照片。","enclose 也可以表示「（在信中）附上」。"],
 ["Had the farmer enclosed the field, the sheep wouldn't have escaped.","要是農夫當時把田地圍起來，羊就不會跑掉了。","Had the farmer enclosed = If the farmer had enclosed。"]],
 "en-=在裡面|close=關閉","關在裡面 → 圍住","⭕|圍住"],
["disclose","v.","揭露；透露",[
 ["The company refused to disclose the details.","公司拒絕透露細節。","refuse to V 表示「拒絕做某事」。"],
 ["Had the reporter not disclosed the truth, the public would never have known.","要是那名記者沒有揭露真相，大眾永遠不會知道。","倒裝的否定：Had + 主詞 + not + p.p.。"],
 ["I wish you hadn't disclosed my secret to everyone.","我真希望你當時沒有把我的祕密告訴大家。","I wish + had p.p. 表示對過去的遺憾。"]],
 "dis-=相反|close=關閉","關閉的相反 → 打開 → 揭露","📰|揭露"],
["closure","n.","關閉；了結",[
 ["The closure of the factory caused many people to lose their jobs.","工廠關閉讓許多人失業。","cause + 人 + to V 表示「導致某人……」。"],
 ["If the road closure had been announced earlier, we wouldn't have been stuck in traffic.","要是封路的消息早點宣布，我們就不會塞在車陣中了。","與過去事實相反的假設；be stuck in traffic 表示「塞車」。"],
 ["After talking with his old friend, he finally found closure.","和老朋友談過後，他終於放下心中的結。","find closure 表示「讓一件事在心裡畫下句點」。"]],
 "clos=關閉|-ure=名詞字尾","關閉的動作 → 關閉、了結","🚫|關閉"],
/* ---------- 字根 flu / flux（流） ---------- */
["fluent","adj.","流利的",[
 ["She is fluent in English and Japanese.","她英文和日文都很流利。","be fluent in + 語言。"],
 ["If I were fluent in English, I would apply to study abroad.","如果我英文流利，我就會申請出國念書。","與現在事實相反的假設。"],
 ["I wish I had practiced speaking more; then I would be fluent now.","我真希望當時多練習口說，那我現在就會很流利了。","I wish + had p.p. 表示對過去的遺憾；then 後面接混合假設的結果（would be ... now）。"]],
 "flu=流|-ent=形容詞字尾","說話像水一樣流動 → 流利的","🗣️|流利"],
["fluency","n.","流利；流暢度",[
 ["Reading aloud can improve your fluency.","大聲朗讀可以提升你的流利度。","read aloud 表示「大聲朗讀」。"],
 ["Without daily practice, he couldn't have achieved such fluency.","沒有每天練習，他不可能達到這種流利程度。","Without + 名詞 搭配 couldn't have p.p.，表示與過去相反。"],
 ["Fluency comes with practice, not with luck.","流利是靠練習，而不是靠運氣。","come with + 名詞 表示「隨……而來」。"]],
 "flu=流|-ency=名詞字尾","fluent（流利的）的名詞 → 流利度","🎙️|流利度"],
["fluid","n./adj.","液體；流動的；易變的",[
 ["Drink plenty of fluids when you have a fever.","發燒時要多補充水分。","fluids 指各種液體，例如水、湯、果汁。"],
 ["The situation is still fluid, so the plan may change.","情勢仍在變動中，所以計畫可能會改變。","fluid 當形容詞表示「不固定的、易變的」。"],
 ["Should you feel dizzy, sit down and drink some fluids.","萬一你覺得頭暈，就坐下來喝點水。","Should you feel = If you should feel；主要子句可以是祈使句。"]],
 "flu=流|-id=形容詞字尾","會流動的 → 液體","💧|液體"],
["influential","adj.","有影響力的",[
 ["He is one of the most influential writers in Taiwan.","他是台灣最有影響力的作家之一。","one of the + 最高級 + 複數名詞。"],
 ["Had she not been so influential, the law would not have been changed.","要不是她這麼有影響力，法律就不會被修改。","Had she not been = If she had not been；would not have been p.p. 是被動。"],
 ["If I were an influential person, I would speak up for animals.","如果我是有影響力的人，我會為動物發聲。","speak up for 表示「為……發聲」。"]],
 "in-=進入|flu=流|-ential=形容詞字尾","力量流進別人心裡的 → 有影響力的","🌐|影響力"],
["fluctuate","v.","波動；起伏",[
 ["Vegetable prices fluctuate from season to season.","菜價隨季節波動。","from season to season 表示「隨季節（而不同）」。"],
 ["If the temperature didn't fluctuate so much, fewer people would catch colds.","如果氣溫沒有起伏那麼大，就會比較少人感冒。","與現在事實相反的假設；fewer 修飾可數名詞 people。"],
 ["Her mood fluctuated as if she were on a roller coaster.","她的情緒起伏，好像在坐雲霄飛車。","as if + were 表示與事實相反。"]],
 "fluct=波浪、流動|-uate=動詞字尾","像波浪一樣流動起伏 → 波動","🎢|波動"],
["affluent","adj.","富裕的",[
 ["He grew up in an affluent family.","他在富裕的家庭長大。","grow up 的過去式是 grew up。"],
 ["If our country were more affluent, it could provide better welfare.","如果我們的國家更富裕，就能提供更好的福利。","與現在事實相反的假設，主要子句 could + 原形動詞。"],
 ["Even in affluent societies, some people still live in poverty.","即使在富裕的社會，仍有些人生活貧困。","live in poverty 表示「生活貧困」。"]],
 "af-=朝向|flu=流|-ent=形容詞字尾","財富源源不絕流向你 → 富裕的","💰|富裕"],
["influx","n.","湧入",[
 ["The city saw an influx of tourists during the holidays.","假期期間，這座城市湧入大量遊客。","an influx of + 名詞 表示「……的湧入」；see 在這裡表示「經歷」。"],
 ["Without the influx of new workers, the factory would have closed.","要是沒有新工人的湧入，那間工廠早就關門了。","Without + 名詞 搭配 would have p.p.，表示與過去相反。"],
 ["The sudden influx of refugees put pressure on the small town.","難民突然湧入，給小鎮帶來壓力。","put pressure on 表示「對……施壓」。"]],
 "in-=進入|flux=流","流進來 → 湧入","🌊|湧入"]
];

/* 沒有字根拆解的字：記憶小撇步 */
Object.assign(MEMO, {
  abandon: "abandon 可以這樣聯想：a + band（綁）+ on → 把綁在身上的東西解開丟掉 → 放棄、拋棄。它是及物動詞，後面直接接受詞：abandon a plan。",
  settle: "settle 和 seat（座位）、sit（坐）是遠親：找到位子坐下來 → 定居、安定；把吵鬧的事情擺平 → 解決。settle down 是「安定下來」。",
  destiny: "destiny 和 destination（目的地）是一家人：人生最後要到達的目的地，就是命運。be destined to V 表示「注定要……」。",
  fate: "fate 和 fat 只差一個 e。fate 偏「無法改變的宿命」，常帶負面感覺；destiny 偏「注定要完成的使命」。形容詞 fatal 是「致命的」。",
  risk: "risk 和 brisk（輕快的）只差一個 b。動詞 risk + V-ing（冒險做……），名詞 take a risk（冒險）。形容詞是 risky（有風險的）。",
  bold: "bold 和 old 只差一個 b。電腦上的 bold 是「粗體字」：粗粗黑黑、很敢出現在大家眼前 → 大膽的。",
  guilt: "guilt 的 u 不發音，唸作 /gɪlt/。形容詞是 guilty（內疚的、有罪的），a sense of guilt 是「罪惡感」。",
  cope: "cope 幾乎都和 with 綁在一起：cope with + 問題或壓力。可以聯想 cop（警察）：警察每天都要 cope with 各種狀況。",
  soothe: "soothe 唸作 /suð/，th 發有聲的 /ð/。可以聯想 smooth（平滑）：把起伏的情緒撫平 → 安撫。soothing music 是「舒緩的音樂」。",
  therapy: "therapy 的 th 唸 /θ/。做治療的人叫 therapist。常見搭配：physical therapy（物理治療）、music therapy（音樂治療）。",
  meditate: "meditate 可以聯想 medicine（藥）、medical（醫學的）：冥想是照顧心靈的良藥。名詞是 meditation。",
  temper: "temper 記片語最實用：lose one's temper（發脾氣）、keep one's temper（忍住脾氣）。聯想 temperature（溫度）：脾氣也有溫度，一下就飆高！",
  mood: "mood 和 food 押韻：吃到好吃的 food，mood 就變好！be in the mood for + 名詞 表示「有心情做……」。",
  panic: "panic 來自希臘神話的牧神 Pan，傳說他一大叫就讓人陷入恐慌。變化要加 k：panic → panicked → panicking。",
  envy: "envy 偏「羨慕」，jealous 偏「嫉妒、怕被搶走」。英文說 green with envy（羨慕得眼紅），所以羨慕是綠色的！形容詞是 envious。",
  grief: "grief 是名詞，動詞是 grieve（悲傷）。拼字記 i 在 e 前面：grief、belief、brief 都是 ie。",
  empire: "empire 和 emperor（皇帝）是一家人：emperor 統治的國家就是 empire。形容詞是 imperial（帝國的）。",
  dynasty: "dynasty 和 dynamic（有活力的）、dynamite（炸藥）同源，dyna 是「力量」：掌握力量、代代相傳的統治家族 → 朝代。",
  colony: "colony 和 cultivate（耕種）同源：一群人跑到新土地上耕種定居 → 殖民地。動詞 colonize（殖民），colonial 是「殖民的」。",
  era: "era 很短卻很好用：a new era（新時代）、the digital era（數位時代）。和 age 意思相近，但 era 常指有特色的一段歷史。",
  battle: "battle 可以聯想 bat（球棒）和 beat（打）：拿著球棒用力打 → 戰鬥。battlefield 是「戰場」。",
  emperor: "emperor 是男性皇帝，女皇帝是 empress；他們統治的是 empire（帝國）。注意拼字是 -or 結尾。"
});

const S2_1_2_GRAMMAR = [
{ id:"g1", title:"混合假設語氣",
  intro:"混合假設就是 If 子句和主要子句「各管各的時間」：前半句和過去相反、後半句和現在相反，或反過來。祕訣是兩半句分開判斷時間。",
  table:[["類型","If 子句","主要子句","例句"],["過去影響現在","If + had + p.p.（與過去相反）","would / could / might + 原形動詞（與現在相反）","If I had studied harder, I would be in college now."],["現在狀態影響過去","If + 過去式／were（與現在相反）","would / could / might + have + p.p.（與過去相反）","If I were taller, I would have made the team last year."],["對照：純過去","If + had + p.p.","would have + p.p.","If I had studied, I would have passed."]],
  points:[
   "兩半句分開看：哪一半在說過去（yesterday、last year、ago），哪一半在說現在（now、today、still）。",
   "過去影響現在：If I had taken his advice, I wouldn't be in trouble now.（當時沒聽，現在才有麻煩）",
   "現在影響過去：If he weren't so reckless, he wouldn't have had the accident.（他一向魯莽，所以出了車禍）",
   "學測陷阱：看到 now / today 就不能用 would have p.p.；If I had gone to bed early, I would not be tired now.",
   "would have 後面不一定是 p.p.：I would have different dreams now 的 have 是「擁有」，是 would + 原形動詞。",
   "情緒或能力也能放進主要子句：could（能夠）、might（或許）都可以代替 would。"],
  ex:[
   ["If I had chosen the alternative plan, I would be in Tainan now.","如果我當初選了另一個方案，現在就會在台南了。","過去影響現在：had chosen → would be ... now。"],
   ["If he weren't so reckless, he wouldn't have broken his leg last week.","如果他沒那麼魯莽，上週就不會摔斷腿了。","現在的個性影響過去：weren't → wouldn't have broken。"],
   ["If I hadn't ignored the warning, I wouldn't be in trouble now.","要是我當時沒有忽視那個警告，現在就不會有麻煩了。","過去影響現在。"],
   ["If I were more cautious, I wouldn't have lost my wallet yesterday.","如果我更謹慎一點，昨天就不會弄丟錢包了。","現在影響過去：yesterday 是關鍵線索。"],
   ["If the empire hadn't fallen, Europe would look very different today.","如果那個帝國沒有滅亡，歐洲今天看起來會很不一樣。","today 是關鍵線索，主要子句用 would + 原形動詞。"]]},
{ id:"g2", title:"省略 if 的倒裝假設：Had I known / Were I / Should you",
  intro:"假設語氣的 If 子句裡如果有 had、were、should，就可以把 if 拿掉，再把這三個字搬到主詞前面，句子立刻變得正式又有氣勢。",
  table:[["原句","倒裝句","用途"],["If I had known ...","Had I known ...","與過去事實相反"],["If I were you ...","Were I you ...","與現在事實相反"],["If you should need help ...","Should you need help ...","未來不太可能發生（萬一）"],["If it were not for ...","Were it not for ...","要不是有……（現在）"],["If it had not been for ...","Had it not been for ...","要不是有……（過去）"]],
  points:[
   "只有 had、were、should 可以倒裝：If I knew → 不能寫成 Did I know（一般動詞不能倒裝）。",
   "否定的倒裝把 not 留在主詞後面：Had I not seen it ...，不能寫成 Hadn't I seen it ...。",
   "Should 開頭表示「萬一」，主要子句可以用 will、would 或祈使句：Should you need help, call me.",
   "Were + 主詞 + to V 表示未來不太可能的假設：Were it to rain tomorrow, the game would be canceled.",
   "學測陷阱：Had the general had more troops ... 第一個 had 是倒裝的助動詞，第二個 had 是「擁有」的過去分詞，兩個都要。",
   "倒裝句的主要子句不變：Had I known = If I had known，後面照樣用 would have + p.p.。"],
  ex:[
   ["Had I known about the dilemma earlier, I would have asked my teacher for advice.","要是我早點知道這個兩難的處境，我就會去請教老師了。","Had I known = If I had known。"],
   ["Were I a counselor, I would listen more than I talk.","如果我是輔導老師，我會多聽少說。","Were I = If I were。"],
   ["Should a fire break out, don't panic and use the stairs.","萬一發生火災，別驚慌，走樓梯。","Should 表示「萬一」，主要子句是祈使句。"],
   ["Had the soldiers not surrendered, many more lives would have been lost.","要是士兵們當時沒有投降，會有更多人喪命。","否定倒裝：Had + 主詞 + not + p.p.。"],
   ["Were it not for my friends, my anxiety would be much worse.","要不是有朋友們，我的焦慮會嚴重得多。","Were it not for = If it were not for。"]]},
{ id:"g3", title:"wish / as if / as though / if only 的時態對照",
  intro:"wish、if only、as if、as though 後面接「不是事實」的內容時，動詞也要往過去退一格；但如果說的是可能為真的事，就用一般時態。",
  table:[["句型","與現在相反","與過去相反","希望未來／別人改變"],["I wish ...","I wish I were taller.","I wish I had studied harder.","I wish he would stop talking."],["If only ...","If only I knew the answer!","If only I had listened!","If only it would stop raining!"],["as if / as though ...","He talks as if he knew everything.","She looks as if she had seen a ghost.","（可能為真）It looks as if it is going to rain."]],
  points:[
   "wish + 過去式（be 動詞用 were）：和現在事實相反。I wish I were rich.",
   "wish + had p.p.：對過去的遺憾。I wish I hadn't said that.",
   "wish + 人 + would V：希望別人改變行為，常帶抱怨。I wish you would be quiet.",
   "if only 的時態和 wish 一樣，但語氣更強烈，常加驚嘆號。",
   "as if / as though：與事實相反時退一格；可能是真的時就用一般時態：It looks as if it is going to rain.",
   "學測陷阱：wish 和 hope 不一樣！可能實現的願望用 hope：I hope you can come.（不能說 I wish you can come）"],
  ex:[
   ["I wish I were as bold as my sister.","我真希望我和姊姊一樣大膽。","wish + were：和現在相反。"],
   ["I wish I hadn't declined the invitation.","我真希望當時沒有婉拒那個邀請。","wish + had p.p.：對過去的遺憾。"],
   ["I wish he would control his temper.","我真希望他能控制自己的脾氣。","wish + 人 + would V：希望別人改變。"],
   ["If only I had controlled my impulse to shout at her!","要是我當時控制住對她大吼的衝動就好了！","If only + had p.p.：強烈的遺憾。"],
   ["He talks as if fate had decided everything for him.","他說得好像命運早就替他決定好一切似的。","as if + had p.p.：與過去事實相反。"]]},
{ id:"g4", title:"It's (high) time + 過去式；but for / without + N",
  intro:"It's time + 過去式 用來說「早該做卻還沒做」；but for / without + 名詞 則是不用 if 的假設語氣，意思是「要不是有……」「要是沒有……」。",
  table:[["句型","意思","例句"],["It's time (that) + S + 過去式","該是……的時候了","It's time we went home."],["It's high / about time + S + 過去式","早就該……了（語氣更強）","It's high time you cleaned your room."],["It's time for 人 + to V","該是某人做……的時候","It's time for us to go home."],["But for / Without + N（現在）","= If it were not for + N","Without water, we couldn't live."],["But for / Without + N（過去）","= If it had not been for + N","But for your help, I would have failed."]],
  points:[
   "It's time + 主詞 + 過去式：It's time we went home.（不是 go）；也可以說 It's time we should go home.",
   "加上 high 或 about 表示「早就該……了」，常帶催促或不滿的語氣。",
   "不想用子句時，改成 It's time for 人 + to V：It's time for you to sleep.",
   "but for 和 without 後面只能接名詞（或動名詞），不能接子句。",
   "時間看主要子句：would + 原形動詞 → 與現在相反（= If it were not for）；would have p.p. → 與過去相反（= If it had not been for）。",
   "連結倒裝：If it were not for = Were it not for；If it had not been for = Had it not been for。"],
  ex:[
   ["It's high time the city abandoned its old plan.","這座城市早該放棄舊計畫了。","It's high time + 過去式（abandoned）。"],
   ["It's time we learned better ways to cope with anger.","我們該學習更好的方式來處理怒氣了。","It's time + 過去式（learned）。"],
   ["But for his guilt, he would sleep well at night.","要不是有罪惡感，他晚上就能睡得好。","would sleep → 與現在相反 = If it were not for his guilt。"],
   ["But for the heavy rain, the army would not have been defeated.","要不是那場大雨，軍隊就不會被打敗了。","would not have been p.p. → 與過去相反 = If it had not been for the heavy rain。"],
   ["Without writing, human civilization could not have developed so fast.","要是沒有文字，人類文明不可能發展得這麼快。","Without + 名詞，搭配 could not have p.p.。"]]}
];

const S2_1_2_QUIZ = [
 ["If I had taken my teacher's advice, I ___ a college student now.",["will be","would have been","would be","had been"],2,"If 子句與過去相反（had taken），但主要子句有 now，是與現在相反，用 would + 原形動詞：would be。","g1"],
 ["If Tom were more cautious, he ___ his phone on the MRT yesterday.",["wouldn't lose","wouldn't have lost","won't lose","hadn't lost"],1,"If 子句說的是 Tom 一向不謹慎（現在），主要子句有 yesterday，與過去相反，用 wouldn't have + p.p.。","g1"],
 ["If she ___ abroad ten years ago, she would speak fluent French now.",["had gone","went","goes","would go"],0,"ten years ago 是過去，If 子句用 had + p.p.；主要子句 would speak ... now 與現在相反，是混合假設。","g1"],
 ["If I ___ afraid of heights, I would have joined you on the hike last weekend.",["am not","won't be","don't","weren't"],3,"怕高是一直存在的狀態（現在），If 子句用過去式，be 動詞用 were；主要子句與過去相反。","g1"],
 ["If the explorers hadn't found this island, we ___ here today.",["wouldn't live","wouldn't have lived","won't live","didn't live"],0,"過去（hadn't found）影響現在（today），主要子句用 would + 原形動詞。","g1"],
 ["I didn't eat breakfast this morning, so I'm hungry now. → If I ___ breakfast this morning, I wouldn't be hungry now.",["ate","had eaten","have eaten","eat"],1,"早餐是過去沒吃，If 子句用 had + p.p.；現在餓，主要子句用 wouldn't be。","g1"],
 ["He is not a careful driver, so he had an accident last night. → If he ___ a careful driver, he wouldn't have had an accident last night.",["is","will be","would be","were"],3,"「不是小心的駕駛」是他一貫的狀態（現在），If 子句用 were；主要子句與過去相反。","g1"],
 ["「如果我當年選了理組，現在就是工程師了。」最正確的英文是？",["If I chose science, I would be an engineer now.","If I chose science, I would have been an engineer now.","If I had chosen science, I would be an engineer now.","If I had chosen science, I would have been an engineer now."],2,"「當年選」是過去 → had chosen；「現在是工程師」是現在 → would be ... now。","g1"],
 ["If our ancestors hadn't protected the forest, there ___ so many birds here now.",["wouldn't have been","won't be","aren't","wouldn't be"],3,"看到 now，主要子句要和現在相反：wouldn't be。","g1"],
 ["___ I known the truth, I would have told you.",["Had","Have","If","Should"],0,"省略 if 的倒裝：Had I known = If I had known。用 If 的話要寫 If I had known。","g2"],
 ["___ I you, I would accept the offer.",["Was","Am","Were","Had"],2,"Were I you = If I were you，倒裝只能用 were，不能用 was。","g2"],
 ["___ you need any help, please call me.",["Had","Were","Did","Should"],3,"Should you need = If you should need，表示「萬一」，主要子句可以是祈使句。","g2"],
 ["___ it not been for your help, I would have failed.",["Were","Had","Should","Without"],1,"Had it not been for = If it had not been for，主要子句 would have failed 是過去。","g2"],
 ["___ it not for water, nothing could live on Earth.",["Were","Had","Should","Was"],0,"Were it not for = If it were not for，主要子句 could live 是與現在相反。","g2"],
 ["If he had not lied, he wouldn't have been punished. = ___, he wouldn't have been punished.",["Hadn't he lied","Had he not lied","Had not he lied","Did he not lie"],1,"否定的倒裝：Had + 主詞 + not + p.p.，not 不能和 had 縮寫放在主詞前面。","g2"],
 ["If you should see Amy, tell her to call me. = ___ Amy, tell her to call me.",["Were you see","Had you seen","Should you see","Do you see"],2,"If you should see = Should you see。","g2"],
 ["If it were to rain tomorrow, the game would be canceled. = ___ to rain tomorrow, the game would be canceled.",["Had it","Did it","Was it","Were it"],3,"If it were to V = Were it to V；正式的假設語氣用 were，不用 was。","g2"],
 ["Had the general ___ more troops, he might have won the battle.",["has","have","had","having"],2,"= If the general had had more troops。第一個 Had 是倒裝的助動詞，第二個 had 是 have（擁有）的過去分詞。","g2"],
 ["I wish I ___ taller. I can't reach the top shelf.",["am","were","had been","will be"],1,"現在搆不到，是與現在事實相反的願望：wish + were。","g3"],
 ["I wish I ___ harder last semester. My grades were terrible.",["studied","study","had studied","would study"],2,"last semester 是過去，對過去的遺憾用 wish + had p.p.。","g3"],
 ["He talks as if he ___ everything, but actually he knows little.",["knew","knows","had known","will know"],0,"他其實懂得很少，與現在事實相反，as if + 過去式 knew。","g3"],
 ["She looked pale, as though she ___ a ghost.",["saw","has seen","sees","had seen"],3,"「看到鬼」比「臉色蒼白」更早，而且並非事實，用 as though + had p.p.。","g3"],
 ["If only I ___ a time machine! Then I could go back and fix my mistake.",["have","had","had had","will have"],1,"If only + 過去式，表示與現在事實相反的強烈願望（現在沒有時光機）。","g3"],
 ["I wish my brother ___ playing loud music at night. It's so annoying.",["would stop","stops","stopped","had stopped"],0,"希望別人改變行為、帶抱怨語氣，用 wish + 人 + would V。","g3"],
 ["Look at those dark clouds. It looks as if it ___ rain.",["were going to","had been going to","would have","is going to"],3,"烏雲密布，下雨很可能是真的，as if 後面用一般時態，不必退一格。","g3"],
 ["I ___ you can come to my party next Saturday.",["wish","hope","wished","would wish"],1,"可能實現的願望用 hope；wish 後面要接退一格的時態，不能接 can。","g3"],
 ["If only she ___ to me yesterday! I could have helped her.",["listens","listened","had listened","would listen"],2,"yesterday 是過去，If only + had p.p. 表示對過去的遺憾。","g3"],
 ["It's time we ___ home. It's getting dark.",["went","go","gone","going"],0,"It's time + 主詞 + 過去式：went。","g4"],
 ["It's high time you ___ your room. It's a mess!",["clean","cleaned","will clean","have cleaned"],1,"It's high time + 主詞 + 過去式，表示「早就該做了」。","g4"],
 ["It's time for us ___ to bed.",["go","went","to go","going"],2,"It's time for 人 + to V。注意：有 for 人 時用不定詞，沒有 for 時才接子句。","g4"],
 ["___ your help, I would have failed the test.",["Because of","Thanks to","With","But for"],3,"But for + 名詞 = If it had not been for，表示「要不是有……」。","g4"],
 ["Without the sun, there ___ no life on Earth.",["is","will be","would be","would have been"],2,"太陽現在存在，這是與現在事實相反：Without = If there were no ...，主要子句用 would be。","g4"],
 ["But for the heavy traffic, we ___ on time yesterday.",["would arrive","will arrive","arrived","would have arrived"],3,"yesterday 是過去，But for = If it had not been for，主要子句用 would have p.p.。","g4"],
 ["Without your advice, I would have made a big mistake. = ___ your advice, I would have made a big mistake.",["If it were not for","If it had not been for","If there is no","Unless"],1,"主要子句 would have made 是過去，Without = If it had not been for。","g4"],
 ["But for music, life would be boring. = ___ music, life would be boring.",["If it were not for","If it had not been for","Had it not been for","Unless there is"],0,"主要子句 would be 是現在，But for = If it were not for。","g4"],
 ["Many people are sleeping on the streets. It's about time the government ___ action to help them.",["take","takes","took","taken"],2,"It's about time + 主詞 + 過去式，表示「早該採取行動了」。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S2_1_2_CLASS = {
g1:[
 {say:"高二同學好！上次我們學過假設語氣的基本款，今天要升級成「混合假設」。先暖身：{If I had studied, I would have passed.} 這是和過去相反，兩半句都在說過去。", board:[["If I had studied, I would have passed.",["had studied","would have passed"]]]},
 {say:"可是人生常常是「過去的選擇，影響現在的我」。例如：{If I had chosen science, I would be an engineer now.} 前半句是當年，後半句是現在！", board:[["If I had chosen science, ...",["had chosen"]],["... I would be an engineer now.",["would be","now"]]]},
 {say:"祕訣是：兩半句各管各的時間！前半句和過去相反，用 had 加過去分詞；後半句和現在相反，用 would 加原形動詞。", board:[["If + had p.p.（過去）",["had p.p."]],["would + 原形 + now（現在）",["would","now"]]]},
 {say:"口訣記起來！", chant:"前後分開看時間，過去 had p.p.，現在 would 原形！"},
 {ask:{say:"考考你！", q:"If I had taken his advice, I ___ in trouble now.", opts:["wouldn't have been","wouldn't be"], ans:1,
   ok:"厲害！看到 now，後半句是現在，用 wouldn't be。", bad:{0:"小心！句尾有 now，後半句和現在相反，要用 would + 原形動詞。"},
   again:{q:"If she had gone to bed early, she ___ tired now.", opts:["wouldn't be","wouldn't have been"], ans:0, exp:"now 表示現在，用 wouldn't be。"}}},
 {say:"第二種混合剛好反過來：「我一直以來的個性，害我過去出了事」。{If he weren't so reckless, he wouldn't have had the accident.} 他一向魯莽，所以那天出了車禍。", board:[["If he weren't so reckless, ...",["weren't"]],["... he wouldn't have had the accident.",["wouldn't have had"]]]},
 {say:"前半句是一直存在的狀態，和現在相反，用過去式或 were；後半句是過去的結果，用 would have 加過去分詞。", board:[["If I were more cautious, I wouldn't have lost my wallet yesterday.",["were","wouldn't have lost","yesterday"]]]},
 {ask:{q:"If Tom were more careful, he ___ his phone yesterday.", opts:["wouldn't lose","wouldn't have lost","won't lose"], ans:1,
   ok:"對！yesterday 是過去，後半句用 wouldn't have lost。", bad:{0:"後半句有 yesterday，是和過去相反，要用 would have + p.p.。",2:"假設語氣不能用 will。"},
   again:{q:"If I ___ afraid of dogs, I would have pet that puppy last week.", opts:["weren't","am not"], ans:0, exp:"怕狗是一直存在的狀態，和現在相反，用 weren't。"}}},
 {say:"找時間線索是解題關鍵！看到 now、today、still，後半句就是現在；看到 yesterday、last year、ago，就是過去。", board:[["now / today / still → would + 原形",["now","today","still"]],["yesterday / last year / ago → would have p.p.",["yesterday","last year","ago"]]]},
 {say:"最後一個高手陷阱：{If I had been born in another era, I would have different dreams now.} 這裡的 would have 不是 would have p.p.，have 是「擁有」的意思！看到 now 就知道是混合假設。", board:[["... I would have different dreams now.",["have","now"]]]},
 {ask:{say:"最後一題！", q:"「如果我當年選了理組，現在就是工程師了。」", opts:["If I chose science, I would be an engineer now.","If I had chosen science, I would be an engineer now.","If I had chosen science, I would have been an engineer now."], ans:1,
   ok:"完美！當年用 had chosen，現在用 would be ... now。", bad:{0:"「當年」是過去，前半句要用 had chosen。",2:"後半句有 now，不能用 would have been。"},
   again:{q:"If the empire hadn't fallen, Europe ___ different today.", opts:["would look","would have looked"], ans:0, exp:"today 是現在，用 would + 原形動詞。"}}},
 {say:"混合假設過關！口訣：前後分開看時間，過去用 had p.p.，現在用 would 加原形；看到 now 和 yesterday 就是你的救命線索！", end:true}
],
g2:[
 {say:"今天學一個讓英文變超正式的技巧：省略 if 的倒裝！先看：{If I had known, I would have told you.} 把 if 拿掉，再把 had 搬到主詞前面，就變成：{Had I known, I would have told you.}", board:[["If I had known, I would have told you.",["If","had"]],["Had I known, I would have told you.",["Had"]]]},
 {say:"只有三個字可以這樣搬家：had、were、should！", board:[["If I had known → Had I known",["Had"]],["If I were you → Were I you",["Were"]],["If you should need → Should you need",["Should"]]]},
 {say:"口訣！", chant:"拿掉 if，had、were、should 往前跳！"},
 {ask:{say:"考考你！", q:"___ I you, I would accept the offer.", opts:["Was","Were","Am"], ans:1,
   ok:"讚！Were I you = If I were you。", bad:{0:"假設語氣倒裝要用 were，不能用 was。",2:"這是和現在相反的假設，要往過去退一格，用 Were。"},
   again:{q:"___ I known the truth, I would have told you.", opts:["Had","Have"], ans:0, exp:"Had I known = If I had known。"}}},
 {say:"注意！一般動詞不能倒裝。If I knew the answer 不能寫成 Did I know the answer。只有 had、were、should 有這個特權。", board:[["If I knew the answer, ...",["knew"]],["Did I know the answer, ...",[],true]]},
 {say:"Should 開頭表示「萬一」，是不太可能但還是有機會發生的事，後面可以接祈使句：{Should a fire break out, don't panic.}", board:[["Should a fire break out, don't panic.",["Should"]],["Should you need help, call me.",["Should"]]]},
 {ask:{q:"___ you need any help, please call me.", opts:["Had","Should","Were"], ans:1,
   ok:"對！Should you need = If you should need，表示萬一。", bad:{0:"Had 是用在和過去相反的假設，這裡說的是將來萬一需要。",2:"Were 後面要接名詞、形容詞或 to V，不能直接接 need。"},
   again:{q:"___ there be another outbreak, schools may close.", opts:["Should","Had"], ans:0, exp:"Should there be = If there should be，萬一有……。"}}},
 {say:"否定的倒裝最容易錯！not 要留在主詞後面：{Had I not seen it, I wouldn't have believed it.} 不能說 Hadn't I seen it。", board:[["Had I not seen it, ...",["Had","not"]],["Hadn't I seen it, ...",[],true]]},
 {say:"否定口訣！", chant:"倒裝否定別縮寫，not 跟在主詞後！"},
 {say:"最後是常考的「要不是有……」：{If it were not for} 倒裝成 {Were it not for}，說現在；{If it had not been for} 倒裝成 {Had it not been for}，說過去。", board:[["Were it not for water, nothing could live.",["Were it not for"]],["Had it not been for your help, I would have failed.",["Had it not been for"]]]},
 {ask:{say:"最後一題！", q:"If he had not lied, he wouldn't have been punished. = ___, he wouldn't have been punished.", opts:["Hadn't he lied","Had he not lied","Did he not lie"], ans:1,
   ok:"完美！否定倒裝：Had + 主詞 + not + p.p.。", bad:{0:"倒裝的否定不能縮寫成 Hadn't 放前面喔。",2:"一般動詞不能倒裝，而且這是和過去相反，要用 Had。"},
   again:{q:"Had the general ___ more troops, he might have won.", opts:["had","have"], ans:0, exp:"= If the general had had more troops，第二個 had 是過去分詞。"}}},
 {say:"倒裝假設過關！口訣：拿掉 if，had、were、should 往前跳；倒裝否定別縮寫，not 跟在主詞後！", end:true}
],
g3:[
 {say:"今天來聊「真希望……」和「好像……」。這些句子後面說的常常不是事實，所以動詞也要往過去退一格。先看 wish：{I wish I were taller.} 我現在不高，所以退一格用 were。", board:[["I wish I were taller.",["wish","were"]]]},
 {say:"wish 有三種時間：和現在相反用過去式；和過去相反用 had 加過去分詞；希望別人改變，用 would 加原形動詞。", board:[["I wish I were rich.（現在）",["were"]],["I wish I had studied harder.（過去）",["had studied"]],["I wish he would stop talking.（希望別人改）",["would stop"]]]},
 {say:"口訣來囉！", chant:"wish 退一格：現在用過去，過去用 had p.p.！"},
 {ask:{say:"考考你！", q:"I wish I ___ harder last semester.", opts:["studied","had studied","study"], ans:1,
   ok:"對！last semester 是過去，用 wish + had p.p.。", bad:{0:"studied 是和現在相反；last semester 是過去，要再退一格 had studied。",2:"wish 後面要退一格，不能用現在式。"},
   again:{q:"I wish I ___ taller. I can't reach the shelf.", opts:["am","were"], ans:1, exp:"現在搆不到，和現在相反用 were。"}}},
 {say:"if only 和 wish 時態完全一樣，只是情緒更強烈，像在大喊：{If only I had listened to my mom!} 要是我當時聽媽媽的話就好了！", board:[["If only I had listened to my mom!",["If only","had listened"]]]},
 {say:"小心 wish 和 hope 的差別！有機會實現的用 hope：{I hope you can come.} 不太可能的才用 wish：{I wish you could come.}（你其實來不了）", board:[["I hope you can come.",["hope","can"]],["I wish you could come.",["wish","could"]],["I wish you can come.",[],true]]},
 {ask:{q:"I ___ you can come to my party next Saturday.", opts:["wish","hope","wished"], ans:1,
   ok:"讚！後面是 can，表示有機會實現，用 hope。", bad:{0:"wish 後面要接退一格的 could，不能接 can。",2:"wished 後面也要接退一格的時態，這裡用 hope 才對。"},
   again:{q:"I wish my brother ___ playing loud music at night.", opts:["would stop","stops"], ans:0, exp:"希望別人改變行為，用 wish + 人 + would V。"}}},
 {say:"as if 和 as though 都是「好像」。不是事實時一樣退一格：{He talks as if he knew everything.} 他其實懂很少。{She looked as if she had seen a ghost.} 看到鬼發生在臉色變白之前，用 had 加過去分詞。", board:[["He talks as if he knew everything.",["as if","knew"]],["She looked as if she had seen a ghost.",["as if","had seen"]]]},
 {say:"但如果「好像」的事很可能是真的，就不用退：{It looks as if it is going to rain.} 烏雲密布，真的快下雨了！", board:[["It looks as if it is going to rain.",["is going to"]]]},
 {say:"as if 的口訣！", chant:"假的才退一格，真的照常說！"},
 {ask:{say:"最後一題！", q:"He talks as if he ___ everything, but actually he knows little.", opts:["knows","knew","will know"], ans:1,
   ok:"完美！他其實懂很少，不是事實，用 knew。", bad:{0:"他其實懂很少，這是假的，要退一格用 knew。",2:"as if 後面不接 will，要退一格用 knew。"},
   again:{q:"Look at the dark clouds. It looks as if it ___ rain.", opts:["is going to","were going to"], ans:0, exp:"真的很可能下雨，不用退一格。"}}},
 {say:"wish 家族過關！口訣：wish 退一格，現在用過去，過去用 had p.p.；希望別人改用 would；as if 假的才退一格，真的照常說！", end:true}
],
g4:[
 {say:"最後一課有兩個重點。第一個：It's time 加過去式。媽媽常說：{It's time you went to bed!} 明明在說現在，為什麼用 went？", board:[["It's time you went to bed!",["It's time","went"]]]},
 {say:"因為「你早該去睡了，可是你還沒去」！事情還沒發生，和事實相反，所以動詞退一格用過去式。加上 high 或 about，語氣更急：{It's high time you cleaned your room.}", board:[["It's time we went home.",["went"]],["It's high time you cleaned your room.",["high","cleaned"]]]},
 {say:"口訣！", chant:"It's time 後面接過去，早該做了還沒做！"},
 {ask:{say:"考考你！", q:"It's time we ___ home. It's getting dark.", opts:["go","went","gone"], ans:1,
   ok:"對！It's time + 主詞 + 過去式：went。", bad:{0:"It's time 後面接子句時，動詞要用過去式 went。",2:"gone 是過去分詞，前面沒有 have 不能單獨使用。"},
   again:{q:"It's high time you ___ your room.", opts:["cleaned","clean"], ans:0, exp:"It's high time + 主詞 + 過去式。"}}},
 {say:"如果不想接子句，也可以說 {It's time for us to go home.} 有 for 人，就接 to 加原形動詞。", board:[["It's time for us to go home.",["for us","to go"]],["It's time we went home.",["we went"]]]},
 {ask:{q:"It's time for us ___ to bed.", opts:["went","to go","go"], ans:1,
   ok:"讚！有 for us，後面接 to go。", bad:{0:"有 for 人 時要接 to V，不是過去式。",2:"有 for 人 時要接 to V，要加 to。"},
   again:{q:"It's about time the government ___ action.", opts:["took","takes"], ans:0, exp:"It's about time + 主詞 + 過去式。"}}},
 {say:"第二個重點：不用 if 也能說假設！{But for} 和 {Without} 加名詞，意思是「要不是有……」「要是沒有……」。{Without water, we couldn't live.}", board:[["Without water, we couldn't live.",["Without"]],["But for your help, I would have failed.",["But for"]]]},
 {say:"時間要看後半句！後半句是 would 加原形，就等於 If it were not for；後半句是 would have 加過去分詞，就等於 If it had not been for。", board:[["Without water, we couldn't live. = If it were not for water",["couldn't live","were not for"]],["But for your help, I would have failed. = If it had not been for your help",["would have failed","had not been for"]]]},
 {say:"口訣！", chant:"but for、without 接名詞，時間看後半句！"},
 {ask:{q:"But for the heavy traffic, we ___ on time yesterday.", opts:["would arrive","would have arrived","will arrive"], ans:1,
   ok:"太棒了！yesterday 是過去，用 would have arrived。", bad:{0:"yesterday 是過去，要用 would have + p.p.。",2:"這是假設語氣，不能用 will。"},
   again:{q:"Without the sun, there ___ no life on Earth.", opts:["would be","would have been"], ans:0, exp:"太陽現在存在，和現在相反用 would be。"}}},
 {ask:{say:"最後一題！", q:"Without your advice, I would have made a big mistake. = ___ your advice, ...", opts:["If it were not for","If it had not been for","Unless"], ans:1,
   ok:"完美！後半句是 would have made，過去，用 If it had not been for。", bad:{0:"後半句是 would have p.p.（過去），要用 If it had not been for。",2:"unless 是「除非」，後面要接子句，意思也不對。"},
   again:{q:"But for music, life would be boring. = ___ music, ...", opts:["If it were not for","Had it not been for"], ans:0, exp:"would be 是現在，用 If it were not for。"}}},
 {say:"全部過關！口訣：It's time 後面接過去，早該做了還沒做；but for、without 接名詞，時間看後半句。高二第二次段考的假設語氣大魔王，你已經打倒了！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S2_1_2_ROOTS = [
  {id:"r1", title:"字根 tain / ten：握住、保持"},
  {id:"r2", title:"字根 spir：呼吸"},
  {id:"r3", title:"字根 clud / clus / clos：關閉"},
  {id:"r4", title:"字根 flu / flux：流動"}
];
const S2_1_2_ROOT_CLASS = {
r1:[
 {say:"高二同學好！今天的字根是 <<tain>>，意思是「握住、保持」。想像你的手緊緊握著一樣東西不放！", board:[["tain = 握住、保持",["tain"],false,true]]},
 {say:"<<con>> 是「一起」，把東西握在一起：{contain} 包含；裝東西的物品，就是 {container} 容器、貨櫃。", board:[["con + tain = contain",["tain"],false,true],["con + tain + er = container",["tain"],false,true]]},
 {say:"<<ob>> 是「朝向」，伸手朝目標握住：{obtain} 獲得。<<re>> 是「往回」，往回握住不放：{retain} 保留。", board:[["ob + tain = obtain",["tain"],false,true],["re + tain = retain",["tain"],false,true]]},
 {say:"口訣！", chant:"tain 握握握：con 包含、ob 獲得、re 保留！"},
 {ask:{q:"ob（朝向）＋ tain（握住）＝ obtain，意思是？", opts:["失去","獲得","包含"], ans:1,
   ok:"對！朝著目標握住，就是獲得。", bad:{0:"tain 是握住，不是放掉喔。",2:"包含是 contain（con 一起）。"},
   again:{q:"re（往回）＋ tain ＝ retain，意思是？", opts:["保留","重新","拿走"], ans:0, exp:"往回握住不放，就是保留。"}}},
 {say:"<<main>> 其實是「手」，用手緊緊握住：{maintain} 維持、保養。<<sus>> 是「在下面」，從下面撐住：{sustain} 支撐、維持。", board:[["main + tain = maintain",["tain"],false,true],["sus + tain = sustain",["tain"],false,true]]},
 {ask:{q:"sustain 的 sus 是「在下面」，sustain 最可能的意思是？", opts:["從下面撐住","往上丟","往外推"], ans:0,
   ok:"讚！從下面撐住，就是支撐、維持。", bad:{1:"tain 是握住、撐住，不是丟。",2:"tain 是握住，不是推。"},
   again:{q:"maintain 的意思是？", opts:["維持","主要的","包含"], ans:0, exp:"用手握住不放 → 維持、保養。"}}},
 {say:"tain 還有兩個變身：<<ten>> 和 <<tin>>。持有房子的人：{tenant} 房客。緊緊連在一起的陸地：{continent} 大陸。一直握著不中斷：{continuous} 連續的。", board:[["ten + ant = tenant",["ten"],false,true],["con + tin + ent = continent",["tin"],false,true],["con + tinu + ous = continuous",["tinu"],false,true]]},
 {say:"變身口訣！", chant:"tain、ten、tin 是一家，握住不放就是它！"},
 {ask:{say:"最後一題！", q:"ten（持有）＋ ant（人）＝ tenant，意思是？", opts:["房東","房客","網球選手"], ans:1,
   ok:"完美！持有、租下房子的人，就是房客。", bad:{0:"房東是 landlord，tenant 是租房子的人。",2:"網球是 tennis，ten 在這裡是「持有」。"},
   again:{q:"continuous 的意思最可能是？", opts:["連續不斷的","大陸的","包含的"], ans:0, exp:"con + tinu（握住）：一直握著不中斷 → 連續的。"}}},
 {say:"字根 tain 過關！口訣：tain 握握握，con 包含、ob 獲得、re 保留、main 維持、sus 支撐；tain、ten、tin 是一家！", end:true}
],
r2:[
 {say:"今天的字根是 <<spir>>，意思是「呼吸」。深吸一口氣，跟安安老師一起學！", board:[["spir = 呼吸",["spir"],false,true]]},
 {say:"古人覺得呼吸就是生命，所以生命的氣息就是 {spirit} 精神、靈魂；加上形容詞字尾 <<ual>>，就是 {spiritual} 心靈的。", board:[["spir + it = spirit",["spir"],false,true],["spirit + ual = spiritual",["spirit"],false,true]]},
 {say:"<<in>> 是「進入」：把新的氣息吸進心裡，就是 {inspiration} 靈感。高一學過的 inspire（啟發）也是同一家！", board:[["in + spir + ation = inspiration",["spir"],false,true]]},
 {say:"口訣！", chant:"spir 呼吸，吸進來就有靈感！"},
 {ask:{q:"in（進入）＋ spir（呼吸）＋ ation ＝ inspiration，意思是？", opts:["靈感","呼吸困難","檢查"], ans:0,
   ok:"對！把新的氣息吸進心裡，就是靈感。", bad:{1:"inspiration 是正面的，把好點子吸進來 → 靈感。",2:"檢查是 inspect，字根是 spect（看）。"},
   again:{q:"spirit 的意思是？", opts:["精神","速度","分開"], ans:0, exp:"生命的氣息 → 精神。"}}},
 {say:"<<a>> 是「朝向」：朝著目標喘著氣拚命追，就是 {aspire} 渴望、立志；名詞是 {aspiration} 志向。", board:[["a + spire = aspire",["spire"],false,true],["a + spir + ation = aspiration",["spir"],false,true]]},
 {say:"<<ex>> 是「向外」：吐出最後一口氣，就是 {expire} 到期、過期。小提醒：spir 的 s 被 ex 吃掉了，所以拼成 expire。", board:[["ex + (s)pire = expire",["pire"],false,true]]},
 {ask:{q:"牛奶上寫 Expires 2026/12/01，意思是？", opts:["製造日期","有效期限","打折日期"], ans:1,
   ok:"讚！expire 是吐出最後一口氣 → 到期。", bad:{0:"製造日期是 manufactured，expire 是到期。",2:"expire 和打折無關，是到期的意思。"},
   again:{q:"aspire to become a doctor 的意思是？", opts:["立志當醫生","害怕當醫生","討厭醫生"], ans:0, exp:"a（朝向）+ spire：朝著目標追求 → 立志。"}}},
 {say:"再來兩個：<<per>> 是「穿過」，透過皮膚呼吸，就是 {perspire} 流汗。<<con>> 是「一起」，大家湊在一起呼吸、說悄悄話，就是 {conspire} 密謀。", board:[["per + spire = perspire",["spire"],false,true],["con + spire = conspire",["spire"],false,true]]},
 {ask:{say:"最後一題！", q:"per（穿過）＋ spire（呼吸）＝ perspire，意思是？", opts:["流汗","完美","堅持"], ans:0,
   ok:"完美！透過皮膚呼吸 → 流汗。", bad:{1:"完美是 perfect，perspire 的字根是 spire（呼吸）。",2:"堅持是 persist，perspire 的字根是 spire（呼吸）。"},
   again:{q:"conspire 的意思最可能是？", opts:["密謀","安慰","保存"], ans:0, exp:"con（一起）+ spire（呼吸）：湊在一起說悄悄話 → 密謀。"}}},
 {say:"字根 spir 過關！口訣：spir 呼吸，in 吸進來是靈感，a 朝目標是立志，ex 吐出去是到期，per 透過皮膚是流汗！", end:true}
],
r3:[
 {say:"今天的字根是 <<clud>> 和 <<clus>>，意思是「關閉」。你認識的 close（關）也是同一家！", board:[["clud / clus / clos = 關閉",["clud","clus","clos"],false,true]]},
 {say:"高一學過 conclude 和 exclude，今天看它們的家人。<<con>> 是「完全」，把討論完全關上：{conclusion} 結論。", board:[["con + clus + ion = conclusion",["clus"],false,true]]},
 {say:"<<ex>> 是「向外」，把別人關在外面：{exclusive} 專屬的、獨家的。<<in>> 是「在裡面」，把大家都關在圈內：{inclusive} 包容的。", board:[["ex + clus + ive = exclusive",["clus"],false,true],["in + clus + ive = inclusive",["clus"],false,true]]},
 {say:"口訣！", chant:"clud、clus 關起來：ex 關外面、in 關裡面！"},
 {ask:{q:"ex（向外）＋ clus（關閉）＋ ive ＝ exclusive，意思是？", opts:["專屬的","包容的","昂貴的"], ans:0,
   ok:"對！把別人關在外面，只給少數人 → 專屬的。", bad:{1:"包容的是 inclusive，in 是把大家關在裡面。",2:"昂貴的是 expensive，字根不一樣喔。"},
   again:{q:"inclusive 的意思是？", opts:["包容的","排外的","結束的"], ans:0, exp:"in（在裡面）+ clus：把大家都關在圈內 → 包容的。"}}},
 {say:"<<se>> 是「分開」：被分開關起來的地方，就是 {secluded} 僻靜的、隱蔽的。", board:[["se + clud + ed = secluded",["clud"],false,true]]},
 {say:"clos 這個形狀最好認：<<en>> 是「在裡面」，{enclose} 圍住；<<dis>> 是「相反」，關閉的相反是打開，{disclose} 揭露；加名詞字尾 <<ure>>，{closure} 關閉、了結。", board:[["en + close = enclose",["close"],false,true],["dis + close = disclose",["close"],false,true],["clos + ure = closure",["clos"],false,true]]},
 {ask:{q:"dis（相反）＋ close（關閉）＝ disclose，意思是？", opts:["揭露","關得更緊","靠近"], ans:0,
   ok:"讚！關閉的相反就是打開 → 揭露祕密。", bad:{1:"dis 是「相反」，不是更緊喔。",2:"close 在這裡唸 /kloz/，是關閉，不是靠近。"},
   again:{q:"enclose 的意思是？", opts:["圍住","打開","結束"], ans:0, exp:"en（在裡面）+ close：關在裡面 → 圍住。"}}},
 {say:"變身口訣！", chant:"clud、clus、clos 一家人，看到就想關關關！"},
 {ask:{say:"最後一題！", q:"What ＿＿ did you reach after the experiment?（你得出什麼結論？）", opts:["conclude","conclusion","exclusive"], ans:1,
   ok:"完美！what 後面要接名詞：conclusion。", bad:{0:"conclude 是動詞，這裡需要名詞 conclusion。",2:"exclusive 是「專屬的」，意思不對。"},
   again:{q:"a ＿＿ beach far from the crowds（僻靜的海灘）", opts:["secluded","included"], ans:0, exp:"se（分開）+ clud：被分開關起來 → 僻靜的。"}}},
 {say:"字根 clud 過關！口訣：clud、clus、clos 都是關閉；con 結論、ex 專屬、in 包容、se 僻靜、dis 揭露！", end:true}
],
r4:[
 {say:"最後一課，字根 <<flu>> 和 <<flux>>，意思是「流動」。想像一條小河嘩啦啦地流！", board:[["flu / flux = 流",["flu","flux"],false,true]]},
 {say:"說話像水一樣流：{fluent} 流利的；名詞是 {fluency} 流利度。會流動的東西：{fluid} 液體。", board:[["flu + ent = fluent",["flu"],false,true],["flu + ency = fluency",["flu"],false,true],["flu + id = fluid",["flu"],false,true]]},
 {say:"口訣！", chant:"flu 流流流，說話流就是 fluent！"},
 {ask:{q:"She is ＿＿ in English.（她英文很流利）", opts:["fluent","fluency","fluid"], ans:0,
   ok:"對！be 動詞後面要形容詞：fluent。", bad:{1:"fluency 是名詞，be 動詞後面要用形容詞 fluent。",2:"fluid 是液體，意思不對。"},
   again:{q:"Drink plenty of ＿＿ when you have a fever.", opts:["fluids","fluency"], ans:0, exp:"發燒時要多喝液體：fluids。"}}},
 {say:"<<in>> 是「進入」：流進來，就是 {influx} 湧入。高一學過的 influence 是力量流進別人心裡，所以「有影響力的」就是 {influential}。", board:[["in + flux = influx",["flux"],false,true],["in + flu + ential = influential",["flu"],false,true]]},
 {ask:{q:"an influx of tourists 的意思是？", opts:["遊客湧入","遊客減少","遊客生病"], ans:0,
   ok:"讚！in（進入）+ flux（流）→ 湧入。", bad:{1:"in 是進入，是流進來，不是減少。",2:"流感是 flu，但 influx 是湧入喔。"},
   again:{q:"influential 的意思是？", opts:["有影響力的","流感的","流利的"], ans:0, exp:"力量流進別人心裡 → 有影響力的。"}}},
 {say:"<<af>> 是「朝向」：財富源源不絕流向你，就是 {affluent} 富裕的。像波浪一樣流動起伏，就是 {fluctuate} 波動。", board:[["af + flu + ent = affluent",["flu"],false,true],["fluct + uate = fluctuate",["fluct"],false,true]]},
 {say:"偷偷告訴你，感冒的 flu 也是這一家！古人以為流感是星星的力量「流」到人身上，所以叫 influenza，簡稱 flu。", board:[["influenza → flu",["flu"],false,true]]},
 {ask:{say:"最後一題！", q:"Prices ＿＿ from season to season.（價格隨季節起伏）", opts:["fluctuate","fluent","affluent"], ans:0,
   ok:"完美！像波浪一樣起伏 → fluctuate。", bad:{1:"fluent 是流利的，是形容詞。",2:"affluent 是富裕的，意思不對。"},
   again:{q:"He grew up in an ＿＿ family.（富裕的家庭）", opts:["affluent","influx"], ans:0, exp:"af（朝向）+ flu + ent：財富流向你 → 富裕的。"}}},
 {say:"字根 flu 過關！口訣：flu 流流流，fluent 流利、fluid 液體、influx 湧入、affluent 富裕、fluctuate 波動。四堂字根課全部上完，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創）與概念卡 ---------- */
Object.assign(ILLUS2, {
  dilemma: () => svgWrap("#f3f0ff", ground() + `<path d="M80 120 L80 82 L36 40 M80 82 L124 40" stroke="#e7d9b8" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` + grp(30, 26, 1, `<rect x="-3" y="0" width="6" height="26" fill="#a16207"/><rect x="-18" y="-12" width="36" height="16" rx="3" fill="#60a5fa"/>`) + txt(30, 25, "A", 12, "#ffffff") + grp(130, 26, 1, `<rect x="-3" y="0" width="6" height="26" fill="#a16207"/><rect x="-18" y="-12" width="36" height="16" rx="3" fill="#f472b6"/>`) + txt(130, 25, "B", 12, "#ffffff") + kid(80, {mood:"o", eyes:"worry", oc:"#8b5cf6"}) + txt(108, 46, "?", 22, "#8b5cf6")),
  container: () => svgWrap("#e0f2fe", `<rect x="0" y="92" width="160" height="28" fill="#3b82f6"/><path d="M0 96 Q20 92 40 96 T80 96 T120 96 T160 96" stroke="#bfdbfe" stroke-width="2" fill="none"/>` + `<path d="M18 74 H146 L134 98 H30 Z" fill="#374151"/><rect x="118" y="44" width="18" height="30" fill="#f9fafb" stroke="#9ca3af"/>` + [["#ef4444",30,58],["#22c55e",58,58],["#f59e0b",86,58],["#3b82f6",44,42],["#a855f7",72,42]].map(([c, x, y]) => `<rect x="${x}" y="${y}" width="26" height="16" rx="1.5" fill="${c}" stroke="#1f2937" stroke-width="1"/><path d="M${x + 6} ${y + 3} V${y + 13} M${x + 13} ${y + 3} V${y + 13} M${x + 20} ${y + 3} V${y + 13}" stroke="#00000033" stroke-width="1.5"/>`).join("") + O.cloud(130, 20, .5)),
  continent: () => svgWrap("#eef6ff", `<circle cx="80" cy="62" r="44" fill="#60a5fa"/><path d="M52 34 Q66 26 78 36 Q74 50 60 52 Q48 46 52 34 Z" fill="#4ade80"/><path d="M88 40 Q108 34 116 48 Q112 62 98 60 Q86 54 88 40 Z" fill="#4ade80"/><path d="M60 66 Q74 62 78 76 Q72 92 62 90 Q54 80 60 66 Z" fill="#4ade80"/><path d="M98 74 Q110 72 112 82 Q106 90 98 86 Z" fill="#4ade80"/>` + `<ellipse cx="66" cy="44" rx="10" ry="5" fill="#ffffff" opacity=".25"/>` + spark(22, 24, .9) + spark(140, 98, .8) + star(138, 22, 5)),
  perspire: () => svgWrap("#fff4e0", ground("#fcd9a8") + O.sun(132, 22, .7) + kid(78, {mood:"wavy", eyes:"worry", oc:"#ef4444"}) + [[56, 44], [100, 46], [62, 62], [96, 66]].map(([x, y]) => `<path d="M${x} ${y - 7} Q${x + 5} ${y} ${x} ${y + 3} Q${x - 5} ${y} ${x} ${y - 7} Z" fill="#60a5fa"/>`).join("") + `<path d="M20 70 H40 M16 80 H36 M22 90 H42" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>`)
});
registerUnit("s2-1-2", {
  name:"高二 上學期 第二次段考",
  sub:"混合假設語氣、省略 if 的倒裝假設、wish / as if / if only、It's time + 過去式與 but for / without",
  words:S2_1_2_WORDS, grammar:S2_1_2_GRAMMAR, quiz:S2_1_2_QUIZ,
  classes:Object.assign({}, S2_1_2_CLASS, S2_1_2_ROOT_CLASS), phonics:S2_1_2_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會字根 tain、spir、clud、flu，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
