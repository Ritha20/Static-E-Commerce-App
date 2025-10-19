const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <i className="fas fa-baby text-2xl mr-2"></i>
          <h3 className="text-xl font-bold">BabyStore</h3>
        </div>
        <p className="mb-2">Your trusted partner for all baby essentials</p>
        <p className="text-blue-100 mb-4">Quality products for your little ones</p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-white hover:text-yellow-200 transition duration-300">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-yellow-200 transition duration-300">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-yellow-200 transition duration-300">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-yellow-200 transition duration-300">
            <i className="fab fa-pinterest text-xl"></i>
          </a>
        </div>
        
        <div className="mt-4 pt-4 border-t border-blue-300">
          <p>&copy; 2024 BabyStore. All rights reserved.</p>
          <p className="text-blue-200 text-sm mt-2">Made with <i className="fas fa-heart text-red-400"></i> for babies everywhere</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;