'use client'
import { FileBox } from "@/components/Filebox"
import { FoogleMovieResponse, MovieSearchResponse } from "@/types/foogle"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Result() {
    const data = useSearchParams()
    const movie_name = data.get("movie_name")
    const movie_rel_year = data.get("movie_rel_year")
    const [loading, setLoading] = useState(true)
    const [links, setLinks] = useState<FoogleMovieResponse[]>()
    const init = async () => {
        const res = await axios.get<MovieSearchResponse>("/api/search/movie", {
            params: {
                movie_name,
                movie_rel_year
            }
        })
        console.log(res)
        setLinks(res.data.data)
        setLoading(false)
    }
    useEffect(() => {
        init()
    }, [])
    if (loading) {
        return (
            <>
                <h1>Loading</h1>
            </>
        )
    }
    return (
        <>
            <h1>This is result page {movie_name}</h1>
            {links?.map((file) => {
                return <FileBox file={file} />
            })}
        </>
    )
}

