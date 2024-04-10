import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const CardsFilms = ({movieCard}) => {
                      /* props */
  const navigate = useNavigate()
  const navigateTo = () => {
    navigate('/detailscards/'+movieCard.id)
  }

  console.log(movieCard);
  return (
    <>
      <Card onClick={navigateTo} className="m-4 cursor" style={{ width: "35rem" }}>
      {<Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+ movieCard.backdrop_path}/> }
        <Card.Body className="d-flex justify-content-center flex-column shadow p-3 mb-1 bg-white rounded">
          <Card.Title className="text-center cursor">{movieCard.title}</Card.Title>
          <Card.Text className="text-center f-bold ">
            <h3 className="cursor">{movieCard.name}</h3>
          </Card.Text>
          {/* <Button fixed="bottom" className="text-white" variant="warning">Watch</Button> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default CardsFilms;
