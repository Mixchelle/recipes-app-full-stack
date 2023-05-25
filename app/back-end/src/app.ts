<<<<<<< HEAD
import express, { Request, Response } from 'express';
import IngredientRouter from './routers/ingredients.router';
import RandomRouter from './routers/random.router';
import router from './routers/category.router';
=======
import express from 'express';
import router from './routers';
import cors from 'cors';
>>>>>>> main-group-01

const app = express();

app.get('/', (_request, response) => {
    response.send();
  });

app.use(express.json());
app.use(cors()); 
app.use(router);

app.use('/drinks', router);

export default app;


