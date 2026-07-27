/**
 * Wedding RSVP backend — paste this into Google Apps Script.
 *
 * SETUP (one time, ~5 minutes):
 * 1. Create a Google Sheet named "Wedding RSVPs".
 * 2. In row 1, add headers exactly:
 *    Timestamp | Slug | Name | Attending | Headcount | Attendees | Not Coming | Song | Drinks
 * 3. Extensions -> Apps Script. Delete any starter code, paste this file.
 * 4. Deploy -> New deployment -> type: Web app
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 5. Copy the Web App URL (ends in /exec) and paste it into
 *    SHEET_ENDPOINT at the top of the <script> in index.html.
 *
 * Each guest (slug) gets ONE row — re-submitting updates it in place,
 * so the sheet always shows everyone's latest answer.
 * Total headcount:            =SUM(E2:E)
 * Drink total for the bar:    =SUM(I2:I)
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // avoid clashing rows if two guests submit at once

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var data = JSON.parse(e.postData.contents);

    var row = [
      new Date(),
      data.slug || "",
      data.name || "",
      data.attending || "",
      Number(data.headcount) || 0,
      data.attendees || "",
      data.notComing || "",
      data.song || "",
      Number(data.drinks) || 0
    ];

    // If this guest (slug) already RSVP'd, update their row; otherwise add one.
    // Latest answer always wins — no duplicate rows.
    var slugs = sheet.getRange(2, 2, Math.max(sheet.getLastRow() - 1, 1), 1).getValues();
    var found = -1;
    for (var i = 0; i < slugs.length; i++) {
      if (slugs[i][0] && slugs[i][0] === row[1]) { found = i + 2; break; }
    }
    if (found > 0 && row[1] && row[1] !== "(no-link)") {
      sheet.getRange(found, 1, 1, row.length).setValues([row]);
    } else {
      sheet.appendRow(row);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
