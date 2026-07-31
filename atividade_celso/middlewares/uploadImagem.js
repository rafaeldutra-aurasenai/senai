const multer = require('multer'); 

module.exports = multer({ 

    // Configura o destino e o nome do arquivo no disco 
    storage: multer.diskStorage({ 

        destination: (req, file, cb) => { 
            cb(null, './public/upload/users');  
        }, 

        filename: (req, file, cb) => { 

            // Renomeia o arquivo com um timestamp para evitar nomes duplicados 
            cb(null, Date.now().toString() + "_" + file.originalname); 
        } 
    }), 

    // Filtro de segurança para validar a extensão 
    fileFilter: (req, file, cb) => { 
        const extensaoImg = ['image/png', 'image/jpeg', 'image/jpg'].find( 
            formatoAceito => formatoAceito === file.mimetype 
        ); 

        if (extensaoImg) { 
            return cb(null, true); // Aceita o arquivo se for válido 
        } 

        return cb(null, false); // Recusa se a extensão for inválida 
    } 
}); 