import express, { Request, Response } from 'express';
import IngredientRouter from './routers/ingredients.router';
import RandomRouter from './routers/random.router';

const app = express();

app.use(express.json());

app.use('/drinks', IngredientRouter);
app.use('/drinks', RandomRouter);

app.use('/meals', IngredientRouter);
app.use('/meals', RandomRouter);

export default app;

