import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { FiMenu } from "react-icons/fi";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-grow flex">
        <Sidebar
          isOpen={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
        />
        <main className="flex-grow p-4 md:ml-64">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
