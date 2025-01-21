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

console.log("Boas-Vindas");

let nomes = "Luan";
console.log(nomes);
alert("Olá, " + nomes);


let programa = prompt("Qual é o seu programa favorito?");
console.log(programa);


let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultado);


let resultado2 = valor1 - valor2;
console.log("A subtração de " + valor1 + " e " + valor2 + " é igual a " + resultado2);


let Idade = parseInt(prompt("Qual é a sua idade?"));
if (Idade >= 18) {
  console.log("Você já pode dirigir!");
} else {
  console.log("Você ainda não pode dirigir!");
}


let Number = parseInt(prompt("Digite um número"));
if (Number >= 0) {
  console.log("Número positivo");
} else {
  console.log("Número negativo");
}

contador = 0
while (contador <= 10) {
  console.log(contador);
  contador++;
}


let nota = parseInt(prompt("Digite a sua nota"));
if (nota >= 7) {
  console.log("Aprovado");
} else {  
  console.log("Reprovado");
}


let gerarNumero1 = Math.random();
console.log(gerarNumero1);

let gerarNumero2 = parseInt(Math.random() * 10 + 1);
console.log(gerarNumero2);

let gerarNumero3 = parseInt(Math.random() * 100 + 1);
console.log(gerarNumero3);


// Desafio 12

