# JavaScript Object Notation

`JSON` to format pliku służący do przechowywania i wymiany danych.
Dane są przechowywane w zestawie par klucz-wartość. Te dane są czytelne dla
człowieka, co sprawia, że `JSON` jest idealny do ręcznej edycji.

```json
{
  "dogs": [{
    "id": 0,
    "name": "maja",
    "race": "pies"
  }, {
    "id": 1,
    "name": "milus",
    "race": "pies"
  }],
  "cats": [{
    "id": 0,
    "name": "puszek",
    "race": "kot"
    }, {
    "id": 1,
    "name": "greebo",
    "race": "kot"
  }]
}
```

Z tego małego fragmentu widać, że klucze są zawinięte w podwójne cudzysłowy,
dwukropek oddziela klucz i wartość, a wartość może być różnego rodzaju.
Zestawy klucz-wartość są oddzielone przecinkiem.

`JSON` urodził się w 2002 roku i zyskał ogromną popularność dzięki łatwości użycia
i elastyczności, i chociaż narodził się ze świata JavaScript, szybko
rozprzestrzenił się na inne języki programowania.

Jest zdefiniowany w standardzie [ECMA-404](http://www.ecma-international.org/flat/publications/files/ECMA-ST/ECMA-404.pdf).

Ciągi `JSON` są zwykle przechowywane w plikach .json i przesyłane przez sieć z typem aplikacji / json MIME.

## Typy danych

JSON obsługuje niektóre podstawowe typy danych:

* `Number`: dowolna liczba, która nie jest zawinięta w cudzysłów
* `String`: dowolny zestaw znaków zawinięty w cudzysłów
* `Boolean`: `true` lub `false`
* `Array`: lista wartości, owinięta w nawiasy kwadratowe
* `Object`: zestaw kluczy pary wartości, owinięte nawiasami klamrowymi
* `null`: słowo null, które reprezentuje pustą wartość

Każdy inny typ danych musi być serializowany do ciągu (a następnie zdezserializowany), aby można go było zapisać w `JSON`.

## Kodowanie i dekodowanie JSON w JavaScript

ECMAScript 5 w 2009 roku wprowadził obiekt `JSON` w standardzie JavaScript, który oferuje między innymi metody `JSON.parse()` i `JSON.stringify()`. Zanim będzie można go użyć w programie JavaScript, `JSON` w formacie ciągu musi zostać przeanalizowany i przekształcony w dane, z których może korzystać JavaScript.

* `JSON.parse()` przyjmuje parametr `JSON` jako parametr i zwraca obiekt zawierający przeanalizowany `JSON`.
* `JSON.stringify()` przyjmuje obiekt JavaScript jako parametr i zwraca ciąg znaków reprezentujący go w `JSON`
