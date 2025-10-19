import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white flex items-center">
            <i className="fas fa-baby text-2xl mr-2"></i>
            BabyStore
          </Link>
          
          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-yellow-200 transition duration-300 font-semibold py-2 flex items-center">
              <i className="fas fa-home mr-2"></i>
              Home
            </Link>
            <Link to="/products" className="text-white hover:text-yellow-200 transition duration-300 font-semibold py-2 flex items-center">
              <i className="fas fa-shopping-bag mr-2"></i>
              Products
            </Link>
            <Link to="/about" className="text-white hover:text-yellow-200 transition duration-300 font-semibold py-2 flex items-center">
              <i className="fas fa-info-circle mr-2"></i>
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-yellow-200 transition duration-300 font-semibold py-2 flex items-center">
              <i className="fas fa-envelope mr-2"></i>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-200 focus:outline-none focus:text-yellow-200 text-2xl"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-purple-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="text-white hover:text-yellow-200 block px-3 py-2 rounded-md text-base font-medium transition duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-home mr-3"></i>
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-white hover:text-yellow-200 block px-3 py-2 rounded-md text-base font-medium transition duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-shopping-bag mr-3"></i>
                Products
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-yellow-200 block px-3 py-2 rounded-md text-base font-medium transition duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-info-circle mr-3"></i>
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-yellow-200 block px-3 py-2 rounded-md text-base font-medium transition duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-envelope mr-3"></i>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;