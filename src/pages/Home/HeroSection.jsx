import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import heroImage from "../../assets/images/herosection-girl.png";

export const HeroSection = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={10}>
      <Flex direction="column" justify="space-evenly" alignItems="center">
        <Heading>
          <Highlight query="GƏLƏCƏYİ" styles={{ color: "green" }}>
            ÖVLADINIZIN GƏLƏCƏYİ ÜÇÜN ÇALIŞIRIQ!
          </Highlight>
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Turpis venenatis tincidunt
          egestas vitae
        </Text>
        <Button>İNDİ ƏLAQƏ SAXLA</Button>
      </Flex>
      <Box>
        <Image src={heroImage} alt="girl book" />
      </Box>
    </SimpleGrid>
  );
};
