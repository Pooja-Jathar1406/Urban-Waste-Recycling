import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { getLoginDetailsFromServer } from "../Services/ApiServices";
import { Navigation } from "./Navigation";

export function Login() {
  const [validated, setValidated] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    const response = await getLoginDetailsFromServer(formValues);

    console.log(response.data);

    if (response.data == "Login successful") {
      navigate("/marketplace");
    } else {
      alert("Incorrect email or password");
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!values.email) {
      errors.email = "E-mail is required.";
      setIsError(true);
    } else if (!regex.test(values.email)) {
      errors.email = "Enter Valid E-mail.";
      setIsError(true);
    }
    if (!values.password) {
      errors.password = "Password is required";
      setIsError(true);
    } else if (values.password.length < 8) {
      errors.password = "Password length must be more than 8 character/digit";
      setIsError(true);
    }

    return errors;
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
              action="/">
              <Row className="mb-3 justify-content-center">
                <Col
                  md={5}
                  className="signupContent  border bg-white shadow  p-5 pt-4">
                  <div className="row mt-3 mb-3 text-center">
                    <h3 className="loginform justify-content-center">
                      User Login
                    </h3>
                  </div>

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
                      value={formValues.email}
                      // onChange={(e) => setEmail(e.target.value)}
                      onChange={handleChange}
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
                      value={formValues.password}
                      // onChange={(e) => setPassword(e.target.value)}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid password.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="loginbtn btn btn-success w-100">
                    Login
                  </Button>
                  <div className=" text-center pt-3">
                    <span>
                      {" "}
                      New user?
                      <p className="text-center">
                        <Link to="/sign-up" className="">
                          {" "}
                          Sign Up
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
