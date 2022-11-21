const controller = {};

controller.matches = (req, res) => {
  res.json({
    matches: [
      {
        id: 1,
        partido: "Catar 0-2 Ecuador",
        fecha: "20/11/2022",
        hora: "17:00",
        grupo: "A",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/qat.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/ecu.svg",
      },
      {
        id: 2,
        partido: "Inglaterra - Iran",
        fecha: "21/11/2022",
        hora: "14:00",
        grupo: "B",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/eng.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/irn.svg",
      },
      {
        id: 3,
        partido: "Senegal - Paises Bajos",
        fecha: "21/11/2022",
        hora: "17:00",
        grupo: "B",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/sen.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/ned.svg",
      },
      {
        id: 4,
        partido: "Estados Unidos - Gales",
        fecha: "21/11/2022",
        hora: "20:00",
        grupo: "B",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/usa.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/wal.svg",
      },
      {
        id: 5,
        partido: "Argentina - Arabia Saudita",
        fecha: "22/11/2022",
        hora: "11:00",
        grupo: "C",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/arg.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/ksa.svg",
      },
      {
        id: 6,
        partido: "Dinamarca - Tunez",
        fecha: "22/11/2022",
        hora: "14:00",
        grupo: "D",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/den.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/tun.svg",
      },
      {
        id: 7,
        partido: "México - Polonia",
        fecha: "22/11/2022",
        hora: "17:00",
        grupo: "C",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/mex.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/pol.svg",
      },
      {
        id: 8,
        partido: "Francia - Australia",
        fecha: "22/11/2022",
        hora: "20:00",
        grupo: "D",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/fra.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/aus.svg",
      },
      {
        id: 9,
        partido: "Marruecos - Croacia",
        fecha: "23/11/2022",
        hora: "11:00",
        grupo: "F",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/mar.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/cro.svg",
      },
      {
        id: 10,
        partido: "Alemania - Japón",
        fecha: "23/11/2022",
        hora: "14:00",
        grupo: "E",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/ger.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/jpn.svg",
      },
      {
        id: 11,
        partido: "España - Costa Rica",
        fecha: "23/11/2022",
        hora: "17:00",
        grupo: "E",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/esp.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/crc.svg",
      },
      {
        id: 12,
        partido: "Bélgica - Canadá",
        fecha: "23/11/2022",
        hora: "20:00",
        grupo: "F",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/bel.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/can.svg",
      },
      {
        id: 13,
        partido: "Suiza - Camerún",
        fecha: "24/11/2022",
        hora: "11:00",
        grupo: "G",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/sui.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/cmr.svg",
      },
      {
        id: 14,
        partido: "Uruguay - Corea del Sur",
        fecha: "24/11/2022",
        hora: "14:00",
        grupo: "H",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/uru.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/kor.svg",
      },
      {
        id: 15,
        partido: "Portugal - Ghana",
        fecha: "24/11/2022",
        hora: "17:00",
        grupo: "H",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/por.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/gha.svg",
      },
      {
        id: 16,
        partido: "Brasil - Serbia",
        fecha: "24/11/2022",
        hora: "20:00",
        grupo: "G",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/bra.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/srb.svg",
      },
      {
        id: 17,
        partido: "Gales - Iran",
        fecha: "25/11/2022",
        hora: "11:00",
        grupo: "B",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/wal.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/irn.svg",
      },
      {
        id: 18,
        partido: "Catar - Senegal",
        fecha: "25/11/2022",
        hora: "14:00",
        grupo: "A",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/qat.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/sen.svg",
      },
      {
        id: 19,
        partido: "Paises bajos - Ecuador",
        fecha: "25/11/2022",
        hora: "17:00",
        grupo: "A",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/ned.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/ecu.svg",
      },
      {
        id: 20,
        partido: "Inglaterra - Estados Unidos",
        fecha: "25/11/2022",
        hora: "20:00",
        grupo: "B",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/eng.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/usa.svg",
      },
    ],
  });
};

module.exports = controller;
