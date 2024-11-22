import React from "react";
import { Link } from "react-router-dom";
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className=" shadow-2xl bg-gray-700 text-gray-100 dark:text-gray-300 p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2 text-white">
              XpertBuddy
            </h3>
            <p className="text-sm">Empowering education through community.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2 text-white">
              Quick Links
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-200 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-200 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-blue-200 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-blue-200 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2 text-white">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="https://facebook.com/"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="https://linkedin.com/company/"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com/"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-md font-semibold mb-2 text-white">Subscribe</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 rounded-l-md w-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-red-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-white">
          © {new Date().getFullYear()} XpertBuddy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
