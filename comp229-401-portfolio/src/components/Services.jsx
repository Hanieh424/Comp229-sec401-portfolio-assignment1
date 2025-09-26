import { Link } from 'react-router-dom';
import './Components.css';


const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src="../imgs/11.png" alt="Web Design" />
          <h3>Responsive Web Design</h3>
          <p>Create websites that look great on any device, from desktops to mobiles.</p>
        </div>

        <div className="service-card">
          <img src="../imgs/22.png" alt="Frontend Development" />
          <h3>Frontend Development</h3>
          <p>Develop interactive user interfaces using React, JavaScript, and modern frameworks.</p>
        </div>

        <div className="service-card">
          <img src="../imgs/33.png" alt="Backend Development" />
          <h3>Backend Development</h3>
          <p>Build robust server-side applications, APIs, and database management systems.</p>
        </div>

        <div className="service-card">
          <img src="../imgs/44.png" alt="E-commerce Solutions" />
          <h3>E-commerce Solutions</h3>
          <p>Design and develop online stores with secure payment integrations and smooth user experience.</p>
        </div>

        <div className="service-card">
          <img src="../imgs/55.png" alt="SEO Optimization" />
          <h3>SEO & Performance Optimization</h3>
          <p>Improve your website ranking, load times, and overall performance for better user engagement.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;