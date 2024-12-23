import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todoRoute from "../Backend/routes/todo.route.js";
import userRoute from "../Backend/routes/user.route.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
const DB_URI = process.env.MONGODB_URI;
// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"], //Add other headers you want to allow here.
  })
);
//database connection code
try {
  await mongoose.connect(DB_URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Database connection error:", error.message);
}
//route
app.use("/todo", todoRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
