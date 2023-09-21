import { ChakraProvider, Box, extendTheme, theme } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import contactSlider from "../../assets/Images/edited-slide7.jpg";
import contactSlider1 from "../../assets/Images/edited-slide8.jpg";

export const ContactPageSlider = () => {
  return (
    <>
      <ChakraProvider theme={extendTheme(theme)}>
        <Box p={1}>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
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
