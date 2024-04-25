import React, { useEffect, useState } from 'react'
import CardsFilms from "../Components/CardsFilms";
import Televison from "../Assets/c.jpg"
import facebook from "../Assets/fb.avif"
import x from "../Assets/x.avif"
import insta from "../Assets/insta.avif"


const PagesTendance = () => {

    const [tv, setTV] = useState([]);

    const getTV = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDRmOGZkNzhkNWZkY2NiYzdjNDFhOGI1NDkyYjliMyIsInN1YiI6IjY2MDY4Y2I3OGEwZTliMDE3YzRjZmE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.brmoKXZ-VoI3ztIQ7kGTCfGdQYhLaSZ2DRijcNuYx74'
            }
          };
          
          fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
            .then(response => response.json())
            .then(response => setTV(response.results))
            .catch(err => console.error(err));
      
            
    }

    useEffect (() => {
        getTV()
    }, [])
    

    return <>

      <div className="space p-5">
        <h2 className=" galaxy text-center border border-2 border-white text-white mt-5 p-5">
        Step into the spotlight and catch the latest trends!" 🌟📈
          </h2>
        <div className="text-center justify-content-center p-5 blue-night text-white d-flex">
          <h1 className="p-1">--TRENDS--</h1>
          <img className='rounded-5 border border-3 border-warning' width={70} height={60} src={Televison} alt="logo_TV" />
        </div>
        <div className="d-flex align-items justify-content-center p-5 blue-night flex-wrap">
          {tv.map((movie) => (
                  <CardsFilms movieCard={movie}/>
              ))}
        </div>
        <div className="galaxy p-5 border border-2 border-white">
          <a href="https://www.facebook.com" target='_blank'><img className='backgroundnone rounded-5' src={facebook} alt="logofb" /></a>
          <a href="https://www.instagram.com" target='_blank' ><img className='backgroundnone rounded-5' src={insta} alt="logoinsta" /></a>
          <a href="https://www.x.com" target='_blank' ><img className='backgroundnone rounded-5' src={x} alt="logox" /></a>
        </div>
      </div>

    </>
}

export default PagesTendance;