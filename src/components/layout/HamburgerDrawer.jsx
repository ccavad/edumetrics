import { useRef } from "react";
import {
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { List } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const sidebarMenuList = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
  { title: "Faq", path: "/faq" },
  { title: "Exams", path: "/exams" },
  { title: "Statistics", path: "/statistics" },
];

export const HamburgerDrawer = ({ isDarkBgPages }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  // Define button styles based on isDarkBgPages
  const buttonStyles = {
    color: isDarkBgPages ? "#ffffff" : "#111", // Change color based on the page
    bg: "transparent", // Keep background transparent
    _hover: {
      bg: isDarkBgPages ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)", // Light hover effect
    },
  };

  return (
    <Box>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        padding={0}
        sx={buttonStyles} // Apply conditional styles
      >
        <List size={32} color={buttonStyles.color} /> {/* Ensure icon color matches button text */}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <UnorderedList styleType="none">
              {sidebarMenuList.map((menu, ind) => (
                <ListItem key={ind}>
                  <NavLink to={menu.path}>{menu.title}</NavLink>
                </ListItem>
              ))}
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
