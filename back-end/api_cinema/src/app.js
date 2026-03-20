const express = require('express')
const pool = require('./config/database')

const app = express()

app.use(express.json())
const queryAsync = (sql, values = []) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (err, results) => {
            if (err) reject(err)
            else resolve(results)
        })
    })
}
app.get('/', (req, res) => {
    res.send("API CINEMA")
})

app.get('/filmes', async (req, res) => {
    try {
        const filmes = await queryAsync('SELECT * FROM filme')
        res.json({
            sucesso: true,
            dados: filmes,
            total: filmes.length
        })
    } catch (erro) {
        console.error('Erro ao listar filmes:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao listar filmes',
            erro: erro.message
        })
    }
})

// app.get('/filmes', (req,res) => {
//     pool.query('SELECT * FROM filme', (err, results) =>{
//         res.json(results)
//     })
// })
// app.get('/filmes/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         if (!id || isNaN(id)) {
//             return res.status(400).json({
//                 sucesso: false,
//                 mensagem: 'o id de filme invalido'
//             })
//         }
//         const filme = await queryAsync('SELECT * FROM filme WHERE id = ?', { id })
//         if (filme.length === 0) {
//             return res.status(404).json({
//                 sucesso: false,
//                 mensagem: 'filme nao encontrado'
//             })
//         }
//         res.json({
//             sucesso: true,
//             dados: filmes[0]
//         })
//     } catch (erro) {
//         console.error('Erro ao listar filmes:', erro)
//         res.status(500).json({
//             sucesso: false,
//             mensagem: 'Erro ao listar filmes',
//             erro: erro.message
//         })
//     }
// })

// app.get('/filmes/:id', async (req,res) => {
//     const {id} = req.params

//     pool.query('SELECT * FROM filme WHERE id = ?', [id],(err, results) =>{
//         res.json(results)
//     })
// })

app.get('/filmes/:id', async (req, res) => {
    try {
        const { id } = req.params

        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID de filme inválido'
            })
        }

        const filme = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])

        if (filme.length === 0) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Filme não encontrado'
            })
        }

        res.json({
            sucesso: true,
            dados: filme[0]
        })
    } catch (erro) {
        console.error('Erro ao buscar filme: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao buscar o filme',
            erro: erro.message
        })
    }
})

app.post('/filmes', async (req, res) => {
    try {
        const { titulo, genero, duracao, classificacao, data_lancamento } = req.body
        if (!titulo || !genero || !duracao || titulo == '') {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'titulo, genero e duração são obrigatorios'
            })
        }
        if (typeof duracao !== 'number' || duracao <= 0) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Duração deve ser um número positivo'
            })
        }
        const novoFilme = {
            titulo: titulo.trim(),
            genero: genero.trim(),
            duracao: duracao,
            classificacao: classificacao || null,
            data_lancamento: data_lancamento || null
        }
        const resultado = await queryAsync('INSERT INTO filme SET ?', [novoFilme])

        res.status(201).json({
            sucesso: true,
            mensagem: 'filme criado com sucesso',
            id: resultado.insertId
        })
    } catch (erro) {
        console.error('Erro ao listar filmes:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao listar filmes',
            erro: erro.message
        })

    }
})

app.put('/filmes/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { titulo, genero, duracao, classificacao, data_lancamento } = req.body
        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'o id de filme invalido'
            })
        }
        const filmeExist = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])
        if (filmeExist.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'filme nao encontrado'
            })
        }


        const filmeAtualizado = {}

        if (titulo !== undefined) filmeAtualizado.titulo = titulo.trim()
        if (genero !== undefined) filmeAtualizado.genero = genero.trim()
        if (duracao !== undefined) {
            if (typeof duracao !== 'number' || duracao <= 0)
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'duração deve ser um numero positivo'
                })

            filmeAtualizado.duracao = duracao
        }
        if (classificacao !== undefined) filmeAtualizado.classsificao = classificacao.trim()
        if (data_lancamento !== undefined) filmeAtualizado.data_lancamento = data_lancamento.trim()

        if (Object.keys(filmeAtualizado).length === 0) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'nenhum campo para atualizar'
            })

        }

        await queryAsync('UPDATE filme SET ? WHERE id = ?', [filmeAtualizado, id])
        res.json({
            sucesso: true,
            mensagem: 'filme atualizado!'
        })

    } catch (erro) {
        console.error('Erro ao atualizar filme', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao atualizar filme',
            erro: erro.mensage
        })

    }
})

app.delete('/filmes/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'o id de filme invalido'
            })
        }
        const filmeExist = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])
        if (filmeExist.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'filme nao enco'
            })
        }
        await queryAsync('DELETE FROM filme WHERE id = ?', [id])
        res.json({
            sucesso: true,
            mensagem: 'filme apagado com sucesso'
        })

    } catch (erro) {
        console.error('erro ao apagar filme', erro)
        res.status(500)({
            sucesso: false,
            mensagem: 'erro ao apagar o filme',
            erro: erro.message
        })

    }
})

app.get('/salas', async (req, res) => {
    try {
        const salas = await queryAsync('SELECT * FROM sala')
        res.json({
            sucesso: true,
            dados: salas

        })
    } catch (erro) {
        console.error('Erro ao listar filmes:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao encontrar as salas',
            erro: erro.message
        })
    }
})



app.get('/salas/:id', async (req, res) => {
    try {
        const { id } = req.params

        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID de sala inválido'
            })
        }

        const salas = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])

        if (salas.length === 0) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'sala não encontrada'
            })
        }

        res.json({
            sucesso: true,
            dados: salas[0]
        })
    } catch (erro) {
        console.error('Erro ao buscar sala: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao buscar sala',
            erro: erro.message
        })
    }
})


app.post('/salas', async (req, res) => {
    try {
        const { nome, capacidade } = req.body
        if (!nome || !capacidade) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'nome e capacidade são informacoes obrigatorias'
            })
        }

        const novaSala = {
            nome: nome.trim(),
            capacidade: capacidade,

        }
        const resultado = await queryAsync('INSERT INTO sala SET ?', [novaSala])

        res.status(201).json({
            sucesso: true,
            mensagem: 'sala criada com sucesso',
            id: resultado.insertId
        })
    } catch (erro) {
        console.error('Erro ao listar salas:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao listar salas',
            erro: erro.message
        })

    }
})

app.put('/salas/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { nome, capacidade } = req.body
        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'o id de sala invalido'
            })
        }
        const salaExiste = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])
        if (salaExiste.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'sala nao encontrado'
            })
        }


        const salaAtualizado = {}

        if (nome !== undefined) salaAtualizado.nome = nome.trim()
        
        

        if (capacidade !== undefined) {
            if (typeof capacidade !== 'number' || capacidade <= 0)
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'capacidade deve ser um numero positivo'
                })
                salaAtualizado.capacidade = capacidade
        }

          

        await queryAsync('UPDATE sala SET ? WHERE id = ?', [salaAtualizado, id])
        res.json({
            sucesso: true,
            mensagem: 'sala atualizada!'
        })

    } catch (erro) {
        console.error('Erro ao atualizar a sala', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao atualizar sala',
            erro: erro.mensage
        })

    }
})
app.delete('/salas/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'o id de sala invalido'
            })
        }
        const salaExiste = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])
        if (salaExiste.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'sala nao encontrada'
            })
        }
        await queryAsync('DELETE FROM sala WHERE id = ?', [id])
        res.json({
            sucesso: true,
            mensagem: 'sala apagada com sucesso'
        })

    } catch (erro) {
        console.error('erro ao apagar sala', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'erro ao apagar sala',
            erro: erro.message
        })

    }
})









app.get('/sessoes', async (req, res) => {
    try {
        const sessoes = await queryAsync('SELECT * FROM sessao')
        res.json({
            sucesso: true,
            dados: sessoes

        })
    } catch (erro) {
        console.error('Erro ao listar sessoes:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao encontrar as sessoes',
            erro: erro.message
        })
    }
})



app.get('/sessoes/:id', async (req, res) => {
    try {
        const { id } = req.params

        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID de sessao inválido'
            })
        }

        const salas = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])

        if (salas.length === 0) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'sala não encontrada'
            })
        }

        res.json({
            sucesso: true,
            dados: salas[0]
        })
    } catch (erro) {
        console.error('Erro ao buscar sala: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao buscar sala',
            erro: erro.message
        })
    }
})


app.post('/salas', async (req, res) => {
    try {
        const { nome, capacidade } = req.body
        if (!nome || !capacidade) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'nome e capacidade são informacoes obrigatorias'
            })
        }

        const novaSala = {
            nome: nome.trim(),
            capacidade: capacidade,

        }
        const resultado = await queryAsync('INSERT INTO sala SET ?', [novaSala])

        res.status(201).json({
            sucesso: true,
            mensagem: 'sala criada com sucesso',
            id: resultado.insertId
        })
    } catch (erro) {
        console.error('Erro ao listar salas:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao listar salas',
            erro: erro.message
        })

    }
})

app.put('/salas/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { nome, capacidade } = req.body
        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'o id de sala invalido'
            })
        }
        const salaExiste = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])
        if (salaExiste.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'sala nao encontrado'
            })
        }


        const salaAtualizado = {}

        if (nome !== undefined) salaAtualizado.nome = nome.trim()
        
        

        if (capacidade !== undefined) {
            if (typeof capacidade !== 'number' || capacidade <= 0)
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'capacidade deve ser um numero positivo'
                })
                salaAtualizado.capacidade = capacidade
        }

          

        await queryAsync('UPDATE sala SET ? WHERE id = ?', [salaAtualizado, id])
        res.json({
            sucesso: true,
            mensagem: 'sala atualizada!'
        })

    } catch (erro) {
        console.error('Erro ao atualizar a sala', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao atualizar sala',
            erro: erro.mensage
        })

    }
})
app.delete('/salas/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'o id de sala invalido'
            })
        }
        const salaExiste = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])
        if (salaExiste.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'sala nao encontrada'
            })
        }
        await queryAsync('DELETE FROM sala WHERE id = ?', [id])
        res.json({
            sucesso: true,
            mensagem: 'sala apagada com sucesso'
        })

    } catch (erro) {
        console.error('erro ao apagar sala', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'erro ao apagar sala',
            erro: erro.message
        })

    }
})

module.exports = app