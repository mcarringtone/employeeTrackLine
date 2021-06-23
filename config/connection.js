const mysql = require('mysql');
const path = require('path');

require('dotenv').config({path: (__dirname + './.env')});

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!")
});

module.exports = connection