import { Link } from 'react-router-dom';
import './Components.css';

const Contact = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    window.location.href = "/"; 
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <div className="contact-panel">
        <p><strong>Email:</strong> hsadegh4@my.centennialcollege.ca</p>
        <p><strong>Phone:</strong> +1 123-456-7890</p>
        <p><strong>Location:</strong> Toronto, Canada</p>
        <p>
          <strong>GitHub:</strong> 
          <a 
            href="https://github.com/Hanieh424/Comp229-sec401-portfolio-assignment1.git" 
            target="_blank"
          >
            github.com/Hanieh424/Comp229-sec401-portfolio-assignment1
          </a>
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" required />
        <input type="text" name="lastName" placeholder="Last Name" required />
        <input type="tel" name="contactNumber" placeholder="Contact Number" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
