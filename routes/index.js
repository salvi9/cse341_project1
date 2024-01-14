const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");

// add routes here
routes.get("/", lesson1Controller.dannyRoute);
routes.get("/narah", lesson1Controller.narahRoute);

module.exports = routes;
