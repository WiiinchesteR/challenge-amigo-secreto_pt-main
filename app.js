//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Me chamo Davi Moraes, este é o projeto amigo secreto, (One Alura).

// Lista que receberá os nomes.
let nomesNaLista = [];

// Função para exibir os nomes na tela.
function exibirTextos(tag, nome){
    let nomes = document.querySelector(tag);
    nomes.innerHTML = nome;
}


// Função para o usuário adicionar os nomes na lista.
function adicionarAmigo(){
    // Variável que receberá os nomes e será incluida na lista, removendo todos os espaços e números.
    let nomes = document.querySelector('input').value.trim().replace(/[0123456789]/g, '');
    limparCaracteres();
    
    // Condicional, para valilar um campo vazio ou com espaços.
    if (nomes == ''){
        alert('Campo vazio, por favor, adicione um nome!');
    }else{
        // Estrutura de repetoção na condicional para concatenar os nomes e imprimir na tela um abaixo do outro.
        nomesNaLista.push(nomes);
        let nomesConcatenados = ''; // Variável vazia para concatenar os nomes.
        let contador = 0; // Variável contadora para não entrar em loop.
        while (contador < nomesNaLista.length){
            nomesConcatenados += `<li>${nomesNaLista[contador]}<li>`; // tag <li> para pular linha. 
            contador++;
        }
    
        exibirTextos('ul', `Lista de amigos: <br><br>${nomesConcatenados}`);
    }
}


// Função para sortear um nome na lista.
function sortearAmigo(){
    let tamanhoDaLista = nomesNaLista.length; // Tamanho da lista.
    let sorteio = [Math.floor(Math.random() * tamanhoDaLista)]; // Método random para randomizar um índice.

    // Condicional para validar o botão sortear.
    if (nomesNaLista == ''){
        alert('Você precisa adicionar pelo menos dois amigos para sortear...');
    }else{
        exibirTextos('ul', `Amigo secreto sorteado ==> ${nomesNaLista[sorteio]}`);
    }
}

// Função para limpar o campo de caracteres.
function limparCaracteres(){
    nome = document.querySelector('input');
    nome.value = '';
}
