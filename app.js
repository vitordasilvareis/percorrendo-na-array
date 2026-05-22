const nomes = ["Wander", "Ana"];

function buscar() {
  const inputBusca = document.querySelector("#input-busca");
  const saida = document.querySelector("#saida");
  const nomeBuscado = inputBusca.value;

  let encontrado = false;

  for (let i = 0; i < nomes.length; i++) {
    if (nomeBuscado === nomes[i]) {
      saida.textContent = `${nomeBuscado} encontrado no índice ${i}`;
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    saida.textContent = `${nomeBuscado} não encontrado`;
  }
}

function criar() {
  const inputCriar = document.querySelector("#input-criar");
  const saidaCriar = document.querySelector("#saida-criar");
  const novoNome = inputCriar.value;

  if (novoNome.trim() === "") {
    saidaCriar.textContent = "Digite um nome válido.";
    return;
  }

  nomes.push(novoNome);
  saidaCriar.textContent = `${novoNome} adicionado com sucesso.`;
  inputCriar.value = "";
}
