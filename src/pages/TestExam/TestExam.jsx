import React, { useEffect, useState } from "react";
import { getExamDetail, getExamQuestions } from "../../services/api/apiService";
import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";

import { useLocation } from "react-router";
import { Navigation } from "./Navigation";
import { QuestionRenderer } from "./QuestionRenderer";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useExamStore } from "../../store/useExamStore";

const TestExam = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const setExamAnswers = useExamStore((state) => state.setExamAnswers);

  const location = useLocation();
  // console.log("location", location);
  const examSubject = location?.state?.subject;
  const examSubjectId = location?.pathname.split("/")[2];

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const res = await getExamQuestions(examSubjectId);

    if (res?.data) {
      setQuestions(res?.data);
      // console.log("questions", res?.data);

      // Check localStorage for existing exam answers
      const savedExamAnswers = JSON.parse(localStorage.getItem("examAnswers"));
      if (!savedExamAnswers || !savedExamAnswers[examSubjectId]) {
        // Initialize default answers with type "missed"
        const newExamAnswers = res?.data.reduce((acc, question) => {
          acc[question.questionId] = { value: "", type: "missed" };
          return acc;
        }, {});

        // Update Zustand and localStorage
        setExamAnswers(examSubjectId, newExamAnswers);
        // localStorage.setItem(
        //   "examAnswers",
        //   JSON.stringify({
        //     ...savedExamAnswers,
        //     [examSubjectId]: newExamAnswers,
        //   })
        // );
      }
    }
  };
  return (
    <VStack align="center" gap="2rem">
      <Heading textAlign="center">{examSubject}</Heading>
      <Navigation
        questionList={questions}
        currentQuestion={currentQuestionId}
        setCurrentQuestion={setCurrentQuestionId}
      />
      <QuestionRenderer question={questions[currentQuestionId - 1]} />
      <HStack>
        <Button
          // variant="ghost"
          bg="transparent"
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          isDisabled={currentQuestionId <= 1 ? true : false}
          onClick={() => setCurrentQuestionId((prev) => prev - 1)}
        >
          <ArrowLeft size="32" />
          <Text>Əvvəlki</Text>
        </Button>
        <Button
          bg="transparent"
          display="flex"
          flexDirection="column"
          isDisabled={currentQuestionId >= questions.length ? true : false}
          onClick={() => setCurrentQuestionId((prev) => prev + 1)}
        >
          <ArrowRight size="32" />
          Sonraki
        </Button>
      </HStack>
    </VStack>
  );
};

export default TestExam;
