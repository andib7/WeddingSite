/* ============================================================
   GUEST LIST — this is the only file you need to edit.
   Each guest gets a unique link:
     https://andib7.github.io/wedding-site/?g=SLUG
   e.g.  https://andib7.github.io/wedding-site/?g=maxi

   Fields:
     name     — shown at the top of their invite
     lang     — "en" or "es" (loads the whole page in that language)
     plusOne  — true only for the 1–2 guests who get one
     members  — for FAMILY invites: list every person's name.
                They'll see a checklist and uncheck anyone who
                can't make it. Drinks become a per-person average.
     note     — your personal message to them (write it in their language)
   ============================================================ */

const GUESTS = {
  "maxi": {
    name: "Maxi",
    lang: "en",
    note: "Every family has that one nephew who makes the party better just by showing up. That's you. Come celebrate with us."
  },

  "mariel": {
    name: "Mariel",
    lang: "es",
    note: "Stop being mean to me"
  },
  // ---- Add your real guests below. Examples: ----

  // "lopez-family": {
  //   name: "The Lopez Family",
  //   lang: "en",
  //   members: ["Juan", "Rosa", "Carlos"],
  //   note: "We can't imagine the day without all of you."
  // },

  // "familia-garcia": {
  //   name: "Familia García",
  //   lang: "es",
  //   members: ["Miguel", "Elena", "Sofía"],
  //   note: "No sería lo mismo sin ustedes."
  // },

  // "tia-rosa": {
  //   name: "Tía Rosa",
  //   lang: "es",
  //   plusOne: false,
  //   note: "Tu presencia siempre llena de alegría cualquier lugar. Nos encantaría celebrar contigo."
  // },

  // "jordan": {
  //   name: "Jordan",
  //   lang: "en",
  //   plusOne: true,
  //   note: "It wouldn't be a party without you — bring your favorite person."
  // },
};
