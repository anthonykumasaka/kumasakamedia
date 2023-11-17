import React from "react";
import "../styles/NavBar.css";
export const NavBar = () => {
  const LINKS = ["music", "home"];
  return (
    <div className="nav-container">
      {LINKS.map((link) => (
        <p className="nav-link">{link}</p>
      ))}
    </div>
  );
};
