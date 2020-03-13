# setInterval

Wbudowana funkcja `setInterval` będzie odpalać naszą funkcję co jakiś czas cyklicznie:

```js
const time = setInterval(function() {
    console.log('losowy napis');
}, 1000);  // co sekundę w konsoli pojawi się `losowy napis`
```

Żeby zatrzymać taki interwał, skorzystamy z metody clearInterval(),
która podobnie do clearTimeout() przyjmuje tylko jeden parametr,
który jest zmienną, pod która wcześniej zostało podstawione zadeklarowanie setInterval:

```js
const time = setInterval(function() {
    console.log('Wypiszę się co 1 sekundę');
}, 1000);

clearInterval(time);
```
