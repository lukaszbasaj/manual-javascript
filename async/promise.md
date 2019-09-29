# Promise

Funkcjonalność Promise’ów została dodana w ES6, zastępując istniejące dotychczas
funkcje callback(oczywiście same callbacki zostały ale w nowych rozwiązaniach
nie są już spotykane). Obiekty typu Promise “obiecują” wykonanie pewnej czynności
i następnie zwrócenie rezultatu lub wyrzucenie błędu.

Każdy promise może być w stanie:

- fulfilled — pomyślnie obsłużony
- rejected — odrzucony
- pending —  w trakcie – ani fulfilled, ani rejected
- settled — obsłużony, fulfilled lub rejected

Zwracany promise jest obiektem, który udostępnia nam metodę

```js
then(fn: onResolve, fn: onReject)
```

pozwalającą obsłużyć promise w momencie, gdy przechodzi on do stanu settled.

Tak, każdy promise jest obiektem, gdzie callback, to przecież funkcja.
Funkcja callback pozwala nam na obsłużenie zdarzenia, a promise to obiekt,
który przechowuje pewien stan.

Spójrzmy na przykład prostej obietnicy:

```js
new Promise((resolve, reject) => {
  // when success, resolve
  let value = 'success';
  resolve(value);

  // when an error occurred, reject
  reject(new Error('Something happened!'));
});
```

Każdy promise pozwala zdefiniować funkcję (resolve), która wywołana zostanie
w momencie, gdy osiągnięty zostanie stan fullfiled. W przeciwnym wypadku wykonana
zostaje funkcja (reject), która obsługuje stan rejected.

Obietnice to obiekty, więc nie są one przekazywane jako parametry, jak funkcje
callback – są zwracane.

Obietnice biorą odpowiedzialność wyłącznie za jedno zdarzenie, gdzie funkcje
callback obsługiwać mogą ich wiele, wielokrotnie.

Poprzedni przykład możemy nieco rozbudować i przypisać zwrócony obiekt promise
do wyrażenia let:

```js
let promise = new Promise((resolve, reject) => {
  // when success, resolve
  let value = 'success';
  resolve(value);

  // when an error occurred, reject
  reject(new Error('Something happened!'));
});
```

Zwrócony obiekt udostępnia metodę then(), która pozwala obsłużyć wartość,
w momencie, gdy promise przechodzi do stanu settled:

```js
promise.then(onResolve, onReject)
```

Możemy użyć tej metody do obsłużenia zwracanych wartości w ramach funkcji
onResolve, onReject lub obu.

```js
let promise = new Promise((resolve, reject) => {
  // when success, resolve
  let value = 'success';
  resolve(value);

  // when an error occurred, reject
  reject(new Error('Something happened!'));
});

promise.then(response => {
  console.log(response);
}, error => {
  console.log(error);
});

// success
```

W naszym przykładzie funkcja onReject nigdy się nie wykona i błąd nie zostanie
rzucony. Możemy więc usunąć jej obsługę:

```js
let promise = new Promise(resolve => {
  let value = 'success';
  resolve(value);
});

promise.then(response => {
  console.log(response); // success
});
```

W przypadku wywołania metody then(), obsługiwana jest nie tylko wartość danej
obietnicy, zwracany jest również nowy obiekt Promise:

```js
let promise = new Promise(resolve => {
  let value = 'success';
  resolve(value);
});

promise
    .then(response => {
        console.log(response); // success
        return 'another success';
    })
    .then(response => {
        console.log(response); // another success
    });
```

Tworząc kod w ten sposób pozostaje on zawsze „płaski”. Nie budujemy tutaj
piramid, więc termin callback hell może odejść w niepamięć.

W momencie, gdy interesuje nas tylko obsłużenie wyjątku (stan rejected),
wystarczy, że podamy funkcję onReject do metody then():

```js
let promise = new Promise((resolve, reject) => {
  let reason = 'failure';
  reject(reason);
});

promise.then(
  null,
  error => {
    console.log(error); // failure
  }
);
```

Istnieje jednak lepszy sposób. Poza metodą then(), otrzymujemy także metodę
catch(), która pozwala na obsługę sytuacji wyjątkowych:

```js
let promise = new Promise((resolve, reject) => {
  let reason = 'failure';
  reject(reason);
});

promise.catch(err => {
  console.log(err); // failure
});
```

W momencie, gdy mamy kilka wystąpień metody then() po sobie, wyjątek przekazywany
jest tak długo, aż nie zostanie on obsłużony:

```js
let promise = new Promise(resolve => {
  resolve();
});

promise
  .then(response => {
    return 1;
  })
  .then(response => {
    throw new Error('failure');
  })
  .catch(error => {
    console.log(error.message); // failure
  });
```
