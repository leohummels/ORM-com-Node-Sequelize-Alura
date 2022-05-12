'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nivieis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nivieis.hasMany(models.turmas, {
        foreignKey: 'nivel_id'
      })
     
     
    }
  }
  Nivieis.init({
    descr_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nivieis',
  });
  return Nivieis;
};