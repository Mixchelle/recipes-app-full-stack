import { Router } from 'express';
import NameController from '../controllers/searchController';

const router = Router();

router.get('/name?q=', NameController.getAllRecipes);

router.get('/letter', NameController.getRecipesByFirstLetter);

export default router;
