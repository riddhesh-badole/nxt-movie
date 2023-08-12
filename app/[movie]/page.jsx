import React from 'react'
import Image from 'next/image'
import "../home.css"

export default async function movieDetail({params}) {
    const {movie} = params
    const imagePath = "https://image.tmdb.org/t/p/original"

    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,{next:{revalidate: 60}})

const res = await data.json()
  return (
    <div>
        <div class=" movie_detail">
           <div className="top">
           <h3 class="status">{res.status}</h3>
            <h1 >{res.title}</h1>
            
            <h3 class="date_time">{res.release_date}</h3>
            <h3 class="date_time">{res.runtime} min</h3> 
           
            </div>
            <div class="image"><Image class="poster_img"
            src={imagePath + res.backdrop_path}
            width={800}
            height={500}
            alt='image'
            /></div>
            <h4>{res.overview}</h4>
        </div>
        <footer>
        <h2>@riddhesh</h2>
      </footer>
    </div>
  )
}
