// Criando o contador de cadastros
var contadorItem = 0;

function cadastrar() {

    // Pegando valores dos inputs
    let nome = document.getElementById("nomeInput").value;
    let email = document.getElementById("emailInput").value;
    let ra = document.getElementById("raInput").value;
    let telefone = document.getElementById("telefoneInput").value;
    let turma = document.getElementById("turmaInput").value;

    // Verifica se algum campo está vazio
    if(nome === "" || email === "" || ra === "" || telefone === "" || turma === ""){
        alert("Preencha todos os campos!");
        return;
    }

    // Incrementando contador
    contadorItem++;

    // Salvando o ID fixo daquele cadastro
    let idAtual = contadorItem;

    // Criando container do cadastro
    let novoItem = document.createElement("div");
    novoItem.setAttribute("id", idAtual);
    novoItem.style.border = "1px solid #000";
    novoItem.style.padding = "10px";
    novoItem.style.marginBottom = "10px";

    // Inserindo conteúdo
    novoItem.innerHTML = `
        ${idAtual} - Cadastro <br>
        Nome: ${nome} <br>
        Email: ${email} <br>
        RA: ${ra} <br>
        Telefone: ${telefone} <br>
        Turma: ${turma} <br>
    `;

    // Criando botão remover
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

    botaoRemover.onclick = function() {
        remover(idAtual);
    };

    novoItem.appendChild(botaoRemover);

    document.getElementById("lista").appendChild(novoItem);

    // Limpando campos
    document.getElementById("nomeInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("raInput").value = "";
    document.getElementById("telefoneInput").value = "";
    document.getElementById("turmaInput").value = "";
}

function remover(itemLista){
    var item = document.getElementById(itemLista);
    if(item){
        item.remove();
    }
}
