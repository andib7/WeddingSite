/**
 * Wedding RSVP backend — paste this into Google Apps Script.
 *
 * SETUP (one time, ~5 minutes):
 * 1. Create a Google Sheet named "Wedding RSVPs".
 * 2. In row 1, add headers exactly:
 *    Timestamp | Slug | Name | Attending | Attendees | Song | Drinks
 * 3. Extensions -> Apps Script. Delete any starter code, paste this file.
 * 4. Deploy -> New deployment -> type: Web app
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 5. Copy the Web App URL (ends in /exec) and paste it into
 *    SHEET_ENDPOINT at the top of the <script> in index.html.
 *
 * Every RSVP submission appends one row to the sheet.
 * Drink total for the bar: put  =SUM(G2:G)  in any empty cell.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // avoid clashing rows if two guests submit at once

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.slug || "",
      data.name || "",
      data.attending || "",
      data.attendees || "",
      data.song || "",
      Number(data.drinks) || 0
    ]);

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
