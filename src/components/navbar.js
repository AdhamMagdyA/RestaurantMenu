import React from "react";
import { Navbar, Container, Nav, Form, Row } from "react-bootstrap";

function NavBar({ filterBySearch }) {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    filterBySearch(e.target.value);
  };

  return (
    <Row>
      <Navbar bg="dark" expand="lg" className="d-flex" variant="dark">
        <Container>
          <Navbar.Brand href="#" className="text-warning">
            المطعم
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث عن طبق"
                className=" mx-2"
                aria-label="Search"
                color="warning"
                onChange={handleSearch}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export default NavBar;
