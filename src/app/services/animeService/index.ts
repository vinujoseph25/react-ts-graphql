import { apolloClient } from "../../graphql";
import { GET_ANIME_PAGE } from "./queries";
import { GetAnimePage } from "./__generated__/GetAnimePage";

class AnimeServiceClass  {
    async getAnimePage(page:Number, perPage= 20) : Promise<GetAnimePage["Page"]> {
        try {
            const response = await apolloClient.query({
                query : GET_ANIME_PAGE,
                variables : { page, perPage }
            });
            if(!response || !response.data || !response.data.Page){
                throw new Error("Cannot get anime list !");
            }
            return response.data.Page;
        } catch (error) {
            throw error;
        }
    }
}

const AnimeService = new AnimeServiceClass();

export default AnimeService;