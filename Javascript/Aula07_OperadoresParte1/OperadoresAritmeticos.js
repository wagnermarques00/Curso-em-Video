// Operadores aritméticos
5 + 2; // --> Soma = 7
5 - 2; // --> Subtração = 3
5 * 2; // --> Multiplicação = 10
5 / 2; // --> Divisão = 2.5
5 % 2; // --> Módulo = 1 -> https://www.w3schools.com/js/js_arithmetic.asp
5 ** 2; // --> Potencia = 25

//Tomar cuidado com a precedência dos operadores aritméticos
5 + 3 / 2; // 6.5 --> Primeiro ocorre a divisão, depois a soma(igual na matemática)
(5 + 3) / 2; // 4.5 --> Primeiro ocorre a soma, depois a divisão(igual na matemática)

//Ordem de precedência dos operadores aritméticos
//1. ()
//2. **
//3. * / %
//4. + -

//Atribuição Simples
var a = 5 + 3;          // --> a = 8
var b = a % 5;          // --> b = 8 % 5 = 3
var c = 5 * b ** 2;     // --> c = (3 ** 2) = 9 * 5 = 45
var d = 10 - a/2;       // --> d = -(8/2) = -4 + 10 = 6
var e = 6 * 2/d;        // --> e = (6*2) = 12 / 6 = 2
var f = b % e + 4/e;     // --> f = (3 % 2) + (4/2) = 1 + 2 = 3

//Simplificações de atribuição
var n = 3
n = n + 4;  // n+=4 --> n = n + 4
n = n - 4;  // n-=4 --> n = n - 4
n = n * 4;  // n*=4 --> n = n * 4
n = n / 4;  // n/=4 --> n = n / 4
n = n % 4;  // n%=4 --> n = n % 4
n = n ** 4; // n**=4 --> n = n ** 4

//Simplificações de incremento e decremento
var x = 5;
x = x + 1; // x++ --> x = x + 1
x = x - 1; // x-- --> x = x - 1