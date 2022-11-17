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
          "https://upload.wikimedia.org/wikipedia/en/d/dc/Wales_national_football_team_logo.svg",
      },
      {
        id: 5,
        partido: "Argentina - Arabia Saudita",
        fecha: "22/11/2022",
        hora: "11:00",
        grupo: "C",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png",
        banderaVisitante:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png",
      },
      {
        id: 6,
        partido: "Dinamarca - Tunez",
        fecha: "22/11/2022",
        hora: "14:00",
        grupo: "D",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png",
        banderaVisitante:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.svg.png",
      },
      {
        id: 7,
        partido: "México - Polonia",
        fecha: "22/11/2022",
        hora: "17:00",
        grupo: "C",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png",
        banderaVisitante:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png",
      },
      {
        id: 8,
        partido: "Francia - Australia",
        fecha: "22/11/2022",
        hora: "20:00",
        grupo: "D",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
        banderaVisitante:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png",
      },
    ],
  });
};

module.exports = controller;
