import React from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"; // Import necessary Chakra UI components

import Books from "../../assets/images/books.png"; // Correct path to Books image
import Presentation from "../../assets/images/presentation.png"; // Correct path to Presentation image
import Weakness from "../../assets/images/weakness.png"; // Correct path to Weakness image
import ServiceCard from "../Home/ServiceCard";
import { textTemplates } from "../../utils/statics/templates";

// Data array simulating an API response
const serviceCardData = [
  {
    id: 1,
    imageSrc: Books,
    heading: "FƏNLƏR",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    imageSrc: Presentation,
    heading: "ABİTURİYENT HAZIRLIĞI",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    imageSrc: Weakness,
    heading: "ZƏİFLİKLƏR",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
];

export default function ServiceSection() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      mb="100px"
    >
      <Heading as="h3" size="lg">
        XİDMƏTLƏRİMİZ
      </Heading>
      <Text mb="100px">{textTemplates.loremText}</Text>

      <Flex
        justifyContent="space-between"
        gap={{ base: "60px", lg: "30px" }}
        direction={{ base: "column", lg: "row" }}
        alignItems="center"
        width={{ base: "auto", lg: "full" }}
      >
        {serviceCardData.map(({ id, imageSrc, heading, text }) => (
          <ServiceCard
            key={id}
            imageSrc={imageSrc}
            heading={heading}
            text={text}
          />
        ))}
      </Flex>
    </Flex>
  );
}
