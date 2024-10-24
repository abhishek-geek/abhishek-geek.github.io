// import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">MyPortfolio</a>
      </div>
      <ul className="navbar-links">
        <li></li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/experiences">Experiences</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/education">Education</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
      </ul>
    </nav>

    // <nav className="navbar">
    //   <div className="navbar-brand">
    //     <Link to="/">MyPortfolio</Link>
    //   </div>
    //   <ul className="navbar-links">
    //     <li>
    //       <Link to="/">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/experiences">Experiences</Link>
    //     </li>
    //     <li>
    //       <Link to="/skills">Skills</Link>
    //     </li>
    //     <li>
    //       <Link to="/education">Education</Link>
    //     </li>
    //     <li>
    //       <Link to="/projects">Projects</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
