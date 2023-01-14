import { Component } from "react";
import { Container, Alert, Col, Row, Form, Button } from "react-bootstrap";
import "../css/Home.css";
import { Navigation } from "./Navigation";

export class Home extends Component {
  render() {
    return (
      <>
        <Navigation></Navigation>
        <div>
          <Container fluid>
            {/*  ----------------Carousal section-----------------  */}
            <div className="row ">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../images/slideimage6.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../images/homebg11.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../images/slideimage5.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev">
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next">
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="container pb-5">
              <div className="row text-center ">
                <h1 className="p-5 pgTitle"> Our Environment, Our Future </h1>
              </div>
              <div className="row text-center ">
                <div className="col-md-4 cardcenter">
                  <div
                    className="card center shadow p-3 pt-5"
                    style={{ width: "25rem" }}>
                    <img
                      src="../images/reuse6.png"
                      className="card-img-top"
                      alt="..."
                    />
                    {/* <img src="../images/reuseblk1.png" class="card-img-top" alt="..."> */}
                    <div className="card-body ">
                      <h3 className="card-title pt-3">Reuse</h3>
                      <p className="card-text"></p>
                      <ol className="cardText">
                        <li>
                          The unnecessary and unwanted wasteful purchases are
                          decreased.
                        </li>
                        <li>
                          Avoiding waste is the preferable option for waste
                          management.
                        </li>
                        <li>
                          Avoid excessive use of paper, switch to online modes.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 cardcenter">
                  <div
                    className="card center shadow p-3 pt-5"
                    style={{ width: "25rem" }}>
                    <img
                      src="../images/reduce2.png"
                      className="card-img-top"
                      alt="..."
                    />
                    {/* <img src="../images/reduceblk2.png" class="card-img-top" alt="..."> */}
                    <div className="card-body ">
                      <h3 className="card-title pt-3">Reduce</h3>
                      <p className="card-text"></p>
                      <ol className="cardText">
                        <li>
                          {" "}
                          Using the same item more than once in either the same
                          way or modified way.
                        </li>
                        <li>
                          It is the way to use the materials or items again.
                        </li>
                        <li>
                          only reduce the consumption of products but also
                          should reduce the amount of energy
                        </li>
                      </ol>
                      <p />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 cardcenter">
                  <div
                    className="card center shadow p-3 pt-5"
                    style={{ width: "25rem" }}>
                    <img
                      src="../images/recycle1.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    {/* <img src="../images/recycleblk.png" class="card-img-top" alt="..."> */}
                    <div className="card-body ">
                      <h3 className="card-title pt-3">Recycle</h3>
                      <p className="card-text"></p>
                      <ol className="cardText">
                        <li>
                          It is to make something new from a commodity that has
                          been used earlier.
                        </li>
                        <li>
                          Processing older items to produce something new in
                          order to save resources.
                        </li>
                        <li>
                          Find out other ways to reuse old things you already
                          dumped.
                        </li>
                      </ol>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  ---------------- Seller section -----------------  */}
            <div className="container-fluid bg-dark">
              <div className="row sellerSection p-4">
                <div className="col-md-6 sellermsg ">
                  <h5>Put your waste into use...</h5>
                  <p>
                    {" "}
                    Your trash might be used by someone else. Outsell it!!{" "}
                  </p>
                </div>
                <div className="col-md-5 sellerbuttonDiv">
                  <a
                    className="btn btn-light sellButton shadow"
                    href="/add-product">
                    Sell yor product here
                  </a>
                </div>
              </div>
            </div>
            {/*  ---------------- Links at end -----------------  */}
            <div className="container">
              <div className="container p-5">
                <div className="row text-center ">
                  <div className="col-md-3 cardcenter">
                    <div
                      className="card center shadow"
                      style={{ width: "15rem", height: "15rem" }}>
                      <a href="e-waste">
                        <img
                          src="../images/ewaste12.jpeg"
                          className="image rounded"
                          style={{ width: "15rem", height: "15rem" }}
                        />
                        <div className="centeredText">E Waste</div>
                        <div className="middle LinkCardtext  shadow">
                          Click here to see available E Waste
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 cardcenter">
                    <div
                      className="card center shadow"
                      style={{ width: "15rem", height: "15rem" }}>
                      <a href="green-waste">
                        <img
                          src="../images/greewaste10.jpeg"
                          className="image rounded"
                          style={{ width: "15rem", height: "15rem" }}
                        />
                        <div className="centeredText">Green Waste</div>
                        <div className="middle LinkCardtext  shadow">
                          Click here to see available Green Waste
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 cardcenter">
                    <div
                      className="card center shadow"
                      style={{ width: "15rem", height: "15rem" }}>
                      <a href="dom-waste">
                        <img
                          src="../images/dom.jpeg"
                          className="image rounded"
                          style={{ width: "15rem", height: "15rem" }}
                        />
                        <div className="centeredText">Domestic Waste</div>
                        <div className="middle LinkCardtext  shadow">
                          Click here to see available Domestic Waste
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 cardcenter">
                    <div
                      className="card center shadow"
                      style={{ width: "15rem", height: "15rem" }}>
                      <a href="debris">
                        <img
                          src="../images/debris12.jpeg"
                          className="image rounded"
                          style={{ width: "15rem", height: "15rem" }}
                        />
                        <div className="centeredText">Debris</div>
                        <div className="middle LinkCardtext  shadow">
                          Click here to see available Debris Waste
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }
}
