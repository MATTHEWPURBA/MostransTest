import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation(location);
    if (location) {
      navigate(`/location/${location}`);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <Link className="navbar-brand" to="/">
        Rick and Morty App
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Characters List
            </Link>
          </li>
          <li className="nav-item">
            <select
              className="form-select nav-link"
              value={selectedLocation}
              onChange={handleLocationChange}
              style={{ color: selectedLocation ? "inherit" : "blue" }}
            >
              <option value="" disabled style={{ color: "blue" }}>
                Character By Location
              </option>
              <option value="Earth">Earth</option>
              <option value="Citadel of Ricks">Citadel of Ricks</option>
              <option value="Anatomy Park">Anatomy Park</option>
            </select>
          </li>
        </ul>
        <button className="btn btn-secondary ml-auto" onClick={toggleTheme}>
          Dark / Light Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
