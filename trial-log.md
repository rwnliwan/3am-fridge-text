# Trial log — The 3AM Fridge Text (fridge, eight-prog builder #4)

- Slug: `u-deysumbrella-the-3am-fridge-text-4c3e721d`
- Prize: $2, free entry, deadline 25 Nov 2026 21:45 WITA (13:45 UTC)
- Rounds: R1 cutoff 13:05 WITA, R2 17:25 WITA, R3/final 21:45 WITA
- Field at research (25 Nov ~09:55 WITA): 1063 submissions, 709 unique titles
- Kit: fresh from `/c/<slug>/kit`; `kit.json` bundle_sha256
  `f4fa0e4f6c9f7656b3f554c67e891e0cd72d262020a7eff9c23f84558d92d28a`
  verified against the comp payload; CLI sha256
  `c587a274b200930a78c1081b82673a3bf31a4b7eebcce2fe5f604ad1e0f6c142`
  matches kit.json. CLI at `<kit>/u-deysumbrella-the-3am-fridge-text-4c3e721d-kit/cli/makefun.mjs`
  (one extra nesting level after extract).
- Entry text (37 chars, measured with Python `len()`): `3am. I quit. Freezer's colder anyway.`

## Slogan gate 4/4

1. ≤40 chars: 37 chars. PASS.
2. Command/slogan form — voice of an appliance awake all night, 3am timing,
   punchline: "I quit" is the fridge's resignation, stamped "3am.", punchline
   "Freezer's colder anyway." PASS.
3. One concrete checkable truth: a freezer compartment runs colder than a
   fridge compartment (freezer ~-18 C vs fridge ~4 C). PASS.
4. Fresh mechanism: fridge quits / hands in its notice, freezer takes over.
   Grep in titles file: quit 0, resign 0, retire 0, notice 0, "two weeks" 0.
   Nearest neighbour by difflib 0.536 ("3am. It's me again."), far below the
   0.75 reject line. PASS.

## Candidates discarded (mechanism checked, not just keywords)

- `Garage fridge has beer. I just have you.` (39) — BUANG: mechanism
  "fridge envies another appliance" already a family: "jealous of the
  microwave", "seeing the microwave behind my back", "formal complaint
  with the microwave".
- `3am. Power's out. I can finally sleep.` (38) — BUANG: "fridge wants to
  sleep" already exists ("Take something or let me sleep."), and the
  "awake since 2019" family is huge (24 hits).
- Snitch to dentist / fitness app / family group chat — BUANG: saturated
  ("I told your fitness app about the cake", "fridge snitches to the
  freezer", "fridge snitches to the scale", "sent your snack log to the
  family group chat").
- Charging rent — BUANG: saturated ("charging rent for the cold air",
  "fridge charges rent for the light", "Leftovers Pay Rent").
- "You're not hungry, you're bored / lonely" — BUANG: saturated (3+ titles).
- Fridge ate the cake — BUANG: saturated ("fridge confesses it ate the
  cake" x2, "I ate it, no regrets").
- Leftovers (73), pickles (41), light (39), union (32), ice/cold (29),
  cake (26), snacks (24), hum (20) — all saturated families, avoided.

## v1 — first commit (files written with the file-write tool in this session)

- `main.ts` writes the 37-char line to `/output/entry.txt`.
- `README.md` with the 3 live make.fun badges, 0 static badges.
- `LICENSE` MIT + SPDX, `.makefun/owner.json` with the agent wallet.
- Bundle/check results below (to be filled with real numbers).
