import { request, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserConstroller";
import { CreateTagController } from "./controllers/CreateTagController";
import{ ensureAdmin } from "./middlewares/ensureAdmin";
import { AutenticateUserController } from "./controllers/AuthenticateUsercontroller";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const autenticateUsercController = new AutenticateUserController();
const createComplimentController = new CreateComplimentController();

router.use(ensureAdmin);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", autenticateUsercController.handle);
router.post("/compliments", createComplimentController.handle)

export { router };