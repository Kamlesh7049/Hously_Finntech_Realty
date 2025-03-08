import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPercentage, FaHome, FaBriefcase, FaBuilding, FaUserTie } from "react-icons/fa";
import cbls from "../assets/images/cblscore.png";

const PromoBanner = () => {
  return (
    <div className="bg-dark text-white text-center p-3 rounded d-flex flex-column flex-md-row justify-content-between align-items-center">
      <div className="d-flex align-items-center mb-3 mb-md-0">
        <img src={cbls} alt="Credit Score Meter" className="me-3" style={{ width: "80px" }} />
        <div>
          <h5 className="mb-1">Get your CIBIL Credit Report <span className="text-warning text-decoration-line-through">worth ₹500</span> for <span className="text-warning">FREE</span></h5>
          <p className="mb-0">5 Lac+ people have got their Credit Scores for FREE!</p>
        </div>
      </div>
      <Button variant="light" className="fw-bold text-dark">Check Your <span className="text-danger">FREE</span> Credit Score →</Button>
    </div>
  );
};

const loanData = [
  {
    title: "Personal Loan",
    description: "Paperless process at low rate",
    rate: "10.49%",
    color: "#d9534f",
    icon: <FaUserTie size={40} />,
  },
  {
    title: "Home Loan",
    description: "Instant approval at lowest interest rates",
    rate: "8.35%",
    color: "#5e5ce6",
    icon: <FaHome size={40} />,
  },
  {
    title: "Loan Against Property",
    description: "Lowest interest rate",
    rate: "9.2%",
    color: "#2980b9",
    icon: <FaBuilding size={40} />,
  },
  {
    title: "Business Loan",
    description: "Interest rate starting from",
    rate: "14%",
    color: "#2d3436",
    icon: <FaBriefcase size={40} />,
  },
];


const LoanOffers = () => {
  return (
    <Container className="my-5 text-center">
      <PromoBanner />
      <h2 className="fw-bold mt-4">Trending Loans & Offers</h2>
      <p className="text-muted">
        We offer the best financial products and services with a hassle-free process.
      </p>
      <Row className="mt-4">
        {loanData.map((loan, index) => (
          <Col key={index} lg={3} md={6} sm={12} className="mb-4 d-flex align-items-stretch">
            <Card className="shadow-sm border-0 p-3 w-100 h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div className="text-center mb-3">{loan.icon}</div>
                <div>
                  <Card.Title className="fw-bold" style={{ color: loan.color }}>
                    {loan.title}
                  </Card.Title>
                  <Card.Text className="text-muted">{loan.description}</Card.Text>
                </div>
                <div className="text-center">
                  <div
                    className="py-2 px-3 rounded text-white d-inline-block"
                    style={{ backgroundColor: loan.color }}
                  >
                    <FaPercentage className="me-2" size={20} /> {loan.rate}
                  </div>
                </div>
                <Button variant="link" className="mt-2 text-decoration-none text-primary fw-bold">
                  Check Eligibility &rarr;
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LoanOffers;
