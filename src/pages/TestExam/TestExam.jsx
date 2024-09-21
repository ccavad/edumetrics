import React, { useEffect, useState } from "react";
import { getExamDetail, getExamQuestions } from "../../services/api/apiService";
import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { RenderHTML } from "../../components/common/RenderHTML";
import { questionTypes } from "../../utils/statics/constants";
import { useLocation } from "react-router";
import { Navigation } from "../../components/exam/Navigation";

const TestExam = () => {
  const [htmlData, setHtmlData] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const location = useLocation();
  console.log("loc", location);
  const examSubject = location?.state?.subject;
  const examSubjectId = location?.state?.subjectId;

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const res = await getExamQuestions(examSubjectId);

    console.log("getExamQuestions", res);
    if (res?.data) {
      setQuestions(res?.data);
      // setHtmlData(extractBodyContent(res.data));
    }
  };
  return (
    <Box>
      <Heading textAlign="center">{examSubject}</Heading>
      <Navigation
        questionList={questions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
      {questions.map((ques) => (
        <Box key={ques?.questionId}>
          <Text fontWeight="bold">
            <RenderHTML htmlString={ques?.questionText} />
          </Text>
          <List>
            {ques?.questionType === questionTypes.closed &&
              ques?.answers.map((answer) => (
                <ListItem key={answer?.id}>
                  <RenderHTML htmlString={answer.answer} />
                </ListItem>
              ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default TestExam;
