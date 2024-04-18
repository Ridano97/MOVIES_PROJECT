import React, { useEffect, useState } from "react";
import CardsFilms from "../Components/CardsFilms";
import Camera from "../Assets/camera.jpeg"

const PagesEmissionsTV  = () => {
  const [tele, setTele] = useState([]);

  const getTvShow = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDRmOGZkNzhkNWZkY2NiYzdjNDFhOGI1NDkyYjliMyIsInN1YiI6IjY2MDY4Y2I3OGEwZTliMDE3YzRjZmE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.brmoKXZ-VoI3ztIQ7kGTCfGdQYhLaSZ2DRijcNuYx74'
        }
      };
      
      fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setTele(response.results))
        .catch(err => console.error(err));
  };


useEffect (() => {
    getTvShow()

}, [])


return <>


      <div className="space p-5">
          <h2 className=" galaxy text-center border border-2 border-white text-white mt-5 p-5">
            Lights, camera, anime! Discover a world of TV shows! 🎬📺
          </h2>
      
      
        <div className="text-center justify-content-center p-5 blue-night text-white border-white d-flex">
          <h1 className="p-1">--SERIES & TV SHOW --</h1>
          <img className='rounded-5 border border-3 border-warning' width={70} height={60} src={Camera} alt="logo_TV" />
        </div>
        <div className="d-flex align-items justify-content-center p-5 blue-night flex-wrap">
          {tele.map((movie) => (
                  <CardsFilms movieCard={movie}/>
              ))}
        </div>
        <div className="galaxy p-5 border-2 border border-white">
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>


</>

};



export default PagesEmissionsTV;
