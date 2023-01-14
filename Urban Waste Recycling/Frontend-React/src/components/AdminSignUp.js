import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SignUp.css";
import { Link } from "react-router-dom";
import { Navigation } from "./Navigation";

export function AdminSignUp() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const user = { name, mobile, email, password };

      console.log(user);

      fetch("http://localhost:8585/admin/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).then(() => {
        console.log("New Admin added");
      });
    }
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="signUpBody">
        <Container>
          <div className="row justify-content-center "></div>
          <Row className=" justify-content-center mt-5  ">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="m-5 mt-2"
              action="/admin-login">
              <Row className="mb-3 justify-content-center">
                <Col
                  md={5}
                  className="signupContent  border bg-white shadow  p-5 pt-4">
                  <div className="row mt-3 mb-3 text-center">
                    <h3 className="loginform justify-content-center">
                      Sign Up as Admin
                    </h3>
                  </div>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom01"
                    className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Name"
                      pattern="[^[a-zA-Z]*$
                      {2,20}]"
                      name="fname"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please Enter Valid Name
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                    className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        +91
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Enter Mobile Number"
                        aria-describedby="inputGroupPrepend"
                        required
                        pattern="[7-9]{1}[0-9]{9}$"
                        name="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Enter Valid Mobile Number
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom04"
                    className="mb-3">
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Email Address"
                      required
                      pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter Valid Email address
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom03"
                    className="mb-3">
                    <Form.Label>Set password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid password.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="loginbtn btn btn-success w-100">
                    Sign Up
                  </Button>
                  <div className=" text-center pt-3">
                    <span>
                      {" "}
                      Already have an account?
                      <p className="text-center">
                        <Link to="/admin-login" className="">
                          {" "}
                          Login
                        </Link>
                      </p>
                    </span>
                  </div>
                </Col>
              </Row>

              {/* {AddLibrary(
                'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')} */}
            </Form>
          </Row>
        </Container>
      </div>
    </>
  );
}

// render(<SignUpForm />);
