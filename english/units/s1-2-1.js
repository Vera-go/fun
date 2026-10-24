/* 單元檔：由 index.html 在選到這個單元時載入，內容都會透過 registerUnit() 登記 */
(function(){
/* =========================================================
   高一下學期 第一次段考
   文法：未來進行式／未來完成式、助動詞 + have p.p.、with 附帶狀況、目的與結果
   字根：cap / cept / ceive、vers / vert、bio / geo、graph / gram
   單字格式：[單字, 詞性, 中文, [[例句, 中文, 說明] x3], 字根拆解, 拆解邏輯, 插圖, 記憶小撇步]
   ========================================================= */
const S1_2_1_WORDS = [
/* ---------- 環境與氣候變遷 ---------- */
["carbon","n.","碳",[
 ["Trees take in carbon from the air.","樹木從空氣中吸收碳。","take in 表示「吸收、攝取」；Trees 是複數主詞，動詞不加 s。"],
 ["By 2050, the city will have cut its carbon emissions by half.","到了 2050 年，這座城市將會把碳排放量減少一半。","未來完成式 will have + p.p. 搭配 by + 未來時間，表示「到那時已經完成」；cut 三態同形。"],
 ["We ride bikes to school so that we can reduce our carbon footprint.","我們騎腳踏車上學，以便減少我們的碳足跡。","so that + 主詞 + can 表示目的「為了能夠……」；carbon footprint 是「碳足跡」。"]],
 "","","⚫|碳","carbon 的 car 讓人想到「汽車」：汽車排出最多的就是碳。"],
["emission","n.","排放；排放物",[
 ["Factories must control their emissions.","工廠必須控制它們的排放量。","emission 當「排放物、排放量」時常用複數 emissions。"],
 ["The government is working hard in order to lower carbon emissions.","政府正在努力降低碳排放。","in order to + 原形動詞 表示目的，比單用 to V 更正式。"],
 ["With emissions rising every year, the air is getting worse.","隨著排放量每年增加，空氣越來越差。","with + 受詞 + V-ing 表示附帶狀況：排放量「主動」增加，所以用 rising。"]],
 "e-=向外|miss=送|-ion=名詞字尾","往外送出去的東西 → 排放物","🏭|排放"],
["greenhouse","n.","溫室",[
 ["My grandfather grows tomatoes in a greenhouse.","我爺爺在溫室裡種番茄。","in a greenhouse 表示地點；grow 當及物動詞是「種植」。"],
 ["Greenhouse gases trap heat in the atmosphere.","溫室氣體把熱困在大氣層裡。","greenhouse 當形容詞用，修飾 gases；trap 表示「困住」。"],
 ["The greenhouse was so hot that the flowers dried up.","溫室熱到花都乾枯了。","so + 形容詞 + that 表示結果「太……以致於……」。"]],
 "green=綠色|house=房子","種綠色植物的房子 → 溫室","@s121_greenhouse"],
["drought","n.","乾旱",[
 ["The long drought killed most of the crops.","長期乾旱讓大部分的農作物都死了。","most of the + 名詞 表示「大部分的……」。"],
 ["It hasn't rained for months; the farmers must have suffered a lot from the drought.","好幾個月沒下雨了，農夫們一定因為乾旱吃了很多苦。","must have + p.p. 表示對過去很有把握的推測「一定已經……」。"],
 ["It was such a serious drought that the city had to limit water use.","乾旱嚴重到市政府必須限制用水。","such + a + 形容詞 + 名詞 + that 表示結果，such 後面接名詞片語。"]],
 "","","🏜️|乾旱","drought 的 ough 唸 /aʊ/，和 dry（乾的）一樣都是 dr 開頭：dr 乾巴巴。"],
["shortage","n.","短缺",[
 ["There is a shortage of water in the south.","南部缺水。","a shortage of + 名詞 表示「……的短缺」；There is 搭配單數名詞 a shortage。"],
 ["By next summer, the shortage will have become a serious problem.","到明年夏天，這個短缺問題將會變得很嚴重。","by + 未來時間 搭配未來完成式 will have become。"],
 ["We save water every day so as to prevent a water shortage.","我們每天省水，以避免缺水。","so as to + 原形動詞 表示目的，和 in order to 一樣，但 so as to 不能放句首。"]],
 "short=不足的|-age=名詞字尾","不足的狀態 → 短缺","📉|短缺"],
["sustainable","adj.","永續的；可持續的",[
 ["We need a sustainable way to produce food.","我們需要一種能永續生產糧食的方式。","a way to V 表示「做某事的方式」。"],
 ["The town will be using only sustainable energy by 2040.","到 2040 年，這個小鎮將只會使用永續能源。","未來進行式 will be + V-ing 表示「到某個未來時間正在持續做的事」。"],
 ["Sustainable fishing is important so that our children can still eat fish.","永續漁業很重要，這樣我們的孩子才能繼續有魚吃。","so that 引導目的子句，子句中常用 can / will / may。"]],
 "sus-=在下面|tain=支撐|-able=可……的","從下面撐住、可以一直撐下去 → 永續的","♻️|永續"],
["renewable","adj.","可再生的",[
 ["Solar power is a renewable energy source.","太陽能是一種可再生能源。","renewable energy 指「再生能源」，像太陽能、風力。"],
 ["By 2030, Taiwan will have built more renewable energy plants.","到 2030 年，台灣將會蓋好更多再生能源發電廠。","未來完成式：到某個未來時間點前已經完成。"],
 ["Wind is renewable, so it will never run out.","風是可再生的，所以永遠不會用完。","run out 表示「用完、耗盡」。"]],
 "re-=再|new=新的|-able=可……的","可以再變新的 → 可再生的","🌬️|再生能源"],
["resource","n.","資源",[
 ["Water is a precious natural resource.","水是珍貴的自然資源。","natural resource 表示「自然資源」，可數名詞。"],
 ["People should have used our resources more carefully in the past.","過去人們早該更小心地使用資源。","should have + p.p. 表示「過去早該做卻沒做」，帶有後悔或責備的語氣。"],
 ["Some countries have so few resources that they must import oil.","有些國家資源少到必須進口石油。","so + few + 複數名詞 + that：many / much / few / little 前面要用 so，不用 such。"]],
 "re-=再|source=源頭","可以一再取用的源頭 → 資源","⛏️|資源"],
["wetland","n.","濕地",[
 ["Many birds stop at this wetland in winter.","許多鳥冬天會在這片濕地停留。","stop at + 地點 表示「在……停留」。"],
 ["By 2030, the city will have turned the old wetland into a nature park.","到 2030 年，市政府將已把這片舊濕地改成自然公園。","未來完成式；turn A into B 表示「把 A 變成 B」。"],
 ["Visitors must stay on the path in order not to harm the wetland.","遊客必須走在步道上，以免傷害濕地。","in order to 的否定是 in order not to + 原形動詞。"]],
 "wet=濕的|land=土地","濕濕的土地 → 濕地","🦆|濕地"],
["conserve","v.","節約；保護",[
 ["We should conserve water during the dry season.","乾季時我們應該節約用水。","conserve 用在水、能源時表示「節約」。"],
 ["The club members work hard so as to conserve the wetland.","社員們努力工作，以保護這片濕地。","so as to + 原形動詞 表示目的。"],
 ["If people had conserved energy earlier, the crisis could have been avoided.","如果人們早點節約能源，這場危機本來可以避免。","could have + p.p. 表示「過去本來可以……（但沒有）」；這裡搭配被動 could have been avoided。"]],
 "con-=完全|serve=保存","完整保存下來 → 節約；保護","💧|節約"],
["fuel","n./v.","燃料；加燃料",[
 ["Coal and oil are fuels that produce a lot of carbon.","煤和石油是會產生大量碳的燃料。","that 引導關係子句修飾 fuels。"],
 ["The car must have run out of fuel; it stopped in the middle of the road.","那輛車一定是沒油了，它停在路中間。","must have + p.p. 根據眼前證據推測過去：車停下來 → 一定是沒油了。"],
 ["Fuel prices rose so quickly that many people started taking the MRT.","燃料價格漲得太快，許多人開始搭捷運。","so + 副詞 + that 也可以：so quickly that ...。"]],
 "","","⛽|燃料","fuel 和 full（滿的）音很像：把車子加滿 full 的就是 fuel。"],
["atmosphere","n.","大氣層；氣氛",[
 ["The atmosphere protects the Earth from the sun's harmful rays.","大氣層保護地球不受陽光有害射線的傷害。","protect A from B 表示「保護 A 不受 B 傷害」。"],
 ["The classroom had such a relaxing atmosphere that everyone felt at home.","教室的氣氛很輕鬆，大家都覺得很自在。","atmosphere 也可以表示「氣氛」；such a + 形容詞 + 名詞 + that 表示結果。"],
 ["With more carbon in the atmosphere, the Earth keeps getting warmer.","大氣中的碳越來越多，地球持續變暖。","with + 受詞 + 介系詞片語 表示附帶狀況。"]],
 "atmo=蒸氣|sphere=球體","包住地球的一圈氣體 → 大氣層","🌐|大氣層"],
["glacier","n.","冰河",[
 ["The glacier is melting faster than before.","冰河融化得比以前快。","is melting 是現在進行式，表示正在發生的變化。"],
 ["By the year 2100, many glaciers will have disappeared.","到 2100 年，許多冰河將已消失。","未來完成式；disappear 是不及物動詞，沒有被動語態。"],
 ["This glacier was so huge that we couldn't see the end of it.","這條冰河大到我們看不到盡頭。","so + 形容詞 + that + 否定，表示「太……以致於不能……」。"]],
 "","","@s121_glacier","glacier 的 glac 和 glass（玻璃）很像：像玻璃一樣透明的大冰塊。"],
["crisis","n.","危機",[
 ["Climate change is a global crisis.","氣候變遷是全球性的危機。","crisis 的複數是 crises。"],
 ["The leaders should have acted before the crisis began.","領導者們早該在危機開始前採取行動。","should have + p.p.：過去應該做卻沒做。"],
 ["We must work together in order to deal with the energy crisis.","我們必須一起努力，以應付能源危機。","deal with 表示「處理、應付」；in order to 表示目的。"]],
 "","","🚨|危機","crisis 和 critical（危急的）是親戚：危急的時刻就是危機；複數是 crises。"],
["impact","n.","影響；衝擊",[
 ["Plastic waste has a huge impact on sea animals.","塑膠垃圾對海洋動物有巨大的影響。","have an impact on + 名詞 表示「對……有影響」。"],
 ["Scientists will be studying the impact of the typhoon for years.","科學家們將會研究這次颱風的影響好幾年。","未來進行式 will be studying 表示未來一段時間會持續進行的動作。"],
 ["The impact was so strong that the windows broke.","衝擊力強到窗戶都破了。","so + 形容詞 + that 表示結果。"]],
 "im-=進入|pact=擠壓","壓進去 → 衝擊；影響","💥|衝擊"],
["threaten","v.","威脅",[
 ["Rising sea levels threaten many island countries.","海平面上升威脅著許多島國。","Rising 是現在分詞當形容詞，修飾 sea levels。"],
 ["Many animals are threatened by climate change.","許多動物受到氣候變遷的威脅。","be threatened by 是被動語態，表示「受到……威脅」。"],
 ["With their homes threatened by floods, the villagers moved to higher ground.","家園受到洪水威脅，村民們搬到地勢較高的地方。","with + 受詞 + p.p. 表示附帶狀況：家園是「被威脅」的，所以用 threatened。"]],
 "threat=威脅|-en=使……","使受到威脅 → 威脅","⚠️|威脅"],
["deforestation","n.","森林砍伐",[
 ["Deforestation destroys the homes of many animals.","砍伐森林破壞了許多動物的家。","deforestation 是不可數名詞，當主詞用單數動詞。"],
 ["If deforestation continues, the rainforest will have lost half its trees by 2060.","如果繼續砍伐森林，到 2060 年雨林將會失去一半的樹木。","If 子句用現在式表示未來；主要子句用未來完成式搭配 by 2060。"],
 ["Deforestation is so fast that an area the size of a soccer field disappears every few seconds.","森林砍伐的速度快到每隔幾秒就有一座足球場大小的森林消失。","so + 形容詞 + that；the size of 表示「……的大小」。"]],
 "de-=去除|forest=森林|-ation=名詞字尾","把森林去除 → 森林砍伐","🪓|砍伐森林"],
["solar","adj.","太陽的",[
 ["Our school put solar panels on the roof.","我們學校在屋頂裝了太陽能板。","solar panel 表示「太陽能板」；put 三態同形。"],
 ["Next year, the whole village will be using solar power.","明年整個村莊都將使用太陽能。","未來進行式表示未來那段時間會持續的狀態。"],
 ["We put the solar lamp in the sun so that it could charge during the day.","我們把太陽能燈放在陽光下，讓它白天可以充電。","主要子句是過去式時，so that 子句中用 could / would。"]],
 "sol=太陽|-ar=形容詞字尾","太陽的","☀️|太陽能"],
["exhaust","n./v.","廢氣；使筋疲力盡",[
 ["Car exhaust makes the air dirty.","汽車廢氣讓空氣變髒。","make + 受詞 + 形容詞 表示「使……變得……」。"],
 ["He must have been exhausted after running ten kilometers.","跑完十公里後，他一定累壞了。","must have been 表示對過去狀態的肯定推測；exhausted 表示「筋疲力盡的」。"],
 ["The street was so full of exhaust that we could hardly breathe.","街上滿是廢氣，我們幾乎無法呼吸。","so ... that 表示結果；hardly 本身就是否定，表示「幾乎不」。"]],
 "ex-=向外|haust=抽取","往外抽出來的氣 → 廢氣；把力氣全抽光 → 使筋疲力盡","🚗|廢氣"],
["fossil","n.","化石",[
 ["Scientists found a dinosaur fossil in the rock.","科學家在岩石中發現一塊恐龍化石。","find 的過去式是 found。"],
 ["Fossil fuels like coal and oil took millions of years to form.","像煤和石油這樣的化石燃料花了好幾百萬年才形成。","fossil fuel 是「化石燃料」；take + 時間 + to V 表示「花多少時間做某事」。"],
 ["This fossil can't have been made by people; it is millions of years old.","這塊化石不可能是人造的，它有好幾百萬年歷史了。","can't have + p.p. 表示對過去的否定推測「不可能已經……」。"]],
 "","","🦴|化石","fossil 和 fuel 一樣是 f 開頭：fossil fuel（化石燃料）一起背最好記。"],
["rainforest","n.","雨林",[
 ["The Amazon rainforest is home to millions of species.","亞馬遜雨林是數百萬物種的家園。","be home to + 名詞 表示「是……的棲息地」。"],
 ["With the rainforest disappearing, many animals have nowhere to live.","隨著雨林消失，許多動物無處可住。","with + 受詞 + V-ing：雨林「主動」在消失，用 disappearing。"],
 ["Next month, a team of scientists will be exploring the rainforest.","下個月，一組科學家將會在雨林中探險。","未來進行式表示「未來某時正在進行」的事。"]],
 "rain=雨|forest=森林","下很多雨的森林 → 雨林","🌴|雨林"],
["landscape","n.","風景；地景",[
 ["The landscape of Taroko is amazing.","太魯閣的風景令人驚嘆。","landscape 指一整片陸地的景色。"],
 ["Climate change could have changed the landscape of this island completely.","氣候變遷可能已經完全改變了這座島的地景。","could have + p.p. 也可以表示對過去的推測「可能已經……」。"],
 ["The painter sat by the lake with a brush in her hand, drawing the landscape.","畫家手裡拿著畫筆坐在湖邊，畫著風景。","with + 受詞 + 介系詞片語 表示附帶狀況；drawing ... 是分詞構句表示同時發生。"]],
 "land=陸地|-scape=景色","陸地的景色 → 風景","🏞️|風景"],
["ecology","n.","生態；生態學",[
 ["The new road could damage the ecology of the river.","新道路可能會破壞這條河的生態。","could 表示「可能」；the ecology of + 地點 表示「……的生態」。"],
 ["She studies ecology so that she can help protect the rainforest.","她研讀生態學，以便能幫忙保護雨林。","so that + 主詞 + can 表示目的；help + 原形動詞。"],
 ["The scientists must have studied the island's ecology for years.","那些科學家一定研究這座島的生態好幾年了。","must have + p.p. 表示肯定推測。"]],
 "eco-=家、環境|-logy=學科","研究生物和環境的學問 → 生態學","🌿|生態"],
["species","n.","物種",[
 ["There are thousands of species of birds in the world.","世界上有好幾千種鳥。","species 單複數同形：one species、two species。"],
 ["By 2050, many species will have died out.","到 2050 年，許多物種將已滅絕。","die out 表示「滅絕」；未來完成式搭配 by + 未來時間。"],
 ["This species is so rare that only a few people have seen it.","這個物種罕見到只有少數人看過。","so + 形容詞 + that；a few 表示「一些、少數」。"]],
 "","","🦋|物種","species 單複數一樣：就像 fish、sheep 一樣不加 s，最後的 s 本來就在。"],
["habitat","n.","棲息地",[
 ["The forest is the natural habitat of the Formosan black bear.","森林是台灣黑熊的自然棲息地。","natural habitat 表示「自然棲息地」。"],
 ["The birds must have lost their habitat when the wetland was filled in.","濕地被填平時，那些鳥一定失去了棲息地。","must have + p.p. 表示對過去有把握的推測。"],
 ["We should protect their habitat so that the animals can survive.","我們應該保護牠們的棲息地，讓動物得以生存。","so that + 主詞 + can 表示目的。"]],
 "habit=居住|-at=名詞字尾","居住的地方 → 棲息地","🏡|棲息地"],
["endangered","adj.","瀕臨絕種的",[
 ["The leopard cat is an endangered animal in Taiwan.","石虎在台灣是瀕臨絕種的動物。","endangered 開頭是母音，前面用 an。"],
 ["The volunteers will be counting endangered birds this weekend.","這個週末志工們將在清點瀕危鳥類。","未來進行式表示未來某段時間正在做的事。"],
 ["Some endangered species are protected by law so that people can't hunt them.","有些瀕危物種受法律保護，讓人們不能獵捕牠們。","be protected by law 是被動；so that + 否定 表示「為了不讓……」。"]],
 "en-=使|danger=危險|-ed=形容詞字尾","被置於危險中的 → 瀕臨絕種的","🐼|瀕危"],
["ecosystem","n.","生態系統",[
 ["Every animal plays a part in the ecosystem.","每種動物在生態系統中都扮演一個角色。","play a part in 表示「在……中扮演角色」。"],
 ["The ecosystem is so delicate that one small change can affect everything.","生態系統很脆弱，一個小改變就能影響一切。","so + 形容詞 + that 表示結果；affect 是動詞「影響」。"],
 ["Without bees, the ecosystem would have collapsed long ago.","如果沒有蜜蜂，生態系統早就崩潰了。","without + 名詞 表示假設；would have + p.p. 指過去。"]],
 "eco-=生態|system=系統","生物和環境組成的系統 → 生態系統","🐝|生態系"],
["hunter","n.","獵人",[
 ["The hunter was caught by the police.","那名獵人被警察抓到了。","was caught 是被動語態。"],
 ["The bear can't have been killed by a hunter; there are no marks on it.","那隻熊不可能是被獵人殺的，牠身上沒有傷痕。","can't have been + p.p. 是否定推測的被動式。"],
 ["The hunter waited quietly with his eyes fixed on the deer.","獵人安靜地等待，眼睛緊盯著那頭鹿。","with + 受詞 + p.p.：眼睛「被固定」在鹿身上，所以用 fixed。"]],
 "hunt=打獵|-er=……的人","打獵的人 → 獵人","🏹|獵人"],
["shelter","n.","避難所；收容所",[
 ["We adopted a dog from an animal shelter.","我們從動物收容所領養了一隻狗。","adopt 表示「領養」；animal shelter 是「動物收容所」。"],
 ["The family took shelter in the school during the typhoon.","颱風期間，那家人在學校避難。","take shelter 表示「躲避、避難」。"],
 ["The shelter was so crowded that some dogs had to sleep outside.","收容所擠到有些狗必須睡在外面。","so + 形容詞 + that 表示結果。"]],
 "","","🏠|收容所","shelter 開頭的 shel 很像 shell（殼）：像殼一樣保護你的地方。"],
["release","v./n.","釋放；發行",[
 ["The turtle was released into the sea.","那隻海龜被放回海裡。","be released into 表示「被放回到……」。"],
 ["By next month, they will have released ten rescued birds.","到下個月，他們將已放生十隻獲救的鳥。","未來完成式；rescued 是過去分詞當形容詞「獲救的」。"],
 ["The singer released a new song so as to raise money for animals.","那位歌手發行了一首新歌，為動物募款。","release 也可以表示「發行」；so as to 表示目的。"]],
 "re-=回|lease=放開","放回去 → 釋放","🐢|放生"],
["migrate","v.","遷徙；移居",[
 ["Many birds migrate south in winter.","許多鳥在冬天往南遷徙。","south 在這裡是副詞，表示「往南」，前面不加 to。"],
 ["This time next week, the black-faced spoonbills will be migrating to Taiwan.","下週的這個時候，黑面琵鷺將正在遷徙到台灣的路上。","This time + 未來時間 是未來進行式的典型搭配。"],
 ["The birds may have migrated earlier because of the warm weather.","因為天氣暖和，那些鳥可能提早遷徙了。","may have + p.p. 表示對過去不太確定的推測「可能已經……」。"]],
 "migr=移動|-ate=動詞字尾","移動到別處 → 遷徙","🦢|遷徙"],
["coral","n.","珊瑚",[
 ["Coral reefs are home to many colorful fish.","珊瑚礁是許多五彩繽紛魚類的家。","coral reef 是「珊瑚礁」。"],
 ["With the sea getting warmer, much of the coral is turning white.","隨著海水變暖，許多珊瑚正在白化。","with + 受詞 + V-ing 表示附帶狀況；coral 指整體時不可數，用 much。"],
 ["By 2050, half of the world's coral will have died.","到 2050 年，全世界一半的珊瑚將已死亡。","未來完成式。"]],
 "","","@s121_coral","coral 和 color（顏色）很像：五顏六色的珊瑚。"],
["predator","n.","掠食者",[
 ["Sharks are top predators in the ocean.","鯊魚是海洋中的頂級掠食者。","top predator 表示「食物鏈頂端的掠食者」。"],
 ["The rabbit ran away fast so as not to be caught by the predator.","兔子快速逃跑，以免被掠食者抓到。","so as to 的否定是 so as not to；後面接被動 be caught。"],
 ["The chicks must have been eaten by a predator.","那些小雞一定是被掠食者吃掉了。","must have been + p.p. 是肯定推測的被動式。"]],
 "pred=掠奪|-ator=……的動物","掠奪其他動物的 → 掠食者","🦈|掠食者"],
["prey","n.","獵物",[
 ["The eagle caught its prey in the river.","老鷹在河裡抓到了牠的獵物。","catch 的過去式是 caught。"],
 ["The lion was lying in the grass with its eyes on its prey.","獅子趴在草叢裡，眼睛盯著牠的獵物。","with + 受詞 + 介系詞片語 表示附帶狀況。"],
 ["The snake was so fast that its prey had no time to escape.","那條蛇快到牠的獵物來不及逃跑。","so + 形容詞 + that 表示結果。"]],
 "","","🐁|獵物","prey 和 pray（祈禱）同音：當獵物只能祈禱別被抓到。"],
/* ---------- 旅行與文化差異 ---------- */
["backpacker","n.","背包客",[
 ["The backpacker traveled around Asia for a year.","那個背包客在亞洲旅行了一年。","travel around 表示「到處旅行」。"],
 ["This time tomorrow, the backpackers will be hiking in the mountains.","明天的這個時候，背包客們將正在山裡健行。","This time tomorrow 搭配未來進行式。"],
 ["The backpacker walked into the hostel with a big bag on his back.","背包客背著一個大背包走進青年旅館。","with + 受詞 + 介系詞片語 表示附帶狀況。"]],
 "back=背|pack=包|-er=……的人","背著包包的人 → 背包客","@s121_backpacker"],
["etiquette","n.","禮節",[
 ["Table etiquette is different in every country.","每個國家的餐桌禮儀都不同。","table etiquette 表示「餐桌禮儀」；etiquette 不可數。"],
 ["You should have learned about local etiquette before your trip.","你在旅行前早該了解當地的禮節。","should have + p.p.：過去應該做卻沒做。"],
 ["Read this guide in order to avoid breaking any etiquette.","讀這本指南，以免違反任何禮節。","avoid + V-ing 表示「避免做……」。"]],
 "","","🙇|禮節","etiquette 來自法文，結尾 -ette 像小卡片：以前宴會上會發一張小卡寫著禮節規則。"],
["stereotype","n.","刻板印象",[
 ["It is a stereotype that all Americans eat fast food.","所有美國人都吃速食，這是一種刻板印象。","It is ... that 這裡的 It 是虛主詞，代替 that 子句。"],
 ["Traveling abroad helps us break stereotypes about other cultures.","出國旅行幫助我們打破對其他文化的刻板印象。","help + 受詞 + 原形動詞 表示「幫助某人做某事」。"],
 ["He must have believed the stereotype; he looked surprised when I said I liked cheese.","他一定相信那個刻板印象，我說我喜歡起司時他看起來很驚訝。","must have + p.p. 根據證據推測過去。"]],
 "stereo=固定的|type=類型","固定的類型 → 刻板印象","🏷️|貼標籤"],
["multicultural","adj.","多元文化的",[
 ["Taiwan is becoming a multicultural society.","台灣正在成為一個多元文化的社會。","is becoming 是現在進行式，表示正在發生的變化。"],
 ["Growing up in a multicultural family, she can speak three languages.","她在多元文化家庭中長大，會說三種語言。","Growing up ... 是分詞構句，表示原因。"],
 ["The school holds a multicultural festival every year so that students can learn about different cultures.","學校每年舉辦多元文化節，讓學生能認識不同文化。","so that 引導目的子句。"]],
 "multi-=多的|cultur=文化|-al=形容詞字尾","多種文化的","🌏|多元文化"],
["taboo","n.","禁忌",[
 ["Talking about death is a taboo in some cultures.","在某些文化中，談論死亡是一種禁忌。","動名詞片語 Talking about death 當主詞，用單數動詞 is。"],
 ["You should have learned the local taboos before visiting the temple.","你參觀那座廟之前，早該先了解當地的禁忌。","should have + p.p.：過去應該做卻沒做。"],
 ["In some countries, it is a taboo to eat with your mouth open.","在一些國家，張著嘴吃東西是禁忌。","it 是虛主詞，代替 to eat ...；with + 受詞 + 形容詞 表示附帶狀況。"]],
 "","","🚫|禁忌","taboo 來自南太平洋的語言，唸起來像「他不」：他不可以做的事，就是禁忌。"],
["offend","v.","冒犯",[
 ["I didn't mean to offend you.","我不是故意要冒犯你的。","mean to V 表示「故意、打算做某事」。"],
 ["Your joke may have offended her; she left without saying a word.","你的玩笑可能冒犯到她了，她一句話都沒說就走了。","may have + p.p. 表示對過去不太確定的推測。"],
 ["He spoke carefully so as not to offend anyone.","他說話很小心，以免冒犯任何人。","so as not to + 原形動詞 表示「以免……」。"]],
 "","","😠|冒犯","offend 的 off 是「離開」：說錯話讓人想離開，就是冒犯了對方。"],
["gesture","n.","手勢；姿態",[
 ["The same gesture can have different meanings in different countries.","同一個手勢在不同國家可能有不同意思。","can 表示「可能」。"],
 ["He should have checked the meaning of the gesture before using it in Greece.","他在希臘使用那個手勢之前，早該先查一下它的意思。","should have + p.p.：表示後悔或責備。"],
 ["She waved goodbye with a friendly gesture.","她用友善的手勢揮手道別。","with + 名詞 表示「用……的方式」。"]],
 "gest=帶、做|-ure=名詞字尾","用手做出來的動作 → 手勢","👋|手勢"],
["greeting","n.","問候",[
 ["In Japan, bowing is a common greeting.","在日本，鞠躬是一種常見的問候方式。","動名詞 bowing 當主詞，用單數動詞 is。"],
 ["Different cultures have so many different greetings that it's hard to remember them all.","不同文化有這麼多不同的問候方式，很難全部記住。","so many + 複數名詞 + that：many 前用 so，不用 such。"],
 ["He shook my hand with a warm greeting.","他親切地問候我，並和我握手。","shake hands 的過去式是 shook。"]],
 "greet=問候|-ing=名詞字尾","greet（問候）的名詞","🙋|問候"],
["homestay","n.","寄宿家庭",[
 ["I stayed with a homestay family in Canada.","我在加拿大住在寄宿家庭裡。","homestay 也可以當形容詞修飾 family。"],
 ["This time next month, I will be living with my homestay family in Australia.","下個月的這個時候，我將正住在澳洲的寄宿家庭裡。","未來進行式表示未來某時正在持續的狀態。"],
 ["Students choose a homestay in order to experience real local life.","學生選擇寄宿家庭，是為了體驗真正的當地生活。","in order to 表示目的。"]],
 "home=家|stay=停留","住在別人家裡 → 寄宿","🏘️|寄宿家庭"],
["exotic","adj.","異國風情的",[
 ["The market is full of exotic fruits.","市場裡有很多異國水果。","be full of 表示「充滿……」。"],
 ["The dish tasted so exotic that I asked the chef where it came from.","這道菜的味道很有異國風味，我就問了主廚它的來源。","so + 形容詞 + that；where it came from 是間接問句，用直述句語序。"],
 ["The island will have become an exotic tourist spot by the time the new airport opens.","等到新機場開幕時，這座島將已成為一個異國風情的觀光景點。","by the time + 現在式 表示未來，主要子句用未來完成式。"]],
 "","","🍍|異國風情","exotic 的 ex 是「外面」：從外國來的，就是異國的。"],
["scenery","n.","風景",[
 ["The scenery along the east coast is beautiful.","東海岸沿途的風景很美。","scenery 是不可數名詞，不能加 a 或 s。"],
 ["It was such beautiful scenery that we stopped to take pictures.","風景太美了，我們停下來拍照。","such + 形容詞 + 不可數名詞 + that：不可數名詞前不加 a。"],
 ["We will be enjoying the scenery of the Alps this time next week.","下週的這個時候，我們將正在欣賞阿爾卑斯山的風景。","未來進行式。"]],
 "scen=場景|-ery=集合名詞字尾","一整片的景色 → 風景","🌄|風景"],
["heritage","n.","遺產；傳統",[
 ["The old street is part of our cultural heritage.","這條老街是我們文化遺產的一部分。","cultural heritage 表示「文化遺產」。"],
 ["The temple was built over 200 years ago; it must have seen a lot of history.","這座廟兩百多年前建造，它一定見證了很多歷史。","must have + p.p. 表示肯定推測。"],
 ["The town fixed the old buildings so as to protect its heritage.","小鎮修繕老建築，以保護它的文化遺產。","so as to 表示目的。"]],
 "herit=繼承|-age=名詞字尾","繼承下來的東西 → 遺產","🏯|文化遺產"],
["dialect","n.","方言",[
 ["My grandmother speaks a Hakka dialect.","我奶奶說客家方言。","a + 形容詞 + dialect 表示「某種方言」。"],
 ["He must have grown up in the south; he speaks the local dialect so well.","他一定是在南部長大的，他當地方言說得那麼好。","must have + p.p. 根據證據推測過去。"],
 ["The dialect is so different that even people from the next town can't understand it.","這種方言差異大到連隔壁鎮的人都聽不懂。","so + 形容詞 + that 表示結果。"]],
 "dia-=之間|lect=說","人們之間說的話 → 方言","🗣️|方言"],
["homesick","adj.","想家的",[
 ["I felt homesick during my first week abroad.","我出國的第一週很想家。","feel + 形容詞 表示「感覺……」。"],
 ["She must have been homesick; she called her parents every night.","她一定很想家，她每天晚上都打電話給爸媽。","must have been + 形容詞 推測過去狀態。"],
 ["He brought a photo of his family so that he wouldn't feel too homesick.","他帶了一張全家福，這樣才不會太想家。","過去式主要子句搭配 so that ... wouldn't。"]],
 "home=家|sick=生病的","想家想到像生病 → 想家的","🥺|想家"],
["bargain","v./n.","討價還價；划算的東西",[
 ["Tourists often bargain at night markets.","遊客常在夜市殺價。","bargain 當動詞是「討價還價」。"],
 ["This jacket was a real bargain.","這件夾克真的很划算。","bargain 當名詞是「便宜貨、划算的東西」。"],
 ["You could have bargained for a lower price.","你本來可以殺價殺到更便宜的。","could have + p.p.：過去本來可以做卻沒做。"]],
 "","","🏷️|殺價","bargain 的 gain 是「得到」：殺價就是想得到更多好處。"],
["tribe","n.","部落",[
 ["The tribe has lived in the mountains for hundreds of years.","這個部落已經在山裡住了好幾百年。","has lived 是現在完成式，表示持續到現在。"],
 ["We joined the harvest festival in order to learn about the tribe's culture.","我們參加豐年祭，以了解這個部落的文化。","in order to 表示目的。"],
 ["The tribe's language may have disappeared without the elders' help.","沒有長老們的幫忙，這個部落的語言可能早就消失了。","may have + p.p. 表示推測；without 表示「如果沒有」。"]],
 "","","🪶|部落","tribe 的 tri 是「三」：古羅馬人一開始分成三個部族，tribe 就是這樣來的。"],
["unique","adj.","獨特的",[
 ["Every culture is unique.","每個文化都是獨一無二的。","every + 單數名詞，所以用 is。"],
 ["Taiwan has such a unique landscape that many tourists come here.","台灣有如此獨特的地景，吸引許多遊客前來。","such a + 形容詞 + 名詞 + that。unique 雖然以 u 開頭，但發音是子音 /j/，所以用 a。"],
 ["With its unique design, the building attracts many visitors.","這棟建築因為獨特的設計，吸引許多遊客。","with + 名詞 表示原因或特色。"]],
 "uni=單一|-que=形容詞字尾","只有一個的 → 獨特的","🦄|獨一無二"],
/* ---------- r1：字根 cap / cept / ceive（拿） ---------- */
["concept","n.","概念",[
 ["The concept of time is different in each culture.","每個文化對時間的概念都不同。","the concept of + 名詞 表示「……的概念」。"],
 ["The teacher explained the concept with a diagram so that we could understand it.","老師用圖表解釋這個概念，讓我們能理解。","so that + could 表示過去的目的。"],
 ["You should have asked about the concept in class.","你上課時就應該問這個概念的。","should have + p.p.：過去應該做卻沒做。"]],
 "con-=一起|cept=拿","把想法拿在一起 → 概念","💡|概念"],
["perceive","v.","察覺；理解",[
 ["Different cultures perceive colors in different ways.","不同文化對顏色有不同的理解方式。","in different ways 表示「用不同的方式」。"],
 ["He may have perceived my silence as anger.","他可能把我的沉默理解成生氣。","perceive A as B 表示「把 A 看作 B」；may have + p.p. 表示推測。"],
 ["Dogs can perceive sounds that humans can't hear.","狗能察覺到人類聽不見的聲音。","that 引導關係子句，修飾 sounds。"]],
 "per-=完全|ceive=拿","完全拿進腦中 → 察覺","👂|察覺"],
["deceive","v.","欺騙",[
 ["Don't let the low price deceive you.","別被低價騙了。","let + 受詞 + 原形動詞。"],
 ["The seller must have deceived us; the bag broke the next day.","那個賣家一定騙了我們，包包隔天就壞了。","must have + p.p. 根據證據推測。"],
 ["He told the truth so as not to deceive his friends.","他說了實話，以免欺騙他的朋友。","so as not to 表示「以免……」。"]],
 "de-=從……拿走|ceive=拿","從別人身上騙走 → 欺騙","🎭|欺騙"],
["capture","v.","捕捉；捕獲",[
 ["The photographer captured the moment perfectly.","攝影師完美地捕捉了那一刻。","capture 也可以表示「用照片捕捉畫面」。"],
 ["The bird was captured and then released.","那隻鳥被捕捉後又被放走了。","was captured 和 (was) released 都是被動語態。"],
 ["The scientists set up cameras in the forest in order to capture images of the bears.","科學家在森林裡架設相機，以拍到黑熊的影像。","set up 表示「架設」；in order to 表示目的。"]],
 "capt=拿|-ure=名詞／動詞字尾","拿住 → 捕捉","📸|捕捉"],
["capable","adj.","有能力的",[
 ["She is capable of speaking four languages.","她有能力說四種語言。","be capable of + V-ing 表示「有能力做……」，注意 of 後面接動名詞。"],
 ["He is capable; he can't have failed the test.","他很有能力，不可能考不及格。","can't have + p.p. 表示否定推測。"],
 ["Robots will be capable of doing most housework by 2040.","到 2040 年，機器人將能做大部分家事。","be capable of 搭配未來式。"]],
 "cap=拿|-able=可……的","可以拿得起來的 → 有能力的","💪|有能力"],
["capacity","n.","容量；能力",[
 ["The stadium has a capacity of 50,000 people.","這座體育場可容納五萬人。","have a capacity of + 數字 表示「容量有……」。"],
 ["The hall was filled to capacity, with people standing at the back.","大廳坐滿了，還有人站在後面。","with + 受詞 + V-ing：人們「主動」站著。"],
 ["The dam's capacity is so small that it can't store enough water.","水壩的容量太小，無法儲存足夠的水。","so + 形容詞 + that。"]],
 "cap=拿、容納|-acity=名詞字尾","能容納多少 → 容量","🫙|容量"],
["reception","n.","接待處；歡迎會",[
 ["Please leave your key at reception.","請把鑰匙留在接待櫃台。","at reception 表示「在櫃台」，常省略 the。"],
 ["The guests will be having a reception in the garden at six.","客人們六點將在花園裡參加歡迎會。","未來進行式表示已經安排好、會正在進行的事。"],
 ["The new students got such a warm reception that they felt at home.","新生受到熱情的歡迎，覺得很自在。","such a + 形容詞 + 名詞 + that。"]],
 "re-=回|cept=拿|-ion=名詞字尾","把客人接回來 → 接待","🛎️|接待處"],
["exception","n.","例外",[
 ["Everyone must wear a helmet, with no exceptions.","每個人都必須戴安全帽，沒有例外。","with no exceptions 表示「沒有例外」。"],
 ["There is an exception to every rule.","每條規則都有例外。","an exception to + 名詞 表示「……的例外」。"],
 ["The teacher made an exception so that the sick student could take the test later.","老師破例讓生病的學生可以晚點考試。","make an exception 表示「破例」；so that 表示目的。"]],
 "ex-=向外|cept=拿|-ion=名詞字尾","拿到外面去 → 例外","🙅|例外"],
["participate","v.","參加",[
 ["Over 100 students participated in the beach clean-up.","超過一百個學生參加了淨灘活動。","participate in 表示「參加」，一定要加 in。"],
 ["This time tomorrow, I will be participating in the speech contest.","明天這個時候，我將正在參加演講比賽。","未來進行式。"],
 ["You should have participated in the trip; it was so much fun.","你早該參加那次旅行的，非常好玩。","should have + p.p. 表示「可惜你沒做」。"]],
 "parti=部分|cip=拿|-ate=動詞字尾","拿一部分來做 → 參加","🙋|參加"],
["anticipate","v.","預期",[
 ["We anticipate a lot of visitors this weekend.","我們預期這週末會有很多遊客。","anticipate + 名詞 表示「預期……」。"],
 ["Nobody could have anticipated such a strong typhoon.","沒有人能預料到會有這麼強的颱風。","could have + p.p. 的否定表示「過去不可能做到」。"],
 ["We anticipated more guests, so we bought extra food in order to have enough.","我們預期會有更多客人，所以多買了食物，以確保足夠。","in order to + 原形動詞 表示目的；so 在這裡是連接詞「所以」，和表示結果的 so ... that 不同。"]],
 "anti-=事先|cip=拿|-ate=動詞字尾","事先拿在心裡 → 預期","🔭|預期"],
/* ---------- r2：字根 vers / vert（轉） ---------- */
["convert","v.","轉換",[
 ["Solar panels convert sunlight into electricity.","太陽能板把陽光轉換成電。","convert A into B 表示「把 A 轉換成 B」。"],
 ["By next year, the old factory will have been converted into a museum.","到明年，那座舊工廠將已被改建成博物館。","未來完成式的被動：will have been + p.p.。"],
 ["They converted the old train station so as to attract tourists.","他們改造舊火車站，以吸引觀光客。","so as to 表示目的。"]],
 "con-=完全|vert=轉","完全轉過來 → 轉換","🔄|轉換"],
["reverse","v./adj.","反轉；相反的",[
 ["Write the numbers in reverse order.","把數字倒過來寫。","in reverse order 表示「以相反的順序」。"],
 ["We must act now so that we can reverse the damage to the environment.","我們必須立刻行動，才能扭轉對環境的傷害。","so that + 主詞 + can。"],
 ["The car drove in reverse with its lights flashing.","那輛車閃著燈倒車。","with + 受詞 + V-ing：燈「主動」閃爍。"]],
 "re-=向後|verse=轉","往後轉 → 反轉","↩️|反轉"],
["diverse","adj.","多樣的",[
 ["Taiwan has a diverse culture.","台灣有多元的文化。","diverse 修飾 culture。"],
 ["The rainforest is so diverse that scientists find new species every year.","雨林的物種非常多樣，科學家每年都發現新物種。","so + 形容詞 + that。"],
 ["Our class is diverse, with students from five different countries.","我們班很多元，有來自五個不同國家的學生。","with + 名詞片語 表示補充說明。"]],
 "di-=分開|verse=轉","轉向不同方向 → 多樣的","🌈|多樣"],
["version","n.","版本",[
 ["I like the English version of this movie better.","我比較喜歡這部電影的英文版。","the ... version of 表示「……的版本」。"],
 ["By the time you buy it, they will have released a new version.","等你買的時候，他們將已推出新版本了。","by the time + 現在式，主要子句用未來完成式。"],
 ["Update the app so that you can use the latest version.","更新這個 app，你才能使用最新版本。","so that + can。"]],
 "vers=轉|-ion=名詞字尾","轉成另一種樣子 → 版本","📱|版本"],
["advertise","v.","打廣告",[
 ["The company advertises its products online.","這家公司在網路上打廣告。","advertise 表示「為……打廣告」。"],
 ["The hotel should have advertised more; few people know about it.","那家飯店早該多打廣告的，很少人知道它。","should have + p.p.。"],
 ["They advertise on TV in order to reach more customers.","他們在電視上打廣告，以接觸更多顧客。","in order to 表示目的。"]],
 "ad-=朝向|vert=轉|-ise=動詞字尾","讓大家轉過頭來看 → 打廣告","📺|廣告"],
["universe","n.","宇宙",[
 ["There are billions of stars in the universe.","宇宙中有數十億顆星星。","billions of 表示「數十億的」。"],
 ["The universe is so big that we can't imagine its size.","宇宙大到我們無法想像它的大小。","so + 形容詞 + that。"],
 ["Scientists will be studying the universe with a new telescope next year.","科學家明年將用新的望遠鏡研究宇宙。","未來進行式。"]],
 "uni=單一|verse=轉","所有東西轉成一個整體 → 宇宙","@s121_universe"],
["anniversary","n.","週年紀念",[
 ["My parents celebrate their wedding anniversary every year.","我爸媽每年都慶祝結婚週年。","wedding anniversary 表示「結婚週年」。"],
 ["By next June, they will have been married for twenty years.","到明年六月，他們就結婚二十年了。","未來完成式 will have been 表示到未來某時持續的狀態。"],
 ["The school held a party so as to celebrate its 50th anniversary.","學校舉辦派對，慶祝創校五十週年。","so as to 表示目的。"]],
 "anni=年|vers=轉|-ary=名詞字尾","每年轉回來的那一天 → 週年紀念","🎂|週年"],
["conversation","n.","對話",[
 ["I had a long conversation with my homestay mother.","我和寄宿家庭媽媽聊了很久。","have a conversation with 人 表示「和某人談話」。"],
 ["This time next week, I will be having conversations in English every day.","下週的這個時候，我將每天都在用英文對話。","未來進行式。"],
 ["They sat by the fire with cups of tea in their hands, enjoying a long conversation.","他們手裡拿著茶坐在火邊，愉快地聊了很久。","with + 受詞 + 介系詞片語 表示附帶狀況；enjoying ... 是分詞構句，表示同時發生的動作。"]],
 "con-=一起|vers=轉|-ation=名詞字尾","一起轉來轉去地說話 → 對話","💬|對話"],
["vertical","adj.","垂直的",[
 ["Draw a vertical line on the paper.","在紙上畫一條垂直線。","vertical line 表示「垂直線」，相反是 horizontal line。"],
 ["The cliff is so vertical that only skilled climbers can climb it.","懸崖陡峭到只有熟練的攀岩者能爬上去。","so + 形容詞 + that。"],
 ["Some cities build vertical gardens in order to have more green space.","有些城市建造垂直花園，以擁有更多綠地。","in order to 表示目的。"]],
 "vert=轉|-ical=形容詞字尾","轉到直立的 → 垂直的","📏|垂直"],
/* ---------- r3：字根 bio / geo（生命、地球） ---------- */
["biologist","n.","生物學家",[
 ["The biologist studies the black bears in the mountains.","那位生物學家研究山上的黑熊。","the + 名詞 + in + 地點 表示「……地方的……」。"],
 ["The biologist must have spent years watching these birds.","那位生物學家一定花了好幾年觀察這些鳥。","must have + p.p.；spend + 時間 + V-ing 表示「花時間做某事」。"],
 ["The biologists will be counting the fish in the river this time tomorrow.","明天的這個時候，生物學家們將正在清點河裡的魚。","This time tomorrow 搭配未來進行式。"]],
 "bio=生命|log=學問|-ist=……的人","研究生命學問的人 → 生物學家","🔬|生物學家"],
["biography","n.","傳記",[
 ["I'm reading a biography of Steve Jobs.","我正在讀賈伯斯的傳記。","a biography of 人 表示「某人的傳記」。"],
 ["By the end of this year, the writer will have finished the biography.","到今年年底，那位作家將完成這本傳記。","未來完成式。"],
 ["The biography was so interesting that I finished it in one day.","這本傳記有趣到我一天就讀完了。","so + 形容詞 + that。"]],
 "bio=生命|graph=寫|-y=名詞字尾","寫一個人的生命故事 → 傳記","📖|傳記"],
["autobiography","n.","自傳",[
 ["The singer wrote an autobiography about her life.","那位歌手寫了一本關於她人生的自傳。","autobiography 開頭是母音，前面用 an。"],
 ["He can't have written the autobiography himself; he was too busy.","他不可能自己寫那本自傳，他太忙了。","can't have + p.p. 表示否定推測；himself 強調「親自」。"],
 ["She kept a diary in order to write an autobiography someday.","她寫日記，為了將來有一天寫自傳。","in order to 表示目的。"]],
 "auto-=自己|bio=生命|graph=寫|-y=名詞字尾","寫自己的生命故事 → 自傳","✍️|自傳"],
["geology","n.","地質學",[
 ["Geology is the study of rocks and the Earth.","地質學是研究岩石和地球的學問。","the study of + 名詞 表示「研究……的學問」。"],
 ["The geology students will be collecting rocks at the beach tomorrow morning.","地質系學生明天早上將在海邊採集岩石。","未來進行式。"],
 ["He took geology classes so as to understand earthquakes.","他修地質學課程，以了解地震。","so as to 表示目的。"]],
 "geo=地球|-logy=學科","研究地球的學問 → 地質學","🪨|地質學"],
["geometry","n.","幾何學",[
 ["We learn about triangles and circles in geometry.","我們在幾何學中學習三角形和圓形。","in geometry 表示「在幾何學中」。"],
 ["The geometry problem was so hard that nobody could solve it.","那道幾何題難到沒人解得出來。","so + 形容詞 + that。"],
 ["I should have practiced more geometry before the exam.","考試前我早該多練習幾何的。","should have + p.p.：後悔沒做。"]],
 "geo=土地|-metry=測量","測量土地 → 幾何學","📐|幾何學"],
/* ---------- r4：字根 graph / gram（寫、畫） ---------- */
["paragraph","n.","段落",[
 ["Read the first paragraph and answer the question.","讀第一段並回答問題。","祈使句以原形動詞開頭。"],
 ["By the time the bell rings, I will have written three paragraphs.","等到鐘響時，我將寫完三個段落了。","by the time + 現在式 表示未來；主要子句用未來完成式。"],
 ["Each paragraph should have one main idea so that readers can follow it easily.","每一段應該只有一個主旨，讓讀者容易理解。","so that + can。"]],
 "para-=旁邊|graph=寫","寫在旁邊的記號 → 段落","📄|段落"],
["diagram","n.","圖表；圖解",[
 ["This diagram shows how a volcano works.","這張圖解說明火山如何運作。","how a volcano works 是間接問句，用直述句語序。"],
 ["The teacher drew a diagram on the board so that we could understand the water cycle.","老師在黑板上畫了一張圖，讓我們能了解水循環。","過去式搭配 so that ... could。"],
 ["With a diagram in hand, the students built the model easily.","學生們手拿圖解，輕鬆地完成了模型。","with + 受詞 + 介系詞片語 表示附帶狀況。"]],
 "dia-=穿過|gram=畫","畫出穿過整體的線條 → 圖解","@s121_diagram"],
["photograph","n./v.","照片；拍照",[
 ["This old photograph was taken in 1960.","這張老照片是 1960 年拍的。","was taken 是被動語態。"],
 ["He must have photographed the bird with a special camera.","他一定是用特殊相機拍到那隻鳥的。","must have + p.p.。"],
 ["The photograph was such a beautiful one that it won first prize.","那張照片拍得非常美，得了第一名。","such a + 形容詞 + 名詞 + that。"]],
 "photo=光|graph=寫、畫","用光畫出來的圖 → 照片","🖼️|照片"],
["autograph","n.","親筆簽名",[
 ["I got the singer's autograph after the concert.","演唱會後我拿到了那位歌手的親筆簽名。","autograph 指名人的簽名；文件上的簽名是 signature。"],
 ["The fans waited outside for hours in order to get his autograph.","粉絲們在外面等了好幾個小時，為了拿到他的簽名。","in order to 表示目的。"],
 ["This autograph can't have been signed by the real player; the name is wrong.","這個簽名不可能是那位球員本人簽的，名字寫錯了。","can't have been + p.p. 是否定推測的被動式。"]],
 "auto-=自己|graph=寫","自己親手寫的 → 親筆簽名","✒️|簽名"],
["telegram","n.","電報",[
 ["In the past, people sent telegrams for urgent news.","過去人們用電報傳送緊急消息。","send 的過去式是 sent。"],
 ["The telegram must have arrived late; he missed the meeting.","那封電報一定是晚到了，他錯過了會議。","must have + p.p.。"],
 ["Telegrams were so expensive that people used very few words.","電報貴到人們只用很少的字。","so + 形容詞 + that；very few + 複數名詞 表示「很少的」。"]],
 "tele-=遠|gram=寫","寫給遠方的訊息 → 電報","📨|電報"],
["kilogram","n.","公斤",[
 ["This bag of rice weighs five kilograms.","這袋米重五公斤。","weigh 是動詞「重……」；kilogram 常縮寫成 kg。"],
 ["By the end of the trip, I will have gained two kilograms.","旅行結束時，我將已經胖了兩公斤。","by the end of + 未來時間 搭配未來完成式。"],
 ["My suitcase was so heavy that it weighed over thirty kilograms.","我的行李箱重到超過三十公斤。","so + 形容詞 + that 表示結果。"]],
 "kilo-=一千|gram=公克","一千公克 → 公斤","⚖️|公斤"],
["graphic","adj./n.","圖像的；圖形",[
 ["My brother is a graphic designer.","我哥哥是平面設計師。","graphic designer 表示「平面設計師」。"],
 ["The game's graphics are so real that you feel like you are there.","這款遊戲的畫面逼真到讓你覺得身歷其境。","graphics 當名詞「畫面、圖形」常用複數。"],
 ["She used graphics in order to make her report clear.","她用圖像讓報告更清楚。","in order to 表示目的。"]],
 "graph=畫|-ic=形容詞字尾","畫出來的 → 圖像的","🎨|圖像"],
["program","n.","節目；計畫",[
 ["This TV program is about wild animals.","這個電視節目是關於野生動物的。","program 指「節目」。"],
 ["By June, I will have finished the exchange program.","到六月，我將已完成交換計畫。","未來完成式。"],
 ["The school started a recycling program so that less trash would be produced.","學校推動一個回收計畫，以減少垃圾產生。","so that 子句中可以用被動語態 would be produced。"]],
 "pro-=事先|gram=寫","事先寫好的安排 → 節目；計畫","📺|節目"],
["calligraphy","n.","書法",[
 ["My grandfather practices calligraphy every morning.","我爺爺每天早上練書法。","practice + 名詞 表示「練習……」。"],
 ["He sat at the desk with a brush in his hand, writing calligraphy.","他坐在書桌前，手裡拿著毛筆寫書法。","with + 受詞 + 介系詞片語 表示附帶狀況。"],
 ["His calligraphy is so beautiful that people hang it on their walls.","他的書法美到大家把它掛在牆上。","so + 形容詞 + that。"]],
 "calli=美麗|graph=寫|-y=名詞字尾","美麗的寫字 → 書法","@s121_calligraphy"]
];

const S1_2_1_GRAMMAR = [
{ id:"g1", title:"未來進行式與未來完成式",
  intro:"未來進行式 will be V-ing 表示「未來某個時間點正在做」；未來完成式 will have p.p. 表示「到未來某個時間點之前已經完成」，常搭配 by + 未來時間。",
  table:[["時態","句型","常見時間詞","例句"],["未來進行式","will be + V-ing","this time tomorrow、at 8 tomorrow、this time next week","This time tomorrow, I will be flying to Japan."],["未來完成式","will have + p.p.","by + 未來時間、by the time + 現在式、by the end of ...","By 2050, many glaciers will have melted."],["未來完成被動","will have been + p.p.","by next year","The factory will have been converted by next year."]],
  points:[
   "未來進行式強調「那時正在進行」：At 8 tomorrow, I will be taking the test.（明天八點我正在考試）",
   "未來完成式強調「那時已經完成」：By 8 tomorrow, I will have finished the test.（明天八點前我已經考完）",
   "看到 by + 未來時間（by 2050、by next June），通常用未來完成式；這裡的 by 是「在……之前」。",
   "by the time / when 引導的時間副詞子句用現在式代替未來：By the time you arrive, we will have left.（不能說 will arrive）",
   "表示持續到未來某時的狀態，也用未來完成式：By next June, they will have been married for twenty years.",
   "學測陷阱：until 和 by 不同。I will wait until five.（一直等到五點）／I will have finished by five.（五點前完成）"],
  ex:[
   ["This time tomorrow, the backpackers will be hiking in the mountains.","明天的這個時候，背包客們將正在山裡健行。","This time tomorrow → 那時正在進行，用 will be V-ing。"],
   ["By 2050, many species will have died out.","到 2050 年，許多物種將已滅絕。","by + 未來時間 → 未來完成式。"],
   ["By the time you buy it, they will have released a new version.","等你買的時候，他們將已推出新版本了。","by the time 子句用現在式 buy，主要子句用未來完成式。"],
   ["By next year, the old factory will have been converted into a museum.","到明年，那座舊工廠將已被改建成博物館。","未來完成被動：will have been + p.p.。"],
   ["Next year, the whole village will be using solar power.","明年整個村莊都將使用太陽能。","未來進行式也可以表示未來一段時間持續的狀態。"]]},
{ id:"g2", title:"助動詞 + have p.p.：對過去的推測與後悔",
  intro:"「助動詞 + have + p.p.」都是在說過去的事：有的是推測（一定、不可能、可能），有的是後悔或責備（早該、本來可以）。",
  table:[["句型","意思","例句"],["must have p.p.","過去一定已經……（很有把握）","The ground is wet. It must have rained."],["can't / couldn't have p.p.","過去不可能已經……","He can't have finished it so fast."],["may / might / could have p.p.","過去可能已經……（不確定）","She may have missed the bus."],["should have p.p.","過去早該……（卻沒做）","You should have studied harder."],["shouldn't have p.p.","過去不該……（卻做了）","I shouldn't have eaten so much."],["could have p.p.","過去本來可以……（但沒有）","You could have asked me for help."]],
  points:[
   "must have p.p. 是肯定推測，它的否定不是 mustn't have，而是 can't / couldn't have p.p.。",
   "must have p.p.（過去一定是）和 had to（過去必須）意思完全不同：He must have left.（他一定走了）／He had to leave.（他當時不得不走）",
   "should have p.p. 表示「過去該做卻沒做」，常帶後悔或責備；shouldn't have p.p. 表示「做了不該做的事」。",
   "could have p.p. 有兩種意思：「本來可以（但沒做）」或「可能已經」，看上下文判斷。",
   "推測現在用「助動詞 + 原形」，推測過去才用「助動詞 + have p.p.」：He must be tired now.／He must have been tired yesterday.",
   "學測常考：題目後半句常給線索（看到 wet ground、got a perfect score 等證據），用來判斷 must have 還是 can't have。"],
  ex:[
   ["It hasn't rained for months; the farmers must have suffered a lot from the drought.","好幾個月沒下雨了，農夫們一定因為乾旱吃了很多苦。","根據證據做肯定推測：must have suffered。"],
   ["This fossil can't have been made by people; it is millions of years old.","這塊化石不可能是人造的，它有好幾百萬年歷史了。","否定推測：can't have been made。"],
   ["Your joke may have offended her; she left without saying a word.","你的玩笑可能冒犯到她了，她一句話都沒說就走了。","不確定的推測：may have offended。"],
   ["You should have learned about local etiquette before your trip.","你在旅行前早該了解當地的禮節。","後悔或責備：should have learned。"],
   ["You could have bargained for a lower price.","你本來可以殺價殺到更便宜的。","本來可以卻沒做：could have bargained。"]]},
{ id:"g3", title:"with + 受詞 + 補語（附帶狀況）",
  intro:"with + 受詞 + 補語用來描述「伴隨主要動作的狀態」，補語可以是現在分詞、過去分詞、形容詞或介系詞片語。",
  table:[["補語","受詞和補語的關係","例句"],["V-ing","受詞主動在做","With emissions rising, the air is getting worse."],["p.p.","受詞是被動的","The hunter waited with his eyes fixed on the deer."],["形容詞","受詞的狀態","Don't eat with your mouth open."],["介系詞片語","受詞的位置","He sat with a brush in his hand."]],
  points:[
   "判斷 V-ing 或 p.p.：問自己「受詞是主動做，還是被別人做」。The dog ran with its tail wagging.（尾巴自己搖）",
   "身體部位常用 p.p.：with his eyes closed、with her arms folded、with his legs crossed（眼睛是被閉上的）。",
   "形容詞當補語：with the window open、with your mouth full（表示「開著、滿的」這種狀態，直接用形容詞 open、full）。",
   "介系詞片語或副詞當補語：with a book in her hand、with the TV on、with the lights off。",
   "with 附帶狀況可以表示原因：With so much homework to do, I can't go out.（因為有這麼多作業要做）",
   "學測陷阱：with 後面不能直接接完整句子，不能說 with his eyes were closed，要說 with his eyes closed。"],
  ex:[
   ["With emissions rising every year, the air is getting worse.","隨著排放量每年增加，空氣越來越差。","排放量主動增加：rising。"],
   ["With their homes threatened by floods, the villagers moved to higher ground.","家園受到洪水威脅，村民們搬到地勢較高的地方。","家園被威脅：threatened。"],
   ["In some countries, it is a taboo to eat with your mouth open.","在一些國家，張著嘴吃東西是禁忌。","形容詞 open 當補語：嘴巴是張開的狀態。"],
   ["He sat at the desk with a brush in his hand, writing calligraphy.","他坐在書桌前，手裡拿著毛筆寫書法。","介系詞片語 in his hand 當補語。"],
   ["The lion was lying in the grass with its eyes on its prey.","獅子趴在草叢裡，眼睛盯著牠的獵物。","介系詞片語 on its prey 當補語。"]]},
{ id:"g4", title:"目的與結果：so that / in order to / so as to、so…that / such…that",
  intro:"表示「為了……」用 so that + 子句，或 in order to / so as to + 原形動詞；表示「太……以致於……」用 so + 形容詞/副詞 + that，或 such + 名詞片語 + that。",
  table:[["用途","句型","例句"],["目的（子句）","so that + S + can / will / may","We save water so that we can help the Earth."],["目的（片語）","in order to / so as to + V","We save water in order to help the Earth."],["目的的否定","in order not to / so as not to + V","He spoke softly so as not to wake the baby."],["結果（形容詞/副詞）","so + adj./adv. + that","The glacier was so huge that we couldn't see its end."],["結果（名詞片語）","such + (a/an) + adj. + N + that","It was such a serious drought that ..."]],
  points:[
   "so that（為了）後面接完整子句，子句裡常有 can / could / will / would / may；主要子句是過去式時用 could / would。",
   "in order to 和 so as to 後面都接原形動詞；否定把 not 放在 to 前面：in order not to、so as not to。so as to 通常不放句首。",
   "so 後面接形容詞或副詞；such 後面接名詞片語：so beautiful / such a beautiful day。",
   "不可數名詞或複數名詞前用 such，不加 a：such beautiful scenery、such nice people。",
   "many / much / few / little 前面一定用 so：so many people、so little time（不能說 such many）。",
   "學測陷阱：so + 形容詞 + a + 名詞 = such a + 形容詞 + 名詞：so hot a day = such a hot day。"],
  ex:[
   ["We ride bikes to school so that we can reduce our carbon footprint.","我們騎腳踏車上學，以便減少我們的碳足跡。","so that + 子句 表示目的。"],
   ["Visitors must stay on the path in order not to harm the wetland.","遊客必須走在步道上，以免傷害濕地。","in order not to 表示「以免」。"],
   ["The glacier was so huge that we couldn't see the end of it.","這條冰河大到我們看不到盡頭。","so + 形容詞 + that 表示結果。"],
   ["It was such beautiful scenery that we stopped to take pictures.","風景太美了，我們停下來拍照。","such + 形容詞 + 不可數名詞，不加 a。"],
   ["Some countries have so few resources that they must import oil.","有些國家資源少到必須進口石油。","few 前面用 so。"]]}
];

const S1_2_1_QUIZ = [
 /* g1 未來進行式／未來完成式 */
 ["This time tomorrow, we ___ over the Pacific Ocean.",["fly","will be flying","have flown","will have flown"],1,"This time tomorrow 表示「明天這個時候正在做」，用未來進行式 will be flying。","g1"],
 ["By 2050, the sea level ___ by at least 30 centimeters.",["rises","is rising","will have risen","has risen"],2,"by + 未來時間 表示「到那時之前已經完成」，用未來完成式 will have risen。","g1"],
 ["By the time you ___ home, I will have finished dinner.",["get","will get","got","will have gotten"],0,"by the time 引導時間副詞子句，要用現在式代替未來，所以用 get。","g1"],
 ["Don't call me at nine tonight. I ___ my favorite TV program then.",["watch","will have watched","have watched","will be watching"],3,"「今晚九點那時正在看」，用未來進行式 will be watching。","g1"],
 ["By next June, my parents ___ married for twenty years.",["are","will have been","were","will be being"],1,"表示「到明年六月已經持續二十年」的狀態，用未來完成式 will have been。","g1"],
 ["The new MRT line ___ by the end of next year.",["will have completed","completes","will have been completed","is completing"],2,"捷運線是「被完成」的，又有 by the end of next year，用未來完成被動 will have been completed。","g1"],
 ["I will wait for you ___ five o'clock, and then I'll leave.",["by","until","since","for"],1,"「一直等到五點」用 until；by 表示「在……之前完成」，常和未來完成式一起用。","g1"],
 ["By the time we reach the beach, the sun ___.",["will have set","sets","has set","is setting"],0,"by the time + 現在式，主要子句用未來完成式：太陽將已經下山。","g1"],
 ["At this time next Monday, the students ___ their final exam.",["take","will take","will be taking","have taken"],2,"At this time next Monday 表示「下週一這時正在進行」，用未來進行式。","g1"],
 /* g2 助動詞 + have p.p. */
 ["The ground is wet. It ___ last night.",["must rain","must have rained","can't have rained","should have rained"],1,"地是濕的 → 很有把握地推測過去：must have rained。","g2"],
 ["Tom ___ the report himself; he doesn't know any of these words.",["must have written","should have written","can't have written","may write"],2,"他連這些字都不認識 → 不可能是他自己寫的：can't have written。","g2"],
 ["I failed the test. I ___ harder.",["should study","must have studied","can't have studied","should have studied"],3,"後悔過去沒做：should have studied（早該更用功）。","g2"],
 ["You ___ me for help. Why did you do it all by yourself?",["could have asked","must have asked","can't have asked","must ask"],0,"「你本來可以找我幫忙（但沒有）」：could have asked。","g2"],
 ["I'm not sure where Amy is. She ___ the bus.",["must have missed","may have missed","should have missed","can't miss"],1,"不確定的推測用 may have missed（她可能錯過了公車）。","g2"],
 ["I have a stomachache. I ___ so much fried chicken.",["shouldn't have eaten","must have eaten","couldn't eat","may not eat"],0,"「我不該吃那麼多（卻吃了）」：shouldn't have eaten。","g2"],
 ["He got a perfect score in biology. He ___ very hard.",["can't have studied","should have studied","must study","must have studied"],3,"考滿分是證據 → 一定很用功：must have studied。","g2"],
 ["The window was broken from the inside, so the thief ___ in through it.",["must have climbed","should have climbed","can't have climbed","could climb"],2,"窗戶是從裡面打破的 → 小偷不可能從那裡爬進來：can't have climbed。","g2"],
 ["Yesterday the MRT stopped, so I ___ take a taxi to school.",["must have","had to","should have","can't have"],1,"「昨天我不得不搭計程車」是事實，用 had to；must have p.p. 是推測，意思不同。","g2"],
 /* g3 with + O + 補語 */
 ["He fell asleep with the TV ___.",["on","turning on","turned","to turn on"],0,"with + 受詞 + 副詞：with the TV on（電視開著）。","g3"],
 ["She sat quietly with her eyes ___.",["closing","close","closed","to close"],2,"眼睛是「被閉上」的，用過去分詞 closed。","g3"],
 ["With the temperature ___, more ice is melting.",["rose","risen","to rise","rising"],3,"氣溫「主動」上升，用現在分詞 rising；rise 是不及物動詞，沒有被動。","g3"],
 ["Don't talk with your mouth ___.",["full","filling","filled with","to fill"],0,"with + 受詞 + 形容詞：with your mouth full（嘴巴塞滿東西）。","g3"],
 ["The teacher came in with a book ___.",["in her hand","her hand in","holding in","was in her hand"],0,"with + 受詞 + 介系詞片語：with a book in her hand。","g3"],
 ["With so much work ___, I can't go to the movies tonight.",["doing","done","to do","did"],2,"with + 受詞 + to V 表示「還有……要做」：with so much work to do。","g3"],
 ["The dog ran to me with its tail ___.",["wagged","wagging","to wag","wags"],1,"尾巴「自己」在搖，主動用 wagging。","g3"],
 ["He stood there with his arms ___.",["folding","fold","to fold","folded"],3,"手臂是「被交叉」的，用過去分詞 folded。","g3"],
 ["哪一句的寫法正確？",["With his eyes were closed, he listened.","He listened with his eyes closed.","He listened with closing his eyes.","With closed, his eyes, he listened."],1,"with 後面不能接完整子句，要用 with + 受詞 + 補語：with his eyes closed。","g3"],
 /* g4 目的與結果 */
 ["We should save water ___ we can help the farmers.",["so that","such that","in order to","so as to"],0,"後面是完整子句（we can help），用 so that。in order to / so as to 後面接原形動詞。","g4"],
 ["She studies hard ___ get into a good university.",["so that","such","so","in order to"],3,"後面是原形動詞 get，用 in order to。","g4"],
 ["He walked quietly ___ wake the baby.",["so as not to","so as to not","not so as to","so not as to"],0,"so as to 的否定：so as not to + 原形動詞。","g4"],
 ["It was ___ hot day that we stayed inside.",["so","such","such a","so a"],2,"後面是 a + 形容詞 + 名詞，用 such a hot day。","g4"],
 ["The book was ___ interesting that I read it twice.",["such","so","such an","too"],1,"後面只有形容詞 interesting（沒有名詞），用 so。","g4"],
 ["There were ___ many people that we couldn't find a seat.",["such","too","very","so"],3,"many / much / few / little 前面一定用 so：so many people。","g4"],
 ["They are ___ kind people that everyone likes them.",["so","such a","such","so a"],2,"複數名詞 people 前面用 such，不加 a：such kind people。","g4"],
 ["Taroko has ___ beautiful scenery that it attracts many tourists.",["such a","so","such","so a"],2,"scenery 是不可數名詞，用 such，不加 a。","g4"],
 ["It was so ___ that we couldn't see the mountains.",["a foggy day","foggy a day","foggy day","a day foggy"],1,"so + 形容詞 + a + 名詞：so foggy a day = such a foggy day。","g4"]
];

/* ---------- 4 堂文法課（安安老師） ---------- */
const S1_2_1_CLASS = {
g1:[
 {say:"高一同學好！下學期第一課，我們來學兩個「未來」的時態。先看這兩句：{This time tomorrow, I will be flying to Japan.} 和 {By tomorrow, I will have finished my homework.} 一個是「那時正在做」，一個是「那時已經做完」。", board:[["This time tomorrow, I will be flying to Japan.",["will be flying"]],["By tomorrow, I will have finished my homework.",["will have finished"]]]},
 {say:"第一個是未來進行式：will be 加 V-ing。想像你拿著相機，在未來某個時間點拍一張照片，照片裡的你「正在做」某件事。明天這個時候，照片裡的我正在飛機上。", board:[["will be + V-ing",["will be"]],["This time tomorrow / At 8 tomorrow",["This time tomorrow","At 8 tomorrow"]]]},
 {say:"口訣先記起來！", chant:"未來那一刻正在做，will be 加 ing！"},
 {ask:{say:"考考你！", q:"Don't call me at nine tonight. I ___ my favorite program then.", opts:["will watch","will be watching","watched"], ans:1,
   ok:"答對！今晚九點那一刻「正在看」，用 will be watching。", bad:{0:"will watch 只說會看，沒有「那一刻正在看」的感覺，這題要用未來進行式。",2:"tonight 是未來，不能用過去式 watched。"},
   again:{q:"This time next week, we ___ on the beach.", opts:["will be lying","lay"], ans:0, exp:"This time next week 那一刻正在躺著，用 will be lying。"}}},
 {say:"第二個是未來完成式：will have 加過去分詞。它最好的朋友是 by 加未來時間，by 在這裡是「在……之前」。{By 2050, many glaciers will have melted.} 到 2050 年之前，很多冰河已經融化了。", board:[["will have + p.p.",["will have"]],["By 2050, many glaciers will have melted.",["By 2050","will have melted"]]]},
 {say:"第二個口訣！", chant:"看到 by 加未來，will have 加 p.p.！"},
 {ask:{q:"By 2050, the sea level ___ by 30 centimeters.", opts:["rises","will have risen","has risen"], ans:1,
   ok:"讚！by 2050 是未來的截止點，用未來完成式 will have risen。", bad:{0:"by 2050 表示「到 2050 年之前已經完成」，要用未來完成式。",2:"has risen 是現在完成式，是到「現在」為止；這裡是到 2050 年，要用 will have risen。"},
   again:{q:"By next June, I ___ this book.", opts:["will have finished","finish"], ans:0, exp:"by next June → 未來完成式 will have finished。"}}},
 {say:"小心陷阱！by the time 後面的子句雖然講未來，卻要用現在式。{By the time you arrive, we will have left.} 不能寫成 will arrive！", board:[["By the time you arrive, we will have left.",["arrive","will have left"]],["By the time you will arrive, ...",[],true]]},
 {say:"這是時間副詞子句的老規則！", chant:"時間條件用現在，代替未來不用 will！"},
 {ask:{q:"By the time you ___ home, I will have cooked dinner.", opts:["will get","get","got"], ans:1,
   ok:"太好了！by the time 子句用現在式代替未來：get。", bad:{0:"時間副詞子句不能用 will，要用現在式 get。",2:"這是在說未來的事，不能用過去式 got。"},
   again:{q:"When she ___ tomorrow, I will tell her the news.", opts:["comes","will come"], ans:0, exp:"when 引導的時間子句用現在式代替未來。"}}},
 {say:"最後一個學測陷阱：until 和 by 不一樣！{I will wait until five.} 是「一直等到五點」，動作一直持續；{I will have finished by five.} 是「五點前完成」。", board:[["I will wait until five.",["until"]],["I will have finished by five.",["by"]]]},
 {ask:{say:"最後一題！", q:"I will stay here ___ my mom comes back.", opts:["by","until","since"], ans:1,
   ok:"完美！「一直待到媽媽回來」，動作持續，用 until。", bad:{0:"by 表示「在……之前完成」，這裡是一直待著，要用 until。",2:"since 是「自從」，搭配完成式，不符合這裡的意思。"},
   again:{q:"Please hand in your report ___ Friday.", opts:["until","by"], ans:1, exp:"「在星期五之前交出」是截止期限，用 by。"}}},
 {say:"未來兩兄弟過關！複習口訣：未來那一刻正在做，will be 加 ing；看到 by 加未來，will have 加 p.p.；時間子句用現在式代替未來！", end:true}
],
g2:[
 {say:"今天要當偵探！看到線索，推測「過去」發生了什麼。看黑板：{The ground is wet. It must have rained.} 地上濕濕的，昨晚一定下過雨。", board:[["The ground is wet. It must have rained.",["must have rained"]]]},
 {say:"重點是：助動詞後面加 have 加過去分詞，就是在說過去的事。must have p.p. 是「一定已經」，can't have p.p. 是「不可能已經」，may have p.p. 是「可能已經」。", board:[["must have p.p.　一定（90%）",["must have"]],["may / might have p.p.　可能（50%）",["may","might"]],["can't have p.p.　不可能（0%）",["can't have"]]]},
 {say:"偵探口訣！", chant:"一定 must、可能 may、不可能 can't，後面都加 have p.p.！"},
 {ask:{q:"He got a perfect score. He ___ very hard.", opts:["must have studied","can't have studied","should study"], ans:0,
   ok:"答對！滿分是證據，推測他一定很用功：must have studied。", bad:{1:"考滿分怎麼會不可能用功呢？線索指向「一定」。",2:"should study 是「應該讀」，不是推測過去，要用 must have studied。"},
   again:{q:"The lights are off. They ___ out.", opts:["must have gone","can't have gone"], ans:0, exp:"燈都關了 → 他們一定出門了：must have gone。"}}},
 {say:"注意！must have 的否定不是 mustn't have，而是 can't have。{He can't have written it; he doesn't know these words.} 他連這些字都不懂，不可能是他寫的。", board:[["He can't have written it.",["can't have"]],["He mustn't have written it.",[],true]]},
 {ask:{q:"Amy ___ the cake; she was in Tainan all day.", opts:["must have made","can't have made","should have made"], ans:1,
   ok:"讚！她整天都在台南，不可能做蛋糕：can't have made。", bad:{0:"她整天都不在，線索指向「不可能」。",2:"should have 是「早該」，這題在推測，不是在責備。"},
   again:{q:"I'm not sure. She ___ the bus.", opts:["may have missed","must have missed"], ans:0, exp:"不確定的推測用 may have missed。"}}},
 {say:"換個心情：後悔和責備！should have p.p. 是「早該做卻沒做」，shouldn't have p.p. 是「不該做卻做了」，could have p.p. 是「本來可以」。", board:[["I should have studied harder.",["should have"]],["I shouldn't have eaten so much.",["shouldn't have"]],["You could have asked me.",["could have"]]]},
 {say:"後悔口訣！", chant:"早該 should、不該 shouldn't、本來可以 could，加上 have p.p.！"},
 {ask:{q:"I failed the test. I ___ harder.", opts:["should have studied","must have studied","can't have studied"], ans:0,
   ok:"對！後悔沒用功：should have studied。", bad:{1:"must have 是推測「一定有讀」，可是你考不好，這裡是後悔。",2:"can't have 是推測，這題是在後悔自己沒讀。"},
   again:{q:"I have a stomachache. I ___ so much ice cream.", opts:["shouldn't have eaten","must have eaten"], ans:0, exp:"不該吃卻吃了：shouldn't have eaten。"}}},
 {say:"最後一個學測大陷阱：must have p.p. 和 had to 長得有點像，意思完全不同！{He must have left.} 是推測「他一定走了」；{He had to leave.} 是事實「他當時不得不走」。", board:[["He must have left.　推測",["must have left"]],["He had to leave.　事實：不得不",["had to"]]]},
 {ask:{say:"最後一題！", q:"Yesterday the MRT stopped, so I ___ take a taxi.", opts:["must have","had to","should have"], ans:1,
   ok:"完美！這是發生過的事實「我不得不搭計程車」，用 had to。", bad:{0:"must have 是推測，而且後面要接 p.p.；這裡是事實，用 had to。",2:"should have 是後悔沒做，和句意不合。"},
   again:{q:"You ___ me for help. Why didn't you?", opts:["could have asked","had to ask"], ans:0, exp:"本來可以找我卻沒有：could have asked。"}}},
 {say:"偵探課結束！複習口訣：一定 must、可能 may、不可能 can't；早該 should、本來可以 could，後面都是 have p.p.；推測用 must have，事實用 had to！", end:true}
],
g3:[
 {say:"今天學一個讓英文作文變生動的句型：with 加受詞加補語，用來描述「一邊……的樣子」。看這句：{He sat with a brush in his hand.} 他坐著，手裡拿著毛筆。", board:[["He sat with a brush in his hand.",["with","a brush","in his hand"]]]},
 {say:"公式就是：with 加受詞，再加一個補語。補語可以是四種東西：V-ing、p.p.、形容詞、介系詞片語。", board:[["with + O + V-ing",["V-ing"]],["with + O + p.p.",["p.p."]],["with + O + adj.",["adj."]],["with + O + 介系詞片語",["介系詞片語"]]]},
 {say:"先記口訣！", chant:"with 加受詞，後面補一個狀態！"},
 {say:"最常考的是 V-ing 還是 p.p.。判斷法：受詞是自己在做，用 V-ing；受詞是被做的，用 p.p.。{The dog ran with its tail wagging.} 尾巴自己在搖。{She sat with her eyes closed.} 眼睛是被閉上的。", board:[["with its tail wagging　尾巴自己搖",["wagging"]],["with her eyes closed　眼睛被閉上",["closed"]]]},
 {say:"主動被動口訣！", chant:"自己動用 ing，被動就用 p.p.！"},
 {ask:{q:"She sat quietly with her eyes ___.", opts:["closing","closed"], ans:1,
   ok:"答對！眼睛是被閉上的，用 closed。", bad:{0:"眼睛不會自己閉，是被你閉上的，要用過去分詞 closed。"},
   again:{q:"He stood there with his arms ___.", opts:["folded","folding"], ans:0, exp:"手臂被交叉起來，用 folded。"}}},
 {ask:{q:"With the temperature ___, more ice is melting.", opts:["rising","risen","rose"], ans:0,
   ok:"讚！氣溫自己上升，用 rising。", bad:{1:"rise 是不及物動詞，沒有被動，不能用 risen 當被動補語。",2:"rose 是過去式，with 後面不能接完整動詞。"},
   again:{q:"With emissions ___ every year, the air is getting worse.", opts:["increasing","increased"], ans:0, exp:"排放量自己增加，用 increasing。"}}},
 {say:"補語也可以是形容詞或介系詞片語：{Don't talk with your mouth full.} 嘴巴塞滿東西時別說話。{He fell asleep with the TV on.} 他開著電視睡著了。", board:[["with your mouth full",["full"]],["with the TV on",["on"]],["with a book in her hand",["in her hand"]]]},
 {ask:{q:"Don't talk with your mouth ___.", opts:["full","filling","fill"], ans:0,
   ok:"對！形容詞 full 當補語：嘴巴是滿的。", bad:{1:"嘴巴不會自己去裝東西，這裡要用形容詞 full 表示狀態。",2:"fill 是原形動詞，不能當補語。"},
   again:{q:"He fell asleep with the lights ___.", opts:["on","turning on"], ans:0, exp:"副詞 on 表示「開著」的狀態。"}}},
 {say:"最後一個陷阱：with 後面不能接完整句子！{with his eyes were closed} 是錯的，把 were 拿掉才對。", board:[["He listened with his eyes closed.",["his eyes closed"]],["He listened with his eyes were closed.",[],true]]},
 {ask:{say:"最後一題！", q:"哪一句正確？", opts:["With his eyes were closed, he listened.","He listened with his eyes closed.","He listened with closing his eyes."], ans:1,
   ok:"完美！with + 受詞 + 補語，中間不能有動詞 were。", bad:{0:"with 後面不能接完整句子，要拿掉 were。",2:"with 後面要先放受詞 his eyes，再放補語 closed。"},
   again:{q:"With so much homework ___, I can't go out.", opts:["to do","doing"], ans:0, exp:"with + 受詞 + to V 表示「還有……要做」。"}}},
 {say:"with 附帶狀況過關！口訣：with 加受詞，後面補一個狀態；自己動用 ing，被動就用 p.p.；with 後面不能放完整句子！", end:true}
],
g4:[
 {say:"最後一課：目的與結果！先分清楚兩件事：「為了做某事」是目的，「太怎樣以致於怎樣」是結果。{We save water so that we can help the Earth.} 這是目的。{The glacier was so huge that we couldn't see its end.} 這是結果。", board:[["We save water so that we can help the Earth.",["so that"]],["The glacier was so huge that we couldn't see its end.",["so","that"]]]},
 {say:"表示目的有三種寫法：so that 加完整子句，in order to 和 so as to 加原形動詞。{We save water in order to help the Earth.}", board:[["so that + S + can / will",["so that"]],["in order to + V",["in order to"]],["so as to + V",["so as to"]]]},
 {say:"目的口訣！", chant:"so that 接句子，in order to、so as to 接原形！"},
 {ask:{q:"She studies hard ___ get into a good university.", opts:["so that","in order to","such"], ans:1,
   ok:"答對！後面是原形動詞 get，用 in order to。", bad:{0:"so that 後面要接完整子句，例如 so that she can get ...。",2:"such 是用來表示結果的，不能表示目的。"},
   again:{q:"We ride bikes ___ we can reduce pollution.", opts:["so that","in order to"], ans:0, exp:"後面是完整子句 we can reduce，用 so that。"}}},
 {say:"否定要注意 not 的位置：放在 to 的前面！{He walked quietly so as not to wake the baby.}", board:[["so as not to wake the baby",["not"]],["so as to not wake the baby",[],true]]},
 {ask:{q:"Turn off the lights ___ waste energy.", opts:["in order not to","in order to not","not in order to"], ans:0,
   ok:"讚！否定是 in order not to，not 放在 to 前面。", bad:{1:"not 要放在 to 的前面：in order not to。",2:"not 不能放在最前面，要說 in order not to。"},
   again:{q:"He spoke softly ___ wake the baby.", opts:["so as not to","so as to not"], ans:0, exp:"so as not to + 原形動詞。"}}},
 {say:"接著是結果：so 和 such 的差別！so 後面接形容詞或副詞，such 後面接名詞片語。{so beautiful} 對，{such a beautiful day} 也對。", board:[["so + adj. / adv. + that",["so"]],["such + (a/an) + adj. + N + that",["such"]]]},
 {say:"so 和 such 口訣！", chant:"so 接形容詞，such 接名詞！"},
 {ask:{q:"It was ___ hot day that we stayed inside.", opts:["so","such a","such"], ans:1,
   ok:"對！後面是 a hot day（名詞片語），用 such a。", bad:{0:"後面有名詞 day，so 不能直接接 a + 形容詞 + 名詞的順序。",2:"day 是可數單數名詞，要有 a：such a hot day。"},
   again:{q:"The book was ___ interesting that I read it twice.", opts:["so","such"], ans:0, exp:"後面只有形容詞 interesting，用 so。"}}},
 {say:"三個學測陷阱！第一，不可數或複數名詞前用 such，不加 a：{such beautiful scenery}。第二，many、much、few、little 前面一定用 so：{so many people}。第三，{so hot a day} 等於 {such a hot day}。", board:[["such beautiful scenery",["such"]],["so many people",["so many"]],["so hot a day = such a hot day",["so hot a day","such a hot day"]]]},
 {ask:{say:"最後一題！", q:"There were ___ many tourists that we couldn't find a seat.", opts:["such","so","very"], ans:1,
   ok:"完美！many 前面一定用 so：so many tourists。", bad:{0:"many、much、few、little 前面不能用 such，要用 so。",2:"very 不能搭配 that 表示結果。"},
   again:{q:"Taroko has ___ beautiful scenery that many people visit it.", opts:["such a","such"], ans:1, exp:"scenery 不可數，用 such，不加 a。"}}},
 {say:"目的與結果過關！口訣：so that 接句子，in order to、so as to 接原形；so 接形容詞，such 接名詞；many、much、few、little 前面用 so！高一下第一次段考的文法全部上完，去挑戰魔王吧！", end:true}
]};

/* ---------- 4 堂字根字首課 ---------- */
const S1_2_1_ROOTS = [
  {id:"r1", title:"字根 cap / cept / ceive：拿"},
  {id:"r2", title:"字根 vers / vert：轉"},
  {id:"r3", title:"字根 bio / geo：生命、地球"},
  {id:"r4", title:"字根 graph / gram：寫、畫"}
];
const S1_2_1_ROOT_CLASS = {
r1:[
 {say:"高一同學好！這學期的字根課開始囉。第一個字根有好幾個樣子：<<cap>>、<<cept>>、<<ceive>>，還有 <<cip>>，意思都是「拿」。", board:[["cap / cept / ceive / cip = 拿",["cap","cept","ceive","cip"],false,true]]},
 {say:"先看 <<cap>>：{capture} 把東西拿住，就是捕捉；{capable} 拿得起來的，就是有能力的；{capacity} 能拿多少，就是容量。", board:[["capt + ure = capture",["capt"],false,true],["cap + able = capable",["cap"],false,true],["cap + acity = capacity",["cap"],false,true]]},
 {say:"口訣！", chant:"cap、cept、ceive，通通都是拿拿拿！"},
 {ask:{q:"cap（拿）＋ able（可……的）＝ capable，意思是？", opts:["有能力的","帽子","容量"], ans:0,
   ok:"對！拿得起來的，就是有能力的。", bad:{1:"帽子是 cap 單獨一個字，這裡的 cap 是字根「拿」。",2:"容量是 capacity，able 表示「可……的」，是形容詞。"},
   again:{q:"capture 的意思最可能是？", opts:["捕捉","釋放"], ans:0, exp:"capt 是「拿」，把東西拿住就是捕捉。"}}},
 {say:"再看 <<cept>>：{concept} 把想法拿在一起，就是概念；{reception} 把客人接回來，就是接待處；{exception} 拿到外面去，就是例外。國中學過的 {accept} 和 {except} 也是同一家人！", board:[["con + cept = concept",["cept"],false,true],["re + cept + ion = reception",["cept"],false,true],["ex + cept + ion = exception",["cept"],false,true]]},
 {ask:{q:"ex（向外）＋ cept（拿）＋ ion ＝ exception，意思是？", opts:["接待","例外","概念"], ans:1,
   ok:"讚！拿到外面去、不算在裡面，就是例外。", bad:{0:"接待是 reception，re 是「回來」。",2:"概念是 concept，con 是「一起」。"},
   again:{q:"con（一起）＋ cept（拿）＝ concept，意思是？", opts:["概念","演唱會"], ans:0, exp:"把想法拿在一起，就是概念。演唱會是 concert，拼法不一樣喔。"}}},
 {say:"<<ceive>> 也是拿：{perceive} 完全拿進腦中，就是察覺；{deceive} 從別人身上拿走，就是欺騙。國中學過的 {receive} 收到，也是同一個字根。", board:[["per + ceive = perceive",["ceive"],false,true],["de + ceive = deceive",["ceive"],false,true],["re + ceive = receive",["ceive"],false,true]]},
 {say:"拼字口訣！ceive 是 e 在 i 前面！", chant:"c 後面，e 在 i 前面：ceive、ceive！"},
 {ask:{q:"「欺騙」的正確拼法是？", opts:["decieve","deceive","deseive"], ans:1,
   ok:"太好了！c 後面是 ei：deceive。", bad:{0:"c 後面要先 e 再 i：deceive。",2:"字根是 ceive，用 c 不是 s。"},
   again:{q:"「察覺」的正確拼法是？", opts:["perceive","percieve"], ans:0, exp:"c 後面 e 在 i 前面：perceive。"}}},
 {say:"最後一個變身：<<cip>>。{participate} 拿一部分來做，就是參加；{anticipate} 事先拿在心裡，就是預期。", board:[["parti + cip + ate = participate",["cip"],false,true],["anti + cip + ate = anticipate",["cip"],false,true]]},
 {ask:{say:"最後一題！", q:"participate 後面要接哪個介系詞？", opts:["at","in","on"], ans:1,
   ok:"完美！participate in 表示參加某活動。", bad:{0:"participate 固定搭配 in，不用 at。",2:"participate 固定搭配 in，不用 on。"},
   again:{q:"anticipate 的意思最可能是？", opts:["預期","參加"], ans:0, exp:"anti 在這裡是「事先」，事先拿在心裡就是預期。"}}},
 {say:"cap 家族過關！口訣：cap、cept、ceive、cip 都是拿；c 後面 e 在 i 前面。", end:true}
],
r2:[
 {say:"今天學會「轉」的字根：<<vers>> 和 <<vert>>。想像一個方向盤，轉一轉，方向就變了！", board:[["vers / vert = 轉",["vers","vert"],false,true]]},
 {say:"<<vert>> 家族：{convert} 完全轉過來，就是轉換；{advertise} 讓大家把頭轉過來看，就是打廣告；{vertical} 轉到直立，就是垂直的。", board:[["con + vert = convert",["vert"],false,true],["ad + vert + ise = advertise",["vert"],false,true],["vert + ical = vertical",["vert"],false,true]]},
 {say:"口訣！", chant:"vers、vert 轉轉轉，方向一轉意思變！"},
 {ask:{q:"con（完全）＋ vert（轉）＝ convert，意思是？", opts:["轉換","對話","垂直"], ans:0,
   ok:"對！完全轉過來，就是轉換。", bad:{1:"對話是 conversation，多了 -ation 字尾。",2:"垂直是 vertical。"},
   again:{q:"ad（朝向）＋ vert（轉）＋ ise ＝ advertise，意思是？", opts:["打廣告","建議"], ans:0, exp:"讓大家轉頭來看，就是打廣告。"}}},
 {say:"<<vers>> 家族：{reverse} 往後轉，就是反轉；{diverse} 轉向不同方向，就是多樣的；{version} 轉成另一種樣子，就是版本。", board:[["re + verse = reverse",["verse"],false,true],["di + verse = diverse",["verse"],false,true],["vers + ion = version",["vers"],false,true]]},
 {ask:{q:"di（分開）＋ verse（轉）＝ diverse，意思是？", opts:["相反的","多樣的","垂直的"], ans:1,
   ok:"讚！往各種方向轉開，就是多樣的。", bad:{0:"相反的是 reverse，re 是「向後」。",2:"垂直的是 vertical。"},
   again:{q:"reverse 的意思最可能是？", opts:["反轉","前進"], ans:0, exp:"re 是向後，往後轉就是反轉。"}}},
 {say:"再加三個大字：{universe} 所有東西轉成一個整體，就是宇宙；{anniversary} 每年轉回來的那天，就是週年紀念；{conversation} 一起轉來轉去地說話，就是對話。", board:[["uni + verse = universe",["verse"],false,true],["anni + vers + ary = anniversary",["vers"],false,true],["con + vers + ation = conversation",["vers"],false,true]]},
 {say:"順便認識兩個好用的字首：<<uni>> 是「一」，像 {unique} 獨特的、{uniform} 制服；<<anni>> 是「年」，和 annual（每年的）同一家。", board:[["uni = 一：universe、unique",["uni"],false,true],["anni = 年：anniversary",["anni"],false,true]]},
 {say:"字首口訣！", chant:"uni 是一，anni 是年，一年轉一次是週年！"},
 {ask:{say:"最後一題！", q:"My parents are celebrating their 20th wedding ＿＿.", opts:["universe","anniversary","version"], ans:1,
   ok:"完美！結婚二十週年：anniversary。", bad:{0:"universe 是宇宙，和結婚紀念無關。",2:"version 是版本，這裡要說週年紀念。"},
   again:{q:"I like the English ＿＿ of this movie.", opts:["version","conversation"], ans:0, exp:"英文版：the English version。"}}},
 {say:"轉轉轉過關！口訣：vers、vert 都是轉；uni 是一，anni 是年。", end:true}
],
r3:[
 {say:"今天學兩個超實用的字根：<<bio>> 是「生命」，<<geo>> 是「地球、土地」。自然科的科目名稱，很多都是它們組成的！", board:[["bio = 生命",["bio"],false,true],["geo = 地球、土地",["geo"],false,true]]},
 {say:"先認識一個好朋友：字尾 <<logy>>，意思是「學科、學問」。{biology} 研究生命的學問，就是生物學；{geology} 研究地球的學問，就是地質學。", board:[["bio + logy = biology",["bio","logy"],false,true],["geo + logy = geology",["geo","logy"],false,true]]},
 {say:"口訣！", chant:"bio 生命，geo 地球，加上 logy 變學問！"},
 {ask:{q:"bio（生命）＋ logy（學科）＝ biology，意思是？", opts:["地質學","生物學","地理學"], ans:1,
   ok:"對！研究生命的學問：生物學。", bad:{0:"地質學是 geology，geo 是地球。",2:"地理學是 geography，也是 geo 開頭。"},
   again:{q:"geology 的意思最可能是？", opts:["地質學","生物學"], ans:0, exp:"geo 是地球，加 logy 是研究地球的學問。"}}},
 {say:"國中學過的 {geography} 地理，是 geo 加 graph（寫、畫），把地球畫出來！再看 {geometry}：<<geo>> 加 <<metry>>（測量），古代人量土地，就發展出幾何學。", board:[["geo + graph + y = geography",["geo"],false,true],["geo + metry = geometry",["geo","metry"],false,true]]},
 {ask:{q:"geo（土地）＋ metry（測量）＝ geometry，意思是？", opts:["幾何學","溫度計","地理"], ans:0,
   ok:"讚！量土地發展出幾何學。", bad:{1:"溫度計是 thermometer，雖然也有 meter（測量），但沒有 geo。",2:"地理是 geography，是 geo 加 graph。"},
   again:{q:"metry / meter 的意思是？", opts:["測量","生命"], ans:0, exp:"meter、metry 都是「測量」。"}}},
 {say:"<<bio>> 和 <<graph>>（寫）合在一起：{biography} 寫一個人的生命故事，就是傳記。再加上 <<auto>>（自己）：{autobiography} 寫自己的生命故事，就是自傳！", board:[["bio + graph + y = biography",["bio","graph"],false,true],["auto + bio + graph + y = autobiography",["auto","bio","graph"],false,true]]},
 {say:"自傳口訣！", chant:"auto 自己，bio 生命，graph 寫下來，自傳就出來！"},
 {ask:{q:"「寫自己一生的書」是哪一個字？", opts:["biography","autobiography","geography"], ans:1,
   ok:"太好了！auto（自己）＋ bio（生命）＋ graph（寫）：自傳。", bad:{0:"biography 是別人寫的傳記，少了 auto（自己）。",2:"geography 是地理，geo 是地球。"},
   again:{q:"biography 的意思是？", opts:["傳記","生物學"], ans:0, exp:"寫一個人的生命故事：傳記。"}}},
 {say:"讀英文文章遇到不認識的字，先找有沒有 bio 或 geo！像 biologist 就是研究生命的人：生物學家；geologist 就是地質學家。字尾 -ist 表示「……的人」。", board:[["biologist　生物學家",["bio"],false,true],["geologist　地質學家",["geo"],false,true]]},
 {ask:{say:"最後一題！", q:"Someone who studies rocks and earthquakes is a ＿＿.", opts:["biologist","geologist","tourist"], ans:1,
   ok:"完美！研究岩石和地震的是地質學家：geologist。", bad:{0:"biologist 研究生命，不是岩石。",2:"tourist 是觀光客，和研究無關。"},
   again:{q:"I want to study animals and plants. I'll major in ＿＿.", opts:["biology","geometry"], ans:0, exp:"研究動植物：biology。"}}},
 {say:"bio 和 geo 過關！口訣：bio 生命，geo 地球，加上 logy 變學問；auto 自己，graph 寫下來。", end:true}
],
r4:[
 {say:"最後一課！字根 <<graph>> 和 <<gram>>，意思都是「寫、畫」。你每天都在用：手機裡的 Instagram 就有 gram 喔！", board:[["graph / gram = 寫、畫",["graph","gram"],false,true]]},
 {say:"<<graph>> 家族：{paragraph} 寫在旁邊的記號，就是段落；{photograph} 用光畫出來的，就是照片；{autograph} 自己親手寫的，就是親筆簽名。", board:[["para + graph = paragraph",["graph"],false,true],["photo + graph = photograph",["graph"],false,true],["auto + graph = autograph",["graph"],false,true]]},
 {say:"口訣！", chant:"graph、gram 寫寫畫，photo 是光、auto 自己！"},
 {ask:{q:"photo（光）＋ graph（畫）＝ photograph，意思是？", opts:["照片","簽名","段落"], ans:0,
   ok:"對！用光畫出來的圖，就是照片。", bad:{1:"簽名是 autograph，auto 是自己。",2:"段落是 paragraph，para 是旁邊。"},
   again:{q:"autograph 的意思是？", opts:["親筆簽名","自傳"], ans:0, exp:"auto 自己 + graph 寫：親筆簽名。自傳是 autobiography。"}}},
 {say:"<<gram>> 家族：{diagram} 畫出線條來說明，就是圖解；{telegram} 寫給遠方的訊息，就是電報；{program} 事先寫好的安排，就是節目或計畫；{grammar} 寫字的規則，就是文法！還有一個特別的：gram 也是重量單位「公克」，{kilogram} 一千公克就是公斤。", board:[["dia + gram = diagram",["gram"],false,true],["tele + gram = telegram",["gram"],false,true],["pro + gram = program",["gram"],false,true],["gram + mar = grammar",["gram"],false,true]]},
 {ask:{q:"tele（遠）＋ gram（寫）＝ telegram，意思是？", opts:["電視","電報","望遠鏡"], ans:1,
   ok:"讚！寫給遠方的訊息：電報。", bad:{0:"電視是 television，vis 是看。",2:"望遠鏡是 telescope，scope 是看。"},
   again:{q:"tele 的意思是？", opts:["遠","寫"], ans:0, exp:"tele 是「遠」：telephone、television、telegram。"}}},
 {say:"文法 grammar 最常拼錯！記住是兩個 m，結尾是 ar，不是 er。", board:[["grammar",["mm","ar"]],["grammer",[],true]]},
 {say:"拼字口訣！", chant:"grammar 兩個 m，結尾 ar 不是 er！"},
 {ask:{q:"「文法」的正確拼法是？", opts:["grammer","gramar","grammar"], ans:2,
   ok:"太好了！兩個 m，結尾 ar：grammar。", bad:{0:"結尾是 ar 不是 er：grammar。",1:"要兩個 m：grammar。"},
   again:{q:"「段落」的正確拼法是？", opts:["paragraph","paragragh"], ans:0, exp:"para + graph：paragraph。"}}},
 {say:"最後兩個：{graphic} 畫出來的，就是圖像的；{calligraphy} 美麗的寫字，就是書法！<<calli>> 是「美麗」的意思。", board:[["graph + ic = graphic",["graph"],false,true],["calli + graph + y = calligraphy",["calli","graph"],false,true]]},
 {ask:{say:"最後一題！", q:"My grandfather writes Chinese characters with a brush. He loves ＿＿.", opts:["calligraphy","geography","biography"], ans:0,
   ok:"完美！用毛筆寫美麗的字：calligraphy 書法。", bad:{1:"geography 是地理，geo 是地球。",2:"biography 是傳記，bio 是生命。"},
   again:{q:"The teacher drew a ＿＿ to explain the water cycle.", opts:["diagram","telegram"], ans:0, exp:"畫圖來解釋：diagram 圖解。"}}},
 {say:"字根課全部過關！口訣：graph、gram 寫寫畫；photo 光、auto 自己、tele 遠、calli 美麗。這學期四個字根都學完了，快去玩「字根拼圖」吧！", end:true}
]};

/* ---------- 插圖：手繪場景（原創，key 加上 s121_ 避免和其他單元衝突） ---------- */
Object.assign(ILLUS2, {
  s121_greenhouse: () => svgWrap("#fff4e0", `<path d="M14 104 Q80 6 146 104 Z" fill="#bfe6ff" opacity=".6" stroke="#93c5fd" stroke-width="2"/>` + ground("#a7d98b") + O.sun(134, 20, .55) + `<path d="M122 28 L100 58 L112 64 L90 92" stroke="#f97316" stroke-width="2.5" fill="none" stroke-dasharray="4 3"/><path d="M90 92 L70 70 L58 84" stroke="#ef4444" stroke-width="2.5" fill="none" stroke-dasharray="4 3"/>` + O.tree(48, 84, .5) + O.sprout(110, 98, .7) + txt(78, 52, "CO₂", 13, "#6b7280") + spark(30, 58, .7, "#f97316")),
  s121_glacier: () => svgWrap("#e0f2fe", `<rect x="0" y="86" width="160" height="34" fill="#60a5fa"/><path d="M26 86 L42 40 L60 52 L78 26 L98 54 L114 44 L132 86 Z" fill="#fff" stroke="#bae6fd" stroke-width="2"/><path d="M42 40 L50 66 M78 26 L82 70 M114 44 L108 72" stroke="#bae6fd" stroke-width="2"/><path d="M36 98 Q46 93 56 98 M98 102 Q108 97 118 102" stroke="#fff" stroke-width="2" fill="none"/><path d="M60 86 Q62 92 60 96 M96 86 Q98 92 96 96" stroke="#bae6fd" stroke-width="2.5" fill="none" stroke-linecap="round"/>` + O.sun(138, 20, .55)),
  s121_coral: () => svgWrap("#0e7490", `<path d="M0 100 Q80 92 160 100 V120 H0 Z" fill="#fde68a"/><path d="M30 100 V74 M30 86 L20 72 M30 80 L40 66 M20 72 V64 M40 66 V58" stroke="#fb7185" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M118 100 V78 M118 88 L106 76 M118 84 L130 70 M106 76 V66" stroke="#f97316" stroke-width="6" stroke-linecap="round" fill="none"/><circle cx="72" cy="96" r="8" fill="#a78bfa"/><circle cx="82" cy="98" r="6" fill="#c084fc"/>` + grp(78, 46, 1, `<ellipse rx="14" ry="8" fill="#fbbf24"/><path d="M12 0 L22 -8 L22 8 Z" fill="#fbbf24"/><circle cx="-7" cy="-2" r="1.8" fill="${INK}"/><path d="M-2 -7 V7" stroke="#fff" stroke-width="2.5"/>`) + grp(124, 30, .7, `<ellipse rx="14" ry="8" fill="#60a5fa"/><path d="M12 0 L22 -8 L22 8 Z" fill="#60a5fa"/><circle cx="-7" cy="-2" r="1.8" fill="${INK}"/>`) + `<circle cx="50" cy="30" r="3" fill="none" stroke="#e0f2fe" stroke-width="1.5"/><circle cx="56" cy="20" r="2" fill="none" stroke="#e0f2fe" stroke-width="1.5"/>`),
  s121_backpacker: () => svgWrap("#e8f4ff", `<path d="M0 104 L40 50 L72 86 L104 40 L160 104 Z" fill="#a5b4fc"/><path d="M96 52 L104 40 L112 52 Z" fill="#fff"/>` + ground("#bbe5a6") + O.tree(24, 92, .5) + `<rect x="74" y="58" width="20" height="30" rx="6" fill="#16a34a"/><rect x="76" y="80" width="16" height="6" rx="2" fill="#15803d"/><path d="M76 58 Q84 50 92 58" stroke="#15803d" stroke-width="3" fill="none"/>` + P({x:72, y:106, s:.85, hair:"short", hc:"#3b2a20", oc:"#f97316", pose:"wave", acc:["cap"], mood:"open"}) + O.sun(136, 22, .5)),
  s121_universe: () => svgWrap("#1e1b4b", [[18,20],[44,90],[70,14],[140,96],[150,40],[100,104],[30,60],[120,16]].map(([x, y], i) => star(x, y, i % 2 ? 3 : 4.5, i % 3 ? "#fde68a" : "#fff")).join("") + `<circle cx="84" cy="62" r="24" fill="#f97316"/><ellipse cx="84" cy="62" rx="38" ry="9" fill="none" stroke="#fde68a" stroke-width="3" transform="rotate(-15 84 62)"/><circle cx="76" cy="54" r="4" fill="#fb923c"/><circle cx="92" cy="70" r="3" fill="#ea580c"/><circle cx="128" cy="66" r="8" fill="#60a5fa"/><path d="M122 64 Q128 60 132 66" stroke="#4ade80" stroke-width="3" fill="none"/>`),
  s121_diagram: () => svgWrap("#f8fafc", `<rect x="10" y="10" width="140" height="100" rx="6" fill="#fff" stroke="#cbd5e1" stroke-width="2"/><rect x="58" y="18" width="44" height="18" rx="4" fill="#60a5fa"/><rect x="18" y="72" width="44" height="18" rx="4" fill="#34d399"/><rect x="98" y="72" width="44" height="18" rx="4" fill="#fbbf24"/><path d="M80 36 V52 M40 52 H120 M40 52 V72 M120 52 V72" stroke="#475569" stroke-width="2.5" fill="none"/><path d="M36 66 L40 72 L44 66 M116 66 L120 72 L124 66" stroke="#475569" stroke-width="2.5" fill="none"/>` + txt(80, 31, "A", 11, "#fff") + txt(40, 85, "B", 11, "#fff") + txt(120, 85, "C", 11, "#fff")),
  s121_calligraphy: () => svgWrap("#fdf6e3", `<rect x="22" y="20" width="76" height="88" rx="2" fill="#fff" stroke="#e7d7b1" stroke-width="2"/><text x="60" y="84" text-anchor="middle" font-size="54" font-weight="700" fill="${INK}" font-family="DFKai-SB, KaiTi, Microsoft JhengHei, serif">永</text><circle cx="88" cy="98" r="5" fill="#dc2626"/>` + O.brush(124, 60, 1.1, INK) + `<ellipse cx="128" cy="104" rx="16" ry="6" fill="#374151"/><ellipse cx="128" cy="102" rx="12" ry="3.5" fill="#111827"/>`)
});
registerUnit("s1-2-1", {
  name:"高一 下學期 第一次段考",
  sub:"未來進行式與未來完成式、助動詞 + have p.p.、with 附帶狀況、目的與結果",
  words:S1_2_1_WORDS, grammar:S1_2_1_GRAMMAR, quiz:S1_2_1_QUIZ,
  classes:Object.assign({}, S1_2_1_CLASS, S1_2_1_ROOT_CLASS), phonics:S1_2_1_ROOTS, morph:true,
  extraTitle:"🧩 字根字首課", extraDesc:"學會 cap、vert、bio、graph 等字根，一次記住一整串單字。上完再去玩「字根拼圖」！", extraShort:"字根",
  spellIcon:"🧩", spellTitle:"字根拼圖", spellSub:"把積木拼成單字"
});
})();
