import fetch from 'node-fetch';
import { ApiUrlType } from '../types';

const getAll = async (endpoint: ApiUrlType) => {
  try {
    const response = await fetch(`https://www.the${endpoint}db.com/api/json/v1/1/list.php?i=list`);
    const obj = await response.json();
    return obj;
  } catch (error) {
    console.log(error);
    return 'fetch error';
  }
};

const getByIngredient = async (endpoint: ApiUrlType, ingredient: string) => {
  try {
    const response = await fetch(`https://www.the${endpoint}db.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const obj = await response.json();
    return obj;
  } catch (error) {
    console.log(error);
    return 'fetch error';
  }
};

export default {getAll, getByIngredient}