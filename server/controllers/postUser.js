require("./newUser");
const getConnection = require("./databaseConnection");
const submitUser = async (req, res) => {
  const { first_name, last_name, email, phone, comment } = req.body;

  await getConnection.query(
    "INSERT INTO users  (first_name,last_name,email,phone,comments)Values(?,?,?,?,?)",
    [first_name, last_name, email, phone, comment],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return;
      } else {
        res.render("addUser", { msg: "User added sucessfully..." });
      }
    }
  );
};
module.exports = submitUser;
