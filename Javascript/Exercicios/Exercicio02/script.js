function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formularioAno = document.getElementById("txtano");
    var resposta = document.getElementById("res");
    if (formularioAno.value == "") {
        window.alert("Digite um ano!");
    } else if (formularioAno.length == 0 || Number(formularioAno.value) > ano) {
        window.alert("Verifique o ano e tente novamente");
    } else {
        var sexoEscolhido = document.getElementsByName("radsex");
        var idade = ano - Number(formularioAno.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (sexoEscolhido[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade <= 2) {
                img.setAttribute("src", "homembebe.png");
            } else if (idade >= 3 && idade <= 11) {
                img.setAttribute("src", "homemcrianca.png");
            } else if (idade >= 12 && idade <= 18) {
                img.setAttribute("src", "homemadolescente.png");
            } else if (idade >= 19 && idade <= 65) {
                img.setAttribute("src", "homemadulto.png");
            } else if (idade >= 66) {
                img.setAttribute("src", "homemidoso.png");
            }
        } else if (sexoEscolhido[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade <= 2) {
                img.setAttribute("src", "mulherbebe.png");
            } else if (idade >= 3 && idade <= 11) {
                img.setAttribute("src", "mulhercrianca.png");
            } else if (idade >= 12 && idade <= 18) {
                img.setAttribute("src", "mulheradolescente.png");
            } else if (idade >= 19 && idade <= 65) {
                img.setAttribute("src", "mulheradulta.png");
            } else if (idade >= 66) {
                img.setAttribute("src", "mulheridosa.png");
            }
        }
        resposta.style.textAlign = "center";
        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resposta.appendChild(img);
    }
}
