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
export function AddProduct() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [urlToImage, seturlToImage] = useState("");
  const [sellerName, setsellerName] = useState("");
  const [sellerMobile, setsellerMobile] = useState("");
  const [sellerEmail, setsellerEmail] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const product = {
        name,
        price,
        category,
        description,
        urlToImage,
        sellerName,
        sellerMobile,
        sellerEmail,
      };

      console.log(product);

      fetch("http://localhost:8585/product/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      }).then(() => {
        console.log("New Product added");
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
              action="/marketplace">
              <Row className="mb-3 justify-content-center">
                <Col
                  md={6}
                  className="signupContent  border bg-white shadow  p-5 pt-4">
                  <div className="row mt-3 mb-3 text-center">
                    <h3 className="loginform justify-content-center">
                      Add your product
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
                    controlId="validationCustom06"
                    className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      min={1}
                      placeholder="Price"
                      pattern="[a-z,A-Z]{3,20}"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please Enter Valid Price
                    </Form.Control.Feedback>
                  </Form.Group>

                  <label htmlFor="exampleCategory" className="form-label">
                    {" "}
                    Product category{" "}
                  </label>

                  <select
                    className="form-control mb-3"
                    id="exampleCategory"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="" disabled="disabled">
                      {" "}
                      Select{" "}
                    </option>{" "}
                    <option value="E-Waste"> E-Waste</option>
                    <option value="Green Waste">Green Waste</option>{" "}
                    <option value="Domestic waste">Domestic waste</option>
                    <option value="Debris">Debris</option>{" "}
                  </select>

                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom03"
                    className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="description"
                      name="description"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a description
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom03"
                    className="mb-3">
                    <Form.Label>Enter url to image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Please enter filename"
                      name="urlToImage"
                      required
                      value={urlToImage}
                      onChange={(e) => seturlToImage(e.target.value)}
                    />

                    <Form.Control.Feedback type="invalid">
                      Please enter the image url
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom03"
                    className="mb-3">
                    <Form.Label>Sellers Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="seller Name"
                      name="sellerName"
                      required
                      value={sellerName}
                      onChange={(e) => setsellerName(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a sellerName
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
                        placeholder="Enter seller mobile Number"
                        aria-describedby="inputGroupPrepend"
                        required
                        pattern="[6-9]{1}[0-9]{9}$"
                        name="sellerMobile"
                        value={sellerMobile}
                        onChange={(e) => setsellerMobile(e.target.value)}
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
                    <Form.Label>Enter Seller Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Seller Email Address"
                      required
                      pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$"
                      name="sellerEmail"
                      value={sellerEmail}
                      onChange={(e) => setsellerEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter Valid Email address
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="loginbtn btn btn-success w-100">
                    Upload
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
        </Container>
      </div>
    </>
  );
}
