import { Router } from 'express';
import nameRouter from './nameRouter';
import IngredientRouter from './ingredients.router';
import randomRouter from './random.router';
import AreaRouter from './area.router';
import categoryRouter from './category.router';

const router = Router();
router.use('/drinks', nameRouter);
router.use('/meals', nameRouter);
router.use('/drinks', IngredientRouter);
router.use('/meals', IngredientRouter);
router.use('/drinks', randomRouter);
router.use('/meals', randomRouter);
router.use('/meals', AreaRouter);
router.use('/meals', categoryRouter);
router.use('/drinks', categoryRouter);


export default router;
