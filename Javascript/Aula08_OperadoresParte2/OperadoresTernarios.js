/** Operador Ternário
 * teste ? resultado(se verdadeiro) : resultado(se falso)
 *       ↑                          ↑ 
 *    Operador                  Operador
 */ 

//Exemplo 1:
media = 8;
media >= 7 ? console.log("Aprovado") : console.log("Reprovado"); //Aprovado
media = 6;
media >= 7 ? console.log("Aprovado") : console.log("Reprovado"); //Reprovado

//Exemplo 2:
x = 10;
var res = (x % 2 == 0 ? "5" : "9"); //9
x = 5;
var res = (x % 2 == 0 ? "5" : "9"); //5