import express, { Request, Response } from 'express';
import router from './routers';
import IngredientRouter from './routers/ingredients.router';
import RandomRouter from './routers/random.router';
import AreaRouter from './routers/area.router';


const app = express();

app.use(express.json());


app.use(router);

app.use('/meals', AreaRouter);

export default app;

