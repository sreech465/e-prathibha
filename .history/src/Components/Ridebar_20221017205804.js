import React from "react";
import { FaTh, FaUserAlt, FaBars } from "react-icon/fa";
import { NavLink } from "react-router-dom";

const Ridebar = () => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/package",
      name: "Package",
      icon: <FaUserAlt />,
    },
    {
      path: "/payment",
      name: "Payment",
      icon: <FaTh />,
    },
    {
      path: "/result",
      name: "Result",
      icon: <FaTh />,
    },
    {
      path: "/summary",
      name: "Summary",
      icon: <FaTh />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">logo</h1>

          <div className="bars">
            <FaBars />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            keys={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Ridebar;
