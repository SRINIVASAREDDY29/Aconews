// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <nav className="navbar">
      <h1>ACONEWS</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search News..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
