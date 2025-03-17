import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#FFD700", // Yellow Background
    color: "#0074D9", // Updated font color to blue
    padding: "40px 10%", 
    textAlign: "left",
    fontFamily: "'Glacial Indifference', sans-serif", 
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.2)", 
    paddingBottom: "20px",
  };

  const sectionStyle = {
    flex: "1",
    minWidth: "200px", 
  };

  const sectionTitleStyle = {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
    color: "#0074D9", // Updated text color
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const listItemStyle = {
    marginBottom: "5px",
    color: "#0074D9", // Updated text color
    cursor: "pointer",
  };

  const copyrightStyle = {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "14px",
    color: "#0074D9", // Updated text color
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Quick Links</div>
          <ul style={listStyle}>
            <li style={listItemStyle}>Home</li>
            <li style={listItemStyle}>About Us</li>
            <li style={listItemStyle}>Loan Services</li>
            <li style={listItemStyle}>Contact Us</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Legal & Policies</div>
          <ul style={listStyle}>
            <li style={listItemStyle}>Terms & Conditions</li>
            <li style={listItemStyle}>Privacy Policy</li>
            <li style={listItemStyle}>Disclaimer</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Support</div>
          <ul style={listStyle}>
            <li style={listItemStyle}>FAQs</li>
            <li style={listItemStyle}>Customer Support</li>
            <li style={listItemStyle}>Bank Partner Details</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Join Us</div>
          <ul style={listStyle}>
            <li style={listItemStyle}>Refer & Earn</li>
            <li style={listItemStyle}>Join as Business Partner</li>
          </ul>
        </div>
      </div>

      <div style={copyrightStyle}>
        © {new Date().getFullYear()} Hously Fintech Realty. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
