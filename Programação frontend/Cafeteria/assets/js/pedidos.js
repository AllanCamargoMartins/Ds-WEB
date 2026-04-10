
var divResposta = document.getElementById("resposta")

var inputNome = document.getElementById("nome")

document.addEventListener('DOMContentLoaded', getPedidos)
document.getElementById('botaoEnviar').addEventListener('click', postPedido)

async function getPedidos() {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedidos")
    var resposta = await requisicao.json()

    console.log(resposta)

    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.cliente}</td>
            <td>${item.criado_em}</td>
            <td>${item.total}</td>
            <td><button onclick="deletePedido(${item.id})">Deletar</button></td>
            <td><button onclick="updatePedido(${item.id})">Editar</button></td>
        </tr>
    `).join("");

    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="6"><center>Pedidos Cadastrados</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Data</th>
                    <th>Preço</th>
                    <th colspan="2">Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;
}



async function postPedido() {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedidos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome: inputNome.value })
    })

    var resposta = await requisicao.json()
    console.log(resposta)

    //Limpa o campo
    inputNome.value = ""

    getPedidos()
}


async function deletePedido(id) {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedidos/" + id, {
        method: "DELETE"
    })

    var resposta = await requisicao.json()
    console.log(resposta)

    getPedidos()
}

async function updatePedido(id) {
    // Redireciona para a aba de itens do pedido
    window.location.href = "pedido_itens.html?pedido_id=" + id;
}
