# Wyrażenie funkcyjne

W JavaScript funkcja nie jest „magiczną strukturą języka”, ale specjalnym
rodzajem wartości.Używana wcześniej składnia nazywa się deklaracją funkcji:

```js
function sayHi() {
  alert( "Hello" );
}
```

Istnieje inna składnia do tworzenia funkcji, która nazywa się wyrażeniem funkcji.

```js
let sayHi = function() {
  alert( "Hello" );
};

```

Tutaj funkcja jest tworzona i przypisywana do zmiennej jawnie, jak każda inna wartość.
Bez względu na to, jak funkcja jest zdefiniowana, jest to tylko wartość przechowywana
w zmiennej `sayHi`. Znaczenie tych przykładów kodu jest takie samo:
„utwórz funkcję i umieść ją w zmiennej `sayHi`”.
W JavaScript funkcja jest wartością, więc możemy traktować ją jako wartość.
W powyższym kodzie pod zmienną podstawiliśmy tak zwaną `funkcję anonimową`,
czyli funkcję, która nie ma nazwy.
Funkcja zadeklarowana za pomocą deklaracji jest od razu dostępna dla całego skryptu.
Możemy więc odwoływać się do funkcji, która jest zadeklarowana później w kodzie.
Działa tutaj mechanizm `hoisting`, znany ze zmiennych. Funkcje utworzone przez deklarację,
poza naszymi plecami są przenoszone na początek danego scope (zasięgu).
Przy wyrażeniu funkcyjnym mechanizm ten nie działa, a takie przedwczesne odwołanie
się do funkcji jest niemożliwe.

Funkcja zdefiniowana za pomocą wyrażenia musi być zadeklarowana przed jej wywołaniem:

```js
 myFunction(); // Uncaught ReferenceError: Cannot access 'myFunction' before initialization

const myFunction = function() {
    console.log('...');
}
```
