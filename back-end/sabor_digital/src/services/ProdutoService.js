const { atualizar } = require('../controllers/produtoController')
const produtoRepository = require('../repositories/produtoRepository')

class produtoService {
    async listarProdutos() {

        const listaProdutos = await produtoRepository.listarTodosProdutos()
        return {
            sucesso: true,
            dados: listaProdutos
        }


    }

    async buscarProdutoPorId(id) {
        if (!id || isNaN(id)) {
            throw {
                status: 400,
                mensagem: "id inválido"
            }
        }

        const produto = await produtoRepository.buscarPorId(id)
        if (!produto) {
            throw {
                status: 404,
                mensagem: "produto não encontrado"
            }
        }
        return {
            sucesso: true,
            dados: produto
        }
    }
    async cadastrarProduto(dados) {
        const { nome, descricao, preco, categoria, disponivel } = dados
        if (!nome || !descricao || preco === undefined) {
            throw {
                status: 400,
                mensagem: "nome, descrição ou preco são obrigatórios"
            }
        }
        if (typeof preco !== 'number' || preco <= 0) {
            throw {
                status: 400,
                mensagem: 'preco deve ser um NÚMERO positivo'
            }
        }
        const novoProduto = {
            nome: nome.trim(),
            descricao: descricao.trim(),
            preco,
            categoria: categoria || null,
            disponivel: disponivel ?? true

        }
        const id = await produtoRepository.cadastrarNovoProduto(novoProduto)
        return {
            sucesso: true,
            mensagem: "produto cadastrado com sucesso",
            id: id
        }
    }
    async atualizarProduto(id, dados) {
        if (!id || isNaN(id)) {
            throw {
                status: 400,
                mensagem: 'id inválido'
            }
        }
        const produto = await produtoRepository.buscarProdutoPorId(id)
        if (!produto) {
            throw {
                status: 400,
                mensagem: "produto nao encontrado"
            }
        }
        const produtoAtualizado = {}
        const { nome, descricao, preco, categoria, disponivel } = dados
        if (nome !== undefined) produtoAtualizado.nome = nome.trim()
        if (descricao !== undefined) produtoAtualizado.descricao = descricao.trim()
        if (preco !== undefined) {
            if (typeof preco !== "number" || preco <= 0) {
                throw {
                    status: 400,
                    mensagem: "preco deve ser um numero maior que zero"
                }
            }
            produtoAtualizado.preco = preco
        }
        if (categoria !== undefined) produtoAtualizado.categoria = categoria

        if (disponivel !== undefined) produtoAtualizado.disponivel = disponivel

        if (Object.keys(produtoAtualizado).length === 0) {
            throw {
                status: 400,
                mensagem: "nenhum dado para ser atualizado"
            }
        }

        await produtoRepository.atualizarProdutoPorId(id, produtoAtualizado)
        return{
            sucesso:true,
            mensagem:"produto atualizado com sucesso"
        }
    }
    async deletarProduto(id){
        if(!id || isNaN(id)){
            throw{status:400,
                mensagem:"id invalido"
            }
        }
        const produto = await produtoRepository.buscarPorId(id)
        if(!produto){
            throw{
                status: 404,
                mensagem:"produto nao encontrado"
            }
        }
        await produtoRepository.deletarProdutoPorId(id)
        return{
            sucesso: true,
            mensagem: "produto apagado com sucesso"
        }
    }
}

module.exports = new produtoService()