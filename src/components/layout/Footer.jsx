import React from "react";
import {
  Flex,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Linkedin from "../../assets/images/linkedin.svg";
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.png";

function Footer() {
  return (
    <>
      <Flex
        width="100%"
        justifyContent={{
          base: "center",
          md: "space-between",
        }}
        alignItems="center"
        pb="100px"
        gap={4}
        wrap="wrap"
        p={4}
        mb="100px"
      >
        <Text
          minWidth="150px"
          textAlign={{
            base: "center",
            md: "left",
          }}
          alignSelf={{
            base: "center",
            md: "flex-end",
          }}
          flexGrow={1}
          mb={{ base: 4, md: 0 }}
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
          }}
          mb={{ base: 4, md: 0 }}
        >
          <Heading as="h5" size="md" mb={8}>
            Company
          </Heading>
          <Stack
            spacing="2rem"
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <ListItem>
              <Link to="/about">HAQQIMIZDA</Link>
            </ListItem>
            <ListItem>
              <Link to="/courses">FƏNNLƏR</Link>
            </ListItem>
            <ListItem>
              <Link to="/packages">PAKETLƏR</Link>
            </ListItem>
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
          <Heading as="h5" size="md" mb={8}>
            For customer
          </Heading>
          <Stack
            spacing="2rem"
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <ListItem>
              <Link to="/blog">BLOG</Link>
            </ListItem>
            <ListItem>
              <Link to="/faq">FAQ</Link>
            </ListItem>
            <ListItem>
              <Link to="/contacts">CONTACTS</Link>
            </ListItem>
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
          <Heading as="h5" size="md" mb={8}>
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
          }}
          alignItems="center"
          alignSelf="flex-start"
          gap={4}
          mb={{ base: 4, md: 0 }}
        >
          <Image src={Linkedin} alt="LinkedIn" boxSize="24px" />
          <Image src={Facebook} alt="Facebook" boxSize="24px" />
          <Image src={Twitter} alt="Twitter" boxSize="24px" />
        </Flex>
      </Flex>
    </>
  );
}

export default Footer;
