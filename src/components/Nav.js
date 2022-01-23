import React from 'react';
import { NavLink } from 'react-router-dom';
function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase "
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          Hike
        </a>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: 'underline' }
                    : { textDecoration: 'none' }
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: 'underline' }
                    : { textDecoration: 'none' }
                }
                to="/trips"
              >
                {' '}
                Trips{' '}
              </NavLink>{' '}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
