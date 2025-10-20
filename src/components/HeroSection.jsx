import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <section className="bg-blue-400 text-white py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 text-4xl">
          <i className="fas fa-baby-carriage"></i>
        </div>
        <div className="absolute top-20 right-20 text-3xl">
          <i className="fas fa-cloud"></i>
        </div>
        <div className="absolute bottom-20 left-20 text-4xl">
          <i className="fas fa-star"></i>
        </div>
        <div className="absolute bottom-10 right-10 text-4xl">
          <i className="fas fa-heart"></i>
        </div>
        <div className="absolute top-1/2 left-1/4 text-3xl">
          <i className="fas fa-paw"></i>
        </div>
        <div className="absolute top-1/3 right-1/4 text-3xl">
          <i className="fas fa-feather"></i>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="bg-white bg-opacity-20 rounded-full p-6">
            <i className="fas fa-baby text-5xl"></i>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
          Welcome to BabyStore!
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white font-medium drop-shadow">
          Everything you need for your little bundle of joy. 
          From clothing to toys, we've got you covered with quality baby products.
        </p>
        <button 
          onClick={handleShopNow}
          className="bg-white text-pink-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition duration-300 transform hover:scale-105 text-lg shadow-lg flex items-center justify-center mx-auto"
        >
          <i className="fas fa-shopping-cart mr-2"></i>
          Shop Baby Products
        </button>
      </div>
    </section>
  );
};

export default HeroSection;