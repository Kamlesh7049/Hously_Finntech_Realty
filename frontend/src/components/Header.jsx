import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import logo from "../assets/images/logo1.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    console.log("Admin Login Attempt:", { username, password });
    handleClose();
  };

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
            
            {/* Navigation Links with Space Between */}
            <Nav className="mx-auto fw-semibold">
              <Nav.Link as={Link} to="/home" className="mx-4">Home</Nav.Link>
              <Nav.Link as={Link} to="/bank" className="mx-4">Bank Offers</Nav.Link>
              <Nav.Link as={Link} to="/calculator" className="mx-4">Calculators</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-4">Contact</Nav.Link>
            </Nav>

            {/* Login Button */}
            <Button variant="dark" className="ms-3 px-4 rounded-pill" onClick={handleShow}>
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Admin Login Modal */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold", color: "#343a40" }}>Admin Login Area</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ marginBottom: "15px", color: "#6c757d" }}>
            Admin Area for managing your website
          </p>
          <div className="form-group mb-3">
            <label htmlFor="admin-username" style={{ fontWeight: "500" }}>Enter Admin:</label>
            <input
              type="text"
              id="admin-username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              style={{ marginTop: "5px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="admin-password" style={{ fontWeight: "500" }}>Enter Password:</label>
            <input
              type="password"
              id="admin-password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{ marginTop: "5px" }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{ borderRadius: "5px" }}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            style={{
              backgroundColor: "#007bff",
              borderColor: "#007bff",
              borderRadius: "5px",
              padding: "8px 15px",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
