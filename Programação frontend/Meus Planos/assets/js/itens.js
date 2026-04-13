const API_URL = "http://localhost/meus-planos-api/itens";
const CATEGORIAS_URL = "http://localhost/meus-planos-api/categorias";

const divResposta = document.getElementById("respota") || document.getElementById("resposta");
const selectCategoria = document.getElementById("categoria_id");

// Form inputs
const inputNome = document.getElementById("nome");
const inputPreco = document.getElementById("preco");
const inputImagem = document.getElementById("imagem_url");


document.addEventListener('DOMContentLoaded', () => {
    loadCategorias();
    loadVehicles();

    // Mask for Price Input
    if (inputPreco) {
        inputPreco.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, "");
            value = (value / 100).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            e.target.value = value;
        });
    }
});

document.getElementById('botaoEnviar').addEventListener('click', postVehicle);

async function loadCategorias() {
    try {
        const res = await fetch(CATEGORIAS_URL);
        const data = await res.json();
        
        if (data.status === 'success') {
            selectCategoria.innerHTML = '<option value="">Selecione uma categoria</option>' + 
                data.data.sort((a, b) => a.nome.localeCompare(b.nome)).map(c => `<option value="${c.id}">${c.nome}</option>`).join("");
        }
    } catch (e) {
        console.error("Erro ao carregar categorias", e);
    }
}

async function loadVehicles() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if (data.status === 'error') {
            divResposta.innerHTML = `<p style="color:#ef4444; text-align:center;">${data.message}</p>`;
            return;
        }

        const linhas = (data.data || []).sort((a, b) => a.id - b.id).map(item => `
            <tr>
                <td>
                    <input type="checkbox" class="vehicle-checkbox" data-id="${item.id}">
                </td>
                <td style="color: var(--text-dim); font-size: 0.8rem;">${item.categoria_nome}</td>
                <td class="vehicle-name" style="font-weight: 600;">${item.nome}</td>
                <td style="color: var(--accent); font-weight: 700;">R$ ${parseFloat(item.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>

                <td>
                    <div style="display: flex; gap: 8px;">
                        <button onclick="deleteVehicle(${item.id})" class="btn btn-danger" style="padding: 6px 12px; font-size: 0.7rem; width: auto;">Excluir</button>
                    </div>
                </td>
            </tr>
        `).join("");

        divResposta.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th style="width: 40px;"></th>
                        <th>Categoria</th>
                        <th>Modelo</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    ${linhas || '<tr><td colspan="5" style="text-align:center; padding: 40px; color: var(--text-dim);">Sua garagem está vazia. Adicione seus sonhos acima!</td></tr>'}
                </tbody>
            </table>
        `;

        // Add event listeners for individual checkboxes
        document.querySelectorAll('.vehicle-checkbox').forEach(cb => {
            cb.addEventListener('change', () => toggleRowStyle(cb));
        });
    } catch (error) {
        divResposta.innerHTML = `<p style="color:#ef4444; text-align:center;">Erro ao carregar veículos.</p>`;
    }
}

async function postVehicle() {
    const rawPrice = inputPreco ? inputPreco.value.replace(/\./g, '').replace(',', '.') : 0;
    
    const body = {
        nome: inputNome ? inputNome.value.trim() : "",
        categoria_id: selectCategoria ? selectCategoria.value : "",
        preco: parseFloat(rawPrice) || 0,
        imagem_url: (inputImagem && inputImagem.value) ? inputImagem.value.trim() : ""
    };

    if (!body.nome || !body.categoria_id) {
        alert("Preencha o nome e a categoria!");
        return;
    }

    try {
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        // Reset form
        if (inputNome) inputNome.value = "";
        if (inputPreco) inputPreco.value = "";
        if (inputImagem) inputImagem.value = "";
        
        loadVehicles();
    } catch (e) {
        alert("Erro ao cadastrar veículo.");
    }
}

async function deleteVehicle(id) {
    if (!confirm("Remover este veículo da lista?")) return;
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadVehicles();
}

function toggleRowStyle(checkbox) {
    const row = checkbox.closest('tr');
    if (checkbox.checked) {
        row.classList.add('item-completed');
    } else {
        row.classList.remove('item-completed');
    }
}


