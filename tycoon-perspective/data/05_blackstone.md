# 05 — Blackstone (Stephen Schwarzman, Jon Gray): data collection

Compiled 2026-11-07. Coverage: Jan 2024 to early Nov 2026. This file holds facts only; interpretation is left to the analyst.

**How the sources were read.** Quarterly figures come from Blackstone's own earnings releases (SEC 8-K Exhibit 99.1 or the blackstone.com PDF), each opened directly. Call quotes come from third-party transcripts or summaries (Webull, Motley Fool, MarketBeat), not from Blackstone's official transcript PDFs. The fetch tool cut every verbatim quote to 125 characters or fewer, so most quotes are fragments. Wording should be checked against ir.blackstone.com before a quote is published. Items marked **[title only]** were seen only as a search-result headline and the page was not opened. Items marked **[paraphrase]** are not verbatim. [R2 更正：官方逐字稿已取得] Official transcripts were obtained in the third pass (see below), so the "not from official transcript PDFs" caveat no longer applies to quotes marked [R2 更正：官方逐字稿全文].

**Research stopped early, then partly resumed.** Both the web-search budget and the fetch quota ran out partway through. After the usage limit reset, a short second pass verified the April 2025 tariff remarks, TXNM, AirTrunk, the Pennsylvania pledge and Tokyo Garden Terrace. The checks still outstanding are listed in section F.

**[R2] Third pass, 2026-11-08.** Blackstone's official investor-call transcripts (PDFs listed on ir.blackstone.com through the Q4 events feed) were downloaded in full for every call from 4Q'23 (Jan 25, 2024) to 3Q'26 (Oct 22, 2026). Quotes in section C marked **[R2 更正：官方逐字稿全文]** now carry the full official sentence instead of the truncated third-party fragment; where the official wording differs from the earlier secondary version, the difference is stated. BREIT flows now come from BREIT's own 10-Q/10-K filings (SEC EDGAR, CIK 1662972), and deal terms from the target companies' SEC 8-K/6-K exhibits. Official transcript URLs:
- 4Q'23 (Jan 25, 2024) https://s23.q4cdn.com/714267708/files/doc_financials/2023/q4/Blackstone-Fourth-Quarter-And-Full-Year-2023-Investor-Call.pdf
- 1Q'24 (Apr 18, 2024) https://s23.q4cdn.com/714267708/files/doc_financials/2024/q1/Blackstone-First-Quarter-2024-Investor-Call.pdf
- 2Q'24 (Jul 18, 2024) https://s23.q4cdn.com/714267708/files/doc_financials/2024/q2/Blackstone-Second-Quarter-2024-Investor-Call-VF.pdf
- 3Q'24 (Oct 17, 2024) https://s23.q4cdn.com/714267708/files/doc_financials/2024/q3/Blackstone-Third-Quarter-2024-Investor-Call.pdf
- 4Q'24 (Jan 30, 2025) https://s23.q4cdn.com/714267708/files/doc_financials/2024/q4/Blackstone-Fourth-Quarter-and-Full-Year-2024-Investor-Call-VF.pdf
- 1Q'25 (Apr 17, 2025) https://s23.q4cdn.com/714267708/files/doc_financials/2025/q1/Blackstone-First-Quarter-2025-Investor-Call.pdf
- 2Q'25 (Jul 24, 2025) https://s23.q4cdn.com/714267708/files/doc_financials/2025/q2/Blackstone-Second-Quarter-2025-Investor-Call-VF.pdf
- 3Q'25 (Oct 23, 2025) https://s23.q4cdn.com/714267708/files/doc_financials/2025/q3/Blackstone-Third-Quarter-2025-Investor-Call-VF.pdf
- 4Q'25 (Jan 29, 2026) https://s23.q4cdn.com/714267708/files/doc_financials/2026/Blackstone-Fourth-Quarter-and-Full-Year-2025-Investor-Call-VF.pdf
- 1Q'26 (Apr 23, 2026) https://s23.q4cdn.com/714267708/files/doc_financials/2026/q1/Blackstone-First-Quarter-Investor-Call.pdf
- 2Q'26 (Jul 23, 2026) https://s23.q4cdn.com/714267708/files/doc_financials/2026/q2/Blackstone-Second-Quarter-2026-Investor-Call.pdf
- 3Q'26 (Oct 22, 2026) https://s23.q4cdn.com/714267708/files/content_files/Blackstone-Third-Quarter-2026-Investor-Call.pdf
- Below, "official transcript [quarter]" refers to these files.

---

## A. Status & credentials (brief)

- Firm size at 3Q'26 (Sept 30, 2026): total AUM **$1,368.3B**, fee-earning AUM **$989.7B**, dry powder **$228.9B** (3Q'26 release, Oct 22, 2026). https://www.sec.gov/Archives/edgar/data/0001393818/000119312526428297/d160590dex991.htm
- Real Estate segment AUM at 3Q'26: **$309.0B**, the lowest point of the window. It peaked in the window at $339.3B in 1Q'24. Same source.
- Credit & Insurance segment AUM at 3Q'26: **$480.0B**, now the largest segment. It passed Real Estate in 3Q'24 ($354.7B vs $325.1B). Same source and the 3Q'24 release.
  - Blackstone's "credit platform" figure is larger than this segment figure because it adds real-estate credit: **$520B** at 4Q'25, **$536B** at 1Q'26, "nearly **$550B**" at 2Q'26. Sources: Gray on the 4Q'25 call (https://www.fool.com/earnings/call-transcripts/2026/01/29/blackstone-bx-q4-2025-earnings-call-transcript) and MarketBeat summaries of the 1Q'26 and 2Q'26 calls.
- Data centers: Blackstone describes itself as owning "the world's largest data center platform" (4Q'25 call opening remarks). The platform was valued at **$185B**, including assets under construction, at 2Q'26 (see B4).
- Insurance AUM: **$271B** at 4Q'25 (up 18%, with "no insurance liability taken on" per Gray), and **$290B** at 2Q'26 (up 15%). Sources: 4Q'25 Fool transcript; https://www.marketbeat.com/instant-alerts/blackstone-q2-earnings-call-highlights-2026-07-23/
- Private wealth AUM: above **$300B** at 4Q'25 (up 16%, about 3x in five years), and **$310B** at 1Q'26 (up 14%). Sources: 4Q'25 Fool transcript; https://www.fool.com/earnings/call-transcripts/2026/04/23/blackstone-bx-q1-2026-earnings-transcript/
- Earnings record:
  - FY2024 distributable earnings (DE): $6.0B ($4.64 per share).
  - FY2025 DE: $7.1B ($5.57 per share), up 20%.
  - LTM DE at 3Q'26: $7.7B ($5.95 per share).
  - Sources: the 4Q'24, 4Q'25 and 3Q'26 releases.
- **[R2] Firm-wide geographic exposure (whole portfolio, not real estate alone).** CFO Michael Chae on the 4Q'24 call (Jan 30, 2025), answering a question on exposure to Europe, Asia and China: "if you step back at the whole firm, so, these are sort of gross numbers, but we have heavy, you know, concentration as international and global as we are in the US, about three quarters of our portfolio is in the US, and that's a pretty historical level. About 15 or so percent in Europe, and then a quite modest single-digit amount in Asia." No separate China figure was given. Source: official transcript 4Q'24.
- **[R2] GAAP revenue by geography** (FY2025 10-K, filed Feb 2026; revenue is attributed by where fund investments are domiciled or headquartered): Americas 80% / EMEA 13% / Asia-Pacific 7% in 2025; 76% / 16% / 8% in 2024; 78% / 15% / 7% in 2023. U.S.-generated revenue was 68%, 68% and 70% of the total in those years. This is a revenue split, not an AUM split. Source: https://www.sec.gov/Archives/edgar/data/1393818/000119312526082531/d48618d10k.htm (Notes, "Geographic Information").
- **[R2] Real estate AUM by region or country: Blackstone does not publish it.** Neither the FY2025 10-K nor any 2024–2026 call transcript gives a real estate AUM split by region, or for Japan, India, Australia or China. The closest disclosed proxies, all at Dec 31, 2025 (FY2025 10-K fund table, $ thousands):
  - Total BREP Asia (funds I–III): committed $19.85B, unrealized value $11.50B, realized $10.84B, net IRR 8%. BREP Asia III (2022 vintage): committed $8.23B, unrealized $4.51B.
  - Total BREP (all drawdown opportunistic funds, global + Europe + Asia + co-invest): committed $178.5B, unrealized $74.9B. Total BREP Europe: committed €40.1B, unrealized €15.5B.
  - BREP Asia unrealized value is therefore about 15% of total BREP unrealized value. This excludes BREIT (U.S.-only), BPP and BREDS, so it is not a share of the $309B real estate segment AUM.
  - Net accrued performance revenues at Dec 31, 2025: BREP Global $530M, BREP Europe $44M, BREP Asia $94M (2024: $892M / $126M / $98M).
- **[R2] China in the FY2025 10-K (risk factors):** "the ability to deploy capital in China has been adversely impacted by policies and regulations in the U.S., which may be exacerbated prospectively." The 10-K also notes that in January 2025 an annex to the U.S. Outbound Investment Order named China, Hong Kong and Macau as "countries of concern." Taiwan is not mentioned anywhere in the 10-K. Same 10-K URL.

---

## B. ACTIONS

### B1. Firm-wide quarterly figures, 1Q'24 to 3Q'26 (all from Blackstone earnings releases)

All figures are in $ billions. AUM and dry powder are end-of-quarter values. Inflows, deployment and realizations are activity during the quarter.

| Quarter (release date) | Total AUM | Fee-earning AUM | Real Estate AUM | Credit & Ins. AUM | Private Equity AUM | Multi-Asset AUM | Inflows | Deployed | Realizations | Dry powder | DE/share |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1Q'24 (Apr 18, 2024) | 1,061.3 | 781.4 | 339.3 | 329.6 | 310.0 | 82.3 | 34.0 | 24.5 | 15.0 | 191.2 | 0.98 |
| 2Q'24 (Jul 18, 2024) | 1,076.4 | 808.7 | 336.1 | 330.1 | 330.6 | 79.6 | 39.4 | 33.7 | 23.5 | 181.0 | 0.96 |
| 3Q'24 (Oct 17, 2024) | 1,107.6 | 820.5 | 325.1 | 354.7 | 344.7 | 83.1 | 40.5 | 34.0 | 22.7 | 171.6 | 1.01 |
| 4Q'24 (Jan 30, 2025) | 1,127.2 | 830.7 | 315.4 | 375.5 | 352.2 | 84.2 | 57.5 | 41.6 | 25.9 | 168.6 | 1.69 |
| 1Q'25 (Apr 17, 2025) | 1,167.5 | 860.1 | 320.0 | 388.7 | 371.0 | 87.8 | 61.6 | 36.4 | 25.5 | 177.2 | 1.09 |
| 2Q'25 (Jul 24, 2025) | 1,211.2 | 887.1 | 325.0 | 407.3 | 388.9 | 90.0 | 52.1 | 33.1 | 23.4 | 181.2 | 1.21 |
| 3Q'25 (Oct 23, 2025) | 1,241.7 | 906.2 | 320.5 | 432.3 | 395.6 | 93.3 | 54.2 | 26.6 | 30.6 | 188.1 | 1.52 |
| 4Q'25 (Jan 29, 2026) | 1,274.9 | 921.7 | 319.3 | 443.0 | 416.4 | 96.2 | 71.5 | 42.2 | 46.1 | 198.3 | 1.75 |
| 1Q'26 (Apr 23, 2026) | 1,304.0 | 937.6 | 315.3 | 457.5 | 429.9 | 101.4 | 68.5 | 35.6 | 35.9 | 213.3 | 1.36 |
| 2Q'26 (Jul 23, 2026) | 1,346.3 | 961.6 | 314.1 | 469.3 | 454.2 | 108.6 | 68.3 | 34.2 | 31.8 | 228.1 | 1.52 |
| 3Q'26 (Oct 22, 2026) | 1,368.3 | 989.7 | 309.0 | 480.0 | 465.4 | 113.9 | 63.3 | 30.1 | 33.1 | 228.9 | 1.32 |

Release URLs, one per row:
- 1Q'24 https://www.sec.gov/Archives/edgar/data/1393818/000119312524099867/d781420dex991.htm
- 2Q'24 https://www.sec.gov/Archives/edgar/data/1393818/000119312524180721/d25511dex991.htm
- 3Q'24 https://www.sec.gov/Archives/edgar/data/1393818/000119312524238418/d844809dex991.htm
- 4Q'24 https://www.sec.gov/Archives/edgar/data/1393818/000119312525016236/d876858dex991.htm
- 1Q'25 https://www.sec.gov/Archives/edgar/data/1393818/000119312525083472/d894616dex991.htm
- 2Q'25 https://www.sec.gov/Archives/edgar/data/1393818/000119312525163805/d83435dex991.htm
- 3Q'25 https://www.sec.gov/Archives/edgar/data/1393818/000119312525247643/d48505dex991.htm
- 4Q'25 https://www.blackstone.com/wp-content/uploads/sites/2/2026/01/Blackstone4Q25EarningsPressRelease.pdf
- 1Q'26 https://www.sec.gov/Archives/edgar/data/0001393818/000119312526171788/d60443dex991.htm
- 2Q'26 https://www.sec.gov/Archives/edgar/data/0001393818/000119312526313250/d153439dex991.htm
- 3Q'26 https://www.sec.gov/Archives/edgar/data/0001393818/000119312526428297/d160590dex991.htm

**Full-year and LTM totals:**
- FY2024: inflows $171.5B, deployed $133.9B, realizations $87.1B (4Q'24 release).
- FY2025: inflows $239.4B, deployed $138.2B, realizations $125.6B (4Q'25 release).
- LTM to 3Q'26: inflows $271.6B, deployed $142.0B, realizations $147.0B (3Q'26 release).
- The quarterly rows add up to these totals within rounding. Example: FY25 inflows 61.6 + 52.1 + 54.2 + 71.5 = 239.4.

**Segment names.** Releases from 1Q'24 onward use the names "Credit & Insurance" and "Multi-Asset Investing", the latter in place of the old BAAM/Hedge Fund Solutions. The fetched 1Q'24 release used these names too, possibly as a restatement.

### B2. Real Estate segment: quarterly activity

All figures are in $ billions and come from the same releases.

| Quarter | RE inflows | RE deployed | RE realizations | Opportunistic RE return (q) | Core+ RE return (q) | Infrastructure return (q, for contrast) |
|---|---|---|---|---|---|---|
| 1Q'24 | 8.1 | 4.8 | 3.8 | 0.3% | 1.2% | 4.8% |
| 2Q'24 | 5.9 | 9.8 | 5.5 | 0.3% | 0.1% | 6.3% |
| 3Q'24 | 5.8 | 3.7 | 7.4 | 1.1% | (0.5)% | 5.5% |
| 4Q'24 | 8.1 | 7.0 | 5.5 | (5.1)% | (0.8)% | 4.8% |
| 1Q'25 | 6.2 | 5.2 | 4.3 | 0.2% | 1.2% | 7.5% |
| 2Q'25 | 7.2 | 6.2 | 5.2 | 0.1% | (0.4)% | 2.9% |
| 3Q'25 | 3.8 | 3.6 | 7.3 | (0.6)% | 0.6% | 5.2% |
| 4Q'25 | 8.3 | 5.5 | 8.6 | (0.3)% | 1.5% | 8.4% |
| 1Q'26 | 6.8 | 7.0 | 7.0 | (0.9)% | 0.8% | 7.8% |
| 2Q'26 | 8.2 | 5.8 | 6.6 | 0.4% | 0.2% | 7.2% |
| 3Q'26 | 6.3 | 6.1 | 7.0 | **(3.2)%** | 1.6% | 6.4% |

- **Full-year RE totals.**
  - FY2024: inflows $27.9B, deployed $25.3B, realizations $22.2B. Opportunistic RE (3.7)%, Core+ 0.1%.
  - FY2025: inflows $25.5B, deployed $20.5B, realizations $25.6B. Opportunistic (0.6)%, Core+ 3.0%.
  - LTM to 3Q'26: inflows $29.6B, deployed $24.4B, realizations $29.3B. Opportunistic (4.0)%, Core+ 4.3%.
- **RE realizations versus deployment.** RE realizations exceeded RE deployment in FY2025 and in the LTM to 3Q'26. Over 3Q'25 to 3Q'26, realizations exceeded deployment in every quarter except 1Q'26, when they were equal.
- **Gray on cumulative deployment.** On the 4Q'25 call (Jan 29, 2026) Gray said Blackstone had invested or committed "over **$50B** in real estate since the trough two years ago." Sources: 4Q'25 Fool transcript; CoStar https://www.costar.com/article/1774086675/blackstone-reports-record-results-powered-by-data-center-investments
  - [R2 更正：官方逐字稿全文] "We've taken advantage of choppy investor sentiment to lean into deployment, investing or committing over $50 billion in real estate since the cycle trough two years ago, including our commitment in Q4 to privatize Alexander & Baldwin, an owner of high-quality grocery-anchored shopping centers and warehouses in Hawaii." (Gray, official transcript 4Q'25)
- **1Q'26 activity.**
  - About $7B of RE acquisitions and $7B of RE sales.
  - About $50B of dry powder across the real estate funds.
  - $3.4B raised for real-estate debt.
  - Real estate base management fees declined moderately year over year (CFO Michael Chae).
  - Source: Bisnow, Apr 23, 2026, https://www.bisnow.com/national/news/data-center-capital-markets/data-centers-grow-150b-blackstone-cites-broader-real-estate-headwinds-134254
- **Sector mix.** Data centers, logistics and rental housing make up "nearly 80%" of Blackstone's global property equity portfolio. Source: Mingtiandi, Jul 27, 2026, https://www.mingtiandi.com/real-estate/finance/blackstone-data-centre-platform-hits-185b-as-ai-bets-power-q2-earnings/
  - [R2] Official wording, Chae, 2Q'26 call (Jul 23, 2026): "While the recovery in commercial real estate has been impacted by the increase in base rates, our platform remains well positioned, with data centers, logistics and rental housing now comprising nearly 80% of the global equity portfolio." Source: official transcript 2Q'26.
  - [R2] Gray, 3Q'26 prepared remarks (Oct 22, 2026): data centers and logistics "represent 54% of our global real estate portfolio." In Q&A he added that data centers, logistics and hotels together are "over 60% of our exposures." Source: official transcript 3Q'26.
  - [R2] At year-end 2025, Mingtiandi (Feb 1, 2026) gave 75% for data centers, logistics and rental housing. https://www.mingtiandi.com/real-estate/finance/blackstone-real-estate-revenue-climbs-8-on-data-centre-boom/
- **[R2] Regional real estate returns (official).**
  - 2Q'26 (Chae): latest BREP Global vintage +7% and BREP Asia +3.7% for the quarter.
  - 3Q'26 (Chae): LTM appreciation of 17% for the latest BREP Global fund, **24% for Asia** and 13% for Europe.
  - 1Q'26 (Chae): BREP opportunistic funds fell modestly because of "our public holdings in India in the context of a 15% decline in the country's stock market in Q1"; "outside of the India public portfolio, BREP values were stable."
  - 4Q'24 (Gray): real estate equity funds fell as the portfolio absorbed an 80 bp rise in the 10-year Treasury yield, and "our non-US holdings were also impacted by the stronger US dollar."
  - Sources: official transcripts 2Q'26, 3Q'26, 1Q'26, 4Q'24.
- **4Q'25 headwinds.** The quarter's real estate headwinds were life sciences, office and **U.K. student housing** (CoStar, Jan 29, 2026, same URL as above).

### B3. BREIT (non-traded REIT): redemptions and flows

**Redemption history**
- **Nov 2022:** BREIT first limited redemptions after requests exceeded the 5%-of-NAV quarterly cap.
- **Jan 2023:** requests peaked at **$5.3B**.
- **Feb 2024:** BREIT met 100% of repurchase requests for the first time since the limits began. It has met all requests since.
- **2022–2024:** BREIT raised about $9.6B, sold over $20B of assets, and paid over $26B to redeeming holders.
- Source for all of the above: AltsWire, https://altswire.com/breit-raises-1-2-billion-in-q1-2026-highest-in-three-years-as-repurchases-fall-41/

**Class I net returns by year**
- 2023: −0.5%. 2024: 2%. 2025: **8.1%**, the best year since 2022.
- Since inception: 9.3% annualized. Blackstone says this is 60% above the public REIT index.
- Source: AltsWire (same URL); the 2025 figure is also given by Gray on the 4Q'25 call.

**[R2] Quarterly subscriptions and repurchases, from BREIT's own SEC filings ($ billions)**

"Raised" and "Repurchased" are BREIT's own rounded figures from the "Capital and Financing Activity" highlights of each 10-Q/10-K MD&A. "Raised" is sales of common stock plus BREIT OP units, and includes distribution reinvestment. 4Q values are full year minus 9M, so each carries about ±0.1–0.2 of rounding error. The cash-flow columns are exact cash amounts from the statement of cash flows (XBRL, quarterly values derived from YTD figures). "Cash proceeds" excludes reinvested distributions.

| Quarter | Raised (MD&A) | Repurchased (MD&A) | Net (MD&A) | Cash proceeds from share issuance | Cash paid for repurchases | Real estate mix at quarter end (rental housing / industrial / data centers, % of fair value) |
|---|---|---|---|---|---|---|
| 1Q'24 | 0.8 | 2.9 | −2.1 | 0.292 | 2.684 | 53 / 25 / 9 |
| 2Q'24 | 0.9 | 3.3 | −2.4 | 0.593 | 3.219 | 52 / 25 / 10 |
| 3Q'24 | 0.7 | 1.7 | −1.0 | 0.443 | 2.042 | 50 / 26 / 11 |
| 4Q'24 (derived) | ~1.0 | ~1.5 | ~−0.5 | 0.600 | 1.362 | 49 / 25 / 13 |
| **FY2024** | **3.4** | **9.4** | **−6.0** | 1.928 | 9.307 | |
| 1Q'25 | 0.8 | 2.1 | −1.3 | 0.391 | 1.799 | 47 / 24 / 15 |
| 2Q'25 | 1.1 | 1.5 | −0.4 | 0.562 | 1.728 | 46 / 24 / 17 |
| 3Q'25 | 0.8 | 1.3 | −0.5 | 0.506 | 1.365 | 46 / 23 / 18 |
| 4Q'25 (derived) | ~0.9 | ~1.3 | ~−0.4 | 0.627 | 1.241 | 44 / 22 / 21 |
| **FY2025** | **3.6** | **6.2** | **−2.6** | 2.086 | 6.133 | |
| 1Q'26 | 1.2 | 1.3 | −0.1 | 0.748 | 1.200 | 43 / 21 / 23 |
| 2Q'26 | 1.1 (+0.1 DST program) | 0.9 | +0.2 (+0.3 incl. DST) | 0.810 | 0.969 | 42 / 20 / 27 |
| 3Q'26 | 1.1 (+0.2 DST program) | 0.8 | +0.3 (+0.5 incl. DST) | 0.807 | 0.877 | 39 / 20 / 30 |
| **9M 2026** | ~3.4 | **2.9** | | 2.365 | 3.047 | |

- **Fill rates (same filings):** "fulfilled $9.4 billion of repurchases requested, including all repurchase requests received for the months of February through December, 2024" (FY2024 10-K). All requests were met in every period of 2025 (FY2025 10-K: $6.2B, "all repurchase requests received for the year") and 9M 2026 ($2.9B, "all third party repurchase requests").
- **Cross-check against the equity statement (XBRL):** for 4Q'25, new issues ($1,140.9M) plus DRIP ($296.1M) minus repurchases ($1,221.6M) gives about **+$0.2B**. This is consistent with Gray's remark that December 2025 had the best net flows in over three years, but differs from the ~−0.4 derived from the rounded MD&A figures. The MD&A-derived 4Q values should be treated as approximate.
- **Earlier context:** in 2023 BREIT raised $7.7B (including $4.5B from UC Investments) and repurchased $13.3B (FY2023 10-K).
- **Large holder:** the FY2025 10-K says "a single investor owns approximately 9% of our total outstanding shares," and is "required to submit repurchase requests ... ratably over a 24-month period." The investor is not named in that passage.
- Filings (all https://www.sec.gov/Archives/edgar/data/1662972/…):
  - 000166297224000061/breit-20240331.htm; 000166297224000100/breit-20240630.htm; 000166297224000155/breit-20240930.htm
  - 000166297225000027/breit-20241231.htm (10-K); 000166297225000065/breit-20250331.htm; 000166297225000108/breit-20250630.htm; 000166297225000184/breit-20250930.htm
  - 000166297226000032/breit-20251231.htm (10-K); 000166297226000065/breit-20260331.htm; 000166297226000111/breit-20260630.htm; 000166297226000167/breit-20260930.htm
  - XBRL: https://data.sec.gov/api/xbrl/companyfacts/CIK0001662972.json
- **Monthly data:** BREIT's monthly NAV/flow reports on breit.com were not retrieved [UNVERIFIED].

**Calendar 2025 flows**
- $7.2B of new capital and net flows of about **+$1B**, the first net inflow since Sept 2022.
- Source: Bisnow, Mar 2, 2026, https://www.bisnow.com/news/national/capital-markets/breit-raises-1b-more-than-investors-redeem-reversing-3-year-trend-133462
- [R2 更正：與 BREIT 自身申報矛盾] BREIT's FY2025 10-K reports that it "Raised $3.6 billion from the sale of shares of our common stock and units of BREIT OP during the year ended December 31, 2025" and "Repurchased $6.2 billion", a net outflow of about **−$2.6B**. Cash-flow figures give the same direction: $2.09B of cash proceeds against $6.13B of repurchases. On re-reading, the Bisnow article says "raised $1B more than it saw in outflows last year" and "$7.2B in new capital across 2025", but it gives no breakdown. Its figures cannot be reconciled with the 10-K. The +$1B / $7.2B figures should not be used for BREIT's calendar-2025 share flows.
- Gray said December 2025 had the best net flows in over three years (4Q'25 call).

**1Q'26**
- Raised **$1.2B**, the most in three years and up 44% year over year.
- Repurchase requests fell **41%** year over year.
- Net inflows were positive in February and March.
- Class I NAV per share: $14.25 (Mar 31, 2026), up from $14.13 (Dec 31, 2025) and $13.77 (1Q'25).
- Aggregate NAV about $54.9B. Total assets $93.6B.
- BREIT sold 64 properties in the quarter for about $1.95B, with gains of about $462.5M.
- Sources: AltsWire (same URL); Gray quote in C.

**2Q'26**
- Raised $1.2B. Repurchases fell 42% year over year and 33% from 1Q'26.
- Gray called this the best "regular way" net flows in nearly four years and said BREIT is "clearly back in growth mode."
- Source: https://www.marketbeat.com/instant-alerts/blackstone-q2-earnings-call-highlights-2026-07-23/

**3Q'26 (BREIT 8-K dated Nov 4, 2026, data as of Sept 30, 2026)**
- Second straight quarter of positive net flows, and the strongest quarter since 2022.
- Year-to-date subscriptions up about 40%.
- Class I returns: +2.0% in 3Q, +7.3% YTD, +10.7% TTM.
- 21 consecutive positive months.
- Annualized distribution rate 4.5%. 100% of 2025 distributions were classified as return of capital.
- About **$7B of non-core assets sold** year to date.
- **$9.1B deployed into QTS data-center developments** year to date.
- Source: https://www.sec.gov/Archives/edgar/data/0001662972/000119312526448032/d182163d8k.htm
- Gray on the 3Q'26 call said BREIT "grew 9% year over year to $58 billion and saw its best regular-way net flows in four years." Source: Webull transcript, https://www.webull.com/news/15792402672886784
  - [R2 更正：官方逐字稿全文] "BREIT grew 9% year over year to $58 billion and saw its best regular-way net flows in four years in Q3. BREIT has generated 21 consecutive months of positive returns, and approximately 11% net over the last twelve months for its largest share class." (official transcript 3Q'26)
- [R2] **BREIT 3Q'26 10-Q (filed Nov 6, 2026):**
  - Sold 75 properties in 3Q'26 (65 rental housing, nine industrial, one office) for $1.96B of net proceeds and a $366.1M net realized gain. The gain was "offset by impairments recorded during the quarter of $496.7 million."
  - Sold the remaining 40 manufactured-housing properties for $921.0M.
  - 9M 2026 dispositions: 265 properties, $6.05B net proceeds, $1.22B net gain. By sector: rental housing $3.55B, industrial $1.52B, self storage $0.85B.
  - Deployed $3.4B (BREIT share) into QTS data-center developments in 3Q'26, described as "100% pre-leased, in substantially all cases to investment grade tenants."
  - Total assets: $88.9B (Sept 30, 2026), down from $98.6B (Dec 31, 2025) and $116.2B (Dec 31, 2024, per the FY2025 10-K).
  - Cumulative net offering proceeds since inception: $83.5B as of Nov 6, 2026.
  - Source: https://www.sec.gov/Archives/edgar/data/1662972/000166297226000167/breit-20260930.htm

**Data-center share of BREIT**
- **23%** (Gray, 1Q'26 call, per https://www.marketbeat.com/instant-alerts/blackstone-q1-earnings-call-highlights-2026-04-23/).
- **27%** of a $57B portfolio (Mingtiandi, Jul 27, 2026).
- [R2] Both figures match BREIT's own 10-Q (data centers as a share of real estate fair value: 23% at Mar 31, 2026 and 27% at Jun 30, 2026), and the share reached **30% at Sept 30, 2026**. The full series runs from 9% (1Q'24) to 30% (3Q'26); see the table above. The difference between 23% and 27% is real growth in the same measure, not a change of denominator.

### B4. Data centers / AI infrastructure: size and pipeline

**Portfolio value and pipeline over time**

| Point in time | Data-center portfolio | Prospective pipeline | Source |
|---|---|---|---|
| 2Q'24 (Jul 2024 call) | $55B | $70B | DCD, https://www.datacenterdynamics.com/en/news/blackstones-prospective-data-center-pipeline-hits-100bn-on-top-of-70bn-portfolio (gives the "previous quarter" figures) |
| 3Q'24 (Oct 2024 call) | $70B | $100B | same DCD article |
| Start of 2026 | $130B | n/a | Mingtiandi, Jul 27, 2026 |
| 1Q'26 (Apr 23, 2026) | "over $150B" incl. under construction | $160B | MarketBeat 1Q'26; Bisnow Apr 23, 2026 |
| 2Q'26 (Jul 23, 2026) | **$185B** incl. under construction | 15 GW of powered/entitled sites, able to support about $200B of data centers | Mingtiandi; MarketBeat 2Q'26 |

- **Schwarzman, 1Q'26 and 2Q'26 calls:** the portfolio "can double" over the next few years. Sources: P&I headline, Apr 23, 2026, https://www.pionline.com/alternative-investments/pi-blackstone-first-quarter-aum-data-center-growth/; MarketBeat 2Q'26.
  - [R2 更正：官方逐字稿全文] The phrase "can double" does not appear in the official 1Q'26 transcript. The official 2Q'26 wording (Schwarzman) is: "In addition to these new ventures, we are seeing extraordinary momentum in our data center platform, which has grown to $185 billion of total value (including facilities under construction) — up from $130 billion at the start of just this year. We expect to lease over three times more capacity this year than any other year in our history. If we execute on our pipeline, our data center platform could double over the next few years." Official 1Q'26 wording: "Our total portfolio now consists of over $150 billion of data centers globally including facilities under construction – and it continues to grow rapidly, with an additional $160 billion in prospective pipeline development."
  - [R2] Official 3Q'24 wording (Oct 17, 2024): "The Blackstone portfolio consists of $70 billion of data centers and over $100 billion in prospective pipeline development, including AirTrunk and facilities under construction."
- **Leasing and exposure, Gray on the 3Q'26 call (Oct 22, 2026):**
  - "We're going to do 6 gigawatts this year, we think, which is triple what we did last year."
  - "we expect a threefold leasing this year across our global platform."
  - Data-center and AI debt plus equity is "about 7% of our total."
  - Source: Webull transcript.
  - [R2 更正：官方逐字稿全文]
    - "Obviously, data center leasing very strong across our various platforms. We're going to do six gigawatts this year, we think, which is triple what we did last year. And those three categories, when you look at Blackstone real estate, that's over 60% of our exposures are in those three asset classes."
    - Prepared remarks: "First, demand is accelerating in key sectors, including data centers, where we expect a three-fold increase in leasing this year across our global platform; and logistics, where our U.S. holdings saw record leasing activity in Q3. These two sectors represent 54% of our global real estate portfolio."
    - "If you look across our trillion-four of assets today between debt and equity, it's about 7% of our total, which is still a very large number given our scale, but our clients also want other things. They want exposure to defense, they want exposure to life sciences. They want exposure to India and Japan."
    - Source: official transcript 3Q'26.
- **[R2] Japan AI data centers.** Reuters (Jun 23, 2026), citing a Nikkei interview, reported that Blackstone plans to invest **$30 billion** in Japanese AI data centers over the next three to five years. Gray told Nikkei this, but Reuters gives no direct quote. Source: https://www.ksl.com/article/51535229/blackstone-plans-30-billion-investment-in-japan-ai-data-centres-nikkei-reports (Reuters via KSL). The original Nikkei article was not opened [UNVERIFIED wording].
- **Software exposure, Gray on the 1Q'26 call:** software is "less than 7%" of firm AUM and is the firm's largest AI-disruption exposure. Source: MarketBeat 1Q'26.
- **QTS returns.**
  - Taken private in 2021 for about $10B.
  - The largest driver of returns in 2025 (Gray, 4Q'25: "Our QTS data center business was again the largest single driver of returns for BIP as well as in real estate.").
  - The largest single contributor to firm appreciation in 2Q'26 (Mingtiandi).
  - AI-related holdings were 9 of the 10 biggest 2Q'26 mark-ups (Mingtiandi).
- **Infrastructure platform AUM:**
  - $77B at 4Q'25, up 40% (Gray, 4Q'25 call).
  - $84B at 1Q'26, up 41% (Fool 1Q'26).
  - Infrastructure LTM return: 28.9% at 3Q'26 (3Q'26 release).
- **AirTrunk (Asia-Pacific data centers).**
  - Agreed Sept 2024 (reported Sept 6, 2024) with CPP Investments at an implied enterprise value of **over A$24B (US$16.1B)**. Per Reuters, it was Australia's largest buyout of the year. CPP was to hold 12% after completion. The sellers were Macquarie Asset Management and PSP.
  - Gray at the time: "AirTrunk is another vital step as Blackstone seeks to be the leading digital infrastructure investor."
  - Source: Reuters via The Star, https://thestar.com.my/business/business-news/2024/09/06/blackstone-to-acquire-airtrunk-in-us16bil-deal
  - At the time AirTrunk had 800 MW across 11 facilities in Australia, Hong Kong, Japan, Malaysia and Singapore (Mingtiandi).
  - Apr 2026: entered India by buying the Blackstone-backed **Lumina CloudInfra** (600 MW pipeline).
  - Announced plans for **US$30B** of investment in India and over 5 GW by 2030.
  - Filed for a **Singapore REIT** of about $1.5B, holding about $3.9B of assets in Singapore, Australia, Japan and Hong Kong, targeted for Sept/Oct 2026.
  - Source: Mingtiandi, Jul 27, 2026. Whether the Singapore REIT IPO priced was not checked.
  - [R2] **Closing:** AirTrunk's own release dated **Dec 23, 2024** says Blackstone "has successfully closed its A$24 billion acquisition." Participants were Blackstone Real Estate Partners, Blackstone Infrastructure Partners, Blackstone Tactical Opportunities and Blackstone's private equity strategy for individual investors, with CPP Investments co-investing. Source: https://airtrunk.com/?p=14902
  - [R2] **Official call wording (Schwarzman, 3Q'24, Oct 17, 2024):** "Today, Blackstone is the largest data center provider in the world with holdings across the U.S., Europe, India and Japan. Last month, we announced another major expansion by agreeing to acquire AirTrunk, the largest data center operator in the Asia-Pacific region, for $16 billion." Gray on the same call: "The AirTrunk transaction, we just did a $16 billion deal. We were able, I think, to be in a very favorable, competitive dynamic because we did it really on our own with one institutional partner." AirTrunk is not mentioned in any 2025–2026 call transcript.
  - [R2] **Singapore REIT IPO postponed.** w.media (Oct 14, 2026), citing the WSJ, reported that AirTrunk postponed the ~US$1.5B Singapore REIT listing, originally planned for Sept/Oct 2026, "possibly early next year," citing "market volatility and uncertainty over US interest rates." Blackstone declined to comment. Source: https://w.media/airtrunk-postpones-singapore-us1-5-billion-reit-ipo-amid-ai-stock-selloff-report/ No SGX prospectus was found [UNVERIFIED final status].
- **Rowan Digital Infrastructure:** a 49% stake at a $3.8B valuation was Blackstone's largest 1Q'26 investment (Bisnow, Apr 23, 2026).
- **BXDC data-center REIT.** Blackstone filed to launch a public company to buy stabilized, newly built data centers (1Q'26 call). In 2Q'26 it launched **BXDC** with a $2B offering, which Schwarzman called "the largest blind-pool REIT IPO in history." Sources: MarketBeat 1Q'26 and 2Q'26.
  - [R2 更正：官方逐字稿全文] "The $2 billion offering represented the largest blind pool REIT IPO in history — a testament to our leadership position in this sector." (Schwarzman, official transcript 2Q'26)
- **AI partnerships announced around the 2Q'26 call** (source: MarketBeat 2Q'26 summary; terms are **[paraphrase]**):
  - A new AI cloud provider built on Google TPUs, with an initial investment of up to **$5B**.
  - A joint company with **Anthropic** focused on enterprise adoption of AI.
  - A financing platform for Broadcom, set up with another manager, starting at **$35B for 1 GW** of compute.
  - [R2 更正：官方逐字稿全文, Schwarzman, 2Q'26]
    - "First, we teamed with Google to build a new AI cloud provider powered by their TPU chips, investing up to $5 billion initially. We think this business has the potential to scale quite significantly over time, as the first neocloud for TPUs."
    - "Second, we partnered with Anthropic to form a company focused on driving enterprise adoption of their AI-powered solutions, helping firms to realize the vast potential of this technology."
    - "Third, we joined Broadcom and another manager to create a financing platform in support of Broadcom's deployment of large-scale AI compute for their end customers. The platform provided $35 billion initially to deliver one gigawatt of compute — representing the largest private credit investment in history — with much more to come."
    - "And fourth ... we launched a Blackstone-managed REIT known as 'BXDC' ... to acquire stabilized, newly constructed data centers."
    - He also said Blackstone "invested directly in some of the fastest-growing private companies in the world, including Anthropic, OpenAI and SpaceX."

### B5. Power and energy

- **TXNM Energy** (parent of utilities PNM in New Mexico and TNMP in Texas).
  - Blackstone Infrastructure agreed to buy it on **May 19, 2025**: about **$5.7B** in cash, and about **$11.5B** in total value including preferred stock and net debt.
  - Expected close: 2H 2026. Whether it has closed was not checked.
  - Source: T&D World, https://www.tdworld.com/utility-business/article/55291300/blackstone-buying-txnm
  - [R2] **Primary source (TXNM 8-K Ex. 99.1, May 19, 2025):** $61.25 per share in cash, "reflecting a total enterprise value of $11.5 billion, including net debt (excluding securitization debt) and preferred stock." https://www.sec.gov/Archives/edgar/data/1108426/000110842625000048/a05192025txnmex991.htm
  - [R2] **Status: not closed as of Oct 30, 2026.**
    - Jul 17, 2026: the merger agreement's termination date was extended to **May 31, 2027** "to allow for further time to obtain regulatory approvals." https://www.sec.gov/Archives/edgar/data/1108426/000110842626000042/txnm07172026ex991.htm
    - Per the 3Q'26 earnings release (Oct 30, 2026), approvals have been received from shareholders (Aug 28, 2025), FERC and the PUCT (Feb 2026), the FCC, HSR and the NRC (Aug 21, 2026). Approval from the New Mexico PRC is still pending. The NMPRC accepted an amended application with added customer benefits on Oct 16, 2026, and published a revised hearing schedule on Oct 27, 2026. https://www.sec.gov/Archives/edgar/data/1108426/000110842626000068/ex99110302026earningsrelea.htm
- **Pennsylvania pledge, July 15, 2025.** Gray announced **$25B** for large data centers in northeast Pennsylvania, co-located with new natural-gas plants to be built with a utility. He spoke at the Energy and Innovation Summit in Pittsburgh.
  - Gray: "We've identified several sites that we've secured to build large data centers..."
  - Gray: "the idea that you can colocate the data centers directly next to the source of power."
  - Source: Axios, https://www.axios.com/2025/07/15/blackstone-ai-data-centers-energy-pennsylvania
- **Schwarzman, 1Q'26 call** (MarketBeat 1Q'26):
  - Blackstone is "the most active private investor in the utility sector over the past several years."
  - Its U.S. natural-gas pipeline network is the "longest cross-country network" in the country.
  - [R2 更正：官方逐字稿全文] "Specifically, we are the most active private investor in the utility sector over the past several years." / "Our portfolio also includes the longest cross-country network of natural gas pipelines in the US, with this resource expected to account for approximately half of data center power generation within the next five years." (official transcript 1Q'26)
- **LNG Canada, Nov 2, 2026.** Funds managed by **Blackstone Credit & Insurance** agreed to buy **49.9%** of the Mitsubishi Corp. holding company that holds Mitsubishi's **15%** stake in Shell-led LNG Canada, for about **US$1.6B**.
  - The holding company takes 2.1 Mtpa of LNG today, expected to reach 4.2 Mtpa after the expansion. Closing was expected in November.
  - Source: Reuters via BOE Report, https://boereport.com/2026/11/02/mitsubishi-to-sell-down-lng-canada-stake-to-blackstone-funds-for-1-6-billion/
  - Related headline: Blackstone and Canadian pension funds to invest **$3.1B** in total **[title only]**, https://www.miningweekly.com/article/blackstone-canadian-pension-funds-to-invest-31bn-in-lng-canada-for-mitsubishi-stake-2026-11-03
- **Gray, 4Q'25 call:** "Rising demand in the power and electrification ecosystem is creating enormous deal flow in this area."

### B6. Notable real estate and other deals, 2024–2026

**United States**
- [R2] **Tricon Residential** (U.S. single-family rental and Canadian apartments). Announced Jan 19, 2024: BREP X together with BREIT to acquire all common shares at $11.25 (about C$15.17) per share in cash, a 30% premium, for "a $3.5 billion equity transaction value." BREIT kept its ~11% stake. **Closed May 1, 2024** (BREIT stake ~11.6% after closing). Sources: Tricon 6-K Ex. 99.1, https://www.sec.gov/Archives/edgar/data/1584425/000095014224000182/eh240439765_ex9901.htm ; closing, https://www.sec.gov/Archives/edgar/data/1584425/000119312524126841/d811827dex991.htm
- [R2] **AIR Communities** (Apartment Income REIT; 76 rental communities, mainly Miami, LA, Boston and DC). Announced Apr 8, 2024: BREP X to acquire it at $39.12 per share in cash, "valued at approximately $10 billion, including the assumption of debt," a 25% premium. **Closed Jun 28, 2024** (8-K filed Jul 1, 2024), with a $2.65B Wells Fargo mortgage loan obtained at closing. Sources: https://www.sec.gov/Archives/edgar/data/1820877/000119312524089199/d705368dex991.htm ; https://www.sec.gov/Archives/edgar/data/1820877/000114036124032015/ny20031796x7_8k.htm
- [R2] **Retail Opportunity Investments Corp. (ROIC)** (93 grocery-anchored centers, 10.5M sq ft, West Coast). Announced **Nov 6, 2024**: BREP X at $17.50 per share in cash, "valued at approximately $4 billion, including outstanding debt," a 34% premium to the price before July 2024 sale reports. **Closed Feb 12, 2025.** Sources: https://www.sec.gov/Archives/edgar/data/1407623/000119312524252089/d826282dex991.htm ; https://www.sec.gov/Archives/edgar/data/1407623/000119312525025059/d915895dex991.htm
  - Gray, 4Q'24 call: "the privatization of a grocery-anchored retail REIT – our third take-private in real estate in 2024" (official transcript 4Q'24).
- [R2] **Gray on these deals, 1Q'24 call (Apr 18, 2024):** "Just last week, we announced the $10 billion take-private of high-quality rental housing platform 'AIR Communities,' which follows our announcement in January to privatize Tricon Residential. Rental housing remains a major investment theme for us given the structural shortage in this space – the U.S. is building roughly the same number of homes today as in 1960, despite having almost twice the population." (official transcript 1Q'24)
- **Alexander & Baldwin** (Hawaii commercial REIT) taken private for **$2.3B** by a joint venture of MW Group, Blackstone Real Estate and DivcoWest.
  - Announced Dec 10, 2025 (Simpson Thacher, https://www.stblaw.com/about-us/news/view/2025/12/10/alexander-baldwin-to-be-taken-private-in-$2.3-billion-transaction).
  - Completed about Mar 12, 2026 **[title only]**, https://www.placera.se/pressmeddelanden/alexander-baldwin-alexander-baldwin-is-taken-private-in-2-3-billion-transaction-20260312
- **Texas grocery-anchored retail purchase, $442M**, partly financed with CMBS, Feb 2026 **[title only]**, https://therealdeal.com/texas/2026/02/25/blackstone-taps-cmbs-to-fund-part-of-442m-texas-grocery-buy
- **Office.**
  - Jan 30, 2025: Bloomberg reported Blackstone in talks for a Manhattan office tower at 1345 Sixth Ave; Bisnow reported that Gray said office "has bottomed" **[titles only]**. https://therealdeal.com/new-york/2025/01/30/blackstone-in-talks-to-acquire-1345-sixth-avenue ; https://www.bloomberg.com/news/articles/2025-01-30/blackstone-set-for-new-york-office-comeback-with-midtown-tower
  - Jun 18, 2025: bought **40% stakes in two Meta-leased office buildings** in Bellevue, WA, valued at **$545M** combined, from Shorenstein (Bloomberg Law, https://news.bloomberglaw.com/private-equity/blackstone-snaps-up-stakes-in-office-buildings-leased-by-meta).
  - Mar 13, 2025: Bloomberg headline that Blackstone's $17B property-lending arm "isn't giving up on its office bets" **[title only]**.
  - Gray did not discuss office on the 3Q'26 call (Webull transcript).

**Europe and UK**
- **Tritax Big Box (UK logistics).** Blackstone moved about **£1B** of UK warehouses, including a Tesco distribution center near Birmingham, to Tritax Big Box REIT for cash plus an equity stake, keeping indirect exposure.
  - Source: Catenaa, Dec 19, 2025, https://catenaa.com/industries/real-estate/blackstone-struggles-to-exit-massive-european-real-estate-platforms; TipRanks headline "Blackstone to sell GBP 1B portfolio of warehouses to Tritax Big Box REIT" **[title only]**.
  - The same Catenaa article says Blackstone has sold or agreed to sell "nearly **€50 billion** of European assets since 2022," much of it through internal recapitalizations, and that it "is facing growing difficulty selling its largest European real estate platforms."
- **Rebalancing.** An item dated Mar 18, 2026 says Blackstone sold legacy commercial real estate in Jan 2026 and is shifting toward data centers, logistics and **trophy offices**. It gives no figures and the source is low quality: https://www.pulse.bot/real-estate-investing/news/blackstone-rebalances-cre-portfolio-toward-data-centers-logistics-and-trophy-offices-d6749267-32ad-442d-beac-29fb6b2e42ef/

**Japan**
- **Tokyo Garden Terrace Kioicho** (Chiyoda-ku, Tokyo), bought from Seibu Holdings.
  - Announced Dec 12, 2024, for about **¥400B**. Transfer was scheduled for Feb 28, 2025. Seibu expected a gain of ¥260.4B.
  - Source: Jiji via Nippon.com, https://nippon.com/en/news/yjj2024121200978
  - Headlines give about US$2.6B and call it Japan's largest-ever real estate investment by a foreign investor **[titles only]**.
  - [R2] Gray, 4Q'24 call (Jan 30, 2025): new commitments included "a luxury mixed-use complex in Tokyo, representing the largest-ever real estate transaction in the country by a non-Japanese investor" (official transcript 4Q'24). Mingtiandi (Feb 1, 2026) says the acquisition completed in 2025 at $2.6B. https://www.mingtiandi.com/real-estate/finance/blackstone-real-estate-revenue-climbs-8-on-data-centre-boom/
- [R2] **Tokyo C-NX logistics hub** (Koto-ku, Tokyo; Nippon Express's largest facility in Japan; 151,345 sq m on a 59,504 sq m site; completed 2017).
  - Price about **¥100B (~US$641M)**. Purchase agreement expected Dec 25, 2025; transfer Feb 27, 2026.
  - Per Mingtiandi (Dec 23, 2025), Mizuho Leasing was named as the buyer of record, with Blackstone identified by market sources and Nikkei as the ultimate buyer. https://www.mingtiandi.com/real-estate/logistics/blackstone-buying-tokyo-warehouse-from-japans-nippon-express/
  - Blackstone's own press release ("...Largest Logistics Transaction in the Country This Year") exists at blackstone.com but was blocked (HTTP 403) and not read [title only].
- **Nippon Life partnership** (2Q'26). Blackstone expects to deploy about **$10B** of private credit over several years and to invest in Nippon Life's domestic real estate portfolio (MarketBeat 2Q'26).
  - [R2 更正：官方逐字稿全文] "We announced a new partnership with Japan's largest life insurer, Nippon Life, in which we'll deploy approximately $10 billion in private credit over the next several years, and also invest in their domestic real estate portfolio. This builds on our existing relationship with Nippon Life through their investments in Corebridge and Resolution Life — both of which are major partners of ours." (Gray, official transcript 2Q'26)
  - [R2] Background: in Dec 2024 Nippon Life agreed to buy the rest of Resolution Life at a $10.6B valuation, which monetized Blackstone's 6% stake. Blackstone remained Resolution's investment manager (Gray, official transcript 4Q'24).

**[R2] Hong Kong**
- **New World Development talks, not concluded.**
  - Jan 29, 2026: The Standard, citing Bloomberg, reported New World was "close to an agreement" that would make Blackstone its largest shareholder, with the Cheng family (about 45%) giving up control. https://www.thestandard.com.hk/market/article/323085/New-World-close-to-deal-giving-Blackstone-control-stake-Bloomberg-reports
  - Mar 4, 2026: Reuters (via NST), citing Bloomberg, reported talks had stalled over control. The proposed structure was about US$2.5B from Blackstone into an SPV, plus US$1–1.5B from the Cheng family. Chow Tai Fook Enterprises holds 45.24%. Blackstone declined to comment. https://www.nst.com.my/amp/property/2026/03/1389754/blackstones-us4bil-new-world-talks-stall-over-control
  - No signed deal was found as of Nov 2026 [UNVERIFIED].

**[R2] India real estate**
- Dec 29–30, 2025: Blackstone's **Horizon Industrial Parks** (Blackstone ~88%; 58M sq ft, described as India's largest warehousing platform) filed a draft REIT prospectus for an INR 26B (~$300M) IPO. **Bagmane Prime Office REIT**, in which Blackstone took a minority pre-IPO stake in Dec 2024, filed for INR 40B. Source: Mingtiandi, Dec 30, 2025, https://www.mingtiandi.com/real-estate/finance/blackstones-horizon-industrial-bagmane-file-for-india-reit-ipos/
- 2Q'26 call (Gray): among three IPOs Blackstone executed since May 2026 was "an office REIT in India" (official transcript 2Q'26). Which REIT this was is not named [UNVERIFIED].
- Knowledge Realty Trust (Blackstone–Sattva office REIT) IPO in Aug 2025: search headlines only, page not opened [title only / UNVERIFIED].
- Gray, 1Q'24 call: "The economy in India, which I visited two weeks ago, remains incredibly strong. We're fortunate to have what we believe is the largest private equity and real estate platform in that country." (official transcript 1Q'24)

**Asia private equity and India**
- The Asia PE flagship closed at **$13.1B**, more than double the prior vintage, whose net annual return was 27%.
- Gray credited Japan and India for the Asia results.
- Source: MarketBeat 2Q'26.
  - [R2 更正：官方逐字稿全文] "Our Asia PE flagship held its final close in the second quarter, raising $13.1 billion — more than double the previous vintage — on the back of a 27% net annual return in the prior fund since inception. Our decision to focus on India — where we believe we have the largest alternatives business — and Japan has been a key driver of this performance." (Gray, official transcript 2Q'26)
  - [R2] The fund-raise path on official calls: first close $4.4B (1Q'25); $8B (2Q'25); over $9B (3Q'25); over $10B (4Q'25); nearly $12B (1Q'26); $13.1B final (2Q'26). Prior vintage about $6B.
  - [R2] 3Q'26 (Chae): the largest source of Q3 net realizations was "multiple exits in our Asia portfolio – specifically in Japan and India." (official transcript 3Q'26)
  - [R2] Gray, 1Q'24 call, speaking about real estate deployment: "We have most of our eight plus billion-dollar Asia fund still uninvested so a lot of opportunistic capital to deploy" (official transcript 1Q'24). The fund is not named. The size matches BREP Asia III ($8.23B committed per the FY2025 10-K), but that identification is an inference.

**[R2] Australia**
- Gray, 3Q'26 prepared remarks, on investment-grade private credit: "Our recent activity includes large-scale financings in numerous sectors around the world, including communications infrastructure and an airline loyalty program in Canada, residential real estate in Australia, and digital and energy infrastructure globally." No deal size was given (official transcript 3Q'26). Apart from AirTrunk, no 2024–2026 Australian real estate equity deal was verified in this pass.

**Other private equity deals cited by Schwarzman on the 4Q'25 call**
- Eight privatizations in 2025, including **Hologic, $18B**.
- **Medline IPO, $7.2B**, the largest IPO since 2021.
- Source: 4Q'25 Fool transcript.

### B7. Private credit: growth, stress and actions

**Growth**
- Credit & Insurance segment LTM inflows: **$142.8B** at 3Q'26, up from $80.2B LTM at 3Q'24 (releases).
- Investment-grade private credit: **$130B** at 4Q'25 (up 30%), still about $130B at 1Q'26 (up 23%).
- $50B of investment-grade credit placed or originated in 2025, at about 180 bp of extra spread.
- Sources: 4Q'25 Fool transcript; Fool 1Q'26.

**Private credit returns (from the releases)**

| Period | Gross | Net |
|---|---|---|
| FY24 | 15.7% | 11.6% |
| FY25 | 11.2% | 7.8% |
| LTM to 1Q'26 | 8.9% | 5.7% |
| LTM to 2Q'26 | 6.8% | 3.9% |
| LTM to 3Q'26 | 6.7% | 3.9% |
| 1Q'26 (quarter) | 0.6% | (0.0)% |

**BCRED (non-traded BDC) flows**

| Quarter | Gross sales | Repurchase requests | Outcome | Net flow | Source |
|---|---|---|---|---|---|
| 4Q'25 | $3.3B | n/a | n/a | **+$1.2B** | Gray, 4Q'25 Fool transcript |
| FY2025 | over $14B | n/a | n/a | n/a | same |
| 1Q'26 | $1.9B | record **7.9%** of shares | Offer upsized to 7%. Blackstone and its employees put about **$400M** into a BCRED feeder fund so that 100% of requests were met. | **−$1.4B** | AltsWire, https://altswire.com/blackstones-bcred-to-prorate-q2-tender-as-demand-hits-10-holds-5-cap-after-upsizing-in-q1/ ; MarketBeat 1Q'26 |
| 2Q'26 | about $1B | about **10%** of shares (~$4.5B) | Prorated at the 5% cap, about 50% met, ~$2.3B backlog | **−$1.2B** | BNN Bloomberg, Sept 3, 2026, https://www.bnnbloomberg.ca/business/company-news/2026/09/03/blackstone-private-credit-fund-maintains-5-cap-as-redemption-requests-remain-high ; MarketBeat 2Q'26 |
| 3Q'26 | about $750M | about 10% (~$4.3B), "largely driven by carryover requests" | 5% cap, about 50% met | **−$1.4B** | Gray, 3Q'26 Webull transcript; BNN Bloomberg |

- [R2 更正：官方逐字稿全文, 3Q'26 row] "For BCRED: gross sales were nearly $750 million in the third quarter. Repurchase requests were 10% of NAV – above the 5% quarterly limit, largely driven by carryover requests from Q2. We fulfilled approximately 50% of total requests, resulting in net outflows of $1.4 billion in the third quarter. Investors who requested a redemption each of these two quarters of proration received 75% of their capital back in about 90 days – another illustration of the semi-liquid structure working as designed." (Gray, official transcript 3Q'26)

**BCRED fund metrics**
- 1Q'26: NAV per share $24.19, down from $24.79 at year-end 2025 (third straight quarterly decline). Non-accruals 2.4% at cost.
- At Apr 30, 2026: debt portfolio marked at 96.1. The bottom 5% of positions marked at 68.3. Debt/equity 0.8x. Liquidity above $15B.
- Fund size about **$77.2B** (Sept 2026).
- YTD 2026 return 0.9%, which trails peers (Evercore's Glenn Schorr, per BNN Bloomberg).
- Sources: AltsWire (1Q'26, Apr 30 data); BNN Bloomberg (Sept 2026 data).

**What Blackstone says about BCRED liquidity and credit quality**
- Investors who sought liquidity in 2Q and 3Q "will have received an estimated 75 per cent of their requested capital" (BNN Bloomberg).
- Redemption limits are a "feature" of the products (Gray, 1Q'26).
- Software loans in BCRED carry a 37% loan-to-value (Fool 1Q'26 summary).

### B8. Fundraising and other actions (selected)

- **Inflows records.** 4Q'25 inflows of $71.5B were the highest in about 3.5 years, and 1Q'25's $61.6B was the highest in nearly three years (releases).
- **Fund closes in 1Q'26** (Fool 1Q'26):
  - Life-sciences fund BXLS VI: $6.3B.
  - Secondaries flagship: $6B raised in the quarter.
  - Fifth opportunistic credit strategy: over $7B raised toward a $10B target (4Q'25 call).
- **IPO pipeline (2Q'26):** three IPOs completed since May and eight on file globally. U.S. IPO activity in 1H'26 was about 6x the year before (MarketBeat 2Q'26).
- **Realizations outlook.** In 2Q'26, CFO Chae expected slower 3Q realizations, then a "robust" 4Q and 2027 (MarketBeat 2Q'26). Net realizations in 3Q'26 were $332M, down 34% (TIKR, https://www.tikr.com/blog/blackstone-soars-6-on-earnings-beat-as-schwarzman-says-inflows-reached-63-billion).

---

## C. WORDS: direct quotes, 2024–2026

Each quote is cut to 125 characters or fewer by the fetch tool. "Verbatim" means verbatim from the cited secondary transcript or article.

[R2] Quotes marked **[R2 更正：官方逐字稿全文]** were checked against the official Blackstone transcript PDFs (URL list in the file header) and give the full sentence. Unmarked call quotes from 2024–2026 calls were either matched with only trivial wording differences or come from interviews, which the official call transcripts do not cover. Quotes the official transcript does **not** contain are flagged individually.

### 2024

**Jon Gray**
- **Jan 2024, 4Q'23 earnings call:** "[We] believe values in commercial real estate are bottoming." Reported by GlobeSt, https://www.globest.com/2024/11/05/blackstones-jon-gray-recurring-bottom-calls
  - [R2 更正：官方逐字稿全文; the call date is **Jan 25, 2024**] Prepared remarks: "We believe we're now heading into a better environment as Steve noted, with inflation and cost of capital headwinds moderating. This backdrop is leading to the emergence of three powerful dynamics across our business: first, we believe that real estate values are bottoming; second, our momentum in the private wealth channel is building; and third, investment activity has picked up meaningfully across the firm, which is a key element of creating future value."
  - [R2] Continued: "First, as I said, we believe values in commercial real estate are bottoming. This doesn't mean there won't be more troubled real estate investments to come in the market, particularly in the office sector, which were set up during a period when borrowing costs were much lower. Nor does it mean we won't see a slowing in fundamentals in certain sectors with excess near-term supply. What it does mean is that the cost of capital appears to have peaked, as borrowing spreads have begun to tighten and the Fed is no longer raising rates, but likely cutting them in 2024. Also importantly - new construction starts have started to move down sharply in commercial real estate, which is quite positive for long-term values."
  - [R2] On deployment: "We are, of course, not waiting for the all clear sign and believe the best investments are made during times of uncertainty." He cited the $3.5B Tricon take-private, a $7B data-center development partnership with Digital Realty, and a 20% stake in a $17B Signature Bank loan portfolio with the FDIC. "Blackstone Real Estate has $65 billion of dry powder to invest into this dislocated market." He added that in Q4'23 fund values "declined by 4% to 4.5%," mainly from interest-rate hedges (official transcript 4Q'23).
  - [R2] On the 2024 U.S. election (Q&A): "transaction activity is going to be more tied to the Fed's activities than the election" (official transcript 4Q'23).
- **[R2] Apr 18, 2024, 1Q'24 call, on overseas wealth demand:** "Japan is a market where we certainly have seen more openness to our products, and we've had success there. Historically, some of the markets more tied to China, Hong Kong, Singapore are a little slower today, but we've had strength in those markets over time also. And Europe, I'd say is an emerging market as is Canada. So I think it's a global story. It's still primarily U.S., but it's growing." (official transcript 1Q'24)
- **[R2] Jul 18, 2024, 2Q'24 call, on Japan regulation:** "We've seen some changes in places like Japan that were conducive to selling some of these private wealth products. And I think we will, over time, hopefully see changes in Europe..." (official transcript 2Q'24)
- **[R2] Jun 2024, Nikkei interview (via InvestingLive, Jun 10, 2024)**, on Japan: "There are a number of factors that have come together that have really accelerated growth." He cited "the return of inflation to the Japanese economy," "the strength in the stock market," the Kishida government's push to shift households from saving to investing ("very important"), and "the encouragement of companies to focus on return on equity and to look at selling noncore divisions." The headline says Blackstone plans to invest $9.6B in Japan by 2027, but the text does not attribute that figure to Gray [figure UNVERIFIED]. https://investinglive.com/news/blackstone-is-planning-to-invest-96-billion-in-japan-by-2027-20240610
- **[R2] Nov 20, 2024, National Taiwan University (School of Political Science and Economics) "Global Finance Forum: Conversation with Masters."** Gray took part. The event page lists thematic investing and "AI-driven investment strategies" as topics, and records no remarks on Taiwan, China or real estate. https://spe.ntu.edu.tw/news-events/global-finance-forum-jonathan-gray-in-conversation
- **Mar 15, 2024, Bloomberg interview** (as republished by MarketWatch on blackstone.com, https://www.blackstone.com/news/in-the-news/marketwatch-real-estate-prices-are-bottoming-and-its-now-time-to-buy-blackstone-president-says):
  - "when you get into this bottoming period, that's when you want to move."
  - "Perception is so negative, the headlines are negative, yet the value decline has occurred."
  - "Now is probably a good time, before rates come down, to move."
  - "We're seeing cost of capital start to come down, spreads are starting to tighten."
  - Sectors he named: "logistics benefiting from e-commerce, digital infrastructure, student housing, hotels."
  - On office: "work from home, which has really hit the office sector."
- **2024, exact date not given** (Hospitality Investor, https://www.hospitalityinvestor.com/investment/why-blackstone-thinks-we-are-getting-closer-real-estate-inflexion-point):
  - "getting closer to that inflection point"
  - "The 10-year back down here at 4 per cent"
  - "this very constructive decline in new supply"

**Stephen Schwarzman**
- **[R2] Jan 25, 2024, 4Q'23 call:** "We see a resilient economy, albeit one that is decelerating. What we're seeing is consistent with a soft landing." / "I'll believe that we'll look back at 2023 as the cyclical bottom for our firm." (official transcript 4Q'23; "I'll believe" is as transcribed)
- **Apr 18, 2024, 1Q'24 release:** "We are well positioned to navigate today's dynamic market landscape"
- **[R2] Apr 18, 2024, 1Q'24 call:** "The most compelling of these today include: the secular rise of private credit ...; infrastructure; energy transition; life sciences; and the expansion of alternatives globally, in particularly in Asia." (official transcript 1Q'24)
- **[R2] Jul 18, 2024, 2Q'24 call:** "in India, where we believe Blackstone is the largest alternatives investor in what has become the fastest-growing major economy". Near-term plans include "expanding our business in Asia." (official transcript 2Q'24)
- **Jul 18, 2024, 2Q'24 release:** "the highest level of investment activity in two years"; "We are planting the seeds of future value creation."
- **Oct 17, 2024, 3Q'24 release:** "highlighted by broad-based acceleration across our business."
  - **[paraphrase]** $54B invested or committed in the quarter, the highest in over two years, and $123B deployed over the LTM "since the cost of capital peaked."
- **Oct 2024, 3Q'24 call:** "Today, Blackstone is the largest data center provider in the world with holdings across the US, Europe, India, and Japan" (DCD).
  - Gray on the same call: "we've grown eightfold in lease capacity" since buying QTS.
  - [R2 更正：官方逐字稿全文; call date Oct 17, 2024] Schwarzman: "Today, Blackstone is the largest data center provider in the world with holdings across the U.S., Europe, India and Japan. Last month, we announced another major expansion by agreeing to acquire AirTrunk, the largest data center operator in the Asia-Pacific region, for $16 billion." Gray: "So, the ability to privatize QTS, a $10 billion company at the time, which we've since grown eightfold in lease capacity, we did that jointly with infrastructure and various BREIT and BPP and real estate."
  - [R2] Schwarzman listed "the emergence of India as one of the most important major economies" among client themes. Gray: "I think we're in the middle of a broad-based recovery in real estate. We're trying to capture that as much as possible, U.S., Europe, and Asia deploying capital." (official transcript 3Q'24)

### 2025

**Stephen Schwarzman**
- **[R2] Jan 23, 2025, Davos (World Economic Forum), Q&A after Trump's virtual address.** Schwarzman's question in full: "Well, Mr. President, I'm sure the Crown Prince of Saudi Arabia will be really glad you gave this speech today. You've had the busiest four days that anybody can imagine, and congratulations for that. And my question is about some of the things I've observed here at Davos. It's a terrific forum. I've met lots of people, as usual. I think I've been here 30 years. And a lot of the European businesspeople have expressed enormous frustration with the regulatory regime in the EU. And they attribute slower growth rates here because of the numerous factors, but especially because of regulations. And you've taken a completely different approach in this area. And if you could explain the theory of what you're doing, how you're going to do it and what you expect the outcome to be, I'd appreciate it." Source: Roll Call Factba.se transcript, https://rollcall.com/factbase/trump/transcript/donald-trump-speech-virtual-world-economic-forum-january-23-2025/ . He made no remark on China, Taiwan or Japan in this exchange.
- **Jan 30, 2025, 4Q'24 release:** "Blackstone reported one of the best quarters in our history." "As we move forward in 2025, the firm is exhibiting significant momentum."
- **[R2] Jan 30, 2025, 4Q'24 call, Gray on tariffs and China exposure** (asked about "invested capital exposure to Europe, Asia and then specifically China"): "we don't have a lot of businesses who export physical goods at scale to the United States. So, I think that's obviously the area at most risk. ... Clearly, tariffs are going to be higher. But, you know, we don't know which countries, which industries and what the level is. And there seems to be a lot of negotiation. This tariff diplomacy, as we saw in Colombia a week ago, can move pretty dramatically in a short period of time. ... And so, we just don't see it either in Europe and Asia having a major impact on our business." Chae's geographic split (75% U.S. / ~15% Europe / single-digit Asia) is in section A. Neither gave a China figure (official transcript 4Q'24).
- **[R2] Mar 12, 2025, Mumbai (Blackstone's 20th anniversary in India), per Reuters via Our Today:** on U.S. tariffs, they "will result at the end of the day in a significant increase in manufacturing activity in the United States," and "Given the size of the U.S., that tends to be a good thing for the world." Also: "India needs infrastructure and this is something as an objective we'd like to do." https://our.today/blackstone-backs-trumps-tariff-move-says-it-will-boost-us-manufacturing
- **[R2] Mar 24, 2025, Beijing, meeting with Vice Premier He Lifeng (Xinhua via gov.cn, Mar 25, 2025)** **[paraphrase; Xinhua gives no direct quote]:** Schwarzman "expressed confidence in China's economic development" and said Blackstone intends to deepen its involvement in the Chinese market and help strengthen U.S.–China economic and trade cooperation. He Lifeng urged more U.S. companies and long-term capital to cooperate with China. https://english.www.gov.cn/news/202503/25/content_WS67e24c1cc6d0868f4e8f127f.html
- **Apr 17, 2025, 1Q'25 release:** "Inflows reached $62 billion — the highest level in nearly three years —" ; "We are well positioned to navigate the current environment"
- **Apr 17, 2025, 1Q'25 call, during the tariff turmoil.** Sources: CoStar, https://www.costar.com/article/918881581/blackstone-sees-buying-opportunity-in-economic-gyrations-from-shifting-us-tariff-policy ; WSJ/Dow Jones via Tiger, https://www.itiger.com/news/2528872791
  - Schwarzman:
    - "The complexity of the situation means patience and the staying power is key,"
    - Tariff effects are "too early to see what the impact will be."
    - "A fast resolution is critical to keep the economy on the growth path."
    - "how sustained will this period of uncertainty be"
    - "some of the best times to deploy capital are in a risk-off world when sentiment is most negative."
    - Blackstone is "less likely to sell in the near term" in a volatile market.
    - **[paraphrase]** The economy "remains strong except in a few areas such as real estate."
    - [R2 更正：官方逐字稿全文, Schwarzman prepared remarks, official transcript 1Q'25]
      - "Uncertainty around tariffs, and their potential impact on economic growth and inflation, has dramatically impacted investor sentiment. It's early—it's too early—to assess the full implications of tariffs, which depend on the outcome of unprecedented multilateral negotiations, with perhaps over 100 countries around the world. The complexity of the situation means that patience and staying power are key. Importantly, the economy entered this period in a fundamentally strong position."
      - "We believe a fast resolution is critical to mitigate risks and keep the economy on a growth path." / "How sustained will this period of uncertainty be?"
      - "Our experience through many economic and market downturns has taught us that some of the best times to deploy capital are in a risk-off world when sentiment is most negative."
      - "More volatile markets do mean we are less likely to sell in the near term – although that can change if conditions improve."
      - "In terms of announced tariffs, we believe that the direct first-order exposure across our portfolio is limited, although there is potentially material impact to a relatively small group of our companies. In real estate specifically, tariff effects are likely to drive up construction costs and further reduce new supply, which is supportive for real estate values absent recessionary conditions. Construction starts in our two largest sectors in real estate—U.S. logistics and apartments—have already fallen to their lowest levels in more than a decade."
      - The phrase "remains strong except in a few areas such as real estate" is **not** in the official transcript; it likely comes from a separate interview (WSJ).
  - Gray:
    - Tariffs could "create a little speed bump" for the real estate recovery.
    - "We are still in that early recovery phase for real estate."
    - "other than office, there's little problem"
    - "The lack of new supply and the cost of capital are going to be the foundation for recovering real estate."
    - "The overall system is much less leveraged"; "You tend to have much less systematic risk."
    - "When stock prices trade off, the receptivity from boards [of directors] to our prices may be better."
    - "The faster this tariff diplomacy can play out, the better it would be for the economy and markets."
    - [R2 更正：官方逐字稿全文, Gray, official transcript 1Q'25]
      - "This may just create a little bit of a speed bump here, but the underlying facts of a lack of new supply, cost of capital coming down, that's going to be the foundation for a recovery in real estate, and I think investors will want to go to it."
      - "We're still in that sort of early recovery phase."
      - "You look in commercial real estate again, even though we've been through a cycle, other than office buildings, there's been very little in the way of problems, again because there wasn't a lot of leverage going in. So the lessons from the financial crisis have really carried over and that's why, even when we get a shock, there may be individual industries that are impacted, but you tend to have much less systemic risk." (The official word is "systemic," not "systematic.")
      - "On the credit side, the reason you're not seeing, I believe, credit stresses as you have in the past is because the overall system is much less leveraged."
      - "And when stock prices trade-off, you know, the receptivity from boards to our prices may be better."
      - "I do believe the push by the administration, the comments by the Treasury Secretary this week, that they were hopeful to make some quick deals with some of our major trading partners. I think that will be very helpful, because I do think that the faster this tariff diplomacy can play out, the better it would be for the economy and markets."
      - On Europe and Asia: "We have not really seen on a broad base, you know, clients globally or private wealth, as you mentioned in Japan, seen sort of any material pullback as a result of some of these tensions, at this juncture ... Interestingly, you know, we have benefited as a large foreign investor from, you know, currency strengthening in places like the UK, Europe, and yen. ... I will say also, we're seeing a little more interest in diversifying a bit. And so, for some of our exits in Europe and Asia, it may end up facilitating some things as investors diversify. But I'd still say it's early days, and my hope would be some of this stuff settles and we can sort of get back to terra firma."
      - "having $177 billion of dry powder and some real long-term conviction in the sectors we like: digital infrastructure, energy and power, life sciences, alternatives, the recovery in commercial real-estate, what's happening in India and Japan, we're going to see this as an opportunity to put out more capital."
- **Jul 24, 2025, 2Q'25 release:** "the highest overall amount of fund appreciation in nearly four years."
- **Oct 23, 2025, 3Q'25 call, on First Brands and Tricolor** (Yahoo Finance/Fortune, https://finance.yahoo.com/news/blackstones-steve-schwarzman-says-efforts-235328105.html):
  - The bankruptcies "are widely believed to involve the fraudulent pledging of the same collateral to multiple parties"
  - "These events have been erroneously linked to the traditional private credit market"
  - The problems were in "bank-led and bank-syndicated credits, not private credit."
  - "we'll see some increases in defaults"
  - "our investment-grade focused private credit platform in BXCI has experienced zero realized losses to date"
  - [R2 更正：官方逐字稿全文, Schwarzman, official transcript 3Q'25]
    - "Moreover, these situations are widely believed to involve the fraudulent pledging of the same collateral to multiple parties."
    - "These events have been erroneously linked to the traditional private credit market, as a result of misunderstandings and misinformation."
    - "Importantly, the defaults in focus resulted from bank-led and bank-syndicated credits – not private credit."
    - "Of course, as the cycle progresses, it's reasonable to assume we'll see some increases in defaults – but we believe our structural advantages will continue to produce superior results."
    - "And our investment-grade-focused private credit platform in BXCI has experienced zero realized losses to date."
- **[R2] Oct 16, 2025, Beijing, meeting with Foreign Minister Wang Yi (CGTN, Oct 17, 2025)** **[paraphrase; no direct quotes in the source]:** Schwarzman said U.S.–China relations significantly affect the world, and that he hopes both sides will improve communication, clear up misunderstandings and pursue shared development. Wang called decoupling and supply-chain cutting "unrealistic" and "irrational." https://news.cgtn.com/news/2025-10-17/Top-Chinese-diplomat-meets-with-chairman-of-Blackstone-Group-1HxhZSEdBiU/p.html
- **[R2] Oct 23, 2025, 3Q'25 call, Gray on Japan:** "We did do a launch in Japan, which we think is a very important market. I think it's the country in the world with the second most in savings. And the leadership there has done, I think, a really terrific job of pivoting their citizenry from being savers to being investors. And they've opened up alternatives, both offshore and onshore, and that's really important. Because Steve, going back 40 years, has thought about Japan as a key market, we've got a really strong brand there, made a big difference. He was recently there." This was in answer to a question about Blackstone's first TV advertisement in Japan (official transcript 3Q'25).
  - Schwarzman, same call, on Gray's record: "resulting in our concentration today in data centers (where we're the largest in the world), energy and power, logistics, private credit, and India, among other winning areas." (official transcript 3Q'25)
- **Oct 23, 2025, 3Q'25 release:** "The leading platforms we've established in key growth areas, such as digital and energy infrastructure," "are helping power investment performance for our clients and position us extraordinarily well for the future."

**Other Blackstone voices, 2025**
- **Jan 30, 2025:** Bisnow headline reports Gray saying office "has bottomed" **[title only]**, https://bisnow.com/national/news/office/blackstones-gray-says-office-has-bottomed-eyes-15m-sf-manhattan-tower-127807
- **Oct 29, 2025, House of Lords, Daniel Leiter** (Blackstone Credit & Insurance global head of liquid credit): "There has been a lot of misinformation on this credit issue"; "this was not a private credit origination." Source: https://alternativecreditinvestor.com/2025/10/29/private-credit-bigwigs-hit-back-at-misinformation-over-first-brands-collapse/
- **About late Oct 2025, CNBC interview, Gray on AI:** "huge investment boom in chips and data centers"; "very large prize."
  - **[paraphrase]** He rejected bubble claims by pointing to efficiency gains already visible. He conceded some capital will be misallocated, comparing this to railroads and the internet.
  - Source: 24/7 Wall St, Nov 1, 2025, https://247wallst.com/investing/2025/11/01/what-blackstones-president-just-said-about-ai-should-get-nvidia-investors-really-excited/

### 2026

**Jan 29, 2026, 4Q'25 call** (Fool transcript, https://www.fool.com/earnings/call-transcripts/2026/01/29/blackstone-bx-q4-2025-earnings-call-transcript)

The transcript's speaker labels are inconsistent. Opening-remark quotes are labeled "Michael Chae" but are probably Schwarzman.
[R2 更正：已核實] The official transcript confirms the opening remarks are Schwarzman's.

- Opening remarks:
  - "a fundamentally strong economy underpinned by the ongoing technology AI-driven investment boom"
  - "encouraged by what we were seeing on the ground in terms of moderating inflation"
  - "impacted by tariff uncertainty, geopolitical instability, and the longest government shutdown in US history"
  - [R2 更正：官方逐字稿全文, Schwarzman, official transcript 4Q'25]
    - "What we saw in the data was a fundamentally strong economy underpinned by the ongoing technology and AI-driven investment boom." (Fool omitted "and".)
    - "We were also encouraged by what we were seeing on-the-ground in terms of moderating inflation in the context of limited input and labor cost growth at our companies, as well as our real-time understanding of shelter costs given our unique position in real estate."
    - "We achieved these results amid the turbulent year for markets, which was impacted by tariff uncertainty, geopolitical instability, and the longest government shutdown in US history."
    - "our data gave us the confidence to lean into key thematic areas such as digital infrastructure—including data centers, power, and electrification—private credit, life sciences, and from a regional perspective, India and Japan. These areas have been among the largest drivers of appreciation in our funds."
    - "Blackstone is extremely well-positioned to benefit against this backdrop given our scale and expertise in these areas, including our ownership of the world's largest datacenter platform as well as our position as a major investor in the modernization and growth of the US electric grid."
- Gray on real estate:
  - "We said the cycle was bottoming two years ago, but that the recovery would not be a straight line."
  - "we think real estate has plenty of room to run" (CoStar)
  - "logistics is clearly in a better position today, which is our biggest asset class"
  - "when you stop building new supply, that should be supportive of rental values over time"
  - **[paraphrase]** Real estate values are down 16% since the rate cycle began, against +75% for the S&P 500. U.S. logistics and multifamily construction starts are at their lowest in over 12 years, and multifamily starts are down about two-thirds from peak.
- Gray on private credit: "Despite the external noise today in private credit, facts do matter, and our portfolio overall is in excellent shape"
- Gray on regions:
  - "Direct lending in Europe is a compelling area."
  - "Japan, which is a market that obviously has long-term stickiness."
  - "The big focus we have had in India, as the leading foreign investor there in private equity and real estate"
- Gray on spreads **[paraphrase]**: investment-grade corporate spreads are the tightest since 1998, at about 71 bp.
- [R2 更正：官方逐字稿全文, Gray, official transcript 4Q'25]
  - "We said the cycle was bottoming two years ago, but that the recovery wouldn't be a straight line." / "We think real estate has plenty of room to run."
  - "However, since the interest-rate cycle began approximately four years ago, real estate values are still down 16% compared to an increase of 75% for the S&P 500."
  - "So, I would say, overall, logistics is clearly in a better position today, which is our biggest asset class." / "That takes a while to work through the system, but when you stop building new supply, that should be supportive of rental values over time."
  - "Despite the external noise today in private credit, facts do matter, and our portfolio overall is in excellent shape, including high single-digit EBITDA growth on average for our direct lending borrowers for the most recent annual period."
  - "First, corporate investment-grade bond spreads are at their tightest level since 1998, and we've been seeing insurers, and now some pensions and sovereign wealth funds, looking to earn materially higher spreads at the same or lower risk levels."
  - **Context for the Japan quote:** it answers a question on the geographic mix of Blackstone's *private wealth investor base*, not on investments. "What I would say is the vast majority of the capital comes from the US. Within Asia, I think the next biggest market for us globally is Japan, which is a market that obviously has long-term stickiness. And then we've had recent great success in Canada. We do have an investment base in Hong Kong and Singapore and we're spreading out around the globe, but it continues to be a US-dominated business with Japan now a strong number two for us." Mingtiandi (Feb 1, 2026) read this as Japan being the "next-largest target outside the US" for investment. Per the official transcript, it refers to wealth capital sources.
  - "You see this geographically, the big focus we've had in India, probably as the leading foreign investor there in private equity and real estate, our push into Japan as well, which has paid off for us so well, and in Asia overall."
  - On IPOs: "I do think it will be more US-focused, but I think we'll do a number of things in India and that's a place where we'll see probably more real estate activity as well just because of the underlying health of that economy and that IPO market. Europe is slower, but it feels broad-based to us and getting better."
- Release, Schwarzman: "Our focus on investing at massive scale in the buildout of digital and energy infrastructure" "continues to create significant value for our investors."

**[R2] Davos 2026 (WEF annual meeting, Jan 19–23, 2026):** no remarks by Schwarzman or Gray at Davos 2026 were found. Searches of news coverage, including WEF/BlackRock-focused reports, returned no Blackstone executive quotes from that week, and it could not be confirmed whether either attended **[UNVERIFIED; 公開查無]**. (Schwarzman's documented recent Davos remark is the Jan 23, 2025 question to Trump, under 2025 above.)

**Jan 29, 2026, Bloomberg** **[title only]:** "Blackstone's Gray Sees AI Disrupting Industries as Biggest Risk." https://www.bloomberg.com/news/articles/2026-01-29/blackstone-s-gray-sees-ai-disrupting-industries-as-biggest-risk

**Feb 3, 2026, WSJ Invest Live, West Palm Beach, Gray** (Reuters via The Star, https://www.thestar.com.my/tech/tech-news/2026/02/04/blackstone039s-gray-says-ai-disruption-risk-is-039top-of-the-page039-for-us):
- AI disruption is "top of the page."
- "You want to be thinking about this in almost everything you're doing now."
- "What does that mean for auto insurance?"
- "there's going to be a lot of need for digital infrastructure"
- Picks and shovels are the safest way to play AI. AI software and LLM bets are "obviously riskier."
- Sandwich shops and apartments are "less at risk."

**Apr 23, 2026, 1Q'26 release and call**
- Schwarzman, release:
  - "Blackstone delivered outstanding first-quarter results despite the turbulent environment"
  - "Our all-weather model protects us in these times of disruption" "while also allowing us to invest where we see the greatest opportunity."
- Schwarzman, call (MarketBeat 1Q'26):
  - "over $150 billion of data centers globally"
  - "$160 billion in prospective pipeline development"
  - "the largest investor in AI-related infrastructure in the world"
  - "the most active private investor in the utility sector over the past several years"
  - An "intensely negative campaign against the private credit sector"
  - Defaults will rise from "historic lows."
- Gray, call:
  - AI disruption risk extends to "information services, professional services" and the "broader white-collar world."
  - Software exposure is "less than 7%."
  - Redeemers are "double the size" of typical BCRED investors.
  - "As investors pivot back to hard assets, as we get some calming after the war" (Bisnow).
  - "That is driving the returns across so many of our vehicles" (on AI infrastructure; Daily Upside, https://www.thedailyupside.com/technology/artificial-intelligence/blackstone-shrugs-off-private-credit-concerns-as-it-focuses-on-ai/).
  - "this should be probably our best year ever for IPOs as a firm" (Daily Upside citing Bloomberg).
- On BREIT (AltsWire): "Meanwhile, repurchases fell 41% over the same period, leading to positive net inflows for each of the past two months,"
- **[paraphrase]** Management cited the Iran war and the largest quarterly oil-price rise in over 35 years as drivers of volatility. Realizations would likely rebound if the conflict resolves (Fool 1Q'26).
- Bloomberg headline **[title only]**: "Blackstone's Gray cites AI build-out as biggest driver for firm," https://www.bloomberg.com/news/articles/2026-04-23/blackstone-s-gray-cites-ai-build-out-as-biggest-driver-for-firm
- [R2 更正：官方逐字稿全文, official transcript 1Q'26]
  - Schwarzman:
    - "Today, we believe Blackstone has become the largest investor in AI-related infrastructure in the world, and we have a front-row seat to the remarkable advancements underway in this ecosystem."
    - "We achieved these results amid a volatile market backdrop, which was impacted by geopolitical turbulence (including the war in Iran) and AI disruption fears."
    - On past shocks: "the COVID shutdown in 2020; the Ukraine invasion in 2022; the regional banking crisis in 2023; the tariff announcements in 2025; and now, the conflict in the Middle East, which triggered the largest quarterly increase in oil prices in over 35 years."
    - "We've also been navigating an intensely negative campaign against the private credit sector – despite the strong long-term returns generated in this area, resilient fund structures, and continued healthy demand from institutional investors and insurance companies."
    - "We believe we're moving toward a period of lower base rates, once we work through the impact of the Iran war, and we also expect defaults to move higher from historic lows, as we've stated previously."
    - "Of note, BDCs and credit interval funds with redemption features represent less than 10% of the US non-investment grade credit market."
  - Gray:
    - "It does include, as I mentioned, information services, professional services, really sort of the broader white-collar world." / "Our biggest exposure would be in software and that's less than 7%."
    - "Contrary to this popular idea that it's small investors that are leading the charge here, it is actually a smaller number of large investors who are double the size basically on average of the typical investor in these vehicles."
    - "And I think, by the way, interestingly, real estate, which really has been the sleeping giant at Blackstone here, as investors pivot back to hard assets, as we get some calming after the war and as the performance picks up along the lines Michael was talking about, particularly around logistics, where we're seeing very favorable supply-demand fundamentals, I think that's an area where we could start to see an acceleration."
    - On wealth distribution: "Canada for us is an exciting market. Japan, I think over time, we'll grow more in Europe, the Middle East, Asia."
  - **Not in the official 1Q'26 transcript:** "That is driving the returns across so many of our vehicles" and "this should be probably our best year ever for IPOs as a firm." Both are from media interviews (Daily Upside / Bloomberg), not the call. Gray's "feature" remark on redemption limits was also not found in the call transcript.
- **[R2] Apr 23, 2026, Beijing, meeting with Vice Premier He Lifeng (CGTN/Xinhua, Apr 24, 2026)** **[paraphrase; no direct quotes]:** Schwarzman said Blackstone values its ties with China, plans to expand its business there and wants to help foster U.S.–China economic and trade cooperation. He Lifeng said China welcomes more foreign firms, "Blackstone included," to deepen cooperation. https://news.cgtn.com/news/2026-04-24/Vice-premier-China-s-vast-market-to-offer-world-greater-opportunities-1MB0QFaXGko/share_amp.html
- **[R2] May 4, 2026, Milken Institute Global Conference, Gray (Reuters via The Star, May 5, 2026):** "Now we have this war, which the UAE has done an extraordinary job navigating." / "Through each of those crises, the people in this room, all of us, would have said, 'Oh, I'm nervous. What's going to happen?' And yet the US economy and the global economy powered through, the markets powered through and my expectation is that will continue." https://www.thestar.com.my/tech/tech-news/2026/05/05/global-finance-leaders-flag-shifting-capital-flows-ai-impact-at-milken

**Jul 23, 2026, 2Q'26 release and call**
- Schwarzman, release:
  - "Our decision to lean into the artificial intelligence megatrend is leading to standout investment performance"
  - "We've become a trusted partner at scale to many of the key innovators in this ecosystem,"
- Schwarzman, call (MarketBeat): Blackstone is "one of the largest private capital providers in the AI ecosystem."
  - **[paraphrase]** He said Blackstone is mindful of "excessive exuberance" and focused on downside protection.
- Gray, call:
  - "global shortage of compute"
  - Logistics is "the first asset class that really starts to emerge" (Mingtiandi)
  - BREIT "clearly back in growth mode" (MarketBeat)
- [R2 更正：官方逐字稿全文, official transcript 2Q'26]
  - Schwarzman: "Blackstone has become one of the largest private capital providers in the AI ecosystem — a position that gives our investors unique access to the remarkable opportunities emerging in this area and allows them to share directly in the extraordinary potential upside."
  - Schwarzman: "we are mindful of the potential for excessive exuberance in this area, and we've carefully chosen our spots, leveraging our scale and knowledge advantage to build conviction."
  - Gray: "We definitely see today a global shortage of compute." / "I think this will be the first asset class that really starts to emerge in real estate and that is good for us over time." (on logistics) / "BREIT is clearly back in growth mode."
  - Gray: "The fact that we've been doing this now for a long time, not just in the United States, but in Europe and Asia, we're beginning to see data center demand really start to pick up, that's going to make a difference. Today, we have 15 gigawatts of sites globally that can support $200 billion of data centers where we have the entitlements and we have the access to power."

**Aug 27, 2026, Semafor CEO Signal, Gray:** "'We go big': Jon Gray on how Blackstone places its AI bets" **[title only; the page blocked fetching]**, https://www.semafor.com/article/08/27/2026/we-go-big-jon-gray-on-how-blackstone-places-its-ai-bets

**Oct 22, 2026, 3Q'26 release and call** (Webull transcript, https://www.webull.com/news/15792402672886784)

Schwarzman:
- Release: "Blackstone delivered strong third-quarter results amid a volatile external environment."
- Call, macro and markets:
  - "U.S. Treasury yields hitting the highest level in decades"
  - "continued geopolitical turbulence, wars in the Middle East and Ukraine, inflation concerns, high oil prices, sovereign debt worries"
  - "a higher cost of capital has negatively impacted investor sentiment and transaction activity"
  - "the economy is strong today"
  - "Rising productivity over time is also a potential mitigant for inflation."
- Call, AI and data centers:
  - "we believe we're in the earliest stages of an AI-driven uplift in productivity"
  - "Seldom in my career have I seen such a supply-constrained market of this scale."
  - "Current public attitudes towards data centers will likely only amplify this scarcity over time."
  - Risk factor: "projects can't procure power equipment or the necessary approvals"
  - "Blackstone has become one of the most important capital providers in the AI ecosystem."
- Call, India: "India continues its ascent as the fastest growing major economy"
- Call, outlook: Blackstone is "moving towards what we expect will be an outstanding 2027" (TIKR).

Gray:
- Real estate:
  - "while higher rates are a headwind to the sector's recovery, strengthening fundamentals are a tailwind"
  - "the sharp drop-off in supply that started, call it, three years ago is now beginning to show up"
  - "In logistics, we had a 45% increase in leasing in our U.S. platform, which is quite large."
  - "Hotels nationally, same-store sales are up 6% this year."
  - "the REIT market, despite the rise in rates, is still up double-digit in the public REIT market"
- AI:
  - "these are assets with 15- to 20-year contracts with companies who have $2.5 trillion market caps on average"
  - "Spending on models is up 20-fold over the last year." "Compute prices are actually up 50% year on year."
  - "There's a lot of value in legacy H100 chips before people thought they would depreciate much more quickly."
  - "the needs of capital here are so enormous, it's unprecedented in our lifetimes"
- Private credit:
  - "none of that has come to pass" (on the private credit fears earlier in the year)
  - "We haven't seen a lot of spread widening—spreads have hung in there pretty well"
  - "We're just seeing there is a tail of some of the legacy older deals, but that's a small minority."
  - "We saw in our BCRED portfolio double-digit EBITDA growth for our borrowers"
- Deals and regions:
  - "as soon as we get a little bit of terra firma in the overall sort of geopolitical world" (on deal activity returning)
  - "we have a lot of strength in places like Canada, Australia, Japan, Hong Kong, Singapore, the Middle East" (on fundraising)
- **Topics not found in the 3Q'26 transcript:** tariffs, office, China.
- [R2 更正：官方逐字稿全文, official transcript 3Q'26]
  - Schwarzman, opening: "The third quarter of 2026 represented a highly complex environment, characterized by a historic increase in bond yields globally – including U.S. Treasury yields hitting the highest level in decades – alongside continued geopolitical turbulence, wars in the middle east and Ukraine, inflation concerns, high oil prices, sovereign debt worries, uncertainty over the U.S. midterm elections, and other challenges. These challenges have continued post quarter end. On the one hand, the artificial intelligence revolution is powering robust growth in many areas; while on the other hand, the higher cost of capital has negatively impacted investor sentiment and transaction activity and triggered significant volatility in the markets." (Webull omitted the "U.S. midterm elections" item.)
  - Schwarzman: "Stepping back, the economy is strong today." / "Rising productivity over time is also a potential mitigant for inflation." / "We also believe we're in the earliest stages of an AI-driven uplift in productivity, and consequently an additional multi-year tailwind for corporate earnings and value creation."
  - Schwarzman: "At the same time, there is a critical scarcity of supply that is only intensifying. Seldom in my career have I seen such a supply-constrained market of this scale. Current public attitudes toward data centers will likely only amplify this scarcity. Over time, as the public comes to understand the advancements that have occurred in data center operations and construction – including with respect to water usage and the funding for electricity – these attitudes should change."
  - Schwarzman: "There will be situations where investors don't have sufficient capital, and projects that can't procure power, equipment, or the necessary approvals." / "Blackstone has become one of the most important capital providers in the AI ecosystem." / "India continues its ascent as the fastest growing major economy, and we are one of the country's largest private investors." / "we are moving toward what we expect will be an outstanding 2027."
  - Gray, real estate: "Importantly, while higher rates are a headwind to the sector's recovery, strengthening fundamentals are a tailwind." / "So the sharp drop-off in supply that started, call it three years ago, is now beginning to show up." / "Second, new supply has fallen to decade-plus lows across most types of real estate while the cost to build continues to increase – a development further accelerated by higher rates and crowding out from the AI infrastructure build." / "Hotels nationally, same-store sales, are up 6% this year. The industry was flat last year." / "And so that's why I think the REIT market, despite the rise in rates, is still up double-digit in the public REIT market."
  - Gray, AI: "Spending it on models is up 20-fold over the last year." (as transcribed) / "Compute prices are actually up 50% year-on-year." / "That's what I was going to say, all of the above, because the needs of capital here are so enormous. It's unprecedented in our lifetimes, the amount of capital and so much of it has to come from the private markets because so much of this is development, it's not cash flowing."
  - Gray, credit: "In credit, where there was all this talk of some sort of private credit apocalypse earlier this year – of course, none of that has come to pass." / "Spreads have hung in there pretty well and it's tied to the fact that underlying portfolios are really strong. I mean, we saw in our BCRED portfolio double-digit EBITDA growth for our borrowers. Debt service coverage ratios are 2.3x. There is a tale [sic] of some of the legacy older deals, but that's a small minority."
  - Gray, deals: "So, I think as soon as we get a little bit of terra firma in the overall sort of geopolitical world, I think you will see a step function increase in transaction activity."
  - Gray, wealth distribution: "We've been moving globally now and we have a lot of strength in places like Canada, Australia, Japan, Hong Kong, Singapore, the Middle East, even Europe."
  - The official transcript confirms that China, Taiwan, tariffs and office are not discussed.
- **[R2] Oct 2026, Nikkei "My Personal History" (私の履歴書) series by Schwarzman.** Nikkei Asia's announcement (Sept 30, 2026) says the month-long series returns with Schwarzman, and that "what ultimately came to its rescue was a tide of Japanese money then sweeping the world" in Blackstone's early years. https://asia.nikkei.com/announcements/coming-in-october-stephen-schwarzman-s-autobiography-series . Blackstone reposts chapters (for example "Chapter 1: Repaying my debt to Japan"), but blackstone.com returned HTTP 403 and the text was not read [title only].

---

## D. Themes (facts and quotes only; cross-referenced)

**(1) Rates, inflation, central banks**
- **Mar 2024, Gray:** "before rates come down, to move"; cost of capital "start to come down."
- **4Q'25 call:** "moderating inflation." Investment-grade spreads at their tightest since 1998, about 71 bp.
- **3Q'26 call:**
  - Schwarzman: "U.S. Treasury yields hitting the highest level in decades"; higher cost of capital hurting transactions; productivity as an inflation "mitigant."
  - Gray: "higher rates are a headwind" to the real estate recovery.
  - The same quarter, opportunistic RE fell (3.2)%, the worst quarter in the window apart from 4Q'24's (5.1)% (3Q'26 release).
- No specific Fed commentary was found in the 3Q'26 transcript.
- [R2] Jan 2024 (Gray, 4Q'23): "the cost of capital appears to have peaked ... the Fed is no longer raising rates, but likely cutting them in 2024." Schwarzman: "consistent with a soft landing."
- [R2] Apr 2026 (Schwarzman, 1Q'26): "We believe we're moving toward a period of lower base rates, once we work through the impact of the Iran war."

**(2) Equity valuations, AI boom or bubble**
- Gray (late Oct 2025, CNBC) pushed back on bubble talk while accepting some misallocation **[paraphrase]**.
- Feb 2026: AI disruption is "top of the page"; picks and shovels are the safest play.
- 2Q'26: Schwarzman is mindful of "excessive exuberance" **[paraphrase]**.
- 3Q'26: "Seldom in my career have I seen such a supply-constrained market"; capital needs "unprecedented in our lifetimes."
- Data-center and AI exposure is about 7% of the total. Software is under 7% of AUM.
- No specific statements on S&P 500 valuation levels were found.

**(3) Credit and private credit**
- Oct 2025, First Brands and Tricolor: these are bank and syndicated problems, involving fraudulent double-pledging, and "erroneously linked" to private credit (Schwarzman).
- 2026: BCRED redemptions of 7.9% → ~10% → ~10% of shares, with net outflows of −$1.4B, −$1.2B and −$1.4B (see B7).
- Credit & Insurance remains the largest inflow engine: $35.8B in 3Q'26.
- Private credit net LTM returns fell from 11.6% (FY24) to 3.9% (LTM 3Q'26).
- Schwarzman: an "intensely negative campaign," and defaults will rise from "historic lows."

**(4) Real estate by sector and region**
- **Cycle calls:** values "bottoming" (Gray, Jan 2024 and Mar 2024); "cycle was bottoming two years ago... not a straight line" (Jan 2026).
- **Real estate segment:** AUM fell from $339.3B to $309.0B over the window. Realizations exceeded deployment in FY25 and the LTM to 3Q'26 (B2).
- **Data centers:** the core overweight, $185B platform (B4).
- **Logistics:** the "biggest asset class"; U.S. leasing +45% in 2026; called "the first asset class that really starts to emerge."
- **Rental housing:** supply collapse is supportive, with starts down about two-thirds.
- **Office:** said to have bottomed in Jan 2025 **[title only]**. Selective stakes, such as the Meta-leased Bellevue buildings ($545M valuation for the 40% stakes). Office was a 4Q'25 headwind and was not discussed on the 3Q'26 call.
- **Hotels:** U.S. same-store sales +6% in 2026 (Gray). Hotels were named as an opportunity in Mar 2024.
- **Student housing:** named as an opportunity in Mar 2024. U.K. student housing was a 4Q'25 headwind.
- **Life sciences:** a drag in 4Q'25 and 1Q'26.
- **Retail:** the $2.3B Alexander & Baldwin take-private (Hawaii) and the $442M Texas grocery purchase **[title only]**.
- **Europe:** nearly €50B of assets sold or agreed since 2022, much of it via recapitalizations. Exit difficulty reported. UK logistics swapped into a Tritax stake.
- **Japan:** Tokyo Garden Terrace, $2.6B, Dec 2024 **[title only]**; Nippon Life partnership.
  - [R2] Plus Tokyo C-NX logistics (~¥100B, Dec 2025). Japan is the second-largest source of wealth capital after the U.S.
- **India:** AirTrunk and Lumina; $30B India data-center plan.
  - [R2] Horizon Industrial Parks REIT draft filing (Dec 2025). A 1Q'26 BREP markdown came from India public holdings after a 15% fall in the Indian market.
- **Australia and Asia:** AirTrunk, with a planned Singapore REIT.
  - [R2] AirTrunk closed Dec 23, 2024. The Singapore REIT IPO was postponed in Oct 2026 to "possibly early next year."
- [R2] **Regional weights:** firm-wide about 75% U.S. / ~15% Europe / single-digit Asia (Chae, Jan 2025). BREP Asia unrealized value is $11.5B against $74.9B for total BREP (Dec 31, 2025). No real estate AUM split by country is published (A).
- [R2] **Recent regional fund returns:** latest BREP Asia vintage +24% LTM to 3Q'26, against +17% for Global and +13% for Europe (Chae, 3Q'26).

**(5) US–China, geopolitics, wars, tariffs, Taiwan**
- Apr 2025, tariffs:
  - Schwarzman: "A fast resolution is critical to keep the economy on the growth path"; risk-off is the best time to deploy.
  - Gray: tariffs are a "speed bump" for real estate; "The faster this tariff diplomacy can play out, the better."
- 4Q'25 opening remarks: "tariff uncertainty, geopolitical instability."
- 1Q'26: Iran war and oil spike cited **[paraphrase]**.
- 3Q'26: "wars in the Middle East and Ukraine," and waiting for "terra firma."
- **Taiwan:** no statement by Schwarzman or Gray was found in any source opened. This was not searched separately because the search budget ran out.
  - [R2] Searched separately in this pass. "Taiwan" does not appear in any of the 12 official call transcripts (4Q'23–3Q'26) or in the FY2025 10-K.
  - Puck newsletter interviews ("Just spoke to Schwarzman") reportedly contain Schwarzman remarks on Taiwan: the civil-war history, semiconductors, and Pelosi's Aug 2022 visit as unhelpful. The pages returned HTTP 403 and their date is unknown (the Pelosi reference implies 2022 or later). **[UNVERIFIED; search snippet only, not citable]** https://puck.news/newsletter_content/just-spoke-to-schwarzman/
  - Gray took part in a National Taiwan University forum on Nov 20, 2024. The event page records no Taiwan-specific remarks (see C, 2024).
- [R2] 4Q'24 call (Jan 30, 2025): Gray said few portfolio companies export physical goods to the U.S. and "we just don't see it either in Europe and Asia having a major impact on our business." Chae: Asia is "a quite modest single-digit amount" of the portfolio.
- [R2] 1Q'25 call: Schwarzman said the full implications of tariffs depend on "unprecedented multilateral negotiations, with perhaps over 100 countries." Gray noted Blackstone "benefited as a large foreign investor from ... currency strengthening in places like the UK, Europe, and yen."
- [R2] Mar 12, 2025 (Mumbai): Schwarzman said tariffs "will result at the end of the day in a significant increase in manufacturing activity in the United States."

**(6) China**
- No China statements were found in the 4Q'25, 1Q'26, 2Q'26 or 3Q'26 call material that was opened.
- Hong Kong appears only in AirTrunk assets and among fundraising "strength" locations.
- China exposure figures were not retrieved.
- [R2] Across all 12 official call transcripts (Jan 2024–Oct 2026), "China" appears only twice:
  - Gray, Apr 2024, on wealth fundraising: "Historically, some of the markets more tied to China, Hong Kong, Singapore are a little slower today."
  - An analyst question in Jan 2025 asking for China exposure, which management answered only with the Asia "single-digit" figure.
- [R2] FY2025 10-K: "the ability to deploy capital in China has been adversely impacted by policies and regulations in the U.S., which may be exacerbated prospectively." The 10-K also notes the Jan 2025 outbound-investment designation of China, Hong Kong and Macau as "countries of concern." No China exposure figure is disclosed.
- [R2] Schwarzman's meetings in Beijing, all reported by Chinese official media as paraphrase:
  - Mar 24, 2025, with He Lifeng: "confidence in China's economic development"; intends to deepen involvement in the Chinese market.
  - Oct 16, 2025, with Wang Yi: hopes for better U.S.–China communication.
  - Apr 23, 2026, with He Lifeng: plans to expand business in China.
  - No Blackstone China investment from 2024–2026 was identified in the sources opened.
- [R2] Hong Kong: Blackstone held talks in Jan–Mar 2026 to become New World Development's largest shareholder (about US$2.5B via an SPV). Talks were reported stalled on Mar 4, 2026 (B6).

**(7) Japan**
- "long-term stickiness" (Gray, Jan 2026).
  - [R2 更正：語境] This answers a question about the private wealth investor base: Japan is the "strong number two" source of wealth capital after the U.S. It is not about investment allocation (see C, 4Q'25).
- [R2] Official-call references: Japan named as a regional focus alongside India (Schwarzman, 4Q'25: "from a regional perspective, India and Japan"). The Asia PE fund's 27% net return is credited to "India ... and Japan" (Gray, 2Q'26). Q3'26 exits were concentrated in Japan and India (Chae). Japan's household shift "from being savers to being investors" (Gray, 3Q'25).
- [R2] Deals: Tokyo Garden Terrace (¥400B, completed 2025); Tokyo C-NX (~¥100B, Dec 2025 agreement, Feb 2026 transfer); Nippon Life partnership (~$10B private credit plus domestic real estate, 2Q'26). A reported $30B Japan AI data-center plan (Gray to Nikkei, Jun 2026).
- Nippon Life: about $10B of private credit plus investment in its domestic real estate.
- Tokyo Garden Terrace, $2.6B.
- AirTrunk Japan assets.
- Japan named as a fundraising strength (3Q'26).

**(8) Europe and UK**
- "Direct lending in Europe is a compelling area" (Jan 2026).
- €50B of European sales since 2022 and exit difficulty (Catenaa, Dec 2025).
- U.K. student housing headwind (4Q'25).

**(9) US fiscal, dollar, gold, commodities**
- 3Q'26: Schwarzman cited "sovereign debt worries" and "high oil prices."
- Energy actions: LNG Canada (~$1.6B, Nov 2026), TXNM ($11.5B), natural-gas pipeline network.
- No statements on the dollar or gold were found.

**(10) Recession and crisis risk**
- "the economy is strong today" (Schwarzman, Oct 2026).
- "fundamentally strong economy underpinned by the... AI-driven investment boom" (Jan 2026).
- Defaults expected to rise (Oct 2025, Apr 2026).
- No explicit recession forecast was found.
- [R2] May 4, 2026 (Gray, Milken): "the US economy and the global economy powered through, the markets powered through and my expectation is that will continue."
- [R2] Apr 2025 (Schwarzman, 1Q'25): "the economy entered this period in a fundamentally strong position." Tariffs are supportive of real estate values by cutting new supply, "absent recessionary conditions."

**(11) Where they deploy**
- Deployment by year: $133.9B (FY24), $138.2B (FY25), $142.0B (LTM to 3Q'26).
- Real estate is a shrinking share: $25.3B → $20.5B → $24.4B.
- Credit & Insurance deployment by year: $63.8B → $67.7B → $62.1B.
- Thematic concentration:
  - Data centers: BREIT alone put $9.1B into QTS developments YTD 2026.
  - Power and utilities.
  - LNG.
  - AI compute financing: Google TPU cloud, Broadcom platform, Anthropic JV.
  - India.

---

## E. Chart-ready data (verified from releases unless noted)

**Series 1: Firm-wide capital deployed vs realizations, quarterly ($B)**

Sources: the release URLs in B1.

| Quarter | 1Q24 | 2Q24 | 3Q24 | 4Q24 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 | 2Q26 | 3Q26 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Deployed | 24.5 | 33.7 | 34.0 | 41.6 | 36.4 | 33.1 | 26.6 | 42.2 | 35.6 | 34.2 | 30.1 |
| Realizations | 15.0 | 23.5 | 22.7 | 25.9 | 25.5 | 23.4 | 30.6 | 46.1 | 35.9 | 31.8 | 33.1 |
| Inflows | 34.0 | 39.4 | 40.5 | 57.5 | 61.6 | 52.1 | 54.2 | 71.5 | 68.5 | 68.3 | 63.3 |

**Series 2: Segment AUM, Real Estate vs Credit & Insurance ($B, end of quarter)**

Sources: the release URLs in B1.

| Quarter | 1Q24 | 2Q24 | 3Q24 | 4Q24 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 | 2Q26 | 3Q26 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Real Estate | 339.3 | 336.1 | 325.1 | 315.4 | 320.0 | 325.0 | 320.5 | 319.3 | 315.3 | 314.1 | 309.0 |
| Credit & Insurance | 329.6 | 330.1 | 354.7 | 375.5 | 388.7 | 407.3 | 432.3 | 443.0 | 457.5 | 469.3 | 480.0 |
| Private Equity | 310.0 | 330.6 | 344.7 | 352.2 | 371.0 | 388.9 | 395.6 | 416.4 | 429.9 | 454.2 | 465.4 |

**Series 3: Real Estate segment deployed vs realized, quarterly ($B)**

Source: the releases. Values are rounded to 0.1.

| Quarter | 1Q24 | 2Q24 | 3Q24 | 4Q24 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 | 2Q26 | 3Q26 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| RE deployed | 4.8 | 9.8 | 3.7 | 7.0 | 5.2 | 6.2 | 3.6 | 5.5 | 7.0 | 5.8 | 6.1 |
| RE realized | 3.8 | 5.5 | 7.4 | 5.5 | 4.3 | 5.2 | 7.3 | 8.6 | 7.0 | 6.6 | 7.0 |

**Optional Series 4: Data-center platform value**

These values come from secondary reports of call remarks. The definitions shift: earlier points exclude "under construction" and later points include it.

| Point in time | Value | Source |
|---|---|---|
| 2Q'24 | $55B | DCD |
| 3Q'24 | $70B | DCD |
| Start of 2026 | $130B | Mingtiandi |
| 1Q'26 | >$150B | MarketBeat, Bisnow |
| 2Q'26 | $185B | Mingtiandi, MarketBeat |

**BREIT net flows:** not chart-ready. Quarterly dollar net-flow figures are not published in the sources opened. Only directional statements and the calendar-2025 figure of about +$1B are available.

[R2 更正：現已可作圖] **Series 5: BREIT raised vs repurchased, quarterly ($B, BREIT 10-Q/10-K MD&A; 4Q values derived ±0.1–0.2; see the B3 table and URLs).** The calendar-2025 "+$1B" (Bisnow) conflicts with the 10-K's −$2.6B and should not be charted.

| Quarter | 1Q24 | 2Q24 | 3Q24 | 4Q24 | 1Q25 | 2Q25 | 3Q25 | 4Q25 | 1Q26 | 2Q26 | 3Q26 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Raised (incl. DRIP) | 0.8 | 0.9 | 0.7 | ~1.0 | 0.8 | 1.1 | 0.8 | ~0.9 | 1.2 | 1.1 | 1.1 |
| Repurchased | 2.9 | 3.3 | 1.7 | ~1.5 | 2.1 | 1.5 | 1.3 | ~1.3 | 1.3 | 0.9 | 0.8 |
| Data centers, % of BREIT real estate | 9 | 10 | 11 | 13 | 15 | 17 | 18 | 21 | 23 | 27 | 30 |

DST-program proceeds, excluded above: +0.1 (2Q26) and +0.2 (3Q26).

---

## F. Gaps and unverified items

**Gaps left after the second pass**
1. **Tariffs, April 2025:** now filled from secondary reports (CoStar, WSJ). Quotes are fragments and have not been checked against the official transcript.
   - [R2] Resolved. Replaced with official 1Q'25 transcript text (C, 2025). "remains strong except in a few areas such as real estate" is not in the call transcript (it is probably from a WSJ interview).
2. **Davos and other interviews:** no Schwarzman Davos 2025 or 2026 quotes, and no Schwarzman interviews on China, US–China, the dollar, fiscal debt or Trump policy.
   - [R2] Partly filled. Davos 2025: Schwarzman's full question to Trump on EU regulation (Jan 23, 2025). Davos 2026: no Schwarzman or Gray remarks found [UNVERIFIED; 公開查無]. China: three Beijing meetings (Mar 2025, Oct 2025, Apr 2026), Chinese-media paraphrase only. Tariffs: Mumbai remarks (Mar 12, 2025). The dollar and gold remain unaddressed.
3. **Taiwan:** nothing found and not searched separately.
   - [R2] Searched. Taiwan is absent from all 12 official transcripts and the FY2025 10-K. Puck interview snippets about Schwarzman on Taiwan could not be opened (HTTP 403) and are undated [UNVERIFIED]. Gray's Nov 2024 NTU appearance has no recorded Taiwan remarks.
4. **2024–2025 deals still not verified with numbers:** AIR Communities (~$10B, 2024), Tricon Residential (2024) and Retail Opportunity Investments (~$4B, 2025). These are memory-based, should not be used without checking, and are not cited above.
   - AirTrunk (A$24B), the Pennsylvania $25B pledge and Tokyo Garden Terrace (¥400B) are now verified in B4–B6.
   - [R2] Resolved. Tricon ($3.5B equity, Jan 19 → May 1, 2024), AIR Communities (~$10B incl. debt, Apr 8 → Jun 28, 2024) and ROIC (~$4B incl. debt, Nov 6, 2024 → Feb 12, 2025) are verified from SEC 8-K/6-K exhibits (B6). AirTrunk closing (Dec 23, 2024) is verified from AirTrunk's release.
5. **TXNM:** the announcement (May 19, 2025) and price are verified. Closing, expected 2H 2026, was not checked.
   - [R2] Checked. Not closed as of Oct 30, 2026. The New Mexico PRC approval is pending, and the outside date was extended to May 31, 2027 (B5).
6. **Japan:** the Tokyo Garden Terrace price is verified in yen (¥400B). The US$2.6B figure comes from headlines only.
   - [R2] Gray's official 4Q'24 remarks confirm the deal as "the largest-ever real estate transaction in the country by a non-Japanese investor." The US$ figure is still from secondary sources (Mingtiandi: completed in 2025, $2.6B).
7. **China and regional exposure:** no figures retrieved for China or for Blackstone's regional real estate mix (US/Europe/Asia split). The FY2025 10-K is a likely source: https://www.sec.gov/Archives/edgar/data/1393818/000119312526082531/d48618d10k.htm (not opened).
   - [R2] Opened. No real estate AUM split by region or country exists in the 10-K or the call transcripts. Proxies added to A: firm-wide 75/15/single-digit (U.S./Europe/Asia, Chae, Jan 2025); revenue geography 80/13/7; BREP Asia $11.5B unrealized against $74.9B total BREP. No China figure is disclosed, only a risk-factor statement.

**Quote reliability**
8. All call quotes come from third-party transcripts or summaries (Webull, Fool, MarketBeat) and are cut to 125 characters or fewer. They should be checked against Blackstone's official transcripts at ir.blackstone.com.
   - [R2] Resolved for call quotes. All 12 official transcripts were downloaded, and the key quotes were replaced with full sentences (C). Release quotes (from 8-K Ex. 99.1) were already primary. Interview quotes (Bloomberg, CNBC, WSJ, Daily Upside, Semafor) cannot be checked against call transcripts and remain secondary.
9. The Fool 4Q'25 transcript mislabels speakers. Opening-remark quotes attributed to "Michael Chae" are probably Schwarzman's.
   - [R2] Confirmed. The opening remarks are Schwarzman's.

**Inconsistencies in the sources**
10. **BREIT size:** "$58B" (Gray, 3Q'26), "$57B portfolio" (Mingtiandi), aggregate NAV ~$54.9B (Mar 2026) and total assets $93.6B do not reconcile. They are different measures, such as NAV versus gross assets.
   - [R2] BREIT's 10-Q gives total assets of $93.6B (Mar 31, 2026) and $88.9B (Sept 30, 2026). The aggregate NAV figure was not extracted from the 10-Q [UNVERIFIED]. Gray's "$58 billion" is probably NAV, but this is not stated.
11. **Data-center share of BREIT:** 23% (1Q'26) vs 27% (2Q'26). This may be real growth or a different denominator.
   - [R2] Resolved. It is the same measure (% of real estate fair value, BREIT 10-Q) and reflects real growth: 23% → 27% → 30% (3Q'26).
12. **Data-center pipeline figures** come from secondary reports of call remarks, and the definitions change over time (with or without "under construction").
   - [R2] Now checked against official transcripts (3Q'24 $70B / >$100B pipeline "including AirTrunk and facilities under construction"; 1Q'26 >$150B incl. under construction / $160B pipeline; 2Q'26 $185B incl. under construction, $130B at start of 2026). The definitional caveat remains.
13. **Fool 1Q'26 summary error:** it states GAAP net income of "$13 billion." That is wrong; the release shows $1.26B. It is not used here.

**Not checked**
14. The fill rate and dollar amount of the 3Q'26 BCRED tender (Gray said about 50% fulfilled).
   - [R2] Official: requests were 10% of NAV, "We fulfilled approximately 50% of total requests," net outflows $1.4B (B7). The dollar amount of requests is not stated in the transcript.
15. The 4Q'26 BCRED tender.
16. Whether the AirTrunk Singapore REIT IPO priced.
   - [R2] Not priced. Postponed to "possibly early next year" (w.media citing WSJ, Oct 14, 2026).
17. Whether the LNG Canada $3.1B total figure is accurate (headline only).
   - [R2] Still not verified (miningweekly HTTP 403).

**[R2] Remaining gaps after the third pass (2026-11-08)**
18. **Real estate AUM by country (Japan, India, Australia, China):** not published by Blackstone in any document opened. It would need investor-day decks or Blackstone Asia marketing material, which were not retrieved. The 2024–2026 Asia real estate deal list in B4/B6 is based on press and filings and is probably incomplete. In particular, Indian real estate acquisitions and Australian real estate other than AirTrunk were not systematically searched.
19. **BREIT monthly flows:** monthly subscription and repurchase figures (breit.com monthly updates or BREIT 8-Ks) were not retrieved. Quarterly figures come from the 10-Q/10-K. 4Q values are derived from rounded figures and conflict in sign with the XBRL equity statement for 4Q'25 (B3).
20. **Bisnow's calendar-2025 BREIT "+$1B / $7.2B new capital":** this cannot be reconciled with the 10-K (−$2.6B). The origin of Bisnow's figure (possibly a different vehicle or measure) is unknown.
21. **Schwarzman and Gray on Japan, primary text:** the Nikkei "My Personal History" chapters (Oct 2026), Gray's Jun 2026 Nikkei interview on the $30B data-center plan, and Bloomberg's Feb 12, 2026 Japan piece were not read in full (paywall/403).
22. **Schwarzman and Gray on China, direct quotes:** only Chinese official-media paraphrases (Mar 2025, Oct 2025, Apr 2026) were found. No 2024–2026 on-record interview quote about China was found [公開查無].
23. **Davos 2026:** no Blackstone remarks found. Attendance unconfirmed.
24. **New World Development:** whether any deal was signed after Mar 2026 is unknown.
25. **Indian REITs:** which "office REIT in India" Blackstone took public after May 2026 (2Q'26 call) is not identified. Knowledge Realty Trust's Aug 2025 IPO is title-only. The listing status of Horizon Industrial Parks is unknown.
26. **Tokyo C-NX:** Blackstone's own press release was blocked (HTTP 403). The buyer of record per Mingtiandi is Mizuho Leasing, with Blackstone as ultimate buyer per Nikkei and market sources.
