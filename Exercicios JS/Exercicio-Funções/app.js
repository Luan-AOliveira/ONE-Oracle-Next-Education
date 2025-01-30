function Apresentacao() {
    console.log("Olá, mundo!");
}

Apresentacao();


function apresentacaoNome(nome) {
    console.log("Olá, " + nome);
}

apresentacaoNome("Luan");


function dobraNumero(numero) {
    console.log(numero * 2);
}

dobraNumero(5); 


function mediaNumero(numero1, numero2, numero3) {
    console.log((numero1 + numero2 + numero3) / 3);
}

mediaNumero(5, 10, 15);


function maiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(numero1);
    } else {
        console.log(numero2);
    }
}

maiorNumero(5, 10);


function retornaMultiplicacao(numero) {
    return numero * 2;
}

console.log(retornaMultiplicacao(5));
