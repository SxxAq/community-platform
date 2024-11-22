import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { Menu, Sun, Moon, LogOut } from "lucide-react";

interface HeaderProps {
  toggleSidebar: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, className }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <header className={`bg-white dark:bg-gray-800 shadow-lg ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              <Menu size={24} />
            </button>
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              XpertBuddy
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { path: "/events", label: "Events" },
              { path: "/resources", label: "Resources" },
              { path: "/community", label: "Community" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  isActiveLink(item.path)
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                } transition-colors`}
              >
                {item.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  to="/profile"
                  className={`${
                    isActiveLink("/profile")
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  } transition-colors`}
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Login
              </Link>
            )}
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} className="text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
