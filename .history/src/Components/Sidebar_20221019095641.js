import React from "react";
import { Navigate } from "react-router-dom";
import "../App.css";
import { Sidebardata } from "./Sidebardata";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Sidebar">
        <ul className="SidebarList" style={{ textDecoration: "none" }}>
          {Sidebardata.map((val, key) => {
            return (
              <li
                style={{ listStyleType: "none" }}
                className="row"
                key={key}
                onClick={() => {
                  // window.location.pathname = val.link;
                  navigate(val.link);
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
    </>
  );
};

export default Sidebar;
