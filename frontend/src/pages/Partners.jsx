import React from "react";
import iciciLogo from "../assets/banklogo/icici-bank.jpg";
import hdfcLogo from "../assets/banklogo/hdfc-bank.jpg";
import tataLogo from "../assets/banklogo/tata-capital.jpg";
import yesLogo from "../assets/banklogo/yes-bank.jpg";
import axisLogo from "../assets/banklogo/axis-bank.jpg";
import kotakLogo from "../assets/banklogo/kotak-mahindra-bank.jpg";
import rblLogo from "../assets/banklogo/rbl.jpg";
import capitalFirstLogo from "../assets/banklogo/capital-first.jpg";
import sbiLogo from "../assets/banklogo/state-bank-of-india.jpg";
import barodaLogo from "../assets/banklogo/bank-of-baroda.jpg";
import unionLogo from "../assets/banklogo/union-bank-of-india.jpg"; // ✅ नया जोड़ा गया
import andhraLogo from "../assets/banklogo/andhra-bank.jpg";
import pnbLogo from "../assets/banklogo/pnb.jpg";
import canaraLogo from "../assets/banklogo/canara-bank.jpg";
import idfcLogo from "../assets/banklogo/infrastructure-development-fin.jpg";

const partners = [
  { name: "ICICI Bank", logo: iciciLogo },
  { name: "HDFC Bank", logo: hdfcLogo },
  { name: "Tata Capital", logo: tataLogo },
  { name: "Yes Bank", logo: yesLogo },
  { name: "Axis Bank", logo: axisLogo },
  { name: "Kotak Mahindra Bank", logo: kotakLogo },
  { name: "RBL", logo: rblLogo },
  { name: "Capital First", logo: capitalFirstLogo },
  // { name: "SBI Bank", logo: sbiLogo },
  // { name: "Baroda Bank", logo: barodaLogo },
  // { name: "Union Bank of India", logo: unionLogo }, // ✅ नया जोड़ा गया
  // { name: "Andhra Bank", logo: andhraLogo },
  // { name: "PNB Bank", logo: pnbLogo },
  // { name: "Canara Bank", logo: canaraLogo },
  // { name: "IDFC Bank", logo: idfcLogo },
];
const Partners = () => {
  return (
    <div className="partners-container">
      <div className="partners-text">
        <h2>Our Partners</h2>
        <p>
          We have partnered with these banks and NBFCs to make loan applications
          easy.
        </p>
      </div>
      <div className="partners-logos">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="partner-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="partner-logo"
            />
            <span>{partner.name}</span>
          </div>
        ))}
      </div>

      <style>{`
        .partners-container {
          text-align: center;
          background: #0074d9;
          padding: 40px;
          border-radius: 20px;
          color: white;
          font-family: sans-serif;
          max-width: 70%;
          margin: auto;
        }

        .partners-text h2 { color: #ffd700; }
        .partners-text p { max-width: 80%; margin: auto; }

        .partners-logos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 15px;
          justify-content: center;
          margin-top: 30px;
        }

        .partner-card {
          background: white;
          color: black;
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          font-size: 0.8rem;
          font-weight: bold;
          text-align: center;
          padding: 10px;
          opacity: 0;
          transform: translateX(-100px);
          animation: slideInOut 3s ease-in-out infinite;
        }

        .partner-logo {
          width: 50px;
          height: 50px;
          object-fit: contain;
          margin-bottom: 5px;
        }

        @keyframes slideInOut {
          0% { opacity: 0; transform: translateX(-100px); }
          25% { opacity: 1; transform: translateX(0); }
          75% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(100px); }
        }
      `}</style>
    </div>
  );
};

export default Partners;
