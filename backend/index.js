import express from "express";
import db from "./db.js";
import dotenv from "dotenv";
import authRoutes from "./routers/authRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use('/',authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}`);
});
