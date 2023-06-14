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
        <div>
            <h2 >{res.title}</h2>
            <h2>{res.release_date}</h2>
            <h2>{res.runtime} min</h2>
            <h2 class="status">{res.status}</h2>
            <Image class="image"
            src={imagePath + res.backdrop_path}
            width={800}
            height={500}
            alt='image'
            />
            <h4>{res.overview}</h4>
        </div>
    </div>
  )
}
