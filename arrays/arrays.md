> Tablice

Tablice są to uporządkowane zbiory zawierające dane. 


>> Tworzenie tablic

Aby stworzyć nową tablicę korzystamy z `literału tablicowego` (nawiasów kwadratowych):

```
const table = []; //pusta tablica

const tableWithNumbers = [1, 2, 3]; //tablica z 3 liczbami

const tableWithStrings = ['Luke Skywalker', 'Darth Vader', 'Leia Organa']; //tablica z 3 elementami

```



```
const a = "Han Solo";
const b = 234;
const c = "CHEWBACCA";

const tab = [a, b, c, "YODA", {...}]; //tablica z 5 elementami. Mogą to być oddzielne zmienne, ale też wartości wpisane w tablicy
```

Elementy tablicy numerujemy zaczynając od `0`:

| a | b | c | YODA | {...} |
|---|---|---|------|-------|
|tab[0]|tab[1]|tab[2]|tab[3]|tab[4]|

Pierwsza wartość w tablicy ma index `0`, druga `1`, trzecia `2` i tak dalej, aż do ostatniego indeksu który wynosi `długość_tablicy-1 `czyli `tab.length-1`.


Tablicę można też stworzyć przy użyciu funkcji konstruktora:

```
const arr = new Array(1, 2, 3, 4);
```
Odkładając na bok estetykę, musisz pamiętać o kilku subtelnych szczegółach podczas korzystania z konstruktora tablic. Ponieważ Array jest zmienną globalną, można ją zmodyfikować gdzie indziej w skrypcie, więc może nie działać zgodnie z oczekiwaniami.

```
Array = String; 
const arr = new Array(1, 2, 3, 4); // "1" 
```
Innym problemem jest to, że jeśli konstruktor tablicy otrzyma tylko jeden argument liczbowy, utworzy listę bez elementów, ale o długości równej temu argumentowi. Zatem `[„Anakin”]` jest identyczny z nowym `Array(„Anakin”)`, ale `[10]` to nie to samo, co nowy `Array(10)`.

Możliwe jest pominięcie operatora `new` podczas korzystania z konstruktora Array.  `new Array(„John”)` lub po prostu `Array(„John”)` robią to samo.

Pamiętaj: 
- używaj `literałów tablicowych` zamiast konstruktora Array;
- konstruktor `Array` zachowuje się inaczej, jeśli jedynym argumentem, jaki do niego przekazujemy jest liczba.
