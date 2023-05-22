import express from 'express';

import {getIngredients} from '../controllers/ingredient.controller';

const route = express.Router();

route.get('/ingredients', getIngredients);

export default route;