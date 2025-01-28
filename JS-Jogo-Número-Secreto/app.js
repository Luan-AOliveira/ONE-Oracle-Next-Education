// Seleciona o elemento h1 e altera o seu texto
let titulo = document.querySelector('h1');

// Altera o texto do título para 'Jogo do Número Secreto'
titulo.innerHTML = 'Jogo do Número Secreto';

// Seleciona o elemento p e altera o seu texto
let paragrafo = document.querySelector('p');

// Altera o texto do parágrafo para 'Escolha um número entre 1 e 10'
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';


function verificarChute() {
    console.log('O botão foi clicado!');
}