import React, { useEffect, useState } from "react";
import CardsFilms from "../Components/CardsFilms";
import Carousel from 'react-bootstrap/Carousel';
import LogoSite from '../Assets/movies.png'

const PagesAccueil = () => {
  const [jumbotron, setJumbotron] = useState([]);

  return (
    <><div>
        <div className= "space">
        <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <h1 className="text-white">  Welcome to <img height={300} width={250} src={LogoSite}alt="logo" />
           Discover a wide selection of diverse artworks and the latest releases!</h1>
        </div>
         
      </div>
    </>
  );
};

export default PagesAccueil;
