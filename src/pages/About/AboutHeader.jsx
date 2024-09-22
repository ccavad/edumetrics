import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import greenCircle from "../../assets/images/green_circle.svg";
import { textTemplates } from "../../utils/statics/templates";

const HeaderSection = () => (
  <Flex
    direction={{ base: "column", sm: "row" }} // Stack vertically on small screens, side by side on larger screens
    justify="space-between" // Distribute space between the text and image, pushing the image to the right
    p={6} // Add padding
    mb="100px"
  >
    {/* Left side content */}
    <Box flex="1" mr={{ sm: 12 }}>
      {/* Add margin-right on larger screens */}
      <Heading mb={4}>HAQQIMIZDA</Heading> {/* Margin-bottom for spacing */}
      <Text>{textTemplates.loremText}</Text>
    </Box>

    {/* Right side image */}
    <Box flexShrink={0}>
      {" "}
      {/* Prevent the box from shrinking */}
      <Image src={greenCircle} alt="circle" />
    </Box>
  </Flex>
);

export default HeaderSection;
