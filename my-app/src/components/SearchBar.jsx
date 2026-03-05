import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();
    const query = searchTerm.trim();

    if (query) {
      navigate(`/search/${query}`);
      setSearchTerm("");
    }
  };

  return (
    <form className="search-form" onSubmit={onhandleSubmit}>
      <input
        className="search-bar"
        placeholder="Search videos, creators, or topics"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="search-button" aria-label="search">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
