import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#343a40", color: "#ffffff", padding: "40px 0" }}>
      <Container>
        <Row>
          {/* Quick Links */}
          <Col md={2}>
            <h5>Quick Links</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="/" style={{ color: "#ffffff", textDecoration: "none" }}>Home</a></li>
              <li><a href="/about" style={{ color: "#ffffff", textDecoration: "none" }}>About Us</a></li>
              <li><a href="/loan-services" style={{ color: "#ffffff", textDecoration: "none" }}>Loan Services</a></li>
              <li><a href="/contact" style={{ color: "#ffffff", textDecoration: "none" }}>Contact Us</a></li>
            </ul>
          </Col>

          {/* Legal & Policies */}
          <Col md={2}>
            <h5>Legal & Policies</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="/terms" style={{ color: "#ffffff", textDecoration: "none" }}>Terms & Conditions</a></li>
              <li><a href="/privacy" style={{ color: "#ffffff", textDecoration: "none" }}>Privacy Policy</a></li>
              <li><a href="/disclaimer" style={{ color: "#ffffff", textDecoration: "none" }}>Disclaimer</a></li>
            </ul>
          </Col>

          {/* Support */}
          <Col md={2}>
            <h5>Support</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="/faqs" style={{ color: "#ffffff", textDecoration: "none" }}>FAQs</a></li>
              <li><a href="/support" style={{ color: "#ffffff", textDecoration: "none" }}>Customer Support</a></li>
              <li><a href="/bank-partners" style={{ color: "#ffffff", textDecoration: "none" }}>Bank Partner Details</a></li>
            </ul>
          </Col>

          {/* Join Us */}
          <Col md={2}>
            <h5>Join Us</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="/refer-earn" style={{ color: "#ffffff", textDecoration: "none" }}>Refer & Earn</a></li>
              <li><a href="/business-partner" style={{ color: "#ffffff", textDecoration: "none" }}>Join as Business Partner</a></li>
            </ul>
          </Col>

          {/* Loan Services Pages */}
          <Col md={2}>
            <h5>Loan Services</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="/eligibility" style={{ color: "#ffffff", textDecoration: "none" }}>Eligibility Criteria</a></li>
              <li><a href="/documents" style={{ color: "#ffffff", textDecoration: "none" }}>Required Documents</a></li>
              <li><a href="/process" style={{ color: "#ffffff", textDecoration: "none" }}>Step-by-Step Process</a></li>
              <li><a href="/interest-rates" style={{ color: "#ffffff", textDecoration: "none" }}>Interest Rates & Govt. Charges</a></li>
              <li><a href="/benefits" style={{ color: "#ffffff", textDecoration: "none" }}>Benefits of Loan Type</a></li>
              <li><a href="/loan-faqs" style={{ color: "#ffffff", textDecoration: "none" }}>FAQs Related to Loan</a></li>
            </ul>
          </Col>

          {/* Contact Us */}
          <Col md={2}>
            <h5>Contact Us</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="/contact-form" style={{ color: "#ffffff", textDecoration: "none" }}>Inquiry Form</a></li>
              <li><a href="/address" style={{ color: "#ffffff", textDecoration: "none" }}>Office Address</a></li>
              <li><a href="/map" style={{ color: "#ffffff", textDecoration: "none" }}>Google Map Integration</a></li>
              <li><a href="/support-details" style={{ color: "#ffffff", textDecoration: "none" }}>Customer Support Details</a></li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4 text-center">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Hously Fintech Realty. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
