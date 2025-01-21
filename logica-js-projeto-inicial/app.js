//Jogo do número secreto
alert('Boas vindas ao jogo do número secreto');

let numeroMaximo = 5000;

// gera um número aleatório entre 1 e 10
let numeroSecreto =  parseInt(Math.random() * numeroMaximo + 1);

// pede um número ao jogador
let chute;

let tentativas = 1;

// Enquanto o chute não for igual ao número secreto o loop ira continuar
while (chute != numeroSecreto) {
    chute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));
    // se chute for igual ao número secreto, o loop será encerrado
    if (chute == numeroSecreto) {
        // se chute for igual ao número secreto, o loop será encerrado
        break;
    } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    // tentativas = tentativas + 1;
    tentativas++;
}

// define a palavra 'tentativas' para pluralizar a frase do resultado
// se tentativas for maior que 1, a palavra será 'tentativas', senão será 'tentativa'
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// exibe o resultado da partida ao jogador
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);




