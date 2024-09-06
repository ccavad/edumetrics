import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Linkedin from "../../assets/images/linkedin.svg";
import Facebook from "../../assets/images/facebook.svg";

import Twitter from "../../assets/images/twitter.png";

function Footer() {
  return (
    <>
      <Flex
        width="100%" /* Full viewport width */
        justifyContent={{
          base: "center",
          md: "space-between",
        }} /* Center on smaller screens, space between on medium+ */
        alignItems="center"
        pb="100px"
        gap={4}
        wrap="wrap"
        p={4} /* Add padding to avoid content touching screen edges */
        mb="100px"
      >
        {/* "All rights reserved" Text */}
        <Text
          minWidth="150px"
          textAlign={{
            base: "center",
            md: "left",
          }} /* Center text on smaller screens */
          alignSelf={{
            base: "center",
            md: "flex-end",
          }} /* Center self on smaller screens */
          flexGrow={1}
          mb={{ base: 4, md: 0 }} /* Add margin bottom on smaller screens */
        >
          All rights reserved © 2005-2022.
        </Text>

        {/* Company List */}
        <UnorderedList
          minWidth="150px"
          flexGrow={1}
          styleType="none"
          m={0}
          p={0}
          textAlign={{
            base: "center",
            md: "left",
          }} /* Center text on smaller screens */
          mb={{ base: 4, md: 0 }} /* Add margin bottom on smaller screens */
        >
          <Heading as="h5" size="md" mb={4}>
            Company
          </Heading>
          <Stack
            spacing="2rem"
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <ListItem>HAQQIMIZDA</ListItem>
            <ListItem>FƏNNLƏR</ListItem>
            <ListItem>PAKETLƏR</ListItem>
          </Stack>
        </UnorderedList>

        {/* For Customer List */}
        <UnorderedList
          minWidth="150px"
          flexGrow={1}
          styleType="none"
          m={0}
          p={0}
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: 4, md: 0 }}
        >
          <Heading as="h5" size="md" mb={4}>
            For customer
          </Heading>
          <Stack
            spacing="2rem"
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <ListItem>BLOG</ListItem>
            <ListItem>FAQ</ListItem>
            <ListItem>CONTACTS</ListItem>
          </Stack>
        </UnorderedList>

        {/* Contact List */}
        <UnorderedList
          minWidth="150px"
          flexGrow={1}
          styleType="none"
          m={0}
          p={0}
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: 4, md: 0 }}
        >
          <Heading as="h5" size="md" mb={4}>
            Contact
          </Heading>
          <Stack
            spacing="2rem"
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <ListItem>+994 12 567 89 45</ListItem>
            <ListItem>Street Nizami 3.2 Azerbaijan Baku</ListItem>
            <ListItem>info@xxxx.com</ListItem>
          </Stack>
        </UnorderedList>

        {/* Social Media Icons */}
        <Flex
          minWidth="150px"
          flexGrow={1}
          justifyContent={{
            base: "center",
            md: "flex-end",
          }} /* Center on smaller screens */
          alignItems="center"
          gap={4}
          mb={{ base: 4, md: 0 }} /* Add margin bottom on smaller screens */
        >
          <Image src={Linkedin} alt="LinkedIn" boxSize="24px" />{" "}
          {/* Adjust size for consistency */}
          <Image src={Facebook} alt="Facebook" boxSize="24px" />
          <Image src={Twitter} alt="Twitter" boxSize="24px" />
        </Flex>
      </Flex>
    </>
  );
}

export default Footer;
