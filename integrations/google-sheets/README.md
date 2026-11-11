# Google Sheets receiver

This receiver is prepared but NOT deployed. The private spreadsheet was created through the owner's connected Drive. No real submissions have been sent.

## Owner setup

1. Open the registration spreadsheet. Extensions → Apps Script. Paste `Code.gs`.
2. In Project Settings → Script Properties set `REGISTRATION_SPREADSHEET_ID` to that spreadsheet's ID and `REGISTRATION_TOKEN` to a random server-only secret of at least 32 characters. Never put the token in source code, the sheet, URLs or student-facing JavaScript.
3. Set the spreadsheet timezone to Asia/Kuala_Lumpur.
4. Deploy as Web app, execute as the owner, allow Anyone. Google authorization is required. The endpoint itself is reachable publicly, but writing requires the secret; the spreadsheet must remain Restricted. This does NOT make the spreadsheet public.
5. Set Vercel server-only `REGISTRATION_WEBHOOK_URL` to the `/exec` deployment URL; `REGISTRATION_WEBHOOK_TOKEN` to the same token; and `REGISTRATION_SITE_ORIGIN` to the canonical site origin. Redirect the alternate domain to the canonical origin.
6. Deploy the draft site to a protected test deployment with the matching origin first. Use a clearly marked synthetic record, verify one row appears and retries produce no duplicates. Remove test data, update the sheet's setup status, then publish the website.

Code checks include token validation, field validation, exact header verification, a global ScriptLock around lookup/insert, durable deduplication by request ID, sheet-backed limits (5 applications/email/day and 50 total/hour), formula injection escaping and flush before acknowledgement. Increase limits only when warranted by actual traffic. At 10,000 rows, archive/review storage before taking more registrations. Retain request IDs if archiving so retries can still be deduplicated.

Changing a stored row does not send email. Follow-up and payment checks are manual. No payment card or medical data is stored.

Apps Script ContentService redirects to script.googleusercontent.com. The server follows only this response host using GET without the token or submitted data. Reference: https://developers.google.com/apps-script/guides/content and https://developers.google.com/apps-script/guides/web.
