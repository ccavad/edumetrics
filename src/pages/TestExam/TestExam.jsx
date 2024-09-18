import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { getExamDetail } from "../../services/api/apiService";
import { extractBodyContent } from "./../../utils/tools/helpers";
import { Box } from "@chakra-ui/react";

const TestExam = () => {
  const [htmlData, setHtmlData] = useState("");

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const res = await getExamDetail(3);
    console.log("getExamDetail", res);
    if (res?.data) {
      setHtmlData(res.data);
    }
  };
  return <Box>{parse(htmlData)}</Box>;
};

export default TestExam;
