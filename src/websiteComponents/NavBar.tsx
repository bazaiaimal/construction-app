// import Logo from "../assets/Images/akb.png";
// // import { HStack, Image } from "@chakra-ui/react";
// // import { Link } from "react-router-dom";
// import { HStack, Image } from "@chakra-ui/react";
// import "../App.css";
// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNav = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     // <header>
//     //   <nav>
//     //     <ul>
//     //       <HStack
//     //         padding={2}
//     //         justifyContent="space-evenly"
//     //         backgroundColor="black"
//     //         color="white"
//     //       >
//     //         <a href="">
//     //           <Image
//     //             src={Logo}
//     //             boxSize="100px"
//     //             borderRadius="20px"
//     //             alt="logo"
//     //           />
//     //         </a>
//     //         <li>
//     //           <Link to="/home">Home</Link>
//     //         </li>
//     //         <li>
//     //           <Link to="/about">About Us</Link>
//     //         </li>
//     //         <li>
//     //           <Link to="/services">Services</Link>
//     //         </li>
//     //         <li>
//     //           <Link to="/contact">Contact Us</Link>
//     //         </li>
//     //       </HStack>
//     //     </ul>
//     //   </nav>
//     // </header>
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <Image src={Logo} boxSize="100px" borderRadius="20px" alt="logo" />
//         </div>

//         <div className={isOpen ? "navbar-menu active" : "navbar-menu"}>
//           {/* <HStack> */}
//           <ul className="navbar-links">
//             <li className="navbar-item">
//               <a href="#home" className="navbar-link">
//                 Home
//               </a>
//             </li>
//             <li className="navbar-item">
//               <a href="#about" className="navbar-link">
//                 About
//               </a>
//             </li>
//             <li className="navbar-item">
//               <a href="#services" className="navbar-link">
//                 Services
//               </a>
//             </li>
//             <li className="navbar-item">
//               <a href="#contact" className="navbar-link">
//                 Contact
//               </a>
//             </li>
//           </ul>
//           {/* </HStack> */}
//         </div>

//         <div className="navbar-toggle" onClick={toggleNav}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

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
    _hover={{ textDecoration: "underline" }}
    whiteSpace="nowrap"
    fontWeight="bold"
    fontSize="2xl"
  >
    {children}
  </Text>
);

export default Navbar;
