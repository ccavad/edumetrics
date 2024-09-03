import { Container, Flex, Heading, Select, Spacer } from "@chakra-ui/react";
import { HamburgerDrawer } from "./HamburgerDrawer";
import { useCompanyStore } from "../../store/useCompanyStore";
import { isEmptyObject } from "../../utils/tools/helpers";

export const Header = () => {
  const companyData = useCompanyStore((state) => state.companyData);

  return (
    <Container
      width="full"
      height="88px"
      maxWidth="1175px"
      padding={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
      as="header"
    >
      <Flex>
        <HamburgerDrawer />
        <Heading ml={10} fontSize="3xl" fontWeight="400">
          Logo
        </Heading>
        <Spacer />
        <Select
          w="84px"
          borderRadius="10px"
          borderColor="#262626"
          onChange={null}
        >
          {!isEmptyObject(companyData) &&
            companyData.languageList.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
        </Select>
      </Flex>
    </Container>
  );
};
