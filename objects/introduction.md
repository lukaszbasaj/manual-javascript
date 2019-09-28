> **Czym są obiekty**

Obiekty w JavaScript są najważniejszym typem danych i stanowią elementy składowe nowoczesnego JavaScript. Te obiekty różnią się znacznie od prymitywnych typów danych JavaScript (liczba, łańcuch, wartość logiczna, null, niezdefiniowany i symbol) w tym sensie, że chociaż te pprymitywnych typy danych przechowują po jednej wartości (w zależności od ich typów), to:

- obiekty są bardziej złożone i każdy obiekt może zawierać dowolną kombinację tych prymitywnych typów danych, a także referencyjne typy danych. 
- obiekt jest referencyjnym typem danych. Zmienne, którym przypisano wartość referencji, otrzymują referencję lub wskaźnik do tej wartości. Odwołanie lub wskaźnik wskazuje miejsce w pamięci, w którym obiekt jest przechowywany. Zmienne tak naprawdę nie przechowują wartości.
- obiekty w JavaScript mogą być zdefiniowane jako nieuporządkowany zbiór powiązanych danych, typów pierwotnych lub referencyjnych, w postaci par „klucz: wartość”. Te klucze mogą być zmiennymi lub funkcjami i nazywane są odpowiednio właściwościami i metodami w kontekście obiektu. 

Obiekt można utworzyć za pomocą nawiasów klamrowych `{…}` z opcjonalną listą właściwości. Właściwość to para `„klucz: wartość”`, gdzie klucz jest ciągiem (zwanym także „nazwą właściwości”), a wartość może być dowolna.