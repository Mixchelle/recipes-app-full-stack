<<<<<<< HEAD
import express, { Request, Response } from 'express';
import IngredientRouter from './routers/ingredients.router';
import RandomRouter from './routers/random.router';
=======
import express from 'express';
import categoryRouter from './routes/categoryRouter';
>>>>>>> juliaViana-recipes

const app = express();

app.use(express.json());

<<<<<<< HEAD
app.use('/drinks', IngredientRouter);
app.use('/drinks', RandomRouter);

app.use('/meals', IngredientRouter);
app.use('/meals', RandomRouter);

export default app;

=======

app.get('/drinks', categoryRouter);

export default app;
>>>>>>> juliaViana-recipes
