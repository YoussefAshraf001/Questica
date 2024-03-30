import React from "react";
import { Link } from "react-router-dom";

import "./Categories.css";
import design from "../assets/design(white).png";
import development from "../assets/development(white).png";
import security from "../assets/security(white).png";

function Categories() {
  return (
    <div className="categories">
      <h1>Available Categories</h1>
      <br></br>
      <ul className="category-images">
        <Link to="/quests">
          <img src={design} className="design" />
          <a className="design-text">Design</a>
        </Link>
        <Link to="/quests">
          <img src={development} className="development" />
          <a className="development-text">Development</a>
        </Link>
        <Link to="/quests">
          <img src={security} className="security" />
          <a className="security-text">Security</a>
        </Link>
      </ul>
    </div>
  );
}

export default Categories;
