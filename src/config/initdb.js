import dotenv from 'dotenv';
import sequelize from './database';
import User from '../models/user';
import Article from '../models/article';

dotenv.config();
const notProduction = process.env.NODE_ENV !== 'production';

sequelize
  .authenticate()
  .then(() => User.sync({ alter: notProduction }))
  .then(() => Article.sync({ alter: notProduction }))
  .then(() => {
    console.log('Connected!');
    process.exit(0);
  })
  .catch((error) => {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  });
