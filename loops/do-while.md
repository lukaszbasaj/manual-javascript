> Pętla `do...while`

Instrukcja `do...while` tworzy pętlę, która wykonuje określoną instrukcję, dopóki warunek testu nie zostanie oceniony na `false`. Warunek jest oceniany po wykonaniu instrukcji, co powoduje wykonanie określonej instrukcji co najmniej raz.

```
var result = "";
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"
```