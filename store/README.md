# Store release content

Native screenshot orchestration and listing tools live in `site/scripts/store/`,
beside the Flatpak capture scripts. The app repository owns native capture
adapters, package builds, signing and binary delivery. This repository owns the
showcase artwork, scene recipes, listing overrides and reviewed marketing assets.

`locales.json` contains store locale mappings, Apple subtitles and Windows title
and hardware requirements. Shared names, descriptions, keywords and screenshot
captions come from the app's AppStream metadata; do not maintain translated
copies here. Generated listings and native capture packs stay in ignored
`artifacts/`. The existing reviewed English Play pack remains in `google-play/`.

## Generate listing copy

From this repository, with Python 3.11+ and the app checkout:

```sh
python3 site/scripts/store/listings.py --app-repo ../capycanvas \
  --output artifacts/store-prep/listings.json
node --test tests/google-play.test.mjs tests/store-prep.test.mjs
```

Generation fails on a missing translation, duplicate locale mapping or exceeded
store text limit. Store-specific copy changes belong in `locales.json`; app-wide
copy changes belong in AppStream. Output files must be new.

## Capture and review native images

```sh
node site/scripts/store/native.mjs prepare --app-repo ../capycanvas \
  --output artifacts/store-inputs
```

This stages the canonical scene recipe, first-party artwork and translated scope
readiness captions for the app's native adapters. Follow the app's
[native capture guide](https://github.com/babymastodon/capycanvas/blob/main/docs/development/store-screenshots.md).
Use reserved devices, owned development identities and private storage. Record
the exact app commit and binary hash from the build you actually install; keep
the recipe unchanged through capture. Collect results under a new local folder.

Review each language, scene and theme at display size: artwork and workspace,
readable translations, native font coverage, complete panels, correct camera,
no dialogs and no unrelated personal content. Capture logs and raw model receipts
stay local. Do not add the complete multi-language capture output to Git.

Create the upload pack after review (Android example):

```sh
node site/scripts/store/native.mjs catalog --platform android \
  --input artifacts/captures --output artifacts/android-upload \
  --recipe artifacts/store-inputs/store-recipe.json \
  --app-revision APP_COMMIT_SHA --binary-sha256 INSTALLED_APK_SHA256 \
  --languages ja,fr --devices phone,tablet
```

Input directories are `<device>/<language>/<scene>-<theme>.png`, with a JSON
receipt beside each image. Windows uses `<language>/` and `-receipt.json` sidecars;
select `--platform windows --devices desktop`. Receipts must match the recipe,
binary, locale and readiness assertions. The tool preserves native pixels while
reencoding PNGs without diagnostic metadata. Windows retains native alpha; Play
packs require opaque RGB. It writes a
sanitized manifest with relative paths, image hashes, dimensions and source
provenance. Windows catalogs also retain companion binary hashes and the explicit
native framing adaptation. Keep the original native receipts as local evidence.

The upload manifest has `schema: 1`, `platform`, `appRevision`, `binarySha256`,
`recipeSha256` and `captures`. Each capture has `language` (app UI tag), `device`,
`scene`, `theme`, `file`, `width`, `height` and `sha256`. Scene order is Paint,
Sketch, Photo in light, then dark. Public catalogs contain no device serials,
account responses, reviewer details or absolute workstation paths. To retain
reviewed packs across machines, use private build artifacts; only intentionally
published website imagery belongs in `site/public/store/`.

## Google Play

The existing publisher supports selected generated localizations, with optional
native screenshots. `check` is entirely local; `validate` uploads into one owned
temporary edit and discards it. `publish` commits that edit and can send listing
changes for Google review. Supply a short-lived `GOOGLE_PLAY_TOKEN` from an
authorized account or the existing Workload Identity workflow, never a checked-in
service-account key.

```sh
node site/scripts/store/google-play.mjs check \
  --listings artifacts/store-prep/listings.json \
  --captures artifacts/android-upload/manifest.json --locale ja-JP --locale fr-FR
node site/scripts/store/google-play.mjs validate \
  --listings artifacts/store-prep/listings.json --locale ja-JP
```

Omit `--captures` for text only. Explicit locales preserve English unless selected;
selected listings retain existing video URLs. Screenshot updates preserve icons
and feature graphics, while tablet captures populate both tablet slots. The
publisher verifies text and screenshot hashes/order and checks that unselected
listings, tracks and app details remain unchanged. It never cancels an active
review. With no `--listings`, the original English pack and workflow still work.
See [the English pack](google-play/README.md) for CI and desktop-slot details.

## Microsoft Store

Use Partner Center's **Store listings → Export listing** to obtain a fresh full
CSV after adding the desired listing languages. Build from that export:

```sh
python3 site/scripts/store/windows.py --export /path/to/current-export.csv \
  --listings artifacts/store-prep/listings.json --locale ja-jp --text \
  --output artifacts/windows-text
python3 site/scripts/store/windows.py --export /path/to/current-export.csv \
  --listings artifacts/store-prep/listings.json --locale ja-jp \
  --captures artifacts/windows-upload/manifest.json --limit 1 \
  --output artifacts/windows-image-test
```

Select the generated `listing-import` folder in **Import listings → Import
folder** at [Partner Center](https://partner.microsoft.com/en-us/dashboard/apps-and-games).
Use `--limit 1` for a small test or the default six for one language. Export
again after a successful import before preparing the next batch. An older CSV
can overwrite newer changes even when its existing image URLs remain valid.

The builder retains every row, locale column, list entry and existing image URL;
it changes only selected text or screenshot cells. Sparse image-only CSVs can
clear features, keywords and hardware lists despite omitted rows. Never drop
those rows. Exported URLs can contain private access parameters: CSVs, generated
import folders and account snapshots stay local with restricted permissions.

First drafts may reject submission API edits until a submission has completed.
Use the supported portal CSV path; do not delete the draft or submit a dummy
package to unlock API access. Folder import does not submit certification or
publish packages. Check the saved listing after portal validation.

## Apple

The metadata tool discovers editable draft and localization IDs from the app ID,
version and platform. It defaults to a read-only plan. A valid short-lived App
Store Connect JWT is supplied through `APP_STORE_CONNECT_TOKEN` at runtime.

```sh
python3 site/scripts/store/apple.py metadata --app-id APP_ID --version VERSION \
  --platform IOS --platform MAC_OS --locale ja --locale fr-FR \
  --listings artifacts/store-prep/listings.json --output artifacts/apple-plan.json
```

After reviewing the plan, run again with a new `--output` and `--apply` to save
and read back selected metadata. It preserves other languages, build selection,
release options and review submissions. Account privacy declarations, trader
status, agreements, pricing and reviewer contacts are separate portal decisions.

Follow the app's native capture guide for macOS, iPad and iPhone. Build and
review actual AppKit/UIKit controls and Metal canvas content in every locale and
theme. Create a separate `native.mjs catalog --platform apple` manifest for each
fixture binary and device family. Preserve that provenance when combining packs.
The optional `apple.py screenshots` command produces a local handoff; its
`readyForUpload: false` does not assess live display eligibility.

Plan screenshot uploads with the current
[image asset and placement API](https://developer.apple.com/documentation/appstoreconnectapi/uploading-and-managing-image-assets):

```sh
python3 site/scripts/store/apple_assets.py --app-id APP_ID --version VERSION \
  --manifest artifacts/apple-mac/manifest.json \
  --manifest artifacts/apple-ipad/manifest.json \
  --manifest artifacts/apple-iphone/manifest.json \
  --locale ja --locale fr-FR --output artifacts/apple-images-plan.json
```

The default is a read-only plan. Review it, then repeat with a new `--output` and
`--apply` to upload, place and read back the selected screenshots. Omit `--locale`
to select all supplied captures. Each selected device/language group requires
Paint, Sketch and Photo in light and dark themes. Use `--phase images` to stage a
reviewed subset in the asset library without changing screenshot placements.
Exclude captures with visual defects before staging.

The uploader resolves display specifications and count limits from Apple's live
reference data. It verifies hashes, native dimensions, positive processing
states and saved placement order. Repeated uploads reuse matching asset hashes.
Existing screenshots that differ require explicit `--replace`, which affects
only selected groups and rejects concurrent changes detected before placement.
Fresh parent checks require editable drafts. Upload progress and API snapshots
stay private; use a fresh short-lived `APP_STORE_CONNECT_TOKEN` for each run.
Build selection, submission for review and public release remain separate.

## Publication boundary

Check in reusable scripts, their tests, public overrides, canonical artwork and
current workflow instructions. Keep keys, tokens, profiles, signed URLs, CSV
exports, raw API responses, reviewer contacts, compliance answers, temporary
device settings, logs and diagnostic screenshots out of source. Do not load
credentials or a particular maintainer's home directory at module import time.
