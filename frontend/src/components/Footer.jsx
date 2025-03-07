import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          {/* About Section */}
          <Col md={3}>
            <h5>About</h5>
            <p>
              C305, 3rd Floor, Shubhchandra, Rahati, Pune, 411017, Maharashtra, India
            </p>
            <p>
              Toll-free number: <a href="tel:18002083344" style={linkStyle}>1800 208 3344</a>
            </p>
            <p>
              Write to us at:{" "}
              <a href="mailto:connect@huslyfintechrealty.com" style={linkStyle}>
                connect@huslyfintechrealty.com
              </a>
            </p>
            <h6>Keep in Touch</h6>
            <div className="d-flex gap-3">
              <a href="#" style={iconStyle}>
                <FaInstagram />
              </a>
              <a href="#" style={iconStyle}>
                <FaFacebookF />
              </a>
              <a href="#" style={iconStyle}>
                <FaLinkedinIn />
              </a>
            </div>
          </Col>

          {/* FAQs Section */}
          <Col md={3}>
            <h5>FAQs</h5>
            <p>
              Looking for answers about loans? Urban Money FAQs cover home
              loans, personal loans, business loans, and loans against property
              to help you make informed decisions.
            </p>
          </Col>

          {/* Support Section */}
          <Col md={3}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Live Chat</li>
              <li>Report an Issue</li>
            </ul>
          </Col>

          {/* Contact Us Section */}
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>
              We would love to hear from you! Call us on our India Toll Free
              Number: <a href="tel:18002083344" style={linkStyle}>1800 208 3344</a> or fill the
              form.
            </p>
          </Col>
        </Row>

        {/* Footer Bottom Section */}
        <div className="text-center py-3 border-top mt-3">
          © 2025 <a href="https://www.huslyfintechrealty.com" style={linkStyle}>
            www.huslyfintechrealty.com
          </a>. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

// ✅ Footer Styles
const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px 0",
  fontFamily: "Arial, sans-serif",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

const iconStyle = {
  color: "#fff",
  fontSize: "1.5rem",
};

export default Footer;
