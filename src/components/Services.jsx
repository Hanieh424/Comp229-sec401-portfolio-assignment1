import { Link } from 'react-router-dom';
import './Components.css';
import service1 from '../imgs/11.png';
import service2 from '../imgs/22.png';
import service3 from '../imgs/33.png';
import service4 from '../imgs/44.png';
import service5 from '../imgs/55.png';


const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src={service1} alt="Web Design" />
          <h3>Responsive Web Design</h3>
          <p>Create websites that look great on any device, from desktops to mobiles.</p>
        </div>

        <div className="service-card">
          <img src={service2} alt="Frontend Development" />
          <h3>Frontend Development</h3>
          <p>Develop interactive user interfaces using React, JavaScript, and modern frameworks.</p>
        </div>

        <div className="service-card">
          <img src={service3} alt="Backend Development" />
          <h3>Backend Development</h3>
          <p>Build robust server-side applications, APIs, and database management systems.</p>
        </div>

        <div className="service-card">
          <img src={service4} alt="E-commerce Solutions" />
          <h3>E-commerce Solutions</h3>
          <p>Design and develop online stores with secure payment integrations and smooth user experience.</p>
        </div>

        <div className="service-card">
          <img src={service5} alt="SEO Optimization" />
          <h3>SEO & Performance Optimization</h3>
          <p>Improve your website ranking, load times, and overall performance for better user engagement.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;