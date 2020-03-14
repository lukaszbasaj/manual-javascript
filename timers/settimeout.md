# setTimeout

Wbudowana funkcja `setTimeout` służy do opóźnienia wykonania funkcji przekazanej
w pierwszym argumencie. Innymi słowy, który wykonuje funkcję lub określony
fragment kodu po upływie zadanego czasu.

```js
function myFunc() {
    console.log('Losowy tekst');
}

setTimeout(myFunc, 1000); // wykona się po sekundzie
```

Gdy używasz setTimeout funkcja która ma być wykonana w jej domknięciu
odkładana jest na stos (`call stack`, `task queue` ), a cała reszta kodu
jest wykonywana dalej.
Gdy zadany czas minie, twoja funkcja zostanie wywołana:

```js
setTimeout(function() {
    console.log('Hipotetycznie trzecia funkcja');
}, 2000);

console.log('Hipotetycznie pierwsza funkcja');
console.log('Hipotetycznie druga funkcja');

```

Żeby przerwać wcześniej zainicjowany setTimeout (ale przed jego wykonaniem)
korzystamy z metody clearTimeout() która w parametrze przyjmuje zmienną, pod
którą zostało wcześniej podstawione wywołanie setTimeout():

```js
const time = setTimeout(function() {
    console.log('Pełne zaskoczenie');
}, 10000);

clearTimeout(time);
```
