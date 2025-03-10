import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/Slice/authSlice";
import logo from "../assets/images/logo1.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    userName: "",
    email: "",
    password: "",
    mobileNumber: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!signupData.email || !signupData.password || !signupData.userName || !signupData.mobileNumber) {
      toast.error("Please fill all the details");
      return;
    }

    if (signupData.userName.length < 5) {
      toast.error("Name should be at least 5 characters");
      return;
    }

    const formData = new FormData();
    Object.keys(signupData).forEach(key => formData.append(key, signupData[key]));

    const response = await dispatch(createAccount(formData));
    if (response?.payload?.success) {
      navigate("/");
      toast.success("Account Created Successfully");
      setSignupData({ userName: "", email: "", password: "", mobileNumber: "" });
      setShow(false);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-light py-3 shadow-sm sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Hously" width="120" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto fw-semibold">
              <Nav.Link as={Link} to="/home" className="mx-4">Home</Nav.Link>
              <Nav.Link as={Link} to="/bank" className="mx-4">Bank Offers</Nav.Link>
              <Nav.Link as={Link} to="/calculator" className="mx-4">Calculators</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-4">Contact</Nav.Link>
            </Nav>
            <Button variant="dark" className="ms-3 px-4 rounded-pill" onClick={() => setShow(true)}>
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Admin Login Modal */}
      <Modal show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><strong>Admin Login Area</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            {['userName', 'email', 'mobileNumber', 'password'].map((field, idx) => (
              <div className="form-group mb-3" key={idx}>
                <label style={{ fontWeight: "500" }}>Enter {field}:</label>
                <input
                  type={field === 'password' ? 'password' : field === 'mobileNumber' ? 'number' : 'text'}
                  className="form-control"
                  value={signupData[field]}
                  name={field}
                  onChange={handleInputChange}
                  placeholder={`Enter ${field}`}
                />
              </div>
            ))}
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
              <Button type="submit" variant="primary">Create Account</Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;