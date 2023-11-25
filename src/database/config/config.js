/*const DB_USER = process.env.DB_USER;
const DB_USERNAME = process.env.DB_USERNAME;

const DB_PASS = process.env.DB_PASS;
*/

module.exports = {
  "development": {
    "username":  "root",
    "password": "123456",
    "database": "rebolucion_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
