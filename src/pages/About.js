import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>hakkımızda</h1>
        <p>
          bef olarak, dijital dünyada markaların güçlü birer iletişim kanalı
          olmasına yardımcı oluyoruz. Yaratıcı stratejiler ve özgün içeriklerle
          dijital varlığınızı büyütüyoruz.
        </p>
      </section>

      {/* Tanıtım Görseli */}


      {/* Cards */}
      <section className="about-cards">
        <div className="about-card">
          <h3>misyonumuz</h3>
          <p>
            Markaların dijital kimliklerini oluşturarak onların hedef kitleleriyle
            anlamlı bağ kurmalarını sağlamak.
          </p>
        </div>
        <div className="about-card">
          <h3>vizyonumuz</h3>
          <p>
            Yenilikçi çözümlerimizle dijital dünyada iz bırakan projelere imza
            atmak.
          </p>
        </div>
        <div className="about-card">
          <h3>değerlerimiz</h3>
          <p>
            Şeffaflık, güven, özgünlük ve sürdürülebilir başarı ilkelerimizle
            hareket ederiz.
          </p>
        </div>
      </section>
      <section className="about-why">
  <h2 className="about-why-title">neden <span className="highlight-bef">bef</span>    ?</h2>
  <div className="about-why-cards">
    <div className="why-card">
      <h3>Yaratıcı Stratejiler</h3>
      <p>Her markanın özgün yapısına uygun yaratıcı içerikler ve hedefe yönelik stratejiler geliştiriyoruz.</p>
    </div>
    <div className="why-card">
      <h3>Şeffaf ve Güvenilir İletişim</h3>
      <p>Süreç boyunca her adımı sizinle paylaşır, beklentilerinizi şeffaflıkla yönetiriz.</p>
    </div>
    <div className="why-card">
      <h3>Sonuç Odaklı Yaklaşım</h3>
      <p>Sosyal medya performansınızı sadece iyileştirmekle kalmaz, ölçülebilir sonuçlar üretiriz.</p>
    </div>
  </div>

</section>
      {/* Dijital Görseli */}
      <section className="about-dijital">
      <img src="/dijital.png" alt="dijital" className="dijital" />
      </section>

<section className="about-contact-button">
  <a href="/contact" className="contact-link-button">bizimle iletişime geçin</a>
</section>

    </div>
  );
};

export default About;
