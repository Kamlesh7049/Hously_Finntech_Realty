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
    <div className="bg-light py-2">
      <div className="container">
        {/* Desktop View: Show Stats in a Row */}
        <div className="d-none d-md-flex justify-content-center align-items-center stats-container">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center stat-item">
              <div>{stat.icon}</div>
              <span className="fw-bold fs-6 text-dark mb-0">{stat.number}</span>
              <span className="text-muted d-block small">{stat.text}</span>
            </div>
          ))}
        </div>

        {/* Mobile View: Show Two Stats in One Slide */}
        <Carousel
          indicators={false}
          controls={false}
          interval={3000}
          touch={true}
          className="d-md-none"
        >
          {statsData
            .reduce((result, item, index, array) => {
              if (index % 2 === 0) result.push(array.slice(index, index + 2));
              return result;
            }, [])
            .map((pair, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center">
                  {pair.map((stat, subIndex) => (
                    <div key={subIndex} className="text-center stat-item">
                      <div>{stat.icon}</div>
                      <span className="fw-bold fs-6 text-dark mb-0">
                        {stat.number}
                      </span>
                      <span className="text-muted d-block small">
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
          padding: 5px;
          display: flex;
          gap: 10px;
          max-width: 600px;
          margin: 0 auto;
        }

        .stat-item {
          width: 140px; /* Compact width */
          padding: 5px;
        }

        @media (max-width: 768px) {
          .stat-item {
            width: 50%; /* Mobile view: 2 stats per row */
          }
        }
      `}</style>
    </div>
  );
};

export default StatsSection;
