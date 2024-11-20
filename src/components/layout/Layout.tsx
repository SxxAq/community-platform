import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col md:flex-row">
        <Sidebar className="w-full md:w-64 bg-gray-100" />
        <main className="flex-grow p-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
