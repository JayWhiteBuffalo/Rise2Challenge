const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout_exercise extends Model {}

Workout_exercise.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      exercise_id: {
        type: DataTypes.JSON_ARRAY,
        allowNull: false,
        references:{
            model:'exercise',
            key:'id'
            }
      },
      workout_id: {
        type: DataTypes.JSON,
        autoIncrement: true,
        allowNull: false,
        references: {
            model: "workout",
            key:"id"
        }
      }
      
    //   exercise_list: {
    //   type: DataTypes.ARRAY(DataTypes.INTEGER),
    //   references: {
    //   model: 'exercise',
    //   key: 'id'
    //   }
    //   }
  },
  {
      //connect exerciseList here
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'workout_exercise'
  }
  );
  
  module.exports = Workout_exercise;
