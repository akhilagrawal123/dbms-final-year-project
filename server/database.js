var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'dbms_project',
    user: 'root',
    password: 'Harshit@2580'
});

module.exports = connection;