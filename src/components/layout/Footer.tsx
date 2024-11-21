import React from "react";
import { Link } from "react-router-dom";
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">XpertBuddy</h3>
            <p className="text-sm">Empowering education through community.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com/" className="hover:text-blue-500">
                <FiTwitter size={20} />
              </a>
              <a href="https://facebook.com/" className="hover:text-blue-500">
                <FiFacebook size={20} />
              </a>
              <a
                href="https://linkedin.com/company/"
                className="hover:text-blue-500"
              >
                <FiLinkedin size={20} />
              </a>
              <a href="https://instagram.com/" className="hover:text-blue-500">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-md font-semibold mb-2">Subscribe</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-l-md w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} XpertBuddy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
