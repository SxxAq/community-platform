import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 gap-2">
      <Header
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        className=" shadow-sm"
      />

      <div className="flex flex-grow flex-col gap-2 md:flex-row">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
          className="md:w-64 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-all duration-300"
        />

        {/* Main content */}
        <main className="flex-1 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
