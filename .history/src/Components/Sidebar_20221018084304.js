import React from "react";
import "../App.css";
import { Sidebardata } from "./Sidebardata";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList" style={{ textDecoration: "none" }}>
        {Sidebardata.map((val, key) => {
          return (
            <li
              style={{ listStyleType: "none" }}
              className="row"
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {""}
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
