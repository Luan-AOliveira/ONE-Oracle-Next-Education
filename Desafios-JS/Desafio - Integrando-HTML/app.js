let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio.'

function consoleClicado () {
    console.log('Botão clicado!');
}

function alertClicado () {
    alert('Eu amo JS');
}

function promptClicado () {
    nomeCidade = prompt("Qual sua cidade?")
    alert(`Estive em ${nomeCidade} e lembrei de você`);
}

function somaClicado () {
    valor1 = parseInt(prompt("Informe o primeiro valor: "));
    valor2 = parseInt(prompt("Informe o segundo valor: "));
    total = valor1 + valor2;
    alert(`A soma de ${valor1} mais ${valor2} é igual a ${total}`);
}