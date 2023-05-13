import React from "react";
import MealCard from "./mealCard";
import { Row } from "react-bootstrap";

function MenuList({ meals }) {
  return (
    <Row>
      {meals.length === 0 ? (
        <div className="text-center text-muted fs-3 my-5">
          لا يوجد وجبات متاحة
        </div>
      ) : (
        meals.map((meal) => <MealCard key={meal.id} meal={meal} />)
      )}
    </Row>
  );
}

export default MenuList;
