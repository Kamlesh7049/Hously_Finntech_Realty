import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

import logo from "../assets/images/Hously Finserv logo.png";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const { isLoggedIn } = useSelector((state) => state?.auth);

  // Close Login Modal
  const handleCloseLogin = () => setShowLogin(false);
  // Close Signup Modal
  const handleCloseSignup = () => setShowSignup(false);

  return (
    <>
      <Navbar expand="lg" className="bg-light py-3 shadow-sm" style={{ position: "sticky", top: 0, zIndex: 999 }}>
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Hously" width="120" />
          </Navbar.Brand>

          {/* Toggle Button for Mobile View */}
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            {/* Navigation Links */}
            <Nav className="mx-auto fw-semibold">
              {["home", "bank", "calculator", "contact"].map((path) => (
                <Nav.Link key={path} as={Link} to={`/${path}`} className="nav-link-custom mx-4" style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Nav.Link>
              ))}
            </Nav>

            {/* Conditional Rendering for Auth Buttons */}
            {isLoggedIn ? (
              <Link to={"/user-dashboard"}>
                <Button variant="dark" className="ms-3 px-4 rounded-pill">
                  Profile
                </Button>
              </Link>
            ) : (
              <>
                <Button variant="dark" className="ms-3 px-4 rounded-pill" onClick={() => setShowLogin(true)}>
                  Login
                </Button>
                <Button variant="outline-dark" className="ms-3 px-4 rounded-pill" onClick={() => setShowSignup(true)}>
                  Sign Up
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Admin Login Modal */}
      <Modal show={showLogin} onHide={handleCloseLogin} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold", color: "#343a40" }}>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signin setShowLogin={setShowLogin} />
        </Modal.Body>
      </Modal>

      {/* Sign-up Modal */}
      <Modal show={showSignup} onHide={handleCloseSignup} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold", color: "#343a40" }}>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup setShowSignup={setShowSignup} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
