import React from "react";
import { Flex, Heading } from "@chakra-ui/react"; // Import necessary Chakra UI components
import ServiceCard from "../../components/layout/ServiceCard"; // Correct path to ServiceCard
import Books from "../../assets/images/books.png"; // Correct path to Books image
import Presentation from "../../assets/images/presentation.png"; // Correct path to Presentation image
import Weakness from "../../assets/images/weakness.png"; // Correct path to Weakness image

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

export default function ServiceCardSection() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      mb="100px"
    >
      <Heading as="h3" size="lg" mb="100px">
        BİZİM SERVİSLƏR!
      </Heading>
      <Flex
        justifyContent="center"
        gap={{ base: "60px", lg: 4 }}
        direction={{ base: "column", lg: "row" }}
        alignItems="center"
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
