import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router";
import { LoadingSpinner } from "../components/layout/LoadingSpinner";
import { useAuthStore } from "../store/useAuthStore";

export const ProtectedRoutes = () => {
  const token =
    useAuthStore((state) => state.token) ||
    localStorage.getItem("notSafeAuthToken");

  return token ? (
    <Suspense fallback={<LoadingSpinner />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to="/login" />
  );
};
