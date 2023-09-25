import React from "react";
import { Box, Image, Heading, Container, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
      <Container maxW="container.lg" width="100%">
        <Box display="flex" flexDirection="column" alignItems="center" my="5">
          <Image
            src={imageUrl}
            alt="Post Thumbnail"
            boxSize={350}
            mt="3"
            maxW="350px"
          />
          <Heading as="h2" mt="2" fontSize="xl" color={"gold"}>
            {title}
          </Heading>
          <Text mt="2" justifyContent="center" textAlign="justify" height={190}>
            {description}
          </Text>
          <Link to="/contact">
            <Button
              variant="outline"
              colorScheme="blue"
              borderColor="#3B71CA"
              color="#3B71CA"
            >
              Contact Engineer
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default HireForServices;
