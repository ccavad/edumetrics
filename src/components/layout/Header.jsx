import {
  Container,
  Flex,
  Heading,
  Image,
  Select,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerDrawer } from "./HamburgerDrawer";
import { useCompanyStore } from "../../store/useCompanyStore";
import { isEmptyObject } from "../../utils/tools/helpers";
import { EDU_URL } from "../../services/api/constants";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const companyData = useCompanyStore((state) => state.companyData);
  const setLanguage = useCompanyStore((state) => state.setLanguage);
  // const { companyData, setLanguage } = useCompanyStore((state) => ({
  //   companyData: state.companyData,
  //   setLanguage: state.setLanguage,
  // }));

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
      <HamburgerDrawer />
      <NavLink to="/">
        <Image
          src={EDU_URL + "/logo"}
          height="50px"
          ml={{ base: "1rem", md: "4rem" }}
        />
      </NavLink>

      <Spacer />
      <Select
        w="84px"
        borderRadius="10px"
        borderColor="#262626"
        onChange={(e) => setLanguage(e.target.value.toLowerCase())}
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
