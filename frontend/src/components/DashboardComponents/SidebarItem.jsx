import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";


const SidebarItem = ({ icon, text, isOpen, submenu, isExpanded, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      style={{
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: isOpen ? "space-between" : "center",
        backgroundColor: isHovered ? "#374151" : "transparent",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
        flexDirection: "column",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
    >
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        {React.cloneElement(icon, {
          size: 20,
          color: isHovered ? "#fff" : "#e2e8f0",
        })}
        {isOpen && (
          <span
            style={{
              marginLeft: "10px",
              color: isHovered ? "#ffd700" : "#e2e8f0",
              fontWeight: isHovered ? "500" : "normal",
              flexGrow: 1,
            }}
          >
            {text}
          </span>
        )}
        {isOpen && submenu && (
          <span>
            {isExpanded ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </span>
        )}
      </div>

      {isExpanded && submenu && (
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: isOpen ? "30px" : "0",
            transition: "all 0.3s ease",
            width: "100%",
          }}
        >
          {submenu.map((sub, index) => (
            <li
              key={index}
              style={{
                padding: "8px 0",
                display: "flex",
                alignItems: "center",
                color: "#e2e8f0",
                cursor: "pointer",
                transition: "color 0.2s ease",
              }}
            >
              {React.cloneElement(sub.icon, { size: 16, color: "#e2e8f0" })}
              {isOpen && <span style={{ marginLeft: "10px" }}>{sub.text}</span>}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};


export default SidebarItem;