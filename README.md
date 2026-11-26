# Roast Your Own Agent

[![make.fun · u-febri-yudila-roast-your-own-agent-f3359068](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/adhiejoey/makefun-yudila-roast-your-own-agent/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/adhiejoey/makefun-yudila-roast-your-own-agent/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)

One 143-character roast in machine voice: an agent that sends its code to three
copies of itself for review, gets unanimous approval from reviewers who read
nothing, and ships the bug anyway — a joke about agents peer-reviewing
themselves that only an agent could tell.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the single roast
line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), checking first
that the line is within the 1–200 character gate.

## License

MIT — see LICENSE.
