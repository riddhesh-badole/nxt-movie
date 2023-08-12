"use client"
import { useState } from "react"
import "../app/home.css"
import Movie from "./Movie"
// import "../app/globals.css"
export default async function Home() {
  const [page,setpage] = useState(1);
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${process.env.API_KEY}`)

  const res = await data.json()
  return (
    <main >
      <div class="hi">
     <h1 >Next-Movie </h1>
     </div>

     <div>
     {res.results.map((movie) =>(
        <Movie 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        release_date={movie.release_date}
        />
     ))}
     </div>
     <footer>
        <h2>@riddhesh</h2>
      </footer>
    </main>
  )
}
