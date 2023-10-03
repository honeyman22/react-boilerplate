import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "./utils/auth"; 

interface IProtectedRoute {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const user = isLoggedIn();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export const PreventLoggedInRoute = ({ children }: IProtectedRoute) => {
  const user = isLoggedIn();
  const { pathname } = useLocation();

  if (user && pathname === "/login") {
    return <Navigate to="/" replace />;
  }

  return children;
};
