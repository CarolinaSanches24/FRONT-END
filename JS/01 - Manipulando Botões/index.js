const mudarCor = document.getElementById("botao1");
/*Retorna a referência do elemento através do seu ID.*/
const mensagem = document.getElementById("botao2");
const esconder = document.getElementById("botao3");
const mostrar = document.getElementById("mostrar-botao");

mudarCor.addEventListener("click", function () {
  // Muda a cor de fundo do botão para azul
  mudarCor.style.backgroundColor = "red";
});

mensagem.addEventListener("click", function () {
  alert("Olá Seja Bem Vinda Deva");
});

esconder.addEventListener("click", function () {
  esconder.style.display = "none";
});

mostrar.addEventListener("click", function (event) {
  // Impede o comportamento padrão do link (navegar para uma nova página)
  event.preventDefault();
  esconder.style.display = "block";
});

/*A função de callback passada para addEventListener 
recebe um parâmetro event. Este parâmetro é um objeto 
de evento que contém informações sobre o evento de clique.
Ao incluir event como um parâmetro na função de callback,
você tem acesso a todas as propriedades e métodos associados ao objeto de evento.*/
