import Sequelize from 'sequelize';
import sequelize from '../config/database';

const User = sequelize.define('user', {
  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
});

export default User;
