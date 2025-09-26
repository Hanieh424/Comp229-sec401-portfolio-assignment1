import { Link } from 'react-router-dom';
import './Components.css';



const Education = () => {
  return (
    
    <section className="education">
      <h2>Education & Qualifications</h2>

      <div className="edu-card">
        <h3>Willowdale High School, Toronto</h3>
        <p>High School Diploma | 2019 - 2021</p>
      </div>

      <div className="edu-card">
        <h3>Centennial College, Scarborough</h3>
        <p>Diploma in Software Engineering Technology | 2024 - Present</p>
      </div>

      <div className="edu-card">
        <h3>Professional Certification: Web Development Bootcamp</h3>
        <p>Certificate | 2021</p>
      </div>

      <div className="edu-card">
        <h3>Professional Certification: UI/UX Design Fundamentals</h3>
        <p>Certificate | 2022</p>
      </div>
    </section>
  
  );
};

export default Education;