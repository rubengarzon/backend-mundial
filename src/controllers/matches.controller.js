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
        partido: "Inglaterra 6-2 Iran",
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
        partido: "Senegal 0-2 Paises Bajos",
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
        partido: "Estados Unidos 1-1 Gales",
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
        partido: "Argentina 1-2 Arabia S.",
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
        partido: "Dinamarca 0-0 Tunez",
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
        partido: "México 0-0 Polonia",
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
        partido: "Francia 4-1 Australia",
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
        partido: "Marruecos 0-0 Croacia",
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
        partido: "Alemania 1-2 Japón",
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
        partido: "España 7-0 Costa Rica",
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
        partido: "Bélgica 1-0 Canadá",
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
        partido: "Suiza 1-0 Camerún",
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
      {
        id: 21,
        partido: "Túnez - Australia",
        fecha: "26/11/2022",
        hora: "11:00",
        grupo: "D",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/tun.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/aus.svg",
      },
      {
        id: 22,
        partido: "Polonia - Arabia S.",
        fecha: "26/11/2022",
        hora: "14:00",
        grupo: "C",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/pol.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/ksa.svg",
      },
      {
        id: 23,
        partido: "Francia - Dinamarca",
        fecha: "26/11/2022",
        hora: "17:00",
        grupo: "D",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/fra.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/den.svg",
      },
      {
        id: 24,
        partido: "Argentina - México",
        fecha: "26/11/2022",
        hora: "20:00",
        grupo: "C",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/arg.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/mex.svg",
      },
      {
        id: 25,
        partido: "Japón - Costa Rica",
        fecha: "27/11/2022",
        hora: "11:00",
        grupo: "E",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/jpn.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/crc.svg",
      },
      {
        id: 26,
        partido: "Bélgica - Marruecos",
        fecha: "27/11/2022",
        hora: "14:00",
        grupo: "F",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/bel.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/mar.svg",
      },
      {
        id: 27,
        partido: "Croacia - Canadá",
        fecha: "27/11/2022",
        hora: "17:00",
        grupo: "E",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/cro.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/can.svg",
      },
      {
        id: 28,
        partido: "España - Alemania",
        fecha: "27/11/2022",
        hora: "20:00",
        grupo: "E",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/esp.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/ger.svg",
      },
      {
        id: 29,
        partido: "Camerún - Serbia",
        fecha: "28/11/2022",
        hora: "11:00",
        grupo: "G",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/cmr.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/srb.svg",
      },
      {
        id: 30,
        partido: "Corea del Sur - Ghana",
        fecha: "28/11/2022",
        hora: "14:00",
        grupo: "H",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/kor.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/gha.svg",
      },
      {
        id: 31,
        partido: "Brasil - Suiza",
        fecha: "28/11/2022",
        hora: "17:00",
        grupo: "G",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/bra.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/sui.svg",
      },
      {
        id: 32,
        partido: "Portugal - Uruguay",
        fecha: "28/11/2022",
        hora: "20:00",
        grupo: "H",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/por.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/uru.svg",
      },
    ],
  });
};

module.exports = controller;
