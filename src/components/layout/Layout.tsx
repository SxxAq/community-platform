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
    <div className="min-h-screen flex flex-col gap-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        className="mb-4 shadow-sm" // Added margin and subtle shadow
      />

      <div className="flex flex-grow px-4 space-x-4">
        <Sidebar
          isOpen={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
          className="rounded-lg bg-white dark:bg-gray-800 shadow-lg w-64 transition-all duration-300"
        />

        <main className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          {children}
        </main>
      </div>

      <Footer className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 py-4 shadow-top z-50" />
    </div>
  );
};

export default Layout;
