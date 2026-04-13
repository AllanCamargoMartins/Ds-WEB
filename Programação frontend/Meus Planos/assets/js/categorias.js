const API_URL = "http://localhost/meus-planos-api/categorias";
const divResposta = document.getElementById("resposta");
const inputNome = document.getElementById("nome");

document.addEventListener('DOMContentLoaded', getCategorias);
document.getElementById('botaoEnviar').addEventListener('click', postCategoria);

async function getCategorias() {
    try {
        const requisicao = await fetch(API_URL);
        const resposta = await requisicao.json();

        if (resposta.status === 'error') {
            divResposta.innerHTML = `<p style="color:#ef4444; text-align:center;">${resposta.message}</p>`;
            return;
        }

        const linhas = (resposta.data || []).sort((a, b) => a.id - b.id).map(item => `
            <tr>
                <td style="width: 40px;">
                    <input type="checkbox" class="category-checkbox" data-id="${item.id}">
                </td>
                <td class="category-name" style="font-weight: 600;">${item.nome}</td>
                <td>
                    <button onclick="deleteCategoria(${item.id})" class="btn btn-danger" style="padding: 8px 16px; width: auto; font-size: 0.8rem;">Deletar</button>
                </td>
            </tr>
        `).join("");

        divResposta.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th style="width: 40px;"></th>
                        <th>CATEGORIA</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    ${linhas || '<tr><td colspan="3" style="text-align:center; padding: 40px;">Nenhuma categoria encontrada. Adicione uma acima.</td></tr>'}
                </tbody>
            </table>
        `;

        // Add event listeners for checkboxes
        document.querySelectorAll('.category-checkbox').forEach(cb => {
            cb.addEventListener('change', () => toggleRowStyle(cb));
        });
    } catch (error) {
        divResposta.innerHTML = `<p style="color:#ef4444; text-align:center;">Erro ao carregar categorias. Verifique se o XAMPP está rodando.</p>`;
    }
}

function toggleRowStyle(checkbox) {
    const row = checkbox.closest('tr');
    if (checkbox.checked) {
        row.classList.add('item-completed');
    } else {
        row.classList.remove('item-completed');
    }
}

async function postCategoria() {
    const nome = inputNome.value.trim();
    if (!nome) return;

    try {
        const requisicao = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome })
        });

        const resposta = await requisicao.json();
        inputNome.value = "";
        getCategorias();
    } catch (error) {
        alert("Erro ao cadastrar categoria.");
    }
}

async function deleteCategoria(id) {
    if (!confirm("Deseja realmente excluir esta categoria?")) return;

    try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        getCategorias();
    } catch (error) {
        alert("Erro ao excluir categoria.");
    }
}