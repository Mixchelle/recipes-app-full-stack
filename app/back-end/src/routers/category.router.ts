const express = require('express');
import categoryController from '../controllers/categoryController';


const categoryRouter = express.Router();

categoryRouter.get('/categories', categoryController.getAllCategories)
categoryRouter.get('/category', categoryController.getByCategory)

export default categoryRouter;