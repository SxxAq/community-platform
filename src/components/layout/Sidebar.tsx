import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  FiHome,
  FiCalendar,
  FiBook,
  FiUsers,
  FiStar,
  FiSettings,
  FiX,
} from "react-icons/fi";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const { user } = useAuth();

  const sidebarClasses = `fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 ease-in-out md:translate-x-0 md:static`;

  return (
    <aside className={sidebarClasses}>
      <div className="flex justify-between items-center p-4 md:hidden">
        <h2 className="text-xl font-semibold">Menu</h2>
        <button onClick={closeSidebar}>
          <FiX size={24} />
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <SidebarLink to="/" icon={<FiHome size={20} />} label="Home" />
          <SidebarLink
            to="/events"
            icon={<FiCalendar size={20} />}
            label="Events"
          />
          <SidebarLink
            to="/resources"
            icon={<FiBook size={20} />}
            label="Resources"
          />
          <SidebarLink
            to="/community"
            icon={<FiUsers size={20} />}
            label="Community"
          />
          <SidebarLink
            to="/wishlist"
            icon={<FiStar size={20} />}
            label="Wishlist"
          />
          {user && (
            <SidebarLink
              to="/profile"
              icon={<FiSettings size={20} />}
              label="Profile"
            />
          )}
        </ul>
      </nav>
    </aside>
  );
};

const SidebarLink: React.FC<{
  to: string;
  icon: React.ReactNode;
  label: string;
}> = ({ to, icon, label }) => (
  <li>
    <Link
      to={to}
      className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {icon}
      <span>{label}</span>
    </Link>
  </li>
);

export default Sidebar;
