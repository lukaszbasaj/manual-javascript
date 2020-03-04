# Automatyczna konwersja typów

JavaScript nie wymaga od Ciebie abyś deklarował typ zmiennych. Przykładowo możesz
utworzyć zmienną typu liczbowego o nazwie np. someVar, a następnie przypisać
jej wartość znakową:

```js
let someVar = 10;
someVar = "to jest napis";
```

Z jednej strony jest to fajne, bo upraszcza sprawę. Z drugiej może powodować błędy
w bardziej skompilowanych skryptach. Dlatego też w każdym większym języku (np C++)
konieczne jest określanie typów danych. Dlatego też powstały dla JavaScript
takie nakładki jak TypeScript

JavaScript lubi być automatyczny. Tak jest w przypadku operacji na typach prostych
i kilku innych momentach (np. w przypadku `hoistingu` zmiennych czy deklaracji funkcji).
Ta automatyczność przejawia się tym, że w wielu momentach JavaScript chce nam
ułatwić życie automatycznie konwertując danych tym zmiennej na inny.
Przykładowo dodając liczbę do stringa, liczba zostanie skonwertowana na string.
Podobnie dodając string do tablicy (ale nie pushując do niej) tablica zostanie
skonwertowana na string.

JavaScript nie jest w stanie dodać do siebie tablic czy obiektów (bo nie robi
się tego +, a specjalnymi metodami), ale potrafi dodawać numery czy stringi
do siebie. Dlatego podczas operacji często stara się skonwertować "niedodawalne"
typy danych na typy, które potrafi dodać - najczęściej są to stringi, ale czasami
też numbery czy inne wymagane w danej sytuacji typy danych.

Poniżej znajdziesz kilka przykładów konwersji, a dalej możesz przeczytać o zasadach,
które obowiązują przy konwersji.

```js
!!""           // false
+"01"          // 1
"2" + 2        // "22"
'true' == true // false
[] ? "a" : "b"; // "a"
[] == true ? "a" : "b"; // "b"
[] + []        // ""
{} + {}        // [object Object][object Object]
[1,2,3] + {}   // 1,2,3[object Object]
```

## Manualna konwersja na liczby

Zamiast zdawać na automatyczną konwersję typów przez JavaScript możemy
samodzielnie wymusić konwersję typu za pomocą
w budowanych funkcji `Number()`, `Boolean()`, `String()`, bądź `parseInt()`,
`parseFloat()`. Oczywiście często możesz
się spotkać z praktykami deweloperów, którzy wykorzystują znajomość zasady
automatycznych konwersji i konwertują za pomocą
operatorów takich, jak `+`, `!!` w celach krótszego zapisu:

- `+`  -> `Number()`,
- `!!` -> `Boolean()`

```js
Number("1");  // 1    <- konwertuje string na number
Number(true); // 1    <- konwertuje boolean na number
Boolean(1);   // true <- konwertuje number na boolean
String(1);    // "1"  <- konwertuje string na number

parseInt(str, system_liczbowy); //parsuje string na liczbę całkowitą
parseFloat(str); //parsuje string na liczbę
```

## Zasady przy konwersji typów

Zależnie od rodzaju wykonywanej operacji i użytych w niej typach Javascript
konwertuje do jednego z typów: `String`, `Number`, `Boolean`.
Możemy spotkać się konwersją przy użyciu takich operatorów, jak: [logiczny](operators/logical),
[arytmetyczny](operators/arithmetics), [porównawczy](operators/comparision) czy [warunkowy](condition-statements/if-else).

```js
!!""           // !!Boolean("")   ->   !!false -> false
+"01"          // +Number("01")   ->  1
"2" + 2        // "2" + String(2) -> "2" + "2" -> "22"
'true' == true // Number('true') == Number(true) -> NaN == 1 -> false
1 ? "a" : "b"; // Boolean(1) ? "a" : "b" -> true ? "a" : "b" -> "a"
```

Przy próbie konwersji typu złożonego jest wykonywana metoda *toPrmitive* na
typie `object`. *toPrmitive* w uproszczeniu wykonuje metodę `valueOf` albo `toString`.
Nie dotyczy przy konwersji użyciu operatora logicznego i warunkowego.

```js
const a = {};
+a   // a.valueOf() -> +a.toString() -> +"[object Object]" -> +Number("[object Object]") -> NaN

// konwersja przy przysłoniętej metodzie valueOf
const b = {
    valueOf: function(){
      return "3";
    }
  }
-b   // -b.valueOf() -> -"3" -> -Number("3") -> -3
```

### Konwersja przy użyciu operatora logicznego (!, !!, &&, ||)

```js
!!0         // !!Boolean(0)       ->   !!false -> false
!!1         // !!Boolean(1)       ->   !!true  -> true

!!""        // !!Boolean("")      ->   !!false -> false
!!"true"    // !!Boolean("true")  ->   !!true  -> true
!!"false"   // !!Boolean("false") ->   !!true  -> true

!!null      // !!Boolean(null)    ->   !!false -> false
!!undefined // !!Boolean(undefined) -> !!false -> false

!!{}        // !!Boolean({})      ->   !!true  -> true
!![]        // !!Boolean([])      ->   !!true  -> true

!!Symbol()  // !!Boolean(Symbol()) ->  !!true  -> true
```

### Konwersja przy użyciu operatora warunkowego (?)

Oczywiście zasady są takie same przy instrukcji warunkowej: if, switch.

```js
0 ? "a" : "b"         // Boolean(0) ? "a" : "b" -> false ? "a" : "b" -> "b"
1 ? "a" : "b"         // Boolean(1) ? "a" : "b" -> true ? "a" : "b" -> "a"

"" ? "a" : "b"        // Boolean("")     ? "a" : "b" -> false ? "a" : "b" -> "b"
"true" ? "a" : "b"    // Boolean("true") ? "a" : "b" -> true ? "a" : "b" -> "a"
"false" ? "a" : "b"   // Boolean("true") ? "a" : "b" -> true ? "a" : "b" -> "a"

null ? "a" : "b"      // Boolean(null)      ? "a" : "b" -> false ? "a" : "b" -> "b"
undefined ? "a" : "b" // Boolean(undefined) ? "a" : "b" -> false ? "a" : "b" -> "b"

({}) ? "a" : "b"      // Boolean({}) ? "a" : "b" -> true ? "a" : "b" -> "a"
[] ? "a" : "b"        // Boolean([]) ? "a" : "b" -> true ? "a" : "b" -> "a"

Symbol() ? "a" : "b"  // Boolean(Symbol()) ? "a" : "b" -> true ? "a" : "b" -> "a"
```

### Konwersja przy użyciu operatora arytmetycznego (-, + etc.)

```js
+true       // +Number(true) ->  1
+false      // +Number(false) -> 0

+""         // +Number("")   ->  0
+"0"        // +Number("0")  ->  0
+"1"        // +Number("1")  ->  1
+"01"       // +Number("01") ->  1
+"konwersja1" // +Number("konwersja1") -> NaN

+null       // +Number(null) -> 0
+undefined  // +Number(undefined) -> NaN

+{}         // +({}).valueOf() ->  +({}).toString() ->  +"[object Object]" -> +Number("[object Object]") -> NaN
+[]         // +[].valueOf()   ->  +[].toString()   ->  +""    -> +Number("") -> 0
+[1]        // +[1].valueOf()  ->  +[1].toString()  ->  +"1"   -> +Number("1") -> 1
+[1,0]      // +[1,0].valueOf() -> +[1,0].toString() -> +"1,0" -> +Number("1,0") -> NaN

+Symbol()   // throw error: cannot convert a Symbol value to a number

// operacje na więcej niż jednym typie
"2" + 2     // "2" + String(2) -> "2" + "2" -> "22"
2 + "2"     // String(2) + "2" -> "2" + "2" -> "22"
2 + 2 + "2" // 4 + "2" -> String(4) + "2" -> "4" + "2" -> "42"
2 - 2 - "2" // 0 - "2" -> 0  Number("2") -> 0 - 2 -> -2
[] + []    // "" -> bo obie tablice zostały skonwertowane na "" czyli mamy "" + ""
{} + {}     // [object Object][object Object]
[1,2,3] + {}  // 1,2,3[object Object]
```

### Konwersja przy użyciu operatora porównawczego (==)

porównanie z sobą wartości pustych zwraca `true`

```js
null == undefined      // true
undefined == undefined // true
null == null           // true
```

porównanie wszystkiego innego z wartościami pustymi zwraca `false`

```js
null == *      // false
undefined == * // false
```

wartość `NaN` nigdy z sobą nie są równe

```js
NaN == NaN    // false
NaN === NaN   // false
```

Przy luźnym porównaniu `string` do `number`. Wartość o type `string` zostanie z konwertowana
za pomocą operacji `Number()`.

```js
"" == 0     // Number("") == 0    -> 0 == 0   -> true
"0" == 0    // Number("0") == 0   -> 0 == 0   -> true
"1" == 0    // Number("1") == 1   -> 1 == 0   -> false
"abc" == 0  // Number("abc") == 0 -> NaN == 0 -> false
```

Natomiast przy porównaniu jakiegokolwiek wartości typu prostego do wartości typu
`Boolean`. Obydwa typy przed porównaniem są konwertowane do number za pomocą operacji
`Number()`

 ```js
false == 0     // Number(false) == 0 -> 0 == 0 -> true
true == 0      // Number(true) == 0  -> 1 == 0 -> false

false == ""    // Number(false) == Number("")    -> 0 == 0   -> false
'true' == true // Number('true') == Number(true) -> NaN == 1 -> false

```

Przy porównaniu typu prostego `Boolean`, `String` bądź `Number` z `object` zostanie
porównany typu prosty z wynikiem wykonania *toPrmitive*.

```js
[] == ""       // [].valueOf() == ""  -> [].toString() == ""  -> "" == ""  -> true
[] == "0"      // [].valueOf() == "0" -> [].toString() == "0" -> "" == "0" -> false
[] == 0        // [].valueOf() == 0   -> [].toString() == 0   -> "" == 0   -> Number("") == 0 -> 0 == 0 -> true

[false] == 0   // [false].valueOf() == 0 -> [false].toString() == 0 -> "false" == 0 -> Number("false") == 0 -> NaN == 0 -> false

["0"] == 0     // ["0"].valueOf() == 0   -> ["0"].toString() == 0   -> "0" == 0   -> Number("0") == 0   -> 0 == 0 -> true
["0","0"] == 0 // ["0","0"].valueOf() == 0 -> ["0","0"].toString() == 0 -> "0,0" == 0 -> Number("0,0") == 0 -> NaN == 0 -> false

const a = {};
a == "[object Object]" // a.valueOf() == "[object Object]" -> a.toString() == "[object Object]" -> "[object Object]" == "[object Object]" -> true
a == ""        // a.valueOf() == ""  -> a.toString() == ""   -> "[object Object]" == ""   -> false
a == 0        // a.valueOf() == 0    -> a.toString() == 0    -> "[object Object]" == 0    -> Number("[object Object]") == 0 -> NaN == 0 -> false
a == true     // a.valueOf() == true -> a.toString() == true -> "[object Object]" == true -> Number("[object Object]") == Number(true) -> NaN == 1 -> false

// konwersja przy przysłoniętej metodzie valueOf
const b = {
  valueOf: function(){
    return "1";
  }
}

b == 1       // b.valueOf() == 1    -> "1" == 1    -> Number("1") == 1 -> 1 == 1 -> true
b == true    // b.valueOf() == true -> "1" == true -> Number("1") == Number(true) -> 1 == 1 -> true

```

## Truthy/falsy

Możesz się spotkać takim pojęciem jak `false values` czy `true values`.
Za tymi pojęciami kryje się lista wartości, które
zwracają `true` albo `false` przy konwersji za pomocą w budowanej funkcji `Boolean()`.

**Poniższe wartości są zawsze 'fałszywe':**

- false
- 0 (zero)
- '' or "" (posty string)
- null
- undefined
- NaN

Oraz:

- document.all

**Każde z pozostałych wartości są zawsze 'prawdziwe', włączając poniższe:**

- '0' (string z wartością zero)
- 'false' (string z wyrazem “false”)
- [] (pusta tablica)
- {} (pusty obiekt)
- function(){} ('pusta' funkcja)

## Źródła

- [Mozilla Developer Network](https://developer.mozilla.org)
- [JavaScript Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)
- [Understanding JavaScript Truthy and Falsy](https://stackoverflow.com/questions/35642809/understanding-javascript-truthy-and-falsy)
- [Developer - Falsy](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all)
