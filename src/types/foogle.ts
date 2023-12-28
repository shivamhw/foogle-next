import { drive_v3 } from "googleapis";

export interface FoogleMovieResponse extends drive_v3.Schema$File{
    cf_worker_link?: string
    player_link?: string
}

export type MovieSearchQueryParams = {
    movie_name: string,
    movie_rel_year: string
}

export type MovieSearchResponse = {
    err  ?: string,
    msg : string
    data?: FoogleMovieResponse[] | [],
    len?: number
};