
import { Request, Response} from "express"
import { ListHighlightsService } from "../services/ListHighlightsService"

class ListHighlightsController {
    async handle(request: Request, response: Response) {
        const listHighlightsService = new ListHighlightsService()
        
        const highlight   = await listHighlightsService.execute();

        return response.json(highlight);
    }

}

export { ListHighlightsController }



