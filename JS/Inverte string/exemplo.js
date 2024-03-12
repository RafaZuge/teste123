// Array inicial
let nomes = ['Ana', 'Carlos', 'Maria', 'João'];

// Exercício: Operações em Arrays

// 1. Insira um novo nome, 'Paulo', no final do array.
nomes.push('Paulo');

// 2. Remova o nome 'Carlos' do array.
let indiceCarlos = nomes.indexOf('Carlos');
if (indiceCarlos !== -1) {
  nomes.splice(indiceCarlos, 1);
}

// 3. Atualize o nome 'Maria' para 'Mariana'.
let indiceMaria = nomes.indexOf('Maria');
if (indiceMaria !== -1) {
  nomes[indiceMaria] = 'Mariana';
}

// 4. Insira o nome 'Pedro' na segunda posição do array.
nomes.splice(1, 0, 'Pedro');

// 5. Mostre o array resultante no console.
console.log(nomes);
