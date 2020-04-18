# Spread Operator

Spread operator rozbija strukturę na pojedyncze elementy.

## Przykład

```js
const common = {
    entry: 'main.js',
}

const dev = {
  ...common,
  mode: 'development',
}

console.log(dev);
/*
{
    entry: 'main.js',
    mode: 'development',
}
*/
```
