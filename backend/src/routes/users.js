import { Router } from "express";
import orderController from "../controllers/orderController.js";
const usersRouter = Router();
usersRouter
  .route("/")
  .get((req, res) => {
    res.send(orderController.getOrders);
  })
  .post((req, res) => {
    res.send(orderController.createOrder);
  });

usersRouter
  .route("/:id")
  .get((req, res) => {
    res.send(orderController.getOrderById);
  })
  .put((req, res) => {
    res.send(orderController.editOrder);
  })
  .delete((req, res) => {
    res.send(orderController.editOrder);
  });
export default usersRouter;
