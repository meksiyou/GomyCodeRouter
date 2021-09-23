import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.img} />
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>{movie.duration}</Card.Text>
          <Link to={`/Movies/${movie.id}`}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
