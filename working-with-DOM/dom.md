# DOM

`Document Object Model (DOM)` to interfejs programistyczny dla dokumentów HTML i
XML (Extensible markup language). Określa logiczną strukturę dokumentów oraz
sposób dostępu do dokumentu i manipulowania nim.

## Uwaga: Nazywa się to strukturą logiczną, ponieważ DOM nie określa żadnych relacji między obiektami

DOM to sposób reprezentowania strony w uporządkowanej , hierarchicznej formie,
dzięki czemu programiści i użytkownicy mogą łatwiej przeglądać dokument.
Dzięki DOM możemy łatwo uzyskiwać dostęp do znaczników, identyfikatorów,klas,
atrybutów lub elementów i manipulować nimi za pomocą poleceń lub metod
udostępnianych przez obiekt Document.

## Struktura DOM

DOM można traktować jako Drzewo lub Las (więcej niż jedno drzewo).
Termin model struktury jest czasem używany do opisania drzewiastej reprezentacji
dokumentu. Jedną ważną właściwością modeli struktur DOM jest izomorfizm strukturalny:
jeśli jakiekolwiek dwie implementacje DOM zostaną użyte do stworzenia reprezentacji
tego samego dokumentu, utworzą ten sam model struktury, z dokładnie tymi samymi
obiektami i relacjami. Dlaczego nazywany jako model obiektowy? Dokumenty są
modelowane przy użyciu obiektów, a model obejmuje nie tylko strukturę dokumentu,
ale także zachowanie dokumentu i obiekty, z których składa się podobne elementy
znacznika z atrybutami w HTML.

Zobaczmy właściwości obiektu dokument, do którego można uzyskać dostęp
i modyfikować obiekt dokumentu.
![dom](DOM.png)

- Window Object: Obiekt okna znajduje się zawsze na szczycie hierarchii.
- Document object: Po załadowaniu dokumentu HTML do okna staje się on obiektem dokumentu.
- Form Object: Jest reprezentowany przez znaczniki `form`.
- Link Objects: Jest reprezentowany przez tagi `link`.
- Anchor Objects: Jest reprezentowany przez tagi `href`.
- Form Control Elements: Formularz może zawierać wiele elementów sterujących,
   takich jak `textarea`, `buttons`, `radio buttons`, and `checkboxes`, etc.

Metody obiektu `document`:

- write(“string”): zapisuje podany ciąg w dokumencie.
- getElementById(): zwraca element o podanej wartości id.
- getElementsByName(): zwraca wszystkie elementy o podanej wartości nazwy.
- getElementsByTagName(): zwraca wszystkie elementy o podanej nazwie znacznika.
- getElementsByClassName(): zwraca wszystkie elementy o podanej nazwie klasy.

```html
<Table>
   <ROWS>
      <TR>
         <TD>Car</TD>
         <TD>Scooter</TD>
      </TR>
      <TR>
         <TD>MotorBike</TD>
         <TD>Bus</TD>
      </TR>
   </ROWS>
</Table>
```

![dom-table-example](DOM_table_example.png)

Przykładowe elementy DOM:

```js
let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
```
