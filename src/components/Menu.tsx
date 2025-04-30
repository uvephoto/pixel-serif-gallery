
import React from 'react';
import { Link } from 'react-router-dom';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: 'Projects', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
      <nav className="flex flex-col items-center justify-center h-full">
        <ul className="text-center">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-8 overflow-hidden">
              <Link
                to={item.path}
                onClick={onClose}
                className="text-3xl md:text-5xl font-serif hover:opacity-60 transition-opacity"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="absolute bottom-10 flex space-x-8 mt-12">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm hover:opacity-60 transition-opacity"
          >
            Instagram
          </a>
          <a 
            href="mailto:hello@example.com" 
            className="text-sm hover:opacity-60 transition-opacity"
          >
            hello@example.com
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
