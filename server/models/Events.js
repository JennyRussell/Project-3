const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Events extends Model {
    
}

Event.init(
  {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      all_day: {
          type: Boolean,
          allowNull: true,
      },
      description: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      phone_number: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
      },
      start_date: {
          type: DataTypes.DATE,
          allowNull: false,
      },
      end_date: {
          type: DataTypes.DATE,
          },
      },
  {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'event',
  }
);

module.exports = Event;