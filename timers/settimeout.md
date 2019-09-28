> setTimeout

Wbudowana funckja `setTimeout` służy do opóźnienia wykonania funkcji przekazanej w pierwszym argumencie. Innymi słowy, który wykonuje funkcję lub określony fragment kodu po upływie zadanego czasu.

```
function myFunc() {
    console.log('Losowy tekst');
}

setTimeout(myFunc, 1000); // wykona się po sekundzie
```

Gdy używasz setTimeout funkcja która ma być wykonana w jej domknięciu (tu należy się chwila wyjaśnienia co to jest `closure` 😀) odkładana jest na stos (`call stack`, `task queue` ), a cała reszta kodu jest wykonywana dalej. Gdy zadany czas minie, twoja funkcja zostanie wywołana:

```
setTimeout(function() {
    console.log('Hipotetycznie trzecia funkcja');
}, 2000);

console.log('Hipotetycznie pierwsza funkcja');
console.log('Hipotetycznie druga funkcja');

```

Żeby przerwać wcześniej zainicjowany setTimeout (ale przed jego wykonaniem) korzystamy z metody clearTimeout() która w parametrze przyjmuje zmienną, pod którą zostało wcześniej podstawione wywołanie setTimeout():


```
const time = setTimeout(function() {
    console.log('Pełne zaskoczenie');
}, 10000);

clearTimeout(time);
```


