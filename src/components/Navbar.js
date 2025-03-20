import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [language, setLanguage] = useState("TR");

  const toggleLanguage = () => {
    setLanguage(language === "TR" ? "EN" : "TR");
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/logo.png" alt="bef logo" />
        </Link>

        {/* Navbar Linkleri */}
        <ul className="nav-links">
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/about">Hakkımızda</Link></li>
          <li><Link to="/services">Hizmetlerimiz</Link></li>
          <li><Link to="/portfolio">Portfolyo</Link></li>
          <li><Link to="/contact">İletişim</Link></li>
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
