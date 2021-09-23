import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/contact">
          <li>contact</li>
        </Link>
        <Link to="/about">
          <li>About us</li>
        </Link>

        <Link to="/Movies">
          <li>Movies</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
