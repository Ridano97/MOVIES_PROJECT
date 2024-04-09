import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardsFilms = ({movieCard}) => {
  
  
  return (
    <>
      <Card className="m-4" style={{ width: "35rem" }}>
      {<Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+movieCard.backdrop_path}/> }
        <Card.Body className="d-flex justify-content-center flex-column">
          <Card.Title className="text-center">{movieCard.title}</Card.Title>
          <Card.Text className="text-center">
            {movieCard.overview}
          </Card.Text>
          <Button className="text-white" variant="warning">Watch</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardsFilms;
