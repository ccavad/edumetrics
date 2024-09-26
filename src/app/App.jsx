import { lazy, Suspense, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// routes
import { RootLayout } from "./RootLayout";
import { PublicRoute } from "./PublicRoute";
import { ProtectedRoutes } from "./ProtectedRoutes";
const LazyHome = lazy(() => import("./../pages/Home/Home"));
const LazyRegister = lazy(() => import("./../pages/Register/Register"));
const LazyLogin = lazy(() => import("./../pages/Login/Login"));
const LazyTest = lazy(() => import("./../pages/TestExam/TestExam"));
const LazyAbout = lazy(() => import("../pages/About/About"));
import FaqPage from "../pages/FAQ/FaqPage";
import ExamsPage from "../pages/Exams/ExamsPage";
import { Statistics } from "../pages/Statistics/StatisticsLayout";

// styling
import "../assets/styles/App.css";
import theme from "./../assets/theme/theme";
// hooks
import { useDocumentTitle } from "usehooks-ts";
import useFavicon from "../utils/hooks/useFavicon";
import { useCompanyStore } from "../store/useCompanyStore";
// misc
import { LoadingSpinner } from "../components/layout/LoadingSpinner";
import { EDU_URL } from "../services/api/constants";

import { textTemplates } from "./../utils/statics/templates";
import { useAuthStore } from "../store/useAuthStore";

function App() {
  const initCompanyData = useCompanyStore((state) => state.initCompanyData);
  const initToken = useAuthStore((state) => state.initToken);
  const initCompanyDataLoading = useCompanyStore(
    (state) => state.initCompanyDataLoading
  );
  const initTokenLoading = useAuthStore((state) => state.initTokenLoading);

  useFavicon(EDU_URL + "/logo");
  useDocumentTitle(textTemplates.documentTitle);

  useEffect(() => {
    initToken();
    initCompanyData();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {initCompanyDataLoading && initTokenLoading ? (
            <Route path="/" element={<LoadingSpinner />} />
          ) : (
            <>
              <Route element={<RootLayout />}>
                <Route element={<ProtectedRoutes />}>
                  <Route index element={<LazyHome />} />
                  <Route path="/about" element={<LazyAbout />} />
                  <Route path="/faq" element={<FaqPage />} />
                  <Route path="/exams" element={<ExamsPage />} />
                  <Route path="/test/:id" element={<LazyTest />} />

                  <Route path="*" element={<LazyHome />} />
                </Route>
                <Route element={<PublicRoute />}>
                  <Route path="/login" element={<LazyLogin />} />
                  <Route path="/register" element={<LazyRegister />} />
                </Route>
              </Route>
              <Route>
                <Route element={<ProtectedRoutes />}>
                  <Route path="/statistics" element={<Statistics />} />
                </Route>
              </Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
