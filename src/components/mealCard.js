import React from "react";
import { Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";

function MealCard({ meal }) {
  return (
    <Fade>
      <Card className="d-flex flex-row my-2">
        <Card.Img variant="start" src={meal.image} className="w-25 rounded" />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <div style={{ fontWeight: "bold" }} className="fs-4">
              {meal.name}
            </div>
            <div className="text-danger">
              {meal.price} <span className="text-muted">جنيه</span>
            </div>
          </Card.Title>
          <Card.Text className="text-muted">{meal.description}</Card.Text>
        </Card.Body>
      </Card>
    </Fade>
  );
}

export default MealCard;
