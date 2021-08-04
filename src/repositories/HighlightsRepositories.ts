import { Repository, EntityRepository } from "typeorm";
import { Highlight } from "../entities/Highlight"


@EntityRepository(Highlight)
class HighlightsRepositories extends Repository<Highlight> {

}

export { HighlightsRepositories }