import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Center">
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          <li style={{ marginRight: '50px' }}>
            <NavLink to="/" exact activeClassName="active-link" className="hover-outline-link">
              Home
            </NavLink>
          </li>
          <li style={{ marginRight: '50px' }}>
            <NavLink to="/aboutme" activeClassName="active-link" className="hover-outline-link">
              Experience
            </NavLink>
          </li>
          <li style={{ marginRight: '50px' }}>
            <NavLink to="/projects" activeClassName="active-link" className="hover-outline-link">
              Projects
            </NavLink>
          </li>
          <li style={{ marginRight: '50px' }}>
            <NavLink to="/contact" activeClassName="active-link" className="hover-outline-link">
              Get in Touch!
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
