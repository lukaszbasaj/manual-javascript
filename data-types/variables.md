# Zmienne

Zmienne w JavaScript są pojemnikami do przechowywania "reużywalnych" danych -
jest to sposób przechowywania danych w pamięci, tak aby móc z nich wielokrotnie korzystać.

Każda zmienna ma trzy atrybuty:

* nazwa
* miejsce w pamięci (do którego prowadzi identyfikator, czyli nazwa)
* wartość

Przed standardem ES2015, zmienne w JavaScript były deklarowane za pomocą słowa
kluczowego `var`.

```js
var x;
var y;
var z;
```

Standard ES2015 (ES6) wprowadził dwa nowe słowa kluczowe, dzięki którym możemy
deklarować zmienne - są to `const` i `let`.

Dobre praktyki:

* do nazywania zmiennych używamy języka angielskiego
* nazwa zmiennej powinna wskazywać na to, czym zmienna jest / do czego służy / 
    czym się zajmuje
* używamy notacji wielbłądziej -  przykład: `camelCase`
* nazwa zmiennej nie może być jedną z listy słów zarezerwowanych
* nazwa zmiennej nie może zawierać spacji, kropki, myślnika, cyfra nie może być 
    na początku (może być dalej), może zawierać podkreślenie
* można z dużej litery zacząć i używać ich w nazwie (wielkość liter ma znaczenie),
    można używać podkreślenia (_) i znaku $

## Lista słów zarezerwowanych

||||||||
|-|-|-|-|-|-|-|
|await|break|case|catch|class|const|continue|
|debugger|default|delete|do|else|enum|export|
|extends|false|finally|for|function|if|import|
|in|instanceof|new|null|return|super|switch|
|this|throw|true|try|typeof|var|void|
|||while|with|yield|||

## Źródła

* [ECMAScript® 2020 - Reserved Words](https://tc39.es/ecma262/#prod-ReservedWord/)
