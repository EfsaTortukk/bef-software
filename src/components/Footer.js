import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="contact-footer">
      {/* Sol: Sosyal Medya */}
      <div className="footer-left">
        <a href="https://www.instagram.com/befsocial/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/befsocialmediamanagement/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src="/x.png" alt="X (Twitter)" />
        </a>
      </div>

      {/* Orta: Logo */}
      <div className="footer-center">
        <img src="/logo.png" alt="bef logo" />
      </div>

      {/* Sağ: Sayfa Linkleri */}
      <div className="footer-right">
        <a href="/">ANASAYFA</a>
        <a href="/about">HAKKIMIZDA</a>
        <a href="/services">HİZMETLERİMİZ</a>
        <a href="/portfolio">PORTFOLYO</a>
        <a href="/contact">İLETİŞİM</a>
      </div>
    </footer>
  );
};

export default Footer;
