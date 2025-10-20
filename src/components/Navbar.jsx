import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-pink-400 shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold text-white flex items-center">
            <i className="fas fa-baby text-xl md:text-2xl mr-2"></i>
            BabyStore
          </Link>
          
          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-yellow-200 transition duration-300 font-semibold py-2 flex items-center text-sm lg:text-base"
            >
              <i className="fas fa-home mr-1 lg:mr-2"></i>
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-white hover:text-yellow-200 transition duration-300 font-semibold py-2 flex items-center text-sm lg:text-base"
            >
              <i className="fas fa-shopping-bag mr-1 lg:mr-2"></i>
              Products
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-yellow-200 transition duration-300 font-semibold py-2 flex items-center text-sm lg:text-base"
            >
              <i className="fas fa-info-circle mr-1 lg:mr-2"></i>
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-yellow-200 transition duration-300 font-semibold py-2 flex items-center text-sm lg:text-base"
            >
              <i className="fas fa-envelope mr-1 lg:mr-2"></i>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-200 focus:outline-none focus:text-yellow-200 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className={`h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg mt-2 shadow-lg">
            <Link 
              to="/" 
              className="text-white hover:text-yellow-200 px-3 py-3 rounded-md text-base font-medium transition duration-300 flex items-center border-b border-purple-500"
              onClick={closeMenu}
            >
              <i className="fas fa-home mr-3 w-5 text-center"></i>
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-white hover:text-yellow-200 px-3 py-3 rounded-md text-base font-medium transition duration-300 flex items-center border-b border-purple-500"
              onClick={closeMenu}
            >
              <i className="fas fa-shopping-bag mr-3 w-5 text-center"></i>
              Products
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-yellow-200 px-3 py-3 rounded-md text-base font-medium transition duration-300 flex items-center border-b border-purple-500"
              onClick={closeMenu}
            >
              <i className="fas fa-info-circle mr-3 w-5 text-center"></i>
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-yellow-200 px-3 py-3 rounded-md text-base font-medium transition duration-300 flex items-center"
              onClick={closeMenu}
            >
              <i className="fas fa-envelope mr-3 w-5 text-center"></i>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;