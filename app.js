// Utilizar funcionalidades del Ecmascript 6
"use strict";

// Cargar modulos de node para crear servidor
const express = require("express");
const index = require("./src/routes/index.routes");
const api = require("./src/routes/api.routes");
const teams = require("./src/routes/teams.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// RUTAS
app.use("/", index);
app.use("/api", api);
app.use("/api/teams", teams);

app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), () => {
  console.log("Example app listening on port" + app.get("puerto"));
});

// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;
