const BASE_URL = "http://localhost:3000"

async function BuscarProdutos() {
    const response = await fetch(`${BASE_URL}/produtos`)
    const dados = await response.json()
    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
    return dados.dados

}

async function criarPedido(cliente, itens) {
    const response = await fetch(`${BASE_URL}/pedidos`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ cliente, itens })
    })
    const dados = await response.json()
    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
    return dados
}

//busca os pedidos que foram inseridos no banco

async function buscarPedidos() {
    const response = await fetch(`${BASE_URL}/pedidos`)
    const dados = await response.json()

    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
    return dados
}
//deletar pedido do banco de dados 
async function deletarPedido(id) {
    const response = await fetch(`${BASE_URL}/pedidos/${id}`, {
        method: "DELETE"
    })
    const dados = await response.json()
    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
    return dados

}
//atualizar o status do pedido para a cozinha 

async function atualizarSenhaPedido(id, novoStatus) {
    const response = await fetch(`${BASE_URL}/pedidos/${id}/status`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ status: novoStatus }),
    })
    const dados = await response.json()
    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
    return dados

}