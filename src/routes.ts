import { request, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserConstroller";
import { CreateTagController } from "./controllers/CreateTagController";
import{ ensureAdmin } from "./middlewares/ensureAdmin";
import { AutenticateUserController } from "./controllers/AuthenticateUsercontroller";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from  "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListHighlightsController } from "./controllers/ListHighLightsConotroller";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const autenticateUsercController = new AutenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController(); 
const listUserController = new ListUsersController();
const listHighlightsController = new ListHighlightsController(); 

router.use(ensureAdmin);
router.post("/tags", ensureAuthenticated,  ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", autenticateUsercController.handle);
router.post("/compliments", ensureAuthenticated ,createComplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle );
router.get("/users/compliments/receive",ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle)
router.get("/users", ensureAuthenticated, listUserController.handle);
router.get("/highlights", listHighlightsController.handle)

export { router };