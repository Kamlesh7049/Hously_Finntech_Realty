import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

// ✅ Import Image from `src/assets/images/`
import IndiaMap from "../assets/images/map.png";

const PartnerBusinessProgram = () => {
  return (
    <Container fluid className="p-5">
      <Row className="align-items-center justify-content-center d-flex flex-column flex-md-row">
        {/* Left Side - India Map */}
        <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
          <img
            src={IndiaMap} // ✅ Use Imported Image
            alt="India Map"
            className="img-fluid map-image"
          />
        </Col>

        {/* Right Side - Program Info */}
        <Col xs={12} md={6} className="text-center text-md-start">
          <h2 className="fw-bold">Partner Business Program</h2>
          <p className="text-muted">
            Designed exclusively to help{" "}
            <span className="highlight-yellow">Hously-</span>
            <span className="highlight-blue">finserv</span> authorized partners,{" "}
            <br />
            the Hously Finserve Partner app lets you view earnings and case
            updates in real time, <br /> and get privileged access.
          </p>
        </Col>
      </Row>

      <style>{`
        .map-image {
          width: 100%;
          max-width: 350px;
        }

        .highlight-yellow {
            background-color: #0074d9;
          font-weight: bolder;
          padding: 2px 5px;
        }

        .highlight-blue {
      background-color: #ffd700;
          font-weight: bolder;
          padding: 2px 5px;
          color: white;
        }

        @media (max-width: 768px) {
          .map-image {
            max-width: 280px;
          }
        }
      `}</style>
    </Container>
  );
};

export default PartnerBusinessProgram;
