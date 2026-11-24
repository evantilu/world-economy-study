# 09 Long-horizon sovereign investors: GIC, Temasek, CapitaLand Investment, NBIM

Compiled 2026-11-07. Data-gathering only, no conclusions. Every bullet = fact + date + source URL.
Verification tags: [OPENED] = I opened the page and the figure was in the text; [SECONDARY] = secondary/aggregator, not primary; [INFERRED] = mapping or reading I had to infer; [PARA] = paraphrase, not verbatim.

Important data-quality notes (read first):
- GIC's own report page (report.gic.com.sg) renders charts as images/placeholders; asset/geography % for FY25/26 come from Caproasia and a Reuters-syndicated piece (kfgo.com), not from GIC text I could read. Two independent secondary sources agree (56/22/22 and Americas 53%).
  - [R2 更正：已取得 GIC 原始資料] The FY25/26 asset and geographic mix is now verified from GIC primary sources: the full report PDF (Tables 2 and 3, p.14) and the report site's own dataset file. Details in 1B.
- [R2] Temasek primary sites (temasek.com.sg, temasekreview.com.sg) returned HTTP 403 "Access Denied" on 2026-11-08 via curl and WebFetch (5 paths tried: news release, Highlights PDF, Media Release PDF, performance-and-portfolio page, investor factsheet/S&P report PDFs). Not bypassed. The FY26 labelled geography table therefore remains secondary/[INFERRED].
- [R2] NBIM country and holdings data in section 4 come from primary sources: the NBIM holdings API that feeds https://www.nbim.no/en/investments/all-investments/ (files 2024-12-31.json, 2025-12-31.json, 2026-06-30.json), Annual report 2025 and Half-year report 2026 PDFs. Raw files are in scratchpad/09/d4 and d5.
- Temasek's FY26 geography table was only extractable in jumbled form from the PDF; FY26 split below is reconstructed (see section 2E) and flagged [INFERRED].
- Several aggregator pages mis-state things (e.g., parsers.vc says Singapore "over 40%" which is actually the TPC segment 43%; Business Standard 2025 gives "$324bn" which does not match Reuters US$339bn). Treat those with caution.
- Fund sizes in USD differ by source (GIC AUM is not disclosed by GIC; Global SWF/SWFI estimates only).

---

## 1. GIC (Singapore)

### A. Status
- GIC does not disclose AUM. Estimates: ~US$936bn (SWFI) and US$1.16tn (Global SWF) cited in Reuters, 23 Jul 2026. https://kfgo.com/2026/07/23/singapores-gic-to-invest-another-30-billion-in-hedge-funds/ [OPENED, estimates]
- Refreshed framework from 1 Apr 2026: the "Reference Portfolio" (not a benchmark, GIC not expected to beat it) is replaced by a "Strategic Portfolio" (SP) which GIC is expected to outperform via active management within approved risk parameters. https://www.mof.gov.sg/news-resources/newsroom/principles-and-risk-parameters-for-gic-s-strategic-portfolio-framework/ [OPENED, MOF reply 8 Sep 2026]. SP has three groups: Equities (growth), Fixed Income (income), Real Assets (inflation resilience); weights not published in the release. https://www.gic.com.sg/uploads/2026/07/GIC-Report-2025-26-News-Release.pdf [OPENED]
- Bryan Yeo became Group CIO in April 2025 (per top1000funds, "this April"). https://www.top1000funds.com/2025/07/gic-ups-us-equities-allocation-despite-valuation-worries/ [OPENED]. CEO: Lim Chow Kiat.
- Note: the brief named Jeffrey Jaensubhakij as CIO; sources show Bryan Yeo as Group CIO in the 2025 and 2026 reports.
- [R2] GIC Report 2025/26 (published 24 Jul 2026, 76 pp., title "Tightening Constraints, Widening Outcomes, Enduring Purpose") lists Lim Chow Kiat as Chief Executive Officer and Bryan Yeo as Group Chief Investment Officer (Executive Management section). https://www.gic.com.sg/uploads/2026/07/GIC_AR_2025-26_PRINT.pdf [OPENED, pdftotext]
- [R2] Per the CEO letter, the 2013 New Investment Framework ran from 1 Apr 2013 to 31 Mar 2026. Over that period the portfolio returned global inflation +4.2% a year, and active strategies added "52 basis points of gross alpha per year over and above the Policy Portfolio". Same PDF, p.6-7 [OPENED]

### B. ACTIONS
Returns (20-year annualised, periods to 31 March):
- FY2025/26: real 3.4%, nominal USD 5.6%. 10-yr nominal 6.2%, 5-yr nominal 3.6% (prior year: 10-yr 5.0%, 5-yr 6.1%). Real return is the lowest on record in the series cited (prior low 2.7% in 2020). https://www.gic.com.sg/newsroom/all/gic-delivers-steady-long-term-returns-within-its-mandate-and-stays-focused-on-portfolio-resilience-in-a-structurally-changed-world/ (3.4/5.6 [OPENED]); https://www.caproasia.com/?p=78163 (10/5-yr [SECONDARY, opened]); https://kfgo.com/2026/07/23/singapores-gic-to-invest-another-30-billion-in-hedge-funds/ (2.7% low [OPENED])
- FY2024/25: real 3.8%, nominal 5.7% (FY2023/24: real 3.9%, nominal 5.8%). https://www.mingtiandi.com/?p=429560 [OPENED, 26 Jul 2025]; https://www.thestar.com.my/business/business-news/2024/07/25/gic-annualised-return-over-20-years-at-39 (3.9% title only)
- Reference portfolio (65% equities/35% bonds) 20-yr annualised nominal to Mar 2025: 6.2% vs GIC 5.7%. https://www.top1000funds.com/2025/07/gic-ups-us-equities-allocation-despite-valuation-worries/ [OPENED]
- Global SWF model estimate of FY26 single-year return: 22% (model estimate, not GIC-reported). https://kfgo.com/2026/07/23/singapores-gic-to-invest-another-30-billion-in-hedge-funds/ [OPENED]
- Hedge funds: GIC to invest another ~US$30bn in hedge funds over three years (Reuters, 23 Jul 2026); hedge fund investments tripled over past decade. Same URL. [OPENED]
- Parliamentary reply (5 Aug 2026): fall from 3.8% to 3.4% "partly" due to "GIC's more cautious investment approach in recent years". https://www.mof.gov.sg/news-resources/newsroom/drop-in-gic-s-annualised-rolling-20-year-real-rate-of-return-for-year-ended-31-march-2026/ [OPENED]

Asset mix (end-March):
- FY23/24: Equities 46%, (Fixed income 32% implied by "down 6pts" to 26%), Real assets 22%. 
  - [R2 更正：補出處] 46% 由 Mingtiandi（2025-07-26）「equities shot up five points to 51 percent and fixed income fell six points to 26 percent」反推，屬二手。GIC 2023/24 年報原文未取得。https://www.mingtiandi.com/?p=429560 [OPENED 2026-11-08]
- FY24/25: Equities 51%, Fixed income 26%, Real assets 23%. https://www.mingtiandi.com/?p=429560 [OPENED]; https://www.top1000funds.com/2025/07/gic-ups-us-equities-allocation-despite-valuation-worries/ [OPENED]
- FY25/26: Equities 56%, Fixed income 22%, Real assets 22%. https://www.caproasia.com/?p=78163 [SECONDARY]; Reuters via https://kfgo.com/2026/07/23/singapores-gic-to-invest-another-30-billion-in-hedge-funds/ states Equities 56% (up from 51%), FI 22% (down from 26%), real assets 22% "broadly stable" [OPENED]
- [R2] Primary confirmation. GIC Report 2025/26 Table 2 "Asset Mix of the GIC Portfolio": at 31 Mar 2026, Equities 56, Fixed Income 22, Real Assets 22; at 31 Mar 2025, 51 / 26 / 23 (%). Report text: "the share of equities increased, while the share of fixed income correspondingly decreased. Within equities, we increased investments in the US, which remains GIC's largest investment market. The share of real assets remained stable over the year." https://www.gic.com.sg/uploads/2026/07/GIC_AR_2025-26_PRINT.pdf p.14 [OPENED]. The report site's dataset gives the same figures: https://report.gic.com.sg/assets/datasets/data.json ("asset-mix-equities":"56", "asset-mix-equities-2025":"51", etc.) [OPENED]
- [R2] The same dataset gives 20-yr volatility 8.7%, 10-yr volatility 6.8% and 5-yr volatility 6.9%. It also gives a 20-yr rolling real-return series for 2001-2026 (chart0_1.csv), which matches the series in 1E (2020 2.7, 2024 3.9, 2025 3.8, 2026 3.4; peak 5.8 in 2001; 2009 2.6). https://report.gic.com.sg/assets/datasets/chart0_1.csv [OPENED]
- [R2] Gold, per the report (p.15-16): "gold prices reached record highs on 44 days in the last financial year"; gold was "surpassing US$5,000 per ounce in early 2026"; and "Many investors now see gold as a long-term, structural component of their portfolios that can hedge against geopolitical and fiscal risks." GIC states it has "built exposure to structural diversifiers such as gold and inflation-resilient real assets" (CEO letter p.5). The gold allocation size is not disclosed. Same PDF [OPENED]

Geographic mix (end-March):
- FY23/24: Americas 44%, APAC 28%, EMEA 20%.
  - [R2 更正：補出處] 美洲 44% 出自同篇 Mingtiandi「investments in the Americas rising to 49 percent … from 44 percent a year earlier」，屬二手。APAC 28%、EMEA 20% 本次未核。注意 2024-03→2026-03 是兩年（三份年報），不是三年。[OPENED 2026-11-08]
- FY24/25: Americas 49%, APAC 24%, EMEA 20%, rest/global 7% (top1000funds). https://www.mingtiandi.com/?p=429560 ; https://www.top1000funds.com/2025/07/gic-ups-us-equities-allocation-despite-valuation-worries/ [OPENED]
- FY25/26: Americas 53%, EMEA 19%, APAC 22%, Global (funds, commodities, supranational debt) 6%. https://www.caproasia.com/?p=78163 [SECONDARY]; Americas 53% "largest exposure" also in Reuters (kfgo link above) [OPENED]
- GIC states it does not allocate assets by geography, only monitors regional exposure. https://www.gic.com.sg/our-portfolio [OPENED, text only]
- GIC no longer breaks out US/Japan/China separately in the pages I could read (top1000funds: "The US was previously reported as a standalone category"). Not available: Japan %, China % (GAP).
- [R2] Primary confirmation. GIC Report 2025/26 Table 3 "Geographic Mix of the GIC Portfolio" at 31 Mar 2026: Americas 53, Europe, Middle East, and Africa 19, Asia Pacific 22, Global 6 (%). Footnote 6: "Global refers to funds, commodities, and supranational debt instruments that do not provide geographical details." Text: "While we do not allocate our assets by geography, we monitor our exposures across regions." The table has only these four rows, so the full report does not break out the US, Japan, China or Taiwan separately. https://www.gic.com.sg/uploads/2026/07/GIC_AR_2025-26_PRINT.pdf p.14 [OPENED]; data.json keys geo-mix-americas 53 / emea 19 / asia-pacific 22 / global 6 [OPENED]
- [R2] Taiwan, via TSMC's 2025 Annual Report (ch.4, 4.1.3 Major Shareholders, as of 17 Dec 2025, the dividend record date): "Government of Singapore" holds 538,629,101 TSMC common shares, 2.08%, the third-largest common shareholder after the ADR depositary and the National Development Fund (6.38%). https://investor.tsmc.com/static/annualReports/2025/english/pdf/2025_tsmc_ar_e_ch4.pdf [OPENED, pdftotext]. The prior year was 682,006,536 shares (2.63%), a cut of about 143,000 lots (張), the largest seller among the top-ten shareholders. Account name: 花旗（台灣）商業銀行受託保管新加坡政府投資專戶. Economic Daily News, 24 Apr 2026, https://money.udn.com/money/story/5607/9462392 [OPENED, SECONDARY citing TSMC AR]. Earlier years: 3.15% (2023 AR) and 3.32% (2022 AR), per search summary only [UNVERIFIED]. Attributing this "Government of Singapore" account to GIC rather than MAS is [INFERRED]; GIC does not disclose it.
- [R2] Other GIC-Taiwan items, headlines only, not opened [SECONDARY]: Business Today 2025-10-27, "新加坡政府堅持長期持有，帳面價值突破1兆元！台積電為何能在半導體勝出…" https://www.businesstoday.com.tw/article/category/183015/post/202510270028/ ; Business Today 2026-06-28, commentary by 童振源, "巴菲特怕台海風險賣光台積電，新加坡政府投資公司4年狂賺1.5兆" https://www.businesstoday.com.tw/article/category/183025/post/202606280009/ (opinion piece; figure not verified). Reuters, 9 Mar 2022: GIC buying Taiwan stocks after a market fall, per three unnamed sources; GIC declined to comment. https://www.nippon.com/en/news/reu20220309KBN2L60Z9/ [not opened, search result only]

Real estate / infrastructure deals (2024-2026; sizes as reported):
- 2025-05: JV with CLV Group to acquire InterRent REIT (Canada, apartments), C$4bn (US$2.9bn), pending at time of report. https://www.mingtiandi.com/?p=429560 [OPENED]
- 2025-07: Techem (Germany, metering) with Partners Group and Mubadala, EV EUR6.7bn. Same URL. [OPENED]
- 2023 (context): Summit Industrial Income REIT (Canada) with Dream Industrial, C$4.4bn cash; Blackstone Japan logistics 6 assets >US$800m (28 Apr 2023). https://ceoinsightsasia.com/news/gic-to-acquire-japan-logistics-assets-from-blackstone-for-us800-million-nwid-10362.html [OPENED]
- 2026-08-11: GIC and Macquarie set up US data centre platform for Anthropic (size not stated). 2026-08-14: reports GIC funds Investa's A$450m (US$318m) Sydney tower buy (market reports, not confirmed). 2026-08-20: GIC selling Tokyo Pacific Century Place offices to Kenedix, >JPY230bn (US$1.4bn) (a SALE). 2026-09-01: GIC-Equinix JV selling Tokyo data centres to Keppel DC REIT, US$1.2bn (a SALE). 2026-09-06: Weave JV second rental housing asset near Seoul university. 2026-09-25: GIC buys 16 Japanese hotels from KKR, ~JPY200bn (US$1.26bn). 2026-10-09: GIC and Atrato buy 35 Carrefour stores France/Spain, EUR290m sale-leaseback. 2026-10-20: GIC buys half of ~GBP700m (US$933m) UK private hospital portfolio (27 hospitals) from Primary Health Properties. All from headlines on https://www.mingtiandi.com/tag/gic [OPENED, headlines/summary only; underlying articles not opened]
- GIC real-estate exposure: 2025 report said "Real estate valuations are potentially bottoming, presenting attractive investment opportunities" (see C).

### C. WORDS
- Lim Chow Kiat, 24 Jul 2026: "We will continue to focus on active investing which requires the judgement to allocate capital well and with granularity, the discipline to stay diversified, and the agility to act when good opportunities arise." Also "we are confident that we can keep delivering good real returns for Singapore over the years ahead." https://www.gic.com.sg/newsroom/all/gic-delivers-steady-long-term-returns-within-its-mandate-and-stays-focused-on-portfolio-resilience-in-a-structurally-changed-world/ [OPENED] (the quote is split in the page; joined here)
- Lim, Jul 2026 press (Reuters): "Given our mandate, this result is within that expectation"; "We wanted to focus on diversification, and we took less risk." https://kfgo.com/2026/07/23/singapores-gic-to-invest-another-30-billion-in-hedge-funds/ [OPENED]
- Bryan Yeo, Jul 2026 (Reuters): "Very likely, in the entire AI ecosystem, there will be some pockets of hype and overvaluation."; "That concentration risk is something that we look at quite closely." Same URL. [OPENED]
- GIC Report 2025/26 investment outlook (unattributed): "We expect inflation to rise as resilience and redundancy often reduces efficiency and raises costs." https://report.gic.com.sg/investment-report.html [OPENED; page otherwise placeholders]
- [R2] Bryan Yeo, Reuters, 24 Jul 2026, on the extra US$30bn for hedge funds (global macro, quant, multi-strategy): "These are three that we believe the go-forward environment is highly conducive on, and these are also the three types of managers that can actively and dynamically manage their risk and pivot … as the investment landscape continues to evolve with all the uncertainties". https://kfgo.com/2026/07/23/singapores-gic-to-invest-another-30-billion-in-hedge-funds/ [OPENED]. The report itself has no signed outlook from Yeo; he appears only in the governance and management lists. The 2.4 Investment Outlook is unattributed.
- [R2] Lim Chow Kiat, CEO letter, GIC Report 2025/26 (p.4-7). Verbatim from https://www.gic.com.sg/uploads/2026/07/GIC_AR_2025-26_PRINT.pdf [OPENED]:
  - "Today, across the global economy, constraints are tightening while outcomes are widening, creating a world of greater scarcity and complexity."
  - "Our response is to prepare, not predict. We build our portfolio around three key principles—diversification, granularity, and agility"
  - "Today, geopolitical risks are no longer episodic disruptions but structural changes, with more persistent and uneven market effects."; "Investments in defence, industrial policy, export controls, and other forms of economic and financial statecraft are becoming the norm."
  - "Efforts to secure advanced semiconductor production, rare earth supply chains, and key energy routes are increasing both the cost and complexity of building strategic capacity."
  - "While fiscal constraints are not yet binding in most major economies, sustained spending pressures may strain those that rely heavily on foreign financing or have less policy credibility."
  - "shocks now lead to more enduring and differentiated country risk premia, higher costs of capital, and greater divergence between winners and losers."
  - On the Middle East conflict: "Disruptions in the Strait of Hormuz threatened a significant share of world oil supply"; "Within days, oil prices rose sharply".
  - On AI: "Among the enablers, we built early conviction in hyperscalers and core AI infrastructure"; "We target bottlenecks in advanced semiconductor manufacturing and design, where rising complexity creates structural scarcity and sustained demand."; "In the application and adoption layers, it remains too early to identify the long-term winners."
- [R2] GIC Report 2025/26, 2.4 Investment Outlook (p.17-18, unattributed institutional view). Verbatim, same PDF [OPENED]:
  - "We believe three major forces will shape the investment landscape over the medium term: the changing world order, rising fiscal risks, and advancements in AI."
  - US-China and tariffs: "The US and China are increasingly operating within separate and competing spheres of influence such as trade, technology, and security alliances. Global economic policy has become less predictable—sweeping tariff actions and shifting alliances have introduced a level of regime uncertainty unseen in decades."
  - US fiscal: "in the US, interest costs now rival defence spending, primary fiscal deficits show no signs of improving, and political appetite for meaningful fiscal consolidation is absent."; "For investors, this calls for careful duration management and a reassessment of the role of sovereign bonds as risk diversifiers."
  - US exceptionalism: "unpredictable US policies, rising fiscal risks, and chronic geopolitical tensions are increasingly challenging US exceptionalism. The challenge for investors is that few markets offer comparable depth and liquidity as the US."
  - Fiscal stress list: "fiscal conditions have become increasingly stretched across developed and emerging markets, including the US, Japan, Europe, China, South Korea, and Brazil."
  - Bonds: "We expect higher and more volatile inflation, alongside a potential increase in the global supply of bonds"; "persistently higher bond yields over the medium term relative to pre-COVID-19 trends"; "low term premia suggest that medium-term risks around both inflation and deteriorating fiscal dynamics are not yet fully priced in."
  - AI and inflation: "In the near term, heavy investment in AI is likely to drive higher growth and inflation as countries compete. Over time … these inflationary pressures could give way to deflation."
  - Real assets: "The higher interest rate environment since 2023 has created attractive entry points across several sectors."
  - Box 3 (p.14): "Renewed uncertainty around United States (US) trade tariffs, rising protectionism, and intensifying competition for economic and technological advantage further underscore a fractured and evolving global order."
- [R2] Taiwan in the report: the word "Taiwan" does not appear anywhere in the 76-page report text (pdftotext search, 2026-11-08). Same PDF.
- Lim, Jul 2025: "These shifts are much harder to prepare for, and we need to be vigilant when navigating such unprecedented uncertainty." https://www.mingtiandi.com/real-estate/finance/gic-real-returns-hit-5-year-low-as-fund-navigates-uncertainty [OPENED]
- GIC Report 2024/25: "Real estate valuations are potentially bottoming, presenting attractive investment opportunities."; "There is renewed optimism around China's technology and AI advances as well."; "However, the exact boost to long-term productivity growth remains uncertain." Same URL. [OPENED]
- GIC Report 2024/25 (via top1000funds): "A more challenging growth outlook weighs on their prospects." (US companies); "these worries are balanced by healthy private sector balance sheets"; "The result will be a less efficient and more costly trading system," https://www.top1000funds.com/2025/07/gic-ups-us-equities-allocation-despite-valuation-worries/ [OPENED, page-extracted fragments]
- MOF Siow (8 Sep 2026): "We expect GIC to outperform the Strategic Portfolio over the long term through active management." https://www.mof.gov.sg/news-resources/newsroom/principles-and-risk-parameters-for-gic-s-strategic-portfolio-framework/ [OPENED]
- GIC feature article title: "Beyond the Hype: Investing in Artificial Intelligence Value" (two frameworks: where along AI value chain, and what to look for in companies). Release PDF above [OPENED, PARA]

### D. Themes (facts only)
1. Rates/inflation: Report 2025/26 expects inflation to rise (quote above); 2024/25 emphasises "less efficient and more costly trading system".
2. US equities/AI: equity share 46% -> 51% -> 56% over three years; Americas 44% -> 49% -> 53%. Yeo flags AI hype pockets and concentration risk. Title of 2025 article: "GIC ups US equities allocation despite valuation worries".
3. Credit: no GIC credit statement obtained (GAP). Fixed income share fell 32% -> 26% -> 22%.
4. Real estate: Real assets 22-23% stable. 2025 deals in Canadian apartments (InterRent). 2026 activity in Japan (buy 16 hotels US$1.26bn; sell Tokyo office US$1.4bn and data centres US$1.2bn), UK hospitals, Europe retail sale-leaseback, Korea rental housing, US data centres for Anthropic. Sector pattern in headlines: living/rental, hotels, healthcare, data centres.
5. US-China/geopolitics/Taiwan: only general. Taiwan-specific GIC statement: none found (GAP).
   - [R2] The report states the US and China operate in "separate and competing spheres" and that tariffs create "regime uncertainty unseen in decades". On Taiwan, the TSMC register shows the "Government of Singapore" account fell from 2.63% to 2.08% between the 2024 and 2025 record dates (1B). GIC has made no Taiwan statement; the word does not appear in the report.
9b. [R2] Dollar/gold: no explicit US dollar view in the report. On gold: GIC built exposure as a "structural diversifier", and the report notes gold at >US$5,000/oz in early 2026 (1B). The report also says it is reassessing "the role of sovereign bonds as risk diversifiers".
6. China: 2025 report "renewed optimism around China's technology and AI advances"; APAC share 28% -> 24% -> 22%.
7. Japan: active in 2026 (above). No Japan % available.
8. Europe/UK: EMEA 20% -> 20% -> 19%; Techem (EUR6.7bn), UK hospitals, Carrefour.
9. Dollar/gold: none obtained (GAP).
10. Crisis risk: "unprecedented uncertainty"; diversification and "less risk" taken (Lim).
11. Where they deploy: Americas, hedge funds (+US$30bn over 3 years), AI value chain, private markets.

### E. Chart-ready data (GIC, % of portfolio at end-March)
| Year-end | Equities | Fixed income | Real assets | Americas | APAC | EMEA | Global/other | Source |
|---|---|---|---|---|---|---|---|---|
| Mar-2024 | 46 | 32 (implied) | 22 | 44 | 28 | 20 | n/a | mingtiandi ?p=429560 and top1000funds (prior-year values) |
| Mar-2025 | 51 | 26 | 23 | 49 | 24 | 20 | 7 | mingtiandi ?p=429560; top1000funds |
| Mar-2026 | 56 | 22 | 22 | 53 | 22 | 19 | 6 | [R2] GIC Report 2025/26 Tables 2-3 p.14 + report.gic.com.sg data.json (PRIMARY); earlier: caproasia, kfgo Reuters |
Note: Mar-2024 FI and "Global" are not directly stated; the FY25 equity +5 and FI -6 deltas imply 46 and 32; rows sum to 100 for 2025 and 2026 (2025: 51+26+23=100; geo 49+24+20+7=100; 2026: 56+22+22=100; geo 53+19+22+6=100).

20-year annualised real return series: 2020: 2.7; FY23/24: 3.9; FY24/25: 3.8; FY25/26: 3.4 (sources above).

### F. Gaps
- Official GIC asset/geo % read from text (page is image-rendered). Japan/China/US stand-alone %.
  - [R2] Closed for the asset and geographic mix: verified from the report PDF and data.json. Japan, China, US and Taiwan stand-alone %: GIC does not publish them, and the 2025/26 report has only Americas/EMEA/APAC/Global (still a GAP; cannot be filled from GIC disclosures).
- GIC real estate allocation %, real estate return, sector/geo split of real assets.
- Verbatim from chief economist (Jeffrey Jaensubhakij is not CIO; the report's economist quotes not obtained).
- Taiwan-specific, credit, gold/dollar statements.
  - [R2] Gold statements and the fiscal/bond outlook were obtained (1B, 1C). Taiwan: only the TSMC register entry, and attributing that account to GIC is [INFERRED]. An explicit USD view and a Taiwan statement are still missing.
- [R2] Bryan Yeo outlook beyond the Reuters 24 Jul 2026 quotes: the July 2026 press-briefing Q&A in Straits Times / Business Times was not opened (paywall). [UNVERIFIED]
- [R2] GIC Private Ltd (SEC CIK 936828): its recent EDGAR filings are Schedule 13G/13D and Forms 3/4/144, with no 13F-HR among them (https://data.sec.gov/submissions/CIK0000936828.json, opened 2026-11-08). No 13F route exists to see GIC's US-listed holdings, TSMC ADRs included.

---

## 2. Temasek

### A. Status
- Temasek Review 2026 (as at 31 Mar 2026): NPV S$518bn (US$401bn), +S$49bn y/y, +S$256bn over 10 years. Chairman Teo Chee Hean, CEO Dilhan Pillay, CIO Rohit Sipahimalani (Temasek International). https://www.temasek.com.sg/en/news-and-resources/news-room/news/2026/temasek-net-portfolio-value-grows-to-518b-up-49b-from-last-year [OPENED]; https://www.temasekreview.com.sg/downloads/Temasek-Review-2026-Highlights.pdf [OPENED]
- Temasek Review 2025 (31 Mar 2025): NPV S$434bn (US$339bn), +12% y/y; 10-yr TSR 5% per Reuters. https://my.tradingview.com/news/reuters.com%2C2025%3Anewsml_L4N3T40BF%3A0-singapore-s-temasek-waves-timely-buy-america-flag [OPENED]

### B. ACTIONS
- TSR FY2026 (S$ MTM): 1-yr 10.5% (US$ 14.8%; constant-currency 12.9%); 5-yr 4.6%; 10-yr 7.1%; 20-yr 6.8%. Stronger S$ trimmed 1-yr TSR by ~2pts. https://www.temasekreview.com.sg/downloads/Temasek-Review-2026-Highlights.pdf [OPENED]; Temasek news release URL above [OPENED]
- Investment/divestment: FY26 invested S$51bn, divested S$31bn, net S$20bn. FY25: invested S$52bn, divested S$42bn, net S$10bn (reversing prior-year net divestment of S$7bn). https://www.temasek.com.sg/en/news-and-resources/news-room/news/2026/temasek-net-portfolio-value-grows-to-518b-up-49b-from-last-year [OPENED]; https://www.business-standard.com/markets/news/temasek-raises-india-bets-trims-china-exposure-amid-geopolitical-risks-125070900558_1.html [SECONDARY, opened]
- China: underlying exposure rose S$10bn (US$7.7bn) in FY26, described as the largest annual increase in five years (DealStreetAsia/Caixin headlines); China is 17% of portfolio at Mar-2026, down from 18% in 2025, a decade low, vs 24% a decade ago; investments in China grew by S$24bn over a decade. https://www.top1000funds.com/news/temasek-lifts-china-exposure-by-7-7b-commits-to-doubling-ai-bet/ [OPENED]; https://www.dealstreetasia.com/stories/temasek-china-exposure-489261 [OPENED, headline only, paywall]
- US: 26% at Mar-2026 vs 24% prior year (Americas/US per parsers.vc and top1000funds); Reuters 2025: Americas the only region where exposure grew y/y, largest destination of new capital, 24% of underlying portfolio, 33% of international portfolio; MSCI ACWI is 64% US; Temasek China 18% was ~6x MSCI weight. https://my.tradingview.com/news/reuters.com%2C2025%3Anewsml_L4N3T40BF%3A0-singapore-s-temasek-waves-timely-buy-america-flag [OPENED]; https://parsers.vc/news/260714-temasek-achieves-record-portfolio-value/ [OPENED, SECONDARY]
- India: 8% FY25 (7% FY24, 6% FY23); about 7% FY26 per parsers.vc/inferred table. FY26 divestment included S$8.18bn stake sale in Schneider Electric India. Named FY26 deals: Anthropic and OpenAI (US), ANE and Luckin Coffee (China), Zegna (Europe). ST Telemedia Global Data Centres: remaining 82% sold to KKR and Singtel for S$6.6bn (Feb 2026). https://www.temasekreview.com.sg/downloads/Temasek-Review-2026-Media-Release.pdf [OPENED]; https://parsers.vc/news/260714-temasek-achieves-record-portfolio-value/ [OPENED]
- Thematic targets FY2026 (share of portfolio -> FY2031 target): AI-related 6% -> up to 15%; core-plus infrastructure 1% -> 5%; private credit 2% -> 5%. Aranda Principal Strategies >S$13bn. Sustainable Living: S$5bn invested in year. Temasek Review 2026 Media Release PDF above [OPENED]; Temasek news release [OPENED]
- Segments: TPCs 43%, GDIs 38% (63% listed/37% unlisted), PFAs 19%; roughly 40-40-20 since 2018. Media Release PDF [OPENED]
- Events: Middle East conflict cut NPV ~2% in final month of FY26. Media Release PDF [OPENED]; STI up >23% over period (parsers.vc).
- [R2] FY26 figures re-confirmed via a Bernama wire story (New Straits Times, 8 Jul 2026, 6:07pm): NPV S$518bn (+S$49bn); invested S$51bn, divested S$31bn, net S$20bn; TSR 1-yr 10.5%, 5-yr 4.6%, 10-yr 7.1%, 20-yr 6.8%. The 5-yr figure is attributed to China capital-market headwinds over 2021-2024. The "events in West Asia" caused a 2% NPV drawdown in the final month. https://www.nst.com.my/amp/business/corporate/2026/07/1483678/singapores-temasek-reports-higher-net-portfolio-value-s518bil [OPENED via WebFetch summary]
- [R2] US-listed holdings (13F, which covers US-listed securities only). Temasek Holdings (CIK 1021944) 13F-HR: 146 positions totalling US$31.57bn at 31 Dec 2025, and 190 positions totalling US$36.70bn at 30 Sep 2026. Neither filing includes a TSMC ADR. https://www.sec.gov/Archives/edgar/data/1021944/000110465926015596/infotable.xml ; https://www.sec.gov/Archives/edgar/data/1021944/000102194426000015/form13f_infotable.xml [OPENED]. Taiwan-listed holdings are not visible in 13F.
- [R2] Taiwan: no public record found of a Temasek Taiwan investment or statement for 2025-2026. This means "publicly found nothing", not "does not exist". A search on 2026-11-08 returned only third-party items, e.g. a Taiwanese report on Temasek's Q2 2026 13F (US$37.3bn) https://www.moneyweekly.com.tw/_Article?AID=243407 [not opened].

### C. WORDS
- Dilhan Pillay, Jul 2026: "In today's complex operating environment, clarity of purpose matters more than ever."; "We must think across systems, not silos, be thoughtful about risk, and act with conviction where we see opportunity." Temasek news release URL above [OPENED]
- Pillay on China, Jul 2026: "We remain committed to investing in China, and continue to invest in the promising areas"; China reflation "remains uneven and not yet broad-based"; "Our China portfolio has delivered resilient long-term performance over the past two decades". https://www.top1000funds.com/news/temasek-lifts-china-exposure-by-7-7b-commits-to-doubling-ai-bet/ [OPENED, as quoted by the article]
- Temasek, Jul 2026: "We will stay watchful of valuations and risks (macro, credit, and portfolio)"; "We aim to increase our private credit". Same URL [OPENED]
- Teo Chee Hean, Jul 2026: "The world today is defined by a complex interplay of geopolitical upheavals, rapid technological breakthroughs," (sentence truncated in extraction); "This calls for a carefully considered and more disciplined approach to investment". Temasek news release; mothership.sg https://mothership.sg/2026/07/temasek-review-2026/ [OPENED]
- Teo, Review 2025 foreword (reproduced on the 2026 page): "2025 marked an important turning point for the global order." Media release/Highlights PDF [OPENED]. Also "Temasek is not state-directed." Highlights PDF.
- Teo, Business Times 3 Jun 2026 [PARA via pulse.bot]: AI interest extends beyond LLM developers; geopolitics now influences allocations across US, Europe, India, China; verbatim: "We look for companies who can create value, and disrupt others." https://www.pulse.bot/ai/video/for-temasek-ai-not-just-llm-companies-teo-chee-hean-b70ee803-613b-4ab4-bc89-b5bcfa3646ab/ [OPENED, aggregator]
- Rohit Sipahimalani, Jul 2025: "Our direct investments in markets like China, the US, and India contributed to the uplift in our net portfolio value"; "We will continue to actively invest in our key markets while also exploring new markets of scale". Business Standard link above [SECONDARY]
- Temasek (Reuters Jul 2025, paraphrase): believes short-term US policy risks around immigration, tariffs, fiscal tightening "have peaked"; sets aside concern over US debt and dollar. https://my.tradingview.com/news/reuters.com%2C2025%3Anewsml_L4N3T40BF%3A0-singapore-s-temasek-waves-timely-buy-america-flag [OPENED, PARA]
- [R2] Rohit Sipahimalani, Jul 2026 (BigGo Finance, 9 Jul 2026, citing Reuters/FT 8 Jul 2026): "We expect the US weighting to increase somewhat further from current levels."; and "The AI, core infrastructure, and private credit investment opportunities we are focused on are distributed globally" (the article adds that a significant portion is in the US). The same article says Americas was 26% of the portfolio, up from about 11% in 2016, and China 17%. https://finance.biggo.com/news/8b30e5e6-22ae-4f60-82e2-fea79c4c070a [OPENED via WebFetch, SECONDARY aggregator; original outlet not identified]
- [R2] Pillay, 8 Jul 2026: Temasek had seen "a rebound in China", and the China portfolio was more concentrated in AI hardware/infrastructure, robotics, biotech and energy transition. https://www.investmentmonitor.ai/news/temasek-lifts-china-exposure-7-7bn/ [OPENED via WebFetch summary; short quote fragment only]
- [R2] Sipahimalani, Milken Institute Asia Summit, Singapore (CNBC, 7 Oct 2026):
  - "We don't see that as imminent, but will you have bumps in 2027? Yeah, possibly yes," on an AI-trade unwinding, which he called the biggest market risk.
  - The S&P 500 is supported by "AI and the earnings momentum around the key players".
  - "One of the things we recognize is that AI is such a fast-changing environment that things could change quite easily, and you have to be able to pivot".
  - About half of Temasek's AI exposure is in public assets; ideally 70-75%.
  https://www.cnbc.com/2026/10/07/singapore-temasek-warns-of-the-biggest-risk-facing-markets.html [OPENED]. Further quotes from the same event (BeInCrypto via Yahoo): "Inflation is a risk, together with what is happening in the rates environment,"; "that means there probably is a risk of some breaking point in the equity market at some point". https://finance.yahoo.com/technology/ai/articles/temasek-cio-watching-two-risks-071015714.html [OPENED via WebFetch, SECONDARY]
- [R2] Dollar and tariffs, Jul 2026 briefing: a search summary says Sipahimalani acknowledged the weakening US dollar added uncertainty. It also says Pillay's CEO address attributed about a 2-percentage-point drawdown in returns to currency movements. Both primary pages (https://www.temasek.com.sg/en/news-and-resources/news-room/speeches/2026/temasek-review-2026-faq ; https://www.temasekreview.com.sg/downloads/Temasek-Review-2026-CEO-Address-Transcript.pdf) returned 403, so verbatim wording is [UNVERIFIED]. The ~2pt currency drag itself matches the Highlights PDF figure already in 2B. No 2026 Temasek tariff quote found.

### D. Themes
1. Rates/inflation: no Temasek-specific statement obtained (GAP).
2. US/AI: AI 6% -> up to 15% by FY2031 (five value-chain areas); Anthropic/OpenAI investments; US 24% -> 26%. DealStreetAsia sidebar: "value capture lies in the remaining 85%".
3. Credit: private credit 2% -> 5% by FY2031; "watchful ... credit".
4. Real estate: Temasek's "Consumer & Real Estate" sector = 7% of underlying exposure FY26 [INFERRED mapping, Highlights PDF]. No RE strategy statement (GAP); see CLI section.
5. US-China/geopolitics/Taiwan: Teo "geopolitical upheavals"; "turning point for the global order"; Middle East event -2% NPV. Taiwan-specific: none found (GAP).
6. China: absolute exposure +S$10bn (highest in 5 yrs) but share 24% (decade ago) -> 22% (FY23) -> 19% (FY24) -> 18% (FY25) -> 17% (FY26). Rationale per headline: undervalued equities, life sciences, AI.
7. Japan: not reported as a standalone market (GAP).
8. Europe: EMEA ~12%; Zegna investment; offices in Brussels, London, Paris.
9. Dollar/gold: none (GAP).
   - [R2] Stronger S$ cut the 1-yr TSR by ~2pts (Highlights PDF, 2B). The verbatim USD remark from the Jul 2026 briefing is [UNVERIFIED] (403). Taiwan: Temasek's 13F (Dec 2025, Sep 2026) shows no TSMC ADR, and no Taiwan investment or statement was found publicly (2B).
10. Crisis risk: "stay watchful of valuations and risks".
   - [R2] Oct 2026: Sipahimalani names an AI-trade unwind as the "biggest risk", plus inflation/rates and a "breaking point in the equity market" (2C).
11. Where they deploy: US (about half of annual GDI capital per parsers.vc, SECONDARY), China, India, Europe; AI, private credit, core-plus infra.

### E. Chart-ready data: Temasek underlying exposure by geography (% of portfolio, end-March)
| Region | FY2023 | FY2024 | FY2025 | FY2026 |
|---|---|---|---|---|
| Singapore | n/a | n/a | 27 | 27 [INFERRED] |
| China | 22 | 19 | 18 | 17 |
| India | 6 | 7 | 8 | 7 [INFERRED] |
| Rest of APAC | n/a | n/a | 11 | 11 [INFERRED] |
| Americas | n/a | n/a | 24 | 26 |
| EMEA | n/a | n/a | 12 | 12 [INFERRED] |
[R2] Label check for FY2026: top1000funds labels the 26% as "US", while BigGo (citing Reuters/FT) and Reuters 2025 use "Americas". A search summary of the S&P rating report (7 Sep 2026, on temasek.com.sg, 403 to me) gives Singapore 27, Americas 26, China 17, EMEA 12, Asia Pacific ex-SG/CN/IN 11, India 7. That matches the [INFERRED] mapping below, but the report itself was not opened, so the mapping stays [INFERRED/UNVERIFIED]. Primary sites were blocked by 403 on 2026-11-08 (see the data-quality notes at top).
Sources: FY2023-FY2025 China and India, plus FY2025 full split: https://www.business-standard.com/markets/news/temasek-raises-india-bets-trims-china-exposure-amid-geopolitical-risks-125070900558_1.html [SECONDARY, opened]; FY2025 Americas 24% also in Reuters (tradingview link) [OPENED]. FY2026: top1000funds states Singapore 27%, US 26%, China 17%, India (7% from parsers.vc) https://www.top1000funds.com/news/temasek-lifts-china-exposure-by-7-7b-commits-to-doubling-ai-bet/ ; https://parsers.vc/news/260714-temasek-achieves-record-portfolio-value/ . Temasek's own FY2026 PDFs gave values 17, 11, 26, 12, 7, 27 (sum 100) without usable labels; the label mapping above is reconstructed to match the two articles, hence [INFERRED] for rest of APAC and EMEA. Official Temasek 2026 PDF: https://www.temasekreview.com.sg/downloads/Temasek-Review-2026-Highlights.pdf. Also stated: HQ-based split Singapore 52%, Americas 22%, China 10%, EMEA 10%, India 4%, APAC 2% (Highlights PDF, mapping [INFERRED]).
Other series: NPV S$bn FY25 434; FY26 518. Net investment S$bn: FY24 -7; FY25 +10; FY26 +20 (sources above).
Earlier-year (FY2016-FY2022) series not collected.

### F. Gaps
- Official labelled FY26 geography table and FY24 full split; Japan %.
  - [R2] Still open. Temasek primary sites returned 403 Access Denied on 2026-11-08 across 5 paths, not bypassed. Secondary sources agree on SG 27 / Americas-or-US 26 / China 17; EMEA 12, APAC 11 and India 7 come only from a search summary [UNVERIFIED]. Japan is not reported separately (it falls inside APAC ex-SG/CN/IN).
- Pillay/Teo verbatim on US-China, tariffs, AI beyond targets, Taiwan.
  - [R2] Partly filled: Sipahimalani on the US weighting (aggregator) and on AI/inflation risks (CNBC, Oct 2026); Pillay's "a rebound in China" fragment. Still missing: verbatim 2026 tariff and dollar statements (the FAQ and CEO transcript are blocked by 403), and anything on Taiwan (none found publicly).
- Press conference Q&A (Reuters/Bloomberg/ST) not opened.
  - [R2] Still not opened. The Bloomberg video of 8 Jul 2026 "Temasek CIO on AI Capex and Geopolitical Risks" exists (https://www.bloomberg.com/news/videos/2026-07-08/temasek-cio-on-ai-capex-and-geopolitical-risks-video), but it is video with a teaser only. Breakingviews 9 Jul 2026 returned 401.
- Temasek "reduce China, raise US/India": only share data above; the two headline items conflict in direction (absolute +S$10bn, share -1pt).

---

## 3. CapitaLand Investment (CLI)

### A. Status
- Singapore-listed, Temasek-linked real estate investment manager; asset-light fund management pivot. FY2025 (Dec 2025): FUM S$125bn (+7% from S$117bn); 1H2026: FUM S$128bn (listed S$79bn, private S$49bn). https://www.capitaland.com/en/about-capitaland/newsroom/news-releases/international/2026/february/capitaland-investment-posts-improved-fy-2025-operating-patmi-of-.html [OPENED]; https://links.sgx.com/1.0.0/corporate-announcements/IHEHRDUKOSE5QYVL/900705_CLI%201H%202026%20Financial%20Results%20Presentation.pdf [OPENED]

### B. ACTIONS
- FY2025 (11 Feb 2026): Operating PATMI S$539m (+6%); total PATMI S$145m (-70%); portfolio gains S$45m (FY24 S$230m); revaluation/impairments -S$439m (FY24 -S$261m), tied to China. Equity raised S$6.5bn (private S$4.9bn, listed S$1.6bn), almost double prior year. Divestments S$3.1bn (FY24 S$5.5bn). Fee revenue S$1.23bn (+6%). Net debt/equity 0.43x; debt headroom ~S$6.4bn. Same CapitaLand release [OPENED]; https://www.edgeprop.sg/property-news/capitaland-investment-grows-funds-under-management-125-bil-fy2025-accelerate-capital-recycling-2026 [OPENED]
- 1H2026: total PATMI S$327m (+14%), operating PATMI S$293m (+13%); capital raised S$3.7bn (+42%); gross divestments YTD ~S$5.0bn; plan to unlock S$7-9bn embedded value from non-core/legacy; China NPI -4.8% y/y; "China remains under pressure". 1H2026 presentation PDF [OPENED]
- Private funds by geography (1H2026, S$bn): China 23 (~47% of private funds), Southeast Asia 9 (~18%), Australia/Japan/Korea 13 (~27%), India 3 (~6%), non-Asia 1 (~2%). Same PDF [OPENED]
- Nov 2024 plan: China was 27% of FUM (of S$113bn at the time); expected to fall to 10-20% by 2028; Australia+Japan+Korea share to rise from 18% to 25-35% by 2028; up to A$1bn (US$650m) committed to grow Australian FUM (AUM >A$9bn); Japan: S$280m for 40% of SC Capital Partners (Japan FUM S$2.9bn -> S$11bn, 3% -> 10% of portfolio; full ownership targeted by 2030); China return on equity -8% in 2023. https://www.mingtiandi.com/real-estate/finance/capitaland-sets-650m-target-for-australia-amid-china-retreat/ [OPENED, 23 Nov 2024]
- India: CLI targets more than double investments in India by 2028 (headline only, not opened): https://alfi.dev.theedgesingapore.com/news/india/capitaland-investment-targets-more-double-investments-india-2028
- Bloomberg 10 Feb 2026 headline: "Temasek-Backed CapitaLand's Profit Dives 70% on China Woes"; shares -3.5%; net income S$145m vs analyst average S$663m. https://www.bloomberg.com/news/articles/2026-02-10/china-woes-lead-to-plunge-in-singapore-capitaland-s-profit [OPENED]

### C. WORDS
- Lee Chee Koon, Group CEO, 11 Feb 2026: "We will sharpen our portfolio through accelerating divestments and redeployment"; "balancing pace and pricing to enhance earnings quality and resilience"; "Where it is value-accretive and commercially viable, we will leverage our debt headroom"; "a scaled, asset-light investment manager with a recurring fee-led model". CapitaLand release; edgeprop link [OPENED]
- CLI outlook: "CLI will push ahead to accelerate capital recycling, including evaluating portfolio and structural solutions". CapitaLand release [OPENED]
- Andrew Lim, COO, Nov 2024 on Australia: "huge potential for both organic and inorganic growth." mingtiandi link [OPENED]
- Mingtiandi paraphrase (Nov 2024): shifting away from "loss-making real estate bets in China".

### D. Themes
4. Real estate by region: China shrinking in FUM share plan (27% -> 10-20% by 2028 target) but still 47% of private funds in 1H2026; growth in Australia/Japan/Korea/India; capital recycling emphasis.
6. China: continuing revaluation losses (-S$439m FY25), NPI -4.8% y/y.
7. Japan: SC Capital stake, Japan FUM target S$11bn.
Other themes (rates etc.): not collected for CLI.

### E. Chart-ready: CLI FUM (S$bn): FY2024 117; FY2025 125; 1H2026 128 (sources above). China share of FUM: 27% at mid-2024 (Nov 2024 article); target 10-20% by 2028. China as % of total FUM at 1H2026 not found (private funds only: 23/49).

### F. Gaps
- China % of total FUM at end-2025/1H2026; Japan/Australia/India FUM actuals; FY2025 annual report not opened; 2028 targets restated in 2026 not found.

---

## 4. Norway NBIM (Government Pension Fund Global)

### A. Status
- Fund value 30 Jun 2026: NOK 22,683bn (~US$2.1-2.3tn). Equities 72.1%, fixed income 25.8%, unlisted real estate 1.6%, unlisted renewable infrastructure 0.5%. CEO Nicolai Tangen. https://www.nbim.no/en/news-and-insights/the-press/press-releases/2026/record-high-krone-return-in-the-first-half-of-the-year/ [OPENED]
- [R2] Half-year report 2026, Table 9.1: market value of the investment portfolio at 30 Jun 2026 was NOK 22,695,173m (31 Dec 2025: NOK 21,286,167m), with equities 72.08%, bonds 25.82%, unlisted RE 1.64% and unlisted infrastructure 0.46%. These differ slightly from the press-release fund value (NOK 22,683bn) because of the definition: investment portfolio vs fund. https://www.nbim.no/contentassets/a8fb1a4dce644702a611d3469ccf6ba6/gpfg_half-year-report-2026_web.pdf p.36 [OPENED]

### B. ACTIONS
- 2025 annual: return 15.1%; equities 19.3%, fixed income 5.4%, unlisted RE 4.4%, unlisted renewables 18.1%; 0.28pt below benchmark; accounting return NOK 2,362bn; stronger krone cut value NOK 1,155bn; net inflow NOK 319bn; fund NOK 21,268bn at 31 Dec 2025. Allocation 31 Dec 2025: equities 71.3%, FI 26.5%, RE 1.7%, renewables 0.4%. https://www.nbim.no/en/news-and-insights/the-press/press-releases/2026/strong-return-in-2025/ [OPENED]
- H1 2026 (12 Aug 2026): return 9.4% (record half-year in kroner), NOK 1,753bn; +0.22pt vs benchmark; equities 13.0%, FI 0.9%, unlisted RE 3.0%, renewables -0.2%; krone cut value NOK 427bn; net inflow NOK 89bn. Q1 2026 was a loss of 1.9% (European Pensions). Equity leaders: telecom, technology, energy; weakest: consumer discretionary, health care, staples. Largest government bond holdings: US, Japan, Germany. RE gains: US office and logistics contributed most. https://www.nbim.no/en/news-and-insights/reports/2026/half-year-report-2026 [OPENED]; https://europeanpensions.net/ep/Norways-GPFG-experiences-record-high-9-4-return-in-H1-2026.php [OPENED]
- [R2] Q3 2026 (press release, 22 Oct 2026):
  - Fund return -0.5%: equities 0.5%, fixed income -3.5%, unlisted RE 0.4%, unlisted renewables 7.5%; 0.18pt below benchmark.
  - Value fell NOK 670bn: accounting return -NOK 278bn, krone strength -NOK 472bn, inflow +NOK 80bn.
  - Fund value NOK 22,014bn at 30 Sep 2026: equities 72.1%, FI 25.8%, RE 1.6%, renewables 0.5%.
  - Deputy CEO Trond Grande: "The fund's return was close to flat, ending slightly negative as rising interest rates led to weaker results on our fixed-income investments. Equity returns were also close to zero, but there were large differences between sectors. Energy companies rose the most, while interest-rate-sensitive sectors such as utilities and real estate fell".
  https://www.nbim.no/en/news-and-insights/the-press/press-releases/2026/negative-return-in-the-third-quarter/ [OPENED]
- Real estate: NOK 372bn (US$39bn), 1.7% of fund end-2025; infrastructure NOK 60bn, 0.4%, target 1% by 2030; RE subtracted 0.46pt of relative return in 2025; main contributor to three consecutive years of negative relative returns; US office poor performer. New "2028 strategy" (announced Dec 2025): move from selected-cities approach to sector allocation; ranges office/retail/logistics/living 15-35% each, other emerging sectors (e.g. data centres) 10-25%; more use of indirect structures; funding to reflect asset risk rather than fixed equity/bond split; North America and Europe keep largest geographic share. Mandate caps: up to 7% unlisted RE (2010), up to 2% renewable infrastructure (2019). https://www.top1000funds.com/2026/05/nbim-lays-out-case-for-real-estate-turnaround/ [OPENED, article undated, parliamentary hearing]
- Concentration: largest 10 holdings "nearly" 25% of fund (Tangen, Aug 2026); fund owns almost 1.5% of global listed shares. https://www.fortune.com/2026/08/12/norway-oil-fund-ceo-says-hes-more-nervous-after-record-returns/ [OPENED]
- Paperjam (Nov 2026 piece on 12 Aug 2026 interview) [SECONDARY, PARA]: fund is reviewing portfolio to reduce heavy concentration in US and AI sector; Tangen sees AI as strongly deflationary long-term. https://www.paperjam.lu/article/nbim-le-plus-grand-fonds-souverain-au-monde-se-prepare-au-pire [OPENED, treat cautiously]
- China (H1 2024): China holdings rose by US$4bn to NOK385bn (~US$34bn); closed Shanghai office in Sep 2023 (8 staff). 2024 Mayfair: partnered with Grosvenor on 175 properties. https://fortune.com/europe/2025/01/22/ceo-nicolai-tangen-norway-wealth-fund-owns-173-billion-magnificent-7-tells-investors-sell-us-tech-stocks [OPENED]
- Magnificent Seven holdings: NOK1.9tn (~US$173bn) at Jun 2024 (same source).
- [R2] Equity allocation by country, official (% of equity investments; does not sum to 100 because cash and derivatives are excluded):
  - 31 Dec 2024: US 54.7, Japan 6.6, UK 5.2, China 3.3, India 2.5, Taiwan 2.5.
  - 31 Dec 2025: US 53.6, Japan 6.4, UK 4.8, Germany 3.3, Switzerland 3.2, China 3.6, Taiwan 2.7, India 2.1.
  - 30 Jun 2026: US 52.9, Japan 6.8, UK 4.4, South Korea 4.1, Switzerland 2.9, Taiwan 3.9, China 2.9, India 1.7. Emerging markets total 10.8 (vs 11.0 at end-2025).
  Sources: Annual report 2025 (Table "Allocation by asset class, country and currency", pdf p.110) https://www.nbim.no/contentassets/6db259ec684645ebbf171cacbe7cc7de/annual-report-2025.pdf ; Half-year report 2026 Table 9.1 p.36 (URL above) [OPENED]
- [R2] Ten largest country holdings as % of the whole fund, 31 Dec 2025 (Annual report 2025, Table 2, pdf p.16) [OPENED]:
  - US 52.9 (equity 38.8, FI 13.4, unlisted RE 0.74)
  - Japan 6.0 (equity 4.5, FI 1.4, RE 0.04)
  - UK 5.5
  - Germany 4.5
  - France 3.4
  - Canada 3.3
  - Switzerland 2.6
  - China 2.5 (all equity)
  - Netherlands 2.0
  - Taiwan 1.9 (all equity)
- [R2] Equity return by country in 2025, in international currency / local currency, with share of equity (Annual report 2025, pdf p.24) [OPENED]:
  - US 11.9 / 16.0, share 54.7
  - Japan 20.4 / 24.5, share 6.4
  - China 28.5 / 27.6, share 3.6
  - Taiwan 37.3 / 36.5, share 2.7
  - India -1.4 / 7.3, share 2.1
  The report states: "Among the countries in which the fund invested, equities in South Korea, the UK and Taiwan contributed most positively, while investments in Germany and the US contributed most negatively" (relative return, p.45/47).
- [R2] Equity return by region in H1 2026 (Half-year report 2026 Table 4, p.8) [OPENED]:
  - North America 10.8%, share of equity 57.0
  - Europe 8.4%, share 20.1
  - Asia and Oceania 31.3%, share 12.9
  - Emerging markets 12.6%, share 10.5
- [R2] TSMC (Taiwan Semiconductor Manufacturing Co Ltd, TWSE 2330), from the NBIM holdings data [OPENED, API JSON behind https://www.nbim.no/en/investments/all-investments/]. Ownership % is as given by NBIM; "% of fund" is my calculation (holding NOK / fund value NOK) [INFERRED arithmetic].
  - 31 Dec 2024: US$15.37bn (NOK 174.5bn); ownership 1.80%; 8th-largest equity holding.
  - 31 Dec 2025: US$22.69bn (NOK 228,828m); ownership 1.77%; 6th-largest equity holding, behind NVIDIA, Apple, Microsoft, Alphabet and Amazon. ≈1.08% of the fund (NOK 21,268bn) and ≈56% of NBIM's Taiwan equity value. The annual report's largest-holdings table (pdf p.112) confirms NOK 228,828m in equities, no bonds.
  - 30 Jun 2026: US$33.53bn (NOK 331.8bn); ownership 1.70%; 5th-largest equity holding. ≈1.46% of the fund (NOK 22,683bn) and ≈54% of NBIM's Taiwan equity value.
  - Cross-check from the TSMC 2025 Annual Report, Major Shareholders (as of 17 Dec 2025): "Norges Bank" 470,454,846 common shares, 1.81%, the 4th-largest common shareholder. https://investor.tsmc.com/static/annualReports/2025/english/pdf/2025_tsmc_ar_e_ch4.pdf [OPENED]
- [R2] Taiwan equity totals, summed from the NBIM holdings file by NBIM country code "TW" [computed from primary data]:
  - 31 Dec 2024: US$30.7bn; 508 companies.
  - 31 Dec 2025: US$40.3bn (NOK 407bn); 339 companies. Official share: 2.7% of equities, 1.9% of the fund.
  - 30 Jun 2026: US$61.9bn (NOK 613bn); 333 companies. Official share: 3.9% of equities, ≈2.8% of the fund by my calculation (3.9% × 72.08%).
  - No Taiwan fixed income (US$0). Other large TW names at 30 Jun 2026: MediaTek US$3.18bn (1.49%), Delta Electronics US$1.76bn, Hon Hai US$1.22bn, Yageo US$1.12bn.
- [R2] Japan and China in the holdings file, US$, by NBIM country code [computed from primary data]:
  - Japan equities: US$84.1bn (2024), US$96.2bn (2025), US$111.0bn (H1 2026); 1,096 companies at end-2025. Largest at 30 Jun 2026: MUFG US$3.91bn, Kioxia US$3.77bn, Tokyo Electron US$3.32bn, Toyota US$3.05bn.
  - Government of Japan bonds: NOK 275bn (2024), NOK 267bn (2025), NOK 252bn (H1 2026).
  - China equities (code CN, includes HK-listed Chinese companies such as Tencent): US$40.7bn (2024), US$53.9bn (2025), US$47.1bn (H1 2026); 638 companies at end-2025. Largest at end-2025: Tencent US$9.44bn (1.35%), Alibaba US$7.25bn (2.07%). China fixed income is negligible (NOK ~1bn).
  - Note: the holdings-file per-country sums differ slightly from the official tables because the official % include or exclude cash/derivatives differently. Use the official tables for shares; the file is good for names and trends.
  - Raw data: scratchpad/09/d4/*.json; script scratchpad/scripts/nbim09.py.

### C. WORDS
- Tangen, 12 Aug 2026 (press release): "The result is driven by good returns in the equity market, particularly from Asian technology stocks." NBIM press release [OPENED]
- Tangen, 12 Aug 2026 (Bloomberg TV via Fortune): "as good as it gets"; "Of course, after a rally like that, you are a bit more nervous, a bit more conscious about all the dangers out there,"; "We are seeing a lot of reasons to be really cautious."; "We are seeing, you know, AI valuations. We are seeing geopolitics."; "we've never seen a concentration risk like that." Fortune link [OPENED]
- Tangen, Jan 2026: "The fund delivered very strong results in 2025."; "Stocks in technology, financials and basic materials stood out, making a significant contribution to the overall return". 2025 press release [OPENED]
- Tangen on real estate (parliamentary hearing, 2026): fund is "not satisfied" with real estate performance; "we will in future allocate based on sectors – such as offices, logistics and data centres."; "I am confident that through these measures we will reverse the negative trend we have seen in recent years." top1000funds RE link [OPENED]
- Tangen, 22 Jan 2025 (Davos via Bloomberg): "The best thing to do is always to do the opposite of everybody else"; "it would be to sell the US tech stocks, buy China, sell private credit". Fortune link [OPENED]
- Tangen, Nov 2024 (FT Unhedged): "The concentration is absolutely worrying. It means that there is a risk in the stock market" [OPENED via Fortune]
- Bloomberg 18 Mar 2026 (headline "Norway's wealth fund warns of AI bubble and geopolitical risks"): AI bubble scenario could cut value by 35%; worst-case geopolitical scenario (investment restrictions, heavy tariffs) up to 37%; fund ~US$2.1tn; article text attributes: "The convergence of an AI bubble and geopolitical risks pose the greatest threat to global markets." https://www.bloomberg.com/news/articles/2026-03-18/norway-s-wealth-fund-warns-of-ai-bubble-and-geopolitical-risks [OPENED, paywall partial; that quote is attributed, not verbatim from Tangen]
- Paperjam (French, Aug 2026 interview) [PARA/translated]: "Aucune richesse nationale n'a jamais duré éternellement"; global debt "véritable source d'inquiétude"; rally could be "le summum".
- [R2] Tangen, CEO letter, Annual report 2025 (dated Oslo, 27 Feb 2026, pdf p.12-13), verbatim [OPENED]:
  - "We live in turbulent and unpredictable times."
  - "if we had correctly predicted everything that happened in 2025, with its constant turmoil and surprises, we would all have believed that the international markets would fall significantly. Instead, they rose steadily throughout 2025"
  - "For equity investments, the US technology companies again contributed the most, but financials also had a good year. Despite increases in US tariffs, the total return on fixed income investments was positive."
  https://www.nbim.no/contentassets/6db259ec684645ebbf171cacbe7cc7de/annual-report-2025.pdf
- [R2] NBIM stress-test scenario text, Annual report 2025 (pdf p.41-42): "Fragmented world: The world fragments into multiple economic blocs. A more challenging geopolitical climate leads to extensive tariff barriers and widespread countermeasures. At the same time, regulations and restrictions on foreign investments increase." Also: "AI correction: … If these investments do not yield the expected productivity gains, this could trigger a sharp correction in the stock market". Same PDF [OPENED]. A Bloomberg Opinion column cites the end-2025 stress test: a fragmented world would cut ~49% off the equity portfolio and 37% off total value.
- [R2] Tangen, Bloomberg Opinion interview in Paris (The Star, 20 Mar 2026): "Stability is unstable."; "We love Europe... But it's true growth is lower and innovation is lower than the United States." The columnist paraphrases his two dominant negative scenarios as a return of inflation (Strait of Hormuz, oil >US$100) and geopolitical fragmentation, with trade ties "already eroded by President Donald Trump's tariffs". That tariff wording is the columnist's, not a Tangen quote. https://www.thestar.com.my/business/insight/2026/03/20/norways-giant-fund-sounds-a-warning-on-iran [OPENED]
- [R2] Tangen, Davos, Jan 2025 (CNBC via NBC): "I don't think I should give any advice to the U.S., but if you look at the risk to financial markets, I think inflation is for sure one, all driven by tariffs,"; "Many of the suggestions now coming out of the U.S. are potentially inflationary…"; and "purely financially," Trump's arrival would be "very positive" for many US companies. https://www.nbcmiami.com/news/business/money-report/worlds-biggest-sovereign-wealth-fund-warns-markets-at-risk-from-tariff-fueled-inflation/3521236/ [OPENED]
- [R2] Dollar, Taiwan, China 2026: no Tangen verbatim found. NBIM's only dollar-related statements are effect statements: krone strength cost NOK 1,155bn (2025) and NOK 427bn (H1 2026) (4B). [UNVERIFIED / not found]

### D. Themes
1. Rates/inflation: Tangen sees AI as long-term deflationary force (Paperjam, SECONDARY); inflation worries about debt (SECONDARY).
2. US/AI: concentration, 35% AI-bubble scenario loss.
3. Credit: Jan 2025 "sell private credit" (Davos).
4. Real estate: RE 1.6% of fund, 2028 strategy sector-based, US office worst, US office/logistics driving H1 2026 gains.
5. Geopolitics: worst-case 37% loss scenario; "We are seeing geopolitics." Taiwan: none found (GAP).
   - [R2] Taiwan holdings data (no NBIM statement on Taiwan found):
     - Taiwan share of equities: 2.5% (2024) → 2.7% (2025) → 3.9% (H1 2026).
     - Taiwan as share of the fund: 1.9% at end-2025.
     - TSMC: US$15.4bn → US$22.7bn → US$33.5bn; ownership 1.80% → 1.77% → 1.70%. The value rose while the ownership stake fell slightly.
     - Taiwan equities returned 37.3% in 2025, the highest of the listed countries (4B).
6. China: Jan 2025 "buy China"; H1 2024 +US$4bn; Shanghai office closed 2023.
   - [R2] China share of equities 3.3% (2024) → 3.6% (2025) → 2.9% (H1 2026). By H1 2026, Taiwan (3.9%) and South Korea (4.1%) were both larger than China (4B).
7. Japan: Japan among top three government bond issuers held; no more (GAP).
   - [R2] Japan: 6.6% → 6.4% → 6.8% of equities; 6.0% of the whole fund at end-2025 (equity 4.5, FI 1.4). JGB holdings fell from NOK 275bn to 252bn between end-2024 and H1 2026 (4B).
8. Europe/UK: Mayfair JV; Europe retains large RE share.
9. Dollar/gold: krone strength cost NOK 1,155bn (2025) and NOK 427bn (H1 2026); no gold statement.
10. Crisis: "as good as it gets", more nervous.
11. Where they deploy: equities 72%; Asian tech drove H1 2026; RE sector shift to logistics, living, data centres.

### E. Chart-ready: NBIM allocation (% of fund)
| Date | Equities | Fixed income | Unlisted RE | Unlisted renewables | Value NOK bn | Return (period) |
|---|---|---|---|---|---|---|
| 31 Dec 2025 | 71.3 | 26.5 | 1.7 | 0.4 | 21,268 | 15.1% (2025) |
| 30 Jun 2026 | 72.1 | 25.8 | 1.6 | 0.5 | 22,683 | 9.4% (H1 2026) |
Sources: strong-return-in-2025 and record-high-krone-return press releases above [OPENED]. Unlisted RE return by period: 2025 4.4%; H1 2026 3.0%.

[R2] Chart-ready: NBIM equity allocation by selected country, % of equity investments (official tables: Annual report 2025 p.110; Half-year report 2026 Table 9.1 p.36). "–" = not shown in that table's top list.
| Date | US | Japan | UK | South Korea | Taiwan | China | India |
|---|---|---|---|---|---|---|---|
| 31 Dec 2024 | 54.7 | 6.6 | 5.2 | – | 2.5 | 3.3 | 2.5 |
| 31 Dec 2025 | 53.6 | 6.4 | 4.8 | – | 2.7 | 3.6 | 2.1 |
| 30 Jun 2026 | 52.9 | 6.8 | 4.4 | 4.1 | 3.9 | 2.9 | 1.7 |

[R2] Chart-ready: NBIM TSMC position (NBIM holdings data; % of fund is my arithmetic)
| Date | US$ bn | NOK bn | Ownership % | Rank among equity holdings | ≈% of fund |
|---|---|---|---|---|---|
| 31 Dec 2024 | 15.37 | 174.5 | 1.80 | 8 | n/a |
| 31 Dec 2025 | 22.69 | 228.8 | 1.77 | 6 | 1.08 |
| 30 Jun 2026 | 33.53 | 331.8 | 1.70 | 5 | 1.46 |

### F. Gaps
- 2024 annual results and H1 2025 (links found: https://www.nbim.no/contentassets/4929094bc7f0436c8d311e10557f8b83/gpfg-half-year-report-2025.pdf, not opened).
- Regional equity split (US/China/Japan/Europe %), disclosed holdings list.
  - [R2] Closed: official country tables and the holdings list (end-2024, end-2025, H1 2026) were obtained (4B, 4E).
- Tangen verbatim on inflation, China 2026, Taiwan.
  - [R2] Partly filled: the 2025 CEO letter and the Mar 2026 Paris interview. Tariff-inflation is a Jan 2025 quote. No verbatim found on China 2026, Taiwan or the US dollar.
- The March 2026 stress-test article only partly readable.
  - [R2] The scenario text is now taken from Annual report 2025 p.41-42. The separate stress-test PDF (https://www.nbim.no/contentassets/c7d3b015300d48a1ac0136f069b9bed7/gpfg_stresstesting-2025.pdf) was not opened.
- [R2] Q3 2026 headline added in 4B. A Q3 country breakdown and holdings were not checked; NBIM publishes holdings only at half-year and year-end.

---

## Cross-cutting gaps
- No Taiwan-specific statement from any of the four institutions found (search 2026 returned only third-party commentary).
  - [R2] Still no statement from GIC, Temasek or NBIM; "Taiwan" does not appear in the GIC report text. Taiwan positions are now available:
    - TSMC register, 17 Dec 2025: "Government of Singapore" 2.08% (down from 2.63%; GIC attribution [INFERRED]) and Norges Bank 1.81%.
    - NBIM: Taiwan 3.9% of equities at H1 2026; TSMC US$33.5bn, its 5th-largest equity holding.
    - Temasek: no TSMC ADR in its 13F; nothing found on Taiwan locally listed holdings.
- Hits for 2026 press-conference Q&A (Reuters/ST/BT) were mostly paywalled.
