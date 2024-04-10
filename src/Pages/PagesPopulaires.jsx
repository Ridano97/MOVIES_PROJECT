import React, { useEffect, useState } from 'react'
import CardsFilms from "../Components/CardsFilms";
import Medaille from "../Assets/medaille.png"

const PagesPopulaires = () => {

    const[top, setTop] = useState([]);

    const getTopRated = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDRmOGZkNzhkNWZkY2NiYzdjNDFhOGI1NDkyYjliMyIsInN1YiI6IjY2MDY4Y2I3OGEwZTliMDE3YzRjZmE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.brmoKXZ-VoI3ztIQ7kGTCfGdQYhLaSZ2DRijcNuYx74'
        }
      };
      
      fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setTop(response.results))
        .catch(err => console.error(err)); 
    }

    useEffect (() => {
        getTopRated();
    }, [])
    return <>
    

      <div className="bg-black p-5">
        <h2 className=" bg-black text-center text-white p-3">
            
        </h2>
      </div>
      <div className="bg-black p-5">
      </div>
      <div className="text-center justify-content-center p-5 blue-night text-white border-top border-white d-flex">
        <h1 className="p-1 fs-1">--TOP RATED--</h1>
      <img className='rounded-5 border border-3 border-warning' width={70} height={60} src={Medaille} alt="logo_TV" />
       </div>
      <div className="d-flex align-items justify-content-center p-5 blue-night flex-wrap">
        {top.map((movie) => (
                <CardsFilms movieCard={movie}/>
            ))}
      </div>
      <div className="bg-black p-5 border-top border-white">
        <br />
        <br />
        <br />
        <br />
      </div>

    </>
}


export default PagesPopulaires;