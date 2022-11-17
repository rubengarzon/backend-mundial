const controller = {};

controller.teams = (req, res) => {
  res.json({
    teams: [
      {
        id: 1,
        nombre: "Catar",
        grupo: "A",
        bandera: "https://cdn-icons-png.flaticon.com/512/197/197618.png",
      },
      {
        id: 2,
        nombre: "Ecuador",
        grupo: "A",
        bandera:
          "https://static.vecteezy.com/system/resources/previews/011/571/449/original/circle-flag-of-ecuador-free-png.png",
      },
      {
        id: 3,
        nombre: "Senegal",
        grupo: "A",
        bandera:
          "https://cdn.countryflags.com/thumbs/senegal/flag-round-250.png",
      },
      {
        id: 4,
        nombre: "Paises Bajos",
        grupo: "A",
        bandera:
          "https://static.vecteezy.com/system/resources/previews/011/571/464/non_2x/circle-flag-of-netherlands-free-png.png",
      },
      {
        id: 5,
        nombre: "Inglaterra",
        grupo: "B",
        bandera:
          "https://cdn3.iconfinder.com/data/icons/50-flags-of-the-world-circular-shape-2/60/Circular_world_Flag_143-512.png",
      },
      {
        id: 6,
        nombre: "Irán",
        grupo: "B",
        bandera: "https://vectorflags.s3.amazonaws.com/flags/ir-circle-01.png",
      },
      {
        id: 7,
        nombre: "EEUU",
        grupo: "B",
        bandera:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png",
      },
      {
        id: 8,
        nombre: "Gales",
        grupo: "B",
        bandera:
          "https://vectorflags.s3.amazonaws.com/flags/uk-wl-circle-01.png",
      },
      {
        id: 9,
        nombre: "Argentina",
        grupo: "C",
        bandera:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2560px-Flag_of_Argentina.svg.png",
      },
      {
        id: 10,
        nombre: "Arabia Saudita",
        grupo: "C",
        bandera: "https://vectorflags.s3.amazonaws.com/flags/sa-circle-01.png",
      },
      {
        id: 11,
        nombre: "México",
        grupo: "C",
        bandera:
          "https://www.citypng.com/public/uploads/small/116568126904i9yixnrjrxiiayvjuolpzyxesgwjky9izlbg0zznpmtnb9lnbsyqcyswlkagk1pozz3c6wobex9jd5ohrwf6kxpnikyg96osiep.png",
      },
      {
        id: 12,
        nombre: "Polonia",
        grupo: "C",
        bandera:
          "https://cdn2.iconfinder.com/data/icons/world-flag-2/30/13-512.png",
      },
      {
        id: 13,
        nombre: "Francia",
        grupo: "D",
        bandera: "https://cdn-icons-png.flaticon.com/512/197/197560.png",
      },
      {
        id: 14,
        nombre: "Australia",
        grupo: "D",
        bandera:
          "https://markblasdale.com/wp-content/uploads/2018/09/Australia-Flag-Round-PNG.png",
      },
      {
        id: 15,
        nombre: "Dinamarca",
        grupo: "D",
        bandera: "https://cdn-icons-png.flaticon.com/512/197/197565.png",
      },
      {
        id: 16,
        nombre: "Túnez",
        grupo: "D",
        bandera:
          "https://cdn4.iconfinder.com/data/icons/material-circular-world-flags/180/circle_tunisia_flag_nation_country-512.png",
      },
      {
        id: 17,
        nombre: "España",
        grupo: "E",
        bandera: "https://cdn-icons-png.flaticon.com/512/323/323365.png",
      },
      {
        id: 18,
        nombre: "Costa Rica",
        grupo: "E",
        bandera: "https://cdn-icons-png.flaticon.com/512/197/197506.png",
      },
      {
        id: 19,
        nombre: "Alemania",
        grupo: "E",
        bandera:
          "https://pngimage.net/wp-content/uploads/2018/06/germany-flag-icon-png-5.png",
      },
      {
        id: 20,
        nombre: "Japón",
        grupo: "E",
        bandera:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Japanese_flag_rounded.svg/2048px-Japanese_flag_rounded.svg.png",
      },
      {
        id: 21,
        nombre: "Bélgica",
        grupo: "F",
        bandera: "https://vectorflags.s3.amazonaws.com/flags/be-circle-01.png",
      },
      {
        id: 22,
        nombre: "Canadá",
        grupo: "F",
        bandera:
          "https://freepngdesign.com/content/uploads/images/canada-flag-3925.png",
      },
      {
        id: 23,
        nombre: "Marruecos",
        grupo: "F",
        bandera:
          "https://flagdownload.com/wp-content/uploads/Flag_of_Morocco_Flat_Round-2048x2048.png",
      },
      {
        id: 24,
        nombre: "Croacia",
        grupo: "F",
        bandera: "https://vectorflags.s3.amazonaws.com/flags/hr-circle-01.png",
      },
      {
        id: 25,
        nombre: "Brasil",
        grupo: "G",
        bandera:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Brazilian_flag_icon_round.svg/1200px-Brazilian_flag_icon_round.svg.png",
      },
      {
        id: 26,
        nombre: "Serbia",
        grupo: "G",
        bandera:
          "https://cdn.countryflags.com/thumbs/serbia/flag-round-250.png",
      },
      {
        id: 27,
        nombre: "Suiza",
        grupo: "G",
        bandera: "https://vectorflags.s3.amazonaws.com/flags/ch-circle-01.png",
      },
      {
        id: 28,
        nombre: "Camerún",
        grupo: "G",
        bandera:
          "https://cdn.countryflags.com/thumbs/cameroon/flag-round-250.png",
      },
      {
        id: 29,
        nombre: "Portugal",
        grupo: "H",
        bandera: "https://vectorflags.s3.amazonaws.com/flags/pt-circle-01.png",
      },
      {
        id: 30,
        nombre: "Ghana",
        grupo: "H",
        bandera: "https://vectorflags.s3.amazonaws.com/flags/gh-circle-01.png",
      },
      {
        id: 31,
        nombre: "Uruguay",
        grupo: "H",
        bandera:
          "https://cdn.countryflags.com/thumbs/uruguay/flag-round-250.png",
      },
      {
        id: 32,
        nombre: "Corea del Sur",
        grupo: "H",
        bandera:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png",
      },
    ],
  });
};
module.exports = controller;
