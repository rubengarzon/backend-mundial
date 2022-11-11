import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get("/", (req, res) => {
  res.json({
    message: "Bienvenido a la api del mundial",
  });
});

app.get("/api/nationalteams", (req, res) => {
  res.json({
    nationalteams: [
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
    ],
  });
});

app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), () => {
  console.log("Example app listening on port" + app.get("puerto"));
});
