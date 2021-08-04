import { getCustomRepository } from "typeorm"
import { Highlight } from "../entities/Highlight";
import { HighlightsRepositories } from "../repositories/HighlightsRepositories";



class ListHighlightsService {
    async execute (){
        const highlightRepositories = getCustomRepository(HighlightsRepositories);

        const highlight = await highlightRepositories.find({



        })
        return highlight;


    }
}

export { ListHighlightsService }