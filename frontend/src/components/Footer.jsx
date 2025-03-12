import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#001f3f", // Dark Blue Background
    color: "#fff",
    padding: "40px 80px", // Added left & right padding
    textAlign: "left",
    fontFamily: "Arial, sans-serif",
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 Equal Columns
    gap: "40px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    paddingBottom: "20px",
  };

  const sectionTitleStyle = {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
    color: "#f8f9fa",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const listItemStyle = {
    marginBottom: "5px",
    color: "#ddd",
    cursor: "pointer",
  };

  const copyrightStyle = {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "14px",
    color: "#bbb",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Quick Links Section */}
        <div>
          <div style={sectionTitleStyle}>Quick Links</div>
          <ul style={listStyle}>
            <li style={listItemStyle}>Home</li>
            <li style={listItemStyle}>About Us</li>
            <li style={listItemStyle}>Loan Services</li>
            <li style={listItemStyle}>Contact Us</li>
          </ul>
        </div>

        {/* Legal & Policies Section */}
        <div>
          <div style={sectionTitleStyle}>Legal & Policies</div>
          <ul style={listStyle}>
            <li style={listItemStyle}>Terms & Conditions</li>
            <li style={listItemStyle}>Privacy Policy</li>
            <li style={listItemStyle}>Disclaimer</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <div style={sectionTitleStyle}>Support</div>
          <ul style={listStyle}>
            <li style={listItemStyle}>FAQs</li>
            <li style={listItemStyle}>Customer Support</li>
            <li style={listItemStyle}>Bank Partner Details</li>
          </ul>
        </div>

        {/* Join Us Section */}
        <div>
          <div style={sectionTitleStyle}>Join Us</div>
          <ul style={listStyle}>
            <li style={listItemStyle}>Refer & Earn</li>
            <li style={listItemStyle}>Join as Business Partner</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={copyrightStyle}>
        © {new Date().getFullYear()} Hously Fintech Realty. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
