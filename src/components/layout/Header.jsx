import { Container, Image, Select, Spacer } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import { HamburgerDrawer } from "./HamburgerDrawer";
import { useCompanyStore } from "../../store/useCompanyStore";
import { isEmptyObject } from "../../utils/tools/helpers";
import { EDU_URL } from "../../services/api/constants";

export const Header = () => {
  const { companyData, setLanguage } = useCompanyStore(
    useShallow((state) => ({
      companyData: state.companyData,
      setLanguage: state.setLanguage,
    }))
  );

  const location = useLocation();
  const pagePath = location.pathname;
  const DarkBgPages = ["/faq", "/exams"]; // Replace with your actual paths
  const isDarkBgPages = DarkBgPages.includes(pagePath);

  const selectStyles = {
    borderRadius: "10px",
    borderColor: "#f0f0f0",
    backgroundColor: "white",
    color: "#1a1a1a",
  };

  const whiteFilter = "invert(1) brightness(10000%) saturate(100%)";

  return (
    <Container
      width="full"
      height="88px"
      maxWidth="1200px"
      padding={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
      as="header"
      display="flex"
      alignItems="center"
    >
      <HamburgerDrawer isDarkBgPages={isDarkBgPages} />
      <NavLink to="/">
        <Image
          src={EDU_URL + "/logo"}
          height={{ base: "40px", sm: "60px" }}
          ml={{ base: "1rem", md: "4rem" }}
          filter={isDarkBgPages ? whiteFilter : "none"}
        />
      </NavLink>

      <Spacer />
      <Select
        w="84px"
        onChange={(e) => setLanguage(e.target.value.toLowerCase())}
        sx={selectStyles}
      >
        {!isEmptyObject(companyData) &&
          companyData.languageList.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
      </Select>
    </Container>
  );
};
