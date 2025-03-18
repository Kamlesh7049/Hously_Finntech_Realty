import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Footer = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          {/* About Section */}
          <Col md={3}>
            <h5 style={headingStyle}>About</h5>
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
            <h6 style={headingStyle}>Keep in Touch</h6>
            <div className="d-flex gap-3">
              <a href="#" style={iconStyle}><FaInstagram /></a>
              <a href="#" style={iconStyle}><FaFacebookF /></a>
              <a href="#" style={iconStyle}><FaLinkedinIn /></a>
            </div>
          </Col>

          {/* FAQs Section */}
          <Col md={3}>
            <h5 style={headingStyle}>FAQs</h5>
            <p>
              Looking for answers about loans? Urban Money FAQs cover home
              loans, personal loans, business loans, and loans against property
              to help you make informed decisions.
            </p>
          </Col>

          {/* Support Section */}
          <Col md={3}>
            <h5 style={headingStyle}>Support</h5>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>
                <span style={clickableStyle} onClick={() => navigate("/contact")}>
                  Contact Us
                </span>
              </li>
              <li>Live Chat</li>
              <li>Report an Issue</li>
            </ul>
          </Col>

          {/* Contact Us Section */}
          <Col md={3}>
            <h5 style={headingStyle}>Contact Us</h5>
            <p>
              We would love to hear from you! Call us on our India Toll-Free
              Number: <a href="tel:18002083344" style={linkStyle}>1800 208 3344</a> or{" "}
              <span style={clickableStyle} onClick={() => navigate("/contact")}>
                fill the form.
              </span>
            </p>
          </Col>
        </Row>

        {/* Footer Bottom Section */}
        <div className="text-center py-3 border-top mt-3" style={bottomSectionStyle}>
          © 2025 <a href="https://www.houslyfinntechrealty.com" style={linkStyle}>
            www.houslyfintechrealty.com
          </a>. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

// ✅ Footer Styles
const footerStyle = {
  backgroundColor: "#0074D9",
  color: "#fff",
  padding: "30px 0",
  fontFamily: "'Glacial Indifference', sans-serif",
};

const headingStyle = {
  color: "#FFD700",
  fontWeight: "bold",
};

const linkStyle = {
  color: "#FFD700",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "color 0.3s ease",
};

const clickableStyle = {
  color: "#FFD700",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "color 0.3s ease",
};

const iconStyle = {
  color: "#FFD700",
  fontSize: "1.5rem",
  transition: "transform 0.3s ease, color 0.3s ease",
};

const bottomSectionStyle = {
  backgroundColor: "#0056b3",
  padding: "15px 0",
};

export default Footer;
