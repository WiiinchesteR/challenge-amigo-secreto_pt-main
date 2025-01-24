//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomesNaLista = [];

function exibir(tag, nome){
    let nomes = document.querySelector(tag);
    nomes.innerHTML = nome;
}


function adicionarAmigo(){
    let nomes = document.querySelector('input').value.trim().replace(/[^a-zA-Z0-9]/g, '');
    limparCampo();
    

    if (nomes == ''){
        alert('Campo vazio, por favor, adicione um nome!');
    }else{
        nomesNaLista.push(nomes);
        let nomesConcatenados = '';
        let i = 0;
        while (i < nomesNaLista.length){
            nomesConcatenados += `<li>${nomesNaLista[i]}<li>`;
            i++;
        }
    
        exibir('ul', `Lista de amigos: <br><br>${nomesConcatenados}`);
    }
}


function sortearAmigo(){
    let tamanhoDaLista = nomesNaLista.length;
    let sorteio = [Math.floor(Math.random() * tamanhoDaLista)];

    if (nomesNaLista == ''){
        alert('Você precisa adicionar pelo menos dois amigos para sortear...');
    }else{
        exibir('ul', `Amigo secreto sorteado ==> ${nomesNaLista[sorteio]}`);
    }
}


function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}