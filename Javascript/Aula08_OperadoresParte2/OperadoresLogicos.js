/**Operadores Lógicos
 * ! - Negação
 * && - E (AND) -> Conjunção
 * || - OU (OR) -> Disjunção
 * */

// Operadores Lógicos
verdadeiro = true;
falso = false;

//Negação
resultado = !verdadeiro; // resultado = false
resultado = !falso; // resultado = true

//Conjunção (Tabela Verdade)
resultado = verdadeiro && verdadeiro; // resultado = true
resultado = verdadeiro && falso; // resultado = false
resultado = falso && verdadeiro; // resultado = false
resultado = falso && falso; // resultado = false

//Disjunção (Tabela Verdade)
resultado = verdadeiro || verdadeiro; // resultado = true
resultado = verdadeiro || falso; // resultado = true
resultado = falso || verdadeiro; // resultado = true
resultado = falso || falso; // resultado = false