let listaNomes = [];

function adicionar() {
  let nomeAmigo = document.getElementById("nome-amigo");
  if (nomeAmigo.value.length < 3) {
    alert("O nome deve conter mais que 3 caracteres");
  } else if (listaNomes.includes(nomeAmigo.value)) {
    alert("O nome já foi adicionado!");
  } else {
    listaNomes.push(nomeAmigo.value);
  }

  nomeAmigo.value = "";

  let amigoIncluido = document.getElementById("lista-amigos");
  amigoIncluido.textContent = `${listaNomes}`;

  habilitaSortear();
}

function sortear() {
  embaralha(listaNomes);

  let listaSorteio = document.getElementById("lista-sorteio");

  for (let i = 0; i < listaNomes.length; i++) {
    if (i == listaNomes.length - 1) {
      listaSorteio.innerHTML =
        listaSorteio.innerHTML +
        listaNomes[i] +
        " --> " +
        listaNomes[0] +
        "<br>";
    } else {
      listaSorteio.innerHTML =
        listaSorteio.innerHTML +
        listaNomes[i] +
        " --> " +
        listaNomes[i + 1] +
        "<br>";
    }
  }
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // atribuição via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
  listaNomes = [];
  document.getElementById("lista-amigos").textContent = "";
  document.getElementById("lista-sorteio").textContent = "";
}

function habilitaSortear() {
  let botaoSortear = document.getElementById("btn-sortear");
  console.log(botaoSortear);
  if (listaNomes.length < 4) {
    botaoSortear.setAttribute("disabled", "");
  } else if (listaNomes.length > 4) {
    botaoSortear.removeAttribute("disabled", "");
  }
}
