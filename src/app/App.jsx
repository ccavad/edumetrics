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
import { textTemplates } from "./../utils/statics/templates";
import { useAuthStore } from "../store/useAuthStore";


function App() {
  const initCompanyData = useCompanyStore((state) => state.initCompanyData);
  const initCompanyDataLoading = useCompanyStore(
    (state) => state.initCompanyDataLoading
  );
  const token = useAuthStore((state) => state.token);
  const initToken = useAuthStore((state) => state.initToken);

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
          {initCompanyDataLoading ? (
            <Route index element={<LoadingSpinner />} />
          ) : (
            <>
              <Route path="/" element={<RootLayout />}>
                <Route
                  index
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <LazyHome />
                    </Suspense>
                  }
                  exact
                />
                <Route
                  path="register"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <LazyRegister />
                    </Suspense>
                  }
                />

                <Route path="/faq" element={<FaqPage />} />
                <Route
                  path="login"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <LazyLogin />
                    </Suspense>
                  }
                />

              </Route>
              
            </>
          )}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
