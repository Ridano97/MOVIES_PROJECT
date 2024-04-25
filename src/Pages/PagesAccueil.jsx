import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import LogoSite from "../Assets/movies.png";
import CardsFilms from "../Components/CardsFilms";
import SmallCarousel from "../Components/SmallCarousel";

const PagesAccueil = () => {
  const [affiche, setAffiche] = useState([]);
  const [cards, setCards] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

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
      .then(response => setCards(response.results))
      .catch(err => console.error(err));
  }


  useEffect(() => {
    getTopRated();
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=bd4f8fd78d5fdccbc7c41a8b5492b9b3"
    )
      .then((response) => response.json())
      .then((data) => setAffiche(data.results));
  }, []);


  return (
    <div className="space">
      <div>
        <Carousel responsive={responsive} className="mt-5">
          {affiche.map((film, index) => (
            <Carousel.Item key={index}>
              <img 
                className="d-block w-100 mt-2 border-3 border-white border-bottom"
                src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
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
          <img height={350} width={350} src={LogoSite} alt="logo" />
        </div>
        <p id="accroche">
          Discover a wide selection of diverse artworks and the latest releases!
        </p>
      </div>
      <div className="galaxy p-5">
        <div>
          <h1 className="text-center text-white mt-5">Popular</h1>
        </div>
        <br />
        <br />
          <SmallCarousel cards={cards} />
        <br />
        <br />
      </div>
    </div>
  );
};

export default PagesAccueil;
