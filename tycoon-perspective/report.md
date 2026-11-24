# 大佬視角：從經過驗證的投資者怎麼動錢，推論他們眼中的世界

版本：2026-11-08（第二輪補洞後初版；第三季 13F 待 11/16 後更新）

標示方式：〔事實〕＝官方申報、公司文件、官方統計；〔報導〕＝主流媒體已開啟原文；〔轉述〕＝只讀到他人轉述；〔推論〕＝本報告的判斷，附依據。數字出處見各資料包（`data/00`–`12`）。

---

## 1. 研究說明

**範圍。** 12 組投資者與機構，期間 2024-01 至 2026-11-08。名單與資料包對照見 `README.md`。

**篩選標準。** 經歷過多次危機仍存活；資金動向可從申報、財報或交易所披露查證，不只靠言論。

**方法。**
- 行動優先，言論佐證。行動指申報可見的買賣、募資、部署、賣地投標、現金水位；言論只當作解釋行動的線索。
- 先建事實基準（`data/00`），再逐份補洞與核實（第二輪標 [R2]），最後由主 session 綜合判讀。
- 每個結論附反方證據與推翻條件。

**限制（會影響結論強度）。**
- 13F 只含美國上市股票多頭與期權，不含港股、A股、日股、債券、空單、現金。用 13F 推論「整體部位」要打折。
- 部分言論只有轉述或二手逐字稿（例如 Druckenmiller 的 WSJ 投書、FT 報導的 Piper Sandler 發言、2026 年波克夏股東會部分原話），付費牆內原文未讀。
- 「公開查無」不等於不存在。台灣議題尤其如此：多數機構完全不公開談台灣。
- 本研究不含台灣本地總體數據（央行利率、房價、信用管制）。第 4 節對台灣的意涵只到「國際資金怎麼看台灣」這一層。
- 波克夏、Duquesne、喜馬拉雅、H&H、Baupost、Bridgewater 的第三季 13F 尚未申報，相關持股停在 2026-06-30。

**更新紀錄。**

| 日期 | 內容 |
| --- | --- |
| 2026-11-07 | 第一輪資料蒐集（12 組） |
| 2026-11-08 | 第二輪補洞與核實（R2）、建立 2026 總體背景、主題分析、初版報告 |
| 2026-11-08 | 獨立抽查 20 項關鍵數字（18 項回原始出處）：修正 4 項（波克夏非美新增、Druckenmiller 匯率部位、段永平蘋果減持期間、Brookfield 900 筆期間），補口徑 4 項（波克夏現金改公司口徑、Alphabet 金額為估算、長和年份、東京公寓中位數），刪「創紀錄」、GIC 改「兩年」 |
| 待做 | 2026-11-16 後更新第三季 13F（R3） |

---

## 2. 綜合結論：大佬眼中的世界

**一句話：他們怕的不是一次普通衰退，而是「利率回不到過去、美國財政與 AI 泡沫同時考驗市場」；他們的準備是留現金、縮短存續期、撤出一般商用不動產，把錢放到有長約或供給受限的實體資產，等別人被迫賣。**

背景先講清楚。2026 年 2 月 28 日美以空襲伊朗，荷莫茲海峽受阻，布蘭特現貨 4 月 7 日到 138 美元〔事實〕。Fed 在 9 月 16 日由降息轉為升息到 3.75–4.00%，30 年期美債 10 月 7 日收 5.67%，是 2002 年以來最高〔事實〕。

```chart
{"type": "line", "title": "30 年期美債殖利率 10 月升到 5.67%，2002 年以來最高", "subtitle": "美國 30 年期公債固定期限殖利率，每日", "csv": "data/c01_ust30y_daily.csv", "xcol": "date", "ycols": ["ust30y_pct"], "names": ["30 年期殖利率"], "unit": "%", "dec": 2, "events": [{"x": "2026-03-02", "label": "2/28 美以空襲伊朗"}, {"x": "2026-09-16", "label": "9/16 Fed 升息"}], "xLabel": "日期", "source": "美國財政部 Daily Treasury Par Yield Curve 30 Yr（即 Fed H.15／FRED DGS30）；2025-01-02 至 2026-11-05"}
```

```chart
{"type": "line", "title": "伊朗戰事把布蘭特現貨推上 138 美元（4/7）", "subtitle": "布蘭特現貨 Dated Brent，美元/桶，每日", "csv": "data/c01_brent_daily.csv", "xcol": "date", "ycols": ["brent_usd"], "names": ["布蘭特現貨"], "unit": "美元", "dec": 2, "yMin": 0, "events": [{"x": "2026-03-02", "label": "2/28 美以空襲伊朗"}, {"x": "2026-09-16", "label": "9/16 Fed 升息"}], "xLabel": "日期", "source": "EIA RBRTEd（即 FRED DCOILBRENTEU）；2025-01-02 至 2026-11-03。現貨價與 ICE 期貨價常差 10–20 美元"}
```

### 結論一：最強的共識是「長端利率結構性偏高，債券不再可靠地避險」

**推導。**
1. 〔事實〕9 月美國 CPI 年增 3.7%，主要由能源推動，核心 CPI 2.6%。FY2026 赤字 1.992 兆美元（GDP 的 6.2%），淨利息 1.052 兆。
2. 〔事實〕Marks 2026-10-30：「the low rates of … 09 to 21 period were really an aberration. We're not going back there」。GIC 年報：「persistently higher bond yields over the medium term」，並要重新評估「the role of sovereign bonds as risk diversifiers」。
3. 〔事實〕Dimon 2026 年 4 月致股東信：伊朗戰爭可能帶來「stickier inflation and ultimately higher interest rates than markets currently expect」。Dalio 2026-10-13：「the bond bear market probably has a long way to go」。
4. 〔事實〕行動一致：波克夏 2026 年 9 月底 3,523 億美元的現金與國庫券（公司口徑），幾乎都是短期國庫券；Druckenmiller 自稱空長債，當作持有風險資產的避險；Dalio 建議少配債、多配黃金 10–15%。
5. 〔推論〕這群人的分歧只在幅度與時點，方向一致。

**反方與另類解釋。** Brookfield 2026 年 2 月還寫「interest rates have been coming down globally and it looks as though they will continue to do so」，8 月說「the risk of any meaningful increases in interest rates appears to be low」，結果 9 月 Fed 升息、10 年期一度到 5.31%。Blackstone 1Q26 也說「moving toward a period of lower base rates」。這兩家最依賴不動產與資產募集，偏樂觀可能來自商業模式，不一定是判斷失準〔推論〕。

**信心：高。** 推翻條件：通膨快速回落到 2% 附近、Fed 重啟降息且長端跟著下來（例如 10 年期回到 4% 以下並維持）。

### 結論二：嘴上最擔心美國財政與美元，錢卻仍往美國流

**推導。**
1. 〔事實〕言論幾乎一面倒。Buffett：「we are not immune from it happening」。Marks：美國有一張「golden credit card … But it uses the card unwisely」。Klarman：「the risk free asset is riskier every day」。Dimon：債務危機「probably the likely outcome」。Druckenmiller 的 WSJ 投書〔轉述〕：「If the 30-year must trade at 5.5% to clear, that isn't a crisis. It is an invoice.」
2. 〔事實〕行動反向。GIC 美洲曝險 44%→53%；淡馬錫美洲 24%→26%，CIO 說還會再提高〔轉述〕；Druckenmiller 1 月說看空美元，9 月說無意空美元，並表示自年初起已小幅空歐元、英鎊〔轉述〕；波克夏 2026 年新增的大筆資金（Alphabet、Taylor Morrison、OxyChem）主要在美國，唯一的非美新增是日本東京海上 2.49%（約 18 億美元）。
3. 〔事實〕GIC 自己點出原因：「few markets offer comparable depth and liquidity as the US」。Marks 也說去美元化可以做，「But I don't think it should be done on a great scale」。

```chart
{"type": "line", "title": "GIC 兩年把股票由 46% 拉到 56%，固定收益由 32% 降到 22%", "subtitle": "資產類別占投資組合 %，3 月底", "csv": "data/c09_gic_mix.csv", "xcol": "period", "ycols": ["equities", "fixed_income", "real_assets"], "names": ["股票", "固定收益", "實質資產"], "unit": "%", "dec": 0, "yMin": 0, "xLabel": "期末", "source": "GIC Report 2025/26 表 2；2024/03 取自 Mingtiandi、top1000funds 轉述（二手），固定收益 32% 由增減幅推算"}
```

```chart
{"type": "line", "title": "GIC 美洲曝險由 44% 拉到 53%", "subtitle": "地區曝險 %，3 月底", "csv": "data/c09_gic_mix.csv", "xcol": "period", "ycols": ["americas", "apac", "emea", "global"], "names": ["美洲", "亞太", "歐洲中東非洲", "全球／未分區"], "unit": "%", "dec": 0, "yMin": 0, "xLabel": "期末", "source": "GIC Report 2025/26 表 3；2024/03 取自 Mingtiandi 轉述（二手），全球 8% 由合計 100 推算。GIC 不按地區配置、只監測曝險；年報未拆出美國、日本、中國或台灣"}
```

**解讀〔推論〕。** 這不是虛偽，是「沒有替代品」。他們把美國財政視為慢性病，用持有黃金、短天期、非美資產做邊際避險，主體仍留在美國。這和李嘉誠「不押方向、分散地域」的做法同一路數。

**反方。** GMO／Grantham 真的照說的做：家族最大持股是國際已開發價值股，美國「essentially zero」〔轉述〕。NBIM 美國股票占比 54.7%→52.9%，小幅下降〔事實〕。

**信心：高（言行落差確實存在）。** 推翻條件：大型主權基金在年報中明確下調美洲曝險，或波克夏開始大舉買非美資產。

### 結論三：AI 多數人說是泡沫或末段，但「持股權」和「放貸」被嚴格分開

**推導。**
1. 〔事實〕說泡沫或高估的：Buffett（「never had people in a more gambling mood than now」）、Dalio（「early stages of a bubble」）、Grantham（「bubble within a bubble」，Fortune 轉述）、Klarman（「characteristics of a bubble」）、Druckenmiller（「could very well be in an earnings bubble」，AI 曝險減到半年前約 20%）〔轉述〕、淡馬錫 CIO（AI 交易回檔是最大風險）、NBIM Tangen（「never seen a concentration risk like that」）。
2. 〔事實〕但行動不是全面撤出。波克夏 2026 年第二季淨買 198 億美元，主要是 Alphabet；喜馬拉雅 Alphabet 占 13F 48%；段永平買進輝達再減半。
3. 〔事實〕Marks 2026-10-30 劃了一條線：「if you're going into a very uncertain situation … don't lend the money. If you want to play, buy the stocks」。
4. 〔事實〕債務端正在膨脹：Dalio 引用的 hyperscaler 債券 2026 上半年約 2,200 億美元，2025 全年約 1,080 億美元，他稱為「canary in the coal mine」。Blackstone 參與的 Broadcom 融資平台首期 350 億美元，Schwarzman 稱為「the largest private credit investment in history」。
5. 〔推論〕共識是「AI 是真技術，但價格與融資結構過熱」。看空者減少的是估值最高的部位與 AI 債務曝險，保留的是現金流強的平台型公司。

**反方。** Blackstone 與 Brookfield 是 AI 實體基礎建設最大的資金提供者之一，說法完全相反：Schwarzman「Seldom in my career have I seen such a supply-constrained market」，Flatt「very early innings … 15 years to run」。Dimon 也說「not a speculative bubble」。他們收的是租金與管理費，靠長約與投資級承租人轉嫁風險，立場與持股者不同〔推論〕。11 月 5 日標普單日跌 4.36%〔事實〕、輝達跌 9%〔報導，CNBC〕，是這組分歧的第一次壓力測試。

**信心：中高。** 推翻條件：AI 相關營收與獲利追上資本支出（例如 hyperscaler 自由現金流在高資本支出下仍上升），或 AI 債券利差顯著收窄。

### 結論四：地緣政治從「事件」變成「結構」，台灣被當成「重要但位置有風險」

**推導。**
1. 〔事實〕GIC 年報：「geopolitical risks are no longer episodic disruptions but structural changes」。Dalio：二戰後秩序已崩解，進入「Stage 6」。Brookfield 投資人日引 Marks：「Global economic integration has broken down in spectacular fashion. And the peace dividend has vanished.」
2. 〔事實〕對台灣，願意明說的只有少數：Dalio 2026-04-07 估「美中因台開戰」機率 30–40%，「greatest-risk period in 2028」；6 月寫「AI without Taiwan is nothing」，但同段也寫「it probably won't materialize」。Buffett 2023 年賣光台積電時說「I don't like its location」。李錄 2025 年：「解決好台灣問題，中美並非終有一戰」。
3. 〔事實〕行動分歧：見第 4 節台積電持有表。賣的有波克夏（2023）、段永平（2026Q2 清倉）、Bridgewater（2026Q2 減到 3.45 萬股）、台積電股東名冊上的「新加坡政府」專戶（2.63%→2.08%）。持有或加碼的有 Druckenmiller（第二大持股）與 NBIM（台灣占股票 2.5%→3.9%）。
4. 〔推論〕主流做法是把台積電當成必要但需控管的部位，而不是長期集中押注。

**反方。** NBIM 的增加主要是股價上漲，持股率反而從 1.80% 降到 1.70%〔事實〕。新加坡政府專戶的減碼也可能只是獲利了結或再平衡，GIC 沒有說明〔推論〕。

**信心：中。** 台灣議題公開資料少，結論容易被少數人的發言左右。

### 結論五：資金在撤出一般商用不動產，轉向有長約或供給受限的實體資產；全面看好的地區只有日本

**推導。**
1. 〔事實〕Blackstone 不動產部門資產 2024Q1–2026Q3 縮 9%，信貸部門增 46%；不動產退出金額連續大於投入。Brookfield 2025 年部署的 656 億美元，信貸占 55%、不動產只占 11%，2026 上半年賣掉約 100 億美元不動產。Oaktree 第九支機會型地產基金只募到 26 億美元，目標是 50–60 億。
2. 〔事實〕錢流向資料中心（BREIT 資料中心占比 9%→30%）、物流、租賃住宅、長照與醫療（Klarman 最看好 assisted living；GIC 買英國醫院）、美國建商（波克夏買 Taylor Morrison，Lennar 持股 12.5%）。
3. 〔事實〕日本是唯一的全面共識：波克夏五大商社加東京海上，Blackstone、Brookfield、KKR、GIC 在東京大額收購；東京都心 5 區辦公空置率 1.85%，租金創新高。
4. 〔事實〕Gray 的說法最能概括：「while higher rates are a headwind to the sector's recovery, strengthening fundamentals are a tailwind」。新供給在多數類別降到十多年低點，建造成本又被 AI 基建排擠。
5. 〔推論〕結論是「供給面利多、資金成本利空」：只有能靠租金成長或長約撐住現金流的資產，才擋得住高利率。

```chart
{"type": "line", "title": "Blackstone：信貸與保險兩年增 46%，不動產縮 9%", "subtitle": "部門資產管理規模，十億美元", "csv": "data/c03_blackstone.csv", "xcol": "quarter", "ycols": ["credit_insurance_bn", "real_estate_bn"], "names": ["信貸與保險", "不動產"], "unit": "十億美元", "dec": 1, "yMin": 0, "xLabel": "季", "source": "Blackstone 季度財報新聞稿（SEC 8-K Ex.99.1）"}
```

```chart
{"type": "bar", "title": "BREIT 贖回潮到 2026 年才止住", "subtitle": "每季申購（含配息再投資）減贖回，十億美元", "csv": "data/c03_blackstone.csv", "xcol": "quarter", "ycols": ["breit_net_bn"], "names": ["BREIT 淨流量"], "unit": "十億美元", "dec": 1, "xLabel": "季", "source": "BREIT 10-Q／10-K MD&A「Capital and Financing Activity」；Q4 為全年減前三季推算，誤差約 ±1–2 億；2026Q2–Q3 未計 DST 計畫。Bisnow 所稱 2025 年淨流入 +10 億與 10-K（−26 億）矛盾，未採用"}
```

```chart
{"type": "line", "title": "資料中心占 BREIT 不動產比重由 9% 升到 30%", "subtitle": "占不動產公允價值 %，季末", "csv": "data/c03_blackstone.csv", "xcol": "quarter", "ycols": ["dc_share_pct"], "names": ["資料中心占比"], "unit": "%", "dec": 0, "yMin": 0, "xLabel": "季", "source": "BREIT 10-Q／10-K"}
```

**反方。** 賣出不一定代表看壞。私募基金有存續期限，必須退出還錢給 LP；Brookfield 2025 年 3 月說，過去十年出售的約 900 筆不動產中，約 90% 以帳面價值或以上成交〔事實〕。Brookfield 的「asset values are set to rise substantially」指的是曼哈頓、倫敦 City、杜拜等自家核心市場〔事實〕，不是整體不動產。

**信心：中高。** 推翻條件：機會型不動產基金募資回升、Blackstone 不動產部門資產止跌回升、長端利率明顯回落。

### 結論六：中國分歧最大，但「不碰中國地產」是共識

**推導。**
1. 〔事實〕買中國的人買的是低估值的上市消費平台：喜馬拉雅拼多多占 13F 22%，段永平拼多多約 10%，另加騰訊、茅台、泡泡瑪特（港交所披露 8.01%）；淡馬錫中國曝險金額增加 100 億星元；Marks 2025 年說新興市場股票基金超配中國。
2. 〔事實〕賣或避開的：波克夏比亞迪已出清（BHE 10-Q）；Bridgewater 2025 年出清美國上市中概股；長和 EBITDA 中國大陸占比由 2019 年 9.4% 降到 2025 年 2.5%（主要降幅在 2019–23 年）；CapitaLand 投資中國管理資產占比要由 27% 降到 10–20%；日本三大地產商把中國壓到極小。
3. 〔事實〕地產面：李錄說中國房價自 2021 年跌約 40%，家庭財富降 60–70%；國家統計局 1–9 月新建商品房銷售額 −13.9%、開發投資 −20.6%。
4. 〔推論〕名單裡沒有人在買中國住宅或商辦。連看好中國的李錄、段永平，也只買股票，不買房地產。

**信心：高（對地產）；中（對股票，分歧真實存在）。**

### 結論七：他們在準備的是「當流動性提供者」，波克夏 2026 年已開始出手

**推導。**
1. 〔事實〕彈藥：波克夏現金與國庫券 2026 年 3 月達 3,735 億美元（公司口徑；帳面合計 3,974 億）；Blackstone 乾火藥 2,289 億美元，為本研究期間（2024Q1–2026Q3）最高；長建自稱處於「歷來最雄厚之財務狀況」〔轉述，etnet〕；信和淨現金 551 億港元；新地淨負債一年降 28%。
2. 〔事實〕明說在等：Buffett「the most likely time to buy things is when nobody else will answer their phones」；Teskey「today's higher financing costs place pressure on owners that rely on short duration funding」；Marks 2025 年關稅衝擊後要「invest our latest opportunistic debt fund faster」。
3. 〔事實〕已經出手的：波克夏 2026 年前三季回購 144 億美元、股票淨買 112 億美元，並收購 OxyChem 與 Taylor Morrison。淡馬錫 FY2026 淨投資 200 億星元，比前一年加倍。
4. 〔事實〕在收手的：JPMorgan 2026 年第三季回購只有 10.6 億美元，前一年同期 83 億美元；Dimon 說「many asset prices, including bank stocks, are fully valued」。恒基因伊朗戰事把末期息砍 41.5%。
5. 〔推論〕這與李嘉誠 1967 年的邏輯一致：先確保自己不會被迫賣，再等別人被迫賣。差別在各家判斷「時候到了沒」不同。

```chart
{"type": "bar", "title": "波克夏現金與國庫券在 2026 年 3 月達 3,735 億美元高峰", "subtitle": "季末，十億美元；公司 MD&A 口徑（扣除未交割國庫券應付款）", "csv": "data/c02_berkshire.csv", "xcol": "quarter", "ycols": ["cash_bn"], "names": ["現金＋國庫券"], "unit": "十億美元", "dec": 1, "xLabel": "季", "source": "波克夏 10-Q／10-K（SEC EDGAR；2026Q3 取自 berkshirehathaway.com）。若含鐵路／公用事業現金與未交割款，帳面合計 2026Q1 為 3,974 億、2026Q3 為 3,774 億"}
```

```chart
{"type": "bar", "title": "2024 年淨賣股 1,341 億美元；2026 年第二季才出現 2023 年以來首次淨買，同時回購加速", "subtitle": "每季，十億美元；淨買賣＝股票買入減賣出", "csv": "data/c02_berkshire.csv", "xcol": "quarter", "ycols": ["net_equity_bn", "buyback_bn"], "names": ["股票淨買(+)／淨賣(−)", "庫藏股回購"], "unit": "十億美元", "dec": 1, "xLabel": "季", "source": "波克夏 10-Q／10-K 現金流量表（交割日口徑）；回購 2026Q2–Q3 為財報新聞稿交易日口徑"}
```

**反方。** Klarman 在 2026 年 6 月的訪談承認，過去持有 30% 以上現金「almost certainly made a mistake」〔轉述〕。囤現金的機會成本真實存在，長期等待也可能錯過整段漲幅。

**信心：高（對「準備」）；中（對「何時出手」）。**

---

## 3. 主題矩陣：共識與分歧

格式：「做」＝行動，「說」＝言論；括號內為信心（高／中／低）。「—」＝公開查無。

**表 3-1：利率、美股與 AI、信用、危機風險**

| 對象 | 利率與通膨 | 美股估值與 AI | 信用與私募信貸 | 危機風險 |
| --- | --- | --- | --- | --- |
| 波克夏 | 做：現金幾乎全放短期國庫券；說：通膨「not immune」（高） | 做：2026Q2 加碼 Alphabet（估約 171 億）；說：「gambling mood」、價格太高（高） | 做：減持銀行與消費金融；說：Jain 稱 PE 進壽險「could end in tears」（中） | 說：「something will come out of the blue」（中） |
| Marks／Oaktree | 說：2009–21 低利率是「aberration」（高） | 說：AI 最難預測，「third inning」；不借錢給 AI（高） | 做：直接放貸只占 AUM 不到 15%；說：「goldrush」（高） | 說：2009 年至今是「salad days」，終將退潮（中） |
| Druckenmiller | 做：空長債；說：殖利率「even a bit low」（中） | 做：AI 曝險減到約 20%；說：「earnings bubble」（中，轉述） | —（低） | 說：怕「narrative-driven bubbles」，約在「eighth inning」（中） |
| Dalio（另含 Bridgewater） | 說：滯脹，不該降息；債券熊市未完（高） | 說：AI 泡沫早期；Bridgewater 做：賣美光、台積電，買指數（中） | 說：非流動資產「having problems」（中） | 說：財政「three years, give or take two」（高） |
| Blackstone | 說：伊朗戰後利率會降（低，已被推翻） | 做：資料中心平台 1,850 億；說：供給極度緊缺（高） | 做：信貸資產增 46%；BCRED 贖回約 10% 限額處理（高） | 說：等地緣「terra firma」交易就會大增（中） |
| Brookfield | 說：由「3%/4% 正常」轉為「10年期5%要警戒」（中） | 做：AI 工廠與電力數千億承諾；說：「early innings」（高） | 做：2025 年部署信貸占 55%（高） | 說：總體事件對長期投資「mostly irrelevant」（中） |
| 李錄／段永平 | —（低） | 做：喜馬拉雅 Alphabet 48%；段：輝達先買後減半（中） | 說：段「不要使用槓桿」（低） | 說：李錄「AI 異常危險」（低） |
| 李嘉誠／長和系 | 說：利率是港樓決定因素（中） | —（低） | 做：長和淨負債比降到 8.1%（高） | 說：「Cash is king」；不抱「must-win」心態（高） |
| 新加坡主權／NBIM | 說：GIC 預期通膨與殖利率中期偏高（高） | 說：GIC「pockets of hype」；淡馬錫 AI 回檔是最大風險（高） | 做：淡馬錫私募信貸 2%→5%（中） | 說：NBIM 壓力測試 AI 泡沫 −35%（高） |
| 日本地產三雄 | 說：日本升息比預期快（高） | —（低） | 做：資產周轉、減交叉持股（中） | 說：中東、關稅、高利率造成不確定（中） |
| 港星家族 | 說：信和「evolving interest rate expectations」（中） | —（低） | 做：新地負債降 28%；新世界持續經營存疑（高） | 做：恒基因伊朗戰事減息（中） |
| 第二層 | Dimon：通膨上升是「skunk at the party」（高） | Grantham：「bubble within a bubble」；Dimon：AI 不是泡沫（中） | Dimon：「cockroach」；Klarman：信用週期將至（中） | Dimon：家庭淨值/GDP 560%，高於 2006 年的 460%（中） |

**表 3-2：不動產、中國、日本、歐洲與英國**

| 對象 | 不動產（類型與地區） | 中國 | 日本 | 歐洲與英國 |
| --- | --- | --- | --- | --- |
| 波克夏 | 做：買美國建商（Taylor Morrison、Lennar 12.5%）（高） | 做：比亞迪出清；說：主要投資「always」在美國（高） | 做：五大商社加東京海上；說：持有「50 years」（高） | 做：出清 Diageo（低） |
| Marks／Oaktree | 做：ROF IX 只募 26 億（目標 50–60 億）（中） | 說：2024 年說中國「bargains」；2025–26 交易公開查無（中） | 做：2026 年賣兩家日本飯店（低） | —（低） |
| Druckenmiller | 做：2024 年出清公寓 REIT（低） | 說：美中關係「in a bear market」（中） | 說：「big positions in Japan and Korea」（中） | 做：空歐元、英鎊（中，轉述） |
| Dalio | 說：不動產實質價值可能下跌，「easy to tax」（高） | 說：不撤出；人民幣走強（中） | 說：日本公債是糟糕的投資；日本資金可能匯回（中） | 說：英國「has a debt problem」（低） |
| Blackstone | 做：不動產資產縮 9%，轉向資料中心、物流、租賃住宅（高） | 說：北京會面只有中方轉述（低） | 做：紀尾井町 ¥4,000億、未來 3 年 150 億美元（高） | 做：2022 年起出售近 500 億歐元（低，來源弱） |
| Brookfield | 做：一邊說核心資產會大漲，一邊賣約 100 億美元（高） | 做：無新投資，只有人民幣接續基金（中） | 做：5 年逾 100 億美元、電通大樓（高） | 做：Just Group、Drax AI 工廠（中） |
| 李錄／段永平 | 說：李錄稱中國房價 −40%（中） | 做：重押拼多多、騰訊、茅台、泡泡瑪特（高） | —（低） | —（低） |
| 李嘉誠／長和系 | 做：香港低於成本賣樓；賣地 0/12（高） | 做：中國大陸 EBITDA 占比 9.4%→2.5%（2019→2025，高） | —（低） | 做：賣 UKPN、VodafoneThree，歐洲仍占約 55%（高） |
| 新加坡主權／NBIM | 做：GIC 買日本飯店、英國醫院，也賣東京辦公與資料中心（中） | 做：淡馬錫中國金額增、占比降至 17%（中） | 做：NBIM 日本占股票 6.8%（中） | 說：Tangen「growth is lower」（低） |
| 日本地產三雄 | 做：海外資產 32%；國內出售資產並回購自家股票（高） | 做：中國壓到極小（高） | 說：住友「東京の価値を信じている」（高） | 說：倫敦是「safer place to park capital」（中，轉述） |
| 港星家族 | 做：嘉里、新地、信和買地；長實、恒基沒買到（高） | 說：三家點名內地資本外流管制壓港樓（中） | 做：置地以東京為下一個目標市場（低） | —（低） |
| 第二層 | Klarman：長照、冷鏈；JPM 商用不動產貸款年增 2%（中） | Klarman 買 GDS；Dimon「engage with China」（低） | Grantham 家族第二大持股；GMO 超配日本 5.8 倍（高） | Dimon：歐洲「on a bad path」（中） |

**表 3-3：美中與地緣、台灣、財政／美元／黃金、在準備什麼**

| 對象 | 美中與地緣 | 台灣 | 財政、美元、黃金 | 在準備什麼 |
| --- | --- | --- | --- | --- |
| 波克夏 | 說：「trade should not be a weapon」（高） | 做：2023 年出清台積電；說：「don't like its location」（高） | 說：財政赤字「unsustainable」；黃金公開查無（高） | 做：3,523 億現金與國庫券（公司口徑）；2026 年開始回購與收購（高） |
| Marks／Oaktree | 說：美中「competitors, not enemies」（中） | —（低） | 說：美國的「golden credit card」用得不聰明（高） | 做：機會型信用加速投入（中） |
| Druckenmiller | 說：中國關係「bear market」（中） | 做：台積電第二大持股 5.4%（高） | 做：WSJ 投書批評財政部回購（中，轉述） | 做：期貨持有銅、少量黃金（中） |
| Dalio | 說：世界秩序崩解，「Stage 6」（高） | 說：開戰機率 30–40%，2028 年風險最高（高） | 說：黃金 10–15%，少量比特幣（高） | 說：分散到收支健康的國家（高） |
| Blackstone | 做：三次北京會見（低） | 官方逐字稿無台灣（—） | —（低） | 做：乾火藥 2,289 億（高） |
| Brookfield | 說：「trade does not really matter to us」（中） | —（低） | —（低） | 做：保險資產擴張、AI 電力（高） |
| 李錄／段永平 | 說：李錄「WTO 減美國」（中） | 說：李錄「中美並非終有一戰」；段清倉台積電（中） | 說：李錄稱美債需續借 10–11 兆（低） | 做：中國消費平台與美國大型平台（中） |
| 李嘉誠／長和系 | 做：港口交易因中美角力卡關（高） | —（低） | —（低） | 做：資產出售估計逾 410 億美元，歐洲受管制資產（高） |
| 新加坡主權／NBIM | 說：GIC「separate and competing spheres」（高） | 做：新加坡政府專戶台積電 2.63%→2.08%；NBIM 台灣占比升至 3.9%（中） | 說：GIC 建倉黃金當結構性分散（高） | 做：GIC 加碼對沖基金 300 億美元（中） |
| 日本地產三雄 | 說：只寫「geopolitical risks」（低） | 做：三井在台灣開發 6 座商場（1 座 2027 年開幕）、逾 4,000 戶住宅〔報導〕（中） | —（低） | 做：資產周轉、海外分散（中） |
| 港星家族 | 說：新地「escalation of geopolitical risks」（中） | —（低） | —（低） | 做：信和、新地低負債，準備買地（高） |
| 第二層 | Dimon：地緣是「largest risk」（高） | Dimon：Fortune 轉述稱中國犯台「likely」（低） | Dimon：黃金「semi-rational」；Klarman：「risk free asset is riskier」（中） | JPM：回購大幅放慢（高） |

### 共識

1. 長端利率中期偏高，債券避險功能下降（10 組以上明說或以行動表態）。
2. 美國財政不可持續，但沒有替代美國市場的選項。
3. AI 估值與融資過熱；收租型的基建業者例外。
4. 不碰中國地產。
5. 日本是最被看好的成熟市場。
6. 保留流動性，等被迫賣家出現。

### 分歧

1. **AI：** 持股者（巴菲特、李錄、Druckenmiller 減碼前）與基建融資者（Blackstone、Brookfield）對泡沫的定義不同。
2. **中國股票：** 李錄、段永平、淡馬錫加碼；波克夏、Bridgewater、日本與新加坡地產業者撤出。
3. **利率時點：** Brookfield、Blackstone 年初看降息，結果錯了；其他人多數早已看高利率。
4. **現金：** 波克夏、JPMorgan 守；淡馬錫加速投資；Klarman 反思囤現金是錯誤。

### 言行不一（最有資訊量）

| 對象 | 說 | 做 | 解讀〔推論〕 |
| --- | --- | --- | --- |
| 多數美國與新加坡機構 | 美國財政與美元有風險 | 美國曝險上升 | 沒有替代品；風險被視為慢性病 |
| Brookfield | 核心市場「asset values are set to rise substantially」（2026-02） | 2026 上半年賣出約 100 億美元不動產 | 可能是基金到期必須退出，也可能是趁高價出場；兩者都與「看好自家頂級資產」並存 |
| Blackstone | 「real estate has plenty of room to run」 | 不動產資產連續縮、退出大於投入 | 同上，加上資金轉往資料中心 |
| 李澤鉅 | 2024：「I am not going to bet against Hong Kong's ability to recover」 | 2023–26 政府賣地 12 次投標全未得標；香港低於成本賣樓 | 願意買，但只用自己的價格；言行可並存，但對香港復甦程度明顯保守 |
| 段永平 | 不談台灣 | 台積電 2025Q4 加到 2.1%，2026Q2 清倉 | 原因未說明，不宜過度解讀 |
| Druckenmiller | 2026 年 1 月看空美元 | 9 月說無意空美元；自年初起小幅空歐元、英鎊（轉述） | 他自稱看法會變；Bessent 也說他「changes his mind a lot」 |

---

## 4. 對不動產投資與台灣的意涵

本節大多是〔推論〕，依據寫在每點後面。台灣本地數據不在本研究範圍，所以只推到「國際資金怎麼看」這一層。

### 4.1 全球不動產：大錢正在怎麼重新定價

1. **用高利率估資金成本，不要賭利率回落。** 依據：結論一，幾乎所有人都說 2009–2021 的低利率不會回來。Brookfield 年初看降息，後來被市場推翻。
2. **有長約、承租人信用好、供給受限的資產才擋得住高利率。** 依據：Blackstone、Brookfield、GIC、Klarman 的投向，加上 Gray「higher rates are a headwind … fundamentals are a tailwind」。一般辦公、零售、需要靠市場去化的建售住宅最弱：置地退出建售住宅，Michael Smith 的理由是「You're so subject to external factors」；長實 2026 上半年物業銷售毛利率只有約 3.5%（香港部分約 3.0%）。
3. **電力是瓶頸，接得上電網的土地有稀缺性。** 依據：Brookfield「the largest constraint today is … access to reliable power」，Marks「power is going to be a real bottleneck」，Blackstone 把資料中心蓋在天然氣電廠旁。〔推論〕這對持有可變更用地的開發者是可以研究的方向，但台灣的電網容量與用地變更規則需另外查證。
4. **人口老化相關資產被點名。** 依據：Klarman 最看好 assisted living，GIC 買英國醫院。台灣適用性需另查。
5. **資產負債表決定誰能在谷底買。** 依據：香港信和（淨現金 551 億港元）、新地（負債降 28%）在買地，新世界陷入持續經營評估。

```chart
{"type": "line", "title": "香港樓價 2025 年 3 月見底、2026 年回升約 10%，仍比 2021 年高點低 17%", "subtitle": "中原城市領先指數 CCL，週；指數軸未從 0 起算", "csv": "data/c04_hk_ccl_weekly.csv", "xcol": "week", "ycols": ["ccl"], "names": ["CCL"], "dec": 2, "yMin": 100, "xLabel": "調查週", "source": "中原地產 CCL 週指數（hk.centanet.com，調查週日期，約 5 天後公布）；2017-01-01 至 2026-11-01"}
```

```chart
{"type": "line", "title": "HIBOR 已由 5% 以上降到約 2.6%", "subtitle": "1 個月 HIBOR 定盤，%，每日（自 2022 年起）", "csv": "data/c04_hk_hibor_1m_daily.csv", "xcol": "date", "ycols": ["hibor_1m_pct"], "names": ["1 個月 HIBOR"], "unit": "%", "dec": 2, "yMin": 0, "xLabel": "日期", "source": "HKMA API（daily-figures-interbank-liquidity，hibor_fixing_1m）；2022-01-03 至 2026-11-06"}
```

### 4.2 大佬怎麼看台灣

**台積電：主要投資者的持有變化。** 只有台積電這一檔能跨機構比較。

| 投資者 | 動作 | 時點 | 來源 |
| --- | --- | --- | --- |
| 波克夏 | 6,006 萬股 ADR → 2022Q4 減 86% → 2023Q1 清倉 | 2022–23 | 13F〔事實〕 |
| 段永平（H&H） | 2025Q1 建倉，2025Q4 加到 122 萬股（2.1%），2026Q2 清倉 | 2025–26 | 13F〔事實〕 |
| Bridgewater | 107.7 萬股 → 3.45 萬股 | 2026Q2 | 13F〔事實〕 |
| 「新加坡政府」專戶 | 持股 2.63% → 2.08%，十大股東中賣最多 | 2024→2025 名冊 | 台積電年報〔事實〕；歸屬 GIC 為〔推論〕 |
| Druckenmiller | 持續持有，2026Q2 加到 59 萬股，第二大持股 5.4% | 2024Q3 起 | 13F〔事實〕 |
| NBIM | 持股市值 154 億 → 335 億美元，第 5 大持股；持股率 1.80% → 1.70% | 2024 → 2026H1 | NBIM 持股資料〔事實〕 |
| 淡馬錫 | 13F 無台積電 ADR | 2025–26 | 13F〔事實〕 |

**言論。** 願意公開談台灣的只有 Dalio（開戰機率 30–40%、2028 年風險最高，但「probably won't materialize」）、Buffett（2023 年「I don't like its location」）、李錄（「解決好台灣問題，中美並非終有一戰」）。GIC 76 頁年報完全沒有「Taiwan」一詞。日本地產商在台灣深耕，但公開查無台海相關發言。

**解讀〔推論〕。**
1. 國際長期資金把台灣當成「AI 必需品的產地」，不是「長期配置的家」。持有台積電多半是因為指數權重或 AI 需求，而且會控管集中度。
2. 名單中只有日本地產商在台灣做大型實體不動產承諾：三井 6 座商場（5 座營運、LaLaport 高雄預計 2027 年開幕）、16 個住宅案逾 4,000 戶（經濟日報，二手）、熊本科學園的合作，三菱地所與上櫃建商合資信義區豪宅。依據：資料包 10。〔推論〕日本開發商是台灣少數長期、實體的外資夥伴，可作為合資或共同開發的研究對象。
3. 方向相反的資本流也存在：台灣承諾對美至少 2,500 億美元直接投資；台灣敏實是日產橫濱總部交易的主要投資人。依據：資料包 00、10。〔推論〕台灣企業與家族資本外移的動機，與國際資金對台灣的保留態度一致。
4. 台股 2026 年 10 月 6 日高點 49,823 點，到 11 月 6 日跌到 39,702 點，跌幅 20%；11 月 6 日單日跌 4.51%〔事實〕。台股高度連動 AI，若 AI 交易回檔（結論三），財富效應對台灣房市的支撐可能轉弱〔推論，需台灣本地數據驗證〕。

### 4.3 可以拿來檢驗自己案子的幾個問題〔推論〕

1. 這個案子的價值，來自「利率下降推高估值」，還是「供給不足推高租金或售價」？大佬只為後者付錢。
2. 若 10 年期維持在 4.5–5%，案子的現金流撐得住嗎？
3. 退場時的買家是誰？國際機構對台灣不動產普遍保留，退場多半要靠本地買家。
4. 若利率高檔維持，誰會被迫賣？（短期融資、高預售依賴的開發商）我們是不是準備好當買方？這是李嘉誠 1967 年與今天 Oaktree、Brookfield 共同的打法。
5. 家族資本的地域分散夠嗎？Dalio：「a smart rabbit has three holes」；李嘉誠系把重心放在歐洲受管制資產。

---

## 5. 逐人分析

### 5.1 巴菲特／波克夏：囤到 3,735 億美元後，2026 年開始出手

**結論。** 波克夏 2024 年淨賣股 1,341 億美元，現金與國庫券在 2026 年 3 月達 3,735 億美元高峰（公司口徑，扣除未交割國庫券應付款；含鐵路公用事業現金與未交割款的帳面合計為 3,974 億，9 月底 3,523 億／帳面 3,774 億）；2026 年轉為回購自家股票、收購美國建商與化工、加碼 Alphabet〔事實〕。

**行動。**
- 2024 年第二季單季淨賣 755 億美元，主要是蘋果（9.06 億股減到 2.28 億股）〔事實〕。
- 2026 年第二季淨買 198 億美元，是 2023 年以來唯一淨買的一季；其中 Alphabet 增持約 4,810 萬股，以 6/30 股價估算約 171 億美元〔推論，估算；實際成交金額未揭露〕。資料包原本「約 200 億美元未對應持股」的說法已更正：13F 增加約 192 億，加上東京海上約 18 億，與現金流的 235 億只差約 25 億；第二季 13F 也沒有申請保密〔事實〕。
- 回購 2024Q3–2025Q4 連續六季為零，2026 年前三季回購 144 億美元，B 股價格約 476–507 美元〔事實〕。
- 美國住宅：Taylor Morrison 企業價值約 85 億美元（2026-07 完成）；Lennar A 股持股 2026-09-30 達 12.5%〔事實〕。
- 日本：五大商社成本 154 億、市值 354 億美元；東京海上 2.49%；日圓債 153 億美元〔事實〕。
- 台灣與中國：台積電 2023 年出清；比亞迪 2025 年 3 月底帳面為零〔事實〕。

**言論。** Buffett 2026-05-02 接受 CNBC 訪問：「we've never had people in a more gambling mood than now」、「the most likely time to buy things is when nobody else will answer their phones」。Abel：通膨「at three and potentially creeping up a bit」，並說「We do not intend to be beholden to anyone」〔事實，CNBC 直播原話〕。

**解讀〔推論〕。** 波克夏在 2026 年判斷，自家股票與少數美國資產的價格已到可以出手的程度，但整體市場仍貴。買建商與 Lennar，是在押美國住宅長期短缺，而不是押利率下降。

### 5.2 Howard Marks／Oaktree：信用週期的專家正在加速投入，但不借錢給 AI

**結論。** Oaktree 2025 年底資產 2,228 億美元；2026 年 Brookfield 機會型信用策略（以 Oaktree 旗艦為主）每季投入 19–24 億美元；Marks 個人 2025 年投入自家基金 4,664 萬美元，是 2024 年的 6.6 倍〔事實〕。

**行動。**
- 2026 年 7 月 31 日被 Brookfield 全資收購，併入 Brookfield Credit〔事實〕。之後 02 與 06 兩組不再完全獨立。
- 私募信貸壓力：Oaktree Strategic Credit Fund 2026 年 3 月贖回申請占淨值 8.5%，全額兌付，Brookfield 出資約 7,900 萬美元〔事實〕。
- 機會型不動產基金 ROF IX 最終只募到 26 億美元，目標 50–60 億，前一代 47 億〔事實〕。

**言論。** 2026-09-22 備忘錄：財政部回購長債是「cosmetic」，美國的問題是「a problem with U.S. fiscal management, and ultimately a potential problem with the U.S. dollar」；可以分散到「non-U.S. real estate」等資產，「But I don't think it should be done on a great scale」〔事實〕。

**解讀〔推論〕。** Marks 對利率與財政的立場很清楚，但他賺錢的方式是等信用出事時接手。ROF IX 募資慘淡，代表 LP 對機會型不動產的興趣很低，這本身是不動產週期的訊號。

### 5.3 Stanley Druckenmiller：從 AI 多頭轉為減碼，持續押台積電

**結論。** Duquesne 2026 年第二季 13F 申報市值 52.1 億美元（含期權名目價值），創新高；台積電是第二大持股（5.4%）〔事實〕；9 月他說 AI 曝險已減到半年前的約 20%〔轉述〕。

**行動。** 輝達 2024 年第三季前已出清；Natera 占 16.6%；阿根廷、巴西部位；加密相關股首度占 2.9%〔事實〕。宏觀部位靠他自己說：空長債、少量黃金、期貨持有銅、日韓大部位〔事實，Morgan Stanley 官方逐字稿〕。

**言論。** 2026-09-10 Piper Sandler 活動〔轉述，FT 審閱逐字稿〕：「We could very well be in an earnings bubble」；說 Fed 委員稱利率具限制性「absolutely laughable」；殖利率「even a bit low」。8 月 WSJ 投書〔轉述〕批評財政部回購：「This wasn't liquidity management, it was price management」。

**注意。** 他是財長 Bessent 的恩師，與 Fed 主席 Warsh 關係密切（資料包用語為「ally」；Warsh 曾在 Duquesne 任職）〔報導〕。他的言論帶有政策圈視角，也有利益關係。

### 5.4 Ray Dalio：最系統化的悲觀者，台灣說法經原文核實

**結論。** Dalio 認為美國處於「real rates rise and central banks tighten before these moves bite」的階段，債券熊市未完，三年內（加減兩年）可能出現財政危機〔事實，2026-08-21 與 10-13 Substack 原文〕。

**台灣（逐字核實）。** 2026-04-07：「I estimate the probability of a US-Chinese military war over this at 30-40%, with the greatest-risk period in 2028.」這句沒有附時間範圍；同文其他衝突都寫「over the next five years」。2026-06-18：「the US is unwilling and ill-prepared to enter into a fight with China in East Asia」、「AI is everything, and AI without Taiwan is nothing」，但同段結尾：「it probably won't materialize, though the threats are real and the risks are high」。他也寫，習近平希望在 2028 年後的任期內「some form of reunification」，方式是「applying pressure to enable reunification without a big military fight」〔事實〕。

**不動產。** 2025 年：不動產「more interest rate sensitive than it is inflation sensitive … likely to go down in real terms」，而且「easy to tax because it can't be moved」〔報導〕。

**Bridgewater（Dalio 2025 年 7 月已完全退出，另計）。** 2026 年第二季 13F 賣美光 15.7 億美元、台積電 ADR 由 107.7 萬股減到 3.45 萬股，加碼 SPY 等指數與公用事業〔事實〕。

**解讀〔推論〕。** Dalio 的台灣論點是「施壓式統一」比「軍事攻台」更可能。這對台灣資產的意涵是長期折價，而不是單一事件風險。

### 5.5 Blackstone：從不動產之王，轉為信貸與 AI 基建的資金提供者

**結論。** Blackstone 不動產部門資產由 3,393 億美元降到 3,090 億（−9%），信貸與保險由 3,296 億升到 4,800 億（+46%）；資料中心平台約 1,850 億美元〔事實〕。

**行動。**
- BREIT 淨流量：2024 年 −60 億、2025 年 −26 億美元，2026 年第二、三季才轉正；資料中心占 BREIT 不動產 9%→30%〔事實，BREIT 10-Q/10-K〕。
- BCRED 2026 年第二、三季贖回申請約占淨值 10%，依 5% 上限比例兌付，各季淨流出約 12–14 億美元〔事實〕。
- 亞洲：AirTrunk 240 億澳元（2024-12 完成）、東京紀尾井町 ¥4,000 億、印度與日本驅動的亞洲 PE 基金 131 億美元〔事實〕。

**言論。** Gray 4Q25：「since the interest-rate cycle began … real estate values are still down 16% compared to an increase of 75% for the S&P 500」。Schwarzman 3Q26：「a historic increase in bond yields globally … the higher cost of capital has negatively impacted investor sentiment and transaction activity」〔事實，官方逐字稿〕。

**解讀〔推論〕。** Blackstone 的行動比言論保守。它用資料中心與信貸撐起成長，傳統不動產則在退出。官方逐字稿完全不談台灣與中國，這種沉默本身就是一種態度。

### 5.6 Brookfield：最樂觀的實體資產派，利率判斷在 2026 年被修正

**結論。** Brookfield 2025 年部署 656 億美元，其中信貸占 55%、不動產占 11%；資金主力流向信貸、保險與 AI 電力〔事實〕。

**行動。** 收費資本 4,570 億（2023 年底）→6,820 億美元（2026Q3，含 Just Group 400 億委託，口徑有斷點）；AI 與電力承諾包括 Kentucky AI 工廠 1,000 億、Westinghouse 核電 800 億美元等；2026 上半年賣約 100 億美元不動產〔事實〕。

**言論（已核對原文）。** 2026 年 2 月「a short rate of around 3% and long rate of around 4% is more normal」，句首是「Irrespective,」，屬於「正常水準」的論述，不是預測。「asset values are set to rise substantially」指自家核心市場。2025 年 6 月「So, trade does not really matter to us. We don't trade.」。9 月投資人日：「ten year at 5% puts everyone sort of on watch」〔事實〕。

**解讀〔推論〕。** Brookfield 是唯一明說「總體事件對長期投資幾乎無關」的一組。它的確定性來自長約與收費模式；看它的言論，要和它的商業模式一起看。

### 5.7 李錄與段永平：中文世界的價值派，同時加碼中國消費平台

**結論。** 喜馬拉雅拼多多占 13F 22%，段永平 10%，兩人都在 2026 年第二季加碼；同期喜馬拉雅出清美國銀行；段永平的蘋果持股自 2024Q1 以來累計減少 58%（2026Q2 單季減 6%）〔事實〕。

```chart
{"type": "line", "title": "李錄：拼多多加到 22%，美國銀行出清", "subtitle": "喜馬拉雅資本，占 13F 申報市值 %", "csv": "data/c08_himalaya_13f.csv", "xcol": "quarter", "ycols": ["alphabet", "bank_of_america", "pdd"], "names": ["Alphabet", "美國銀行", "拼多多"], "unit": "%", "dec": 1, "yMin": 0, "xLabel": "季", "source": "SEC EDGAR 13F-HR（喜馬拉雅 CIK 1709323）。13F 只含美國上市股票多頭與期權；權重變化混合價格與交易"}
```

```chart
{"type": "line", "title": "段永平：蘋果由八成降到四成，拼多多加到 10%，台積電 2025Q4 高點 2.1% 後於 2026Q2 清倉", "subtitle": "H&H International，占 13F 申報市值 %", "csv": "data/c08_hh_13f.csv", "xcol": "quarter", "ycols": ["apple", "berkshire_b", "pdd", "tsmc_adr"], "names": ["蘋果", "波克夏 B", "拼多多", "台積電 ADR"], "unit": "%", "dec": 2, "yMin": 0, "xLabel": "季", "source": "SEC EDGAR 13F-HR（H&H International CIK 1759760）。不含港股（騰訊、泡泡瑪特）、A 股（茅台）、現金與賣權部位；股數變化見資料包 07 B2"}
```

**行動。**
- 喜馬拉雅港股：比亞迪 2021 年 11 月因稀釋降到 4.97%，之後不需申報，現況未知，**不能說已出清**；郵儲銀行 2025 年 5 月降到 4.96%〔事實，港交所披露〕。
- 段永平：茅台多次加碼；泡泡瑪特持股 8.01%，含衍生品（2026-09-01）；以賣出賣權建倉特斯拉與泡泡瑪特；台積電 2026 年第二季清倉，原因未說〔事實〕。

**言論。** 李錄 2026-10-05 哥大演講（官方中文稿）：中國房價自 2021 年跌約 40%，家庭財富降 60–70%；中國股市十年停滯，但「全球競爭力極強的優秀企業，以非常低的價格交易」。李錄 2025 年唯一一句台灣言論：「解決好台灣問題，中美並非終有一戰」〔事實〕。

**解讀〔推論〕。** 兩人看好中國的方式，是買被低估的消費平台，不碰地產與銀行。同時減持美國大型銀行與蘋果，與「美股貴」的共識一致。

### 5.8 李嘉誠家族／長和系：變現、囤現金、退出政治敏感資產的路線不變

**結論。** 長和中國大陸 EBITDA 由 2019 年 105 億港元降到 2025 年 29 億（underlying），占集團比重由 9.4% 降到 2.5%；歐洲維持約 55%〔事實，主 session 已核對年報 PDF〕。

```chart
{"type": "bar", "title": "長和 EBITDA 2019→2025：中國大陸由 105 億降到 29 億港元，占集團比重由 9.4% 降到 2.5%；歐洲維持約 55%", "subtitle": "十億港元，IFRS16 前；2025 為 underlying", "csv": "data/c07_ckh_ebitda_region.csv", "xcol": "region", "ycols": ["y2019", "y2025"], "names": ["2019", "2025"], "unit": "十億港元", "dec": 1, "xLabel": "地區", "source": "長和年報「Analyses of Core Business Segments by Geographical Location」（2019、2025 年版）。占比分母為集團 EBITDA 總額（2019：1,120.68 億；2025 underlying：1,157.38 億）；圖中未列的 Finance & Investments and Others 約占 11%（2019）與 18%（2025）。2019 加拿大為 underlying，未計赫斯基減值"}
```

**行動。** 賣 UKPN（105 億英鎊）、VodafoneThree 49%（43 億英鎊）；港口交易 9–11 月公開查無進展，巴塞隆納分塊已撤件；屈臣氏上市延到 2027 年；長建 8 月啟動出售澳洲 EDL；9–11 月長和系沒有任何交易、股息或回購公告〔事實〕。

**香港。** 2023–26 年政府住宅賣地，長實投標 12 次全未得標；Blue Coast 開價低於成本約 22%〔事實〕。

```chart
{"type": "bar", "title": "2023–2026 香港政府住宅賣地：長實投標 12 次全未得標，恒基 0/5，新世界沒有出現在投標名單", "subtitle": "2023-01 至 2026-10，20 次住宅地招標；次數含合資", "csv": "data/c05_hk_land_tenders.csv", "xcol": "group", "ycols": ["bids", "wins"], "names": ["投標次數", "得標次數"], "unit": "次", "dec": 0, "xLabel": "集團", "source": "地政總署賣地結果與 info.gov.hk 各標書結果新聞稿。20 次招標中 16 次成交（共 268.9 億港元）、4 次流標。不含港鐵、市建局項目；以子公司名義投標而母公司不明者未計入"}
```

**言論。** 李澤鉅 2024 年：「I am not going to bet against Hong Kong's ability to recover」；2026 年 8 月長建：「not succumb to any 'must-win' mentality」；10 月：長建處於「歷來最雄厚之財務狀況」〔事實／轉述〕。

**解讀〔推論〕。** 長實每次都投標，代表他們要地，但只出自己的價格。這和「不押注香港無法復甦」不衝突，但顯示他們對復甦力道比其他發展商保守。

### 5.9 GIC、淡馬錫、NBIM：主權資金說要謹慎，配置卻往美國與股票走

**結論。** GIC 兩年（2024-03→2026-03）把股票由 46% 提高到 56%、美洲由 44% 提高到 53%，同時 20 年實質報酬降到 3.4% 的紀錄低點，原因之一是「more cautious」〔事實〕。

**行動。** GIC 加碼對沖基金 300 億美元，建倉黃金；淡馬錫 FY2026 淨投資 200 億星元，中國金額增、占比降到 17%，美洲升到 26%（地區標籤部分為推定）；NBIM 台灣占股票 2.5%→3.9%，中國 3.6%→2.9%〔事實〕。

**言論。** GIC 年報：「interest costs now rival defence spending … political appetite for meaningful fiscal consolidation is absent」；「unpredictable US policies … are increasingly challenging US exceptionalism」。Tangen 2026 年 8 月：「a bit more nervous … never seen a concentration risk like that」〔事實〕。

**解讀〔推論〕。** 主權資金最清楚地呈現「說擔心、做加碼」的矛盾：規模太大，只有美國市場容得下。

### 5.10 日本地產三雄：國內創新高、資產周轉、中國極小、台灣深耕

**結論。** 東京都心 5 區辦公空置率由 2022 年的 6.38% 降到 1.85%，租金創新高；首都圈新建公寓均價 10 年漲 66%，但均價受都心超高價物件拉高，中位數只漲 46%〔事實〕。

```chart
{"type": "line", "title": "東京都心 5 區辦公空置率由 6.4% 降到 1.85%", "subtitle": "三鬼商事，各年 11 月與 2026 年 9 月，%", "csv": "data/c06_tokyo_office.csv", "xcol": "period", "ycols": ["vacancy_pct"], "names": ["空置率"], "unit": "%", "dec": 2, "yMin": 0, "xLabel": "期間", "source": "三鬼商事「最新オフィスビル市況」（東京都心 5 區，基準階 10 坪以上）"}
```

```chart
{"type": "line", "title": "平均募集租金創新高", "subtitle": "三鬼商事，各年 11 月與 2026 年 9 月，日圓/坪", "csv": "data/c06_tokyo_office.csv", "xcol": "period", "ycols": ["rent_yen_tsubo"], "names": ["平均募集租金"], "unit": "日圓/坪", "dec": 0, "yMin": 0, "xLabel": "期間", "source": "三鬼商事「最新オフィスビル市況」"}
```

```chart
{"type": "bar", "title": "首都圈新建公寓均價 10 年漲 66%（中位數漲 46%）", "subtitle": "首都圈 1 都 3 縣，每戶，萬日圓", "csv": "data/c06_tokyo_condo.csv", "xcol": "year", "ycols": ["avg_man_yen", "median_man_yen"], "names": ["平均", "中位數"], "unit": "萬日圓", "dec": 0, "xLabel": "年", "source": "不動產經濟研究所 2026-02-12 新聞稿表 1。2023 年均價跳升 +28.8% 主要由都心超高價物件拉動，同年中位數僅 +11.5%"}
```

**行動。** 三井、三菱地所、住友 FY3/2026 純益都創新高。三家都在出售資產、減少交叉持股、回購自家股票；三井海外資產占 32%。住友會長股東會贊成率 76.72%（2025）→83.38%（2026），Elliott 施壓仍在〔事實〕。

**言論。** 三井植田：「国内金利の上昇は想定よりも早く、海外では利下げが想定ほど進んでいない」（國內升息比預期快，海外降息比預期慢）〔事實〕。三菱地所：頂級辦公室有足以抵銷利息成本上升的租金成長〔事實〕。

**解讀〔推論〕。** 外資在東京大買的同時，日本本地龍頭在賣資產、把錢移往海外與股東回報。雙方都對，但這也是東京週期偏後段的訊號之一。日銀升到 1.25% 是要持續追蹤的變數。

### 5.11 香港與東南亞家族：有現金的在買地，負債高的在求生

**結論。** 2023 年至 2026 年 10 月香港政府住宅賣地 20 次，16 次成交、共 268.9 億港元；信和得標 5 次最多，長實與恒基都是 0〔事實〕。

**行動。** 嘉里 2026 年 10 月以 43.1 億港元標得何文田地，比第二高價高 33.6%；新地淨負債降 28%，標得港鐵屯門 A16；新世界 FY2026 總虧損 268 億港元，以持續經營為基礎編製，周大福表示準備提供支持〔事實〕。

**言論。** 嘉里郭孔華：「the supply-demand balance of the residential market in Hong Kong has turned positive」；同時指出內地樓市泡沫破裂的「poverty effect」。恒基、嘉里、太古三家分別點名 2026 年內地資本外流管制壓抑港樓〔事實；中國原始政策未核實〕。

**解讀〔推論〕。** 香港在 2021 年高點後跌約三成，2025 年 3 月見底，2026 年回升約 10%。誰能在谷底買，取決於資產負債表。這是給所有開發者的鏡子。

### 5.12 第二層：Klarman、Dimon、Grantham

**Klarman／Baupost。** 13F 由 2024Q1 的 36.5 億美元增到 2026Q2 的 54 億（Amazon 16.5%）；說 AI「has characteristics of a bubble」、美債「the risk free asset is riskier every day」；不動產最看好長照與冷鏈〔事實／轉述〕。

**Dimon／JPMorgan。** 致股東信說通膨上升是「skunk at the party」，家庭淨值對 GDP 560%，高於 2006 年房市高峰的 460%；私募信貸「probably does not present a systemic risk」，但信用週期來時損失會高於預期〔事實〕。行動上，第三季回購大降到 10.6 億美元；第三季末商用不動產貸款年增只有 2%，企業與投行貸款增 27%〔事實，Q3 10-Q〕。

**Grantham／GMO。** 美國大型股 7 年實質報酬預測 −7.4%／年；GMO 資產配置策略日本權重是 MSCI ACWI 的 5.8 倍與 2.9 倍；9 月季信預期 AI 泡沫的觸發點是「supply」，包括 IPO 供給〔事實〕。

---

## 6. 資料來源

所有數字的完整出處（含網址）在 `data/` 各資料包。主要原始來源：

- **總體（`00`）：** Fed 聲明與經濟預測、BLS、BEA、FRED（DGS10、DGS30、DCOILBRENTEU）、財政部 Monthly Treasury Statement 與回購公告、國家統計局、日銀聲明、台灣證交所。
- **波克夏（`01`）：** SEC EDGAR 10-Q/10-K/13F、berkshirehathaway.com 致股東信與新聞稿、CNBC Warren Buffett Archive 逐字稿。
- **Oaktree（`02`）：** oaktreecapital.com 備忘錄原文、BOH 10-K、BAM 季度補充資料、SEC Form D。
- **Druckenmiller（`03`）：** EDGAR 13F 與 13G、Morgan Stanley「Hard Lessons」官方逐字稿；WSJ／FT 僅轉述。
- **Dalio（`04`）：** raydalio.substack.com 原文、House Budget Committee 書面陳述、EDGAR（Bridgewater 13F）。
- **Blackstone（`05`）：** SEC 8-K 財報新聞稿、12 份官方法說逐字稿、BREIT 10-Q/10-K。
- **Brookfield（`06`）：** BN 致股東信、BAM 季報與補充資料、2026 投資人日官方逐字稿。
- **李錄／段永平（`07`）：** EDGAR 13F、港交所權益披露（di.hkex.com.hk）、哥大官方中文逐字稿。
- **長和系（`08a`–`c`）：** 港交所披露易、長和年報地區分析 PDF、ckh.com.hk。
- **新加坡主權／NBIM（`09`）：** GIC Report 2025/26 PDF、淡馬錫 Review 2026 摘要、NBIM 年報與半年報、NBIM 持股資料、台積電 2025 年報股東名冊。
- **日本（`10`）：** 決算短信（TDnet）、EDINET 臨時報告書、不動產經濟研究所、三鬼商事、日銀。
- **香港（`11`）：** 港交所公告、地政總署賣地紀錄、info.gov.hk 標書結果、中原 CCL、HKMA API。
- **第二層（`12`）：** EDGAR、JPMorgan 致股東信與 10-Q、gmo.com。
