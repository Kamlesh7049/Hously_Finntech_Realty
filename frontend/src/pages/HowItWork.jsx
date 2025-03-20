import React, { useState } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const steps = [
  { id: 1, title: "Choose the best loan offers", content: "We work with a network of banks/lenders to provide the best offers at the lowest interest rates." },
  { id: 2, title: "Apply online in 5 minutes", content: "Fill out a simple application form to get started with your loan process." },
  { id: 3, title: "Complete your application", content: "Submit necessary documents and verify your identity to proceed." },
  { id: 4, title: "Get your loan disbursed", content: "Once approved, your loan amount will be credited to your account." }
];

const HowItWorks = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const navigate = useNavigate();

  return (
    <Container className="py-5 bg-light rounded">
      <Row className="justify-content-center align-items-center">
        <Col lg={5} md={6} sm={12}>
          <h2 className="text-center fw-bold">How it works?</h2>
          <p className="text-center text-muted">
            Complete your loan application in minutes. No lineups, No waiting, Completely paperless.
          </p>
          
          <ListGroup>
            {steps.map((step) => (
              <ListGroup.Item 
                key={step.id} 
                action 
                className={`d-flex align-items-center step-item ${
                  selectedStep?.id === step.id ? "bg-warning text-dark" : ""
                }`}
                onClick={() => setSelectedStep(selectedStep?.id === step.id ? null : step)}
              >
                <div className="step-circle me-2">{step.id}</div>
                <span className="fw-bold">{step.title}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {selectedStep && (
            <div className="mt-3 p-3 text-white selected-content">
              {selectedStep.content}
            </div>
          )}
        </Col>

        <Col lg={5} md={6} sm={12} className="text-center">
          <img src="./src/assets/images/hwt.png" alt="How it works" className="img-fluid rounded shadow-sm" />
        </Col>
      </Row>

      <div className="text-center mt-4">
        <Button variant="primary" className="px-4 py-2 rounded-pill" onClick={() => navigate("/loan-application")}>
          Get Started
        </Button>
      </div>

      <style>{`
        /* Step Item Styling */
        .step-item {
          transition: background 0.3s, color 0.3s;
        }

        /* Selected Step */
        .step-item.bg-warning {
          background: #ffd700 !important;
        }

        /* Selected Content Box */
        .selected-content {
          background: #0074d9;
          border-radius: 8px;
          transition: background 0.3s ease-in-out;
        }
      `}</style>
    </Container>
  );
};

export default HowItWorks;