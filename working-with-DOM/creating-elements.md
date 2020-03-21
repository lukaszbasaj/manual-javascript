# Tworzenie nowych elementów

W statycznej witrynie elementy są dodawane do strony przez bezpośrednie pisanie
HTML w pliku `.html`. W dynamicznej aplikacji internetowej elementy i tekst są
często dodawane za pomocą JavaScript.
Metody `createElement()` i `createTextNode()`
służą do tworzenia nowych węzłów w DOM.

<!-- markdownlint-disable MD013 -->
| Metoda/Właściwość  | Opis                                  |
|------------------|------------------------------------------------|
| createElement()  | Utwórz nowy węzeł elementu|
| createTextNode() | Utwórz nowy węzeł tekstowy|
| node.textContent | Uzyskaj lub ustaw zawartość tekstową węzła elementu |
| node.innerHTML   | Pobierz lub ustaw zawartość HTML elementu    |
| node.innerText    | Pobierz lub ustaw zawartość HTML elementu                 |
| node.tagName      | Zwróć nazwę tagu|
| node.setAttribute | ustaw atrybut elementu|
| node.getAttribute | Pobierz atrybut elementu|
| node.hasAttribute | Sprawdź czy element ma dany atrybut|
| removeAttribute   | Usuń atrybut elementu|
| node.dataset      | Zwróć (obiekt) dataset, który przetrzymuje customowe atrybuty (data-...).|

## Wstawianie węzłów do DOM

Aby zobaczyć nowe węzły tekstowe i elementy, które tworzymy w interfejsie,
będziemy musieli wstawić je do dokumentu. Metody `appendChild()` i `insertBefore()`
są używane do dodawania elementów na początek, środek lub koniec
elementu nadrzędnego, a `replaceChild()` służy do zastąpienia
starego węzła nowym węzłem.

| Property/Method     | Description|
|---------------------|-----------------------------------------------------------------------|
| node.appendChild()  | Dodaj węzeł jako ostatnie dziecko elementu nadrzędnego|
| node.insertBefore() | Wstaw węzeł do elementu nadrzędnego przed określonym węzłem rodzeństwa|
| node.replaceChild() | Zastąp istniejący węzeł nowym węzłem|

## Usuwanie węzłów z DOM

Teraz wiemy, jak tworzyć elementy, dodawać je do DOM i modyfikować istniejące elementy.
Ostatnim krokiem jest nauczenie się usuwania istniejących węzłów z DOM. Węzły
potomne można usunąć z elementu nadrzędnego za pomocą `removeChild()`, a sam
węzeł można usunąć za pomocą `remove()`.

| Metoda        | Opis      |
|--------------------|-------------------|
| node.removeChild() | Usuń węzeł potomny |
| node.remove()      | Usuń węzeł       |

Korzystając `removeChild()` i `remove()` możesz usunąć dowolny węzeł z DOM.
Inną metodą usuwania elementów potomnych z DOM jest ustawienie właściwości
`innerHTML` elementu nadrzędnego na pusty ciąg znaków („”).
To nie jest preferowana metoda, ponieważ jest mniej wyraźna,
ale możesz ją zobaczyć w istniejącym kodzie.

## Modyfikowanie atrybutów

Atrybuty to wartości zawierające dodatkowe informacje o elementach HTML.
Zazwyczaj występują w parach nazwa / wartość i mogą być niezbędne w zależności
od elementu. Niektóre z najczęstszych atrybutów HTML to m.in. atrybut `src`
znacznika `img`, `href` znacznika `a`, `class`, `id` i `style`. Elementy
niestandardowe, które nie są częścią standardu HTML, zostaną poprzedzone
atrybutem `data-`.

W JavaScript mamy cztery metody modyfikowania atrybutów elementu:

|Metoda|Opis|Przykład użycia|
|-------------------|----------------------------------------------------|---------------------------------------------|
|hasAttribute()|Zwraca wartość logiczną `true` lub `false`|element.hasAttribute('href');|
|getAttribute()|Zwraca wartość określonego atrybutu lub `null` |element.getAttribute('href');|
|setAttribute()|Dodaje lub aktualizuje wartość określonego atrybutu|element.setAttribute('href', 'index.html');|
|removeAttribute()|Usuwa atrybut z elementu|element.removeAttribute('href');|

Metody `hasAttribute()` i `getAttribute()` są zwykle używane z instrukcjami
warunkowymi, a metody `setAttribute()` i `removeAttribute()` służą do
bezpośredniej modyfikacji DOM.

## Modyfikowanie klas

Atrybut klasy odpowiada selektorom klas CSS. Nie należy tego mylić z klasami ES6,
specjalnym rodzajem funkcji JavaScript. Klasy CSS służą do stosowania stylów do
wielu elementów, w przeciwieństwie do identyfikatorów, które mogą istnieć tylko
raz na stronie. W JavaScript mamy właściwości `className` i `classList` do
pracy z atrybutem `class`.

|Metoda/Właściwość|Opis| Przykład użycia|
|----------------------|--------------------------------------------------------|------------------------------------------|
|className|Pobiera lub ustawia wartość klasy|element.className;|
|classList.add()|Dodaje jedną lub więcej wartości klas|element.classList.add('active');|
|classList.toggle()|Włącza lub wyłącza klasę| element.classList.toggle('active');|
|classList.contains()|Sprawdza, czy istnieje wartość klasy|element.classList.contains('active');|
|classList.replace()|Zastąp istniejącą wartość klasy nową wartością klasy|element.classList.replace('old', 'new');|
|classList.remove()|Usuń wartość klasy|element.classList.remove('active');|

## Modyfikowanie stylów

Właściwość `style` reprezentuje style wbudowane w elemencie HTML. Często style
będą stosowane do elementów za pomocą arkusza stylów, ale czasami musimy
bezpośrednio dodać lub edytować styl wbudowany.

Właściwości CSS są zapisywane w kebab-case, czyli małych literach oddzielonych
myślnikami. Należy zauważyć, że właściwości CSS kebab-case nie mogą być używane
we właściwości stylu JavaScript. Zamiast tego zostaną zastąpione odpowiednikiem
camelCase, czyli wtedy, gdy pierwsze słowo jest pisane małymi literami,
a wszystkie kolejne słowa są pisane wielkimi literami. Innymi słowy, zamiast
`text-align` użyjemy `textAlign` dla właściwości stylu JavaScript.

```js
div.style.borderRadius = '50%';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
```

---
