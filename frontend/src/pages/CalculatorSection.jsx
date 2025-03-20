import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const calculators = [
  {
    title: "EMI Calculator",
    description: "Compute your monthly payments.",
    buttonText: "Calculate EMI",
    icon: "📊",
    path: "/emicalculator",
  },
  {
    title: "Eligibility Calculator",
    description: "Check your loan eligibility.",
    buttonText: "Check Now",
    icon: "📋",
    path: "/eligibilitycalculator",
  },
  {
    title: "Foreclose Calculator",
    description: "Compare interest rates.",
    buttonText: "Compare Now",
    icon: "💰",
    path: "/foreclosecalculator",
  },
  {
    title: "Balance Transfer",
    description: "Get better loan deals.",
    buttonText: "Compare Now",
    icon: "🔄",
    path: "/balancetransfer",
  },
  {
    title: "Pre-Payment Calculator",
    description: "Plan early repayments.",
    buttonText: "Compare Now",
    icon: "💵",
    path: "/pre-payment",
  },
];

const CalculatorSection = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Google Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Glacial+Indifference&display=swap"
        rel="stylesheet"
      />

      <div
        className="container py-4 bg-light min-vh-50 d-flex flex-column align-items-center"
        style={{ width: "90%", fontFamily: "'Glacial Indifference', sans-serif" }}
      >
        <h2
          className="text-center fw-bold mb-3"
          style={{
            fontSize: "2rem",
            color: "#212529",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.32)",
          }}
        >
          Financial Calculators
        </h2>
        <p className="text-center mx-auto mb-4 w-75" style={{ fontSize: "1rem", color: "#444" }}>
          Use our financial calculators to simplify credit decisions and plan your finances.
        </p>
        
        {/* Optimized Flexbox Layout */}
        <div className="d-flex flex-wrap justify-content-center gap-3 w-100">
          {calculators.map((calc, index) => (
            <div key={index} className="p-2">
              <div
                className="card shadow-lg text-center p-3 border-0"
                style={{
                  width: "200px", // Reduced width for better flex layout
                  transition: "transform 0.3s",
                  cursor: "pointer",
                  borderRadius: "15px",
                  backgroundColor: "#E8E8E8",
                  fontFamily: "'Glacial Indifference', sans-serif",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: "180px",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div className="fs-2">{calc.icon}</div> {/* Icon size adjusted */}
                <h6 className="fw-semibold text-center" style={{ color: "#000" }}>{calc.title}</h6>
                <p className="text-muted small">{calc.description}</p>
                <button
                  className="btn rounded-pill px-3 py-1 fw-bold shadow-sm"
                  style={{ backgroundColor: "#0074d9", color: "#fff", border: "none", fontSize: "0.8rem" }}
                  onClick={() => navigate(calc.path)}
                >
                  {calc.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CalculatorSection;