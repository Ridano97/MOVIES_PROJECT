import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MoviesService from '../Services/MoviesService';

const PagesDetailsCards = () => {

    //Etat
    const {id} = useParams()
    const [detailsCard , setDetailsCard] = useState ({});
    
    //Comportement 
    const fetchMovie = async () => {
        const response = await MoviesService.fetchMovieById(id)
            setDetailsCard(response.data);
    }






    useEffect (() => {
        fetchMovie();
    }, []) 
    return <>


    <div>
        <img src={""} alt="affichefilm" />
    </div>
    <div className="bg-black p-5">
        <h2 className=" bg-black text-center mt-5 text-white p-5">
        {detailsCard.title && detailsCard.title[0].toUpperCase() + detailsCard.title.slice(1)}
            <br /><br />
            <p>{detailsCard.overview}</p> 
            <br /><br />
            <p>Language : {detailsCard.original_language}</p> 
            <p>Popularity :  {detailsCard.popularity}</p>
            <p>Release : {detailsCard.release_date}</p>
            <p>{detailsCard.vote_average}</p>
            <p>{detailsCard.vote_count}</p>
        </h2>
      </div>
    </>
}

export default PagesDetailsCards;