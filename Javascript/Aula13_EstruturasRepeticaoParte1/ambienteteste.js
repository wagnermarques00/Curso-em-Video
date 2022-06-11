// estrutura de repetição com teste lógico no início -> WHILE
var c = 1;
while (c <= 6) {
    console.log(`Passo while ${c}`);
    c++;
    /** Resposta:
     * Passo while 1
     * Passo while 2
     * Passo while 3
     * Passo while 4
     * Passo while 5
     * Passo while 6
     */
}

// estrutura de repetição com teste lógico no final -> DO WHILE
var d = 1;
do {
    console.log(`Passo do while ${d}`);
    d++;
} while (d <= 6);
/** Resposta:
 * Passo do while 1
 * Passo do while 2
 * Passo do while 3
 * Passo do while 4
 * Passo do while 5
 * Passo do while 6
 */
