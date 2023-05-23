const express = require('express');
import categoryController from '../controllers/categoryController';


const categoryRouter = express.Router();

categoryRouter.get('/categories', categoryController.getAllCategories)

export default categoryRouter;