const controller = {};

controller.matches = (req, res) => {
  res.json({
    matches: [
      {
        id: 1,
        partido: "Catar - Ecuador",
        fecha: "20/11/2022",
        hora: "17:00",
        grupo: "A",
        eliminatoria: "Fase de grupos",
      },
      {
        id: 2,
        partido: "Inglaterra - Iran",
        fecha: "21/11/2022",
        hora: "14:00",
        grupo: "B",
        eliminatoria: "Fase de grupos",
      },
      {
        id: 3,
        partido: "Senegal - Paises Bajos",
        fecha: "21/11/2022",
        hora: "17:00",
        grupo: "B",
        eliminatoria: "Fase de grupos",
      },
      {
        id: 4,
        partido: "Estados Unidos - Gales",
        fecha: "21/11/2022",
        hora: "20:00",
        grupo: "B",
        eliminatoria: "Fase de grupos",
      },
    ],
  });
};

module.exports = controller;
