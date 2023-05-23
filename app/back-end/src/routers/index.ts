import { Router } from 'express';
import nameRouter from './nameRouter';
import IngredientRouter from './ingredients.router';
import randomRouter from './random.router'

const router = Router();
 router.use('/drinks', nameRouter);
 router.use('/meals', nameRouter);
 router.use('/drinks', IngredientRouter);
 router.use('/meals', IngredientRouter);
 router.use('/drinks', randomRouter);
 router.use('/meals', randomRouter);

 export default router;


