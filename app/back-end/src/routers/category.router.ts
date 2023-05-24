const express = require('express');
import categoryController from '../controllers/categoryController';


const router = express.Router();

router.get('/categories', categoryController.getAllCategories)
router.get('/category', categoryController.getByCategory)

export default router;