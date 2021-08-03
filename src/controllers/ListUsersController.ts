
import { Request, response, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";
import { ListUserService } from "../services/ListUsersService";



class ListUsersController{

    async handle(request: Request, reponse: Response){
        const listUserService = new ListUserService();
        const user = await listUserService.execute();

        return response.json(user)


    }

}


export { ListUsersController  }