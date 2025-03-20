import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPercentage, FaHome, FaBriefcase, FaBuilding, FaExchangeAlt, FaHeadset, FaPaperPlane } from "react-icons/fa";

// 🎯 Promo Banner Component
const PromoBanner = () => {
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    window.location.href = "https://play.google.com/store/apps";
  };

  const handleCreditScoreClick = () => {
    navigate("/credit-score");
  };

  return (
    <div className="position-fixed d-flex flex-column align-items-center" style={{ top: "50%", right: "0px", transform: "translateY(-50%)", zIndex: 1100 }}>
      <div className="bg-dark text-white d-flex flex-column align-items-center shadow" style={{ writingMode: "vertical-rl", padding: "10px", borderRadius: "25px", fontSize: "12px", width: "40px", cursor: "pointer" }} onClick={handleCreditScoreClick}>
        📊 Free Credit Score
      </div>
      <div className="bg-white text-dark d-flex flex-column align-items-center shadow" style={{ writingMode: "vertical-rl", padding: "10px", borderRadius: "25px", fontSize: "12px", width: "40px", marginTop: "10px", cursor: "pointer" }} onClick={handleDownloadClick}>
        📥 Download Our App
      </div>
    </div>
  );
};

// 🎯 Chatbot Component
const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    try {
      const response = await fetch("https://api.example.com/chatbot ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { text: data.reply, sender: "bot" };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }

    setInput("");
  };

  return (
    <>
      {/* Chat Support Button */}
      <div className="position-fixed d-flex align-items-center justify-content-center" style={{ bottom: "30px", right: "20px", zIndex: 1400, borderRadius: "50%", width: "55px", height: "55px", backgroundColor: "#0074D9", color: "#fff", cursor: "pointer", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }} onClick={() => setIsOpen(!isOpen)}>
        <FaHeadset size={40} />
      </div>

      {isOpen && (
        <div className="position-fixed d-flex flex-column bg-dark text-white p-3 rounded shadow-lg" style={{ bottom: "20px", right: "10px", zIndex: 1000, width: "260px", borderRadius: "15px" }}>
          <h6>Chat with AI Assistant</h6>
          <div style={{ maxHeight: "200px", overflowY: "auto", marginBottom: "10px" }}>
            {messages.map((msg, index) => (
              <div key={index} className={`text-${msg.sender === "user" ? "primary" : "light"} mb-1`}>
                {msg.text}
              </div>
            ))}
          </div>
          <Form.Control type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." className="mb-2" />
          <Button variant="light" size="sm" className="w-100" onClick={handleSendMessage}>
            Send <FaPaperPlane />
          </Button>
        </div>
      )}
    </>
  );
};

// 🎯 Loan Offers Component
const LoanOffers = () => {
  const loanData = [
    { title: "Home Loan", description: "Instant approval at lowest interest rates", rate: "8.35%", bgColor: "#0074D9", icon: <FaHome size={30} color="#0074D9" /> },
    { title: "Loan Against Property", description: "Lowest interest rate", rate: "9.2%", bgColor: "#0074D9", icon: <FaBuilding size={30} color="#0074D9" /> },
    { title: "Balance-Transfer Loan", description: "Paperless process at low rate", rate: "10.49%", bgColor: "#0074D9", icon: <FaExchangeAlt size={30} color="#0074D9" /> },
    { title: "Business Loan", description: "Interest rate starting from", rate: "14%", bgColor: "#0074D9", icon: <FaBriefcase size={30} color="#0074D9" /> },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-between align-items-center">
        <Col md={8} className="text-start">
          <h2 className="fw-bold text-black">🔥 Trending Loans & Offers</h2>
          <p className="text-muted">We offer the best financial products and services with a hassle-free process.</p>
        </Col>
        <Col md={4} className="d-flex justify-content-end">
          <PromoBanner />
        </Col>
      </Row>
      <Slider {...settings} className="mt-4">
        {loanData.map((loan, index) => (
          <div key={index} className="px-2">
            <Card className="p-3 text-center shadow-sm" style={{ borderRadius: "15px", backgroundColor: "#E8E8E8" }}>
              <div className="mb-3">{loan.icon}</div>
              <h5 className="fw-bold">{loan.title}</h5>
              <p className="text-muted">{loan.description}</p>
              <div className="py-2 px-3 rounded text-white" style={{ backgroundColor: "#0074D9" }}>
                <FaPercentage className="me-2" size={20} /> {loan.rate}
              </div>
            </Card>
          </div>
        ))}
      </Slider>
      <ChatSupport />
    </Container>
  );
};

export default LoanOffers;