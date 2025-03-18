import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUsers, FaRupeeSign, FaCity, FaBuilding } from "react-icons/fa";

const statsData = [
  { icon: <FaUsers size={26} color="#0074D9" />, number: "4 Lacs", text: "Happy Customers" },
  { icon: <FaRupeeSign size={26} color="#28a745" />, number: "30,000 CR", text: "Disbursed Annually" },
  { icon: <FaCity size={26} color="#ff6347" />, number: "150", text: "Cities Covered" },
  { icon: <FaBuilding size={26} color="#ff9800" />, number: "300+", text: "Branches" },
];

const StatsSection = () => {
  return (
    <>
      {/* Google Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Glacial+Indifference&display=swap"
        rel="stylesheet"
      />

      <div
        className="bg-light py-4"
        style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
      >
        <div className="container d-flex justify-content-center align-items-center">
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="d-flex flex-column align-items-center p-2 shadow-sm rounded"
                style={{
                  backgroundColor: "#fff",
                  minWidth: "160px", // Box size reduced
                  padding: "15px",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  cursor: "pointer",
                  textAlign: "center",
                  border: "1px solid #ddd",
                  boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0px 5px 12px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0px 3px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                {/* Icon */}
                <div className="mb-1">{stat.icon}</div>

                {/* Number */}
                <span className="fw-bold fs-5" style={{ color: "#212529" }}>
                  {stat.number}
                </span>

                {/* Description */}
                <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {stat.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsSection;
