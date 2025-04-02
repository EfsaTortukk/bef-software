import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h2>Hizmetlerimiz</h2>

      {/* Hizmet Kutuları */}
      <section className="services-grid">
        <div className="service-box">
          <div className="service-top">Sosyal Medya Yönetimi</div>
          <div className="service-bottom">Instagram, Facebook, LinkedIn içerik üretimi ve yönetimi</div>
        </div>

        <div className="service-box">
          <div className="service-top">Reklam Yönetimi</div>
          <div className="service-bottom">Meta & Google Ads reklamları ile erişimi artırıyoruz</div>
        </div>

        <div className="service-box">
          <div className="service-top">İçerik Stratejisi</div>
          <div className="service-bottom">Markanıza özel içerik takvimi ve kampanya planlaması</div>
        </div>
      </section>

      {/* Paketler */}
      <div className="service-packages">
  <div className="package">
    <h3>📌 Temel Paket</h3>
    <p>✔ 2 sosyal medya platformu</p>
    <p>✔ Haftalık 3 paylaşım</p>
    <p>✔ Aylık performans raporu</p>
    <div className="price">Fiyat: 2,000₺/ay</div>
  </div>

  <div className="package">
    <h3>🚀 Orta Paket</h3>
    <p>✔ 3 sosyal medya platformu</p>
    <p>✔ Haftalık 5 paylaşım</p>
    <p>✔ 2 reklam kampanyası</p>
    <p>✔ Etkileşim yönetimi</p>
    <div className="price">Fiyat: 5,000₺/ay</div>
  </div>

  <div className="package">
    <h3>🔥 Premium Paket</h3>
    <p>✔ 5 sosyal medya platformu</p>
    <p>✔ Günlük paylaşım</p>
    <p>✔ Influencer iş birlikleri</p>
    <p>✔ Marka analizi</p>
    <div className="price">Fiyat: 10,000₺/ay</div>
  </div>
</div>
<div className="services-cta">
  <a href="/contact" className="cta-button">
    Daha fazla bilgi ve firma bazlı paketler için bizimle iletişime geçin
  </a>
</div>

    </div>
    
  );
};

export default Services;
