import { ChakraProvider, Box, extendTheme, theme } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import contactSlider from "../../assets/Images/aboutSlider.webp";
import contactSlider1 from "../../assets/Images/home slider 3.jpg";

export const ContactPageSlider = () => {
  return (
    <>
      <ChakraProvider theme={extendTheme(theme)}>
        <Box p={5}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
            <div>
              <img src={contactSlider} alt="contact Slider" />
            </div>
            <div>
              <img src={contactSlider1} alt="contact Slider" />
            </div>
          </Carousel>
        </Box>
      </ChakraProvider>
    </>
  );
};
