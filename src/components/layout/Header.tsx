import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          EduCommunity
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/events" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:underline">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:underline">
                Community
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/profile" className="hover:underline">
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="hover:underline">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="hover:underline">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
