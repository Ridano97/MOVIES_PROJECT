import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardsFilms = ({movieCard}) => {
  
  console.log(movieCard);
  return (
    <>
      <Card className="m-4 cursor" style={{ width: "35rem" }}>
      {<Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+movieCard.backdrop_path}/> }
        <Card.Body className="d-flex justify-content-center flex-column shadow p-3 mb-1 bg-white rounded">
          <Card.Title className="text-center">{movieCard.title}</Card.Title>
          <Card.Text className="text-center f-bold ">
            {movieCard.overview}
          </Card.Text>
          {/* <Button fixed="bottom" className="text-white" variant="warning">Watch</Button> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default CardsFilms;
