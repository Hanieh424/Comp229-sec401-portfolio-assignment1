
import { Link } from 'react-router-dom';
import'./Layout.css';
import logo from '../imgs/S.png';
export default function Layout() {
    return (
        
      <><div className="logo-container">
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
        </div>
        <nav className="navbar">
            <h2>Portfolio</h2>
                <Link to="/">Home</Link> {" "}
                <Link to="/about">About</Link> {" "}
                <Link to="/education">Education</Link> {" "}
                <Link to="/projects">Projects</Link> {" "}
                <Link to="/services">Services</Link> {" "}
                <Link to="/contact">Contact</Link>
            </nav></>
        
        
        
    )
}