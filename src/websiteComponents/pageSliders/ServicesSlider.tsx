import { ChakraProvider, Box, extendTheme, theme } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import serviceSlider from "../../assets/Images/edited-slide3.jpg";
import serviceSlider1 from "../../assets/Images/editied-slide4.jpg";

export const ServicePageSlider = () => {
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
              <img src={serviceSlider} alt="service Slider" />
            </div>
            <div>
              <img src={serviceSlider1} alt="service Slider" />
            </div>
          </Carousel>
        </Box>
      </ChakraProvider>
    </>
  );
};
