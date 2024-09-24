import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { StatisticsHeader } from "./StatisticsHeader";
import { StatisticsAverage } from "./StatisticsAverage";
import { StatisticsTopics } from "./StatisticsTopics";
import { StatisticsLineChartSection } from "./StatisticsLineChartSection.";

export const Statistics = () => {
  return (
    <>
      <StatisticsHeader />
      <StatisticsAverage />
      <StatisticsTopics />
      <StatisticsLineChartSection />
    </>
  );
};
