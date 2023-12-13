// Seleciona todos os parágrafos dentro das divs com a classe "minha-div"
const paragrafos = document.querySelectorAll(".minha-div p");

// Altera o texto de todos os parágrafos selecionados
paragrafos.forEach(function (paragrafo) {
  paragrafo.textContent = "Texto alterado usando document.querySelectorAll()";
});

/*forEach é uma maneira de percorrer
 os elementos de um array e realizar 
 alguma operação em cada um deles. */
