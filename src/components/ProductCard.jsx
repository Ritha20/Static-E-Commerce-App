const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-200">
      
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <p className="text-sm text-pink-600 font-semibold mb-2 flex items-center">
          <i className="fas fa-child mr-1"></i>
          Age: {product.ageRange}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-pink-600">${product.price}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300 flex items-center"
          >
            <i className="fas fa-cart-plus mr-2"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;