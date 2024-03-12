// Array para armazenar as tarefas
const tarefas = [];

function adicionarTarefa() {
  // Obtém o valor do campo de entrada
  const novaTarefa = document.getElementById('tarefa').value;

  // Adiciona a nova tarefa ao array
  tarefas.push(novaTarefa);

  // Limpa o campo de entrada
  document.getElementById('tarefa').value = '';

  // Atualiza a lista de tarefas exibida na tela
  exibirTarefas();
}

function removerTarefa(index) {
  // Remove a tarefa do array pelo índice
  tarefas.splice(index, 1);

  // Atualiza a lista de tarefas exibida na tela
  exibirTarefas();
}

function exibirTarefas() {
  const listaTarefas = document.getElementById('listaTarefas');

  // Limpa a lista antes de atualizar
  listaTarefas.innerHTML = '';

  // Adiciona as tarefas à lista
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${tarefa} <span class="remover" onclick="removerTarefa(${index})">Remover</span>`;
    listaTarefas.appendChild(li);
  });
}
