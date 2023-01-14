import { Component } from "react";
import { Container } from "react-bootstrap";
import { Navigation } from "./Navigation";

export class AboutUs extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <Container className="  mt-5 mb-5">
          <div className="container">
            <div>
              <p className="text-center h1 fw-bold p-4">About Us</p>
            </div>
            <div className="container">
              <div className="row">
                {/* <div class="col-lg-1"></div> */}
                <div className="col-lg-8">
                  <h3 className="fw-bold">Our vision</h3>
                  Our vision is for a world that works easy for everyone who are
                  willing hearts.....
                  <br />
                  &nbsp;&nbsp;&nbsp;We help people find solutions to some of the
                  world’s toughest problems. Challenges made worse by
                  catastrophic climate change and persistent gender inequality.
                  We believe societies and economies can work for the benefit of
                  all. That we can live within the planet’s means. That
                  ingenuity and cooperation can conquer any challenge.
                </div>
                <div className="col-lg-4">
                  <img
                    src="../images/helping_hand.jpeg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="container">
              <div className="row">
                {/* <div class="col-lg-1"></div> */}
                <div className="col-lg-8">
                  <h3 className="fw-bold">Our Difference</h3>
                  &nbsp;&nbsp;&nbsp;At Practical Action we do things
                  differently. We believe in the power of small to change the
                  big picture. We believe people living in poverty already have
                  the ability to change their worlds. They just need the right
                  plans, tools and knowhow, put to work in effective
                  partnerships to change the social and economic systems that
                  keep people poor. That’s why we bring people together in bold
                  collaborations, combining knowledge and innovation to bring
                  about lasting change. We’re problem solvers. We work hand in
                  hand with local communities, publish the best thinking from
                  the brightest minds and provide technical expertise to the
                  change-makers.
                </div>
                <div className="col-lg-4">
                  <img
                    src="../images/buyer_seller.jpeg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
