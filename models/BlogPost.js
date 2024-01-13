const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init(
  {
/*     id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    }, */
    //// Currently testing UUID instead of auto incremented ID
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      //// Test DataTypes.NOW and see if it works as current date, otherwise find way to add current date
      defaultValue: DataTypes.NOW,
    },
/*     // Might add a "make public" button, but need to have everything else working first.
    isPublic: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }, */
    user_id: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogPost',
  }
);

module.exports = BlogPost;