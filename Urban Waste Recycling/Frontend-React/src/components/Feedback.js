import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SignUp.css";
import InputGroup from "react-bootstrap/InputGroup";
import { Navigation } from "./Navigation";
import { getFeedbackfromserver } from "../Services/ApiServices";

export function Feedback() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const product = {
        name,
        email,
        feedback,
      };

      console.log(product);

      fetch("http://localhost:8585/feedback/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      }).then(() => {
        console.log("New Product added");
      });
    }
  };

  const [products, setProducts] = useState([]);

  async function getGreenWasteProducts() {
    const response = await getFeedbackfromserver();
    setProducts(response.data);
  }
  useEffect(() => {
    getGreenWasteProducts();
  }, []);

  const product = products.map((element) => {
    return element + 1;
  });
  console.log(product);

  return (
    <>
      <Navigation></Navigation>
      <div className="signUpBody">
        <Container>
          <div className="row   "></div>
          <Row className="  mt-5  ">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="m-5 mt-2"
              action="/feedback">
              <Row className="mb-3  ">
                <Col
                  md={4}
                  className="signupContent  border bg-white shadow  p-5 pt-4">
                  <div className="row mt-3 mb-3 text-center">
                    <h3 className="loginform justify-content-center">
                      Submit your feedback
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
                      // pattern="[a-z,A-Z]{3,20}"
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
                    controlId="validationCustom04"
                    className="mb-3">
                    <Form.Label>Enter your Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="email"
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
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="feedback"
                      name="feedback"
                      required
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a feedback
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="loginbtn btn btn-success w-100">
                    Submit
                  </Button>
                </Col>
                <Col md={8} className="signupContent    bg-white    p-5 pt-4">
                  <div className="row mt-3 mb-3 text-center">
                    <h3 className="loginform justify-content-center">
                      Our User's Opinion
                    </h3>
                  </div>
                  <Container>
                    <div className="row">
                      {products.map((product) => {
                        return (
                          <div className="col-md-3  p-2 border shadow m-3">
                            <div className="card-body">
                              <h6 className="card-text">{product.feedback}</h6>
                            </div>
                            <div className=" text-end">
                              <p className="card-text text-right">
                                -{product.name}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Container>
                </Col>
              </Row>
            </Form>
          </Row>
        </Container>
      </div>
    </>
  );
}
