const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/produtoController');
const multer = require('multer');
const multerConfig= require('../config/multer')

router.get('/', ProdutoController.listar);
router.get('/:id', ProdutoController.buscarPorId);
router.post('/', ProdutoController.cadastrar);
router.put('/:id', ProdutoController.atualizar);
router.delete('/:id', ProdutoController.deletar);

router.post("/posts",multer(multerConfig).single('file'),(req, res)=>{
    return res.json({hello:"rocket"})
})

module.exports = router;