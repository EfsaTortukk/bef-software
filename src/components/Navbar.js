import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [language, setLanguage] = useState("TR");
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === "TR" ? "EN" : "TR");
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/logo-normal.svg" alt="bef logo" />
        </Link>

        {/* Navbar Linkleri */}
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link to="/services" className={location.pathname === "/services" ? "active-link" : ""}>
              Hizmetlerimiz
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active-link" : ""}>
              Portfolyo
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === "/contact" ? "active-link" : ""}>
              İletişim
            </Link>
          </li>
        </ul>

        {/* Dil Değiştirme Butonu */}
        <button className="lang-toggle" onClick={toggleLanguage}>
          {language}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
