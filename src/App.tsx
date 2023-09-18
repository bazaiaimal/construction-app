import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { NavBar } from "./websiteComponents/NavBar";
import Footer from "./websiteComponents/Footer";
import HomePage from "./websiteComponents/pages/Home";

function App() {
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
          <HomePage />
        </GridItem>
        <GridItem area="footer" mt="25%">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
