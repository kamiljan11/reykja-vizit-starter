# GLOSSARY — słownik domeny (IS / PL / EN)

<!-- Copy tego repo jest w całości po islandzku — słownik zaczyna się od IS. Nowy termin w diffie = nowy wiersz tutaj. -->

| Termin w kodzie (EN) | IS | PL | Znaczenie / reguła biznesowa |
|---|---|---|---|
| `Eldhúsið` | Eldhúsið (fikcyjna marka) | "kuchnia" | wymyślona restauracja rodzinna użyta jako demo dla klientów Reykjawwwik z branży gastronomii |
| `menu` / `dish` | matseðill / réttur | menu / danie | pozycja w `Menu.tsx` — nazwa, cena, zdjęcie |
| `reservation` | borðapöntun | rezerwacja stolika | formularz w `Reservation.tsx` — data, liczba osób, kontakt; nie zapisuje nigdzie realnie |
| `take-away` | matur með sér | na wynos | oferta w `TakeAway.tsx`, bez integracji z systemem zamówień |
| `gift card` | gjafabréf | karta podarunkowa | oferta w `GiftCards.tsx`, bez realnej płatności/wystawienia |
| `opening hours` | opnunartími | godziny otwarcia | prezentowane above-the-fold w `Hours.tsx`, statyczne dane |
| `DemoModal` / `useDemo` | — | okno demo | mechanizm podmiany realnej akcji (rezerwacja, zamówienie) na komunikat informacyjny |
