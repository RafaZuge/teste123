function media() {
    var num_str;
    var num = 0;
    var soma = 0;
    var contagem = 0;
    do {
        num_str = prompt("Digite um número:");
        num = Number(num_str);
        if (!isNaN(num) && num != 0) {
            soma = soma + Number(num);
            contagem++;
        }
    } while (!isNaN(num) && num != 0);

    var resposta = "";
    if (contagem > 0){
        var divisao = soma / contagem;
        resposta = "A média é "+ divisao +".";
    } else {
        resposta = "Não foram inseridos números.";
    }


    document.getElementById("resultado").innerHTML = resposta;
}

