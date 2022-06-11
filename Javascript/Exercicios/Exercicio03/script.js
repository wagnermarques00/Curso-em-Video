function contar() {
    let inicio = document.getElementById("txtInicio");
    let fim = document.getElementById("txtFim");
    let passo = document.getElementById("txtPasso");
    let resultado = document.getElementById("resultado");

    if (
        inicio.value.length == 0 ||
        fim.value.length == 0 ||
        passo.value.length == 0
    ) {
        resultado.innerHTML = `Impossível contar!`;
    } else {
        resultado.innerHTML = `Contando: <br>`;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0) {
            resultado.innerHTML = `Passo inválido, será considerado como 1.<br>`;
            p = 1;
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} \u{27A1}`;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` ${c} \u{27A1}`;
            }
        }
        resultado.innerHTML += `\u{23F9}`;
    }
}
