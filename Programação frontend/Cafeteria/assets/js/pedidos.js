
var divResposta = document.getElementById("resposta")

var inputNome = document.getElementById("nome")

document.addEventListener('DOMContentLoaded', getPedidos)
document.getElementById('botaoEnviar').addEventListener('click', postPedido)

async function getPedidos() {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedidos")
    var resposta = await requisicao.json()

    if (resposta.status === 'error') {
        divResposta.innerHTML = `<p style="color:red">${resposta.message}</p>`;
        return;
    }

    console.log(resposta)

    const linhas = (resposta.data || []).map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.cliente}</td>
            <td>${new Date(item.criado_em).toLocaleDateString()}</td>
            <td>R$ ${parseFloat(item.total || 0).toFixed(2)}</td>
            <td><button onclick="updatePedido(${item.id})" class="button button-edit">Visualizar</button></td>
            <td><button onclick="deletePedido(${item.id})" class="button button-deletar">Deletar</button></td>
        </tr>
    `).join("");

    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="6"><center>Pedidos Cadastrados</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Data</th>
                    <th>Total</th>
                    <th colspan="2">Ações</th>
                </tr>
            </thead>
            <tbody>
                ${linhas || '<tr><td colspan="6"><center>Nenhum pedido encontrado</center></td></tr>'}
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
