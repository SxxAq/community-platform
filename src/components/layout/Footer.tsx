import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">EduCommunity</h3>
            <p className="text-sm">Empowering education through community.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Connect</h4>
            <ul className="text-sm">
              <li>
                <a
                  href="https://twitter.com/educommunity"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/educommunity"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/educommunity"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/educommunity"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-md font-semibold mb-2">Subscribe</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 text-gray-800 w-full"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} EduCommunity. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
