import express from 'express';
import routes from './routes/index.js';

const app: any = express();
const PORT: number = 5000;

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));