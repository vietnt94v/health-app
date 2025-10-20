import type { JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/stores";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};

export default PrivateRoute;
