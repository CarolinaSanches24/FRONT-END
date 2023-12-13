const display = document.getElementById("display");
const botoes = document.querySelectorAll(".botoes button");

let result = "";

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const valorBotao = botao.textContent;

    if (valorBotao === "AC") {
      result = "";
    } else if (valorBotao === "=") {
      try {
        result = eval(result);
      } catch (error) {
        result = "Erro";
      }
    } else {
      result += valorBotao;
    }

    display.value = result;
  });
});

/*A expressão eval em JavaScript é uma função embutida
 que avalia uma string como código JavaScript e executa esse código*/

/*Uma NodeList é basicamente uma lista (ou coleção)
 de elementos que você pode encontrar em uma página da web.*/
