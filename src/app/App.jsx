import { lazy, Suspense, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// styling
import "../assets/styles/App.css";
import theme from "./../assets/theme/theme";
// routes
import { RootLayout } from "./RootLayout";
const LazyHome = lazy(() => import("./../pages/Home/Home"));
const LazyRegister = lazy(() => import("./../pages/Register/Register"));
// other
import { LoadingSpinner } from "../components/layout/LoadingSpinner";
import { getCompanyData } from "../services/api/companyApi";
import { useCompanyStore } from "../store/useCompanyStore";
import useFavicon from "../utils/hooks/useFavicon";

function App() {
  const setCompanyData = useCompanyStore((state) => state.setCompanyData);

  // useFavicon("");

  const initData = async () => {
    try {
      const { data } = await getCompanyData();
      console.log("initdata", data);
      setCompanyData(data);
    } catch (error) {
      console.error("getCompanyData error: ", error);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
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
              path="/register"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <LazyRegister />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
