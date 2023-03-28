import express, { json } from "express";
import cors from "cors";
import orderRouter from "./routes/orders.js";
const app = express();

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(json());
//routes
app.use("/api/orders", orderRouter);
// app.use("/api/orders", usersRouter);

//export app
export default app;
