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
        banderaLocal:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1200px-Flag_of_Qatar.svg.png",
        banderaVisitante:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1200px-Flag_of_Ecuador.svg.png",
      },
      {
        id: 2,
        partido: "Inglaterra - Iran",
        fecha: "21/11/2022",
        hora: "14:00",
        grupo: "B",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png",
        banderaVisitante:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/1200px-Flag_of_Iran.svg.png",
      },
      {
        id: 3,
        partido: "Senegal - Paises Bajos",
        fecha: "21/11/2022",
        hora: "17:00",
        grupo: "B",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1200px-Flag_of_Senegal.svg.png",
        banderaVisitante:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
      },
      {
        id: 4,
        partido: "Estados Unidos - Gales",
        fecha: "21/11/2022",
        hora: "20:00",
        grupo: "B",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
        banderaVisitante:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Wales_%28variant%29.svg/1200px-Flag_of_Wales_%28variant%29.svg.png",
      },
    ],
  });
};

module.exports = controller;
