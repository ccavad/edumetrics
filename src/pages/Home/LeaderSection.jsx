import React from "react";
import { Flex, Heading } from "@chakra-ui/react"; // Import necessary Chakra UI components
import LeaderCard from "./LeaderCard"; // Correct path to LeaderCard component
import Badge from "../../assets/images/badge.png"; // Correct path to Badge image
import HomeAvatar from "../../assets/images/homeAvatar.png"; // Correct path to HomeAvatar image

// Data array simulating an API response
const leadersData = [
  {
    id: 1,
    borderColor: "#4AE49D",
    badgeSrc: Badge,
    avatarSrc: HomeAvatar,
    name: "A. Orucov",
    description:
      "Riyaziyyat fənnindən sınaqlarda May ayı ərzində göstərdiyi nəticə",
    score: "20/20",
    scoreColor: "#4AE49E",
  },
  {
    id: 2,
    borderColor: "#FFA753",
    badgeSrc: Badge,
    avatarSrc: HomeAvatar,
    name: "A. Orucov",
    description:
      "Riyaziyyat fənnindən sınaqlarda May ayı ərzində göstərdiyi nəticə",
    score: "20/20",
    scoreColor: "#FFA753",
  },
  {
    id: 3,
    borderColor: "#28B5FF",
    badgeSrc: Badge,
    avatarSrc: HomeAvatar,
    name: "A. Orucov",
    description:
      "Riyaziyyat fənnindən sınaqlarda May ayı ərzində göstərdiyi nəticə",
    score: "20/20",
    scoreColor: "#28B5FF",
  },
];

export default function LeadersSection() {
  return (
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
        {leadersData.map(
          ({
            id,
            borderColor,
            badgeSrc,
            avatarSrc,
            name,
            description,
            score,
            scoreColor,
          }) => (
            <LeaderCard
              key={id}
              borderColor={borderColor}
              badgeSrc={badgeSrc}
              avatarSrc={avatarSrc}
              name={name}
              description={description}
              score={score}
              scoreColor={scoreColor}
            />
          )
        )}
      </Flex>
    </Flex>
  );
}
