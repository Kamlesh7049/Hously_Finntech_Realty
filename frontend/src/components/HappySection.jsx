import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUsers, FaRupeeSign, FaCity, FaBuilding } from "react-icons/fa";
import { Carousel } from "react-bootstrap";

const statsData = [
  { icon: <FaUsers size={24} color="#0074D9" />, number: "4 Lacs", text: "Happy Customers" },
  { icon: <FaRupeeSign size={24} color="#28a745" />, number: "30,000 CR", text: "Disbursed Annually" },
  { icon: <FaCity size={24} color="#ff6347" />, number: "150", text: "Cities Covered" },
  { icon: <FaBuilding size={24} color="#ff9800" />, number: "300+", text: "Branches" },
];

const StatsSection = () => {
  return (
    <div className="bg-light py-3">
      <div className="container">
        {/* Desktop View: Show Stats in a Row */}
        <div className="d-none d-md-flex flex-wrap justify-content-between align-items-center p-3 shadow-sm stats-container">
          {statsData.map((stat, index) => (
            <div key={index} className="d-flex flex-column align-items-center flex-fill">
              <div>{stat.icon}</div>
              <span className="fw-bold fs-6 text-dark mt-1">{stat.number}</span>
              <span className="text-muted" style={{ fontSize: "0.85rem" }}>{stat.text}</span>
            </div>
          ))}
        </div>

        {/* Mobile View: Show Stats in Carousel */}
        <Carousel indicators={false} controls={true} className="d-md-none">
          {statsData.map((stat, index) => (
            <Carousel.Item key={index}>
              <div className="text-center py-3">
                <div>{stat.icon}</div>
                <span className="fw-bold fs-5 text-dark mt-2 d-block">{stat.number}</span>
                <span className="text-muted" style={{ fontSize: "0.9rem" }}>{stat.text}</span>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <style>{`
        .stats-container {
          background: #fff;
          border-radius: 8px;
          border: 1px solid #ddd;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          min-height: 60px;
          padding: 10px;
        }

        .carousel .carousel-control-prev, .carousel .carousel-control-next {
          filter: invert(1);
        }
      `}</style>
    </div>
  );
};

export default StatsSection;