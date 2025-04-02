import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-box">
          {/* Sol Başlık */}
          <div className="contact-left">
            <img
              src="/sizinle-iletişime-geçelim.png"
              alt="sizinle iletişime geçelim"
              className="contact-heading-img"
            />
          </div>

          {/* Sağ Form */}
          <form className="contact-form">
            <label>İSMİNİZ</label>
            <input type="text" placeholder="Adınız" />
            <p></p>

            <label>E-MAİL ADRESİNİZ</label>
            <input type="email" placeholder="ornek@mail.com" />
            <p></p>

            <label>TELEFON NUMARANIZ</label>
            <input type="tel" placeholder="+90 5xx xxx xx xx" />
            <p></p>

            <label>FİRMANIZ VE NEDEN BİR SOSYAL MEDYA YÖNETİMİ AJANSI ARADIĞINIZ HAKKINDA BİLGİ VERİN</label>
            <textarea rows="3" placeholder="Mesajınız" />
            <p></p>

            <button type="submit">GÖNDER</button>
          </form>
        </div>
      </section>



    </>
  );
};

export default Contact;
