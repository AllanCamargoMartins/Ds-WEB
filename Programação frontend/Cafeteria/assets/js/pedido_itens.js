let params = new URLSearchParams(window.location.search);
let pedidoId = params.get('pedido_id');

var divResposta = document.getElementById("resposta");
var selectProduto = document.getElementById("produto_id");
var inputQuantidade = document.getElementById("quantidade");

document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    getPedidoItens();
});

document.getElementById('botaoAdicionar').addEventListener('click', postPedidoItem);

async function carregarProdutos() {
    let req = await fetch("http://localhost/cafeteria-api/produtos");
    let res = await req.json();
    res.data.forEach(p => {
        let opt = document.createElement("option");
        opt.value = p.id;
        opt.text = p.nome + " - R$ " + p.preco;
        selectProduto.add(opt);
    });
}

async function getPedidoItens() {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedido-itens/" + pedidoId);
    var resposta = await requisicao.json();

    const linhas = (resposta.data || []).map(item => `
        <tr>
            <td>${item.id}</td>
            <td>Produto ${item.produto_id}</td>
            <td>${item.quantidade}</td>
            <td>R$ ${item.preco}</td>
            <td><button onclick="deletePedidoItem(${item.id})">Remover</button></td>
        </tr>
    `).join("");
    
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr><th colspan="5"><center>Itens do Pedido #${pedidoId}</center></th></tr>
                <tr><th>ID</th><th>Produto</th><th>Qtd</th><th>Preço</th><th>Opções</th></tr>
            </thead>
            <tbody>${linhas || '<tr><td colspan="5"><center>Vazio</center></td></tr>'}</tbody>
        </table>
    `;
}

async function postPedidoItem() {
    await fetch("http://localhost/cafeteria-api/pedido-itens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            pedido_id: pedidoId,
            produto_id: selectProduto.value,
            quantidade: inputQuantidade.value
        })
    });
    getPedidoItens();
}

async function deletePedidoItem(id) {
    await fetch("http://localhost/cafeteria-api/pedido-itens/" + id, { method: "DELETE" });
    getPedidoItens();
}
