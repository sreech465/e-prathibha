import React from "react";
import "../App.css";
import { Sidebardata } from "./Sidebardata";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul style={{ textDecoration: "none" }}>
        {Sidebardata.map((val, key) => {
          return (
            <li key={key}>
              <div>{val.icon}</div>
              <div>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
