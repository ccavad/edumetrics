import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

export const PrivateRoute = () => {
  const token = useAuthStore((state) => state.token);

  return <>{token ? <Navigate to="/login" /> : <Outlet />}</>;
};
