# Dúvidas 03/11/2023

- Se um projeto que eu estou fazendo no html é extenso, é possível usar listas assim como no JS pro código não ficar extenso?

- document.querySelector('.tecla_pom'); para que serve? ele é como se fosse uma função de pegar item na lista?

- Como subir arquivo para o github pelo o git?

1. Configurar chave SSH.

- Abra Terminal em modo administrador.
  endereço de email GitHub.
  https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

- Configurando SSH no Windows
  → Tecla windows → Digitar GitBash
  → ssh-keygen -t ed25519 -C "your_email@example.com"
  —> enter
  —> enter
  → criar senha : 15975388%Baka
  → clear - limpar o terminar
  → eval "$(ssh-agent -s)" -> colar esse comando
  → ssh-add ~/.ssh/id_ed25519
  → clip < ~/.ssh/id_ed25519.pub -> copia o contéudo da minha chave public

2. Comando de inicialização repositorio => git.init
3. Adicionar modificação do repositorio => git add .
4. Adicionar commit => git commit -m "Primeiro commit"
5. Enviar alterações ao repositorio remoto => git push
