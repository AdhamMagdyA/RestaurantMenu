import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function Tags({ tags, filterMenu, removeFilters }) {
  // const tags = [
  //   { id: 1, name: "مشاوي" },
  //   { id: 2, name: "فطور" },
  //   { id: 3, name: "نشويات" },
  // ];

  return (
    <Row className="mb-2">
      <Col sm={12} className="d-flex justify-content-center">
        <Button
          className="mx-2 my-2 "
          variant="outline-warning"
          onClick={removeFilters}
        >
          الكل
        </Button>
        {tags.map((tag) => (
          <Button
            className="mx-2 my-2 "
            variant="outline-warning"
            onClick={() => {
              filterMenu(tag);
            }}
          >
            {tag}
          </Button>
        ))}
      </Col>
    </Row>
  );
}

export default Tags;
