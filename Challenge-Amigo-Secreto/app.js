let amigos = [];
let amigosDisponiveis = [];
const botaoReiniciar = document.getElementById('botaoReiniciar'); // Novo elemento

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    amigosDisponiveis.push(nome); // Adiciona à lista disponível
    input.value = "";

    // Atualiza lista visível
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
    
    botaoReiniciar.style.display = 'none'; // Esconde o botão se adicionar novo nome
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, adicione nomes para realizar o sorteio.");
        return;
    }

    if (amigosDisponiveis.length === 0) {
        alert("Todos os amigos já foram sorteados!");
        botaoReiniciar.style.display = 'block';
        return;
    }

    // Esconder a lista de amigos
    document.getElementById('listaAmigos').style.display = 'none';

    const indice = Math.floor(Math.random() * amigosDisponiveis.length);
    const nomeSorteado = amigosDisponiveis.splice(indice, 1)[0];

    document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: <strong>${nomeSorteado}</strong>`;

    if (amigosDisponiveis.length === 0) {
        botaoReiniciar.style.display = 'block';
    }
    
}



// Nova função para reiniciar
function reiniciarSorteio() {
    // Limpa os arrays
    amigos = [];
    amigosDisponiveis = [];
    
    // Limpa a lista exibida e o resultado do sorteio
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    
    // Esconde o botão de reiniciar
    botaoReiniciar.style.display = 'none';

        // Limpa o resultado anterior
        document.getElementById('resultado').innerHTML = "";
    
        // Exibe novamente a lista de amigos
        document.getElementById('listaAmigos').style.display = 'block';
}

