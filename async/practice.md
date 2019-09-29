# Operacje asynchroniczne

Przełącz się na branch `08-async`

## Ćwiczenie 1

Posługując się poznanymi metodami stwórz funkcję, która wygeneruje strukturę
kontenera, w którym będzie wyświetlana zawartość. Struktura HTML, powinna mieć postać:

```html
<section class='card'>
    <h2 class='card__header'>{title}</h2>
    <p class="card__header-description">{opening_crawl}</p>
</section>
```

## Ćwiczenie 2

Dodaj funkcję, która za pomocą fetch API ściągnie dane z
<https://swapi.co/api/films/> i przekaże wartości `{title}` i `{opening_crawl}`
do struktury utworzonej powyżej.
