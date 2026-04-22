const validarExistencia = (resultado, res, tipo) => {
    if (resultado.length === 0) {
        res.status(404).json({
            sucesso: false,
            menssagem: '${tipo} não encontrado(a)'
        })
        return false
    }
    return true
}

//Exercício 1

app.get('/usuarios', async (req, res) => {
    try {
        const listaUsuarios = await queryAsync("SELECT * FROM usuarios")
        res.send({
            sucesso: true,
            dados: listaUsuarios,
            total: listaUsuarios.length,
        })
    } catch (erro) {
        res.status(500).json({ sucesso: false, messagem: erro.message })
    }
})

app.get('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params

        if (!Number.isInteger(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: "id invalido"
            })
        }

        const pedidos = await queryAsync("SELECT * FROM usuarios WHERE id = ?", [id])

        if (!validarExistencia(usuario, res, "usuarios")) {
            return
        }

        res.json({
            sucesso: true,
            dados: usuario[0]
        })

    } catch (erro) {
        res.status(500).json({ sucesso: false, mensagem: erro.message })
    }

})

//Exercício 2
const validarDados = ({ nome_cliente, valor_pedido }) => {
    if (!nome_cliente || !valor_pedido) {
        return "cliente e valor são obrigatorios"
    }
    if (typeof valor_pedido !== 'number' || valor_pedido <= 0) {
        return "valor invalido"
    }
    return null
}

app.post('/pedidos', async (req, res) => {
    try {
        const erro = validarDados(req.body)
        if (erro) {
            return res.status(400).json({
                sucesso: false,
                mensagem: erro
            })

        }
        const resultadoFinal = await queryAsync("INSERT INTO pedido SET ?", [req.body])


        res.status(201).json({
            sucesso: true,
            mensagem: "pedido adicionado com sucesso"
        })
    } catch (erro) {
        res.status(500).json({
            sucesso: false,
            mensagem: "erro ao adicionar pedido"
        })

    }
})

//Exercício 3

app.put('/salas/:id', async (req, res) => {
    try {
        const { id } = req.params
        const dados = req.body

        const salas = await queryAsync("SELECT * FROM sala WHERE id = ?", [id])

        if (validarExistencia(sala, res, "Sala")) {
            return
        }
        if (Object.keys(dados).length === 0) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'nenhum dado enviado'
            })
        }

        await queryAsync("UPDATE sala SET ? WHERE id = ?", [dados, id])

        res.status(200).json({
            sucesso: true,
            mensagem: 'sala atualizada com sucesso'
        })

    } catch (erro) {
        res.status(500).json({
            sucesso: false,
            mensagem: "erro ao atualizar sala"
        })
    }
})


/// nao foi feito

app.delete('/salas/:id', async (req, res) => {
    try {

        const { id } = req.params

        const salas = await queryAsync("SELECT * FROM sala WHERE id = ?", [id])

        if (!validarExistencia(sala, res, "Sala")) {
            return
        }

        if (Object.keys(salas).length === 0) {
            return res.status(400).json({
                sucesso: false,
                mensagem: "nenhuma sala para apagar"
            })
        }
        await queryAsync("DELETE FROM sala WHERE id = ?", [id])
        res.status(200).json({
            sucesso: true,
            mensagem: "sala removida"
        }
        )
    } catch (erro) {
        res.status(500).json({
            sucesso: false,
            mensagem: "erro ao deletar a sala"
        })
    }

})