import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Heading,
  HStack,
  List,
  ListItem,
  Skeleton,
  Textarea,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Question } from "@phosphor-icons/react";
import { RenderHTML } from "../../components/common/RenderHTML";
import {
  examAnswerTypes,
  questionTypesList,
} from "../../utils/statics/constants";
import { useExamStore } from "../../store/useExamStore";

const hardCodedExamId = 1;

export const QuestionRenderer = ({ question }) => {
  const examAnswers = useExamStore((state) => state.examAnswers);
  const setExamAnswerType = useExamStore((state) => state.setExamAnswerType);
  const selectedQuizAnswer =
    examAnswers[hardCodedExamId]?.[question?.questionId];

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;

    const newType = isChecked
      ? "marked"
      : selectedQuizAnswer?.value
      ? "answered"
      : "missed";

    setExamAnswerType(hardCodedExamId, question?.questionId, newType);
  };

  if (!question) {
    return (
      <VStack w="full">
        <Skeleton height="30px" w="full" />
        <Skeleton height="30px" w="full" />
        <Skeleton height="30px" w="full" />
      </VStack>
    );
  }

  return (
    <Box>
      <HStack align="center" mb={8}>
        <Heading as="h5" fontSize="30px">
          <RenderHTML htmlString={question?.questionText} />
        </Heading>
        <Tooltip label="quiz">
          <Question size={40} />
        </Tooltip>
      </HStack>
      <QuestionBody question={question} />
      <FormControl display="flex" justifyContent="flex-end">
        <Checkbox
          isChecked={selectedQuizAnswer?.type === "marked"}
          onChange={handleCheckboxChange}
        >
          Yeniden bax
        </Checkbox>
      </FormControl>
    </Box>
  );
};

const QuestionBody = ({ question }) => {
  const examAnswers = useExamStore((state) => state.examAnswers);
  const setExamAnswersByQuestion = useExamStore(
    (state) => state.setExamAnswersByQuestion
  );
  const selectedQuizAnswer = examAnswers["1"]?.[question?.questionId];

  if (questionTypesList[question?.questionType] === "closed") {
    return (
      <List display="flex" flexDirection="column" gap="1rem">
        {question?.answers.map((answer) => (
          <ListItem
            key={answer?.id}
            display="flex"
            alignItems="center"
            gap="2rem"
          >
            <Button
              borderRadius={0}
              border={
                selectedQuizAnswer?.value == answer?.id ? "" : "1px solid"
              }
              display="flex"
              fontSize="24px"
              w="40px"
              h="40px"
              justifyContent="center"
              alignItems="center"
              bg={selectedQuizAnswer?.value == answer?.id ? "lightBlue" : ""}
              cursor="pointer"
              onClick={() =>
                setExamAnswersByQuestion(hardCodedExamId, question.questionId, {
                  value: answer?.id,
                  type:
                    selectedQuizAnswer?.type === examAnswerTypes.marked
                      ? examAnswerTypes.marked
                      : examAnswerTypes.answered,
                })
              }
            >
              {answer?.variant}
            </Button>
            <RenderHTML htmlString={answer?.answer} />
          </ListItem>
        ))}
      </List>
    );
  }
  if (questionTypesList[question?.questionType] === "open") {
    return <Textarea placeholder="cavabi yazin" maxH="300px" />;
  }
};
