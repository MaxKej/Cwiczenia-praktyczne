// Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item"><Link to="/">Strona główna</Link></li>
            <li className="navbar-item"><Link to="/add">Dodaj produkt</Link></li>
            <li className="navbar-item"><Link to="/getall">Lista produktów</Link></li>
            <li className="navbar-item"><Link to="/edit">Edytuj i usuwaj produkty</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;
