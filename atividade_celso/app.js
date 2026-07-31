const express = require('express'); 
const app = express(); 

// Importa o middleware configurado no outro arquivo 
const uploadUser = require('./middlewares/uploadImagem'); 

// Rota POST que recebe a imagem do campo 'imagem' 
app.post("/upload-image", uploadUser.single('imagem'), async (req, res) => { 

    // Se o fileFilter barrou o arquivo ou se nada foi enviado, req.file será vazio 
    if (!req.file) { 
        return res.status(400).json({ 
            erro: true, 
            mensagem: "Erro: Upload não realizado. Envie uma imagem PNG ou JPG!" 
        }); 
    } 

    // Se passou na validação, retorna sucesso r
    return res.json({ 
        erro: false, 
        mensagem: "Upload realizado com sucesso!" 
    }); 
}); 

app.listen(3000, () => { 
    console.log("Servidor iniciado na porta 3000"); 
}); 