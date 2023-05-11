import React from "react";
import { Col, Row } from "react-bootstrap";

function Header() {
  return (
    <Row className="">
      <Col className="text-center">
        <h1 className="border-bottom py-2">قائمة الطعام</h1>
      </Col>
    </Row>
  );
}

export default Header;
