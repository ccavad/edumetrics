import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import ExamsBackground from "../../assets/images/examsBackground.png"

export default function ExamsPage() {
  return (
    <>
      <Stack mb="200px">
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="70vh"
          backgroundImage={`url(${ExamsBackground})`}
          backgroundSize="cover"
          backgroundPosition="center"
          zIndex="-1"
        />

        <Text
          textAlign="center"
          color="white"
          fontSize="60px"
          fontWeight="bold"
        >
         İmtahanlar
        </Text>
      </Stack>
      <Text fontSize="40px" fontWeight="semiBold">SINAQLAR</Text>
      
    </>
  );
}
