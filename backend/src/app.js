import express from "express";
import cors from "cors";
import orderRoutes from "./routes/ordersRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
const app = express();

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());
//routes
app.use("/api/orders", orderRoutes);
app.use("/api/users", usersRoutes);

//export app
export default app;
