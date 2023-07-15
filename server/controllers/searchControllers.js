const getConnection = require("./databaseConnection");
const searchItem = async (req, res) => {
  let searchTerm = req.body.search;
  await getConnection.query(
    "SELECT * FROM users WHERE first_name LIKE ? OR last_name LIKE ? OR phone LIKE ?",
    ["%" + searchTerm + "%", "%" + searchTerm + "%", "%" + searchTerm + "%"],

    (err, rows) => {
      //getConnection.release();
      if (!err) {
        res.render("home", { rows });
      }
      console.log("The data from the table:\n", rows);
    }
  );
};
module.exports = searchItem;
