# Pętla `for..in`

Pętla `for...in` iteruje właściwości obiektu i wykonuje ciało pętli jeden raz
dla każdej wyliczalnej właściwości obiektu.

```js
const obj = {a: 1, b: 2, c: 3};
    
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

Używaj `for…in`, aby iterować właściwości obiektu (klucze obiektu):

```js
let oldCar = {
  make: 'Toyota',
  model: 'Tercel',
  year: '1996'
};

for (let key in oldCar) {
  console.log(`${key} --> ${oldCar[key]}`);
}

// make --> Toyota
// model --> Tercel
```
