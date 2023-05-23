import { Router } from 'express';
import nameRouter from './nameRouter';
import IngredientRouter from './ingredients.router';

const router = Router();
 router.use('/drinks', nameRouter);
 router.use('/meals', nameRouter);
 router.use('/drinks', IngredientRouter);
 router.use('/meals', IngredientRouter);

 export default router;


