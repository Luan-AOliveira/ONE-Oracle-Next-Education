# Amigo Secreto

Este é um projeto de desafio que implementa uma aplicação para sorteio de "Amigo Secreto". A aplicação permite aos usuários inserir nomes de amigos, visualizar uma lista dos nomes adicionados e, ao clicar em **Sortear Amigo**, exibe de forma aleatória o nome do amigo sorteado. Além disso, a aplicação possui funcionalidades de validação de entrada e reinicialização do sorteio.

## Funcionalidades

- **Adicionar nomes:**  
  O usuário insere um nome no campo de texto e clica em **Adicionar**. Se o campo estiver vazio, um alerta solicita um nome válido.

- **Visualizar a lista:**  
  Os nomes inseridos são exibidos em uma lista na tela.

- **Sorteio aleatório:**  
  Ao clicar em **Sortear Amigo**, a aplicação seleciona aleatoriamente um dos nomes da lista e exibe o resultado na tela, escondendo a lista de nomes.

- **Reiniciar sorteio:**  
  Quando todos os nomes já foram sorteados, ou quando o usuário desejar reiniciar o sorteio, o botão **Novo Sorteio** permite reexibir a lista e limpar o resultado anterior para iniciar um novo sorteio.

- **Utilização do Trello:**  
  O projeto também utilizou o Trello para organização das tarefas e gerenciamento do desenvolvimento.

## Tecnologias Utilizadas

- **HTML5** para a estrutura da aplicação.
- **CSS3** para estilização, incluindo responsividade e animações leves.
- **JavaScript (ES6)** para a lógica do sorteio e manipulação do DOM.

## Deploy

Você pode acessar a aplicação diretamente através do seguinte link:

[Desafiante Amigo Secreto](https://challenger-amigo-secreto-eight.vercel.app)

## Como Usar

1. **Adicionando nomes:**  
   Digite o nome do amigo no campo de texto e clique em **Adicionar**. Se o campo estiver vazio, será solicitado um nome válido.

2. **Realizando o sorteio:**  
   Depois de adicionar os nomes, clique em **Sortear Amigo** para que a aplicação selecione um nome de forma aleatória. O nome sorteado será exibido, e a lista de amigos será ocultada.

3. **Reiniciando o sorteio:**  
   Caso deseje iniciar um novo sorteio (por exemplo, para adicionar novos nomes ou repetir o sorteio), clique em **Novo Sorteio**. A lista de nomes será exibida novamente para que você possa continuar.

## Estrutura do Projeto

```plaintext
.
├── index.html         # Estrutura da página principal
├── style.css          # Estilos da aplicação
├── app.js             # Lógica do sorteio, manipulação de eventos e do DOM
└── assets/            # Pasta com imagens e ícones utilizados na aplicação
```

## Considerações Finais

Este projeto representa um marco importante no meu desenvolvimento pessoal e profissional. Participar deste primeiro desafio foi uma experiência transformadora, onde pude aplicar conhecimentos em HTML, CSS e JavaScript, além de aprender a importância de uma boa organização através do Trello. Trabalhar em parceria com grandes nomes como Oracle e Alura não só elevou o nível do projeto, mas também reforçou a relevância de buscar a excelência e a inovação no desenvolvimento de soluções digitais. Este desafio foi fundamental para expandir minhas habilidades e consolidar minha paixão pela programação, abrindo portas para novos aprendizados e oportunidades na área da tecnologia.
