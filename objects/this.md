> Co to jest “this” w JavaScript

Słowo kluczowe `this` odnosi się do obiektu, który wykonuje bieżący fragment kodu. Innymi słowy, każda funkcja w JavaScript podczas wykonywania ma odniesienie do bieżącego kontekstu wykonania, zwanego `this` .
Kontekst wykonania oznacza tutaj, jak wywoływana jest funkcja. Aby zrozumieć słowo kluczowe `this` , musimy tylko wiedzieć, jak, kiedy i skąd funkcja jest wywoływana, nie ma znaczenia, w jaki sposób i gdzie funkcja jest zadeklarowana lub zdefiniowana.

``` 
var name = "Han Solo";
const obj1 = { name: "Luke Skywalker", pilot: pilot };
const obj2 = { name: "Chewbacca", pilot: pilot };

function pilot() {
  console.log(this.name);
}

pilot();            // "Han Solo"
obj1.pilot();      // "Luke Skywalker"
obj2.pilot();      // "Chewbacca"
```

W powyższym fragmencie kodu funkcja `pilot()` wyświetla `this.name` , co oznacza, że próbuje wyświetlić wartość właściwości `name` bieżącego kontekstu wykonania (tj.obiekt `this` ). W powyższym fragmencie kodu, gdy wywoływana jest funkcja `pilot()` , wypisuje `"Han Solo"` , ponieważ kontekst wykonania nie jest określony, więc domyślnie jest to kontekst globalny, a w kontekście globalnym występuje nazwa zmiennej o wartości `"Han Solo"` . W przypadku wywołania `obj1.pilot() ` drukowane jest `„Luke Skywalker”` , a przyczyną tego jest funkcja `pilot()` wywoływana z kontekstem wykonania jako `obj1` , więc `this.name` zmieniło się na `obj1.name` . To samo z wywołaniem `obj2.pilot()` , gdzie kontekstem wykonania funkcji `pilot()` jest `obj2` .

**Domyślne i niejawne wiązanie `this` **

* jeśli jesteśmy w `strict mode` , wówczas domyślna wartość słowa kluczowego `this` jest niezdefiniowana, w przeciwnym razie słowo kluczowe `this` działa jako obiekt globalny, nazywa się to domyślnym wiązaniem słowa kluczowego `this` .(domyślnie jest to obiekt okna w przypadku przeglądarki).
*  gdy istnieje właściwość obiektu, którą wywołujemy jako metodę, wówczas obiekt staje się obiektem `this` lub obiektem kontekstu wykonania dla tej metody, oznacza to niejawne powiązanie słowa kluczowego `this` .

```
const obj1 = {
    name: "Luke Skywalker",
    pilot: function() {
        console.log(this.name);
    }
};

const obj2 = {
    name: "Chewbacca",
    pilot: obj1.pilot
}
var name = "Han Solo";
var pilot = obj1.pilot

pilot();            // "Han Solo"
obj1.pilot();      // "Luke Skywalker"
obj2.pilot();      // "Chewbacca"
```

W powyższym fragmencie kodu wywołanie funkcji `pilot()` jest przykładem domyślnego wiązania. `obj1.pilot()` i `obj2.pilot()` są przykładami niejawnego wiązania. Tutaj funkcja `pilot()` jest zadeklarowana jako część `obj1`, ale niezależnie od tego, kiedy wykonujemy `obj2.pilot()`, kontekstem wykonania jest `obj2`, więc obiekt `obj2.name` jest wypisany w konsoli.

 Ważne jest, aby wiedzieć, w jaki sposób, kiedy i skąd funkcja jest wywoływana, nie ma znaczenia, gdzie funkcja jest zadeklarowana.