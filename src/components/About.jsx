import { Link } from 'react-router-dom';
import './Components.css';
import profile from '../imgs/me.png';
import resume from '../Docs/Resume.pdf';

 const About = () => {
   return (
    <div className="about-container">
      <h2>About Me</h2>
      <img 
        src={profile}
        alt="Hanieh" 
        className="profile-image" 
      />
      <h3>Hanieh Sadeghizadeh</h3>
      <p>
       I am currently a student at Centennial College, pursuing my studies with a strong focus on technology, 
problem-solving, and creativity. My journey has given me the opportunity to adapt to new environments 
and embrace challenges with resilience and determination, especially after moving to Canada. I enjoy 
working on projects that not only strengthen my technical skills but also allow me to collaborate and 
communicate effectively with others. 

In addition to my academic background, I value time management and adaptability, which help me balance 
responsibilities and stay focused on achieving goals. I am eager to continue learning, growing, and 
developing skills that will allow me to contribute meaningfully to future projects and opportunities. 
Ultimately, my goal is to build a career where I can combine my knowledge, creativity, and dedication 
to make a positive impact in both my work and community.

      </p>
      {/* Resume link */}
      <div className="resume-link">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          View My Resume (PDF)
        </a>
      </div>
    </div>
  );
};

export default About;
