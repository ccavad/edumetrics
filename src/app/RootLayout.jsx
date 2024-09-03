import { Container } from "@chakra-ui/react";
import { Header } from "../components/layout/Header";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <Container as="main" maxWidth="1200px">
        <Outlet />
      </Container>
    </>
  );
};
