import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import LightBulb from "../../assets/images/light.png";
import Arrow from "../../assets/images/arrow.png";
import Books from "../../assets/images/books.png";
import Presentation from "../../assets/images/presentation.png";
import Weakness from "../../assets/images/weakness.png";
import Math from "../../assets/images/math.png";
import Math2 from "../../assets/images/math2.png";
import Azlang from "../../assets/images/azlang.png";
import HomeAvatar from "../../assets/images/HomeAvatar.png";
import Badge from "../../assets/images/badge.png";
import Footer from "../../components/layout/Footer";

export const HomeSection = () => {
  return (
    <>
      <section>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          mb="100px"
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
          mb="100px"
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
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          mb="100px"
        >
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
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          mb="100px"
        >
          <Heading as="h3" size="lg" mb="100px">
            LİDERLƏR LÖVHƏSİ!
          </Heading>

          <Flex
            justifyContent="center"
            gap={{ base: "60px", lg: 4 }}
            direction={{ base: "column", lg: "row" }}
            alignItems="center"
          >
            <Box
              as="section"
              w="380px"
              h="250px"
              borderRadius="10px"
              border="3px solid #4AE49D"
              position="relative"
            >
              <Image
                src={Badge}
                position="absolute"
                bg="white"
                borderRadius="100%"
                border="8px solid white"
                top="-25px"
                left="20px"
              />

              <Image
                src={HomeAvatar}
                position="absolute"
                top="25px"
                left="155px"
              />
              <Box h="70px" bg="#4AE49E" mb={10} />

              <Flex
                justifyContent="center"
                alignItems="center"
                gap={2}
                direction="column"
                textAlign="center" // Added textAlign="center" to center text
              >
                <Heading as="h5" size="md">
                  A. Orucov
                </Heading>
                <Text>
                  Riyaziyyat fənnindən sınaqlarda May ayı ərzində göstərdiyi
                  nəticə
                </Text>
                <Heading as="h1" color="#4AE49E">
                  20/20
                </Heading>
              </Flex>
            </Box>

            <Box
              as="section"
              w="380px"
              h="250px"
              borderRadius="10px"
              border="3px solid #FFA753"
              position="relative"
            >
              <Image
                src={Badge}
                position="absolute"
                bg="white"
                borderRadius="100%"
                border="8px solid white"
                top="-25px"
                left="20px"
              />

              <Image
                src={HomeAvatar}
                position="absolute"
                top="25px"
                left="155px"
              />
              <Box h="70px" bg="#FFA753" mb={10} />

              <Flex
                justifyContent="center"
                alignItems="center"
                gap={2}
                direction="column"
                textAlign="center" // Added textAlign="center" to center text
              >
                <Heading as="h5" size="md">
                  A. Orucov
                </Heading>
                <Text>
                  Riyaziyyat fənnindən sınaqlarda May ayı ərzində göstərdiyi
                  nəticə
                </Text>
                <Heading as="h1" color="#FFA753">
                  20/20
                </Heading>
              </Flex>
            </Box>

            <Box
              as="section"
              w="380px"
              h="250px"
              borderRadius="10px"
              border="3px solid #28B5FF"
              position="relative"
            >
              <Image
                src={Badge}
                position="absolute"
                bg="white"
                borderRadius="100%"
                border="8px solid white"
                top="-25px"
                left="20px"
              />

              <Image
                src={HomeAvatar}
                position="absolute"
                top="25px"
                left="155px"
              />
              <Box h="70px" bg="#28B5FF" mb={10} />

              <Flex
                justifyContent="center"
                alignItems="center"
                gap={2}
                direction="column"
                textAlign="center" // Added textAlign="center" to center text
              >
                <Heading as="h5" size="md">
                  A. Orucov
                </Heading>
                <Text>
                  Riyaziyyat fənnindən sınaqlarda May ayı ərzində göstərdiyi
                  nəticə
                </Text>
                <Heading as="h1" color="#28B5FF">
                  20/20
                </Heading>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </section>

      <section>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          mb="100px"
        >
          <Heading as="h3" size="lg" mb="100px">
            TƏHSİL PAKETLƏRİMİZ
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
              p="30px"
              borderRadius="10px"
              border="1px solid black"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                // gap={8}
                direction="column"
                textAlign="center" // Added textAlign="center" to center text
              >
                <Heading as="h5" size="md">
                  Standart Paket
                </Heading>
                <Heading as="h5" size="lg" mt="40px">
                  $80 / Ay
                </Heading>
                <Text mt="25px">Lorem ipsum dolor sit amet consectetur.</Text>
                <Button bg="#A4D7F2" w="100%" mt="40px">
                  QEYDIYYATDAN KEÇ
                </Button>
              </Flex>
            </Box>
            <Box
              bg="transparent"
              as="section"
              w="380px"
              p="30px"
              borderRadius="10px"
              border="1px solid black"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                // gap={8}
                direction="column"
                textAlign="center" // Added textAlign="center" to center text
              >
                <Heading as="h5" size="md">
                  Standart Paket
                </Heading>
                <Heading as="h5" size="lg" mt="40px">
                  $80 / Ay
                </Heading>
                <Text mt="25px">Lorem ipsum dolor sit amet consectetur.</Text>
                <Button bg="#A4D7F2" w="100%" mt="40px">
                  QEYDIYYATDAN KEÇ
                </Button>
              </Flex>
            </Box>
            <Box
              bg="transparent"
              as="section"
              w="380px"
              p="30px"
              borderRadius="10px"
              border="1px solid black"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                // gap={8}
                direction="column"
                textAlign="center" // Added textAlign="center" to center text
              >
                <Heading as="h5" size="md">
                  Standart Paket
                </Heading>
                <Heading as="h5" size="lg" mt="40px">
                  $80 / Ay
                </Heading>
                <Text mt="25px">Lorem ipsum dolor sit amet consectetur.</Text>
                <Button bg="#A4D7F2" w="100%" mt="40px">
                  QEYDIYYATDAN KEÇ
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </section>
      <Footer />
    </>
  );
};
