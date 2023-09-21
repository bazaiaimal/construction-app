import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Link,
  Container,
  Card,
  CardBody,
} from "@chakra-ui/react";

interface HireForServicesProps {
  imageUrl: string;
  title: string;
  description: string;
}

const HireForServices: React.FC<HireForServicesProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <>
      <Container>
        <Box className="elementor-widget-container limestone-post-boxes">
          <Box className="limestone-post-box thumb-top meta-before-title">
            <Image src={imageUrl} alt="Post Thumbnail" boxSize={350} />
            <Box className="post-content">
              <Heading padding={2} as="h2" className="post-title">
                {title}
              </Heading>
              <Container padding={2}>{description}</Container>
              <Link
                href="/contact"
                className="btn btn-outline-primary"
                color="#3B71CA"
                _hover={{ textDecoration: "none" }}
              >
                Contact Engineer
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HireForServices;