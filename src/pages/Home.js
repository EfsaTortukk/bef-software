import React from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,  // Ok butonlarını aktif ettik
  };
  
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <img src="/logo-beyaz.png" alt="bef logo" className="hero-logo" />
        <h1 className="hero-text">social media management</h1>
        <div className="scroll-down">⬇</div>
      </section>
      
      {/* About Section */}
      <section className="about">
        <h2>biz kimiz</h2>
        <p>
          adımız <span className="highlight">bef</span>. amacımız sosyal medya hesaplarını 
          geliştirmek isteyen firma ve kişilere bu yolda eşlik etmek. 
          bizimleyken içerikleriniz hakkında endişelenmenize gerek kalmaz.
        </p>
        <h3 className="slogan">we plan<br /> we create<br /> we deliver</h3>
      </section>

      {/* Example Jobs Section */}
      <section className="example-jobs">
        <h2>EXAMPLE JOBS</h2>
        <Slider {...settings} className="job-slider">
          <div><img src="/job1.png" alt="Job Example 1" /></div>
          <div><img src="/job2.png" alt="Job Example 2" /></div>
          <div><img src="/job3.png" alt="Job Example 3" /></div>
          <div><img src="/job4.png" alt="Job Example 4" /></div>
          <div><img src="/job5.png" alt="Job Example 5" /></div>
          <div><img src="/job6.png" alt="Job Example 6" /></div>
        </Slider>
      </section>
      {/* Contact Section */}
      <section className="contact">
        <h2>sizlerle iletişime geçelim</h2>
        <form className="contact-form">
          <input type="text" placeholder="İsminiz" required />
          <input type="email" placeholder="E-mail adresiniz" required />
          <input type="tel" placeholder="Telefon Numaranız" required />
          <textarea placeholder="Firmanız ve beklentileriniz hakkında bilgi verin"></textarea>
          <button type="submit">Gönder</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
