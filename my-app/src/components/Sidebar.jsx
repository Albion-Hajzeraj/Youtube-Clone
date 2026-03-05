import React from "react";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <div className="sidebar-container">
    {categories.map((category) => (
      <button
        className={`category-btn ${category.name === selectedCategory ? "active" : ""}`}
        onClick={() => setSelectedCategory(category.name)}
        key={category.name}
      >
        <span className="category-icon">
          {category.icon}
        </span>
        <span className="category-label">
          {category.name}
        </span>
      </button>
    ))}
  </div>
);

export default Categories;
