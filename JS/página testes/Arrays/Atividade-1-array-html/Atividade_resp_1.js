function mes() {
    var meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];
    var hoje = new Date();
    var texto = meses[hoje.getMonth()];
    document.getElementById("resultado").innerHTML = texto;


}
