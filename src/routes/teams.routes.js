const express = require("express");
const api = express.Router();
const controller = require("../controllers/teams.controller");

api.get("/", controller.teams);

// Exportamos la configuración
module.exports = api;
