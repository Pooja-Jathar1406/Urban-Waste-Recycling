import { Component } from "react";
import { Container, Alert, Col, Row, Form, Button } from "react-bootstrap";
import { Navigation } from "./Navigation";

export class RecycleTrail extends Component {
  render() {
    return (
      <>
        <Navigation></Navigation>
        <div>
          <Container className="  mt-5 mb-5">
            <div>
              <p className="text-center h1 fw-bold p-4">Recycle Trail</p>
            </div>
            <br />
            <div className="container">
              <div className="row">
                {/* <div class="col-lg-1"></div> */}
                <div className="col-lg-8">
                  <h3 className="fw-bold">Lets explore and learn..!</h3>
                  <br />
                  We conduct a waste walk in which we take employees, students,
                  and citizen groups on a field visit to learn how the city
                  handles its waste on a day-to-day basis. Participants
                  accompany a select waste-picker on her door-to-door rounds and
                  experience first-hand how the authorities collects and sorts
                  waste from each household and area. The cross-cultural
                  interaction with waste generators and collectors is aimed at
                  an understanding of not just the civic need for segregation
                  but also how it supports thousands of livelihoods. The trail
                  also includes a visit to a Material Recovery Facility visit,
                  which is the municipal sorting shed where waste is first
                  segregated, sorted and then sent for recycling through
                  different channels.
                  <br /> If you are interested please connect with us on
                  abc@gmail.com
                </div>
                <div className="col-lg-4">
                  <img
                    src="../images/trail.png"
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
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Location</th>
                        <th scope="col">Participants</th>
                        <th scope="col">Meeting point</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">25/12/2021</th>
                        <td>Aundh Depot</td>
                        <td>35</td>
                        <td>JM Road</td>
                      </tr>
                      <tr>
                        <th scope="row">15/04/22</th>
                        <td>Kondhwa Dumpyard</td>
                        <td>40</td>
                        <td>Katraj Chowk</td>
                      </tr>
                      <tr>
                        <th scope="row">30/08/22</th>
                        <td>E-waste plant</td>
                        <td>20</td>
                        <td>MIT college,Kothrud</td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }
}
