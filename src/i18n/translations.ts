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
  "nav.gallery": { en: "Gallery", is: "Myndir", pl: "Galeria" },
  "nav.hours": { en: "Opening hours", is: "Opnunartímar", pl: "Godziny otwarcia" },
  "nav.events": { en: "Events", is: "Viðburðir", pl: "Wydarzenia" },
  "nav.reviews": { en: "Reviews", is: "Umsagnir", pl: "Opinie" },
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
  "menu.tab.starters": { en: "Starters", is: "Forréttir", pl: "Przystawki" },
  "menu.tab.mains": { en: "Main courses", is: "Aðalréttir", pl: "Dania główne" },
  "menu.tab.desserts": { en: "Desserts", is: "Eftiréttir", pl: "Desery" },
  "menu.tab.drinks": { en: "Drinks", is: "Drykkir", pl: "Napoje" },

  // Starters
  "menu.s1.name": { en: "Langoustine soup", is: "Humarssúpa", pl: "Zupa z homarca" },
  "menu.s1.desc": { en: "Creamy Icelandic langoustine bisque with fresh bread.", is: "Kremað íslensk humarsúpa með fersku brauði.", pl: "Kremowa zupa z islandzkiego homarca ze świeżym chlebem." },
  "menu.s2.name": { en: "Smoked trout", is: "Reyktur silungur", pl: "Wędzony pstrąg" },
  "menu.s2.desc": { en: "House-smoked trout with horseradish cream and rye crumble.", is: "Heimilisreyktur silungur með piparrótarkremmi og rúgmylsnu.", pl: "Domowego wędzenia pstrąg z kremem chrzanowym i żytnią kruszonką." },
  "menu.s3.name": { en: "Beetroot salad", is: "Rauðrófusalat", pl: "Sałatka z buraków" },
  "menu.s3.desc": { en: "Roasted beetroot with skyr, walnuts and dill.", is: "Bakað rauðrófa með skyri, valhnetu og dilli.", pl: "Pieczone buraki ze skyrem, orzechami i koprem." },

  // Mains
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
  "menu.m3.name": { en: "Grilled lamb rack", is: "Grilluð lambahryggur", pl: "Grillowany kotlet jagnięcy" },
  "menu.m3.desc": { en: "Herb-crusted lamb rack with roasted root vegetables and red wine jus.", is: "Jurtakryddaður lambahryggur með bökuðu rótargrænmeti og rauðvínssósu.", pl: "Kotlet jagnięcy w ziołowej panierce z pieczonymi warzywami i sosem z czerwonego wina." },

  // Desserts
  "menu.item3.name": { en: "Skyr cake with berries", is: "Skyrterta með berjum", pl: "Ciasto skyr z jagodami" },
  "menu.item3.desc": {
    en: "Creamy skyr on a whey biscuit base with fresh Icelandic berry sauce and almonds.",
    is: "Kremað skyr á mysingarbotni með fersku íslensku berjasoði og möndlum.",
    pl: "Kremowe skyr na biszkoptowej bazie z sosem jagodowym i migdałami.",
  },
  "menu.d2.name": { en: "Chocolate lava cake", is: "Súkkulaðihraunköka", pl: "Czekoladowy lava cake" },
  "menu.d2.desc": { en: "Warm chocolate fondant with vanilla skyr ice cream.", is: "Heitt súkkulaðihjarta með vanillu skyrísi.", pl: "Ciepły fondant czekoladowy z lodami skyr waniliowymi." },

  // Drinks
  "menu.dr1.name": { en: "Icelandic craft beer", is: "Íslenskt smábruggsbjór", pl: "Islandzkie piwo rzemieślnicze" },
  "menu.dr1.desc": { en: "Selection of local Icelandic microbrews on tap.", is: "Úrval af íslenskum smábruggsbjórum á krana.", pl: "Wybór lokalnych islandzkich piw z kranu." },
  "menu.dr2.name": { en: "Brennivín cocktail", is: "Brennivíns-kokteill", pl: "Koktajl Brennivín" },
  "menu.dr2.desc": { en: "Our signature cocktail with Brennivín, blueberry and thyme.", is: "Sérstakur kokteill okkar með Brennivíni, bláberri og blóðbergi.", pl: "Nasz firmowy koktajl z Brennivín, borówką i tymiankiem." },
  "menu.dr3.name": { en: "Hot chocolate", is: "Heitt kakó", pl: "Gorąca czekolada" },
  "menu.dr3.desc": { en: "Rich Icelandic hot chocolate with whipped cream.", is: "Ríkt íslenskt kakó með þeyttum rjóma.", pl: "Gęsta islandzka gorąca czekolada z bitą śmietaną." },

  "menu.seeAll": { en: "See full menu", is: "Sjá allan matseðilinn", pl: "Zobacz pełne menu" },

  // Gallery
  "gallery.label": { en: "Gallery", is: "Myndir", pl: "Galeria" },
  "gallery.title": { en: "A taste of our world", is: "Bragð af okkar heimi", pl: "Smak naszego świata" },
  "gallery.subtitle": {
    en: "Step inside Eldhúsið — from our kitchen to your table.",
    is: "Stígðu inn í Eldhúsið — frá eldhúsinu á borðið þitt.",
    pl: "Zajrzyj do Eldhúsið — od naszej kuchni do Twojego stołu.",
  },
  "gallery.alt1": { en: "Signature dishes", is: "Sérréttir", pl: "Dania firmowe" },
  "gallery.alt2": { en: "Restaurant interior", is: "Innanhúss", pl: "Wnętrze restauracji" },
  "gallery.alt3": { en: "Arctic char dish", is: "Bleikjuréttur", pl: "Danie z gólca" },
  "gallery.alt4": { en: "Lamb soup", is: "Lambakjötsúpa", pl: "Zupa z jagnięciny" },
  "gallery.alt5": { en: "Skyr dessert", is: "Skyreftirréttur", pl: "Deser skyr" },

  // Reviews
  "reviews.label": { en: "Reviews", is: "Umsagnir", pl: "Opinie" },
  "reviews.title": { en: "What our guests say", is: "Hvað gestir okkar segja", pl: "Co mówią nasi goście" },
  "reviews.subtitle": { en: "Real stories from real people.", is: "Alvöru sögur frá alvöru fólki.", pl: "Prawdziwe historie prawdziwych ludzi." },
  "reviews.r1.location": { en: "Tourist from UK", is: "Ferðamaður frá Bretlandi", pl: "Turystka z Wielkiej Brytanii" },
  "reviews.r1.text": {
    en: "The best lamb soup I've ever had. The atmosphere is so warm and welcoming — it really feels like eating at someone's home. Will definitely come back.",
    is: "Besta lambakjötsúpan sem ég hef smakkað. Andrúmsloftið er svo hlýtt og notalegt — maður finnur eins og maður sé heima hjá einhverjum. Kem endilega aftur.",
    pl: "Najlepsza zupa jagnięca jaką jadłam. Atmosfera jest tak ciepła i gościnna — naprawdę czujesz się jak u kogoś w domu. Na pewno wrócę.",
  },
  "reviews.r2.location": { en: "Local from Reykjavík", is: "Heimamaður í Reykjavík", pl: "Miejscowy z Reykjavíku" },
  "reviews.r2.text": {
    en: "Our family's go-to place. The kids love it, the food is always consistent and honestly priced. The skyr cake is unreal.",
    is: "Uppáhaldsstaður fjölskyldunnar. Börnunum finnst frábært, maturinn er alltaf jafn góður og á sanngjörnu verði. Skyrtertan er ótrúleg.",
    pl: "Ulubione miejsce naszej rodziny. Dzieci to uwielbiają, jedzenie jest zawsze dobre i uczciwie wycenione. Ciasto skyr jest nieziemskie.",
  },
  "reviews.r3.location": { en: "Tourist from Poland", is: "Ferðamaður frá Póllandi", pl: "Turystka z Polski" },
  "reviews.r3.text": {
    en: "We found this gem on our last day in Iceland and wished we'd discovered it sooner. The arctic char was perfectly cooked. Highly recommend!",
    is: "Við fundum þessa gimstein á síðasta degi okkar á Íslandi og óskaði okkur að við hefðum fundið það fyrr. Bleikjan var fullkomlega steikt. Mæli eindregið með!",
    pl: "Odkryliśmy ten klejnot ostatniego dnia na Islandii i żałujemy, że nie znaleźliśmy go wcześniej. Golec arktyczny był idealnie przyrządzony. Gorąco polecam!",
  },
  "reviews.googleBadge": { en: "Based on 240+ Google reviews", is: "Byggt á 240+ Google umsögnum", pl: "Na podstawie 240+ opinii Google" },

  // Reservation
  "reservation.label": { en: "Reservations", is: "Bókanir", pl: "Rezerwacje" },
  "reservation.title": { en: "Book your table", is: "Bókaðu borðið þitt", pl: "Zarezerwuj stolik" },
  "reservation.subtitle": {
    en: "Reserve your spot and we'll have everything ready for you.",
    is: "Bókaðu þinn stað og við sjáum um allt fyrir þig.",
    pl: "Zarezerwuj miejsce, a my przygotujemy wszystko dla Ciebie.",
  },
  "reservation.dineoutNote": {
    en: "Powered by DineOut — Iceland's booking platform",
    is: "Keyrt af DineOut — bókunarkerfi Íslands",
    pl: "Obsługiwane przez DineOut — islandzką platformę rezerwacji",
  },
  "reservation.phoneAlt": {
    en: "Prefer to call? Reach us directly at 555-1234",
    is: "Viltu frekar hringja? Náðu í okkur á 555-1234",
    pl: "Wolisz zadzwonić? Skontaktuj się bezpośrednio: 555-1234",
  },
  "reservation.callNow": { en: "Call now", is: "Hringdu núna", pl: "Zadzwoń teraz" },
  "reservation.name": { en: "Name", is: "Nafn", pl: "Imię" },
  "reservation.namePlaceholder": { en: "Your name", is: "Þitt nafn", pl: "Twoje imię" },
  "reservation.date": { en: "Date", is: "Dagsetning", pl: "Data" },
  "reservation.time": { en: "Time", is: "Tími", pl: "Godzina" },
  "reservation.guests": { en: "Guests", is: "Gestir", pl: "Osoby" },
  "reservation.guest": { en: "guest", is: "gestur", pl: "osoba" },
  "reservation.guestsLabel": { en: "guests", is: "gestir", pl: "osoby" },
  "reservation.submit": { en: "Reserve table", is: "Bóka borð", pl: "Zarezerwuj stolik" },
  "reservation.success": { en: "Table reserved!", is: "Borð bókað!", pl: "Stolik zarezerwowany!" },
  "reservation.successDesc": {
    en: "We'll send you a confirmation email shortly. See you soon!",
    is: "Við sendum þér staðfestingu í tölvupósti fljótlega. Sjáumst!",
    pl: "Wkrótce wyślemy Ci e-mail z potwierdzeniem. Do zobaczenia!",
  },

  // Gift Cards
  "giftcard.title": { en: "Gjafabréf — Gift Cards", is: "Gjafabréf", pl: "Karty podarunkowe" },
  "giftcard.desc": {
    en: "Give the gift of a great meal. Our gift cards are perfect for birthdays, holidays or just because. Available in any amount.",
    is: "Gefðu gjöf góðrar máltíðar. Gjafabréfin okkar henta vel fyrir afmæli, hátíðir eða bara svona. Fáanleg í hvaða upphæð sem er.",
    pl: "Podaruj wspaniały posiłek. Nasze karty podarunkowe to idealny prezent na urodziny, święta lub po prostu tak. Dostępne w dowolnej kwocie.",
  },
  "giftcard.cta": { en: "Buy gift card", is: "Kaupa gjafabréf", pl: "Kup kartę podarunkową" },
  "giftcard.note": { en: "Valid for 3 years · Use at any visit", is: "Gildir í 3 ár · Hægt að nota hvenær sem er", pl: "Ważna 3 lata · Do wykorzystania przy dowolnej wizycie" },

  // Events
  "events.label": { en: "What's happening", is: "Hvað er í gangi", pl: "Co się dzieje" },
  "events.title": { en: "Events & specials", is: "Viðburðir & tilboð", pl: "Wydarzenia i oferty" },
  "events.subtitle": { en: "There's always something going on at Eldhúsið.", is: "Alltaf er eitthvað í gangi á Eldhúsinu.", pl: "W Eldhúsið zawsze coś się dzieje." },
  "events.book": { en: "Book now", is: "Bóka núna", pl: "Zarezerwuj" },
  "events.e1.title": { en: "Weekend Brunch", is: "Helgarbrúns", pl: "Weekendowy brunch" },
  "events.e1.desc": { en: "Lazy weekend mornings with eggs, smoked salmon, fresh bread and Icelandic skyr bowls.", is: "Rólegar helgarmornar með eggjum, reyktu laxi, fersku brauði og skyrbollum.", pl: "Leniwe weekendowe poranki z jajkami, wędzonym łososiem, świeżym chlebem i miskami skyr." },
  "events.e1.date": { en: "Every Sat & Sun", is: "Alla lau. & sun.", pl: "Każda sob. i niedz." },
  "events.e1.time": { en: "10:00 – 14:00", is: "10:00 – 14:00", pl: "10:00 – 14:00" },
  "events.e1.badge": { en: "Every weekend", is: "Á hverjum helgum", pl: "Co weekend" },
  "events.e2.title": { en: "Taste of Iceland Evening", is: "Bragð af Íslandi kvöld", pl: "Wieczór Smaku Islandii" },
  "events.e2.desc": { en: "A special 5-course tasting menu celebrating the best of Icelandic ingredients, paired with local wines.", is: "Sérstakur 5-rétta smakkunarseðill sem fagnar besta íslenska hráefninu, parað við innlend vín.", pl: "Specjalne 5-daniowe menu degustacyjne celebrujące najlepsze islandzkie składniki, w parze z lokalnymi winami." },
  "events.e2.date": { en: "April 25, 2026", is: "25. apríl 2026", pl: "25 kwietnia 2026" },
  "events.e2.time": { en: "19:00 – 22:00", is: "19:00 – 22:00", pl: "19:00 – 22:00" },
  "events.e2.badge": { en: "Special event", is: "Sérstakur viðburður", pl: "Wydarzenie specjalne" },
  "events.e3.title": { en: "Family Sunday", is: "Fjölskyldusunnudagar", pl: "Rodzinna niedziela" },
  "events.e3.desc": { en: "Kids eat free every Sunday! Bring the whole family and enjoy our special children's menu.", is: "Börn borða frítt á sunnudögum! Komdu með alla fjölskylduna og njóttu barnaseðilsins okkar.", pl: "Dzieci jedzą za darmo w każdą niedzielę! Przyjdź z całą rodziną i skorzystaj z naszego menu dla dzieci." },
  "events.e3.date": { en: "Every Sunday", is: "Alla sunnudaga", pl: "Każda niedziela" },
  "events.e3.time": { en: "12:00 – 18:00", is: "12:00 – 18:00", pl: "12:00 – 18:00" },
  "events.e3.badge": { en: "Kids eat free", is: "Börn frítt", pl: "Dzieci za darmo" },

  // Take Away
  "takeaway.title": { en: "Take Away — Taktu það með heim!", is: "Take Away — Taktu það með heim!", pl: "Na wynos — Zabierz do domu!" },
  "takeaway.desc": {
    en: "Can't stay? Take our food home with 20% off the full menu. Call ahead and we'll have it ready.",
    is: "Getur ekki dvalið? Taktu matinn heim með 20% afslætti af öllum matseðli. Hringdu fyrirfram og við sjáum til þess að allt sé tilbúið.",
    pl: "Nie możesz zostać? Zabierz nasze jedzenie do domu z 20% rabatem na całe menu. Zadzwoń wcześniej, a przygotujemy zamówienie.",
  },
  "takeaway.discount": { en: "20% OFF TAKE AWAY", is: "20% AFSLÁTTUR", pl: "20% RABATU NA WYNOS" },
  "takeaway.time": { en: "Ready in 15-20 min", is: "Tilbúið á 15-20 mín", pl: "Gotowe w 15-20 min" },
  "takeaway.pickup": { en: "Pick up at Laugavegur 42", is: "Sótt á Laugavegi 42", pl: "Odbiór: Laugavegur 42" },
  "takeaway.cta": { en: "Order now — 555-1234", is: "Panta núna — 555-1234", pl: "Zamów teraz — 555-1234" },
  "takeaway.off": { en: "off entire menu", is: "afsláttur af öllum matseðli", pl: "rabatu na całe menu" },

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
