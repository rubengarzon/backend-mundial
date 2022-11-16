const express = require("express");
const api = express.Router();
const controller = require("../controllers/matches.controller");

api.get("/", controller.matches);

// Exportamos la configuración
module.exports = api;
