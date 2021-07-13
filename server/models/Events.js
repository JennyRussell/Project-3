const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Events extends Model {
    
}

Events.init(
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
    allDay: {
    allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
  },
},
  {
    // hooks: {
    // beforeCreate(newUserData) {
    //     newUserData.password =  bcrypt.hash(newUserData.password, 10);
    //     return newUserData;
    //   },
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'events',
  }
);

module.exports = Events;
