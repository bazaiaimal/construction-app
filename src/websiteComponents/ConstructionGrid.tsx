import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./NavBar";
import HomePage from "./pages/Home";
import About from "./pages/About";
import { Services } from "./pages/Services";
import ContactPage from "./pages/Contact";

export const ConstructionGrid = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <GridItem area="main">
          <Box>
            <HomePage id={0} type={""} description={""} />
            <About />
            <Services />
            <ContactPage />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default ConstructionGrid;
