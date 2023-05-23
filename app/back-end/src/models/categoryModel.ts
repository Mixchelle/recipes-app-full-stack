import connection from './db/connection';

const getAllCategories = async () => {
 const categories = await connection.execute('SELECT * FROM drink_categories');
 return categories;
};
 
export default { getAllCategories };