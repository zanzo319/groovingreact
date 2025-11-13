import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/GroovingLogo.png';
import '../header.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Upcoming', path: '/upcoming' },
    { label: 'Past Events', path: '/past' },
    { label: 'Merch', path: '/merch' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header className="navbar">
      <nav className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Grooving Logo" className="logo-img" />
        </NavLink>

        {/* Desktop links */}
        <ul className="nav-links">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icone social */}
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
          <a href="mailto:info@grooving.com" aria-label="Email">
            <FontAwesomeIcon icon="envelope" />
          </a>
        </div>

        {/* Hamburger toggle */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? 'visible' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="mobile-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Grooving Logo" className="logo-img" />
        </NavLink>
        <ul className="mobile-links">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mobile-social">
          <a href="https://facebook.com" aria-label="Facebook">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
          <a href="mailto:info@grooving.com" aria-label="Email">
            <FontAwesomeIcon icon="envelope" />
          </a>
        </div>
      </div>
    </header>
  );
}