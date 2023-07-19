const getConnection = require("./databaseConnection");

const deleteUser = async (req, res) => {
  try {
    await getConnection.query("DELETE FROM users WHERE id=?", [req.params.id]);
    res.redirect("/");
  } catch (err) {
    console.log("Error deleting data from the table:", err);
  }
};

module.exports = deleteUser;
