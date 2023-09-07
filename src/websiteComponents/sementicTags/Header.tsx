import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ColorModeSwitch } from "../webComponents/ColorModeSwitch";

export default function Header() {
  return (
    <>
      {/* <nav className="navbar bg-info">
        <div className="container-fluid">
          <a className="navbar-brand">Blogs Menu</a>
          <div>
            <Link to="/home" className="btn btn-primary text-white mx-1">
              Home
            </Link>
          </div>
        </div>
      </nav> */}

      <HStack>
        <ColorModeSwitch />
      </HStack>
    </>
  );
}
