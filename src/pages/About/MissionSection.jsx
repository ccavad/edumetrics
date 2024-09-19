import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import AboutBackground from "../../assets/images/aboutBackground.png";

function MissionSection() {
  return (
    <Box width="100%" overflow="hidden" mb="100px">
      {/* Heading and description */}
      <Box textAlign="center" mb="50px">
        <Heading as="h3" size="lg">
          MİSSİYAMIZ
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Turpis venenatis tincidunt
          egestas vitae{" "}
        </Text>
      </Box>

      {/* Section with background image */}
      <Box
       borderRadius={10}
        position="relative"
        width="100%"
        height="400px" // Adjust the height as needed
        backgroundImage={`url(${AboutBackground})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        overflow="hidden"
      >
        <Box
       
          position="relative"
          zIndex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          color="white"
          textAlign="center"
          padding="0 20px" // Optional padding for text
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur. Nulla id pellentesque vel
            elit. Donec habitant in aliquet nunc volutpat nisi leo fermentum
            risus. Leo maecenas adipiscing nisl in eu gravida. Suspendisse
            laoreet etiam id id justo vitae odio.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default MissionSection;
