import React from "react";
import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react"; // Import necessary Chakra UI components

export default function LeaderCard({
  borderColor,
  badgeSrc,
  avatarSrc,
  name,
  description,
  score,
  scoreColor,
}) {
  return (
    <>
      <Box
        as="section"
        w="380px"
        h="250px"
        borderRadius="10px"
        border={`3px solid ${borderColor}`}
        position="relative"
        transition="transform 0.3s ease, background-color 0.3s ease"
        cursor="pointer"
        _hover={{
          transform: "scale(1.05)", // Slightly scale up the card on hover
        }}
      >
        <Image
          src={badgeSrc}
          position="absolute"
          bg="white"
          borderRadius="100%"
          border="8px solid white"
          top="-25px"
          left="20px"
        />

        <Image src={avatarSrc} position="absolute" top="25px" left="155px" />
        <Box h="70px" bg={borderColor} mb={10} />

        <Flex
          justifyContent="center"
          alignItems="center"
          gap={2}
          direction="column"
          textAlign="center"
        >
          <Heading as="h5" size="md">
            {name}
          </Heading>
          <Text>{description}</Text>
          <Heading as="h1" color={scoreColor}>
            {score}
          </Heading>
        </Flex>
      </Box>
    </>
  );
}
