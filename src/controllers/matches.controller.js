const controller = {};

controller.matches = (req, res) => {
  res.json({
    matches: [
      {
        Catar: [
          {
            id: 1,
            partido: "Catar vs Ecuador",
            fecha: "20/11/2022",
            hora: "17:00",
            resultado: "",
          },
          {
            id: 2,
            partido: "Catar vs Senegal",
            fecha: "25/11/2022",
            hora: "14:00",
            resultado: "",
          },
          {
            id: 3,
            partido: "Paises Bajos vs Catar",
            fecha: "30/11/2022",
            hora: "17:00",
            resultado: "",
          },
        ],
        Ecuador: [
          {
            id: 4,
            partido: "Catar vs Ecuador",
            fecha: "20/11/2022",
            hora: "17:00",
            resultado: "",
          },
          {
            id: 5,
            partido: "Paises Bajos vs Ecuador",
            fecha: "25/11/2022",
            hora: "17:00",
            resultado: "",
          },
          {
            id: 6,
            partido: "Ecuador vs Senegal",
            fecha: "29/11/2022",
            hora: "16:00",
            resultado: "",
          },
        ],
        Senegal: [
          {
            id: 8,
            partido: "Senegal vs Paises Bajos",
            fecha: "21/11/2022",
            hora: "17:00",
            resultado: "",
          },
          {
            id: 8,
            partido: "Catar vs Senegal",
            fecha: "25/11/2022",
            hora: "14:00",
            resultado: "",
          },
          {
            id: 9,
            partido: "Ecuador vs Senegal",
            fecha: "29/11/2022",
            hora: "16:00",
            resultado: "",
          },
        ],
        PaisesBajos: [
          {
            id: 10,
            partido: "Senegal vs Paises Bajos",
            fecha: "21/11/2022",
            hora: "17:00",
            resultado: "",
          },
          {
            id: 11,
            partido: "Paises Bajos vs Ecuador",
            fecha: "25/11/2022",
            hora: "17:00",
            resultado: "",
          },
          {
            id: 12,
            partido: "Paises Bajos vs Catar",
            fecha: "29/11/2022",
            hora: "16:00",
            resultado: "",
          },
        ],
        Inglaterra: [
          {
            id: 13,
            partido: "Inglaterra vs Iran",
            fecha: "21/11/2021",
            hora: "17:00",
            resultado: "",
          },
          {
            id: 14,
            partido: "Inglaterra vs Estados Unidos",
            fecha: "25/11/2022",
            hora: "20:00",
            resultado: "",
          },
          {
            id: 15,
            partido: "Gales vs Inglaterra",
            fecha: "29/11/2022",
            hora: "20:00",
            resultado: "",
          },
        ],
      },
    ],
  });
};

module.exports = controller;
