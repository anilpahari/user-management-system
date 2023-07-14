const mysql = require("mysql");
require("dotenv").config();
////create connection to db
const getConnection = mysql.createConnection({
  host: process.env.database_host,
  user: process.env.database_user,
  password: process.env.database_password,
  database: process.env.database_name,
});

///connect to db
getConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});
module.exports = getConnection;
