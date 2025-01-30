/* Seleciona o elemento h1 e altera o seu texto
let titulo = document.querySelector('h1');
// Altera o texto do título para 'Jogo do Número Secreto'
titulo.innerHTML = 'Jogo do Número Secreto';


// Seleciona o elemento p e altera o seu texto
let paragrafo = document.querySelector('p');
// Altera o texto do parágrafo para 'Escolha um número entre 1 e 10'
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// Criando uma função para reutilizar várias vezes sem precisar toda vez criar como no código acima
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


// Definindo uma função para verificar o chute do jogador
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
            if (chute > numeroSecreto) {
                    exibirTextoNaTela('p', 'O número secreto é menor');
            } else {
                    exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;
            limparCampo();
    }
}

// Definindo uma função para gerar um número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.floor(Math.random() * numeroLimite) + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


// Definindo uma função para limpar o campo de entrada

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


// Definindo uma função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); 
    limparCampo(); 
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();