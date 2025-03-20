import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const FeaturesSection = () => {
  const features = [
    {
      icon: "./src/assets/images/AccuELI.png",
      title: "Accurate Eligibility",
      description: "Based on your personal credit profile",
    },
    {
      icon: "./src/assets/images/Completely_Paperless.png",
      title: "Completely Paperless",
      description: "Multiple bank applications made online & hassle-free",
    },
    {
      icon: "./src/assets/images/Fast_Automated.png",
      title: "Fast & Automated",
      description: "Integrated with NSDL, Aadhar & Credit bureau",
    },
    {
      icon: "./src/assets/images/Professional_Advice.png",
      title: "Professional Advice",
      description: "From ex-bankers for your special loan needs",
    },
  ];

  return (
    <Container className="py-5">
      <Row className="text-center">
        {features.map((feature, index) => (
          <Col md={3} key={index} className="border-end last:border-0">
            <img src={feature.icon} alt={feature.title} width={50} className="mb-3" />
            <h5 className="fw-bold">{feature.title}</h5>
            <p className="text-muted">{feature.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturesSection;