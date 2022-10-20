const {Model, DataTypes } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
const sequelize = require('../../config/connection');

//Create our Exercise model
class Image extends Model {}

//Create fields/columns for Exercise model
Image.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
    //references exercise to attach photo to said exercise
    exercise_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'exercise',
            key: 'id'
        }
    },
    isMain: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        }
    },

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'base'
}
);

module.exports = Base;