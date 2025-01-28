/* Seleciona o elemento h1 e altera o seu texto
let titulo = document.querySelector('h1');
// Altera o texto do título para 'Jogo do Número Secreto'
titulo.innerHTML = 'Jogo do Número Secreto';


// Seleciona o elemento p e altera o seu texto
let paragrafo = document.querySelector('p');
// Altera o texto do parágrafo para 'Escolha um número entre 1 e 10'
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/

let numeroSecreto = gerarNumeroAleatorio();


// Criando uma função para reutilizar várias vezes sem precisar toda vez criar como no código acima
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


// Definindo uma função para verificar o chute do jogador
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

// Definindo uma função para gerar um número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
    return parseInt(Math.floor(Math.random() * 10) + 1);
}