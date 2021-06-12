# Flight project 

Aplikacja polegająca na wyszukaniu lotów z trzech miast różnych kontynentów(Kraków, Londyn, Nowy Jork) do trzech innych miast (Warszawa, Londyn, Nowy Jork).

## Jak działa aplikacja?

W celu wyszukania lotu należy wybrać miejsce wylotu oraz miejsce przylotu, datę wylotu i przylotu oraz liczbę pasażerów. Pasażerów wybieramy poprzez kliknięcie i tym samym rozwinięcie przyciku z opisem '1 Dorosły' - jest to domyślna ilość pasażerów.

Po wybraniu wszystkich opcji, w celu zatwierdzenia zmian, należy kliknąć przycisk  'Gotowe'. Zmieni się wówczas zawartość pomarańczowego paska, którego zadaniem jest podsumowanie wyborów użytkownika. Następnie możemy kliknąć przycisk 'Wyszukaj', który wywoła wyświetlenie okna logowania. W celu poprawnego zalogowania się należy wpisać odpowiedni login i hasło z pliku db.json:

https://github.com/AnnaSKrz/users/blob/main/db.json

Po prawidłowym zalogowaniu wyświetlone zostaną wyniki wyszukiwania lotów.

## Widok wyszukanych lotów

Widok wyszukanych lotów rozpoczyna się od przywitania użytkownika imieniem lub nickiem Użytkownik (gdy użytkownik jest domyślny) oraz informacją nt. daty,godziny oraz pogody w wybranym przez użytkownika miejscu wylotu.

Następnie pokazana zostaje data wylotu oraz dzień, a także najniższa cena możliwych opcji lotu.
Lista możliwych lotów (wyświetlona poniżej daty i dnia) zawiera: nazwę przewoźnika, godzinę wylotu oraz przylotu (z uwagi na brak danych z API, godzina ta jest generowana losowo), nazwy lotniska wylotu oraz przylotu, nr lotu, cena, a także możliwość wyboru danego lotu poprzez klilknięcie przycisky 'Wybierz'.

W przypadku braku lotów w wybranym terminie, w miejscu daty, dnia oraz ceny, widnieje informacja dla użytkownia 'Brak lotów w wybranym terminie'.

## Wybór lotu 

Wybór lotu następuje poprzez kliknięcie przycisku 'Wybierz'. Wówczas pokazują się 3 opcje wyboru bagażu (ustalone przez autora aplikacji): opcja podstawowa Value niezmieniająca ceny biletu oraz opcja nr 2 - Regular i opcja nr 3 - Plus, zmieniające cenę za przelot. Aby wybrać jedną z opcji należy kliknąć przycisk 'Wybierz'. Wówczas użytkownik przekierowany zostaje do podsumowania lotu, gdzie otrzymuje informację o obecnej pogodzie w miejscu przylotu, informacje podsumowujące nt. wybranego lotu, ilości pasażerów, a także ma możliwość zmiany wybranego lotu lub wyboru miejsca w samolocie.

Dodatkowo użytkownik może przeliczyć kwotę lotu z PLN na inną walutę (USD lub Euro) - widok w wierszu poniżej kwoty w polskiej walucie (ona pozostaje widoczna).

Po kliknięciu przycisku 'Zmień' użytkownik zostaje przekierowany do opcji zmiany bagażu wybranego lotu lub też zmiany lotu.

Po kliknięciu przycisku 'Wybierz miejsce' pokazuje się obraz samolotu. Poprzez kliknięcie w wybrane miejsce uzytkownik wybiera miejsce, którego numer pokazuje się w widoku podsumowujacym lot.

Wybór lotu powrotnego następuje w ten sam sposób.

Po wybraniu obu lotów wraz z miejscem w samolocie oraz kliknięciu przycisku 'Rezerwuj' wyświetla się okno informujące o trwającej rezerwacji, co kończy działanie aplikacji.

## Wykorzystane techniki 

W projekcie wykorzystane zostały następujące techniki:
* HTML, SCSS, JavaScript,
* Webpack,
* Skyscanner API.

Aplikacja dostępna pod adresem:
https://annaskrz.github.io/flightSite/








