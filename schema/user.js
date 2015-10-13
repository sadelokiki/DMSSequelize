'use strict'

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {
    firstname: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.roles, {
          foreignKey: 'UserRole',
          targetKey: 'title',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        });
      }
    }
  });
  return User;
};