import React from "react";
import { FaTh, FaUserAlt } from "react-icon/fa";

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
      </div>
    </div>
  );
};

export default Ridebar;
