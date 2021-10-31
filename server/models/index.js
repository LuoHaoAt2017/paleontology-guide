const { Sequelize, DataTypes, Model } = require('sequelize');

const database = 'gantt';
const username = 'root';
const password = 'LuoHao-123';

const models = {};

const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'mysql',
});

// ============================================
class Gantt extends Model {}

Gantt.init({
  // 在这里定义模型属性
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
}, {
  sequelize: sequelize,
  modelName: 'Gantt',
  tableName: 'Gantt',
});

// 自关联
Gantt.hasOne(Gantt);
Gantt.belongsTo(Gantt, {
  foreignKey: {
    name: 'parent_id',
    type: DataTypes.UUID,
    allowNull: true,
  },
  as: 'parent',
});
// ============================================
class Users extends Model {}

Users.init({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'user'
  },
}, {
  sequelize: sequelize,
  modelName: 'Users',
  tableName: 'Users',
});

models.Gantt = Gantt;
models.Users = Users;

(async function () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize.sync({ force: false }); // 模型同步
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = models;