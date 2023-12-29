'use client'
import { useRouter } from "next/navigation"
import { SyntheticEvent, useState } from "react"


export default function SeriesSearch() {
  const [ form, setForm ] = useState({
    name:"",
    season:"",
    episode:""
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
    console.log(`Searching for ${form.name}`);
    router.push("/sresults?" + new URLSearchParams(form).toString())
  }
  return (
    <>
    <h1>Search</h1>
    <input type="text" onChange={changeHandler} id="name" />
    <input type="text" onChange={changeHandler}  id="season" />
    <input type="text" onChange={changeHandler}  id="episode" />
    <button type="button" onClick={submitHandler}>Search</button>
    </>
  )
}