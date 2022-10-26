const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create our Exercise model
class Exercise extends Model {}

//Create fields/columns for Exercise model
Exercise.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
    ex_name: {
        type: DataTypes.CHAR,
        allowNull: false
        },
    intensity: {
        type: DataTypes.CHAR,
    },
    ex_type: {
        type: DataTypes.CHAR,
        allowNull: false, 
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise'
}
);

module.exports = Exercise;