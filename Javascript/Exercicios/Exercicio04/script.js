function tabuada() {
    let numero = document.getElementById("txtnumero");
    let tabuada = document.getElementById("seltabuada");

    if (numero.value.length == 0) {
        window.alert("Digite um número!");
    } else {
        let n = Number(numero.value);
        tabuada.innerHTML = "";
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement("option");
            contagem = i.toString().padStart(2, "0"); //converte a contagem pra texto e coloca um zero a esquerda quando for menor que 1 dígito
            item.text = `${n} x ${contagem} = ${n * i}`;
            item.value = `tabuada${i}`; // para o Javascript não é necessário colocar o valor do option
            tabuada.appendChild(item);
        }
    }
}
