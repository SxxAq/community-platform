import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface PrivateRouteProps {
  allowedRoles: ("admin" | "tutor" | "student")[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/unauthorized" replace />;
  }
  //if (user && allowedRoles.includes(user.role)) {
  //  return <Outlet />;
  //} else {
  //  return <Navigate to="/unauthorized" replace />;
  //}
};

export default PrivateRoute;
