# Obiekt Date

Javascript udostępnia nam gotowy obiekt Date() który umożliwia nam w łatwy
sposób manipulowanie czasem oraz datami.

Aby wyświetlić na ekranie bieżącą datę jaka jest ustawiona w systemie
klienta musimy utworzyć nowy obiekt:

```js
const currentDate = new Date();
console.log(currentDate);
```

Podstawowe metody za pomocą których możemy w łatwy sposób
formatować wygląd daty (najczęściej używane):

<!-- markdownlint-disable MD013 -->
Metoda | Opis działania
------- | -------
getDate() | - zwraca dzień miesiąca (wartość z przedziału 1 - 31)
getDay() | - zwraca dzień tygodnia (0 dla niedzieli, 1 dla poniedziałku, 2 dla wtorku itd)
getYear() | - zwraca liczbę reprezentującą rok (dla lat 1900 - 1999 jest to 2-cyfrowa liczba np. 99, a dla późniejszych jest to liczba 4-cyfrowa np. 2002)
getFullYear() | - zwraca pełną liczbę reprezentującą rok (np. 1999 lub 2000)
getHours() | - zwraca aktualną godzinę (wartość z przedziału 0 - 23)
getMilliseconds() | - zwraca milisekundy (wartość z przedziału 0 - 999)
getMinutes() | - zwraca minuty (wartość z przedziału 0 - 59)
getMonth() | - zwraca aktualny miesiąc (0 - styczeń, 1 - luty itp.)

Przykładowe wyświetlenie godziny może mieć postać:

```js
const currentDate = new Date();
console.log(currentDate.getHours());

//lub krótszy zapis

console.log((new Date()).getHours());
```
