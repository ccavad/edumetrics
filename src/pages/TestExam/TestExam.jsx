import React, { useEffect, useState } from "react";
import { getExamDetail } from "../../services/api/apiService";
import parse from "html-react-parser";
import { extractBodyContent } from "./../../utils/tools/helpers";

const TestExam = () => {
  const [htmlData, setHtmlData] = useState("");
  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const res = await getExamDetail(1);
    console.log("getExamDetail", res);
    if (res?.data) {
      setHtmlData(extractBodyContent(res.data));
    }
  };
  return <div>{parse(htmlData)}</div>;
};

export default TestExam;
