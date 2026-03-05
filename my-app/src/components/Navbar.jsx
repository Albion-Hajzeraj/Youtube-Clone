import { Link } from "react-router-dom";

import { SearchBar } from "./";

const Navbar = () => (
  <header className="navbar">
    <Link to="/" className="brand-link" aria-label="WatchGrid Home">
      <span className="brand-badge">WG</span>
      <div>
        <p className="brand-name">WatchGrid</p>
        <p className="brand-tagline">Stream discovery engine</p>
      </div>
    </Link>
    <SearchBar />
  </header>
);

export default Navbar;
