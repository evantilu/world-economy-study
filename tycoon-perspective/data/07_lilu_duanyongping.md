# 07 — Li Lu 李錄 (Himalaya Capital) & Duan Yongping 段永平 (H&H International Investment)

Data collected 2026-11-07. This file holds facts only; interpretation is left to the analyst.
[R2] Round 2 added 2026-11-08. Sources: HKEX DI database (di.hkex.com.hk), EDGAR re-check, the 2025-04-06 Li Lu Q&A, and Duan's 2025–2026 Xueqiu remarks via media reprints. Raw pages are in the session scratchpad (07/r2_*).

**Method and source notes**
- **13F data:** Every 13F number below was parsed directly from the SEC EDGAR XML information tables. Himalaya Capital Management LLC is CIK 1709323. H&H International Investment, LLC is CIK 1759760. Values are market value at quarter-end in USD. Weights are my calculation: line value ÷ total 13F value. Alphabet Class A and Class C are combined as "GOOGL" in the summary tables and shown separately where it matters.
- **13F limits:** 13Fs cover only US-listed long equity and ADR positions plus listed options. They exclude short puts or calls written, cash, T-bills, and non-US listings (HK, A-share). This matters a lot for Duan, who says he sells puts heavily, and for any Himalaya HK or A-share book such as BYD.
- **Filing quirks:**
  - Himalaya Q1 2024 reports values in $ thousands. I multiplied by 1,000. All later filings are in dollars.
  - Himalaya Q4 2025: the original 13F-HR (2026-02-17) swapped the GOOGL Class A and Class C lines. A 13F-HR/A (2026-02-19) corrected it. I use the amendment.
  - H&H Q4 2024: the original 13F-HR (2025-02-14, acc. 0001085146-25-001521) wrongly flagged every line as "Put". The same-day 13F-HR/A (acc. 0001085146-25-001626) removed the flags. I use the amendment.
- **Who controls H&H:** H&H International Investment is "widely believed" to be Duan's vehicle. Chinese media say this (e.g., 21世紀經濟報道 via 10jqka: "据信由段永平管理"). Duan's own posts about trades in Apple, Nvidia, Tesla and Berkshire match the filings. I found no formal disclosure linking him to H&H.
  - [R2 更正：a formal disclosure now found] HKEX disclosure-of-interests Form 1 IS20260527E00003 (filer "Duan Yong Ping", issuer Pop Mart 09992, filed 2026-05-27), box 20 "interests of corporations controlled by substantial shareholder": **H&H International Investment, LLC**, 2479 E Bayshore Rd #120, Palo Alto, CA 94303; controlling shareholder Yong Ping Duan; **% control 99.00**; direct interest Y. 〔事實〕 Source: https://di.hkex.com.hk/di/NSNoticePersonList.aspx?sa2=np&scpid1=156902&scpid3=0&scpid2=312028&sa1=pl&scsd=01%2f01%2f2017&sced=08%2f11%2f2026&pn=Duan+Yong&src=MAIN&lang=EN& (open IS20260527E00003). Limit: this shows Duan controls 99% of the H&H entity. It does not say whose money sits in H&H's book; Duan has said he manages about 50 accounts, many holding other people's money (see C3, 2026-01-01).
- [R2] **EDGAR re-check on 2026-11-08:** The latest 13F for both filers is still Q2 2026 (Himalaya filed 2026-08-14, acc. 0002043585-26-000022; H&H filed 2026-08-14, acc. 0001759760-26-000007). I re-parsed both XML tables. Share counts and weights match B1/B2 below. Every H&H Q2 2026 line has a blank putCall field, so no listed option positions were reported. Neither filer had a Q3 2026 13F on file as of 2026-11-08. Himalaya also filed an N-PX (proxy votes) on 2026-08-31; I did not parse it. Sources: https://data.sec.gov/submissions/CIK0001709323.json ; https://data.sec.gov/submissions/CIK0001759760.json
- **Search budget:** The session's shared web-search budget ran out partway through. Some items listed in section F could not be checked further.

EDGAR filing index URLs used. Pattern: `https://www.sec.gov/Archives/edgar/data/<CIK>/<accession-no-dashes>/`.

| Period | Himalaya (filed, accession) | H&H (filed, accession) |
|---|---|---|
| Q1 2024 | 2024-05-15, [000170932324000004](https://www.sec.gov/Archives/edgar/data/1709323/000170932324000004/) | 2024-05-15, [000108514624002494](https://www.sec.gov/Archives/edgar/data/1759760/000108514624002494/) |
| Q2 2024 | 2024-08-14, [000170932324000005](https://www.sec.gov/Archives/edgar/data/1709323/000170932324000005/) | 2024-08-14, [000108514624003861](https://www.sec.gov/Archives/edgar/data/1759760/000108514624003861/) |
| Q3 2024 | 2024-11-14, [000170932324000009](https://www.sec.gov/Archives/edgar/data/1709323/000170932324000009/) | 2024-11-14, [000108514624005748](https://www.sec.gov/Archives/edgar/data/1759760/000108514624005748/) |
| Q4 2024 | 2025-02-14, [000170932325000001](https://www.sec.gov/Archives/edgar/data/1709323/000170932325000001/) | 2025-02-14 (amended), [000108514625001626](https://www.sec.gov/Archives/edgar/data/1759760/000108514625001626/) |
| Q1 2025 | 2025-05-15, [000204358525000004](https://www.sec.gov/Archives/edgar/data/1709323/000204358525000004/) | 2025-05-15, [000108514625003301](https://www.sec.gov/Archives/edgar/data/1759760/000108514625003301/) |
| Q2 2025 | 2025-08-14, [000204358525000010](https://www.sec.gov/Archives/edgar/data/1709323/000204358525000010/) | 2025-08-14, [000108514625005091](https://www.sec.gov/Archives/edgar/data/1759760/000108514625005091/) |
| Q3 2025 | 2025-11-12, [000204358525000015](https://www.sec.gov/Archives/edgar/data/1709323/000204358525000015/) | 2025-11-14, [000175976025000002](https://www.sec.gov/Archives/edgar/data/1759760/000175976025000002/) |
| Q4 2025 | 2026-02-19 (amended), [000204358526000012](https://www.sec.gov/Archives/edgar/data/1709323/000204358526000012/) | 2026-02-17, [000175976026000001](https://www.sec.gov/Archives/edgar/data/1759760/000175976026000001/) |
| Q1 2026 | 2026-05-15, [000204358526000013](https://www.sec.gov/Archives/edgar/data/1709323/000204358526000013/) | 2026-05-19, [000175976026000005](https://www.sec.gov/Archives/edgar/data/1759760/000175976026000005/) |
| Q2 2026 | 2026-08-14, [000204358526000022](https://www.sec.gov/Archives/edgar/data/1709323/000204358526000022/) | 2026-08-14, [000175976026000007](https://www.sec.gov/Archives/edgar/data/1759760/000175976026000007/) |
| Q3 2026 | due ~2026-11-14 (not yet filed at collection) | due ~2026-11-14 (not yet filed) |

---

# PART 1 — LI LU 李錄 / Himalaya Capital

## A. Status & credentials

- **Firm:** Founded Himalaya Capital in 1997. Charlie Munger gave Himalaya $88 million to manage after meeting Li Lu in 2003. Munger often called him the "Chinese Warren Buffett." (Motley Fool, 2026-03-20: https://www.fool.com/investing/2026/03/20/li-lu-the-chinese-warren-buffett-has-75-of-himalay/)
- **Background:** Born in China in 1966. A student leader in the 1989 Tiananmen protests. Later Columbia (BA/JD/MBA). (Fool, same URL; Columbia background per CBS event intro.)
- **Affiliations:**
  - Columbia University Board of Trustees from 2017 (Columbia Spectator, 2017-09-08)
  - Caltech trustee from 2018
  - American Academy of Arts and Sciences from 2020
  - All listed at https://www.himcap.com/cn/publications
- **BYD history:**
  - Introduced BYD to Munger and Buffett. Berkshire subscribed for 225 million BYD H-shares at HK$8 on 2008-09-26. (扬子晚报/yzwb, 2025-09-22: https://www.yzwb.net/news/ch/202509/t20250922_267519.html)
  - Himalaya began investing in BYD in 2002. (腾讯新闻 ETF进化论, 2026-02-21: https://news.qq.com/rain/a/20260221A031F600)
- **Public talks in the window found on Himalaya's own publications page:**
  - December 2024: "全球价值投资与时代", Peking University Guanghua 10th-anniversary event for the Value Investing course
  - October 2026: 36th Graham & Dodd Luncheon transcript, Chinese version
  - I found no other Himalaya-published talk from 2025. (https://www.himcap.com/cn/publications)
  - [R2] Re-checked 2026-11-08; the page is unchanged. The 2025-04-06 Seattle Q&A, published through 芒格书院 (see C2), is not listed there. The domain cn.himcap.com does not resolve (DNS failure). I found no separate "李录博客" for 2024–2026. The only Weibo account linked to him dates from 2014, and DW reported at the time that it was not verified as his (chinadigitaltimes reprint: https://chinadigitaltimes.net/chinese/356110.html).

## B. ACTIONS (numbers, dates, units)

### B1. Himalaya 13F: total value and positions by quarter (EDGAR)

| Quarter-end | Total 13F value | # issuers | Positions (weight %) |
|---|---|---|---|
| 2024-03-31 | $2.260B | 5 | GOOGL 37.49 (A 16.98 + C 20.50) · BAC 30.33 · BRK.B 16.70 · EWBC 9.72 · AAPL 5.76 |
| 2024-06-30 | $2.562B | 6 | GOOGL 39.88 · BAC 28.07 · BRK.B 14.26 · EWBC 7.94 · AAPL 6.25 · **OXY 3.61 (new)** |
| 2024-09-30 | $2.472B | 7 | GOOGL 37.64 · BAC 29.02 · BRK.B 16.71 · EWBC 9.29 · OXY 3.06 · AAPL 2.99 · **SOC (Sable Offshore) 1.28 (new)** |
| 2024-12-31 | $2.711B | 7 | GOOGL 39.14 · BAC 29.31 · BRK.B 15.01 · EWBC 9.81 · AAPL 2.93 · OXY 2.67 · SOC 1.13 |
| 2025-03-31 | $2.212B | 7 | GOOGL 35.09 · BAC 26.12 · BRK.B 21.61 · EWBC 11.26 · OXY 3.27 · SOC 1.54 · AAPL 1.11 |
| 2025-06-30 | $2.689B | 8 | GOOGL 32.84 · BAC 18.36 · **PDD 17.93 (new)** · BRK.B 16.22 · EWBC 10.43 · OXY 2.29 · SOC 1.10 · AAPL 0.84 |
| 2025-09-30 | $3.230B | 8 | GOOGL 37.62 · PDD 18.85 · BAC 16.66 · BRK.B 13.97 · EWBC 9.15 · OXY 2.15 · AAPL 0.87 · SOC 0.73 |
| 2025-12-31 | $3.569B | 8 | GOOGL 43.86 · BAC 16.08 · PDD 14.64 · BRK.B 12.64 · EWBC 8.74 · OXY 1.69 · **CROX 1.51 (new)** · AAPL 0.84 (SOC exited) |
| 2026-03-31 | $3.201B | 13 | GOOGL 44.81 · PDD 14.71 · BRK.B 13.44 · EWBC 9.26 · BAC 4.57 · OXY 2.98 · CROX 2.30 · **TME 1.91 (new)** · **SPGI 1.61 (new)** · **HRB 1.61 (new)** · **MCO 1.61 (new)** · AAPL 0.88 · **MSCI 0.32 (new)** |
| 2026-06-30 | $3.703B | 7 | GOOGL 47.94 (A 24.55 + C 23.39) · PDD 22.17 · BRK.B 14.98 · EWBC 9.68 · CROX 2.89 · TME 1.49 · AAPL 0.86 (BAC, OXY, SPGI, MCO, MSCI, HRB all exited) |

### B2. Share-count changes, Q1 2024 to Q2 2026 (EDGAR)

**Bank of America (BAC)**
- 18,081,133 shares held through Q4 2024. Weight about 28–30%; it was the largest single issuer line after the combined Alphabet classes.
- Q1 2025: down to 13,846,633 (−4,234,500, −23%)
- Q2 2025: down to 10,431,387 (−3,415,246)
- Held flat Q3 and Q4 2025
- Q1 2026: down to 2,997,987 (−7,433,400, −71%)
- Q2 2026: fully exited (−2,997,987)
- Background: BAC was built up in Q1 2023 after the SVB collapse and became the largest holding (gelonghui, early 2024: https://m.gelonghui.com/p/696288).

**Alphabet (GOOGL/GOOG)**
- Class A: 2,543,300 shares, unchanged for the whole window.
- Class C: 3,044,000 shares, cut in Q1 2025 to 2,451,300 (−592,700, −19.5%). Unchanged since.
- Weight rose from 37.5% (Q1 2024) to 47.9% (Q2 2026) almost entirely through price.
- Original buy: Class C in Q2 2020; Class A added in 2022 (gelonghui, same URL).
- Q4 2025 note: one Chinese report described "92,000 shares swapped between A and C". This is actually the clerical A/C swap in the original Q4 2025 filing, corrected by the 13F-HR/A. Check: 2,543,300 − 2,451,300 = 92,000. No real trade happened. (https://news.qq.com/rain/a/20260221A031F600 vs. EDGAR amendment)

**PDD Holdings (ADR)**
- New in Q2 2025: 4,608,000 ADS, $482.3M, 17.93%.
- Held flat Q3 2025 through Q1 2026.
- Q2 2026: up to 10,761,119 ADS (+6,153,119, +133.5%), $820.9M, 22.17%. Now the largest single holding after the combined Alphabet classes.
- Reported by 21世紀經濟報道 via 10jqka, 2026-08-16: https://stock.10jqka.com.cn/20260816/c678985988.shtml. InvestorLens, 2026-10-04: https://www.investorlens.capital/blog/2026-10-04-li-lu-himalaya-q2-2026-pdd

**Berkshire Hathaway B (BRK.B)**
- 897,749 shares held flat from Q1 2024 through Q1 2026.
- Q2 2026: up to 1,108,318 (+210,569, +23.5%), $554.6M, 14.98%.

**East West Bancorp (EWBC)**
- 2,776,351 shares, unchanged for the whole window. Weight 7.9–11.3%.
- EWBC is a US bank whose franchise centres on Chinese-American and US–China cross-border banking. The descriptor is general knowledge, not from a source fetched here.

**Apple (AAPL)**
- 759,600 shares (Q1 and Q2 2024)
- Q3 2024: down to 317,700 (−58%)
- Q1 2025: down to 110,600 (−65%)
- Flat since. Weight about 0.86%.

**Occidental Petroleum (OXY)**
- New in Q2 2024: 1,466,500 shares, $92.4M, 3.61%.
- Held flat through Q1 2026.
- Fully exited in Q2 2026.

**Sable Offshore (SOC)**
- New in Q3 2024: 1,343,000 shares, $31.7M.
- Exited in Q4 2025.

**Crocs (CROX)**
- New in Q4 2025: 628,159 shares, $53.7M, 1.51%.
- Q1 2026: up to 887,093 (+258,934).
- Flat in Q2 2026: $107.0M, 2.89%.

**Tencent Music Entertainment (TME, ADS)**
- New in Q1 2026: 6,590,836 ADS, $61.2M, 1.91%.
- Held in Q2 2026: $55.0M, 1.49%.

**Q1 2026 financial-data and ratings basket**
- New positions:
  - S&P Global: 121,463 shares, $51.7M
  - Moody's: 117,784 shares, $51.4M
  - MSCI: 18,939 shares, $10.2M
  - H&R Block: 1,626,906 shares, $51.6M
- All four fully exited in Q2 2026, one quarter later.
- InvestorLens characterizes Q2 2026 as "two additions and six full exits".

**Not in Himalaya's 13F at any point Q1 2024 to Q2 2026**
- Micron: fully sold across Q1 and Q2 2023, with the final 6.83M shares sold in Q2 2023 (gelonghui: https://m.gelonghui.com/p/696288).
- Nvidia, BYD, Alibaba, Tencent: none. BYD and Tencent are HK-listed and would not appear in a 13F anyway.

### B3. Non-US holdings: BYD (Himalaya)

- **2021-07-08/09:** Himalaya sold 10.7715M BYD H-shares, about HK$2.44B:
  - 7.144M at an average of HK$227.6
  - 3.6275M at HK$224.2
- **After that sale:** the stake fell from about 7.03% to 6% of H-shares, leaving 62,879,100 H-shares worth about HK$13.9B. (The Standard HK, 2021-07-15: https://www.thestandard.com.hk/market/article/32110/Li-Lu-cashes-in-24b-on-BYD-shares; 华尔街见闻: https://wallstreetcn.com/articles/3637185)
- [R2] **HKEX DI record (primary source).** The DION database lists four BYD H-share notices from Himalaya since 2017. Himalaya Capital Management LLC and Himalaya Capital Investors, L.P. filed identical pairs, with capacity "2102 Investment manager". 〔事實〕 Source: https://di.hkex.com.hk/di/NSNoticePersonList.aspx?sa2=np&scpid1=35410&scpid3=2&scpid2=2508&sa1=pl&scsd=01%2f01%2f2017&sced=08%2f11%2f2026&pn=Himalaya&src=MAIN&lang=EN& (LP version: scpid1=35291)

  | Event date | Filed | Form | Reason code | Shares traded / price | Long position after | % of H-shares |
  |---|---|---|---|---|---|---|
  | 2021-01-28 | 2021-02-02 | CS20210202E00179 | 1213: % fell for another reason. Supplementary: "increase in share capital" | none | 73,650,600 (8.05% before) | 7.03 |
  | 2021-07-08 | 2021-07-13 | CS20210713E00397 | 1201: sale | 7,144,000 at avg HK$227.6229 | 66,506,600 | 6.35 |
  | 2021-07-09 | 2021-07-14 | CS20210714E00281 | 1201: sale | 3,627,500 at avg HK$224.1896 | 62,879,100 | 6.00 |
  | **2021-11-08** | 2021-11-11 | CS20211111E00113 | **1704: ceased to have a notifiable interest.** Supplementary: "because of the increase in share capital of the listed corporation" | none | **54,559,600** (5.21% before) | **4.97** |

  - H-shares in issue: 1,048,000,000 on the January and July 2021 forms; 1,098,000,000 on the November 2021 form.
  - **Fell below 5% on 2021-11-08.** The cause was dilution from BYD's new H-share issue, not a sale on that date. After this, Himalaya has no duty to file, so the DI database is silent on any change since November 2021. That silence does not mean an exit.
  - Arithmetic 〔推論〕: holdings went from 62,879,100 (2021-07-09) to 54,559,600 (before the 2021-11-08 dilution), so about 8.32M shares were sold between July and November 2021. These sales triggered no notice: at 62,879,100 / 1,048M = 5.9999% the stake was already just under 6%, and the next sales stayed above 5%.
  - The 2021-01-28 form shows 7,365,600 in box 20 but 73,650,600 in boxes 18/19. The box-20 figure is probably a typo in the filing 〔推論〕.
  - HKEX's "complete list of substantial shareholders" for BYD H-shares on 2026-11-08 does not include Himalaya. It lists BlackRock (6.95% long, last notice 2026-11-03), 融捷投资 and Berkshire. The Berkshire lines still carry a stale 2014 notice date, so this list is not a clean current snapshot. Source: https://di.hkex.com.hk/di/NSAllSSList.aspx?sa2=as&sid=2508&corpn=BYD+Co.+Ltd.++-+H+Shares&sd=01/01/2003&ed=08/11/2026&cid=2&sa1=cl&scsd=01%2f01%2f2003&sced=08%2f11%2f2026&sc=1211&src=MAIN&lang=EN&
  - BYD is not in any Himalaya 13F, as expected for an HK listing. **Holdings after 2021-11-08 below 5%: [UNVERIFIED].** I found no report of a full exit.
- **After 2021 (original R1 note, superseded on the <5% point by the R2 HKEX record above):** I found no reliable report, in English or Chinese, of later HKEX disclosure-of-interest filings by Himalaya on BYD in 2022–2026, and no report of a full exit.
  - A 2026-02-21 Tencent News piece says Himalaya "began investing in BYD in 2002, held about 17 years, gained over 100x" and reports no BYD change in Q4 2025. That framing (held about 17 years, implying an end date) is ambiguous and unsourced. (https://news.qq.com/rain/a/20260221A031F600)
  - At the 2026-10-05 Columbia event, the host introduced Li Lu as "以早期投资比亚迪以及许多优秀中国企业而闻名". Li Lu did not discuss BYD. (CBS Chinese transcript PDF, link in C3)
- **Berkshire context (not Himalaya):**
  - Berkshire started selling BYD in August 2022 and was below 5% by June 2024: 4.94% at the 16th disclosure in July 2024, down from 20.04%.
  - Berkshire confirmed a full exit, reported 2025-09-21. Its spokesperson: "比亚迪股份确实已全部售出".
  - Source: https://www.yzwb.net/news/ch/202509/t20250922_267519.html; Caixin Global, 2024-07-23: https://www.caixinglobal.com/2024-07-23/buffetts-moves-on-byd-are-now-secret-after-stake-falls-below-5-102219131.html

### B4. [R2] Other HK holdings found in HKEX DI (Himalaya)

A search of the DION database for "Himalaya" returns only three issuers: BYD H, Postal Savings Bank of China H, and CRRC H. Only holdings at or above 5% are visible this way. 〔事實〕 Source: https://di.hkex.com.hk/di/NSSrchPersonList.aspx?sa1=pl&scsd=01%2f01%2f2017&sced=08%2f11%2f2026&pn=Himalaya&src=MAIN&lang=EN

**Postal Savings Bank of China H-shares (1658)**
- Base: 19,856,167,000 H-shares on the 2024–2025 forms.

| Event date | Filed | Form | Code | Shares / price | Long after | % |
|---|---|---|---|---|---|---|
| 2020-12-18 | 2021-01-04 | CS20210104E00701 | 1001 (first notifiable) | 13,262,000 at HK$4.2279 | 1,005,622,000 | 5.06 |
| 2021-01-15 | 2021-01-20 | CS20210120E00338 | 1101 (purchase) | 83,544,000 at HK$5.3479 | 1,274,411,000 | 6.42 |
| 2024-12-06 | 2024-12-11 | CS20241211E00065 | 1201 (sale) | 20,000,000 at HK$4.4983 | 1,178,202,000 | 5.93 |
| **2025-05-08** | 2025-05-13 | CS20250513E00013 | **1704: ceased.** Supplementary: "because of completion of a sale of shares" | 10,387,000 at HK$4.7551 | **985,618,000** | **4.96** |

- So Himalaya held about 1.0–1.27 billion PSBC H-shares from December 2020, and was selling from December 2024. It fell below 5% on 2025-05-08. Holdings after that: [UNVERIFIED].
- Source: https://di.hkex.com.hk/di/NSNoticePersonList.aspx?sa2=np&scpid1=35410&scpid3=2&scpid2=142788&sa1=pl&scsd=01%2f01%2f2017&sced=08%2f11%2f2026&pn=Himalaya&src=MAIN&lang=EN&

**CRRC H-shares**
- 2018-06-26: form CS20180629E00063, code 1704 (ceased). 3,500,000 shares involved; 217,238,000 held after, 4.97%.
- No later notices.
- Source: same search, scpid2=24061.

**Timing note** 〔事實; no interpretation〕: in the same window, the 13F shows BAC being cut (Q1 2025 to Q2 2026), and PSBC (a Chinese state bank) was sold below 5% in May 2025.

## C. WORDS (direct quotes 2024–2026)

### C1. Peking University Guanghua, 10th-anniversary salon of the "Value Investing" course

- **Date and venue:** 2024-12-07, Columbia University Global Center (Beijing).
- **Published:** Himalaya site, December 2024 ("全球价值投资与时代"). Huxiu 2024-12-28: https://www.huxiu.com/article/3838505.html. Huxiu re-run 2026-05-12, from an automated transcript: https://www.huxiu.com/article/4857656.html
- Quotes below follow the Huxiu 2024-12-28 edited text.

**China's stage of development**
- "而中间的盘整期，我称之为2.5阶段。中国今天正处在2.5阶段。"
- "所有经历过工业化起飞的国家，如德国、日本、南美和东南亚的一些国家，都经历过类似的阶段，面临过中国今天的挑战。"

**Demand side and deflation**
- "然而当前的问题主要出在需求侧，这也导致了通缩现象的出现。"
- "中国的个人消费占整体经济的比重只有40%，这一比例近年来持续下降。"
- "与此同时，储蓄率却一直在上升，从40%增加到约50%。"
- "国内流行"卷"这个词，实际上指的是在通缩环境下的极度竞争。"
- "中国经过40多年的发展，在全球制造业附加值中占比超过30%，但是自身消费只占其中的一半左右。"

**Real estate**
- "房地产曾一度占到中国家庭财富的70%左右，目前也有60%左右，仍然是家庭财富的首要来源。"

**Modernization and the market economy**
- "我们一直在谈"中国式现代化"，这是对的，因为每个国家都有其独特性。"
- The 2026 automated-transcript version describes the market economy as "在所有人类发明的各种体系中最伟大的制度发明".

**The US and the world order**
- "在过去五六年里，国际上最大的变量是美国对自身在国际社会中扮演的角色发生了根本性的质疑。"
- "这不仅引发了中美关系的深刻变化，也对国际秩序提出了一个根本性的问题：未来的国际秩序将如何演变？"
- "美国承担了全球约80%的军事支出，同时作为全球经济的最终购买者、货币提供者和最终消费市场，起到了稳定全球秩序的"锚"的作用。"

**Tariffs and decoupling**
- "尽管市场之间存在很多栅栏、各种壁垒、关税和限制，但实际上通过第三方，整个市场还会连接、流通，谁也离不开谁。"

**AI and Nvidia**
- "无论是游戏还是云计算，尤其是AI，没有任何一家公司能够脱离英伟达而运行"
- "英伟达这家"虚拟经济"公司的市值已经超过了德国所有上市公司股票的市值总和"

**Markets**
- "美国已经是全世界最成熟、最有效率的市场了，依然无法避免这种情况的发生。" / "事实上，这种大幅下跌几乎每隔几年都会发生。" Context: he is discussing large drawdowns.
- "中国股市在2005~2007年经历了一轮大涨，2007年之后，连续七八年大幅下跌，进入漫长的熊市。"

**Hong Kong**
- "香港的市场和体系需要珍惜和呵护，而前提是要理解它的重要性。"

**Value investing**
- "价值投资的核心是理解价值，支付的是价格，购买的是价值，最好去买那种能够不断增长的价值，至少要买在远远低于价值的价格上。"
- "投资人不需要了解所有公司，无需掌握所有宏观经济参数、政府宏观政策，更不需要准确预测未来十年的情况，关键是要找到那个能钓到鱼的"湖"。"
- "股票不是一张纸，它是一个公司所有权的法律证明，你买的是股权和购买力。" (2026 Huxiu automated-transcript version)

**Coverage:** Taiwan is not mentioned in the transcript.

### C2. 2025

- I found no new Li Lu speech or long interview from calendar 2025, either on Himalaya's publications page or in searches. See section F.
  - [R2 更正：a 2025 Q&A was found; it is not on Himalaya's publications page, re-checked 2026-11-08]

**[R2] 2025-04-06, Seattle: Q&A with members of 芒格书院 on Li Lu's 59th birthday**
- **Published:** WeChat account 芒格书院 (mungeracademia). The text is bylined "作者：李录" and the editor says it is a selection ("择要整理") of the Q&A. Not a verbatim transcript.
- **Reprints I opened:** 新浪财经 2025-04-24 (from 格上理财): https://finance.sina.com.cn/money/smjj/smdt/2025-04-24/doc-ineuhiqt3436765.shtml . 网易/笔记侠 2025-04-28 (reposted with authorization from 芒格书院): https://m.163.com/dy/article/JU91NAN305118PFV.html . Huxiu copy https://www.huxiu.com/article/4286148.html returned HTTP 405 and was not read.
- Quotes below are from the Sina text.

**China's economy: "two blockages" (两个堵点)**
- "中国经济要进入正向的循环，发展内需中间要疏通一些主要的堵点，这里我举两个例子。首先是保障体系。"
- "保障需求是人性的基本安全需求。政府不提供，不代表需求不存在，民众只是以家庭为单位低效地自我保障。"
- "消费不足的第二个堵点就在于资本市场没有发挥它应该发挥的作用。"
- "结果就是中国的储蓄占整个收入的比例很高，过去的三四年里基本是直线升高，从40%往50%的方向走。"
- "个人消费占GDP的比例，一度升到48%-49%，加上政府主导的消费，可能在55%左右。过去几年，这个比例一直在下降，去年到了一个低点，往40%的方向走。"
- "一个体系运行的总流量实际上是由它最窄的地方决定的，不是由它最宽的地方决定的。"
- "近些年来，尤其是从去年下半年开始，中国政府整体的治理经济的思路发生了很大的变化。……中国长期增长的源泉只能来自于内需，这是一个重大的观念改变。"
- "今天中国生产的产品一半需要外销，这是不可持续的。"

**Hong Kong**
- "比如内陆资金不能够投香港IPO……还需要无缝地把大陆的储蓄和基金与香港的整体资本市场接上。"
- "就像放风筝的线，现在这条'风筝线'太粗了，风筝飞不高、飞不远。但最基本的核心要义就是确实要坚持一国两制"
- "如果说荷兰与英国是一种对等的合并（merger of equals），中国对香港的关系则更像是收购（acquisition），而收购所得往往未必足够珍惜"

**Trade war and world order**
- "这一轮特朗普的全球关税战，会让整个速度快起来。"
- "贸易战的直接后果就是美国对全部进口产品直接增加消费税。……对消费和整体经济都会产生一股通缩压力。"
- "目前的世界格局中，支撑美国秩序的三大核心支柱是以普世价值为基础的意识形态，以规则为基础的自由贸易和全球市场，以及美国自身的硬实力。"
- "今天美国联邦债务已经超过了GDP100%，近几年更是每年增加两万亿，且多以短债方式完成，仅今年一年需要续债和新债额度就达到10-11万亿。……对所有国家同时进行贸易战也让外国资本对美元资产的购买意愿降低。"
- "所以世界秩序的变化已经不可逆转，它会演进到一种新的秩序上。"
- "东盟加上中日韩，10+3，要在这个区域之内形成一个在WTO基础之上的自由贸易区" / "这种新的'WTO减美国'，随着欧洲的加入，将具有强大的力量。"

**US–China, Thucydides trap, Taiwan**
- "核武器的出现以及不同经济体系的建立就使得中美之间的和平相处不是一个选择，而是一种生存的状态"
- "修昔底德陷阱是西方历史的惯性思维。用它来思考今天的中美关系，其中有两点漏洞。"
- **Taiwan, the only Taiwan reference found from Li Lu:** "解决好台湾问题，中美并非终有一战，各自优劣势使中美长期的合作对双方有利。当然这不是今天的主流叙事。"

**Innovation and AI**
- "中国有可能也已经开始步入这样一个时期。" Context: an innovation-burst era, compared with Britain 1820–60, Germany 1890–1910 and the US 1880–1910 and 1940–60.
- "当技术接近AGI/ASI临界点时……直接威胁人类作为独立智能体的存在基础。"
- "需要各国，尤其是美中这样的AI大国紧密合作，共同应对。" / "中美之间的合作也日益变成一种生存状态，而不再是一种选择。"

**Coverage:** no individual stocks, no BYD/PDD/Alphabet, and no US equity valuation comment.

- [R2] **SCMP article "Chinese stocks an undervalued opportunity, says Charlie Munger disciple"** (https://scmp.com/business/money/markets-investing/article/3370602/chinese-stocks-undervalued-opportunity-says-charlie-munger-disciple). Search-result snippet: Li Lu "says excellent firms are trading at low prices relative to their competitiveness", with mention of US–China tensions and the AI race. The page returned HTTP 403 and I did not get around the block, so the **date, venue and quotes are [UNVERIFIED]**. It may be coverage of the 2026-10-05 Columbia talk 〔推論, unconfirmed〕.
- [R2] 格隆汇 flash, 2026-10-11 10:28 (https://m.gelonghui.com/live/2705031): a summary of the Columbia talk. It says AI is moving "从'工具'向'造物'演进" and that recursive self-improvement without human involvement is "极其危险". This is a paraphrase, not a transcript, and matches C3.
- Profile pieces from 2025–2026 (e.g., 砺石商业评论 via gelonghui, https://m.gelonghui.com/p/6065492) carry undated quotes such as "价值投资的核心，不是看股价，而是看企业的内在价值和核心竞争力有没有变。" No date or venue is given, so treat these as unverified.
- **2025-01-03, a critic's restatement of Li Lu (secondary source; the critic's quotation or paraphrase, not a transcript):** 程苓峰's essay "乱世从简" (Huxiu, https://m.huxiu.com/article/3867254.html) rebuts the December 2024 PKU talk. It attributes these lines to Li Lu:
  - "个人消费占GDP的比例是最重要的指标，中国才40%，要赶上美国的60%，印度的70%，才可持续。"
  - "美国人认为，中国的崛起搭了美国秩序的顺风车，又对美国秩序构成根本性甚至敌对性的挑战。"
  - "要相信市场，相信制度，相信小政府，激励自私的人性，激励自由。"
  - Use these only as a contemporaneous reading of the PKU talk.

### C3. 36th Graham & Dodd Annual Luncheon, Columbia Business School

- **Date and venue:** 2026-10-05, Metropolitan Club, New York. Fireside chat moderated by Prof. Tano Santos.
- **Official CBS Chinese transcript:** https://business.columbia.edu/sites/default/files-efs/imce-uploads/36th%20Annual%20Graham%20%26%20Dodd%20Luncheon%20Transcript%2020261005%20CBS%20Chinese.pdf
- **Huxiu versions:** 2026-10-12 https://m.huxiu.com/article/4896732.html and 2026-10-16 https://m.huxiu.com/article/4898037.html. Both are AI-assisted translations; wording differs slightly from CBS.
- Quotes below are from the CBS PDF unless marked [Huxiu].

**China's economy and real estate**
- "此后五年，直到现在，全国房地产价格平均下跌了大约 40%。"
- "这些家庭的总体财富平均下降了 60%到 70%。"
- "消费内需增长越来越慢，到今天，增速大致已经为零。"
- "储蓄存款上升到相当于 GDP 的 120%左右，可能是全球规模最大的储蓄存款，基本上达到 165 万亿元人民币。"
- "人们还经历了两三年物价基本不涨，或者略微下降的时期。"
- [Huxiu] "到 2021 年，房地产价格达到了顶峰。" / "你会做三件事：少消费、多储蓄，并尽可能偿还债务。"
- [Huxiu] "事实上，这一直是中国经济发展的模式：在不同阶段，总会设定一个重大的目标，而这个目标也会伴随着巨大的成本。"

**Manufacturing and technology**
- [Huxiu] "中国制造业终于突破了中低端，稳步进入了中高端。"
- [Huxiu] "美国主导的技术制裁，反而成了中国半导体产业的天赐良机，因为它让这个产业获得了市场经济中最宝贵的东西之一：需求。"

**China's stock market**
- "如果回顾过去十年，它基本上一直停滞不前。"
- "但由于这种经济双层分化，以及普遍的信心不足，金融市场也已经停滞十年，基本没有前进。"
- "与此同时，你又能看到一些全球竞争力极强的优秀企业，以非常低的价格交易。"
- "因为股权是唯一一种随着经济增长而增长、事实上因经济发展而增长，同时又推动经济增长的资产。"

**US–China relations**
- "特朗普第一届政府上台，发动了贸易战。"
- "以中美贸易为例。当然，直接贸易下降了，但如果把美国与墨西哥、东盟的贸易加起来看，增加的部分恰好抵消了它。"
- "美国总统和中国国家主席之所以感到有必要在八个月内会面四次，是有原因的。"
- [Huxiu] "每次会面最重要的成果，就是：我们约好了下一次会面。"
- [Huxiu] "美国领导全球已经八十年了，也承担了大部分成本" / "美国开始意识到，承担的成本与从中获得的收益，可能有些不成比例。"
- [聪明投资者 via gelonghui, https://m.gelonghui.com/p/6935122] "和平与稳定，对每一个人来说都至关重要，这本身就是一种战略利益。"

**US market and capital concentration**
- "过去 16 年，它的年化回报平均达到 14%或 15%。"
- "如果资本压倒性地流向最顶端，就意味着还有许多原本非常优秀的企业，正在以很低的价格交易。" / "美国如此，中国如此，其他地方也一样。"
- [Huxiu] "我会说，这种分化为理性的投资者提供了比其他时期更好的机会，前提是你能保持理性，而这非常困难。"

**AI**
- [Huxiu] "总的来说，这项技术极其有用、具有变革性，同时也异常危险。"
- [Huxiu] "我们知道如何让它运转、如何让它变得更好，却并不完全明白它为什么有效。"
- [Huxiu] "这项技术永远、永远都会带来增量成本。"
- [Huxiu] "凡是没有人类参与并监督的进一步发展，都应该停止。" / "我们必须牢牢把它限定在"工具"这一侧，而不是让它走向"生命体"那一侧。"
- [Huxiu] "它承诺带来具有变革性的技术，但同时又说，有 10% 的可能性会杀死所有人。"
- On an AI-lab fundraising prospectus (CBS text): "它把这些写进招股说明书，然后邀请大家按照 2万亿美元的估值，至少投入 1000 亿美元。" The Huxiu version inserts the name "Anthropic" in brackets. The CBS transcript, as fetched, does not name the company, so the attribution may be the translator's.

**Investing**
- [Huxiu] "所有理性的投资都是价值投资，因为你总是希望，得到的比付出的多一点。"
- [Huxiu] "市场是来为你服务的，而不是来指导你的。"
- [Huxiu] "投资是在预测未来，而未来本质上不可预测。你所能做的，是投资于你确实了解的东西。"
- [Huxiu] "财富归根结底，是你在全球购买力中所占的份额。"
- On where Himalaya invests: "作为全球投资者，我们选择在亚洲，以及其他地区，建设这样的教堂。"
- On Berkshire: "伯克希尔过去 60 年所取得的成就，就是把那座教堂建成了一座宏伟的大教堂。"

**Gold and crypto**
- "财富并不能简单地用你持有多少黄金、钻石或某种货币来表达。"
- "我认为，它最终会自行消失，而这也没什么，因为它从根本上就是虚假的东西。" [crypto]
- [Huxiu] "我根本不把它当回事。" [crypto]

**Coverage:** Taiwan, Japan (Li Lu himself), Europe, US debt and the dollar are not discussed. No individual stock is recommended or discussed by Li Lu: PDD, Alphabet, BYD and Tencent are not mentioned by him.

## D. Themes (facts and quotes only, Li Lu)

1. **Rates and inflation:** No direct statement found. China prices "两三年物价基本不涨，或者略微下降" (2026-10-05). Deflation is demand-driven: "当前的问题主要出在需求侧，这也导致了通缩现象的出现" (2024-12-07).
2. **US equity valuations and AI:**
   - US market returned "14%或15%" annualized over 16 years (2026-10-05).
   - Capital concentration at the top leaves many good firms "以很低的价格交易" (2026-10-05).
   - AI is "极其有用、具有变革性，同时也异常危险" (2026-10-05).
   - Nvidia is indispensable: "没有任何一家公司能够脱离英伟达而运行" (2024-12-07).
   - Action: Himalaya's only AI-adjacent holding is Alphabet, 47.9% at Q2 2026. No Nvidia position.
3. **Credit and banks:**
   - Action: BAC cut from 18.08M shares (Q4 2024) to zero (Q2 2026).
   - EWBC held unchanged.
   - A ratings and financial-data basket (SPGI, MCO, MSCI) plus HRB was bought in Q1 2026 and sold in Q2 2026.
   - No quotes on credit found.
   - [R2] HK action: Postal Savings Bank of China H-shares were sold from 6.03% to 5.93% (2024-12-06) and then below 5% (4.96%, 2025-05-08) per HKEX DI. See B4.
4. **Real estate:**
   - China house prices down about 40% from the 2021 peak. Household wealth down "60%到70%". Savings deposits about 120% of GDP, about ¥165 trillion (2026-10-05).
   - Property was 70% of household wealth, now about 60% (2024-12-07).
   - No comment on US real estate.
5. **US–China, geopolitics, tariffs, Taiwan:**
   - The US is questioning its global role (2024-12-07). The US is weighing costs against benefits (2026-10-05).
   - Trade is rerouted through Mexico and ASEAN (2024-12-07; 2026-10-05).
   - Leaders met four times in eight months (2026-10-05).
   - US tech sanctions were a "天赐良机" for Chinese semiconductors (2026-10-05).
   - **Taiwan: no statement found in either transcript.**
   - [R2] Taiwan, from the 2025-04-06 Seattle Q&A: "解决好台湾问题，中美并非终有一战，各自优劣势使中美长期的合作对双方有利。当然这不是今天的主流叙事。" This is a single sentence inside the Thucydides-trap answer.
   - [R2] Other 2025-04-06 points: tariffs are a consumption tax with deflationary pressure; the three pillars of the US order are cracking and the change is "不可逆转"; peace between the US and China is "一种生存的状态"; he proposes 10+3 free trade plus "WTO减美国".
6. **China economy and markets:**
   - China is in "2.5阶段" (2024-12-07). Consumption is 40% of GDP (2024-12-07).
   - Manufacturing has moved to the mid-to-high end (2026-10-05).
   - The China equity market is flat for ten years, with globally competitive firms "以非常低的价格交易" (2026-10-05).
   - Actions: PDD bought Q2 2025 and more than doubled Q2 2026. TME bought Q1 2026.
7. **Japan:** Only a historical reference (Meiji to 1905), 2024-12-07. Nothing current.
8. **Europe:** Nvidia's market cap exceeds all German listed companies combined (2024-12-07). Nothing else.
9. **Dollar, gold, crypto:**
   - Wealth is not measured in gold or currency. It is "你在全球购买力中所占的份额".
   - Crypto "最终会自行消失…从根本上就是虚假的东西" (2026-10-05).
   - Nothing on the dollar.
   - [R2] Dollar and US debt (2025-04-06): "美元及美元资产一直是世界金融市场的锚定资产，但是今天美国联邦债务已经超过了GDP100%……对所有国家同时进行贸易战也让外国资本对美元资产的购买意愿降低。"
10. **Crisis risk:**
    - Large drawdowns "几乎每隔几年都会发生" even in the US (2024-12-07).
    - Irrational AI capital flows: "最终，这种情况不会持续下去" [Huxiu] (2026-10-05).
    - AI existential risk framing (10% quote).
11. **Where he deploys:**
    - "作为全球投资者，我们选择在亚洲，以及其他地区" (2026-10-05).
    - 13F at Q2 2026: Alphabet 47.9%, PDD 22.2%, BRK.B 15.0%, EWBC 9.7%, CROX 2.9%, TME 1.5%, AAPL 0.9%.
    - US-listed China ADR share rose from 0% (through Q1 2025) to 23.65% (Q2 2026).
    - [R2] HK disclosures at or above 5%: BYD H fell below 5% on 2021-11-08 (dilution); PSBC H fell below 5% on 2025-05-08 (sale). No current HK holding of 5% or more appears in HKEX DI. HK or A-share holdings below 5% cannot be seen from public filings.

---

# PART 2 — DUAN YONGPING 段永平 / H&H International Investment

## A. Status & credentials

- **Business background:** Founder of 小霸王/步步高 (Subor/BBK). OPPO and vivo descend from the BBK lineage (common knowledge, not re-verified here). Retired in 2001 at age 40. (澎湃, 2025-11-15: https://m.thepaper.cn/newsDetail_forward_31967383)
- **Investing record:**
  - 2002 NetEase investment: about $2M, raised to about 6.8% of the company, reported gain over 100x on exit around 2010 (same source).
  - Won the 2006 Buffett charity lunch auction (鉅亨, 2024-02-25: https://hao.cnyes.com/post/70906).
  - Began buying Apple and Moutai around 2011–2012 (same source).
- **Public channels:**
  - Xueqiu account "大道无形我有型" (证券之星, 2026-03-23: https://stock.stockstar.com/SS2026032300024571.shtml)
  - Talks at Zhejiang University, his alma mater: 2025-01-05 exchange (woshipm transcript: https://www.woshipm.com/share/6169489.html; Huxiu 2025-01-06: https://m.huxiu.com/article/3875526.html)
  - November 2025 Xueqiu interview with founder 方三文 (10jqka, 2025-11-22: https://stock.10jqka.com.cn/20251122/c672672284.shtml)
- **Own description of holdings:** core holdings Apple, Moutai and Tencent. In A-shares he holds only Moutai. Small China Shenhua position, later swapped (澎湃, 2025-11-15). He has used about 10 of his 20 "punch-card holes."

## B. ACTIONS (numbers, dates, units)

### B1. H&H 13F: total value and positions by quarter (EDGAR)

| Quarter-end | Total 13F value | # issuers | Positions (weight %) |
|---|---|---|---|
| 2024-03-31 | $14.196B | 9 | AAPL 78.01 · BRK.B 12.12 · GOOG 5.50 · BABA 2.98 · DIS 0.65 · OXY 0.52 · MRNA 0.11 · PDD 0.09 · BAC 0.03 |
| 2024-06-30 | $16.632B | 9 | AAPL 80.95 · BRK.B 9.54 · GOOG 5.54 · BABA 2.73 · OXY 0.58 · DIS 0.45 · MRNA 0.10 · PDD 0.08 · BAC 0.03 |
| 2024-09-30 | $16.541B | 8 | AAPL 74.33 · BRK.B 10.52 · GOOG 5.12 · BABA 3.49 · PDD 3.18 · OXY 2.87 · DIS 0.44 · MRNA 0.04 (BAC exited) |
| 2024-12-31 | $14.516B | 8 | AAPL 70.50 · BRK.B 11.31 · GOOG 4.94 · PDD 4.83 · OXY 4.62 · BABA 3.18 · DIS 0.57 · MRNA 0.05 |
| 2025-03-31 | $12.004B | 11 | AAPL 63.33 · BRK.B 15.00 · PDD 7.64 · OXY 5.69 · BABA 4.39 · GOOG 1.45 · **MSFT 0.94 (new)** · DIS 0.59 · **NVDA 0.58 (new)** · **TSM 0.38 (new)** · MRNA 0.02 |
| 2025-06-30 | $11.534B | 10 | AAPL 62.47 · BRK.B 14.24 · PDD 7.86 · OXY 4.94 · BABA 3.68 · GOOG 2.99 · NVDA 1.32 · MSFT 1.20 · DIS 0.78 · TSM 0.51 (MRNA exited) |
| 2025-09-30 | $14.679B | 11 | AAPL 60.42 · BRK.B 17.78 · PDD 7.72 · OXY 4.36 · BABA 3.38 · GOOG 3.00 · MSFT 0.99 · NVDA 0.76 · DIS 0.56 · **ASML 0.53 (new)** · TSM 0.49 |
| 2025-12-31 | $17.489B | 14 | AAPL 50.30 · BRK.B 20.63 · NVDA 7.72 · PDD 7.48 · GOOG 3.33 · OXY 3.10 · MSFT 2.38 · BABA 2.15 · TSM 2.13 · DIS 0.46 · **CRWV 0.12** · **CRDO 0.12** · ASML 0.06 · **TEM 0.04** (CRWV, CRDO, TEM new) |
| 2026-03-31 | $20.004B | 19 | AAPL 36.72 · BRK.B 21.91 · NVDA 12.07 · PDD 10.09 · **TSLA 6.34 (new)** · GOOG 5.31 · OXY 3.33 · MSFT 1.88 · **UNH 0.81 (new)** · DIS 0.73 · CRDO 0.35 · TSM 0.26 · **CRCL 0.10** · **PLTR 0.04** · **SNPS, CRWD, SNOW 0.01–0.02** · TEM · **INOD** (BABA, ASML, CRWV exited) |
| 2026-06-30 | $19.101B | 18 | AAPL 41.05 · BRK.B 24.18 · PDD 9.99 · TSLA 7.44 · NVDA 6.58 · GOOG 3.64 · OXY 2.61 · MSFT 1.47 · CRDO 1.00 · UNH 0.87 · DIS 0.86 · **BABA 0.15 (re-entry)** · CRCL 0.07 · PLTR 0.04 · SNPS · SNOW · TEM · INOD (TSM, CRWD exited) |

### B2. Share-count changes (EDGAR)

**Apple (AAPL)**
- Path, in shares: 64,583,093 (Q1 2024) → 63,924,255 (Q2 2024) → 52,769,155 (Q3 2024, −11.2M) → 40,864,577 (Q4 2024, −11.9M) → 34,224,181 (Q1 2025, −6.6M) → 35,118,607 (Q2 2025, +0.9M) → 34,829,107 (Q3 2025) → 32,358,507 (Q4 2025, −2.47M) → 28,945,607 (Q1 2026, −3.41M) → 27,098,707 (Q2 2026, −1.85M).
- Net change: −58% in shares over the window.
- Weight fell from 78–81% to 36.7% (Q1 2026), then 41.1% (Q2 2026).
- Duan, 2026-07-23: part of the position was "called away" and the proceeds went into T-bills (凤凰科技: https://tech.ifeng.com/c/8uzvHLcKuP8).

**Berkshire Hathaway B (BRK.B)**
- Path, in shares: 4,092,200 → 3,899,100 → 3,782,100 → 3,621,100 → 3,381,300 (Q1 2025; flat Q2 2025) → 5,191,300 (Q3 2025, +1.81M) → 7,176,196 (Q4 2025, +1.98M) → 9,147,796 (Q1 2026, +1.97M) → 9,229,696 (Q2 2026, +81,900).
- In dollars: $1.72B (12.1%) at Q1 2024 to $4.62B (24.2%) at Q2 2026. Now the second-largest holding.

**PDD Holdings (ADR)**
- Path, in ADS: 110,000 (Q1 2024) → 103,000 → 3,907,600 (Q3 2024) → 7,228,700 (Q4 2024) → 7,753,900 → 8,662,694 → 8,574,194 → 11,536,694 (Q4 2025) → 19,748,294 (Q1 2026, +8.2M) → 25,022,094 (Q2 2026, +5.27M).
- In dollars: $12.8M to $1.909B (10.0%).

**Nvidia (NVDA)**
- New in Q1 2025: 645,100 shares.
- 964,800 (Q2 2025) → 597,800 (Q3 2025) → 7,237,100 (Q4 2025, +6.64M; $1.35B, 7.72%) → 13,843,775 (Q1 2026, +6.61M; $2.41B, 12.07%) → 6,280,675 (Q2 2026, −7.56M, −54.6%; $1.26B, 6.58%).

**Tesla (TSLA)**
- New in Q1 2026: 3,408,900 shares, $1.267B, 6.34%.
- Q2 2026: 3,380,400 shares, $1.422B, 7.44%.

**Alphabet C (GOOG)**
- 5,126,000 (Q1 2024) → 3,766,500 (Q4 2024) → 1,110,600 (Q1 2025) → 1,945,400 → 1,810,500 → 1,855,400 → 3,706,000 (Q1 2026) → 1,968,600 (Q2 2026, −46.9%).
- Duan, 2026-07-23: "我想我还会增加一些Google".

**Alibaba (BABA)**
- 5,845,330 (Q1 2024) → 6,306,830 (Q2 2024) → 5,443,730 → 5,450,830 → 3,982,130 (Q1 2025) → 3,746,230 → 2,777,330 → 2,560,500 (Q4 2025)
- Q1 2026: fully exited.
- Q2 2026: re-entry with 301,400 ADS ($28.9M, 0.15%).

**Occidental (OXY)**
- 1,134,902 (Q1 2024) → 1,543,102 → 9,223,700 (Q3 2024) → 13,577,000 (Q4 2024) → 13,826,100 (Q1 2025, peak) → 13,556,100 → 13,556,100 → 13,172,600 → 10,261,500 (Q1 2026) → 10,261,500 (Q2 2026; $498M, 2.61%).

**Microsoft (MSFT)**
- New in Q1 2025: 299,200 shares.
- Rose to 1,016,000 (Q1 2026), then 754,100 (Q2 2026).

**TSMC ADR (TSM)**
- New in Q1 2025: 271,792 ADS.
- 259,984 (Q2 and Q3 2025) → 1,224,384 (Q4 2025; $372M, 2.13%) → 151,200 (Q1 2026) → fully exited in Q2 2026.

**ASML**
- New in Q3 2025: 80,000 shares.
- 9,900 (Q4 2025), then exited in Q1 2026.

**Disney (DIS)**
- About 0.72–0.75M shares through 2025.
- Q1 2026: 1,511,800. Q2 2026: 1,706,600.

**UnitedHealth (UNH)**
- New in Q1 2026: 601,400 shares.
- Q2 2026: 399,600.

**Small AI and tech positions**
- CoreWeave: 299,900 in Q4 2025, exited Q1 2026.
- Credo: 141,300 in Q4 2025 → 751,200 (Q1 2026) → 701,200 (Q2 2026; $190.7M, 1.00%).
- Tempus AI, Circle (200,000), Palantir (60,000), Synopsys, CrowdStrike, Snowflake, Innodata: 10,000–20,000 shares each.

**Exits**
- Moderna: exited in Q2 2025 (140,700 shares at Q1 2024).
- Bank of America: exited in Q3 2024 (109,700 shares at Q1 2024).

**Media cross-checks**
- 10jqka 2026-02-18 (https://stock.10jqka.com.cn/20260218/c674839396.shtml): Q4 2025 Apple −2.4706M; NVDA +6.6393M to 7.2371M, 7.72%.
- 界面 (https://m.jiemian.com/article/14455442.html): Q1 2026 total $20.004B; 19 holdings; NVDA to 13.844M; TSLA new $1.267B.
- 21世紀 via 10jqka 2026-08-16 (https://stock.10jqka.com.cn/20260816/c678985988.shtml): Q2 2026 total about $19.1B; PDD +5.27M to 25.02M; NVDA −7.56M; GOOG −1.74M; TSM exited.
- All of these match EDGAR. One small discrepancy: 21世紀 says CrowdStrike "40,000 shares" exited, but EDGAR Q1 2026 shows 10,000.
- 界面 says Apple was "over 45% at end-2025"; EDGAR gives 50.30%.

### B3. Non-US holdings and option activity (self-reported; not in 13F)

**Moutai 600519 (A-share)**
- Holding since 2012 (WallStreetCN via 36kr, 2026-09-29: https://eu.36kr.com/zh/p/4003949400936576).
- Publicly posted buys:
  - January 2025
  - October 2025
  - 2026-05-07: "我今天还买了茅台啊"
  - 2026-09-28: "买了点贵州茅台". Media estimate about 30,000 shares at about ¥1,230, about ¥36.9M; this size is a media estimate, not Duan's figure.
    - [R2 更正：the size reportedly comes from Duan's own screenshot] 华尔街见闻 says "段永平发布的截图显示，他以1230.85元的价位买了3万股，耗资约3692.54万元". 10jqka 2026-09-29 says the same ("交易截图显示其以1230.85元/股买入3万股"). I did not see the screenshot myself, and it shows one account only, not total holdings. Sources: https://wallstreetcn.com/articles/3782664 ; https://stock.10jqka.com.cn/20260929/c680374766.shtml
  - [R2] Further dated Moutai posts and actions:
    - 2025-01-09: "今天买了腾讯，也买了茅台。" (证券之星: https://wap.stockstar.com/detail/SS2025011000043864)
    - 2025-10-13: "今天买了点茅台。" (华尔街见闻, same URL)
    - 2026-02-03: "那天卖了一些神华（港股）换了一些茅台，没想到机会窗口那么小。……上午11:30收盘这个规矩让我很麻烦哈。" (华尔街见闻, same URL)
    - Early February 2026: per 36氪, he posted a limit order for 20,000 shares at ¥1,365 (about ¥27.3M) with the comment "这个价格大概率能够买到吧". Exact date not given and I did not see the screenshot. (36氪 2026-02-10: https://www.36kr.com/p/3675746517266948)
- Sources: same; 投中网 2026-09-29: https://m.chinaventure.com.cn/news/80-20260929-393473.html
- Moutai price context: closed at ¥1,243 on 2026-09-28, market cap about ¥1.55 trillion. Ten-year return +412%; five-year return −33% to end-June 2026 (same).

**Tencent 0700 (HK)**
- He said he "bought a lot" in "last year" (meaning 2025): "其实我管的钱里去年是买了不少腾讯的", Xueqiu, cited in Stockstar 2026-03-23. Same quote reported in 10jqka 2026-04-16 (https://stock.10jqka.com.cn/20260416/c676051755.shtml).
- April 2026: denied cutting Tencent.
- History: August 2022 disclosure that Tencent was under 1% of his portfolio (itiger, 2025-02-25: https://www.itiger.com/news/2514906088).
- [R2] 2025-01-09: "今天买了腾讯，也买了茅台。" He was answering a user who asked "您对腾讯被制裁怎么看". The "sanctions" were Tencent's addition to the US DoD 1260H list in early January 2025; that context is from 36氪 and was not re-verified. (证券之星 SS2025011000043864; 36氪: https://www.36kr.com/p/3125099659869959)
- [R2] Tencent is not in HKEX DI under Duan or H&H, so his stake is below 5%.
- [R2] The quote "每下跌10%加仓一次", which some outlets date to 2025, appears to come from March 2022 per search results. Not re-verified and not used here.

**China Shenhua and Pop Mart (HK)**
- 2026-05-07: said he swapped his China Shenhua position into Pop Mart: "把神华都换了泡泡玛特" (界面).
- 2026-07-23: "泡泡玛特我才刚开始买啊！我猜10年内大概率是不会卖的。" (凤凰科技; Stockstar 2026-07-24: https://wap.stockstar.com/detail/SS2026072400028608)
- [R2] **Pop Mart 09992: HKEX DI Form 1 record (primary source).**
  - Filer: "Duan Yong Ping". Every notice uses capacity 2201 (interest of a controlled corporation), and the controlled corporation is H&H International Investment, LLC (99.00%). Media wording such as "段永平与其一致行动人" is not what the form says: no section-317 concert party is declared.
  - "Listed derivatives – physically settled" are reported separately. Long derivatives (code 11032: the holder is obliged to *take* shares) are consistent with short puts. Short derivatives (code 14012: obliged to *deliver* shares) are consistent with short calls. Matching these codes to "short put" and "short call" is my reading 〔推論〕; the 2026-06-30 form itself says "Short call positions were assigned or expired".
  - Issued shares: 1,341,043,150 (May–June 2026), 1,331,723,150 (July 2026), 1,331,779,203 (August–September 2026).
  - Source list: https://di.hkex.com.hk/di/NSNoticePersonList.aspx?sa2=np&scpid1=156902&scpid3=0&scpid2=312028&sa1=pl&scsd=01%2f01%2f2017&sced=08%2f11%2f2026&pn=Duan+Yong&src=MAIN&lang=EN&

  | Event date | Filed | Form | Code / event | Shares, price | Long after (of which listed derivatives) | Short after | Long % |
  |---|---|---|---|---|---|---|---|
  | 2026-05-25 | 2026-05-27 | IS20260527E00003 | 1001: first notifiable, purchase | 9,823,200 at HK$150.00 | 76,371,600 (37,520,000) | – | **5.69** (4.96 before) |
  | 2026-05-28 | 2026-06-03 | IS20260603E00005 | 1101: purchase | 4,660,000 at HK$162.50 | 81,031,600 (41,960,000) | – | 6.04 |
  | 2026-05-28 | 2026-06-03 | IS20260603E00004 | 14012: short derivative ≥1% | 8,733,600 | 81,031,600 | 17,230,000 (1.28%) | 6.04 |
  | 2026-06-17 | 2026-06-24 | IS20260624E00014 | 14012 | 1,080,000 | 92,328,400 (41,960,000) | 27,027,000 (2.02%) | 6.88 |
  | 2026-06-30 | 2026-07-06 | IS20260706E00002 | 1503: short fell. Supplementary: "Short call positions were assigned or expired" | 23,037,000 | 80,682,800 (40,000) | 2,910,000 (0.22%) | 6.06 |
  | 2026-07-06 | 2026-07-10 | IS20260710E00009 | 1101: purchase | 10,590,000 at HK$150.00 | 101,862,800 (21,020,000) | – | 7.65 |
  | 2026-07-06 | 2026-07-10 | IS20260710E00008 | 14012 | 2,000,000 | 101,862,800 | 14,493,000 (1.09%) | 7.65 |
  | 2026-07-30 | 2026-08-05 | IS20260805E00003 | 1503. Supplementary: "options assigned / expired" | 16,613,000 | 73,930,000 (2,020,000) | 4,705,000 (0.35%) | 5.55 |
  | 2026-07-30 | 2026-08-05 | IS20260805E00004 | **1203: delivered shares under equity derivatives** | 27,932,800 at HK$162.50 | 73,930,000 (2,020,000) | 21,318,000 (1.60%) | 5.55 |
  | 2026-08-06 | 2026-08-12 | IS20260812E00002 | 11032: wrote derivatives with obligation to take shares | 28,646,000 at HK$160.00 | 102,576,000 (30,666,000) | – | 7.70 |
  | 2026-09-01 | 2026-09-05 | IS20260905E00004 | 11032 | 1,000,000 at HK$155.00 | **106,716,000** (10,000,000) | – | **8.01** |

  - The latest notice found (to 2026-11-08) is 2026-09-01, at 8.01% long. That figure includes 10,000,000 shares' worth of physically settled derivatives, so it is not a pure share count. 财联社 makes the same point.
  - Duan's own explanation of the 2026-07-30 drop to 5.55%, around 2026-08-05: "就是put expired，部分被call走了。" (10jqka 2026-08-05: https://stock.10jqka.com.cn/20260805/c678699435.shtml)
  - HKEX DI search for "Duan Yong", "Yong Ping" and "H&H International" returns **only Pop Mart**. No Tencent or other HK issuer appears, so none is held at 5% or more.
- [R2] **Pop Mart timeline in Duan's own words (Xueqiu, as quoted by media)**
  - 2025, in a conversation with 王石 and 田朴珺; media date it August 2025, exact date not given: "虽然我看不懂这家公司，我不会去买他们股票，不会做他们投资，但是他能够把情绪价值的产品做成这个样子，不是随便就能做成的。" (每经 2026-07-20: https://www.nbd.com.cn/articles/2026-07-20/4481983.html)
  - January 2026: "我大致看过泡泡玛特，觉得他们确实蛮厉害的。不过，我依然无法理解人们为什么会需要这个东西，万一过两年大家都不要了呢？" (same)
  - 2026-03-30: "这两天花时间重新看了看泡泡玛特，决定收回之前不投资的说法" (界面 2026-10-26: https://m.jiemian.com/article/15239475.html)
  - 2026-04-09: "简而言之，我的泡泡玛特保险公司正式开张了。" (每经 2026-07-20; 10jqka 2026-05-07: https://stock.10jqka.com.cn/20260507/c676518994.shtml)
  - 2026-04-14: per 界面, because he was unfamiliar with HK option rules, his short puts hit the system cap of 225,000 contracts. This is 界面's paraphrase, not a quote.
  - 2026-05-07, on swapping out Shenhua: "我觉得神华是一家很好的公司，我们的投资也获得了很好的回报，在此谢过了！将来有机会还会再回来。" (10jqka 2026-07-10: https://stock.10jqka.com.cn/20260710/c678109499.shtml)
  - 2026-05-27: "我觉得王宁对自己产品的理解以及追求和乔布斯是一个级别的，至少未来会是的。王宁对商业的理解好像比乔布斯还要强一点点。" (每经 2026-05-28: https://www.nbd.com.cn/articles/2026-05-28/4411083.html). 每经's "about HK$11.8 billion" invested is a reporter estimate at about HK$155 per share, not a disclosed figure.
  - 2026-07-02, asked whether Pop Mart counts as one of his 20 punch-card holes: "应该算了。" (财联社 2026-07-10: https://www.cls.cn/detail/2423334)
  - 2026-07-06: "你有点老登了！……人是需要有点东西让自己开心的，别老是苦哈哈一副干大事业的样子啊。" (same)
  - 2026-07-10: "从未来十年的角度看，茅台更稳，泡泡升值空间更大，波动可能也更大，意味着可能短期会亏钱，可能长期也亏。" / "泡泡玛特目前是个2000亿港币市值左右的公司，去年已经赚到130亿元人民币的利润……未来10年20年的平均年利润大概率不会低于现在。这里假设了人们确实会持续有这种情绪价值的需求（我觉得我自己就有）。只要这个假设没问题（但这个假设是有可能错的），我的投资逻辑就是成立的。" (每经 2026-07-20; 澎湃: https://www.thepaper.cn/newsDetail_forward_33645747)
  - 2026-07-20: posted a photo with 王宁 at the World Cup final (每经 2026-07-20).
  - **2026-10-21**, with Pop Mart at HK$129.8, down 5 straight days: "我应该还会再买一些，但不会超过公司的10%，不然公司该有意见了哈。网易我最多也就到过10%左右吧。现在搞得我像个泡泡玛特代理人似的，我以后不想再回答这种问题了，反正我的观点该说的都说了，对错过几年就知道了。" (界面: https://m.jiemian.com/article/15219539.html ; 财联社: https://www.cls.cn/detail/2511432)
  - Context 〔事實, company/third-party〕: Pop Mart H1 2026 revenue was ¥17.173 bn (171.73亿元), up 23.8%, and net profit attributable ¥5.038 bn (50.38亿元), up 10.1%, below consensus. Goldman channel tracking showed Q3 2026 Tmall plus Douyin sales down 30% year on year. 界面's "paper loss of about HK$1.846 bn (−12.07%)" as of 2026-10-26 rests on an assumed HK$150 cost; it is not Duan's figure. (界面 2026-10-26)

**Options (short puts and calls, self-reported)**
- **Tesla:** started via puts in November 2025: "我卖put了，我很可能会一直卖". Tesla shares first appear in the 13F at Q1 2026.
- **Nvidia:** puts, "英伟达保险公司". Target return: "年化20%我就很开心了" (2026-03-23).
- **Apple:** sells calls when expensive; some shares called away by 2026-07-23.
- **Micron:** sold puts in 2025 and again in July 2026.
- **Plans as of 2026-07-23:** sell puts on SpaceX, Tesla and Palantir.
- [R2] **Nvidia, first put sale:** the day after Nvidia's FY2025 Q4 results (2025-02-26/27), he said: "尽管没完全看懂NVDA(英伟达)，但我还是准备开始卖点NVDA的put了。AI值得关注，NVDA其实是个很不错的公司。" (智通财经 via Tiger, 2025-02-27 21:55: https://itiger.com/news/2514005258)
- [R2] **TSMC put:** 2025-03-08 to 03-11 posts, via 证券之星 (https://stock.stockstar.com/SS2025031100024601.shtml). A screenshot shown there is a Schwab order to sell TSM 01/16/2026 $175 puts, 100 contracts, limit $23.2. Whether it was filled is not shown. TSM ADR first appears in the H&H 13F in Q1 2025 (271,792 ADS).
- [R2] **Pop Mart puts and calls:** visible in HKEX DI as physically settled listed derivatives (see the Pop Mart table above). Long derivatives peaked at 41.96M shares (2026-05-28 to 06-17). Short derivatives peaked at 27.03M shares, 2.02% (2026-06-17). On 2026-07-30, 27,932,800 shares were delivered at HK$162.50 under derivatives.
- [R2] **Tesla start, exact date:** Xueqiu post on 2025-11-20: "最近终于再多花了点时间看了很多马斯克的东西。面对他的那么多厉害的产品，我上个礼拜和这个礼拜已经开始投点在特斯拉上了，满意了吧？……" Per 上海证券报 via 华尔街见闻, the method was selling short-dated puts. (https://wallstreetcn.com/articles/3759877)
- [R2] No report found of his Tesla puts being exercised. Tesla shares appear in the 13F from Q1 2026 (3,408,900).
- Sources: 10jqka 2025-11-22; Stockstar 2026-03-23; 凤凰 2026-07-23.

**Cash management:** proceeds placed in T-bills (2026-07-23).

## C. WORDS (direct quotes 2024–2026)

### C1. Zhejiang University exchange

- **Date:** 2025-01-05.
- **Transcripts:** https://www.woshipm.com/share/6169489.html ; https://m.huxiu.com/article/3875526.html
- These are edited third-party transcripts.

**Market timing and long-termism**
- "我没见过谁能很快下判断，包括巴菲特和芒格这样的投资高手，他们的节奏也很慢。"
- "所以，看长远，持有好公司，生活会愉快许多。"
- "我跟很多人说，价值投资不等于长期投资。"

**Risk and leverage**
- "不能用自己的必需资金去赌一个不需要的钱。" (Huxiu wording)
- "另外就是不要使用杠杆，不要用股票去抵押以为股票要涨，就借很多钱，如果股票在上涨之前跌了一下，你就完了。"
- "我一年赚个10%到25%就挺好的，搞一个500%回报，但可能会亏得一干二净，那我为什么要去做呢？"

**Apple**
- "我觉得苹果的生意模式，主要是iPhone，比可口可乐要好。"

**Moutai**
- "茅台价格下降不等于它公司状况不好，其实好得很。" / "酒其实还是买不到，我们有渠道购买他们的酒，给的量都很小。"

**Tencent and Moutai**
- "比如说腾讯、茅台，像我们公司，其实都挺好。"

**Economic downturn**
- Asked about a downturn cycle: "我们确实面临这个问题". He adds (paraphrase) that good companies do fine in bad economies.

**AI**
- "我的简单说法是不明觉厉。我确实觉得它厉害，但确实不是很懂。"

**Nvidia**
- "我今天还在问你对NVIDIA怎么看待，它有没有可能被替代等等，我确实不懂。"

**US–China**
- "中美对立吗？我们学校谁建的？大家不要忘了这个事。" / "其实呢，人家对我们还挺好的。我看过很多人现在去美国，没有人受太多的打击，挺好的。"

**PDD**
- "人家的用户越来越多，那么多人喜欢用它，你非说它不对，到底是啥意思？" / "他不是为了挣钱，他也不会蒙你。"

**Circle of competence**
- "所以这取决于你有多懂，如果你懂你投的东西，就不应该碰不懂的。"

### C2. 2025 posts and interviews

**Tencent**
- 2025-02-24, social reply to a claim that Tencent buyers lack ability: "你闭嘴吧！说得你比我还有钱似的。"
- Earlier post: "港股里我能看懂的好公司里腾讯确实是top的。" (itiger 2025-02-25)
- 2025, reply on Tencent reaching ¥10 trillion market value: "最好不要想市值，集中精力看生意！" (10jqka 2026-04-16)

**Nvidia and AI (2025 conversation with 方三文)**
- "英伟达（NVDA）确实厉害"
- "AI这个东西我觉得至少掺和一下，不要错过了。"
- Source: 10jqka 2026-02-18. Exact 2025 date not given.

**November 2025 Xueqiu interview with 方三文 and posts** (10jqka 2025-11-22; 界面; Tencent News 2026-05-20: https://news.qq.com/rain/a/20260520A06OX300)
- "我上个礼拜和这个礼拜已经开始投点在特斯拉（TSLA）上了，满意了吧？"
- "不做朋友但还是可以投资的嘛，反正他也不打球。"
- "就当风投吧，我觉得10年后回头看，这个投资也许是对的。"
- "投资实际上是在跟他做朋友，我不想跟他做朋友，哪怕给我钱我也不干。"
- "我卖put的时候最重要的就是想一点：这个价钱卖给我10年后回头看是个便宜的价钱吗？"
- "电动车这个生意不会太好，会很累，它差异化很小。" He goes on to say Tesla "真正做到了差异化".
- "就像我们当年做游戏机一样，一开始可能有几百家企业涌入，但卷到最后只会剩下几家能赚钱，其余的都会倒下。"
- "投资很简单，但不容易。" / "买股票就是买公司。"

**NetEase retrospective (interview, week of 2025-11-15)**
- "为什么赚了那么多钱还不卖？那些钱对我来讲并不多，所以我可以比较理性地去想一件事情。" (澎湃)

**PDD (undated, reported 2025-11-15)**
- "我对他们（拼多多）整个文化、整个团队，我是信任的，但是大环境我不知道。"
- "我觉得这公司（拼多多）还是有点意思，但是有风险的，我不推荐别人买。" (澎湃)

**Speculation (undated, reported 2025-11-15)**
- "不要炒股，炒股是很难赚钱的，80%左右的散户在牛市和熊市都亏钱。"

**[R2] TSMC and Taiwan semiconductors (Xueqiu, 2025-03-08 to 03-11, via 证券之星 2025-03-11: https://stock.stockstar.com/SS2025031100024601.shtml)**
- "开始想想TSM(台积电)。35年前我就知道TSM是家非常厉害的公司。但开始投资后一直没下过手，就是觉得他是非常重资产的公司。现在开始关注。"
- "这不是预期回报，是最大回报……真实内在逻辑是：从10年后看回来，151.8的台积电你愿不愿意买？"
- "TSMC的商业模式和企业文化都很强。it's not for fun。"
- "to C的生意容易理解，因为你能直接看到产品，to B有点难，除非你刚好是使用者。nvda的moat到底有多强我还不是非常确定，但至少知道他目前还是非常强的。TSMC和微软都是很厉害to B的公司，我后知后觉了。" Also quoted in 证券之星 2025-05-16: https://stock.stockstar.com/SS2025051600021123.shtml
- "30年前我对UMC的人说，未来TSMC会远厉害过UMC和三星，因为TSMC非常专注，而且只专注在代工上。"
- These are the only Duan statements on TSMC found. **I found no statement explaining the cut** from 1,224,384 ADS (Q4 2025) to 151,200 (Q1 2026), or the exit in Q2 2026. No statement on Taiwan as a place or on geopolitics was found.

**[R2] Nvidia (2025-02-27)**
- "尽管没完全看懂NVDA(英伟达)，但我还是准备开始卖点NVDA的put了。AI值得关注，NVDA其实是个很不错的公司。" (https://itiger.com/news/2514005258)

### C3. 2026 posts (Xueqiu "大道无形我有型" unless noted)

**AI**
- Early January 2026 new-year remarks: "这玩意儿真是越用越觉得有意思，感觉世界有点不一样了。" (10jqka 2026-02-18)

**[R2] Apple screenshot (2026-01-01/02)** (鉅亨/美股財經社: https://hao.cnyes.com/post/223969 ; 中国证券报 2026-01-19: https://cs.com.cn/tzjj/tjdh/202601/t20260119_6533761.html)
- He posted a screenshot of two accounts: 130,000 shares bought 2011-11-18 at $13.75, and 2,388 shares bought 2022-12-30 at $128.94. Combined return shown: 1,623.48%.
- "也可能只是運氣好而已。感覺有點飄了，其實不過是吃到了時代的紅利而已。"
- "再曬一個帳號吧。我管了大大小小差不多50個帳號，很多都是別人的錢。"
- 2026-01-02: "我在這裡分享的就是一個普通人如果堅持做對的事情，也是可能有成就的……"

**Tesla (February 2026, reply; paraphrase)**
- His view of Musk is unchanged, but Musk's products (FSD, Starlink, rocket recovery) are impressive.
- Tesla as an investment is largely about "市梦率" (Tencent News 2026-05-20).
- [R2] Dated 2026-02-04 by 36氪 (https://www.36kr.com/p/3675746517266948). Quoted wording there: "“投资”特斯拉基本看的是“市梦率”，完全靠蒙" / "马斯克的产品确实很了不起，FSD、Starlink、火箭回收……很多东西刚开始说的时候觉得像是蒙人的，结果10来年后真的做出来了。" / "我可以放下一些东西，试试他的产品，投资也可以做点风投啥的。" Some of this is 36氪's rendering and may be condensed.

**Cash flow and ETFs (2026-03-10)**
- "我说的现金流指的是"未来的现金流"，是"未来的"！你那个是过去式。"
- "ETF只是一个生意，我觉得他们会投你所好地去成立各种产品。" (Stockstar 2026-03-23)

**Moutai and housing (2026-03-20)**
- "闲钱买茅台大概率比存银行强。"
- To a 19-year-old: "19岁买房子太早了，这么早被房子困住确实不应该的，但这个年纪能有买房子的钱是你的运气哈。" (Stockstar 2026-03-23)

**Geopolitical crises (March 2026)**
- "好公司便宜的时候都是加仓的时机。但是搞清楚谁是好公司以及是不是便宜并不容易。" (Stockstar 2026-03-23; 10jqka 2026-04-16)

**Options, timing and benchmark (2026-03-23)**
- "好吧，给你看看我的英伟达保险公司都在做啥。年化20%我就很开心了。"
- "我其实完全没有对短期的预期，我只是关注这家公司长期是不是有这个价值。"
- "如果我不了解这家公司的话，我是不可以卖Option的。"
- "好公司股价过低的时候不要卖call，股价过高的时候也不要卖put，不然回报率可能会低下来。"
- "苹果涨到我觉得不便宜的时候就开始卖点call了，被call走后如果价格回落我还是有可能再卖点put的。"
- "反正我能跑赢S&P就好，至少我能跑赢政府债券哈。"

**Tencent (April 2026)**
- "我什么时候说过我减持腾讯了？我卖腾讯的Put都被限制过了哈。腾讯是很好的公司，要惜卖。" (10jqka 2026-04-16)

**Pop Mart (April 2026)**
- "我不太关心他们具体做什么，这是王宁要考虑的事情。我在意的是商业模式和企业文化。" (10jqka 2026-04-16)

**Apple (recent, undated in 界面)**
- "苹果很成熟，但依然还会增长。不过目前股价不便宜了。虽然不是很舍得卖，但也不太会在这个价位下手买了，哪怕是put也不太敢卖了。"

**2026-05-07**
- "把神华都换了泡泡玛特"
- "我今天还买了茅台啊，你会凌乱吗？"
- "苹果和茅台的商业模式其实都很强，假设你的钱既能买茅台也能买苹果的话（很多人其实做不到），你的投入所对应的公司份额谁赚的钱多谁就是更便宜了。" (界面; 36kr)

**Moutai (undated)**
- "喜欢喝茅台的人认这个口味，而且国营企业属性能避免随意更改53度飞天这样的核心产品，这是民营酒企比不了的。" (界面)

**2026-07-23/24** (凤凰科技 https://tech.ifeng.com/c/8uzvHLcKuP8; Stockstar https://wap.stockstar.com/detail/SS2026072400028608)
- Apple: "我的水果（苹果）已经比较成熟了，刚刚被call走了一些". He put the proceeds into T-bills. "虽然现在价格比call走的价格还要低一点点，但这个价位我并不是很想买入。"
- Puts: "前几天我已经卖了一些 MU（美光科技）的 put" / "这几天我会卖点SpaceX， 特斯拉的put的，还有PLTR（Palantir）也会卖点 put。"
- "AI是不容被忽视的，努力理解中……"
- "我想我还会增加一些Google，有机会还想增加一些BRK.B。"
- Nvidia: "我应该还会保持我的NVDA体量，就是put到期后会继续卖put的意思。" / "我本来也没打算增加，目前也不会打算减少。"
- On CUDA moat debate: "这其实就是黄仁勋一直担心的事情。"
- On memory: "这次标准内存短缺大概就是因为做HBM这三家的产能被HBM占有了。"
- "泡泡玛特的生意模式没有茅台那么稳定，但未来增长空间可能大一些。"
- On Musk: "虽然我确实不喜欢马斯克的有些东西，但他确实有很厉害的方面。"
- On cash vs. Buffett: "我还年轻，有点急也正常嘛。"

**Moutai bet (2026-08-13; post later not findable on Xueqiu, per media)**
- "我敢抱着茅台跟任何国内基金赌一个亿人民币，以十年为限。前提是事前要说好赢家赢得钱捐给的对象能得到对方的认可。我会捐给步步高实验学校。"
- Follow-up: "要先拿出一个亿捐了，然后才能加入" (36kr / 投中网 2026-09-29)

**2026-09-28**
- "买了点贵州茅台" (same)

**[R2] Moutai, other 2026 replies** (华尔街见闻: https://wallstreetcn.com/articles/3782664)
- 2026-09-11, on Moutai's "cycle": "'周期'是炒股票的人的观点。你买的时候如果真的看懂了，真的打算拿10年或更长，你会明白茅台的'周期'的。"
- On H1 2026 series-liquor revenue falling 6.02%, date not given: "我猜这个说明茅台开始不搭配系列酒了吧？这是个非常理智的选择，长期有利于健康。"
- Repeated replies: "茅台还是那家茅台啊！"

**[R2] 2026-08-05: Pop Mart stake drop to 5.55%**
- "就是put expired，部分被call走了。" (10jqka)

**[R2] 2026-10-21: Pop Mart**
- "我应该还会再买一些，但不会超过公司的10%……对错过几年就知道了。" Full text in B3.

**[R2] Gold (undated compilation)**
- 36氪 (2026-02-10) attributes to him: "黄金本身不会产生任何东西。你买了它放在那里，100年后它还是那块金子，不会多出一分钱。"
- No date or venue is given, so this is [UNVERIFIED] as to when he said it. (https://www.36kr.com/p/3675746517266948)

**[R2] Nvidia Q2 2026 cut (−7.56M shares, −54.6%)**
- I found no Duan statement explaining it. The closest statements are from 2026-07-23: "我本来也没打算增加，目前也不会打算减少" and "put到期后会继续卖put".
- Searches of 界面, 澎湃, 财联社 and 华尔街见闻 coverage of the Q2 13F (2026-08-14 to 08-16) found only the numbers, no reason. [UNVERIFIED]

**[R2] Alibaba exit (Q1 2026) and token re-entry (Q2 2026, 301,400 ADS)**
- No Duan statement found. [UNVERIFIED]

**[R2] PDD 2026**
- A search snippet says that when asked whether PDD is undervalued he replied only "我怎么看重要吗?" (蓝鲸, https://www.lanjinger.com/d/1783740564641661944). The page returned an empty reply, so this is [UNVERIFIED].

## D. Themes (facts and quotes only, Duan)

1. **Rates and inflation:**
   - Benchmark is "跑赢S&P…至少我能跑赢政府债券" (2026-03-23).
   - "闲钱买茅台大概率比存银行强" (2026-03-20).
   - Option proceeds parked in T-bills (2026-07-23).
   - No macro rate view found.
2. **US equity valuations and AI:**
   - AI: "不明觉厉" (2025-01-05) → "至少掺和一下，不要错过了" (2025) → "感觉世界有点不一样了" (January 2026) → "AI是不容被忽视的，努力理解中" (2026-07-23).
   - Apple: "目前股价不便宜了" (2026). Palantir described as expensive (paraphrase, 2026-07-23).
   - Actions: Nvidia went from 0 to 12.07% (Q1 2026), then 6.58% (Q2 2026). New positions in MSFT, TSM, ASML, CRWV, CRDO, TEM, PLTR, SNPS, CRWD, SNOW and INOD from 2025 to 2026. TSLA new in Q1 2026.
3. **Credit:**
   - "不要使用杠杆，不要用股票去抵押" (2025-01-05).
   - BAC small position exited in Q3 2024. No credit-market comments.
4. **Real estate:**
   - "19岁买房子太早了，这么早被房子困住确实不应该的" (2026-03-20).
   - No macro China or US property view found.
5. **US–China and Taiwan:**
   - "中美对立吗？…其实呢，人家对我们还挺好的" (2025-01-05).
   - PDD: "大环境我不知道" (undated, reported 2025-11).
   - **Taiwan:** no statement found. Action only: TSM ADR bought in Q1 2025, peaked at 1.22M ADS / 2.13% in Q4 2025, cut to 151,200 in Q1 2026, fully exited in Q2 2026.
   - [R2] TSMC as a business, 2025-03: "35年前我就知道TSM是家非常厉害的公司……就是觉得他是非常重资产的公司" / "TSMC的商业模式和企业文化都很强". He also posted a TSM $175 Jan-2026 put order. Still no statement on Taiwan geopolitics, and none on why he exited.
   - Geopolitical crises: "好公司便宜的时候都是加仓的时机" (March 2026).
6. **China economy and markets:**
   - "我们确实面临这个问题" on the downturn (2025-01-05).
   - Actions on China:
     - PDD went from 110k ADS to 25.0M ADS (about 10% of 13F).
     - BABA was cut steadily and exited in Q1 2026, then re-entered at a token size in Q2 2026.
     - Tencent "bought a lot" in 2025.
     - Moutai buys in January 2025, October 2025, May 2026 and September 2026.
     - Shenhua swapped for Pop Mart in May 2026.
     - [R2] Pop Mart per HKEX DI: 5.69% (2026-05-25) → 8.01% long (2026-09-01; includes 10M shares' worth of derivatives). On 2026-10-21 he said he would buy more but stay under 10%.
     - [R2] Moutai purchase posts: 2025-01-09, 2025-10-13, 2026-02-03 (Shenhua swapped for Moutai), 2026-05-07, 2026-09-28.
7. **Japan:** nothing found.
8. **Europe:** ASML held briefly, Q3 2025 to Q4 2025, exited Q1 2026. No comments.
9. **Dollar, gold, crypto:** Circle Internet Group (stablecoin issuer) held at 200,000 shares since Q1 2026, about 0.07–0.10%. No quotes found on gold or crypto.
   - [R2] Gold: one undated line attributed by 36氪 (2026-02-10): "黄金本身不会产生任何东西……100年后它还是那块金子". The date is [UNVERIFIED].
10. **Crisis risk:**
    - "不能用自己的必需资金去赌一个不需要的钱" (2025-01-05).
    - "我其实完全没有对短期的预期" (2026-03-23).
11. **Where he deploys:**
    - Q2 2026 13F: AAPL 41.1%, BRK.B 24.2%, PDD 10.0%, TSLA 7.4%, NVDA 6.6%, GOOG 3.6%, OXY 2.6%.
    - Outside the 13F: Moutai, Tencent, Pop Mart, and short puts on NVDA, TSLA, MU, PLTR and SpaceX.
    - [R2] Pop Mart is the only off-13F holding with a size disclosed by regulatory filing: 106,716,000 long (8.01%) at 2026-09-01. At the HK$129.8 close on 2026-10-21 that is about HK$13.9 bn 〔推論: arithmetic, includes the derivatives portion〕. For scale, total 13F value was $19.1 bn at Q2 2026.

---

# E. Chart-ready data (verified from EDGAR; values in %, weights of total 13F market value)

Source for every value is the EDGAR filing for that quarter (index URLs in the table at the top).

### E1. Himalaya Capital: 13F weights by quarter (%)

| Quarter | Total ($B) | Alphabet (A+C) | Bank of America | PDD | Berkshire B | East West Bancorp | Apple | Occidental | Other |
|---|---|---|---|---|---|---|---|---|---|
| 2024Q1 | 2.260 | 37.49 | 30.33 | 0 | 16.70 | 9.72 | 5.76 | 0 | 0 |
| 2024Q2 | 2.562 | 39.88 | 28.07 | 0 | 14.26 | 7.94 | 6.25 | 3.61 | 0 |
| 2024Q3 | 2.472 | 37.64 | 29.02 | 0 | 16.71 | 9.29 | 2.99 | 3.06 | 1.28 (SOC) |
| 2024Q4 | 2.711 | 39.14 | 29.31 | 0 | 15.01 | 9.81 | 2.93 | 2.67 | 1.13 (SOC) |
| 2025Q1 | 2.212 | 35.09 | 26.12 | 0 | 21.61 | 11.26 | 1.11 | 3.27 | 1.54 (SOC) |
| 2025Q2 | 2.689 | 32.84 | 18.36 | 17.93 | 16.22 | 10.43 | 0.84 | 2.29 | 1.10 (SOC) |
| 2025Q3 | 3.230 | 37.62 | 16.66 | 18.85 | 13.97 | 9.15 | 0.87 | 2.15 | 0.73 (SOC) |
| 2025Q4 | 3.569 | 43.86 | 16.08 | 14.64 | 12.64 | 8.74 | 0.84 | 1.69 | 1.51 (CROX) |
| 2026Q1 | 3.201 | 44.81 | 4.57 | 14.71 | 13.44 | 9.26 | 0.88 | 2.98 | 9.36 (CROX 2.30, TME 1.91, SPGI 1.61, HRB 1.61, MCO 1.61, MSCI 0.32) |
| 2026Q2 | 3.703 | 47.94 | 0 | 22.17 | 14.98 | 9.68 | 0.86 | 0 | 4.38 (CROX 2.89, TME 1.49) |

### E2. China-related share of US 13F portfolio (%)

Definition: US-listed China-company ADRs only. Himalaya counts PDD + TME. H&H counts PDD + BABA. EWBC is excluded. Off-13F Moutai, Tencent and Pop Mart are not included.

| Quarter | Himalaya | H&H |
|---|---|---|
| 2024Q1 | 0.00 | 3.07 |
| 2024Q2 | 0.00 | 2.81 |
| 2024Q3 | 0.00 | 6.68 |
| 2024Q4 | 0.00 | 8.01 |
| 2025Q1 | 0.00 | 12.03 |
| 2025Q2 | 17.93 | 11.54 |
| 2025Q3 | 18.85 | 11.10 |
| 2025Q4 | 14.64 | 9.63 |
| 2026Q1 | 16.62 | 10.09 |
| 2026Q2 | 23.65 | 10.14 |

### E3. H&H International: top-holding weights by quarter (%)

| Quarter | Total ($B) | Apple | Berkshire B | PDD | Nvidia | Tesla | Alphabet C | Occidental | Alibaba |
|---|---|---|---|---|---|---|---|---|---|
| 2024Q1 | 14.196 | 78.01 | 12.12 | 0.09 | 0 | 0 | 5.50 | 0.52 | 2.98 |
| 2024Q2 | 16.632 | 80.95 | 9.54 | 0.08 | 0 | 0 | 5.54 | 0.58 | 2.73 |
| 2024Q3 | 16.541 | 74.33 | 10.52 | 3.18 | 0 | 0 | 5.12 | 2.87 | 3.49 |
| 2024Q4 | 14.516 | 70.50 | 11.31 | 4.83 | 0 | 0 | 4.94 | 4.62 | 3.18 |
| 2025Q1 | 12.004 | 63.33 | 15.00 | 7.64 | 0.58 | 0 | 1.45 | 5.69 | 4.39 |
| 2025Q2 | 11.534 | 62.47 | 14.24 | 7.86 | 1.32 | 0 | 2.99 | 4.94 | 3.68 |
| 2025Q3 | 14.679 | 60.42 | 17.78 | 7.72 | 0.76 | 0 | 3.00 | 4.36 | 3.38 |
| 2025Q4 | 17.489 | 50.30 | 20.63 | 7.48 | 7.72 | 0 | 3.33 | 3.10 | 2.15 |
| 2026Q1 | 20.004 | 36.72 | 21.91 | 10.09 | 12.07 | 6.34 | 5.31 | 3.33 | 0 |
| 2026Q2 | 19.101 | 41.05 | 24.18 | 9.99 | 6.58 | 7.44 | 3.64 | 2.61 | 0.15 |

Supplementary series, H&H Apple share count (millions), for a "selling vs. price" chart:

| Q1'24 | Q2'24 | Q3'24 | Q4'24 | Q1'25 | Q2'25 | Q3'25 | Q4'25 | Q1'26 | Q2'26 |
|---|---|---|---|---|---|---|---|---|---|
| 64.58 | 63.92 | 52.77 | 40.86 | 34.22 | 35.12 | 34.83 | 32.36 | 28.95 | 27.10 |

**Caveat for all charts:** weight changes mix price moves and trades. Use the share counts in B2 to separate them.

---

# F. Gaps & unverified items

1. **Himalaya's BYD position after July 2021 is unverified.**
   - Last confirmed figure: 62.88M H-shares, about 6%, on 2021-07-15.
   - I could not find HKEX disclosure-of-interest records or a reliable report of Himalaya falling below 5% or exiting.
   - Next step: search the HKEX DI database (di.hkex.com.hk) for "Himalaya" on stock 01211.
   - A second pass on 2026-11-07 found nothing newer:
     - Chinese-language searches turned up only the July 2021 sale.
     - uSmart gives the 2021-07-09 tranche as 3.63M shares at HK$224.18, taking the stake from 6.35% to 6%.
     - 界面 (https://m.jiemian.com/article/11455686.html) covers only Berkshire falling to 4.94% on 2024-07-16.
   - Any other Himalaya non-US holdings (A-share, HK, Korea, etc.) are unknown. Li Lu says only "我们选择在亚洲，以及其他地区".
2. **No Li Lu 2025 speech or interview was found.** Coverage is limited to 2024-12-07 (PKU) and 2026-10-05 (Columbia). 李录博客 / WeChat posts were not checked because the search budget ran out.
3. **Taiwan: no statement found from either investor.** Duan's TSM in-and-out (Q1 2025 to Q2 2026) is the only Taiwan-related data point, and it is an action, not words.
4. **Duan's X/Twitter posts were not checked.** Most of his quotes come from Chinese media compilations of his Xueqiu posts, so exact wording and dates depend on those compilers. Specific risks:
   - The 2026-08-13 Moutai-bet post reportedly no longer exists.
   - The Tencent "去年买了不少" quote is dated only through Stockstar's 2026-03-23 compilation.
5. **H&H attribution to Duan rests on media consensus**, plus the fact that his self-described trades match the filings (Tesla, Nvidia, Apple called away). There is no legal confirmation.
6. **Short options are invisible in 13F.** Duan's short puts on NVDA, TSLA, MU, PLTR and SpaceX, and calls on AAPL, are self-reported with no sizes.
   - The Q2 2026 NVDA cut of −54.6% sits awkwardly next to his 2026-07-23 remark "目前也不会打算减少". The reduction may have come through calls being exercised; this is unverified.
7. **Moutai purchase sizes are media estimates** (e.g., about 30,000 shares, about ¥36.9M on 2026-09-28). Duan did not give a size.
8. **The Q3 2026 13Fs for both filers are not yet filed** (due about 2026-11-14).
9. **No statements found from either investor on:** Japan (current), Europe, the dollar, gold (beyond Li Lu's wealth remark), US rates or Fed policy, or credit markets.
10. **Huxiu versions of the Columbia 2026 talk are AI-assisted translations.** Prefer the CBS PDF wording. The bracketed "Anthropic" attribution in the Huxiu text is not confirmed in the CBS transcript as fetched.

### [R2] Status after round 2 (2026-11-08)

**Resolved or narrowed**
- **Gap 1 (Himalaya BYD):** HKEX DI shows the stake fell below 5% on **2021-11-08** (4.97%, 54,559,600 H-shares) through dilution from BYD's share issue. About 8.3M shares were sold quietly between July and November 2021 〔推論, arithmetic〕. No duty to file after that, so holdings since November 2021 remain **[UNVERIFIED]**, and no exit report was found.
  - New: Himalaya also held Postal Savings Bank of China H-shares at 5.06–6.42% from 2020, sold below 5% on 2025-05-08. CRRC H fell below 5% on 2018-06-26. See B4.
- **Gap 2 (Li Lu 2025):** found the 2025-04-06 Seattle Q&A, published by 芒格书院 (C2).
  - No 2025–2026 "李录博客" exists that I could find; cn.himcap.com does not resolve.
  - The SCMP piece (article 3370602) is blocked (403), so its date and quotes are **[UNVERIFIED]**.
- **Gap 3 (Taiwan):** Li Lu has one sentence (2025-04-06): "解决好台湾问题，中美并非终有一战". Duan has only business-level TSMC remarks (2025-03). Neither talks about Taiwan geopolitics.
- **Gap 5 (H&H control):** resolved. HKEX Form 1 shows Yong Ping Duan with 99.00% control of H&H International Investment, LLC.
- **Gap 6 (options invisible):** partly visible for Pop Mart only. HKEX DI shows physically settled listed derivatives, long up to 41.96M and short up to 27.03M shares, plus a 27.93M-share delivery on 2026-07-30. US options are still invisible: every H&H Q2 2026 13F line has a blank putCall field.
- **Gap 7 (Moutai sizes):** the 2026-09-28 size (30,000 shares at ¥1,230.85) is reported as coming from Duan's own screenshot; I did not view it.
- **Gap 8 (Q3 2026 13F):** still not filed as of 2026-11-08 for either filer (EDGAR submissions JSON checked).

**Still open**
- Duan's reason for the Q2 2026 Nvidia cut (−54.6%), the Q1 2026 TSMC cut and Q2 exit, and the Alibaba exit and re-entry: no statement found. **[UNVERIFIED]**
- **Duan's X/Twitter account:** I could not confirm that one exists. All quotes found come from Xueqiu via media reprints (界面, 财联社, 每经, 华尔街见闻, 证券之星, 36氪). No Xueqiu original post was opened directly. **[UNVERIFIED]**
- Duan on US–China after 2025-01-05, on Apple trimming beyond the quotes already listed, and on PDD in 2026 ("我怎么看重要吗?" is unopened): no further statements found.
- Himalaya and Duan positions below 5% in HK or A-shares (BYD, PSBC, Tencent, Moutai) cannot be seen in public filings.
- The 2025 王石 conversation with Duan's Pop Mart remark: exact date not given (media say August 2025).
