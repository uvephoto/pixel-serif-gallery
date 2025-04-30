
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full px-5 md:px-10 py-6 flex justify-between items-center z-40">
        <Link to="/" className="text-lg md:text-xl font-serif">Jane Doe</Link>
        <button 
          className={`hamburger-menu ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <Menu isOpen={menuOpen} onClose={() => {
        setMenuOpen(false);
        document.body.style.overflow = 'auto';
      }} />
    </>
  );
};

export default Header;
