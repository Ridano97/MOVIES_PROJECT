import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import CardsFilms from "../Components/CardsFilms";
import LastMovies from "../Services/LastMoviesServices";

const PagesPrincipale = () => {
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
      <div className="bg-black p-5">
        <h2 className=" bg-black text-center text-white p-3">
          Welcome to MOVIES & CHILL Discover a wide selection of diverse
          artworks and the latest releases!
        </h2>
      </div>
      <div className="bg-black p-5">
        <Form.Control
          className="d-flex justify-content-center border-warning border-4"
          size="lg"
          type="text"
          placeholder="Find your happiness"
        />
      </div>
      <div className="text-center p-5 blue-night text-white border-top border-white">
        <h1>--THE LATEST FILMS--</h1>
      </div>
      <div className="d-flex align-items justify-content-center p-5 blue-night flex-wrap">
        {movies.map((movie) => (
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
  );
};

export default PagesPrincipale;
