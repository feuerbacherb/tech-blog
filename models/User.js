const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the Users model
class Users extends Model {
   //set up method to run on instance data (per user) to check password
   checkPassword(loginPW) {
      return bcrypt.comparySunc(loginPw, this.password);
   }
}

// define table columns and configuration
Users.init(
   {
      // id column
      id: {
         // id INT PRIMARY KEY NOT NULL AUTOINCREMENT
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      // username STRING NOT NULL
      username: {
         type: DataType.STRING,
         allowNull: false
      },
      // email STRING NOT NULL validate
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isEmail: true
         }
      },
      // password STRING NOT NULL validate length
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [4]
         }
      }
   },
   {
      hooks: {
         // set up beforeCreate lifecycle "hook" functionality
         async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
         },
         // set up beforeUpdate lifecycle "hook" functionality
         async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
         }
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'users'
   }
);

module.exports = Users;