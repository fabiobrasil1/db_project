import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";



class ListHighlightsService {
    async execute (){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const users = await usersRepositories.find({
            where:{
                highlight: true
            }


        })
        return users;


    }
}

export { ListHighlightsService };
