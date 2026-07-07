import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan";

import authRoutes from "./routes/auth.js"

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(morgan("dev"));

mongoose.connect("mongodb+srv://stanytz953_db_user:r7xwx3sY42uf1dfV@cluster0.qr4vi4m.mongodb.net/?appName=Cluster0")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use("/api", authRoutes);

app.get("/api/users", (_req, res) => {
  res.send("users found");
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
