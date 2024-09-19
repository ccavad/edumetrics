import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import {
  getExamDetail,
  getExamQuestions,
  getExams,
} from "../../services/api/apiService";
import { extractBodyContent } from "./../../utils/tools/helpers";
import {
  Box,
  Button,
  Circle,
  HStack,
  Text,
  VStack,
  Input,
  Textarea,
  ChakraProvider,
  Image,
} from "@chakra-ui/react";

const TestExam = () => {
  const [htmlData, setHtmlData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    try {
      const res = await getExamQuestions(1);
      console.log("getExamDetail", res);
      if (res?.data) {
        setHtmlData(res.data);
      }
    } catch (error) {
      console.error("Error fetching exam questions:", error);
    }
  };

  const currentQuestion = htmlData[currentQuestionIndex];

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < htmlData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleAnswerChange = (value) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: value,
    });
  };

  const renderAnswerInput = () => {
    if (currentQuestion?.answers?.length > 0) {
      return (
        <VStack align="start" spacing={3}>
          {currentQuestion.answers.map((ans, ansInd) => (
            <HStack
              key={ansInd}
              align="center"
              w="full"
              p={2}
              borderRadius="md"
              bg="gray.50"
            >
              <Circle
                size="30px"
                borderWidth="1px"
                borderColor="gray.300"
                bg="white"
              >
                {ans?.variant ? parse(ans.variant) : ""}
              </Circle>
              <Text>
                {ans?.answer ? parse(ans.answer) : "No answer available"}
              </Text>
            </HStack>
          ))}
        </VStack>
      );
    } else if (currentQuestion?.mask) {
      return (
        <Input
          placeholder="Cavabınızı daxil edin"
          value={userAnswers[currentQuestionIndex] || ""}
          onChange={(e) => handleAnswerChange(e.target.value)}
          pattern={currentQuestion.mask} // Regex maskası üçün pattern
        />
      );
    } else {
      return (
        <Textarea
          placeholder="Cavabınızı daxil edin"
          value={userAnswers[currentQuestionIndex] || ""}
          onChange={(e) => handleAnswerChange(e.target.value)}
        />
      );
    }
  };

  const renderQuestionHeader = () => {
    if (currentQuestion?.questionHeaderText) {
      return parse(currentQuestion.questionHeaderText, {
        replace: (domNode) => {
          if (
            domNode.name === "img" &&
            domNode.attribs?.src?.startsWith("data:image")
          ) {
            return (
              <Image src={domNode.attribs.src} alt={domNode.attribs.alt} />
            );
          }
        },
      });
    }
    return null;
  };

  return (
    <ChakraProvider>
      <Box p={6}>
        {currentQuestion && (
          <Box mb={6} borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
            {renderQuestionHeader()}

            <Text fontSize="lg" fontWeight="bold" mb={4}>
              {currentQuestion?.questionText
                ? parse(currentQuestion.questionText)
                : "No question text available"}
            </Text>

            {renderAnswerInput()}

            <HStack justify="space-between" mt={6}>
              <Button
                variant="outline"
                onClick={handlePrevious}
                isDisabled={currentQuestionIndex === 0}
              >
                Əvvəlki
              </Button>
              <Button
                variant="outline"
                onClick={handleNext}
                isDisabled={currentQuestionIndex === htmlData.length - 1}
              >
                Növbəti
              </Button>
            </HStack>
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
  // problem budu ki parse icine html kodu girmelidi, evvelki api-da pramoy o gelirdi
  // indikinde array gelir, parse icine array qoyursan
  // array-i map elemelisen, onun icindeki html-leri parse elemelisen
  // Uncaught TypeError: First argument must be a string
  // bu xeta gelirse parse icine giren seyi loga cixar gor nedi.
  //yaxsi baxda end pointde de bu olurdeu deyesen getExams gozde gosterim
};

export default TestExam;
