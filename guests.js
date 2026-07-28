/* ============================================================
   GUEST LIST — this is the only file you need to edit.
   Each guest gets a unique link:
     https://andib7.github.io/WeddingSite/?g=SLUG
   e.g.  https://andib7.github.io/WeddingSite/?g=migy

   Fields:
     name     — shown at the top of their invite
     lang     — "en" or "es" (loads the whole page in that language;
                write `note` in the SAME language)
     plusOne  — true only for the 1–2 guests who get one. Also hides
                the "no additional guests" reminder.
     members  — for FAMILY invites: list every person's name.
                They'll see a tap-to-remove checklist for who's coming.
                Drinks become a per-person average.
     note     — your personal message to them

   Every invite already ends with a shared line signed "Andi & Mariel",
   so `note` is just your own voice — no need to sign off.
   ============================================================ */

const GUESTS = {

  /* ---------- TEST INVITES ----------
     For previewing changes without touching a real guest's link.
     Delete these before you send anything out.                     */

  "test-solo": {
    name: "Test Solo",
    lang: "en",
    note: "Test invite — single guest, English. Checks the personal note, the no-plus-one reminder, and the playlist + drinks fields."
  },

  "test-familia": {
    name: "Test Familia",
    lang: "es",
    members: ["Uno", "Dos", "Tres"],
    note: "Invitación de prueba — familia, español. Revisa las pastillas de nombres, el plural y el promedio de bebidas."
  },

  /* ---------- FAMILY ---------- */

  "martha-pablito": {
    name: "Mamá y Pablito",
    lang: "es",
    members: ["Martha", "Pablo"],
    note: "Mamá, no habría llegado hasta aquí sin ti. Todo lo que soy viene de ti, y no me imagino ese día sin tenerte cerca. Gracias por todo, siempre. Pablito, los quiero mucho a los dos."
  },

  "sandra-juancarlos": {
    name: "Sandra y Juan Carlos",
    lang: "es",
    members: ["Sandra", "Juan Carlos"],
    note: "A quienes nos han amado y apoyado en cada paso."
  },

  "leslie-raul": {
    name: "Leslie & Raul",
    lang: "en",
    members: ["Leslie", "Raul"],
    note: "Leslie, growing up with you is how I learned what family actually means. Getting to celebrate this with you — and with the little one on the way — makes it even better. Raul, you're one of us now, no take-backs."
  },

  "pablo-irma-luna": {
    name: "Pablo, Irma y Luna",
    lang: "es",
    members: ["Pablo", "Irma", "Luna"],
    note: "Nos encantaría que nos acompañaran en este día. Sería muy especial tenerlos ahí con nosotros."
  },

  "maria-primas": {
    name: "Maria y las primas",
    lang: "es",
    members: ["Maria", "Estefania", "Rocio", "Monica"],
    note: "Tía, gracias por todas las veces que me cuidaste — hiciste más por mí de lo que probablemente sabes. Y con ustedes tres crecí y tengo los mejores recuerdos. No me imagino este día sin tenerlas ahí."
  },

  "olga-eliseo": {
    name: "Olga y Eliseo",
    lang: "es",
    members: ["Olga", "Eliseo"],
    note: "No podría imaginar este día tan especial sin mis tíos favoritos a mi lado."
  },

  "luis-armando-alfredo": {
    name: "Luis Armando y Luis Alfredo",
    lang: "es",
    members: ["Luis Armando", "Luis Alfredo"],
    note: "No podría imaginar este día tan especial sin mis primos favoritos a mi lado."
  },

  "henry-blanca": {
    name: "Henry & Blanca",
    lang: "en",
    members: ["Henry", "Blanca"],
    note: "Henry, half my childhood happened at your house — the sleepovers, the games, all of it. It wouldn't feel right doing this without you there. Blanca, we're looking forward to finally spending some real time with you. Give Enzo a hug from us."
  },

  "katherine-maxi": {
    name: "Katherine & Maxi",
    lang: "en",
    members: ["Katherine", "Maxi"],
    note: "To the ones making our ceremony extra special — our amazing officiant and our best ring bearer."
  },

  /* ---------- FRIENDS ---------- */

  "migy": {
    name: "Miguel",
    lang: "en",
    note: "Migy, if we were doing a wedding party, you'd be standing right next to me — that was never a question. We've somehow done everything else together, so it'd be strange to do the biggest one without you."
  },

  "jc": {
    name: "Jc",
    lang: "en",
    note: "Jc, you're the reason I know what an E36 is, and the reason a concerning amount of my money has gone to BMWs. Come celebrate with us — and yes, walang forever? Come watch us prove that wrong."
  },

  "leech": {
    name: "Ulices",
    lang: "en",
    note: "Leech, we've spent more hours on the Rift together than either of us should admit out loud. Come celebrate with us — this one's not ranked, I promise."
  },

  "antonio": {
    name: "Antonio",
    lang: "en",
    note: "Antonio, from messing around the neighborhood to way too many Taco Bell runs — you were there for a lot of it. Would mean a lot to have you there for this one too."
  },

  "vero-cesar": {
    name: "Vero y Cesar",
    lang: "es",
    members: ["Vero", "Cesar"],
    note: "Desde los pequeños momentos hasta el momento más grande de nuestras vidas, no podríamos imaginar nuestro gran día sin ustedes a nuestro lado."
  },

  "cristal-jesus-mateo": {
    name: "Cristal, Jesus & Mateo",
    lang: "en",
    members: ["Cristal", "Jesus", "Mateo"],
    note: "From the little moments to the biggest moment of our lives, we couldn't imagine our big day without you there."
  },

  "rubi-clarence": {
    name: "Rubi & Clarence",
    lang: "en",
    members: ["Rubi", "Clarence"],
    note: "From the little moments to the biggest moment of our lives, we couldn't imagine our big day without you there."
  },

  "camille-alejandro": {
    name: "Camille & Alejandro",
    lang: "en",
    members: ["Camille", "Alejandro"],
    note: "From the little moments to the biggest moment of my life, I couldn't imagine my big day without you there."
  },

  "luci-emanuel": {
    name: "Luci & Emanuel",
    lang: "en",
    members: ["Luci", "Emanuel"],
    note: "From the little moments to the biggest moment of my life, I couldn't imagine my big day without you there."
  },

  "ana": {
    name: "Ana",
    lang: "en",
    note: "It wouldn't be as special of a day without my Girdies by my side 🤍"
  },

  "liola": {
    name: "Liola",
    lang: "en",
    note: "It wouldn't be as special of a day without my Girdies by my side 🤍"
  },
};
