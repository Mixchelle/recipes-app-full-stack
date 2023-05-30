import express from 'express';
import router from './routers';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.get('/', (_request, response) => {
    response.send();
  });

app.use(express.json());
app.use(router);

export default app;


