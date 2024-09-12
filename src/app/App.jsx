import { lazy, Suspense, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// routes
import { RootLayout } from "./RootLayout";
const LazyHome = lazy(() => import("./../pages/Home/Home"));
const LazyRegister = lazy(() => import("./../pages/Register/Register"));
const LazyLogin = lazy(() => import("./../pages/Login/Login"));
import { LoadingSpinner } from "../components/layout/LoadingSpinner";
// styling
import "../assets/styles/App.css";
import theme from "./../assets/theme/theme";
// hooks
import { useDocumentTitle } from "usehooks-ts";
import useFavicon from "../utils/hooks/useFavicon";
import { useCompanyStore } from "../store/useCompanyStore";
// misc
import { EDU_URL } from "../services/api/constants";

import FaqPage from "../pages/FAQ/FaqPage";

import ExamsPage from "../pages/Exams/ExamsPage";

import { textTemplates } from "./../utils/statics/templates";
import { useAuthStore } from "../store/useAuthStore";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  const initCompanyData = useCompanyStore((state) => state.initCompanyData);
  const initCompanyDataLoading = useCompanyStore(
    (state) => state.initCompanyDataLoading
  );
  const initToken = useAuthStore((state) => state.initToken);

  useFavicon(EDU_URL + "/logo");
  useDocumentTitle(textTemplates.documentTitle);

  useEffect(() => {
    initToken();
    initCompanyData();
  }, []);

  const wrapWithSuspense = (element, isPrivate = false) => {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        {isPrivate ? <PrivateRoute>{element}</PrivateRoute> : element}
      </Suspense>
    );
  };

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {initCompanyDataLoading ? (
            <Route index element={<LoadingSpinner />} />
          ) : (
            <>
              <Route path="/" element={<RootLayout />}>
                <Route index element={wrapWithSuspense(<LazyHome />)} exact />
                <Route
                  path="register"
                  element={wrapWithSuspense(<LazyRegister />)}
                />
                <Route path="/faq" element={wrapWithSuspense(<FaqPage />)} />
                <Route
                  path="/exams"
                  element={wrapWithSuspense(<ExamsPage />)}
                />
                <Route path="login" element={wrapWithSuspense(<LazyLogin />)} />
                <Route path="*" element={wrapWithSuspense(<LazyHome />)} />
              </Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
