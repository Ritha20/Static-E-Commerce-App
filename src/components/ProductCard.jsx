const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  // Function to get appropriate icon for each category
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Clothing':
        return 'fa-tshirt';
      case 'Toys':
        return 'fa-gamepad';
      case 'Feeding':
        return 'fa-utensils';
      case 'Nursery':
        return 'fa-bed';
      case 'Bath & Care':
        return 'fa-bath';
      case 'Safety':
        return 'fa-shield-alt';
      default:
        return 'fa-baby';
    }
  };

  // Function to get color for each category
  const getCategoryColor = (category) => {
    switch(category) {
      case 'Clothing':
        return 'bg-pink-500';
      case 'Toys':
        return 'bg-blue-500';
      case 'Feeding':
        return 'bg-green-500';
      case 'Nursery':
        return 'bg-purple-500';
      case 'Bath & Care':
        return 'bg-teal-500';
      case 'Safety':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-200">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className={`${getCategoryColor(product.category)} text-white px-2 py-1 rounded-full text-xs flex items-center`}>
            <i className={`fas ${getCategoryIcon(product.category)} mr-1`}></i>
            {product.category}
          </span>
        </div>
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