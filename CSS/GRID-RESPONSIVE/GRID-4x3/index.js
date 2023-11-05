const botaoMenu = document.getElementById("botao_menu");
const subitens = document.querySelector(".subitens");

botaoMenu.addEventListener("click", function () {
  if (subitens.style.display === "none" || subitens.style.display === "") {
    subitens.style.display = "block";
  } else {
    subitens.style.display = "none";
  }
});
