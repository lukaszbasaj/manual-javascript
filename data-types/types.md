> Typy wartości

Najnowszy standard ECMAScript definiuje siedem typów danych:

Sześć *typów prostych* (primitives):
- **Boolean**. `true` oraz `false`.

- **Number**. `42` lub `3.14159`.

- **String**. `"Siemanko"`

- **Symbol** (nowość w ECMAScript 6). Typ danych, gdzie przykłady są niepowtarzalne i niezmienne.

Z czego dwie poniższe nie mogą przechowywać wartości:
- **null**. Specjalne słowo kluczowe oznaczające wartość zerową. Ponieważ w języku JavaScript rozróżniana jest wielkość liter, `null` nie jest tym samym co Null, NULL lub jakikolwiek inny wariant.

- **undefined**. Najwyższa właściwość, której wartość jest nieokreślona.


Oraz *typ złożony* (composite):
- **Object** (do którego można również zaliczyć podtypy functions i array)


Do sprawdzenia typu danych korzystamy z instrukcji `typeof`:


```
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

**Automatyczna konwersja typów**

JavaScript nie wymaga od Ciebie abyś deklarował typ zmiennych. Przykładowo możesz utworzyć zmienną typu liczbowego o nazwie np. someVar, a następnie przypisać jej wartość znakową:


```
let someVar = 10;
someVar = "to jest napis";
```

Z jednej strony jest to fajne, bo upraszcza sprawę. Z drugiej może powodować błędy w bardziej skompilowanych skryptach. Dlatego też w każdym większym języku (np C++) konieczne jest określanie typów danych. Dlatego też powstały dla JavaScript takie nakładki jak TypeScript

JavaScript lubi być automatyczny. Tak jest w przypadku operacji na typach prostych i kilku innych momentach (np. w przypadku hoistingu zmiennych czy deklaracji funkcji).
Ta automatyczność przejawia się tym, że w wielu momentach JavaScript chce nam ułatwić życie automatycznie konwertując danych tym zmiennej na inny. Przykładowo dodając liczbę do stringa, liczba zostanie skonwertowana na string. Podobnie dodając string do tablicy (ale nie pushując do niej) tablica zostanie skonwertowana na string.

JavaScript nie jest w stanie dodać do siebie tablic czy obiektów (bo nie robi się tego +, a specjalnymi metodami), ale potrafi dodawać numery czy stringi do siebie. Dlatego podczas operacji często stara się skonwertować "niedodawalne" typy danych na typy, które potrafi dodać - najczęściej są to stringi, ale czasami też numbery czy inne wymagane w danej sytuacji typy danych.

Poniżej zamieszczam przykłady konwersji, które w rezultacie dają string. Żeby je sprawdzić realnie, możesz wpisać je w konsoli debugera.

```
"kot" + "kot" //"kotkot"
20 + 1  //21
"20" + 1  //"201"
"kot" + 20  //"kot20"
[1,2,3] + "kot" //1,2,3kot, bo tablica została skonwertowana na 1,2,3
[] + "kot"  //"kot", bo tablica została skonwertowana na ""
[]  + []  //"", bo obie tablice zostały skonwertowane na "" czyli mamy "" + ""
[] + false  //"false"
23 + "" + false  //"23false"
"" + {}  //"[object Object]" bo obiekt został skonwertowany na zapis [object Object]
[1,2,3] + {}  //1,2,3[object Object]
{} + {}  //[object Object][object Object]
"23" + [1,2,3] + {} + true + false + !true  //"231,2,3[object Object]truefalsefalse"
```

**Manualna konwersja na liczby**

W przypadku dodawania typów złożonych (tablice, obiekty) raczej nie będziemy chcieli wykonywać operacji takich jak powyżej.
W przypadku dokonywania do siebie kilku liczb chcielibyśmy mieć pewność, że dane zmienne są liczbami, a nie stringiem.
Żeby dokonać takiej konwersji, skorzystamy z jednej z dostępnych do tego metod:

```
Number(str); //konwertuje tekst na liczbę

parseInt(str, system_liczbowy); //parsuje tekst na liczbę całkowitą
parseFloat(str); //parsuje tekst na liczbę
```

*źródło*: [Mozilla Developer Network](https://developer.mozilla.org)

---
