import React from "react";
import { Button, Box, Text } from "@chakra-ui/react";

const SlideContent = ({ imageUrl, title, description }: any) => {
  return (
    <Box>
      <img src={imageUrl} alt={title} />
      <Text fontSize="xl">{title}</Text>
      <Text fontSize="lg">{description}</Text>
      <Button colorScheme="teal">Learn More</Button>
    </Box>
  );
};

export default SlideContent;
