'use strict';

// const sequelize = require('../configs/db');
const {
  DataTypes, Model
} = require('sequelize');

const { MainModel, sequelize } = require('../app');

class Bot_pedrao extends MainModel {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

Bot_pedrao.init({
  nome: DataTypes.TEXT
}, {
  sequelize,
  modelName: 'Bot_pedrao',
});

module.exports = Bot_pedrao;