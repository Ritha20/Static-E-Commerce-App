import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { babyProducts } from '../data/babyProducts';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Clothing', 'Toys', 'Feeding', 'Nursery', 'Bath & Care', 'Safety'];

  const filteredProducts = selectedCategory === 'All' 
    ? babyProducts 
    : babyProducts.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart! 🎉`);
    console.log('Product added to cart:', product);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Our Baby Products
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Find everything you need for your little one, from newborn essentials to toddler must-haves
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">
                {category === 'All' && '🌟'}
                {category === 'Clothing' && '👕'}
                {category === 'Toys' && '🧸'}
                {category === 'Feeding' && '🍼'}
                {category === 'Nursery' && '🚼'}
                {category === 'Bath & Care' && '🛁'}
                {category === 'Safety' && '🛡️'}
              </span>
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;