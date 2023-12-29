import { NextRequest } from "next/server";
import { Foogle } from "@/api/foogle"

// todo : how to send non success returns 

const f = Foogle.getInstance()
export async function GET (
    req : NextRequest
) {
    const name = req.nextUrl.searchParams.get("name")
    const season =  req.nextUrl.searchParams.get("season")
    const episode =  req.nextUrl.searchParams.get("episode")
    const res = await f.getSeries({
        name : name || "",
        season: season || "",
        episode : episode || ""
    })
    return new Response(JSON.stringify(res),{
        status: 200,
    })
}
