import { NextRequest } from "next/server";
import { Foogle } from "@/api/foogle"

const f = Foogle.getInstance()
export async function GET (
    req : NextRequest
) {
    const movie_name = req.nextUrl.searchParams.get("movie_name")
    const movie_rel_year =  req.nextUrl.searchParams.get("movie_rel_year")
    const res = await f.getMovies({
        movie_name: movie_name || "",
        movie_rel_year: movie_rel_year || ""
    })
    return new Response(JSON.stringify(res),{
        status: 200,
    })
}