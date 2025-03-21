import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUsers, FaRupeeSign, FaCity, FaBuilding } from "react-icons/fa";
import { Carousel } from "react-bootstrap";

const statsData = [
  {
    icon: <FaUsers size={18} color="#0074D9" />,
    number: "4 Lacs",
    text: "Happy Customers",
  },
  {
    icon: <FaRupeeSign size={18} color="#28a745" />,
    number: "30,000 CR",
    text: "Disbursed Annually",
  },
  {
    icon: <FaCity size={18} color="#ff6347" />,
    number: "150",
    text: "Cities Covered",
  },
  {
    icon: <FaBuilding size={18} color="#ff9800" />,
    number: "300+",
    text: "Branches",
  },
];

const StatsSection = () => {
  return (
    <div className="bg-light py-1">
      <div className="container">
        {/* Desktop View: Show Stats in a Row */}
        <div className="d-none d-md-flex flex-wrap justify-content-between align-items-center p-0 shadow-sm stats-container">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center flex-fill mx-0"
            >
              <div className="mb-1">{stat.icon}</div>
              <span className="fw-bold fs-6 text-dark mb-0">{stat.number}</span>
              <span className="text-muted" style={{ fontSize: "0.7rem" }}>
                {stat.text}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile View: Show Two Stats in One Slide */}
        <Carousel
          indicators={false}
          controls={false}
          touch={true}
          className="d-md-none"
        >
          {statsData
            .reduce((acc, _, index, arr) => {
              if (index % 2 === 0) acc.push(arr.slice(index, index + 2));
              return acc;
            }, [])
            .map((pair, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-between px-1 py-0">
                  {pair.map((stat, subIndex) => (
                    <div key={subIndex} className="text-center mx-1">
                      <div className="mb-1">{stat.icon}</div>
                      <span className="fw-bold fs-6 text-dark mb-0 d-block">
                        {stat.number}
                      </span>
                      <span
                        className="text-muted"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {stat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
        </Carousel>
      </div>

      <style>{`
        .stats-container {
          background: #fff;
          border-radius: 5px;
          border: 1px solid #ddd;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
          min-height: 35px;
          padding: 1px;
        }
      `}</style>
    </div>
  );
};

export default StatsSection;
