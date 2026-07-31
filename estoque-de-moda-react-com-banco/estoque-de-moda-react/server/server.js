import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import produtosRouter from './routes/produtos.js';

const app = express();

app.use(cors());          // permite que o React (porta 5173) acesse essa API (porta 3001)
app.use(express.json());  // permite receber JSON no corpo das requisições

app.use('/api/produtos', produtosRouter);

app.get('/', (req, res) => {
  res.send('API do Estoque de Moda no ar 🚀');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
