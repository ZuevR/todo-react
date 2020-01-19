const config = require('config');

module.exports = {
  development: {
    username: config.get('userName'),
    password: config.get('password'),
    database: config.get('dbName'),
    host: config.get('host'),
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
  }
};
