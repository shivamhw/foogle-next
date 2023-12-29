'use client'
import { FoogleMovieResponse, MovieSearchResponse } from "@/types/foogle"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { FileBox } from "@/components/Filebox"
export default function Sresult() {
    const data = useSearchParams()
    const name = data.get("name")
    const season = data.get("season")
    const episode = data.get("episode")
    const [loading, setLoading] = useState(true)
    const [links, setLinks] = useState<FoogleMovieResponse[]>()
    const init = async () => {
        const res = await axios.get<MovieSearchResponse>("/api/search/series", {
            params: {
                name,
                season,
                episode
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
            <h1>This is result page {name}</h1>
            {links?.map((file) => {
                return <FileBox file={file} />
            })}
        </>
    )
}
