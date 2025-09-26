import { Link } from 'react-router-dom';
import './Components.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img src="../imgs/1.jpg" alt="Planara App" className="project-image" />
          <h2>Planara – Intelligent Travel Planner</h2>
          <p>
            Planara is a smart travel planner web application that creates personalized itineraries 
            based on users’ interests, including flights, accommodations, activities, and dining. 
            Its standout feature is adaptive planning: if a change occurs—such as a cancelled flight 
            or an unavailable activity—Planara automatically suggests and rebooks alternatives 
            to ensure a seamless travel experience. My role focused on designing the front-end 
            interface using React and integrating APIs for bookings and mapping services. 
            The outcome was an interactive, intelligent planner that simplifies trip management 
            and enhances the overall user experience.
          </p>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="../imgs/2.jpg" alt="Anxora App" className="project-image" />
          <h2>Anxora – Anxiety Support App</h2>
          <p>
            Anxora is a mobile-friendly app designed to support individuals managing anxiety. 
            The app includes features such as guided breathing exercises, daily affirmations, 
            stress tracking, and access to professional mental health resources. My role focused 
            on designing the front-end user interface and creating smooth, intuitive user flows. 
            The outcome was a functional and user-friendly prototype that helps users reduce stress 
            and improve overall emotional well-being.
          </p>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="../imgs/3.jpg" alt="IntroLink App" className="project-image" />
          <h2>IntroLink – Friendship Finder for Introverts</h2>
          <p>
            IntroLink is a social networking app designed to help introverts build meaningful 
            connections based on shared interests and personality traits. The app features a 
            matching algorithm, guided conversation starters, and a safe, supportive environment. 
            My role involved developing the matching logic and front-end profile system. The outcome 
            was a functional prototype that demonstrates how technology can foster genuine friendships 
            for introverted users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;