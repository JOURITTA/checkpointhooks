import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

function MovieList({search}) {
  const [films, setFilms] = useState([
    {
      title: "Film 1",
      description: "https://fr.web.img4.acsta.net/c_310_420/pictures/23/11/27/11/08/3575019.jpg",
      poster: "poster 1",
      note: 3
    },
    {
      title: "Film 2",
      description: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgjnX0p8KIWMtpyX4rXzncutrisBDMUjXR_HOKBzgaQ&s",
      poster : "Poster 2",
      note: 5
    },
    {
      title: "Film 3",
      description: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpLSGR03PdDKoCY9yV7p9hstUZ_VYD0E7j4J6fCtZfQ&s",
      poster: "Poster 3",
      note: 1
    },
    {
      title: "Film 4",
      description: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RDboluBTxC426CY2Fl0S2lBjtIrnnlxqx_mAqN7Jug&s",
      poster : "Poster 4",
      not: 4
    },
    {
      title: "Film 5",
      description: "https://www.crew-united.com/Media/Images/1904/1904194/1904194.entity.jpg",
      poster: "Poster 5",
      note: 3
    },
    
  ]
  );
  useEffect(()=>{const x=JSON.parse(localStorage.getItem("nvfilm"));
 
    setFilms([...films,x])},[]);
    
  return (
    <div style={{display:"flex",flexWrap:'wrap'}}>
{films?.filter(e =>search===""?e: e?.title===search || e?.note==search).map(e => (
      <MovieCard films={e} />
    ))}
    </div>
  )
}

export default MovieList