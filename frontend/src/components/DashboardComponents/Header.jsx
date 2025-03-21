import React from "react";
import { Bell, Search, User, Mail, Menu, Settings, LogOut } from "lucide-react";
import { Dropdown } from "react-bootstrap";
import { logoutUser } from "../../Redux/Slice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = ({ onMenuClick, onLogout }) => {
  const searchPlaceholder = "Search here...";
  const notifications = { messages: 5, alerts: 3 };
  const userInfo = { name: "Owner", role: "Administrator" };
  const dispatch = useDispatch();
const navigate = useNavigate();

  const handdlelogut = async () => {
    console.log("Request occur")
    const res = await dispatch(logoutUser());
    console.log(res);
   
  };

  return (
    <header className="bg-white px-4 py-3 shadow-sm position-sticky top-0 w-100">
      <div className="d-flex align-items-center justify-content-between">
        {/* Left Section - Menu & Search */}
        <div className="d-flex align-items-center gap-3">
          <button
            onClick={onMenuClick}
            className="btn btn-light border rounded-circle p-2"
          >
            <Menu size={22} className="text-secondary" />
          </button>
          <div className="input-group" style={{ width: "250px" }}>
            <span className="input-group-text bg-light border-0">
              <Search size={18} className="text-muted" />
            </span>
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="form-control border-0 shadow-none"
            />
          </div>
        </div>

        {/* Right Section - Icons & Profile */}
        <div className="d-flex align-items-center gap-4">
          {/* Messages */}
          <button className="btn position-relative">
            <Mail size={20} className="text-secondary" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              {notifications.messages}
            </span>
          </button>

          {/* Notifications */}
          <button className="btn position-relative">
            <Bell size={20} className="text-secondary" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {notifications.alerts}
            </span>
          </button>

          {/* User Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle
              as="div"
              className="d-flex align-items-center border-start ps-3 dropdown-toggle"
              role="button"
            >
              <div className="text-end me-2">
                <p className="mb-0 fw-semibold">{userInfo.name}</p>
                <p className="mb-0 text-muted small">{userInfo.role}</p>
              </div>
              <div
                className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white"
                style={{ width: "40px", height: "40px" }}
              >
                <User size={20} />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="shadow-sm mt-2">
              {/* <Dropdown.Item href="/profile">
                <User size={16} className="me-2" /> Profile
              </Dropdown.Item>
              <Dropdown.Item href="/settings">
                <Settings size={16} className="me-2" /> Settings
              </Dropdown.Item> */}
              <Dropdown.Divider />
              <Dropdown.Item onClick={onLogout} className="text-danger">
                <LogOut onClick={() => handdlelogut()} size={16} className="me-2" />{" "}
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
