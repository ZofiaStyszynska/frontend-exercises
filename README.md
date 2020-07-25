# sda-html-css-js
Zadania do nauki podstaw HMTL, CSS i JS.

Sklonuj to repozytorium na swój komputer. Dla kolejnych "dużych" sekcji (1,2,3...) proponuję utworzyć osobne gałęzie, a poszczególne zadania umieszczać w osobnych commitach o tytułach zawierających numer zadania (np. 1-f).

## 1. Podstawowa składnia HTML

a. Utwórz pusty dokument HTML. Pamiętaj o podstawowych tagach - `!DOCTYPE`, `html`, `head`, `body`

b. Uzupełnij sekcję `head` poprawnymi metadanymi - ustaw kodowanie UTF-8 przy pomocy `charset`, szerokość ekranu i skalę przy pomocy `<meta name="viewport"...`

c. Nadaj tytuł dokumentu przy pomocy tagu `title`

d. W sekcji `body` dodaj nagłówek najwyższego rzędu zawierający tekst `Hello World 😮`

e. Poniżej dodaj podtytuł, zawierający dowolny tekst

f. Dodaj tagi semantyczne do Twojego dokumentu. Niech strona zawiera nagłówek (Hello world), zawartość główną (Twój tekst) oraz pustą stopkę

h. W sekcji głównej (main) dodaj dwa akapity z dowolną treścią [https://www.lipsum.com/](https://www.lipsum.com/)

g. Niech drugi z dodanych akapitów będzie wyróżniony *kursywą*

h. Poniżej akapitów dodaj kontener `div`. Kontener niech zawiera dwa hiperłącza (np. link 1 i link 2) do dwóch dowolnych stron internetowych

i. Poniej utwórz przycisk z dowolną etykietą

j. Następnie utwórz pole do wprowadzania tekstu

k. Poniżej tagu zamykającego kontener `div`, utwórz kolejny kolejny pusty kontener

l. Wewnątrz nowego kontenera utwórz dwie listy z paroma elementami - jedną z wyznacznikami elementów w postaci kolejnych liczb, a drugą z punktorami

m. Spraw aby jeden z dodanych wcześniej linków powodował otwarcie nowej zakładki w przeglądarce

n. Poniżej kontenera z listami utwórz kontener zawierający przycisk i pole do wprowadzania tekstu.

o. Dodaj nową podstronę `about.html`. Niech na stronie głównej znajdzie się kolejny link (obok wcześniej dodanych )

p. Niech utworzona strona zawiera nagłówek, obrazek, akapit opisujący zawartość obrazka oraz link kierujący do strony głównej

## 2. Podstawy CSS

a. Zmień wygląd (czcionka, rozmiar, kolor, margines) głównego nagłówka z wykorzystaniem tagu `style` w głównym pliku `index.html`

b. Dodaj w podobny sposób style, według własnego projektu do podtytułu

c. Spraw, by akapity miały różne kolory, oraz dodaj ramkę do całej sekcji `main`. Niech ramka będzie zaokrąglona

d. Kontener `div` w którym znajdują się hiperłącza, zmień na semantyczny tag `nav`. Spraw, by hiperłącza były umieszczone jedno nad drugim. Dodaj obramowania oraz tło do hiperłączy by przypominały przyciski. Niech hiperłącza zmieniają kolor po najechaniu na nie kursorem

e. Niech listy będą umieszczone obok siebie, na środku ekranu. Ostyluj w dowolny sposób elementy listy

f. Ostyluj przycisk, tak by przypominał hiperłącza powyżej. Dodaj style do pola tekstowego według własnego uznania

g. Dodaj tag `style` do drugiego utworzonego wcześniej dokumentu. Spraw by obrazek wypełniał całą szerokość strony. Dodaj style do paragrafu oraz przycisku

h. Do każdego elementu obu dokumentów dodaj atrybut `class`

i. Utwórz pliki `index.css` oraz `about.css`. Dołącz je do odpowiednich plików `html` przy pomocy tagu `link`. Usuń dodane style z plików `html` i przenieś je do plików `css`. Tym razem wykorzystaj dodane klasy jako selektory. Staraj się nie dublować kodu. Spróbuj wykorzystać metodologię BEM - w razie potrzeby zmień dodane wcześniej klasy.

## 3. Manipulowanie drzewem DOM przy pomocy JS

a. Do pliku `index.html` podłącz pusty plik `index.js`. Wykorzystaj do tego celu `<script src="...`

b. Spraw, aby kod zawarty w pliku `index.js` wyświetlił komunikat `Hello World` w konsoli JS, po załadowaniu się strony

c. Zmień kod tak, aby komunikat pojawił się w przeglądarce w postaci okienka z powiadomieniem

e. Usuń kod z powiadomieniem 'Hello World'. Spraw, aby kliknięcie przycisku znajdującego się u dołu strony `index.html` powodowało wyświetlenie dowolnego komunikatu.

f. Teraz niech wyświetlany komunikat zawiera tekst, wpisany w polu tekstowym obok przycisku. Uwaga - jeśli pole jest puste, niech komunikat się nie pokazuje. 

g. Dodaj drugie pole tekstowe. Niech wyświetlany komunikat zawiera tekst z obu pól, oddzielony przecinkiem. Jeśli jedno z pól jest pustych, nie pokazuj przecinka. Jeśli oba pola są puste, nie pokazuj komunikatu.

h. Ponad dwoma akapitami tekstu dodaj przycisk, który pozwoli na pokazywanie i chowanie akapitów (jeśli akapity nie są widoczne, kliknięcie przycisku pokaże je, a jeśli są widoczne - ukryje).

## 4. Projekt podsumowujacy - aplikacja to-do

Stwórz nowy plik `todo.html` i odpowiednie pliki JavaScript i CSS. Wykorzystując nowe umiejętności stwórz aplikację, która wypełni poniższe user stories:

  a. Mogę umieścić treść notatki w polu tekstowym.
  
  b. Klikając przycisk, mogę dodać notatkę. Notatki pojawiają się jedna pod drugą.
  
  c. Nie mogę dodać pustej notatki.
  
  d. Po udanym dodaniu notatki, pole tekstowe zostaje wyczyszczone.
  
  e. Mogę usuwać pojedyncze notatki, lub wszystkie na raz. 
