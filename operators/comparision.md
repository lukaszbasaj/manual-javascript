# **Operatory porównania**

<!-- markdownlint-disable MD013 -->
| Operator | Opis | Przykłady powrotu `true`                    |
|----------|------|-------------------------|
|Jest równe (==) |Zwraca true, jeśli argumenty są równe. Jeśli dwa argumenty nie są tego samego typu, JavaScript próbuje konwertować argument do odpowiedniego typu dla porównania. | `3 == var1`; `"3" == var1`; `3 == '3'`;|
|Nie jest równe (!=)|Zwraca true, jeśli argumenty nie są równe. Jeśli dwa argumenty nie są tego samego typu, JavaScript próbuje konwertować argument do odpowiedniego typu dla porównania.|`var1 != 4` `var2 != "3"`|
|Ściśle równe (===)|Zwraca true, jeśli argumenty są równe i są tego samego typu.|`3 === var1`|
|Ściśle nie jest równe (!==)|Zwraca true, jeśli argumenty nie są równe i/lub nie są tego samego typu.|`var1 !== "3"`` 3 !== '3'`|
|Jest większe (>)|Zwraca true, jeśli lewy argument jest większy niż prawy argument.|`var2 > var1`|
|Jest większe lub równe (>=)|Zwraca true, jeśli lewy argument jest większy lub równy prawemu argumentowi.|`var2 >= var1` `var1 >= 3`|
|Jest mniejsze (<)|	Zwraca true, jeśli lewy argument jest mniejszy niż prawy argument.|`var1 < var2`|
|Jest mniejsze lub równe (<=)|Zwraca true, jeśli lewy argument jest mniejszy lub równy prawemu argum`var2 <= 5`|

--- 
[JavaScript Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)


źródło: [ibm.com](https://www.ibm.com/support/knowledgecenter/en/SSVRGU_9.0.1/reference/r_wpdr_elements_operators_comparison_r.html)

[Mozilla Developer Network](https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Obsolete_Pages/Przewodnik_po_j%C4%99zyku_JavaScript_1.5/Operatory/Operatory_por%C3%B3wnania)
