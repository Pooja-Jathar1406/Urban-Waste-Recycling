import { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap/";
import { LinkContainer } from "react-router-bootstrap";
import "../css/Navigation.css";
export class Navigation extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src="./Images/logo-no-background.png"
              className="d-inline-block align-top logoimg"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
              <LinkContainer to={"/"}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/add-product"}>
                <Nav.Link>Add Product</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/marketplace"}>
                <Nav.Link>MarketPlace</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/feedback"}>
                <Nav.Link>Feedback</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/recycle-trail"}>
                <Nav.Link>Recycle Trail</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/resources"}>
                <Nav.Link>Resources</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/aboutUs"}>
                <Nav.Link>About us</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Action" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">User Login</NavDropdown.Item>
                <NavDropdown.Item href="/sign-up">User SignUp</NavDropdown.Item>
                <NavDropdown.Item href="/admin-login">
                  Admin Login
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin-sign-up">
                  Admin SignUp
                </NavDropdown.Item>
                <NavDropdown.Item href="/sign-out">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
