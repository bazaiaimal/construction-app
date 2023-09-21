import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import Logo from "../assets/Images/akb.png";
import { Link } from "react-router-dom";
import { ColorModeSwitch } from "./colorModeSwitch/ColorModeSwitch";

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bgColor="black" color="white">
      <Flex p={4}>
        <Image src={Logo} boxSize="80px" borderRadius="20px" alt="logo" />
        <Spacer />
        <IconButton
          aria-label="Toggle navigation"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          display={{ base: "grid", md: "none" }}
        />
        <Box
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          alignItems="center"
        >
          <NavLink href="/home">
            <Link to="/home">Home</Link>
          </NavLink>
          <NavLink href="/about">
            <Link to="/about">About Us</Link>
          </NavLink>
          <NavLink href="/services">
            <Link to="/services">Services</Link>
          </NavLink>
          <NavLink href="/contact">
            <Link to="/contact">Contact Us</Link>
          </NavLink>
          <ColorModeSwitch />
        </Box>
      </Flex>
    </Box>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Text
    as="a"
    href={href}
    p="2"
    textDecoration="none"
    _hover={{ textDecoration: "none" }}
    whiteSpace="nowrap"
    fontWeight="bold"
    fontSize="2xl"
  >
    {children}
  </Text>
);

export default Navbar;
