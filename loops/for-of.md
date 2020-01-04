> Pętla `for...of`

Instrukcja `for...of` tworzy pętlę, która iteruje obiekty iterowalne. For ... of loop został wprowadzony w `ES6` jako alternatywa zarówno dla `for...in`, jak i forEach() i obsługuje nowy protokół iteracji. `For...of` pozwala na zapętlenie struktur danych, które są iterowalne, takich jak tablice, ciągi znaków, mapy, zestawy i inne.

```js
for (variable of iterable) {
  statement
}
```
- variable - dla każdej iteracji wartość właściwości jest przypisywana do zmiennej. 
- iterable - Obiekt, który ma wyliczalne właściwości i może być iterowany.

**Tablice**

Tablice są po prostu obiektami podobnymi do list. `Array.prototype` ma różne metody, które pozwalają na wykonywanie na nim operacji, takich jak mutacja i przechodzenie. Oto przykład zastosowania `for...of`  na tablicy:

```js
const iterable = ['mini', 'mani', 'mo'];

for (const value of iterable) {
  console.log(value);
}

// Output:
// mini
// mani
// mo
```

**Ciągi znakowe**

Ciągi służą do przechowywania danych w formie tekstowej. Przykład zastosowania `for...of` na ciągu znaków:

```js
const iterable = 'javascript';

for (const value of iterable) {
  console.log(value);
}

// Output:
// "j"
// "a"
// "v"
// "a"
// "s"
// "c"
// "r"
// "i"
// "p"
// "t"

```
Tutaj iteracja wykonywana jest na łańcuchu, a znak na każdym indeksie jest drukowany.


**Obiekty**

Zwykłe obiekty nie są iterowalne.
`for...of` loop działa tylko z obiektami iterowalnymi. Zwykłe obiekty nie są iterowalne. Spójrzmy:

```js
const obj = { fname: 'foo', lname: 'bar' };

for (const value of obj) { // TypeError: obj[Symbol.iterator] is not a function
    console.log(value);
}
```

Definiujemy tutaj zwykły obiekt `obj`, a kiedy próbujemy wykonać na nim `for..of`, pojawia się błąd `TypeError: obj[Symbol.iterator] is not a function.`
