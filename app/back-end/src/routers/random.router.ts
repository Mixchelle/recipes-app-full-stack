import express from 'express';

import * as randomController from '../controllers/random.controller';

const route = express.Router();

route.get('/random', async (req, res) => randomController.getRandom(req, res));

export default route;