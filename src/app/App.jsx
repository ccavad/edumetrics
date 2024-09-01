import { lazy, Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// styling
import "../assets/styles/App.css";
import theme from "./../assets/theme/theme";
// routes
const LazyHome = lazy(() => import("./../pages/Home/Home"));
const LazyRegister = lazy(() => import("./../pages/Register/Register"));
// other
import { LoadingSpinner } from "../components/layout/LoadingSpinner";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
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
              <Suspense fallback="Loading...">
                <LazyRegister />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
