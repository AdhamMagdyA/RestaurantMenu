import React from "react";
import { Card } from "react-bootstrap";

function MealCard() {
  return (
    <Card className="d-flex flex-row">
      <Card.Img variant="start" src="1.png" className="w-25 rounded" />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <div style={{ fontWeight: "bold" }} className="fs-4">
            حواوشى
          </div>
          <div className="text-danger">
            20 <span className="text-muted">جنيه</span>
          </div>
        </Card.Title>
        <Card.Text className="text-muted">
          اجمد حواوشي ممكن تاكله في حياتك يا صاحبي
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MealCard;
