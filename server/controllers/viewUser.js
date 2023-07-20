const getConnection = require("./databaseConnection");
const viewUser = async (req, res) => {
  getConnection.query(
    "SELECT * FROM users WHERE id =?",
    [req.params.id],
    (err, rows) => {
      if (!err) {
        res.render("viewUser", { rows });
      } else {
        console.log("Error while view an user", err);
      }
    }
  );
};
module.exports = viewUser;
