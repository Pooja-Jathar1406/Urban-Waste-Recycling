import { useEffect, useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { getGreenWasteProductsFromServer } from "../Services/ApiServices";
import { Link } from "react-router-dom";
import { Navigation } from "./Navigation";
export function GreenWaste() {
  const [products, setProducts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedRequestsReq_Id, setselectedRequestsReq_Id] = useState("");
  const [selectedSellerName, setselectedsellerName] = useState("");
  const [selectedsellerEmail, setselectedsellerEmail] = useState("");
  const [selectedsellerMobile, setselectedsellerMobile] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  async function getAllProducts() {
    const response = await getGreenWasteProductsFromServer();
    setProducts(response.data);
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  const product = products.map((element) => {
    return element + 1;
  });

  console.log("product detail");
  console.log(product);
  console.log("product sell");
  console.log(selectedSellerName);
  return (
    <>
      <Navigation></Navigation>
      <div className="container pb-5 ">
        <div className="  pt-5">
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <div className="nav-link  subNavLinks" aria-current="page">
                      <Link to="/marketplace" className="subNavLinks">
                        {" "}
                        All Products{" "}
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link   subNavLinks" aria-current="page">
                      <Link to="/e-waste" className="subNavLinks">
                        {" "}
                        E Waste{" "}
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link subNavLinks activeSubLink"
                      aria-current="page">
                      <Link to="/green-waste" className="subNavLinks">
                        {" "}
                        Green Waste{" "}
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link subNavLinks" aria-current="page">
                      <Link to="/dom-waste" className="subNavLinks">
                        {" "}
                        Domestic waste{" "}
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link subNavLinks" aria-current="page">
                      <Link to="/debris" className="subNavLinks">
                        {" "}
                        Debris{" "}
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <Container>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3 pb-5">
                <div className="card shadow " style={{ width: "18rem" }}>
                  <img
                    src={`Images/${product.urlToImage}`}
                    className="card-img-top w-100"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>

                    <p className="card-text">{product.description}</p>

                    <h6 className="card-text">Price : {product.price}</h6>

                    <Button
                      variant="  "
                      className="btn-sm buyBtn w-100"
                      onClick={() => {
                        setselectedRequestsReq_Id(product.id);
                        setselectedsellerName(product.sellerName);
                        setselectedsellerEmail(product.sellerEmail);
                        setselectedsellerMobile(product.sellerMobile);
                        console.log(product.id);
                        openModal();
                      }}>
                      Contact Seller
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sold by</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Seller's Name :{selectedSellerName}
          <br></br>
          Seller's Mobile :{selectedsellerMobile}
          <br></br>
          Seller's Email :{selectedsellerEmail}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">
            <a href={`tel:${selectedsellerMobile}`} className="buybtns">
              Call seller
            </a>
          </Button>
          <Button variant="success">
            <a href={`mailto:${selectedsellerEmail}`} className="buybtns">
              Send mail
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
