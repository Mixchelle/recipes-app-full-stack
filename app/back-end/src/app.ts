import express, { Request, Response } from 'express';
import IngredientRouter from './routers/ingredients.router';
import RandomRouter from './routers/random.router';
import router from './routers/category.router';

const app = express();

app.get('/', (_request, response) => {
    response.send();
  });

app.use(express.json());

app.use('/drinks', IngredientRouter);
app.use('/drinks', RandomRouter);

app.use('/meals', IngredientRouter);
app.use('/meals', RandomRouter);

app.use('/drinks', router);

export default app;

