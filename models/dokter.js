'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dokter.init({
    nama: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    umur: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    no_str: DataTypes.BIGINT,
    role: DataTypes.STRING,
    status: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dokter',
  });
  return Dokter;
};