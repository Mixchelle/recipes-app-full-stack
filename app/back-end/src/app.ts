import express, { Request, Response } from 'express';
import IngredientRouter from './routers/ingredients.router';

const app = express();

app.use(express.json());

app.use('/drinks', IngredientRouter);
app.use('/meals', IngredientRouter);

export default app;

