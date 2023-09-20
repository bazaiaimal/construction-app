import { ChakraProvider, Box, extendTheme, theme } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../assets/Images/home slider 1.jpg";
import slider2 from "../../assets/Images/home slider 2.jpg";
import slider3 from "../../assets/Images/home slider 3.jpg";

export const HomePageSlider = () => {
  return (
    <>
      <ChakraProvider theme={extendTheme(theme)}>
        <Box p={1} className="img-fluid">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
            <div>
              <img src={slider1} alt="Image 1" />
            </div>
            <div>
              <img src={slider2} alt="Image 2" />
            </div>
            <div>
              <img src={slider3} alt="Image 3" />
            </div>
          </Carousel>
        </Box>
      </ChakraProvider>
    </>
  );
};
