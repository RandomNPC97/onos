import React from 'react';
import Navbar from './comps/Navbar';
import Footer from './comps/Footer';

function Help() {
  return (
    <div className="bg-white">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('./assets/help-hero.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center py-24">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">HELP CENTER</h1>
            <p className="text-lg md:text-2xl mb-8">We're here to assist you every step of the way</p>
          </div>
        </div>
      </section>

      {/* Common Questions Section */}
      <section id="common-questions" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Common Questions</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold mb-2">1. How can I track my order?</h3>
              <p className="text-gray-700">
                Once your order is shipped, you will receive an email with a tracking number and
                a link to track your package.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">2. What is your return policy?</h3>
              <p className="text-gray-700">
                We accept returns within 30 days of purchase for items that are unworn, unwashed,
                and in original packaging. Visit our <a href="/returns" className="text-blue-500 underline">Returns Page</a> for more details.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">3. How do I contact customer support?</h3>
              <p className="text-gray-700">
                You can reach us via email at <a href="mailto:support@yourwebsite.com" className="text-blue-500 underline">support@yourwebsite.com</a> or through our live chat feature available from 9 AM to 6 PM, Monday to Friday.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Assistance Section */}
      <section id="assistance" className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Need More Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
              <p className="text-gray-700 mb-4">
                Connect with our team instantly for quick resolutions.
              </p>
              <a
                href="/chat"
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Start Chat
              </a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3">FAQ</h3>
              <p className="text-gray-700 mb-4">
                Browse our comprehensive FAQ section for common queries.
              </p>
              <a
                href="/faq"
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
              >
                View FAQ
              </a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Email Support</h3>
              <p className="text-gray-700 mb-4">
                Send us an email, and we’ll get back to you within 24 hours.
              </p>
              <a
                href="mailto:support@yourwebsite.com"
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section id="contact-info" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Information</h2>
          <p className="text-gray-700 mb-4">We are here to help you 24/7. Reach out to us through any of the following methods:</p>
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:support@yourwebsite.com" className="text-blue-500 underline">support@yourwebsite.com</a>
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> <a href="tel:+123456789" className="text-blue-500 underline">+1 (234) 567-89</a>
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> 123 Fashion Street, Trendy City, TS 56789
            </p>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default Help;
