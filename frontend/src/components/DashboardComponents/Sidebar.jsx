import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { menuItems } from "../../Contants";

const Sidebar = ({ isOpen }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  return (
    <nav
      style={{
        width: isOpen ? "250px" : "80px",
        backgroundColor: "#0074d9",
        color: "white",
        height: "100vh",
        transition: "width 0.3s ease",
        padding: "16px 12px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: isOpen ? "flex-start" : "center",
          alignItems: "center",
          padding: "8px 0 20px 0",
        }}
      >
        <h5
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            margin: 0,
            display: isOpen ? "block" : "none",
            textTransform: "uppercase",
            color: "#fff700",
          }}
        >
          Hously-
          <span style={{
            color: "#fff",
            fontWeight: "bold",
          }}>Dashboard</span>
        </h5>
        {!isOpen && <Home size={24} />}
      </div>

      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            isOpen={isOpen}
            submenu={item.submenu}
            isExpanded={expandedMenu === index}
            onToggle={() => toggleSubMenu(index)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
