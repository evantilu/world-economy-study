# M3d 訪日客、東京飯店、資料中心資料

資料日期：2026-11-24 擷取。標記說明：「讀xlsx／讀PDF／讀頁」＝我實際下載並讀到原檔或原文；「WebFetch摘要」＝經抓取工具摘要，未見原文全文（二手轉載者另註）；「僅搜尋片段」＝只看到搜尋結果的摘要句。數字皆來自本次讀取，未憑記憶補數。CSV：m3_inbound.csv、m3_inbound_monthly.csv、m3_hotel_tokyo.csv、m3_hotel_tokyo_monthly.csv、m3_hotel_adr_revpar.csv、m3_datacenter.csv。

## 1. 訪日外客數（JNTO）
- 檔案：m3_inbound.csv（年別 2015–2026，含韓、中、台、港、美、歐、豪及各年 1–10 月合計，供同期比較）、m3_inbound_monthly.csv（2025-01～2026-10 月度）。
- 來源：JNTO「訪日外客統計」統計表 xlsx（2026-11-18 公布，含 2003 年起各年分頁）https://www.jnto.go.jp/statistics/data/_files/20261118_1615-5.xlsx ；頁面 https://www.jnto.go.jp/statistics/data/visitors-statistics/ 。讀 xlsx 原檔。10 月數字另與 Travelvoice 報導（https://www.travelvoice.jp/20261118-160889 ，WebFetch摘要）核對一致。
- 口徑：JNTO 公布之訪日外客數，單位人；近月為推計值（xlsx 以斜體標示，後續會修正）。2026 年為 1–10 月累計（10 月為速報推計）。2026 年 9 月起歐洲合計未公布（欄位空白）。2026 累計值為 JNTO 四捨五入至千人。
- 重要數字：2015 19.74M；2019 31.88M；2020 4.12M；2023 25.07M；2024 36.87M；2025 42.68M（+15.8%）。2026 年 1–10 月 34.64M，較 2025 年同期（35.55M，由月別加總）-2.5%。2026-10 單月 3.91M（+0.4%，單月歷史最高），前兩個月 8、9 月分別為 3.10M（-9.6%）、3.10M（-5.0%）。
- 中國：2019 9.59M；2025 9.10M；2026 年 1–10 月 3.72M，約為去年同期（8.20M）之 45%（JNTO 累計伸率 -54.7%）。韓國 2026 年 1–10 月 9.30M（+21.4%）、台灣 6.63M（+17.7%）、美國 2.87M（+5.2%）。
- 注意：「中國減少、其他市場補位」是此表可直接看到的現象；原因（渡航自粛）出現在 JHR 公告與 CoStar 摘要，非 JNTO 表本身。

## 2. 東京飯店客室稼働率（觀光廳宿泊旅行統計調査）
- 檔案：m3_hotel_tokyo.csv（年別 2015–2025）、m3_hotel_tokyo_monthly.csv（月別 2015-01～2026-08）。
- 來源：觀光廳「宿泊旅行統計調査」頁 https://www.mlit.go.jp/kankocho/tokei_hakusyo/shukuhakutokei.html 之各年確定值 xlsx（2015–2025，如 https://www.mlit.go.jp/kankocho/content/002026762.xlsx＝2025 年）、推移表 xlsx https://www.mlit.go.jp/kankocho/content/002028776.xlsx（旧4-1／旧4-2＝2011–2025 年及月別；4-1／8-1＝2026 年月別）、2026-09 第1次速報 https://www.mlit.go.jp/kankocho/content/002028774.xlsx 。全部讀 xlsx 原檔。
- 口徑：客室稼働率（利用客室數／可供客室數），全施設（含従業者 0–9 人小型施設），觀光庁以抽樣擴大推計；宿泊施設類型六分（旅館、リゾートホテル、ビジネスホテル、シティホテル、簡易宿所、會社・團體宿泊所）。「ホテル別」在官方表為 ビジネス／シティ／リゾート 三類，無單一「ホテル合計」，故 CSV 分欄呈現。
- **斷點（重要）**：官方註明 2026 年 1 月分起層化基準由「従業者數」改為「客室數」，對前年同月比含改制影響。CSV 以 basis 欄標示 old_staff（~2025）／new_rooms（2026）；2026 另附客室 20 室以上口徑（*_20plus，新口徑下較高 2–3pt）。2026 年無年平均（尚未公布），故年別檔 2026 留空。2026-09 起第1次速報僅公布全國，東京無資料。
- 年別東京全體：2015 82.6；2016 78.8；2017 80.0；2018 80.0；2019 79.5；2020 33.6；2021 36.0；2022 52.8；2023 73.4；2024 75.1；2025 76.3（%）。2025 年 ビジネス 81.5、シティ 77.2（2019：84.0、84.2）。全國 2025 61.6（2019：62.7）。
- 延べ宿泊者數（人泊）東京：2019 78.98M→2025 107.90M；其中外國人 29.35M→60.12M。2025 年全體較 2024（110.35M）-2.2%，外國人 +5.8%（56.80M→60.12M），隱含日本人宿泊減少（推論，由兩者相減）。
- 推算供給：m3_hotel_tokyo.csv 的 implied_tokyo_room_supply_million＝利用客室數÷稼働率（本人計算，推論），2019 68.2M 室夜→2024 90.5M→2025 84.9M。此數含抽樣推計誤差與調查母體更新影響，不應解讀為實際客房增減。
- 2026 月別（新口徑）：東京 1 月 70.7、2 月 76.8、3 月 73.6、4 月 78.7、5 月 77.9、6 月 75.4、7 月 75.3、8 月 72.5%（第2次速報）。8 月起較 2025 同月（舊口徑 74.5）低，但跨口徑比較不嚴謹。

## 3. ADR／RevPAR（有幾點記幾點，口徑各異）
- 檔案：m3_hotel_adr_revpar.csv（月度，JHR）；以下點值僅列此節。
- **ジャパン・ホテル・リート投資法人（JHR, 8985）**：月次公布「變動賃料導入 29 飯店」稼働率／ADR／RevPAR，並有地區別（北海道、東京、關東除東京、大阪…）。來源：IR 頁 https://www.jhrth.co.jp/ja/portfolio/review.html 與其 xlsx（2026-10-26 現在），讀 xlsx；6 月度開示 https://www2.jpx.co.jp/disc/89850/140120260724599345.pdf ，讀 PDF。定義：稼働率＝售出客室÷可售客室；ADR＝宿泊部門營收（含服務費）÷售出客室；RevPAR＝宿泊部門營收÷可售客室；為賃借人提供、未經審計。
  - 東京區 2026 年 1–9 月累計：稼働率 83.7%、ADR 12,748 円（-1.6%）、RevPAR 10,676 円（+1.8%）。月別見 CSV（如 4 月 ADR 14,429、RevPAR 12,764；8 月 12,172、9,963）。
  - 29 飯店全體：1–9 月稼働率 79.7–85.8%、ADR 17,800–23,337 円；6 月度累計 RevPAR +4.9%。
  - 限制：東京區含哪幾間未逐項核對；29 飯店名單中東京都及周邊有 the b 水道橋、池袋、八王子與オリエンタルホテル東京ベイ，以宿泊特化型為主（推論），非高端飯店，不能代表東京整體 ADR。ヒルトン東京お台場因 2026-02～2027-12 大規模改裝已排除出開示對象（讀PDF）。
- **JLL（Travelvoice 轉載，2025-12-08，WebFetch摘要）** https://www.travelvoice.jp/20251208-158863 ：Tokyo 2025 年 ADR 為 188.5 美元（依文中 1 美元=155 円約 29,200 円；新加坡 238.1、倫敦 249.9、紐約 305.9、巴黎 373.7 美元）。2025 年 Tokyo ADR 高於 2019 與 2024，稼働率仍低於 2019（無數字）。日本全國至 2025-09：稼働率 +3.2pt、ADR +10.8%、RevPAR +15% 以上。供給 pipeline（2025-06 時點）約為現有庫存 2% 左右。未讀 JLL 原報告，ADR 口徑（細分、樣本）未知。
- **JLL Tokyo 2026 H1 報告（2026-08-14，WebFetch摘要）** https://research.jllapsites.com/appd-market-report/q1-2026-hotels-tokyo/ ：luxury 稼働率約 75%、ADR 兩位數成長，其他細分 ADR 成長放緩；無日圓絕對值（數據在圖片內）。2026 Q1 東京外國人宿泊 +8%、日本人 -3.5%、合計 +3%，外國人占 57.1%（JNTO 數據引用）。上半年訪日 21,084,345 人（-2%）；Q2 中國客 -58%。2026-Q2 無 luxury／upper-upscale 新開幕。pipeline：Pullman Tokyo Ginza、Waldorf Astoria Tokyo（2027）；Canopy by Hilton Tokyo Akasaka、Dorchester Collection、Raffles Tokyo（2028）；Capella、Rosewood（六本木，2030）。
- **東京ホテル会（二手，Business Journal 2026-05-30，WebFetch摘要）** https://biz-journal.jp/economy/post_394779.html ：Tokyo ADR 19,028 円（2024-12，+13.2%），連續 25 個月創高；數據期間為 2024-12，母體與口徑文章未載。
- **東京商工リサーチ（全國品牌，非東京）**：2025 年度（至 2026-03）13 品牌 ADR 17,818 円（+8.6%）、稼働率 83.3%（前年 82.3%）；商務 9 品牌 ADR 14,463 円（+8.9%）、稼働率 83.9%；城市 3 品牌 ADR 25,490 円（+9.4%）、稼働率 81.2%（來源 https://www.travelvoice.jp/english/adr-of-major-hotels-in-japan-rose-by-8-6-to-17-818-yen-and-the-occupancy-rate-reached-83-3-in-fy2025 ，WebFetch摘要）。另有上場 12 社 2026 年 4–6 月期 ADR 18,003 円（+3.9%）、稼働率 82.7%，僅搜尋片段（https://honichi.com/news/2026/06/25/hotel-room-unit-price2026/ ），該文日期 2026-06-25 與「4–6 月期」說法有矛盾，待核。
- **Savills（2026-02，WebFetch摘要）** https://www.savills.com/research_articles/255800/230264-1 ：2025 年日本飯店投資額 8,200 億円（-33%，預估值）；Tokyo luxury ADR 名列倫敦、紐約、新加坡同級，無數字。
- **STR／CoStar**：官網 403，無法讀。搜尋片段稱 CoStar 預測因中國航班取消，Tokyo 2026 上半年稼働率下修（1、2、4 月年減）；未取得 Tokyo ADR／RevPAR 數列。

## 4. 資料中心
- 檔案：m3_datacenter.csv（22 列，category 分 grid 電力系統／market 市場彙總／project 個案）。單位混雜（kW 契約電力、IT MW、總電力 MW、發電出力 kW），逐列標示，不可直接相加。
- **電力限制（一手，讀PDF）**：
  - 東京電力パワーグリッド簡報（總務省會議資料 1-3，2025-03-21）https://www.soumu.go.jp/main_content/000998522.pdf ：DC 供電詢問 2024-08 時點 506 件、5,905 萬 kW；2024 年末推估 1,000 件以上、1 億 kW 以上；已受理託送申込（容量暫時確保）累計約 950 萬 kW；印西・白井區契約電力變更後計畫約為當初的 3 成、延後 2–3 年；TEPCO 提議建立釋放未實際使用容量的機制。
  - 東電PG 簡報（2025-04-21）https://www.soumu.go.jp/main_content/001006329.pdf ：千葉印西變電所（275kV）2024-06-05 運開（東電PG 24 年來首座新設），工期較原計畫約 8 年縮短約 3 年，但以 2025 年情勢換算同規模需 10 年以上；千葉、栃木 154kV 以下系統有空容量（都心 50km 內千葉約 130 萬 kW，50–100km 千葉約 140 萬 kW、栃木約 190 萬 kW）；建議 DC 立地於東側、近脫碳電源。
  - JLL（2026-01-05，讀頁）https://www.jll.com/ja-jp/insights/japans-data-centre-market-expands-beyond-tokyo-and-osaka ：東京圈申請至供電約需 8–10 年（大阪圈 3–5 年）；印西・白井 2030 年前新增供給受電力吃緊所限；東京圈市場 2025 年起較 2024 年末擴張 160% 以上（含建設中、計畫中，推計）；全國 DC 電力容量 90% 在東京與大阪圈。
- **市場規模（顧問公司，二手轉載）**：CBRE 2026Q1 大東京營運 1,086MW、upcoming 2,544MW（https://realestateasia.com/industrial/news/greater-tokyo-data-centre-pipeline-reaches-2544-mw ，WebFetch摘要）；Cushman & Wakefield 2025H1 營運 1,160MW、pipeline 1,948MW，印西占營運 32%、pipeline 44%，空置率 6%（https://realestateasia.com/industrial/news/tokyo-data-centre-capacity-grows-2-in-h1 ，WebFetch摘要）。兩家期間與口徑不同，無法調和；皆未讀原報告。Structure Research 未取得。
- **個案（印西・白井聚落）**：MC Digital Realty NRT 校園（印西市）NRT14 於 2026-04-08 開業，25MW，校園合計約 100MW（NRT10 2021、NRT12 2024；讀頁，https://monoist.itmedia.co.jp/mn/articles/2604/13/news042.html ；另一搜尋片段稱 31MW／104MW，口徑未核實）。NTT GDC 東京 TKY11（白井市，50MW IT，2027-04 服務開始）、TKY12（約 200MW IT、6 棟，第一期 2030 年以後；讀原文 https://www.nttdata.com/global/ja/news/release/2026/041700 ）。AirTrunk TOK1（完全建成 300MW 以上，新增逾 100MW 施工中，日本四校園完工合計約 530MW；二手）。Equinix TY12x（54MW，僅搜尋片段）。Goodman 印西既有 300MW 以上（僅搜尋片段）。
- **東京圈其他**：JERA 於千葉火力電廠用地與 Dell、RHAELM 簽約，最大 40 萬 kW、投資約 150 億美元、約 2028 年（二手，2026-10-02）。三井不動產相模原最終 1,000MW 級（二手，可信度低）。Goodman 筑波 1,000MW（首期 50MW，2026-08 簽 20 年租約）、相模原 2026-05 被任命開發夥伴（搜尋片段）。
- 千葉縣印西市基本計畫文件（https://www.pref.chiba.lg.jp/keisei/keizaitaisaku/chiikimirai/documents/inzaigaiyou.pdf ，讀PDF）：印西距東京都心約 40km、近成田機場、地盤強固，定位 DC 集積地；計畫期間至令和10年度末；文件無 MW 數字。

## 5. 限制與缺口
- **ADR／RevPAR 缺東京整體年度時間序列**：STR／CoStar 為付費或 403；JLL 圖表以圖片呈現；東京ホテル会只取得 2024-12 單點。JHR 東京區為低價宿泊特化型，非整體代表。最大缺口。
- 觀光廳稼働率 2026 年與 2025 以前不連續（層化基準改變），2026-09 之後東京缺資料；年平均 2026 尚未公布。
- 觀光廳東京延べ宿泊者數 2019→2023 大幅上升（78.98M→99.45M，全國同期僅 +3.6%），可能含調查母體／推計更新影響（推論，未查證）。
- 資料中心：缺印西單獨現況 MW（官方資料中心統計）、各業者案名 MW 的原文（Equinix、Digital Realty 全球、AirTrunk、GLP、三井不動產 皆僅二手或搜尋片段）；未取得經產省／總務省對 DC 容量的彙總表、Structure Research；東電PG 2026 年的最新受理量未取得（只有 2025-03/04 資料）。CBRE／C&W 數字經 Real Estate Asia 轉載，口徑不一。WebFetch 對 monoist 初次摘要曾誤稱 NRT14 在成田市，經解碼原文確認為印西市，提示 WebFetch 摘要需交叉核對。
- 訪日客：JNTO 近月為推計值會修正；2026-09 起未公布歐洲合計；本表未納入出國日本人、停留天數、消費額。
