import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  Home,
  Calendar,
  BookOpen,
  Users,
  Star,
  Settings,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  closeSidebar,
  className,
}) => {
  const { user } = useAuth();
  const location = useLocation();

  const sidebarClasses = `fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 shadow-xl transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 ease-in-out md:translate-x-0 md:static ${className}`;

  const links = [
    { to: "/", icon: Home, label: "Home", color: "#FF5733" },
    { to: "/events", icon: Calendar, label: "Events", color: "#33FF57" },
    { to: "/resources", icon: BookOpen, label: "Resources", color: "#3357FF" },
    { to: "/community", icon: Users, label: "Community", color: "#F7B32B" },
    { to: "/wishlist", icon: Star, label: "Wishlist", color: "#B533FF" },
    ...(user
      ? [{ to: "/profile", icon: Settings, label: "Profile", color: "#FF33A6" }]
      : []),
  ];

  // Close sidebar after clicking a link
  const handleLinkClick = () => {
    if (isOpen) {
      closeSidebar();
    }
  };

  return (
    <aside className={sidebarClasses}>
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 md:hidden">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Menu
        </h2>
        <button
          onClick={closeSidebar}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {links.map((link) => (
            <SidebarLink
              key={link.to}
              to={link.to}
              icon={link.icon}
              label={link.label}
              color={link.color}
              isActive={location.pathname === link.to}
              onClick={handleLinkClick} // Add the onClick handler here
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

const SidebarLink: React.FC<{
  to: string;
  icon: React.ElementType;
  label: string;
  color: string;
  isActive: boolean;
  onClick: () => void; // Accept onClick as a prop
}> = ({ to, icon: Icon, label, color, isActive, onClick }) => {
  return (
    <li>
      <Link
        to={to}
        onClick={onClick} // Trigger the onClick handler here
        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
        }`}
      >
        <Icon color={color} size={20} />
        <span className="font-medium">{label}</span>
      </Link>
    </li>
  );
};

export default Sidebar;
