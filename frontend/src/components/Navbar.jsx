import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className="left">Portfolio</div>
      <div className="right">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
