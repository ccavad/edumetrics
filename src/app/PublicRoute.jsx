import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

export const PublicRoute = () => {
  const token = useAuthStore((state) => state.token);
  console.log("public token", token);

  return token ? <Navigate to="/" /> : <Outlet />;
};
