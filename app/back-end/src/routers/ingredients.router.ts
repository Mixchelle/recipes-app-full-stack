import express from 'express';

import IgredientsController from '../controllers/ingredient.controller';

const route = express.Router();

route.get('/ingredients', IgredientsController.getIngredients);

export default route;
