const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { object } = require('joi');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
  },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
  },
    anniversary: {
      type: DataTypes.DATE,
      allowNull: false,
  },
  person_id: {
  type: DataTypes.INTEGER,
  references: {model: 'person', key: 'id'},
  },
},
  {
    hooks: {
    beforeCreate(newUserData) {
        newUserData.password =  bcrypt.hashSync(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

User.sync({
  alter: true
})
module.exports = User;
