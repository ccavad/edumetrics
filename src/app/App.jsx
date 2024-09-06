import { lazy, Suspense, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// routes
import { RootLayout } from "./RootLayout";
const LazyHome = lazy(() => import("./../pages/Home/Home"));
const LazyRegister = lazy(() => import("./../pages/Register/Register"));
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
import { documentText } from "./../utils/statics/templates";
import FaqPage from "../pages/FAQ/FaqPage";

function App() {
  const initData = useCompanyStore((state) => state.initData);
  const initDataLoading = useCompanyStore((state) => state.initDataLoading);

  useFavicon(EDU_URL + "/logo");
  useDocumentTitle(documentText);

  useEffect(() => {
    initData();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {initDataLoading ? (
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
              </Route>
              
            </>
          )}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
