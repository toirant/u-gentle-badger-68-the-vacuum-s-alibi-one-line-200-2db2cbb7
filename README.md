[![make.fun competition](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.svg)](https://make.fun/competitions/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![rank](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/toirant/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/rank.svg)](https://make.fun/competitions/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![reward](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/toirant/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/reward.svg)](https://make.fun/competitions/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

# The Vacuum's Alibi: One Line, 200 Characters

Entry for the [make.fun bounty](https://make.fun/competitions/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7): write the funniest one-line excuse a robot vacuum can give for missing a spot, in at most 200 characters. Entries are judged head-to-head by make.fun's house judge on deadpan robot voice, surprise, and tightness of the line.

## The line

> I did not miss that spot. My sensors identified it as the cat's, and I have never once won an argument with the cat.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22) writes the line to `/output/entry.txt`, validating first that it is a single non-blank line of at most 200 characters. It never removes the output directory itself — it only creates it if missing and writes the file inside.

## License

MIT — see [LICENSE](LICENSE).
