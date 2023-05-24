import connection from './db/connection';

const getAllCategories = async () => {
 const categories = await connection.execute('SELECT * FROM drink_categories');
 return categories;
};

const getByCategory = async (q: string) => {
 const query = 'SELECT * FROM drink_categories WHERE name = ?'
 const category = await connection.execute(query, [q]);
 return category;
};

export default { getAllCategories, getByCategory };