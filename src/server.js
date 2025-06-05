import { fileURLToPath } from "url";
import express from "express";
import pokemonRoutes from "../routes/pokemon.js";

const app = express();
const PORT = 3000;

const __filename = fileURLTOPath(import.meta.url);

app.set("view engine", "ejs");

app.use("/", pokemonRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
