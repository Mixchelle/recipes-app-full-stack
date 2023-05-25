import express from 'express';
import router from './routers';
import cors from 'cors';

const app = express();

app.get('/', (_request, response) => {
    response.send();
  });

app.use(express.json());
app.use(cors()); 
app.use(router);

export default app;


