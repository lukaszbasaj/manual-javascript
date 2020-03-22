# Wyszukiwanie elementów DOM

Drzewo DOM składa się z obiektów zwanych węzłami. Istnieje wiele różnych typów
węzłów, ale najczęściej będziesz pracować z węzłami elementów (elementy HTML),
węzłami tekstowymi (dowolna treść tekstowa) i węzłami komentarzy (kod komentowany).
Obiekt `document` jest własnym węzłem, który znajduje się w katalogu głównym.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Nodes</title>
  </head>
  <body>
    <h1>This is an element node</h1>
    <!-- This is a comment node -->
    This is a text node.
  </body>
</html>
```

## Dostęp do elementów DOM

Aby działać z elementami strony, musimy je wcześniej w jakiś sposób
znaleźć i pobrać - do tego celu wykorzystamy kilka metod wymienionych poniżej:

| Czego szukamy              | Składnia selektora  | Metoda                  |
|-------------------|-----------------|--------------------------|
| ID                | #demo           | getElementById()         |
| Class             | .demo           | getElementsByClassName() |
| Tag               | demo            | getElementsByTagName()   |
| Selector (single) |                 | querySelector()          |
| Selector (all)    |                 | querySelectorAll()       |
