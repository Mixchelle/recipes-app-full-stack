import { EndpointRequest } from '../types';
import connection from './db/connection';

const getAllCategories = async (url: EndpointRequest) => {
  let query;
  if (url === '/drinks') {
    query = 'SELECT * FROM drinks_categories'
  } else {
    query = 'SELECT * FROM meals_categories'
  }
  const [categories] = await connection.execute(query);
  return categories;
};

const getByCategory = async (url: EndpointRequest, q: string) => {
  let query;
  if (url === '/drinks') {
    query = 'SELECT * FROM drinks_categories WHERE name = ?'
  } else {
    query = 'SELECT * FROM meals_categories WHERE name = ?'
  }
  const [category] = await connection.execute(query, [q]);
  return category;
};

export default { getAllCategories, getByCategory };