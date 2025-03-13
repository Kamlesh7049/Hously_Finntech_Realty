import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const calculators = [
  {
    title: "EMI Calculator",
    description: "A Home Loan EMI Calculator permits you to compute your monthly payments.",
    buttonText: "Calculate EMI",
    icon: "📊",
    path: "/emicalculator",
  },
  {
    title: "Eligibility Calculator",
    description: "Determine your housing loan eligibility through Home Loan.",
    buttonText: "Check Now",
    icon: "📋",
    path: "/eligibilitycalculator",
  },
  {
    title: "ForecloseCalculator",
    description: "Compare interest rates from various banks to make informed decisions.",
    buttonText: "Compare Now",
    icon: "💰",
    path: "/foreclosecalculator",
  }
];

const CalculatorSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="container py-5 bg-light min-vh-100 d-flex flex-column align-items-center" style={{ width: '90%' }}>
      <h2 className="text-center fw-bold mb-4" style={{
        fontSize: '2.5rem',
        background: 'linear-gradient(90deg, #007bff, #00c6ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
      }}>
        Financial Calculators
      </h2>
      <p className="text-center mx-auto mb-5 w-75" style={{ fontSize: '1.1rem', color: '#555' }}>
        We aim to ease the burden of credit procedures through the help of financial calculators.
        Compute your monthly payments in advance for better management.
      </p>
      <div className="row g-4 w-100 justify-content-center">
        {calculators.map((calc, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card shadow-lg text-center p-4 border-0 rounded-lg" style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <div className="fs-1 mb-3">{calc.icon}</div>
              <h5 className="fw-semibold mb-2" style={{ color: '#007bff' }}>{calc.title}</h5>
              <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>{calc.description}</p>
              <button className="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow-sm" onClick={() => handleNavigation(calc.path)}>
                {calc.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalculatorSection;