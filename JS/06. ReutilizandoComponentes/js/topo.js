const head = document.head;
const body = document.body;

const estilo =
  "<link rel='stylesheet' type='text/css' href='./css/styles.css'/>";
head.innerHTML += estilo;
/*Adiciona a string estilo ao conteúdo interno da tag <head> do documento HTML.
 Isso efetivamente insere a referência ao arquivo de estilo CSS no cabeçalho do documento.*/

const topo = document.createElement("header");
//Cria um novo elemento HTML do tipo <header> (cabeçalho) e armazena esse elemento na variável topo.
topo.setAttribute("id", "topo");
topo.setAttribute("class", "topo");
//Define o atributo "class" do elemento topo como "topo" e atributo "id" como topo
body.prepend(topo);
/*Adiciona o elemento topo como o primeiro filho do elemento <body> da página HTML
 Isso significa que o <header> será colocado no início do conteúdo do corpo da página.*/

const logo =
  "<figure id='logo' class='logo'>" +
  "<img src='./assets/logo.png' title='Logomarca'/>" +
  "</figure>";
topo.innerHTML += logo;

//Menu com links direcionando para paginas diferentes
const menu =
  "<menu id='menu' class='menu'>" +
  "<nav>" +
  "<ul>" +
  "<li><a href='./index.html'>Home</a></li>" +
  "<li><a href='./sobre.html'>Sobre</a></li>" +
  "<li><a href='./login.html'>Login</a></li>" +
  "</ul>" +
  "</nav>" +
  "</menu>";

topo.innerHTML += menu;
