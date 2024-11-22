import React from "react";
import { Link } from "react-router-dom";
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

  return (
    <header className={`bg-card text-card-foreground shadow-md ${className}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-full hover:bg-muted"
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="text-2xl font-bold text-primary">
              XpertBuddy
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/events" className="hover:text-primary transition-colors">
              Events
            </Link>
            <Link
              to="/resources"
              className="hover:text-primary transition-colors"
            >
              Resources
            </Link>
            <Link
              to="/community"
              className="hover:text-primary transition-colors"
            >
              Community
            </Link>
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="hover:text-primary transition-colors"
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Login
              </Link>
            )}
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
