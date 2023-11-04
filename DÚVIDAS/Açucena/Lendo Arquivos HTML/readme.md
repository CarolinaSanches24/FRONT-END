# CÓDIGO JAVASCRIPT

Cria uma função chamada includeHTML(). O que essa função faz é procurar por elementos HTML que tenham um atributo especial chamado "w3-include-html". Se um elemento tem esse atributo, a função faz uma requisição HTTP para carregar o conteúdo de um arquivo especificado pelo valor desse atributo e coloca esse conteúdo dentro do elemento HTML que tem o atributo "w3-include-html".

- var z, i, elmnt, file, xhttp;: Aqui estão algumas variáveis que serão usadas no código.
- z = document.getElementsByTagName("\*");: Isso obtém todos os elementos HTML da página.
- for (i = 0; i < z.length; i++) { ... }: Isso começa um loop que passa por todos os elementos HTML na página.
- elmnt = z[i];: Isso pega o elemento HTML atual no loop.
- file = elmnt.getAttribute("w3-include-html");: Isso verifica se o elemento tem um atributo chamado "w3-include-html" e obtém o valor desse atributo.
  if (file) { ... }: Isso verifica se o elemento tem o atributo "w3-include-html"
- xhttp = new XMLHttpRequest();: Isso cria um novo objeto XMLHttpRequest, que é usado para fazer requisições HTTP em JavaScript.
- xhttp.onreadystatechange = function () { ... }: Isso define uma função que será chamada quando o estado da requisição HTTP mudar.
- xhttp.open("GET", file, true);: Isso configura a requisição HTTP para obter o arquivo especificado pelo valor do atributo "w3-include-html".
- xhttp.send();: Isso envia a requisição HTTP.

- if (this.readyState == 4) { ... }: Isso verifica se a requisição foi concluída.

- if (this.status == 200) { ... }: Isso verifica se a resposta da requisição tem status 200, que significa que a requisição foi bem-sucedida.

- elmnt.innerHTML = this.responseText;: Isso coloca o conteúdo do arquivo dentro do elemento HTML.

- elmnt.removeAttribute("w3-include-html");: Isso remove o atributo "w3-include-html" do elemento.

- includeHTML();: Isso chama a função includeHTML() novamente para continuar procurando por mais elementos com o atributo "w3-include-html".

# REQUISIÇÃO HTTP

Uma requisição HTTP (Hypertext Transfer Protocol) é uma solicitação que um cliente (geralmente um navegador web) .
