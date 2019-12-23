>IIFE - Samo wywołująca się funkcja


W JavaScript istnieje pewien wzorzec anonimowej funkcji, która od razu sama się wywołuje - tak zwany `Immediately-invoked function expression (IIFE)`.
Aby go zrozumieć, stwórzmy proste wyrażenie funkcyjne:

```js
const fn1 = function() {...}

const fn2 = function(a) {
    console.log(a);
}

```
Żeby teraz wywołać powyższą funkcję, musimy podać jej nazwę, za którą wstawimy parę nawiasów:

```js
fn1();

fn2("ala");

```
Częstokroć jednak wcale nie będziemy potrzebować nazwy funkcji, bo wewnętrzny kod chcielibyśmy wykonać tylko jeden raz i to od razu.
Czyli po definicji funkcji chcielibyśmy od razu ją wywołać:

```js
function() {...}(); //zwróci błąd

```
Powyższy kod zwróci błąd. Aby to naprawić, wystarczy skorzystać z zasad matematyki, gdzie nawiasami okrywamy część równania, która powinna się wykonać w pierwszej kolejności:

```js
2 + 2.toFixed() //zwróci błąd
(2 + 2).toFixed() //na początku wykonaj równanie, potem toFixed()

```
Podobnie do powyższego równania wystarczy zapis funkcji objąć nawiasami:

```js
(function() {...})();

(function(a) {
    console.log(a)
})("ala");

```
I tak właśnie powstał nasz wzorzec samo wywołującej się anonimowej funkcji:

```js
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

```js
(function() {...}()); //nawiasy w środku

```
No dobrze, a czemu to wszystkiemu ma służyć?
Jak wiemy, zakres let i const w przeciwieństwie do var mają zasięg blokowy:

```js
{
    let a = 20;
    var b = 10;
}
console.log(a); //błąd - nie mamy dostępu
console.log(b); //10

```
Jeżeli chcemy ograniczyć zasięg var, musimy skorzystać z funkcji:

```js
(function() {
    let a = 20;
    var b = 10;
})();

console.log(a); //błąd - nie mamy dostępu
console.log(b); //błąd - nie ma dostępu

```
W przeszłości - gdy używało się głównie var, stosowanie IIFE było dość powszechną metodą ograniczania zasięgu.
