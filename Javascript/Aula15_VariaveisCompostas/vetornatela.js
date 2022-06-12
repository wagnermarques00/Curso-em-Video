let valores = [8, 1, 7, 4, 2, 9];

for (let i = 0; i < valores.length; i++) {
    console.log(`Posição ${i}: ${valores[i]}`);
}

console.log(`----------------------------`);

// for simplificado no JS (só funciona para Arrays)
for (let pos in valores) {
    console.log(`Posição ${pos}: ${valores[pos]}`);
}

console.log(`----------------------------`);
