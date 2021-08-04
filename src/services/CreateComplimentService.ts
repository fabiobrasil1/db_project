import { getCustomRepository } from "typeorm"
import { Highlight } from "../entities/Highlight";
import { User } from "../entities/User";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { HighlightsRepositories } from "../repositories/HighlightsRepositories";
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

            const highlightsRepositories = getCustomRepository(HighlightsRepositories);

            if(complimentcount >= 2){
                const highlight = await highlightsRepositories.create({
                    highlights: "parabéns pelo desempenho",
                    message: "",
                    user_highlights: user_receiver 
                })   
                await highlightsRepositories.save(highlight);


            }

            await complimentsRepositories.save(compliment);

            return compliment;
    }

}


export { CreateComplimentService }