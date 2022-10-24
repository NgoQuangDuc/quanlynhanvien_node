'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Group_role.init({

    group_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Group_role',
  });
  return Group_role;
};