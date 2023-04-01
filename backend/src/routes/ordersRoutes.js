import { Router } from "express";
import orderController from "../controllers/orderController.js";
const ordersRoutes = Router();
ordersRoutes.get("/", orderController.getOrders);
ordersRoutes.post("/", orderController.addOrder);

ordersRoutes.put("/:id", orderController.updateOrder);
ordersRoutes.delete("/:id", orderController.deleteOrder);
ordersRoutes.get("/:id", orderController.getOrderById);
export default ordersRoutes;
