import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DotsNine } from "@phosphor-icons/react";
import React from "react";

export const Navigation = ({
  questionList,
  // = Array.from({ length: 20 }, (_, i) => ({ index: i + 1 }))
  currentQuestion,
  setCurrentQuestion,
}) => {
  return (
    <Box
      border="2px solid #FF7D39"
      borderRadius="4px"
      p={{ base: ".5rem", sm: "1rem" }}
      w={{ base: "100%", sm: "300px" }}
      aspectRatio="1/1"
    >
      <VStack gap={7}>
        <HStack>
          <DotsNine size={32} />
          <Heading as="h5">Suallar</Heading>
        </HStack>
        <SimpleGrid columns={5} spacing={3}>
          {questionList.map((question) => (
            <Flex
              key={question.index}
              borderRadius="50%"
              bg="navigation.answered"
              w="32px"
              h="32px"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              onClick={() => setCurrentQuestion(question.questionId)}
            >
              <Text color="headingBlack">{question.questionId}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
