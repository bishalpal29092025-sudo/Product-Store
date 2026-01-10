import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json()); // Middleware

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});



app.listen(PORT, () => {
  
  console.log(`Server Started at http://localhost:${PORT}`);
});
