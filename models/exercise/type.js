const {Model, DataTypes } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
const sequelize = require('../../config/connection');

//Create our Exercise model
class Type extends Model {}

//Create fields/columns for Exercise model
Type.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
    name: {
        type: DataTypes.CHAR,
        allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'type'
    }
    );
    
    module.exports = Type;