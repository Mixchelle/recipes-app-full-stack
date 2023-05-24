import express from 'express';
import areaController from '../controllers/area.controller';

const AreaRouter = express.Router();

AreaRouter.get('/area', areaController.getByArea);
AreaRouter.get('/areas', areaController.getAll);

export default AreaRouter;
