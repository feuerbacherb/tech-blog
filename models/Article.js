const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Article model
class Article extends Model {}

// define table columns and configuration
Article.init(
   {
      // id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      // article_id INTEGER NOT NULL
      article_id: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      // category_id INTEGER NOT NULL
      category_id: {
         type: DataTypes.INTEGER,
         allowNull: false
      }
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'article'
   }
);

module.exports = Article;