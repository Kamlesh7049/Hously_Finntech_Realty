  import React, { useState, useRef, useEffect } from "react";
  import { Link } from "react-router-dom";
  import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";
  import { FiSettings } from "react-icons/fi";
  import { Chart, CategoryScale } from "chart.js";
  import { useDispatch } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import { logoutUser } from "../Redux/Slice/authSlice";
  import ShowOffers from "../components/ShowOffers";

  Chart.register(CategoryScale);

  const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [showOffer, setShowOffer] = useState(() => {
      return localStorage.getItem("showOffer") === "true";
    });
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
    }, []);

    // Persist showOffer state in localStorage
    useEffect(() => {
      localStorage.setItem("showOffer", showOffer);
    }, [showOffer]);

    const menuItems = [
      { name: "Dashboard", path: "/user-dashboard" },
      { name: "Home", path: "/ahome" },
      { name: "Offer", path: "/offer", isSpecial: true },
      { name: "User Management", path: "/employees" },
      { name: "Content Updates", path: "/finance" },
      { name: "Loan Calculator Management", path: "/performance" },
      { name: "FAQs Management", path: "/projects" },
      { name: "Lead Management & Inquiry Tracking", path: "/reports" },
      { name: "Automated Notification", path: "/manage-clients" }
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
                    <span onClick={() => setShowOffer(!showOffer)}>{item.name}</span>
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
                    <ul
                      style={{
                        listStyle: "none",
                        padding: "0",
                        margin: "0",
                      }}
                    >
                      <li
                        style={{
                          padding: "10px 15px",
                          borderTop: "1px solid #eee",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          color: "#dc3545",
                        }}
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

          {/* Show Offers when clicked */}
          {showOffer && <ShowOffers />}
        </main>
      </div>
    );
  };

  export default Dashboard;
