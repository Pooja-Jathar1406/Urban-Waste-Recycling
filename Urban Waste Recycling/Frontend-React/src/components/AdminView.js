import { useEffect, useState } from "react";
import {
  Container,
  Alert,
  Table,
  Button,
  Row,
  Form,
  Col,
} from "react-bootstrap";
import {
  getAllProductsFromServer,
  deleteProductFromServer,
  editProductFromServer,
} from "../Services/ApiServices";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AdminNavigation } from "./AdminNavigation";
export function AdminView() {
  const [products, setRoductList] = useState([]);
  const [selectedRequestsReq_Id, setselectedRequestsReq_Id] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //
  async function setProductRequests() {
    const response = await getAllProductsFromServer();
    setRoductList(response.data);
  }

  const deleteRequest = async () => {
    const response = await deleteProductFromServer(selectedRequestsReq_Id);
    console.log(response.data);
    closeModal();
    setProductRequests();
  };

  useEffect(() => {
    setProductRequests();
  }, []);

  // -------------edit ----------------------------------------------------------
  const [isModal2Open, setIsModal2Open] = useState(false);

  const openModal2 = () => {
    setIsModal2Open(true);
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
  };
  //
  async function setProductRequests() {
    const response = await getAllProductsFromServer();
    setRoductList(response.data);
  }

  useEffect(() => {
    setProductRequests();
  }, []);
  //-----------
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [urlToImage, seturlToImage] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const id = selectedRequestsReq_Id;
      const product1 = {
        id,
        name,
        price,
        category,
        description,
        urlToImage,
      };

      console.log(product1);

      fetch("http://localhost:8585/product/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product1),
      }).then(() => {
        console.log("New Product added");
      });
    }
  };
  //--------
  return (
    <>
      <AdminNavigation></AdminNavigation>
      <Container className="mt-5 mb-5 text-center">
        <Alert className="alert-success">
          <h2>List of all Products</h2>
        </Alert>
      </Container>
      <Container>
        <Table className="table-striped table-bordered table-hover pt-2 pb-3">
          <thead className="bg-dark text-white">
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.description}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      className="btn-sm"
                      onClick={() => {
                        setselectedRequestsReq_Id(product.id);

                        console.log(product.id);
                        openModal();
                      }}>
                      Delete
                    </Button>
                    <Button
                      variant="outline-danger"
                      className="btn-sm"
                      onClick={() => {
                        setselectedRequestsReq_Id(product.id);
                        console.log(product.id);
                        openModal2();
                      }}>
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>

      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the product with id={" "}
          {selectedRequestsReq_Id}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={deleteRequest}>
            Yes, Delete
          </Button>
          <Button variant="danger" onClick={closeModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={isModal2Open} onHide={closeModal2} className="modal-md">
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            Edit the product with id= {selectedRequestsReq_Id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className=" justify-content-center  ">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="  "
              action="/admin-view">
              <Row className="  justify-content-center">
                <Col md={11} className="signupContent    bg-white    p-5 pt-4">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom01"
                    className=" ">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Name"
                      pattern="[a-z,A-Z]{3,20}"
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
                      placeholder="please enter the filename"
                      name="urlToImage"
                      required
                      value={urlToImage}
                      onChange={(e) => seturlToImage(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter the image url
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="loginbtn btn btn-success w-100">
                    Update
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
