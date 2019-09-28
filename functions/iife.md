>IIFE - Samo wywołująca się funkcja


W JavaScript istnieje pewien wzorzec anonimowej funkcji, która od razu sama się wywołuje - tak zwany `Immediately-invoked function expression (IIFE)`.

Aby go zrozumieć, stwórzmy proste wyrażenie funkcyjne:

```
const fn1 = function() {...}

const fn2 = function(a) {
    console.log(a);
}

```
Żeby teraz wywołać powyższą funkcję, musimy podać jej nazwę, za którą wstawimy parę nawiasów:

```
fn1();

fn2("ala");

```
Częstokroć jednak wcale nie będziemy potrzebować nazwy funkcji, bo wewnętrzny kod chcielibyśmy wykonać tylko jeden raz i to od razu.
Czyli po definicji funkcji chcielibyśmy od razu ją wywołać:

```
function() {...}(); //zwróci błąd

```
Powyższy kod zwróci błąd. Aby to naprawić, wystarczy skorzystać z zasad matematyki, gdzie nawiasami okrywamy część równania, która powinna się wykonać w pierwszej kolejności:

```
2 + 2.toFixed() //zwróci błąd
(2 + 2).toFixed() //na początku wykonaj równanie, potem toFixed()

```
Podobnie do powyższego równania wystarczy zapis funkcji objąć nawiasami:

```
(function() {...})();

(function(a) {
    console.log(a)
})("ala");

```
I tak właśnie powstał nasz wzorzec samo wywołującej się anonimowej funkcji:

```
(function() {
    console.log('Jakiś tekst'); //wywoła się od razu
})();

//jest praktycznie równoznaczne z

function fn1() {
    console.log('Jakiś tekst');
}
fn1();

```
Alternatywnym zapisem dla powyższego jest wzór zalecany przez Douglasa Crockforda - jednego z guru JavaScript.

```
(function() {...}()); //nawiasy w środku

```
No dobrze, a czemu to wszystkiemu ma służyć?
Jak wiemy, zakres let i const w przeciwieństwie do var mają zasięg blokowy:

```
{
    let a = 20;
    var b = 10;
}
console.log(a); //błąd - nie mamy dostępu
console.log(b); //10

```
Jeżeli chcemy ograniczyć zasięg var, musimy skorzystać z funkcji:

```
(function() {
    let a = 20;
    var b = 10;
})();

console.log(a); //błąd - nie mamy dostępu
console.log(b); //błąd - nie ma dostępu

```
W przeszłości - gdy używało się głównie var, stosowanie IIFE było dość powszechną metodą ograniczania zasięgu.

---

Przełącz się na `branch 05-functions`

---

- Ćwiczenie 1

Napisz funkcję `min(a, b)`, która zwróci liczbę mającą mniejszą wartość.

Wywołanie funkcji powinno mieć postać np. `min(2, 5) == 2`.


---

- Ćwiczenie 2

Napisz funkcję `pow(x, n)`, która zwraca `x` podniesione do potęgi `n`. 

---

- Ćwiczenie 3

Napisz funkcję przyjmującą jednen parametr typu `string`. 
Funkcja ma zwracać ilość liter, z ktorych składa się `string`.

---

- Ćwiczenie 4

Napisz funkcję, która zsumuje przekazaną do niej tablicę i zwróci wynik.

---

- Ćwiczenie 5

Napisz funkcję, która odwraca kolejność elemetów w tablicy, która jest przekazywana do funkcji

---

- Ćwiczenie 6

Napisz funkcję łączącą dwie tablice

---

- Ćwiczenie 7

Napisz funkcję sprawdzającą jakiego typu jest parametr do niej przekazany

---

- Ćwiczenie 8

Stwórz dwie zmienne, które zawierają zmienne losowe:
 - sprawdź która jest większa
 - zaokrąlij każdą z nich w górę i w dół

--- 

Ćwiczenie 9

Stwórz funkcję wypisującą aktualną datę i godzinę.
