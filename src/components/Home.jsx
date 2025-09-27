import { Link } from 'react-router-dom';
import './Components.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to My Portfolio!</h2>
      <p className="mission-statement">
        "My mission is to showcase my skills, creativity, and growth as a web developer by creating meaningful projects that reflect my dedication to learning, innovation, and delivering high-quality work. Through this portfolio, I aim to connect with opportunities and collaborators who value passion, perseverance, and continuous improvement."
      </p>

      <div className="buttons-container">
        <Link to="/about">
          <button className="nav-button">About Me</button>
        </Link>
        <Link to="/projects">
          <button className="nav-button">My Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;