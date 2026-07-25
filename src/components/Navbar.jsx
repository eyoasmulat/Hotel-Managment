import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navClass = ({ isActive }) => (isActive ? 'nav-item nav-link active' : 'nav-item nav-link')

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setIsDropdownOpen(false)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
      <Link to="/" className="navbar-brand d-block d-lg-none" onClick={closeMenu}>
        <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
      </Link>
      <button
        type="button"
        className={`navbar-toggler ${!isOpen ? 'collapsed' : ''}`}
        onClick={toggleMenu}
        aria-controls="navbarCollapse"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse justify-content-between ${isOpen ? 'show' : ''}`} id="navbarCollapse">
        <div className="navbar-nav me-auto py-0">
          <NavLink to="/" className={navClass} end onClick={closeMenu}>HOME</NavLink>
          <NavLink to="/about" className={navClass} onClick={closeMenu}>ABOUT</NavLink>
          <NavLink to="/service" className={navClass} onClick={closeMenu}>SERVICES</NavLink>
          <NavLink to="/room" className={navClass} onClick={closeMenu}>ROOMS</NavLink>
          <div
            className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              type="button"
              className="nav-link dropdown-toggle btn btn-link text-uppercase text-decoration-none border-0 shadow-none align-baseline"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
            >
              PAGES
            </button>
            <div className={`dropdown-menu rounded-0 m-0 ${isDropdownOpen ? 'show' : ''}`}>
              <NavLink to="/booking" className="dropdown-item" onClick={closeMenu}>Booking</NavLink>
              <NavLink to="/team" className="dropdown-item" onClick={closeMenu}>Our Team</NavLink>
              <NavLink to="/testimonial" className="dropdown-item" onClick={closeMenu}>Testimonial</NavLink>
            </div>
          </div>
          <NavLink to="/contact" className={navClass} onClick={closeMenu}>CONTACT</NavLink>
        </div>
        <a href="https://htmlcodex.com/hotel-html-template-pro" className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block" onClick={closeMenu}>
          PREMIUM VERSION<i className="fa fa-arrow-right ms-3"></i>
        </a>
      </div>
    </nav>
  )
}



