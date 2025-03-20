import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBuilding, FaHandshake, FaRupeeSign, FaUsers } from "react-icons/fa";

const stats = [
  { icon: <FaBuilding size={30} color="#FFD700" />, number: "96+", text: "Banks & NBFCs" },
  { icon: <FaUsers size={30} color="#FFD700" />, number: "1,50,000+", text: "Channel Partners" },
  { icon: <FaRupeeSign size={30} color="#FFD700" />, number: "USD 300M+", text: "Annual Transactions" },
  { icon: <FaHandshake size={30} color="#FFD700" />, number: "#1", text: "Secured Mortgage Provider" },
];

const brands = [
  { title: "Square Yards", desc: "The best foreign real estate platform, offering seamless investment solutions globally." },
  { title: "Square Connect", desc: "India’s leading digital broker platform, enabling seamless property transactions." },
  { title: "Azuro", desc: "Leading property management firm providing comprehensive real estate solutions." },
  { title: "PropsAMC", desc: "Transforming property valuation, tracking, and management for investors." },
  { title: "Interior Company", desc: "Providing end-to-end home interior solutions with an artistic approach." },
  { title: "PropVR", desc: "Utilizing 3D visualization & AI for immersive real estate experiences." },
];

const AboutUs = () => {
  return (
    <>
      {/* Header Section */}
      <div className="text-light text-center py-5" style={{ background: "#0074D9" }}>
        <h5 className="text-uppercase fw-bold" style={{ color: "#FFD700" }}>About Us</h5>
        <h1 className="display-5 fw-bold">
          An Inspiration, And Now <br />
          <span style={{ color: "#FFD700" }}>We Inspire.</span>
        </h1>
      </div>

      {/* About Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-7">
            <h3 className="fw-bold" style={{ color: "#0074D9" }}>About Hously Finntech</h3>
            <p className="text-muted">
              Hously-Finntech is a leading online lending platform, helping millions achieve their dreams of home ownership.
              We leverage cutting-edge AI technology with top industry experts to simplify and transform the lending process.
            </p>
            <p className="text-muted">
              Our commitment to customer convenience drives us to provide the best financial solutions tailored to individual needs.
            </p>
          </div>

          {/* Stats Section */}
          <div className="col-lg-5">
            <div className="p-4 rounded shadow-sm" style={{ backgroundColor: "#0074D9", color: "#fff" }}>
              <h5 className="fw-bold text-light">Offering Products</h5>
              <p className="text-light">From Over 96 Banks and NBFCs</p>
              <hr className="border-light" />
              {stats.map((item, index) => (
                <div key={index} className="d-flex align-items-center my-2">
                  <div className="me-3">{item.icon}</div>
                  <div>
                    <h5 className="mb-0 fw-bold" style={{ color: "#FFD700" }}>{item.number}</h5>
                    <p className="text-light mb-0">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Group Brands Section */}
      <div className="container my-5">
        <h3 className="fw-bold text-center mb-4" style={{ color: "#0074D9" }}>Our Group Brands</h3>
        <div className="row">
          {brands.map((brand, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div 
                className="p-3 border rounded shadow-sm bg-white h-100 text-center"
                style={{ transition: "0.3s", cursor: "pointer" }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <h5 className="fw-bold" style={{ color: "#0074D9" }}>{brand.title}</h5>
                <p className="text-muted">{brand.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;