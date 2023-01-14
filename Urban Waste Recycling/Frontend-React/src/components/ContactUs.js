import { Component } from "react";
import { Container, Alert, Col, Row, Form, Button } from "react-bootstrap";
import "../css/ContactUs.css";

export class ContactUs extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <div className="ContactUsBody">
          <Container className="   ">
            <div className=" ">
              <div className="row d-flex justify-content-center  ">
                <div className="col-md-5  contactUsContent mt-5 mb-5 ">
                  <div className="p-5">
                    <h3>Contact Us</h3>

                    <hr></hr>
                    <h5 className=" ">CDAC Mumbai</h5>
                    <p></p>
                    <p>
                      Centre for Development of Advanced Computing
                      <br></br> Pune University Campus, Ganesh Khind <br></br>{" "}
                      Pune - 411 007 <br></br> Maharashtra (India)
                      <br></br> Phone:+91-20-2570-4100, Fax: +91-20-2569 4004
                      <br></br>
                      <a href="https://www.linkedin.com/school/c-dac/">
                        linkedin
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
