> Fetch API

Nowe przeglądarki udostępniają nam Fetch API - nowy interfejs do dynamicznego pobierania zasobów.

Fetch zwraca Promise, zatem możemy skorzystać z metod then, all i catch.



```
    return fetch(url, params)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then(data => {
            return data.results;
        })
        .then((data) => {
            .forEach(function (e) {
        console.log(e);
        });
}
```

---

