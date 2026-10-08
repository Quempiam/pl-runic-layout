# Tablica konwersji głosek: runiczny polski

Zasada: **jedna runa = jedna głoska**, bez dwuznaków. Zapis jest fonetyczny w zakresie rozróżnień (homofony scalone), ale **bez upodobnień** (np. „wszystko” to ᛝᛇᚤᛊᛏᚲᛟ, nie ᚠᛇᚤᛊᛏᚲᛟ „fszystko”).

## Samogłoski
| Polski zapis | Runa | Unicode | Uwagi |
|---|---|---|---|
| a | ᚨ | U+16A8 |  |
| e | ᛖ | U+16D6 |  |
| i | ᛁ | U+16C1 |  |
| o | ᛟ | U+16DF |  |
| u, ó | ᚢ | U+16A2 | ó i u to ta sama runa |
| y | ᚤ | U+16A4 |  |

## Nosówki
| Polski zapis | Runa | Unicode | Uwagi |
|---|---|---|---|
| ŋ (dźwięk nosowy) | ᛜ | U+16DC | samodzielnie jako ŋ |
| ę | ᛖᛜ | U+16D6 + U+16DC | e + ŋ |
| ą | ᛟᛜ | U+16DF + U+16DC | o + ŋ |

## Spółgłoski twarde
| Polski zapis | Runa | Unicode | Uwagi |
|---|---|---|---|
| b | ᛒ | U+16D2 |  |
| c | ᚴ | U+16B4 |  |
| d | ᛞ | U+16DE |  |
| f | ᚠ | U+16A0 |  |
| g | ᚷ | U+16B7 |  |
| h, ch | ᚻ | U+16BB | h i ch to ta sama runa |
| j | ᛃ | U+16C3 |  |
| k | ᚲ | U+16B2 |  |
| l | ᛚ | U+16DA |  |
| ł | ᚹ | U+16B9 |  |
| m | ᛗ | U+16D7 |  |
| n | ᚾ | U+16BE |  |
| p | ᛈ | U+16C8 |  |
| r | ᚱ | U+16B1 |  |
| s | ᛊ | U+16CA |  |
| t | ᛏ | U+16CF |  |
| w | ᛝ | U+16DD |  |
| z | ᛉ | U+16C9 |  |
| ż, rz | ⫯ | U+2AEF | ż i rz to ta sama runa; w Unicode to symbol, nie litera (oryginalna runa U+16F3 [ᛳ] nieobsługiwana przez większość aplikacji)|

## Spółgłoski miękkie (krótkie formy)
| Polski zapis | Runa | Unicode | Uwagi |
|---|---|---|---|
| ś | ᛋ | U+16CB |  |
| ć | К | U+041A | cyrylica, nie łacińskie K (problemy techniczne) |
| ń | ᛡ | U+16E1 | nie mylić z ᚼ U+16BC |
| ź | ᛠ | U+16E0 |  |
| dź | ᛯ | U+16EF |  |

## Dwuznaki zapisywane jedną runą
| Polski zapis | Runa | Unicode | Uwagi |
|---|---|---|---|
| sz | ᛇ | U+16C7 |  |
| cz | ᛢ | U+16E2 | nie mylić z sz |
| dz | ᛥ | U+16E5 | bez zmiękczenia |
| dż | ᚸ | U+16B8 | np. dżdżu = ᚸᚸᚢ |

## Formy z „i” (pisownia ni, si, ci, zi, dzi)

Polskie „ni”, „si”, „ci”, „zi”, „dzi” czyta się jako ńi, śi, ći, źi, dźi, więc zapisujemy **miękka runa + ᛁ**. Krótka runa bez ᛁ odpowiada pisowni ń, ś, ć, ź, dź.

| Pisownia | Zapis | Przykład |
|---|---|---|
| ni | ᛡᛁ | nie = ᛡᛁᛖ |
| si | ᛋᛁ | się = ᛋᛁᛖᛜ |
| ci | Кᛁ | ciebie = Кᛁᛖᛒᛁᛖ |
| zi | ᛠᛁ | zima = ᛠᛁᛗᚨ |
| dzi | ᛯᛁ | dzięki = ᛯᛁᛖᛜᚲᛁ |

Twarde s/c/z/dz + i występuje tylko w niektórych obcych słowach i zapisujemy je fonetycznie: sinus = ᛊᛁᚾᚢᛊ. Decyduje wymowa, nie pisownia.

## Interpunkcja

| Znak | Funkcja | Unicode |
|---|---|---|
| ｡ | kropka | U+FF61 |
| ¿ … ? | pytanie (odwrócony znak otwiera) | U+00BF |
| ¡ … ! | wykrzyknik (odwrócony znak otwiera) | U+00A1 |
| ᛫ | subiektywny znak zależny od kontekstu, bez ustalonej reguły | U+16EB |
| ᛬ | dwukropek przed listą | U+16EC |

Przecinków nie ma. Wielkie litery nie istnieją (nazwy własne i początek zdania pisze się tak samo).

## Liczby

Liczby piszemy między `ᗕ` i `ᗒ`, cyfry to runy odpowiadające literom a–j:

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 |
|---|---|---|---|---|---|---|---|---|---|
| ᚨ | ᛒ | ᚴ | ᛞ | ᛖ | ᚠ | ᚷ | ᚻ | ᛁ | ᛃ |

## Pułapki Unicode

| Chcesz | Użyj | Nie myl z |
|---|---|---|
| ń | ᛡ U+16E1 | ᚼ U+16BC |
| ć | К U+041A (cyrylica) | K U+004B (łacińskie) |
| sz | ᛇ U+16C7 | ᛢ U+16E2 (cz) |
| cz | ᛢ U+16E2 | ᛇ U+16C7 (sz) |

# Przykłady
| Runy | Litery|
|---|---|
| ᛝᛢᛟᚱᚨᛃ ᛈᚨᛞᚨᚹ ᛞᛖᛇᛢ ᚴᚨᚹᚤ ᛯᛁᛖᛡ｡ | Wczoraj padał deszcz cały dzień. |
| ¿ᛁᛚᛖ ᚲᛟᛇᛏᚢᛃᛖ ᚻᛚᛖᛒ? | Ile kosztuje chleb? |
| ¡ᚢᛝᚨᚷᚨ ᚾᚨ ᛊᚻᛟᛞᛖᚲ! | Uwaga na schodek! |
| ᛠᛁᛗᛟᛜ ᛃᛖᛗ ᚷᛟᚱᛟᛜᚴᛟᛜ ᛉᚢᛈᛖᛜ ᛉ ᛞᚤᛡᛁ｡ | Zimą jem gorącą zupę z dyni. |
| ᛗᚢᛃ ᛒᚱᚨᛏ ᚻᛟᛞᚢᛃᛖ ᚸᚸᛟᛝᛡᛁᚴᛖ ᛝ ᛟᚷᚱᛟᛯᛁᛖ｡ | Mój brat hoduje dżdżownice w ogrodzie. |
| ᛝ ᛇᚢᚠᛚᚨᛯᛁᛖ ᛚᛖ⫯ᚤ ᗕᚨᛒᗒ ᛞᚹᚢᚷᛟᛈᛁᛊᚢᛝ｡ | W szufladzie leży 12 długopisów. |
| ᛃᚢᛏᚱᛟ ᛃᛖᛯᛁᛖᛗᚤ ᚾᚨᛞ ᛗᛟ⫯ᛖ｡ | Jutro jedziemy nad morze. |
| ᛯᛝᛁᛖᛜᚲ ᛥᛝᛟᚾᚢ ᛡᛁᚢᛊᚹ ᛋᛁᛖᛜ ᛈᛟ ᛞᛟᛚᛁᛡᛁᛖ｡ | Dźwięk dzwonu niósł się po dolinie. |
| ᛝᛁᛖᛢᛟᚱᛖᛗ ᛢᚤᛏᚨᛗ Кᛁᛖᚲᚨᛝᛟᛜ ᚲᛋᛁᛟᛜ⫯ᚲᛖᛜ｡ | Wieczorem czytam ciekawą książkę. |
