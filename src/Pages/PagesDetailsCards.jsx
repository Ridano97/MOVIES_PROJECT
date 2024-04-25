import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesService from "../Services/MoviesService";

const PagesDetailsCards = () => {
  //Etat
  const { id } = useParams();
  const [detailsCard, setDetailsCard] = useState({});

  //Comportement
  const fetchMovie = async () => {
    const response = await MoviesService.fetchMovieById(id);
    setDetailsCard(response.data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <>
      <div className="space bg-black p-5 d-flex align-items-center flex-column">
        <img className="border border-white border-2 mt-5 rounded-5"
          src={ 
            detailsCard.poster_path
              ? `https://image.tmdb.org/t/p/w500${detailsCard.poster_path}`
              : ""
          }
          width={500}
          height={550}
          alt="Affiche du film"
        />
        <h2 className="galaxy text-center m-5 rounded-5 border border-white border-2 text-white p-5">
          {detailsCard.title &&
            detailsCard.title[0].toUpperCase() + detailsCard.title.slice(1)}
          <p className="mt-5">{detailsCard.overview}</p>
          <p>Language : {detailsCard.original_language}</p>
          <p>Popularity : {detailsCard.popularity}</p>
          <p>Release : {detailsCard.release_date}</p>
          <p>{detailsCard.vote_average}</p>
          <p>{detailsCard.vote_count}</p>
        </h2>
      </div>
    </>
  );
};

export default PagesDetailsCards;
