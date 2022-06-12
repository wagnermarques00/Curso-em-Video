// Estudo básico sobre funções

function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

let resultado = parOuImpar(13);
let resultado2 = parOuImpar(14);
console.log(resultado);
console.log(resultado2);
