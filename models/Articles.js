const { Model, DataType } = require('sequelize');
const sequelize = require('../config/connection');

class Articles extends Model {}

// define table columns and configuration
Articles.init(
   {
      // id INT PRIMARY KEY NOT NULL AUTOINCREMENT
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      // title STRING NOT NULL
      title: {
         type: DataTypes.STRING,
         allowNull: false
      },
      // description TEXT NOT NULL
      description: {
         type: DataTypes.TEXT,
         allowNull: false
      },
      // user_id INTEGER NOT NULL
      user_id: {
         type: DataTypes.INTEGER,
         allowNull: false
      }
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'articles'
   }
);

module.exports = Articles;