const itens = ["Item 1", "Item 2", "Item 3"];

const lista = document.getElementById("lista-itens");

itens.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  lista.appendChild(li);
  /*é uma linha de código em JavaScript que 
  adiciona um elemento como filho de outro elemento */
});
