const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            About BabyStore
          </h1>
          <div className="text-5xl mb-6 text-pink-500">
            <i className="fas fa-baby-carriage"></i>
          </div>
        </div>
        
        {/* Company Story */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border border-pink-200">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4 flex items-center">
            <i className="fas fa-book-open mr-2"></i>
            Our Story
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to BabyStore, where we understand that every baby deserves the very best. 
            Founded in 2020 by a team of parents who struggled to find quality, affordable baby products, 
            we've made it our mission to make parenting a little easier.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We carefully curate every product in our store, ensuring they meet the highest standards 
            of safety, quality, and comfort for your little ones.
          </p>
        </section>
        
        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-600 mb-6 text-center">Why Parents Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200 text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4 text-blue-500">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Safety First</h3>
              <p className="text-gray-700">
                All products meet strict safety standards and are thoroughly tested for your peace of mind.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200 text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4 text-green-500">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">Quality Guaranteed</h3>
              <p className="text-gray-700">
                We source only the highest quality materials that are gentle on your baby's sensitive skin.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-200 text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4 text-yellow-500">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Fast Shipping</h3>
              <p className="text-gray-700">
                Quick delivery because we know you need those baby essentials right away!
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-200 text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4 text-pink-500">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-semibold text-pink-600 mb-3">Parent-Approved</h3>
              <p className="text-gray-700">
                Every product is tested and approved by our team of parent experts.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="bg-purple-600 text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center flex items-center justify-center">
            <i className="fas fa-bullseye mr-2"></i>
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-center font-medium">
            "To provide parents with safe, high-quality, and affordable baby products that make 
            parenting journey joyful and stress-free. We believe every child deserves the best start in life."
          </p>
        </section>

        {/* Team Section */}
        <section className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-purple-200">
          <h2 className="text-2xl font-semibold text-purple-600 mb-6 text-center">Our Promise</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <i className="fas fa-smile text-4xl text-yellow-500 mb-3"></i>
              <h3 className="font-semibold text-purple-600 mb-2">Happy Babies</h3>
              <p className="text-gray-600">Products that bring smiles to little faces</p>
            </div>
            <div className="p-4">
              <i className="fas fa-user-shield text-4xl text-green-500 mb-3"></i>
              <h3 className="font-semibold text-purple-600 mb-2">Worried Parents</h3>
              <p className="text-gray-600">Peace of mind with every purchase</p>
            </div>
            <div className="p-4">
              <i className="fas fa-hand-holding-heart text-4xl text-pink-500 mb-3"></i>
              <h3 className="font-semibold text-purple-600 mb-2">Loving Care</h3>
              <p className="text-gray-600">Made with love for your little ones</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;