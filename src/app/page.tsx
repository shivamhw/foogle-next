'use client'
import { useRouter } from "next/navigation"
import { SyntheticEvent, useState } from "react"


export default function HomePage() {
  const [ form, setForm ] = useState({
    movie_name:"",
    movie_rel_year:""
  })
  const router = useRouter()
  const changeHandler = (e : SyntheticEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    console.log(form)
    setForm((prev) => {
      return {
        ...prev,
        [input.id] : input.value
      }
    })
  }

  const submitHandler = (e : SyntheticEvent<HTMLButtonElement>) => {
    console.log(`Searching for ${form.movie_name}`);
    router.push("/results?" + new URLSearchParams(form).toString())
  }
  return (
    <>
    <h1>Search</h1>
    <input type="text" onChange={changeHandler} id="movie_name" />
    <input type="text" onChange={changeHandler}   id="movie_rel_year" />
    <button type="button" onClick={submitHandler}>Search</button>
    </>
  )
}