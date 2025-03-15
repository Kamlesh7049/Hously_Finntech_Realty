import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../assets/images/logo1.png";
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/Slice/authSlice";

const Header = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for Login Form
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // State for Sign-up Form
  const [signupData, setSignupData] = useState({
    userName: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  // Handle Modal Toggle
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle User Input for Sign-up Form
  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  }

  // Handle User Input for Login Form
  function handleLoginInput(e) {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  // Handle Admin Login (Currently Just a Console Log)
  const handleSubmit = () => {
    console.log("Admin Login Attempt:", loginData);
    toast.success("Admin login successful (dummy function)");
    handleClose();
  };

  // Handle Sign-up
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

    // Checking name field length
    if (signupData.userName.length < 5) {
      toast.error("Name should be at least 5 characters");
      return;
    }

    const formData = new FormData();
    formData.append("userName", signupData.userName);
    formData.append("email", signupData.email);
    formData.append("password", signupData.password);
    formData.append("mobileNumber", signupData.mobileNumber);

    // Dispatch create account action
    const response = await dispatch(createAccount(formData));
    if (response?.payload?.success) {
      toast.success("Account created successfully!");
      navigate("/");
    }

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
            {/* Navigation Links */}
            <Nav className="mx-auto fw-semibold">
              {["home", "bank", "calculator", "contact"].map((path) => (
                <Nav.Link
                  key={path}
                  as={Link}
                  to={`/${path}`}
                  className="nav-link-custom mx-4"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Nav.Link>
              ))}
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
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              value={loginData.username}
              name="username"
              onChange={handleLoginInput}
              placeholder="Enter username"
              style={{ marginTop: "5px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="admin-password" style={{ fontWeight: "500" }}>
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              value={loginData.password}
              onChange={handleLoginInput}
              name="password"
              placeholder="Enter password"
              style={{ marginTop: "5px" }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
