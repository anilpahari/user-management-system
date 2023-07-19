const getConnection = require("./databaseConnection");
const updateUser = async (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;
  const id = req.params.id;

  await getConnection.query(
    "UPDATE users SET first_name=?,last_name=?,email=?,phone=?,comments=? WHERE id=?",
    [first_name, last_name, email, phone, comments, id],
    (err, result) => {
      if (err) {
        console.error("Error Updating data:", err);
        return;
      } else {
        getConnection.query(
          "SELECT * FROM users WHERE id=? ",
          [req.params.id],

          (err, rows) => {
            if (err) {
              console.log("Error retrieving data from the table:", err);
            } else {
              res.render("editUser", {
                rows,
                msg: "Users update sucessfully...",
              });
            }
          }
        );
      }
    }
  );
};
module.exports = updateUser;
