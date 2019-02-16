import Sequelize from 'sequelize';
import sequelize from '../config/database';
import User from './user';

const Article = sequelize.define('article', {
  title: { type: Sequelize.STRING, allowNull: false },
  content: { type: Sequelize.TEXT, allowNull: false },
});

Article.belongsTo(User);

export default Article;
