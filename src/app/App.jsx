import { lazy, Suspense, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// routes
import { RootLayout } from "./RootLayout";
const LazyHome = lazy(() => import("./../pages/Home/Home"));
const LazyRegister = lazy(() => import("./../pages/Register/Register"));
const LazyLogin = lazy(() => import("./../pages/Login/Login"));
const LazyTest = lazy(() => import("./../pages/TestExam/TestExam"));
const LazyAbout = lazy(() => import("../pages/About/About"));
import FaqPage from "../pages/FAQ/FaqPage";
import ExamsPage from "../pages/Exams/ExamsPage";

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
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Statistics } from "../pages/Statistics/StatisticsLayout";

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

  const wrapWithSuspense = (element, type = "private") => {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        {/* {type === "private" ? (
          <PrivateRoute>{element}</PrivateRoute>
        ) : type === "public" ? (
          <PublicRoute>{element}</PublicRoute>
        ) : (
          element
        )} */}
        {element}
      </Suspense>
    );
  };

  const isLoggedIn = null;

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {initCompanyDataLoading && initTokenLoading ? (
            <Route index element={<LoadingSpinner />} />
          ) : (
            <>
              <Route path="/" element={<RootLayout />}>
                <Route
                  index
                  element={wrapWithSuspense(<LazyHome />, "public")}
                  exact
                />
                <Route
                  path="/register"
                  element={wrapWithSuspense(<LazyRegister />, "public")}
                />
                <Route path="/faq" element={wrapWithSuspense(<FaqPage />)} />
                <Route
                  path="/about"
                  element={wrapWithSuspense(<LazyAbout />)}
                />

                <Route
                  path="/exams"
                  element={wrapWithSuspense(<ExamsPage />)}
                />
                <Route
                  path="/login"
                  element={wrapWithSuspense(<LazyLogin />, "public")}
                />
                <Route
                  path="/test/:id"
                  element={wrapWithSuspense(<LazyTest />)}
                />
                <Route
                  path="*"
                  element={wrapWithSuspense(<LazyHome />, "public")}
                />
              </Route>
              <Route path="/statistics" element={<Statistics />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
