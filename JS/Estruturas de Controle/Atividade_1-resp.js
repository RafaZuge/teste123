function processar() {
    var n = Number(document.getElementById("entrada").value);

    var texto = "";
    if (n < 0) {
        texto = "O número inserido não é maior ou igual a zero."
    } else {
        for (i = 0; i <= n; i++) {
            texto = texto + "O número "+i+" é ";
            if (i % 2 == 0) {
                texto = texto + "par.";
            } else {
                texto = texto + "ímpar.";
            }
            texto = texto + "<br>";
        }
    }
    document.getElementById("resultado").innerHTML = texto;
}
