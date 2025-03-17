import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import logo from "../assets/images/Hously Finserv logo.png";
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/Slice/authSlice";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    console.log("Admin Login Attempt:", { username, password });
    handleClose();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    userName: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  }

  async function createNewAccount(event) {
    event.preventDefault();
    if (
      !signupData.email ||
      !signupData.password ||
      !signupData.userName ||
      !signupData.mobileNumber
    ) {
      toast.error("Please fill all the details");
      return;
    }

    // checking name field length
    if (signupData.userName.length < 5) {
      toast.error("Name should be atleast of 5 characters");
      return;
    }
    // checking valid email
    // if (!isEmail(signupData.email)) {
    //   toast.error("Invalid email id");
    //   return;
    // }
    // checking password validation
    // if (!isPassword(signupData.password)) {
    //   toast.error("Password should be 6 - 16 character long with atleast a number and special character");
    //   return;
    // }

    const formData = new FormData();
    formData.append("userName", signupData.userName);
    formData.append("email", signupData.email);
    formData.append("password", signupData.password);
    formData.append("mobileNumber", signupData.mobileNumber);

    // dispatch create account action
    const response = await dispatch(createAccount(formData));
    if (response?.payload?.success) navigate("/");

    setSignupData({
      userName: "",
      email: "",
      password: "",
      mobileNumber: "",
    });
  }

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-light py-3 shadow-sm"
        style={{ position: "sticky", top: 0, zIndex: 999 }}
      >
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
              <Nav.Link
                as={Link}
                to="/home"
                className="nav-link-custom mx-4"
                style={{ fontSize: "18px", fontWeight: "bold" }} 
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/bank"
                className="nav-link-custom mx-4"
                style={{ fontSize: "18px", fontWeight: "bold" }} 
              >
                Bank Offers
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/calculator"
                className="nav-link-custom mx-4"
                style={{ fontSize: "18px", fontWeight: "bold" }} 
              >
                Calculators
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className="nav-link-custom mx-4"
                style={{ fontSize: "18px", fontWeight: "bold" }} 
              >
                Contact
              </Nav.Link>
            </Nav>

            {/* Login Button */}
            <Button
              variant="dark"
              className="ms-3 px-4 rounded-pill"
              onClick={handleShow}
            >
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Admin Login Modal */}
      <form>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontWeight: "bold", color: "#343a40" }}>
              Admin Login Area
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ marginBottom: "15px", color: "#6c757d" }}>
              Admin Area for managing your website
            </p>
            <div className="form-group mb-3">
              <label htmlFor="admin-username" style={{ fontWeight: "500" }}>
                Enter Username:
              </label>
              <input
                type="text"
                className="form-control"
                value={signupData.userName}
                name="userName"
                onChange={handleUserInput}
                placeholder="Enter username"
                style={{ marginTop: "5px" }}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="admin-username" style={{ fontWeight: "500" }}>
                Enter Email:
              </label>
              <input
                type="text"
                className="form-control"
                value={signupData.email}
                name="email"
                onChange={handleUserInput}
                placeholder="Enter username"
                style={{ marginTop: "5px" }}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="admin-username" style={{ fontWeight: "500" }}>
                Enter Mobile Number:
              </label>
              <input
                type="number"
                className="form-control"
                value={signupData.mobileNumber}
                name="mobileNumber"
                onChange={handleUserInput}
                placeholder="Enter username"
                style={{ marginTop: "5px" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="admin-password" style={{ fontWeight: "500" }}>
                Enter Password:
              </label>
              <input
                type="password"
                className="form-control"
                value={signupData.password}
                onChange={handleUserInput}
                name="password"
                placeholder="Enter password"
                style={{ marginTop: "5px" }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{ borderRadius: "5px" }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={createNewAccount}
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
      </form>
    </>
  );
};

export default Header;