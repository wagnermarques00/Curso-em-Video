function soma(n1 = 0, n2 = 0) {
    // colocando 0 como padrão, o resultado irá aparecer, independente se houver ou não valor
    return n1 + n2;
}

console.log(soma(10, 20)); // 30
console.log(soma(10)); // 10
console.log(soma()); // 0
