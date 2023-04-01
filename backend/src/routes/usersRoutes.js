import { Router } from "express";
import usersController from "../controllers/usersController.js";
const usersRoutes = Router();
usersRoutes.get("/", usersController.getUsers);
usersRoutes.post("/", usersController.addUser);

usersRoutes.delete("/:id", usersController.deleteUser);
usersRoutes.get("/:id", usersController.getUser);
usersRoutes.put("/:id", usersController.updateUser);
export default usersRoutes;
