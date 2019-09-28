> Poruszanie się po strukturze DOM

Wróćmy na chwilę do przykładowego kodu HTML:

```
<div class="ul.collection">
              <li class="collection-item">
                List Item
              </li> 
</div>

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

list.parentElement //wskazuje na nadrzędny nod będący elementem 
list.parentNode //wskazuje na nadrzędny nod 

list.firstChild //pierwszy node 
list.lastChild //ostatni node 

list.firstElementChild //pierwszy element 
list.lastElementChild //ostatni element 

list.children; //[strong, span] - kolekcja elementów
list.children[0] //wskazuje na 1 element 

list.childNodes //[text, strong, text] - kolekcja wszystkich dzieci - nodów
list.childNodes[0] 

list.nextSibling //następny węzeł
list.previousSibling //poprzedni węzeł
list.nextElementSibling //następny brat-element
list.previousElementSibling //poprzedni brat-element

list.firstElementChild.nextElementSibling //kolejny brat-element pierwszego elementu 
list.firstElementChild.nextSibling //kolejny brat-node pierwszego elementu 

list.firstElementChild.previousElementSibling //poprzedni brat-element pierwszego elementu - null, bo przed pierwszym stron nie ma elementów
list.firstElementChild.previousSibling //poprzedni brat-node pierwszego elementu 




```