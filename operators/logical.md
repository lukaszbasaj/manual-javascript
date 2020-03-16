# **Operatory logiczne**

<!-- markdownlint-disable MD013 -->
<!-- markdownlint-disable MD033 -->
| Operator          | Użycie         | Opis                                                                                                                                                                                                                                               |
|-------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Logiczne AND (&&) | `expr1 && expr2` | Zwraca expr1 jeśli wartość ta może być przekonwertowana na false, w przeciwnym razie zwraca expr2. Zatem, używany z wartościami typu logicznego, operator && zwraca true jeśli obydwa operandy mają wartość true, w przeciwnym razie zwraca false. |
| Logiczne OR (II)  | <code>expr1 &#124;&#124;expr2</code> | Zwraca expr1, jeśli wartość ta może być przekonwertowana na true; w przeciwnym razie zwraca expr2. Tak więc, używany z wartościami typu logicznego, operator || zwraca true którykolwiek z operandów równy jest true.                              |
| Logiczne NOT (!)  | `!expr`          | Zwraca false jeśli jego operand można przekonwertować na true; w przeciwnym razie zwraca true.    

---
Źródło: [Mozilla Developer Network](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/Logical_Operators)
