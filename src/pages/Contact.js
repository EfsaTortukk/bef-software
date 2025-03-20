import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h2>paketlerimiz, kampanyalarımız, fiyatlarımız ve daha fazlası için</h2>
        <div className="scroll-down">⬇</div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>sizinle iletişime geçelim</h2>
        <form className="contact-form">
          <input type="text" placeholder="İsminiz" required />
          <input type="email" placeholder="E-mail adresiniz" required />
          <input type="tel" placeholder="Telefon Numaranız" required />
          <textarea placeholder="Firmanız ve neden bir sosyal medya yönetimi ajansı aradığınız hakkında bilgi verin"></textarea>
          <button type="submit">Gönder</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="contact-footer">
        <div className="social-icons">
          <a href="#"><img src="/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/linkedin.svg" alt="LinkedIn" /></a>
          <a href="#"><img src="/x.svg" alt="X" /></a>
        </div>
        <div className="footer-logo">
          <img src="/logo.png" alt="bef logo" />
          <p>social media management</p>
        </div>
        <div className="footer-links">
          <a href="/about">Hakkımızda</a>
          <a href="/services">Hizmetlerimiz</a>
          <a href="/portfolio">Portfolyo</a>
          <a href="/contact">İletişim</a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
