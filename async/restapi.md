# REST API

**REST** – Representational State Transfer – styl architektury oprogramowania
opierający się o zbiór wcześniej określonych reguł opisujących
jak definiowane są zasoby,a także umożliwiających dostęp do nich.
Został on zaprezentowany przez Roya Fieldinga w 2000 roku.

**API** – Application Programming Interface – zestaw reguł definiujący
 komunikację pomiędzy programami komputerowymi.

Czyli API są to reguły określające jak użytkownik może uzyskać dostęp do zasobów
oraz w jakiej postaci je otrzymuje.
Natomiast REST to styl architektury definiujący jak zbudowane będzie to API.

## Zasada działania API

Cykl pracy z API możemy określić następująco:

* Klient preparuje zapytanie w postaci odpowiedniego adresu (endpointa).
* Następnie wysyła to zapytanie do interfejsu.
* Interfejs zwraca odpowiedź na zapytanie klienta.
* Klient otrzymuje odpowiedź na swoje zapytanie.
* Dla wielu osób to, co napisałem może się wydawać oczywiste. Chciałbym jednak,
    aby KAŻDY po przeczytaniu tego artykułu wiedział do czego służy API.

Do zbudowania podstawowego API pozwalającego na odczyt, zapis, aktualizację
i usuwanie danych wystarczą tylko 4 metody – GET, POST, PUT i DELETE.

* GET — pobieranie (zarówno kolekcji, jak i pojedynczego elementu)
* POST — tworzenie (tylko kolekcji)
* PUT — aktualizacja (tylko pojedynczego elementu)
* DELETE — usuwanie (tylko pojedynczego elementu)

## Zasady tworzące REST

Aby API można nazwać RESTful lub API RESTowym musi ono spełniać kilka założeń:

* Odseparowanie interfejsu użytkownika od operacji na serwerze. 
Klient poprzez “wydawanie poleceń” nie ma wpływu na to co się dzieje po stronie serwera.
Działa to również w drugą stronę – serwer daje klientowi jedynie odpowiedź 
i nie ma prawa ingerować w UI. Pozwala to na korzystanie z jednego REST API
w wielu niezależnych od siebie aplikacjach, a dane pozostaną spójne.

* Bezstanowość – mówi się że REST jest stateless – oznacza to, że każde zapytanie
od klienta musi zawierać komplet informacji oraz, że serwer nie przechowuje
stanu o sesji użytkownika po swojej stronie.

* Cacheability – odpowiedź, którą użytkownik otrzyma z REST API musi jasno 
definiować, czy ma ona być cacheable czy non-cacheable. Ma to znaczenie przy danych,
które bardzo szybko stają się nieaktualne oraz przy danych, które aktualizują 
się relatywnie rzadko – nie ma sensu na przykład cache’ować współrzędnych 
geograficznych pędzącego samolotu, natomiast już jego kolor czy nazwę już tak.
Endpointy, czyli tak naprawdę adresy, które pozwalają na dostęp do informacji 
powinny jednoznacznie wskazywać do jakiego zasobu się odwołują. 
Z ich budowy powinniśmy wiedzieć jaki konkretnie zasób otrzymamy. 
Co ważne – dane otrzymywane w API powinny być niezależne w żaden 
sposób od schematu bazy danych w jakiej są przetrzymywane. Oczywiście nie ma 
przeciwwskazań, aby struktura danych wyglądała identycznie jak schemat 
bazy danych – niemniej jednak struktura w żaden sposób 
nie powinna zależeć od tego schematu.

* Separacja warstw – powinniśmy oddzielić warstwy dostępu do danych, logiki 
oraz prezentacji. Pozwala to na dowolne operacje na danych – nie wymuszamy 
na użytkowniku konkretnego działania na nich, ani wyświetlania ich w konkretny 
sposób. Ponadto pośrednie i zewnętrzne API wykorzystywane przez serwer(!) mogą 
być wykorzystywane bez wiedzy klienta. Przykładem może być wcześniej wspomniany 
samolot, gdzie informacja np. o kolorze może pochodzić z zupełnie innego API – 
klient nie musi o tym wiedzieć.
Możliwość udostępniania apletów i skryptów klientowi – jest to opcjonalna reguła,
aczkolwiek warto rozważyć jej zastosowanie. Jeśli wiemy, że klienci będą 
wykonywać konkretne operacje na konkretnych danych możemy im udostępnić
gotowe do tego rozwiązania.

* Możliwość udostępniania apletów i skryptów klientowi – jest to opcjonalna 
reguła, aczkolwiek warto rozważyć jej zastosowanie. Jeśli wiemy, 
że klienci będą wykonywać konkretne operacje na konkretnych danych 
możemy im udostępnić gotowe do tego rozwiązania.

## Jakie są zalety korzystania z REST API?

Największą z zalet jest przede wszystkim uniwersalność. Załóżmy, że potrzebujesz
 stworzyć aplikację na telefon i stronę internetową dla księgarni.
 Możesz stworzyć jedno API, z którego będzie korzystała
 zarówno aplikacja jak i strona internetowa!

Po drugie – jeśli napisany interfejs programistyczny jest zgodny z zasadami REST,
 to w trakcie procesu pisania aplikacji będziesz intuicyjnie tworzył endpointy
  i dzięki nim wygodnie operował na danych.

Dane jakie otrzymujemy z API, najczęściej są w wygodnym do pracy formacie –
JSON, czyli JavaScript Object Notation. Czasami zdarzy się jeszcze format XML,
 niemniej jednak spotykam się z nim coraz rzadziej. Korzystanie z JSON’ów jest
  naprawdę szybkie, wygodne i nie powoduje większych trudności.

Możemy pozyskiwać dane jednocześnie z wielu źródeł. Na przykład możemy stworzyć
 aplikację wykorzystującą logowanie za pomocą Facebooka oraz mapy Google.
 W obu przypadkach skorzystamy z API oferowanych przez te firmy.

Kolejną z zalet jest możliwość odseparowania warstwy klienta, od warstwy serwerowej.
Alternatywą dla API jest tworzenie widoków za pomocą silników szablonów takich
jak Pug, Twig, czy Blade.
