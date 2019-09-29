# Korzystanie z `console.log`

## Wyświetlanie danych

```js
console.log( 123 ); // 123
```

## Wyświetlanie wartości zmiennej

```js
const name = "Doggie"
console.log( name ); // "Doggie"
```

## Wyświetlanie obiektów

```js
const person = {
    name: "Doggie",
    surname: "Do",
    age: 123
};
console.dir( person ); // "{ name: "Doggie", surname: "Do", age: 123 };"
```

## Grupowanie logów

```js
console.group('First person');
console.log('person name');
console.log('person surname');
console.groupEnd();

console.group('Second person');
console.log('name');
console.log('surname');
console.groupEnd();
```

## Wyświetlanie różnych typów logów

```js
console.log( ... );
console.info( ... );
console.warn( ... );
console.error( ... );
```
