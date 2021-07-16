const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Person extends Model {

}

Person.init(
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

        relationship: {
            type: DataTypes.STRING,
            allowNull: false,
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
        special_occasion: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'person',
    }
);

module.exports = Person;
