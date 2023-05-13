import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function Tags({ tags, filterMenu, removeFilters }) {
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

        {tags.length > 0
          ? tags.map((tag) => (
              <Button
                key={tag}
                className="mx-2 my-2 "
                variant="outline-warning"
                onClick={() => {
                  filterMenu(tag);
                }}
              >
                {tag}
              </Button>
            ))
          : null}
      </Col>
    </Row>
  );
}

export default Tags;
