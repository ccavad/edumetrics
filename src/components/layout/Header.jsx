import { Container, Flex, Heading, Select, Spacer } from "@chakra-ui/react";
import { HamburgerDrawer } from "./HamburgerDrawer";

export const Header = () => {
  return (
    <Container
      width="full"
      height="88px"
      maxWidth="1175px"
      padding={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
    >
      <Flex>
        <HamburgerDrawer />
        <Heading ml={10}>Logo</Heading>
        <Spacer />
        <Select
          w="84px"
          borderRadius="10px"
          borderColor="#262626"
          onChange={null}
        >
          <option value="aze">AZE</option>
          <option value="eng">ENG</option>
          <option value="ru">RU</option>
        </Select>
      </Flex>
    </Container>
  );
};
