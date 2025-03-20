import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// 🎯 Talk to Us Floating Button Component
const TalkToUs = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Floating Button */}
      <div
        className="position-fixed d-flex align-items-center shadow"
        style={{
          top: "50%",
          left: "0px",
          transform: "translateY(-50%)",
          zIndex: 1100,
          backgroundColor: "white",
          padding: "10px 15px",
          borderRadius: "25px",
          fontSize: "14px",
          cursor: "pointer",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
        }}
        onClick={handleShow}
      >
        <img src="./src/assets/images/talktous.png" alt="Talk to us" style={{ width: "30px", marginRight: "5px" }} />
        <span className="fw-bold" style={{ color: "#0074D9" }}>Talk to us</span>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Talk to Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>How can we assist you? Feel free to reach out to our team.</p>
          <Button variant="primary" href="tel:+919999999999" className="w-100">
            📞 Call Us
          </Button>
          <Button variant="success" href="https://wa.me/919999999999" className="w-100 mt-2">
            💬 Chat on WhatsApp
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TalkToUs;