const {Model, DataTypes } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
const sequelize = require('../../config/connection');

//Create our Exercise model
class Base extends Model {}

//Create fields/columns for Exercise model
Base.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
        
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'category',
            key: 'id'
        }
    },
    type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'type',
            key: 'id'
        }
    },
    equipment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'equipment',
            key: 'id'
        }
    },
    muscle_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'muscle',
            key: 'id'
        }
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