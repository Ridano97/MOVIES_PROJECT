import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import CardsFilms from "../Components/CardsFilms";
import Carousel from 'react-bootstrap/Carousel';

const PagesAccueil = () => {
  const [jumbotron, setJumbotron] = useState([]);

  return (
    <>
      <div className="bg-black p-5">
        <h2 className=" bg-black text-center text-white mt-5 p-3">
          Welcome to <h1>MOVIES <span className='text-warning'>&</span> CHILL</h1> Discover a wide selection of diverse
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
      <div className="text-center justify-content-center p-5 blue-night text-white border-top border-white d-flex">
      {/* <Carousel>
      <Carousel.Item interval={1000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}> */}
        {/* <ExampleCarouselImage text="Second slide" /> */}
       {/*  <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> */}
        {/* <ExampleCarouselImage text="Third slide" /> */}
       {/*  <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    {/* </Carousel>} */}
      </div>
      <div className="d-flex align-items justify-content-center p-5 blue-night flex-wrap">
        
      </div>
      <div className="bg-black p-5 border-top border-white">
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="bg-white p-5 border-top border-white">
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default PagesAccueil;
