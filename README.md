# A & M — Wedding Invitation Site

A static, personalized wedding invite. Each guest gets their own link with their name, your personal note, and their language. Family invites show a checklist of everyone in the party so they can mark who can't make it. RSVPs land in a Google Sheet automatically.

Built with plain HTML/CSS/JS — no build step, no framework, free to host forever on GitHub Pages.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site — layout, styles, English/Spanish text, beer-mug counter, RSVP logic |
| `guests.js` | **The only file you edit.** Your guest list: name, language, family members, personal note |
| `engagement.jpg` | Your photo (already resized for fast loading) |
| `apps-script.gs` | Backend code to paste into Google Apps Script (instructions inside the file) |

## Live site

Deployed from the `main` branch of `andib7/WeddingSite` via GitHub Pages:

```
https://andib7.github.io/WeddingSite/
```

Note the capitalization — GitHub Pages paths are case-sensitive, so
`/wedding-site/` returns a 404.

To redeploy, just commit and push to `main`.

## Connect the RSVP backend

1. Follow the setup steps at the top of `apps-script.gs`.
2. Copy the deployed Web App URL.
3. In `index.html`, find `const SHEET_ENDPOINT =` and paste the URL between the quotes.
4. Commit/push, then submit a test RSVP and confirm a row appears in the sheet.

**Important:** the site posts with `mode: "no-cors"`, so the browser cannot read
the response. Guests see the thank-you screen whether or not the write actually
succeeded. The *only* way to verify the backend works is to submit once and look
at the sheet. After changing `apps-script.gs`, redeploy via
**Deploy → Manage deployments → ✏️ → New version** to keep the same `/exec` URL.

## Guest links

Each guest's personal invite is:

```
https://andib7.github.io/WeddingSite/?g=SLUG
```

Add guests in `guests.js`, e.g. slug `tia-rosa` → `...?g=tia-rosa`.
A link with no/unknown slug shows a generic (non-personalized) invite, so nothing breaks if someone shares their URL.

### Guest fields

- `name` — shown at the top of their invite
- `lang` — `"en"` or `"es"`; sets the language for the whole page (make sure
  `note` is written in the same language)
- `members` — for family invites: every person's name. They get a pill checklist
  and tap anyone who can't attend. Drinks become a per-person average.
- `plusOne` — `true` suppresses the "no additional guests" note for the few
  guests who are bringing someone
- `note` — your personal message to them

## Sending the invites by email

Keep a Google Sheet with columns: Name, Email, Link. Then use the free
"Yet Another Mail Merge" add-on (or Apps Script's MailApp) to send each
guest a templated email containing their `{{Link}}` from your own Gmail.

## Notes

- The monogram, date, venue, and dress-code swatches are in `index.html` — search for `A &amp; M` or `Sept 18` to tweak.
- The RSVP records a headcount, who's attending, who isn't, a playlist request, and a drink estimate (per-person average × attendees).
- The playlist field and drink counter only appear after a guest accepts.
- Testing on your own device sets a `localStorage` flag that shows the "already replied" screen. Clear it with `localStorage.clear()` in the console, or use a private window.
