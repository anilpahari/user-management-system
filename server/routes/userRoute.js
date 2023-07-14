const express = require("express");
const view = require("../controllers/viewControllers");
const routes = express.Router();

routes.get("/", view);

module.exports = routes;
