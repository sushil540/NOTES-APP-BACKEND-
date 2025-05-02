import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import configureDB from "./configureDB/configDB.js";
import authMiddleware from "./middleware/authMiddleware.js";
const port = process.env.PORT || 3000

dotenv.config();

configureDB()
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", authMiddleware, noteRoutes);

app.listen(port, ()=>{
    console.log(`Server is starting at ${port}`)
})
