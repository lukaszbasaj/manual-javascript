# Obiekt Math

W przeciwieństwie do innych obiektów globalnych, `Math` nie jest konstruktorem.
Wszystkie właściwości i metody matematyczne są statyczne.
Odwołujesz się do stałej pi jako `Math.PI` i wywołujesz funkcję
sinus jako `Math.sin(x)`, gdzie `x` jest argumentem metody.
Stałe są definiowane z pełną precyzją liczb rzeczywistych w JavaScript.

Przykładowe metody `Math`:

- `Math.abs(x)` - Zwraca wartość bezwzględną liczby.
- `Math.ceil(x)` - Zwraca najmniejszą liczbę całkowitą większą lub równą liczbie.
- `Math.floor(x)` - Zwraca największą liczbę całkowitą mniejszą lub równą liczbie.
- `Math.max([x[, y[, …]]])` - Zwraca największą wartość 
- `Math.min([x[, y[, …]]])` - Zwraca najmniejszą wartość 
- `Math.random()` - Zwraca pseudolosową liczbę od 0 do 1.
- `Math.round(x)` - Zwraca wartość liczby zaokrąglonej do najbliższej liczby całkowitej.
- `Math.sqrt(x)` - Zwraca dodatni pierwiastek kwadratowy z liczby.

Przykłady wykorzystania:

```js
const var1 = 56.5;
const var2 = 74.3;

Math.min(var1, var2) //56.5
Math.max(var1, var2)) //74.3
Math.max(1,3,6,2) //6

Math.cos(0) //1
Math.abs(-1) //1

Math.round(var1) //56
Math.round(20.52) //21
Math.round(-10.21) //-10
Math.round(-11.82) //-12

Math.floor(var1) //56
Math.floor(20.52) //20
Math.floor(-10.21) //-11
Math.floor(-11.82) //-12

Math.ceil(var1) //57
Math.ceil(20.52) //21
Math.ceil(-10.21) //-10
Math.ceil(-11.82) //-11
```
