import React from "react";
import "../App.css";
import { Sidebardata } from "./Sidebardata";
const Sidebar = () => {
  return (
    <div style={{ paddingTop: 100 }}>
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
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
