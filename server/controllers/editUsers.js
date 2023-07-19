const getConnection = require("./databaseConnection.js");
const editUser = async (req, res) => {
  try {
    getConnection.query(
      "SELECT * FROM users WHERE id=? ",
      [req.params.id],

      (err, rows) => {
        if (err) {
          console.log("Error retrieving data from the table:", err);
        } else {
          res.render("editUser", { rows });
          console.log("The data from the table:\n", rows);
        }
      }
    );
  } catch (error) {
    console.log("An error occurred during the query execution:", error);
  }
};
module.exports = editUser;
