import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "../app/movie.css"

export default function Movie({title,id,poster_path,release_date}) {
  const imagePath = 'https://image.tmdb.org/t/p/original'
  return (
    <div class="cont">
      <h2>{title}</h2>
      <h3>{release_date}</h3>
      <Link href={`/${id}`}>
        <Image 
        src={imagePath + poster_path}
        width={500}
        height={500}
        />

      </Link>
    </div>
  )
}
