> Opercje na tablicach

**Sprawdzanie długości tablicy**

```
const heros = ['Yoda', 'Obi-Wan Kenobi'];

console.log(heros.length);
// 2

```

**Dostęp do elementów tablicy**
```
const first = heros[0];
// Yoda

const last = heros[heros.length - 1];
// Obi-Wan Kenobi

```

**Dodawanie elementu na początku**

```
var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];

```
**Usuwanie elementu z początku tablicy**

```
var first = fruits.shift(); // remove Apple from the front
// ["Banana"];

```
**Dodawanie elementu na końcu tablicy**

```
var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]


```

**Usuwanie elementu z końca tablicy**

```
var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];

```
**Szukanie indeksu elementu**

```
var pos = fruits.indexOf('Banana');
// 1

```
**Sortowanie tablicy**

```
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

```
**Odwracanie kolejności elementów**

```
var array1 = ['one', 'two', 'three'];
console.log('array1: ', array1);
// expected output: Array ['one', 'two', 'three']

var reversed = array1.reverse(); 
console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

```
**Łączenie tablic**

```
const anim1 = ["Pies", "Kot"];
const anim2 = ["Słoń", "Wieloryb"];
const anim3 = ["Chomik ninja", "Świnka morderca"];

const table = anim1.concat(anim2);
console.log(table); //wypisze ["Pies", "Kot", "Słoń", "Wieloryb"]

```

**Kopiowanie tablicy**

```
var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]

```

**Łączenie elementów tablicy**

```
var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

```
**Iterowanie po tablicy**

```
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"

```

**Mapowanie tablicy**

```
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

```



[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
