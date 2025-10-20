
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-4">
          Contact BabyStore
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We're here to help! Reach out with any questions about our products or your order.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-6 flex items-center">
              <i className="fas fa-comments mr-2"></i>
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md border border-pink-200">
                <div className="bg-pink-500 rounded-full p-3">
                  <i className="fas fa-phone text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+250 788 888 000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md border border-blue-200">
                <div className="bg-blue-500 rounded-full p-3">
                  <i className="fas fa-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">care@babystore.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md border border-green-200">
                <div className="bg-green-500 rounded-full p-3">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Store Address</h3>
                  <p className="text-gray-600">123 Parenting Lane<br />KN 259 ST</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md border border-yellow-200">
                <div className="bg-yellow-500 rounded-full p-3">
                  <i className="fas fa-clock text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Store Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 9AM-7PM<br />Sat-Sun: 10AM-5PM</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-600 mb-4 flex items-center">
                <i className="fas fa-question-circle mr-2"></i>
                Quick Questions
              </h3>
              <div className="space-y-3">
                <p className="text-gray-700 flex items-center">
                  <i className="fas fa-gift text-pink-500 mr-2"></i>
                  Do you offer gift wrapping? <strong className="text-pink-600 ml-1">Yes!</strong>
                </p>
                <p className="text-gray-700 flex items-center">
                  <i className="fas fa-undo text-blue-500 mr-2"></i>
                  What's your return policy? <strong className="text-blue-600 ml-1">30 days hassle-free</strong>
                </p>
                <p className="text-gray-700 flex items-center">
                  <i className="fas fa-globe text-green-500 mr-2"></i>
                  Do you ship internationally? <strong className="text-green-600 ml-1">Coming soon!</strong>
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-6 flex items-center">
              <i className="fas fa-paper-plane mr-2"></i>
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-blue-200">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="product-question">Product Question</option>
                  <option value="order-help">Order Help</option>
                  <option value="shipping">Shipping Inquiry</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;