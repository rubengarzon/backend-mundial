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
        partido: "Uruguay 0-0 Corea del Sur",
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
        partido: "Portugal 3-2 Ghana",
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
        partido: "Brasil 2-0 Serbia",
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
        partido: "Gales 0-2 Iran",
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
        partido: "Catar 1-3 Senegal",
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
        partido: "Paises bajos 1-1 Ecuador",
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
        partido: "Inglaterra 0-0 Estados Unidos",
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
        partido: "Túnez 0-1 Australia",
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
        partido: "Polonia 2-0 Arabia S.",
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
        partido: "Francia 2-1 Dinamarca",
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
        partido: "Argentina 2-0 México",
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
        partido: "Japón 0-1 Costa Rica",
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
        partido: "Bélgica 0-2 Marruecos",
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
        partido: "Croacia 4-1 Canadá",
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
        partido: "España 1-1 Alemania",
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
        partido: "Camerún 3-3 Serbia",
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
        partido: "Corea del Sur 2-3 Ghana",
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
        partido: "Brasil 1-0 Suiza",
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
        partido: "Portugal 2-0 Uruguay",
        fecha: "28/11/2022",
        hora: "20:00",
        grupo: "H",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/por.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/uru.svg",
      },
      {
        id: 33,
        partido: "Ecuador - Senegal",
        fecha: "29/11/2022",
        hora: "16:00",
        grupo: "A",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/ecu.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/sen.svg",
      },
      {
        id: 34,
        partido: "Paises Bajos - Catar",
        fecha: "29/11/2022",
        hora: "16:00",
        grupo: "A",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/ned.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/qat.svg",
      },
      {
        id: 35,
        partido: "Irán - Estados Unidos",
        fecha: "29/11/2022",
        hora: "20:00",
        grupo: "B",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/irn.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/usa.svg",
      },
      {
        id: 36,
        partido: "Gales - Inglaterra",
        fecha: "29/11/2022",
        hora: "20:00",
        grupo: "B",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/wal.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/eng.svg",
      },
      {
        id: 37,
        partido: "Túnez - Francia",
        fecha: "30/11/2022",
        hora: "16:00",
        grupo: "D",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/tun.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/fra.svg",
      },
      {
        id: 38,
        partido: "Australia - Dinamarca",
        fecha: "30/11/2022",
        hora: "16:00",
        grupo: "D",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/aus.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/den.svg",
      },
      {
        id: 39,
        partido: "Polonia - Argentina",
        fecha: "30/11/2022",
        hora: "20:00",
        grupo: "C",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/pol.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/arg.svg",
      },
      {
        id: 40,
        partido: "Arabia S. - México",
        fecha: "30/11/2022",
        hora: "20:00",
        grupo: "C",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/ksa.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/mex.svg",
      },
      {
        id: 41,
        partido: "Croacia - Bélgica",
        fecha: "01/12/2022",
        hora: "16:00",
        grupo: "F",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/cro.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/bel.svg",
      },
      {
        id: 42,
        partido: "Canadá - Marruecos",
        fecha: "01/12/2022",
        hora: "16:00",
        grupo: "F",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/can.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/mar.svg",
      },
      {
        id: 43,
        partido: "Japón - España",
        fecha: "01/12/2022",
        hora: "20:00",
        grupo: "E",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/jpn.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/esp.svg",
      },
      {
        id: 44,
        partido: "Costa Rica - Alemania",
        fecha: "01/12/2022",
        hora: "20:00",
        grupo: "E",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/crc.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/ger.svg",
      },
      {
        id: 45,
        partido: "Corea del Sur - Portugal",
        fecha: "02/12/2022",
        hora: "16:00",
        grupo: "H",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/kor.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/por.svg",
      },
      {
        id: 46,
        partido: "Ghana - Uruguay",
        fecha: "02/12/2022",
        hora: "16:00",
        grupo: "H",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/gha.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/uru.svg",
      },
      {
        id: 47,
        partido: "Serbia - Suiza",
        fecha: "02/12/2022",
        hora: "20:00",
        grupo: "G",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/srb.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/sui.svg",
      },
      {
        id: 48,
        partido: "Camerún - Brasil",
        fecha: "02/12/2022",
        hora: "20:00",
        grupo: "G",
        eliminatoria: "Fase de grupos",
        banderaLocal:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/cmr.svg",
        banderaVisitante:
          "https://www.qatar2022.qa/themes/custom/qatar_2022/images/flags/bra.svg",
      },
    ],
  });
};

module.exports = controller;
