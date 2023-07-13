/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionAbout() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
          <div className="title">
             <Col md="12">
               <h1>About</h1>
             </Col>
          </div>
          </Row>
          <Row>
            <Col md="10">
              <p className="description">
                Launchor is a remarkably practical and effective kitesurfing anchor that will secure your kite while you
                get ready to self-launch it. Why take the risk to damage your kite or injur yourself when Launchor is here to help.
              </p>
              <br></br>
              <p className="description">
                Your friends have gone home and the wind has picked up while you were on the water. Landing your kite might be tricky.
                But not to worry as your Launchor is here in the sand, waiting for your return. It will hold your kite after you land it,
                allowing you to safely unhook yourself from it.
              </p>
              <br></br><br></br><br></br>
            </Col>
            <Col md="2" className="center">
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionAbout;
