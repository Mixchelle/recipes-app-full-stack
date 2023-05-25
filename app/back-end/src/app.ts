import express, { Request, Response } from 'express';
import router from './routers';
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

export default app;

