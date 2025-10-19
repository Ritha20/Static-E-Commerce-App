import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { babyProducts } from '../data/babyProducts';

const Home = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFilteredProducts, setShowFilteredProducts] = useState(false);

  const featuredProducts = babyProducts.slice(0, 8);

  // Filter products based on selected category
  const filteredProducts = selectedCategory 
    ? babyProducts.filter(product => product.category === selectedCategory)
    : [];

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart! 🎉`);
    console.log('Product added to cart:', product);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowFilteredProducts(true);
    
    // Scroll to products section smoothly
    setTimeout(() => {
      document.getElementById('products-section').scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const handleViewAllProducts = () => {
    navigate('/products');
  };

  const handleShowFeatured = () => {
    setSelectedCategory(null);
    setShowFilteredProducts(false);
  };

  const categories = ['Clothing', 'Toys', 'Feeding', 'Nursery', 'Bath & Care', 'Safety'];

  return (
    <div>
      <HeroSection />
      
      {/* Featured Products Section */}
      <section id="products-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {showFilteredProducts ? `${selectedCategory} Products` : 'Featured Baby Products'}
              </h2>
              <p className="text-gray-600 mt-2">
                {showFilteredProducts 
                  ? `Showing ${filteredProducts.length} ${selectedCategory.toLowerCase()} product${filteredProducts.length !== 1 ? 's' : ''}`
                  : 'Carefully selected products for your baby\'s comfort, development, and happiness'
                }
              </p>
            </div>
            
            {showFilteredProducts && (
              <button
                onClick={handleShowFeatured}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Show Featured
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {(showFilteredProducts ? filteredProducts : featuredProducts).map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center mt-12">
            <button
              onClick={handleViewAllProducts}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map(category => (
              <div 
                key={category} 
                onClick={() => handleCategoryClick(category)}
                className="text-center p-4 bg-neutral rounded-lg hover:bg-orange-200 transition duration-300 cursor-pointer transform hover:scale-105"
              >
                <div className="text-3xl mb-2">
                  {category === 'Clothing' && '👕'}
                  {category === 'Toys' && '🧸'}
                  {category === 'Feeding' && '🍼'}
                  {category === 'Nursery' && '🚼'}
                  {category === 'Bath & Care' && '🛁'}
                  {category === 'Safety' && '🛡️'}
                </div>
                <h3 className="font-semibold text-gray-800">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;