import React from "react";

const partners = [
  { name: "ICICI Bank" },
  { name: "HDFC Bank" },
  { name: "Tata Capital" },
  { name: "Yes Bank" },
  { name: "Axis Bank" },
  { name: "Kotak Mahindra Bank" },
  { name: "RBL" },
  { name: "Capital First" },
];

const Partners = () => {
  return (
    <div className="partners-container">
      <div className="partners-text">
        <h2>Our Partners</h2>
        <p>
          In order to reduce the hassle of filling forms and submitting documents, fixing meetings
          with loan agents, and dealing with complex economic jargon, we have partnered with these
          banks and NBFCs to make applying for a loan an easy and smooth process.
        </p>
      </div>
      <div className="partners-logos">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="partner-card"
            style={{ animationDelay: `${index * 0.7}s` }} // Faster stagger effect
          >
            <span>{partner.name}</span>
          </div>
        ))}
      </div>

      {/* Embedded CSS for styling and animations */}
      <style>{`
        /* Container */
        .partners-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: #0074d9;
          padding: 40px;
          border-radius: 20px;
          color: white;
          font-family: "Glacial Indifference", sans-serif;
          max-width: 95%;
          margin: auto;
        }

        /* Title */
        .partners-text h2 {
          font-size: 2rem;
          margin-bottom: 10px;
          color: #ffd700;
        }

        /* Description */
        .partners-text p {
          font-size: 1.1rem;
          line-height: 1.5;
          max-width: 80%;
          margin: auto;
        }

        /* Logo Container */
        .partners-logos {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }

        /* Partner Card */
        .partner-card {
          background: linear-gradient(135deg, #0074d9, white);
          color: black;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          font-size: 0.9rem;
          font-weight: bold;
          text-align: center;
          opacity: 0;
          transform: translateX(-100px);
          animation: slideInOut 3s ease-in-out infinite;
        }

        /* Faster Slide-in and Fade-out Animation */
        @keyframes slideInOut {
          0% { opacity: 0; transform: translateX(-100px); }
          25% { opacity: 1; transform: translateX(0); }
          75% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(100px); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .partners-text p {
            max-width: 100%;
          }
          .partner-card {
            width: 80px;
            height: 80px;
          }
        }

        @media (max-width: 768px) {
          .partners-container {
            padding: 30px;
          }
          .partners-text h2 {
            font-size: 1.8rem;
          }
          .partners-text p {
            font-size: 1rem;
          }
          .partner-card {
            width: 70px;
            height: 70px;
          }
        }

        @media (max-width: 480px) {
          .partners-container {
            padding: 20px;
          }
          .partners-text h2 {
            font-size: 1.6rem;
          }
          .partners-text p {
            font-size: 0.9rem;
          }
          .partner-card {
            width: 60px;
            height: 60px;
            font-size: 0.8rem;
            transform: translateX(-80px);
          }
        }
      `}</style>
    </div>
  );
};

export default Partners;