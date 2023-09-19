import Logo from "../assets/Images/akb.png";
import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <HStack
            padding={2}
            justifyContent="space-evenly"
            backgroundColor="black"
            color="white"
          >
            <a href="">
              <Image
                src={Logo}
                boxSize="100px"
                borderRadius="20px"
                alt="logo"
              />
            </a>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </HStack>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
