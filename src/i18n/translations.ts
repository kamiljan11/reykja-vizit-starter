export type Lang = "en" | "is" | "pl";

export const langLabels: Record<Lang, string> = {
  en: "EN",
  is: "IS",
  pl: "PL",
};

const translations = {
  // Navbar
  "nav.about": { en: "About us", is: "Um okkur", pl: "O nas" },
  "nav.menu": { en: "Menu", is: "Matseðill", pl: "Menu" },
  "nav.hours": { en: "Opening hours", is: "Opnunartímar", pl: "Godziny otwarcia" },
  "nav.book": { en: "Book a table", is: "Bóka borð", pl: "Zarezerwuj stolik" },

  // Hero
  "hero.tagline": { en: "Reykjavík · Since 2018", is: "Reykjavík · Frá 2018", pl: "Reykjavík · Od 2018" },
  "hero.title": { en: "Eldhúsið", is: "Eldhúsið", pl: "Eldhúsið" },
  "hero.subtitle": {
    en: "Honest cooking with Icelandic ingredients — simple, good and made from the heart.",
    is: "Heiðarleg matargerð með íslensku hráefni — einfalt, gott og gert af hjarta.",
    pl: "Uczciwa kuchnia z islandzkich składników — prosto, smacznie i z serca.",
  },
  "hero.cta.menu": { en: "See the menu", is: "Sjá matseðil", pl: "Zobacz menu" },
  "hero.cta.book": { en: "Book a table", is: "Bóka borð", pl: "Zarezerwuj stolik" },

  // About
  "about.label": { en: "About us", is: "Um okkur", pl: "O nas" },
  "about.title": { en: "Simple & good — just like home", is: "Einfalt & gott — eins og heima", pl: "Prosto i smacznie — jak w domu" },
  "about.p1": {
    en: "Eldhúsið is a family restaurant in the heart of Reykjavík. We believe in simple cooking where the ingredients speak for themselves. Our Icelandic lamb, fresh fish and homemade soups are prepared with love and time.",
    is: "Eldhúsið er fjölskylduveitingastaður í hjarta Reykjavíkur. Við trúum á einfalda matargerð þar sem hráefnin fá að njóta sín. Íslensku lambalærin okkar, ferskur fiskur og heimilegar súpur eru elduð með kærleika og tíma.",
    pl: "Eldhúsið to rodzinna restauracja w sercu Reykjavíku. Wierzymy w prostą kuchnię, w której składniki mówią same za siebie. Nasza islandzka jagnięcina, świeże ryby i domowe zupy są przygotowywane z miłością i czasem.",
  },
  "about.p2": {
    en: "The place is cosy, warm and perfect for dinner with the family, a date or just good food with good people.",
    is: "Staðurinn er notalegur, hlýr og fullkominn fyrir kvöldverð með fjölskyldunni, stefnumót eða bara góðan mat með góðu fólki.",
    pl: "Miejsce jest przytulne, ciepłe i idealne na kolację z rodziną, randkę lub po prostu dobre jedzenie w dobrym towarzystwie.",
  },
  "about.stat.years": { en: "years experience", is: "ára reynsla", pl: "lat doświadczenia" },
  "about.stat.local": { en: "Icelandic ingredients", is: "íslenskt hráefni", pl: "islandzkie składniki" },
  "about.stat.rating": { en: "stars on Google", is: "stjörnur á Google", pl: "gwiazdek w Google" },

  // Menu
  "menu.label": { en: "The Menu", is: "Matseðillinn", pl: "Menu" },
  "menu.title": { en: "Our favourites", is: "Okkar uppáhald", pl: "Nasze ulubione" },
  "menu.subtitle": {
    en: "Taste the best that Icelandic ingredients have to offer.",
    is: "Smakkaðu besta sem íslenskt hráefni hefur upp á að bjóða.",
    pl: "Spróbuj tego, co najlepsze z islandzkich składników.",
  },
  "menu.item1.name": { en: "Pan-fried arctic char", is: "Steiktur bleikja", pl: "Smażony golec arktyczny" },
  "menu.item1.desc": {
    en: "Fresh arctic char fillet pan-fried in butter with herbs, lemon and mashed potatoes.",
    is: "Ferskur bleikjuflaki steiktur á smjöri með kryddjurtum, sítrónu og kartöflumús.",
    pl: "Świeży filet z gólca smażony na maśle z ziołami, cytryną i puree ziemniaczanym.",
  },
  "menu.item2.name": { en: "Lamb soup", is: "Lambakjötsúpa", pl: "Zupa z jagnięciny" },
  "menu.item2.desc": {
    en: "Traditional Icelandic lamb soup with root vegetables and fresh herbs.",
    is: "Hefðbundin íslensk lambakjötsúpa með rótargrænmeti og ferskum jurtum.",
    pl: "Tradycyjna islandzka zupa z jagnięciny z warzywami korzeniowymi i świeżymi ziołami.",
  },
  "menu.item3.name": { en: "Skyr cake with berries", is: "Skyrterta með berjum", pl: "Ciasto skyr z jagodami" },
  "menu.item3.desc": {
    en: "Creamy skyr on a whey biscuit base with fresh Icelandic berry sauce and almonds.",
    is: "Kremað skyr á mysingarbotni með fersku íslensku berjasoði og möndlum.",
    pl: "Kremowe skyr na biszkoptowej bazie z sosem jagodowym i migdałami.",
  },
  "menu.seeAll": { en: "See full menu", is: "Sjá allan matseðilinn", pl: "Zobacz pełne menu" },

  // Hours
  "hours.label": { en: "Visit us", is: "Heimsóktu okkur", pl: "Odwiedź nas" },
  "hours.title": { en: "Opening hours & location", is: "Opnunartímar & staðsetning", pl: "Godziny otwarcia i lokalizacja" },
  "hours.hours.title": { en: "Opening hours", is: "Opnunartímar", pl: "Godziny otwarcia" },
  "hours.h1": { en: "Mon – Thu: 11:30 – 21:00", is: "Mán – Fim: 11:30 – 21:00", pl: "Pon – Czw: 11:30 – 21:00" },
  "hours.h2": { en: "Fri – Sat: 11:30 – 22:00", is: "Fös – Lau: 11:30 – 22:00", pl: "Pt – Sob: 11:30 – 22:00" },
  "hours.h3": { en: "Sundays: 12:00 – 20:00", is: "Sunnudagar: 12:00 – 20:00", pl: "Niedziele: 12:00 – 20:00" },
  "hours.location.title": { en: "Location", is: "Staðsetning", pl: "Lokalizacja" },
  "hours.map": { en: "Open in map →", is: "Opna í korti →", pl: "Otwórz na mapie →" },
  "hours.book.title": { en: "Book a table", is: "Bóka borð", pl: "Zarezerwuj stolik" },
  "hours.phone": { en: "Phone: 555-1234", is: "Sími: 555-1234", pl: "Tel: 555-1234" },
  "hours.callNow": { en: "Call now", is: "Hringdu núna", pl: "Zadzwoń teraz" },

  // CTA
  "cta.title": { en: "Come dine with us", is: "Komdu og borðaðu með okkur", pl: "Przyjdź i zjedz z nami" },
  "cta.subtitle": {
    en: "Book a table and enjoy the best flavours Iceland has to offer, in a warm and cosy atmosphere.",
    is: "Bókaðu borð og njóttu bestu bragðanna sem Ísland hefur upp á að bjóða, í hlýlegu og notalegu umhverfi.",
    pl: "Zarezerwuj stolik i ciesz się najlepszymi smakami Islandii w ciepłej i przytulnej atmosferze.",
  },
  "cta.button": { en: "Book a table — 555-1234", is: "Bóka borð — 555-1234", pl: "Zarezerwuj — 555-1234" },

  // Promo
  "promo.tag": { en: "BUSINESS AUTOPILOT", is: "VEFUR FYRIR ÞIG", pl: "BIZNES NA AUTOPILOCIE" },
  "promo.title1": { en: "Want a Website Like This", is: "Viltu vefsíðu eins og þessa", pl: "Chcesz taką stronę" },
  "promo.title2": { en: "For Your Restaurant?", is: "Fyrir þinn veitingastað?", pl: "Dla Twojej restauracji?" },
  "promo.desc": {
    en: "We build stunning, personalised websites for restaurants, cafés, and food businesses. Everything done for you — website, photos, ads, social media. One plan. Zero stress.",
    is: "Við smíðum falleg, sérsniðin vefsíður fyrir veitingastaði, kaffihús og matarfyrirtæki. Allt gert fyrir þig — vefsíða, ljósmyndir, auglýsingar, samfélagsmiðlar. Eitt pakki. Engin áhyggjur.",
    pl: "Tworzymy piękne, spersonalizowane strony dla restauracji, kawiarni i firm gastronomicznych. Wszystko zrobione za Ciebie — strona, zdjęcia, reklamy, social media. Jeden plan. Zero stresu.",
  },
  "promo.f1": { en: "Custom Website", is: "Sérsniðin vefsíða", pl: "Własna strona" },
  "promo.f2": { en: "Professional Photos", is: "Faglegar myndir", pl: "Profesjonalne zdjęcia" },
  "promo.f3": { en: "Social Media Ads", is: "Auglýsingar", pl: "Reklamy w social media" },
  "promo.f4": { en: "All-In-One Plan", is: "Allt-í-einu", pl: "Pakiet all-in-one" },
  "promo.cta": { en: "GET STARTED", is: "BYRJAÐU NÚNA", pl: "ROZPOCZNIJ" },
  "promo.price": { en: "From only 19,990 ISK/month", is: "Frá aðeins 19.990 kr./mán.", pl: "Już od 19 990 ISK/mies." },
  "promo.perks": {
    en: "Live in 7 days · Fully personalised · No long-term contracts",
    is: "Tilbúið á 7 dögum · Fullkomlega sérsniðið · Engir langtímasamningar",
    pl: "Gotowe w 7 dni · W pełni spersonalizowane · Bez długich umów",
  },

  // Footer
  "footer.desc": {
    en: "A family restaurant in Reykjavík that focuses on honest food from Icelandic ingredients.",
    is: "Fjölskylduveitingastaður í Reykjavík sem leggur áherslu á heiðarlegan mat úr íslensku hráefni.",
    pl: "Rodzinna restauracja w Reykjavíku stawiająca na uczciwe jedzenie z islandzkich składników.",
  },
  "footer.contact": { en: "Contact", is: "Tengiliðir", pl: "Kontakt" },
  "footer.openingHours": { en: "Opening hours", is: "Opnunartímar", pl: "Godziny otwarcia" },
  "footer.sun": { en: "Sun: 12:00 – 20:00", is: "Sun: 12:00 – 20:00", pl: "Ndz: 12:00 – 20:00" },
  "footer.rights": { en: "All rights reserved.", is: "Öll réttindi áskilin.", pl: "Wszelkie prawa zastrzeżone." },
} as const;

export type TranslationKey = keyof typeof translations;

export default translations;
