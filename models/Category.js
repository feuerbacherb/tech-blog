const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Categories model
class Categories extends Model {}

// define table columns and configuration
Categories.init(
   {
      // id INT PRIMARY KEY NOT NULL AUTOINCREMENT
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoincrement: true
      },
      // name STRING NOT NULL
      name: {
         type: DataTypes.STRING,
         allowNull: false
      }
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'categories'
   }
);

module.exports = Categories;