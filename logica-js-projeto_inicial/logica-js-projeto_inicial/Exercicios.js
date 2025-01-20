// Desafio 1

alert("Boas vindas ao nosso site!");

// variáveis solicitadas
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

// Exibe um alerta com a mensagem de erro
alert("Erro! Preencha todos os campos");

// Declare uma variável de mensagem de erro e exiba o valor dela
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

// Use prompt para capturar o nome e a idade do usuário
nome = prompt("Digite seu nome");
idade = prompt("Digite sua idade");

// Verifique se a idade é maior ou igual a 18
if (idade >= 18) {
  alert("Pode tirar a habilitação!");
} else {
  alert("Não pode tirar a habilitação.");
}


// Desafio 2 

diaDaSemana = prompt('Qual é o dia da semana?');

if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
    alert('Bom fim da semana!');
}


// Desafio 3

positivoNegativo = Number(prompt('Qual é o número?'));

if (positivoNegativo > 0) {
    alert('Número positivo');
} else if (positivoNegativo < 0) {
    alert('Número negativo');
}


// Desafio 4

pontuacao = Number(prompt('Qual é a sua pontuação?'));

if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else if (pontuacao < 100) {
    alert('Tente novamente para ganhar');
}


// Desafio 5

let saldo = 1000

let saldoMensagem = ("Seu saldo é de R$ " + saldo);

alert(saldoMensagem);


// Desafio 6

nomeUsuario = prompt('Qual é o seu nome?');

alert("Bom-vindas " + nomeUsuario);


// Desafio 7

let contador = 1

while (contador <= 10) {
    alert(contador);
    contador++;
}


// Desafio 8

let contadorMenor = 10

while (contadorMenor >= 0) {
    alert(contadorMenor);
    contadorMenor--;
}


// Desafio 9

let contagemRegressiva = prompt('Digite um número para iniciar a contagem regressiva');

while (contagemRegressiva >= 0) {
    alert(contagemRegressiva);
    contagemRegressiva--;
}


// Desafio 10
// O operador AND, representado pelos símbolos "&&"

let idadecomparar = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idadecomparar > 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}


// Desafio 11

