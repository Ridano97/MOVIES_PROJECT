import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import LogoSite from "../Assets/movies.png";

const PagesAccueil = () => {
  const [affiche, setAffiche] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=bd4f8fd78d5fdccbc7c41a8b5492b9b3"
    )
      .then((response) => response.json())
      .then((data) => setAffiche(data.results));
  }, []);

  return (
    <div className="space">
      <div>
        <Carousel>
          {affiche.map((film, index) => (
            <Carousel.Item key={index}>
              <img 
                className="d-block w-100 mt-5  border-3 border-white border-bottom"
                src={`https://image.tmdb.org/t/p/original${film.backdrop_path
              }`}
                alt={film.title}
              />
              <Carousel.Caption className="block-affiche rounded-5 border border-3 border-white p-2 m-5">
                <h3 className="text-white">{film.title}</h3>
                <p className="text-white">Popularity: {film.popularity}</p>
                <p className="text-white">Release date: {film.release_date}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <br />
      <br />
      <div className="border-2 border-white border-bottom d-flex flex-column align-items-center justify-content-center ">
        <h1 className="welcome">Welcome to </h1>
        <div className="d-flex align-items-center flex-column">
          <img height={400} width={450} src={LogoSite} alt="logo" />
        </div>
        <p id="accroche">
          Discover a wide selection of divers artworks and the latest release !
        </p>
      </div>
      <div>
        <h2 className="text-center text-white mt-5">Latest</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default PagesAccueil;
