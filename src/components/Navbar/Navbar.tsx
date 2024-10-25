import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/#">Abhishek Dubey</a>
      </div>
      <ul className="navbar-links">
        <li></li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/#experience">Experiences</a>
        </li>
        <li>
          <a href="/#skills">Skills</a>
        </li>
        <li>
          <a href="/#education">Education</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
