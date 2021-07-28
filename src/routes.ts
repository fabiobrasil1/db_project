import { request, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserConstroller";


const router = Router();

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle) 

export { router }