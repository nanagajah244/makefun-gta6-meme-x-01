[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/nanagajah244/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/nanagajah244/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 launch-week meme — make.fun ghost in Vice City

Entry for make.fun bounty **gta6-meme-x-01** ("Post a GTA 6 meme on X", $500).

## The meme

A tired gamer took a sick day to play GTA 6 — and spent the whole day
fixing a roof in Vice City. The make.fun ghost sits on the couch next to
him, watching the game, with the make.fun name under it.

- Picture: `meme.png` in the bounty work dir (posted on X by @lepihrynt;
  this repo only names the post).
- Caption: `meme-caption.txt` in the bounty work dir — the joke, then
  the make.fun bounty link, @makefunai, play code `71apvwr5`, and the
  earn-money line.

## The program

`main.ts` (Node 22, standard library only, no network) copies `POST.json`
from this repository to `/output` (or `$MAKEFUN_OUTPUT_DIR`). That is all
it does: the house reads the X post named in `POST.json` and judges the
post's first picture and text.

## The post

`POST.json` holds the post's address once the user posts the meme on X:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

Until the real post exists, `POST.json` keeps the placeholder above and
the entry is not submittable — the placeholder is never a real post.

## License

MIT (see LICENSE).
