# Fetch API

Nowe przeglądarki udostępniają nam Fetch API - nowy interfejs do pobierania zasobów.
Fetch zwraca Promise, zatem możemy skorzystać z metod `then`, `all` i `catch`.

```js
const url = 'http://fakes.herokuapp.com/photos/';

fetch(url)
    .then(response => {
        return response.json();
    })
    .then((data) => {
        data.forEach((item) => {
            console.log(item);
        });
    });
```

## Z wykorzystaniem składni `Async / await`

```js
async function makeRequest(url) {
    const response = await fetch(url);
    return response.json();
}

async function main() {
    const url = 'http://fakes.herokuapp.com/photos/';
    const response = await makeRequest(url);
    console.log({ response });
}

main().catch(err => console.error(err));
```
