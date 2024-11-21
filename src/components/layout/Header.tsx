import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { FiMenu, FiSun, FiMoon } from "react-icons/fi";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="mr-4 md:hidden">
            <FiMenu size={24} />
          </button>
          <Link to="/" className="text-2xl font-bold">
            XpertBuddy
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/events" className="hover:text-blue-500">
            Events
          </Link>
          <Link to="/resources" className="hover:text-blue-500">
            Resources
          </Link>
          <Link to="/community" className="hover:text-blue-500">
            Community
          </Link>
          {user ? (
            <>
              <Link to="/profile" className="hover:text-blue-500">
                Profile
              </Link>
              <button onClick={logout} className="hover:text-blue-500">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-blue-500">
              Login
            </Link>
          )}
        </nav>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
