import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;

}

class CreateComplimentService {

    async exuecute ( { tag_id, 
        user_sender, 
        user_receiver, 
        message,
    } : IComplimentRequest){
        
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const usersRepositories = getCustomRepository(UsersRepositories);
            if(user_sender === user_receiver){
                throw new Error("Incorrect user Receiver!");
            }


        const userReceiverExist = usersRepositories.findOne(user_receiver);

            if(!userReceiverExist) {
                throw new Error("User Receiver does not exists!")
            }

            const compliment = await complimentsRepositories.create({
                tag_id,
                user_receiver,
                user_sender,
                message

            });
            const complimentcount = await complimentsRepositories.count({
                where: { user_receiver: user_receiver }
            })

           

            if(complimentcount >= 2){
                await usersRepositories.save({
                    id: user_receiver,
                    highlight: true
                })
                   
              


            }

            await complimentsRepositories.save(compliment);

            return compliment;
    }

}


export { CreateComplimentService };
