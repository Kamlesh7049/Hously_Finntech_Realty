import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

// ✅ Import Images from `src/assets/images/`
import AccuELI from "../assets/images/AccuELI.png";
import Completely_Paperless from "../assets/images/Completely_Paperless.png";
import Fast_Automated from "../assets/images/Fast_Automated.png";
import Professional_Advice from "../assets/images/Professional_Advice.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: AccuELI,
      title: "Accurate Eligibility",
      description: "Based on your personal credit profile",
    },
    {
      icon: Completely_Paperless,
      title: "Completely Paperless",
      description: "Multiple bank applications made online & hassle-free",
    },
    {
      icon: Fast_Automated,
      title: "Fast & Automated",
      description: "Integrated with NSDL, Aadhar & Credit bureau",
    },
    {
      icon: Professional_Advice,
      title: "Professional Advice",
      description: "From ex-bankers for your special loan needs",
    },
  ];

  return (
    <Container className="py-5">
      <Row className="text-center">
        {features.map((feature, index) => (
          <Col md={3} key={index} className="border-end last:border-0">
            <img
              src={feature.icon}
              alt={feature.title}
              width={50}
              height={50}
              className="mb-3"
              onError={(e) => (e.target.src = DefaultImage)} // ✅ Handle missing images
            />
            <h5 className="fw-bold">{feature.title}</h5>
            <p className="text-muted">{feature.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturesSection;
