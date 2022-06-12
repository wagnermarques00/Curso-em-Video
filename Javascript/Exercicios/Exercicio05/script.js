let numero = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let resultado = document.querySelector("div#res");

let valores = [];

function adicionar() {
    if (!numeroEstaEntre1E100(numero.value)) {
        window.alert(`Valor inválido.\nFavor inserir um número entre 1 e 100.`);
    } else {
        if (estaEmLista(numero.value, valores)) {
            window.alert(`O número já está na lista!\nFavor inserir números únicos.`);
        } else {
            criarElemento(numero);
        }
    }
    limparSelecao(numero);
}

function finalizar() {
    if (valores.length == 0) {
        window.alert(`A lista está vazia!\nFavor inserir números.`);
    } else {
        let totalElementos = valores.length;
        let maiorNumero = Math.max(...valores);
        let menorNumero = Math.min(...valores);
        let soma = somarArray(valores);
        let media = (soma / totalElementos).toString().replace(".", ",");

        resultado.innerHTML = "";
        resultado.innerHTML += `<p>A lista contém ${totalElementos} elementos.</p>`;
        resultado.innerHTML += `<p> O menor número é ${menorNumero} e o maior número é ${maiorNumero}.</p>`;
        resultado.innerHTML += `<p> A soma dos valores é ${soma}.</p>`;
        resultado.innerHTML += `<p> A média dos valores é ${media}.</p>`;
    }
}

function numeroEstaEntre1E100(numero) {
    if (Number(numero) >= 1 && Number(numero) <= 100) {
        return true;
    } else {
        return false;
    }
}

function estaEmLista(numero, lista) {
    if (lista.indexOf(Number(numero)) != -1) {
        return true;
    } else {
        return false;
    }
}

function limparSelecao(n) {
    n.value = "";
    n.focus();
}

function criarElemento(n) {
    valores.push(Number(n.value));
    let item = document.createElement("option");
    item.text = `Valor ${n.value} adicionado.`;
    lista.appendChild(item);
    resultado.innerHTML = "";
}

function somarArray(array) {
    let soma = 0;
    for (let posicao in array) {
        soma += array[posicao];
    }
    return soma;
}
