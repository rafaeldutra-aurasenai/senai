// =============================================================================
// MÉTODO PARA ATUALIZAR PRODUTO NO BANCO
// =============================================================================

const validarExistencia = (resultado, res, tipo) => {
    if (resultado.length === 0) {
        res.status(404).json({
            sucesso: false,
            mensagem: '${tipo} nâo encontrado'
        })
        return false
    }
    return true
}

const validarDados = ({ nome_Produto, valor_Produto }) => {
    if (!nome_Produto || !valor_Produto) {
        return "nome do produto e valor do tal são obrigatorios"
    }
    if (typeof valor_produto !== 'number' || valor_produto <= 0) {
        return "valor do produto invalido"
    }
    return null
}

app.put('/produtos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const dados = req.body

        const produtos = await queryAsync("SELECT * FROM produto WHERE id = ?", [id])

        if (validarExistencia(produto, res, "Produtos")) {
            return
        }
        const erro = validarDados(req.body)
        if (erro) {
            return res.status(400).json({
                sucesso: false,
                mensagem: erro
            })

        }
        if (Object.keys(dados).length === 0) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'nenhum dado enviado'
            })

        }
        await queryAsync("UPDATE produto SET ? WHERE id = ?", [dados, id])
        res.status(200).json({
            sucesso: true,
            mensagem: 'produto atualizado com sucesso'
        })
    } catch (erro) {
        res.status(500).json({
            sucesso: false,
            mensagem: 'erro ao atualizar produto'
        })
    }
})




