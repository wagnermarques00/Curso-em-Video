// Fatorial de um numero

function fatorial(n = 0) {
    let fat = 1;
    for (let i = n; i > 1; i--) {
        fat *= i;
    }
    return fat;
}

console.log(fatorial(0)); // 0! -> = 1
console.log(fatorial(1)); // 1! -> 1*1 = 1
console.log(fatorial(2)); // 2! -> 2*1 = 2
console.log(fatorial(3)); // 3! -> 3*2*1 = 6
console.log(fatorial(4)); // 4! -> 4*3*2*1 = 24
console.log(fatorial(5)); // 5! -> 5*4*3*2*1 = 120
console.log(fatorial(6)); // 6! -> 6*5*4*3*2*1 = 720
console.log(fatorial(7)); // 7! -> 7*6*5*4*3*2*1 = 5040
console.log(fatorial(8)); // 8! -> 8*7*6*5*4*3*2*1 = 40320
console.log(fatorial(9)); // 9! -> 9*8*7*6*5*4*3*2*1 = 362880
console.log(fatorial(10)); // 10! -> 10*9*8*7*6*5*4*3*2*1 = 3628800
