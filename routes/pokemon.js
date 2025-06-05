import express from "express";
import axios from "axios";
import env from "dotenv";

env.config();

const router = express.Router();
const API_URL = process.env.API_URL;

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    // const anotherResponse = await axios.get(`${API_URL}?limit=100`);
    res.render("pages/index", { pokemonList: response.data.results });
  } catch (e) {
    res.status(500).send("Error fetching Pokemon data.");
  }
});
