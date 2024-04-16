import React, { useEffect, useState } from "react";
import CardsFilms from "../Components/CardsFilms";
import LogoSite from '../Assets/movies.png'
/* import CarouselGrandeAffiche from "../Components/Carousel"; */

const PagesAccueil = () => {
  

  return (
    <><div>      
        <div className= "space">
          <div>
            {/* <CarouselGrandeAffiche/> */}
          </div>
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
          <div className="border-2 border-white border-top border-bottom d-flex flex-column align-items-center justify-content-center ">
            <h1 className="welcome">Welcome to </h1>
            <div className="d-flex align-items-center flex-column">
              <img height={400} width={450} src={LogoSite}alt="logo" />
           </div>
           <p>Discover a wide selection of divers artworks and the latest release !</p>
          </div> 
          <div>
          <h2 className="text-center text-white mt-5">Latest</h2>
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesAccueil;
