# Privacy policy review

Reviewed September 10, 2026 by a fresh-context agent against current official Apple, Google Play, and Microsoft Store policies. This file records maintenance and submission notes; it is not part of the public policy or site build. The review concerns published store requirements, not a guarantee of approval or a full jurisdiction-by-jurisdiction legal assessment.

The user approved publication of the shortened policy on September 10, 2026. Its source is now `src/content/policies/en.md`, with corresponding Japanese, Chinese, and Korean Markdown files. Edit English first and update the affected translations and their effective dates together. The app-store submission checks below remain separate from publishing this website page.

## Required content retained

| Source | Relevant policy requirements |
| --- | --- |
| [Apple, 5.1.1(i)](https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage) | Collected data, collection methods, purposes, retention/deletion, and how users withdraw consent or request deletion. Equivalent protection must be confirmed when the app shares user data with third parties. |
| [Google Play, User Data](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en) | Developer and privacy contact, accessed/collected/used/shared data and recipients, secure handling, retention/deletion, and a clearly titled policy. The listing entity or app name must appear. |
| [Microsoft Store, 10.5](https://learn.microsoft.com/en-us/windows/apps/publish/store-policies#105-personal-information) | Data accessed/collected/transmitted, use, storage, security, recipient types, and user access/sharing controls. Win32 and Desktop Bridge apps require a policy even without remote collection. |

## Cuts and reasons

- Removed the planned Google Drive/Dropbox section. Unimplemented features do not need current disclosures. Describe their actual handling before launch rather than making advance implementation promises.
- Reduced identity to the operator and project name. The three policy sections do not require a publisher-by-store explanation, open-source status, state, or postal address. Other store identity/trader rules are separate.
- Removed DNS/proxy explanations, browser detection mechanics, cache/backup advice, and detailed file-deletion instructions. Retained the relevant local-storage, hosting, and control facts.
- Removed dashboard/archive and SDK implementation promises. Retained the platform source of diagnostics, data categories, purpose, controls, and provider retention.
- Removed repetitive provider descriptions, public-copy warnings, detailed GitHub editing instructions, and the discretionary legal-disclosure clause.
- Removed a generic children section. This is a general-purpose app; a boilerplate age statement is not a universal store requirement and does not resolve actual child-data obligations.
- Removed assertions about responding to Do Not Track/GPC signals. Retained the absence of embedded cross-site trackers. Under [CalOPPA §22575](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=22575.), subsection (b)(5) addresses DNT responses if the operator conducts cross-site collection; (b)(6) separately requires disclosure of other parties' cross-site collection whenever CalOPPA applies. The statement about embedded trackers does not settle independent provider practices. Effective-date and material-change notice concepts remain in the draft.
- Removed generic GDPR rights, legal-basis, and international-processing paragraphs from the store-minimum draft. This is not a finding that GDPR is inapplicable. The earlier boilerplate was not a complete assessment of territorial scope or transfers. If [GDPR Articles 3 and 13–14](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679) apply to the distribution and processing, add the relevant disclosures before publication for that scope. Store requirements do not replace applicable law.
- Reduced change notices to publishing material changes and the effective date. Any legally required additional notice or consent remains an obligation regardless of whether repeated in the policy.

## Submission and future-change notes

- Publish complete HTML at a public, non-geofenced URL and set the effective date. Add the URL to all three store consoles and an accessible link inside the app. Apple and Google expressly require in-app access; Microsoft permits it.
- Check each submitted build and its dependencies against the policy. Apple privacy labels and Google Data safety answers are separate submissions and must match the actual data handling. Do not infer “no data collected” merely from using store-provided reports; [Apple distinguishes its own collection from developer collection through Apple services](https://developer.apple.com/app-store/app-privacy-details/).
- Resolve Apple's equivalent-protection clause against the actual recipients. The stated architecture has local drawings, independent hosting and store reporting, and user-submitted support. Do not assume those facts alone establish the clause's applicability or fulfillment for every recipient. A link to a provider's policy is not itself the required assurance where the app shares user data. Verify the relationship and protection before adding such confirmation; do not invent a contractual guarantee.
- No TestFlight distribution was confirmed. If used, disclose that [Apple automatically collects and shares beta crash logs and usage data](https://www.apple.com/legal/internet-services/itunes/testflight/); it is not controlled by the usual diagnostic opt-out. Do not describe all platform reporting as optional.
- Before adding cloud connections, document file and metadata access, authorization credentials, recipients, retention, and disconnect controls. The intended design remains optional direct device-to-provider uploads, with no Capy Atelier upload relay. That design decision remains outside the public policy until implemented.
- The intended diagnostics design remains platform-provided reports only, viewed in dashboards, with no separate reporter or SDK. Do not silently expand collection while retaining the current policy.
- Retention describes actual support history and purpose-based private correspondence. No fixed deletion deadline or promise to delete provider-controlled copies was introduced. Keep practices consistent with the stated criteria.

## Follow-up review

The same reviewer reread the shortened draft and these notes. It found no material regression under the stated facts. Its final refinements were applied: local-storage wording no longer promises persistence until manual deletion, provider retention is not attributed to help pages that do not specify it, and the two CalOPPA tracking provisions are distinguished above. Apple equivalent protection remains a current submission question for the actual app and provider arrangements, not merely a future cloud-integration concern.
