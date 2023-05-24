import express from 'express';

import * as randomController from '../controllers/random.controller';

const randomRouter = express.Router();

randomRouter.get('/random', async (req, res) => randomController.getRandom(req, res));

export default randomRouter;