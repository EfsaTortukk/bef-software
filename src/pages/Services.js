import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h2>Hizmetlerimiz</h2>
      <div className="service-packages">
        <div className="package">
          <h3>📌 Temel Paket</h3>
          <p>✔ 2 sosyal medya platformu</p>
          <p>✔ Haftalık 3 paylaşım</p>
          <p>✔ Aylık performans raporu</p>
          <p className="price">Fiyat: 2,000₺/ay</p>
        </div>

        <div className="package">
          <h3>🚀 Orta Paket</h3>
          <p>✔ 3 sosyal medya platformu</p>
          <p>✔ Haftalık 5 paylaşım</p>
          <p>✔ 2 reklam kampanyası</p>
          <p>✔ Etkileşim yönetimi</p>
          <p className="price">Fiyat: 5,000₺/ay</p>
        </div>

        <div className="package premium">
          <h3>🔥 Premium Paket</h3>
          <p>✔ 5 sosyal medya platformu</p>
          <p>✔ Günlük paylaşım</p>
          <p>✔ Influencer iş birlikleri</p>
          <p>✔ Marka analizi</p>
          <p className="price">Fiyat: 10,000₺/ay</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
