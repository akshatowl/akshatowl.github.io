import {React, useRef, useState} from 'react';
import { NavLink } from 'react-router-dom';
 

function Navbar() {
  const navRef = useRef();
  const [isResponsive, setResponsive] = useState(false);

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'white', // Change this to your desired background color
    zIndex: 999, // Use a high z-index to ensure it's above other elements
    // Add other styling as needed
  };
  const showNavbar = () => {
    setResponsive(!isResponsive);
  }
  return (
    <div className="Center">
      <nav className="nav-bar">
        <ul>
          <li style={{ marginRight: '40px' }}>
            <NavLink to="/" exact activeClassName="active-link" className="hover-outline-link">
              ⌂
            </NavLink>
          </li>
          <li style={{ marginRight: '40px' }}>
            <NavLink to="/aboutme" activeClassName="active-link" className="hover-outline-link">
              Experience
            </NavLink>
          </li>
          <li style={{ marginRight: '40px' }}>
            <NavLink to="/projects" activeClassName="active-link" className="hover-outline-link">
              Projects
            </NavLink>
          </li>
          <li style={{ marginRight: '40px' }}>
            <NavLink to="/contact" activeClassName="active-link" className="hover-outline-link">
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>

      </div>
  );
}

export default Navbar;
