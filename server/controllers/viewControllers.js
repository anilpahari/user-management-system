const mysql = require("mysql");
const getConnection = require("./databaseConnection");
const view = async (req, res) => {
  await getConnection.query(
    'SELECT * FROM users WHERE status="active" ',
    (err, rows) => {
      //getConnection.release();
      if (!err) {
        res.render("home", { rows });
      }
      console.log("The data from the table:\n", rows);
    }
  );
};
module.exports = view;
