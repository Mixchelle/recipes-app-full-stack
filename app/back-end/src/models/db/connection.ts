import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.MYSQL_ROOT_PASSWORD || '123456',
  database: 'RECIPES_APP'
});

export default connection;