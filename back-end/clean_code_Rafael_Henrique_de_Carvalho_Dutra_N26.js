//Exercício 1

app.get('/pedidos', async (req, res) => {
    try{
        const pedidos = await queryAsync("SELECT * FROM pedido")
    res.send({
        sucesso:true,
        dados: pedido,
        total:noticia.length,
    })
}catch(erro){
    res.status(500).json({sucesso: false, messagem:erro.message})
}})

app.get('/pedidos/:id', async (req, res) => {
    try{
        const id= Number(req.params.id)

        if(!Number.isInteger(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem:"id invalido"
            })
        }

        const pedidos = await queryAsync("SELECT * FROM produto WHERE id = ?", [id])

    if (pedidos.length == 0) {
        return res.status(404).json({
            sucesso:false,
            mensagem:"pedido nao encontrado"
        })
    } 
    res.json({
        sucesso:true,
        dados:produto[0]
    })

    }catch(erro){
        res.status(500).json({sucesso:false, mensagem:erro.message})
    }
    
})

//Exercício 2

app.post('/pedidos', async (req, res) => {
    try{
    let { nome_cliente, valor_pedido } = req.body

    if (!nome_cliente||
        !valor_pedido
    ) {
        return res.send(400).json({
            sucesso:false,
            mensagem:'todos os compos são obrigatorios, preencha-os por favor'
        })
    }
     const novoPedido ={
        nome_cliente: nome_cliente,
        valor_pedido: Number(valor_pedido)
     }

    const resultadoFinal = await queryAsync("INSERT INTO pedido SET ?", [novoPedido])


    res.status(201).json({
        sucesso:true,
        mensagem:"pedido adicionado com sucesso",
        id: resultado.inserrId
    })
    }catch(erro){
    res.status(500).json({
        sucesso:false,
        mensagem:erro.message
    })

}
})

//Exercício 3

app.put('/salas/:id', async (req, res) => {
    try{
    const id = number(req.params.id)
    if (!Number.isInteger(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'ID inválido'
      })
    }

    const salasEXistem = await queryAsync("SELECT * FROM sala WHERE id = ?", [id])

    if (salasEXistem.length === 0) {
        return res.status(404).json({
            sucesso:false,
            mensagem:"sala nao encontrada"})

    }
    const {horario_sala, data_sala, filme_sala}= req.body
    const AtualizarEspacos={}
    if(horario_sala)AtualizarEspacos.horario_sala = horario_sala.trim()
    if(data_sala)AtualizarEspacos.data_sala = data_sala.trim()
    if(filme_sala)AtualizarEspacos.filme_sala = filme_sala_sala.trim()

    if(Object.keys(atualizado).length===0){
        return res.status(400).json({
            sucesso:false,
            mensagem:'não ha nada para atualizar'
        })
    }

    await queryAsync("UPDATE sala SET ? WHERE id = ?", [AtualizarEspacos, id])

    res.send({
        sucesso:true,
        mensagem:'sala atualizada com sucesso'
    })
    
}catch(erro){
    res.status(500).json({
        sucesso:false,
        mensagem:erro.message
    })
}
})
        

    /// nao foi feito

app.delete('/salas/:id', async (req, res) => {
    const id = req.params

    const s = await queryAsync("SELECT * FROM sala WHERE id = ?", [id])

    if (s.length === 0) {
        return res.send("nao tem")
    }

    await queryAsync("DELETE FROM sala WHERE id = ?", [id])

    res.send("apagou")
})