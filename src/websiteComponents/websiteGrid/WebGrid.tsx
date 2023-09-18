import { SimpleGrid } from "@chakra-ui/react";
import { Home } from "../pages/Home";

export const WebGrid = () => {
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 4, lg: 5, xl: 4 }}>
        <Home />
      </SimpleGrid>
    </>
  );
};
