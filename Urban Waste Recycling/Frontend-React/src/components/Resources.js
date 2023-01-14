import { Component } from "react";
import { Container, Accordion } from "react-bootstrap";
import { Navigation } from "./Navigation";

export class Resources extends Component {
  render() {
    return (
      <>
        <Navigation></Navigation>
        <div>
          <Container className="mt-5 mb-5">
            <div className="container">
              <div>
                <p className="text-center h1 fw-bold  p-2"> Useful Resources</p>
              </div>
              <div className="container p-5">
                <p>
                  We are working in the spirit of reducing the waste generated
                  in urban region.Our community working coherently with the
                  policies formulated by Government of India. Kindly read below
                  for further useful information.
                </p>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" className="mb-2 shadow">
                    <Accordion.Header>
                      <b>Solid waste Management rules</b>
                    </Accordion.Header>
                    <Accordion.Body>
                      <b> MSW (Management and Handling) Rules 2000:</b> The MSW
                      Rules 2000 lays down rules for municipal authorities
                      responsible for collection, segregation, storage,
                      transportation, processing and disposal of municipal solid
                      wastes. MSW_rules_2000
                      <br></br>
                      <br></br>
                      <b>
                        Plastic Waste (Management and Handling) Rules, 2011:
                      </b>{" "}
                      Rules to regulate the manufacture,use, disposal and
                      recycling of plastic and which include a definition of
                      Extended Producer Responsibility (Pg 18, 3 g):
                      http://moef.nic.in/downloads/public-information/DOC070211-005.pdf
                      <br></br>
                      <br></br>
                      <b>
                        Electronic Waste (Management and Handling) Rules, 2011:
                      </b>{" "}
                      Rules specifying the responsibilities of producers, users,
                      collection centres, recyclers etc. of electronic goods:
                      http://envfor.nic.in/downloads/rules-and-regulations/1035e_eng.pdf
                      <br></br>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="mb-2 shadow">
                    <Accordion.Header>
                      <b>Reports</b>
                    </Accordion.Header>
                    <Accordion.Body>
                      <b> Bajaj Committee Report (1995) :</b> Report of the
                      high-powered committee set up to look into urban SWM which
                      brought to the fore the hazardous environmental and health
                      effects of the current SWM system. It strongly recommended
                      segregation and suggested that ‘Private agencies/NGOs,
                      ragpickers or their cooperatives may be involved in
                      primary collection of solid waste from house holds/
                      community bins.’
                      <br></br>
                      <br></br>
                      <b>
                        Report of the Committee Constituted by the Hon. Supreme
                        Court of India, “Solid Waste Management in Class I
                        Cities in India”, March 1999. (Barman Committee Report)
                        :
                      </b>{" "}
                      The committee has made recommendations for each stage of
                      solid waste management services and has laid down the
                      minimum level of service the local body must provide in a
                      given time frame.
                      <br></br>
                      <br></br>
                      <b> TAG report (2005) : </b> This report carries
                      recommendations on how to involve citizens in better SWM
                      practices. Pg 93, (i) also carries a recommendation to
                      ‘provide an arrangement for making rag pickers financially
                      independent from the money lenders operating in the form
                      of middlemen…who will (then) not be dependent on middlemen
                      for funds and can then sell the reclaimed materials at the
                      market rates.
                      <br></br>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="mb-2 shadow">
                    <Accordion.Header>
                      <b>E-Waste (Management) Rules, 2016</b>
                    </Accordion.Header>
                    <Accordion.Body>
                      <b> Bajaj Committee Report (1995) :</b> Report of the
                      high-powered committee set up to look into urban SWM which
                      brought to the fore the hazardous environmental and health
                      effects of the current SWM system. It strongly recommended
                      segregation and suggested that ‘Private agencies/NGOs,
                      ragpickers or their cooperatives may be involved in
                      primary collection of solid waste from house holds/
                      community bins.’
                      <br></br>
                      <br></br>
                      <b>
                        Report of the Committee Constituted by the Hon. Supreme
                        Court of India, “Solid Waste Management in Class I
                        Cities in India”, March 1999. (Barman Committee Report)
                        :
                      </b>{" "}
                      The committee has made recommendations for each stage of
                      solid waste management services and has laid down the
                      minimum level of service the local body must provide in a
                      given time frame.
                      <br></br>
                      <br></br>
                      <b> TAG report (2005) : </b> This report carries
                      recommendations on how to involve citizens in better SWM
                      practices. Pg 93, (i) also carries a recommendation to
                      ‘provide an arrangement for making rag pickers financially
                      independent from the money lenders operating in the form
                      of middlemen…who will (then) not be dependent on middlemen
                      for funds and can then sell the reclaimed materials at the
                      market rates.
                      <br></br>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }
}
