import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";


import logo from "../assets/images/flogo.png";

import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const { isLoggedIn } = useSelector((state) => state?.auth);

  return (
    <>
      {/* Navbar */}
      <Navbar className="bg-white py-2 shadow-sm sticky-top" style={{ height: "90px" }}>
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Hously"
              width="150"
              height="250px" // Adjust as needed
              style={{}}
            />
          </Navbar.Brand>

          {/* Navbar Toggler for Mobile */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Navbar Links */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto fw-semibold">
              {["home", "bank", "calculator", "contact"].map((path) => (
                <Nav.Link
                  key={path}
                  as={Link}
                  to={`/${path}`}
                  className="mx-3"
                  style={{ fontSize: "16px", fontWeight: "600", color: "#333" }} // Adjust font size for better balance
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Nav.Link>
              ))}
            </Nav>

            {/* Authentication Buttons */}
            {isLoggedIn ? (
              <Link to="/user-dashboard">
                <Button variant="dark" className="px-3 rounded-pill d-flex align-items-center gap-2">
                  <FaUserCircle size={18} /> Profile
                </Button>
              </Link>
            ) : (
              <div className="d-flex gap-2">
                <Button variant="dark" className="px-3 py-1 rounded-pill" onClick={() => setShowLogin(true)}>
                  Login
                </Button>
                <Button variant="outline-dark" className="px-3 py-1 rounded-pill" onClick={() => setShowSignup(true)}>
                  Sign Up
                </Button>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signin setShowLogin={setShowLogin} />
        </Modal.Body>
      </Modal>

      {/* Sign-up Modal */}
      <Modal show={showSignup} onHide={() => setShowSignup(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup setShowSignup={setShowSignup} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;