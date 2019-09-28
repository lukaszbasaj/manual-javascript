> **Operatory arytmetyczne**

| Operator                      | Description                                                                                                                                                                                                              | Example                                                                                           |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| Remainder (%)                 | Binary operator. Returns the integer remainder of dividing the two operands.| 12 % 5 returns 2.|
| Increment (++)                | Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one.| If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4.|
| Decrement (--)                | Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.| If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2.|
| Unary negation (-)            | Unary operator. Returns the negation of its operand.| If x is 3, then -x returns -3.|
| Unary plus (+)                | Unary operator. Attempts to convert the operand to a number, if it is not already.| +"3" returns 3.+true returns 1.|
| Exponentiation operator (**)  | Calculates the base to the exponent power, that is, baseexponent                                                                                                                                                         | 2 ** 3 returns 8.10 ** -1 returns 0.1.|

źródło: [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

>> **Dodawanie (+)** 

*Operator dodawania generuje sumę operandów numerycznych lub konkatenacji łańcuchów*

**Operator: x + y**

Przykłady:
```
// Number + Number -> addition
1 + 2 // 3

// Boolean + Number -> addition
true + 1 // 2

// Boolean + Boolean -> addition
false + false // 0

// Number + String -> concatenation
5 + 'foo' // "5foo"

// String + Boolean -> concatenation
'foo' + false // "foofalse"

// String + String -> concatenation
'foo' + 'bar' // "foobar"
```

>> **Odejmowanie(-)**

*Operator odejmowania odejmuje dwa operandy, powodując ich różnicę.*

**Operator: x - y**

Przykłady:
```
5 - 3 // 2
3 - 5 // -2
'foo' - 3 // NaN
```

>> **Dzielenie(/)**

*Operator podziału wytwarza iloraz swoich operandów, gdzie lewy operand jest dzielną, a prawy operand jest dzielnikiem.*

**Operator: x / y**

Przykłady:
```
1 / 2      // returns 0.5 in JavaScript
1 / 2      // returns 0 in Java 
// (neither number is explicitly a floating point number)

1.0 / 2.0  // returns 0.5 in both JavaScript and Java

2.0 / 0    // returns Infinity in JavaScript
2.0 / 0.0  // returns Infinity too
2.0 / -0.0 // returns -Infinity in JavaScript
```

>> **Mnożenie(*)**

*Operator mnożenia tworzy iloczyn operandów.*

**Operator: x * y**

Przykłady:
```
2 * 2 // 4
-2 * 2 // -4
Infinity * 0 // NaN
Infinity * Infinity // Infinity
'foo' * 2 // NaN
``` 

>> **Modulo(%)**

*Operator reszty zwraca resztkę pozostałą po podzieleniu jednego operandu przez drugi operand. To zawsze wymaga znaku dzielenia.*

**Operator: var1 % var2**
```
12 % 5 // 2
-1 % 2 // -1
1 % -2 // 1
NaN % 2 // NaN
1 % 2 // 1
2 % 3 // 2
-4 % 2 // -0
5.5 % 2 // 1.5
```

>> **Potęgowanie( ** )**

*Operator potęgowania zwraca wynik podniesienia pierwszego operandu do potęgi drugiego operandu.*

**Operator: var1 ** var2**

Przykłady:
```
2 ** 3 // 8
3 ** 2 // 9
3 ** 2.5 // 15.588457268119896
10 ** -1 // 0.1
NaN ** 2 // NaN

2 ** 3 ** 2 // 512
2 ** (3 ** 2) // 512
(2 ** 3) ** 2 // 64
```