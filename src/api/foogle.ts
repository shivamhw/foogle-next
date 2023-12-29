import { MovieSearchQueryParams, MovieSearchResponse, SeriesSearchQueryParams } from "../types/foogle";
import axios from "axios";

axios.defaults.baseURL = process.env.FOOGLE_API_URL
axios.defaults.headers.authorization = "Bearer "+ process.env.FOOGLE_API_KEY
export class Foogle{
    private static instance: Foogle | null = null
    private constructor(){}
    public static getInstance() : Foogle {
        if(this.instance){
            return this.instance;
        }
        return new Foogle()
    }
    public async getMovies(params : MovieSearchQueryParams) {
        const { data } = await axios.get<MovieSearchResponse>("/movies?" + new URLSearchParams(params).toString())
        return data;
    }
    public async getSeries(params : SeriesSearchQueryParams){
        const { data } = await axios.get<MovieSearchResponse>("/series", {
            params:{
                name: params.name,
                season: params.season,
                episode: params.episode
            }
        })
        return data;
    }
}

