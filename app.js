const express = require("express");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
require("ejs");
require("./server/controllers/databaseConnection");
const routes = require("./server/routes/userRoute");
const app = express();
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/", routes);
app.set("layout", "./layouts/main");

app.listen(8000, () => {
  console.log("Server listen at 8000 port....");
});
