# Temporal Dead Zone 💀

Wcześniej wspomniano, iż deklaracje zmiennych i funkcji podlegają zjawisku `hoistingu`.
Przypomnijmy na przykładzie.

```js
 {
	console.log( typeof a ); // undefined

	var a = 1;
}
```

Jak widać, można pobrać typ zmiennej przed jej deklaracją. Umożliwia to właśnie mechanizm hoistingu, który wszystkie deklaracje zmiennych “wynosi” na sam początek danego scope, zostawiając na miejscu jedynie przypisanie wartości do zmiennej. Powyższy przykład jest zatem widziany przez parser JS mniej więcej tak:

```js
{
	var a;
	console.log( typeof a ); // undefined

	a = 1;
}
```

W przypadku deklaracji zmiennych za pomocą słowa kluczowego `let` sytuacja staje się ciekawsza:

```js
{
	console.log( typeof a ); // Uncaught ReferenceError: a is not defined

    let a = 1;
}
```

Zatem można wnioskować, iż zmienne deklarowane przez `let` nie są hoistowane. Spójrzmy jednak na inny przykład:


```js
( function() {
	var a = 1;

	( function() {
		console.log( typeof a ); // undefined
		var a = 'hublabubla';
	}() );
}() );
```
W tym przykładzie po raz kolejny pojawia się `undefined` zamiast `number`. Dlaczego? Bo zmienne są hoistowane na górę najbliższego scope. W tym wypadku wewnętrzna funkcja stanowi osobny scope, stąd przesłania liczbową zmienną z zewnętrznego scope.

Jeśli założymy, że zmienne deklarowane przy pomocy `let` faktycznie nie są hoistowane, to w przykładzie z `let` powinniśmy uzyskać `number` (bo deklaracja `let` jest dopiero po `console.log`, zatem do tego czasu powinna być dostępna zmienna z wyższego scope). Sprawdźmy:

```js
( function() {
	let a = 1;

	( function() {
		console.log( typeof a ); // Uncaught ReferenceError: a is not defined
		let a = 'hublabubla';
	}() );
}() );
```
W tym przypadku mamy właśnie do czynienia z `Temporal Dead Zone`. Mechanizm ten polega na:
 - hoistowaniu zmiennych zadeklarowanych za pomocą `let` i `const`
 - uniemożliwieniu dostępu do zmiennej w całym scope, przed jej zadeklarowaniem.

Mechanizm ten wprowadzono dla `const`, aby uniemożliwić nadpisanie stałej wewnątrz danego scope i przeniesiono następnie to zachowanie także dla `let` – dla zachowania spójności.

Źródło:

[Comandeer's blog] (https://blog.comandeer.pl/tdz.html)

[Dr. Axel Rauschmayer] (https://exploringjs.com/es6/ch_variables.html#sec_temporal-dead-zone)