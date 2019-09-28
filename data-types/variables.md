
> **Zmienne**

Zmienne w JavaScript są pojemnikami do przechowywania reużywalnych danych - jest to sposób przechowywania danych w pamięci, tak aby móc z nich wielokrotnie korzystać. 
Każda zmienna ma trzy atrybuty:
- nazwa
- miejsce w pamięci (do którego prowadzi identyfiaktor, czyli nazwa)
- wartość

Przed standardem ES2015, zmienne w JavaScript były deklarowane za pomocą słowa kluczowego `var`.

```
var x;
var y;
var z;
```
Standard ES2015 (ES6) wprowadził dwa nowe słowa kluczowe, dzięki którym możemy deklarować zmienne - są to `const` i `let`.

Dobre praktyki:
- do nazywania zmiennych używamy języka angielskiego
- nazwa zmiennej powinna wskazywać na to, czym zmienna jest / do czego służy / czym się zajmuje
- używamy notacji wielbłądziej -  przykład: `camelCase`
- nazwa zmiennej nie może być jedną z listy słów zarezerwowanych
- nazwa zmiennnej nie może zawierać spacji, kropki, myślnika, cyfra nie może być na początku (moze być dalej), może zawierać podkreślenie
- można z dużej litery zacząć i używać ich w naziwe (wielkość liter ma znaczenie), można używać podkreślenia (_) i znaku $

---
Lista słów zarezerwowanych:


| |||||||
|- | - | - | -| - | -| -|
|await|abstract|boolean|byte|break|char|class|
|case|catch|continue|const|debugger|double|default|
|delete|do|enum|export|extends|else|final|
|float|false|finally|for|function|goto|implements|
|import|int|interface|if|in|instanceof|long|
|native|new|null|package|private|protected|public|
|return|short|static|super|synchronized|switch|throws|
|transient|this|throw|true|try|typeof|volatile|
||var|void|while|with|yield||





