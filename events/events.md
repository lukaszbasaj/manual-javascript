> Zdarzenia

Zdarzenia to działania, które mają miejsce w przeglądarce, które mogą być inicjowane przez użytkownika lub przez samą przeglądarkę. Poniżej znajduje się kilka przykładów typowych zdarzeń, które mogą się zdarzyć na stronie internetowej:   
- strona kończy ładowanie 
- Użytkownik klika przycisk 
- Użytkownik przesuwa kursor nad menu 
- Użytkownik przesyła formularz 
- Użytkownik naciska klawisz na klawiaturze 
  

`AddEventListener()` to wbudowana funkcja w JavaScript, która pobiera zdarzenie w celu nasłuchiwania i drugi argument, który należy wywoływać za każdym razem, gdy opisane zdarzenie zostanie uruchomione. Do jednego elementu można dodać dowolną liczbę procedur obsługi zdarzeń bez nadpisywania istniejących procedur obsługi zdarzeń.


```js
element.addEventListener(event, listener, useCapture);

```
Przyjmuje ona 3 argumenty: typ zdarzenia, funkcja callback do wywołania, oraz trzeci opcjonalny argument, który wskazuje jak mają się zachowywać dane zdarzenia.


Po dodaniu event listenera  funkcja do wykonania po zdarzeniu może być anonimowa lub nazwana. W poniższym przykładzie użyto anonimowej funkcji. W takim przypadku musisz zdefiniować kod w funkcji:

```js
a.addEventListener("click", () => {
  alert("You clicked?"); 
});

```
Ten sam efekt uzyskamy używając funkcji nazwanej:

```js
a.addEventListener("click", clickFunction);
function clickFunction() {
    alert ("So that's what happens when you click.");
}
```
Metoda `addEventListener()` pozwala dodawać wiele procedur obsługi zdarzeń do jednego elementu, nie zastępując wcześniej przypisanych procedur obsługi zdarzeń. Spójrz na poniższy przykład:

```js
a.addEventListener("click", firstFunction);
a.addEventListener("click", secondFunction);

```

Można również określić różne typy zdarzeń:
```js
a.addEventListener("mouseover", mouseOverFunction);
a.addEventListener("click", clickFunction);
a.addEventListener("mouseout", mouseOutFunction);

```


Bardzo ważnym szczegółem, o który trzeba zadbać jest fakt, iż wszelkie zdarzenia mogą być obsługiwane na zbudowanym drzewie DOM. W celu upewnienia się, że po załadowaniu HTML struktura DOM jest załadowana i można na niej wykonywać operacje, stosuje się zabezbieczenie w postaci zdarzenia, które sprawdza gotowość do rozpoczęcia pracy przez skrypty operujące na DOM.
Zabezpieczenie to korzysta ze zdarzenia `DOMContentLoaded` i ma zwykle postać:

`window.addEventListener('DOMContentLoaded', main)`




[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Events)