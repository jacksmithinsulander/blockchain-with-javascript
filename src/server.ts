import express from 'express';
import blockchain from './routes/blockchain-routes.js';
import block from './routes/block-routes.js';
import transaction from './routes/transaction-routes.js';

const app = express();

const PORT: number = parseInt(process.argv[2]);

app.use(express.json());

app.use('/api/v1/blockchain', blockchain);
app.use('/api/v1/block', block);
app.use('/api/v1/transaction', transaction);
//app.use('/api/v1/transactions', transactions);
//app.use('/api/v1/node', node);
//app.use('/api/v1/consensus', consensus);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));