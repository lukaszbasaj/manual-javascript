> **Umieszczanie kodu ![logo](js_logo.png ':size=20x20') w HTML**

Skrypty możemy wstawiać na stronę na 2 sposoby:

- bezpośrednio w kodzie HTML:
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    .
    .
    .
    <script>
        console.log("Nasz pierwszy skrypt!");
    </script>
</body>
</html>
```

- drugim sposobem wstawiania skryptu jest dołączenie zewnętrznego pliku, który zawiera nasz kod. Deklaracja skryptu jest podobna, jak przy wstawianiu w treści strony, jednak znacznik `<script>` zawiera dodatkowy atrybut **„src”** z przypisaną ścieżką dostępu do pliku. Ładowany plik ma rozszerzenie ***.js** i powinien zawierać kompletny skrypt bez znaczników `<script>`  i `</script>`. 

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    .
    .
    .
    <script src="plik_ze_skryptem.js"></script>
</body>
</html>
```



**Która metoda jest lepsza?**

Wszystko zależy od tego, jaki chcemy osiągnąć cel. Powszechną praktyką jest dołączanie zewnętrzengo pliku.

Do niedawna, gdy protokół **HTTP/2** nie był tak powszechny, w celu optymalizacji ilości zapytań wysyłanych przez przeglądarkę do serwerów, jedną z praktyk było umieszczanie kodu JavaScript w pliku html.


**Asynchroniczne ładowanie skryptów**

Możesz spotkać się z sytuacją, gdy w znaczniku `<script>` jest umieszczony jeden z dwóch dodatkowych atrybutów `async` i `defer`.
```
<script src="..." defer></script>
<script src="..." async></script>
```
Jednym ze sposobów na przyspieszenie wczytywania strony internetowej jest asynchroniczne ładowanie skryptów JavaScript. 

Atrybut `async` powoduje, że jeżeli przeglądarka czytając kod strony natrafi na plik ze skryptem zacznie go wczytywać w tle, równocześnie czytając dalszą część kodu strony. Jeżeli cały plik ze skryptem się wczyta, wtedy kod zostanie odpalony.

Atrybut `defer` działa w miarę podobnie. Plik ze skryptem też będzie wczytywany w tle. Różnica jest taka, że jeżeli przeglądarka wczyta już cały plik ze skryptem, odpali go po załadowaniu całego dokumentu.


> Wstawianie skryptów w kodzie HTML

Możliwe jest zainicjowanie kodu JS w sekcji `<head>`. 
Jednak jedną z dobrych praktyk jest inicjowanie kodu JS przed tagiem zamykającym sekcję `<body></body>`. 

Dzieje się tak z dwóch powodów:
- w pierwszej kolejności użytkownik powinien dostać treść strony;
- najczęściej skrypty JS działają na określonych elementach witryny, zatem optymalne jest załadowanie skryptów tuż po utwórzeniu wspomnianych elementów.

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <script src="jquery-jest-najlepsze.js"></script>
    </head>
    <body>
        .
        .
        .
        <script src="mySuperHyperScriptIsBetterThanjQuery.js"></script>
    </body>
</html>
```

> Komentowanie kodu

W JavaScript mamy do dyspozycji dwa rodzaje komentarzy:
- ```
/* 
komentarz składający się 
z wielu linii */
            ```
- ```
//komentarz jednolinijkowy 
```
---
