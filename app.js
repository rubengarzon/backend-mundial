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
    message: "Hello World",
  });
});

app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), () => {
  console.log("Example app listening on port" + app.get("puerto"));
});
