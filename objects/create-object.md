> **Tworzenie obiektów**

Możesz utworzyć obiekt JavaScript na cztery różne sposoby :

- używając literału obiektu

- używając metody konstruktora 

- przy pomocy klas (ES6)

- przy pomocy metody Object.create()


---

>> **Literał obiektu**

Zdefiniowanie `literału obiektu` jest najprostszym sposobem na utworzenie obiektu JavaScript. Ponieważ obiekty są zmiennymi, możesz tworzyć je w taki sam sposób jak zmienną. Na przykład poniższy kod tworzy obiekt o nazwie `user` 
z trzema właściwościami: `firstName`, `lastName` i `dateOfBirth`:
```
 const user = {
     firstName: "John",
     lastName: "Smith",
     dateOfBirth: 1985
  };

```
Jeśli otworzysz konsolę w przeglądarce internetowej, możesz skorzystać z `console.log()`, aby sprawdzić, czy obiekt został naprawdę utworzony:

```
console.log(user);
// {firstName: "John", lastName: "Smith", dateOfBirth: 1985}
```


Możesz także dodać metodę do literału obiektu. Na przykład poniższa metoda `getName()` pobiera dwie właściwości obiektu `user` (`firstName` i `lastName`) i zwraca pełną nazwę użytkownika. Słowo kluczowe `this` odnosi się do bieżącego obiektu, którego właściwości wywołuje metoda.


```
const user = {
   firstName: "John",
   lastName: "Smith",
   dateOfBirth: 1985,
   getName: function(){
      return "User's name: " + this.firstName + " " + this.lastName;
   }
};
```

Możesz sprawdzić metodę `getName()` w konsoli, używając tej samej notacji kropkowej. Nie zapomnij jednak wstawić nawiasów po nazwie metody, ponieważ w ten sposób JavaScript odróżnia metody od właściwości. Jeśli pominiesz nawiasy, konsola nie wykona metody, ponieważ będzie szukała właściwości o nazwie getName zamiast metody o nazwie `getName()`.



`console.log(user.getName());`
`// User's name: John Smith`


Możliwe jest również użycie obiektów jako właściwości obiektów. Ta możliwość jest bardzo przydatna, gdy chcesz uporządkować dane przechowywane w obiekcie. Poniżej obiekt `user` zawiera właściwość `spokenLanguages`, która jest również obiektem. Możesz zobaczyć, że jest zdefiniowany dokładnie tak samo, jak każdy inny literał obiektu.

```
const user = {
   firstName: "John",
   lastName: "Smith",
   dateOfBirth: 1985,
   spokenLanguages: {
      native: "English",
      fluent: "Spanish",
      intermediate: "Chinese"
    }
};
```


Teraz, gdy wywołasz wartość właściwości `spokenLanguages`, konsola zwraca cały obiekt:

```
console.log(user.spokenLanguages);
// {native: "English", fluent: "Spanish", intermediate: "Chinese"}

```

Możemy też dynamicznie dodawać nowe i modyfikować istniejące właściwości.

```
user.city = "London";
console.log(user);
//{firstName: "John", lastName: "Smith", dateOfBirth: 1985, getName: ƒ, city: "London"}
```

```
user.firstName = "David";
console.log(user);
//{firstName: "David", lastName: "Smith", dateOfBirth: 1985, getName: ƒ, city: "London"}
```