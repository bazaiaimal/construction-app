import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./NavBar";
import HomePage from "./pages/Home";
import Footer from "./Footer";

const CustomApp = () => {
  return (
    <Grid
      templateAreas={`"nav nav" 
        "main main"
        "footer footer"`}
    >
      <GridItem area="nav" bg="gold">
        <HStack>
          <NavBar />
        </HStack>
      </GridItem>
      <GridItem area="main">
        <HomePage />
      </GridItem>
      <GridItem area="footer" mt="25%">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default CustomApp;
