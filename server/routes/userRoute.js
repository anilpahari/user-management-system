const express = require("express");
const view = require("../controllers/viewControllers");
const searchItem = require("../controllers/searchControllers");
const newUser = require("../controllers/newUser");
const routes = express.Router();

routes.get("/", view);
routes.post("/", searchItem);
routes.get("/newUser", newUser);

module.exports = routes;
