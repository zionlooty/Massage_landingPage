import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => setNavOpen(!navOpen);
  const closeMenu = () => setNavOpen(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Brand */}
        <h1 className="text-2xl font-bold text-green-600">
          Massage Alchemy
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-gray-700 hover:text-green-600 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl text-green-600 cursor-pointer"
          onClick={toggleMenu}
        >
          {navOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 space-y-4 transition-colors duration-300">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              className="block text-gray-700 hover:text-green-600 cursor-pointer transition"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
