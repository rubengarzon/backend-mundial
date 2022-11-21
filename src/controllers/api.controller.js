const controller = {};

controller.api = (req, res) => {
  res.json({
    rutas: [
      {
        ruta: "/api",
        descripcion: "Ruta principal de la API",
      },
      {
        ruta: "/api/teams",
        descripcion: "Lista de selecciones del mundial 2022",
      },
      {
        ruta: "/api/matches",
        descripcion: "Partidos del mundial 2022",
      },
    ],
  });
};

module.exports = controller;
