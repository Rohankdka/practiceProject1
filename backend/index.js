import express, { urlencoded } from "express";
import db from "./db.js";
import dotenv from "dotenv";
import authRoutes from "./routers/authRoutes.js";
import blogRoutes from "./routers/blogRoutes.js";
import cookieParser from "cookie-parser";
import cors from 'cors'

dotenv.config();

const app = express();

app.use(express.json());
app.use(urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors())

app.use('/',authRoutes);
app.use('/',blogRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}`);
});
