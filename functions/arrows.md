# Funkcje strzałkowe

Funkcja strzałkowa ma 2 kluczowe zadania: skrócenie zapisu, 
oraz nie zmieniane kontekstu `this`.

Jest jeszcze jedna bardzo prosta i zwięzła składnia do tworzenia funkcji, często
lepsza niż Wyrażenia funkcji. Nazywa się to „funkcjami strzałek”, 
ponieważ wygląda to tak:

```js
let func = (arg1, arg2, ...argN) => expression
```

wyrażenie to tworzy funkcję `func`, która ma argumenty `arg1..argN`, prowadzi
do ich użycia po prawej stronie i zwraca wynik.

Innymi słowy, sens jest mniej więcej taki sam, jak:

```js
let func = function(arg1, arg2, ...argN) {
  return expression;
};
```

jednak zapisany w bardziej zwięzły sposób.

Rozważmy przykład:

```js
let sum = (a, b) => a + b;

/* funkcja strzałkowa jest krótszym zapisem poniższego wyrażenia:

let sum = function(a, b) {
  return a + b;
};
*/
alert( sum(1, 2) ); // 3

```

Jeśli mamy tylko jeden argument, można pominąć nawiasy wokół parametrów,
 co czyni go jeszcze krótszym:

```js
// to samo, co:
// let double = function(n) { return n * 2 }
let double = n => n * 2;

alert( double(3) ); // 6
```

Jeśli nie ma argumentów, nawiasy powinny być puste (ale powinny być obecne):

```js
let sayHi = () => alert("Hello!");

sayHi();
```

W powyższych przykładach pobrano argumenty z lewej strony => i przekazano je
do wyrażenia po prawej stronie. Czasami potrzebujemy czegoś nieco bardziej złożonego,
na przykład wielu wyrażeń lub instrukcji. Jest to również możliwe, ale powinniśmy
je zamknąć w nawiasach klamrowych. Następnie używamy `return` w ich obrębie.

```js
let sum = (a, b) => {  // nawias klamrowy otwiera wielolinijkowe wyrażenie
  let result = a + b;
  return result; // jeśli użwasz nawiasu klamrowego, użyj return
};

alert( sum(1, 2) ); // 3
```
