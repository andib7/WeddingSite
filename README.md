# A & M — Wedding Invitation Site

A static, personalized wedding invite. Each guest gets their own link with their name, your personal note, their language, and (for a lucky few) a plus-one field. RSVPs land in a Google Sheet automatically.

Built with plain HTML/CSS/JS — no build step, no framework, free to host forever on GitHub Pages.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site — layout, styles, English/Spanish text, beer-mug counter, RSVP logic |
| `guests.js` | **The only file you edit.** Your guest list: name, language, plus-one flag, personal note |
| `engagement.jpg` | Your photo (already resized for fast loading) |
| `apps-script.gs` | Backend code to paste into Google Apps Script (instructions inside the file) |

## Deploy to GitHub Pages

1. Create a new **public** repo at github.com/andib7 called `wedding-site`.
2. Upload these files to it (drag-and-drop on github.com works: *Add file → Upload files*).
3. Repo **Settings → Pages** → Source: `main` branch, `/ (root)` folder → Save.
4. In a minute or two your site is live at:
   `https://andib7.github.io/wedding-site/`

## Connect the RSVP backend

1. Follow the setup steps at the top of `apps-script.gs`.
2. Copy the deployed Web App URL.
3. In `index.html`, find `const SHEET_ENDPOINT = "";` and paste the URL between the quotes.
4. Commit/push — done. Test it with your own link and check a row appears in the sheet.

(Until the endpoint is set, submitting shows the thank-you screen but only logs to the browser console — handy for testing the design first.)

## Guest links

Each guest's personal invite is:

```
https://andib7.github.io/wedding-site/?g=SLUG
```

Add guests in `guests.js`, e.g. slug `tia-rosa` → `...?g=tia-rosa`.
A link with no/unknown slug shows a generic (non-personalized) invite, so nothing breaks if someone shares their URL.

## Sending the invites by email

Keep a Google Sheet with columns: Name, Email, Link. Then use the free
"Yet Another Mail Merge" add-on (or Apps Script's MailApp) to send each
guest a templated email containing their `{{Link}}` from your own Gmail.

## Notes

- The couple's monogram, dates, venue, and dress-code swatches are in `index.html` — search for "A &amp; M" or "Sept 19" to tweak.
- Drink counts include the guest's plus-one (one combined number per invite).
- Dietary field only appears after a guest accepts; plus-one field only for flagged guests.
