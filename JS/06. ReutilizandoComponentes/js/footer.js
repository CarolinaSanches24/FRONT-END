const rodape = document.createElement("footer");
// Cria um novo elemento HTML do tipo <footer> (rodape) e armazena esse elemento na variável rodape.
rodape.setAttribute("id", "rodape");
rodape.setAttribute("class", "rodape");

body.appendChild(rodape);

const texto = "<p class='title'>Rodape</p>";

rodape.innerHTML += texto;
