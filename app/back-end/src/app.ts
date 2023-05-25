import express, { Request, Response } from 'express';
import router from './routers';

const app = express();

app.use(express.json());

app.use(router);

export default app;

