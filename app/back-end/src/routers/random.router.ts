import express from 'express';

import randomController from '../controllers/random.controller';

const randomRouter = express.Router();

randomRouter.get('/random', randomController.getRandom);

export default randomRouter;
