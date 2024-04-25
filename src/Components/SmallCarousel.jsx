import React, { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SmallCarousel = ({ cards }) => {
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
  };

  const carouselRef = useRef(null); // Référence au carousel

  const autoplay = {
    delay: 3000,
    stopOnHover: true,
    pauseOnVisibilityChange: true,
    onStart: () => {}, // Fonction vide au démarrage
    onStop: () => {}, // Fonction vide à l'arrêt
    onPause: () => {}, // Fonction vide en pause
    onPlay: () => {}, // Fonction vide en lecture
    rewind: true, // Activer la remise à zéro automatique de l'autoplay
  };

  return (
    <Carousel 
      ref={carouselRef} // Passer la référence du carousel
      responsive={responsive}
      showDots={true}
      swipeable={true}
      draggable={true}
      arrows={true}
      centerMode={true}
      centerSlidePercentage={100 / cards.length}
      autoPlay={autoplay}
    >
      {cards.map((m, index) => (
        <div key={index}>
          <img 
            className="p-2 rounded-5"
            src={`https://image.tmdb.org/t/p/original${m.backdrop_path}`} 
            alt={m.title} 
            style={{ height: "400px", width: "100%", objectFit: "cover", borderRadius: "5px" }} 
          />
        </div>
      ))}
    </Carousel>
  );
};

export default SmallCarousel;