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

  const sidebarClasses = `fixed inset-y-0 left-0 z-40 w-64 bg-card text-card-foreground shadow-lg transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 ease-in-out md:translate-x-0 md:static ${className}`;

  const links = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/events", icon: Calendar, label: "Events" },
    { to: "/resources", icon: BookOpen, label: "Resources" },
    { to: "/community", icon: Users, label: "Community" },
    { to: "/wishlist", icon: Star, label: "Wishlist" },
    ...(user ? [{ to: "/profile", icon: Settings, label: "Profile" }] : []),
  ];

  return (
    <aside className={sidebarClasses}>
      <div className="flex justify-between items-center p-4 border-b border-border md:hidden">
        <h2 className="text-xl font-semibold">Menu</h2>
        <button
          onClick={closeSidebar}
          className="p-2 rounded-full hover:bg-muted"
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
              icon={<link.icon size={20} />}
              label={link.label}
              isActive={location.pathname === link.to}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

const SidebarLink: React.FC<{
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}> = ({ to, icon, label, isActive }) => (
  <li>
    <Link
      to={to}
      className={`flex items-center space-x-3 p-3 rounded-md transition-colors ${
        isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  </li>
);

export default Sidebar;
