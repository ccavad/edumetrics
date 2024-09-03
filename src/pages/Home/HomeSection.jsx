import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import LightBulb from "../../assets/images/light.png";
import Arrow from "../../assets/images/arrow.png";
import Books from "../../assets/images/books.png";
import Presentation from "../../assets/images/presentation.png";
import Weakness from "../../assets/images/weakness.png";
import Math from "../../assets/images/math.png";
import Math2 from "../../assets/images/math2.png";
import Azlang from "../../assets/images/azlang.png";

export const HomeSection = () => {
  return (
    <>
      <section>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          mb="50px"
        >
          <Heading as="h3" size="lg" mb={8}>
            BİZİMLƏ SINA!
          </Heading>

          <Flex
            justifyContent="center"
            gap={4}
            direction={{ base: "column", lg: "row" }}
            alignItems="center"
          >
            <Box
              bg="#FFA753"
              as="section"
              w="380px"
              textAlign="center"
              p={8}
              display="flex"
              flexDirection="column"
              alignItems="center"
              borderRadius="10px"
            >
              <Image src={Arrow} mb={8} />
              <Heading as="h3" size="md">
                YARIŞLAR
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur. Turpis venenatis
                tincidunt
              </Text>
            </Box>

            <Box
              bg="#A4D7F2"
              w="380px"
              textAlign="center"
              p={8}
              display="flex"
              flexDirection="column"
              alignItems="center"
              borderRadius="10px"
            >
              <Image src={LightBulb} mb={8} />
              <Heading as="h3" size="md">
                SINAQLAR
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur. Turpis venenatis
                tincidunt
              </Text>
            </Box>
          </Flex>
        </Flex>
      </section>

      <section>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          mb="50px"
        >
          <Heading as="h3" size="lg" mb="100px">
            BİZİM SERVİSLƏR!
          </Heading>
          <Flex
            justifyContent="center"
            gap={{ base: "60px", lg: 4 }}
            direction={{ base: "column", lg: "row" }}
            alignItems="center"
          >
            <Box
              bg="transparent"
              as="section"
              w="380px"
              p={4}
              pt={20}
              borderRadius="10px"
              border="1px solid black"
              position="relative"
            >
              <Image
                src={Books}
                position="absolute"
                bottom="100px"
                left="230px"
                bg="white"
                border="15px solid white"
              />
              <Heading as="h5" size="md">
                FƏNLƏR
              </Heading>
              <Text>Lorem ipsum dolor sit amet consectetur.</Text>
            </Box>
            <Box
              bg="transparent"
              as="section"
              w="380px"
              p={4}
              pt={20}
              borderRadius="10px"
              border="1px solid black"
              position="relative"
            >
              <Image
                src={Presentation}
                position="absolute"
                bottom="80px"
                left="230px"
                bg="white"
                border="15px solid white"
              />
              <Heading as="h5" size="md">
                ABİTURİYENT HAZIRLIĞI
              </Heading>
              <Text>Lorem ipsum dolor sit amet consectetur.</Text>
            </Box>
            <Box
              bg="transparent"
              as="section"
              w="380px"
              p={4}
              pt={20}
              borderRadius="10px"
              border="1px solid black"
              position="relative"
            >
              <Image
                src={Weakness}
                position="absolute"
                bottom="90px"
                left="230px"
                bg="white"
                border="15px solid white"
              />
              <Heading as="h5" size="md">
                ZƏİFLİKLƏR
              </Heading>
              <Text>Lorem ipsum dolor sit amet consectetur.</Text>
            </Box>
          </Flex>
        </Flex>
      </section>

      <section>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Heading as="h3" size="lg" mb={8}>
            TOP FƏNLƏR!
          </Heading>
          <Flex
            justifyContent="center"
            gap={4}
            direction={{ base: "column", lg: "row" }}
            alignItems="center"
          >
            <Box
              bg="transparent"
              as="section"
              w="380px"
              p="50px 30px"
              borderRadius="10px"
              border="1px solid #4AE49D"
            >
              <Flex justifyContent="center" gap={4} alignItems="center">
                <Image src={Math} />
                <Box>
                  <Heading as="h5" size="md">
                    Riyaziyyat
                  </Heading>
                  <Text>Lorem ipsum dolor sit amet consectetur. </Text>
                </Box>
              </Flex>
            </Box>

            <Box
              bg="transparent"
              as="section"
              w="380px"
              p="50px 30px"
              borderRadius="10px"
              border="1px solid #FFA753"
            >
              <Flex justifyContent="center" gap={4} alignItems="center">
                <Image src={Azlang} />
                <Box>
                  <Heading as="h5" size="md">
                    Azərbaycan Dili
                  </Heading>
                  <Text>Lorem ipsum dolor sit amet consectetur. </Text>
                </Box>
              </Flex>
            </Box>

            <Box
              bg="transparent"
              as="section"
              w="380px"
              p="50px 30px"
              borderRadius="10px"
              border="1px solid #28B5FF"
            >
              <Flex justifyContent="center" gap={4} alignItems="center">
                <Image src={Math2} />
                <Box>
                  <Heading as="h5" size="md">
                    Riyaziyyat-2
                  </Heading>
                  <Text>Lorem ipsum dolor sit amet consectetur. </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </section>

      <section>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Heading as="h3" size="lg" mb={8}>
             LİDERLƏR LÖVHƏSİ!
          </Heading>
        </Flex>
      </section>
    </>
  );
};
