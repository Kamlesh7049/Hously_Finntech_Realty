import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { Line, Bar } from "react-chartjs-2";
import { Chart, CategoryScale } from "chart.js";
import "chart.js/auto";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Redux/Slice/authSlice";
import OfferForm from "./OfferForm";

Chart.register(CategoryScale);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showOffer, setShowOffer] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileMenuRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const handleLogout = async () => {
    const res = await dispatch(logoutUser());
    console.log(res);
    if (res.payload.success) {
      navigate("/");
    }
  };

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuRef]);

  // Menu items with their respective routes
  const menuItems = [
    { name: "Dashboard", path: "/user-dashboard" },
    { name: "Home", path: "/ahome" },
    { name: "Offer", path: "/offer", isSpecial: true },
    { name: "User Management", path: "/employees" },
    { name: "Content Upadates", path: "/finance" },
    { name: "Loan Calculator Mangement", path: "/performance" },
    { name: "FAQs Management", path: "/projects" },
    { name: "Lead MAnagement & Inquiry Tracking", path: "/reports" },
    { name: "Automated Notification ", path: "/manage-clients" }
  ];

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", flexDirection: "row" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: sidebarOpen ? "250px" : "60px",
          overflow: "hidden",
          background: "#f8f9fa",
          padding: sidebarOpen ? "20px" : "10px",
          boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
          transition: "width 0.3s ease, padding 0.3s ease",
        }}
      >
        <h2 style={{ display: sidebarOpen ? "block" : "none" }}>
          <span style={{ color: "#ffd700" }}>HOUSLY</span> <span style={{ color: "#0074d9" }}>CRM</span>
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {menuItems.map((item) => (
            <li
              key={item.name}
              style={{
                padding: "10px 0",
                cursor: "pointer",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#0074d9")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              {sidebarOpen ? (
                item.isSpecial ? (
                  <span onClick={() => setShowOffer(true)}>{item.name}</span>
                ) : (
                  <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {item.name}
                  </Link>
                )
              ) : (
                item.name[0]
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Offer Modal */}
      <Modal show={showOffer} onHide={() => setShowOffer(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OfferForm setShowoffer={setShowOffer} />
        </Modal.Body>
      </Modal>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "20px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <FaBars onClick={toggleSidebar} style={{ fontSize: "20px", cursor: "pointer" }} />
          <input
            type="text"
            placeholder="Search"
            style={{ padding: "8px", width: "200px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaBell style={{ marginRight: "15px", cursor: "pointer" }} />
            <FiSettings style={{ marginRight: "15px", cursor: "pointer" }} />
            <div style={{ position: "relative" }} ref={profileMenuRef}>
              <FaUserCircle 
                style={{ fontSize: "20px", cursor: "pointer" }} 
                onClick={toggleProfileMenu}
              />
              
              {/* Profile Dropdown Menu */}
              {profileMenuOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "30px",
                    right: "0",
                    width: "220px",
                    background: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    zIndex: 1000,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "15px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Profile"
                      style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
                    />
                    <div>
                      <div style={{ fontWeight: "bold" }}>Admin</div>
                      <div style={{ fontSize: "12px", color: "#777" }}>Owner</div>
                    </div>
                  </div>
                  
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    {[
                      { icon: "👤", text: "Profile" },
                      { icon: "🕒", text: "My Project", badge: "4" },
                      { icon: "✉️", text: "Message" },
                      { icon: "🔔", text: "Notification" },
                      { icon: "⚙️", text: "Settings" },
                    ].map((item, index) => (
                      <li
                        key={index}
                        style={{
                          padding: "10px 15px",
                          borderBottom: index === 4 ? "none" : "1px solid #eee",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                      >
                        <span style={{ marginRight: "10px", fontSize: "16px" }}>{item.icon}</span>
                        <span>{item.text}</span>
                        {item.badge && (
                          <span
                            style={{
                              marginLeft: "auto",
                              background: "#ddd",
                              borderRadius: "50%",
                              width: "20px",
                              height: "20px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: "12px",
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </li>
                    ))}
                    <li
                      style={{
                        padding: "10px 15px",
                        borderTop: "1px solid #eee",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        color: "#dc3545",
                      }}
                      onMouseEnter={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
                      onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                      onClick={handleLogout}
                    >
                      <span style={{ marginRight: "10px", fontSize: "16px" }}>🚪</span>
                      <span>Logout</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Stats */}
        <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginTop: "20px" }}>
          {["Total Deposit", "Total Expenses", "Total Earning"].map((title, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                textAlign: "center",
                flex: "1 1 30%",
                margin: "10px",
                minWidth: "250px",
              }}
            >
              {title} <h3>${index === 2 ? "6,743" : "1200"}</h3>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;