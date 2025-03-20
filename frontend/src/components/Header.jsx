import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container, NavDropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars, FaTimes, FaHome, FaUniversity, FaCalculator, FaGift, FaEnvelope, FaInfoCircle, FaUserCircle } from "react-icons/fa";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMovieView, setIsMovieView] = useState(window.innerWidth < 768);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const { isLoggedIn } = useSelector((state) => state?.auth);

  useEffect(() => {
    const handleResize = () => {
      setIsMovieView(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "/home" },
    { name: "About", icon: <FaInfoCircle />, link: "/about" },
    {
      name: "Loan Services",
      icon: <FaUniversity />,
      subMenu: [
        { name: "Home Loan", link: "/home-loan" },
        { name: "Loan Against Property", link: "/loan-against-property" },
        { name: "Balance Transfer", link: "/balance-transfer" },
        { name: "Business Loan", link: "/business-loan" }
      ]
    },
    {
      name: "Loan Calculator",
      icon: <FaCalculator />,
      subMenu: [
        { name: "EMI Calculator", link: "/emicalculator" },
        { name: "Eligibility Calculator", link: "/eligibilitycalculator" },
        { name: "Foreclosure Calculator", link: "/foreclosecalculator" },
        { name: "Balance Transfer Calculator", link: "/balancetransfer" },
        { name: "Prepayment Calculator", link: "/pre-payment" }
      ]
    },
    { name: "Offers & Cashback", icon: <FaGift />, link: "/offers&cashback" },
    { name: "Contact", icon: <FaEnvelope />, link: "/contact" }
  ];

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#f8f9fa", padding: "15px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", position: "sticky", top: 0, zIndex: 999 }}>
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/">
            <img src="./src/assets/images/Finn-logo.png" alt="Logo" width="180" height="30" />
          </Navbar.Brand>

          <Button onClick={handleToggleSidebar} style={{ background: "none", border: "none", fontSize: "1.8rem", cursor: "pointer", color: "#000" }}>
            <FaBars />
          </Button>
        </Container>
      </Navbar>

      <div style={{
        position: "fixed",
        bottom: isMovieView ? (isSidebarOpen ? "0" : "-100vh") : "auto",
        right: isMovieView ? "auto" : (isSidebarOpen ? "0" : "-300px"),
        left: isMovieView ? "0" : "auto",
        width: isMovieView ? "100%" : "300px",
        height: isMovieView ? "60vh" : "100vh",
        backgroundColor: "#f8f9fa",
        boxShadow: "0 -4px 8px rgba(0,0,0,0.2)",
        padding: "20px",
        transition: isMovieView ? "bottom 0.4s ease-in-out" : "right 0.4s ease-in-out",
        zIndex: 1000,
      }}>
        <Button onClick={handleToggleSidebar} style={{ background: "none", border: "none", fontSize: "1.8rem", cursor: "pointer", color: "#000", position: "absolute", top: "15px", right: "15px" }}>
          <FaTimes />
        </Button>

        <Nav className="d-flex flex-column mt-5">
          {menuItems.map((item, index) => (
            item.subMenu ? (
              <NavDropdown key={index} title={<span style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "bold", fontSize: "18px", color: "#000" }}>{item.icon} {item.name}</span>}>
                {item.subMenu.map((subItem, subIndex) => (
                  <NavDropdown.Item as={Link} to={subItem.link} key={subIndex} onClick={handleToggleSidebar} style={{ fontSize: "16px", fontWeight: "600", padding: "10px 15px", transition: "background-color 0.3s ease" }}>
                    {subItem.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ) : (
              <Nav.Link key={index} as={Link} to={item.link} onClick={handleToggleSidebar} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "15px", fontSize: "18px", fontWeight: "600", color: "#000", borderRadius: "8px", transition: "background-color 0.3s ease" }}>
                {item.icon} {item.name}
              </Nav.Link>
            )
          ))}

          {isLoggedIn ? (
            <Button className="mt-4" as={Link} to="/profile" onClick={handleToggleSidebar}>
              <FaUserCircle /> Profile
            </Button>
          ) : (
            <>
              <Button className="mt-4" onClick={() => { setShowLogin(true); handleToggleSidebar(); }}>Login</Button>
              <Button onClick={() => { setShowSignup(true); handleToggleSidebar(); }}>Sign Up</Button>
            </>
          )}
        </Nav>
      </div>

      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton><Modal.Title>Admin Login</Modal.Title></Modal.Header>
        <Modal.Body><Signin onClose={() => setShowLogin(false)} /></Modal.Body>
      </Modal>

      <Modal show={showSignup} onHide={() => setShowSignup(false)} centered>
        <Modal.Header closeButton><Modal.Title>Sign Up</Modal.Title></Modal.Header>
        <Modal.Body><Signup onClose={() => setShowSignup(false)} /></Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
