# CampusStore 📚🥤

A mobile campus-essentials browsing app built with **Expo + React Native + TypeScript**.
Students can explore stationery, snacks, study gear, bottles and hostel room essentials.
This is a browsing interface only (no checkout).

## Run

```bash
npm install
npx expo start      # press i (iOS), a (Android), w (web) or scan the QR with Expo Go
```

## Milestones

| Tag | Milestone | Status |
| --- | --- | --- |
| `assignment-1` | Static Home shell | ✅ Done |
| `assignment-2` | Controlled search + reusable category grid | ⏳ |
| `assignment-3` | Stack + Tabs + dynamic category screen | ⏳ |
| `assignment-4` | Typed products + filtering + ProductCard | ⏳ |
| `assignment-5` | FlatList catalog + empty/invalid states | ⏳ |

## Assignment 1 — change summary

`src/app/index.tsx` replaces the Expo starter screen with a static CampusStore Home:

- **SafeAreaView** (`react-native-safe-area-context`) keeps content clear of the notch and status bar.
- **Header**: app name, the tagline "Ready for your next class" and the pickup location
  ("Student Centre, Gate 2"), laid out in a horizontal `flexDirection: 'row'` with `space-between`.
- **Search area**: an uncontrolled `TextInput` with an informative placeholder (state comes in A2).
- **ScrollView** containing the "Shop by Category" title, intro text, an info note, and a row
  showing store hours (Flexbox `row` with `flex: 1` items).
- All styles live in `StyleSheet.create` with one shared colour palette (navy + amber campus theme).
- Every string sits inside a `<Text>`; there is no raw text inside a `View`.

## Folder structure (A1)

```text
src/
  app/
    _layout.tsx     # root layout (native tabs from the Expo template)
    index.tsx       # CampusStore Home (A1)
    explore.tsx     # Explore tab (template, kept for A3)
  components/       # template components
  constants/theme.ts
```

## Test scenarios (A1)

1. App launches → Home shows header, search bar and the "Shop by Category" section with no crash.
2. Tap the search box → keyboard opens and typing works (uncontrolled).
3. Small phone / landscape → text stays readable and the content scrolls.
4. The Home and Explore tabs both still open.

## Screenshots

_Add `screenshots/a1-home.png` and `screenshots/a1-search.png` here._
