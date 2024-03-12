function inverterSequencia() {
    // Obtém o valor do campo de entrada
    const inputText = document.getElementById('inputText').value;
  
    // Inverte a sequência de caracteres
    const sequenciaInvertida = inputText.split('').reverse().join('');
  
    // Exibe o resultado na tela
    document.getElementById('resultado').textContent = `Sequência Invertida: ${sequenciaInvertida}`;
  }
  