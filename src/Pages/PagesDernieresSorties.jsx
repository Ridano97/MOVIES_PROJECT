import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import CardsFilms from "../Components/CardsFilms";
import PopCorn from "../Assets/Untitled_design.png"
import facebook from "../Assets/fb.avif"
import x from "../Assets/x.avif"
import insta from "../Assets/insta.avif"

const PagesDernieresSorties = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=bd4f8fd78d5fdccbc7c41a8b5492b9b3"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      <div className="space p-5">
          <h2 className="galaxy text-center border border-2 border-white text-white mt-5 p-5">
            Discover a wide selection of diverse artworks and the latest releases!
          </h2>
        
        <div className="text-center justify-content-center p-5 blue-night text-white border-white d-flex">
          <h1 className="p-1">--THE LATEST FILMS--</h1>
          <img className="rounded-5 border border-3 border-warning" height={60} width={60} src={PopCorn} alt="popcorm_image" />
        </div>
        <div className="d-flex align-items justify-content-center p-5 blue-night flex-wrap">
          {movies.map((movie) => (
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
  );
};

export default PagesDernieresSorties;
