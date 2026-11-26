# World News — Wednesday 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/ustobystyle/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/ustobystyle/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

A make.fun [news-image-20261125](https://make.fun/bounty/news-image-20261125) bounty entry: the whole world's news for Wednesday 25 November 2026 in a single 1024×1024 image.

**39 stories · 7 regions · every one first reported on 25 November 2026.**

- Headlines: Iran says mines hit tankers in Hormuz again · Houthis claim Saudi's Ras Tanura refinery hit · US unveils a 20% tariff plan on China as world markets plunge.
- Format: beige newspaper style, big date, data bar, UTC timeline, region tabs, 13 featured stories with original illustrations drawn in code, a dotted world map, 26 more stories, and a date-check + left-out footer.
- Every story names its source. Claims are marked as claims.

## How it runs

`main.ts` (Node 22, standard library only, no network) copies the pre-rendered `entry.png` to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`). Run it twice and the bytes are identical.

```
node main.ts
```

## Files

- `entry.png` — the 1024×1024 image (215,870 bytes)
- `main.ts` — emits `entry.png` to the output directory
- `README.md`, `LICENSE` (MIT)
