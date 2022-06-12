let num = [5, 8, 2, 9, 3];
num.push(1);

console.log(`Vetor: ${num}`);
console.log(`O vetor tem ${num.length} elementos`);
console.log(`O vetor ordenado é ${num.sort()}`); // Ordena o vetor
console.log(`O vetor invertido é ${num.reverse()}`); // Inverte o vetor

let pos = num.indexOf(8); // Retorna a posição do elemento
console.log(`O valor 8 está na posição ${pos}`);

let posinexistente = num.indexOf(33); // Retorna -1 se não encontrar
console.log(
    `O valor 33 não consta na Array, portanto, sua posição será: ${posinexistente}`
);

/** Atalhos interessantes para arrays:
 * num.push(10); // adiciona no final do array
 * num.lenght; // retorna o tamanho do array
 * num.sort(); // ordena o array em ordem crescente
 * num.reverse(); // inverte o array
 */
