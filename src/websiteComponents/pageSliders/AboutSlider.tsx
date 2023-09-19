import {
  ChakraProvider,
  Box,
  extendTheme,
  theme,
  Text,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import aboutSlider from "../../assets/Images/aboutSlider.webp";
import aboutSlider1 from "../../assets/Images/home slider 3.jpg";

export const AboutPageSlider = () => {
  return (
    <>
      <ChakraProvider theme={extendTheme(theme)}>
        <Box p={5}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
            <div>
              <img src={aboutSlider} alt="About Slider" />
            </div>
            <div>
              <img src={aboutSlider1} alt="About Slider" />
            </div>
          </Carousel>
        </Box>
      </ChakraProvider>
    </>
  );
};