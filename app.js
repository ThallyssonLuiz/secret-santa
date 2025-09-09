// procurar o elemento h2 e alterar o texto
function exibirTextoNaTela(tag , text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;   
};

//função para exibir a mensagem na tela
function exibirMensagemNaTela(params) {
    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
    exibirTextoNaTela('h1', 'Amigo Secreto');
};

exibirMensagemNaTela();


let friendsname = []

//criando função de adicionar amigo na lista
function adicionarAmigo(){
    name = document.getElementById("amigo").value;
    if (name === "") {
        exibirTextoNaTela('h2', 'Please, add a username')
    } else {friendsname.push(name);
        exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
        document.getElementById("amigo").value = "";
        atualizarLista();
    }
};

//função para atualizar a lista de amigos
function atualizarLista(){
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML= "";
    for (let i = 0; i < friendsname.length; i++) { // percorre o array
        let itemLista = document.createElement("li"); // cria um elemento HTML <li>
        itemLista.innerHTML = friendsname[i]; // define o <li> como o atual valor
        listaAtualizada.appendChild(itemLista); // adiciona <li> à lista <ul>
    }
}


// Função para sortear e exibir o amigo secreto
function sortearAmigosSecreto() {
        let sorteio = Math.floor(Math.random()*friendsname.length);

    if (friendsname.length === 0) {
        exibirTextoNaTela('h2', 'A lista está vazia. Adicione amigos antes de sortear.');
    } else{
        let nomeSorteado = friendsname[sorteio]; // pega o nome sorteado
        exibirTextoNaTela('h1' , `${nomeSorteado}`);
    }
    }

// Função para limpar a lista de amigos
function limparLista(){
    friendsname = [];
    document.getElementById("listaAmigos").innnerHTML = "";
    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
    exibirTextoNaTela('h1', 'Amigo Secreto');
    atualizarLista();
}
