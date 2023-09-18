import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { NavBar } from "../NavBar";
import { Home } from "../pages/Home";
import Footer from "../Footer";

export const WebMainComponent = () => {
  return (
    <>
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
          <Home />
        </GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};
