function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        img.src = "manha.png";
        document.body.style.background = "#7e3557";
    } else if (hora >= 12 && hora <= 18) {
        img.src = "tarde.png";
        document.body.style.background = "#c9ced8";
    } else {
        img.src = "noite.png";
        document.body.style.background = "#0c2141";
    }
}
