# Online registration rollout

Based on production commit 75b3730. This is an application flow, not a paid booking system. No live class dates or current prices were available in the site. Do not invent availability, reserve places or collect payments until those are confirmed.

## Activation blocker

The production website currently has no environment variables or submission destination configured. The older form-builder project creates Google Forms; it is not a verified registration receiver. Do not publish the new homepage calls to action until a durable receiver is configured and tested.

Required server-only variables:
- REGISTRATION_WEBHOOK_URL: HTTPS endpoint for an approved private registration store.
- REGISTRATION_WEBHOOK_TOKEN: high-entropy bearer token, checked by receiver.
- REGISTRATION_SITE_ORIGIN: exact public origin, e.g. https://www.yogasri.org (redirect the other domain to it).

The receiver must validate the bearer token and input, enforce persistent rate limits, atomically insert a private registration record with unique requestId, and return JSON {"persisted":true,"requestId":"<same UUID>"} ONLY after durable storage. Retries of the same ID return the original acknowledgement and do not create duplicates. Do not log PII. Configure owner access, deletion and retention before activation. Email follow-up is manual in this phase; no automatic email is promised.

Suggested decision for owner: private Google Sheet for manually managed applications, or authenticated database/admin service for payments and capacity later. Receiver implementation and credentials remain required. No student data should be put into this public GitHub repository.

## Verification

Run npm ci; npm run build; node tests/registration.cjs. Test unavailable configuration, invalid input, cross-origin requests, durable acknowledgement and receiver failures. Before launch, test a synthetic submission in the selected real store and delete the test record. Verify deduplication and rate limits at the receiver. Test Chinese/English, mobile and keyboard navigation.

## Not implemented in this phase

Payment collection, receipt uploads, admin UI, automatic email, dated sessions, capacity enforcement. These need confirmed class data and private storage/payment services.
