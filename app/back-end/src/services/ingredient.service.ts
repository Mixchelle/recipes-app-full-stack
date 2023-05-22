
import IngredientModel from '../models/ingredient.model';

const getAll = async () => IngredientModel.getAll();

const getByIngredient = async (ingredient: string) => IngredientModel.getByIngredient(ingredient);

export default {getAll, getByIngredient}
