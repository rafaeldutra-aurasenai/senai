const express = require('express')
const router = express.Router()

const produtoRoutes = require('./produtoRoutes')
router.get('/', (req, res) =>{
    res.json({
        mensagem: "API saborDigital",
        versao:"1.0.0",
        arquitetura:"MVC + SOLID"
    })

})
router.use('/produtos',produtoRoutes)

module.exports = router