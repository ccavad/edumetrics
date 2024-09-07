import React from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react"; // Import necessary Chakra UI components

export default function ServiceCard({ imageSrc, heading, text }) {
  return (
    <>
      <Box
        bg="transparent"
        as="section"
        w="380px"
        p={4}
        pt={20}
        borderRadius="10px"
        border="1px solid black"
        position="relative"
      >
        <Image
          src={imageSrc}
          position="absolute"
          bottom="90px"
          left="230px"
          bg="white"
          border="15px solid white"
        />
        <Heading as="h5" size="md">
          {heading}
        </Heading>
        <Text>{text}</Text>
      </Box>
    </>
  );
}
