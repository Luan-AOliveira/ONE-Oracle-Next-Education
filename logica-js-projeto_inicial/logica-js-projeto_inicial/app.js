alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 5;

// pede um número ao jogador
let chute;

let tentativas = 1;

// Enquanto o chute não for igual ao número secreto o loop ira continuar
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto, o loop será encerrado
    if (chute == numeroSecreto) {
        alert('Isso ai! Você descobriu o número secreto: ' + (numeroSecreto) + ' com ' + (tentativas) + ' tentativas');
    } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    // tentativas = tentativas + 1;
    tentativas++;
}




