import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import Wishlist from "./pages/Wishlist";
import PrivateRoute from "./components/auth/PrivateRoute";
import ErrorBoundary from "./components/common/ErrorBoundary";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/profile"
                  element={
                    //<PrivateRoute allowedRoles={["admin", "tutor", "student"]}>
                    //  <Profile />
                    //</PrivateRoute>
                    <Profile />
                  }
                />
                <Route path="/events" element={<Events />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/community" element={<Community />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </Layout>
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
