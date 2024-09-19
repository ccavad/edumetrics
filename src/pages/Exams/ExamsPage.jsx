import React from "react";
import { Box, Stack, Text, Flex } from "@chakra-ui/react";
import ExamsBackground from "../../assets/images/examsBackground.png";
import Azlang from "../../assets/images/azlang.png";
import Math2 from "../../assets/images/math2.png";
import Math from "../../assets/images/math.png";
import ExamSubjectCard from "../Home/ExamSubjectCard";

const examSubjects = [
  {
    title: "Riyaziyyat",
    description: "Lorem ipsum dolor sit amet consectetur.",
    imageSrc: Math,
    borderColor: "#4AE49D",
    buttonColor: "#A4D7F2",
  },
  {
    title: "Azərbaycan Dili",
    description: "Lorem ipsum dolor sit amet consectetur.",
    imageSrc: Azlang,
    borderColor: "#FFA753",
    buttonColor: "#A4D7F2",
  },
  {
    title: "Riyaziyyat-2",
    description: "Lorem ipsum dolor sit amet consectetur.",
    imageSrc: Math2,
    borderColor: "#28B5FF",
    buttonColor: "#A4D7F2",
  },
];

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
          mb="50px"
        >
          İmtahanlar
        </Text>
      </Stack>
      <Text fontSize="40px" fontWeight="semiBold">
        SINAQLAR
      </Text>
      <Flex
        justifyContent="center"
        gap={4}
        direction={{ base: "column", lg: "row" }}
        alignItems="center"
        mb="200px"
      >
        {examSubjects.map((subject, index) => (
          <ExamSubjectCard
            key={index}
            title={subject.title}
            description={subject.description}
            imageSrc={subject.imageSrc}
            borderColor={subject.borderColor}
          />
        ))}
      </Flex>
    </>
  );
}
