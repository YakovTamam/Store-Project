import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import path from "path";

// import routes
import productRoutes from "./routes/productsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadsRoutes from "./routes/uploadsRoutes.js";

// configure dotenv
dotenv.config();
// connect to database
connectDB();

// init express app
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

// using routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/uploads", uploadsRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// static folder
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// error handling middleware
app.use(notFound);
app.use(errorHandler);

// app listen on port
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server started on port ${PORT}`.green.inverse.bold)
);
