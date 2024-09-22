import { useRef } from "react";
import {
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
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
  // { title: "Test", path: "/test" },
  { title: "Faq", path: "/faq" },
  { title: "Exams", path: "/exams" },
];

export const HamburgerDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box>
      <Button
        ref={btnRef}
        // colorScheme="teal"
        onClick={onOpen}
        variant="ghost"
        padding={0}
      >
        <List size={32} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        // size="lg"
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

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
