# Typy wartości

Standard ECMAScript definiuje siedem typów danych:

Sześć *typów prostych* (primitives):

- **Boolean**. `true` oraz `false`.
- **Number**. `42` lub `3.14159`.
- **String**. `"Siemanko"`
- **Symbol** (nowość w ECMAScript 6). Typ danych, gdzie przykłady
    są niepowtarzalne i niezmienne.

Z czego dwie poniższe nie mogą przechowywać wartości:

- **null**. Specjalne słowo kluczowe oznaczające wartość pustą.
    Ponieważ w języku JavaScript rozróżniana jest wielkość liter,
    `null` nie jest tym samym co Null, NULL lub jakikolwiek inny wariant.
- **undefined**. Najwyższa właściwość, której wartość jest nieokreślona. 
    Typ jest zwracany, gdy zmienna nie ma przypisanej wartości bądź, 
    gdy funkcja jawnie nic nie zwraca.

Oraz *typ złożony* (composite):

- **Object** (do którego można również zaliczyć podtypy functions i array)

Do sprawdzenia typu danych korzystamy z instrukcji `typeof`:

```js
const num = 10;
const str = 'przykładowy tekst';
const arr = [];
const obj = {};
const nul = null;
//zmiennej und specjalnie nie zadeklarowałem

//wypisujemy typy zmiennych
console.log( typeof num ); //"number"
console.log( typeof str ); //"string"
console.log( typeof arr ); //"object" hmm?
console.log( typeof obj ); //"object"
console.log( typeof und ); //"undefined"
console.log( typeof nul ); //"object" hmm?
```

## undefined

`undefined` jest zmienną o zasięgu globalnym o tej samej nazwie i wartości.

```js
console.log(undefined);    // undefined
```

Przypisanie innej wartości do zmiennej `undefined` nie powoduje zmiany.

```js
undefined = 1
console.log(undefined);    // undefined
```

Można jednak przysłonić wartość zmiennej `undefined`. Każde przypisanie wtedy
`undefined` będzie zwracać nową wartość.
`undefined` nie znajduje się na [liście słów zarezerwowanych](data-types/variables.md?id=lista-słów-zarezerwowanych),
stąd możliwość przypisania w odróżnieniu do typu `null`, gdzie nie jest to możliwe.

```js
const undefined = 1
console.log(undefined);    // 1
```

### Kiedy mamy do czynienia z `undefined`

```js
// Przy dostępie do nie przysłoniętej wartości `undefined`:
console.log(undefined);    // undefined

// Gdy zadeklarowana zmienna nie ma przypisanej wartości:
let a;
console.log(a);            // undefined

// W odwołaniu się do nie istniejącej wartości w obiekcie:
const object = {};
console.log(object.a);     // undefined

// Wszędzie, gdzie została przypisana wartość `undefined`:
let b;
const c = b;
console.log(c);           // undefined

// W zwracanej przez funkcje wartość, która nie ma deklaracji `return`:
function doNothing() { /* empty */ }
doNothing()               // undefined

// W zwracanej przez funkcje wartość, w której deklaracja `return` nic jawnie nie zwraca:
function doNothing() { return; }
doNothing()               // undefined

// Gdy parametr funkcji nie przyjmuje żadnej wartości:
function showNames(name,lastname){return name + ", " + lastname;}
showNames("Jan")          // "Jan, undefined"
```

## null

Jest wykorzystywany do deklaracji końca łańcucha prototypów.

```js
const object = {
  name: "JavaScript"
};
object.hasOwnProperty("name") // true

object.__proto__ = undefined;
object.hasOwnProperty("name") // true

object.__proto__ = null;
object.hasOwnProperty("name") // throw error: object.hasOwnProperty is not a function
```

Wartość `null` w przeciwieństwie do `undefined` wystąpuje jedynie po przypisaniu.
Nazwa typu jest zastrzeżona w
[liście słów zarezerwowanych](data-types/variables.md?id=lista-słów-zarezerwowanych).
Ciekawostką jest, że `typeof null`
zwraca "object", co nazywane jest często błędem języka.

Źródło: [The history of “typeof null”](https://2ality.com/2013/10/typeof-null.html)
