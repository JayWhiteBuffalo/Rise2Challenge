const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // //FK to user id
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    workout: {
      type: DataTypes.JSON,
    },
    // exercise_list: {
    // type: DataTypes.ARRAY(DataTypes.INTEGER),
    // references: {
    // model: 'exercise',
    // key: 'id'
    // }
    // }
},
{
    //connect exerciseList here
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout'
}
);

module.exports = Workout;