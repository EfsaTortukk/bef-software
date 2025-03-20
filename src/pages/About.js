import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>Hakkımızda</h2>
      <p>
        <strong>bef</strong> olarak, markanızı sosyal medyada güçlendirmek için buradayız. 
        İçerik üretimi, sosyal medya yönetimi ve dijital pazarlama alanında uzman ekibimizle 
        müşterilerimize en iyi hizmeti sunuyoruz.
      </p>
      <div className="team">
        <h3>Ekibimiz</h3>
        <div className="team-members">
          <div className="member">
            <img src="/team1.jpg" alt="Team Member 1" />
            <p>Ahmet Yılmaz - CEO</p>
          </div>
          <div className="member">
            <img src="/team2.jpg" alt="Team Member 2" />
            <p>Elif Demir - Sosyal Medya Uzmanı</p>
          </div>
          <div className="member">
            <img src="/team3.jpg" alt="Team Member 3" />
            <p>Burak Kaya - İçerik Yöneticisi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
