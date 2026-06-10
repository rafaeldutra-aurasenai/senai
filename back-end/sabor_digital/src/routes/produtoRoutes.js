const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/produtoController');
const uploadUser = require('./middlewares/uploadImagem');


router.get('/', ProdutoController.listar);
router.get('/:id', ProdutoController.buscarPorId);
router.post('/', ProdutoController.cadastrar);
router.put('/:id', ProdutoController.atualizar);
router.delete('/:id', ProdutoController.deletar);




  

router.post("/upload-image", uploadUser.single('imagem'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Upload não realizado. Envie uma imagem PNG ou JPG!"
        });
    }

    return res.json({
        erro: false,
        mensagem: "Upload realizado com sucesso!"
    });
});
  
module.exports = router;