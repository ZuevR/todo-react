'use strict';

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    description: {
      type: DataTypes.STRING(80)
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    }
  }, {
    tableName: 'tasks',
    timestamps: false
  });

  Task.associate = function (models) {
    // associations can be defined here
  };

  return Task;
};
