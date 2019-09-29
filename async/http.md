# HTTP

HTTP to skrót od Hypertext Transfer Protocol i jest to główny protokół używany współcześnie w przegladarkach. Jest to protokół bezstanowy, tzn. ani serwer (ani klient) nie przechowuje informacji o tym, jakie były wcześniej zapytania pomiędzy określonym serwerem i klientem oraz nie posiada stanu wewnętrznego. Powoduje to, że każde zapytanie do serwera traktowane jest jako ‘nowe’,
 z punktu widzenia serwera aplikacji niemożliwe do powiązania z informacjami np. o zalogowanym użytkowniku. Tą bezstanowość można obejść, obecnie głównie za pomocą tzw. ciasteczek (będzie o nich nieco dalej), należy jednak pamiętać, że HTTP sam w sobie jest bezstanowy.

## Zapytania HTTP

W zapytaniach HTTP możemy wyróżnić dwa elementy: nagłówek i ciało. Zajmijmy się najpierw pierwszą częścią czyli nagłówkiem. Nagłówek ma minimum 1 wiersz, który określa metodę HTTP (poniżej omówimy sobie czym są metody, oraz do czego służy każda z nich), adres URI oraz wersję protokołu HTTP (obecnie korzystamy z wersji 1.1, oznaczanej w nagłówku jako HTTP/1.1 ). Przykładowy pierwszy wiersz nagłówka wygląda nastepująco:

`GET / HTTP/1.1`

Gdzie:

GET — to nazwa metody HTTP
/ — to tzw. URI, czyli ta część adresu, który wystepuje po domenie
HTTP/1.1 — okreslenie protokołu, tutaj HTTP w wersji 1.1
Bezpośrednio pod tą linijką możemy (ale nie musimy) podać nagłówki HTTP, każdy w nowej linii. Uwaga! Nie może być tutaj żadnej linii przerwy! Wszystko, co znajdzie się po pierwszej pustej linii (przerwie) traktowane jest jako ciało zapytania.

## Metoda HTTP

Metody w protokole HTTP służą do rozgraniczania różnych czynności, które mamy zamiar wykonać, pomagają także w projektowaniu przeglądarek internetowych i obsłudze zapytań. Początkowo o protokole HTTP myślano jako o protokole do obsługi plików na zdalnym serwerze — taki protokół pozwalał na pobranie zasobu, usunięcie go, wysłanie na serwer, jego aktualizację oraz pobranie metadanych. Takie znaczenie nadaje się też metodom HTTP w przypadku API spełniającego założenia REST. Tyle z teorii i historii. W praktyce metody pozwalają nam ‘rozdzielać’ zapytania trafiające pod ten sam adres — np. metody GET używamy do wyświetlenia formularza, a metody POST do jego przesłania — obie rzeczy możemy realizować pod tym samym adresem url, np. www.kobietydokodu.pl/jakis/formularz . Poniżej znajdziesz podsumowanie metod protokołu HTTP:

| Metoda | Request body | Response body | Zastosowanie / opis                                                                                                                                                                                                                                                                                                                                                                              |
|--------|--------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET    | niedozwolone | opcjonalnie   | Pobieranie zasobu lub jego wyświetlenie, np. wyświetlenie formularza lub strony. Parametry można przekazywac jedynie poprzez adres (np. ?nazwa=wartosc&nazwa2=wartosc2)                                                                                                                                                                                                                          |
| POST   | opcjonalne   | opcjonalnie   | Przesłanie danych zapisanych jako pary klucz-wartość do serwera (np. wysłanie formularza, gdzie kluczem jest nazwa danego pola a wartością wpisana przez nas wartość). Metoda ta pozwala przesyłać także pliki (a także wiele pliki oraz pary klucz-wartość jednocześnie). Parametry są przekazywane w ciele zapytania, można także przekazywać parametry poprzez adres (tak jak w metodzie GET) |
| PUT    | opcjonalne   | opcjonalnie   | Przesyłanie ‘paczki’ danych, np. jednego pliku. Metoda ta ma pewne ograniczenia, np. nie ma możliwości łaczenia par klucz-wartość z inną przesyłaną treścią (np. plikiem). Obecnie używana głównie w przypadku RESTowych serwisów, gdzie ciałem jest np. formularz zapisany w postaci JSONa.                                                                                                     |
| DELETE | opcjonalnie  | opcjonalnie   | Usuwanie zasobu na serwerze, z racji bezpieczeństwa praktycznie zawsze jest wyłaczona domyślnie. Obecnie używana głównie w przypadku RESTowych serwisów, wskazując, że dany zasób ma być usunięty (i obsługiwany przez aplikację, a nie sam serwer).                                                                                                                                             |
| HEAD   | niedozwolone | niedozwolone  | Analogiczny do zapytania GET, z tym wyjątkiem, że nie zwraca ciała (zawartości). Służy do pobrania metdanych o zasobie w postaci nagłówków HTTP. Dla danego adresu zwraca same nagłówki.

## Statusy HTTP (kody odpowiedzi)

Jednym z elementów protokołu HTTP są kody odpowiedzi, zwanymi też statusami. To numeryczne, trzycyfrowe kody, które są dołączane do odpowiedzi i sygnalizują status odpowiedzi. Najpopularniejsze i najczęściej spotykane kody to 200 (OK, czyli wszystko jest w porządku, zapytanie jest obsłużone), 302 (przekierowanie), 403 (brak dostępu) oraz 404 (nie znaleziono — stąd liczba 404 często pojawia się na stronach z informacją, że wpisany adres nie istnieje).

Kodów jest mnóstwo, najczęściej wystarczy jednak znajomość tych podstawowych. Co ważne, nawet nie znając kodu można określić jego przybliżone znaczenie na podstawie numeru. Kody są bowiem podzielone na grupy, pierwsza cyfra kodu mówi nam, z której jest on grupy. I tak:

1xx — informacyjne, nieczęsto można spotkać, dotyczą bardziej środowiska niż samej aplikacji (np. 111 — serwer odrzucił połaczenie)
2xx — zapytanie się powiodło
3xx — przekierowanie, zapytanie należy kierować pod inny adres / serwer
4xx — błąd aplikacji spowodowany działaniem użytkownika (np. wspomniany 404 — nie znaleziono — czy 403 — brak dostępu lub 400 — niepoprawnie zapytanie)
5xx — błąd serwera (np. nieobsłużony wyjątek w Javie)                                                                                                                                                                                                   |
