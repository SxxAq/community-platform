import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Home, Calendar, Book, Users, Star, Settings } from "lucide-react";

const Sidebar: React.FC = () => {
  const { user } = useAuth();

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
            >
              <Calendar size={20} />
              <span>Events</span>
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
            >
              <Book size={20} />
              <span>Resources</span>
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
            >
              <Users size={20} />
              <span>Community</span>
            </Link>
          </li>
          <li>
            <Link
              to="/wishlist"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
            >
              <Star size={20} />
              <span>Wishlist</span>
            </Link>
          </li>
          {user && (
            <li>
              <Link
                to="/profile"
                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              >
                <Settings size={20} />
                <span>Profile</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
