const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Catalog extends Model {}

Catalog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //FK to user id
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'user',
        key:'id'
      }
    },
    workout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        mode: 'workout',
        key: 'id'
      }
    }
},
{
    //connect exercise here
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'catalog'
}
);

module.exports = Catalog;