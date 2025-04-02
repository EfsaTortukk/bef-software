import React from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Home = () => {
  const settings = {
    dots: false,
    infinite: true,          // ✅ Sonsuz döngü aktif
    speed: 600,
    slidesToShow: 4,         // ✅ 4 slide göster
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false,
    cssEase: "linear"
  };
  
  
  
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <img src="/logo-beyaz.png" alt="bef logo" className="hero-logo" />
        <div>
          <img src="/homepage-arrow.png" alt="arrow" className="scroll-down" />
        </div>
      </section>
      
      {/* About Section */}
      <section className="about">
        <h2 className="bizkimiz">biz kimiz</h2>
        <p className="adımız">
          adımız <span className="highlight">bef</span> . amacımız sosyal medya hesaplarını 
          geliştirmek isteyen firma ve kişilere bu yolda eşlik etmek. 
          bizimleyken içerikleriniz hakkında endişelenmenize gerek kalmaz.
        </p>
        <div className="slogan-image">
  <img src="/we-plan.png" alt="we plan we create we deliver" />
</div>


      </section>

      {/* Example Jobs Section */}
      <section className="example-jobs">
        <h2>ÖRNEK İŞLER</h2>
        <Slider {...settings} className="job-slider">
          <div><img src="/example-1.png" alt="Job Example 1" /></div>
          <div><img src="/example-2.png" alt="Job Example 1" /></div>
          <div><img src="/example-3.png" alt="Job Example 1" /></div>
          <div><img src="/example-4.png" alt="Job Example 1" /></div>
          <div><img src="/example-5.png" alt="Job Example 1" /></div>
          <div><img src="/example-6.png" alt="Job Example 1" /></div>
          <div><img src="/example-7.png" alt="Job Example 1" /></div>
        </Slider>
      </section>

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

      
    </div>
  );
};

export default Home;
