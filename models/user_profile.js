const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User_profile extends Model {}

User_profile.init(
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
    // workout_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'workout',
    //     key: 'id'
    //   }
    // },
    age: {
      type: DataTypes.INTEGER,
      validate : {
        isNumeric: true,
      }
    },
    gender: {
      type: DataTypes.CHAR(10),
      validate: {
        isAlpha: true,
      }
    },
    height: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
  },
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user_profile'
}
);

module.exports = User_profile;
